import { DEFAULT_LOCALE, type AppLocale } from '@/lib/i18n/config';
import { getVerifierCopy } from '@/content/verifier';
import VerifierContent from './VerifierContent';

export default async function GeoTappVerifierPage({
  params,
}: {
  params?: Promise<{ locale?: string }>;
}) {
  let locale: AppLocale = DEFAULT_LOCALE;
  try {
    const resolved = await params;
    if (resolved?.locale) locale = resolved.locale as AppLocale;
  } catch {
    // params not available at base route
  }
  const copy = await getVerifierCopy(locale);
  return <VerifierContent copy={copy} locale={locale} />;
}
