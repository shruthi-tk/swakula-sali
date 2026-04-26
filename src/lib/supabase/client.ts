import { createBrowserClient } from '@supabase/ssr'
import { Database } from '@/database.types'

export function createClient() {
  // Use mock values if environment variables are not set (for initial development)
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mock.supabase.co'
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'mock-anon-key'

  return createBrowserClient<Database>(
    supabaseUrl,
    supabaseAnonKey
  )
}
