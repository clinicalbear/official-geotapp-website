'use client';

/**
 * La schermata dove un trial diventa un abbonamento.
 *
 * Ci si arriva in due modi: dal link firmato dell'email del dodicesimo giorno,
 * e — dall'08/09/2026 — da dentro Flow, premendo "Attiva abbonamento" (il CRM
 * genera lo stesso link firmato per il titolare autenticato).
 *
 * Cosa deve fare, nell'ordine:
 *  1. dire in evidenza COSA consigliamo e PERCHE', con i numeri della sua prova;
 *  2. lasciare cambiare tutto — piano, postazioni, posti ufficio, mensile o
 *     annuale — e mostrare il totale che cambia sotto le dita;
 *  3. raccogliere partita IVA e consensi, e mandare a Stripe.
 *
 * Regola commerciale che governa la pagina: il piano NON include postazioni
 * TimeTracker, dice quante se ne possono tenere accese. Quindi le postazioni
 * comandano: se ne chiedi piu' di quante ne regge il piano, il piano sale — e
 * lo si scrive, non lo si fa di nascosto.
 *
 * Tetti e prezzi arrivano dall'API (`catalog`): la copia locale qui dentro e'
 * solo una rete di sicurezza per non lasciare una pagina di pagamento muta se
 * il CRM non risponde.
 */

import './l-page.css';
import { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { getLocaleFromPathname, localizePath } from '@/lib/i18n/locale-routing';
import type { AppLocale } from '@/lib/i18n/config';
import { buildPolicyAcceptancePayload } from '@/lib/policyAcceptance';
import { BCP47, pickLocale, UI } from './strings';
import {
  buildComparison,
  ceilingOf,
  planForSeats,
  planIndex,
  planPriceEur,
  ttSeatsEur,
  type Catalog,
  type Interval,
  type PlanCode,
} from './pricing';

const SAAS_URL = process.env.NEXT_PUBLIC_SAAS_URL || 'https://crm.geotapp.com';

// Rete di sicurezza, non fonte di verita': i numeri veri arrivano dall'API.
const CATALOG_FALLBACK: Catalog = {
  plans: [
    { code: 'SOLO', ttSeatCeiling: 2, monthly: 39, annual: 390 },
    { code: 'TEAM', ttSeatCeiling: 5, monthly: 99, annual: 990 },
    { code: 'BUSINESS', ttSeatCeiling: -1, monthly: 199, annual: 1990 },
  ],
  ttSeatTiers: {
    monthly: [{ upTo: 25, eur: 3 }, { upTo: null, eur: 2.5 }],
    annual: [{ upTo: 25, eur: 36 }, { upTo: null, eur: 30 }],
  },
  officeSeatAnnualEur: 36,
};

const PLAN_NAMES: Record<PlanCode, string> = {
  SOLO: 'Solo',
  TEAM: 'Team',
  BUSINESS: 'Business',
};

// La clausola vincolante (durata minima, art. 1341 c.c.) e' resa nella lingua del cliente,
// in traduzione fedele (vedi strings.ts), con il link al testo legale italiano dei Termini.

type Reason = { code: 'ttSeats' | 'officeSeats' | 'flowUsers' | 'noUsage'; count: number };

function CompletaInner() {
  const pathname = usePathname();
  const search = useSearchParams();
  const locale = pickLocale(getLocaleFromPathname(pathname || '') || 'en');
  const t = UI[locale];

  const tenant = search.get('tenant') || '';
  const token = search.get('token') || '';

  const [interval, setInterval] = useState<Interval>(
    search.get('interval') === 'monthly' ? 'monthly' : 'annual',
  );
  const [catalog, setCatalog] = useState<Catalog>(CATALOG_FALLBACK);
  const [plan, setPlan] = useState<PlanCode>('TEAM');
  const [ttSeats, setTtSeats] = useState(0);
  const [officeSeats, setOfficeSeats] = useState(0);
  const [suggestedPlan, setSuggestedPlan] = useState<PlanCode | null>(null);
  const [reasons, setReasons] = useState<Reason[]>([]);
  const [notice, setNotice] = useState<string | null>(null);

  const [vat, setVat] = useState('');
  const [minTerm, setMinTerm] = useState(false);
  const [terms, setTerms] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Codice posti "ad personam": si controlla sul CRM e, se vale, aggiunge al
  // carrello le postazioni del codice senza cambiare piano. Si brucia al pagamento.
  const [codeInput, setCodeInput] = useState('');
  const [codeApplied, setCodeApplied] = useState<{
    code: string;
    plan: PlanCode;
    extra: number;
  } | null>(null);
  const [codeMsg, setCodeMsg] = useState<string | null>(null);
  const [codeBusy, setCodeBusy] = useState(false);

  const money = useCallback(
    (eur: number) =>
      new Intl.NumberFormat(BCP47[locale], {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: Number.isInteger(eur) ? 0 : 2,
        maximumFractionDigits: 2,
      }).format(eur),
    [locale],
  );

  useEffect(() => {
    if (!tenant || !token) return;
    fetch(
      `${SAAS_URL}/api/v1/convert?tenant=${encodeURIComponent(tenant)}&token=${encodeURIComponent(token)}`,
    )
      .then((r) => r.json())
      .then((d) => {
        if (!d) return;
        if (d.catalog?.plans?.length) setCatalog(d.catalog as Catalog);
        if (d.alreadySubscribed) setError(t.alreadySubscribed);
        const rec = d.recommendation;
        if (rec?.plan) {
          setSuggestedPlan(rec.plan as PlanCode);
          setPlan(rec.plan as PlanCode);
          setTtSeats(Math.max(0, Number(rec.ttSeats) || 0));
          setOfficeSeats(Math.max(0, Number(rec.officeSeats) || 0));
          setReasons(Array.isArray(rec.reasons) ? (rec.reasons as Reason[]) : []);
        } else if (d.trialPlan) {
          // Risposta di una versione precedente dell'API: si tiene il piano del
          // trial invece di lasciare la pagina senza proposta.
          setSuggestedPlan(d.trialPlan as PlanCode);
          setPlan(d.trialPlan as PlanCode);
        }
      })
      .catch(() => {
        // Silenzio voluto: la pagina resta usabile col listino di riserva.
      });
  }, [tenant, token, t.alreadySubscribed]);

  // Col codice applicato il tetto di quel piano sale dei posti del codice.
  const catalogEff = useMemo<Catalog>(() => {
    if (!codeApplied) return catalog;
    return {
      ...catalog,
      plans: catalog.plans.map((p) =>
        p.code === codeApplied.plan && p.ttSeatCeiling >= 0
          ? { ...p, ttSeatCeiling: p.ttSeatCeiling + codeApplied.extra }
          : p,
      ),
    };
  }, [catalog, codeApplied]);

  const planRichiesto = planForSeats(catalogEff, ttSeats);

  /** Il cliente scrive il codice: si controlla sul CRM e, se vale, si aggiungono i posti. */
  async function applicaCodice() {
    const code = codeInput.trim();
    if (!code || codeApplied || !tenant || !token) return;
    setCodeBusy(true);
    setCodeMsg(null);
    try {
      const res = await fetch(`${SAAS_URL}/api/v1/convert/seat-code`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tenantId: tenant, token, code }),
      });
      const data = await res.json().catch(() => null);
      if (!data || res.status === 503) {
        setCodeMsg(t.codeUnavailable);
      } else if (!data.valid) {
        setCodeMsg(data.reason === 'unavailable' ? t.codeUnavailable : t.codeInvalid);
      } else {
        const codePlan = data.plan as PlanCode;
        const extra = Math.max(0, Number(data.extraSeats) || 0);
        if (plan !== codePlan) {
          // Il codice vale per un piano preciso: usarlo su un altro non servirebbe
          // a niente e lo brucerebbe al pagamento.
          setCodeMsg(t.codeWrongPlan(PLAN_NAMES[codePlan]));
        } else {
          setCodeApplied({ code: String(data.code), plan: codePlan, extra });
          setTtSeats((s) => s + extra);
          setNotice(null);
          setCodeInput('');
        }
      }
    } catch {
      setCodeMsg(t.codeUnavailable);
    } finally {
      setCodeBusy(false);
    }
  }

  /** Si toglie il codice: i posti che aveva aggiunto se ne vanno e il piano torna a seguire le postazioni. */
  function rimuoviCodice() {
    if (!codeApplied) return;
    const nuove = Math.max(0, ttSeats - codeApplied.extra);
    setCodeApplied(null);
    setCodeMsg(null);
    setTtSeats(nuove);
    const necessario = planForSeats(catalog, nuove);
    if (planIndex(necessario) > planIndex(plan)) {
      setPlan(necessario);
      setNotice(t.bumpUp(PLAN_NAMES[necessario], nuove));
    }
  }

  /** Le postazioni comandano: se non ci stanno, il piano sale e lo si dice. */
  function cambiaPostazioni(nuove: number) {
    const seats = Math.max(0, nuove);
    setTtSeats(seats);
    const necessario = planForSeats(catalogEff, seats);
    if (planIndex(necessario) > planIndex(plan)) {
      setPlan(necessario);
      setNotice(t.bumpUp(PLAN_NAMES[necessario], seats));
    } else {
      setNotice(null);
    }
  }

  /** Scegliere un piano piu' piccolo delle postazioni le riduce, dichiarandolo. */
  function scegliPiano(nuovo: PlanCode) {
    setPlan(nuovo);
    const tetto = ceilingOf(catalogEff, nuovo);
    if (tetto >= 0 && ttSeats > tetto) {
      setTtSeats(tetto);
      setNotice(t.seatsTrimmed(PLAN_NAMES[nuovo], tetto));
    } else {
      setNotice(null);
    }
  }

  // In promo le postazioni comprese nel piano non si pagano: il totale qui
  // deve coincidere con quello che il CRM manda a Stripe.
  const incluse = catalog.plans.find((p) => p.code === plan)?.includedTtSeats ?? 0;
  const righe = useMemo(() => {
    const flow = planPriceEur(catalog, plan, interval);
    const tt = ttSeatsEur(catalog, Math.max(0, ttSeats - incluse), interval);
    const office = interval === 'annual' ? officeSeats * catalog.officeSeatAnnualEur : 0;
    return { flow, tt, office, totale: Math.round((flow + tt + office) * 100) / 100 };
  }, [catalog, plan, ttSeats, officeSeats, interval, incluse]);

  // Il confronto "valore pieno" / "con promo e codice": solo col codice attivo
  // sul piano a cui appartiene. Tutto dal listino del CRM, niente cifre a mano.
  const codiceAttivo = codeApplied && codeApplied.plan === plan ? codeApplied : null;
  const confronto = useMemo(
    () =>
      codiceAttivo ? buildComparison(catalog, ttSeats, officeSeats, interval, righe) : null,
    [catalog, codiceAttivo, ttSeats, officeSeats, interval, righe],
  );

  /** "17 × 36 € = 612 €" finche' tutte le postazioni stanno nel primo scaglione, altrimenti solo il totale. */
  const moltiplicazione = useCallback(
    (n: number, lordo: number) => {
      const primo = catalog.ttSeatTiers[interval][0];
      if (primo && (primo.upTo === null || n <= primo.upTo)) {
        return `${n} × ${money(primo.eur)} = ${money(lordo)}`;
      }
      return money(lordo);
    },
    [catalog, interval, money],
  );

  const risparmioAnnuale = useMemo(() => {
    const mensile = planPriceEur(catalog, plan, 'monthly') * 12;
    const annuale = planPriceEur(catalog, plan, 'annual');
    return Math.max(0, mensile - annuale);
  }, [catalog, plan]);

  const perLabel = interval === 'annual' ? t.perYear : t.perMonth;
  const prezzoPostazione = useMemo(() => {
    const primo = catalog.ttSeatTiers[interval][0];
    return primo ? money(primo.eur) : '';
  }, [catalog, interval, money]);

  const canSubmit = Boolean(tenant && vat.trim() && minTerm && terms && privacy && !loading);

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
          selectedOfficeClockInSeats: interval === 'annual' ? officeSeats : 0,
          // Solo se il codice serve al piano scelto: altrimenti si brucerebbe per niente.
          ...(codiceAttivo ? { seatCode: codiceAttivo.code } : {}),
          vatNumber: vat.trim(),
          minTermAccepted: true,
          minTermAcceptedAt: now,
          minTermAcceptedLanguage: locale,
          minTermAcceptedPathLocale: getLocaleFromPathname(pathname || '') || 'en',
          ...policy,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        setError(
          typeof data.code === 'string' && data.code.startsWith('seat_code_')
            ? data.code === 'seat_code_unavailable'
              ? t.codeUnavailable
              : t.codeInvalid
            : data.error || t.generic,
        );
        setLoading(false);
        return;
      }
      window.location.href = data.url;
    } catch {
      setError(t.generic);
      setLoading(false);
    }
  }

  const frasiMotivo = reasons
    .map((r) => {
      if (r.code === 'ttSeats') return t.reasonTt(r.count);
      if (r.code === 'officeSeats') return t.reasonOffice(r.count);
      if (r.code === 'flowUsers') return t.reasonFlow(r.count);
      return t.reasonNone;
    })
    .filter(Boolean);

  return (
    <div className="lp-l lp-abbonati">
      <div className="wrap">
        <div className="box">
          <h1>{t.title}</h1>
          <p className="sub">{t.subtitle}</p>

          {/* Il consiglio, in evidenza: cosa e perche', con i suoi numeri. */}
          {suggestedPlan && (
            <div className="rec">
              <span className="rec-badge">{t.recommendedFor}</span>
              <p className="rec-title">{t.recTitle(PLAN_NAMES[suggestedPlan])}</p>
              {frasiMotivo.length > 0 && (
                <>
                  <p className="rec-intro">{t.recIntro}</p>
                  <ul className="rec-list">
                    {frasiMotivo.map((frase) => (
                      <li key={frase}>{frase}</li>
                    ))}
                  </ul>
                </>
              )}
              <p className="rec-change">{t.recChange}</p>
            </div>
          )}

          {/* Mensile o annuale */}
          <div className="cycle" role="group" aria-label={t.totalLabel}>
            <button
              type="button"
              className={interval === 'annual' ? 'on' : ''}
              onClick={() => setInterval('annual')}
              aria-pressed={interval === 'annual'}
            >
              {t.billingAnnual}
              {risparmioAnnuale > 0 && (
                <small> · {t.billingSave(money(risparmioAnnuale))}</small>
              )}
            </button>
            <button
              type="button"
              className={interval === 'monthly' ? 'on' : ''}
              onClick={() => {
                setInterval('monthly');
                setOfficeSeats(0);
              }}
              aria-pressed={interval === 'monthly'}
            >
              {t.billingMonthly}
            </button>
          </div>

          {catalog.promo && (
            <p className="notice soft">
              {t.promoNote(
                new Date(catalog.promo.endsAt).toLocaleDateString(BCP47[locale], {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                  timeZone: 'Europe/Rome',
                }),
                catalog.promo.months,
              )}
            </p>
          )}
          {/* I piani: il numero accanto e' il TETTO delle postazioni; in promo una parte e' compresa. */}
          <div className="plans">
            {catalogEff.plans.map((p) => {
              const isSel = plan === p.code;
              const isSuggested = suggestedPlan === p.code;
              return (
                <button
                  type="button"
                  key={p.code}
                  onClick={() => scegliPiano(p.code)}
                  className={`plan-c${isSel ? ' on' : ''}`}
                  aria-pressed={isSel}
                >
                  {isSuggested && <span className="tag">{t.recommendedFor}</span>}
                  <div className="nm">Flow {PLAN_NAMES[p.code]}</div>
                  <div className="pr">
                    {money(interval === 'annual' ? p.annual : p.monthly)}
                    <small> /{perLabel}</small>
                  </div>
                  <div className="ds">
                    {p.ttSeatCeiling < 0
                      ? t.planCeilingUnlimited
                      : t.planCeiling(p.ttSeatCeiling)}
                  </div>
                  {(p.includedTtSeats ?? 0) > 0 && (
                    <div className="ds">{t.includedSeats(p.includedTtSeats as number)}</div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Postazioni TimeTracker: sempre un extra, mai incluse. */}
          <div className="seat">
            <div>
              <div className="lb">{t.seatsTitle}</div>
              <div className="mt">{incluse > 0 ? t.seatsHelpPromo : t.seatsHelp}</div>
              <div className="mt">
                {t.seatsUnit(prezzoPostazione)} /{perLabel}
              </div>
              {incluse > 0 && <div className="mt">{t.includedSeats(incluse)}</div>}
            </div>
            <div className="ctr">
              <button
                type="button"
                onClick={() => cambiaPostazioni(ttSeats - 1)}
                disabled={ttSeats <= 0}
                aria-label={t.seatsDecrease}
              >
                −
              </button>
              <span className="n">{ttSeats}</span>
              <button
                type="button"
                onClick={() => cambiaPostazioni(ttSeats + 1)}
                aria-label={t.seatsIncrease}
              >
                +
              </button>
            </div>
          </div>

          {notice && <p className="notice">{notice}</p>}
          {!notice && planIndex(planRichiesto) < planIndex(plan) && ttSeats > 0 && (
            <p className="notice soft">
              {t.bumpDownHint(PLAN_NAMES[planRichiesto])}{' '}
              <button type="button" className="link" onClick={() => scegliPiano(planRichiesto)}>
                {t.bumpDownAction(PLAN_NAMES[planRichiesto])}
              </button>
            </p>
          )}

          {/* Posti Timbratura da ufficio: solo annuale, com'e' su Stripe. */}
          <div className="seat">
            <div>
              <div className="lb">{t.officeTitle}</div>
              <div className="mt">{t.officeHelp}</div>
              <div className="mt">
                {interval === 'annual'
                  ? `${money(catalog.officeSeatAnnualEur)} /${t.perYear}`
                  : t.officeAnnualOnly}
              </div>
            </div>
            <div className="ctr">
              <button
                type="button"
                onClick={() => setOfficeSeats((s) => Math.max(0, s - 1))}
                disabled={interval !== 'annual' || officeSeats <= 0}
                aria-label={t.seatsDecrease}
              >
                −
              </button>
              <span className="n">{interval === 'annual' ? officeSeats : 0}</span>
              <button
                type="button"
                onClick={() => setOfficeSeats((s) => s + 1)}
                disabled={interval !== 'annual'}
                aria-label={t.seatsIncrease}
              >
                +
              </button>
            </div>
          </div>

          {/* Codice posti: un codice personale che aggiunge postazioni senza cambiare piano. */}
          <div className="code">
            {codeApplied ? (
              <div className="code-ok">
                <span>{t.codeApplied(codeApplied.extra, PLAN_NAMES[codeApplied.plan])}</span>
                <button type="button" className="link" onClick={rimuoviCodice}>
                  {t.codeRemove}
                </button>
              </div>
            ) : (
              <>
                <label htmlFor="seatcode" className="lb">
                  {t.codeTitle}
                </label>
                <div className="code-row">
                  <input
                    id="seatcode"
                    className="in"
                    value={codeInput}
                    onChange={(e) => setCodeInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        applicaCodice();
                      }
                    }}
                    placeholder={t.codePlaceholder}
                    autoCapitalize="characters"
                    autoComplete="off"
                    spellCheck={false}
                  />
                  <button
                    type="button"
                    className="code-apply"
                    onClick={applicaCodice}
                    disabled={codeBusy || !codeInput.trim()}
                  >
                    {t.codeApply}
                  </button>
                </div>
              </>
            )}
            {codeMsg && <p className="code-msg">{codeMsg}</p>}
          </div>

          {/* Il totale, voce per voce: chi paga deve poter rifare la somma. */}
          {confronto ? (
            <div className="cmp">
              <div className="col full">
                <div className="hd">{t.compareFullTitle}</div>
                <div className="row">
                  <span>{t.lineFlow(PLAN_NAMES[confronto.pieno.plan])}</span>
                  <span>{money(confronto.pieno.flow)}</span>
                </div>
                <div className="row">
                  <span>{t.lineTt(ttSeats)}</span>
                  <span>{moltiplicazione(ttSeats, confronto.pieno.tt)}</span>
                </div>
                {confronto.pieno.office > 0 && (
                  <div className="row">
                    <span>{t.lineOffice(officeSeats)}</span>
                    <span>{money(confronto.pieno.office)}</span>
                  </div>
                )}
                <div className="row sum">
                  <span>{t.totalLabel}</span>
                  <span>{money(confronto.pieno.totale)}</span>
                </div>
                <p className="nt">{t.compareFullNote(PLAN_NAMES[confronto.pieno.plan], ttSeats)}</p>
              </div>
              <div className="col promo">
                <div className="hd">{t.comparePromoTitle}</div>
                <div className="row">
                  <span>{t.lineFlow(PLAN_NAMES[plan])}</span>
                  <span>{money(confronto.promo.flow)}</span>
                </div>
                <div className="row">
                  <span>{t.lineTt(ttSeats)}</span>
                  <span>{moltiplicazione(ttSeats, confronto.promo.lordo)}</span>
                </div>
                {incluse > 0 && confronto.promo.valoreIncluse > 0 && (
                  <>
                    <div className="row">
                      <span>{t.lineIncluded(Math.min(incluse, ttSeats), PLAN_NAMES[plan])}</span>
                      <span>− {money(confronto.promo.valoreIncluse)}</span>
                    </div>
                    <div className="row">
                      <span>{t.lineSeatsToPay}</span>
                      <span>{money(confronto.promo.tt)}</span>
                    </div>
                  </>
                )}
                {confronto.promo.office > 0 && (
                  <div className="row">
                    <span>{t.lineOffice(officeSeats)}</span>
                    <span>{money(confronto.promo.office)}</span>
                  </div>
                )}
                <div className="row sum">
                  <span>{t.totalLabel}</span>
                  <span>{money(confronto.promo.totale)}</span>
                </div>
              </div>
            </div>
          ) : (
          <div className="bill">
            <div className="row">
              <span>{t.lineFlow(PLAN_NAMES[plan])}</span>
              <span>{money(righe.flow)}</span>
            </div>
            {ttSeats > 0 && (
              <div className="row">
                <span>{t.lineTt(ttSeats)}</span>
                <span>{money(righe.tt)}</span>
              </div>
            )}
            {righe.office > 0 && (
              <div className="row">
                <span>{t.lineOffice(officeSeats)}</span>
                <span>{money(righe.office)}</span>
              </div>
            )}
          </div>
          )}

          <div className="tot">
            <span className="lb">{t.totalLabel}</span>
            <span className="v">
              {money(righe.totale)}
              <small>
                {' '}
                /{perLabel} · {t.vatExcluded}
              </small>
            </span>
          </div>

          <p className="later">{t.laterNote}</p>

          {/* Partita IVA (obbligatoria) */}
          <div className="fld">
            <label htmlFor="vat">{t.vatLabel}</label>
            <input
              id="vat"
              value={vat}
              onChange={(e) => setVat(e.target.value)}
              placeholder={t.vatPlaceholder}
              className="in"
            />
          </div>

          {/* Accettazione specifica della durata minima di 12 mesi (art. 1341 c.c.) */}
          <label className="chk">
            <input
              type="checkbox"
              checked={minTerm}
              onChange={(e) => setMinTerm(e.target.checked)}
            />
            <span>{t.minTermClause}</span>
          </label>
          <p style={{ margin: '4px 0 14px 28px', fontSize: 13 }}>
            <a href={localizePath('/terms/', 'it')} target="_blank" rel="noopener noreferrer">
              {t.minTermLinkLabel}
            </a>
          </p>

          <div className="agree">
            <label>
              <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} />
              <span>
                {t.termsPrefix}{' '}
                {/* Il link apre i termini nella lingua della pagina; TERMS_URL resta quello registrato nell'accettazione. */}
                <a href={localizePath('/terms/', (getLocaleFromPathname(pathname || '') || 'it') as AppLocale)} target="_blank" rel="noreferrer">
                  {t.termsLink}
                </a>
              </span>
            </label>
            <label>
              <input
                type="checkbox"
                checked={privacy}
                onChange={(e) => setPrivacy(e.target.checked)}
              />
              <span>
                {t.privacyPrefix}{' '}
                <a href={localizePath('/privacy/', (getLocaleFromPathname(pathname || '') || 'it') as AppLocale)} target="_blank" rel="noreferrer">
                  {t.privacyLink}
                </a>
              </span>
            </label>
          </div>

          {error && <p className="err">{error}</p>}

          <button type="button" onClick={handleSubmit} disabled={!canSubmit} className="submit">
            {loading ? t.loading : t.submit}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CompletaPage() {
  return (
    <Suspense fallback={null}>
      <CompletaInner />
    </Suspense>
  );
}
