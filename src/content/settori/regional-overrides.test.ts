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

  it('/en/ e le regioni non ancora scritte restano senza override', async () => {
    const en = await getPulizieContent('en');
    const us = await getPulizieContent('en-us');
    expect(en.regional_context).toBeUndefined();
    expect(us.regional_context).toBeUndefined();
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
