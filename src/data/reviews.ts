export type Source = 'capterra' | 'trustpilot' | 'g2' | 'getapp' | 'softwareadvice';

export type Review = {
  id: string;
  source: Source;
  sourceUrl: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;          // ISO YYYY-MM-DD
  /** BCP-47 language code of the quote and title text. */
  lang: string;
  reviewer: {
    displayName: string;
    role?: string;
    companySize?: string;
    industry?: string;
  };
  quote: string;
  title?: string;
};

export const REVIEWS: Review[] = [
  {
    id: 'capterra-2026-05-16-marika',
    source: 'capterra',
    sourceUrl: 'https://www.capterra.com/p/10041643/GeoTapp-Flow/',
    rating: 5,
    date: '2026-05-16',
    lang: 'en',
    reviewer: {
      displayName: 'Marika B.',
      role: 'Informatore Scientifico',
      industry: 'Medical devices',
      companySize: '1',
    },
    title: 'GeoTapp Flow is the Top',
    quote:
      'The app is intuitive and easy to use. Everything is entered neatly and organized. A valuable tool for organizing your daily work. I highly recommend trying it; it is useful for keeping everything under control.',
  },
  {
    id: 'capterra-2026-05-11',
    source: 'capterra',
    sourceUrl: 'https://www.capterra.com/p/10041643/GeoTapp-Flow/',
    rating: 5,
    date: '2026-05-11',
    lang: 'en',
    reviewer: {
      displayName: 'Capterra verified reviewer',
      industry: 'Events services',
      companySize: '51-200',
    },
    title: 'A good app for a good work',
    quote:
      'Very intuitive, easy and quick to use. My favorite features is the ability to centralize geographic time stamps and expense reports in a single environment, eliminating wasted time and data misunderstandings. My experience with Geotapp Flow is positive for organizations seeking to eliminate administrative bottleneck and desire a transparent view of operation. The added value lies not only in the "control" but also in the availability of data, which allows for strategic planning based on numerical evidence rather than estimates.',
  },
  {
    id: 'trustpilot-2026-04-23-facchetti',
    source: 'trustpilot',
    sourceUrl: 'https://it.trustpilot.com/review/geotapp.com',
    rating: 5,
    date: '2026-04-23',
    lang: 'it',
    reviewer: {
      displayName: 'Luca Facchetti',
    },
    title: 'È una buona applicazione e facile da usare',
    quote: 'È una buona applicazione e facile da usare.',
  },
  {
    id: 'trustpilot-2026-04-23-berizzi',
    source: 'trustpilot',
    sourceUrl: 'https://it.trustpilot.com/review/geotapp.com',
    rating: 5,
    date: '2026-04-23',
    lang: 'en',
    reviewer: {
      displayName: 'Marika Berizzi',
    },
    title: 'Geotapp is a practical App',
    quote: 'Geotapp is a practical App, simple to use and intuitive. It has everything I need. Highly recommended.',
  },
];
