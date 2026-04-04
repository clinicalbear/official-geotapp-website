const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const rootDir = path.join(__dirname, '..');

function read(...parts) {
  return fs.readFileSync(path.join(rootDir, ...parts), 'utf8');
}

test('blog proxy middleware allows wp-admin/wp-login and forwards proxy headers', () => {
  const middleware = read('src', 'middleware.ts');

  assert.doesNotMatch(
    middleware,
    /WP_BLOCKED_PREFIXES\s*=\s*\[[^\]]*\/wp-admin/,
  );
  assert.doesNotMatch(
    middleware,
    /WP_BLOCKED_PREFIXES\s*=\s*\[[^\]]*\/wp-login\.php/,
  );

  assert.match(middleware, /x-forwarded-host/i);
  assert.match(middleware, /x-forwarded-proto/i);
  assert.match(middleware, /x-forwarded-prefix/i);
});

test('blog proxy branch is evaluated before public file bypass', () => {
  const middleware = read('src', 'middleware.ts');
  const blogIdx = middleware.indexOf("if (pathname.startsWith('/blog'))");
  const bypassIdx = middleware.indexOf('PUBLIC_FILE.test(pathname)');

  assert.notEqual(blogIdx, -1, 'blog branch not found');
  assert.notEqual(bypassIdx, -1, 'public file bypass not found');
  assert.ok(blogIdx < bypassIdx, 'blog branch must run before PUBLIC_FILE bypass');
});

test('blog proxy keeps upstream set-cookie headers on redirects', () => {
  const middleware = read('src', 'middleware.ts');

  assert.match(middleware, /const redirectHeaders = copyResponseHeaders/);
  assert.match(middleware, /redirectHeaders\.set\('location', rewrittenLocation\)/);
  assert.match(middleware, /return new NextResponse\(null,\s*\{/);
  assert.doesNotMatch(
    middleware,
    /return NextResponse\.redirect\(rewrittenLocation/,
  );
});

test('blog proxy preserves multiple set-cookie headers from upstream', () => {
  const middleware = read('src', 'middleware.ts');

  assert.match(middleware, /getSetCookie/);
  assert.match(middleware, /headers\.append\('set-cookie', cookie\)/);
});

test('blog proxy recovers GTMSA admin-post empty 200 responses with redirect', () => {
  const middleware = read('src', 'middleware.ts');

  assert.match(middleware, /let adminPostAction = ''/);
  assert.match(middleware, /new URLSearchParams\(bodyText\)\.get\('action'\)/);
  assert.match(middleware, /normalizedWpPath === '\/wp-admin\/admin-post\.php'/);
  assert.match(middleware, /\['gtmsa_backfill', 'gtmsa_run_queue_now'\]/);
  assert.match(middleware, /wpRes\.status === 200/);
  assert.match(middleware, /!location/);
  assert.match(
    middleware,
    /options-general\.php\?page=gtmsa-settings/,
  );
});
