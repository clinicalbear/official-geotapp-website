'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { ShieldCheck, Camera, MapPin, Clock } from 'lucide-react';
import GeoBadge from '@/components/GeoBadge';
import { localizePath } from '@/lib/i18n/locale-routing';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { AppLocale } from '@/lib/i18n/config';
import type { SettoreContent, SettoreSlug } from '@/content/settori/types';
import {
  ALL_REGIONAL_FAQ,
  ALL_REGIONAL_FAQ_TITLES,
} from '@/content/settori/regional-faq-index';
import { JsonLd } from '@/components/seo/JsonLd';
import DemoReportBanner from '@/components/DemoReportBanner';
import { trackEvent } from '@/lib/analytics';
import {
  EUR_PRICES,
  convertEurToLocale,
  getCurrencyForLocale,
} from '@/lib/pricing';


interface Props {
  content: SettoreContent;
  locale: AppLocale;
  settore: SettoreSlug;
  children?: React.ReactNode;
}

// Foto disponibili per le testate (guida REDESIGN-L-GUIDA.md): solo
// bg1 (installatore) / bg2 (pulizie) / bg3 (sicurezza), riusate con
// object-position diversa per dare identità ai settori senza foto propria.
const SETTORE_BG: Record<SettoreSlug, { img: string; pos: string }> = {
  installatori:         { img: '/bg1.webp', pos: 'center 42%' },
  pulizie:              { img: '/bg2.webp', pos: 'center 38%' },
  sicurezza:            { img: '/bg3.webp', pos: 'center 40%' },
  elettricisti:         { img: '/settore-elettricisti.webp', pos: 'center 40%' },
  idraulici:            { img: '/settore-idraulici.webp', pos: 'center 42%' },
  termoidraulici:       { img: '/settore-termoidraulici.webp', pos: 'center 38%' },
  edilizia:             { img: '/bg1.webp', pos: '50% 30%' },
  impianti:             { img: '/bg1.webp', pos: '70% 55%' },
  manutenzione:         { img: '/bg3.webp', pos: '55% 50%' },
  'impresa-di-pulizie': { img: '/bg2.webp', pos: 'center 45%' },
};

const RISORSE_LABELS: Record<string, string> = {
  it: 'Guide e articoli →', en: 'Guides & articles →', de: 'Leitfäden & Artikel →',
  fr: 'Guides & articles →', es: 'Guías y artículos →', pt: 'Guias & artigos →',
  nl: 'Gidsen & artikelen →', da: 'Vejledninger & artikler →',
  sv: 'Guider & artiklar →', nb: 'Guider & artikler →', ru: 'Руководства & статьи →',
};

/** Tabella comparativa a 3 colonne (etichetta, comparatore, GeoTapp),
 * stessa struttura/classi .cmp del mockup ma con una colonna in meno:
 * i contenuti reali hanno DUE tabelle distinte (differenza / non_gestionale),
 * il mockup ne mostra una sola fusa a 4 colonne con dati inventati. */
function CmpTable({
  headerLabel,
  rows,
}: {
  headerLabel: string;
  rows: Array<{ label: string; other: string; geotapp: string }>;
}) {
  const cols: React.CSSProperties = { gridTemplateColumns: '1fr 1fr 1fr' };
  return (
    <div className="cmp r-s">
      <div className="rw hd2" style={cols}>
        <div></div>
        <div>{headerLabel}</div>
        <div className="gt">GeoTapp</div>
      </div>
      {rows.map((row, i) => (
        <div className="rw" key={i} style={cols}>
          <div className="lab">{row.label}</div>
          <div>{row.other}</div>
          <div className="gtc">{row.geotapp}</div>
        </div>
      ))}
    </div>
  );
}

export default function SettorePageLayout({ content, locale, settore, children }: Props) {
  const trialLink = localizePath('/trial', locale);
  const pricingLink = localizePath('/pricing', locale);
  const dict = getDictionary(locale) as any;
  const sl = dict.settore_layout ?? {};
  const bg = SETTORE_BG[settore];
  const sectorLabel: string = dict?.navbar?.sectors?.[settore] ?? content.schema_sector_name;
  const sectorsLabel: string = dict?.navbar?.sectors?.label ?? 'Settori';

  // Locale-aware tier-1 monthly rate (used both in the inline pricing badge
  // and in the SoftwareApplication schema below).
  const standardRate = convertEurToLocale(
    EUR_PRICES.tracker.tier1.perSeatMonthly,
    locale,
  );
  const standardCurrency = getCurrencyForLocale(locale);

  // Le domande si chiudono accompagnate, non di colpo: stesso comportamento
  // dello script inline del mockup, qui come effetto locale del componente
  // (già client) invece che uno script globale nuovo.
  const fqRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = fqRef.current;
    if (!container) return;
    const cleanups: Array<() => void> = [];
    container.querySelectorAll('details').forEach((d) => {
      const s = d.querySelector('summary');
      if (!s) return;
      const onClick = (e: Event) => {
        e.preventDefault();
        if (d.open) {
          d.classList.add('closing');
          window.setTimeout(() => { d.open = false; d.classList.remove('closing'); }, 520);
        } else {
          d.open = true;
        }
      };
      s.addEventListener('click', onClick);
      cleanups.push(() => s.removeEventListener('click', onClick));
    });
    return () => cleanups.forEach((c) => c());
  }, [content]);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      {
        '@type': 'ListItem',
        position: 2,
        name: content.schema_sector_name,
        item: `https://geotapp.com/${locale}/settori/${settore}`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  // Sezione "Altri settori": stessa logica/dati di prima, solo vestita con .picker.
  const OTHER_SETTORI: Record<string, Record<SettoreSlug, string>> = {
    it: { pulizie: 'Imprese di pulizie', installatori: 'Installatori', sicurezza: 'Aziende di sicurezza', elettricisti: 'Elettricisti', idraulici: 'Idraulici', termoidraulici: 'Termoidraulici', edilizia: 'Edilizia', impianti: 'Impianti', manutenzione: 'Manutenzione', 'impresa-di-pulizie': 'Impresa di pulizie' },
    en: { pulizie: 'Cleaning companies', installatori: 'Installers', sicurezza: 'Security services', elettricisti: 'Electricians', idraulici: 'Plumbers', termoidraulici: 'Heating engineers', edilizia: 'Construction', impianti: 'Mechanical & Electrical', manutenzione: 'Maintenance', 'impresa-di-pulizie': 'Cleaning company' },
    'en-us': { pulizie: 'Cleaning companies', installatori: 'Installers', sicurezza: 'Security services', elettricisti: 'Electricians', idraulici: 'Plumbers', termoidraulici: 'Heating engineers', edilizia: 'Construction', impianti: 'Mechanical & Electrical', manutenzione: 'Maintenance', 'impresa-di-pulizie': 'Cleaning company' },
    'en-gb': { pulizie: 'Cleaning companies', installatori: 'Installers', sicurezza: 'Security services', elettricisti: 'Electricians', idraulici: 'Plumbers', termoidraulici: 'Heating engineers', edilizia: 'Construction', impianti: 'Mechanical & Electrical', manutenzione: 'Maintenance', 'impresa-di-pulizie': 'Cleaning company' },
    'en-au': { pulizie: 'Cleaning companies', installatori: 'Installers', sicurezza: 'Security services', elettricisti: 'Electricians', idraulici: 'Plumbers', termoidraulici: 'Heating engineers', edilizia: 'Construction', impianti: 'Mechanical & Electrical', manutenzione: 'Maintenance', 'impresa-di-pulizie': 'Cleaning company' },
    'en-ie': { pulizie: 'Cleaning companies', installatori: 'Installers', sicurezza: 'Security services', elettricisti: 'Electricians', idraulici: 'Plumbers', termoidraulici: 'Heating engineers', edilizia: 'Construction', impianti: 'Mechanical & Electrical', manutenzione: 'Maintenance', 'impresa-di-pulizie': 'Cleaning company' },
    'en-ca': { pulizie: 'Cleaning companies', installatori: 'Installers', sicurezza: 'Security services', elettricisti: 'Electricians', idraulici: 'Plumbers', termoidraulici: 'Heating engineers', edilizia: 'Construction', impianti: 'Mechanical & Electrical', manutenzione: 'Maintenance', 'impresa-di-pulizie': 'Cleaning company' },
    de: { pulizie: 'Reinigungsunternehmen', installatori: 'Installateure', sicurezza: 'Sicherheitsdienste', elettricisti: 'Elektriker', idraulici: 'Klempner', termoidraulici: 'Heizungsinstallateure', edilizia: 'Bauwesen', impianti: 'Anlagenbau', manutenzione: 'Wartung', 'impresa-di-pulizie': 'Reinigungsunternehmen' },
    fr: { pulizie: 'Entreprises de nettoyage', installatori: 'Installateurs', sicurezza: 'Services de sécurité', elettricisti: 'Électriciens', idraulici: 'Plombiers', termoidraulici: 'Plombiers-chauffagistes', edilizia: 'Construction', impianti: 'Installations', manutenzione: 'Maintenance', 'impresa-di-pulizie': 'Entreprise de nettoyage' },
    es: { pulizie: 'Empresas de limpieza', installatori: 'Instaladores', sicurezza: 'Servicios de seguridad', elettricisti: 'Electricistas', idraulici: 'Fontaneros', termoidraulici: 'Fontaneros calefactores', edilizia: 'Construcción', impianti: 'Instalaciones', manutenzione: 'Mantenimiento', 'impresa-di-pulizie': 'Empresa de limpieza' },
    pt: { pulizie: 'Empresas de limpeza', installatori: 'Instaladores', sicurezza: 'Serviços de segurança', elettricisti: 'Eletricistas', idraulici: 'Canalizadores', termoidraulici: 'Técnicos de aquecimento', edilizia: 'Construção', impianti: 'Instalações', manutenzione: 'Manutenção', 'impresa-di-pulizie': 'Empresa de limpeza' },
    nl: { pulizie: 'Schoonmaakbedrijven', installatori: 'Installateurs', sicurezza: 'Beveiligingsdiensten', elettricisti: 'Elektriciens', idraulici: 'Loodgieters', termoidraulici: 'CV-monteurs', edilizia: 'Bouw', impianti: 'Installaties', manutenzione: 'Onderhoud', 'impresa-di-pulizie': 'Schoonmaakbedrijf' },
    da: { pulizie: 'Rengøringsvirksomheder', installatori: 'Installatører', sicurezza: 'Sikkerhedstjenester', elettricisti: 'Elektrikere', idraulici: 'VVS-installatører', termoidraulici: 'Varmeinstallatører', edilizia: 'Byggeri', impianti: 'Installationer', manutenzione: 'Vedligeholdelse', 'impresa-di-pulizie': 'Rengøringsfirma' },
    sv: { pulizie: 'Städföretag', installatori: 'Installatörer', sicurezza: 'Säkerhetstjänster', elettricisti: 'Elektriker', idraulici: 'Rörmokare', termoidraulici: 'VVS-tekniker', edilizia: 'Byggnation', impianti: 'Installationer', manutenzione: 'Underhåll', 'impresa-di-pulizie': 'Städföretag' },
    nb: { pulizie: 'Renholdsbedrifter', installatori: 'Installatører', sicurezza: 'Sikkerhetstjenester', elettricisti: 'Elektrikere', idraulici: 'Rørleggere', termoidraulici: 'VVS-teknikere', edilizia: 'Bygg', impianti: 'Installasjoner', manutenzione: 'Vedlikehold', 'impresa-di-pulizie': 'Rengjøringsfirma' },
    ru: { pulizie: 'Клининговые компании', installatori: 'Монтажники', sicurezza: 'Охранные службы', elettricisti: 'Электрики', idraulici: 'Сантехники', termoidraulici: 'Теплотехники', edilizia: 'Строительство', impianti: 'Инженерные системы', manutenzione: 'Техобслуживание', 'impresa-di-pulizie': 'Клининговая компания' },
  };
  const CROSS_TITLE: Record<string, string> = {
    it: 'Altri settori', en: 'Other sectors', de: 'Weitere Branchen',
    fr: 'Autres secteurs', es: 'Otros sectores', pt: 'Outros setores',
    nl: 'Andere sectoren', da: 'Andre sektorer', sv: 'Andra sektorer',
    nb: 'Andre sektorer', ru: 'Другие отрасли',
  };
  const otherNames = OTHER_SETTORI[locale] ?? OTHER_SETTORI.en;
  const otherSettori = (['pulizie', 'installatori', 'sicurezza', 'elettricisti', 'idraulici', 'termoidraulici', 'edilizia', 'impianti', 'manutenzione', 'impresa-di-pulizie'] as SettoreSlug[]).filter((s) => s !== settore);

  // Risorse normative (audit internal linking 2026-05-23): stessa mappa di prima.
  const NORM_TITLE: Record<string, string> = {
    it: 'Approfondisci la normativa',
    en: 'Compliance deep-dive',
    de: 'Compliance vertiefen',
    fr: 'Approfondir la conformité',
    es: 'Profundizar en el cumplimiento',
    pt: 'Aprofundar a conformidade',
    nl: 'Verdieping naleving',
    da: 'Gå dybere i compliance',
    sv: 'Fördjupa efterlevnaden',
    nb: 'Dybdedykk compliance',
    ru: 'Углублённый анализ нормативов',
  };
  const NORM_LINKS: Record<string, { href: string; label: string }[]> = {
    it: [
      { href: '/blog/2025/11/20/geolocalizzazione-dipendenti-gdpr-guida-legale/',
        label: 'Geolocalizzazione dipendenti e GDPR: cosa è permesso e cosa no' },
      { href: '/blog/2026/04/22/fac-simile-informativa-gps-dipendenti-2026/',
        label: 'Fac-simile informativa GPS dipendenti 2026' },
      { href: '/blog/2025/11/20/geolocalizzazione-dipendenti-gdpr-guida-legale/',
        label: 'Garante Privacy e geolocalizzazione: linee guida 2026' },
    ],
    en: [
      { href: '/blog/en/2026/04/13/ico-employee-gps-tracking-uk-gdpr-2026/',
        label: 'UK GDPR and employee GPS tracking: what the ICO actually allows' },
    ],
    de: [
      { href: '/blog/de/2026/04/22/muster-datenschutzerklaerung-gps-mitarbeiterortung-2026/',
        label: 'DSGVO-Muster-Datenschutzerklärung: GPS-Mitarbeiterortung 2026' },
    ],
    nl: [
      { href: '/blog/nl/2026/05/30/software-schoonmaakbedrijven-avg-gps-2026/',
        label: 'Software voor schoonmaakbedrijven: AVG, GPS en urenregistratie' },
      { href: '/blog/nl/2026/05/25/geotapp-updates-mei-2026/',
        label: 'GeoTapp mei 2026: facturatie, AVG, beveiliging, badges' },
      { href: '/blog/nl/2026/05/21/geotapp-vs-hubstaff-2026-surveillance-vs-certificering/',
        label: 'GeoTapp vs Hubstaff: surveillance versus werkcertificering' },
    ],
  };
  // Le 6 locale che NON hanno articoli normative tradotti ricadono su EN.
  const normLinks = NORM_LINKS[locale]
    ?? NORM_LINKS[locale.split('-')[0]]
    ?? NORM_LINKS.en;
  const normTitle = NORM_TITLE[locale]
    ?? NORM_TITLE[locale.split('-')[0]]
    ?? NORM_TITLE.en;

  const regionalItems = ALL_REGIONAL_FAQ[settore]?.[locale];
  const regionalTitle = ALL_REGIONAL_FAQ_TITLES[settore]?.[locale] ?? 'Regional compliance';

  return (
    <div className="lp-l lp-settore">
      <Script
        id={`${settore}-breadcrumb-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />
      {!(content.schema_faq && content.schema_faq.length > 0) && (
        <Script
          id={`${settore}-faq-schema`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
        />
      )}

      {content.schema_faq && content.schema_faq.length > 0 && (
        <>
          <JsonLd data={{
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: content.meta.title,
            description: content.meta.description,
            provider: { '@type': 'Organization', name: 'GeoTapp', url: 'https://geotapp.com' },
            url: `https://geotapp.com/settori/${settore}/`,
          }} />
          <JsonLd data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: content.schema_faq.map(({ question, answer }) => ({
              '@type': 'Question',
              name: question,
              acceptedAnswer: { '@type': 'Answer', text: answer },
            })),
          }} />
          <JsonLd data={{
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'GeoTapp',
            operatingSystem: 'Android, iOS, Web',
            applicationCategory: 'BusinessApplication',
            offers: {
              '@type': 'Offer',
              price: standardRate.amount.toFixed(2),
              priceCurrency: standardCurrency,
              description: `TimeTracker plan from ${standardRate.formatted} per operator per month. 14-day free trial.`,
            },
            url: `https://geotapp.com/${locale}/settori/${settore}/`,
          }} />
        </>
      )}

      {/* ── HERO fotografico ── */}
      <section className="ph img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src={bg.img} alt="" style={{ objectPosition: bg.pos }} loading="lazy" />
        <div className="sc" />
        <div className="crumb">
          <div className="w">
            <Link href={localizePath('/', locale)}>Home</Link> / <Link href={localizePath('/settori', locale)}>{sectorsLabel}</Link> / {sectorLabel}
          </div>
        </div>
        <div className="w">
          <p className="kk k"><s></s>{content.hero.badge}</p>
          <h1>{content.hero.h1_line1}<br /><em>{content.hero.h1_line2}</em></h1>
          <p className="lede">{content.hero.subtitle}</p>
          <div className="acts">
            <Link
              href={trialLink}
              onClick={() => trackEvent('trial_click', { cta_source: `settore_${settore}_hero`, cta_locale: locale })}
              className="b1"
            >
              {content.hero.cta_primary}
            </Link>
            <Link href={`/${locale}/settori/${settore}/risorse/`} className="b2">
              {RISORSE_LABELS[locale] ?? RISORSE_LABELS['en']}
            </Link>
          </div>
          <p style={{ marginTop: 16, fontSize: 13.5, color: 'rgba(242,240,233,.6)' }}>{content.hero.cta_note}</p>
          {content.pricing_hint && (
            <p style={{ marginTop: 18, fontSize: 14, color: 'rgba(242,240,233,.65)' }}>
              {content.pricing_hint.label}{' '}
              <b style={{ color: 'var(--lime)', fontFamily: 'var(--font-anton), Anton, sans-serif' }}>{standardRate.formatted}</b>{' '}
              {content.pricing_hint.per} · {content.pricing_hint.note}
            </p>
          )}
        </div>
      </section>

      {/* ── PROBLEMA: pain points numerati ── */}
      <section className="sec">
        <div className="w">
          <div className="hd">
            <h2 className="r">{content.pain.title}</h2>
            <p className="r d1">{sl.pain_subtitle ?? "Clock-in apps record. They don't certify. There's an enormous difference, and you feel it the moment a dispute arises."}</p>
          </div>
          <div className="mods">
            {content.pain.items.map((item, i) => (
              <article key={i} className={`r d${Math.min(i + 1, 4)}`}>
                <span className="nn">{String(i + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIMA / DOPO ── */}
      {content.prima_dopo && (
        <section className="sec ink">
          <div className="w">
            <h2 className="r" style={{ textAlign: 'center', marginBottom: 52 }}>{content.prima_dopo.title}</h2>
            <div className="grid2">
              <div className="r">
                <p className="kk k">{sl.before ?? 'Before'}</p>
                <ul className="rows">
                  {content.prima_dopo.prima.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </div>
              <div className="r d1">
                <p className="kk k">{sl.after ?? 'With GeoTapp'}</p>
                <ul className="rows">
                  {content.prima_dopo.dopo.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── SCENARIO REALE ── */}
      {content.scenario && (
        <section className="sec warm">
          <div className="w">
            <p className="kk k r" style={{ textAlign: 'center' }}>{content.scenario.title}</p>
            <div className="qt r-s d1" style={{ margin: '0 auto', maxWidth: '64ch' }}>
              <p>&ldquo;{content.scenario.body}&rdquo;</p>
            </div>
            <p
              className="r d2"
              style={{ marginTop: 26, fontFamily: 'var(--font-anton), Anton, sans-serif', textTransform: 'uppercase', fontSize: 26, textAlign: 'center' }}
            >
              {content.scenario.resolution}
            </p>
          </div>
        </section>
      )}

      {/* ── TABELLA: Timbratura vs Certificazione ── */}
      {content.differenza && (
        <section className="sec">
          <div className="w">
            <div className="hd">
              <h2 className="r">{content.differenza.title}</h2>
              <p className="r d1">{content.differenza.subtitle}</p>
            </div>
            <CmpTable
              headerLabel="App di timbratura classica"
              rows={content.differenza.rows.map((r) => ({ label: r.label, other: r.competitor, geotapp: r.geotapp }))}
            />
          </div>
        </section>
      )}

      {/* ── TABELLA: Non è un gestionale ── */}
      {content.non_gestionale && (
        <section className="sec warm">
          <div className="w">
            <div className="hd">
              <h2 className="r">{content.non_gestionale.title}</h2>
              <p className="r d1">{content.non_gestionale.subtitle}</p>
            </div>
            <CmpTable
              headerLabel={sl.classic_app ?? 'Generic app / Spreadsheet'}
              rows={content.non_gestionale.items.map((r) => ({ label: r.label, other: r.gestionale, geotapp: r.geotapp }))}
            />
          </div>
        </section>
      )}

      {/* ── ROI CALCULATOR CTA ── */}
      <section className="sec">
        <div className="wt" style={{ textAlign: 'center' }}>
          <p className="kk k r" style={{ textAlign: 'center' }}>{sl.roi_badge ?? 'Calculate your ROI'}</p>
          <h2 className="r d1">{sl.roi_title ?? 'How much would you save with GeoTapp?'}</h2>
          <p className="r d2" style={{ margin: '20px auto 0', maxWidth: '52ch', color: '#4A5244' }}>
            {sl.roi_desc ?? 'Enter your team size and get an estimated ROI in 30 seconds. No registration, no email.'}
          </p>
          <Link href={`/${locale}/roi-calculator/`} className="b1 r d3" style={{ marginTop: 30, display: 'inline-block' }}>
            {sl.roi_cta ?? 'Calculate my ROI'}
          </Link>
        </div>
      </section>

      {/* ── CTA MID-PAGE ── */}
      {content.cta_mid && (
        <section className="sec">
          <div className="w">
            <div className="ctain r-s">
              <b>{content.cta_mid.title}</b>
              <p>{content.cta_mid.body}</p>
              <Link
                href={trialLink}
                className="b1"
                onClick={() => trackEvent('trial_click', { cta_source: `settore_${settore}`, cta_locale: locale })}
              >
                {content.cta_mid.cta}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── COME FUNZIONA: passi numerati ── */}
      <section className="sec">
        <div className="w">
          <div className="hd">
            <h2 className="r">{content.workflow.title}</h2>
            <p className="r d1">{content.workflow.subtitle}</p>
          </div>
          <ol className="steps">
            {content.workflow.steps.map((step, i) => (
              <li key={i} className={`r d${Math.min(i + 1, 4)}`}>
                <b>{step.title}</b>
                <p>{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── BENEFICI ── */}
      <section className="sec warm">
        <div className="w">
          <h2 className="r" style={{ textAlign: 'center', marginBottom: 52 }}>{content.features.title}</h2>
          <div className="grid3">
            {content.features.items.map((item, i) => (
              <article key={i} className={`cardn r d${Math.min((i % 4) + 1, 4)}`}>
                <span className="nn">{String(i + 1).padStart(2, '0')}</span>
                <b>{item.title}</b>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── COSA CAMBIA DAVVERO ── */}
      {content.cosa_cambia && (
        <section className="sec ink">
          <div className="w">
            <h2 className="r" style={{ textAlign: 'center', marginBottom: 52 }}>{content.cosa_cambia.title}</h2>
            <div className="grid3">
              {content.cosa_cambia.items.map((item, i) => (
                <article key={i} className={`cardn r d${Math.min(i + 1, 4)}`}>
                  <span className="nn">{String(i + 1).padStart(2, '0')}</span>
                  <b>{item.title}</b>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── TESTIMONIAL ── */}
      <section className="sec ink">
        <div className="w">
          <div className="qt r-s" style={{ margin: '0 auto', maxWidth: '64ch' }}>
            <p>&ldquo;{content.testimonial.quote}&rdquo;</p>
            <cite>
              <b style={{ color: 'var(--lime)' }}>{content.testimonial.author}</b>
              <span style={{ color: 'rgba(242,240,233,.7)' }}>{content.testimonial.role}</span>
            </cite>
          </div>
        </div>
      </section>

      {/* ── PROVA VISIVA ── */}
      {content.prova_visiva && (
        <section className="sec">
          <div className="w">
            <div className="hd">
              <h2 className="r">{content.prova_visiva.title}</h2>
              <p className="r d1">{content.prova_visiva.subtitle}</p>
            </div>
            <div className="grid3">
              <div className="mock r-s d1">
                <div className="row"><span><Clock size={13} style={{ display: 'inline', marginRight: 6, verticalAlign: -2, opacity: .7 }} />{sl.mockup_title ?? 'Job open'}</span><span>08:47</span></div>
                <div className="row"><span><MapPin size={13} style={{ display: 'inline', marginRight: 6, verticalAlign: -2, opacity: .7 }} />{sl.mockup_gps ?? 'GPS verified'}</span><span>45.4642°N</span></div>
                <div className="row"><span><Camera size={13} style={{ display: 'inline', marginRight: 6, verticalAlign: -2, opacity: .7 }} />{sl.mockup_photos ?? 'Photos'}</span><span>{sl.mockup_photos_count ?? '3 photos'}</span></div>
              </div>
              <div className="mock r-s d2">
                <div className="row"><span>Operatore</span><span>Mario R.</span></div>
                <div className="row"><span>Apertura</span><span>08:47:03</span></div>
                <div className="row"><span>Chiusura</span><span>11:22:41</span></div>
                <div className="row"><span>GPS</span><span>✓ verificato</span></div>
                <p style={{ marginTop: 16, fontSize: 13, color: 'var(--lime)', fontWeight: 600 }}>
                  <ShieldCheck size={14} style={{ display: 'inline', marginRight: 6, verticalAlign: -2 }} />
                  {sl.mockup_sealed ?? 'Not editable after closure'}
                </p>
              </div>
              <div className="mock r-s d3">
                <div className="row"><span>Luigi B.</span><span>{sl.mockup_status_active ?? 'Active'}</span></div>
                <div className="row"><span>Sara M.</span><span>{sl.mockup_status_active ?? 'Active'}</span></div>
                <div className="row"><span>Marco T.</span><span>{sl.mockup_status_completed ?? 'Completed'}</span></div>
                <p style={{ marginTop: 16, fontSize: 13, color: 'rgba(242,240,233,.6)' }}>{sl.mockup_status_summary ?? '4 operators active on 6 sites'}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── TRUST / NON ALTERABILE ── */}
      {content.trust && (
        <section className="sec">
          <div className="wt" style={{ textAlign: 'center' }}>
            <ShieldCheck className="r" style={{ margin: '0 auto 22px', color: 'var(--seal)' }} size={44} />
            <h2 className="r d1">{content.trust.title}</h2>
            <p className="r d2" style={{ margin: '20px auto 0', maxWidth: '64ch', color: '#4A5244' }}>{content.trust.body}</p>
            <div className="r d3" style={{ marginTop: 28 }}><GeoBadge>{content.trust.badge}</GeoBadge></div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <section className="fq">
        <div className="w"><div className="g">
          <h2 className="r">{content.faq.title}</h2>
          <div ref={fqRef}>
            <p className="r d1" style={{ marginBottom: 20, color: '#4A5244' }}>{content.faq.subtitle}</p>
            {content.faq.items.map((item, i) => (
              <details key={i} className="r" open={i === 0}>
                <summary>{item.q}</summary>
                <div className="ct"><p>{item.a}</p></div>
              </details>
            ))}

            {regionalItems && regionalItems.length > 0 && (
              <>
                <h3 style={{ marginTop: 56, marginBottom: 8 }}>{regionalTitle}</h3>
                {regionalItems.map((item, i) => (
                  <details key={`regional-${i}`} className="r">
                    <summary>{item.q}</summary>
                    <div className="ct"><p>{item.a}</p></div>
                  </details>
                ))}
              </>
            )}

            {normLinks && normLinks.length > 0 && (
              <div style={{ marginTop: 56, paddingTop: 34, borderTop: '1px solid rgba(14,14,12,.16)' }}>
                <h3 style={{ marginBottom: 16 }}>{normTitle}</h3>
                <ul className="rows">
                  {normLinks.map((link, i) => (
                    <li key={`norm-${i}`}>
                      <Link href={link.href}>{link.label} &rarr;</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div></div>
      </section>

      {/* ── ALTRI SETTORI ── */}
      <section className="sec" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div className="w" style={{ textAlign: 'center' }}>
          <p className="kk k r" style={{ textAlign: 'center' }}>{CROSS_TITLE[locale] ?? 'Other sectors'}</p>
          <div className="picker r d1" style={{ justifyContent: 'center' }}>
            {otherSettori.map((s) => (
              <Link key={s} href={localizePath(`/settori/${s}`, locale)}>{otherNames[s]}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO REPORT ── */}
      <section className="sec warm">
        <div className="wn">
          <p className="kk k" style={{ textAlign: 'center', marginBottom: 28 }}>{sl.see_real_report ?? 'See a real report'}</p>
          <DemoReportBanner />
        </div>
      </section>

      {/* ── CTA FINALE ── */}
      <section className="end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/bg2.webp" alt="" loading="lazy" />
        <div className="ov" />
        <div className="w">
          <h2 className="r">{content.cta.title}</h2>
          <p className="r d1">{content.cta.subtitle}</p>
          <div className="acts r d2">
            <Link
              href={trialLink}
              className="b1"
              onClick={() => trackEvent('trial_click', { cta_source: `settore_${settore}_footer`, cta_locale: locale })}
            >
              {content.cta.primary}
            </Link>
            <Link href={pricingLink} className="b2">{content.cta.secondary}</Link>
          </div>
          <p style={{ marginTop: 20, fontSize: 13.5, color: 'rgba(255,255,255,.55)' }}>
            {sl.cta_note ?? 'No lock-in. No contract. We set up on your real case.'}
          </p>
        </div>
      </section>

      {children}
    </div>
  );
}
