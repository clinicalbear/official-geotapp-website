'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ArticleSidebarProps {
  headings: Array<{ id: string; text: string; level: number }>;
  locale: string;
  categories?: Array<{ slug: string; name: string }>;
  date?: string;
  readingTime?: number;
}

const SIDEBAR_LABELS: Record<string, {
  toc: string; cta_title: string; cta_desc: string; cta_btn: string;
  share: string; copied: string; product_title: string; product_desc: string; product_btn: string;
}> = {
  it: { toc: 'In questo articolo', cta_title: 'Prova GeoTapp gratis', cta_desc: '14 giorni di prova gratuita. Nessuna carta di credito. Setup in 2 minuti.', cta_btn: 'Inizia ora', share: 'Condividi', copied: 'Link copiato!', product_title: 'Prodotto correlato', product_desc: 'Scopri come GeoTapp risolve questo problema', product_btn: 'Scopri di piu' },
  en: { toc: 'In this article', cta_title: 'Try GeoTapp free', cta_desc: '14-day free trial. No credit card required. Setup in 2 minutes.', cta_btn: 'Start now', share: 'Share', copied: 'Link copied!', product_title: 'Related product', product_desc: 'See how GeoTapp solves this problem', product_btn: 'Learn more' },
  de: { toc: 'In diesem Artikel', cta_title: 'GeoTapp kostenlos testen', cta_desc: '14 Tage kostenlos. Keine Kreditkarte. Setup in 2 Minuten.', cta_btn: 'Jetzt starten', share: 'Teilen', copied: 'Link kopiert!', product_title: 'Verwandtes Produkt', product_desc: 'So lost GeoTapp dieses Problem', product_btn: 'Mehr erfahren' },
  fr: { toc: 'Dans cet article', cta_title: 'Essayez GeoTapp', cta_desc: '14 jours gratuits. Sans carte bancaire. Pret en 2 minutes.', cta_btn: 'Commencer', share: 'Partager', copied: 'Lien copie !', product_title: 'Produit associe', product_desc: 'Decouvrez comment GeoTapp resout ce probleme', product_btn: 'En savoir plus' },
};

// Detect related product from categories
function detectProduct(categories: Array<{ slug: string; name: string }>): { name: string; icon: string; color: string; href: string } {
  const slugs = categories.map(c => c.slug.toLowerCase()).join(' ');
  if (/gps|track|timbr|presenz|geoloc|clock|attendance/.test(slugs)) {
    return { name: 'GeoTapp TimeTracker', icon: '⏱', color: '#F97316', href: '/products/geotapp-timetracker/' };
  }
  if (/sicur|secur|verif|prov|proof/.test(slugs)) {
    return { name: 'GeoTapp Verifier', icon: '🛡', color: '#22C55E', href: '/products/geotapp-verifier/' };
  }
  return { name: 'GeoTapp Flow', icon: '⚡', color: '#8B5CF6', href: '/products/geotapp-flow/' };
}

function ShareButton({ label, copiedLabel }: { label: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
      '_blank',
      'width=600,height=500'
    );
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleLinkedIn}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-500 bg-slate-100 rounded-lg hover:bg-slate-200 hover:text-slate-700 transition-all"
        aria-label="Share on LinkedIn"
      >
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        LinkedIn
      </button>
      <button
        onClick={handleCopy}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-500 bg-slate-100 rounded-lg hover:bg-slate-200 hover:text-slate-700 transition-all"
        aria-label="Copy link"
      >
        {copied ? (
          <>
            <svg className="w-3.5 h-3.5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg>
            <span className="text-green-600">{copiedLabel}</span>
          </>
        ) : (
          <>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
            {label}
          </>
        )}
      </button>
    </div>
  );
}

export default function ArticleSidebar({ headings, locale, categories = [], date, readingTime }: ArticleSidebarProps) {
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
      {/* Article Info */}
      <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-100">
        {categories[0] && (
          <span
            className="px-2.5 py-1 text-[11px] font-semibold rounded-full text-white"
            style={{ backgroundColor: product.color }}
          >
            {categories[0].name}
          </span>
        )}
        <div className="flex items-center gap-2 text-[11px] text-slate-400">
          {formattedDate && <span>{formattedDate}</span>}
          {readingTime && (
            <>
              <span className="w-0.5 h-0.5 rounded-full bg-slate-300" />
              <span>{readingTime} min</span>
            </>
          )}
        </div>
      </div>

      {/* Share Buttons */}
      <div className="mb-6 pb-5 border-b border-slate-100">
        <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
          {labels.share}
        </p>
        <ShareButton label="Link" copiedLabel={labels.copied} />
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

      {/* Related Product */}
      <div className="mb-6 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2.5 mb-2">
          <span className="text-lg">{product.icon}</span>
          <span className="text-xs font-bold text-slate-700">{product.name}</span>
        </div>
        <p className="text-[12px] text-slate-500 leading-relaxed mb-3">{labels.product_desc}</p>
        <Link
          href={`/${locale}${product.href}`}
          className="text-[12px] font-semibold text-[#8FC436] hover:underline"
        >
          {labels.product_btn} &rarr;
        </Link>
      </div>

      {/* CTA Card */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 shadow-lg">
        <p className="text-sm font-bold text-white">{labels.cta_title}</p>
        <p className="text-xs text-slate-400 mt-2 leading-relaxed">{labels.cta_desc}</p>
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
