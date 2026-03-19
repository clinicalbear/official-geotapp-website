// Overview: page.tsx
// Module: src > app > [locale]
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
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
export { default } from '../page';

const BASE_URL = 'https://geotapp.com';

// Locale-specific titles and descriptions for the home page.
// Each title expresses the "verifiable work" concept in the target language —
// this is the SEO anchor keyword for all locale variants.
const LOCALE_META: Record<string, { title: string; description: string }> = {
  it: {
    title: 'GeoTapp | La piattaforma che rende il lavoro verificabile',
    description: 'GeoTapp trasforma ogni intervento in prova verificabile: report sigillati con dati GPS reali, prove fotografiche e documentazione che chiunque può verificare. Zero contestazioni.',
  },
  en: {
    title: 'GeoTapp | The platform that makes work verifiable',
    description: 'GeoTapp turns every field job into verifiable proof: tamper-proof reports with real GPS data, photo evidence and documentation anyone can verify independently. Zero disputes.',
  },
  de: {
    title: 'GeoTapp | Die Plattform, die Arbeit verifizierbar macht',
    description: 'GeoTapp macht jeden Außendiensteinsatz zu verifizierbarem Nachweis: manipulationssichere Berichte mit echten GPS-Daten, Fotobelege und Dokumentation, die jeder prüfen kann.',
  },
  fr: {
    title: 'GeoTapp | La plateforme qui rend le travail vérifiable',
    description: 'GeoTapp transforme chaque intervention en preuve vérifiable : rapports scellés avec données GPS réelles, preuves photographiques et documentation que n\'importe qui peut vérifier.',
  },
  es: {
    title: 'GeoTapp | La plataforma que hace el trabajo verificable',
    description: 'GeoTapp convierte cada intervención en prueba verificable: informes sellados con datos GPS reales, evidencias fotográficas y documentación que cualquiera puede verificar. Cero disputas.',
  },
  pt: {
    title: 'GeoTapp | A plataforma que torna o trabalho verificável',
    description: 'GeoTapp transforma cada intervenção em prova verificável: relatórios selados com dados GPS reais, provas fotográficas e documentação que qualquer pessoa pode verificar.',
  },
  nl: {
    title: 'GeoTapp | Het platform dat werk verifieerbaar maakt',
    description: 'GeoTapp maakt elke velddienst tot verifieerbaar bewijs: verzegelde rapporten met echte GPS-gegevens, fotobewijs en documentatie die iedereen onafhankelijk kan controleren.',
  },
  ru: {
    title: 'GeoTapp | Платформа, делающая работу верифицируемой',
    description: 'GeoTapp превращает каждый выезд в верифицируемое доказательство: запечатанные отчёты с реальными GPS-данными, фотодоказательства и документация, проверяемая кем угодно.',
  },
  da: {
    title: 'GeoTapp | Platformen der gør arbejdet verificerbart',
    description: 'GeoTapp gør hvert feltebesøg til verificerbart bevis: forseglede rapporter med echte GPS-data, fotodokumentation og dokumentation, som enhver kan verificere uafhængigt.',
  },
  sv: {
    title: 'GeoTapp | Plattformen som gör arbetet verifierbart',
    description: 'GeoTapp förvandlar varje fältuppdrag till verifierbart bevis: förseglade rapporter med verkliga GPS-data, fotobevis och dokumentation som vem som helst kan verifiera.',
  },
  nb: {
    title: 'GeoTapp | Plattformen som gjør arbeidet verifiserbart',
    description: 'GeoTapp gjør hvert feltoppdrag til verifiserbart bevis: forseglede rapporter med ekte GPS-data, fotobevis og dokumentasjon som hvem som helst kan verifisere uavhengig.',
  },
};

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const meta = LOCALE_META[locale] ?? LOCALE_META.en;

  // Build hreflang alternates dynamically from SUPPORTED_LOCALES.
  // All locale homepages use trailing slash (trailingSlash:true in next.config.mjs).
  // x-default → /en/ because:
  //   - /en/ is a real page served by app/[locale]/page.tsx with locale="en"
  //   - bare / triggers a 308 geo-redirect in middleware → invalid x-default per Google spec
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [l, `${BASE_URL}/${l}/`]),
  ) as Record<string, string>;
  languages['x-default'] = `${BASE_URL}/en/`;

  return {
    // Use absolute title to bypass the root layout template ("%s | GeoTapp").
    // Home page titles already include the brand name at the start
    // (e.g. "GeoTapp | La piattaforma..."); without absolute the template
    // would append "| GeoTapp" again → "GeoTapp | La piattaforma | GeoTapp".
    title: { absolute: meta.title },
    description: meta.description,
    alternates: {
      // Absolute canonical required here — homepage path is just "/" per locale,
      // relative "/${locale}" without trailing slash would resolve to a redirect URL.
      canonical: `${BASE_URL}/${locale}/`,
      languages,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${BASE_URL}/${locale}/`,
    },
    twitter: {
      title: meta.title,
      description: meta.description,
    },
  };
}
