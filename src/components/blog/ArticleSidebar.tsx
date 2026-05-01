'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ArticleSidebarProps {
  headings: Array<{ id: string; text: string; level: number }>;
  locale: string;
}

const SIDEBAR_LABELS: Record<string, { toc: string; cta_title: string; cta_desc: string; cta_btn: string }> = {
  it: { toc: 'Indice', cta_title: 'Prova GeoTapp gratis', cta_desc: '14 giorni, nessuna carta richiesta', cta_btn: 'Inizia ora' },
  en: { toc: 'Contents', cta_title: 'Try GeoTapp free', cta_desc: '14 days, no credit card required', cta_btn: 'Start now' },
  de: { toc: 'Inhalt', cta_title: 'GeoTapp kostenlos testen', cta_desc: '14 Tage, keine Kreditkarte', cta_btn: 'Jetzt starten' },
  fr: { toc: 'Sommaire', cta_title: 'Essayez GeoTapp gratuitement', cta_desc: '14 jours, sans carte bancaire', cta_btn: 'Commencer' },
};

export default function ArticleSidebar({ headings, locale }: ArticleSidebarProps) {
  const [activeId, setActiveId] = useState<string>('');
  const labels = SIDEBAR_LABELS[locale] || SIDEBAR_LABELS['en'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );

    for (const h of headings) {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <aside className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto">
      {/* Table of Contents */}
      <nav className="border-l-2 border-slate-200 pl-5">
        <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">
          {labels.toc}
        </p>
        <ul className="space-y-2.5">
          {headings.map((heading) => (
            <li key={heading.id} className="relative">
              {activeId === heading.id && (
                <span className="absolute -left-[22px] top-0.5 w-0.5 h-full bg-[#8FC436] rounded-full transition-all duration-300" />
              )}
              <a
                href={`#${heading.id}`}
                className={`block text-[13px] leading-snug transition-all duration-200 ${
                  heading.level === 3 ? 'pl-3' : ''
                } ${
                  activeId === heading.id
                    ? 'text-slate-900 font-semibold translate-x-0.5'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA Card */}
      <div className="mt-10 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200/80 shadow-sm">
        <p className="text-sm font-bold text-slate-900">{labels.cta_title}</p>
        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{labels.cta_desc}</p>
        <Link
          href={`/${locale}/trial/`}
          className="mt-5 block w-full text-center px-4 py-3 bg-[#8FC436] text-white text-sm font-semibold rounded-xl hover:bg-[#7db02e] hover:shadow-md transition-all duration-200"
        >
          {labels.cta_btn}
        </Link>
      </div>
    </aside>
  );
}
