

import type { Metadata } from 'next';

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
export { default } from '../../success/page';

// Pagina di ringraziamento post-pagamento Stripe: noindex per non sporcare la sitemap
// e non disperdere crawl budget su pagine senza valore SEO.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};
