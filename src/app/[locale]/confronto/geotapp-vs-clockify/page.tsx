import type { Metadata } from 'next';
import { TrialCTALink } from '@/components/analytics/TrialCTALink';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import {
  buildComparisonArticle,
  buildComparisonBreadcrumb,
} from '@/lib/seo/comparisonSchema';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-clockify/';
const ARTICLE_DATE_PUBLISHED = '2025-09-01';
const ARTICLE_DATE_MODIFIED = '2026-05-23';

const META: Record<string, { title: string; description: string }> = {
  it: {
    title: 'GeoTapp vs Clockify — Confronto 2025 | GeoTapp',
    description: 'GeoTapp vs Clockify: differenze chiave per aziende con operatori sul campo. Clockify traccia le ore; GeoTapp certifica ogni intervento con GPS verificato, foto e report non alterabili.',
  },
  en: {
    title: 'GeoTapp vs Clockify — Comparison 2025 | GeoTapp',
    description: 'GeoTapp vs Clockify: key differences for field service companies. Clockify tracks hours; GeoTapp certifies every job with verified GPS, photos and tamper-proof reports.',
  },
  de: {
    title: 'GeoTapp vs Clockify — Vergleich 2025 | GeoTapp',
    description: 'GeoTapp vs Clockify: Hauptunterschiede für Außendienstunternehmen. Clockify erfasst Stunden; GeoTapp zertifiziert jeden Einsatz mit verifizierten GPS-Daten und manipulationssicheren Berichten.',
  },
};

const FAQ_IT = [
  {
    q: 'Qual è la differenza principale tra GeoTapp e Clockify?',
    a: 'Clockify è un time tracker: registra le ore lavorate manualmente o con timer. GeoTapp è un sistema di certificazione degli interventi: genera automaticamente report sigillati con GPS verificato, foto e firma digitale — prove che il cliente può controllare in autonomia.',
  },
  {
    q: 'Clockify ha il tracciamento GPS per i lavoratori sul campo?',
    a: 'Clockify non ha un sistema GPS verificato per operatori sul campo. La posizione non è parte del report e non è sigillata crittograficamente. GeoTapp registra la posizione GPS al momento dell\'apertura e chiusura di ogni intervento, inclusa nel report non alterabile.',
  },
  {
    q: 'GeoTapp o Clockify per chi fa interventi su commessa?',
    a: 'Clockify è adatto per team remoti che fatturano a ore. GeoTapp è progettato per chi deve dimostrare dove e quando ha lavorato — imprese di pulizie, manutentori, installatori. Se hai clienti che contestano, GeoTapp produce le prove; Clockify no.',
  },
  {
    q: 'Clockify è gratuito. Vale la pena pagare GeoTapp?',
    a: 'Clockify free ha senso per freelance e team di ufficio. Per aziende con operatori sul campo, il valore di GeoTapp sta nelle prove difendibili: un contratto salvato grazie a un report verificabile vale molte volte l\'abbonamento mensile.',
  },
];

const FAQ_EN = [
  {
    q: 'What is the main difference between GeoTapp and Clockify?',
    a: 'Clockify is a time tracker: records hours worked manually or with a timer. GeoTapp is a job certification system: automatically generates sealed reports with verified GPS, photos and digital signature — proof clients can verify independently.',
  },
  {
    q: 'Does Clockify have GPS tracking for field workers?',
    a: 'Clockify does not have a verified GPS system for field operators. Location is not part of the report and not cryptographically sealed. GeoTapp records GPS position at job opening and closing, included in the tamper-proof report.',
  },
  {
    q: 'GeoTapp or Clockify for job-based field work?',
    a: 'Clockify suits remote teams billing by the hour. GeoTapp is designed for those who must prove where and when they worked — cleaning companies, maintenance crews, installers. If clients dispute work, GeoTapp produces the proof; Clockify does not.',
  },
];

const ROWS_IT = [
  'GPS verificato al momento dell\'intervento', 'Report sigillato crittograficamente',
  'Prove fotografiche collegate a GPS e timestamp', 'Verifica indipendente da parte del cliente',
  'Tracciamento ore', 'App mobile Android/iOS', 'Messaggistica interna proprietaria',
  'Export presenze/paghe', 'Piano gratuito', 'Gestione commesse multi-sito', 'Conformità GDPR geolocalizzazione',
  'Informativa GPS automatica con firma digitale*',
];
const ROWS_EN = [
  'GPS verified at job site', 'Cryptographically sealed report',
  'Photo evidence linked to GPS and timestamp', 'Independent verification by client',
  'Time tracking', 'Mobile app Android/iOS', 'Built-in messaging',
  'Payroll/attendance export', 'Free plan', 'Multi-site job management', 'GDPR-compliant geolocation',
  'Automatic GPS privacy notice with digital signature*',
];
const ROWS_GEO =   [true, true, true, true, true, true, true, true, false, true, true, true];
const ROWS_COMP =  [false, false, false, false, true, true, false, true, true, false, false, false];

function getRows(locale: string) {
  const features = locale === 'it' ? ROWS_IT : ROWS_EN;
  return features.map((feature, i) => ({ feature, geotapp: ROWS_GEO[i], competitor: ROWS_COMP[i] }));
}

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

export default async function GeoTappVsClockifyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isIt = locale === 'it';
  const faqItems = isIt ? FAQ_IT : FAQ_EN;
  const rows = getRows(locale);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const breadcrumb = buildComparisonBreadcrumb({
    locale,
    pathname: PATHNAME,
    competitorName: 'Clockify',
  });

  const meta = META[locale] ?? META.en;
  const article = buildComparisonArticle({
    locale,
    pathname: PATHNAME,
    headline: meta.title,
    description: meta.description,
    datePublished: ARTICLE_DATE_PUBLISHED,
    dateModified: ARTICLE_DATE_MODIFIED,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">

          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              {isIt ? 'Confronto App' : 'App Comparison'}
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              GeoTapp vs Clockify:{' '}
              <span className="text-primary">
                {isIt ? 'tracciare le ore o certificare gli interventi?' : 'track hours or certify jobs?'}
              </span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {isIt
                ? 'Clockify registra il tempo. GeoTapp produce prove verificabili del lavoro svolto. Per chi lavora sul campo, la differenza cambia tutto.'
                : 'Clockify records time. GeoTapp produces verifiable proof of completed work. For field workers, the difference changes everything.'}
            </p>
          </div>

          {/* Summary verdict */}
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-12">
            <p className="font-semibold text-primary mb-2">
              {isIt ? 'In sintesi:' : 'Bottom line:'}
            </p>
            <p className="text-text-secondary">
              {isIt
                ? 'Clockify è eccellente per freelance e team di ufficio che tracciano ore per la fatturazione. Per operatori sul campo che devono dimostrare il lavoro svolto a un committente, GeoTapp produce report sigillati con GPS reale, foto e firma digitale — Clockify non ha queste funzionalità.'
                : 'Clockify excels for freelancers and office teams tracking hours for billing. For field operators who need to prove completed work to a client, GeoTapp produces sealed reports with real GPS, photos and digital signature — Clockify lacks these features.'}
            </p>
          </div>

          {/* Comparison table */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">
              {isIt ? 'Confronto funzionalità chiave' : 'Key features comparison'}
            </h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left py-3 px-4 font-semibold text-sm">
                      {isIt ? 'Funzionalità' : 'Feature'}
                    </th>
                    <th className="text-center py-3 px-4 font-semibold text-sm text-primary">GeoTapp</th>
                    <th className="text-center py-3 px-4 font-semibold text-sm text-text-secondary">Clockify</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                      <td className="py-3 px-4 text-sm text-text-secondary">{row.feature}</td>
                      <td className="py-3 px-4 text-center">
                        {row.geotapp
                          ? <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white font-black text-base">✓</span>
                          : <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-600/40 text-slate-400 font-bold text-base">✕</span>}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {row.competitor
                          ? <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white font-black text-base">✓</span>
                          : <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-600/40 text-slate-400 font-bold text-base">✕</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Privacy consent footnote */}
          <div className="mb-16 px-4">
            <p className="text-xs text-text-secondary leading-relaxed">
              {isIt
                ? '* Per legge (GDPR Art. 13 e, in Italia, Art. 4 Statuto dei Lavoratori), ogni dipendente deve firmare un\'informativa privacy prima di essere geolocalizzato. La maggior parte dei software GPS non lo gestisce: il rischio legale resta al titolare. GeoTapp genera automaticamente l\'informativa personalizzata, la fa firmare digitalmente al dipendente e blocca l\'accesso GPS finché non è firmata. Nessun altro software sul mercato lo fa.'
                : '* By law (GDPR Art. 13), every employee must sign a privacy notice before being geolocated. Most GPS software does not handle this: the legal risk stays with the employer. GeoTapp automatically generates the personalised notice, gets it digitally signed by the employee and blocks GPS access until it is signed. No other software on the market does this.'}
            </p>
          </div>

          {/* Key difference */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">
              {isIt ? 'Time tracking vs certificazione del lavoro' : 'Time tracking vs work certification'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-3">GeoTapp</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {isIt ? (
                    <>
                      <li>• GPS verificato automaticamente — non inserito a mano</li>
                      <li>• Report sigillati con hash crittografico al momento della chiusura</li>
                      <li>• Prove fotografiche integrate con GPS e timestamp</li>
                      <li>• Il committente verifica l'autenticità in autonomia</li>
                      <li>• Progettato per operatori sul campo (non ufficio)</li>
                    </>
                  ) : (
                    <>
                      <li>• GPS automatically verified — not entered manually</li>
                      <li>• Reports sealed with cryptographic hash at closure</li>
                      <li>• Photo evidence integrated with GPS and timestamp</li>
                      <li>• Client independently verifies authenticity</li>
                      <li>• Designed for field operators (not office)</li>
                    </>
                  )}
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-text-secondary mb-3">Clockify</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {isIt ? (
                    <>
                      <li>• Ottimo per time tracking e fatturazione a ore</li>
                      <li>• Nessun GPS verificato o sigillato</li>
                      <li>• Nessuna prova fotografica collegata all'intervento</li>
                      <li>• I dati non sono verificabili da terzi</li>
                      <li>• Piano gratuito disponibile (ideale per freelance)</li>
                    </>
                  ) : (
                    <>
                      <li>• Great for time tracking and hourly billing</li>
                      <li>• No verified or sealed GPS</li>
                      <li>• No photo evidence linked to the job</li>
                      <li>• Data not independently verifiable by third parties</li>
                      <li>• Free plan available (ideal for freelancers)</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </section>

          {/* Use cases */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">
              {isIt ? 'Chi dovrebbe scegliere GeoTapp invece di Clockify' : 'Who should choose GeoTapp over Clockify'}
            </h2>
            <div className="space-y-3">
              {(isIt ? [
                'Imprese di pulizie e facility management con clienti esigenti',
                'Manutentori e installatori che devono difendere le ore fatturate',
                'Aziende soggette a ispezioni CCNL o audit del committente',
                'Chi ha già avuto contestazioni su interventi non riconosciuti',
                'Aziende con più squadre distribuite su cantieri diversi',
              ] : [
                'Cleaning and facility management companies with demanding clients',
                'Maintenance and installation crews who need to defend billed hours',
                'Companies subject to labour inspections or client audits',
                'Anyone who has already faced disputes over unrecognised jobs',
                'Companies with multiple crews on different sites',
              ]).map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-lg">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span className="text-text-secondary text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">FAQ</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-white/10 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">{item.q}</h3>
                  <p className="text-text-secondary text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-primary/20 to-purple-500/10 border border-primary/20 rounded-2xl p-10">
            <h2 className="text-2xl font-bold mb-3">
              {isIt ? 'Vuoi vedere la differenza in pratica?' : 'Want to see the difference in practice?'}
            </h2>
            <p className="text-text-secondary mb-6">
              {isIt
                ? 'Ti mostriamo come un intervento diventa una prova verificabile — in 20 minuti, senza impegno.'
                : 'We show you how a job becomes verifiable proof — in 20 minutes, no commitment.'}
            </p>
            <TrialCTALink
              href={`/${locale}/trial/`}
              source="confronto_vs_clockify"
              className="inline-block bg-primary text-black font-semibold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              {isIt ? 'Inizia subito gratuitamente!' : 'Start for free!'}
            </TrialCTALink>
          </div>

        </div>
      </div>
    </>
  );
}
