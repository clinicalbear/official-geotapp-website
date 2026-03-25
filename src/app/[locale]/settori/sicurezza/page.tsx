export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

import type { Metadata } from 'next';
import { DEFAULT_LOCALE, type AppLocale } from '@/lib/i18n/config';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { getSicurezzaContent } from '@/content/settori/sicurezza';
import SettorePageLayout from '@/components/SettorePageLayout';

const pathname = '/settori/sicurezza';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = (locale ?? DEFAULT_LOCALE) as AppLocale;
  const content = await getSicurezzaContent(resolvedLocale);

  return {
    title: { absolute: content.meta.title },
    description: content.meta.description,
    alternates: buildLocaleAlternates(resolvedLocale, pathname + '/'),
    openGraph: {
      url: `https://geotapp.com/${resolvedLocale}${pathname}`,
      type: 'website',
      title: content.meta.title,
      description: content.meta.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: content.meta.title,
      description: content.meta.description,
    },
  };
}

export default async function SicurezzaLocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = (locale ?? DEFAULT_LOCALE) as AppLocale;
  const content = await getSicurezzaContent(resolvedLocale);
  return <SettorePageLayout content={content} locale={resolvedLocale} settore="sicurezza" />;
}
