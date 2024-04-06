import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
	'https://msmetmylvjtkvumcqjaw.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zbWV0bXlsdmp0a3Z1bWNxamF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MTM3MjQsImV4cCI6MjAyNzk4OTcyNH0.HMnTrARDnPFxLj6hSqmqZya7s9FSKqSmR5uX0hQVCzs'
);
export default supabase;
