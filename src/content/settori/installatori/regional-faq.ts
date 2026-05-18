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
      q: 'UL/ETL listing trail per installation?',
      a: 'Per-installation listing-authority record, with worker\'s installation-method training tied to the manufacturer\'s authorised-installer programme.',
    },
    {
      q: 'State home-improvement contractor licensing tracker?',
      a: 'Per-worker state HIC licence number, bond and insurance evidence, with the annual renewal workflow tied to the platform clock-in.',
    },
    {
      q: 'ADA accessibility on-site verification per project?',
      a: 'Per-site ADA-compliance checklist completion record, with the installer signature and date for downstream audit.',
    },
  ],
  'en-gb': [
    {
      q: 'MCS (Microgeneration Certification Scheme) installer trail?',
      a: 'Per-worker MCS technology category, certification expiry, MCS installation reference and annual ongoing-assessment record.',
    },
    {
      q: 'Building Regulations Part P notification?',
      a: 'For domestic electrical installations, the Part P competent-person scheme registration and the notification record per installation.',
    },
    {
      q: 'Trustmark scheme audit support?',
      a: 'Workforce qualifications, customer-feedback log and dispute-resolution record per installation, satisfying Trustmark\'s annual review.',
    },
  ],
  'en-au': [
    {
      q: 'AS/NZS installation-standard records per category?',
      a: 'Per-category (electrical AS/NZS 3000, plumbing AS/NZS 3500, solar AS/NZS 5033) installation record with installer licence and supervising-licence chain.',
    },
    {
      q: 'Clean Energy Council Approved Installer tracking?',
      a: 'For renewable-energy installs, CEC Accreditation ID, installation-class endorsement and annual recertification record.',
    },
    {
      q: 'State home-builder licensing per jurisdiction?',
      a: 'Per-state (HBCF NSW, VBA, QBCC, BSA) installer registration with the contractor-licensing audit pack on request.',
    },
  ],
  'en-ca': [
    {
      q: 'CSA-listed product installation trail?',
      a: 'Per-installation CSA listing record, with the worker\'s manufacturer-authorised-installer training tied to the platform profile.',
    },
    {
      q: 'Provincial trade-qualification ticket per worker?',
      a: 'Per-province trade-qualification certificate (Red Seal where applicable), with continuing-education credits and supervision chain captured per shift.',
    },
    {
      q: 'Indigenous-community engagement for on-reserve installations?',
      a: 'Where applicable, free-prior-informed-consent record, IBA data-clause compliance and OCAP-aligned data governance.',
    },
  ],
  'en-ie': [
    {
      q: 'RECI/Safe Electric installer registration tracking?',
      a: 'Per-worker Safe Electric registration, periodic-inspection schedule and CER-compliant Cert of Compliance issuance per installation.',
    },
    {
      q: 'Sustainable Energy Authority (SEAI) installer trail?',
      a: 'For SEAI-grant-eligible installations, SEAI registration number and installation-method evidence per grant claim.',
    },
    {
      q: 'WRC and HSA inspection audit pack?',
      a: 'Combined OWTA 1997 hours, Construction SEO rates where applicable, and HSA notifiable-incident logs in the inspector\'s preferred format.',
    },
  ],
};
