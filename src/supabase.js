import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://gbydyumdufhnwvswcacm.supabase.co",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdieWR5dW1kdWZobnd2c3djYWNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQzMDA5MTAsImV4cCI6MTk5OTg3NjkxMH0.MYx2N8jVht0GbsRpATuqVIcPeISumjUxC5olz0PvyQI");

export default supabase;