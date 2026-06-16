import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';
import { REVERSE_SLUG_MAP, translateSlug } from '@/lib/i18n/slug-map';
import { getAllStati, getSchedaBySlug } from '@/lib/risorse/gps-lavoratori-ue';
import {
  buildBreadcrumbItems,
  buildBreadcrumbJsonLd,
  buildSchedaArticleJsonLd,
} from '@/lib/risorse/gps-lavoratori-ue/jsonLd';
import SchedaPaeseView from '@/components/risorse/SchedaPaeseView';
import CambiaStatoSelect from '@/components/risorse/CambiaStatoSelect';
import RisorsaAttribuzione from '@/components/risorse/RisorsaAttribuzione';
import type { PaeseSelettore } from '@/components/risorse/SelettorePaesiClient';

/**
 * Pagina-scheda per paese della risorsa "GPS sui lavoratori in UE".
 *
 * Route: /[locale]/risorse/gps-lavoratori-ue/[paese] dove [paese] è lo slug
 * LOCALIZZATO (es. /de/.../italien, /it/.../italia). Lo slug localizzato viene
 * ri-mappato al canonico via REVERSE_SLUG_MAP, poi getSchedaBySlug.
 */

function safeLocale(locale: string): AppLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale)
    ? (locale as AppLocale)
    : ('it' as AppLocale);
}

/** Slug localizzato -> slug canonico per la locale data. */
function localizedToCanonical(paese: string, locale: AppLocale): string {
  return REVERSE_SLUG_MAP[locale]?.[paese] ?? paese;
}

export function generateStaticParams(): { locale: string; paese: string }[] {
  // Solo i paesi già pubblicati (non "in-arrivo"), per ogni locale supportata.
  // Lo slug `paese` è quello LOCALIZZATO della locale corrispondente.
  const shipped = getAllStati().filter((s) => s.stato !== 'in-arrivo');
  const params: { locale: string; paese: string }[] = [];
  for (const locale of SUPPORTED_LOCALES) {
    for (const stato of shipped) {
      params.push({
        locale,
        paese: translateSlug(stato.slugCanonico, locale as AppLocale),
      });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; paese: string }>;
}): Promise<Metadata> {
  const { locale, paese } = await params;
  const resolvedLocale = safeLocale(locale);
  const dict = getDictionary(resolvedLocale).risorseGps;

  const canonical = localizedToCanonical(paese, resolvedLocale);
  const scheda = getSchedaBySlug(canonical);
  if (!scheda) {
    return { title: { absolute: 'GeoTapp' } };
  }

  const nomePaese = scheda.nomi?.[resolvedLocale] ?? scheda.nome;
  const title = dict.metaTitleScheda.replace('{paese}', nomePaese);
  const description = dict.metaDescScheda.replace('{paese}', nomePaese);

  return {
    title: { absolute: title },
    description,
    alternates: buildLocaleAlternates(
      locale,
      `/risorse/gps-lavoratori-ue/${scheda.slugCanonico}/`,
    ),
  };
}

export default async function SchedaPaesePage({
  params,
}: {
  params: Promise<{ locale: string; paese: string }>;
}) {
  const { locale, paese } = await params;
  const resolvedLocale = safeLocale(locale);
  const fullDict = getDictionary(resolvedLocale);
  const dict = fullDict.risorseGps;

  const canonical = localizedToCanonical(paese, resolvedLocale);
  const scheda = getSchedaBySlug(canonical);
  if (!scheda) {
    notFound();
  }

  const trialUrl = `/${resolvedLocale}/trial/`;
  const nomePaese = scheda.nomi?.[resolvedLocale] ?? scheda.nome;

  // Elenco paesi per il selettore in-scheda (stessa lista del selettore principale).
  const countries: PaeseSelettore[] = getAllStati().map((s) => ({
    slugCanonico: s.slugCanonico,
    codiceISO: s.codiceISO,
    nome: s.nome,
    bandiera: s.bandiera,
    stato: s.stato,
    href: localizePath(`/risorse/gps-lavoratori-ue/${s.slugCanonico}/`, resolvedLocale),
  }));
  const currentHref = localizePath(
    `/risorse/gps-lavoratori-ue/${scheda.slugCanonico}/`,
    resolvedLocale,
  );

  // Structured data: BreadcrumbList (Home -> Strumento -> Paese) + Article.
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(
    buildBreadcrumbItems(resolvedLocale, dict.h1Selettore, {
      name: nomePaese,
      canonicalSlug: scheda.slugCanonico,
    }),
  );
  const articleJsonLd = buildSchedaArticleJsonLd({
    locale: resolvedLocale,
    headline: dict.metaTitleScheda.replace('{paese}', nomePaese),
    description: dict.metaDescScheda.replace('{paese}', nomePaese),
    dateModified: scheda.aggiornatoIl,
    canonicalSlug: scheda.slugCanonico,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <SchedaPaeseView
        scheda={scheda}
        dict={dict}
        locale={resolvedLocale}
        trialUrl={trialUrl}
        nomePaese={nomePaese}
        attribuzione={
          <RisorsaAttribuzione
            pageUrl={`https://geotapp.com${currentHref}`}
            pageTitle={dict.metaTitleScheda.replace('{paese}', nomePaese)}
            contactHref={localizePath('/contact', resolvedLocale)}
            labels={fullDict.attribuzione}
            anno={2026}
          />
        }
        switcher={
          <CambiaStatoSelect
            countries={countries}
            currentHref={currentHref}
            label={dict.scegliPaese}
            inArrivoLabel={dict.inArrivo}
          />
        }
      />
    </>
  );
}
