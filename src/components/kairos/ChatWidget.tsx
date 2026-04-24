'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getLocaleFromPathname, DEFAULT_LOCALE } from '@/lib/i18n/locale-routing';
import type { AppLocale } from '@/lib/i18n/config';
import ChatBubble from './ChatBubble';

interface Message {
  role: 'user' | 'kairos';
  text: string;
  cta?: { label: string; url: string };
  suggestions?: string[];
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const locale = (getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE) as AppLocale;
  const t = (getDictionary(locale) as any).kairos;

  // Page exclusion
  if (
    pathname?.startsWith('/verifica') ||
    pathname?.startsWith('/links') ||
    (pathname && /\/blog\/.+/.test(pathname) && !/^\/[a-z]{2}\/blog\/?$/.test(pathname))
  ) {
    return null;
  }

  // Welcome message when first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'kairos',
          text: t.welcome,
          suggestions: [t.quick_pricing, t.quick_how, t.quick_trial, t.quick_contact],
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Auto-scroll when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  async function sendMessage(text: string) {
    if (!text.trim() || isLoading) return;
    const userMsg: Message = { role: 'user', text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('https://crm.geotapp.com/api/public/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: text.trim(), locale }),
      });
      const data = await res.json();

      const kairosMsg: Message = {
        role: 'kairos',
        text: data.confidence === 'none' ? t.fallback : data.answer,
        cta: data.cta ?? undefined,
        suggestions: data.suggestions?.slice(0, 3),
      };

      if (data.confidence === 'low') {
        kairosMsg.text += '\n\n' + t.low_confidence;
      }

      setMessages((prev) => [...prev, kairosMsg]);
    } catch {
      setMessages((prev) => [...prev, { role: 'kairos', text: t.fallback }]);
    } finally {
      setIsLoading(false);
    }
  }

  if (!isOpen) {
    return <ChatBubble onClick={() => setIsOpen(true)} />;
  }

  return (
    <>
      <ChatBubble onClick={() => setIsOpen(false)} />

      {/* Chat panel */}
      <div className="fixed bottom-24 right-6 z-50 flex w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl sm:w-[380px] h-[80vh] sm:max-h-[500px] animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-3">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-primary"
            >
              <path d="M5 3h14" />
              <path d="M5 21h14" />
              <path d="M7 3v4.5L12 12l-5 4.5V21" />
              <path d="M17 3v4.5L12 12l5 4.5V21" />
            </svg>
            <div>
              <p className="font-display font-bold text-primary">Kairos</p>
              <p className="text-xs text-slate-400">{t.subtitle}</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
            aria-label="Close chat"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, i) => (
            <div key={i}>
              {msg.role === 'kairos' ? (
                <div className="max-w-[85%]">
                  <div className="rounded-2xl rounded-tl-sm bg-slate-800 px-4 py-3 text-sm text-slate-200 whitespace-pre-line">
                    {msg.text}
                  </div>
                  {msg.cta && (
                    <a
                      href={msg.cta.url}
                      className="mt-2 inline-block rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-primary/90"
                    >
                      {msg.cta.label} &rarr;
                    </a>
                  )}
                  {msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {msg.suggestions.map((s, j) => (
                        <button
                          key={j}
                          onClick={() => sendMessage(s)}
                          className="cursor-pointer rounded-full border border-slate-600 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-primary hover:text-primary"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="ml-auto max-w-[85%]">
                  <div className="rounded-2xl rounded-tr-sm bg-primary px-4 py-3 text-sm text-black">
                    {msg.text}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Loading dots */}
          {isLoading && (
            <div className="max-w-[85%]">
              <div className="rounded-2xl rounded-tl-sm bg-slate-800 px-4 py-3">
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:0ms]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:150ms]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex gap-2 border-t border-slate-800 px-4 py-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage(input);
              }
            }}
            placeholder={t.placeholder}
            className="flex-1 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-slate-200 outline-none placeholder:text-slate-500 focus:border-primary"
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || isLoading}
            aria-label={t.send}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-black transition-opacity disabled:opacity-40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Slide-up animation */}
      <style jsx global>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.2s ease-out;
        }
      `}</style>
    </>
  );
}
