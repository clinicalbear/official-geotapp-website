'use client';

import { useCart } from '@/store/cart';
import { X, Trash2, ShoppingCart, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CartDrawer() {
    const { items, isOpen, toggleCart, removeItem, clearCart } = useCart();
    const [mounted, setMounted] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    useEffect(() => {
        setMounted(true);
    }, []);

    // Calculate totals locally
    const monthly = items.filter(i => i.period === 'mo').reduce((acc, i) => acc + i.price, 0);
    const yearly = items.filter(i => i.period === 'year').reduce((acc, i) => acc + i.price, 0);

    const [loading, setLoading] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateEmail = (value: string) => {
        const trimmed = value.trim();
        if (!trimmed) {
            setEmailError('Inserisci un indirizzo email valido.');
            return false;
        }
        if (!emailRegex.test(trimmed)) {
            setEmailError('Inserisci un indirizzo email valido (es. nome@azienda.com).');
            return false;
        }
        setEmailError('');
        return true;
    };
    const trimmedEmail = email.trim();
    const isCheckoutDisabled = loading || items.length === 0 || !trimmedEmail || !!emailError;

    const handleCheckout = async () => {
        if (!validateEmail(email)) {
            return;
        }
        setLoading(true);
        try {
            const response = await fetch('https://crm.geotapp.com/api/v1/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ items, email: email.trim() }),
            });
            const data = await response.json();
            if (data.url) {
                clearCart();
                toggleCart();
                window.location.href = data.url;
            } else {
                alert('Checkout Error: ' + (data.message || 'Unknown error'));
            }
        } catch (e) {
            alert('Checkout failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (!mounted) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-slate-900/40 z-[60] backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-white border-l border-slate-200 z-[70] shadow-2xl flex flex-col"
                    >
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white">
                            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                <ShoppingCart className="text-primary" /> Carrello
                            </h2>
                            <button onClick={toggleCart} className="p-2 hover:bg-slate-100 rounded-full text-slate-500 hover:text-slate-900 transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white text-slate-900">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
                                    <ShoppingCart size={48} className="opacity-20" />
                                    <p>Il carrello è vuoto.</p>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex gap-4">
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="font-bold text-slate-900">{item.name}</h3>
                                                <button onClick={() => removeItem(item.id)} className="text-slate-400 hover:text-red-500 transition-colors">
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                            <div className="text-sm text-slate-500 mb-2">
                                                {item.metadata?.details || 'Licenza Standard'}
                                            </div>
                                            <div className="flex items-end justify-between">
                                                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                                                    Quantità: {item.quantity}
                                                </div>
                                                <div className="font-bold text-slate-900 text-lg">
                                                    €{item.price.toFixed(2)}<span className="text-xs text-slate-500 font-normal">/{item.period === 'mo' ? 'mese' : 'anno'}</span>
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
                                    {monthly > 0 && (
                                        <div className="flex justify-between text-slate-600">
                                            <span>Totale Mensile</span>
                                            <span className="text-slate-900 font-bold">€{monthly.toFixed(2)}</span>
                                        </div>
                                    )}
                                    {yearly > 0 && (
                                        <div className="flex justify-between text-slate-600">
                                            <span>Totale Annuale</span>
                                            <span className="text-slate-900 font-bold">€{yearly.toFixed(2)}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between text-xs text-slate-400 pt-3 border-t border-slate-200">
                                        <span>IVA (calcolata al checkout)</span>
                                        <span>--</span>
                                    </div>
                                </div>
                                <div className="space-y-2 mb-4">
                                    <label htmlFor="cart-email" className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                        Email per ricevere licenze e accessi SaaS
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
                                                setEmailError('Inserisci un indirizzo email valido.');
                                                return;
                                            }
                                            validateEmail(email);
                                        }}
                                        placeholder="nome@azienda.com"
                                        className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 transition"
                                    />
                                    <p className={`text-xs ${emailError ? 'text-red-500' : 'text-slate-500'}`}>
                                        {emailError || 'Ti invieremo qui le chiavi di licenza e i dettagli di accesso.'}
                                    </p>
                                </div>
                                <button
                                    onClick={handleCheckout}
                                    disabled={isCheckoutDisabled}
                                    className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-primary hover:text-slate-900 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
                                >
                                    {loading ? 'Elaborazione...' : 'Procedi al Checkout'} <CreditCard size={18} />
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
