import { createClient } from "@supabase/supabase-js";

// Proveravamo da li radimo u Vite okruženju ili u Node.js
const SUPABASE_URL =
  typeof import.meta !== "undefined"
    ? import.meta.env.VITE_SUPABASE_URL
    : process.env.VITE_SUPABASE_URL;

const SUPABASE_ANON_KEY =
  typeof import.meta !== "undefined"
    ? import.meta.env.VITE_SUPABASE_ANON_KEY
    : process.env.VITE_SUPABASE_ANON_KEY;

// Kreiramo Supabase klijent
export const supabase = createClient(SUPABASE_URL!, SUPABASE_ANON_KEY!);
