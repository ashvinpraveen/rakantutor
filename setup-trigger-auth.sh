#!/bin/bash

# Setup Script for Database Trigger Authentication
# This script helps you configure the database to allow the trigger to authenticate with Edge Functions

echo "🔧 Setting up Database Trigger Authentication"
echo "=============================================="
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo "The database trigger needs your Supabase service role key to authenticate"
echo "when calling the Edge Function."
echo ""

# Check if SUPABASE_SERVICE_ROLE_KEY is in secrets
echo "Checking Supabase secrets..."
if supabase secrets list 2>&1 | grep -q "SUPABASE_SERVICE_ROLE_KEY"; then
    echo -e "${GREEN}✓${NC} SUPABASE_SERVICE_ROLE_KEY is set in Edge Function secrets"
    echo ""
    echo -e "${YELLOW}Note:${NC} The service role key is stored in Edge Function secrets,"
    echo "but we need to set it in the DATABASE settings as well."
else
    echo -e "${YELLOW}⚠${NC} SUPABASE_SERVICE_ROLE_KEY not found in Edge Function secrets"
fi
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${BLUE}STEP 1:${NC} Get your Service Role Key"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. Go to: Supabase Dashboard → Settings → API"
echo "2. Find 'service_role' (marked as 'secret')"
echo "3. Copy the key (starts with 'eyJ...')"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${BLUE}STEP 2:${NC} Run this SQL in Supabase SQL Editor"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo -e "${YELLOW}Copy and paste this into Supabase Dashboard → SQL Editor:${NC}"
echo ""
echo "ALTER DATABASE postgres SET app.settings.service_role_key = 'YOUR_SERVICE_ROLE_KEY_HERE';"
echo ""
echo -e "${RED}⚠ IMPORTANT:${NC} Replace 'YOUR_SERVICE_ROLE_KEY_HERE' with your actual service role key!"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${BLUE}STEP 3:${NC} Test the Configuration"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "After setting the service role key, test it by submitting a registration:"
echo ""
echo "1. Submit a test registration via your website form, OR"
echo "2. Run the test SQL script: test-registration.sql in SQL Editor"
echo ""
echo "Then verify:"
echo "  • Check Google Sheets for new row"
echo "  • Check email inbox for confirmation"
echo "  • Check Edge Function logs:"
echo "    supabase functions logs handle-registration"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${BLUE}Alternative:${NC} Quick SQL File"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "A pre-made SQL file is available:"
echo "  configure-database-settings.sql"
echo ""
echo "Edit it with your service role key, then run it in SQL Editor."
echo ""

echo "✅ Setup guide complete!"
echo ""
echo "Questions? Check the troubleshooting guide:"
echo "  docs/troubleshooting-registration.md"
