# SEO Completamento 10/10 — Linking + BreadcrumbList + Noindex + Labels

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Close the remaining SEO gaps to bring geotapp.com to 10/10: prodotti→settori links, articoli→settore footer, anchor text pool, BreadcrumbList JSON-LD, noindex blog Phase-3 locales, missing settore labels.

**Architecture:** 4 Next.js tasks (Tasks 1, 4, 5, 6) + 2 WordPress tasks (Tasks 2, 3). WP tasks both touch zenith-seo plugin and need SFTP deploy. All Next.js tasks are in the geotapp-site repo on branch `wip/2026-03-11-pre-fleet-snapshot`.

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind CSS, PHP 7.4+ (WordPress), SFTP deploy to `su326249@access-5018990701.webspace-host.com:22`.

---

## Task 1: SettoriLinks component + add to product pages

**Goal:** Each product page gets a static "Ideale per:" section linking to relevant settori pages. This closes the Prodotto → Settore gap.

**Files:**
- Create: `src/components/SettoriLinks.tsx`
- Modify: `src/app/[locale]/products/geotapp-flow/page.tsx`
- Modify: `src/app/[locale]/products/geotapp-app/page.tsx`
- Modify: `src/app/[locale]/products/geotapp-verifier/page.tsx`

**Settore assignments per product:**
- GeoTapp Flow → `['installatori']`
- GeoTapp App → `['pulizie', 'sicurezza']`
- GeoTapp Verifier → `['pulizie', 'installatori', 'sicurezza']`

### Step 1: Create `src/components/SettoriLinks.tsx`

```tsx
import Link from 'next/link';
import type { AppLocale } from '@/lib/i18n/config';

type SettoreSlug = 'pulizie' | 'installatori' | 'sicurezza';

const SECTION_TITLE: Record<string, string> = {
  it: 'Ideale per', en: 'Ideal for', de: 'Ideal für', fr: 'Idéal pour',
  es: 'Ideal para', pt: 'Ideal para', nl: 'Ideaal voor', da: 'Ideel til',
  sv: 'Idealisk för', nb: 'Ideell for', ru: 'Идеально для',
};

const SETTORE_NAMES: Record<SettoreSlug, Record<string, string>> = {
  pulizie: {
    it: 'Imprese di pulizie', en: 'Cleaning companies', de: 'Reinigungsunternehmen',
    fr: 'Entreprises de nettoyage', es: 'Empresas de limpieza', pt: 'Empresas de limpeza',
    nl: 'Schoonmaakbedrijven', da: 'Rengøringsvirksomheder', sv: 'Städföretag',
    nb: 'Rengjøringsbedrifter', ru: 'Клининговые компании',
  },
  installatori: {
    it: 'Installatori e tecnici', en: 'Installers & field service', de: 'Installateure & Außendienst',
    fr: 'Installateurs & terrain', es: 'Instaladores y técnicos de campo', pt: 'Instaladores e técnicos',
    nl: 'Installateurs & buitendienst', da: 'Installatører & serviceteknikere', sv: 'Installatörer & fältservice',
    nb: 'Installatører & felttjeneste', ru: 'Монтажники и выездные техники',
  },
  sicurezza: {
    it: 'Servizi di sicurezza', en: 'Security services', de: 'Sicherheitsdienste',
    fr: 'Services de sécurité', es: 'Servicios de seguridad', pt: 'Serviços de segurança',
    nl: 'Beveiligingsdiensten', da: 'Sikkerhedstjenester', sv: 'Säkerhetstjänster',
    nb: 'Sikkerhetstjenester', ru: 'Службы безопасности',
  },
};

interface Props {
  locale: AppLocale;
  settori: SettoreSlug[];
}

export default function SettoriLinks({ locale, settori }: Props) {
  const title = SECTION_TITLE[locale] ?? SECTION_TITLE['en'];
  return (
    <div className="bg-slate-50 border-t border-slate-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4">{title}</p>
        <div className="flex flex-wrap gap-3">
          {settori.map((slug) => (
            <Link
              key={slug}
              href={`/${locale}/settori/${slug}/`}
              className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
            >
              {SETTORE_NAMES[slug][locale] ?? SETTORE_NAMES[slug]['en']}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
```

### Step 2: Add SettoriLinks to geotapp-flow/page.tsx

In `src/app/[locale]/products/geotapp-flow/page.tsx`:

Add import after existing imports:
```tsx
import SettoriLinks from '@/components/SettoriLinks';
```

In the return block, add after `<BlogHighlights ...>`:
```tsx
      <SettoriLinks locale={locale as AppLocale} settori={['installatori']} />
```

Full updated return:
```tsx
  return (
    <>
      {faq && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      )}
      <FlowPage />
      <BlogHighlights locale={locale as AppLocale} categoryId={65} />
      <SettoriLinks locale={locale as AppLocale} settori={['installatori']} />
    </>
  );
```

### Step 3: Add SettoriLinks to geotapp-app/page.tsx

Add import:
```tsx
import SettoriLinks from '@/components/SettoriLinks';
```

Updated return:
```tsx
  return (
    <>
      {faq && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      )}
      <AppPage />
      <BlogHighlights locale={locale as AppLocale} categoryId={108} />
      <SettoriLinks locale={locale as AppLocale} settori={['pulizie', 'sicurezza']} />
    </>
  );
```

### Step 4: Add SettoriLinks to geotapp-verifier/page.tsx

Add import:
```tsx
import SettoriLinks from '@/components/SettoriLinks';
```

Updated return:
```tsx
  return (
    <>
      {faq && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      )}
      <VerifierPage params={params} />
      <BlogHighlights locale={locale as AppLocale} categoryId={9} />
      <SettoriLinks locale={locale as AppLocale} settori={['pulizie', 'installatori', 'sicurezza']} />
    </>
  );
```

### Step 5: Verify build

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site && npm run build 2>&1 | tail -10
```

Expected: zero TypeScript errors.

### Step 6: Commit

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site
git add src/components/SettoriLinks.tsx \
  "src/app/[locale]/products/geotapp-flow/page.tsx" \
  "src/app/[locale]/products/geotapp-app/page.tsx" \
  "src/app/[locale]/products/geotapp-verifier/page.tsx"
git commit -m "feat(seo): add SettoriLinks section to product pages"
```

---

## Task 2: WP — articolo → settore footer link

**Goal:** Each WordPress blog post gets a "Scopri le risorse per [settore]" link in the footer, based on its WP category. Closes the Articolo → Settore gap.

**Files:**
- Modify: `.worktrees/integration-2026-03-11-fleet-main/geotapp-blog/wp-content/plugins/zenith-seo/zenith-seo.php`
- Deploy via SFTP

**Category → settore mapping:**
- Cat 9 → pulizie + sicurezza (both use this category)
- Cat 65 → installatori
- Cat 108 → pulizie (attendance tracking = app presenze = mainly pulizie/sicurezza, use pulizie as primary)

### Step 1: Add `append_settore_link()` method to Zenith_SEO class

Read `zenith-seo.php` first to understand the class structure and where to insert.

Insert this method inside the `Zenith_SEO` class, after `noindex_archives()`:

```php
	/**
	 * Append a "Scopri le risorse per [settore]" link at the end of single post content.
	 * Links are locale-aware (uses pll_current_language) and point to geotapp.com settori pages.
	 * Runs at priority 25 (after link injector at priority 20).
	 */
	public function append_settore_link( string $content ): string {
		if ( ! is_singular( 'post' ) || is_feed() || is_admin() ) {
			return $content;
		}

		$locale = function_exists( 'pll_current_language' ) ? pll_current_language() : 'it';
		$known  = [ 'it', 'en', 'de', 'fr', 'es', 'pt', 'nl', 'da', 'sv', 'nb', 'ru' ];
		if ( ! in_array( $locale, $known, true ) ) {
			$locale = 'it';
		}

		// Category → settore slugs mapping (can match multiple settori).
		$cat_settore_map = [
			9   => [ 'pulizie', 'sicurezza' ],
			65  => [ 'installatori' ],
			108 => [ 'pulizie' ],
		];

		$settore_labels = [
			'pulizie'      => [
				'it' => 'Risorse per imprese di pulizie', 'en' => 'Resources for cleaning companies',
				'de' => 'Ressourcen für Reinigungsunternehmen', 'fr' => 'Ressources pour entreprises de nettoyage',
				'es' => 'Recursos para empresas de limpieza', 'pt' => 'Recursos para empresas de limpeza',
				'nl' => 'Bronnen voor schoonmaakbedrijven', 'da' => 'Ressourcer til rengøringsvirksomheder',
				'sv' => 'Resurser för städföretag', 'nb' => 'Ressurser for rengjøringsbedrifter',
				'ru' => 'Ресурсы для клининговых компаний',
			],
			'installatori' => [
				'it' => 'Risorse per installatori', 'en' => 'Resources for installers',
				'de' => 'Ressourcen für Installateure', 'fr' => 'Ressources pour installateurs',
				'es' => 'Recursos para instaladores', 'pt' => 'Recursos para instaladores',
				'nl' => 'Bronnen voor installateurs', 'da' => 'Ressourcer til installatører',
				'sv' => 'Resurser för installatörer', 'nb' => 'Ressurser for installatører',
				'ru' => 'Ресурсы для монтажников',
			],
			'sicurezza'    => [
				'it' => 'Risorse per servizi di sicurezza', 'en' => 'Resources for security services',
				'de' => 'Ressourcen für Sicherheitsdienste', 'fr' => 'Ressources pour services de sécurité',
				'es' => 'Recursos para servicios de seguridad', 'pt' => 'Recursos para serviços de segurança',
				'nl' => 'Bronnen voor beveiligingsdiensten', 'da' => 'Ressourcer til sikkerhedstjenester',
				'sv' => 'Resurser för säkerhetstjänster', 'nb' => 'Ressurser for sikkerhetstjenester',
				'ru' => 'Ресурсы для служб безопасности',
			],
		];

		$cats = wp_get_post_categories( get_the_ID() );
		$links = [];

		foreach ( $cats as $cat_id ) {
			if ( ! isset( $cat_settore_map[ $cat_id ] ) ) {
				continue;
			}
			foreach ( $cat_settore_map[ $cat_id ] as $slug ) {
				if ( isset( $links[ $slug ] ) ) continue; // deduplicate
				$label = $settore_labels[ $slug ][ $locale ] ?? $settore_labels[ $slug ]['en'];
				$url   = 'https://geotapp.com/' . $locale . '/settori/' . $slug . '/risorse/';
				$links[ $slug ] = '<a href="' . esc_url( $url ) . '" class="zenith-settore-link">'
				                  . esc_html( $label ) . ' →</a>';
			}
		}

		if ( empty( $links ) ) {
			return $content;
		}

		$section = '<div class="zenith-settore-footer" style="margin-top:2em;padding:1em 1.25em;background:#f8fafc;border-left:3px solid #3b82f6;border-radius:4px;font-size:.9em;">'
		         . implode( ' &nbsp;·&nbsp; ', array_values( $links ) )
		         . '</div>';

		return $content . $section;
	}
```

### Step 2: Register the hook in init(), after the noindex_archives hook

Find the line:
```php
		add_action( 'wp_head', array( $this, 'noindex_archives' ), 1 );
```

Add immediately after:
```php
		add_filter( 'the_content', array( $this, 'append_settore_link' ), 25 );
```

### Step 3: Bump version to 1.6.4

Update plugin header `Version: 1.6.3` → `Version: 1.6.4`
Update constant `ZENITH_SEO_VERSION` to `'1.6.4'`

### Step 4: Deploy

```bash
sftp -P 22 su326249@access-5018990701.webspace-host.com <<'SFTP'
put /mnt/disco_secondario/GeoTapp-EcoSystem/.worktrees/integration-2026-03-11-fleet-main/geotapp-blog/wp-content/plugins/zenith-seo/zenith-seo.php blog/wp-content/plugins/zenith-seo/zenith-seo.php
bye
SFTP
```

### Step 5: Verify

```bash
curl -s "https://blog.geotapp.com/it/gestione-presenze-imprese-pulizie/" 2>/dev/null | grep -i 'zenith-settore'
```

Expected: the `zenith-settore-footer` div appears in the response. If the post doesn't have category 9/65/108, try a different URL.

### Step 6: Commit

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/.worktrees/integration-2026-03-11-fleet-main
git add geotapp-blog/wp-content/plugins/zenith-seo/zenith-seo.php
git commit -m "feat(seo): append settore footer link to blog posts"
```

---

## Task 3: WP — anchor text pool in link injector

**Goal:** Prevent over-optimization by varying the anchor text used per post. Currently the injector always uses the exact keyword as anchor (e.g., always "app presenze"). After this task, a given post will consistently use one synonym from a pool, but different posts may use different synonyms.

**Files:**
- Modify: `.worktrees/integration-2026-03-11-fleet-main/geotapp-blog/wp-content/plugins/zenith-seo/includes/class-link-injector.php`
- Deploy via SFTP

### Step 1: Add `get_anchor_pools()` private static method

Read `class-link-injector.php` first to understand the current structure.

Add this method inside the `Zenith_Link_Injector` class, after `get_product_rules()`:

```php
	/**
	 * Returns keyword → array of anchor text alternatives.
	 * The anchor used for a given post is selected deterministically by post ID,
	 * so the same post always gets the same anchor, but different posts may vary.
	 * Keys must be a subset of the keys in get_product_rules().
	 */
	private static function get_anchor_pools(): array {
		return [
			// IT
			'app presenze'        => [ 'app presenze', 'tracciamento presenze', 'gestione presenze' ],
			'timbratura GPS'      => [ 'timbratura GPS', 'timbratura con GPS', 'rilevazione GPS' ],
			'rilevazione presenze'=> [ 'rilevazione presenze', 'controllo presenze', 'registrazione presenze' ],
			'gestione interventi' => [ 'gestione interventi', 'coordinamento interventi', 'organizzazione interventi' ],
			'gestione operativa'  => [ 'gestione operativa', 'operatività sul campo', 'controllo operativo' ],
			// EN
			'GPS time tracking'   => [ 'GPS time tracking', 'GPS attendance tracking', 'location-based time tracking' ],
			'attendance tracking' => [ 'attendance tracking', 'workforce tracking', 'employee attendance' ],
			'attendance app'      => [ 'attendance app', 'time tracking app', 'workforce app' ],
			'field operations'    => [ 'field operations', 'field service management', 'field workforce management' ],
			// DE
			'Zeiterfassung'       => [ 'Zeiterfassung', 'GPS-Zeiterfassung', 'Arbeitszeiterfassung' ],
			'Zeiterfassung GPS'   => [ 'Zeiterfassung GPS', 'GPS-Zeiterfassung', 'standortbasierte Zeiterfassung' ],
		];
	}
```

### Step 2: Modify `inject_links()` to use the anchor pool

In the `inject_links()` method, find the start of the main `foreach` loop:

```php
		foreach ( $replacements as $keyword => $url ) {
			// Quick pre-check
			if ( stripos( $final_content, $keyword ) === false ) continue;

			$esc_kw = preg_quote( $keyword, '/' );
```

Replace with:

```php
		$anchor_pools = self::get_anchor_pools();
		$post_id      = get_the_ID();

		foreach ( $replacements as $keyword => $url ) {
			// Resolve the actual search term: use a pool synonym if available,
			// selected deterministically by post ID so it's stable per post.
			if ( ! empty( $anchor_pools[ $keyword ] ) ) {
				$pool    = $anchor_pools[ $keyword ];
				$idx     = abs( crc32( $post_id . $keyword ) ) % count( $pool );
				$search  = $pool[ $idx ];
			} else {
				$search = $keyword;
			}

			// Quick pre-check
			if ( stripos( $final_content, $search ) === false ) continue;

			$esc_kw = preg_quote( $search, '/' );
```

Also update the pattern variable from `$keyword` reference to `$search` — the `$esc_kw` is already based on `$search` so the pattern is correct. Make sure the `use` clause in the callback still works:

Find:
```php
			$final_content = preg_replace_callback( $pattern, function( $matches ) use ( $url, &$limit_reached, $keyword ) {
```

Replace with:
```php
			$final_content = preg_replace_callback( $pattern, function( $matches ) use ( $url, &$limit_reached, $search ) {
```

And inside the callback, find:
```php
				return '<a href="' . esc_url($url) . '" class="zenith-auto-link" title="' . esc_attr($keyword) . '">' . $matches[0] . '</a>';
```

Replace with:
```php
				return '<a href="' . esc_url($url) . '" class="zenith-auto-link" title="' . esc_attr($search) . '">' . $matches[0] . '</a>';
```

### Step 3: Clear the link map transient (so changes take effect immediately)

After the edit, the existing 12h transient cache for `zenith_link_map` is unaffected (it caches URLs, not anchors). The anchor pool is applied at render time, so no cache flush is needed.

### Step 4: Deploy

```bash
sftp -P 22 su326249@access-5018990701.webspace-host.com <<'SFTP'
put /mnt/disco_secondario/GeoTapp-EcoSystem/.worktrees/integration-2026-03-11-fleet-main/geotapp-blog/wp-content/plugins/zenith-seo/includes/class-link-injector.php blog/wp-content/plugins/zenith-seo/includes/class-link-injector.php
bye
SFTP
```

### Step 5: Commit

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/.worktrees/integration-2026-03-11-fleet-main
git add geotapp-blog/wp-content/plugins/zenith-seo/includes/class-link-injector.php
git commit -m "feat(seo): anchor text pool for link injector — vary anchors per post"
```

---

## Task 4: BreadcrumbList JSON-LD on product pages and settore pages

**Goal:** Add BreadcrumbList structured data to product pages and settore pages so Google can display breadcrumbs in SERPs.

**Files:**
- Modify: `src/app/[locale]/products/geotapp-flow/page.tsx`
- Modify: `src/app/[locale]/products/geotapp-app/page.tsx`
- Modify: `src/app/[locale]/products/geotapp-verifier/page.tsx`
- Modify: `src/app/[locale]/settori/pulizie/page.tsx`
- Modify: `src/app/[locale]/settori/installatori/page.tsx`
- Modify: `src/app/[locale]/settori/sicurezza/page.tsx`

**Note:** The settore pages use `getPulizieContent(resolvedLocale)` etc. which returns a `content` object. The heading for the settore comes from `content.hero.title` or similar — read the content files to find the right field. Use the hardcoded product/settore name as fallback if needed.

### Step 1: Add BreadcrumbList to product pages

For each product page, the component receives `locale` from params. Build the breadcrumb inside the component.

In `geotapp-flow/page.tsx`, update `LocaleFlowPage`:

```tsx
export default async function LocaleFlowPage({ params }: Props) {
  const { locale } = await params;
  const faq = FLOW_FAQ[locale] ?? FLOW_FAQ['en'];

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      { '@type': 'ListItem', position: 2, name: 'GeoTapp Flow', item: `https://geotapp.com/${locale}/products/geotapp-flow/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {faq && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      )}
      <FlowPage />
      <BlogHighlights locale={locale as AppLocale} categoryId={65} />
      <SettoriLinks locale={locale as AppLocale} settori={['installatori']} />
    </>
  );
}
```

Apply the same pattern to `geotapp-app/page.tsx` (name: `'GeoTapp App'`, slug: `geotapp-app`) and `geotapp-verifier/page.tsx` (name: `'GeoTapp Verifier'`, slug: `geotapp-verifier`).

### Step 2: Add BreadcrumbList to settore pages

Each settore page calls `getPulizieContent(resolvedLocale)` etc. and renders `<SettorePageLayout>`. Read one of the content files to find what field holds the page title (e.g., `content.meta.title` or `content.hero.title`).

In `src/app/[locale]/settori/pulizie/page.tsx`, update `PulizieLocalePage`:

```tsx
export default async function PulizieLocalePage({ params }) {
  const { locale } = await params;
  const resolvedLocale = (locale ?? DEFAULT_LOCALE) as AppLocale;
  const content = await getPulizieContent(resolvedLocale);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      { '@type': 'ListItem', position: 2, name: content.meta.title.replace(' — GeoTapp', ''), item: `https://geotapp.com/${resolvedLocale}/settori/pulizie/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <SettorePageLayout content={content} locale={resolvedLocale} settore="pulizie" />
    </>
  );
}
```

**Important:** Read the actual content structure from `src/content/settori/pulizie.ts` (or similar) to find the correct field for the page name. Use `content.meta.title` and strip ` — GeoTapp` suffix, or use a hardcoded settore name map if the title isn't clean.

Apply the same to `installatori/page.tsx` and `sicurezza/page.tsx`.

### Step 3: Verify build

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site && npm run build 2>&1 | tail -10
```

Expected: zero TypeScript errors.

### Step 4: Commit

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site
git add \
  "src/app/[locale]/products/geotapp-flow/page.tsx" \
  "src/app/[locale]/products/geotapp-app/page.tsx" \
  "src/app/[locale]/products/geotapp-verifier/page.tsx" \
  "src/app/[locale]/settori/pulizie/page.tsx" \
  "src/app/[locale]/settori/installatori/page.tsx" \
  "src/app/[locale]/settori/sicurezza/page.tsx"
git commit -m "feat(seo): BreadcrumbList JSON-LD on product + settore pages"
```

---

## Task 5: noindex blog Phase-3 locales in middleware

**Goal:** Prevent Google from indexing blog content in PT/NL/DA/SV/NB/RU while translated content is not yet available for those locales. Blog URLs for those locales follow the pattern `/blog/{locale}/post-slug/`.

**Files:**
- Modify: `src/middleware.ts`

**Phase-3 locales to noindex:** `pt`, `nl`, `da`, `sv`, `nb`, `ru`

### Step 1: Add constant near the top of the blog proxy section

In `middleware.ts`, find the blog proxy section (around line 466). Before the `if (pathname.startsWith('/blog')...` block, the file has constants defined at the top. Find where `WP_ORIGIN`, `BLOG_BASE`, etc. are defined and add:

```typescript
const BLOG_NOINDEX_LOCALES = new Set(['pt', 'nl', 'da', 'sv', 'nb', 'ru']);
```

### Step 2: Add X-Robots-Tag header to HTML responses for noindex locales

Inside the blog proxy HTML response handling block. Find this code (around line 594):

```typescript
      if (!isNoCachePath && isHtml) {
        headers.set('cache-control', 'public, max-age=3600');
      }
```

Add immediately after:

```typescript
      // Noindex blog content for Phase-3 locales (no translated content yet).
      // Blog locale URLs follow /blog/{locale}/ pattern. IT has no prefix.
      const blogLocaleMatch = pathname.match(/^\/blog\/([a-z]{2})\//);
      if (blogLocaleMatch && BLOG_NOINDEX_LOCALES.has(blogLocaleMatch[1])) {
        headers.set('X-Robots-Tag', 'noindex, follow');
      }
```

### Step 3: Verify build

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site && npm run build 2>&1 | tail -10
```

Expected: zero TypeScript errors.

### Step 4: Commit

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site
git add src/middleware.ts
git commit -m "feat(seo): noindex blog content for Phase-3 locales (pt/nl/da/sv/nb/ru)"
```

---

## Task 6: Add missing settore labels for PT/NL/DA/SV/NB/RU

**Goal:** The `labels` key in `SETTORE_CONFIG` only covers 5 locales (it, en, de, fr, es). Add the remaining 6 so the H1, meta title, and JSON-LD BreadcrumbList use correct locale-specific text instead of falling back to English.

**Files:**
- Modify: `src/app/[locale]/settori/[settore]/risorse/page.tsx`

### Step 1: Add missing label entries to each settore

For `pulizie`, extend `labels` to add:
```typescript
      pt: { title: 'Recursos para empresas de limpeza — GeoTapp', description: 'Artigos e guias para gerir presenças e intervenções em empresas de limpeza.', heading: 'Recursos para empresas de limpeza' },
      nl: { title: 'Bronnen voor schoonmaakbedrijven — GeoTapp', description: 'Artikelen en gidsen voor het beheer van aanwezigheid en opdrachten bij schoonmaakbedrijven.', heading: 'Bronnen voor schoonmaakbedrijven' },
      da: { title: 'Ressourcer til rengøringsvirksomheder — GeoTapp', description: 'Artikler og guides til styring af fremmøde og opgaver i rengøringsvirksomheder.', heading: 'Ressourcer til rengøringsvirksomheder' },
      sv: { title: 'Resurser för städföretag — GeoTapp', description: 'Artiklar och guider för hantering av närvaro och uppdrag i städföretag.', heading: 'Resurser för städföretag' },
      nb: { title: 'Ressurser for rengjøringsbedrifter — GeoTapp', description: 'Artikler og veiledninger for administrasjon av fremmøte og oppdrag i rengjøringsbedrifter.', heading: 'Ressurser for rengjøringsbedrifter' },
      ru: { title: 'Ресурсы для клининговых компаний — GeoTapp', description: 'Статьи и руководства по управлению присутствием и заявками в клининговых компаниях.', heading: 'Ресурсы для клининговых компаний' },
```

For `installatori`, extend `labels`:
```typescript
      pt: { title: 'Recursos para instaladores — GeoTapp', description: 'Artigos e guias para instaladores e empresas com técnicos de campo.', heading: 'Recursos para instaladores' },
      nl: { title: 'Bronnen voor installateurs — GeoTapp', description: 'Artikelen en gidsen voor installateurs en bedrijven met buitendiensttechnici.', heading: 'Bronnen voor installateurs' },
      da: { title: 'Ressourcer til installatører — GeoTapp', description: 'Artikler og guides til installatører og virksomheder med serviceteknikere.', heading: 'Ressourcer til installatører' },
      sv: { title: 'Resurser för installatörer — GeoTapp', description: 'Artiklar och guider för installatörer och företag med fälttekniker.', heading: 'Resurser för installatörer' },
      nb: { title: 'Ressurser for installatører — GeoTapp', description: 'Artikler og veiledninger for installatører og bedrifter med feltservice.', heading: 'Ressurser for installatører' },
      ru: { title: 'Ресурсы для монтажников — GeoTapp', description: 'Статьи и руководства для монтажников и выездных технических служб.', heading: 'Ресурсы для монтажников' },
```

For `sicurezza`, extend `labels`:
```typescript
      pt: { title: 'Recursos para serviços de segurança — GeoTapp', description: 'Artigos e guias para empresas de segurança e vigilância.', heading: 'Recursos para serviços de segurança' },
      nl: { title: 'Bronnen voor beveiligingsdiensten — GeoTapp', description: 'Artikelen en gidsen voor beveiligings- en bewakingsbedrijven.', heading: 'Bronnen voor beveiligingsdiensten' },
      da: { title: 'Ressourcer til sikkerhedstjenester — GeoTapp', description: 'Artikler og guides til sikkerheds- og overvågningsvirksomheder.', heading: 'Ressourcer til sikkerhedstjenester' },
      sv: { title: 'Resurser för säkerhetstjänster — GeoTapp', description: 'Artiklar och guider för säkerhets- och bevakningsföretag.', heading: 'Resurser för säkerhetstjänster' },
      nb: { title: 'Ressurser for sikkerhetstjenester — GeoTapp', description: 'Artikler og veiledninger for sikkerhets- og overvåkingsbedrifter.', heading: 'Ressurser for sikkerhetstjenester' },
      ru: { title: 'Ресурсы для служб безопасности — GeoTapp', description: 'Статьи и руководства для охранных предприятий и служб наблюдения.', heading: 'Ресурсы для служб безопасности' },
```

### Step 2: Verify build

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site && npm run build 2>&1 | tail -10
```

### Step 3: Commit

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site
git add "src/app/[locale]/settori/[settore]/risorse/page.tsx"
git commit -m "feat(seo): add missing settore labels for PT/NL/DA/SV/NB/RU"
```

---

## Final Verification Checklist

After all 6 tasks:

**Next.js:**
- [ ] `npm run build` exits 0
- [ ] `/it/products/geotapp-flow/` shows "Ideale per: Installatori e tecnici" section at bottom
- [ ] `/en/products/geotapp-app/` shows "Ideal for: Cleaning companies · Security services" at bottom
- [ ] `/it/products/geotapp-verifier/` shows all 3 settori
- [ ] Product pages have BreadcrumbList JSON-LD (check page source)
- [ ] Settore pages have BreadcrumbList JSON-LD
- [ ] `/pt/settori/pulizie/risorse/` H1 reads "Recursos para empresas de limpeza" (not English)
- [ ] `curl -sI https://geotapp.com/blog/pt/some-post/` returns `X-Robots-Tag: noindex, follow`

**WordPress:**
- [ ] Blog post with category 9/65/108 shows `zenith-settore-footer` div at bottom
- [ ] Link injector uses varied anchor text across different posts for same keyword
