'use client';

import Link from 'next/link';
import { ShieldCheck, Download } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getLocaleFromPathname } from '@/lib/i18n/locale-routing';

const DEMO_REPORT_ID = 'GT-2026-0322-4472';
const DEMO_ZIP_URL =
  'https://storage.googleapis.com/geotap-v2.firebasestorage.app/reports/GT-2026-0322-4472/storico_commessa_sostituzione_quadro_22032026_v2.zip';

export default function DemoReportBanner() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const d = getDictionary(locale).home_sections.demo_banner;

  return (
    <div className="rounded-2xl border border-emerald-200 bg-white overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-6 py-4 border-b border-emerald-100 flex items-center gap-3 bg-emerald-50/50">
        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shrink-0">
          <ShieldCheck size={18} className="text-white" />
        </div>
        <div>
          <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">
            {d.badge}
          </div>
          <div className="text-slate-800 font-bold text-sm">
            {d.title}
          </div>
        </div>
      </div>

      {/* Data fields */}
      <div className="px-6 py-5 grid sm:grid-cols-3 gap-4 border-b border-emerald-100">
        {[
          ['Report ID', DEMO_REPORT_ID],
          [d.field_operator, 'Mario Bianchi'],
          [d.field_intervention, (d as any).field_intervention_value ?? 'Electrical panel replacement'],
        ].map(([label, value]) => (
          <div key={label}>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">{label}</div>
            <div className="text-slate-800 text-sm font-semibold">{value}</div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="px-6 py-4 flex flex-col sm:flex-row gap-3 bg-slate-50/50">
        <a
          href={DEMO_ZIP_URL}
          download
          className="flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-500 text-white font-semibold rounded-xl text-sm hover:bg-emerald-600 transition-all hover:shadow-md"
        >
          <Download size={16} />
          {d.btn_download}
        </a>
        <Link
          href={`/${locale}/products/geotapp-verifier`}
          className="flex items-center justify-center gap-2 px-5 py-2.5 text-emerald-600 font-semibold rounded-xl text-sm border border-emerald-200 hover:bg-emerald-50 transition-all"
        >
          <ShieldCheck size={16} />
          {d.btn_verify}
        </Link>
      </div>
    </div>
  );
}
