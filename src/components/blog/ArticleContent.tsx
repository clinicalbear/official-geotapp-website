'use client';

import { useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { trackEvent } from '@/lib/analytics';

interface ArticleContentProps {
  html: string;
  newsletter?: React.ReactNode;
  /**
   * Blocco del lead magnet. Va IN ALTO, dopo i primi due paragrafi, non in coda:
   * su telefono il bottone di download stava a 12.000px, cioe' quattordici
   * schermate sotto, su un articolo il cui unico scopo e' far scaricare quel
   * documento (misurato il 09/08/2026 a 390x844). Quando c'e' questo, il blocco
   * newsletter generico non si mostra: il magnet contiene gia' l'iscrizione.
   */
  leadMagnet?: React.ReactNode;
  locale?: string;
}

export const CTA_LABELS: Record<string, { title: string; desc: string; btn: string }> = {
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

// Il pulsante e' quello del template (.b1 di l-mockup.css), non piu' la
// pillola con l'anello che pulsa (.btn-ring): sulle route /blog/* non viene
// caricato redesign-l.css, che nel resto del sito spegne l'anello, quindi la
// pulsazione era rimasta accesa solo dentro gli articoli.
function MidArticleCta({ locale }: { locale: string }) {
  const labels = CTA_LABELS[locale] || CTA_LABELS.en;
  return (
    <div className="my-12 rounded-2xl border border-primary/20 bg-gradient-to-r from-[#8FC436]/5 to-[#2DA4E4]/5 p-8 text-center">
      <p className="text-lg font-bold text-slate-900">{labels.title}</p>
      <p className="text-sm text-slate-500 mt-2">{labels.desc}</p>
      <Link
        href={`/${locale}/trial/`}
        onClick={() => trackEvent('trial_click', { cta_source: 'blog_article' })}
        className="b1 mt-4"
      >
        {labels.btn}
      </Link>
    </div>
  );
}

export default function ArticleContent({ html, newsletter, leadMagnet, locale = 'it' }: ArticleContentProps) {
  // Split content roughly in half at a paragraph boundary to insert mid-article CTA
  const [apertura, firstHalf, secondHalf] = useMemo(() => {
    // WP avvolge il contenuto in <article class="zenith-imported-content">...</article>,
    // ma il </article> NON è sempre in fondo: la pipeline appende CTA e paragrafi dopo
    // la chiusura, e un </article> orfano a metà contenuto fa chiudere al browser il
    // motion.article che avvolge tutto (con py-16 e article-content chiusi per
    // implicazione) → il widget newsletter risale a div.w → hydration mismatch #418.
    // Dentro il corpo un tag <article> non ha comunque motivo di esistere: si tolgono TUTTI.
    const clean = html.replace(/<\/?article\b[^>]*>/gi, '');
    const paragraphs = clean.split('</p>');
    if (paragraphs.length < 6) return ['', clean, ''];
    const midIndex = Math.floor(paragraphs.length / 2);
    const first = paragraphs.slice(0, midIndex).join('</p>') + '</p>';
    const second = paragraphs.slice(midIndex).join('</p>');
    // Con un lead magnet il corpo si apre con i primi due paragrafi: chi arriva
    // legge la scena, poi trova subito il documento. Senza, resta tutto com'era.
    if (!leadMagnet) return ['', first, second];
    const testa = paragraphs.slice(0, 2).join('</p>') + '</p>';
    const resto = paragraphs.slice(2, midIndex).join('</p>') + '</p>';
    return [testa, resto, second];
  }, [html, leadMagnet]);

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
      className="body"
    >
      <div className="py-16">
        {apertura && (
          <div
            key="article-open"
            className="article-content"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: apertura }}
          />
        )}
        {leadMagnet}
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
        {!leadMagnet && newsletter}
      </div>
    </motion.article>
  );
}
