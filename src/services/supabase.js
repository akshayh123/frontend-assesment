import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ibbhfdudqfmhgbpovemt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImliYmhmZHVkcWZtaGdicG92ZW10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzMjkyOTMsImV4cCI6MjAyMzkwNTI5M30.gRX--ML48l8IAEb-4_IBB7szQnQjLxlxygobkWFeemk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
