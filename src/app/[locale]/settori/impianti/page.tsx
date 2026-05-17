export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

import type { Metadata } from 'next';
import { DEFAULT_LOCALE, type AppLocale } from '@/lib/i18n/config';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { getImpiantiContent } from '@/content/settori/impianti';
import SettorePageLayout from '@/components/SettorePageLayout';
import BlogHighlights from '@/components/BlogHighlights';

const pathname = '/settori/impianti';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = (locale ?? DEFAULT_LOCALE) as AppLocale;
  const content = await getImpiantiContent(resolvedLocale);

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

export default async function ImpiantiLocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = (locale ?? DEFAULT_LOCALE) as AppLocale;
  const content = await getImpiantiContent(resolvedLocale);
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      { '@type': 'ListItem', position: 2, name: content.meta.title.replace(/ [|—].*$/, '').trim(), item: `https://geotapp.com/${resolvedLocale}/settori/impianti/` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <SettorePageLayout content={content} locale={resolvedLocale} settore="impianti" />
      <BlogHighlights locale={resolvedLocale} categoryId={65} />
    </>
  );
}
