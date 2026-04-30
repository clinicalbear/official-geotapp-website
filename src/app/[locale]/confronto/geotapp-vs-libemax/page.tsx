import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-libemax/';

const META: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp vs Libemax — Confronto 2026 | GeoTapp', description: 'GeoTapp vs Libemax Rilevazione Presenze: geofence o anti-spoofing? Confronto su GPS verificato, report sigillati crittograficamente e prove fotografiche non alterabili.' },
  en: { title: 'GeoTapp vs Libemax — Comparison 2026 | GeoTapp', description: 'GeoTapp vs Libemax: geofence or anti-spoofing? Compare verified GPS, cryptographically sealed reports and tamper-proof photo evidence.' },
  de: { title: 'GeoTapp vs Libemax — Vergleich 2026 | GeoTapp', description: 'GeoTapp vs Libemax: Geofence oder Anti-Spoofing? Vergleich von verifiziertem GPS, kryptographisch versiegelten Berichten und fälschungssicheren Fotobeweisen.' },
  nl: { title: 'GeoTapp vs Libemax — Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs Libemax: geofence of anti-spoofing? Vergelijk geverifieerd GPS, cryptografisch verzegelde rapporten en manipulatiebestendige fotobewijs.' },
  fr: { title: 'GeoTapp vs Libemax — Comparaison 2026 | GeoTapp', description: 'GeoTapp vs Libemax : geofence ou anti-spoofing ? Comparez GPS verifie, rapports scelles cryptographiquement et preuves photographiques infalsifiables.' },
  es: { title: 'GeoTapp vs Libemax — Comparacion 2026 | GeoTapp', description: 'GeoTapp vs Libemax: geofence o anti-spoofing? Compara GPS verificado, informes sellados criptograficamente y pruebas fotograficas inalterables.' },
  pt: { title: 'GeoTapp vs Libemax — Comparacao 2026 | GeoTapp', description: 'GeoTapp vs Libemax: geofence ou anti-spoofing? Compare GPS verificado, relatorios selados criptograficamente e provas fotograficas.' },
  da: { title: 'GeoTapp vs Libemax — Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Libemax: geofence eller anti-spoofing? Sammenlign verificeret GPS og kryptografisk forseglede rapporter.' },
  sv: { title: 'GeoTapp vs Libemax — Jamforelse 2026 | GeoTapp', description: 'GeoTapp vs Libemax: geofence eller anti-spoofing? Jamfor verifierad GPS och kryptografiskt forseglade rapporter.' },
  nb: { title: 'GeoTapp vs Libemax — Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Libemax: geofence eller anti-spoofing? Sammenlign verifisert GPS og kryptografisk forseglede rapporter.' },
  ru: { title: 'GeoTapp vs Libemax — Sravnenie 2026 | GeoTapp', description: 'GeoTapp vs Libemax: geofence ili anti-spoofing? Sravnenie verificirovannogo GPS i kriptograficheski zapechatannyh otchetov.' },
};

const FAQ_IT = [
  { q: 'Qual è la differenza tra il geofence di Libemax e l\'anti-spoofing di GeoTapp?', a: 'Il geofence di Libemax verifica solo che il dispositivo sia dentro un perimetro predefinito — ma la posizione GPS stessa può essere falsificata con un\'app gratuita. L\'anti-spoofing di GeoTapp va oltre: incrocia più segnali per verificare che la posizione sia reale e non simulata. E la differenza tra controllare dove il telefono dice di essere e verificare dove il telefono è davvero.' },
  { q: 'Libemax ha 200.000 download. GeoTapp è affidabile?', a: 'Libemax è un\'ottima app di rilevazione presenze con una base utenti consolidata. GeoTapp risolve un problema diverso: non solo registra le presenze ma certifica il lavoro con prove non alterabili. Sono due categorie diverse — come confrontare un cronometro con un notaio.' },
  { q: 'Perché le foto di GeoTapp sono diverse da quelle di Libemax?', a: 'Libemax permette di allegare foto ai rapportini. GeoTapp sigilla ogni foto con una catena hash crittografata nel momento stesso dello scatto: se qualcuno modifica la foto anche di un pixel, il sigillo si rompe è il sistema lo rileva. Le foto di GeoTapp sono prove con valore probatorio, non semplici allegati.' },
  { q: 'GeoTapp o Libemax per cooperative sociali e imprese di pulizie?', a: 'Se l\'obiettivo è la sola rilevazione presenze con NFC e geofence, Libemax è una scelta solida. Se l\'obiettivo è eliminare le contestazioni dei clienti con report verificabili e prove non alterabili, GeoTapp e l\'unica soluzione — perché il committente può controllare tutto da solo senza dovervi credere sulla parola.' },
];

const FAQ_EN = [
  { q: 'What is the difference between Libemax geofence and GeoTapp anti-spoofing?', a: 'Libemax geofence only checks if the device is within a predefined perimeter — but the GPS position itself can be spoofed with a free app. GeoTapp anti-spoofing goes further: it cross-references multiple signals to verify the position is real and not simulated.' },
  { q: 'Libemax has 200,000 downloads. Is GeoTapp reliable?', a: 'Libemax is an excellent attendance tracking app with a solid user base. GeoTapp solves a different problem: it certifies work with tamper-proof evidence. Two different categories — like comparing a stopwatch with a notary.' },
  { q: 'Why are GeoTapp photos different from Libemax photos?', a: 'Libemax allows attaching photos to reports. GeoTapp seals every photo with a cryptographic hash chain at the moment of capture: if anyone modifies the photo by even one pixel, the seal breaks. GeoTapp photos are evidence with evidentiary value, not simple attachments.' },
  { q: 'GeoTapp or Libemax for social cooperatives and cleaning companies?', a: 'For attendance tracking with NFC and geofence, Libemax is a solid choice. To eliminate client disputes with verifiable reports and tamper-proof evidence, GeoTapp is the only solution — because the client can check everything independently.' },
];

const FAQ_DE = [
  { q: 'Was ist der Unterschied zwischen Libemax Geofence und GeoTapp Anti-Spoofing?', a: 'Libemax Geofence prüft nur, ob das Gerat innerhalb eines vordefinierten Perimeters ist — aber die GPS-Position selbst kann mit einer kostenlosen App gefälscht werden. GeoTapp Anti-Spoofing geht weiter: es gleicht mehrere Signale ab, um zu verifizieren, dass die Position echt ist.' },
  { q: 'Libemax hat 200.000 Downloads. Ist GeoTapp zuverlässig?', a: 'Libemax ist eine ausgezeichnete Zeiterfassungs-App. GeoTapp löst ein anderes Problem: Es zertifiziert Arbeit mit fälschungssicheren Beweisen. Zwei verschiedene Kategorien — wie ein Stoppuhr mit einem Notar zu vergleichen.' },
  { q: 'Warum sind GeoTapp-Fotos anders als Libemax-Fotos?', a: 'Libemax erlaubt Fotos als Anhänge. GeoTapp versiegelt jedes Foto mit einer kryptographisch versiegelten Hash-Kette im Moment der Aufnahme: wird das Foto auch nur um ein Pixel verändert, bricht das Siegel. GeoTapp-Fotos sind Beweise mit Beweiskraft.' },
  { q: 'GeoTapp oder Libemax für Reinigungsunternehmen?', a: 'Fur reine Zeiterfassung mit NFC und Geofence ist Libemax eine solide Wahl. Um Kundenstreitigkeiten mit verifizierbaren Berichten und fälschungssicheren Beweisen zu eliminieren, ist GeoTapp die einzige Lösung.' },
];

const ROWS_IT = ['GPS anti-spoofing (rileva posizioni falsificate)','Report sigillato crittograficamente','Verifica indipendente da parte del committente','Foto con catena hash crittografata','Conformità GDPR','Timbratura GPS','Timbratura QR code / NFC / Bluetooth','Geofence (perimetro)','Checklist e audit','App mobile Android/iOS','Dashboard gestione team','Settori: pulizie, edilizia, cooperative','Informativa GPS automatica con firma digitale*'];
const ROWS_EN = ['Anti-spoofing GPS (detects spoofed positions)','Cryptographically sealed report','Independent verification by client','Photos with cryptographic hash chain','GDPR compliant','GPS check-in','QR code / NFC / Bluetooth check-in','Geofence (perimeter)','Checklists and audits','Mobile app Android/iOS','Team management dashboard','Sectors: cleaning, construction, cooperatives','Automatic GPS privacy notice with digital signature*'];
const ROWS_GEO =  [true,true,true,true,true,true,true,true,true,true,true,true,true];
const ROWS_COMP = [false,false,false,false,true,true,true,true,true,true,true,true,false];
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

export default async function GeoTappVsLibemaxPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isIt = locale === 'it';
  const isDe = locale === 'de';
  const faqItems = getFaq(locale);
  const rows = getRows(locale);

  const t = {
    badge: isIt ? 'Confronto App' : isDe ? 'App-Vergleich' : 'App Comparison',
    h1sub: isIt ? 'geofence o anti-spoofing?' : isDe ? 'Geofence oder Anti-Spoofing?' : 'geofence or anti-spoofing?',
    desc: isIt
      ? 'Libemax e l\'app di rilevazione presenze più scaricata in Italia con oltre 200.000 download. GeoTapp è un sistema di certificazione del lavoro con GPS anti-spoofing e report non alterabili. Due approcci fondamentalmente diversi allo stesso problema.'
      : isDe ? 'Libemax ist die meistgeladene Zeiterfassungs-App in Italien mit über 200.000 Downloads. GeoTapp ist ein Arbeitszertifizierungssystem mit Anti-Spoofing-GPS und fälschungssicheren Berichten. Zwei grundlegend verschiedene Ansätze.'
      : 'Libemax is Italy\'s most downloaded attendance app with 200,000+ downloads. GeoTapp is a work certification system with anti-spoofing GPS and tamper-proof reports. Two fundamentally different approaches to the same problem.',
    summary: isIt ? 'In sintesi:' : isDe ? 'Fazit:' : 'Bottom line:',
    summaryText: isIt
      ? 'Libemax eccelle nella rilevazione presenze con molteplici metodi (GPS, QR, NFC, Bluetooth, geofence). Ma il geofence verifica solo il perimetro, non se la posizione è reale. GeoTapp va oltre: l\'anti-spoofing verifica che il GPS sia autentico, le foto sono sigillate crittograficamente è il report ha valore probatorio — il committente lo verifica da solo.'
      : isDe ? 'Libemax glänzt bei der Zeiterfassung mit vielen Methoden (GPS, QR, NFC, Bluetooth, Geofence). Aber Geofence prüft nur den Perimeter, nicht ob die Position echt ist. GeoTapp geht weiter: Anti-Spoofing verifiziert das GPS, Fotos werden kryptographisch versiegelt und der Bericht hat Beweiskraft.'
      : 'Libemax excels at attendance tracking with multiple methods (GPS, QR, NFC, Bluetooth, geofence). But geofence only checks the perimeter, not if the position is real. GeoTapp goes further: anti-spoofing verifies GPS authenticity, photos are cryptographically sealed and reports have evidentiary value.',
    noteTitle: isIt ? 'Geofence non è anti-spoofing' : isDe ? 'Geofence ist kein Anti-Spoofing' : 'Geofence is not anti-spoofing',
    noteText: isIt
      ? 'Il geofence di Libemax controlla se lo smartphone e dentro un perimetro predefinito. Ma se la posizione GPS e falsificata con un\'app, il geofence viene ingannato: il telefono dice di essere dentro il perimetro anche se e a chilometri di distanza. L\'anti-spoofing di GeoTapp rileva proprio questo: verifica che il segnale GPS sia autentico, non solo che le coordinate cadano dentro un\'area.'
      : isDe ? 'Libemax Geofence prüft, ob das Smartphone in einem vordefinierten Perimeter ist. Aber bei gefälschter GPS-Position wird auch der Geofence getauscht. GeoTapp Anti-Spoofing erkennt genau das: es verifiziert, dass das GPS-Signal echt ist.'
      : 'Libemax geofence checks if the smartphone is within a predefined perimeter. But if the GPS position is spoofed, the geofence is fooled too. GeoTapp anti-spoofing detects exactly this: it verifies the GPS signal is authentic.',
    features: isIt ? 'Confronto funzionalità chiave' : isDe ? 'Vergleich der wichtigsten Funktionen' : 'Key features comparison',
    feat: isIt ? 'Funzionalità' : isDe ? 'Funktion' : 'Feature',
    diff: isIt ? 'Due filosofie diverse' : isDe ? 'Zwei verschiedene Philosophien' : 'Two different philosophies',
    cta: isIt ? 'Vuoi vedere GeoTapp in azione?' : isDe ? 'Möchten Sie GeoTapp in Aktion sehen?' : 'Want to see GeoTapp in action?',
    ctaDesc: isIt ? 'Ti mostriamo come un intervento diventa una prova verificabile — in 10 minuti, senza impegno.' : isDe ? 'Wir zeigen Ihnen, wie ein Einsatz zum verifizierbaren Beweis wird — in 10 Minuten, unverbindlich.' : 'We show you how a job becomes verifiable proof — in 10 minutes, no commitment.',
    ctaBtn: isIt ? 'Inizia subito gratuitamente!' : isDe ? 'Jetzt kostenlos starten!' : 'Start for free!',
    geo: [
      isIt ? 'GPS anti-spoofing: verifica che la posizione sia reale' : isDe ? 'Anti-Spoofing-GPS: verifiziert echte Position' : 'Anti-spoofing GPS: verifies real position',
      isIt ? 'Foto sigillate con catena hash crittografata' : isDe ? 'Fotos versiegelt mit kryptographischer Hash-Kette' : 'Photos sealed with cryptographic hash chain',
      isIt ? 'Report con sigillo crittografico e valore probatorio' : isDe ? 'Bericht mit kryptographischem Siegel und Beweiskraft' : 'Report with cryptographic seal and evidentiary value',
      isIt ? 'Il committente verifica da solo' : isDe ? 'Der Auftraggeber verifiziert selbst' : 'Client verifies independently',
      isIt ? 'Certificazione, non solo rilevazione' : isDe ? 'Zertifizierung, nicht nur Zeiterfassung' : 'Certification, not just attendance',
    ],
    comp: [
      isIt ? '200.000+ download, 6.000+ aziende' : isDe ? '200.000+ Downloads, 6.000+ Unternehmen' : '200,000+ downloads, 6,000+ companies',
      isIt ? 'GPS + QR + NFC + Bluetooth + geofence' : isDe ? 'GPS + QR + NFC + Bluetooth + Geofence' : 'GPS + QR + NFC + Bluetooth + geofence',
      isIt ? 'Geofence: controlla il perimetro (non la veridicità GPS)' : isDe ? 'Geofence: prüft Perimeter (nicht GPS-Echtheit)' : 'Geofence: checks perimeter (not GPS authenticity)',
      isIt ? 'Checklist e audit per cantieri' : isDe ? 'Checklisten und Audits für Baustellen' : 'Checklists and audits for construction',
      isIt ? 'Rilevazione presenze, non certificazione' : isDe ? 'Zeiterfassung, nicht Zertifizierung' : 'Attendance tracking, not certification',
    ],
  };

  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) };
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'GeoTapp vs Libemax', item: `https://geotapp.com/${locale}${PATHNAME}` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">{t.badge}</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">GeoTapp vs Libemax: <span className="text-primary">{t.h1sub}</span></h1>
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
                <thead><tr className="border-b border-white/10 bg-white/5"><th className="text-left py-3 px-4 font-semibold text-sm">{t.feat}</th><th className="text-center py-3 px-4 font-semibold text-sm text-primary">GeoTapp</th><th className="text-center py-3 px-4 font-semibold text-sm text-text-secondary">Libemax</th></tr></thead>
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
              <div className="bg-white/5 border border-white/10 rounded-xl p-6"><h3 className="font-semibold text-text-secondary mb-3">Libemax</h3><ul className="space-y-2 text-sm text-text-secondary">{t.comp.map((li, i) => <li key={i}>&bull; {li}</li>)}</ul></div>
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
