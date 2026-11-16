'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Mattoni delle schermate vere dei prodotti (Flow 1440x813, telefono 540x1202): l'immagine
 * (se il file non c'e' sparisce invece di mostrare un'icona rotta: il controllo gira anche dopo
 * l'idratazione, perche' l'errore puo' arrivare prima che React agganci onError) e la cornice
 * di telefono disegnata in CSS.
 */

export interface Shot {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  kind: 'flow' | 'phone';
}

export const FLOW_SIZE = { w: 1440, h: 813 };
export const PHONE_SIZE = { w: 540, h: 1202 };
const size = (k: Shot['kind']) => (k === 'flow' ? FLOW_SIZE : PHONE_SIZE);

export function Img({ shot, eager, className }: { shot: Shot; eager?: boolean; className?: string }) {
  const ref = useRef<HTMLImageElement>(null);
  const [broken, setBroken] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setBroken(true);
  }, []);
  if (broken) return null;
  const s = size(shot.kind);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      className={className}
      src={shot.src}
      alt={shot.alt}
      width={s.w}
      height={s.h}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      {...(eager ? { fetchPriority: 'high' as const } : {})}
      onError={() => setBroken(true)}
    />
  );
}

/** Cornice di telefono disegnata in CSS attorno a una schermata. */
export function PhoneFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`nv-phone ${className}`}>
      <div className="nv-phone-screen">{children}</div>
    </div>
  );
}

