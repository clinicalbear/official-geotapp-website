/**
 * Il giro completo: un turno intero in ottanta secondi, dalla timbratura al
 * report verificato dal committente.
 *
 * 🔴 Questo video NON passa da YouTube, e non e' una svista.
 * Parte da solo, muto, e un iframe che parte da solo caricherebbe Google prima
 * che il visitatore abbia risposto al banner dei cookie. Quindi il file lo
 * serviamo noi da public/video/ (vedi scripts/prepara-giro.py), e YouTube resta
 * dov'e': lo dichiariamo come `embedUrl` nei dati strutturati e lo linkiamo in
 * fondo alla pagina, per chi preferisce guardarlo li'.
 * Il video di avvio, che invece si guarda solo col clic, resta su YouTube:
 * vedi src/lib/video-tutorial.ts.
 *
 * Il sito ha sedici locali ma le lingue del video sono undici: le cinque
 * varianti inglesi guardano lo stesso file inglese.
 */
import type { AppLocale } from './i18n/config';

export type LinguaGiro =
  | 'it' | 'en' | 'de' | 'fr' | 'es' | 'nl' | 'pt' | 'da' | 'sv' | 'nb' | 'ru';

export const LINGUE_GIRO: LinguaGiro[] = [
  'it', 'en', 'de', 'fr', 'es', 'nl', 'pt', 'da', 'sv', 'nb', 'ru',
];

/** Ottanta secondi tondi: 2401 fotogrammi a 30, misurati sul file. */
export const GIRO_DURATA_SECONDI = 80;
export const GIRO_DURATA_ISO = 'PT1M20S';
export const GIRO_LARGHEZZA = 1920;
export const GIRO_ALTEZZA = 1080;
/** Il giorno in cui i sottotitoli e le undici voci sono andati online. */
export const GIRO_DATA = '2026-09-17';

/**
 * Le stesse undici voci caricate sul canale GeoTapp Official il 17/09/2026,
 * lette dall'API del canale e non trascritte da una pagina aperta a mano.
 */
export const GIRO_YOUTUBE_IDS: Record<LinguaGiro, string> = {
  it: 'KfcbBwPJ0lA',
  en: 'NJfAG2m6AJw',
  de: 'E8KNEk32ngg',
  fr: 'myzeCI6kBKM',
  es: 'UPHKSLP9g-k',
  nl: '-qmhx4G4cPc',
  pt: 'FgRZIGCPL5M',
  da: 'FUO_Og4kuiA',
  sv: 'Y_XLpFSakl4',
  nb: 'xAE87rxr1Jw',
  ru: '1px17_7F4vE',
};

/**
 * I sette atti, in secondi. Ricalcati su SCENE in geotapp-reel/scripts/
 * voce_giro.py: i fotogrammi sono 30 al secondo e la sigla dura i primi tre.
 * I titoli stanno in video-giro-contenuti.ts, una lingua per volta.
 */
export type Capitolo = { da: number; a: number };

export const GIRO_CAPITOLI: Capitolo[] = [
  { da: 3, a: 13 },   // si apre il turno
  { da: 13, a: 28 },  // il guasto, fotografato
  { da: 28, a: 33 },  // arriva da sola
  { da: 33, a: 50 },  // due ore dopo
  { da: 50, a: 60 },  // si chiude il turno
  { da: 60, a: 69 },  // la commessa si chiude
  { da: 69, a: 80 },  // verificato senza di noi
];

/**
 * Da dove far partire il video nelle pagine di prodotto: ognuna entra dal suo
 * atto, invece di far aspettare l'atto giusto a chi e' arrivato per quello.
 */
export const GIRO_INIZIO_TIMETRACKER = GIRO_CAPITOLI[0].da;
export const GIRO_INIZIO_FLOW = GIRO_CAPITOLI[2].da;
export const GIRO_INIZIO_VERIFICATORE = GIRO_CAPITOLI[6].da;

/** Da locale del sito a lingua del video: `en-gb` e compagni cadono su `en`. */
export function linguaGiro(locale?: AppLocale | string | null): LinguaGiro {
  const base = (locale || 'it').toLowerCase().split('-')[0];
  return (LINGUE_GIRO as string[]).includes(base) ? (base as LinguaGiro) : 'en';
}

export function giroVideoSrc(locale?: AppLocale | string | null): string {
  return `/video/giro-${linguaGiro(locale)}.mp4`;
}

/** La locandina: la sigla del video di QUELLA lingua, servita da noi. */
export function giroLocandina(locale?: AppLocale | string | null): string {
  return `/video/giro-${linguaGiro(locale)}.jpg`;
}

/** La miniatura per le schede social e per i dati strutturati. */
export function giroMiniatura(locale?: AppLocale | string | null): string {
  return `/video/giro-${linguaGiro(locale)}-og.jpg`;
}

export function giroSottotitoli(locale?: AppLocale | string | null): string {
  return `/video/giro-${linguaGiro(locale)}.vtt`;
}

export function giroYouTube(locale?: AppLocale | string | null): string {
  return `https://www.youtube.com/watch?v=${GIRO_YOUTUBE_IDS[linguaGiro(locale)]}`;
}

export function giroYouTubeEmbed(locale?: AppLocale | string | null): string {
  return `https://www.youtube-nocookie.com/embed/${GIRO_YOUTUBE_IDS[linguaGiro(locale)]}`;
}

/** I salti si leggono come su YouTube: 0:03, 1:09. */
export function orologio(secondi: number): string {
  return `${Math.floor(secondi / 60)}:${String(Math.floor(secondi % 60)).padStart(2, '0')}`;
}
