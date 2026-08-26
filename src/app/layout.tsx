//          html/body rendering (including <html lang={locale}>) is handled by
//          [locale]/layout.tsx, which has access to the locale route parameter.
//          This separation is required so each locale page gets the correct lang attribute.

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://geotapp.com'),
  // Facebook/Meta Business domain verification (Events Manager / domain ownership).
  other: {
    'facebook-domain-verification': 'a3lsnm3iee2gxdgt6b6npm6k39mfx3',
  },
  title: {
    // Neutral fallback, locale-specific pages override with title: { absolute: '...' }.
    // Keeping this brand-only avoids an Italian title leaking onto EN/DE/FR pages that
    // don't export their own title (e.g. /login, /success).
    default: 'GeoTapp',
    template: '%s | GeoTapp',
  },
  description:
    'GeoTapp: sealed field work reports with GPS-tagged timestamps and live-camera photo evidence. Sessions are locked after closing, and the seal can be verified independently by anyone. GDPR compliant.',
  // No global canonical, each page sets its own via generateMetadata.
  // A hardcoded canonical:'/' here would poison every locale page as a
  // duplicate of the homepage and prevent Google from indexing them.
  keywords: [
    'field service management',
    'GPS time tracking',
    'time tracking field workers',
    'verifiable work reports',
    'timbratura GPS',
    'app timbrature geolocalizzate',
    'app per impresa di pulizie',
    'app presenze GPS',
    'GPS Zeiterfassung',
    'suivi GPS terrain',
    'GDPR compliant',
    'field work verification',
  ],
  openGraph: {
    type: 'website',
    url: 'https://geotapp.com',
    siteName: 'GeoTapp',
    title: 'GeoTapp - Field Work Verification Platform',
    description:
      'GPS-tagged attendance, sealed reports and live-camera photo evidence for field service companies. GDPR compliant. Fewer disputes.',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'GeoTapp - GPS Field Work Verification Platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GeoTapp - Field Work Verification Platform',
    description:
      'GPS-tagged attendance, sealed reports and live-camera photo evidence for field service companies. GDPR compliant. Fewer disputes.',
    images: ['/logoFlow.webp'],
  },
  icons: {
    icon: '/FaviconGeoTapp.png',
  },
};

// html/body are rendered by [locale]/layout.tsx (has locale param → correct lang attribute).
// All routes go through [locale]/ so this shell is never rendered for HTML pages.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children as React.ReactElement;
}
