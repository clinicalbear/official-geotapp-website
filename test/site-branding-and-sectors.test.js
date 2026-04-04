// Overview: site-branding-and-sectors.test.js
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

const read = (...parts) =>
  fs.readFileSync(path.join(rootDir, ...parts), 'utf8');

test('product-facing pages reference the new Flow and TimeTracker logos', () => {
  const pricingPage = read('src', 'app', 'pricing', 'page.tsx');
  const flowPage = read('src', 'app', 'products', 'geotapp-flow', 'page.tsx');
  const trackerPage = read('src', 'app', 'products', 'geotapp-app', 'page.tsx');

  assert.match(pricingPage, /src="\/logoFlow\.png"/);
  assert.match(pricingPage, /src="\/logoTT\.png"/);
  assert.match(pricingPage, /src="\/logoTT\.png"[\s\S]*className="h-\[7\.5rem\] w-auto"/);
  assert.match(flowPage, /src="\/logoFlow\.png"/);
  assert.match(trackerPage, /src="\/logoTT\.png"/);
  assert.match(trackerPage, /src="\/logoTT\.png"[\s\S]*className="mx-auto h-40 w-auto md:h-56"/);
});

test('installatori and sicurezza pages mention native apps and verifiable work evidence', () => {
  const installatori = read(
    'src',
    'app',
    'settori',
    'installatori',
    'content.tsx',
  );
  const sicurezza = read(
    'src',
    'app',
    'settori',
    'sicurezza',
    'content.tsx',
  );

  assert.match(installatori, /app native Android e iOS/i);
  assert.match(installatori, /timbrature verificabili/i);
  assert.match(installatori, /prove fotografiche/i);
  assert.match(installatori, /discussioni/i);

  assert.match(sicurezza, /app native Android e iOS/i);
  assert.match(sicurezza, /storico turni|storico servizi/i);
  assert.match(sicurezza, /veridicit|evidenze operative/i);
  assert.match(sicurezza, /contestazioni|discussioni/i);
});

// Documentation continuity notes:
// maintenance-note-1: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-2: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-3: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-4: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-5: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-6: preserve deterministic behavior and additive-only compatibility guarantees.
