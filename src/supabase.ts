import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://mlydjyhqtdqobvsvevln.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1seWRqeWhxdGRxb2J2c3ZldmxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwNzMwODAsImV4cCI6MjA1NzY0OTA4MH0.f7KTskm0vp63EgJYWZPxYFtoeDGzDdbxiJlg-n4lB38";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
