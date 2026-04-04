#!/bin/bash
set -e

STRIPE_SECRET_KEY=$(grep '^STRIPE_SECRET_KEY=' .env.local | cut -d '=' -f 2- | tr -d '\r')

echo "Setting New Prices as Default..."
stripe products update prod_TrEDGyFGixLAGr -d default_price=price_1TBecoCgA44aD4Au7kB7PSbu --api-key $STRIPE_SECRET_KEY
stripe products update prod_TrEO6P7sEbnQdx -d default_price=price_1TBecqCgA44aD4AuWrq9cKQ5 --api-key $STRIPE_SECRET_KEY
stripe products update prod_TrEXhXNOXwMUrl -d default_price=price_1TBecrCgA44aD4AujIPLUCMZ --api-key $STRIPE_SECRET_KEY

echo "Deactivating Old Default Prices..."
stripe prices update price_1StVkdCgA44aD4AuyTLDeZwE -d active=false --api-key $STRIPE_SECRET_KEY
stripe prices update price_1StVvsCgA44aD4Au3c8ZJpyg -d active=false --api-key $STRIPE_SECRET_KEY
stripe prices update price_1StW4NCgA44aD4AuoaCg40qZ -d active=false --api-key $STRIPE_SECRET_KEY

echo "Done!"
