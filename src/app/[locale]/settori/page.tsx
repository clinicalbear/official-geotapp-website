export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

import type { AppLocale } from '@/lib/i18n/config';
import SettoriPage from '../../settori/page';

export default async function LocaleSettoriPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <SettoriPage locale={locale as AppLocale} />;
}
