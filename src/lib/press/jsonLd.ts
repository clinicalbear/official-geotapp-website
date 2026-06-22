/**
 * Costruttori di structured data (JSON-LD) per la pagina ufficio stampa.
 *
 * Tutte le URL sono ASSOLUTE (BASE + path localizzato) come richiesto da Google
 * per il rich-result testing.
 */

import type { AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';

const BASE = 'https://geotapp.com';

export function buildPressOrganizationJsonLd(locale: AppLocale): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GeoTapp',
    url: `${BASE}${localizePath('/', locale)}`,
    logo: `${BASE}/LogoGeoTapp.webp`,
    email: 'press@geotapp.com',
    founder: {
      '@type': 'Person',
      name: 'Michele Angelo Petraroli',
      jobTitle: 'Founder & CEO',
      url: 'https://www.linkedin.com/in/mikepetraroli/',
    },
    // Profili ufficiali del brand (gli stessi del footer del sito). TikTok da
    // aggiungere quando l'account esce dalla verifica.
    sameAs: [
      'https://www.linkedin.com/company/110850300/',
      'https://www.instagram.com/geotapp_official/',
      'https://www.facebook.com/profile.php?id=61573628884608',
      'https://x.com/GeoTappOfficial',
      'https://www.tiktok.com/@geotapp',
    ],
  };
}
