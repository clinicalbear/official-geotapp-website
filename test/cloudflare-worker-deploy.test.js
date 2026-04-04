// Overview: cloudflare-worker-deploy.test.js
// Module: test
// Purpose: documents intent and boundaries to speed up maintenance and reviews.
// Safety: keep permissions, tenancy isolation, and API/data compatibility unchanged unless explicitly required.

// Documentation Contract:
// - Boundaries: this file may orchestrate UI/data flow, but it must keep business invariants intact.
// - Security: preserve role/tenant checks and never broaden access scope implicitly.
// - Data Integrity: keep field names and payload schemas stable unless a migration is planned.
// - Compatibility: companyId/tenantId fallbacks may still be required for legacy records.
// - Performance: avoid extra roundtrips in hot paths and prefer incremental updates.
// - Error Handling: prefer graceful degradation over hard-fail in non-critical rendering paths.
// - UX Stability: keep deterministic ordering/filtering to avoid visual flicker/regressions.
// - Testing: update module tests when changing control flow, query composition, or serialization.
// - Operations: changes touching auth/rules/functions must stay aligned across apps.
// - Maintainability: keep additive changes whenever possible to reduce rollback risk.


const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const rootDir = path.join(__dirname, '..');

function read(...parts) {
  return fs.readFileSync(path.join(rootDir, ...parts), 'utf8');
}

test('opennext cloudflare config file exists for non-interactive worker builds', () => {
  const configPath = path.join(rootDir, 'open-next.config.ts');

  assert.equal(fs.existsSync(configPath), true);
  assert.match(read('open-next.config.ts'), /defineCloudflareConfig/);
});

test('next config no longer forces static export for locale-aware worker deploys', () => {
  const nextConfig = read('next.config.mjs');

  assert.doesNotMatch(nextConfig, /output:\s*'export'/);
});

test('package scripts build and deploy the Cloudflare worker runtime', () => {
  const pkg = JSON.parse(read('package.json'));

  assert.match(pkg.scripts.build, /opennextjs-cloudflare build/);
  assert.match(pkg.scripts.deploy, /wrangler deploy -c wrangler\.jsonc/);
  assert.ok(pkg.scripts['deploy:linux'], 'missing deploy:linux script');
  assert.match(pkg.scripts['deploy:linux'], /wrangler deploy -c wrangler\.jsonc/);
  assert.match(pkg.devDependencies.wrangler, /\^4\.(5[9-9]|[6-9]\d)\./);
});

test('wrangler config binds the worker to the public geotapp domains', () => {
  const wranglerConfig = read('wrangler.jsonc');

  assert.match(wranglerConfig, /"routes"\s*:/);
  assert.match(wranglerConfig, /"pattern"\s*:\s*"geotapp\.com\/\*"/);
  assert.match(wranglerConfig, /"pattern"\s*:\s*"www\.geotapp\.com\/\*"/);
});
