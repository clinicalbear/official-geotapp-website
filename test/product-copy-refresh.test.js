// Overview: product-copy-refresh.test.js
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

test('Flow and TimeTracker product pages include refreshed operational messaging', () => {
  const flowPage = read('src', 'app', 'products', 'geotapp-flow', 'page.tsx');
  const trackerPage = read('src', 'app', 'products', 'geotapp-app', 'page.tsx');

  assert.match(flowPage, /centro operativo e gestionale|management and operational hub/i);
  assert.match(flowPage, /discussioni interne|internal disputes/i);
  assert.match(flowPage, /prove difendibili|defensible proof/i);

  assert.match(trackerPage, /lavoro verificabile|verifiable field work/i);
  assert.match(trackerPage, /garanzia di veridicita|proof the client can trust/i);
  assert.match(trackerPage, /meno contestazioni|fewer disputes/i);
});
