'use client';

import React, { useEffect, useRef } from 'react';
import FeaturedIn from '@/components/FeaturedIn';
import { featuredLabel } from '@/lib/press/labels';
import Link from 'next/link';
import Script from 'next/script';
import { ShieldCheck, Camera, MapPin, Clock } from 'lucide-react';
import './settore-pagina.css';
import GeoBadge from '@/components/GeoBadge';
import { localizePath } from '@/lib/i18n/locale-routing';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { AppLocale } from '@/lib/i18n/config';
import type { SettoreContent, SettoreSlug } from '@/content/settori/types';
import { haPaginaRisorse } from '@/content/settori/risorse-disponibili'
import { SETTORE_TOOLS } from '@/content/settori/novita/registry';
import { sezioneGuide } from '@/content/settori/guide';
import {
  ALL_REGIONAL_FAQ,
  ALL_REGIONAL_FAQ_TITLES,
} from '@/content/settori/regional-faq-index';
import { JsonLd } from '@/components/seo/JsonLd';
import UpdatedOnLine, { updatedIsoFor } from '@/components/seo/UpdatedOnLine';
import DemoReportBanner from '@/components/DemoReportBanner';
import { DEMO_REPORT_DISPONIBILE } from '@/lib/demo-report';
import { trackEvent } from '@/lib/analytics';
import { localizeEnglishDeep } from '@/lib/i18n/en-spelling';
import {
  EUR_PRICES,
  convertEurToLocale,
  getCurrencyForLocale,
} from '@/lib/pricing';


interface Props {
  content: SettoreContent;
  locale: AppLocale;
  settore: SettoreSlug;
  /** Sezione "nuovi strumenti di settore" (server component, gia' resa dalla pagina). */
  novita?: React.ReactNode;
  /** Composizione dell'hero: schermata Flow + telefono dello strumento di apertura (server component). */
  heroVisual?: React.ReactNode;
  children?: React.ReactNode;
}

const RISORSE_LABELS: Record<string, string> = {
  it: 'Guide e articoli →', en: 'Guides & articles →', de: 'Leitfäden & Artikel →',
  fr: 'Guides et articles →', es: 'Guías y artículos →', pt: 'Guias e artigos →',
  nl: 'Gidsen en artikelen →', da: 'Vejledninger og artikler →',
  sv: 'Guider och artiklar →', nb: 'Guider & artikler →', el: 'Οδηγοί και άρθρα →', ru: 'Руководства и статьи →',
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

// Etichetta della sezione che raccoglie guida, contesto regionale, guide e norme.
const DEEPEN_LABEL: Record<string, string> = {
  it: 'Approfondisci', en: 'Go deeper', de: 'Mehr dazu', fr: 'Approfondir', es: 'Profundizar',
  pt: 'Aprofundar', nl: 'Lees verder', sv: 'Läs vidare', da: 'Gå mere i dybden', nb: 'Gå dypere',
  el: 'Μάθε περισσότερα', ru: 'Подробнее',
};

const CLASSIC_CLOCKIN: Record<string, string> = {
  it: 'App di timbratura classica',
  en: 'Classic clock-in app',
  de: 'Klassische Stempel-App',
  fr: 'Application de pointage classique',
  es: 'App de fichaje clásica',
  pt: 'App clássica de picagem',
  nl: 'Klassieke registratie-app',
  da: 'Klassisk stemplings-app',
  sv: 'Klassisk stämplingsapp',
  nb: 'Klassisk stemplingsapp',
  el: 'Κλασική εφαρμογή χτυπήματος κάρτας',
  ru: 'Обычное приложение для отметки времени',
};

// Etichette dell'anteprima report che il dizionario danese non ha (senza, la pagina mostrerebbe l'italiano).
const MOCKUP_FALLBACK_DA = { operator: 'Medarbejder', opening: 'Start', closing: 'Slut' };
// Idem per lo svedese.
const MOCKUP_FALLBACK_SV = { operator: 'Medarbetare', opening: 'Start', closing: 'Slut' };
// Idem per il norvegese (bokmal).
const MOCKUP_FALLBACK_NB = { operator: 'Ansatt', opening: 'Start', closing: 'Slutt' };
// Idem per il russo: ru.json non ha ancora queste chiavi in settore_layout, e senza
// questo fallback la pagina russa mostrava "Operatore/Apertura/Chiusura" in italiano.
const MOCKUP_FALLBACK_RU = { operator: 'Оператор', opening: 'Начало', closing: 'Окончание' };
// Idem per il greco.
const MOCKUP_FALLBACK_EL = { operator: 'Εργαζόμενος', opening: 'Έναρξη', closing: 'Λήξη' };
const mockupFallback = (locale: string, key: 'operator' | 'opening' | 'closing', it: string) =>
  locale === 'da' ? MOCKUP_FALLBACK_DA[key]
    : locale === 'sv' ? MOCKUP_FALLBACK_SV[key]
    : locale === 'nb' ? MOCKUP_FALLBACK_NB[key]
    : locale === 'el' ? MOCKUP_FALLBACK_EL[key]
    : locale === 'ru' ? MOCKUP_FALLBACK_RU[key]
    : it;

export default function SettorePageLayout({ content, locale, settore, novita, heroVisual, children }: Props) {
  const trialLink = localizePath('/trial', locale);
  const pricingLink = localizePath('/pricing', locale);
  const dict = getDictionary(locale) as any;
  const sl = dict.settore_layout ?? {};
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

  // Freschezza per AI/Google: data vera dell'ultimo commit sul contenuto di
  // QUESTO settore (vedi src/lib/seo/content-dates.ts), non la data di build.
  const pageKey = `settori/${settore}`;
  const dateModified = updatedIsoFor(pageKey);
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: content.meta.title,
    description: content.meta.description,
    url: `https://geotapp.com/${locale}/settori/${settore}/`,
    dateModified,
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
    fr: { pulizie: 'Entreprises de nettoyage', installatori: 'Installateurs', sicurezza: 'Services de sécurité', elettricisti: 'Électriciens', idraulici: 'Plombiers', termoidraulici: 'Plombiers-chauffagistes', edilizia: 'BTP', impianti: 'Installations', manutenzione: 'Maintenance', 'impresa-di-pulizie': 'Entreprise de nettoyage' },
    es: { pulizie: 'Empresas de limpieza', installatori: 'Instaladores', sicurezza: 'Servicios de seguridad', elettricisti: 'Electricistas', idraulici: 'Fontaneros', termoidraulici: 'Fontaneros y calefactores', edilizia: 'Construcción', impianti: 'Instalaciones', manutenzione: 'Mantenimiento', 'impresa-di-pulizie': 'Empresa de limpieza' },
    pt: { pulizie: 'Empresas de limpeza', installatori: 'Instaladores', sicurezza: 'Serviços de segurança', elettricisti: 'Eletricistas', idraulici: 'Canalizadores', termoidraulici: 'Técnicos de aquecimento', edilizia: 'Construção', impianti: 'Instalações', manutenzione: 'Manutenção', 'impresa-di-pulizie': 'Empresa de limpeza' },
    nl: { pulizie: 'Schoonmaakbedrijven', installatori: 'Installateurs', sicurezza: 'Beveiligingsdiensten', elettricisti: 'Elektriciens', idraulici: 'Loodgieters', termoidraulici: 'CV-monteurs', edilizia: 'Bouw', impianti: 'Installaties', manutenzione: 'Onderhoud', 'impresa-di-pulizie': 'Schoonmaakbedrijf' },
    da: { pulizie: 'Rengøringsvirksomheder', installatori: 'Installatører', sicurezza: 'Sikkerhedstjenester', elettricisti: 'Elektrikere', idraulici: 'VVS-installatører', termoidraulici: 'Varmeinstallatører', edilizia: 'Byggeri', impianti: 'Installationer', manutenzione: 'Vedligeholdelse', 'impresa-di-pulizie': 'Rengøringsfirma' },
    sv: { pulizie: 'Städföretag', installatori: 'Installatörer', sicurezza: 'Säkerhetstjänster', elettricisti: 'Elektriker', idraulici: 'Rörmokare', termoidraulici: 'VVS-tekniker', edilizia: 'Byggnation', impianti: 'Installationer', manutenzione: 'Underhåll', 'impresa-di-pulizie': 'Städföretag' },
    nb: { pulizie: 'Renholdsbedrifter', installatori: 'Installatører', sicurezza: 'Sikkerhetstjenester', elettricisti: 'Elektrikere', idraulici: 'Rørleggere', termoidraulici: 'VVS-teknikere', edilizia: 'Bygg', impianti: 'Installasjoner', manutenzione: 'Vedlikehold', 'impresa-di-pulizie': 'Rengjøringsfirma' },
    el: { pulizie: 'Εταιρείες καθαρισμού', installatori: 'Εγκαταστάτες', sicurezza: 'Υπηρεσίες ασφάλειας', elettricisti: 'Ηλεκτρολόγοι', idraulici: 'Υδραυλικοί', termoidraulici: 'Τεχνικοί θέρμανσης', edilizia: 'Κατασκευές', impianti: 'Εγκαταστάσεις', manutenzione: 'Συντήρηση', 'impresa-di-pulizie': 'Εταιρεία καθαρισμού' },
    ru: { pulizie: 'Клининговые компании', installatori: 'Монтажники', sicurezza: 'Охранные службы', elettricisti: 'Электрики', idraulici: 'Сантехники', termoidraulici: 'Теплотехники', edilizia: 'Строительство', impianti: 'Инженерные системы', manutenzione: 'Техобслуживание', 'impresa-di-pulizie': 'Клининговая компания' },
  };
  const CROSS_TITLE: Record<string, string> = {
    it: 'Altri settori', en: 'Other sectors', de: 'Weitere Branchen',
    fr: 'Autres secteurs', es: 'Otros sectores', pt: 'Outros setores',
    nl: 'Andere sectoren', da: 'Andre sektorer', sv: 'Andra sektorer',
    nb: 'Andre sektorer',    el: 'Άλλοι κλάδοι', ru: 'Другие отрасли',
  };
  const otherNames = OTHER_SETTORI[locale] ?? OTHER_SETTORI.en;
  const otherSettori = (['pulizie', 'installatori', 'sicurezza', 'elettricisti', 'idraulici', 'termoidraulici', 'edilizia', 'manutenzione'] as SettoreSlug[]).filter((s) => s !== settore);

  // Risorse normative (audit internal linking 2026-05-23): stessa mappa di prima.
  const NORM_TITLE: Record<string, string> = {
    it: 'Approfondisci la normativa',
    en: 'Compliance deep-dive',
    de: 'Compliance vertiefen',
    fr: 'Approfondir la conformité',
    es: 'Profundizar en el cumplimiento',
    pt: 'Aprofundar a conformidade',
    nl: 'Verdiep u in de regelgeving',
    da: 'Læs mere om reglerne',
    sv: 'Läs mer om reglerna',
    nb: 'Les mer om reglene',
    el: 'Μάθε περισσότερα για τους κανόνες',
    ru: 'Углублённый анализ нормативов',
  };
  const NORM_LINKS: Record<string, { href: string; label: string }[]> = {
    it: [
      { href: '/blog/2025/11/20/geolocalizzazione-dipendenti-gdpr-guida-legale/',
        label: 'Geolocalizzazione dipendenti e GDPR: cosa è permesso e cosa no' },
      { href: '/blog/2026/04/22/fac-simile-informativa-gps-dipendenti-2026/',
        label: 'Fac-simile informativa GPS dipendenti 2026' },
      { href: '/blog/2026/09/18/accordo-sindacale-art-4-statuto-lavoratori/',
        label: 'Accordo sindacale art. 4: cosa scrivere davvero' },
    ],
    en: [
      { href: '/blog/en/2026/04/13/ico-employee-gps-tracking-uk-gdpr-2026/',
        label: 'UK GDPR and employee GPS tracking: what the ICO actually allows' },
    ],
    de: [
      { href: '/blog/de/2026/04/22/muster-datenschutzerklaerung-gps-mitarbeiterortung-2026/',
        label: 'DSGVO-Muster-Datenschutzerklärung: GPS-Mitarbeiterortung 2026' },
    ],
    fr: [
      { href: '/blog/fr/2026/06/04/geolocalisation-salaries-cnil/',
        label: 'Géolocalisation des salariés : ce que la CNIL autorise vraiment' },
      { href: '/blog/fr/2026/07/03/modele-information-geolocalisation-salaries-gps/',
        label: 'Modèle d’information géolocalisation salariés GPS 2026' },
      { href: '/blog/fr/2026/06/17/gps-salaries-cse-information-ne-suffit-pas/',
        label: 'GPS et CSE : informer les représentants ne suffit pas' },
    ],
    nl: [
      { href: '/blog/nl/2026/06/03/gps-tracking-medewerkers-avg/',
        label: 'GPS-tracking van medewerkers: de AVG-grenzen volgens de AP' },
      { href: '/blog/nl/2026/07/03/voorbeeld-privacyverklaring-gps-werknemers/',
        label: 'Voorbeeld privacyverklaring GPS werknemers, model 2026' },
      { href: '/blog/nl/2026/09/14/or-instemmingsrecht-personeelsvolgsysteem/',
        label: 'Wanneer moet de OR instemmen met een personeelsvolgsysteem' },
    ],
    // Spagnolo: nessun articolo sulle norme in produzione (i due sul RGPD/LOPDGDD sono fuori vetrina).
    // Lista vuota = il blocco non esce, invece di linkare l'articolo inglese sull'ICO.
    es: [],
    // Portoghese: i due articoli sulle norme (RGPD/CNPD) sono fuori vetrina. Lista vuota = il blocco non esce,
    // invece di linkare l'articolo inglese sull'ICO.
    pt: [],
    // Danese: la fonte giusta e' il Datatilsynet (non l'articolo inglese sull'ICO). URL gia' nella scheda Paese dk.ts,
    // verificato il 01/10/2026 (PDF, HTTP 200).
    da: [
      { href: 'https://www.datatilsynet.dk/Media/638348919997326341/Kontrol%20af%20medarbejdere.pdf',
        label: 'Datatilsynet: vejledning om kontrol af medarbejdere (PDF)' },
    ],
    // Svedese: la fonte giusta e' l'IMY (non l'articolo inglese sull'ICO). URL gia' nella scheda Paese se.ts (FONTE_IMY_GPS).
    // Nota: la chiave sv serve anche la Finlandia svedese, ma il link e' quello svedese.
    sv: [
      { href: 'https://www.imy.se/verksamhet/dataskydd/vi-guidar-dig/integritet-pa-jobbet/sa-far-du-som-arbetsgivare-anvanda-platstjanster-gps/',
        label: 'IMY: så får du som arbetsgivare använda platstjänster (GPS)' },
    ],
    // Norvegese: la fonte giusta e' il Datatilsynet (non l'articolo inglese sull'ICO). URL gia' nella scheda Paese no.ts
    // (FONTE_DATATILSYNET_VEICOLI). La chiave nb serve la Norvegia.
    nb: [
      { href: 'https://www.datatilsynet.no/personvern-pa-ulike-omrader/personvern-pa-arbeidsplassen/overvaking-kjoretoy/',
        label: 'Datatilsynet: overvåking av kjøretøy og GPS' },
    ],
    // Greco: nessun articolo del blog in greco e nessuna fonte normativa greca verificata qui.
    // Lista vuota = il blocco non esce, invece di linkare l'articolo inglese sull'ICO
    // (che per un lettore greco non ha rilevanza).
    el: [],
    // Russo: nessuna fonte normativa russa specifica e verificabile in produzione.
    // Lista vuota = il blocco non esce, invece di linkare l'articolo inglese sull'ICO
    // (che non ha alcuna rilevanza per un lettore russo/bielorusso/kazako).
    ru: [],
  };
  // Le 6 locale che NON hanno articoli normative tradotti ricadono su EN.
  const normLinks = NORM_LINKS[locale]
    ?? NORM_LINKS[locale.split('-')[0]]
    ?? NORM_LINKS.en;
  const normTitle = NORM_TITLE[locale]
    ?? NORM_TITLE[locale.split('-')[0]]
    ?? NORM_TITLE.en;

  const { titolo: guideTitolo, guide } = sezioneGuide(settore, locale, (normLinks ?? []).map((l) => l.href));
  const regionalItemsRaw = ALL_REGIONAL_FAQ[settore]?.[locale];
  const regionalItems = regionalItemsRaw ? localizeEnglishDeep(regionalItemsRaw, locale) : regionalItemsRaw;
  const regionalTitle = ALL_REGIONAL_FAQ_TITLES[settore]?.[locale] ?? 'Regional compliance';

  // Il blocco "cosa_cambia" della pagina sicurezza parla del modulo Emergenze, che ha la sua
  // fascia tra gli strumenti: qui non fa piu' una griglia a parte ma un approfondimento.
  const cambiaEmergenze = !!SETTORE_TOOLS[settore]?.tools.includes('emergenze');
  const cosaCambiaGenerico = content.cosa_cambia && !cambiaEmergenze ? content.cosa_cambia : null;
  const cosaCambiaEmergenze = content.cosa_cambia && cambiaEmergenze ? content.cosa_cambia : null;
  const deepenTitle = DEEPEN_LABEL[locale] ?? DEEPEN_LABEL[locale.split('-')[0]] ?? DEEPEN_LABEL.en;
  const hasGuida = !!(content.guida && content.guida.length > 0);
  const hasDeepen = hasGuida || !!content.regional_context || !!cosaCambiaEmergenze || content.features.items.length > 0 || guide.length > 0 || (normLinks && normLinks.length > 0);
  const hasProof = !!(content.trust || content.scenario || content.prova_visiva || content.testimonial.fonte);
  const hasConfronto = !!(content.prima_dopo || content.differenza);
  const proofTitle = content.trust?.title ?? content.prova_visiva?.title ?? content.scenario?.title ?? '';

  return (
    <div className="lp-l lp-settore">
      <Script
        id={`${settore}-breadcrumb-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />
      {/* JsonLd (plain <script>), NON <Script> di next/script: con strategy di default
          next/script non finisce nell'HTML SSR, solo iniettato lato client dopo
          l'idratazione. Un crawler/AI che non esegue JS non vedrebbe mai dateModified. */}
      <JsonLd data={webPageSchema} />
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

      {/* ── 1. HERO: titolo + schermata Flow con il telefono sovrapposto ── */}
      <section className="ph st-hero">
        <div className="crumb">
          <div className="w">
            <Link href={localizePath('/', locale)}>Home</Link> / <Link href={localizePath('/settori', locale)}>{sectorsLabel}</Link> / {sectorLabel}
          </div>
        </div>
        <div className={`w st-hero-grid${heroVisual ? '' : ' st-hero-solo'}`}>
          <div className="st-hero-text">
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
              {haPaginaRisorse(settore) && (
                <Link href={localizePath(`/settori/${settore}/risorse/`, locale)} className="b2">
                  {RISORSE_LABELS[locale] ?? RISORSE_LABELS['en']}
                </Link>
              )}
            </div>
            <p className="st-hero-note">{content.hero.cta_note}</p>
            {content.pricing_hint && (
              <p className="st-hero-price">
                {content.pricing_hint.label}{' '}
                <b>{standardRate.formatted}</b>{' '}
                {content.pricing_hint.per} · {content.pricing_hint.note}
              </p>
            )}
          </div>
          {heroVisual ? <div className="st-hero-vis">{heroVisual}</div> : null}
        </div>
      </section>

      {/* ── 2. IL PROBLEMA: tre punti, compatti (non sono una sequenza: niente numeri) ── */}
      <section className="sec st-sec">
        <div className="w">
          <div className="st-head">
            <h2>{content.pain.title}</h2>
            <p>{sl.pain_subtitle ?? "Clock-in apps record. They don't seal the proof. There's an enormous difference, and you feel it the moment a dispute arises."}</p>
          </div>
          <div className="st-pain">
            {content.pain.items.map((item, i) => (
              <div key={i} className="st-pain-i">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. GLI STRUMENTI DEL TUO SETTORE (le schermate vere, componente server) ── */}
      {novita}

      {/* ── 4. COME FUNZIONA: una sequenza vera, numerata ── */}
      <section className="sec st-sec">
        <div className="w">
          <div className="st-head">
            <h2>{content.workflow.title}</h2>
            <p>{content.workflow.subtitle}</p>
          </div>
          <ol className="steps st-steps">
            {content.workflow.steps.map((step, i) => (
              <li key={i}>
                <b>{step.title}</b>
                <p>{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 5. LA PROVA: rapportino sigillato e caso reale in un'unica sezione ── */}
      {hasProof && (
        <section className="sec st-alt st-proof">
          <div className="w">
            <div className="st-head">
              <h2>{proofTitle.split(/(?<=[.!?])\s+/).map((frase, i) => (i === 0 ? frase : <span key={i}><br />{frase}</span>))}</h2>
              {content.trust ? (
                <div>
                  <p>{content.trust.body}</p>
                  <div className="st-badge"><GeoBadge>{content.trust.badge}</GeoBadge></div>
                </div>
              ) : content.prova_visiva ? (
                <p>{content.prova_visiva.subtitle}</p>
              ) : null}
            </div>

            {content.prova_visiva && (
              <>
                {content.trust ? (
                  <p className="st-sub">{content.prova_visiva.title} <span>{content.prova_visiva.subtitle}</span></p>
                ) : null}
                <div className="st-mocks">
                  <div className="mock">
                    <div className="row"><span><Clock size={13} style={{ display: 'inline', marginRight: 6, verticalAlign: -2, opacity: .7 }} />{sl.mockup_title ?? 'Job open'}</span><span>08:47</span></div>
                    <div className="row"><span><MapPin size={13} style={{ display: 'inline', marginRight: 6, verticalAlign: -2, opacity: .7 }} />{sl.mockup_gps ?? 'Position at clock-in'}</span><span>45.4642°N</span></div>
                    <div className="row"><span><Camera size={13} style={{ display: 'inline', marginRight: 6, verticalAlign: -2, opacity: .7 }} />{sl.mockup_photos ?? 'Photos'}</span><span>{sl.mockup_photos_count ?? '3 photos'}</span></div>
                  </div>
                  <div className="mock">
                    <div className="row"><span>{sl.mockup_operator ?? mockupFallback(locale, 'operator', 'Operatore')}</span><span>Mario R.</span></div>
                    <div className="row"><span>{sl.mockup_opening ?? mockupFallback(locale, 'opening', 'Apertura')}</span><span>08:47:03</span></div>
                    <div className="row"><span>{sl.mockup_closing ?? mockupFallback(locale, 'closing', 'Chiusura')}</span><span>11:22:41</span></div>
                    <p style={{ marginTop: 16, fontSize: 13, color: 'var(--lime)', fontWeight: 600 }}>
                      <ShieldCheck size={14} style={{ display: 'inline', marginRight: 6, verticalAlign: -2 }} />
                      {sl.mockup_sealed ?? 'Sealed after closure'}
                    </p>
                  </div>
                  <div className="mock">
                    <div className="row"><span>Luigi B.</span><span>{sl.mockup_status_active ?? 'Active'}</span></div>
                    <div className="row"><span>Sara M.</span><span>{sl.mockup_status_active ?? 'Active'}</span></div>
                    <div className="row"><span>Marco T.</span><span>{sl.mockup_status_completed ?? 'Completed'}</span></div>
                    <p style={{ marginTop: 16, fontSize: 13, color: 'rgba(247,249,252,.6)' }}>{sl.mockup_status_summary ?? '4 operators active on 6 sites'}</p>
                  </div>
                </div>
              </>
            )}

            {content.scenario && (
              <div className="st-case">
                {content.scenario.title !== proofTitle ? <p className="kk k">{content.scenario.title}</p> : null}
                <div className="qt"><p>&ldquo;{content.scenario.body}&rdquo;</p></div>
                <p className="st-resolution">{content.scenario.resolution}</p>
              </div>
            )}

            {/* testimonianza: solo se ha una fonte verificabile */}
            {content.testimonial.fonte && (
              <div className="qt st-testimonial">
                <p>&ldquo;{content.testimonial.quote}&rdquo;</p>
                <cite>
                  <b>{content.testimonial.author}</b>
                  <span>{content.testimonial.role}</span>
                </cite>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── 6. UN SOLO CONFRONTO: prima/dopo + tabella; il resto in <details> ── */}
      {hasConfronto && (
        <section className="sec st-sec">
          <div className="w">
            <div className="st-head st-head-one">
              <h2>{content.prima_dopo?.title ?? content.differenza?.title}</h2>
            </div>
            {content.prima_dopo && (
              <div className="st-ba">
                <div className="st-ba-c">
                  <p className="kk k">{sl.before ?? 'Before'}</p>
                  <ul className="rows">
                    {content.prima_dopo.prima.map((x, i) => <li key={i}>{x}</li>)}
                  </ul>
                </div>
                <div className="st-ba-c st-ba-after">
                  <p className="kk k">{sl.after ?? 'With GeoTapp'}</p>
                  <ul className="rows">
                    {content.prima_dopo.dopo.map((x, i) => <li key={i}>{x}</li>)}
                  </ul>
                </div>
              </div>
            )}
            {content.differenza && (
              <div className="st-table">
                {content.prima_dopo ? (
                  <div className="st-table-h">
                    <h3>{content.differenza.title}</h3>
                    <p>{content.differenza.subtitle}</p>
                  </div>
                ) : (
                  <p className="st-table-sub">{content.differenza.subtitle}</p>
                )}
                <CmpTable
                  headerLabel={CLASSIC_CLOCKIN[locale.split('-')[0]] ?? CLASSIC_CLOCKIN.en}
                  rows={content.differenza.rows.map((r) => ({ label: r.label, other: r.competitor, geotapp: r.geotapp }))}
                />
              </div>
            )}
            {(content.non_gestionale || cosaCambiaGenerico) && (
              <div className="st-more">
                {content.non_gestionale && (
                  <details className="st-d">
                    <summary><h3>{content.non_gestionale.title}</h3></summary>
                    <div className="st-d-b">
                      <p>{content.non_gestionale.subtitle}</p>
                      <CmpTable
                        headerLabel={sl.classic_app ?? 'Generic app / Spreadsheet'}
                        rows={content.non_gestionale.items.map((r) => ({ label: r.label, other: r.gestionale, geotapp: r.geotapp }))}
                      />
                    </div>
                  </details>
                )}
                {cosaCambiaGenerico && (
                  <details className="st-d">
                    <summary><h3>{cosaCambiaGenerico.title}</h3></summary>
                    <div className="st-d-b">
                      <dl className="st-dl">
                        {cosaCambiaGenerico.items.map((item, i) => (
                          <div key={i}><dt>{item.title}</dt><dd>{item.desc}</dd></div>
                        ))}
                      </dl>
                    </div>
                  </details>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── 7. APPROFONDISCI: testo di guida, contesto regionale, guide e norme (nel DOM, apribili) ── */}
      {hasDeepen && (
        <section className="sec st-alt st-deep" id="approfondisci">
          <div className="w">
            <div className="st-head st-head-one"><h2>{deepenTitle}</h2></div>
            <div className="st-more">
              {content.features.items.length > 0 && (
                <details className="st-d">
                  <summary><h3>{content.features.title}</h3></summary>
                  <div className="st-d-b">
                    <dl className="st-dl st-dl-2">
                      {content.features.items.map((item, i) => (
                        <div key={i}><dt>{item.title}</dt><dd>{item.desc}</dd></div>
                      ))}
                    </dl>
                  </div>
                </details>
              )}
              {cosaCambiaEmergenze && (
                <details className="st-d">
                  <summary><h3>{cosaCambiaEmergenze.title}</h3></summary>
                  <div className="st-d-b">
                    <dl className="st-dl st-dl-2">
                      {cosaCambiaEmergenze.items.map((item, i) => (
                        <div key={i}><dt>{item.title}</dt><dd>{item.desc}</dd></div>
                      ))}
                    </dl>
                  </div>
                </details>
              )}
              {hasGuida && content.guida!.map((g, i) => (
                <details key={`g-${i}`} className="st-d">
                  <summary><h3>{g.h2}</h3></summary>
                  <div className="st-d-b st-prose">
                    {g.paras.map((para, j) => <p key={j}>{para}</p>)}
                    {g.link && <p><Link href={g.link.href}>{g.link.label} &rarr;</Link></p>}
                  </div>
                </details>
              ))}
              {content.regional_context && (
                <details className="st-d">
                  <summary><h3>{content.regional_context.title}</h3></summary>
                  <div className="st-d-b st-prose">
                    {content.regional_context.paras.map((para, i) => <p key={i}>{para}</p>)}
                  </div>
                </details>
              )}
              {guide.length > 0 && (
                <details className="st-d">
                  <summary><h3>{guideTitolo}</h3></summary>
                  <div className="st-d-b">
                    <ul className="rows">
                      {guide.map((g) => (
                        <li key={g.href}><Link href={g.href}>{g.titolo} &rarr;</Link></li>
                      ))}
                    </ul>
                  </div>
                </details>
              )}
              {normLinks && normLinks.length > 0 && (
                <details className="st-d">
                  <summary><h3>{normTitle}</h3></summary>
                  <div className="st-d-b">
                    <ul className="rows">
                      {normLinks.map((link, i) => (
                        <li key={`norm-${i}`}><Link href={link.href}>{link.label} &rarr;</Link></li>
                      ))}
                    </ul>
                  </div>
                </details>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── 8. FAQ (con quelle regionali) ── */}
      <section className="fq st-faq">
        <div className="w"><div className="g">
          <h2>{content.faq.title}</h2>
          <div ref={fqRef}>
            <p style={{ marginBottom: 20, color: '#475467' }}>{content.faq.subtitle}</p>
            {content.faq.items.map((item, i) => (
              <details key={i} open={i === 0}>
                <summary><h3>{item.q}</h3></summary>
                <div className="ct"><p>{item.a}</p></div>
              </details>
            ))}

            {regionalItems && regionalItems.length > 0 && (
              <>
                <h3 className="st-faq-reg">{regionalTitle}</h3>
                {regionalItems.map((item, i) => (
                  <details key={`regional-${i}`}>
                    <summary><h3>{item.q}</h3></summary>
                    <div className="ct"><p>{item.a}</p></div>
                  </details>
                ))}
              </>
            )}
          </div>
        </div></div>
      </section>

      {/* ── DEMO REPORT (nascosto finche' non c'e' un pacchetto valido: vedi lib/demo-report.ts) ── */}
      {DEMO_REPORT_DISPONIBILE && (
      <section className="sec st-alt">
        <div className="wn">
          <p className="kk k" style={{ textAlign: 'center', marginBottom: 28 }}>{sl.see_real_report ?? 'See a real report'}</p>
          <DemoReportBanner />
        </div>
      </section>
      )}

      {/* ── 9. CTA FINALE, unica ── */}
      <section className="end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/bg2.webp" alt="" aria-hidden="true" loading="lazy" />
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
            <Link href={`/${locale}/roi-calculator/`} className="b2 st-roi">{sl.roi_cta ?? 'Calculate my ROI'}</Link>
          </div>
          <p style={{ marginTop: 20, fontSize: 13.5, color: 'rgba(247,249,252,.55)' }}>
            {sl.cta_note ?? 'No lock-in. No contract. We set up on your real case.'}
          </p>
        </div>
      </section>

      {/* ── 10. altri settori + citati su: piccoli, in fondo ── */}
      <section className="st-others">
        <div className="w">
          <p className="kk k">{CROSS_TITLE[locale] ?? 'Other sectors'}</p>
          <div className="picker">
            {otherSettori.map((s) => (
              <Link key={s} href={localizePath(`/settori/${s}`, locale)}>{otherNames[s]}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── citati su: solo stampa vera. "Presente su" (directory) resta nel footer, non si ripete qui ── */}
      <section className="dirs st-dirs">
        <div className="w"><p className="kk k dirs-kk">{featuredLabel(locale)}</p></div>
        <div className="host">
          <FeaturedIn locale={locale} />
        </div>
      </section>

      <UpdatedOnLine pageKey={pageKey} locale={locale} />

      {children}
    </div>
  );
}
