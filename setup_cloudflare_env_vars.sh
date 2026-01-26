#!/bin/bash
# Script to configure Cloudflare Pages Environment Variables via API
# This sets build-time variables (not runtime secrets)

ACCOUNT_ID="34a3e90dabdb6c10eb33f37259fafca4"
PROJECT_NAME="official-geotapp-website"

# Get Cloudflare API Token from wrangler config
# If this fails, you need to create an API Token with "Cloudflare Pages:Edit" permission
# from https://dash.cloudflare.com/profile/api-tokens

echo "🔧 Configuring Cloudflare Pages Environment Variables..."
echo "Account: $ACCOUNT_ID"
echo "Project: $PROJECT_NAME"
echo ""

# Note: We need to use Cloudflare API to set environment variables
# wrangler CLI only supports secrets (runtime), not env vars (build-time)

# Array of environment variables to set
declare -A ENV_VARS=(
  ["NEXT_PUBLIC_STRIPE_PRICE_FLOW_START_MONTHLY"]="price_1StVkdCgA44aD4AuyTLDeZwE"
  ["NEXT_PUBLIC_STRIPE_PRICE_FLOW_START_ANNUAL"]="price_1StVlrCgA44aD4AunKfs9lb7"
  ["NEXT_PUBLIC_STRIPE_PRICE_FLOW_PRO_MONTHLY"]="price_1StVvsCgA44aD4Au3c8ZJpyg"
  ["NEXT_PUBLIC_STRIPE_PRICE_FLOW_PRO_ANNUAL"]="price_1StW2pCgA44aD4AudAJ2ZLlD"
  ["NEXT_PUBLIC_STRIPE_PRICE_FLOW_ELITE_MONTHLY"]="price_1StW4NCgA44aD4AuoaCg40qZ"
  ["NEXT_PUBLIC_STRIPE_PRICE_FLOW_ELITE_ANNUAL"]="price_1StW5GCgA44aD4AuftXBOMSb"
  ["NEXT_PUBLIC_STRIPE_PRICE_FLOW_FOUNDER_ONETIME"]="price_1StW6YCgA44aD4Au09sY1UH2"
  ["NEXT_PUBLIC_STRIPE_PRICE_FLOW_EXTRA_USER_MONTHLY"]="price_1StW6yCgA44aD4AuvAjSWGt1"
  ["NEXT_PUBLIC_STRIPE_PRICE_TIMETRACKER_EXTRA_USER_MONTHLY"]="price_1StW7LCgA44aD4Au9VAr3k1l"
)

echo "❌ ERROR: Cloudflare API requires manual configuration"
echo ""
echo "The Cloudflare API for Pages environment variables requires:"
echo "1. An API Token with 'Cloudflare Pages:Edit' permission"
echo "2. The wrangler OAuth token has only read permissions"
echo ""
echo "📋 SOLUTION: Configure manually via Dashboard"
echo ""
echo "1. Open: https://dash.cloudflare.com/$ACCOUNT_ID/pages/view/$PROJECT_NAME/settings/environment-variables"
echo ""
echo "2. Click 'Add variable' for each of the following (Production environment):"
echo ""

for key in "${!ENV_VARS[@]}"; do
  echo "   Variable: $key"
  echo "   Value: ${ENV_VARS[$key]}"
  echo "   Environment: Production ✓"
  echo ""
done

echo "3. Click 'Save'"
echo "4. Go to Deployments → Retry deployment on 'a5a177f'"
echo ""
echo "✨ After saving, the new build will include these variables!"
