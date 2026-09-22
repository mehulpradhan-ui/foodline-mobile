import { supabase } from '../supabase';
import type { FoodlineApi } from './ports';
import type { HubMetric, Item, PurchaseOrder, Session, StockStatus } from './types';

/**
 * ⚠️ WIRING REQUIRED — one place, on purpose.
 *
 * The live ERP's table/view/function names are not guessed here. Fill these in
 * from the real Supabase project (or point them at purpose-built views), then
 * adjust the three mappers below. Nothing outside this file needs to change.
 *
 * Recommended: create read-optimised views in Supabase (`mobile_items_v`,
 * `mobile_purchase_orders_v`, `mobile_hub_metrics_v`) so the app is insulated
 * from ERP schema churn and RLS is expressed once, at the view.
 */
const TABLES = {
  items: 'mobile_items_v',
  purchaseOrders: 'mobile_purchase_orders_v',
  purchaseOrderLines: 'mobile_purchase_order_lines_v',
  hubMetrics: 'mobile_hub_metrics_v',
  profiles: 'profiles',
} as const;

/** Business logic that must match the ERP lives server-side, not here. */
const RPC = {
  recordReceipt: 'mobile_record_receipt',
} as const;

function deriveStatus(onHand: number, par: number | null): StockStatus {
  if (onHand <= 0) return 'out';
  if (par === null || par === 0) return 'ok';
  if (onHand < par * 0.5) return 'low';
  if (onHand > par * 1.5) return 'over';
  return 'ok';
}

 
function toItem(row: any): Item {
  const onHand = Number(row.on_hand ?? 0);
  const parLevel = row.par_level === null || row.par_level === undefined ? null : Number(row.par_level);
  return {
    id: String(row.id),
    sku: String(row.sku ?? ''),
    name: String(row.name ?? ''),
    category: row.category ?? null,
    uom: String(row.uom ?? 'EA'),
    onHand,
    onOrder: Number(row.on_order ?? 0),
    parLevel,
    daysCover: row.days_cover === null || row.days_cover === undefined ? null : Number(row.days_cover),
    lastCost: row.last_cost === null || row.last_cost === undefined ? null : Number(row.last_cost),
    primaryVendorName: row.primary_vendor_name ?? null,
    status: (row.status as StockStatus) ?? deriveStatus(onHand, parLevel),
  };
}

function toPurchaseOrder(row: any): PurchaseOrder {
  return {
    id: String(row.id),
    number: String(row.number ?? row.po_number ?? ''),
    vendorId: String(row.vendor_id ?? ''),
    vendorName: String(row.vendor_name ?? ''),
    status: row.status ?? 'draft',
    expectedAt: row.expected_at ?? null,
    total: row.total === null || row.total === undefined ? null : Number(row.total),
    lineCount: Number(row.line_count ?? 0),
  };
}
 

type RpcFn = (
  fn: string,
  args: Record<string, unknown>
) => Promise<{ data: unknown; error: { message: string } | null }>;

function unwrap<T>(data: T | null, error: { message: string } | null, what: string): T {
  if (error) throw new Error(`${what} failed: ${error.message}`);
  if (data === null) throw new Error(`${what} returned no data`);
  return data;
}

export const supabaseApi: FoodlineApi = {
  auth: {
    async signInWithPassword(email, password) {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw new Error(error.message);
      const user = data.user;
      if (!user) throw new Error('Sign-in returned no user');
      return mapSession(user.id, user.email ?? email);
    },
    async signOut() {
      const { error } = await supabase.auth.signOut();
      if (error) throw new Error(error.message);
    },
    async getSession() {
      const { data } = await supabase.auth.getSession();
      const user = data.session?.user;
      if (!user) return null;
      return mapSession(user.id, user.email ?? '');
    },
  },

  hub: {
    async metrics() {
      const { data, error } = await supabase.from(TABLES.hubMetrics).select('*');
      const rows = unwrap(data, error, 'Load hub metrics');
       
      return (rows as any[]).map((r): HubMetric => ({
        key: String(r.key),
        label: String(r.label),
        value: String(r.value),
        delta: r.delta === null || r.delta === undefined ? null : Number(r.delta),
        tone: r.tone ?? 'neutral',
      }));
    },
  },

  items: {
    async list(params) {
      let q = supabase.from(TABLES.items).select('*').limit(params?.limit ?? 100);
      if (params?.search) q = q.or(`name.ilike.%${params.search}%,sku.ilike.%${params.search}%`);
      if (params?.onlyBelowPar) q = q.in('status', ['low', 'out']);
      const { data, error } = await q;
       
      return (unwrap(data, error, 'Load items') as any[]).map(toItem);
    },
    async byId(id) {
      const { data, error } = await supabase.from(TABLES.items).select('*').eq('id', id).maybeSingle();
      if (error) throw new Error(error.message);
      return data ? toItem(data) : null;
    },
    async byBarcode(barcode) {
      const { data, error } = await supabase.from(TABLES.items).select('*').eq('barcode', barcode).maybeSingle();
      if (error) throw new Error(error.message);
      return data ? toItem(data) : null;
    },
  },

  purchaseOrders: {
    async list(params) {
      let q = supabase.from(TABLES.purchaseOrders).select('*').limit(params?.limit ?? 50);
      if (params?.status !== 'all') q = q.in('status', ['draft', 'sent', 'confirmed', 'partial']);
      const { data, error } = await q;
       
      return (unwrap(data, error, 'Load purchase orders') as any[]).map(toPurchaseOrder);
    },
    async byId(id) {
      const { data, error } = await supabase.from(TABLES.purchaseOrders).select('*').eq('id', id).maybeSingle();
      if (error) throw new Error(error.message);
      if (!data) return null;
      const { data: lines, error: lineError } = await supabase
        .from(TABLES.purchaseOrderLines)
        .select('*')
        .eq('purchase_order_id', id);
      if (lineError) throw new Error(lineError.message);
      return {
        ...toPurchaseOrder(data),
         
        lines: (lines ?? []).map((l: any) => ({
          id: String(l.id),
          itemId: String(l.item_id),
          sku: String(l.sku ?? ''),
          name: String(l.name ?? ''),
          uom: String(l.uom ?? 'EA'),
          quantityOrdered: Number(l.quantity_ordered ?? 0),
          quantityReceived: Number(l.quantity_received ?? 0),
          unitCost: l.unit_cost === null || l.unit_cost === undefined ? null : Number(l.unit_cost),
        })),
      };
    },
    async recordReceipt(scan) {
      // Receiving mutates inventory and must obey the same rules as the ERP —
      // so it runs as a Postgres function, never as a client-side write.
      // Cast is required only while database.types.ts is the permissive placeholder.
      // Regenerate types from the live project and this narrows automatically.
      const { error } = await (supabase.rpc as unknown as RpcFn)(RPC.recordReceipt, {
        p_purchase_order_id: scan.purchaseOrderId,
        p_line_id: scan.lineId,
        p_quantity: scan.quantity,
        p_scanned_at: scan.scannedAt,
      });
      if (error) throw new Error(`Record receipt failed: ${error.message}`);
    },
  },
};

async function mapSession(userId: string, email: string): Promise<Session> {
  const { data } = await supabase.from(TABLES.profiles).select('*').eq('id', userId).maybeSingle();
   
  const p = data as any;
  return {
    userId,
    email,
    displayName: p?.display_name ?? email.split('@')[0] ?? 'User',
    organizationId: String(p?.organization_id ?? ''),
    organizationName: p?.organization_name ?? '',
    role: p?.role ?? 'viewer',
  };
}
