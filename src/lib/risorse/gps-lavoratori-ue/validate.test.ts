import { describe, it, expect } from 'vitest';
import { validateScheda } from './validate';
import type { SchedaPaese } from './types';

/** Minimal valid `completo` fixture; spread-override per test to keep DRY. */
function baseScheda(): SchedaPaese {
  return {
    codiceISO: 'DE',
    slugCanonico: 'germania',
    nome: 'Germania',
    bandiera: '🇩🇪',
    federale: true,
    stato: 'completo',
    autoritaCompetente: {
      ente: 'BfDI',
      urlFonte: 'https://www.bfdi.bund.de/',
      verificatoIl: '2026-06-13',
    },
    checklist: [
      {
        voce: 'Serve il consenso del lavoratore?',
        risposta: 'dipende',
        dettaglio: 'Il consenso raramente è base giuridica valida nel rapporto di lavoro.',
        fonte: { titolo: 'BDSG §26', url: 'https://www.gesetze-im-internet.de/bdsg_2018/__26.html' },
      },
    ],
    procedura: [{ passo: 1, descrizione: 'Valutazione impatto privacy.' }],
    contatti: [
      {
        ente: 'Datenschutzbehörde Bayern',
        email: 'poststelle@lda.bayern.de',
        urlFonte: 'https://www.lda.bayern.de/',
        verificatoIl: '2026-06-13',
      },
    ],
    modelloPdf: { disponibile: true, lingua: 'de', url: 'https://geotapp.com/modelli/de.pdf' },
    sanzioneMax: {
      importo: '20.000.000 €',
      casoCitato: 'GDPR art. 83',
      urlFonte: 'https://eur-lex.europa.eu/',
    },
    fonti: [{ titolo: 'GDPR', url: 'https://eur-lex.europa.eu/' }],
    aggiornatoIl: '2026-06-13',
  };
}

describe('validateScheda', () => {
  it('accepts a fully valid completo card', () => {
    const r = validateScheda(baseScheda());
    expect(r.ok).toBe(true);
    expect(r.errori).toEqual([]);
  });

  it('accepts an in-arrivo card with empty checklist', () => {
    const r = validateScheda({
      ...baseScheda(),
      stato: 'in-arrivo',
      checklist: [],
      modelloPdf: null,
    });
    expect(r.ok).toBe(true);
    expect(r.errori).toEqual([]);
  });

  it('rejects a completo card with modelloPdf null', () => {
    const r = validateScheda({ ...baseScheda(), modelloPdf: null });
    expect(r.ok).toBe(false);
    expect(r.errori.some((e) => e.includes('modelloPdf'))).toBe(true);
  });

  it('rejects a completo card with empty checklist but valid modelloPdf', () => {
    const r = validateScheda({ ...baseScheda(), checklist: [] });
    expect(r.ok).toBe(false);
    expect(r.errori.some((e) => e.includes('checklist'))).toBe(true);
  });

  it('rejects a card whose top-level aggiornatoIl is non-ISO (2026/6/13)', () => {
    const r = validateScheda({ ...baseScheda(), aggiornatoIl: '2026/6/13' });
    expect(r.ok).toBe(false);
    expect(r.errori.some((e) => e.includes('aggiornatoIl'))).toBe(true);
  });

  it('rejects a card whose autoritaCompetente.verificatoIl is non-ISO (13/06/2026)', () => {
    const base = baseScheda();
    const r = validateScheda({
      ...base,
      autoritaCompetente: { ...base.autoritaCompetente, verificatoIl: '13/06/2026' },
    });
    expect(r.ok).toBe(false);
    expect(r.errori.some((e) => e.includes('verificatoIl'))).toBe(true);
  });

  it('rejects a card whose contact verificatoIl is non-ISO (13/06/2026)', () => {
    const base = baseScheda();
    const r = validateScheda({
      ...base,
      contatti: [{ ...base.contatti[0], verificatoIl: '13/06/2026' }],
    });
    expect(r.ok).toBe(false);
    expect(r.errori.some((e) => e.includes('verificatoIl'))).toBe(true);
  });

  it('rejects a checklist item with empty fonte.url', () => {
    const base = baseScheda();
    const r = validateScheda({
      ...base,
      checklist: [{ ...base.checklist[0], fonte: { titolo: 'X', url: '' } }],
    });
    expect(r.ok).toBe(false);
    expect(r.errori.some((e) => e.includes('fonte.url'))).toBe(true);
  });
});
