/**
 * Quante volte i video vengono guardati, e per quanto.
 *
 * Due strade, perche' nessuna delle due da sola dice la verita':
 *
 *  1. **GA4**, con gli eventi `video_start`, `video_progress` (un quarto per
 *     volta) e `video_audio`. E' ricco e si incrocia con il resto del sito, ma
 *     vede solo chi ha accettato i cookie. Quanti siano lo sappiamo dal
 *     contatore del banner, ma restano una parte.
 *  2. **Il contatore nostro**, in KV, senza cookie e senza identificatori,
 *     esattamente come quello del consenso (src/app/api/consent/route.ts).
 *     Conta due cose per visione: che il video e' partito, e quanti secondi e'
 *     stato guardato, arrotondati a dieci. Nient'altro: niente pagina
 *     precedente, niente IP, niente identificatore. Non si puo' risalire a una
 *     persona perche' non c'e' niente da cui risalire.
 *
 * 🔴 I secondi sono quelli **davvero visti**, non la posizione nella barra:
 * si sommano gli intervalli fra un `timeupdate` e l'altro mentre suona, e i
 * salti si scartano. Chi apre, salta alla fine e chiude, conta per i due
 * secondi che ha guardato.
 *
 * Il piano gratuito di KV da' mille scritture al giorno e qui ne servono due
 * per visione. Se un giorno il video andasse oltre le cinquecento visioni
 * quotidiane, questo va spostato su un Durable Object: la `put` che fallisce
 * viene ingoiata, quindi si perderebbe il conteggio in silenzio, non il video.
 */
import { trackEvent } from './analytics';

export type QualeVideo = 'giro' | 'tutorial';

/** I secondi si arrotondano a dieci: il numero esatto non serve a niente. */
function scaglione(secondi: number): number {
  return Math.min(Math.round(secondi / 10) * 10, 600);
}

function manda(corpo: Record<string, string | number>): void {
  try {
    const dati = new Blob([JSON.stringify(corpo)], { type: 'application/json' });
    // La barra finale ci vuole: `trailingSlash: true` fa un 308 su
    // /api/video-stats, e un reindirizzamento su una battuta mandata mentre la
    // pagina si chiude e' un conteggio che si perde.
    if (navigator.sendBeacon?.('/api/video-stats/', dati)) return;
    void fetch('/api/video-stats/', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(corpo),
      keepalive: true,
    }).catch(() => undefined);
  } catch {
    /* un conteggio perso non deve rompere la pagina */
  }
}

/**
 * Attacca il conteggio a un lettore. Torna la funzione da chiamare quando il
 * componente se ne va, che chiude anche il conto dei secondi.
 */
export function contaVideo(
  el: HTMLVideoElement,
  quale: QualeVideo,
  locale: string | null | undefined,
): () => void {
  const lingua = (locale || 'it').toLowerCase();
  let partito = false;
  let chiuso = false;
  let visti = 0;
  let ultimo = 0;
  let quartoDetto = 0;

  const suPlaying = () => {
    ultimo = el.currentTime;
    if (partito) return;
    partito = true;
    trackEvent('video_start', { video: quale, lingua, muto: el.muted ? 1 : 0 });
    manda({ video: quale, locale: lingua, evento: 'start' });
  };

  const suTempo = () => {
    const passo = el.currentTime - ultimo;
    // Un passo negativo o piu' lungo di un secondo e' un salto, non visione.
    if (passo > 0 && passo < 1) visti += passo;
    ultimo = el.currentTime;

    const durata = el.duration || 0;
    if (!durata) return;
    const quarto = Math.min(Math.floor((visti / durata) * 4) * 25, 100);
    if (quarto > quartoDetto && quarto > 0) {
      quartoDetto = quarto;
      trackEvent('video_progress', { video: quale, lingua, quarto });
    }
  };

  const suAudio = () => {
    if (!el.muted) trackEvent('video_audio', { video: quale, lingua });
  };

  const chiudi = () => {
    if (chiuso || !partito) return;
    chiuso = true;
    const secondi = scaglione(visti);
    trackEvent('video_end', { video: quale, lingua, secondi });
    manda({ video: quale, locale: lingua, evento: 'visto', secondi });
  };

  const suNascosta = () => {
    if (document.visibilityState === 'hidden') chiudi();
  };

  el.addEventListener('playing', suPlaying);
  el.addEventListener('timeupdate', suTempo);
  el.addEventListener('volumechange', suAudio);
  el.addEventListener('ended', chiudi);
  document.addEventListener('visibilitychange', suNascosta);
  window.addEventListener('pagehide', chiudi);

  return () => {
    chiudi();
    el.removeEventListener('playing', suPlaying);
    el.removeEventListener('timeupdate', suTempo);
    el.removeEventListener('volumechange', suAudio);
    el.removeEventListener('ended', chiudi);
    document.removeEventListener('visibilitychange', suNascosta);
    window.removeEventListener('pagehide', chiudi);
  };
}
