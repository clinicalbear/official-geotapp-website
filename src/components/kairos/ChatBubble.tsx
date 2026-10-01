'use client';

import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/i18n/locale-routing';

const ARIA_OPEN: Record<string, string> = { de: 'Chat mit Kairos', it: 'Chat con Kairos', nl: 'Chat met Kairos', fr: 'Discuter avec Kairos', es: 'Chatear con Kairos', pt: 'Conversar com o Kairos', da: 'Chat med Kairos', sv: 'Chatta med Kairos', nb: 'Chat med Kairos' };

interface ChatBubbleProps {
  onClick: () => void;
}

export default function ChatBubble({ onClick }: ChatBubbleProps) {
  const locale = getLocaleFromPathname(usePathname()) ?? 'it';
  return (
    <button
      onClick={onClick}
      aria-label={ARIA_OPEN[locale] ?? 'Chat with Kairos'}
      className="fixed bottom-28 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg transition-transform hover:scale-110 md:bottom-6 md:right-6"
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
