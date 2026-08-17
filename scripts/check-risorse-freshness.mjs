#!/usr/bin/env node
// Synthetic monitor della freschezza delle schede-paese "GPS sui lavoratori in UE".
//
// Controlla due cose, e SOLO segnala (non riscrive MAI i file dati):
//   1. RAGGIUNGIBILITA: ogni URL di fonte/autorita/portale citato nei dossier
//      deve rispondere 2xx/3xx. Un non-2xx/3xx (o errore di rete) = portale che
//      potrebbe essersi spostato.
//   2. FRESCHEZZA: ogni data `verificatoIl` piu vecchia di 6 mesi rispetto a OGGI
//      va ricontrollata a mano. Qui usiamo la data corrente reale (e un tool
//      runtime, non una funzione pura unit-testata: la logica pura e in
//      src/lib/risorse/gps-lavoratori-ue/staleness.ts).
//
// COME RACCOGLIE GLI URL E LE DATE:
//   I dati sono in TypeScript sotto src/lib/risorse/gps-lavoratori-ue/paesi/*.ts.
//   Un .mjs non puo importare TS direttamente senza un build step. Approccio
//   pragmatico e robusto: si LEGGONO i file sorgente dei dossier e si estraggono
//   via regex i valori di `url`/`urlFonte`/`portale` (URL http/https) e di
//   `verificatoIl` (date ISO). Non si esegue il TS, si fa scanning testuale: e
//   read-only e non puo alterare i dati. Se in futuro si vuole una sorgente piu
//   forte, esportare un manifest JSON dai dossier e importarlo qui.
//
// Exit 0 = tutto sano (o solo avvisi gia segnalati). Exit 1 = almeno un check
// fallito (per cron/CI/alert).
//
// Uso:      node scripts/check-risorse-freshness.mjs
// Dry-run:  node scripts/check-risorse-freshness.mjs --dry-run   (stampa, non invia email)
// Cron:     (passo umano separato, non schedulato qui)

import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PAESI_DIR = join(__dirname, '..', 'src', 'lib', 'risorse', 'gps-lavoratori-ue', 'paesi');

const DRY_RUN = process.argv.includes('--dry-run');
const MESI_SOGLIA = 6;
const TIMEOUT_MS = 60000; // azlp.mk (autorita macedone) impiega ~50s: sotto i 60 e un falso allarme

// ─── Raccolta URL + date dai dossier (scanning testuale, read-only) ───────────
function raccogliDossier() {
  const files = readdirSync(PAESI_DIR).filter((f) => f.endsWith('.ts') && !f.endsWith('.test.ts'));
  const urls = new Set();
  const date = []; // { paese, data }

  // Matcha:  url: '...'  |  urlFonte: '...'  |  portale: '...'  con http/https
  const urlRe = /\b(?:url|urlFonte|portale)\s*:\s*['"`](https?:\/\/[^'"`]+)['"`]/g;
  const dataRe = /\bverificatoIl\s*:\s*['"`](\d{4}-\d{2}-\d{2})['"`]/g;

  for (const f of files) {
    const src = readFileSync(join(PAESI_DIR, f), 'utf8');
    const paese = f.replace(/\.ts$/, '');
    let m;
    while ((m = urlRe.exec(src)) !== null) urls.add(m[1]);
    while ((m = dataRe.exec(src)) !== null) date.push({ paese, data: m[1] });
  }

  return { urls: [...urls], date };
}

// ─── 1) Raggiungibilita degli URL ─────────────────────────────────────────────
// 🔴 Senza User-Agent da browser questo controllo e' una macchina da falsi
// allarmi: molti portali pubblici (IMY svedese in testa) rispondono 403 a Node
// e 200 a un browser. Verificato il 05/08/2026 su tutte e 200 le fonti.
const UA =
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';

// Host che rispondono 403/timeout a qualunque agente automatico ma che sono
// VIVI da browser. Un loro 403 non e' una fonte morta: si registra a parte e
// NON fa scattare l'allarme. Elenco chiuso e motivato, non una scorciatoia.
const ANTI_BOT = [
  'legifrance.gouv.fr',   // verifica Cloudflare, non passa nemmeno col browser visibile
  'dataprotection.ie',    // DPC irlandese
  'vdai.lrv.lt',          // autorita lituana
  'legis.md',             // Moldova
  'cpdp.bg',              // catena SSL incompleta
  'dsb.gv.at',            // Austria, connessione rifiutata
  'legislatie.just.ro',   // HTTP/2 capriccioso
  'zakon.rada.gov.ua',    // TLS troncato
];

// Host semplicemente LENTISSIMI, non ostili: l'autorita macedone risponde 200
// ma ci mette una cinquantina di secondi (misurato 17/08/2026), e sotto richieste
// parallele anche di piu. Non e' una fonte morta, e' un server lento.
const LENTI = ['azlp.mk'];
const TIMEOUT_LENTO_MS = 150000;

function isLento(url) {
  try {
    const h = new URL(url).hostname;
    return LENTI.some((d) => h === d || h.endsWith('.' + d));
  } catch {
    return false;
  }
}

function isAntiBot(url) {
  try {
    const h = new URL(url).hostname;
    return ANTI_BOT.some((d) => h === d || h.endsWith('.' + d));
  } catch {
    return false;
  }
}

async function checkUrl(url, tentativo = 0) {
  const opts = {
    redirect: 'follow',
    signal: AbortSignal.timeout(isLento(url) ? TIMEOUT_LENTO_MS : TIMEOUT_MS),
    headers: {
      'User-Agent': UA,
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en;q=0.9,it;q=0.8',
    },
  };
  try {
    // HEAD prima, ma diversi portali pubblici lo rifiutano (il BfDI tedesco
    // risponde 400 a HEAD e 200 a GET): su qualunque 4xx si riprova con GET.
    let res = await fetch(url, { ...opts, method: 'HEAD' });
    if (res.status >= 400 && res.status < 500) {
      res = await fetch(url, { ...opts, method: 'GET' });
    }
    if (res.status >= 200 && res.status < 400) return { url, ok: true, reason: `HTTP ${res.status}` };

    // 🔴 Il codice di stato NON e' la prova. L'IMY svedese risponde 404 anche
    // sulla propria home e intanto serve la pagina intera (verificato il
    // 17/08/2026: 541 KB, titolo corretto, GPS citato otto volte). Quando lo
    // stato e' d'errore si guarda il CORPO: se torna una pagina vera e non un
    // messaggio di errore, la fonte e' viva.
    if (res.status >= 400) {
      try {
        const g = res.bodyUsed ? null : await fetch(url, { ...opts, method: 'GET' });
        if (g) {
          const html = await g.text();
          const titolo = (html.match(/<title[^>]*>([^<]{3,})<\/title>/i) || [])[1] || '';
          const paginaVera =
            html.length > 20000 &&
            titolo &&
            !/not\s*found|kunde inte hittas|non trovat|nicht gefunden|no encontrad|error\s*40/i.test(titolo);
          if (paginaVera) {
            return { url, ok: true, statoBugiardo: true, reason: `HTTP ${res.status} ma pagina viva ("${titolo.trim().slice(0, 48)}")` };
          }
        }
      } catch { /* si ricade sul fallimento sotto */ }
    }

    // 5xx spesso e' passeggero (il BOE spagnolo dava 502 e due secondi dopo 200).
    if (res.status >= 500 && tentativo < 2) {
      await new Promise((r) => setTimeout(r, 3000));
      return checkUrl(url, tentativo + 1);
    }
    if (isAntiBot(url)) return { url, ok: true, bloccato: true, reason: `HTTP ${res.status} (anti-bot noto)` };
    return { url, ok: false, reason: `HTTP ${res.status}` };
  } catch (e) {
    const msg = e?.message || String(e);
    if (tentativo < 2) {
      await new Promise((r) => setTimeout(r, 3000));
      return checkUrl(url, tentativo + 1);
    }
    if (isAntiBot(url)) return { url, ok: true, bloccato: true, reason: `${msg} (anti-bot noto)` };
    return { url, ok: false, reason: `irraggiungibile: ${msg}` };
  }
}

// ─── 2) Freschezza delle date verificatoIl ────────────────────────────────────
function isStale(verificatoIl, oggi, mesiSoglia = MESI_SOGLIA) {
  if (!verificatoIl) return true;
  const v = new Date(`${verificatoIl}T00:00:00Z`);
  const r = new Date(`${oggi}T00:00:00Z`);
  if (Number.isNaN(v.getTime()) || Number.isNaN(r.getTime())) return true;
  const soglia = new Date(r);
  soglia.setUTCMonth(soglia.getUTCMonth() - mesiSoglia);
  return v.getTime() < soglia.getTime();
}

function oggiISO() {
  return new Date().toISOString().slice(0, 10);
}

// ─── Main ─────────────────────────────────────────────────────────────────────
const { urls, date } = raccogliDossier();
const oggi = oggiISO();

const urlResults = await Promise.all(urls.map(checkUrl));
const urlFalliti = urlResults.filter((r) => !r.ok);

const dateStale = date.filter((d) => isStale(d.data, oggi));

for (const r of urlResults) {
  console.log(`[${r.ok ? 'OK  ' : 'FAIL'}] ${r.url}  ${r.reason}`);
}
for (const d of dateStale) {
  console.log(`[STALE] ${d.paese}: verificatoIl ${d.data} oltre ${MESI_SOGLIA} mesi (oggi ${oggi})`);
}

const flagged = urlFalliti.length + dateStale.length;

if (flagged === 0) {
  console.log(`\n[risorse-freshness] ${urls.length} URL sani, ${date.length} date entro ${MESI_SOGLIA} mesi.`);
  process.exit(0);
}

const righe = [
  ...urlFalliti.map((r) => `- URL non raggiungibile: ${r.url} (${r.reason})`),
  ...dateStale.map((d) => `- Data da ricontrollare: ${d.paese} verificatoIl ${d.data}`),
];
const summary =
  `${flagged} segnalazioni sulle schede "GPS sui lavoratori in UE": controllare fonti/portali.\n\n` +
  righe.join('\n');
console.error(`\n[risorse-freshness] ${summary}`);

// Alert: STESSO meccanismo del monitor blog-hub (scripts/check-blog-hubs.mjs).
// POST a BLOG_ALERT_URL con Bearer BLOG_ALERT_TOKEN: il CRM inoltra via SMTP.
// Su esecuzione manuale / --dry-run questi env mancano o si saltano -> solo log.
const alertUrl = process.env.BLOG_ALERT_URL;
const alertToken = process.env.BLOG_ALERT_TOKEN;
if (!DRY_RUN && alertUrl && alertToken) {
  try {
    const res = await fetch(alertUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${alertToken}` },
      body: JSON.stringify({ message: summary }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    console.log(`[risorse-freshness] alert inviato: HTTP ${res.status}`);
  } catch (e) {
    console.error(`[risorse-freshness] invio alert fallito: ${e?.message || e}`);
  }
} else if (DRY_RUN) {
  console.log('[risorse-freshness] --dry-run: alert NON inviato (solo stampa).');
}

process.exit(1);
