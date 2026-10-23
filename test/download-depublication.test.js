const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const rootDir = path.join(__dirname, '..');

function read(...parts) {
  return fs.readFileSync(path.join(rootDir, ...parts), 'utf8');
}

test('download route is removed from sitemap route lists', () => {
  // La sitemap vive solo nel middleware (src/app/sitemap.ts non esiste piu').
  const middleware = read('src', 'middleware.ts');

  assert.ok(!fs.existsSync(path.join(rootDir, 'src', 'app', 'sitemap.ts')), 'sitemap.ts e\' tornato: la fonte deve essere una sola');
  assert.doesNotMatch(middleware, /path:\s*'\/download\/'/);
});

test('middleware de-publishes download route with 410 response', () => {
  const middleware = read('src', 'middleware.ts');

  assert.match(middleware, /isDepublishedDownloadPath/);
  assert.match(middleware, /new NextResponse\('Gone',\s*\{/);
  assert.match(middleware, /status:\s*410/);
  assert.match(middleware, /x-robots-tag/i);
});
