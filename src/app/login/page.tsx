'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Database, Smartphone, ArrowRight } from 'lucide-react';
import itDict from '@/dictionaries/it.json';
import enDict from '@/dictionaries/en.json';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LoginPage() {
    const pathname = usePathname();
    const isEn = pathname?.startsWith('/en');
    const dict = isEn ? enDict.login_hub : itDict.login_hub;
    const commonDict = isEn ? enDict : itDict;

    return (
        <main className="min-h-screen bg-off-white font-sans selection:bg-primary/30">
            <Navbar />

            <section className="pt-40 pb-20 container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6"
                        dangerouslySetInnerHTML={{ __html: dict.title }}
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-text-secondary"
                    >
                        {dict.subtitle}
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Flow Card */}
                    <motion.a
                        href={`${process.env.NEXT_PUBLIC_FLOW_URL || '#'}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="group relative bg-white rounded-3xl p-8 border border-border hover:border-flow/30 shadow-lg hover:shadow-2xl hover:shadow-flow/10 transition-all duration-300 flex flex-col items-center text-center"
                    >
                        <div className="w-20 h-20 bg-flow/10 text-flow rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Database size={40} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-flow transition-colors">GeoTapp FLOW</h2>
                        <p className="text-text-secondary mb-8">{dict.flow.desc}</p>
                        <div className="mt-auto flex items-center gap-2 text-flow font-bold">
                            {dict.flow.btn} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </motion.a>

                    {/* TimeTracker Card */}
                    <motion.a
                        href={`${process.env.NEXT_PUBLIC_TIMETRACKER_URL || '#'}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="group relative bg-white rounded-3xl p-8 border border-border hover:border-app/30 shadow-lg hover:shadow-2xl hover:shadow-app/10 transition-all duration-300 flex flex-col items-center text-center"
                    >
                        <div className="w-20 h-20 bg-app/10 text-app rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Smartphone size={40} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-app transition-colors">GeoTapp TimeTracker</h2>
                        <p className="text-text-secondary mb-8">{dict.timetracker.desc}</p>
                        <div className="mt-auto flex items-center gap-2 text-app font-bold">
                            {dict.timetracker.btn} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </motion.a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
