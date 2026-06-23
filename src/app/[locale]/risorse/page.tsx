import type { Metadata } from 'next';
import Link from 'next/link';
import { Map, Calculator, ClipboardList, Gavel, BarChart3, FileText, ShieldCheck, ClipboardCheck, Archive, ArrowRight } from 'lucide-react';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';
import RisorsaFaq from '@/components/risorse/RisorsaFaq';

/**
 * Hub "Risorse": vetrina di tutti gli strumenti/risorse gratuiti del sito
 * (GPS lavoratori UE, calcolatore ROI, sondaggio...). Pagina data-driven:
 * aggiungere una risorsa = aggiungere una voce a CARDS + la sua chiave nel
 * dizionario `risorseHub.cards`. Slug "risorse" già localizzato via slug-map
 * (en: resources, de: ressourcen, ...).
 *
 * Route: /[locale]/risorse/ .
 */

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

function safeLocale(locale: string): AppLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale)
    ? (locale as AppLocale)
    : ('it' as AppLocale);
}

// Ordine e destinazioni delle card; testi (title/desc) dal dizionario per chiave.
const CARDS = [
  { key: 'gps', path: '/risorse/gps-lavoratori-ue/', Icon: Map },
  { key: 'dossier', path: '/risorse/dossier-conformita/', Icon: ShieldCheck },
  { key: 'autovalutazione', path: '/risorse/autovalutazione-dati-dipendenti/', Icon: ClipboardCheck },
  { key: 'generatore', path: '/risorse/generatore-informativa-gps/', Icon: FileText },
  { key: 'conservazione', path: '/risorse/politica-conservazione-dati/', Icon: Archive },
  { key: 'sanzioni', path: '/risorse/sanzioni-gps/', Icon: Gavel },
  { key: 'indice', path: '/risorse/indice-sorveglianza/', Icon: BarChart3 },
  { key: 'roi', path: '/roi-calculator/', Icon: Calculator },
  { key: 'survey', path: '/survey/', Icon: ClipboardList },
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(safeLocale(locale)).risorseHub;
  return {
    title: { absolute: dict.metaTitle },
    description: dict.metaDesc,
    alternates: buildLocaleAlternates(locale, '/risorse/'),
  };
}

export default async function RisorseHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = safeLocale(locale);
  const dict = getDictionary(resolvedLocale).risorseHub;

  return (
    <main className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          {dict.h1}
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
          {dict.intro}
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map(({ key, path, Icon }) => {
          const card = dict.cards[key];
          return (
            <Link
              key={key}
              href={localizePath(path, resolvedLocale)}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-[#8FC436] hover:shadow-md"
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#8FC436]/15 text-[#6a9a1f]">
                <Icon size={24} />
              </span>
              <h2 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h2>
              <p className="text-slate-600 leading-relaxed flex-1">{card.desc}</p>
              <span className="mt-4 inline-flex items-center text-[#6a9a1f]">
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>

      <RisorsaFaq title={dict.faq.title} items={dict.faq.items} />
    </main>
  );
}
