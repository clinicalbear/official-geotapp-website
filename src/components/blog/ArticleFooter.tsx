'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { trackEvent } from '@/lib/analytics';

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
  morePosts: RelatedPost[];
  locale: string;
}

const FOOTER_LABELS: Record<string, { related: string; more: string; cta_title: string; cta_desc: string; cta_btn: string; read: string }> = {
  it: { related: 'Articoli correlati', more: 'Leggi anche', cta_title: 'Prova GeoTapp gratis per 14 giorni', cta_desc: 'Nessuna carta di credito richiesta. Inizia in 2 minuti.', cta_btn: 'Inizia subito', read: 'Leggi' },
  en: { related: 'Related articles', more: 'Read also', cta_title: 'Try GeoTapp free for 14 days', cta_desc: 'No credit card required. Get started in 2 minutes.', cta_btn: 'Start now', read: 'Read' },
  de: { related: 'Verwandte Artikel', more: 'Lesen Sie auch', cta_title: 'GeoTapp 14 Tage kostenlos testen', cta_desc: 'Keine Kreditkarte erforderlich. In 2 Minuten starten.', cta_btn: 'Jetzt starten', read: 'Lesen' },
  fr: { related: 'Articles connexes', more: 'Lire aussi', cta_title: 'Essayez GeoTapp gratuitement pendant 14 jours', cta_desc: 'Aucune carte bancaire requise. Démarrez en 2 minutes.', cta_btn: 'Commencer maintenant', read: 'Lire' },
  nl: { related: 'Gerelateerde artikelen', more: 'Lees ook', cta_title: 'Probeer GeoTapp 14 dagen gratis', cta_desc: 'Geen creditcard nodig. Klaar in 2 minuten.', cta_btn: 'Nu starten', read: 'Lezen' },
  es: { related: 'Artículos relacionados', more: 'Lee también', cta_title: 'Prueba GeoTapp gratis 14 días', cta_desc: 'Sin tarjeta de crédito. Empieza en 2 minutos.', cta_btn: 'Empieza ahora', read: 'Leer' },
  pt: { related: 'Artigos relacionados', more: 'Lê também', cta_title: 'Experimenta o GeoTapp grátis 14 dias', cta_desc: 'Sem cartão de crédito. Começa em 2 minutos.', cta_btn: 'Começar agora', read: 'Ler' },
  da: { related: 'Relaterede artikler', more: 'Læs også', cta_title: 'Prøv GeoTapp gratis i 14 dage', cta_desc: 'Intet kreditkort. Kom i gang på 2 minutter.', cta_btn: 'Start nu', read: 'Læs' },
  sv: { related: 'Relaterade artiklar', more: 'Läs även', cta_title: 'Prova GeoTapp gratis i 14 dagar', cta_desc: 'Inget kreditkort. Kom igång på 2 minuter.', cta_btn: 'Börja nu', read: 'Läs' },
  nb: { related: 'Relaterte artikler', more: 'Les også', cta_title: 'Prøv GeoTapp gratis i 14 dager', cta_desc: 'Ingen kredittkort. Kom i gang på 2 minutter.', cta_btn: 'Start nå', read: 'Les' },
  ru: { related: 'Похожие статьи', more: 'Читайте также', cta_title: 'Попробуйте GeoTapp бесплатно 14 дней', cta_desc: 'Без банковской карты. Запуск за 2 минуты.', cta_btn: 'Начать', read: 'Читать' },
};

function PostGrid({ posts, labels, startDelay = 0 }: { posts: RelatedPost[]; labels: typeof FOOTER_LABELS[string]; startDelay?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: startDelay + index * 0.1 }}
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
  );
}

export default function ArticleFooter({ relatedPosts, morePosts, locale }: ArticleFooterProps) {
  const labels = FOOTER_LABELS[locale] || FOOTER_LABELS.en;

  return (
    <>
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">
              {labels.related}
            </h2>
            <PostGrid posts={relatedPosts} labels={labels} />
          </div>
        </section>
      )}

      {/* Read Also */}
      {morePosts.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">
              {labels.more}
            </h2>
            <PostGrid posts={morePosts} labels={labels} startDelay={0.15} />
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <CtaBanner labels={labels} locale={locale} />
    </>
  );
}

function CtaBanner({ labels, locale }: { labels: typeof FOOTER_LABELS[string]; locale: string }) {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #2a8fc4 0%, #3BAEE0 50%, #2a8fc4 100%)',
        boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.15), inset 0 -4px 12px rgba(0,0,0,0.1)',
      }}
    >
      <div className="max-w-4xl mx-auto text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
          {labels.cta_title}
        </h2>
        <p className="text-slate-900 text-lg mt-4">
          {labels.cta_desc}
        </p>
        <Link
          href={`/${locale}/trial/`}
          onClick={() => trackEvent('trial_click', { cta_source: 'blog_article_footer', cta_locale: locale })}
          className="btn-modern mt-8"
        >
          {labels.cta_btn}
        </Link>
      </div>
    </section>
  );
}
