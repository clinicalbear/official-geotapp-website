'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import itDict from '@/dictionaries/it.json';
import enDict from '@/dictionaries/en.json';

export default function Footer() {
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en');
  const dict = isEn ? enDict.footer : itDict.footer;

  // Helpet for links
  const getLink = (path: string) => isEn ? `/en${path}` : path;

  return (
    <footer className="bg-surface border-t border-border py-12 mt-20">
      <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="mb-2 flex justify-center md:justify-start">
            <Image
              src="/LogoGeoTapp.png"
              alt="GeoTapp"
              width={220}
              height={96}
              className="h-auto w-[280px] max-w-none"
            />
          </div>
          <p className="text-text-muted text-sm">{dict.tagline}</p>
        </div>
        <div className="flex gap-8 text-sm text-text-secondary">
          <Link href={getLink("/privacy")} className="hover:text-white transition-colors">{dict.privacy}</Link>
          <Link href={getLink("/terms")} className="hover:text-white transition-colors">{dict.terms}</Link>
          <a href="https://blog.geotapp.com" className="hover:text-white transition-colors">Blog</a>
        </div>
        <div className="text-text-muted text-xs">
          &copy; {new Date().getFullYear()} GeoTapp. {dict.rights}
        </div>
      </div>
    </footer>
  );
}
