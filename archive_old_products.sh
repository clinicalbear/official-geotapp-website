#!/bin/bash
set -e
export STRIPE_SECRET_KEY=$(grep '^STRIPE_SECRET_KEY=' .env.local | cut -d '=' -f 2- | tr -d '\r')

echo "Archiving old Flow products from December 2025..."

# GeoTapp FLOW Lifetime
stripe products update prod_TbtJpp4yQw10gT -d active=false --api-key $STRIPE_SECRET_KEY

# GeoTapp FLOW Business
stripe products update prod_TbtISY2Ii2IhNU -d active=false --api-key $STRIPE_SECRET_KEY

# GeoTapp FLOW Team 
stripe products update prod_TbtIfl070qUQbp -d active=false --api-key $STRIPE_SECRET_KEY

# GeoTapp FLOW Solo
stripe products update prod_TbtHtkt70FHRs2 -d active=false --api-key $STRIPE_SECRET_KEY

echo "Archived old products successfully!"
