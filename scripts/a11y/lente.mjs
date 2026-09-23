// trial e demo caricano script di terze parti che non chiudono mai `networkidle`:
// si aspetta il DOM e poi un tempo fisso, invece della quiete di rete.
import { chromium } from 'playwright-core';
import { readFileSync } from 'node:fs';
const AXE = readFileSync('node_modules/axe-core/axe.min.js', 'utf8');
const BASE = process.env.A11Y_BASE || 'http://localhost:3111';
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome-stable', args: ['--no-sandbox'] });
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
for (const [p, nome] of [['/it/trial/', 'trial'], ['/it/demo/', 'demo']]) {
  const page = await ctx.newPage();
  try {
    await page.goto(BASE + p, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(4000);
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y); await new Promise(r => setTimeout(r, 90));
      }
    });
    await page.waitForTimeout(1500);
    await page.addScriptTag({ content: AXE });
    const res = await page.evaluate(async () => await window.axe.run(document, {
      runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] } }));
    const tot = res.violations.reduce((a, v) => a + v.nodes.length, 0);
    console.log(`${tot === 0 ? 'OK ' : 'KO '} ${nome}  violazioni:${res.violations.length} elementi:${tot}`);
    for (const v of res.violations) {
      console.log(`     ${v.impact} ${v.id} (${v.nodes.length})  ${v.help}`);
      for (const n of v.nodes.slice(0, 3)) {
        console.log(`       ${n.target.join(' ').slice(0, 70)}`);
        console.log(`       ${(n.html || '').slice(0, 100)}`);
        console.log(`       ${(n.failureSummary || '').split('\n').filter(Boolean)[1]?.slice(0, 110) ?? ''}`);
      }
    }
  } catch (e) { console.log(`ERR ${nome}: ${String(e).slice(0, 100)}`); }
  await page.close();
}
await browser.close();
