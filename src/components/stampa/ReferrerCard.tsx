'use client';

/**
 * Secondo livello dell'accoglienza a chi arriva da una testata: una scheda in angolo che invita alla
 * pagina "Quando qualcuno contesta il lavoro", dove si capisce cosa fa GeoTapp e come aiuta azienda,
 * chi lavora e committente. Non e' un modale: non copre la pagina, non ha sfondo scuro, si chiude con
 * la x o Esc. Testo nella lingua della pagina in cui si trova la persona (`copy`, dal contenuto della
 * pagina stessa).
 *
 * Non dipende dal referrer (sulle pagine dopo la prima non c'e' piu'): basta il segnale di visita
 * "arrivata dalla stampa" che mette la barra di benvenuto (QUIET_KEY, senza nome della testata).
 *
 * Quando compare (tutte le condizioni insieme):
 *  - dopo 30 secondi sulla pagina oppure a meta' scroll, il primo dei due;
 *  - solo dopo che ha scelto sui cookie (come il sondaggio: niente sopra al banner cookie);
 *  - mai se ha chiuso la barra di benvenuto o ne ha cliccato il pulsante (e' gia' li' o ha detto di no);
 *  - mai su una pagina di compito (trial, contatto...) ne' sulla pagina a cui invita;
 *  - mai se in questa visita c'e' gia' un altro overlay (stessa chiave del sondaggio), e una volta sola per sessione.
 */

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';
import { ePaginaDiCompito } from '@/lib/pagine-di-compito';
import {
  CARD_KEY, CONSENT_KEY, CTA_CLICKED_KEY, DISMISS_KEY, OUTLET_KEY, VISIT_KEY,
  arrivatoDallaStampa, cardCopyFor, copyForLocale, type CardCopy,
} from '@/lib/press/referrer';

const DOPO_MS = 30_000;
const SCROLL_MINIMO = 0.5;

type Mostrata = CardCopy & { close: string; lang: string };

function letto(k: string): string | null {
  try { return sessionStorage.getItem(k); } catch { return null; }
}

export default function ReferrerCard({ copy, href }: { copy: Record<string, CardCopy>; href: string }) {
  const [card, setCard] = useState<Mostrata | null>(null);

  useEffect(() => {
    if (!arrivatoDallaStampa() || letto(CARD_KEY)) return;
    const inizio = Date.now();
    let fatto = false;

    const puoMostrare = () => {
      if (letto(DISMISS_KEY) || letto(CTA_CLICKED_KEY) || letto(CARD_KEY) || letto(VISIT_KEY)) return false;
      if (ePaginaDiCompito(location.pathname)) return false;
      if (location.pathname === href) return false;
      try { if (!localStorage.getItem(CONSENT_KEY)) return false; } catch { return false; }
      return true;
    };

    const mostra = () => {
      if (fatto || !puoMostrare()) return;
      const lang = (document.documentElement.lang || 'en').toLowerCase();
      const testo = cardCopyFor(copy, lang);
      if (!testo) return;
      fatto = true;
      try {
        sessionStorage.setItem(CARD_KEY, '1');
        sessionStorage.setItem(VISIT_KEY, '1'); // un solo overlay per visita
      } catch { /* ignore */ }
      setCard({ ...testo, close: copyForLocale(lang).close, lang });
      trackEvent('press_offer_view', { locale: lang });
      window.removeEventListener('scroll', controlla);
      clearInterval(giro);
    };

    const controlla = () => {
      const meta = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight >= SCROLL_MINIMO;
      if (meta || Date.now() - inizio >= DOPO_MS) mostra();
    };
    window.addEventListener('scroll', controlla, { passive: true });
    // Ripasso ogni 5 s: il tempo passa anche senza scroll, e la scelta sui cookie puo' arrivare dopo.
    const giro = setInterval(controlla, 5000);
    return () => {
      window.removeEventListener('scroll', controlla);
      clearInterval(giro);
    };
  }, [copy, href]);

  useEffect(() => {
    if (!card) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setCard(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [card]);

  if (!card) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="press-offer-title"
      className="fixed inset-x-4 bottom-4 mx-auto w-[calc(100vw-32px)] sm:inset-x-auto sm:right-4 sm:left-auto sm:mx-0 sm:w-[380px]"
      style={{ background: '#f7f9fc', borderRadius: 16, overflow: 'hidden', zIndex: 9997, boxShadow: '0 12px 36px rgba(11,23,54,0.28)' }}
    >
      <button
        type="button"
        onClick={() => setCard(null)}
        aria-label={card.close}
        style={{
          position: 'absolute', top: 8, right: 8, background: 'rgba(11,23,54,0.55)', border: 'none', borderRadius: '50%',
          width: 30, height: 30, color: '#fff', fontSize: 18, cursor: 'pointer', lineHeight: 1,
        }}
      >×</button>
      <div style={{ padding: '20px 22px 22px' }}>
        <p id="press-offer-title" style={{ fontSize: 18, fontWeight: 800, color: '#0b1736', margin: '0 28px 6px 0', lineHeight: 1.25 }}>{card.title}</p>
        <p style={{ fontSize: 14, color: '#475569', margin: '0 0 16px', lineHeight: 1.45 }}>{card.text}</p>
        <Link
          href={href}
          onClick={() => {
            try { sessionStorage.setItem(CTA_CLICKED_KEY, '1'); } catch { /* ignore */ }
            const press = letto(OUTLET_KEY); // c'e' solo col consenso analytics
            trackEvent('press_offer_click', press ? { outlet: press } : { locale: card.lang });
            setCard(null);
          }}
          style={{
            display: 'block', textAlign: 'center', background: '#22B573', color: '#0B1736', fontWeight: 800, fontSize: 16,
            padding: '13px 20px', borderRadius: 999, textDecoration: 'none',
          }}
        >{card.cta}</Link>
      </div>
    </div>
  );
}
