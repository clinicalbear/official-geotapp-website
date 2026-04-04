#!/bin/bash
set -e
STRIPE_SECRET_KEY=$(grep '^STRIPE_SECRET_KEY=' .env.local | cut -d '=' -f 2- | tr -d '\r')

echo "Active Prices for SOLO (prod_TrEDGyFGixLAGr):"
stripe prices list --product prod_TrEDGyFGixLAGr --active --api-key $STRIPE_SECRET_KEY | grep -E '"id"|"nickname"'

echo "Active Prices for TEAM (prod_TrEO6P7sEbnQdx):"
stripe prices list --product prod_TrEO6P7sEbnQdx --active --api-key $STRIPE_SECRET_KEY | grep -E '"id"|"nickname"'

echo "Active Prices for BUSINESS (prod_TrEXhXNOXwMUrl):"
stripe prices list --product prod_TrEXhXNOXwMUrl --active --api-key $STRIPE_SECRET_KEY | grep -E '"id"|"nickname"'
