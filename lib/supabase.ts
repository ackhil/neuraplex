import { createClient } from '@supabase/supabase-js'

// EU / London region — set at project creation in Supabase dashboard.
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL    ?? 'https://placeholder.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'placeholder',
)

// Server-side only (Route Handlers / Server Actions) — do not import client-side
export function supabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL     ?? 'https://placeholder.supabase.co',
    process.env.SUPABASE_SERVICE_ROLE        ?? 'placeholder',
    { auth: { persistSession: false } },
  )
}
