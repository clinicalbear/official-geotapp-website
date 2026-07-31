'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/store/cart';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getLocaleFromPathname } from '@/lib/i18n/locale-routing';
import {
  EUR_PRICES,
  calculateTrackerQuote,
  getStandardRateMonthly,
  getVolumeRateMonthly,
  getCurrencyForLocale,
} from '@/lib/pricing';

// Direzione L: stessa logica di sempre (calculateTrackerQuote, useCart), vestito
// nel registro del mockup docs/redesign-sito-2026-07/esplorazione/prezzi.html
// (.calc a due colonne, .seats in Anton, .tiers, .box). Componente usato SOLO
// da questa pagina: className liberi qui, nessun'altra route lo importa.
export default function PricingCalculator() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dict = getDictionary(locale);
  const pc = dict.pricing.calculator;

  const [employees, setEmployees] = useState(10);

  const quote = calculateTrackerQuote(employees, locale);
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
    addItem({
      id: 'prod_TZxemMJkQrWryr',
      name: 'GeoTapp Timetracker License',
      price: quote.eur.totalAnnual,
      currency: getCurrencyForLocale(locale),
      displayAmount: quote.display.totalAnnual.amount,
      displayFormatted: quote.display.totalAnnual.formatted,
      period: 'year',
      quantity: 1,
      metadata: {
        details: `${employees} Collaborators Plan`,
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
        <p style={{ color: 'rgba(242,240,233,.72)', marginTop: '18px', maxWidth: '46ch' }}>
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
              aria-label={pc.active_users}
              style={{
                background: `linear-gradient(90deg,#8FC436 0%,#8FC436 ${pct}%,rgba(242,240,233,.22) ${pct}%)`,
              }}
            />
          </div>
          <div className="ends" style={{ marginTop: '14px' }}>
            <span>1</span>
            <span>{tier1MaxSeats} ({pc.discount_threshold})</span>
            <span>{tier2MaxSeats}</span>
            <span>{tier2MaxSeats}+</span>
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
        <p style={{ marginTop: '22px', fontSize: '13.5px', color: 'rgba(242,240,233,.55)' }}>
          {(dict.pricing as any).tracker_footnote}
        </p>
      </div>

      <div className="box">
        <p className="k" style={{ color: 'var(--seal)', marginBottom: '8px' }}>
          {dict.pricing.simulator.section_title}
        </p>
        {quote && !quote.isCustom ? (
          <div className="money">
            <div className="row">
              <span>{pc.cost_per_user}</span>
              <b>
                {quote.display.avgPerSeatMonthly.formatted}
                <small style={{ fontFamily: 'Inter', fontSize: '14px', fontWeight: 400 }}>
                  {pc.per_month}
                </small>
              </b>
            </div>
            <p className="rate">{employees <= tier1MaxSeats ? standardRateLabel : pc.mixed_rate}</p>
            <div className="row tot">
              <span>{pc.annual_total}</span>
              <b>{quote.display.totalAnnual.formatted}</b>
            </div>
            <p className="note">
              {pc.annual_billing_note}. {pc.secure_payment}
            </p>
            <button className="b1" onClick={handleAddToCart}>
              {pc.add_to_cart}
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
            <Link className="b1" href="/contact">
              {pc.request_quote}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
