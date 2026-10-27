import type { ContestazioniCopy } from './types';

/**
 * Page "When someone disputes the work" (27/10/2026), written natively in English from
 * contestazioni/it.ts and the claim sheet (docs/stampa/scheda-claim.md). Product statements reuse
 * the strings already published in dictionaries/en.json (features.*). Italy-specific references
 * (art. 4 of the Workers' Statute, the labour inspectorate) are generalised on purpose.
 * The background-location sentence holds for Android and iPhone only: Apple Watch is not verified.
 */
const en: ContestazioniCopy = {
  metaTitle: 'When work is disputed: what changes with GeoTapp | GeoTapp',
  metaDesc:
    'When a client or an employee disputes the work, what do you have in hand? The same dispute seen from three sides: the company, the worker and the client.',
  kicker: 'Work disputes',
  h1: 'When someone disputes the work: what changes with GeoTapp',
  lede:
    'You cannot prevent every dispute. What changes is what you have in hand when one arrives: one person\'s memory against another\'s, or a document. Here is the same dispute seen from three sides: the company, the worker and the client who ordered the job.',
  updatedLabel: 'Updated on 27 October 2026',
  scenes: [
    {
      kicker: 'The company',
      heading: 'If you are the company',
      scene: '“The client says you never showed up. Or that you were there for an hour, not three.”',
      haveTitle: 'What you have in hand',
      have: [
        'The start time, the breaks and the finish time of every job.',
        'The location recorded at clock-in. At clock-in the app rejects locations simulated by fake-location apps, locations that are too imprecise, and impossible jumps between positions.',
        'The proof photos of the job. Photos are never rejected, only flagged: the time and location of the shot are compared with those of the clock-in.',
        'A report put together at the end of the job from clock-ins, photos and notes, and then sealed: any later change is detectable.',
      ],
      changeTitle: 'What changes',
      change: [
        'Instead of reconstructing things from memory across WhatsApp, emails and paper sheets, you send one document.',
        'If there is no signal, the clock-in stays saved on the phone and is sent on its own when the signal returns, with the time at which it was made.',
        'Documented hours are hours you can show when you invoice them.',
      ],
    },
    {
      kicker: 'The worker',
      heading: 'If you are the one doing the work',
      scene: '“I worked more hours than I was paid for.”',
      haveTitle: 'What you have',
      have: [
        'Your work sessions, with start time, breaks and finish, which you can review in the app by period, with the total hours.',
        'Location is recorded only when you clock in or take a proof photo: start, start and end of breaks, finish.',
        'Between one clock-in and the next, no location is recorded automatically and continuously. On Android and iPhone the app does not even ask for background location permission.',
      ],
      changeTitle: 'What changes',
      change: [
        'If there is a disagreement about hours, there is a time recorded by something you did, which does not depend on anyone\'s memory.',
        'The office sees clock-ins as they arrive: the screen is called Today\'s clock-ins and shows the ones already made, not where someone is right now.',
      ],
      extra: {
        title: 'What remains of the locations, and for how long',
        paragraphs: [
          'In the register, locations are deleted after twelve months, a period the company can shorten down to thirty days.',
          'In reports already delivered they remain, because they are sealed documents, and they follow the retention period set by law: after five years the package is deleted. A delivered report is a snapshot: it is not updated and cannot be touched without breaking the seal that makes it verifiable.',
        ],
      },
    },
    {
      kicker: 'The client',
      heading: 'If you are the client',
      scene: '“They tell me the job is done. How can I know without just taking their word for it?”',
      haveTitle: 'What you do',
      have: [
        'You receive a link to the report and check it alone, online or with the offline verifier: a single file that does not connect to the internet and carries the public key inside.',
        'The check recalculates the fingerprints of every event and every photo and verifies the signature. The verification page shows two separate things: whether the document is intact, and whether the signature is valid.',
        'It works even years from now, even without GeoTapp: anyone holding the package and the verifier can run the check again.',
      ],
      changeTitle: 'What it shows and what it does not',
      change: [
        'The system can help detect changes to the delivered package and check its technical consistency and integrity; on its own it is not absolute proof of the material fact, nor legal advice.',
        '“Document intact” means not tampered with. It is the signature, which cannot be redone without the key, that says the package was issued by us.',
      ],
    },
  ],
  sample: {
    heading: 'Try it with a real report',
    paragraphs: [
      'Below is a sample report, an electrical panel replacement. Download it and check it in your own browser: the verification runs on your side and the file is not sent to us.',
    ],
  },
  limits: {
    heading: 'What GeoTapp does not do',
    items: [
      'It does not track continuously, even if you wanted it to: on Android and iPhone the app does not ask for background location permission.',
      'It does not show, on its own, that the event took place: it tells you whether the package was altered after delivery.',
      'It does not promise that disputes disappear: it changes what you bring to the table when they arrive.',
      'It does not replace a labour consultant, the DPO, agreements with workers\' representatives, or any authorisation your country\'s law may require.',
    ],
    formula:
      'In short: the system can help detect changes to the delivered package and check its technical consistency and integrity; on its own it is not absolute proof of the material fact, nor legal advice.',
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        q: 'Is a GeoTapp report enough to win a dispute?',
        a: 'Not on its own. The report shows what was recorded and lets anyone check that it was not altered after delivery; it does not show, on its own, that the event took place, and it is not legal advice. It is an orderly, verifiable document in place of one memory against another.',
      },
      {
        q: 'Does GeoTapp track employees during the day?',
        a: 'No. Location is recorded only when the worker makes a gesture: clocking in, starting and ending a break, clocking out, a proof photo. Between one clock-in and the next, no location is recorded automatically and continuously. On Android and iPhone the app does not even ask for background location permission.',
      },
      {
        q: 'Does the client have to trust GeoTapp to check the report?',
        a: 'No. The offline verifier is a single file that does not connect to the internet and carries the public key inside: it recalculates the fingerprints and checks the signature even years from now, even without GeoTapp. What the check tells you is whether the package was altered, not whether the event took place.',
      },
      {
        q: 'What happens to locations after delivery?',
        a: 'In the register they are deleted after twelve months, a period the company can shorten down to thirty days. In reports already delivered they remain, because they are sealed documents, and they follow the retention period set by law: after five years the package is deleted.',
      },
      {
        q: 'Where is the data?',
        a: 'Work data and photos are stored in the European Union.',
      },
      {
        q: 'Does GeoTapp replace a labour consultant or agreements with workers\' representatives?',
        a: 'No. It helps you stay within the limits set by data protection rules such as the GDPR, but it does not replace a labour consultant, the DPO, agreements with workers\' representatives, or any authorisation your country\'s law may require.',
      },
    ],
  },
  next: {
    heading: 'To go further',
    paragraph: 'If you want to see what is inside feature by feature, or the prices, start here.',
    featuresLabel: 'What GeoTapp does, feature by feature →',
    pricingLabel: 'See pricing →',
  },
  card: {
    title: 'What changes when someone disputes the work',
    text: 'The company, the worker and the client side by side.',
    cta: 'Read the page',
  },
  disclaimer:
    'This page describes what GeoTapp does and is not legal advice. For your specific situation, speak to a labour consultant or a DPO.',
};

export default en;
