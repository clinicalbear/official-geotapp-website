'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/i18n/locale-routing';

const ARIA_OPEN: Record<string, string> = { de: 'Chat mit Kairos', it: 'Chat con Kairos', nl: 'Chat met Kairos', fr: 'Discuter avec Kairos', es: 'Chatear con Kairos', pt: 'Conversar com o Kairos', da: 'Chat med Kairos', sv: 'Chatta med Kairos', nb: 'Chat med Kairos', ru: 'Открыть чат с Кайросом' };

interface ChatBubbleProps {
  onClick: () => void;
}

export default function ChatBubble({ onClick }: ChatBubbleProps) {
  const locale = getLocaleFromPathname(usePathname()) ?? 'it';
  // Sotto i 900px la bolla a bottom-28 cade sopra la riga di prova subito
  // sopra la barra sticky del trial (fatto, audit 01/10/2026): la si mostra
  // solo dopo il primo scroll, quando quella riga è già sparita dalla vista.
  // Da 900px in su (md:) la bolla sta più in basso e non copre mai nulla:
  // lì resta visibile da subito, come prima.
  const [revealedOnMobile, setRevealedOnMobile] = useState(false);
  useEffect(() => {
    if (window.scrollY > 150) { setRevealedOnMobile(true); return; }
    const onScroll = () => {
      if (window.scrollY > 150) { setRevealedOnMobile(true); window.removeEventListener('scroll', onScroll); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      onClick={onClick}
      aria-label={ARIA_OPEN[locale] ?? 'Chat with Kairos'}
      className={`fixed bottom-28 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg transition-all hover:scale-110 md:bottom-6 md:right-6 md:opacity-100 md:pointer-events-auto ${revealedOnMobile ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      {/* Hourglass icon - Kairos = god of time */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-black"
      >
        <path d="M5 3h14" />
        <path d="M5 21h14" />
        <path d="M7 3v4.5L12 12l-5 4.5V21" />
        <path d="M17 3v4.5L12 12l5 4.5V21" />
      </svg>
    </button>
  );
}
