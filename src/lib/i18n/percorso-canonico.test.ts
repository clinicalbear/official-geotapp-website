import { describe, expect, it } from 'vitest';
import { percorsoCanonico } from './percorso-canonico';

describe('percorsoCanonico', () => {
  it('riporta allo stesso percorso indirizzo tradotto e indirizzo interno', () => {
    expect(percorsoCanonico('/ru/tseny/')).toBe('/pricing');
    expect(percorsoCanonico('/ru/pricing')).toBe('/pricing');
    expect(percorsoCanonico('/pt/precos')).toBe('/pricing');
    expect(percorsoCanonico('/de/preise/')).toBe('/pricing');
  });
  it('tratta la home con e senza lingua', () => {
    expect(percorsoCanonico('/')).toBe('/');
    expect(percorsoCanonico('/es/')).toBe('/');
  });
  it('lascia stare il blog', () => {
    expect(percorsoCanonico('/blog/de/2026/04/09/articolo/')).toBe('/blog/de/2026/04/09/articolo');
  });
});
