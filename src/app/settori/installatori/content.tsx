'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, MapPin, FileText, Shield, Smartphone } from 'lucide-react';
import Image from 'next/image';

export default function InstallatoriContent() {
    return (
        <div className="bg-white min-h-screen text-slate-900 font-sans">

            {/* 1. HERO SECTION - L'ANCORA VISIVA */}
            <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-slate-50">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold tracking-wide mb-6">
                                Per Elettricisti, Idraulici e Manutentori
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
                                Smetti di regalare ore di lavoro ai clienti.
                            </h1>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                Il primo sistema di timbratura digitale pensato per chi lavora col cacciavite in mano, non col mouse. Elimina i foglietti di carta, azzera le contestazioni e recupera fino a <span className="font-bold text-indigo-600">300€ al mese per ogni furgone</span>.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact" className="px-8 py-4 bg-primary text-white font-bold rounded-xl text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 text-center">
                                    PROVALO GRATIS IN CANTIERE
                                </Link>
                                <div className="text-xs text-slate-400 mt-2 text-center sm:text-left sm:mt-0 sm:flex sm:items-center px-2">
                                    Nessuna carta di credito richiesta.
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                {/* Placeholder for Technician Image - Using a colored box with icon for now if image not available */}
                                <div className="bg-slate-800 aspect-[4/3] flex items-center justify-center relative">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900 to-slate-800 opacity-90"></div>
                                    <Smartphone size={64} className="text-white relative z-10 opacity-20" />
                                    <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-white">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                                                <CheckCircle2 size={20} className="text-white" />
                                            </div>
                                            <div>
                                                <div className="font-bold">Intervento Terminato</div>
                                                <div className="text-xs text-slate-300">Via Roma 45 • 2h 30min</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0"></div>
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-0"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. PROBLEM AGITATION - IL DOLORE */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Ti suona familiare questo scenario?</h2>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-red-200 transition-colors group">
                            <div className="p-3 bg-red-100 text-red-600 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform">
                                <FileText size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-3 text-slate-900">I foglietti sporchi</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                È venerdì sera. Guardi la pila di foglietti stropicciati e macchiati sulla scrivania. 'Rossi - 4 ore'. Ma tu sai che c'è stato un imprevisto. Erano davvero 4 ore?
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-red-200 transition-colors group">
                            <div className="p-3 bg-red-100 text-red-600 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform">
                                <Clock size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-3 text-slate-900">Il dubbio costante</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Senti quel nodo allo stomaco? È la sensazione di stare lasciando soldi sul tavolo. Soldi tuoi. Ti chiedi se il viaggio è stato segnato correttamente o regalato.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-red-200 transition-colors group">
                            <div className="p-3 bg-red-100 text-red-600 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform">
                                <Shield size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-3 text-slate-900">Le contestazioni</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Il cliente chiama: "Il tuo tecnico è arrivato alle 9:30, non alle 9:00!". E tu non hai nulla in mano, se non la parola del tuo ragazzo, per dimostrare che era lì.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SOLUTION - LA VISIONE FUTURE PACE */}
            <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ora, immagina di svegliarti domani con GeoTapp.</h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Il tuo capocantiere digitale invisibile che lavora per te, mentre tu ti occupi di far crescere l'azienda.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/50 text-slate-900 font-bold text-xl">1</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Un tocco. Lavoro iniziato.</h3>
                                    <p className="text-slate-400">Il tuo tecnico arriva dal cliente (o in cantiere). Tira fuori il telefono. Clicca Start. Finito. Niente carta, niente penna.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-600/50 text-white font-bold text-xl">2</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Tu sai tutto, in tempo reale.</h3>
                                    <p className="text-slate-400">Sei in ufficio o al bar? Ti arriva una notifica. Sai dove sono. Sai che stanno lavorando. La mappa si aggiorna.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shrink-0 shadow-lg shadow-green-500/50 text-white font-bold text-xl">3</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Certezza matematica.</h3>
                                    <p className="text-slate-400">A fine intervento, il sistema registra orario e GPS. Hai la prova inconfutabile per fatturare ogni singolo minuto.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl">
                            <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-6 border-b border-slate-700 pb-4">Riepilogo Giornaliero - Squadra A</div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span>Mario R. (Elettricista)</span>
                                    </div>
                                    <span className="text-green-400 font-mono">08:00 - 17:30</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span>Luca B. (Apprendista)</span>
                                    </div>
                                    <span className="text-green-400 font-mono">08:15 - 17:15</span>
                                </div>
                                <div className="mt-6 p-4 bg-green-500/10 rounded-xl border border-green-500/20 text-center">
                                    <div className="text-green-400 font-bold text-2xl">€ 1.250,00</div>
                                    <div className="text-green-500/60 text-xs uppercase">Valore Lavoro Generato Oggi</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FEATURES & BENEFITS bullet points */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <MapPin className="text-primary mb-4" size={32} />
                            <h3 className="font-bold text-xl text-slate-900 mb-3">Geofence Intelligente</h3>
                            <p className="text-slate-600">Non devi fare lo sceriffo. L'app ti avvisa se qualcuno prova a timbrare dal bar invece che dal cantiere designato.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <FileText className="text-primary mb-4" size={32} />
                            <h3 className="font-bold text-xl text-slate-900 mb-3">Rapportini Parlanti</h3>
                            <p className="text-slate-600">Trasforma i dati grezzi in report PDF eleganti che puoi allegare alla fattura. Il cliente paga senza fiatare.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <Shield className="text-primary mb-4" size={32} />
                            <h3 className="font-bold text-xl text-slate-900 mb-3">Privacy Blindata</h3>
                            <p className="text-slate-600">Non spiamo i tuoi dipendenti. Tracciamo il lavoro, non la vita privata. Rispetto per loro, sicurezza per te.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. SOCIAL PROOF */}
            <section className="py-24 px-6 bg-white border-t border-slate-100">
                <div className="container mx-auto max-w-3xl text-center">
                    <div className="text-4xl text-primary mb-6">"</div>
                    <blockquote className="text-2xl  text-slate-800 font-light italic mb-8 leading-relaxed">
                        Prima litigavo ogni mese con i clienti per le ore di viaggio. Da quando uso GeoTapp, allego il report GPS alla fattura. <span className="font-bold bg-green-100 text-green-800 px-1">Le contestazioni sono scese a zero.</span> Dormo sonni tranquilli.
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">SR</div>
                        <div className="text-left">
                            <div className="font-bold text-slate-900">Stefano R.</div>
                            <div className="text-sm text-slate-500">Titolare Termoidraulica SR</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FINAL CTA - SCARCITY & URGENCY */}
            <section className="py-32 bg-slate-900 text-white text-center px-6">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Non lasciare che un altro mese passi con i foglietti di carta.</h2>
                    <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                        Configurazione in 3 minuti. Se non ti fa risparmiare tempo già dalla prima settimana, non ci devi nulla.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-block px-10 py-5 bg-primary text-white font-bold rounded-xl text-xl hover:bg-white hover:text-slate-900 transition-all shadow-glow hover:scale-105">
                            INIZIA LA TUA PROVA GRATUITA
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
