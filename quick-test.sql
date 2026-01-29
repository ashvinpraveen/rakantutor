-- Quick Test: Insert a minimal test registration to verify the trigger works

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
  'Social Media',
  'Quick Test Team ' || to_char(now(), 'HH24:MI:SS'),
  'Generative AI',
  'Category A',
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

-- Check the most recent registration
SELECT
  id,
  team_name,
  created_at,
  advisor_email
FROM public.registrations
ORDER BY created_at DESC
LIMIT 1;

-- Wait a moment for the trigger to fire, then check the HTTP response
-- Run this query after 2-3 seconds:
SELECT
  id,
  status_code,
  content::text as response,
  created
FROM net._http_response
ORDER BY created DESC
LIMIT 3;
