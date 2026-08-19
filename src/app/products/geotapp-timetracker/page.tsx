'use client';

import './l-page.css';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Clock,
  Smartphone,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { GEOTAPP_SYSTEMS, SystemDetail } from './systems-data';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  localizePath,
} from '@/lib/i18n/locale-routing';
import { trackEvent } from '@/lib/analytics';

// Kicker "La prova", stessa parola gia' approvata su HomeClient (L_COPY.la_prova).
const LA_PROVA: Record<string, string> = {
  it: 'La prova', en: 'The proof', de: 'Der Beweis', fr: 'La preuve', es: 'La prueba',
  pt: 'A prova', nl: 'Het bewijs', da: 'Beviset', sv: 'Beviset', nb: 'Beviset', ru: 'Доказательство',
};

export default function GeoTappApp() {
  const [selectedSystem, setSelectedSystem] = useState<SystemDetail | null>(null);
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
  const dict = getDictionary(currentLocale);
  const isItalian = currentLocale === 'it';
  const appDict = dict.product_pages.app;

  const splitHeroTitle = (title: string) => {
    const parts = title.split(/<br\s*\/?>/i);
    return { main: parts[0] || '', rest: parts.slice(1).join('<br />').trim() };
  };
  const { main: heroTitleMain, rest: heroTitleRest } = splitHeroTitle(appDict.hero_title);
  const heroTitlePlain = heroTitleMain.replace(/<[^>]*>/g, '').trim();

  const systems = GEOTAPP_SYSTEMS.map((sys) => {
    // @ts-ignore
    const t = appDict.systems[sys.id];
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
    ? 'Le app native Android e iOS sono disponibili sugli store e tengono i dati del campo collegati a Flow in tempo reale.'
    : 'Native Android and iOS apps are available on the stores and keep field data connected to Flow in real time.';

  const trackerHighlights = isItalian
    ? [
        { title: 'Lavoro verificabile sul campo', description: 'Ingresso e uscita sono collegati a coordinate, indirizzo e orario, così ogni sessione diventa un evento operativo verificabile.' },
        { title: 'Prove che il cliente può controllare', description: 'Gli operatori scattano foto, aggiungono note e inviano prove strutturate del lavoro svolto, con una garanzia di veridicita più forte verso il cliente.' },
        { title: 'Alimenta Flow con uno storico difendibile', description: 'Quello che viene raccolto sul campo diventa subito utile per report cliente, timeline commessa, prove servizio e meno contestazioni.' },
        { title: 'Uso auto, documenti e rimborsi', description: 'La piattaforma supporta dichiarazione uso auto, conferme, caricamento ricevute e approvazioni amministrative.' },
      ]
    : [
        { title: 'Verifiable field work', description: 'Clock-in and clock-out are tied to coordinates, address and timestamps, so every session becomes a verifiable field event.' },
        { title: 'Proof the client can trust', description: 'Teams can capture photos, notes and structured evidence linked to each project to give the client a clearer guarantee of what was really done.' },
        { title: 'Feeds Flow with defensible history', description: 'What is captured on the field becomes usable by the office for reports, evidence packs, project timelines and fewer disputes.' },
        { title: 'Vehicle use, documents and reimbursement flows', description: 'Car usage can be declared, confirmed and documented with receipts and approvals across field and admin teams.' },
      ];

  const trackerWorkflow = isItalian
    ? [
        { title: 'Molto più di una semplice timbratura', description: 'TimeTracker copre dettaglio commessa, report, comunicazioni, richieste, sessioni lavoro e responsabilità operativa, non solo presenze.' },
        { title: 'Meno contestazioni tra campo, ufficio e cliente', description: 'L’operatività del campo non resta isolata: l’ufficio segue avanzamento, controlla prove e risponde al cliente con fatti prima che nascano discussioni.' },
      ]
    : [
        { title: 'More than attendance tracking', description: 'TimeTracker covers project detail, reports, communications, requests, work sessions and operational accountability, not just attendance.' },
        { title: 'Fewer disputes between field, office and client', description: 'Field activity is never isolated: the office can review proofs, track progress and answer the client with facts before a dispute grows.' },
      ];

  const sectorGroups: Array<{ key: '1' | '2' | '3'; systems: SystemDetail[] }> = [
    { key: '1', systems: [getSystem('timelock-alpha'), getSystem('event-horizon'), getSystem('unit-matrix')] },
    { key: '2', systems: [getSystem('sector-grid'), getSystem('energy-logistics'), getSystem('neural-link')] },
    { key: '3', systems: [getSystem('payroll-bridge'), getSystem('data-core'), getSystem('identity-forge')] },
  ];

  const complianceTagline = isItalian
    ? 'Timbri in regola dal primo giorno, o non timbri.*'
    : 'Compliant from day one, or you don\'t clock in.*';
  const complianceFootnote = isItalian
    ? '* Per legge, ogni dipendente deve firmare un\'informativa privacy prima di essere geolocalizzato. GeoTapp è l\'unico sistema che la genera in automatico, la fa firmare e blocca l\'accesso GPS finché non è firmata.'
    : '* By law, every employee must sign a privacy notice before being geolocated. GeoTapp is the only system that generates it automatically, gets it signed and blocks GPS access until it is.';

  const trialLabel = isItalian ? 'Inizia trial gratuito di 14 giorni' : currentLocale === 'de' ? '14 Tage kostenlos testen' : 'Start 14-day free trial';
  const availableOn = isItalian ? 'Disponibile su' : currentLocale === 'de' ? 'Verfügbar auf' : 'Available on';

  return (
    <div className="lp-l lp-prodotto-timetracker">
      {/* SYSTEM DETAIL MODAL, invariato */}
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
                  <p dangerouslySetInnerHTML={{ __html: appDict.modal.status }}></p>
                  <p dangerouslySetInnerHTML={{ __html: appDict.modal.encryption }}></p>
                  <p dangerouslySetInnerHTML={{ __html: appDict.modal.device }}></p>
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
                    {appDict.modal.close}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* TESTATA */}
      <section className="ph">
        <div className="crumb"><div className="w"><Link href={getLink('/')}>Home</Link> / {dict.navbar.products} / GeoTapp TimeTracker.</div></div>
        <div className="w">
          <p className="kk k"><s />{appDict.hero_badge}</p>
          <h1>
            {heroTitlePlain || 'GeoTapp TimeTracker'}
            {heroTitleRest && (
              <>
                <br />
                <em dangerouslySetInnerHTML={{ __html: heroTitleRest }} />
              </>
            )}
          </h1>
          <p className="lede">{appDict.hero_subtitle}</p>
          <p className="l-tagline">{complianceTagline}</p>
          <p className="l-foot-note">{complianceFootnote}</p>
          <div className="acts">
            <Link className="b1" href={getLink('/trial')} onClick={() => trackEvent('trial_click', { cta_source: 'product_timetracker', cta_locale: currentLocale })}>
              {trialLabel}
            </Link>
            <Link className="b2" href={getLink('/pricing')}>{appDict.cta_button}</Link>
          </div>
        </div>
      </section>

      {/* SCHERMATE VERE, due telefoni affiancati: dashboard e menu */}
      <section className="shot"><div className="wn"><div className="fitwrap" style={{ gap: 26, flexWrap: 'wrap' }}>
        <div className="frame fit r-s"><div className="phone">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/TT1.webp" alt="GeoTapp TimeTracker - Dashboard" loading="eager" fetchPriority="high" />
        </div></div>
        <div className="frame fit r-s d1"><div className="phone">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/TT2.webp" alt="GeoTapp TimeTracker - Menu" loading="lazy" />
        </div></div>
      </div></div></section>

      {/* STATO PIATTAFORMA */}
      <section className="sec l-note" style={{ paddingBottom: 0 }}>
        <div className="wn">
          <p className="kk k" style={{ color: 'var(--seal)', justifyContent: 'center' }}>{isItalian ? 'Stato piattaforma' : 'Platform Status'}</p>
          <p>{releaseNote}</p>
        </div>
      </section>

      {/* SCARICA */}
      <section className="sec"><div className="wn" style={{ textAlign: 'center' }}>
        <p className="kk k" style={{ color: 'var(--seal)', justifyContent: 'center' }}>{isItalian ? 'App Mobile' : 'Mobile App'}</p>
        <h2 className="r" style={{ marginTop: 14 }}>
          {isItalian ? 'Scarica GeoTapp TimeTracker' : currentLocale === 'de' ? 'GeoTapp TimeTracker herunterladen' : 'Download GeoTapp TimeTracker'}
        </h2>
        <p style={{ marginTop: 16, color: '#4A5244' }}>
          {isItalian ? 'Disponibile su Google Play e su App Store.' : currentLocale === 'de' ? 'Verfügbar auf Google Play und im App Store.' : 'Available on Google Play and on the App Store.'}
        </p>
        <div className="l-stores" style={{ justifyContent: 'center' }}>
          <a href="https://play.google.com/store/apps/details?id=com.geotapp.timetrackerandroid" target="_blank" rel="noopener noreferrer nofollow" className="l-store">
            <svg viewBox="0 0 24 24" width={28} height={28} aria-hidden="true">
              <path d="M3.18 23.76c.3.17.64.24.99.21l13.1-7.57-2.83-2.83-11.26 10.19z" fill="#EA4335"/>
              <path d="M22.35 10.56l-3.17-1.83-3.18 3.18 3.18 3.18 3.19-1.84a1.83 1.83 0 0 0 0-2.69z" fill="#FBBC04"/>
              <path d="M3.18.24A1.83 1.83 0 0 0 2.3 1.9v20.2c0 .67.37 1.26.88 1.66L14.17 12 3.18.24z" fill="#4285F4"/>
              <path d="M4.17 0 16.1 11.93l-2.83 2.83L3.18.24A1.83 1.83 0 0 1 4.17 0z" fill="#34A853"/>
            </svg>
            <span><span>{availableOn}</span><b>Google Play</b></span>
          </a>
          <a href="https://apps.apple.com/app/id6761460207" target="_blank" rel="noopener noreferrer nofollow" className="l-store">
            <svg viewBox="0 0 24 24" width={28} height={28} fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.19 1.28-2.17 3.81.03 3.02 2.65 4.03 2.68 4.04l-.06.27zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <span><span>{availableOn}</span><b>App Store</b></span>
          </a>
        </div>
      </div></section>

      {/* COSA FA DAVVERO TIMETRACKER: griglia funzionalita' */}
      <section className="sec warm"><div className="w">
        <div className="hd">
          <h2 className="r">{isItalian ? 'App timbrature geolocalizzate: cosa fa davvero GeoTapp TimeTracker' : 'What GeoTapp TimeTracker really does today'}</h2>
          <p className="r d1">{isItalian
            ? 'Non solo presenze: raccoglie lavoro verificabile sul campo, prove affidabili per il cliente e uno storico operativo che l’ufficio può davvero usare.'
            : 'Not just attendance: it captures verifiable field work, reliable customer proof and the operational history the office can trust.'}</p>
        </div>
      </div>
        <div className="mods">
          {trackerHighlights.map((card, i) => (
            <article key={card.title} className={`r d${i + 1}`}>
              <span className="nn">{String(i + 1).padStart(2, '0')}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PIU' DI UNA TIMBRATURA */}
      <section className="sec"><div className="w">
        <div className="mods" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
          {trackerWorkflow.map((block, i) => (
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

      {/* GRIGLIA SISTEMI: 9 moduli, 3 settori, stesso dossier al click */}
      <section className="sec">
        <div className="w">
          <div className="hd">
            <h2 className="r">{appDict.grid_title}</h2>
            <p className="r d1">{appDict.grid_subtitle}</p>
          </div>
        </div>
        {sectorGroups.map(({ key, systems: group }, gi) => (
          <div key={key}>
            <div className="w" style={{ marginTop: gi === 0 ? 0 : 46, marginBottom: 14 }}>
              <p className="kk k" style={{ color: 'var(--seal)' }}>{appDict.sectors[key]}</p>
            </div>
            <div className="mods">
              {group.map((sys, i) => (
                <article key={sys.id} className={`l-mod-click r d${i + 1}`} onClick={() => setSelectedSystem(sys)}>
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
          <h2 className="r">{appDict.cta_title}</h2>
          <div className="acts r d2">
            <Link className="b1" href={getLink('/trial')} onClick={() => trackEvent('trial_click', { cta_source: 'product_timetracker_end', cta_locale: currentLocale })}>
              <Clock size={20} style={{ display: 'inline', verticalAlign: '-4px', marginRight: 8 }} />{trialLabel}
            </Link>
            <Link className="b2" href={getLink('/pricing')}>
              <Smartphone size={18} style={{ display: 'inline', verticalAlign: '-3px', marginRight: 6 }} />{appDict.cta_button}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Product app page note: keep systems catalog ids stable for UI and analytics (1/2)

// Product app page note: keep systems catalog ids stable for UI and analytics (2/2)
