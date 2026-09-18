'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { AppLocale } from '@/lib/i18n/config';
import {
  GIRO_CAPITOLI,
  giroLocandina,
  giroSottotitoli,
  giroVideoSrc,
  linguaGiro,
  orologio,
} from '@/lib/video-giro';
import { GIRO_CONTENUTI } from '@/lib/video-giro-contenuti';

/**
 * Il giro completo: ottanta secondi di turno vero, nella lingua di chi guarda.
 *
 * 🔴 Il file lo serviamo noi, non YouTube. Questo video parte da solo, e un
 * iframe che parte da solo caricherebbe Google prima che il visitatore abbia
 * risposto al banner dei cookie. Vedi src/lib/video-giro.ts.
 *
 * Le quattro regole che rendono l'autoplay una cortesia e non un agguato:
 *
 *  1. muto, sempre, con il tasto per accendere l'audio bene in vista;
 *  2. i sottotitoli accesi finche' e' muto, perche' ottanta secondi di
 *     immagini senza parole non spiegano niente, e si spengono da soli quando
 *     l'audio si accende (le parole a quel punto si sentono);
 *  3. `preload="none"` e partenza solo quando la sezione entra davvero in
 *     campo: chi rimbalza non si scarica tre megabyte, e su rete a consumo
 *     (`saveData`) non parte affatto;
 *  4. chi ha chiesto meno animazioni al sistema vede la locandina e il
 *     pulsante, e decide lui.
 */
export default function VideoGiro({
  locale,
  inizio = 0,
  capitoli = false,
  className = '',
  id,
}: {
  locale: AppLocale | null;
  /** Secondo da cui far partire il video: le pagine di prodotto entrano dal loro atto. */
  inizio?: number;
  /** Mostra i sette atti sotto al video, come salti. */
  capitoli?: boolean;
  className?: string;
  id?: string;
}) {
  const video = useRef<HTMLVideoElement>(null);
  const [acceso, setAcceso] = useState(false);
  const [fermo, setFermo] = useState(false);
  const t = getDictionary(locale).videoGiro;
  const lingua = linguaGiro(locale);
  const contenuto = GIRO_CONTENUTI[lingua];

  const sottotitoli = useCallback((mostra: boolean) => {
    const tracce = video.current?.textTracks;
    if (!tracce) return;
    for (let i = 0; i < tracce.length; i += 1) {
      tracce[i].mode = mostra ? 'showing' : 'hidden';
    }
  }, []);

  useEffect(() => {
    const el = video.current;
    if (!el) return;

    sottotitoli(true);

    const pigro = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    // Rete a consumo dichiarata dal browser: il video non parte da solo.
    const rete = (navigator as { connection?: { saveData?: boolean } }).connection;
    if (pigro || rete?.saveData) {
      setFermo(true);
      return;
    }

    const osservatore = new IntersectionObserver(
      ([voce]) => {
        if (voce.isIntersecting) {
          el.play().catch(() => setFermo(true));
        } else if (!el.paused) {
          el.pause();
        }
      },
      { threshold: 0.5 },
    );
    osservatore.observe(el);
    return () => osservatore.disconnect();
  }, [sottotitoli]);

  const accendi = () => {
    const el = video.current;
    if (!el) return;
    const prossimo = !acceso;
    el.muted = !prossimo;
    setAcceso(prossimo);
    // Con l'audio acceso le parole si sentono, e i sottotitoli restano
    // disponibili dai comandi del lettore per chi li vuole comunque.
    sottotitoli(!prossimo);
    if (el.paused) el.play().catch(() => undefined);
  };

  const saltaA = (secondo: number) => {
    const el = video.current;
    if (!el) return;
    el.currentTime = secondo;
    setFermo(false);
    el.play().catch(() => undefined);
  };

  return (
    <div className={className} id={id}>
      <div className="relative w-full overflow-hidden rounded-2xl bg-slate-900 shadow-lg" style={{ aspectRatio: '16 / 9' }}>
        <video
          ref={video}
          className="absolute inset-0 h-full w-full"
          // Il frammento temporale fa aprire il file dal secondo giusto senza
          // che si veda il salto: currentTime scritto a mano arriva dopo.
          src={inizio > 0 ? `${giroVideoSrc(locale)}#t=${inizio}` : giroVideoSrc(locale)}
          poster={giroLocandina(locale)}
          preload="none"
          muted
          playsInline
          controls
          controlsList="nodownload"
          aria-label={t.posterAlt}
        >
          <track
            kind="captions"
            src={giroSottotitoli(locale)}
            srcLang={lingua}
            label={t.captions}
            default
          />
        </video>

        {/* 🔴 Le classi di posizione e forma stanno nello style, non fra le
            classi: redesign-l.css:185 spegne con `display:none !important`
            qualunque cosa abbia insieme `absolute` e `rounded-full`, perche'
            cosi' cancella i cerchi sfocati del vecchio eroe. Scritto con le
            classi, questo pulsante spariva, e il video restava muto senza via
            d'uscita. */}
        <button
          type="button"
          onClick={accendi}
          aria-pressed={acceso}
          className="flex items-center gap-2 bg-white/95 px-4 py-2 text-sm font-semibold text-[#123047] shadow-lg transition hover:bg-white"
          style={{ position: 'absolute', left: 12, top: 12, borderRadius: 999 }}
        >
          {acceso ? <VolumeX size={18} /> : <Volume2 size={18} />}
          {acceso ? t.audioOff : t.audioOn}
        </button>

        {fermo && (
          <button
            type="button"
            onClick={() => saltaA(inizio)}
            className="flex h-full w-full items-center justify-center bg-slate-900/35 text-sm font-semibold text-white"
            style={{ position: 'absolute', inset: 0 }}
          >
            <span className="bg-white/95 px-5 py-3 text-[#123047] shadow-xl" style={{ borderRadius: 999 }}>{t.play}</span>
          </button>
        )}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">{t.note}</p>

      {capitoli && (
        <div className="mt-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">{t.chapters}</p>
          <ul className="flex flex-wrap gap-2">
            {GIRO_CAPITOLI.map((c, i) => (
              <li key={c.da}>
                <button
                  type="button"
                  onClick={() => saltaA(c.da)}
                  className="rounded-full border border-slate-300 px-3 py-1.5 text-sm text-slate-700 transition hover:border-[#2DA4E4] hover:text-[#123047]"
                >
                  <span className="mr-2 tabular-nums text-slate-400">{orologio(c.da)}</span>
                  {contenuto.atti[i]}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
