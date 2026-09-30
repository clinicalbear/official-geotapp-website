import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Cleaning Company App: GPS Team Management & Proof of Service | GeoTapp',
    description:
      'GPS clock-ins for cleaners: manage crews, shifts and attendance. Automatic proof of service to show when a client disputes. Built to stay within GDPR.',
  },

  hero: {
    badge: 'App for cleaning companies and facility services',
    h1_line1: 'Your cleaning company,',
    h1_line2: 'managed clock-in by clock-in.',
    subtitle:
      'GPS clock-ins, automatic proof of service and shift management in one app. No spreadsheets. Client complains? Send the report instead of arguing it out.',
    cta_primary: 'Try it on a real contract',
    cta_note: '14 days, up to 50 field workers, no credit card.',
  },

  pain: {
    title: 'Problems we solve every day',
    items: [
      {
        title: 'Clients dispute the hours worked?',
        desc: 'Every clock-in records position and time. Send the report and the client can check it alone.',
      },
      {
        title: 'Paper timesheets are unreliable?',
        desc: 'Clock-ins from the smartphone, no manual entries. The data stays as recorded: any change is detectable.',
      },
      {
        title: 'Hard to coordinate multiple crews?',
        desc: 'See who has clocked in, and where, across all sites, from a single screen. No phone calls.',
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
      'You open the job report: photo of the clean bathroom, time, position.',
      'You send it, and the client can verify it alone.',
      'You have proof to show. The cleaner has something in hand too.',
    ],
  },

  workflow: {
    title: 'How it works',
    subtitle: 'Three simple steps. Zero paperwork. Zero phone calls.',
    steps: [
      {
        title: 'Cleaner clocks in on site',
        desc: 'Opens and closes the shift from their smartphone. GeoTapp records the position and time at that moment and, if needed, proof photos. Nothing is recorded automatically between clock-ins.',
      },
      {
        title: 'Manager sees each clock-in as it arrives',
        desc: 'Single screen for all sites. See who has clocked in, where and at what time, without chasing anyone.',
      },
      {
        title: 'Report is ready automatically',
        desc: 'At the end of the shift, the system generates a sealed report with GPS, photos and a seal. Send it to the client, who can verify it independently.',
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
        geotapp: 'Time + position at clock-in + photos + tasks completed',
      },
      {
        label: 'Who can verify',
        competitor: 'Only your office',
        geotapp: 'You, the client, a third party, independently',
      },
      {
        label: 'In case of dispute',
        competitor: 'Just your word',
        geotapp: 'Sealed report, any change is detectable',
      },
      {
        label: 'Photo evidence',
        competitor: 'Missing or disconnected',
        geotapp: 'Attached to report with timestamp and GPS',
      },
      {
        label: 'GDPR compliance',
        competitor: 'Often needs checking',
        geotapp: 'Built to stay within GDPR, forms included',
      },
    ],
  },

  features: {
    title: 'Cleaning company app: proof of service, not just clock-ins.',
    items: [
      {
        title: 'Automatic proof of service',
        desc: 'Every completed job generates a report with GPS, photos and timestamp. The client receives it and verifies independently, no access to your system needed.',
      },
      {
        title: 'A clear picture across all sites',
        desc: 'See who has clocked in, and where, across all buildings, as each clock-in arrives. No phone calls, no emails. Nothing is recorded automatically between clock-ins.',
      },
      {
        title: 'Reports anyone can check',
        desc: 'Every report is sealed, and any change is detectable. A client, an inspector or an adviser can check it independently.',
      },
      {
        title: 'Shift and crew management',
        desc: 'Assign shifts, manage jobs and get an alert if a shift is left open.',
      },
      {
        title: 'Photo documentation',
        desc: 'Cleaners take photos directly from the app. Every image is tagged with time and position, visual proof of the work done.',
      },
      {
        title: 'Your staff are protected',
        desc: 'A verifiable report also gives the cleaner something in hand against unfounded accusations. Good work is shown by the data.',
      },
    ],
  },

  testimonial: {
    quote:
      'When a client disputes a job, we send the report with photos and position and they check it themselves.',
    author: 'Rachel T.',
    role: 'Owner, commercial cleaning company',
  },

  faq: {
    title: 'Frequently asked questions',
    subtitle: 'What people ask us most before getting started.',
    items: [
      {
        q: 'How does GPS clock-in work for cleaning companies?',
        a: 'The cleaner clocks in and out from their smartphone. GeoTapp records the GPS position at that moment, not entered manually. Every clock-in goes into the sealed report with timestamp and position, which the client can verify.',
      },
      {
        q: 'Can I prove to the client that the service was delivered?',
        a: 'Yes. GeoTapp automatically generates a sealed report with GPS, photos and timestamp at the end of each job. The client receives it and verifies independently, no access to your system needed.',
      },
      {
        q: 'Is GeoTapp built to stay within GDPR for employee GPS?',
        a: 'GeoTapp is built to stay within UK and EU data protection rules: it records the position only when the cleaner clocks in (start, break, finish) or takes a proof photo, has the employee sign the privacy notice in the app before clocking in, and collects no unnecessary data. Nothing is recorded automatically in between.',
      },
      {
        q: 'How do I manage crews spread across multiple sites?',
        a: 'With GeoTapp Flow you have a single screen for all sites. See who has clocked in and where, assign jobs and get an alert if a shift is left open.',
      },
      {
        q: 'Are paper timesheets still needed?',
        a: 'No. GeoTapp replaces paper timesheets with clock-ins from smartphones. The data exports to Excel or CSV for payroll processing.',
      },
      {
        q: 'How much does GeoTapp cost for a cleaning company?',
        a: 'GeoTapp Flow starts at €39 a month; each cleaner with the TimeTracker app costs €3 a month on top (€2.50 from the 26th seat). The subscription runs for a minimum of 12 months. Prices exclude VAT. You can try it free for 14 days, no card.',
      },
      {
        q: 'Does GeoTapp do GPS tracking for cleaners?',
        a: 'Not continuous tracking. The cleaner clocks in and out from their smartphone and every clock-in is tied to a GPS position and a timestamp, recorded at that moment (start, break, finish) and when a proof photo is taken. It is a position for proof of attendance, not surveillance: nothing is recorded automatically in between, and the app does not ask for background location permission.',
      },
    ],
  },

  cta: {
    title: 'Your cleaners do good work. Make sure the client sees it.',
    subtitle:
      'Every job becomes a report you can show, and the client can verify it alone.',
    primary: 'Try it free for 14 days',
    secondary: 'See Pricing',
  },

  pricing_hint: {
    label: 'TimeTracker seats from',
    per: 'per worker per month, plus a Flow plan',
    note: '14-day free trial',
  },

  schema_sector_name: 'Cleaning Company',

  schema_faq: [
    {
      question: 'How does GPS clock-in work for cleaning companies?',
      answer:
        'The cleaner clocks in and out from their smartphone. GeoTapp records the GPS position at that moment, not entered manually. Every clock-in goes into the sealed report with timestamp and position, which the client can verify.',
    },
    {
      question: 'Can I prove to the client that the service was delivered?',
      answer:
        'Yes. GeoTapp automatically generates a sealed report with GPS, photos and timestamp. The client receives it and verifies independently.',
    },
    {
      question: 'Is GeoTapp built to stay within GDPR for employee GPS?',
      answer:
        'GeoTapp is built to stay within UK and EU data protection rules: it records the position only when the cleaner clocks in (start, break, finish) or takes a proof photo, has the employee sign the privacy notice in the app before clocking in, and collects no unnecessary data. Nothing is recorded automatically in between.',
    },
    {
      question: 'Does GeoTapp do GPS tracking for cleaners?',
      answer:
        'Not continuous tracking. The cleaner clocks in and out from their smartphone and every clock-in is tied to a GPS position and a timestamp, recorded at that moment (start, break, finish) and when a proof photo is taken. Nothing is recorded automatically in between.',
    },
  ],
};

export default content;
