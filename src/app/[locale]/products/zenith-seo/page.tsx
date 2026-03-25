// Overview: page.tsx
// Module: src > app > [locale] > products > zenith-seo
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


import { redirect, RedirectType } from 'next/navigation';
import type { AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';

export default async function DeprecatedZenithSeoLocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;

  redirect(localizePath('/pricing', resolvedParams.locale as AppLocale), RedirectType.permanent);
}
