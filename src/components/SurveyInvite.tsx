'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Flag proprio + flag condiviso con NewsletterModal: durante la campagna sondaggio
// esce SOLO questo modale (priorità), mai due insieme.
const STORAGE_KEY = 'gtapp_survey_modal_seen';
const SHARED_KEY = 'gtapp_modal_seen';

type Copy = { title: string; body: string; cta: string };

const COPY: Record<string, Copy> = {
  it: { title: 'Una domanda veloce', body: '2 minuti per dirci la tua sul lavoro sul campo. Anonimo, niente email.', cta: 'Partecipa al sondaggio' },
  en: { title: 'Quick question', body: '2 minutes to share your take on field work. Anonymous, no email.', cta: 'Take the survey' },
  de: { title: 'Kurze Frage', body: '2 Minuten für deine Meinung zur Arbeit vor Ort. Anonym, keine E-Mail.', cta: 'Zur Umfrage' },
  fr: { title: 'Une question rapide', body: '2 minutes pour ton avis sur le travail terrain. Anonyme, sans e-mail.', cta: 'Participer' },
  nl: { title: 'Korte vraag', body: '2 minuten om je mening over werk op locatie te delen. Anoniem, geen e-mail.', cta: 'Doe mee' },
  es: { title: 'Una pregunta rápida', body: '2 minutos para tu opinión sobre el trabajo de campo. Anónimo, sin correo.', cta: 'Participar' },
  pt: { title: 'Uma pergunta rápida', body: '2 minutos para a tua opinião sobre o trabalho no terreno. Anónimo, sem email.', cta: 'Participar' },
  da: { title: 'Et hurtigt spørgsmål', body: '2 minutter til din mening om markarbejde. Anonymt, ingen e-mail.', cta: 'Deltag' },
  sv: { title: 'En snabb fråga', body: '2 minuter för din syn på fältarbete. Anonymt, ingen e-post.', cta: 'Delta' },
  nb: { title: 'Et raskt spørsmål', body: '2 minutter for din mening om feltarbeid. Anonymt, ingen e-post.', cta: 'Delta' },
  ru: { title: 'Быстрый вопрос', body: '2 минуты, чтобы поделиться мнением о выездной работе. Анонимно, без почты.', cta: 'Пройти опрос' },
};

function pickCopy(): Copy {
  const lang = (typeof document !== 'undefined' ? document.documentElement.lang : 'en') || 'en';
  const lc = lang.toLowerCase();
  if (COPY[lc]) return COPY[lc];
  const base = lc.split('-')[0];
  return COPY[base] ?? COPY.en;
}

export default function SurveyInvite() {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) || localStorage.getItem(SHARED_KEY)) return;

    let shown = false;
    const show = () => {
      if (shown || localStorage.getItem(SHARED_KEY)) return;
      shown = true;
      localStorage.setItem(SHARED_KEY, '1'); // blocca l'altro modale per questa visita
      setVisible(true);
      window.removeEventListener('scroll', onScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    const onScroll = () => {
      const ratio = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (ratio >= 0.35) show();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    // fallback: anche senza scroll (pagine corte) compare dopo 8s
    timerRef.current = setTimeout(show, 8000);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') dismiss(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [visible]);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  }

  if (!visible) return null;
  const c = pickCopy();

  return (
    <>
      <div
        onClick={dismiss}
        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 9998 }}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="survey-modal-title"
        style={{
          position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: 'min(440px, calc(100vw - 32px))', background: '#ffffff', borderRadius: 16,
          overflow: 'hidden', zIndex: 9999, boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
        }}
      >
        <div style={{
          background: 'linear-gradient(135deg, #66d97a 0%, #46bdc0 50%, #2da5e4 100%)',
          padding: '18px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Image src="/LogoGeoTapp.webp" alt="GeoTapp" width={140} height={48}
            style={{ filter: 'brightness(0) invert(1)', height: '36px', width: 'auto' }} />
          <button onClick={dismiss} aria-label="Close" style={{
            background: 'rgba(255,255,255,0.25)', border: 'none', borderRadius: '50%',
            width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontSize: 18, cursor: 'pointer', lineHeight: 1,
          }}>×</button>
        </div>
        <div style={{ padding: '24px' }}>
          <p id="survey-modal-title" style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', margin: '0 0 8px' }}>{c.title}</p>
          <p style={{ fontSize: 15, color: '#475569', margin: '0 0 20px', lineHeight: 1.5 }}>{c.body}</p>
          <a href="/survey" onClick={dismiss} style={{
            display: 'block', textAlign: 'center', background: '#8FC436', color: '#fff',
            fontWeight: 800, fontSize: 16, padding: '14px 20px', borderRadius: 999, textDecoration: 'none',
          }}>{c.cta}</a>
        </div>
      </div>
    </>
  );
}
