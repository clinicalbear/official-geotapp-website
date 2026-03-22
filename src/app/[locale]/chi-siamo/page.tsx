// Overview: page.tsx
// Module: src > app > [locale] > chi-siamo
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

const CHI_SIAMO_META: Record<string, { title: string; description: string }> = {
  it: { title: 'Chi siamo — Il team GeoTapp | GeoTapp', description: 'GeoTapp è un SaaS italiano per la verifica del lavoro sul campo. Scopri la nostra missione: rendere ogni intervento verificabile, riducendo le contestazioni per le aziende con operatori in mobilità.' },
  en: { title: 'About Us — The GeoTapp Team | GeoTapp', description: 'GeoTapp is a field work verification SaaS. Learn about our mission: making every field job provable and reducing disputes for companies with mobile operators.' },
  de: { title: 'Über uns — Das GeoTapp-Team | GeoTapp', description: 'GeoTapp ist eine SaaS-Plattform zur Verifikation von Außendienstarbeit. Erfahren Sie mehr über unsere Mission: jeden Außendiensteinsatz nachweisbar zu machen.' },
  fr: { title: 'À propos — L\'équipe GeoTapp | GeoTapp', description: 'GeoTapp est un SaaS de vérification du travail terrain. Découvrez notre mission : rendre chaque intervention vérifiable et réduire les litiges pour les entreprises avec des équipes mobiles.' },
  es: { title: 'Quiénes somos — El equipo GeoTapp | GeoTapp', description: 'GeoTapp es un SaaS de verificación del trabajo en campo. Conoce nuestra misión: hacer cada intervención demostrable y reducir disputas para empresas con operadores en movilidad.' },
  pt: { title: 'Sobre nós — A equipa GeoTapp | GeoTapp', description: 'GeoTapp é um SaaS de verificação do trabalho em campo. Conheça a nossa missão: tornar cada intervenção verificável e reduzir disputas para empresas com operadores em mobilidade.' },
  nl: { title: 'Over ons — Het GeoTapp-team | GeoTapp', description: 'GeoTapp is een SaaS voor verificatie van veldwerk. Ontdek onze missie: elk velddienst aantoonbaar maken en geschillen verminderen voor bedrijven met mobiele medewerkers.' },
  da: { title: 'Om os — GeoTapp-teamet | GeoTapp', description: 'GeoTapp er et SaaS til verificering af feltarbejde. Lær om vores mission: at gøre hvert feltbesøg dokumenterbart og reducere tvister for virksomheder med mobile medarbejdere.' },
  sv: { title: 'Om oss — GeoTapp-teamet | GeoTapp', description: 'GeoTapp är en SaaS för verifiering av fältarbete. Lär dig om vår mission: att göra varje fältuppdrag bevisbart och minska tvister för företag med mobila medarbetare.' },
  nb: { title: 'Om oss — GeoTapp-teamet | GeoTapp', description: 'GeoTapp er en SaaS for verifisering av feltarbeid. Lær om vår misjon: å gjøre hvert feltoppdrag bevisbart og redusere tvister for bedrifter med mobile medarbeidere.' },
  ru: { title: 'О нас — Команда GeoTapp | GeoTapp', description: 'GeoTapp — SaaS для верификации полевых работ. Узнайте о нашей миссии: сделать каждый выезд доказуемым и сократить споры для компаний с мобильными операторами.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = CHI_SIAMO_META[locale] ?? CHI_SIAMO_META.en;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: buildLocaleAlternates(locale, '/chi-siamo'),
  };
}
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
export { default } from '../../chi-siamo/page';
