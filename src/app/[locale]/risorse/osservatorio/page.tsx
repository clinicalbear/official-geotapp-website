import type { Metadata } from 'next';
import Link from 'next/link';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { osservatorioStrings } from '@/lib/risorse/osservatorio/i18n';
import registro from '@/lib/risorse/osservatorio/data.json';
import '../sanzioni-gps/l-page.css';

/**
 * Risorsa "Osservatorio europeo": i provvedimenti delle autorita' per la protezione
 * dei dati che toccano il controllo, la geolocalizzazione e le presenze dei lavoratori,
 * raccolti dalle fonti ufficiali e messi in una sola tabella.
 *
 * La pagina non interpreta: ogni riga porta data, autorita', titolo come lo scrive la
 * fonte e il link al documento originale. Gli importi compaiono solo quando l'autorita'
 * li scrive per esteso. I dati arrivano da src/lib/risorse/osservatorio/data.json,
 * rigenerato dall'osservatorio del growth-engine.
 *
 * Tutti i testi passano da lib/risorse/osservatorio/i18n: la pagina esce in undici
 * lingue. I nomi delle autorita' restano nella loro, perche' "Garante per la protezione
 * dei dati personali" non si traduce, e' il nome proprio di un ente.
 */

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

function safeLocale(locale: string): AppLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale)
    ? (locale as AppLocale)
    : ('it' as AppLocale);
}

// Il quadro normativo va etichettato: Regno Unito e Svizzera non stanno sotto il
// Regolamento europeo, e metterli in fila senza dirlo sarebbe fuorviante.
const QUADRO: Record<string, string> = {
  gdpr: 'GDPR', uk_gdpr: 'UK GDPR', ch_lpd: 'LPD/DSG',
};

const LOCALE_DATA: Record<string, string> = {
  it: 'it-IT', en: 'en-GB', de: 'de-DE', fr: 'fr-FR', es: 'es-ES', pt: 'pt-PT',
  nl: 'nl-NL', sv: 'sv-SE', da: 'da-DK', nb: 'nb-NO', ru: 'ru-RU',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const s = osservatorioStrings(safeLocale(locale));
  return {
    title: { absolute: s.metaTitle },
    description: s.metaDesc,
    alternates: buildLocaleAlternates(locale, '/risorse/osservatorio/'),
  };
}

export default async function OsservatorioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = safeLocale(locale);
  const d = getDictionary(resolvedLocale);
  const s = osservatorioStrings(resolvedLocale);
  const intl = LOCALE_DATA[resolvedLocale] ?? 'it-IT';

  const voci = registro.voci;
  const paesi = Array.from(new Set(voci.map((v) => v.country))).sort();
  const aggiornato = new Date(registro.aggiornato).toLocaleDateString(intl);
  const homeHref = `/${resolvedLocale}/`;

  return (
    <div className="lp-l lp-risorsa-strumento">
      <section className="ph">
        <div className="crumb">
          <div className="w">
            <Link href={homeHref}>GeoTapp</Link> / {d.navbar.resources} / {s.kicker}
          </div>
        </div>
        <div className="w">
          <p className="kk k"><s></s>{d.navbar.resources}</p>
          <h1>{s.h1}</h1>
          <p className="lede">{s.lede}</p>
        </div>
      </section>

      <section className="sec">
        <div className="w">
          <p>
            <strong>{s.conteggio(voci.length, paesi.length, aggiornato)}</strong>{' '}
            {s.quadroNota}
          </p>

          <p><em>{s.avviso}</em></p>

          <div style={{ overflowX: 'auto' }}>
            <table>
              <thead>
                <tr>
                  <th>{s.thData}</th>
                  <th>{s.thPaese}</th>
                  <th>{s.thAutorita}</th>
                  <th>{s.thProvvedimento}</th>
                  <th>{s.thTemi}</th>
                  <th>{s.thSanzione}</th>
                </tr>
              </thead>
              <tbody>
                {voci.map((v) => (
                  <tr key={v.source_url + v.title}>
                    <td>{v.published_at}</td>
                    <td>
                      {v.country}
                      {v.framework !== 'gdpr' ? ` (${QUADRO[v.framework] ?? v.framework})` : ''}
                    </td>
                    <td>{v.authority}</td>
                    <td>
                      <a href={v.source_url} rel="nofollow noopener" target="_blank">
                        {v.title.slice(0, 150)}
                      </a>
                    </td>
                    <td>{v.topics.map((t) => s.temi[t] ?? t).join(', ')}</td>
                    <td>{v.amount_eur ? `${v.amount_eur.toLocaleString(intl)} €` : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>{s.chiusura}</p>
        </div>
      </section>

    </div>
  );
}
