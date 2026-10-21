import { describe, it, expect } from 'vitest';
import { getPulizieContent } from './pulizie';
import { getEdiliziaContent } from './edilizia';
import { getIdrauliciContent } from './idraulici';
import { REGIONAL_OVERRIDES } from './regional-overrides';

describe('override regionali EN', () => {
  it('en-gb ha title, H1 e blocco regionale diversi da /en/', async () => {
    const en = await getPulizieContent('en');
    const gb = await getPulizieContent('en-gb');
    expect(gb.meta.title).not.toBe(en.meta.title);
    expect(gb.hero.h1_line2).not.toBe(en.hero.h1_line2);
    expect(gb.regional_context?.paras.join(' ')).toContain('regulation 9');
  });

  it('/en/ resta senza override regionale', async () => {
    const en = await getPulizieContent('en');
    expect(en.regional_context).toBeUndefined();
  });

  it('ogni regione ha un blocco e un title propri su tutti e dieci i settori', () => {
    const regions = ['en-gb', 'en-us', 'en-au', 'en-ie', 'en-ca'] as const;
    const slugs = Object.keys(REGIONAL_OVERRIDES);
    expect(slugs.length).toBe(10);
    for (const slug of slugs) {
      const titles = new Set<string>();
      for (const r of regions) {
        const o = (REGIONAL_OVERRIDES as any)[slug][r];
        expect(o, `${slug} ${r}`).toBeTruthy();
        expect(o.regional_context.paras.length).toBeGreaterThanOrEqual(3);
        if (o.meta?.title) titles.add(o.meta.title);
      }
      // i title devono differire tra regioni (idraulici en-us/en-gb tengono REGIONAL_META)
      expect(titles.size).toBeGreaterThanOrEqual(3);
    }
  });

  it('ortografia coerente con la regione', () => {
    const txt = (r: string) => JSON.stringify(Object.values(REGIONAL_OVERRIDES).map((m: any) => m[r]));
    for (const r of ['en-us', 'en-ca']) expect(txt(r)).not.toMatch(/organis|summaris|licence/i);
    for (const r of ['en-gb', 'en-au', 'en-ie']) expect(txt(r)).not.toMatch(/organiz|summariz/i);
  });

  it('il cantiere en-gb non perde le altre sezioni', async () => {
    const gb = await getEdiliziaContent('en-gb');
    expect(gb.faq.items.length).toBeGreaterThan(0);
    expect(gb.hero.cta_primary).toBeTruthy();
  });

  it('gli idraulici en-gb tengono il meta di REGIONAL_META', async () => {
    const gb = await getIdrauliciContent('en-gb');
    expect(gb.meta.title).toBe('Time Tracking for Plumbers with GPS Clock-ins | GeoTapp');
    expect(gb.hero.badge).toContain('UK');
  });

  it('nessun testo regionale contiene em-dash', () => {
    const all = JSON.stringify(REGIONAL_OVERRIDES);
    expect(all.includes('—')).toBe(false);
  });
});
