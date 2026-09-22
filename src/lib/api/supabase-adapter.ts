import { getSupabase } from '../supabase';
import type { FoodlineApi } from './ports';
import type {
  ActionItem,
  ActivityLine,
  Company,
  HomeSummary,
  HubMetric,
  Item,
  PurchaseOrder,
  ReceivingTask,
  ScannerSession,
  Session,
  StockStatus,
  UUID,
} from './types';
import * as workos from '@/features/auth/workos';

/**
 * Live adapter. Every call is an RPC — there are no direct table reads, because
 * the ERP retired that path ("Use the Supabase Data API, RLS-protected views,
 * and approved RPCs" — supabase/functions/api-v1/index.ts returns 410).
 *
 * RPC names and argument shapes come from the generated `database.types.ts`,
 * copied verbatim from the ERP repo. Regenerate both together:
 *   supabase gen types typescript --project-id fzavogttmmyyeuguvmry
 */

type Row = Record<string, unknown>;

const str = (v: unknown, fallback = ''): string => (typeof v === 'string' ? v : fallback);
const num = (v: unknown, fallback = 0): number => {
  const n = typeof v === 'string' ? Number(v) : typeof v === 'number' ? v : NaN;
  return Number.isFinite(n) ? n : fallback;
};
const numOrNull = (v: unknown): number | null => {
  if (v === null || v === undefined) return null;
  const n = typeof v === 'string' ? Number(v) : typeof v === 'number' ? v : NaN;
  return Number.isFinite(n) ? n : null;
};

function asRows(payload: unknown, ...keys: string[]): Row[] {
  if (Array.isArray(payload)) return payload as Row[];
  if (payload && typeof payload === 'object') {
    for (const key of keys) {
      const value = (payload as Row)[key];
      if (Array.isArray(value)) return value as Row[];
    }
  }
  return [];
}

function deriveStatus(onHand: number, par: number | null): StockStatus {
  if (onHand <= 0) return 'out';
  if (par === null || par === 0) return 'ok';
  if (onHand < par * 0.5) return 'low';
  if (onHand > par * 1.5) return 'over';
  return 'ok';
}

function toItem(r: Row): Item {
  const onHand = num(r.on_hand ?? r.quantity_on_hand);
  const parLevel = numOrNull(r.par_level ?? r.target_level);
  return {
    id: str(r.id ?? r.product_id),
    sku: str(r.sku ?? r.product_sku),
    name: str(r.name ?? r.product_name),
    category: (r.category as string | null) ?? null,
    uom: str(r.uom_code ?? r.uom, 'EA'),
    onHand,
    onOrder: num(r.on_order ?? r.quantity_on_order),
    parLevel,
    daysCover: numOrNull(r.days_cover),
    lastCost: numOrNull(r.last_cost ?? r.unit_cost),
    primaryVendorName: (r.primary_vendor_name as string | null) ?? null,
    status: (r.status as StockStatus) ?? deriveStatus(onHand, parLevel),
  };
}

function toPurchaseOrder(r: Row): PurchaseOrder {
  return {
    id: str(r.id ?? r.purchase_order_id),
    number: str(r.document_number ?? r.number ?? r.po_number),
    vendorId: str(r.vendor_id),
    vendorName: str(r.vendor_name),
    status: (r.status as PurchaseOrder['status']) ?? 'draft',
    expectedAt: (r.expected_at as string | null) ?? (r.expected_delivery_date as string | null) ?? null,
    total: numOrNull(r.total ?? r.total_amount),
    lineCount: num(r.line_count),
  };
}

function toReceivingTask(r: Row): ReceivingTask {
  return {
    taskId: str(r.task_id),
    goodsReceiptId: str(r.goods_receipt_id),
    purchaseOrderVersionLineId: str(r.purchase_order_version_line_id),
    productId: str(r.product_id),
    productSku: str(r.product_sku),
    productName: str(r.product_name),
    lineNumber: num(r.line_number),
    uomCode: str(r.ordered_uom_code, 'EA'),
    orderedBaseQuantity: num(r.ordered_base_quantity),
    priorReceivedBaseQuantity: num(r.prior_received_base_quantity),
    remainingBaseQuantity: num(r.remaining_base_quantity),
    receiptDocumentNumber: str(r.receipt_document_number),
    receiptRowVersion: num(r.receipt_row_version),
    isEligible: r.is_eligible === true,
    blockerCode: (r.blocker_code as string | null) || null,
    tracksLots: r.track_lots === true,
    tracksExpiry: r.track_expiry === true,
    catchWeight: r.catch_weight === true,
    temperatureRequired: r.temperature_required === true,
  };
}

// The generated Database type is huge and RPC arg types are exact; the app
// intentionally goes through one loosely-typed call helper rather than
// threading 343 signatures through the UI. Payload shapes are validated by the
// mappers above, which is where a schema change should surface.
type Rpc = (name: string, args?: Record<string, unknown>) => Promise<{ data: unknown; error: { message: string } | null }>;

async function call(companyId: UUID | null, name: string, args?: Record<string, unknown>): Promise<unknown> {
  const client = getSupabase(companyId);
  const { data, error } = await (client.rpc as unknown as Rpc)(name, args);
  if (error) throw new Error(`${name}: ${error.message}`);
  return data;
}

function toSession(payload: unknown): Session {
  const p = (payload ?? {}) as Row;
  const companies = asRows(p.companies).map(
    (c): Company => ({
      id: str(c.id),
      name: str(c.name),
      slug: str(c.slug),
      roleKey: str(c.roleKey ?? c.role_key),
      permissionKeys: Array.isArray(c.permissionKeys)
        ? (c.permissionKeys as string[])
        : Array.isArray(c.permission_keys)
          ? (c.permission_keys as string[])
          : [],
    })
  );
  return {
    actorId: str(p.actorId ?? p.actor_id),
    companyId: (p.companyId as string | null) ?? (p.company_id as string | null) ?? null,
    companies,
  };
}

export const supabaseApi: FoodlineApi = {
  session: {
    signIn: workos.signIn,
    async signOut() {
      await workos.signOut();
    },
    async resolve(companyId) {
      if (!(await workos.hasStoredSession())) return null;
      const payload = await call(companyId, 'application_session_context', { p_company_id: companyId });
      return toSession(payload);
    },
  },

  home: {
    /**
     * Assembled from the commercial dashboard RPC. The ERP's payload shape for
     * `needs_you` / `across_company` is not pinned down yet, so unknown keys are
     * simply absent rather than guessed — the screen degrades to tiles only.
     */
    async summary(companyId): Promise<HomeSummary> {
      const payload = (await call(companyId, 'get_current_commercial_dashboard')) as Row;
      const tiles = asRows(payload, 'metrics', 'tiles', 'kpis').map((r) => ({
        key: str(r.key ?? r.id),
        label: str(r.label ?? r.title),
        value: str(r.value ?? r.formatted_value),
        delta: numOrNull(r.delta ?? r.change_percent),
        tone: (r.tone as HomeSummary['tiles'][number]['tone']) ?? ('neutral' as const),
      }));
      const needsYou = asRows(payload.needs_you ?? payload.needsYou).map(
        (r): ActionItem => ({
          key: str(r.key ?? r.id),
          title: str(r.title ?? r.label),
          workspace: str(r.workspace ?? r.module),
          count: num(r.count),
          route: (r.route as string | null) ?? null,
        })
      );
      const acrossCompany = asRows(payload.across_company ?? payload.acrossCompany).map(
        (r): ActivityLine => ({
          key: str(r.key ?? r.id),
          label: str(r.label),
          detail: str(r.detail ?? r.summary),
          route: (r.route as string | null) ?? null,
        })
      );
      const ai = payload.ai_summary ?? payload.aiSummary;
      return {
        greetingName: str(payload.greeting_name ?? payload.greetingName),
        tiles: tiles.slice(0, 2),
        needsYou,
        acrossCompany,
        aiSummary:
          ai && typeof ai === 'object'
            ? {
                body: str((ai as Row).body ?? (ai as Row).summary),
                actionLabel: str((ai as Row).action_label ?? (ai as Row).actionLabel, 'Review impact'),
              }
            : null,
      };
    },
  },

  hub: {
    async metrics(companyId) {
      const payload = await call(companyId, 'get_current_commercial_dashboard');
      const rows = asRows(payload, 'metrics', 'tiles', 'kpis');
      return rows.map(
        (r): HubMetric => ({
          key: str(r.key ?? r.id),
          label: str(r.label ?? r.title),
          value: str(r.value ?? r.formatted_value),
          delta: numOrNull(r.delta ?? r.change_percent),
          tone: (r.tone as HubMetric['tone']) ?? 'neutral',
        })
      );
    },
  },

  items: {
    async list(companyId, params) {
      const payload = await call(companyId, 'product_directory_snapshot', { p_company_id: companyId });
      let rows = asRows(payload, 'products', 'items', 'rows').map(toItem);
      const q = params?.search?.trim().toLowerCase();
      if (q) rows = rows.filter((i) => i.name.toLowerCase().includes(q) || i.sku.toLowerCase().includes(q));
      if (params?.onlyBelowPar) rows = rows.filter((i) => i.status === 'low' || i.status === 'out');
      return rows;
    },
  },

  purchaseOrders: {
    async list(companyId, params) {
      const payload = await call(companyId, 'purchase_order_directory_snapshot', { p_company_id: companyId });
      const rows = asRows(payload, 'purchaseOrders', 'purchase_orders', 'rows').map(toPurchaseOrder);
      return params?.openOnly === false
        ? rows
        : rows.filter((o) => o.status !== 'received' && o.status !== 'cancelled');
    },
  },

  receiving: {
    async startSession(companyId, warehouseId, deviceId) {
      const payload = (await call(companyId, 'start_scanner_session', {
        p_warehouse_id: warehouseId,
        p_device_id: deviceId,
      })) as Row;
      return {
        sessionId: str(payload.session_id ?? payload.sessionId),
        rowVersion: num(payload.row_version ?? payload.rowVersion, 1),
        warehouseId,
      } satisfies ScannerSession;
    },

    async closeSession(companyId, session) {
      await call(companyId, 'close_scanner_session', {
        p_session_id: session.sessionId,
        p_expected_row_version: session.rowVersion,
      });
    },

    async queue(companyId, goodsReceiptId) {
      const payload = await call(companyId, 'get_governed_scanner_receiving_queue', {
        p_goods_receipt_id: goodsReceiptId,
      });
      return asRows(payload).map(toReceivingTask);
    },

    async submitScan(companyId, input) {
      await call(companyId, 'submit_scanner_scan', {
        p_scanner_session_id: input.session.sessionId,
        p_expected_session_row_version: input.session.rowVersion,
        p_claim_id: input.claimId,
        p_task_id: input.taskId,
        p_task_type: input.taskType,
        p_expected_task_row_version: input.taskRowVersion,
        p_expected_requirement_id: input.expectedRequirementId,
        p_raw_value: input.rawValue,
        p_symbology: input.symbology,
        p_input_method: input.inputMethod,
        p_idempotency_key: input.idempotencyKey,
        p_client_occurred_at: new Date().toISOString(),
      });
    },
  },
};
