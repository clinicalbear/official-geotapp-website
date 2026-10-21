import type { AppLocale } from '@/lib/i18n/config';
import type { SettoreContent, SettoreSlug } from './types';

/**
 * Testi regionali delle pagine di settore EN (en-gb, en-us, en-au, en-ie, en-ca).
 *
 * Perche' esistono (21/10/2026): l'ispezione URL di Search Console su 1.900 URL
 * mostrava che delle 445 pagine regionali inglesi del sito solo 88 erano
 * indicizzate e 320 venivano ricondotte da Google a un'altra versione (di solito
 * /en/). Misura sul testo: /en-gb/ e /en/ sono uguali al 94-96% sulle pagine di
 * settore (resto 99-100%), perche' cambiavano solo prezzi, un badge e la FAQ
 * regionale. Decisione di Mike del 21/10: differenziare davvero.
 *
 * Cosa cambia qui, per ogni settore e ogni regione: title e description, badge,
 * H1, sottotitolo e un blocco `regional_context` con la norma del paese. Il corpo
 * (problema, flusso, funzioni) resta condiviso: e' la parte che non dipende dal
 * paese.
 *
 * Regola: nessuna cifra o norma entra qui se non e' stata letta su una fonte
 * primaria. Le fonti sono sotto, per regione.
 *
 * Falsificabile: se a 6 settimane (dal deploy) le pagine regionali con stato
 * "Duplicate, Google chose different canonical" o "Alternate page" non sono
 * diminuite rispetto a 320 su 445, il testo non e' la leva e va ripensata la
 * struttura invece di scrivere altri testi.
 *
 * FONTI
 *  - en-gb: Working Time Regulations 1998 reg. 9 (legislation.gov.uk, letto
 *    21/10/2026); ICO, guida "Monitoring workers" (in revisione per il Data (Use
 *    and Access) Act); consultazione DBT sulle tecnologie di monitoraggio sul
 *    lavoro, aperta l'8/7/2026 e chiusa il 30/9/2026 (risposta GeoTapp inviata il
 *    10/09).
 */

export interface RegionalOverride {
  meta?: Partial<SettoreContent['meta']>;
  hero?: Partial<SettoreContent['hero']>;
  regional_context?: SettoreContent['regional_context'];
}

type OverrideMap = Partial<Record<SettoreSlug, Partial<Record<AppLocale, RegionalOverride>>>>;

const GB_TITLE = 'Working time records in Great Britain';
const GB_BASE = [
  'Under regulation 9 of the Working Time Regulations 1998, an employer must keep records adequate to show whether the working time limits are being complied with, and keep them for two years. The regulations leave the format to the employer.',
  "GeoTapp records the start, the breaks and the finish of each shift, with the position at the moment of each clock-in and nothing in between. That is a record of the working day, not a trace of where a worker has been. The ICO publishes guidance on monitoring workers, which it is reviewing following the Data (Use and Access) Act, and in July 2026 the Department for Business and Trade opened a consultation on new rules for workplace monitoring technologies, which closed on 30 September.",
];
const gbContext = (extra: string) => ({ title: GB_TITLE, paras: [...GB_BASE, extra] });

export const REGIONAL_OVERRIDES: OverrideMap = {
  pulizie: {
    'en-gb': {
      meta: {
        title: 'GPS Clock-ins for UK Cleaning Contractors | GeoTapp',
        description:
          'Clock-ins with position and photo proof for UK cleaning contractors. Show a client who was on site and when, with a time record that holds up in a dispute.',
      },
      hero: {
        badge: 'GPS clock-ins for UK cleaning contractors and facilities services',
        h1_line1: 'Cleaning contractor software:',
        h1_line2: 'time records and photo proof for every client site',
        subtitle:
          'GeoTapp connects Flow and TimeTracker for cleaning teams spread across several client sites. Operatives clock in from their smartphones with the position recorded at that moment, and the office sees who clocked in where and when, with photo proof attached. A record to answer a client dispute, and hours and breaks ready for your payroll provider.',
      },
      regional_context: gbContext(
        'For a contract cleaner, that is the answer to a client who says a site was not covered: who clocked in, where, and for how long.',
      ),
    },
  },
  'impresa-di-pulizie': {
    'en-gb': {
      meta: {
        title: 'Cleaning Business App for UK Contractors | GeoTapp',
        description:
          'Manage crews, shifts and attendance for a UK cleaning business, with position at each clock-in and proof of service to show when a client disputes a visit.',
      },
      hero: {
        badge: 'App for UK cleaning businesses and facilities services',
        h1_line1: 'Your cleaning business,',
        h1_line2: 'run clock-in by clock-in across every contract.',
        subtitle:
          'Run crews, shifts and attendance from one place. Operatives clock in on site with the position recorded at that moment, and when a client disputes a visit you have a time and a place to show, with the photos taken during the job.',
      },
      regional_context: gbContext(
        'For a cleaning business with several contracts, that is one record per worker and per site that you can export to Excel or CSV for your payroll provider.',
      ),
    },
  },
  installatori: {
    'en-gb': {
      meta: {
        title: 'Job Reports for UK Electricians and Installers | GeoTapp',
        description:
          'Job reports with position and photos, sealed so any change shows, for UK electricians, plumbers and installers. Try GeoTapp free for 14 days.',
      },
      hero: {
        badge: 'For UK electricians, plumbers and field maintenance teams',
        h1_line1: 'Field maintenance, organised:',
        h1_line2: 'jobs, timesheets and proof for every call-out',
        subtitle:
          'GeoTapp connects Flow and TimeTracker for engineers who work alone or in pairs across many addresses a day. Each job gets a clock-in with position, photos and a sealed report, and the office sees the day as it happens, without calling anyone.',
      },
      regional_context: gbContext(
        'For engineers on call-outs, that is the record of when the job started and finished at each address, which is what a customer who says nobody came will be shown.',
      ),
    },
  },
  elettricisti: {
    'en-gb': {
      meta: {
        title: 'Time Tracking for UK Electricians | Job Reports | GeoTapp',
        description:
          'Clock-ins with position, job reports and installation photos for UK electrical contractors. Show the report instead of arguing. Try free for 14 days.',
      },
      hero: {
        badge: 'Time tracking and job reports for UK electricians and electrical contractors',
        h1_line1: 'App for electricians:',
        h1_line2: 'clock-ins, job reports and fewer disputes with the client.',
        subtitle:
          'Your electricians clock in on site and the position is recorded at that moment. Photos of the installation and the job report are sealed so that any later change is detectable, and the hours export to Excel or CSV for payroll.',
      },
      regional_context: gbContext(
        'For an electrical contractor, that is the time on site for each job, next to the photos of the installation and the job report.',
      ),
    },
  },
  idraulici: {
    'en-gb': {
      hero: {
        badge: 'App for UK plumbers, heating engineers and HVAC technicians',
        h1_line1: 'App for plumbers and heating engineers:',
        h1_line2: 'job reports, photo evidence and fewer disputes.',
        subtitle:
          'Your engineers clock in at the property with the position recorded at that moment, attach photos of the work and close a sealed job report. The office sees who is where without phone calls, and the hours export to Excel or CSV for your payroll provider.',
      },
      regional_context: gbContext(
        'For a plumbing or heating firm, that is the proof of a visit and its length when a customer says the engineer never turned up.',
      ),
    },
  },
  termoidraulici: {
    'en-gb': {
      meta: {
        title: 'Job Reports for UK Heating Engineers | GeoTapp',
        description:
          'Job reports with position at clock-in and boiler photos, sealed so any change shows. Something to show the customer who says nobody came. Try free for 14 days.',
      },
      hero: {
        badge: 'App for UK plumbers and heating installers',
        h1_line1: 'App for heating engineers:',
        h1_line2: 'job reports, photo evidence and fewer disputes.',
        subtitle:
          'Clock in at the property, photograph the boiler and the work, and close a sealed job report. The record shows when the engineer was there and for how long, and the hours export to Excel or CSV for payroll.',
      },
      regional_context: gbContext(
        'For a heating installer, that is the time on site for each service or installation, kept next to the boiler photos.',
      ),
    },
  },
  impianti: {
    'en-gb': {
      meta: {
        title: 'Job Tracking for UK Installers: HVAC, Electrical, Plumbing',
        description:
          'Document jobs, hours and materials for UK installers, with position at each clock-in and proof of service to show when a customer disputes a visit.',
      },
      hero: {
        badge: 'App for UK installers, engineers and service teams',
        h1_line1: 'Every job documented,',
        h1_line2: 'every hour recorded across your service area.',
        subtitle:
          'GeoTapp records the clock-in with position, the photos and the materials for each job, so a service team spread across a region has one record per job and per worker, ready to export for payroll and invoicing.',
      },
      regional_context: gbContext(
        'For installers covering a wide area, that is one record per job that shows when the team arrived and left.',
      ),
    },
  },
  manutenzione: {
    'en-gb': {
      meta: {
        title: 'Maintenance Team App for UK Contractors | GeoTapp',
        description:
          'Manage maintenance crews: jobs, shifts and proof of service, with position at each clock-in and a full history per client site. Try GeoTapp free.',
      },
      hero: {
        badge: 'App for UK maintenance teams',
        h1_line1: 'Your maintenance crew,',
        h1_line2: 'every visit documented.',
        subtitle:
          'Planned and reactive visits get a clock-in with position, photos and a sealed report. The history of every client site is in one place, so you can answer a query about a visit from the record instead of from memory.',
      },
      regional_context: gbContext(
        'For a maintenance contractor, that is a visit history per site that shows who attended and when.',
      ),
    },
  },
  edilizia: {
    'en-gb': {
      meta: {
        title: 'Construction Site Attendance App for UK Contractors | GeoTapp',
        description:
          'Record who was on site and when, with GPS clock-ins, sealed records and automated reports for UK contractors. Built to stay within UK GDPR.',
      },
      hero: {
        badge: 'App for UK construction companies and building sites',
        h1_line1: 'Your site documented,',
        h1_line2: 'clock-in by clock-in, whoever asks.',
        subtitle:
          'Gangs clock in on site with the position recorded at that moment. The site manager sees who is on site and when they arrived, and the sealed records and reports answer the main contractor or the client without anyone reconstructing the day.',
      },
      regional_context: gbContext(
        'For a building contractor, that is the attendance of each worker on each site, with the time they arrived and left.',
      ),
    },
  },
  sicurezza: {
    'en-gb': {
      meta: {
        title: 'Security Officer Shift Software for UK Companies | GeoTapp',
        description:
          'Security company software: shifts with position at each clock-in, documented checkpoints and photo evidence. Built to stay within UK GDPR. Try free for 14 days.',
      },
      hero: {
        badge: 'For UK security officers, stewarding and events security',
        h1_line1: 'Attendance and shift records',
        h1_line2: 'for security officers and stewarding teams',
        subtitle:
          'Each officer clocks in at the site with the position recorded at that moment, and checkpoints and photos are documented during the shift. When a client says a site was not covered, the record shows who was there and for how long.',
      },
      regional_context: gbContext(
        'For a guarding contractor, that is the record of attendance at each post, which is the evidence a client asks for at contract review.',
      ),
    },
  },
};


/**
 * Le altre quattro regioni (en-us, en-au, en-ie, en-ca) si costruiscono da una
 * configurazione per paese (lessico, norma) e da un modello per settore, cosi' il
 * lessico resta coerente tra le dieci pagine. en-gb sopra e' scritta a mano.
 *
 * FONTI
 *  - en-us: Department of Labor, Fact Sheet #21 (29 CFR Part 516): payroll
 *    records almeno 3 anni, time cards e orari di lavoro almeno 2 anni (letto
 *    21/10/2026).
 *  - en-ca: Ontario, Your guide to the Employment Standards Act, "Record
 *    keeping": date, orari e ore lavorate conservati 3 anni dopo il giorno o la
 *    settimana di lavoro (letto 21/10/2026). OPC: sezione "Privacy in the
 *    Workplace" (letta 21/10/2026).
 *  - en-ie: Organisation of Working Time Act 1997 s.25 (irishstatutebook.ie, letto
 *    21/10/2026): registri conservati almeno 3 anni. DPC: guida sul tracking dei
 *    veicoli, citata da Law Society Gazette (marzo 2026), fonte secondaria.
 *  - en-au: Fair Work Act 2009 s.535 e Fair Work Regulations 2009. 🔴 Solo fonti
 *    secondarie (blog e studi): niente anni di conservazione nel testo finche'
 *    non si legge fairwork.gov.au o la legge.
 */
interface RegionConfig {
  adj: string;
  customer: string;
  crew: string;
  janitorial: string;
  organized: string;
  ctxTitle: string;
  ctxBase: string[];
}

const SHARED_PRODUCT =
  'GeoTapp records the start, the breaks and the finish of each shift, with the position at the moment of each clock-in and nothing in between. That is a record of the working day, not a trace of where a worker has been.';

const REGION_CONFIG: Partial<Record<AppLocale, RegionConfig>> = {
  'en-us': {
    adj: 'US',
    customer: 'customer',
    crew: 'crews',
    janitorial: 'janitorial',
    organized: 'organized',
    ctxTitle: 'Time and payroll records under the FLSA',
    ctxBase: [
      'Under the Fair Labor Standards Act, employers keep payroll records for at least three years, and the time cards and work schedules behind the wage calculations for at least two years (29 CFR Part 516, as summarized in Department of Labor Fact Sheet #21).',
      SHARED_PRODUCT + ' State rules on meal breaks, overtime and wage orders differ and stay with your payroll provider or advisor.',
    ],
  },
  'en-au': {
    adj: 'Australian',
    customer: 'client',
    crew: 'crews',
    janitorial: 'cleaning',
    organized: 'organised',
    ctxTitle: 'Employee records under the Fair Work Act',
    ctxBase: [
      'The Fair Work Act 2009 requires employers to make and keep employee records, and the Fair Work Regulations 2009 set out what those records must contain.',
      SHARED_PRODUCT + ' Award rates, penalty rates and allowances stay with your payroll provider or adviser.',
    ],
  },
  'en-ie': {
    adj: 'Irish',
    customer: 'customer',
    crew: 'crews',
    janitorial: 'cleaning',
    organized: 'organised',
    ctxTitle: 'Working time records in Ireland',
    ctxBase: [
      'Section 25 of the Organisation of Working Time Act 1997 requires employers to keep records showing whether the Act is being complied with, and to keep them for at least three years.',
      SHARED_PRODUCT + ' The Data Protection Commission has said that tracking employees in vehicles carries a high risk to their privacy and should be limited to working hours.',
    ],
  },
  'en-ca': {
    adj: 'Canadian',
    customer: 'customer',
    crew: 'crews',
    janitorial: 'janitorial',
    organized: 'organized',
    ctxTitle: 'Hours-of-work records in Canada',
    ctxBase: [
      'Employment standards are set by each province and territory, and by the federal government for federally regulated employers. In Ontario, for example, an employer keeps records of dates, start and finish times and hours worked for three years after the day or week of work.',
      SHARED_PRODUCT + ' The Office of the Privacy Commissioner of Canada publishes guidance on privacy in the workplace. Rules on hours, breaks and holiday pay differ by province and stay with your payroll provider or adviser.',
    ],
  },
};

interface SectorTemplate {
  meta: (r: RegionConfig) => { title: string; description: string };
  hero: (r: RegionConfig) => SettoreContent['hero'] extends infer H ? Partial<H> : never;
  ctx: (r: RegionConfig) => string;
}

const SECTOR_TEMPLATES: Record<SettoreSlug, SectorTemplate> = {
  pulizie: {
    meta: (r) => ({
      title: `GPS Clock-ins for ${r.adj} ${r.janitorial === 'janitorial' ? 'Janitorial' : 'Cleaning'} Contractors | GeoTapp`,
      description: `Clock-ins with position and photo proof for ${r.adj} ${r.janitorial} contractors. Show a ${r.customer} who was on site and when, with a time record that holds up in a dispute.`,
    }),
    hero: (r) => ({
      badge: `GPS clock-ins for ${r.adj} ${r.janitorial} contractors and facility services`,
      h1_line1: `${r.janitorial === 'janitorial' ? 'Janitorial' : 'Cleaning'} contractor software:`,
      h1_line2: `time records and photo proof for every ${r.customer} site`,
      subtitle: `GeoTapp connects Flow and TimeTracker for ${r.janitorial} teams spread across several ${r.customer} sites. Cleaners clock in from their smartphones with the position recorded at that moment, and the office sees who clocked in where and when, with photo proof attached. A record to answer a ${r.customer} dispute, and hours and breaks ready for your payroll provider.`,
    }),
    ctx: (r) => `For a ${r.janitorial} contractor, that is the answer to a ${r.customer} who says a site was not covered: who clocked in, where, and for how long.`,
  },
  'impresa-di-pulizie': {
    meta: (r) => ({
      title: `${r.janitorial === 'janitorial' ? 'Janitorial' : 'Cleaning'} Business App for ${r.adj} Contractors | GeoTapp`,
      description: `Manage crews, shifts and attendance for a ${r.adj} ${r.janitorial} business, with position at each clock-in and proof of service to show when a ${r.customer} disputes a visit.`,
    }),
    hero: (r) => ({
      badge: `App for ${r.adj} ${r.janitorial} businesses and facility services`,
      h1_line1: `Your ${r.janitorial} business,`,
      h1_line2: 'run clock-in by clock-in across every contract.',
      subtitle: `Run crews, shifts and attendance from one place. Cleaners clock in on site with the position recorded at that moment, and when a ${r.customer} disputes a visit you have a time and a place to show, with the photos taken during the job.`,
    }),
    ctx: () => 'For a business with several contracts, that is one record per worker and per site that you can export to Excel or CSV for your payroll provider.',
  },
  installatori: {
    meta: (r) => ({
      title: `Job Reports for ${r.adj} Electricians and Installers | GeoTapp`,
      description: `Job reports with position and photos, sealed so any change shows, for ${r.adj} electricians, plumbers and installers. Try GeoTapp free for 14 days.`,
    }),
    hero: (r) => ({
      badge: `For ${r.adj} electricians, plumbers and field maintenance teams`,
      h1_line1: `Field maintenance, ${r.organized}:`,
      h1_line2: 'jobs, timesheets and proof for every service call',
      subtitle: `GeoTapp connects Flow and TimeTracker for technicians who work alone or in pairs across many addresses a day. Each job gets a clock-in with position, photos and a sealed report, and the office sees the day as it happens, without calling anyone.`,
    }),
    ctx: (r) => `For technicians on service calls, that is the record of when the job started and finished at each address, which is what a ${r.customer} who says nobody came will be shown.`,
  },
  elettricisti: {
    meta: (r) => ({
      title: `Time Tracking for ${r.adj} Electricians | Job Reports | GeoTapp`,
      description: `Clock-ins with position, job reports and installation photos for ${r.adj} electrical contractors. Show the report instead of arguing. Try free for 14 days.`,
    }),
    hero: (r) => ({
      badge: `Time tracking and job reports for ${r.adj} electricians and electrical contractors`,
      h1_line1: 'App for electricians:',
      h1_line2: `clock-ins, job reports and fewer disputes with the ${r.customer}.`,
      subtitle: 'Your electricians clock in on site and the position is recorded at that moment. Photos of the installation and the job report are sealed so that any later change is detectable, and the hours export to Excel or CSV for payroll.',
    }),
    ctx: () => 'For an electrical contractor, that is the time on site for each job, next to the photos of the installation and the job report.',
  },
  idraulici: {
    meta: (r) => ({
      title: `Time Tracking for ${r.adj} Plumbers and HVAC Techs | GeoTapp`,
      description: `Record plumber and HVAC hours job by job, with position and photo proof at each clock-in, and export them to Excel or CSV for your payroll provider.`,
    }),
    hero: (r) => ({
      badge: `App for ${r.adj} plumbers, HVAC technicians and heating engineers`,
      h1_line1: 'App for plumbers and HVAC technicians:',
      h1_line2: 'job reports, photo evidence and fewer disputes.',
      subtitle: 'Your technicians clock in at the property with the position recorded at that moment, attach photos of the work and close a sealed job report. The office sees who is where without phone calls, and the hours export to Excel or CSV for your payroll provider.',
    }),
    ctx: (r) => `For a plumbing or HVAC firm, that is the proof of a visit and its length when a ${r.customer} says the technician never turned up.`,
  },
  termoidraulici: {
    meta: (r) => ({
      title: `Job Reports for ${r.adj} Heating Installers | GeoTapp`,
      description: 'Job reports with position at clock-in and boiler photos, sealed so any change shows. Something to show the customer who says nobody came. Try free for 14 days.',
    }),
    hero: (r) => ({
      badge: `App for ${r.adj} plumbers and heating installers`,
      h1_line1: 'App for heating installers:',
      h1_line2: 'job reports, photo evidence and fewer disputes.',
      subtitle: 'Clock in at the property, photograph the boiler and the work, and close a sealed job report. The record shows when the technician was there and for how long, and the hours export to Excel or CSV for payroll.',
    }),
    ctx: () => 'For a heating installer, that is the time on site for each service or installation, kept next to the boiler photos.',
  },
  impianti: {
    meta: (r) => ({
      title: `Job Tracking for ${r.adj} Installers: HVAC, Electrical, Plumbing`,
      description: `Document jobs, hours and materials for ${r.adj} installers, with position at each clock-in and proof of service to show when a ${r.customer} disputes a visit.`,
    }),
    hero: (r) => ({
      badge: `App for ${r.adj} installers, technicians and service teams`,
      h1_line1: 'Every job documented,',
      h1_line2: 'every hour recorded across your service area.',
      subtitle: 'GeoTapp records the clock-in with position, the photos and the materials for each job, so a service team spread across a region has one record per job and per worker, ready to export for payroll and invoicing.',
    }),
    ctx: () => 'For installers covering a wide area, that is one record per job that shows when the team arrived and left.',
  },
  manutenzione: {
    meta: (r) => ({
      title: `Maintenance Team App for ${r.adj} Contractors | GeoTapp`,
      description: 'Manage maintenance crews: jobs, shifts and proof of service, with position at each clock-in and a full history per client site. Try GeoTapp free.',
    }),
    hero: (r) => ({
      badge: `App for ${r.adj} maintenance teams`,
      h1_line1: 'Your maintenance crew,',
      h1_line2: 'every visit documented.',
      subtitle: 'Planned and reactive visits get a clock-in with position, photos and a sealed report. The history of every client site is in one place, so you can answer a query about a visit from the record instead of from memory.',
    }),
    ctx: () => 'For a maintenance contractor, that is a visit history per site that shows who attended and when.',
  },
  edilizia: {
    meta: (r) => ({
      title: `Construction Site Attendance App for ${r.adj} Contractors | GeoTapp`,
      description: `Record who was on site and when, with GPS clock-ins, sealed records and automated reports for ${r.adj} contractors. Built to stay within data protection rules.`,
    }),
    hero: (r) => ({
      badge: `App for ${r.adj} construction companies and building sites`,
      h1_line1: 'Your site documented,',
      h1_line2: 'clock-in by clock-in, whoever asks.',
      subtitle: 'Crews clock in on site with the position recorded at that moment. The site manager sees who is on site and when they arrived, and the sealed records and reports answer the general contractor or the owner without anyone reconstructing the day.',
    }),
    ctx: () => 'For a building contractor, that is the attendance of each worker on each site, with the time they arrived and left.',
  },
  sicurezza: {
    meta: (r) => ({
      title: `Security Guard Shift Software for ${r.adj} Companies | GeoTapp`,
      description: 'Security company software: shifts with position at each clock-in, documented checkpoints and photo evidence. Try free for 14 days.',
    }),
    hero: (r) => ({
      badge: `For ${r.adj} security guards, stewarding and events security`,
      h1_line1: 'Attendance and shift records',
      h1_line2: 'for security guards and event teams',
      subtitle: `Each guard clocks in at the site with the position recorded at that moment, and checkpoints and photos are documented during the shift. When a ${r.customer} says a site was not covered, the record shows who was there and for how long.`,
    }),
    ctx: () => 'For a guarding contractor, that is the record of attendance at each post, which is the evidence a client asks for at contract review.',
  },
};

for (const [locale, cfg] of Object.entries(REGION_CONFIG) as Array<[AppLocale, RegionConfig]>) {
  for (const slug of Object.keys(SECTOR_TEMPLATES) as SettoreSlug[]) {
    const t = SECTOR_TEMPLATES[slug];
    const bucket = (REGIONAL_OVERRIDES[slug] ??= {});
    // idraulici en-us: il meta di REGIONAL_META (idraulici/regional-meta.ts) resta, e'
    // quello che sta a posizione 3-4 su `plumbing technician app with gps`.
    const keepMeta = slug === 'idraulici' && locale === 'en-us';
    bucket[locale] = {
      ...(keepMeta ? {} : { meta: t.meta(cfg) }),
      hero: t.hero(cfg),
      regional_context: { title: cfg.ctxTitle, paras: [...cfg.ctxBase, t.ctx(cfg)] },
    };
  }
}

/** Applica l'override regionale (se esiste) al contenuto gia' localizzato. */
export function applyRegionalOverride(
  slug: SettoreSlug,
  locale: AppLocale,
  content: SettoreContent,
): SettoreContent {
  const o = REGIONAL_OVERRIDES[slug]?.[locale];
  if (!o) return content;
  return {
    ...content,
    meta: { ...content.meta, ...o.meta },
    hero: { ...content.hero, ...o.hero },
    ...(o.regional_context ? { regional_context: o.regional_context } : {}),
  };
}
