// Shared language detection for WordPress blog posts.
//
// Italian is the Polylang default language: its posts carry no URL prefix and no
// language-suffixed category. Every other locale is "non-default".
//
// Detecting a post's language from the permalink prefix alone is NOT reliable: some
// translated posts (notably several Dutch ones) were published at the prefix-less root
// path, so by URL they are indistinguishable from Italian. The strongest signal is the
// WordPress category slug, which the multilingual plugin suffixes with the language
// (`geotapp-nl`, `field-service-nl`, `nieuws-nl`, ...). Italian categories carry no such
// suffix. We use the category suffix first, then fall back to the permalink prefix.

export const NON_DEFAULT_LOCALES = ['en', 'de', 'nl', 'fr', 'es', 'pt', 'da', 'sv', 'nb', 'ru'];

/**
 * Map an app locale onto one of the blog's 11 languages: the site has regional variants
 * (`en-us`, `en-gb`, `en-au`, `en-ie`, `en-ca`) that the blog does not publish separately,
 * so they all read the English posts. Unknown locales fall back to English.
 */
export function toBlogLocale(locale: string): string {
  const lower = (locale ?? '').trim().toLowerCase();
  if (lower === 'it' || NON_DEFAULT_LOCALES.includes(lower)) return lower;
  const base = lower.split('-')[0];
  if (base === 'it' || NON_DEFAULT_LOCALES.includes(base)) return base;
  return 'en';
}

/** Extract a non-default locale from a `category-<slug>` class, or null. */
function localeFromCategoryClass(cls: string): string | null {
  if (!cls.startsWith('category-')) return null;
  const m = /-([a-z]{2})$/.exec(cls.slice('category-'.length));
  return m && NON_DEFAULT_LOCALES.includes(m[1]) ? m[1] : null;
}

/** Extract a non-default locale from a blog permalink prefix, or null (root path → null → Italian). */
function localeFromLink(link: string): string | null {
  try {
    const afterBlog = new URL(link).pathname.replace(/^\/blog\//, '');
    const m = /^([a-z]{2})\//.exec(afterBlog);
    return m && NON_DEFAULT_LOCALES.includes(m[1]) ? m[1] : null;
  } catch {
    return null;
  }
}

/**
 * Detect a post's locale. Accepts the WP REST post object and uses, in order:
 * `gtmsa_lang` (the language field the multilingual plugin exposes on every post,
 * request it via `_fields=...,gtmsa_lang`), then `class_list`, then the permalink.
 * Returns 'it' when no non-default signal is found.
 *
 * Audit 2026-09-02: all 1197 published posts carry `gtmsa_lang`, and it agrees with the
 * category/permalink heuristic on every single one, so the field is safe as first signal.
 */
export function detectPostLocale(post: { link?: string; class_list?: string[]; gtmsa_lang?: string }): string {
  const declared = post.gtmsa_lang?.trim().toLowerCase();
  if (declared === 'it' || (declared && NON_DEFAULT_LOCALES.includes(declared))) return declared;

  for (const cls of post.class_list ?? []) {
    const loc = localeFromCategoryClass(cls);
    if (loc) return loc;
  }
  return localeFromLink(post.link ?? '') ?? 'it';
}
