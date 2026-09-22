import Constants from 'expo-constants';

/**
 * All runtime config comes from EXPO_PUBLIC_* env vars (inlined at build time).
 * Nothing secret goes here — the anon key is safe to ship, RLS is the guard.
 */
function required(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(
      `Missing ${name}. Copy .env.example to .env.local and fill it in, then restart the bundler with --clear.`
    );
  }
  return value;
}

export const env = {
  supabaseUrl: required('EXPO_PUBLIC_SUPABASE_URL', process.env.EXPO_PUBLIC_SUPABASE_URL),
  supabaseAnonKey: required('EXPO_PUBLIC_SUPABASE_ANON_KEY', process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY),
  /** Optional: set when the ERP exposes a REST/Edge gateway in front of Supabase. */
  apiBaseUrl: process.env.EXPO_PUBLIC_API_BASE_URL ?? null,
  appEnv: (process.env.EXPO_PUBLIC_APP_ENV ?? 'development') as 'development' | 'staging' | 'production',
  version: Constants.expoConfig?.version ?? '0.0.0',
} as const;

export const isDemoMode = process.env.EXPO_PUBLIC_DEMO_MODE === '1';
