'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { trackEvent } from '@/lib/analytics';

interface ArticleSidebarProps {
  headings: Array<{ id: string; text: string; level: number }>;
  locale: string;
  categories?: Array<{ slug: string; name: string }>;
  date?: string;
  readingTime?: number;
  title?: string;
}

const SIDEBAR_LABELS: Record<string, {
  toc: string; cta_title: string; cta_desc: string; cta_btn: string;
  share: string; copied: string; product_desc: string; product_btn: string;
}> = {
  it: { toc: 'In questo articolo', cta_title: 'Prova GeoTapp gratis', cta_desc: '14 giorni di prova gratuita. Nessuna carta di credito. Setup in 2 minuti.', cta_btn: 'Inizia ora', share: 'Condividi', copied: 'Copiato!', product_desc: 'Scopri come GeoTapp risolve questo problema', product_btn: 'Scopri di piu' },
  en: { toc: 'In this article', cta_title: 'Try GeoTapp free', cta_desc: '14-day free trial. No credit card required. Setup in 2 minutes.', cta_btn: 'Start now', share: 'Share', copied: 'Copied!', product_desc: 'See how GeoTapp solves this problem', product_btn: 'Learn more' },
  de: { toc: 'In diesem Artikel', cta_title: 'GeoTapp kostenlos testen', cta_desc: '14 Tage kostenlos. Keine Kreditkarte. Setup in 2 Minuten.', cta_btn: 'Jetzt starten', share: 'Teilen', copied: 'Kopiert!', product_desc: 'So lost GeoTapp dieses Problem', product_btn: 'Mehr erfahren' },
  fr: { toc: 'Dans cet article', cta_title: 'Essayez GeoTapp', cta_desc: '14 jours gratuits. Sans carte bancaire. Pret en 2 minutes.', cta_btn: 'Commencer', share: 'Partager', copied: 'Copie !', product_desc: 'Decouvrez comment GeoTapp resout ce probleme', product_btn: 'En savoir plus' },
};

function detectProduct(categories: Array<{ slug: string; name: string }>): { name: string; logo: string; color: string; href: string } {
  const slugs = categories.map(c => c.slug.toLowerCase()).join(' ');
  if (/gps|track|timbr|presenz|geoloc|clock|attendance|zeit/.test(slugs)) {
    return { name: 'GeoTapp TimeTracker', logo: '/TimeTrackerTrasparente.webp', color: '#F97316', href: '/products/geotapp-timetracker/' };
  }
  if (/sicur|secur|verif|prov|proof|report|document/.test(slugs)) {
    return { name: 'GeoTapp Verifier', logo: '/logoVerifier.webp', color: '#22C55E', href: '/products/geotapp-verifier/' };
  }
  return { name: 'GeoTapp Flow', logo: '/logoFlow.webp', color: '#8B5CF6', href: '/products/geotapp-flow/' };
}

/* ── Social Share Icons (inline SVG) ── */
const LinkedInIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const FacebookIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
);
const XIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const EmailIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const LinkIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
);
const CheckIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7"/></svg>
);

function ShareButtons({ title, copiedLabel }: { title: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);

  const url = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    { icon: <LinkedInIcon />, label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, hoverColor: '#0A66C2' },
    { icon: <FacebookIcon />, label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, hoverColor: '#1877F2' },
    { icon: <XIcon />, label: 'X', href: `https://x.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, hoverColor: '#000000' },
    { icon: <EmailIcon />, label: 'Email', href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`, hoverColor: '#EA4335' },
  ];

  return (
    <div className="flex items-center gap-1.5">
      {shareLinks.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.label === 'Email' ? '_self' : '_blank'}
          rel="noopener noreferrer"
          aria-label={s.label}
          className="p-2 text-slate-400 rounded-lg transition-all duration-200 hover:bg-slate-50"
          onMouseEnter={(e) => { e.currentTarget.style.color = s.hoverColor; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = ''; }}
        >
          {s.icon}
        </a>
      ))}
      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className={`p-2 rounded-lg transition-all duration-200 ${copied ? 'text-green-500 bg-green-50' : 'text-slate-400 hover:bg-slate-50'}`}
        onMouseEnter={(e) => { if (!copied) e.currentTarget.style.color = '#8FC436'; }}
        onMouseLeave={(e) => { if (!copied) e.currentTarget.style.color = ''; }}
      >
        {copied ? <CheckIcon /> : <LinkIcon />}
      </button>
    </div>
  );
}

export default function ArticleSidebar({ headings, locale, categories = [], date, readingTime, title = '' }: ArticleSidebarProps) {
  const [activeId, setActiveId] = useState<string>('');
  const labels = SIDEBAR_LABELS[locale] || SIDEBAR_LABELS['en'];
  const product = detectProduct(categories);

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

  const formattedDate = date
    ? new Date(date).toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric' })
    : '';

  return (
    <aside className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pb-8">
      {/* Digital clock-in stamp — light/airy */}
      <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4">
        {/* Status */}
        <div className="flex items-center gap-2 mb-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-green-500">Clock-in</span>
          {categories[0] && (
            <span
              className="ml-auto px-2 py-0.5 text-[8px] font-semibold rounded-full uppercase tracking-wider text-white"
              style={{ backgroundColor: product.color }}
            >
              {categories[0].name}
            </span>
          )}
        </div>
        {/* Data fields */}
        <div className="flex items-center gap-4">
          <div>
            <span className="text-slate-400 text-[8px] font-mono uppercase tracking-widest block mb-0.5">Date</span>
            <span className="text-slate-700 font-mono text-[13px] tracking-wide">
              {date ? new Date(date).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '.') : ''}
            </span>
          </div>
          <div className="w-px h-8 bg-slate-200" />
          <div>
            <span className="text-slate-400 text-[8px] font-mono uppercase tracking-widest block mb-0.5">Duration</span>
            <span className="text-slate-700 font-mono text-[13px] tracking-wide">
              00:{readingTime ? String(readingTime).padStart(2, '0') : '00'}:00
            </span>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      {headings.length > 0 && (
        <nav className="mb-8 border-l-2 border-slate-200 pl-4">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">
            {labels.toc}
          </p>
          <ul className="space-y-2">
            {headings.map((heading) => (
              <li key={heading.id} className="relative">
                {activeId === heading.id && (
                  <span className="absolute -left-[18px] top-0 w-0.5 h-full bg-[#8FC436] rounded-full transition-all duration-300" />
                )}
                <a
                  href={`#${heading.id}`}
                  className={`block text-[13px] leading-snug transition-all duration-200 ${
                    heading.level === 3 ? 'pl-3' : ''
                  } ${
                    activeId === heading.id
                      ? 'text-slate-900 font-semibold'
                      : 'text-slate-400 hover:text-slate-700'
                  }`}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Related Product — logo grande */}
      <Link
        href={`/${locale}${product.href}`}
        className="block mb-6 p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 group"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.logo}
          alt={product.name}
          className="max-h-12 max-w-[160px] w-auto mx-auto mb-4 group-hover:scale-105 transition-transform duration-200 object-contain"
        />
        <p className="text-[12px] text-slate-500 leading-relaxed text-center">{labels.product_desc}</p>
        <span className="mt-3 block text-center text-[12px] font-semibold text-[#8FC436] group-hover:translate-x-0.5 transition-transform">
          {labels.product_btn} &rarr;
        </span>
      </Link>

      {/* CTA — leggero, arioso */}
      <div className="mb-6 rounded-2xl border border-[#8FC436]/20 bg-[#8FC436]/5 p-5">
        <p className="text-[13px] font-bold text-slate-800">{labels.cta_title}</p>
        <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">{labels.cta_desc}</p>
        <Link
          href={`/${locale}/trial/`}
          onClick={() => trackEvent('trial_click', { source: 'blog_sidebar' })}
          className="mt-4 block w-full text-center px-4 py-2.5 bg-[#8FC436] text-white text-[13px] font-semibold rounded-xl hover:bg-[#7db02e] transition-colors"
        >
          {labels.cta_btn}
        </Link>
      </div>

      {/* Share — in fondo */}
      <div className="pt-5 border-t border-slate-100">
        <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
          {labels.share}
        </p>
        <ShareButtons title={title} copiedLabel={labels.copied} />
      </div>
    </aside>
  );
}
