import type { ReactNode } from 'react';
import { headers } from 'next/headers';
import { fontiPerLingua } from '@/lib/fonts';
import '../globals.css';
// Sistema grafico "direzione L": qui SOLO per le route del blog headless
// (/blog/*, senza prefisso locale), che non passano da [locale]/layout.tsx
// e quindi non lo caricherebbero altrimenti.
import '../l-mockup.css';
// La coda: stesso foglio del resto del sito, cosi' il footer del blog e quello
// del sito non possono divergere (le regole stavano in redesign-l.css, che qui
// non si carica, e il blog usciva coi link piu' spenti e i loghi a colori).
import '../l-footer.css';
import { clsx } from 'clsx';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SurveyInvite from '@/components/SurveyInvite';
import NewsletterModal from '@/components/NewsletterModal';
import Script from 'next/script';
import SiteAnalytics from '@/components/SiteAnalytics';
import InternalTrafficBadge from '@/components/InternalTrafficBadge';
import CookieConsentBanner from '@/components/CookieConsentBanner';
import LEffetti from '@/components/LEffetti';
import { buildConsentDefaultScript } from '@/lib/consent-mode';


export default async function BlogLayout({ children }: { children: ReactNode }) {
  // Il layout non riceve params: la lingua dell'articolo arriva dal middleware
  // via header x-blog-locale (parsata dal path /blog/{lang}/...). Le route blog
  // sono force-dynamic, quindi headers() qui non cambia il modello di rendering.
  // Fallback 'en' per le route senza header (es. /blog/author/).
  const locale = (await headers()).get('x-blog-locale') ?? 'en';

  return (
    <html lang={locale}>
      <head>
        {/* Internal traffic toggle, same as [locale]/layout.tsx. Visit
            ?gt_internal=on/off to opt-out/in for this browser. */}
        <Script id="internal-traffic-toggle" strategy="beforeInteractive">
          {`(function(){try{var url=new URL(window.location.href);var p=url.searchParams.get('gt_internal');if(p==='on')localStorage.setItem('gt_skip_analytics','1');if(p==='off')localStorage.removeItem('gt_skip_analytics');if(p==='on'||p==='off'){url.searchParams.delete('gt_internal');history.replaceState(null,'',url.toString());}window.__gtSkip=localStorage.getItem('gt_skip_analytics')==='1';if(window.__gtSkip)console.warn('[GeoTapp] Internal traffic, analytics DISABLED. ?gt_internal=off to re-enable.');}catch(_){}})();`}
        </Script>
        {/* Google Consent Mode v2, client-side dal cookie gt_geo: l'HTML del
            blog e' edge-cached (fix 5xx 01/07), il regime per-visitatore non
            puo' stare nell'HTML o resta impresso nella copia cachata. */}
        <Script id="google-consent-default" strategy="beforeInteractive">
          {buildConsentDefaultScript()}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-87PN0GEMW4"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}var ua=navigator.userAgent||'';var isBot=/bot|crawl|spider|headless|phantom|puppet|selenium|playwright|wget|curl|python|scrapy|httpclient/i.test(ua)||!navigator.languages||navigator.languages.length===0||navigator.webdriver===true;if(!isBot&&window.__gtSkip!==true){gtag('js',new Date());gtag('config','G-87PN0GEMW4');}`}
        </Script>
        {/* Adsense fully removed, owner decided not to configure ad inventory.
            Saves ~75-90ms TBT on every blog page on top of the main site. */}
      </head>
      <body className={clsx(...fontiPerLingua(locale), 'font-sans bg-background text-text-primary antialiased')}>
        <SiteAnalytics />
        {/* Navbar FUORI dal wrapper overflow: un antenato con overflow!=visible rompe position:sticky */}
        <Navbar />
        {/* Osservatore globale dei reveal .r/.r-l/.r-r/.r-s (direzione L) */}
        <LEffetti />
        <div className="relative min-h-screen overflow-x-clip">
          <div className="relative z-10">
            <main>{children}</main>
            <Footer />
          </div>
        </div>
        <SurveyInvite />
        <NewsletterModal locale={locale} />
        <InternalTrafficBadge />
        <CookieConsentBanner locale={locale} />
      </body>
    </html>
  );
}
