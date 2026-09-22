/**
 * PLACEHOLDER — regenerate from the live ERP Supabase project:
 *
 *   npx supabase login
 *   npx supabase gen types typescript --project-id <project-id> > src/lib/database.types.ts
 *
 * Until then this permissive type keeps the client compiling without
 * inventing a schema that would drift from the real ERP.
 */
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: Record<string, { Row: Record<string, Json>; Insert: Record<string, Json>; Update: Record<string, Json> }>;
    Views: Record<string, { Row: Record<string, Json> }>;
    Functions: Record<string, { Args: Record<string, Json>; Returns: Json }>;
    Enums: Record<string, string>;
    CompositeTypes: Record<string, Record<string, Json>>;
  };
};
