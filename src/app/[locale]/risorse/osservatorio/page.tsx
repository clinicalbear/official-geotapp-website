import type { Metadata } from 'next';
import Link from 'next/link';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { SLUG_MAP } from '@/lib/i18n/slug-map';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { osservatorioStrings } from '@/lib/risorse/osservatorio/i18n';
import registro from '@/lib/risorse/osservatorio/data.json';
import TabellaOsservatorio, { LOCALE_DATA } from './tabella';
import Incorpora from './incorpora';
import type { Voce } from './tabella';
import '../sanzioni-gps/l-page.css';
import './l-page.css';

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
 *
 * Tabella e filtro per nazione stanno in ./tabella, che e' l'unico pezzo con il
 * browser dentro: il resto resta statico.
 */

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

function safeLocale(locale: string): AppLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale)
    ? (locale as AppLocale)
    : ('it' as AppLocale);
}

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

  const voci = registro.voci as Voce[];
  const aggiornato = new Date(registro.aggiornato).toLocaleDateString(intl);
  const homeHref = `/${resolvedLocale}/`;

  return (
    <div className="lp-l lp-risorsa-strumento lp-osservatorio">
      <section className="ph">
        <div className="crumb">
          <div className="w">
            <Link href={homeHref}>GeoTapp</Link> / {d.navbar.resources} / {s.nomeBreve}
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
          <p className="oss-avviso">{s.avviso}</p>

          <TabellaOsservatorio voci={voci} locale={resolvedLocale} aggiornato={aggiornato} />

          <p className="oss-nota">{s.chiusura}</p>

          <Incorpora
            locale={resolvedLocale}
            src={`https://geotapp.com/embed/${SLUG_MAP.osservatorio?.[resolvedLocale] ?? 'osservatorio'}/`}
          />
        </div>
      </section>

    </div>
  );
}
