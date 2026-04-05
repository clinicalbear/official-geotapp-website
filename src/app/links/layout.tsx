import type { ReactNode } from 'react';
import { Inter, Poppins } from 'next/font/google';
import '../globals.css';
import { clsx } from 'clsx';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
