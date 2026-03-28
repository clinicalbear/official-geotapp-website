//          html/body rendering (including <html lang={locale}>) is handled by
//          [locale]/layout.tsx, which has access to the locale route parameter.
//          This separation is required so each locale page gets the correct lang attribute.

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://geotapp.com'),
  title: {
    // Neutral fallback — locale-specific pages override with title: { absolute: '...' }.
    // Keeping this brand-only avoids an Italian title leaking onto EN/DE/FR pages that
    // don't export their own title (e.g. /login, /success).
    default: 'GeoTapp',
    template: '%s | GeoTapp',
  },
  description:
    'GeoTapp: GPS-verified field work documentation. Sealed reports, timestamped photo evidence and tamper-proof records anyone can verify independently. GDPR compliant.',
  // No global canonical — each page sets its own via generateMetadata.
  // A hardcoded canonical:'/' here would poison every locale page as a
  // duplicate of the homepage and prevent Google from indexing them.
  keywords: [
    'field service management',
    'GPS time tracking',
    'verifiable work reports',
    'timbratura GPS',
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
    title: 'GeoTapp — Field Work Verification Platform',
    description:
      'GPS-verified attendance, tamper-proof reports and photo evidence for field service companies. GDPR compliant. Zero disputes.',
    images: [{ url: '/logoFlow.png', width: 1200, height: 630, alt: 'GeoTapp — GPS Field Work Verification Platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GeoTapp — Field Work Verification Platform',
    description:
      'GPS-verified attendance, tamper-proof reports and photo evidence for field service companies. GDPR compliant. Zero disputes.',
    images: ['/logoFlow.png'],
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
