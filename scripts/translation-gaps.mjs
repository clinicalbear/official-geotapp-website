#!/usr/bin/env node
// translation-gaps.mjs — #8 of the automation backlog (P2), NO-API half.
//
// The TRANSLATION ITSELF is judgment work (Michele's voice) → stays Claude-in-session
// (or DeepL Free per the existing batch plan). What's mechanical, and what this does,
// is GAP DETECTION: which keys exist in the reference locale (it.json) but are MISSING
// in each other site locale, so the human/Claude knows exactly what to translate.
//
// Pure JSON diff, zero network, zero API. Reads src/dictionaries/*.json.
//
//   node scripts/translation-gaps.mjs            # human summary
//   node scripts/translation-gaps.mjs --json     # machine worklist (stdout)
//   node scripts/translation-gaps.mjs --selftest # logic check on fixtures
//
// Exit 1 if any locale has missing keys (useful as a pre-commit / CI check).

import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const DICT_DIR = join(HERE, '..', 'src', 'dictionaries');
const REFERENCE = 'it'; // site is IT-first

// Flatten nested object into dotted key paths (arrays treated as leaves).
function flatten(obj, prefix = '', out = new Set()) {
  if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
    for (const [k, v] of Object.entries(obj)) flatten(v, prefix ? `${prefix}.${k}` : k, out);
  } else {
    out.add(prefix);
  }
  return out;
}

function selftest() {
  const ref = flatten({ a: 1, b: { c: 2, d: 3 } });
  const loc = flatten({ a: 1, b: { c: 2 } });
  const missing = [...ref].filter((k) => !loc.has(k));
  const ok = missing.length === 1 && missing[0] === 'b.d';
  console.log(`  [${ok ? 'PASS' : 'FAIL'}] missing-key detection: ${JSON.stringify(missing)} (expected ["b.d"])`);
  const extra = [...loc].filter((k) => !ref.has(k));
  const ok2 = extra.length === 0;
  console.log(`  [${ok2 ? 'PASS' : 'FAIL'}] no false extras`);
  console.log(`\nselftest: ${[ok, ok2].filter(Boolean).length}/2 passed`);
  process.exit(ok && ok2 ? 0 : 1);
}

function main() {
  const argv = process.argv.slice(2);
  if (argv.includes('--selftest')) return selftest();
  const asJson = argv.includes('--json');

  const refKeys = flatten(JSON.parse(readFileSync(join(DICT_DIR, `${REFERENCE}.json`), 'utf8')));
  const files = readdirSync(DICT_DIR).filter((f) => f.endsWith('.json') && f !== `${REFERENCE}.json`);

  const report = [];
  for (const file of files.sort()) {
    const locale = file.replace('.json', '');
    let keys;
    try {
      keys = flatten(JSON.parse(readFileSync(join(DICT_DIR, file), 'utf8')));
    } catch (e) {
      report.push({ locale, error: String(e?.message || e) });
      continue;
    }
    const missing = [...refKeys].filter((k) => !keys.has(k));
    const extra = [...keys].filter((k) => !refKeys.has(k));
    report.push({ locale, missing_count: missing.length, extra_count: extra.length, missing: missing.slice(0, 50) });
  }

  if (asJson) {
    console.log(JSON.stringify({ reference: REFERENCE, locales: report }, null, 2));
  } else {
    console.log(`Translation gaps vs ${REFERENCE}.json (reference):\n`);
    for (const r of report) {
      if (r.error) { console.log(`  ❌ ${r.locale}: parse error — ${r.error}`); continue; }
      const tag = r.missing_count === 0 ? '✅' : '⚠️ ';
      console.log(`  ${tag} ${r.locale.padEnd(7)} missing=${r.missing_count}  extra=${r.extra_count}`);
      if (r.missing_count) console.log(`       e.g. ${r.missing.slice(0, 5).join(', ')}${r.missing_count > 5 ? ' …' : ''}`);
    }
    console.log('\nLe chiavi mancanti vanno tradotte in sessione (voce Michele), non da una API.');
  }

  const anyMissing = report.some((r) => r.missing_count > 0 || r.error);
  process.exit(anyMissing ? 1 : 0);
}

main();
