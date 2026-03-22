// Overview: page.tsx
// Module: src > app > [locale] > guida
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

const GUIDA_META: Record<string, { title: string; description: string }> = {
  it: { title: 'Guida utente GeoTapp — Come iniziare | GeoTapp', description: 'Guida completa a GeoTapp: come configurare il team, avviare le timbrature GPS, generare report verificabili e usare il Verifier. Per amministratori e operatori.' },
  en: { title: 'GeoTapp User Guide — Getting Started | GeoTapp', description: 'Complete GeoTapp guide: how to set up your team, start GPS time tracking, generate verifiable reports and use the Verifier. For admins and operators.' },
  de: { title: 'GeoTapp Benutzerhandbuch — Erste Schritte | GeoTapp', description: 'Vollständiger GeoTapp-Leitfaden: Team einrichten, GPS-Zeiterfassung starten, verifizierbare Berichte erstellen und den Verifier nutzen.' },
  fr: { title: 'Guide utilisateur GeoTapp — Démarrage | GeoTapp', description: 'Guide complet GeoTapp : configurer votre équipe, démarrer le pointage GPS, générer des rapports vérifiables et utiliser le Verifier.' },
  es: { title: 'Guía de usuario GeoTapp — Primeros pasos | GeoTapp', description: 'Guía completa de GeoTapp: cómo configurar tu equipo, iniciar el fichaje GPS, generar informes verificables y usar el Verifier.' },
  pt: { title: 'Guia do utilizador GeoTapp — Primeiros passos | GeoTapp', description: 'Guia completo do GeoTapp: como configurar a sua equipa, iniciar a marcação de ponto GPS, gerar relatórios verificáveis e usar o Verifier.' },
  nl: { title: 'GeoTapp Gebruikershandleiding — Aan de slag | GeoTapp', description: 'Volledige GeoTapp-handleiding: team instellen, GPS-tijdregistratie starten, verifieerbare rapporten genereren en de Verifier gebruiken.' },
  da: { title: 'GeoTapp Brugervejledning — Kom i gang | GeoTapp', description: 'Komplet GeoTapp-guide: opsæt dit team, start GPS-tidsregistrering, generer verificerbare rapporter og brug Verifier.' },
  sv: { title: 'GeoTapp Användarhandbok — Kom igång | GeoTapp', description: 'Komplett GeoTapp-guide: konfigurera ditt team, starta GPS-tidregistrering, generera verifierbara rapporter och använd Verifier.' },
  nb: { title: 'GeoTapp Brukerhåndbok — Kom i gang | GeoTapp', description: 'Komplett GeoTapp-guide: konfigurer teamet ditt, start GPS-tidsregistrering, generer verifiserbare rapporter og bruk Verifier.' },
  ru: { title: 'Руководство пользователя GeoTapp — Начало работы | GeoTapp', description: 'Полное руководство по GeoTapp: настройка команды, запуск GPS-учёта времени, создание верифицируемых отчётов и использование Verifier.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = GUIDA_META[locale] ?? GUIDA_META.en;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: buildLocaleAlternates(locale, '/guida'),
  };
}
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
export { default } from '../../guida/page';
