// Overview: layout.tsx
// Module: src > app
// Purpose: Root layout — exports site-wide metadata only.
//          html/body rendering (including <html lang={locale}>) is handled by
//          [locale]/layout.tsx, which has access to the locale route parameter.
//          This separation is required so each locale page gets the correct lang attribute.

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://geotapp.com'),
  title: {
    default: 'GeoTapp | La piattaforma che rende il lavoro verificabile',
    template: '%s | GeoTapp',
  },
  description:
    'GeoTapp: app per timbratura con GPS e certificazione interventi. Report sigillati, prove fotografiche e documentazione verificabile da terzi. Per imprese con operatori sul campo.',
  // No global canonical — each page sets its own via generateMetadata.
  // A hardcoded canonical:'/' here would poison every locale page as a
  // duplicate of the homepage and prevent Google from indexing them.
  keywords: [
    'timbratura geolocalizzata',
    'app presenze gps',
    'app timbratura gps',
    'gestione tecnici sul campo',
    'gestione personale mobilità',
    'gestione turni dipendenti fuori sede',
    'software gestione interventi',
    'field service management',
    'GPS time tracking app',
    'verifica report lavoro',
    'piattaforma SaaS',
    'integrazione Stripe',
    'GDPR compliant',
  ],
  openGraph: {
    type: 'website',
    url: 'https://geotapp.com',
    siteName: 'GeoTapp',
    title: 'GeoTapp | La piattaforma che rende il lavoro verificabile',
    description:
      'GeoTapp: app per timbratura con GPS e certificazione interventi. Report sigillati, prove fotografiche e documentazione verificabile da terzi. Per imprese con operatori sul campo.',
    images: [{ url: '/logoFlow.png', width: 1200, height: 630, alt: 'GeoTapp — Timbratura GPS e Gestione Personale in Mobilità' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GeoTapp | La piattaforma che rende il lavoro verificabile',
    description:
      'GeoTapp: app per timbratura con GPS e certificazione interventi. Report sigillati, prove fotografiche e documentazione verificabile da terzi. Per imprese con operatori sul campo.',
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
