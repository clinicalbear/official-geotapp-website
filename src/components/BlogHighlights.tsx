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
