import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

// IT-only landing page targeting "app per installatori e impiantisti" sector.
// Canonical URL: /it/settori/impianti/
// Non-IT locales return 404.

export async function generateStaticParams() {
  return [{ locale: 'it' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== 'it') return {};

  return {
    title: { absolute: 'App per Installatori e Impiantisti: Gestione Interventi GPS | GeoTapp' },
    description:
      'Traccia interventi, ore e materiali per installatori e impiantisti con GPS. Prove di servizio automatiche, zero contestazioni clienti. Prova GeoTapp gratis.',
    alternates: {
      canonical: 'https://geotapp.com/it/settori/impianti/',
    },
    openGraph: {
      url: 'https://geotapp.com/it/settori/impianti/',
      type: 'website',
      title: 'App per Installatori e Impiantisti: Gestione Interventi GPS | GeoTapp',
      description:
        'Traccia interventi, ore e materiali per installatori e impiantisti con GPS. Prove di servizio automatiche, zero contestazioni clienti. Prova GeoTapp gratis.',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'App per Installatori e Impiantisti: Gestione Interventi GPS | GeoTapp',
      description:
        'Traccia interventi, ore e materiali per installatori e impiantisti con GPS. Prove di servizio automatiche, zero contestazioni clienti. Prova GeoTapp gratis.',
    },
  };
}

export default async function ImpiantiLocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== 'it') return notFound();

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      { '@type': 'ListItem', position: 2, name: 'Settori', item: 'https://geotapp.com/it/settori/' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Impianti',
        item: 'https://geotapp.com/it/settori/impianti/',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'I clienti contestano le ore di intervento?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Con GeoTapp le timbrature GPS sono timestampate al momento dell\'intervento e non modificabili. Costituiscono una prova inconfutabile delle ore svolte, eliminando qualsiasi contestazione.',
        },
      },
      {
        '@type': 'Question',
        name: 'Come monitoro più squadre su commesse diverse?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GeoTapp offre una mappa in tempo reale con lo stato di ogni intervento. Sai esattamente dove si trovano i tuoi tecnici e su quale commessa stanno lavorando, senza fare telefonate.',
        },
      },
      {
        '@type': 'Question',
        name: 'Come velocizzare la fatturazione degli interventi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GeoTapp genera automaticamente l\'export di ore e commesse pronto per il gestionale. Nessun inserimento manuale, nessun rischio di errori — la fatturazione diventa un click.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-white min-h-screen text-slate-900 font-sans">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-slate-50 px-6 pb-24 pt-32">
          <div className="container relative z-10 mx-auto max-w-5xl">
            <div className="mb-6 inline-block rounded-full bg-cyan-100 px-4 py-1.5 text-sm font-bold tracking-wide text-cyan-700">
              App per installatori, impiantisti e tecnici
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-[1.1] text-slate-900 md:text-6xl">
              Ogni intervento documentato,{' '}
              <span className="block text-cyan-600">ogni ora tracciata.</span>
            </h1>
            <p className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-600">
              Per installatori elettrici, idraulici, termotecnici e impiantisti.
              GPS, ore e foto per ogni commessa.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="https://app.geotapp.com/register"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-8 py-4 font-bold text-white shadow-lg transition-colors hover:bg-cyan-700"
              >
                Prova GeoTapp gratis per 14 giorni →
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate-400">Nessun vincolo. Nessuna carta di credito richiesta.</p>
          </div>
        </section>

        {/* ── PROBLEMI CHE RISOLVIAMO ── */}
        <section className="px-6 py-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
              Problemi che risolviamo ogni giorno
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
                <p className="mb-3 font-bold text-slate-800">
                  I clienti contestano le ore di intervento?
                </p>
                <p className="text-slate-600">
                  Timbrature GPS timestampate come prova inconfutabile. Il dato è
                  certificato al momento dell&apos;intervento — non modificabile.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
                <p className="mb-3 font-bold text-slate-800">
                  Come monitori più squadre su commesse diverse?
                </p>
                <p className="text-slate-600">
                  Mappa in tempo reale con lo stato di ogni intervento. Sai dove sono
                  tutti i tuoi tecnici senza fare una telefonata.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
                <p className="mb-3 font-bold text-slate-800">
                  La fatturazione richiede troppo tempo?
                </p>
                <p className="text-slate-600">
                  Export ore e commesse pronto per il gestionale. Nessun inserimento
                  manuale, nessun errore, nessuna perdita di tempo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── COME FUNZIONA ── */}
        <section className="bg-slate-50 px-6 py-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-slate-900">
              Come funziona
            </h2>
            <p className="mb-14 text-center text-lg text-slate-600">
              Tre step semplici. Zero carta. Zero chiamate.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: '1',
                  title: 'Il tecnico timbra GPS all\'inizio intervento',
                  desc: "Apre la commessa dallo smartphone. GeoTapp registra coordinate GPS reali, timestamp e foto — tutto automatico, non modificabile.",
                },
                {
                  step: '2',
                  title: 'Le ore si registrano automaticamente per commessa',
                  desc: 'Ogni minuto lavorato viene associato alla commessa giusta. Il responsabile vede in tempo reale chi sta lavorando dove.',
                },
                {
                  step: '3',
                  title: 'Il report cliente è generato senza digitare nulla',
                  desc: "A fine intervento il sistema genera un report con GPS, ore e firma digitale. Il cliente lo riceve e lo verifica in autonomia.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex flex-col items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 text-sm font-bold text-white">
                    {step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                  <p className="text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINALE ── */}
        <section className="px-6 py-24">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-slate-900">
              Prova GeoTapp gratis per 14 giorni
            </h2>
            <p className="mb-8 text-lg text-slate-600">
              Nessun vincolo. Nessuna carta di credito richiesta. Risposta entro 12 ore
              lavorative.
            </p>
            <Link
              href="https://app.geotapp.com/register"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-10 py-5 text-lg font-bold text-white shadow-lg transition-colors hover:bg-cyan-700"
            >
              Inizia subito gratuitamente →
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
