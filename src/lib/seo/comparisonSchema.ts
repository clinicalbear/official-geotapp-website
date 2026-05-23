// ============================================================================
// Schema.org helpers for comparison pages (/confronto/geotapp-vs-*/)
//
// Provides:
//   - buildComparisonBreadcrumb(): three-level breadcrumb
//       GeoTapp > Confronto > GeoTapp vs <Competitor>
//   - buildComparisonArticle(): Article schema with localized headline,
//     author/publisher tied to the canonical Organization @id and a stable
//     datePublished (so re-renders never bump the "freshness" arbitrarily).
//
// All strings are real; no invented metrics or competitor reviewRating values.
// ============================================================================

const BREADCRUMB_LABEL: Record<string, string> = {
  it: 'Confronto',
  en: 'Comparison',
  de: 'Vergleich',
  fr: 'Comparaison',
  es: 'Comparación',
  pt: 'Comparação',
  nl: 'Vergelijking',
  da: 'Sammenligning',
  sv: 'Jämförelse',
  nb: 'Sammenligning',
  ru: 'Сравнение',
  'en-us': 'Comparison',
  'en-gb': 'Comparison',
  'en-au': 'Comparison',
  'en-ie': 'Comparison',
  'en-ca': 'Comparison',
};

export function buildComparisonBreadcrumb(args: {
  locale: string;
  pathname: string; // e.g. '/confronto/geotapp-vs-clockify/'
  competitorName: string; // e.g. 'Clockify'
}): Record<string, unknown> {
  const { locale, pathname, competitorName } = args;
  const label = BREADCRUMB_LABEL[locale] ?? BREADCRUMB_LABEL.en;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'GeoTapp',
        item: 'https://geotapp.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: label,
        item: `https://geotapp.com/${locale}/confronto/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `GeoTapp vs ${competitorName}`,
        item: `https://geotapp.com/${locale}${pathname}`,
      },
    ],
  };
}

export function buildComparisonArticle(args: {
  locale: string;
  pathname: string;
  headline: string;
  description: string;
  datePublished: string; // ISO YYYY-MM-DD — stable per comparison page
  dateModified?: string; // ISO YYYY-MM-DD — optional, defaults to datePublished
  image?: string;
}): Record<string, unknown> {
  const {
    locale,
    pathname,
    headline,
    description,
    datePublished,
    dateModified,
    image,
  } = args;
  const url = `https://geotapp.com/${locale}${pathname}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline,
    description,
    inLanguage: locale,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      '@type': 'Organization',
      name: 'GeoTapp',
      '@id': 'https://geotapp.com/#organization',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://geotapp.com/#organization',
      name: 'GeoTapp',
      logo: {
        '@type': 'ImageObject',
        url: 'https://geotapp.com/FaviconGeoTapp.png',
      },
    },
    image: image ?? 'https://geotapp.com/LogoGeoTapp.webp',
    url,
  };
}
