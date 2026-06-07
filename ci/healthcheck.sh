#!/usr/bin/env bash
# healthcheck.sh — Verify geotapp.com is serving after a Workers deploy.
# Checks the IT and EN homepages return 200 and contain a key marker.
# Exit 0 = healthy, exit 1 = unhealthy (caller should `wrangler rollback` + alert).
set -euo pipefail

BASE="${SITE_HEALTH_BASE:-https://geotapp.com}"
TRIES="${HEALTH_TRIES:-10}"
SLEEP="${HEALTH_SLEEP:-6}"

check_one() {
  local url="$1"
  local code body
  code="$(curl -s -o /tmp/_site_body -w '%{http_code}' --max-time 10 "$url" 2>/dev/null || true)"
  body="$(cat /tmp/_site_body 2>/dev/null || true)"
  if [ "$code" = "200" ] && echo "$body" | grep -qi 'geotapp'; then
    return 0
  fi
  echo "   $url -> HTTP ${code:-none}"
  return 1
}

echo "🩺 Health-checking $BASE (/it/ and /en/)..."
for i in $(seq 1 "$TRIES"); do
  if check_one "$BASE/it/" && check_one "$BASE/en/"; then
    echo "✅ Site healthy (attempt $i)."
    exit 0
  fi
  echo "   attempt $i/$TRIES — not healthy yet"
  sleep "$SLEEP"
done

echo "❌ Site did not pass healthcheck in time." >&2
exit 1
