'use client';

import { useState } from 'react';
import { NEWSLETTER, linguaNewsletter } from '@/lib/newsletter/content';

type Status = 'idle' | 'loading' | 'success' | 'error';

/**
 * Form della pagina /{locale}/newsletter/. Stesso endpoint del box inline del
 * blog (`/api/newsletter`), che aggiunge il gruppo lingua su MailerLite e
 * sincronizza il CRM. Qui non si passa il settore: chi arriva da un link non
 * sta leggendo un articolo di settore, e un campo in piu' fa solo abbandonare.
 */
export default function NewsletterSignup({ locale }: { locale: string }) {
  const c = NEWSLETTER[linguaNewsletter(locale)];
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === 'loading') return;
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, locale: linguaNewsletter(locale) }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 p-10 text-center">
        <p className="text-2xl">📬</p>
        <p className="mt-3 text-lg font-bold text-slate-900">{c.success}</p>
        <p className="mt-2 text-sm text-slate-500">{c.privacy}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">{c.title}</h1>
      <p className="mt-3 text-slate-600">{c.intro}</p>
      <p className="mt-3 text-slate-500">{c.promise}</p>

      <form onSubmit={handleSubmit} className="mt-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={c.placeholder}
            required
            autoComplete="email"
            aria-label={c.placeholder}
            className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-[#8FC436]"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-modern-sm shrink-0 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'loading' ? c.sending : c.submit}
          </button>
        </div>
        {status === 'error' && <p className="mt-2 text-xs text-red-500">{c.error}</p>}
      </form>

      <p className="mt-4 text-xs text-slate-400">{c.privacy}</p>
    </div>
  );
}
