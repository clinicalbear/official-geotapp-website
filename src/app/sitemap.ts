// Overview: sitemap.ts
// Module: src > app
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


import type { MetadataRoute } from 'next';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';

const baseUrl = 'https://geotapp.com';
const baseRoutes = [
  '/',
  '/pricing',
  '/contact',
  '/products/geotapp-flow',
  '/products/geotapp-app',
  '/products/geotapp-verifier',
  '/settori',
  '/settori/installatori',
  '/settori/sicurezza',
  '/settori/pulizie',
  '/privacy',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = baseRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-03-11'),
    changeFrequency: 'weekly' as const,
    priority: route === '/' ? 1 : 0.8,
  }));

  const localizedEntries = SUPPORTED_LOCALES.flatMap((locale) =>
    baseRoutes
      .filter((route) => route !== '/')
      .map((route) => ({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date('2026-03-11'),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      })),
  );

  return [...staticEntries, ...localizedEntries];
}
