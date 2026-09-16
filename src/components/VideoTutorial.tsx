'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { AppLocale } from '@/lib/i18n/config';
import {
  videoTutorialId,
  videoTutorialPoster,
  videoTutorialUrl,
} from '@/lib/video-tutorial';

/**
 * Il video di avvio, nella lingua di chi guarda.
 *
 * 🔴 Non e' un iframe di YouTube messo lì: finche' non si preme play non parte
 * NESSUNA richiesta verso Google. Si vede la locandina, che e' un fotogramma
 * vero del video servito da noi, e solo al clic si monta il lettore
 * youtube-nocookie. Il sito ha un banner dei cookie: un iframe caricato subito
 * gli passerebbe davanti, e sarebbe una promessa rotta.
 *
 * Per questo il dominio e' `youtube-nocookie.com` e non `youtube.com`, e per
 * questo sotto c'e' scritto che avviando il video lo si carica da YouTube: chi
 * non vuole, non preme.
 */
export default function VideoTutorial({
  locale,
  campagna = 'sito',
  className = '',
}: {
  locale: AppLocale | null;
  campagna?: string;
  className?: string;
}) {
  const [acceso, setAcceso] = useState(false);
  const t = getDictionary(locale).videoTutorial;
  const poster = videoTutorialPoster(locale);

  return (
    <div className={className}>
      <div className="relative w-full overflow-hidden rounded-2xl bg-slate-900 shadow-lg" style={{ aspectRatio: '16 / 9' }}>
        {acceso ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoTutorialId(locale)}?autoplay=1&rel=0&modestbranding=1`}
            title={t.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
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
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-xl transition-transform group-hover:scale-110">
                <Play size={26} className="ml-1 fill-[#123047] text-[#123047]" />
              </span>
            </span>
          </button>
        )}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">{t.note}</p>
      <p className="mt-1 text-xs text-slate-400">
        {t.privacy}{' '}
        <a
          href={videoTutorialUrl(locale, campagna)}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-slate-600"
        >
          YouTube
        </a>
      </p>
    </div>
  );
}
