const { chromium } = require('playwright');

// Gli errori del modulo di prova escono nella lingua della pagina?
//
// Nato il 07/09/2026. Il 31/08 un visitatore da Manchester ha premuto "Inizia"
// tre volte sulla pagina en-gb e tre volte si e' preso "Indirizzo email non
// valido", in italiano. Se ne e' andato. In GA4 restano i tre eventi
// `trial_form_error` con `cta_locale: en-gb`.
//
// COME SI LANCIA (playwright sta nella skill, non in questo repo):
//   cd ~/.claude/skills/playwright && node run.js \
//     /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site/e2e/trial-errori-lingua.js
//   LOCALE=de node run.js ...      # per provare un'altra lingua
//
// PERCHE' LA RISPOSTA DEL SERVER E' SIMULATA. Turnstile e' in modalita'
// gestita e un browser automatico non passa: la casella "non sono un robot"
// e' irraggiungibile e la pagina non arriva nemmeno a chiamare il server
// (provato due volte il 07/09). Quindi qui si mette un token finto nel form e
// si risponde alla POST con i byte ESATTI che la produzione restituisce a
// curl. Pagina, bundle e dizionario sono quelli veri del sito: l'unica cosa
// simulata e' il salto di rete, che si verifica a parte cosi'
//
//   curl -s -X POST https://crm.geotapp.com/api/trial/start \
//     -H 'Content-Type: application/json' -H 'Origin: https://geotapp.com' \
//     -d '{"email":"qa@invalido"}'
//   -> 400 {"code":"invalid_email","error":"Indirizzo email non valido"}
//
// Il terzo caso e' la rete di sicurezza dei deploy sfasati: se il CRM e' ancora
// quello vecchio e non manda `code`, la pagina deve mostrare la frase del
// server invece di restare muta.

const LOCALE = process.env.LOCALE || 'en-gb';

// Un pezzo distintivo di `trial.error_invalid_email` per ogni lingua del sito
// (src/dictionaries/*.json). Le varianti en-gb/us/au/ca/ie ereditano da en.
const FRASE_ATTESA = {
  it: /non è scritto bene/i,
  en: /look right/i,
  de: /stimmt so nicht/i,
  nl: /klopt niet/i,
  fr: /n'est pas correcte/i,
  es: /no está bien escrita/i,
  pt: /não está correto/i,
  da: /ser ikke rigtig ud/i,
  sv: /stämmer inte/i,
  nb: /ser ikke riktig ut/i,
  ru: /указан неверно/i,
};
const attesa = FRASE_ATTESA[LOCALE.startsWith('en') ? 'en' : LOCALE.slice(0, 2)];
if (!attesa) throw new Error(`lingua ${LOCALE} non prevista: aggiungila a FRASE_ATTESA`);
const URL_PROVA = () => `https://geotapp.com/${LOCALE}/trial/?fresh=${Date.now()}`;

const CASI = [
  {
    nome: 'server di oggi: codice + frase italiana di riserva',
    corpo: '{"code":"invalid_email","error":"Indirizzo email non valido"}',
    atteso: attesa,
  },
  {
    nome: 'server VECCHIO (deploy sfasati): solo la frase italiana, nessun codice',
    corpo: '{"error":"Indirizzo email non valido"}',
    atteso: /Indirizzo email non valido/,
  },
  {
    nome: 'codice che non traduciamo: deve uscire la frase del server',
    corpo: '{"code":"invalid_plan","error":"Piano non valido"}',
    atteso: /Piano non valido/,
  },
];

const CORS = {
  'Access-Control-Allow-Origin': 'https://geotapp.com',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

(async () => {
  // Chrome VERO, mai il Chromium di Playwright: rende in modo diverso.
  const browser = await chromium.launch({ channel: 'chrome', headless: false, slowMo: 40 });
  console.log(`pagina sotto prova: ${URL_PROVA()}`);
  const esiti = [];

  for (const caso of CASI) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

    await page.route('**/api/trial/start', async (route) => {
      if (route.request().method() === 'OPTIONS') {
        return route.fulfill({ status: 204, headers: CORS });
      }
      return route.fulfill({
        status: 400,
        headers: { ...CORS, 'Content-Type': 'application/json' },
        body: caso.corpo,
      });
    });

    await page.goto(URL_PROVA(), {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
    // Il banner cookie e' un dialogo modale e intercetta i clic finche' c'e':
    // va aspettato e chiuso, non solo cercato una volta (fallito cosi' al 1o giro).
    const dialogo = page.getByRole('dialog', { name: /cookie/i });
    await dialogo.waitFor({ state: 'visible', timeout: 15000 }).catch(() => {});
    if (await dialogo.count()) {
      // Le etichette del banner stanno in CookieConsentBanner.tsx, una per lingua.
      const ACCETTA = /accept all|accetta tutti|alle akzeptieren|tout accepter|aceptar todo|aceitar tudo|alles accepteren|accepter alle|acceptera alla|godta alle|Принять все/i;
      await dialogo.getByRole('button', { name: ACCETTA }).click({ timeout: 10000 });
      await dialogo.waitFor({ state: 'detached', timeout: 10000 }).catch(() => {});
      console.log('    banner cookie: accettato');
    }

    await page.locator('#trial-email').fill('mario@invalido');

    // Token finto: il codice legge form.elements['cf-turnstile-response'].
    await page.evaluate(() => {
      const form = document.querySelector('#trial-email').closest('form');
      let el = form.elements.namedItem('cf-turnstile-response');
      if (!el) {
        el = document.createElement('input');
        el.type = 'hidden';
        el.name = 'cf-turnstile-response';
        form.appendChild(el);
      }
      el.value = 'token-di-prova';
    });

    // Il clic vero puo' essere intercettato da un div del widget captcha che si
    // monta sopra il pulsante: in quel caso si invia il form come farebbe il
    // pulsante (`requestSubmit`), che passa dallo STESSO onSubmit di React.
    const invia = page.locator('form button[type="submit"]').first();
    await invia.scrollIntoViewIfNeeded().catch(() => {});
    try {
      await invia.click({ timeout: 8000 });
      console.log('    inviato con un clic vero');
    } catch (e) {
      await page.evaluate(() => {
        const form = document.querySelector('#trial-email').closest('form');
        form.requestSubmit(form.querySelector('button[type="submit"]'));
      });
      console.log('    clic intercettato da un overlay: inviato con requestSubmit');
    }

    const errore = page.locator('p.text-red-700');
    await errore.waitFor({ state: 'visible', timeout: 20000 }).catch(() => {});
    const testo = (await errore.count()) ? (await errore.first().innerText()).trim() : '(nessun messaggio)';
    const ok = caso.atteso.test(testo);

    console.log(`\n--- ${caso.nome}`);
    console.log(`    server risponde: ${caso.corpo}`);
    console.log(`    a schermo:       ${JSON.stringify(testo)}`);
    console.log(`    atteso ${caso.atteso} -> ${ok ? 'OK' : 'FALLITO'}`);
    esiti.push({ caso: caso.nome, testo, ok });

    await page.screenshot({ path: `/tmp/trial-${LOCALE}-caso-${esiti.length}.png` });
    await page.close();
  }

  const falliti = esiti.filter((e) => !e.ok);
  console.log('\n================ ESITO ================');
  console.log(`${esiti.length - falliti.length}/${esiti.length} casi come previsto`);
  if (falliti.length) console.log('falliti:', JSON.stringify(falliti, null, 1));
  console.log('=======================================\n');

  await browser.close();
  process.exitCode = falliti.length ? 1 : 0;
})();
