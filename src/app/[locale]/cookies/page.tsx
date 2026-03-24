import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: { absolute: 'Cookie Policy | GeoTapp' },
    description: 'Cookie policy di GeoTapp: tipologie di cookie utilizzati, finalità e come gestirli.',
    robots: { index: true, follow: true },
    alternates: buildLocaleAlternates(locale, '/cookies'),
  };
}
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
export { default } from '../../cookies/page';
