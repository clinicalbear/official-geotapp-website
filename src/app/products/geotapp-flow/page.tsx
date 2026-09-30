'use client';

import './l-page.css';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ArrowRight,
  Database,
  Camera,
  FileArchive,
  CreditCard,
  Zap,
  Globe,
} from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState, useCallback, useEffect } from 'react';
import { GEOTAPP_SYSTEMS, SystemDetail } from './systems-data';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  localizePath,
} from '@/lib/i18n/locale-routing';
import { trackEvent } from '@/lib/analytics';
import LNastro from '@/components/LNastro';
import { GIRO_INIZIO_FLOW } from '@/lib/video-giro';

const FeaturedIn = dynamic(() => import('@/components/FeaturedIn'), { ssr: true });
const VideoGiro = dynamic(() => import('@/components/VideoGiro'), { ssr: true });
import { featuredLabel } from '@/lib/press/labels';
import { localizeEnglishDeep } from '@/lib/i18n/en-spelling';

const LA_PROVA: Record<string, string> = {
  it: 'La prova', en: 'The proof', de: 'Der Beweis', fr: 'La preuve', es: 'La prueba',
  pt: 'A prova', nl: 'Het bewijs', da: 'Beviset', sv: 'Beviset', nb: 'Beviset', ru: 'Доказательство',
};

const CAROUSEL_SLIDES = [
  {
    src: '/screen_dashboard.webp',
    alt_it: 'GeoTapp Flow - Dashboard con KPI e moduli operativi',
    alt_en: 'GeoTapp Flow - Dashboard with KPIs and operational modules',
    label_it: 'Dashboard KPI e moduli operativi',
    label_en: 'KPI Dashboard & Operational Modules',
    alt_de: 'GeoTapp Flow - Dashboard mit Kennzahlen und Einsatzmodulen',
    label_de: 'Dashboard mit Kennzahlen und Einsatzmodulen',
    alt_nl: 'GeoTapp Flow - Dashboard met kengetallen en operationele modules',
    label_nl: 'Dashboard met kengetallen en operationele modules',
    alt_fr: 'GeoTapp Flow - Tableau de bord avec indicateurs et modules opérationnels',
    label_fr: 'Tableau de bord et modules opérationnels',
  },
  {
    src: '/screen_live_map.webp',
    alt_it: 'GeoTapp Flow - Mappa con le posizioni registrate alle timbrature',
    alt_en: 'GeoTapp Flow - Map with the positions recorded at clock-in',
    label_it: 'Mappa delle posizioni registrate alle timbrature',
    label_en: 'Map of the positions recorded at clock-in',
    alt_de: 'GeoTapp Flow - Karte mit den bei den Buchungen erfassten Standorten',
    label_de: 'Karte der bei den Buchungen erfassten Standorte',
    alt_nl: 'GeoTapp Flow - Kaart met de locaties die bij de registraties zijn vastgelegd',
    label_nl: 'Kaart van de locaties die bij de registraties zijn vastgelegd',
    alt_fr: 'GeoTapp Flow - Carte des positions enregistrées lors des pointages',
    label_fr: 'Carte des positions enregistrées lors des pointages',
  },
  {
    src: '/schermataFlow.webp',
    alt_it: 'GeoTapp Flow - Pannello operativo',
    alt_en: 'GeoTapp Flow - Operational dashboard',
    label_it: 'Dashboard operativa',
    label_en: 'Operational Dashboard',
    alt_de: 'GeoTapp Flow - Einsatzübersicht',
    label_de: 'Einsatzübersicht',
    alt_nl: 'GeoTapp Flow - Operationeel paneel',
    label_nl: 'Operationeel overzicht',
    alt_fr: 'GeoTapp Flow - Tableau de bord opérationnel',
    label_fr: 'Tableau de bord opérationnel',
  },
];

// Screenshot vero dentro la cornice .browser: stessa carosella di sempre
// (3 schermate, autoplay solo desktop), solo vestita di nuovo.
/**
 * Testi della pagina Flow, una voce per lingua. Prima erano scritti nel codice con
 * «isItalian ? ... : ...»: tutte le lingue diverse dall'italiano ricevevano l'inglese.
 * Le lingue senza voce propria ripiegano sull'inglese finché non vengono scritte.
 */
type FlowCopy = {
  statusLabel: string; releaseNote: string; doesTitle: string; doesSub: string;
  cards: { title: string; description: string }[];
  blocks: { title: string; description: string }[];
  complianceKicker: string; complianceTagline: string; complianceFootnote: string;
  legalKicker: string; trial: string;
};
const FLOW_COPY: Record<string, FlowCopy> = {
  it: {
    statusLabel: 'Dove si usa',
    releaseNote: 'Flow è una web app: si usa dal browser, su computer e tablet, senza installare niente. Chi lavora sul campo usa GeoTapp TimeTracker, l\'app disponibile su Google Play e App Store, e quello che timbra arriva in Flow.',
    doesTitle: 'Cosa fa GeoTapp Flow',
    doesSub: 'È il gestionale dell\'ufficio, e in più tiene insieme la prova di quello che la squadra ha fatto: pianificazione, lavoro sul campo, consuntivo e report per il cliente.',
    cards: [
      { title: 'Centro operativo e gestionale', description: 'Flow dà all\'ufficio un unico ambiente per clienti, commesse, calendario, documenti, ferie e permessi, amministrazione e coordinamento delle squadre.' },
      { title: 'Prove da mostrare al cliente', description: 'Foto, note e timbrature raccolte sul campo restano legate alla commessa, così l\'ufficio risponde con i fatti e non con le supposizioni.' },
      { title: 'Storico della commessa ed export', description: 'Per ogni commessa puoi scaricare il pacchetto con la cronologia degli eventi, le timbrature con le posizioni e le foto, e mandare al cliente il report sigillato.' },
      { title: 'Fatturazione più rapida', description: 'Preventivi, fatture e il collegamento con Fatture in Cloud lavorano sui dati veri della commessa: il consuntivo si fa prima e si discute meno.' },
    ],
    blocks: [
      { title: 'Pensato per ufficio, amministrazione e coordinamento', description: 'Flow serve a titolari, amministrazione e responsabili che vogliono meno discussioni interne, ruoli più chiari e una visione chiara del lavoro fatto.' },
      { title: 'Collegato a TimeTracker', description: 'Timbrature, foto di prova e avanzamento della commessa arrivano in Flow appena l\'operatore li registra, pronti per il report e per il consuntivo.' },
    ],
    complianceKicker: 'Informativa GPS',
    complianceTagline: 'Prima si firma l\'informativa, poi si timbra.*',
    complianceFootnote: '* Per legge (art. 13 GDPR e, in Italia, art. 4 dello Statuto dei Lavoratori) ogni dipendente va informato prima di essere geolocalizzato. Se il software lascia questo passaggio al titolare, il rischio resta a lui. GeoTapp prepara l\'informativa personalizzata, la fa firmare per presa visione nell\'app e non lascia timbrare finché non è firmata.',
    legalKicker: 'Normativa locale',
    trial: 'Prova Flow gratis per 14 giorni',
  },
  en: {
    statusLabel: 'Where it is used',
    releaseNote: 'Flow is a web app: you use it from the browser, on computer and tablet, with nothing to install. People in the field use GeoTapp TimeTracker, the app available on Google Play and the App Store, and what they clock in arrives in Flow.',
    doesTitle: 'What GeoTapp Flow does',
    doesSub: 'It is the office management tool, and it also keeps together the proof of what the team did: planning, field work, final accounts and reports for the client.',
    cards: [
      { title: 'Management and operational hub', description: 'Flow gives the office a single environment for clients, jobs, calendar, documents, leave, administration and coordination of the crews.' },
      { title: 'Proof to show the client', description: 'Photos, notes and clock-ins collected in the field stay attached to each job, so the office answers with facts, not assumptions.' },
      { title: 'Job history and export', description: 'For each job you can download the package with the event timeline, the clock-ins with their locations and the photos, and send the client the sealed report.' },
      { title: 'Faster billing', description: 'Quotes, invoices and the connection with Fatture in Cloud work on the real job data: the final account is done sooner and there is less to argue about.' },
    ],
    blocks: [
      { title: 'Built for office, administration and coordination', description: 'Owners, administration and managers use Flow when they want fewer internal disputes, clearer roles and a clear view of the work done.' },
      { title: 'Connected to TimeTracker', description: 'Clock-ins, proof photos and job progress arrive in Flow as soon as the operator records them, ready for the report and the final account.' },
    ],
    complianceKicker: 'GPS notice',
    complianceTagline: 'First the notice is signed, then you clock in.*',
    complianceFootnote: '* By law (GDPR Art. 13 and, in Italy, Art. 4 of the Workers\' Statute) every employee must be informed before being geolocated. If the software leaves that step to the owner, the risk stays with them. GeoTapp prepares the personalised notice, has it signed as acknowledged in the app and does not let the worker clock in until it is signed.',
    legalKicker: 'Local regulation',
    trial: 'Try Flow free for 14 days',
  },
  de: {
    statusLabel: 'Wo es eingesetzt wird',
    releaseNote: 'Flow ist eine Web-App: Sie nutzen sie im Browser, auf Computer und Tablet, ohne etwas zu installieren. Die Mitarbeitenden im Außendienst nutzen GeoTapp TimeTracker, die App bei Google Play und im App Store, und was sie stempeln, kommt in Flow an.',
    doesTitle: 'Was GeoTapp Flow macht',
    doesSub: 'Es ist die Verwaltung fürs Büro und hält zugleich den Nachweis dessen zusammen, was das Team getan hat: Planung, Arbeit vor Ort, Abrechnung und Berichte für den Kunden.',
    cards: [
      { title: 'Verwaltung und Einsatzzentrale', description: 'Flow gibt dem Büro eine einzige Umgebung für Kunden, Aufträge, Kalender, Dokumente, Urlaub und Abwesenheiten, Verwaltung und die Koordination der Teams.' },
      { title: 'Nachweise, die Sie dem Kunden zeigen können', description: 'Fotos, Notizen und Buchungen, die vor Ort erfasst werden, bleiben dem Auftrag zugeordnet, sodass das Büro mit Fakten antwortet und nicht mit Vermutungen.' },
      { title: 'Auftragshistorie und Export', description: 'Für jeden Auftrag können Sie das Paket mit dem Ereignisverlauf, den Buchungen samt Standorten und den Fotos herunterladen und dem Kunden den versiegelten Bericht schicken.' },
      { title: 'Schnellere Abrechnung', description: 'Angebote, Rechnungen und die Anbindung an Fatture in Cloud arbeiten mit den echten Auftragsdaten: Die Abrechnung ist schneller fertig, und es gibt weniger zu diskutieren.' },
    ],
    blocks: [
      { title: 'Gemacht für Büro, Verwaltung und Koordination', description: 'Inhaber, Verwaltung und Führungskräfte nutzen Flow, wenn sie weniger interne Streitigkeiten, klarere Rollen und einen klaren Überblick über die geleistete Arbeit wollen.' },
      { title: 'Mit TimeTracker verbunden', description: 'Buchungen, Nachweisfotos und Auftragsfortschritt kommen in Flow an, sobald die Mitarbeitenden sie erfassen, bereit für den Bericht und die Abrechnung.' },
    ],
    complianceKicker: 'GPS-Information',
    complianceTagline: 'Erst wird die Information bestätigt, dann wird gestempelt.*',
    complianceFootnote: '* Gesetzlich (Art. 13 DSGVO und, in Italien, Art. 4 des Arbeitnehmerstatuts) müssen alle Beschäftigten informiert werden, bevor ihr Standort erfasst wird. Überlässt die Software diesen Schritt dem Inhaber, bleibt das Risiko bei ihm. GeoTapp bereitet die persönliche Information vor, lässt sie in der App als zur Kenntnis genommen bestätigen und lässt erst stempeln, wenn sie bestätigt ist.',
    legalKicker: 'Regeln vor Ort',
    trial: 'Flow 14 Tage kostenlos testen',
  },
  fr: {
    statusLabel: 'Où il s\'utilise',
    releaseNote: 'Flow est une application web : vous l\'utilisez depuis le navigateur, sur ordinateur et tablette, sans rien installer. Les équipes sur le terrain utilisent GeoTapp TimeTracker, l\'application disponible sur Google Play et l\'App Store, et ce qu\'elles pointent arrive dans Flow.',
    doesTitle: 'Ce que fait GeoTapp Flow',
    doesSub: 'C\'est l\'outil de gestion du bureau, et il rassemble aussi la preuve de ce que l\'équipe a fait : planification, travail sur le terrain, décompte final et rapports pour le client.',
    cards: [
      { title: 'Centre opérationnel et outil de gestion', description: 'Flow donne au bureau un seul environnement pour les clients, les chantiers, le calendrier, les documents, les congés et absences, l\'administration et la coordination des équipes.' },
      { title: 'Des preuves à montrer au client', description: 'Photos, notes et pointages recueillis sur le terrain restent rattachés au chantier : le bureau répond avec des faits, pas avec des suppositions.' },
      { title: 'Historique du chantier et export', description: 'Pour chaque chantier, vous pouvez télécharger le dossier avec la chronologie des événements, les pointages avec leurs positions et les photos, et envoyer au client le rapport scellé.' },
      { title: 'Facturation plus rapide', description: 'Devis, factures et la connexion avec Fatture in Cloud travaillent sur les données réelles du chantier : le décompte final se fait plus vite et on discute moins.' },
    ],
    blocks: [
      { title: 'Pensé pour le bureau, l\'administration et la coordination', description: 'Flow s\'adresse aux dirigeants, à l\'administration et aux responsables qui veulent moins de discussions internes, des rôles plus clairs et une vision nette du travail accompli.' },
      { title: 'Relié à TimeTracker', description: 'Pointages, photos de preuve et avancement du chantier arrivent dans Flow dès que l\'opérateur les enregistre, prêts pour le rapport et pour le décompte final.' },
    ],
    complianceKicker: 'Information GPS',
    complianceTagline: 'D\'abord on signe l\'information, ensuite on pointe.*',
    complianceFootnote: '* La loi (art. 13 du RGPD et, en Italie, art. 4 du Statut des travailleurs) impose d\'informer chaque salarié avant de le géolocaliser. Si le logiciel laisse cette étape à l\'employeur, le risque reste pour lui. GeoTapp prépare l\'information personnalisée, la fait signer pour prise de connaissance dans l\'application et ne laisse pas pointer tant qu\'elle n\'est pas signée.',
    legalKicker: 'Réglementation locale',
    trial: 'Essayez Flow gratuitement pendant 14 jours',
  },
  nl: {
    statusLabel: 'Waar u het gebruikt',
    releaseNote: 'Flow is een webapp: u gebruikt hem in de browser, op computer en tablet, zonder iets te installeren. Wie in het veld werkt, gebruikt GeoTapp TimeTracker, de app die beschikbaar is op Google Play en de App Store, en wat daar wordt geregistreerd, komt in Flow aan.',
    doesTitle: 'Wat GeoTapp Flow doet',
    doesSub: 'Het is het beheersysteem van het kantoor, en het houdt bovendien het bewijs bij van wat het team heeft gedaan: planning, werk in het veld, afrekening en rapporten voor de klant.',
    cards: [
      { title: 'Operationeel centrum en beheersysteem', description: 'Flow geeft het kantoor één omgeving voor klanten, opdrachten, agenda, documenten, verlof en vrije dagen, administratie en coördinatie van de teams.' },
      { title: 'Bewijs om aan de klant te tonen', description: 'Foto\'s, notities en registraties uit het veld blijven gekoppeld aan de opdracht, zodat het kantoor antwoordt met feiten en niet met aannames.' },
      { title: 'Historie van de opdracht en export', description: 'Voor elke opdracht kunt u het pakket downloaden met de chronologie van de gebeurtenissen, de registraties met de locaties en de foto\'s, en de klant het verzegelde rapport sturen.' },
      { title: 'Snellere facturering', description: 'Offertes, facturen en de koppeling met Fatture in Cloud werken met de echte gegevens van de opdracht: de afrekening is sneller gemaakt en er wordt minder gediscussieerd.' },
    ],
    blocks: [
      { title: 'Bedoeld voor kantoor, administratie en coördinatie', description: 'Flow is voor eigenaren, administratie en verantwoordelijken die minder interne discussies willen, duidelijkere rollen en een helder overzicht van het uitgevoerde werk.' },
      { title: 'Gekoppeld aan TimeTracker', description: 'Registraties, bewijsfoto\'s en voortgang van de opdracht komen in Flow aan zodra de medewerker ze vastlegt, klaar voor het rapport en voor de afrekening.' },
    ],
    complianceKicker: 'GPS-privacyverklaring',
    complianceTagline: 'Eerst ondertekent men de verklaring, dan registreert men.*',
    complianceFootnote: '* Volgens de wet (art. 13 AVG en, in Italië, art. 4 van het arbeidsstatuut) moet elke werknemer worden geïnformeerd voordat hij wordt gelokaliseerd. Laat de software deze stap aan de verantwoordelijke over, dan blijft het risico bij hem. GeoTapp maakt de persoonlijke privacyverklaring klaar, laat die in de app voor kennisgeving ondertekenen en laat niet registreren totdat ze is ondertekend.',
    legalKicker: 'Lokale regelgeving',
    trial: 'Probeer Flow 14 dagen gratis',
  },
};

function ScreenCarousel({ isItalian, isGerman = false, isDutch = false, isFrench = false }: { isItalian: boolean; isGerman?: boolean; isDutch?: boolean; isFrench?: boolean }) {
  const [current, setCurrent] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const total = CAROUSEL_SLIDES.length;

  const next = useCallback(() => setCurrent((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    setIsDesktop(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isDesktop]);

  const slide = CAROUSEL_SLIDES[current];

  return (
    <>
      <div className="bar">
        <i /><i /><i /><b>{isItalian ? slide.label_it : isGerman ? slide.label_de : isDutch ? slide.label_nl : isFrench ? slide.label_fr : slide.label_en}</b>
      </div>
      {isDesktop ? (
        <AnimatePresence mode="wait">
          <motion.div key={current} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.src}
              alt={isItalian ? slide.alt_it : isGerman ? slide.alt_de : isDutch ? slide.alt_nl : isFrench ? slide.alt_fr : slide.alt_en}
              loading={current === 0 ? 'eager' : 'lazy'}
              fetchPriority={current === 0 ? 'high' : 'auto'}
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={CAROUSEL_SLIDES[0].src}
          alt={isItalian ? CAROUSEL_SLIDES[0].alt_it : isGerman ? CAROUSEL_SLIDES[0].alt_de : isDutch ? CAROUSEL_SLIDES[0].alt_nl : isFrench ? CAROUSEL_SLIDES[0].alt_fr : CAROUSEL_SLIDES[0].alt_en}
          loading="eager"
          fetchPriority="high"
        />
      )}
      <button type="button" onClick={prev} className="l-shot-nav l-shot-prev" aria-label={isItalian ? 'Precedente' : isGerman ? 'Zurück' : isDutch ? 'Vorige' : isFrench ? 'Précédent' : 'Previous'}>
        <ArrowRight size={18} style={{ transform: 'rotate(180deg)' }} />
      </button>
      <button type="button" onClick={next} className="l-shot-nav l-shot-next" aria-label={isItalian ? 'Successiva' : isGerman ? 'Weiter' : isDutch ? 'Volgende' : isFrench ? 'Suivant' : 'Next'}>
        <ArrowRight size={18} />
      </button>
      <div className="l-shot-dots">
        {CAROUSEL_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={i === current ? 'on' : ''}
            aria-label={`${isItalian ? 'Schermata' : isGerman ? 'Ansicht' : isDutch ? 'Weergave' : isFrench ? 'Vue' : 'Slide'} ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}

// --- GPS PRIVACY COMPLIANCE (locale-aware, contenuto reale invariato) ---
const GPS_PRIVACY_CONTENT: Record<string, {
  title: string;
  p1: string;
  p2: string;
  legal: string;
  tags: string[];
}> = {
  it: {
    title: 'L\'informativa GPS, per ogni dipendente',
    p1: 'Quando inviti un nuovo dipendente, Flow prepara l\'informativa sulla geolocalizzazione con i dati della tua azienda e gliela manda. Il lavoratore compila i suoi dati, legge il documento e lo firma per presa visione, tutto dal telefono, senza carta. Finché non l\'ha firmata, l\'app non lo lascia timbrare.',
    p2: 'Il documento firmato resta archiviato, e in Flow vedi chi ha firmato e chi no. Niente più fogli volanti: ogni firma è registrata con data e ora. La firma prova che l\'informativa è stata consegnata; non è un consenso, e non serve che lo sia.',
    legal: 'In Italia l\'art. 4 dello Statuto dei Lavoratori chiede, oltre all\'informativa, l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro prima di usare strumenti che possono controllare a distanza: quel passaggio resta al datore di lavoro. GeoTapp è costruito per starci dentro: posizione solo quando si timbra, mai in continuo.',
    tags: ['Art. 4 Statuto dei Lavoratori', 'Art. 13 GDPR', 'Firma per presa visione', 'Documento archiviato', 'Niente timbratura prima della firma', 'Zero carta'],
  },
  en: {
    title: 'The GPS notice, for every employee',
    p1: 'When you invite a new employee, Flow prepares the geolocation notice with your company\'s details and sends it to them. The worker fills in their details, reads the document and signs it as acknowledged, all from the phone, no paper. Until it is signed, the app does not let them clock in.',
    p2: 'The signed document stays archived, and in Flow you see who has signed and who has not. No more loose papers: every signature is logged with date and time. The signature proves the notice was delivered; it is not consent, and it does not need to be.',
    legal: 'In Italy, art. 4 of the Workers\' Statute requires, besides the notice, a union agreement or authorisation from the Labour Inspectorate before using tools that can monitor remotely: that step remains the employer\'s. GeoTapp is built to stay within it: location only when someone clocks in, never continuously.',
    tags: ['Art. 4 Workers\' Statute', 'GDPR Art. 13', 'Signed as acknowledged', 'Archived document', 'No clock-in before signing', 'Zero paper'],
  },
  de: {
    title: 'Die GPS-Information für jeden Mitarbeitenden',
    p1: 'Wenn Sie eine neue Mitarbeiterin oder einen neuen Mitarbeiter einladen, bereitet Flow die Information zur Standorterfassung mit den Daten Ihres Unternehmens vor und schickt sie zu. Die Person trägt ihre Daten ein, liest das Dokument und bestätigt es als zur Kenntnis genommen, alles vom Telefon aus, ohne Papier. Solange die Bestätigung fehlt, lässt die App das Stempeln nicht zu.',
    p2: 'Das bestätigte Dokument bleibt archiviert, und in Flow sehen Sie, wer bestätigt hat und wer nicht. Keine losen Zettel mehr: Jede Bestätigung wird mit Datum und Uhrzeit protokolliert. Die Bestätigung belegt, dass die Information ausgehändigt wurde; sie ist keine Einwilligung und muss es auch nicht sein.',
    legal: 'In Deutschland hat der Betriebsrat bei technischen Einrichtungen, die zur Überwachung von Verhalten oder Leistung geeignet sind, ein Mitbestimmungsrecht (BetrVG § 87 Abs. 1 Nr. 6): Dieser Schritt bleibt Sache des Arbeitgebers. GeoTapp ist so gebaut, dass es innerhalb der Grenzen bleibt: Standort nur beim Stempeln, nie fortlaufend.',
    tags: ['DSGVO Art. 13', 'Betriebsrat (BetrVG § 87)', 'Als zur Kenntnis genommen bestätigt', 'Dokument archiviert', 'Kein Stempeln vor der Bestätigung', 'Kein Papier'],
  },
  fr: {
    title: 'L\'information GPS, pour chaque salarié',
    p1: 'Quand vous invitez un nouveau salarié, Flow prépare l\'information sur la géolocalisation avec les données de votre entreprise et la lui envoie. Le salarié renseigne ses données, lit le document et le signe pour prise de connaissance, le tout depuis son téléphone, sans papier. Tant qu\'il ne l\'a pas signée, l\'application ne le laisse pas pointer.',
    p2: 'Le document signé reste archivé, et dans Flow vous voyez qui a signé et qui ne l\'a pas fait. Fini les feuilles volantes : chaque signature est enregistrée avec la date et l\'heure. La signature prouve que l\'information a été remise ; ce n\'est pas un consentement, et il n\'est pas nécessaire qu\'elle en soit un.',
    legal: 'En France, le comité social et économique doit être informé et consulté avant la mise en place de moyens permettant de contrôler l\'activité des salariés (Code du travail, art. L. 2312-38) : cette étape reste à la charge de l\'employeur. GeoTapp est conçu pour rester dans ce cadre : position uniquement au pointage, jamais en continu.',
    tags: ['RGPD art. 13', 'CSE (Code du travail)', 'Signature pour prise de connaissance', 'Document archivé', 'Pas de pointage avant la signature', 'Zéro papier'],
  },
  nl: {
    title: 'De GPS-privacyverklaring, voor elke medewerker',
    p1: 'Wanneer u een nieuwe medewerker uitnodigt, maakt Flow de privacyverklaring over de geolocatie klaar met de gegevens van uw bedrijf en stuurt die naar hem. De medewerker vult zijn gegevens in, leest het document en ondertekent het voor kennisgeving, alles vanaf de telefoon, zonder papier. Zolang hij niet heeft ondertekend, laat de app hem niet registreren.',
    p2: 'Het ondertekende document blijft gearchiveerd, en in Flow ziet u wie heeft ondertekend en wie niet. Geen losse papieren meer: elke handtekening wordt vastgelegd met datum en tijd. De handtekening bewijst dat de verklaring is overhandigd; het is geen toestemming, en dat hoeft ook niet.',
    legal: 'In Italië vraagt artikel 4 van het arbeidsstatuut, naast de privacyverklaring, een akkoord met de vakbond of een vergunning van de arbeidsinspectie voordat instrumenten worden gebruikt die controle op afstand mogelijk maken: die stap blijft bij de werkgever. GeoTapp is gebouwd om daarbinnen te blijven: locatie alleen bij het registreren, nooit doorlopend.',
    tags: ['Art. 4 Italiaans arbeidsstatuut', 'Art. 13 AVG', 'Handtekening voor kennisgeving', 'Gearchiveerd document', 'Niet registreren vóór de handtekening', 'Geen papier'],
  },
  es: {
    title: 'Autorización GPS automática para cada empleado',
    p1: 'Cuando invitas a un nuevo empleado, Flow genera automáticamente el aviso de privacidad GPS conforme al RGPD y lo envía para firma digital. El trabajador completa sus datos, lee el documento y firma con un clic, todo online, sin papel.',
    p2: 'El PDF firmado se archiva automáticamente y puedes ver en tiempo real quién ha firmado y quién no. Sin papeles sueltos, sin riesgo de sanciones: cada consentimiento queda registrado con fecha, hora y firma digital.',
    legal: 'Conforme al RGPD y a la LOPDGDD (Ley Orgánica 3/2018). Flow contempla la obligación de informar al comité de empresa según el Estatuto de los Trabajadores (art. 64.5).',
    tags: ['RGPD conforme', 'LOPDGDD', 'Comité de empresa', 'Firma digital', 'PDF archivado', 'Cero papel'],
  },
  pt: {
    title: 'Autorização GPS automática para cada colaborador',
    p1: 'Quando convida um novo colaborador, o Flow gera automaticamente o aviso de privacidade GPS conforme ao RGPD e envia-o para assinatura digital. O colaborador preenche os seus dados, lê o documento e assina com um clique, tudo online, sem papel.',
    p2: 'O PDF assinado é arquivado automaticamente e você vê em tempo real quem assinou e quem não assinou. Sem papéis soltos, sem risco de sanções: cada consentimento fica registado com data, hora e assinatura digital.',
    legal: 'Conforme ao RGPD e às orientações da CNPD (Comissão Nacional de Proteção de Dados). O Código do Trabalho (art. 20.º) exige proporcionalidade e informação prévia ao trabalhador.',
    tags: ['RGPD conforme', 'CNPD', 'Código do Trabalho', 'Assinatura digital', 'PDF arquivado', 'Zero papel'],
  },
  da: {
    title: 'Automatisk GPS-samtykkeerklaring for hver medarbejder',
    p1: 'Når du inviterer en ny medarbejder, genererer Flow automatisk en GDPR-kompatibel GPS-privatlivserklæring og sender den til digital underskrift. Medarbejderen udfylder sine data, læser dokumentet og underskriver med ét klik, alt online, uden papir.',
    p2: 'Den underskrevne PDF arkiveres automatisk, og du kan i realtid se, hvem der har underskrevet, og hvem der ikke har. Ingen løse papirer, ingen risiko for bøder: hvert samtykke logges med dato, tid og digital underskrift.',
    legal: 'I overensstemmelse med GDPR og Datatilsynets retningslinjer for overvågning af medarbejdere i Danmark. Kun GPS ved stempling, ingen kontinuerlig sporing.',
    tags: ['GDPR-kompatibel', 'Datatilsynet', 'Digital underskrift', 'PDF arkiveret', 'Intet papir'],
  },
  sv: {
    title: 'Automatiskt GPS-sekretessmedgivande för varje anställd',
    p1: 'När du bjuder in en ny anställd genererar Flow automatiskt ett GDPR-kompatibelt GPS-sekretessmeddelande och skickar det för digital signatur. Den anställde fyller i sina uppgifter, läser dokumentet och signerar med ett klick, allt online, utan papper.',
    p2: 'Den signerade PDF:en arkiveras automatiskt och du ser i realtid vem som har signerat och vem som inte har det. Inga lösa papper, ingen risk för böter: varje samtycke loggas med datum, tid och digital signatur.',
    legal: 'I enlighet med GDPR och IMY:s (Integritetsskyddsmyndigheten) riktlinjer. MBL (lagen om medbestämmande) kräver förhandling med fackföreningen innan GPS-övervakning införs.',
    tags: ['GDPR-kompatibel', 'IMY', 'MBL (medbestämmande)', 'Digital signatur', 'PDF arkiverad', 'Inget papper'],
  },
  nb: {
    title: 'Automatisk GPS-personvernerklaring for hver ansatt',
    p1: 'Når du inviterer en ny ansatt, genererer Flow automatisk et GDPR-kompatibelt GPS-personvernvarsel og sender det til digital signatur. Den ansatte fyller inn sine data, leser dokumentet og signerer med ett klikk, alt online, uten papir.',
    p2: 'Den signerte PDF-en arkiveres automatisk, og du ser i sanntid hvem som har signert og hvem som ikke har det. Ingen løse papirer, ingen risiko for bøter: hvert samtykke logges med dato, tid og digital signatur.',
    legal: 'I samsvar med GDPR og Datatilsynets retningslinjer for overvåking av ansatte. Arbeidsmiljøloven (§ 9-1) krever at kontrolltiltak er forholdsmessige og at ansatte informeres på forhånd.',
    tags: ['GDPR-kompatibel', 'Datatilsynet', 'Arbeidsmiljøloven', 'Digital signatur', 'PDF arkivert', 'Ikke papir'],
  },
  ru: {
    title: 'Автоматическое согласие на GPS-мониторинг для каждого сотрудника',
    p1: 'При приглашении нового сотрудника Flow автоматически создаёт уведомление о конфиденциальности GPS и отправляет его на цифровую подпись. Сотрудник заполняет свои данные, читает документ и подписывает в один клик — всё онлайн, без бумаги.',
    p2: 'Подписанный PDF архивируется автоматически, и вы видите в реальном времени, кто подписал, а кто нет. Никаких разрозненных бумаг, никакого риска штрафов: каждое согласие зафиксировано с датой, временем и цифровой подписью.',
    legal: 'Соответствует ФЗ-152 «О персональных данных» и Трудовому кодексу РФ. Работодатель обязан получить письменное согласие работника и уведомить Роскомнадзор.',
    tags: ['ФЗ-152', 'Трудовой кодекс РФ', 'Роскомнадзор', 'Цифровая подпись', 'PDF архив', 'Без бумаги'],
  },
};

export default function GeoTappApp() {
  const [selectedSystem, setSelectedSystem] = useState<SystemDetail | null>(null);
  // punto di partenza dello zoom del popup: il centro del blocco cliccato
  const [modalOrigin, setModalOrigin] = useState<{ x: number; y: number } | null>(null);
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
  const dict = getDictionary(currentLocale);
  const isItalian = currentLocale === 'it';
  const flowDict = dict.product_pages.flow;

  const splitHeroTitle = (title: string) => {
    const parts = title.split(/<br\s*\/?>/i);
    return { main: parts[0] || '', rest: parts.slice(1).join('<br />').trim() };
  };
  const { main: heroTitleMain, rest: heroTitleRest } = splitHeroTitle(flowDict.hero_title);
  const heroTitlePlain = heroTitleMain.replace(/<[^>]*>/g, '').trim();

  const systems = GEOTAPP_SYSTEMS.map((sys) => {
    // @ts-ignore
    const t = flowDict.systems[sys.id];
    return {
      ...sys,
      systemName: t?.name || sys.systemName,
      shortDescription: t?.short || sys.shortDescription,
      fullDescription: t?.full || sys.fullDescription,
    };
  });
  const getSystem = (id: string) => systems.find((s) => s.id === id)!;
  const getLink = (path: string) => localizePath(path, currentLocale);

  const fc = localizeEnglishDeep(FLOW_COPY[currentLocale] ?? FLOW_COPY[currentLocale.split('-')[0]] ?? FLOW_COPY.en, currentLocale);
  const CARD_ICONS = [Database, Camera, FileArchive, CreditCard];
  const capabilityCards = fc.cards.map((card, i) => ({ icon: CARD_ICONS[i], ...card }));
  const flowTrackerBlocks = fc.blocks;
  const c = localizeEnglishDeep(GPS_PRIVACY_CONTENT[currentLocale] ?? GPS_PRIVACY_CONTENT['en']!, currentLocale);
  const vg = dict.videoGiro;
  const complianceKicker = fc.complianceKicker;
  const complianceTagline = fc.complianceTagline;
  const complianceFootnote = fc.complianceFootnote;

  const sectorGroups: Array<{ key: '1' | '2' | '3'; systems: SystemDetail[] }> = [
    { key: '1', systems: [getSystem('nexus-core'), getSystem('titan-flow'), getSystem('ledger-prime')] },
    { key: '2', systems: [getSystem('quantum-logistics'), getSystem('supply-command'), getSystem('the-architect')] },
    { key: '3', systems: [getSystem('the-auditor'), getSystem('the-uplink'), getSystem('the-oracle')] },
  ];

  const trialLabel = fc.trial;

  return (
    <div className="lp-l lp-prodotto-flow">
      {/* SYSTEM DETAIL MODAL, invariato: il dossier resta lo stesso, cambia solo
          la vetrina delle card che lo aprono. */}
      <AnimatePresence>
        {selectedSystem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSystem(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.22,
                x: modalOrigin && typeof window !== 'undefined' ? modalOrigin.x - window.innerWidth / 2 : 0,
                y: modalOrigin && typeof window !== 'undefined' ? modalOrigin.y - window.innerHeight / 2 : 20,
              }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, x: modalOrigin && typeof window !== 'undefined' ? modalOrigin.x - window.innerWidth / 2 : 0, y: modalOrigin && typeof window !== 'undefined' ? modalOrigin.y - window.innerHeight / 2 : 20 }}
              transition={{ type: 'spring', duration: 0.45, bounce: 0.16 }}
              className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
            >
              <div className="bg-slate-50 p-10 md:w-1/3 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col justify-between shrink-0 relative overflow-hidden">
                <div>
                  <div className="p-5 bg-white rounded-2xl shadow-xl inline-block mb-8 border border-slate-100 text-blue-600">
                    <selectedSystem.icon size={56} />
                  </div>
                  <div className="font-mono text-xs text-slate-400 mb-2 tracking-widest">{selectedSystem.codeName}</div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6 leading-tight">{selectedSystem.systemName}</h3>
                  <div className="w-20 h-1 bg-blue-500 rounded-full mb-8"></div>
                </div>
                <div className="font-mono text-xs text-slate-500 space-y-2 border-t border-slate-200 pt-6">
                  <p dangerouslySetInnerHTML={{ __html: flowDict.modal.status }}></p>
                  <p dangerouslySetInnerHTML={{ __html: flowDict.modal.encryption }}></p>
                  <p dangerouslySetInnerHTML={{ __html: flowDict.modal.access }}></p>
                </div>
              </div>
              <div className="p-10 md:p-14 md:w-2/3 prose prose-slate max-w-none relative">
                <button onClick={() => setSelectedSystem(null)} className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-10 text-slate-500">
                  <X size={24} />
                </button>
                <div
                  className="markdown-content text-lg leading-relaxed text-slate-700 font-medium"
                  dangerouslySetInnerHTML={{ __html: selectedSystem.fullDescription.replace(/\n/g, '<br/>') }}
                />
                <div className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center">
                  <span className="font-mono text-xs text-slate-400">
                    SESSION ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </span>
                  <button onClick={() => setSelectedSystem(null)} className="px-8 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg">
                    {flowDict.modal.close}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* TESTATA */}
      <section className="ph">
        <div className="crumb"><div className="w"><Link href={getLink('/')}>Home</Link> / {dict.navbar.products} / GeoTapp Flow.</div></div>
        <div className="w">
          <p className="kk k"><s />{flowDict.hero_badge}</p>
          <h1>
            {heroTitlePlain || 'GeoTapp Flow'}
            {heroTitleRest && (
              <>
                <br />
                <em dangerouslySetInnerHTML={{ __html: heroTitleRest }} />
              </>
            )}
          </h1>
          <p className="lede">{flowDict.hero_subtitle}</p>
          <div className="acts">
            <Link className="b1" href={getLink('/trial')} onClick={() => trackEvent('trial_click', { cta_source: 'product_flow', cta_locale: currentLocale })}>
              {trialLabel}
            </Link>
            <Link className="b2" href={getLink('/pricing')}>{flowDict.cta_button}</Link>
          </div>
        </div>
      </section>

      {/* SCHERMATA VERA */}
      <section className="shot"><div className="wn"><div className="frame r-s">
        <div className="browser"><ScreenCarousel isItalian={isItalian} isGerman={currentLocale === 'de'} isDutch={currentLocale === 'nl'} isFrench={currentLocale === 'fr'} /></div>
      </div></div></section>

      {/* IL GIRO COMPLETO — entra dall'atto in cui la prova arriva in ufficio da
          sola, che e' la cosa che riguarda Flow. Muto, parte da solo. */}
      <section className="sec"><div className="wn">
        <p className="kk k">{vg.kicker}</p>
        <h2 className="r" style={{ fontSize: 'clamp(24px,2.6vw,38px)', margin: '10px 0 24px' }}>{vg.title}</h2>
        <VideoGiro locale={currentLocale} inizio={GIRO_INIZIO_FLOW} />
        <p style={{ marginTop: 16 }}>
          <Link className="b2" href={getLink('/video')}>{vg.pageLink}</Link>
        </p>
      </div></section>

      {/* STATO PIATTAFORMA */}
      <section className="sec l-note" style={{ paddingBottom: 0 }}>
        <div className="wn">
          <p className="kk k" style={{ color: 'var(--seal-testo)', justifyContent: 'center' }}>{fc.statusLabel}</p>
          <p>{fc.releaseNote}</p>
        </div>
      </section>

      {/* COSA FA DAVVERO FLOW: griglia funzionalita' */}
      <section className="sec"><div className="w">
        <div className="hd">
          <h2 className="r">{fc.doesTitle}</h2>
          <p className="r d1">{fc.doesSub}</p>
        </div>
      </div>
        <div className="mods" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
          {capabilityCards.map((card, i) => (
            <article key={card.title} className={`r d${i + 1}`}>
              <span className="nn">{String(i + 1).padStart(2, '0')}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* COMPLIANCE GPS AUTOMATICA */}
      <section className="sec warm"><div className="w">
        <p className="kk k r" style={{ color: 'var(--seal-testo)' }}>{complianceKicker}</p>
        <h2 className="r" style={{ maxWidth: '20ch' }}>{c.title}</h2>
        <p className="l-tagline r d1">{complianceTagline}</p>
        <div className="split" style={{ marginTop: 46, alignItems: 'start' }}>
          <div className="r d1">
            <p>{c.p1}</p>
            <p style={{ marginTop: 18 }}>{c.p2}</p>
            {/* esempio reale del documento generato (dati demo) */}
            <div className="sheet tall" style={{ width: 300, marginTop: 30 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/informativa-esempio.webp" alt={c.title} loading="lazy" style={{ maxHeight: 420, objectFit: 'cover', objectPosition: 'top' }} />
            </div>
          </div>
          <div className="r-s d2 l-legal-box">
            <p className="kk k" style={{ color: 'var(--sky)' }}>{fc.legalKicker}</p>
            <p style={{ marginTop: 14 }}>{c.legal}</p>
            <ul className="rows" style={{ marginTop: 24 }}>
              {c.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </div>
        </div>
        <p className="l-foot-note">{complianceFootnote}</p>
      </div></section>

      {/* FLOW + TIMETRACKER */}
      <section className="sec"><div className="w">
        <div className="mods" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
          {flowTrackerBlocks.map((block, i) => (
            <article key={block.title} className={`r d${i + 1}`}>
              <span className="nn">{String(i + 1).padStart(2, '0')}</span>
              <h3>{block.title}</h3>
              <p>{block.description}</p>
            </article>
          ))}
        </div>
      </div></section>

      {/* LA PROVA: il report, contenuto vero del dizionario landing */}
      <section className="sec ink"><div className="w"><div className="split">
        <div className="r">
          <p className="kk k">{LA_PROVA[currentLocale] ?? LA_PROVA.en}</p>
          <h2>{dict.landing.report_section_title}</h2>
          <p style={{ color: 'rgba(247,249,252,.72)', marginTop: 20, maxWidth: '48ch' }}>{dict.landing.report_section_body}</p>
          <ul className="rows" style={{ marginTop: 30 }}>
            <li>{dict.landing.report_feature_1}</li>
            <li>{dict.landing.report_feature_2}</li>
            <li>{dict.landing.report_feature_3}</li>
            <li>{dict.landing.report_feature_4}</li>
          </ul>
        </div>
        <div className="r-s d1" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="sheet">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/verifier-report.webp" alt={currentLocale === 'it' ? 'Report sigillato GeoTapp' : currentLocale === 'de' ? 'Versiegelter GeoTapp-Bericht' : currentLocale === 'fr' ? 'Rapport scellé GeoTapp' : currentLocale === 'nl' ? 'Verzegeld GeoTapp-rapport' : 'GeoTapp sealed report'} loading="lazy" />
          </div>
        </div>
      </div></div></section>

      <LNastro />

      {/* ── citati su: solo stampa vera. "Presente su" (directory) resta nel footer, non si ripete qui ── */}
      <section className="dirs">
        <div className="w"><p className="kk k r dirs-kk">{featuredLabel(currentLocale)}</p></div>
        <div className="host">
          <FeaturedIn locale={currentLocale} />
        </div>
      </section>

      {/* GRIGLIA SISTEMI: 9 moduli, 3 settori, stesso dossier al click */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="w">
          <div className="hd">
            <h2 className="r">{flowDict.grid_title}</h2>
            <p className="r d1">{flowDict.grid_subtitle}</p>
          </div>
        </div>
        {sectorGroups.map(({ key, systems: group }, gi) => (
          <div key={key}>
            <div className="w" style={{ marginTop: gi === 0 ? 0 : 46, marginBottom: 14 }}>
              <p className="kk k" style={{ color: 'var(--seal-testo)' }}>{flowDict.sectors[key]}</p>
            </div>
            <div className="mods">
              {group.map((sys, i) => (
                <article
                  key={sys.id}
                  className={`l-mod-click r d${i + 1}`}
                  onClick={(e) => {
                    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
                    setModalOrigin({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
                    setSelectedSystem(sys);
                  }}
                >
                  <span className="nn">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{sys.systemName}</h3>
                  <p>{sys.shortDescription}</p>
                  <span className="k" style={{ display: 'inline-block', marginTop: 12, fontSize: 11, color: '#15803D' }}>
                    {(flowDict as { label_open?: string }).label_open ?? 'Learn more'} &rarr;
                  </span>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CHIUSURA */}
      <section className="end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/bg2.webp" alt="" aria-hidden="true" loading="lazy" />
        <div className="ov" />
        <div className="w">
          <h2 className="r">{flowDict.cta_title}</h2>
          <div className="acts r d2">
            <Link className="b1" href={getLink('/trial')} onClick={() => trackEvent('trial_click', { cta_source: 'product_flow_end', cta_locale: currentLocale })}>
              <Zap size={20} style={{ display: 'inline', verticalAlign: '-4px', marginRight: 8 }} />{trialLabel}
            </Link>
            <Link className="b2" href={getLink('/pricing')}>
              <Globe size={18} style={{ display: 'inline', verticalAlign: '-3px', marginRight: 6 }} />{flowDict.cta_button}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Product flow page note: preserve dictionary merge and modal lookup contract (1/1)
