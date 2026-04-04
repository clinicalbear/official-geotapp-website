const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const rootDir = path.join(__dirname, '..');

function read(...parts) {
  return fs.readFileSync(path.join(rootDir, ...parts), 'utf8');
}

test('middleware de-publishes known test blog paths with 410 + noindex', () => {
  const middleware = read('src', 'middleware.ts');

  assert.match(middleware, /isDepublishedBlogTestPath/);
  assert.match(middleware, /\/blog\/da\/2026\/03\/23\/test\//);
  assert.match(middleware, /\/blog\/da\/2026\/03\/23\/test-2\//);
  assert.match(middleware, /status:\s*410/);
  assert.match(middleware, /X-Robots-Tag': 'noindex, nofollow, noarchive'/);
});

test('sitemap generation excludes de-published test blog paths', () => {
  const middleware = read('src', 'middleware.ts');
  const appSitemap = read('src', 'app', 'sitemap.ts');

  assert.match(middleware, /isDepublishedBlogTestUrl/);
  assert.match(appSitemap, /isDepublishedBlogTestUrl/);
  assert.match(middleware, /if \(isDepublishedBlogTestUrl\(url\)\) continue;/);
  assert.match(appSitemap, /if \(isDepublishedBlogTestUrl\(url\)\) return;/);
});
