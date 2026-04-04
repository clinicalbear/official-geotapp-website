
// Overview: list-tables.js
// Module: strapi-backend
// Purpose: keeps implementation details explicit for maintenance, onboarding, and safer refactors.
// Note: preserve tenant isolation, role checks, and backward-compatible data contracts when editing.

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

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '.tmp', 'data.db');
const db = new sqlite3.Database(dbPath);

console.log('Listing all tables in database...\n');

db.all(
  "SELECT name, sql FROM sqlite_master WHERE type='table' ORDER BY name",
  [],
  (err, rows) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('📋 All tables in database:\n');
      rows.forEach((row, i) => {
        console.log(`${i + 1}. ${row.name}`);
      });

      // Now let's check for content that might be articles
      const likelyTables = rows.filter(
        (r) =>
          r.name.includes('post') ||
          r.name.includes('blog') ||
          r.name.includes('content') ||
          r.name.includes('article'),
      );

      if (likelyTables.length > 0) {
        console.log('\n📝 Likely content tables:');
        likelyTables.forEach((t) => {
          console.log(`\n  Table: ${t.name}`);
          console.log(`  Schema: ${t.sql}`);
        });
      }
    }

    db.close();
  },
);
