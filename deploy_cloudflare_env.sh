#!/bin/bash
# =====================================================
# Deploy Environment Variables to Cloudflare Pages
# Configura i nuovi Stripe Price IDs su Cloudflare
# =====================================================

set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🌐 Cloudflare Pages - Environment Variables Setup${NC}"
echo "===================================================="
echo ""

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    echo -e "${YELLOW}⚠️  Wrangler CLI not found. Installing...${NC}"
    npm install -g wrangler
fi

# Login to Cloudflare (if not already logged in)
echo -e "${BLUE}🔐 Checking Cloudflare authentication...${NC}"
wrangler whoami || {
    echo -e "${YELLOW}Please login to Cloudflare:${NC}"
    wrangler login
}

echo ""
echo -e "${GREEN}✅ Authenticated successfully!${NC}"
echo ""

# Project name (adjust if different)
PROJECT_NAME="geotapp-site"

echo -e "${BLUE}📝 Setting environment variables for project: ${PROJECT_NAME}${NC}"
echo ""

# Function to set environment variable
set_env_var() {
    local var_name=$1
    local var_value=$2

    echo -e "${YELLOW}Setting ${var_name}...${NC}"
    echo "$var_value" | wrangler pages secret put "$var_name" --project-name="$PROJECT_NAME"
}

# Set all Stripe Price IDs
echo -e "${BLUE}💳 Setting Stripe Price IDs...${NC}"
echo ""

# START Plan
set_env_var "NEXT_PUBLIC_STRIPE_PRICE_FLOW_START_MONTHLY" "price_1StVkdCgA44aD4AuyTLDeZwE"
set_env_var "NEXT_PUBLIC_STRIPE_PRICE_FLOW_START_ANNUAL" "price_1StVlrCgA44aD4AunKfs9lb7"

# PRO Plan
set_env_var "NEXT_PUBLIC_STRIPE_PRICE_FLOW_PRO_MONTHLY" "price_1StVvsCgA44aD4Au3c8ZJpyg"
set_env_var "NEXT_PUBLIC_STRIPE_PRICE_FLOW_PRO_ANNUAL" "price_1StW2pCgA44aD4AudAJ2ZLlD"

# ELITE Plan
set_env_var "NEXT_PUBLIC_STRIPE_PRICE_FLOW_ELITE_MONTHLY" "price_1StW4NCgA44aD4AuoaCg40qZ"
set_env_var "NEXT_PUBLIC_STRIPE_PRICE_FLOW_ELITE_ANNUAL" "price_1StW5GCgA44aD4AuftXBOMSb"

# FOUNDER Plan
set_env_var "NEXT_PUBLIC_STRIPE_PRICE_FLOW_FOUNDER_ONETIME" "price_1StW6YCgA44aD4Au09sY1UH2"

# Extra Users
set_env_var "NEXT_PUBLIC_STRIPE_PRICE_FLOW_EXTRA_USER_MONTHLY" "price_1StW6yCgA44aD4AuvAjSWGt1"
set_env_var "NEXT_PUBLIC_STRIPE_PRICE_TIMETRACKER_EXTRA_USER_MONTHLY" "price_1StW7LCgA44aD4Au9VAr3k1l"

echo ""
echo -e "${GREEN}✅ All environment variables set successfully!${NC}"
echo ""
echo -e "${BLUE}🚀 Triggering redeploy...${NC}"
echo ""

# Trigger a redeploy (this will use the new env vars)
echo -e "${YELLOW}Note: You need to trigger a redeploy manually via Cloudflare Dashboard${NC}"
echo -e "${YELLOW}Or push a new commit to your repository to trigger auto-deploy${NC}"
echo ""
echo -e "${GREEN}🌐 Cloudflare Dashboard: https://dash.cloudflare.com/${NC}"
echo ""
echo -e "${GREEN}✨ Setup complete!${NC}"
