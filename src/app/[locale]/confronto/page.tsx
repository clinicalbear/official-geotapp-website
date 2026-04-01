import type { Metadata } from 'next';
import Link from 'next/link';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/';

const META: Record<string, { title: string; description: string }> = {
  it: {
    title: 'GeoTapp vs Competitor — Confronti Completi | GeoTapp',
    description: 'Confronta GeoTapp con Connecteam, Clockify, Hubstaff e altri. Scopri perché GeoTapp è la scelta giusta per aziende con operatori sul campo che devono certificare il lavoro svolto.',
  },
  en: {
    title: 'GeoTapp vs Competitors — Full Comparisons | GeoTapp',
    description: 'Compare GeoTapp with Connecteam, Clockify, Hubstaff and others. Find out why GeoTapp is the right choice for field service companies that need to certify completed work.',
  },
  de: {
    title: 'GeoTapp vs Konkurrenten — Vollständige Vergleiche | GeoTapp',
    description: 'Vergleichen Sie GeoTapp mit Connecteam, Clockify, Hubstaff und anderen. Erfahren Sie, warum GeoTapp die richtige Wahl für Außendienstunternehmen ist.',
  },
};

const COMPARISONS = [
  {
    slug: 'geotapp-vs-connecteam',
    competitor: 'Connecteam',
    tagline_it: 'Comunicazione team vs certificazione interventi',
    tagline_en: 'Team communication vs job certification',
    highlight_it: 'Connecteam gestisce la comunicazione. GeoTapp produce prove verificabili del lavoro.',
    highlight_en: 'Connecteam manages communication. GeoTapp produces verifiable proof of work.',
  },
  {
    slug: 'geotapp-vs-clockify',
    competitor: 'Clockify',
    tagline_it: 'Time tracking vs prova del lavoro svolto',
    tagline_en: 'Time tracking vs proof of completed work',
    highlight_it: 'Clockify traccia le ore. GeoTapp certifica ogni intervento con GPS sigillato e foto.',
    highlight_en: 'Clockify tracks hours. GeoTapp certifies every job with sealed GPS and photos.',
  },
  {
    slug: 'geotapp-vs-hubstaff',
    competitor: 'Hubstaff',
    tagline_it: 'Monitoraggio remoto vs certificazione sul campo',
    tagline_en: 'Remote monitoring vs field certification',
    highlight_it: 'Hubstaff monitora i lavoratori remoti. GeoTapp certifica operatori fisici sul campo — conforme GDPR.',
    highlight_en: 'Hubstaff monitors remote workers. GeoTapp certifies physical field operators — GDPR compliant.',
  },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale] ?? META.en;
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: buildLocaleAlternates(locale, PATHNAME),
    openGraph: { url: `https://geotapp.com/${locale}${PATHNAME}`, type: 'website', title: m.title, description: m.description },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description },
  };
}

export default async function ConfrontoIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isIt = locale === 'it';

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      { '@type': 'ListItem', position: 2, name: isIt ? 'Confronti' : 'Compare', item: `https://geotapp.com/${locale}${PATHNAME}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">

          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              {isIt ? 'Confronti' : 'Comparisons'}
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              GeoTapp vs{' '}
              <span className="text-primary">
                {isIt ? 'le alternative' : 'the alternatives'}
              </span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {isIt
                ? 'Non tutte le app sono uguali. GeoTapp è l\'unico sistema che produce prove verificabili del lavoro svolto — non solo registra ore e posizione.'
                : 'Not all apps are equal. GeoTapp is the only system that produces verifiable proof of completed work — not just records hours and location.'}
            </p>
          </div>

          <div className="space-y-4">
            {COMPARISONS.map((item) => (
              <Link
                key={item.slug}
                href={`/${locale}/confronto/${item.slug}/`}
                className="block group bg-white/5 hover:bg-white/8 border border-white/10 hover:border-primary/30 rounded-2xl p-6 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-bold text-lg">GeoTapp vs {item.competitor}</span>
                      <span className="text-xs text-primary border border-primary/30 rounded-full px-2 py-0.5">
                        {isIt ? item.tagline_it : item.tagline_en}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm">
                      {isIt ? item.highlight_it : item.highlight_en}
                    </p>
                  </div>
                  <span className="text-primary text-xl group-hover:translate-x-1 transition-transform mt-1">→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center bg-gradient-to-br from-primary/20 to-purple-500/10 border border-primary/20 rounded-2xl p-10">
            <h2 className="text-2xl font-bold mb-3">
              {isIt ? 'La prova migliore è vederlo dal vivo.' : 'The best proof is seeing it live.'}
            </h2>
            <p className="text-text-secondary mb-6">
              {isIt
                ? 'Ti mostriamo come un intervento diventa una prova verificabile — in 20 minuti, senza impegno.'
                : 'We show you how a job becomes verifiable proof — in 20 minutes, no commitment.'}
            </p>
            <Link
              href={`/${locale}/demo/`}
              className="inline-block bg-primary text-black font-semibold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              {isIt ? 'Richiedi una Demo' : 'Request a Demo'}
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
