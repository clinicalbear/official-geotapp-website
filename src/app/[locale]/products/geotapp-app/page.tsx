// Overview: page.tsx
// Module: src > app > [locale] > products > geotapp-app
// Purpose: documents intent and boundaries to speed up maintenance and reviews.
// Safety: keep permissions, tenancy isolation, and API/data compatibility unchanged unless explicitly required.

// Documentation Contract:
// - Boundaries: this file may orchestrate UI/data flow, but it must keep business invariants intact.
// - Security: preserve role/tenant checks and never broaden access scope implicitly.
// - Data Integrity: keep field names and payload schemas stable unless a migration is planned.
// - Compatibility: companyId/tenantId fallbacks may still be required for legacy records.
// - Performance: avoid extra roundtrips in hot paths and prefer incremental updates.
// - Error Handling: prefer graceful degradation over hard-fail in non-critical rendering paths.
// - UX Stability: keep deterministic ordering/filtering to avoid visual flicker/regressions.
// - Testing: update module tests when changing control flow, query composition, or serialization.
// - Operations: changes touching auth/rules/functions must stay aligned across apps.
// - Maintainability: keep additive changes whenever possible to reduce rollback risk.


import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import AppPage from '../../../products/geotapp-app/page';

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
    alternates: buildLocaleAlternates(locale, '/products/geotapp-app/'),
    openGraph: {
      title: m.title,
      description: m.description,
      url: `https://geotapp.com/${locale}/products/geotapp-app/`,
      type: 'website',
      images: [{ url: '/logoFlow.png', width: 1200, height: 630, alt: m.title }],
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

type Props = { params: Promise<{ locale: string }> };

export default async function LocaleAppPage({ params }: Props) {
  const { locale } = await params;
  const faq = APP_FAQ[locale] ?? APP_FAQ['en'];
  return (
    <>
      {faq && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      )}
      <AppPage />
    </>
  );
}
