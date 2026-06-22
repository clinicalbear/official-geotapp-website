'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Copy, Check, ExternalLink } from 'lucide-react';
import type { SiteDictionary } from '@/lib/i18n/dictionaries';
import type { AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';
import { PRESS_RELEASES, PRESS_COVERAGE, hasPress } from '@/lib/press/data';

// ── tiny hook: show a transient "copied" check for 2s ──────────────────────
function useCopy() {
  const [copied, setCopied] = useState<string | null>(null);

  function copy(key: string, text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied((prev) => (prev === key ? null : prev)), 2000);
    });
  }

  return { copied, copy };
}

export default function StampaView({
  d,
  locale,
}: {
  d: SiteDictionary['stampa'];
  locale: AppLocale;
}) {
  const { copied, copy } = useCopy();

  return (
    <div className="bg-background min-h-screen pt-40 pb-24 overflow-hidden">

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
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
            {d.badge}
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-8 leading-tight">
            {d.hero_title}
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-light text-balance mx-auto max-w-3xl">
            {d.hero_desc}
          </p>
        </motion.div>
      </section>

      {/* ── 2. BOILERPLATE ──────────────────────────────────────────────── */}
      <section className="container mx-auto px-6 max-w-4xl mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-foreground font-display mb-8">
            {d.boilerplate_label}
          </h2>
          <div className="space-y-4">
            {/* Short boilerplate */}
            <div className="relative group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary/30 transition-colors duration-300">
              <p className="text-text-secondary leading-relaxed font-light pr-12">
                {d.boilerplate_short}
              </p>
              <button
                type="button"
                aria-label="Copy short boilerplate"
                onClick={() => copy('short', d.boilerplate_short)}
                className="absolute top-4 right-4 p-2 rounded-lg border border-white/10 bg-white/[0.04] text-text-secondary hover:text-primary hover:border-primary/40 transition-all duration-200"
              >
                {copied === 'short' ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Long boilerplate */}
            <div className="relative group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary/30 transition-colors duration-300">
              <p className="text-text-secondary leading-relaxed font-light pr-12">
                {d.boilerplate_long}
              </p>
              <button
                type="button"
                aria-label="Copy long boilerplate"
                onClick={() => copy('long', d.boilerplate_long)}
                className="absolute top-4 right-4 p-2 rounded-lg border border-white/10 bg-white/[0.04] text-text-secondary hover:text-primary hover:border-primary/40 transition-all duration-200"
              >
                {copied === 'long' ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── 3. FACTS ────────────────────────────────────────────────────── */}
      <section className="container mx-auto px-6 max-w-4xl mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-foreground font-display mb-8">
            {d.facts_label}
          </h2>
          <div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
            <dl className="divide-y divide-white/[0.06]">
              {d.facts.filter((f) => !f.v.includes('{{')).map((f, i) => (
                <div key={i} className="flex gap-6 py-4 first:pt-0 last:pb-0">
                  <dt className="w-32 shrink-0 text-sm font-semibold text-primary uppercase tracking-wide pt-0.5">
                    {f.k}
                  </dt>
                  <dd className="text-text-secondary leading-relaxed font-light">
                    {f.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </section>

      {/* ── 4. FOUNDER ──────────────────────────────────────────────────── */}
      <section className="container mx-auto px-6 max-w-4xl mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.02]"
        >
          <div className="shrink-0 flex flex-col items-center gap-3">
            <Image
              src="/michele-petraroli.webp"
              alt="Michele Angelo Petraroli, fondatore di GeoTapp"
              width={160}
              height={160}
              className="rounded-2xl border border-primary/30 object-cover shadow-lg shadow-primary/10"
            />
            <a
              href="/michele-petraroli.webp"
              download
              className="text-xs text-primary/80 underline underline-offset-4 hover:text-primary transition-colors"
            >
              {d.photo_download}
            </a>
          </div>
          <div className="flex-1">
            <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 inline-block">
              {d.founder_label}
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Michele Angelo Petraroli
            </h2>
            <p className="text-text-secondary leading-relaxed font-light">
              {d.founder_bio}
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── 5. RESOURCES ────────────────────────────────────────────────── */}
      <section className="container mx-auto px-6 max-w-4xl mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-foreground font-display mb-4">
            {d.resources_label}
          </h2>
          <p className="text-text-secondary font-light mb-8">{d.resources_intro}</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Logo download */}
            <a
              href="/LogoGeoTapp.webp"
              download
              className="flex items-center gap-3 p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
            >
              <span className="flex-1 font-medium text-foreground group-hover:text-primary transition-colors">
                {d.logo_download}
              </span>
              <ExternalLink size={16} className="text-text-secondary group-hover:text-primary transition-colors shrink-0" />
            </a>

            {/* Photo download (same asset as founder card) */}
            <a
              href="/michele-petraroli.webp"
              download
              className="flex items-center gap-3 p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
            >
              <span className="flex-1 font-medium text-foreground group-hover:text-primary transition-colors">
                {d.photo_download}
              </span>
              <ExternalLink size={16} className="text-text-secondary group-hover:text-primary transition-colors shrink-0" />
            </a>

            {/* GPS map (internal) */}
            <a
              href={localizePath('/risorse/gps-lavoratori-ue/', locale)}
              className="flex items-center gap-3 p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
            >
              <span className="flex-1 font-medium text-foreground group-hover:text-primary transition-colors">
                {d.asset_map}
              </span>
              <ExternalLink size={16} className="text-text-secondary group-hover:text-primary transition-colors shrink-0" />
            </a>

            {/* Facsimile template (internal) */}
            <a
              href={localizePath('/risorse/generatore-informativa-gps/', locale)}
              className="flex items-center gap-3 p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
            >
              <span className="flex-1 font-medium text-foreground group-hover:text-primary transition-colors">
                {d.asset_facsimile}
              </span>
              <ExternalLink size={16} className="text-text-secondary group-hover:text-primary transition-colors shrink-0" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── 6. CONTACT ──────────────────────────────────────────────────── */}
      <section className="container mx-auto px-6 max-w-4xl mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-10 rounded-3xl border border-primary/25 bg-primary/[0.04]"
        >
          <h2 className="text-3xl font-bold text-foreground font-display mb-6">
            {d.contact_label}
          </h2>
          <p className="text-text-secondary font-light mb-3">{d.contact_office}</p>
          <a
            href={`mailto:${d.contact_email}`}
            className="text-primary font-semibold hover:underline underline-offset-4 transition-colors"
          >
            {d.contact_email}
          </a>
        </motion.div>
      </section>

      {/* ── 7. PRESS RELEASES (gated) ───────────────────────────────────── */}
      {hasPress(PRESS_RELEASES) && (
        <section className="container mx-auto px-6 max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground font-display mb-8">
              {d.releases_label}
            </h2>
            <ul className="space-y-4">
              {PRESS_RELEASES.map((item, i) => (
                <li
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary/30 transition-colors duration-300"
                >
                  <time className="text-xs text-text-secondary shrink-0 font-mono">{item.date}</time>
                  <span className="text-xs text-primary uppercase tracking-wide shrink-0">{item.outlet}</span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>
      )}

      {/* ── 8. COVERAGE (gated) ─────────────────────────────────────────── */}
      {hasPress(PRESS_COVERAGE) && (
        <section className="container mx-auto px-6 max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground font-display mb-8">
              {d.coverage_label}
            </h2>
            <ul className="space-y-4">
              {PRESS_COVERAGE.map((item, i) => (
                <li
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary/30 transition-colors duration-300"
                >
                  <time className="text-xs text-text-secondary shrink-0 font-mono">{item.date}</time>
                  <span className="text-xs text-primary uppercase tracking-wide shrink-0">{item.outlet}</span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>
      )}

    </div>
  );
}
