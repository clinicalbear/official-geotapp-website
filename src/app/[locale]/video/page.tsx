import type { Metadata } from 'next';
import Link from 'next/link';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { translatePath } from '@/lib/i18n/slug-map';
import type { AppLocale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import VideoGiro from '@/components/VideoGiro';
import LNastro from '@/components/LNastro';
import {
  GIRO_CAPITOLI,
  giroMiniatura,
  giroYouTube,
  linguaGiro,
  orologio,
} from '@/lib/video-giro';
import { GIRO_CONTENUTI } from '@/lib/video-giro-contenuti';
import { giroVideoJsonLd } from '@/lib/video-giro-jsonld';

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const BASE_URL = 'https://geotapp.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as AppLocale).videoGiro;
  const url = `${BASE_URL}/${locale}${translatePath('/video/', locale as AppLocale)}`;
  const miniatura = `${BASE_URL}${giroMiniatura(locale)}`;

  return {
    title: { absolute: `${t.page.metaTitle} | GeoTapp` },
    description: t.page.metaDescription,
    alternates: buildLocaleAlternates(locale, '/video/'),
    openGraph: {
      title: t.page.metaTitle,
      description: t.page.metaDescription,
      type: 'video.other',
      url,
      images: [{ url: miniatura, width: 1200, height: 675, alt: t.posterAlt }],
      videos: [{ url: `${BASE_URL}/video/giro-${linguaGiro(locale)}.mp4`, type: 'video/mp4', width: 1920, height: 1080 }],
    },
    twitter: {
      card: 'player',
      title: t.page.metaTitle,
      description: t.page.metaDescription,
      images: [miniatura],
    },
  };
}

export default async function VideoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale as AppLocale);
  const t = dict.videoGiro;
  const contenuto = GIRO_CONTENUTI[linguaGiro(locale)];

  const percorso = `/${locale}${translatePath('/video/', locale as AppLocale)}`;
  const trialHref = `/${locale}${translatePath('/trial/', locale as AppLocale)}`;
  const prodotti = [
    { nome: 'GeoTapp Flow', href: `/${locale}${translatePath('/products/geotapp-flow/', locale as AppLocale)}` },
    { nome: 'GeoTapp TimeTracker', href: `/${locale}${translatePath('/products/geotapp-timetracker/', locale as AppLocale)}` },
    { nome: 'GeoTapp Verifier', href: `/${locale}${translatePath('/products/geotapp-verifier/', locale as AppLocale)}` },
  ];

  const videoSchema = giroVideoJsonLd(locale, percorso);
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: `${BASE_URL}/${locale}/` },
      { '@type': 'ListItem', position: 2, name: t.page.h1, item: `${BASE_URL}${percorso}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="lp-l">
        <section className="ph">
          <div className="crumb"><div className="w"><Link href={`/${locale}/`}>Home</Link> / {t.kicker}</div></div>
          <div className="w">
            <h1>{t.page.h1}</h1>
            <p className="lede">{t.page.intro}</p>
          </div>
        </section>

        {/* ── il video, alto nella pagina: chi e' arrivato qui e' venuto per questo ── */}
        <section className="sec"><div className="wn">
          <VideoGiro locale={locale as AppLocale} capitoli id="giro" />
          <p className="r d1" style={{ color: '#4A5244', marginTop: 26, fontSize: 17.5, lineHeight: 1.7 }}>
            {t.page.intro2}
          </p>
        </div></section>

        {/* ── la trascrizione: quello che Google legge, e quello che si legge in
             ufficio senza cuffie ── */}
        <section className="sec warm"><div className="wt">
          <h2 className="r">{t.page.transcriptTitle}</h2>
          <p className="r d1" style={{ color: '#4A5244', marginTop: 14 }}>{t.page.transcriptNote}</p>
          <ol className="r d1" style={{ marginTop: 26, listStyle: 'none', padding: 0 }}>
            {contenuto.trascrizione.map((voce) => (
              <li key={voce.da} style={{ display: 'flex', gap: 16, padding: '7px 0', borderTop: '1px solid rgba(14,14,12,.08)' }}>
                <span style={{ color: '#4F5A49', fontVariantNumeric: 'tabular-nums', minWidth: 46 }}>
                  {orologio(voce.da)}
                </span>
                <span style={{ color: '#2C3328', lineHeight: 1.6 }}>{voce.testo}</span>
              </li>
            ))}
          </ol>
        </div></section>

        {/* ── i sette atti, come indice e come rimando alle tre pagine ── */}
        <section className="sec"><div className="wt">
          <h2 className="r">{t.page.actsTitle}</h2>
          <ol className="r d1" style={{ marginTop: 22, paddingLeft: 0, listStyle: 'none' }}>
            {contenuto.atti.map((atto, i) => (
              <li key={atto} style={{ padding: '9px 0', color: '#2C3328', fontSize: 17.5 }}>
                {/* Il minuto e' scritto, non linkato: i salti veri stanno sotto
                    al video, e un'ancora che porta al lettore senza spostarlo
                    prometterebbe una cosa che non fa. */}
                <span style={{ color: '#4F5A49', fontVariantNumeric: 'tabular-nums', marginRight: 14 }}>
                  {orologio(GIRO_CAPITOLI[i].da)}
                </span>
                {atto}
              </li>
            ))}
          </ol>
          <p className="r d1" style={{ color: '#4A5244', marginTop: 26, fontSize: 17.5, lineHeight: 1.7 }}>
            {prodotti.map((p, i) => (
              <span key={p.nome}>
                {i > 0 ? ' · ' : ''}
                <Link href={p.href} className="b2">{p.nome}</Link>
              </span>
            ))}
          </p>
        </div></section>

        {/* ── quello che il video non è: sta scritto qui, non in una nota in fondo ── */}
        <section className="sec warm"><div className="wt">
          <h2 className="r">{t.page.honestyTitle}</h2>
          <p className="r d1" style={{ color: '#4A5244', marginTop: 22, fontSize: 17.5, lineHeight: 1.7 }}>{t.page.honesty}</p>
          <p className="r d1" style={{ color: '#4A5244', marginTop: 18 }}>
            <a href={giroYouTube(locale)} target="_blank" rel="noopener" className="b2">{t.youtube}</a>
            {' '}{t.page.youtubeNote}
          </p>
        </div></section>

        <LNastro />

        <section className="sec ink"><div className="wt">
          <h2 className="r">{t.page.ctaTitle}</h2>
          <p className="r d1" style={{ color: 'rgba(242,240,233,.75)', marginTop: 22, fontSize: 17.5, lineHeight: 1.7 }}>{t.page.ctaText}</p>
          <div className="acts r d2" style={{ marginTop: 30 }}>
            <Link className="b1" href={trialHref}>{dict.landing.hero_cta_primary}</Link>
          </div>
        </div></section>
      </div>
    </>
  );
}
