
// Overview: check-articles.js
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

console.log('Checking articles in database...\n');

// Check articles table
db.all(
  'SELECT id, documentId, title, publishedAt, createdAt FROM articles ORDER BY id DESC LIMIT 10',
  [],
  (err, rows) => {
    if (err) {
      console.error('Error querying articles:', err);
    } else {
      console.log('📚 Articles in database:');
      console.table(rows);

      if (rows.length === 0) {
        console.log('\n⚠️  No articles found in database!');
      }
    }

    // Check for orphaned entries
    db.all(
      "SELECT name FROM sqlite_master WHERE type='table' AND name LIKE '%article%'",
      [],
      (err, tables) => {
        if (err) {
          console.error('Error listing tables:', err);
        } else {
          console.log('\n📋 Article-related tables:');
          console.log(tables.map((t) => t.name).join(', '));
        }

        db.close();
      },
    );
  },
);
