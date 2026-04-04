# Internal Linking SEO — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Strengthen internal linking between Next.js marketing pages and WordPress blog to improve crawlability, PageRank flow, and indexation.

**Architecture:**
- Task 1–3: New `BlogHighlights` async server component (Next.js) fetches latest 3 WP posts per category via REST API and renders a link section on high-authority pages.
- Task 4: Extend `Zenith_Link_Injector` (WordPress/zenith-seo plugin) to auto-link product keywords in blog posts to locale-aware product URLs on geotapp.com.
- Task 5: Add bulk recalculation for `insight-related-posts` plugin so existing posts get `_insight_related_ids` meta populated (related posts currently only compute on `save_post`).
- Task 6: Pillar pages per settore at `/[locale]/settori/[settore]/risorse/` aggregating all topically relevant blog posts.

**Tech Stack:** Next.js 14 App Router (server components, fetch with revalidate), TypeScript, Tailwind CSS, WordPress REST API (`blog.geotapp.com`), PHP (WP plugin), Polylang.

**Repo paths:**
- Next.js: `/mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site/`
- WordPress plugins: `/mnt/disco_secondario/GeoTapp-EcoSystem/.worktrees/integration-2026-03-11-fleet-main/geotapp-blog/wp-content/plugins/`

---

## Context: What already exists

- `insight-related-posts` WP plugin: already injects "Potrebbe interessarti anche" block via `the_content` filter. The proxy rewrites `blog.geotapp.com` URLs to `geotapp.com/blog/…` automatically. **BUT** related IDs are only computed on `save_post` — existing posts have no `_insight_related_ids` meta → nothing shows. Task 5 fixes this.
- `Zenith_Link_Injector`: already active, already links blog post titles to each other. Task 4 adds cross-domain product page links.
- `BlogHighlights`: does not exist yet. Tasks 1–3 create and integrate it.
- Pillar pages: do not exist yet. Task 6 creates them.

---

## WP Category IDs (use these in Tasks 1–3 and Task 6)

Category slugs used for `isLocalePost`-style filtering (filter by WP permalink locale prefix):

| Category | IT id | Purpose |
|---|---|---|
| `gestione-presenze` | `9` | Attendance / timetracker pages |
| `geotapp-timetracker` | `108` | GeoTapp App product page |
| `geotapp-flow` | `65` | GeoTapp Flow product page |
| `digitalizzazione-aziendale` | `54` | Homepage (broad) |
| `controllo-costi` | `50` | Homepage (broad) |

Per-locale category naming pattern: `{slug}-{locale}` e.g., `gestione-presenze-en` (id:376), `gestione-presenze-de` (id:435). But in Tasks 1–3 we **do not** filter by category ID — we filter by WP permalink locale prefix using `isLocalePost` (same pattern as `src/app/[locale]/blog/page.tsx`). The category filter uses the Italian category ID only (WP returns posts regardless of language when filtering by parent category ID). Simpler and already proven.

---

## Task 1: BlogHighlights server component

**Files:**
- Create: `src/components/BlogHighlights.tsx`
- Modify: `src/app/[locale]/page.tsx` (homepage — add BlogHighlights below HomeClient)

### Step 1: Create BlogHighlights.tsx

Create `src/components/BlogHighlights.tsx`:

```tsx
import Link from 'next/link';

const WP = 'https://blog.geotapp.com';
const HEADERS = { host: 'blog.geotapp.com', 'x-geotapp-proxy': '1', 'x-forwarded-proto': 'https' };

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  url: string;
  date: string;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#8216;/g, '\u2018')
    .replace(/&#8217;/g, '\u2019').replace(/&#8220;/g, '\u201C')
    .replace(/&#8221;/g, '\u201D').replace(/&nbsp;/g, ' ')
    .trim();
}

function isLocalePost(link: string, locale: string): boolean {
  try {
    const afterBlog = new URL(link).pathname.replace(/^\/blog\//, '');
    if (locale === 'it') return !/^[a-z]{2}\//.test(afterBlog);
    return afterBlog.startsWith(`${locale}/`);
  } catch {
    return false;
  }
}

function normalizeUrl(link: string, slug: string): string {
  try {
    const p = new URL(link);
    if (p.hostname === 'blog.geotapp.com') return `/blog${p.pathname}`;
    if (p.hostname === 'geotapp.com') return p.pathname;
  } catch { /* fallback */ }
  return `/blog/${slug}/`;
}

async function fetchBlogPosts(locale: string, categoryId: number, limit = 3): Promise<BlogPost[]> {
  try {
    const res = await fetch(
      `${WP}/wp-json/wp/v2/posts?categories=${categoryId}&per_page=20&_fields=id,slug,title,excerpt,date,link&status=publish`,
      { headers: HEADERS, next: { revalidate: 3600 }, signal: AbortSignal.timeout(5000) },
    );
    if (!res.ok) return [];
    const raw = await res.json() as Array<{ id: number; slug: string; title: any; excerpt: any; date: string; link: string }>;
    return raw
      .filter((p) => isLocalePost(p.link ?? '', locale))
      .slice(0, limit)
      .map((p) => ({
        id: p.id,
        title: stripHtml(p.title?.rendered ?? ''),
        excerpt: stripHtml(p.excerpt?.rendered ?? '').slice(0, 140),
        url: normalizeUrl(p.link, p.slug),
        date: p.date,
      }));
  } catch {
    return [];
  }
}

const SECTION_LABELS: Record<string, string> = {
  it: 'Dal blog', en: 'From the blog', de: 'Aus dem Blog', fr: 'Du blog',
  es: 'Del blog', pt: 'Do blog', nl: 'Van de blog', da: 'Fra bloggen',
  sv: 'Från bloggen', nb: 'Fra bloggen', ru: 'Из блога',
};

const READ_MORE_LABELS: Record<string, string> = {
  it: 'Leggi →', en: 'Read →', de: 'Lesen →', fr: 'Lire →',
  es: 'Leer →', pt: 'Ler →', nl: 'Lees →', da: 'Læs →',
  sv: 'Läs →', nb: 'Les →', ru: 'Читать →',
};

interface Props {
  locale: string;
  categoryId: number;
  className?: string;
}

export default async function BlogHighlights({ locale, categoryId, className = '' }: Props) {
  const posts = await fetchBlogPosts(locale, categoryId);
  if (posts.length === 0) return null;

  const label = SECTION_LABELS[locale] ?? SECTION_LABELS['en'];
  const readMore = READ_MORE_LABELS[locale] ?? READ_MORE_LABELS['en'];

  return (
    <section className={`py-12 border-t border-slate-100 ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl font-semibold text-slate-700 mb-6">{label}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={post.url}
              className="group block rounded-xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md hover:border-slate-200 transition-all"
            >
              <p className="text-xs text-slate-400 mb-2">{new Date(post.date).toLocaleDateString(locale)}</p>
              <h3 className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                {post.title}
              </h3>
              <p className="text-xs text-slate-500 line-clamp-3 mb-3">{post.excerpt}</p>
              <span className="text-xs font-medium text-blue-600">{readMore}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Step 2: Add BlogHighlights to homepage

In `src/app/[locale]/page.tsx`, add import and render it below `<HomeClient />`.

Current default export (lines 117–131):
```tsx
export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  const faq = HOMEPAGE_FAQ[locale] ?? null;
  return (
    <>
      {faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        />
      )}
      <HomeClient />
    </>
  );
}
```

Replace with:
```tsx
import BlogHighlights from '@/components/BlogHighlights';

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  const faq = HOMEPAGE_FAQ[locale] ?? null;
  return (
    <>
      {faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        />
      )}
      <HomeClient />
      {/* Category 54 = "digitalizzazione-aziendale" — broad, relevant to all visitors */}
      <BlogHighlights locale={locale} categoryId={54} />
    </>
  );
}
```

### Step 3: Verify build compiles

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site
npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors

### Step 4: Commit

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site
git add src/components/BlogHighlights.tsx src/app/\[locale\]/page.tsx
git commit -m "feat(seo): add BlogHighlights server component + homepage integration"
```

---

## Task 2: BlogHighlights in settori pages

**Files:**
- Modify: `src/components/SettorePageLayout.tsx`

The three settore pages (`pulizie`, `installatori`, `sicurezza`) all use `SettorePageLayout`. Add `BlogHighlights` there with a `categoryId` prop per settore.

### Step 1: Update SettorePageLayout props

In `src/components/SettorePageLayout.tsx`, add `blogCategoryId` to Props interface and render BlogHighlights at the bottom.

Current Props interface:
```ts
interface Props {
  content: SettoreContent;
  locale: AppLocale;
  settore: SettoreSlug;
}
```

Replace with:
```ts
// Category IDs per settore (WP REST API):
// pulizie     → gestione-presenze (9)   — cleaning co. need attendance
// installatori → geotapp-flow (65)       — field operations
// sicurezza   → gestione-presenze (9)   — security services need attendance
const SETTORE_CATEGORY: Record<SettoreSlug, number> = {
  pulizie: 9,
  installatori: 65,
  sicurezza: 9,
};

interface Props {
  content: SettoreContent;
  locale: AppLocale;
  settore: SettoreSlug;
}
```

Add import at top of file:
```tsx
import BlogHighlights from '@/components/BlogHighlights';
```

At the bottom of the JSX returned by `SettorePageLayout` (before the final closing `</div>`), add:
```tsx
<BlogHighlights locale={locale} categoryId={SETTORE_CATEGORY[settore]} />
```

Important: `SettorePageLayout` is a `'use client'` or server component? Check the file — it does NOT have `'use client'` at the top, so it's a server component. ✅ `BlogHighlights` (also server component) can be imported directly.

### Step 2: Verify TypeScript

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site
npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors

### Step 3: Commit

```bash
git add src/components/SettorePageLayout.tsx
git commit -m "feat(seo): add BlogHighlights to settori pages"
```

---

## Task 3: BlogHighlights in product pages

**Files:**
- Modify: `src/app/[locale]/products/geotapp-flow/page.tsx`
- Modify: `src/app/[locale]/products/geotapp-app/page.tsx`
- Modify: `src/app/[locale]/products/geotapp-verifier/page.tsx`

These locale-level pages are async server components. The actual page content lives in client components (`src/app/products/geotapp-flow/page.tsx`), but the locale wrappers can render `BlogHighlights` after the client component.

### Step 1: Edit geotapp-flow locale page

`src/app/[locale]/products/geotapp-flow/page.tsx` currently ends with:
```tsx
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
```

Add default export:

```tsx
import BlogHighlights from '@/components/BlogHighlights';
import FlowPageClient from '../../../products/geotapp-flow/page';

export default async function FlowLocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <FlowPageClient />
      {/* Category 65 = "geotapp-flow" */}
      <BlogHighlights locale={locale} categoryId={65} />
    </>
  );
}
```

**Note:** Check if `src/app/[locale]/products/geotapp-flow/page.tsx` already has a default export. If it does (e.g., it re-exports FlowPage), replace that export with the new one above that wraps it.

### Step 2: Check existing default exports in product locale pages

Run:
```bash
grep -n "export default" src/app/\[locale\]/products/geotapp-flow/page.tsx src/app/\[locale\]/products/geotapp-app/page.tsx src/app/\[locale\]/products/geotapp-verifier/page.tsx
```

If a default export already exists for a product page, wrap the existing component instead of adding a new export.

Look at what the existing file imports for the client component name (it may be `FlowPage` not `FlowPageClient`).

Pattern to follow (adjust component name):
```tsx
import BlogHighlights from '@/components/BlogHighlights';
import TheExistingClientComponent from '../../../products/geotapp-PRODUCT/page';

export default async function ProductLocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <TheExistingClientComponent />
      <BlogHighlights locale={locale} categoryId={CATEGORY_ID} />
    </>
  );
}
```

Category IDs:
- `geotapp-flow` → `65`
- `geotapp-app` (timetracker) → `108`
- `geotapp-verifier` → `9` (gestione-presenze — verifier is used to verify attendance reports)

### Step 3: Verify TypeScript

```bash
npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors

### Step 4: Commit

```bash
git add src/app/\[locale\]/products/
git commit -m "feat(seo): add BlogHighlights to product pages (flow, app, verifier)"
```

---

## Task 4: Keyword→product links in WP (Zenith Link Injector)

**Files:**
- Modify: `geotapp-blog/wp-content/plugins/zenith-seo/includes/class-link-injector.php`

**Working directory for this task:** `/mnt/disco_secondario/GeoTapp-EcoSystem/.worktrees/integration-2026-03-11-fleet-main/`

The existing `Zenith_Link_Injector::inject_links()` already handles `zenith_auto_links` manual rules (format: `keyword|url` per line). We extend it to also inject locale-aware product page links by adding a new static method `load_product_rules($locale)` called from `inject_links`.

### Step 1: Modify class-link-injector.php

In `geotapp-blog/wp-content/plugins/zenith-seo/includes/class-link-injector.php`:

After the closing brace of `inject_links()` method (before the final `}`of the class), add this new method:

```php
/**
 * Returns keyword → URL map for GeoTapp product pages, locale-aware.
 * Called from inject_links() to cross-link blog posts → geotapp.com products.
 *
 * Rules: max 1 occurrence per keyword (same as manual rules limit).
 * Locale detection: Polylang pll_current_language(), fallback 'it'.
 */
private static function get_product_rules(): array {
    $locale = function_exists( 'pll_current_language' ) ? pll_current_language() : 'it';
    // Safety: only known locales
    $known = ['it','en','de','fr','es','pt','nl','da','sv','nb','ru'];
    if ( ! in_array( $locale, $known, true ) ) {
        $locale = 'it';
    }
    $base = 'https://geotapp.com/' . $locale;

    // slug translations mirror next.config.mjs SLUG_TRANSLATIONS
    $products_slug = match( $locale ) {
        'de' => 'produkte',
        'fr' => 'produits',
        'es' => 'productos',
        'pt' => 'produtos',
        'nl' => 'producten',
        'da' => 'produkter',
        'sv' => 'produkter',
        'nb' => 'produkter',
        'ru' => 'produkty',
        default => 'products',
    };

    $flow_url      = "{$base}/{$products_slug}/geotapp-flow/";
    $app_url       = "{$base}/{$products_slug}/geotapp-app/";
    $verifier_url  = "{$base}/{$products_slug}/geotapp-verifier/";

    $rules = match( $locale ) {
        'it' => [
            'GeoTapp Flow'           => $flow_url,
            'gestione operativa'     => $flow_url,
            'gestione interventi'    => $flow_url,
            'app presenze'           => $app_url,
            'timbratura GPS'         => $app_url,
            'rilevazione presenze'   => $app_url,
            'GeoTapp Verifier'       => $verifier_url,
            'verifica report'        => $verifier_url,
        ],
        'en' => [
            'GeoTapp Flow'           => $flow_url,
            'field operations'       => $flow_url,
            'attendance app'         => $app_url,
            'GPS time tracking'      => $app_url,
            'attendance tracking'    => $app_url,
            'GeoTapp Verifier'       => $verifier_url,
            'report verification'    => $verifier_url,
        ],
        'de' => [
            'GeoTapp Flow'           => $flow_url,
            'Außendienstverwaltung'  => $flow_url,
            'Anwesenheits-App'       => $app_url,
            'Zeiterfassung GPS'      => $app_url,
            'Zeiterfassung'          => $app_url,
            'GeoTapp Verifier'       => $verifier_url,
        ],
        'fr' => [
            'GeoTapp Flow'           => $flow_url,
            'gestion des interventions' => $flow_url,
            'application de présence'   => $app_url,
            'pointage GPS'           => $app_url,
            'GeoTapp Verifier'       => $verifier_url,
        ],
        'es' => [
            'GeoTapp Flow'           => $flow_url,
            'gestión de intervenciones' => $flow_url,
            'control de presencia'   => $app_url,
            'fichaje GPS'            => $app_url,
            'GeoTapp Verifier'       => $verifier_url,
        ],
        default => [
            'GeoTapp Flow'    => $flow_url,
            'GeoTapp App'     => $app_url,
            'GeoTapp Verifier'=> $verifier_url,
        ],
    };

    return $rules;
}
```

Then, in `inject_links()`, after the manual rules block (after line that handles `$rules_text`, before the "Auto-Link Titles" block at line ~52), add:

```php
// 1b. Product page rules (locale-aware cross-domain links)
$product_rules = self::get_product_rules();
foreach ( $product_rules as $k => $u ) {
    if ( ! isset( $replacements[ $k ] ) ) {
        $replacements[ $k ] = $u;
    }
}
```

### Step 2: Verify PHP syntax

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/.worktrees/integration-2026-03-11-fleet-main
php -l geotapp-blog/wp-content/plugins/zenith-seo/includes/class-link-injector.php
```

Expected: `No syntax errors detected`

### Step 3: Commit to main branch

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/.worktrees/integration-2026-03-11-fleet-main
git add geotapp-blog/wp-content/plugins/zenith-seo/includes/class-link-injector.php
git commit -m "feat(zenith-seo): locale-aware product page cross-links in link injector"
```

---

## Task 5: Bulk recalculate related posts for insight-related-posts plugin

**Files:**
- Modify: `geotapp-blog/wp-content/plugins/insight-related-posts/insight-related-posts.php`
- Modify: `geotapp-blog/wp-content/plugins/insight-related-posts/includes/class-engine.php`

**Working directory:** `/mnt/disco_secondario/GeoTapp-EcoSystem/.worktrees/integration-2026-03-11-fleet-main/`

Currently `calculate_related` only runs on `save_post`. Existing posts → no `_insight_related_ids` meta → no related posts shown. We add a WP admin action that bulk-recalculates all posts.

### Step 1: Add bulk recalculate method to Insight_Engine

In `class-engine.php`, add this static method before the final `}` of the class:

```php
/**
 * Bulk recalculates related posts for all published posts.
 * Triggered via WP admin action (see main plugin file).
 * Uses a time limit of 20s per batch to avoid PHP timeout.
 */
public static function bulk_recalculate( int $batch_size = 50, int $offset = 0 ): array {
    $posts = get_posts([
        'post_type'      => 'post',
        'post_status'    => 'publish',
        'posts_per_page' => $batch_size,
        'offset'         => $offset,
        'fields'         => 'all',
        'orderby'        => 'ID',
        'order'          => 'ASC',
    ]);

    $processed = 0;
    foreach ( $posts as $post ) {
        self::calculate_related( $post->ID, $post );
        $processed++;
    }

    return [
        'processed' => $processed,
        'done'      => $processed < $batch_size,
    ];
}
```

### Step 2: Add admin action to main plugin file

In `insight-related-posts.php`, in the `__construct()` method, add:

```php
// Admin-only: bulk recalculate via ?action=insight_bulk_recalc&offset=0
add_action( 'admin_init', array( $this, 'handle_bulk_recalculate' ) );
```

And add this method to the `Insight_Related_Posts` class:

```php
public function handle_bulk_recalculate() {
    if ( ! current_user_can( 'manage_options' ) ) return;
    if ( empty( $_GET['action'] ) || $_GET['action'] !== 'insight_bulk_recalc' ) return;

    $offset = isset( $_GET['offset'] ) ? (int) $_GET['offset'] : 0;
    $result = Insight_Engine::bulk_recalculate( 50, $offset );

    wp_send_json([
        'processed' => $result['processed'],
        'done'      => $result['done'],
        'next_offset' => $offset + $result['processed'],
    ]);
}
```

### Step 3: Verify PHP syntax

```bash
php -l geotapp-blog/wp-content/plugins/insight-related-posts/insight-related-posts.php
php -l geotapp-blog/wp-content/plugins/insight-related-posts/includes/class-engine.php
```

Expected: `No syntax errors detected` for both files

### Step 4: Commit

```bash
git add geotapp-blog/wp-content/plugins/insight-related-posts/
git commit -m "feat(insight-related-posts): add bulk recalculate endpoint for existing posts"
```

---

## Task 6: Pillar pages per settore (risorse)

**Files:**
- Create: `src/app/[locale]/settori/[settore]/risorse/page.tsx`

These pages aggregate all blog posts related to a settore sector, acting as link hubs. The URL structure is `/it/settori/pulizie/risorse/` etc.

### Step 1: Create the risorse page

Create `src/app/[locale]/settori/[settore]/risorse/page.tsx`:

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { DEFAULT_LOCALE, type AppLocale } from '@/lib/i18n/config';

const WP = 'https://blog.geotapp.com';
const HEADERS = { host: 'blog.geotapp.com', 'x-geotapp-proxy': '1', 'x-forwarded-proto': 'https' };

// Valid settori with their WP category IDs and per-locale labels
const SETTORE_CONFIG: Record<string, {
  categoryId: number;
  labels: Record<string, { title: string; description: string; heading: string }>;
}> = {
  pulizie: {
    categoryId: 9, // gestione-presenze
    labels: {
      it: { title: 'Risorse per imprese di pulizie — GeoTapp', description: 'Articoli, guide e risorse per gestire presenze e interventi nelle imprese di pulizie.', heading: 'Risorse per imprese di pulizie' },
      en: { title: 'Resources for cleaning companies — GeoTapp', description: 'Articles, guides and resources for managing attendance and jobs in cleaning companies.', heading: 'Resources for cleaning companies' },
      de: { title: 'Ressourcen für Reinigungsunternehmen — GeoTapp', description: 'Artikel, Leitfäden und Ressourcen für Reinigungsunternehmen.', heading: 'Ressourcen für Reinigungsunternehmen' },
      fr: { title: 'Ressources pour les entreprises de nettoyage — GeoTapp', description: 'Articles, guides et ressources pour les entreprises de nettoyage.', heading: 'Ressources pour les entreprises de nettoyage' },
      es: { title: 'Recursos para empresas de limpieza — GeoTapp', description: 'Artículos, guías y recursos para empresas de limpieza.', heading: 'Recursos para empresas de limpieza' },
    },
  },
  installatori: {
    categoryId: 65, // geotapp-flow
    labels: {
      it: { title: 'Risorse per installatori — GeoTapp', description: 'Articoli e guide per installatori e aziende con tecnici sul campo.', heading: 'Risorse per installatori' },
      en: { title: 'Resources for installers — GeoTapp', description: 'Articles and guides for installers and field service companies.', heading: 'Resources for installers' },
      de: { title: 'Ressourcen für Installateure — GeoTapp', description: 'Artikel und Leitfäden für Installateure und Außendienstunternehmen.', heading: 'Ressourcen für Installateure' },
      fr: { title: 'Ressources pour installateurs — GeoTapp', description: 'Articles et guides pour installateurs et entreprises de terrain.', heading: 'Ressources pour installateurs' },
      es: { title: 'Recursos para instaladores — GeoTapp', description: 'Artículos y guías para instaladores y empresas con técnicos de campo.', heading: 'Recursos para instaladores' },
    },
  },
  sicurezza: {
    categoryId: 9, // gestione-presenze
    labels: {
      it: { title: 'Risorse per servizi di sicurezza — GeoTapp', description: 'Articoli e guide per aziende di sicurezza e vigilanza.', heading: 'Risorse per servizi di sicurezza' },
      en: { title: 'Resources for security services — GeoTapp', description: 'Articles and guides for security and surveillance companies.', heading: 'Resources for security services' },
      de: { title: 'Ressourcen für Sicherheitsdienste — GeoTapp', description: 'Artikel und Leitfäden für Sicherheitsdienste.', heading: 'Ressourcen für Sicherheitsdienste' },
      fr: { title: 'Ressources pour services de sécurité — GeoTapp', description: 'Articles et guides pour entreprises de sécurité.', heading: 'Ressources pour services de sécurité' },
      es: { title: 'Recursos para servicios de seguridad — GeoTapp', description: 'Artículos y guías para empresas de seguridad.', heading: 'Recursos para servicios de seguridad' },
    },
  },
};

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#8217;/g, '\u2019').replace(/&#8220;/g, '\u201C').replace(/&#8221;/g, '\u201D').replace(/&nbsp;/g, ' ').trim();
}

function isLocalePost(link: string, locale: string): boolean {
  try {
    const afterBlog = new URL(link).pathname.replace(/^\/blog\//, '');
    if (locale === 'it') return !/^[a-z]{2}\//.test(afterBlog);
    return afterBlog.startsWith(`${locale}/`);
  } catch { return false; }
}

function normalizeUrl(link: string, slug: string): string {
  try {
    const p = new URL(link);
    if (p.hostname === 'blog.geotapp.com') return `/blog${p.pathname}`;
  } catch {}
  return `/blog/${slug}/`;
}

async function fetchAllPostsForCategory(locale: string, categoryId: number) {
  try {
    const res = await fetch(
      `${WP}/wp-json/wp/v2/posts?categories=${categoryId}&per_page=100&_fields=id,slug,title,excerpt,date,link&status=publish`,
      { headers: HEADERS, next: { revalidate: 7200 }, signal: AbortSignal.timeout(8000) },
    );
    if (!res.ok) return [];
    const raw = await res.json() as Array<{ id: number; slug: string; title: any; excerpt: any; date: string; link: string }>;
    return raw
      .filter((p) => isLocalePost(p.link ?? '', locale))
      .map((p) => ({
        id: p.id,
        title: stripHtml(p.title?.rendered ?? ''),
        excerpt: stripHtml(p.excerpt?.rendered ?? '').slice(0, 180),
        url: normalizeUrl(p.link, p.slug),
        date: p.date,
      }));
  } catch {
    return [];
  }
}

type Params = { locale: string; settore: string };

export async function generateStaticParams(): Promise<Params[]> {
  const { SUPPORTED_LOCALES } = await import('@/lib/i18n/config');
  const settori = Object.keys(SETTORE_CONFIG);
  return SUPPORTED_LOCALES.flatMap((locale) =>
    settori.map((settore) => ({ locale, settore }))
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, settore } = await params;
  const config = SETTORE_CONFIG[settore];
  if (!config) return {};
  const resolvedLocale = (locale ?? DEFAULT_LOCALE) as AppLocale;
  const label = config.labels[resolvedLocale] ?? config.labels['en'];
  return {
    title: { absolute: label.title },
    description: label.description,
    alternates: buildLocaleAlternates(resolvedLocale, `/settori/${settore}/risorse/`),
  };
}

const BACK_LABELS: Record<string, string> = {
  it: '← Torna al settore', en: '← Back to sector', de: '← Zurück zum Sektor',
  fr: '← Retour au secteur', es: '← Volver al sector', pt: '← Voltar ao setor',
  nl: '← Terug naar sector', da: '← Tilbage til sektor', sv: '← Tillbaka till sektor',
  nb: '← Tilbake til sektor', ru: '← Назад к разделу',
};

const READ_LABELS: Record<string, string> = {
  it: 'Leggi →', en: 'Read →', de: 'Lesen →', fr: 'Lire →',
  es: 'Leer →', pt: 'Ler →', nl: 'Lees →', da: 'Læs →',
  sv: 'Läs →', nb: 'Les →', ru: 'Читать →',
};

export default async function RisorseSettorePage({ params }: { params: Promise<Params> }) {
  const { locale, settore } = await params;
  const config = SETTORE_CONFIG[settore];
  if (!config) notFound();

  const resolvedLocale = (locale ?? DEFAULT_LOCALE) as AppLocale;
  const label = config.labels[resolvedLocale] ?? config.labels['en'];
  const posts = await fetchAllPostsForCategory(resolvedLocale, config.categoryId);
  const backLabel = BACK_LABELS[resolvedLocale] ?? BACK_LABELS['en'];
  const readLabel = READ_LABELS[resolvedLocale] ?? READ_LABELS['en'];

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <Link href={`/${resolvedLocale}/settori/${settore}/`} className="text-sm text-blue-600 hover:underline">
          {backLabel}
        </Link>
        <h1 className="text-3xl font-bold text-slate-900 mt-4 mb-2">{label.heading}</h1>
        <p className="text-slate-500 mb-8">{label.description}</p>

        {posts.length === 0 ? (
          <p className="text-slate-400 text-sm">Nessun articolo disponibile al momento.</p>
        ) : (
          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.id} className="border-b border-slate-100 pb-6">
                <Link href={post.url} className="group">
                  <h2 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors mb-1">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-500 mb-2">{post.excerpt}</p>
                  <span className="text-xs font-medium text-blue-600">{readLabel}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
```

### Step 2: Add "Risorse" link in SettorePageLayout

In `src/components/SettorePageLayout.tsx`, add a link to the risorse page. Find the section that renders the main CTA buttons (where `demoLink` and `pricingLink` are used) and add a tertiary link after the demo CTA:

Locale-aware label map to add near the top of the component (after the color map):
```tsx
const RISORSE_LABELS: Record<string, string> = {
  it: 'Guide e articoli →', en: 'Guides & articles →', de: 'Leitfäden & Artikel →',
  fr: 'Guides & articles →', es: 'Guías y artículos →', pt: 'Guias & artigos →',
  nl: 'Gidsen & artikelen →', da: 'Vejledninger & artikler →',
  sv: 'Guider & artiklar →', nb: 'Guider & artikler →', ru: 'Руководства & статьи →',
};
```

In the JSX, find where the primary CTA buttons are rendered (look for `demoLink` usage) and add after the CTA block:
```tsx
<Link
  href={`/${locale}/settori/${settore}/risorse/`}
  className="text-sm text-slate-500 hover:text-slate-700 underline underline-offset-2"
>
  {RISORSE_LABELS[locale] ?? RISORSE_LABELS['en']}
</Link>
```

### Step 3: Verify TypeScript

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site
npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors

### Step 4: Commit

```bash
git add src/app/\[locale\]/settori/
git add src/components/SettorePageLayout.tsx
git commit -m "feat(seo): add pillar pages /settori/[settore]/risorse/ + risorse link in settore layout"
```

---

## Final: Deploy

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site
npm run deploy 2>&1 | tail -15
```

Expected: `Deployed official-geotapp-website` + 200 from Cloudflare

After deploy, run bulk recalculation on WP by visiting (logged in as admin):
```
https://geotapp.com/blog/wp-admin/?action=insight_bulk_recalc&offset=0
```

Repeat with increasing offset until `"done": true`.
