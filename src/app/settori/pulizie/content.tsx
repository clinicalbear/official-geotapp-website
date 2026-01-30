'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, UserCheck, CalendarCheck, Clock, CheckCircle, Smartphone } from 'lucide-react';
import Image from 'next/image';

export default function PulizieContent() {
    return (
        <div className="bg-cyan-50/30 min-h-screen text-slate-600 font-sans">

            {/* 1. HERO SECTION - CLEAN & SIMPLE */}
            <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-white">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-6">
                                <Sparkles size={16} />
                                <span>Per Imprese di Pulizie & Facility</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-[1.1] mb-6">
                                La prova che è pulito.<br />
                                <span className="text-cyan-500">Senza dubbi.</span>
                            </h1>
                            <p className="text-xl text-slate-500 mb-8 leading-relaxed font-light">
                                Gestisci le tue squadre di pulizia sparse per la città. I clienti smettono di chiedere "sono passati oggi?". Tu smetti di inseguire il personale. Tutto in un'app facile da usare per chiunque.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact" className="px-8 py-4 bg-cyan-500 text-white font-bold rounded-full text-lg hover:bg-cyan-600 transition-all shadow-lg hover:shadow-cyan-500/30 text-center">
                                    Inizia ora gratuitamente
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Visual: Clean Interface over Clean Background */}
                            <div className="relative z-10">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

                                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white p-6 relative">
                                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                                        <div>
                                            <div className="text-xs text-slate-400 uppercase">Condominio Parco dei Fiori</div>
                                            <div className="font-bold text-slate-800 text-lg">Turno Completato</div>
                                        </div>
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                            <CheckCircle size={20} />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                                                <UserCheck size={18} className="text-slate-400" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-700">Maria S.</div>
                                                <div className="text-xs text-slate-400">08:00 - 10:30 (2h 30m)</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-slate-400 bg-slate-50 p-3 rounded-lg flex items-center gap-2">
                                            <Clock size={14} /> GPS Verificato all'ingresso e uscita
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 2. THE TRUST GAP - EMPATHY */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Gestire le pulizie è una questione di fiducia. <br /><span className="text-slate-400 font-normal">Spesso mal riposta.</span></h2>

                    <div className="space-y-8">
                        <div className="flex gap-6 items-start">
                            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0 text-red-400">1</div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-800">"Ma avete pulito le scale?"</h3>
                                <p className="text-slate-500">I condomini si lamentano. Dicono che nessuno si è visto. Tu chiami il dipendente, lui giura di esserci andato. Chi ha ragione? Senza dati, perdi il cliente.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0 text-red-400">2</div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-800">Il turnover infinito</h3>
                                <p className="text-slate-500">Il personale cambia spesso. Non puoi permetterti ore di formazione per spiegare come si compilano i fogli presenze. Ti serve qualcosa che capiscano in 30 secondi.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0 text-red-400">3</div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-800">La giungla delle chiavi e degli accessi</h3>
                                <p className="text-slate-500">Gestire centinaia di piccoli interventi (uffici, banche, condomini) è un incubo logistico. Sapere che Maria è entrata proprio in quell'ufficio a quell'ora ti salva la vita in caso di contestazioni.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SOLUTION - TRANSPARENCY */}
            <section className="py-24 px-6 bg-cyan-900 text-white rounded-[3rem] mx-4 md:mx-10 my-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">GeoTapp è la tua garanzia di qualità.</h2>
                        <p className="text-xl text-cyan-200 max-w-2xl mx-auto">
                            Dai ai tuoi clienti la prova trasparente del lavoro svolto. Proteggi la tua reputazione.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
                            <Smartphone className="text-cyan-300 mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-3">App "A prova di nonna"</h3>
                            <p className="text-cyan-100 text-sm">Un pulsante verde per entrare. Un pulsante rosso per uscire. Niente di più. Anche il personale meno tecnologico la impara al primo sguardo.</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
                            <CalendarCheck className="text-cyan-300 mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-3">Pianificazione Turni</h3>
                            <p className="text-cyan-100 text-sm">Organizza i giri della settimana. Assegna le squadre. Se qualcuno si ammala, riassegni il giro con un click e il sostituto sa subito dove andare.</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
                            <CheckCircle className="text-cyan-300 mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-3">Report Condominio</h3>
                            <p className="text-cyan-100 text-sm">Invia automaticamente all'amministratore di condominio il report mensile degli accessi. Massima professionalità, zero discussioni.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FINAL CTA - CLEAN */}
            <section className="py-24 bg-white text-center px-6">
                <div className="container mx-auto max-w-2xl border border-slate-100 rounded-3xl p-12 shadow-2xl shadow-cyan-100">
                    <h2 className="text-3xl font-bold mb-6 text-slate-800">Pulisci la tua amministrazione.</h2>
                    <p className="text-lg text-slate-500 mb-10">
                        Prova GeoTapp nella tua prossima commessa. Ti accorgerai subito della differenza: pace mentale e clienti felici.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-block px-10 py-5 bg-cyan-500 text-white font-bold rounded-full text-xl hover:bg-cyan-600 transition-all transform hover:scale-105">
                            CREA ACCOUNT GRATUITO
                        </Link>
                    </div>
                    <p className="text-xs text-slate-400 mt-6">
                        Ideale per Imprese di Pulizie, Facility Management, Gestione B&B e Hotel.
                    </p>
                </div>
            </section>

        </div>
    );
}
