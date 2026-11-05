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
// ssr attivo: i prezzi per posto TimeTracker devono stare nell'HTML servito,
// non solo dopo l'hydration (crawler e motori AI leggono senza JavaScript).
const PricingCalculator = dynamic(() => import('@/components/PricingCalculator'), { ssr: true });
import { useCart } from '@/store/cart';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  localizePath,
} from '@/lib/i18n/locale-routing';
import { trackEvent } from '@/lib/analytics';
import { promoFine2026Attiva } from '@/lib/promo-fine-2026';
import { useEffect, useState, type ReactNode } from 'react';
import {
  EUR_PRICES,
  convertEurToLocale,
  getFlowPlanPrice,
  getStandardRateMonthly,
  getCurrencyForLocale,
  type FlowPlanCode,
  type LocalizedAmount,
} from '@/lib/pricing';
import type { AppLocale } from '@/lib/i18n/config';
import { POSTAZIONI_PIANO } from '@/lib/piano-per-operatori';

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
  isBestValue?: boolean;
  isCalculator?: boolean;
  idMonthly?: string;
  metadata?: Record<string, unknown>;
}

interface BaseCategoryConfig {
  id: string;
  products: BaseProductConfig[];
}

const baseCategories: BaseCategoryConfig[] = [
  {
    id: 'app',
    products: [
      {
        id: 'prod_TZxemMJkQrWryr',
        priceKey: 'tracker-annual',
        period: '/year',
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
    products: [
      {
        id: process.env.NEXT_PUBLIC_STRIPE_PRICE_FLOW_ELITE_ANNUAL!,
        idMonthly: process.env.NEXT_PUBLIC_STRIPE_PRICE_FLOW_ELITE_MONTHLY!,
        priceKey: 'business',
        period: '/year',
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
        isBestValue: true,
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

/** Limiti per piano: geotapp-flow subscription_tier.dart e geotapp-crm plan-limits.ts. null = senza limiti.
 *  Le postazioni stanno in lib/piano-per-operatori.ts, le usa anche il calcolatore. */
const PLAN_LIMITS = {
  solo: { users: 1, clients: 50, automations: 3, api: false, reports: 'reports_basic', support: 'support_standard' },
  team: { users: 5, clients: null, automations: 20, api: true, reports: 'reports_operational', support: 'support_standard' },
  business: { users: null, clients: null, automations: null, api: true, reports: 'reports_advanced', support: 'support_priority' },
} as const;

export default function PricingContent({ beforeEnd, promoIniziale = false }: { beforeEnd?: ReactNode; promoIniziale?: boolean }) {
  const { addItem, toggleCart } = useCart();
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
  const dict = getDictionary(currentLocale);
  const getLink = (path: string) => localizePath(path, currentLocale);

  // A18: chi guarda il listino e' il passo che mancava fra l'arrivo e il modulo.
  // Senza, non si sa se chi non si iscrive il prezzo l'ha visto o no.
  useEffect(() => {
    trackEvent('pricing_view', { locale: currentLocale });
  }, [currentLocale]);

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
  // Promo di fine 2026. Si accende solo nel browser: la pagina e' generata in
  // anticipo, e una data decisa al momento della build resterebbe accesa oltre
  // la scadenza. Il 19/12 il badge sparisce senza ripubblicare.
  const [promoOn, setPromoOn] = useState(promoIniziale);
  useEffect(() => {
    setPromoOn(promoFine2026Attiva());
  }, []);
  const promoT = promoOn ? (p.promo_fine_2026 as
    | { badge: string; banner_short: string; footnote: string }
    | undefined) : undefined;

  // Il titolo del trial ("14 giorni gratis. Nessuna carta.") si spezza in due
  // righe come nel mockup solo dove il testo del dict ha davvero due frasi
  // (non tutte le lingue lo scrivono cosi', es. nl e' una frase unica).
  const trialTitleParts = dict.trial.page_title.split('. ');
  const trialTitleFirst = trialTitleParts[0];
  const trialTitleRest = trialTitleParts.slice(1).join('. ');

  // Le stesse righe, nello stesso ordine, su tutti e tre i piani Flow: e' cio' che
  // permette di confrontarli. L'elenco di voci diverse per ogni piano obbligava a
  // indovinare cosa mancasse a quale.
  const c = p.compare as Record<string, string>;
  const unlimited = (v: number | null) => (v === null ? c.unlimited : String(v));
  const seatsCap = (key: keyof typeof PLAN_LIMITS) => {
    const cap = promoT ? POSTAZIONI_PIANO[key].tettoPromo : POSTAZIONI_PIANO[key].tetto;
    return cap === null ? c.unlimited : c.seats_up_to.replace('{n}', String(cap));
  };
  const seatsIncluded = (key: keyof typeof PLAN_LIMITS) => {
    if (!promoT) return undefined;
    const n = POSTAZIONI_PIANO[key].compresePromo;
    return n === 1 ? c.seats_included_one : c.seats_included_many.replace('{n}', String(n));
  };

  // Il calcolatore mette nel carrello anche il piano che ha proposto: uno solo alla volta.
  const aggiungiPianoAlCarrello = (chiave: 'solo' | 'team' | 'business') => {
    const prodotto = categories
      .flatMap((c: any) => c?.products ?? [])
      .find((p: any) => p.priceKey === chiave);
    if (!prodotto) return;
    useCart.getState().items
      .filter((i) => i.metadata?.product_key === 'GEOTAPP_FLOW')
      .forEach((i) => useCart.getState().removeItem(i.id));
    addItem({
      id: prodotto.id,
      name: prodotto.name,
      price: prodotto.priceEur,
      currency: cartCurrency,
      displayAmount: prodotto.priceDisplay,
      displayFormatted: prodotto.price,
      period: 'year',
      quantity: 1,
      metadata: { details: prodotto.desc, ...(prodotto.metadata || {}) },
    });
  };

  const renderPlanCard = (product: any, delayClass: string) => {
    const key = product.priceKey as keyof typeof PLAN_LIMITS;
    const l = PLAN_LIMITS[key];
    const rows: Array<[string, string, string?]> = [
      [c.users, unlimited(l.users)],
      [c.seats, seatsCap(key), seatsIncluded(key)],
      [c.clients, unlimited(l.clients)],
      [c.automations, unlimited(l.automations)],
      [c.api, l.api ? c.yes : c.no],
      [c.reports, c[l.reports]],
      [c.support, c[l.support]],
    ];
    return (
      <div key={product.name} className={`plan r-s ${delayClass}${product.isBestValue ? ' plan-rec' : ''}`}>
        {product.isBestValue && <span className="plan-rec-badge">{p.recommended as string}</span>}
        {promoT && <span className="plan-promo">{promoT.badge}</span>}

        <p className="tag k">{String(product.tagline).replace(/\.$/, '')}</p>
        <h3>{product.name}</h3>

        <div className="plan-price">
          <span className="big">{product.price}</span>{' '}
          <span className="plan-unit">{p.per_year ?? '/year'}</span>
          {p.price_excl_vat && <span className="plan-unit plan-vat">{p.price_excl_vat}</span>}
          {product.monthlyPrice && (
            <div className="plan-monthly">
              {p.or_monthly ?? 'or'} <strong>{product.monthlyPrice}{p.per_month_short ?? '/month'}</strong>
              {product.savings && (
                <span className="plan-save">{p.annual_savings ?? 'Annual savings:'} {product.savings}</span>
              )}
            </div>
          )}
        </div>

        <p className="desc">{product.desc}</p>

        <dl className="plan-rows">
          {rows.map(([label, value, note]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>
                {value}
                {note && <small>{note}</small>}
              </dd>
            </div>
          ))}
        </dl>

        {/* Trial-first: l'azione primaria della card e' provare, non comprare a
            freddo. Il carrello resta come azione secondaria. */}
        <Link
          className="b1"
          href={getLink('/trial')}
          onClick={() => trackEvent('trial_click', { cta_source: `pricing_card_${key}`, cta_locale: currentLocale })}
        >
          {dict.navbar.cta_start ?? dict.navbar.cta}
        </Link>
        <button className="b2 plan-add" onClick={() => handleAddToCart(product)}>
          {p.add_to_cart_btn}
        </button>
      </div>
    );
  };

  const flowFrom = getFlowPlanPrice('solo', currentLocale).monthly?.formatted ?? '';
  const seatMonthly = getStandardRateMonthly(currentLocale).formatted;
  const tracker = appCategory?.products[0] as any;
  const footnote = String(promoT?.footnote ?? p.tracker_footnote ?? '').replace(/^\*\s*/, '');

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
          <p className="hero-price r d1">
            {String(p.hero_price).replace('{flow}', flowFrom).replace('{seat}', seatMonthly)}
          </p>
          {promoT && <p className="promo-banner r d1">{promoT.banner_short}</p>}
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
            <h2 className="plans-title kk k r">
              {flowCategory.title} &middot; {flowCategory.description}
            </h2>
          )}
          <div className="plans">
            {/* Ordine di lettura: dal piano d'ingresso al piano grande. Il
                dizionario mappa le card per indice, quindi il riordino avviene
                qui al render, mai dentro baseCategories. */}
            {(['solo', 'team', 'business'] as const)
              .map((key) => flowCategory?.products.find((prod) => (prod as any).priceKey === key))
              .filter((prod): prod is NonNullable<typeof prod> => Boolean(prod))
              .map((product, i) => renderPlanCard(product, `d${i + 1}`))}
          </div>
          <p className="plans-trial r">{dict.trial.page_title}</p>

          {/* TimeTracker non e' un quarto piano: si aggiunge a uno dei tre. */}
          {tracker && (
            <div className="addon r">
              <div className="addon-head">
                <Image src="/logoTT.webp" alt="GeoTapp TimeTracker" width={260} height={100} className="addon-logo" />
                <h3>{p.addon_title}</h3>
                <p className="desc">{tracker.desc}</p>
              </div>
              <ul className="addon-list">
                {tracker.features.map((f: string) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="addon-price">
                <p className="tag k">{tracker.tagline}</p>
                <span className="big">{seatMonthly}</span>{' '}
                <span className="plan-unit">{p.per_month_short ?? '/month'}</span>
                <span className="plan-unit plan-vat">{tracker.price}{p.per_year ?? '/year'} &middot; {p.price_excl_vat}</span>
                <Link className="b1" href="#calculator">{tracker.button}</Link>
              </div>
            </div>
          )}

          {footnote && <p className="vat r">{footnote}</p>}
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
          <PricingCalculator promoIniziale={promoIniziale} aggiungiPiano={aggiungiPianoAlCarrello} />
        </div>
      </section>

      <section className="sec proof">
        <div className="w proof-grid">
          <div>
            <h2 className="r">{p.proof_title}</h2>
            <p className="proof-body r d1">{p.proof_body}</p>
            <Link className="b2 r d2" href={getLink('/products/geotapp-verifier')}>
              {p.proof_link}
            </Link>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="proof-img r d1" src="/verifier-report.webp" alt={p.proof_title} width={1240} height={2909} loading="lazy" />
        </div>
      </section>

      {beforeEnd}

      <section className="end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/bg2.webp" alt="" aria-hidden="true" loading="lazy" />
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
