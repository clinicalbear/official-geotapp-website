// Overview: locale-site-routing.test.js
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

function exists(...parts) {
  return fs.existsSync(path.join(rootDir, ...parts));
}

test('localized route entrypoints exist for the main public pages', () => {
  const expectedFiles = [
    ['src', 'app', '[locale]', 'page.tsx'],
    ['src', 'app', '[locale]', 'pricing', 'page.tsx'],
    ['src', 'app', '[locale]', 'pricing', 'bundle', 'page.tsx'],
    ['src', 'app', '[locale]', 'contact', 'page.tsx'],
    ['src', 'app', '[locale]', 'products', 'geotapp-flow', 'page.tsx'],
    ['src', 'app', '[locale]', 'products', 'geotapp-app', 'page.tsx'],
    ['src', 'app', '[locale]', 'settori', 'page.tsx'],
    ['src', 'app', '[locale]', 'settori', 'installatori', 'page.tsx'],
    ['src', 'app', '[locale]', 'settori', 'pulizie', 'page.tsx'],
    ['src', 'app', '[locale]', 'settori', 'sicurezza', 'page.tsx'],
    ['src', 'app', '[locale]', 'chi-siamo', 'page.tsx'],
    ['src', 'app', '[locale]', 'guida', 'page.tsx'],
    ['src', 'app', '[locale]', 'download', 'page.tsx'],
    ['src', 'app', '[locale]', 'blog', 'page.tsx'],
    ['src', 'app', '[locale]', 'login', 'page.tsx'],
    ['src', 'app', '[locale]', 'success', 'page.tsx'],
    ['src', 'app', '[locale]', 'privacy', 'page.tsx'],
    ['src', 'app', '[locale]', 'terms', 'page.tsx'],
  ];

  for (const fileParts of expectedFiles) {
    assert.equal(exists(...fileParts), true, `Missing ${fileParts.join('/')}`);
  }
});

test('middleware resolves locale through shared helpers and preference cookie', () => {
  const middleware = read('src', 'middleware.ts');

  assert.match(middleware, /resolveLocale/);
  assert.match(middleware, /LOCALE_COOKIE_NAME/);
  assert.match(middleware, /getLocaleFromPathname/);
  assert.doesNotMatch(middleware, /country !== 'IT'/);
  assert.doesNotMatch(middleware, /pathname\.startsWith\('\/en'\)/);
});

// Documentation continuity notes:
// maintenance-note-1: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-2: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-3: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-4: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-5: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-6: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-7: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-8: preserve deterministic behavior and additive-only compatibility guarantees.
