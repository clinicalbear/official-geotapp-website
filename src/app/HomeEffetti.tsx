'use client';

/**
 * Tutto quello che nella home si muove, e nient'altro.
 *
 * PERCHE' (25/09/2026): la home era un unico componente client di 700 righe. Il server
 * la preparava gia' intera, ma il telefono doveva poi ricostruirla tutta in React per
 * agganciare quattro effetti di scorrimento e i clic tracciati: circa 200 ms di lavoro
 * a ogni prima visita, contati da Lighthouse come tempo di blocco. Ora la home e' un
 * componente server (HomeServer.tsx) e qui restano solo gli effetti, che lavorano sul
 * DOM gia' presente: niente viene ridisegnato da React.
 *
 * Le classi che prima dipendevano dallo stato `scene` (.fr, gli articoli, i numeri e i
 * segni della sequenza) le accende e spegne direttamente setScene(). Il server le
 * rende con la prima scena accesa, com'era prima dell'idratazione.
 */

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function HomeEffetti({ locale }: { locale: string }) {
  /* la sequenza: barra che si riempie, contatore che cambia;
     il mazzo: quanto ogni pagina e' coperta da quella che le sale sopra */
  useEffect(() => {
    const home = document.querySelector('.lp-home');
    if (!home) return;
    const seq = home.querySelector<HTMLElement>('.seq');
    const stick = home.querySelector<HTMLElement>('.seq .stick');
    const gruppi = seq
      ? [
          Array.from(seq.querySelectorAll('.stick > .fr')),
          Array.from(seq.querySelectorAll('.tx > article')),
          Array.from(seq.querySelectorAll('.num > span')),
          Array.from(seq.querySelectorAll('.tk > i')),
        ]
      : [];
    const setScene = (i: number) => {
      for (const g of gruppi) g.forEach((el, k) => el.classList.toggle('on', k === i));
    };
    const pages = ['.pg1', '.pg2', '.pg3', '.acc'].map((s) => home.querySelector<HTMLElement>(s));

    let tick = false;
    let cur = 0;
    const onScroll = () => {
      if (tick) return; tick = true;
      requestAnimationFrame(() => {
        if (seq && stick) {
          const b = seq.getBoundingClientRect();
          let p = (-b.top) / (b.height - innerHeight);
          p = p < 0 ? 0 : (p > 1 ? 1 : p);
          stick.style.setProperty('--p', p.toFixed(4));
          const i = Math.min(2, Math.floor(p * 3));
          if (i !== cur) { cur = i; setScene(i); }
        }
        for (let i = 0; i < pages.length - 1; i++) {
          const a = pages[i]; const nb = pages[i + 1];
          if (!a || !nb) continue;
          const r = nb.getBoundingClientRect();
          const c = 1 - Math.min(1, Math.max(0, r.top / innerHeight));
          a.style.setProperty('--cov', c.toFixed(3));
        }
        tick = false;
      });
    };
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    onScroll();
    return () => { removeEventListener('scroll', onScroll); removeEventListener('resize', onScroll); };
  }, []);

  /* il report ruota quando entra in campo */
  useEffect(() => {
    const st = document.querySelector('.lp-home .pg1 .stage');
    if (!st) return;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.25 });
    io.observe(st);
    return () => io.disconnect();
  }, []);

  /* entrando nella pagina del report, un secondo di sosta perche' la si veda */
  useEffect(() => {
    const rep = document.querySelector<HTMLElement>('.lp-home .pg1');
    if (!rep) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!matchMedia('(hover:hover)').matches) return;
    let used = false;
    const block = (e: Event) => e.preventDefault();
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (!used && e.isIntersecting && e.intersectionRatio > 0.82) {
          used = true;
          rep.classList.add('hold');
          addEventListener('wheel', block, { passive: false });
          addEventListener('touchmove', block, { passive: false });
          setTimeout(() => {
            removeEventListener('wheel', block);
            removeEventListener('touchmove', block);
            rep.classList.remove('hold');
          }, 1000);
        }
      });
    }, { threshold: [0.82] });
    io.observe(rep);
    return () => {
      io.disconnect();
      removeEventListener('wheel', block);
      removeEventListener('touchmove', block);
    };
  }, []);

  /* la barra mobile fissa sparisce quando si arriva alla chiusura */
  useEffect(() => {
    const bar = document.getElementById('sticky-mobile-cta');
    const end = document.getElementById('home-end');
    if (!bar || !end) return;
    const observer = new IntersectionObserver(
      ([entry]) => { bar.style.display = entry.isIntersecting ? 'none' : ''; },
      { threshold: 0.3 }
    );
    observer.observe(end);
    return () => observer.disconnect();
  }, []);

  /* i clic tracciati: ogni link della home con data-traccia manda il suo evento,
     con gli stessi nomi e parametri che mandavano prima gli onClick */
  useEffect(() => {
    const home = document.querySelector('.lp-home');
    if (!home) return;
    const onClick = (e: Event) => {
      const el = (e.target as Element | null)?.closest?.<HTMLElement>('[data-traccia]');
      if (!el || !home.contains(el)) return;
      trackEvent(el.dataset.traccia!, { cta_source: el.dataset.fonte ?? '', cta_locale: locale });
    };
    home.addEventListener('click', onClick);
    return () => home.removeEventListener('click', onClick);
  }, [locale]);

  return null;
}
