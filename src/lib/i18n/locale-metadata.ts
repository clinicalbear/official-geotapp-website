import type { Metadata } from 'next';
import { SUPPORTED_LOCALES } from './config';
import { translatePath } from './slug-map';
import type { AppLocale } from './config';

const BASE = 'https://geotapp.com';

/**
 * Maps internal locale codes to BCP-47 hreflang tags.
 * Google uses BCP-47 (e.g. it-IT, de-DE) for regional targeting.
 * Generic codes (en) are used where no single country dominates.
 */
const HREFLANG: Record<string, string> = {
  it: 'it-IT',
  en: 'en',
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
 * Builds canonical + hreflang alternates for a locale-prefixed page.
 * Use inside generateMetadata({ params }) in every [locale]/* wrapper page.
 *
 * @param locale  The resolved locale (e.g. 'da', 'it', 'en')
 * @param path    The path WITHOUT locale prefix (e.g. '/contact/', '/settori/pulizie/')
 *
 * All path segments are translated independently using translatePath(), so
 * compound paths like '/settori/pulizie/' produce fully-localised hreflang URLs
 * (e.g. /en/sectors/cleaning/, /de/branchen/reinigung/) instead of partially-
 * translated ones (e.g. /en/sectors/pulizie/) that trigger a redirect chain.
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

  return {
    canonical: `${BASE}/${locale}${translatePath(path, locale as AppLocale)}`,
    languages,
  };
}
