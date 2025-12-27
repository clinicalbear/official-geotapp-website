'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

interface ProductHeroProps {
    title: string;
    subtitle: string;
    description: string;
    color: string; // Tailwind color class for text/highlights
    gradient: string; // Tailwind gradient class
    icon: any; // Lucide Icon
    features?: string[];
    primaryLink: string;
    secondaryLink?: string;
}

export default function ProductHero({
    title, subtitle, description, color, gradient, icon: Icon, features = [], primaryLink, secondaryLink
}: ProductHeroProps) {
    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 ${color} mb-6`}>
                        <Icon size={16} />
                        <span className="text-sm font-bold uppercase tracking-widest">{subtitle}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white leading-tight">
                        {title}
                    </h1>

                    <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                        {description}
                    </p>

                    {features.length > 0 && (
                        <ul className="space-y-4 mb-10">
                            {features.map((feature, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="flex items-center gap-3 text-white"
                                >
                                    <div className={`p-1 rounded-full ${gradient}`}>
                                        <Check size={14} className="text-white" />
                                    </div>
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>
                    )}

                    <div className="flex flex-wrap gap-4">
                        <Link href={primaryLink} className={`px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r ${gradient} hover:scale-105 transition-transform shadow-lg`}>
                            Get Started
                        </Link>
                        {secondaryLink && (
                            <Link href={secondaryLink} className="px-8 py-4 rounded-xl font-bold text-white bg-surface border border-border hover:bg-white/5 transition-colors flex items-center gap-2">
                                Learn More <ArrowRight size={18} />
                            </Link>
                        )}
                    </div>
                </motion.div>

                {/* Visual/Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    <div className={`absolute inset-0 bg-gradient-to-tr ${gradient} rounded-full blur-[100px] opacity-20`} />
                    <div className="relative bg-surface border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
                        {/* Placeholder UI for the product */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                                <Icon size={24} className="text-white" />
                            </div>
                            <div>
                                <div className="h-2 w-32 bg-white/20 rounded mb-2" />
                                <div className="h-2 w-20 bg-white/10 rounded" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-32 bg-black/40 rounded-xl border border-white/5 p-4">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-3/4 bg-white/10 rounded" />
                                    <div className="h-2 w-1/2 bg-white/10 rounded" />
                                    <div className={`h-2 w-5/6 bg-gradient-to-r ${gradient} opacity-50 rounded`} />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-20 bg-white/5 rounded-xl border border-white/5" />
                                <div className="h-20 bg-white/5 rounded-xl border border-white/5" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
