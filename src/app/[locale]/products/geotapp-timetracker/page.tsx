

import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import AppPage from '../../../products/geotapp-timetracker/page';
import BlogHighlights from '@/components/BlogHighlights';
import SettoriLinks from '@/components/SettoriLinks';
import { type AppLocale } from '@/lib/i18n/config';
import {
  EUR_PRICES,
  convertEurToLocale,
  getCurrencyForLocale,
} from '@/lib/pricing';

const appMeta: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp TimeTracker — App Timbratura GPS per Tecnici sul Campo', description: 'GeoTapp TimeTracker è l\'app mobile per tecnici che registra presenze, attività e prove fotografiche dal campo. Timbratura GPS, report settimanali e sincronizzazione in tempo reale con Flow.' },
  en: { title: 'GeoTapp TimeTracker — GPS Time Tracking App for Field Workers', description: 'GeoTapp TimeTracker is the mobile app for field technicians. GPS clock-in/out, photo evidence, weekly reports and real-time sync with the Flow management platform.' },
  de: { title: 'GeoTapp TimeTracker — GPS-Zeiterfassungs-App für Außendienstmitarbeiter', description: 'GeoTapp TimeTracker ist die mobile App für Außendiensttechniker. GPS-Zeiterfassung, Fotobeweise, Wochenberichte und Echtzeitsynchronisation mit Flow.' },
  fr: { title: 'GeoTapp TimeTracker — App de Pointage GPS pour Techniciens Terrain', description: 'GeoTapp TimeTracker est l\'application mobile pour les techniciens terrain. Pointage GPS, preuves photographiques, rapports hebdomadaires et synchronisation en temps réel avec Flow.' },
  es: { title: 'GeoTapp TimeTracker — App de Fichaje GPS para Técnicos de Campo', description: 'GeoTapp TimeTracker es la app móvil para técnicos de campo. Fichaje GPS, pruebas fotográficas, informes semanales y sincronización en tiempo real con Flow.' },
  nl: { title: 'GeoTapp TimeTracker — GPS Tijdregistratie App voor Buitendienstmedewerkers', description: 'GeoTapp TimeTracker is de mobiele app voor buitendiensttechnici. GPS in- en uitklokken, fotobewijs, wekelijkse rapporten en realtime synchronisatie met Flow.' },
  pt: { title: 'GeoTapp TimeTracker — App de Ponto GPS para Técnicos de Campo', description: 'GeoTapp TimeTracker é o app móvel para técnicos de campo. Registo de presença GPS, provas fotográficas, relatórios semanais e sincronização em tempo real com o Flow.' },
  sv: { title: 'GeoTapp TimeTracker — GPS Tidregistrerings-App för Fälttekniker', description: 'GeoTapp TimeTracker är mobilappen för fälttekniker. GPS in- och utcheckning, fotodokumentation, veckorapporter och realtidssynkronisering med Flow.' },
  da: { title: 'GeoTapp TimeTracker — GPS Tidsregistrerings-App til Serviceteknikere', description: 'GeoTapp TimeTracker er mobilappen til serviceteknikere. GPS ind- og udtjekning, fotodokumentation, ugentlige rapporter og realtidssynkronisering med Flow.' },
  nb: { title: 'GeoTapp TimeTracker — GPS Tidsregistrerings-App for Serviceteknikere', description: 'GeoTapp TimeTracker er mobilappen for serviceteknikere. GPS inn- og utsjekking, fotodokumentasjon, ukentlige rapporter og sanntidssynkronisering med Flow.' },
  ru: { title: 'GeoTapp TimeTracker — GPS-приложение учёта рабочего времени для выездных техников', description: 'GeoTapp TimeTracker — мобильное приложение для выездных техников. GPS отметки, фотодоказательства, еженедельные отчёты и синхронизация с Flow в реальном времени.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = appMeta[locale] ?? appMeta['it'];
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: buildLocaleAlternates(locale, '/products/geotapp-timetracker/'),
    openGraph: {
      title: m.title,
      description: m.description,
      url: `https://geotapp.com/${locale}/products/geotapp-timetracker/`,
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

const APP_FAQ: Record<string, object> = {
  it: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Cos\'è GeoTapp TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker è l\'app mobile per tecnici che registra presenze, attività e prove fotografiche direttamente dal campo. La timbratura GPS è verificabile da chiunque tramite GeoTapp Verifier.' } },
      { '@type': 'Question', name: 'GeoTapp TimeTracker funziona senza internet?', acceptedAnswer: { '@type': 'Answer', text: 'Sì. L\'app funziona offline e salva tutte le timbrature GPS, le foto e le note localmente. I dati vengono sincronizzati con GeoTapp Flow non appena torna la connessione.' } },
      { '@type': 'Question', name: 'Come si differenzia GeoTapp TimeTracker da una semplice app di timbratura?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker non è solo una timbratura: ogni timbro è certificato con GPS reale, hash crittografico e prove fotografiche. Il report è verificabile indipendentemente — non modificabile nemmeno dall\'amministratore.' } },
      { '@type': 'Question', name: 'GeoTapp TimeTracker funziona su Android e iOS?', acceptedAnswer: { '@type': 'Answer', text: 'Sì. L\'app è disponibile su Google Play Store e Apple App Store. Funziona su tutti i dispositivi Android (6.0+) e iOS (14+).' } },
      { '@type': 'Question', name: 'GeoTapp TimeTracker è conforme al GDPR?', acceptedAnswer: { '@type': 'Answer', text: 'Sì. GeoTapp registra la posizione GPS solo al momento della timbratura — non in modo continuo. Il dipendente può vedere tutti i propri dati registrati in qualsiasi momento.' } },
    ],
  },
  en: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is GeoTapp TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker is the mobile app for field technicians that records attendance, activities and photo evidence directly from the field. GPS clock-ins are verifiable by anyone via GeoTapp Verifier.' } },
      { '@type': 'Question', name: 'Does GeoTapp TimeTracker work without internet?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The app works offline and saves all GPS clock-ins, photos and notes locally. Data syncs with GeoTapp Flow as soon as connectivity is restored.' } },
      { '@type': 'Question', name: 'How does GeoTapp TimeTracker differ from a simple time-tracking app?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker is not just time tracking — every clock-in is certified with real GPS, a cryptographic hash and photo evidence. The report is independently verifiable and cannot be modified even by the administrator.' } },
      { '@type': 'Question', name: 'Does GeoTapp TimeTracker work on Android and iOS?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The app is available on Google Play Store and Apple App Store. Works on all Android (6.0+) and iOS (14+) devices.' } },
      { '@type': 'Question', name: 'Is GeoTapp TimeTracker GDPR compliant?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. GeoTapp records GPS location only at clock-in time — not continuously. Employees can view all their recorded data at any time.' } },
    ],
  },
  de: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist GeoTapp TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker ist die mobile App für Außendiensttechniker, die Anwesenheit, Aktivitäten und Fotobeweise direkt im Feld erfasst. GPS-Zeiterfassungen sind über GeoTapp Verifier für jeden verifizierbar.' } },
      { '@type': 'Question', name: 'Funktioniert GeoTapp TimeTracker ohne Internet?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Die App funktioniert offline und speichert alle GPS-Stempelungen, Fotos und Notizen lokal. Daten synchronisieren mit GeoTapp Flow, sobald die Verbindung wiederhergestellt ist.' } },
      { '@type': 'Question', name: 'Wie unterscheidet sich GeoTapp TimeTracker von einer einfachen Zeiterfassungs-App?', acceptedAnswer: { '@type': 'Answer', text: 'Jede Stempelung ist mit echtem GPS, kryptographischem Hash und Fotobeweisen zertifiziert — unveränderbar und unabhängig verifizierbar.' } },
      { '@type': 'Question', name: 'Funktioniert GeoTapp TimeTracker auf Android und iOS?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Die App ist im Google Play Store und Apple App Store verfügbar.' } },
      { '@type': 'Question', name: 'Ist GeoTapp TimeTracker DSGVO-konform?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp erfasst den GPS-Standort nur beim Stempeln, nicht kontinuierlich.' } },
    ],
  },
};

const APP_DESCRIPTION: Record<string, string> = {
  it: "GeoTapp TimeTracker è l'app mobile per tecnici sul campo: timbratura GPS verificata, prove fotografiche, report settimanali e sincronizzazione in tempo reale con GeoTapp Flow. Funziona offline.",
  en: 'GeoTapp TimeTracker is the mobile app for field technicians: verified GPS clock-in, photo evidence, weekly reports and real-time sync with GeoTapp Flow. Works offline.',
  de: 'GeoTapp TimeTracker ist die mobile App für Außendiensttechniker: verifizierte GPS-Zeiterfassung, Fotobeweise, Wochenberichte und Echtzeitsynchronisation mit GeoTapp Flow. Funktioniert offline.',
  fr: "GeoTapp TimeTracker est l'application mobile pour techniciens terrain : pointage GPS vérifié, preuves photo, rapports hebdomadaires et synchronisation temps réel avec GeoTapp Flow. Fonctionne hors ligne.",
  es: 'GeoTapp TimeTracker es la app móvil para técnicos de campo: fichaje GPS verificado, pruebas fotográficas, informes semanales y sincronización en tiempo real con GeoTapp Flow. Funciona sin conexión.',
  nl: 'GeoTapp TimeTracker is de mobiele app voor buitendiensttechnici: geverifieerd GPS in- en uitklokken, fotobewijs, wekelijkse rapporten en realtime synchronisatie met GeoTapp Flow. Werkt offline.',
  pt: 'GeoTapp TimeTracker é o app móvel para técnicos de campo: ponto GPS verificado, provas fotográficas, relatórios semanais e sincronização em tempo real com o GeoTapp Flow. Funciona offline.',
  sv: 'GeoTapp TimeTracker är mobilappen för fälttekniker: verifierad GPS-incheckning, fotobevis, veckorapporter och realtidssynkronisering med GeoTapp Flow. Fungerar offline.',
  da: 'GeoTapp TimeTracker er mobilappen til serviceteknikere: verificeret GPS-ind- og udtjekning, fotobeviser, ugentlige rapporter og realtidssynkronisering med GeoTapp Flow. Fungerer offline.',
  nb: 'GeoTapp TimeTracker er mobilappen for serviceteknikere: verifisert GPS-innsjekking, fotobevis, ukentlige rapporter og sanntidssynkronisering med GeoTapp Flow. Fungerer offline.',
  ru: 'GeoTapp TimeTracker — мобильное приложение для выездных техников: верифицированные GPS-отметки, фотодоказательства, еженедельные отчёты и синхронизация с GeoTapp Flow в реальном времени. Работает офлайн.',
};

const APP_FEATURES: Record<string, string[]> = {
  it: [
    'Timbratura GPS verificata (anti-spoofing)',
    'Prove fotografiche con timestamp e GPS',
    'Funziona offline e sincronizza automaticamente',
    'Report sigillati crittograficamente',
    'Modulo informativa GPS con firma digitale',
    'Integrazione nativa con GeoTapp Flow',
    'Disponibile su Google Play e App Store',
    'Conforme GDPR — geolocalizzazione solo a timbratura',
  ],
  en: [
    'Verified GPS clock-in (anti-spoofing)',
    'Photo evidence with timestamp and GPS',
    'Works offline, syncs automatically',
    'Cryptographically sealed reports',
    'GPS privacy notice module with digital signature',
    'Native integration with GeoTapp Flow',
    'Available on Google Play and App Store',
    'GDPR compliant — geolocation only at clock-in/out',
  ],
  de: [
    'Verifizierte GPS-Zeiterfassung (Anti-Spoofing)',
    'Fotobeweise mit Zeitstempel und GPS',
    'Funktioniert offline, synchronisiert automatisch',
    'Kryptographisch versiegelte Berichte',
    'GPS-Datenschutzerklärung mit digitaler Unterschrift',
    'Native Integration mit GeoTapp Flow',
    'Verfügbar im Google Play Store und App Store',
    'DSGVO-konform — Standorterfassung nur beim Stempeln',
  ],
};

function buildAppSoftware(locale: AppLocale) {
  const rate = convertEurToLocale(EUR_PRICES.tracker.tier1.perSeatMonthly, locale);
  const description = APP_DESCRIPTION[locale] ?? APP_DESCRIPTION.en;
  const featureList = APP_FEATURES[locale] ?? APP_FEATURES.en;
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    '@id': `https://geotapp.com/${locale}/products/geotapp-timetracker/#software`,
    name: 'GeoTapp TimeTracker',
    operatingSystem: 'Android 6.0+, iOS 14+',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Time Tracking',
    description,
    featureList,
    image: 'https://geotapp.com/logoTT.webp',
    screenshot: [
      'https://geotapp.com/screenshots/timetracker-dashboard.webp',
      'https://geotapp.com/screenshots/timetracker-richieste.webp',
    ],
    inLanguage: locale,
    offers: {
      '@type': 'Offer',
      price: rate.amount.toFixed(2),
      priceCurrency: getCurrencyForLocale(locale),
      availability: 'https://schema.org/InStock',
      url: `https://geotapp.com/${locale}/trial/`,
      description: `14-day free trial. Paid plans from ${rate.formatted} per operator per month.`,
    },
    publisher: { '@id': 'https://geotapp.com/#organization' },
    url: `https://geotapp.com/${locale}/products/geotapp-timetracker/`,
  };
}

type Props = { params: Promise<{ locale: string }> };

export default async function LocaleAppPage({ params }: Props) {
  const { locale } = await params;
  const faq = APP_FAQ[locale] ?? APP_FAQ['en'];
  const software = buildAppSoftware(locale as AppLocale);
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      { '@type': 'ListItem', position: 2, name: 'GeoTapp TimeTracker', item: `https://geotapp.com/${locale}/products/geotapp-timetracker/` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {faq && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }} />
      <AppPage />
      <BlogHighlights locale={locale as AppLocale} categoryId={108} />
      <SettoriLinks locale={locale as AppLocale} settori={['pulizie', 'sicurezza']} />
    </>
  );
}
