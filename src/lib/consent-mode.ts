import { headers } from 'next/headers';

/**
 * Paesi soggetti a GDPR EU / EEA / UK GDPR / Swiss FADP.
 * Per questi utenti mostriamo il consent banner e applichiamo
 * consent_default = denied. Tutti gli altri vengono trattati come
 * jurisdiction senza obbligo di consent per analytics non-essenziali
 * (USA, Canada, Australia, India, Giappone, etc.) con
 * consent_default = granted e nessun banner.
 *
 * UK GDPR (gestito da ICO) richiede comunque consent per analytics
 * cookies non-essenziali, quindi GB resta in lista.
 * CH segue FADP che è sostanzialmente allineato a GDPR.
 */
const EU_EEA_UK_CH = new Set([
  // EU-27
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
  'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
  'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  // EEA (non-EU)
  'IS', 'LI', 'NO',
  // UK + Switzerland
  'GB', 'CH',
]);

export type ConsentMode = 'eu' | 'rest';

/**
 * Determina il regime consent in base all'IP del visitatore (Cloudflare).
 *
 * - 'eu': GDPR-style, default denied, banner obbligatorio
 * - 'rest': default granted, nessun banner
 *
 * Fallback su 'eu' se l'header non è disponibile (safe-by-default).
 */
export async function getConsentMode(): Promise<ConsentMode> {
  try {
    const h = await headers();
    const country = (h.get('cf-ipcountry') || h.get('x-vercel-ip-country') || '').toUpperCase();
    if (!country) return 'eu';
    return EU_EEA_UK_CH.has(country) ? 'eu' : 'rest';
  } catch {
    return 'eu';
  }
}
