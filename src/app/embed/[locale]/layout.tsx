import type { Metadata } from 'next';
import { fontiPerLingua } from '@/lib/fonts';
import '../../globals.css';

/**
 * Layout per i widget incorporabili (/embed/...). Route fuori da [locale], quindi
 * rende il proprio html/body + Tailwind + font, SENZA navbar/footer/provider del
 * sito. Framabile da siti terzi (header gestiti nel middleware). Non indicizzato.
 */

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
    <html lang={locale} className={fontiPerLingua(locale).join(' ')}>
      <body className="font-sans antialiased bg-white text-slate-900">{children}</body>
    </html>
  );
}
