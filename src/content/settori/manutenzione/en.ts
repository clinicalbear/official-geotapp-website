import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Maintenance Team Management App | GeoTapp - GPS Tracking & Proof of Service',
    description:
      'Manage maintenance crews with GPS: jobs, shifts, proof of service. Full history per asset or client site. Try GeoTapp free.',
  },

  hero: {
    badge: 'App for maintenance teams',
    h1_line1: 'Your maintenance crew,',
    h1_line2: 'always under control.',
    subtitle:
      'Track jobs, schedule shifts and document every visit with real GPS and photo evidence. Full history per asset and client, no manual data entry.',
    cta_primary: 'Try GeoTapp free for 14 days',
    cta_note: 'No commitment. No credit card required.',
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
        desc: 'Real-time verification without phone calls. GPS and arrival time are already available in your dashboard, for every site.',
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
        title: 'Technician clocks in with GPS on arrival',
        desc: 'Opens the job from their smartphone. GeoTapp records real GPS coordinates, timestamp and photos, fully automatic, tamper-proof.',
      },
      {
        title: 'Hours and job details are logged automatically',
        desc: 'Every minute worked is linked to the site and job type. The manager sees the real-time status of every visit.',
      },
      {
        title: 'Client receives a digitally signed report',
        desc: 'At the end of the job, the system generates a report with GPS, hours and digital signature. The client verifies it independently, no access to your system needed.',
      },
    ],
  },

  features: {
    title: 'Maintenance app: total control over every job.',
    items: [
      {
        title: 'GPS-verified attendance',
        desc: 'Every arrival and departure is certified with real GPS, timestamp and assigned site. Defensible with the client and with inspectors.',
      },
      {
        title: 'Maintenance history per asset',
        desc: 'Every job is linked to the site or asset. Full history is searchable and downloadable, for you and for the client.',
      },
      {
        title: 'Automated tamper-proof reports',
        desc: 'At the end of each job, the system generates a sealed report: hours, GPS, photos and digital signature. The client can verify it independently.',
      },
      {
        title: 'Team scheduling',
        desc: 'Assign jobs, manage shifts and receive automatic alerts if a task is not opened or closed on time.',
      },
      {
        title: 'Photo documentation',
        desc: 'Technicians take photos directly from the app: before, during and after the job. Every image is geo-tagged with a timestamp.',
      },
      {
        title: 'Works offline',
        desc: 'In sites with no connectivity, data is saved locally and synced as soon as the connection returns. No data lost.',
      },
    ],
  },

  testimonial: {
    quote:
      'With GeoTapp every maintenance visit is tracked. Clients see the full history per asset and there are no more arguments about hours or work done.',
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
        a: 'With GeoTapp you can verify arrival time and GPS position of every technician in real time. No phone call needed, the data is already in your dashboard.',
      },
      {
        q: 'How do I prove the maintenance service was delivered?',
        a: 'GeoTapp keeps a full downloadable history per client site: dates, hours, GPS and photos of every visit. The client can verify the service independently without accessing your system.',
      },
      {
        q: 'Does GeoTapp work for facility maintenance and equipment servicing?',
        a: 'Yes. GeoTapp is used by maintenance companies, facility management firms and businesses with distributed teams. The platform scales from 3 to 300 technicians.',
      },
      {
        q: 'Is GeoTapp GDPR compliant for GPS tracking?',
        a: 'Yes. GeoTapp tracks location only during active working hours, includes employee privacy notice templates and collects no unnecessary data.',
      },
      {
        q: 'How much does GeoTapp cost for a maintenance company?',
        a: 'Plans start from a few euros per worker per month. Try free for 14 days, no commitment.',
      },
    ],
  },

  cta: {
    title: 'Every maintenance job deserves proof. GeoTapp creates it.',
    subtitle:
      'Verifiable reports, real GPS, full history per asset. Your work becomes defensible.',
    primary: 'Start free now!',
    secondary: 'See Pricing',
  },

  pricing_hint: {
    label: 'Starting from',
    per: 'worker/month',
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
        'With GeoTapp you can verify arrival time and GPS position of every technician in real time. The data is already in your dashboard, no calls needed.',
    },
    {
      question: 'How do I prove the maintenance service was delivered?',
      answer:
        'GeoTapp keeps a full downloadable history per client site: dates, hours, GPS and photos. The client verifies independently.',
    },
  ],
};

export default content;
