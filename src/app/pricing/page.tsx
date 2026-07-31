'use client';

import './l-page.css';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
// Removed framer-motion import on this page: the only usage was a `whileInView`
// reveal on the price cards. That single intersection-observer driven animation
// pulled framer-motion into the pricing route bundle (~50KB gz) and contributed
// to mobile TBT ~430ms. Replaced with a pure CSS keyframe + animation-delay,
// visually identical, zero JS cost.
const PricingCalculator = dynamic(() => import('@/components/PricingCalculator'), { ssr: false });
import { useCart } from '@/store/cart';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  localizePath,
} from '@/lib/i18n/locale-routing';
import { trackEvent } from '@/lib/analytics';
import { useEffect, useState } from 'react';
import {
  EUR_PRICES,
  convertEurToLocale,
  getFlowPlanPrice,
  getCurrencyForLocale,
  type FlowPlanCode,
  type LocalizedAmount,
} from '@/lib/pricing';
import type { AppLocale } from '@/lib/i18n/config';

interface Product {
  id: string;
  name: string;
  /** Display string for the annual price (locale-aware, e.g. "$3,990.00") */
  price: string;
  /** Numeric annual price in EUR (authoritative for backend) */
  priceEur: number;
  /** Numeric annual price in display currency */
  priceDisplay: number;
  period: string;
  tagline: string;
  desc: string;
  features: string[];
  button: string;
  isBestValue?: boolean;
  isCalculator?: boolean;
  idMonthly?: string;
  monthlyPrice?: string;
  savings?: string;
  metadata?: Record<string, unknown>;
}

interface BaseProductConfig {
  id: string;
  /** Stable code used to derive the price dynamically per locale */
  priceKey: 'tracker-annual' | FlowPlanCode;
  period: string;
  button: string;
  isBestValue?: boolean;
  isCalculator?: boolean;
  idMonthly?: string;
  metadata?: Record<string, unknown>;
}

interface BaseCategoryConfig {
  id: string;
  color: string;
  bg: string;
  promoCode?: string;
  maxCoupons?: number;
  products: BaseProductConfig[];
}

const baseCategories: BaseCategoryConfig[] = [
  {
    id: 'app',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    products: [
      {
        id: 'prod_TZxemMJkQrWryr',
        priceKey: 'tracker-annual',
        period: '/year',
        button: 'bg-emerald-600 text-white hover:bg-emerald-700',
        isCalculator: true,
        metadata: {
          license_type: 'BUSINESS',
          product_key: 'GEOTAPP_APP',
        },
      },
    ],
  },
  {
    id: 'flow',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    products: [
      {
        id: process.env.NEXT_PUBLIC_STRIPE_PRICE_FLOW_ELITE_ANNUAL!,
        idMonthly: process.env.NEXT_PUBLIC_STRIPE_PRICE_FLOW_ELITE_MONTHLY!,
        priceKey: 'business',
        period: '/year',
        button: 'bg-blue-600 text-white hover:bg-blue-700',
        metadata: {
          license_type: 'BUSINESS',
          seats: 1000,
          product_key: 'GEOTAPP_FLOW',
        },
      },
      {
        id: process.env.NEXT_PUBLIC_STRIPE_PRICE_FLOW_PRO_ANNUAL!,
        idMonthly: process.env.NEXT_PUBLIC_STRIPE_PRICE_FLOW_PRO_MONTHLY!,
        priceKey: 'team',
        period: '/year',
        button: 'bg-blue-500 text-white hover:bg-blue-600',
        metadata: {
          license_type: 'TEAM',
          seats: 5,
          product_key: 'GEOTAPP_FLOW',
        },
      },
      {
        id: process.env.NEXT_PUBLIC_STRIPE_PRICE_FLOW_START_ANNUAL!,
        idMonthly: process.env.NEXT_PUBLIC_STRIPE_PRICE_FLOW_START_MONTHLY!,
        priceKey: 'solo',
        period: '/year',
        button: 'bg-blue-400 text-white hover:bg-blue-500',
        metadata: {
          license_type: 'SOLO',
          seats: 1,
          product_key: 'GEOTAPP_FLOW',
        },
      },
    ],
  },
];

// Build per-locale price strings for a product. Returns annual + monthly +
// savings, all formatted in the user's currency via the central pricing module.
function resolveProductPricing(
  priceKey: BaseProductConfig['priceKey'],
  locale: AppLocale,
): {
  annual: LocalizedAmount;
  monthly: LocalizedAmount | null;
  annualSavings: LocalizedAmount | null;
} {
  if (priceKey === 'tracker-annual') {
    const annual = convertEurToLocale(
      EUR_PRICES.tracker.tier1.perSeatAnnual,
      locale,
    );
    return { annual, monthly: null, annualSavings: null };
  }
  const plan = getFlowPlanPrice(priceKey, locale);
  return {
    annual: plan.annual,
    monthly: plan.monthly,
    annualSavings: plan.annualSavings,
  };
}

export default function Pricing() {
  const { addItem, toggleCart } = useCart();
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
  const dict = getDictionary(currentLocale);
  const getLink = (path: string) => localizePath(path, currentLocale);

  const [promoStats, setPromoStats] = useState<
    Record<string, { used: number; remaining: number; maxUses: number }>
  >({});
  const [isLoadingStats, setIsLoadingStats] = useState(true);

  useEffect(() => {
    const fetchPromoStats = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SAAS_URL || 'https://crm.geotapp.com'}/api/public/promo-stats`,
        );
        if (response.ok) {
          const data = await response.json();
          setPromoStats(data);
        }
      } catch (error) {
        console.error('Error fetching promo stats:', error);
      } finally {
        setIsLoadingStats(false);
      }
    };

    fetchPromoStats();
    const interval = setInterval(fetchPromoStats, 120000);
    return () => clearInterval(interval);
  }, []);

  // Merge base data with dictionary translations + locale-aware pricing.
  const categories = baseCategories
    .map((cat) => {
      // @ts-ignore, dictionary categories indexed by string code
      const catDict = dict.pricing?.categories?.[cat.id];
      if (!catDict) {
        console.error(`Missing category in dictionary: ${cat.id}`);
        return null;
      }
      return {
        ...cat,
        title: catDict.title,
        description: catDict.description,
        products: cat.products.map((prod, i) => {
          const dictProduct = catDict.products[i] ?? {};
          const pricing = resolveProductPricing(prod.priceKey, currentLocale);
          return {
            ...prod,
            ...dictProduct,
            price: pricing.annual.formatted,
            priceEur: pricing.annual.eurAmount,
            priceDisplay: pricing.annual.amount,
            monthlyPrice: pricing.monthly?.formatted,
            savings: pricing.annualSavings?.formatted,
          };
        }),
      };
    })
    .filter((cat): cat is NonNullable<typeof cat> => cat !== null);

  const cartCurrency = getCurrencyForLocale(currentLocale);

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.priceEur,
      currency: cartCurrency,
      displayAmount: product.priceDisplay,
      displayFormatted: product.price,
      period: product.period?.includes('year')
        ? 'year'
        : product.period?.includes('once')
          ? undefined
          : 'mo',
      quantity: 1,
      metadata: { details: product.desc, ...(product.metadata || {}) },
    });
    toggleCart();
  };

  const appCategory = categories.find((c) => c.id === 'app');
  const flowCategory = categories.find((c) => c.id === 'flow');
  const p = dict.pricing as any;

  // Il titolo del trial ("14 giorni gratis. Nessuna carta.") si spezza in due
  // righe come nel mockup solo dove il testo del dict ha davvero due frasi
  // (non tutte le lingue lo scrivono cosi', es. nl e' una frase unica).
  const trialTitleParts = dict.trial.page_title.split('. ');
  const trialTitleFirst = trialTitleParts[0];
  const trialTitleRest = trialTitleParts.slice(1).join('. ');

  // Un'unica card di prodotto, sia per i tre piani Flow che per TimeTracker
  // (che al posto dell'aggiunta al carrello rimanda al calcolatore in fondo
  // pagina): stessa logica di prezzo/promo di sempre, vestito .plan del mockup.
  const renderPlanCard = (
    category: NonNullable<typeof categories[number]>,
    product: any,
    delayClass: string,
  ) => {
    const hasMonthly = Boolean((product as Product).monthlyPrice);
    const isOnce = product.period === '/once';
    const annualPrice = product.price;
    const monthlyPrice = (product as Product).monthlyPrice;
    const periodLabel = isOnce
      ? 'one-time (lifetime)'
      : hasMonthly
        ? (p.per_year ?? '/year')
        : product.period;
    const savings = (product as Product).savings;

    return (
      <div key={product.name} className={`plan r-s ${delayClass}`}>
        {(product as any).isBestValue && (
          <span className="absolute -top-3 left-6 bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
            Best Value
          </span>
        )}

        {category.id === 'app' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <Image
              src="/logoTT.webp"
              alt="GeoTapp TimeTracker"
              width={260}
              height={100}
              style={{ height: '20px', width: 'auto' }}
            />
            <span className="sr-only">{category.title}</span>
          </div>
        )}
        {category.id === 'app' && (
          <p className="k" style={{ fontSize: '11px', color: '#78836F', marginBottom: '10px' }}>
            {category.description}
          </p>
        )}

        {category.promoCode && product.period !== '/once' && (
          <div className="mb-3 p-3 bg-red-50 border border-red-100 rounded-lg">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-bold uppercase text-red-500 tracking-wider">
                Promo Code
              </span>
              {isLoadingStats ? (
                <span className="text-[10px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">
                  Loading...
                </span>
              ) : promoStats[category.promoCode] ? (
                <span className="text-[10px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">
                  {promoStats[category.promoCode].remaining}/
                  {promoStats[category.promoCode].maxUses} Left
                </span>
              ) : (
                <span className="text-[10px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">
                  {category.maxCoupons}/200 Left
                </span>
              )}
            </div>
            <div className="text-sm font-mono font-bold text-red-600 flex items-center gap-2">
              <span
                className="border-2 border-dashed border-red-200 px-2 py-0.5 rounded bg-white select-all cursor-pointer"
                title="Copia"
              >
                {category.promoCode}
              </span>
              <span className="text-[10px] text-red-400 font-sans font-normal">
                -25/30% OFF
              </span>
            </div>
          </div>
        )}

        <p className="tag k">{product.tagline}</p>
        <h3>{product.name}</h3>

        <div style={{ margin: '4px 0 20px' }}>
          <span className="big" style={{ fontSize: '30px' }}>{annualPrice}</span>{' '}
          <span className="k" style={{ fontSize: '10.5px' }}>{periodLabel}</span>
          {!isOnce && (
            <div className="k" style={{ fontSize: '10px', color: 'var(--seal)', marginTop: '6px' }}>
              {dict.pricing.intro_label}
            </div>
          )}
          {hasMonthly && monthlyPrice && (
            <div style={{ fontSize: '13.5px', marginTop: '8px' }}>
              {p.or_monthly ?? 'or'}{' '}
              <strong>{monthlyPrice}{p.per_month_short ?? '/month'}</strong>
              {savings && (
                <span style={{ display: 'block', marginTop: '4px', color: 'var(--seal)' }}>
                  {p.annual_savings ?? 'Annual savings:'} {savings}
                </span>
              )}
            </div>
          )}
          {isOnce && !hasMonthly && (
            <div style={{ fontSize: '13px', opacity: 0.7, marginTop: '6px' }}>
              {p.no_monthly_option ?? 'No monthly option'}
            </div>
          )}
        </div>

        <p className="desc">{product.desc}</p>

        <ul>
          {product.features.map((f: string) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        {(product as any).isCalculator ? (
          <Link className="b1" href="#calculator">
            {product.button}
          </Link>
        ) : (
          <button className="b1" onClick={() => handleAddToCart(product)}>
            {(dict.pricing as any).add_btn ?? 'Add'}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="lp-l lp-prezzi">
      <section className="ph">
        <div className="crumb">
          <div className="w">
            <Link href={getLink('/')}>Home</Link> / {dict.navbar.pricing}
          </div>
        </div>
        <div className="w">
          <p className="kk k r">
            <s></s>
            {dict.pricing.badge}
          </p>
          <h1 className="r">
            <span dangerouslySetInnerHTML={{ __html: dict.pricing.title }} />
            <br />
            <em>{p.title_gradient ?? 'Scale Your Business.'}</em>
          </h1>
          <p className="lede r d1">{dict.pricing.subtitle}</p>
          <div className="acts r d2">
            <Link
              className="b1"
              href={getLink('/trial')}
              onClick={() => trackEvent('trial_click', { cta_source: 'pricing_hero', cta_locale: currentLocale })}
            >
              {dict.navbar.cta_start ?? dict.navbar.cta}
            </Link>
            <Link className="b2" href={getLink('/contact')}>
              {dict.kairos.quick_contact}
            </Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="w">
          {flowCategory && (
            <p className="kk k r">
              {flowCategory.title} &middot; {flowCategory.description}
            </p>
          )}
          <div className="plans">
            {appCategory?.products.map((product) => renderPlanCard(appCategory!, product, 'd1'))}
            {flowCategory?.products.map((product, i) => renderPlanCard(flowCategory!, product, `d${i + 2}`))}
          </div>
          {(dict.pricing as any).tracker_footnote && (
            <p className="vat r" style={{ marginTop: '14px' }}>{(dict.pricing as any).tracker_footnote}</p>
          )}
          <p className="vat r">{dict.pricing.vat_note}</p>
          {(dict as any).roi?.pricing_link && (
            <p className="vat" style={{ marginTop: '10px' }}>
              <Link href={`/${currentLocale}/roi-calculator/`} className="b2">
                {(dict as any).roi.pricing_link} &rarr;
              </Link>
            </p>
          )}
        </div>
      </section>

      <section className="sec ink">
        <div className="w">
          <PricingCalculator />
        </div>
      </section>

      <section className="end">
        <img className="bg" src="/bg2.webp" alt="" loading="lazy" />
        <div className="ov"></div>
        <div className="w">
          <h2 className="r">
            {trialTitleFirst}{trialTitleRest ? '.' : ''}
            {trialTitleRest && (
              <>
                <br />
                <i>{trialTitleRest}</i>
              </>
            )}
          </h2>
          <p className="r d1">{dict.trial.page_subtitle}</p>
          <div className="acts r d2">
            <Link
              className="b1"
              href={getLink('/trial')}
              onClick={() => trackEvent('trial_click', { cta_source: 'pricing_end', cta_locale: currentLocale })}
            >
              {dict.navbar.cta_start ?? dict.navbar.cta}
            </Link>
            <Link className="b2" href={getLink('/contact')}>
              {dict.kairos.quick_contact}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
