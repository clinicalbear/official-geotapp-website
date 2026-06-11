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

// ─── Coerenza lingua dei post ─────────────────────────────────────────────────
// Un post creato senza lingua Polylang esplicita resta "it" e il permalink esce
// senza prefisso lingua anche se il contenuto è tradotto (successo a decine di
// post NL/DE). La sorgente di verità è la lingua Polylang, esposta dal plugin
// GTMSA sul campo REST `gtmsa_lang`. Verifichiamo due invarianti:
//   A) gtmsa_lang deve coincidere col prefisso lingua del permalink (il bug:
//      lingua impostata male → URL e hub sbagliati).
//   B) una categoria con suffisso lingua (-de, -nl, ...) non deve contraddire
//      gtmsa_lang (allerta precoce su una traduzione mal collegata).
// NB: le categorie SENZA suffisso (geotapp, novita, confronti) hanno traduzioni
// Polylang che condividono lo slug: NON sono un segnale di lingua, vanno ignorate
// (altrimenti generano falsi positivi su post in realtà corretti).
const NON_DEFAULT = ['en', 'de', 'fr', 'es', 'pt', 'nl', 'ru', 'da', 'sv', 'nb'];

function suffixedCatLocale(post) {
  for (const cls of post.class_list ?? []) {
    if (!cls.startsWith('category-')) continue;
    const m = /-([a-z]{2})$/.exec(cls.slice('category-'.length));
    if (m && NON_DEFAULT.includes(m[1])) return m[1];
  }
  return null; // nessuna categoria suffissata → nessun segnale
}

function linkLocale(link) {
  try {
    const after = new URL(link).pathname.replace(/^\/blog\//, '');
    const m = /^([a-z]{2})\//.exec(after);
    return m && NON_DEFAULT.includes(m[1]) ? m[1] : 'it';
  } catch {
    return 'it';
  }
}

async function checkLanguageConsistency() {
  const FIELDS = 'id,slug,link,class_list,gtmsa_lang';
  const wp = `${BASE}/blog/wp-json/wp/v2/posts/`;
  const all = [];
  try {
    let page = 1;
    let totalPages = 1;
    do {
      const res = await fetch(
        `${wp}?per_page=100&page=${page}&_fields=${FIELDS}&status=publish`,
        { headers: { 'x-geotapp-proxy': '1' }, signal: AbortSignal.timeout(TIMEOUT_MS) },
      );
      if (!res.ok) return { ok: false, reason: `REST HTTP ${res.status} (pagina ${page})`, mismatches: [] };
      totalPages = parseInt(res.headers.get('x-wp-totalpages') ?? '1', 10);
      all.push(...await res.json());
      page++;
    } while (page <= totalPages);
  } catch (e) {
    return { ok: false, reason: `errore fetch REST: ${e?.message || e}`, mismatches: [] };
  }
  // Se il campo gtmsa_lang non c'è (plugin non aggiornato), non possiamo validare
  // in modo autorevole: segnalalo invece di dare un falso "tutto ok".
  if (all.length > 0 && all.every((p) => p.gtmsa_lang === undefined)) {
    return { ok: false, reason: 'campo gtmsa_lang assente (plugin GTMSA non aggiornato?)', mismatches: [] };
  }
  const mismatches = [];
  for (const p of all) {
    const lang = p.gtmsa_lang || 'it';
    const url = linkLocale(p.link);
    if (lang !== url) {
      mismatches.push(`id=${p.id} lang=${lang} url=${url} ${p.slug}`);
      continue;
    }
    const cat = suffixedCatLocale(p);
    if (cat && cat !== lang) {
      mismatches.push(`id=${p.id} categoria=${cat} lang=${lang} ${p.slug}`);
    }
  }
  return mismatches.length === 0
    ? { ok: true, reason: `${all.length} post coerenti`, mismatches }
    : { ok: false, reason: `${mismatches.length} post con lingua incoerente`, mismatches };
}

const results = await Promise.all(LOCALES.map(checkHub));
const langCheck = await checkLanguageConsistency();
let failed = 0;
for (const r of results) {
  const tag = r.ok ? 'OK  ' : 'FAIL';
  if (!r.ok) failed++;
  console.log(`[${tag}] /${r.locale}/blog/  ${r.reason}`);
}
console.log(`[${langCheck.ok ? 'OK  ' : 'FAIL'}] coerenza lingua post  ${langCheck.reason}`);
for (const m of langCheck.mismatches.slice(0, 20)) console.log(`       ${m}`);
if (!langCheck.ok) failed++;

if (failed > 0) {
  const hubLines = results.filter((r) => !r.ok).map((r) => `- /${r.locale}/blog/: ${r.reason}`);
  const langLines = langCheck.ok ? [] : [
    `- coerenza lingua: ${langCheck.reason}`,
    ...langCheck.mismatches.slice(0, 20).map((m) => `    ${m}`),
  ];
  const summary = `${failed} check FALLITI — controllare WordPress / deploy.\n\n` +
    [...hubLines, ...langLines].join('\n');
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
console.log(`\n[blog-hubs] tutti i ${LOCALES.length} hub sani e lingue coerenti.`);
