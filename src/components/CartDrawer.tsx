'use client';

import PolicyConsentField from '@/components/PolicyConsentField';
import { buildPolicyAcceptancePayload } from '@/lib/policyAcceptance';
import { useCart } from '@/store/cart';
import { X, Trash2, ShoppingCart, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getLocaleFromPathname } from '@/lib/i18n/locale-routing';
import {
  formatLocalAmount,
  getCurrencyForLocale,
  type CurrencyCode,
} from '@/lib/pricing';

export default function CartDrawer() {
  const { items, isOpen, toggleCart, removeItem, clearCart } = useCart();
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyRead, setPrivacyRead] = useState(false);
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dict = getDictionary(locale).cart;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Cart display currency: first item dictates currency, fallback to locale's currency.
  // Items added in the same session share the user's locale, so this is consistent
  // unless an older persisted cart has stale items in a different currency.
  const cartCurrency: CurrencyCode =
    items[0]?.currency ?? getCurrencyForLocale(locale);

  // Totals in display currency (sum of displayAmount). EUR totals also computed
  // for the checkout payload (backend authoritative).
  const monthlyDisplay = items
    .filter((i) => i.period === 'mo')
    .reduce((acc, i) => acc + i.displayAmount, 0);
  const yearlyDisplay = items
    .filter((i) => i.period === 'year')
    .reduce((acc, i) => acc + i.displayAmount, 0);

  const [loading, setLoading] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) {
      setEmailError(dict.email_error_empty);
      return false;
    }
    if (!emailRegex.test(trimmed)) {
      setEmailError(dict.email_error_invalid);
      return false;
    }
    setEmailError('');
    return true;
  };
  const trimmedEmail = email.trim();
  const isCheckoutDisabled =
    loading ||
    items.length === 0 ||
    !trimmedEmail ||
    !!emailError ||
    !termsAccepted ||
    !privacyRead;

  const handleCheckout = async () => {
    if (!validateEmail(email)) {
      return;
    }
    if (!termsAccepted || !privacyRead) {
      alert(dict.terms_alert);
      return;
    }
    setLoading(true);
    try {
      const checkoutItems = items.map((item) => {
        const isTimetrackerSeatBundle =
          Number(item?.metadata?.employeeCount) > 0 ||
          (item.name?.toLowerCase().includes('timetracker') &&
            item.period === 'year');

        if (!isTimetrackerSeatBundle) {
          return item;
        }

        return {
          ...item,
          id: 'prod_TZxemMJkQrWryr',
          metadata: {
            ...(item.metadata || {}),
            product_key: item?.metadata?.product_key || 'GEOTAPP_APP',
            license_type: item?.metadata?.license_type || 'BUSINESS',
          },
        };
      });

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SAAS_URL || 'https://crm.geotapp.com'}/api/v1/checkout`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            items: checkoutItems,
            email: email.trim(),
            displayCurrency: cartCurrency,
            ...buildPolicyAcceptancePayload(),
          }),
        },
      );
      const data = await response.json();
      if (data.url) {
        clearCart();
        toggleCart();
        window.location.href = data.url;
      } else {
        alert(
          'Checkout Error: ' + (data.message || data.error || 'Unknown error'),
        );
      }
    } catch (e) {
      alert(dict.checkout_error);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-slate-900/40 z-[60] backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white border-l border-slate-200 z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <ShoppingCart className="text-primary" /> {dict.title}
              </h2>
              <button
                onClick={toggleCart}
                className="p-2 hover:bg-slate-100 rounded-full text-slate-500 hover:text-slate-900 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white text-slate-900">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
                  <ShoppingCart size={48} className="opacity-20" />
                  <p>{dict.empty}</p>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-slate-900">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-slate-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="text-sm text-slate-500 mb-2">
                        {item.metadata?.details || dict.license_default}
                      </div>
                      <div className="flex items-end justify-between">
                        <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                          {dict.quantity}: {item.quantity}
                        </div>
                        <div className="font-bold text-slate-900 text-lg">
                          {item.displayFormatted}
                          <span className="text-xs text-slate-500 font-normal">
                            /{item.period === 'mo' ? dict.per_month : dict.per_year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-slate-100 bg-slate-50 safe-area-pb">
                <div className="space-y-3 mb-6">
                  {monthlyDisplay > 0 && (
                    <div className="flex justify-between text-slate-600">
                      <span>{dict.total_monthly}</span>
                      <span className="text-slate-900 font-bold">
                        {formatLocalAmount(monthlyDisplay, cartCurrency, locale)}
                      </span>
                    </div>
                  )}
                  {yearlyDisplay > 0 && (
                    <div className="flex justify-between text-slate-600">
                      <span>{dict.total_yearly}</span>
                      <span className="text-slate-900 font-bold">
                        {formatLocalAmount(yearlyDisplay, cartCurrency, locale)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between text-xs text-slate-400 pt-3 border-t border-slate-200">
                    <span>{dict.vat_note}</span>
                    <span>--</span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <label
                    htmlFor="cart-email"
                    className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    {dict.email_label}
                  </label>
                  <input
                    id="cart-email"
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (emailError) setEmailError('');
                    }}
                    onBlur={() => {
                      if (!email) {
                        setEmailError(dict.email_error_empty);
                        return;
                      }
                      validateEmail(email);
                    }}
                    placeholder={dict.email_placeholder}
                    className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 transition"
                  />
                  <p
                    className={`text-xs ${emailError ? 'text-red-500' : 'text-slate-500'}`}
                  >
                    {emailError || dict.email_hint}
                  </p>
                </div>
                <div className="mb-4">
                  <PolicyConsentField
                    termsAccepted={termsAccepted}
                    privacyRead={privacyRead}
                    onTermsAcceptedChange={setTermsAccepted}
                    onPrivacyReadChange={setPrivacyRead}
                    compact
                  />
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={isCheckoutDisabled}
                  className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-primary hover:text-slate-900 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
                >
                  {loading ? dict.checkout_loading : dict.checkout_button}{' '}
                  <CreditCard size={18} />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
