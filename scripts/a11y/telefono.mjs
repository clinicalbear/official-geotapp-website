// Audit sul TELEFONO VERO: Playwright si attacca via CDP al Chrome dell'S25
// (adb forward tcp:9444 localabstract:chrome_devtools_remote), quindi quello che
// si misura e' il rendering del dispositivo — schermo, densita', font di sistema —
// non un'emulazione da scrivania.
import { chromium } from 'playwright-core';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const AXE = readFileSync('node_modules/axe-core/axe.min.js', 'utf8');
const BASE = 'http://localhost:3111';
const PAGINE = [
  ['/it/', 'home'], ['/it/pricing/', 'prezzi'], ['/it/trial/', 'trial'],
  ['/it/contact/', 'contatti'], ['/it/products/geotapp-timetracker/', 'prodotto TT'],
  ['/it/products/geotapp-flow/', 'prodotto Flow'], ['/it/settori/pulizie/', 'settore pulizie'],
  ['/it/accessibilita/', 'accessibilita'], ['/it/demo/', 'demo'],
  ['/en/', 'home EN'], ['/de/', 'home DE'], ['/ru/', 'home RU'],
];

const browser = await chromium.connectOverCDP('http://localhost:9444');
const ctx = browser.contexts()[0];
const page = ctx.pages()[0] ?? await ctx.newPage();
const esiti = [];

const dim = await page.evaluate(() => ({
  w: window.innerWidth, h: window.innerHeight, dpr: window.devicePixelRatio,
}));
console.log(`schermo del telefono: ${dim.w}x${dim.h} css px, densita' ${dim.dpr}\n`);

for (const [path, nome] of PAGINE) {
  try {
    await page.goto(BASE + path, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(2500);
    // stesso trattamento del giro da scrivania: si scorre prima di misurare,
    // se no si legge il contrasto a meta' animazione.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 500) {
        window.scrollTo(0, y); await new Promise(r => setTimeout(r, 80));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(1200);
    await page.addScriptTag({ content: AXE });
    const res = await page.evaluate(async () => await window.axe.run(document, {
      runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] } }));
    const viol = res.violations.map(v => ({
      id: v.id, impact: v.impact, n: v.nodes.length, help: v.help,
      esempi: v.nodes.slice(0, 3).map(n => ({
        target: n.target.join(' ').slice(0, 80),
        html: (n.html || '').slice(0, 120),
        msg: (n.failureSummary || '').split('\n').filter(Boolean)[1]?.slice(0, 120) ?? '',
      })),
    }));
    const tot = viol.reduce((a, v) => a + v.n, 0);
    esiti.push({ nome, path, violazioni: viol });
    console.log(`${tot === 0 ? 'OK ' : 'KO '} ${nome.padEnd(18)} violazioni:${String(viol.length).padStart(2)} elementi:${String(tot).padStart(3)}`);
    for (const v of viol) {
      console.log(`      ${v.impact} ${v.id} (${v.n})`);
      for (const e of v.esempi) console.log(`        ${e.html.slice(0,90)}\n          ${e.msg.slice(0,110)}`);
    }
  } catch (e) {
    console.log(`ERR ${nome}: ${String(e).slice(0, 90)}`);
  }
}
mkdirSync('scripts/a11y/out', { recursive: true });
writeFileSync('scripts/a11y/out/telefono.json', JSON.stringify(esiti, null, 2));
await browser.close();
