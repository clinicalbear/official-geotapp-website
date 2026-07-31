'use client';

import Link from 'next/link';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { AppLocale } from '@/lib/i18n/config';
import { trackEvent } from '@/lib/analytics';
import { CTA_LABELS } from './ArticleContent';

interface ArticleHeroProps {
  title: string;
  image: string | null;
  categories: Array<{ slug: string; name: string }>;
  date: string;
  readingTime: number;
  locale: string;
  blogHref: string;
}

export default function ArticleHero({
  title,
  image,
  categories,
  date,
  readingTime,
  locale,
  blogHref,
}: ArticleHeroProps) {
  const primaryCategory = categories[0];
  const dict = getDictionary(locale as AppLocale);
  const cta = CTA_LABELS[locale] || CTA_LABELS.en;

  const formattedDate = new Date(date).toLocaleDateString(locale, {
    timeZone: 'UTC',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={`ph${image ? ' img' : ''}`}>
      {image && <img className="bg" src={image} alt="" fetchPriority="high" />}
      <div className="sc" />
      <div className="crumb">
        <div className="w">
          <Link href={blogHref}>{dict.navbar.blog}</Link>
          {primaryCategory && <> / {primaryCategory.name}</>}
        </div>
      </div>
      <div className="w">
        <p className="kk k">
          <s></s>
          {primaryCategory && <>{primaryCategory.name} &middot; </>}
          {formattedDate}
          {readingTime > 0 && <> &middot; {readingTime} min</>}
        </p>
        <h1>{title}</h1>
        <div className="acts">
          <Link
            className="b1"
            href={`/${locale}/trial/`}
            onClick={() => trackEvent('trial_click', { cta_source: 'blog_article_hero' })}
          >
            {cta.btn}
          </Link>
          <Link className="b2" href={blogHref}>
            {dict.navbar.blog}
          </Link>
        </div>
      </div>
    </section>
  );
}
