'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/store/cart';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { DEFAULT_LOCALE, getLocaleFromPathname, localizePath } from '@/lib/i18n/locale-routing';
import {
  EUR_PRICES,
  calculateTrackerQuote,
  convertEurToLocale,
  getFlowPlanPrice,
  getStandardRateMonthly,
  getVolumeRateMonthly,
  getCurrencyForLocale,
} from '@/lib/pricing';
import { pianoPerOperatori, type PianoFlow } from '@/lib/piano-per-operatori';
import { promoFine2026Attiva } from '@/lib/promo-fine-2026';

// Direzione L: stessa logica di sempre (calculateTrackerQuote, useCart), vestito
// nel registro del mockup docs/redesign-sito-2026-07/esplorazione/prezzi.html
// (.calc a due colonne, .seats in Anton, .tiers, .box). Componente usato SOLO
// da questa pagina: className liberi qui, nessun'altra route lo importa.
export default function PricingCalculator({
  promoIniziale = false,
  aggiungiPiano,
}: {
  promoIniziale?: boolean;
  aggiungiPiano?: (piano: PianoFlow) => void;
} = {}) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dict = getDictionary(locale);
  const pc = dict.pricing.calculator;

  const [employees, setEmployees] = useState(10);
  // Il cursore nativo cambia valore appena il dito tocca, anche se poi sta solo
  // scorrendo la pagina: chi scorreva cambiava il preventivo senza accorgersene.
  const tocco = useRef<{ x: number; y: number; valore: number } | null>(null);

  const quote = calculateTrackerQuote(employees, locale);
  // Nel browser, come il badge sulle card: una data decisa alla build resterebbe
  // accesa oltre la scadenza.
  const [promo, setPromo] = useState(promoIniziale);
  useEffect(() => {
    setPromo(promoFine2026Attiva());
  }, []);
  // Il conto vero: il piano che regge questi operatori, piu' le postazioni.
  const fit = pianoPerOperatori(employees, promo);
  const planPrice = getFlowPlanPrice(fit.piano, locale ?? DEFAULT_LOCALE);
  const planName = dict.pricing.categories.flow.products[{ business: 0, team: 1, solo: 2 }[fit.piano]].name;
  const seatsEur = quote?.eur.totalAnnual ?? 0;
  const billableEur = fit.daPagare > 0 ? (calculateTrackerQuote(fit.daPagare, locale)?.eur.totalAnnual ?? 0) : 0;
  const includedEur = seatsEur - billableEur;
  const totalAnnual = convertEurToLocale(planPrice.annual.eurAmount + billableEur, locale);
  const { addItem, toggleCart } = useCart();

  const { tier1MaxSeats, tier2MaxSeats } = EUR_PRICES.tracker;
  const tier1Rate = getStandardRateMonthly(locale);
  const tier2Rate = getVolumeRateMonthly(locale);

  const standardRateLabel = pc.standard_rate.replace(
    '{price}',
    tier1Rate.formatted,
  );

  const handleAddToCart = () => {
    if (!quote || quote.isCustom) return;
    // Il conto mostrato qui e' piano + postazioni: nel carrello devono entrare tutti e due.
    aggiungiPiano?.(fit.piano);
    addItem({
      id: 'prod_TZxemMJkQrWryr',
      name: 'GeoTapp TimeTracker',
      price: quote.eur.totalAnnual,
      currency: getCurrencyForLocale(locale),
      displayAmount: quote.display.totalAnnual.amount,
      displayFormatted: quote.display.totalAnnual.formatted,
      period: 'year',
      quantity: 1,
      metadata: {
        details: employees === 1 ? pc.seats_valuetext_one : pc.seats_valuetext.replace('{n}', String(employees)),
        employeeCount: employees,
        product_key: 'GEOTAPP_APP',
        license_type: 'BUSINESS',
      },
    });
    toggleCart();
  };

  const pct = ((employees - 1) / (151 - 1)) * 100;

  return (
    <div className={`calc${quote?.isCustom ? ' custom' : ''}`} id="calculator">
      <div className="r">
        <p className="kk k">{dict.pricing.categories.app.title}</p>
        <h2>{pc.title}</h2>
        <p className="calc-sub">
          {pc.subtitle}
        </p>
        <div className="sl">
          <div className="seats">
            <span>{employees > tier2MaxSeats ? `${tier2MaxSeats}+` : employees}</span>
            <small>{pc.active_users}</small>
          </div>
          <div style={{ marginTop: '34px' }}>
            <input
              type="range"
              min="1"
              max="151"
              value={employees}
              onChange={(e) => setEmployees(parseInt(e.target.value, 10))}
              onTouchStart={(e) => {
                const t = e.touches[0];
                tocco.current = { x: t.clientX, y: t.clientY, valore: employees };
              }}
              onTouchMove={(e) => {
                const inizio = tocco.current;
                if (!inizio) return;
                const t = e.touches[0];
                if (Math.abs(t.clientY - inizio.y) > Math.abs(t.clientX - inizio.x) + 4) {
                  setEmployees(inizio.valore);
                }
              }}
              onTouchEnd={() => {
                tocco.current = null;
              }}
              aria-label={pc.active_users}
              aria-valuetext={
                employees > tier2MaxSeats
                  ? pc.seats_valuetext_over.replace('{n}', String(tier2MaxSeats))
                  : employees === 1
                    ? pc.seats_valuetext_one
                    : pc.seats_valuetext.replace('{n}', String(employees))
              }
              style={{
                background: `linear-gradient(90deg,var(--seal) 0%,var(--seal) ${pct}%,rgba(247,249,252,.22) ${pct}%)`,
              }}
            />
          </div>
          {/* Tacche al loro posto sulla scala 1-151: prima erano distribuite a occhio. */}
          <div className="ends" aria-hidden="true">
            <span style={{ left: 0 }}>1</span>
            <span style={{ left: `${((tier1MaxSeats - 1) / 150) * 100}%` }}>{tier1MaxSeats} ({pc.discount_threshold})</span>
            <span style={{ right: 0 }}>{tier2MaxSeats}+</span>
          </div>
        </div>
        <div className="tiers">
          <div className={employees <= tier1MaxSeats ? 'on' : ''}>
            <b>1 &ndash; {tier1MaxSeats}</b>
            <span>{tier1Rate.formatted}{pc.per_month}</span>
          </div>
          <div className={employees > tier1MaxSeats && employees <= tier2MaxSeats ? 'on' : ''}>
            <b>{tier1MaxSeats + 1} &ndash; {tier2MaxSeats}</b>
            <span>{tier2Rate.formatted}{pc.per_month}</span>
          </div>
          <div className={employees > tier2MaxSeats ? 'on' : ''}>
            <b>{tier2MaxSeats}+</b>
            <span>{pc.enterprise_plan}</span>
          </div>
        </div>
      </div>

      <div className="box">
        <p className="k" style={{ color: 'var(--seal-testo)', marginBottom: '8px' }}>
          {dict.pricing.simulator.section_title}
        </p>
        {quote && !quote.isCustom ? (
          <div className="money">
            <p className="fit" aria-live="polite">
              {(employees === 1 ? pc.fit_title_one : pc.fit_title)
                .replace('{n}', String(employees))
                .replace('{plan}', planName)}
            </p>
            <div className="row">
              <span>{planName}</span>
              <b>{planPrice.annual.formatted}</b>
            </div>
            <div className="row">
              <span>
                {employees} &times; {(dict.pricing as any).compare.seats}
                <small className="rate">{employees <= tier1MaxSeats ? standardRateLabel : pc.mixed_rate}</small>
              </span>
              <b>{quote.display.totalAnnual.formatted}</b>
            </div>
            {includedEur > 0 && (
              <div className="row">
                <span>{pc.fit_promo}</span>
                <b>&minus;{convertEurToLocale(includedEur, locale).formatted}</b>
              </div>
            )}
            <div className="row tot">
              <span>{promo ? pc.fit_total_promo : pc.annual_total}</span>
              <b aria-live="polite">{totalAnnual.formatted}</b>
            </div>
            <p className="note">
              {pc.annual_billing_note}. {pc.secure_payment}
            </p>
            {/* Come sulle card: prima la prova, il carrello resta l'azione secondaria. */}
            <Link className="b1" href={localizePath('/trial', locale ?? DEFAULT_LOCALE)}>
              {dict.navbar.cta_start ?? dict.navbar.cta}
            </Link>
            <button className="b2 calc-add" onClick={handleAddToCart}>
              {dict.pricing.add_to_cart_btn}
            </button>
          </div>
        ) : (
          <div className="ent">
            <div className="row tot" style={{ paddingTop: '8px' }}>
              <span>{pc.enterprise_plan}</span>
              <b>{tier2MaxSeats}+</b>
            </div>
            <p className="note" style={{ marginTop: '18px' }}>
              {pc.enterprise_desc}
            </p>
            <Link className="b1" href={localizePath('/contact', locale ?? DEFAULT_LOCALE)}>
              {pc.request_quote}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
