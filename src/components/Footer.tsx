'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES, LOCALE_LABELS } from '@/lib/i18n/config';
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
    <footer className="bg-surface border-t border-border pt-12 mt-20">
      {/* Newsletter section */}
      <div className="container mx-auto px-6 pb-10 mb-10 border-b border-border/40">
        <div style={{ maxWidth: '480px', margin: '0 auto' }}>
          <NewsletterForm locale={currentLocale} />
        </div>
      </div>

      <div className="container mx-auto px-6 pb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="mb-2 flex justify-center md:justify-start">
            <Image
              src="/LogoGeoTapp.webp"
              alt="GeoTapp - La piattaforma che rende il lavoro verificabile"
              width={220}
              height={96}
              className="h-auto w-[280px] max-w-none"
            />
          </div>
          <p className="text-text-muted text-sm">{dict.tagline}</p>
        </div>
        <div className="flex gap-8 text-sm text-text-secondary">
          <Link
            href={getLink('/privacy')}
            className="hover:text-white transition-colors"
          >
            {dict.privacy}
          </Link>
          <Link
            href={getLink('/terms')}
            className="hover:text-white transition-colors"
          >
            {dict.terms}
          </Link>
          <Link
            href={getLink('/blog')}
            className="hover:text-white transition-colors"
          >
            Blog
          </Link>
        </div>
        <div className="text-text-muted text-xs">
          &copy; 2026 GeoTapp. {dict.rights}
        </div>
      </div>
      <div className="container mx-auto px-6 pt-6 border-t border-border/40 flex flex-wrap justify-center gap-x-4 gap-y-1">
        {SUPPORTED_LOCALES.map((locale) => (
          <a
            key={locale}
            href={`/${locale}/`}
            className="text-text-muted text-xs hover:text-white transition-colors"
          >
            {LOCALE_LABELS[locale]}
          </a>
        ))}
      </div>
    </footer>
  );
}
