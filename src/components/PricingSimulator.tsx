'use client';

import PolicyConsentField from '@/components/PolicyConsentField';
import { buildPolicyAcceptancePayload } from '@/lib/policyAcceptance';
import { useMemo, useState, useRef } from 'react';
import {
  PRICING_TIERS,
  PricingTier,
  calculateTrackerQuote,
  convertEurToLocale,
  getCurrencyForLocale,
} from '@/lib/pricing';
import gsap from 'gsap';
import { FiCheck } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getLocaleFromPathname } from '@/lib/i18n/locale-routing';

export default function PricingSimulator() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const ps = getDictionary(locale).pricing.simulator;

  const [seatCount, setSeatCount] = useState(1);
  const [companyName, setCompanyName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyRead, setPrivacyRead] = useState(false);

  const thumbRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const minSeats = 1;
  const maxSeats = 151;

  const quote = useMemo(() => {
    return calculateTrackerQuote(seatCount, locale);
  }, [seatCount, locale]);

  const currentTier = useMemo(() => {
    return PRICING_TIERS.find(
      (t) =>
        seatCount >= t.minSeats &&
        (t.maxSeats === null || seatCount <= t.maxSeats),
    );
  }, [seatCount]);

  const sliderPercent = Math.min(
    100,
    ((seatCount - minSeats) / (150 - minSeats)) * 100,
  );

  const dynamicScale = 1 + (Math.min(seatCount, 150) / 150) * 0.8;

  const lastSeatCount = useRef(seatCount);

  useMemo(() => {
    const delta = seatCount - lastSeatCount.current;
    const marker = thumbRef.current?.querySelector(
      '.ui-range__marker-container',
    );

    if (marker && delta !== 0) {
      const rotation = Math.max(-45, Math.min(45, delta * -5));

      gsap.to(marker, {
        rotation: rotation,
        scale: dynamicScale,
        opacity: 1,
        y: -5,
        duration: 0.1,
        overwrite: true,
      });

      gsap.to(marker, {
        rotation: 0,
        scale: dynamicScale,
        duration: 0.4,
        ease: 'elastic.out(1, 0.5)',
        delay: 0.1,
      });
    }

    lastSeatCount.current = seatCount;
  }, [seatCount, dynamicScale]);

  const handleInputDown = () => {
    const marker = thumbRef.current?.querySelector(
      '.ui-range__marker-container',
    );
    if (marker)
      gsap.to(marker, {
        scale: dynamicScale,
        opacity: 1,
        y: -5,
        duration: 0.2,
        overwrite: true,
      });
    if (thumbRef.current)
      gsap.to(thumbRef.current, { scale: 1.1, duration: 0.1 });
  };

  const handleInputUp = () => {
    const marker = thumbRef.current?.querySelector(
      '.ui-range__marker-container',
    );
    if (marker) gsap.to(marker, { scale: 0, opacity: 0, y: 10, duration: 0.2 });
    if (thumbRef.current)
      gsap.to(thumbRef.current, { scale: 1, duration: 0.1 });
  };

  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      setEmailError('');
      return false;
    }
    if (!re.test(email)) {
      setEmailError(ps.email_error_format);
      return false;
    }
    if (email.endsWith('@example.com') || email.endsWith('@test.com')) {
      setEmailError(ps.email_error_placeholder);
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setContactEmail(val);
    if (emailError) validateEmail(val);
  };

  const handleEmailBlur = () => {
    validateEmail(contactEmail);
  };

  const handleCheckout = async () => {
    if (!validateEmail(contactEmail)) return;
    if (!quote) return;
    if (!termsAccepted || !privacyRead) {
      setStatus(ps.terms_alert);
      return;
    }

    setLoading(true);
    setStatus(null);
    setIsSuccess(false);
    try {
      if (quote.isCustom) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SAAS_URL || 'https://crm.geotapp.com'}/api/v1/public/contact`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: companyName,
              email: contactEmail,
              company: companyName,
              message: `Enterprise request for ${seatCount} employees.`,
            }),
          },
        );
        if (!res.ok) throw new Error(ps.error_request);
        setIsSuccess(true);
        setStatus(ps.success_sent);
        return;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SAAS_URL || 'https://crm.geotapp.com'}/api/v1/checkout`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            items: [
              {
                name: 'GeoTapp Timetracker License',
                price: quote.eur.avgPerSeatAnnual,
                currency: getCurrencyForLocale(locale),
                displayAmount: quote.display.avgPerSeatAnnual.amount,
                displayFormatted: quote.display.avgPerSeatAnnual.formatted,
                period: 'year',
                quantity: seatCount,
                stripePriceId: 'prod_TZxemMJkQrWryr',
                productKey: 'GEOTAPP_APP',
                licenseType: 'BUSINESS',
                metadata: {
                  details: `${seatCount} users (annual)`,
                  product_key: 'GEOTAPP_APP',
                },
              },
            ],
            email: contactEmail,
            displayCurrency: getCurrencyForLocale(locale),
            ...buildPolicyAcceptancePayload(),
          }),
        },
      );
      const data = await res.json();
      if (data.checkout_url || data.url) {
        window.location.href = data.checkout_url || data.url;
      } else {
        throw new Error(
          data.message || data.error || (ps.error_request ?? 'Unknown server error'),
        );
      }
    } catch (e: any) {
      setStatus(e.message);
    } finally {
      setLoading(false);
    }
  };

  // Per-tier marketing card price (uses locale's currency, EUR base × FX × buffer)
  const tierMonthlyPrice = (tier: PricingTier) => {
    if (tier.priceAnnualPerSeat === 0) return null;
    return convertEurToLocale(tier.priceAnnualPerSeat / 12, locale);
  };

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-4 select-none">
      {/* PRICING CARDS */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {PRICING_TIERS.map((tier) => {
          const isActive = currentTier?.code === tier.code;
          const tierPrice = tierMonthlyPrice(tier);
          return (
            <div
              key={tier.code}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                isActive
                  ? 'border-geotapp-primary bg-geotapp-50 shadow-xl scale-105'
                  : 'border-gray-200 bg-white hover:border-geotapp-primary/50'
              }`}
            >
              {isActive && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-geotapp-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {ps.selected_badge}
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-display">
                {tier.name}
              </h3>
              <p className="text-gray-500 mb-6 text-sm h-10">
                {tier.description}
              </p>

              <div className="mb-6">
                {tier.maxSeats === null || !tierPrice ? (
                  <span className="text-4xl font-bold text-gray-900">
                    Custom
                  </span>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">
                      {tierPrice.formatted}
                    </span>
                    <span className="text-gray-500">{ps.per_month}</span>
                  </div>
                )}
                {tier.maxSeats !== null && (
                  <p className="text-xs text-gray-400 mt-1">
                    {ps.per_user_annual}
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <FiCheck className="text-geotapp-primary flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* SIMULATOR SECTION */}
      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center font-display">
          {ps.section_title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-6 font-display">
              {ps.employees_label}{' '}
              <span className="text-geotapp-primary font-bold text-lg ml-2">
                {seatCount > 150 ? '150+' : seatCount}
              </span>
            </label>

            <div className="mb-8 mt-4 relative" style={{ height: '60px' }}>
              <div
                className="absolute top-4 left-0 right-0 pointer-events-none"
                style={{ zIndex: 1 }}
              >
                <div className="h-6 w-full bg-gray-200 rounded-full relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full rounded-full"
                    style={{
                      width: `${sliderPercent}%`,
                      background:
                        'linear-gradient(90deg, #005cbb 0%, #8FC436 100%)',
                    }}
                  />
                </div>
                <div
                  ref={thumbRef}
                  className="absolute top-0 w-6 h-6 flex items-center justify-center"
                  style={{
                    left: `calc(${sliderPercent}% - 12px)`,
                  }}
                >
                  <div className="w-6 h-6 bg-white border-2 border-geotapp-primary rounded-full shadow-md" />
                  <div
                    className="ui-range__marker-container absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 pointer-events-none"
                    style={{
                      opacity: 0,
                      transform: 'translate(-50%, 10px) scale(0)',
                    }}
                  >
                    <div className="ui-range__marker">
                      <span className="ui-range__marker-text text-sm font-bold text-white">
                        {seatCount > 150 ? '150+' : seatCount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <input
                type="range"
                min={minSeats}
                max={maxSeats}
                step={1}
                value={seatCount}
                onChange={(e) => setSeatCount(Number(e.target.value))}
                onMouseDown={handleInputDown}
                onMouseUp={handleInputUp}
                onTouchStart={handleInputDown}
                onTouchEnd={handleInputUp}
                className="absolute top-3 left-0 w-full cursor-pointer"
                style={{
                  zIndex: 10,
                  height: '30px',
                  opacity: 0,
                }}
              />
            </div>

            <div className="flex justify-between items-center mt-6">
              <span className="text-xs text-gray-400">{ps.one_employee}</span>
              <span className="text-xs text-gray-400">{ps.many_employees}</span>
            </div>
          </div>

          <div className="bg-geotapp-50 rounded-xl p-6 border border-geotapp-100 flex flex-col justify-center">
            {quote && !quote.isCustom ? (
              <>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">{ps.price_per_user}</span>
                  <span className="text-lg font-bold text-gray-900">
                    {quote.display.avgPerSeatMonthly.formatted}
                    <span className="text-xs font-normal text-gray-500">
                      /mo
                    </span>
                  </span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-geotapp-200 mt-4">
                  <span className="text-gray-800 font-medium">
                    {ps.annual_total}
                  </span>
                  <span className="text-4xl font-bold text-geotapp-primary font-display">
                    {quote.display.totalAnnual.formatted}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-right">{ps.plus_vat}</p>
              </>
            ) : (
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {ps.enterprise_plan}
                </h3>
                <p className="text-gray-600 mb-4">
                  {ps.enterprise_desc}
                </p>
                <p className="text-geotapp-primary font-bold">
                  {ps.enterprise_cta}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder={ps.company_placeholder}
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-geotapp-primary outline-none transition"
            />
            <div className="relative">
              <input
                type="email"
                placeholder={ps.email_placeholder}
                value={contactEmail}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                className={`w-full p-3 border rounded-lg focus:ring-2 outline-none transition ${
                  emailError
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:ring-geotapp-primary'
                }`}
              />
              {emailError && (
                <p className="absolute -bottom-5 left-0 text-xs text-red-500 font-medium">
                  {emailError}
                </p>
              )}
            </div>
          </div>

          {status && (
            <div
              className={`p-3 rounded-lg text-center ${isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
            >
              {status}
            </div>
          )}

          <PolicyConsentField
            termsAccepted={termsAccepted}
            privacyRead={privacyRead}
            onTermsAcceptedChange={setTermsAccepted}
            onPrivacyReadChange={setPrivacyRead}
          />

          <button
            onClick={handleCheckout}
            disabled={
              loading ||
              !companyName ||
              !contactEmail ||
              !!emailError ||
              !termsAccepted ||
              !privacyRead
            }
            className="w-full py-4 bg-geotapp-primary text-white font-bold rounded-lg shadow-lg hover:bg-geotapp-600 transition disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
          >
            {loading
              ? ps.processing
              : quote?.isCustom
                ? ps.request_info
                : ps.buy_now}
          </button>

          <p className="text-center text-xs text-gray-400 mt-4">
            {ps.payment_note}
          </p>
        </div>
      </div>
    </div>
  );
}
