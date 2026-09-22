import type { HubMetric, Item, PurchaseOrder, ReceivingScan, Session, UUID } from './types';

/**
 * The single seam between the app and whatever is behind it.
 *
 * Today: Supabase (direct, guarded by RLS) or the bundled demo adapter.
 * Later: a REST/Edge gateway in front of the ERP — implement this interface
 * once and no screen changes.
 */
export interface FoodlineApi {
  auth: {
    signInWithPassword(email: string, password: string): Promise<Session>;
    signOut(): Promise<void>;
    getSession(): Promise<Session | null>;
  };
  hub: {
    metrics(): Promise<HubMetric[]>;
  };
  items: {
    list(params?: { search?: string; onlyBelowPar?: boolean; limit?: number }): Promise<Item[]>;
    byId(id: UUID): Promise<Item | null>;
    byBarcode(barcode: string): Promise<Item | null>;
  };
  purchaseOrders: {
    list(params?: { status?: PurchaseOrderStatusFilter; limit?: number }): Promise<PurchaseOrder[]>;
    byId(id: UUID): Promise<PurchaseOrder | null>;
    recordReceipt(scan: ReceivingScan): Promise<void>;
  };
}

export type PurchaseOrderStatusFilter = 'open' | 'all';
