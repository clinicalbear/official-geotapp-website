import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { REVERSE_SLUG_MAP, translateSlug } from '@/lib/i18n/slug-map';
import { getAllStati, getSchedaBySlug } from '@/lib/risorse/gps-lavoratori-ue';
import {
  buildBreadcrumbItems,
  buildBreadcrumbJsonLd,
  buildSchedaArticleJsonLd,
} from '@/lib/risorse/gps-lavoratori-ue/jsonLd';
import SchedaPaeseView from '@/components/risorse/SchedaPaeseView';

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

  const title = dict.metaTitleScheda.replace('{paese}', scheda.nome);
  const description = dict.metaDescScheda.replace('{paese}', scheda.nome);

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
  const dict = getDictionary(resolvedLocale).risorseGps;

  const canonical = localizedToCanonical(paese, resolvedLocale);
  const scheda = getSchedaBySlug(canonical);
  if (!scheda) {
    notFound();
  }

  const trialUrl = `/${resolvedLocale}/trial/`;

  // Structured data: BreadcrumbList (Home -> Strumento -> Paese) + Article.
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(
    buildBreadcrumbItems(resolvedLocale, dict.h1Selettore, {
      name: scheda.nome,
      canonicalSlug: scheda.slugCanonico,
    }),
  );
  const articleJsonLd = buildSchedaArticleJsonLd({
    locale: resolvedLocale,
    headline: dict.metaTitleScheda.replace('{paese}', scheda.nome),
    description: dict.metaDescScheda.replace('{paese}', scheda.nome),
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
      />
    </>
  );
}
