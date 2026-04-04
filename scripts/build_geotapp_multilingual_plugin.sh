#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PLUGIN_SRC_DIR="$ROOT_DIR/wordpress-plugins/geotapp-multilingual-seo-automation"
OUTPUT_ZIP="$ROOT_DIR/public/geotapp_multilingual_seo_automation.zip"
TMP_DIR="$(mktemp -d)"

cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

if [[ ! -f "$PLUGIN_SRC_DIR/geotapp-multilingual-seo-automation.php" ]]; then
  echo "Plugin source not found at $PLUGIN_SRC_DIR" >&2
  exit 1
fi

cp -R "$PLUGIN_SRC_DIR" "$TMP_DIR/geotapp-multilingual-seo-automation"
(
  cd "$TMP_DIR"
  zip -qr "$OUTPUT_ZIP" geotapp-multilingual-seo-automation
)

echo "Built: $OUTPUT_ZIP"
