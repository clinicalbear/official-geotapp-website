import { describe, it, expect } from 'vitest';
import {
  calcolaPunteggio,
  punteggioMax,
  fasciaPer,
  areeDaRivedere,
  getAutovalutazione,
  avLocale,
  type AvRisposta,
} from './index';

const LOCALES = ['it', 'en', 'de', 'fr', 'es', 'nl', 'pt', 'da', 'sv', 'nb', 'ru'] as const;

describe('autovalutazione scoring', () => {
  const it_ = getAutovalutazione('it');

  it('has 9 questions and a max score of 18', () => {
    expect(it_.domande).toHaveLength(9);
    expect(punteggioMax(it_.domande)).toBe(18);
  });

  it('scores Sì=2, In parte=1, No=0', () => {
    const tutteSi = Object.fromEntries(it_.domande.map((d) => [d.id, 'si' as AvRisposta]));
    const tutteNo = Object.fromEntries(it_.domande.map((d) => [d.id, 'no' as AvRisposta]));
    const tutteParziale = Object.fromEntries(it_.domande.map((d) => [d.id, 'parziale' as AvRisposta]));
    expect(calcolaPunteggio(tutteSi)).toBe(18);
    expect(calcolaPunteggio(tutteNo)).toBe(0);
    expect(calcolaPunteggio(tutteParziale)).toBe(9);
  });

  it('maps scores to the right band', () => {
    expect(fasciaPer(18, it_.fasce).min).toBe(15);
    expect(fasciaPer(15, it_.fasce).min).toBe(15);
    expect(fasciaPer(14, it_.fasce).min).toBe(8);
    expect(fasciaPer(8, it_.fasce).min).toBe(8);
    expect(fasciaPer(7, it_.fasce).min).toBe(0);
    expect(fasciaPer(0, it_.fasce).min).toBe(0);
  });

  it('lists only non-"sì" answers as areas to review, in order', () => {
    const risposte: Record<string, AvRisposta> = {
      finalita: 'si',
      minimizzazione: 'no',
      'base-giuridica': 'parziale',
      informativa: 'si',
    };
    const aree = areeDaRivedere(it_.domande, risposte);
    expect(aree.map((d) => d.id)).toEqual(['minimizzazione', 'base-giuridica']);
  });
});

describe('autovalutazione content', () => {
  it('exposes complete content for every supported locale', () => {
    for (const l of LOCALES) {
      const c = getAutovalutazione(l);
      expect(c.domande, l).toHaveLength(9);
      expect(c.fasce, l).toHaveLength(3);
      expect(c.heading.length, l).toBeGreaterThan(0);
      // every question has feedback text
      for (const d of c.domande) expect(d.feedback.length, `${l}/${d.id}`).toBeGreaterThan(0);
    }
  });

  it('keeps the same question ids across all locales', () => {
    const ids = getAutovalutazione('it').domande.map((d) => d.id);
    for (const l of LOCALES) {
      expect(getAutovalutazione(l).domande.map((d) => d.id), l).toEqual(ids);
    }
  });

  it('falls back to en for unknown locales', () => {
    expect(avLocale('zz')).toBe('en');
    expect(avLocale('de')).toBe('de');
  });
});
