'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import NewsletterForm from './NewsletterForm';

const STORAGE_KEY = 'gtapp_nl_modal_seen';

const HEADLINES: Record<string, string> = {
  it: 'Rimani nel loop sul futuro del lavoro',
  en: 'Stay ahead in field operations',
  de: 'Bleib auf dem neuesten Stand',
  fr: "Gardez une longueur d'avance",
  es: 'Mantente a la vanguardia',
  pt: 'Fique à frente no setor',
  nl: 'Blijf voorop in jouw sector',
  ru: 'Будь в курсе новостей отрасли',
  da: 'Hold dig foran i din branche',
  sv: 'Håll dig steget före',
  nb: 'Hold deg foran i bransjen',
};

export default function NewsletterModal({ locale }: { locale: string }) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // gtapp_modal_seen = flag condiviso: se la campagna sondaggio ha già mostrato
    // il suo modale in questa visita, la newsletter cede la precedenza (mai due insieme).
    if (localStorage.getItem(STORAGE_KEY) || localStorage.getItem('gtapp_modal_seen')) return;

    function handleScroll() {
      const scrollRatio =
        (window.scrollY + window.innerHeight) /
        document.documentElement.scrollHeight;
      if (scrollRatio >= 0.5) {
        if (localStorage.getItem('gtapp_modal_seen')) {
          window.removeEventListener('scroll', handleScroll);
          return;
        }
        localStorage.setItem('gtapp_modal_seen', '1');
        setVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [visible]);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  }

  function handleSuccess() {
    localStorage.setItem(STORAGE_KEY, '1');
    timerRef.current = setTimeout(() => setVisible(false), 1500);
  }

  if (!visible) return null;

  const headline = HEADLINES[locale] ?? HEADLINES.en;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={dismiss}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.55)',
          zIndex: 9998,
        }}
      />

      {/* Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="nl-modal-title"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(460px, calc(100vw - 32px))',
          background: '#ffffff',
          borderRadius: 16,
          overflow: 'hidden',
          zIndex: 9999,
          boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
        }}
      >
        {/* Header */}
        <div
          style={{
            background:
              'linear-gradient(135deg, #66d97a 0%, #46bdc0 50%, #2da5e4 100%)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Image
            src="/LogoGeoTapp.webp"
            alt="GeoTapp"
            width={140}
            height={48}
            style={{ filter: 'brightness(0) invert(1)', height: '40px', width: 'auto' }}
          />
          <button
            onClick={dismiss}
            aria-label="Close"
            style={{
              background: 'rgba(255,255,255,0.25)',
              border: 'none',
              borderRadius: '50%',
              width: 32,
              height: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: 18,
              cursor: 'pointer',
              lineHeight: 1,
              flexShrink: 0,
            }}
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: 24 }}>
          <h2
            id="nl-modal-title"
            style={{
              margin: '0 0 16px',
              fontFamily: 'var(--font-poppins, Poppins, sans-serif)',
              fontSize: '1.2rem',
              fontWeight: 700,
              color: '#0f172a',
            }}
          >
            {headline}
          </h2>
          <NewsletterForm locale={locale} variant="compact" onSuccess={handleSuccess} />
        </div>
      </div>
    </>
  );
}
