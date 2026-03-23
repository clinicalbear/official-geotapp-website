'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { AppLocale } from '@/lib/i18n/config';

const POSTS_PER_PAGE = 12;

export type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  url: string;
  image: string | null;
};

export default function BlogClient({ locale, posts }: { locale: AppLocale; posts: Post[] }) {
  const b = getDictionary(locale).blog;
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const visible = posts.slice(page * POSTS_PER_PAGE, (page + 1) * POSTS_PER_PAGE);

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
          <section className="container mx-auto max-w-6xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((post) => {
                const date = new Date(post.date).toLocaleDateString(locale, {
                  day: 'numeric', month: 'long', year: 'numeric',
                });
                return (
                  <article key={post.id} className="group flex flex-col">
                    <Link href={post.url} className="flex flex-col h-full">
                      <div className="flex flex-col h-full bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-md transition-all">
                        {post.image && (
                          <div className="relative w-full h-44 shrink-0">
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
                          <span className="text-text-muted text-xs font-mono mb-3 block">{date}</span>
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

      <section className="container mx-auto max-w-2xl text-center mt-24 pt-16 border-t border-border">
        <h2 className="text-2xl font-bold text-text-primary mb-4">{b.cta_title}</h2>
        <p className="text-text-secondary mb-8 font-light">{b.cta_desc}</p>
        <Link
          href={`/${locale}/contact/`}
          className="inline-block px-6 py-3 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
        >
          {b.cta_btn}
        </Link>
      </section>
    </div>
  );
}
