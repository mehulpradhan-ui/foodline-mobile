/**
 * Domain types for the mobile client.
 *
 * Deliberately OUR shapes, not raw RPC payloads. Adapters map into these, so an
 * ERP payload change is absorbed in one mapper instead of across every screen.
 */

export type UUID = string;

export type Company = {
  id: UUID;
  name: string;
  slug: string;
  roleKey: string;
  permissionKeys: string[];
};

/** Mirrors `application_session_context` / `erpSessionSchema` in the web ERP. */
export type Session = {
  actorId: UUID;
  companyId: UUID | null;
  companies: Company[];
};

export type StockStatus = 'ok' | 'low' | 'out' | 'over';

export type Item = {
  id: UUID;
  sku: string;
  name: string;
  category: string | null;
  uom: string;
  onHand: number;
  onOrder: number;
  parLevel: number | null;
  daysCover: number | null;
  lastCost: number | null;
  primaryVendorName: string | null;
  status: StockStatus;
};

export type PurchaseOrderStatus = 'draft' | 'sent' | 'confirmed' | 'partial' | 'received' | 'cancelled';

export type PurchaseOrder = {
  id: UUID;
  number: string;
  vendorId: UUID;
  vendorName: string;
  status: PurchaseOrderStatus;
  expectedAt: string | null;
  total: number | null;
  lineCount: number;
};

export type HubMetric = {
  key: string;
  label: string;
  value: string;
  delta: number | null;
  tone: 'neutral' | 'good' | 'warn' | 'bad';
};

/**
 * One line waiting to be received, from `get_governed_scanner_receiving_queue`.
 * Quantities are base-UOM numerics returned as strings by Postgres.
 */
export type ReceivingTask = {
  taskId: UUID;
  goodsReceiptId: UUID;
  purchaseOrderVersionLineId: UUID;
  productId: UUID;
  productSku: string;
  productName: string;
  lineNumber: number;
  uomCode: string;
  orderedBaseQuantity: number;
  priorReceivedBaseQuantity: number;
  remainingBaseQuantity: number;
  receiptDocumentNumber: string;
  receiptRowVersion: number;
  isEligible: boolean;
  blockerCode: string | null;
  tracksLots: boolean;
  tracksExpiry: boolean;
  catchWeight: boolean;
  temperatureRequired: boolean;
};

/** A live scanner session — `start_scanner_session` / `close_scanner_session`. */
export type ScannerSession = {
  sessionId: UUID;
  rowVersion: number;
  warehouseId: UUID;
};

/** A row under "Needs you" — work waiting on this actor. */
export type ActionItem = {
  key: string;
  title: string;
  /** Which workspace it belongs to, shown as the subtitle. */
  workspace: string;
  count: number;
  route: string | null;
};

/** A row under "Across your company" — status, not a to-do. */
export type ActivityLine = {
  key: string;
  label: string;
  detail: string;
  route: string | null;
};

/** Everything the Home tab renders in one round trip. */
export type HomeSummary = {
  greetingName: string;
  tiles: HubMetric[];
  needsYou: ActionItem[];
  acrossCompany: ActivityLine[];
  aiSummary: { body: string; actionLabel: string } | null;
};

/** A warehouse the actor may receive into — `list_receiving_location_warehouses`. */
export type ReceivingWarehouse = {
  id: UUID;
  code: string;
  name: string;
  /** Default receiving bin, when the ERP has one configured. */
  receivingBinId: UUID | null;
};

export type GoodsReceiptStatus = 'open' | 'in_progress' | 'on_hold' | 'posted';

/** An in-progress receipt on the dock — `get_governed_receiving_dock`. */
export type DockReceipt = {
  goodsReceiptId: UUID;
  documentNumber: string;
  warehouseId: UUID;
  vendorName: string;
  purchaseOrderNumber: string | null;
  status: GoodsReceiptStatus;
  rowVersion: number;
  /** Lines still to receive; null when the dock payload does not carry it. */
  openLineCount: number | null;
  arrivedAt: string | null;
};
