'use client';

/**
 * Secondo livello dell'accoglienza a chi arriva da una testata: una scheda in angolo che offre il
 * manuale, ma solo se la testata ha un'`offer` (oggi solo pezzi in italiano: il manuale esiste solo
 * in italiano). Non e' un modale: non copre la pagina, non ha sfondo scuro, si chiude con la x o Esc.
 *
 * Quando compare (tutte le condizioni insieme):
 *  - dopo 30 secondi sulla pagina oppure a meta' scroll, il primo dei due;
 *  - solo dopo che ha scelto sui cookie (come il sondaggio: niente sopra al banner cookie);
 *  - mai se ha chiuso la barra di benvenuto o ne ha gia' cliccato il pulsante (ha detto di no, o ha gia' ricevuto);
 *  - mai su una pagina di compito (trial, contatto...) ne' sulla pagina dell'offerta stessa;
 *  - mai se in questa visita c'e' gia' un altro overlay (stessa chiave del sondaggio), e una volta sola per sessione.
 */

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';
import { localizePath } from '@/lib/i18n/locale-routing';
import { ePaginaDiCompito } from '@/lib/pagine-di-compito';
import {
  CARD_KEY, CONSENT_KEY, CTA_CLICKED_KEY, DISMISS_KEY, VISIT_KEY,
  copyForLocale, matchReferrer, type ReferrerRule,
} from '@/lib/press/referrer';

const DOPO_MS = 30_000;
const SCROLL_MINIMO = 0.5;

type Mostrata = { title: string; text: string; cta: string; href: string; cover?: string; close: string; outlet: string };

function letto(k: string): string | null {
  try { return sessionStorage.getItem(k); } catch { return null; }
}

export default function ReferrerCard({ rules }: { rules: ReferrerRule[] }) {
  const [card, setCard] = useState<Mostrata | null>(null);

  useEffect(() => {
    const rule = matchReferrer(document.referrer, rules, window.location.hostname);
    if (!rule?.offer) return;
    if (letto(CARD_KEY)) return;

    const offer = rule.offer;
    const href = localizePath(offer.path, rule.locale);
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
      fatto = true;
      try {
        sessionStorage.setItem(CARD_KEY, '1');
        sessionStorage.setItem(VISIT_KEY, '1'); // un solo overlay per visita
      } catch { /* ignore */ }
      setCard({
        title: offer.title, text: offer.text, cta: offer.cta, href, cover: offer.cover,
        close: copyForLocale(rule.locale).close, outlet: rule.outlet,
      });
      trackEvent('press_offer_view', { outlet: rule.outlet });
      window.removeEventListener('scroll', controlla);
      clearInterval(giro);
    };

    const controlla = () => {
      const metà = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight >= SCROLL_MINIMO;
      if (metà || Date.now() - inizio >= DOPO_MS) mostra();
    };
    window.addEventListener('scroll', controlla, { passive: true });
    // Ripasso ogni 5 s: il tempo passa anche senza scroll, e la scelta sui cookie puo' arrivare dopo.
    const giro = setInterval(controlla, 5000);
    return () => {
      window.removeEventListener('scroll', controlla);
      clearInterval(giro);
    };
  }, [rules]);

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
          width: 30, height: 30, color: '#fff', fontSize: 18, cursor: 'pointer', lineHeight: 1, zIndex: 1,
        }}
      >×</button>
      <div style={{ display: 'flex', gap: 14, padding: 16, alignItems: 'flex-start' }}>
        {card.cover && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={card.cover} alt="" width={84} height={112} loading="lazy"
            style={{ width: 84, height: 'auto', borderRadius: 6, boxShadow: '0 4px 12px rgba(11,23,54,0.25)', flex: 'none' }} />
        )}
        <div style={{ minWidth: 0, paddingRight: 22 }}>
          <p id="press-offer-title" style={{ fontSize: 16, fontWeight: 800, color: '#0b1736', margin: '0 0 6px', lineHeight: 1.25 }}>{card.title}</p>
          <p style={{ fontSize: 14, color: '#475569', margin: '0 0 12px', lineHeight: 1.45 }}>{card.text}</p>
          <Link
            href={card.href}
            onClick={() => {
              try { sessionStorage.setItem(CTA_CLICKED_KEY, '1'); } catch { /* ignore */ }
              trackEvent('press_offer_click', { outlet: card.outlet });
              setCard(null);
            }}
            style={{
              display: 'inline-block', background: '#22B573', color: '#0B1736', fontWeight: 800, fontSize: 15,
              padding: '10px 18px', borderRadius: 999, textDecoration: 'none',
            }}
          >{card.cta}</Link>
        </div>
      </div>
    </div>
  );
}
