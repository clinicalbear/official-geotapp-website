/**
 * Controlla che nei titoli nessuna parola vada a capo spezzata e che nessuna parola esca dallo schermo.
 * Regola di Mike (16/11/2026): "nessun termine in tutte le lingue, nei titoli, vada a capo spezzando la parola".
 *
 * Uso: node scripts/controlla-titoli.mjs <base-url> [lingue separate da virgola] [percorsi separati da virgola]
 *   es. node scripts/controlla-titoli.mjs http://127.0.0.1:3918 it,en,de
 * Esce 1 se trova anche un solo problema. Usa Chrome vero (/opt/google/chrome/chrome).
 */
import { chromium } from 'playwright-core';

const base = process.argv[2] || 'http://127.0.0.1:3918';
const LINGUE = (process.argv[3] || 'it,en,de,fr,es,pt,nl,sv,da,nb').split(',');
const SETTORI = ['edilizia', 'elettricisti', 'idraulici', 'impianti', 'impresa-di-pulizie', 'installatori',
  'manutenzione', 'pulizie', 'sicurezza', 'termoidraulici'];
const PERCORSI = process.argv[4] ? process.argv[4].split(',') : ['', 'pricing/', 'settori/', ...SETTORI.map((s) => `settori/${s}/`)];
const LARGHEZZE = [390, 1440];
const SEL = 'h1, h2, h3, h4, .l-display, .big, .cardn b, .nv-tool h3';

const browser = await chromium.launch({ executablePath: '/opt/google/chrome/chrome', headless: true });
const problemi = [];
for (const w of LARGHEZZE) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  for (const L of LINGUE) {
    for (const p of PERCORSI) {
      const url = `${base}/${L}/${p}`;
      let r;
      try { r = await page.goto(url, { waitUntil: 'networkidle', timeout: 120000 }); }
      catch (e) { problemi.push({ w, url, tipo: 'caricamento', testo: String(e).slice(0, 120) }); continue; }
      if (!r || r.status() >= 400) { problemi.push({ w, url, tipo: 'http', testo: String(r && r.status()) }); continue; }
      await page.evaluate(() => document.fonts.ready);
      const trovati = await page.evaluate(({ sel, vw }) => {
        const out = [];
        for (const el of document.querySelectorAll(sel)) {
          const st = getComputedStyle(el);
          if (st.display === 'none' || st.visibility === 'hidden' || el.getClientRects().length === 0) continue;
          // titoli solo per lettori di schermo (sr-only, larghi 1px): non si vedono
          if (el.closest('.sr-only') || el.getBoundingClientRect().width < 4) continue;
          const box = el.getBoundingClientRect();
          const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
          for (let n = walker.nextNode(); n; n = walker.nextNode()) {
            const t = n.textContent; const re = /[^\s ]+/g; let m;
            while ((m = re.exec(t))) {
              const rg = document.createRange(); rg.setStart(n, m.index); rg.setEnd(n, m.index + m[0].length);
              const rects = [...rg.getClientRects()].filter((x) => x.width > 0.5);
              const tops = new Set(rects.map((x) => Math.round(x.top)));
              const parola = m[0];
              if (tops.size > 1 && !/[-/–]/.test(parola)) out.push({ tipo: 'parola spezzata', testo: parola, titolo: el.textContent.trim().slice(0, 80) });
              const destra = Math.max(...rects.map((x) => x.right));
              if (rects.length && (destra > vw + 1 || destra > box.right + 2)) out.push({ tipo: 'esce dal riquadro', testo: parola, titolo: el.textContent.trim().slice(0, 80) });
            }
          }
        }
        return out;
      }, { sel: SEL, vw: w });
      for (const t of trovati) problemi.push({ w, url, ...t });
    }
  }
  await ctx.close();
}
await browser.close();
const visti = new Set();
for (const p of problemi) {
  const k = `${p.w}|${p.url}|${p.tipo}|${p.testo}`; if (visti.has(k)) continue; visti.add(k);
  console.log(`${p.w}px  ${p.url}  ${p.tipo}: «${p.testo}»  in «${p.titolo || ''}»`);
}
console.log(`\n${visti.size} problemi su ${LINGUE.length} lingue x ${PERCORSI.length} pagine x ${LARGHEZZE.length} larghezze`);
process.exit(visti.size ? 1 : 0);
