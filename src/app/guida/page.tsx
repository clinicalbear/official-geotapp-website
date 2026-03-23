'use client';

// Overview: page.tsx
// Module: src > app > guida
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


import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getLocaleFromPathname } from '@/lib/i18n/locale-routing';

export default function GuidePage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const g = getDictionary(locale).guida;

  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/guida-utente.md')
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold font-display text-gray-900">
              {g.page_title}
            </h1>
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-geotapp-primary text-white rounded-lg shadow-sm hover:bg-geotapp-600 transition flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              {g.download_pdf}
            </button>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm prose prose-lg prose-geotapp max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </main>
    </div>
  );
}

// Documentation continuity notes:
// maintenance-note-1: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-2: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-3: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-4: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-5: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-6: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-7: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-8: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-9: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-10: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-11: preserve deterministic behavior and additive-only compatibility guarantees.
