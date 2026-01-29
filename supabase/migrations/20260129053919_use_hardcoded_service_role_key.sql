-- Migration: Update trigger to use hardcoded service role key
-- Since we can't set database parameters in Supabase cloud, we'll hardcode the key

-- Drop the old function
DROP FUNCTION IF EXISTS handle_new_registration() CASCADE;

-- Create function with hardcoded service role key
-- IMPORTANT: Replace 'YOUR_SERVICE_ROLE_KEY_HERE' with your actual service role key
-- from Supabase Dashboard → Settings → API → service_role
CREATE OR REPLACE FUNCTION handle_new_registration()
RETURNS TRIGGER AS $$
DECLARE
  function_url TEXT;
  payload JSONB;
  service_role_key TEXT;
BEGIN
  -- Hardcode the Supabase URL
  function_url := 'https://barsjbjrgzubewjodzdd.supabase.co/functions/v1/handle-registration';

  -- Hardcode the service role key here
  service_role_key := 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhcnNqYmpyZ3p1YmV3am9kemRkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2ODY3NjQzMiwiZXhwIjoyMDg0MjUyNDMyfQ.7bRQwS7lqvbV3CYe-wLmuE3MxxEMgt0T4OWBPzSyKhQ';

  -- Prepare the payload
  payload := jsonb_build_object(
    'record', row_to_json(NEW)
  );

  -- Call the Edge Function asynchronously using pg_net
  PERFORM
    net.http_post(
      url := function_url,
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || service_role_key
      ),
      body := payload
    );

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recreate the trigger
DROP TRIGGER IF EXISTS on_registration_created ON public.registrations;

CREATE TRIGGER on_registration_created
  AFTER INSERT ON public.registrations
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_registration();
