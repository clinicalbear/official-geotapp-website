'use client';

import { Check, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import GeoBadge from '@/components/GeoBadge';
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
} from '@/lib/i18n/locale-routing';
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

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-background text-slate-900">
      <div className="container mx-auto max-w-4xl text-center mb-20">
        <div>
          <GeoBadge className="mb-6">{dict.pricing.badge}</GeoBadge>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-8 leading-tight">
            <span
              dangerouslySetInnerHTML={{ __html: dict.pricing.title }}
            ></span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {(dict.pricing as any).title_gradient ?? 'Scale Your Business.'}
            </span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed font-light max-w-2xl mx-auto">
            {dict.pricing.subtitle}
          </p>
        </div>
      </div>


      {categories.map((category) => (
        <section
          key={category.id}
          className="container mx-auto max-w-7xl mb-32"
        >
          <div className="flex items-center gap-4 mb-12 border-b border-slate-100 pb-4">
            <h2
              className={`text-3xl font-display font-bold ${category.color} flex items-center`}
            >
              {category.id === 'flow' && (
                <>
                  <Image
                    src="/logoFlow.webp"
                    alt="GeoTapp Flow"
                    width={200}
                    height={100}
                    className="h-10 w-auto"
                  />
                  <span className="sr-only">{category.title}</span>
                </>
              )}
              {category.id === 'app' && (
                <>
                  <Image
                    src="/logoTT.webp"
                    alt="GeoTapp TimeTracker"
                    width={260}
                    height={100}
                    className="h-auto w-[15.6rem]"
                  />
                  <span className="sr-only">{category.title}</span>
                </>
              )}
              {category.id !== 'flow' &&
                category.id !== 'app' &&
                category.title}
            </h2>
            <span className="text-slate-400 text-sm font-light hidden md:inline-block border-l border-slate-200 pl-4">
              {category.description}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((product, i) => (
              <div
                key={product.name}
                style={{ animationDelay: `${i * 0.1}s` }}
                className={`pricing-card-reveal relative p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col h-full ${category.id === 'app' ? 'lg:col-span-1' : ''}`}
              >
                {(product as any).isBestValue && (
                  <span className="absolute -top-3 left-6 bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                    Best Value
                  </span>
                )}

                <div className="mb-4">
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
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    {product.tagline}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    {product.name}
                  </h3>
                </div>

                <div className="mb-6">
                  {(() => {
                    const hasMonthly = Boolean(
                      (product as Product).monthlyPrice,
                    );
                    const isOnce = product.period === '/once';
                    const annualPrice = product.price;
                    const monthlyPrice = (product as Product).monthlyPrice;
                    const p = dict.pricing as any;
                    const periodLabel = isOnce
                      ? 'one-time (lifetime)'
                      : hasMonthly
                        ? (p.per_year ?? '/year')
                        : product.period;
                    const savings = (product as Product).savings;

                    return (
                      <>
                        <div className="flex items-baseline gap-2 mb-1">
                          <span
                            className={`text-slate-900 ${hasMonthly ? 'text-4xl' : 'text-3xl'} font-bold`}
                          >
                            {annualPrice}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">
                            {periodLabel}
                          </span>
                        </div>
                        {!isOnce && (
                          <div className="mb-2">
                            <span className="inline-block text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700">
                              {dict.pricing.intro_label}
                            </span>
                          </div>
                        )}
                        {hasMonthly && monthlyPrice && (
                          <div className="space-y-1">
                            <div className="text-sm text-slate-600">
                              {p.or_monthly ?? 'or'}{' '}
                              <span className="font-semibold text-slate-700">
                                {monthlyPrice}{p.per_month_short ?? '/month'}
                              </span>
                            </div>
                            {savings && (
                              <div className="inline-flex items-center gap-2 px-2 py-1 bg-green-50 border border-green-200 rounded-full">
                                <Heart className="h-3 w-3 text-green-600" />
                                <span className="text-[10px] font-bold text-green-700 uppercase tracking-wider">
                                  {p.annual_savings ?? 'Annual savings:'} {savings}
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                        {isOnce && !hasMonthly && (
                          <div className="text-xs text-slate-500">
                            {p.no_monthly_option ?? 'No monthly option'}
                          </div>
                        )}
                      </>
                    );
                  })()}
                </div>

                <p className="text-sm text-slate-600 mb-6 flex-1 leading-relaxed border-b border-slate-100 pb-6">
                  {product.desc}
                </p>

                <ul className="mb-6 space-y-2">
                  {product.features.map((f: string) => (
                    <li
                      key={f}
                      className="text-xs text-slate-500 flex items-center gap-2"
                    >
                      <Check size={12} className={category.color} /> {f}
                    </li>
                  ))}
                </ul>

                {(product as any).isCalculator ? (
                  <div className="mt-auto">
                    <Link
                      href="#calculator"
                      className={`block w-full py-3 rounded-lg text-center font-bold text-sm uppercase tracking-wide transition-all shadow-md hover:-translate-y-1 ${product.button}`}
                    >
                      {product.button}
                    </Link>
                  </div>
                ) : (
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`w-full py-3 rounded-lg text-center font-bold text-sm uppercase tracking-wide transition-all shadow-md hover:-translate-y-1 ${product.button}`}
                  >
                    {(dict.pricing as any).add_btn ?? 'Add'}
                  </button>
                )}
              </div>
            ))}
            {category.id === 'app' && (
              <div className="col-span-1 md:col-span-1 lg:col-span-2 h-full">
                <PricingCalculator />
              </div>
            )}
          </div>

          {category.id === 'flow' && (dict.pricing as any).tracker_footnote && (
            <p className="text-xs text-slate-400 mt-4 leading-relaxed">
              {(dict.pricing as any).tracker_footnote}
            </p>
          )}
        </section>
      ))}

      <div className="text-center mt-20 border-t border-slate-100 pt-12">
        <p className="text-slate-400 text-sm">{dict.pricing.vat_note}</p>
        {(dict as any).roi?.pricing_link && (
          <p className="mt-4 text-sm">
            <Link
              href={`/${currentLocale}/roi-calculator/`}
              className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80"
            >
              {(dict as any).roi.pricing_link} →
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
