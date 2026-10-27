import type { ContestazioniCopy } from './types';

/**
 * Pagina "Wanneer iemand het werk betwist" (27/10/2026), nativo in olandese (Paesi Bassi).
 * Fonte: it.ts + docs/stampa/scheda-claim.md; stringhe riusate dal dizionario nl (features.*).
 * Registro: "u", come il dizionario del sito. Niente claim vietati (vedi it.ts). Il permesso di posizione
 * in background vale solo per "Android en iPhone" (Apple Watch non verificato). Niente norme italiane.
 */
const nl: ContestazioniCopy = {
  metaTitle: 'Wanneer iemand het werk betwist: wat verandert met GeoTapp | GeoTapp',
  metaDesc:
    'Betwist een klant of medewerker het werk, wat heeft u dan in handen? Dezelfde discussie vanuit drie kanten: bedrijf, medewerker en opdrachtgever.',
  kicker: 'Betwist werk',
  h1: 'Wanneer iemand het werk betwist: wat verandert met GeoTapp',
  lede:
    'Een betwisting kunt u niet voorkomen. Wat u in handen hebt als ze komt, verandert wel: een herinnering tegenover een herinnering, of een document. Hier ziet u dezelfde discussie vanuit drie kanten: het bedrijf, wie het werk doet en wie het werk heeft besteld.',
  updatedLabel: 'Bijgewerkt op 27 oktober 2026',
  scenes: [
    {
      kicker: 'Het bedrijf',
      heading: 'Als u het bedrijf bent',
      scene: '«De klant zegt dat jullie er niet zijn geweest. Of dat jullie er één uur waren, geen drie.»',
      haveTitle: 'Wat u in handen hebt',
      have: [
        'De tijd van aankomst, de pauzes en het vertrek bij elke klus.',
        'De locatie die bij de registratie is vastgelegd. Bij het registreren weigert de app locaties die door nep-locatie-apps zijn gesimuleerd, te onnauwkeurige locaties en onmogelijke verplaatsingen.',
        "De bewijsfoto's van de klus. Bij foto's wordt niets geweigerd: er wordt een melding gemaakt door tijd en locatie van de opname te vergelijken met die van de registratie.",
        "Een rapport dat aan het eind van de klus wordt opgebouwd uit registraties, foto's en notities en wordt verzegeld: elke latere wijziging is zichtbaar.",
      ],
      changeTitle: 'Wat verandert er',
      change: [
        'In plaats van alles uit het hoofd te reconstrueren uit WhatsApp-berichten, e-mails en papieren briefjes, stuurt u een document.',
        'Is er geen netwerk, dan blijft de registratie op de telefoon bewaard en wordt ze vanzelf verzonden zodra het signaal terugkomt, met het tijdstip waarop ze is gemaakt.',
        'Uren die vastliggen zijn uren die u kunt laten zien wanneer u ze factureert.',
      ],
    },
    {
      kicker: 'Wie het werk doet',
      heading: 'Als u degene bent die het werk doet',
      scene: '«Ik heb meer uren gemaakt dan ze me hebben uitbetaald.»',
      haveTitle: 'Wat u hebt',
      have: [
        'Uw eigen werkdiensten, met begintijd, pauzes en eindtijd, die u in de app per periode kunt terugzien, met het totale aantal uren.',
        'De locatie wordt alleen vastgelegd wanneer u registreert of een bewijsfoto maakt: aankomst, begin en einde van een pauze, vertrek.',
        'Tussen twee registraties in wordt er niets automatisch en doorlopend aan locatie vastgelegd. Op Android en iPhone vraagt de app zelfs niet om toestemming voor locatie op de achtergrond.',
      ],
      changeTitle: 'Wat verandert er',
      change: [
        'Als er discussie is over de uren, is er een tijdstip dat door een handeling van uzelf is vastgelegd en niet afhangt van het geheugen van wie dan ook.',
        'Het kantoor ziet de registraties zodra ze binnenkomen: het scherm met de registraties van vandaag toont wat er is geregistreerd, niet waar iemand zich nu bevindt.',
      ],
      extra: {
        title: 'Wat er van de locaties blijft, en hoe lang',
        paragraphs: [
          'In het register worden de locaties na twaalf maanden gewist, met een periode die het bedrijf kan verkorten tot dertig dagen.',
          'In rapporten die al zijn afgeleverd blijven ze staan, omdat het verzegelde documenten zijn, en ze volgen de wettelijke bewaartermijn: na vijf jaar wordt het pakket gewist. Een afgeleverd rapport is een momentopname: het wordt niet bijgewerkt en kan niet worden aangeraakt zonder het zegel te verbreken dat het controleerbaar maakt.',
        ],
      },
    },
    {
      kicker: 'De opdrachtgever',
      heading: 'Als u de opdrachtgever bent',
      scene: '«Ze zeggen dat het werk is gedaan. Hoe weet ik dat zonder hen op hun woord te geloven?»',
      haveTitle: 'Wat u doet',
      have: [
        'U ontvangt een link naar het rapport en controleert het zelf, online of met de offline verifier: één bestand dat geen verbinding met internet maakt en de openbare sleutel bij zich draagt.',
        'De controle berekent de vingerafdrukken van elke gebeurtenis en van elke foto opnieuw en controleert de handtekening. De verificatiepagina toont twee afzonderlijke dingen: of het document intact is, en de handtekening.',
        'Het werkt ook na jaren nog, ook zonder GeoTapp: wie het pakket en de verifier heeft, kan de controle opnieuw uitvoeren.',
      ],
      changeTitle: 'Wat het aantoont en wat niet',
      change: [
        'Het systeem kan helpen om wijzigingen in het afgeleverde pakket op te sporen en de technische samenhang en integriteit ervan te controleren; op zichzelf is het geen absoluut bewijs van het feitelijke gebeuren en geen juridisch advies.',
        '«Document intact» betekent: niet aangeraakt. Het is de handtekening, die zonder de sleutel niet na te maken is, die zegt dat wij het pakket hebben uitgegeven.',
      ],
    },
  ],
  sample: {
    heading: 'Probeer het met een echt rapport',
    paragraphs: [
      'Hieronder staat een voorbeeldrapport, het vervangen van een groepenkast. Download het en controleer het in uw eigen browser: de controle wordt in uw eigen browser uitgevoerd en het bestand wordt niet naar ons gestuurd.',
    ],
  },
  limits: {
    heading: 'Wat GeoTapp niet doet',
    items: [
      'Het volgt niemand doorlopend, ook niet als het dat zou willen: op Android en iPhone vraagt de app niet om toestemming voor locatie op de achtergrond.',
      'Het toont op zichzelf niet aan dat het feit heeft plaatsgevonden: het zegt of het pakket na aflevering is gewijzigd.',
      'Het belooft niet dat betwistingen verdwijnen: het verandert waarmee u komt wanneer ze er zijn.',
      'Het vervangt geen arbeidsadviseur, geen functionaris voor gegevensbescherming (FG/DPO), geen afspraken met de medewerkersvertegenwoordiging (ondernemingsraad of vakbond) en geen toestemmingen die de wet van uw land kan vereisen.',
    ],
    formula:
      'Kortom: het systeem kan helpen om wijzigingen in het afgeleverde pakket op te sporen en de technische samenhang en integriteit ervan te controleren; op zichzelf is het geen absoluut bewijs van het feitelijke gebeuren en geen juridisch advies.',
  },
  faq: {
    title: 'Veelgestelde vragen',
    items: [
      {
        q: 'Is een GeoTapp-rapport genoeg om een betwisting te winnen?',
        a: 'Niet op zichzelf. Het rapport toont wat er is vastgelegd en laat iedereen controleren dat het na aflevering niet is gewijzigd; het toont op zichzelf niet aan dat het feit heeft plaatsgevonden en is geen juridisch advies. Het is een geordend, controleerbaar document in plaats van een herinnering tegenover een herinnering.',
      },
      {
        q: 'Volgt GeoTapp medewerkers tijdens de werkdag?',
        a: 'Nee. De locatie wordt alleen vastgelegd wanneer de medewerker een handeling verricht: aankomst, begin en einde van een pauze, vertrek, bewijsfoto. Tussen twee registraties in wordt er niets automatisch en doorlopend aan locatie vastgelegd. Op Android en iPhone vraagt de app zelfs niet om toestemming voor locatie op de achtergrond.',
      },
      {
        q: 'Moet de opdrachtgever GeoTapp vertrouwen om het rapport te controleren?',
        a: 'Nee. De offline verifier is één bestand dat geen verbinding met internet maakt en de openbare sleutel bij zich draagt: het berekent de vingerafdrukken opnieuw en controleert de handtekening, ook na jaren, ook zonder GeoTapp. De controle zegt of het pakket is gewijzigd, niet of het feit heeft plaatsgevonden.',
      },
      {
        q: 'Wat gebeurt er na de aflevering met de locaties?',
        a: 'In het register worden ze na twaalf maanden gewist, met een periode die het bedrijf kan verkorten tot dertig dagen. In rapporten die al zijn afgeleverd blijven ze staan, omdat het verzegelde documenten zijn, en ze volgen de wettelijke bewaartermijn: na vijf jaar wordt het pakket gewist.',
      },
      {
        q: 'Waar staan de gegevens?',
        a: 'De werkgegevens en de foto\'s staan op servers in de Europese Unie.',
      },
      {
        q: 'Vervangt GeoTapp de arbeidsadviseur of de afspraken met de ondernemingsraad?',
        a: 'Nee. GeoTapp helpt binnen de grenzen van de AVG te blijven, maar vervangt geen arbeidsadviseur, geen functionaris voor gegevensbescherming, geen afspraken met de medewerkersvertegenwoordiging (ondernemingsraad of vakbond) en geen toestemmingen die de wet van uw land kan vereisen.',
      },
    ],
  },
  next: {
    heading: 'Verder lezen',
    paragraph: 'Wilt u per functie zien wat erin zit, of de prijzen bekijken, dan kan dat hier.',
    featuresLabel: 'Wat GeoTapp doet, functie per functie →',
    pricingLabel: 'Bekijk de prijzen →',
  },
  card: {
    title: 'Wat verandert er als iemand het werk betwist',
    text: 'Bedrijf, medewerker en opdrachtgever naast elkaar.',
    cta: 'Lees de pagina',
  },
  disclaimer:
    'Deze pagina beschrijft wat GeoTapp doet en is geen juridisch advies. Wend u voor uw specifieke situatie tot een arbeidsadviseur of een functionaris voor gegevensbescherming.',
};

export default nl;
