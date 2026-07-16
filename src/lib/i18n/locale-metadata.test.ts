import { describe, it, expect } from 'vitest';
import { buildLocaleAlternates } from './locale-metadata';

const BASE = 'https://geotapp.com';
const canonicalOf = (locale: string, path: string) =>
  (buildLocaleAlternates(locale, path) as { canonical: string }).canonical;

describe('buildLocaleAlternates — canonical ibrida', () => {
  it('le locale primarie sono sempre self-canonical', () => {
    expect(canonicalOf('it', '/')).toBe(`${BASE}/it/`);
    // lo slug è localizzato da translatePath: /pricing/ -> /preise/ in tedesco
    expect(canonicalOf('de', '/pricing/')).toBe(`${BASE}/de/preise/`);
    expect(canonicalOf('en', '/')).toBe(`${BASE}/en/`);
  });

  it('le varianti EN regionali consolidano su /en/ sulle pagine brand/entity', () => {
    // Protegge il fix dell'incidente 13-25/05/2026 (query "geotapp" da pos 4 a 12
    // per home inglesi quasi-duplicate in competizione fra loro).
    for (const l of ['en-us', 'en-gb', 'en-au', 'en-ie', 'en-ca']) {
      expect(canonicalOf(l, '/')).toBe(`${BASE}/en/`);
    }
  });

  it('le varianti in valuta propria sono self-canonical sulle pagine commerciali', () => {
    expect(canonicalOf('en-gb', '/pricing/')).toBe(`${BASE}/en-gb/pricing/`);
    expect(canonicalOf('en-au', '/pricing/')).toBe(`${BASE}/en-au/pricing/`);
    expect(canonicalOf('en-us', '/roi-calculator/')).toBe(`${BASE}/en-us/roi-calculator/`);
    expect(canonicalOf('en-ca', '/products/geotapp-timetracker/'))
      .toBe(`${BASE}/en-ca/products/geotapp-timetracker/`);
  });

  // --- Regressione 16/07/2026 -------------------------------------------------
  // en-ie condivide EUR con /en/, quindi il PREZZO non la differenzia: pricing,
  // products e roi-calculator restano consolidati. Ma le pagine settore portano la
  // FAQ legale irlandese (Contract Cleaning ERO, OWTA s.18C, WRC, Sick Leave Act
  // 2022) che su /en/ non esiste: consolidarle sopprimeva l'unico contenuto che
  // risponde al mercato irlandese. Il criterio è il CONTENUTO, non la valuta.

  it('en-ie è self-canonical sulle pagine settore (ha la FAQ legale irlandese)', () => {
    expect(canonicalOf('en-ie', '/settori/pulizie/')).toBe(`${BASE}/en-ie/sectors/cleaning/`);
    expect(canonicalOf('en-ie', '/settori/edilizia/')).not.toContain('/en/');
  });

  it('en-ie resta consolidata dove è davvero identica a /en/ (stessa valuta EUR)', () => {
    expect(canonicalOf('en-ie', '/pricing/')).toBe(`${BASE}/en/pricing/`);
    expect(canonicalOf('en-ie', '/roi-calculator/')).toBe(`${BASE}/en/roi-calculator/`);
    expect(canonicalOf('en-ie', '/products/geotapp-timetracker/'))
      .toBe(`${BASE}/en/products/geotapp-timetracker/`);
  });

  it('x-default punta a /en/ e non a un URL che redirige', () => {
    const alt = buildLocaleAlternates('it', '/') as { languages: Record<string, string> };
    expect(alt.languages['x-default']).toBe(`${BASE}/en/`);
    expect(alt.languages['x-default']).not.toBe(`${BASE}/`);
  });

  it('ogni hreflang punta a un URL con prefisso locale (mai la root nuda)', () => {
    const alt = buildLocaleAlternates('en-au', '/settori/pulizie/') as {
      languages: Record<string, string>;
    };
    for (const [tag, url] of Object.entries(alt.languages)) {
      expect(url.startsWith(`${BASE}/`), `${tag} -> ${url}`).toBe(true);
      expect(url, `${tag} non deve essere la root`).not.toBe(`${BASE}/`);
    }
    expect(alt.languages['en-IE']).toContain('/en-ie/');
  });
});
