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
      q: 'FLSA and state-specific cleaning-services records?',
      a: 'Per-worker hours per week, overtime computation, meal-break/rest-break compliance (CA §512, NY §162, IL §140) and the seven-year retention window required by IRS and DOL.',
    },
    {
      q: 'OSHA 1910 hazard-communication (bloodborne pathogens) training?',
      a: 'Per-worker HazCom and BBP-29 CFR 1910.1030 training records, with refresher dates and PPE-issuance log tied to the site assignment.',
    },
    {
      q: 'Service Contract Act prevailing-wage records?',
      a: 'For federal-building cleaning, WD-rate per classification per worker, WH-347 weekly certified payroll, and the SCA wage determination archive per contract.',
    },
  ],
  'en-gb': [
    {
      q: 'Cleaning sector NMW/LW compliance per shift?',
      a: 'Per-shift travel-time, briefing-time and on-site time, with the NMW Reg 2015 SI 2015/621 reg.59 record-keeping window, the rounding-policy log and the unpaid-pre-shift evidence.',
    },
    {
      q: 'ICO Employment Practices Code GPS workforce compliance?',
      a: 'Privacy notice, LIA and DPIA per site, with worker consent log and access-request workflow under UK GDPR Articles 13/15 and DPA 2018.',
    },
    {
      q: 'BICSc training and equipment-certification tracking?',
      a: 'Per-worker BICSc Cleaning Operators Proficiency Certificate, COSHH training and equipment-use authorisation per site.',
    },
  ],
  'en-au': [
    {
      q: 'Cleaning Services Award MA000022 penalty-rate compliance?',
      a: 'Per-worker classification, weekend and public-holiday penalty rates with state-calendar specifics, and the casual-loading interaction with award rates per shift.',
    },
    {
      q: 'WHS site safety for contract-cleaning sites?',
      a: 'Entry, exit, supervisor sign-on and SWMS acknowledgement per site, satisfying the Model WHS Regulations cleaning-services audit.',
    },
    {
      q: 'Modern Slavery Act 2018 (Cth) supply-chain evidence?',
      a: 'For contractors above the AUD 100m threshold, the workforce reporting feeding the annual statement to the Modern Slavery Register.',
    },
  ],
  'en-ca': [
    {
      q: 'Provincial ESA cleaning-services compliance per province?',
      a: 'Per-province (Ontario, BC, Alberta, QC) ESA records: hours, breaks, public-holiday pay, vacation, and the four-to-seven-year retention window depending on province.',
    },
    {
      q: 'PIPEDA/provincial PIPA workforce-monitoring notice?',
      a: 'Privacy notice, lawful-basis analysis and access workflow per province, with the OPC/OIPC complaint-response readiness.',
    },
    {
      q: 'Federal Modern Slavery Act 2024 (Bill S-211) reporting?',
      a: 'Workforce supply-chain evidence and forced-labour-risk assessment feeding the annual report to Public Safety Canada.',
    },
  ],
  'en-ie': [
    {
      q: 'Cleaning sector ERO and JLC compliance?',
      a: 'Where an Employment Regulation Order applies, per-worker hourly rate and shift pattern reconciled to ERO terms, exportable for WRC and Labour Court enquiry.',
    },
    {
      q: 'Sectoral GDPR DPIA for contract-cleaning workforce?',
      a: 'Privacy notice, DPIA and Article 6(1)(f) LIA per site, with the Data Protection Commission audit support pack.',
    },
    {
      q: 'EMPA 2018 banded-hours request handling?',
      a: 'Per-worker 12-month average against the OWTA s.18C band, with the request-and-response audit log evidencing compliance.',
    },
  ],
};
