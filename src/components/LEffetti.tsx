'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Effetti d'ingresso della direzione L, per tutto il sito.
 * Gli elementi marcati .r / .r-l / .r-r / .r-s / .rule entrano quando
 * arrivano in campo. Quello che e' gia' davanti agli occhi si vede subito.
 * Un MutationObserver aggancia anche i nodi montati dopo (slot server,
 * componenti dinamici) e un controllo su scroll ripesca gli elementi
 * oltrepassati con salti rapidi che l'IntersectionObserver puo' perdere.
 */
export default function LEffetti() {
  const pathname = usePathname();

  useEffect(() => {
    const sel = '.r,.r-l,.r-r,.r-s,.rule';
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pending = new Set<Element>();

    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          pending.delete(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });

    const hook = (n: Element) => {
      if (n.classList.contains('in')) return;
      if (reduced || n.getBoundingClientRect().top < innerHeight * 0.95) {
        n.classList.add('in');
      } else {
        pending.add(n);
        io.observe(n);
      }
    };

    document.querySelectorAll(sel).forEach(hook);

    const mo = new MutationObserver((muts) => {
      muts.forEach((m) => m.addedNodes.forEach((node) => {
        if (!(node instanceof Element)) return;
        if (node.matches(sel)) hook(node);
        node.querySelectorAll?.(sel).forEach(hook);
      }));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // ripescaggio: qualsiasi elemento gia' entrato (o oltrepassato) si mostra
    let tick = false;
    const sweep = () => {
      if (tick) return; tick = true;
      requestAnimationFrame(() => {
        pending.forEach((n) => {
          if (n.getBoundingClientRect().top < innerHeight * 0.95) {
            n.classList.add('in');
            pending.delete(n);
            io.unobserve(n);
          }
        });
        tick = false;
      });
    };
    addEventListener('scroll', sweep, { passive: true });

    return () => { io.disconnect(); mo.disconnect(); removeEventListener('scroll', sweep); };
  }, [pathname]);

  return null;
}
