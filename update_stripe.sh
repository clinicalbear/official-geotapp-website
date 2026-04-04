#!/bin/bash
set -e

STRIPE_SECRET_KEY=$(grep '^STRIPE_SECRET_KEY=' .env.local | cut -d '=' -f 2- | tr -d '\r')

echo "Updating Product Names..."
stripe products update prod_TrEDGyFGixLAGr --name="GeoTapp Flow Solo" --api-key $STRIPE_SECRET_KEY
stripe products update prod_TrEO6P7sEbnQdx --name="GeoTapp Flow Team" --api-key $STRIPE_SECRET_KEY
stripe products update prod_TrEXhXNOXwMUrl --name="GeoTapp Flow Business" --api-key $STRIPE_SECRET_KEY

echo "Deactivating old prices..."
stripe prices update price_1StVkdCgA44aD4AuyTLDeZwE -d active=false --api-key $STRIPE_SECRET_KEY || true
stripe prices update price_1StVlrCgA44aD4AunKfs9lb7 -d active=false --api-key $STRIPE_SECRET_KEY || true
stripe prices update price_1StVvsCgA44aD4Au3c8ZJpyg -d active=false --api-key $STRIPE_SECRET_KEY || true
stripe prices update price_1StW2pCgA44aD4AudAJ2ZLlD -d active=false --api-key $STRIPE_SECRET_KEY || true
stripe prices update price_1StW4NCgA44aD4AuoaCg40qZ -d active=false --api-key $STRIPE_SECRET_KEY || true
stripe prices update price_1StW5GCgA44aD4AuftXBOMSb -d active=false --api-key $STRIPE_SECRET_KEY || true

echo "Done!"
