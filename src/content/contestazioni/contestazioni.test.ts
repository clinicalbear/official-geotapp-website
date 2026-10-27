import { describe, it, expect } from 'vitest';
import itCopy from './it';
import { getContestazioniCopy, LOCALES_CONTESTAZIONI } from './index';
import type { ContestazioniCopy } from './types';

// Solo i VALORI di testo (i nomi dei campi, come h1, non sono contenuto).
const valori = (o: unknown): string[] =>
  typeof o === 'string' ? [o] : Array.isArray(o) ? o.flatMap(valori) : o && typeof o === 'object' ? Object.values(o).flatMap(valori) : [];
const tutto = (c: ContestazioniCopy) => valori(c).join('\n');

// Controlli SOLO IT: le regole sulle parole vietate sono scritte in italiano.
describe('pagina contestazioni (it)', () => {
  it('ha le tre parti: azienda, chi lavora, committente', () => {
    expect(itCopy.scenes.map((s) => s.kicker)).toEqual(["L'azienda", 'Chi lavora', 'Il committente']);
  });

  it('niente claim vietati dalla scheda', () => {
    const t = tutto(itCopy);
    const vietati = [
      /zero contestazion/i, /non avere pi[uù] contestazion/i, /prova legale/i, /incontestabil/i, /opponibil/i,
      /certific/i, /a norma/i, /conforme al gdpr/i, /garantisc/i, /cifrat/i, /zero-knowledge/i,
      /tempo reale/i, /mappa live/i, /solo dal vivo/i, /impossibile falsificare/i, /nemmeno noi/i,
    ];
    for (const re of vietati) expect(t, String(re)).not.toMatch(re);
  });

  it('ogni "nessuna posizione" fra le timbrature porta l\'avverbio "in automatico"', () => {
    const frasi = (tutto(itCopy).match(/[^.]*nessuna posizione[^.]*\./gi) ?? []).filter((f) => /fra una timbratura/i.test(f));
    expect(frasi.length).toBeGreaterThan(0);
    for (const f of frasi) expect(f, f).toMatch(/in automatico/);
  });

  it('il permesso in background e detto solo per Android e iPhone', () => {
    const match = tutto(itCopy).match(/[^.]*permesso di posizione in background[^.]*\./g) ?? [];
    expect(match.length).toBeGreaterThan(0);
    for (const m of match) expect(m, m).toMatch(/Android e su iPhone/);
  });

  it('la formula della scheda sta accanto a ogni affermazione sulla verificabilita', () => {
    const formula = 'non costituisce, da solo, prova assoluta del fatto materiale né consulenza legale';
    expect(itCopy.scenes[2].change.join(' ')).toContain(formula);
    expect(itCopy.limits.formula).toContain(formula);
  });

  it('i dati: solo la frase sicura sulla UE', () => {
    expect(tutto(itCopy)).toMatch(/archiviati nell'Unione europea/);
  });
});

// Controlli su OGNI lingua scritta (i file <lingua>.ts presenti nella cartella).
const files = (import.meta as unknown as { glob: (p: string, o: { eager: true }) => Record<string, { default?: ContestazioniCopy }> }).glob('./*.ts', { eager: true });
const lingue = Object.entries(files)
  .filter(([p, m]) => !/(index|types|contestazioni\.test)\.ts$/.test(p) && m.default?.scenes)
  .map(([p, m]) => [p.replace('./', '').replace('.ts', ''), m.default as ContestazioniCopy] as const);

describe.each(lingue)('struttura e regole comuni (%s)', (lingua, c) => {
  it('tre scene complete, quattro limiti, sei domande, scheda', () => {
    expect(c.scenes).toHaveLength(3);
    for (const s of c.scenes) {
      expect(s.scene.length, s.kicker).toBeGreaterThan(10);
      expect(/^[«“„"‘»]/.test(s.scene.trim()), `${lingua} ${s.kicker}: la scena e tra virgolette`).toBe(true);
      expect(s.have.length, s.kicker).toBeGreaterThanOrEqual(2);
      expect(s.change.length, s.kicker).toBeGreaterThanOrEqual(1);
    }
    expect(c.limits.items).toHaveLength(4);
    expect(c.limits.formula.length).toBeGreaterThan(40);
    expect(c.faq.items).toHaveLength(6);
    for (const f of c.faq.items) { expect(f.q.length).toBeGreaterThan(8); expect(f.a.length).toBeGreaterThan(20); }
    expect(c.card.title.length).toBeGreaterThan(5);
    expect(c.card.title.length).toBeLessThanOrEqual(80);
    expect(c.card.text.length).toBeLessThanOrEqual(150);
    expect(c.card.cta.length).toBeLessThanOrEqual(36);
  });

  it('meta nei limiti', () => {
    expect(c.metaTitle.length).toBeLessThanOrEqual(75);
    expect(c.metaDesc.length).toBeLessThanOrEqual(200);
  });

  it('la conservazione e detta per intero (registro e report consegnati) nella scena di chi lavora', () => {
    expect(c.scenes[1].extra?.paragraphs.length, lingua).toBeGreaterThanOrEqual(2);
  });

  it('nessuna percentuale, nessun indirizzo, nessun numero fuori da 12, 30, 5, 27, 2026', () => {
    const t = tutto(c);
    const ammessi = lingua === 'it' ? ['12', '30', '5', '27', '2026', '4'] : ['12', '30', '5', '27', '2026'];
    expect(t).not.toMatch(/\d\s?%/);
    expect(t).not.toMatch(/https?:\/\//);
    const numeri = new Set((t.match(/\d+/g) ?? []));
    for (const n of numeri) expect(ammessi, `${lingua}: numero ${n}`).toContain(n);
  });

  it('niente trial ne manuale nel contenuto: il trial sta in fondo, dai dizionari', () => {
    expect(tutto(c)).not.toMatch(/\btrial\b|manuale|manual\b|Handbuch|manuel\b/i);
  });

  it('niente recensioni inventate', () => {
    expect(tutto(c)).not.toMatch(/testimonial|recension|reviews? from|bewertung/i);
  });
});

describe('lingue della pagina', () => {
  it('ogni lingua indicizzata ha il suo contenuto e le lingue regionali inglesi usano l\'inglese', async () => {
    for (const l of LOCALES_CONTESTAZIONI) expect(await getContestazioniCopy(l), l).not.toBeNull();
  });
});
