import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Cleaning Company App: GPS Team Management & Proof of Service | GeoTapp',
    description:
      'Manage cleaning crews, shifts and attendance with real-time GPS. Automatic proof of service, zero client disputes. GDPR-compliant cleaning company app.',
  },

  hero: {
    badge: 'App for cleaning companies and facility services',
    h1_line1: 'Your cleaning company,',
    h1_line2: 'managed in real time.',
    subtitle:
      'GPS clock-ins, automatic proof of service and shift management in one app. No spreadsheets, no disputes. Client complains? Send the report and the discussion is over.',
    cta_primary: 'Try GeoTapp free for 14 days',
    cta_note: 'No commitment. No credit card required.',
  },

  pain: {
    title: 'Problems we solve every day',
    items: [
      {
        title: 'Clients dispute the hours worked?',
        desc: 'Every clock-in is GPS-verified and timestamped. Send the report and the argument ends in thirty seconds.',
      },
      {
        title: 'Paper timesheets are unreliable?',
        desc: 'Automatic tracking from the smartphone, no manual entries. The data is what it is — and it cannot be changed.',
      },
      {
        title: 'Hard to coordinate multiple crews?',
        desc: 'See where everyone is in real time, across all sites, from a single dashboard. No phone calls.',
      },
    ],
  },

  prima_dopo: {
    title: 'What happens now. What happens with GeoTapp.',
    prima: [
      'The client calls and says the bathroom was not cleaned.',
      'The cleaner says "I did it". The client says "No you didn\'t".',
      'You have nothing to prove anything.',
      'The argument drags on for days. Sometimes you lose the contract.',
    ],
    dopo: [
      'The client calls and says the bathroom was not cleaned.',
      'You open the job report: photo of the clean bathroom, time, GPS.',
      'You send it. The argument ends in thirty seconds.',
      'The contract is safe. The cleaner is protected.',
    ],
  },

  workflow: {
    title: 'How it works',
    subtitle: 'Three simple steps. Zero paperwork. Zero phone calls.',
    steps: [
      {
        title: 'Cleaner clocks in with GPS',
        desc: 'Opens and closes the shift from their smartphone. GeoTapp records real GPS coordinates, photos and timestamp — fully automatic, tamper-proof.',
      },
      {
        title: 'Manager sees everything in real time',
        desc: 'Single dashboard for all sites. Know exactly who is on site, where and since when — without chasing anyone.',
      },
      {
        title: 'Report is ready automatically',
        desc: 'At the end of the shift, the system generates a sealed report with GPS, photos and digital signature. Send it to the client — independently verifiable.',
      },
    ],
  },

  differenza: {
    title: 'Clock-in vs Proof of Service.',
    subtitle: 'Most apps record times. GeoTapp produces evidence for your client.',
    rows: [
      {
        label: 'What it records',
        competitor: 'Clock-in/clock-out time',
        geotapp: 'Time + verified GPS + photos + tasks completed',
      },
      {
        label: 'Who can verify',
        competitor: 'Only your office',
        geotapp: 'You, the client, a third party — independently',
      },
      {
        label: 'In case of dispute',
        competitor: 'Data not defensible',
        geotapp: 'Sealed report, tamper-proof',
      },
      {
        label: 'Photo evidence',
        competitor: 'Missing or disconnected',
        geotapp: 'Attached to report with timestamp and GPS',
      },
      {
        label: 'GDPR compliance',
        competitor: 'Often needs checking',
        geotapp: 'Compliant by design, forms included',
      },
    ],
  },

  features: {
    title: 'Cleaning company app: proof of service, not just clock-ins.',
    items: [
      {
        title: 'Automatic proof of service',
        desc: 'Every completed job generates a report with GPS, photos and timestamp. The client receives it and verifies independently — no access to your system needed.',
      },
      {
        title: 'Real control across all sites',
        desc: 'See in real time who is active where, across all buildings simultaneously. No phone calls, no emails.',
      },
      {
        title: 'Defensible reports anywhere',
        desc: 'Every report is digitally signed and tamper-proof. Valid before a client, an inspector or a solicitor.',
      },
      {
        title: 'Shift and crew management',
        desc: 'Assign shifts, manage jobs and receive automatic alerts if a task is not opened or closed on time.',
      },
      {
        title: 'Photo documentation',
        desc: 'Cleaners take photos directly from the app. Every image is geo-tagged with timestamp — visual proof of the work done.',
      },
      {
        title: 'Your staff are protected',
        desc: 'A verifiable report also protects the cleaner from unfounded accusations. Good work is proven by data.',
      },
    ],
  },

  testimonial: {
    quote:
      'Since we started using GeoTapp, client disputes are resolved in a minute. We send the report with photos and GPS, and the discussion ends there. We have not lost a single contract in a year.',
    author: 'Rachel T.',
    role: 'Owner, commercial cleaning company',
  },

  faq: {
    title: 'Frequently asked questions',
    subtitle: 'What people ask us most before getting started.',
    items: [
      {
        q: 'How does GPS clock-in work for cleaning companies?',
        a: 'The cleaner clocks in and out from their smartphone. GeoTapp records the GPS coordinates at that moment — not entered manually. Every clock-in is certified with timestamp and position verifiable by the client.',
      },
      {
        q: 'Can I prove to the client that the service was delivered?',
        a: 'Yes. GeoTapp automatically generates a sealed report with GPS, photos and timestamp at the end of each job. The client receives it and verifies independently — no access to your system needed.',
      },
      {
        q: 'Is GeoTapp GDPR compliant for employee GPS tracking?',
        a: 'Yes. GeoTapp tracks location only during active working hours, includes employee privacy notice templates and collects no unnecessary data. Compliant with UK and EU data protection regulations.',
      },
      {
        q: 'How do I manage crews spread across multiple sites?',
        a: 'With GeoTapp Flow you have a single dashboard for all sites. See in real time who is active where, assign jobs and receive automatic alerts.',
      },
      {
        q: 'Are paper timesheets still needed?',
        a: 'No. GeoTapp fully replaces paper timesheets with automatic GPS tracking from smartphones. Data is exportable for payroll processing.',
      },
      {
        q: 'How much does GeoTapp cost for a cleaning company?',
        a: 'Plans start from a few euros per worker per month. Try free for 14 days — no commitment.',
      },
    ],
  },

  cta: {
    title: 'Your cleaners do good work. Make sure the client sees it.',
    subtitle:
      'Every job becomes verifiable proof of service. Zero disputes, zero lost contracts.',
    primary: 'Start free now!',
    secondary: 'See Pricing',
  },

  pricing_hint: {
    label: 'Starting from',
    price: '3 €',
    per: 'worker/month',
    note: '14-day free trial',
  },

  schema_sector_name: 'Cleaning Company',

  schema_faq: [
    {
      question: 'How does GPS clock-in work for cleaning companies?',
      answer:
        'The cleaner clocks in and out from their smartphone. GeoTapp records GPS coordinates — not entered manually. Every clock-in is certified with timestamp and position verifiable by the client.',
    },
    {
      question: 'Can I prove to the client that the service was delivered?',
      answer:
        'Yes. GeoTapp automatically generates a sealed report with GPS, photos and timestamp. The client receives it and verifies independently.',
    },
    {
      question: 'Is GeoTapp GDPR compliant for employee GPS tracking?',
      answer:
        'Yes. GeoTapp tracks location only during active working hours, includes employee privacy notice templates and collects no unnecessary data.',
    },
  ],
};

export default content;
