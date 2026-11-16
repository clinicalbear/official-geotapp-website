'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Una schermata. Se il file non c'e' (le immagini arrivano dopo il testo) la figura sparisce
 * invece di mostrare un'icona rotta: il controllo gira anche dopo l'idratazione, perche'
 * l'errore di un'immagine puo' arrivare prima che React abbia agganciato onError.
 */
export default function NovitaShot({
  src,
  alt,
  width,
  height,
  caption,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [broken, setBroken] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setBroken(true);
  }, []);
  return (
    <figure className="nv-fig" hidden={broken}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img ref={ref} src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" onError={() => setBroken(true)} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
