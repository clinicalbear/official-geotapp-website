// Overview: robots.ts
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

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/blog/wp-admin/',
          '/blog/wp-login.php',
          '/blog/xmlrpc.php',
          '/blog/wp-cron.php',
          '/blog/checkout/',
          '/blog/cart/',
          '/blog/about-us/',
          '/blog/services/',
          '/blog/pagina-di-esempio/',
          '/blog/wp-json/',
          '/blog/author/',
        ],
      },
    ],
    sitemap: 'https://geotapp.com/sitemap.xml',
    host: 'https://geotapp.com',
  };
}
