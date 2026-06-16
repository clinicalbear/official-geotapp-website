import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';
import { getAllStati } from '@/lib/risorse/gps-lavoratori-ue';
import SelettorePaesiClient, {
  type PaeseSelettore,
} from '@/components/risorse/SelettorePaesiClient';

/**
 * Widget incorporabile: mappa + selettore "GPS lavoratori UE" standalone, pensato
 * per essere messo in <iframe> da siti terzi. Cliccando un Paese apre la scheda
 * completa su geotapp.com in una nuova scheda. Mini-logo GeoTapp in basso a destra.
 * Route: /embed/[locale]/gps-lavoratori-ue .
 */

export function generateStaticParams(): { locale: string }[] {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

function safeLocale(locale: string): AppLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale)
    ? (locale as AppLocale)
    : ('it' as AppLocale);
}

export default async function EmbedGpsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = safeLocale(locale);
  const dict = getDictionary(resolvedLocale).risorseGps;

  const countries: PaeseSelettore[] = getAllStati().map((s) => ({
    slugCanonico: s.slugCanonico,
    codiceISO: s.codiceISO,
    nome: s.nome,
    bandiera: s.bandiera,
    stato: s.stato,
    href: localizePath(`/risorse/gps-lavoratori-ue/${s.slugCanonico}/`, resolvedLocale),
  }));

  return (
    <SelettorePaesiClient countries={countries} dict={dict} h1={dict.h1Selettore} embed />
  );
}
