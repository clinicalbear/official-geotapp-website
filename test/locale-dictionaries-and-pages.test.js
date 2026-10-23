// Overview: locale-dictionaries-and-pages.test.js
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
const { stripTypeScriptTypes } = require('node:module');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

const rootDir = path.join(__dirname, '..');

function read(...parts) {
  return fs.readFileSync(path.join(rootDir, ...parts), 'utf8');
}

async function loadModule(relativePath, replacements = {}) {
  const modulePath = path.join(rootDir, relativePath);
  let source = fs.readFileSync(modulePath, 'utf8');

  for (const [from, to] of Object.entries(replacements)) {
    source = source.replaceAll(from, to);
  }

  const transformed = stripTypeScriptTypes(source, {
    mode: 'transform',
  });

  return import(
    `data:text/javascript;charset=utf-8,${encodeURIComponent(transformed)}`
  );
}

// Il test sui valori dei dizionari e sul routing e' ora in src/lib/i18n/i18n-registry.test.ts (vitest):
// il registro importa altri moduli e non si carica piu' con un data: URL.

test('no file reads the it/en dictionaries directly: everything goes through the shared registry', () => {
  // Le pagine ora stanno in src/app/[locale]/ e spesso delegano a componenti: il criterio
  // che conta e' che solo il registro importi i JSON italiano e inglese.
  const allowed = new Set([
    path.join('src', 'lib', 'i18n', 'dictionaries.ts'),
    path.join('src', 'lib', 'risorse', 'gps-lavoratori-ue', 'fonte-non-ufficiale.test.ts'),
  ]);
  const offenders = [];
  (function walk(dir) {
    for (const entry of fs.readdirSync(path.join(rootDir, dir), { withFileTypes: true })) {
      const rel = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(rel);
      else if (/\.(ts|tsx)$/.test(entry.name) && !allowed.has(rel)) {
        if (/dictionaries\/(it|en)\.json/.test(read(rel))) offenders.push(rel);
      }
    }
  })('src');
  assert.deepEqual(offenders, []);

  for (const fileParts of [['src', 'components', 'Navbar.tsx'], ['src', 'components', 'Footer.tsx']]) {
    assert.match(read(...fileParts), /@\/lib\/i18n\/dictionaries/);
  }
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
// maintenance-note-9: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-10: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-11: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-12: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-13: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-14: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-15: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-16: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-17: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-18: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-19: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-20: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-21: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-22: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-23: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-24: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-25: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-26: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-27: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-28: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-29: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-30: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-31: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-32: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-33: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-34: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-35: preserve deterministic behavior and additive-only compatibility guarantees.
