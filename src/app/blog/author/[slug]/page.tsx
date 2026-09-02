import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cookies, headers } from 'next/headers';
import Link from 'next/link';
import { Linkedin, BadgeCheck, ExternalLink } from 'lucide-react';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE, type AppLocale } from '@/lib/i18n/config';
import { sanitizeWpHtml } from '@/lib/sanitize-wp';
import {
  findAuthorBySlug,
  getPostsByAuthor,
  getMediaUrls,
  blogPostPath,
  type BlogAuthor,
  type WpIndexPost,
} from '@/lib/wp-post-index';

export const dynamic = 'force-dynamic';

// L'endpoint /wp-json/wp/v2/users/ del blog risponde 404 (hardening) e `?author=<id>`
// filtra a vuoto: questa pagina restava quindi sempre in notFound(). Autore e articoli
// arrivano ora dall'indice condiviso, che ricava il nome da Yoast e filtra in codice.
// La foto non e' piu' disponibile da WordPress (niente avatar_urls): si usa il ritratto
// del sito, lo stesso di /chi-siamo.
const AUTHOR_PHOTO = '/michele-petraroli-3.webp';
const ARTICLES_SHOWN = 24;

function detectLocale(headerStore: Headers, cookieValue: string | undefined): AppLocale {
  // 1. Cookie wins
  if (cookieValue && (SUPPORTED_LOCALES as readonly string[]).includes(cookieValue)) {
    return cookieValue as AppLocale;
  }
  // 2. Accept-Language header
  const al = headerStore.get('accept-language') ?? '';
  const candidates = al
    .split(',')
    .map((s) => s.trim().split(';')[0].toLowerCase());
  for (const c of candidates) {
    if ((SUPPORTED_LOCALES as readonly string[]).includes(c)) return c as AppLocale;
    const base = c.split('-')[0];
    if ((SUPPORTED_LOCALES as readonly string[]).includes(base)) return base as AppLocale;
  }
  return DEFAULT_LOCALE;
}

function stripHtml(s: string): string {
  return s
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#8217;/g, '’').replace(/&#8216;/g, '‘')
    .replace(/&nbsp;/g, ' ')
    .trim();
}

function formatDate(iso: string, locale: AppLocale): string {
  try {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric', month: 'long', day: 'numeric',
    }).format(new Date(iso));
  } catch {
    return iso.slice(0, 10);
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = await findAuthorBySlug(slug);
  if (!author) return {};
  return {
    title: `${author.name} - GeoTapp`,
    alternates: { canonical: `https://geotapp.com/blog/author/${author.slug}/` },
  };
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [author, headerStore, cookieStore] = await Promise.all([
    findAuthorBySlug(slug),
    headers(),
    cookies(),
  ]);
  if (!author) notFound();
  const user: BlogAuthor = author;

  const locale = detectLocale(headerStore, cookieStore.get('geotapp_locale')?.value);
  const dict = getDictionary(locale);
  const t = (dict as any).author_page ?? {
    job_title: 'CEO & Founder',
    verified_label: 'Verified expert',
    bio: '',
    articles_heading: 'Articles by',
    view_profile: 'View verified profile',
    follow_linkedin: 'Connect on LinkedIn',
    read_more: 'Read',
    no_articles: 'No articles yet.',
  };

  // La lingua la decide detectPostLocale dentro l'indice, non il prefisso del permalink.
  // Il tetto e' di pagina, non tecnico: l'autore ha centinaia di pezzi per lingua e la
  // griglia non e' paginata.
  const posts: WpIndexPost[] = await getPostsByAuthor(user.id, locale, ARTICLES_SHOWN);
  const covers = await getMediaUrls(posts.map((p) => p.featured_media ?? 0));
  const avatar = AUTHOR_PHOTO;

  const featuredUrl = 'https://featured.com/p/michele-petraroli';
  const linkedinUrl = 'https://www.linkedin.com/in/mikepetraroli/';

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `https://geotapp.com/blog/author/${user.slug}/#person`,
    name: user.name,
    alternateName: ['Michele Petraroli', 'Mike Petraroli'],
    jobTitle: t.job_title,
    description: stripHtml(t.bio),
    image: avatar,
    url: `https://geotapp.com/blog/author/${user.slug}/`,
    sameAs: [featuredUrl, linkedinUrl],
    worksFor: { '@type': 'Organization', name: 'GeoTapp', url: 'https://geotapp.com' },
  };

  return (
    <main className="bg-white min-h-screen text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, '\\u003c'),
        }}
      />

      <section className="px-6 pt-5 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:gap-10">
            {avatar && (
              <img
                src={avatar}
                alt={user.name}
                width={120}
                height={120}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full ring-4 ring-white shadow-lg mb-6 md:mb-0 shrink-0"
              />
            )}
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-wide mb-4">
                <BadgeCheck size={14} />
                {t.verified_label}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2">{user.name}</h1>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
                {t.job_title}
              </p>
              <p
                className="text-base md:text-lg text-slate-700 leading-relaxed mb-8 max-w-2xl"
                dangerouslySetInnerHTML={{ __html: t.bio }}
              />
              <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
                <a
                  href={featuredUrl}
                  target="_blank"
                  rel="me noopener nofollow"
                  className="btn-modern"
                >
                  <BadgeCheck size={16} />
                  {t.view_profile}
                  <ExternalLink size={14} className="opacity-70" />
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="me noopener nofollow"
                  className="btn-modern-ghost"
                >
                  <Linkedin size={16} />
                  {t.follow_linkedin}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">
            {t.articles_heading} {user.name}
          </h2>
          {posts.length === 0 ? (
            <p className="text-slate-500">{t.no_articles}</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((p) => {
                const cover = covers.get(p.featured_media ?? 0) ?? '';
                const href = blogPostPath(p.link, p.slug);
                return (
                  <Link
                    key={p.id}
                    href={href}
                    className="group flex flex-col rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-400 transition-colors bg-white"
                  >
                    {cover && (
                      <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                        <img
                          src={cover}
                          alt=""
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-5 flex-1 flex flex-col">
                      <p className="text-xs text-slate-500 mb-2">
                        {formatDate(p.date, locale)}
                      </p>
                      <h3
                        className="font-bold text-slate-900 text-base leading-snug mb-3 group-hover:text-emerald-700 transition-colors"
                        dangerouslySetInnerHTML={{ __html: sanitizeWpHtml(p.title.rendered) }}
                      />
                      <p
                        className="text-sm text-slate-600 leading-relaxed line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: stripHtml(p.excerpt.rendered) }}
                      />
                      <span className="mt-4 text-xs font-bold text-emerald-700 uppercase tracking-wider">
                        {t.read_more} →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
