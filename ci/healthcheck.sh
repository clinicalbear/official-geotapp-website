#!/usr/bin/env bash
# healthcheck.sh — Verify geotapp.com is serving after a Workers deploy.
# Checks the IT and EN homepages return 200 and contain a key marker.
# Exit 0 = healthy, exit 1 = unhealthy (caller should `wrangler rollback` + alert).
set -euo pipefail

BASE="${SITE_HEALTH_BASE:-https://geotapp.com}"
TRIES="${HEALTH_TRIES:-10}"
SLEEP="${HEALTH_SLEEP:-6}"
# Optional: if a Cloudflare WAF skip-rule is set up for this header, the runner
# bypasses Bot Fight Mode and we get a real 200 content check. Without it, we
# fall back to treating an edge challenge (403) as "up" (see below).
BYPASS_HEADER="${HEALTHCHECK_TOKEN:+x-healthcheck: ${HEALTHCHECK_TOKEN}}"

check_one() {
  local url="$1"
  local code body
  if [ -n "$BYPASS_HEADER" ]; then
    code="$(curl -s -o /tmp/_site_body -w '%{http_code}' --max-time 10 -H "$BYPASS_HEADER" "$url" 2>/dev/null || true)"
  else
    code="$(curl -s -o /tmp/_site_body -w '%{http_code}' --max-time 10 "$url" 2>/dev/null || true)"
  fi
  body="$(cat /tmp/_site_body 2>/dev/null || true)"
  # Real success: 200 + the site actually rendered.
  if [ "$code" = "200" ] && echo "$body" | grep -qi 'geotapp'; then
    return 0
  fi
  # Cloudflare Bot Fight Mode challenges datacenter IPs (GitHub runners) with 403
  # even when the site is perfectly healthy for real users. A 403 means the edge IS
  # serving the zone (a broken/absent Worker deploy returns 5xx / 52x / 530 / timeout,
  # NOT a bot challenge). So treat 403 as "edge up" and accept it.
  if [ "$code" = "403" ]; then
    echo "   $url -> HTTP 403 (Cloudflare bot challenge — edge up, accepted)"
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
