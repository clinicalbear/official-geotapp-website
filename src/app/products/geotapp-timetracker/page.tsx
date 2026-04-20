'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Map,
  Camera,
  WifiOff,
  PenTool,
  Receipt,
  Clock,
  Shield,
  Navigation,
  Smartphone,
  X,
  Server,
  Globe,
  Cpu,
  FileArchive,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { GEOTAPP_SYSTEMS, SystemDetail } from './systems-data';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  localizePath,
} from '@/lib/i18n/locale-routing';
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
      case 'slate':
        return {
          text: 'text-slate-600',
          bg: 'bg-slate-100',
          letter: 'text-slate-600',
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
      {/* Background Letter - Theme Style */}
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

export default function GeoTappApp() {
  const [selectedSystem, setSelectedSystem] = useState<SystemDetail | null>(
    null,
  );
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
  const dict = getDictionary(currentLocale);
  const isItalian = currentLocale === 'it';
  const appDict = dict.product_pages.app;
  // Split helper keeps headline emphasis controllable across localized variants.
  const splitHeroTitle = (title: string) => {
    const parts = title.split(/<br\s*\/?>/i);
    return {
      main: parts[0] || '',
      rest: parts.slice(1).join('<br />').trim(),
    };
  };
  const { main: heroTitleMain, rest: heroTitleRest } = splitHeroTitle(
    appDict.hero_title,
  );
  const heroTitlePlain = heroTitleMain.replace(/<[^>]*>/g, '').trim();

  // Merge system catalog with dictionary copy while preserving stable IDs.
  // Helper to find system by ID
  // Merge systems with dictionary
  const systems = GEOTAPP_SYSTEMS.map((sys) => {
    // @ts-ignore
    const t = appDict.systems[sys.id];
    return {
      ...sys,
      systemName: t?.name || sys.systemName,
      shortDescription: t?.short || sys.shortDescription,
      fullDescription: t?.full || sys.fullDescription,
      label_open: isItalian ? 'APRI DOSSIER' : 'OPEN DOSSIER',
    };
  });

  // Local lookup helper is reused by cards and modal details.
  const getSystem = (id: string) => systems.find((s) => s.id === id)!;
  const getLink = (path: string) => localizePath(path, currentLocale);
  const releaseNote = isItalian
    ? 'Le app native Android e iOS sono disponibili sugli store e tengono i dati del campo collegati a Flow in tempo reale.'
    : 'Native Android and iOS apps are available on the stores and keep field data connected to Flow in real time.';
  const trackerHighlights = isItalian
    ? [
        {
          icon: Map,
          title: 'Lavoro verificabile sul campo',
          description:
            'Ingresso e uscita sono collegati a coordinate, indirizzo e orario, cosi ogni sessione diventa un evento operativo verificabile.',
        },
        {
          icon: Camera,
          title: 'Prove che il cliente puo controllare',
          description:
            'Gli operatori scattano foto, aggiungono note e inviano prove strutturate del lavoro svolto, con una garanzia di veridicita piu forte verso il cliente.',
        },
        {
          icon: FileArchive,
          title: 'Alimenta Flow con uno storico difendibile',
          description:
            'Quello che viene raccolto sul campo diventa subito utile per report cliente, timeline commessa, prove servizio e meno contestazioni.',
        },
        {
          icon: Receipt,
          title: 'Uso auto, documenti e rimborsi',
          description:
            'La piattaforma supporta dichiarazione uso auto, conferme, caricamento ricevute e approvazioni amministrative.',
        },
      ]
    : [
        {
          icon: Map,
          title: 'Verifiable field work',
          description:
            'Clock-in and clock-out are tied to coordinates, address and timestamps, so every session becomes a verifiable field event.',
        },
        {
          icon: Camera,
          title: 'Proof the client can trust',
          description:
            'Teams can capture photos, notes and structured evidence linked to each project to give the client a clearer guarantee of what was really done.',
        },
        {
          icon: FileArchive,
          title: 'Feeds Flow with defensible history',
          description:
            'What is captured on the field becomes usable by the office for reports, evidence packs, project timelines and fewer disputes.',
        },
        {
          icon: Receipt,
          title: 'Vehicle use, documents and reimbursement flows',
          description:
            'Car usage can be declared, confirmed and documented with receipts and approvals across field and admin teams.',
        },
      ];
  const trackerWorkflow = isItalian
    ? [
        {
          icon: CheckCircle2,
          title: 'Molto piu di una semplice timbratura',
          description:
            'TimeTracker copre dettaglio commessa, report, comunicazioni, richieste, sessioni lavoro e responsabilita operativa, non solo presenze.',
        },
        {
          icon: MessageSquare,
          title: 'Meno contestazioni tra campo, ufficio e cliente',
          description:
            'L’operativita del campo non resta isolata: l’ufficio segue avanzamento, controlla prove e risponde al cliente con fatti prima che nascano discussioni.',
        },
      ]
    : [
        {
          icon: CheckCircle2,
          title: 'More than attendance tracking',
          description:
            'TimeTracker covers project detail, reports, communications, requests, work sessions and operational accountability, not just attendance.',
        },
        {
          icon: MessageSquare,
          title: 'Fewer disputes between field, office and client',
          description:
            'Field activity is never isolated: the office can review proofs, track progress and answer the client with facts before a dispute grows.',
        },
      ];

  return (
    <div className="bg-background min-h-screen text-slate-900 pt-32 pb-24 overflow-x-hidden">
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
                    dangerouslySetInnerHTML={{ __html: appDict.modal.status }}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: appDict.modal.encryption,
                    }}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{ __html: appDict.modal.device }}
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
                    {appDict.modal.close}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* HERO SECTION (LIGHT) */}
      <section className="container mx-auto px-6 max-w-7xl text-center mb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-mono text-xs tracking-widest">
            <Smartphone size={14} className="animate-pulse" />
            {appDict.hero_badge}
          </div>

          <h1 className="text-5xl md:text-8xl font-display font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            <span className="sr-only">
              {heroTitlePlain || 'GeoTapp Timetracker'}
            </span>
            <Image
              src="/logoTT.webp"
              alt="GeoTapp TimeTracker"
              width={520}
              height={260}
              priority
              className="mx-auto block max-h-40 md:max-h-56 w-auto max-w-full object-contain"
            />
            {heroTitleRest && (
              <span
                className="block mt-4 text-3xl md:text-5xl font-display font-bold"
                dangerouslySetInnerHTML={{ __html: heroTitleRest }}
              />
            )}
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-4xl mx-auto mb-16">
            {appDict.hero_subtitle}
          </p>

          <motion.div
            whileHover={{ scale: 1.01 }}
            viewport={{ once: true }}
            className="relative mx-auto mt-16 max-w-6xl"
          >
            {/* TimeTracker app screenshots — side by side, cropped to 16/9 */}
            <div className="relative rounded-2xl shadow-2xl border border-slate-200 aspect-[16/9] overflow-hidden flex">
              <div className="relative w-1/2 h-full">
                <Image
                  src="/TT1.webp"
                  alt="GeoTapp TimeTracker — Dashboard"
                  fill
                  className="object-cover object-top"
                  sizes="50vw"
                  priority
                />
              </div>
              <div className="relative w-1/2 h-full border-l border-slate-200">
                <Image
                  src="/TT2.webp"
                  alt="GeoTapp TimeTracker — Menu"
                  fill
                  className="object-cover object-top"
                  sizes="50vw"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
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

      {/* DOWNLOAD SECTION */}
      <section className="container mx-auto mb-24 max-w-4xl px-6">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-sm">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            <Smartphone size={12} />
            {isItalian ? 'App Mobile' : 'Mobile App'}
          </div>
          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            {isItalian ? 'Scarica GeoTapp TimeTracker' : currentLocale === 'de' ? 'GeoTapp TimeTracker herunterladen' : 'Download GeoTapp TimeTracker'}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-slate-500">
            {isItalian
              ? 'Disponibile su Google Play e su App Store.'
              : currentLocale === 'de'
              ? 'Verfügbar auf Google Play und im App Store.'
              : 'Available on Google Play and on the App Store.'}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            {/* Google Play badge */}
            <a href="https://play.google.com/store/apps/details?id=com.geotapp.timetrackerandroid" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border-2 border-slate-200 bg-slate-50 px-7 py-4 transition-opacity hover:opacity-80">
              <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" aria-hidden="true">
                <path d="M3.18 23.76c.3.17.64.24.99.21l13.1-7.57-2.83-2.83-11.26 10.19z" fill="#EA4335"/>
                <path d="M22.35 10.56l-3.17-1.83-3.18 3.18 3.18 3.18 3.19-1.84a1.83 1.83 0 0 0 0-2.69z" fill="#FBBC04"/>
                <path d="M3.18.24A1.83 1.83 0 0 0 2.3 1.9v20.2c0 .67.37 1.26.88 1.66L14.17 12 3.18.24z" fill="#4285F4"/>
                <path d="M4.17 0 16.1 11.93l-2.83 2.83L3.18.24A1.83 1.83 0 0 1 4.17 0z" fill="#34A853"/>
              </svg>
              <div className="text-left">
                <div className="text-xs font-semibold text-slate-500">
                  {isItalian ? 'Disponibile su' : currentLocale === 'de' ? 'Verfügbar auf' : 'Available on'}
                </div>
                <div className="text-lg font-bold text-slate-900 leading-tight">Google Play</div>
              </div>
            </a>

            {/* App Store badge */}
            <a href="https://apps.apple.com/app/id6761460207" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border-2 border-slate-200 bg-slate-50 px-7 py-4 transition-opacity hover:opacity-80">
              <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0 text-slate-900" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.19 1.28-2.17 3.81.03 3.02 2.65 4.03 2.68 4.04l-.06.27zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs font-semibold text-slate-500">
                  {isItalian ? 'Disponibile su' : currentLocale === 'de' ? 'Verfügbar auf' : 'Available on'}
                </div>
                <div className="text-lg font-bold text-slate-900 leading-tight">App Store</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto mb-24 max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 md:text-5xl">
            {isItalian
              ? 'App timbrature geolocalizzate: cosa fa davvero GeoTapp TimeTracker'
              : 'What GeoTapp TimeTracker really does today'}
          </h2>
          <p className="mt-5 text-xl text-slate-500">
            {isItalian
              ? 'Non solo presenze: raccoglie lavoro verificabile sul campo, prove affidabili per il cliente e uno storico operativo che l’ufficio puo davvero usare.'
              : 'Not just attendance: it captures verifiable field work, reliable customer proof and the operational history the office can trust.'}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {trackerHighlights.map((card) => {
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

      <section className="container mx-auto mb-24 max-w-7xl px-6">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            {trackerWorkflow.map((block) => {
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
            {appDict.grid_title}
          </h2>
          <p className="text-xl text-slate-500">{appDict.grid_subtitle}</p>
        </div>

        {/* SECTOR 1 */}
        <Sectiondivider title={appDict.sectors['1']} />
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <SystemCard
            system={getSystem('timelock-alpha')}
            onClick={setSelectedSystem}
          />
          <SystemCard
            system={getSystem('event-horizon')}
            onClick={setSelectedSystem}
          />
          <SystemCard
            system={getSystem('unit-matrix')}
            onClick={setSelectedSystem}
          />
        </div>

        {/* SECTOR 2 */}
        <Sectiondivider title={appDict.sectors['2']} />
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <SystemCard
            system={getSystem('sector-grid')}
            onClick={setSelectedSystem}
          />
          <SystemCard
            system={getSystem('energy-logistics')}
            onClick={setSelectedSystem}
          />
          <SystemCard
            system={getSystem('neural-link')}
            onClick={setSelectedSystem}
          />
        </div>

        {/* SECTOR 3 */}
        <Sectiondivider title={appDict.sectors['3']} />
        <div className="grid md:grid-cols-3 gap-8">
          <SystemCard
            system={getSystem('payroll-bridge')}
            onClick={setSelectedSystem}
          />
          <SystemCard
            system={getSystem('data-core')}
            onClick={setSelectedSystem}
          />
          <SystemCard
            system={getSystem('identity-forge')}
            onClick={setSelectedSystem}
          />
        </div>

        {/* CTA */}
        <div className="text-center py-32">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-slate-900">
            {appDict.cta_title}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={getLink('/trial')}
              className="inline-flex items-center gap-4 px-12 py-6 bg-blue-600 text-white font-bold rounded-xl text-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 group"
            >
              <Clock size={24} />{' '}
              {isItalian
                ? 'Inizia trial gratuito di 14 giorni'
                : currentLocale === 'de'
                ? '14 Tage kostenlos testen'
                : 'Start 14-day free trial'}
            </Link>
            <Link
              href={getLink('/pricing')}
              className="inline-flex items-center gap-4 px-12 py-6 bg-slate-100 text-slate-900 font-bold rounded-xl text-xl hover:bg-slate-200 transition-all group"
            >
              <Smartphone
                className="group-hover:rotate-12 transition-transform"
                size={24}
              />{' '}
              {appDict.cta_button}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Product app page note: keep systems catalog ids stable for UI and analytics (1/2)

// Product app page note: keep systems catalog ids stable for UI and analytics (2/2)
