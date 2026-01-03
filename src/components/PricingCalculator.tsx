'use client';

import { useState } from 'react';
import { Users, Calculator, ArrowRight, MessageSquare, Info, Shield } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/store/cart';

const calculatePrice = (count: number) => {
    if (count > 150) return null; // Custom Quote

    const tier1Limit = 25;
    const tier1Rate = 2.0;
    const tier2Rate = 1.5;

    let annualTotal = 0;

    if (count <= tier1Limit) {
        annualTotal = count * tier1Rate * 12;
    } else {
        // First 25 at €2
        annualTotal += tier1Limit * tier1Rate * 12;
        // Remainder at €1.5
        annualTotal += (count - tier1Limit) * tier2Rate * 12;
    }

    const monthlyAverage = annualTotal / 12;
    const averageRate = monthlyAverage / count;

    return { averageRate, monthlyAverage, annualTotal };
};

export default function PricingCalculator() {
    const [employees, setEmployees] = useState(10);

    const price = calculatePrice(employees);
    const { addItem, toggleCart } = useCart();
    // Hook stability check: hooks are called unconditionally at the top level.

    const handleAddToCart = () => {
        if (!price) return;
        addItem({
            id: 'prod_TZxemMJkQrWryr',
            name: 'GeoTapp Timetracker License',
            price: price.annualTotal, // Currently storing the FULL annual amount as the price
            period: 'year',
            quantity: 1, // Represents 1 bundle of X employees
            metadata: {
                details: `${employees} Collaborators Plan`,
                employeeCount: employees
            }
        });
        toggleCart();
    };

    return (
        <div className="w-full h-full bg-white border border-slate-200 rounded-2xl p-8 shadow-2xl relative overflow-hidden">

            {/* Decorative Background Blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-4 rounded-2xl bg-orange-50 text-orange-600 shadow-sm border border-orange-100">
                    <Calculator size={28} />
                </div>
                <div>
                    <h3 className="text-2xl font-display font-bold text-slate-900">Calcolatore Licenze App</h3>
                    <p className="text-slate-500 text-sm">Stima il tuo investimento annuale per la forza lavoro.</p>
                </div>
            </div>

            {/* Slider Input */}
            <div className="mb-12 relative z-10">
                <div className="flex justify-between items-end mb-6">
                    <label className="text-slate-600 font-bold flex items-center gap-2 text-sm uppercase tracking-wide">
                        <Users size={18} className="text-blue-500" /> Collaboratori Attivi
                    </label>
                    <div className="text-4xl font-bold text-slate-900 font-display">
                        {employees > 150 ? '150+' : employees}
                    </div>
                </div>

                <input
                    type="range"
                    min="1"
                    max="151"
                    value={employees}
                    onChange={(e) => setEmployees(parseInt(e.target.value))}
                    className="w-full h-4 bg-slate-100 rounded-full appearance-none cursor-pointer accent-blue-600 hover:accent-blue-500 transition-all focus:outline-none focus:ring-4 focus:ring-blue-100"
                />

                <div className="relative h-6 text-xs text-slate-400 mt-4 font-mono font-medium">
                    <span className="absolute left-0">1</span>
                    <span className="absolute left-[16%] -translate-x-1/2 text-blue-600 font-bold">25 (Soglia Sconto)</span>
                    <span className="absolute right-0">150+</span>
                </div>
            </div>

            {/* Price Display */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 mb-8 relative z-10">
                {price ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Costo medio per Utente</div>
                            <div className="text-3xl font-bold text-slate-900">€{price.averageRate.toFixed(2)}<span className="text-sm font-normal text-slate-400">/mese</span></div>
                            <div className="text-xs text-blue-600 mt-2 flex items-center gap-1 font-medium bg-blue-50 inline-block px-2 py-1 rounded-md">
                                <Info size={12} />
                                {employees <= 25
                                    ? 'Tariffa Standard (1-25 @ €2)'
                                    : `Tariffa Mista (Sconto Volume Applicato)`}
                            </div>
                        </div>
                        <div className="text-right border-l md:border-l-0 md:border-l border-slate-200 pl-0 md:pl-8 pt-6 md:pt-0 border-t md:border-t-0">
                            <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Totale Annuale (+IVA)</div>
                            <div className="text-4xl font-display font-bold text-slate-900">€{price.annualTotal.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                            <div className="text-xs text-slate-400 mt-1">Fatturazione annuale unica</div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-6">
                        <div className="text-2xl font-bold text-slate-900 mb-2">Piano Enterprise</div>
                        <p className="text-slate-500 mb-6 text-sm">Per team superiori a 150 utenti offriamo SLA personalizzati e gestione account dedicata.</p>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg">
                            Richiedi Preventivo <MessageSquare size={18} />
                        </Link>
                    </div>
                )}
            </div>

            {/* Action Button */}
            {price && (
                <div className="text-center relative z-10">
                    <button onClick={handleAddToCart} className="w-full block py-5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg rounded-xl hover:scale-[1.01] hover:shadow-orange-500/30 transition-all shadow-xl">
                        Aggiungi Licenza App al Carrello <ArrowRight className="inline ml-2" />
                    </button>
                    <p className="mt-4 text-xs text-slate-400 flex items-center justify-center gap-1">
                        <Shield size={12} /> Pagamento sicuro via Stripe. IVA calcolata al checkout.
                    </p>
                </div>
            )}
        </div>
    );
}
