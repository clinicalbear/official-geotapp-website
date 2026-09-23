// Elenca OGNI elemento che fallisce il contrasto, con classi e colori:
// serve per correggere solo dove serve, senza toccare i fondi scuri dove i
// grigi chiari sono legittimi.
import { chromium } from 'playwright-core';
import { readFileSync, writeFileSync } from 'node:fs';
const AXE = readFileSync('node_modules/axe-core/axe.min.js', 'utf8');
const BASE = process.env.A11Y_BASE || 'https://geotapp.com';
const PAGINE = ['/it/','/it/pricing/','/it/contact/','/it/products/geotapp-timetracker/',
  '/it/products/geotapp-flow/','/it/settori/pulizie/','/it/terms/','/it/privacy/'];

const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome-stable', args: ['--no-sandbox'] });
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const tutti = [];
for (const p of PAGINE) {
  const page = await ctx.newPage();
  try {
    await page.goto(BASE + p, { waitUntil: 'networkidle', timeout: 45000 });
    await page.waitForTimeout(1000);
    await page.addScriptTag({ content: AXE });
    const res = await page.evaluate(async () => {
      const r = await window.axe.run(document, { runOnly: { type: 'rule', values: ['color-contrast'] } });
      return (r.violations[0]?.nodes ?? []).map(n => {
        const el = document.querySelector(n.target[0]);
        const cs = el ? getComputedStyle(el) : null;
        return {
          sel: n.target.join(' '),
          classi: el?.className?.toString?.().slice(0, 90) ?? '',
          tag: el?.tagName ?? '',
          testo: (el?.textContent ?? '').trim().slice(0, 40),
          fg: cs?.color, bg: cs?.backgroundColor,
          msg: (n.any?.[0]?.message ?? '').slice(0, 130),
        };
      });
    });
    tutti.push(...res.map(r => ({ ...r, pagina: p })));
  } catch (e) { console.log('ERR', p, String(e).slice(0, 60)); }
  await page.close();
}
await browser.close();
writeFileSync('scripts/a11y/out/contrasto.json', JSON.stringify(tutti, null, 2));

const perClasse = {};
for (const n of tutti) {
  const k = n.classi || `<${n.tag}>`;
  perClasse[k] ??= { n: 0, ex: n };
  perClasse[k].n++;
}
console.log(`elementi falliti: ${tutti.length}\n`);
for (const [k, v] of Object.entries(perClasse).sort((a,b)=>b[1].n-a[1].n)) {
  console.log(`x${String(v.n).padStart(3)}  ${k.slice(0,74)}`);
  console.log(`      ${v.ex.tag} "${v.ex.testo}"  ${v.ex.msg.slice(0,100)}`);
}
