import type { Metadata } from 'next';
import LinksClient, { type Article, type Sector } from '../../links/LinksClient';
import { detectPostLocale } from '@/lib/blog-locale';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

// Render on demand (stesso pattern dell'hub blog): con ISR la pagina veniva
// pre-renderizzata in build, dove le fetch WP falliscono → cache vuota per 1h
// a ogni deploy. Il caching vive nelle fetch (next.revalidate in wpJson).
export const dynamic = 'force-dynamic';

// ─── Types ────────────────────────────────────────────────────────────────────
type WpPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  link: string;
  featured_media: number;
  categories?: number[];
  class_list?: string[];
};

type WpMedia = {
  id: number;
  source_url: string;
  media_details?: {
    sizes?: {
      medium_large?: { source_url: string };
      large?: { source_url: string };
      medium?: { source_url: string };
    };
  };
};

// ─── Sector → WP category slug (per language) ────────────────────────────────
// Where Polylang categories exist we use them; otherwise we fall back to
// keyword matching inside the latest-posts pool.
const SECTOR_CATEGORY_SLUGS: Record<Sector, Partial<Record<string, string>>> = {
  pulizie: {
    it: 'imprese-di-pulizie',
    en: 'cleaning-companies-en',
    de: 'reinigungsunternehmen-de',
  },
  installatori: {
    it: 'field-service',
    en: 'field-service-en',
    de: 'field-service-de',
    fr: 'field-service-fr',
  },
  sicurezza: {
    it: 'sicurezza-privata',
    en: 'private-security-en',
    de: 'sicherheitsdienste-de',
  },
};

// ─── Sector → fallback keywords (lowercase, matched against title+slug) ──────
const SECTOR_KEYWORDS: Record<Sector, Record<string, string[]>> = {
  pulizie: {
    it: ['puliz'], en: ['cleaning'], de: ['reinigung'], fr: ['nettoy'],
    es: ['limpiez'], pt: ['limpez'], nl: ['schoonmaak', 'reiniging'],
    da: ['rengør', 'rengoring'], sv: ['städ', 'rengöring'],
    nb: ['rengjør', 'renhold'], ru: ['уборк', 'клининг'],
  },
  installatori: {
    it: ['installator', 'tecnic', 'manuten', 'field service'],
    en: ['installer', 'technician', 'field service', 'maintenance'],
    de: ['installateur', 'techniker', 'wartung', 'field service'],
    fr: ['installateur', 'technicien', 'maintenance', 'field service'],
    es: ['instalador', 'técnico', 'mantenimiento'],
    pt: ['instalador', 'técnico', 'manutenção'],
    nl: ['installateur', 'monteur', 'onderhoud'],
    da: ['installatør', 'tekniker', 'vedligehold'],
    sv: ['installatör', 'tekniker', 'underhåll'],
    nb: ['installatør', 'tekniker', 'vedlikehold'],
    ru: ['монтажник', 'техник'],
  },
  sicurezza: {
    it: ['sicurezz', 'vigilanz'],
    en: ['security', 'guard', 'patrol'],
    de: ['sicherheit', 'wachdienst', 'patrouill'],
    fr: ['sécurité', 'gardiennage'],
    es: ['seguridad', 'vigilancia'],
    pt: ['segurança', 'vigilância'],
    nl: ['beveiliging', 'bewaking'],
    da: ['sikkerhed', 'vagt'],
    sv: ['säkerhet', 'bevakning'],
    nb: ['sikkerhet', 'vakt'],
    ru: ['безопасн', 'охран'],
  },
};

const SECTORS: Sector[] = ['pulizie', 'installatori', 'sicurezza'];

// ─── Helpers ──────────────────────────────────────────────────────────────────
const WP_HEADERS = {
  host: 'blog.geotapp.com',
  'x-geotapp-proxy': '1',
  'x-forwarded-proto': 'https',
};

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ').trim();
}

function truncate(text: string, max = 110): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  return clean.length > max ? clean.slice(0, max).trimEnd() + '…' : clean;
}

// cache: 'no-store' come l'hub blog: con next.revalidate il data-cache del
// Worker deduplica il fetch e il signal non si propaga → fetch sempre fallita
// a runtime (pagina vuota). Il caching vive in ARTICLE_CACHE qui sotto.
async function wpJson<T>(url: string, timeoutMs = 6000): Promise<T | null> {
  try {
    const res = await fetch(url, {
      headers: WP_HEADERS,
      cache: 'no-store',
      signal: AbortSignal.timeout(timeoutMs),
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

// ─── Data fetching ────────────────────────────────────────────────────────────
async function resolveCategoryIds(slugs: string[]): Promise<Record<string, number>> {
  if (slugs.length === 0) return {};
  const data = await wpJson<Array<{ id: number; slug: string }>>(
    `https://blog.geotapp.com/wp-json/wp/v2/categories?slug=${slugs.join(',')}&_fields=id,slug&per_page=20`,
  );
  if (!data) return {};
  return Object.fromEntries(data.map(c => [c.slug, c.id]));
}

async function fetchPostsInCategories(ids: number[]): Promise<WpPost[]> {
  if (ids.length === 0) return [];
  const data = await wpJson<WpPost[]>(
    `https://blog.geotapp.com/wp-json/wp/v2/posts?categories=${ids.join(',')}` +
      `&per_page=20&status=publish&orderby=date&order=desc` +
      `&_fields=id,slug,title,excerpt,date,link,featured_media,categories,class_list`,
  );
  return data ?? [];
}

// 50 post: il blog pubblica in 11 lingue, con 20 ne restavano solo 2-3 per locale.
async function fetchLatestPosts(): Promise<WpPost[]> {
  const data = await wpJson<WpPost[]>(
    'https://blog.geotapp.com/wp-json/wp/v2/posts?per_page=50&status=publish' +
      '&_fields=id,slug,title,excerpt,date,link,featured_media,categories,class_list',
  );
  return data ?? [];
}

async function fetchMediaMap(ids: number[]): Promise<Record<number, string>> {
  if (ids.length === 0) return {};
  const data = await wpJson<WpMedia[]>(
    `https://blog.geotapp.com/wp-json/wp/v2/media?include=${ids.join(',')}` +
      `&_fields=id,media_details,source_url&per_page=20`,
  );
  if (!data) return {};
  const map: Record<number, string> = {};
  for (const m of data) {
    const s = m.media_details?.sizes;
    const url = s?.medium_large?.source_url ?? s?.large?.source_url ?? s?.medium?.source_url ?? m.source_url;
    if (url) map[m.id] = url;
  }
  return map;
}

function matchesKeywords(post: WpPost, keywords: string[]): boolean {
  const haystack = (post.title.rendered + ' ' + post.slug).toLowerCase();
  return keywords.some(k => haystack.includes(k.toLowerCase()));
}

function pickPinnedBySector(
  sector: Sector,
  locale: string,
  categoryPosts: WpPost[],
  categoryIdsBySector: Partial<Record<Sector, number>>,
  latestPool: WpPost[],
  alreadyPickedIds: Set<number>,
): WpPost | null {
  // 1. Category-based match (when a Polylang category exists for this lang)
  const catId = categoryIdsBySector[sector];
  if (catId !== undefined) {
    const candidate = categoryPosts.find(p =>
      p.categories?.includes(catId) &&
      detectPostLocale(p) === locale &&
      !alreadyPickedIds.has(p.id),
    );
    if (candidate) return candidate;
  }
  // 2. Keyword fallback inside the latest pool
  const keywords = SECTOR_KEYWORDS[sector]?.[locale];
  if (keywords?.length) {
    const candidate = latestPool.find(p =>
      detectPostLocale(p) === locale &&
      !alreadyPickedIds.has(p.id) &&
      matchesKeywords(p, keywords),
    );
    if (candidate) return candidate;
  }
  return null;
}

// Cache per locale nello stesso isolate Worker: TTL fresco + stale-on-error,
// stesso schema del POST_CACHE dell'hub blog.
const ARTICLE_CACHE = new Map<string, { articles: Article[]; ts: number }>();
const ARTICLE_CACHE_TTL_MS = 60 * 60 * 1000;

async function getArticles(locale: string): Promise<Article[]> {
  const cached = ARTICLE_CACHE.get(locale);
  if (cached && Date.now() - cached.ts < ARTICLE_CACHE_TTL_MS) return cached.articles;
  try {
    // ── Resolve sector → category ID for this locale ────────────────────────
    const slugsForLocale = SECTORS
      .map(s => SECTOR_CATEGORY_SLUGS[s][locale])
      .filter((s): s is string => Boolean(s));

    const [slugToId, latestPool] = await Promise.all([
      resolveCategoryIds(slugsForLocale),
      fetchLatestPosts(),
    ]);

    const categoryIdsBySector: Partial<Record<Sector, number>> = {};
    for (const sector of SECTORS) {
      const slug = SECTOR_CATEGORY_SLUGS[sector][locale];
      if (slug && slugToId[slug] !== undefined) {
        categoryIdsBySector[sector] = slugToId[slug];
      }
    }

    const allCategoryIds = Object.values(categoryIdsBySector).filter(
      (n): n is number => typeof n === 'number',
    );
    const categoryPosts = await fetchPostsInCategories(allCategoryIds);

    // ── Pick 1 pinned post per sector ───────────────────────────────────────
    const picked = new Set<number>();
    const pinned: Array<{ post: WpPost; sector: Sector }> = [];
    for (const sector of SECTORS) {
      const post = pickPinnedBySector(
        sector, locale, categoryPosts, categoryIdsBySector, latestPool, picked,
      );
      if (post) {
        picked.add(post.id);
        pinned.push({ post, sector });
      }
    }

    // ── Fill remaining slots with the latest unpicked posts in this lang ────
    const targetTotal = 4;
    const fillers: Array<{ post: WpPost; sector: null }> = [];
    for (const p of latestPool) {
      if (pinned.length + fillers.length >= targetTotal) break;
      if (picked.has(p.id)) continue;
      // La lingua si rileva da class_list (detectPostLocale), NON dal prefisso del
      // permalink: diversi post NL/DE sono pubblicati senza prefisso lingua nell'URL.
      if (detectPostLocale(p) !== locale) continue;
      picked.add(p.id);
      fillers.push({ post: p, sector: null });
    }

    const combined = [...pinned, ...fillers].slice(0, targetTotal);
    if (combined.length === 0) return cached?.articles ?? [];

    // ── Media (featured images) in one batch ────────────────────────────────
    const mediaIds = combined.map(c => c.post.featured_media).filter(Boolean);
    const mediaMap = await fetchMediaMap(mediaIds);

    const articles = combined.map(({ post, sector }) => ({
      id: post.id,
      slug: post.slug,
      title: stripHtml(post.title.rendered),
      excerpt: truncate(stripHtml(post.excerpt.rendered)),
      date: post.date,
      url: post.link,
      image: mediaMap[post.featured_media] ?? null,
      sector,
    }));
    ARTICLE_CACHE.set(locale, { articles, ts: Date.now() });
    return articles;
  } catch {
    // Errore WP: meglio servire la lista stale che una pagina vuota.
    return cached?.articles ?? [];
  }
}

// ─── Localized texts ──────────────────────────────────────────────────────────
const META_TEXTS: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp — Link ufficiali', description: 'Prove GPS, foto e report verificabili. Prova il trial gratuito senza carta di credito.' },
  en: { title: 'GeoTapp — Official Links', description: 'GPS proof, photos and verifiable reports. Try the free trial — no credit card required.' },
  de: { title: 'GeoTapp — Offizielle Links', description: 'GPS-Nachweis, Fotos und überprüfbare Berichte. Kostenlose Testversion — keine Kreditkarte erforderlich.' },
  fr: { title: 'GeoTapp — Liens officiels', description: 'Preuves GPS, photos et rapports vérifiables. Essai gratuit — sans carte de crédit.' },
  es: { title: 'GeoTapp — Enlaces oficiales', description: 'Pruebas GPS, fotos e informes verificables. Prueba gratuita — sin tarjeta de crédito.' },
  pt: { title: 'GeoTapp — Links oficiais', description: 'Prova GPS, fotos e relatórios verificáveis. Teste grátis — sem cartão de crédito.' },
  nl: { title: 'GeoTapp — Officiële links', description: 'GPS-bewijs, foto\'s en verifieerbare rapporten. Gratis proefversie — geen creditcard nodig.' },
  da: { title: 'GeoTapp — Officielle links', description: 'GPS-bevis, fotos og verificerbare rapporter. Gratis prøveversion — intet kreditkort.' },
  sv: { title: 'GeoTapp — Officiella länkar', description: 'GPS-bevis, foton och verifierbara rapporter. Gratis testperiod — inget kreditkort.' },
  nb: { title: 'GeoTapp — Offisielle lenker', description: 'GPS-bevis, bilder og verifiserbare rapporter. Gratis prøveperiode — uten kredittkort.' },
  ru: { title: 'GeoTapp — Официальные ссылки', description: 'GPS-доказательства, фото и проверяемые отчёты. Бесплатный пробный период — без карты.' },
};

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = META_TEXTS[locale] ?? META_TEXTS['en'];
  return {
    title: m.title,
    description: m.description,
    openGraph: { title: m.title, description: m.description, url: `https://geotapp.com/${locale}/links`, type: 'website' },
    robots: { index: false, follow: false },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function LocaleLinksPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const articles = await getArticles(locale);
  return <LinksClient articles={articles} locale={locale} />;
}
