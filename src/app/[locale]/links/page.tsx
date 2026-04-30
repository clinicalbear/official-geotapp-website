import type { Metadata } from 'next';
import LinksClient, { type Article } from '../../links/LinksClient';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

// ─── ISR ──────────────────────────────────────────────────────────────────────
export const revalidate = 3600;

// ─── Types ────────────────────────────────────────────────────────────────────
type WpPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  link: string;
  featured_media: number;
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

// ─── Polylang language slug in URL ────────────────────────────────────────────
const LANG_PATH_MAP: Record<string, string> = {
  en: '/en/', de: '/de/', fr: '/fr/', es: '/es/',
  pt: '/pt/', nl: '/nl/', da: '/da/', sv: '/sv/', nb: '/nb/', ru: '/ru/',
};

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

function isLangPost(link: string, locale: string): boolean {
  try {
    const { pathname } = new URL(link);
    if (locale === 'it') {
      return !/(\/en\/|\/de\/|\/fr\/|\/es\/|\/pt\/|\/nl\/|\/ru\/|\/da\/|\/sv\/|\/nb\/)/.test(pathname);
    }
    const prefix = LANG_PATH_MAP[locale];
    return prefix ? pathname.includes(prefix) : false;
  } catch { return false; }
}

function truncate(text: string, max = 110): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  return clean.length > max ? clean.slice(0, max).trimEnd() + '…' : clean;
}

// ─── Data fetching ────────────────────────────────────────────────────────────
async function getArticles(locale: string): Promise<Article[]> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 6000);
    const res = await fetch(
      'https://blog.geotapp.com/wp-json/wp/v2/posts?per_page=20&status=publish&_fields=id,slug,title,excerpt,date,link,featured_media',
      { headers: WP_HEADERS, signal: controller.signal, next: { revalidate: 3600 } },
    );
    clearTimeout(timer);
    if (!res.ok) return [];
    const raw: WpPost[] = await res.json();
    const posts = raw.filter(p => isLangPost(p.link, locale)).slice(0, 4);
    if (posts.length === 0) return [];

    const mediaIds = posts.map(p => p.featured_media).filter(Boolean);
    const mediaMap: Record<number, string> = {};
    if (mediaIds.length > 0) {
      try {
        const mRes = await fetch(
          `https://blog.geotapp.com/wp-json/wp/v2/media?include=${mediaIds.join(',')}&_fields=id,media_details,source_url`,
          { headers: WP_HEADERS, next: { revalidate: 3600 } },
        );
        if (mRes.ok) {
          const items: WpMedia[] = await mRes.json();
          for (const m of items) {
            const s = m.media_details?.sizes;
            const url = s?.medium_large?.source_url ?? s?.large?.source_url ?? s?.medium?.source_url ?? m.source_url;
            if (url) mediaMap[m.id] = url;
          }
        }
      } catch {}
    }
    return posts.map(p => ({
      id: p.id, slug: p.slug,
      title: stripHtml(p.title.rendered),
      excerpt: truncate(stripHtml(p.excerpt.rendered)),
      date: p.date,
      url: p.link,
      image: mediaMap[p.featured_media] ?? null,
    }));
  } catch { return []; }
}

// ─── Localized texts ──────────────────────────────────────────────────────────
const META_TEXTS: Record<string, { title: string; description: string }> = {
  en: { title: 'GeoTapp — Official Links', description: 'Verify field work with GPS proof, photos and verifiable reports. Demo, blog and GeoTapp resources.' },
  de: { title: 'GeoTapp — Offizielle Links', description: 'Feldarbeit verifizieren mit GPS-Nachweis, Fotos und überprüfbaren Berichten. Demo, Blog und GeoTapp-Ressourcen.' },
  fr: { title: 'GeoTapp — Liens officiels', description: 'Vérifiez le travail terrain avec preuves GPS, photos et rapports vérifiables. Démo, blog et ressources GeoTapp.' },
  it: { title: 'GeoTapp — Link ufficiali', description: 'Verifica il lavoro sul campo con prove GPS, foto e report verificabili. Demo, blog e risorse GeoTapp.' },
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
