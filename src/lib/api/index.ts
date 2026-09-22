import { isDemoMode } from '../env';
import { demoApi } from './demo-adapter';
import type { FoodlineApi } from './ports';
import { supabaseApi } from './supabase-adapter';

/**
 * Set EXPO_PUBLIC_DEMO_MODE=1 to run the whole app on bundled fixtures —
 * no backend, no credentials, works on a plane. Unset it to hit Supabase.
 */
export const api: FoodlineApi = isDemoMode ? demoApi : supabaseApi;

export * from './types';
export type { FoodlineApi } from './ports';
