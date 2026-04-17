import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

// IT-only landing page targeting "app manutenzione gestione squadre" sector.
// Canonical URL: /it/settori/manutenzione/
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
    title: { absolute: 'App Manutenzione: Gestione Squadre e Interventi con GPS | GeoTapp' },
    description:
      'Gestisci squadre di manutenzione con GPS: interventi, turni, prove di servizio. Storico completo per ogni impianto o sede cliente. Prova GeoTapp gratis.',
    robots: { index: false, follow: false },
    alternates: {
      canonical: 'https://geotapp.com/it/settori/manutenzione/',
    },
    openGraph: {
      url: 'https://geotapp.com/it/settori/manutenzione/',
      type: 'website',
      title: 'App Manutenzione: Gestione Squadre e Interventi con GPS | GeoTapp',
      description:
        'Gestisci squadre di manutenzione con GPS: interventi, turni, prove di servizio. Storico completo per ogni impianto o sede cliente. Prova GeoTapp gratis.',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'App Manutenzione: Gestione Squadre e Interventi con GPS | GeoTapp',
      description:
        'Gestisci squadre di manutenzione con GPS: interventi, turni, prove di servizio. Storico completo per ogni impianto o sede cliente. Prova GeoTapp gratis.',
    },
  };
}

export default async function ManutenzioneLocalePage({
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
        name: 'Manutenzione',
        item: 'https://geotapp.com/it/settori/manutenzione/',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Come documenti gli interventi periodici di manutenzione?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GeoTapp genera automaticamente un report per ogni visita con GPS, ore e foto. Lo storico è completo e scaricabile per impianto o per sede cliente — senza nessun inserimento manuale.',
        },
      },
      {
        '@type': 'Question',
        name: 'I tecnici arrivano davvero nei tempi previsti?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Con GeoTapp puoi verificare in tempo reale l\'orario di arrivo e la posizione GPS di ogni tecnico. Nessuna chiamata necessaria — il dato è già disponibile in dashboard.',
        },
      },
      {
        '@type': 'Question',
        name: 'Come dimostro ai clienti il servizio di manutenzione erogato?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GeoTapp mantiene uno storico completo scaricabile per ogni sede cliente: date, ore, GPS e foto di ogni intervento. Il cliente può verificare il servizio in autonomia senza accedere al tuo sistema.',
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
              App per squadre di manutenzione
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-[1.1] text-slate-900 md:text-6xl">
              La tua squadra di manutenzione,{' '}
              <span className="block text-cyan-600">sempre sotto controllo.</span>
            </h1>
            <p className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-600">
              Traccia interventi, pianifica turni e documenta ogni visita.
              Storico completo per impianti e clienti.
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
                  Come documenti gli interventi periodici?
                </p>
                <p className="text-slate-600">
                  Report automatico con GPS, ore e foto per ogni visita. Lo storico
                  è completo e scaricabile senza nessun inserimento manuale.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
                <p className="mb-3 font-bold text-slate-800">
                  I tecnici arrivano davvero nei tempi previsti?
                </p>
                <p className="text-slate-600">
                  Verifica in tempo reale senza chiamate. GPS e orario di arrivo
                  sono già disponibili in dashboard, per ogni sede.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
                <p className="mb-3 font-bold text-slate-800">
                  Come dimostri il servizio erogato ai clienti?
                </p>
                <p className="text-slate-600">
                  Storico completo scaricabile per ogni sede: date, ore, GPS e foto.
                  Il cliente verifica in autonomia, senza accedere al tuo sistema.
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
                  title: "Il tecnico timbra GPS all'arrivo in sede",
                  desc: "Apre l'intervento dallo smartphone. GeoTapp registra coordinate GPS reali, timestamp e foto — tutto automatico, non modificabile.",
                },
                {
                  step: '2',
                  title: "Le ore e l'intervento vengono registrati automaticamente",
                  desc: 'Ogni minuto lavorato è associato alla sede e al tipo di intervento. Il responsabile vede in tempo reale lo stato di ogni visita.',
                },
                {
                  step: '3',
                  title: 'Il cliente riceve il report firmato digitalmente',
                  desc: "A fine intervento il sistema genera un report con GPS, ore e firma digitale. Il cliente lo verifica in autonomia — senza accesso al gestionale.",
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
