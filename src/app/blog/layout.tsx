import type { ReactNode } from 'react';
import { Inter, Poppins } from 'next/font/google';
import '../globals.css';
import { clsx } from 'clsx';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import SiteAnalytics from '@/components/SiteAnalytics';
import InternalTrafficBadge from '@/components/InternalTrafficBadge';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function BlogLayout({ children }: { children: ReactNode }) {
  // Detect locale from the URL at render time is not possible in a layout
  // without params. Default to 'en' for the blog article pages — the Navbar
  // and Footer will show English labels. The LanguageSwitcher still works.
  const locale = 'en';

  return (
    <html lang={locale}>
      <head>
        {/* Internal traffic toggle — same as [locale]/layout.tsx. Visit
            ?gt_internal=on/off to opt-out/in for this browser. */}
        <Script id="internal-traffic-toggle" strategy="beforeInteractive">
          {`(function(){try{var url=new URL(window.location.href);var p=url.searchParams.get('gt_internal');if(p==='on')localStorage.setItem('gt_skip_analytics','1');if(p==='off')localStorage.removeItem('gt_skip_analytics');if(p==='on'||p==='off'){url.searchParams.delete('gt_internal');history.replaceState(null,'',url.toString());}window.__gtSkip=localStorage.getItem('gt_skip_analytics')==='1';if(window.__gtSkip)console.warn('[GeoTapp] Internal traffic — analytics DISABLED. ?gt_internal=off to re-enable.');}catch(_){}})();`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-87PN0GEMW4"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}var ua=navigator.userAgent||'';var isBot=/bot|crawl|spider|headless|phantom|puppet|selenium|playwright|wget|curl|python|scrapy|httpclient/i.test(ua)||!navigator.languages||navigator.languages.length===0||navigator.webdriver===true;if(!isBot&&window.__gtSkip!==true){gtag('js',new Date());gtag('config','G-87PN0GEMW4');}`}
        </Script>
        {/* Adsense loads only on the blog (this layout) — ad inventory lives
            here, not on the main site. Saves ~75-90ms TBT across non-blog pages. */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6506843864993991"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body className={clsx(inter.variable, poppins.variable, 'font-sans bg-background text-text-primary antialiased')}>
        <SiteAnalytics />
        <div className="relative min-h-screen overflow-x-clip">
          <div className="relative z-10">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
        <InternalTrafficBadge />
      </body>
    </html>
  );
}
