import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import { localizePath } from '@/lib/i18n/locale-routing';
import { JsonLd } from '@/components/seo/JsonLd';

/**
 * Manuale "Posizione, orari e foto di chi lavora fuori sede": scheda di
 * download del PDF. Il manuale e' solo in italiano e vale per la legge
 * italiana, quindi la pagina esiste solo per `it` (le altre lingue danno 404
 * e non entrano in sitemap). Il PDF sta in public/downloads/.
 * Route: /it/risorse/manuale-gdpr-lavoro-sul-campo/ .
 */

const PATH = '/risorse/manuale-gdpr-lavoro-sul-campo/';
const PDF = '/downloads/posizione-orari-e-foto-di-chi-lavora-fuori-sede.pdf';
const COVER = '/downloads/manuale-copertina.webp';
const TITLE = 'Posizione, orari e foto di chi lavora fuori sede';
const SUBTITLE = 'Manuale pratico tra Statuto dei lavoratori, GDPR e squadre sul campo';
const META_TITLE = 'Manuale GDPR e Statuto dei lavoratori per squadre sul campo (PDF)';
const META_DESC =
  'Manuale pratico in PDF su GPS, timbratura con la posizione e foto di prova per chi ha squadre fuori sede: articolo 4 dello Statuto, GDPR, casi del Garante, modelli. Edizione Italia, stato al 23 ottobre 2026.';

export function generateStaticParams() {
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
    title: { absolute: META_TITLE },
    description: META_DESC,
    alternates: { canonical: buildCanonicalUrl('it', PATH) },
    openGraph: {
      url: buildCanonicalUrl('it', PATH),
      type: 'website',
      title: META_TITLE,
      description: META_DESC,
      images: [{ url: COVER, width: 720, height: 1103, alt: TITLE }],
    },
  };
}

export default async function ManualePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== 'it') notFound();

  const risorseHref = localizePath('/risorse/', 'it');
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: TITLE,
    alternateName: SUBTITLE,
    inLanguage: 'it',
    author: { '@type': 'Person', name: 'Michele Angelo Petraroli' },
    publisher: { '@type': 'Organization', name: 'GeoTapp', url: 'https://geotapp.com' },
    datePublished: '2026-10-23',
    numberOfPages: 94,
    image: `https://geotapp.com${COVER}`,
    url: buildCanonicalUrl('it', PATH),
    workExample: {
      '@type': 'Book',
      bookFormat: 'https://schema.org/EBook',
      encodingFormat: 'application/pdf',
      url: `https://geotapp.com${PDF}`,
    },
  };

  return (
    <div className="lp-l lp-risorsa-strumento">
      <section className="ph">
        <div className="crumb">
          <div className="w">
            <Link href="/it/">GeoTapp</Link> / <Link href={risorseHref}>Risorse</Link> / Manuale
          </div>
        </div>
        <div className="w">
          <p className="kk k"><s></s>Manuale in PDF</p>
          <h1>{TITLE}</h1>
          <p className="lede">{SUBTITLE}</p>
        </div>
      </section>

      <section className="sec">
        <div className="wt art">
          <div className="body">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, alignItems: 'flex-start' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={COVER}
                alt={`Copertina del manuale: ${TITLE}`}
                width={720}
                height={1103}
                style={{ width: 240, height: 'auto', borderRadius: 4, boxShadow: '0 6px 24px rgba(11,23,54,.18)' }}
              />
              <div style={{ flex: '1 1 300px' }}>
                <p>
                  Un titolare di PMI con una squadra sul campo si trova davanti a due leggi e a due
                  cancelli: lo Statuto dei lavoratori, con l&apos;accordo sindacale o l&apos;autorizzazione
                  dell&apos;Ispettorato, e il GDPR, con finalità, informativa, conservazione e diritti.
                  Superare uno dei due non vuol dire aver superato l&apos;altro. Il manuale mette in
                  fila le regole, i provvedimenti del Garante, le note dell&apos;Ispettorato e le
                  sentenze, e dice quali domande farsi prima di accendere qualunque strumento.
                </p>
                <p>
                  Sono 17 capitoli, un glossario e otto appendici con tracce di informativa,
                  valutazione d&apos;impatto, registro dei trattamenti, relazione per l&apos;Ispettorato,
                  risposta a una richiesta di accesso e clausole per il fornitore. Ogni affermazione
                  ha la sua nota a piè di pagina, con il link alla fonte e l&apos;indicazione di quanto
                  la fonte è stata letta direttamente.
                </p>
                <p style={{ marginTop: 18 }}>
                  <a className="b1" href={PDF} download>Scarica il PDF (94 pagine, 2,7 MB)</a>
                </p>
              </div>
            </div>

            <h2>Che cosa è e che cosa non è</h2>
            <p>
              Edizione Italia, stato al 23 ottobre 2026, di Michele Angelo Petraroli. È una guida
              pratica e non una consulenza legale: non sostituisce il consulente del lavoro, un
              avvocato giuslavorista o il responsabile della protezione dei dati, e ogni caso
              concreto va valutato da loro. È la bozza 3 e non è ancora stata sottoposta a revisione
              di un professionista.
            </p>
            <p>
              Il manuale lo firma GeoTapp, che sviluppa un software di timbratura per squadre sul
              campo. Il capitolo 16 dice dove sta il nostro strumento rispetto alle domande del
              manuale, compreso quello che nessuno strumento può fare al posto del datore di
              lavoro. Le domande valgono con qualunque fornitore.
            </p>
            <p>
              Se trovi un errore o un riferimento superato, scrivici dalla pagina{' '}
              <Link href={localizePath('/contact', 'it')}>contatti</Link>: una guida sul diritto
              che non si corregge diventa presto una guida sbagliata.
            </p>
          </div>
        </div>
      </section>
      <JsonLd data={schema} />
    </div>
  );
}
