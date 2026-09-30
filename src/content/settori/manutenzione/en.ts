import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Maintenance Team Management App | GeoTapp - GPS Clock-ins & Proof of Service',
    description:
      'Manage maintenance crews: jobs, shifts and proof of service, with position at each clock-in. Full history per asset or client site. Try GeoTapp free.',
  },

  hero: {
    badge: 'App for maintenance teams',
    h1_line1: 'Your maintenance crew,',
    h1_line2: 'every visit documented.',
    subtitle:
      'Record jobs, schedule shifts and document every visit with the position at clock-in and proof photos. Full history per asset and client, no manual data entry.',
    cta_primary: 'Try GeoTapp free for 14 days',
    cta_note: 'The trial commits you to nothing. No credit card required.',
  },

  pain: {
    title: 'Problems we solve every day',
    items: [
      {
        title: 'How do you document periodic maintenance visits?',
        desc: 'Automatic report with GPS, hours and photos for every visit. Full history, downloadable, no manual input required.',
      },
      {
        title: 'Do technicians actually arrive on time?',
        desc: 'You see it as soon as the technician clocks in, without phone calls: arrival time and position are already in Flow, for every site.',
      },
      {
        title: 'How do you prove the service was delivered?',
        desc: 'Full downloadable history per client site: dates, hours, GPS and photos. The client verifies independently, without access to your system.',
      },
    ],
  },

  workflow: {
    title: 'How it works',
    subtitle: 'Three simple steps. Zero paperwork. Zero phone calls.',
    steps: [
      {
        title: 'Technician clocks in on arrival',
        desc: 'Opens the job from their smartphone. GeoTapp records the position and time at that moment, and the proof photos. Nothing is recorded automatically between clock-ins.',
      },
      {
        title: 'Hours and job details are logged at each clock-in',
        desc: 'Hours worked are linked to the site and job type. The manager sees the status of every visit at each clock-in.',
      },
      {
        title: 'Client receives a sealed report',
        desc: 'At the end of the job, the system generates a report with GPS, hours and a seal. The client verifies it independently, no access to your system needed.',
      },
    ],
  },

  features: {
    title: 'Maintenance app: every job documented.',
    items: [
      {
        title: 'Attendance with position and time',
        desc: 'Every arrival, break and departure is recorded with position, time and assigned site, and goes into the sealed report. Something to show the client or inspectors when it matters.',
      },
      {
        title: 'Maintenance history per asset',
        desc: 'Every job is linked to the site or asset. Full history is searchable and downloadable, for you and for the client.',
      },
      {
        title: 'Automated sealed reports',
        desc: 'At the end of each job, the system generates a sealed report: hours, positions, photos and a seal. The client can verify it independently.',
      },
      {
        title: 'Team scheduling',
        desc: 'Assign jobs, manage shifts and get an alert if a shift is left open.',
      },
      {
        title: 'Photo documentation',
        desc: 'Technicians take photos directly from the app: before, during and after the job. Every image is tagged with time and position.',
      },
      {
        title: 'One-tap clock-in',
        desc: 'The technician clocks in with their position recorded, marks breaks and closes the job with one tap. Every photo taken stays linked to the job and its timestamps.',
      },
    ],
  },

  testimonial: {
    quote:
      'With GeoTapp every maintenance visit is documented, and we send clients the report of each visit.',
    author: 'Andrea L.',
    role: 'Maintenance Manager, facility management company',
  },

  faq: {
    title: 'Frequently asked questions',
    subtitle: 'What people ask us most before getting started.',
    items: [
      {
        q: 'How do you document periodic maintenance visits?',
        a: 'GeoTapp automatically generates a report for every visit with GPS, hours and photos. Full history, downloadable per asset or client site, no manual input.',
      },
      {
        q: 'Do technicians actually arrive on time?',
        a: 'With GeoTapp you see the arrival time and position of every technician the moment they clock in. No phone call needed: the data is already in Flow.',
      },
      {
        q: 'How do I prove the maintenance service was delivered?',
        a: 'GeoTapp keeps a full downloadable history per client site: dates, hours, GPS and photos of every visit. You send the client the sealed report, which they verify alone without accessing your system.',
      },
      {
        q: 'Does GeoTapp work for facility maintenance and equipment servicing?',
        a: 'Yes. GeoTapp is used by maintenance companies, facility management firms and businesses with distributed teams. It suits anything from a small team to a company with hundreds of technicians.',
      },
      {
        q: 'Is GeoTapp built to stay within GDPR for GPS?',
        a: 'GeoTapp is built to help you stay within GDPR: it records the position only when the technician clocks in (start, break, finish) or takes a proof photo, has the employee sign the privacy notice in the app before clocking in, and collects no unnecessary data.',
      },
      {
        q: 'How much does GeoTapp cost for a maintenance company?',
        a: 'GeoTapp Flow starts at €39 a month; TimeTracker seats for the technicians cost €3 a month each up to 25 (€2.50 from the 26th). The subscription runs for a minimum of 12 months. Prices exclude VAT. You can try it free for 14 days, no card.',
      },
    ],
  },

  cta: {
    title: 'Every maintenance job deserves proof. GeoTapp creates it.',
    subtitle:
      'Verifiable reports, position at clock-in, full history per asset.',
    primary: 'Try it free for 14 days',
    secondary: 'See Pricing',
  },

  pricing_hint: {
    label: 'TimeTracker seats from',
    per: 'per worker per month, plus a Flow plan',
    note: '14-day free trial',
  },

  schema_sector_name: 'Maintenance',

  schema_faq: [
    {
      question: 'How do you document periodic maintenance visits?',
      answer:
        'GeoTapp automatically generates a report for every visit with GPS, hours and photos. Full history, downloadable per asset or client site, no manual input.',
    },
    {
      question: 'Do technicians actually arrive on time?',
      answer:
        'With GeoTapp you see the arrival time and position of every technician the moment they clock in. The data is already in Flow, no calls needed.',
    },
    {
      question: 'How do I prove the maintenance service was delivered?',
      answer:
        'GeoTapp keeps a full downloadable history per client site: dates, hours, GPS and photos. You send the client the sealed report, which they verify alone.',
    },
  ],
};

export default content;
