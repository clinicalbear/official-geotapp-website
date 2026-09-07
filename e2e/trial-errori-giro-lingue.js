const { chromium } = require('playwright');

// Giro completo delle lingue: la frase di errore esce in quella GIUSTA su
// tutte le pagine del sito? Un caso per lingua (il server di oggi), un solo
// browser, pagine vere di produzione. Fratello di `trial-errori-lingua.js`,
// che invece scava sui tre comportamenti di UNA lingua sola.
//
//   cd ~/.claude/skills/playwright
//   node run.js /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site/e2e/trial-errori-giro-lingue.js
//
// Vale la stessa avvertenza su Turnstile scritta nel README: il token e' finto
// e la risposta della POST e' intercettata coi byte esatti della produzione.
// Ultimo giro: 07/09/2026, 12/12.
const RISPOSTA = '{"code":"invalid_email","error":"Indirizzo email non valido"}';
const CORS = {
  'Access-Control-Allow-Origin': 'https://geotapp.com',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};
const ACCETTA = /accept all|accetta tutti|alle akzeptieren|tout accepter|aceptar todo|aceitar tudo|alles accepteren|accepter alle|acceptera alla|godta alle|Принять все/i;

const LINGUE = [
  ['it', /non è scritto bene/i],
  ['en', /look right/i],
  ['en-gb', /look right/i],
  ['de', /stimmt so nicht/i],
  ['nl', /klopt niet/i],
  ['fr', /n'est pas correcte/i],
  ['es', /no está bien escrita/i],
  ['pt', /não está correto/i],
  ['da', /ser ikke rigtig ud/i],
  ['sv', /stämmer inte/i],
  ['nb', /ser ikke riktig ut/i],
  ['ru', /указан неверно/i],
];

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: false });
  const esiti = [];

  for (const [locale, atteso] of LINGUE) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.route('**/api/trial/start', (route) =>
      route.request().method() === 'OPTIONS'
        ? route.fulfill({ status: 204, headers: CORS })
        : route.fulfill({ status: 400, headers: { ...CORS, 'Content-Type': 'application/json' }, body: RISPOSTA }));

    let testo = '(non raggiunto)';
    let lang = '?';
    try {
      await page.goto(`https://geotapp.com/${locale}/trial/?fresh=${Date.now()}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
      lang = await page.getAttribute('html', 'lang');
      const dialogo = page.getByRole('dialog', { name: /cookie/i });
      await dialogo.waitFor({ state: 'visible', timeout: 15000 }).catch(() => {});
      if (await dialogo.count()) {
        await dialogo.getByRole('button', { name: ACCETTA }).click({ timeout: 10000 });
        await dialogo.waitFor({ state: 'detached', timeout: 10000 }).catch(() => {});
      }
      await page.locator('#trial-email').fill('mario@invalido');
      await page.evaluate(() => {
        const form = document.querySelector('#trial-email').closest('form');
        let el = form.elements.namedItem('cf-turnstile-response');
        if (!el) { el = document.createElement('input'); el.type = 'hidden'; el.name = 'cf-turnstile-response'; form.appendChild(el); }
        el.value = 'token-di-prova';
      });
      const invia = page.locator('form button[type="submit"]').first();
      await invia.scrollIntoViewIfNeeded().catch(() => {});
      try { await invia.click({ timeout: 8000 }); } catch {
        await page.evaluate(() => {
          const f = document.querySelector('#trial-email').closest('form');
          f.requestSubmit(f.querySelector('button[type="submit"]'));
        });
      }
      const errore = page.locator('p.text-red-700');
      await errore.waitFor({ state: 'visible', timeout: 20000 }).catch(() => {});
      testo = (await errore.count()) ? (await errore.first().innerText()).trim() : '(nessun messaggio)';
    } catch (e) {
      testo = `ERRORE: ${e.message.split('\n')[0]}`;
    }

    const ok = atteso.test(testo);
    const italiano = /Indirizzo email non valido/.test(testo);
    esiti.push({ locale, lang, ok, italiano, testo });
    console.log(`${ok ? 'OK  ' : 'NO  '} ${locale.padEnd(6)} html-lang=${String(lang).padEnd(6)} ${JSON.stringify(testo)}`);
    await page.close();
  }

  const ko = esiti.filter((e) => !e.ok);
  console.log(`\n=== ${esiti.length - ko.length}/${esiti.length} lingue nella lingua giusta ===`);
  if (ko.length) console.log('DA GUARDARE:', JSON.stringify(ko, null, 1));
  const rimasti = esiti.filter((e) => e.italiano);
  console.log(`ancora in italiano dove non dovrebbero: ${rimasti.length ? rimasti.map((r) => r.locale).join(', ') : 'nessuna'}`);
  await browser.close();
})();
