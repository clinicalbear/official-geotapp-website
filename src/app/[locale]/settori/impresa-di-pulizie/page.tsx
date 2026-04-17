import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

// IT-only landing page targeting "app per impresa di pulizie" (222 impressions/mese, pos 41).
// Canonical URL: /it/settori/impresa-di-pulizie/
// Non-IT locales redirect to the full pulizie sector page.

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
    title: { absolute: 'App per Impresa di Pulizie: Gestione Squadre con GPS | GeoTapp' },
    description:
      'Gestisci squadre, turni e presenze con GPS in tempo reale. Prove automatiche di servizio, zero contestazioni clienti. App GDPR-compliant per pulizie.',
    alternates: {
      canonical: 'https://geotapp.com/it/settori/impresa-di-pulizie/',
      languages: {
        'it-IT': 'https://geotapp.com/it/settori/impresa-di-pulizie/',
        'x-default': 'https://geotapp.com/it/settori/impresa-di-pulizie/',
      },
    },
    openGraph: {
      url: 'https://geotapp.com/it/settori/impresa-di-pulizie/',
      type: 'website',
      title: 'App per Impresa di Pulizie: Gestione Squadre con GPS | GeoTapp',
      description:
        'Gestisci squadre, turni e presenze con GPS in tempo reale. Prove automatiche di servizio, zero contestazioni clienti. App GDPR-compliant per pulizie.',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'App per Impresa di Pulizie: Gestione Squadre con GPS | GeoTapp',
      description:
        'Gestisci squadre, turni e presenze con GPS in tempo reale. Prove automatiche di servizio, zero contestazioni clienti. App GDPR-compliant per pulizie.',
    },
  };
}

export default async function ImpresaDiPulizieLocalePage({
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
        name: 'Impresa di Pulizie',
        item: 'https://geotapp.com/it/settori/impresa-di-pulizie/',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Come funziona la timbratura GPS per imprese di pulizie?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'operatore timbra ingresso e uscita dallo smartphone. GeoTapp registra le coordinate GPS in quel momento — non inserite a mano. Ogni timbratura è certificata con timestamp e posizione verificabile dal committente.",
        },
      },
      {
        '@type': 'Question',
        name: 'Posso dimostrare al cliente che il servizio è stato eseguito?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sì. GeoTapp genera automaticamente un report sigillato con GPS, foto e timestamp a fine intervento. Il cliente lo riceve e lo verifica da solo — senza accesso al tuo sistema.',
        },
      },
      {
        '@type': 'Question',
        name: "GeoTapp è conforme al GDPR per la geolocalizzazione dei dipendenti?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Sì. GeoTapp traccia la posizione solo durante l'orario di lavoro attivo, include modulistica per l'informativa ai dipendenti e non raccoglie dati non necessari. Conforme alle linee guida del Garante Privacy italiano.",
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
              App per imprese di pulizie e multiservizi
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-[1.1] text-slate-900 md:text-6xl">
              La tua impresa di pulizie,{' '}
              <span className="block text-cyan-600">gestita in tempo reale.</span>
            </h1>
            <p className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-600">
              Timbrature GPS, prove di servizio automatiche e gestione turni in
              un&apos;unica app. Zero Excel, zero contestazioni.
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
                  I clienti contestano le ore lavorate?
                </p>
                <p className="text-slate-600">
                  Ogni timbratura è GPS-verificata e timestampata. Mandi il report e la
                  discussione finisce in trenta secondi.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
                <p className="mb-3 font-bold text-slate-800">
                  I fogli presenze sono inaffidabili?
                </p>
                <p className="text-slate-600">
                  Tracciamento automatico da smartphone, niente inserimenti manuali. Il dato
                  è quello — e non si può cambiare.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
                <p className="mb-3 font-bold text-slate-800">
                  Difficile coordinare più squadre?
                </p>
                <p className="text-slate-600">
                  Vedi dove sono tutti in tempo reale, su tutti i siti, da un&apos;unica
                  dashboard. Nessuna telefonata.
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
                  title: "L'operatore timbra con GPS",
                  desc: "Apre e chiude il turno dallo smartphone. GeoTapp registra coordinate GPS reali, foto e timestamp — tutto automatico, non modificabile.",
                },
                {
                  step: '2',
                  title: 'Il responsabile vede tutto in tempo reale',
                  desc: 'Dashboard unica per tutti i cantieri. Sai esattamente chi è presente, dove e da quando — senza inseguire nessuno.',
                },
                {
                  step: '3',
                  title: 'Il report è pronto automaticamente',
                  desc: 'A fine turno il sistema genera un report sigillato con GPS, foto e firma digitale. Invialo al cliente — è verificabile in autonomia.',
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
            <p className="mt-6 text-sm text-slate-400">
              Vuoi vedere tutto prima?{' '}
              <Link href="/it/settori/pulizie/" className="text-cyan-600 hover:underline">
                Scopri la pagina completa per imprese di pulizie
              </Link>
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
