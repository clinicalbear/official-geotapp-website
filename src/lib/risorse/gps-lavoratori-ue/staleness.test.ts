import { describe, it, expect } from 'vitest';
import type { SchedaPaese } from './types';
import { isStale, schedeDaRicontrollare } from './staleness';

describe('isStale', () => {
  it('una data recente (entro la soglia) NON e stale', () => {
    // 3 mesi indietro, soglia 6 mesi → fresca
    expect(isStale('2026-03-15', '2026-06-15')).toBe(false);
  });

  it('una data più vecchia della soglia (6 mesi) e stale', () => {
    // 7 mesi indietro, soglia 6 mesi → stale
    expect(isStale('2025-11-15', '2026-06-15')).toBe(true);
  });

  it('al confine esatto della soglia NON e ancora stale', () => {
    // esattamente 6 mesi indietro: stesso giorno/mese → non ancora scaduta
    expect(isStale('2025-12-15', '2026-06-15')).toBe(false);
  });

  it('un giorno oltre il confine della soglia e stale', () => {
    // 6 mesi e 1 giorno indietro
    expect(isStale('2025-12-14', '2026-06-15')).toBe(true);
  });

  it('stringa vuota e trattata come stale (va segnalata)', () => {
    expect(isStale('', '2026-06-15')).toBe(true);
  });

  it('una data non valida e trattata come stale', () => {
    expect(isStale('non-una-data', '2026-06-15')).toBe(true);
  });

  it('rispetta una soglia personalizzata (mesi)', () => {
    // 2 mesi indietro, soglia 1 mese → stale
    expect(isStale('2026-04-15', '2026-06-15', 1)).toBe(true);
    // 2 mesi indietro, soglia 3 mesi → fresca
    expect(isStale('2026-04-15', '2026-06-15', 3)).toBe(false);
  });
});

describe('schedeDaRicontrollare', () => {
  function scheda(over: Partial<SchedaPaese>): SchedaPaese {
    return {
      codiceISO: 'XX',
      slugCanonico: 'paese',
      nome: 'Paese',
      bandiera: '🏳️',
      federale: false,
      stato: 'completo',
      autoritaCompetente: {
        ente: 'Autorita',
        urlFonte: 'https://example.test',
        verificatoIl: '2026-06-15',
      },
      checklist: [],
      procedura: [],
      contatti: [],
      modelloPdf: null,
      sanzioneMax: { importo: '0', casoCitato: '', urlFonte: 'https://example.test' },
      fonti: [],
      aggiornatoIl: '2026-06-15',
      ...over,
    };
  }

  const oggi = '2026-06-15';

  it('non restituisce schede tutte fresche', () => {
    const fresca = scheda({ slugCanonico: 'fresca', nome: 'Fresca' });
    expect(schedeDaRicontrollare([fresca], oggi)).toEqual([]);
  });

  it('segnala una scheda con autorita stale', () => {
    const vecchia = scheda({
      slugCanonico: 'vecchia',
      nome: 'Vecchia',
      autoritaCompetente: {
        ente: 'Autorita Vecchia',
        urlFonte: 'https://example.test',
        verificatoIl: '2025-01-01',
      },
    });
    const out = schedeDaRicontrollare([vecchia], oggi);
    expect(out).toHaveLength(1);
    expect(out[0].slugCanonico).toBe('vecchia');
    expect(out[0].nome).toBe('Vecchia');
    expect(out[0].voci.length).toBeGreaterThan(0);
    expect(out[0].voci.join(' ')).toContain('Autorita Vecchia');
  });

  it('segnala una scheda con un contatto stale anche se autorita fresca', () => {
    const mista = scheda({
      slugCanonico: 'mista',
      nome: 'Mista',
      contatti: [
        { ente: 'Contatto Fresco', urlFonte: 'https://a.test', verificatoIl: '2026-06-01' },
        { ente: 'Contatto Stantio', urlFonte: 'https://b.test', verificatoIl: '2024-01-01' },
      ],
    });
    const out = schedeDaRicontrollare([mista], oggi);
    expect(out).toHaveLength(1);
    expect(out[0].voci.join(' ')).toContain('Contatto Stantio');
    expect(out[0].voci.join(' ')).not.toContain('Contatto Fresco');
  });

  it('sceglie solo le schede giuste in un insieme misto', () => {
    const fresca = scheda({ slugCanonico: 'fresca', nome: 'Fresca' });
    const vecchia = scheda({
      slugCanonico: 'vecchia',
      nome: 'Vecchia',
      autoritaCompetente: {
        ente: 'Autorita Vecchia',
        urlFonte: 'https://example.test',
        verificatoIl: '2025-01-01',
      },
    });
    const out = schedeDaRicontrollare([fresca, vecchia], oggi);
    expect(out.map((o) => o.slugCanonico)).toEqual(['vecchia']);
  });
});
