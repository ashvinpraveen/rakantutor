#!/bin/bash

# Script to apply service role key to migration and deploy

echo "🔑 Applying Service Role Key to Trigger Migration"
echo "=================================================="
echo ""

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

MIGRATION_FILE="supabase/migrations/20260129053919_use_hardcoded_service_role_key.sql"

echo -e "${YELLOW}Step 1: Get your Service Role Key${NC}"
echo "------------------------------------------------"
echo "1. Go to: https://supabase.com/dashboard/project/_/settings/api"
echo "2. Find the 'service_role' key (marked as 'secret')"
echo "3. Click to reveal and copy it"
echo ""
echo -e "${RED}IMPORTANT:${NC} The key starts with 'eyJ...'"
echo ""

read -p "Paste your service role key here: " SERVICE_ROLE_KEY

if [[ -z "$SERVICE_ROLE_KEY" ]]; then
    echo -e "${RED}✗${NC} No key provided. Exiting."
    exit 1
fi

if [[ ! "$SERVICE_ROLE_KEY" =~ ^eyJ ]]; then
    echo -e "${YELLOW}⚠${NC} Warning: The key doesn't start with 'eyJ'. Are you sure this is correct?"
    read -p "Continue anyway? (y/N): " CONTINUE
    if [[ ! "$CONTINUE" =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo ""
echo -e "${YELLOW}Step 2: Updating migration file...${NC}"

# Update the migration file with the service role key
sed -i.bak "s|YOUR_SERVICE_ROLE_KEY_HERE|$SERVICE_ROLE_KEY|g" "$MIGRATION_FILE"

if grep -q "$SERVICE_ROLE_KEY" "$MIGRATION_FILE"; then
    echo -e "${GREEN}✓${NC} Migration file updated successfully"
    rm "${MIGRATION_FILE}.bak"
else
    echo -e "${RED}✗${NC} Failed to update migration file"
    mv "${MIGRATION_FILE}.bak" "$MIGRATION_FILE"
    exit 1
fi

echo ""
echo -e "${YELLOW}Step 3: Deploying migration...${NC}"

supabase db push

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ Success!${NC} The trigger now has the service role key."
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo -e "${BLUE}Next Steps:${NC}"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "1. Test the registration system:"
    echo "   • Submit a test registration on your website"
    echo "   • OR run: test-registration.sql in Supabase SQL Editor"
    echo ""
    echo "2. Verify it works:"
    echo "   • No 401 errors in Edge Function invocations"
    echo "   • Google Sheets gets updated"
    echo "   • Confirmation emails are sent"
    echo ""
    echo "3. Monitor logs:"
    echo "   supabase functions logs handle-registration"
    echo ""
else
    echo ""
    echo -e "${RED}✗${NC} Migration failed. Check the error above."
    exit 1
fi
