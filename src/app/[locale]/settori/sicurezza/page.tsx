export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

import type { Metadata } from 'next';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type AppLocale } from '@/lib/i18n/config';
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
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [l, `https://geotapp.com/${l}${pathname}`]),
  ) as Record<string, string>;
  languages['x-default'] = `https://geotapp.com${pathname}`;

  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: `/${resolvedLocale}${pathname}`,
      languages,
    },
    openGraph: {
      url: `https://geotapp.com/${resolvedLocale}${pathname}`,
      type: 'website',
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
