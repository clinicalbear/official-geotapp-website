// Overview: open-next.config.ts
// Module: 
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


import { defineCloudflareConfig } from '@opennextjs/cloudflare';
import staticAssetsIncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache';

export default {
  // Incremental cache sugli static assets del Worker (05/07/2026): senza una
  // incremental cache configurata, le ~1.380 pagine prerenderizzate al build
  // (.open-next/cache) NON venivano deployate e il Worker ri-renderizzava in
  // SSR ogni richiesta → TTFB ~1s reale, ~5s simulato mobile (LCP home 5,3s).
  // Con questa override i prerender viaggiano negli asset (cdn-cgi/_next_cache)
  // e vengono serviti senza SSR. Caveat (accettato): niente revalidation a
  // runtime — le pagine si rinfrescano a ogni deploy, che facciamo spesso;
  // l'unico fetch ISR (BlogHighlights, revalidate 3600) degrada a stale-servito.
  ...defineCloudflareConfig({ incrementalCache: staticAssetsIncrementalCache }),
  buildCommand: 'npm run build:web',
};
