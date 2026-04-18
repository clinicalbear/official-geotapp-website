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
      className="relative p-2 text-text-secondary hover:text-slate-900 transition-colors"
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
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [sectorMenuOpen, setSectorMenuOpen] = useState(false);
  const [sectorMobileOpen, setSectorMobileOpen] = useState(false);
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
  const dict = getDictionary(currentLocale).navbar;
  // Navbar strings remain locale-bound to keep desktop/mobile menus in sync.

  const getLink = (path: string) => localizePath(path, currentLocale);
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
    // Lightweight scroll listener for sticky style transition.
    // Kept minimal because this callback runs frequently during user scrolling.
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Single tree manages sticky header, desktop dropdown and mobile drawer.
  return (
    <nav
      className={clsx(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-border py-4 shadow-sm'
          : 'bg-transparent py-6',
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
          <div
            className="relative group"
            onMouseEnter={() => setProductMenuOpen(true)}
            onMouseLeave={() => setProductMenuOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-bold text-text-secondary hover:text-slate-900 transition-colors">
              {dict.products} <ChevronDown size={14} />
            </button>

            <AnimatePresence>
              {productMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-4 w-96 bg-white border border-border rounded-xl p-2 shadow-2xl"
                >
                  <div className="grid gap-1">
                    {products.map((p) => (
                      <Link
                        key={p.name}
                        href={p.href}
                        className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item"
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Settori Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setSectorMenuOpen(true)}
            onMouseLeave={() => setSectorMenuOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-bold text-text-secondary hover:text-slate-900 transition-colors">
              {dict.sectors.label} <ChevronDown size={14} />
            </button>
            <AnimatePresence>
              {sectorMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-4 w-52 bg-white border border-border rounded-xl p-2 shadow-2xl"
                >
                  <div className="grid gap-0.5">
                    {sectorLinks.map((sector) => (
                      <Link
                        key={sector.href}
                        href={sector.href}
                        className="block px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors"
                      >
                        {sector.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href={getLink('/pricing')}
            className="text-sm font-bold text-text-secondary hover:text-slate-900 transition-colors"
          >
            {dict.pricing}
          </Link>
          <Link
            href={getLink('/confronto')}
            className="text-sm font-bold text-text-secondary hover:text-slate-900 transition-colors"
          >
            {dict.compare}
          </Link>
          <Link
            href={getLink('/contact')}
            className="text-sm font-bold text-text-secondary hover:text-slate-900 transition-colors"
          >
            {dict.contact}
          </Link>
          <Link
            href="/blog"
            className="text-sm font-bold text-text-secondary hover:text-slate-900 transition-colors"
          >
            {dict.blog}
          </Link>

          <div className="h-6 w-px bg-slate-200 mx-1"></div>

          <Link
            href="https://flow.geotapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-text-secondary hover:text-slate-900 transition-colors"
          >
            {dict.login}
          </Link>

          <div className="h-6 w-px bg-slate-200 mx-1"></div>

          <LanguageSwitcher />

          <div className="h-6 w-px bg-slate-200 mx-2"></div>

          <CartButton />

          <Link
            href={getLink('/trial')}
            onClick={() => trackEvent('trial_click', { source: 'navbar' })}
            className="px-5 py-2.5 text-sm font-bold bg-slate-900 text-white rounded-lg hover:bg-primary hover:text-slate-900 transition-all duration-300 shadow-lg shadow-slate-900/20"
          >
            {dict.cta}
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
                        className="text-base font-medium text-text-muted hover:text-slate-900"
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
                    href={getLink('/trial')}
                    onClick={() => { setIsOpen(false); trackEvent('trial_click', { source: 'navbar_mobile' }); }}
                className="w-full py-4 text-center text-white font-bold bg-slate-900 rounded-xl shadow-lg"
              >
                {dict.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
