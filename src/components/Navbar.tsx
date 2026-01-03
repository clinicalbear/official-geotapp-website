'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Rocket, Zap, Database, Smartphone, ShoppingCart } from 'lucide-react';
import { clsx } from 'clsx';
import { useCart } from '@/store/cart';
import itDict from '@/dictionaries/it.json';
import enDict from '@/dictionaries/en.json';

function CartButton() {
  const { items, toggleCart } = useCart();
  return (
    <button onClick={toggleCart} className="relative p-2 text-text-secondary hover:text-slate-900 transition-colors">
      <ShoppingCart size={22} />
      {items.length > 0 && (
        <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-black text-[10px] font-bold flex items-center justify-center rounded-full">
          {items.length}
        </span>
      )}
    </button>
  );
}

const products = [
  { name: 'GeoTapp Timetracker', href: '/products/geotapp-app', icon: Smartphone, color: 'text-app', desc: 'Mobile Workforce Management' },
  { name: 'GeoTapp FLOW', href: '/products/geotapp-flow', icon: Database, color: 'text-flow', desc: 'All-in-One SaaS CRM & ERP' },
  { name: 'Zenith SEO', href: '/products/zenith-seo', icon: Rocket, color: 'text-zenith', desc: 'AI-Powered SEO Intelligence' },
  { name: 'FortyX', href: '/products/fortyx', icon: Zap, color: 'text-fortyx', desc: 'Wordpress Performance Booster' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en');
  const dict = isEn ? enDict.navbar : itDict.navbar;

  // Update links based on language
  const getLink = (path: string) => isEn ? `/en${path}` : path;

  const products = [
    { name: 'GeoTapp Timetracker', href: getLink('/products/geotapp-app'), icon: Smartphone, color: 'text-app', desc: 'Mobile Workforce Management' },
    { name: 'GeoTapp FLOW', href: getLink('/products/geotapp-flow'), icon: Database, color: 'text-flow', desc: 'All-in-One SaaS CRM & ERP' },
    { name: 'Zenith SEO', href: getLink('/products/zenith-seo'), icon: Rocket, color: 'text-zenith', desc: 'AI-Powered SEO Intelligence' },
    { name: 'FortyX', href: getLink('/products/fortyx'), icon: Zap, color: 'text-fortyx', desc: 'Wordpress Performance Booster' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={clsx(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
      scrolled ? "bg-white/80 backdrop-blur-md border-border py-4 shadow-sm" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href={isEn ? "/en" : "/"} className="font-display font-bold text-2xl tracking-tighter text-slate-900 flex items-center gap-2">
          <span className="text-primary">Geo</span>Tapp<span className="text-primary">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative group"
            onMouseEnter={() => setProductMenuOpen(true)}
            onMouseLeave={() => setProductMenuOpen(false)}>
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
                      <Link key={p.name} href={p.href} className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item">
                        <div className={clsx("p-2 rounded-md bg-slate-100 group-hover/item:bg-white transition-colors border border-transparent group-hover/item:border-slate-200 shadow-sm", p.color)}>
                          <p.icon size={20} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 group-hover/item:text-primary transition-colors">{p.name}</div>
                          <div className="text-xs text-text-muted mt-0.5 font-medium">{p.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href={getLink("/pricing")} className="text-sm font-bold text-text-secondary hover:text-slate-900 transition-colors">{dict.pricing}</Link>
          <a href="/blog" className="text-sm font-bold text-text-secondary hover:text-slate-900 transition-colors">{dict.blog}</a>
          <Link href={getLink("/contact")} className="text-sm font-bold text-text-secondary hover:text-slate-900 transition-colors">{dict.contact}</Link>

          <div className="h-6 w-px bg-slate-200 mx-2"></div>

          <CartButton />

          <Link href={getLink("/contact")} className="px-5 py-2.5 text-sm font-bold bg-slate-900 text-white rounded-lg hover:bg-primary hover:text-slate-900 transition-all duration-300 shadow-lg shadow-slate-900/20">
            {dict.cta}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
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
                <Link key={p.name} href={p.href} onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-lg font-bold text-slate-900">
                  <p.icon size={20} className={p.color} /> {p.name}
                </Link>
              ))}
              <hr className="border-slate-100" />
              <Link href={getLink("/pricing")} onClick={() => setIsOpen(false)} className="text-lg font-bold text-text-secondary">{dict.pricing}</Link>
              <Link href="/blog" onClick={() => setIsOpen(false)} className="text-lg font-bold text-text-secondary">{dict.blog}</Link>
              <Link href={getLink("/contact")} onClick={() => setIsOpen(false)} className="text-lg font-bold text-text-secondary">{dict.contact}</Link>
              <Link href={getLink("/contact")} onClick={() => setIsOpen(false)} className="w-full py-4 text-center text-white font-bold bg-slate-900 rounded-xl shadow-lg">
                {dict.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
