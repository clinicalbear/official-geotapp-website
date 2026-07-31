'use client';

import { useEffect, useState } from 'react';

/**
 * Sipario di caricamento della direzione L.
 * Nero pieno, marchio in dissolvenza, riga verde che si riempie, poi si alza.
 * Si mostra una volta per sessione e non blocca mai la pagina: se qualcosa
 * tarda, un timeout lo rimuove comunque.
 */
export default function LSipario() {
  const [via, setVia] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('l-sipario')) { setVia(true); return; }
    sessionStorage.setItem('l-sipario', '1');
    const t = setTimeout(() => setVia(true), 2600);
    return () => clearTimeout(t);
  }, []);

  if (via) return null;

  return (
    <div className="l-load" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/LogoGeoTapp.webp" alt="" />
      <div className="bar"><i /></div>
    </div>
  );
}
