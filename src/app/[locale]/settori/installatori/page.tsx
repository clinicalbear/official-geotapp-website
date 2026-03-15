export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

import type { Metadata } from 'next';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type AppLocale } from '@/lib/i18n/config';
import { getInstallatoriContent } from '@/content/settori/installatori';
import SettorePageLayout from '@/components/SettorePageLayout';

const pathname = '/settori/installatori';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = (locale ?? DEFAULT_LOCALE) as AppLocale;
  const content = await getInstallatoriContent(resolvedLocale);
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

export default async function InstallatoriLocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = (locale ?? DEFAULT_LOCALE) as AppLocale;
  const content = await getInstallatoriContent(resolvedLocale);
  return <SettorePageLayout content={content} locale={resolvedLocale} settore="installatori" />;
}
