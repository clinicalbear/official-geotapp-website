import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { generateLocaleStaticParams } from '@/lib/i18n/static-params';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import RoiCalculatorClient from '@/components/roi-calculator/RoiCalculatorClient';

export { generateLocaleStaticParams as generateStaticParams };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as AppLocale);
  return {
    title: { absolute: dict.roi.meta_title },
    description: dict.roi.meta_desc,
    alternates: buildLocaleAlternates(locale, '/roi-calculator/'),
  };
}

export default async function RoiCalculatorPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ embed?: string }>;
}) {
  const { locale } = await params;
  const { embed } = await searchParams;
  const safeLocale = (SUPPORTED_LOCALES as readonly string[]).includes(locale)
    ? (locale as AppLocale)
    : ('it' as AppLocale);
  const dict = getDictionary(safeLocale);
  const trialUrl = `/${safeLocale}/trial/`;

  return (
    <RoiCalculatorClient
      dict={dict.roi}
      locale={safeLocale}
      trialUrl={trialUrl}
      embed={embed === '1'}
    />
  );
}
