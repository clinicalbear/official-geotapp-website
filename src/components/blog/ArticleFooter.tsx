'use client';

import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';
import LicenzaContenuto from '@/components/LicenzaContenuto';

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

function formatDate(iso: string, locale: string): string {
  try {
    return new Date(iso).toLocaleDateString(locale, { timeZone: 'UTC', day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return iso.slice(0, 10);
  }
}

function PostGrid({ posts, locale }: { posts: RelatedPost[]; locale: string }) {
  return (
    <div className="grid3">
      {posts.map((post, i) => (
        <Link key={post.id} href={post.url} className={`cardn r d${(i % 4) + 1}`}>
          <span className="nn">{formatDate(post.date, locale)}</span>
          <b>{post.title}</b>
          {post.excerpt && <p>{post.excerpt}</p>}
        </Link>
      ))}
    </div>
  );
}

export default function ArticleFooter({ relatedPosts, morePosts, locale }: ArticleFooterProps) {
  const labels = FOOTER_LABELS[locale] || FOOTER_LABELS.en;

  return (
    <>
      {/* Continua a leggere: correlati + altri articoli */}
      {relatedPosts.length > 0 && (
        <section className="sec warm">
          <div className="w">
            <div className="hd">
              <h2 className="r">{labels.related}</h2>
            </div>
            <PostGrid posts={relatedPosts} locale={locale} />
          </div>
        </section>
      )}

      {morePosts.length > 0 && (
        <section className="sec">
          <div className="w">
            <div className="hd">
              <h2 className="r">{labels.more}</h2>
            </div>
            <PostGrid posts={morePosts} locale={locale} />
          </div>
        </section>
      )}

      {/* CTA di chiusura */}
      <section className="end">
        <img className="bg" src="/bg2.webp" alt="" aria-hidden="true" loading="lazy" />
        <div className="ov" />
        <div className="w">
          <h2 className="r">{labels.cta_title}</h2>
          <p className="r d1">{labels.cta_desc}</p>
          <div className="acts r d2">
            <Link
              className="b1"
              href={`/${locale}/trial/`}
              onClick={() => trackEvent('trial_click', { cta_source: 'blog_article_footer', cta_locale: locale })}
            >
              {labels.cta_btn}
            </Link>
          </div>
        </div>
      </section>

      {/* Copyright + licenza d'uso del contenuto */}
      <LicenzaContenuto locale={locale} />
    </>
  );
}
