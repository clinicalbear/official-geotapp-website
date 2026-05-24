

import {
  COUNTRY_TO_LOCALE,
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  type AppLocale,
} from './config';
import { REVERSE_SLUG_MAP, translatePath } from './slug-map';

export { DEFAULT_LOCALE, SUPPORTED_LOCALES } from './config';
export type { AppLocale } from './config';

type ResolveLocaleInput = {
  cookieLocale?: string | null;
  countryCode?: string | null;
  acceptLanguage?: string | null;
};

export function normalizeLocaleCode(
  value?: string | null,
): AppLocale | null {
  if (!value) {
    return null;
  }

  const normalized = value.trim().toLowerCase().replace(/_/g, '-');

  // Exact match first — handles regional locales like 'en-us', 'en-gb', etc.
  if ((SUPPORTED_LOCALES as readonly string[]).includes(normalized)) {
    return normalized as AppLocale;
  }

  // Fall back to language-only segment — handles 'en-nz' → 'en', 'pt-br' → 'pt'.
  const langOnly = normalized.split('-')[0];
  if ((SUPPORTED_LOCALES as readonly string[]).includes(langOnly)) {
    return langOnly as AppLocale;
  }

  return null;
}

export function parseAcceptLanguage(
  header?: string | null,
): AppLocale[] {
  if (!header) {
    return [];
  }

  return header
    .split(',')
    .map((entry) => entry.trim().split(';')[0]?.trim())
    .map((entry) => normalizeLocaleCode(entry))
    .filter((entry): entry is AppLocale => Boolean(entry))
    .filter((entry, index, list) => list.indexOf(entry) === index);
}

export function getLocaleForCountry(
  countryCode?: string | null,
): AppLocale | null {
  if (!countryCode) {
    return null;
  }

  return COUNTRY_TO_LOCALE[countryCode.trim().toUpperCase()] ?? null;
}

export function resolveLocale({
  cookieLocale,
  countryCode,
  acceptLanguage,
}: ResolveLocaleInput): AppLocale {
  const cookieMatch = normalizeLocaleCode(cookieLocale);
  if (cookieMatch) {
    return cookieMatch;
  }

  const countryMatch = getLocaleForCountry(countryCode);
  if (countryMatch) {
    return countryMatch;
  }

  const acceptLanguageMatch = parseAcceptLanguage(acceptLanguage)[0];
  if (acceptLanguageMatch) {
    return acceptLanguageMatch;
  }

  return DEFAULT_LOCALE;
}

export function getLocaleFromPathname(
  pathname?: string | null,
): AppLocale | null {
  if (!pathname) {
    return null;
  }

  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) {
    return null;
  }

  const fromFirst = normalizeLocaleCode(segments[0]);
  if (fromFirst) {
    return fromFirst;
  }

  // Blog uses /blog/{locale}/... structure (WordPress multilingual via Polylang)
  if (segments[0] === 'blog' && segments.length >= 2) {
    return normalizeLocaleCode(segments[1]);
  }

  return null;
}

export function stripLocaleFromPathname(pathname?: string | null): string {
  if (!pathname) {
    return '/';
  }

  const locale = getLocaleFromPathname(pathname);
  if (!locale) {
    return pathname.startsWith('/') ? pathname : `/${pathname}`;
  }

  const nextPath = pathname.replace(new RegExp(`^/${locale}`), '') || '/';
  return nextPath.startsWith('/') ? nextPath : `/${nextPath}`;
}

export function localizePath(
  pathname: string,
  locale: AppLocale,
): string {
  // 1. Strip the current locale prefix (e.g. /es/precios/ → /precios/)
  const sourceLocale = getLocaleFromPathname(pathname);
  const strippedPath = stripLocaleFromPathname(pathname);

  // 2. Reverse-translate segments from the source locale back to canonical
  //    (e.g. /precios/ → /pricing/ using the ES reverse map)
  let canonicalPath = strippedPath;
  if (sourceLocale) {
    const reverseMap = REVERSE_SLUG_MAP[sourceLocale] ?? {};
    const segments = strippedPath.split('/').filter(Boolean);
    const canonical = segments.map((seg) => reverseMap[seg] ?? seg);
    canonicalPath = segments.length > 0 ? '/' + canonical.join('/') + '/' : '/';
  }

  // 3. Translate canonical path to the target locale
  const translatedPath = translatePath(canonicalPath, locale);
  if (translatedPath === '/') return `/${locale}/`;
  return translatedPath.endsWith('/')
    ? `/${locale}${translatedPath}`
    : `/${locale}${translatedPath}/`;
}
