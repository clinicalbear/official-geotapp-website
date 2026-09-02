// geotapp-site/src/lib/wp-post-index.ts
// Indice dei post del blog, condiviso da chi deve mostrare articoli filtrati per
// categoria (BlogHighlights, risorse di settore, hub /links).
//
// PERCHE' NON SI USA `?categories=`
// Verificato in produzione il 2026-09-02: `?categories=<id>` e `?tags=<id>` rispondono
// SEMPRE `[]`, anche per termini con post assegnati (la categoria 9 ha 21 post, la query
// ne torna zero). I term id ci sono nel payload di ogni post: e' la query per tassonomia
// a non filtrare. Stesso discorso per `?lang=`, che viene ignorato, e per `?author=`.
// Funzionano: paginazione, `_fields`, `include`, `_embed`, `search`.
// Quindi: si scarica l'indice una volta e si filtra qui.
//
// CONTRATTO WORKER (vedi AGENTS.md): trailing slash sull'endpoint, header di proxy,
// cache: 'no-store' con cache in memoria a parte (con next.revalidate il data cache del
// Worker deduplica la fetch e l'AbortSignal non si propaga).

import { detectPostLocale, toBlogLocale } from '@/lib/blog-locale';

const WP = 'https://blog.geotapp.com';
const WP_HEADERS = {
  host: 'blog.geotapp.com',
  'x-geotapp-proxy': '1',
  'x-forwarded-proto': 'https',
};

const INDEX_FIELDS = 'id,slug,title,excerpt,date,link,featured_media,categories,class_list,gtmsa_lang';
const PER_PAGE = 100;
const MAX_PAGES = 25;
const CACHE_TTL_MS = 60 * 60 * 1000;
const REVALIDATE_S = 3600;

export interface WpIndexPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  link: string;
  featured_media?: number;
  categories?: number[];
  class_list?: string[];
  gtmsa_lang?: string;
}

/**
 * Due modi di leggere dal blog, e non sono intercambiabili:
 *
 *  - `next: { revalidate }` SENZA AbortSignal, per le pagine statiche. Con `no-store` il
 *    build esce dal rendering statico (DYNAMIC_SERVER_USAGE) e la fetch fallisce proprio
 *    li': le sezioni blog finirebbero vuote nell'HTML generato.
 *  - `cache: 'no-store'` PIU' AbortSignal, per le pagine force-dynamic (/links). Li' il
 *    revalidate del data cache del Worker deduplica la fetch e il signal non si propaga.
 */
interface FetchMode {
  noStore?: boolean;
}

function requestInit({ noStore }: FetchMode, timeoutMs: number): RequestInit {
  return noStore
    ? { headers: WP_HEADERS, cache: 'no-store', signal: AbortSignal.timeout(timeoutMs) }
    : { headers: WP_HEADERS, next: { revalidate: REVALIDATE_S } };
}

async function wpJson<T>(path: string, mode: FetchMode = {}, timeoutMs = 8000): Promise<T | null> {
  try {
    const res = await fetch(`${WP}${path}`, requestInit(mode, timeoutMs));
    if (!res.ok) {
      console.error(`wp-post-index: HTTP ${res.status} per ${path}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (err) {
    console.error(`wp-post-index: fetch fallita per ${path}:`, err);
    return null;
  }
}

async function wpJsonWithHeaders<T>(
  path: string,
  mode: FetchMode = {},
  timeoutMs = 8000,
): Promise<{ data: T; headers: Headers } | null> {
  try {
    const res = await fetch(`${WP}${path}`, requestInit(mode, timeoutMs));
    if (!res.ok) {
      console.error(`wp-post-index: HTTP ${res.status} per ${path}`);
      return null;
    }
    return { data: (await res.json()) as T, headers: res.headers };
  } catch (err) {
    console.error(`wp-post-index: fetch fallita per ${path}:`, err);
    return null;
  }
}

// Cache per numero di pagine richieste: le pagine statiche vogliono l'archivio intero,
// quelle force-dynamic solo i post recenti e non devono pagare 12 subrequest a richiesta.
const indexCache = new Map<number, { at: number; posts: WpIndexPost[] }>();

/** Svuota le cache in memoria. Serve ai test. */
export function resetWpPostIndexCache(): void {
  indexCache.clear();
  categorySlugCache.clear();
  categoryIdCache.clear();
}

export interface PostIndexOptions extends FetchMode {
  /** Quante pagine da 100 post scaricare. Default: tutto l'archivio. */
  maxPages?: number;
}

/**
 * Post pubblicati, dal piu' recente. Per default scarica tutto l'archivio in modalita'
 * statica: serve alle pagine generate in build, che devono elencare anche i pezzi vecchi
 * di una categoria. Chi rende a ogni richiesta passa `maxPages` basso e `noStore`.
 */
export async function getPostIndex(options: PostIndexOptions = {}): Promise<WpIndexPost[]> {
  const { maxPages = MAX_PAGES, noStore = false } = options;
  const cap = Math.max(1, Math.min(maxPages, MAX_PAGES));
  const cached = indexCache.get(cap);
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) return cached.posts;

  const first = await wpJsonWithHeaders<WpIndexPost[]>(
    `/wp-json/wp/v2/posts/?per_page=${PER_PAGE}&page=1&status=publish&orderby=date&order=desc&_fields=${INDEX_FIELDS}`,
    { noStore },
  );
  // Su fallimento si tiene quello che c'era: meglio un indice vecchio di un'ora che una
  // sezione vuota, che e' esattamente il modo in cui questo bug e' passato inosservato.
  if (!first || !Array.isArray(first.data)) return cached?.posts ?? [];

  const totalPages = Math.min(
    parseInt(first.headers.get('x-wp-totalpages') ?? '1', 10) || 1,
    cap,
  );

  const posts = [...first.data];
  if (totalPages > 1) {
    const rest = await Promise.all(
      Array.from({ length: totalPages - 1 }, (_, i) =>
        wpJson<WpIndexPost[]>(
          `/wp-json/wp/v2/posts/?per_page=${PER_PAGE}&page=${i + 2}&status=publish&orderby=date&order=desc&_fields=${INDEX_FIELDS}`,
          { noStore },
        ),
      ),
    );
    for (const page of rest) if (Array.isArray(page)) posts.push(...page);
  }

  const seen = new Set<number>();
  const unique = posts.filter((p) => (seen.has(p.id) ? false : (seen.add(p.id), true)));

  indexCache.set(cap, { at: Date.now(), posts: unique });
  return unique;
}

/**
 * Percorso interno di un post. I permalink del blog arrivano su `geotapp.com/blog/...`
 * (e storicamente su `blog.geotapp.com/...`): chi prefissava `/blog` al pathname
 * generava `/blog/blog/...`, chi non riconosceva l'host cadeva sul solo slug, e sono
 * entrambi 404. La lingua e la data fanno parte del permalink e vanno tenute.
 */
export function blogPostPath(link: string, slug: string): string {
  try {
    const u = new URL(link);
    if (u.hostname === 'blog.geotapp.com') return `/blog${u.pathname}`;
    if (u.hostname === 'geotapp.com') return u.pathname;
  } catch { /* link malformato: si ripiega sullo slug */ }
  return `/blog/${slug}/`;
}

// ─── Categorie ───────────────────────────────────────────────────────────────

const categorySlugCache = new Map<number, string | null>();
const categoryIdCache = new Map<string, number | null>();

async function getCategorySlug(id: number): Promise<string | null> {
  const cached = categorySlugCache.get(id);
  if (cached !== undefined) return cached;
  const data = await wpJson<{ slug?: string }>(`/wp-json/wp/v2/categories/${id}/?_fields=id,slug`);
  const slug = data?.slug ?? null;
  categorySlugCache.set(id, slug);
  return slug;
}

export async function getCategoryIdBySlug(slug: string): Promise<number | null> {
  const cached = categoryIdCache.get(slug);
  if (cached !== undefined) return cached;
  const data = await wpJson<Array<{ id: number }>>(
    `/wp-json/wp/v2/categories/?slug=${encodeURIComponent(slug)}&per_page=1&_fields=id`,
  );
  const id = data?.[0]?.id ?? null;
  categoryIdCache.set(slug, id);
  return id;
}

/**
 * Data una categoria italiana, la sua gemella nella lingua richiesta.
 * Le categorie sono suffisse per lingua: "gestione-presenze" (IT) → "gestione-presenze-de".
 * Senza questo passaggio una pagina tedesca cercherebbe la categoria italiana e,
 * incrociata col filtro di lingua, non troverebbe mai niente.
 */
export async function localizeCategoryId(baseCategoryId: number, locale: string): Promise<number | null> {
  const lang = toBlogLocale(locale);
  if (lang === 'it') return baseCategoryId;
  const slug = await getCategorySlug(baseCategoryId);
  if (!slug) return null;
  const base = slug.replace(/-[a-z]{2}$/, '');
  return getCategoryIdBySlug(`${base}-${lang}`);
}

/** Post di quelle categorie, nella lingua richiesta, dal piu' recente. */
export function filterPosts(
  posts: WpIndexPost[],
  categoryIds: number[],
  locale: string,
  limit?: number,
): WpIndexPost[] {
  const lang = toBlogLocale(locale);
  const wanted = new Set(categoryIds);
  const out = posts.filter(
    (p) =>
      detectPostLocale(p) === lang &&
      (wanted.size === 0 || (p.categories ?? []).some((id) => wanted.has(id))),
  );
  return typeof limit === 'number' ? out.slice(0, limit) : out;
}

/**
 * Scorciatoia per i consumatori: categoria italiana + lingua della pagina → articoli.
 * Restituisce [] se in quella lingua la categoria non esiste o non ha post.
 */
export async function getPostsInCategory(
  baseCategoryId: number,
  locale: string,
  limit?: number,
): Promise<WpIndexPost[]> {
  const [categoryId, posts] = await Promise.all([
    localizeCategoryId(baseCategoryId, locale),
    getPostIndex(),
  ]);
  if (categoryId === null) return [];
  return filterPosts(posts, [categoryId], locale, limit);
}
