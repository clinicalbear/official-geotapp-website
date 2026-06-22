'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { getDictionary } from '@/lib/i18n/dictionaries';
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  localizePath,
} from '@/lib/i18n/locale-routing';
import NewsletterForm from '@/components/NewsletterForm';
import ListedOn from '@/components/ListedOn';
import { trackEvent } from '@/lib/analytics';

const FOOTER_LABELS: Record<string, {
  products: string; solutions: string; resources: string; company: string; legal: string;
  flow: string; timetracker: string; verifier: string; pricing: string; bundle: string;
  blog: string; guide: string; roi: string; demo: string; comparisons: string; features: string;
  about: string; press: string; whatis: string; contact: string; trial: string; login: string;
  privacy: string; terms: string; cookies: string;
  sectors: string; cleaning: string; installers: string; security: string;
}> = {
  it: { products: 'Prodotti', solutions: 'Settori', resources: 'Risorse', company: 'Azienda', legal: 'Legale', flow: 'GeoTapp Flow', timetracker: 'TimeTracker', verifier: 'Verifier', pricing: 'Prezzi', bundle: 'Bundle', blog: 'Blog', guide: 'Guida utente', roi: 'Calcolatore ROI', demo: 'Demo', comparisons: 'Confronti', features: 'Funzionalità', about: 'Chi siamo', press: 'Ufficio stampa', whatis: 'Cos\'è GeoTapp', contact: 'Contatti', trial: 'Prova gratuita', login: 'Accedi', privacy: 'Privacy Policy', terms: 'Termini di Servizio', cookies: 'Cookie Policy', sectors: 'Tutti i settori', cleaning: 'Pulizie', installers: 'Installatori', security: 'Sicurezza' },
  en: { products: 'Products', solutions: 'Sectors', resources: 'Resources', company: 'Company', legal: 'Legal', flow: 'GeoTapp Flow', timetracker: 'TimeTracker', verifier: 'Verifier', pricing: 'Pricing', bundle: 'Bundle', blog: 'Blog', guide: 'User guide', roi: 'ROI Calculator', demo: 'Demo', comparisons: 'Comparisons', features: 'Features', about: 'About us', press: 'Press', whatis: 'What is GeoTapp', contact: 'Contact', trial: 'Free trial', login: 'Log in', privacy: 'Privacy Policy', terms: 'Terms of Service', cookies: 'Cookie Policy', sectors: 'All sectors', cleaning: 'Cleaning', installers: 'Installers', security: 'Security' },
  de: { products: 'Produkte', solutions: 'Branchen', resources: 'Ressourcen', company: 'Unternehmen', legal: 'Rechtliches', flow: 'GeoTapp Flow', timetracker: 'TimeTracker', verifier: 'Verifier', pricing: 'Preise', bundle: 'Bundle', blog: 'Blog', guide: 'Benutzerhandbuch', roi: 'ROI-Rechner', demo: 'Demo', comparisons: 'Vergleiche', features: 'Funktionen', about: 'Über uns', press: 'Presse', whatis: 'Was ist GeoTapp', contact: 'Kontakt', trial: 'Kostenlos testen', login: 'Anmelden', privacy: 'Datenschutz', terms: 'AGB', cookies: 'Cookie-Richtlinie', sectors: 'Alle Branchen', cleaning: 'Reinigung', installers: 'Installateure', security: 'Sicherheit' },
  fr: { products: 'Produits', solutions: 'Secteurs', resources: 'Ressources', company: 'Entreprise', legal: 'Juridique', flow: 'GeoTapp Flow', timetracker: 'TimeTracker', verifier: 'Verifier', pricing: 'Tarifs', bundle: 'Bundle', blog: 'Blog', guide: 'Guide utilisateur', roi: 'Calculateur ROI', demo: 'Démo', comparisons: 'Comparaisons', features: 'Fonctionnalités', about: 'À propos', press: 'Presse', whatis: 'Qu\'est-ce que GeoTapp', contact: 'Contact', trial: 'Essai gratuit', login: 'Connexion', privacy: 'Politique de confidentialité', terms: 'Conditions', cookies: 'Politique cookies', sectors: 'Tous les secteurs', cleaning: 'Nettoyage', installers: 'Installateurs', security: 'Sécurité' },
  es: { products: 'Productos', solutions: 'Sectores', resources: 'Recursos', company: 'Empresa', legal: 'Legal', flow: 'GeoTapp Flow', timetracker: 'TimeTracker', verifier: 'Verifier', pricing: 'Precios', bundle: 'Bundle', blog: 'Blog', guide: 'Guía de usuario', roi: 'Calculadora ROI', demo: 'Demo', comparisons: 'Comparaciones', features: 'Funcionalidades', about: 'Sobre nosotros', press: 'Prensa', whatis: 'Qué es GeoTapp', contact: 'Contacto', trial: 'Prueba gratuita', login: 'Iniciar sesión', privacy: 'Política de privacidad', terms: 'Términos', cookies: 'Política de cookies', sectors: 'Todos los sectores', cleaning: 'Limpieza', installers: 'Instaladores', security: 'Seguridad' },
  pt: { products: 'Produtos', solutions: 'Setores', resources: 'Recursos', company: 'Empresa', legal: 'Legal', flow: 'GeoTapp Flow', timetracker: 'TimeTracker', verifier: 'Verifier', pricing: 'Preços', bundle: 'Bundle', blog: 'Blog', guide: 'Guia do utilizador', roi: 'Calculadora ROI', demo: 'Demo', comparisons: 'Comparações', features: 'Funcionalidades', about: 'Sobre nós', press: 'Imprensa', whatis: 'O que é GeoTapp', contact: 'Contacto', trial: 'Teste gratuito', login: 'Entrar', privacy: 'Política de privacidade', terms: 'Termos', cookies: 'Política de cookies', sectors: 'Todos os setores', cleaning: 'Limpeza', installers: 'Instaladores', security: 'Segurança' },
  nl: { products: 'Producten', solutions: 'Sectoren', resources: 'Bronnen', company: 'Bedrijf', legal: 'Juridisch', flow: 'GeoTapp Flow', timetracker: 'TimeTracker', verifier: 'Verifier', pricing: 'Prijzen', bundle: 'Bundle', blog: 'Blog', guide: 'Gebruikershandleiding', roi: 'ROI-calculator', demo: 'Demo', comparisons: 'Vergelijkingen', features: 'Functies', about: 'Over ons', press: 'Pers', whatis: 'Wat is GeoTapp', contact: 'Contact', trial: 'Gratis proefperiode', login: 'Inloggen', privacy: 'Privacybeleid', terms: 'Voorwaarden', cookies: 'Cookiebeleid', sectors: 'Alle sectoren', cleaning: 'Schoonmaak', installers: 'Installateurs', security: 'Beveiliging' },
  da: { products: 'Produkter', solutions: 'Sektorer', resources: 'Ressourcer', company: 'Virksomhed', legal: 'Juridisk', flow: 'GeoTapp Flow', timetracker: 'TimeTracker', verifier: 'Verifier', pricing: 'Priser', bundle: 'Bundle', blog: 'Blog', guide: 'Brugervejledning', roi: 'ROI-beregner', demo: 'Demo', comparisons: 'Sammenligninger', features: 'Funktioner', about: 'Om os', press: 'Presse', whatis: 'Hvad er GeoTapp', contact: 'Kontakt', trial: 'Gratis prøveperiode', login: 'Log ind', privacy: 'Privatlivspolitik', terms: 'Vilkår', cookies: 'Cookiepolitik', sectors: 'Alle sektorer', cleaning: 'Rengøring', installers: 'Installatører', security: 'Sikkerhed' },
  sv: { products: 'Produkter', solutions: 'Sektorer', resources: 'Resurser', company: 'Företag', legal: 'Juridiskt', flow: 'GeoTapp Flow', timetracker: 'TimeTracker', verifier: 'Verifier', pricing: 'Priser', bundle: 'Bundle', blog: 'Blog', guide: 'Användarguide', roi: 'ROI-kalkylator', demo: 'Demo', comparisons: 'Jämförelser', features: 'Funktioner', about: 'Om oss', press: 'Press', whatis: 'Vad är GeoTapp', contact: 'Kontakt', trial: 'Gratis provperiod', login: 'Logga in', privacy: 'Integritetspolicy', terms: 'Villkor', cookies: 'Cookiepolicy', sectors: 'Alla sektorer', cleaning: 'Städning', installers: 'Installatörer', security: 'Säkerhet' },
  nb: { products: 'Produkter', solutions: 'Sektorer', resources: 'Ressurser', company: 'Bedrift', legal: 'Juridisk', flow: 'GeoTapp Flow', timetracker: 'TimeTracker', verifier: 'Verifier', pricing: 'Priser', bundle: 'Bundle', blog: 'Blog', guide: 'Brukerveiledning', roi: 'ROI-kalkulator', demo: 'Demo', comparisons: 'Sammenligninger', features: 'Funksjoner', about: 'Om oss', press: 'Presse', whatis: 'Hva er GeoTapp', contact: 'Kontakt', trial: 'Gratis prøveperiode', login: 'Logg inn', privacy: 'Personvern', terms: 'Vilkår', cookies: 'Informasjonskapsler', sectors: 'Alle sektorer', cleaning: 'Rengjøring', installers: 'Installatører', security: 'Sikkerhet' },
  ru: { products: 'Продукты', solutions: 'Отрасли', resources: 'Ресурсы', company: 'Компания', legal: 'Правовая информация', flow: 'GeoTapp Flow', timetracker: 'TimeTracker', verifier: 'Verifier', pricing: 'Цены', bundle: 'Bundle', blog: 'Блог', guide: 'Руководство', roi: 'Калькулятор ROI', demo: 'Демо', comparisons: 'Сравнения', features: 'Возможности', about: 'О нас', press: 'Пресса', whatis: 'Что такое GeoTapp', contact: 'Контакты', trial: 'Бесплатная пробная версия', login: 'Войти', privacy: 'Политика конфиденциальности', terms: 'Условия', cookies: 'Политика cookies', sectors: 'Все отрасли', cleaning: 'Уборка', installers: 'Монтажники', security: 'Охрана' },
};

export default function Footer() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
  const dict = getDictionary(currentLocale).footer;
  const t = FOOTER_LABELS[currentLocale] ?? FOOTER_LABELS.en;
  const getLink = (path: string) => localizePath(path, currentLocale);

  const linkClass = 'text-text-muted hover:text-text-primary transition-colors';

  return (
    <footer className="bg-surface border-t border-border mt-20">
      {/* Newsletter band */}
      <div className="border-b border-border/40 py-14">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-xs block mb-3">Newsletter</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-3">
                {dict.newsletter_title}
              </h2>
              <p className="text-text-secondary leading-relaxed max-w-md">
                {dict.newsletter_desc}
              </p>
            </div>
            <div>
              <NewsletterForm locale={currentLocale} variant="compact" />
            </div>
          </div>
        </div>
      </div>

      {/* Listed on, directory badges */}
      <div className="border-b border-border/40">
        <div className="container mx-auto px-6">
          <ListedOn locale={currentLocale} variant="compact" />
        </div>
      </div>

      {/* Footer nav grid */}
      <div className="container mx-auto px-6 py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
          {/* Products */}
          <div>
            <h3 className="text-text-primary font-bold text-sm mb-4">{t.products}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={getLink('/products/geotapp-flow')} className={linkClass}>{t.flow}</Link></li>
              <li><Link href={getLink('/products/geotapp-timetracker')} className={linkClass}>{t.timetracker}</Link></li>
              <li><Link href={getLink('/products/geotapp-verifier')} className={linkClass}>{t.verifier}</Link></li>
              <li><Link href={getLink('/pricing')} className={linkClass}>{t.pricing}</Link></li>
              <li><Link href={getLink('/features')} className={linkClass}>{t.features}</Link></li>
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="text-text-primary font-bold text-sm mb-4">{t.solutions}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={getLink('/settori')} className={linkClass}>{t.sectors}</Link></li>
              <li><Link href={getLink('/settori/pulizie')} className={linkClass}>{t.cleaning}</Link></li>
              <li><Link href={getLink('/settori/installatori')} className={linkClass}>{t.installers}</Link></li>
              <li><Link href={getLink('/settori/sicurezza')} className={linkClass}>{t.security}</Link></li>
              <li><Link href={getLink('/confronto')} className={linkClass}>{t.comparisons}</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-text-primary font-bold text-sm mb-4">{t.resources}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={getLink('/blog')} className={linkClass}>{t.blog}</Link></li>
              <li><Link href={getLink('/guida')} className={linkClass}>{t.guide}</Link></li>
              <li><Link href={getLink('/roi-calculator')} className={linkClass}>{t.roi}</Link></li>
              <li><Link href={getLink('/demo')} className={linkClass}>{t.demo}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-text-primary font-bold text-sm mb-4">{t.company}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={getLink('/chi-siamo')} className={linkClass}>{t.about}</Link></li>
              <li><Link href={getLink('/stampa')} className={linkClass}>{t.press}</Link></li>
              <li><Link href={getLink('/cos-e-geotapp')} className={linkClass}>{t.whatis}</Link></li>
              <li><Link href={getLink('/contact')} className={linkClass}>{t.contact}</Link></li>
              <li><Link href={getLink('/trial')} onClick={() => trackEvent('trial_click', { cta_source: 'footer', cta_locale: currentLocale })} className={linkClass}>{t.trial}</Link></li>
              <li><Link href={getLink('/login')} className={linkClass}>{t.login}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-text-primary font-bold text-sm mb-4">{t.legal}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={getLink('/privacy')} className={linkClass}>{t.privacy}</Link></li>
              <li><Link href={getLink('/terms')} className={linkClass}>{t.terms}</Link></li>
              <li><Link href={getLink('/cookies')} className={linkClass}>{t.cookies}</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/40">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo + tagline */}
            <div className="flex items-center gap-4">
              <Image
                src="/LogoGeoTapp.webp"
                alt="GeoTapp"
                width={120}
                height={52}
                className="h-auto w-[120px]"
              />
              <p className="text-text-muted text-xs max-w-[200px] hidden md:block">{dict.tagline}</p>
            </div>

            {/* Social, localized per language */}
            <div className="flex items-center gap-3">
              <a href="https://t.me/geotapp" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-text-secondary hover:text-[#0088cc] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.9l-2.965-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.983.659z"/></svg>
              </a>
              <a href={({'fr':'https://www.instagram.com/geotapp_france/','de':'https://www.instagram.com/geotapp_german/','en':'https://www.instagram.com/geotapp_english/'} as Record<string,string>)[currentLocale] ?? 'https://www.instagram.com/geotapp_official/'} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-text-secondary hover:text-[#E4405F] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
              <a href={({'fr':'https://www.facebook.com/profile.php?id=61589271531399','de':'https://www.facebook.com/profile.php?id=61560169964763','en':'https://www.facebook.com/profile.php?id=61588876148784'} as Record<string,string>)[currentLocale] ?? 'https://www.facebook.com/profile.php?id=61573628884608'} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-text-secondary hover:text-[#1877F2] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/110850300/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-secondary hover:text-[#0A66C2] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://x.com/GeoTappOfficial" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-text-secondary hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
              </a>
              <a href="https://it.trustpilot.com/review/geotapp.com" target="_blank" rel="noopener noreferrer" aria-label="Trustpilot" className="text-text-secondary hover:text-[#00b67a] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0l2.927 8.986H24l-7.336 5.328 2.8 8.614L12 17.6l-7.464 5.328 2.8-8.614L0 8.986h9.073z"/></svg>
              </a>
            </div>

            {/* Copyright + identità aziendale (online-only: niente indirizzo/telefono) */}
            <div className="text-text-muted text-xs text-center md:text-right">
              <span>&copy; 2026 GeoTapp. {dict.rights}</span>
              <span className="block mt-1">GeoTapp di Michele Angelo Petraroli · P.IVA IT04183990987</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
