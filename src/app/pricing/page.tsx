'use client';

import { Check, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PricingCalculator from '@/components/PricingCalculator';
import { useCart } from '@/store/cart';
import { usePathname } from 'next/navigation';
import itDict from '@/dictionaries/it.json';
import enDict from '@/dictionaries/en.json';
import { useEffect, useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  desc: string;
  features: string[];
  button: string;
  isBestValue?: boolean;
  isCalculator?: boolean;
}

// Base configuration for products (Ids, Prices, Colors, Logic)
const baseCategories = [
  {
    id: 'app',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    products: [
      {
        id: 'prod_TZxemMJkQrWryr',
        price: '€24',
        period: '/year',
        button: 'bg-emerald-600 text-white hover:bg-emerald-700',
        isCalculator: true
      }
    ]
  },
  {
    id: 'flow',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    promoCode: 'FLOW25',
    maxCoupons: 200,
    products: [
      {
        id: process.env.NEXT_PUBLIC_STRIPE_PRICE_FLOW_FOUNDER_ONETIME!,
        price: '1.299 €',
        period: '/once',
        button: 'bg-slate-900 text-white hover:bg-slate-800',
        isBestValue: true,
        metadata: { license_type: 'FOUNDER', seats: 1000, product_key: 'GEOTAPP_FLOW' }
      },
      {
        id: process.env.NEXT_PUBLIC_STRIPE_PRICE_FLOW_ELITE_ANNUAL!,
        price: '699 €',
        period: '/year',
        button: 'bg-blue-600 text-white hover:bg-blue-700',
        metadata: { license_type: 'ELITE', seats: 1000, product_key: 'GEOTAPP_FLOW' }
      },
      {
        id: process.env.NEXT_PUBLIC_STRIPE_PRICE_FLOW_PRO_ANNUAL!,
        price: '379 €',
        period: '/year',
        button: 'bg-blue-500 text-white hover:bg-blue-600',
        metadata: { license_type: 'PRO', seats: 5, product_key: 'GEOTAPP_FLOW' }
      },
      {
        id: process.env.NEXT_PUBLIC_STRIPE_PRICE_FLOW_START_ANNUAL!,
        price: '189 €',
        period: '/year',
        button: 'bg-blue-400 text-white hover:bg-blue-500',
        metadata: { license_type: 'START', seats: 1, product_key: 'GEOTAPP_FLOW' }
      }
    ]
  },
  {
    id: 'fortyx',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    promoCode: 'FORTYX25',
    maxCoupons: 200,
    products: [
      {
        id: 'prod_TbsbypwpOH73Ui',
        price: '€299',
        period: '/year',
        button: 'bg-orange-600 text-white hover:bg-orange-700',
        isBestValue: true
      },
      {
        id: 'prod_TbsaU3VuSWIWzx',
        price: '€149',
        period: '/year',
        button: 'bg-orange-500 text-white hover:bg-orange-600'
      },
      {
        id: 'prod_TbsU08yZLbcQ5m',
        price: '€99',
        period: '/year',
        button: 'bg-orange-500 text-white hover:bg-orange-600'
      },
      {
        id: 'prod_TbsTETctT1jOEC',
        price: '€49',
        period: '/year',
        button: 'bg-orange-400 text-white hover:bg-orange-500'
      }
    ]
  },
  {
    id: 'zenith',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    promoCode: 'ZENITH30',
    maxCoupons: 200,
    products: [
      {
        id: 'prod_TbsSA0b3zeH2lK',
        price: '€399',
        period: '/year',
        button: 'bg-purple-600 text-white hover:bg-purple-700',
        isBestValue: true
      },
      {
        id: 'prod_TbsSi5fIVCIam8',
        price: '€199',
        period: '/year',
        button: 'bg-purple-500 text-white hover:bg-purple-600'
      },
      {
        id: 'prod_Te7Sdoz2uWShLU',
        price: '€149',
        period: '/year',
        button: 'bg-purple-500 text-white hover:bg-purple-600'
      },
      {
        id: 'prod_Tbrv5zmOzmQF5h',
        price: '€69',
        period: '/year',
        button: 'bg-purple-400 text-white hover:bg-purple-500'
      }
    ]
  }
];

export default function Pricing() {
  const { addItem, toggleCart } = useCart();
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en');
  const dict = isEn ? enDict : itDict;

  // State per le statistiche dei promo code
  const [promoStats, setPromoStats] = useState<Record<string, { used: number, remaining: number, maxUses: number }>>({});
  const [isLoadingStats, setIsLoadingStats] = useState(true);

  // Fetch delle statistiche promo code al mount - v2
  useEffect(() => {
    const fetchPromoStats = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SAAS_URL || 'https://crm.geotapp.com'}/api/public/promo-stats`);
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
    // Aggiorna ogni 2 minuti
    const interval = setInterval(fetchPromoStats, 120000);
    return () => clearInterval(interval);
  }, []);

  // Merge base data with dictionary translations
  const categories = baseCategories.map(cat => {
    // @ts-ignore
    const catDict = dict.pricing?.categories?.[cat.id];
    if (!catDict) {
      console.error(`Missing category in dictionary: ${cat.id}`);
      return null;
    }
    return {
      ...cat,
      title: catDict.title,
      description: catDict.description,
      products: cat.products.map((prod, i) => ({
        ...prod,
        ...catDict.products[i]
      }))
    };
  }).filter((cat): cat is NonNullable<typeof cat> => cat !== null);

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.replace('€', '').replace(',', '.')),
      period: product.period?.includes('year') ? 'year' : (product.period?.includes('once') ? undefined : 'mo'),
      quantity: 1,
      metadata: { details: product.desc, ...(product.metadata || {}) }
    });
    toggleCart();
  };

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-background text-slate-900">
      <div className="container mx-auto max-w-4xl text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6 inline-block">
            {dict.pricing.badge}
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-8 leading-tight">
            <span dangerouslySetInnerHTML={{ __html: dict.pricing.title }}></span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Scala il Tuo Business.</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed font-light max-w-2xl mx-auto">
            {dict.pricing.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Bundle Promotion Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container mx-auto max-w-6xl mb-16"
      >
        <Link href="/pricing/bundle" className="block">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 group">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                  <Star className="w-4 h-4" />
                  Offerta Speciale
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  Bundle Flow + TimeTracker
                </h2>
                <p className="text-lg text-white/90 mb-4">
                  Risparmia il <span className="font-bold text-2xl">15%</span> sul primo anno acquistando insieme Flow e TimeTracker
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>CRM & ERP Completo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Tracciamento Ore</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>7 Giorni Gratis</span>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0">
                <div className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg group-hover:scale-105 transition-transform duration-300 flex items-center gap-2">
                  Scopri il Bundle
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {categories.map((category) => (
        <section key={category.id} className="container mx-auto max-w-7xl mb-32">
          <div className="flex items-center gap-4 mb-12 border-b border-slate-100 pb-4">
            <h2 className={`text-3xl font-display font-bold ${category.color}`}>{category.title}</h2>
            <span className="text-slate-400 text-sm font-light hidden md:inline-block border-l border-slate-200 pl-4">{category.description}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`relative p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col`}
              >
                {/* Best Value Decoration */}
                {(product as any).isBestValue && (
                  <span className="absolute -top-3 left-6 bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                    Best Value
                  </span>
                )}

                <div className="mb-4">
                  {category.promoCode && product.period !== '/once' && (
                    <div className="mb-3 p-3 bg-red-50 border border-red-100 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-bold uppercase text-red-500 tracking-wider">Promo Code</span>
                        {isLoadingStats ? (
                          <span className="text-[10px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">
                            Loading...
                          </span>
                        ) : promoStats[category.promoCode] ? (
                          <span className="text-[10px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">
                            {promoStats[category.promoCode].remaining}/{promoStats[category.promoCode].maxUses} Left
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">
                            {category.maxCoupons}/200 Left
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-mono font-bold text-red-600 flex items-center gap-2">
                        <span className="border-2 border-dashed border-red-200 px-2 py-0.5 rounded bg-white select-all cursor-pointer" title="Copia">{category.promoCode}</span>
                        <span className="text-[10px] text-red-400 font-sans font-normal">-25/30% OFF</span>
                      </div>
                    </div>
                  )}
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{product.tagline}</div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">{product.name}</h3>
                </div>

                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-slate-900">{product.price}</span>
                  <span className="text-xs text-slate-500 font-medium">{product.period}</span>
                </div>

                <p className="text-sm text-slate-600 mb-6 flex-1 leading-relaxed border-b border-slate-100 pb-6">
                  {product.desc}
                </p>

                {/* Features (Mini List) */}
                <ul className="mb-6 space-y-2">
                  {product.features.map((f: string) => (
                    <li key={f} className="text-xs text-slate-500 flex items-center gap-2">
                      <Check size={12} className={category.color} /> {f}
                    </li>
                  ))}
                </ul>

                {(product as any).isCalculator ? (
                  <div className="mt-auto">
                    <Link href="#calculator" className={`block w-full py-3 rounded-lg text-center font-bold text-sm uppercase tracking-wide transition-all shadow-md hover:-translate-y-1 ${product.button}`}>
                      {product.button}
                    </Link>
                  </div>
                ) : (
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`w-full py-3 rounded-lg text-center font-bold text-sm uppercase tracking-wide transition-all shadow-md hover:-translate-y-1 ${product.button}`}
                  >
                    {isEn ? 'Add' : 'Aggiungi'}
                  </button>
                )}
              </motion.div>
            ))}
            {category.id === 'app' && (
              <div className="col-span-1 md:col-span-1 lg:col-span-3 h-full">
                <PricingCalculator />
              </div>
            )}
          </div>
        </section>
      ))
      }

      <div className="text-center mt-20 border-t border-slate-100 pt-12">
        <p className="text-slate-400 text-sm">{dict.pricing.vat_note}</p>
      </div>
    </div >
  );
}
