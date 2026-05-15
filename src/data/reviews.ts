export type Source = 'capterra' | 'trustpilot' | 'g2' | 'getapp' | 'softwareadvice';

export type Review = {
  id: string;
  source: Source;
  sourceUrl: string;
  rating: number;        // 1-5
  date: string;          // ISO YYYY-MM-DD
  lang: string;          // BCP-47
  reviewer: {
    displayName: string;
    role?: string;
    companySize?: string;
    industry?: string;
  };
  quote: string;
  title?: string;
};

export const REVIEWS: Review[] = [];
