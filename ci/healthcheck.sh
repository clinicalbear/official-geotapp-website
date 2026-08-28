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
  # Real success: 200 + the site actually rendered + its CSS/JS chunks resolve.
  # A stale-HTML-cache hit right after deploy still returns 200 + "geotapp" in
  # the body (the text renders fine) while pointing at chunk hashes the new
  # deploy already replaced -> 404 -> unstyled page with giant stacked logos
  # until the visitor reloads. Checking the string alone missed this every time.
  # Note: use here-strings (<<<), never `echo "$body" | grep`, anywhere on $body.
  # Piping a large string into `grep -q` races an early match (which closes the
  # pipe) against `echo` still writing it: under `pipefail` the SIGPIPE echo
  # gets from the closed pipe outranks grep's own (successful) exit status, so
  # the whole condition silently reads as "no match" on a perfectly healthy page.
  if [ "$code" = "200" ] && grep -qi 'geotapp' <<< "$body"; then
    # Only the render-blocking stylesheets matter for this check: the body also
    # embeds route-prefetch manifests referencing JS chunks for OTHER pages that
    # can legitimately 404 (lazy/speculative, never render-blocking) without any
    # visible breakage. Checking those too gave false failures on a healthy page.
    local rel asset_url asset_code broken=0
    for rel in $(grep -oE '<link[^>]*rel="stylesheet"[^>]*>' <<< "$body" | grep -oE 'href="[^"]+"' | sed -E 's/href="([^"]+)"/\1/' | sort -u); do
      asset_url="$(echo "$url" | sed -E 's#(https?://[^/]+).*#\1#')${rel}"
      asset_code="$(curl -s -o /dev/null -w '%{http_code}' --max-time 10 "$asset_url" 2>/dev/null || true)"
      if [ "$asset_code" != "200" ]; then
        echo "   $url -> stale HTML: stylesheet $rel returned ${asset_code:-none} (expected 200)"
        broken=1
      fi
    done
    [ "$broken" = "0" ] && return 0
    return 1
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
