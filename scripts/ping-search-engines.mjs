/**
 * ping-search-engines.mjs
 *
 * Post-deploy script: notifica a Google, Bing e IndexNow ogni aggiornamento
 * del sito, eliminando l'attesa passiva del crawler.
 *
 * Uso:
 *   node scripts/ping-search-engines.mjs
 *
 * Integrazione nel workflow di deploy (package.json):
 *   "deploy": "npm run build && wrangler deploy && node scripts/ping-search-engines.mjs"
 */

const BASE_URL = 'https://geotapp.com';
const INDEXNOW_KEY = '95d9665657a34b4ea1de9d4d0ce6f4d5';
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`;

const SUPPORTED_LOCALES = ['it', 'en', 'de', 'fr', 'es', 'pt', 'nl', 'ru', 'da', 'sv', 'nb'];

// URL prioritari da notificare ad ogni deploy:
// home locale + pagine di conversione + prodotti principali
const PRIORITY_URLS = [
  `${BASE_URL}/`,
  ...SUPPORTED_LOCALES.map((l) => `${BASE_URL}/${l}/`),
  `${BASE_URL}/pricing`,
  `${BASE_URL}/pricing/bundle`,
  ...SUPPORTED_LOCALES.map((l) => `${BASE_URL}/${l}/pricing`),
  `${BASE_URL}/products/geotapp-flow`,
  `${BASE_URL}/products/geotapp-app`,
  `${BASE_URL}/products/geotapp-verifier`,
  `${BASE_URL}/settori`,
  `${BASE_URL}/settori/pulizie`,
  `${BASE_URL}/settori/installatori`,
  `${BASE_URL}/settori/sicurezza`,
];

async function pingGoogle() {
  const url = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
  try {
    const res = await fetch(url);
    console.log(`[Google ping] ${res.status} ${res.statusText}`);
  } catch (e) {
    console.warn(`[Google ping] failed: ${e.message}`);
  }
}

async function pingBing() {
  const url = `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
  try {
    const res = await fetch(url);
    console.log(`[Bing ping]   ${res.status} ${res.statusText}`);
  } catch (e) {
    console.warn(`[Bing ping] failed: ${e.message}`);
  }
}

async function submitIndexNow() {
  // IndexNow protocol: notifica Bing, Yandex e (indirettamente) altri motori
  // che supportano il protocollo condiviso.
  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: 'geotapp.com',
        key: INDEXNOW_KEY,
        keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: PRIORITY_URLS,
      }),
    });
    console.log(`[IndexNow]    ${res.status} — ${PRIORITY_URLS.length} URLs submitted`);
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.warn(`[IndexNow]    response body: ${text.slice(0, 200)}`);
    }
  } catch (e) {
    console.warn(`[IndexNow] failed: ${e.message}`);
  }
}

console.log('=== Search Engine Ping — post deploy ===');
console.log(`Sitemap: ${SITEMAP_URL}`);
console.log(`URLs submitted to IndexNow: ${PRIORITY_URLS.length}`);
console.log('');

await Promise.all([pingGoogle(), pingBing(), submitIndexNow()]);

console.log('');
console.log('Done. Google re-crawl: typically within 24h.');
console.log('Bing/IndexNow: typically within 10 minutes.');
