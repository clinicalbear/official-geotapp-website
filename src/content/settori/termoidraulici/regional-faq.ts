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
      q: 'EPA Section 608 + HVAC technician certification tracking?',
      a: 'Per-worker EPA Type I/II/III/Universal certification, NATE certification and the manufacturer-authorised technician records per system.',
    },
    {
      q: 'State HVAC contractor licensing per jurisdiction?',
      a: 'Per-state HVAC licence number (CA C-20, TX TDLR, FL CMC, etc.), bond and insurance evidence, with the annual renewal workflow.',
    },
    {
      q: 'Energy Star/AHRI commissioning records?',
      a: 'Per-system commissioning record aligned to Energy Star and AHRI standards, with the technician sign-off and customer acknowledgement.',
    },
  ],
  'en-gb': [
    {
      q: 'Gas Safe Register and competence-of-engineer tracking?',
      a: 'Per-worker Gas Safe ID, appliance categories, expiry dates and the ACS reassessment workflow at 60/30/14 days before expiry.',
    },
    {
      q: 'F-Gas Regulation Cat I-IV certification?',
      a: 'Per-worker F-Gas category certification, refrigerant-recovery log per system and annual report to the Environment Agency.',
    },
    {
      q: 'MCS (Microgeneration Certification Scheme) heat-pump installer trail?',
      a: 'Per-worker MCS heat-pump installer accreditation, annual ongoing assessment record and the MCS installation reference per job.',
    },
  ],
  'en-au': [
    {
      q: 'ARC Refrigerant Handling Licence per technician?',
      a: 'Per-worker ARC RHL number, scope endorsement and refresher dates, with the per-system refrigerant-recovery log.',
    },
    {
      q: 'AS 5601 gas installation compliance?',
      a: 'Per-job Type A / Type B gas installation record with the gas-fitter licence number and AS 5601 compliance certificate per worker.',
    },
    {
      q: 'AS/NZS 3500 plumbing-overlap compliance?',
      a: 'Where work overlaps plumbing scope, per-installation AS/NZS 3500 record and the supervising-plumber chain captured per shift.',
    },
  ],
  'en-ca': [
    {
      q: 'Provincial gas-fitter ticket and renewal tracking?',
      a: 'Per-worker provincial gas-fitter classification (Class A/B), the apprenticeship/journeyperson chain and the annual renewal workflow.',
    },
    {
      q: 'TSSA Ontario fuels safety record per system?',
      a: 'Per-system TSSA inspection record, with the technician qualification and the customer acknowledgement archive.',
    },
    {
      q: 'CSA B149 natural-gas / propane code compliance?',
      a: 'Per-installation CSA B149.1/.2 compliance record, with the worker\'s authorisation and refresher dates.',
    },
  ],
  'en-ie': [
    {
      q: 'RGII Domestic and Non-Domestic Gas Installer compliance?',
      a: 'Per-worker RGII registration, scope of work (Domestic, Non-Domestic, Commercial) and the annual ongoing-assessment record.',
    },
    {
      q: 'F-Gas SI 656/2011 record-keeping?',
      a: 'Per-worker F-Gas category, per-system refrigerant log and annual report to EPA Ireland, with the per-installation seven-year retention.',
    },
    {
      q: 'Construction SEO heat-and-plumbing rate compliance?',
      a: 'Where applicable, per-worker SEO craft-category rate, travel-time payment and CWPS contribution evidence per shift.',
    },
  ],
};
