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
