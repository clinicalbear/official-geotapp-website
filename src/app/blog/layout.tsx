import type { ReactNode } from 'react';
import { Inter, Poppins } from 'next/font/google';
import '../globals.css';
import { clsx } from 'clsx';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-87PN0GEMW4"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-87PN0GEMW4');`}
        </Script>
      </head>
      <body className={clsx(inter.variable, poppins.variable, 'font-sans bg-background text-text-primary antialiased')}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
