'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { getDictionary } from '@/lib/i18n/dictionaries';
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  localizePath,
} from '@/lib/i18n/locale-routing';
import NewsletterForm from '@/components/NewsletterForm';

export default function Footer() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
  const dict = getDictionary(currentLocale).footer;
  const getLink = (path: string) => localizePath(path, currentLocale);

  return (
    <footer className="bg-surface border-t border-border mt-20">
      {/* Newsletter band */}
      <div className="border-b border-border/40 py-14">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-xs block mb-3">Newsletter</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-3">
                {dict.newsletter_title}
              </h2>
              <p className="text-text-secondary leading-relaxed max-w-md">
                {dict.newsletter_desc}
              </p>
            </div>
            <div>
              <NewsletterForm locale={currentLocale} variant="compact" />
            </div>
          </div>
        </div>
      </div>

      {/* 3-column layout */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Logo + tagline */}
          <div className="flex-shrink-0">
            <Image
              src="/LogoGeoTapp.webp"
              alt="GeoTapp"
              width={160}
              height={70}
              className="h-auto w-[160px] mb-3"
            />
            <p className="text-text-muted text-sm max-w-[220px]">{dict.tagline}</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-row flex-wrap gap-x-6 gap-y-2 text-sm text-text-secondary">
            <Link href={getLink('/privacy')} className="hover:text-text-primary transition-colors">{dict.privacy}</Link>
            <Link href={getLink('/terms')} className="hover:text-text-primary transition-colors">{dict.terms}</Link>
            <Link href={getLink('/blog')} className="hover:text-text-primary transition-colors">Blog</Link>
            <Link href={getLink('/settori')} className="hover:text-text-primary transition-colors">{dict.sectors}</Link>
            <Link href={getLink('/contact')} className="hover:text-text-primary transition-colors">{dict.contact}</Link>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="https://t.me/geotapp" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-text-secondary hover:text-[#0088cc] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.9l-2.965-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.983.659z"/></svg>
            </a>
            <a href="https://www.instagram.com/geotapp_official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-text-secondary hover:text-text-primary transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/110850300/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-secondary hover:text-text-primary transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://www.trustpilot.com/evaluate/geotapp.com" target="_blank" rel="noopener noreferrer" aria-label="Trustpilot" className="text-text-secondary hover:text-[#00b67a] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0l2.927 8.986H24l-7.336 5.328 2.8 8.614L12 17.6l-7.464 5.328 2.8-8.614L0 8.986h9.073z"/></svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-text-muted text-xs md:text-right shrink-0">
            <div className="mb-1">&copy; 2026 GeoTapp.</div>
            <div>{dict.rights}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
