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
 *
 * `l-mockup.css`/`redesign-l.css` sono importati anche qui (oltre che da
 * `[locale]/layout.tsx`) perche' la pagina vestita nella direzione L (classi
 * `.lp-l`, `.ph`, `.form`, ecc.) deve rendere identica anche su questo guscio
 * senza locale: e' l'indirizzo che il cliente finale apre davvero dal QR.
 * `<main>` avvolge i children per la stessa convenzione delle pagine con
 * locale (`main:has(> .lp-l){padding-top:0}` in l-mockup.css).
 */

import type { ReactNode } from 'react';
import '../globals.css';
import '../redesign-l.css';
import '../l-mockup.css';

export default function LayoutVerifica({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
