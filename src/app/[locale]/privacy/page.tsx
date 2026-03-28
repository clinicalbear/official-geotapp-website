

import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: { absolute: 'Informativa Privacy | GeoTapp' },
    description: 'Informativa sulla privacy di GeoTapp: come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali nel rispetto del GDPR.',
    robots: { index: true, follow: true },
    alternates: buildLocaleAlternates(locale, '/privacy'),
  };
}
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
export { default } from '../../privacy/page';
