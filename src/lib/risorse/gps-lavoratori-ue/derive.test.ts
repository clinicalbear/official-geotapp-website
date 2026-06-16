import { describe, it, expect } from 'vitest';
import { getPaesiSeverita, localizePaesiSeverita } from './derive';

describe('getPaesiSeverita', () => {
  const list = getPaesiSeverita();

  it('restituisce tutti i paesi pubblicati (39)', () => {
    expect(list.length).toBe(39);
  });

  it('severità è 0-100 e coerente col numero di adempimenti', () => {
    for (const p of list) {
      expect(p.severita).toBeGreaterThanOrEqual(0);
      expect(p.severita).toBeLessThanOrEqual(100);
      expect(p.totaleAdempimenti).toBeGreaterThan(0);
      // obbligatori + condizionali non possono superare il totale
      expect(p.obbligatori.length + p.condizionali.length).toBeLessThanOrEqual(p.totaleAdempimenti);
    }
  });

  it('un paese con tutti adempimenti obbligatori avrebbe severità ~100', () => {
    // verifica la formula su un caso noto: severita = round((si + 0.5*dipende)/tot*100)
    for (const p of list) {
      const expected = Math.round(
        ((p.obbligatori.length + 0.5 * p.condizionali.length) / p.totaleAdempimenti) * 100,
      );
      expect(p.severita).toBe(expected);
    }
  });

  it('ogni paese ha una sanzione con fonte', () => {
    for (const p of list) {
      expect(typeof p.sanzioneUrlFonte).toBe('string');
      expect(p.sanzioneUrlFonte.length).toBeGreaterThan(0);
    }
  });
});

describe('localizePaesiSeverita', () => {
  it('localizza nome e testi in stringhe', () => {
    const loc = localizePaesiSeverita(getPaesiSeverita(), 'de');
    expect(loc.length).toBe(39);
    for (const p of loc) {
      expect(typeof p.nome).toBe('string');
      expect(typeof p.sanzioneImporto).toBe('string');
      expect(Array.isArray(p.obbligatori)).toBe(true);
      p.obbligatori.forEach((v) => expect(typeof v).toBe('string'));
    }
  });
});
