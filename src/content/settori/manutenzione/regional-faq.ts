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
      q: 'EPA Section 608 refrigerant handling per technician?',
      a: 'Per-worker EPA Type I/II/III/Universal certification, refrigerant-recovery log per system and annual report submission record.',
    },
    {
      q: 'OSHA 29 CFR 1910 LOTO compliance per maintenance task?',
      a: 'Per-task lockout/tagout assignment, energy-control procedure acknowledgement and authorised-employee certification record.',
    },
    {
      q: 'DOT regulated-maintenance records for transportation assets?',
      a: 'Per-asset maintenance log aligned to FMCSA Part 396, with the technician\'s CDL evidence where applicable.',
    },
  ],
  'en-gb': [
    {
      q: 'PUWER 1998 maintenance-record evidence?',
      a: 'Per-asset inspection and maintenance log aligned to Provision and Use of Work Equipment Regulations 1998, with technician competence per task.',
    },
    {
      q: 'LOLER 1998 lifting-equipment inspection records?',
      a: 'Per-equipment six-monthly/twelve-monthly thorough examination record, with the competent-person ID and report archive.',
    },
    {
      q: 'PAT testing records and IET Code of Practice alignment?',
      a: 'Per-asset PAT test schedule, results log and remedial-action trail, satisfying the Electricity at Work Regulations 1989 audit.',
    },
  ],
  'en-au': [
    {
      q: 'PCBU asset-maintenance evidence under WHS?',
      a: 'Per-asset maintenance log aligned to WHS Act 2011 §27 officer-duty due diligence, with technician competence per task captured.',
    },
    {
      q: 'AS/NZS 3760 in-service safety inspection records?',
      a: 'Per-equipment test schedule, results and tag log aligned to AS/NZS 3760, with the competent-person record per shift.',
    },
    {
      q: 'Heavy Vehicle National Law (HVNL) maintenance records?',
      a: 'Per-asset maintenance log aligned to HVNL chain-of-responsibility, with technician\'s maintenance-management acknowledgement per task.',
    },
  ],
  'en-ca': [
    {
      q: 'CSA Z460 hazardous-energy control records?',
      a: 'Per-task lockout/tagout record aligned to CSA Z460, with authorised-employee certification and provincial OHS regulator audit support.',
    },
    {
      q: 'TSSA Ontario boiler/pressure-system maintenance records?',
      a: 'Per-system inspection and maintenance log feeding the TSSA audit, with the certified worker\'s qualification chain captured per shift.',
    },
    {
      q: 'Federally regulated transport maintenance under CLC Part II?',
      a: 'Per-asset maintenance log aligned to Canada Transportation Act and CLC Part II, with technician\'s competence and refresher dates.',
    },
  ],
  'en-ie': [
    {
      q: 'Safety, Health and Welfare at Work Act 2005 maintenance records?',
      a: 'Per-asset inspection and maintenance log aligned to General Application Regulations 2007 Part 2 (Workplace Equipment), with HSA audit support.',
    },
    {
      q: 'Lifting equipment thorough-examination per LOLER-equivalent?',
      a: 'Per-equipment six-monthly/twelve-monthly examination record, with competent-person ID and report archive, satisfying HSA inspection.',
    },
    {
      q: 'Construction SEO maintenance-package rate compliance?',
      a: 'Where applicable, per-worker SEO craft-category rate and CWPS contribution evidence per maintenance shift.',
    },
  ],
};
