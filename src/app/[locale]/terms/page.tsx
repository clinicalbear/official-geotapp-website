

import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: { absolute: 'Termini e Condizioni | GeoTapp' },
    description: 'Condizioni generali di servizio GeoTapp: utilizzo della piattaforma, abbonamenti, responsabilità e diritti degli utenti.',
    robots: { index: true, follow: true },
    alternates: buildLocaleAlternates(locale, '/terms'),
  };
}
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
export { default } from '../../terms/page';
