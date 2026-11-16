import { describe, expect, it } from 'vitest';
import { PUBLISHED_LOCALES, SUPPORTED_LOCALES, isSuspendedLocale } from './config';
import { resolveLocale } from './locale-routing';
import { buildLocaleAlternates, buildCanonicalUrl } from './locale-metadata';
import { toBlogLocale } from '../blog-locale';

describe('lingua greca (el)', () => {
  it('e supportata, pubblicata e non sospesa', () => {
    expect(SUPPORTED_LOCALES).toContain('el');
    expect(PUBLISHED_LOCALES).toContain('el');
    expect(isSuspendedLocale('el')).toBe(false);
  });

  it('Grecia, Cipro e browser greco portano al greco', () => {
    expect(resolveLocale({ countryCode: 'GR' })).toBe('el');
    expect(resolveLocale({ countryCode: 'cy' })).toBe('el');
    expect(resolveLocale({ acceptLanguage: 'el-GR,el;q=0.9,en;q=0.8' })).toBe('el');
  });

  it('le pagine del sito dichiarano hreflang el', () => {
    const alt = buildLocaleAlternates('it', '/pricing/') as { languages: Record<string, string> };
    expect(alt.languages['el']).toBe('https://geotapp.com/el/pricing/');
  });

  it('il blog non ha articoli greci: niente hreflang el, canonical dell hub sull inglese', () => {
    const alt = buildLocaleAlternates('it', '/blog/') as { languages: Record<string, string> };
    expect(alt.languages['el']).toBeUndefined();
    expect(Object.values(alt.languages).some((u) => u.includes('/el/'))).toBe(false);
    expect(buildCanonicalUrl('el', '/blog/')).toBe('https://geotapp.com/en/blog/');
    expect(buildCanonicalUrl('el', '/pricing/')).toBe('https://geotapp.com/el/pricing/');
    expect(toBlogLocale('el')).toBe('en');
  });
});
