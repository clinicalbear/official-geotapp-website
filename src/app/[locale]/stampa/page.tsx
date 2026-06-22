import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildPressOrganizationJsonLd } from '@/lib/press/jsonLd';
import StampaView from '@/components/stampa/StampaView';

/**
 * Ufficio stampa / press page. Press-kit snello (boilerplate, fondatore, fatti,
 * risorse, contatto press@) + sezioni comunicati/rassegna data-driven nascoste
 * finché vuote. Slug "stampa" già localizzato via slug-map (en: press, de: presse, ...).
 *
 * Route: /[locale]/stampa/ .
 */

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

function safeLocale(locale: string): AppLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale)
    ? (locale as AppLocale)
    : ('it' as AppLocale);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(safeLocale(locale)).stampa;
  return {
    title: { absolute: dict.metaTitle },
    description: dict.metaDesc,
    alternates: buildLocaleAlternates(locale, '/stampa/'),
  };
}

export default async function StampaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolved = safeLocale(locale);
  const dict = getDictionary(resolved).stampa;
  return (
    <>
      <JsonLd data={buildPressOrganizationJsonLd(resolved)} />
      <StampaView d={dict} locale={resolved} />
    </>
  );
}
