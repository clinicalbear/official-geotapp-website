import type { Metadata } from 'next';
import { SUPPORTED_LOCALES } from './config';

const BASE = 'https://geotapp.com';

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
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [l, `${BASE}/${l}${path}`]),
  ) as Record<string, string>;
  // x-default points to the root non-locale path (e.g. /pricing/).
  // Google uses x-default for users whose language doesn't match any hreflang.
  // The middleware 308-redirects these paths to the user's resolved locale —
  // 308 is a permanent redirect and Google consolidates link equity correctly.
  languages['x-default'] = `${BASE}${path}`;
  return {
    canonical: `/${locale}${path}`,
    languages,
  };
}
