// Audit accessibilita' reale: Chrome vero + axe-core contro EN 301 549 / WCAG 2.1 AA.
// Non legge il sorgente: carica le pagine come le carica una persona.
import { chromium } from 'playwright-core';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const AXE = readFileSync('node_modules/axe-core/axe.min.js', 'utf8');
const BASE = process.env.A11Y_BASE || 'https://geotapp.com';

// Le pagine che contano: quelle dove si decide e si compra.
const PAGINE = [
  ['/it/', 'home'],
  ['/it/pricing/', 'prezzi'],
  ['/it/trial/', 'trial'],
  ['/it/contact/', 'contatti'],
  ['/it/products/geotapp-timetracker/', 'prodotto TT'],
  ['/it/products/geotapp-flow/', 'prodotto Flow'],
  ['/it/settori/pulizie/', 'settore pulizie'],
  ['/it/demo/', 'demo'],
  ['/it/terms/', 'termini'],
  ['/it/privacy/', 'privacy'],
  ['/it/accessibilita/', 'accessibilita'],
  ['/it/risorse/generatore-informativa-gps/', 'generatore informativa'],
  // Una per lingua, per stanare i problemi che nascono dalla traduzione.
  ['/en/', 'home EN'], ['/de/', 'home DE'], ['/fr/', 'home FR'],
  ['/es/', 'home ES'], ['/nl/', 'home NL'], ['/pt/', 'home PT'],
  ['/da/', 'home DA'], ['/sv/', 'home SV'], ['/nb/', 'home NB'],
  ['/ru/', 'home RU'],
];

const browser = await chromium.launch({
  executablePath: '/usr/bin/google-chrome-stable',
  args: ['--no-sandbox'],
});
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const esiti = [];

for (const [path, nome] of PAGINE) {
  const page = await ctx.newPage();
  const url = BASE + path;
  try {
    const r = await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
    // 🔴 Scorrere fino in fondo PRIMA di misurare: i blocchi di chiusura entrano
    // con un'animazione di opacita' legata allo scroll, e misurarli a meta'
    // transizione da' contrasti falsi — bassi, e diversi a ogni giro. Senza
    // questo si finisce per "correggere" colori che a schermo fermo vanno bene.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 90));
      }
      window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitForTimeout(2000);
    await page.addScriptTag({ content: AXE });
    const res = await page.evaluate(async () => await window.axe.run(document, {
      runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] },
    }));
    const viol = res.violations.map(v => ({
      id: v.id, impact: v.impact, help: v.help, n: v.nodes.length,
      esempi: v.nodes.slice(0, 3).map(n => ({
        target: n.target.join(' '),
        html: (n.html || '').slice(0, 160),
        msg: (n.failureSummary || '').split('\n').filter(Boolean).slice(0, 2).join(' | '),
      })),
    }));
    esiti.push({ nome, url, status: r?.status(), violazioni: viol,
                 passati: res.passes.length, incompleti: res.incomplete.length });
    const tot = viol.reduce((a, v) => a + v.n, 0);
    console.log(`${tot === 0 ? 'OK  ' : 'KO  '} ${nome.padEnd(18)} ${String(r?.status()).padEnd(4)} violazioni:${String(viol.length).padStart(2)} elementi:${String(tot).padStart(3)}`);
  } catch (e) {
    esiti.push({ nome, url, errore: String(e).slice(0, 160) });
    console.log(`ERR ${nome.padEnd(18)} ${String(e).slice(0, 90)}`);
  }
  await page.close();
}
await browser.close();

mkdirSync('scripts/a11y/out', { recursive: true });
writeFileSync('scripts/a11y/out/axe.json', JSON.stringify(esiti, null, 2));

// Riepilogo per regola: quella che si ripete su tutte le pagine e' una sola
// correzione nel layout, non venti.
const perRegola = {};
for (const e of esiti) for (const v of e.violazioni ?? []) {
  perRegola[v.id] ??= { impact: v.impact, help: v.help, pagine: 0, elementi: 0, esempi: v.esempi };
  perRegola[v.id].pagine++; perRegola[v.id].elementi += v.n;
}
console.log('\n=== PER REGOLA ===');
for (const [id, d] of Object.entries(perRegola).sort((a, b) => b[1].elementi - a[1].elementi)) {
  console.log(`${String(d.impact).padEnd(8)} ${id.padEnd(30)} pagine:${String(d.pagine).padStart(2)}  elementi:${String(d.elementi).padStart(3)}  ${d.help}`);
  for (const ex of d.esempi.slice(0, 2)) console.log(`         ${ex.target}  ${ex.html.slice(0, 100)}`);
}
console.log(`\ntotale violazioni distinte: ${Object.keys(perRegola).length}`);
