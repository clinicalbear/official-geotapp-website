'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMapPin, FiSmartphone, FiBarChart2 } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

// Define types (duplicated from page types or imported if shared)
interface Feature {
    id: number;
    icon: string;
    title: string;
    description: string;
}

interface HomepageData {
    hero_badge: string;
    hero_title: string;
    hero_subtitle: string;
    hero_cta_primary_text: string;
    hero_cta_primary_link: string;
    hero_cta_secondary_text: string;
    hero_cta_secondary_link: string;
    features_title: string;
    features_subtitle: string;
    features: Feature[];
    cta_title: string;
    cta_subtitle: string;
    cta_button_text: string;
    cta_button_link: string;
}

export default function LandingPage({ data }: { data: HomepageData }) {
    const containerRef = useRef(null);
    const heroTitleRef = useRef(null);
    const blob1Ref = useRef(null);
    const blob2Ref = useRef(null);
    const featuresRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Parallax Blobs
            gsap.to(blob1Ref.current, {
                yPercent: 50,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
            gsap.to(blob2Ref.current, {
                yPercent: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Hero Text Reveal
            gsap.fromTo(heroTitleRef.current,
                { y: 100, opacity: 0, rotateX: -20 },
                { y: 0, opacity: 1, rotateX: 0, duration: 1.2, ease: "power4.out", delay: 0.2 }
            );

            // Features Stagger
            ScrollTrigger.batch(".feature-card", {
                onEnter: batch => gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    overwrite: true,
                    duration: 0.8,
                    ease: "power3.out"
                }),
                start: "top 85%"
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    if (!data) {
        return (
            <section className="min-h-screen flex items-center justify-center">
                <p>Dati non disponibili.</p>
            </section>
        );
    }

    return (
        <div ref={containerRef}>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-geotapp-50 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-bg.png"
                        alt="Background"
                        fill
                        className="object-cover opacity-60 mix-blend-multiply"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-geotapp-50"></div>
                </div>

                {/* Background Elements */}
                <div ref={blob1Ref} className="absolute top-20 right-20 w-72 h-72 bg-geotapp-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse z-0"></div>
                <div ref={blob2Ref} className="absolute bottom-20 left-20 w-72 h-72 bg-geotapp-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse z-0" style={{ animationDelay: '2s' }}></div>

                <div className="relative max-w-7xl mx-auto px-6 py-20 text-center perspective-1000">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-2 bg-white text-geotapp-700 rounded-full text-sm font-semibold mb-6 shadow-sm border border-geotapp-100">
                            {data.hero_badge}
                        </span>
                    </motion.div>

                    <div className="overflow-hidden mb-6">
                        <h1
                            ref={heroTitleRef}
                            className="text-5xl md:text-7xl font-bold text-gray-900 font-display leading-tight"
                            dangerouslySetInnerHTML={{ __html: data.hero_title }}
                        >
                        </h1>
                    </div>

                    <motion.p
                        className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {data.hero_subtitle}
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <Link href={data.hero_cta_primary_link} className="px-8 py-4 bg-geotapp-primary text-white font-semibold rounded-lg shadow-lg hover:bg-geotapp-600 transition transform hover:scale-105">
                            {data.hero_cta_primary_text}
                        </Link>
                        <Link href={data.hero_cta_secondary_link} className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition shadow-sm">
                            {data.hero_cta_secondary_text}
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 font-display text-gray-900">{data.features_title}</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{data.features_subtitle}</p>
                    </div>

                    <div ref={featuresRef} className="grid md:grid-cols-3 gap-8">
                        {data.features.map((feature, i) => {
                            const IconComponent = {
                                "map-pin": FiMapPin,
                                "smartphone": FiSmartphone,
                                "bar-chart-2": FiBarChart2
                            }[feature.icon] || FiMapPin;

                            return (
                                <div
                                    key={feature.id || i}
                                    className="feature-card p-8 rounded-2xl transition transform hover:scale-105 bg-white border border-gray-100 shadow-sm hover:shadow-xl group opacity-0 translate-y-8"
                                >
                                    <div className="text-4xl mb-4 p-4 bg-geotapp-50 rounded-xl inline-block group-hover:bg-geotapp-100 transition text-geotapp-primary">
                                        <IconComponent />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 font-display text-gray-900">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 text-center bg-gray-900 text-white relative overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-geotapp-primary rounded-full filter blur-[100px]"></div>
                    <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-geotapp-primary rounded-full filter blur-[100px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">{data.cta_title}</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
                        {data.cta_subtitle}
                    </p>
                    <Link href={data.cta_button_link} className="inline-block px-10 py-4 font-bold rounded-lg transition transform hover:scale-105 bg-geotapp-primary text-white shadow-2xl hover:shadow-geotapp-primary/50">
                        {data.cta_button_text}
                    </Link>
                </div>
            </section>
        </div>
    );
}
