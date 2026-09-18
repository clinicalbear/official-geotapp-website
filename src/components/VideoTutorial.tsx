'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { AppLocale } from '@/lib/i18n/config';
import {
  linguaVideo,
  videoTutorialPoster,
  videoTutorialSottotitoli,
  videoTutorialSrc,
} from '@/lib/video-tutorial';
import { rendiScorribile, scorribile } from '@/lib/video-scorribile';
import { contaVideo } from '@/lib/video-conteggio';

/**
 * Il video di avvio, nella lingua di chi guarda: due minuti dal primo accesso
 * alla prima timbratura.
 *
 * 🔴 Non parte da solo, e non e' una dimenticanza. Qui si arriva mentre si
 * compila il modulo del trial o si legge la guida, e una pagina che si mette a
 * parlare addosso a chi sta scrivendo la propria email e' un dispetto. Si vede
 * la locandina, e finche' non si preme play non si scarica un byte di video.
 *
 * 🔴 Dal 18/09/2026 il file lo serviamo noi (prima era un iframe
 * youtube-nocookie montato al clic). Cosi' premere play non porta nessuno su
 * Google, i sottotitoli sono nostri, e il giorno che il canale cambia o
 * sparisce la pagina continua a funzionare. La copia su YouTube resta, e si
 * linka dove serve.
 */
export default function VideoTutorial({
  locale,
  className = '',
}: {
  locale: AppLocale | null;
  className?: string;
}) {
  const video = useRef<HTMLVideoElement>(null);
  const blob = useRef<string | null>(null);
  const [acceso, setAcceso] = useState(false);
  const t = getDictionary(locale).videoTutorial;
  const etichette = getDictionary(locale).videoGiro;
  const lingua = linguaVideo(locale);
  const poster = videoTutorialPoster(locale);

  // I sottotitoli restano disponibili dai comandi del lettore: qui l'audio c'e'
  // e chi ha premuto play lo sente, quindi non si accendono da soli.
  const sottotitoliPronti = useCallback(() => {
    const tracce = video.current?.textTracks;
    if (!tracce) return;
    for (let i = 0; i < tracce.length; i += 1) tracce[i].mode = 'hidden';
  }, []);

  useEffect(() => () => {
    if (blob.current) URL.revokeObjectURL(blob.current);
  }, []);

  // Il conteggio si attacca quando il lettore compare, cioe' dopo il clic:
  // prima non c'e' niente da contare. Vedi src/lib/video-conteggio.ts.
  useEffect(() => {
    const el = video.current;
    if (!acceso || !el) return;
    return contaVideo(el, 'tutorial', locale);
  }, [acceso, locale]);

  // Appena il filmato parte si prende la copia locale, altrimenti la barra del
  // lettore non si muove: vedi src/lib/video-scorribile.ts.
  const alVia = async () => {
    const el = video.current;
    if (!el || blob.current || scorribile(el)) return;
    const url = await rendiScorribile(el, videoTutorialSrc(locale), 0, sottotitoliPronti);
    if (url) blob.current = url;
  };

  return (
    <div className={className}>
      <div className="relative w-full overflow-hidden rounded-2xl bg-slate-900 shadow-lg" style={{ aspectRatio: '16 / 9' }}>
        {acceso ? (
          <video
            ref={video}
            className="absolute inset-0 h-full w-full"
            src={videoTutorialSrc(locale)}
            poster={poster}
            controls
            autoPlay
            playsInline
            controlsList="nodownload"
            aria-label={t.title}
            onPlaying={alVia}
          >
            <track
              kind="captions"
              src={videoTutorialSottotitoli(locale)}
              srcLang={lingua}
              label={etichette.captions}
            />
          </video>
        ) : (
          <button
            type="button"
            onClick={() => setAcceso(true)}
            aria-label={t.cta}
            className="group absolute inset-0 h-full w-full cursor-pointer border-0 p-0"
          >
            <Image
              src={poster}
              alt={t.title}
              width={1120}
              height={630}
              className="h-full w-full object-cover"
              priority={false}
            />
            <span className="absolute inset-0 flex items-center justify-center">
              {/* Posizione e forma nello style: fra le classi, `absolute` e
                  `rounded-full` insieme le spegne redesign-l.css:185. */}
              <span
                className="flex h-16 w-16 items-center justify-center bg-white/95 shadow-xl transition-transform group-hover:scale-110"
                style={{ borderRadius: 999 }}
              >
                <Play size={26} className="ml-1 fill-[#123047] text-[#123047]" />
              </span>
            </span>
          </button>
        )}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">{t.note}</p>
    </div>
  );
}
