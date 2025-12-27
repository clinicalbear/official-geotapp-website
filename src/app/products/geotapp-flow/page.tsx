'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, Database, CreditCard, Box,
    Layers, Truck, Receipt,
    Zap, Smartphone, BarChart3, Users,
    X, Server, Globe, Cpu
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { GEOTAPP_SYSTEMS, SystemDetail } from './systems-data';
import { usePathname } from 'next/navigation';
import itDict from '@/dictionaries/it.json';
import enDict from '@/dictionaries/en.json';

// --- SYSTEM CARD COMPONENT (LIGHT THEME) ---
const SystemCard = ({ system, onClick }: { system: SystemDetail & { label_open?: string }, onClick: (s: SystemDetail) => void }) => {
    const Icon = system.icon;

    // Map colors to tailwind classes for Light Mode
    const getColorClasses = (color: string) => {
        switch (color) {
            case 'blue': return { text: 'text-blue-600', bg: 'bg-blue-50', letter: 'text-blue-600' };
            case 'yellow': return { text: 'text-yellow-600', bg: 'bg-yellow-50', letter: 'text-yellow-600' };
            case 'green': return { text: 'text-green-600', bg: 'bg-green-50', letter: 'text-green-600' };
            case 'purple': return { text: 'text-purple-600', bg: 'bg-purple-50', letter: 'text-purple-600' };
            case 'cyan': return { text: 'text-cyan-600', bg: 'bg-cyan-50', letter: 'text-cyan-600' };
            case 'red': return { text: 'text-red-600', bg: 'bg-red-50', letter: 'text-red-600' };
            case 'orange': return { text: 'text-orange-600', bg: 'bg-orange-50', letter: 'text-orange-600' };
            case 'fuchsia': return { text: 'text-fuchsia-600', bg: 'bg-fuchsia-50', letter: 'text-fuchsia-600' };
            case 'indigo': return { text: 'text-indigo-600', bg: 'bg-indigo-50', letter: 'text-indigo-600' };
            default: return { text: 'text-blue-600', bg: 'bg-blue-50', letter: 'text-blue-600' };
        }
    };

    const styles = getColorClasses(system.color);

    return (
        <motion.div
            onClick={() => onClick(system)}
            whileHover={{ y: -5 }}
            className="cursor-pointer p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group relative overflow-hidden"
        >
            {/* Background Letter - Flow Theme Style */}
            <div className={`absolute -right-4 -top-4 font-black text-9xl opacity-5 group-hover:opacity-10 transition-opacity rotate-12 group-hover:rotate-6 ${styles.letter}`}>
                {system.codeName.charAt(0)}
            </div>

            <div className="flex items-center gap-5 mb-6 relative z-10">
                <div className={`p-4 rounded-xl shadow-sm border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-colors ${styles.bg} ${styles.text}`}>
                    <Icon size={32} />
                </div>
                <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">{system.codeName}</div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{system.systemName}</h3>
                </div>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm relative z-10 border-l-2 border-slate-200 pl-4 group-hover:border-blue-400 transition-colors">
                {system.shortDescription}
            </p>
            <div className="mt-8 flex items-center text-blue-600 font-bold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                [ {system.label_open || 'APRI DOSSIER'} ] <ArrowRight size={14} className="ml-2" />
            </div>
        </motion.div>
    );
};

const Sectiondivider = ({ title }: { title: string }) => (
    <div className="flex items-center gap-6 py-16">
        <div className="h-px bg-slate-200 flex-grow"></div>
        <div className="flex items-center gap-3 px-6 py-2 border border-slate-200 rounded-full bg-white shadow-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] font-mono">{title}</span>
        </div>
        <div className="h-px bg-slate-200 flex-grow"></div>
    </div>
);

export default function GeoTappApp() {
    const [selectedSystem, setSelectedSystem] = useState<SystemDetail | null>(null);
    const pathname = usePathname();
    const isEn = pathname?.startsWith('/en');
    const dict = isEn ? enDict : itDict;
    const flowDict = dict.product_pages.flow;


    // Merge systems with dictionary
    const systems = GEOTAPP_SYSTEMS.map(sys => {
        // @ts-ignore
        const t = flowDict.systems[sys.id];
        return {
            ...sys,
            systemName: t?.name || sys.systemName,
            shortDescription: t?.short || sys.shortDescription,
            fullDescription: t?.full || sys.fullDescription,
            label_open: isEn ? 'OPEN DOSSIER' : 'APRI DOSSIER'
        };
    });

    const getSystem = (id: string) => systems.find(s => s.id === id)!;
    const getLink = (path: string) => isEn ? `/en${path}` : path;


    return (
        <div className="bg-background min-h-screen text-slate-900 pt-32 pb-24 overflow-x-hidden">

            {/* SYSTEM DETAIL MODAL (LIGHT THEME) */}
            <AnimatePresence>
                {selectedSystem && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedSystem(null)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />
                        <motion.div
                            layoutId={`card-${selectedSystem.id}`}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
                        >
                            {/* Sidebar */}
                            <div className="bg-slate-50 p-10 md:w-1/3 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col justify-between shrink-0 relative overflow-hidden">

                                <div>
                                    <div className={`p-5 bg-white rounded-2xl shadow-xl inline-block mb-8 border border-slate-100 text-blue-600`}>
                                        <selectedSystem.icon size={56} />
                                    </div>
                                    <div className="font-mono text-xs text-slate-400 mb-2 tracking-widest">{selectedSystem.codeName}</div>
                                    <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6 leading-tight">
                                        {selectedSystem.systemName}
                                    </h3>
                                    <div className="w-20 h-1 bg-blue-500 rounded-full mb-8"></div>
                                </div>
                                <div className="font-mono text-xs text-slate-500 space-y-2 border-t border-slate-200 pt-6">
                                    <p dangerouslySetInnerHTML={{ __html: flowDict.modal.status }}></p>
                                    <p dangerouslySetInnerHTML={{ __html: flowDict.modal.encryption }}></p>
                                    <p dangerouslySetInnerHTML={{ __html: flowDict.modal.access }}></p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-10 md:p-14 md:w-2/3 prose prose-slate max-w-none relative">
                                <button
                                    onClick={() => setSelectedSystem(null)}
                                    className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-10 text-slate-500"
                                >
                                    <X size={24} />
                                </button>

                                {/* Render HTML Content safely */}
                                <div className="markdown-content text-lg leading-relaxed text-slate-700 font-medium" dangerouslySetInnerHTML={{ __html: selectedSystem.fullDescription.replace(/\n/g, '<br/>') }} />

                                <div className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center">
                                    <span className="font-mono text-xs text-slate-400">SESSION ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                                    <button
                                        onClick={() => setSelectedSystem(null)}
                                        className="px-8 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg"
                                    >
                                        {flowDict.modal.close}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>


            {/* HERO SECTION (LIGHT) */}
            <section className="container mx-auto px-6 max-w-7xl text-center mb-32 relative z-10">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-mono text-xs tracking-widest">
                        <Server size={14} className="animate-pulse" />
                        {flowDict.hero_badge}
                    </div>

                    <h1
                        className="text-5xl md:text-8xl font-display font-bold text-slate-900 mb-8 leading-tight tracking-tight"
                        dangerouslySetInnerHTML={{ __html: flowDict.hero_title }}
                    >
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-4xl mx-auto mb-16">
                        {flowDict.hero_subtitle}
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        viewport={{ once: true }}
                        className="relative mx-auto mt-16 max-w-6xl"
                    >
                        {/* Visual Placeholder for Dashboard */}
                        <div className="relative bg-slate-50 rounded-2xl shadow-2xl border border-slate-200 aspect-[16/9] flex items-center justify-center overflow-hidden">
                            <div className="text-center z-10">
                                <Cpu size={80} className="text-blue-500 mx-auto mb-6 opacity-50" />
                                <div className="text-slate-300 font-mono text-3xl font-bold tracking-widest">{flowDict.visual_placeholder}</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* SYSTEM GRID */}
            <section className="container mx-auto px-6 max-w-7xl">

                <div className="text-center max-w-3xl mx-auto mb-24">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">{flowDict.grid_title}</h2>
                    <p className="text-xl text-slate-500">
                        {flowDict.grid_subtitle}
                    </p>
                </div>

                {/* SECTOR 1 */}
                <Sectiondivider title={flowDict.sectors["1"]} />
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <SystemCard system={getSystem('nexus-core')} onClick={setSelectedSystem} />
                    <SystemCard system={getSystem('titan-flow')} onClick={setSelectedSystem} />
                    <SystemCard system={getSystem('ledger-prime')} onClick={setSelectedSystem} />
                </div>

                {/* SECTOR 2 */}
                <Sectiondivider title={flowDict.sectors["2"]} />
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <SystemCard system={getSystem('quantum-logistics')} onClick={setSelectedSystem} />
                    <SystemCard system={getSystem('supply-command')} onClick={setSelectedSystem} />
                    <SystemCard system={getSystem('the-architect')} onClick={setSelectedSystem} />
                </div>

                {/* SECTOR 3 */}
                <Sectiondivider title={flowDict.sectors["3"]} />
                <div className="grid md:grid-cols-3 gap-8">
                    <SystemCard system={getSystem('the-auditor')} onClick={setSelectedSystem} />
                    <SystemCard system={getSystem('the-uplink')} onClick={setSelectedSystem} />
                    <SystemCard system={getSystem('the-oracle')} onClick={setSelectedSystem} />
                </div>

                {/* CTA */}
                <div className="text-center py-32">
                    <h2 className="text-4xl md:text-6xl font-bold mb-12 text-slate-900">{flowDict.cta_title}</h2>
                    <Link href={getLink("/pricing")} className="inline-flex items-center gap-4 px-12 py-6 bg-blue-600 text-white font-bold rounded-xl text-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 group">
                        <Globe className="group-hover:animate-spin-slow" /> {flowDict.cta_button}
                    </Link>
                </div>

            </section>
        </div>
    );
}
