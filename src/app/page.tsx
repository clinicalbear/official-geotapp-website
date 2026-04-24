import type { Metadata } from 'next';
import HomeClient from './HomeClient';

// The bare `/` path is geo-redirected to `/{locale}/` by middleware (308).
// This metadata is a safety net: if the redirect is somehow bypassed,
// Google sees noindex + canonical pointing to /it/, preventing
// cannibalizzazione between `/` and `/it/`.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://geotapp.com/it/' },
};

export default function RootPage() {
  return <HomeClient />;
}
