/**
 * Il video di avvio: dal primo accesso alla prima timbratura, due minuti.
 *
 * 🔴 Dal 18/09/2026 NON passa piu' da YouTube: il file lo serviamo noi da
 * public/video/, come il giro completo. Cosi' chi apre la pagina del trial non
 * finisce su Google nel momento in cui preme play, e il video resta nostro
 * anche il giorno in cui il canale non c'e' piu'. Si rifanno con
 * scripts/prepara-tutorial.py, che li prende dal montaggio in geotapp-reel.
 *
 * Gli undici id di YouTube restano qui perche' le stesse voci stanno anche
 * sul canale, e servono a dichiarare `embedUrl` nei dati strutturati e a
 * linkare la copia pubblica. Sono stati letti dall'API del canale, non
 * trascritti da una pagina aperta a mano.
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

/** La locandina della lingua, disegnata (non e' un fotogramma) e servita da noi. */
export function videoTutorialPoster(locale?: AppLocale | string | null): string {
  return `/video/tutorial-${linguaVideo(locale)}.jpg`;
}

/** Il file vero, quello che serviamo noi. */
export function videoTutorialSrc(locale?: AppLocale | string | null): string {
  return `/video/tutorial-${linguaVideo(locale)}.mp4`;
}

/** I sottotitoli, ricavati dal parlato e dai tempi del montaggio. */
export function videoTutorialSottotitoli(locale?: AppLocale | string | null): string {
  return `/video/tutorial-${linguaVideo(locale)}.vtt`;
}

/** La stessa voce su YouTube: si linka, non si incorpora. */
export function videoTutorialYouTube(locale?: AppLocale | string | null): string {
  return `https://www.youtube.com/watch?v=${videoTutorialId(locale)}`;
}
