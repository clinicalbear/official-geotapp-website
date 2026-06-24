'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/i18n/locale-routing';
import {
  buildPolicyAcceptancePayload,
  PRIVACY_URL,
  TERMS_URL,
} from '@/lib/policyAcceptance';

const SAAS_URL = process.env.NEXT_PUBLIC_SAAS_URL || 'https://crm.geotapp.com';

// The 3 Flow plans shown at conversion. flowSeats = included Flow users; ttCap =
// max TimeTracker seats buyable on that plan (mirrors the CRM TT_SEAT_CAP).
const PLANS = [
  { key: 'SOLO', name: 'Solo', flowAnnual: 390, flowMonthly: 39, flowSeats: 1, ttCap: 1 },
  { key: 'TEAM', name: 'Team', flowAnnual: 990, flowMonthly: 99, flowSeats: 5, ttCap: 5 },
  { key: 'BUSINESS', name: 'Business', flowAnnual: 1990, flowMonthly: 199, flowSeats: 999, ttCap: 999 },
] as const;
const TT_ANNUAL = 36; // € per seat / year
const TT_MONTHLY = 3; // € per seat / month

// Binding clauses A and B are shown verbatim in Italian (lawyer-approved wording).
// Only the surrounding UI chrome is localized.
const CLAUSE_RINUNCIO =
  'Chiedo l’attivazione immediata del servizio e dichiaro espressamente di rinunciare al diritto di recesso di 14 giorni, prendendo atto che, una volta iniziata l’erogazione, tale diritto non potrà più essere esercitato. Per confermare, scrivi RINUNCIO qui sotto.';
const CLAUSE_MIN_TERM =
  'Approvo specificamente la clausola di durata minima di 12 (dodici) mesi e l’obbligo di corrispondere i canoni per l’intero periodo anche in caso di disdetta anticipata; in caso di pagamento mensile, verserò le rate fino al termine dei 12 mesi, con facoltà di saldare in un’unica soluzione l’importo residuo, scontato del 10%.';

type Strings = {
  title: string;
  subtitle: string;
  vatLabel: string;
  vatPlaceholder: string;
  rinuncioPlaceholder: string;
  noWaiverHint: string;
  termsPrefix: string;
  termsLink: string;
  privacyPrefix: string;
  privacyLink: string;
  submit: string;
  missingTenant: string;
  vatRequired: string;
  minTermRequired: string;
  generic: string;
};

const UI: Record<'it' | 'en' | 'de', Strings> = {
  it: {
    title: 'Completa l’abbonamento',
    subtitle: 'Ancora un passaggio per attivare GeoTapp.',
    vatLabel: 'Partita IVA',
    vatPlaceholder: 'es. IT01234567890',
    rinuncioPlaceholder: 'Scrivi RINUNCIO (lascia vuoto per mantenere i 14 giorni)',
    noWaiverHint:
      'Se lasci vuoto il campo, mantieni il diritto di ripensamento: il servizio a pagamento si attiverà dopo 14 giorni.',
    termsPrefix: 'Ho letto e accetto le',
    termsLink: 'Condizioni di servizio',
    privacyPrefix: 'Ho letto la',
    privacyLink: 'Privacy Policy',
    submit: 'Vai al pagamento',
    missingTenant: 'Link non valido: manca il riferimento all’account.',
    vatRequired: 'Inserisci la partita IVA.',
    minTermRequired: 'Devi approvare specificamente la clausola di durata minima.',
    generic: 'Qualcosa è andato storto. Riprova.',
  },
  en: {
    title: 'Complete your subscription',
    subtitle: 'One last step to activate GeoTapp.',
    vatLabel: 'VAT number',
    vatPlaceholder: 'e.g. IT01234567890',
    rinuncioPlaceholder: 'Type RINUNCIO (leave empty to keep the 14 days)',
    noWaiverHint:
      'If you leave this empty you keep the cooling-off right: the paid service activates after 14 days.',
    termsPrefix: 'I have read and accept the',
    termsLink: 'Terms of Service',
    privacyPrefix: 'I have read the',
    privacyLink: 'Privacy Policy',
    submit: 'Go to payment',
    missingTenant: 'Invalid link: the account reference is missing.',
    vatRequired: 'Please enter your VAT number.',
    minTermRequired: 'You must specifically approve the minimum-term clause.',
    generic: 'Something went wrong. Please try again.',
  },
  de: {
    title: 'Abonnement abschließen',
    subtitle: 'Nur noch ein Schritt, um GeoTapp zu aktivieren.',
    vatLabel: 'USt-IdNr.',
    vatPlaceholder: 'z. B. IT01234567890',
    rinuncioPlaceholder: 'RINUNCIO eingeben (leer lassen, um die 14 Tage zu behalten)',
    noWaiverHint:
      'Wenn Sie das Feld leer lassen, behalten Sie das Widerrufsrecht: Der kostenpflichtige Dienst wird nach 14 Tagen aktiviert.',
    termsPrefix: 'Ich habe die',
    termsLink: 'Nutzungsbedingungen',
    privacyPrefix: 'Ich habe die',
    privacyLink: 'Datenschutzerklärung',
    submit: 'Zur Zahlung',
    missingTenant: 'Ungültiger Link: Der Kontobezug fehlt.',
    vatRequired: 'Bitte geben Sie Ihre USt-IdNr. ein.',
    minTermRequired: 'Sie müssen die Mindestlaufzeit-Klausel ausdrücklich annehmen.',
    generic: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
  },
};

function CompletaInner() {
  const pathname = usePathname();
  const search = useSearchParams();
  const localeRaw = getLocaleFromPathname(pathname || '') || 'en';
  const t = UI[(['it', 'en', 'de'].includes(localeRaw) ? localeRaw : 'en') as 'it' | 'en' | 'de'];

  const tenant = search.get('tenant') || '';
  const token = search.get('token') || '';
  const interval = search.get('interval') === 'monthly' ? 'monthly' : 'annual';

  const [vat, setVat] = useState('');
  const [rinuncio, setRinuncio] = useState('');
  const [minTerm, setMinTerm] = useState(false);
  const [terms, setTerms] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Plan + TT seats. Pre-filled from the trial (suggested), but changeable.
  const [plan, setPlan] = useState<string>('TEAM');
  const [ttSeats, setTtSeats] = useState<number>(0);
  const [suggestedPlan, setSuggestedPlan] = useState<string | null>(null);

  useEffect(() => {
    if (!tenant || !token) return;
    fetch(
      `${SAAS_URL}/api/v1/convert?tenant=${encodeURIComponent(tenant)}&token=${encodeURIComponent(token)}`,
    )
      .then((r) => r.json())
      .then((d) => {
        if (d && d.trialPlan) {
          setSuggestedPlan(d.trialPlan);
          setPlan(d.trialPlan);
          setTtSeats(Math.max(0, Number(d.trialTimetrackerSeats) || 0));
        }
      })
      .catch(() => {});
  }, [tenant, token]);

  const selectedPlanData = PLANS.find((p) => p.key === plan) || PLANS[1];
  const cap = selectedPlanData.ttCap;
  function selectPlan(k: string) {
    setPlan(k);
    const newCap = (PLANS.find((p) => p.key === k) || PLANS[1]).ttCap;
    setTtSeats((s) => Math.min(s, newCap));
  }
  const ttUnit = interval === 'annual' ? TT_ANNUAL : TT_MONTHLY;
  const flowPrice = interval === 'annual' ? selectedPlanData.flowAnnual : selectedPlanData.flowMonthly;
  const total = flowPrice + ttSeats * ttUnit;
  const perLabel = interval === 'annual' ? 'anno' : 'mese';

  const canSubmit = useMemo(
    () => Boolean(tenant && vat.trim() && minTerm && terms && privacy && !loading),
    [tenant, vat, minTerm, terms, privacy, loading],
  );

  async function handleSubmit() {
    setError(null);
    if (!tenant) return setError(t.missingTenant);
    if (!vat.trim()) return setError(t.vatRequired);
    if (!minTerm) return setError(t.minTermRequired);

    setLoading(true);
    try {
      const now = new Date().toISOString();
      const policy = buildPolicyAcceptancePayload(now);
      const res = await fetch(`${SAAS_URL}/api/v1/convert`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tenantId: tenant,
          token,
          interval,
          selectedPlan: plan,
          selectedTtSeats: ttSeats,
          vatNumber: vat.trim(),
          minTermAccepted: true,
          minTermAcceptedAt: now,
          recessoWaiverText: rinuncio.trim(),
          recessoWaivedAt: rinuncio.trim() ? now : '',
          ...policy,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        setError(data.error || t.generic);
        setLoading(false);
        return;
      }
      window.location.href = data.url;
    } catch {
      setError(t.generic);
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-5 py-12">
      <div className="card-modern p-7">
        <h1 className="text-2xl font-bold text-slate-900">{t.title}</h1>
        <p className="mt-1 text-sm text-slate-500">{t.subtitle}</p>

        {/* Plan selector: the trialed plan is highlighted ("in base al tuo trial");
            the customer can pick a different plan and choose TimeTracker seats. */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {PLANS.map((p) => {
            const isSel = plan === p.key;
            const isSuggested = suggestedPlan === p.key;
            return (
              <button
                type="button"
                key={p.key}
                onClick={() => selectPlan(p.key)}
                className={`relative rounded-xl border-2 p-4 text-left transition ${
                  isSel
                    ? 'border-primary bg-primary/5 shadow-md'
                    : 'border-slate-200 bg-white hover:border-primary/40'
                }`}
              >
                {isSuggested && (
                  <span className="absolute -top-2 left-3 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-white">
                    in base al tuo trial
                  </span>
                )}
                <div className="text-sm font-bold text-slate-900">Flow {p.name}</div>
                <div className="mt-1 text-lg font-extrabold text-slate-900">
                  €{interval === 'annual' ? p.flowAnnual : p.flowMonthly}
                  <span className="text-xs font-normal text-slate-500">/{perLabel}</span>
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  {p.flowSeats >= 999 ? 'Utenti Flow illimitati' : `${p.flowSeats} utenti Flow`} · fino a{' '}
                  {p.ttCap >= 999 ? '∞' : p.ttCap} seat TimeTracker
                </div>
              </button>
            );
          })}
        </div>

        {/* TimeTracker seat selector */}
        <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 p-4">
          <div>
            <div className="text-sm font-semibold text-slate-700">Seat TimeTracker</div>
            <div className="text-xs text-slate-500">
              €{ttUnit}/seat all’{perLabel} · max {cap >= 999 ? '∞' : cap}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setTtSeats((s) => Math.max(0, s - 1))}
              className="h-9 w-9 rounded-full border border-slate-300 text-xl leading-none text-slate-700 disabled:opacity-40"
              disabled={ttSeats <= 0}
              aria-label="meno"
            >
              −
            </button>
            <span className="w-7 text-center text-base font-bold">{ttSeats}</span>
            <button
              type="button"
              onClick={() => setTtSeats((s) => Math.min(cap, s + 1))}
              className="h-9 w-9 rounded-full border border-slate-300 text-xl leading-none text-slate-700 disabled:opacity-40"
              disabled={ttSeats >= cap}
              aria-label="più"
            >
              +
            </button>
          </div>
        </div>

        {/* Running total */}
        <div className="mt-3 flex items-baseline justify-between border-t border-slate-100 pt-3">
          <span className="text-sm text-slate-500">Totale</span>
          <span className="text-xl font-extrabold text-slate-900">
            €{total}
            <span className="text-xs font-normal text-slate-500"> /{perLabel} + IVA</span>
          </span>
        </div>

        {/* Partita IVA (mandatory) */}
        <label className="mt-6 block text-sm font-semibold text-slate-700">
          {t.vatLabel}
          <input
            value={vat}
            onChange={(e) => setVat(e.target.value)}
            placeholder={t.vatPlaceholder}
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </label>

        {/* Clause A: explicit RINUNCIO waiver */}
        <div className="mt-6 rounded-xl bg-slate-50 p-4">
          <p className="text-sm text-slate-700">{CLAUSE_RINUNCIO}</p>
          <input
            value={rinuncio}
            onChange={(e) => setRinuncio(e.target.value.toUpperCase())}
            placeholder={t.rinuncioPlaceholder}
            className="mt-3 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <p className="mt-2 text-xs text-slate-500">{t.noWaiverHint}</p>
        </div>

        {/* Clause B: specific acceptance of the 12-month minimum term (art. 1341 c.c.) */}
        <label className="mt-4 flex items-start gap-3 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={minTerm}
            onChange={(e) => setMinTerm(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
          />
          <span>{CLAUSE_MIN_TERM}</span>
        </label>

        {/* Terms + privacy */}
        <div className="mt-4 space-y-3">
          <label className="flex items-start gap-3 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
            />
            <span>
              {t.termsPrefix}{' '}
              <a href={TERMS_URL} target="_blank" rel="noreferrer" className="font-semibold text-primary hover:underline">
                {t.termsLink}
              </a>
            </span>
          </label>
          <label className="flex items-start gap-3 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={privacy}
              onChange={(e) => setPrivacy(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
            />
            <span>
              {t.privacyPrefix}{' '}
              <a href={PRIVACY_URL} target="_blank" rel="noreferrer" className="font-semibold text-primary hover:underline">
                {t.privacyLink}
              </a>
            </span>
          </label>
        </div>

        {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="btn-modern mt-6 w-full disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? '…' : t.submit}
        </button>
      </div>
    </main>
  );
}

export default function CompletaPage() {
  return (
    <Suspense fallback={null}>
      <CompletaInner />
    </Suspense>
  );
}
