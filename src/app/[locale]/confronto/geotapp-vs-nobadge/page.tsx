import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-nobadge/';

const META: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp vs NoBadge — Confronto 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: timbratura o certificazione? Confronto su GPS anti-spoofing, report sigillati crittograficamente, prove fotografiche verificabili e conformita GDPR.' },
  en: { title: 'GeoTapp vs NoBadge — Comparison 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: attendance or certification? Compare anti-spoofing GPS, cryptographically sealed reports, verifiable photo evidence and GDPR compliance.' },
  de: { title: 'GeoTapp vs NoBadge — Vergleich 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: Zeiterfassung oder Zertifizierung? Vergleich von Anti-Spoofing-GPS, kryptographisch versiegelten Berichten und DSGVO-Konformitat.' },
  nl: { title: 'GeoTapp vs NoBadge — Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: tijdregistratie of certificering? Vergelijk anti-spoofing GPS, cryptografisch verzegelde rapporten en AVG-compliance.' },
  fr: { title: 'GeoTapp vs NoBadge — Comparaison 2026 | GeoTapp', description: 'GeoTapp vs NoBadge : pointage ou certification ? Comparez GPS anti-fraude, rapports scelles cryptographiquement et conformite RGPD.' },
  es: { title: 'GeoTapp vs NoBadge — Comparacion 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: fichaje o certificacion? Compara GPS anti-spoofing, informes sellados criptograficamente y cumplimiento RGPD.' },
  pt: { title: 'GeoTapp vs NoBadge — Comparacao 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: registo de presenca ou certificacao? Compare GPS anti-spoofing, relatorios selados criptograficamente.' },
  da: { title: 'GeoTapp vs NoBadge — Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: tidsregistrering eller certificering? Sammenlign anti-spoofing GPS og kryptografisk forseglede rapporter.' },
  sv: { title: 'GeoTapp vs NoBadge — Jamforelse 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: tidrapportering eller certifiering? Jamfor anti-spoofing-GPS och kryptografiskt forseglade rapporter.' },
  nb: { title: 'GeoTapp vs NoBadge — Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: tidsregistrering eller sertifisering? Sammenlign anti-spoofing GPS og kryptografisk forseglede rapporter.' },
  ru: { title: 'GeoTapp vs NoBadge — Sravnenie 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: uchet rabochego vremeni ili sertifikaciya? Sravnenie anti-spoofing GPS i kriptograficheski zapechatannyh otchetov.' },
};

const FAQ_IT = [
  { q: 'Qual è la differenza principale tra GeoTapp e NoBadge?', a: 'NoBadge è un sistema di rilevazione presenze: registra entrata e uscita dei dipendenti tramite GPS o QR code. GeoTapp è un sistema di certificazione del lavoro sul campo: produce report sigillati con GPS anti-spoofing e prove fotografiche che il committente verifica autonomamente. La differenza e tra registrare una presenza e certificare un intervento.' },
  { q: 'NoBadge ha il GPS anti-spoofing?', a: 'No. NoBadge registra la posizione GPS del dispositivo ma non verifica se la posizione è reale o falsificata. GeoTapp utilizza un controllo anti-spoofing attivo che incrocia più segnali per rilevare tentativi di falsificazione della posizione.' },
  { q: 'Il committente può verificare i report di NoBadge?', a: 'NoBadge genera report interni per l\'amministrazione. GeoTapp genera report con sigillo crittografico che il committente può verificare in modo indipendente sul portale pubblico, senza bisogno di account o di fidarsi dell\'azienda.' },
  { q: 'GeoTapp o NoBadge per imprese di pulizie?', a: 'Se l\'obiettivo è solo registrare le ore dei dipendenti, NoBadge può bastare. Se l\'obiettivo e dimostrare al committente che il servizio è stato effettuato con prove non alterabili — GPS verificato, foto sigillate, report con valore probatorio — GeoTapp e l\'unica soluzione.' },
];

const FAQ_EN = [
  { q: 'What is the main difference between GeoTapp and NoBadge?', a: 'NoBadge is an attendance tracking system: it records employee check-in/out via GPS or QR code. GeoTapp is a field work certification system: it produces sealed reports with anti-spoofing GPS and photo evidence that clients independently verify. The difference is between recording a presence and certifying a job.' },
  { q: 'Does NoBadge have anti-spoofing GPS?', a: 'No. NoBadge records the device GPS position but does not verify if the position is real or spoofed. GeoTapp uses active anti-spoofing checks that cross-reference multiple signals to detect position falsification attempts.' },
  { q: 'Can the client verify NoBadge reports?', a: 'NoBadge generates internal reports for administration. GeoTapp generates reports with a cryptographic seal that clients can independently verify on a public portal, without needing an account or trusting the company.' },
  { q: 'GeoTapp or NoBadge for cleaning companies?', a: 'If you only need to track employee hours, NoBadge may suffice. If you need to prove to your client that the service was performed with tamper-proof evidence — verified GPS, sealed photos, reports with evidentiary value — GeoTapp is the only solution.' },
];

const FAQ_DE = [
  { q: 'Was ist der Hauptunterschied zwischen GeoTapp und NoBadge?', a: 'NoBadge ist ein Anwesenheitserfassungssystem: Es registriert Ein- und Ausstempeln per GPS oder QR-Code. GeoTapp ist ein Zertifizierungssystem für Arbeit vor Ort: Es erstellt versiegelte Berichte mit Anti-Spoofing-GPS und Fotobeweisen, die der Auftraggeber unabhängig verifizieren kann.' },
  { q: 'Hat NoBadge Anti-Spoofing-GPS?', a: 'Nein. NoBadge registriert die GPS-Position des Geräts, überpruft aber nicht, ob die Position echt oder gefälscht ist. GeoTapp verwendet aktive Anti-Spoofing-Prufungen.' },
  { q: 'Kann der Auftraggeber NoBadge-Berichte verifizieren?', a: 'NoBadge erstellt interne Berichte für die Verwaltung. GeoTapp erstellt Berichte mit kryptographischem Siegel, die der Auftraggeber unabhängig auf einem öffentlichen Portal verifizieren kann.' },
  { q: 'GeoTapp oder NoBadge für Reinigungsunternehmen?', a: 'Wenn Sie nur Arbeitszeiten erfassen müssen, kann NoBadge ausreichen. Wenn Sie dem Auftraggeber beweisen müssen, dass der Service erbracht wurde — mit Anti-Spoofing-GPS, versiegelten Fotos und Berichten mit Beweiskraft — ist GeoTapp die einzige Lösung.' },
];

const ROWS_IT = ['GPS anti-spoofing (rileva posizioni falsificate)','Report sigillato crittograficamente','Verifica indipendente da parte del committente','Prove fotografiche con catena hash crittografata','Conformità GDPR / Garante Privacy','Timbratura da smartphone','QR code check-in','Gestione ferie è permessi','App nativa Android/iOS','Dashboard gestione team','Multi-sede','Nessun hardware richiesto','Informativa GPS automatica con firma digitale*'];
const ROWS_EN = ['Anti-spoofing GPS (detects fake positions)','Cryptographically sealed report','Independent verification by client','Photo evidence with cryptographic hash chain','GDPR compliant','Smartphone check-in','QR code check-in','Leave management','Native app Android/iOS','Team management dashboard','Multi-site','No hardware required','Automatic GPS privacy notice with digital signature*'];
const ROWS_GEO =  [true,true,true,true,true,true,true,true,true,true,true,true,true];
const ROWS_COMP = [false,false,false,false,true,true,true,true,false,true,true,true,false];
function getRows(locale: string) { const f = locale === 'it' ? ROWS_IT : ROWS_EN; return f.map((feature, i) => ({ feature, geotapp: ROWS_GEO[i], competitor: ROWS_COMP[i] })); }

function getFaq(locale: string) {
  if (locale === 'it') return FAQ_IT;
  if (locale === 'de') return FAQ_DE;
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

export default async function GeoTappVsNoBadgePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isIt = locale === 'it';
  const isDe = locale === 'de';
  const faqItems = getFaq(locale);
  const rows = getRows(locale);

  const t = {
    badge: isIt ? 'Confronto App' : isDe ? 'App-Vergleich' : 'App Comparison',
    h1sub: isIt ? 'timbratura o certificazione?' : isDe ? 'Zeiterfassung oder Zertifizierung?' : 'attendance or certification?',
    desc: isIt
      ? 'NoBadge registra le presenze dei dipendenti con GPS e QR code. GeoTapp certifica ogni intervento con GPS anti-spoofing, foto sigillate crittograficamente e report verificabili dal committente. Due approcci molto diversi.'
      : isDe ? 'NoBadge erfasst Anwesenheiten per GPS und QR-Code. GeoTapp zertifiziert jeden Einsatz mit Anti-Spoofing-GPS, kryptographisch versiegelten Fotos und vom Auftraggeber verifizierbaren Berichten.'
      : 'NoBadge tracks employee attendance via GPS and QR code. GeoTapp certifies every job with anti-spoofing GPS, cryptographically sealed photos and client-verifiable reports. Two very different approaches.',
    summary: isIt ? 'In sintesi:' : isDe ? 'Fazit:' : 'Bottom line:',
    summaryText: isIt
      ? 'NoBadge è un ottimo sistema di rilevazione presenze per chi ha bisogno solo di registrare entrate e uscite. GeoTapp è per chi ha bisogno di dimostrare al proprio committente che il lavoro è stato fatto — con prove non alterabili, GPS verificato e report con valore probatorio che il cliente può controllare da solo.'
      : isDe ? 'NoBadge ist ein gutes Anwesenheitssystem für reine Zeiterfassung. GeoTapp ist für Unternehmen, die ihrem Auftraggeber beweisen müssen, dass die Arbeit erbracht wurde — mit fälschungssicheren Beweisen und vom Auftraggeber verifizierbaren Berichten.'
      : 'NoBadge is a solid attendance system for basic time tracking. GeoTapp is for companies that need to prove to their client that the work was done — with tamper-proof evidence, verified GPS and reports with evidentiary value that the client can check independently.',
    noteTitle: isIt ? 'Perché la semplice timbratura GPS non basta' : isDe ? 'Warum einfache GPS-Zeiterfassung nicht ausreicht' : 'Why simple GPS attendance is not enough',
    noteText: isIt
      ? 'La posizione GPS di uno smartphone può essere falsificata con un\'app gratuita: l\'operatore risulta in cantiere mentre e a casa. NoBadge registra questa posizione senza verificarla. GeoTapp la verifica attivamente con un controllo anti-spoofing che incrocia più segnali — è impossibile ingannarlo. In più, ogni foto è sigillata con una catena hash crittografata: se qualcuno la modifica, il sistema lo rileva immediatamente.'
      : isDe ? 'Die GPS-Position eines Smartphones kann mit einer kostenlosen App gefälscht werden. NoBadge registriert diese Position ohne Verifizierung. GeoTapp verifiziert aktiv mit Anti-Spoofing-Technologie — und jedes Foto wird mit einer kryptographisch versiegelten Hash-Kette gesichert.'
      : 'A smartphone GPS position can be spoofed with a free app. NoBadge records this position without verification. GeoTapp actively verifies with anti-spoofing technology — and every photo is sealed with a cryptographic hash chain.',
    features: isIt ? 'Confronto funzionalità chiave' : isDe ? 'Vergleich der wichtigsten Funktionen' : 'Key features comparison',
    feat: isIt ? 'Funzionalità' : isDe ? 'Funktion' : 'Feature',
    diff: isIt ? 'Approcci diversi' : isDe ? 'Unterschiedliche Ansätze' : 'Different approaches',
    cta: isIt ? 'Vuoi vedere GeoTapp in azione?' : isDe ? 'Möchten Sie GeoTapp in Aktion sehen?' : 'Want to see GeoTapp in action?',
    ctaDesc: isIt ? 'Ti mostriamo come un intervento diventa una prova verificabile — in 10 minuti, senza impegno.' : isDe ? 'Wir zeigen Ihnen, wie ein Einsatz zum verifizierbaren Beweis wird — in 10 Minuten, unverbindlich.' : 'We show you how a job becomes verifiable proof — in 10 minutes, no commitment.',
    ctaBtn: isIt ? 'Inizia subito gratuitamente!' : isDe ? 'Jetzt kostenlos starten!' : 'Start for free!',
    geo: [
      isIt ? 'Report sigillato: prova difendibile per il committente' : isDe ? 'Versiegelter Bericht: beweiskraftiger Nachweis für den Auftraggeber' : 'Sealed report: defensible proof for the client',
      isIt ? 'GPS anti-spoofing: impossibile falsificare la posizione' : isDe ? 'Anti-Spoofing-GPS: Position kann nicht gefälscht werden' : 'Anti-spoofing GPS: position cannot be faked',
      isIt ? 'Foto sigillate con catena hash crittografata' : isDe ? 'Fotos versiegelt mit kryptographischer Hash-Kette' : 'Photos sealed with cryptographic hash chain',
      isIt ? 'Il committente verifica da solo, senza account' : isDe ? 'Der Auftraggeber verifiziert selbst, ohne Konto' : 'Client verifies independently, no account needed',
      isIt ? 'Progettato per pulizie, manutenzione, sicurezza, installatori' : isDe ? 'Entwickelt für Reinigung, Wartung, Sicherheit, Installateure' : 'Designed for cleaning, maintenance, security, installers',
    ],
    comp: [
      isIt ? 'Registra presenze con GPS e QR code' : isDe ? 'Erfasst Anwesenheit per GPS und QR-Code' : 'Records attendance via GPS and QR code',
      isIt ? 'Nessun controllo anti-spoofing sul GPS' : isDe ? 'Keine Anti-Spoofing-Prufung der GPS-Position' : 'No anti-spoofing check on GPS position',
      isIt ? 'Nessuna sigillatura crittografica delle foto' : isDe ? 'Keine kryptographische Versiegelung der Fotos' : 'No cryptographic photo sealing',
      isIt ? 'Report interni, non verificabili dal committente' : isDe ? 'Interne Berichte, nicht vom Auftraggeber verifizierbar' : 'Internal reports, not verifiable by client',
      isIt ? 'Orientato alla gestione HR, non alla certificazione' : isDe ? 'HR-orientiert, nicht auf Zertifizierung ausgerichtet' : 'HR-focused, not certification-focused',
    ],
  };

  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) };
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'GeoTapp vs NoBadge', item: `https://geotapp.com/${locale}${PATHNAME}` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">{t.badge}</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">GeoTapp vs NoBadge: <span className="text-primary">{t.h1sub}</span></h1>
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
                <thead><tr className="border-b border-white/10 bg-white/5"><th className="text-left py-3 px-4 font-semibold text-sm">{t.feat}</th><th className="text-center py-3 px-4 font-semibold text-sm text-primary">GeoTapp</th><th className="text-center py-3 px-4 font-semibold text-sm text-text-secondary">NoBadge</th></tr></thead>
                <tbody>{rows.map((row, i) => (<tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors"><td className="py-3 px-4 text-sm text-text-secondary">{row.feature}</td><td className="py-3 px-4 text-center">{row.geotapp ? <span className="text-green-400 font-bold text-lg">&#10003;</span> : <span className="text-text-secondary/40 text-lg">&mdash;</span>}</td><td className="py-3 px-4 text-center">{row.competitor ? <span className="text-green-400 font-bold text-lg">&#10003;</span> : <span className="text-text-secondary/40 text-lg">&mdash;</span>}</td></tr>))}</tbody>
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

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">{t.diff}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6"><h3 className="font-semibold text-primary mb-3">GeoTapp</h3><ul className="space-y-2 text-sm text-text-secondary">{t.geo.map((li, i) => <li key={i}>&bull; {li}</li>)}</ul></div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6"><h3 className="font-semibold text-text-secondary mb-3">NoBadge</h3><ul className="space-y-2 text-sm text-text-secondary">{t.comp.map((li, i) => <li key={i}>&bull; {li}</li>)}</ul></div>
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
