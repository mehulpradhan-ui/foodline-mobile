import 'react-native-url-polyfill/auto';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

import { getAccessToken } from '@/features/auth/workos';
import type { Database } from './database.types';
import { env } from './env';

/**
 * Mirrors `createApplicationSupabaseClient` in the web ERP
 * (src/integrations/supabase/application-scope.server.ts).
 *
 * WorkOS owns the session; Supabase receives only the verified WorkOS access
 * token for RLS/RPC. Company selection travels in the `x-erp-company-id`
 * header — selection is NOT authorization; every public RPC re-validates
 * active DB membership server-side.
 *
 * Supabase Auth is deliberately unused. Do not call `supabase.auth.*`.
 */

let client: SupabaseClient<Database> | null = null;
let clientCompanyId: string | null = null;

export function getSupabase(companyId: string | null): SupabaseClient<Database> {
  if (client && clientCompanyId === companyId) return client;

  clientCompanyId = companyId;
  client = createClient<Database>(env.supabaseUrl, env.supabasePublishableKey, {
    accessToken: async () => (await getAccessToken()) ?? '',
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
    global: companyId ? { headers: { 'x-erp-company-id': companyId } } : undefined,
  });
  return client;
}

/** Drop the memoised client — call on sign-out or company switch. */
export function resetSupabase(): void {
  client = null;
  clientCompanyId = null;
}
