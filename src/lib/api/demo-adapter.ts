import type { FoodlineApi } from './ports';
import type { HubMetric, Item, PurchaseOrder, Session } from './types';

const SESSION: Session = {
  userId: 'demo-user',
  email: 'demo@foodline.ai',
  displayName: 'Demo Buyer',
  organizationId: 'demo-org',
  organizationName: 'Atlanta Fresh Distribution',
  role: 'buyer',
};

const ITEMS: Item[] = [
  { id: 'i1', sku: 'PRD-1042', name: 'Romaine Hearts, 24ct', category: 'Produce', uom: 'CS', onHand: 18, onOrder: 40, parLevel: 60, daysCover: 2.1, lastCost: 32.5, primaryVendorName: 'Valley Greens', status: 'low' },
  { id: 'i2', sku: 'DRY-2210', name: 'Olive Oil, Extra Virgin 4/1gal', category: 'Dry Goods', uom: 'CS', onHand: 96, onOrder: 0, parLevel: 60, daysCover: 22.4, lastCost: 88.0, primaryVendorName: 'Mediterra Imports', status: 'over' },
  { id: 'i3', sku: 'PRO-0771', name: 'Chicken Breast, Boneless 40lb', category: 'Protein', uom: 'CS', onHand: 0, onOrder: 24, parLevel: 30, daysCover: 0, lastCost: 104.75, primaryVendorName: 'Southern Poultry Co', status: 'out' },
  { id: 'i4', sku: 'DAI-0310', name: 'Heavy Cream 12/qt', category: 'Dairy', uom: 'CS', onHand: 44, onOrder: 12, parLevel: 40, daysCover: 6.8, lastCost: 41.2, primaryVendorName: 'Peachtree Dairy', status: 'ok' },
  { id: 'i5', sku: 'FRZ-5580', name: 'Shoestring Fries 6/5lb', category: 'Frozen', uom: 'CS', onHand: 7, onOrder: 0, parLevel: 25, daysCover: 1.4, lastCost: 27.9, primaryVendorName: 'Northline Frozen', status: 'low' },
  { id: 'i6', sku: 'PRD-1188', name: 'Roma Tomatoes 25lb', category: 'Produce', uom: 'CS', onHand: 31, onOrder: 20, parLevel: 30, daysCover: 4.2, lastCost: 24.0, primaryVendorName: 'Valley Greens', status: 'ok' },
];

const BARCODES: Record<string, string> = {
  '0012345678905': 'i1',
  '0098765432109': 'i3',
  '0055512345678': 'i4',
};

const ORDERS: PurchaseOrder[] = [
  {
    id: 'po1', number: 'PO-4471', vendorId: 'v1', vendorName: 'Valley Greens', status: 'sent',
    expectedAt: '2026-09-23', total: 2140.0, lineCount: 2,
    lines: [
      { id: 'l1', itemId: 'i1', sku: 'PRD-1042', name: 'Romaine Hearts, 24ct', uom: 'CS', quantityOrdered: 40, quantityReceived: 0, unitCost: 32.5 },
      { id: 'l2', itemId: 'i6', sku: 'PRD-1188', name: 'Roma Tomatoes 25lb', uom: 'CS', quantityOrdered: 20, quantityReceived: 0, unitCost: 24.0 },
    ],
  },
  {
    id: 'po2', number: 'PO-4468', vendorId: 'v2', vendorName: 'Southern Poultry Co', status: 'partial',
    expectedAt: '2026-09-22', total: 2514.0, lineCount: 1,
    lines: [
      { id: 'l3', itemId: 'i3', sku: 'PRO-0771', name: 'Chicken Breast, Boneless 40lb', uom: 'CS', quantityOrdered: 24, quantityReceived: 12, unitCost: 104.75 },
    ],
  },
  { id: 'po3', number: 'PO-4455', vendorId: 'v3', vendorName: 'Peachtree Dairy', status: 'received', expectedAt: '2026-09-19', total: 494.4, lineCount: 1, lines: [] },
];

const METRICS: HubMetric[] = [
  { key: 'below-par', label: 'Items below par', value: '3', delta: -25, tone: 'warn' },
  { key: 'open-pos', label: 'Open POs', value: '2', delta: 0, tone: 'neutral' },
  { key: 'arriving', label: 'Arriving today', value: '1', delta: null, tone: 'neutral' },
  { key: 'spend', label: 'Week spend', value: '$14.2K', delta: 8, tone: 'good' },
];

const wait = (ms = 180) => new Promise((r) => setTimeout(r, ms));

export const demoApi: FoodlineApi = {
  auth: {
    async signInWithPassword() { await wait(400); return SESSION; },
    async signOut() { await wait(80); },
    async getSession() { await wait(80); return SESSION; },
  },
  hub: {
    async metrics() { await wait(); return METRICS; },
  },
  items: {
    async list(params) {
      await wait();
      let rows = ITEMS;
      if (params?.onlyBelowPar) rows = rows.filter((i) => i.status === 'low' || i.status === 'out');
      const q = params?.search?.trim().toLowerCase();
      if (q) rows = rows.filter((i) => i.name.toLowerCase().includes(q) || i.sku.toLowerCase().includes(q));
      return params?.limit ? rows.slice(0, params.limit) : rows;
    },
    async byId(id) { await wait(80); return ITEMS.find((i) => i.id === id) ?? null; },
    async byBarcode(barcode) {
      await wait(120);
      const id = BARCODES[barcode];
      return id ? (ITEMS.find((i) => i.id === id) ?? null) : null;
    },
  },
  purchaseOrders: {
    async list(params) {
      await wait();
      const rows = params?.status === 'all' ? ORDERS : ORDERS.filter((o) => o.status !== 'received' && o.status !== 'cancelled');
      return params?.limit ? rows.slice(0, params.limit) : rows;
    },
    async byId(id) { await wait(80); return ORDERS.find((o) => o.id === id) ?? null; },
    async recordReceipt(scan) {
      await wait(200);
      const order = ORDERS.find((o) => o.id === scan.purchaseOrderId);
      const line = order?.lines?.find((l) => l.id === scan.lineId);
      if (line) line.quantityReceived = Math.min(line.quantityOrdered, line.quantityReceived + scan.quantity);
    },
  },
};
