import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://pvsiiudrcshbsesyvwsk.supabase.co"; // Replace with your actual Supabase URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2c2lpdWRyY3NoYnNlc3l2d3NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2NDYxNDEsImV4cCI6MjA1NjIyMjE0MX0.wEGPYTigFX0niCzym4N0vqJZuAJ-K0FBBRSe-cNoXEw"; // Replace with your Supabase anon key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
