

import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import FlowPage from '../../../products/geotapp-flow/page';
import BlogHighlights from '@/components/BlogHighlights';
import SettoriLinks from '@/components/SettoriLinks';
import { type AppLocale } from '@/lib/i18n/config';
import {
  EUR_PRICES,
  convertEurToLocale,
  getCurrencyForLocale,
} from '@/lib/pricing';
import { REVIEWS } from '@/data/reviews';

const flowMeta: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp Flow - Gestione Operativa Interventi e Squadre', description: 'Sistema operativo per aziende con tecnici sul campo: commesse, attività, avanzamento e report verificabili in tempo reale.' },
  en: { title: 'GeoTapp Flow - Field Operations Management', description: 'Operational hub for companies with field technicians: manage jobs, assign tasks, track progress, generate verifiable reports.' },
  de: { title: 'GeoTapp Flow - Operative Einsatzverwaltung', description: 'Das operative System für Unternehmen mit Außendiensttechnikern. Aufträge verwalten, Aufgaben zuweisen, prüfbare Berichte erstellen.' },
  fr: { title: 'GeoTapp Flow - Gestion Opérationnelle des Interventions', description: 'Système opérationnel pour entreprises avec techniciens terrain : commandes, tâches, suivi et rapports vérifiables en temps réel.' },
  es: { title: 'GeoTapp Flow - Gestión Operativa de Intervenciones', description: 'GeoTapp Flow es el sistema operativo para empresas con técnicos en campo. Gestiona pedidos, asigna tareas y genera informes verificables en tiempo real.' },
  nl: { title: 'GeoTapp Flow - Operationeel Beheer van Interventies', description: 'GeoTapp Flow is het operationele systeem voor bedrijven met buitendiensttechnici. Beheer opdrachten, wijs taken toe en maak verifieerbare rapporten.' },
  pt: { title: 'GeoTapp Flow - Gestão Operacional de Intervenções', description: 'GeoTapp Flow é o sistema operacional para empresas com técnicos de campo. Gerencie ordens de serviço, atribua tarefas e produza relatórios verificáveis.' },
  sv: { title: 'GeoTapp Flow - Operativ Hantering av Interventioner', description: 'GeoTapp Flow är det operativa systemet för företag med fälttekniker. Hantera uppdrag, tilldela uppgifter och skapa verifierbara rapporter.' },
  da: { title: 'GeoTapp Flow - Operationel Håndtering af Interventioner', description: 'GeoTapp Flow er det operative system for virksomheder med serviceteknikere. Administrer opgaver, tildel arbejde og generer verificerbare rapporter.' },
  nb: { title: 'GeoTapp Flow - Operativ Håndtering av Intervensjoner', description: 'GeoTapp Flow er det operative systemet for bedrifter med serviceteknikere. Administrer oppdrag, tildel oppgaver og generer verifiserbare rapporter.' },
  ru: { title: 'GeoTapp Flow, Оперативное Управление Интервенциями', description: 'GeoTapp Flow, операционная система для компаний с выездными техниками. Управляйте заказами, назначайте задачи и формируйте проверяемые отчёты.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = flowMeta[locale] ?? flowMeta['it'];
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: buildLocaleAlternates(locale, '/products/geotapp-flow/'),
    openGraph: {
      title: m.title,
      description: m.description,
      url: `https://geotapp.com/${locale}/products/geotapp-flow/`,
      type: 'website',
      images: [{ url: '/logoFlow.webp', width: 1200, height: 630, alt: m.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.description,
    },
  };
}

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const FLOW_FAQ: Record<string, object> = {
  it: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Cos\'è GeoTapp Flow?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp Flow è la piattaforma di gestione operativa per aziende con tecnici sul campo. Permette di creare commesse, assegnare attività, monitorare l\'avanzamento e produrre report verificabili in tempo reale dall\'ufficio.' } },
      { '@type': 'Question', name: 'GeoTapp Flow funziona offline?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker (l\'app mobile per i tecnici) funziona offline e sincronizza i dati GPS e le foto appena torna la connessione. Flow (il pannello di gestione) richiede connessione internet.' } },
      { '@type': 'Question', name: 'GeoTapp Flow si integra con altri software gestionali?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp Flow supporta l\'export dei dati per la fatturazione e la gestione paghe. L\'integrazione diretta con gestionali terzi è disponibile tramite richiesta.' } },
      { '@type': 'Question', name: 'Quanti tecnici può gestire GeoTapp Flow?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp Flow scala da team di 3 persone fino a 300+ operatori su più siti. I piani Team e Business includono funzionalità avanzate per team di grandi dimensioni.' } },
      { '@type': 'Question', name: 'I report generati da Flow sono contestabili dal cliente?', acceptedAnswer: { '@type': 'Answer', text: 'No. I report GeoTapp sono sigillati crittograficamente e verificabili tramite GeoTapp Verifier. Il cliente può verificare l\'integrità dei dati in modo indipendente, senza accesso al tuo account.' } },
    ],
  },
  en: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is GeoTapp Flow?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp Flow is the operational management platform for companies with field technicians. It lets you create jobs, assign tasks, monitor progress and produce verifiable reports in real time from the office.' } },
      { '@type': 'Question', name: 'Does GeoTapp Flow work offline?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker (the mobile app for technicians) works offline and syncs GPS data and photos when connectivity is restored. Flow (the management panel) requires an internet connection.' } },
      { '@type': 'Question', name: 'Does GeoTapp Flow integrate with other management software?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp Flow supports data export for billing and payroll. Direct integration with third-party management systems is available on request.' } },
      { '@type': 'Question', name: 'How many technicians can GeoTapp Flow manage?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp Flow scales from teams of 3 to 300+ operators across multiple sites. Team and Business plans include advanced features for larger teams.' } },
      { '@type': 'Question', name: 'Can clients dispute reports generated by Flow?', acceptedAnswer: { '@type': 'Answer', text: 'No. GeoTapp reports are cryptographically sealed and verifiable via GeoTapp Verifier. Clients can independently verify data integrity without accessing your account.' } },
    ],
  },
  de: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist GeoTapp Flow?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp Flow ist die operative Verwaltungsplattform für Unternehmen mit Außendiensttechnikern. Sie können Aufträge erstellen, Aufgaben zuweisen, Fortschritte überwachen und verifizierbare Berichte in Echtzeit erstellen.' } },
      { '@type': 'Question', name: 'Funktioniert GeoTapp Flow offline?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker (die mobile App für Techniker) funktioniert offline und synchronisiert GPS-Daten und Fotos, sobald die Verbindung wiederhergestellt ist. Flow benötigt eine Internetverbindung.' } },
      { '@type': 'Question', name: 'Integriert sich GeoTapp Flow mit anderer Verwaltungssoftware?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp Flow unterstützt den Datenexport für Abrechnung und Lohnbuchhaltung. Direkte Integration mit Drittsystemen ist auf Anfrage verfügbar.' } },
      { '@type': 'Question', name: 'Wie viele Techniker kann GeoTapp Flow verwalten?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp Flow skaliert von 3 bis 300+ Mitarbeitern. Die Team- und Business-Pläne bieten erweiterte Funktionen für größere Teams.' } },
      { '@type': 'Question', name: 'Können Kunden von Flow erstellte Berichte anfechten?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. GeoTapp-Berichte sind kryptographisch versiegelt und über GeoTapp Verifier verifizierbar.' } },
    ],
  },
};

const FLOW_DESCRIPTION: Record<string, string> = {
  it: 'GeoTapp Flow è il sistema operativo per aziende con tecnici sul campo: crea commesse, assegna attività, monitora avanzamento e produce report sigillati e verificabili in tempo reale.',
  en: 'GeoTapp Flow is the operational management platform for companies with field technicians: create jobs, assign tasks, monitor progress and produce sealed, verifiable reports in real time.',
  de: 'GeoTapp Flow ist die operative Verwaltungsplattform für Unternehmen mit Außendiensttechnikern: Aufträge erstellen, Aufgaben zuweisen, Fortschritt überwachen und versiegelte, verifizierbare Berichte in Echtzeit erstellen.',
  fr: "GeoTapp Flow est la plateforme de gestion opérationnelle pour entreprises avec techniciens terrain : créer des commandes, assigner des tâches, suivre l'avancement et produire des rapports scellés vérifiables en temps réel.",
  es: 'GeoTapp Flow es la plataforma de gestión operativa para empresas con técnicos de campo: crea órdenes, asigna tareas, supervisa el progreso y produce informes sellados verificables en tiempo real.',
  nl: 'GeoTapp Flow is het operationele beheersplatform voor bedrijven met buitendiensttechnici: maak opdrachten, wijs taken toe, volg voortgang en produceer verzegelde, verifieerbare rapporten in realtime.',
  pt: 'GeoTapp Flow é a plataforma de gestão operacional para empresas com técnicos de campo: crie ordens, atribua tarefas, monitorize o progresso e produza relatórios selados verificáveis em tempo real.',
  da: 'GeoTapp Flow er den operationelle administrationsplatform til virksomheder med serviceteknikere: opret opgaver, tildel arbejde, overvåg fremskridt og generér forseglede, verificerbare rapporter i realtid.',
  sv: 'GeoTapp Flow är den operativa hanteringsplattformen för företag med fälttekniker: skapa uppdrag, tilldela uppgifter, övervaka framsteg och generera förseglade, verifierbara rapporter i realtid.',
  nb: 'GeoTapp Flow er den operative administrasjonsplattformen for bedrifter med serviceteknikere: opprett oppdrag, tildel oppgaver, overvåk fremdrift og generer forseglede, verifiserbare rapporter i sanntid.',
  ru: 'GeoTapp Flow, операционная платформа управления для компаний с выездными техниками: создавайте заказы, назначайте задачи, отслеживайте прогресс и формируйте запечатанные проверяемые отчёты в реальном времени.',
};

const FLOW_FEATURES: Record<string, string[]> = {
  it: [
    'Gestione commesse e interventi multi-sito',
    'Assegnazione attività ai tecnici sul campo',
    'Avanzamento lavori in tempo reale',
    'Report sigillati crittograficamente e verificabili',
    'Prove fotografiche con GPS e timestamp',
    'Integrazione nativa con GeoTapp TimeTracker e Verifier',
    'Export dati per fatturazione e paghe',
    'GDPR compliant, informativa GPS firmata digitalmente',
  ],
  en: [
    'Multi-site job and intervention management',
    'Task assignment to field technicians',
    'Real-time job progress tracking',
    'Cryptographically sealed, independently verifiable reports',
    'Photo evidence with GPS and timestamp',
    'Native integration with GeoTapp TimeTracker and Verifier',
    'Data export for billing and payroll',
    'GDPR compliant, digitally signed GPS privacy notice',
  ],
  de: [
    'Auftrags- und Einsatzverwaltung über mehrere Standorte',
    'Aufgabenzuweisung an Außendiensttechniker',
    'Echtzeit-Fortschrittsverfolgung',
    'Kryptographisch versiegelte, unabhängig verifizierbare Berichte',
    'Fotobeweise mit GPS und Zeitstempel',
    'Native Integration mit GeoTapp TimeTracker und Verifier',
    'Datenexport für Abrechnung und Lohn',
    'DSGVO-konform, digital signierte GPS-Datenschutzerklärung',
  ],
};

function buildFlowSoftware(locale: AppLocale) {
  const soloMonthly = convertEurToLocale(EUR_PRICES.flow.solo.monthly, locale);
  const description = FLOW_DESCRIPTION[locale] ?? FLOW_DESCRIPTION.en;
  const featureList = FLOW_FEATURES[locale] ?? FLOW_FEATURES.en;
  // Real reviews from the data file refer to "GeoTapp Flow" (see buildReviewsSchema).
  // Attach the aggregateRating to the Flow product page only, never invent numbers.
  const reviews = REVIEWS;
  const aggregateRating =
    reviews.length > 0
      ? {
          '@type': 'AggregateRating',
          ratingValue: (
            reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
          ).toFixed(1),
          reviewCount: String(reviews.length),
          bestRating: '5',
          worstRating: '1',
        }
      : undefined;
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `https://geotapp.com/${locale}/products/geotapp-flow/#software`,
    name: 'GeoTapp Flow',
    operatingSystem: 'Web, Android, iOS',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Field Service Management',
    description,
    featureList,
    image: 'https://geotapp.com/logoFlow.webp',
    screenshot: [
      'https://geotapp.com/screen_dashboard.webp',
      'https://geotapp.com/screen_live_map.webp',
      'https://geotapp.com/screenshots/flow-live-map.webp',
    ],
    inLanguage: locale,
    offers: {
      '@type': 'Offer',
      price: soloMonthly.amount.toFixed(2),
      priceCurrency: getCurrencyForLocale(locale),
      availability: 'https://schema.org/InStock',
      url: `https://geotapp.com/${locale}/trial/`,
      description: `14-day free trial. Paid plans from ${soloMonthly.formatted} per month (Flow Start).`,
    },
    publisher: { '@id': 'https://geotapp.com/#organization' },
    url: `https://geotapp.com/${locale}/products/geotapp-flow/`,
    ...(aggregateRating ? { aggregateRating } : {}),
  };
}

type Props = { params: Promise<{ locale: string }> };

export default async function LocaleFlowPage({ params }: Props) {
  const { locale } = await params;
  const faq = FLOW_FAQ[locale] ?? FLOW_FAQ['en'];
  const software = buildFlowSoftware(locale as AppLocale);
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      { '@type': 'ListItem', position: 2, name: 'GeoTapp Flow', item: `https://geotapp.com/${locale}/products/geotapp-flow/` },
    ],
  };
  return (
    <>
      <link rel="preload" as="image" href="/logoFlow.webp" fetchPriority="high" />
      <link rel="preload" as="image" href="/screen_dashboard.webp" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {faq && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }} />
      <FlowPage />
      <BlogHighlights locale={locale as AppLocale} categoryId={65} />
      <SettoriLinks locale={locale as AppLocale} settori={['installatori']} />
    </>
  );
}
