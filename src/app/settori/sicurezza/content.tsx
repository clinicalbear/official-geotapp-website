'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle2, FileX, Calculator, UserCheck, ShieldCheck, Smartphone, Quote } from 'lucide-react';

export default function SicurezzaContent() {
    return (
        <div className="bg-slate-50 min-h-screen text-slate-900 font-sans">

            {/* 1. HERO SECTION - THE REAL PROBLEM */}
            <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-4 py-1.5 rounded-sm bg-indigo-900 text-indigo-200 text-xs font-bold tracking-widest uppercase mb-6 border border-indigo-700">
                                Per Vigilanza, Steward & Servizi Fiduciari
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
                                "Mi dimenticavo sempre di segnare le ore."
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Non perdere più soldi a fine mese perché i fogli presenze sono incompleti.
                                Un sistema <span className="text-indigo-400 font-bold">semplice</span>, nato da chi fa questo lavoro, per chi vuole solo timbrare e lavorare. Niente complicazioni.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-lg text-lg hover:bg-indigo-50 transition-all shadow-lg text-center uppercase tracking-wide">
                                    Provalo Ora
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Visual: Simple App Interface */}
                            <div className="flex justify-center">
                                <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700 shadow-2xl max-w-sm w-full relative">
                                    <div className="absolute -right-4 -top-4 bg-yellow-500 text-slate-900 font-bold px-4 py-2 rounded-lg shadow-lg rotate-3 z-20">
                                        Semplice!
                                    </div>
                                    <div className="space-y-6">
                                        <div className="text-center border-b border-slate-700 pb-4">
                                            <div className="text-slate-400 text-xs uppercase tracking-widest mb-1">Stato Attuale</div>
                                            <div className="text-3xl font-bold text-white">IN SERVIZIO</div>
                                            <div className="text-green-400 text-sm mt-1 animate-pulse">● Tracking Attivo</div>
                                        </div>

                                        <div className="bg-slate-700/50 rounded-xl p-4">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-slate-400 text-sm">Inizio Turno</span>
                                                <span className="font-mono text-white">08:00</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-slate-400 text-sm">Durata</span>
                                                <span className="font-mono text-white text-xl">4h 32m</span>
                                            </div>
                                        </div>

                                        <button className="w-full py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-500/20 transition-all active:scale-95">
                                            STOP TURNO
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. THE ORIGIN STORY - SOCIAL PROOF */}
            <section className="py-24 px-6 bg-white border-b border-slate-200">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="text-indigo-200 shrink-0">
                            <Quote size={64} />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                                "Sono un uomo semplice. Volevo una cosa semplice."
                            </h2>
                            <div className="prose prose-lg text-slate-600 leading-relaxed space-y-4">
                                <p>
                                    Il progetto GeoTapp è nato da una mia esigenza personale. Gestivo servizi di sicurezza e mi dimenticavo sempre di segnare le ore di lavoro.
                                </p>
                                <p>
                                    Arrivavo a fine mese e non sapevo mai cosa fatturare. Era il caos. Ho cercato altre app in giro: <strong>tutte troppo complicate</strong>. Ti chiedevano di compilare moduli infiniti, selezionare codici, fare cose che quando sei stanco morto alle 4 di mattina non hai voglia di fare.
                                </p>
                                <p>
                                    Non trovando nulla che facesse al caso mio, ho deciso di svilupparla io. Doveva fare una cosa sola: <span className="font-bold text-indigo-900 bg-indigo-50 px-1">permettermi di segnare le ore senza pensare</span>. Poi si è evoluta, è diventata GeoTapp Flow e Timetracker, ma l'anima è rimasta quella.
                                </p>
                            </div>
                            <div className="mt-8 flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                                    {/* Placeholder for Mike's avatar if wanted, or generic */}
                                    <div className="w-full h-full flex items-center justify-center bg-indigo-600 text-white font-bold">M</div>
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">Mike</div>
                                    <div className="text-sm text-slate-500">Creatore di GeoTapp</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. PAIN POINTS - THE OLD WAY */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Perché le altre soluzioni falliscono?</h2>
                        <p className="text-xl text-slate-500">Perché sono fatte da informatici, non da chi lavora.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                                <FileX size={24} />
                            </div>
                            <h3 className="text-lg font-bold mb-3">Fogli di Carta Persi</h3>
                            <p className="text-slate-600 text-sm">Scrivi su un pezzo di carta. Lo metti in tasca. Lo lavi in lavatrice. Addio ore, addio soldi.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                                <Smartphone size={24} />
                            </div>
                            <h3 className="text-lg font-bold mb-3">App Complicate</h3>
                            <p className="text-slate-600 text-sm">Troppi tasti, troppe schermate. I dipendenti sbagliano a schiacciare o non la usano proprio.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                                <Calculator size={24} />
                            </div>
                            <h3 className="text-lg font-bold mb-3">Fine Mese da Incubo</h3>
                            <p className="text-slate-600 text-sm">Passi giorni a ricostruire i turni chiamando tutti per chiedere "ma martedì c'eri?".</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* 4. SOLUTION - PURE SIMPLICITY */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-slate-900">La soluzione dell'uomo semplice.</h2>

                    <div className="grid gap-6 md:grid-cols-2 text-left">
                        <div className="flex gap-4 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
                            <div className="shrink-0 mt-1">
                                <CheckCircle2 className="text-indigo-600" size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-indigo-900">Arrivi e clicchi START.</h3>
                                <p className="text-slate-600 text-sm mt-1">Non devi selezionare nulla. Il GPS sa già dove sei. Un tocco e il telefono torna in tasca.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
                            <div className="shrink-0 mt-1">
                                <CheckCircle2 className="text-indigo-600" size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-indigo-900">Finisci e clicchi STOP.</h3>
                                <p className="text-slate-600 text-sm mt-1">Niente report da scrivere a mano. L'orario è salvato.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
                            <div className="shrink-0 mt-1">
                                <CheckCircle2 className="text-indigo-600" size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-indigo-900">Rendicontazione Automatica.</h3>
                                <p className="text-slate-600 text-sm mt-1">A fine mese scarichi un PDF con tutte le ore. Totale corretto al centesimo. Fatturi e incassi.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
                            <div className="shrink-0 mt-1">
                                <CheckCircle2 className="text-indigo-600" size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-indigo-900">Nessuna dimenticanza.</h3>
                                <p className="text-slate-600 text-sm mt-1">Se ti dimentichi, il sistema ti può mandare un promemoria. Mai più ore perse.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FINAL CTA */}
            <section className="py-24 bg-slate-900 text-white text-center px-6">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Semplificati la vita.</h2>
                    <p className="text-xl text-slate-400 mb-10">
                        Nato per esigenza, cresciuto per passione. Prova il sistema di tracciamento ore più semplice al mondo.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-block px-12 py-5 bg-indigo-600 text-white font-bold rounded-lg text-xl hover:bg-indigo-700 transition-all shadow-lg transform hover:-translate-y-1">
                            PROVALO GRATIS
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
