import Link from 'next/link';
import { comparisonBlogLink } from '@/lib/seo/comparisonBlogLinks';

/**
 * Link dalla compare page del sito all'ARTICOLO blog di confronto gemello.
 * Chiude il ciclo di autorita' interna (home -> hub -> compare -> articolo blog);
 * l'articolo blog e' quello che porta le citazioni AI. Rende nulla se per quel
 * competitor non esiste un articolo (blink, nobadge, personio, sage).
 */
export function CompareBlogLink({ competitor, locale }: { competitor: string; locale: string }) {
  const link = comparisonBlogLink(competitor, locale);
  if (!link) return null;
  return (
    <div className="text-center mb-16">
      <Link href={link.href} className="inline-block text-primary hover:underline font-medium">
        {link.label} &rarr;
      </Link>
    </div>
  );
}
