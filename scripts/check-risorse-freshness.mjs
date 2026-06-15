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
const TIMEOUT_MS = 20000;

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
async function checkUrl(url) {
  try {
    // Alcuni portali rifiutano HEAD: si prova HEAD, fallback a GET.
    let res = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (res.status === 405 || res.status === 501) {
      res = await fetch(url, { method: 'GET', redirect: 'follow', signal: AbortSignal.timeout(TIMEOUT_MS) });
    }
    const ok = res.status >= 200 && res.status < 400;
    return { url, ok, reason: ok ? `HTTP ${res.status}` : `HTTP ${res.status}` };
  } catch (e) {
    return { url, ok: false, reason: `irraggiungibile: ${e?.message || e}` };
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
