import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cookies, headers } from 'next/headers';
import Link from 'next/link';
import { Linkedin, BadgeCheck, ExternalLink } from 'lucide-react';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE, type AppLocale } from '@/lib/i18n/config';
import { sanitizeWpHtml } from '@/lib/sanitize-wp';

export const dynamic = 'force-dynamic';

// Fetch directly from the WordPress origin (blog.geotapp.com) instead of
// going through the geotapp.com/blog/ proxy. Otherwise the Cloudflare Worker
// would recursively call itself when rendering this server component,
// hitting subrequest limits and timing out the request.
const WP_BASE = 'https://blog.geotapp.com/wp-json/wp/v2';
const WP_HEADERS = {
  'x-geotapp-proxy': '1',
  // Bypass the blog.geotapp.com → geotapp.com/blog/ 301 redirect at the
  // Apache .htaccess layer: the proxy header tells Apache this is the
  // canonical fetch, not a user browser that should be redirected.
};

interface WPUser {
  id: number;
  name: string;
  slug: string;
  description: string;
  url: string;
  avatar_urls: Record<string, string>;
}

interface WPPostLite {
  id: number;
  date: string;
  link: string;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text?: string }>;
  };
}

async function fetchUser(slug: string): Promise<WPUser | null> {
  const res = await fetch(
    `${WP_BASE}/users/?slug=${encodeURIComponent(slug)}&per_page=1`,
    { headers: WP_HEADERS, cache: 'no-store', signal: AbortSignal.timeout(10000) },
  );
  if (!res.ok) return null;
  const arr = (await res.json()) as WPUser[];
  return arr?.[0] ?? null;
}

async function fetchPosts(authorId: number): Promise<WPPostLite[]> {
  // Fetch a wide page (the WP REST API doesn't filter by Polylang language
  // out of the box on this install). Locale filtering happens below by
  // parsing the permalink: Polylang prefixes non-default locales as
  // /blog/{lang}/YYYY/..., the default locale (it) has no prefix.
  const res = await fetch(
    `${WP_BASE}/posts/?author=${authorId}&per_page=100&_embed=wp:featuredmedia&orderby=date&order=desc`,
    { headers: WP_HEADERS, cache: 'no-store', signal: AbortSignal.timeout(15000) },
  );
  if (!res.ok) return [];
  return (await res.json()) as WPPostLite[];
}

/** Map an AppLocale to the Polylang language slug used in permalinks. */
function languageCodeFor(locale: AppLocale): string {
  // Regional EN variants share the 'en' set of articles.
  if (locale === 'en' || locale.startsWith('en-')) return 'en';
  return locale; // it, de, fr, es, pt, nl, da, sv, nb, ru - Polylang slugs match
}

/** Read the language slug embedded in a WordPress permalink. */
function postLanguageFromLink(link: string): string {
  try {
    const u = new URL(link);
    // Patterns: /blog/{slug}/, /blog/YYYY/.../, /blog/{lang}/{slug}/, /blog/{lang}/YYYY/...
    const segments = u.pathname.split('/').filter(Boolean);
    // segments[0] is "blog"
    const second = segments[1];
    if (!second) return 'it';
    if (/^\d{4}$/.test(second)) return 'it'; // year segment → default IT
    if (/^[a-z]{2}$/.test(second)) return second;
    // Slug-only URL (no date archive) → also IT
    return 'it';
  } catch {
    return 'it';
  }
}

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
  const user = await fetchUser(slug);
  if (!user) return {};
  return {
    title: `${user.name} - GeoTapp`,
    description: stripHtml(user.description).slice(0, 160),
    alternates: { canonical: `https://geotapp.com/blog/author/${user.slug}/` },
  };
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [user, headerStore, cookieStore] = await Promise.all([
    fetchUser(slug),
    headers(),
    cookies(),
  ]);
  if (!user) notFound();

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

  const allPosts = await fetchPosts(user.id);
  const wantedLang = languageCodeFor(locale);
  const posts = allPosts.filter(
    (p) => postLanguageFromLink(p.link) === wantedLang,
  );
  const avatar = user.avatar_urls['96'] || user.avatar_urls['48'] || '';

  const featuredUrl = user.url && user.url.includes('featured.com') ? user.url : 'https://featured.com/p/michele-petraroli';
  const linkedinUrl = 'https://www.linkedin.com/in/michele-petraroli-532545397/';

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `https://geotapp.com/blog/author/${user.slug}/#person`,
    name: user.name,
    alternateName: 'Michele Petraroli',
    jobTitle: t.job_title,
    description: stripHtml(t.bio || user.description),
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
                  rel="me noopener"
                  className="btn-modern"
                >
                  <BadgeCheck size={16} />
                  {t.view_profile}
                  <ExternalLink size={14} className="opacity-70" />
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="me noopener"
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
                const cover =
                  p._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? '';
                // Use WP's canonical permalink, already includes the
                // language prefix where applicable. Strip the origin so
                // the link stays internal to the Next.js app.
                let href = `/blog/${p.slug}/`;
                try {
                  const u = new URL(p.link);
                  href = u.pathname;
                } catch {
                  /* fall back to slug */
                }
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
