import type { Metadata } from 'next';
import { SUPPORTED_LOCALES } from './config';
import { translateSlug } from './slug-map';
import type { AppLocale } from './config';

const BASE = 'https://geotapp.com';

/**
 * Maps internal locale codes to BCP-47 hreflang tags.
 * Google uses BCP-47 (e.g. it-IT, de-DE) for regional targeting.
 * Generic codes (en, fr) are used where no single country dominates.
 */
const HREFLANG: Record<string, string> = {
  it: 'it-IT',
  en: 'en',
  de: 'de-DE',
  fr: 'fr-FR',
  es: 'es-ES',
  pt: 'pt-PT',
  nl: 'nl-NL',
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
 * @param path    The path WITHOUT locale prefix (e.g. '/contact', '/pricing')
 */
export function buildLocaleAlternates(
  locale: string,
  path: string,
): Metadata['alternates'] {
  // path e.g. '/chi-siamo/' — extract the canonical slug (first segment)
  const segments = path.split('/').filter(Boolean);
  const canonicalSlug = segments[0] ?? '';
  const restPath = segments.slice(1).join('/');

  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => {
      const translatedSlug = translateSlug(canonicalSlug, l as AppLocale);
      const localizedPath = restPath
        ? `/${translatedSlug}/${restPath}/`
        : `/${translatedSlug}/`;
      return [HREFLANG[l] ?? l, `${BASE}/${l}${localizedPath}`];
    }),
  ) as Record<string, string>;

  // x-default: root Italian path (no locale prefix), with translated canonical slug
  const itSlug = translateSlug(canonicalSlug, 'it');
  const itPath = restPath ? `/${itSlug}/${restPath}/` : `/${itSlug}/`;
  languages['x-default'] = `${BASE}${itPath}`;

  const currentTranslatedSlug = translateSlug(canonicalSlug, locale as AppLocale);
  const currentPath = restPath
    ? `/${currentTranslatedSlug}/${restPath}/`
    : `/${currentTranslatedSlug}/`;

  return {
    canonical: `${BASE}/${locale}${currentPath}`,
    languages,
  };
}
