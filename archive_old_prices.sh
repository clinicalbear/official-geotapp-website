#!/bin/bash
set -e
export STRIPE_SECRET_KEY=$(grep '^STRIPE_SECRET_KEY=' .env.local | cut -d '=' -f 2- | tr -d '\r')

VALID_PRICES=(
  "price_1TBecoCgA44aD4Au7kB7PSbu"
  "price_1TBecpCgA44aD4AuX2P6DwMs"
  "price_1TBecqCgA44aD4AuWrq9cKQ5"
  "price_1TBecqCgA44aD4AuRa128057"
  "price_1TBecrCgA44aD4AujIPLUCMZ"
  "price_1TBecsCgA44aD4AuSa14XBBG"
)

PRODUCTS=(
  "prod_TrEDGyFGixLAGr"
  "prod_TrEO6P7sEbnQdx"
  "prod_TrEXhXNOXwMUrl"
)

for PROD in "${PRODUCTS[@]}"; do
  echo "Checking product $PROD..."
  # Get all active prices for the product
  PRICES=$(stripe prices list --product $PROD --active --api-key $STRIPE_SECRET_KEY | grep -oP '"id": "\Kprice_[^"]+' || true)
  
  for PRICE in $PRICES; do
    IS_VALID=0
    for V_PRICE in "${VALID_PRICES[@]}"; do
      if [ "$PRICE" == "$V_PRICE" ]; then
        IS_VALID=1
        break
      fi
    done
    
    if [ $IS_VALID -eq 0 ]; then
      echo "Archiving old price: $PRICE"
      stripe prices update $PRICE -d active=false --api-key $STRIPE_SECRET_KEY > /dev/null
    else
      echo "Keeping new price: $PRICE"
    fi
  done
done

echo "Done!"
