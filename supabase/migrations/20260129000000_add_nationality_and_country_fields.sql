-- Add nationality and country of residence fields for all team members
-- This supports international students and those residing outside Malaysia

-- Member 1
ALTER TABLE public.registrations 
ADD COLUMN member1_nationality TEXT NOT NULL DEFAULT 'Malaysian',
ADD COLUMN member1_country_of_residence TEXT NOT NULL DEFAULT 'Malaysia';

-- Member 2
ALTER TABLE public.registrations 
ADD COLUMN member2_nationality TEXT NOT NULL DEFAULT 'Malaysian',
ADD COLUMN member2_country_of_residence TEXT NOT NULL DEFAULT 'Malaysia';

-- Member 3
ALTER TABLE public.registrations 
ADD COLUMN member3_nationality TEXT NOT NULL DEFAULT 'Malaysian',
ADD COLUMN member3_country_of_residence TEXT NOT NULL DEFAULT 'Malaysia';

-- Member 4
ALTER TABLE public.registrations 
ADD COLUMN member4_nationality TEXT NOT NULL DEFAULT 'Malaysian',
ADD COLUMN member4_country_of_residence TEXT NOT NULL DEFAULT 'Malaysia';

-- Remove defaults after adding columns (for future inserts, these should be explicitly provided)
ALTER TABLE public.registrations 
ALTER COLUMN member1_nationality DROP DEFAULT,
ALTER COLUMN member1_country_of_residence DROP DEFAULT,
ALTER COLUMN member2_nationality DROP DEFAULT,
ALTER COLUMN member2_country_of_residence DROP DEFAULT,
ALTER COLUMN member3_nationality DROP DEFAULT,
ALTER COLUMN member3_country_of_residence DROP DEFAULT,
ALTER COLUMN member4_nationality DROP DEFAULT,
ALTER COLUMN member4_country_of_residence DROP DEFAULT;
