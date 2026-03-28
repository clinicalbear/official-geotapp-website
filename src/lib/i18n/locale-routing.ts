

import {
  COUNTRY_TO_LOCALE,
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  type AppLocale,
} from './config';
import { translatePath } from './slug-map';

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

  const normalized = value
    .trim()
    .toLowerCase()
    .replace(/_/g, '-')
    .split('-')[0];

  if (
    (SUPPORTED_LOCALES as readonly string[]).includes(normalized)
  ) {
    return normalized as AppLocale;
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

  const [firstSegment] = pathname.split('/').filter(Boolean);
  return normalizeLocaleCode(firstSegment);
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
  const normalizedPath = stripLocaleFromPathname(pathname);
  const translatedPath = translatePath(normalizedPath, locale);
  if (translatedPath === '/') return `/${locale}/`;
  return translatedPath.endsWith('/')
    ? `/${locale}${translatedPath}`
    : `/${locale}${translatedPath}/`;
}
