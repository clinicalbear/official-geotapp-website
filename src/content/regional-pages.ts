import type { Metadata } from 'next';
import { localizeEnglishDeep } from '@/lib/i18n/en-spelling';

/**
 * Testi regionali di home, prodotti, confronti e risorse per le cinque varianti
 * inglesi (en-gb, en-us, en-au, en-ie, en-ca). Seguito di regional-overrides.ts
 * (pagine di settore), stesso motivo e stesso criterio falsificabile: a sei
 * settimane dal deploy (02/12/2026) le pagine regionali "Duplicate, Google chose
 * different canonical" devono essere meno di 320 su 445.
 *
 * Cosa cambia: per ogni pagina un blocco con la norma del paese, il lessico del
 * paese e il modo in cui GeoTapp si lega a quella norma; per la home anche title,
 * description e una FAQ del paese. Il resto della pagina resta condiviso.
 *
 * Regola: nessuna norma entra qui se non e' stata letta su una fonte.
 * FONTI (lette il 21/10/2026)
 *  - gb: Working Time Regulations 1998 reg. 9 (legislation.gov.uk); ICO, guida
 *    "Monitoring workers".
 *  - us: FLSA, 29 CFR Part 516 (Department of Labor, Fact Sheet #21).
 *  - ie: Organisation of Working Time Act 1997 s.25 (irishstatutebook.ie).
 *  - ca: Ontario Employment Standards Act, tre anni di registri; Office of the
 *    Privacy Commissioner of Canada, "Privacy in the workplace".
 *  - au: Fair Work Act 2009 s.535 e Fair Work Regulations 2009; anni di
 *    conservazione (sette) dalla pagina "Record keeping" del Fair Work
 *    Ombudsman, letta tramite ricerca, non aperta direttamente (il sito
 *    fairwork.gov.au va in timeout da qui). Esenzione dei registri dei dipendenti
 *    dalla Privacy Act 1988: guida OAIC "Employee records exemption".
 *  Le frasi sul regime privacy di ogni paese (UK GDPR, GDPR, Privacy Act,
 *  PIPEDA) sono descrizioni generali, senza articoli o cifre.
 */

export const REGION_LOCALES = ['en-gb', 'en-us', 'en-au', 'en-ie', 'en-ca'] as const;
export type RegionLocale = (typeof REGION_LOCALES)[number];

export function isRegionLocale(locale: string): locale is RegionLocale {
  return (REGION_LOCALES as readonly string[]).includes(locale);
}

export interface RegionalBlock {
  title: string;
  paras: string[];
}

interface Region {
  place: string;
  adj: string;
  clientWord: string; // chi firma il lavoro: gestore dello stabile, committente
  payrollWord: string;
  lawTitle: string;
  law: string;
  privacy: string;
  retention: string; // "per quanto tempo": frase breve, per titoli e FAQ
}

const REGIONS: Record<RegionLocale, Region> = {
  'en-gb': {
    place: 'Great Britain',
    adj: 'British',
    clientWord: 'managing agent or facilities manager',
    payrollWord: 'payroll bureau or accountant',
    lawTitle: 'Working time records in Great Britain',
    law: 'Under regulation 9 of the Working Time Regulations 1998, an employer must keep records adequate to show whether the working time limits are being complied with, and keep them for two years. The regulations leave the format to the employer.',
    privacy:
      'Data protection is the UK GDPR and the Data Protection Act 2018, regulated by the ICO, which publishes guidance on monitoring workers.',
    retention: 'two years',
  },
  'en-us': {
    place: 'the United States',
    adj: 'US',
    clientWord: 'property manager or customer',
    payrollWord: 'payroll provider or accountant',
    lawTitle: 'Time and payroll records under the FLSA',
    law: 'Under the Fair Labor Standards Act, employers keep payroll records for at least three years, and the time cards and work schedules behind the wage calculations for at least two years (29 CFR Part 516, as summarized in Department of Labor Fact Sheet #21).',
    privacy:
      'There is no single federal privacy law for employee data, so the FLSA sets the record-keeping and state law sets most of the rules on notice and monitoring.',
    retention: 'three years for payroll records and two for time cards',
  },
  'en-au': {
    place: 'Australia',
    adj: 'Australian',
    clientWord: 'strata manager or client',
    payrollWord: 'payroll provider or adviser',
    lawTitle: 'Employee records under the Fair Work Act',
    law: 'The Fair Work Act 2009 requires employers to make and keep employee records, and the Fair Work Regulations 2009 set out what those records must contain. The Fair Work Ombudsman says time and wage records are kept for seven years.',
    privacy:
      'The Privacy Act 1988 exempts much of what a private employer does with employee records, according to the OAIC, but only for handling tied to the employment relationship, and some states and territories have their own workplace surveillance laws.',
    retention: 'seven years',
  },
  'en-ie': {
    place: 'Ireland',
    adj: 'Irish',
    clientWord: 'managing agent or facilities manager',
    payrollWord: 'payroll provider or accountant',
    lawTitle: 'Working time records in Ireland',
    law: 'Section 25 of the Organisation of Working Time Act 1997 requires employers to keep records showing whether the Act is being complied with, and to keep them for at least three years.',
    privacy:
      'The GDPR applies directly and the Data Protection Commission regulates it; the Commission has said that tracking employees in vehicles carries a high risk to their privacy and should be limited to working hours.',
    retention: 'three years',
  },
  'en-ca': {
    place: 'Canada',
    adj: 'Canadian',
    clientWord: 'property manager or customer',
    payrollWord: 'payroll provider or accountant',
    lawTitle: 'Hours-of-work records in Canada',
    law: 'Employment standards are set by each province and territory, and by the federal government for federally regulated employers. In Ontario, for example, an employer keeps records of dates, start and finish times and hours worked for three years after the day or week of work.',
    privacy:
      'Privacy law depends on where the employer sits: federal law covers federally regulated employers and some provinces have their own private-sector laws. The Office of the Privacy Commissioner of Canada publishes guidance on privacy in the workplace.',
    retention: 'three years in Ontario',
  },
};

const SHARED_PRODUCT =
  'GeoTapp records the start, the breaks and the finish of each shift, with the position at the moment of each clock-in and nothing in between. That is a record of the working day, not a trace of where a worker has been.';

function fin(locale: RegionLocale, b: RegionalBlock): RegionalBlock {
  return localizeEnglishDeep(b, locale);
}

/* ───────────────────────── Home ───────────────────────── */

export const REGIONAL_HOME_META: Record<RegionLocale, { title: string; description: string }> = {
  'en-gb': {
    title: 'GPS Timesheet Software for UK Field Teams | GeoTapp',
    description:
      'Clock-in with position and photos for UK cleaning, security and maintenance crews, sealed in a report your customer can check. Free for 14 days.',
  },
  'en-us': {
    title: 'GPS Time Tracking for US Field Crews | GeoTapp',
    description:
      'Clock-in with GPS position and photos for US janitorial, security and trade crews, sealed in a report your customer can verify. Free for 14 days.',
  },
  'en-au': {
    title: 'GPS Timesheets for Australian Field Teams | GeoTapp',
    description:
      'Clock-in with position and photos for Australian cleaning, security and trade crews, sealed in a report your client can check. Free for 14 days.',
  },
  'en-ie': {
    title: 'GPS Time Records for Irish Field Teams | GeoTapp',
    description:
      'Clock-in with position and photos for Irish cleaning, security and maintenance crews, sealed in a report your customer can check. Free for 14 days.',
  },
  'en-ca': {
    title: 'GPS Time Tracking for Canadian Field Crews | GeoTapp',
    description:
      'Clock-in with GPS position and photos for Canadian janitorial, security and trade crews, sealed in a report your customer can verify. Free for 14 days.',
  },
};

export function regionalHomeBlock(locale: RegionLocale): RegionalBlock {
  const r = REGIONS[locale];
  return fin(locale, {
    title: `Built for ${r.adj} field teams`,
    paras: [
      r.law,
      `${SHARED_PRODUCT} The record that matters to your ${r.clientWord} is the same one: when the crew arrived, when it left, and a sealed report they can check without an account.`,
      r.privacy,
    ],
  });
}

export function regionalHomeFaq(locale: RegionLocale): object {
  const r = REGIONS[locale];
  const items = [
    {
      q: `What records does an employer in ${r.place} have to keep, and does GeoTapp produce them?`,
      a: `${r.law} GeoTapp records start, breaks and finish with the position at each clock-in and exports the result for your ${r.payrollWord}. It produces the time record. Which records your business is required to keep stays a question for your adviser.`,
    },
    {
      q: `Does GeoTapp track ${r.adj} workers all day?`,
      a: `No. ${SHARED_PRODUCT} ${r.privacy}`,
    },
    {
      q: `Can I try GeoTapp with my own crew in ${r.place}?`,
      a: `Yes. The trial lasts 14 days and no credit card is required. Prices are shown in your currency and exclude VAT or sales tax. Verifier, the tool your ${r.clientWord} uses to check a report, is free.`,
    },
  ];
  return localizeEnglishDeep(
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map((it) => ({
        '@type': 'Question',
        name: it.q,
        acceptedAnswer: { '@type': 'Answer', text: it.a },
      })),
    },
    locale,
  );
}

/* ───────────────────────── Prodotti ───────────────────────── */

export type ProductKey = 'flow' | 'timetracker' | 'verifier';

export function regionalProductBlock(product: ProductKey, locale: RegionLocale): RegionalBlock {
  const r = REGIONS[locale];
  const body: Record<ProductKey, [string, string[]]> = {
    flow: [
      `Flow for ${r.adj} offices`,
      [
        `Flow is the office side: jobs, rotas, sites and the day as it happens. The export that goes to your ${r.payrollWord} is built from the same clock-ins, so the hours paid and the hours recorded come from one place.`,
        r.law,
      ],
    ],
    timetracker: [
      `TimeTracker on the phones of ${r.adj} crews`,
      [
        `TimeTracker is the app the crew carries. One tap at the start, at each break and at the finish; the position is read at that moment and the photo is taken inside the app. If there is no signal on site, the clock-in waits on the phone and goes out when the signal returns, with the time at which it was made.`,
        r.privacy,
      ],
    ],
    verifier: [
      `What your ${r.clientWord} sees`,
      [
        `Verifier is the free tool your ${r.clientWord} uses to check a report. They open the link, the tool recalculates the fingerprints and says whether the document is intact. No account, and no access to yours.`,
        `That is the answer to the call that begins with "nobody came". The record of ${r.adj} jobs is not a screenshot you send, it is a report they can check themselves. ${r.law}`,
      ],
    ],
  };
  const [title, paras] = body[product];
  return fin(locale, { title, paras });
}

/* ───────────────────────── Confronti ───────────────────────── */

export function regionalCompareBlock(competitor: string, locale: RegionLocale): RegionalBlock {
  const r = REGIONS[locale];
  return fin(locale, {
    title: `${competitor} or GeoTapp for a ${r.adj} team`,
    paras: [
      r.law,
      `Whichever tool you pick, four questions matter more in ${r.place} than any feature list. Is the position recorded only at clock-in, or all day? Can your ${r.payrollWord} take the hours as a file? Can a customer or ${r.clientWord} check a record without an account? Where is the data stored, and who can read it?`,
      `${SHARED_PRODUCT} ${r.privacy}`,
      `Compare on a real week of your own crew, not on a demo: the trial lasts 14 days and needs no credit card.`,
    ],
  });
}

/* ───────────────────────── Risorse ───────────────────────── */

export function regionalCountryBlock(countryName: string, locale: RegionLocale): RegionalBlock {
  const r = REGIONS[locale];
  return fin(locale, {
    title: `If your ${r.adj} business also works in ${countryName}`,
    paras: [
      `This page describes the rules in ${countryName}. They apply to the workers who are employed or posted there, whatever the nationality of the employer. A business based in ${r.place} that sends a crew across the border is bound by the local rules for that crew, and by its own at home.`,
      `At home the record-keeping rule is this one. ${r.law}`,
      `Keep one clock-in method for both: ${SHARED_PRODUCT.charAt(0).toLowerCase()}${SHARED_PRODUCT.slice(1)} Check the notice and consultation steps for ${countryName} with a local adviser before the crew starts.`,
    ],
  });
}

export type ToolKey =
  | 'hub'
  | 'resources-index'
  | 'surveillance-index'
  | 'penalties'
  | 'notice-generator'
  | 'attendance-without-tracking'
  | 'data-check'
  | 'retention'
  | 'dossier';

const TOOL_LEAD: Record<ToolKey, (r: Region) => string> = {
  hub: (r) => `These guides cover the European countries one by one. For a ${r.adj} employer they matter in two cases: a crew sent to work in one of those countries, and a ${r.clientWord} who asks how your records compare.`,
  'resources-index': (r) => `This is the index of the guides and tools below. For a ${r.adj} employer the sensible order is the rule at home first, then the country guides for any crew sent abroad.`,
  'surveillance-index': (r) => `The index ranks 39 European countries by how strict their rules on worker monitoring are. Use it when work crosses a border, and read the ${r.adj} rule below as the starting point at home.`,
  penalties: (r) => `The calculator shows the fines issued for GPS monitoring of workers, country by country, across Europe. Use it for the countries your crew works in; for ${r.place}, the regulator named below publishes its own guidance.`,
  'notice-generator': (r) => `The generator writes the notice that tells workers what is recorded and when. In ${r.place} the reason to give that notice is the same: workers should know that the position is read at clock-in and not in between.`,
  'attendance-without-tracking': (r) => `This guide explains how to record attendance without following people. It fits the way ${r.adj} regulators describe proportionate monitoring: record what the job needs, at the moments the job needs it.`,
  'data-check': (r) => `The self-check asks how your business handles employee data. Answer it for the ${r.adj} side of the business and keep the result with your records.`,
  retention: (r) => `The retention generator drafts a schedule for each type of record. For ${r.place} the figure to start from is the period the employment rule sets: ${r.retention}.`,
  dossier: (r) => `The compliance dossier collects what a customer or an inspector asks to see. In ${r.place} that begins with the time records and the notice given to workers.`,
};

export function regionalToolBlock(tool: ToolKey, locale: RegionLocale): RegionalBlock {
  const r = REGIONS[locale];
  return fin(locale, {
    title: `What this means for ${r.adj} employers`,
    paras: [TOOL_LEAD[tool](r), r.law, r.privacy],
  });
}

/* ───────────────────── Altre pagine ───────────────────── */

export type PageKey = 'sector-index' | 'pricing' | 'what-is' | 'roi' | 'about' | 'compare-index' | 'guide' | 'contact';

export function regionalPageBlock(page: PageKey, locale: RegionLocale): RegionalBlock {
  const r = REGIONS[locale];
  const body: Record<PageKey, [string, string[]]> = {
    'sector-index': [
      `Field work in ${r.place}, sector by sector`,
      [
        `The sectors below share one problem: someone has to show that the work was done at the address, on the day, by the crew that was booked. In ${r.place} the employer's own record starts from this rule. ${r.law}`,
        `Pick the sector closest to yours. Each page shows what GeoTapp records for that kind of crew and what the report looks like for your ${r.clientWord}.`,
      ],
    ],
    pricing: [
      `Pricing for ${r.adj} teams`,
      [
        `Flow is the office plan, and TimeTracker adds a seat for every worker who clocks in. Prices are shown in your currency and exclude tax.`,
        `One thing to check before you count seats: ${r.law}`,
      ],
    ],
    'what-is': [
      `GeoTapp in ${r.place}`,
      [
        `GeoTapp is an Italian platform and the software runs the same for any crew. What changes with the country is the rule behind the record: ${r.law}`,
        `${SHARED_PRODUCT} ${r.privacy}`,
      ],
    ],
    roi: [
      `Using the calculator for ${r.place}`,
      [
        `The calculator takes your sector and the number of operators and estimates the yearly saving in paperwork, disputes and phone coordination. It is an estimate and not a quote, so set it against what it already costs you to keep the records the rule below asks for.`,
        r.law,
      ],
    ],
    about: [
      `GeoTapp for ${r.adj} companies`,
      [
        `The platform is built and run from Italy by Michele Angelo Petraroli. Companies in ${r.place} use it in English, with prices in their own currency, and the same sealed report goes to their ${r.clientWord}.`,
        r.privacy,
      ],
    ],
    'compare-index': [
      `Choosing a time tool in ${r.place}`,
      [
        `Most of the tools in this list were built around the timesheet. GeoTapp was built around the report that goes to the customer. Which one fits depends on who asks you to prove the work: your ${r.payrollWord}, or your ${r.clientWord}.`,
        r.law,
      ],
    ],
    guide: [
      `Setting up GeoTapp for a ${r.adj} crew`,
      [
        `Before the first shift, tell the crew what is recorded and when. ${r.privacy}`,
        `Then invite them with a group code, run one week, and open the report your ${r.clientWord} would see.`,
      ],
    ],
    contact: [
      `Writing from ${r.place}`,
      [
        `Tell us the size of the crew, the type of work and what your ${r.clientWord} asks you to show. We answer by email, in English, and the reply comes from a person who has read your message.`,
      ],
    ],
  };
  const [title, paras] = body[page];
  return fin(locale, { title, paras });
}

const SECTOR_QUESTION: Record<string, string> = {
  pulizie: 'which site, which shift, which worker, and when the crew left',
  installatori: 'when the engineer arrived at each address and what was left behind',
  sicurezza: 'which post was covered, by whom, and when the round was done',
};

export function regionalSectorGuidesBlock(settore: string, locale: RegionLocale): RegionalBlock {
  const r = REGIONS[locale];
  const q = SECTOR_QUESTION[settore] ?? 'where the crew was, and when';
  return fin(locale, {
    title: `Guides for ${r.adj} teams`,
    paras: [
      `The articles below are written for companies in this sector. For a ${r.adj} one, the question a customer asks is always the same: ${q}.`,
      r.law,
    ],
  });
}

/* ───────────────────── Title e description ───────────────────── */

const META_TAG: Record<RegionLocale, { short: string; adj: string }> = {
  'en-gb': { short: 'UK', adj: 'UK' },
  'en-us': { short: 'US', adj: 'US' },
  'en-au': { short: 'Australia', adj: 'Australian' },
  'en-ie': { short: 'Ireland', adj: 'Irish' },
  'en-ca': { short: 'Canada', adj: 'Canadian' },
};

const DESC_MAX = 160;

function tagTitle(title: string, short: string): string {
  const m = title.match(/^(.*?)(\s[|\-]\s*GeoTapp)$/);
  return m ? `${m[1]} (${short})${m[2]}` : `${title} (${short})`;
}

/**
 * Title e description diversi per le cinque varianti inglesi sulle pagine che
 * condividono il testo con /en/. Il title prende il paese fra parentesi prima del
 * marchio; la description una frase sul paese quando ci sta nei 160 caratteri.
 * Si applica sopra i metadati gia' calcolati dalla pagina, cosi' non cambia la
 * logica di nessuna. Le altre lingue passano senza modifiche.
 */
export function applyRegionalMeta(md: Metadata, locale: string): Metadata {
  if (!isRegionLocale(locale)) return md;
  const tag = META_TAG[locale];
  const raw = md.title;
  const oldTitle =
    typeof raw === 'string' ? raw : raw && 'absolute' in raw && raw.absolute ? raw.absolute : raw && 'default' in raw ? raw.default : null;
  const out: Metadata = { ...md };
  let newTitle: string | null = null;
  if (oldTitle) {
    newTitle = tagTitle(oldTitle, tag.short);
    out.title = typeof raw === 'string' ? newTitle : raw && 'absolute' in raw ? { absolute: newTitle } : { ...(raw as object), default: newTitle } as Metadata['title'];
  }
  let newDesc: string | undefined;
  if (typeof md.description === 'string') {
    const add = ` For ${tag.adj} field teams.`;
    newDesc = md.description.length + add.length <= DESC_MAX ? md.description + add : md.description;
    out.description = newDesc;
  }
  if (md.openGraph) out.openGraph = { ...md.openGraph, ...(newTitle ? { title: newTitle } : {}), ...(newDesc ? { description: newDesc } : {}) } as Metadata['openGraph'];
  if (md.twitter) out.twitter = { ...md.twitter, ...(newTitle ? { title: newTitle } : {}), ...(newDesc ? { description: newDesc } : {}) } as Metadata['twitter'];
  return out;
}
