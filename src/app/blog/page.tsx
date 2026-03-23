// Overview: page.tsx
// Module: src > app > blog
// Purpose: Blog index — Server Component che fetcha articoli reali da WP REST API
//          e li mostra con link cliccabili e Blog Schema JSON-LD.

import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/seo/JsonLd';
import { getDictionary } from '@/lib/i18n/dictionaries';

const b = getDictionary('it').blog;

export const metadata: Metadata = {
  title: b.meta_title,
  description: b.meta_desc,
  alternates: { canonical: 'https://geotapp.com/it/blog/' },
};

type WpPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  link: string;
};

async function fetchBlogPosts(): Promise<WpPost[]> {
  try {
    const res = await fetch(
      'https://blog.geotapp.com/wp-json/wp/v2/posts/?per_page=12&_fields=id,slug,title,excerpt,date,link&lang=it&status=publish',
      {
        headers: {
          host: 'blog.geotapp.com',
          'x-geotapp-proxy': '1',
          'x-forwarded-proto': 'https',
        },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return [];
    const posts = await res.json();
    return Array.isArray(posts) ? posts : [];
  } catch {
    return [];
  }
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#8216;/g, '\u2018')
    .replace(/&#8217;/g, '\u2019')
    .replace(/&#8220;/g, '\u201C')
    .replace(/&#8221;/g, '\u201D')
    .replace(/&nbsp;/g, ' ')
    .trim();
}

function normalizePostUrl(link: string, slug: string): string {
  try {
    const parsed = new URL(link);
    if (parsed.hostname === 'blog.geotapp.com') {
      return `/blog${parsed.pathname}`;
    }
    if (parsed.hostname === 'geotapp.com') {
      return parsed.pathname;
    }
  } catch { /* fallback */ }
  return `/blog/${slug}/`;
}

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <div className="bg-background min-h-screen pt-40 pb-20 px-6">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'GeoTapp Blog',
        url: 'https://geotapp.com/it/blog/',
        description: b.schema_desc,
        publisher: {
          '@type': 'Organization',
          name: 'GeoTapp',
          url: 'https://geotapp.com',
        },
      }} />

      <section className="container mx-auto max-w-4xl text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
          {b.hero_title}
        </h1>
        <p className="text-xl text-text-secondary font-light">
          {b.hero_desc}
        </p>
      </section>

      <section className="container mx-auto max-w-4xl space-y-12">
        {posts.length === 0 ? (
          <p className="text-text-secondary text-center py-20">{b.no_posts}</p>
        ) : (
          posts.map((post) => {
            const postUrl = normalizePostUrl(post.link, post.slug);
            const excerpt = stripHtml(post.excerpt.rendered).slice(0, 200);
            const date = new Date(post.date).toLocaleDateString('it', {
              day: 'numeric', month: 'long', year: 'numeric',
            });

            return (
              <article key={post.id} className="group">
                <Link href={postUrl}>
                  <div className="flex flex-col md:flex-row gap-8 items-baseline border-b border-white/5 pb-10 hover:border-white/20 transition-colors">
                    <div className="md:w-1/4">
                      <span className="text-text-muted text-sm font-mono">{date}</span>
                    </div>
                    <div className="md:w-3/4">
                      <h2
                        className="text-3xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                      <p className="text-text-secondary text-lg leading-relaxed font-light mb-6">
                        {excerpt}{excerpt.length === 200 ? '…' : ''}
                      </p>
                      <span className="flex items-center gap-2 text-white font-bold">
                        {b.read_article}
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })
        )}
      </section>

      <section className="container mx-auto max-w-2xl text-center mt-32 pt-20 border-t border-white/5">
        <h2 className="text-2xl font-bold text-white mb-4">{b.cta_title}</h2>
        <p className="text-text-secondary mb-8 font-light">{b.cta_desc}</p>
        <Link
          href="/it/contact/"
          className="inline-block px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-primary transition-colors"
        >
          {b.cta_btn}
        </Link>
      </section>
    </div>
  );
}
