import type { Metadata } from 'next';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@/lib/i18n/config';
import { getInstallatoriContent } from '@/content/settori/installatori';
import SettorePageLayout from '@/components/SettorePageLayout';

const pathname = '/settori/installatori';
const url = `https://geotapp.com${pathname}`;

export async function generateMetadata(): Promise<Metadata> {
  const content = await getInstallatoriContent(DEFAULT_LOCALE);
  const localeAlternates = {
    ...Object.fromEntries(
      SUPPORTED_LOCALES.map((locale) => [
        locale,
        locale === DEFAULT_LOCALE ? url : `https://geotapp.com/${locale}${pathname}`,
      ]),
    ),
    'x-default': url,
  };
  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: { canonical: pathname, languages: localeAlternates },
    openGraph: {
      url,
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

export default async function InstallatoriPage() {
  const content = await getInstallatoriContent(DEFAULT_LOCALE);
  return <SettorePageLayout content={content} locale={DEFAULT_LOCALE} settore="installatori" />;
}
