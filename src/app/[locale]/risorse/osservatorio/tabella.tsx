'use client';

import { useMemo, useState } from 'react';
import type { AppLocale } from '@/lib/i18n/config';
import { osservatorioStrings } from '@/lib/risorse/osservatorio/i18n';

/**
 * La tabella dell'osservatorio con il filtro per nazione.
 *
 * Il filtro sta qui e non nella pagina perche' e' l'unico pezzo che ha bisogno del
 * browser: il resto della risorsa resta renderizzato a build time, e chi arriva senza
 * JavaScript vede comunque tutte le righe, che e' il comportamento giusto per una
 * pagina il cui unico scopo e' far leggere i provvedimenti.
 *
 * Il conteggio e la nota sul quadro normativo seguono le righe VISIBILI: dire "le
 * decisioni britanniche e svizzere sono segnate riga per riga" mentre in tabella non
 * c'e' nessuna riga britannica sarebbe una promessa non mantenuta, e uno che va a
 * cercarla se ne accorge.
 */

export interface Voce {
  country: string;
  authority: string;
  framework: string;
  title: string;
  published_at: string;
  source_url: string;
  topics: string[];
  amount_eur: number | null;
  doc_number: string;
  lang: string;
}

const QUADRO: Record<string, string> = {
  gdpr: 'GDPR', uk_gdpr: 'UK GDPR', ch_lpd: 'LPD/DSG',
};

export const LOCALE_DATA: Record<string, string> = {
  it: 'it-IT', en: 'en-GB', de: 'de-DE', fr: 'fr-FR', es: 'es-ES', pt: 'pt-PT',
  nl: 'nl-NL', sv: 'sv-SE', da: 'da-DK', nb: 'nb-NO', ru: 'ru-RU',
};

// Il registro usa UK, ma il codice ISO del Regno Unito e' GB: senza la mappa
// Intl non lo riconosce e la colonna resterebbe con la sigla nuda.
const ISO_REGIONE: Record<string, string> = { UK: 'GB' };

/** Nome del paese nella lingua del lettore, dal codice ISO. Cosi' la colonna dice
 *  "Paesi Bassi" a un italiano e "Niederlande" a un tedesco, senza tenere a mano
 *  quindici nomi per undici lingue. Se il codice non si risolve, resta la sigla. */
function nomePaese(codice: string, intl: string): string {
  try {
    const dn = new Intl.DisplayNames([intl], { type: 'region' });
    return dn.of(ISO_REGIONE[codice] ?? codice) ?? codice;
  } catch {
    return codice;
  }
}

export default function TabellaOsservatorio({
  voci,
  locale,
  aggiornato,
}: {
  voci: Voce[];
  locale: AppLocale;
  aggiornato: string;
}) {
  const s = osservatorioStrings(locale);
  const intl = LOCALE_DATA[locale] ?? 'it-IT';
  const [paese, setPaese] = useState<string>('');

  const dataBreve = useMemo(
    () => new Intl.DateTimeFormat(intl, { day: '2-digit', month: '2-digit', year: 'numeric' }),
    [intl],
  );
  // useGrouping esplicito: in automatico Intl omette il separatore sotto le cinque
  // cifre, e in colonna "6600" accanto a "460.000" sembrava un refuso.
  const importo = useMemo(
    () => new Intl.NumberFormat(intl, { maximumFractionDigits: 0, useGrouping: true }),
    [intl],
  );

  // I paesi si ordinano per nome tradotto, non per sigla: in tedesco la Danimarca
  // ("Daenemark") viene prima della Spagna, in italiano no.
  const paesi = useMemo(() => {
    const conta = new Map<string, number>();
    for (const v of voci) conta.set(v.country, (conta.get(v.country) ?? 0) + 1);
    return Array.from(conta.entries())
      .map(([codice, n]) => ({ codice, n, nome: nomePaese(codice, intl) }))
      .sort((a, b) => a.nome.localeCompare(b.nome, intl));
  }, [voci, intl]);

  const visibili = useMemo(
    () => (paese ? voci.filter((v) => v.country === paese) : voci),
    [voci, paese],
  );
  const fuoriGdpr = visibili.some((v) => v.framework !== 'gdpr');

  return (
    <>
      {/* aria-live: premendo una pastiglia cambia la tabella, e chi non la vede deve
          sentirsi dire quante righe sono rimaste e di che paese. */}
      <p className="oss-nota" aria-live="polite">
        <strong>
          {paese
            ? s.conteggioFiltrato(visibili.length, nomePaese(paese, intl), aggiornato)
            : s.conteggio(voci.length, paesi.length, aggiornato)}
        </strong>
        {fuoriGdpr ? ` ${s.quadroNota}` : ''}
      </p>

      <div className="oss-filtro" role="group" aria-label={s.filtroTitolo}>
        <span className="oss-filtro-tit">{s.filtroTitolo}</span>
        <button
          type="button"
          className={`oss-chip${paese === '' ? ' is-on' : ''}`}
          aria-pressed={paese === ''}
          onClick={() => setPaese('')}
        >
          {s.tutti} <span className="oss-chip-n">{voci.length}</span>
        </button>
        {paesi.map((p) => (
          <button
            key={p.codice}
            type="button"
            className={`oss-chip${paese === p.codice ? ' is-on' : ''}`}
            aria-pressed={paese === p.codice}
            onClick={() => setPaese(paese === p.codice ? '' : p.codice)}
          >
            {p.nome} <span className="oss-chip-n">{p.n}</span>
          </button>
        ))}
      </div>

      <div className="oss-scroll">
        <table className="oss-tab">
          <colgroup>
            <col style={{ width: '7.5rem' }} />
            <col style={{ width: '9.5rem' }} />
            <col style={{ width: '20%' }} />
            <col />
            <col style={{ width: '15%' }} />
            <col style={{ width: '7.5rem' }} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">{s.thData}</th>
              <th scope="col">{s.thPaese}</th>
              <th scope="col">{s.thAutorita}</th>
              <th scope="col">{s.thProvvedimento}</th>
              <th scope="col">{s.thTemi}</th>
              <th scope="col">{s.thSanzione}</th>
            </tr>
          </thead>
          <tbody>
            {visibili.map((v) => (
              <tr key={v.source_url + v.title}>
                <td className="oss-data" data-col={s.thData}>
                  {dataBreve.format(new Date(v.published_at))}
                </td>
                <td className="oss-paese" data-col={s.thPaese}>
                  {nomePaese(v.country, intl)}
                  {v.framework !== 'gdpr' ? (
                    <span className="oss-quadro">{QUADRO[v.framework] ?? v.framework}</span>
                  ) : null}
                </td>
                <td className="oss-aut" data-col={s.thAutorita}>{v.authority}</td>
                <td className="oss-tit" data-col={s.thProvvedimento}>
                  <a href={v.source_url} rel="nofollow noopener" target="_blank">
                    {v.title.slice(0, 150)}
                  </a>
                </td>
                <td data-col={s.thTemi}>
                  <span className="oss-temi">
                    {v.topics.map((t) => (
                      <span className="oss-tema" key={t}>{s.temi[t] ?? t}</span>
                    ))}
                  </span>
                </td>
                <td className="oss-imp" data-col={s.thSanzione}>
                  {v.amount_eur ? `${importo.format(v.amount_eur)} €` : ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
