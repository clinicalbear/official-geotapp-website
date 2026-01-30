const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '.tmp', 'data.db');
const db = new sqlite3.Database(dbPath);

console.log('Listing all tables in database...\n');

db.all("SELECT name, sql FROM sqlite_master WHERE type='table' ORDER BY name", [], (err, rows) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('📋 All tables in database:\n');
    rows.forEach((row, i) => {
      console.log(`${i + 1}. ${row.name}`);
    });

    // Now let's check for content that might be articles
    const likelyTables = rows.filter(r =>
      r.name.includes('post') ||
      r.name.includes('blog') ||
      r.name.includes('content') ||
      r.name.includes('article')
    );

    if (likelyTables.length > 0) {
      console.log('\n📝 Likely content tables:');
      likelyTables.forEach(t => {
        console.log(`\n  Table: ${t.name}`);
        console.log(`  Schema: ${t.sql}`);
      });
    }
  }

  db.close();
});
