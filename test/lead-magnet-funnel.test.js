// Overview: lead-magnet-funnel.test.js
// Purpose: verifica struttura del funnel lead magnet (asset, componente, API, tracking).
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const read = (...p) => fs.readFileSync(path.join(root, ...p), 'utf8');
const exists = (...p) => fs.existsSync(path.join(root, ...p));

test('fac-simile PDF asset exists and is non-trivial', () => {
  const pdf = path.join(root, 'public', 'downloads', 'fac-simile-informativa-gps-dipendenti.pdf');
  assert.ok(fs.existsSync(pdf), 'PDF missing');
  assert.ok(fs.statSync(pdf).size > 10000, 'PDF too small');
});

test('newsletter API handles leadMagnet param', () => {
  const route = read('src', 'app', 'api', 'newsletter', 'route.ts');
  assert.match(route, /leadMagnet/);
  assert.match(route, /LEAD_MAGNET_GROUPS/);
});

test('LeadMagnetInline component exists and posts leadMagnet', () => {
  assert.ok(exists('src', 'components', 'blog', 'LeadMagnetInline.tsx'), 'component missing');
  const c = read('src', 'components', 'blog', 'LeadMagnetInline.tsx');
  assert.match(c, /leadMagnet/);
  assert.match(c, /\/api\/newsletter/);
});

test('blog slug page maps fac-simile article to a lead magnet', () => {
  const page = read('src', 'app', 'blog', '[...slug]', 'page.tsx');
  assert.match(page, /LeadMagnetInline/);
  assert.match(page, /fac-simile-informativa-gps-dipendenti-2026/);
});

test('TrialButton dead code removed', () => {
  assert.ok(!exists('src', 'components', 'TrialButton.tsx'), 'TrialButton.tsx still present');
});

test('blog mid-article CTA fires trial_click', () => {
  const c = read('src', 'components', 'blog', 'ArticleContent.tsx');
  assert.match(c, /trial_click/);
});

test('footer trial link fires trial_click', () => {
  const c = read('src', 'components', 'Footer.tsx');
  assert.match(c, /trial_click/);
});
