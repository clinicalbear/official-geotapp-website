import type { PresenzeCopy } from './types';

const en: PresenzeCopy = {
  metaTitle: 'Can you use GPS for attendance without tracking employees? - GeoTapp',
  metaDesc:
    'Yes, if the location is only captured at clock-in. What an Italian court ruled in 2026, what data protection authorities actually fine, and what a compliant GPS attendance system records.',
  h1: 'Can you use GPS for attendance without tracking employees?',
  lede:
    'Yes. A system that only captures location at the exact moment a worker clocks in, takes a break, or clocks out is not surveillance: it documents a fact. An Italian court confirmed exactly this distinction in 2026, and it matches what data protection authorities actually fine: continuous tracking, not point-in-time location capture.',
  updatedLabel: 'Updated on 25 September 2026',
  sections: [
    {
      heading: 'When is GPS allowed for attendance tracking?',
      paragraphs: [
        'Under Italian labour law (art. 4 of Law no. 300/1970, the Workers\' Statute), tools that could enable remote monitoring of a worker\'s activity require a works-council agreement or authorisation from the labour inspectorate before they are switched on. Tools that simply record access and attendance are exempt from that procedure. It is a distinction that also runs, in spirit, through most EU member states\' own rules on employee monitoring, even where the exact legal mechanism differs.',
        'In a ruling on 1 July 2026 (judgment no. 972), the Court of Cosenza (Italy) indicated where the line falls for GPS-based clock-in apps: when location is captured exclusively at the moment of clocking in, with no continuous tracking of movement in between, the system counts as an attendance-recording tool, not a remote-surveillance tool. The court overturned a €50,000 fine that the Italian data protection authority had issued against a public body over a remote-work clock-in app on exactly this basis.',
        'The practical rule: a GPS point taken at the start and end of a shift captures a moment. A trail of points taken every minute follows a person. Same satellite technology, two very different tools in the eyes of the law.',
      ],
    },
    {
      heading: 'What does GeoTapp record, and what does it not record',
      paragraphs: [
        'GeoTapp only captures location when a worker takes a specific action: clocking in, starting or ending a break, clocking out, plus one point per work-proof photo. Nothing is automatically recorded in between clock-ins: no movement trail, no background tracking, no location collected without the worker\'s knowledge.',
      ],
    },
    {
      heading: 'How a works council member, an employment lawyer, or a DPO can verify this without asking us anything',
      paragraphs: [
        'You do not need to take our word for it: this is independently checkable. On the Android app, the manifest declares only the ACCESS_FINE_LOCATION and ACCESS_COARSE_LOCATION permissions. It does not request ACCESS_BACKGROUND_LOCATION, the permission that would be required to follow an employee while the app is closed, and there is no foreground service dedicated to location: without that permission, the operating system simply does not hand location data to an app that is not open on screen. On iOS, the app requests only "when in use" authorisation (requestWhenInUseAuthorization), never background tracking authorisation.',
        'This is a check a works council representative, an employment lawyer, or a data protection officer can run alone in a few minutes, by reading the app manifest or the privacy label published by the app store, before they even open the privacy notice a company hands them.',
      ],
    },
    {
      heading: 'How long is the location data kept?',
      paragraphs: [
        'In the attendance log, coordinates are deleted after twelve months; a company can shorten that window down to thirty days. In reports already delivered to a client, location data remains: those are sealed documents that document work performed, and they follow the retention period that applies to that kind of documentation, not the log\'s.',
        'These are two different rules for two different objects. The operational log gets lighter over time; a document already handed to someone else follows its own rules, the same as any document once it has left your systems.',
      ],
    },
    {
      heading: 'What about outside Italy?',
      paragraphs: [
        'GDPR (in particular articles 5, 6, 12-14 and 25 of EU Regulation 2016/679) applies across the whole European Union and imposes the same principles everywhere: data minimisation, a stated purpose, clear information for the employee. What differs from country to country is the procedure around remote monitoring: the local equivalent of Italy\'s article 4, the role of the works council or trade union, and the competent supervisory authority. For a specific country\'s rules, the GPS workers EU map collects verified country-by-country profiles.',
      ],
    },
  ],
  table: {
    title: 'What it records and what it does not record',
    colLeft: 'Records',
    colRight: 'Does not record',
    left: [
      'Location at clock-in and clock-out',
      'Location at the start and end of every break',
      'One GPS point per work-proof photo',
      'The work-proof report\'s seal timestamp, taken from the server clock',
    ],
    right: [
      'No movement during the shift, in between clock events',
      'No location once the employee is off shift or the app is closed',
      'No scoring or profiling of behaviour',
    ],
  },
  sourcesTitle: 'Sources and references',
  sources: [
    'Court of Cosenza (Italy), judgment no. 972 of 1 July 2026',
    'Italian Data Protection Authority (Garante), measure no. 382 of 28 May 2026 (doc-web 10259916)',
    'Italian Data Protection Authority (Garante), measure no. 135 of 13 March 2025 (doc-web 10128005), overturned by the judgment above',
    'Italian Law no. 300 of 20 May 1970 (Workers\' Statute), art. 4',
    'EU Regulation 2016/679 (GDPR), articles 5, 6, 12-14, 25',
  ],
  disclaimer:
    'This page describes general, source-verifiable principles and is not legal advice: for your specific situation, check with an employment lawyer or a data protection officer.',
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        q: 'Is GPS tracking of employees banned under GDPR?',
        a: 'No. Data protection authorities do not ban GPS on workers as such. What they fine is continuous tracking, missing information notices, and collecting data that has nothing to do with work: not point-in-time location capture at clock-in.',
      },
      {
        q: 'Do you always need a works-council agreement to use GPS for attendance?',
        a: 'You need one where the system could enable remote monitoring of an employee\'s activity. The Court of Cosenza recognised, though, that a system capturing location only at clock-in, with no continuous tracking, falls under attendance-recording tools that do not require that procedure.',
      },
      {
        q: 'What happens if the system also tracks during breaks?',
        a: 'That is one of the mistakes behind real fines: a haulage company was fined €50,000 partly because tracking continued during breaks. The data minimisation principle (GDPR art. 5) requires the system to stop when the shift stops.',
      },
      {
        q: 'Can GeoTapp track an employee continuously if I ask for it?',
        a: 'No. The app never requests background location permission and has no service that follows a device while the app is closed: it is not a setting that is switched off, it is a permission the code never asks for. You can verify this by reading the app manifest or the app store\'s privacy label.',
      },
      {
        q: 'Does location data stay forever?',
        a: 'No. In the attendance log it is deleted after twelve months, and a company can shorten that to thirty days. It remains in reports already delivered to a client, because those are sealed documents that document work performed.',
      },
    ],
  },
  relatedTitle: 'Related resources',
};

export default en;
