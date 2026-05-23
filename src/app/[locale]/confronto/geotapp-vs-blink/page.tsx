import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import {
  buildComparisonArticle,
  buildComparisonBreadcrumb,
} from '@/lib/seo/comparisonSchema';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-blink/';
const ARTICLE_DATE_PUBLISHED = '2026-02-01';
const ARTICLE_DATE_MODIFIED = '2026-05-23';

const META: Record<string, { title: string; description: string }> = {
  de: { title: 'GeoTapp vs Blink — Vergleich 2026 | GeoTapp', description: 'GeoTapp vs Blink: Zeiterfassung oder Zertifizierung? Vergleich von Anti-Spoofing-GPS, kryptographisch versiegelten Berichten und fälschungssicheren Fotobeweisen für Gebäudereinigung.' },
  it: { title: 'GeoTapp vs Blink — Confronto 2026 | GeoTapp', description: 'GeoTapp vs Blink: timbratura o certificazione? Confronto su GPS anti-spoofing, report sigillati crittograficamente e prove fotografiche per imprese di pulizie.' },
  en: { title: 'GeoTapp vs Blink — Comparison 2026 | GeoTapp', description: 'GeoTapp vs Blink: time tracking or certification? Compare anti-spoofing GPS, cryptographically sealed reports and tamper-proof photo evidence for cleaning companies.' },
  nl: { title: 'GeoTapp vs Blink — Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs Blink: tijdregistratie of certificering? Vergelijk anti-spoofing GPS en cryptografisch verzegelde rapporten.' },
  fr: { title: 'GeoTapp vs Blink — Comparaison 2026 | GeoTapp', description: 'GeoTapp vs Blink : pointage ou certification ? Comparez GPS anti-fraude et rapports scelles cryptographiquement.' },
  es: { title: 'GeoTapp vs Blink — Comparacion 2026 | GeoTapp', description: 'GeoTapp vs Blink: fichaje o certificacion? Compara GPS anti-spoofing e informes sellados criptograficamente.' },
  pt: { title: 'GeoTapp vs Blink — Comparacao 2026 | GeoTapp', description: 'GeoTapp vs Blink: registo ou certificacao? Compare GPS anti-spoofing e relatorios selados criptograficamente.' },
  da: { title: 'GeoTapp vs Blink — Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Blink: tidsregistrering eller certificering? Sammenlign anti-spoofing GPS og kryptografisk forseglede rapporter.' },
  sv: { title: 'GeoTapp vs Blink — Jamforelse 2026 | GeoTapp', description: 'GeoTapp vs Blink: tidrapportering eller certifiering? Jamfor anti-spoofing-GPS och kryptografiskt forseglade rapporter.' },
  nb: { title: 'GeoTapp vs Blink — Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Blink: tidsregistrering eller sertifisering? Sammenlign anti-spoofing GPS og kryptografisk forseglede rapporter.' },
  ru: { title: 'GeoTapp vs Blink — Sravnenie 2026 | GeoTapp', description: 'GeoTapp vs Blink: uchet vremeni ili sertifikaciya? Sravnenie anti-spoofing GPS i kriptograficheski zapechatannyh otchetov.' },
};

const FAQ_DE = [
  { q: 'Was ist der Hauptunterschied zwischen GeoTapp und Blink?', a: 'Blink ist die führende Zeiterfassungssoftware für die deutsche Gebäudereinigung: GPS, QR-Code, NFC, Aufgabenverwaltung und Teamkommunikation. GeoTapp geht einen Schritt weiter: Es ist ein Zertifizierungssystem für Arbeit vor Ort, das jeden Einsatz mit Anti-Spoofing-GPS und kryptographisch versiegelten Fotos falschungssicher dokumentiert. Der Auftraggeber verifiziert den Bericht selbst — er muss Ihnen nicht glauben.' },
  { q: 'Hat Blink Anti-Spoofing-GPS?', a: 'Nein. Blink vergleicht beim Stempeln die GPS-Position mit dem eingestellten Arbeitsort, aber die GPS-Position selbst wird nicht auf Echtheit geprüft. Mit einer kostenlosen App kann die GPS-Position gefälscht werden — Blink erkennt das nicht. GeoTapp erkennt es.' },
  { q: 'Kann der Auftraggeber Blink-Berichte verifizieren?', a: 'Blink erstellt Berichte für die interne Verwaltung. GeoTapp erstellt Berichte mit einem kryptographischen Siegel, die der Auftraggeber unabhängig auf einem öffentlichen Portal verifizieren kann — ohne Konto, ohne dem Dienstleister vertrauen zu müssen.' },
  { q: 'Blink ist die Nr. 1 in der Gebäudereinigung. Warum GeoTapp wählen?', a: 'Blink ist hervorragend für Zeiterfassung und Teamkommunikation in der Reinigungsbranche. Wenn Sie aber dem Auftraggeber beweisen müssen, dass der Service erbracht wurde — mit Fotos die nicht verändert werden können und einem Bericht der Beweiskraft hat — dann brauchen Sie GeoTapp. Es sind zwei verschiedene Werkzeuge für zwei verschiedene Probleme.' },
];

const FAQ_IT = [
  { q: 'Qual è la differenza principale tra GeoTapp e Blink?', a: 'Blink è il software leader per la Gebäudereinigung in Germania: timbratura GPS, QR code, NFC, gestione attività e comunicazione team. GeoTapp va oltre: è un sistema di certificazione che documenta ogni intervento con GPS anti-spoofing e foto sigillate crittograficamente. Il committente verifica da solo.' },
  { q: 'Blink ha il GPS anti-spoofing?', a: 'No. Blink confronta la posizione GPS con il luogo di lavoro preimpostato ma non verifica se la posizione è reale o falsificata. GeoTapp rileva i tentativi di falsificazione.' },
  { q: 'Il committente può verificare i report di Blink?', a: 'Blink genera report interni. GeoTapp genera report con sigillo crittografico verificabili dal committente in modo indipendente.' },
  { q: 'Blink è il numero 1 nella Gebäudereinigung. Perché scegliere GeoTapp?', a: 'Blink eccelle nella timbratura e comunicazione per il settore pulizie tedesco. Ma se dovete dimostrare al committente che il servizio è stato fatto con prove non alterabili, serve GeoTapp. Sono strumenti diversi per problemi diversi.' },
];

const FAQ_EN = [
  { q: 'What is the main difference between GeoTapp and Blink?', a: 'Blink is Germany\'s leading time tracking software for building cleaning: GPS, QR code, NFC, task management and team communication. GeoTapp goes further: it\'s a certification system that documents every job with anti-spoofing GPS and cryptographically sealed photos. The client verifies the report independently.' },
  { q: 'Does Blink have anti-spoofing GPS?', a: 'No. Blink compares the GPS position with the preset work location but does not verify if the position is real or spoofed. GeoTapp detects spoofing attempts.' },
  { q: 'Can the client verify Blink reports?', a: 'Blink generates internal reports. GeoTapp generates reports with a cryptographic seal that clients can independently verify on a public portal.' },
  { q: 'Blink is #1 in Gebäudereinigung. Why choose GeoTapp?', a: 'Blink excels at time tracking and team communication for the German cleaning sector. But if you need to prove to your client that the service was performed with tamper-proof evidence, you need GeoTapp. Different tools for different problems.' },
];

const ROWS_DE = ['Anti-Spoofing-GPS (erkennt gefälschte Positionen)','Kryptographisch versiegelter Bericht','Unabhangige Verifizierung durch den Auftraggeber','Fotos mit kryptographisch versiegelter Hash-Kette','DSGVO-konform','GPS-Zeiterfassung','QR-Code / NFC Stempelung','Aufgabenverwaltung','Teamkommunikation','Digitale Checklisten','App Android/iOS','Spezialisiert auf Gebäudereinigung','Automatische GPS-Datenschutzerklärung mit digitaler Unterschrift*'];
const ROWS_EN = ['Anti-spoofing GPS (detects fake positions)','Cryptographically sealed report','Independent verification by client','Photos with cryptographic hash chain','GDPR compliant','GPS time tracking','QR code / NFC check-in','Task management','Team communication','Digital checklists','App Android/iOS','Specialized for building cleaning','Automatic GPS privacy notice with digital signature*'];
const ROWS_GEO =  [true,true,true,true,true,true,true,true,true,true,true,true,true];
const ROWS_COMP = [false,false,false,false,true,true,true,true,true,true,true,true,false];
function getRows(locale: string) { const f = locale === 'de' ? ROWS_DE : ROWS_EN; return f.map((feature, i) => ({ feature, geotapp: ROWS_GEO[i], competitor: ROWS_COMP[i] })); }

function getFaq(locale: string) {
  if (locale === 'de') return FAQ_DE;
  if (locale === 'it') return FAQ_IT;
  return FAQ_EN;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale] ?? META.en;
  return {
    title: { absolute: m.title }, description: m.description,
    alternates: buildLocaleAlternates(locale, PATHNAME),
    openGraph: { url: `https://geotapp.com/${locale}${PATHNAME}`, type: 'website', title: m.title, description: m.description },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description },
  };
}

export default async function GeoTappVsBlinkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isDe = locale === 'de';
  const isIt = locale === 'it';
  const faqItems = getFaq(locale);
  const rows = getRows(locale);

  const t = {
    badge: isDe ? 'App-Vergleich' : isIt ? 'Confronto App' : 'App Comparison',
    h1sub: isDe ? 'Zeiterfassung oder Zertifizierung?' : isIt ? 'timbratura o certificazione?' : 'time tracking or certification?',
    desc: isDe
      ? 'Blink ist die Nr. 1 Software für Gebäudereinigung in Deutschland: GPS, QR-Code, NFC, Aufgabenverwaltung und Teamkommunikation. GeoTapp zertifiziert jeden Einsatz mit Anti-Spoofing-GPS, kryptographisch versiegelten Fotos und Berichten die der Auftraggeber selbst verifiziert.'
      : isIt ? 'Blink è il software numero 1 per la Gebäudereinigung in Germania. GeoTapp certifica ogni intervento con GPS anti-spoofing, foto sigillate crittograficamente e report verificabili dal committente.'
      : 'Blink is Germany\'s #1 software for building cleaning. GeoTapp certifies every job with anti-spoofing GPS, cryptographically sealed photos and client-verifiable reports.',
    summary: isDe ? 'Fazit:' : isIt ? 'In sintesi:' : 'Bottom line:',
    summaryText: isDe
      ? 'Blink ist hervorragend für Zeiterfassung und Teamkommunikation in der Reinigungsbranche. Aber die GPS-Position wird nicht auf Echtheit geprüft (kein Anti-Spoofing), Fotos sind nicht kryptographisch versiegelt und die Berichte haben keine unabhängige Verifizierung für den Auftraggeber. GeoTapp schliest genau diese Lücken: Anti-Spoofing-GPS, kryptographisch versiegelte Hash-Kette für Fotos und Berichte mit Beweiskraft die der Auftraggeber selbst prüft.'
      : isIt ? 'Blink eccelle nella timbratura e comunicazione per le pulizie in Germania. Ma il GPS non è verificato (nessun anti-spoofing), le foto non sono sigillate crittograficamente e i report non sono verificabili dal committente. GeoTapp colma esattamente queste lacune.'
      : 'Blink excels at time tracking and team communication for cleaning. But GPS is not verified (no anti-spoofing), photos are not cryptographically sealed and reports are not independently verifiable. GeoTapp fills exactly these gaps.',
    noteTitle: isDe ? 'GPS-Stempelung ist nicht GPS-Verifizierung' : isIt ? 'Timbratura GPS non è verifica GPS' : 'GPS check-in is not GPS verification',
    noteText: isDe
      ? 'Blink vergleicht beim Stempeln die GPS-Position mit dem eingestellten Arbeitsort. Aber wenn ein Mitarbeiter seine GPS-Position mit einer kostenlosen App falscht, erkennt Blink das nicht — der Mitarbeiter erscheint am Arbeitsort, obwohl er zu Hause ist. GeoTapp verwendet Anti-Spoofing-Technologie die mehrere Signale abgleicht, um gefälschte Positionen zu erkennen. Zusätzlich wird jedes Foto mit einer kryptographisch versiegelten Hash-Kette gesichert: wird es nachträglich verändert, bricht das Siegel.'
      : isIt ? 'Blink confronta la posizione GPS con il luogo di lavoro impostato. Ma se un operatore falsifica il GPS con un\'app gratuita, Blink non lo rileva. GeoTapp usa tecnologia anti-spoofing che incrocia più segnali per rilevare posizioni false. In più ogni foto è sigillata con una catena hash crittografata.'
      : 'Blink compares GPS position with the preset work location. But if an employee spoofs GPS with a free app, Blink doesn\'t detect it. GeoTapp uses anti-spoofing technology that cross-references multiple signals. Plus every photo is sealed with a cryptographic hash chain.',
    features: isDe ? 'Vergleich der wichtigsten Funktionen' : isIt ? 'Confronto funzionalità chiave' : 'Key features comparison',
    feat: isDe ? 'Funktion' : isIt ? 'Funzionalità' : 'Feature',
    diff: isDe ? 'Zwei verschiedene Werkzeuge' : isIt ? 'Due strumenti diversi' : 'Two different tools',
    cta: isDe ? 'Möchten Sie GeoTapp in Aktion sehen?' : isIt ? 'Vuoi vedere GeoTapp in azione?' : 'Want to see GeoTapp in action?',
    ctaDesc: isDe ? 'Wir zeigen Ihnen, wie ein Einsatz zum verifizierbaren Beweis wird — in 10 Minuten, unverbindlich.' : isIt ? 'Ti mostriamo come un intervento diventa una prova verificabile — in 10 minuti, senza impegno.' : 'We show you how a job becomes verifiable proof — in 10 minutes, no commitment.',
    ctaBtn: isDe ? 'Jetzt kostenlos starten!' : isIt ? 'Inizia subito gratuitamente!' : 'Start for free!',
    geo: [
      isDe ? 'Anti-Spoofing-GPS: erkennt gefälschte Positionen' : isIt ? 'GPS anti-spoofing: rileva posizioni falsificate' : 'Anti-spoofing GPS: detects fake positions',
      isDe ? 'Fotos versiegelt mit kryptographischer Hash-Kette' : isIt ? 'Foto sigillate con catena hash crittografata' : 'Photos sealed with cryptographic hash chain',
      isDe ? 'Bericht mit kryptographischem Siegel und Beweiskraft' : isIt ? 'Report con sigillo crittografico e valore probatorio' : 'Report with cryptographic seal and evidentiary value',
      isDe ? 'Auftraggeber verifiziert selbst auf öffentlichem Portal' : isIt ? 'Il committente verifica da solo sul portale pubblico' : 'Client verifies independently on public portal',
      isDe ? 'Nicht nur Reinigung — alle Branchen mit Aussendienst' : isIt ? 'Non solo pulizie — tutti i settori con operatori sul campo' : 'Not just cleaning — all field service sectors',
    ],
    comp: [
      isDe ? 'Nr. 1 Software für Gebäudereinigung in Deutschland' : isIt ? 'Software numero 1 per pulizie in Germania' : '#1 software for building cleaning in Germany',
      isDe ? 'GPS + QR-Code + NFC Zeiterfassung' : isIt ? 'Timbratura GPS + QR code + NFC' : 'GPS + QR code + NFC time tracking',
      isDe ? 'Aufgabenverwaltung und digitale Checklisten' : isIt ? 'Gestione attività e checklist digitali' : 'Task management and digital checklists',
      isDe ? 'Integrierte Teamkommunikation' : isIt ? 'Comunicazione team integrata' : 'Built-in team communication',
      isDe ? 'Keine Anti-Spoofing-Prufung, keine kryptographische Versiegelung' : isIt ? 'Nessun anti-spoofing, nessuna sigillatura crittografica' : 'No anti-spoofing, no cryptographic sealing',
    ],
  };

  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) };
  const breadcrumb = buildComparisonBreadcrumb({ locale, pathname: PATHNAME, competitorName: 'Blink' });
  const meta = META[locale] ?? META.en;
  const article = buildComparisonArticle({ locale, pathname: PATHNAME, headline: meta.title, description: meta.description, datePublished: ARTICLE_DATE_PUBLISHED, dateModified: ARTICLE_DATE_MODIFIED });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">{t.badge}</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">GeoTapp vs Blink: <span className="text-primary">{t.h1sub}</span></h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">{t.desc}</p>
          </div>
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-12">
            <p className="font-semibold text-primary mb-2">{t.summary}</p>
            <p className="text-text-secondary">{t.summaryText}</p>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 mb-12">
            <p className="font-semibold text-amber-400 mb-2">{t.noteTitle}</p>
            <p className="text-text-secondary text-sm">{t.noteText}</p>
          </div>
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">{t.features}</h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full">
                <thead><tr className="border-b border-white/10 bg-white/5"><th className="text-left py-3 px-4 font-semibold text-sm">{t.feat}</th><th className="text-center py-3 px-4 font-semibold text-sm text-primary">GeoTapp</th><th className="text-center py-3 px-4 font-semibold text-sm text-text-secondary">Blink</th></tr></thead>
                <tbody>{rows.map((row, i) => (<tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors"><td className="py-3 px-4 text-sm text-text-secondary">{row.feature}</td><td className="py-3 px-4 text-center">{row.geotapp ? <span className="text-green-400 font-bold text-lg">&#10003;</span> : <span className="text-text-secondary/40 text-lg">&mdash;</span>}</td><td className="py-3 px-4 text-center">{row.competitor ? <span className="text-green-400 font-bold text-lg">&#10003;</span> : <span className="text-text-secondary/40 text-lg">&mdash;</span>}</td></tr>))}</tbody>
              </table>
            </div>
          </section>

          {/* Privacy consent footnote */}
          <div className="mb-16 px-4">
            <p className="text-xs text-text-secondary leading-relaxed">
              {isIt
                ? '* Per legge (GDPR Art. 13 e, in Italia, Art. 4 Statuto dei Lavoratori), ogni dipendente deve firmare un\'informativa privacy prima di essere geolocalizzato. La maggior parte dei software GPS non lo gestisce: il rischio legale resta al titolare. GeoTapp genera automaticamente l\'informativa personalizzata, la fa firmare digitalmente al dipendente e blocca l\'accesso GPS finché non è firmata. Nessun altro software sul mercato lo fa.'
                : isDe
                ? '* Nach geltendem Recht (DSGVO Art. 13) muss jeder Mitarbeiter eine Datenschutzerklärung unterschreiben, bevor er geortet werden darf. Die meisten GPS-Programme kümmern sich nicht darum: das rechtliche Risiko bleibt beim Arbeitgeber. GeoTapp erstellt automatisch die personalisierte Erklärung, lässt sie digital vom Mitarbeiter unterschreiben und sperrt den GPS-Zugang, bis sie unterschrieben ist. Keine andere Software auf dem Markt bietet das.'
                : '* By law (GDPR Art. 13), every employee must sign a privacy notice before being geolocated. Most GPS software does not handle this: the legal risk stays with the employer. GeoTapp automatically generates the personalised notice, gets it digitally signed by the employee and blocks GPS access until it is signed. No other software on the market does this.'}
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">{t.diff}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6"><h3 className="font-semibold text-primary mb-3">GeoTapp</h3><ul className="space-y-2 text-sm text-text-secondary">{t.geo.map((li, i) => <li key={i}>&bull; {li}</li>)}</ul></div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6"><h3 className="font-semibold text-text-secondary mb-3">Blink</h3><ul className="space-y-2 text-sm text-text-secondary">{t.comp.map((li, i) => <li key={i}>&bull; {li}</li>)}</ul></div>
            </div>
          </section>
          <section className="mb-16"><h2 className="text-2xl font-bold mb-6">FAQ</h2><div className="space-y-4">{faqItems.map((item, i) => (<div key={i} className="border border-white/10 rounded-xl p-6"><h3 className="font-semibold mb-2">{item.q}</h3><p className="text-text-secondary text-sm">{item.a}</p></div>))}</div></section>
          <div className="text-center bg-gradient-to-br from-primary/20 to-purple-500/10 border border-primary/20 rounded-2xl p-10">
            <h2 className="text-2xl font-bold mb-3">{t.cta}</h2>
            <p className="text-text-secondary mb-6">{t.ctaDesc}</p>
            <a href={`https://geotapp.com/${locale}/trial/`} className="inline-block bg-primary text-black font-semibold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">{t.ctaBtn}</a>
          </div>
        </div>
      </div>
    </>
  );
}
