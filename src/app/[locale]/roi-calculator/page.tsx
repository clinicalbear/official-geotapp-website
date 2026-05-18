import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import RoiCalculatorClient from '@/components/roi-calculator/RoiCalculatorClient';

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = (SUPPORTED_LOCALES as readonly string[]).includes(locale)
    ? (locale as AppLocale)
    : ('it' as AppLocale);
  const dict = getDictionary(safeLocale);
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
  searchParams: Promise<{ embed?: string; currency?: string }>;
}) {
  const { locale } = await params;
  const { embed, currency } = await searchParams;
  const safeLocale = (SUPPORTED_LOCALES as readonly string[]).includes(locale)
    ? (locale as AppLocale)
    : ('it' as AppLocale);
  const dict = getDictionary(safeLocale);
  const trialUrl = `/${safeLocale}/trial/`;

  // USD opt-in for US-facing visitors. ?currency=usd shows the calculator in
  // dollars (EUR base amounts auto-converted at 1.10x). Useful for FLSA blog
  // cluster to demo ROI in dollars without forking the calculator route.
  const safeCurrency: 'EUR' | 'USD' = currency?.toLowerCase() === 'usd' ? 'USD' : 'EUR';

  return (
    <RoiCalculatorClient
      dict={dict.roi}
      locale={safeLocale}
      trialUrl={trialUrl}
      embed={embed === '1'}
      currency={safeCurrency}
    />
  );
}
