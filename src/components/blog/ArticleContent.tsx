'use client';

import { useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { trackEvent } from '@/lib/analytics';

interface ArticleContentProps {
  html: string;
  newsletter?: React.ReactNode;
  locale?: string;
}

const CTA_LABELS: Record<string, { title: string; desc: string; btn: string }> = {
  it: { title: 'Prova GeoTapp gratis per 14 giorni', desc: 'Nessuna carta di credito. Inizia in 2 minuti.', btn: 'Inizia la prova gratuita' },
  en: { title: 'Try GeoTapp free for 14 days', desc: 'No credit card required. Get started in 2 minutes.', btn: 'Start free trial' },
  de: { title: 'GeoTapp 14 Tage kostenlos testen', desc: 'Keine Kreditkarte erforderlich. In 2 Minuten starten.', btn: 'Kostenlos testen' },
  fr: { title: 'Essayez GeoTapp gratuitement 14 jours', desc: 'Sans carte bancaire. Démarrez en 2 minutes.', btn: 'Essai gratuit' },
  nl: { title: 'Probeer GeoTapp 14 dagen gratis', desc: 'Geen creditcard nodig. Klaar in 2 minuten.', btn: 'Gratis proberen' },
  es: { title: 'Prueba GeoTapp gratis 14 días', desc: 'Sin tarjeta de crédito. Empieza en 2 minutos.', btn: 'Prueba gratis' },
  pt: { title: 'Experimenta o GeoTapp grátis 14 dias', desc: 'Sem cartão de crédito. Começa em 2 minutos.', btn: 'Teste grátis' },
  da: { title: 'Prøv GeoTapp gratis i 14 dage', desc: 'Intet kreditkort. Kom i gang på 2 minutter.', btn: 'Start gratis' },
  sv: { title: 'Prova GeoTapp gratis i 14 dagar', desc: 'Inget kreditkort. Kom igång på 2 minuter.', btn: 'Starta gratis' },
  nb: { title: 'Prøv GeoTapp gratis i 14 dager', desc: 'Ingen kredittkort. Kom i gang på 2 minutter.', btn: 'Start gratis' },
  ru: { title: 'Попробуйте GeoTapp бесплатно 14 дней', desc: 'Без банковской карты. Запуск за 2 минуты.', btn: 'Начать бесплатно' },
};

function MidArticleCta({ locale }: { locale: string }) {
  const labels = CTA_LABELS[locale] || CTA_LABELS.en;
  return (
    <div className="my-12 rounded-2xl border border-primary/20 bg-gradient-to-r from-[#8FC436]/5 to-[#3BAEE0]/5 p-8 text-center">
      <p className="text-lg font-bold text-slate-900">{labels.title}</p>
      <p className="text-sm text-slate-500 mt-2">{labels.desc}</p>
      <Link
        href={`/${locale}/trial/`}
        onClick={() => trackEvent('trial_click', { cta_source: 'blog_article' })}
        className="btn-modern-sm mt-4"
      >
        {labels.btn}
      </Link>
    </div>
  );
}

export default function ArticleContent({ html, newsletter, locale = 'it' }: ArticleContentProps) {
  // Split content roughly in half at a paragraph boundary to insert mid-article CTA
  const [firstHalf, secondHalf] = useMemo(() => {
    // WP avvolge il contenuto in <article class="zenith-imported-content">...</article>.
    // Va rimosso PRIMA dello split: altrimenti la prima metà resta con <article> aperto
    // e la seconda con </article> orfano, che il browser chiude contro il motion.article
    // che avvolge tutto → ristrutturazione DOM → hydration mismatch sulla newsletter.
    const clean = html
      .replace(/^\s*<article\b[^>]*>/i, '')
      .replace(/<\/article>\s*$/i, '');
    const paragraphs = clean.split('</p>');
    if (paragraphs.length < 6) return [clean, ''];
    const midIndex = Math.floor(paragraphs.length / 2);
    const first = paragraphs.slice(0, midIndex).join('</p>') + '</p>';
    const second = paragraphs.slice(midIndex).join('</p>');
    return [first, second];
  }, [html]);

  // Tracciamento download lead magnet via DELEGAZIONE: cattura il click su QUALSIASI
  // link a un PDF / cartella /downloads/ dentro l'articolo, sia quello grezzo nel
  // corpo WordPress sia quello del widget LeadMagnetInline (renderizzato qui come
  // `newsletter`) sia futuri. È l'unica fonte dell'evento `lead_magnet_download`
  // (il widget NON spara più l'onClick proprio, così non si conta due volte). Prima
  // del 2026-06-17 la conversione del contenuto più cliccato era invisibile: il link
  // più usato era quello grezzo WP, senza alcun evento.
  const articleRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const root = articleRef.current;
    if (!root) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (/\.pdf(\?|#|$)/i.test(href) || href.includes('/downloads/')) {
        trackEvent('lead_magnet_download', { locale, href });
      }
    };
    root.addEventListener('click', onClick);
    return () => root.removeEventListener('click', onClick);
  }, [locale]);

  return (
    <motion.article
      ref={articleRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.15 }}
      className="flex-1 min-w-0"
    >
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div
          key="article-first"
          className="article-content"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: firstHalf }}
        />
        {secondHalf && <MidArticleCta key="article-cta" locale={locale} />}
        {secondHalf && (
          <div
            key="article-second"
            className="article-content"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: secondHalf }}
          />
        )}
        {newsletter}
      </div>
    </motion.article>
  );
}
