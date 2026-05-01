'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface RelatedPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  url: string;
  image: string | null;
}

interface ArticleFooterProps {
  relatedPosts: RelatedPost[];
  locale: string;
}

const FOOTER_LABELS: Record<string, { related: string; cta_title: string; cta_desc: string; cta_btn: string; read: string }> = {
  it: { related: 'Articoli correlati', cta_title: 'Prova GeoTapp gratis per 14 giorni', cta_desc: 'Nessuna carta di credito richiesta. Inizia in 2 minuti.', cta_btn: 'Inizia subito', read: 'Leggi' },
  en: { related: 'Related articles', cta_title: 'Try GeoTapp free for 14 days', cta_desc: 'No credit card required. Get started in 2 minutes.', cta_btn: 'Start now', read: 'Read' },
  de: { related: 'Verwandte Artikel', cta_title: 'GeoTapp 14 Tage kostenlos testen', cta_desc: 'Keine Kreditkarte erforderlich. In 2 Minuten starten.', cta_btn: 'Jetzt starten', read: 'Lesen' },
  fr: { related: 'Articles connexes', cta_title: 'Essayez GeoTapp gratuitement pendant 14 jours', cta_desc: 'Aucune carte bancaire requise. Démarrez en 2 minutes.', cta_btn: 'Commencer maintenant', read: 'Lire' },
};

export default function ArticleFooter({ relatedPosts, locale }: ArticleFooterProps) {
  const labels = FOOTER_LABELS[locale] || FOOTER_LABELS.en;

  if (relatedPosts.length === 0) {
    return (
      <CtaBanner labels={labels} locale={locale} />
    );
  }

  return (
    <>
      {/* Section 1: Related Posts */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">
            {labels.related}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={post.url}
                  className="block rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow h-full"
                >
                  <div className="relative h-44 w-full">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-100" />
                    )}
                  </div>
                  <div className="p-5">
                    <time className="text-xs text-slate-400 font-mono">{post.date}</time>
                    <h3 className="text-lg font-bold text-slate-900 line-clamp-2 mt-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-2 mt-2">
                      {post.excerpt}
                    </p>
                    <span className="inline-block text-sm font-semibold text-primary mt-3">
                      {labels.read} &rarr;
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: CTA Banner */}
      <CtaBanner labels={labels} locale={locale} />
    </>
  );
}

function CtaBanner({ labels, locale }: { labels: typeof FOOTER_LABELS[string]; locale: string }) {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
          {labels.cta_title}
        </h2>
        <p className="text-slate-400 text-lg mt-4">
          {labels.cta_desc}
        </p>
        <Link
          href={`/${locale}/trial/`}
          className="mt-8 inline-block px-8 py-4 bg-[#8FC436] text-white font-bold text-lg rounded-xl hover:bg-[#7db02e] transition-colors"
        >
          {labels.cta_btn}
        </Link>
      </div>
    </section>
  );
}
