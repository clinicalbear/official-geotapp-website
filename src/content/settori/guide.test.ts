import { describe, expect, it } from 'vitest';
import { GUIDE_SETTORE, GUIDE_TITOLO, guidePerSettore } from './guide';

describe('guide del blog per settore', () => {
  it('ogni guida e un articolo del blog nella lingua della sua sezione', () => {
    for (const [lingua, settori] of Object.entries(GUIDE_SETTORE)) {
      for (const guide of Object.values(settori)) {
        for (const g of guide ?? []) {
          const atteso = lingua === 'it' ? /^\/blog\/20\d\d\/\d\d\/\d\d\/[^/]+\/$/ : new RegExp(`^/blog/${lingua}/20\\d\\d/\\d\\d/\\d\\d/[^/]+/$`);
          expect(g.href, `${lingua}: ${g.href}`).toMatch(atteso);
          expect(g.titolo.length).toBeGreaterThan(10);
        }
      }
    }
  });

  it('ogni lingua con guide ha il titolo della sezione', () => {
    for (const lingua of Object.keys(GUIDE_SETTORE)) expect(GUIDE_TITOLO[lingua]).toBeTruthy();
  });

  it('al massimo 4 per settore e niente doppioni col blocco normativo', () => {
    for (const settori of Object.values(GUIDE_SETTORE)) for (const g of Object.values(settori)) expect((g ?? []).length).toBeLessThanOrEqual(4);
    const tutte = guidePerSettore('pulizie', 'it');
    const senza = guidePerSettore('pulizie', 'it', [tutte[0].href]);
    expect(senza).toHaveLength(tutte.length - 1);
  });

  it('le varianti inglesi regionali usano le guide inglesi', () => {
    expect(guidePerSettore('edilizia', 'en-gb')).toEqual(guidePerSettore('edilizia', 'en'));
  });
});
