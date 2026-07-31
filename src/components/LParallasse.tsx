'use client';

import { useEffect } from 'react';

/**
 * Porta sul sito vero gli effetti della direzione L approvata:
 * - le sezioni della home diventano pagine che si appoggiano una sull'altra
 * - quella sotto rientra e si spegne mentre l'altra la copre
 * Non tocca il markup ne' i contenuti: agisce su quello che c'e' gia'.
 */
export default function LParallasse() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (innerWidth < 1000) return;

    const host = document.querySelector('main, body > div');
    if (!host) return;
    const pagine = Array.from(host.querySelectorAll(':scope > section')) as HTMLElement[];
    if (pagine.length < 3) return;

    pagine.forEach((p, i) => {
      p.classList.add('l-pagina');
      if (i === 0) p.classList.add('l-prima');
    });

    let atteso = false;
    const calcola = () => {
      for (let i = 0; i < pagine.length - 1; i++) {
        const b = pagine[i + 1].getBoundingClientRect();
        const c = 1 - Math.min(1, Math.max(0, b.top / innerHeight));
        pagine[i].style.setProperty('--cov', c.toFixed(3));
      }
    };
    const onScroll = () => {
      if (atteso) return;
      atteso = true;
      requestAnimationFrame(() => { calcola(); atteso = false; });
    };
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    calcola();
    return () => {
      removeEventListener('scroll', onScroll);
      removeEventListener('resize', onScroll);
    };
  }, []);

  return null;
}
