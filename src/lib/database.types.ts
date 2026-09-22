export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      accounting_events: {
        Row: {
          amount: number
          business_date: string
          created_at: string
          created_by: string | null
          currency_code: string
          event_type: string
          failed_at: string | null
          failure_message: string | null
          id: string
          journal_entry_id: string | null
          metadata: Json
          occurred_at: string
          organization_id: string
          processed_at: string | null
          row_version: number
          source_id: string
          source_type: string
          status: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          amount: number
          business_date: string
          created_at?: string
          created_by?: string | null
          currency_code: string
          event_type: string
          failed_at?: string | null
          failure_message?: string | null
          id?: string
          journal_entry_id?: string | null
          metadata?: Json
          occurred_at?: string
          organization_id: string
          processed_at?: string | null
          row_version?: number
          source_id: string
          source_type: string
          status?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          amount?: number
          business_date?: string
          created_at?: string
          created_by?: string | null
          currency_code?: string
          event_type?: string
          failed_at?: string | null
          failure_message?: string | null
          id?: string
          journal_entry_id?: string | null
          metadata?: Json
          occurred_at?: string
          organization_id?: string
          processed_at?: string | null
          row_version?: number
          source_id?: string
          source_type?: string
          status?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "accounting_events_journal_fk"
            columns: ["organization_id", "journal_entry_id"]
            isOneToOne: false
            referencedRelation: "journal_entries"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "accounting_events_journal_fk"
            columns: ["organization_id", "journal_entry_id"]
            isOneToOne: false
            referencedRelation: "journal_entry_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "accounting_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      accounting_periods: {
        Row: {
          closed_at: string | null
          closed_by: string | null
          created_at: string
          created_by: string
          id: string
          organization_id: string
          period_end: string
          period_range: unknown
          period_start: string
          row_version: number
          status: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          closed_at?: string | null
          closed_by?: string | null
          created_at?: string
          created_by?: string
          id?: string
          organization_id: string
          period_end: string
          period_range?: unknown
          period_start: string
          row_version?: number
          status?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          closed_at?: string | null
          closed_by?: string | null
          created_at?: string
          created_by?: string
          id?: string
          organization_id?: string
          period_end?: string
          period_range?: unknown
          period_start?: string
          row_version?: number
          status?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "accounting_periods_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      advance_ship_notice_lines: {
        Row: {
          advance_ship_notice_id: string
          base_quantity: number | null
          conversion_to_base: number
          country_of_origin_code: string | null
          created_at: string
          created_by: string | null
          expires_on: string | null
          id: string
          line_number: number
          manufactured_on: string | null
          organization_id: string
          pallet_identifier: string | null
          product_id: string
          product_uom_id: string
          purchase_order_id: string
          purchase_order_line_id: string
          purchase_order_version_id: string
          purchase_order_version_line_id: string
          quantity: number
          row_version: number
          updated_at: string
          updated_by: string | null
          vendor_lot_code: string | null
        }
        Insert: {
          advance_ship_notice_id: string
          base_quantity?: number | null
          conversion_to_base: number
          country_of_origin_code?: string | null
          created_at?: string
          created_by?: string | null
          expires_on?: string | null
          id?: string
          line_number: number
          manufactured_on?: string | null
          organization_id: string
          pallet_identifier?: string | null
          product_id: string
          product_uom_id: string
          purchase_order_id: string
          purchase_order_line_id: string
          purchase_order_version_id: string
          purchase_order_version_line_id: string
          quantity: number
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          vendor_lot_code?: string | null
        }
        Update: {
          advance_ship_notice_id?: string
          base_quantity?: number | null
          conversion_to_base?: number
          country_of_origin_code?: string | null
          created_at?: string
          created_by?: string | null
          expires_on?: string | null
          id?: string
          line_number?: number
          manufactured_on?: string | null
          organization_id?: string
          pallet_identifier?: string | null
          product_id?: string
          product_uom_id?: string
          purchase_order_id?: string
          purchase_order_line_id?: string
          purchase_order_version_id?: string
          purchase_order_version_line_id?: string
          quantity?: number
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          vendor_lot_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "advance_ship_notice_lines_exact_header_fk"
            columns: [
              "organization_id",
              "advance_ship_notice_id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
            isOneToOne: false
            referencedRelation: "advance_ship_notices"
            referencedColumns: [
              "organization_id",
              "id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
          },
          {
            foreignKeyName: "advance_ship_notice_lines_exact_version_line_fk"
            columns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "purchase_order_version_line_id",
            ]
            isOneToOne: false
            referencedRelation: "purchase_order_version_lines"
            referencedColumns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "id",
            ]
          },
          {
            foreignKeyName: "advance_ship_notice_lines_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "asn_lines_header_fk"
            columns: ["organization_id", "advance_ship_notice_id"]
            isOneToOne: false
            referencedRelation: "advance_ship_notices"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "asn_lines_po_line_fk"
            columns: ["organization_id", "purchase_order_line_id"]
            isOneToOne: false
            referencedRelation: "purchase_order_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "asn_lines_product_fk"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "asn_lines_product_uom_fk"
            columns: ["organization_id", "product_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
        ]
      }
      advance_ship_notices: {
        Row: {
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          carrier_name: string | null
          case_count: number | null
          confirmed_at: string | null
          confirmed_by: string | null
          created_at: string
          created_by: string | null
          expected_arrival_at: string | null
          gross_weight: number | null
          id: string
          metadata: Json
          organization_id: string
          pallet_count: number | null
          purchase_order_id: string
          purchase_order_vendor_response_id: string
          purchase_order_version_id: string
          received_at: string | null
          received_by: string | null
          row_version: number
          shipped_at: string | null
          status: string | null
          tracking_number: string | null
          updated_at: string
          updated_by: string | null
          vendor_asn_number: string
          vendor_id: string
          vendor_reported_shipped_at: string | null
          weight_uom_code: string | null
        }
        Insert: {
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          carrier_name?: string | null
          case_count?: number | null
          confirmed_at?: string | null
          confirmed_by?: string | null
          created_at?: string
          created_by?: string | null
          expected_arrival_at?: string | null
          gross_weight?: number | null
          id?: string
          metadata?: Json
          organization_id: string
          pallet_count?: number | null
          purchase_order_id: string
          purchase_order_vendor_response_id: string
          purchase_order_version_id: string
          received_at?: string | null
          received_by?: string | null
          row_version?: number
          shipped_at?: string | null
          status?: string | null
          tracking_number?: string | null
          updated_at?: string
          updated_by?: string | null
          vendor_asn_number: string
          vendor_id: string
          vendor_reported_shipped_at?: string | null
          weight_uom_code?: string | null
        }
        Update: {
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          carrier_name?: string | null
          case_count?: number | null
          confirmed_at?: string | null
          confirmed_by?: string | null
          created_at?: string
          created_by?: string | null
          expected_arrival_at?: string | null
          gross_weight?: number | null
          id?: string
          metadata?: Json
          organization_id?: string
          pallet_count?: number | null
          purchase_order_id?: string
          purchase_order_vendor_response_id?: string
          purchase_order_version_id?: string
          received_at?: string | null
          received_by?: string | null
          row_version?: number
          shipped_at?: string | null
          status?: string | null
          tracking_number?: string | null
          updated_at?: string
          updated_by?: string | null
          vendor_asn_number?: string
          vendor_id?: string
          vendor_reported_shipped_at?: string | null
          weight_uom_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "advance_ship_notices_exact_version_fk"
            columns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
            isOneToOne: false
            referencedRelation: "purchase_order_versions"
            referencedColumns: ["organization_id", "purchase_order_id", "id"]
          },
          {
            foreignKeyName: "advance_ship_notices_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "advance_ship_notices_po_fk"
            columns: ["organization_id", "purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "advance_ship_notices_vendor_fk"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "advance_ship_notices_vendor_response_fk"
            columns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "purchase_order_vendor_response_id",
            ]
            isOneToOne: false
            referencedRelation: "purchase_order_vendor_responses"
            referencedColumns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "id",
            ]
          },
        ]
      }
      ai_budget_policies: {
        Row: {
          created_at: string
          created_by: string | null
          currency_code: string
          hard_cap_enabled: boolean
          id: string
          is_active: boolean
          monthly_cost_limit: number | null
          monthly_credit_limit: number | null
          organization_id: string
          row_version: number
          updated_at: string
          updated_by: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          currency_code: string
          hard_cap_enabled?: boolean
          id?: string
          is_active?: boolean
          monthly_cost_limit?: number | null
          monthly_credit_limit?: number | null
          organization_id: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          currency_code?: string
          hard_cap_enabled?: boolean
          id?: string
          is_active?: boolean
          monthly_cost_limit?: number | null
          monthly_credit_limit?: number | null
          organization_id?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_budget_policies_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_run_steps: {
        Row: {
          ai_run_id: string
          completed_at: string | null
          created_at: string
          created_by: string | null
          error_code: string | null
          error_message: string | null
          failed_at: string | null
          id: string
          organization_id: string
          output: Json
          row_version: number
          sequence_number: number
          started_at: string | null
          status: string | null
          step_key: string
          step_type: string
          title: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          ai_run_id: string
          completed_at?: string | null
          created_at?: string
          created_by?: string | null
          error_code?: string | null
          error_message?: string | null
          failed_at?: string | null
          id?: string
          organization_id: string
          output?: Json
          row_version?: number
          sequence_number: number
          started_at?: string | null
          status?: string | null
          step_key: string
          step_type: string
          title: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          ai_run_id?: string
          completed_at?: string | null
          created_at?: string
          created_by?: string | null
          error_code?: string | null
          error_message?: string | null
          failed_at?: string | null
          id?: string
          organization_id?: string
          output?: Json
          row_version?: number
          sequence_number?: number
          started_at?: string | null
          status?: string | null
          step_key?: string
          step_type?: string
          title?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_run_steps_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_run_steps_run_fk"
            columns: ["organization_id", "ai_run_id"]
            isOneToOne: false
            referencedRelation: "ai_runs"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      ai_runs: {
        Row: {
          attempt_count: number
          completed_at: string | null
          context: Json
          created_at: string
          created_by: string | null
          currency_code: string | null
          error_code: string | null
          error_message: string | null
          estimated_cost: number | null
          estimated_credits: number | null
          failed_at: string | null
          id: string
          idempotency_key: string | null
          model_name: string | null
          organization_id: string
          provider: string | null
          queued_at: string
          requested_by_user_id: string | null
          result: Json
          result_summary: string | null
          row_version: number
          started_at: string | null
          status: string | null
          title: string
          updated_at: string
          updated_by: string | null
          worker_locked_at: string | null
          worker_locked_by: string | null
        }
        Insert: {
          attempt_count?: number
          completed_at?: string | null
          context?: Json
          created_at?: string
          created_by?: string | null
          currency_code?: string | null
          error_code?: string | null
          error_message?: string | null
          estimated_cost?: number | null
          estimated_credits?: number | null
          failed_at?: string | null
          id?: string
          idempotency_key?: string | null
          model_name?: string | null
          organization_id: string
          provider?: string | null
          queued_at?: string
          requested_by_user_id?: string | null
          result?: Json
          result_summary?: string | null
          row_version?: number
          started_at?: string | null
          status?: string | null
          title: string
          updated_at?: string
          updated_by?: string | null
          worker_locked_at?: string | null
          worker_locked_by?: string | null
        }
        Update: {
          attempt_count?: number
          completed_at?: string | null
          context?: Json
          created_at?: string
          created_by?: string | null
          currency_code?: string | null
          error_code?: string | null
          error_message?: string | null
          estimated_cost?: number | null
          estimated_credits?: number | null
          failed_at?: string | null
          id?: string
          idempotency_key?: string | null
          model_name?: string | null
          organization_id?: string
          provider?: string | null
          queued_at?: string
          requested_by_user_id?: string | null
          result?: Json
          result_summary?: string | null
          row_version?: number
          started_at?: string | null
          status?: string | null
          title?: string
          updated_at?: string
          updated_by?: string | null
          worker_locked_at?: string | null
          worker_locked_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_runs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_usage_events: {
        Row: {
          ai_run_id: string
          ai_run_step_id: string | null
          cost_amount: number
          created_at: string
          created_by: string | null
          credits_used: number
          currency_code: string
          id: string
          input_tokens: number
          metadata: Json
          model_name: string
          occurred_at: string
          organization_id: string
          output_tokens: number
          provider: string
          provider_request_id: string | null
          user_id: string | null
        }
        Insert: {
          ai_run_id: string
          ai_run_step_id?: string | null
          cost_amount?: number
          created_at?: string
          created_by?: string | null
          credits_used?: number
          currency_code: string
          id?: string
          input_tokens?: number
          metadata?: Json
          model_name: string
          occurred_at?: string
          organization_id: string
          output_tokens?: number
          provider: string
          provider_request_id?: string | null
          user_id?: string | null
        }
        Update: {
          ai_run_id?: string
          ai_run_step_id?: string | null
          cost_amount?: number
          created_at?: string
          created_by?: string | null
          credits_used?: number
          currency_code?: string
          id?: string
          input_tokens?: number
          metadata?: Json
          model_name?: string
          occurred_at?: string
          organization_id?: string
          output_tokens?: number
          provider?: string
          provider_request_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_usage_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_usage_events_run_fk"
            columns: ["organization_id", "ai_run_id"]
            isOneToOne: false
            referencedRelation: "ai_runs"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "ai_usage_events_step_fk"
            columns: ["organization_id", "ai_run_step_id"]
            isOneToOne: false
            referencedRelation: "ai_run_steps"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      app_permissions: {
        Row: {
          description: string
          permission_key: string
        }
        Insert: {
          description: string
          permission_key: string
        }
        Update: {
          description?: string
          permission_key?: string
        }
        Relationships: []
      }
      app_role_permissions: {
        Row: {
          permission_key: string
          role_key: string
        }
        Insert: {
          permission_key: string
          role_key: string
        }
        Update: {
          permission_key?: string
          role_key?: string
        }
        Relationships: [
          {
            foreignKeyName: "app_role_permissions_permission_key_fkey"
            columns: ["permission_key"]
            isOneToOne: false
            referencedRelation: "app_permissions"
            referencedColumns: ["permission_key"]
          },
          {
            foreignKeyName: "app_role_permissions_role_key_fkey"
            columns: ["role_key"]
            isOneToOne: false
            referencedRelation: "app_roles"
            referencedColumns: ["role_key"]
          },
        ]
      }
      app_roles: {
        Row: {
          description: string
          display_name: string
          is_system: boolean
          rank: number
          role_key: string
        }
        Insert: {
          description: string
          display_name: string
          is_system?: boolean
          rank: number
          role_key: string
        }
        Update: {
          description?: string
          display_name?: string
          is_system?: boolean
          rank?: number
          role_key?: string
        }
        Relationships: []
      }
      application_notification_receipts: {
        Row: {
          created_at: string
          created_by: string | null
          dismissed_at: string | null
          id: string
          notification_id: string
          organization_id: string
          read_at: string | null
          row_version: number
          updated_at: string
          updated_by: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          dismissed_at?: string | null
          id?: string
          notification_id: string
          organization_id: string
          read_at?: string | null
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          dismissed_at?: string | null
          id?: string
          notification_id?: string
          organization_id?: string
          read_at?: string | null
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "application_notification_rece_organization_id_notification_fkey"
            columns: ["organization_id", "notification_id"]
            isOneToOne: false
            referencedRelation: "application_notifications"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      application_notifications: {
        Row: {
          action_href: string | null
          action_label: string | null
          body: string
          created_at: string
          created_by: string | null
          id: string
          organization_id: string
          recipient_user_id: string | null
          row_version: number
          source: string
          title: string
          tone: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          action_href?: string | null
          action_label?: string | null
          body: string
          created_at?: string
          created_by?: string | null
          id?: string
          organization_id: string
          recipient_user_id?: string | null
          row_version?: number
          source: string
          title: string
          tone?: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          action_href?: string | null
          action_label?: string | null
          body?: string
          created_at?: string
          created_by?: string | null
          id?: string
          organization_id?: string
          recipient_user_id?: string | null
          row_version?: number
          source?: string
          title?: string
          tone?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "application_notifications_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      approval_requests: {
        Row: {
          action_key: string
          amount: number | null
          approved_at: string | null
          approved_by: string | null
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          changes_requested_at: string | null
          changes_requested_by: string | null
          changes_requested_reason: string | null
          created_at: string
          created_by: string | null
          currency_code: string | null
          due_at: string | null
          id: string
          organization_id: string
          origin: string
          payload: Json
          rejected_at: string | null
          rejected_by: string | null
          rejection_reason: string | null
          request_type: string
          requested_at: string
          requested_by: string
          required_permission: string | null
          resource_id: string | null
          resource_type: string
          row_version: number
          status: string | null
          summary: string | null
          title: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          action_key: string
          amount?: number | null
          approved_at?: string | null
          approved_by?: string | null
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          changes_requested_at?: string | null
          changes_requested_by?: string | null
          changes_requested_reason?: string | null
          created_at?: string
          created_by?: string | null
          currency_code?: string | null
          due_at?: string | null
          id?: string
          organization_id: string
          origin?: string
          payload?: Json
          rejected_at?: string | null
          rejected_by?: string | null
          rejection_reason?: string | null
          request_type: string
          requested_at?: string
          requested_by?: string
          required_permission?: string | null
          resource_id?: string | null
          resource_type: string
          row_version?: number
          status?: string | null
          summary?: string | null
          title: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          action_key?: string
          amount?: number | null
          approved_at?: string | null
          approved_by?: string | null
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          changes_requested_at?: string | null
          changes_requested_by?: string | null
          changes_requested_reason?: string | null
          created_at?: string
          created_by?: string | null
          currency_code?: string | null
          due_at?: string | null
          id?: string
          organization_id?: string
          origin?: string
          payload?: Json
          rejected_at?: string | null
          rejected_by?: string | null
          rejection_reason?: string | null
          request_type?: string
          requested_at?: string
          requested_by?: string
          required_permission?: string | null
          resource_id?: string | null
          resource_type?: string
          row_version?: number
          status?: string | null
          summary?: string | null
          title?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "approval_requests_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "approval_requests_required_permission_fkey"
            columns: ["required_permission"]
            isOneToOne: false
            referencedRelation: "app_permissions"
            referencedColumns: ["permission_key"]
          },
        ]
      }
      audit_events: {
        Row: {
          action: string
          actor_identity_subject: string | null
          actor_user_id: string | null
          changed_columns: string[]
          id: number
          new_data: Json | null
          occurred_at: string
          old_data: Json | null
          organization_id: string
          record_id: string | null
          request_id: string | null
          table_name: string
        }
        Insert: {
          action: string
          actor_identity_subject?: string | null
          actor_user_id?: string | null
          changed_columns?: string[]
          id?: never
          new_data?: Json | null
          occurred_at?: string
          old_data?: Json | null
          organization_id: string
          record_id?: string | null
          request_id?: string | null
          table_name: string
        }
        Update: {
          action?: string
          actor_identity_subject?: string | null
          actor_user_id?: string | null
          changed_columns?: string[]
          id?: never
          new_data?: Json | null
          occurred_at?: string
          old_data?: Json | null
          organization_id?: string
          record_id?: string | null
          request_id?: string | null
          table_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "audit_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      automation_routine_steps: {
        Row: {
          action_key: string
          automation_routine_id: string
          consequence_level: string
          created_at: string
          created_by: string | null
          description: string
          id: string
          organization_id: string
          parameters: Json
          row_version: number
          sequence_number: number
          step_key: string
          title: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          action_key?: string
          automation_routine_id: string
          consequence_level?: string
          created_at?: string
          created_by?: string | null
          description: string
          id?: string
          organization_id: string
          parameters?: Json
          row_version?: number
          sequence_number: number
          step_key: string
          title: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          action_key?: string
          automation_routine_id?: string
          consequence_level?: string
          created_at?: string
          created_by?: string | null
          description?: string
          id?: string
          organization_id?: string
          parameters?: Json
          row_version?: number
          sequence_number?: number
          step_key?: string
          title?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "automation_routine_steps_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "automation_routine_steps_routine_fk"
            columns: ["organization_id", "automation_routine_id"]
            isOneToOne: false
            referencedRelation: "automation_routines"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      automation_routines: {
        Row: {
          activated_at: string | null
          activated_by: string | null
          approval_boundary: string
          archive_reason: string | null
          archived_at: string | null
          archived_by: string | null
          area: string
          code: string
          copilot_prompt: string
          created_at: string
          created_by: string | null
          cron_expression: string | null
          description: string
          display_name: string
          execution_handler: string
          id: string
          last_run_at: string | null
          maximum_concurrent_runs: number
          next_action_href: string | null
          next_action_label: string | null
          next_run_at: string | null
          organization_id: string
          output_label: string
          owner_label: string
          paused_at: string | null
          paused_by: string | null
          row_version: number
          status: string | null
          time_zone: string | null
          trigger_type: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          activated_at?: string | null
          activated_by?: string | null
          approval_boundary: string
          archive_reason?: string | null
          archived_at?: string | null
          archived_by?: string | null
          area: string
          code: string
          copilot_prompt: string
          created_at?: string
          created_by?: string | null
          cron_expression?: string | null
          description: string
          display_name: string
          execution_handler?: string
          id?: string
          last_run_at?: string | null
          maximum_concurrent_runs?: number
          next_action_href?: string | null
          next_action_label?: string | null
          next_run_at?: string | null
          organization_id: string
          output_label: string
          owner_label: string
          paused_at?: string | null
          paused_by?: string | null
          row_version?: number
          status?: string | null
          time_zone?: string | null
          trigger_type: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          activated_at?: string | null
          activated_by?: string | null
          approval_boundary?: string
          archive_reason?: string | null
          archived_at?: string | null
          archived_by?: string | null
          area?: string
          code?: string
          copilot_prompt?: string
          created_at?: string
          created_by?: string | null
          cron_expression?: string | null
          description?: string
          display_name?: string
          execution_handler?: string
          id?: string
          last_run_at?: string | null
          maximum_concurrent_runs?: number
          next_action_href?: string | null
          next_action_label?: string | null
          next_run_at?: string | null
          organization_id?: string
          output_label?: string
          owner_label?: string
          paused_at?: string | null
          paused_by?: string | null
          row_version?: number
          status?: string | null
          time_zone?: string | null
          trigger_type?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "automation_routines_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      automation_run_steps: {
        Row: {
          action_key: string
          automation_routine_step_id: string | null
          automation_run_id: string
          cancelled_at: string | null
          completed_at: string | null
          consequence_level: string
          created_at: string
          description: string
          error_code: string | null
          error_message: string | null
          failed_at: string | null
          id: string
          input: Json
          organization_id: string
          output: Json
          row_version: number
          sequence_number: number
          started_at: string | null
          status: string | null
          step_key: string
          title: string
          updated_at: string
        }
        Insert: {
          action_key: string
          automation_routine_step_id?: string | null
          automation_run_id: string
          cancelled_at?: string | null
          completed_at?: string | null
          consequence_level: string
          created_at?: string
          description: string
          error_code?: string | null
          error_message?: string | null
          failed_at?: string | null
          id?: string
          input?: Json
          organization_id: string
          output?: Json
          row_version?: number
          sequence_number: number
          started_at?: string | null
          status?: string | null
          step_key: string
          title: string
          updated_at?: string
        }
        Update: {
          action_key?: string
          automation_routine_step_id?: string | null
          automation_run_id?: string
          cancelled_at?: string | null
          completed_at?: string | null
          consequence_level?: string
          created_at?: string
          description?: string
          error_code?: string | null
          error_message?: string | null
          failed_at?: string | null
          id?: string
          input?: Json
          organization_id?: string
          output?: Json
          row_version?: number
          sequence_number?: number
          started_at?: string | null
          status?: string | null
          step_key?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "automation_run_steps_definition_fk"
            columns: ["organization_id", "automation_routine_step_id"]
            isOneToOne: false
            referencedRelation: "automation_routine_steps"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "automation_run_steps_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "automation_run_steps_run_fk"
            columns: ["organization_id", "automation_run_id"]
            isOneToOne: false
            referencedRelation: "automation_runs"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      automation_runs: {
        Row: {
          attempt_count: number
          automation_routine_id: string
          cancelled_at: string | null
          completed_at: string | null
          created_at: string
          created_by: string | null
          error_code: string | null
          error_message: string | null
          failed_at: string | null
          id: string
          idempotency_key: string
          input: Json
          lease_expires_at: string | null
          lease_owner: string | null
          lease_token: string | null
          organization_id: string
          output: Json
          queued_at: string
          requested_by_user_id: string | null
          row_version: number
          started_at: string | null
          status: string | null
          trigger_reference: string | null
          trigger_type: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          attempt_count?: number
          automation_routine_id: string
          cancelled_at?: string | null
          completed_at?: string | null
          created_at?: string
          created_by?: string | null
          error_code?: string | null
          error_message?: string | null
          failed_at?: string | null
          id?: string
          idempotency_key: string
          input?: Json
          lease_expires_at?: string | null
          lease_owner?: string | null
          lease_token?: string | null
          organization_id: string
          output?: Json
          queued_at?: string
          requested_by_user_id?: string | null
          row_version?: number
          started_at?: string | null
          status?: string | null
          trigger_reference?: string | null
          trigger_type: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          attempt_count?: number
          automation_routine_id?: string
          cancelled_at?: string | null
          completed_at?: string | null
          created_at?: string
          created_by?: string | null
          error_code?: string | null
          error_message?: string | null
          failed_at?: string | null
          id?: string
          idempotency_key?: string
          input?: Json
          lease_expires_at?: string | null
          lease_owner?: string | null
          lease_token?: string | null
          organization_id?: string
          output?: Json
          queued_at?: string
          requested_by_user_id?: string | null
          row_version?: number
          started_at?: string | null
          status?: string | null
          trigger_reference?: string | null
          trigger_type?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "automation_runs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "automation_runs_routine_fk"
            columns: ["organization_id", "automation_routine_id"]
            isOneToOne: false
            referencedRelation: "automation_routines"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      bank_accounts: {
        Row: {
          account_type: string
          code: string
          created_at: string
          created_by: string | null
          currency_code: string
          display_name: string
          gl_account_id: string | null
          id: string
          institution_name: string | null
          is_active: boolean
          masked_account_number: string | null
          opening_balance: number
          opening_balance_date: string | null
          organization_id: string
          row_version: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          account_type?: string
          code: string
          created_at?: string
          created_by?: string | null
          currency_code: string
          display_name: string
          gl_account_id?: string | null
          id?: string
          institution_name?: string | null
          is_active?: boolean
          masked_account_number?: string | null
          opening_balance?: number
          opening_balance_date?: string | null
          organization_id: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          account_type?: string
          code?: string
          created_at?: string
          created_by?: string | null
          currency_code?: string
          display_name?: string
          gl_account_id?: string | null
          id?: string
          institution_name?: string | null
          is_active?: boolean
          masked_account_number?: string | null
          opening_balance?: number
          opening_balance_date?: string | null
          organization_id?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bank_accounts_gl_fk"
            columns: ["organization_id", "gl_account_id"]
            isOneToOne: false
            referencedRelation: "gl_accounts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "bank_accounts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      bank_reconciliation_matches: {
        Row: {
          bank_reconciliation_id: string
          bank_transaction_id: string
          created_at: string
          created_by: string | null
          customer_payment_id: string | null
          id: string
          journal_entry_id: string | null
          match_method: string
          matched_amount: number
          matched_at: string
          matched_by: string | null
          organization_id: string
          row_version: number
          updated_at: string
          updated_by: string | null
          vendor_payment_id: string | null
        }
        Insert: {
          bank_reconciliation_id: string
          bank_transaction_id: string
          created_at?: string
          created_by?: string | null
          customer_payment_id?: string | null
          id?: string
          journal_entry_id?: string | null
          match_method?: string
          matched_amount: number
          matched_at?: string
          matched_by?: string | null
          organization_id: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          vendor_payment_id?: string | null
        }
        Update: {
          bank_reconciliation_id?: string
          bank_transaction_id?: string
          created_at?: string
          created_by?: string | null
          customer_payment_id?: string | null
          id?: string
          journal_entry_id?: string | null
          match_method?: string
          matched_amount?: number
          matched_at?: string
          matched_by?: string | null
          organization_id?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          vendor_payment_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bank_reconciliation_matches_customer_payment_fk"
            columns: ["organization_id", "customer_payment_id"]
            isOneToOne: false
            referencedRelation: "customer_payment_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "bank_reconciliation_matches_customer_payment_fk"
            columns: ["organization_id", "customer_payment_id"]
            isOneToOne: false
            referencedRelation: "customer_payments"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "bank_reconciliation_matches_journal_fk"
            columns: ["organization_id", "journal_entry_id"]
            isOneToOne: false
            referencedRelation: "journal_entries"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "bank_reconciliation_matches_journal_fk"
            columns: ["organization_id", "journal_entry_id"]
            isOneToOne: false
            referencedRelation: "journal_entry_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "bank_reconciliation_matches_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bank_reconciliation_matches_reconciliation_fk"
            columns: ["organization_id", "bank_reconciliation_id"]
            isOneToOne: false
            referencedRelation: "bank_reconciliations"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "bank_reconciliation_matches_transaction_fk"
            columns: ["organization_id", "bank_transaction_id"]
            isOneToOne: false
            referencedRelation: "bank_transactions"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "bank_reconciliation_matches_vendor_payment_fk"
            columns: ["organization_id", "vendor_payment_id"]
            isOneToOne: false
            referencedRelation: "vendor_payments"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      bank_reconciliations: {
        Row: {
          bank_account_id: string
          created_at: string
          created_by: string | null
          finalized_at: string | null
          finalized_by: string | null
          id: string
          organization_id: string
          reopen_reason: string | null
          reopened_at: string | null
          reopened_by: string | null
          row_version: number
          statement_end: string
          statement_ending_balance: number
          statement_start: string
          status: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          bank_account_id: string
          created_at?: string
          created_by?: string | null
          finalized_at?: string | null
          finalized_by?: string | null
          id?: string
          organization_id: string
          reopen_reason?: string | null
          reopened_at?: string | null
          reopened_by?: string | null
          row_version?: number
          statement_end: string
          statement_ending_balance: number
          statement_start: string
          status?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          bank_account_id?: string
          created_at?: string
          created_by?: string | null
          finalized_at?: string | null
          finalized_by?: string | null
          id?: string
          organization_id?: string
          reopen_reason?: string | null
          reopened_at?: string | null
          reopened_by?: string | null
          row_version?: number
          statement_end?: string
          statement_ending_balance?: number
          statement_start?: string
          status?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bank_reconciliations_account_fk"
            columns: ["organization_id", "bank_account_id"]
            isOneToOne: false
            referencedRelation: "bank_account_balance_overview"
            referencedColumns: ["organization_id", "bank_account_id"]
          },
          {
            foreignKeyName: "bank_reconciliations_account_fk"
            columns: ["organization_id", "bank_account_id"]
            isOneToOne: false
            referencedRelation: "bank_accounts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "bank_reconciliations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      bank_transactions: {
        Row: {
          amount: number
          bank_account_id: string
          category: string | null
          created_at: string
          created_by: string | null
          currency_code: string
          description: string
          external_id: string | null
          id: string
          journal_entry_id: string | null
          metadata: Json
          organization_id: string
          posted_at: string | null
          reference: string | null
          row_version: number
          transaction_date: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          amount: number
          bank_account_id: string
          category?: string | null
          created_at?: string
          created_by?: string | null
          currency_code: string
          description: string
          external_id?: string | null
          id?: string
          journal_entry_id?: string | null
          metadata?: Json
          organization_id: string
          posted_at?: string | null
          reference?: string | null
          row_version?: number
          transaction_date: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          amount?: number
          bank_account_id?: string
          category?: string | null
          created_at?: string
          created_by?: string | null
          currency_code?: string
          description?: string
          external_id?: string | null
          id?: string
          journal_entry_id?: string | null
          metadata?: Json
          organization_id?: string
          posted_at?: string | null
          reference?: string | null
          row_version?: number
          transaction_date?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bank_transactions_account_fk"
            columns: ["organization_id", "bank_account_id"]
            isOneToOne: false
            referencedRelation: "bank_account_balance_overview"
            referencedColumns: ["organization_id", "bank_account_id"]
          },
          {
            foreignKeyName: "bank_transactions_account_fk"
            columns: ["organization_id", "bank_account_id"]
            isOneToOne: false
            referencedRelation: "bank_accounts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "bank_transactions_journal_fk"
            columns: ["organization_id", "journal_entry_id"]
            isOneToOne: false
            referencedRelation: "journal_entries"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "bank_transactions_journal_fk"
            columns: ["organization_id", "journal_entry_id"]
            isOneToOne: false
            referencedRelation: "journal_entry_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "bank_transactions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      barcode_print_job_lines: {
        Row: {
          barcode_id: string
          barcode_row_version: number
          copies: number
          encoded_data: string
          id: string
          label_format: string
          organization_id: string
          print_job_id: string
          product_id: string
          product_name: string
          product_sku: string
          product_uom_id: string
          uom_code: string
        }
        Insert: {
          barcode_id: string
          barcode_row_version: number
          copies: number
          encoded_data: string
          id?: string
          label_format: string
          organization_id: string
          print_job_id: string
          product_id: string
          product_name: string
          product_sku: string
          product_uom_id: string
          uom_code: string
        }
        Update: {
          barcode_id?: string
          barcode_row_version?: number
          copies?: number
          encoded_data?: string
          id?: string
          label_format?: string
          organization_id?: string
          print_job_id?: string
          product_id?: string
          product_name?: string
          product_sku?: string
          product_uom_id?: string
          uom_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "barcode_print_job_lines_organization_id_barcode_id_fkey"
            columns: ["organization_id", "barcode_id"]
            isOneToOne: false
            referencedRelation: "product_barcodes"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "barcode_print_job_lines_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "barcode_print_job_lines_organization_id_print_job_id_fkey"
            columns: ["organization_id", "print_job_id"]
            isOneToOne: false
            referencedRelation: "barcode_print_jobs"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "barcode_print_job_lines_organization_id_product_id_fkey"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "barcode_print_job_lines_organization_id_product_uom_id_fkey"
            columns: ["organization_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      barcode_print_jobs: {
        Row: {
          active_pdf_attempt_id: string | null
          artifact_attachment_id: string | null
          completed_at: string | null
          copies_per_label: number
          destination_type: string
          failure_reason: string | null
          id: string
          operational_device_id: string | null
          organization_id: string
          pdf_attempt_count: number
          pdf_attempt_limit: number
          pdf_retry_at: string | null
          renderer_version: string | null
          requested_at: string
          requested_by: string
          row_version: number
          started_at: string | null
          status: string
        }
        Insert: {
          active_pdf_attempt_id?: string | null
          artifact_attachment_id?: string | null
          completed_at?: string | null
          copies_per_label: number
          destination_type: string
          failure_reason?: string | null
          id?: string
          operational_device_id?: string | null
          organization_id: string
          pdf_attempt_count?: number
          pdf_attempt_limit?: number
          pdf_retry_at?: string | null
          renderer_version?: string | null
          requested_at?: string
          requested_by: string
          row_version?: number
          started_at?: string | null
          status?: string
        }
        Update: {
          active_pdf_attempt_id?: string | null
          artifact_attachment_id?: string | null
          completed_at?: string | null
          copies_per_label?: number
          destination_type?: string
          failure_reason?: string | null
          id?: string
          operational_device_id?: string | null
          organization_id?: string
          pdf_attempt_count?: number
          pdf_attempt_limit?: number
          pdf_retry_at?: string | null
          renderer_version?: string | null
          requested_at?: string
          requested_by?: string
          row_version?: number
          started_at?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "barcode_pdf_attachment_tenant_fk"
            columns: ["organization_id", "artifact_attachment_id"]
            isOneToOne: false
            referencedRelation: "file_attachments"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "barcode_print_jobs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "barcode_print_jobs_organization_id_operational_device_id_fkey"
            columns: ["organization_id", "operational_device_id"]
            isOneToOne: false
            referencedRelation: "operational_devices"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      barcode_scan_tests: {
        Row: {
          barcode_id: string
          barcode_row_version: number
          failure_reason: string | null
          id: string
          normalized_code: string
          organization_id: string
          passed: boolean
          scanned_code: string
          tested_at: string
          tested_by: string
        }
        Insert: {
          barcode_id: string
          barcode_row_version: number
          failure_reason?: string | null
          id?: string
          normalized_code: string
          organization_id: string
          passed: boolean
          scanned_code: string
          tested_at?: string
          tested_by: string
        }
        Update: {
          barcode_id?: string
          barcode_row_version?: number
          failure_reason?: string | null
          id?: string
          normalized_code?: string
          organization_id?: string
          passed?: boolean
          scanned_code?: string
          tested_at?: string
          tested_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "barcode_scan_tests_organization_id_barcode_id_fkey"
            columns: ["organization_id", "barcode_id"]
            isOneToOne: false
            referencedRelation: "product_barcodes"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "barcode_scan_tests_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      brands: {
        Row: {
          code: string
          created_at: string
          created_by: string | null
          description: string
          display_name: string
          gs1_company_prefix: string | null
          id: string
          is_active: boolean
          logo_ref: string | null
          manufacturer: string | null
          manufacturer_id: string | null
          merged_into_id: string | null
          organization_id: string
          row_version: number
          updated_at: string
          updated_by: string | null
          web_catalog_published: boolean
          website: string | null
          website_url: string | null
        }
        Insert: {
          code: string
          created_at?: string
          created_by?: string | null
          description?: string
          display_name: string
          gs1_company_prefix?: string | null
          id?: string
          is_active?: boolean
          logo_ref?: string | null
          manufacturer?: string | null
          manufacturer_id?: string | null
          merged_into_id?: string | null
          organization_id: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          web_catalog_published?: boolean
          website?: string | null
          website_url?: string | null
        }
        Update: {
          code?: string
          created_at?: string
          created_by?: string | null
          description?: string
          display_name?: string
          gs1_company_prefix?: string | null
          id?: string
          is_active?: boolean
          logo_ref?: string | null
          manufacturer?: string | null
          manufacturer_id?: string | null
          merged_into_id?: string | null
          organization_id?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          web_catalog_published?: boolean
          website?: string | null
          website_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "brands_manufacturer_fkey"
            columns: ["organization_id", "manufacturer_id"]
            isOneToOne: false
            referencedRelation: "product_manufacturers"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "brands_merged_into_fkey"
            columns: ["organization_id", "merged_into_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "brands_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      catch_weight_measurements: {
        Row: {
          average_unit_weight: number | null
          created_at: string
          created_by: string | null
          customer_invoice_line_id: string | null
          customer_return_line_id: string | null
          exception_approval_reason: string | null
          exception_approved_at: string | null
          exception_approved_by: string | null
          goods_receipt_line_id: string | null
          gross_weight: number
          id: string
          locked_at: string | null
          locked_by: string | null
          measured_at: string
          measured_by: string | null
          net_weight: number | null
          notes: string | null
          organization_id: string
          pick_task_event_id: number | null
          policy_snapshot: Json
          product_id: string
          row_version: number
          sales_order_line_id: string | null
          scale_device_id: string | null
          shipment_line_id: string | null
          status: string | null
          supersedes_measurement_id: string | null
          tare_weight: number
          tolerance_issues: string[]
          unit_count: number | null
          updated_at: string
          updated_by: string | null
          weight_uom_id: string
        }
        Insert: {
          average_unit_weight?: number | null
          created_at?: string
          created_by?: string | null
          customer_invoice_line_id?: string | null
          customer_return_line_id?: string | null
          exception_approval_reason?: string | null
          exception_approved_at?: string | null
          exception_approved_by?: string | null
          goods_receipt_line_id?: string | null
          gross_weight: number
          id?: string
          locked_at?: string | null
          locked_by?: string | null
          measured_at?: string
          measured_by?: string | null
          net_weight?: number | null
          notes?: string | null
          organization_id: string
          pick_task_event_id?: number | null
          policy_snapshot: Json
          product_id: string
          row_version?: number
          sales_order_line_id?: string | null
          scale_device_id?: string | null
          shipment_line_id?: string | null
          status?: string | null
          supersedes_measurement_id?: string | null
          tare_weight?: number
          tolerance_issues?: string[]
          unit_count?: number | null
          updated_at?: string
          updated_by?: string | null
          weight_uom_id: string
        }
        Update: {
          average_unit_weight?: number | null
          created_at?: string
          created_by?: string | null
          customer_invoice_line_id?: string | null
          customer_return_line_id?: string | null
          exception_approval_reason?: string | null
          exception_approved_at?: string | null
          exception_approved_by?: string | null
          goods_receipt_line_id?: string | null
          gross_weight?: number
          id?: string
          locked_at?: string | null
          locked_by?: string | null
          measured_at?: string
          measured_by?: string | null
          net_weight?: number | null
          notes?: string | null
          organization_id?: string
          pick_task_event_id?: number | null
          policy_snapshot?: Json
          product_id?: string
          row_version?: number
          sales_order_line_id?: string | null
          scale_device_id?: string | null
          shipment_line_id?: string | null
          status?: string | null
          supersedes_measurement_id?: string | null
          tare_weight?: number
          tolerance_issues?: string[]
          unit_count?: number | null
          updated_at?: string
          updated_by?: string | null
          weight_uom_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "catch_weight_measurements_organization_id_customer_invoice_fkey"
            columns: ["organization_id", "customer_invoice_line_id"]
            isOneToOne: false
            referencedRelation: "customer_invoice_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "catch_weight_measurements_organization_id_customer_return__fkey"
            columns: ["organization_id", "customer_return_line_id"]
            isOneToOne: false
            referencedRelation: "customer_return_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "catch_weight_measurements_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "catch_weight_measurements_organization_id_goods_receipt_li_fkey"
            columns: ["organization_id", "goods_receipt_line_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "catch_weight_measurements_organization_id_goods_receipt_li_fkey"
            columns: ["organization_id", "goods_receipt_line_id"]
            isOneToOne: false
            referencedRelation: "landed_cost_line_overview"
            referencedColumns: ["organization_id", "goods_receipt_line_id"]
          },
          {
            foreignKeyName: "catch_weight_measurements_organization_id_product_id_fkey"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "catch_weight_measurements_organization_id_sales_order_line_fkey"
            columns: ["organization_id", "sales_order_line_id"]
            isOneToOne: false
            referencedRelation: "sales_order_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "catch_weight_measurements_organization_id_scale_device_id_fkey"
            columns: ["organization_id", "scale_device_id"]
            isOneToOne: false
            referencedRelation: "operational_devices"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "catch_weight_measurements_organization_id_shipment_line_id_fkey"
            columns: ["organization_id", "shipment_line_id"]
            isOneToOne: false
            referencedRelation: "shipment_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "catch_weight_measurements_pick_task_event_tenant_fkey"
            columns: ["organization_id", "pick_task_event_id"]
            isOneToOne: false
            referencedRelation: "pick_task_events"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "catch_weight_measurements_weight_uom_id_fkey"
            columns: ["weight_uom_id"]
            isOneToOne: false
            referencedRelation: "units_of_measure"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "catch_weight_supersedes_same_company"
            columns: ["organization_id", "supersedes_measurement_id"]
            isOneToOne: false
            referencedRelation: "catch_weight_measurements"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      certification_types: {
        Row: {
          code: string
          created_at: string
          created_by: string | null
          display_name: string
          id: string
          organization_id: string
          row_version: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          code: string
          created_at?: string
          created_by?: string | null
          display_name: string
          id?: string
          organization_id: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          code?: string
          created_at?: string
          created_by?: string | null
          display_name?: string
          id?: string
          organization_id?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "certification_types_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      commission_assignments: {
        Row: {
          commission_plan_id: string
          created_at: string
          created_by: string | null
          employee_id: string
          id: string
          organization_id: string
          row_version: number
          updated_at: string
          updated_by: string | null
          valid_from: string
          valid_to: string | null
        }
        Insert: {
          commission_plan_id: string
          created_at?: string
          created_by?: string | null
          employee_id: string
          id?: string
          organization_id: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          valid_from?: string
          valid_to?: string | null
        }
        Update: {
          commission_plan_id?: string
          created_at?: string
          created_by?: string | null
          employee_id?: string
          id?: string
          organization_id?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          valid_from?: string
          valid_to?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "commission_assignments_employee_fk"
            columns: ["organization_id", "employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "commission_assignments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "commission_assignments_plan_fk"
            columns: ["organization_id", "commission_plan_id"]
            isOneToOne: false
            referencedRelation: "commission_plans"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      commission_plan_tiers: {
        Row: {
          commission_plan_id: string
          commission_rate: number
          created_at: string
          created_by: string | null
          id: string
          organization_id: string
          row_version: number
          threshold_amount: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          commission_plan_id: string
          commission_rate: number
          created_at?: string
          created_by?: string | null
          id?: string
          organization_id: string
          row_version?: number
          threshold_amount?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          commission_plan_id?: string
          commission_rate?: number
          created_at?: string
          created_by?: string | null
          id?: string
          organization_id?: string
          row_version?: number
          threshold_amount?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "commission_plan_tiers_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "commission_plan_tiers_plan_fk"
            columns: ["organization_id", "commission_plan_id"]
            isOneToOne: false
            referencedRelation: "commission_plans"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      commission_plans: {
        Row: {
          basis: string
          code: string
          created_at: string
          created_by: string | null
          default_rate: number
          display_name: string
          id: string
          is_active: boolean
          organization_id: string
          payment_trigger: string
          row_version: number
          updated_at: string
          updated_by: string | null
          valid_from: string
          valid_to: string | null
        }
        Insert: {
          basis?: string
          code: string
          created_at?: string
          created_by?: string | null
          default_rate?: number
          display_name: string
          id?: string
          is_active?: boolean
          organization_id: string
          payment_trigger?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          valid_from?: string
          valid_to?: string | null
        }
        Update: {
          basis?: string
          code?: string
          created_at?: string
          created_by?: string | null
          default_rate?: number
          display_name?: string
          id?: string
          is_active?: boolean
          organization_id?: string
          payment_trigger?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          valid_from?: string
          valid_to?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "commission_plans_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      commission_statement_lines: {
        Row: {
          adjustment_amount: number
          adjustment_reason: string | null
          basis_amount: number
          commission_amount: number | null
          commission_rate: number
          commission_statement_id: string
          created_at: string
          created_by: string | null
          customer_invoice_id: string | null
          customer_invoice_line_id: string | null
          id: string
          line_number: number
          organization_id: string
          payable_amount: number | null
          row_version: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          adjustment_amount?: number
          adjustment_reason?: string | null
          basis_amount: number
          commission_amount?: number | null
          commission_rate: number
          commission_statement_id: string
          created_at?: string
          created_by?: string | null
          customer_invoice_id?: string | null
          customer_invoice_line_id?: string | null
          id?: string
          line_number: number
          organization_id: string
          payable_amount?: number | null
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          adjustment_amount?: number
          adjustment_reason?: string | null
          basis_amount?: number
          commission_amount?: number | null
          commission_rate?: number
          commission_statement_id?: string
          created_at?: string
          created_by?: string | null
          customer_invoice_id?: string | null
          customer_invoice_line_id?: string | null
          id?: string
          line_number?: number
          organization_id?: string
          payable_amount?: number | null
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "commission_statement_lines_invoice_fk"
            columns: ["organization_id", "customer_invoice_id"]
            isOneToOne: false
            referencedRelation: "customer_invoice_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "commission_statement_lines_invoice_fk"
            columns: ["organization_id", "customer_invoice_id"]
            isOneToOne: false
            referencedRelation: "customer_invoices"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "commission_statement_lines_invoice_line_fk"
            columns: ["organization_id", "customer_invoice_line_id"]
            isOneToOne: false
            referencedRelation: "customer_invoice_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "commission_statement_lines_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "commission_statement_lines_statement_fk"
            columns: ["organization_id", "commission_statement_id"]
            isOneToOne: false
            referencedRelation: "commission_statements"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      commission_statements: {
        Row: {
          created_at: string
          created_by: string | null
          employee_id: string
          id: string
          organization_id: string
          period_end: string
          period_start: string
          row_version: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          employee_id: string
          id?: string
          organization_id: string
          period_end: string
          period_start: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          employee_id?: string
          id?: string
          organization_id?: string
          period_end?: string
          period_start?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "commission_statements_employee_fk"
            columns: ["organization_id", "employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "commission_statements_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_credit_limits: {
        Row: {
          created_at: string
          created_by: string | null
          credit_limit: number
          currency_code: string
          customer_id: string
          id: string
          organization_id: string
          row_version: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          credit_limit?: number
          currency_code: string
          customer_id: string
          id?: string
          organization_id: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          credit_limit?: number
          currency_code?: string
          customer_id?: string
          id?: string
          organization_id?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_credit_limits_organization_id_customer_id_fkey"
            columns: ["organization_id", "customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      customer_credit_note_lines: {
        Row: {
          basis_quantity: number | null
          created_at: string
          created_by: string | null
          customer_credit_note_id: string
          customer_invoice_line_id: string | null
          customer_return_line_id: string | null
          description: string
          id: string
          line_number: number
          organization_id: string
          pricing_snapshot: Json
          product_id: string | null
          quantity: number
          quantity_basis: string | null
          row_version: number
          subtotal_amount: number
          tax_amount: number
          tax_rate: number
          total_amount: number
          unit_amount: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          basis_quantity?: number | null
          created_at?: string
          created_by?: string | null
          customer_credit_note_id: string
          customer_invoice_line_id?: string | null
          customer_return_line_id?: string | null
          description: string
          id?: string
          line_number: number
          organization_id: string
          pricing_snapshot?: Json
          product_id?: string | null
          quantity?: number
          quantity_basis?: string | null
          row_version?: number
          subtotal_amount: number
          tax_amount: number
          tax_rate?: number
          total_amount: number
          unit_amount: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          basis_quantity?: number | null
          created_at?: string
          created_by?: string | null
          customer_credit_note_id?: string
          customer_invoice_line_id?: string | null
          customer_return_line_id?: string | null
          description?: string
          id?: string
          line_number?: number
          organization_id?: string
          pricing_snapshot?: Json
          product_id?: string | null
          quantity?: number
          quantity_basis?: string | null
          row_version?: number
          subtotal_amount?: number
          tax_amount?: number
          tax_rate?: number
          total_amount?: number
          unit_amount?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "credit_return_line_fk"
            columns: ["organization_id", "customer_return_line_id"]
            isOneToOne: false
            referencedRelation: "customer_return_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_credit_note_lines_organization_id_customer_credit_fkey"
            columns: ["organization_id", "customer_credit_note_id"]
            isOneToOne: false
            referencedRelation: "customer_credit_notes"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_credit_note_lines_organization_id_customer_invoic_fkey"
            columns: ["organization_id", "customer_invoice_line_id"]
            isOneToOne: false
            referencedRelation: "customer_invoice_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_credit_note_lines_organization_id_product_id_fkey"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      customer_credit_notes: {
        Row: {
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          created_at: string
          created_by: string
          credit_date: string
          credit_kind: string
          currency_code: string
          customer_id: string
          customer_invoice_id: string
          document_number: string | null
          document_seq: number
          id: string
          notes: string | null
          organization_id: string
          posted_at: string | null
          posted_by: string | null
          reason_code: string
          reversal_reason: string | null
          reversed_at: string | null
          reversed_by: string | null
          row_version: number
          status: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          created_at?: string
          created_by?: string
          credit_date?: string
          credit_kind?: string
          currency_code: string
          customer_id: string
          customer_invoice_id: string
          document_number?: string | null
          document_seq?: never
          id?: string
          notes?: string | null
          organization_id: string
          posted_at?: string | null
          posted_by?: string | null
          reason_code: string
          reversal_reason?: string | null
          reversed_at?: string | null
          reversed_by?: string | null
          row_version?: number
          status?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          created_at?: string
          created_by?: string
          credit_date?: string
          credit_kind?: string
          currency_code?: string
          customer_id?: string
          customer_invoice_id?: string
          document_number?: string | null
          document_seq?: never
          id?: string
          notes?: string | null
          organization_id?: string
          posted_at?: string | null
          posted_by?: string | null
          reason_code?: string
          reversal_reason?: string | null
          reversed_at?: string | null
          reversed_by?: string | null
          row_version?: number
          status?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_credit_notes_organization_id_customer_id_fkey"
            columns: ["organization_id", "customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_credit_notes_organization_id_customer_invoice_id_fkey"
            columns: ["organization_id", "customer_invoice_id"]
            isOneToOne: false
            referencedRelation: "customer_invoice_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_credit_notes_organization_id_customer_invoice_id_fkey"
            columns: ["organization_id", "customer_invoice_id"]
            isOneToOne: false
            referencedRelation: "customer_invoices"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_credit_notes_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_invoice_line_shipment_allocations: {
        Row: {
          base_quantity: number
          created_at: string
          created_by: string
          customer_invoice_line_id: string
          id: string
          organization_id: string
          shipment_line_id: string
        }
        Insert: {
          base_quantity: number
          created_at?: string
          created_by?: string
          customer_invoice_line_id: string
          id?: string
          organization_id: string
          shipment_line_id: string
        }
        Update: {
          base_quantity?: number
          created_at?: string
          created_by?: string
          customer_invoice_line_id?: string
          id?: string
          organization_id?: string
          shipment_line_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "customer_invoice_line_shipmen_organization_id_customer_inv_fkey"
            columns: ["organization_id", "customer_invoice_line_id"]
            isOneToOne: false
            referencedRelation: "customer_invoice_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_invoice_line_shipmen_organization_id_shipment_lin_fkey"
            columns: ["organization_id", "shipment_line_id"]
            isOneToOne: false
            referencedRelation: "shipment_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_invoice_line_shipment_allocations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_invoice_lines: {
        Row: {
          base_quantity: number | null
          conversion_to_base: number | null
          created_at: string
          created_by: string | null
          customer_invoice_id: string
          description: string
          discount_amount: number
          id: string
          line_number: number
          order_quantity_exact: number | null
          organization_id: string
          pricing_allocation_policy: string
          pricing_component_residual_amount: number
          pricing_order_base_quantity: number | null
          pricing_order_discount_amount: number | null
          pricing_order_subtotal_amount: number | null
          pricing_order_tax_amount: number | null
          pricing_order_total_amount: number | null
          pricing_rounding_residual_amount: number
          product_id: string | null
          product_uom_id: string | null
          quantity: number
          row_version: number
          sales_order_line_id: string | null
          subtotal_amount: number | null
          tax_amount: number | null
          tax_rate: number
          total_amount: number | null
          unit_price: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          base_quantity?: number | null
          conversion_to_base?: number | null
          created_at?: string
          created_by?: string | null
          customer_invoice_id: string
          description: string
          discount_amount?: number
          id?: string
          line_number: number
          order_quantity_exact?: number | null
          organization_id: string
          pricing_allocation_policy?: string
          pricing_component_residual_amount?: number
          pricing_order_base_quantity?: number | null
          pricing_order_discount_amount?: number | null
          pricing_order_subtotal_amount?: number | null
          pricing_order_tax_amount?: number | null
          pricing_order_total_amount?: number | null
          pricing_rounding_residual_amount?: number
          product_id?: string | null
          product_uom_id?: string | null
          quantity: number
          row_version?: number
          sales_order_line_id?: string | null
          subtotal_amount?: number | null
          tax_amount?: number | null
          tax_rate?: number
          total_amount?: number | null
          unit_price: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          base_quantity?: number | null
          conversion_to_base?: number | null
          created_at?: string
          created_by?: string | null
          customer_invoice_id?: string
          description?: string
          discount_amount?: number
          id?: string
          line_number?: number
          order_quantity_exact?: number | null
          organization_id?: string
          pricing_allocation_policy?: string
          pricing_component_residual_amount?: number
          pricing_order_base_quantity?: number | null
          pricing_order_discount_amount?: number | null
          pricing_order_subtotal_amount?: number | null
          pricing_order_tax_amount?: number | null
          pricing_order_total_amount?: number | null
          pricing_rounding_residual_amount?: number
          product_id?: string | null
          product_uom_id?: string | null
          quantity?: number
          row_version?: number
          sales_order_line_id?: string | null
          subtotal_amount?: number | null
          tax_amount?: number | null
          tax_rate?: number
          total_amount?: number | null
          unit_price?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_invoice_lines_organization_id_customer_invoice_id_fkey"
            columns: ["organization_id", "customer_invoice_id"]
            isOneToOne: false
            referencedRelation: "customer_invoice_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_invoice_lines_organization_id_customer_invoice_id_fkey"
            columns: ["organization_id", "customer_invoice_id"]
            isOneToOne: false
            referencedRelation: "customer_invoices"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_invoice_lines_organization_id_product_id_product__fkey"
            columns: ["organization_id", "product_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "customer_invoice_lines_organization_id_sales_order_line_id_fkey"
            columns: ["organization_id", "sales_order_line_id"]
            isOneToOne: false
            referencedRelation: "sales_order_lines"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      customer_invoices: {
        Row: {
          created_at: string
          created_by: string
          currency_code: string
          customer_id: string
          customer_reference: string | null
          document_number: string | null
          document_seq: number
          due_date: string
          id: string
          invoice_date: string
          notes: string | null
          organization_id: string
          posted_at: string | null
          posted_by: string | null
          row_version: number
          sales_order_id: string | null
          status: string | null
          updated_at: string
          updated_by: string | null
          void_reason: string | null
          voided_at: string | null
          voided_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          currency_code: string
          customer_id: string
          customer_reference?: string | null
          document_number?: string | null
          document_seq?: never
          due_date: string
          id?: string
          invoice_date?: string
          notes?: string | null
          organization_id: string
          posted_at?: string | null
          posted_by?: string | null
          row_version?: number
          sales_order_id?: string | null
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          void_reason?: string | null
          voided_at?: string | null
          voided_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          currency_code?: string
          customer_id?: string
          customer_reference?: string | null
          document_number?: string | null
          document_seq?: never
          due_date?: string
          id?: string
          invoice_date?: string
          notes?: string | null
          organization_id?: string
          posted_at?: string | null
          posted_by?: string | null
          row_version?: number
          sales_order_id?: string | null
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          void_reason?: string | null
          voided_at?: string | null
          voided_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_invoices_organization_id_customer_id_fkey"
            columns: ["organization_id", "customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_invoices_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_invoices_organization_id_sales_order_id_fkey"
            columns: ["organization_id", "sales_order_id"]
            isOneToOne: false
            referencedRelation: "sales_order_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_invoices_organization_id_sales_order_id_fkey"
            columns: ["organization_id", "sales_order_id"]
            isOneToOne: false
            referencedRelation: "sales_orders"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      customer_payment_allocations: {
        Row: {
          amount: number
          created_at: string
          created_by: string | null
          customer_invoice_id: string
          customer_payment_id: string
          id: string
          organization_id: string
          row_version: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          amount: number
          created_at?: string
          created_by?: string | null
          customer_invoice_id: string
          customer_payment_id: string
          id?: string
          organization_id: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          amount?: number
          created_at?: string
          created_by?: string | null
          customer_invoice_id?: string
          customer_payment_id?: string
          id?: string
          organization_id?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_payment_allocations_organization_id_customer_invo_fkey"
            columns: ["organization_id", "customer_invoice_id"]
            isOneToOne: false
            referencedRelation: "customer_invoice_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_payment_allocations_organization_id_customer_invo_fkey"
            columns: ["organization_id", "customer_invoice_id"]
            isOneToOne: false
            referencedRelation: "customer_invoices"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_payment_allocations_organization_id_customer_paym_fkey"
            columns: ["organization_id", "customer_payment_id"]
            isOneToOne: false
            referencedRelation: "customer_payment_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_payment_allocations_organization_id_customer_paym_fkey"
            columns: ["organization_id", "customer_payment_id"]
            isOneToOne: false
            referencedRelation: "customer_payments"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      customer_payments: {
        Row: {
          amount: number
          created_at: string
          created_by: string
          currency_code: string
          customer_id: string
          document_number: string | null
          document_seq: number
          external_reference: string | null
          id: string
          notes: string | null
          organization_id: string
          payment_method: string | null
          posted_at: string | null
          posted_by: string | null
          received_on: string
          row_version: number
          status: string | null
          updated_at: string
          updated_by: string | null
          void_reason: string | null
          voided_at: string | null
          voided_by: string | null
        }
        Insert: {
          amount: number
          created_at?: string
          created_by?: string
          currency_code: string
          customer_id: string
          document_number?: string | null
          document_seq?: never
          external_reference?: string | null
          id?: string
          notes?: string | null
          organization_id: string
          payment_method?: string | null
          posted_at?: string | null
          posted_by?: string | null
          received_on?: string
          row_version?: number
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          void_reason?: string | null
          voided_at?: string | null
          voided_by?: string | null
        }
        Update: {
          amount?: number
          created_at?: string
          created_by?: string
          currency_code?: string
          customer_id?: string
          document_number?: string | null
          document_seq?: never
          external_reference?: string | null
          id?: string
          notes?: string | null
          organization_id?: string
          payment_method?: string | null
          posted_at?: string | null
          posted_by?: string | null
          received_on?: string
          row_version?: number
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          void_reason?: string | null
          voided_at?: string | null
          voided_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_payments_organization_id_customer_id_fkey"
            columns: ["organization_id", "customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_payments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_price_lists: {
        Row: {
          created_at: string
          created_by: string | null
          customer_id: string
          customer_site_id: string | null
          id: string
          is_active: boolean
          organization_id: string
          price_list_id: string
          priority: number
          row_version: number
          scope_key: string | null
          updated_at: string
          updated_by: string | null
          valid_during: unknown
          valid_from: string
          valid_to: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          customer_id: string
          customer_site_id?: string | null
          id?: string
          is_active?: boolean
          organization_id: string
          price_list_id: string
          priority?: number
          row_version?: number
          scope_key?: string | null
          updated_at?: string
          updated_by?: string | null
          valid_during?: unknown
          valid_from?: string
          valid_to?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          customer_id?: string
          customer_site_id?: string | null
          id?: string
          is_active?: boolean
          organization_id?: string
          price_list_id?: string
          priority?: number
          row_version?: number
          scope_key?: string | null
          updated_at?: string
          updated_by?: string | null
          valid_during?: unknown
          valid_from?: string
          valid_to?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_price_lists_organization_id_customer_id_customer__fkey"
            columns: ["organization_id", "customer_id", "customer_site_id"]
            isOneToOne: false
            referencedRelation: "customer_sites"
            referencedColumns: ["organization_id", "customer_id", "id"]
          },
          {
            foreignKeyName: "customer_price_lists_organization_id_customer_id_fkey"
            columns: ["organization_id", "customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_price_lists_organization_id_price_list_id_fkey"
            columns: ["organization_id", "price_list_id"]
            isOneToOne: false
            referencedRelation: "price_lists"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      customer_quote_lines: {
        Row: {
          base_quantity: number
          conversion_to_base: number
          created_at: string
          created_by: string | null
          customer_quote_id: string
          id: string
          line_number: number
          organization_id: string
          product_id: string
          product_uom_id: string
          quantity: number
          quote_key: string
          row_version: number
          total_amount: number
          unit_price: number
          updated_at: string
          updated_by: string | null
          warehouse_id: string
        }
        Insert: {
          base_quantity: number
          conversion_to_base: number
          created_at?: string
          created_by?: string | null
          customer_quote_id: string
          id?: string
          line_number: number
          organization_id: string
          product_id: string
          product_uom_id: string
          quantity: number
          quote_key: string
          row_version?: number
          total_amount: number
          unit_price: number
          updated_at?: string
          updated_by?: string | null
          warehouse_id: string
        }
        Update: {
          base_quantity?: number
          conversion_to_base?: number
          created_at?: string
          created_by?: string | null
          customer_quote_id?: string
          id?: string
          line_number?: number
          organization_id?: string
          product_id?: string
          product_uom_id?: string
          quantity?: number
          quote_key?: string
          row_version?: number
          total_amount?: number
          unit_price?: number
          updated_at?: string
          updated_by?: string | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "customer_quote_lines_organization_id_customer_quote_id_fkey"
            columns: ["organization_id", "customer_quote_id"]
            isOneToOne: false
            referencedRelation: "customer_quotes"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_quote_lines_organization_id_product_id_product_uo_fkey"
            columns: ["organization_id", "product_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "customer_quote_lines_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      customer_quotes: {
        Row: {
          accepted_at: string | null
          accepted_by: string | null
          accepted_sales_order_id: string | null
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          created_at: string
          created_by: string | null
          currency_code: string
          customer_id: string
          customer_site_id: string
          document_number: string
          document_seq: number
          expires_on: string
          id: string
          notes: string | null
          organization_id: string
          quote_date: string
          requested_delivery_date: string
          row_version: number
          status: string
          updated_at: string
          updated_by: string | null
          warehouse_id: string
        }
        Insert: {
          accepted_at?: string | null
          accepted_by?: string | null
          accepted_sales_order_id?: string | null
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          created_at?: string
          created_by?: string | null
          currency_code: string
          customer_id: string
          customer_site_id: string
          document_number: string
          document_seq: number
          expires_on: string
          id?: string
          notes?: string | null
          organization_id: string
          quote_date: string
          requested_delivery_date: string
          row_version?: number
          status?: string
          updated_at?: string
          updated_by?: string | null
          warehouse_id: string
        }
        Update: {
          accepted_at?: string | null
          accepted_by?: string | null
          accepted_sales_order_id?: string | null
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          created_at?: string
          created_by?: string | null
          currency_code?: string
          customer_id?: string
          customer_site_id?: string
          document_number?: string
          document_seq?: number
          expires_on?: string
          id?: string
          notes?: string | null
          organization_id?: string
          quote_date?: string
          requested_delivery_date?: string
          row_version?: number
          status?: string
          updated_at?: string
          updated_by?: string | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "customer_quotes_organization_id_accepted_sales_order_id_fkey"
            columns: ["organization_id", "accepted_sales_order_id"]
            isOneToOne: false
            referencedRelation: "sales_order_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_quotes_organization_id_accepted_sales_order_id_fkey"
            columns: ["organization_id", "accepted_sales_order_id"]
            isOneToOne: false
            referencedRelation: "sales_orders"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_quotes_organization_id_customer_id_customer_site__fkey"
            columns: ["organization_id", "customer_id", "customer_site_id"]
            isOneToOne: false
            referencedRelation: "customer_sites"
            referencedColumns: ["organization_id", "customer_id", "id"]
          },
          {
            foreignKeyName: "customer_quotes_organization_id_customer_id_fkey"
            columns: ["organization_id", "customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_quotes_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_quotes_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      customer_return_lines: {
        Row: {
          base_quantity: number | null
          bin_id: string | null
          conversion_to_base: number
          created_at: string
          created_by: string | null
          customer_return_id: string
          disposition: string
          id: string
          line_number: number
          lot_id: string | null
          notes: string | null
          organization_id: string
          product_id: string
          product_uom_id: string
          quantity: number
          reason_code: string | null
          row_version: number
          sales_order_line_id: string | null
          source_shipment_line_id: string
          updated_at: string
          updated_by: string | null
          warehouse_id: string
        }
        Insert: {
          base_quantity?: number | null
          bin_id?: string | null
          conversion_to_base: number
          created_at?: string
          created_by?: string | null
          customer_return_id: string
          disposition?: string
          id?: string
          line_number: number
          lot_id?: string | null
          notes?: string | null
          organization_id: string
          product_id: string
          product_uom_id: string
          quantity: number
          reason_code?: string | null
          row_version?: number
          sales_order_line_id?: string | null
          source_shipment_line_id: string
          updated_at?: string
          updated_by?: string | null
          warehouse_id: string
        }
        Update: {
          base_quantity?: number | null
          bin_id?: string | null
          conversion_to_base?: number
          created_at?: string
          created_by?: string | null
          customer_return_id?: string
          disposition?: string
          id?: string
          line_number?: number
          lot_id?: string | null
          notes?: string | null
          organization_id?: string
          product_id?: string
          product_uom_id?: string
          quantity?: number
          reason_code?: string | null
          row_version?: number
          sales_order_line_id?: string | null
          source_shipment_line_id?: string
          updated_at?: string
          updated_by?: string | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "customer_return_lines_organization_id_customer_return_id_fkey"
            columns: ["organization_id", "customer_return_id"]
            isOneToOne: false
            referencedRelation: "customer_returns"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_return_lines_organization_id_product_id_lot_id_fkey"
            columns: ["organization_id", "product_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "customer_return_lines_organization_id_product_id_product_u_fkey"
            columns: ["organization_id", "product_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "customer_return_lines_organization_id_sales_order_line_id_fkey"
            columns: ["organization_id", "sales_order_line_id"]
            isOneToOne: false
            referencedRelation: "sales_order_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_return_lines_organization_id_warehouse_id_bin_id_fkey"
            columns: ["organization_id", "warehouse_id", "bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "customer_return_lines_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_return_shipment_source_fk"
            columns: ["organization_id", "source_shipment_line_id"]
            isOneToOne: false
            referencedRelation: "shipment_lines"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      customer_returns: {
        Row: {
          created_at: string
          created_by: string
          customer_id: string
          document_number: string | null
          document_seq: number
          external_reference: string
          id: string
          notes: string | null
          organization_id: string
          posted_at: string | null
          posted_by: string | null
          reason_code: string
          received_on: string
          reversal_reason: string | null
          reversed_at: string | null
          reversed_by: string | null
          row_version: number
          sales_order_id: string | null
          status: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          customer_id: string
          document_number?: string | null
          document_seq?: never
          external_reference: string
          id?: string
          notes?: string | null
          organization_id: string
          posted_at?: string | null
          posted_by?: string | null
          reason_code: string
          received_on?: string
          reversal_reason?: string | null
          reversed_at?: string | null
          reversed_by?: string | null
          row_version?: number
          sales_order_id?: string | null
          status?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          customer_id?: string
          document_number?: string | null
          document_seq?: never
          external_reference?: string
          id?: string
          notes?: string | null
          organization_id?: string
          posted_at?: string | null
          posted_by?: string | null
          reason_code?: string
          received_on?: string
          reversal_reason?: string | null
          reversed_at?: string | null
          reversed_by?: string | null
          row_version?: number
          sales_order_id?: string | null
          status?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_returns_organization_id_customer_id_fkey"
            columns: ["organization_id", "customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_returns_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_returns_organization_id_sales_order_id_fkey"
            columns: ["organization_id", "sales_order_id"]
            isOneToOne: false
            referencedRelation: "sales_order_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_returns_organization_id_sales_order_id_fkey"
            columns: ["organization_id", "sales_order_id"]
            isOneToOne: false
            referencedRelation: "sales_orders"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      customer_sales_assignments: {
        Row: {
          created_at: string
          created_by: string | null
          customer_id: string
          employee_id: string
          id: string
          organization_id: string
          row_version: number
          updated_at: string
          updated_by: string | null
          valid_from: string
          valid_to: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          customer_id: string
          employee_id: string
          id?: string
          organization_id: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          valid_from?: string
          valid_to?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          customer_id?: string
          employee_id?: string
          id?: string
          organization_id?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          valid_from?: string
          valid_to?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_sales_assignments_customer_fk"
            columns: ["organization_id", "customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_sales_assignments_employee_fk"
            columns: ["organization_id", "employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_sales_assignments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_sites: {
        Row: {
          address_line_1: string | null
          address_line_2: string | null
          city: string | null
          code: string
          contact_name: string | null
          country_code: string | null
          created_at: string
          created_by: string | null
          customer_id: string
          delivery_instructions: string | null
          delivery_window_end: string | null
          delivery_window_start: string | null
          display_name: string
          email: string | null
          id: string
          is_active: boolean
          is_default_billing: boolean
          is_default_shipping: boolean
          latitude: number | null
          longitude: number | null
          organization_id: string
          phone: string | null
          postal_code: string | null
          region: string | null
          row_version: number
          site_type: string
          time_zone: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          address_line_1?: string | null
          address_line_2?: string | null
          city?: string | null
          code: string
          contact_name?: string | null
          country_code?: string | null
          created_at?: string
          created_by?: string | null
          customer_id: string
          delivery_instructions?: string | null
          delivery_window_end?: string | null
          delivery_window_start?: string | null
          display_name: string
          email?: string | null
          id?: string
          is_active?: boolean
          is_default_billing?: boolean
          is_default_shipping?: boolean
          latitude?: number | null
          longitude?: number | null
          organization_id: string
          phone?: string | null
          postal_code?: string | null
          region?: string | null
          row_version?: number
          site_type?: string
          time_zone?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          address_line_1?: string | null
          address_line_2?: string | null
          city?: string | null
          code?: string
          contact_name?: string | null
          country_code?: string | null
          created_at?: string
          created_by?: string | null
          customer_id?: string
          delivery_instructions?: string | null
          delivery_window_end?: string | null
          delivery_window_start?: string | null
          display_name?: string
          email?: string | null
          id?: string
          is_active?: boolean
          is_default_billing?: boolean
          is_default_shipping?: boolean
          latitude?: number | null
          longitude?: number | null
          organization_id?: string
          phone?: string | null
          postal_code?: string | null
          region?: string | null
          row_version?: number
          site_type?: string
          time_zone?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_sites_organization_id_customer_id_fkey"
            columns: ["organization_id", "customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      customers: {
        Row: {
          code: string
          created_at: string
          created_by: string | null
          credit_hold_at: string | null
          credit_hold_reason: string | null
          display_name: string
          email: string | null
          id: string
          is_active: boolean
          legal_name: string
          organization_id: string
          payment_term_id: string | null
          phone: string | null
          row_version: number
          search_vector: unknown
          tax_id: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          code: string
          created_at?: string
          created_by?: string | null
          credit_hold_at?: string | null
          credit_hold_reason?: string | null
          display_name: string
          email?: string | null
          id?: string
          is_active?: boolean
          legal_name: string
          organization_id: string
          payment_term_id?: string | null
          phone?: string | null
          row_version?: number
          search_vector?: unknown
          tax_id?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          code?: string
          created_at?: string
          created_by?: string | null
          credit_hold_at?: string | null
          credit_hold_reason?: string | null
          display_name?: string
          email?: string | null
          id?: string
          is_active?: boolean
          legal_name?: string
          organization_id?: string
          payment_term_id?: string | null
          phone?: string | null
          row_version?: number
          search_vector?: unknown
          tax_id?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customers_organization_id_payment_term_id_fkey"
            columns: ["organization_id", "payment_term_id"]
            isOneToOne: false
            referencedRelation: "payment_terms"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      data_quality_fix_plan_drafts: {
        Row: {
          command_receipt_id: string
          created_at: string
          created_by: string
          draft_number: number
          id: string
          organization_id: string
          plan_steps: Json
          row_version: number
          scope_snapshot: Json
          status: string
          title: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          command_receipt_id: string
          created_at?: string
          created_by: string
          draft_number?: never
          id?: string
          organization_id: string
          plan_steps?: Json
          row_version?: number
          scope_snapshot?: Json
          status?: string
          title: string
          updated_at?: string
          updated_by: string
        }
        Update: {
          command_receipt_id?: string
          created_at?: string
          created_by?: string
          draft_number?: never
          id?: string
          organization_id?: string
          plan_steps?: Json
          row_version?: number
          scope_snapshot?: Json
          status?: string
          title?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "data_quality_fix_plan_drafts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      delivery_exceptions: {
        Row: {
          acknowledged_at: string | null
          acknowledged_by: string | null
          created_at: string
          created_by: string | null
          details: string | null
          exception_type: string
          id: string
          occurred_at: string
          organization_id: string
          proof_of_delivery_id: string | null
          resolution: string | null
          resolved_at: string | null
          resolved_by: string | null
          route_id: string
          route_stop_id: string | null
          row_version: number
          severity: string
          status: string | null
          summary: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          acknowledged_at?: string | null
          acknowledged_by?: string | null
          created_at?: string
          created_by?: string | null
          details?: string | null
          exception_type: string
          id?: string
          occurred_at?: string
          organization_id: string
          proof_of_delivery_id?: string | null
          resolution?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          route_id: string
          route_stop_id?: string | null
          row_version?: number
          severity?: string
          status?: string | null
          summary: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          acknowledged_at?: string | null
          acknowledged_by?: string | null
          created_at?: string
          created_by?: string | null
          details?: string | null
          exception_type?: string
          id?: string
          occurred_at?: string
          organization_id?: string
          proof_of_delivery_id?: string | null
          resolution?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          route_id?: string
          route_stop_id?: string | null
          row_version?: number
          severity?: string
          status?: string | null
          summary?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "delivery_exception_proof_company_fk"
            columns: ["organization_id", "proof_of_delivery_id"]
            isOneToOne: false
            referencedRelation: "proof_of_deliveries"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "delivery_exceptions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "delivery_exceptions_organization_id_route_id_fkey"
            columns: ["organization_id", "route_id"]
            isOneToOne: false
            referencedRelation: "delivery_routes"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "delivery_exceptions_organization_id_route_stop_id_fkey"
            columns: ["organization_id", "route_stop_id"]
            isOneToOne: false
            referencedRelation: "route_stops"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      delivery_routes: {
        Row: {
          actual_return_at: string | null
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          completed_at: string | null
          completed_by: string | null
          created_at: string
          created_by: string | null
          dispatched_at: string | null
          dispatched_by: string | null
          document_number: string | null
          document_seq: number
          driver_employee_id: string | null
          id: string
          notes: string | null
          organization_id: string
          planned_departure_at: string | null
          planned_pallets: number | null
          planned_return_at: string | null
          planned_volume: number | null
          planned_weight: number | null
          released_at: string | null
          released_by: string | null
          route_name: string | null
          row_version: number
          service_date: string
          status: string | null
          updated_at: string
          updated_by: string | null
          vehicle_id: string | null
          warehouse_id: string
        }
        Insert: {
          actual_return_at?: string | null
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          completed_at?: string | null
          completed_by?: string | null
          created_at?: string
          created_by?: string | null
          dispatched_at?: string | null
          dispatched_by?: string | null
          document_number?: string | null
          document_seq?: never
          driver_employee_id?: string | null
          id?: string
          notes?: string | null
          organization_id: string
          planned_departure_at?: string | null
          planned_pallets?: number | null
          planned_return_at?: string | null
          planned_volume?: number | null
          planned_weight?: number | null
          released_at?: string | null
          released_by?: string | null
          route_name?: string | null
          row_version?: number
          service_date?: string
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          vehicle_id?: string | null
          warehouse_id: string
        }
        Update: {
          actual_return_at?: string | null
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          completed_at?: string | null
          completed_by?: string | null
          created_at?: string
          created_by?: string | null
          dispatched_at?: string | null
          dispatched_by?: string | null
          document_number?: string | null
          document_seq?: never
          driver_employee_id?: string | null
          id?: string
          notes?: string | null
          organization_id?: string
          planned_departure_at?: string | null
          planned_pallets?: number | null
          planned_return_at?: string | null
          planned_volume?: number | null
          planned_weight?: number | null
          released_at?: string | null
          released_by?: string | null
          route_name?: string | null
          row_version?: number
          service_date?: string
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          vehicle_id?: string | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "delivery_routes_organization_id_driver_employee_id_fkey"
            columns: ["organization_id", "driver_employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "delivery_routes_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "delivery_routes_organization_id_vehicle_id_fkey"
            columns: ["organization_id", "vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "delivery_routes_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      discrepancy_material_effects: {
        Row: {
          command_key: string
          cycle_id: string
          effect_kind: string
          effect_sequence: number
          entity_id: string
          evidence: Json
          id: number
          occurred_at: string
          occurred_by: string
          organization_id: string
        }
        Insert: {
          command_key: string
          cycle_id: string
          effect_kind: string
          effect_sequence: number
          entity_id: string
          evidence: Json
          id?: never
          occurred_at?: string
          occurred_by: string
          organization_id: string
        }
        Update: {
          command_key?: string
          cycle_id?: string
          effect_kind?: string
          effect_sequence?: number
          entity_id?: string
          evidence?: Json
          id?: never
          occurred_at?: string
          occurred_by?: string
          organization_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "discrepancy_material_effects_organization_id_cycle_id_fkey"
            columns: ["organization_id", "cycle_id"]
            isOneToOne: false
            referencedRelation: "discrepancy_workflow_cycles"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "discrepancy_material_effects_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      discrepancy_workflow_cycles: {
        Row: {
          claimed_at: string | null
          claimed_by: string | null
          closed_at: string | null
          closed_by: string | null
          created_at: string
          created_by: string
          cycle_number: number
          decided_at: string | null
          decided_by: string | null
          decision_code: string | null
          decision_notes: string | null
          effect_status: string
          id: string
          investigation_started_at: string | null
          investigation_started_by: string | null
          organization_id: string
          resolved_at: string | null
          resolved_by: string | null
          row_version: number
          source_id: string
          source_kind: string
          updated_at: string
          updated_by: string
          workflow_status: string
        }
        Insert: {
          claimed_at?: string | null
          claimed_by?: string | null
          closed_at?: string | null
          closed_by?: string | null
          created_at?: string
          created_by: string
          cycle_number: number
          decided_at?: string | null
          decided_by?: string | null
          decision_code?: string | null
          decision_notes?: string | null
          effect_status?: string
          id?: string
          investigation_started_at?: string | null
          investigation_started_by?: string | null
          organization_id: string
          resolved_at?: string | null
          resolved_by?: string | null
          row_version?: number
          source_id: string
          source_kind: string
          updated_at?: string
          updated_by: string
          workflow_status: string
        }
        Update: {
          claimed_at?: string | null
          claimed_by?: string | null
          closed_at?: string | null
          closed_by?: string | null
          created_at?: string
          created_by?: string
          cycle_number?: number
          decided_at?: string | null
          decided_by?: string | null
          decision_code?: string | null
          decision_notes?: string | null
          effect_status?: string
          id?: string
          investigation_started_at?: string | null
          investigation_started_by?: string | null
          organization_id?: string
          resolved_at?: string | null
          resolved_by?: string | null
          row_version?: number
          source_id?: string
          source_kind?: string
          updated_at?: string
          updated_by?: string
          workflow_status?: string
        }
        Relationships: [
          {
            foreignKeyName: "discrepancy_workflow_cycles_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      discrepancy_workflow_events: {
        Row: {
          actor_user_id: string
          command_key: string
          cycle_id: string
          cycle_number: number
          cycle_row_version: number
          decision_code: string | null
          effect_status: string
          event_type: string
          id: number
          notes: string | null
          occurred_at: string
          organization_id: string
          source_id: string
          source_kind: string
        }
        Insert: {
          actor_user_id: string
          command_key: string
          cycle_id: string
          cycle_number: number
          cycle_row_version: number
          decision_code?: string | null
          effect_status: string
          event_type: string
          id?: never
          notes?: string | null
          occurred_at?: string
          organization_id: string
          source_id: string
          source_kind: string
        }
        Update: {
          actor_user_id?: string
          command_key?: string
          cycle_id?: string
          cycle_number?: number
          cycle_row_version?: number
          decision_code?: string | null
          effect_status?: string
          event_type?: string
          id?: never
          notes?: string | null
          occurred_at?: string
          organization_id?: string
          source_id?: string
          source_kind?: string
        }
        Relationships: [
          {
            foreignKeyName: "discrepancy_workflow_events_organization_id_cycle_id_fkey"
            columns: ["organization_id", "cycle_id"]
            isOneToOne: false
            referencedRelation: "discrepancy_workflow_cycles"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      employee_certifications: {
        Row: {
          certification_type_id: string
          created_at: string
          created_by: string | null
          employee_id: string
          expires_on: string | null
          id: string
          organization_id: string
          revoked_at: string | null
          row_version: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          certification_type_id: string
          created_at?: string
          created_by?: string | null
          employee_id: string
          expires_on?: string | null
          id?: string
          organization_id: string
          revoked_at?: string | null
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          certification_type_id?: string
          created_at?: string
          created_by?: string | null
          employee_id?: string
          expires_on?: string | null
          id?: string
          organization_id?: string
          revoked_at?: string | null
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employee_certifications_organization_id_certification_type_fkey"
            columns: ["organization_id", "certification_type_id"]
            isOneToOne: false
            referencedRelation: "certification_types"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "employee_certifications_organization_id_employee_id_fkey"
            columns: ["organization_id", "employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "employee_certifications_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      employees: {
        Row: {
          created_at: string
          created_by: string | null
          display_name: string
          employee_number: string
          employment_status: string
          home_warehouse_id: string | null
          id: string
          is_driver: boolean
          organization_id: string
          position_id: string | null
          row_version: number
          updated_at: string
          updated_by: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          display_name: string
          employee_number: string
          employment_status?: string
          home_warehouse_id?: string | null
          id?: string
          is_driver?: boolean
          organization_id: string
          position_id?: string | null
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          display_name?: string
          employee_number?: string
          employment_status?: string
          home_warehouse_id?: string | null
          id?: string
          is_driver?: boolean
          organization_id?: string
          position_id?: string | null
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employees_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_organization_id_home_warehouse_id_fkey"
            columns: ["organization_id", "home_warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "employees_organization_id_position_id_fkey"
            columns: ["organization_id", "position_id"]
            isOneToOne: false
            referencedRelation: "job_positions"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      file_attachments: {
        Row: {
          bucket_id: string
          checksum_sha256: string | null
          created_at: string
          created_by: string | null
          deleted_at: string | null
          deleted_by: string | null
          entity_id: string | null
          entity_type: string
          id: string
          metadata: Json
          mime_type: string | null
          object_path: string
          organization_id: string
          original_filename: string | null
          purpose: string
          row_version: number
          size_bytes: number | null
          status: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          bucket_id: string
          checksum_sha256?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          deleted_by?: string | null
          entity_id?: string | null
          entity_type: string
          id?: string
          metadata?: Json
          mime_type?: string | null
          object_path: string
          organization_id: string
          original_filename?: string | null
          purpose?: string
          row_version?: number
          size_bytes?: number | null
          status?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          bucket_id?: string
          checksum_sha256?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          deleted_by?: string | null
          entity_id?: string | null
          entity_type?: string
          id?: string
          metadata?: Json
          mime_type?: string | null
          object_path?: string
          organization_id?: string
          original_filename?: string | null
          purpose?: string
          row_version?: number
          size_bytes?: number | null
          status?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "file_attachments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      food_show_quote_lines: {
        Row: {
          created_at: string
          created_by: string | null
          food_show_quote_id: string
          food_show_special_id: string
          id: string
          line_number: number
          line_total_amount: number
          list_price: number
          organization_id: string
          quantity: number
          row_version: number
          show_price: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          food_show_quote_id: string
          food_show_special_id: string
          id?: string
          line_number: number
          line_total_amount: number
          list_price: number
          organization_id: string
          quantity: number
          row_version?: number
          show_price: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          food_show_quote_id?: string
          food_show_special_id?: string
          id?: string
          line_number?: number
          line_total_amount?: number
          list_price?: number
          organization_id?: string
          quantity?: number
          row_version?: number
          show_price?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "food_show_quote_lines_organization_id_food_show_quote_id_fkey"
            columns: ["organization_id", "food_show_quote_id"]
            isOneToOne: false
            referencedRelation: "food_show_quotes"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "food_show_quote_lines_organization_id_food_show_special_id_fkey"
            columns: ["organization_id", "food_show_special_id"]
            isOneToOne: false
            referencedRelation: "food_show_specials"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      food_show_quotes: {
        Row: {
          created_at: string
          created_by: string | null
          currency_code: string
          customer_id: string
          document_number: string
          document_seq: number
          food_show_id: string
          id: string
          organization_id: string
          rep_name: string
          row_version: number
          saved_vs_list_amount: number
          sent_to_desk_at: string | null
          sent_to_desk_by: string | null
          status: string
          total_amount: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          currency_code: string
          customer_id: string
          document_number: string
          document_seq: number
          food_show_id: string
          id?: string
          organization_id: string
          rep_name: string
          row_version?: number
          saved_vs_list_amount: number
          sent_to_desk_at?: string | null
          sent_to_desk_by?: string | null
          status?: string
          total_amount: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          currency_code?: string
          customer_id?: string
          document_number?: string
          document_seq?: number
          food_show_id?: string
          id?: string
          organization_id?: string
          rep_name?: string
          row_version?: number
          saved_vs_list_amount?: number
          sent_to_desk_at?: string | null
          sent_to_desk_by?: string | null
          status?: string
          total_amount?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "food_show_quotes_organization_id_customer_id_fkey"
            columns: ["organization_id", "customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "food_show_quotes_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "food_show_quotes_organization_id_food_show_id_fkey"
            columns: ["organization_id", "food_show_id"]
            isOneToOne: false
            referencedRelation: "food_shows"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      food_show_specials: {
        Row: {
          created_at: string
          created_by: string | null
          food_show_id: string
          id: string
          list_price: number
          organization_id: string
          product_uom_id: string
          row_version: number
          show_price: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          food_show_id: string
          id?: string
          list_price: number
          organization_id: string
          product_uom_id: string
          row_version?: number
          show_price: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          food_show_id?: string
          id?: string
          list_price?: number
          organization_id?: string
          product_uom_id?: string
          row_version?: number
          show_price?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "food_show_specials_organization_id_food_show_id_fkey"
            columns: ["organization_id", "food_show_id"]
            isOneToOne: false
            referencedRelation: "food_shows"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "food_show_specials_organization_id_product_uom_id_fkey"
            columns: ["organization_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      food_shows: {
        Row: {
          code: string
          created_at: string
          created_by: string | null
          display_name: string
          ends_on: string
          id: string
          organization_id: string
          reps: Json
          row_version: number
          starts_on: string
          status: string
          updated_at: string
          updated_by: string | null
          venue: string
        }
        Insert: {
          code: string
          created_at?: string
          created_by?: string | null
          display_name: string
          ends_on: string
          id?: string
          organization_id: string
          reps?: Json
          row_version?: number
          starts_on: string
          status: string
          updated_at?: string
          updated_by?: string | null
          venue: string
        }
        Update: {
          code?: string
          created_at?: string
          created_by?: string | null
          display_name?: string
          ends_on?: string
          id?: string
          organization_id?: string
          reps?: Json
          row_version?: number
          starts_on?: string
          status?: string
          updated_at?: string
          updated_by?: string | null
          venue?: string
        }
        Relationships: [
          {
            foreignKeyName: "food_shows_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      food_trace_events: {
        Row: {
          bin_id: string | null
          critical_tracking_event: string | null
          event_type: string
          id: number
          inventory_hold_id: string | null
          inventory_movement_id: string | null
          key_data_elements: Json
          lot_id: string | null
          occurred_at: string
          organization_id: string
          product_id: string
          quantity_base: number | null
          recall_case_id: string | null
          recorded_by: string | null
          source_reference: string | null
          warehouse_id: string | null
        }
        Insert: {
          bin_id?: string | null
          critical_tracking_event?: string | null
          event_type: string
          id?: never
          inventory_hold_id?: string | null
          inventory_movement_id?: string | null
          key_data_elements?: Json
          lot_id?: string | null
          occurred_at?: string
          organization_id: string
          product_id: string
          quantity_base?: number | null
          recall_case_id?: string | null
          recorded_by?: string | null
          source_reference?: string | null
          warehouse_id?: string | null
        }
        Update: {
          bin_id?: string | null
          critical_tracking_event?: string | null
          event_type?: string
          id?: never
          inventory_hold_id?: string | null
          inventory_movement_id?: string | null
          key_data_elements?: Json
          lot_id?: string | null
          occurred_at?: string
          organization_id?: string
          product_id?: string
          quantity_base?: number | null
          recall_case_id?: string | null
          recorded_by?: string | null
          source_reference?: string | null
          warehouse_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "food_trace_events_inventory_movement_tenant_fkey"
            columns: ["organization_id", "inventory_movement_id"]
            isOneToOne: false
            referencedRelation: "inventory_movements"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "food_trace_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "food_trace_events_organization_id_inventory_hold_id_fkey"
            columns: ["organization_id", "inventory_hold_id"]
            isOneToOne: false
            referencedRelation: "inventory_hold_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "food_trace_events_organization_id_inventory_hold_id_fkey"
            columns: ["organization_id", "inventory_hold_id"]
            isOneToOne: false
            referencedRelation: "inventory_holds"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "food_trace_events_organization_id_inventory_hold_id_fkey"
            columns: ["organization_id", "inventory_hold_id"]
            isOneToOne: false
            referencedRelation: "inventory_lot_hold_activity"
            referencedColumns: ["organization_id", "inventory_hold_id"]
          },
          {
            foreignKeyName: "food_trace_events_organization_id_product_id_fkey"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "food_trace_events_organization_id_product_id_lot_id_fkey"
            columns: ["organization_id", "product_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "food_trace_events_organization_id_recall_case_id_fkey"
            columns: ["organization_id", "recall_case_id"]
            isOneToOne: false
            referencedRelation: "recall_cases"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "food_trace_events_organization_id_warehouse_id_bin_id_fkey"
            columns: ["organization_id", "warehouse_id", "bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "food_trace_events_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      gl_account_mappings: {
        Row: {
          created_at: string
          created_by: string | null
          gl_account_id: string
          id: string
          is_active: boolean
          mapping_key: string
          organization_id: string
          priority: number
          row_version: number
          updated_at: string
          updated_by: string | null
          valid_from: string
          valid_to: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          gl_account_id: string
          id?: string
          is_active?: boolean
          mapping_key: string
          organization_id: string
          priority?: number
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          valid_from?: string
          valid_to?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          gl_account_id?: string
          id?: string
          is_active?: boolean
          mapping_key?: string
          organization_id?: string
          priority?: number
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          valid_from?: string
          valid_to?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "gl_account_mappings_account_fk"
            columns: ["organization_id", "gl_account_id"]
            isOneToOne: false
            referencedRelation: "gl_accounts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "gl_account_mappings_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      gl_accounts: {
        Row: {
          account_type: string
          code: string
          created_at: string
          created_by: string | null
          description: string | null
          display_name: string
          id: string
          is_active: boolean
          is_postable: boolean
          normal_balance: string
          organization_id: string
          parent_account_id: string | null
          row_version: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          account_type: string
          code: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          display_name: string
          id?: string
          is_active?: boolean
          is_postable?: boolean
          normal_balance: string
          organization_id: string
          parent_account_id?: string | null
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          account_type?: string
          code?: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          display_name?: string
          id?: string
          is_active?: boolean
          is_postable?: boolean
          normal_balance?: string
          organization_id?: string
          parent_account_id?: string | null
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "gl_accounts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gl_accounts_parent_fk"
            columns: ["organization_id", "parent_account_id"]
            isOneToOne: false
            referencedRelation: "gl_accounts"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      goods_receipt_attachments: {
        Row: {
          attached_at: string
          attached_by: string
          file_attachment_id: string
          goods_receipt_id: string
          id: string
          organization_id: string
          purpose: string
          receipt_row_version_at_attach: number
        }
        Insert: {
          attached_at?: string
          attached_by: string
          file_attachment_id: string
          goods_receipt_id: string
          id?: string
          organization_id: string
          purpose: string
          receipt_row_version_at_attach: number
        }
        Update: {
          attached_at?: string
          attached_by?: string
          file_attachment_id?: string
          goods_receipt_id?: string
          id?: string
          organization_id?: string
          purpose?: string
          receipt_row_version_at_attach?: number
        }
        Relationships: [
          {
            foreignKeyName: "goods_receipt_attachments_organization_id_file_attachment__fkey"
            columns: ["organization_id", "file_attachment_id"]
            isOneToOne: false
            referencedRelation: "file_attachments"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_attachments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "goods_receipt_attachments_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_attachments_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_attachments_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_invoice_intake_candidates"
            referencedColumns: ["organization_id", "goods_receipt_id"]
          },
        ]
      }
      goods_receipt_capture_serials: {
        Row: {
          created_at: string
          created_by: string
          goods_receipt_capture_id: string
          id: string
          normalized_serial: string | null
          organization_id: string
          product_id: string
          serial_number: string
        }
        Insert: {
          created_at?: string
          created_by?: string
          goods_receipt_capture_id: string
          id?: string
          normalized_serial?: string | null
          organization_id: string
          product_id: string
          serial_number: string
        }
        Update: {
          created_at?: string
          created_by?: string
          goods_receipt_capture_id?: string
          id?: string
          normalized_serial?: string | null
          organization_id?: string
          product_id?: string
          serial_number?: string
        }
        Relationships: [
          {
            foreignKeyName: "goods_receipt_capture_serials_organization_id_product_id_g_fkey"
            columns: [
              "organization_id",
              "product_id",
              "goods_receipt_capture_id",
            ]
            isOneToOne: false
            referencedRelation: "goods_receipt_captures"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
        ]
      }
      goods_receipt_captures: {
        Row: {
          accepted_base_quantity: number | null
          accepted_disposition: string
          accepted_quantity: number
          advance_ship_notice_id: string | null
          advance_ship_notice_line_id: string | null
          conversion_to_base: number
          cost_lineage: Json | null
          created_at: string
          created_by: string
          damaged_base_quantity: number | null
          damaged_quantity: number
          destination_bin_id: string | null
          duty_per_unit: number
          expires_on: string | null
          freight_per_unit: number
          goods_receipt_id: string
          id: string
          landed_unit_cost: number
          lot_code: string | null
          lot_id: string | null
          manufactured_on: string | null
          net_weight: number | null
          notes: string | null
          organization_id: string
          product_id: string
          product_uom_id: string
          purchase_order_id: string
          purchase_order_line_id: string
          purchase_order_version_id: string
          purchase_order_version_line_id: string
          reason: string | null
          receiving_bin_id: string
          receiving_document_review_correction_id: string | null
          receiving_document_review_id: string | null
          rejected_base_quantity: number | null
          rejected_quantity: number
          row_version: number
          temperature_c: number | null
          updated_at: string
          updated_by: string
          vendor_unit_cost: number
          warehouse_id: string
        }
        Insert: {
          accepted_base_quantity?: number | null
          accepted_disposition?: string
          accepted_quantity?: number
          advance_ship_notice_id?: string | null
          advance_ship_notice_line_id?: string | null
          conversion_to_base: number
          cost_lineage?: Json | null
          created_at?: string
          created_by?: string
          damaged_base_quantity?: number | null
          damaged_quantity?: number
          destination_bin_id?: string | null
          duty_per_unit?: number
          expires_on?: string | null
          freight_per_unit?: number
          goods_receipt_id: string
          id?: string
          landed_unit_cost: number
          lot_code?: string | null
          lot_id?: string | null
          manufactured_on?: string | null
          net_weight?: number | null
          notes?: string | null
          organization_id: string
          product_id: string
          product_uom_id: string
          purchase_order_id: string
          purchase_order_line_id: string
          purchase_order_version_id: string
          purchase_order_version_line_id: string
          reason?: string | null
          receiving_bin_id: string
          receiving_document_review_correction_id?: string | null
          receiving_document_review_id?: string | null
          rejected_base_quantity?: number | null
          rejected_quantity?: number
          row_version?: number
          temperature_c?: number | null
          updated_at?: string
          updated_by?: string
          vendor_unit_cost: number
          warehouse_id: string
        }
        Update: {
          accepted_base_quantity?: number | null
          accepted_disposition?: string
          accepted_quantity?: number
          advance_ship_notice_id?: string | null
          advance_ship_notice_line_id?: string | null
          conversion_to_base?: number
          cost_lineage?: Json | null
          created_at?: string
          created_by?: string
          damaged_base_quantity?: number | null
          damaged_quantity?: number
          destination_bin_id?: string | null
          duty_per_unit?: number
          expires_on?: string | null
          freight_per_unit?: number
          goods_receipt_id?: string
          id?: string
          landed_unit_cost?: number
          lot_code?: string | null
          lot_id?: string | null
          manufactured_on?: string | null
          net_weight?: number | null
          notes?: string | null
          organization_id?: string
          product_id?: string
          product_uom_id?: string
          purchase_order_id?: string
          purchase_order_line_id?: string
          purchase_order_version_id?: string
          purchase_order_version_line_id?: string
          reason?: string | null
          receiving_bin_id?: string
          receiving_document_review_correction_id?: string | null
          receiving_document_review_id?: string | null
          rejected_base_quantity?: number | null
          rejected_quantity?: number
          row_version?: number
          temperature_c?: number | null
          updated_at?: string
          updated_by?: string
          vendor_unit_cost?: number
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "goods_receipt_captures_document_review_fk"
            columns: ["organization_id", "receiving_document_review_id"]
            isOneToOne: false
            referencedRelation: "receiving_document_reviews"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_captures_organization_id_advance_ship_notice_fkey"
            columns: [
              "organization_id",
              "advance_ship_notice_line_id",
              "advance_ship_notice_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "purchase_order_version_line_id",
            ]
            isOneToOne: false
            referencedRelation: "advance_ship_notice_lines"
            referencedColumns: [
              "organization_id",
              "id",
              "advance_ship_notice_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "purchase_order_version_line_id",
            ]
          },
          {
            foreignKeyName: "goods_receipt_captures_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_captures_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_captures_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_invoice_intake_candidates"
            referencedColumns: ["organization_id", "goods_receipt_id"]
          },
          {
            foreignKeyName: "goods_receipt_captures_organization_id_goods_receipt_id_pu_fkey"
            columns: [
              "organization_id",
              "goods_receipt_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "warehouse_id",
              "receiving_bin_id",
            ]
            isOneToOne: false
            referencedRelation: "goods_receipts"
            referencedColumns: [
              "organization_id",
              "id",
              "purchase_order_id",
              "purchase_order_version_id",
              "warehouse_id",
              "receiving_bin_id",
            ]
          },
          {
            foreignKeyName: "goods_receipt_captures_organization_id_product_id_fkey"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_captures_organization_id_product_id_lot_id_fkey"
            columns: ["organization_id", "product_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_captures_organization_id_product_id_product__fkey"
            columns: ["organization_id", "product_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_captures_organization_id_purchase_order_id_p_fkey"
            columns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "purchase_order_version_line_id",
            ]
            isOneToOne: false
            referencedRelation: "purchase_order_version_lines"
            referencedColumns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "id",
            ]
          },
          {
            foreignKeyName: "goods_receipt_captures_organization_id_purchase_order_line_fkey"
            columns: ["organization_id", "purchase_order_line_id"]
            isOneToOne: false
            referencedRelation: "purchase_order_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_captures_organization_id_warehouse_id_destin_fkey"
            columns: ["organization_id", "warehouse_id", "destination_bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_captures_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_captures_organization_id_warehouse_id_receiv_fkey"
            columns: ["organization_id", "warehouse_id", "receiving_bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
        ]
      }
      goods_receipt_lines: {
        Row: {
          advance_ship_notice_id: string | null
          advance_ship_notice_line_id: string | null
          base_quantity: number | null
          bin_id: string | null
          condition_kind: string
          conversion_to_base: number
          cost_lineage: Json | null
          created_at: string
          created_by: string | null
          destination_bin_id: string | null
          disposition: string
          duty_per_unit: number
          freight_per_unit: number
          goods_receipt_capture_id: string | null
          goods_receipt_id: string
          id: string
          landed_unit_cost: number
          line_number: number
          lot_id: string | null
          notes: string | null
          organization_id: string
          product_id: string
          product_uom_id: string
          purchase_order_id: string | null
          purchase_order_line_id: string
          purchase_order_version_id: string | null
          purchase_order_version_line_id: string | null
          quantity: number
          row_version: number
          unit_cost: number
          updated_at: string
          updated_by: string | null
          vendor_unit_cost: number
          warehouse_id: string
        }
        Insert: {
          advance_ship_notice_id?: string | null
          advance_ship_notice_line_id?: string | null
          base_quantity?: number | null
          bin_id?: string | null
          condition_kind?: string
          conversion_to_base: number
          cost_lineage?: Json | null
          created_at?: string
          created_by?: string | null
          destination_bin_id?: string | null
          disposition?: string
          duty_per_unit?: number
          freight_per_unit?: number
          goods_receipt_capture_id?: string | null
          goods_receipt_id: string
          id?: string
          landed_unit_cost: number
          line_number: number
          lot_id?: string | null
          notes?: string | null
          organization_id: string
          product_id: string
          product_uom_id: string
          purchase_order_id?: string | null
          purchase_order_line_id: string
          purchase_order_version_id?: string | null
          purchase_order_version_line_id?: string | null
          quantity: number
          row_version?: number
          unit_cost: number
          updated_at?: string
          updated_by?: string | null
          vendor_unit_cost: number
          warehouse_id: string
        }
        Update: {
          advance_ship_notice_id?: string | null
          advance_ship_notice_line_id?: string | null
          base_quantity?: number | null
          bin_id?: string | null
          condition_kind?: string
          conversion_to_base?: number
          cost_lineage?: Json | null
          created_at?: string
          created_by?: string | null
          destination_bin_id?: string | null
          disposition?: string
          duty_per_unit?: number
          freight_per_unit?: number
          goods_receipt_capture_id?: string | null
          goods_receipt_id?: string
          id?: string
          landed_unit_cost?: number
          line_number?: number
          lot_id?: string | null
          notes?: string | null
          organization_id?: string
          product_id?: string
          product_uom_id?: string
          purchase_order_id?: string | null
          purchase_order_line_id?: string
          purchase_order_version_id?: string | null
          purchase_order_version_line_id?: string | null
          quantity?: number
          row_version?: number
          unit_cost?: number
          updated_at?: string
          updated_by?: string | null
          vendor_unit_cost?: number
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "goods_receipt_lines_capture_fk"
            columns: [
              "organization_id",
              "goods_receipt_id",
              "goods_receipt_capture_id",
            ]
            isOneToOne: false
            referencedRelation: "goods_receipt_captures"
            referencedColumns: ["organization_id", "goods_receipt_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_lines_destination_bin_fk"
            columns: ["organization_id", "warehouse_id", "destination_bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_lines_exact_asn_line_fk"
            columns: [
              "organization_id",
              "advance_ship_notice_line_id",
              "advance_ship_notice_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "purchase_order_version_line_id",
            ]
            isOneToOne: false
            referencedRelation: "advance_ship_notice_lines"
            referencedColumns: [
              "organization_id",
              "id",
              "advance_ship_notice_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "purchase_order_version_line_id",
            ]
          },
          {
            foreignKeyName: "goods_receipt_lines_exact_version_line_fk"
            columns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "purchase_order_version_line_id",
            ]
            isOneToOne: false
            referencedRelation: "purchase_order_version_lines"
            referencedColumns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "id",
            ]
          },
          {
            foreignKeyName: "goods_receipt_lines_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_lines_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_lines_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_invoice_intake_candidates"
            referencedColumns: ["organization_id", "goods_receipt_id"]
          },
          {
            foreignKeyName: "goods_receipt_lines_organization_id_product_id_lot_id_fkey"
            columns: ["organization_id", "product_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_lines_organization_id_product_id_product_uom_fkey"
            columns: ["organization_id", "product_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_lines_organization_id_purchase_order_line_id_fkey"
            columns: ["organization_id", "purchase_order_line_id"]
            isOneToOne: false
            referencedRelation: "purchase_order_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_lines_organization_id_warehouse_id_bin_id_fkey"
            columns: ["organization_id", "warehouse_id", "bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_lines_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      goods_receipt_unexpected_items: {
        Row: {
          conversion_to_base: number
          expires_on: string | null
          goods_receipt_attachment_id: string
          goods_receipt_id: string
          id: string
          lot_code: string | null
          organization_id: string
          product_id: string
          product_uom_id: string
          quantity: number
          quantity_base: number | null
          quarantine_bin_id: string
          reason: string
          receiving_document_review_correction_id: string | null
          receiving_document_review_id: string | null
          recorded_at: string
          recorded_by: string
          return_goods_receipt_attachment_id: string | null
          return_reason: string | null
          returned_at: string | null
          returned_by: string | null
          row_version: number
          status: string
          warehouse_id: string
        }
        Insert: {
          conversion_to_base: number
          expires_on?: string | null
          goods_receipt_attachment_id: string
          goods_receipt_id: string
          id?: string
          lot_code?: string | null
          organization_id: string
          product_id: string
          product_uom_id: string
          quantity: number
          quantity_base?: number | null
          quarantine_bin_id: string
          reason: string
          receiving_document_review_correction_id?: string | null
          receiving_document_review_id?: string | null
          recorded_at?: string
          recorded_by: string
          return_goods_receipt_attachment_id?: string | null
          return_reason?: string | null
          returned_at?: string | null
          returned_by?: string | null
          row_version?: number
          status?: string
          warehouse_id: string
        }
        Update: {
          conversion_to_base?: number
          expires_on?: string | null
          goods_receipt_attachment_id?: string
          goods_receipt_id?: string
          id?: string
          lot_code?: string | null
          organization_id?: string
          product_id?: string
          product_uom_id?: string
          quantity?: number
          quantity_base?: number | null
          quarantine_bin_id?: string
          reason?: string
          receiving_document_review_correction_id?: string | null
          receiving_document_review_id?: string | null
          recorded_at?: string
          recorded_by?: string
          return_goods_receipt_attachment_id?: string | null
          return_reason?: string | null
          returned_at?: string | null
          returned_by?: string | null
          row_version?: number
          status?: string
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "goods_receipt_unexpected_ite_organization_id_goods_receip_fkey1"
            columns: [
              "organization_id",
              "goods_receipt_id",
              "goods_receipt_attachment_id",
            ]
            isOneToOne: false
            referencedRelation: "goods_receipt_attachments"
            referencedColumns: ["organization_id", "goods_receipt_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_unexpected_ite_organization_id_goods_receip_fkey2"
            columns: [
              "organization_id",
              "goods_receipt_id",
              "return_goods_receipt_attachment_id",
            ]
            isOneToOne: false
            referencedRelation: "goods_receipt_attachments"
            referencedColumns: ["organization_id", "goods_receipt_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_unexpected_ite_organization_id_warehouse_id_fkey1"
            columns: ["organization_id", "warehouse_id", "quarantine_bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_unexpected_item_organization_id_goods_receip_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_unexpected_item_organization_id_goods_receip_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_unexpected_item_organization_id_goods_receip_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_invoice_intake_candidates"
            referencedColumns: ["organization_id", "goods_receipt_id"]
          },
          {
            foreignKeyName: "goods_receipt_unexpected_item_organization_id_product_id_p_fkey"
            columns: ["organization_id", "product_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_unexpected_item_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_unexpected_items_document_review_fk"
            columns: ["organization_id", "receiving_document_review_id"]
            isOneToOne: false
            referencedRelation: "receiving_document_reviews"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_unexpected_items_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "goods_receipt_unexpected_items_organization_id_product_id_fkey"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      goods_receipts: {
        Row: {
          accounting_lineage: Json | null
          advance_ship_notice_id: string | null
          created_at: string
          created_by: string
          document_number: string | null
          document_seq: number
          id: string
          notes: string | null
          organization_id: string
          posted_at: string | null
          posted_by: string | null
          purchase_order_id: string
          purchase_order_version_id: string | null
          received_on: string
          receiving_arrival_id: string | null
          receiving_bin_id: string | null
          receiving_document_review_id: string | null
          reversal_reason: string | null
          reversed_at: string | null
          reversed_by: string | null
          row_version: number
          status: string | null
          supplier_document_number: string | null
          updated_at: string
          updated_by: string | null
          vendor_id: string | null
          warehouse_id: string | null
        }
        Insert: {
          accounting_lineage?: Json | null
          advance_ship_notice_id?: string | null
          created_at?: string
          created_by?: string
          document_number?: string | null
          document_seq?: never
          id?: string
          notes?: string | null
          organization_id: string
          posted_at?: string | null
          posted_by?: string | null
          purchase_order_id: string
          purchase_order_version_id?: string | null
          received_on?: string
          receiving_arrival_id?: string | null
          receiving_bin_id?: string | null
          receiving_document_review_id?: string | null
          reversal_reason?: string | null
          reversed_at?: string | null
          reversed_by?: string | null
          row_version?: number
          status?: string | null
          supplier_document_number?: string | null
          updated_at?: string
          updated_by?: string | null
          vendor_id?: string | null
          warehouse_id?: string | null
        }
        Update: {
          accounting_lineage?: Json | null
          advance_ship_notice_id?: string | null
          created_at?: string
          created_by?: string
          document_number?: string | null
          document_seq?: never
          id?: string
          notes?: string | null
          organization_id?: string
          posted_at?: string | null
          posted_by?: string | null
          purchase_order_id?: string
          purchase_order_version_id?: string | null
          received_on?: string
          receiving_arrival_id?: string | null
          receiving_bin_id?: string | null
          receiving_document_review_id?: string | null
          reversal_reason?: string | null
          reversed_at?: string | null
          reversed_by?: string | null
          row_version?: number
          status?: string | null
          supplier_document_number?: string | null
          updated_at?: string
          updated_by?: string | null
          vendor_id?: string | null
          warehouse_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "goods_receipts_document_review_fk"
            columns: ["organization_id", "receiving_document_review_id"]
            isOneToOne: false
            referencedRelation: "receiving_document_reviews"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "goods_receipts_exact_asn_fk"
            columns: [
              "organization_id",
              "advance_ship_notice_id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
            isOneToOne: false
            referencedRelation: "advance_ship_notices"
            referencedColumns: [
              "organization_id",
              "id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
          },
          {
            foreignKeyName: "goods_receipts_exact_version_fk"
            columns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
            isOneToOne: false
            referencedRelation: "purchase_order_versions"
            referencedColumns: ["organization_id", "purchase_order_id", "id"]
          },
          {
            foreignKeyName: "goods_receipts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "goods_receipts_organization_id_purchase_order_id_fkey"
            columns: ["organization_id", "purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "goods_receipts_receiving_arrival_fk"
            columns: ["organization_id", "receiving_arrival_id"]
            isOneToOne: false
            referencedRelation: "receiving_arrivals"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "goods_receipts_receiving_bin_fk"
            columns: ["organization_id", "warehouse_id", "receiving_bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "goods_receipts_vendor_tenant_fk"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "goods_receipts_warehouse_fk"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      growth_audiences: {
        Row: {
          account_count: number
          approved_at: string | null
          approved_by: string | null
          audience_number: string
          built_from: string
          category_id: string
          created_at: string
          created_by: string
          id: string
          name: string
          note: string
          opportunity_minor: number
          organization_id: string
          row_version: number
          rule_text: string
          source_lot_id: string
          source_warehouse_id: string
          status: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          account_count?: number
          approved_at?: string | null
          approved_by?: string | null
          audience_number: string
          built_from: string
          category_id: string
          created_at?: string
          created_by: string
          id?: string
          name: string
          note: string
          opportunity_minor?: number
          organization_id: string
          row_version?: number
          rule_text: string
          source_lot_id: string
          source_warehouse_id: string
          status?: string
          updated_at?: string
          updated_by: string
        }
        Update: {
          account_count?: number
          approved_at?: string | null
          approved_by?: string | null
          audience_number?: string
          built_from?: string
          category_id?: string
          created_at?: string
          created_by?: string
          id?: string
          name?: string
          note?: string
          opportunity_minor?: number
          organization_id?: string
          row_version?: number
          rule_text?: string
          source_lot_id?: string
          source_warehouse_id?: string
          status?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "growth_audiences_organization_id_category_id_fkey"
            columns: ["organization_id", "category_id"]
            isOneToOne: false
            referencedRelation: "product_categories"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "growth_audiences_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "growth_audiences_organization_id_source_lot_id_fkey"
            columns: ["organization_id", "source_lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "growth_audiences_organization_id_source_warehouse_id_fkey"
            columns: ["organization_id", "source_warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      growth_campaigns: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          attributed_cases: number
          audience_id: string
          baseline_cases: number
          campaign_number: string
          channels: string[]
          created_at: string
          created_by: string
          currency_code: string
          ends_on: string
          gross_profit_per_case_minor: number
          id: string
          name: string
          organization_id: string
          row_version: number
          source_lot_id: string
          source_product_id: string
          source_quantity: number
          source_unit_cost: number
          source_warehouse_id: string
          spend_minor: number
          starts_on: string
          status: string
          tag: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          attributed_cases?: number
          audience_id: string
          baseline_cases?: number
          campaign_number: string
          channels?: string[]
          created_at?: string
          created_by: string
          currency_code: string
          ends_on: string
          gross_profit_per_case_minor?: number
          id?: string
          name: string
          organization_id: string
          row_version?: number
          source_lot_id: string
          source_product_id: string
          source_quantity: number
          source_unit_cost: number
          source_warehouse_id: string
          spend_minor?: number
          starts_on: string
          status?: string
          tag: string
          updated_at?: string
          updated_by: string
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          attributed_cases?: number
          audience_id?: string
          baseline_cases?: number
          campaign_number?: string
          channels?: string[]
          created_at?: string
          created_by?: string
          currency_code?: string
          ends_on?: string
          gross_profit_per_case_minor?: number
          id?: string
          name?: string
          organization_id?: string
          row_version?: number
          source_lot_id?: string
          source_product_id?: string
          source_quantity?: number
          source_unit_cost?: number
          source_warehouse_id?: string
          spend_minor?: number
          starts_on?: string
          status?: string
          tag?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "growth_campaigns_organization_id_audience_id_fkey"
            columns: ["organization_id", "audience_id"]
            isOneToOne: false
            referencedRelation: "growth_audiences"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "growth_campaigns_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "growth_campaigns_organization_id_source_lot_id_fkey"
            columns: ["organization_id", "source_lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "growth_campaigns_organization_id_source_product_id_fkey"
            columns: ["organization_id", "source_product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "growth_campaigns_organization_id_source_warehouse_id_fkey"
            columns: ["organization_id", "source_warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      growth_promotions: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          campaign_id: string
          created_at: string
          created_by: string
          discount_percent: number
          floor_minor: number
          id: string
          organization_id: string
          product_id: string
          promotion_number: string
          redemption_cases: number
          row_version: number
          status: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          campaign_id: string
          created_at?: string
          created_by: string
          discount_percent: number
          floor_minor: number
          id?: string
          organization_id: string
          product_id: string
          promotion_number: string
          redemption_cases?: number
          row_version?: number
          status?: string
          updated_at?: string
          updated_by: string
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          campaign_id?: string
          created_at?: string
          created_by?: string
          discount_percent?: number
          floor_minor?: number
          id?: string
          organization_id?: string
          product_id?: string
          promotion_number?: string
          redemption_cases?: number
          row_version?: number
          status?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "growth_promotions_organization_id_campaign_id_fkey"
            columns: ["organization_id", "campaign_id"]
            isOneToOne: true
            referencedRelation: "growth_campaigns"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "growth_promotions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "growth_promotions_organization_id_product_id_fkey"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      growth_vendor_coop_claims: {
        Row: {
          amount_minor: number
          campaign_id: string
          claim_number: string
          created_at: string
          created_by: string
          deal_id: string
          id: string
          organization_id: string
          prepared_at: string
          prepared_by: string
          row_version: number
          status: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          amount_minor: number
          campaign_id: string
          claim_number: string
          created_at?: string
          created_by: string
          deal_id: string
          id?: string
          organization_id: string
          prepared_at?: string
          prepared_by: string
          row_version?: number
          status?: string
          updated_at?: string
          updated_by: string
        }
        Update: {
          amount_minor?: number
          campaign_id?: string
          claim_number?: string
          created_at?: string
          created_by?: string
          deal_id?: string
          id?: string
          organization_id?: string
          prepared_at?: string
          prepared_by?: string
          row_version?: number
          status?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "growth_vendor_coop_claims_organization_id_campaign_id_fkey"
            columns: ["organization_id", "campaign_id"]
            isOneToOne: false
            referencedRelation: "growth_campaigns"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "growth_vendor_coop_claims_organization_id_deal_id_fkey"
            columns: ["organization_id", "deal_id"]
            isOneToOne: true
            referencedRelation: "growth_vendor_coop_deals"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "growth_vendor_coop_claims_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      growth_vendor_coop_deals: {
        Row: {
          bundled: boolean
          campaign_id: string
          committed_minor: number
          created_at: string
          created_by: string
          deal_type: string
          earned_minor: number
          expires_on: string | null
          id: string
          organization_id: string
          row_version: number
          status: string
          updated_at: string
          updated_by: string
          vendor_id: string
        }
        Insert: {
          bundled?: boolean
          campaign_id: string
          committed_minor: number
          created_at?: string
          created_by: string
          deal_type: string
          earned_minor?: number
          expires_on?: string | null
          id?: string
          organization_id: string
          row_version?: number
          status?: string
          updated_at?: string
          updated_by: string
          vendor_id: string
        }
        Update: {
          bundled?: boolean
          campaign_id?: string
          committed_minor?: number
          created_at?: string
          created_by?: string
          deal_type?: string
          earned_minor?: number
          expires_on?: string | null
          id?: string
          organization_id?: string
          row_version?: number
          status?: string
          updated_at?: string
          updated_by?: string
          vendor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "growth_vendor_coop_deals_organization_id_campaign_id_fkey"
            columns: ["organization_id", "campaign_id"]
            isOneToOne: true
            referencedRelation: "growth_campaigns"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "growth_vendor_coop_deals_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "growth_vendor_coop_deals_organization_id_vendor_id_fkey"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      integration_connections: {
        Row: {
          base_url: string | null
          code: string
          configuration: Json
          connected_at: string | null
          connection_status: string
          connection_type: string
          created_at: string
          created_by: string | null
          display_name: string
          external_account_id: string | null
          id: string
          is_active: boolean
          last_synced_at: string | null
          last_verified_at: string | null
          organization_id: string
          provider: string
          row_version: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          base_url?: string | null
          code: string
          configuration?: Json
          connected_at?: string | null
          connection_status?: string
          connection_type: string
          created_at?: string
          created_by?: string | null
          display_name: string
          external_account_id?: string | null
          id?: string
          is_active?: boolean
          last_synced_at?: string | null
          last_verified_at?: string | null
          organization_id: string
          provider: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          base_url?: string | null
          code?: string
          configuration?: Json
          connected_at?: string | null
          connection_status?: string
          connection_type?: string
          created_at?: string
          created_by?: string | null
          display_name?: string
          external_account_id?: string | null
          id?: string
          is_active?: boolean
          last_synced_at?: string | null
          last_verified_at?: string | null
          organization_id?: string
          provider?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "integration_connections_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      integration_events: {
        Row: {
          attempt_count: number
          direction: string
          error_message: string | null
          event_key: string
          external_event_id: string | null
          headers: Json
          id: number
          idempotency_key: string
          integration_connection_id: string
          locked_at: string | null
          locked_by: string | null
          occurred_at: string
          organization_id: string
          payload: Json
          processed_at: string | null
          processing_status: string
          received_at: string
        }
        Insert: {
          attempt_count?: number
          direction: string
          error_message?: string | null
          event_key: string
          external_event_id?: string | null
          headers?: Json
          id?: never
          idempotency_key: string
          integration_connection_id: string
          locked_at?: string | null
          locked_by?: string | null
          occurred_at: string
          organization_id: string
          payload: Json
          processed_at?: string | null
          processing_status?: string
          received_at?: string
        }
        Update: {
          attempt_count?: number
          direction?: string
          error_message?: string | null
          event_key?: string
          external_event_id?: string | null
          headers?: Json
          id?: never
          idempotency_key?: string
          integration_connection_id?: string
          locked_at?: string | null
          locked_by?: string | null
          occurred_at?: string
          organization_id?: string
          payload?: Json
          processed_at?: string | null
          processing_status?: string
          received_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "integration_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "integration_events_organization_id_integration_connection__fkey"
            columns: ["organization_id", "integration_connection_id"]
            isOneToOne: false
            referencedRelation: "integration_connection_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "integration_events_organization_id_integration_connection__fkey"
            columns: ["organization_id", "integration_connection_id"]
            isOneToOne: false
            referencedRelation: "integration_connections"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      integration_sync_definitions: {
        Row: {
          batch_size: number
          code: string
          created_at: string
          created_by: string | null
          cron_expression: string | null
          direction: string
          display_name: string
          event_key: string | null
          handler_key: string
          id: string
          integration_connection_id: string
          is_active: boolean
          object_type: string
          organization_id: string
          retry_policy: Json
          row_version: number
          trigger_type: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          batch_size?: number
          code: string
          created_at?: string
          created_by?: string | null
          cron_expression?: string | null
          direction: string
          display_name: string
          event_key?: string | null
          handler_key: string
          id?: string
          integration_connection_id: string
          is_active?: boolean
          object_type: string
          organization_id: string
          retry_policy?: Json
          row_version?: number
          trigger_type?: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          batch_size?: number
          code?: string
          created_at?: string
          created_by?: string | null
          cron_expression?: string | null
          direction?: string
          display_name?: string
          event_key?: string | null
          handler_key?: string
          id?: string
          integration_connection_id?: string
          is_active?: boolean
          object_type?: string
          organization_id?: string
          retry_policy?: Json
          row_version?: number
          trigger_type?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "integration_sync_definitions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "integration_sync_definitions_organization_id_integration_c_fkey"
            columns: ["organization_id", "integration_connection_id"]
            isOneToOne: false
            referencedRelation: "integration_connection_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "integration_sync_definitions_organization_id_integration_c_fkey"
            columns: ["organization_id", "integration_connection_id"]
            isOneToOne: false
            referencedRelation: "integration_connections"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      integration_sync_runs: {
        Row: {
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          completed_at: string | null
          completed_by: string | null
          created_at: string
          created_by: string | null
          error_message: string | null
          failed_at: string | null
          failed_by: string | null
          failure_count: number
          id: string
          idempotency_key: string | null
          input_cursor: string | null
          integration_sync_definition_id: string
          metadata: Json
          organization_id: string
          output_cursor: string | null
          processed_count: number
          row_version: number
          started_at: string | null
          started_by: string | null
          status: string | null
          success_count: number
          trigger_source: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          completed_at?: string | null
          completed_by?: string | null
          created_at?: string
          created_by?: string | null
          error_message?: string | null
          failed_at?: string | null
          failed_by?: string | null
          failure_count?: number
          id?: string
          idempotency_key?: string | null
          input_cursor?: string | null
          integration_sync_definition_id: string
          metadata?: Json
          organization_id: string
          output_cursor?: string | null
          processed_count?: number
          row_version?: number
          started_at?: string | null
          started_by?: string | null
          status?: string | null
          success_count?: number
          trigger_source?: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          completed_at?: string | null
          completed_by?: string | null
          created_at?: string
          created_by?: string | null
          error_message?: string | null
          failed_at?: string | null
          failed_by?: string | null
          failure_count?: number
          id?: string
          idempotency_key?: string | null
          input_cursor?: string | null
          integration_sync_definition_id?: string
          metadata?: Json
          organization_id?: string
          output_cursor?: string | null
          processed_count?: number
          row_version?: number
          started_at?: string | null
          started_by?: string | null
          status?: string | null
          success_count?: number
          trigger_source?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "integration_sync_runs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "integration_sync_runs_organization_id_integration_sync_def_fkey"
            columns: ["organization_id", "integration_sync_definition_id"]
            isOneToOne: false
            referencedRelation: "integration_sync_definitions"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      inventory_adjustment_lines: {
        Row: {
          base_quantity_delta: number | null
          bin_id: string | null
          conversion_to_base: number
          created_at: string
          created_by: string | null
          disposition: string
          id: string
          inventory_adjustment_id: string
          line_number: number
          lot_id: string | null
          notes: string | null
          organization_id: string
          product_id: string
          product_uom_id: string
          quantity_delta: number
          row_version: number
          unit_cost_base: number | null
          updated_at: string
          updated_by: string | null
          warehouse_id: string
        }
        Insert: {
          base_quantity_delta?: number | null
          bin_id?: string | null
          conversion_to_base: number
          created_at?: string
          created_by?: string | null
          disposition?: string
          id?: string
          inventory_adjustment_id: string
          line_number: number
          lot_id?: string | null
          notes?: string | null
          organization_id: string
          product_id: string
          product_uom_id: string
          quantity_delta: number
          row_version?: number
          unit_cost_base?: number | null
          updated_at?: string
          updated_by?: string | null
          warehouse_id: string
        }
        Update: {
          base_quantity_delta?: number | null
          bin_id?: string | null
          conversion_to_base?: number
          created_at?: string
          created_by?: string | null
          disposition?: string
          id?: string
          inventory_adjustment_id?: string
          line_number?: number
          lot_id?: string | null
          notes?: string | null
          organization_id?: string
          product_id?: string
          product_uom_id?: string
          quantity_delta?: number
          row_version?: number
          unit_cost_base?: number | null
          updated_at?: string
          updated_by?: string | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_adjustment_lines_organization_id_inventory_adjus_fkey"
            columns: ["organization_id", "inventory_adjustment_id"]
            isOneToOne: false
            referencedRelation: "inventory_adjustments"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_adjustment_lines_organization_id_product_id_lot__fkey"
            columns: ["organization_id", "product_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "inventory_adjustment_lines_organization_id_product_id_prod_fkey"
            columns: ["organization_id", "product_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "inventory_adjustment_lines_organization_id_warehouse_id_bi_fkey"
            columns: ["organization_id", "warehouse_id", "bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "inventory_adjustment_lines_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      inventory_adjustments: {
        Row: {
          created_at: string
          created_by: string
          document_number: string | null
          document_seq: number
          effective_at: string
          id: string
          notes: string | null
          organization_id: string
          posted_at: string | null
          posted_by: string | null
          reason_code: string
          reversal_reason: string | null
          reversed_at: string | null
          reversed_by: string | null
          row_version: number
          status: string | null
          updated_at: string
          updated_by: string | null
          warehouse_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string
          document_number?: string | null
          document_seq?: never
          effective_at?: string
          id?: string
          notes?: string | null
          organization_id: string
          posted_at?: string | null
          posted_by?: string | null
          reason_code: string
          reversal_reason?: string | null
          reversed_at?: string | null
          reversed_by?: string | null
          row_version?: number
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          warehouse_id: string
        }
        Update: {
          created_at?: string
          created_by?: string
          document_number?: string | null
          document_seq?: never
          effective_at?: string
          id?: string
          notes?: string | null
          organization_id?: string
          posted_at?: string | null
          posted_by?: string | null
          reason_code?: string
          reversal_reason?: string | null
          reversed_at?: string | null
          reversed_by?: string | null
          row_version?: number
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_adjustments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_adjustments_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      inventory_count_lines: {
        Row: {
          bin_id: string | null
          conversion_to_base: number
          count_round: number
          counted_base_quantity: number | null
          counted_quantity: number | null
          created_at: string
          created_by: string | null
          disposition: string
          expected_base_quantity: number
          id: string
          inventory_count_id: string
          line_number: number
          lot_id: string | null
          notes: string | null
          organization_id: string
          product_id: string
          product_uom_id: string
          row_version: number
          updated_at: string
          updated_by: string | null
          variance_base_quantity: number | null
          warehouse_id: string
        }
        Insert: {
          bin_id?: string | null
          conversion_to_base: number
          count_round?: number
          counted_base_quantity?: number | null
          counted_quantity?: number | null
          created_at?: string
          created_by?: string | null
          disposition?: string
          expected_base_quantity: number
          id?: string
          inventory_count_id: string
          line_number: number
          lot_id?: string | null
          notes?: string | null
          organization_id: string
          product_id: string
          product_uom_id: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          variance_base_quantity?: number | null
          warehouse_id: string
        }
        Update: {
          bin_id?: string | null
          conversion_to_base?: number
          count_round?: number
          counted_base_quantity?: number | null
          counted_quantity?: number | null
          created_at?: string
          created_by?: string | null
          disposition?: string
          expected_base_quantity?: number
          id?: string
          inventory_count_id?: string
          line_number?: number
          lot_id?: string | null
          notes?: string | null
          organization_id?: string
          product_id?: string
          product_uom_id?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          variance_base_quantity?: number | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_count_lines_organization_id_inventory_count_id_fkey"
            columns: ["organization_id", "inventory_count_id"]
            isOneToOne: false
            referencedRelation: "inventory_counts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_count_lines_organization_id_product_id_lot_id_fkey"
            columns: ["organization_id", "product_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "inventory_count_lines_organization_id_product_id_product_u_fkey"
            columns: ["organization_id", "product_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "inventory_count_lines_organization_id_warehouse_id_bin_id_fkey"
            columns: ["organization_id", "warehouse_id", "bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "inventory_count_lines_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      inventory_counts: {
        Row: {
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          created_at: string
          created_by: string
          description: string | null
          document_number: string | null
          document_seq: number
          id: string
          organization_id: string
          posted_at: string | null
          posted_by: string | null
          row_version: number
          started_at: string | null
          started_by: string | null
          status: string | null
          updated_at: string
          updated_by: string | null
          warehouse_id: string
        }
        Insert: {
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          created_at?: string
          created_by?: string
          description?: string | null
          document_number?: string | null
          document_seq?: never
          id?: string
          organization_id: string
          posted_at?: string | null
          posted_by?: string | null
          row_version?: number
          started_at?: string | null
          started_by?: string | null
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          warehouse_id: string
        }
        Update: {
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          created_at?: string
          created_by?: string
          description?: string | null
          document_number?: string | null
          document_seq?: never
          id?: string
          organization_id?: string
          posted_at?: string | null
          posted_by?: string | null
          row_version?: number
          started_at?: string | null
          started_by?: string | null
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_counts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_counts_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      inventory_hold_allocations: {
        Row: {
          bin_id: string | null
          created_at: string
          created_by: string | null
          disposition: string
          id: string
          inventory_hold_id: string
          lot_id: string | null
          notes: string | null
          organization_id: string
          product_id: string
          quantity_base: number
          warehouse_id: string
        }
        Insert: {
          bin_id?: string | null
          created_at?: string
          created_by?: string | null
          disposition?: string
          id?: string
          inventory_hold_id: string
          lot_id?: string | null
          notes?: string | null
          organization_id: string
          product_id: string
          quantity_base: number
          warehouse_id: string
        }
        Update: {
          bin_id?: string | null
          created_at?: string
          created_by?: string | null
          disposition?: string
          id?: string
          inventory_hold_id?: string
          lot_id?: string | null
          notes?: string | null
          organization_id?: string
          product_id?: string
          quantity_base?: number
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_hold_allocations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_hold_allocations_organization_id_inventory_hold__fkey"
            columns: ["organization_id", "inventory_hold_id"]
            isOneToOne: false
            referencedRelation: "inventory_hold_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_hold_allocations_organization_id_inventory_hold__fkey"
            columns: ["organization_id", "inventory_hold_id"]
            isOneToOne: false
            referencedRelation: "inventory_holds"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_hold_allocations_organization_id_inventory_hold__fkey"
            columns: ["organization_id", "inventory_hold_id"]
            isOneToOne: false
            referencedRelation: "inventory_lot_hold_activity"
            referencedColumns: ["organization_id", "inventory_hold_id"]
          },
          {
            foreignKeyName: "inventory_hold_allocations_organization_id_product_id_fkey"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_hold_allocations_organization_id_product_id_lot__fkey"
            columns: ["organization_id", "product_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "inventory_hold_allocations_organization_id_warehouse_id_bi_fkey"
            columns: ["organization_id", "warehouse_id", "bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "inventory_hold_allocations_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      inventory_holds: {
        Row: {
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          created_at: string
          created_by: string | null
          document_number: string | null
          document_seq: number
          hold_type: string
          id: string
          organization_id: string
          placed_at: string
          placed_by: string | null
          reason: string
          release_reason: string | null
          released_at: string | null
          released_by: string | null
          row_version: number
          scope_kind: string
          scope_lot_id: string | null
          status: string | null
          title: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          created_at?: string
          created_by?: string | null
          document_number?: string | null
          document_seq?: number
          hold_type: string
          id?: string
          organization_id: string
          placed_at?: string
          placed_by?: string | null
          reason: string
          release_reason?: string | null
          released_at?: string | null
          released_by?: string | null
          row_version?: number
          scope_kind?: string
          scope_lot_id?: string | null
          status?: string | null
          title: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          created_at?: string
          created_by?: string | null
          document_number?: string | null
          document_seq?: number
          hold_type?: string
          id?: string
          organization_id?: string
          placed_at?: string
          placed_by?: string | null
          reason?: string
          release_reason?: string | null
          released_at?: string | null
          released_by?: string | null
          row_version?: number
          scope_kind?: string
          scope_lot_id?: string | null
          status?: string | null
          title?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_holds_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_holds_scope_lot_fkey"
            columns: ["organization_id", "scope_lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      inventory_lot_quarantine_placements: {
        Row: {
          created_at: string
          created_by: string
          id: string
          inventory_lot_quarantine_id: string
          lot_id: string
          organization_id: string
          product_id: string
          quantity_base: number
          quarantine_bin_id: string
          source_bin_id: string
          warehouse_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          inventory_lot_quarantine_id: string
          lot_id: string
          organization_id: string
          product_id: string
          quantity_base: number
          quarantine_bin_id: string
          source_bin_id: string
          warehouse_id: string
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          inventory_lot_quarantine_id?: string
          lot_id?: string
          organization_id?: string
          product_id?: string
          quantity_base?: number
          quarantine_bin_id?: string
          source_bin_id?: string
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_lot_quarantine_pla_organization_id_warehouse_id_fkey1"
            columns: ["organization_id", "warehouse_id", "source_bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_quarantine_pla_organization_id_warehouse_id_fkey2"
            columns: ["organization_id", "warehouse_id", "quarantine_bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_quarantine_plac_organization_id_inventory_lo_fkey"
            columns: ["organization_id", "inventory_lot_quarantine_id"]
            isOneToOne: false
            referencedRelation: "inventory_lot_quarantine_activity"
            referencedColumns: [
              "organization_id",
              "inventory_lot_quarantine_id",
            ]
          },
          {
            foreignKeyName: "inventory_lot_quarantine_plac_organization_id_inventory_lo_fkey"
            columns: ["organization_id", "inventory_lot_quarantine_id"]
            isOneToOne: false
            referencedRelation: "inventory_lot_quarantines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_quarantine_plac_organization_id_product_id_l_fkey"
            columns: ["organization_id", "product_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_quarantine_plac_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_quarantine_placem_organization_id_product_id_fkey"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      inventory_lot_quarantines: {
        Row: {
          created_at: string
          created_by: string
          document_number: string | null
          document_seq: number
          id: string
          inventory_lot_write_off_id: string | null
          lot_id: string
          note: string
          organization_id: string
          placed_at: string
          placed_by: string
          reason_code: string
          release_reason: string | null
          release_requested_at: string | null
          release_requested_by: string | null
          released_at: string | null
          released_by: string | null
          row_version: number
          status: string | null
          updated_at: string
          updated_by: string
          written_off_at: string | null
          written_off_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          document_number?: string | null
          document_seq?: never
          id?: string
          inventory_lot_write_off_id?: string | null
          lot_id: string
          note: string
          organization_id: string
          placed_at?: string
          placed_by?: string
          reason_code: string
          release_reason?: string | null
          release_requested_at?: string | null
          release_requested_by?: string | null
          released_at?: string | null
          released_by?: string | null
          row_version?: number
          status?: string | null
          updated_at?: string
          updated_by?: string
          written_off_at?: string | null
          written_off_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          document_number?: string | null
          document_seq?: never
          id?: string
          inventory_lot_write_off_id?: string | null
          lot_id?: string
          note?: string
          organization_id?: string
          placed_at?: string
          placed_by?: string
          reason_code?: string
          release_reason?: string | null
          release_requested_at?: string | null
          release_requested_by?: string | null
          released_at?: string | null
          released_by?: string | null
          row_version?: number
          status?: string | null
          updated_at?: string
          updated_by?: string
          written_off_at?: string | null
          written_off_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_lot_quarantines_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_lot_quarantines_organization_id_lot_id_fkey"
            columns: ["organization_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_quarantines_write_off_fk"
            columns: ["organization_id", "inventory_lot_write_off_id"]
            isOneToOne: false
            referencedRelation: "inventory_lot_write_off_activity"
            referencedColumns: ["organization_id", "inventory_lot_write_off_id"]
          },
          {
            foreignKeyName: "inventory_lot_quarantines_write_off_fk"
            columns: ["organization_id", "inventory_lot_write_off_id"]
            isOneToOne: false
            referencedRelation: "inventory_lot_write_offs"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      inventory_lot_relocation_scan_evidence: {
        Row: {
          command_key: string
          destination_bin_evidence: string
          destination_bin_id: string
          id: string
          inventory_lot_relocation_task_id: string
          lot_id: string
          organization_id: string
          product_id: string
          product_or_lot_evidence: string
          quantity_base: number
          quantity_evidence: number
          source_bin_evidence: string
          source_bin_id: string
          verified_at: string
          verified_by: string
          warehouse_id: string
        }
        Insert: {
          command_key: string
          destination_bin_evidence: string
          destination_bin_id: string
          id?: string
          inventory_lot_relocation_task_id: string
          lot_id: string
          organization_id: string
          product_id: string
          product_or_lot_evidence: string
          quantity_base: number
          quantity_evidence: number
          source_bin_evidence: string
          source_bin_id: string
          verified_at?: string
          verified_by: string
          warehouse_id: string
        }
        Update: {
          command_key?: string
          destination_bin_evidence?: string
          destination_bin_id?: string
          id?: string
          inventory_lot_relocation_task_id?: string
          lot_id?: string
          organization_id?: string
          product_id?: string
          product_or_lot_evidence?: string
          quantity_base?: number
          quantity_evidence?: number
          source_bin_evidence?: string
          source_bin_id?: string
          verified_at?: string
          verified_by?: string
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_lot_relocation_sca_organization_id_warehouse_id_fkey1"
            columns: ["organization_id", "warehouse_id", "source_bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_relocation_sca_organization_id_warehouse_id_fkey2"
            columns: ["organization_id", "warehouse_id", "destination_bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_relocation_scan_e_organization_id_product_id_fkey"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_relocation_scan_organization_id_inventory_lo_fkey"
            columns: ["organization_id", "inventory_lot_relocation_task_id"]
            isOneToOne: true
            referencedRelation: "inventory_lot_relocation_tasks"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_relocation_scan_organization_id_product_id_l_fkey"
            columns: ["organization_id", "product_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_relocation_scan_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      inventory_lot_relocation_tasks: {
        Row: {
          completed_at: string | null
          completed_by: string | null
          created_at: string
          created_by: string
          from_bin_id: string
          from_disposition: string
          id: string
          inventory_lot_quarantine_id: string
          inventory_lot_quarantine_placement_id: string | null
          lot_id: string
          operation_kind: string
          organization_id: string
          product_id: string
          quantity_base: number
          row_version: number
          status: string | null
          to_bin_id: string
          to_disposition: string
          updated_at: string
          updated_by: string
          warehouse_id: string
        }
        Insert: {
          completed_at?: string | null
          completed_by?: string | null
          created_at?: string
          created_by?: string
          from_bin_id: string
          from_disposition: string
          id?: string
          inventory_lot_quarantine_id: string
          inventory_lot_quarantine_placement_id?: string | null
          lot_id: string
          operation_kind: string
          organization_id: string
          product_id: string
          quantity_base: number
          row_version?: number
          status?: string | null
          to_bin_id: string
          to_disposition: string
          updated_at?: string
          updated_by?: string
          warehouse_id: string
        }
        Update: {
          completed_at?: string | null
          completed_by?: string | null
          created_at?: string
          created_by?: string
          from_bin_id?: string
          from_disposition?: string
          id?: string
          inventory_lot_quarantine_id?: string
          inventory_lot_quarantine_placement_id?: string | null
          lot_id?: string
          operation_kind?: string
          organization_id?: string
          product_id?: string
          quantity_base?: number
          row_version?: number
          status?: string | null
          to_bin_id?: string
          to_disposition?: string
          updated_at?: string
          updated_by?: string
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_lot_relocation_tas_organization_id_inventory_lo_fkey1"
            columns: [
              "organization_id",
              "inventory_lot_quarantine_placement_id",
            ]
            isOneToOne: false
            referencedRelation: "inventory_lot_quarantine_placements"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_relocation_tas_organization_id_warehouse_id_fkey1"
            columns: ["organization_id", "warehouse_id", "from_bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_relocation_tas_organization_id_warehouse_id_fkey2"
            columns: ["organization_id", "warehouse_id", "to_bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_relocation_task_organization_id_inventory_lo_fkey"
            columns: ["organization_id", "inventory_lot_quarantine_id"]
            isOneToOne: false
            referencedRelation: "inventory_lot_quarantine_activity"
            referencedColumns: [
              "organization_id",
              "inventory_lot_quarantine_id",
            ]
          },
          {
            foreignKeyName: "inventory_lot_relocation_task_organization_id_inventory_lo_fkey"
            columns: ["organization_id", "inventory_lot_quarantine_id"]
            isOneToOne: false
            referencedRelation: "inventory_lot_quarantines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_relocation_task_organization_id_product_id_l_fkey"
            columns: ["organization_id", "product_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_relocation_task_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_relocation_tasks_organization_id_product_id_fkey"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      inventory_lot_vendor_return_placements: {
        Row: {
          allocated_expected_credit: number
          allocated_inventory_value: number
          bin_id: string
          created_at: string
          created_by: string
          disposition: string
          expected_credit_unit_value: number
          id: string
          inventory_lot_vendor_return_id: string
          inventory_unit_value: number
          lot_id: string
          organization_id: string
          product_id: string
          quantity_base: number
          warehouse_id: string
        }
        Insert: {
          allocated_expected_credit: number
          allocated_inventory_value: number
          bin_id: string
          created_at?: string
          created_by?: string
          disposition: string
          expected_credit_unit_value: number
          id?: string
          inventory_lot_vendor_return_id: string
          inventory_unit_value: number
          lot_id: string
          organization_id: string
          product_id: string
          quantity_base: number
          warehouse_id: string
        }
        Update: {
          allocated_expected_credit?: number
          allocated_inventory_value?: number
          bin_id?: string
          created_at?: string
          created_by?: string
          disposition?: string
          expected_credit_unit_value?: number
          id?: string
          inventory_lot_vendor_return_id?: string
          inventory_unit_value?: number
          lot_id?: string
          organization_id?: string
          product_id?: string
          quantity_base?: number
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_lot_vendor_return__organization_id_warehouse_id_fkey1"
            columns: ["organization_id", "warehouse_id", "bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_vendor_return_p_organization_id_inventory_lo_fkey"
            columns: ["organization_id", "inventory_lot_vendor_return_id"]
            isOneToOne: false
            referencedRelation: "inventory_lot_vendor_return_activity"
            referencedColumns: [
              "organization_id",
              "inventory_lot_vendor_return_id",
            ]
          },
          {
            foreignKeyName: "inventory_lot_vendor_return_p_organization_id_inventory_lo_fkey"
            columns: ["organization_id", "inventory_lot_vendor_return_id"]
            isOneToOne: false
            referencedRelation: "inventory_lot_vendor_returns"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_vendor_return_p_organization_id_product_id_l_fkey"
            columns: ["organization_id", "product_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_vendor_return_p_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_vendor_return_pla_organization_id_product_id_fkey"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      inventory_lot_vendor_return_source_layers: {
        Row: {
          created_at: string
          created_by: string
          currency_code: string
          goods_receipt_id: string
          goods_receipt_line_id: string
          id: string
          inventory_lot_vendor_return_id: string
          inventory_unit_value: number
          landed_charge_amount: number
          organization_id: string
          purchase_cost_amount: number
          purchase_order_id: string
          purchase_order_version_id: string
          purchase_order_version_line_id: string
          purchase_unit_value: number
          received_base_quantity: number
          received_on: string
          total_landed_cost_amount: number
          vendor_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string
          currency_code: string
          goods_receipt_id: string
          goods_receipt_line_id: string
          id?: string
          inventory_lot_vendor_return_id: string
          inventory_unit_value: number
          landed_charge_amount: number
          organization_id: string
          purchase_cost_amount: number
          purchase_order_id: string
          purchase_order_version_id: string
          purchase_order_version_line_id: string
          purchase_unit_value: number
          received_base_quantity: number
          received_on: string
          total_landed_cost_amount: number
          vendor_id: string
        }
        Update: {
          created_at?: string
          created_by?: string
          currency_code?: string
          goods_receipt_id?: string
          goods_receipt_line_id?: string
          id?: string
          inventory_lot_vendor_return_id?: string
          inventory_unit_value?: number
          landed_charge_amount?: number
          organization_id?: string
          purchase_cost_amount?: number
          purchase_order_id?: string
          purchase_order_version_id?: string
          purchase_order_version_line_id?: string
          purchase_unit_value?: number
          received_base_quantity?: number
          received_on?: string
          total_landed_cost_amount?: number
          vendor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_lot_vendor_return__organization_id_goods_receip_fkey1"
            columns: ["organization_id", "goods_receipt_line_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_vendor_return__organization_id_goods_receip_fkey1"
            columns: ["organization_id", "goods_receipt_line_id"]
            isOneToOne: false
            referencedRelation: "landed_cost_line_overview"
            referencedColumns: ["organization_id", "goods_receipt_line_id"]
          },
          {
            foreignKeyName: "inventory_lot_vendor_return__organization_id_purchase_ord_fkey1"
            columns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "purchase_order_version_line_id",
            ]
            isOneToOne: false
            referencedRelation: "purchase_order_version_lines"
            referencedColumns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "id",
            ]
          },
          {
            foreignKeyName: "inventory_lot_vendor_return_s_organization_id_goods_receip_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_vendor_return_s_organization_id_goods_receip_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_vendor_return_s_organization_id_goods_receip_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_invoice_intake_candidates"
            referencedColumns: ["organization_id", "goods_receipt_id"]
          },
          {
            foreignKeyName: "inventory_lot_vendor_return_s_organization_id_inventory_lo_fkey"
            columns: ["organization_id", "inventory_lot_vendor_return_id"]
            isOneToOne: false
            referencedRelation: "inventory_lot_vendor_return_activity"
            referencedColumns: [
              "organization_id",
              "inventory_lot_vendor_return_id",
            ]
          },
          {
            foreignKeyName: "inventory_lot_vendor_return_s_organization_id_inventory_lo_fkey"
            columns: ["organization_id", "inventory_lot_vendor_return_id"]
            isOneToOne: false
            referencedRelation: "inventory_lot_vendor_returns"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_vendor_return_s_organization_id_purchase_ord_fkey"
            columns: ["organization_id", "purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_vendor_return_sour_organization_id_vendor_id_fkey"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      inventory_lot_vendor_returns: {
        Row: {
          accounting_event_id: string | null
          accounting_status: string
          acknowledged_at: string | null
          acknowledged_by: string | null
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          created_at: string
          created_by: string
          credit_expectation_status: string
          credit_policy: string
          currency_code: string
          document_number: string | null
          document_seq: number
          expected_credit_total_value: number
          expected_credit_unit_value: number
          id: string
          inventory_total_value: number
          inventory_unit_value: number
          lot_id: string
          note: string
          organization_id: string
          physical_status: string
          reason_code: string
          requested_at: string
          requested_by: string
          row_version: number
          shipped_at: string | null
          shipped_by: string | null
          snapshot_quantity_base: number
          updated_at: string
          updated_by: string
          valuation_policy: string
          vendor_acknowledgement_status: string
          vendor_id: string
        }
        Insert: {
          accounting_event_id?: string | null
          accounting_status?: string
          acknowledged_at?: string | null
          acknowledged_by?: string | null
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          created_at?: string
          created_by?: string
          credit_expectation_status?: string
          credit_policy?: string
          currency_code: string
          document_number?: string | null
          document_seq?: never
          expected_credit_total_value: number
          expected_credit_unit_value: number
          id?: string
          inventory_total_value: number
          inventory_unit_value: number
          lot_id: string
          note: string
          organization_id: string
          physical_status?: string
          reason_code: string
          requested_at?: string
          requested_by: string
          row_version?: number
          shipped_at?: string | null
          shipped_by?: string | null
          snapshot_quantity_base: number
          updated_at?: string
          updated_by?: string
          valuation_policy?: string
          vendor_acknowledgement_status?: string
          vendor_id: string
        }
        Update: {
          accounting_event_id?: string | null
          accounting_status?: string
          acknowledged_at?: string | null
          acknowledged_by?: string | null
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          created_at?: string
          created_by?: string
          credit_expectation_status?: string
          credit_policy?: string
          currency_code?: string
          document_number?: string | null
          document_seq?: never
          expected_credit_total_value?: number
          expected_credit_unit_value?: number
          id?: string
          inventory_total_value?: number
          inventory_unit_value?: number
          lot_id?: string
          note?: string
          organization_id?: string
          physical_status?: string
          reason_code?: string
          requested_at?: string
          requested_by?: string
          row_version?: number
          shipped_at?: string | null
          shipped_by?: string | null
          snapshot_quantity_base?: number
          updated_at?: string
          updated_by?: string
          valuation_policy?: string
          vendor_acknowledgement_status?: string
          vendor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_lot_vendor_returns_organization_id_accounting_ev_fkey"
            columns: ["organization_id", "accounting_event_id"]
            isOneToOne: false
            referencedRelation: "accounting_events"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_vendor_returns_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_lot_vendor_returns_organization_id_lot_id_fkey"
            columns: ["organization_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_vendor_returns_organization_id_vendor_id_fkey"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      inventory_lot_write_off_cost_layers: {
        Row: {
          created_at: string
          created_by: string
          currency_code: string
          goods_receipt_id: string
          goods_receipt_line_id: string
          id: string
          inventory_lot_write_off_id: string
          landed_charge_amount: number
          organization_id: string
          purchase_cost_amount: number
          purchase_order_id: string
          received_base_quantity: number
          received_on: string
          total_landed_cost_amount: number
          unit_value: number
        }
        Insert: {
          created_at?: string
          created_by?: string
          currency_code: string
          goods_receipt_id: string
          goods_receipt_line_id: string
          id?: string
          inventory_lot_write_off_id: string
          landed_charge_amount: number
          organization_id: string
          purchase_cost_amount: number
          purchase_order_id: string
          received_base_quantity: number
          received_on: string
          total_landed_cost_amount: number
          unit_value: number
        }
        Update: {
          created_at?: string
          created_by?: string
          currency_code?: string
          goods_receipt_id?: string
          goods_receipt_line_id?: string
          id?: string
          inventory_lot_write_off_id?: string
          landed_charge_amount?: number
          organization_id?: string
          purchase_cost_amount?: number
          purchase_order_id?: string
          received_base_quantity?: number
          received_on?: string
          total_landed_cost_amount?: number
          unit_value?: number
        }
        Relationships: [
          {
            foreignKeyName: "inventory_lot_write_off_cost__organization_id_goods_receip_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_write_off_cost__organization_id_goods_receip_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_write_off_cost__organization_id_goods_receip_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_invoice_intake_candidates"
            referencedColumns: ["organization_id", "goods_receipt_id"]
          },
          {
            foreignKeyName: "inventory_lot_write_off_cost__organization_id_inventory_lo_fkey"
            columns: ["organization_id", "inventory_lot_write_off_id"]
            isOneToOne: false
            referencedRelation: "inventory_lot_write_off_activity"
            referencedColumns: ["organization_id", "inventory_lot_write_off_id"]
          },
          {
            foreignKeyName: "inventory_lot_write_off_cost__organization_id_inventory_lo_fkey"
            columns: ["organization_id", "inventory_lot_write_off_id"]
            isOneToOne: false
            referencedRelation: "inventory_lot_write_offs"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_write_off_cost__organization_id_purchase_ord_fkey"
            columns: ["organization_id", "purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_write_off_cost_organization_id_goods_receip_fkey1"
            columns: ["organization_id", "goods_receipt_line_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_write_off_cost_organization_id_goods_receip_fkey1"
            columns: ["organization_id", "goods_receipt_line_id"]
            isOneToOne: false
            referencedRelation: "landed_cost_line_overview"
            referencedColumns: ["organization_id", "goods_receipt_line_id"]
          },
        ]
      }
      inventory_lot_write_off_placements: {
        Row: {
          allocated_loss: number
          bin_id: string
          created_at: string
          created_by: string
          disposition: string
          id: string
          inventory_lot_write_off_id: string
          lot_id: string
          organization_id: string
          product_id: string
          quantity_base: number
          unit_value: number
          warehouse_id: string
        }
        Insert: {
          allocated_loss: number
          bin_id: string
          created_at?: string
          created_by?: string
          disposition: string
          id?: string
          inventory_lot_write_off_id: string
          lot_id: string
          organization_id: string
          product_id: string
          quantity_base: number
          unit_value: number
          warehouse_id: string
        }
        Update: {
          allocated_loss?: number
          bin_id?: string
          created_at?: string
          created_by?: string
          disposition?: string
          id?: string
          inventory_lot_write_off_id?: string
          lot_id?: string
          organization_id?: string
          product_id?: string
          quantity_base?: number
          unit_value?: number
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_lot_write_off_plac_organization_id_warehouse_id_fkey1"
            columns: ["organization_id", "warehouse_id", "bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_write_off_place_organization_id_inventory_lo_fkey"
            columns: ["organization_id", "inventory_lot_write_off_id"]
            isOneToOne: false
            referencedRelation: "inventory_lot_write_off_activity"
            referencedColumns: ["organization_id", "inventory_lot_write_off_id"]
          },
          {
            foreignKeyName: "inventory_lot_write_off_place_organization_id_inventory_lo_fkey"
            columns: ["organization_id", "inventory_lot_write_off_id"]
            isOneToOne: false
            referencedRelation: "inventory_lot_write_offs"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_write_off_place_organization_id_product_id_l_fkey"
            columns: ["organization_id", "product_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_write_off_place_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_write_off_placeme_organization_id_product_id_fkey"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      inventory_lot_write_offs: {
        Row: {
          accounting_event_id: string | null
          approval_reason: string | null
          approval_required: boolean
          approved_at: string | null
          approved_by: string | null
          completion_note: string | null
          created_at: string
          created_by: string
          currency_code: string
          disposal_attested_at: string | null
          disposal_attested_by: string | null
          document_number: string | null
          document_seq: number
          id: string
          lot_id: string
          note: string
          organization_id: string
          reason_code: string
          rejected_at: string | null
          rejected_by: string | null
          rejection_reason: string | null
          requested_at: string
          requested_by: string
          row_version: number
          snapshot_quantity_base: number
          status: string
          threshold_amount: number
          total_value: number
          unit_value: number
          updated_at: string
          updated_by: string
          valuation_policy: string
        }
        Insert: {
          accounting_event_id?: string | null
          approval_reason?: string | null
          approval_required: boolean
          approved_at?: string | null
          approved_by?: string | null
          completion_note?: string | null
          created_at?: string
          created_by?: string
          currency_code: string
          disposal_attested_at?: string | null
          disposal_attested_by?: string | null
          document_number?: string | null
          document_seq?: never
          id?: string
          lot_id: string
          note: string
          organization_id: string
          reason_code: string
          rejected_at?: string | null
          rejected_by?: string | null
          rejection_reason?: string | null
          requested_at?: string
          requested_by: string
          row_version?: number
          snapshot_quantity_base: number
          status: string
          threshold_amount: number
          total_value: number
          unit_value: number
          updated_at?: string
          updated_by?: string
          valuation_policy?: string
        }
        Update: {
          accounting_event_id?: string | null
          approval_reason?: string | null
          approval_required?: boolean
          approved_at?: string | null
          approved_by?: string | null
          completion_note?: string | null
          created_at?: string
          created_by?: string
          currency_code?: string
          disposal_attested_at?: string | null
          disposal_attested_by?: string | null
          document_number?: string | null
          document_seq?: never
          id?: string
          lot_id?: string
          note?: string
          organization_id?: string
          reason_code?: string
          rejected_at?: string | null
          rejected_by?: string | null
          rejection_reason?: string | null
          requested_at?: string
          requested_by?: string
          row_version?: number
          snapshot_quantity_base?: number
          status?: string
          threshold_amount?: number
          total_value?: number
          unit_value?: number
          updated_at?: string
          updated_by?: string
          valuation_policy?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_lot_write_offs_organization_id_accounting_event__fkey"
            columns: ["organization_id", "accounting_event_id"]
            isOneToOne: false
            referencedRelation: "accounting_events"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_write_offs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_lot_write_offs_organization_id_lot_id_fkey"
            columns: ["organization_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      inventory_movements: {
        Row: {
          bin_id: string | null
          classification_snapshot: Json | null
          created_at: string
          created_by: string | null
          customer_return_line_id: string | null
          disposition: string
          goods_receipt_line_id: string | null
          id: string
          inventory_adjustment_line_id: string | null
          inventory_count_line_id: string | null
          inventory_lot_quarantine_placement_id: string | null
          inventory_lot_relocation_task_id: string | null
          inventory_lot_write_off_placement_id: string | null
          inventory_transfer_line_id: string | null
          inventory_transfer_receipt_id: string | null
          lot_id: string | null
          movement_type: string
          notes: string | null
          occurred_at: string
          organization_id: string
          pick_task_event_id: number | null
          product_id: string
          quantity_base: number
          receiving_putaway_task_id: string | null
          reversal_of_movement_id: string | null
          shipment_line_id: string | null
          valuation_after: Json | null
          valuation_previous_movement_id: string | null
          value_delta: Json | null
          warehouse_id: string
        }
        Insert: {
          bin_id?: string | null
          classification_snapshot?: Json | null
          created_at?: string
          created_by?: string | null
          customer_return_line_id?: string | null
          disposition: string
          goods_receipt_line_id?: string | null
          id?: string
          inventory_adjustment_line_id?: string | null
          inventory_count_line_id?: string | null
          inventory_lot_quarantine_placement_id?: string | null
          inventory_lot_relocation_task_id?: string | null
          inventory_lot_write_off_placement_id?: string | null
          inventory_transfer_line_id?: string | null
          inventory_transfer_receipt_id?: string | null
          lot_id?: string | null
          movement_type: string
          notes?: string | null
          occurred_at?: string
          organization_id: string
          pick_task_event_id?: number | null
          product_id: string
          quantity_base: number
          receiving_putaway_task_id?: string | null
          reversal_of_movement_id?: string | null
          shipment_line_id?: string | null
          valuation_after?: Json | null
          valuation_previous_movement_id?: string | null
          value_delta?: Json | null
          warehouse_id: string
        }
        Update: {
          bin_id?: string | null
          classification_snapshot?: Json | null
          created_at?: string
          created_by?: string | null
          customer_return_line_id?: string | null
          disposition?: string
          goods_receipt_line_id?: string | null
          id?: string
          inventory_adjustment_line_id?: string | null
          inventory_count_line_id?: string | null
          inventory_lot_quarantine_placement_id?: string | null
          inventory_lot_relocation_task_id?: string | null
          inventory_lot_write_off_placement_id?: string | null
          inventory_transfer_line_id?: string | null
          inventory_transfer_receipt_id?: string | null
          lot_id?: string | null
          movement_type?: string
          notes?: string | null
          occurred_at?: string
          organization_id?: string
          pick_task_event_id?: number | null
          product_id?: string
          quantity_base?: number
          receiving_putaway_task_id?: string | null
          reversal_of_movement_id?: string | null
          shipment_line_id?: string | null
          valuation_after?: Json | null
          valuation_previous_movement_id?: string | null
          value_delta?: Json | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_movements_lot_relocation_task_fk"
            columns: ["organization_id", "inventory_lot_relocation_task_id"]
            isOneToOne: false
            referencedRelation: "inventory_lot_relocation_tasks"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_movements_lot_write_off_placement_fk"
            columns: ["organization_id", "inventory_lot_write_off_placement_id"]
            isOneToOne: false
            referencedRelation: "inventory_lot_write_off_placements"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_movements_organization_id_customer_return_line_i_fkey"
            columns: ["organization_id", "customer_return_line_id"]
            isOneToOne: false
            referencedRelation: "customer_return_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_movements_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_movements_organization_id_goods_receipt_line_id_fkey"
            columns: ["organization_id", "goods_receipt_line_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_movements_organization_id_goods_receipt_line_id_fkey"
            columns: ["organization_id", "goods_receipt_line_id"]
            isOneToOne: false
            referencedRelation: "landed_cost_line_overview"
            referencedColumns: ["organization_id", "goods_receipt_line_id"]
          },
          {
            foreignKeyName: "inventory_movements_organization_id_inventory_adjustment_l_fkey"
            columns: ["organization_id", "inventory_adjustment_line_id"]
            isOneToOne: false
            referencedRelation: "inventory_adjustment_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_movements_organization_id_inventory_count_line_i_fkey"
            columns: ["organization_id", "inventory_count_line_id"]
            isOneToOne: false
            referencedRelation: "inventory_count_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_movements_organization_id_inventory_transfer_lin_fkey"
            columns: ["organization_id", "inventory_transfer_line_id"]
            isOneToOne: false
            referencedRelation: "inventory_transfer_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_movements_organization_id_product_id_fkey"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_movements_organization_id_product_id_lot_id_fkey"
            columns: ["organization_id", "product_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "inventory_movements_organization_id_shipment_line_id_fkey"
            columns: ["organization_id", "shipment_line_id"]
            isOneToOne: false
            referencedRelation: "shipment_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_movements_organization_id_warehouse_id_bin_id_fkey"
            columns: ["organization_id", "warehouse_id", "bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "inventory_movements_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_movements_pick_task_event_fk"
            columns: ["organization_id", "pick_task_event_id"]
            isOneToOne: false
            referencedRelation: "pick_task_events"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_movements_putaway_task_fk"
            columns: ["organization_id", "receiving_putaway_task_id"]
            isOneToOne: false
            referencedRelation: "receiving_putaway_tasks"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_movements_quarantine_placement_fk"
            columns: [
              "organization_id",
              "inventory_lot_quarantine_placement_id",
            ]
            isOneToOne: false
            referencedRelation: "inventory_lot_quarantine_placements"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_movements_reversal_tenant_fkey"
            columns: ["organization_id", "reversal_of_movement_id"]
            isOneToOne: false
            referencedRelation: "inventory_movements"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_movements_valuation_previous_movement_id_fkey"
            columns: ["valuation_previous_movement_id"]
            isOneToOne: false
            referencedRelation: "inventory_movements"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "movement_transfer_receipt_fk"
            columns: ["organization_id", "inventory_transfer_receipt_id"]
            isOneToOne: false
            referencedRelation: "inventory_transfer_receipts"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      inventory_reservations: {
        Row: {
          bin_id: string | null
          consumed_at: string | null
          consumed_by: string | null
          conversion_to_base: number
          created_at: string
          created_by: string
          disposition: string
          expired_at: string | null
          expires_at: string | null
          id: string
          lot_id: string | null
          order_quantity_exact: number | null
          organization_id: string
          product_id: string
          product_uom_id: string
          quantity: number
          release_reason: string | null
          released_at: string | null
          released_by: string | null
          reserved_base_quantity: number | null
          restored_from_shipment_line_id: string | null
          row_version: number
          sales_order_line_id: string
          split_from_reservation_id: string | null
          status: string | null
          updated_at: string
          updated_by: string | null
          warehouse_id: string
        }
        Insert: {
          bin_id?: string | null
          consumed_at?: string | null
          consumed_by?: string | null
          conversion_to_base: number
          created_at?: string
          created_by?: string
          disposition?: string
          expired_at?: string | null
          expires_at?: string | null
          id?: string
          lot_id?: string | null
          order_quantity_exact?: number | null
          organization_id: string
          product_id: string
          product_uom_id: string
          quantity: number
          release_reason?: string | null
          released_at?: string | null
          released_by?: string | null
          reserved_base_quantity?: number | null
          restored_from_shipment_line_id?: string | null
          row_version?: number
          sales_order_line_id: string
          split_from_reservation_id?: string | null
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          warehouse_id: string
        }
        Update: {
          bin_id?: string | null
          consumed_at?: string | null
          consumed_by?: string | null
          conversion_to_base?: number
          created_at?: string
          created_by?: string
          disposition?: string
          expired_at?: string | null
          expires_at?: string | null
          id?: string
          lot_id?: string | null
          order_quantity_exact?: number | null
          organization_id?: string
          product_id?: string
          product_uom_id?: string
          quantity?: number
          release_reason?: string | null
          released_at?: string | null
          released_by?: string | null
          reserved_base_quantity?: number | null
          restored_from_shipment_line_id?: string | null
          row_version?: number
          sales_order_line_id?: string
          split_from_reservation_id?: string | null
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_reservations_organization_id_product_id_lot_id_fkey"
            columns: ["organization_id", "product_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "inventory_reservations_organization_id_product_id_product__fkey"
            columns: ["organization_id", "product_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "inventory_reservations_organization_id_sales_order_line_id_fkey"
            columns: ["organization_id", "sales_order_line_id"]
            isOneToOne: false
            referencedRelation: "sales_order_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_reservations_organization_id_warehouse_id_bin_id_fkey"
            columns: ["organization_id", "warehouse_id", "bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "inventory_reservations_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_reservations_restore_source_fkey"
            columns: ["organization_id", "restored_from_shipment_line_id"]
            isOneToOne: true
            referencedRelation: "shipment_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_reservations_split_source_fkey"
            columns: ["organization_id", "split_from_reservation_id"]
            isOneToOne: false
            referencedRelation: "inventory_reservations"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      inventory_transfer_lines: {
        Row: {
          base_quantity: number | null
          conversion_to_base: number
          created_at: string
          created_by: string | null
          destination_bin_id: string | null
          destination_lot_id: string | null
          destination_warehouse_id: string
          disposition: string
          id: string
          inventory_transfer_id: string
          line_number: number
          notes: string | null
          organization_id: string
          product_id: string
          product_uom_id: string
          quantity: number
          row_version: number
          source_bin_id: string | null
          source_lot_id: string | null
          source_warehouse_id: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          base_quantity?: number | null
          conversion_to_base: number
          created_at?: string
          created_by?: string | null
          destination_bin_id?: string | null
          destination_lot_id?: string | null
          destination_warehouse_id: string
          disposition?: string
          id?: string
          inventory_transfer_id: string
          line_number: number
          notes?: string | null
          organization_id: string
          product_id: string
          product_uom_id: string
          quantity: number
          row_version?: number
          source_bin_id?: string | null
          source_lot_id?: string | null
          source_warehouse_id: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          base_quantity?: number | null
          conversion_to_base?: number
          created_at?: string
          created_by?: string | null
          destination_bin_id?: string | null
          destination_lot_id?: string | null
          destination_warehouse_id?: string
          disposition?: string
          id?: string
          inventory_transfer_id?: string
          line_number?: number
          notes?: string | null
          organization_id?: string
          product_id?: string
          product_uom_id?: string
          quantity?: number
          row_version?: number
          source_bin_id?: string | null
          source_lot_id?: string | null
          source_warehouse_id?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_transfer_lines_organization_id_destination_ware_fkey1"
            columns: [
              "organization_id",
              "destination_warehouse_id",
              "destination_bin_id",
            ]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "inventory_transfer_lines_organization_id_destination_wareh_fkey"
            columns: ["organization_id", "destination_warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_transfer_lines_organization_id_inventory_transfe_fkey"
            columns: ["organization_id", "inventory_transfer_id"]
            isOneToOne: false
            referencedRelation: "inventory_transfers"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_transfer_lines_organization_id_product_id_destin_fkey"
            columns: ["organization_id", "product_id", "destination_lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "inventory_transfer_lines_organization_id_product_id_produc_fkey"
            columns: ["organization_id", "product_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "inventory_transfer_lines_organization_id_product_id_source_fkey"
            columns: ["organization_id", "product_id", "source_lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "inventory_transfer_lines_organization_id_source_warehouse__fkey"
            columns: ["organization_id", "source_warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_transfer_lines_organization_id_source_warehouse_fkey1"
            columns: ["organization_id", "source_warehouse_id", "source_bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
        ]
      }
      inventory_transfer_receipts: {
        Row: {
          command_key: string
          created_at: string
          created_by: string
          destination_bin_id: string | null
          external_reference: string | null
          id: string
          inventory_transfer_id: string
          inventory_transfer_line_id: string
          notes: string | null
          organization_id: string
          quantity_base: number
          received_at: string
        }
        Insert: {
          command_key: string
          created_at?: string
          created_by?: string
          destination_bin_id?: string | null
          external_reference?: string | null
          id?: string
          inventory_transfer_id: string
          inventory_transfer_line_id: string
          notes?: string | null
          organization_id: string
          quantity_base: number
          received_at?: string
        }
        Update: {
          command_key?: string
          created_at?: string
          created_by?: string
          destination_bin_id?: string | null
          external_reference?: string | null
          id?: string
          inventory_transfer_id?: string
          inventory_transfer_line_id?: string
          notes?: string | null
          organization_id?: string
          quantity_base?: number
          received_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "transfer_receipt_bin_fk"
            columns: ["organization_id", "destination_bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "transfer_receipt_line_fk"
            columns: [
              "organization_id",
              "inventory_transfer_id",
              "inventory_transfer_line_id",
            ]
            isOneToOne: false
            referencedRelation: "inventory_transfer_lines"
            referencedColumns: [
              "organization_id",
              "inventory_transfer_id",
              "id",
            ]
          },
        ]
      }
      inventory_transfers: {
        Row: {
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          compensates_transfer_id: string | null
          created_at: string
          created_by: string
          destination_warehouse_id: string
          document_number: string | null
          document_seq: number
          id: string
          notes: string | null
          organization_id: string
          received_at: string | null
          received_by: string | null
          required_on: string | null
          row_version: number
          shipped_at: string | null
          shipped_by: string | null
          source_warehouse_id: string
          status: string | null
          transfer_kind: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          compensates_transfer_id?: string | null
          created_at?: string
          created_by?: string
          destination_warehouse_id: string
          document_number?: string | null
          document_seq?: never
          id?: string
          notes?: string | null
          organization_id: string
          received_at?: string | null
          received_by?: string | null
          required_on?: string | null
          row_version?: number
          shipped_at?: string | null
          shipped_by?: string | null
          source_warehouse_id: string
          status?: string | null
          transfer_kind?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          compensates_transfer_id?: string | null
          created_at?: string
          created_by?: string
          destination_warehouse_id?: string
          document_number?: string | null
          document_seq?: never
          id?: string
          notes?: string | null
          organization_id?: string
          received_at?: string | null
          received_by?: string | null
          required_on?: string | null
          row_version?: number
          shipped_at?: string | null
          shipped_by?: string | null
          source_warehouse_id?: string
          status?: string | null
          transfer_kind?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_transfers_organization_id_destination_warehouse__fkey"
            columns: ["organization_id", "destination_warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_transfers_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_transfers_organization_id_source_warehouse_id_fkey"
            columns: ["organization_id", "source_warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "transfer_compensation_fk"
            columns: ["organization_id", "compensates_transfer_id"]
            isOneToOne: false
            referencedRelation: "inventory_transfers"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      job_positions: {
        Row: {
          code: string
          created_at: string
          created_by: string | null
          display_name: string
          id: string
          organization_id: string
          row_version: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          code: string
          created_at?: string
          created_by?: string | null
          display_name: string
          id?: string
          organization_id: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          code?: string
          created_at?: string
          created_by?: string | null
          display_name?: string
          id?: string
          organization_id?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "job_positions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      journal_entries: {
        Row: {
          accounting_period_id: string
          created_at: string
          created_by: string | null
          currency_code: string
          description: string
          document_number: string | null
          document_seq: number
          entry_date: string
          exchange_rate: number
          id: string
          organization_id: string
          posted_at: string | null
          posted_by: string | null
          row_version: number
          source_id: string | null
          source_type: string | null
          status: string | null
          updated_at: string
          updated_by: string | null
          void_reason: string | null
          voided_at: string | null
          voided_by: string | null
        }
        Insert: {
          accounting_period_id: string
          created_at?: string
          created_by?: string | null
          currency_code: string
          description: string
          document_number?: string | null
          document_seq?: number
          entry_date?: string
          exchange_rate?: number
          id?: string
          organization_id: string
          posted_at?: string | null
          posted_by?: string | null
          row_version?: number
          source_id?: string | null
          source_type?: string | null
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          void_reason?: string | null
          voided_at?: string | null
          voided_by?: string | null
        }
        Update: {
          accounting_period_id?: string
          created_at?: string
          created_by?: string | null
          currency_code?: string
          description?: string
          document_number?: string | null
          document_seq?: number
          entry_date?: string
          exchange_rate?: number
          id?: string
          organization_id?: string
          posted_at?: string | null
          posted_by?: string | null
          row_version?: number
          source_id?: string | null
          source_type?: string | null
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          void_reason?: string | null
          voided_at?: string | null
          voided_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "journal_entries_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "journal_entries_period_fk"
            columns: ["organization_id", "accounting_period_id"]
            isOneToOne: false
            referencedRelation: "accounting_periods"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      journal_entry_lines: {
        Row: {
          base_credit_amount: number | null
          base_debit_amount: number | null
          created_at: string
          created_by: string | null
          credit_amount: number
          customer_id: string | null
          debit_amount: number
          description: string | null
          gl_account_id: string
          id: string
          journal_entry_id: string
          line_number: number
          net_debit_amount: number | null
          organization_id: string
          product_id: string | null
          row_version: number
          updated_at: string
          updated_by: string | null
          vendor_id: string | null
          warehouse_id: string | null
        }
        Insert: {
          base_credit_amount?: number | null
          base_debit_amount?: number | null
          created_at?: string
          created_by?: string | null
          credit_amount?: number
          customer_id?: string | null
          debit_amount?: number
          description?: string | null
          gl_account_id: string
          id?: string
          journal_entry_id: string
          line_number: number
          net_debit_amount?: number | null
          organization_id: string
          product_id?: string | null
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          vendor_id?: string | null
          warehouse_id?: string | null
        }
        Update: {
          base_credit_amount?: number | null
          base_debit_amount?: number | null
          created_at?: string
          created_by?: string | null
          credit_amount?: number
          customer_id?: string | null
          debit_amount?: number
          description?: string | null
          gl_account_id?: string
          id?: string
          journal_entry_id?: string
          line_number?: number
          net_debit_amount?: number | null
          organization_id?: string
          product_id?: string | null
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          vendor_id?: string | null
          warehouse_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "journal_entry_lines_account_fk"
            columns: ["organization_id", "gl_account_id"]
            isOneToOne: false
            referencedRelation: "gl_accounts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "journal_entry_lines_customer_fk"
            columns: ["organization_id", "customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "journal_entry_lines_entry_fk"
            columns: ["organization_id", "journal_entry_id"]
            isOneToOne: false
            referencedRelation: "journal_entries"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "journal_entry_lines_entry_fk"
            columns: ["organization_id", "journal_entry_id"]
            isOneToOne: false
            referencedRelation: "journal_entry_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "journal_entry_lines_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "journal_entry_lines_product_fk"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "journal_entry_lines_vendor_fk"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "journal_entry_lines_warehouse_fk"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      landed_cost_allocations: {
        Row: {
          allocated_amount: number
          allocation_weight: number | null
          created_at: string
          created_by: string | null
          goods_receipt_line_id: string
          id: string
          landed_cost_charge_id: string
          organization_id: string
          row_version: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          allocated_amount: number
          allocation_weight?: number | null
          created_at?: string
          created_by?: string | null
          goods_receipt_line_id: string
          id?: string
          landed_cost_charge_id: string
          organization_id: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          allocated_amount?: number
          allocation_weight?: number | null
          created_at?: string
          created_by?: string | null
          goods_receipt_line_id?: string
          id?: string
          landed_cost_charge_id?: string
          organization_id?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "landed_cost_allocations_charge_fk"
            columns: ["organization_id", "landed_cost_charge_id"]
            isOneToOne: false
            referencedRelation: "landed_cost_charges"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "landed_cost_allocations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "landed_cost_allocations_receipt_line_fk"
            columns: ["organization_id", "goods_receipt_line_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "landed_cost_allocations_receipt_line_fk"
            columns: ["organization_id", "goods_receipt_line_id"]
            isOneToOne: false
            referencedRelation: "landed_cost_line_overview"
            referencedColumns: ["organization_id", "goods_receipt_line_id"]
          },
        ]
      }
      landed_cost_charges: {
        Row: {
          allocation_basis: string
          amount: number
          charge_type: string
          created_at: string
          created_by: string | null
          description: string
          id: string
          landed_cost_document_id: string
          line_number: number
          organization_id: string
          row_version: number
          updated_at: string
          updated_by: string | null
          vendor_id: string | null
        }
        Insert: {
          allocation_basis?: string
          amount: number
          charge_type: string
          created_at?: string
          created_by?: string | null
          description: string
          id?: string
          landed_cost_document_id: string
          line_number: number
          organization_id: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          vendor_id?: string | null
        }
        Update: {
          allocation_basis?: string
          amount?: number
          charge_type?: string
          created_at?: string
          created_by?: string | null
          description?: string
          id?: string
          landed_cost_document_id?: string
          line_number?: number
          organization_id?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "landed_cost_charges_document_fk"
            columns: ["organization_id", "landed_cost_document_id"]
            isOneToOne: false
            referencedRelation: "landed_cost_documents"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "landed_cost_charges_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "landed_cost_charges_vendor_fk"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      landed_cost_documents: {
        Row: {
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          created_at: string
          created_by: string | null
          currency_code: string
          document_number: string | null
          document_seq: number
          exchange_rate: number
          goods_receipt_id: string
          id: string
          notes: string | null
          organization_id: string
          posted_at: string | null
          posted_by: string | null
          row_version: number
          status: string | null
          updated_at: string
          updated_by: string | null
          vendor_bill_id: string | null
        }
        Insert: {
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          created_at?: string
          created_by?: string | null
          currency_code: string
          document_number?: string | null
          document_seq?: number
          exchange_rate?: number
          goods_receipt_id: string
          id?: string
          notes?: string | null
          organization_id: string
          posted_at?: string | null
          posted_by?: string | null
          row_version?: number
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          vendor_bill_id?: string | null
        }
        Update: {
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          created_at?: string
          created_by?: string | null
          currency_code?: string
          document_number?: string | null
          document_seq?: number
          exchange_rate?: number
          goods_receipt_id?: string
          id?: string
          notes?: string | null
          organization_id?: string
          posted_at?: string | null
          posted_by?: string | null
          row_version?: number
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          vendor_bill_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "landed_cost_documents_bill_fk"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_bill_activity"
            referencedColumns: ["organization_id", "vendor_bill_id"]
          },
          {
            foreignKeyName: "landed_cost_documents_bill_fk"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "vendor_bill_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "landed_cost_documents_bill_fk"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "vendor_bills"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "landed_cost_documents_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "landed_cost_documents_receipt_fk"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "landed_cost_documents_receipt_fk"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "landed_cost_documents_receipt_fk"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_invoice_intake_candidates"
            referencedColumns: ["organization_id", "goods_receipt_id"]
          },
        ]
      }
      lots: {
        Row: {
          created_at: string
          created_by: string | null
          expires_on: string | null
          id: string
          lot_code: string
          manufactured_on: string | null
          notes: string | null
          organization_id: string
          product_id: string
          row_version: number
          status: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          expires_on?: string | null
          id?: string
          lot_code: string
          manufactured_on?: string | null
          notes?: string | null
          organization_id: string
          product_id: string
          row_version?: number
          status?: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          expires_on?: string | null
          id?: string
          lot_code?: string
          manufactured_on?: string | null
          notes?: string | null
          organization_id?: string
          product_id?: string
          row_version?: number
          status?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lots_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lots_organization_id_product_id_fkey"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      message_delivery_attempts: {
        Row: {
          attempt_number: number
          completed_at: string | null
          created_at: string
          created_by: string | null
          delivery_key: string | null
          error_message: string | null
          external_message_id: string | null
          failed_at: string | null
          id: string
          lease_expires_at: string | null
          organization_id: string
          outbound_message_id: string
          outcome_status: string | null
          provider: string
          provider_response: Json
          reconciled_at: string | null
          reconciler_reference: string | null
          started_at: string
          worker_reference: string | null
        }
        Insert: {
          attempt_number: number
          completed_at?: string | null
          created_at?: string
          created_by?: string | null
          delivery_key?: string | null
          error_message?: string | null
          external_message_id?: string | null
          failed_at?: string | null
          id?: string
          lease_expires_at?: string | null
          organization_id: string
          outbound_message_id: string
          outcome_status?: string | null
          provider: string
          provider_response?: Json
          reconciled_at?: string | null
          reconciler_reference?: string | null
          started_at?: string
          worker_reference?: string | null
        }
        Update: {
          attempt_number?: number
          completed_at?: string | null
          created_at?: string
          created_by?: string | null
          delivery_key?: string | null
          error_message?: string | null
          external_message_id?: string | null
          failed_at?: string | null
          id?: string
          lease_expires_at?: string | null
          organization_id?: string
          outbound_message_id?: string
          outcome_status?: string | null
          provider?: string
          provider_response?: Json
          reconciled_at?: string | null
          reconciler_reference?: string | null
          started_at?: string
          worker_reference?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "message_delivery_attempts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "message_delivery_attempts_organization_id_outbound_message_fkey"
            columns: ["organization_id", "outbound_message_id"]
            isOneToOne: false
            referencedRelation: "outbound_messages"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      message_events: {
        Row: {
          event_type: string
          external_event_id: string | null
          id: number
          message_delivery_attempt_id: string | null
          occurred_at: string
          organization_id: string
          outbound_message_id: string
          payload: Json
        }
        Insert: {
          event_type: string
          external_event_id?: string | null
          id?: never
          message_delivery_attempt_id?: string | null
          occurred_at: string
          organization_id: string
          outbound_message_id: string
          payload?: Json
        }
        Update: {
          event_type?: string
          external_event_id?: string | null
          id?: never
          message_delivery_attempt_id?: string | null
          occurred_at?: string
          organization_id?: string
          outbound_message_id?: string
          payload?: Json
        }
        Relationships: [
          {
            foreignKeyName: "message_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "message_events_organization_id_message_delivery_attempt_id_fkey"
            columns: ["organization_id", "message_delivery_attempt_id"]
            isOneToOne: false
            referencedRelation: "message_delivery_attempts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "message_events_organization_id_outbound_message_id_fkey"
            columns: ["organization_id", "outbound_message_id"]
            isOneToOne: false
            referencedRelation: "outbound_messages"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      operational_devices: {
        Row: {
          created_at: string
          created_by: string | null
          device_code: string
          device_type: string
          display_name: string | null
          id: string
          is_active: boolean
          organization_id: string
          row_version: number
          updated_at: string
          updated_by: string | null
          warehouse_id: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          device_code: string
          device_type: string
          display_name?: string | null
          id?: string
          is_active?: boolean
          organization_id: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          warehouse_id?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          device_code?: string
          device_type?: string
          display_name?: string | null
          id?: string
          is_active?: boolean
          organization_id?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          warehouse_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "operational_devices_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "operational_devices_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      order_guide_lines: {
        Row: {
          created_at: string
          created_by: string
          id: string
          is_active: boolean
          line_number: number
          order_guide_id: string
          organization_id: string
          row_version: number
          updated_at: string
          updated_by: string | null
          vendor_product_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          is_active?: boolean
          line_number: number
          order_guide_id: string
          organization_id: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          vendor_product_id: string
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          is_active?: boolean
          line_number?: number
          order_guide_id?: string
          organization_id?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          vendor_product_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "order_guide_lines_organization_id_order_guide_id_fkey"
            columns: ["organization_id", "order_guide_id"]
            isOneToOne: false
            referencedRelation: "order_guides"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "order_guide_lines_organization_id_vendor_product_id_fkey"
            columns: ["organization_id", "vendor_product_id"]
            isOneToOne: false
            referencedRelation: "vendor_products"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      order_guides: {
        Row: {
          created_at: string
          created_by: string
          effective_from: string
          effective_to: string | null
          id: string
          name: string
          organization_id: string
          row_version: number
          updated_at: string
          updated_by: string | null
          vendor_id: string
          warehouse_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string
          effective_from: string
          effective_to?: string | null
          id?: string
          name: string
          organization_id: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          vendor_id: string
          warehouse_id: string
        }
        Update: {
          created_at?: string
          created_by?: string
          effective_from?: string
          effective_to?: string | null
          id?: string
          name?: string
          organization_id?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          vendor_id?: string
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "order_guides_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_guides_organization_id_vendor_id_fkey"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "order_guides_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      organization_memberships: {
        Row: {
          created_at: string
          created_by: string | null
          disabled_at: string | null
          disabled_reason: string | null
          id: string
          organization_id: string
          role_key: string
          row_version: number
          status: string | null
          updated_at: string
          updated_by: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          disabled_at?: string | null
          disabled_reason?: string | null
          id?: string
          organization_id: string
          role_key: string
          row_version?: number
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          disabled_at?: string | null
          disabled_reason?: string | null
          id?: string
          organization_id?: string
          role_key?: string
          row_version?: number
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_memberships_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organization_memberships_role_key_fkey"
            columns: ["role_key"]
            isOneToOne: false
            referencedRelation: "app_roles"
            referencedColumns: ["role_key"]
          },
        ]
      }
      organization_settings: {
        Row: {
          created_at: string
          created_by: string | null
          default_warehouse_id: string | null
          organization_id: string
          purchase_order_email_provider: string | null
          purchase_order_from_address: string | null
          purchase_order_reply_to: string | null
          row_version: number
          updated_at: string
          updated_by: string | null
          write_off_approval_threshold: number
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          default_warehouse_id?: string | null
          organization_id: string
          purchase_order_email_provider?: string | null
          purchase_order_from_address?: string | null
          purchase_order_reply_to?: string | null
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          write_off_approval_threshold?: number
        }
        Update: {
          created_at?: string
          created_by?: string | null
          default_warehouse_id?: string | null
          organization_id?: string
          purchase_order_email_provider?: string | null
          purchase_order_from_address?: string | null
          purchase_order_reply_to?: string | null
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          write_off_approval_threshold?: number
        }
        Relationships: [
          {
            foreignKeyName: "organization_settings_default_warehouse_fkey"
            columns: ["organization_id", "default_warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "organization_settings_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: true
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      organizations: {
        Row: {
          allow_negative_inventory: boolean
          created_at: string
          created_by: string
          currency_code: string
          display_name: string
          id: string
          is_active: boolean
          legal_name: string | null
          row_version: number
          slug: string
          time_zone: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          allow_negative_inventory?: boolean
          created_at?: string
          created_by?: string
          currency_code?: string
          display_name: string
          id?: string
          is_active?: boolean
          legal_name?: string | null
          row_version?: number
          slug: string
          time_zone?: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          allow_negative_inventory?: boolean
          created_at?: string
          created_by?: string
          currency_code?: string
          display_name?: string
          id?: string
          is_active?: boolean
          legal_name?: string | null
          row_version?: number
          slug?: string
          time_zone?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      outbound_messages: {
        Row: {
          approval_request_id: string | null
          approval_required: boolean
          approved_at: string | null
          approved_by: string | null
          attempt_count: number
          body: string
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          category: string
          channel: string
          created_at: string
          created_by: string | null
          customer_id: string | null
          error_message: string | null
          failed_at: string | null
          failed_by: string | null
          id: string
          organization_id: string
          processing_locked_at: string | null
          processing_locked_by: string | null
          queued_at: string | null
          queued_by: string | null
          recipient_email: string | null
          recipient_name: string | null
          recipient_phone: string | null
          recipient_user_id: string | null
          resource_id: string | null
          resource_type: string | null
          row_version: number
          scheduled_for: string | null
          sent_at: string | null
          sent_by: string | null
          status: string | null
          subject: string | null
          template_variables: Json
          updated_at: string
          updated_by: string | null
          vendor_id: string | null
        }
        Insert: {
          approval_request_id?: string | null
          approval_required?: boolean
          approved_at?: string | null
          approved_by?: string | null
          attempt_count?: number
          body: string
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          category: string
          channel: string
          created_at?: string
          created_by?: string | null
          customer_id?: string | null
          error_message?: string | null
          failed_at?: string | null
          failed_by?: string | null
          id?: string
          organization_id: string
          processing_locked_at?: string | null
          processing_locked_by?: string | null
          queued_at?: string | null
          queued_by?: string | null
          recipient_email?: string | null
          recipient_name?: string | null
          recipient_phone?: string | null
          recipient_user_id?: string | null
          resource_id?: string | null
          resource_type?: string | null
          row_version?: number
          scheduled_for?: string | null
          sent_at?: string | null
          sent_by?: string | null
          status?: string | null
          subject?: string | null
          template_variables?: Json
          updated_at?: string
          updated_by?: string | null
          vendor_id?: string | null
        }
        Update: {
          approval_request_id?: string | null
          approval_required?: boolean
          approved_at?: string | null
          approved_by?: string | null
          attempt_count?: number
          body?: string
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          category?: string
          channel?: string
          created_at?: string
          created_by?: string | null
          customer_id?: string | null
          error_message?: string | null
          failed_at?: string | null
          failed_by?: string | null
          id?: string
          organization_id?: string
          processing_locked_at?: string | null
          processing_locked_by?: string | null
          queued_at?: string | null
          queued_by?: string | null
          recipient_email?: string | null
          recipient_name?: string | null
          recipient_phone?: string | null
          recipient_user_id?: string | null
          resource_id?: string | null
          resource_type?: string | null
          row_version?: number
          scheduled_for?: string | null
          sent_at?: string | null
          sent_by?: string | null
          status?: string | null
          subject?: string | null
          template_variables?: Json
          updated_at?: string
          updated_by?: string | null
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "outbound_messages_organization_id_approval_request_id_fkey"
            columns: ["organization_id", "approval_request_id"]
            isOneToOne: false
            referencedRelation: "approval_requests"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "outbound_messages_organization_id_customer_id_fkey"
            columns: ["organization_id", "customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "outbound_messages_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "outbound_messages_organization_id_vendor_id_fkey"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      outbox_events: {
        Row: {
          aggregate_id: string | null
          aggregate_type: string
          created_at: string
          created_by: string | null
          created_by_identity_subject: string | null
          event_key: string
          id: string
          idempotency_key: string
          organization_id: string
          payload: Json
          topic: string
        }
        Insert: {
          aggregate_id?: string | null
          aggregate_type: string
          created_at?: string
          created_by?: string | null
          created_by_identity_subject?: string | null
          event_key: string
          id?: string
          idempotency_key: string
          organization_id: string
          payload: Json
          topic: string
        }
        Update: {
          aggregate_id?: string | null
          aggregate_type?: string
          created_at?: string
          created_by?: string | null
          created_by_identity_subject?: string | null
          event_key?: string
          id?: string
          idempotency_key?: string
          organization_id?: string
          payload?: Json
          topic?: string
        }
        Relationships: [
          {
            foreignKeyName: "outbox_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      payment_terms: {
        Row: {
          code: string
          created_at: string
          created_by: string | null
          discount_days: number | null
          discount_rate: number | null
          display_name: string
          due_days: number
          id: string
          is_active: boolean
          organization_id: string
          row_version: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          code: string
          created_at?: string
          created_by?: string | null
          discount_days?: number | null
          discount_rate?: number | null
          display_name: string
          due_days?: number
          id?: string
          is_active?: boolean
          organization_id: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          code?: string
          created_at?: string
          created_by?: string | null
          discount_days?: number | null
          discount_rate?: number | null
          display_name?: string
          due_days?: number
          id?: string
          is_active?: boolean
          organization_id?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payment_terms_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      pick_task_events: {
        Row: {
          bin_id: string | null
          disposition: string | null
          event_type: string
          id: number
          lot_id: string | null
          metadata: Json
          notes: string | null
          occurred_at: string
          organization_id: string
          pick_task_id: string
          picked_product_id: string | null
          quantity_base: number
          recorded_by: string | null
          reversal_of_event_id: number | null
          warehouse_id: string | null
        }
        Insert: {
          bin_id?: string | null
          disposition?: string | null
          event_type: string
          id?: never
          lot_id?: string | null
          metadata?: Json
          notes?: string | null
          occurred_at?: string
          organization_id: string
          pick_task_id: string
          picked_product_id?: string | null
          quantity_base: number
          recorded_by?: string | null
          reversal_of_event_id?: number | null
          warehouse_id?: string | null
        }
        Update: {
          bin_id?: string | null
          disposition?: string | null
          event_type?: string
          id?: never
          lot_id?: string | null
          metadata?: Json
          notes?: string | null
          occurred_at?: string
          organization_id?: string
          pick_task_id?: string
          picked_product_id?: string | null
          quantity_base?: number
          recorded_by?: string | null
          reversal_of_event_id?: number | null
          warehouse_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pick_task_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pick_task_events_organization_id_pick_task_id_fkey"
            columns: ["organization_id", "pick_task_id"]
            isOneToOne: false
            referencedRelation: "pick_tasks"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "pick_task_events_organization_id_picked_product_id_fkey"
            columns: ["organization_id", "picked_product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "pick_task_events_organization_id_picked_product_id_lot_id_fkey"
            columns: ["organization_id", "picked_product_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "pick_task_events_organization_id_warehouse_id_bin_id_fkey"
            columns: ["organization_id", "warehouse_id", "bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "pick_task_events_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "pick_task_events_reversal_tenant_fkey"
            columns: ["organization_id", "reversal_of_event_id"]
            isOneToOne: false
            referencedRelation: "pick_task_events"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      pick_tasks: {
        Row: {
          assigned_employee_id: string | null
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          conversion_to_base: number
          created_at: string
          created_by: string | null
          id: string
          inventory_reservation_id: string | null
          notes: string | null
          organization_id: string
          pick_wave_id: string
          preferred_bin_id: string | null
          product_id: string
          product_uom_id: string
          requested_base_quantity: number | null
          requested_quantity: number
          row_version: number
          sales_order_line_id: string
          task_sequence: number
          updated_at: string
          updated_by: string | null
          warehouse_id: string
        }
        Insert: {
          assigned_employee_id?: string | null
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          conversion_to_base: number
          created_at?: string
          created_by?: string | null
          id?: string
          inventory_reservation_id?: string | null
          notes?: string | null
          organization_id: string
          pick_wave_id: string
          preferred_bin_id?: string | null
          product_id: string
          product_uom_id: string
          requested_base_quantity?: number | null
          requested_quantity: number
          row_version?: number
          sales_order_line_id: string
          task_sequence: number
          updated_at?: string
          updated_by?: string | null
          warehouse_id: string
        }
        Update: {
          assigned_employee_id?: string | null
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          conversion_to_base?: number
          created_at?: string
          created_by?: string | null
          id?: string
          inventory_reservation_id?: string | null
          notes?: string | null
          organization_id?: string
          pick_wave_id?: string
          preferred_bin_id?: string | null
          product_id?: string
          product_uom_id?: string
          requested_base_quantity?: number | null
          requested_quantity?: number
          row_version?: number
          sales_order_line_id?: string
          task_sequence?: number
          updated_at?: string
          updated_by?: string | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pick_tasks_inventory_reservation_fkey"
            columns: ["organization_id", "inventory_reservation_id"]
            isOneToOne: false
            referencedRelation: "inventory_reservations"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "pick_tasks_organization_id_assigned_employee_id_fkey"
            columns: ["organization_id", "assigned_employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "pick_tasks_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pick_tasks_organization_id_pick_wave_id_fkey"
            columns: ["organization_id", "pick_wave_id"]
            isOneToOne: false
            referencedRelation: "pick_waves"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "pick_tasks_organization_id_product_id_product_uom_id_fkey"
            columns: ["organization_id", "product_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "pick_tasks_organization_id_sales_order_line_id_fkey"
            columns: ["organization_id", "sales_order_line_id"]
            isOneToOne: false
            referencedRelation: "sales_order_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "pick_tasks_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "pick_tasks_organization_id_warehouse_id_preferred_bin_id_fkey"
            columns: ["organization_id", "warehouse_id", "preferred_bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
        ]
      }
      pick_waves: {
        Row: {
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          completed_at: string | null
          completed_by: string | null
          created_at: string
          created_by: string | null
          description: string | null
          document_number: string | null
          document_seq: number
          id: string
          organization_id: string
          released_at: string | null
          released_by: string | null
          route_id: string | null
          row_version: number
          sales_order_id: string | null
          ship_on: string
          started_at: string | null
          started_by: string | null
          status: string | null
          updated_at: string
          updated_by: string | null
          warehouse_id: string
        }
        Insert: {
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          completed_at?: string | null
          completed_by?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          document_number?: string | null
          document_seq?: never
          id?: string
          organization_id: string
          released_at?: string | null
          released_by?: string | null
          route_id?: string | null
          row_version?: number
          sales_order_id?: string | null
          ship_on?: string
          started_at?: string | null
          started_by?: string | null
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          warehouse_id: string
        }
        Update: {
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          completed_at?: string | null
          completed_by?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          document_number?: string | null
          document_seq?: never
          id?: string
          organization_id?: string
          released_at?: string | null
          released_by?: string | null
          route_id?: string | null
          row_version?: number
          sales_order_id?: string | null
          ship_on?: string
          started_at?: string | null
          started_by?: string | null
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pick_waves_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pick_waves_organization_id_route_id_fkey"
            columns: ["organization_id", "route_id"]
            isOneToOne: false
            referencedRelation: "delivery_routes"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "pick_waves_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "pick_waves_sales_order_fkey"
            columns: ["organization_id", "sales_order_id"]
            isOneToOne: false
            referencedRelation: "sales_order_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "pick_waves_sales_order_fkey"
            columns: ["organization_id", "sales_order_id"]
            isOneToOne: false
            referencedRelation: "sales_orders"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      platform_job_runs: {
        Row: {
          attempt_count: number
          command_receipt_id: string
          completed_at: string | null
          created_at: string
          created_by: string
          error_code: string | null
          error_message: string | null
          id: string
          job_code: string
          lease_expires_at: string | null
          lease_token: string | null
          organization_id: string
          requested_at: string
          result_evidence: Json
          row_version: number
          run_number: number
          started_at: string | null
          status: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          attempt_count?: number
          command_receipt_id: string
          completed_at?: string | null
          created_at?: string
          created_by: string
          error_code?: string | null
          error_message?: string | null
          id?: string
          job_code: string
          lease_expires_at?: string | null
          lease_token?: string | null
          organization_id: string
          requested_at?: string
          result_evidence?: Json
          row_version?: number
          run_number?: never
          started_at?: string | null
          status?: string
          updated_at?: string
          updated_by: string
        }
        Update: {
          attempt_count?: number
          command_receipt_id?: string
          completed_at?: string | null
          created_at?: string
          created_by?: string
          error_code?: string | null
          error_message?: string | null
          id?: string
          job_code?: string
          lease_expires_at?: string | null
          lease_token?: string | null
          organization_id?: string
          requested_at?: string
          result_evidence?: Json
          row_version?: number
          run_number?: never
          started_at?: string | null
          status?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "platform_job_runs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      position_certification_requirements: {
        Row: {
          certification_type_id: string
          created_at: string
          created_by: string | null
          id: string
          organization_id: string
          position_id: string
          required_before_assignment: boolean
          row_version: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          certification_type_id: string
          created_at?: string
          created_by?: string | null
          id?: string
          organization_id: string
          position_id: string
          required_before_assignment?: boolean
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          certification_type_id?: string
          created_at?: string
          created_by?: string | null
          id?: string
          organization_id?: string
          position_id?: string
          required_before_assignment?: boolean
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "position_certification_requir_organization_id_certificatio_fkey"
            columns: ["organization_id", "certification_type_id"]
            isOneToOne: false
            referencedRelation: "certification_types"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "position_certification_require_organization_id_position_id_fkey"
            columns: ["organization_id", "position_id"]
            isOneToOne: false
            referencedRelation: "job_positions"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "position_certification_requirements_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      price_list_items: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          minimum_quantity: number
          organization_id: string
          price_list_id: string
          product_uom_id: string
          row_version: number
          unit_price: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          minimum_quantity?: number
          organization_id: string
          price_list_id: string
          product_uom_id: string
          row_version?: number
          unit_price: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          minimum_quantity?: number
          organization_id?: string
          price_list_id?: string
          product_uom_id?: string
          row_version?: number
          unit_price?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "price_list_items_organization_id_price_list_id_fkey"
            columns: ["organization_id", "price_list_id"]
            isOneToOne: false
            referencedRelation: "price_lists"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "price_list_items_organization_id_product_uom_id_fkey"
            columns: ["organization_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      price_lists: {
        Row: {
          code: string
          created_at: string
          created_by: string | null
          currency_code: string
          display_name: string
          id: string
          is_active: boolean
          is_default: boolean
          organization_id: string
          row_version: number
          updated_at: string
          updated_by: string | null
          valid_during: unknown
          valid_from: string
          valid_to: string | null
        }
        Insert: {
          code: string
          created_at?: string
          created_by?: string | null
          currency_code: string
          display_name: string
          id?: string
          is_active?: boolean
          is_default?: boolean
          organization_id: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          valid_during?: unknown
          valid_from?: string
          valid_to?: string | null
        }
        Update: {
          code?: string
          created_at?: string
          created_by?: string | null
          currency_code?: string
          display_name?: string
          id?: string
          is_active?: boolean
          is_default?: boolean
          organization_id?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          valid_during?: unknown
          valid_from?: string
          valid_to?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "price_lists_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      product_barcodes: {
        Row: {
          barcode: string
          created_at: string
          created_by: string | null
          id: string
          is_active: boolean
          is_primary: boolean
          label_format: string | null
          normalized_barcode: string | null
          organization_id: string
          product_uom_id: string
          row_version: number
          symbology: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          barcode: string
          created_at?: string
          created_by?: string | null
          id?: string
          is_active?: boolean
          is_primary?: boolean
          label_format?: string | null
          normalized_barcode?: string | null
          organization_id: string
          product_uom_id: string
          row_version?: number
          symbology?: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          barcode?: string
          created_at?: string
          created_by?: string | null
          id?: string
          is_active?: boolean
          is_primary?: boolean
          label_format?: string | null
          normalized_barcode?: string | null
          organization_id?: string
          product_uom_id?: string
          row_version?: number
          symbology?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_barcodes_organization_id_product_uom_id_fkey"
            columns: ["organization_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      product_catch_weight_profiles: {
        Row: {
          created_at: string
          created_by: string | null
          expected_unit_weight: number | null
          id: string
          is_active: boolean
          maximum_unit_weight: number | null
          maximum_variance_percent: number | null
          minimum_unit_weight: number | null
          organization_id: string
          pricing_basis: string
          product_id: string
          require_scale: boolean
          row_version: number
          updated_at: string
          updated_by: string | null
          weight_uom_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          expected_unit_weight?: number | null
          id?: string
          is_active?: boolean
          maximum_unit_weight?: number | null
          maximum_variance_percent?: number | null
          minimum_unit_weight?: number | null
          organization_id: string
          pricing_basis?: string
          product_id: string
          require_scale?: boolean
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          weight_uom_id: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          expected_unit_weight?: number | null
          id?: string
          is_active?: boolean
          maximum_unit_weight?: number | null
          maximum_variance_percent?: number | null
          minimum_unit_weight?: number | null
          organization_id?: string
          pricing_basis?: string
          product_id?: string
          require_scale?: boolean
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          weight_uom_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "catch_weight_profiles_product_fk"
            columns: ["organization_id", "product_id"]
            isOneToOne: true
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "product_catch_weight_profiles_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_catch_weight_profiles_weight_uom_id_fkey"
            columns: ["weight_uom_id"]
            isOneToOne: false
            referencedRelation: "units_of_measure"
            referencedColumns: ["id"]
          },
        ]
      }
      product_categories: {
        Row: {
          catalog_channels: string[]
          code: string
          created_at: string
          created_by: string | null
          description: string | null
          display_name: string
          general_ledger_account_id: string | null
          id: string
          image_ref: string | null
          is_active: boolean
          merged_into_id: string | null
          organization_id: string
          parent_category_id: string | null
          pricing_rule: string
          reporting_group: string
          row_version: number
          storage_rule: string
          target_margin_percent: number
          tax_mapping: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          catalog_channels?: string[]
          code: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          display_name: string
          general_ledger_account_id?: string | null
          id?: string
          image_ref?: string | null
          is_active?: boolean
          merged_into_id?: string | null
          organization_id: string
          parent_category_id?: string | null
          pricing_rule?: string
          reporting_group?: string
          row_version?: number
          storage_rule?: string
          target_margin_percent?: number
          tax_mapping?: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          catalog_channels?: string[]
          code?: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          display_name?: string
          general_ledger_account_id?: string | null
          id?: string
          image_ref?: string | null
          is_active?: boolean
          merged_into_id?: string | null
          organization_id?: string
          parent_category_id?: string | null
          pricing_rule?: string
          reporting_group?: string
          row_version?: number
          storage_rule?: string
          target_margin_percent?: number
          tax_mapping?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_categories_general_ledger_account_fkey"
            columns: ["organization_id", "general_ledger_account_id"]
            isOneToOne: false
            referencedRelation: "gl_accounts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "product_categories_merged_into_fkey"
            columns: ["organization_id", "merged_into_id"]
            isOneToOne: false
            referencedRelation: "product_categories"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "product_categories_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_categories_organization_id_parent_category_id_fkey"
            columns: ["organization_id", "parent_category_id"]
            isOneToOne: false
            referencedRelation: "product_categories"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      product_manufacturers: {
        Row: {
          code: string
          created_at: string
          created_by: string | null
          id: string
          is_active: boolean
          merged_into_id: string | null
          name: string
          organization_id: string
          row_version: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          code: string
          created_at?: string
          created_by?: string | null
          id?: string
          is_active?: boolean
          merged_into_id?: string | null
          name: string
          organization_id: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          code?: string
          created_at?: string
          created_by?: string | null
          id?: string
          is_active?: boolean
          merged_into_id?: string | null
          name?: string
          organization_id?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_manufacturers_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      product_uoms: {
        Row: {
          conversion_to_base: number
          created_at: string
          created_by: string | null
          id: string
          is_active: boolean
          is_base: boolean
          is_purchase_default: boolean
          is_sales_default: boolean
          organization_id: string
          product_id: string
          row_version: number
          uom_id: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          conversion_to_base: number
          created_at?: string
          created_by?: string | null
          id?: string
          is_active?: boolean
          is_base?: boolean
          is_purchase_default?: boolean
          is_sales_default?: boolean
          organization_id: string
          product_id: string
          row_version?: number
          uom_id: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          conversion_to_base?: number
          created_at?: string
          created_by?: string | null
          id?: string
          is_active?: boolean
          is_base?: boolean
          is_purchase_default?: boolean
          is_sales_default?: boolean
          organization_id?: string
          product_id?: string
          row_version?: number
          uom_id?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_uoms_organization_id_product_id_fkey"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "product_uoms_uom_id_fkey"
            columns: ["uom_id"]
            isOneToOne: false
            referencedRelation: "units_of_measure"
            referencedColumns: ["id"]
          },
        ]
      }
      product_warehouse_settings: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          organization_id: string
          preferred_bin_id: string | null
          product_id: string
          reorder_point_base: number
          reorder_quantity_base: number
          replenishment_enabled: boolean
          row_version: number
          safety_stock_base: number
          target_base_quantity: number | null
          target_cover_days: number
          updated_at: string
          updated_by: string | null
          warehouse_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          organization_id: string
          preferred_bin_id?: string | null
          product_id: string
          reorder_point_base?: number
          reorder_quantity_base?: number
          replenishment_enabled?: boolean
          row_version?: number
          safety_stock_base?: number
          target_base_quantity?: number | null
          target_cover_days?: number
          updated_at?: string
          updated_by?: string | null
          warehouse_id: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          organization_id?: string
          preferred_bin_id?: string | null
          product_id?: string
          reorder_point_base?: number
          reorder_quantity_base?: number
          replenishment_enabled?: boolean
          row_version?: number
          safety_stock_base?: number
          target_base_quantity?: number | null
          target_cover_days?: number
          updated_at?: string
          updated_by?: string | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_warehouse_settings_organization_id_product_id_fkey"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "product_warehouse_settings_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "product_warehouse_settings_organization_id_warehouse_id_pr_fkey"
            columns: ["organization_id", "warehouse_id", "preferred_bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
        ]
      }
      products: {
        Row: {
          base_uom_id: string
          brand_id: string | null
          catch_weight: boolean
          category_id: string | null
          created_at: string
          created_by: string | null
          description: string | null
          display_name: string
          id: string
          is_active: boolean
          organization_id: string
          row_version: number
          search_vector: unknown
          sku: string
          track_expiry: boolean
          track_lots: boolean
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          base_uom_id: string
          brand_id?: string | null
          catch_weight?: boolean
          category_id?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          display_name: string
          id?: string
          is_active?: boolean
          organization_id: string
          row_version?: number
          search_vector?: unknown
          sku: string
          track_expiry?: boolean
          track_lots?: boolean
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          base_uom_id?: string
          brand_id?: string | null
          catch_weight?: boolean
          category_id?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          display_name?: string
          id?: string
          is_active?: boolean
          organization_id?: string
          row_version?: number
          search_vector?: unknown
          sku?: string
          track_expiry?: boolean
          track_lots?: boolean
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_base_uom_id_fkey"
            columns: ["base_uom_id"]
            isOneToOne: false
            referencedRelation: "units_of_measure"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_organization_id_brand_id_fkey"
            columns: ["organization_id", "brand_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "products_organization_id_category_id_fkey"
            columns: ["organization_id", "category_id"]
            isOneToOne: false
            referencedRelation: "product_categories"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "products_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          display_name: string
          email: string | null
          phone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          display_name: string
          email?: string | null
          phone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          display_name?: string
          email?: string | null
          phone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      proof_of_deliveries: {
        Row: {
          created_at: string
          created_by: string | null
          delivered_at: string
          delivered_by_employee_id: string | null
          id: string
          latitude: number | null
          longitude: number | null
          notes: string | null
          organization_id: string
          outcome: string
          photo_attachment_id: string | null
          recipient_name: string | null
          replaces_proof_id: string | null
          route_stop_id: string
          row_version: number
          signature_attachment_id: string | null
          status: string | null
          temperature: number | null
          temperature_scale: string | null
          updated_at: string
          updated_by: string | null
          void_reason: string | null
          voided_at: string | null
          voided_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          delivered_at?: string
          delivered_by_employee_id?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          notes?: string | null
          organization_id: string
          outcome?: string
          photo_attachment_id?: string | null
          recipient_name?: string | null
          replaces_proof_id?: string | null
          route_stop_id: string
          row_version?: number
          signature_attachment_id?: string | null
          status?: string | null
          temperature?: number | null
          temperature_scale?: string | null
          updated_at?: string
          updated_by?: string | null
          void_reason?: string | null
          voided_at?: string | null
          voided_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          delivered_at?: string
          delivered_by_employee_id?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          notes?: string | null
          organization_id?: string
          outcome?: string
          photo_attachment_id?: string | null
          recipient_name?: string | null
          replaces_proof_id?: string | null
          route_stop_id?: string
          row_version?: number
          signature_attachment_id?: string | null
          status?: string | null
          temperature?: number | null
          temperature_scale?: string | null
          updated_at?: string
          updated_by?: string | null
          void_reason?: string | null
          voided_at?: string | null
          voided_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proof_of_deliveries_organization_id_delivered_by_employee__fkey"
            columns: ["organization_id", "delivered_by_employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "proof_of_deliveries_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proof_of_deliveries_organization_id_photo_attachment_id_fkey"
            columns: ["organization_id", "photo_attachment_id"]
            isOneToOne: false
            referencedRelation: "file_attachments"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "proof_of_deliveries_organization_id_route_stop_id_fkey"
            columns: ["organization_id", "route_stop_id"]
            isOneToOne: false
            referencedRelation: "route_stops"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "proof_of_deliveries_organization_id_signature_attachment_i_fkey"
            columns: ["organization_id", "signature_attachment_id"]
            isOneToOne: false
            referencedRelation: "file_attachments"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "replacement_proof_company_fk"
            columns: ["organization_id", "replaces_proof_id"]
            isOneToOne: false
            referencedRelation: "proof_of_deliveries"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      proof_of_delivery_lines: {
        Row: {
          created_at: string
          created_by: string | null
          delivered_base_quantity: number
          expected_base_quantity: number
          id: string
          notes: string | null
          organization_id: string
          proof_of_delivery_id: string
          refused_base_quantity: number
          shipment_line_id: string
          short_base_quantity: number
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          delivered_base_quantity: number
          expected_base_quantity: number
          id?: string
          notes?: string | null
          organization_id: string
          proof_of_delivery_id: string
          refused_base_quantity: number
          shipment_line_id: string
          short_base_quantity: number
        }
        Update: {
          created_at?: string
          created_by?: string | null
          delivered_base_quantity?: number
          expected_base_quantity?: number
          id?: string
          notes?: string | null
          organization_id?: string
          proof_of_delivery_id?: string
          refused_base_quantity?: number
          shipment_line_id?: string
          short_base_quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "proof_of_delivery_lines_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proof_of_delivery_lines_organization_id_proof_of_delivery__fkey"
            columns: ["organization_id", "proof_of_delivery_id"]
            isOneToOne: false
            referencedRelation: "proof_of_deliveries"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "proof_of_delivery_lines_organization_id_shipment_line_id_fkey"
            columns: ["organization_id", "shipment_line_id"]
            isOneToOne: false
            referencedRelation: "shipment_lines"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      purchase_order_approval_cycles: {
        Row: {
          approval_amount: number
          approval_facts: Json
          approval_facts_hash: string
          approval_policy_row_version: number
          approval_request_id: string
          completed_approval_count: number
          completed_at: string | null
          currency_code: string
          id: string
          line_count: number
          organization_id: string
          purchase_order_id: string
          purchase_order_version_id: string
          required_approval_count: number
          row_version: number
          status: string
          submitted_at: string
          submitted_by: string
          submitted_snapshot_hash: string
        }
        Insert: {
          approval_amount: number
          approval_facts: Json
          approval_facts_hash: string
          approval_policy_row_version: number
          approval_request_id: string
          completed_approval_count?: number
          completed_at?: string | null
          currency_code: string
          id?: string
          line_count: number
          organization_id: string
          purchase_order_id: string
          purchase_order_version_id: string
          required_approval_count: number
          row_version?: number
          status?: string
          submitted_at?: string
          submitted_by: string
          submitted_snapshot_hash: string
        }
        Update: {
          approval_amount?: number
          approval_facts?: Json
          approval_facts_hash?: string
          approval_policy_row_version?: number
          approval_request_id?: string
          completed_approval_count?: number
          completed_at?: string | null
          currency_code?: string
          id?: string
          line_count?: number
          organization_id?: string
          purchase_order_id?: string
          purchase_order_version_id?: string
          required_approval_count?: number
          row_version?: number
          status?: string
          submitted_at?: string
          submitted_by?: string
          submitted_snapshot_hash?: string
        }
        Relationships: [
          {
            foreignKeyName: "purchase_order_approval_cycl_organization_id_purchase_ord_fkey1"
            columns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
            isOneToOne: true
            referencedRelation: "purchase_order_versions"
            referencedColumns: ["organization_id", "purchase_order_id", "id"]
          },
          {
            foreignKeyName: "purchase_order_approval_cycle_organization_id_approval_req_fkey"
            columns: ["organization_id", "approval_request_id"]
            isOneToOne: false
            referencedRelation: "approval_requests"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "purchase_order_approval_cycle_organization_id_purchase_ord_fkey"
            columns: ["organization_id", "purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      purchase_order_approval_decisions: {
        Row: {
          approval_cycle_id: string
          approval_request_id: string
          decided_at: string
          decided_by: string
          decision: string
          id: string
          organization_id: string
          purchase_order_id: string
          purchase_order_version_id: string
          reason: string
        }
        Insert: {
          approval_cycle_id: string
          approval_request_id: string
          decided_at?: string
          decided_by: string
          decision: string
          id?: string
          organization_id: string
          purchase_order_id: string
          purchase_order_version_id: string
          reason: string
        }
        Update: {
          approval_cycle_id?: string
          approval_request_id?: string
          decided_at?: string
          decided_by?: string
          decision?: string
          id?: string
          organization_id?: string
          purchase_order_id?: string
          purchase_order_version_id?: string
          reason?: string
        }
        Relationships: [
          {
            foreignKeyName: "purchase_order_approval_decis_organization_id_approval_cyc_fkey"
            columns: [
              "organization_id",
              "approval_cycle_id",
              "approval_request_id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
            isOneToOne: false
            referencedRelation: "purchase_order_approval_cycles"
            referencedColumns: [
              "organization_id",
              "id",
              "approval_request_id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
          },
        ]
      }
      purchase_order_approval_policies: {
        Row: {
          created_at: string
          created_by: string
          organization_id: string
          required_approvals: number
          row_version: number
          updated_at: string
          updated_by: string
        }
        Insert: {
          created_at?: string
          created_by?: string
          organization_id: string
          required_approvals?: number
          row_version?: number
          updated_at?: string
          updated_by?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          organization_id?: string
          required_approvals?: number
          row_version?: number
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "purchase_order_approval_policies_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: true
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      purchase_order_closures: {
        Row: {
          close_reason: string
          closed_at: string
          closed_by: string
          command_key: string
          id: string
          organization_id: string
          purchase_order_id: string
          purchase_order_row_version: number
          purchase_order_version_id: string
        }
        Insert: {
          close_reason: string
          closed_at?: string
          closed_by?: string
          command_key: string
          id?: string
          organization_id: string
          purchase_order_id: string
          purchase_order_row_version: number
          purchase_order_version_id: string
        }
        Update: {
          close_reason?: string
          closed_at?: string
          closed_by?: string
          command_key?: string
          id?: string
          organization_id?: string
          purchase_order_id?: string
          purchase_order_row_version?: number
          purchase_order_version_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "purchase_order_closures_exact_version"
            columns: [
              "organization_id",
              "purchase_order_version_id",
              "purchase_order_id",
            ]
            isOneToOne: false
            referencedRelation: "purchase_order_versions"
            referencedColumns: ["organization_id", "id", "purchase_order_id"]
          },
          {
            foreignKeyName: "purchase_order_closures_organization_id_purchase_order_id_fkey"
            columns: ["organization_id", "purchase_order_id"]
            isOneToOne: true
            referencedRelation: "purchase_orders"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "purchase_order_closures_organization_id_purchase_order_ver_fkey"
            columns: ["organization_id", "purchase_order_version_id"]
            isOneToOne: false
            referencedRelation: "purchase_order_versions"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      purchase_order_dispatches: {
        Row: {
          created_at: string
          created_by: string
          dispatch_method: string
          id: string
          last_retry_at: string | null
          last_retry_by: string | null
          last_retry_reason: string | null
          organization_id: string
          outbound_message_id: string | null
          phone_contact_notes: string | null
          phone_contacted_at: string | null
          phone_contacted_by: string | null
          purchase_order_id: string
          purchase_order_version_id: string
          recipient_address: string
          recipient_name: string
          requested_at: string
          requested_by: string
          retry_count: number
          row_version: number
          updated_at: string
          updated_by: string
        }
        Insert: {
          created_at?: string
          created_by?: string
          dispatch_method: string
          id?: string
          last_retry_at?: string | null
          last_retry_by?: string | null
          last_retry_reason?: string | null
          organization_id: string
          outbound_message_id?: string | null
          phone_contact_notes?: string | null
          phone_contacted_at?: string | null
          phone_contacted_by?: string | null
          purchase_order_id: string
          purchase_order_version_id: string
          recipient_address: string
          recipient_name: string
          requested_at?: string
          requested_by?: string
          retry_count?: number
          row_version?: number
          updated_at?: string
          updated_by?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          dispatch_method?: string
          id?: string
          last_retry_at?: string | null
          last_retry_by?: string | null
          last_retry_reason?: string | null
          organization_id?: string
          outbound_message_id?: string | null
          phone_contact_notes?: string | null
          phone_contacted_at?: string | null
          phone_contacted_by?: string | null
          purchase_order_id?: string
          purchase_order_version_id?: string
          recipient_address?: string
          recipient_name?: string
          requested_at?: string
          requested_by?: string
          retry_count?: number
          row_version?: number
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "purchase_order_dispatches_organization_id_outbound_message_fkey"
            columns: ["organization_id", "outbound_message_id"]
            isOneToOne: true
            referencedRelation: "outbound_messages"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "purchase_order_dispatches_organization_id_purchase_order_i_fkey"
            columns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
            isOneToOne: true
            referencedRelation: "purchase_order_versions"
            referencedColumns: ["organization_id", "purchase_order_id", "id"]
          },
        ]
      }
      purchase_order_lines: {
        Row: {
          base_quantity: number | null
          conversion_to_base: number
          cost_override_reason: string | null
          created_at: string
          created_by: string | null
          discount_amount: number
          duty_per_unit: number
          freight_per_unit: number
          id: string
          line_number: number
          notes: string | null
          order_guide_line_id: string | null
          organization_id: string
          product_id: string
          product_uom_id: string
          purchase_order_id: string
          quantity: number
          quantity_override_reason: string | null
          recommended_quantity: number | null
          row_version: number
          subtotal_amount: number | null
          tax_amount: number | null
          tax_rate: number
          total_amount: number | null
          unit_cost: number
          updated_at: string
          updated_by: string | null
          vendor_product_cost_id: string | null
          vendor_product_id: string | null
          warehouse_id: string
        }
        Insert: {
          base_quantity?: number | null
          conversion_to_base: number
          cost_override_reason?: string | null
          created_at?: string
          created_by?: string | null
          discount_amount?: number
          duty_per_unit?: number
          freight_per_unit?: number
          id?: string
          line_number: number
          notes?: string | null
          order_guide_line_id?: string | null
          organization_id: string
          product_id: string
          product_uom_id: string
          purchase_order_id: string
          quantity: number
          quantity_override_reason?: string | null
          recommended_quantity?: number | null
          row_version?: number
          subtotal_amount?: number | null
          tax_amount?: number | null
          tax_rate?: number
          total_amount?: number | null
          unit_cost: number
          updated_at?: string
          updated_by?: string | null
          vendor_product_cost_id?: string | null
          vendor_product_id?: string | null
          warehouse_id: string
        }
        Update: {
          base_quantity?: number | null
          conversion_to_base?: number
          cost_override_reason?: string | null
          created_at?: string
          created_by?: string | null
          discount_amount?: number
          duty_per_unit?: number
          freight_per_unit?: number
          id?: string
          line_number?: number
          notes?: string | null
          order_guide_line_id?: string | null
          organization_id?: string
          product_id?: string
          product_uom_id?: string
          purchase_order_id?: string
          quantity?: number
          quantity_override_reason?: string | null
          recommended_quantity?: number | null
          row_version?: number
          subtotal_amount?: number | null
          tax_amount?: number | null
          tax_rate?: number
          total_amount?: number | null
          unit_cost?: number
          updated_at?: string
          updated_by?: string | null
          vendor_product_cost_id?: string | null
          vendor_product_id?: string | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "purchase_order_lines_order_guide_line_fkey"
            columns: ["organization_id", "order_guide_line_id"]
            isOneToOne: false
            referencedRelation: "order_guide_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "purchase_order_lines_organization_id_product_id_product_uo_fkey"
            columns: ["organization_id", "product_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "purchase_order_lines_organization_id_purchase_order_id_fkey"
            columns: ["organization_id", "purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "purchase_order_lines_organization_id_vendor_product_cost_i_fkey"
            columns: ["organization_id", "vendor_product_cost_id"]
            isOneToOne: false
            referencedRelation: "vendor_product_costs"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "purchase_order_lines_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "purchase_order_lines_vendor_product_fkey"
            columns: ["organization_id", "vendor_product_id"]
            isOneToOne: false
            referencedRelation: "vendor_products"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      purchase_order_vendor_responses: {
        Row: {
          evidence_notes: string
          id: string
          organization_id: string
          outcome: string
          purchase_order_dispatch_id: string
          purchase_order_id: string
          purchase_order_version_id: string
          received_at: string
          recorded_at: string
          recorded_by: string
          row_version: number
          source_channel: string
          vendor_id: string
          vendor_reference: string
        }
        Insert: {
          evidence_notes: string
          id?: string
          organization_id: string
          outcome: string
          purchase_order_dispatch_id: string
          purchase_order_id: string
          purchase_order_version_id: string
          received_at: string
          recorded_at?: string
          recorded_by?: string
          row_version?: number
          source_channel: string
          vendor_id: string
          vendor_reference: string
        }
        Update: {
          evidence_notes?: string
          id?: string
          organization_id?: string
          outcome?: string
          purchase_order_dispatch_id?: string
          purchase_order_id?: string
          purchase_order_version_id?: string
          received_at?: string
          recorded_at?: string
          recorded_by?: string
          row_version?: number
          source_channel?: string
          vendor_id?: string
          vendor_reference?: string
        }
        Relationships: [
          {
            foreignKeyName: "purchase_order_vendor_respon_organization_id_purchase_ord_fkey1"
            columns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "purchase_order_dispatch_id",
            ]
            isOneToOne: false
            referencedRelation: "purchase_order_dispatches"
            referencedColumns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "id",
            ]
          },
          {
            foreignKeyName: "purchase_order_vendor_respons_organization_id_purchase_ord_fkey"
            columns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
            isOneToOne: false
            referencedRelation: "purchase_order_versions"
            referencedColumns: ["organization_id", "purchase_order_id", "id"]
          },
          {
            foreignKeyName: "purchase_order_vendor_responses_organization_id_vendor_id_fkey"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      purchase_order_version_landed_cost_allocations: {
        Row: {
          brokerage_amount: number
          duties_amount: number
          duty_per_unit: number
          exact_lineage: Json | null
          freight_amount: number
          freight_per_unit: number
          fuel_surcharge_amount: number
          is_residual: boolean
          line_number: number
          organization_id: string
          purchase_order_id: string
          purchase_order_line_id: string
          purchase_order_version_id: string
          purchase_order_version_line_id: string
          total_amount: number | null
        }
        Insert: {
          brokerage_amount: number
          duties_amount: number
          duty_per_unit: number
          exact_lineage?: Json | null
          freight_amount: number
          freight_per_unit: number
          fuel_surcharge_amount: number
          is_residual: boolean
          line_number: number
          organization_id: string
          purchase_order_id: string
          purchase_order_line_id: string
          purchase_order_version_id: string
          purchase_order_version_line_id: string
          total_amount?: number | null
        }
        Update: {
          brokerage_amount?: number
          duties_amount?: number
          duty_per_unit?: number
          exact_lineage?: Json | null
          freight_amount?: number
          freight_per_unit?: number
          fuel_surcharge_amount?: number
          is_residual?: boolean
          line_number?: number
          organization_id?: string
          purchase_order_id?: string
          purchase_order_line_id?: string
          purchase_order_version_id?: string
          purchase_order_version_line_id?: string
          total_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "purchase_order_version_lande_organization_id_purchase_ord_fkey2"
            columns: ["organization_id", "purchase_order_version_id"]
            isOneToOne: false
            referencedRelation: "purchase_order_version_landed_costs"
            referencedColumns: ["organization_id", "purchase_order_version_id"]
          },
          {
            foreignKeyName: "purchase_order_version_lande_organization_id_purchase_ord_fkey3"
            columns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "purchase_order_version_line_id",
            ]
            isOneToOne: false
            referencedRelation: "purchase_order_version_lines"
            referencedColumns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "id",
            ]
          },
        ]
      }
      purchase_order_version_landed_costs: {
        Row: {
          allocation_method: string
          brokerage_amount: number
          currency_code: string
          duties_amount: number
          freight_amount: number
          fuel_surcharge_amount: number
          organization_id: string
          purchase_order_id: string
          purchase_order_version_id: string
          recorded_at: string
          recorded_by: string | null
          residual_purchase_order_version_line_id: string
          total_amount: number | null
        }
        Insert: {
          allocation_method: string
          brokerage_amount: number
          currency_code: string
          duties_amount: number
          freight_amount: number
          fuel_surcharge_amount: number
          organization_id: string
          purchase_order_id: string
          purchase_order_version_id: string
          recorded_at?: string
          recorded_by?: string | null
          residual_purchase_order_version_line_id: string
          total_amount?: number | null
        }
        Update: {
          allocation_method?: string
          brokerage_amount?: number
          currency_code?: string
          duties_amount?: number
          freight_amount?: number
          fuel_surcharge_amount?: number
          organization_id?: string
          purchase_order_id?: string
          purchase_order_version_id?: string
          recorded_at?: string
          recorded_by?: string | null
          residual_purchase_order_version_line_id?: string
          total_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "purchase_order_version_lande_organization_id_purchase_ord_fkey1"
            columns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "residual_purchase_order_version_line_id",
            ]
            isOneToOne: false
            referencedRelation: "purchase_order_version_lines"
            referencedColumns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "id",
            ]
          },
          {
            foreignKeyName: "purchase_order_version_landed_organization_id_purchase_ord_fkey"
            columns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
            isOneToOne: false
            referencedRelation: "purchase_order_versions"
            referencedColumns: ["organization_id", "purchase_order_id", "id"]
          },
        ]
      }
      purchase_order_version_lines: {
        Row: {
          created_at: string
          id: string
          line_number: number
          organization_id: string
          purchase_order_id: string
          purchase_order_line_id: string
          purchase_order_version_id: string
          snapshot: Json
          snapshot_hash: string
        }
        Insert: {
          created_at?: string
          id?: string
          line_number: number
          organization_id: string
          purchase_order_id: string
          purchase_order_line_id: string
          purchase_order_version_id: string
          snapshot: Json
          snapshot_hash: string
        }
        Update: {
          created_at?: string
          id?: string
          line_number?: number
          organization_id?: string
          purchase_order_id?: string
          purchase_order_line_id?: string
          purchase_order_version_id?: string
          snapshot?: Json
          snapshot_hash?: string
        }
        Relationships: [
          {
            foreignKeyName: "purchase_order_version_lines_organization_id_purchase_orde_fkey"
            columns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
            isOneToOne: false
            referencedRelation: "purchase_order_versions"
            referencedColumns: ["organization_id", "purchase_order_id", "id"]
          },
        ]
      }
      purchase_order_versions: {
        Row: {
          amended_by: string | null
          amendment_reason: string | null
          created_at: string
          created_by: string
          id: string
          organization_id: string
          previous_version_id: string | null
          purchase_order_id: string
          snapshot: Json
          snapshot_hash: string
          source_fingerprint: string
          version_number: number
        }
        Insert: {
          amended_by?: string | null
          amendment_reason?: string | null
          created_at?: string
          created_by?: string
          id?: string
          organization_id: string
          previous_version_id?: string | null
          purchase_order_id: string
          snapshot: Json
          snapshot_hash: string
          source_fingerprint: string
          version_number: number
        }
        Update: {
          amended_by?: string | null
          amendment_reason?: string | null
          created_at?: string
          created_by?: string
          id?: string
          organization_id?: string
          previous_version_id?: string | null
          purchase_order_id?: string
          snapshot?: Json
          snapshot_hash?: string
          source_fingerprint?: string
          version_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "purchase_order_versions_organization_id_purchase_order_id_fkey"
            columns: ["organization_id", "purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "purchase_order_versions_previous_version_fkey"
            columns: [
              "organization_id",
              "purchase_order_id",
              "previous_version_id",
            ]
            isOneToOne: false
            referencedRelation: "purchase_order_versions"
            referencedColumns: ["organization_id", "purchase_order_id", "id"]
          },
        ]
      }
      purchase_orders: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          buyer_membership_id: string | null
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          created_at: string
          created_by: string
          currency_code: string
          current_version_id: string
          document_number: string | null
          document_seq: number
          expected_delivery_date: string | null
          id: string
          notes: string | null
          order_date: string
          order_guide_id: string | null
          organization_id: string
          row_version: number
          source_fingerprint: string | null
          status: string | null
          updated_at: string
          updated_by: string | null
          vendor_id: string
          vendor_reference: string | null
          vendor_site_id: string | null
          warehouse_id: string | null
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          buyer_membership_id?: string | null
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          created_at?: string
          created_by?: string
          currency_code: string
          current_version_id: string
          document_number?: string | null
          document_seq?: never
          expected_delivery_date?: string | null
          id?: string
          notes?: string | null
          order_date?: string
          order_guide_id?: string | null
          organization_id: string
          row_version?: number
          source_fingerprint?: string | null
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          vendor_id: string
          vendor_reference?: string | null
          vendor_site_id?: string | null
          warehouse_id?: string | null
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          buyer_membership_id?: string | null
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          created_at?: string
          created_by?: string
          currency_code?: string
          current_version_id?: string
          document_number?: string | null
          document_seq?: never
          expected_delivery_date?: string | null
          id?: string
          notes?: string | null
          order_date?: string
          order_guide_id?: string | null
          organization_id?: string
          row_version?: number
          source_fingerprint?: string | null
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          vendor_id?: string
          vendor_reference?: string | null
          vendor_site_id?: string | null
          warehouse_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "purchase_orders_buyer_membership_fkey"
            columns: ["organization_id", "buyer_membership_id"]
            isOneToOne: false
            referencedRelation: "organization_memberships"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "purchase_orders_current_version_fkey"
            columns: ["organization_id", "id", "current_version_id"]
            isOneToOne: false
            referencedRelation: "purchase_order_versions"
            referencedColumns: ["organization_id", "purchase_order_id", "id"]
          },
          {
            foreignKeyName: "purchase_orders_order_guide_fkey"
            columns: ["organization_id", "order_guide_id"]
            isOneToOne: false
            referencedRelation: "order_guides"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "purchase_orders_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchase_orders_organization_id_vendor_id_fkey"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "purchase_orders_vendor_site_fk"
            columns: ["organization_id", "vendor_id", "vendor_site_id"]
            isOneToOne: false
            referencedRelation: "vendor_sites"
            referencedColumns: ["organization_id", "vendor_id", "id"]
          },
          {
            foreignKeyName: "purchase_orders_warehouse_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      recall_actions: {
        Row: {
          action_type: string
          assigned_to_user_id: string | null
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          completed_at: string | null
          completed_by: string | null
          created_at: string
          created_by: string | null
          due_at: string | null
          id: string
          organization_id: string
          recall_case_id: string
          result: Json
          row_version: number
          status: string | null
          title: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          action_type: string
          assigned_to_user_id?: string | null
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          completed_at?: string | null
          completed_by?: string | null
          created_at?: string
          created_by?: string | null
          due_at?: string | null
          id?: string
          organization_id: string
          recall_case_id: string
          result?: Json
          row_version?: number
          status?: string | null
          title: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          action_type?: string
          assigned_to_user_id?: string | null
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          completed_at?: string | null
          completed_by?: string | null
          created_at?: string
          created_by?: string | null
          due_at?: string | null
          id?: string
          organization_id?: string
          recall_case_id?: string
          result?: Json
          row_version?: number
          status?: string | null
          title?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recall_actions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recall_actions_organization_id_recall_case_id_fkey"
            columns: ["organization_id", "recall_case_id"]
            isOneToOne: false
            referencedRelation: "recall_cases"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      recall_cases: {
        Row: {
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          classification: string
          closed_at: string | null
          closed_by: string | null
          closure_summary: string | null
          created_at: string
          created_by: string | null
          document_number: string | null
          document_seq: number
          id: string
          initiated_at: string | null
          initiated_by: string | null
          organization_id: string
          reason: string
          row_version: number
          status: string | null
          title: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          classification?: string
          closed_at?: string | null
          closed_by?: string | null
          closure_summary?: string | null
          created_at?: string
          created_by?: string | null
          document_number?: string | null
          document_seq?: number
          id?: string
          initiated_at?: string | null
          initiated_by?: string | null
          organization_id: string
          reason: string
          row_version?: number
          status?: string | null
          title: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          classification?: string
          closed_at?: string | null
          closed_by?: string | null
          closure_summary?: string | null
          created_at?: string
          created_by?: string | null
          document_number?: string | null
          document_seq?: number
          id?: string
          initiated_at?: string | null
          initiated_by?: string | null
          organization_id?: string
          reason?: string
          row_version?: number
          status?: string | null
          title?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recall_cases_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      recall_lots: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          inventory_hold_id: string | null
          lot_id: string
          organization_id: string
          product_id: string
          recall_case_id: string
          row_version: number
          scope_reason: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          inventory_hold_id?: string | null
          lot_id: string
          organization_id: string
          product_id: string
          recall_case_id: string
          row_version?: number
          scope_reason?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          inventory_hold_id?: string | null
          lot_id?: string
          organization_id?: string
          product_id?: string
          recall_case_id?: string
          row_version?: number
          scope_reason?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recall_lot_hold"
            columns: ["organization_id", "inventory_hold_id"]
            isOneToOne: true
            referencedRelation: "inventory_hold_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "recall_lot_hold"
            columns: ["organization_id", "inventory_hold_id"]
            isOneToOne: true
            referencedRelation: "inventory_holds"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "recall_lot_hold"
            columns: ["organization_id", "inventory_hold_id"]
            isOneToOne: true
            referencedRelation: "inventory_lot_hold_activity"
            referencedColumns: ["organization_id", "inventory_hold_id"]
          },
          {
            foreignKeyName: "recall_lots_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recall_lots_organization_id_product_id_lot_id_fkey"
            columns: ["organization_id", "product_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "recall_lots_organization_id_recall_case_id_fkey"
            columns: ["organization_id", "recall_case_id"]
            isOneToOne: false
            referencedRelation: "recall_cases"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      receiving_arrivals: {
        Row: {
          advance_ship_notice_id: string | null
          arrived_at: string
          arrived_by: string
          created_at: string
          id: string
          organization_id: string
          purchase_order_id: string
          purchase_order_version_id: string
          row_version: number
          warehouse_id: string
        }
        Insert: {
          advance_ship_notice_id?: string | null
          arrived_at?: string
          arrived_by: string
          created_at?: string
          id?: string
          organization_id: string
          purchase_order_id: string
          purchase_order_version_id: string
          row_version?: number
          warehouse_id: string
        }
        Update: {
          advance_ship_notice_id?: string | null
          arrived_at?: string
          arrived_by?: string
          created_at?: string
          id?: string
          organization_id?: string
          purchase_order_id?: string
          purchase_order_version_id?: string
          row_version?: number
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "receiving_arrivals_organization_id_advance_ship_notice_id__fkey"
            columns: [
              "organization_id",
              "advance_ship_notice_id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
            isOneToOne: false
            referencedRelation: "advance_ship_notices"
            referencedColumns: [
              "organization_id",
              "id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
          },
          {
            foreignKeyName: "receiving_arrivals_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "receiving_arrivals_organization_id_purchase_order_id_purch_fkey"
            columns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
            isOneToOne: false
            referencedRelation: "purchase_order_versions"
            referencedColumns: ["organization_id", "purchase_order_id", "id"]
          },
          {
            foreignKeyName: "receiving_arrivals_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      receiving_discrepancies: {
        Row: {
          actual_quantity: number | null
          actual_temperature_c: number | null
          assigned_employee_id: string | null
          attachment_id: string | null
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          created_at: string
          created_by: string | null
          currency_code: string | null
          description: string | null
          discrepancy_type: string
          document_number: string | null
          document_seq: number
          due_at: string | null
          estimated_value_impact: number | null
          expected_quantity: number | null
          expected_temperature_c: number | null
          goods_receipt_capture_id: string | null
          goods_receipt_id: string
          goods_receipt_line_id: string | null
          id: string
          organization_id: string
          product_id: string | null
          purchase_order_id: string
          purchase_order_line_id: string | null
          quantity_variance: number | null
          resolution_code: string | null
          resolution_notes: string | null
          resolved_at: string | null
          resolved_by: string | null
          row_version: number
          severity: string
          source_event_key: string | null
          status: string | null
          updated_at: string
          updated_by: string | null
          vendor_bill_id: string | null
          vendor_bill_line_id: string | null
          vendor_bill_match_line_id: string | null
          vendor_id: string
        }
        Insert: {
          actual_quantity?: number | null
          actual_temperature_c?: number | null
          assigned_employee_id?: string | null
          attachment_id?: string | null
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          created_at?: string
          created_by?: string | null
          currency_code?: string | null
          description?: string | null
          discrepancy_type: string
          document_number?: string | null
          document_seq?: number
          due_at?: string | null
          estimated_value_impact?: number | null
          expected_quantity?: number | null
          expected_temperature_c?: number | null
          goods_receipt_capture_id?: string | null
          goods_receipt_id: string
          goods_receipt_line_id?: string | null
          id?: string
          organization_id: string
          product_id?: string | null
          purchase_order_id: string
          purchase_order_line_id?: string | null
          quantity_variance?: number | null
          resolution_code?: string | null
          resolution_notes?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          row_version?: number
          severity?: string
          source_event_key?: string | null
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          vendor_bill_id?: string | null
          vendor_bill_line_id?: string | null
          vendor_bill_match_line_id?: string | null
          vendor_id: string
        }
        Update: {
          actual_quantity?: number | null
          actual_temperature_c?: number | null
          assigned_employee_id?: string | null
          attachment_id?: string | null
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          created_at?: string
          created_by?: string | null
          currency_code?: string | null
          description?: string | null
          discrepancy_type?: string
          document_number?: string | null
          document_seq?: number
          due_at?: string | null
          estimated_value_impact?: number | null
          expected_quantity?: number | null
          expected_temperature_c?: number | null
          goods_receipt_capture_id?: string | null
          goods_receipt_id?: string
          goods_receipt_line_id?: string | null
          id?: string
          organization_id?: string
          product_id?: string | null
          purchase_order_id?: string
          purchase_order_line_id?: string | null
          quantity_variance?: number | null
          resolution_code?: string | null
          resolution_notes?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          row_version?: number
          severity?: string
          source_event_key?: string | null
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          vendor_bill_id?: string | null
          vendor_bill_line_id?: string | null
          vendor_bill_match_line_id?: string | null
          vendor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "receiving_discrepancies_attachment_fk"
            columns: ["organization_id", "attachment_id"]
            isOneToOne: false
            referencedRelation: "file_attachments"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_capture_fk"
            columns: [
              "organization_id",
              "goods_receipt_id",
              "goods_receipt_capture_id",
            ]
            isOneToOne: false
            referencedRelation: "goods_receipt_captures"
            referencedColumns: ["organization_id", "goods_receipt_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_employee_fk"
            columns: ["organization_id", "assigned_employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_exact_match_line_fk"
            columns: [
              "organization_id",
              "vendor_bill_id",
              "vendor_bill_line_id",
              "vendor_bill_match_line_id",
            ]
            isOneToOne: false
            referencedRelation: "vendor_bill_match_lines"
            referencedColumns: [
              "organization_id",
              "vendor_bill_id",
              "vendor_bill_line_id",
              "id",
            ]
          },
          {
            foreignKeyName: "receiving_discrepancies_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_po_fk"
            columns: ["organization_id", "purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_po_line_fk"
            columns: ["organization_id", "purchase_order_line_id"]
            isOneToOne: false
            referencedRelation: "purchase_order_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_product_fk"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_receipt_fk"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_receipt_fk"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_receipt_fk"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_invoice_intake_candidates"
            referencedColumns: ["organization_id", "goods_receipt_id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_receipt_line_fk"
            columns: ["organization_id", "goods_receipt_line_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_receipt_line_fk"
            columns: ["organization_id", "goods_receipt_line_id"]
            isOneToOne: false
            referencedRelation: "landed_cost_line_overview"
            referencedColumns: ["organization_id", "goods_receipt_line_id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_vendor_bill_fk"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_bill_activity"
            referencedColumns: ["organization_id", "vendor_bill_id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_vendor_bill_fk"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "vendor_bill_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_vendor_bill_fk"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "vendor_bills"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_vendor_bill_line_fk"
            columns: [
              "organization_id",
              "vendor_bill_id",
              "vendor_bill_line_id",
            ]
            isOneToOne: false
            referencedRelation: "vendor_bill_lines"
            referencedColumns: ["organization_id", "vendor_bill_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_vendor_bill_match_line_fk"
            columns: ["organization_id", "vendor_bill_match_line_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_bill_match_line_activity"
            referencedColumns: ["organization_id", "vendor_bill_match_line_id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_vendor_bill_match_line_fk"
            columns: ["organization_id", "vendor_bill_match_line_id"]
            isOneToOne: false
            referencedRelation: "vendor_bill_match_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_vendor_fk"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      receiving_document_review_events: {
        Row: {
          command_key: string
          details: Json
          event_sequence: number
          event_type: string
          id: string
          occurred_at: string
          occurred_by: string
          organization_id: string
          review_id: string
          review_row_version: number
        }
        Insert: {
          command_key: string
          details?: Json
          event_sequence: number
          event_type: string
          id?: string
          occurred_at?: string
          occurred_by?: string
          organization_id: string
          review_id: string
          review_row_version: number
        }
        Update: {
          command_key?: string
          details?: Json
          event_sequence?: number
          event_type?: string
          id?: string
          occurred_at?: string
          occurred_by?: string
          organization_id?: string
          review_id?: string
          review_row_version?: number
        }
        Relationships: [
          {
            foreignKeyName: "receiving_document_review_events_review_fk"
            columns: ["organization_id", "review_id"]
            isOneToOne: false
            referencedRelation: "receiving_document_reviews"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      receiving_document_reviews: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          connector: string
          corrections: Json | null
          created_at: string
          created_by: string
          envelope: Json
          external_event_id: string
          goods_receipt_id: string | null
          id: string
          organization_id: string
          received_at: string
          rejected_at: string | null
          rejected_by: string | null
          rejection_reason: string | null
          row_version: number
          sender: string
          source_envelope_id: string
          status: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          connector: string
          corrections?: Json | null
          created_at?: string
          created_by?: string
          envelope: Json
          external_event_id: string
          goods_receipt_id?: string | null
          id?: string
          organization_id: string
          received_at: string
          rejected_at?: string | null
          rejected_by?: string | null
          rejection_reason?: string | null
          row_version?: number
          sender: string
          source_envelope_id: string
          status?: string
          updated_at?: string
          updated_by?: string
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          connector?: string
          corrections?: Json | null
          created_at?: string
          created_by?: string
          envelope?: Json
          external_event_id?: string
          goods_receipt_id?: string | null
          id?: string
          organization_id?: string
          received_at?: string
          rejected_at?: string | null
          rejected_by?: string | null
          rejection_reason?: string | null
          row_version?: number
          sender?: string
          source_envelope_id?: string
          status?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "receiving_document_reviews_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "receiving_document_reviews_receipt_fk"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_document_reviews_receipt_fk"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_document_reviews_receipt_fk"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_invoice_intake_candidates"
            referencedColumns: ["organization_id", "goods_receipt_id"]
          },
        ]
      }
      receiving_putaway_scan_evidence: {
        Row: {
          command_key: string
          destination_bin_evidence: string
          destination_bin_id: string
          id: string
          lot_id: string | null
          organization_id: string
          product_id: string
          product_or_lot_evidence: string
          quantity_base: number
          quantity_evidence: number
          receiving_putaway_task_id: string
          source_bin_evidence: string
          source_bin_id: string
          verified_at: string
          verified_by: string
          warehouse_id: string
        }
        Insert: {
          command_key: string
          destination_bin_evidence: string
          destination_bin_id: string
          id?: string
          lot_id?: string | null
          organization_id: string
          product_id: string
          product_or_lot_evidence: string
          quantity_base: number
          quantity_evidence: number
          receiving_putaway_task_id: string
          source_bin_evidence: string
          source_bin_id: string
          verified_at?: string
          verified_by: string
          warehouse_id: string
        }
        Update: {
          command_key?: string
          destination_bin_evidence?: string
          destination_bin_id?: string
          id?: string
          lot_id?: string | null
          organization_id?: string
          product_id?: string
          product_or_lot_evidence?: string
          quantity_base?: number
          quantity_evidence?: number
          receiving_putaway_task_id?: string
          source_bin_evidence?: string
          source_bin_id?: string
          verified_at?: string
          verified_by?: string
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "receiving_putaway_scan_evide_organization_id_warehouse_id_fkey1"
            columns: ["organization_id", "warehouse_id", "source_bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "receiving_putaway_scan_evide_organization_id_warehouse_id_fkey2"
            columns: ["organization_id", "warehouse_id", "destination_bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "receiving_putaway_scan_eviden_organization_id_product_id_l_fkey"
            columns: ["organization_id", "product_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "receiving_putaway_scan_eviden_organization_id_receiving_pu_fkey"
            columns: ["organization_id", "receiving_putaway_task_id"]
            isOneToOne: true
            referencedRelation: "receiving_putaway_tasks"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_putaway_scan_eviden_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_putaway_scan_evidence_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "receiving_putaway_scan_evidence_organization_id_product_id_fkey"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      receiving_putaway_tasks: {
        Row: {
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          completed_at: string | null
          completed_by: string | null
          created_at: string
          created_by: string
          disposition: string
          from_bin_id: string
          goods_receipt_capture_id: string
          goods_receipt_id: string
          goods_receipt_line_id: string
          id: string
          lot_id: string | null
          organization_id: string
          product_id: string
          quantity_base: number
          route: string
          row_version: number
          status: string | null
          to_bin_id: string
          updated_at: string
          updated_by: string
          warehouse_id: string
        }
        Insert: {
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          completed_at?: string | null
          completed_by?: string | null
          created_at?: string
          created_by?: string
          disposition?: string
          from_bin_id: string
          goods_receipt_capture_id: string
          goods_receipt_id: string
          goods_receipt_line_id: string
          id?: string
          lot_id?: string | null
          organization_id: string
          product_id: string
          quantity_base: number
          route?: string
          row_version?: number
          status?: string | null
          to_bin_id: string
          updated_at?: string
          updated_by?: string
          warehouse_id: string
        }
        Update: {
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          completed_at?: string | null
          completed_by?: string | null
          created_at?: string
          created_by?: string
          disposition?: string
          from_bin_id?: string
          goods_receipt_capture_id?: string
          goods_receipt_id?: string
          goods_receipt_line_id?: string
          id?: string
          lot_id?: string | null
          organization_id?: string
          product_id?: string
          quantity_base?: number
          route?: string
          row_version?: number
          status?: string | null
          to_bin_id?: string
          updated_at?: string
          updated_by?: string
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "receiving_putaway_tasks_organization_id_goods_receipt_capt_fkey"
            columns: ["organization_id", "goods_receipt_capture_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_captures"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_putaway_tasks_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_putaway_tasks_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_putaway_tasks_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_invoice_intake_candidates"
            referencedColumns: ["organization_id", "goods_receipt_id"]
          },
          {
            foreignKeyName: "receiving_putaway_tasks_organization_id_goods_receipt_id_g_fkey"
            columns: [
              "organization_id",
              "goods_receipt_id",
              "goods_receipt_capture_id",
            ]
            isOneToOne: false
            referencedRelation: "goods_receipt_captures"
            referencedColumns: ["organization_id", "goods_receipt_id", "id"]
          },
          {
            foreignKeyName: "receiving_putaway_tasks_organization_id_goods_receipt_line_fkey"
            columns: ["organization_id", "goods_receipt_line_id"]
            isOneToOne: true
            referencedRelation: "goods_receipt_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_putaway_tasks_organization_id_goods_receipt_line_fkey"
            columns: ["organization_id", "goods_receipt_line_id"]
            isOneToOne: true
            referencedRelation: "landed_cost_line_overview"
            referencedColumns: ["organization_id", "goods_receipt_line_id"]
          },
          {
            foreignKeyName: "receiving_putaway_tasks_organization_id_product_id_fkey"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_putaway_tasks_organization_id_product_id_lot_id_fkey"
            columns: ["organization_id", "product_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "receiving_putaway_tasks_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_putaway_tasks_organization_id_warehouse_id_from__fkey"
            columns: ["organization_id", "warehouse_id", "from_bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "receiving_putaway_tasks_organization_id_warehouse_id_to_bi_fkey"
            columns: ["organization_id", "warehouse_id", "to_bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
        ]
      }
      recruiting_opening_drafts: {
        Row: {
          command_receipt_id: string
          created_at: string
          created_by: string
          draft_number: number
          headcount: number
          id: string
          organization_id: string
          review_notes: string
          role_title: string
          row_version: number
          source_label: string
          status: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          command_receipt_id: string
          created_at?: string
          created_by: string
          draft_number?: never
          headcount?: number
          id?: string
          organization_id: string
          review_notes?: string
          role_title?: string
          row_version?: number
          source_label?: string
          status?: string
          updated_at?: string
          updated_by: string
        }
        Update: {
          command_receipt_id?: string
          created_at?: string
          created_by?: string
          draft_number?: never
          headcount?: number
          id?: string
          organization_id?: string
          review_notes?: string
          role_title?: string
          row_version?: number
          source_label?: string
          status?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "recruiting_opening_drafts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      report_definitions: {
        Row: {
          code: string
          column_schema: Json
          created_at: string
          created_by: string
          default_format: string
          description: string | null
          display_name: string
          family: string
          id: string
          is_active: boolean
          is_system: boolean
          organization_id: string
          parameter_schema: Json
          query_key: string
          required_permission: string | null
          row_version: number
          updated_at: string
          updated_by: string
        }
        Insert: {
          code: string
          column_schema?: Json
          created_at?: string
          created_by: string
          default_format?: string
          description?: string | null
          display_name: string
          family: string
          id?: string
          is_active?: boolean
          is_system?: boolean
          organization_id: string
          parameter_schema?: Json
          query_key: string
          required_permission?: string | null
          row_version?: number
          updated_at?: string
          updated_by: string
        }
        Update: {
          code?: string
          column_schema?: Json
          created_at?: string
          created_by?: string
          default_format?: string
          description?: string | null
          display_name?: string
          family?: string
          id?: string
          is_active?: boolean
          is_system?: boolean
          organization_id?: string
          parameter_schema?: Json
          query_key?: string
          required_permission?: string | null
          row_version?: number
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "report_definitions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "report_definitions_required_permission_fkey"
            columns: ["required_permission"]
            isOneToOne: false
            referencedRelation: "app_permissions"
            referencedColumns: ["permission_key"]
          },
        ]
      }
      report_runs: {
        Row: {
          completed_at: string | null
          created_at: string
          created_by: string
          error_message: string | null
          failed_at: string | null
          id: string
          organization_id: string
          parameters: Json
          report_definition_id: string
          requested_at: string
          requested_by: string
          requested_format: string
          result_attachment_id: string | null
          result_metadata: Json
          row_count: number | null
          row_version: number
          started_at: string | null
          status: string | null
          updated_at: string
          updated_by: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          created_by: string
          error_message?: string | null
          failed_at?: string | null
          id: string
          organization_id: string
          parameters?: Json
          report_definition_id: string
          requested_at?: string
          requested_by: string
          requested_format: string
          result_attachment_id?: string | null
          result_metadata?: Json
          row_count?: number | null
          row_version?: number
          started_at?: string | null
          status?: string | null
          updated_at?: string
          updated_by: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          created_by?: string
          error_message?: string | null
          failed_at?: string | null
          id?: string
          organization_id?: string
          parameters?: Json
          report_definition_id?: string
          requested_at?: string
          requested_by?: string
          requested_format?: string
          result_attachment_id?: string | null
          result_metadata?: Json
          row_count?: number | null
          row_version?: number
          started_at?: string | null
          status?: string | null
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "report_runs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "report_runs_organization_id_report_definition_id_fkey"
            columns: ["organization_id", "report_definition_id"]
            isOneToOne: false
            referencedRelation: "report_definitions"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "report_runs_organization_id_result_attachment_id_fkey"
            columns: ["organization_id", "result_attachment_id"]
            isOneToOne: false
            referencedRelation: "file_attachments"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      report_template_preferences: {
        Row: {
          created_at: string
          created_by: string
          default_template_code: string | null
          organization_id: string
          row_version: number
          updated_at: string
          updated_by: string
        }
        Insert: {
          created_at?: string
          created_by: string
          default_template_code?: string | null
          organization_id: string
          row_version?: number
          updated_at?: string
          updated_by: string
        }
        Update: {
          created_at?: string
          created_by?: string
          default_template_code?: string | null
          organization_id?: string
          row_version?: number
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "report_template_preferences_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: true
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      route_shipments: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          loaded_at: string | null
          loaded_by: string | null
          organization_id: string
          route_id: string
          route_stop_id: string
          row_version: number
          shipment_id: string
          unloaded_at: string | null
          unloaded_by: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          loaded_at?: string | null
          loaded_by?: string | null
          organization_id: string
          route_id: string
          route_stop_id: string
          row_version?: number
          shipment_id: string
          unloaded_at?: string | null
          unloaded_by?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          loaded_at?: string | null
          loaded_by?: string | null
          organization_id?: string
          route_id?: string
          route_stop_id?: string
          row_version?: number
          shipment_id?: string
          unloaded_at?: string | null
          unloaded_by?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "route_shipments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "route_shipments_organization_id_route_id_fkey"
            columns: ["organization_id", "route_id"]
            isOneToOne: false
            referencedRelation: "delivery_routes"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "route_shipments_organization_id_route_id_route_stop_id_fkey"
            columns: ["organization_id", "route_id", "route_stop_id"]
            isOneToOne: false
            referencedRelation: "route_stops"
            referencedColumns: ["organization_id", "route_id", "id"]
          },
          {
            foreignKeyName: "route_shipments_organization_id_shipment_id_fkey"
            columns: ["organization_id", "shipment_id"]
            isOneToOne: true
            referencedRelation: "shipments"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      route_stop_orders: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          organization_id: string
          route_stop_id: string
          row_version: number
          sales_order_id: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          organization_id: string
          route_stop_id: string
          row_version?: number
          sales_order_id: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          organization_id?: string
          route_stop_id?: string
          row_version?: number
          sales_order_id?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "route_stop_orders_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "route_stop_orders_organization_id_route_stop_id_fkey"
            columns: ["organization_id", "route_stop_id"]
            isOneToOne: false
            referencedRelation: "route_stops"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "route_stop_orders_organization_id_sales_order_id_fkey"
            columns: ["organization_id", "sales_order_id"]
            isOneToOne: true
            referencedRelation: "sales_order_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "route_stop_orders_organization_id_sales_order_id_fkey"
            columns: ["organization_id", "sales_order_id"]
            isOneToOne: true
            referencedRelation: "sales_orders"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      route_stops: {
        Row: {
          address_line_1: string | null
          address_line_2: string | null
          arrived_at: string | null
          arrived_by: string | null
          city: string | null
          completed_at: string | null
          completed_by: string | null
          country_code: string | null
          created_at: string
          created_by: string | null
          customer_id: string
          customer_site_id: string | null
          delivery_window_end: string | null
          delivery_window_start: string | null
          departed_at: string | null
          departed_by: string | null
          exception_reason: string | null
          failed_at: string | null
          failed_by: string | null
          id: string
          instructions: string | null
          latitude: number | null
          longitude: number | null
          organization_id: string
          planned_arrival_at: string | null
          planned_departure_at: string | null
          postal_code: string | null
          region: string | null
          route_id: string
          row_version: number
          service_minutes: number
          skipped_at: string | null
          skipped_by: string | null
          status: string | null
          stop_name: string
          stop_sequence: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          address_line_1?: string | null
          address_line_2?: string | null
          arrived_at?: string | null
          arrived_by?: string | null
          city?: string | null
          completed_at?: string | null
          completed_by?: string | null
          country_code?: string | null
          created_at?: string
          created_by?: string | null
          customer_id: string
          customer_site_id?: string | null
          delivery_window_end?: string | null
          delivery_window_start?: string | null
          departed_at?: string | null
          departed_by?: string | null
          exception_reason?: string | null
          failed_at?: string | null
          failed_by?: string | null
          id?: string
          instructions?: string | null
          latitude?: number | null
          longitude?: number | null
          organization_id: string
          planned_arrival_at?: string | null
          planned_departure_at?: string | null
          postal_code?: string | null
          region?: string | null
          route_id: string
          row_version?: number
          service_minutes?: number
          skipped_at?: string | null
          skipped_by?: string | null
          status?: string | null
          stop_name: string
          stop_sequence: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          address_line_1?: string | null
          address_line_2?: string | null
          arrived_at?: string | null
          arrived_by?: string | null
          city?: string | null
          completed_at?: string | null
          completed_by?: string | null
          country_code?: string | null
          created_at?: string
          created_by?: string | null
          customer_id?: string
          customer_site_id?: string | null
          delivery_window_end?: string | null
          delivery_window_start?: string | null
          departed_at?: string | null
          departed_by?: string | null
          exception_reason?: string | null
          failed_at?: string | null
          failed_by?: string | null
          id?: string
          instructions?: string | null
          latitude?: number | null
          longitude?: number | null
          organization_id?: string
          planned_arrival_at?: string | null
          planned_departure_at?: string | null
          postal_code?: string | null
          region?: string | null
          route_id?: string
          row_version?: number
          service_minutes?: number
          skipped_at?: string | null
          skipped_by?: string | null
          status?: string | null
          stop_name?: string
          stop_sequence?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "route_stops_organization_id_customer_id_customer_site_id_fkey"
            columns: ["organization_id", "customer_id", "customer_site_id"]
            isOneToOne: false
            referencedRelation: "customer_sites"
            referencedColumns: ["organization_id", "customer_id", "id"]
          },
          {
            foreignKeyName: "route_stops_organization_id_customer_id_fkey"
            columns: ["organization_id", "customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "route_stops_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "route_stops_organization_id_route_id_fkey"
            columns: ["organization_id", "route_id"]
            isOneToOne: false
            referencedRelation: "delivery_routes"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      route_telemetry_events: {
        Row: {
          driver_employee_id: string | null
          event_type: string
          heading: number | null
          id: number
          latitude: number | null
          longitude: number | null
          occurred_at: string
          odometer: number | null
          organization_id: string
          payload: Json
          recorded_by: string | null
          route_id: string
          source: string
          speed: number | null
          temperature: number | null
          vehicle_id: string | null
        }
        Insert: {
          driver_employee_id?: string | null
          event_type?: string
          heading?: number | null
          id?: never
          latitude?: number | null
          longitude?: number | null
          occurred_at?: string
          odometer?: number | null
          organization_id: string
          payload?: Json
          recorded_by?: string | null
          route_id: string
          source?: string
          speed?: number | null
          temperature?: number | null
          vehicle_id?: string | null
        }
        Update: {
          driver_employee_id?: string | null
          event_type?: string
          heading?: number | null
          id?: never
          latitude?: number | null
          longitude?: number | null
          occurred_at?: string
          odometer?: number | null
          organization_id?: string
          payload?: Json
          recorded_by?: string | null
          route_id?: string
          source?: string
          speed?: number | null
          temperature?: number | null
          vehicle_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "route_telemetry_events_organization_id_driver_employee_id_fkey"
            columns: ["organization_id", "driver_employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "route_telemetry_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "route_telemetry_events_organization_id_route_id_fkey"
            columns: ["organization_id", "route_id"]
            isOneToOne: false
            referencedRelation: "delivery_routes"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "route_telemetry_events_organization_id_vehicle_id_fkey"
            columns: ["organization_id", "vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      sales_order_line_cancellations: {
        Row: {
          cancelled_base_quantity: number
          command_key: string
          created_at: string
          created_by: string
          id: string
          organization_id: string
          reason: string
          sales_order_line_id: string
        }
        Insert: {
          cancelled_base_quantity: number
          command_key: string
          created_at?: string
          created_by?: string
          id?: string
          organization_id: string
          reason: string
          sales_order_line_id: string
        }
        Update: {
          cancelled_base_quantity?: number
          command_key?: string
          created_at?: string
          created_by?: string
          id?: string
          organization_id?: string
          reason?: string
          sales_order_line_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "sales_line_cancel_line_fk"
            columns: ["organization_id", "sales_order_line_id"]
            isOneToOne: false
            referencedRelation: "sales_order_lines"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      sales_order_line_cost_snapshots: {
        Row: {
          base_quantity: number
          cost_per_base_unit: number | null
          cost_source: string
          created_at: string
          created_by: string | null
          currency_code: string
          evidence: Json
          extended_cost_amount: number | null
          id: string
          organization_id: string
          product_id: string
          sales_order_id: string
          sales_order_line_id: string
          snapshot_at: string
          source_goods_receipt_id: string | null
          source_vendor_product_cost_id: string | null
        }
        Insert: {
          base_quantity: number
          cost_per_base_unit?: number | null
          cost_source: string
          created_at?: string
          created_by?: string | null
          currency_code: string
          evidence?: Json
          extended_cost_amount?: number | null
          id?: string
          organization_id: string
          product_id: string
          sales_order_id: string
          sales_order_line_id: string
          snapshot_at?: string
          source_goods_receipt_id?: string | null
          source_vendor_product_cost_id?: string | null
        }
        Update: {
          base_quantity?: number
          cost_per_base_unit?: number | null
          cost_source?: string
          created_at?: string
          created_by?: string | null
          currency_code?: string
          evidence?: Json
          extended_cost_amount?: number | null
          id?: string
          organization_id?: string
          product_id?: string
          sales_order_id?: string
          sales_order_line_id?: string
          snapshot_at?: string
          source_goods_receipt_id?: string | null
          source_vendor_product_cost_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_order_line_cost_snapsh_organization_id_sales_order__fkey1"
            columns: ["organization_id", "sales_order_line_id"]
            isOneToOne: true
            referencedRelation: "sales_order_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "sales_order_line_cost_snapsho_organization_id_sales_order__fkey"
            columns: ["organization_id", "sales_order_id"]
            isOneToOne: false
            referencedRelation: "sales_order_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "sales_order_line_cost_snapsho_organization_id_sales_order__fkey"
            columns: ["organization_id", "sales_order_id"]
            isOneToOne: false
            referencedRelation: "sales_orders"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "sales_order_line_cost_snapsho_organization_id_source_goods_fkey"
            columns: ["organization_id", "source_goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "sales_order_line_cost_snapsho_organization_id_source_goods_fkey"
            columns: ["organization_id", "source_goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "sales_order_line_cost_snapsho_organization_id_source_goods_fkey"
            columns: ["organization_id", "source_goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_invoice_intake_candidates"
            referencedColumns: ["organization_id", "goods_receipt_id"]
          },
          {
            foreignKeyName: "sales_order_line_cost_snapsho_organization_id_source_vendo_fkey"
            columns: ["organization_id", "source_vendor_product_cost_id"]
            isOneToOne: false
            referencedRelation: "vendor_product_costs"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "sales_order_line_cost_snapshots_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_order_line_cost_snapshots_organization_id_product_id_fkey"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      sales_order_lines: {
        Row: {
          base_quantity: number | null
          catch_weight_policy: Json | null
          conversion_to_base: number
          created_at: string
          created_by: string | null
          discount_amount: number
          discount_override_reason: string | null
          id: string
          line_number: number
          notes: string | null
          organization_id: string
          price_list_item_id: string | null
          price_override_reason: string | null
          product_id: string
          product_uom_id: string
          quantity: number
          row_version: number
          sales_order_id: string
          subtotal_amount: number | null
          tax_amount: number | null
          tax_rate: number
          total_amount: number | null
          unit_price: number
          updated_at: string
          updated_by: string | null
          warehouse_id: string | null
        }
        Insert: {
          base_quantity?: number | null
          catch_weight_policy?: Json | null
          conversion_to_base: number
          created_at?: string
          created_by?: string | null
          discount_amount?: number
          discount_override_reason?: string | null
          id?: string
          line_number: number
          notes?: string | null
          organization_id: string
          price_list_item_id?: string | null
          price_override_reason?: string | null
          product_id: string
          product_uom_id: string
          quantity: number
          row_version?: number
          sales_order_id: string
          subtotal_amount?: number | null
          tax_amount?: number | null
          tax_rate?: number
          total_amount?: number | null
          unit_price: number
          updated_at?: string
          updated_by?: string | null
          warehouse_id?: string | null
        }
        Update: {
          base_quantity?: number | null
          catch_weight_policy?: Json | null
          conversion_to_base?: number
          created_at?: string
          created_by?: string | null
          discount_amount?: number
          discount_override_reason?: string | null
          id?: string
          line_number?: number
          notes?: string | null
          organization_id?: string
          price_list_item_id?: string | null
          price_override_reason?: string | null
          product_id?: string
          product_uom_id?: string
          quantity?: number
          row_version?: number
          sales_order_id?: string
          subtotal_amount?: number | null
          tax_amount?: number | null
          tax_rate?: number
          total_amount?: number | null
          unit_price?: number
          updated_at?: string
          updated_by?: string | null
          warehouse_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_order_lines_organization_id_price_list_item_id_fkey"
            columns: ["organization_id", "price_list_item_id"]
            isOneToOne: false
            referencedRelation: "price_list_items"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "sales_order_lines_organization_id_product_id_product_uom_i_fkey"
            columns: ["organization_id", "product_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "sales_order_lines_organization_id_sales_order_id_fkey"
            columns: ["organization_id", "sales_order_id"]
            isOneToOne: false
            referencedRelation: "sales_order_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "sales_order_lines_organization_id_sales_order_id_fkey"
            columns: ["organization_id", "sales_order_id"]
            isOneToOne: false
            referencedRelation: "sales_orders"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "sales_order_lines_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      sales_orders: {
        Row: {
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          confirmed_at: string | null
          confirmed_by: string | null
          created_at: string
          created_by: string
          currency_code: string
          customer_id: string
          customer_site_id: string | null
          document_number: string
          document_seq: number
          external_reference: string | null
          id: string
          notes: string | null
          order_date: string
          organization_id: string
          requested_delivery_date: string | null
          row_version: number
          source_channel: string
          status: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          confirmed_at?: string | null
          confirmed_by?: string | null
          created_at?: string
          created_by?: string
          currency_code: string
          customer_id: string
          customer_site_id?: string | null
          document_number?: string
          document_seq?: number
          external_reference?: string | null
          id?: string
          notes?: string | null
          order_date?: string
          organization_id: string
          requested_delivery_date?: string | null
          row_version?: number
          source_channel?: string
          status?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          confirmed_at?: string | null
          confirmed_by?: string | null
          created_at?: string
          created_by?: string
          currency_code?: string
          customer_id?: string
          customer_site_id?: string | null
          document_number?: string
          document_seq?: number
          external_reference?: string | null
          id?: string
          notes?: string | null
          order_date?: string
          organization_id?: string
          requested_delivery_date?: string | null
          row_version?: number
          source_channel?: string
          status?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_orders_organization_id_customer_id_customer_site_id_fkey"
            columns: ["organization_id", "customer_id", "customer_site_id"]
            isOneToOne: false
            referencedRelation: "customer_sites"
            referencedColumns: ["organization_id", "customer_id", "id"]
          },
          {
            foreignKeyName: "sales_orders_organization_id_customer_id_fkey"
            columns: ["organization_id", "customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "sales_orders_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      scan_events: {
        Row: {
          action: string
          client_occurred_at: string | null
          entity_id: string | null
          entity_type: string | null
          error_code: string | null
          id: number
          idempotency_key: string | null
          input_method: string | null
          message: string | null
          metadata: Json
          normalized_value: string | null
          occurred_at: string
          operator_application_user_id: string | null
          organization_id: string
          outcome: string
          product_barcode_id: string | null
          raw_value: string
          raw_value_redacted_at: string | null
          raw_value_retained_until: string | null
          recorded_by: string | null
          request_payload_hash: string | null
          requirement_id: string | null
          scanner_session_id: string
          scanner_task_claim_id: string | null
          server_sequence: number | null
          symbology: string | null
          task_id: string | null
          task_type: string | null
        }
        Insert: {
          action: string
          client_occurred_at?: string | null
          entity_id?: string | null
          entity_type?: string | null
          error_code?: string | null
          id?: never
          idempotency_key?: string | null
          input_method?: string | null
          message?: string | null
          metadata?: Json
          normalized_value?: string | null
          occurred_at?: string
          operator_application_user_id?: string | null
          organization_id: string
          outcome?: string
          product_barcode_id?: string | null
          raw_value: string
          raw_value_redacted_at?: string | null
          raw_value_retained_until?: string | null
          recorded_by?: string | null
          request_payload_hash?: string | null
          requirement_id?: string | null
          scanner_session_id: string
          scanner_task_claim_id?: string | null
          server_sequence?: number | null
          symbology?: string | null
          task_id?: string | null
          task_type?: string | null
        }
        Update: {
          action?: string
          client_occurred_at?: string | null
          entity_id?: string | null
          entity_type?: string | null
          error_code?: string | null
          id?: never
          idempotency_key?: string | null
          input_method?: string | null
          message?: string | null
          metadata?: Json
          normalized_value?: string | null
          occurred_at?: string
          operator_application_user_id?: string | null
          organization_id?: string
          outcome?: string
          product_barcode_id?: string | null
          raw_value?: string
          raw_value_redacted_at?: string | null
          raw_value_retained_until?: string | null
          recorded_by?: string | null
          request_payload_hash?: string | null
          requirement_id?: string | null
          scanner_session_id?: string
          scanner_task_claim_id?: string | null
          server_sequence?: number | null
          symbology?: string | null
          task_id?: string | null
          task_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "scan_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "scan_events_organization_id_product_barcode_id_fkey"
            columns: ["organization_id", "product_barcode_id"]
            isOneToOne: false
            referencedRelation: "product_barcodes"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "scan_events_organization_id_scanner_session_id_fkey"
            columns: ["organization_id", "scanner_session_id"]
            isOneToOne: false
            referencedRelation: "scanner_sessions"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "scan_events_scanner_task_claim_fkey"
            columns: ["organization_id", "scanner_task_claim_id"]
            isOneToOne: false
            referencedRelation: "scanner_task_claims"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      scanner_sessions: {
        Row: {
          client_info: Json
          created_at: string
          created_by: string | null
          device_id: string | null
          employee_id: string | null
          ended_at: string | null
          ended_by: string | null
          id: string
          operator_application_user_id: string | null
          organization_id: string
          row_version: number
          started_at: string
          status: string | null
          updated_at: string
          updated_by: string | null
          warehouse_id: string | null
          workflow_type: string
        }
        Insert: {
          client_info?: Json
          created_at?: string
          created_by?: string | null
          device_id?: string | null
          employee_id?: string | null
          ended_at?: string | null
          ended_by?: string | null
          id?: string
          operator_application_user_id?: string | null
          organization_id: string
          row_version?: number
          started_at?: string
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          warehouse_id?: string | null
          workflow_type: string
        }
        Update: {
          client_info?: Json
          created_at?: string
          created_by?: string | null
          device_id?: string | null
          employee_id?: string | null
          ended_at?: string | null
          ended_by?: string | null
          id?: string
          operator_application_user_id?: string | null
          organization_id?: string
          row_version?: number
          started_at?: string
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          warehouse_id?: string | null
          workflow_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "scanner_sessions_organization_id_device_id_fkey"
            columns: ["organization_id", "device_id"]
            isOneToOne: false
            referencedRelation: "operational_devices"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "scanner_sessions_organization_id_employee_id_fkey"
            columns: ["organization_id", "employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "scanner_sessions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "scanner_sessions_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      scanner_task_claims: {
        Row: {
          claimed_at: string
          claimed_by: string
          completed_at: string | null
          created_at: string
          domain_command_receipt_id: string | null
          expires_at: string
          id: string
          organization_id: string
          receipt_context_id: string | null
          release_reason: string | null
          released_at: string | null
          reservation_row_version_at_claim: number | null
          row_version: number
          scanner_session_id: string
          task_id: string
          task_row_version_at_claim: number
          task_type: string
          updated_at: string
          warehouse_id: string
        }
        Insert: {
          claimed_at?: string
          claimed_by: string
          completed_at?: string | null
          created_at?: string
          domain_command_receipt_id?: string | null
          expires_at: string
          id?: string
          organization_id: string
          receipt_context_id?: string | null
          release_reason?: string | null
          released_at?: string | null
          reservation_row_version_at_claim?: number | null
          row_version?: number
          scanner_session_id: string
          task_id: string
          task_row_version_at_claim: number
          task_type: string
          updated_at?: string
          warehouse_id: string
        }
        Update: {
          claimed_at?: string
          claimed_by?: string
          completed_at?: string | null
          created_at?: string
          domain_command_receipt_id?: string | null
          expires_at?: string
          id?: string
          organization_id?: string
          receipt_context_id?: string | null
          release_reason?: string | null
          released_at?: string | null
          reservation_row_version_at_claim?: number | null
          row_version?: number
          scanner_session_id?: string
          task_id?: string
          task_row_version_at_claim?: number
          task_type?: string
          updated_at?: string
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "scanner_task_claims_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "scanner_task_claims_organization_id_scanner_session_id_fkey"
            columns: ["organization_id", "scanner_session_id"]
            isOneToOne: false
            referencedRelation: "scanner_sessions"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "scanner_task_claims_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "scanner_task_claims_receipt_context_fk"
            columns: ["organization_id", "receipt_context_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "scanner_task_claims_receipt_context_fk"
            columns: ["organization_id", "receipt_context_id"]
            isOneToOne: false
            referencedRelation: "goods_receipts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "scanner_task_claims_receipt_context_fk"
            columns: ["organization_id", "receipt_context_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_invoice_intake_candidates"
            referencedColumns: ["organization_id", "goods_receipt_id"]
          },
        ]
      }
      shipment_catch_weight_measurements: {
        Row: {
          base_quantity: number
          created_at: string
          created_by: string | null
          measurement_id: string
          organization_id: string
          pick_task_event_id: number
          shipment_line_id: string
        }
        Insert: {
          base_quantity: number
          created_at?: string
          created_by?: string | null
          measurement_id: string
          organization_id: string
          pick_task_event_id: number
          shipment_line_id: string
        }
        Update: {
          base_quantity?: number
          created_at?: string
          created_by?: string | null
          measurement_id?: string
          organization_id?: string
          pick_task_event_id?: number
          shipment_line_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "shipment_catch_weight_measure_organization_id_measurement__fkey"
            columns: ["organization_id", "measurement_id"]
            isOneToOne: false
            referencedRelation: "catch_weight_measurements"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "shipment_catch_weight_measure_organization_id_pick_task_ev_fkey"
            columns: ["organization_id", "pick_task_event_id"]
            isOneToOne: false
            referencedRelation: "pick_task_events"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "shipment_catch_weight_measure_organization_id_shipment_lin_fkey"
            columns: ["organization_id", "shipment_line_id"]
            isOneToOne: false
            referencedRelation: "shipment_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "shipment_catch_weight_measurements_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      shipment_line_pick_sources: {
        Row: {
          base_quantity: number
          created_at: string
          created_by: string
          id: string
          organization_id: string
          pick_task_event_id: number
          row_version: number
          shipment_line_id: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          base_quantity: number
          created_at?: string
          created_by?: string
          id?: string
          organization_id: string
          pick_task_event_id: number
          row_version?: number
          shipment_line_id: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          base_quantity?: number
          created_at?: string
          created_by?: string
          id?: string
          organization_id?: string
          pick_task_event_id?: number
          row_version?: number
          shipment_line_id?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "shipment_line_pick_sources_event_fkey"
            columns: ["organization_id", "pick_task_event_id"]
            isOneToOne: false
            referencedRelation: "pick_task_events"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "shipment_line_pick_sources_line_fkey"
            columns: ["organization_id", "shipment_line_id"]
            isOneToOne: false
            referencedRelation: "shipment_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "shipment_line_pick_sources_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      shipment_lines: {
        Row: {
          base_quantity: number | null
          bin_id: string | null
          conversion_to_base: number
          created_at: string
          created_by: string | null
          disposition: string
          id: string
          line_number: number
          lot_id: string | null
          notes: string | null
          order_quantity_exact: number | null
          organization_id: string
          product_id: string
          product_uom_id: string
          quantity: number
          reservation_id: string | null
          row_version: number
          sales_order_line_id: string
          shipment_id: string
          updated_at: string
          updated_by: string | null
          warehouse_id: string
        }
        Insert: {
          base_quantity?: number | null
          bin_id?: string | null
          conversion_to_base: number
          created_at?: string
          created_by?: string | null
          disposition?: string
          id?: string
          line_number: number
          lot_id?: string | null
          notes?: string | null
          order_quantity_exact?: number | null
          organization_id: string
          product_id: string
          product_uom_id: string
          quantity: number
          reservation_id?: string | null
          row_version?: number
          sales_order_line_id: string
          shipment_id: string
          updated_at?: string
          updated_by?: string | null
          warehouse_id: string
        }
        Update: {
          base_quantity?: number | null
          bin_id?: string | null
          conversion_to_base?: number
          created_at?: string
          created_by?: string | null
          disposition?: string
          id?: string
          line_number?: number
          lot_id?: string | null
          notes?: string | null
          order_quantity_exact?: number | null
          organization_id?: string
          product_id?: string
          product_uom_id?: string
          quantity?: number
          reservation_id?: string | null
          row_version?: number
          sales_order_line_id?: string
          shipment_id?: string
          updated_at?: string
          updated_by?: string | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "shipment_lines_organization_id_product_id_lot_id_fkey"
            columns: ["organization_id", "product_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "shipment_lines_organization_id_product_id_product_uom_id_fkey"
            columns: ["organization_id", "product_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "shipment_lines_organization_id_reservation_id_fkey"
            columns: ["organization_id", "reservation_id"]
            isOneToOne: false
            referencedRelation: "inventory_reservations"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "shipment_lines_organization_id_sales_order_line_id_fkey"
            columns: ["organization_id", "sales_order_line_id"]
            isOneToOne: false
            referencedRelation: "sales_order_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "shipment_lines_organization_id_shipment_id_fkey"
            columns: ["organization_id", "shipment_id"]
            isOneToOne: false
            referencedRelation: "shipments"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "shipment_lines_organization_id_warehouse_id_bin_id_fkey"
            columns: ["organization_id", "warehouse_id", "bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "shipment_lines_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      shipments: {
        Row: {
          carrier: string | null
          created_at: string
          created_by: string
          document_number: string | null
          document_seq: number
          id: string
          notes: string | null
          organization_id: string
          posted_at: string | null
          posted_by: string | null
          reversal_reason: string | null
          reversed_at: string | null
          reversed_by: string | null
          row_version: number
          sales_order_id: string
          shipped_on: string
          status: string | null
          tracking_number: string | null
          updated_at: string
          updated_by: string | null
          warehouse_id: string
        }
        Insert: {
          carrier?: string | null
          created_at?: string
          created_by?: string
          document_number?: string | null
          document_seq?: never
          id?: string
          notes?: string | null
          organization_id: string
          posted_at?: string | null
          posted_by?: string | null
          reversal_reason?: string | null
          reversed_at?: string | null
          reversed_by?: string | null
          row_version?: number
          sales_order_id: string
          shipped_on?: string
          status?: string | null
          tracking_number?: string | null
          updated_at?: string
          updated_by?: string | null
          warehouse_id: string
        }
        Update: {
          carrier?: string | null
          created_at?: string
          created_by?: string
          document_number?: string | null
          document_seq?: never
          id?: string
          notes?: string | null
          organization_id?: string
          posted_at?: string | null
          posted_by?: string | null
          reversal_reason?: string | null
          reversed_at?: string | null
          reversed_by?: string | null
          row_version?: number
          sales_order_id?: string
          shipped_on?: string
          status?: string | null
          tracking_number?: string | null
          updated_at?: string
          updated_by?: string | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "shipments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipments_organization_id_sales_order_id_fkey"
            columns: ["organization_id", "sales_order_id"]
            isOneToOne: false
            referencedRelation: "sales_order_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "shipments_organization_id_sales_order_id_fkey"
            columns: ["organization_id", "sales_order_id"]
            isOneToOne: false
            referencedRelation: "sales_orders"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "shipments_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      storefront_account_sites: {
        Row: {
          created_at: string
          created_by: string | null
          customer_site_id: string
          id: string
          organization_id: string
          row_version: number
          storefront_account_id: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          customer_site_id: string
          id?: string
          organization_id: string
          row_version?: number
          storefront_account_id: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          customer_site_id?: string
          id?: string
          organization_id?: string
          row_version?: number
          storefront_account_id?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "storefront_account_sites_organization_id_customer_site_id_fkey"
            columns: ["organization_id", "customer_site_id"]
            isOneToOne: false
            referencedRelation: "customer_sites"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "storefront_account_sites_organization_id_storefront_accoun_fkey"
            columns: ["organization_id", "storefront_account_id"]
            isOneToOne: false
            referencedRelation: "storefront_accounts"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      storefront_accounts: {
        Row: {
          created_at: string
          created_by: string | null
          customer_id: string
          id: string
          is_enabled: boolean
          nudge_confidence: number | null
          nudge_message: string | null
          nudge_sent_at: string | null
          organization_id: string
          price_list_id: string | null
          row_version: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          customer_id: string
          id?: string
          is_enabled?: boolean
          nudge_confidence?: number | null
          nudge_message?: string | null
          nudge_sent_at?: string | null
          organization_id: string
          price_list_id?: string | null
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          customer_id?: string
          id?: string
          is_enabled?: boolean
          nudge_confidence?: number | null
          nudge_message?: string | null
          nudge_sent_at?: string | null
          organization_id?: string
          price_list_id?: string | null
          row_version?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "storefront_accounts_organization_id_customer_id_fkey"
            columns: ["organization_id", "customer_id"]
            isOneToOne: true
            referencedRelation: "customers"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "storefront_accounts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "storefront_accounts_organization_id_price_list_id_fkey"
            columns: ["organization_id", "price_list_id"]
            isOneToOne: false
            referencedRelation: "price_lists"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      units_of_measure: {
        Row: {
          code: string
          decimal_places: number
          display_name: string
          id: string
          is_active: boolean
          measurement_kind: string
        }
        Insert: {
          code: string
          decimal_places?: number
          display_name: string
          id?: string
          is_active?: boolean
          measurement_kind: string
        }
        Update: {
          code?: string
          decimal_places?: number
          display_name?: string
          id?: string
          is_active?: boolean
          measurement_kind?: string
        }
        Relationships: []
      }
      vehicles: {
        Row: {
          capacity_pallets: number | null
          capacity_volume: number | null
          capacity_weight: number | null
          code: string
          created_at: string
          created_by: string | null
          display_name: string
          home_warehouse_id: string | null
          id: string
          license_plate: string | null
          operational_status: string
          organization_id: string
          row_version: number
          temperature_capability: string
          updated_at: string
          updated_by: string | null
          vehicle_type: string
          vin: string | null
        }
        Insert: {
          capacity_pallets?: number | null
          capacity_volume?: number | null
          capacity_weight?: number | null
          code: string
          created_at?: string
          created_by?: string | null
          display_name: string
          home_warehouse_id?: string | null
          id?: string
          license_plate?: string | null
          operational_status?: string
          organization_id: string
          row_version?: number
          temperature_capability?: string
          updated_at?: string
          updated_by?: string | null
          vehicle_type?: string
          vin?: string | null
        }
        Update: {
          capacity_pallets?: number | null
          capacity_volume?: number | null
          capacity_weight?: number | null
          code?: string
          created_at?: string
          created_by?: string | null
          display_name?: string
          home_warehouse_id?: string | null
          id?: string
          license_plate?: string | null
          operational_status?: string
          organization_id?: string
          row_version?: number
          temperature_capability?: string
          updated_at?: string
          updated_by?: string | null
          vehicle_type?: string
          vin?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vehicles_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vehicles_organization_id_home_warehouse_id_fkey"
            columns: ["organization_id", "home_warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      vendor_bill_lines: {
        Row: {
          base_quantity: number | null
          conversion_to_base: number | null
          created_at: string
          created_by: string | null
          description: string
          discount_amount: number
          freight_amount: number
          goods_receipt_id: string | null
          goods_receipt_line_id: string | null
          gross_total_amount: number | null
          id: string
          line_number: number
          organization_id: string
          other_amount: number
          product_id: string | null
          product_uom_id: string | null
          product_uom_row_version: number | null
          purchase_order_id: string | null
          purchase_order_line_id: string | null
          purchase_order_version_id: string | null
          purchase_order_version_line_id: string | null
          quantity: number
          row_version: number
          subtotal_amount: number | null
          tax_amount: number | null
          tax_rate: number
          total_amount: number | null
          unit_cost: number
          updated_at: string
          updated_by: string | null
          vendor_bill_id: string
          vendor_tax_amount: number | null
        }
        Insert: {
          base_quantity?: number | null
          conversion_to_base?: number | null
          created_at?: string
          created_by?: string | null
          description: string
          discount_amount?: number
          freight_amount?: number
          goods_receipt_id?: string | null
          goods_receipt_line_id?: string | null
          gross_total_amount?: number | null
          id?: string
          line_number: number
          organization_id: string
          other_amount?: number
          product_id?: string | null
          product_uom_id?: string | null
          product_uom_row_version?: number | null
          purchase_order_id?: string | null
          purchase_order_line_id?: string | null
          purchase_order_version_id?: string | null
          purchase_order_version_line_id?: string | null
          quantity: number
          row_version?: number
          subtotal_amount?: number | null
          tax_amount?: number | null
          tax_rate?: number
          total_amount?: number | null
          unit_cost: number
          updated_at?: string
          updated_by?: string | null
          vendor_bill_id: string
          vendor_tax_amount?: number | null
        }
        Update: {
          base_quantity?: number | null
          conversion_to_base?: number | null
          created_at?: string
          created_by?: string | null
          description?: string
          discount_amount?: number
          freight_amount?: number
          goods_receipt_id?: string | null
          goods_receipt_line_id?: string | null
          gross_total_amount?: number | null
          id?: string
          line_number?: number
          organization_id?: string
          other_amount?: number
          product_id?: string | null
          product_uom_id?: string | null
          product_uom_row_version?: number | null
          purchase_order_id?: string | null
          purchase_order_line_id?: string | null
          purchase_order_version_id?: string | null
          purchase_order_version_line_id?: string | null
          quantity?: number
          row_version?: number
          subtotal_amount?: number | null
          tax_amount?: number | null
          tax_rate?: number
          total_amount?: number | null
          unit_cost?: number
          updated_at?: string
          updated_by?: string | null
          vendor_bill_id?: string
          vendor_tax_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_bill_lines_exact_receipt_line_fk"
            columns: [
              "organization_id",
              "goods_receipt_id",
              "goods_receipt_line_id",
            ]
            isOneToOne: false
            referencedRelation: "goods_receipt_lines"
            referencedColumns: ["organization_id", "goods_receipt_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_lines_exact_receipt_line_fk"
            columns: [
              "organization_id",
              "goods_receipt_id",
              "goods_receipt_line_id",
            ]
            isOneToOne: false
            referencedRelation: "landed_cost_line_overview"
            referencedColumns: [
              "organization_id",
              "goods_receipt_id",
              "goods_receipt_line_id",
            ]
          },
          {
            foreignKeyName: "vendor_bill_lines_exact_version_line_fk"
            columns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "purchase_order_line_id",
              "purchase_order_version_line_id",
            ]
            isOneToOne: false
            referencedRelation: "purchase_order_version_lines"
            referencedColumns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "purchase_order_line_id",
              "id",
            ]
          },
          {
            foreignKeyName: "vendor_bill_lines_organization_id_goods_receipt_line_id_fkey"
            columns: ["organization_id", "goods_receipt_line_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_lines_organization_id_goods_receipt_line_id_fkey"
            columns: ["organization_id", "goods_receipt_line_id"]
            isOneToOne: false
            referencedRelation: "landed_cost_line_overview"
            referencedColumns: ["organization_id", "goods_receipt_line_id"]
          },
          {
            foreignKeyName: "vendor_bill_lines_organization_id_product_id_product_uom_i_fkey"
            columns: ["organization_id", "product_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_lines_organization_id_purchase_order_line_id_fkey"
            columns: ["organization_id", "purchase_order_line_id"]
            isOneToOne: false
            referencedRelation: "purchase_order_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_lines_organization_id_vendor_bill_id_fkey"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_bill_activity"
            referencedColumns: ["organization_id", "vendor_bill_id"]
          },
          {
            foreignKeyName: "vendor_bill_lines_organization_id_vendor_bill_id_fkey"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "vendor_bill_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_lines_organization_id_vendor_bill_id_fkey"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "vendor_bills"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_lines_parent_version_fk"
            columns: [
              "organization_id",
              "vendor_bill_id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
            isOneToOne: false
            referencedRelation: "governed_vendor_bill_activity"
            referencedColumns: [
              "organization_id",
              "vendor_bill_id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
          },
          {
            foreignKeyName: "vendor_bill_lines_parent_version_fk"
            columns: [
              "organization_id",
              "vendor_bill_id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
            isOneToOne: false
            referencedRelation: "vendor_bills"
            referencedColumns: [
              "organization_id",
              "id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
          },
          {
            foreignKeyName: "vendor_bill_lines_receipt_fk"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_lines_receipt_fk"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_lines_receipt_fk"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_invoice_intake_candidates"
            referencedColumns: ["organization_id", "goods_receipt_id"]
          },
        ]
      }
      vendor_bill_match_lines: {
        Row: {
          accepted_base_quantity: number
          accrual_cleared_base_quantity: number
          approved_discount_per_unit: number
          approved_net_cost_per_base: number
          approved_unit_cost: number
          created_at: string
          excess_base_quantity: number
          expected_freight_amount: number
          expected_other_amount: number
          expected_tax_amount: number
          freight_held_amount: number
          freight_variance_amount: number
          goods_receipt_id: string
          goods_receipt_line_id: string
          id: string
          invoice_base_quantity: number
          invoice_conversion_to_base: number
          invoice_freight_amount: number
          invoice_net_cost_per_base: number
          invoice_other_amount: number
          invoice_quantity: number
          invoice_tax_amount: number
          line_number: number
          matchable_base_quantity: number
          organization_id: string
          other_held_amount: number
          other_variance_amount: number
          price_held_amount: number
          price_variance_amount: number
          prior_invoiced_base_quantity: number
          product_id: string
          product_uom_id: string
          purchase_order_id: string
          purchase_order_line_id: string
          purchase_order_version_id: string
          purchase_order_version_line_id: string
          quantity_held_amount: number
          quantity_variance_amount: number
          receipt_accrued_amount: number
          receipt_base_quantity: number
          receipt_landed_cost_per_base: number
          receipt_quantity: number
          source_snapshot: Json
          source_snapshot_hash: string
          tax_held_amount: number
          tax_variance_amount: number
          total_held_amount: number
          vendor_bill_id: string
          vendor_bill_line_id: string
          vendor_bill_match_id: string
        }
        Insert: {
          accepted_base_quantity: number
          accrual_cleared_base_quantity: number
          approved_discount_per_unit: number
          approved_net_cost_per_base: number
          approved_unit_cost: number
          created_at?: string
          excess_base_quantity: number
          expected_freight_amount: number
          expected_other_amount: number
          expected_tax_amount: number
          freight_held_amount: number
          freight_variance_amount: number
          goods_receipt_id: string
          goods_receipt_line_id: string
          id?: string
          invoice_base_quantity: number
          invoice_conversion_to_base: number
          invoice_freight_amount: number
          invoice_net_cost_per_base: number
          invoice_other_amount: number
          invoice_quantity: number
          invoice_tax_amount: number
          line_number: number
          matchable_base_quantity: number
          organization_id: string
          other_held_amount: number
          other_variance_amount: number
          price_held_amount: number
          price_variance_amount: number
          prior_invoiced_base_quantity: number
          product_id: string
          product_uom_id: string
          purchase_order_id: string
          purchase_order_line_id: string
          purchase_order_version_id: string
          purchase_order_version_line_id: string
          quantity_held_amount: number
          quantity_variance_amount: number
          receipt_accrued_amount: number
          receipt_base_quantity: number
          receipt_landed_cost_per_base: number
          receipt_quantity: number
          source_snapshot: Json
          source_snapshot_hash: string
          tax_held_amount: number
          tax_variance_amount: number
          total_held_amount: number
          vendor_bill_id: string
          vendor_bill_line_id: string
          vendor_bill_match_id: string
        }
        Update: {
          accepted_base_quantity?: number
          accrual_cleared_base_quantity?: number
          approved_discount_per_unit?: number
          approved_net_cost_per_base?: number
          approved_unit_cost?: number
          created_at?: string
          excess_base_quantity?: number
          expected_freight_amount?: number
          expected_other_amount?: number
          expected_tax_amount?: number
          freight_held_amount?: number
          freight_variance_amount?: number
          goods_receipt_id?: string
          goods_receipt_line_id?: string
          id?: string
          invoice_base_quantity?: number
          invoice_conversion_to_base?: number
          invoice_freight_amount?: number
          invoice_net_cost_per_base?: number
          invoice_other_amount?: number
          invoice_quantity?: number
          invoice_tax_amount?: number
          line_number?: number
          matchable_base_quantity?: number
          organization_id?: string
          other_held_amount?: number
          other_variance_amount?: number
          price_held_amount?: number
          price_variance_amount?: number
          prior_invoiced_base_quantity?: number
          product_id?: string
          product_uom_id?: string
          purchase_order_id?: string
          purchase_order_line_id?: string
          purchase_order_version_id?: string
          purchase_order_version_line_id?: string
          quantity_held_amount?: number
          quantity_variance_amount?: number
          receipt_accrued_amount?: number
          receipt_base_quantity?: number
          receipt_landed_cost_per_base?: number
          receipt_quantity?: number
          source_snapshot?: Json
          source_snapshot_hash?: string
          tax_held_amount?: number
          tax_variance_amount?: number
          total_held_amount?: number
          vendor_bill_id?: string
          vendor_bill_line_id?: string
          vendor_bill_match_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_bill_match_lines_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_match_lines_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_match_lines_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_invoice_intake_candidates"
            referencedColumns: ["organization_id", "goods_receipt_id"]
          },
          {
            foreignKeyName: "vendor_bill_match_lines_organization_id_goods_receipt_id_g_fkey"
            columns: [
              "organization_id",
              "goods_receipt_id",
              "goods_receipt_line_id",
            ]
            isOneToOne: false
            referencedRelation: "goods_receipt_lines"
            referencedColumns: ["organization_id", "goods_receipt_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_match_lines_organization_id_goods_receipt_id_g_fkey"
            columns: [
              "organization_id",
              "goods_receipt_id",
              "goods_receipt_line_id",
            ]
            isOneToOne: false
            referencedRelation: "landed_cost_line_overview"
            referencedColumns: [
              "organization_id",
              "goods_receipt_id",
              "goods_receipt_line_id",
            ]
          },
          {
            foreignKeyName: "vendor_bill_match_lines_organization_id_product_id_product_fkey"
            columns: ["organization_id", "product_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_match_lines_organization_id_purchase_order_id__fkey"
            columns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "purchase_order_line_id",
              "purchase_order_version_line_id",
            ]
            isOneToOne: false
            referencedRelation: "purchase_order_version_lines"
            referencedColumns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "purchase_order_line_id",
              "id",
            ]
          },
          {
            foreignKeyName: "vendor_bill_match_lines_organization_id_vendor_bill_id_fkey"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_bill_activity"
            referencedColumns: ["organization_id", "vendor_bill_id"]
          },
          {
            foreignKeyName: "vendor_bill_match_lines_organization_id_vendor_bill_id_fkey"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "vendor_bill_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_match_lines_organization_id_vendor_bill_id_fkey"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "vendor_bills"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_match_lines_organization_id_vendor_bill_id_ven_fkey"
            columns: [
              "organization_id",
              "vendor_bill_id",
              "vendor_bill_line_id",
            ]
            isOneToOne: false
            referencedRelation: "vendor_bill_lines"
            referencedColumns: ["organization_id", "vendor_bill_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_match_lines_organization_id_vendor_bill_match__fkey"
            columns: [
              "organization_id",
              "vendor_bill_match_id",
              "vendor_bill_id",
            ]
            isOneToOne: false
            referencedRelation: "vendor_bill_matches"
            referencedColumns: ["organization_id", "id", "vendor_bill_id"]
          },
        ]
      }
      vendor_bill_matches: {
        Row: {
          currency_code: string
          evaluated_at: string
          evaluated_by: string
          favorable_variance_amount: number
          gross_amount: number
          held_amount: number
          id: string
          match_sequence: number
          match_state: string
          organization_id: string
          policy_version: number
          purchase_order_id: string
          purchase_order_version_id: string
          signed_variance_amount: number
          source_fingerprint: string
          unheld_amount: number
          vendor_bill_id: string
        }
        Insert: {
          currency_code: string
          evaluated_at?: string
          evaluated_by?: string
          favorable_variance_amount: number
          gross_amount: number
          held_amount: number
          id?: string
          match_sequence: number
          match_state: string
          organization_id: string
          policy_version?: number
          purchase_order_id: string
          purchase_order_version_id: string
          signed_variance_amount: number
          source_fingerprint: string
          unheld_amount: number
          vendor_bill_id: string
        }
        Update: {
          currency_code?: string
          evaluated_at?: string
          evaluated_by?: string
          favorable_variance_amount?: number
          gross_amount?: number
          held_amount?: number
          id?: string
          match_sequence?: number
          match_state?: string
          organization_id?: string
          policy_version?: number
          purchase_order_id?: string
          purchase_order_version_id?: string
          signed_variance_amount?: number
          source_fingerprint?: string
          unheld_amount?: number
          vendor_bill_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_bill_matches_exact_bill_version_fk"
            columns: [
              "organization_id",
              "vendor_bill_id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
            isOneToOne: false
            referencedRelation: "governed_vendor_bill_activity"
            referencedColumns: [
              "organization_id",
              "vendor_bill_id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
          },
          {
            foreignKeyName: "vendor_bill_matches_exact_bill_version_fk"
            columns: [
              "organization_id",
              "vendor_bill_id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
            isOneToOne: false
            referencedRelation: "vendor_bills"
            referencedColumns: [
              "organization_id",
              "id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
          },
          {
            foreignKeyName: "vendor_bill_matches_organization_id_purchase_order_id_purc_fkey"
            columns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
            isOneToOne: false
            referencedRelation: "purchase_order_versions"
            referencedColumns: ["organization_id", "purchase_order_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_matches_organization_id_vendor_bill_id_fkey"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_bill_activity"
            referencedColumns: ["organization_id", "vendor_bill_id"]
          },
          {
            foreignKeyName: "vendor_bill_matches_organization_id_vendor_bill_id_fkey"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "vendor_bill_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_matches_organization_id_vendor_bill_id_fkey"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "vendor_bills"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      vendor_bill_payment_holds: {
        Row: {
          amount: number
          created_at: string
          created_by: string
          currency_code: string
          id: string
          organization_id: string
          reason: string
          receiving_discrepancy_id: string
          release_reason: string | null
          released_at: string | null
          released_by: string | null
          row_version: number
          status: string | null
          updated_at: string
          variance_dimension: string
          vendor_bill_id: string
          vendor_bill_line_id: string
          vendor_bill_match_id: string
          vendor_bill_match_line_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          created_by?: string
          currency_code: string
          id?: string
          organization_id: string
          reason: string
          receiving_discrepancy_id: string
          release_reason?: string | null
          released_at?: string | null
          released_by?: string | null
          row_version?: number
          status?: string | null
          updated_at?: string
          variance_dimension: string
          vendor_bill_id: string
          vendor_bill_line_id: string
          vendor_bill_match_id: string
          vendor_bill_match_line_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          created_by?: string
          currency_code?: string
          id?: string
          organization_id?: string
          reason?: string
          receiving_discrepancy_id?: string
          release_reason?: string | null
          released_at?: string | null
          released_by?: string | null
          row_version?: number
          status?: string | null
          updated_at?: string
          variance_dimension?: string
          vendor_bill_id?: string
          vendor_bill_line_id?: string
          vendor_bill_match_id?: string
          vendor_bill_match_line_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_bill_payment_holds_organization_id_receiving_discre_fkey"
            columns: ["organization_id", "receiving_discrepancy_id"]
            isOneToOne: true
            referencedRelation: "governed_receiving_discrepancy_activity"
            referencedColumns: ["organization_id", "receiving_discrepancy_id"]
          },
          {
            foreignKeyName: "vendor_bill_payment_holds_organization_id_receiving_discre_fkey"
            columns: ["organization_id", "receiving_discrepancy_id"]
            isOneToOne: true
            referencedRelation: "receiving_discrepancies"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_payment_holds_organization_id_vendor_bill_id__fkey1"
            columns: [
              "organization_id",
              "vendor_bill_id",
              "vendor_bill_line_id",
              "vendor_bill_match_line_id",
              "receiving_discrepancy_id",
            ]
            isOneToOne: false
            referencedRelation: "governed_receiving_discrepancy_activity"
            referencedColumns: [
              "organization_id",
              "vendor_bill_id",
              "vendor_bill_line_id",
              "vendor_bill_match_line_id",
              "receiving_discrepancy_id",
            ]
          },
          {
            foreignKeyName: "vendor_bill_payment_holds_organization_id_vendor_bill_id__fkey1"
            columns: [
              "organization_id",
              "vendor_bill_id",
              "vendor_bill_line_id",
              "vendor_bill_match_line_id",
              "receiving_discrepancy_id",
            ]
            isOneToOne: false
            referencedRelation: "receiving_discrepancies"
            referencedColumns: [
              "organization_id",
              "vendor_bill_id",
              "vendor_bill_line_id",
              "vendor_bill_match_line_id",
              "id",
            ]
          },
          {
            foreignKeyName: "vendor_bill_payment_holds_organization_id_vendor_bill_id_fkey"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_bill_activity"
            referencedColumns: ["organization_id", "vendor_bill_id"]
          },
          {
            foreignKeyName: "vendor_bill_payment_holds_organization_id_vendor_bill_id_fkey"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "vendor_bill_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_payment_holds_organization_id_vendor_bill_id_fkey"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "vendor_bills"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_payment_holds_organization_id_vendor_bill_id_v_fkey"
            columns: [
              "organization_id",
              "vendor_bill_id",
              "vendor_bill_line_id",
              "vendor_bill_match_id",
              "vendor_bill_match_line_id",
            ]
            isOneToOne: false
            referencedRelation: "vendor_bill_match_lines"
            referencedColumns: [
              "organization_id",
              "vendor_bill_id",
              "vendor_bill_line_id",
              "vendor_bill_match_id",
              "id",
            ]
          },
          {
            foreignKeyName: "vendor_bill_payment_holds_organization_id_vendor_bill_mat_fkey1"
            columns: ["organization_id", "vendor_bill_match_line_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_bill_match_line_activity"
            referencedColumns: ["organization_id", "vendor_bill_match_line_id"]
          },
          {
            foreignKeyName: "vendor_bill_payment_holds_organization_id_vendor_bill_mat_fkey1"
            columns: ["organization_id", "vendor_bill_match_line_id"]
            isOneToOne: false
            referencedRelation: "vendor_bill_match_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_payment_holds_organization_id_vendor_bill_matc_fkey"
            columns: ["organization_id", "vendor_bill_match_id"]
            isOneToOne: false
            referencedRelation: "vendor_bill_matches"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      vendor_bills: {
        Row: {
          attachment_id: string | null
          bill_date: string
          created_at: string
          created_by: string
          currency_code: string
          document_number: string | null
          document_seq: number
          due_date: string
          evidence_reference: string | null
          goods_receipt_id: string | null
          id: string
          normalized_vendor_invoice_number: string | null
          notes: string | null
          organization_id: string
          posted_at: string | null
          posted_by: string | null
          purchase_order_id: string | null
          purchase_order_version_id: string | null
          row_version: number
          source_kind: string
          status: string | null
          updated_at: string
          updated_by: string | null
          vendor_id: string
          vendor_invoice_number: string
          void_reason: string | null
          voided_at: string | null
          voided_by: string | null
        }
        Insert: {
          attachment_id?: string | null
          bill_date?: string
          created_at?: string
          created_by?: string
          currency_code: string
          document_number?: string | null
          document_seq?: never
          due_date: string
          evidence_reference?: string | null
          goods_receipt_id?: string | null
          id?: string
          normalized_vendor_invoice_number?: string | null
          notes?: string | null
          organization_id: string
          posted_at?: string | null
          posted_by?: string | null
          purchase_order_id?: string | null
          purchase_order_version_id?: string | null
          row_version?: number
          source_kind?: string
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          vendor_id: string
          vendor_invoice_number: string
          void_reason?: string | null
          voided_at?: string | null
          voided_by?: string | null
        }
        Update: {
          attachment_id?: string | null
          bill_date?: string
          created_at?: string
          created_by?: string
          currency_code?: string
          document_number?: string | null
          document_seq?: never
          due_date?: string
          evidence_reference?: string | null
          goods_receipt_id?: string | null
          id?: string
          normalized_vendor_invoice_number?: string | null
          notes?: string | null
          organization_id?: string
          posted_at?: string | null
          posted_by?: string | null
          purchase_order_id?: string | null
          purchase_order_version_id?: string | null
          row_version?: number
          source_kind?: string
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          vendor_id?: string
          vendor_invoice_number?: string
          void_reason?: string | null
          voided_at?: string | null
          voided_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_bills_attachment_fk"
            columns: ["organization_id", "attachment_id"]
            isOneToOne: false
            referencedRelation: "file_attachments"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bills_exact_version_fk"
            columns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
            isOneToOne: false
            referencedRelation: "purchase_order_versions"
            referencedColumns: ["organization_id", "purchase_order_id", "id"]
          },
          {
            foreignKeyName: "vendor_bills_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vendor_bills_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bills_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bills_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_invoice_intake_candidates"
            referencedColumns: ["organization_id", "goods_receipt_id"]
          },
          {
            foreignKeyName: "vendor_bills_organization_id_purchase_order_id_fkey"
            columns: ["organization_id", "purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bills_organization_id_vendor_id_fkey"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      vendor_certification_requirements: {
        Row: {
          organization_id: string
          requirement: string
          vendor_id: string
        }
        Insert: {
          organization_id: string
          requirement: string
          vendor_id: string
        }
        Update: {
          organization_id?: string
          requirement?: string
          vendor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_certification_requirement_organization_id_vendor_id_fkey"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      vendor_certifications: {
        Row: {
          certification_type: string
          created_at: string
          created_by: string | null
          file_attachment_id: string | null
          id: string
          issuer: string | null
          notes: string | null
          organization_id: string
          reference_number: string | null
          row_version: number
          updated_at: string
          updated_by: string | null
          valid_from: string | null
          valid_to: string | null
          vendor_id: string
          verification_status: string
        }
        Insert: {
          certification_type: string
          created_at?: string
          created_by?: string | null
          file_attachment_id?: string | null
          id?: string
          issuer?: string | null
          notes?: string | null
          organization_id: string
          reference_number?: string | null
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          valid_from?: string | null
          valid_to?: string | null
          vendor_id: string
          verification_status?: string
        }
        Update: {
          certification_type?: string
          created_at?: string
          created_by?: string | null
          file_attachment_id?: string | null
          id?: string
          issuer?: string | null
          notes?: string | null
          organization_id?: string
          reference_number?: string | null
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          valid_from?: string | null
          valid_to?: string | null
          vendor_id?: string
          verification_status?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_certifications_attachment_fk"
            columns: ["organization_id", "file_attachment_id"]
            isOneToOne: false
            referencedRelation: "file_attachments"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_certifications_vendor_fk"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      vendor_claim_lines: {
        Row: {
          accepted_amount: number | null
          claimed_amount: number
          created_at: string
          created_by: string | null
          description: string
          id: string
          line_number: number
          organization_id: string
          receiving_discrepancy_id: string | null
          row_version: number
          updated_at: string
          updated_by: string | null
          vendor_claim_id: string
        }
        Insert: {
          accepted_amount?: number | null
          claimed_amount: number
          created_at?: string
          created_by?: string | null
          description: string
          id?: string
          line_number: number
          organization_id: string
          receiving_discrepancy_id?: string | null
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          vendor_claim_id: string
        }
        Update: {
          accepted_amount?: number | null
          claimed_amount?: number
          created_at?: string
          created_by?: string | null
          description?: string
          id?: string
          line_number?: number
          organization_id?: string
          receiving_discrepancy_id?: string | null
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          vendor_claim_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_claim_lines_claim_fk"
            columns: ["organization_id", "vendor_claim_id"]
            isOneToOne: false
            referencedRelation: "vendor_claims"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_claim_lines_discrepancy_fk"
            columns: ["organization_id", "receiving_discrepancy_id"]
            isOneToOne: false
            referencedRelation: "governed_receiving_discrepancy_activity"
            referencedColumns: ["organization_id", "receiving_discrepancy_id"]
          },
          {
            foreignKeyName: "vendor_claim_lines_discrepancy_fk"
            columns: ["organization_id", "receiving_discrepancy_id"]
            isOneToOne: false
            referencedRelation: "receiving_discrepancies"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_claim_lines_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_claims: {
        Row: {
          accepted_at: string | null
          accepted_by: string | null
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          claim_date: string
          created_at: string
          created_by: string | null
          currency_code: string
          document_number: string | null
          document_seq: number
          goods_receipt_id: string | null
          id: string
          notes: string | null
          organization_id: string
          purchase_order_id: string | null
          rejected_at: string | null
          rejected_by: string | null
          rejection_reason: string | null
          row_version: number
          settled_amount: number | null
          settled_at: string | null
          settled_by: string | null
          settlement_reference: string | null
          status: string | null
          submitted_at: string | null
          submitted_by: string | null
          updated_at: string
          updated_by: string | null
          vendor_id: string
          vendor_reference: string | null
        }
        Insert: {
          accepted_at?: string | null
          accepted_by?: string | null
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          claim_date?: string
          created_at?: string
          created_by?: string | null
          currency_code: string
          document_number?: string | null
          document_seq?: number
          goods_receipt_id?: string | null
          id?: string
          notes?: string | null
          organization_id: string
          purchase_order_id?: string | null
          rejected_at?: string | null
          rejected_by?: string | null
          rejection_reason?: string | null
          row_version?: number
          settled_amount?: number | null
          settled_at?: string | null
          settled_by?: string | null
          settlement_reference?: string | null
          status?: string | null
          submitted_at?: string | null
          submitted_by?: string | null
          updated_at?: string
          updated_by?: string | null
          vendor_id: string
          vendor_reference?: string | null
        }
        Update: {
          accepted_at?: string | null
          accepted_by?: string | null
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          claim_date?: string
          created_at?: string
          created_by?: string | null
          currency_code?: string
          document_number?: string | null
          document_seq?: number
          goods_receipt_id?: string | null
          id?: string
          notes?: string | null
          organization_id?: string
          purchase_order_id?: string | null
          rejected_at?: string | null
          rejected_by?: string | null
          rejection_reason?: string | null
          row_version?: number
          settled_amount?: number | null
          settled_at?: string | null
          settled_by?: string | null
          settlement_reference?: string | null
          status?: string | null
          submitted_at?: string | null
          submitted_by?: string | null
          updated_at?: string
          updated_by?: string | null
          vendor_id?: string
          vendor_reference?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_claims_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vendor_claims_po_fk"
            columns: ["organization_id", "purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_claims_receipt_fk"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_claims_receipt_fk"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_claims_receipt_fk"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_invoice_intake_candidates"
            referencedColumns: ["organization_id", "goods_receipt_id"]
          },
          {
            foreignKeyName: "vendor_claims_vendor_fk"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      vendor_contacts: {
        Row: {
          contact_role: string
          created_at: string
          created_by: string | null
          display_name: string
          email: string | null
          id: string
          is_active: boolean
          is_primary: boolean
          organization_id: string
          phone: string | null
          preferred_channel: string
          row_version: number
          updated_at: string
          updated_by: string | null
          vendor_id: string
          vendor_site_id: string | null
        }
        Insert: {
          contact_role: string
          created_at?: string
          created_by?: string | null
          display_name: string
          email?: string | null
          id?: string
          is_active?: boolean
          is_primary?: boolean
          organization_id: string
          phone?: string | null
          preferred_channel?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          vendor_id: string
          vendor_site_id?: string | null
        }
        Update: {
          contact_role?: string
          created_at?: string
          created_by?: string | null
          display_name?: string
          email?: string | null
          id?: string
          is_active?: boolean
          is_primary?: boolean
          organization_id?: string
          phone?: string | null
          preferred_channel?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          vendor_id?: string
          vendor_site_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_contacts_site_fk"
            columns: ["organization_id", "vendor_id", "vendor_site_id"]
            isOneToOne: false
            referencedRelation: "vendor_sites"
            referencedColumns: ["organization_id", "vendor_id", "id"]
          },
          {
            foreignKeyName: "vendor_contacts_vendor_fk"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      vendor_credit_memos: {
        Row: {
          amount: number
          applied_at: string
          applied_by: string
          applied_match_id: string
          command_key: string
          currency_code: string
          discrepancy_cycle_id: string
          id: string
          organization_id: string
          payment_hold_id: string
          vendor_bill_id: string
          vendor_claim_id: string
          vendor_reference: string
        }
        Insert: {
          amount: number
          applied_at?: string
          applied_by: string
          applied_match_id: string
          command_key: string
          currency_code: string
          discrepancy_cycle_id: string
          id?: string
          organization_id: string
          payment_hold_id: string
          vendor_bill_id: string
          vendor_claim_id: string
          vendor_reference: string
        }
        Update: {
          amount?: number
          applied_at?: string
          applied_by?: string
          applied_match_id?: string
          command_key?: string
          currency_code?: string
          discrepancy_cycle_id?: string
          id?: string
          organization_id?: string
          payment_hold_id?: string
          vendor_bill_id?: string
          vendor_claim_id?: string
          vendor_reference?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_credit_memos_organization_id_applied_match_id_fkey"
            columns: ["organization_id", "applied_match_id"]
            isOneToOne: false
            referencedRelation: "vendor_bill_matches"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_credit_memos_organization_id_discrepancy_cycle_id_fkey"
            columns: ["organization_id", "discrepancy_cycle_id"]
            isOneToOne: true
            referencedRelation: "discrepancy_workflow_cycles"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_credit_memos_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vendor_credit_memos_organization_id_payment_hold_id_fkey"
            columns: ["organization_id", "payment_hold_id"]
            isOneToOne: true
            referencedRelation: "vendor_bill_payment_holds"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_credit_memos_organization_id_vendor_bill_id_fkey"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_bill_activity"
            referencedColumns: ["organization_id", "vendor_bill_id"]
          },
          {
            foreignKeyName: "vendor_credit_memos_organization_id_vendor_bill_id_fkey"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "vendor_bill_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_credit_memos_organization_id_vendor_bill_id_fkey"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "vendor_bills"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_credit_memos_organization_id_vendor_claim_id_fkey"
            columns: ["organization_id", "vendor_claim_id"]
            isOneToOne: true
            referencedRelation: "vendor_claims"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      vendor_external_references: {
        Row: {
          created_at: string
          created_by: string | null
          external_id: string
          id: string
          metadata: Json
          organization_id: string
          row_version: number
          system_key: string
          updated_at: string
          updated_by: string | null
          vendor_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          external_id: string
          id?: string
          metadata?: Json
          organization_id: string
          row_version?: number
          system_key: string
          updated_at?: string
          updated_by?: string | null
          vendor_id: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          external_id?: string
          id?: string
          metadata?: Json
          organization_id?: string
          row_version?: number
          system_key?: string
          updated_at?: string
          updated_by?: string | null
          vendor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_external_references_vendor_fk"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      vendor_invoice_corrections: {
        Row: {
          adjustment_amount: number
          applied_vendor_bill_match_id: string
          command_key: string
          corrected_quantity: number
          correction_date: string
          correction_reference: string
          created_at: string
          created_by: string
          currency_code: string
          discrepancy_cycle_id: string
          document_number: string
          evidence_reference: string
          id: string
          organization_id: string
          original_quantity: number
          payment_hold_id: string
          prior_vendor_bill_match_id: string
          receiving_discrepancy_id: string
          vendor_bill_id: string
          vendor_bill_line_id: string
        }
        Insert: {
          adjustment_amount: number
          applied_vendor_bill_match_id: string
          command_key: string
          corrected_quantity: number
          correction_date: string
          correction_reference: string
          created_at?: string
          created_by?: string
          currency_code: string
          discrepancy_cycle_id: string
          document_number?: string
          evidence_reference: string
          id?: string
          organization_id: string
          original_quantity: number
          payment_hold_id: string
          prior_vendor_bill_match_id: string
          receiving_discrepancy_id: string
          vendor_bill_id: string
          vendor_bill_line_id: string
        }
        Update: {
          adjustment_amount?: number
          applied_vendor_bill_match_id?: string
          command_key?: string
          corrected_quantity?: number
          correction_date?: string
          correction_reference?: string
          created_at?: string
          created_by?: string
          currency_code?: string
          discrepancy_cycle_id?: string
          document_number?: string
          evidence_reference?: string
          id?: string
          organization_id?: string
          original_quantity?: number
          payment_hold_id?: string
          prior_vendor_bill_match_id?: string
          receiving_discrepancy_id?: string
          vendor_bill_id?: string
          vendor_bill_line_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_invoice_corrections_applied_match_fk"
            columns: ["organization_id", "applied_vendor_bill_match_id"]
            isOneToOne: false
            referencedRelation: "vendor_bill_matches"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_invoice_corrections_bill_fk"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_bill_activity"
            referencedColumns: ["organization_id", "vendor_bill_id"]
          },
          {
            foreignKeyName: "vendor_invoice_corrections_bill_fk"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "vendor_bill_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_invoice_corrections_bill_fk"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "vendor_bills"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_invoice_corrections_bill_line_fk"
            columns: ["organization_id", "vendor_bill_line_id"]
            isOneToOne: false
            referencedRelation: "vendor_bill_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_invoice_corrections_cycle_fk"
            columns: ["organization_id", "discrepancy_cycle_id"]
            isOneToOne: false
            referencedRelation: "discrepancy_workflow_cycles"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_invoice_corrections_hold_fk"
            columns: ["organization_id", "payment_hold_id"]
            isOneToOne: false
            referencedRelation: "vendor_bill_payment_holds"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_invoice_corrections_prior_match_fk"
            columns: ["organization_id", "prior_vendor_bill_match_id"]
            isOneToOne: false
            referencedRelation: "vendor_bill_matches"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_invoice_corrections_source_fk"
            columns: ["organization_id", "receiving_discrepancy_id"]
            isOneToOne: false
            referencedRelation: "governed_receiving_discrepancy_activity"
            referencedColumns: ["organization_id", "receiving_discrepancy_id"]
          },
          {
            foreignKeyName: "vendor_invoice_corrections_source_fk"
            columns: ["organization_id", "receiving_discrepancy_id"]
            isOneToOne: false
            referencedRelation: "receiving_discrepancies"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      vendor_operating_profiles: {
        Row: {
          accepts_backorders: boolean
          accepts_substitutions: boolean
          ap_email: string | null
          assigned_buyer_membership_id: string | null
          category: string | null
          created_at: string
          created_by: string | null
          currency_code: string
          cutoff_time: string | null
          default_lead_time_days: number | null
          delivery_weekdays: number[]
          expiry_required: boolean
          freight_terms: string | null
          internal_notes: string | null
          lot_required: boolean
          minimum_order_amount: number | null
          ordering_method: string | null
          organization_id: string
          over_receipt_tolerance_percent: number
          payment_term_id: string
          requires_asn: boolean
          row_version: number
          short_receipt_tolerance_percent: number
          temperature_required: boolean
          updated_at: string
          updated_by: string | null
          vendor_id: string
          vendor_type: string | null
        }
        Insert: {
          accepts_backorders?: boolean
          accepts_substitutions?: boolean
          ap_email?: string | null
          assigned_buyer_membership_id?: string | null
          category?: string | null
          created_at?: string
          created_by?: string | null
          currency_code: string
          cutoff_time?: string | null
          default_lead_time_days?: number | null
          delivery_weekdays?: number[]
          expiry_required?: boolean
          freight_terms?: string | null
          internal_notes?: string | null
          lot_required?: boolean
          minimum_order_amount?: number | null
          ordering_method?: string | null
          organization_id: string
          over_receipt_tolerance_percent?: number
          payment_term_id: string
          requires_asn?: boolean
          row_version?: number
          short_receipt_tolerance_percent?: number
          temperature_required?: boolean
          updated_at?: string
          updated_by?: string | null
          vendor_id: string
          vendor_type?: string | null
        }
        Update: {
          accepts_backorders?: boolean
          accepts_substitutions?: boolean
          ap_email?: string | null
          assigned_buyer_membership_id?: string | null
          category?: string | null
          created_at?: string
          created_by?: string | null
          currency_code?: string
          cutoff_time?: string | null
          default_lead_time_days?: number | null
          delivery_weekdays?: number[]
          expiry_required?: boolean
          freight_terms?: string | null
          internal_notes?: string | null
          lot_required?: boolean
          minimum_order_amount?: number | null
          ordering_method?: string | null
          organization_id?: string
          over_receipt_tolerance_percent?: number
          payment_term_id?: string
          requires_asn?: boolean
          row_version?: number
          short_receipt_tolerance_percent?: number
          temperature_required?: boolean
          updated_at?: string
          updated_by?: string | null
          vendor_id?: string
          vendor_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_operating_profiles_buyer_fk"
            columns: ["organization_id", "assigned_buyer_membership_id"]
            isOneToOne: false
            referencedRelation: "organization_memberships"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_operating_profiles_payment_term_fk"
            columns: ["organization_id", "payment_term_id"]
            isOneToOne: false
            referencedRelation: "payment_terms"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_operating_profiles_vendor_fk"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      vendor_payment_allocations: {
        Row: {
          amount: number
          created_at: string
          created_by: string | null
          id: string
          organization_id: string
          row_version: number
          updated_at: string
          updated_by: string | null
          vendor_bill_id: string
          vendor_payment_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          created_by?: string | null
          id?: string
          organization_id: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          vendor_bill_id: string
          vendor_payment_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          created_by?: string | null
          id?: string
          organization_id?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          vendor_bill_id?: string
          vendor_payment_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_payment_allocations_organization_id_vendor_bill_id_fkey"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_bill_activity"
            referencedColumns: ["organization_id", "vendor_bill_id"]
          },
          {
            foreignKeyName: "vendor_payment_allocations_organization_id_vendor_bill_id_fkey"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "vendor_bill_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_payment_allocations_organization_id_vendor_bill_id_fkey"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "vendor_bills"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_payment_allocations_organization_id_vendor_payment__fkey"
            columns: ["organization_id", "vendor_payment_id"]
            isOneToOne: false
            referencedRelation: "vendor_payments"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      vendor_payments: {
        Row: {
          amount: number
          created_at: string
          created_by: string
          currency_code: string
          document_number: string | null
          document_seq: number
          external_reference: string | null
          id: string
          notes: string | null
          organization_id: string
          paid_on: string
          payment_method: string | null
          posted_at: string | null
          posted_by: string | null
          row_version: number
          status: string | null
          updated_at: string
          updated_by: string | null
          vendor_id: string
          void_reason: string | null
          voided_at: string | null
          voided_by: string | null
        }
        Insert: {
          amount: number
          created_at?: string
          created_by?: string
          currency_code: string
          document_number?: string | null
          document_seq?: never
          external_reference?: string | null
          id?: string
          notes?: string | null
          organization_id: string
          paid_on?: string
          payment_method?: string | null
          posted_at?: string | null
          posted_by?: string | null
          row_version?: number
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          vendor_id: string
          void_reason?: string | null
          voided_at?: string | null
          voided_by?: string | null
        }
        Update: {
          amount?: number
          created_at?: string
          created_by?: string
          currency_code?: string
          document_number?: string | null
          document_seq?: never
          external_reference?: string | null
          id?: string
          notes?: string | null
          organization_id?: string
          paid_on?: string
          payment_method?: string | null
          posted_at?: string | null
          posted_by?: string | null
          row_version?: number
          status?: string | null
          updated_at?: string
          updated_by?: string | null
          vendor_id?: string
          void_reason?: string | null
          voided_at?: string | null
          voided_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_payments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vendor_payments_organization_id_vendor_id_fkey"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      vendor_product_costs: {
        Row: {
          created_at: string
          created_by: string | null
          currency_code: string
          id: string
          organization_id: string
          row_version: number
          unit_cost: number
          updated_at: string
          updated_by: string | null
          valid_during: unknown
          valid_from: string
          valid_to: string | null
          vendor_product_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          currency_code: string
          id?: string
          organization_id: string
          row_version?: number
          unit_cost: number
          updated_at?: string
          updated_by?: string | null
          valid_during?: unknown
          valid_from?: string
          valid_to?: string | null
          vendor_product_id: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          currency_code?: string
          id?: string
          organization_id?: string
          row_version?: number
          unit_cost?: number
          updated_at?: string
          updated_by?: string | null
          valid_during?: unknown
          valid_from?: string
          valid_to?: string | null
          vendor_product_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_product_costs_organization_id_vendor_product_id_fkey"
            columns: ["organization_id", "vendor_product_id"]
            isOneToOne: false
            referencedRelation: "vendor_products"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      vendor_products: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          is_active: boolean
          is_preferred: boolean
          lead_time_days: number
          minimum_order_quantity: number
          notes: string | null
          order_multiple: number
          organization_id: string
          product_id: string
          product_uom_id: string
          row_version: number
          updated_at: string
          updated_by: string | null
          vendor_id: string
          vendor_product_name: string | null
          vendor_sku: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          is_active?: boolean
          is_preferred?: boolean
          lead_time_days?: number
          minimum_order_quantity?: number
          notes?: string | null
          order_multiple?: number
          organization_id: string
          product_id: string
          product_uom_id: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          vendor_id: string
          vendor_product_name?: string | null
          vendor_sku: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          is_active?: boolean
          is_preferred?: boolean
          lead_time_days?: number
          minimum_order_quantity?: number
          notes?: string | null
          order_multiple?: number
          organization_id?: string
          product_id?: string
          product_uom_id?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          vendor_id?: string
          vendor_product_name?: string | null
          vendor_sku?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_products_exact_product_uom_fk"
            columns: ["organization_id", "product_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "vendor_products_organization_id_product_uom_id_fkey"
            columns: ["organization_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_products_organization_id_vendor_id_fkey"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      vendor_sites: {
        Row: {
          accounts_payable_email: string | null
          address_line1: string | null
          address_line2: string | null
          city: string | null
          code: string
          country_code: string | null
          created_at: string
          created_by: string | null
          cutoff_time: string | null
          delivery_weekdays: number[]
          display_name: string
          id: string
          is_active: boolean
          is_default_ordering: boolean
          is_default_remit: boolean
          is_ordering_site: boolean
          is_remit_site: boolean
          organization_id: string
          phone: string | null
          postal_code: string | null
          purchase_order_email: string | null
          region: string | null
          row_version: number
          time_zone: string | null
          updated_at: string
          updated_by: string | null
          vendor_id: string
        }
        Insert: {
          accounts_payable_email?: string | null
          address_line1?: string | null
          address_line2?: string | null
          city?: string | null
          code: string
          country_code?: string | null
          created_at?: string
          created_by?: string | null
          cutoff_time?: string | null
          delivery_weekdays?: number[]
          display_name: string
          id?: string
          is_active?: boolean
          is_default_ordering?: boolean
          is_default_remit?: boolean
          is_ordering_site?: boolean
          is_remit_site?: boolean
          organization_id: string
          phone?: string | null
          postal_code?: string | null
          purchase_order_email?: string | null
          region?: string | null
          row_version?: number
          time_zone?: string | null
          updated_at?: string
          updated_by?: string | null
          vendor_id: string
        }
        Update: {
          accounts_payable_email?: string | null
          address_line1?: string | null
          address_line2?: string | null
          city?: string | null
          code?: string
          country_code?: string | null
          created_at?: string
          created_by?: string | null
          cutoff_time?: string | null
          delivery_weekdays?: number[]
          display_name?: string
          id?: string
          is_active?: boolean
          is_default_ordering?: boolean
          is_default_remit?: boolean
          is_ordering_site?: boolean
          is_remit_site?: boolean
          organization_id?: string
          phone?: string | null
          postal_code?: string | null
          purchase_order_email?: string | null
          region?: string | null
          row_version?: number
          time_zone?: string | null
          updated_at?: string
          updated_by?: string | null
          vendor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_sites_vendor_fk"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      vendors: {
        Row: {
          code: string
          created_at: string
          created_by: string | null
          display_name: string
          email: string | null
          id: string
          is_active: boolean
          legal_name: string | null
          lifecycle_status: string
          organization_id: string
          phone: string | null
          preferred_contact_method: string
          row_version: number
          tax_id: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          code: string
          created_at?: string
          created_by?: string | null
          display_name: string
          email?: string | null
          id?: string
          is_active?: boolean
          legal_name?: string | null
          lifecycle_status?: string
          organization_id: string
          phone?: string | null
          preferred_contact_method?: string
          row_version?: number
          tax_id?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          code?: string
          created_at?: string
          created_by?: string | null
          display_name?: string
          email?: string | null
          id?: string
          is_active?: boolean
          legal_name?: string | null
          lifecycle_status?: string
          organization_id?: string
          phone?: string | null
          preferred_contact_method?: string
          row_version?: number
          tax_id?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendors_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      warehouse_bins: {
        Row: {
          code: string
          created_at: string
          created_by: string | null
          display_name: string | null
          id: string
          is_active: boolean
          is_pickable: boolean
          is_receivable: boolean
          organization_id: string
          row_version: number
          updated_at: string
          updated_by: string | null
          warehouse_id: string
        }
        Insert: {
          code: string
          created_at?: string
          created_by?: string | null
          display_name?: string | null
          id?: string
          is_active?: boolean
          is_pickable?: boolean
          is_receivable?: boolean
          organization_id: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          warehouse_id: string
        }
        Update: {
          code?: string
          created_at?: string
          created_by?: string | null
          display_name?: string | null
          id?: string
          is_active?: boolean
          is_pickable?: boolean
          is_receivable?: boolean
          organization_id?: string
          row_version?: number
          updated_at?: string
          updated_by?: string | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "warehouse_bins_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      warehouse_fulfillment_settings: {
        Row: {
          created_at: string
          created_by: string
          organization_id: string
          row_version: number
          staging_bin_id: string
          updated_at: string
          updated_by: string
          warehouse_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string
          organization_id: string
          row_version?: number
          staging_bin_id: string
          updated_at?: string
          updated_by?: string
          warehouse_id: string
        }
        Update: {
          created_at?: string
          created_by?: string
          organization_id?: string
          row_version?: number
          staging_bin_id?: string
          updated_at?: string
          updated_by?: string
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "warehouse_fulfillment_setting_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: true
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "warehouse_fulfillment_settings_staging_bin_id_fkey"
            columns: ["organization_id", "warehouse_id", "staging_bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
        ]
      }
      warehouse_receiving_settings: {
        Row: {
          created_at: string
          created_by: string
          destination_bin_id: string
          organization_id: string
          quarantine_bin_id: string
          receiving_bin_id: string
          row_version: number
          updated_at: string
          updated_by: string
          warehouse_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string
          destination_bin_id: string
          organization_id: string
          quarantine_bin_id: string
          receiving_bin_id: string
          row_version?: number
          updated_at?: string
          updated_by?: string
          warehouse_id: string
        }
        Update: {
          created_at?: string
          created_by?: string
          destination_bin_id?: string
          organization_id?: string
          quarantine_bin_id?: string
          receiving_bin_id?: string
          row_version?: number
          updated_at?: string
          updated_by?: string
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "warehouse_receiving_settings_organization_id_warehouse_id__fkey"
            columns: ["organization_id", "warehouse_id", "receiving_bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "warehouse_receiving_settings_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: true
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "warehouse_receiving_settings_organization_id_warehouse_id_fkey1"
            columns: ["organization_id", "warehouse_id", "destination_bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "warehouse_receiving_settings_organization_id_warehouse_id_fkey2"
            columns: ["organization_id", "warehouse_id", "quarantine_bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
        ]
      }
      warehouses: {
        Row: {
          address_line_1: string | null
          address_line_2: string | null
          city: string | null
          code: string
          country_code: string | null
          created_at: string
          created_by: string | null
          display_name: string
          id: string
          is_active: boolean
          latitude: number | null
          longitude: number | null
          organization_id: string
          postal_code: string | null
          region: string | null
          row_version: number
          time_zone: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          address_line_1?: string | null
          address_line_2?: string | null
          city?: string | null
          code: string
          country_code?: string | null
          created_at?: string
          created_by?: string | null
          display_name: string
          id?: string
          is_active?: boolean
          latitude?: number | null
          longitude?: number | null
          organization_id: string
          postal_code?: string | null
          region?: string | null
          row_version?: number
          time_zone?: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          address_line_1?: string | null
          address_line_2?: string | null
          city?: string | null
          code?: string
          country_code?: string | null
          created_at?: string
          created_by?: string | null
          display_name?: string
          id?: string
          is_active?: boolean
          latitude?: number | null
          longitude?: number | null
          organization_id?: string
          postal_code?: string | null
          region?: string | null
          row_version?: number
          time_zone?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "warehouses_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      bank_account_balance_overview: {
        Row: {
          bank_account_id: string | null
          code: string | null
          currency_code: string | null
          current_balance: number | null
          display_name: string | null
          latest_transaction_date: string | null
          opening_balance: number | null
          organization_id: string | null
          transaction_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "bank_accounts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_balance_overview: {
        Row: {
          balance_amount: number | null
          credited_amount: number | null
          currency_code: string | null
          customer_code: string | null
          customer_id: string | null
          customer_name: string | null
          invoiced_amount: number | null
          oldest_due_date: string | null
          open_invoice_count: number | null
          organization_id: string | null
          overdue_amount: number | null
          overdue_invoice_count: number | null
          paid_amount: number | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_invoices_organization_id_customer_id_fkey"
            columns: ["organization_id", "customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_invoices_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_invoice_overview: {
        Row: {
          balance_amount: number | null
          created_at: string | null
          credited_amount: number | null
          currency_code: string | null
          customer_code: string | null
          customer_id: string | null
          customer_name: string | null
          customer_reference: string | null
          discount_amount: number | null
          document_number: string | null
          due_date: string | null
          id: string | null
          invoice_date: string | null
          line_count: number | null
          organization_id: string | null
          paid_amount: number | null
          payment_status: string | null
          posted_at: string | null
          row_version: number | null
          sales_order_id: string | null
          sales_order_number: string | null
          status: string | null
          subtotal_amount: number | null
          tax_amount: number | null
          total_amount: number | null
          updated_at: string | null
          voided_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_invoices_organization_id_customer_id_fkey"
            columns: ["organization_id", "customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_invoices_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_invoices_organization_id_sales_order_id_fkey"
            columns: ["organization_id", "sales_order_id"]
            isOneToOne: false
            referencedRelation: "sales_order_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_invoices_organization_id_sales_order_id_fkey"
            columns: ["organization_id", "sales_order_id"]
            isOneToOne: false
            referencedRelation: "sales_orders"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      customer_payment_overview: {
        Row: {
          allocated_amount: number | null
          amount: number | null
          created_at: string | null
          currency_code: string | null
          customer_code: string | null
          customer_id: string | null
          customer_name: string | null
          document_number: string | null
          external_reference: string | null
          id: string | null
          organization_id: string | null
          payment_method: string | null
          posted_at: string | null
          received_on: string | null
          row_version: number | null
          status: string | null
          unapplied_amount: number | null
          updated_at: string | null
          voided_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_payments_organization_id_customer_id_fkey"
            columns: ["organization_id", "customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "customer_payments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      goods_receipt_overview: {
        Row: {
          can_view_line_financials: boolean | null
          created_at: string | null
          document_number: string | null
          id: string | null
          inventory_value: number | null
          line_count: number | null
          organization_id: string | null
          posted_at: string | null
          purchase_order_id: string | null
          purchase_order_number: string | null
          received_base_quantity: number | null
          received_on: string | null
          received_quantity: number | null
          reversed_at: string | null
          row_version: number | null
          status: string | null
          supplier_document_number: string | null
          updated_at: string | null
          vendor_code: string | null
          vendor_id: string | null
          vendor_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "goods_receipts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "goods_receipts_organization_id_purchase_order_id_fkey"
            columns: ["organization_id", "purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      governed_discrepancy_queue: {
        Row: {
          actual_quantity: string | null
          attachment_id: string | null
          claimed_at: string | null
          claimed_by: string | null
          closed_at: string | null
          closed_by: string | null
          created_at: string | null
          currency_code: string | null
          cycle_id: string | null
          cycle_number: number | null
          cycle_resolved_at: string | null
          cycle_resolved_by: string | null
          cycle_row_version: string | null
          decided_at: string | null
          decided_by: string | null
          decision_code: string | null
          decision_notes: string | null
          description: string | null
          discrepancy_type: string | null
          due_at: string | null
          effect_status: string | null
          effective_status: string | null
          estimated_value_impact: string | null
          expected_quantity: string | null
          goods_receipt_attachment_id: string | null
          goods_receipt_capture_id: string | null
          goods_receipt_id: string | null
          goods_receipt_line_id: string | null
          goods_receipt_line_row_version: string | null
          goods_receipt_number: string | null
          goods_receipt_row_version: string | null
          history: Json | null
          hold_status: string | null
          investigation_started_at: string | null
          investigation_started_by: string | null
          lot_code: string | null
          lot_id: string | null
          organization_id: string | null
          payment_hold_id: string | null
          payment_hold_row_version: string | null
          product_id: string | null
          product_name: string | null
          product_row_version: string | null
          product_sku: string | null
          purchase_order_id: string | null
          purchase_order_line_id: string | null
          purchase_order_number: string | null
          purchase_order_row_version: string | null
          purchase_order_version_id: string | null
          purchase_order_version_line_id: string | null
          purchase_order_version_number: number | null
          quantity_variance: string | null
          severity: string | null
          source_id: string | null
          source_kind: string | null
          source_reference: string | null
          source_row_version: string | null
          source_status: string | null
          source_terminal_at: string | null
          source_terminal_by: string | null
          source_terminal_code: string | null
          source_terminal_notes: string | null
          uom_code: string | null
          uom_id: string | null
          vendor_bill_id: string | null
          vendor_bill_line_id: string | null
          vendor_bill_match_id: string | null
          vendor_bill_match_line_id: string | null
          vendor_id: string | null
          vendor_name: string | null
          vendor_row_version: string | null
          workflow_status: string | null
        }
        Relationships: []
      }
      governed_receiving_discrepancy_activity: {
        Row: {
          actual_quantity: string | null
          actual_temperature_c: string | null
          assigned_employee_id: string | null
          attachment_id: string | null
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          created_at: string | null
          created_by: string | null
          currency_code: string | null
          description: string | null
          discrepancy_row_version: number | null
          discrepancy_status: string | null
          discrepancy_type: string | null
          document_number: string | null
          due_at: string | null
          estimated_value_impact: string | null
          expected_quantity: string | null
          expected_temperature_c: string | null
          goods_receipt_capture_id: string | null
          goods_receipt_id: string | null
          goods_receipt_line_id: string | null
          goods_receipt_line_row_version: number | null
          goods_receipt_number: string | null
          goods_receipt_row_version: number | null
          held_amount: string | null
          hold_row_version: number | null
          hold_status: string | null
          invoice_conversion_to_base: string | null
          invoice_product_uom_id: string | null
          invoice_product_uom_row_version: number | null
          organization_id: string | null
          payment_hold_id: string | null
          product_id: string | null
          product_name: string | null
          product_row_version: number | null
          product_sku: string | null
          purchase_order_id: string | null
          purchase_order_line_id: string | null
          purchase_order_number: string | null
          purchase_order_row_version: number | null
          purchase_order_version_id: string | null
          purchase_order_version_line_id: string | null
          purchase_order_version_number: number | null
          quantity_variance: string | null
          receipt_base_quantity: string | null
          receipt_condition: string | null
          receipt_conversion_to_base: string | null
          receipt_product_uom_id: string | null
          receipt_uom_code: string | null
          receipt_uom_id: string | null
          receiving_discrepancy_id: string | null
          resolution_code: string | null
          resolution_notes: string | null
          resolved_at: string | null
          resolved_by: string | null
          severity: string | null
          signed_variance_amount: string | null
          source_event_key: string | null
          updated_at: string | null
          updated_by: string | null
          variance_dimension: string | null
          vendor_bill_id: string | null
          vendor_bill_line_id: string | null
          vendor_bill_line_row_version: number | null
          vendor_bill_match_id: string | null
          vendor_bill_match_line_id: string | null
          vendor_bill_number: string | null
          vendor_bill_row_version: number | null
          vendor_id: string | null
          vendor_invoice_number: string | null
          vendor_name: string | null
          vendor_row_version: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_uoms_uom_id_fkey"
            columns: ["receipt_uom_id"]
            isOneToOne: false
            referencedRelation: "units_of_measure"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_attachment_fk"
            columns: ["organization_id", "attachment_id"]
            isOneToOne: false
            referencedRelation: "file_attachments"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_capture_fk"
            columns: [
              "organization_id",
              "goods_receipt_id",
              "goods_receipt_capture_id",
            ]
            isOneToOne: false
            referencedRelation: "goods_receipt_captures"
            referencedColumns: ["organization_id", "goods_receipt_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_employee_fk"
            columns: ["organization_id", "assigned_employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_exact_match_line_fk"
            columns: [
              "organization_id",
              "vendor_bill_id",
              "vendor_bill_line_id",
              "vendor_bill_match_line_id",
            ]
            isOneToOne: false
            referencedRelation: "vendor_bill_match_lines"
            referencedColumns: [
              "organization_id",
              "vendor_bill_id",
              "vendor_bill_line_id",
              "id",
            ]
          },
          {
            foreignKeyName: "receiving_discrepancies_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_po_fk"
            columns: ["organization_id", "purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_po_line_fk"
            columns: ["organization_id", "purchase_order_line_id"]
            isOneToOne: false
            referencedRelation: "purchase_order_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_product_fk"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_receipt_fk"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_receipt_fk"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_receipt_fk"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_invoice_intake_candidates"
            referencedColumns: ["organization_id", "goods_receipt_id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_receipt_line_fk"
            columns: ["organization_id", "goods_receipt_line_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_receipt_line_fk"
            columns: ["organization_id", "goods_receipt_line_id"]
            isOneToOne: false
            referencedRelation: "landed_cost_line_overview"
            referencedColumns: ["organization_id", "goods_receipt_line_id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_vendor_bill_fk"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_bill_activity"
            referencedColumns: ["organization_id", "vendor_bill_id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_vendor_bill_fk"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "vendor_bill_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_vendor_bill_fk"
            columns: ["organization_id", "vendor_bill_id"]
            isOneToOne: false
            referencedRelation: "vendor_bills"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_vendor_bill_line_fk"
            columns: [
              "organization_id",
              "vendor_bill_id",
              "vendor_bill_line_id",
            ]
            isOneToOne: false
            referencedRelation: "vendor_bill_lines"
            referencedColumns: ["organization_id", "vendor_bill_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_vendor_bill_match_line_fk"
            columns: ["organization_id", "vendor_bill_match_line_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_bill_match_line_activity"
            referencedColumns: ["organization_id", "vendor_bill_match_line_id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_vendor_bill_match_line_fk"
            columns: ["organization_id", "vendor_bill_match_line_id"]
            isOneToOne: false
            referencedRelation: "vendor_bill_match_lines"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "receiving_discrepancies_vendor_fk"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      governed_vendor_bill_activity: {
        Row: {
          active_hold_count: number | null
          attachment_id: string | null
          balance_amount: string | null
          bill_date: string | null
          bill_status: string | null
          can_close_purchase_order: boolean | null
          can_settle: boolean | null
          created_at: string | null
          currency_code: string | null
          discrepancy_count: number | null
          document_number: string | null
          due_date: string | null
          evaluated_at: string | null
          evaluated_by: string | null
          evidence_reference: string | null
          favorable_variance_amount: string | null
          gross_amount: string | null
          held_amount: string | null
          match_sequence: number | null
          match_state: string | null
          open_discrepancy_count: number | null
          organization_id: string | null
          paid_amount: string | null
          payment_document_number: string | null
          payment_posted_at: string | null
          posted_at: string | null
          purchase_order_close_blocked_reason_codes: string[] | null
          purchase_order_closed_at: string | null
          purchase_order_closure_id: string | null
          purchase_order_id: string | null
          purchase_order_number: string | null
          purchase_order_row_version: number | null
          purchase_order_version_id: string | null
          purchase_order_version_number: number | null
          settlement_blocked_reason_codes: string[] | null
          signed_variance_amount: string | null
          unheld_amount: string | null
          updated_at: string | null
          vendor_bill_id: string | null
          vendor_bill_match_id: string | null
          vendor_bill_row_version: number | null
          vendor_id: string | null
          vendor_invoice_number: string | null
          vendor_name: string | null
          vendor_payment_id: string | null
          voided_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_bills_attachment_fk"
            columns: ["organization_id", "attachment_id"]
            isOneToOne: false
            referencedRelation: "file_attachments"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bills_exact_version_fk"
            columns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
            ]
            isOneToOne: false
            referencedRelation: "purchase_order_versions"
            referencedColumns: ["organization_id", "purchase_order_id", "id"]
          },
          {
            foreignKeyName: "vendor_bills_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vendor_bills_organization_id_purchase_order_id_fkey"
            columns: ["organization_id", "purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bills_organization_id_vendor_id_fkey"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      governed_vendor_bill_match_line_activity: {
        Row: {
          currency_code: string | null
          document_number: string | null
          evaluated_at: string | null
          excess_base_quantity: string | null
          freight_held_amount: string | null
          freight_variance_amount: string | null
          goods_receipt_id: string | null
          goods_receipt_line_id: string | null
          goods_receipt_line_row_version: number | null
          goods_receipt_row_version: number | null
          invoice_base_quantity: string | null
          invoice_conversion_to_base: string | null
          line_number: number | null
          match_sequence: number | null
          match_state: string | null
          matchable_base_quantity: string | null
          organization_id: string | null
          other_held_amount: string | null
          other_variance_amount: string | null
          policy_version: number | null
          price_held_amount: string | null
          price_variance_amount: string | null
          prior_invoiced_base_quantity: string | null
          product_id: string | null
          product_name: string | null
          product_row_version: number | null
          product_sku: string | null
          product_uom_id: string | null
          product_uom_row_version: number | null
          purchase_order_id: string | null
          purchase_order_line_id: string | null
          purchase_order_version_id: string | null
          purchase_order_version_line_id: string | null
          quantity_held_amount: string | null
          quantity_variance_amount: string | null
          receipt_base_quantity: string | null
          remaining_receipt_base_quantity: string | null
          source_snapshot_hash: string | null
          tax_held_amount: string | null
          tax_variance_amount: string | null
          total_held_amount: string | null
          vendor_bill_id: string | null
          vendor_bill_line_id: string | null
          vendor_bill_line_row_version: number | null
          vendor_bill_match_id: string | null
          vendor_bill_match_line_id: string | null
          vendor_bill_row_version: number | null
          vendor_id: string | null
          vendor_invoice_number: string | null
          vendor_name: string | null
          vendor_row_version: number | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_bill_match_lines_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_match_lines_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_match_lines_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_invoice_intake_candidates"
            referencedColumns: ["organization_id", "goods_receipt_id"]
          },
          {
            foreignKeyName: "vendor_bill_match_lines_organization_id_goods_receipt_id_g_fkey"
            columns: [
              "organization_id",
              "goods_receipt_id",
              "goods_receipt_line_id",
            ]
            isOneToOne: false
            referencedRelation: "goods_receipt_lines"
            referencedColumns: ["organization_id", "goods_receipt_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_match_lines_organization_id_goods_receipt_id_g_fkey"
            columns: [
              "organization_id",
              "goods_receipt_id",
              "goods_receipt_line_id",
            ]
            isOneToOne: false
            referencedRelation: "landed_cost_line_overview"
            referencedColumns: [
              "organization_id",
              "goods_receipt_id",
              "goods_receipt_line_id",
            ]
          },
          {
            foreignKeyName: "vendor_bill_match_lines_organization_id_product_id_product_fkey"
            columns: ["organization_id", "product_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "vendor_bill_match_lines_organization_id_purchase_order_id__fkey"
            columns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "purchase_order_line_id",
              "purchase_order_version_line_id",
            ]
            isOneToOne: false
            referencedRelation: "purchase_order_version_lines"
            referencedColumns: [
              "organization_id",
              "purchase_order_id",
              "purchase_order_version_id",
              "purchase_order_line_id",
              "id",
            ]
          },
        ]
      }
      governed_vendor_invoice_intake_candidates: {
        Row: {
          accepted_base_quantity: string | null
          currency_code: string | null
          eligible_attachments: Json | null
          eligible_invoice_uoms: Json | null
          goods_receipt_id: string | null
          goods_receipt_line_id: string | null
          goods_receipt_line_row_version: number | null
          goods_receipt_number: string | null
          goods_receipt_row_version: number | null
          invoice_eligible: boolean | null
          invoice_ineligibility_reason: string | null
          organization_id: string | null
          prior_invoiced_base_quantity: string | null
          prior_invoiced_unknown_capacity_line_count: number | null
          product_id: string | null
          product_name: string | null
          product_row_version: number | null
          product_sku: string | null
          purchase_order_approval_cycle_id: string | null
          purchase_order_approval_cycle_row_version: number | null
          purchase_order_approval_status: string | null
          purchase_order_approved_at: string | null
          purchase_order_id: string | null
          purchase_order_line_id: string | null
          purchase_order_number: string | null
          purchase_order_row_version: number | null
          purchase_order_version_id: string | null
          purchase_order_version_line_id: string | null
          purchase_order_version_line_snapshot_hash: string | null
          purchase_order_version_number: number | null
          purchase_order_version_snapshot_hash: string | null
          receipt_base_quantity: string | null
          receipt_condition: string | null
          receipt_conversion_to_base: string | null
          receipt_posted_at: string | null
          receipt_product_uom_id: string | null
          receipt_product_uom_row_version: number | null
          receipt_quantity: string | null
          receipt_reversed_at: string | null
          receipt_uom_code: string | null
          receipt_uom_id: string | null
          remaining_matchable_base_quantity: string | null
          remaining_physical_base_quantity: string | null
          vendor_id: string | null
          vendor_name: string | null
          vendor_row_version: number | null
        }
        Relationships: [
          {
            foreignKeyName: "goods_receipts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_uoms_uom_id_fkey"
            columns: ["receipt_uom_id"]
            isOneToOne: false
            referencedRelation: "units_of_measure"
            referencedColumns: ["id"]
          },
        ]
      }
      integration_connection_overview: {
        Row: {
          code: string | null
          connected_at: string | null
          connection_status: string | null
          connection_type: string | null
          created_at: string | null
          display_name: string | null
          external_account_id: string | null
          failed_event_count: number | null
          failed_run_count: number | null
          health_status: string | null
          id: string | null
          is_active: boolean | null
          last_synced_at: string | null
          last_verified_at: string | null
          latest_event_at: string | null
          latest_run_created_at: string | null
          latest_run_status: string | null
          latest_successful_run_at: string | null
          organization_id: string | null
          pending_event_count: number | null
          provider: string | null
          row_version: number | null
          run_count: number | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "integration_connections_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_available_overview: {
        Row: {
          available_base_quantity: number | null
          base_uom_code: string | null
          base_uom_id: string | null
          base_uom_name: string | null
          bin_code: string | null
          bin_id: string | null
          bin_name: string | null
          days_to_expiry: number | null
          disposition: string | null
          expires_on: string | null
          expiry_status: string | null
          fefo_rank: number | null
          held_base_quantity: number | null
          is_over_committed: boolean | null
          is_over_reserved: boolean | null
          last_movement_at: string | null
          lot_code: string | null
          lot_id: string | null
          lot_row_version: number | null
          lot_status: string | null
          manufactured_on: string | null
          next_reservation_expiry: string | null
          on_hand_base_quantity: number | null
          organization_id: string | null
          product_id: string | null
          product_name: string | null
          reserved_base_quantity: number | null
          sku: string | null
          warehouse_code: string | null
          warehouse_id: string | null
          warehouse_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_movements_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_movements_organization_id_product_id_fkey"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_movements_organization_id_product_id_lot_id_fkey"
            columns: ["organization_id", "product_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "inventory_movements_organization_id_warehouse_id_bin_id_fkey"
            columns: ["organization_id", "warehouse_id", "bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "inventory_movements_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "products_base_uom_id_fkey"
            columns: ["base_uom_id"]
            isOneToOne: false
            referencedRelation: "units_of_measure"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_hold_overview: {
        Row: {
          allocation_count: number | null
          cancelled_at: string | null
          created_at: string | null
          document_number: string | null
          held_base_quantity: number | null
          hold_type: string | null
          id: string | null
          lot_count: number | null
          organization_id: string | null
          placed_at: string | null
          product_count: number | null
          reason: string | null
          released_at: string | null
          row_version: number | null
          status: string | null
          title: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_holds_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_lot_hold_activity: {
        Row: {
          created_at: string | null
          current_held_base_quantity: number | null
          document_number: string | null
          hold_row_version: number | null
          hold_type: string | null
          inventory_hold_id: string | null
          lot_id: string | null
          lot_row_version: number | null
          organization_id: string | null
          placed_at: string | null
          placed_by: string | null
          reason: string | null
          release_reason: string | null
          released_at: string | null
          released_by: string | null
          scope_kind: string | null
          snapshot_held_base_quantity: number | null
          snapshot_location_count: number | null
          status: string | null
          title: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_holds_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_holds_scope_lot_fkey"
            columns: ["organization_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      inventory_lot_quarantine_activity: {
        Row: {
          completed_quarantine_task_count: number | null
          completed_release_task_count: number | null
          created_at: string | null
          current_quarantined_base_quantity: number | null
          document_number: string | null
          inventory_lot_quarantine_id: string | null
          inventory_lot_write_off_id: string | null
          lot_id: string | null
          lot_row_version: number | null
          note: string | null
          open_quarantine_task_count: number | null
          open_release_task_count: number | null
          organization_id: string | null
          placed_at: string | null
          placed_by: string | null
          quarantine_row_version: number | null
          reason_code: string | null
          release_reason: string | null
          release_requested_at: string | null
          release_requested_base_quantity: number | null
          release_requested_by: string | null
          released_at: string | null
          released_base_quantity: number | null
          released_by: string | null
          snapshot_location_count: number | null
          snapshot_quarantined_base_quantity: number | null
          status: string | null
          updated_at: string | null
          written_off_at: string | null
          written_off_by: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_lot_quarantines_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_lot_quarantines_organization_id_lot_id_fkey"
            columns: ["organization_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_quarantines_write_off_fk"
            columns: ["organization_id", "inventory_lot_write_off_id"]
            isOneToOne: false
            referencedRelation: "inventory_lot_write_off_activity"
            referencedColumns: ["organization_id", "inventory_lot_write_off_id"]
          },
          {
            foreignKeyName: "inventory_lot_quarantines_write_off_fk"
            columns: ["organization_id", "inventory_lot_write_off_id"]
            isOneToOne: false
            referencedRelation: "inventory_lot_write_offs"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      inventory_lot_vendor_return_activity: {
        Row: {
          accounting_event_id: string | null
          accounting_status: string | null
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          created_at: string | null
          credit_expectation_status: string | null
          currency_code: string | null
          document_number: string | null
          expected_credit_total_value: string | null
          expected_credit_unit_value: string | null
          inventory_lot_vendor_return_id: string | null
          inventory_total_value: string | null
          inventory_unit_value: string | null
          lot_id: string | null
          lot_row_version: number | null
          note: string | null
          organization_id: string | null
          physical_status: string | null
          quantity_base: string | null
          reason_code: string | null
          requested_at: string | null
          requested_by: string | null
          updated_at: string | null
          vendor_acknowledgement_status: string | null
          vendor_id: string | null
          vendor_name: string | null
          vendor_return_row_version: number | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_lot_vendor_returns_organization_id_accounting_ev_fkey"
            columns: ["organization_id", "accounting_event_id"]
            isOneToOne: false
            referencedRelation: "accounting_events"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_vendor_returns_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_lot_vendor_returns_organization_id_lot_id_fkey"
            columns: ["organization_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_vendor_returns_organization_id_vendor_id_fkey"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      inventory_lot_write_off_activity: {
        Row: {
          accounting_event_id: string | null
          accounting_status: string | null
          approval_reason: string | null
          approval_required: boolean | null
          approved_at: string | null
          approved_by: string | null
          completion_note: string | null
          created_at: string | null
          currency_code: string | null
          disposal_attested_at: string | null
          disposal_attested_by: string | null
          document_number: string | null
          inventory_lot_write_off_id: string | null
          lot_id: string | null
          lot_row_version: number | null
          note: string | null
          organization_id: string | null
          reason_code: string | null
          rejected_at: string | null
          rejected_by: string | null
          rejection_reason: string | null
          requested_at: string | null
          requested_by: string | null
          snapshot_location_count: number | null
          snapshot_quantity_base: string | null
          status: string | null
          threshold_amount: string | null
          total_value: string | null
          unit_value: string | null
          updated_at: string | null
          write_off_row_version: number | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_lot_write_offs_organization_id_accounting_event__fkey"
            columns: ["organization_id", "accounting_event_id"]
            isOneToOne: false
            referencedRelation: "accounting_events"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_lot_write_offs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_lot_write_offs_organization_id_lot_id_fkey"
            columns: ["organization_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      inventory_stock_overview: {
        Row: {
          base_uom_code: string | null
          base_uom_id: string | null
          base_uom_name: string | null
          bin_code: string | null
          bin_id: string | null
          bin_name: string | null
          days_to_expiry: number | null
          disposition: string | null
          expires_on: string | null
          expiry_status: string | null
          fefo_rank: number | null
          last_movement_at: string | null
          lot_code: string | null
          lot_id: string | null
          lot_status: string | null
          manufactured_on: string | null
          on_hand_base_quantity: number | null
          organization_id: string | null
          product_id: string | null
          product_name: string | null
          sku: string | null
          warehouse_code: string | null
          warehouse_id: string | null
          warehouse_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_movements_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_movements_organization_id_product_id_fkey"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "inventory_movements_organization_id_product_id_lot_id_fkey"
            columns: ["organization_id", "product_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "inventory_movements_organization_id_warehouse_id_bin_id_fkey"
            columns: ["organization_id", "warehouse_id", "bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "inventory_movements_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "products_base_uom_id_fkey"
            columns: ["base_uom_id"]
            isOneToOne: false
            referencedRelation: "units_of_measure"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_written_off_lot_overview: {
        Row: {
          available_base_quantity: number | null
          base_uom_code: string | null
          bin_code: string | null
          bin_id: string | null
          bin_name: string | null
          disposition: string | null
          expires_on: string | null
          held_base_quantity: number | null
          last_movement_at: string | null
          lot_code: string | null
          lot_id: string | null
          lot_row_version: number | null
          lot_status: string | null
          manufactured_on: string | null
          on_hand_base_quantity: number | null
          product_id: string | null
          product_name: string | null
          reserved_base_quantity: number | null
          sku: string | null
          warehouse_code: string | null
          warehouse_id: string | null
          warehouse_name: string | null
        }
        Relationships: []
      }
      journal_entry_overview: {
        Row: {
          accounting_period_id: string | null
          created_at: string | null
          credit_total: number | null
          currency_code: string | null
          debit_total: number | null
          description: string | null
          document_number: string | null
          entry_date: string | null
          id: string | null
          is_balanced: boolean | null
          line_count: number | null
          organization_id: string | null
          posted_at: string | null
          row_version: number | null
          source_id: string | null
          source_type: string | null
          status: string | null
          updated_at: string | null
          voided_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "journal_entries_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "journal_entries_period_fk"
            columns: ["organization_id", "accounting_period_id"]
            isOneToOne: false
            referencedRelation: "accounting_periods"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      landed_cost_line_overview: {
        Row: {
          base_quantity: number | null
          goods_receipt_id: string | null
          goods_receipt_line_id: string | null
          goods_receipt_number: string | null
          landed_charge_amount: number | null
          landed_cost_per_base_unit: number | null
          lot_id: string | null
          organization_id: string | null
          product_id: string | null
          product_name: string | null
          product_uom_id: string | null
          purchase_cost_amount: number | null
          quantity: number | null
          received_on: string | null
          sku: string | null
          total_landed_cost_amount: number | null
          unit_cost: number | null
        }
        Relationships: [
          {
            foreignKeyName: "goods_receipt_lines_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_lines_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_lines_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_invoice_intake_candidates"
            referencedColumns: ["organization_id", "goods_receipt_id"]
          },
          {
            foreignKeyName: "goods_receipt_lines_organization_id_product_id_lot_id_fkey"
            columns: ["organization_id", "product_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "goods_receipt_lines_organization_id_product_id_product_uom_fkey"
            columns: ["organization_id", "product_id", "product_uom_id"]
            isOneToOne: false
            referencedRelation: "product_uoms"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
        ]
      }
      lot_trace_overview: {
        Row: {
          bin_code: string | null
          bin_id: string | null
          critical_tracking_event: string | null
          event_type: string | null
          id: number | null
          key_data_elements: Json | null
          lot_code: string | null
          lot_id: string | null
          occurred_at: string | null
          organization_id: string | null
          product_id: string | null
          product_name: string | null
          quantity_base: number | null
          recorded_by: string | null
          sku: string | null
          source_reference: string | null
          warehouse_code: string | null
          warehouse_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "food_trace_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "food_trace_events_organization_id_product_id_fkey"
            columns: ["organization_id", "product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "food_trace_events_organization_id_product_id_lot_id_fkey"
            columns: ["organization_id", "product_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "food_trace_events_organization_id_warehouse_id_bin_id_fkey"
            columns: ["organization_id", "warehouse_id", "bin_id"]
            isOneToOne: false
            referencedRelation: "warehouse_bins"
            referencedColumns: ["organization_id", "warehouse_id", "id"]
          },
          {
            foreignKeyName: "food_trace_events_organization_id_warehouse_id_fkey"
            columns: ["organization_id", "warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      product_inventory_overview: {
        Row: {
          available_disposition_base_quantity: number | null
          available_to_promise_base_quantity: number | null
          base_uom_code: string | null
          base_uom_id: string | null
          can_view_on_order: boolean | null
          damaged_base_quantity: number | null
          hold_base_quantity: number | null
          last_movement_at: string | null
          on_hand_base_quantity: number | null
          on_order_base_quantity: number | null
          organization_id: string | null
          preferred_bin_code: string | null
          preferred_bin_id: string | null
          product_id: string | null
          product_name: string | null
          reorder_point_base: number | null
          reorder_quantity_base: number | null
          reorder_status: string | null
          reserved_base_quantity: number | null
          safety_stock_base: number | null
          sku: string | null
          soonest_expiry: string | null
          soonest_expiry_days: number | null
          suggested_order_base_quantity: number | null
          warehouse_code: string | null
          warehouse_id: string | null
          warehouse_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_base_uom_id_fkey"
            columns: ["base_uom_id"]
            isOneToOne: false
            referencedRelation: "units_of_measure"
            referencedColumns: ["id"]
          },
        ]
      }
      product_landed_cost_overview: {
        Row: {
          latest_goods_receipt_id: string | null
          latest_receipt_on: string | null
          organization_id: string | null
          product_id: string | null
          product_name: string | null
          received_base_quantity: number | null
          received_landed_cost_amount: number | null
          sku: string | null
          weighted_landed_cost_per_base_unit: number | null
        }
        Relationships: []
      }
      recall_customer_impact_overview: {
        Row: {
          customer_code: string | null
          customer_id: string | null
          customer_name: string | null
          customer_site_id: string | null
          lot_code: string | null
          lot_id: string | null
          organization_id: string | null
          product_id: string | null
          product_name: string | null
          recall_case_id: string | null
          shipment_id: string | null
          shipment_number: string | null
          shipped_base_quantity: number | null
          shipped_on: string | null
          sku: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recall_lots_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recall_lots_organization_id_product_id_lot_id_fkey"
            columns: ["organization_id", "product_id", "lot_id"]
            isOneToOne: false
            referencedRelation: "lots"
            referencedColumns: ["organization_id", "product_id", "id"]
          },
          {
            foreignKeyName: "recall_lots_organization_id_recall_case_id_fkey"
            columns: ["organization_id", "recall_case_id"]
            isOneToOne: false
            referencedRelation: "recall_cases"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
      sales_order_overview: {
        Row: {
          billing_status: string | null
          cancelled_at: string | null
          confirmed_at: string | null
          created_at: string | null
          currency_code: string | null
          customer_code: string | null
          customer_id: string | null
          customer_name: string | null
          customer_site_code: string | null
          customer_site_id: string | null
          customer_site_name: string | null
          discount_amount: number | null
          document_number: string | null
          external_reference: string | null
          fulfillment_status: string | null
          id: string | null
          invoice_count: number | null
          invoiced_amount: number | null
          invoiced_base_quantity: number | null
          line_count: number | null
          open_base_quantity: number | null
          order_date: string | null
          ordered_base_quantity: number | null
          ordered_quantity: number | null
          organization_id: string | null
          requested_delivery_date: string | null
          reserved_base_quantity: number | null
          row_version: number | null
          shipment_count: number | null
          shipped_base_quantity: number | null
          source_channel: string | null
          status: string | null
          subtotal_amount: number | null
          tax_amount: number | null
          total_amount: number | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_orders_organization_id_customer_id_customer_site_id_fkey"
            columns: ["organization_id", "customer_id", "customer_site_id"]
            isOneToOne: false
            referencedRelation: "customer_sites"
            referencedColumns: ["organization_id", "customer_id", "id"]
          },
          {
            foreignKeyName: "sales_orders_organization_id_customer_id_fkey"
            columns: ["organization_id", "customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "sales_orders_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      trial_balance_overview: {
        Row: {
          account_code: string | null
          account_name: string | null
          account_type: string | null
          credit_total: number | null
          debit_total: number | null
          gl_account_id: string | null
          net_debit_balance: number | null
          normal_balance: string | null
          organization_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "journal_entry_lines_account_fk"
            columns: ["organization_id", "gl_account_id"]
            isOneToOne: false
            referencedRelation: "gl_accounts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "journal_entry_lines_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_bill_overview: {
        Row: {
          balance_amount: number | null
          bill_date: string | null
          created_at: string | null
          currency_code: string | null
          discount_amount: number | null
          document_number: string | null
          due_date: string | null
          goods_receipt_id: string | null
          goods_receipt_number: string | null
          id: string | null
          line_count: number | null
          organization_id: string | null
          paid_amount: number | null
          payment_status: string | null
          posted_at: string | null
          purchase_order_id: string | null
          purchase_order_number: string | null
          row_version: number | null
          status: string | null
          subtotal_amount: number | null
          tax_amount: number | null
          total_amount: number | null
          updated_at: string | null
          vendor_code: string | null
          vendor_id: string | null
          vendor_invoice_number: string | null
          vendor_name: string | null
          voided_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_bills_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vendor_bills_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipt_overview"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bills_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipts"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bills_organization_id_goods_receipt_id_fkey"
            columns: ["organization_id", "goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "governed_vendor_invoice_intake_candidates"
            referencedColumns: ["organization_id", "goods_receipt_id"]
          },
          {
            foreignKeyName: "vendor_bills_organization_id_purchase_order_id_fkey"
            columns: ["organization_id", "purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["organization_id", "id"]
          },
          {
            foreignKeyName: "vendor_bills_organization_id_vendor_id_fkey"
            columns: ["organization_id", "vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["organization_id", "id"]
          },
        ]
      }
    }
    Functions: {
      accept_current_customer_quote: {
        Args: {
          p_command_key: string
          p_expected_row_version: number
          p_quote_id: string
        }
        Returns: Json
      }
      add_sales_order_line: {
        Args: {
          p_coupon_id?: string
          p_discount_amount?: number
          p_discount_override_reason?: string
          p_notes?: string
          p_price_override_reason?: string
          p_product_uom_id: string
          p_promotion_id?: string
          p_quantity: number
          p_sales_order_id: string
          p_tax_rate?: number
          p_trade_event_offer_id?: string
          p_unit_price?: number
          p_warehouse_id?: string
        }
        Returns: {
          base_quantity: number | null
          catch_weight_policy: Json | null
          conversion_to_base: number
          created_at: string
          created_by: string | null
          discount_amount: number
          discount_override_reason: string | null
          id: string
          line_number: number
          notes: string | null
          organization_id: string
          price_list_item_id: string | null
          price_override_reason: string | null
          product_id: string
          product_uom_id: string
          quantity: number
          row_version: number
          sales_order_id: string
          subtotal_amount: number | null
          tax_amount: number | null
          tax_rate: number
          total_amount: number | null
          unit_price: number
          updated_at: string
          updated_by: string | null
          warehouse_id: string | null
        }
        SetofOptions: {
          from: "*"
          to: "sales_order_lines"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      allocate_current_customer_payment: {
        Args: {
          p_allocations: Json
          p_command_key: string
          p_expected_row_version: number
          p_payment_id: string
          p_reason: string
        }
        Returns: Json
      }
      amend_purchase_order_command: {
        Args: {
          p_allocation_method: string
          p_buyer_actor_id: string
          p_charges: Json
          p_command_key: string
          p_company_id: string
          p_expected_delivery_date: string
          p_expected_quote_hash: string
          p_expected_version: string
          p_lines: Json
          p_notes: string
          p_order_date: string
          p_purchase_order_id: string
          p_reason: string
          p_source: Json
          p_vendor_id: string
          p_vendor_reference: string
          p_warehouse_id: string
        }
        Returns: Json
      }
      api_v1_invoke: {
        Args: {
          p_operation: string
          p_organization_slug: string
          p_payload: Json
          p_request_id: string
        }
        Returns: Json
      }
      application_session_context: {
        Args: { p_company_id?: string }
        Returns: Json
      }
      apply_governed_discrepancy_material_decision: {
        Args: {
          p_command_key: string
          p_decision_code: string
          p_effect_reference: string
          p_expected_cycle_row_version: number
          p_expected_damaged_receipt_movement_id: string
          p_expected_inventory_pool_movement_id: string
          p_expected_latest_vendor_bill_match_id: string
          p_expected_payment_hold_row_version: number
          p_expected_putaway_task_id: string
          p_expected_putaway_task_row_version: number
          p_expected_source_evidence_digest: string
          p_expected_source_row_version: number
          p_expected_vendor_bill_line_row_version: number
          p_expected_vendor_bill_row_version: number
          p_notes: string
          p_source_id: string
        }
        Returns: Json
      }
      apply_governed_discrepancy_vendor_credit: {
        Args: {
          p_command_key: string
          p_expected_cycle_row_version: number
          p_expected_payment_hold_row_version: number
          p_expected_source_row_version: number
          p_expected_vendor_claim_row_version: number
          p_notes: string
          p_source_id: string
          p_vendor_claim_id: string
          p_vendor_reference: string
        }
        Returns: Json
      }
      assign_current_barcode: {
        Args: {
          p_barcode_id: string
          p_code: string
          p_command_key: string
          p_expected_version: number
          p_format: string
          p_is_primary: boolean
          p_product_uom_id: string
          p_reason: string
        }
        Returns: Json
      }
      authorize_current_verified_document_download: {
        Args: { p_attachment_id: string }
        Returns: Json
      }
      authorize_governed_goods_receipt_attachment_download: {
        Args: { p_goods_receipt_attachment_id: string }
        Returns: {
          bucket_id: string
          checksum_sha256: string
          goods_receipt_attachment_id: string
          mime_type: string
          object_path: string
          original_filename: string
          size_bytes: number
        }[]
      }
      begin_governed_goods_receipt_attachment_verification: {
        Args: { p_command_key: string; p_upload_intent_id: string }
        Returns: {
          bucket_id: string
          client_checksum_sha256: string
          declared_mime_type: string
          declared_size_bytes: number
          goods_receipt_id: string
          is_replay: boolean
          object_path: string
          upload_intent_id: string
          verification_lease_expires_at: string
          verification_lease_id: string
        }[]
      }
      begin_purchasing_ai_invocation: {
        Args: { p_ai_run_id: string; p_worker_reference: string }
        Returns: Json
      }
      begin_reviewed_document_import: {
        Args: {
          p_checksum_sha256: string
          p_command_key: string
          p_import_id: string
          p_mime_type: string
          p_original_filename: string
          p_size_bytes: number
        }
        Returns: Json
      }
      begin_reviewed_document_import_application: {
        Args: {
          p_application_payload: Json
          p_command_key: string
          p_expected_version: number
          p_import_id: string
          p_reviewed_payload: Json
        }
        Returns: Json
      }
      cancel_current_customer_quote: {
        Args: {
          p_command_key: string
          p_expected_row_version: number
          p_quote_id: string
          p_reason: string
        }
        Returns: Json
      }
      cancel_current_sales_order: {
        Args: {
          p_command_key: string
          p_expected_row_version: number
          p_reason: string
          p_sales_order_id: string
        }
        Returns: Json
      }
      cancel_current_sales_order_remainder: {
        Args: {
          p_command_key: string
          p_expected_order_row_version: number
          p_reason: string
          p_sales_order_id: string
        }
        Returns: Json
      }
      cancel_governed_lot_vendor_return: {
        Args: {
          p_command_key: string
          p_expected_lot_row_version: number
          p_expected_vendor_return_row_version: number
          p_inventory_lot_vendor_return_id: string
          p_reason: string
        }
        Returns: {
          accounting_status: string
          cancellation_reason: string
          credit_expectation_status: string
          document_number: string
          inventory_lot_vendor_return_id: string
          is_replay: boolean
          lot_id: string
          lot_row_version: number
          physical_status: string
          vendor_acknowledgement_status: string
          vendor_return_row_version: number
        }[]
      }
      cancel_purchase_order_command: {
        Args: {
          p_command_key: string
          p_expected_purchase_order_row_version: string
          p_purchase_order_id: string
          p_purchase_order_version_id: string
          p_reason: string
        }
        Returns: Json
      }
      capture_current_catch_weight: {
        Args: {
          p_command_key: string
          p_expected_task_version: number
          p_expected_wave_version: number
          p_lock_if_valid?: boolean
          p_measurement: Json
          p_pick_task_event_id: number
        }
        Returns: Json
      }
      capture_current_customer: {
        Args: { p_command_key: string; p_customer: Json }
        Returns: Json
      }
      capture_current_food_show_quote_v1: {
        Args: {
          p_command_key: string
          p_customer_code: string
          p_expected_quote_digest: string
          p_lines: Json
          p_rep: string
          p_show_code: string
        }
        Returns: Json
      }
      change_vendor_status: {
        Args: {
          p_command_key: string
          p_company_id: string
          p_expected_version: string
          p_reason?: string
          p_status: string
          p_vendor_id: string
        }
        Returns: Json
      }
      check_in_governed_receiving_arrival: {
        Args: {
          p_advance_ship_notice_id: string
          p_command_key: string
          p_expected_source_row_version: number
          p_purchase_order_id: string
          p_purchase_order_version_id: string
        }
        Returns: {
          advance_ship_notice_id: string
          arrival_row_version: number
          arrived_at: string
          arrived_by: string
          is_replay: boolean
          purchase_order_id: string
          purchase_order_version_id: string
          receiving_arrival_id: string
          warehouse_id: string
        }[]
      }
      claim_automation_run_worker: {
        Args: {
          p_lease_seconds?: number
          p_run_id: string
          p_worker_id: string
        }
        Returns: Json
      }
      claim_barcode_pdf_jobs_from_scheduler_internal: {
        Args: {
          p_lease_seconds?: number
          p_limit?: number
          p_worker_reference: string
          p_worker_signature: string
          p_worker_timestamp: number
        }
        Returns: Json
      }
      claim_barcode_pdf_jobs_internal: {
        Args: {
          p_lease_seconds?: number
          p_limit?: number
          p_worker_reference: string
        }
        Returns: Json
      }
      claim_current_cycle_count: {
        Args: {
          p_command_key: string
          p_count_id: string
          p_expected_version: number
        }
        Returns: Json
      }
      claim_governed_goods_receipt_attachment_cleanup_internal: {
        Args: {
          p_limit?: number
          p_worker_signature: string
          p_worker_timestamp: number
        }
        Returns: {
          bucket_id: string
          cleanup_attempt_count: number
          cleanup_lease_expires_at: string
          cleanup_lease_id: string
          object_path: string
          upload_intent_id: string
        }[]
      }
      claim_next_scanner_task: {
        Args: {
          p_claim_ttl_seconds?: number
          p_expected_session_row_version: number
          p_session_id: string
        }
        Returns: Json
      }
      claim_platform_job_run_worker_v1: {
        Args: {
          p_lease_seconds?: number
          p_run_id: string
          p_worker_id: string
        }
        Returns: Json
      }
      claim_purchase_order_email_dispatches: {
        Args: {
          p_lease_seconds?: number
          p_limit?: number
          p_provider: string
          p_worker_reference: string
        }
        Returns: {
          body: string
          delivery_key: string
          from_address: string
          lease_expires_at: string
          order_snapshot: Json
          organization_id: string
          outbound_message_id: string
          provider: string
          purchase_order_dispatch_attempt_id: string
          purchase_order_dispatch_id: string
          recipient_email: string
          reply_to: string
          subject: string
        }[]
      }
      claim_purchasing_ai_review: {
        Args: { p_worker_reference: string }
        Returns: Json
      }
      claim_scanner_material_task: {
        Args: {
          p_claim_ttl_seconds?: number
          p_expected_session_row_version: number
          p_session_id: string
          p_task_id: string
          p_task_type: string
        }
        Returns: Json
      }
      claim_scanner_receiving_task: {
        Args: {
          p_claim_ttl_seconds?: number
          p_expected_session_row_version: number
          p_goods_receipt_id: string
          p_session_id: string
        }
        Returns: Json
      }
      close_governed_applied_discrepancy: {
        Args: {
          p_command_key: string
          p_expected_cycle_row_version: number
          p_expected_source_evidence_digest: string
          p_expected_source_row_version: number
          p_notes: string
          p_source_id: string
          p_source_kind: string
        }
        Returns: Json
      }
      close_purchase_order_command: {
        Args: {
          p_command_key: string
          p_expected_purchase_order_row_version: string
          p_purchase_order_id: string
          p_purchase_order_version_id: string
          p_reason: string
        }
        Returns: Json
      }
      close_scanner_session: {
        Args: { p_expected_row_version: number; p_session_id: string }
        Returns: Json
      }
      command_governed_discrepancy_v2: {
        Args: {
          p_action: string
          p_command_key: string
          p_decision_code: string
          p_expected_cycle_row_version: number
          p_expected_source_evidence_digest: string
          p_expected_source_row_version: number
          p_notes: string
          p_source_id: string
          p_source_kind: string
        }
        Returns: Json
      }
      commission_projection: { Args: { p_period: string }; Returns: Json }
      complete_barcode_pdf_job_internal: {
        Args: {
          p_attempt_id: string
          p_checksum_sha256: string
          p_job_id: string
          p_renderer_version: string
          p_size_bytes: number
          p_worker_reference: string
        }
        Returns: Json
      }
      complete_governed_goods_receipt_attachment_cleanup_internal: {
        Args: {
          p_cleanup_lease_id: string
          p_upload_intent_id: string
          p_worker_signature: string
          p_worker_timestamp: number
        }
        Returns: {
          is_replay: boolean
          state: string
          upload_intent_id: string
        }[]
      }
      complete_governed_inventory_lot_relocation: {
        Args: {
          p_command_key: string
          p_destination_bin_evidence: string
          p_expected_task_row_version: number
          p_inventory_lot_relocation_task_id: string
          p_product_or_lot_evidence: string
          p_quantity_evidence: string
          p_source_bin_evidence: string
        }
        Returns: {
          inventory_lot_quarantine_id: string
          inventory_lot_relocation_task_id: string
          is_replay: boolean
          lot_id: string
          lot_row_version: number
          quarantine_row_version: number
          quarantine_status: string
          task_row_version: number
          task_status: string
        }[]
      }
      complete_governed_lot_write_off: {
        Args: {
          p_command_key: string
          p_completion_note: string
          p_disposal_attested: boolean
          p_expected_lot_row_version: number
          p_expected_write_off_row_version: number
          p_inventory_lot_write_off_id: string
        }
        Returns: {
          accounting_event_id: string
          accounting_status: string
          currency_code: string
          inventory_lot_write_off_id: string
          is_replay: boolean
          lot_id: string
          lot_row_version: number
          quantity_base: string
          status: string
          total_value: string
          write_off_row_version: number
        }[]
      }
      complete_governed_scanner_cycle_count: {
        Args: {
          p_accepted_scan_event_ids: number[]
          p_claim_id: string
          p_command_key: string
          p_count_line_id: string
          p_expected_entry_version: number
          p_expected_session_row_version: number
          p_expected_task_row_version: number
          p_scanner_session_id: string
        }
        Returns: Json
      }
      complete_governed_scanner_material_task: {
        Args: {
          p_accepted_scan_event_ids: number[]
          p_claim_id: string
          p_command_key: string
          p_expected_session_row_version: number
          p_expected_task_row_version: number
          p_scanner_session_id: string
          p_task_id: string
          p_task_type: string
        }
        Returns: Json
      }
      complete_governed_scanner_pick: {
        Args: {
          p_accepted_scan_event_ids: number[]
          p_claim_id: string
          p_command_key: string
          p_expected_session_row_version: number
          p_expected_task_row_version: number
          p_expected_wave_row_version: number
          p_pick_task_id: string
          p_scanner_session_id: string
        }
        Returns: Json
      }
      complete_purchase_order_email_dispatch: {
        Args: {
          p_attempt_id: string
          p_external_message_id: string
          p_provider_response?: Json
          p_worker_reference: string
        }
        Returns: {
          dispatch_state: string
          outbound_message_id: string
          purchase_order_dispatch_attempt_id: string
          purchase_order_dispatch_id: string
        }[]
      }
      complete_purchasing_ai_review: {
        Args: {
          p_ai_run_id: string
          p_review: Json
          p_usage: Json
          p_worker_reference: string
        }
        Returns: Json
      }
      complete_receiving_putaway: {
        Args: {
          p_command_key: string
          p_destination_bin_evidence: string
          p_expected_task_row_version: number
          p_product_or_lot_evidence: string
          p_quantity_evidence: string
          p_receiving_putaway_task_id: string
          p_source_bin_evidence: string
        }
        Returns: {
          is_replay: boolean
          putaway_status: string
          receiving_putaway_task_id: string
          task_row_version: number
        }[]
      }
      complete_reviewed_document_import: {
        Args: {
          p_confidence: string
          p_document_kind: string
          p_expected_version: number
          p_extracted_payload: Json
          p_import_id: string
          p_model: string
          p_summary: string
        }
        Returns: Json
      }
      complete_reviewed_document_import_application: {
        Args: {
          p_application_result: Json
          p_expected_version: number
          p_import_id: string
        }
        Returns: Json
      }
      configure_current_delivery_route_exact: {
        Args: {
          p_command_key: string
          p_driver_employee_id: string
          p_expected_row_version: number
          p_route_id: string
          p_shipment_ids: string[]
          p_vehicle_id: string
        }
        Returns: Json
      }
      configure_current_inventory_transit_account: {
        Args: {
          p_command_key: string
          p_expected_mapping_version?: number
          p_gl_account_id: string
        }
        Returns: Json
      }
      configure_governed_fulfillment_staging_bin: {
        Args: {
          p_command_key: string
          p_expected_settings_row_version?: number
          p_expected_warehouse_row_version: number
          p_staging_bin_id: string
          p_warehouse_id: string
        }
        Returns: Json
      }
      configure_governed_receiving_locations: {
        Args: {
          p_command_key: string
          p_expected_warehouse_row_version: number
          p_locations: Json
          p_warehouse_id: string
        }
        Returns: {
          destination_bin_id: string
          is_replay: boolean
          quarantine_bin_id: string
          receiving_bin_id: string
          warehouse_id: string
          warehouse_row_version: number
        }[]
      }
      confirm_current_sales_order: {
        Args: { p_command_key: string; p_payload: Json }
        Returns: Json
      }
      create_current_bank_account: {
        Args: { p_account: Json; p_command_key: string }
        Returns: Json
      }
      create_current_customer: {
        Args: { p_command_key: string; p_customer: Json }
        Returns: Json
      }
      create_current_cycle_count: {
        Args: {
          p_assigned_membership_id: string
          p_command_key: string
          p_description: string
          p_targets: Json
          p_warehouse_id: string
        }
        Returns: Json
      }
      create_current_delivery_route: {
        Args: { p_command_key: string; p_route: Json }
        Returns: Json
      }
      create_current_inventory_transfer: {
        Args: { p_command_key: string; p_transfer: Json }
        Returns: Json
      }
      create_current_product: {
        Args: { p_command_key: string; p_product: Json }
        Returns: {
          product_id: string
          product_version: string
          replayed: boolean
        }[]
      }
      create_customer_credit_draft: {
        Args: {
          p_command_key: string
          p_credit_date: string
          p_customer_invoice_id: string
          p_customer_invoice_line_id: string
          p_expected_invoice_version: number
          p_notes?: string
          p_quantity: number
          p_reason_code: string
        }
        Returns: {
          credit_note_id: string
          document_number: string
          is_replay: boolean
          row_version: number
        }[]
      }
      create_purchase_order_asn_command: {
        Args: {
          p_carrier_name?: string
          p_case_count?: string
          p_command_key: string
          p_expected_arrival_at: string
          p_gross_weight?: string
          p_lines?: Json
          p_pallet_count?: number
          p_purchase_order_id: string
          p_purchase_order_vendor_response_id: string
          p_purchase_order_version_id: string
          p_shipped_at?: string
          p_tracking_number?: string
          p_vendor_asn_number: string
          p_weight_uom_code?: string
        }
        Returns: Json
      }
      create_purchase_order_from_preview: {
        Args: {
          p_allocation_method: string
          p_buyer_actor_id: string
          p_charges: Json
          p_command_key: string
          p_company_id: string
          p_expected_delivery_date: string
          p_expected_quote_hash: string
          p_lines: Json
          p_notes: string
          p_order_date: string
          p_source: Json
          p_vendor_id: string
          p_vendor_reference: string
          p_warehouse_id: string
        }
        Returns: Json
      }
      create_sales_order: {
        Args: {
          p_customer_id: string
          p_customer_site_id?: string
          p_external_reference?: string
          p_notes?: string
          p_organization_id: string
          p_requested_delivery_date?: string
          p_source_channel?: string
        }
        Returns: {
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          confirmed_at: string | null
          confirmed_by: string | null
          created_at: string
          created_by: string
          currency_code: string
          customer_id: string
          customer_site_id: string | null
          document_number: string
          document_seq: number
          external_reference: string | null
          id: string
          notes: string | null
          order_date: string
          organization_id: string
          requested_delivery_date: string | null
          row_version: number
          source_channel: string
          status: string | null
          updated_at: string
          updated_by: string | null
        }
        SetofOptions: {
          from: "*"
          to: "sales_orders"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      create_vendor_product: {
        Args: {
          p_command_key: string
          p_expected_vendor_version: string
          p_payload: Json
          p_reason: string
          p_vendor_id: string
        }
        Returns: Json
      }
      current_application_scope: {
        Args: never
        Returns: {
          actor_id: string
          organization_id: string
          permissions: string[]
          role_key: string
        }[]
      }
      deactivate_current_barcode: {
        Args: {
          p_barcode_id: string
          p_command_key: string
          p_expected_version: number
          p_reason: string
        }
        Returns: Json
      }
      decide_governed_lot_write_off: {
        Args: {
          p_command_key: string
          p_decision: string
          p_expected_lot_row_version: number
          p_expected_write_off_row_version: number
          p_inventory_lot_write_off_id: string
          p_reason: string
        }
        Returns: {
          accounting_status: string
          inventory_lot_write_off_id: string
          is_replay: boolean
          lot_id: string
          lot_row_version: number
          status: string
          write_off_row_version: number
        }[]
      }
      decide_purchase_order_approval_command: {
        Args: {
          p_approval_cycle_id: string
          p_command_key: string
          p_expected_approval_request_row_version: string
          p_expected_purchase_order_row_version: string
          p_outcome: string
          p_reason: string
        }
        Returns: Json
      }
      execute_current_growth_command_v1: {
        Args: { p_command: Json; p_command_key: string }
        Returns: Json
      }
      fail_barcode_pdf_job_internal: {
        Args: {
          p_attempt_id: string
          p_error_code: string
          p_job_id: string
          p_retryable?: boolean
          p_worker_reference: string
        }
        Returns: Json
      }
      fail_governed_goods_receipt_attachment_cleanup_internal: {
        Args: {
          p_cleanup_lease_id: string
          p_error_code: string
          p_upload_intent_id: string
          p_worker_signature: string
          p_worker_timestamp: number
        }
        Returns: {
          retry_after: string
          upload_intent_id: string
        }[]
      }
      fail_purchase_order_email_dispatch: {
        Args: {
          p_attempt_id: string
          p_error_message: string
          p_provider_response?: Json
          p_worker_reference: string
        }
        Returns: {
          dispatch_state: string
          outbound_message_id: string
          purchase_order_dispatch_attempt_id: string
          purchase_order_dispatch_id: string
        }[]
      }
      fail_purchasing_ai_review: {
        Args: {
          p_ai_run_id: string
          p_error_code: string
          p_worker_reference: string
        }
        Returns: Json
      }
      fail_reviewed_document_import: {
        Args: {
          p_expected_version: number
          p_failure_code: string
          p_import_id: string
        }
        Returns: Json
      }
      fail_reviewed_document_import_application: {
        Args: { p_expected_version: number; p_import_id: string }
        Returns: Json
      }
      finalize_current_bank_reconciliation: {
        Args: {
          p_command_key: string
          p_expected_row_version: string
          p_reconciliation_id: string
        }
        Returns: Json
      }
      finalize_governed_goods_receipt_attachment_internal: {
        Args: {
          p_actual_checksum_sha256: string
          p_actual_mime_type: string
          p_actual_size_bytes: number
          p_command_key: string
          p_upload_intent_id: string
        }
        Returns: {
          file_attachment_id: string
          goods_receipt_attachment_id: string
          goods_receipt_id: string
          is_replay: boolean
          receipt_row_version: number
        }[]
      }
      finish_automation_run_worker: {
        Args: {
          p_error_code?: string
          p_error_message?: string
          p_lease_token: string
          p_output: Json
          p_run_id: string
          p_succeeded: boolean
        }
        Returns: Json
      }
      finish_platform_job_run_worker_v1: {
        Args: {
          p_error_code?: string
          p_error_message?: string
          p_lease_token: string
          p_result_evidence?: Json
          p_run_id: string
          p_succeeded: boolean
        }
        Returns: Json
      }
      get_classification_reporting_inventory: { Args: never; Returns: Json }
      get_current_backorders_workspace: {
        Args: { p_after_line_id?: string; p_limit?: number }
        Returns: Json
      }
      get_current_bank_reconciliation_detail: {
        Args: { p_reconciliation_id: string }
        Returns: Json
      }
      get_current_bank_reconciliations_workspace: {
        Args: { p_after_id?: string; p_limit?: number }
        Returns: Json
      }
      get_current_barcode_pdf_job_for_product_uom: {
        Args: { p_product_uom_id: string }
        Returns: Json
      }
      get_current_barcode_print_job: {
        Args: { p_job_id: string }
        Returns: Json
      }
      get_current_barcode_studio: {
        Args: { p_filter?: string; p_query?: string }
        Returns: Json
      }
      get_current_cash_receipts_workspace: {
        Args: { p_after_id?: string; p_limit?: number }
        Returns: Json
      }
      get_current_catch_weight_workspace: {
        Args: { p_after_task_id?: string; p_limit?: number }
        Returns: Json
      }
      get_current_classification_sales_report: {
        Args: { p_end_date: string; p_start_date: string }
        Returns: Json
      }
      get_current_classification_workspace: { Args: never; Returns: Json }
      get_current_collection_case: {
        Args: { p_customer_invoice_id: string }
        Returns: Json
      }
      get_current_collection_cases_workspace: {
        Args: { p_after_invoice_id?: string; p_limit?: number }
        Returns: Json
      }
      get_current_collection_events: {
        Args: {
          p_before_sequence?: number
          p_customer_invoice_id: string
          p_limit?: number
        }
        Returns: Json
      }
      get_current_commercial_dashboard: { Args: never; Returns: Json }
      get_current_credit_return_detail: {
        Args: { p_kind: string; p_record_id: string }
        Returns: Json
      }
      get_current_credits_returns_workspace: { Args: never; Returns: Json }
      get_current_customer_analytics: {
        Args: {
          p_from: string
          p_minimum_order_count?: number
          p_minimum_sales?: number
          p_to: string
        }
        Returns: Json
      }
      get_current_customer_capabilities: { Args: never; Returns: Json }
      get_current_customer_credit_detail: {
        Args: { p_credit_id: string }
        Returns: Json
      }
      get_current_customer_credit_workspace: {
        Args: { p_after_id?: string; p_limit?: number }
        Returns: Json
      }
      get_current_customer_detail: {
        Args: { p_customer_id: string }
        Returns: Json
      }
      get_current_customer_quotes_workspace: { Args: never; Returns: Json }
      get_current_customer_return_candidates: {
        Args: { p_shipment_id: string }
        Returns: Json
      }
      get_current_customer_return_detail: {
        Args: { p_return_id: string }
        Returns: Json
      }
      get_current_customer_return_shipments: { Args: never; Returns: Json }
      get_current_customer_returns_workspace: {
        Args: { p_after_id?: string; p_limit?: number }
        Returns: Json
      }
      get_current_customer_workspace: { Args: never; Returns: Json }
      get_current_cycle_count_sheet: {
        Args: { p_session_id: string; p_sheet_id: string }
        Returns: Json
      }
      get_current_cycle_counts_workspace: { Args: never; Returns: Json }
      get_current_delivery_execution_workspace: {
        Args: { p_route_id: string }
        Returns: Json
      }
      get_current_delivery_resources: { Args: never; Returns: Json }
      get_current_delivery_route_workspace: { Args: never; Returns: Json }
      get_current_delivery_stop_detail: {
        Args: { p_stop_id: string }
        Returns: Json
      }
      get_current_demo_readiness: { Args: never; Returns: Json }
      get_current_food_shows_workspace_v1: { Args: never; Returns: Json }
      get_current_growth_engine_workspace_v1: { Args: never; Returns: Json }
      get_current_inventory_transfer_candidates: {
        Args: { p_query?: string; p_source_warehouse_id?: string }
        Returns: Json
      }
      get_current_inventory_transfer_detail: {
        Args: { p_transfer_id: string }
        Returns: Json
      }
      get_current_inventory_transfers_workspace: {
        Args: { p_after_id?: string; p_limit?: number }
        Returns: Json
      }
      get_current_invoice_catch_weight_evidence: {
        Args: { p_invoice_id: string }
        Returns: Json
      }
      get_current_invoice_credit_eligibility: {
        Args: { p_invoice_id: string }
        Returns: Json
      }
      get_current_invoices_workspace: { Args: never; Returns: Json }
      get_current_journal_entry_detail_v1: {
        Args: { p_journal_entry_id: string }
        Returns: Json
      }
      get_current_last_sales_orders: {
        Args: { p_limit?: number }
        Returns: Json
      }
      get_current_lot_inventory_sources_v1: { Args: never; Returns: Json }
      get_current_new_order_workspace: { Args: never; Returns: Json }
      get_current_notifications_inbox_v1: { Args: never; Returns: Json }
      get_current_operational_dashboard: { Args: never; Returns: Json }
      get_current_organization_settings: { Args: never; Returns: Json }
      get_current_platform_workspace_v1: {
        Args: { p_screen: string }
        Returns: Json
      }
      get_current_pricing_workspace: { Args: never; Returns: Json }
      get_current_product_cost_pricing_workspace: {
        Args: { p_product_id: string }
        Returns: Json
      }
      get_current_product_customer_price_preview: {
        Args: {
          p_as_of: string
          p_customer_id: string
          p_customer_site_id: string
          p_product_id: string
          p_product_uom_id: string
          p_quantity: number
        }
        Returns: Json
      }
      get_current_product_editor_options: { Args: never; Returns: Json }
      get_current_product_workspace: {
        Args: { p_product_id: string }
        Returns: Json
      }
      get_current_proof_of_delivery_workspace: {
        Args: { p_after_id?: string; p_limit?: number }
        Returns: Json
      }
      get_current_report_template_preferences: { Args: never; Returns: Json }
      get_current_routines_workspace: { Args: never; Returns: Json }
      get_current_sales_order_detail: {
        Args: { p_sales_order_id: string }
        Returns: Json
      }
      get_current_sales_order_fulfillment: {
        Args: { p_sales_order_id: string }
        Returns: Json
      }
      get_current_sales_orders_workspace: { Args: never; Returns: Json }
      get_current_storefront_workspace_v1: { Args: never; Returns: Json }
      get_current_top_customer_gross_margins: {
        Args: { p_limit?: number }
        Returns: Json
      }
      get_current_top_gross_profit_sales_orders: {
        Args: { p_limit?: number }
        Returns: Json
      }
      get_current_treasury_sources_v1: {
        Args: { p_organization_id: string }
        Returns: Json
      }
      get_current_warehouse_operations_sources_v1: {
        Args: { p_organization_id: string }
        Returns: Json
      }
      get_governed_discrepancy_queue: {
        Args: never
        Returns: {
          actual_quantity: string | null
          attachment_id: string | null
          claimed_at: string | null
          claimed_by: string | null
          closed_at: string | null
          closed_by: string | null
          created_at: string | null
          currency_code: string | null
          cycle_id: string | null
          cycle_number: number | null
          cycle_resolved_at: string | null
          cycle_resolved_by: string | null
          cycle_row_version: string | null
          decided_at: string | null
          decided_by: string | null
          decision_code: string | null
          decision_notes: string | null
          description: string | null
          discrepancy_type: string | null
          due_at: string | null
          effect_status: string | null
          effective_status: string | null
          estimated_value_impact: string | null
          expected_quantity: string | null
          goods_receipt_attachment_id: string | null
          goods_receipt_capture_id: string | null
          goods_receipt_id: string | null
          goods_receipt_line_id: string | null
          goods_receipt_line_row_version: string | null
          goods_receipt_number: string | null
          goods_receipt_row_version: string | null
          history: Json | null
          hold_status: string | null
          investigation_started_at: string | null
          investigation_started_by: string | null
          lot_code: string | null
          lot_id: string | null
          organization_id: string | null
          payment_hold_id: string | null
          payment_hold_row_version: string | null
          product_id: string | null
          product_name: string | null
          product_row_version: string | null
          product_sku: string | null
          purchase_order_id: string | null
          purchase_order_line_id: string | null
          purchase_order_number: string | null
          purchase_order_row_version: string | null
          purchase_order_version_id: string | null
          purchase_order_version_line_id: string | null
          purchase_order_version_number: number | null
          quantity_variance: string | null
          severity: string | null
          source_id: string | null
          source_kind: string | null
          source_reference: string | null
          source_row_version: string | null
          source_status: string | null
          source_terminal_at: string | null
          source_terminal_by: string | null
          source_terminal_code: string | null
          source_terminal_notes: string | null
          uom_code: string | null
          uom_id: string | null
          vendor_bill_id: string | null
          vendor_bill_line_id: string | null
          vendor_bill_match_id: string | null
          vendor_bill_match_line_id: string | null
          vendor_id: string | null
          vendor_name: string | null
          vendor_row_version: string | null
          workflow_status: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "governed_discrepancy_queue"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      get_governed_discrepancy_workspace_v3: { Args: never; Returns: Json }
      get_governed_discrepancy_workspace_v4: { Args: never; Returns: Json }
      get_governed_goods_receipt: {
        Args: { p_goods_receipt_id: string }
        Returns: Json
      }
      get_governed_inventory_lot_relocation_scanner_task: {
        Args: never
        Returns: {
          base_uom_code: string
          created_at: string
          document_number: string
          from_bin_code: string
          from_bin_id: string
          id: string
          inventory_lot_quarantine_id: string
          lot_code: string
          lot_id: string
          operation_kind: string
          organization_id: string
          product_id: string
          product_name: string
          product_sku: string
          quantity_base: string
          row_version: number
          to_bin_code: string
          to_bin_id: string
          warehouse_id: string
        }[]
      }
      get_governed_receiving_arrivals: { Args: never; Returns: Json }
      get_governed_receiving_discrepancy_activity: {
        Args: never
        Returns: {
          actual_quantity: string | null
          actual_temperature_c: string | null
          assigned_employee_id: string | null
          attachment_id: string | null
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          created_at: string | null
          created_by: string | null
          currency_code: string | null
          description: string | null
          discrepancy_row_version: number | null
          discrepancy_status: string | null
          discrepancy_type: string | null
          document_number: string | null
          due_at: string | null
          estimated_value_impact: string | null
          expected_quantity: string | null
          expected_temperature_c: string | null
          goods_receipt_capture_id: string | null
          goods_receipt_id: string | null
          goods_receipt_line_id: string | null
          goods_receipt_line_row_version: number | null
          goods_receipt_number: string | null
          goods_receipt_row_version: number | null
          held_amount: string | null
          hold_row_version: number | null
          hold_status: string | null
          invoice_conversion_to_base: string | null
          invoice_product_uom_id: string | null
          invoice_product_uom_row_version: number | null
          organization_id: string | null
          payment_hold_id: string | null
          product_id: string | null
          product_name: string | null
          product_row_version: number | null
          product_sku: string | null
          purchase_order_id: string | null
          purchase_order_line_id: string | null
          purchase_order_number: string | null
          purchase_order_row_version: number | null
          purchase_order_version_id: string | null
          purchase_order_version_line_id: string | null
          purchase_order_version_number: number | null
          quantity_variance: string | null
          receipt_base_quantity: string | null
          receipt_condition: string | null
          receipt_conversion_to_base: string | null
          receipt_product_uom_id: string | null
          receipt_uom_code: string | null
          receipt_uom_id: string | null
          receiving_discrepancy_id: string | null
          resolution_code: string | null
          resolution_notes: string | null
          resolved_at: string | null
          resolved_by: string | null
          severity: string | null
          signed_variance_amount: string | null
          source_event_key: string | null
          updated_at: string | null
          updated_by: string | null
          variance_dimension: string | null
          vendor_bill_id: string | null
          vendor_bill_line_id: string | null
          vendor_bill_line_row_version: number | null
          vendor_bill_match_id: string | null
          vendor_bill_match_line_id: string | null
          vendor_bill_number: string | null
          vendor_bill_row_version: number | null
          vendor_id: string | null
          vendor_invoice_number: string | null
          vendor_name: string | null
          vendor_row_version: number | null
        }[]
        SetofOptions: {
          from: "*"
          to: "governed_receiving_discrepancy_activity"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      get_governed_receiving_dock: { Args: never; Returns: Json }
      get_governed_receiving_document_review: {
        Args: { p_review_id: string }
        Returns: Json
      }
      get_governed_receiving_putaway_scanner_task: {
        Args: never
        Returns: {
          base_uom_code: string
          created_at: string
          from_bin_code: string
          from_bin_id: string
          goods_receipt_id: string
          id: string
          lot_code: string
          lot_id: string
          organization_id: string
          product_id: string
          product_name: string
          product_sku: string
          quantity_base: string
          receipt_reference: string
          row_version: number
          to_bin_code: string
          to_bin_id: string
          warehouse_id: string
        }[]
      }
      get_governed_receiving_source_versions: { Args: never; Returns: Json }
      get_governed_scanner_pick_queue: {
        Args: never
        Returns: {
          assigned_employee_id: string
          assignment_valid: boolean
          base_uom_code: string
          blocker_code: string
          created_at: string
          fefo_valid: boolean
          inventory_reservation_id: string
          is_eligible: boolean
          lot_code: string
          lot_id: string
          organization_id: string
          pick_task_id: string
          pick_wave_id: string
          product_id: string
          product_uom_id: string
          remaining_base_quantity: string
          reservation_valid: boolean
          source_bin_code: string
          source_bin_id: string
          source_valid: boolean
          staging_bin_code: string
          staging_bin_id: string
          task_row_version: number
          warehouse_id: string
          wave_row_version: number
        }[]
      }
      get_governed_scanner_receiving_queue: {
        Args: { p_goods_receipt_id: string }
        Returns: {
          advance_ship_notice_line_id: string
          blocker_code: string
          catch_weight: boolean
          created_at: string
          destination_bin_id: string
          draft_captured_base_quantity: string
          expiry_required: boolean
          goods_receipt_id: string
          is_eligible: boolean
          line_number: number
          lot_required: boolean
          ordered_base_quantity: string
          ordered_product_uom_id: string
          ordered_uom_code: string
          organization_id: string
          over_receipt_tolerance_percent: string
          prior_received_base_quantity: string
          product_id: string
          product_name: string
          product_sku: string
          purchase_order_version_line_id: string
          quarantine_bin_id: string
          receipt_document_number: string
          receipt_row_version: number
          receiving_bin_id: string
          remaining_base_quantity: string
          requirements: Json
          task_id: string
          temperature_required: boolean
          track_expiry: boolean
          track_lots: boolean
          warehouse_id: string
        }[]
      }
      get_governed_vendor_bill_activity: {
        Args: never
        Returns: {
          active_hold_count: number | null
          attachment_id: string | null
          balance_amount: string | null
          bill_date: string | null
          bill_status: string | null
          can_close_purchase_order: boolean | null
          can_settle: boolean | null
          created_at: string | null
          currency_code: string | null
          discrepancy_count: number | null
          document_number: string | null
          due_date: string | null
          evaluated_at: string | null
          evaluated_by: string | null
          evidence_reference: string | null
          favorable_variance_amount: string | null
          gross_amount: string | null
          held_amount: string | null
          match_sequence: number | null
          match_state: string | null
          open_discrepancy_count: number | null
          organization_id: string | null
          paid_amount: string | null
          payment_document_number: string | null
          payment_posted_at: string | null
          posted_at: string | null
          purchase_order_close_blocked_reason_codes: string[] | null
          purchase_order_closed_at: string | null
          purchase_order_closure_id: string | null
          purchase_order_id: string | null
          purchase_order_number: string | null
          purchase_order_row_version: number | null
          purchase_order_version_id: string | null
          purchase_order_version_number: number | null
          settlement_blocked_reason_codes: string[] | null
          signed_variance_amount: string | null
          unheld_amount: string | null
          updated_at: string | null
          vendor_bill_id: string | null
          vendor_bill_match_id: string | null
          vendor_bill_row_version: number | null
          vendor_id: string | null
          vendor_invoice_number: string | null
          vendor_name: string | null
          vendor_payment_id: string | null
          voided_at: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "governed_vendor_bill_activity"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      get_governed_vendor_bill_match_line_activity: {
        Args: never
        Returns: {
          currency_code: string | null
          document_number: string | null
          evaluated_at: string | null
          excess_base_quantity: string | null
          freight_held_amount: string | null
          freight_variance_amount: string | null
          goods_receipt_id: string | null
          goods_receipt_line_id: string | null
          goods_receipt_line_row_version: number | null
          goods_receipt_row_version: number | null
          invoice_base_quantity: string | null
          invoice_conversion_to_base: string | null
          line_number: number | null
          match_sequence: number | null
          match_state: string | null
          matchable_base_quantity: string | null
          organization_id: string | null
          other_held_amount: string | null
          other_variance_amount: string | null
          policy_version: number | null
          price_held_amount: string | null
          price_variance_amount: string | null
          prior_invoiced_base_quantity: string | null
          product_id: string | null
          product_name: string | null
          product_row_version: number | null
          product_sku: string | null
          product_uom_id: string | null
          product_uom_row_version: number | null
          purchase_order_id: string | null
          purchase_order_line_id: string | null
          purchase_order_version_id: string | null
          purchase_order_version_line_id: string | null
          quantity_held_amount: string | null
          quantity_variance_amount: string | null
          receipt_base_quantity: string | null
          remaining_receipt_base_quantity: string | null
          source_snapshot_hash: string | null
          tax_held_amount: string | null
          tax_variance_amount: string | null
          total_held_amount: string | null
          vendor_bill_id: string | null
          vendor_bill_line_id: string | null
          vendor_bill_line_row_version: number | null
          vendor_bill_match_id: string | null
          vendor_bill_match_line_id: string | null
          vendor_bill_row_version: number | null
          vendor_id: string | null
          vendor_invoice_number: string | null
          vendor_name: string | null
          vendor_row_version: number | null
        }[]
        SetofOptions: {
          from: "*"
          to: "governed_vendor_bill_match_line_activity"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      get_governed_vendor_invoice_intake_candidates: {
        Args: never
        Returns: {
          accepted_base_quantity: string | null
          currency_code: string | null
          eligible_attachments: Json | null
          eligible_invoice_uoms: Json | null
          goods_receipt_id: string | null
          goods_receipt_line_id: string | null
          goods_receipt_line_row_version: number | null
          goods_receipt_number: string | null
          goods_receipt_row_version: number | null
          invoice_eligible: boolean | null
          invoice_ineligibility_reason: string | null
          organization_id: string | null
          prior_invoiced_base_quantity: string | null
          prior_invoiced_unknown_capacity_line_count: number | null
          product_id: string | null
          product_name: string | null
          product_row_version: number | null
          product_sku: string | null
          purchase_order_approval_cycle_id: string | null
          purchase_order_approval_cycle_row_version: number | null
          purchase_order_approval_status: string | null
          purchase_order_approved_at: string | null
          purchase_order_id: string | null
          purchase_order_line_id: string | null
          purchase_order_number: string | null
          purchase_order_row_version: number | null
          purchase_order_version_id: string | null
          purchase_order_version_line_id: string | null
          purchase_order_version_line_snapshot_hash: string | null
          purchase_order_version_number: number | null
          purchase_order_version_snapshot_hash: string | null
          receipt_base_quantity: string | null
          receipt_condition: string | null
          receipt_conversion_to_base: string | null
          receipt_posted_at: string | null
          receipt_product_uom_id: string | null
          receipt_product_uom_row_version: number | null
          receipt_quantity: string | null
          receipt_reversed_at: string | null
          receipt_uom_code: string | null
          receipt_uom_id: string | null
          remaining_matchable_base_quantity: string | null
          remaining_physical_base_quantity: string | null
          vendor_id: string | null
          vendor_name: string | null
          vendor_row_version: number | null
        }[]
        SetofOptions: {
          from: "*"
          to: "governed_vendor_invoice_intake_candidates"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      get_order_guide_workspace: {
        Args: {
          p_as_of?: string
          p_order_guide_id?: string
          p_usage_weeks?: number
        }
        Returns: Json
      }
      get_purchase_needs_workspace: {
        Args: {
          p_as_of?: string
          p_include_healthy?: boolean
          p_warehouse_id?: string
        }
        Returns: Json
      }
      get_purchase_order_amendment: {
        Args: {
          p_candidate_order_date?: string
          p_candidate_vendor_id?: string
          p_purchase_order_id: string
        }
        Returns: Json
      }
      get_purchase_order_dispatch: {
        Args: { p_purchase_order_id: string }
        Returns: Json
      }
      get_purchase_order_vendor_response_asn: {
        Args: { p_purchase_order_id: string }
        Returns: Json
      }
      get_purchase_order_workspace: {
        Args: { p_purchase_order_id: string }
        Returns: Json
      }
      get_purchasing_ai_review: { Args: { p_ai_run_id: string }; Returns: Json }
      get_purchasing_hub_workspace: {
        Args: { p_limit?: number }
        Returns: Json
      }
      get_receivable_purchase_order_lines: {
        Args: { p_purchase_order_id: string }
        Returns: Json
      }
      get_reviewed_document_import: {
        Args: { p_import_id: string }
        Returns: Json
      }
      get_scanner_work_context: { Args: never; Returns: Json }
      govern_current_organization_membership: {
        Args: {
          p_command_key: string
          p_enabled: boolean
          p_expected_row_version: number
          p_reason: string
          p_role_key: string
          p_target_membership_id: string
        }
        Returns: {
          application_user_id: string
          enabled: boolean
          membership_id: string
          role_key: string
          row_version: number
        }[]
      }
      govern_current_organization_membership_v2: {
        Args: {
          p_command_key: string
          p_enabled: boolean
          p_expected_row_version: string
          p_reason: string
          p_role_key: string
          p_target_membership_id: string
        }
        Returns: {
          application_user_id: string
          enabled: boolean
          membership_id: string
          role_key: string
          row_version: string
        }[]
      }
      hold_governed_lot: {
        Args: {
          p_command_key: string
          p_expected_lot_row_version: number
          p_lot_id: string
          p_reason: string
        }
        Returns: {
          held_base_quantity: number
          hold_row_version: number
          inventory_hold_id: string
          is_replay: boolean
          lot_id: string
          lot_row_version: number
        }[]
      }
      import_current_bank_statement: {
        Args: {
          p_bank_account_id: string
          p_command_key: string
          p_expected_account_version: number
          p_statement: Json
        }
        Returns: Json
      }
      intake_governed_receiving_document: {
        Args: { p_command_key: string; p_envelope: Json }
        Returns: Json
      }
      inventory_adjustment_post: {
        Args: { p_command_key: string; p_company_id: string; p_input: Json }
        Returns: Json
      }
      inventory_adjustment_reverse: {
        Args: {
          p_adjustment_id: string
          p_command_key: string
          p_company_id: string
          p_expected_version: string
          p_reason: string
        }
        Returns: Json
      }
      inventory_adjustments_workspace: {
        Args: {
          p_company_id: string
          p_query?: string
          p_warehouse_id?: string
        }
        Returns: Json
      }
      inventory_movements_list: {
        Args: {
          p_classification?: string
          p_company_id: string
          p_movement?: string
          p_page?: number
          p_page_size?: number
          p_query?: string
          p_sort?: string
        }
        Returns: Json
      }
      inventory_traceability_read: {
        Args: {
          p_company_id: string
          p_lot_id?: string
          p_page?: number
          p_page_size?: number
          p_query?: string
          p_sort?: string
        }
        Returns: Json
      }
      invoice_current_sales_order: {
        Args: {
          p_command_key: string
          p_customer_reference?: string
          p_expected_row_version: number
          p_invoice_date: string
          p_notes?: string
          p_sales_order_id: string
        }
        Returns: Json
      }
      list_current_audit_events_v1: {
        Args: { p_organization_id: string }
        Returns: Json
      }
      list_current_gl_accounts_v1: { Args: never; Returns: Json }
      list_current_integration_connections_v1: {
        Args: { p_organization_id: string }
        Returns: Json
      }
      list_current_journal_entry_overview_v1: { Args: never; Returns: Json }
      list_current_organization_members: {
        Args: never
        Returns: {
          application_user_id: string
          created_at: string
          enabled: boolean
          external_subject: string
          membership_id: string
          role_key: string
          row_version: number
          updated_at: string
        }[]
      }
      list_current_organization_members_v2: {
        Args: never
        Returns: {
          application_user_id: string
          created_at: string
          display_name: string
          email: string
          enabled: boolean
          external_subject: string
          membership_id: string
          organization_id: string
          role_key: string
          row_version: string
          updated_at: string
        }[]
      }
      list_current_trial_balance_overview_v1: { Args: never; Returns: Json }
      list_governed_completed_receiving_receipts: { Args: never; Returns: Json }
      list_governed_receiving_document_review_product_uoms: {
        Args: never
        Returns: Json
      }
      list_governed_receiving_document_reviews: { Args: never; Returns: Json }
      list_purchase_order_warehouses: { Args: never; Returns: Json }
      list_purchase_order_work_queue: {
        Args: {
          p_after?: Json
          p_brand_id?: string
          p_category_id?: string
          p_limit?: number
          p_query?: string
          p_sort?: string
          p_status?: string
          p_vendor_id?: string
        }
        Returns: Json
      }
      list_receiving_location_warehouses: { Args: never; Returns: Json }
      list_reviewed_document_imports: { Args: never; Returns: Json }
      list_vendor_purchase_order_exposure: {
        Args: { p_vendor_id?: string }
        Returns: Json
      }
      load_current_route_shipment_exact: {
        Args: {
          p_command_key: string
          p_expected_row_version: number
          p_expected_shipment_version: number
          p_route_shipment_id: string
        }
        Returns: Json
      }
      lock_current_catch_weight: {
        Args: {
          p_approve_exception?: boolean
          p_command_key: string
          p_expected_row_version: number
          p_measurement_id: string
          p_reason?: string
        }
        Returns: Json
      }
      materialize_and_approve_governed_receiving_document_review: {
        Args: {
          p_command_key: string
          p_expected_row_version: number
          p_review_id: string
        }
        Returns: Json
      }
      open_governed_discrepancy_vendor_claim: {
        Args: {
          p_command_key: string
          p_expected_cycle_row_version: number
          p_expected_source_evidence_digest: string
          p_expected_source_row_version: number
          p_notes: string
          p_source_id: string
        }
        Returns: Json
      }
      order_guide_create: {
        Args: {
          p_command_key: string
          p_company_id: string
          p_payload: Json
          p_reason?: string
        }
        Returns: Json
      }
      order_guide_setup_read: {
        Args: {
          p_company_id: string
          p_guide_id?: string
          p_vendor_id?: string
          p_warehouse_id?: string
        }
        Returns: Json
      }
      order_guide_update: {
        Args: {
          p_command_key: string
          p_company_id: string
          p_expected_version: string
          p_guide_id: string
          p_payload: Json
          p_reason?: string
        }
        Returns: Json
      }
      perform_current_platform_action_v1: {
        Args: {
          p_action: string
          p_command_key: string
          p_record_id: string
          p_screen: string
        }
        Returns: Json
      }
      pick_current_single_order_task: {
        Args: { p_expected_wave_row_version: number; p_pick_task_id: string }
        Returns: Json
      }
      post_current_cycle_count: {
        Args: {
          p_command_key: string
          p_count_id: string
          p_expected_version: number
          p_snapshot_version: string
        }
        Returns: Json
      }
      post_governed_goods_receipt: {
        Args: {
          p_command_key: string
          p_company_id: string
          p_expected_receipt_row_version: string
          p_goods_receipt_id: string
          p_override_over_receipt: boolean
          p_override_reason: string
        }
        Returns: Json
      }
      prepare_current_delivery_attachment: {
        Args: {
          p_checksum_sha256: string
          p_command_key: string
          p_filename: string
          p_mime_type: string
          p_purpose: string
          p_size_bytes: number
          p_stop_id: string
        }
        Returns: Json
      }
      prepare_governed_goods_receipt_attachment: {
        Args: {
          p_checksum_sha256: string
          p_command_key: string
          p_expected_receipt_row_version: number
          p_goods_receipt_id: string
          p_mime_type: string
          p_original_filename: string
          p_purpose: string
          p_size_bytes: number
        }
        Returns: {
          bucket_id: string
          expires_at: string
          goods_receipt_id: string
          is_replay: boolean
          object_path: string
          upload_intent_id: string
        }[]
      }
      preview_purchase_order_draft: {
        Args: {
          p_allocation_method: string
          p_buyer_actor_id: string
          p_charges: Json
          p_company_id: string
          p_expected_delivery_date: string
          p_lines: Json
          p_order_date: string
          p_purchase_order_id: string
          p_source: Json
          p_vendor_id: string
          p_warehouse_id: string
        }
        Returns: Json
      }
      print_current_barcodes: {
        Args: {
          p_barcode_ids: string[]
          p_command_key: string
          p_destination_type: string
          p_device_id: string
          p_quantity: number
        }
        Returns: Json
      }
      process_accounting_event: {
        Args: { p_accounting_event_id: string }
        Returns: {
          amount: number
          business_date: string
          created_at: string
          created_by: string | null
          currency_code: string
          event_type: string
          failed_at: string | null
          failure_message: string | null
          id: string
          journal_entry_id: string | null
          metadata: Json
          occurred_at: string
          organization_id: string
          processed_at: string | null
          row_version: number
          source_id: string
          source_type: string
          status: string | null
          updated_at: string
          updated_by: string | null
        }
        SetofOptions: {
          from: "*"
          to: "accounting_events"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      product_directory_snapshot: {
        Args: { p_company_id: string }
        Returns: Json
      }
      product_purchase_options: {
        Args: {
          p_company_id: string
          p_product_id?: string
          p_search?: string
          p_vendor_id: string
        }
        Returns: Json
      }
      product_sourcing_read: {
        Args: { p_as_of?: string; p_company_id: string; p_product_id: string }
        Returns: Json
      }
      product_uom_configure: {
        Args: {
          p_command_key: string
          p_company_id: string
          p_expected_version: string
          p_payload: Json
          p_product_id: string
          p_reason?: string
        }
        Returns: {
          product_id: string
          product_version: string
          replayed: boolean
        }[]
      }
      product_warehouse_planning_configure: {
        Args: {
          p_command_key: string
          p_company_id: string
          p_expected_version: string
          p_product_id: string
          p_reason: string
          p_reorder_point_base: string
          p_reorder_quantity_base: string
          p_replenishment_enabled: boolean
          p_safety_stock_base: string
          p_target_base_quantity: string
          p_target_cover_days: number
          p_warehouse_id: string
        }
        Returns: Json
      }
      product_warehouse_planning_read: {
        Args: {
          p_company_id: string
          p_product_id: string
          p_warehouse_id: string
        }
        Returns: Json
      }
      product_warehouse_policy_set: {
        Args: {
          p_command_key: string
          p_company_id: string
          p_expected_version: string
          p_product_id: string
          p_reason?: string
          p_target_base_quantity: string
          p_warehouse_id: string
        }
        Returns: Json
      }
      purchase_order_directory_snapshot: {
        Args: { p_company_id: string }
        Returns: Json
      }
      purchase_order_documents_read: {
        Args: { p_company_id: string; p_purchase_order_id: string }
        Returns: Json
      }
      purchase_order_editor_references: {
        Args: {
          p_company_id: string
          p_currency_code: string
          p_order_date: string
          p_vendor_id: string
        }
        Returns: Json
      }
      purchase_order_read: {
        Args: { p_company_id: string; p_purchase_order_id: string }
        Returns: Json
      }
      quarantine_governed_lot: {
        Args: {
          p_command_key: string
          p_expected_lot_row_version: number
          p_lot_id: string
          p_note: string
          p_reason_code: string
        }
        Returns: {
          inventory_lot_quarantine_id: string
          is_replay: boolean
          lot_id: string
          lot_row_version: number
          quarantine_row_version: number
          quarantined_base_quantity: number
          relocation_task_count: number
        }[]
      }
      quote_current_new_order_line: {
        Args: {
          p_customer_id: string
          p_customer_site_id: string
          p_product_uom_id: string
          p_quantity: number
        }
        Returns: Json
      }
      recall_action_decide: {
        Args: {
          p_action: string
          p_action_id: string
          p_command_key: string
          p_company_id: string
          p_expected_version: number
          p_reason: string
          p_result: Json
        }
        Returns: Json
      }
      recall_case_create: {
        Args: {
          p_classification: string
          p_command_key: string
          p_company_id: string
          p_lots: Json
          p_reason: string
          p_title: string
        }
        Returns: Json
      }
      recall_case_read: {
        Args: { p_case_id: string; p_company_id: string }
        Returns: Json
      }
      recall_case_transition: {
        Args: {
          p_action: string
          p_case_id: string
          p_command_key: string
          p_company_id: string
          p_expected_version: number
          p_reason: string
        }
        Returns: Json
      }
      recall_cases_for_lot: {
        Args: { p_company_id: string; p_lot_id: string }
        Returns: Json
      }
      recall_delivery_claim: {
        Args: { p_provider: string; p_worker: string }
        Returns: Json
      }
      recall_delivery_reconciliation_queue: {
        Args: { p_limit?: number }
        Returns: Json
      }
      recall_delivery_record: {
        Args: {
          p_attempt_id: string
          p_evidence: Json
          p_external_id: string
          p_outcome: string
          p_reconcile?: boolean
          p_worker: string
        }
        Returns: Json
      }
      recall_notifications_request: {
        Args: {
          p_case_id: string
          p_command_key: string
          p_company_id: string
          p_expected_version: number
        }
        Returns: Json
      }
      receive_current_customer_return: {
        Args: { p_command_key: string; p_return: Json }
        Returns: Json
      }
      receive_current_inventory_transfer: {
        Args: {
          p_command_key: string
          p_expected_row_version: number
          p_external_reference?: string
          p_notes?: string
          p_receipts: Json
          p_transfer_id: string
        }
        Returns: Json
      }
      reconcile_current_sales_order_fulfillment: {
        Args: {
          p_command_key: string
          p_expected_order_row_version: number
          p_sales_order_id: string
        }
        Returns: Json
      }
      reconcile_purchase_order_email_dispatch: {
        Args: {
          p_attempt_id: string
          p_error_message?: string
          p_external_message_id?: string
          p_provider_response?: Json
          p_reconciler_reference: string
          p_resolution: string
        }
        Returns: {
          dispatch_state: string
          is_replay: boolean
          outbound_message_id: string
          purchase_order_dispatch_attempt_id: string
          purchase_order_dispatch_id: string
        }[]
      }
      record_current_catch_weight_pick: {
        Args: {
          p_command_key: string
          p_expected_task_version: number
          p_expected_wave_version: number
          p_lock_if_valid?: boolean
          p_measurement: Json
          p_pick_task_id: string
        }
        Returns: Json
      }
      record_current_collection_action: {
        Args: {
          p_action: string
          p_command_key: string
          p_customer_invoice_id: string
          p_expected_case_version: number
          p_expected_invoice_version: number
          p_payload: Json
        }
        Returns: Json
      }
      record_current_customer_payment: {
        Args: {
          p_allocations?: Json
          p_amount: number
          p_command_key: string
          p_currency_code: string
          p_customer_id: string
          p_external_reference: string
          p_notes?: string
          p_payment_method: string
          p_post?: boolean
          p_received_on: string
        }
        Returns: Json
      }
      record_current_pick_task_event: {
        Args: {
          p_base_quantity: number
          p_command_key: string
          p_event_type: string
          p_expected_task_row_version: number
          p_expected_wave_row_version: number
          p_pick_task_id: string
          p_reason?: string
          p_reversal_of_event_id?: number
        }
        Returns: Json
      }
      record_current_proof_of_delivery_exact: {
        Args: { p_command_key: string; p_proof: Json }
        Returns: Json
      }
      record_customer_payment: {
        Args: {
          p_allocations?: Json
          p_amount: number
          p_currency_code?: string
          p_customer_id: string
          p_external_reference?: string
          p_notes?: string
          p_organization_id: string
          p_payment_method?: string
          p_received_on?: string
        }
        Returns: {
          amount: number
          created_at: string
          created_by: string
          currency_code: string
          customer_id: string
          document_number: string | null
          document_seq: number
          external_reference: string | null
          id: string
          notes: string | null
          organization_id: string
          payment_method: string | null
          posted_at: string | null
          posted_by: string | null
          received_on: string
          row_version: number
          status: string | null
          updated_at: string
          updated_by: string | null
          void_reason: string | null
          voided_at: string | null
          voided_by: string | null
        }
        SetofOptions: {
          from: "*"
          to: "customer_payments"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      record_governed_unexpected_receipt_item: {
        Args: {
          p_command_key: string
          p_expected_receipt_row_version: number
          p_goods_receipt_id: string
          p_item: Json
        }
        Returns: {
          goods_receipt_id: string
          goods_receipt_unexpected_item_id: string
          is_replay: boolean
          receipt_row_version: number
          unexpected_item_row_version: number
          unexpected_item_status: string
        }[]
      }
      record_governed_vendor_invoice: {
        Args: {
          p_attachment_id: string
          p_bill_date: string
          p_command_key: string
          p_currency_code: string
          p_due_date: string
          p_evidence_reference: string
          p_expected_purchase_order_row_version: number
          p_lines: Json
          p_notes?: string
          p_purchase_order_id: string
          p_purchase_order_version_id: string
          p_vendor_id: string
          p_vendor_invoice_number: string
        }
        Returns: {
          currency_code: string
          discrepancy_count: number
          document_number: string
          gross_amount: string
          held_amount: string
          is_replay: boolean
          match_state: string
          purchase_order_id: string
          purchase_order_version_id: string
          unheld_amount: string
          vendor_bill_id: string
          vendor_bill_match_id: string
          vendor_bill_row_version: number
          vendor_invoice_number: string
        }[]
      }
      record_pick_event: {
        Args: {
          p_bin_id?: string
          p_event_type: string
          p_lot_id?: string
          p_metadata?: Json
          p_notes?: string
          p_pick_task_id: string
          p_picked_product_id?: string
          p_quantity: number
          p_reversal_of_event_id?: number
        }
        Returns: {
          bin_id: string | null
          disposition: string | null
          event_type: string
          id: number
          lot_id: string | null
          metadata: Json
          notes: string | null
          occurred_at: string
          organization_id: string
          pick_task_id: string
          picked_product_id: string | null
          quantity_base: number
          recorded_by: string | null
          reversal_of_event_id: number | null
          warehouse_id: string | null
        }
        SetofOptions: {
          from: "*"
          to: "pick_task_events"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      record_purchase_order_dispatch_outcome_unknown: {
        Args: {
          p_attempt_id: string
          p_provider_response?: Json
          p_worker_reference: string
        }
        Returns: Json
      }
      record_purchase_order_vendor_response_command: {
        Args: {
          p_command_key: string
          p_evidence_notes: string
          p_expected_dispatch_row_version: string
          p_outcome: string
          p_purchase_order_dispatch_id: string
          p_purchase_order_id: string
          p_purchase_order_version_id: string
          p_received_at: string
          p_source_channel: string
          p_vendor_reference: string
        }
        Returns: Json
      }
      record_vendor_product_cost: {
        Args: {
          p_command_key: string
          p_cost: Json
          p_expected_vendor_product_version: string
          p_expected_vendor_version: string
          p_reason: string
          p_vendor_id: string
          p_vendor_product_id: string
        }
        Returns: Json
      }
      reject_governed_goods_receipt_attachment_internal: {
        Args: {
          p_command_key: string
          p_rejection_reason: string
          p_upload_intent_id: string
        }
        Returns: {
          is_replay: boolean
          state: string
          upload_intent_id: string
        }[]
      }
      reject_governed_receiving_document_review: {
        Args: {
          p_command_key: string
          p_expected_row_version: number
          p_reason: string
          p_review_id: string
        }
        Returns: Json
      }
      reject_reviewed_document_import: {
        Args: {
          p_expected_version: number
          p_import_id: string
          p_reason: string
        }
        Returns: Json
      }
      release_current_backorder: {
        Args: {
          p_command_key: string
          p_expected_order_row_version: number
          p_quantity?: number
          p_sales_order_line_id: string
        }
        Returns: Json
      }
      release_governed_lot: {
        Args: {
          p_command_key: string
          p_expected_hold_row_version: number
          p_expected_lot_row_version: number
          p_inventory_hold_id: string
          p_lot_id: string
          p_reason: string
        }
        Returns: {
          hold_row_version: number
          inventory_hold_id: string
          is_replay: boolean
          lot_id: string
          lot_row_version: number
          released_base_quantity: number
        }[]
      }
      release_scanner_task: {
        Args: {
          p_claim_id: string
          p_expected_claim_row_version: number
          p_expected_session_row_version: number
          p_scanner_session_id: string
        }
        Returns: Json
      }
      remove_governed_goods_receipt_capture: {
        Args: {
          p_command_key: string
          p_expected_receipt_row_version: number
          p_goods_receipt_capture_id: string
          p_goods_receipt_id: string
        }
        Returns: {
          goods_receipt_capture_id: string
          goods_receipt_id: string
          is_replay: boolean
          receipt_row_version: number
        }[]
      }
      reopen_current_bank_reconciliation: {
        Args: {
          p_command_key: string
          p_expected_row_version: number
          p_reason: string
          p_reconciliation_id: string
        }
        Returns: Json
      }
      replace_current_bank_matches: {
        Args: {
          p_command_key: string
          p_expected_row_version: number
          p_matches: Json
          p_reason: string
          p_reconciliation_id: string
        }
        Returns: Json
      }
      request_current_routine_run: {
        Args: {
          p_command_key: string
          p_expected_version: string
          p_routine_id: string
        }
        Returns: Json
      }
      request_governed_lot_quarantine_release: {
        Args: {
          p_command_key: string
          p_expected_lot_row_version: number
          p_expected_quarantine_row_version: number
          p_inventory_lot_quarantine_id: string
          p_lot_id: string
          p_reason: string
        }
        Returns: {
          inventory_lot_quarantine_id: string
          is_replay: boolean
          lot_id: string
          lot_row_version: number
          quarantine_row_version: number
          release_task_count: number
        }[]
      }
      request_governed_lot_vendor_return: {
        Args: {
          p_command_key: string
          p_expected_lot_row_version: number
          p_lot_id: string
          p_note: string
          p_reason_code: string
        }
        Returns: {
          accounting_status: string
          credit_expectation_status: string
          currency_code: string
          document_number: string
          expected_credit_total_value: string
          expected_credit_unit_value: string
          inventory_lot_vendor_return_id: string
          inventory_total_value: string
          inventory_unit_value: string
          is_replay: boolean
          lot_id: string
          lot_row_version: number
          physical_status: string
          quantity_base: string
          vendor_acknowledgement_status: string
          vendor_id: string
          vendor_return_row_version: number
        }[]
      }
      request_governed_lot_write_off: {
        Args: {
          p_command_key: string
          p_expected_lot_row_version: number
          p_lot_id: string
          p_note: string
          p_reason_code: string
        }
        Returns: {
          accounting_status: string
          approval_required: boolean
          currency_code: string
          document_number: string
          inventory_lot_write_off_id: string
          is_replay: boolean
          lot_id: string
          lot_row_version: number
          quantity_base: string
          status: string
          total_value: string
          unit_value: string
          write_off_row_version: number
        }[]
      }
      request_purchase_order_dispatch_command: {
        Args: {
          p_command_key: string
          p_expected_row_version: string
          p_phone_contact_notes?: string
          p_phone_contacted_at?: string
          p_purchase_order_id: string
          p_purchase_order_version_id: string
        }
        Returns: Json
      }
      request_purchasing_ai_review: {
        Args: {
          p_as_of?: string
          p_command_key: string
          p_limit?: number
          p_purchase_order_id?: string
          p_scope: string
          p_warehouse_id?: string
        }
        Returns: Json
      }
      reserve_sales_order_line: {
        Args: {
          p_bin_id?: string
          p_disposition?: string
          p_expires_at?: string
          p_lot_id?: string
          p_quantity: number
          p_sales_order_line_id: string
          p_warehouse_id: string
        }
        Returns: {
          bin_id: string | null
          consumed_at: string | null
          consumed_by: string | null
          conversion_to_base: number
          created_at: string
          created_by: string
          disposition: string
          expired_at: string | null
          expires_at: string | null
          id: string
          lot_id: string | null
          order_quantity_exact: number | null
          organization_id: string
          product_id: string
          product_uom_id: string
          quantity: number
          release_reason: string | null
          released_at: string | null
          released_by: string | null
          reserved_base_quantity: number | null
          restored_from_shipment_line_id: string | null
          row_version: number
          sales_order_line_id: string
          split_from_reservation_id: string | null
          status: string | null
          updated_at: string
          updated_by: string | null
          warehouse_id: string
        }
        SetofOptions: {
          from: "*"
          to: "inventory_reservations"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      resolve_current_barcode: { Args: { p_code: string }; Returns: Json }
      resolve_price: {
        Args: {
          p_as_of?: string
          p_customer_id: string
          p_customer_site_id: string
          p_organization_id: string
          p_product_uom_id: string
          p_quantity: number
        }
        Returns: {
          currency_code: string
          extended_amount: number
          minimum_quantity: number
          price_list_code: string
          price_list_id: string
          price_list_item_id: string
          price_list_name: string
          source_kind: string
          unit_price: number
        }[]
      }
      resume_scanner_session: { Args: { p_session_id: string }; Returns: Json }
      retry_current_barcode_pdf_job: {
        Args: {
          p_command_key: string
          p_expected_row_version: number
          p_job_id: string
          p_reason: string
        }
        Returns: Json
      }
      retry_purchase_order_dispatch_command: {
        Args: {
          p_command_key: string
          p_expected_dispatch_row_version: string
          p_purchase_order_dispatch_id: string
          p_reason: string
        }
        Returns: Json
      }
      return_governed_unexpected_receipt_item: {
        Args: {
          p_command_key: string
          p_expected_receipt_row_version: number
          p_expected_unexpected_item_row_version: number
          p_goods_receipt_attachment_id: string
          p_goods_receipt_id: string
          p_goods_receipt_unexpected_item_id: string
          p_reason: string
        }
        Returns: {
          goods_receipt_id: string
          goods_receipt_unexpected_item_id: string
          is_replay: boolean
          receipt_row_version: number
          unexpected_item_row_version: number
          unexpected_item_status: string
        }[]
      }
      reverse_current_customer_return: {
        Args: {
          p_command_key: string
          p_expected_row_version: number
          p_reason: string
          p_return_id: string
        }
        Returns: Json
      }
      reverse_current_inventory_transfer: {
        Args: {
          p_command_key: string
          p_expected_row_version: number
          p_reason: string
          p_transfer_id: string
        }
        Returns: Json
      }
      reverse_current_sales_order_shipment: {
        Args: {
          p_command_key: string
          p_expected_row_version: number
          p_reason: string
          p_shipment_id: string
        }
        Returns: Json
      }
      reverse_governed_goods_receipt: {
        Args: {
          p_command_key: string
          p_company_id: string
          p_expected_receipt_row_version: string
          p_goods_receipt_id: string
          p_reason: string
        }
        Returns: Json
      }
      review_current_cycle_count: {
        Args: {
          p_command_key: string
          p_count_id: string
          p_count_line_ids: string[]
          p_decision: string
          p_expected_version: number
          p_reason_code: string
        }
        Returns: Json
      }
      run_current_classification_command: {
        Args: { p_command: Json; p_command_key: string }
        Returns: Json
      }
      save_current_catch_weight_profile: {
        Args: {
          p_command_key: string
          p_expected_product_version: number
          p_expected_profile_version: number
          p_product_id: string
          p_profile: Json
        }
        Returns: Json
      }
      save_current_customer_quote: {
        Args: { p_command_key: string; p_payload: Json }
        Returns: Json
      }
      save_current_customer_site: {
        Args: {
          p_command_key: string
          p_customer_id: string
          p_expected_row_version: number
          p_site: Json
          p_site_id: string
        }
        Returns: Json
      }
      save_current_cycle_count_entries: {
        Args: {
          p_count_id: string
          p_entries: Json
          p_lease_fence: number
          p_lease_token: string
        }
        Returns: Json
      }
      save_current_organization_settings: {
        Args: {
          p_command_key: string
          p_expected_row_version: number
          p_settings: Json
        }
        Returns: Json
      }
      save_current_report_template_preferences: {
        Args: {
          p_command_key: string
          p_default_template_code: string
          p_expected_row_version: number
        }
        Returns: Json
      }
      save_current_routine: {
        Args: {
          p_command_key: string
          p_definition: Json
          p_expected_version: string
          p_routine_id: string
        }
        Returns: Json
      }
      save_governed_goods_receipt_capture: {
        Args: {
          p_capture: Json
          p_command_key: string
          p_company_id: string
          p_expected_receipt_row_version: string
          p_goods_receipt_id: string
        }
        Returns: Json
      }
      save_governed_receiving_document_review: {
        Args: {
          p_command_key: string
          p_corrections: Json
          p_expected_row_version: number
          p_review_id: string
        }
        Returns: Json
      }
      save_governed_scanner_receiving_capture: {
        Args: {
          p_accepted_scan_event_ids: number[]
          p_capture: Json
          p_claim_id: string
          p_command_key: string
          p_expected_receipt_row_version: number
          p_expected_session_row_version: number
          p_goods_receipt_id: string
          p_purchase_order_version_line_id: string
          p_scanner_session_id: string
        }
        Returns: Json
      }
      save_reviewed_document_import: {
        Args: {
          p_expected_version: number
          p_import_id: string
          p_reviewed_payload: Json
        }
        Returns: Json
      }
      send_current_food_show_quote_v1: {
        Args: {
          p_command_key: string
          p_document_number: string
          p_expected_version: number
        }
        Returns: Json
      }
      send_current_storefront_nudge_v1: {
        Args: {
          p_command_key: string
          p_customer_code: string
          p_expected_version: number
        }
        Returns: Json
      }
      set_current_product_status: {
        Args: {
          p_active: boolean
          p_command_key: string
          p_expected_version: number
          p_product_id: string
          p_reason: string
        }
        Returns: {
          product_id: string
          product_version: string
          replayed: boolean
        }[]
      }
      settle_governed_vendor_bill: {
        Args: {
          p_command_key: string
          p_expected_vendor_bill_row_version: number
          p_external_reference: string
          p_notes?: string
          p_paid_on: string
          p_payment_method: string
          p_vendor_bill_id: string
          p_vendor_bill_match_id: string
        }
        Returns: {
          currency_code: string
          is_replay: boolean
          paid_amount: string
          payment_document_number: string
          posted_at: string
          vendor_bill_id: string
          vendor_bill_match_id: string
          vendor_payment_id: string
          vendor_payment_row_version: number
        }[]
      }
      ship_current_sales_order: {
        Args: {
          p_carrier?: string
          p_command_key: string
          p_expected_row_version: number
          p_notes?: string
          p_sales_order_id: string
          p_shipped_on: string
          p_tracking_number?: string
        }
        Returns: Json
      }
      simulate_foodline_demo_purchase_order_email: {
        Args: {
          p_expected_dispatch_row_version: string
          p_purchase_order_dispatch_id: string
        }
        Returns: Json
      }
      start_checked_in_governed_goods_receipt: {
        Args: {
          p_advance_ship_notice_id: string
          p_command_key: string
          p_company_id: string
          p_expected_arrival_row_version: string
          p_notes: string
          p_purchase_order_id: string
          p_purchase_order_version_id: string
          p_receiving_arrival_id: string
          p_receiving_bin_id: string
          p_supplier_document_number: string
        }
        Returns: Json
      }
      start_scanner_session: {
        Args: {
          p_client_info?: Json
          p_device_id?: string
          p_warehouse_id: string
        }
        Returns: Json
      }
      submit_current_cycle_count: {
        Args: {
          p_command_key: string
          p_count_id: string
          p_expected_version: number
          p_lease_fence: number
          p_lease_token: string
        }
        Returns: Json
      }
      submit_purchase_order_command: {
        Args: {
          p_command_key: string
          p_expected_row_version: string
          p_purchase_order_id: string
          p_purchase_order_version_id: string
          p_reason: string
        }
        Returns: Json
      }
      submit_scanner_scan: {
        Args: {
          p_claim_id: string
          p_client_occurred_at: string
          p_expected_requirement_id: string
          p_expected_session_row_version: number
          p_expected_task_row_version: number
          p_idempotency_key: string
          p_input_method: string
          p_raw_value: string
          p_scanner_session_id: string
          p_symbology: string
          p_task_id: string
          p_task_type: string
        }
        Returns: Json
      }
      test_current_barcode: {
        Args: {
          p_barcode_id: string
          p_command_key: string
          p_scanned_code: string
        }
        Returns: Json
      }
      transition_approval_request: {
        Args: {
          p_action: string
          p_approval_request_id: string
          p_expected_row_version?: number
          p_reason?: string
        }
        Returns: {
          action_key: string
          amount: number | null
          approved_at: string | null
          approved_by: string | null
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          changes_requested_at: string | null
          changes_requested_by: string | null
          changes_requested_reason: string | null
          created_at: string
          created_by: string | null
          currency_code: string | null
          due_at: string | null
          id: string
          organization_id: string
          origin: string
          payload: Json
          rejected_at: string | null
          rejected_by: string | null
          rejection_reason: string | null
          request_type: string
          requested_at: string
          requested_by: string
          required_permission: string | null
          resource_id: string | null
          resource_type: string
          row_version: number
          status: string | null
          summary: string | null
          title: string
          updated_at: string
          updated_by: string | null
        }
        SetofOptions: {
          from: "*"
          to: "approval_requests"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      transition_current_customer_credit: {
        Args: {
          p_action: string
          p_command_key: string
          p_credit_id: string
          p_expected_credit_version: number
          p_expected_invoice_version: number
          p_reason?: string
          p_release_payment_allocations?: boolean
        }
        Returns: Json
      }
      transition_current_customer_payment: {
        Args: {
          p_action: string
          p_command_key: string
          p_expected_row_version: number
          p_payment_id: string
          p_reason?: string
        }
        Returns: Json
      }
      transition_current_delivery_route_exact: {
        Args: {
          p_action: string
          p_command_key: string
          p_expected_row_version: number
          p_reason?: string
          p_route_id: string
        }
        Returns: Json
      }
      transition_current_notification_v1: {
        Args: {
          p_action: string
          p_command_key: string
          p_expected_version: number
          p_notification_id: string
        }
        Returns: Json
      }
      transition_current_pick_wave: {
        Args: {
          p_action: string
          p_command_key: string
          p_expected_row_version: number
          p_pick_wave_id: string
        }
        Returns: Json
      }
      transition_current_routine: {
        Args: {
          p_action: string
          p_command_key: string
          p_expected_version: string
          p_reason?: string
          p_routine_id: string
        }
        Returns: Json
      }
      transition_customer_payment: {
        Args: {
          p_action: string
          p_customer_payment_id: string
          p_expected_row_version?: number
          p_reason?: string
        }
        Returns: {
          amount: number
          created_at: string
          created_by: string
          currency_code: string
          customer_id: string
          document_number: string | null
          document_seq: number
          external_reference: string | null
          id: string
          notes: string | null
          organization_id: string
          payment_method: string | null
          posted_at: string | null
          posted_by: string | null
          received_on: string
          row_version: number
          status: string | null
          updated_at: string
          updated_by: string | null
          void_reason: string | null
          voided_at: string | null
          voided_by: string | null
        }
        SetofOptions: {
          from: "*"
          to: "customer_payments"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      transition_governed_journal_entry: {
        Args: {
          p_action: string
          p_command_key: string
          p_expected_row_version: number
          p_journal_entry_id: string
          p_reason?: string
        }
        Returns: {
          id: string
          organization_id: string
          posted_at: string
          row_version: number
          status: string
          voided_at: string
        }[]
      }
      transition_inventory_hold: {
        Args: {
          p_action: string
          p_expected_row_version: number
          p_inventory_hold_id: string
          p_reason?: string
        }
        Returns: {
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          created_at: string
          created_by: string | null
          document_number: string | null
          document_seq: number
          hold_type: string
          id: string
          organization_id: string
          placed_at: string
          placed_by: string | null
          reason: string
          release_reason: string | null
          released_at: string | null
          released_by: string | null
          row_version: number
          scope_kind: string
          scope_lot_id: string | null
          status: string | null
          title: string
          updated_at: string
          updated_by: string | null
        }
        SetofOptions: {
          from: "*"
          to: "inventory_holds"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      transition_pick_wave: {
        Args: {
          p_action: string
          p_expected_row_version?: number
          p_pick_wave_id: string
          p_reason?: string
        }
        Returns: {
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          completed_at: string | null
          completed_by: string | null
          created_at: string
          created_by: string | null
          description: string | null
          document_number: string | null
          document_seq: number
          id: string
          organization_id: string
          released_at: string | null
          released_by: string | null
          route_id: string | null
          row_version: number
          sales_order_id: string | null
          ship_on: string
          started_at: string | null
          started_by: string | null
          status: string | null
          updated_at: string
          updated_by: string | null
          warehouse_id: string
        }
        SetofOptions: {
          from: "*"
          to: "pick_waves"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      transition_purchase_order_asn_command: {
        Args: {
          p_action: string
          p_advance_ship_notice_id: string
          p_command_key: string
          p_expected_asn_row_version: string
          p_reason: string
        }
        Returns: Json
      }
      transition_receiving_discrepancy: {
        Args: {
          p_action: string
          p_expected_row_version?: number
          p_notes?: string
          p_receiving_discrepancy_id: string
          p_resolution_code?: string
        }
        Returns: {
          actual_quantity: number | null
          actual_temperature_c: number | null
          assigned_employee_id: string | null
          attachment_id: string | null
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          created_at: string
          created_by: string | null
          currency_code: string | null
          description: string | null
          discrepancy_type: string
          document_number: string | null
          document_seq: number
          due_at: string | null
          estimated_value_impact: number | null
          expected_quantity: number | null
          expected_temperature_c: number | null
          goods_receipt_capture_id: string | null
          goods_receipt_id: string
          goods_receipt_line_id: string | null
          id: string
          organization_id: string
          product_id: string | null
          purchase_order_id: string
          purchase_order_line_id: string | null
          quantity_variance: number | null
          resolution_code: string | null
          resolution_notes: string | null
          resolved_at: string | null
          resolved_by: string | null
          row_version: number
          severity: string
          source_event_key: string | null
          status: string | null
          updated_at: string
          updated_by: string | null
          vendor_bill_id: string | null
          vendor_bill_line_id: string | null
          vendor_bill_match_line_id: string | null
          vendor_id: string
        }
        SetofOptions: {
          from: "*"
          to: "receiving_discrepancies"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      transition_report_run: {
        Args: {
          p_action: string
          p_error_message?: string
          p_expected_row_version?: number
          p_report_run_id: string
          p_result_attachment_id?: string
          p_result_metadata?: Json
          p_row_count?: number
        }
        Returns: {
          completed_at: string | null
          created_at: string
          created_by: string
          error_message: string | null
          failed_at: string | null
          id: string
          organization_id: string
          parameters: Json
          report_definition_id: string
          requested_at: string
          requested_by: string
          requested_format: string
          result_attachment_id: string | null
          result_metadata: Json
          row_count: number | null
          row_version: number
          started_at: string | null
          status: string | null
          updated_at: string
          updated_by: string
        }
        SetofOptions: {
          from: "*"
          to: "report_runs"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      transition_sales_order: {
        Args: {
          p_action: string
          p_expected_row_version?: number
          p_reason?: string
          p_sales_order_id: string
        }
        Returns: {
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          confirmed_at: string | null
          confirmed_by: string | null
          created_at: string
          created_by: string
          currency_code: string
          customer_id: string
          customer_site_id: string | null
          document_number: string
          document_seq: number
          external_reference: string | null
          id: string
          notes: string | null
          order_date: string
          organization_id: string
          requested_delivery_date: string | null
          row_version: number
          source_channel: string
          status: string | null
          updated_at: string
          updated_by: string | null
        }
        SetofOptions: {
          from: "*"
          to: "sales_orders"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      update_current_customer: {
        Args: {
          p_command_key: string
          p_customer: Json
          p_customer_id: string
          p_expected_version: number
        }
        Returns: Json
      }
      update_current_product: {
        Args: {
          p_command_key: string
          p_expected_version: number
          p_product: Json
          p_product_id: string
        }
        Returns: {
          product_id: string
          product_version: string
          replayed: boolean
        }[]
      }
      update_current_storefront_access_v1: {
        Args: {
          p_command_key: string
          p_customer_code: string
          p_delivery_site_codes: Json
          p_expected_version: number
          p_price_level_code: string
        }
        Returns: Json
      }
      update_vendor_product: {
        Args: {
          p_command_key: string
          p_expected_vendor_product_version: string
          p_expected_vendor_version: string
          p_payload: Json
          p_reason: string
          p_vendor_id: string
          p_vendor_product_id: string
        }
        Returns: Json
      }
      vendor_create: {
        Args: {
          p_command_key: string
          p_company_id: string
          p_payload: Json
          p_reason?: string
        }
        Returns: Json
      }
      vendor_directory_metrics_snapshot: {
        Args: { p_company_id: string }
        Returns: Json
      }
      vendor_directory_operating_snapshot: {
        Args: { p_company_id: string }
        Returns: Json
      }
      vendor_directory_snapshot: {
        Args: { p_company_id: string }
        Returns: Json
      }
      vendor_operating_read: {
        Args: { p_company_id: string; p_vendor_id: string }
        Returns: Json
      }
      vendor_operating_supplemental_evidence: {
        Args: { p_company_id: string; p_vendor_id: string }
        Returns: Json
      }
      vendor_products_read: {
        Args: { p_as_of?: string; p_company_id: string; p_vendor_id: string }
        Returns: Json
      }
      vendor_profile_references: {
        Args: { p_company_id: string }
        Returns: Json
      }
      vendor_read: {
        Args: { p_company_id: string; p_vendor_id: string }
        Returns: Json
      }
      vendor_update: {
        Args: {
          p_command_key: string
          p_company_id: string
          p_expected_version: string
          p_payload: Json
          p_reason?: string
          p_vendor_id: string
        }
        Returns: Json
      }
      verify_document_evidence_internal: {
        Args: {
          p_attachment_id: string
          p_checksum_sha256: string
          p_mime_type: string
          p_size_bytes: number
          p_worker_reference: string
        }
        Returns: Json
      }
      void_current_customer_invoice: {
        Args: {
          p_command_key: string
          p_customer_invoice_id: string
          p_expected_row_version: number
          p_reason: string
        }
        Returns: Json
      }
      warehouse_create: {
        Args: {
          p_command_key: string
          p_company_id: string
          p_payload: Json
          p_reason: string
        }
        Returns: Json
      }
      warehouse_directory_snapshot: {
        Args: { p_company_id: string }
        Returns: Json
      }
      warehouse_update: {
        Args: {
          p_command_key: string
          p_company_id: string
          p_expected_version: string
          p_payload: Json
          p_reason: string
          p_warehouse_id: string
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
