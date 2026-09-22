import { isDemoMode } from '../env';
import { demoApi } from './demo-adapter';
import type { FoodlineApi } from './ports';
import { supabaseApi } from './supabase-adapter';

/**
 * EXPO_PUBLIC_DEMO_MODE=1 runs the whole app on bundled fixtures — no backend,
 * no WorkOS, works on a plane. Unset it to hit the live ERP.
 */
export const api: FoodlineApi = isDemoMode ? demoApi : supabaseApi;

export * from './types';
export type { FoodlineApi } from './ports';
