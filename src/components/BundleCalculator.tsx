'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Users, TrendingDown, Check, Zap } from 'lucide-react';

interface BundleCalculatorProps {
  locale?: 'it' | 'en';
}

export default function BundleCalculator({ locale = 'it' }: BundleCalculatorProps) {
  const [employeeCount, setEmployeeCount] = useState(10);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [flowPlan, setFlowPlan] = useState<'solo' | 'team' | 'business'>('solo');
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const t = locale === 'en' ? {
    title: 'Bundle Calculator',
    subtitle: 'Calculate your savings with Flow + TimeTracker Bundle',
    employees: 'Number of Employees',
    billingCycle: 'Billing Cycle',
    monthly: 'Monthly',
    yearly: 'Yearly',
    flowPlan: 'Flow Plan',
    solo: 'Solo (1 user)',
    team: 'Team (up to 5 users)',
    business: 'Business (unlimited)',
    priceBreakdown: 'Price Breakdown',
    flowPrice: 'GeoTapp Flow',
    trackerPrice: 'TimeTracker',
    subtotal: 'Subtotal',
    bundleDiscount: 'Bundle Discount (15% first year)',
    totalPrice: 'Total Price',
    savings: 'You save',
    perMonth: '/month',
    perYear: '/year',
    cta: 'Get Bundle Now',
    notes: 'Note: Discount applies for the first 12 months'
  } : {
    title: 'Calcolatore Bundle',
    subtitle: 'Calcola il tuo risparmio con il Bundle Flow + TimeTracker',
    employees: 'Numero Dipendenti',
    billingCycle: 'Ciclo di Fatturazione',
    monthly: 'Mensile',
    yearly: 'Annuale',
    flowPlan: 'Piano Flow',
    solo: 'Solo (1 utente)',
    team: 'Team (fino a 5 utenti)',
    business: 'Business (illimitato)',
    priceBreakdown: 'Dettaglio Prezzi',
    flowPrice: 'GeoTapp Flow',
    trackerPrice: 'TimeTracker',
    subtotal: 'Subtotale',
    bundleDiscount: 'Sconto Bundle (15% primo anno)',
    totalPrice: 'Prezzo Totale',
    savings: 'Risparmi',
    perMonth: '/mese',
    perYear: '/anno',
    cta: 'Ottieni il Bundle',
    notes: 'Nota: Lo sconto si applica per i primi 12 mesi'
  };

  // Flow Pricing
  const flowPricesYearly = {
    solo: 99,
    team: 179,
    business: 299
  };

  // TimeTracker Pricing
  const calculateTrackerPrice = () => {
    if (billingCycle === 'monthly') {
      // Monthly: €2.50/employee flat
      return employeeCount * 2.50;
    } else {
      // Yearly: Tiered pricing
      // 1-25: €2.00/month (€24/year)
      // 26+: €1.50/month (€18/year)
      let total = 0;
      if (employeeCount <= 25) {
        total = employeeCount * 24; // €2/month * 12 months
      } else {
        total = (25 * 24) + ((employeeCount - 25) * 18);
      }
      return total;
    }
  };

  const flowPriceBase = flowPricesYearly[flowPlan];
  const flowPrice = billingCycle === 'monthly' ? flowPriceBase / 12 : flowPriceBase;
  const trackerPrice = calculateTrackerPrice();
  const subtotal = billingCycle === 'monthly' ? flowPrice + trackerPrice : flowPrice + trackerPrice;
  const discount = subtotal * 0.15; // 15% discount
  const total = subtotal - discount;
  const savings = discount;

  // Format price display
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(locale === 'en' ? 'en-US' : 'it-IT', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2
    }).format(price);
  };

  const handleCheckout = async () => {
    if (!email || !email.includes('@')) {
      setShowEmailModal(true);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SAAS_URL || 'https://crm.geotapp.com'}/api/create-bundle-checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          companyId: `bundle-${Date.now()}`, // Generate temporary company ID
          selectedProducts: ['flow', 'tracker'],
          flowPlan,
          employeeCount,
          billingCycle
        })
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Errore durante la creazione della sessione. Riprova.');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Errore di connessione. Riprova.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailSubmit = () => {
    if (email && email.includes('@')) {
      setShowEmailModal(false);
      handleCheckout();
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
        <div className="flex items-center gap-3 mb-2">
          <Calculator size={32} />
          <h2 className="text-3xl font-bold">{t.title}</h2>
        </div>
        <p className="text-blue-100">{t.subtitle}</p>
      </div>

      <div className="p-8 space-y-8">
        {/* Bundle Discount Badge */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-2xl flex items-center justify-between shadow-lg"
        >
          <div className="flex items-center gap-3">
            <TrendingDown size={24} />
            <span className="font-bold text-lg">{t.bundleDiscount}</span>
          </div>
          <span className="text-2xl font-black">-15%</span>
        </motion.div>

        {/* Input Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Employee Count */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
              <Users size={18} />
              {t.employees}
            </label>
            <input
              type="number"
              min="1"
              max="500"
              value={employeeCount}
              onChange={(e) => setEmployeeCount(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all font-bold text-lg text-center"
            />
          </div>

          {/* Billing Cycle */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              {t.billingCycle}
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`flex-1 px-4 py-3 rounded-xl font-bold transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t.monthly}
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`flex-1 px-4 py-3 rounded-xl font-bold transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t.yearly}
              </button>
            </div>
          </div>

          {/* Flow Plan */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              {t.flowPlan}
            </label>
            <select
              value={flowPlan}
              onChange={(e) => setFlowPlan(e.target.value as 'solo' | 'team' | 'business')}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all font-bold"
            >
              <option value="solo">{t.solo}</option>
              <option value="team">{t.team}</option>
              <option value="business">{t.business}</option>
            </select>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="bg-white rounded-2xl p-6 border-2 border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Check className="text-green-600" size={20} />
            {t.priceBreakdown}
          </h3>

          <div className="space-y-3">
            {/* Flow Price */}
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <span className="text-slate-600">{t.flowPrice} ({flowPlan})</span>
              <span className="font-bold text-slate-900">
                {formatPrice(flowPrice)}
                {billingCycle === 'monthly' ? t.perMonth : t.perYear}
              </span>
            </div>

            {/* Tracker Price */}
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <span className="text-slate-600">
                {t.trackerPrice} ({employeeCount} {locale === 'en' ? 'employees' : 'dipendenti'})
              </span>
              <span className="font-bold text-slate-900">
                {formatPrice(trackerPrice)}
                {billingCycle === 'monthly' ? t.perMonth : t.perYear}
              </span>
            </div>

            {/* Subtotal */}
            <div className="flex justify-between items-center pb-3 border-b-2 border-slate-200">
              <span className="text-slate-700 font-semibold">{t.subtotal}</span>
              <span className="font-bold text-slate-900">{formatPrice(subtotal)}</span>
            </div>

            {/* Discount */}
            <div className="flex justify-between items-center pb-3">
              <span className="text-green-600 font-semibold">{t.bundleDiscount}</span>
              <span className="font-bold text-green-600">-{formatPrice(discount)}</span>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center pt-4 border-t-2 border-blue-200 bg-blue-50 -mx-6 px-6 py-4 rounded-b-xl">
              <span className="text-xl font-bold text-slate-900">{t.totalPrice}</span>
              <div className="text-right">
                <div className="text-3xl font-black text-blue-600">{formatPrice(total)}</div>
                <div className="text-sm text-slate-600">
                  {billingCycle === 'monthly' ? t.perMonth : t.perYear}
                </div>
              </div>
            </div>

            {/* Savings Display */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 -mx-6 px-6 py-4 flex items-center justify-center gap-2 text-green-700 font-bold border-t border-green-100"
            >
              <TrendingDown size={20} />
              {t.savings}: {formatPrice(savings)} {locale === 'en' ? 'in the first year!' : 'nel primo anno!'}
            </motion.div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleCheckout}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <div className="animate-spin h-6 w-6 border-2 border-white border-t-transparent rounded-full" />
              {locale === 'en' ? 'Loading...' : 'Caricamento...'}
            </>
          ) : (
            <>
              <Zap size={24} />
              {t.cta}
            </>
          )}
        </motion.button>

        {/* Notes */}
        <p className="text-sm text-slate-500 text-center italic">
          {t.notes}
        </p>
      </div>

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-4">
              {locale === 'en' ? 'Enter your email' : 'Inserisci la tua email'}
            </h3>
            <p className="text-slate-600 mb-6">
              {locale === 'en'
                ? 'We need your email to create your checkout session and send you the receipt.'
                : 'Abbiamo bisogno della tua email per creare la sessione di checkout e inviarti la ricevuta.'}
            </p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleEmailSubmit()}
              placeholder={locale === 'en' ? 'your@email.com' : 'tua@email.com'}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all mb-4"
              autoFocus
            />
            <div className="flex gap-3">
              <button
                onClick={() => setShowEmailModal(false)}
                className="flex-1 px-4 py-3 border-2 border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
              >
                {locale === 'en' ? 'Cancel' : 'Annulla'}
              </button>
              <button
                onClick={handleEmailSubmit}
                disabled={!email || !email.includes('@')}
                className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {locale === 'en' ? 'Continue' : 'Continua'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
