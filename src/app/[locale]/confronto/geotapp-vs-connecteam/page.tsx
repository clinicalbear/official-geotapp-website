import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-connecteam/';

const META: Record<string, { title: string; description: string }> = {
  it: {
    title: 'GeoTapp vs Connecteam — Confronto 2025 | GeoTapp',
    description: 'GeoTapp vs Connecteam: quale scegliere per aziende con operatori sul campo? Confronto completo su prove del lavoro, GPS verificato, report sigillati e certificazione interventi.',
  },
  en: {
    title: 'GeoTapp vs Connecteam — Comparison 2025 | GeoTapp',
    description: 'GeoTapp vs Connecteam: which is better for field service companies? Complete comparison on work proof, verified GPS, sealed reports and job certification.',
  },
  de: {
    title: 'GeoTapp vs Connecteam — Vergleich 2025 | GeoTapp',
    description: 'GeoTapp vs Connecteam: Welches ist besser für Unternehmen mit Außendienstmitarbeitern? Vollständiger Vergleich zu Arbeitsnachweisen, GPS-Verifizierung und versiegelten Berichten.',
  },
};

const FAQ_IT = [
  {
    q: 'Qual è la differenza principale tra GeoTapp e Connecteam?',
    a: 'Connecteam è uno strumento di comunicazione e gestione del personale. GeoTapp è un sistema di certificazione del lavoro: produce report sigillati con GPS verificato e prove fotografiche che il cliente può verificare in autonomia, senza accedere al tuo account.',
  },
  {
    q: 'Connecteam ha la verifica GPS?',
    a: 'Connecteam registra la posizione GPS, ma i dati non sono sigillati crittograficamente né verificabili da terzi. GeoTapp produce report con hash crittografico: il committente può verificare che i dati non siano stati modificati dopo la chiusura dell\'intervento.',
  },
  {
    q: 'GeoTapp o Connecteam per imprese di pulizie e facility management?',
    a: 'GeoTapp è progettato specificamente per settori dove la prova del lavoro svolto è critica (pulizie, manutenzione, facility). I report verificabili di GeoTapp risolvono le contestazioni istantaneamente — funzionalità che Connecteam non offre.',
  },
  {
    q: 'Posso usare GeoTapp insieme a Connecteam?',
    a: 'Sì. GeoTapp si concentra sulla certificazione degli interventi e sulla produzione di prove verificabili; Connecteam può continuare a gestire comunicazione interna e pianificazione. I due strumenti risolvono problemi diversi.',
  },
];

const FAQ_EN = [
  {
    q: 'What is the main difference between GeoTapp and Connecteam?',
    a: 'Connecteam is a communication and workforce management tool. GeoTapp is a work certification system: it produces sealed reports with verified GPS and photo evidence that clients can independently verify without accessing your account.',
  },
  {
    q: 'Does Connecteam have GPS verification?',
    a: 'Connecteam records GPS location, but data is not cryptographically sealed or verifiable by third parties. GeoTapp produces reports with a cryptographic hash: the client can verify the data has not been modified after job closure.',
  },
  {
    q: 'GeoTapp or Connecteam for cleaning and facility management companies?',
    a: 'GeoTapp is designed specifically for sectors where proof of work is critical (cleaning, maintenance, facility). GeoTapp\'s verifiable reports resolve disputes instantly — a feature Connecteam does not offer.',
  },
];

const ROWS_IT = ['GPS verificato e sigillato','Report non alterabili con hash crittografico','Verifica indipendente da parte del cliente','Prove fotografiche collegate a GPS e timestamp','Registrazione presenze base','App mobile Android/iOS','Dashboard gestione team','Messaggistica interna proprietaria','Conformità GDPR geolocalizzazione','Informativa GPS automatica con firma digitale*'];
const ROWS_EN = ['Verified and sealed GPS','Tamper-proof reports with cryptographic hash','Independent verification by client','Photo evidence linked to GPS and timestamp','Basic attendance tracking','Mobile app Android/iOS','Team management dashboard','Built-in messaging','GDPR-compliant geolocation','Automatic GPS privacy notice with digital signature*'];
const ROWS_GEO =  [true,true,true,true,true,true,true,true,true,true];
const ROWS_COMP = [false,false,false,false,true,true,true,true,false,false];
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

export default async function GeoTappVsConnecteamPage({ params }: { params: Promise<{ locale: string }> }) {
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

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      { '@type': 'ListItem', position: 2, name: 'GeoTapp vs Connecteam', item: `https://geotapp.com/${locale}${PATHNAME}` },
    ],
  };

  const isEn = locale === 'en';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">

          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              {isIt ? 'Confronto App' : 'App Comparison'}
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              GeoTapp vs Connecteam:{' '}
              <span className="text-primary">
                {isIt ? 'quale scegliere per il tuo settore?' : 'which one for your sector?'}
              </span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {isIt
                ? 'Connecteam gestisce la comunicazione del team. GeoTapp certifica il lavoro svolto con prove verificabili. Sono strumenti diversi — ecco perché.'
                : 'Connecteam manages team communication. GeoTapp certifies completed work with verifiable proof. They solve different problems — here\'s why.'}
            </p>
          </div>

          {/* Summary verdict */}
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-12">
            <p className="font-semibold text-primary mb-2">
              {isIt ? 'In sintesi:' : 'Bottom line:'}
            </p>
            <p className="text-text-secondary">
              {isIt
                ? 'Se hai bisogno di dimostrare al cliente che il lavoro è stato fatto — con prove GPS verificabili, report non alterabili e foto con timestamp — GeoTapp è lo strumento giusto. Connecteam non produce prove verificabili: è un tool di comunicazione e scheduling, non di certificazione.'
                : 'If you need to prove to clients that work was completed — with verifiable GPS evidence, tamper-proof reports and timestamped photos — GeoTapp is the right tool. Connecteam does not produce verifiable proof: it\'s a communication and scheduling tool, not a certification platform.'}
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
                    <th className="text-center py-3 px-4 font-semibold text-sm text-text-secondary">Connecteam</th>
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

          {/* Key difference */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">
              {isIt ? 'La differenza che conta: prove verificabili vs comunicazione' : 'The key difference: verifiable proof vs communication'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-3">GeoTapp</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {isIt ? (
                    <>
                      <li>• Ogni intervento genera un report sigillato con GPS e foto</li>
                      <li>• Il committente verifica l'autenticità del report in autonomia</li>
                      <li>• I dati sono firmati crittograficamente — non modificabili</li>
                      <li>• Progettato per risolvere contestazioni con prove difendibili</li>
                      <li>• Conforme GDPR per la geolocalizzazione dei dipendenti</li>
                    </>
                  ) : (
                    <>
                      <li>• Every job generates a sealed GPS + photo report</li>
                      <li>• Clients independently verify report authenticity</li>
                      <li>• Data is cryptographically signed — tamper-proof</li>
                      <li>• Designed to resolve disputes with defensible proof</li>
                      <li>• GDPR compliant for employee geolocation</li>
                    </>
                  )}
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-text-secondary mb-3">Connecteam</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {isIt ? (
                    <>
                      <li>• Ottimo per comunicazione interna e messaggistica del team</li>
                      <li>• Registra presenze ma senza sigillo crittografico</li>
                      <li>• I dati non sono verificabili da terzi in modo indipendente</li>
                      <li>• Orientato allo scheduling e alla gestione del personale</li>
                      <li>• Non produce prove difendibili in caso di contestazione</li>
                    </>
                  ) : (
                    <>
                      <li>• Great for internal communication and team messaging</li>
                      <li>• Records attendance but without cryptographic seal</li>
                      <li>• Data not independently verifiable by third parties</li>
                      <li>• Focused on scheduling and workforce management</li>
                      <li>• Does not produce defensible proof for disputes</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </section>

          {/* When to choose */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">
              {isIt ? 'Quando scegliere GeoTapp' : 'When to choose GeoTapp'}
            </h2>
            <div className="space-y-3">
              {(isIt ? [
                'Gestisci un\'impresa di pulizie, facility management o multiservizi',
                'I tuoi clienti contestano l\'esecuzione degli interventi',
                'Hai bisogno di prove fotografiche geolocalizzate per ogni intervento',
                'Sei soggetto a ispezioni del lavoro o audit contrattuali',
                'Vuoi report che il committente possa verificare in autonomia',
              ] : [
                'You run a cleaning, facility management or multi-service company',
                'Your clients dispute job completion',
                'You need geolocated photo evidence for every intervention',
                'You are subject to labour inspections or contract audits',
                'You want reports that clients can verify independently',
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
