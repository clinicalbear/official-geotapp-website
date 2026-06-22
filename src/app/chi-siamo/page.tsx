'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import FounderViewTracker from '@/components/analytics/FounderViewTracker';
import { Target, Users, Lock, Heart, Quote } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getLocaleFromPathname, localizePath } from '@/lib/i18n/locale-routing';

const VALUES_ICONS = [Target, Users, Lock, Heart];

export default function AboutPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const cs = getDictionary(locale).chi_siamo;
  const press = getDictionary(locale).stampa;

  return (
    <div className="bg-background min-h-screen pt-40 pb-24 overflow-hidden">

      {/* Hero */}
      <section className="relative px-6 text-center mb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-4xl relative"
        >
          <span className="text-primary text-sm font-bold uppercase tracking-widest mb-6 inline-block">
            {cs.badge}
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-8 leading-tight">
            {cs.hero_title_line1}
            <br />
            <span className="text-primary">{cs.hero_title_line2}</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-light text-balance mx-auto max-w-3xl">
            {cs.hero_desc}
          </p>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="container mx-auto px-6 max-w-3xl mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 p-8 rounded-2xl border border-white/10 bg-white/[0.02]"
        >
          {cs.stats.map((stat: { number: string; label: string }, i: number) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-xs md:text-sm text-text-secondary uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Story Timeline */}
      <section className="container mx-auto px-6 max-w-3xl mb-24">
        <div className="relative pl-14">
          <div className="absolute left-4 top-3 bottom-3 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
          <div className="space-y-12">
            {cs.story.map((para: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative"
              >
                <div className="absolute -left-10 top-1.5 w-8 h-8 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p
                  className="text-lg md:text-xl text-text-secondary leading-loose font-light"
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="container mx-auto px-6 max-w-4xl mb-24">
        <FounderViewTracker source="chi_siamo" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.02]"
        >
          <div className="shrink-0">
            <Image
              src="/michele-petraroli.webp"
              alt={`${cs.founder.name}, ${cs.founder.role} GeoTapp`}
              width={160}
              height={160}
              className="rounded-2xl border border-primary/30 object-cover shadow-lg shadow-primary/10"
            />
          </div>
          <div className="flex-1">
            <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 inline-block">
              {cs.founder.section_label}
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">
              {cs.founder.name}
            </h2>
            <p className="text-primary/90 font-medium mb-5">{cs.founder.role}</p>
            <p className="text-text-secondary leading-relaxed font-light mb-6">
              {cs.founder.bio}
            </p>
            <div className="mb-6">
              <div className="text-xs uppercase tracking-widest text-text-secondary mb-3">
                {cs.founder.expertise_label}
              </div>
              <div className="flex flex-wrap gap-2">
                {cs.founder.expertise.map((e: string) => (
                  <span key={e} className="px-3 py-1.5 rounded-full text-sm border border-white/10 bg-white/[0.03] text-text-secondary">
                    {e}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/michele-petraroli-532545397/"
                target="_blank"
                rel="noopener noreferrer me"
                className="px-5 py-2.5 rounded-xl bg-[#0A66C2] text-white font-semibold text-sm hover:bg-[#0a5cb0] transition-colors"
              >
                {cs.founder.cta_linkedin}
              </a>
              <a
                href="/contact"
                className="px-5 py-2.5 rounded-xl border border-primary/40 text-foreground font-semibold text-sm hover:bg-primary/10 transition-colors"
              >
                {cs.founder.cta_email}
              </a>
              <a
                href={localizePath('/stampa/', locale ?? 'it')}
                className="px-5 py-2.5 rounded-xl border border-white/15 text-text-secondary font-semibold text-sm hover:border-primary/40 hover:text-primary transition-colors"
              >
                {press.hero_title}
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Mission Quote */}
      <section className="container mx-auto px-6 max-w-4xl mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-10 md:p-14 rounded-2xl bg-primary/10 border border-primary/25 overflow-hidden text-center"
        >
          <div className="absolute top-4 left-6 text-primary/15 select-none pointer-events-none">
            <Quote size={80} />
          </div>
          <p className="relative text-2xl md:text-3xl font-display font-bold text-foreground leading-snug">
            {cs.mission_quote}
          </p>
        </motion.div>
      </section>

      {/* Values Grid */}
      <section className="container mx-auto px-6 max-w-6xl mb-24">
        <h2 className="text-3xl font-bold text-foreground font-display mb-12 text-center">
          {cs.values_title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cs.values.map((item: { title: string; desc: string }, i: number) => {
            const Icon = VALUES_ICONS[i] ?? Target;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-foreground font-display mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed font-light text-sm">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-12 md:p-20 rounded-3xl overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
          <div className="absolute inset-0 border border-primary/20 rounded-3xl" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">
              {cs.cta_title}
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10 font-light">
              {cs.cta_desc}
            </p>
            <a
              href="/contact"
              className="btn-modern"
            >
              {cs.cta_btn}
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
