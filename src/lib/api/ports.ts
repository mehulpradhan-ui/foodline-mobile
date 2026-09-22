import type {
  HubMetric,
  Item,
  PurchaseOrder,
  ReceivingTask,
  ScannerSession,
  Session,
  UUID,
} from './types';

/**
 * The single seam between the app and the ERP.
 *
 * Live implementation calls the `erp_api` / public RPCs on the shared Supabase
 * project. The demo implementation serves fixtures. Screens depend only on this.
 */
export interface FoodlineApi {
  session: {
    /** WorkOS AuthKit hosted flow. */
    signIn(): Promise<void>;
    signOut(): Promise<void>;
    /** `application_session_context` — null when no stored WorkOS session. */
    resolve(companyId: UUID | null): Promise<Session | null>;
  };
  hub: {
    metrics(companyId: UUID): Promise<HubMetric[]>;
  };
  items: {
    list(companyId: UUID, params?: { search?: string; onlyBelowPar?: boolean }): Promise<Item[]>;
  };
  purchaseOrders: {
    list(companyId: UUID, params?: { openOnly?: boolean }): Promise<PurchaseOrder[]>;
  };
  receiving: {
    /** `start_scanner_session` */
    startSession(companyId: UUID, warehouseId: UUID, deviceId: string): Promise<ScannerSession>;
    /** `close_scanner_session` */
    closeSession(companyId: UUID, session: ScannerSession): Promise<void>;
    /** `get_governed_scanner_receiving_queue` */
    queue(companyId: UUID, goodsReceiptId: UUID): Promise<ReceivingTask[]>;
    /** `submit_scanner_scan` — idempotent, optimistic-concurrency guarded. */
    submitScan(
      companyId: UUID,
      input: {
        session: ScannerSession;
        claimId: UUID;
        taskId: UUID;
        taskType: string;
        taskRowVersion: number;
        expectedRequirementId: UUID;
        rawValue: string;
        symbology: string;
        inputMethod: 'scan' | 'manual';
        idempotencyKey: string;
      }
    ): Promise<void>;
  };
}
