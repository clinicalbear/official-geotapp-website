import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import '../../globals.css';

/**
 * Layout per i widget incorporabili (/embed/...). Route fuori da [locale], quindi
 * rende il proprio html/body + Tailwind + font, SENZA navbar/footer/provider del
 * sito. Framabile da siti terzi (header gestiti nel middleware). Non indicizzato.
 */

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-poppins' });

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function EmbedLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-white text-slate-900">{children}</body>
    </html>
  );
}
