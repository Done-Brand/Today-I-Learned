import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lojwmvhxqvvxhlyqknbc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxvandtdmh4cXZ2eGhseXFrbmJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUyNDIyMzUsImV4cCI6MjAzMDgxODIzNX0.ZUrW9QnGGYqOZq7bNXUXcS0mo6BrfrCxLw0kMua_gjI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
