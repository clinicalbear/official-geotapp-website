import type { Review, Source } from '@/data/reviews';

function sourceName(s: Source): string {
  switch (s) {
    case 'capterra':
      return 'Capterra';
    case 'trustpilot':
      return 'Trustpilot';
    case 'g2':
      return 'G2';
    case 'getapp':
      return 'GetApp';
    case 'softwareadvice':
      return 'Software Advice';
  }
}

// Returns null on empty input so callers can skip injecting an empty schema.
export function buildReviewsSchema(reviews: Review[]) {
  if (reviews.length === 0) return null;

  const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'GeoTapp Flow',
    description: 'GPS-verified field workforce attendance and reporting platform.',
    brand: { '@type': 'Brand', name: 'GeoTapp' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avg.toFixed(1),
      reviewCount: String(reviews.length),
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.reviewer.displayName },
      datePublished: r.date,
      reviewBody: r.quote,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(r.rating),
        bestRating: '5',
        worstRating: '1',
      },
      publisher: { '@type': 'Organization', name: sourceName(r.source) },
    })),
  };
}
