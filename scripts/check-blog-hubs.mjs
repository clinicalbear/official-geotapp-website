#!/usr/bin/env node
// Synthetic monitor degli hub blog localizzati.
//
// Per ogni locale verifica che https://geotapp.com/{locale}/blog/:
//   1. risponda HTTP 200
//   2. NON contenga l'empty-state ("Nessun articolo" / "No articles" / ...)
//   3. contenga lo structured data Blog + almeno un BlogPosting
//
// Exit 0 = tutti gli hub sani. Exit 1 = almeno un hub degradato (per cron/CI/alert).
//
// Uso:  node scripts/check-blog-hubs.mjs
// Cron: */30 * * * *  cd <repo> && node scripts/check-blog-hubs.mjs >> /var/log/blog-hubs.log 2>&1

const BASE = process.env.BLOG_CHECK_BASE || 'https://geotapp.com';
const LOCALES = ['it', 'en', 'de', 'fr', 'es', 'pt', 'nl', 'ru', 'da', 'sv', 'nb'];

// Empty-state per locale (dai dizionari src/dictionaries/{locale}.json -> blog.no_posts).
const EMPTY_STATES = [
  'Nessun articolo disponibile',
  'No articles available',
  'Derzeit keine Artikel',
  'Aucun article disponible',
  'No hay artículos disponibles',
  'Nenhum artigo disponível',
  'Momenteel geen artikelen',
  'Ingen artikler tilgængelige',
  'Inga artiklar tillgängliga',
  'Ingen artikler tilgjengelige',
  'статьи недоступны',
];

const TIMEOUT_MS = 20000;

async function checkHub(locale) {
  const url = `${BASE}/${locale}/blog/`;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS), redirect: 'manual' });
    if (res.status !== 200) {
      return { locale, ok: false, reason: `HTTP ${res.status}` };
    }
    const html = await res.text();
    const emptyHit = EMPTY_STATES.find((s) => html.includes(s));
    if (emptyHit) {
      return { locale, ok: false, reason: `empty-state mostrato ("${emptyHit}...")` };
    }
    const hasBlogLd = html.includes('"@type":"Blog"');
    const postCount = (html.match(/"@type":"BlogPosting"/g) || []).length;
    if (!hasBlogLd || postCount === 0) {
      return { locale, ok: false, reason: `JSON-LD Blog assente o 0 BlogPosting (count=${postCount})` };
    }
    return { locale, ok: true, reason: `${postCount} articoli` };
  } catch (e) {
    return { locale, ok: false, reason: `errore fetch: ${e?.message || e}` };
  }
}

const results = await Promise.all(LOCALES.map(checkHub));
let failed = 0;
for (const r of results) {
  const tag = r.ok ? 'OK  ' : 'FAIL';
  if (!r.ok) failed++;
  console.log(`[${tag}] /${r.locale}/blog/  ${r.reason}`);
}

if (failed > 0) {
  const summary = `${failed}/${LOCALES.length} hub DEGRADATI — controllare WordPress / deploy.\n\n` +
    results.filter((r) => !r.ok).map((r) => `- /${r.locale}/blog/: ${r.reason}`).join('\n');
  console.error(`\n[blog-hubs] ${summary}`);

  // Alert opzionale: se configurato, inoltra al CRM che invia l'email via SMTP.
  // (Su esecuzione manuale `npm run check:blog` questi env non ci sono -> solo log + exit 1.)
  const alertUrl = process.env.BLOG_ALERT_URL;
  const alertToken = process.env.BLOG_ALERT_TOKEN;
  if (alertUrl && alertToken) {
    try {
      const res = await fetch(alertUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${alertToken}` },
        body: JSON.stringify({ message: summary }),
        signal: AbortSignal.timeout(TIMEOUT_MS),
      });
      console.log(`[blog-hubs] alert inviato: HTTP ${res.status}`);
    } catch (e) {
      console.error(`[blog-hubs] invio alert fallito: ${e?.message || e}`);
    }
  }
  process.exit(1);
}
console.log(`\n[blog-hubs] tutti i ${LOCALES.length} hub sani.`);
