# Google Sheets Header Setup

## Instructions

1. **Open your Google Sheet:** [NAIC 2026 Registrations](https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit)

2. **Clear existing data:**
   - Select all rows with old data (rows 2 onwards)
   - Right-click → Delete rows (or just clear them if you want to keep for reference)

3. **Set up the correct headers in Row 1:**

Copy and paste these headers into row 1 of your "Registrations" sheet:

```
Registration Date	Team Name	Track	Category	Heard About	Heard About (Other)	Member 1 - Name	Member 1 - Email	Member 1 - Nationality	Member 1 - Country of Residence	Member 1 - Phone	Member 1 - IC Number	Member 1 - School	Member 1 - Qualification	Member 1 - Graduation Date	Member 2 - Name	Member 2 - Email	Member 2 - Nationality	Member 2 - Country of Residence	Member 2 - Phone	Member 2 - IC Number	Member 2 - School	Member 2 - Qualification	Member 2 - Graduation Date	Member 3 - Name	Member 3 - Email	Member 3 - Nationality	Member 3 - Country of Residence	Member 3 - Phone	Member 3 - IC Number	Member 3 - School	Member 3 - Qualification	Member 3 - Graduation Date	Member 4 - Name	Member 4 - Email	Member 4 - Nationality	Member 4 - Country of Residence	Member 4 - Phone	Member 4 - IC Number	Member 4 - School	Member 4 - Qualification	Member 4 - Graduation Date	Advisor - Name	Advisor - Email	Advisor - Phone	Advisor - Relationship	Advisor - Relationship (Other)	Advisor - Relationship Details
```

## Column Breakdown (48 columns total: A-AV)

### Basic Info (Columns A-F)
- A: Registration Date (Timestamp)
- B: Team Name
- C: Track
- D: Category
- E: Heard About
- F: Heard About (Other)

### Member 1 (Columns G-O) - 9 fields
- G: Member 1 - Name
- H: Member 1 - Email
- I: Member 1 - Nationality
- J: Member 1 - Country of Residence
- K: Member 1 - Phone
- L: Member 1 - IC Number
- M: Member 1 - School
- N: Member 1 - Qualification
- O: Member 1 - Graduation Date

### Member 2 (Columns P-X) - 9 fields
- P: Member 2 - Name
- Q: Member 2 - Email
- R: Member 2 - Nationality
- S: Member 2 - Country of Residence
- T: Member 2 - Phone
- U: Member 2 - IC Number
- V: Member 2 - School
- W: Member 2 - Qualification
- X: Member 2 - Graduation Date

### Member 3 (Columns Y-AG) - 9 fields
- Y: Member 3 - Name
- Z: Member 3 - Email
- AA: Member 3 - Nationality
- AB: Member 3 - Country of Residence
- AC: Member 3 - Phone
- AD: Member 3 - IC Number
- AE: Member 3 - School
- AF: Member 3 - Qualification
- AG: Member 3 - Graduation Date

### Member 4 (Columns AH-AP) - 9 fields
- AH: Member 4 - Name
- AI: Member 4 - Email
- AJ: Member 4 - Nationality
- AK: Member 4 - Country of Residence
- AL: Member 4 - Phone
- AM: Member 4 - IC Number
- AN: Member 4 - School
- AO: Member 4 - Qualification
- AP: Member 4 - Graduation Date

### Advisor (Columns AQ-AV) - 6 fields
- AQ: Advisor - Name
- AR: Advisor - Email
- AS: Advisor - Phone
- AT: Advisor - Relationship
- AU: Advisor - Relationship (Other)
- AV: Advisor - Relationship Details

## After Setup

Once you've set up the headers:

1. **Test the system:**
   - Submit a new registration via your website
   - Check that it appears correctly in the sheet
   - Data should be in the correct columns now

2. **Verify:**
   - ✅ All 48 columns have headers
   - ✅ Headers match the field names above
   - ✅ New registrations appear in the correct columns

## What Changed from Old Format?

**Added fields (new in the current system):**
- Heard About (Other) - for "Other" option details
- Member Nationality (for all 4 members)
- Member Country of Residence (for all 4 members)
- Advisor Relationship (Other) - for "Other" option details
- Advisor Relationship Details - additional context

**Reordered fields:**
- Email and Nationality/Country fields are now together for each member
- Contact number comes after nationality fields instead of before
