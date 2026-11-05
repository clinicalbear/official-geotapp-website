import { describe, it, expect } from 'vitest';
import { pianoPerOperatori } from './piano-per-operatori';

describe('pianoPerOperatori', () => {
  it('senza promo segue i tetti del listino: Solo 2, Team 5, poi Business', () => {
    expect(pianoPerOperatori(2, false).piano).toBe('solo');
    expect(pianoPerOperatori(3, false).piano).toBe('team');
    expect(pianoPerOperatori(5, false).piano).toBe('team');
    expect(pianoPerOperatori(6, false).piano).toBe('business');
  });

  it('con la promo i tetti salgono: Solo 5, Team 15', () => {
    expect(pianoPerOperatori(5, true).piano).toBe('solo');
    expect(pianoPerOperatori(6, true).piano).toBe('team');
    expect(pianoPerOperatori(15, true).piano).toBe('team');
    expect(pianoPerOperatori(16, true).piano).toBe('business');
  });

  it('senza promo non e\' compresa nessuna postazione', () => {
    expect(pianoPerOperatori(4, false)).toEqual({ piano: 'team', comprese: 0, daPagare: 4 });
  });

  it('con la promo toglie quelle comprese, mai sotto zero', () => {
    expect(pianoPerOperatori(10, true)).toEqual({ piano: 'team', comprese: 1, daPagare: 9 });
    expect(pianoPerOperatori(20, true)).toEqual({ piano: 'business', comprese: 5, daPagare: 15 });
    expect(pianoPerOperatori(1, true)).toEqual({ piano: 'solo', comprese: 1, daPagare: 0 });
  });
});
