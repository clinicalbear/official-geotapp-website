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

const FeaturedIn = dynamic(() => import('@/components/FeaturedIn'), { ssr: true });
import { featuredLabel } from '@/lib/press/labels';

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
  },
  {
    src: '/screen_live_map.webp',
    alt_it: 'GeoTapp Flow - Mappa GPS live con timbrature geolocalizzate',
    alt_en: 'GeoTapp Flow - Live GPS map with geolocated clock-ins',
    label_it: 'Mappa GPS live - Geolocalizzazione in tempo reale',
    label_en: 'Live GPS Map - Real-time Geolocation',
  },
  {
    src: '/schermataFlow.webp',
    alt_it: 'GeoTapp Flow - Pannello operativo',
    alt_en: 'GeoTapp Flow - Operational dashboard',
    label_it: 'Dashboard operativa',
    label_en: 'Operational Dashboard',
  },
];

// Screenshot vero dentro la cornice .browser: stessa carosella di sempre
// (3 schermate, autoplay solo desktop), solo vestita di nuovo.
function ScreenCarousel({ isItalian }: { isItalian: boolean }) {
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
        <i /><i /><i /><b>{isItalian ? slide.label_it : slide.label_en}</b>
      </div>
      {isDesktop ? (
        <AnimatePresence mode="wait">
          <motion.div key={current} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.src}
              alt={isItalian ? slide.alt_it : slide.alt_en}
              loading={current === 0 ? 'eager' : 'lazy'}
              fetchPriority={current === 0 ? 'high' : 'auto'}
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={CAROUSEL_SLIDES[0].src}
          alt={isItalian ? CAROUSEL_SLIDES[0].alt_it : CAROUSEL_SLIDES[0].alt_en}
          loading="eager"
          fetchPriority="high"
        />
      )}
      <button type="button" onClick={prev} className="l-shot-nav l-shot-prev" aria-label="Previous">
        <ArrowRight size={18} style={{ transform: 'rotate(180deg)' }} />
      </button>
      <button type="button" onClick={next} className="l-shot-nav l-shot-next" aria-label="Next">
        <ArrowRight size={18} />
      </button>
      <div className="l-shot-dots">
        {CAROUSEL_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={i === current ? 'on' : ''}
            aria-label={`Slide ${i + 1}`}
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
    title: 'Liberatoria GPS automatica per ogni dipendente',
    p1: 'Quando inviti un nuovo dipendente, Flow genera automaticamente l\'informativa privacy GPS conforme al GDPR e gliela invia per la firma digitale. Il lavoratore compila i propri dati, legge il documento e firma con un click, tutto via web, senza carta.',
    p2: 'Il PDF firmato viene archiviato automaticamente e tu vedi in tempo reale chi ha firmato e chi no. Niente più fogli volanti, niente rischio di sanzioni: ogni consenso è tracciato con data, ora e firma digitale.',
    legal: 'Conforme all\'Art. 4 dello Statuto dei Lavoratori e alle linee guida del Garante Privacy. Flow genera anche il modello per l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro (ITL), obbligatori prima di attivare la geolocalizzazione.',
    tags: ['Art. 4 Statuto Lavoratori', 'GDPR art. 13', 'Accordo sindacale / ITL', 'Firma digitale tracciata', 'PDF archiviato', 'Zero carta'],
  },
  en: {
    title: 'Automatic GPS privacy consent for every employee',
    p1: 'When you invite a new employee, Flow automatically generates a GDPR-compliant GPS privacy notice and sends it for digital signature. The worker fills in their details, reads the document and signs with one click, all via web, no paper.',
    p2: 'The signed PDF is archived automatically and you can see in real time who has signed and who hasn\'t. No more loose papers, no risk of fines: every consent is logged with date, time and digital signature.',
    legal: 'Compliant with EU GDPR Art. 13 and Art. 6. The notice covers legal basis, data minimization (GPS only at clock-in/out, no continuous tracking), retention periods and data subject rights.',
    tags: ['GDPR Art. 13 compliant', 'Digital signature tracked', 'Archived PDF', 'No continuous tracking', 'Zero paper'],
  },
  de: {
    title: 'Automatische GPS-Datenschutzerklärung für jeden Mitarbeiter',
    p1: 'Wenn Sie einen neuen Mitarbeiter einladen, erstellt Flow automatisch einen DSGVO-konformen GPS-Datenschutzhinweis und sendet ihn zur digitalen Unterschrift. Der Mitarbeiter trägt seine Daten ein, liest das Dokument und unterschreibt mit einem Klick, alles online, ohne Papier.',
    p2: 'Das unterschriebene PDF wird automatisch archiviert und Sie sehen in Echtzeit, wer unterschrieben hat und wer nicht. Keine losen Zettel, kein Bußgeldrisiko: jede Zustimmung ist mit Datum, Uhrzeit und digitaler Unterschrift protokolliert.',
    legal: 'Konform mit DSGVO und BDSG (Bundesdatenschutzgesetz). Flow berücksichtigt die Mitbestimmungsrechte des Betriebsrats gemäß BetrVG § 87 Abs. 1 Nr. 6 bei der Einführung technischer Überwachungseinrichtungen.',
    tags: ['DSGVO-konform', 'BDSG', 'Betriebsrat (BetrVG § 87)', 'Digitale Unterschrift', 'PDF archiviert', 'Kein Papier'],
  },
  fr: {
    title: 'Autorisation GPS automatique pour chaque salarié',
    p1: 'Lorsque vous invitez un nouveau salarié, Flow génère automatiquement l\'avis de confidentialité GPS conforme au RGPD et l\'envoie pour signature numérique. Le salarié remplit ses données, lit le document et signe en un clic, tout en ligne, sans papier.',
    p2: 'Le PDF signé est archivé automatiquement et vous voyez en temps réel qui a signé et qui ne l\'a pas fait. Plus de feuilles volantes, plus de risque de sanctions : chaque consentement est tracé avec date, heure et signature numérique.',
    legal: 'Conforme au RGPD et aux recommandations de la CNIL sur la géolocalisation des salariés. Le dispositif respecte le Code du travail (art. L.1121-1) et le principe de proportionnalité : pas de suivi continu, uniquement au pointage.',
    tags: ['RGPD conforme', 'CNIL', 'Code du travail', 'Signature numérique', 'PDF archivé', 'Zéro papier'],
  },
  nl: {
    title: 'Automatische GPS-privacyverklaring voor elke medewerker',
    p1: 'Wanneer u een nieuwe medewerker uitnodigt, genereert Flow automatisch een AVG-conforme GPS-privacyverklaring en stuurt deze ter digitale ondertekening. De medewerker vult zijn gegevens in, leest het document en ondertekent met één klik, alles online, zonder papier.',
    p2: 'De ondertekende PDF wordt automatisch gearchiveerd en u ziet in realtime wie heeft getekend en wie niet. Geen losse papieren, geen risico op boetes: elke toestemming is vastgelegd met datum, tijd en digitale handtekening.',
    legal: 'Conform de AVG en de richtlijnen van de Autoriteit Persoonsgegevens (AP). Een DPIA (Data Protection Impact Assessment) is standaard inbegrepen bij GPS-verwerking van werknemers.',
    tags: ['AVG-conform', 'Autoriteit Persoonsgegevens', 'DPIA inbegrepen', 'Digitale handtekening', 'PDF gearchiveerd', 'Geen papier'],
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

  const releaseNote = isItalian
    ? 'Le app native Android e iOS sono in fase di rilascio sugli store e restano collegate ai dati operativi live di TimeTracker.'
    : 'Native Android and iOS apps are being released on the stores and stay connected to live operational data from TimeTracker.';

  const capabilityCards = isItalian
    ? [
        { icon: Database, title: 'Centro operativo e gestionale', description: 'Flow da all’ufficio un unico ambiente per clienti, commesse, calendario, documenti, permessi, amministrazione e coordinamento operativo.' },
        { icon: Camera, title: 'Prove difendibili verso il cliente', description: 'Foto, note, timbrature e prove raccolte sul campo restano legate alla commessa, così l’ufficio risponde con fatti e non con supposizioni.' },
        { icon: FileArchive, title: 'Timeline commessa, export ZIP e storico verificabile', description: 'Per ogni commessa puoi produrre uno storico con timeline, mappe, timbrature e prove fotografiche che riduce discussioni interne e contestazioni esterne.' },
        { icon: CreditCard, title: 'Fatturazione più rapida, con meno attriti interni', description: 'Preventivi, fatture e integrazioni come Fatture in Cloud lavorano su dati reali di commessa, per una consuntivazione più rapida e difendibile.' },
      ]
    : [
        { icon: Database, title: 'Management and operational hub', description: 'Flow gives office teams one control layer for clients, projects, shifts, documents, permissions, administration and operational follow-up.' },
        { icon: Camera, title: 'Defensible proof for clients', description: 'Photos, notes, timestamps, clock-ins and field evidence stay attached to each project so the office can answer clients with facts, not assumptions.' },
        { icon: FileArchive, title: 'Project timeline, ZIP export and audit trail', description: 'Generate a complete history with timeline, maps, photo proofs and session data to reduce internal disputes and support audits or customer claims.' },
        { icon: CreditCard, title: 'Faster billing with fewer internal disputes', description: 'Quotes, invoices and optional Fatture in Cloud sync work on what was actually done on the field, so billing is faster and easier to defend.' },
      ];

  const flowTrackerBlocks = isItalian
    ? [
        { title: 'Pensato per ufficio, amministrazione e coordinamento', description: 'Flow serve a titolari, amministrazione e responsabili che vogliono meno discussioni interne, ruoli più chiari e controllo vero del lavoro.' },
        { title: 'Integrato a TimeTracker in tempo reale', description: 'Timbrature, operatività sul campo, prove foto e avanzamento commessa tornano in Flow in tempo reale per controllo, report e prove difendibili.' },
      ]
    : [
        { title: 'Built for office teams that need clarity', description: 'Owners, administration and coordinators use Flow when they need fewer internal disputes, clearer responsibilities and a reliable operational cockpit.' },
        { title: 'Connected to TimeTracker in real time', description: 'Clock-ins, field activity, photo proofs and project execution data return into Flow in real time for governance, reporting and customer-facing proof.' },
      ];

  const c = GPS_PRIVACY_CONTENT[currentLocale] ?? GPS_PRIVACY_CONTENT['en']!;
  const complianceKicker = isItalian ? 'Compliance automatica' : 'Automatic compliance';
  const complianceTagline = isItalian
    ? 'Timbri in regola dal primo giorno, o non timbri.*'
    : currentLocale === 'de'
      ? 'Ab Tag eins konform, oder gar nicht stempeln.*'
      : currentLocale === 'fr'
        ? 'Conforme dès le premier jour, ou pas de pointage.*'
        : 'Compliant from day one, or you don\'t clock in.*';
  const complianceFootnote = isItalian
    ? '* Per legge (GDPR Art. 13 e, in Italia, Art. 4 Statuto dei Lavoratori), ogni dipendente deve firmare un\'informativa privacy prima di essere geolocalizzato. La maggior parte dei software GPS non lo gestisce: il rischio legale resta al titolare. GeoTapp genera automaticamente l\'informativa personalizzata, la fa firmare digitalmente al dipendente e blocca l\'accesso GPS finché non è firmata. Nessun altro software sul mercato lo fa.'
    : currentLocale === 'de'
      ? '* Nach geltendem Recht (DSGVO Art. 13, in Deutschland auch BDSG und BetrVG) muss jeder Mitarbeiter vor der GPS-Ortung eine Datenschutzerklärung unterschreiben. Die meisten GPS-Systeme kümmern sich nicht darum, das rechtliche Risiko bleibt beim Arbeitgeber. GeoTapp erstellt die Erklärung automatisch, lässt sie digital unterschreiben und sperrt den GPS-Zugang, bis sie unterzeichnet ist. Kein anderes System am Markt bietet das.'
      : currentLocale === 'fr'
        ? '* La loi (RGPD Art. 13, en France aussi le Code du travail et les recommandations CNIL) exige que chaque salarié signe un avis de confidentialité avant d\'être géolocalisé. La plupart des logiciels GPS ne gèrent pas cela : le risque juridique reste à l\'employeur. GeoTapp génère automatiquement l\'avis, le fait signer numériquement et bloque l\'accès GPS tant qu\'il n\'est pas signé. Aucun autre logiciel sur le marché ne le fait.'
        : '* By law (GDPR Art. 13), every employee must sign a privacy notice before being geolocated. Most GPS software does not handle this: the legal risk stays with the employer. GeoTapp automatically generates the personalised notice, gets it digitally signed and blocks GPS access until it is signed. No other software on the market does this.';

  const sectorGroups: Array<{ key: '1' | '2' | '3'; systems: SystemDetail[] }> = [
    { key: '1', systems: [getSystem('nexus-core'), getSystem('titan-flow'), getSystem('ledger-prime')] },
    { key: '2', systems: [getSystem('quantum-logistics'), getSystem('supply-command'), getSystem('the-architect')] },
    { key: '3', systems: [getSystem('the-auditor'), getSystem('the-uplink'), getSystem('the-oracle')] },
  ];

  const trialLabel = isItalian ? 'Prova Flow gratis per 14 giorni' : 'Try Flow free for 14 days';

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
        <div className="browser"><ScreenCarousel isItalian={isItalian} /></div>
      </div></div></section>

      {/* STATO PIATTAFORMA */}
      <section className="sec l-note" style={{ paddingBottom: 0 }}>
        <div className="wn">
          <p className="kk k" style={{ color: 'var(--seal)', justifyContent: 'center' }}>{isItalian ? 'Stato piattaforma' : 'Platform Status'}</p>
          <p>{releaseNote}</p>
        </div>
      </section>

      {/* COSA FA DAVVERO FLOW: griglia funzionalita' */}
      <section className="sec"><div className="w">
        <div className="hd">
          <h2 className="r">{isItalian ? 'Cosa fa davvero GeoTapp Flow oggi' : 'What GeoTapp Flow really does today'}</h2>
          <p className="r d1">{isItalian
            ? 'Non solo dashboard gestionale: collega pianificazione, operatività, consuntivazione e prove difendibili di ciò che il team ha svolto davvero.'
            : 'More than a dashboard: it connects planning, execution, billing and defensible proof of what the team actually delivered.'}</p>
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
        <p className="kk k r" style={{ color: 'var(--seal)' }}>{complianceKicker}</p>
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
            <p className="kk k" style={{ color: 'var(--sky)' }}>{isItalian ? 'Normativa locale' : currentLocale === 'de' ? 'Lokales Recht' : currentLocale === 'fr' ? 'Législation locale' : 'Local regulation'}</p>
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
          <p style={{ color: 'rgba(242,240,233,.72)', marginTop: 20, maxWidth: '48ch' }}>{dict.landing.report_section_body}</p>
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
            <img src="/verifier-report.webp" alt="Report certificato GeoTapp" loading="lazy" />
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
              <p className="kk k" style={{ color: 'var(--seal)' }}>{flowDict.sectors[key]}</p>
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
                  <span className="nn">{String(i + 1).padStart(2, '0')} · {sys.codeName}</span>
                  <h3>{sys.systemName}</h3>
                  <p>{sys.shortDescription}</p>
                  <span className="k" style={{ display: 'inline-block', marginTop: 12, fontSize: 11, color: '#5E7C1E' }}>
                    [ {(sys as any).label_open || 'APRI DOSSIER'} ] &rarr;
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
