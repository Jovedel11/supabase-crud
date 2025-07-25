import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKEy = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKEy) {
  console.error('Invalid key')
}

const supabase = createClient(supabaseUrl, supabaseAnonKEy)
export default supabase