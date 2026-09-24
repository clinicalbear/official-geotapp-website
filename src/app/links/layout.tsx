import type { ReactNode } from 'react';
import { fontiLatine } from '@/lib/fonts';
import '../globals.css';
import { clsx } from 'clsx';
import DictionaryBridge from '@/lib/i18n/DictionaryBridge';
import { getDictionary } from '@/lib/i18n/dictionaries';

export default function LinksLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body
        className={clsx(
          ...fontiLatine,
          'bg-white text-slate-900 font-sans antialiased',
        )}
      >
        <DictionaryBridge locale={'it'} dict={getDictionary('it')}>
        {children}
              </DictionaryBridge>
      </body>
    </html>
  );
}
