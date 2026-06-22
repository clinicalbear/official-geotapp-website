'use client';

import { useState } from 'react';
import type { ComponentType } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Copy, Check, ExternalLink, Download, Linkedin, Instagram, Facebook } from 'lucide-react';

// Logo X (non presente in lucide): SVG inline, accetta `size` come le icone lucide.
function XIcon({ size = 18 }: { size?: number | string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

// Logo TikTok (non presente in lucide): SVG inline.
function TikTokIcon({ size = 18 }: { size?: number | string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

// Profili social ufficiali del brand (gli stessi del footer e del sameAs JSON-LD).
const PRESS_SOCIALS: { label: string; href: string; Icon: ComponentType<{ size?: number | string }> }[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/110850300/', Icon: Linkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/geotapp_official/', Icon: Instagram },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61573628884608', Icon: Facebook },
  { label: 'X', href: 'https://x.com/GeoTappOfficial', Icon: XIcon },
  { label: 'TikTok', href: 'https://www.tiktok.com/@geotapp', Icon: TikTokIcon },
];
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
  allResourcesLabel,
}: {
  d: SiteDictionary['stampa'];
  locale: AppLocale;
  allResourcesLabel: string;
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

          {/* Brand logos — preview + download (GeoTapp + products) */}
          <h3 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-4">
            {d.logo_download}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { name: 'GeoTapp', src: '/LogoGeoTapp.webp' },
              { name: 'GeoTapp Flow', src: '/logoFlow.webp' },
              { name: 'TimeTracker', src: '/logoTT.webp' },
              { name: 'Verifier', src: '/logoVerifier.webp' },
            ].map((logo) => (
              <a
                key={logo.name}
                href={logo.src}
                download
                className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
              >
                <span className="flex h-20 w-full items-center justify-center rounded-xl bg-white/[0.06] p-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={`Logo ${logo.name}`}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </span>
                <span className="flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {logo.name}
                  <Download size={14} className="text-text-secondary group-hover:text-primary shrink-0" />
                </span>
              </a>
            ))}
          </div>

          {/* Founder photo (preview) + tools */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Photo download with preview (same asset as founder card) */}
            <a
              href="/michele-petraroli.webp"
              download
              className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
            >
              <Image
                src="/michele-petraroli.webp"
                alt={d.photo_download}
                width={56}
                height={56}
                className="h-14 w-14 rounded-xl object-cover border border-white/10 shrink-0"
              />
              <span className="flex-1 font-medium text-foreground group-hover:text-primary transition-colors">
                {d.photo_download}
              </span>
              <Download size={16} className="text-text-secondary group-hover:text-primary transition-colors shrink-0" />
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

            {/* Full resources hub (internal) — utile a chi scrive un pezzo */}
            <a
              href={localizePath('/risorse/', locale)}
              className="flex items-center gap-3 p-5 rounded-2xl border border-primary/20 bg-primary/[0.04] hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group sm:col-span-2"
            >
              <span className="flex-1 font-medium text-foreground group-hover:text-primary transition-colors">
                {allResourcesLabel}
              </span>
              <ExternalLink size={16} className="text-primary shrink-0" />
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

          {/* Profili social ufficiali (visibili, non solo nel JSON-LD) */}
          <div className="mt-6 flex items-center gap-3">
            {PRESS_SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-text-secondary hover:text-primary hover:border-primary/30 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
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
