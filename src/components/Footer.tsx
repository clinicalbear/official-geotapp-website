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
                Resta aggiornato sul settore
              </h2>
              <p className="text-text-secondary leading-relaxed max-w-md">
                Niente spam, solo aggiornamenti di valore su gestione operativa, HR e tecnologia per le PMI.
              </p>
            </div>
            <div>
              <NewsletterForm locale={currentLocale} variant="compact" />
            </div>
          </div>
        </div>
      </div>

      {/* 3-column layout */}
      <div className="container mx-auto px-6 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
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
          <div className="flex flex-col gap-3 text-sm text-text-secondary">
            <Link href={getLink('/privacy')} className="hover:text-text-primary transition-colors">{dict.privacy}</Link>
            <Link href={getLink('/terms')} className="hover:text-text-primary transition-colors">{dict.terms}</Link>
            <Link href={getLink('/blog')} className="hover:text-text-primary transition-colors">Blog</Link>
            <Link href={getLink('/settori')} className="hover:text-text-primary transition-colors">Settori</Link>
            <Link href={getLink('/contact')} className="hover:text-text-primary transition-colors">Contatti</Link>
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
