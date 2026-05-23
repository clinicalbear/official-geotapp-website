import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import {
  buildComparisonArticle,
  buildComparisonBreadcrumb,
} from '@/lib/seo/comparisonSchema';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-hubstaff/';
const ARTICLE_DATE_PUBLISHED = '2025-09-01';
const ARTICLE_DATE_MODIFIED = '2026-05-23';

const META: Record<string, { title: string; description: string }> = {
  it: {
    title: 'GeoTapp vs Hubstaff — Confronto 2025 | GeoTapp',
    description: 'GeoTapp vs Hubstaff: quale scegliere per aziende con operatori sul campo in Italia? Confronto su GPS verificato, report sigillati, prove fotografiche e conformità GDPR.',
  },
  en: {
    title: 'GeoTapp vs Hubstaff — Comparison 2025 | GeoTapp',
    description: 'GeoTapp vs Hubstaff: which is better for field service companies? Compare verified GPS, sealed reports, photo evidence and GDPR compliance.',
  },
  de: {
    title: 'GeoTapp vs Hubstaff — Vergleich 2025 | GeoTapp',
    description: 'GeoTapp vs Hubstaff: Welches ist besser für Außendienstunternehmen? Vergleich von GPS-Verifizierung, versiegelten Berichten, Fotobeweisen und DSGVO-Konformität.',
  },
};

const FAQ_IT = [
  {
    q: 'Qual è la differenza principale tra GeoTapp e Hubstaff?',
    a: 'Hubstaff è un sistema di monitoraggio della produttività per lavoratori remoti: traccia il GPS e cattura screenshot. GeoTapp è un sistema di certificazione degli interventi: produce report sigillati con GPS verificato e prove fotografiche che il committente verifica autonomamente. Orientamenti molto diversi.',
  },
  {
    q: 'Hubstaff è conforme al GDPR per la geolocalizzazione?',
    a: 'Hubstaff è un\'azienda americana e la sua conformità al GDPR europeo — in particolare alle linee guida del Garante Privacy italiano sul monitoraggio dei dipendenti — richiede verifica specifica. GeoTapp è progettato per il mercato europeo con conformità GDPR integrata e modulistica per l\'informativa ai dipendenti inclusa.',
  },
  {
    q: 'GeoTapp o Hubstaff per imprese di pulizie e manutenzione?',
    a: 'GeoTapp è progettato specificamente per il settore operativo italiano: imprese di pulizie, manutenzione, installatori, sicurezza privata. Offre report verificabili dal committente e conformità CCNL. Hubstaff è pensato per team remoti digitali, non per operatori fisici sul campo con clienti da tutelare legalmente.',
  },
  {
    q: 'Hubstaff fa screenshot dei dipendenti. GeoTapp no — è un limite?',
    a: 'In Italia, lo screenshot automatico dei dipendenti è considerato uno strumento di controllo a distanza che richiede accordo sindacale (art. 4 Statuto dei Lavoratori). GeoTapp non monitora continuamente i dipendenti — traccia la posizione solo durante l\'intervento attivo — ed è conforme alle linee guida del Garante Privacy italiano.',
  },
];

const FAQ_EN = [
  {
    q: 'What is the main difference between GeoTapp and Hubstaff?',
    a: 'Hubstaff is a productivity monitoring system for remote workers: it tracks GPS and captures screenshots. GeoTapp is a job certification system: it produces sealed reports with verified GPS and photo evidence that clients independently verify. Very different orientations.',
  },
  {
    q: 'Is Hubstaff GDPR compliant for geolocation?',
    a: 'Hubstaff is a US company and its compliance with European GDPR — especially Italian Privacy Authority guidelines on employee monitoring — requires specific verification. GeoTapp is designed for the European market with built-in GDPR compliance and employee information forms included.',
  },
  {
    q: 'GeoTapp or Hubstaff for cleaning and maintenance companies?',
    a: 'GeoTapp is specifically designed for the Italian operational sector: cleaning companies, maintenance, installers, private security. It offers reports verifiable by the client and CCNL compliance. Hubstaff is designed for digital remote teams, not physical field operators with clients to legally protect.',
  },
  {
    q: 'Does Hubstaff take employee screenshots? Is GeoTapp\'s lack of this a limitation?',
    a: 'Automatic employee screenshots in Italy are considered remote control tools requiring union agreement (art. 4 Workers\' Statute). GeoTapp does not continuously monitor employees — it tracks location only during active jobs — and complies with Italian Privacy Authority guidelines.',
  },
];

const ROWS_IT = ['GPS verificato per interventi sul campo','Report sigillato crittograficamente','Verifica indipendente da parte del committente','Prove fotografiche collegate a GPS e timestamp','Conformità GDPR / linee guida Garante italiano','Nessun monitoraggio continuo dei dipendenti','App mobile Android/iOS','Messaggistica interna proprietaria','Dashboard gestione team','Export per elaborazione paghe','Progettato per mercato italiano / CCNL','Informativa GPS automatica con firma digitale*'];
const ROWS_EN = ['GPS verified for field jobs','Cryptographically sealed report','Independent verification by client','Photo evidence linked to GPS and timestamp','GDPR compliant / Italian DPA guidelines','No continuous employee monitoring','Mobile app Android/iOS','Built-in messaging','Team management dashboard','Payroll export','Designed for Italian market / CCNL','Automatic GPS privacy notice with digital signature*'];
const ROWS_GEO =  [true,true,true,true,true,true,true,true,true,true,true,true];
const ROWS_COMP = [true,false,false,false,false,false,true,true,true,true,false,false];
function getRows(locale: string) { const f = locale === 'it' ? ROWS_IT : ROWS_EN; return f.map((feature, i) => ({ feature, geotapp: ROWS_GEO[i], competitor: ROWS_COMP[i] })); }

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

export default async function GeoTappVsHubstaffPage({ params }: { params: Promise<{ locale: string }> }) {
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
    competitorName: 'Hubstaff',
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
              GeoTapp vs Hubstaff:{' '}
              <span className="text-primary">
                {isIt ? 'certificazione o monitoraggio?' : 'certification or monitoring?'}
              </span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {isIt
                ? 'Hubstaff monitora i lavoratori remoti con screenshot e GPS. GeoTapp certifica ogni intervento con prove verificabili dal committente. Orientamenti diversi, settori diversi.'
                : 'Hubstaff monitors remote workers with screenshots and GPS. GeoTapp certifies every job with client-verifiable proof. Different orientations, different sectors.'}
            </p>
          </div>

          {/* Summary verdict */}
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-12">
            <p className="font-semibold text-primary mb-2">
              {isIt ? 'In sintesi:' : 'Bottom line:'}
            </p>
            <p className="text-text-secondary">
              {isIt
                ? 'Hubstaff è pensato per monitorare lavoratori remoti digitali (screenshot, produttività). GeoTapp è pensato per certificare operatori fisici sul campo: report non alterabili con GPS reale, prove fotografiche e verifica indipendente da parte del committente. Inoltre, Hubstaff pone questioni di conformità GDPR nel contesto italiano che GeoTapp risolve per design.'
                : 'Hubstaff is designed to monitor digital remote workers (screenshots, productivity). GeoTapp is designed to certify physical field operators: tamper-proof reports with real GPS, photo evidence and independent client verification. Additionally, Hubstaff raises GDPR compliance questions in the Italian context that GeoTapp resolves by design.'}
            </p>
          </div>

          {/* Important note for IT */}
          {isIt && (
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 mb-12">
              <p className="font-semibold text-amber-400 mb-2">Nota importante per il mercato italiano</p>
              <p className="text-text-secondary text-sm">
                Il monitoraggio continuo della posizione GPS e la cattura di screenshot dei dipendenti rientrano nell'ambito dell'art. 4 dello Statuto dei Lavoratori e richiedono accordo sindacale o autorizzazione dell'Ispettorato del Lavoro. GeoTapp è progettato per essere conforme: traccia solo durante l'orario di lavoro attivo e fornisce tutta la modulistica necessaria.
              </p>
            </div>
          )}

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
                    <th className="text-center py-3 px-4 font-semibold text-sm text-text-secondary">Hubstaff</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                      <td className="py-3 px-4 text-sm text-text-secondary">{row.feature}</td>
                      <td className="py-3 px-4 text-center">
                        {row.geotapp
                          ? <span className="text-green-400 font-bold text-lg">✓</span>
                          : <span className="text-text-secondary/40 text-lg">—</span>}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {row.competitor
                          ? <span className="text-green-400 font-bold text-lg">✓</span>
                          : <span className="text-text-secondary/40 text-lg">—</span>}
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

          {/* Side by side */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">
              {isIt ? 'Orientamenti opposti' : 'Opposite orientations'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-3">GeoTapp</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {isIt ? (
                    <>
                      <li>• Report sigillato: prova difendibile per il committente</li>
                      <li>• GPS verificato solo durante l'intervento attivo</li>
                      <li>• Conforme GDPR e Garante Privacy italiano</li>
                      <li>• Progettato per settori operativi italiani (pulizie, manutenzione, sicurezza)</li>
                      <li>• L'operatore non è sorvegliato — il lavoro è certificato</li>
                    </>
                  ) : (
                    <>
                      <li>• Sealed report: defensible proof for the client</li>
                      <li>• GPS verified only during active job</li>
                      <li>• GDPR and Italian Privacy Authority compliant</li>
                      <li>• Designed for Italian operational sectors (cleaning, maintenance, security)</li>
                      <li>• Operator is not surveilled — work is certified</li>
                    </>
                  )}
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-text-secondary mb-3">Hubstaff</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {isIt ? (
                    <>
                      <li>• Progettato per monitorare lavoratori remoti digitali</li>
                      <li>• GPS continuo e screenshot automatici</li>
                      <li>• Conformità GDPR da verificare nel contesto italiano</li>
                      <li>• Nessun report verificabile dal committente</li>
                      <li>• Orientamento alla produttività, non alla certificazione</li>
                    </>
                  ) : (
                    <>
                      <li>• Designed to monitor digital remote workers</li>
                      <li>• Continuous GPS and automatic screenshots</li>
                      <li>• GDPR compliance to verify in Italian context</li>
                      <li>• No reports verifiable by the client</li>
                      <li>• Productivity-focused, not certification-focused</li>
                    </>
                  )}
                </ul>
              </div>
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
              {isIt ? 'Vuoi vedere GeoTapp in azione?' : 'Want to see GeoTapp in action?'}
            </h2>
            <p className="text-text-secondary mb-6">
              {isIt
                ? 'Ti mostriamo come un intervento diventa una prova verificabile — in 20 minuti, senza impegno.'
                : 'We show you how a job becomes verifiable proof — in 20 minutes, no commitment.'}
            </p>
            <a
              href={`https://geotapp.com/${locale}/trial/`}
              className="inline-block bg-primary text-black font-semibold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              {isIt ? 'Inizia subito gratuitamente!' : 'Start for free!'}
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
