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
 * Regional EN variants (en-us, en-gb, en-au, en-ie, en-ca) sono "alternate
 * regional content" del locale canonical `/en/`. Pricing/messaging localizzati,
 * stessa pagina concettuale. Per consolidare authority sul brand (e non
 * splittare pos 4 → 12 come accaduto 13-25/05/2026 sulla query "geotapp"),
 * dichiariamo canonical = `/en` per tutte queste varianti. Hreflang resta
 * regionale → Google serve la variant giusta per geo IP dell'utente.
 */
const REGIONAL_EN_VARIANTS = new Set(['en-us', 'en-gb', 'en-au', 'en-ie', 'en-ca']);

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
 * Canonical strategy:
 * - Locale primary (it, en, de, fr, es, nl, pt, da, sv, nb, ru): canonical = self
 * - Locale regional EN variant (en-us, en-gb, en-au, en-ie, en-ca): canonical = /en/{path}
 *   (consolida authority sul brand; hreflang continua a regionalizzare il rendering)
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

  // Regional EN variants point canonical to /en/ to consolidate brand authority.
  const canonicalLocale = REGIONAL_EN_VARIANTS.has(locale) ? 'en' : locale;
  const canonicalPath = translatePath(path, canonicalLocale as AppLocale);

  return {
    canonical: `${BASE}/${canonicalLocale}${canonicalPath}`,
    languages,
  };
}
