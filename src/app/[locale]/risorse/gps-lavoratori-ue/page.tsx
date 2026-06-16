import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';
import { getAllStati } from '@/lib/risorse/gps-lavoratori-ue';
import {
  buildBreadcrumbItems,
  buildBreadcrumbJsonLd,
} from '@/lib/risorse/gps-lavoratori-ue/jsonLd';
import SelettorePaesiClient, {
  type PaeseSelettore,
} from '@/components/risorse/SelettorePaesiClient';
import EmbedCodeBox from '@/components/risorse/EmbedCodeBox';

/**
 * Pagina-selettore (landing dello strumento) della risorsa "GPS sui lavoratori in UE".
 *
 * Route: /[locale]/risorse/gps-lavoratori-ue/ . Mostra la mappa cliccabile + un
 * <select> di fallback; ogni paese punta allo slug LOCALIZZATO della sua scheda.
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
  const dict = getDictionary(safeLocale(locale)).risorseGps;
  return {
    title: { absolute: dict.metaTitleSelettore },
    description: dict.metaDescSelettore,
    alternates: buildLocaleAlternates(locale, '/risorse/gps-lavoratori-ue/'),
  };
}

export default async function SelettorePaesiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = safeLocale(locale);
  const fullDict = getDictionary(resolvedLocale);
  const dict = fullDict.risorseGps;

  const countries: PaeseSelettore[] = getAllStati().map((s) => ({
    slugCanonico: s.slugCanonico,
    codiceISO: s.codiceISO,
    nome: s.nome,
    bandiera: s.bandiera,
    stato: s.stato,
    href: localizePath(
      `/risorse/gps-lavoratori-ue/${s.slugCanonico}/`,
      resolvedLocale,
    ),
  }));

  // Structured data: BreadcrumbList (Home -> Strumento).
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(
    buildBreadcrumbItems(resolvedLocale, dict.h1Selettore),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SelettorePaesiClient
        countries={countries}
        dict={dict}
        h1={dict.h1Selettore}
      />
      <div className="container mx-auto max-w-3xl px-4 pb-16">
        <EmbedCodeBox
          embedUrl={`https://geotapp.com/embed/${resolvedLocale}/gps-lavoratori-ue/`}
          pageUrl={`https://geotapp.com${localizePath('/risorse/gps-lavoratori-ue/', resolvedLocale)}`}
          pageTitle={dict.h1Selettore}
          labels={fullDict.embedStrumento}
        />
      </div>
    </>
  );
}
