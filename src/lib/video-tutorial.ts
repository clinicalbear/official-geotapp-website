/**
 * Il video di avvio: dal primo accesso alla prima timbratura, due minuti.
 *
 * Gli undici id sono quelli caricati sul canale GeoTapp Official il 16/09/2026,
 * letti dall'API del canale e non trascritti da una pagina aperta a mano.
 *
 * Il sito ha sedici locali ma le lingue vere sono undici: le cinque varianti
 * inglesi (US, UK, AU, IE, CA) guardano lo stesso video inglese. Quindi la
 * copertura e' piena, nessun locale resta senza.
 */
import type { AppLocale } from './i18n/config';

/** Le undici lingue in cui il video esiste davvero. */
export type LinguaVideo =
  | 'it' | 'en' | 'de' | 'fr' | 'es' | 'nl' | 'pt' | 'da' | 'sv' | 'nb' | 'ru';

export const VIDEO_TUTORIAL_IDS: Record<LinguaVideo, string> = {
  it: 'XnbJsEGBgvI',
  en: 'NnKKTeWP_g0',
  de: 'imbnRtQGl_Q',
  fr: 'iyjDTwZboiU',
  es: 'vdRYBpOEB-o',
  nl: '5uqvHnSQZYE',
  pt: 'klI3hlLJSdc',
  da: 'H8x1JdPCfto',
  sv: 'k4S4Ff7sAcA',
  nb: 'n_Gwd2aliGQ',
  ru: 'i-V2n9WYePk',
};

/** Da locale del sito a lingua del video: `en-gb` e compagni cadono su `en`. */
export function linguaVideo(locale?: AppLocale | string | null): LinguaVideo {
  const base = (locale || 'it').toLowerCase().split('-')[0];
  return (base in VIDEO_TUTORIAL_IDS ? base : 'en') as LinguaVideo;
}

export function videoTutorialId(locale?: AppLocale | string | null): string {
  return VIDEO_TUTORIAL_IDS[linguaVideo(locale)];
}

/** La locandina: un fotogramma vero del video di QUELLA lingua, servito da noi. */
export function videoTutorialPoster(locale?: AppLocale | string | null): string {
  return `/video/tutorial-${linguaVideo(locale)}.jpg`;
}

/** L'indirizzo pubblico, per chi preferisce aprirlo su YouTube. */
export function videoTutorialUrl(
  locale?: AppLocale | string | null,
  campagna = 'sito',
): string {
  return `https://youtu.be/${videoTutorialId(locale)}?utm_source=geotapp.com&utm_medium=web&utm_campaign=${encodeURIComponent(campagna)}`;
}
