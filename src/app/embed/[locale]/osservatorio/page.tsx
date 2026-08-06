import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';
import { osservatorioStrings } from '@/lib/risorse/osservatorio/i18n';
import registro from '@/lib/risorse/osservatorio/data.json';
import TabellaOsservatorio, { LOCALE_DATA } from '../../../[locale]/risorse/osservatorio/tabella';
import type { Voce } from '../../../[locale]/risorse/osservatorio/tabella';
import '../../../[locale]/risorse/osservatorio/l-page.css';
import './embed.css';

/**
 * Widget incorporabile: la tabella dell'osservatorio da sola, senza navbar ne' footer,
 * pensata per stare in un <iframe> su un sito terzo. Route /embed/[locale]/osservatorio,
 * framabile da chiunque (gli header stanno nel middleware).
 *
 * Porta con se' il filtro per nazione e, in fondo, il credito con il collegamento alla
 * risorsa: chi incorpora la tabella deve citare la fonte, e la citazione viaggia dentro
 * il widget invece di dipendere dalla buona volonta' di chi lo mette in pagina.
 */

export function generateStaticParams(): { locale: string }[] {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

function safeLocale(locale: string): AppLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale)
    ? (locale as AppLocale)
    : ('it' as AppLocale);
}

export default async function EmbedOsservatorioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = safeLocale(locale);
  const s = osservatorioStrings(resolvedLocale);
  const intl = LOCALE_DATA[resolvedLocale] ?? 'it-IT';

  const voci = registro.voci as Voce[];
  const aggiornato = new Date(registro.aggiornato).toLocaleDateString(intl);
  const href = `https://geotapp.com${localizePath('/risorse/osservatorio/', resolvedLocale)}`;

  return (
    <div className="lp-osservatorio oss-embed">
      <TabellaOsservatorio voci={voci} locale={resolvedLocale} aggiornato={aggiornato} />
      <p className="oss-credito">
        <a href={href} target="_blank" rel="noopener">{s.creditoEmbed}</a>
      </p>
    </div>
  );
}
