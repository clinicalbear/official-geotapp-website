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
// PERCHE' SI LEGGE A RUNTIME E NON IN BUILD
// Dal runner GitHub il blog risponde 403 (Cloudflare, 282 casi nel deploy del 02/09/2026):
// in CI i dati non arrivano, e una pagina prerenderizzata li' nascerebbe vuota. Con
// `cache: 'no-store'` Next non prerenderizza queste pagine e le rende nel Worker, dove la
// fetch funziona: e' lo stesso motivo per cui l'hub blog fa cosi'. La cache in memoria
// (un'ora) evita di ripaginare a ogni richiesta.
//
// CONTRATTO WORKER (vedi AGENTS.md): trailing slash sull'endpoint, header di proxy,
// `cache: 'no-store'` PIU' AbortSignal (con next.revalidate il data cache del Worker
// deduplica la fetch e il signal non si propaga).
//
// L'indice porta solo i campi che servono a filtrare: titoli ed estratti dei 1197 post
// sarebbero megabyte da scaricare e parsare a ogni render. I contenuti si prendono dopo,
// per i soli id scelti, con `include=`.

import { detectPostLocale, toBlogLocale } from '@/lib/blog-locale';

const WP = 'https://blog.geotapp.com';
const WP_HEADERS = {
  host: 'blog.geotapp.com',
  'x-geotapp-proxy': '1',
  'x-forwarded-proto': 'https',
};

const INDEX_FIELDS = 'id,slug,date,link,categories,class_list,gtmsa_lang,author,yoast_head_json.author';
const POST_FIELDS = 'id,slug,title,excerpt,date,link,featured_media,categories,class_list,gtmsa_lang,author,yoast_head_json.author';
const PER_PAGE = 100;
const MAX_PAGES = 25;
const CACHE_TTL_MS = 60 * 60 * 1000;

/** Riga dell'indice: il minimo per decidere lingua e categoria. */
export interface WpIndexEntry {
  id: number;
  slug: string;
  date: string;
  link: string;
  categories?: number[];
  class_list?: string[];
  gtmsa_lang?: string;
  /** Id dell'autore. Il nome arriva da Yoast: l'endpoint /users/ del blog e' 404. */
  author?: number;
  yoast_head_json?: { author?: string };
}

/** Post con i campi da mostrare. */
export interface WpIndexPost extends WpIndexEntry {
  title: { rendered: string };
  excerpt: { rendered: string };
  featured_media?: number;
}

function requestInit(timeoutMs: number): RequestInit {
  return { headers: WP_HEADERS, cache: 'no-store', signal: AbortSignal.timeout(timeoutMs) };
}

async function wpJson<T>(path: string, timeoutMs = 8000): Promise<T | null> {
  try {
    const res = await fetch(`${WP}${path}`, requestInit(timeoutMs));
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
  timeoutMs = 8000,
): Promise<{ data: T; headers: Headers } | null> {
  try {
    const res = await fetch(`${WP}${path}`, requestInit(timeoutMs));
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
const indexCache = new Map<number, { at: number; posts: WpIndexEntry[] }>();

/** Svuota le cache in memoria. Serve ai test. */
export function resetWpPostIndexCache(): void {
  indexCache.clear();
  categorySlugCache.clear();
  categoryIdCache.clear();
}

export interface PostIndexOptions {
  /** Quante pagine da 100 post scaricare. Default: tutto l'archivio. */
  maxPages?: number;
  /** Porta anche titolo, estratto e immagine. Costa molto di piu': solo per pochi post. */
  withContent?: boolean;
}

/**
 * Post pubblicati, dal piu' recente. Per default l'archivio intero, con i soli campi che
 * servono a filtrare: le pagine risorse devono trovare anche i pezzi vecchi di una
 * categoria. Chi mostra solo i piu' recenti passa `maxPages` basso.
 */
export function getPostIndex(
  options: PostIndexOptions & { withContent: true },
): Promise<WpIndexPost[]>;
export function getPostIndex(
  options?: PostIndexOptions & { withContent?: false },
): Promise<WpIndexEntry[]>;
export async function getPostIndex(options: PostIndexOptions = {}): Promise<WpIndexEntry[]> {
  const { maxPages = MAX_PAGES, withContent = false } = options;
  const cap = Math.max(1, Math.min(maxPages, MAX_PAGES));
  const fields = withContent ? POST_FIELDS : INDEX_FIELDS;
  const cacheKey = withContent ? -cap : cap;
  const cached = indexCache.get(cacheKey);
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) return cached.posts;

  const first = await wpJsonWithHeaders<WpIndexEntry[]>(
    `/wp-json/wp/v2/posts/?per_page=${PER_PAGE}&page=1&status=publish&orderby=date&order=desc&_fields=${fields}`,
  );
  // Su fallimento si tiene quello che c'era: meglio un indice vecchio di un'ora che una
  // sezione vuota, che e' esattamente il modo in cui questo bug e' passato inosservato.
  if (!first || !Array.isArray(first.data)) return cached?.posts ?? [];

  const totalPages = Math.min(
    parseInt(first.headers.get('x-wp-totalpages') ?? '1', 10) || 1,
    cap,
  );

  const posts: WpIndexEntry[] = [...first.data];
  if (totalPages > 1) {
    const rest = await Promise.all(
      Array.from({ length: totalPages - 1 }, (_, i) =>
        wpJson<WpIndexEntry[]>(
          `/wp-json/wp/v2/posts/?per_page=${PER_PAGE}&page=${i + 2}&status=publish&orderby=date&order=desc&_fields=${fields}`,
        ),
      ),
    );
    for (const page of rest) if (Array.isArray(page)) posts.push(...page);
  }

  const seen = new Set<number>();
  const unique = posts.filter((p) => (seen.has(p.id) ? false : (seen.add(p.id), true)));

  indexCache.set(cacheKey, { at: Date.now(), posts: unique });
  return unique;
}

// ─── Autori ──────────────────────────────────────────────────────────────────
//
// L'endpoint /wp-json/wp/v2/users/ risponde 404 (hardening del blog) e `?author=<id>`
// filtra a vuoto come tutte le query per tassonomia. L'autore si ricava quindi dai post:
// ogni post porta l'id (`author`) e il nome per esteso (`yoast_head_json.author`).

export interface BlogAuthor {
  id: number;
  slug: string;
  name: string;
  postCount: number;
}

/** Slug di un nome: "Michele Angelo Petraroli" → "michele-angelo-petraroli". */
export function authorSlug(name: string): string {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Gli autori che hanno almeno un post, dal piu' prolifico. */
export async function getAuthors(): Promise<BlogAuthor[]> {
  const index = await getPostIndex();
  const perId = new Map<number, { name: string; count: number }>();

  for (const p of index) {
    if (typeof p.author !== 'number') continue;
    const name = p.yoast_head_json?.author?.trim();
    const found = perId.get(p.author);
    if (found) {
      found.count += 1;
      if (!found.name && name) found.name = name;
    } else {
      perId.set(p.author, { name: name ?? '', count: 1 });
    }
  }

  return [...perId.entries()]
    .filter(([, v]) => v.name.length > 0)
    .map(([id, v]) => ({ id, slug: authorSlug(v.name), name: v.name, postCount: v.count }))
    .sort((a, b) => b.postCount - a.postCount);
}

/**
 * Autore per slug. Accetta anche le forme abbreviate con cui le vecchie URL WordPress
 * lo nominano ("michele", "michele-petraroli" per "michele-angelo-petraroli"): le parole
 * chieste devono comparire, in ordine, in quelle del nome.
 */
export async function findAuthorBySlug(slug: string): Promise<BlogAuthor | null> {
  const wanted = authorSlug(slug).split('-').filter(Boolean);
  if (wanted.length === 0) return null;

  const authors = await getAuthors();
  const exact = authors.find((a) => a.slug === wanted.join('-'));
  if (exact) return exact;

  return (
    authors.find((a) => {
      const parts = a.slug.split('-');
      let i = 0;
      for (const part of parts) if (i < wanted.length && part === wanted[i]) i += 1;
      return i === wanted.length;
    }) ?? null
  );
}

/** Post di un autore, nella lingua richiesta, gia' completi di titolo ed estratto. */
export async function getPostsByAuthor(
  authorId: number,
  locale: string,
  limit?: number,
): Promise<WpIndexPost[]> {
  const index = await getPostIndex();
  const lang = toBlogLocale(locale);
  const scelti = index
    .filter((p) => p.author === authorId && detectPostLocale(p) === lang)
    .slice(0, limit ?? undefined);
  return hydratePosts(scelti.map((p) => p.id));
}

/**
 * URL delle immagini in evidenza. Sta a parte perche' `_fields` e `_embed` insieme non
 * restituiscono `_embedded`: chi vuole le immagini chiede gli id qui, e solo per i post
 * che mostra davvero.
 */
export async function getMediaUrls(ids: number[]): Promise<Map<number, string>> {
  const map = new Map<number, string>();
  const wanted = [...new Set(ids.filter((id) => id > 0))];
  if (wanted.length === 0) return map;

  const data = await wpJson<Array<{
    id: number;
    source_url?: string;
    media_details?: { sizes?: Record<string, { source_url?: string }> };
  }>>(
    `/wp-json/wp/v2/media/?include=${wanted.join(',')}&per_page=${wanted.length}&_fields=id,source_url,media_details`,
  );
  if (!data) return map;

  for (const m of data) {
    const sizes = m.media_details?.sizes ?? {};
    const url =
      sizes.medium_large?.source_url ??
      sizes.large?.source_url ??
      sizes.medium?.source_url ??
      m.source_url;
    if (url) map.set(m.id, url);
  }
  return map;
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
export function filterPosts<T extends WpIndexEntry>(
  posts: T[],
  categoryIds: number[],
  locale: string,
  limit?: number,
): T[] {
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
  const [categoryId, index] = await Promise.all([
    localizeCategoryId(baseCategoryId, locale),
    getPostIndex(),
  ]);
  if (categoryId === null) return [];
  const scelti = filterPosts(index, [categoryId], locale, limit);
  return hydratePosts(scelti.map((p) => p.id));
}

/** Scarica titolo, estratto e immagine dei soli post scelti, nell'ordine dato. */
export async function hydratePosts(ids: number[]): Promise<WpIndexPost[]> {
  if (ids.length === 0) return [];
  const data = await wpJson<WpIndexPost[]>(
    `/wp-json/wp/v2/posts/?include=${ids.join(',')}&per_page=${ids.length}&_fields=${POST_FIELDS}`,
  );
  if (!data) return [];
  const byId = new Map(data.map((p) => [p.id, p]));
  return ids.map((id) => byId.get(id)).filter((p): p is WpIndexPost => Boolean(p));
}
