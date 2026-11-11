import { PUBLISHED_LOCALES, DEFAULT_LOCALE, type AppLocale } from './config';

/** La lingua di una pagina senza lingua nell'indirizzo: prima il cookie, poi il browser. */
export function detectLocale(headerStore: Headers, cookieValue: string | undefined): AppLocale {
  // 1. Cookie wins
  if (cookieValue && (PUBLISHED_LOCALES as readonly string[]).includes(cookieValue)) {
    return cookieValue as AppLocale;
  }
  // 2. Accept-Language header
  const al = headerStore.get('accept-language') ?? '';
  const candidates = al
    .split(',')
    .map((s) => s.trim().split(';')[0].toLowerCase());
  for (const c of candidates) {
    if ((PUBLISHED_LOCALES as readonly string[]).includes(c)) return c as AppLocale;
    const base = c.split('-')[0];
    if ((PUBLISHED_LOCALES as readonly string[]).includes(base)) return base as AppLocale;
  }
  return DEFAULT_LOCALE;
}
