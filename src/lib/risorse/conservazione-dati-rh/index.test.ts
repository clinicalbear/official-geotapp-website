import { describe, it, expect } from 'vitest';
import {
  buildRighe,
  getConservazione,
  cdLocale,
  STATUTORY_DOCUMENTI,
} from './index';

const LOCALES = ['it', 'en', 'de', 'fr', 'es', 'nl', 'pt', 'da', 'sv', 'nb', 'ru'] as const;

describe('conservazione content', () => {
  it('exposes 6 data types with full content for every locale', () => {
    for (const l of LOCALES) {
      const c = getConservazione(l);
      expect(c.tipi, l).toHaveLength(6);
      for (const t of c.tipi) {
        expect(t.nome.length, `${l}/${t.id}/nome`).toBeGreaterThan(0);
        expect(t.durata.length, `${l}/${t.id}/durata`).toBeGreaterThan(0);
        expect(t.nota.length, `${l}/${t.id}/nota`).toBeGreaterThan(0);
      }
      expect(c.unitAnni.length, l).toBeGreaterThan(0);
    }
  });

  it('keeps the same type ids across all locales, with exactly one perPaese type', () => {
    const ids = getConservazione('it').tipi.map((t) => t.id);
    for (const l of LOCALES) {
      expect(getConservazione(l).tipi.map((t) => t.id), l).toEqual(ids);
      expect(getConservazione(l).tipi.filter((t) => t.perPaese), l).toHaveLength(1);
    }
  });

  it('falls back to en for unknown locales', () => {
    expect(cdLocale('zz')).toBe('en');
    expect(cdLocale('fr')).toBe('fr');
  });
});

describe('buildRighe', () => {
  const c = getConservazione('it');

  it('returns only the selected types, in canonical order', () => {
    const righe = buildRighe(c, ['documenti', 'presenze'], 'IT', 'Italia');
    expect(righe.map((r) => r.nome)).toEqual([
      c.tipi.find((t) => t.id === 'presenze')!.nome,
      c.tipi.find((t) => t.id === 'documenti')!.nome,
    ]);
  });

  it('uses the per-country statutory duration for documenti when the country is mapped', () => {
    const righe = buildRighe(c, ['documenti'], 'IT', 'Italia');
    const doc = righe[0];
    expect(doc.durata).toBe(`${STATUTORY_DOCUMENTI.IT.anni} ${c.unitAnni}`);
    expect(doc.nota).toContain(STATUTORY_DOCUMENTI.IT.ref);
    expect(doc.nota).toContain('Italia');
  });

  it('falls back to baseline duration for documenti when the country has no mapping', () => {
    const baseline = c.tipi.find((t) => t.id === 'documenti')!;
    const righe = buildRighe(c, ['documenti'], 'GR', 'Grecia');
    expect(righe[0].durata).toBe(baseline.durata);
    expect(righe[0].nota).toBe(baseline.nota);
  });

  it('never applies per-country logic to non-documenti types', () => {
    const baseline = c.tipi.find((t) => t.id === 'geolocalizzazione')!;
    const righe = buildRighe(c, ['geolocalizzazione'], 'DE', 'Germania');
    expect(righe[0].durata).toBe(baseline.durata);
  });
});
