'use client';

import { useState } from 'react';

type Props = {
  locale: string;
  leadMagnet: string;
  privacyHref: string;
  labels: {
    emailLabel: string;
    emailPlaceholder: string;
    consent: string; // contiene {privacy}
    consentLink: string;
    button: string;
    sending: string;
    errorEmail: string;
    errorConsent: string;
    errorGeneric: string;
    successTitle: string;
    successText: string;
    download: string;
    italianNote: string;
    meta: string;
  };
};

type Status = 'idle' | 'sending' | 'done';

/**
 * Cancello morbido: l'email e la casella sulla privacy sono obbligatorie, e
 * il link al PDF arriva dalla risposta di /api/newsletter e non e' mai nell'HTML
 * della pagina. Il PDF sta in una cartella dal nome non indovinabile (vedi
 * content/lead-assets.ts).
 */
export default function LeadAssetGate({ locale, leadMagnet, privacyHref, labels }: Props) {
  const [file, setFile] = useState('');
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    const clean = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean)) {
      setError(labels.errorEmail);
      return;
    }
    if (!agree) {
      setError(labels.errorConsent);
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: clean, locale, leadMagnet }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const data = (await res.json().catch(() => ({}))) as { file?: string };
      if (!data.file) throw new Error('no-file');
      setFile(data.file);
      setStatus('done');
      try {
        (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({
          event: 'lead_magnet_download',
          lead_magnet: leadMagnet,
          locale,
        });
      } catch {
        /* il tracciamento non deve mai bloccare il download */
      }
    } catch {
      setStatus('idle');
      setError(labels.errorGeneric);
    }
  }

  const [before, after] = labels.consent.split('{privacy}');

  if (status === 'done') {
    return (
      <div role="status" style={{ border: '1px solid #0B1736', background: '#f4f5f8', padding: '18px 20px', borderRadius: 6 }}>
        <p style={{ margin: '0 0 6px', fontWeight: 700 }}>{labels.successTitle}</p>
        <p style={{ margin: '0 0 12px' }}>{labels.successText}</p>
        <p style={{ margin: 0 }}>
          <a className="b1" href={file} download>{labels.download}</a>
        </p>
        <p style={{ margin: '10px 0 0', fontSize: 13, color: '#475467' }}>
          {labels.meta}
          {labels.italianNote ? ` ${labels.italianNote}` : ''}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate style={{ border: '1px solid #cfd4de', background: '#fff', padding: '18px 20px', borderRadius: 6 }}>
      <label htmlFor={`lead-email-${leadMagnet}`} style={{ display: 'block', fontWeight: 700, marginBottom: 6 }}>
        {labels.emailLabel} *
      </label>
      <input
        id={`lead-email-${leadMagnet}`}
        type="email"
        required
        autoComplete="email"
        inputMode="email"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
        placeholder={labels.emailPlaceholder}
        aria-invalid={error ? true : undefined}
        style={{ width: '100%', padding: '11px 12px', border: '1px solid #98a2b3', borderRadius: 4, fontSize: 16, marginBottom: 12 }}
      />
      <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13.5, lineHeight: 1.45, color: '#344054', marginBottom: 12 }}>
        <input
          type="checkbox"
          required
          checked={agree}
          onChange={(ev) => setAgree(ev.target.checked)}
          style={{ marginTop: 3, width: 16, height: 16, flex: 'none' }}
        />
        <span>
          {before}
          <a href={privacyHref} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>{labels.consentLink}</a>
          {after} *
        </span>
      </label>
      {error && (
        <p role="alert" style={{ color: '#b42318', fontSize: 14, margin: '0 0 10px' }}>{error}</p>
      )}
      <button type="submit" className="b1" disabled={status === 'sending'} style={{ cursor: 'pointer' }}>
        {status === 'sending' ? labels.sending : labels.button}
      </button>
    </form>
  );
}
