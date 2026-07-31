'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
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
  // Il carrello e' persistito in localStorage: il server non lo conosce.
  // Il numeretto compare solo dopo il mount, mai in SSR, o l'idratazione salta.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <button onClick={toggleCart} className="nv-cart" aria-label="Cart">
      <ShoppingCart size={20} />
      {mounted && items.length > 0 && <span>{items.length}</span>}
    </button>
  );
}

/**
 * Barra della direzione L: fissa, in negativo (mix-blend difference) sopra
 * qualsiasi fondo, con il marchio su un livello separato cosi' resta nei suoi
 * colori veri. Le tendine scendono come una fascia nera da sotto la barra.
 */
export default function Navbar() {
  const [open, setOpen] = useState<'' | 'products' | 'sectors'>('');
  const [mobile, setMobile] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
  const dict = getDictionary(currentLocale).navbar;

  const getLink = (path: string) => localizePath(path, currentLocale);

  // Dynamic CTA based on current page (logica invariata dal sito attuale)
  const isTrialPage = pathname.includes('/trial');
  const isBlogArticle = /\/blog\/.+/.test(pathname);
  const isPricingPage = pathname.includes('/pricing') || pathname.includes('/prezzi') || pathname.includes('/preise') || pathname.includes('/priser') || pathname.includes('/tarifs') || pathname.includes('/precios') || pathname.includes('/tarieven');
  const isSectorPage = pathname.includes('/settori');
  const isHomepage = pathname === '/' || /^\/[a-z]{2}\/?$/.test(pathname);

  let ctaText = dict.cta_trial ?? dict.cta;
  let ctaHref = getLink('/trial');

  if (isTrialPage) {
    // Sulla pagina trial il bottone verde porta al form, non al login:
    // il login resta nel link "Accedi" testuale. Un "ACCEDI" verde qui
    // era la CTA primaria che spingeva fuori dal funnel.
    ctaText = dict.cta_start ?? dict.cta;
    ctaHref = '#trial-form';
  } else if (isPricingPage) {
    ctaText = dict.cta_start ?? dict.cta;
  } else if (isBlogArticle) {
    ctaText = dict.cta_how ?? dict.cta;
    ctaHref = getLink('/guida');
  } else if (isHomepage || isSectorPage) {
    ctaText = dict.cta_trial ?? dict.cta;
  }

  const sectorLinks = [
    { href: getLink('/settori/installatori'), label: dict.sectors.installatori },
    { href: getLink('/settori/pulizie'), label: dict.sectors.pulizie },
    { href: getLink('/settori/sicurezza'), label: dict.sectors.sicurezza },
    { href: getLink('/settori/elettricisti'), label: dict.sectors.elettricisti },
    { href: getLink('/settori/idraulici'), label: dict.sectors.idraulici },
    { href: getLink('/settori/termoidraulici'), label: dict.sectors.termoidraulici },
  ];

  const products = [
    { name: 'GeoTapp Flow', href: getLink('/products/geotapp-flow'), iconSrc: '/iconaFlow.webp', desc: dict.product_flow_desc },
    { name: 'GeoTapp TimeTracker', href: getLink('/products/geotapp-timetracker'), iconSrc: '/iconaTT.webp', desc: dict.product_app_desc },
    { name: 'GeoTapp Verifier', href: getLink('/products/geotapp-verifier'), iconSrc: '/iconaVerifier.webp', desc: dict.product_verifier_desc },
  ];

  // tendina: apertura al passaggio, chiusura accompagnata
  const openMenu = useCallback((which: 'products' | 'sectors') => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(which);
  }, []);
  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(''), 160);
  }, []);

  // cambio pagina: tutto chiuso
  useEffect(() => { setOpen(''); setMobile(false); }, [pathname]);
  // menu mobile aperto: il corpo non scorre
  useEffect(() => {
    document.documentElement.style.overflow = mobile ? 'hidden' : '';
    return () => { document.documentElement.style.overflow = ''; };
  }, [mobile]);

  const ctaClick = () => {
    if (isTrialPage) return;
    trackEvent('trial_click', { cta_source: 'navbar', cta_locale: currentLocale });
  };

  const mnLink = (href: string, label: string) => (
    <Link href={href} onMouseEnter={scheduleClose}><span>{label}</span><span>{label}</span></Link>
  );

  return (
    <>
      {/* il marchio, fuori dal negativo: resta nei suoi colori */}
      <Link className="nvl" href={getLink('/')} aria-label="GeoTapp">
        <span className="w">
          <Image src="/LogoGeoTapp.webp" alt={dict.logo_alt} width={220} height={62} priority
            style={{ height: 48, width: 'auto' }} />
        </span>
      </Link>

      {/* la barra in negativo */}
      <header className="nv">
        <div className="w">
          <nav className="mn">
            <button
              onMouseEnter={() => openMenu('products')}
              onMouseLeave={scheduleClose}
              onClick={() => setOpen(open === 'products' ? '' : 'products')}
              aria-expanded={open === 'products'}
            >
              {dict.products}
            </button>
            <button
              onMouseEnter={() => openMenu('sectors')}
              onMouseLeave={scheduleClose}
              onClick={() => setOpen(open === 'sectors' ? '' : 'sectors')}
              aria-expanded={open === 'sectors'}
            >
              {dict.sectors.label}
            </button>
            {mnLink(getLink('/pricing'), dict.pricing)}
            {mnLink(getLink('/confronto'), dict.compare)}
            {mnLink(getLink('/risorse'), dict.resources)}
            {mnLink(getLink('/contact'), dict.contact)}
            {mnLink('/blog', dict.blog)}
          </nav>
          <div className="ne">
            <a className="lk" href="https://flow.geotapp.com" target="_blank" rel="noopener noreferrer">{dict.login}</a>
            <CartButton />
            <button className="nvh" aria-label="Menu" onClick={() => setMobile(true)}>
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* fuori dal negativo: lingue (le bandiere restano nei loro colori) e azione */}
      <div className="nvr">
        <LanguageSwitcher className="nv-lang-chip" />
        <Link
          href={ctaHref}
          onClick={ctaClick}
          className="nv-cta"
        >
          {ctaText}
        </Link>
      </div>

      {/* la fascia che scende: prodotti */}
      <div
        className={`nvd nvd-prod${open === 'products' ? ' on' : ''}`}
        onMouseEnter={() => openMenu('products')}
        onMouseLeave={scheduleClose}
      >
        <div className="w">
          <p className="kk k">{dict.products}</p>
          <div className="g">
            {products.map((p) => (
              <Link key={p.name} href={p.href} className="itm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.iconSrc} alt="" loading="lazy" />
                {/* il logo fuori scala che abita la card: sfonda i bordi alto
                    e basso sulla destra, il taglio lo fa l'overflow della card */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.iconSrc} alt="" className="art" aria-hidden="true" loading="lazy" />
                <b>{p.name}</b>
                <p>{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* la fascia che scende: settori */}
      <div
        className={`nvd${open === 'sectors' ? ' on' : ''}`}
        onMouseEnter={() => openMenu('sectors')}
        onMouseLeave={scheduleClose}
      >
        <div className="w">
          <p className="kk k">{dict.sectors.label}</p>
          <div className="g g6">
            {sectorLinks.map((s) => (
              <Link key={s.href} href={s.href} className="lnk">{s.label}</Link>
            ))}
          </div>
        </div>
      </div>

      {/* menu mobile: sipario nero */}
      <div className={`nvm${mobile ? ' on' : ''}`}>
        <div className="top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/LogoGeoTapp.webp" alt={dict.logo_alt} />
          <button className="x" aria-label="Chiudi" onClick={() => setMobile(false)}><X size={30} /></button>
        </div>
        <a className="big" href={getLink('/pricing')}>{dict.pricing}</a>
        <a className="big" href={getLink('/confronto')}>{dict.compare}</a>
        <a className="big" href={getLink('/risorse')}>{dict.resources}</a>
        <a className="big" href={getLink('/contact')}>{dict.contact}</a>
        <a className="big" href="/blog">{dict.blog}</a>
        <p className="kk k">{dict.products}</p>
        <div className="sub">
          {products.map((p) => <a key={p.name} href={p.href}>{p.name}</a>)}
        </div>
        <p className="kk k">{dict.sectors.label}</p>
        <div className="sub">
          {sectorLinks.map((s) => <a key={s.href} href={s.href}>{s.label}</a>)}
        </div>
        <p className="kk k">{dict.login}</p>
        <div className="sub">
          <a href="https://flow.geotapp.com" target="_blank" rel="noopener noreferrer">{dict.login}</a>
        </div>
        <a
          className="b1"
          href={ctaHref}
          onClick={() => {
            setMobile(false);
            if (!isTrialPage) trackEvent('trial_click', { cta_source: 'navbar_mobile', cta_locale: currentLocale });
          }}
        >
          {ctaText}
        </a>
        <LanguageSwitcher className="nv-lang" />
      </div>
    </>
  );
}
