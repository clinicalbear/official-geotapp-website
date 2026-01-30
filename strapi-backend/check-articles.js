const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '.tmp', 'data.db');
const db = new sqlite3.Database(dbPath);

console.log('Checking articles in database...\n');

// Check articles table
db.all("SELECT id, documentId, title, publishedAt, createdAt FROM articles ORDER BY id DESC LIMIT 10", [], (err, rows) => {
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
  db.all("SELECT name FROM sqlite_master WHERE type='table' AND name LIKE '%article%'", [], (err, tables) => {
    if (err) {
      console.error('Error listing tables:', err);
    } else {
      console.log('\n📋 Article-related tables:');
      console.log(tables.map(t => t.name).join(', '));
    }

    db.close();
  });
});
