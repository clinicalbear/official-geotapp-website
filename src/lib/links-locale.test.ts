// Le pagine /links e /[locale]/links devono filtrare i post per lingua con
// detectPostLocale (basato su class_list), NON col solo prefisso del permalink:
// diversi post tradotti (NL, DE, ...) sono pubblicati senza prefisso lingua
// nell'URL e col filtro a prefisso finivano nella pagina italiana.
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { detectPostLocale } from './blog-locale';

const ROOT = join(__dirname, '..', '..');
// Le URL nel sorgente sono spezzate su piu' stringhe concatenate: un `?` finito nel
// pezzo successivo faceva passare il controllo sul trailing slash mentre l'endpoint
// vero era senza (e dal Worker rispondeva 404). Si ricuciono prima di controllare.
function joinConcatenatedStrings(src: string): string {
  return src
    // via i commenti: parlano dei parametri rotti, non li usano
    .replace(/^\s*\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/['"`]\s*\+\s*['"`]/g, '');
}

const localeLinksPage = joinConcatenatedStrings(
  readFileSync(join(ROOT, 'src/app/[locale]/links/page.tsx'), 'utf8'),
);
const rootLinksPage = joinConcatenatedStrings(
  readFileSync(join(ROOT, 'src/app/links/page.tsx'), 'utf8'),
);
const postIndexLib = joinConcatenatedStrings(
  readFileSync(join(ROOT, 'src/lib/wp-post-index.ts'), 'utf8'),
);

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

  it('takes posts from the shared index, which is where the language fields are requested', () => {
    expect(localeLinksPage).toMatch(/from '@\/lib\/wp-post-index'/);
  });

  it('no longer filters by permalink prefix alone', () => {
    expect(localeLinksPage).not.toMatch(/isLangPost/);
  });

  it('fetches WP with no-store like the blog hub (next.revalidate breaks in the Worker)', () => {
    expect(localeLinksPage).not.toMatch(/next:\s*\{\s*revalidate/);
    expect(localeLinksPage).toMatch(/cache:\s*'no-store'/);
    expect(localeLinksPage).toMatch(/force-dynamic/);
  });

  it('uses trailing-slash REST endpoints (without it the Worker subrequest gets 404)', () => {
    expect(localeLinksPage).not.toMatch(/wp\/v2\/(posts|categories|media)\?/);
  });
});

describe('/links page (root, IT) locale filtering', () => {
  it('uses detectPostLocale from the shared blog-locale lib', () => {
    expect(rootLinksPage).toMatch(/from '@\/lib\/blog-locale'/);
    expect(rootLinksPage).toMatch(/detectPostLocale/);
  });

  it('takes posts from the shared index, which is where the language fields are requested', () => {
    expect(rootLinksPage).toMatch(/from '@\/lib\/wp-post-index'/);
  });

  it('no longer filters by permalink prefix alone', () => {
    expect(rootLinksPage).not.toMatch(/isItalianPost/);
  });

  it('fetches WP with no-store like the blog hub (next.revalidate breaks in the Worker)', () => {
    expect(rootLinksPage).not.toMatch(/next:\s*\{\s*revalidate/);
    expect(rootLinksPage).toMatch(/cache:\s*'no-store'/);
    expect(rootLinksPage).toMatch(/force-dynamic/);
  });

  it('uses trailing-slash REST endpoints (without it the Worker subrequest gets 404)', () => {
    expect(rootLinksPage).not.toMatch(/wp\/v2\/(posts|categories|media)\?/);
  });
});

// L'indice condiviso e' l'unico posto che parla col blog per conto di queste pagine:
// i campi che servono a riconoscere la lingua vanno chiesti li'.
describe('shared WP post index', () => {
  it('requests the language fields needed by detectPostLocale', () => {
    // Entrambi i set di campi: l'indice leggero (filtra) e quello coi contenuti (mostra).
    for (const nome of ['INDEX_FIELDS', 'POST_FIELDS']) {
      const fields = new RegExp(`${nome}\\s*=\\s*'([^']+)'`).exec(postIndexLib)?.[1] ?? '';
      expect(fields, nome).toContain('class_list');
      expect(fields, nome).toContain('gtmsa_lang');
    }
    // Nessuna fetch di post deve elencare i campi a mano invece di usare quelle costanti.
    for (const m of postIndexLib.matchAll(/wp\/v2\/posts\/\?[^`]*_fields=([^&`]+)/g)) {
      expect(m[1]).toMatch(/^\$\{(fields|POST_FIELDS)\}$/);
    }
  });

  it('uses trailing-slash REST endpoints (without it the Worker subrequest gets 404)', () => {
    expect(postIndexLib).not.toMatch(/wp\/v2\/(posts|categories|media)\?/);
  });

  it('never filters by taxonomy server-side: the blog answers [] to ?categories= and ?tags=', () => {
    for (const src of [postIndexLib, localeLinksPage, rootLinksPage]) {
      expect(src).not.toMatch(/[?&](categories|tags)=/);
    }
  });
});
