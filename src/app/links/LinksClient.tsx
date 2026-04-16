'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin, Camera, FileCheck, Zap } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

export type Article = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  url: string;
  image: string | null;
};

type Props = { articles: Article[] };

// ─── UTM helpers ──────────────────────────────────────────────────────────────

const UTM = 'utm_source=instagram&utm_medium=bio&utm_campaign=links_page';

function utm(href: string, content: string): string {
  const sep = href.includes('?') ? '&' : '?';
  return `${href}${sep}${UTM}&utm_content=${content}`;
}

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function TrustBadge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full whitespace-nowrap">
      <Icon size={12} className="text-primary" strokeWidth={2.5} />
      {label}
    </span>
  );
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.div variants={fadeUp} custom={index}>
      <Link
        href={utm(article.url, `article_${article.slug}`)}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex gap-3.5 p-3 rounded-2xl border border-slate-100 hover:border-primary/25 hover:bg-[#fafff4] transition-all duration-200 active:scale-[0.98]"
      >
        {/* Thumbnail */}
        <div className="relative shrink-0 w-[72px] h-[52px] rounded-xl overflow-hidden bg-slate-100">
          {article.image ? (
            <img
              src={article.image}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500"
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <FileCheck size={18} className="text-slate-300" />
            </div>
          )}
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <h3 className="font-semibold text-[13px] leading-snug text-slate-800 line-clamp-2 group-hover:text-primary transition-colors duration-150">
            {article.title}
          </h3>
          <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 leading-normal">
            {article.excerpt}
          </p>
        </div>

        {/* Arrow */}
        <div className="shrink-0 self-center text-slate-200 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-150">
          <ArrowRight size={15} />
        </div>
      </Link>
    </motion.div>
  );
}

function QuickLink({ label, href }: { label: string; href: string }) {
  return (
    <motion.div variants={fadeUp}>
      <Link
        href={href}
        className="group flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-transparent hover:border-slate-200 hover:bg-white text-sm font-medium text-slate-600 hover:text-slate-900 transition-all duration-150 active:scale-[0.98]"
      >
        {label}
        <ArrowRight
          size={14}
          className="text-slate-300 group-hover:text-slate-400 group-hover:translate-x-0.5 transition-all duration-150"
        />
      </Link>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function LinksClient({ articles }: Props) {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/20 selection:text-slate-900">

      {/* ── Background accent ─── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[480px] h-[480px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* ── NAV ─── */}
      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative flex items-center justify-between px-6 py-5 max-w-md mx-auto"
      >
        <Link
          href={utm('https://geotapp.com', 'header_logo')}
          className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
          aria-label="GeoTapp — homepage"
        >
          {/* Inline SVG logo mark + wordmark */}
          <svg width="110" height="24" viewBox="0 0 110 24" fill="none" aria-hidden="true">
            {/* Pin/location mark */}
            <path
              d="M10 2C6.69 2 4 4.69 4 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.31-2.69-6-6-6zm0 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
              fill="#8FC436"
            />
            {/* Wordmark */}
            <text
              x="22"
              y="17"
              fontFamily="'Poppins', sans-serif"
              fontWeight="700"
              fontSize="14"
              fill="#0f172a"
              letterSpacing="-0.3"
            >
              GeoTapp
            </text>
          </svg>
        </Link>

        <span className="text-[10px] font-semibold text-slate-400 tracking-[0.12em] uppercase">
          Instagram
        </span>
      </motion.nav>

      {/* ── HERO ─── */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={stagger}
        className="relative px-6 pt-4 pb-10 max-w-md mx-auto text-center"
      >
        {/* Pulse badge */}
        <motion.div variants={fadeUp} custom={0} className="flex justify-center mb-6">
          <span className="relative inline-flex items-center gap-2 text-xs font-semibold text-primary bg-primary/8 border border-primary/15 px-3.5 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Verifica lavoro sul campo
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={fadeUp}
          custom={1}
          className="font-display font-bold text-[2rem] leading-[1.15] text-slate-900 mb-4 tracking-tight"
        >
          Prove GPS, foto e report
          <br />
          <span className="text-primary">verificabili. Sul campo.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-[280px] mx-auto"
        >
          Certifica ogni intervento in tempo reale. Niente carta, niente dubbi, zero contestazioni.
        </motion.p>

        {/* CTA primaria */}
        <motion.div variants={fadeUp} custom={3}>
          <Link
            href={utm('https://geotapp.com/it/contact/', 'cta_demo')}
            className="group flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white font-semibold text-[15px] rounded-2xl hover:bg-primary hover:text-slate-900 transition-all duration-200 mb-3 shadow-lg shadow-slate-900/8 active:scale-[0.98]"
          >
            Prenota una demo
            <ArrowRight
              size={17}
              className="group-hover:translate-x-0.5 transition-transform duration-150"
            />
          </Link>
        </motion.div>

        {/* CTA secondaria */}
        <motion.div variants={fadeUp} custom={4}>
          <Link
            href={utm('https://geotapp.com/it/features/', 'cta_features')}
            className="flex items-center justify-center w-full py-3.5 border border-slate-200 text-slate-700 font-medium text-[15px] rounded-2xl hover:border-primary/40 hover:text-primary hover:bg-primary/3 transition-all duration-200 active:scale-[0.98]"
          >
            Scopri come funziona
          </Link>
        </motion.div>

        {/* Trust row */}
        <motion.div
          variants={fadeUp}
          custom={5}
          className="flex items-center justify-center gap-2 mt-6 flex-wrap"
        >
          <TrustBadge icon={MapPin} label="GPS verificato" />
          <TrustBadge icon={Camera} label="Foto real-time" />
          <TrustBadge icon={FileCheck} label="Report firmati" />
        </motion.div>
      </motion.section>

      {/* ── DIVIDER ─── */}
      <div className="max-w-md mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
      </div>

      {/* ── ARTICOLI ─── */}
      <section className="px-6 py-9 max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex items-end justify-between mb-5"
        >
          <div>
            <p className="text-[10px] font-bold text-primary uppercase tracking-[0.14em] mb-1">
              Dal blog
            </p>
            <h2 className="font-display font-bold text-lg text-slate-900 leading-tight">
              Risorse e approfondimenti
            </h2>
          </div>
          <Link
            href={utm('https://blog.geotapp.com', 'blog_all')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-slate-400 hover:text-primary transition-colors pb-0.5"
          >
            Tutti →
          </Link>
        </motion.div>

        {articles.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10"
          >
            <Zap size={20} className="text-slate-200 mx-auto mb-2" />
            <p className="text-sm text-slate-300">Articoli in arrivo.</p>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-30px' }}
            variants={stagger}
            className="space-y-3"
          >
            {articles.map((a, i) => (
              <ArticleCard key={a.id} article={a} index={i} />
            ))}
          </motion.div>
        )}
      </section>

      {/* ── DIVIDER ─── */}
      <div className="max-w-md mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
      </div>

      {/* ── QUICK LINKS ─── */}
      <section className="px-6 py-8 max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.14em] mb-3.5">
            Link utili
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-20px' }}
          variants={stagger}
          className="space-y-2"
        >
          <QuickLink
            label="Prezzi e piani"
            href={utm('https://geotapp.com/it/pricing/', 'quick_pricing')}
          />
          <QuickLink
            label="Richiedi informazioni"
            href={utm('https://geotapp.com/it/contact/', 'quick_contact')}
          />
          <QuickLink
            label="Vai al sito principale"
            href={utm('https://geotapp.com', 'quick_main')}
          />
        </motion.div>
      </section>

      {/* ── SOCIAL ─── */}
      <section className="px-6 pb-8 max-w-md mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent mb-8" />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.14em] mb-4 text-center">
            Seguici
          </p>
          <div className="flex items-center justify-center gap-3">
            {/* Telegram */}
            <a
              href="https://t.me/geotapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0088cc]/8 border border-[#0088cc]/20 text-[#0088cc] text-sm font-semibold hover:bg-[#0088cc]/15 transition-all duration-150 active:scale-[0.97]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.9l-2.965-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.983.659z"/>
              </svg>
              Telegram
            </a>
            {/* Instagram */}
            <a
              href={utm('https://www.instagram.com/geotapp_official/', 'social_instagram')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-500 text-sm font-semibold hover:bg-slate-100 transition-all duration-150 active:scale-[0.97]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
              Instagram
            </a>
            {/* LinkedIn */}
            <a
              href={utm('https://www.linkedin.com/company/110850300/', 'social_linkedin')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-500 text-sm font-semibold hover:bg-slate-100 transition-all duration-150 active:scale-[0.97]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ─── */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="px-6 pt-4 pb-10 max-w-md mx-auto text-center"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent mb-8" />
        <svg
          width="80"
          height="18"
          viewBox="0 0 80 18"
          fill="none"
          aria-hidden="true"
          className="mx-auto mb-3 opacity-30"
        >
          <path
            d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 10 5 10s5-6.25 5-10c0-2.76-2.24-5-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
            fill="#8FC436"
          />
          <text
            x="17"
            y="13"
            fontFamily="'Poppins', sans-serif"
            fontWeight="700"
            fontSize="11"
            fill="#0f172a"
            letterSpacing="-0.2"
          >
            GeoTapp
          </text>
        </svg>
        <p className="text-[11px] text-slate-400 space-x-2">
          <span>© {new Date().getFullYear()} GeoTapp</span>
          <span className="text-slate-200">·</span>
          <Link
            href="https://geotapp.com/it/privacy/"
            className="hover:text-slate-600 transition-colors"
          >
            Privacy
          </Link>
          <span className="text-slate-200">·</span>
          <Link
            href="https://geotapp.com/it/terms/"
            className="hover:text-slate-600 transition-colors"
          >
            Termini
          </Link>
        </p>
      </motion.footer>

    </div>
  );
}
