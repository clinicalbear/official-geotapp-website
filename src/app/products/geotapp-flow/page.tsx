'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Database,
  CreditCard,
  Box,
  Layers,
  Truck,
  Receipt,
  Zap,
  Smartphone,
  BarChart3,
  Users,
  X,
  Globe,
  Cpu,
  Camera,
  FileArchive,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
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
import GeoBadge from '@/components/GeoBadge';


// --- SYSTEM CARD COMPONENT (LIGHT THEME) ---
const SystemCard = ({
  system,
  onClick,
}: {
  system: SystemDetail & { label_open?: string };
  onClick: (s: SystemDetail) => void;
}) => {
  const Icon = system.icon;

  // Map colors to tailwind classes for Light Mode
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          text: 'text-blue-600',
          bg: 'bg-blue-50',
          letter: 'text-blue-600',
        };
      case 'yellow':
        return {
          text: 'text-yellow-600',
          bg: 'bg-yellow-50',
          letter: 'text-yellow-600',
        };
      case 'green':
        return {
          text: 'text-green-600',
          bg: 'bg-green-50',
          letter: 'text-green-600',
        };
      case 'purple':
        return {
          text: 'text-purple-600',
          bg: 'bg-purple-50',
          letter: 'text-purple-600',
        };
      case 'cyan':
        return {
          text: 'text-cyan-600',
          bg: 'bg-cyan-50',
          letter: 'text-cyan-600',
        };
      case 'red':
        return {
          text: 'text-red-600',
          bg: 'bg-red-50',
          letter: 'text-red-600',
        };
      case 'orange':
        return {
          text: 'text-orange-600',
          bg: 'bg-orange-50',
          letter: 'text-orange-600',
        };
      case 'fuchsia':
        return {
          text: 'text-fuchsia-600',
          bg: 'bg-fuchsia-50',
          letter: 'text-fuchsia-600',
        };
      case 'indigo':
        return {
          text: 'text-indigo-600',
          bg: 'bg-indigo-50',
          letter: 'text-indigo-600',
        };
      default:
        return {
          text: 'text-blue-600',
          bg: 'bg-blue-50',
          letter: 'text-blue-600',
        };
    }
  };

  const styles = getColorClasses(system.color);

  return (
    <motion.div
      onClick={() => onClick(system)}
      whileHover={{ y: -5 }}
      className="cursor-pointer p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group relative overflow-hidden"
    >
      {/* Background Letter - Flow Theme Style */}
      <div
        className={`absolute -right-4 -top-4 font-black text-9xl opacity-5 group-hover:opacity-10 transition-opacity rotate-12 group-hover:rotate-6 ${styles.letter}`}
      >
        {system.codeName.charAt(0)}
      </div>

      <div className="flex items-center gap-5 mb-6 relative z-10">
        <div
          className={`p-4 rounded-xl shadow-sm border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-colors ${styles.bg} ${styles.text}`}
        >
          <Icon size={32} />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
            {system.codeName}
          </div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {system.systemName}
          </h3>
        </div>
      </div>
      <p className="text-slate-600 leading-relaxed text-sm relative z-10 border-l-2 border-slate-200 pl-4 group-hover:border-blue-400 transition-colors">
        {system.shortDescription}
      </p>
      <div className="mt-8 flex items-center text-blue-600 font-bold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity font-mono">
        [ {system.label_open || 'APRI DOSSIER'} ]{' '}
        <ArrowRight size={14} className="ml-2" />
      </div>
    </motion.div>
  );
};

const Sectiondivider = ({ title }: { title: string }) => (
  <div className="flex items-center gap-6 py-16">
    <div className="h-px bg-slate-200 flex-grow"></div>
    <div className="flex items-center gap-3 px-6 py-2 border border-slate-200 rounded-full bg-white shadow-sm">
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
      <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] font-mono">
        {title}
      </span>
    </div>
    <div className="h-px bg-slate-200 flex-grow"></div>
  </div>
);

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
    <div className="relative mx-auto mt-16 max-w-6xl">
      <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">
        {isItalian ? slide.label_it : slide.label_en}
      </p>

      <div className="relative rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {isDesktop ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={slide.src}
                alt={isItalian ? slide.alt_it : slide.alt_en}
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, 1152px"
                className="w-full h-auto"
                priority={current === 0}
                fetchPriority={current === 0 ? 'high' : 'auto'}
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          <Image
            src={CAROUSEL_SLIDES[0].src}
            alt={isItalian ? CAROUSEL_SLIDES[0].alt_it : CAROUSEL_SLIDES[0].alt_en}
            width={1920}
            height={1080}
            sizes="100vw"
            className="w-full h-auto"
            priority
            fetchPriority="high"
          />
        )}

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg text-slate-700 transition-colors"
          aria-label="Previous"
        >
          <ArrowRight size={20} className="rotate-180" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg text-slate-700 transition-colors"
          aria-label="Next"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {CAROUSEL_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? 'bg-blue-600 w-6' : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// --- GPS PRIVACY COMPLIANCE SECTION (locale-aware) ---
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
    p2: 'Il PDF firmato viene archiviato automaticamente e tu vedi in tempo reale chi ha firmato e chi no. Niente pi\u00f9 fogli volanti, niente rischio di sanzioni: ogni consenso \u00e8 tracciato con data, ora e firma digitale.',
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
    title: 'Automatische GPS-Datenschutzerkl\u00e4rung f\u00fcr jeden Mitarbeiter',
    p1: 'Wenn Sie einen neuen Mitarbeiter einladen, erstellt Flow automatisch einen DSGVO-konformen GPS-Datenschutzhinweis und sendet ihn zur digitalen Unterschrift. Der Mitarbeiter tr\u00e4gt seine Daten ein, liest das Dokument und unterschreibt mit einem Klick, alles online, ohne Papier.',
    p2: 'Das unterschriebene PDF wird automatisch archiviert und Sie sehen in Echtzeit, wer unterschrieben hat und wer nicht. Keine losen Zettel, kein Bu\u00dfgeldrisiko: jede Zustimmung ist mit Datum, Uhrzeit und digitaler Unterschrift protokolliert.',
    legal: 'Konform mit DSGVO und BDSG (Bundesdatenschutzgesetz). Flow ber\u00fccksichtigt die Mitbestimmungsrechte des Betriebsrats gem\u00e4\u00df BetrVG \u00a7 87 Abs. 1 Nr. 6 bei der Einf\u00fchrung technischer \u00dcberwachungseinrichtungen.',
    tags: ['DSGVO-konform', 'BDSG', 'Betriebsrat (BetrVG \u00a7 87)', 'Digitale Unterschrift', 'PDF archiviert', 'Kein Papier'],
  },
  fr: {
    title: 'Autorisation GPS automatique pour chaque salari\u00e9',
    p1: 'Lorsque vous invitez un nouveau salari\u00e9, Flow g\u00e9n\u00e8re automatiquement l\'avis de confidentialit\u00e9 GPS conforme au RGPD et l\'envoie pour signature num\u00e9rique. Le salari\u00e9 remplit ses donn\u00e9es, lit le document et signe en un clic, tout en ligne, sans papier.',
    p2: 'Le PDF sign\u00e9 est archiv\u00e9 automatiquement et vous voyez en temps r\u00e9el qui a sign\u00e9 et qui ne l\'a pas fait. Plus de feuilles volantes, plus de risque de sanctions : chaque consentement est trac\u00e9 avec date, heure et signature num\u00e9rique.',
    legal: 'Conforme au RGPD et aux recommandations de la CNIL sur la g\u00e9olocalisation des salari\u00e9s. Le dispositif respecte le Code du travail (art. L.1121-1) et le principe de proportionnalit\u00e9 : pas de suivi continu, uniquement au pointage.',
    tags: ['RGPD conforme', 'CNIL', 'Code du travail', 'Signature num\u00e9rique', 'PDF archiv\u00e9', 'Z\u00e9ro papier'],
  },
  nl: {
    title: 'Automatische GPS-privacyverklaring voor elke medewerker',
    p1: 'Wanneer u een nieuwe medewerker uitnodigt, genereert Flow automatisch een AVG-conforme GPS-privacyverklaring en stuurt deze ter digitale ondertekening. De medewerker vult zijn gegevens in, leest het document en ondertekent met \u00e9\u00e9n klik, alles online, zonder papier.',
    p2: 'De ondertekende PDF wordt automatisch gearchiveerd en u ziet in realtime wie heeft getekend en wie niet. Geen losse papieren, geen risico op boetes: elke toestemming is vastgelegd met datum, tijd en digitale handtekening.',
    legal: 'Conform de AVG en de richtlijnen van de Autoriteit Persoonsgegevens (AP). Een DPIA (Data Protection Impact Assessment) is standaard inbegrepen bij GPS-verwerking van werknemers.',
    tags: ['AVG-conform', 'Autoriteit Persoonsgegevens', 'DPIA inbegrepen', 'Digitale handtekening', 'PDF gearchiveerd', 'Geen papier'],
  },
  es: {
    title: 'Autorizaci\u00f3n GPS autom\u00e1tica para cada empleado',
    p1: 'Cuando invitas a un nuevo empleado, Flow genera autom\u00e1ticamente el aviso de privacidad GPS conforme al RGPD y lo env\u00eda para firma digital. El trabajador completa sus datos, lee el documento y firma con un clic, todo online, sin papel.',
    p2: 'El PDF firmado se archiva autom\u00e1ticamente y puedes ver en tiempo real qui\u00e9n ha firmado y qui\u00e9n no. Sin papeles sueltos, sin riesgo de sanciones: cada consentimiento queda registrado con fecha, hora y firma digital.',
    legal: 'Conforme al RGPD y a la LOPDGDD (Ley Org\u00e1nica 3/2018). Flow contempla la obligaci\u00f3n de informar al comit\u00e9 de empresa seg\u00fan el Estatuto de los Trabajadores (art. 64.5).',
    tags: ['RGPD conforme', 'LOPDGDD', 'Comit\u00e9 de empresa', 'Firma digital', 'PDF archivado', 'Cero papel'],
  },
  pt: {
    title: 'Autoriza\u00e7\u00e3o GPS autom\u00e1tica para cada colaborador',
    p1: 'Quando convida um novo colaborador, o Flow gera automaticamente o aviso de privacidade GPS conforme ao RGPD e envia-o para assinatura digital. O colaborador preenche os seus dados, l\u00ea o documento e assina com um clique, tudo online, sem papel.',
    p2: 'O PDF assinado \u00e9 arquivado automaticamente e voc\u00ea v\u00ea em tempo real quem assinou e quem n\u00e3o assinou. Sem pap\u00e9is soltos, sem risco de san\u00e7\u00f5es: cada consentimento fica registado com data, hora e assinatura digital.',
    legal: 'Conforme ao RGPD e \u00e0s orienta\u00e7\u00f5es da CNPD (Comiss\u00e3o Nacional de Prote\u00e7\u00e3o de Dados). O C\u00f3digo do Trabalho (art. 20.\u00ba) exige proporcionalidade e informa\u00e7\u00e3o pr\u00e9via ao trabalhador.',
    tags: ['RGPD conforme', 'CNPD', 'C\u00f3digo do Trabalho', 'Assinatura digital', 'PDF arquivado', 'Zero papel'],
  },
  da: {
    title: 'Automatisk GPS-samtykkeerklaring for hver medarbejder',
    p1: 'N\u00e5r du inviterer en ny medarbejder, genererer Flow automatisk en GDPR-kompatibel GPS-privatlivserkl\u00e6ring og sender den til digital underskrift. Medarbejderen udfylder sine data, l\u00e6ser dokumentet og underskriver med \u00e9t klik, alt online, uden papir.',
    p2: 'Den underskrevne PDF arkiveres automatisk, og du kan i realtid se, hvem der har underskrevet, og hvem der ikke har. Ingen l\u00f8se papirer, ingen risiko for b\u00f8der: hvert samtykke logges med dato, tid og digital underskrift.',
    legal: 'I overensstemmelse med GDPR og Datatilsynets retningslinjer for overv\u00e5gning af medarbejdere i Danmark. Kun GPS ved stempling, ingen kontinuerlig sporing.',
    tags: ['GDPR-kompatibel', 'Datatilsynet', 'Digital underskrift', 'PDF arkiveret', 'Intet papir'],
  },
  sv: {
    title: 'Automatiskt GPS-sekretessmedgivande f\u00f6r varje anst\u00e4lld',
    p1: 'N\u00e4r du bjuder in en ny anst\u00e4lld genererar Flow automatiskt ett GDPR-kompatibelt GPS-sekretessmeddelande och skickar det f\u00f6r digital signatur. Den anst\u00e4llde fyller i sina uppgifter, l\u00e4ser dokumentet och signerar med ett klick, allt online, utan papper.',
    p2: 'Den signerade PDF:en arkiveras automatiskt och du ser i realtid vem som har signerat och vem som inte har det. Inga l\u00f6sa papper, ingen risk f\u00f6r b\u00f6ter: varje samtycke loggas med datum, tid och digital signatur.',
    legal: 'I enlighet med GDPR och IMY:s (Integritetsskyddsmyndigheten) riktlinjer. MBL (lagen om medbest\u00e4mmande) kr\u00e4ver f\u00f6rhandling med fackf\u00f6reningen innan GPS-\u00f6vervakning inf\u00f6rs.',
    tags: ['GDPR-kompatibel', 'IMY', 'MBL (medbest\u00e4mmande)', 'Digital signatur', 'PDF arkiverad', 'Inget papper'],
  },
  nb: {
    title: 'Automatisk GPS-personvernerklaring for hver ansatt',
    p1: 'N\u00e5r du inviterer en ny ansatt, genererer Flow automatisk et GDPR-kompatibelt GPS-personvernvarsel og sender det til digital signatur. Den ansatte fyller inn sine data, leser dokumentet og signerer med ett klikk, alt online, uten papir.',
    p2: 'Den signerte PDF-en arkiveres automatisk, og du ser i sanntid hvem som har signert og hvem som ikke har det. Ingen l\u00f8se papirer, ingen risiko for b\u00f8ter: hvert samtykke logges med dato, tid og digital signatur.',
    legal: 'I samsvar med GDPR og Datatilsynets retningslinjer for overv\u00e5king av ansatte. Arbeidsmilj\u00f8loven (\u00a7 9-1) krever at kontrolltiltak er forholdsmessige og at ansatte informeres p\u00e5 forh\u00e5nd.',
    tags: ['GDPR-kompatibel', 'Datatilsynet', 'Arbeidsmilj\u00f8loven', 'Digital signatur', 'PDF arkivert', 'Ikke papir'],
  },
  ru: {
    title: '\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 GPS-\u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430',
    p1: '\u041f\u0440\u0438 \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0438 \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430 Flow \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u043e\u0437\u0434\u0430\u0451\u0442 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435 \u043e \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 GPS \u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0435\u0433\u043e \u043d\u0430 \u0446\u0438\u0444\u0440\u043e\u0432\u0443\u044e \u043f\u043e\u0434\u043f\u0438\u0441\u044c. \u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0441\u0432\u043e\u0438 \u0434\u0430\u043d\u043d\u044b\u0435, \u0447\u0438\u0442\u0430\u0435\u0442 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0432 \u043e\u0434\u0438\u043d \u043a\u043b\u0438\u043a \u2014 \u0432\u0441\u0451 \u043e\u043d\u043b\u0430\u0439\u043d, \u0431\u0435\u0437 \u0431\u0443\u043c\u0430\u0433\u0438.',
    p2: '\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0439 PDF \u0430\u0440\u0445\u0438\u0432\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438, \u0438 \u0432\u044b \u0432\u0438\u0434\u0438\u0442\u0435 \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u043a\u0442\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043b, \u0430 \u043a\u0442\u043e \u043d\u0435\u0442. \u041d\u0438\u043a\u0430\u043a\u0438\u0445 \u0440\u0430\u0437\u0440\u043e\u0437\u043d\u0435\u043d\u043d\u044b\u0445 \u0431\u0443\u043c\u0430\u0433, \u043d\u0438\u043a\u0430\u043a\u043e\u0433\u043e \u0440\u0438\u0441\u043a\u0430 \u0448\u0442\u0440\u0430\u0444\u043e\u0432: \u043a\u0430\u0436\u0434\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u0437\u0430\u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0441 \u0434\u0430\u0442\u043e\u0439, \u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c \u0438 \u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u043f\u043e\u0434\u043f\u0438\u0441\u044c\u044e.',
    legal: '\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0424\u0417-152 \u00ab\u041e \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445\u00bb \u0438 \u0422\u0440\u0443\u0434\u043e\u0432\u043e\u043c\u0443 \u043a\u043e\u0434\u0435\u043a\u0441\u0443 \u0420\u0424. \u0420\u0430\u0431\u043e\u0442\u043e\u0434\u0430\u0442\u0435\u043b\u044c \u043e\u0431\u044f\u0437\u0430\u043d \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0438\u0441\u044c\u043c\u0435\u043d\u043d\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430 \u0438 \u0443\u0432\u0435\u0434\u043e\u043c\u0438\u0442\u044c \u0420\u043e\u0441\u043a\u043e\u043c\u043d\u0430\u0434\u0437\u043e\u0440.',
    tags: ['\u0424\u0417-152', '\u0422\u0440\u0443\u0434\u043e\u0432\u043e\u0439 \u043a\u043e\u0434\u0435\u043a\u0441 \u0420\u0424', '\u0420\u043e\u0441\u043a\u043e\u043c\u043d\u0430\u0434\u0437\u043e\u0440', '\u0426\u0438\u0444\u0440\u043e\u0432\u0430\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u044c', 'PDF \u0430\u0440\u0445\u0438\u0432', '\u0411\u0435\u0437 \u0431\u0443\u043c\u0430\u0433\u0438'],
  },
};

function GpsPrivacySection({ locale }: { locale: string }) {
  const c = GPS_PRIVACY_CONTENT[locale] ?? GPS_PRIVACY_CONTENT['en']!;

  return (
    <section className="container mx-auto mb-24 max-w-7xl px-6">
      <div className="relative rounded-[2rem] border-2 border-green-200 bg-gradient-to-br from-green-50 via-white to-emerald-50 p-10 md:p-16 shadow-lg overflow-hidden">
        {/* Background decorative element */}
        <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-green-100 opacity-30 blur-3xl" />
        <div className="absolute -left-8 -bottom-8 w-48 h-48 rounded-full bg-emerald-100 opacity-20 blur-2xl" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
            <div className="inline-flex rounded-2xl bg-green-600 p-5 text-white shadow-xl shadow-green-200">
              <ShieldCheck size={40} />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-green-600 mb-2 font-mono">
                {locale === 'it' ? 'COMPLIANCE AUTOMATICA' : 'AUTOMATIC COMPLIANCE'}
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 leading-tight">
                {c.title}
              </h2>
              <p className="mt-3 text-lg font-semibold text-green-700">
                {locale === 'it'
                  ? 'Timbri in regola dal primo giorno, o non timbri.*'
                  : locale === 'de'
                    ? 'Ab Tag eins konform, oder gar nicht stempeln.*'
                    : locale === 'fr'
                      ? 'Conforme dès le premier jour, ou pas de pointage.*'
                      : 'Compliant from day one, or you don\'t clock in.*'}
              </p>
            </div>
          </div>

          {/* Content grid */}
          <div className="grid gap-8 md:grid-cols-2 mb-10">
            <div>
              <p className="text-lg leading-relaxed text-slate-700 mb-5">{c.p1}</p>
              <p className="text-lg leading-relaxed text-slate-700">{c.p2}</p>
            </div>
            <div className="rounded-2xl border border-green-200 bg-white/80 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-widest text-green-700 font-mono">
                  {locale === 'it' ? 'NORMATIVA LOCALE' : locale === 'de' ? 'LOKALES RECHT' : locale === 'fr' ? 'L\u00c9GISLATION LOCALE' : 'LOCAL REGULATION'}
                </span>
              </div>
              <p className="text-base leading-relaxed text-slate-600">{c.legal}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {c.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full bg-green-100 border border-green-200 px-4 py-1.5 text-sm font-semibold text-green-800"
              >
                <ShieldCheck size={14} />
                {tag}
              </span>
            ))}
          </div>

          {/* Footnote */}
          <p className="mt-6 text-xs text-green-700/60 leading-relaxed">
            {locale === 'it'
              ? '* Per legge (GDPR Art. 13 e, in Italia, Art. 4 Statuto dei Lavoratori), ogni dipendente deve firmare un\'informativa privacy prima di essere geolocalizzato. La maggior parte dei software GPS non lo gestisce: il rischio legale resta al titolare. GeoTapp genera automaticamente l\'informativa personalizzata, la fa firmare digitalmente al dipendente e blocca l\'accesso GPS finché non è firmata. Nessun altro software sul mercato lo fa.'
              : locale === 'de'
                ? '* Nach geltendem Recht (DSGVO Art. 13, in Deutschland auch BDSG und BetrVG) muss jeder Mitarbeiter vor der GPS-Ortung eine Datenschutzerklärung unterschreiben. Die meisten GPS-Systeme kümmern sich nicht darum, das rechtliche Risiko bleibt beim Arbeitgeber. GeoTapp erstellt die Erklärung automatisch, lässt sie digital unterschreiben und sperrt den GPS-Zugang, bis sie unterzeichnet ist. Kein anderes System am Markt bietet das.'
                : locale === 'fr'
                  ? '* La loi (RGPD Art. 13, en France aussi le Code du travail et les recommandations CNIL) exige que chaque salarié signe un avis de confidentialité avant d\'être géolocalisé. La plupart des logiciels GPS ne gèrent pas cela : le risque juridique reste à l\'employeur. GeoTapp génère automatiquement l\'avis, le fait signer numériquement et bloque l\'accès GPS tant qu\'il n\'est pas signé. Aucun autre logiciel sur le marché ne le fait.'
                  : '* By law (GDPR Art. 13), every employee must sign a privacy notice before being geolocated. Most GPS software does not handle this: the legal risk stays with the employer. GeoTapp automatically generates the personalised notice, gets it digitally signed and blocks GPS access until it is signed. No other software on the market does this.'}
          </p>
        </div>
      </div>
    </section>
  );
}

export default function GeoTappApp() {
  const [selectedSystem, setSelectedSystem] = useState<SystemDetail | null>(
    null,
  );
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
  const dict = getDictionary(currentLocale);
  const isItalian = currentLocale === 'it';
  const flowDict = dict.product_pages.flow;
  // Split helper keeps the emphasized first line independent from rich subtitle content.
  const splitHeroTitle = (title: string) => {
    const parts = title.split(/<br\s*\/?>/i);
    return {
      main: parts[0] || '',
      rest: parts.slice(1).join('<br />').trim(),
    };
  };
  const { main: heroTitleMain, rest: heroTitleRest } = splitHeroTitle(
    flowDict.hero_title,
  );
  const heroTitlePlain = heroTitleMain.replace(/<[^>]*>/g, '').trim();
  // Hero plain text is reused for accessibility-friendly aria labels downstream.

  // Merge system catalog with locale dictionary while keeping stable IDs.
  // Merge systems with dictionary
  const systems = GEOTAPP_SYSTEMS.map((sys) => {
    // @ts-ignore
    const t = flowDict.systems[sys.id];
    return {
      ...sys,
      systemName: t?.name || sys.systemName,
      shortDescription: t?.short || sys.shortDescription,
      fullDescription: t?.full || sys.fullDescription,
      label_open: isItalian ? 'APRI DOSSIER' : 'OPEN DOSSIER',
    };
  });

  // Lookup helper is used by CTA cards and modal anchors.
  const getSystem = (id: string) => systems.find((s) => s.id === id)!;
  // Keep lookup deterministic because card ids are also used by analytics events.
  const getLink = (path: string) => localizePath(path, currentLocale);
  const releaseNote = isItalian
    ? 'Le app native Android e iOS sono in fase di rilascio sugli store e restano collegate ai dati operativi live di TimeTracker.'
    : 'Native Android and iOS apps are being released on the stores and stay connected to live operational data from TimeTracker.';
  const capabilityCards = isItalian
    ? [
        {
          icon: Database,
          title: 'Centro operativo e gestionale',
          description:
            'Flow da all’ufficio un unico ambiente per clienti, commesse, calendario, documenti, permessi, amministrazione e coordinamento operativo.',
        },
        {
          icon: Camera,
          title: 'Prove difendibili verso il cliente',
          description:
            'Foto, note, timbrature e prove raccolte sul campo restano legate alla commessa, così l’ufficio risponde con fatti e non con supposizioni.',
        },
        {
          icon: FileArchive,
          title: 'Timeline commessa, export ZIP e storico verificabile',
          description:
            'Per ogni commessa puoi produrre uno storico con timeline, mappe, timbrature e prove fotografiche che riduce discussioni interne e contestazioni esterne.',
        },
        {
          icon: CreditCard,
          title: 'Fatturazione più rapida, con meno attriti interni',
          description:
            'Preventivi, fatture e integrazioni come Fatture in Cloud lavorano su dati reali di commessa, per una consuntivazione più rapida e difendibile.',
        },
      ]
    : [
        {
          icon: Database,
          title: 'Management and operational hub',
          description:
            'Flow gives office teams one control layer for clients, projects, shifts, documents, permissions, administration and operational follow-up.',
        },
        {
          icon: Camera,
          title: 'Defensible proof for clients',
          description:
            'Photos, notes, timestamps, clock-ins and field evidence stay attached to each project so the office can answer clients with facts, not assumptions.',
        },
        {
          icon: FileArchive,
          title: 'Project timeline, ZIP export and audit trail',
          description:
            'Generate a complete history with timeline, maps, photo proofs and session data to reduce internal disputes and support audits or customer claims.',
        },
        {
          icon: CreditCard,
          title: 'Faster billing with fewer internal disputes',
          description:
            'Quotes, invoices and optional Fatture in Cloud sync work on what was actually done on the field, so billing is faster and easier to defend.',
        },
      ];
  const flowTrackerBlocks = isItalian
    ? [
        {
          icon: ShieldCheck,
          title: 'Pensato per ufficio, amministrazione e coordinamento',
          description:
            'Flow serve a titolari, amministrazione e responsabili che vogliono meno discussioni interne, ruoli più chiari e controllo vero del lavoro.',
        },
        {
          icon: MessageSquare,
          title: 'Integrato a TimeTracker in tempo reale',
          description:
            'Timbrature, operatività sul campo, prove foto e avanzamento commessa tornano in Flow in tempo reale per controllo, report e prove difendibili.',
        },
      ]
    : [
        {
          icon: ShieldCheck,
          title: 'Built for office teams that need clarity',
          description:
            'Owners, administration and coordinators use Flow when they need fewer internal disputes, clearer responsibilities and a reliable operational cockpit.',
        },
        {
          icon: MessageSquare,
          title: 'Connected to TimeTracker in real time',
          description:
            'Clock-ins, field activity, photo proofs and project execution data return into Flow in real time for governance, reporting and customer-facing proof.',
        },
      ];

  return (
    <div className="bg-background min-h-screen text-slate-900 pt-5 pb-24 overflow-x-hidden">
      {/* SYSTEM DETAIL MODAL (LIGHT THEME) */}
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
              layoutId={`card-${selectedSystem.id}`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
            >
              {/* Sidebar */}
              <div className="bg-slate-50 p-10 md:w-1/3 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col justify-between shrink-0 relative overflow-hidden">
                <div>
                  <div
                    className={`p-5 bg-white rounded-2xl shadow-xl inline-block mb-8 border border-slate-100 text-blue-600`}
                  >
                    <selectedSystem.icon size={56} />
                  </div>
                  <div className="font-mono text-xs text-slate-400 mb-2 tracking-widest">
                    {selectedSystem.codeName}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6 leading-tight">
                    {selectedSystem.systemName}
                  </h3>
                  <div className="w-20 h-1 bg-blue-500 rounded-full mb-8"></div>
                </div>
                <div className="font-mono text-xs text-slate-500 space-y-2 border-t border-slate-200 pt-6">
                  <p
                    dangerouslySetInnerHTML={{ __html: flowDict.modal.status }}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: flowDict.modal.encryption,
                    }}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{ __html: flowDict.modal.access }}
                  ></p>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 md:p-14 md:w-2/3 prose prose-slate max-w-none relative">
                <button
                  onClick={() => setSelectedSystem(null)}
                  className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-10 text-slate-500"
                >
                  <X size={24} />
                </button>

                {/* Render HTML Content safely */}
                <div
                  className="markdown-content text-lg leading-relaxed text-slate-700 font-medium"
                  dangerouslySetInnerHTML={{
                    __html: selectedSystem.fullDescription.replace(
                      /\n/g,
                      '<br/>',
                    ),
                  }}
                />

                <div className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center">
                  <span className="font-mono text-xs text-slate-400">
                    SESSION ID:{' '}
                    {Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </span>
                  <button
                    onClick={() => setSelectedSystem(null)}
                    className="px-8 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg"
                  >
                    {flowDict.modal.close}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* HERO SECTION (LIGHT) */}
      <section className="container mx-auto px-6 max-w-7xl text-center mb-32 relative z-10">
        <div>
          <GeoBadge className="mb-8">{flowDict.hero_badge}</GeoBadge>

          <h1 className="text-5xl md:text-8xl font-display font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            <span className="sr-only">{heroTitlePlain || 'GeoTapp Flow'}</span>
            <Image
              src="/logoFlow.webp"
              alt="GeoTapp Flow"
              width={520}
              height={260}
              priority
              fetchPriority="high"
              className="mx-auto h-20 w-auto md:h-28"
            />
            {heroTitleRest && (
              <span
                className="block mt-4 text-3xl md:text-5xl font-display font-bold"
                dangerouslySetInnerHTML={{ __html: heroTitleRest }}
              />
            )}
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-4xl mx-auto mb-16">
            {flowDict.hero_subtitle}
          </p>

          <ScreenCarousel isItalian={isItalian} />
        </div>
      </section>

      <section className="container mx-auto mb-24 max-w-6xl px-6">
        <div className="rounded-[2rem] border border-blue-100 bg-blue-50 p-6 text-center shadow-sm">
          <div className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
            {isItalian ? 'Stato piattaforma' : 'Platform Status'}
          </div>
          <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-700">
            {releaseNote}
          </p>
        </div>
      </section>

      <section className="container mx-auto mb-24 max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 md:text-5xl">
            {isItalian
              ? 'Cosa fa davvero GeoTapp Flow oggi'
              : 'What GeoTapp Flow really does today'}
          </h2>
          <p className="mt-5 text-xl text-slate-500">
            {isItalian
              ? 'Non solo dashboard gestionale: collega pianificazione, operatività, consuntivazione e prove difendibili di ciò che il team ha svolto davvero.'
              : 'More than a dashboard: it connects planning, execution, billing and defensible proof of what the team actually delivered.'}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {capabilityCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* GPS PRIVACY COMPLIANCE - HERO-STYLE SECTION */}
      <GpsPrivacySection locale={currentLocale} />

      <section className="container mx-auto mb-24 max-w-7xl px-6">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            {flowTrackerBlocks.map((block) => {
              const Icon = block.icon;
              return (
                <div key={block.title}>
                  <div className="mb-4 inline-flex rounded-2xl bg-white p-3 text-blue-600 shadow-sm">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {block.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600">
                    {block.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SYSTEM GRID */}
      <section className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            {flowDict.grid_title}
          </h2>
          <p className="text-xl text-slate-500">{flowDict.grid_subtitle}</p>
        </div>

        {/* SECTOR 1 */}
        <Sectiondivider title={flowDict.sectors['1']} />
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <SystemCard
            system={getSystem('nexus-core')}
            onClick={setSelectedSystem}
          />
          <SystemCard
            system={getSystem('titan-flow')}
            onClick={setSelectedSystem}
          />
          <SystemCard
            system={getSystem('ledger-prime')}
            onClick={setSelectedSystem}
          />
        </div>

        {/* SECTOR 2 */}
        <Sectiondivider title={flowDict.sectors['2']} />
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <SystemCard
            system={getSystem('quantum-logistics')}
            onClick={setSelectedSystem}
          />
          <SystemCard
            system={getSystem('supply-command')}
            onClick={setSelectedSystem}
          />
          <SystemCard
            system={getSystem('the-architect')}
            onClick={setSelectedSystem}
          />
        </div>

        {/* SECTOR 3 */}
        <Sectiondivider title={flowDict.sectors['3']} />
        <div className="grid md:grid-cols-3 gap-8">
          <SystemCard
            system={getSystem('the-auditor')}
            onClick={setSelectedSystem}
          />
          <SystemCard
            system={getSystem('the-uplink')}
            onClick={setSelectedSystem}
          />
          <SystemCard
            system={getSystem('the-oracle')}
            onClick={setSelectedSystem}
          />
        </div>

        {/* CTA */}
        <div className="text-center py-32">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-slate-900">
            {flowDict.cta_title}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={getLink('/trial')}
              onClick={() => trackEvent('trial_click', { cta_source: 'product_flow', cta_locale: currentLocale })}
              className="btn-modern"
            >
              <Zap size={24} />{' '}
              {isItalian
                ? 'Prova Flow gratis per 14 giorni'
                : 'Try Flow free for 14 days'}
            </Link>
            <Link
              href={getLink('/pricing')}
              className="btn-modern-ghost"
            >
              <Globe
                className="group-hover:rotate-12 transition-transform"
                size={24}
              />{' '}
              {flowDict.cta_button}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Product flow page note: preserve dictionary merge and modal lookup contract (1/1)
