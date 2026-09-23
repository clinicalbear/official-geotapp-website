// WCAG 2.1 AA, criterio 1.4.10 "Reflow": il contenuto non deve richiedere
// scorrimento ORIZZONTALE. axe non lo controlla, quindi si misura a mano:
// scrollWidth del documento contro la larghezza della finestra.
import { chromium } from 'playwright-core';
const BASE = 'http://localhost:3111';
const PAGINE = ['/it/','/it/pricing/','/it/trial/','/it/contact/','/it/demo/',
  '/it/products/geotapp-timetracker/','/it/products/geotapp-flow/',
  '/it/settori/pulizie/','/it/accessibilita/','/de/','/ru/'];
const browser = await chromium.connectOverCDP('http://localhost:9444');
const page = browser.contexts()[0].pages()[0];
let rotti = 0;
for (const p of PAGINE) {
  await page.goto(BASE + p, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(2000);
  const r = await page.evaluate(() => {
    const d = document.documentElement;
    const over = [];
    // chi sborda fuori: si guardano gli elementi piu' larghi della finestra
    for (const el of document.querySelectorAll('body *')) {
      const b = el.getBoundingClientRect();
      if (b.width > window.innerWidth + 2 && b.width > 0) {
        over.push(`${el.tagName}.${(el.className||'').toString().slice(0,34)} ${Math.round(b.width)}px`);
        if (over.length >= 3) break;
      }
    }
    return { scroll: d.scrollWidth, win: window.innerWidth, over };
  });
  const ok = r.scroll <= r.win + 2;
  if (!ok) rotti++;
  console.log(`${ok ? 'OK ' : 'KO '} ${p.padEnd(38)} contenuto ${r.scroll}px / finestra ${r.win}px`);
  for (const o of r.over) console.log(`      esce: ${o}`);
}
console.log(`\npagine con scorrimento orizzontale: ${rotti}/${PAGINE.length}`);
await browser.close();
