'use client';

import { useState } from 'react';
import type { AppLocale } from '@/lib/i18n/config';
import { osservatorioStrings } from '@/lib/risorse/osservatorio/i18n';

/**
 * "Prendi questi dati": il permesso di riusarli citando la fonte, e il codice per
 * incorporare la tabella in un altro sito.
 *
 * L'indirizzo dello snippet NON porta la lingua: /embed/osservatorio/ la sceglie in
 * base al visitatore (Accept-Language, e il paese come ripiego), cosi' la stessa riga
 * di codice incollata su un sito tedesco esce in tedesco. Il registro e' europeo: se
 * la lingua la decidesse chi copia, resterebbe un registro italiano incorporato altrove.
 *
 * Il codice sta in un <textarea> di sola lettura e non in un <pre>: cosi' si seleziona
 * tutto con un tocco anche dove il pulsante Copia non funziona, perche' la scrittura
 * negli appunti vuole un contesto sicuro e su un browser vecchio non c'e'.
 */

export default function Incorpora({
  locale,
  src,
}: {
  locale: AppLocale;
  src: string;
}) {
  const s = osservatorioStrings(locale);
  const [copiato, setCopiato] = useState(false);

  const codice = `<iframe src="${src}" width="100%" height="720" style="border:1px solid #d8dcd4;border-radius:10px" `
    + `loading="lazy" title="${s.h1}"></iframe>`;

  async function copia() {
    try {
      await navigator.clipboard.writeText(codice);
      setCopiato(true);
      setTimeout(() => setCopiato(false), 2500);
    } catch {
      setCopiato(false);
    }
  }

  return (
    <section className="oss-prendi">
      <h2>{s.datiTitolo}</h2>
      <p>{s.datiLicenza}</p>

      <h3>{s.incorporaTitolo}</h3>
      <p>{s.incorporaIstruzioni}</p>

      <div className="oss-codice">
        <textarea readOnly rows={3} value={codice} aria-label={s.incorporaTitolo} />
        <button type="button" className="oss-copia" onClick={copia}>
          {copiato ? s.copiato : s.copia}
        </button>
      </div>
    </section>
  );
}
