import { describe, it, expect } from 'vitest';
import { PAESI, getSchedaBySlug, getAllStati } from './index';
import { validateScheda } from './validate';

describe('registro paesi GPS lavoratori UE', () => {
  it('getSchedaBySlug("italia") ritorna una scheda completa', () => {
    const scheda = getSchedaBySlug('italia');
    expect(scheda).toBeDefined();
    expect(scheda?.stato).toBe('completo');
  });

  it('getSchedaBySlug("nonexistent") ritorna undefined', () => {
    expect(getSchedaBySlug('nonexistent')).toBeUndefined();
  });

  it('ogni scheda in PAESI passa validateScheda', () => {
    for (const s of PAESI) {
      const res = validateScheda(s);
      if (!res.ok) {
        // Aiuta il debug stampando il paese e gli errori specifici.
        throw new Error(`scheda "${s.slugCanonico}" non valida: ${res.errori.join('; ')}`);
      }
      expect(res.ok).toBe(true);
    }
  });

  it('PAESI non ha slugCanonico o codiceISO duplicati', () => {
    const slugs = new Set(PAESI.map((s) => s.slugCanonico));
    expect(slugs.size).toBe(PAESI.length);
    const isos = new Set(PAESI.map((s) => s.codiceISO));
    expect(isos.size).toBe(PAESI.length);
  });

  it('getAllStati() include una voce per "italia" con lo stato giusto', () => {
    const stati = getAllStati();
    const it = stati.find((e) => e.slugCanonico === 'italia');
    expect(it).toBeDefined();
    expect(it?.stato).toBe('completo');
    expect(it?.nome).toBe('Italia');
    expect(it?.bandiera).toBe('🇮🇹');
  });
});
