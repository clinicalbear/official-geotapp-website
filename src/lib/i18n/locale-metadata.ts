import type { Metadata } from 'next';
import { SUPPORTED_LOCALES } from './config';
import { translatePath } from './slug-map';
import type { AppLocale } from './config';

const BASE = 'https://geotapp.com';

/**
 * Maps internal locale codes to BCP-47 hreflang tags.
 * Google uses BCP-47 (e.g. it-IT, de-DE) for regional targeting.
 * Generic codes (en) are used where no single country dominates.
 *
 * Exported so [locale]/page.tsx (home) and sitemap.ts use the same source of
 * truth and never drift on casing (audit 2026-05-23 ha rilevato en-us vs en-US
 * tra mappa inline della home e questa mappa canonical).
 */
export const HREFLANG: Record<string, string> = {
  it: 'it-IT',
  en: 'en',
  'en-us': 'en-US',
  'en-gb': 'en-GB',
  'en-au': 'en-AU',
  'en-ie': 'en-IE',
  'en-ca': 'en-CA',
  de: 'de-DE',
  nl: 'nl-NL',
  fr: 'fr-FR',
  es: 'es-ES',
  pt: 'pt-PT',
  da: 'da-DK',
  nb: 'nb-NO',
  sv: 'sv-SE',
  ru: 'ru-RU',
};

/**
 * Regional EN variants (en-us, en-gb, en-au, en-ie, en-ca) renderizzano prezzi
 * in valuta locale (USD/GBP/AUD/CAD) — vedi LOCALE_CURRENCY in lib/pricing.ts.
 *
 * Strategia canonical IBRIDA (audit 2026-06-02):
 *  - Pagine BRAND/entity (home, what-is-geotapp, about-us): canonical → `/en/`
 *    per consolidare authority sulla query "geotapp" (incidente pos 4→12 del
 *    13-25/05/2026, causato da pagine inglesi quasi-duplicate in competizione).
 *  - Pagine COMMERCIALI (pricing, products, settori, roi-calculator): canonical
 *    = self, così la variante in valuta locale è indicizzabile e ranka nel suo
 *    mercato (un inglese trova £, un americano $, non il prezzo in €). Hreflang
 *    cluster resta completo → Google serve la variante giusta per geo.
 *  - en-ie renderizza EUR (byte-identica a `/en/`) → sempre consolidata.
 */
const REGIONAL_EN_VARIANTS = new Set(['en-us', 'en-gb', 'en-au', 'en-ie', 'en-ca']);

// en-ie usa EUR (LOCALE_CURRENCY): contenuto identico a /en/ → sempre consolidata.
const EUR_REGIONAL_EN = new Set(['en-ie']);

// Prefissi delle pagine commerciali con prezzo in valuta locale: qui le varianti
// regionali (USD/GBP/AUD/CAD) fanno canonical su se stesse per rankare nel mercato.
// Tutto il resto (brand/entity/info/legal) resta consolidato su /en/.
const REGIONAL_SELF_CANONICAL_PREFIXES = ['/pricing', '/products/', '/settori', '/roi-calculator'];

/**
 * Per la `locale` data e il `path` (senza prefisso locale), il canonical punta
 * a se stesso (true) o consolida su /en/ (false, solo per varianti EN regionali).
 */
function regionalSelfCanonical(locale: string, path: string): boolean {
  if (!REGIONAL_EN_VARIANTS.has(locale)) return true; // locale primarie: sempre self
  if (EUR_REGIONAL_EN.has(locale)) return false;       // en-ie (EUR): consolida
  return REGIONAL_SELF_CANONICAL_PREFIXES.some((p) => path.startsWith(p));
}

/**
 * Builds canonical + hreflang alternates for a locale-prefixed page.
 * Use inside generateMetadata({ params }) in every [locale]/* wrapper page.
 *
 * @param locale  The resolved locale (e.g. 'da', 'it', 'en', 'en-us')
 * @param path    The path WITHOUT locale prefix (e.g. '/contact/', '/settori/pulizie/')
 *
 * All path segments are translated independently using translatePath(), so
 * compound paths like '/settori/pulizie/' produce fully-localised hreflang URLs
 * (e.g. /en/sectors/cleaning/, /de/branchen/reinigung/) instead of partially-
 * translated ones (e.g. /en/sectors/pulizie/) that trigger a redirect chain.
 *
 * Canonical strategy (IBRIDA, vedi regionalSelfCanonical sopra):
 * - Locale primary (it, en, de, fr, es, nl, pt, da, sv, nb, ru): canonical = self
 * - Regional EN su pagine commerciali (pricing/products/settori/roi): canonical = self
 *   (ranka con valuta locale; hreflang cluster resta completo)
 * - Regional EN su pagine brand/entity/info + en-ie: canonical = /en/{path}
 *   (consolida authority sul brand)
 */
export function buildLocaleAlternates(
  locale: string,
  path: string,
): Metadata['alternates'] {
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => {
      const localizedPath = translatePath(path, l as AppLocale);
      return [HREFLANG[l] ?? l, `${BASE}/${l}${localizedPath}`];
    }),
  ) as Record<string, string>;

  // x-default: English path — /en/ is a real page with no redirect.
  // The bare canonical path (e.g. /chi-siamo/) triggers a 308 → /it/ leaking link equity.
  languages['x-default'] = `${BASE}/en${translatePath(path, 'en')}`;

  // Hybrid canonical: commercial regional-EN pages self-canonical (rank with local
  // currency); brand/entity/info pages + en-ie consolidate to /en/ (brand authority).
  const canonicalLocale = regionalSelfCanonical(locale, path) ? locale : 'en';
  const canonicalPath = translatePath(path, canonicalLocale as AppLocale);

  return {
    canonical: `${BASE}/${canonicalLocale}${canonicalPath}`,
    languages,
  };
}
