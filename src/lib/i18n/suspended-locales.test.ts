import { describe, expect, it } from 'vitest';
import { PUBLISHED_LOCALES, SUPPORTED_LOCALES, isSuspendedLocale } from './config';
import { resolveLocale } from './locale-routing';
import { buildLocaleAlternates } from './locale-metadata';

// Il russo e' sospeso dall'11/11/2026: resta nel codice ma non si pubblica.
describe('lingue sospese', () => {
  it('il russo resta supportato nel codice ma non e\' pubblicato', () => {
    expect(SUPPORTED_LOCALES).toContain('ru');
    expect(isSuspendedLocale('ru')).toBe(true);
    expect(PUBLISHED_LOCALES).not.toContain('ru');
    expect(PUBLISHED_LOCALES).toContain('it');
  });

  it('un browser russo o un cookie russo non portano alla versione russa', () => {
    expect(resolveLocale({ acceptLanguage: 'ru-RU,ru;q=0.9' })).not.toBe('ru');
    expect(resolveLocale({ acceptLanguage: 'ru-RU,ru;q=0.9,en;q=0.8' })).toBe('en');
    expect(resolveLocale({ cookieLocale: 'ru', countryCode: 'RU' })).not.toBe('ru');
  });

  it('gli hreflang non annunciano la versione russa', () => {
    const alt = buildLocaleAlternates('it', '/pricing/') as { languages: Record<string, string> };
    const urls = Object.values(alt.languages);
    expect(urls.some((u) => u.includes('/ru/'))).toBe(false);
  });
});
