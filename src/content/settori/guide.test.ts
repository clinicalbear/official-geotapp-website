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
    expect(guidePerSettore('pulizie', 'en-au').length).toBeGreaterThan(0);
  });
});

describe('guide legate a un Paese', () => {
  it('Davis-Bacon solo negli Stati Uniti, la legge irlandese solo in Irlanda', () => {
    const titoli = (l: string) => guidePerSettore('edilizia', l).map((g) => g.titolo).join(' | ');
    expect(titoli('en-us')).toContain('Davis-Bacon');
    expect(titoli('en-gb')).not.toContain('Davis-Bacon');
    expect(titoli('en-gb')).not.toContain('Ireland');
    expect(titoli('en-ie')).toContain('Ireland');
    expect(titoli('en')).not.toContain('Davis-Bacon');
  });
});

describe('nessuna pagina settore senza guide', () => {
  const SETTORI = ['pulizie', 'sicurezza', 'installatori', 'elettricisti', 'idraulici', 'termoidraulici', 'edilizia', 'manutenzione'] as const;
  const LINGUE = ['it', 'en', 'en-gb', 'en-us', 'de', 'nl', 'fr', 'es', 'pt', 'da', 'sv', 'nb', 'ru'];
  it('ogni settore in ogni lingua ha almeno una guida', async () => {
    const { sezioneGuide } = await import('./guide');
    const vuote: string[] = [];
    for (const l of LINGUE) for (const s of SETTORI) if (sezioneGuide(s, l).guide.length === 0) vuote.push(`${l}/${s}`);
    expect(vuote).toEqual([]);
  });
  it('le guide generali russe hanno un titolo che non promette il mestiere', async () => {
    const { sezioneGuide } = await import('./guide');
    expect(sezioneGuide('termoidraulici', 'ru').titolo).toBe('Полезные руководства');
  });
});
