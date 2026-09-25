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

test('multilingual SEO plugin assets are present', () => {
  assert.equal(
    exists('wordpress-plugins', 'geotapp-multilingual-seo-automation', 'geotapp-multilingual-seo-automation.php'),
    true,
  );
  assert.equal(
    exists('public', 'geotapp_multilingual_seo_automation.zip'),
    true,
  );
  assert.equal(
    exists('scripts', 'build_geotapp_multilingual_plugin.sh'),
    true,
  );
});

test('plugin wires translation queue, polylang relations, and SEO guardrails', () => {
  const plugin = read(
    'wordpress-plugins',
    'geotapp-multilingual-seo-automation',
    'geotapp-multilingual-seo-automation.php',
  );

  assert.match(plugin, /transition_post_status/);
  assert.match(plugin, /pll_set_post_language/);
  assert.match(plugin, /pll_save_post_translations/);
  assert.match(plugin, /DeepL-Auth-Key/);
  assert.match(plugin, /add_action\('wp_head', 'gtmsa_print_hreflang_links'/);
  assert.match(plugin, /get_canonical_url/);
  assert.match(plugin, /X-Robots-Tag: noindex, nofollow, noarchive/);
  assert.match(plugin, /HTTP_X_FORWARDED_HOST/);
  assert.match(plugin, /GTMSA_BACKFILL_ERROR/);
  assert.match(plugin, /\$per_page = 200/);
  assert.match(plugin, /blog\.geotapp\.com/);
});

test('sitemap fetches blog posts once, de-duplicates URLs and clusters translations', () => {
  // La sitemap vive nel middleware (src/app/sitemap.ts non esiste piu').
  const sitemap = read('src', 'middleware.ts');

  // Un solo giro sull'indice WP (?lang= e' ignorato dalla REST del blog).
  assert.match(sitemap, /const WP_FIELDS = 'slug,modified,link,gtmsa_lang,gtmsa_tgroup,gt_translations'/);
  assert.match(sitemap, /x-wp-totalpages/);
  assert.match(sitemap, /const seen = new Set<string>\(\)/);
  // Cluster hreflang: prima le traduzioni Polylang (le stesse dell'HTML del post),
  // poi il gruppo gtmsa_tgroup come riserva. 25/09/2026: 639 post collegati in
  // Polylang uscivano dalla sitemap senza hreflang perche' si guardava solo il tgroup.
  assert.match(sitemap, /reciprocalPolylang\(row\) \?\? \(row\.gtmsa_tgroup \? groups\.get\(row\.gtmsa_tgroup\) : undefined\)/);
});
