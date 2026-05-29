import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Software voor Elektrotechnici en Installateurs | Werkbonbeheer | GeoTapp',
    description: 'GeoTapp voor elektrotechnici, installateurs en onderhoudsbedrijven: werkbonbeheer, GPS-urenregistratie, controleerbare werkrapporten en fotobewijs. Conform CAO Elektrotechnisch.',
  },
  hero: {
    badge: 'Software voor Elektrotechnici, Installateurs en Onderhoudsteams',
    h1_line1: 'Buitendienst onder controle:',
    h1_line2: 'werkbonnen, uren en bewijs op één plek',
    subtitle: 'GeoTapp verbindt Flow + TimeTracker voor bedrijven die werken tussen busjes, bouwplaatsen en eindklanten. Android- en iOS-apps ondersteunen de monteur in het veld; het kantoor ziet de opdracht, tijden, fotobewijs en notities zonder achter iemand aan te bellen. AVG-conform, CAO Elektrotechnisch-geschikt.',
    cta_primary: 'Demo aanvragen',
    cta_note: 'Geen verplichtingen. Reactie binnen 12 werkuren.',
  },
  pain: {
    title: 'Het probleem dat u al kent',
    items: [
      {
        title: 'Geschillen over uren en werkzaamheden',
        desc: 'De klant betwist de aanwezigheidstijd. De monteur heeft geen bewijs. Het geschil sleept weken door en kost meer dan de klus zelf.',
      },
      {
        title: 'Kantoor achter de buitendienst aan',
        desc: 'De leidinggevende belt monteurs om te weten waar ze zijn, wat ze hebben gedaan, wanneer ze klaar zijn. Elk telefoontje onderbreekt beide kanten.',
      },
      {
        title: 'Onvolledige of verloren werkbonnen',
        desc: 'Briefjes, WhatsApp, e-mails: de gegevens komen onvolledig, te laat of helemaal niet. De eindafrekening samenstellen is opnieuw een apart karwei.',
      },
    ],
  },
  workflow: {
    title: 'Hoe het werkt in drie stappen',
    subtitle: 'Van het busje naar het kantoor — zonder telefoontjes.',
    steps: [
      {
        title: 'Monteur klokt in op locatie',
        desc: 'Met GeoTapp TimeTracker registreert hij begin, einde, foto\'s en notities direct vanaf zijn smartphone. GPS-geverifieerd, AVG-conform.',
      },
      {
        title: 'Kantoor ziet alles in real time',
        desc: 'Flow ontvangt de gegevens onmiddellijk. De leidinggevende ziet opdracht, voortgang, toegewezen monteur en fotobewijs zonder te bellen.',
      },
      {
        title: 'Het rapport is al klaar',
        desc: 'Aan het einde van de klus is het werkrapport al gestructureerd met echte gegevens. Geen handmatige reconstructie. Geen geschil zonder antwoord.',
      },
    ],
  },
  features: {
    title: 'Wat u krijgt',
    items: [
      {
        title: 'Controleerbare GPS-urenregistratie',
        desc: 'Elke in- en uitklokking is gekoppeld aan locatie, tijdstempel en opdracht. Verdedigbaar tegenover klanten en arbeidsinspectie.',
      },
      {
        title: 'Fotobewijs vanuit het veld',
        desc: 'De monteur fotografeert direct vanuit de app. Afbeeldingen gekoppeld aan de opdracht met datum en tijd. Geen ruimte voor betwisting.',
      },
      {
        title: 'Export voor salarisverwerking',
        desc: 'Exporteer maandelijkse aanwezigheidsgegevens compatibel met AFAS en NMBRS. Salarisverwerking wordt een taak van 10 minuten.',
      },
    ],
  },
  testimonial: {
    quote: 'We waren vroeger uren kwijt aan het ophalen van werkbonnen uit het veld. Nu is het rapport klaar als de monteur terug bij het busje stapt.',
    author: 'Jan V.',
    role: 'Operationeel manager, elektrotechnisch installatiebedrijf',
  },
  faq: {
    title: 'Veelgestelde vragen',
    subtitle: 'Wat ons het vaakst wordt gevraagd voor de start.',
    items: [
      {
        q: 'Is GeoTapp geschikt voor elektrotechnici en installateurs?',
        a: 'Ja. GeoTapp helpt elektrotechnici, installateurs en onderhoudsbedrijven bij werkbonbeheer, urenregistratie, aanwezigheid en veldbewijs tussen locatie en kantoor, conform de CAO Elektrotechnisch.',
      },
      {
        q: 'Kan ik GeoTapp gebruiken voor werkrapporten en fotobewijs?',
        a: 'Ja. TimeTracker verzamelt foto\'s, notities en controleerbare tijdregistraties in het veld, terwijl Flow alles koppelt aan het opdrachtdossier en de operationele geschiedenis.',
      },
      {
        q: 'Helpt GeoTapp om geschillen over uren en werkzaamheden te verminderen?',
        a: 'Dat is een van de voornaamste toepassingen: tijden, locatie, notities en fotobewijs maken het reconstrueren en verdedigen van wat er op locatie is gedaan veel eenvoudiger.',
      },
      {
        q: 'Heeft de ondernemingsraad instemmingsrecht bij invoering van GeoTapp?',
        a: 'Ja. Onder art. 27 lid 1 sub l WOR (Wet op de ondernemingsraden) heeft de OR instemmingsrecht over een tijdregistratiesysteem of personeelsvolgsysteem. GeoTapp levert de DPIA en de OR-stukken kant-en-klaar mee, zodat de invoering technisch en juridisch in orde is voordat het systeem live gaat. Zonder OR-instemming geen rollout, dat is hoe wij het ontwerpen.',
      },
      {
        q: 'Is de GPS-registratie AVG-conform?',
        a: 'Ja. GeoTapp registreert uitsluitend in- en uitklokken met GPS-validatie van de werklocatie, geen continue tracking, geen achtergrondvolging buiten dienst. De gegevensminimalisatie (art. 5 lid 1 sub c AVG) en doelbinding zijn structureel in de productarchitectuur ingebouwd, niet als optionele instelling. Bewaartermijnen zijn conform CAO Elektrotechnisch en de Arbeidstijdenwet.',
      },
      {
        q: 'Hoe gaat GeoTapp om met de privacy van de eindklant?',
        a: 'Voor installateurs bij particulieren splitst GeoTapp twee gegevensstromen: de werkgever ziet aanwezigheidsbewijs op de klantlocatie, maar het klantadres komt niet in een centrale database terecht en de route tussen klantbezoeken wordt niet vastgelegd. De monteur is dus niet 24/7 zichtbaar, en de eindklant houdt zijn privacy. Geschikt voor BIK-installateurs en F-gassen-erkende bedrijven.',
      },
      {
        q: 'Welke gegevens kan ik exporteren voor de salarisadministratie?',
        a: 'GeoTapp exporteert maandelijkse aanwezigheidsoverzichten compatibel met AFAS, NMBRS en Loket.nl. De export bevat per medewerker: gewerkte uren per opdracht, overuren, reisuren conform CAO, geverifieerd met GPS en tijdstempel. De salarisverwerker krijgt een controleerbaar bestand in plaats van een schatting.',
      },
      {
        q: 'Hoe verhoudt GeoTapp zich tot het toetsingskader van de AP?',
        a: 'De Autoriteit Persoonsgegevens vereist voor systematische monitoring van werknemers een DPIA (gegevensbeschermingseffectbeoordeling). Bij GeoTapp ligt deze klaar voor uw OR. De grondslag is gerechtvaardigd belang (art. 6 lid 1 sub f AVG) onderbouwd met de bedrijfsspecifieke noodzaak; de proportionaliteit wordt aangetoond door beperkte registratie (alleen klok-momenten) en strakke bewaartermijnen. Geen black-box, alle datavelden staan in de publieke documentatie.',
      },
    ],
  },
  cta: {
    title: 'Stop met achter het veld aan rennen.',
    subtitle: 'GeoTapp Flow en TimeTracker geven uw bedrijf de operationele controle die u echt nodig heeft.',
    primary: 'Demo aanvragen',
    secondary: 'Prijzen bekijken',
  },
  schema_sector_name: 'Elektrotechnici en installateurs',
};

export default content;
