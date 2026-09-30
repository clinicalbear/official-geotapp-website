import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App for HVAC, Electrical & Plumbing Installers: GPS Job Tracking | GeoTapp',
    description: 'Document jobs, hours and materials for HVAC, electrical and plumbing installers, with position at each clock-in. Automatic proof of service to show when a client disputes. Try GeoTapp free.',
  },
  hero: {
    badge: 'App for installers, technicians and service teams',
    h1_line1: 'Every job documented,',
    h1_line2: 'every hour recorded.',
    subtitle: 'For electrical, plumbing, HVAC and mechanical installers. GeoTapp connects Flow + TimeTracker to record position, hours and photos for every job, from the van to the office without phone calls.',
    cta_primary: 'Try GeoTapp free for 14 days',
    cta_note: 'The trial commits you to nothing. No credit card required.',
  },
  pain: {
    title: 'Problems we solve every day',
    items: [
      {
        title: 'Clients dispute the hours worked',
        desc: 'Clock-ins recorded with position and time. The data is sealed at the moment of the job, and any change afterwards is detectable.',
      },
      {
        title: 'Chasing technicians for updates',
        desc: 'Job status on one screen, updated as each technician clocks in. You see who has clocked in on which job without making a single phone call.',
      },
      {
        title: 'Incomplete or missing job sheets',
        desc: 'Data arrives late, incomplete or not at all. Reconstructing hours and jobs at month-end is a separate task that costs time and money.',
      },
    ],
  },
  workflow: {
    title: 'How it works',
    subtitle: 'Three simple steps. Zero paperwork. Zero phone calls.',
    steps: [
      {
        title: 'The technician clocks in at the start',
        desc: 'Opens the job from their smartphone. GeoTapp records the position and time at that moment and, if needed, proof photos. Nothing is recorded automatically between clock-ins.',
      },
      {
        title: 'Hours are recorded per job',
        desc: 'Hours are linked to the right job at each clock-in. The manager sees who has clocked in on which job as it arrives.',
      },
      {
        title: 'The client report is generated without typing a thing',
        desc: 'At the end of the job the system generates a report with GPS, hours and a seal. The client receives it and verifies it independently.',
      },
    ],
  },
  differenza: {
    title: 'Installer app: time tracking or verifiable proof?',
    subtitle: 'Most apps record the clock-in. GeoTapp produces verifiable proof.',
    rows: [
      {
        label: 'What it records',
        competitor: 'Clock-in and clock-out time',
        geotapp: 'Time + position at clock-in + photos + work completed',
      },
      {
        label: 'Who can verify',
        competitor: 'Your office only',
        geotapp: 'You, the client, a third party, independently',
      },
      {
        label: 'In case of dispute',
        competitor: 'Just your word',
        geotapp: 'Sealed report, any change is detectable',
      },
      {
        label: 'Job report',
        competitor: 'Manual or absent',
        geotapp: 'Auto-generated with GPS and photos',
      },
      {
        label: 'GDPR compliance',
        competitor: 'Often questionable',
        geotapp: 'Built to stay within GDPR, forms included',
      },
    ],
  },
  prima_dopo: {
    title: 'What happens now. What happens with GeoTapp.',
    prima: [
      'The client disputes the end time and asks for a discount.',
      'The technician says "I worked 4 hours". The client says "only 2 show up".',
      'You have no proof. The argument drags on for days and payment is at risk.',
      'At month-end you reconstruct hours and jobs from WhatsApp messages.',
    ],
    dopo: [
      'The client disputes? Open the report: photos, position, times, seal.',
      'You send it, and the client can verify it alone.',
      'You have proof to show. The technician has something in hand too.',
      'At month-end the export is already done, hours and jobs aggregated automatically.',
    ],
  },
  features: {
    title: 'Features built for installers and service teams',
    items: [
      {
        title: 'GPS clock-in with position',
        desc: 'Every entry, break and exit is linked to position, time and job. Something to show clients or inspectors when it matters.',
      },
      {
        title: 'Sealed photo evidence',
        desc: 'The technician takes photos from the app. Every image is linked to the job with GPS and timestamp, and any later change is detectable.',
      },
      {
        title: 'Multi-site job management',
        desc: 'Assign jobs, follow the progress of every job and get an alert if a shift is left open.',
      },
      {
        title: 'Automatic digital job sheets',
        desc: 'At the end of the job the report is ready: hours, photos and notes. No paper, no calls. The office sends it to the client from Flow with one click.',
      },
      {
        title: 'Payroll and billing export',
        desc: 'Export monthly attendance and hours per job. Payroll and invoicing start from data that is already prepared, with nothing to retype.',
      },
      {
        title: 'Position only when you clock in',
        desc: 'Geolocation built to stay within GDPR: never continuous, and the employee privacy notice is signed in the app before the first clock-in.',
      },
    ],
  },
  testimonial: {
    quote: 'When a client disputes the hours, we open the report with position and photos and they check it themselves.',
    author: 'Robert F.',
    role: 'Owner, mechanical & electrical contractor, 20 technicians',
  },
  faq: {
    title: 'Frequently asked questions',
    subtitle: 'What people ask us most before getting started.',
    items: [
      {
        q: 'Do clients dispute the hours worked on a job?',
        a: 'With GeoTapp, clock-ins are recorded with position and time at the moment of the job and any change is detectable. You have a document to show when someone questions the hours.',
      },
      {
        q: 'How do I follow multiple teams on different jobs?',
        a: 'GeoTapp shows job status on one screen, updated as each technician clocks in. You see who has clocked in on which job, without making phone calls.',
      },
      {
        q: 'How do I speed up invoicing for completed jobs?',
        a: 'GeoTapp automatically generates the export of hours and jobs, as Excel or CSV, ready for your accounting software. Nothing to retype: fewer errors, and invoicing starts from data that is already prepared.',
      },
    ],
  },
  cta: {
    title: 'Try GeoTapp free for 14 days',
    subtitle: 'The trial commits you to nothing. No credit card required.',
    primary: 'Try it free for 14 days',
    secondary: 'View Pricing',
  },
  pricing_hint: {
    label: 'TimeTracker seats from',
    per: 'per technician per month, plus a Flow plan',
    note: '14-day free trial',
  },
  schema_sector_name: 'Mechanical & Electrical',
  schema_faq: [
    {
      question: 'Do clients dispute the hours worked on a job?',
      answer: 'With GeoTapp, clock-ins are recorded with position and time at the moment of the job and any change is detectable. You have a document to show when someone questions the hours.',
    },
    {
      question: 'How do I follow multiple teams on different jobs?',
      answer: 'GeoTapp shows job status on one screen, updated as each technician clocks in. You see who has clocked in on which job, without making phone calls.',
    },
    {
      question: 'How do I speed up invoicing for completed jobs?',
      answer: 'GeoTapp automatically generates the export of hours and jobs, as Excel or CSV, ready for your accounting software. Nothing to retype: fewer errors, and invoicing starts from data that is already prepared.',
    },
  ],
};

export default content;
