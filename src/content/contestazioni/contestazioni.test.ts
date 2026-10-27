import { describe, it, expect } from 'vitest';
import itCopy from './it';
import { getContestazioniCopy, LOCALES_CONTESTAZIONI } from './index';

const tutto = (c: typeof itCopy) => JSON.stringify(c);

describe('pagina contestazioni (it)', () => {
  it('ha le tre parti: azienda, chi lavora, committente', () => {
    expect(itCopy.scenes.map((s) => s.kicker)).toEqual(["L'azienda", 'Chi lavora', 'Il committente']);
    for (const s of itCopy.scenes) {
      expect(s.scene.startsWith('«') && s.scene.endsWith('»'), s.kicker).toBe(true);
      expect(s.have.length, s.kicker).toBeGreaterThanOrEqual(2);
      expect(s.change.length, s.kicker).toBeGreaterThanOrEqual(1);
    }
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

  it('niente numeri in percentuale senza fonte, niente recensioni', () => {
    const t = tutto(itCopy);
    expect(t).not.toMatch(/\d\s?%/);
    expect(t).not.toMatch(/recension|testimonial|i nostri clienti dicono/i);
  });

  it('ogni "nessuna posizione" fra le timbrature porta l\'avverbio "in automatico"', () => {
    const frasi = (tutto(itCopy).match(/[^.]*nessuna posizione[^.]*\./gi) ?? []).filter((f) => /fra una timbratura/i.test(f));
    expect(frasi.length).toBeGreaterThan(0);
    for (const f of frasi) expect(f, f).toMatch(/in automatico/);
  });

  it('il permesso in background e detto solo per Android e iPhone (l\'Apple Watch non e verificato)', () => {
    const t = tutto(itCopy);
    const match = t.match(/[^.]*permesso di posizione in background[^.]*\./g) ?? [];
    expect(match.length).toBeGreaterThan(0);
    for (const m of match) expect(m, m).toMatch(/Android e su iPhone/);
  });

  it('la conservazione e detta per intero: registro 12 mesi e report consegnati che restano', () => {
    const t = tutto(itCopy);
    expect(t).toMatch(/dodici mesi/);
    expect(t).toMatch(/trenta giorni/);
    expect(t).toMatch(/report già consegnati restano/);
    expect(t).toMatch(/cinque anni/);
  });

  it('la formula della scheda sta accanto a ogni affermazione sulla verificabilita', () => {
    const formula = 'non costituisce, da solo, prova assoluta del fatto materiale né consulenza legale';
    const committente = itCopy.scenes[2];
    expect(committente.change.join(' ')).toContain(formula);
    expect(itCopy.limits.formula).toContain(formula);
  });

  it('i dati: solo la frase sicura sulla UE', () => {
    expect(tutto(itCopy)).toMatch(/archiviati nell'Unione europea/);
    expect(tutto(itCopy)).not.toMatch(/tutti i dati .* (in|nell)['’]?\s?(UE|Unione)/i);
  });

  it('il trial non compare nel contenuto: sta solo in fondo alla pagina, dai dizionari', () => {
    expect(tutto(itCopy)).not.toMatch(/prova gratu|trial|14 giorni/i);
  });

  it('meta description entro 160 caratteri e titolo entro 70', () => {
    expect(itCopy.metaDesc.length).toBeLessThanOrEqual(190);
    expect(itCopy.metaTitle.length).toBeLessThanOrEqual(70);
  });
});

describe('lingue della pagina', () => {
  it('per ora solo l\'italiano; le altre lingue non hanno la pagina (nessuna copia italiana)', async () => {
    expect(LOCALES_CONTESTAZIONI).toEqual(['it']);
    expect(await getContestazioniCopy('de')).toBeNull();
    expect(await getContestazioniCopy('pt')).toBeNull();
    expect(await getContestazioniCopy('it')).not.toBeNull();
  });
});
