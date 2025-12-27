'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
          <h2 className="text-2xl font-display font-bold text-white mb-2">GeoTapp<span className="text-primary">.</span></h2>
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
