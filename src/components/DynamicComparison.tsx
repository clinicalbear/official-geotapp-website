'use client';

import { useState } from 'react';
import { Check, X, ChevronDown, ExternalLink } from 'lucide-react';
import {
  COMPETITORS,
  FEATURE_KEYS,
  GEOTAPP_FEATURES,
  getFeatureLabel,
  getCompetitorTagline,
  type Competitor,
} from '@/content/competitors';
import { trackEvent } from '@/lib/analytics';
import Link from 'next/link';

interface Props {
  locale: string;
  copy: {
    chooseCompetitor: string;
    geotappCol: string;
    featureCol: string;
    pricingLabel: string; // "Da X€/utente/mese"
    pricingTrial: string; // "Trial 14gg, no carta"
    visitWebsite: string; // "Visita il sito"
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
    keyDifference: string; // "La differenza chiave"
    differenceText: string; // "Solo GeoTapp produce prove..."
  };
  /** id competitor da preselezionare (es. da query string). Default = primo. */
  initialId?: string;
}

export function DynamicComparison({ locale, copy, initialId }: Props) {
  const initial = COMPETITORS.find((c) => c.id === initialId) ?? COMPETITORS[0];
  const [selected, setSelected] = useState<Competitor>(initial);

  const handleChange = (id: string) => {
    const next = COMPETITORS.find((c) => c.id === id);
    if (!next) return;
    setSelected(next);
    trackEvent('compare_competitor_change', { competitor: id, locale });
  };

  return (
    <div className="mx-auto w-full max-w-5xl">
      {/* Selector */}
      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <label
          htmlFor="competitor-select"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          {copy.chooseCompetitor}
        </label>
        <div className="relative">
          <select
            id="competitor-select"
            value={selected.id}
            onChange={(e) => handleChange(e.target.value)}
            className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-3 pr-10 text-lg font-semibold text-slate-900 shadow-sm focus:border-[#8FC436] focus:outline-none focus:ring-2 focus:ring-[#8FC436]/30"
          >
            {COMPETITORS.map((c) => (
              <option key={c.id} value={c.id}>
                GeoTapp vs {c.name}
              </option>
            ))}
          </select>
          <ChevronDown
            size={20}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
          />
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          {getCompetitorTagline(selected, locale)}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
          <span className="font-semibold text-slate-700">
            {selected.pricingFromEur != null
              ? copy.pricingLabel.replace('{eur}', String(selected.pricingFromEur))
              : '—'}
          </span>
          <a
            href={selected.homepage}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-1 text-[#8FC436] hover:underline"
          >
            {copy.visitWebsite} <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Comparison table */}
      <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-4 text-left text-sm font-semibold text-slate-600 sm:px-6">
                {copy.featureCol}
              </th>
              <th className="px-4 py-4 text-center text-sm font-bold text-slate-900 sm:px-6">
                <div className="flex flex-col items-center gap-1">
                  <span className="rounded-full bg-[#8FC436]/10 px-3 py-1 text-[#5a8521]">
                    GeoTapp
                  </span>
                  <span className="text-xs font-normal text-slate-500">
                    {copy.pricingTrial}
                  </span>
                </div>
              </th>
              <th className="px-4 py-4 text-center text-sm font-bold text-slate-700 sm:px-6">
                <div className="flex flex-col items-center gap-1">
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    {selected.name}
                  </span>
                  <span className="text-xs font-normal text-slate-500">
                    {selected.pricingFromEur != null
                      ? `da ${selected.pricingFromEur}€/u/mese`
                      : ''}
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {FEATURE_KEYS.map((key, i) => {
              const geo = GEOTAPP_FEATURES[key];
              const comp = selected.features[key];
              const onlyGeotapp = geo && !comp;
              return (
                <tr
                  key={key}
                  className={`border-t border-slate-100 ${
                    onlyGeotapp ? 'bg-[#8FC436]/5' : ''
                  } ${i % 2 === 1 && !onlyGeotapp ? 'bg-slate-50/40' : ''}`}
                >
                  <td className="px-4 py-3 text-sm text-slate-700 sm:px-6">
                    {getFeatureLabel(key, locale)}
                  </td>
                  <td className="px-4 py-3 text-center sm:px-6">
                    {geo ? (
                      <Check
                        size={20}
                        className="inline-block text-[#5a8521]"
                        aria-label="yes"
                      />
                    ) : (
                      <X
                        size={20}
                        className="inline-block text-slate-300"
                        aria-label="no"
                      />
                    )}
                  </td>
                  <td className="px-4 py-3 text-center sm:px-6">
                    {comp ? (
                      <Check
                        size={20}
                        className="inline-block text-slate-500"
                        aria-label="yes"
                      />
                    ) : (
                      <X
                        size={20}
                        className="inline-block text-slate-300"
                        aria-label="no"
                      />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Key difference callout */}
      <div className="mb-8 rounded-2xl border border-[#8FC436]/30 bg-[#8FC436]/5 p-6">
        <h3 className="mb-2 text-lg font-bold text-slate-900">
          {copy.keyDifference}
        </h3>
        <p className="text-sm leading-relaxed text-slate-700">
          {copy.differenceText}
        </p>
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 text-center">
        <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
          {copy.ctaTitle}
        </h2>
        <p className="mb-6 text-base text-slate-300">{copy.ctaDesc}</p>
        <Link
          href={`/${locale}/trial/`}
          onClick={() =>
            trackEvent('trial_click', {
              source: `dynamic_compare_${selected.id}`,
              locale,
            })
          }
          className="inline-block rounded-xl bg-[#8FC436] px-8 py-4 text-lg font-bold text-white shadow-lg transition-opacity hover:opacity-90"
        >
          {copy.ctaBtn}
        </Link>
      </div>
    </div>
  );
}
