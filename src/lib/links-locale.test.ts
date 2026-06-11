// Le pagine /links e /[locale]/links devono filtrare i post per lingua con
// detectPostLocale (basato su class_list), NON col solo prefisso del permalink:
// diversi post tradotti (NL, DE, ...) sono pubblicati senza prefisso lingua
// nell'URL e col filtro a prefisso finivano nella pagina italiana.
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { detectPostLocale } from './blog-locale';

const ROOT = join(__dirname, '..', '..');
const localeLinksPage = readFileSync(join(ROOT, 'src/app/[locale]/links/page.tsx'), 'utf8');
const rootLinksPage = readFileSync(join(ROOT, 'src/app/links/page.tsx'), 'utf8');

describe('detectPostLocale on prefix-less translated posts', () => {
  it('detects German from class_list even when the permalink has no /de/ prefix', () => {
    expect(detectPostLocale({
      link: 'https://geotapp.com/blog/2026/06/09/elektronische-arbeitszeiterfassung-pflicht-2026/',
      class_list: ['post-123', 'status-publish', 'category-news-de'],
    })).toBe('de');
  });

  it('detects Dutch from class_list even when the permalink has no /nl/ prefix', () => {
    expect(detectPostLocale({
      link: 'https://geotapp.com/blog/2026/06/10/wkr-2026-thuiswerkvergoeding/',
      class_list: ['post-456', 'status-publish', 'category-geotapp-nl'],
    })).toBe('nl');
  });

  it('keeps Italian for posts with no language-suffixed category', () => {
    expect(detectPostLocale({
      link: 'https://geotapp.com/blog/2026/06/10/decreto-25-2026-tabelle-costo-lavoro/',
      class_list: ['post-789', 'status-publish', 'category-normativa-gdpr'],
    })).toBe('it');
  });
});

describe('/[locale]/links page locale filtering', () => {
  it('uses detectPostLocale from the shared blog-locale lib', () => {
    expect(localeLinksPage).toMatch(/from '@\/lib\/blog-locale'/);
    expect(localeLinksPage).toMatch(/detectPostLocale/);
  });

  it('requests class_list from the WP REST API (needed by detectPostLocale)', () => {
    expect(localeLinksPage).toMatch(/_fields=[^'"`]*class_list/);
  });

  it('no longer filters by permalink prefix alone', () => {
    expect(localeLinksPage).not.toMatch(/isLangPost/);
  });

  it('fetches WP with no-store like the blog hub (next.revalidate breaks in the Worker)', () => {
    expect(localeLinksPage).not.toMatch(/next:\s*\{\s*revalidate/);
    expect(localeLinksPage).toMatch(/cache:\s*'no-store'/);
    expect(localeLinksPage).toMatch(/force-dynamic/);
  });
});

describe('/links page (root, IT) locale filtering', () => {
  it('uses detectPostLocale from the shared blog-locale lib', () => {
    expect(rootLinksPage).toMatch(/from '@\/lib\/blog-locale'/);
    expect(rootLinksPage).toMatch(/detectPostLocale/);
  });

  it('requests class_list from the WP REST API (needed by detectPostLocale)', () => {
    expect(rootLinksPage).toMatch(/_fields=[^'"`]*class_list/);
  });

  it('no longer filters by permalink prefix alone', () => {
    expect(rootLinksPage).not.toMatch(/isItalianPost/);
  });

  it('fetches WP with no-store like the blog hub (next.revalidate breaks in the Worker)', () => {
    expect(rootLinksPage).not.toMatch(/next:\s*\{\s*revalidate/);
    expect(rootLinksPage).toMatch(/cache:\s*'no-store'/);
    expect(rootLinksPage).toMatch(/force-dynamic/);
  });
});
