// Overview: bundle-localization.test.js
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

test('bundle pricing page derives the locale from the pathname and forwards it to the calculator', () => {
  const bundlePage = read('src', 'app', 'pricing', 'bundle', 'page.tsx');

  assert.match(bundlePage, /getLocaleFromPathname/);
  assert.match(bundlePage, /<BundleCalculator locale=\{currentLocale\} \/>/);
  assert.doesNotMatch(bundlePage, /locale=\"it\"/);
});

test('bundle calculator supports the shared locale model instead of an it-en only union', () => {
  const calculator = read('src', 'components', 'BundleCalculator.tsx');

  assert.match(calculator, /AppLocale/);
  assert.doesNotMatch(calculator, /locale\?: 'it' \| 'en'/);
});

test('legacy public pages use italian-only checks instead of english-only fallbacks', () => {
  const files = [
    ['src', 'app', 'pricing', 'page.tsx'],
    ['src', 'app', 'contact', 'page.tsx'],
    ['src', 'app', 'products', 'geotapp-flow', 'page.tsx'],
    ['src', 'app', 'products', 'geotapp-app', 'page.tsx'],
  ];

  for (const fileParts of files) {
    const source = read(...fileParts);
    assert.doesNotMatch(source, /const isEn = currentLocale === 'en';/);
  }
});
