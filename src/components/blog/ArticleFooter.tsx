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

const FOOTER_LABELS: Record<string, { related: string; cta_title: string; cta_desc: string; cta_btn: string; read: string }> = {
  it: { related: 'Articoli correlati', cta_title: 'Prova GeoTapp gratis per 14 giorni', cta_desc: 'Nessuna carta di credito richiesta. Inizia in 2 minuti.', cta_btn: 'Inizia subito', read: 'Leggi' },
  en: { related: 'Related articles', cta_title: 'Try GeoTapp free for 14 days', cta_desc: 'No credit card required. Get started in 2 minutes.', cta_btn: 'Start now', read: 'Read' },
  de: { related: 'Verwandte Artikel', cta_title: 'GeoTapp 14 Tage kostenlos testen', cta_desc: 'Keine Kreditkarte erforderlich. In 2 Minuten starten.', cta_btn: 'Jetzt starten', read: 'Lesen' },
  fr: { related: 'Articles connexes', cta_title: 'Essayez GeoTapp gratuitement pendant 14 jours', cta_desc: 'Aucune carte bancaire requise. Démarrez en 2 minutes.', cta_btn: 'Commencer maintenant', read: 'Lire' },
  nl: { related: 'Gerelateerde artikelen', cta_title: 'Probeer GeoTapp 14 dagen gratis', cta_desc: 'Geen creditcard nodig. Begin in 2 minuten.', cta_btn: 'Nu beginnen', read: 'Lees' },
  es: { related: 'Artículos relacionados', cta_title: 'Prueba GeoTapp gratis 14 días', cta_desc: 'Sin tarjeta de crédito. Empieza en 2 minutos.', cta_btn: 'Empieza ahora', read: 'Leer' },
  pt: { related: 'Artigos relacionados', cta_title: 'Experimente o GeoTapp grátis durante 14 dias', cta_desc: 'Sem cartão de crédito. Comece em 2 minutos.', cta_btn: 'Começar agora', read: 'Ler' },
  da: { related: 'Relaterede artikler', cta_title: 'Prøv GeoTapp gratis i 14 dage', cta_desc: 'Intet kreditkort. Kom i gang på 2 minutter.', cta_btn: 'Start nu', read: 'Læs' },
  sv: { related: 'Relaterade artiklar', cta_title: 'Prova GeoTapp gratis i 14 dagar', cta_desc: 'Inget kreditkort. Kom igång på 2 minuter.', cta_btn: 'Börja nu', read: 'Läs' },
  nb: { related: 'Relaterte artikler', cta_title: 'Prøv GeoTapp gratis i 14 dager', cta_desc: 'Ingen kredittkort. Kom i gang på 2 minutter.', cta_btn: 'Start nå', read: 'Les' },
  ru: { related: 'Похожие статьи', cta_title: 'Попробуйте GeoTapp бесплатно 14 дней', cta_desc: 'Без банковской карты. Запуск за 2 минуты.', cta_btn: 'Начать', read: 'Читать' },
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
          {post.image && (
            <figure className="ib-cover">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.image} alt="" loading="lazy" decoding="async" />
            </figure>
          )}
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
  const altri = [...relatedPosts, ...morePosts].slice(0, 6);

  return (
    <>
      {/* Continua a leggere: correlati + altri articoli, in un blocco solo */}
      {altri.length > 0 && (
        <section className="sec warm">
          <div className="w">
            <div className="hd">
              <h2 className="r">{labels.related}</h2>
            </div>
            <PostGrid posts={altri} locale={locale} />
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
