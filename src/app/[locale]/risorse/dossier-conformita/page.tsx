import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';
import { getDossierCopy } from '@/content/dossier-conformita';
import RisorsaAttribuzione from '@/components/risorse/RisorsaAttribuzione';
import RisorsaFaq from '@/components/risorse/RisorsaFaq';

/**
 * Dossier di conformità GeoTapp ("prova del lavoro, non sorveglianza").
 * Contenuto lungo per-locale in src/content/dossier-conformita/{locale}.ts
 * (fallback su 'it'). Route: /[locale]/risorse/dossier-conformita/.
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
  const copy = await getDossierCopy(safeLocale(locale));
  return {
    title: { absolute: copy.metaTitle },
    description: copy.metaDesc,
    alternates: buildLocaleAlternates(locale, '/risorse/dossier-conformita/'),
  };
}

export default async function DossierConformitaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = safeLocale(locale);
  const copy = await getDossierCopy(resolvedLocale);
  const d = getDictionary(resolvedLocale);

  return (
    <main className="container mx-auto max-w-3xl px-4 py-12 md:py-16">
      <header className="mb-10">
        <span className="inline-block rounded-full bg-primary/10 text-primary text-sm font-semibold px-3 py-1 mb-4">
          {copy.badge}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{copy.h1}</h1>
        <p className="text-slate-600 text-lg leading-relaxed">{copy.subtitle}</p>
      </header>

      <article className="space-y-10">
        {copy.sections.map((section, i) => (
          <section key={i}>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">{section.heading}</h2>
            <div className="space-y-4">
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-slate-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">{copy.sourcesTitle}</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 leading-relaxed">
            {copy.sources.map((src, i) => (
              <li key={i}>{src}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-400">{copy.lastUpdated}</p>
        </section>
      </article>

      {copy.faq && (
        <div className="mt-12">
          <RisorsaFaq title={copy.faq.title} items={copy.faq.items} />
        </div>
      )}

      <RisorsaAttribuzione
        pageUrl={`https://geotapp.com${localizePath('/risorse/dossier-conformita/', resolvedLocale)}`}
        pageTitle={`${copy.h1} - GeoTapp`}
        contactHref={localizePath('/contact', resolvedLocale)}
        labels={d.attribuzione}
        anno={2026}
      />
    </main>
  );
}
