'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import MapBackground from '@/components/blog/MapBackground';
import LNastro from '@/components/LNastro';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { AppLocale } from '@/lib/i18n/config';
import { trackEvent } from '@/lib/analytics';

const POSTS_PER_PAGE = 13; // 1 in evidenza + 12 in griglia

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
  const dict = getDictionary(locale);
  const b = dict.blog;
  const [page, setPage] = useState(0);
  const [activeCat, setActiveCat] = useState<string>('all');

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
      .sort((a, c) => c.count - a.count);
  }, [posts]);

  const filtered = useMemo(() => {
    if (activeCat === 'all') return posts;
    return posts.filter((p) => (p.categories ?? []).some((c) => c.slug === activeCat));
  }, [posts, activeCat]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const visible = filtered.slice(page * POSTS_PER_PAGE, (page + 1) * POSTS_PER_PAGE);

  // Il primo post e' in evidenza (grande), il resto va nella griglia a filo.
  const featured = visible[0] ?? null;
  const rest = visible.slice(1);

  function handleCatClick(slug: string) {
    setActiveCat(slug);
    setPage(0);
  }

  const trialHref = `/${locale}/trial/`;

  return (
    <div className="lp-l lp-blog">
      <MapBackground />

      <section className="ph">
        <div className="w">
          {/* "Pensieri e Scintille" resta come firma nell'occhiello: l'H1 del
              blog dice di cosa parliamo, non come ci sentiamo quando scriviamo. */}
          <p className="kk k"><s></s>{dict.navbar.blog}{(b as any).hero_tagline ? ` · ${(b as any).hero_tagline}` : ''}</p>
          <h1>{b.hero_title}</h1>
          <p className="lede">{b.hero_desc}</p>
          <div className="acts">
            <Link
              className="b1"
              href={trialHref}
              onClick={() => trackEvent('trial_click', { cta_source: 'blog_hero' })}
            >
              {b.cta_btn}
            </Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="w">
          {posts.length === 0 ? (
            <p>{b.no_posts}</p>
          ) : (
            <>
              {featured && (
                <Link href={featured.url} className="feat r-s">
                  {featured.image && (
                    <div className="ph">
                      <img src={featured.image} alt="" loading="lazy" />
                    </div>
                  )}
                  <div className="tx">
                    <p className="m">
                      {featured.categories[0] && <span>{featured.categories[0].name}</span>}
                      <span>{formatDate(featured.date, locale)}</span>
                      {featured.readingTime > 0 && <span>{featured.readingTime} min</span>}
                    </p>
                    <h2>{featured.title}</h2>
                    {featured.excerpt && <p>{featured.excerpt}</p>}
                    <span className="go">{b.read_article}</span>
                  </div>
                </Link>
              )}

              {categories.length > 0 && (
                <div className="cats r d1">
                  <button className={activeCat === 'all' ? 'on' : ''} onClick={() => handleCatClick('all')}>
                    {b.cat_all}
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.slug}
                      className={activeCat === cat.slug ? 'on' : ''}
                      onClick={() => handleCatClick(cat.slug)}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              )}

              {rest.length > 0 && (
                <div className="posts">
                  {rest.map((post, i) => (
                    <Link key={post.id} href={post.url} className={`r d${(i % 4) + 1}`}>
                      {post.image && (
                        <div className="ph">
                          <img src={post.image} alt="" loading="lazy" />
                        </div>
                      )}
                      <p className="m">
                        {post.categories[0] && <span>{post.categories[0].name}</span>}
                        <span>{formatDate(post.date, locale)}</span>
                        {post.readingTime > 0 && <span>{post.readingTime} min</span>}
                      </p>
                      <h3>{post.title}</h3>
                    </Link>
                  ))}
                </div>
              )}

              {totalPages > 1 && (
                <div className="pag r">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button key={i} className={i === page ? 'on' : ''} onClick={() => setPage(i)}>
                      {i + 1}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <LNastro />

      <section className="end">
        <img className="bg" src="/bg2.webp" alt="" loading="lazy" />
        <div className="ov" />
        <div className="w">
          <h2 className="r">{b.cta_title}</h2>
          <p className="r d1">{b.cta_desc}</p>
          <div className="acts r d2">
            <Link
              className="b1"
              href={trialHref}
              onClick={() => trackEvent('trial_click', { cta_source: 'blog_bottom' })}
            >
              {b.cta_btn}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function formatDate(iso: string, locale: string): string {
  return new Date(iso).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
}
