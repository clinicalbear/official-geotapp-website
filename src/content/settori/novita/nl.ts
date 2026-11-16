import type { NovitaCopy } from './types';

const copy: NovitaCopy = {
  ui: {
    kicker: 'Nieuw',
    flowCaption: 'Flow, het paneel van de eigenaar',
    phoneCaption: 'TimeTracker, op de telefoon',
    altFlow: 'Flow, het paneel van de eigenaar: scherm van {tool}',
    altPhone: 'TimeTracker op de telefoon: scherm van {tool}',
    flowOnly: 'Dit hulpmiddel gebruikt u in het Flow-paneel: op de telefoon van uw medewerkers hoeft u niets in te stellen.',
    seeAlso: 'Voor elektrische metingen, ketels en F-gassen zijn er aparte hulpmiddelen:',
  },
  sections: {
    sicurezza: {
      title: 'Nieuwe hulpmiddelen voor beveiliging: surveillanceronde, alleenwerkers, overdracht en noodsituaties',
      intro: 'Zodra u uw branche kiest, zet GeoTapp alleen de hulpmiddelen voor uw vak aan. Voor beveiliging zijn dat er drie, plus de module Noodsituaties die voor alle branches geldt. Elk hulpmiddel heeft een deel in Flow, waar u beslist en controleert, en een deel op de telefoon van de bewaker.',
    },
    pulizie: {
      title: 'Nieuwe hulpmiddelen voor schoonmaak: kwaliteitscontrole en veiligheidsinformatiebladen',
      intro: 'Twee hulpmiddelen voor de klachten en controles waar een schoonmaakbedrijf elke week mee te maken krijgt. Ze gaan aan zodra u uw branche opgeeft, de andere blijven verborgen.',
    },
    elettricisti: {
      title: 'Nieuwe hulpmiddelen voor elektriciens: metingen bij oplevering en keuringsagenda',
      intro: 'Voor wie een installatie oplevert en voor wie de periodieke inspecties van klanten in de gaten moet houden. GeoTapp verzamelt, zet in opmaak en herinnert: de metingen, verklaringen en handtekeningen blijven bij degene die het werk doet.',
    },
    edilizia: {
      title: 'Nieuwe hulpmiddelen voor de bouw: documenten van onderaannemers en een eigen schatting van de arbeidskosten',
      intro: 'Twee hulpmiddelen voor wie bouwplaatsen coördineert met onderaannemers, zodat de papieren op orde zijn als het erop aankomt. U gebruikt ze in Flow, het paneel van de eigenaar.',
    },
    idraulici: {
      title: 'Nieuwe hulpmiddelen voor loodgieters en installateurs: ketelonderhoud en F-gasadministratie',
      intro: 'Werk dat elk jaar terugkomt en juist vergeten wordt als het nodig is: klanten terugbellen voor onderhoud aan de installatie en de apparaten met gefluoreerde gassen op orde houden.',
    },
    installatori: {
      title: 'Nieuwe hulpmiddelen voor installateurs: oplevering met handtekening en voorraad in de bus',
      intro: 'Twee hulpmiddelen voor wat u bij elke klus tijd kost: de oplevering met de klant afronden en weten wat er echt in de bus ligt.',
    },
    manutenzione: {
      title: 'Nieuwe hulpmiddelen voor onderhoud: reactietijden en QR-codes op apparaten',
      intro: 'Voor wie met servicecontracten en veel apparaten verspreid over meerdere gebouwen werkt: weten hoeveel tijd er nog is voor elke melding en de historie van een machine met één handeling terugvinden.',
    },
    impianti: {
      title: 'Nieuwe hulpmiddelen voor installatiebedrijven: oplevering met handtekening en voorraad in de bus',
      intro: 'Deze pagina is voor wie installaties monteert en oplevert, van welk type ook. Daarom vindt u hier de twee hulpmiddelen die voor iedereen gelden: oplevering met handtekening en voorraad in de bus. Elektrische metingen en ketelonderhoud zijn eigen vakken en hebben eigen hulpmiddelen.',
    },
  },
  tools: {
    giro_ronda: {
      title: 'Surveillanceronde',
      body: 'Het is drie uur \'s nachts en de klant wil weten of de ronde langs alle punten van het magazijn is gelopen. In Flow tekent u de punten op de kaart en stelt u de rondes met hun tijden in; de bewaker tikt onderweg op de telefoon op «Passage». \'s Ochtends ligt het rapport van de nacht al in opmaak klaar.',
      note: 'De locatie wordt alleen gelezen op het moment dat de bewaker op «Passage» tikt: tussen twee punten in wordt niets vastgelegd.',
    },
    lavoratore_isolato: {
      title: 'Alleenwerker',
      body: 'Een bewaker die \'s nachts alleen op een locatie staat. Per locatie kiest u een schema met het interval dat u wilt: op die momenten vraagt de telefoon «Alles in orde?» en waarschuwt de coördinator als er geen antwoord komt. In Flow ziet u de lopende diensten en het verloop van wie wanneer heeft gereageerd.',
      note: 'Er wordt geen locatie verstuurd. Het is een ondersteunend hulpmiddel: het vervangt niet de maatregelen die voor alleenwerkers gelden.',
    },
    consegne_turno: {
      title: 'Dienstoverdracht',
      body: 'Om zes uur draagt de nachtbewaker de locatie over aan de collega van de ochtend. Vroeger waren dat sleutels in een kluisje en een voicebericht; nu schrijft hij aan het eind van de dienst notities, sleutels en bijzonderheden voor zijn opvolger, die ze vanaf de telefoon overneemt. In Flow ziet u de overdrachten die nog openstaan en de openstaande meldingen. De historie is niet te wijzigen.',
    },
    emergenze: {
      title: 'Noodsituaties en oefeningen',
      body: 'Ontruimingsoefening in een gebouw of op een evenement: de coördinator kiest het scenario en tikt op de plattegrond het gevaarpunt aan. Iedereen in het team krijgt op de telefoon zijn rol, wat te doen en de uitgangen op volgorde, en antwoordt met één tik: aanwezig, onderweg, kan niet. Het dashboard toont wie heeft gereageerd en na hoeveel tijd; de plannen zijn ook zonder verbinding te openen.',
      note: 'Het is een hulpmiddel voor coördinatie en oefening: het vervangt of valideert uw eigen noodplan niet, en een melding kan uitblijven. Daarom bevestigt iedereen zelf.',
    },
    qualita_pulizie: {
      title: 'Kwaliteitscontrole',
      body: 'De contactpersoon van de klant zegt dat de derde verdieping niet goed is schoongemaakt. De teamleider loopt de ruimte langs met de lijst, markeert elk punt als akkoord, niet akkoord of niet van toepassing en voegt een foto toe. In Flow krijgt elk punt een gewicht van 1 tot 3, de maandscore staat per locatie en per ruimte, en aan het eind van de maand komt er een pdf voor de klant, met de openstaande acties.',
    },
    schede_consumi: {
      title: 'Veiligheidsinformatiebladen en verbruik',
      body: 'Wie controleert, wil het veiligheidsinformatieblad zien van het product op de kar. In Flow heeft elke locatie zijn eigen producten, elk met het blad als pdf, en ziet u het verbruik en de kosten van de maand. Op de telefoon zijn de bladen ook zonder bereik te lezen en wordt het verbruik meteen genoteerd.',
    },
    verifiche_misure: {
      title: 'Controles en metingen',
      body: 'Verdeelkast dicht, laatste werkdag: doorgang, isolatie, aardlekschakelaars, aarding. De elektricien voert elke meting vanaf de telefoon in met de uitkomst en een foto van het meetinstrument; Flow verzamelt de metingen per opdracht en zet ze in opmaak als bijlage bij het opleveringsrapport (zoals NEN 1010 dat voor de oplevering vraagt).',
      note: 'GeoTapp verzamelt en zet in opmaak: het controleert, valideert of garandeert niets. Het rapport en de handtekening blijven bij het installatiebedrijf dat het werk heeft gedaan.',
    },
    impianti_terra: {
      title: 'Agenda voor periodieke inspecties',
      body: 'Per klant voert u de datum in van de laatste periodieke inspectie van de elektrische installatie, bijvoorbeeld volgens NEN 3140: Flow waarschuwt u vóór de vervaldatum, zodat u het niet pas merkt als het al te laat is. De termijn kiest u zelf, want de wet schrijft hiervoor geen vaste termijn voor.',
      note: 'De data voert uw bedrijf zelf in: GeoTapp herinnert alleen, voert de inspectie niet uit en zegt niet of die geldig is.',
    },
    documenti_imprese: {
      title: 'Documenten van onderaannemers',
      body: 'Voordat u een onderaannemer op de bouwplaats toelaat, wilt u zijn papieren op orde hebben en weten wanneer ze verlopen. Flow houdt per onderaannemer een agenda bij van de documenten die u zelf vastlegt, bijvoorbeeld verzekering, VCA of een uittreksel van de Kamer van Koophandel, en waarschuwt u vóór de datum.',
      note: 'Het waarschuwt vóór de vervaldatum en zegt niet of een document geldig is: dat controleert u zelf, of uw adviseur.',
    },
    congruita: {
      title: 'Schatting van de arbeidskosten',
      body: 'Na afloop van een project vraagt uw adviseur hoeveel de arbeid weegt ten opzichte van de waarde van het werk. Flow maakt per bouwplaats een interne schatting met de geregistreerde uren en exporteert die als csv of pdf, klaar om door te sturen.',
      note: 'Het is een interne schatting en geen officiële berekening: in Nederland bestaat hiervoor geen verplichte toets.',
    },
    caldaie: {
      title: 'Ketelonderhoud',
      body: 'September: meerdere klanten hebben hun onderhoud bijna verlopen. Flow toont de installaties die u deze maand moet terugbellen en maakt een concept van het bericht aan de klant, dat alleen verstuurd wordt als u het zelf verzendt. Op de telefoon heeft de monteur de lijst van installaties met hun data en vult hij het onderhoudsrapport in met de metingen.',
      note: 'Er is geen landelijk register: de metingen en het rapport blijven bij het bedrijf dat het werk doet (voor werk aan gastoestellen met CO-vrij-certificering, Gasketelwet). GeoTapp verzamelt en zet de gegevens in opmaak, controleert niets en garandeert geen conformiteit.',
    },
    fgas: {
      title: 'F-gasadministratie',
      body: 'Een apparaat met gefluoreerde gassen heeft een vulling, een CO2-equivalent en een geschiedenis van werkzaamheden. In Flow ziet u de apparaten en wat u moet bijhouden; vanaf de telefoon opent de monteur het logboek en voegt hij direct een nieuwe handeling toe, zonder \'s avonds over te schrijven.',
      note: 'Het certificaat van bedrijf en monteur (bijvoorbeeld STEK of BRL 100) en de wettelijke verplichtingen blijven bij het bedrijf: GeoTapp verstuurt niets naar instanties.',
    },
    consegna_firma: {
      title: 'Oplevering met handtekening',
      body: 'De montage is klaar. De monteur scant met de telefoon de barcode van elk serienummer, maakt de laatste foto\'s en laat de klant op het scherm tekenen. Er komt een pdf-proces-verbaal uit met uw logo, de bedrijfsgegevens en de barcode van elk serienummer, dat in het werkrapport terechtkomt. In Flow ziet u de opleveringen van de maand en kiest u het uiterlijk van het verslag: logo, gegevens, teksten, kleur.',
    },
    magazzino_furgone: {
      title: 'Voorraad in de bus',
      body: 'De monteur komt bij de klant en merkt dat hij het juiste koppelstuk niet meer heeft. Op de telefoon ziet hij wat er in de bus ligt en wat bijna op is, en noteert hij het gebruikte materiaal per opdracht. In Flow stelt u de drempels per bus in, ziet u wat u moet bijbestellen en wat het materiaal van elke klus kost.',
    },
    sla: {
      title: 'Reactietijden (SLA)',
      body: 'In het contract met de VvE staat binnen welke tijd een melding opgepakt en opgelost moet zijn. In Flow toont elke melding de resterende tijd voor beide, per contract; aan het eind van de maand is er een rapport. Op de telefoon ziet de monteur de aan hem toegewezen meldingen, pakt ze op en zet ze op opgelost.',
    },
    qr_apparecchi: {
      title: 'QR-codes op apparaten',
      body: 'Voor een pomp of een verdeelkast scant de monteur het QR-label en heeft meteen de historie en de werkzaamheden van dat apparaat. Wie scant zonder account, bijvoorbeeld een huurder, kan een probleem melden. In Flow beheert u de apparaten en print u de labels.',
    },
  },
  shots: {
    flow_emergenze_attiva: 'Flow: de coördinator kiest het scenario en tikt op de plattegrond het gevaarpunt aan om de oefening te starten',
    flow_emergenze_evento: 'Flow: dashboard van de lopende oefening, met wie heeft gereageerd en hoe snel',
    flow_emergenze_evento_persone: 'Flow: de lijst van het team met hun antwoord, aanwezig, onderweg of kan niet',
    flow_emergenze_sito: 'Flow: de plattegrond van de locatie met uitgangen, voorzieningen en zones',
    flow_emergenze_protocolli: 'Flow: de protocollen per scenario en rol',
    flow_emergenze_squadre: 'Flow: de teams met hun certificaten, en wie ontbreekt wordt gemeld',
    flow_emergenze_scadenzario: 'Flow: agenda van de certificaten en de controles van de voorzieningen',
    tt_emergenze_dashboard: 'Telefoon: het beginscherm met de melding van de oefening',
    tt_emergenze_indicazioni: 'Telefoon: de persoonlijke aanwijzingen, met de rol en wat te doen',
    tt_emergenze_indicazioni_2: 'Telefoon: de uitgangen op volgorde, zonder de geblokkeerde',
    tt_emergenze_risposta: 'Telefoon: antwoorden met één tik, aanwezig, onderweg of kan niet',
    tt_emergenze_piani: 'Telefoon: de plannen, ook zonder verbinding te raadplegen',
  },
};

export default copy;
