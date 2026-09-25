#!/usr/bin/env node
// Genera src/lib/seo/content-dates.ts a partire dalla vera storia git dei file
// di contenuto di ciascuna pagina prodotto/settore (+ cos-e-geotapp, pricing,
// roi-calculator). Non gira in CI: il workflow di deploy fa un checkout
// superficiale (actions/checkout@v4, fetch-depth di default = 1), quindi in quel
// contesto `git log` vedrebbe solo l'ultimo commit per OGNI file e la data
// sarebbe falsa. Si rilancia questo script a mano (repo con history completa)
// prima di un deploy quando cambia il contenuto di una di queste pagine, e si
// committa il file generato: e' quello che il build legge davvero.
//
// Uso: node scripts/seo/generate-content-dates.mjs

import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '../..');

function filesInDir(relDir, { exclude = [] } = {}) {
  const abs = path.join(REPO_ROOT, relDir);
  if (!existsSync(abs)) return [];
  return readdirSync(abs)
    .filter((f) => (f.endsWith('.ts') || f.endsWith('.tsx')) && !exclude.includes(f))
    .map((f) => path.join(relDir, f));
}

// Chiave pagina -> file di pagina + contenuto/dizionario DEDICATI a quella pagina
// (niente componenti condivisi come SettorePageLayout.tsx o systems-data comuni:
// quelli cambiano per tutte le pagine insieme e non raccontano quando E' CAMBIATA
// QUESTA pagina).
const PAGES = {
  'settori/pulizie': [
    'src/app/[locale]/settori/pulizie/page.tsx',
    ...filesInDir('src/content/settori/pulizie'),
  ],
  'settori/installatori': [
    'src/app/[locale]/settori/installatori/page.tsx',
    ...filesInDir('src/content/settori/installatori'),
  ],
  'settori/sicurezza': [
    'src/app/[locale]/settori/sicurezza/page.tsx',
    ...filesInDir('src/content/settori/sicurezza'),
  ],
  'settori/elettricisti': [
    'src/app/[locale]/settori/elettricisti/page.tsx',
    ...filesInDir('src/content/settori/elettricisti'),
  ],
  'settori/idraulici': [
    'src/app/[locale]/settori/idraulici/page.tsx',
    ...filesInDir('src/content/settori/idraulici'),
  ],
  'settori/termoidraulici': [
    'src/app/[locale]/settori/termoidraulici/page.tsx',
    ...filesInDir('src/content/settori/termoidraulici'),
  ],
  'settori/edilizia': [
    'src/app/[locale]/settori/edilizia/page.tsx',
    ...filesInDir('src/content/settori/edilizia'),
  ],
  'settori/impianti': [
    'src/app/[locale]/settori/impianti/page.tsx',
    ...filesInDir('src/content/settori/impianti'),
  ],
  'settori/manutenzione': [
    'src/app/[locale]/settori/manutenzione/page.tsx',
    ...filesInDir('src/content/settori/manutenzione'),
  ],
  'products/geotapp-flow': [
    'src/app/[locale]/products/geotapp-flow/page.tsx',
    'src/app/products/geotapp-flow/page.tsx',
    'src/app/products/geotapp-flow/systems-data.ts',
  ],
  'products/geotapp-timetracker': [
    'src/app/[locale]/products/geotapp-timetracker/page.tsx',
    'src/app/products/geotapp-timetracker/page.tsx',
    'src/app/products/geotapp-timetracker/systems-data.ts',
  ],
  'products/geotapp-verifier': [
    'src/app/[locale]/products/geotapp-verifier/page.tsx',
    'src/app/products/geotapp-verifier/page.tsx',
    'src/app/products/geotapp-verifier/VerifierContent.tsx',
  ],
  'cos-e-geotapp': [
    'src/app/[locale]/cos-e-geotapp/page.tsx',
  ],
  'pricing': [
    'src/app/[locale]/pricing/page.tsx',
    'src/app/pricing/page.tsx',
  ],
  'roi-calculator': [
    'src/app/[locale]/roi-calculator/page.tsx',
    'src/components/roi-calculator/RoiCalculatorClient.tsx',
  ],
};

function lastCommitDate(relFile) {
  const abs = path.join(REPO_ROOT, relFile);
  if (!existsSync(abs)) {
    console.warn(`[content-dates] manca il file (ignorato): ${relFile}`);
    return null;
  }
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', relFile], {
      cwd: REPO_ROOT,
      encoding: 'utf8',
    }).trim();
    return out || null;
  } catch {
    return null;
  }
}

const result = {};
const today = new Date().toISOString().slice(0, 10);

for (const [key, files] of Object.entries(PAGES)) {
  const dates = files.map(lastCommitDate).filter(Boolean);
  if (dates.length === 0) {
    console.warn(`[content-dates] nessuna data trovata per ${key}, uso oggi come fallback`);
    result[key] = today;
    continue;
  }
  // La piu' recente fra tutti i file dedicati alla pagina.
  dates.sort();
  result[key] = dates[dates.length - 1].slice(0, 10);
}

const banner = `// GENERATO da scripts/seo/generate-content-dates.mjs — NON modificare a mano il
// contenuto della mappa, rilancia lo script (serve una clone con history completa,
// il checkout di CI e' superficiale). Data = ultimo commit che ha toccato i file di
// pagina + contenuto dedicati (vedi PAGES nello script), non la data di build.
// Rigenerato l'ultima volta: ${today}
`;

const body = `${banner}
export const CONTENT_DATES: Record<string, string> = ${JSON.stringify(result, null, 2)};

/** Data ISO (YYYY-MM-DD) dell'ultimo aggiornamento reale del contenuto di una pagina.
 * Fallback alla data odierna se la chiave non esiste, cosi' una pagina nuova non
 * dichiarata qui non mostra una data passata inventata. */
export function contentDateFor(pageKey: string): string {
  return CONTENT_DATES[pageKey] ?? '${today}';
}
`;

const outPath = path.join(REPO_ROOT, 'src/lib/seo/content-dates.ts');
writeFileSync(outPath, body, 'utf8');
console.log(`[content-dates] scritto ${path.relative(REPO_ROOT, outPath)} con ${Object.keys(result).length} chiavi`);
for (const [k, v] of Object.entries(result)) console.log(`  ${k.padEnd(28)} -> ${v}`);
