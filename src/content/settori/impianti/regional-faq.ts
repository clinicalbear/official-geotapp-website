import type { AppLocale } from '@/lib/i18n/config';

export interface RegionalFaqItem {
  q: string;
  a: string;
}

export const REGIONAL_FAQ_TITLE: Partial<Record<AppLocale, string>> = {
  'en-us': 'Regional compliance',
  'en-gb': 'Regional compliance',
  'en-au': 'Regional compliance',
  'en-ca': 'Regional compliance',
  'en-ie': 'Regional compliance',
};

export const REGIONAL_FAQ: Partial<Record<AppLocale, RegionalFaqItem[]>> = {
  'en-us': [
    {
      q: 'NFPA 70/NFPA 70E electrical-mechanical training trail?',
      a: 'Worker profile holds the qualified-person certification, NFPA 70E arc-flash training and the EPA Section 608 refrigerant handler card where applicable.',
    },
    {
      q: 'Joint Commission/CMS facility-systems inspection records?',
      a: 'Per-job inspection record aligned with Joint Commission Environment of Care standards, with workforce credentialing per facility.',
    },
    {
      q: 'LEED documentation for energy-system commissioning?',
      a: 'Commissioning-agent record per project, with hours-by-task export feeding the LEED Cx documentation pack.',
    },
  ],
  'en-gb': [
    {
      q: 'F-Gas Regulation 2014/SI 2024 record-keeping?',
      a: 'Per-worker F-Gas certificate (Cat I-IV), per-system refrigerant log and annual report, satisfying the Environment Agency audit on fluorinated gas equipment.',
    },
    {
      q: 'Building Safety Act 2022 golden-thread evidence?',
      a: 'For higher-risk buildings, the workforce sign-on, supervisor approval and material-installation record per phase, feeding the safety-case file.',
    },
    {
      q: 'BSRIA commissioning evidence?',
      a: 'Commissioning-agent record, witness-test log and BSRIA guide alignment per system, exportable for client handover.',
    },
  ],
  'en-au': [
    {
      q: 'ARC refrigerant-handling licence tracking?',
      a: 'Per-worker ARC RHL number, work scope, refresher dates and refrigerant-recovery records per job site.',
    },
    {
      q: 'AS 5601 gas installation records?',
      a: 'Type A and Type B gas installation jobs with gas-fitter licence per worker, sign-on per site, and AS 5601 compliance certificate.',
    },
    {
      q: 'WHS Mechanical Services site-visit logs?',
      a: 'Entry, exit, SWMS, electrical-isolation permit and confined-space-entry record per worker, per shift, per site.',
    },
  ],
  'en-ca': [
    {
      q: 'Provincial refrigeration ticket renewal tracking?',
      a: 'Per worker the platform stores province of issue, refrigeration-mechanic certificate and continuing-education credits, with the annual renewal workflow.',
    },
    {
      q: 'TSSA Ontario boiler/pressure-vessel inspection records?',
      a: 'Per-system inspection log feeding the TSSA audit, with worker qualification chain captured per shift.',
    },
    {
      q: 'Indigenous-territory facility-systems consent evidence?',
      a: 'Where work occurs on First Nations land, free-prior-informed-consent record per project, satisfying impact-benefit agreement data clauses.',
    },
  ],
  'en-ie': [
    {
      q: 'RGII Domestic Gas Installer scheme tracking?',
      a: 'Per worker the RGII registration, scope of work and the annual safety inspection record, supporting CER audits.',
    },
    {
      q: 'F-Gas SI 656/2011 (as amended) record-keeping?',
      a: 'Per-worker F-Gas category, per-system refrigerant log and annual report, satisfying EPA-Ireland fluorinated-gas audit.',
    },
    {
      q: 'WRC audit on mechanical contractors?',
      a: 'Combined OWTA 1997 hours, Construction SEO rates (SI 234/2019) where applicable, and on-site safety records, in the inspector\'s preferred audit-pack format.',
    },
  ],
};
