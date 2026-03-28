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
    <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl">
      <div className="px-6 py-5 border-b border-white/10 flex items-center gap-3">
        <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center shrink-0">
          <ShieldCheck size={18} className="text-white" />
        </div>
        <div>
          <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
            {d.badge}
          </div>
          <div className="text-white font-bold text-sm">
            {d.title}
          </div>
        </div>
      </div>
      <div className="px-6 py-5 grid sm:grid-cols-3 gap-3 border-b border-white/10">
        {[
          ['Report ID', DEMO_REPORT_ID],
          [d.field_operator, 'Mario Bianchi'],
          [d.field_intervention, 'Sostituzione quadro elettrico'],
        ].map(([label, value]) => (
          <div key={label}>
            <div className="text-xs text-slate-400 uppercase tracking-wide mb-0.5">{label}</div>
            <div className="text-white text-sm font-semibold">{value}</div>
          </div>
        ))}
      </div>
      <div className="px-6 py-4 flex flex-col sm:flex-row gap-3">
        <a
          href={DEMO_ZIP_URL}
          download
          className="flex items-center justify-center gap-2 px-5 py-2.5 bg-cyan-500 text-white font-semibold rounded-xl text-sm hover:bg-cyan-400 transition"
        >
          <Download size={16} />
          {d.btn_download}
        </a>
        <Link
          href={`/verifica/${DEMO_REPORT_ID}`}
          className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 text-white font-semibold rounded-xl text-sm border border-white/20 hover:bg-white/20 transition"
        >
          <ShieldCheck size={16} />
          {d.btn_verify}
        </Link>
      </div>
    </div>
  );
}
