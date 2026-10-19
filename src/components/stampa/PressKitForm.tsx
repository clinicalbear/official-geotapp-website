'use client';

/**
 * Modulo per il media kit completo: email + lingua dello ZIP + casella facoltativa
 * per comunicati e aggiornamenti. La lingua preselezionata e' quella del sito.
 * Il link arriva per email: e' cosi' che l'indirizzo risulta verificato.
 */
import { useState } from 'react';
import type { FormEvent } from 'react';
import Link from 'next/link';
import type { SiteDictionary } from '@/lib/i18n/dictionaries';
import type { AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';
import {
  PRESS_KIT_LANGUAGE_NAMES,
  PRESS_KIT_LOCALES,
  kitLocaleFor,
} from '@/lib/press/kit-locales';
import type { PressKitLocale } from '@/lib/press/kit-locales';

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'invalid';

export default function PressKitForm({
  d,
  locale,
}: {
  d: SiteDictionary['stampa'];
  locale: AppLocale;
}) {
  const [email, setEmail] = useState('');
  const [kitLocale, setKitLocale] = useState<PressKitLocale>(kitLocaleFor(locale));
  const [optIn, setOptIn] = useState(false);
  const [hp, setHp] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === 'sending') return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus('invalid');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('/api/press-kit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), locale: kitLocale, pressOptIn: optIn, hp }),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  const field: React.CSSProperties = {
    width: '100%', boxSizing: 'border-box', padding: '12px 14px', borderRadius: 8,
    border: '1px solid #c9d3e0', background: '#fff', color: '#0B1736', fontSize: 15,
  };
  const label: React.CSSProperties = { display: 'block', fontSize: 13, fontWeight: 600, margin: '0 0 6px', color: '#0B1736' };

  return (
    <div
      id="media-kit"
      style={{
        background: '#fff', border: '1px solid #dbe3ee', borderRadius: 14, padding: 24,
        margin: '0 0 28px', maxWidth: 640,
      }}
    >
      <h3 style={{ margin: '0 0 8px', fontSize: 20, color: '#0B1736' }}>{d.kit_title}</h3>
      <p style={{ margin: '0 0 18px', color: '#3a4660', lineHeight: 1.5 }}>{d.kit_intro}</p>

      {status === 'sent' ? (
        <p role="status" style={{ margin: 0, padding: '14px 16px', borderRadius: 8, background: '#E8F7EF', color: '#0B1736', fontWeight: 600 }}>
          {d.kit_sent}
        </p>
      ) : (
        <form onSubmit={onSubmit} noValidate>
          <div style={{ marginBottom: 14 }}>
            <label htmlFor="pk-email" style={label}>{d.kit_email}</label>
            <input
              id="pk-email" name="email" type="email" autoComplete="email" required
              value={email} onChange={(e) => { setEmail(e.target.value); if (status === 'invalid') setStatus('idle'); }}
              style={field}
            />
          </div>
          <div style={{ marginBottom: 14 }}>
            <label htmlFor="pk-lang" style={label}>{d.kit_lang}</label>
            <select
              id="pk-lang" name="locale" value={kitLocale}
              onChange={(e) => setKitLocale(e.target.value as PressKitLocale)}
              style={field}
            >
              {PRESS_KIT_LOCALES.map((l) => (
                <option key={l} value={l}>{PRESS_KIT_LANGUAGE_NAMES[l]}</option>
              ))}
            </select>
          </div>
          {/* Honeypot: nascosto a chi usa il modulo, lo riempiono i bot. */}
          <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
            <label>Website<input type="text" name="hp" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} /></label>
          </div>
          <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: '#0B1736', margin: '0 0 12px', cursor: 'pointer' }}>
            <input
              type="checkbox" checked={optIn} onChange={(e) => setOptIn(e.target.checked)}
              style={{ marginTop: 3, width: 16, height: 16, flex: '0 0 auto' }}
            />
            <span>{d.kit_optin}</span>
          </label>
          <p style={{ margin: '0 0 16px', fontSize: 13, color: '#4a566e', lineHeight: 1.5 }}>
            {d.kit_privacy}{' '}
            <Link href={localizePath('/privacy/', locale)} style={{ color: '#0B1736', textDecoration: 'underline' }}>
              {d.kit_privacy_link}
            </Link>
          </p>
          <button
            type="submit" disabled={status === 'sending'}
            style={{
              background: '#FF8A34', color: '#0B1736', fontWeight: 700, border: 0, borderRadius: 8,
              padding: '13px 22px', fontSize: 15, cursor: status === 'sending' ? 'wait' : 'pointer',
            }}
          >
            {d.kit_submit}
          </button>
          {status === 'invalid' && <p role="alert" style={{ margin: '12px 0 0', color: '#a12a2a', fontSize: 14 }}>{d.kit_invalid}</p>}
          {status === 'error' && <p role="alert" style={{ margin: '12px 0 0', color: '#a12a2a', fontSize: 14 }}>{d.kit_error}</p>}
        </form>
      )}
    </div>
  );
}
