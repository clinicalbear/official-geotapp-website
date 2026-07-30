/**
 * Il guscio della pagina di verifica servita senza locale.
 *
 * `geotapp.com/verify-report?id=...` sta stampato in calce a ogni report gia'
 * consegnato: quell'indirizzo deve funzionare cosi' com'e', senza passare da un
 * redirect di locale. Ma il layout radice del sito non mette html e body (li
 * mette `[locale]/layout.tsx`), quindi la pagina servita direttamente ha bisogno
 * del suo guscio, altrimenti muore con "Missing <html> and <body> tags".
 *
 * La versione con il locale (`/it/verify-report/`) continua a usare il guscio del
 * sito, con navigazione e piede.
 */

import type { ReactNode } from 'react';
import '../globals.css';

export default function LayoutVerifica({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F7F7F4] antialiased">{children}</body>
    </html>
  );
}
