import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { AppLocale } from '@/lib/i18n/config';

// Titolo e descrizione nella lingua della pagina: prima erano quelli generici, in inglese.
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as AppLocale).login_hub;
  return {
    title: { absolute: t.meta_title },
    description: t.meta_description,
    robots: { index: false, follow: false },
  };
}
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
export { default } from '../../login/page';
