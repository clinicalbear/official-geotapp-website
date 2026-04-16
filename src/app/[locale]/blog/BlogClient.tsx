'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { AppLocale } from '@/lib/i18n/config';

const POSTS_PER_PAGE = 12;

// TimeTracker → arancione logo (#F97316)
// Flow        → viola/lilla (#8B5CF6)
// Verifier    → verde (#22C55E)
const CATEGORY_COLORS: Record<string, string> = {
  // TimeTracker
  'gps':               'rgba(249,115,22,0.70)',
  'tracking':          'rgba(249,115,22,0.70)',
  'geolocalizzazione': 'rgba(249,115,22,0.70)',
  'timbrature':        'rgba(249,115,22,0.70)',
  'presenze':          'rgba(249,115,22,0.70)',
  'app':               'rgba(249,115,22,0.70)',
  // Flow
  'gestione':          'rgba(139,92,246,0.70)',
  'operazioni':        'rgba(139,92,246,0.70)',
  'business':          'rgba(139,92,246,0.70)',
  'tecnologia':        'rgba(139,92,246,0.70)',
  'software':          'rgba(139,92,246,0.70)',
  // Verifier
  'sicurezza':         'rgba(34,197,94,0.70)',
  'security':          'rgba(34,197,94,0.70)',
  'verifica':          'rgba(34,197,94,0.70)',
  'prove':             'rgba(34,197,94,0.70)',
};
const DEFAULT_COLOR = 'rgba(143,196,54,0.70)';

function getCategoryColor(categories: Array<{ slug: string; name: string }>): string {
  for (const cat of categories) {
    const slug = cat.slug.toLowerCase().replace(/-[a-z]{2}$/, '');
    if (CATEGORY_COLORS[slug]) return CATEGORY_COLORS[slug];
  }
  return DEFAULT_COLOR;
}

export type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  url: string;
  image: string | null;
  categories: Array<{ slug: string; name: string }>;
  readingTime: number;
};

export default function BlogClient({ locale, posts }: { locale: AppLocale; posts: Post[] }) {
  const b = getDictionary(locale).blog;
  const [page, setPage] = useState(0);
  const [activeCat, setActiveCat] = useState<string>('all');

  // Build sorted category list from posts (by frequency)
  const categories = useMemo(() => {
    const freq = new Map<string, { name: string; count: number }>();
    for (const p of posts) {
      for (const c of p.categories ?? []) {
        const prev = freq.get(c.slug);
        freq.set(c.slug, { name: c.name, count: (prev?.count ?? 0) + 1 });
      }
    }
    return Array.from(freq.entries())
      .map(([slug, { name, count }]) => ({ slug, name, count }))
      .sort((a, b) => b.count - a.count);
  }, [posts]);

  // Filter posts by selected category
  const filtered = useMemo(() => {
    if (activeCat === 'all') return posts;
    return posts.filter((p) => (p.categories ?? []).some((c) => c.slug === activeCat));
  }, [posts, activeCat]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const visible = filtered.slice(page * POSTS_PER_PAGE, (page + 1) * POSTS_PER_PAGE);

  function handleCatClick(slug: string) {
    setActiveCat(slug);
    setPage(0);
  }

  return (
    <div className="bg-background min-h-screen pt-40 pb-20 px-6">
      <section className="container mx-auto max-w-6xl text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-text-primary mb-6">
          {b.hero_title}
        </h1>
        <p className="text-xl text-text-secondary font-light max-w-2xl mx-auto">
          {b.hero_desc}
        </p>
      </section>

      {posts.length === 0 ? (
        <p className="text-text-secondary text-center py-20">{b.no_posts}</p>
      ) : (
        <>
          {/* Category filter bar */}
          {categories.length > 0 && (
            <div className="container mx-auto max-w-6xl mb-8">
              <div className="gt-category-filter" id="gt-cat-filter">
                <button
                  className={activeCat === 'all' ? 'active' : ''}
                  onClick={() => handleCatClick('all')}
                >
                  Tutti
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    className={activeCat === cat.slug ? 'active' : ''}
                    onClick={() => handleCatClick(cat.slug)}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          <section className="container mx-auto max-w-6xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((post) => {
                const date = new Date(post.date).toLocaleDateString(locale, {
                  day: 'numeric', month: 'long', year: 'numeric',
                });
                return (
                  <article
                    key={post.id}
                    id={`post-${post.id}`}
                    className="group flex flex-col"
                    style={{ '--cat-shadow': getCategoryColor(post.categories ?? []) } as React.CSSProperties}
                  >
                    <Link href={post.url} className="flex flex-col h-full">
                      <div className="cat-card flex flex-col h-full bg-surface border border-border rounded-2xl overflow-hidden transition-all duration-300">
                        {post.image && (
                          <div className="relative w-full h-44 shrink-0 overflow-hidden">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          </div>
                        )}
                        <div className="flex flex-col flex-1 p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-text-muted text-xs font-mono">{date}</span>
                            {post.readingTime > 0 && (
                              <span className="card-reading-time">
                                &#9201; {post.readingTime} min
                              </span>
                            )}
                          </div>
                          <h2 className="text-lg font-display font-bold text-text-primary mb-3 group-hover:text-primary transition-colors leading-snug flex-1">
                            {post.title}
                          </h2>
                          {post.excerpt && (
                            <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                              {post.excerpt}{post.excerpt.length === 160 ? '…' : ''}
                            </p>
                          )}
                          <span className="text-primary text-sm font-bold mt-auto">
                            {b.read_article}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>

          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-12">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`w-9 h-9 rounded-lg text-sm font-bold transition-all ${
                    i === page
                      ? 'bg-primary text-white'
                      : 'bg-surface text-text-secondary hover:text-primary border border-border'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}

      <section className="container mx-auto max-w-6xl mt-24">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <span className="text-primary font-bold uppercase tracking-widest text-xs block mb-3">{b.cta_title}</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3 max-w-lg">{b.cta_desc}</h2>
          </div>
          <Link
            href={`/${locale}/trial/`}
            className="shrink-0 inline-block px-8 py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-opacity text-lg"
          >
            {b.cta_btn}
          </Link>
        </div>
      </section>
    </div>
  );
}
