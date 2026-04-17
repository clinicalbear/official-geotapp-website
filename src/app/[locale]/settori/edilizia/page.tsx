import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

// IT-only landing page targeting "app cantiere edilizia" sector.
// Canonical URL: /it/settori/edilizia/
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
    title: { absolute: 'App Cantiere per Edilizia: Presenze GPS e Gestione Squadre | GeoTapp' },
    description:
      'Gestisci presenze, turni e sicurezza in cantiere con GPS in tempo reale. Timbrature certificate, report automatici. App GDPR-compliant per imprese edili.',
    robots: { index: false, follow: false },
    alternates: {
      canonical: 'https://geotapp.com/it/settori/edilizia/',
    },
    openGraph: {
      url: 'https://geotapp.com/it/settori/edilizia/',
      type: 'website',
      title: 'App Cantiere per Edilizia: Presenze GPS e Gestione Squadre | GeoTapp',
      description:
        'Gestisci presenze, turni e sicurezza in cantiere con GPS in tempo reale. Timbrature certificate, report automatici. App GDPR-compliant per imprese edili.',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'App Cantiere per Edilizia: Presenze GPS e Gestione Squadre | GeoTapp',
      description:
        'Gestisci presenze, turni e sicurezza in cantiere con GPS in tempo reale. Timbrature certificate, report automatici. App GDPR-compliant per imprese edili.',
    },
  };
}

export default async function EdiliziaLocalePage({
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
        name: 'Edilizia',
        item: 'https://geotapp.com/it/settori/edilizia/',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Chi era in cantiere e quando?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ogni timbratura GPS è timestampata e certificata. GeoTapp registra coordinate reali al momento della timbratura — non inserite a mano. Il dato è verificabile dalla direzione lavori.',
        },
      },
      {
        '@type': 'Question',
        name: 'Come gestisci i subappaltatori in cantiere?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GeoTapp traccia accessi e presenze di tutte le squadre, inclusi subappaltatori. Ogni operatore timbra dal proprio smartphone e il capo cantiere vede tutto in tempo reale da una dashboard unica.',
        },
      },
      {
        '@type': 'Question',
        name: 'I report di cantiere richiedono ore di lavoro manuale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. GeoTapp genera i report automaticamente con GPS, ore e presenze. Sono pronti per la direzione lavori e per i SAL senza alcun inserimento manuale.',
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
              App per imprese edili e cantieri
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-[1.1] text-slate-900 md:text-6xl">
              Il tuo cantiere sotto controllo,{' '}
              <span className="block text-cyan-600">in tempo reale.</span>
            </h1>
            <p className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-600">
              Timbrature GPS certificate, gestione squadre e report automatici.
              Zero carte, zero contestazioni.
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
                  Chi era in cantiere e quando?
                </p>
                <p className="text-slate-600">
                  Ogni timbratura GPS è timestampata e certificata. Il dato è lì,
                  verificabile in qualsiasi momento dalla direzione lavori.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
                <p className="mb-3 font-bold text-slate-800">
                  Come gestisci i subappaltatori?
                </p>
                <p className="text-slate-600">
                  Traccia accessi e presenze di tutte le squadre, inclusi i subappaltatori,
                  da un&apos;unica dashboard in tempo reale.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
                <p className="mb-3 font-bold text-slate-800">
                  I report di cantiere richiedono ore?
                </p>
                <p className="text-slate-600">
                  Generati automaticamente, pronti per la direzione lavori e per i SAL.
                  Nessun inserimento manuale.
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
                  title: "L'operatore timbra all'ingresso cantiere",
                  desc: "Apre il turno dallo smartphone. GeoTapp registra coordinate GPS reali, timestamp e — se necessario — foto. Tutto automatico, non modificabile.",
                },
                {
                  step: '2',
                  title: 'Il capo cantiere vede tutto in tempo reale',
                  desc: 'Dashboard unica per tutte le squadre e tutti i cantieri. Chi è presente, dove e da quando — senza inseguire nessuno al telefono.',
                },
                {
                  step: '3',
                  title: 'Il report è pronto per SAL e DL',
                  desc: 'A fine giornata o fine commessa il sistema genera un report sigillato con presenze, GPS e ore. Pronto per la direzione lavori senza un minuto di lavoro manuale.',
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
