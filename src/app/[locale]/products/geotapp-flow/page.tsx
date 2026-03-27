// Overview: page.tsx
// Module: src > app > [locale] > products > geotapp-flow
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
import FlowPage from '../../../products/geotapp-flow/page';
import BlogHighlights from '@/components/BlogHighlights';
import SettoriLinks from '@/components/SettoriLinks';
import { type AppLocale } from '@/lib/i18n/config';

const flowMeta: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp Flow — Gestione Operativa Interventi e Squadre', description: 'GeoTapp Flow è il sistema operativo per aziende con tecnici sul campo. Gestisci commesse, assegna attività, monitora l\'avanzamento e produci report verificabili in tempo reale.' },
  en: { title: 'GeoTapp Flow — Field Operations Management', description: 'GeoTapp Flow is the operational hub for companies with field technicians. Manage jobs, assign tasks, track progress and generate verifiable reports in real time.' },
  de: { title: 'GeoTapp Flow — Operative Einsatzverwaltung', description: 'GeoTapp Flow ist das operative System für Unternehmen mit Außendiensttechnikern. Aufträge verwalten, Aufgaben zuweisen und überprüfbare Berichte erstellen.' },
  fr: { title: 'GeoTapp Flow — Gestion Opérationnelle des Interventions', description: 'GeoTapp Flow est le système opérationnel pour les entreprises avec des techniciens terrain. Gérez les commandes, assignez les tâches et produisez des rapports vérifiables.' },
  es: { title: 'GeoTapp Flow — Gestión Operativa de Intervenciones', description: 'GeoTapp Flow es el sistema operativo para empresas con técnicos en campo. Gestiona pedidos, asigna tareas y genera informes verificables en tiempo real.' },
  nl: { title: 'GeoTapp Flow — Operationeel Beheer van Interventies', description: 'GeoTapp Flow is het operationele systeem voor bedrijven met buitendiensttechnici. Beheer opdrachten, wijs taken toe en maak verifieerbare rapporten.' },
  pt: { title: 'GeoTapp Flow — Gestão Operacional de Intervenções', description: 'GeoTapp Flow é o sistema operacional para empresas com técnicos de campo. Gerencie ordens de serviço, atribua tarefas e produza relatórios verificáveis.' },
  sv: { title: 'GeoTapp Flow — Operativ Hantering av Interventioner', description: 'GeoTapp Flow är det operativa systemet för företag med fälttekniker. Hantera uppdrag, tilldela uppgifter och skapa verifierbara rapporter.' },
  da: { title: 'GeoTapp Flow — Operationel Håndtering af Interventioner', description: 'GeoTapp Flow er det operative system for virksomheder med serviceteknikere. Administrer opgaver, tildel arbejde og generer verificerbare rapporter.' },
  nb: { title: 'GeoTapp Flow — Operativ Håndtering av Intervensjoner', description: 'GeoTapp Flow er det operative systemet for bedrifter med serviceteknikere. Administrer oppdrag, tildel oppgaver og generer verifiserbare rapporter.' },
  ru: { title: 'GeoTapp Flow — Оперативное Управление Интервенциями', description: 'GeoTapp Flow — операционная система для компаний с выездными техниками. Управляйте заказами, назначайте задачи и формируйте проверяемые отчёты.' },
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

const FLOW_FAQ: Record<string, object> = {
  it: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Cos\'è GeoTapp Flow?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp Flow è la piattaforma di gestione operativa per aziende con tecnici sul campo. Permette di creare commesse, assegnare attività, monitorare l\'avanzamento e produrre report verificabili in tempo reale dall\'ufficio.' } },
      { '@type': 'Question', name: 'GeoTapp Flow funziona offline?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker (l\'app mobile per i tecnici) funziona offline e sincronizza i dati GPS e le foto appena torna la connessione. Flow (il pannello di gestione) richiede connessione internet.' } },
      { '@type': 'Question', name: 'GeoTapp Flow si integra con altri software gestionali?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp Flow supporta l\'export dei dati per la fatturazione e la gestione paghe. L\'integrazione diretta con gestionali terzi è disponibile tramite richiesta.' } },
      { '@type': 'Question', name: 'Quanti tecnici può gestire GeoTapp Flow?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp Flow scala da team di 3 persone fino a 300+ operatori su più siti. I piani Team e Business includono funzionalità avanzate per team di grandi dimensioni.' } },
      { '@type': 'Question', name: 'I report generati da Flow sono contestabili dal cliente?', acceptedAnswer: { '@type': 'Answer', text: 'No. I report GeoTapp sono sigillati crittograficamente e verificabili tramite GeoTapp Verifier. Il cliente può verificare l\'integrità dei dati in modo indipendente — senza accesso al tuo account.' } },
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

type Props = { params: Promise<{ locale: string }> };

export default async function LocaleFlowPage({ params }: Props) {
  const { locale } = await params;
  const faq = FLOW_FAQ[locale] ?? FLOW_FAQ['en'];
  return (
    <>
      {faq && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      )}
      <FlowPage />
      <BlogHighlights locale={locale as AppLocale} categoryId={65} />
      <SettoriLinks locale={locale as AppLocale} settori={['installatori']} />
    </>
  );
}
