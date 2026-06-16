'use client';

import { useEffect, useState } from 'react';
import { trackEvent } from '@/lib/analytics';
import { SURVEY, type SurveyLocale, type SurveyContent } from '@/lib/survey/content';

const ACCENT = '#8FC436';

/** Mappa un locale del sito (anche en-gb, en-us, ...) sul contenuto a 11 lingue. */
function pickContent(locale: string): { key: SurveyLocale; c: SurveyContent } {
  const lc = locale.toLowerCase();
  if (lc in SURVEY) return { key: lc as SurveyLocale, c: SURVEY[lc as SurveyLocale] };
  const base = lc.split('-')[0];
  if (base in SURVEY) return { key: base as SurveyLocale, c: SURVEY[base as SurveyLocale] };
  return { key: 'en', c: SURVEY.en };
}

type Status = 'idle' | 'loading' | 'success' | 'error';

function Radio({ name, value, current, onChange, label }: {
  name: string; value: string; current: string; onChange: (v: string) => void; label: string;
}) {
  const active = current === value;
  return (
    <label
      className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm transition ${
        active ? 'border-[color:var(--accent)] bg-[color:var(--accent)]/10 font-semibold' : 'border-slate-200 hover:border-slate-300'
      }`}
      style={{ ['--accent' as string]: ACCENT }}
    >
      <input
        type="radio"
        name={name}
        checked={active}
        onChange={() => onChange(value)}
        className="h-4 w-4 accent-[color:var(--accent)]"
        style={{ ['--accent' as string]: ACCENT }}
      />
      <span className="text-slate-700">{label}</span>
    </label>
  );
}

function Scale({ value, onChange, low, high }: {
  value: number; onChange: (n: number) => void; low: string; high: string;
}) {
  return (
    <div>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            className={`h-11 flex-1 rounded-xl border text-sm font-semibold transition ${
              value === n ? 'border-transparent text-white' : 'border-slate-200 text-slate-600 hover:border-slate-300'
            }`}
            style={value === n ? { backgroundColor: ACCENT } : undefined}
          >
            {n}
          </button>
        ))}
      </div>
      <div className="mt-1 flex justify-between text-xs text-slate-400">
        <span>{low}</span>
        <span>{high}</span>
      </div>
    </div>
  );
}

export default function SurveyForm({ locale }: { locale: string }) {
  const { key, c } = pickContent(locale);
  const [sector, setSector] = useState('');
  const [side, setSide] = useState<'A' | 'B' | ''>('');
  const [a1, setA1] = useState('');
  const [a2, setA2] = useState('');
  const [a3, setA3] = useState(0);
  const [b1, setB1] = useState('');
  const [b2, setB2] = useState('');
  const [b3, setB3] = useState(0);
  const [email, setEmail] = useState('');
  const [hp, setHp] = useState(''); // honeypot
  const [status, setStatus] = useState<Status>('idle');

  // GA4: funnel sondaggio (view -> start -> submit) + attribuzione sorgente.
  useEffect(() => {
    trackEvent('survey_view', { locale: key });
  }, [key]);

  function selectSide(v: 'A' | 'B') {
    if (!side) trackEvent('survey_start', { side: v, locale: key });
    setSide(v);
  }

  // Tutte le risposte sono obbligatorie: settore + lato + le 3 domande del percorso.
  // (L'email resta facoltativa.)
  const complete =
    !!sector && !!side &&
    (side === 'A' ? (!!a1 && !!a2 && a3 > 0) : (!!b1 && !!b2 && b3 > 0));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!complete) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          locale: key,
          sector: sector || undefined,
          side,
          hp,
          a1: side === 'A' ? a1 || undefined : undefined,
          a2: side === 'A' ? a2 || undefined : undefined,
          a3: side === 'A' && a3 ? a3 : undefined,
          b1: side === 'B' ? b1 || undefined : undefined,
          b2: side === 'B' ? b2 || undefined : undefined,
          b3: side === 'B' && b3 ? b3 : undefined,
          email: email || undefined,
        }),
      });
      if (res.ok) trackEvent('survey_submit', { side, sector: sector || 'n/a', locale: key });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 p-10 text-center">
        <p className="text-2xl">🙏</p>
        <p className="mt-3 text-lg font-bold text-slate-900">{c.thankYou}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
      <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">{c.title}</h1>
      <p className="mt-2 text-slate-500">{c.intro}</p>

      {/* Q1 — settore */}
      <fieldset className="mt-8">
        <legend className="mb-3 font-semibold text-slate-900">{c.q1.label}</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {c.q1.options.map((opt, i) => (
            <Radio key={i} name="sector" value={String(i)} current={sector} onChange={setSector} label={opt} />
          ))}
        </div>
      </fieldset>

      {/* Branch — smistamento A/B */}
      <fieldset className="mt-8">
        <legend className="mb-3 font-semibold text-slate-900">{c.branch.label}</legend>
        <div className="grid gap-2">
          <Radio name="side" value="A" current={side} onChange={(v) => selectSide(v as 'A')} label={c.branch.optionA} />
          <Radio name="side" value="B" current={side} onChange={(v) => selectSide(v as 'B')} label={c.branch.optionB} />
        </div>
      </fieldset>

      {/* Percorso A — chi svolge */}
      {side === 'A' && (
        <div className="mt-8 space-y-8">
          <fieldset>
            <legend className="mb-3 font-semibold text-slate-900">{c.pathA.a1.label}</legend>
            <div className="grid gap-2">
              {c.pathA.a1.options.map((o, i) => <Radio key={i} name="a1" value={String(i)} current={a1} onChange={setA1} label={o} />)}
            </div>
          </fieldset>
          <fieldset>
            <legend className="mb-3 font-semibold text-slate-900">{c.pathA.a2.label}</legend>
            <div className="grid gap-2 sm:grid-cols-3">
              {c.pathA.a2.options.map((o, i) => <Radio key={i} name="a2" value={String(i)} current={a2} onChange={setA2} label={o} />)}
            </div>
          </fieldset>
          <fieldset>
            <legend className="mb-3 font-semibold text-slate-900">{c.pathA.a3.label}</legend>
            <Scale value={a3} onChange={setA3} low={c.pathA.a3.lowLabel} high={c.pathA.a3.highLabel} />
          </fieldset>
        </div>
      )}

      {/* Percorso B — chi commissiona */}
      {side === 'B' && (
        <div className="mt-8 space-y-8">
          <fieldset>
            <legend className="mb-3 font-semibold text-slate-900">{c.pathB.b1.label}</legend>
            <div className="grid gap-2">
              {c.pathB.b1.options.map((o, i) => <Radio key={i} name="b1" value={String(i)} current={b1} onChange={setB1} label={o} />)}
            </div>
          </fieldset>
          <fieldset>
            <legend className="mb-3 font-semibold text-slate-900">{c.pathB.b2.label}</legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {c.pathB.b2.options.map((o, i) => <Radio key={i} name="b2" value={String(i)} current={b2} onChange={setB2} label={o} />)}
            </div>
          </fieldset>
          <fieldset>
            <legend className="mb-3 font-semibold text-slate-900">{c.pathB.b3.label}</legend>
            <Scale value={b3} onChange={setB3} low={c.pathB.b3.lowLabel} high={c.pathB.b3.highLabel} />
          </fieldset>
        </div>
      )}

      {/* Email facoltativa */}
      {side && (
        <div className="mt-8">
          <label className="mb-2 block text-sm text-slate-600">{c.emailLabel}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={c.emailPlaceholder}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
          />
        </div>
      )}

      {/* Honeypot: nascosto agli umani, riempito dai bot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <p className="mt-6 text-xs text-slate-400">{c.privacyNote}</p>

      <button
        type="submit"
        disabled={!complete || status === 'loading'}
        className="mt-4 w-full rounded-xl px-6 py-3.5 text-sm font-bold text-white transition disabled:opacity-40 disabled:cursor-not-allowed"
        style={{ backgroundColor: ACCENT }}
      >
        {status === 'loading' ? '…' : c.submit}
      </button>

      {side && !complete && (
        <p className="mt-3 text-center text-sm text-slate-400">
          {key === 'it' ? 'Rispondi a tutte le domande per inviare.' : 'Please answer all questions to submit.'}
        </p>
      )}

      {status === 'error' && (
        <p className="mt-3 text-center text-sm text-red-500">
          {key === 'it' ? 'Qualcosa non ha funzionato. Riprova.' : 'Something went wrong. Please try again.'}
        </p>
      )}
    </form>
  );
}
