import { describe, it, expect } from 'vitest';
import { buildLocaleAlternates, buildCanonicalUrl } from './locale-metadata';

const BASE = 'https://geotapp.com';
const canonicalOf = (locale: string, path: string) =>
  (buildLocaleAlternates(locale, path) as { canonical: string }).canonical;

const LOCALES = [
  'it', 'en', 'en-us', 'en-gb', 'en-au', 'en-ie', 'en-ca',
  'de', 'nl', 'fr', 'es', 'pt', 'da', 'nb', 'sv', 'ru',
];

describe('buildLocaleAlternates — canonical sempre self', () => {
  it('le locale primarie sono self-canonical', () => {
    expect(canonicalOf('it', '/')).toBe(`${BASE}/it/`);
    // lo slug è localizzato da translatePath: /pricing/ -> /preise/ in tedesco
    expect(canonicalOf('de', '/pricing/')).toBe(`${BASE}/de/preise/`);
    expect(canonicalOf('en', '/')).toBe(`${BASE}/en/`);
  });

  // --- Decisione di Mike, 14/08/2026 -----------------------------------------
  // «Sono pagine vere e localizzate in base alla loro lingua». Le varianti EN
  // regionali rendono prezzi in valuta locale (verificato live: /en-gb/ £189.99,
  // /en-us/ $126.99, /en-ca/ $137.49 contro €198.00 su /en/) e per en-ie anche
  // una FAQ legale irlandese propria. Prima di oggi le pagine brand consolidavano
  // su /en/: sitemap e hreflang dichiaravano 430 URL che poi si dichiaravano non
  // canoniche (Ahrefs 13/08/2026, 867 "hreflang to non-canonical").

  it('anche le varianti EN regionali sono self-canonical sulle pagine brand', () => {
    for (const l of ['en-us', 'en-gb', 'en-au', 'en-ie', 'en-ca']) {
      expect(canonicalOf(l, '/')).toBe(`${BASE}/${l}/`);
      expect(canonicalOf(l, '/about-us/')).toBe(`${BASE}/${l}/about-us/`);
    }
  });

  it('le varianti EN regionali sono self-canonical sulle pagine commerciali', () => {
    expect(canonicalOf('en-gb', '/pricing/')).toBe(`${BASE}/en-gb/pricing/`);
    expect(canonicalOf('en-au', '/pricing/')).toBe(`${BASE}/en-au/pricing/`);
    expect(canonicalOf('en-us', '/roi-calculator/')).toBe(`${BASE}/en-us/roi-calculator/`);
    expect(canonicalOf('en-ca', '/products/geotapp-timetracker/'))
      .toBe(`${BASE}/en-ca/products/geotapp-timetracker/`);
    expect(canonicalOf('en-ie', '/pricing/')).toBe(`${BASE}/en-ie/pricing/`);
    expect(canonicalOf('en-ie', '/settori/pulizie/')).toBe(`${BASE}/en-ie/sectors/cleaning/`);
  });

  it('nessuna locale rimanda la canonical a un altro prefisso', () => {
    for (const l of LOCALES) {
      for (const path of ['/', '/pricing/', '/about-us/', '/settori/pulizie/']) {
        expect(canonicalOf(l, path).startsWith(`${BASE}/${l}/`), `${l} ${path}`).toBe(true);
      }
    }
  });

  it('ogni URL dichiarata in hreflang e\' la canonical di se stessa', () => {
    // E' la condizione che Ahrefs verifica con "hreflang to non-canonical":
    // se un hreflang punta a una pagina che canonicalizza altrove, e' un errore.
    const alt = buildLocaleAlternates('it', '/pricing/') as {
      languages: Record<string, string>;
    };
    const dichiarate = new Set(
      Object.entries(alt.languages)
        .filter(([tag]) => tag !== 'x-default')
        .map(([, url]) => url),
    );
    const canoniche = new Set(LOCALES.map((l) => buildCanonicalUrl(l, '/pricing/')));
    expect([...dichiarate].filter((u) => !canoniche.has(u))).toEqual([]);
  });

  it('og:url e canonical usano la stessa funzione', () => {
    for (const l of ['en-gb', 'en-ie', 'de']) {
      expect(buildCanonicalUrl(l, '/settori/pulizie/')).toBe(canonicalOf(l, '/settori/pulizie/'));
    }
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
