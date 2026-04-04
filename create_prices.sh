#!/bin/bash
set -e

STRIPE_SECRET_KEY=$(grep '^STRIPE_SECRET_KEY=' .env.local | cut -d '=' -f 2- | tr -d '\r')

echo "Creating SOLO Monthly..."
SOLO_MONTHLY=$(stripe prices create --api-key $STRIPE_SECRET_KEY --product prod_TrEDGyFGixLAGr --unit-amount 2900 --currency eur -d "recurring[interval]=month" -d "recurring[trial_period_days]=14" -d "tax_behavior=exclusive" --nickname "GeoTapp Flow Solo Mensile (con Trial)" -d "metadata[license_type]=SOLO" -d "metadata[seats]=1" -d "metadata[product_key]=GEOTAPP_FLOW" --live | grep -oP '"id": "\Kprice_[^"]+')
echo "SOLO_MONTHLY=$SOLO_MONTHLY"

echo "Creating SOLO Annual..."
SOLO_ANNUAL=$(stripe prices create --api-key $STRIPE_SECRET_KEY --product prod_TrEDGyFGixLAGr --unit-amount 29000 --currency eur -d "recurring[interval]=year" -d "recurring[trial_period_days]=14" -d "tax_behavior=exclusive" --nickname "GeoTapp Flow Solo Annuale (con Trial)" -d "metadata[license_type]=SOLO" -d "metadata[seats]=1" -d "metadata[product_key]=GEOTAPP_FLOW" --live | grep -oP '"id": "\Kprice_[^"]+')
echo "SOLO_ANNUAL=$SOLO_ANNUAL"

echo "Creating TEAM Monthly..."
TEAM_MONTHLY=$(stripe prices create --api-key $STRIPE_SECRET_KEY --product prod_TrEO6P7sEbnQdx --unit-amount 7900 --currency eur -d "recurring[interval]=month" -d "recurring[trial_period_days]=14" -d "tax_behavior=exclusive" --nickname "GeoTapp Flow Team Mensile (con Trial)" -d "metadata[license_type]=TEAM" -d "metadata[seats]=5" -d "metadata[product_key]=GEOTAPP_FLOW" --live | grep -oP '"id": "\Kprice_[^"]+')
echo "TEAM_MONTHLY=$TEAM_MONTHLY"

echo "Creating TEAM Annual..."
TEAM_ANNUAL=$(stripe prices create --api-key $STRIPE_SECRET_KEY --product prod_TrEO6P7sEbnQdx --unit-amount 79000 --currency eur -d "recurring[interval]=year" -d "recurring[trial_period_days]=14" -d "tax_behavior=exclusive" --nickname "GeoTapp Flow Team Annuale (con Trial)" -d "metadata[license_type]=TEAM" -d "metadata[seats]=5" -d "metadata[product_key]=GEOTAPP_FLOW" --live | grep -oP '"id": "\Kprice_[^"]+')
echo "TEAM_ANNUAL=$TEAM_ANNUAL"

echo "Creating BUSINESS Monthly..."
BIZ_MONTHLY=$(stripe prices create --api-key $STRIPE_SECRET_KEY --product prod_TrEXhXNOXwMUrl --unit-amount 14900 --currency eur -d "recurring[interval]=month" -d "recurring[trial_period_days]=14" -d "tax_behavior=exclusive" --nickname "GeoTapp Flow Business Mensile (con Trial)" -d "metadata[license_type]=BUSINESS" -d "metadata[seats]=1000" -d "metadata[product_key]=GEOTAPP_FLOW" --live | grep -oP '"id": "\Kprice_[^"]+')
echo "BIZ_MONTHLY=$BIZ_MONTHLY"

echo "Creating BUSINESS Annual..."
BIZ_ANNUAL=$(stripe prices create --api-key $STRIPE_SECRET_KEY --product prod_TrEXhXNOXwMUrl --unit-amount 149000 --currency eur -d "recurring[interval]=year" -d "recurring[trial_period_days]=14" -d "tax_behavior=exclusive" --nickname "GeoTapp Flow Business Annuale (con Trial)" -d "metadata[license_type]=BUSINESS" -d "metadata[seats]=1000" -d "metadata[product_key]=GEOTAPP_FLOW" --live | grep -oP '"id": "\Kprice_[^"]+')
echo "BIZ_ANNUAL=$BIZ_ANNUAL"

echo ""
echo "Values to update in .env.local:"
echo "NEXT_PUBLIC_STRIPE_PRICE_FLOW_START_MONTHLY=$SOLO_MONTHLY"
echo "NEXT_PUBLIC_STRIPE_PRICE_FLOW_START_ANNUAL=$SOLO_ANNUAL"
echo "NEXT_PUBLIC_STRIPE_PRICE_FLOW_PRO_MONTHLY=$TEAM_MONTHLY"
echo "NEXT_PUBLIC_STRIPE_PRICE_FLOW_PRO_ANNUAL=$TEAM_ANNUAL"
echo "NEXT_PUBLIC_STRIPE_PRICE_FLOW_ELITE_MONTHLY=$BIZ_MONTHLY"
echo "NEXT_PUBLIC_STRIPE_PRICE_FLOW_ELITE_ANNUAL=$BIZ_ANNUAL"
