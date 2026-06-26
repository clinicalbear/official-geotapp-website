import type { ReactNode } from 'react';
import { Inter, Poppins } from 'next/font/google';
import '../globals.css';
import { clsx } from 'clsx';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SurveyInvite from '@/components/SurveyInvite';
import Script from 'next/script';
import SiteAnalytics from '@/components/SiteAnalytics';
import InternalTrafficBadge from '@/components/InternalTrafficBadge';
import CookieConsentBanner from '@/components/CookieConsentBanner';
import { getConsentMode } from '@/lib/consent-mode';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
// Poppins weights kept in sync with src/app/[locale]/layout.tsx, only the
// subset of weights actually used in the codebase (500 for PricingSimulator,
// 700 for headings, 800 for the homepage hero H1). Saves preload bandwidth.
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-poppins',
});

export default async function BlogLayout({ children }: { children: ReactNode }) {
  // Detect locale from the URL at render time is not possible in a layout
  // without params. Default to 'en' for the blog article pages, the Navbar
  // and Footer will show English labels. The LanguageSwitcher still works.
  const locale = 'en';
  const consentMode = await getConsentMode();

  return (
    <html lang={locale}>
      <head>
        {/* Internal traffic toggle, same as [locale]/layout.tsx. Visit
            ?gt_internal=on/off to opt-out/in for this browser. */}
        <Script id="internal-traffic-toggle" strategy="beforeInteractive">
          {`(function(){try{var url=new URL(window.location.href);var p=url.searchParams.get('gt_internal');if(p==='on')localStorage.setItem('gt_skip_analytics','1');if(p==='off')localStorage.removeItem('gt_skip_analytics');if(p==='on'||p==='off'){url.searchParams.delete('gt_internal');history.replaceState(null,'',url.toString());}window.__gtSkip=localStorage.getItem('gt_skip_analytics')==='1';if(window.__gtSkip)console.warn('[GeoTapp] Internal traffic, analytics DISABLED. ?gt_internal=off to re-enable.');}catch(_){}})();`}
        </Script>
        {/* Google Consent Mode v2 geo-aware: EU/UK/EEA/CH → denied + banner;
            altri Paesi → granted (no obbligo per analytics non-essenziali). */}
        <Script id="google-consent-default" strategy="beforeInteractive">
          {consentMode === 'eu'
            ? `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                wait_for_update: 500,
              });
              window.__gtConsentMode = 'eu';
            `
            : `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                analytics_storage: 'granted',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
              });
              window.__gtConsentMode = 'rest';
            `}
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
      <body className={clsx(inter.variable, poppins.variable, 'font-sans bg-background text-text-primary antialiased')}>
        <SiteAnalytics />
        {/* Navbar FUORI dal wrapper overflow: un antenato con overflow!=visible rompe position:sticky */}
        <Navbar />
        <div className="relative min-h-screen overflow-x-clip">
          <div className="relative z-10">
            <main>{children}</main>
            <Footer />
          </div>
        </div>
        <SurveyInvite />
        <InternalTrafficBadge />
        {consentMode === 'eu' && <CookieConsentBanner locale={locale} />}
      </body>
    </html>
  );
}
