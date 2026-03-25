// Overview: page.tsx
// Module: src > app > [locale] > pricing > bundle
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

const bundleMeta: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp Bundle — Flow + TimeTracker al 15% di Sconto', description: 'Combina GeoTapp Flow e TimeTracker con il 15% di sconto sul primo anno. Gestione operativa completa e timbratura GPS verificabile per il tuo team sul campo.' },
  en: { title: 'GeoTapp Bundle — Flow + TimeTracker 15% Off', description: 'Combine GeoTapp Flow and TimeTracker with 15% off the first year. Complete field operations management and GPS-verified time tracking for your team.' },
  de: { title: 'GeoTapp Bundle — Flow + TimeTracker 15% Rabatt', description: 'Kombinieren Sie GeoTapp Flow und TimeTracker mit 15% Rabatt auf das erste Jahr. Vollständiges Außendienstmanagement und GPS-verifizierte Zeiterfassung.' },
  fr: { title: 'GeoTapp Bundle — Flow + TimeTracker 15% de Réduction', description: "Combinez GeoTapp Flow et TimeTracker avec 15% de réduction sur la première année. Gestion opérationnelle complète et pointage GPS vérifié pour votre équipe." },
  es: { title: 'GeoTapp Bundle — Flow + TimeTracker 15% de Descuento', description: 'Combina GeoTapp Flow y TimeTracker con un 15% de descuento en el primer año. Gestión operativa completa y fichaje GPS verificado para tu equipo de campo.' },
  nl: { title: 'GeoTapp Bundle — Flow + TimeTracker 15% Korting', description: 'Combineer GeoTapp Flow en TimeTracker met 15% korting op het eerste jaar. Volledig operationeel beheer en GPS-geverifieerde tijdregistratie.' },
  pt: { title: 'GeoTapp Bundle — Flow + TimeTracker 15% de Desconto', description: 'Combine GeoTapp Flow e TimeTracker com 15% de desconto no primeiro ano. Gestão operacional completa e registo de tempo GPS verificado.' },
  sv: { title: 'GeoTapp Bundle — Flow + TimeTracker 15% Rabatt', description: 'Kombinera GeoTapp Flow och TimeTracker med 15% rabatt på det första året. Komplett driftledning och GPS-verifierad tidregistrering.' },
  da: { title: 'GeoTapp Bundle — Flow + TimeTracker 15% Rabat', description: 'Kombiner GeoTapp Flow og TimeTracker med 15% rabat på det første år. Komplet driftsstyring og GPS-verificeret tidsregistrering.' },
  nb: { title: 'GeoTapp Bundle — Flow + TimeTracker 15% Rabatt', description: 'Kombiner GeoTapp Flow og TimeTracker med 15% rabatt på det første året. Komplett driftsledelse og GPS-verifisert tidsregistrering.' },
  ru: { title: 'GeoTapp Bundle — Flow + TimeTracker скидка 15%', description: 'Объедините GeoTapp Flow и TimeTracker со скидкой 15% на первый год. Полное управление выездными операциями и GPS-верифицированный учёт рабочего времени.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = bundleMeta[locale] ?? bundleMeta['it'];
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: buildLocaleAlternates(locale, '/pricing/bundle/'),
    openGraph: {
      title: m.title,
      description: m.description,
      url: `https://geotapp.com/${locale}/pricing/bundle/`,
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
export { default } from '../../../pricing/bundle/page';
