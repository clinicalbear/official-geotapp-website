'use client';

import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { REVIEWS, resolveReviewText } from '@/data/reviews';

import { REVIEWS_COPY, SOURCE_LOGOS, SOURCE_NAMES } from './reviews-copy';

export { REVIEWS_COPY, SOURCE_LOGOS };

export default function Reviews({ locale }: { locale: string }) {
  const c = REVIEWS_COPY[locale] ?? REVIEWS_COPY.en;

  if (REVIEWS.length === 0) return null;

  const avg = REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length;
  const avgStr = avg.toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });

  return (
    <section
      // `recensioni-blocco` serve al CSS per NON rendere trasparente questo fondo:
      // un override globale toglie lo sfondo ai blocchi `bg-white` dentro le
      // sezioni, e il risultato era un riquadro trasparente sopra il nero della
      // pagina, con dentro testo `text-slate-900` a 1,08:1, cioe' invisibile.
      // (Audit EAA del 23/09/2026.)
      className="py-20 border-b border-slate-100 recensioni-blocco"
      aria-label={c.heading}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
            {c.heading}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            {c.subheading}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="reviews-marquee"
        >
          <div className="reviews-track">
            {[...REVIEWS, ...REVIEWS].map((r, idx) => {
              const sourceName = SOURCE_NAMES[r.source];
              const viewLabel = c.viewOn.replace('{source}', sourceName);
              const starsLabel = c.starsAriaLabel.replace('{rating}', String(r.rating));
              const Logo = SOURCE_LOGOS[r.source];
              const { text, lang } = resolveReviewText(r, locale);
              const isClone = idx >= REVIEWS.length;

              return (
                <a
                  key={`${r.id}-${idx}`}
                  href={r.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label={isClone ? undefined : `${viewLabel}, ${r.reviewer.displayName}`}
                  aria-hidden={isClone || undefined}
                  tabIndex={isClone ? -1 : undefined}
                  className="reviews-card group bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-slate-300 transition-all flex flex-col gap-4 no-underline"
                >
                  <div className="flex items-center gap-1" aria-label={starsLabel} role="img">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} size={18} fill={i < r.rating ? '#FBBF24' : 'none'} stroke="#FBBF24" strokeWidth={1.5} aria-hidden="true" />
                    ))}
                  </div>
                  <p
                    lang={lang}
                    className="text-slate-700 text-base leading-relaxed italic"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 6,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {`“${text.quote}”`}
                  </p>
                  <div className="border-t border-slate-100 pt-4 mt-auto">
                    <div className="font-semibold text-slate-900 text-sm">
                      {r.reviewer.displayName}
                    </div>
                    {(r.reviewer.industry || r.reviewer.companySize) && (
                      <div className="text-xs text-slate-500 mt-1">
                        {[r.reviewer.industry, r.reviewer.companySize].filter(Boolean).join(' · ')}
                      </div>
                    )}
                    <div className="inline-flex items-center gap-2 mt-3 text-xs text-slate-600 group-hover:text-slate-900 transition">
                      <Logo />
                      <ExternalLink size={12} />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        <style>{`
          .reviews-marquee {
            overflow: hidden;
            /* Vertical padding gives room for the card hover lift + shadow,
               which would otherwise be clipped by overflow: hidden. */
            padding: 1.5rem 0;
            -webkit-mask-image: linear-gradient(to right, transparent, #000 5%, #000 95%, transparent);
            mask-image: linear-gradient(to right, transparent, #000 5%, #000 95%, transparent);
          }
          .reviews-track {
            display: flex;
            width: max-content;
            animation: reviews-scroll 44s linear infinite;
          }
          .reviews-marquee:hover .reviews-track,
          .reviews-track:focus-within {
            animation-play-state: paused;
          }
          .reviews-card {
            width: 340px;
            height: 340px;
            flex-shrink: 0;
            margin-right: 2rem;
          }
          @keyframes reviews-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @media (prefers-reduced-motion: reduce) {
            .reviews-marquee { overflow-x: auto; }
            .reviews-track { animation: none; }
          }
        `}</style>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center text-sm text-slate-500 mt-12"
        >
          {c.aggregateLine.replace('{avg}', avgStr).replace('{count}', String(REVIEWS.length))}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center text-xs text-slate-400 mt-3 max-w-2xl mx-auto"
        >
          {c.translationNote}
        </motion.p>
      </div>
    </section>
  );
}
