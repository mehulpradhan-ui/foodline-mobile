/**
 * Domain types for the mobile client.
 *
 * These are deliberately OUR types, not raw Supabase rows. Every adapter maps
 * the backend shape into these, so a schema change in the ERP is absorbed in
 * one mapper instead of rippling through every screen.
 */

export type UUID = string;

export type Session = {
  userId: UUID;
  email: string;
  displayName: string;
  organizationId: UUID;
  organizationName: string;
  role: 'owner' | 'buyer' | 'warehouse' | 'sales' | 'viewer';
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
  /** Days of cover at current velocity. Null when velocity is unknown. */
  daysCover: number | null;
  lastCost: number | null;
  primaryVendorName: string | null;
  status: StockStatus;
};

export type PurchaseOrderStatus = 'draft' | 'sent' | 'confirmed' | 'partial' | 'received' | 'cancelled';

export type PurchaseOrderLine = {
  id: UUID;
  itemId: UUID;
  sku: string;
  name: string;
  uom: string;
  quantityOrdered: number;
  quantityReceived: number;
  unitCost: number | null;
};

export type PurchaseOrder = {
  id: UUID;
  number: string;
  vendorId: UUID;
  vendorName: string;
  status: PurchaseOrderStatus;
  expectedAt: string | null;
  total: number | null;
  lineCount: number;
  lines?: PurchaseOrderLine[];
};

export type HubMetric = {
  key: string;
  label: string;
  value: string;
  /** Percentage change vs prior period, already signed. */
  delta: number | null;
  tone: 'neutral' | 'good' | 'warn' | 'bad';
};

export type ReceivingScan = {
  purchaseOrderId: UUID;
  lineId: UUID;
  quantity: number;
  scannedAt: string;
};
