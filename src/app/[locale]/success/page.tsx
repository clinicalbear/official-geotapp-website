

import type { Metadata } from 'next';

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
export { default } from '../../success/page';

// Pagina di ringraziamento post-pagamento Stripe: noindex per non sporcare la sitemap
// e non disperdere crawl budget su pagine senza valore SEO.
const TITOLI: Record<string, string> = { it: 'Pagamento riuscito | GeoTapp', en: 'Payment successful | GeoTapp', fr: 'Paiement réussi | GeoTapp', es: 'Pago realizado | GeoTapp', pt: 'Pagamento efetuado | GeoTapp', da: 'Betaling gennemført | GeoTapp' };

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: { absolute: TITOLI[locale] ?? TITOLI[locale.split('-')[0]] ?? TITOLI.en },
    robots: { index: false, follow: false },
  };
}
