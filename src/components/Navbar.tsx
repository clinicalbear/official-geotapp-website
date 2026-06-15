'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  ShoppingCart,
} from 'lucide-react';
import Image from 'next/image';
import { clsx } from 'clsx';
import { useCart } from '@/store/cart';
import { getDictionary } from '@/lib/i18n/dictionaries';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  localizePath,
} from '@/lib/i18n/locale-routing';
import { trackEvent } from '@/lib/analytics';

function CartButton() {
  const { items, toggleCart } = useCart();
  return (
    <button
      onClick={toggleCart}
      className="relative p-2 text-text-secondary hover:text-primary transition-colors"
    >
      <ShoppingCart size={22} />
      {items.length > 0 && (
        <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-black text-[10px] font-bold flex items-center justify-center rounded-full">
          {items.length}
        </span>
      )}
    </button>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sectorMobileOpen, setSectorMobileOpen] = useState(false);
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
  const dict = getDictionary(currentLocale).navbar;
  // Navbar strings remain locale-bound to keep desktop/mobile menus in sync.

  const getLink = (path: string) => localizePath(path, currentLocale);

  // Dynamic CTA based on current page
  const isTrialPage = pathname.includes('/trial');
  const isBlogArticle = /\/blog\/.+/.test(pathname);
  const isPricingPage = pathname.includes('/pricing') || pathname.includes('/prezzi') || pathname.includes('/preise') || pathname.includes('/priser') || pathname.includes('/tarifs') || pathname.includes('/precios') || pathname.includes('/tarieven');
  const isSectorPage = pathname.includes('/settori');
  const isHomepage = pathname === '/' || /^\/[a-z]{2}\/?$/.test(pathname);

  let ctaText = dict.cta_trial ?? dict.cta;
  let ctaHref = getLink('/trial');
  let ctaHidden = false;

  if (isTrialPage) {
    ctaText = dict.cta_signin ?? dict.login;
    ctaHref = 'https://flow.geotapp.com';
    ctaHidden = false;
  } else if (isPricingPage) {
    ctaText = dict.cta_start ?? dict.cta;
  } else if (isBlogArticle) {
    ctaText = dict.cta_how ?? dict.cta;
    ctaHref = getLink('/come-funziona');
  } else if (isHomepage || isSectorPage) {
    ctaText = dict.cta_trial ?? dict.cta;
  }
  const sectorLinks = [
    // edilizia, impianti, manutenzione nascosti temporaneamente — contenuto da rivedere
    {
      href: getLink('/settori/installatori'),
      label: dict.sectors.installatori,
    },
    {
      href: getLink('/settori/pulizie'),
      label: dict.sectors.pulizie,
    },
    {
      href: getLink('/settori/sicurezza'),
      label: dict.sectors.sicurezza,
    },
    {
      href: getLink('/settori/elettricisti'),
      label: dict.sectors.elettricisti,
    },
    {
      href: getLink('/settori/idraulici'),
      label: dict.sectors.idraulici,
    },
    {
      href: getLink('/settori/termoidraulici'),
      label: dict.sectors.termoidraulici,
    },
  ];

  // Product menu is data-driven to keep desktop and mobile entries synchronized.
  const products = [
    {
      name: 'GeoTapp Flow',
      href: getLink('/products/geotapp-flow'),
      iconSrc: '/iconaFlow.webp',
      desc: dict.product_flow_desc,
    },
    {
      name: 'GeoTapp TimeTracker',
      href: getLink('/products/geotapp-timetracker'),
      iconSrc: '/iconaTT.webp',
      desc: dict.product_app_desc,
    },
    {
      name: 'GeoTapp Verifier',
      href: getLink('/products/geotapp-verifier'),
      iconSrc: '/iconaVerifier.webp',
      desc: dict.product_verifier_desc,
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Single tree manages sticky header, desktop dropdown and mobile drawer.
  // IMPORTANT: the header is `sticky` (not `fixed`) on purpose. Sticky keeps the
  // bar in the normal flow, so every page content starts BELOW it automatically
  // and no page needs its own top padding to clear the navbar. Switching back to
  // `fixed` reintroduces the recurring bug where page titles slip under the bar.
  return (
    <nav
      className={clsx(
        'sticky top-0 w-full z-50 transition-all duration-300 border-b border-transparent shadow-[0_2px_12px_rgba(0,0,0,0.08)]',
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-border py-4'
          : 'bg-white/75 backdrop-blur-sm py-6',
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        {/* Logo */}
        <Link href={getLink('/')} className="flex items-center">
          <Image
            src="/LogoGeoTapp.webp"
            alt={dict.logo_alt}
            width={160}
            height={45}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-bold text-text-secondary hover:text-primary transition-colors">
              {dict.products} <ChevronDown size={14} />
            </button>
            <div className="absolute top-full left-0 w-96 pt-2 z-50 invisible opacity-0 pointer-events-none group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150">
              <div className="bg-white border border-border rounded-xl p-2 shadow-2xl">
                <div className="grid gap-1">
                  {products.map((p) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-primary/10 transition-colors group/item"
                    >
                      <div className="w-10 h-10 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-center shadow-sm shrink-0 group-hover/item:bg-white transition-colors">
                        <Image src={p.iconSrc} alt={p.name} width={28} height={28} className="object-contain" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 group-hover/item:text-primary transition-colors">
                          {p.name}
                        </div>
                        <div className="text-xs text-text-muted mt-0.5 font-medium">
                          {p.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Settori Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-bold text-text-secondary hover:text-primary transition-colors">
              {dict.sectors.label} <ChevronDown size={14} />
            </button>
            <div className="absolute top-full left-0 w-52 pt-2 z-50 invisible opacity-0 pointer-events-none group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150">
              <div className="bg-white border border-border rounded-xl p-2 shadow-2xl">
                <div className="grid gap-0.5">
                  {sectorLinks.map((sector) => (
                    <Link
                      key={sector.href}
                      href={sector.href}
                      className="block px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                    >
                      {sector.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            href={getLink('/pricing')}
            className="text-sm font-bold text-text-secondary hover:text-primary transition-colors"
          >
            {dict.pricing}
          </Link>
          <Link
            href={getLink('/confronto')}
            className="text-sm font-bold text-text-secondary hover:text-primary transition-colors"
          >
            {dict.compare}
          </Link>
          <Link
            href={getLink('/contact')}
            className="text-sm font-bold text-text-secondary hover:text-primary transition-colors"
          >
            {dict.contact}
          </Link>
          <Link
            href="/blog"
            className="text-sm font-bold text-text-secondary hover:text-primary transition-colors"
          >
            {dict.blog}
          </Link>

          <div className="h-6 w-px bg-slate-200 mx-1"></div>

          <Link
            href="https://flow.geotapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-text-secondary hover:text-primary transition-colors"
          >
            {dict.login}
          </Link>

          <div className="h-6 w-px bg-slate-200 mx-1"></div>

          <LanguageSwitcher />

          <div className="h-6 w-px bg-slate-200 mx-2"></div>

          <CartButton />

          <Link
            href={ctaHref}
            {...(isTrialPage ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            onClick={() => {
              // Skip trial_click se siamo già su /trial/: il "self-loop"
              // apre una nuova tab con sessionStorage vuoto, produce un
              // trial_click che non mappa a nessun trial_page_view nuovo
              // (gonfia il funnel con click fake-conversion).
              if (isTrialPage) return;
              trackEvent('trial_click', { cta_source: 'navbar', cta_locale: currentLocale });
            }}
            className="btn-modern-sm"
          >
            {ctaText}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border shadow-xl absolute w-full"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {products.map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-lg font-bold text-slate-900"
                >
                  <Image src={p.iconSrc} alt={p.name} width={24} height={24} className="object-contain" />
                  {p.name}
                </Link>
              ))}
              <hr className="border-slate-100" />

              {/* Settori Mobile Dropdown */}
              <div>
                <button
                  className="flex items-center gap-2 text-lg font-bold text-text-secondary w-full"
                  onClick={() => setSectorMobileOpen(!sectorMobileOpen)}
                >
                  {dict.sectors.label} <ChevronDown size={16} className={sectorMobileOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
                </button>
                {sectorMobileOpen && (
                  <div className="pl-4 mt-3 flex flex-col gap-3">
                    {sectorLinks.map((sector) => (
                      <Link
                        key={`mobile-${sector.href}`}
                        href={sector.href}
                        onClick={() => { setIsOpen(false); setSectorMobileOpen(false); }}
                        className="text-base font-medium text-text-muted hover:text-primary"
                      >
                        {sector.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <hr className="border-slate-100" />
              <Link
                href={getLink('/pricing')}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-text-secondary"
              >
                {dict.pricing}
              </Link>
              <Link
                href={getLink('/confronto')}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-text-secondary"
              >
                {dict.compare}
              </Link>
              <Link
                href={getLink('/contact')}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-text-secondary"
              >
                {dict.contact}
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-text-secondary"
              >
                {dict.blog}
              </Link>
              <Link
                href="https://flow.geotapp.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-text-secondary"
              >
                {dict.login}
              </Link>
                  <LanguageSwitcher className="justify-start" />
                  <Link
                    href={ctaHref}
                    {...(isTrialPage ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    onClick={() => {
                      setIsOpen(false);
                      if (isTrialPage) return;
                      trackEvent('trial_click', { cta_source: 'navbar_mobile', cta_locale: currentLocale });
                    }}
                className="w-full py-4 text-center text-white font-bold bg-slate-900 rounded-xl shadow-lg"
              >
                {ctaText}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
