import type { ReactNode } from 'react';
import { Inter, Poppins } from 'next/font/google';
import '../globals.css';
import { clsx } from 'clsx';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
// Poppins weights kept in sync with src/app/[locale]/layout.tsx.
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-poppins',
});

export default function LinksLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body
        className={clsx(
          inter.variable,
          poppins.variable,
          'bg-white text-slate-900 font-sans antialiased',
        )}
      >
        {children}
      </body>
    </html>
  );
}
