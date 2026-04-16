import Link from 'next/link';
import type { AppLocale } from '@/lib/i18n/config';

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

async function fetchBlogPosts(locale: AppLocale, categoryId: number, limit = 3): Promise<BlogPost[]> {
  try {
    const res = await fetch(
      // per_page=20 intentionally larger than limit=3 — locale filtering happens after fetch
      // (WP REST API does not support per-language filtering via query param)
      `${WP}/wp-json/wp/v2/posts?categories=${categoryId}&per_page=20&_fields=id,slug,title,excerpt,date,link&status=publish`,
      {
        headers: HEADERS,
        next: { revalidate: 3600 },
        // AbortSignal.timeout is available in CF Workers (compatibility date >= 2022-01-31)
        signal: AbortSignal.timeout(5000),
      },
    );
    if (!res.ok) return [];
    const raw = await res.json() as Array<{ id: number; slug: string; title: { rendered: string }; excerpt: { rendered: string }; date: string; link: string }>;
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

const SECTION_LABELS: Record<AppLocale, string> = {
  it: 'Dal blog', en: 'From the blog', de: 'Aus dem Blog', nl: 'Van de blog',
};

const READ_MORE_LABELS: Record<AppLocale, string> = {
  it: 'Leggi →', en: 'Read →', de: 'Lesen →', nl: 'Lezen →',
};

interface Props {
  locale: AppLocale;
  categoryId: number;
  className?: string;
}

export default async function BlogHighlights({ locale, categoryId, className = '' }: Props) {
  const posts = await fetchBlogPosts(locale, categoryId);
  if (posts.length === 0) return null;

  const label = SECTION_LABELS[locale] ?? SECTION_LABELS['en'];
  const readMore = READ_MORE_LABELS[locale] ?? READ_MORE_LABELS['en'];

  return (
    <section className={`py-20 border-t border-slate-100 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-2">{label}</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Risorse utili per il tuo settore</h2>
          </div>
          <Link
            href={`/${locale}/blog/`}
            className="hidden md:flex items-center gap-2 text-slate-500 hover:text-slate-900 font-semibold text-sm transition-colors"
          >
            {readMore} tutti
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={post.url}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <p className="text-sm text-slate-400 mb-3 font-medium">
                {new Date(post.date).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 mb-3 leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-slate-500 line-clamp-3 mb-5 leading-relaxed flex-grow">{post.excerpt}</p>
              <span className="text-sm font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                {readMore}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
