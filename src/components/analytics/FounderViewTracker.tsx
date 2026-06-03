'use client';

import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics';

/**
 * Emette un evento GA4 `founder_view` quando la sezione fondatore entra nel
 * viewport (una sola volta per pagina). `cta_source` distingue da dove arriva
 * la visualizzazione (chi_siamo vs homepage_strip), così si misura quante
 * persone vedono davvero il founder, non solo le pageview della pagina.
 */
export default function FounderViewTracker({ source }: { source: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !fired.current) {
            fired.current = true;
            trackEvent('founder_view', { cta_source: source });
            obs.disconnect();
          }
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [source]);

  return <span ref={ref} aria-hidden="true" style={{ display: 'block', height: 0 }} />;
}
