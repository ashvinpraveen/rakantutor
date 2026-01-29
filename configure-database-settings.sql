-- Configure Database Settings for Trigger Authentication
-- Run this in Supabase SQL Editor to enable the trigger to authenticate with Edge Functions

-- IMPORTANT: Replace 'YOUR_SERVICE_ROLE_KEY_HERE' with your actual service role key
-- You can find your service role key in: Supabase Dashboard → Settings → API → service_role (secret)

-- Set the service role key so the trigger can authenticate
ALTER DATABASE postgres SET app.settings.service_role_key = 'YOUR_SERVICE_ROLE_KEY_HERE';

-- Verify the setting was applied
SELECT current_setting('app.settings.service_role_key', true) AS service_role_key_set;

-- Test the trigger by inserting a test record
-- (Uncomment the INSERT below after setting the service role key)

/*
INSERT INTO public.registrations (
  heard_about, team_name, track, category,
  member1_full_name, member1_contact_number, member1_ic_number, member1_email,
  member1_nationality, member1_country_of_residence, member1_school,
  member1_qualification, member1_graduation_date,
  member2_full_name, member2_contact_number, member2_ic_number, member2_email,
  member2_nationality, member2_country_of_residence, member2_school,
  member2_qualification, member2_graduation_date,
  member3_full_name, member3_contact_number, member3_ic_number, member3_email,
  member3_nationality, member3_country_of_residence, member3_school,
  member3_qualification, member3_graduation_date,
  member4_full_name, member4_contact_number, member4_ic_number, member4_email,
  member4_nationality, member4_country_of_residence, member4_school,
  member4_qualification, member4_graduation_date,
  advisor_full_name, advisor_relationship, advisor_relationship_details,
  advisor_contact_number, advisor_email
) VALUES (
  'Social Media', 'Auth Test Team', 'Generative AI', 'Category A',
  'Test Member 1', '+60123456789', '123456789012', 'test1@example.com',
  'Malaysian', 'Malaysia', 'Test University', 'Bachelor', '2026-06-30',
  'Test Member 2', '+60123456790', '123456789013', 'test2@example.com',
  'Malaysian', 'Malaysia', 'Test University', 'Bachelor', '2026-06-30',
  'Test Member 3', '+60123456791', '123456789014', 'test3@example.com',
  'Malaysian', 'Malaysia', 'Test University', 'Bachelor', '2026-06-30',
  'Test Member 4', '+60123456792', '123456789015', 'test4@example.com',
  'Malaysian', 'Malaysia', 'Test University', 'Bachelor', '2026-06-30',
  'Test Advisor', 'Teacher', 'CS Dept', '+60123456793', 'advisor@example.com'
);
*/

-- After inserting, check the pg_net response
SELECT
  id,
  status_code,
  content::text AS response,
  created
FROM net._http_response
ORDER BY created DESC
LIMIT 3;
