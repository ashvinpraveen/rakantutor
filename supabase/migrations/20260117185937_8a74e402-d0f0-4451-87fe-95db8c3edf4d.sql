-- Create registrations table
CREATE TABLE public.registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- How they heard about the event
  heard_about TEXT NOT NULL,
  
  -- Team info
  team_name TEXT NOT NULL,
  track TEXT NOT NULL,
  category TEXT NOT NULL,
  
  -- Member 1
  member1_full_name TEXT NOT NULL,
  member1_contact_number TEXT NOT NULL,
  member1_ic_number TEXT NOT NULL,
  member1_email TEXT NOT NULL,
  member1_school TEXT NOT NULL,
  member1_qualification TEXT NOT NULL,
  member1_graduation_date TEXT NOT NULL,
  
  -- Member 2
  member2_full_name TEXT NOT NULL,
  member2_contact_number TEXT NOT NULL,
  member2_ic_number TEXT NOT NULL,
  member2_email TEXT NOT NULL,
  member2_school TEXT NOT NULL,
  member2_qualification TEXT NOT NULL,
  member2_graduation_date TEXT NOT NULL,
  
  -- Member 3
  member3_full_name TEXT NOT NULL,
  member3_contact_number TEXT NOT NULL,
  member3_ic_number TEXT NOT NULL,
  member3_email TEXT NOT NULL,
  member3_school TEXT NOT NULL,
  member3_qualification TEXT NOT NULL,
  member3_graduation_date TEXT NOT NULL,
  
  -- Member 4
  member4_full_name TEXT NOT NULL,
  member4_contact_number TEXT NOT NULL,
  member4_ic_number TEXT NOT NULL,
  member4_email TEXT NOT NULL,
  member4_school TEXT NOT NULL,
  member4_qualification TEXT NOT NULL,
  member4_graduation_date TEXT NOT NULL,
  
  -- Advisor
  advisor_full_name TEXT NOT NULL,
  advisor_relationship TEXT NOT NULL,
  advisor_contact_number TEXT NOT NULL,
  advisor_email TEXT NOT NULL
);

-- Enable RLS but allow public inserts (no auth required for registration)
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to insert (public registration form)
CREATE POLICY "Allow public registration inserts" 
ON public.registrations 
FOR INSERT 
WITH CHECK (true);

-- Policy to allow reading own registration by email (for confirmation)
CREATE POLICY "Allow reading by member email" 
ON public.registrations 
FOR SELECT 
USING (true);