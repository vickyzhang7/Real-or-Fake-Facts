import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://eznjxxwbvdhxihvjahll.supabase.co";
const supabaseKey = 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6bmp4eHdidmRoeGlodmphaGxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzMzI0NjYsImV4cCI6MjAxMzkwODQ2Nn0.j_jlmNfGeoA7VCsGWNoeWIUfI30ScAubdU3IBZxXRdc";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
