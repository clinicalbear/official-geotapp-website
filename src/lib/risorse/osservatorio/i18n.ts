import type { AppLocale } from '@/lib/i18n/config';

/**
 * Testi della risorsa "Osservatorio europeo" nelle undici lingue del sito.
 *
 * I nomi dei paesi restano in codice ISO (IT, FR, DE...) perche' sono neutri e leggibili
 * in ogni lingua, e il nome dell'autorita' resta nella SUA lingua: "Garante per la
 * protezione dei dati personali" non si traduce, e' il nome proprio di un ente.
 */

export interface OsservatorioStrings {
  kicker: string;
  h1: string;
  lede: string;
  conteggio: (voci: number, paesi: number, data: string) => string;
  quadroNota: string;
  filtroTitolo: string;
  tutti: string;
  conteggioFiltrato: (voci: number, paese: string, data: string) => string;
  thData: string;
  thPaese: string;
  thAutorita: string;
  thProvvedimento: string;
  thTemi: string;
  thSanzione: string;
  chiusura: string;
  metaTitle: string;
  metaDesc: string;
  avviso: string;
  nomeBreve: string;
  creditoEmbed: string;
  datiTitolo: string;
  datiLicenza: string;
  incorporaTitolo: string;
  incorporaIstruzioni: string;
  copia: string;
  copiato: string;
  temi: Record<string, string>;
}

const it: OsservatorioStrings = {
  kicker: 'Risorse',
  h1: 'Osservatorio europeo dei provvedimenti sul controllo dei lavoratori',
  lede: 'Le autorita’ per la protezione dei dati decidono ogni settimana su geolocalizzazione, videosorveglianza e rilevazione delle presenze, e quelle decisioni stanno sparse su ventisei siti ufficiali in nove lingue. Qui sono in una tabella sola, ognuna con il collegamento al documento originale.',
  conteggio: (v, p, d) => `${v} provvedimenti da ${p} paesi. Aggiornato il ${d}.`,
  quadroNota: 'Le decisioni britanniche e svizzere nascono sotto un quadro normativo diverso dal Regolamento europeo, ed e’ indicato riga per riga.',
  filtroTitolo: 'Filtra per paese',
  tutti: 'Tutti',
  conteggioFiltrato: (v, p, d) => `${v} provvedimenti, ${p}. Aggiornato il ${d}.`,
  thData: 'Data', thPaese: 'Paese', thAutorita: 'Autorita’',
  thProvvedimento: 'Provvedimento', thTemi: 'Temi', thSanzione: 'Sanzione',
  chiusura: 'Ogni voce e’ raccolta dal sito ufficiale dell’autorita’ che l’ha emessa. Gli importi compaiono solo dove la fonte li scrive per esteso, i titoli non sono riscritti e nessuna sintesi e’ interpretata: quello che si legge qui si puo’ verificare in un clic.',
  metaTitle: 'Osservatorio europeo: provvedimenti su controllo e presenze dei lavoratori',
  metaDesc: 'I provvedimenti delle autorita’ europee su geolocalizzazione, videosorveglianza e presenze dei lavoratori, con il link al documento ufficiale.',
  avviso: 'Due autorita’ mancano all’appello, la Renania Settentrionale-Vestfalia e l’Austria: i loro siti non rispondono, per un motivo tecnico che sta dalla loro parte e non dalla nostra. Il sistema ci bussa ogni mattina e le aggiunge il giorno che tornano raggiungibili.',
  nomeBreve: 'Osservatorio europeo',
  creditoEmbed: 'Dati: Osservatorio europeo GeoTapp',
  datiTitolo: 'Prendi questi dati',
  datiLicenza: 'Questi dati si possono riusare liberamente, anche per lavoro: basta citare GeoTapp e mettere un collegamento a questa pagina. Non serve chiedere il permesso e non c’e’ nessun modulo da compilare. Ogni riga porta il link al documento originale dell’autorita’, che resta la fonte da citare quando si scrive di un singolo provvedimento.',
  incorporaTitolo: 'Incorpora la tabella nel tuo sito',
  incorporaIstruzioni: 'Copia questo codice dove vuoi che compaia. La tabella si aggiorna da sola quando il registro cresce, e porta con se’ la citazione della fonte. Esce nella lingua di chi la guarda, non in quella di chi copia il codice.',
  copia: 'Copia',
  copiato: 'Copiato',
  temi: { geolocalizzazione: 'geolocalizzazione', controllo_a_distanza: 'controllo a distanza', presenze_orario: 'presenze e orario', email_dipendenti: 'posta dei dipendenti', lavoro_agile: 'lavoro agile' },
};

const en: OsservatorioStrings = {
  kicker: 'Resources',
  h1: 'European register of rulings on monitoring at work',
  lede: 'Data protection authorities decide on location tracking, camera surveillance and attendance records every week, and those decisions sit on twenty-six official sites in nine languages. Here they are in one table, each with a link to the original document.',
  conteggio: (v, p, d) => `${v} rulings from ${p} countries. Updated ${d}.`,
  quadroNota: 'UK and Swiss decisions come from a different legal framework than the EU Regulation, and that is marked on every row.',
  filtroTitolo: 'Filter by country',
  tutti: 'All',
  conteggioFiltrato: (v, p, d) => `${v} rulings, ${p}. Updated ${d}.`,
  thData: 'Date', thPaese: 'Country', thAutorita: 'Authority',
  thProvvedimento: 'Ruling', thTemi: 'Topics', thSanzione: 'Fine',
  chiusura: 'Every entry is collected from the official site of the authority that issued it. Amounts appear only where the source writes them out, titles are not rewritten and nothing is interpreted: everything here can be checked in one click.',
  metaTitle: 'European register: rulings on worker monitoring and attendance',
  metaDesc: 'Rulings from European data protection authorities on GPS, camera surveillance and attendance tracking at work, each linked to the official document.',
  avviso: 'Two authorities are missing, North Rhine-Westphalia and Austria. Their sites are not responding, for a technical reason on their side rather than ours. The system knocks every morning and will add them the day they come back.',
  nomeBreve: 'European register',
  creditoEmbed: 'Data: GeoTapp European register',
  datiTitolo: 'Take this data',
  datiLicenza: 'You are free to reuse this data, including commercially: just credit GeoTapp and link back to this page. No permission to ask for, no form to fill in. Every row links to the authority’s original document, which stays the source to cite when writing about a single ruling.',
  incorporaTitolo: 'Embed the table on your site',
  incorporaIstruzioni: 'Copy this code wherever you want the table to appear. It updates itself as the register grows, and carries the credit with it. It shows in each reader’s own language, not in the language of whoever copied the code.',
  copia: 'Copy',
  copiato: 'Copied',
  temi: { geolocalizzazione: 'location tracking', controllo_a_distanza: 'remote monitoring', presenze_orario: 'attendance and hours', email_dipendenti: 'employee email', lavoro_agile: 'remote work' },
};

const de: OsservatorioStrings = {
  kicker: 'Ressourcen',
  h1: 'Europaeisches Register der Entscheidungen zur Kontrolle am Arbeitsplatz',
  lede: 'Die Datenschutzbehoerden entscheiden woechentlich ueber Standortdaten, Videoueberwachung und Zeiterfassung, und diese Entscheidungen liegen auf sechsundzwanzig amtlichen Webseiten in neun Sprachen. Hier stehen sie in einer einzigen Tabelle, jede mit dem Link zum Originaldokument.',
  conteggio: (v, p, d) => `${v} Entscheidungen aus ${p} Laendern. Stand ${d}.`,
  quadroNota: 'Britische und schweizerische Entscheidungen beruhen auf einem anderen Rechtsrahmen als die EU-Verordnung, und das ist in jeder Zeile vermerkt.',
  filtroTitolo: 'Nach Land filtern',
  tutti: 'Alle',
  conteggioFiltrato: (v, p, d) => `${v} Entscheidungen, ${p}. Stand ${d}.`,
  thData: 'Datum', thPaese: 'Land', thAutorita: 'Behoerde',
  thProvvedimento: 'Entscheidung', thTemi: 'Themen', thSanzione: 'Bussgeld',
  chiusura: 'Jeder Eintrag stammt von der amtlichen Seite der Behoerde, die ihn erlassen hat. Betraege erscheinen nur dort, wo die Quelle sie ausschreibt, Titel werden nicht umformuliert und nichts wird gedeutet: alles hier ist mit einem Klick pruefbar.',
  metaTitle: 'Europaeisches Register: Entscheidungen zu Ueberwachung und Zeiterfassung',
  metaDesc: 'Entscheidungen europaeischer Datenschutzbehoerden zu GPS, Videoueberwachung und Zeiterfassung am Arbeitsplatz, jeweils mit Link zum amtlichen Dokument.',
  avviso: 'Zwei Behörden fehlen, Nordrhein-Westfalen und Österreich. Ihre Server antworten nicht, aus einem technischen Grund auf ihrer Seite und nicht auf unserer. Das System klopft jeden Morgen an und nimmt sie auf, sobald sie wieder erreichbar sind.',
  nomeBreve: 'Europaeisches Register',
  creditoEmbed: 'Daten: GeoTapp Europaeisches Register',
  datiTitolo: 'Nehmen Sie diese Daten',
  datiLicenza: 'Diese Daten duerfen frei weiterverwendet werden, auch gewerblich: nennen Sie GeoTapp und setzen Sie einen Link auf diese Seite. Keine Anfrage, kein Formular. Jede Zeile verlinkt das Originaldokument der Behoerde, das bei einer einzelnen Entscheidung die zu zitierende Quelle bleibt.',
  incorporaTitolo: 'Tabelle auf Ihrer Seite einbinden',
  incorporaIstruzioni: 'Kopieren Sie diesen Code an die Stelle, wo die Tabelle stehen soll. Sie aktualisiert sich selbst, wenn das Register waechst, und bringt die Quellenangabe mit. Sie erscheint in der Sprache der Lesenden, nicht in der Sprache dessen, der den Code kopiert hat.',
  copia: 'Kopieren',
  copiato: 'Kopiert',
  temi: { geolocalizzazione: 'Standortdaten', controllo_a_distanza: 'Fernueberwachung', presenze_orario: 'Anwesenheit und Arbeitszeit', email_dipendenti: 'dienstliche E-Mail', lavoro_agile: 'mobiles Arbeiten' },
};

const fr: OsservatorioStrings = {
  kicker: 'Ressources',
  h1: 'Registre europeen des decisions sur le controle au travail',
  lede: 'Les autorites de protection des donnees tranchent chaque semaine sur la geolocalisation, la videosurveillance et le releve des presences, et ces decisions se trouvent sur vingt-six sites officiels en neuf langues. Elles sont ici dans un seul tableau, chacune avec le lien vers le document d’origine.',
  conteggio: (v, p, d) => `${v} decisions provenant de ${p} pays. Mis a jour le ${d}.`,
  quadroNota: 'Les decisions britanniques et suisses relevent d’un cadre juridique different du Reglement europeen, et cela est indique ligne par ligne.',
  filtroTitolo: 'Filtrer par pays',
  tutti: 'Tous',
  conteggioFiltrato: (v, p, d) => `${v} decisions, ${p}. Mis a jour le ${d}.`,
  thData: 'Date', thPaese: 'Pays', thAutorita: 'Autorite',
  thProvvedimento: 'Decision', thTemi: 'Themes', thSanzione: 'Amende',
  chiusura: 'Chaque entree provient du site officiel de l’autorite qui l’a rendue. Les montants ne figurent que la ou la source les ecrit en toutes lettres, les titres ne sont pas reecrits et rien n’est interprete: tout se verifie en un clic.',
  metaTitle: 'Registre europeen: decisions sur le controle et les presences des salaries',
  metaDesc: 'Les decisions des autorites europeennes sur le GPS, la videosurveillance et le releve des presences au travail, avec le lien vers le document officiel.',
  avviso: 'Deux autorités manquent, la Rhénanie-du-Nord-Westphalie et l’Autriche. Leurs sites ne répondent pas, pour une raison technique qui se trouve de leur côté et non du nôtre. Le système frappe chaque matin et les ajoutera dès qu’elles répondront.',
  nomeBreve: 'Registre europeen',
  creditoEmbed: 'Donnees : registre europeen GeoTapp',
  datiTitolo: 'Prenez ces donnees',
  datiLicenza: 'Ces donnees sont librement reutilisables, y compris a titre commercial : citez GeoTapp et mettez un lien vers cette page. Rien a demander, aucun formulaire. Chaque ligne renvoie au document original de l’autorite, qui reste la source a citer pour une decision precise.',
  incorporaTitolo: 'Integrez le tableau sur votre site',
  incorporaIstruzioni: 'Copiez ce code la ou vous voulez voir le tableau. Il se met a jour tout seul quand le registre s’etoffe, et emporte la mention de la source avec lui. Il s’affiche dans la langue du lecteur, pas dans celle de qui a copie le code.',
  copia: 'Copier',
  copiato: 'Copie',
  temi: { geolocalizzazione: 'geolocalisation', controllo_a_distanza: 'controle a distance', presenze_orario: 'presences et horaires', email_dipendenti: 'messagerie professionnelle', lavoro_agile: 'teletravail' },
};

const es: OsservatorioStrings = {
  kicker: 'Recursos',
  h1: 'Registro europeo de resoluciones sobre el control en el trabajo',
  lede: 'Las autoridades de proteccion de datos resuelven cada semana sobre geolocalizacion, videovigilancia y registro de jornada, y esas resoluciones estan repartidas en veintiseis sitios oficiales en nueve idiomas. Aqui estan en una sola tabla, cada una con el enlace al documento original.',
  conteggio: (v, p, d) => `${v} resoluciones de ${p} paises. Actualizado el ${d}.`,
  quadroNota: 'Las resoluciones britanicas y suizas nacen de un marco legal distinto del Reglamento europeo, y se indica en cada fila.',
  filtroTitolo: 'Filtrar por pais',
  tutti: 'Todos',
  conteggioFiltrato: (v, p, d) => `${v} resoluciones, ${p}. Actualizado el ${d}.`,
  thData: 'Fecha', thPaese: 'Pais', thAutorita: 'Autoridad',
  thProvvedimento: 'Resolucion', thTemi: 'Temas', thSanzione: 'Multa',
  chiusura: 'Cada entrada procede del sitio oficial de la autoridad que la dicto. Los importes aparecen solo donde la fuente los escribe, los titulos no se reescriben y nada se interpreta: todo se puede comprobar en un clic.',
  metaTitle: 'Registro europeo: resoluciones sobre control y jornada de los trabajadores',
  metaDesc: 'Resoluciones de las autoridades europeas sobre GPS, videovigilancia y registro de jornada, con enlace al documento oficial.',
  avviso: 'Faltan dos autoridades, Renania del Norte-Westfalia y Austria. Sus sitios no responden, por un motivo técnico que está de su lado y no del nuestro. El sistema llama cada mañana y las añadirá el día que vuelvan.',
  nomeBreve: 'Registro europeo',
  creditoEmbed: 'Datos: registro europeo GeoTapp',
  datiTitolo: 'Llevate estos datos',
  datiLicenza: 'Estos datos se pueden reutilizar libremente, tambien con fines comerciales: basta con citar a GeoTapp y enlazar esta pagina. No hay permiso que pedir ni formulario que rellenar. Cada fila enlaza el documento original de la autoridad, que sigue siendo la fuente a citar para una resolucion concreta.',
  incorporaTitolo: 'Inserta la tabla en tu web',
  incorporaIstruzioni: 'Copia este codigo donde quieras que aparezca. La tabla se actualiza sola cuando el registro crece, y lleva la cita de la fuente consigo. Se muestra en el idioma de quien la lee, no en el de quien copio el codigo.',
  copia: 'Copiar',
  copiato: 'Copiado',
  temi: { geolocalizzazione: 'geolocalizacion', controllo_a_distanza: 'control a distancia', presenze_orario: 'jornada y presencia', email_dipendenti: 'correo del trabajador', lavoro_agile: 'teletrabajo' },
};

const pt: OsservatorioStrings = {
  kicker: 'Recursos',
  h1: 'Registo europeu das decisoes sobre controlo no trabalho',
  lede: 'As autoridades de protecao de dados decidem todas as semanas sobre geolocalizacao, videovigilancia e registo de assiduidade, e essas decisoes estao espalhadas por vinte e seis sites oficiais em nove linguas. Aqui estao numa so tabela, cada uma com a ligacao ao documento original.',
  conteggio: (v, p, d) => `${v} decisoes de ${p} paises. Atualizado a ${d}.`,
  quadroNota: 'As decisoes britanicas e suicas nascem de um quadro legal diferente do Regulamento europeu, e isso e indicado linha a linha.',
  filtroTitolo: 'Filtrar por pais',
  tutti: 'Todos',
  conteggioFiltrato: (v, p, d) => `${v} decisoes, ${p}. Atualizado a ${d}.`,
  thData: 'Data', thPaese: 'Pais', thAutorita: 'Autoridade',
  thProvvedimento: 'Decisao', thTemi: 'Temas', thSanzione: 'Coima',
  chiusura: 'Cada entrada vem do site oficial da autoridade que a emitiu. Os montantes aparecem apenas onde a fonte os escreve, os titulos nao sao reescritos e nada e interpretado: tudo se verifica num clique.',
  metaTitle: 'Registo europeu: decisoes sobre controlo e assiduidade dos trabalhadores',
  metaDesc: 'Decisoes das autoridades europeias sobre GPS, videovigilancia e registo de assiduidade, com ligacao ao documento oficial.',
  avviso: 'Faltam duas autoridades, a Renânia do Norte-Vestefália e a Áustria. Os seus sites não respondem, por um motivo técnico que está do lado deles e não do nosso. O sistema bate todas as manhãs e acrescenta-as no dia em que voltarem.',
  nomeBreve: 'Registo europeu',
  creditoEmbed: 'Dados: registo europeu GeoTapp',
  datiTitolo: 'Leve estes dados',
  datiLicenza: 'Estes dados podem ser reutilizados livremente, inclusive para fins comerciais: basta citar a GeoTapp e ligar a esta pagina. Nao ha permissao a pedir nem formulario a preencher. Cada linha liga ao documento original da autoridade, que continua a ser a fonte a citar para uma decisao concreta.',
  incorporaTitolo: 'Incorpore a tabela no seu site',
  incorporaIstruzioni: 'Copie este codigo para onde quiser que a tabela apareca. Atualiza-se sozinha a medida que o registo cresce, e leva a citacao da fonte consigo. Aparece na lingua de quem a le, nao na de quem copiou o codigo.',
  copia: 'Copiar',
  copiato: 'Copiado',
  temi: { geolocalizzazione: 'geolocalizacao', controllo_a_distanza: 'controlo a distancia', presenze_orario: 'assiduidade e horario', email_dipendenti: 'correio do trabalhador', lavoro_agile: 'teletrabalho' },
};

const nl: OsservatorioStrings = {
  kicker: 'Bronnen',
  h1: 'Europees register van besluiten over controle op het werk',
  lede: 'Toezichthouders beslissen elke week over locatiegegevens, cameratoezicht en urenregistratie, en die besluiten staan verspreid over zesentwintig officiele sites in negen talen. Hier staan ze in een tabel, elk met de link naar het oorspronkelijke document.',
  conteggio: (v, p, d) => `${v} besluiten uit ${p} landen. Bijgewerkt op ${d}.`,
  quadroNota: 'Britse en Zwitserse besluiten komen uit een ander wettelijk kader dan de Europese verordening, en dat staat per regel vermeld.',
  filtroTitolo: 'Filter op land',
  tutti: 'Alle',
  conteggioFiltrato: (v, p, d) => `${v} besluiten, ${p}. Bijgewerkt op ${d}.`,
  thData: 'Datum', thPaese: 'Land', thAutorita: 'Toezichthouder',
  thProvvedimento: 'Besluit', thTemi: 'Onderwerpen', thSanzione: 'Boete',
  chiusura: 'Elke regel komt van de officiele site van de toezichthouder die het besluit nam. Bedragen verschijnen alleen waar de bron ze voluit schrijft, titels worden niet herschreven en niets wordt uitgelegd: alles is met een klik te controleren.',
  metaTitle: 'Europees register: besluiten over controle en urenregistratie',
  metaDesc: 'Besluiten van Europese toezichthouders over GPS, cameratoezicht en urenregistratie op het werk, met link naar het officiele document.',
  avviso: 'Twee toezichthouders ontbreken, Noordrijn-Westfalen en Oostenrijk. Hun sites reageren niet, om een technische reden die aan hun kant ligt en niet aan de onze. Het systeem klopt elke ochtend aan en voegt ze toe zodra ze weer bereikbaar zijn.',
  nomeBreve: 'Europees register',
  creditoEmbed: 'Gegevens: Europees register GeoTapp',
  datiTitolo: 'Neem deze gegevens mee',
  datiLicenza: 'Deze gegevens mag u vrij hergebruiken, ook commercieel: noem GeoTapp en link naar deze pagina. Niets aan te vragen, geen formulier. Elke regel linkt naar het originele document van de toezichthouder, en dat blijft de bron die u noemt bij een afzonderlijk besluit.',
  incorporaTitolo: 'Zet de tabel op uw eigen site',
  incorporaIstruzioni: 'Kopieer deze code naar de plek waar de tabel moet komen. Hij werkt zichzelf bij als het register groeit, en neemt de bronvermelding mee. Hij verschijnt in de taal van de lezer, niet in die van wie de code kopieerde.',
  copia: 'Kopieren',
  copiato: 'Gekopieerd',
  temi: { geolocalizzazione: 'locatiegegevens', controllo_a_distanza: 'toezicht op afstand', presenze_orario: 'aanwezigheid en uren', email_dipendenti: 'zakelijke e-mail', lavoro_agile: 'thuiswerken' },
};

const sv: OsservatorioStrings = {
  kicker: 'Resurser',
  h1: 'Europeiskt register over beslut om kontroll i arbetslivet',
  lede: 'Dataskyddsmyndigheterna beslutar varje vecka om positionsdata, kamerabevakning och narvaroregistrering, och besluten ligger utspridda pa tjugosex officiella webbplatser pa nio sprak. Har finns de i en enda tabell, var och en med lank till originaldokumentet.',
  conteggio: (v, p, d) => `${v} beslut fran ${p} lander. Uppdaterat ${d}.`,
  quadroNota: 'Brittiska och schweiziska beslut vilar pa ett annat regelverk an EU-forordningen, och det anges rad for rad.',
  filtroTitolo: 'Filtrera efter land',
  tutti: 'Alla',
  conteggioFiltrato: (v, p, d) => `${v} beslut, ${p}. Uppdaterat ${d}.`,
  thData: 'Datum', thPaese: 'Land', thAutorita: 'Myndighet',
  thProvvedimento: 'Beslut', thTemi: 'Amnen', thSanzione: 'Sanktionsavgift',
  chiusura: 'Varje rad kommer fran den beslutande myndighetens egen webbplats. Belopp visas bara dar kallan skriver ut dem, rubriker skrivs inte om och inget tolkas: allt gar att kontrollera med ett klick.',
  metaTitle: 'Europeiskt register: beslut om overvakning och narvaro i arbetslivet',
  metaDesc: 'Beslut fran europeiska dataskyddsmyndigheter om GPS, kamerabevakning och narvaroregistrering, med lank till originaldokumentet.',
  avviso: 'Två myndigheter saknas, Nordrhein-Westfalen och Österrike. Deras webbplatser svarar inte, av ett tekniskt skäl som ligger på deras sida och inte på vår. Systemet knackar varje morgon och lägger till dem den dag de kommer tillbaka.',
  nomeBreve: 'Europeiskt register',
  creditoEmbed: 'Data: GeoTapp europeiska register',
  datiTitolo: 'Ta med dig dessa data',
  datiLicenza: 'Dessa uppgifter far ateranvandas fritt, aven kommersiellt: ange GeoTapp och lanka till den har sidan. Inget tillstand att be om, inget formular. Varje rad lankar till myndighetens originaldokument, som fortsatt ar kallan att ange for ett enskilt beslut.',
  incorporaTitolo: 'Badda in tabellen pa din webbplats',
  incorporaIstruzioni: 'Kopiera koden dit du vill ha tabellen. Den uppdaterar sig sjalv nar registret vaxer och tar med sig kallhanvisningen. Den visas pa lasarens sprak, inte pa spraket hos den som kopierade koden.',
  copia: 'Kopiera',
  copiato: 'Kopierat',
  temi: { geolocalizzazione: 'positionsdata', controllo_a_distanza: 'overvakning pa distans', presenze_orario: 'narvaro och arbetstid', email_dipendenti: 'arbetsmejl', lavoro_agile: 'distansarbete' },
};

const da: OsservatorioStrings = {
  kicker: 'Ressourcer',
  h1: 'Europaeisk register over afgorelser om kontrol pa arbejdspladsen',
  lede: 'Datatilsynene traeffer hver uge afgorelser om lokationsdata, videoovervagning og tidsregistrering, og de ligger spredt pa seksogtyve officielle sider pa ni sprog. Her er de samlet i en tabel, hver med link til det oprindelige dokument.',
  conteggio: (v, p, d) => `${v} afgorelser fra ${p} lande. Opdateret ${d}.`,
  quadroNota: 'Britiske og schweiziske afgorelser bygger pa en anden retlig ramme end EU-forordningen, og det er anfort linje for linje.',
  filtroTitolo: 'Filtrer efter land',
  tutti: 'Alle',
  conteggioFiltrato: (v, p, d) => `${v} afgorelser, ${p}. Opdateret ${d}.`,
  thData: 'Dato', thPaese: 'Land', thAutorita: 'Myndighed',
  thProvvedimento: 'Afgorelse', thTemi: 'Emner', thSanzione: 'Bode',
  chiusura: 'Hver post stammer fra den myndigheds egen hjemmeside, der traf afgorelsen. Belob vises kun, hvor kilden skriver dem, titler omskrives ikke, og intet fortolkes: alt kan kontrolleres med et klik.',
  metaTitle: 'Europaeisk register: afgorelser om overvagning og tidsregistrering',
  metaDesc: 'Afgorelser fra europaeiske datatilsyn om GPS, videoovervagning og tidsregistrering pa arbejdet, med link til det officielle dokument.',
  avviso: 'To myndigheder mangler, Nordrhein-Westfalen og Østrig. Deres sider svarer ikke, af en teknisk årsag der ligger hos dem og ikke hos os. Systemet banker på hver morgen og tilføjer dem den dag de vender tilbage.',
  nomeBreve: 'Europaeisk register',
  creditoEmbed: 'Data: GeoTapp europaeisk register',
  datiTitolo: 'Tag disse data',
  datiLicenza: 'Disse data ma frit genbruges, ogsa kommercielt: kredit GeoTapp og laenk til denne side. Intet at bede om, ingen formular. Hver raekke laenker til myndighedens originale dokument, som fortsat er kilden at henvise til ved en enkelt afgorelse.',
  incorporaTitolo: 'Indlejr tabellen pa dit websted',
  incorporaIstruzioni: 'Kopier koden derhen, hvor tabellen skal sta. Den opdaterer sig selv, nar registret vokser, og tager kildeangivelsen med. Den vises pa laserens sprog, ikke pa sproget hos den, der kopierede koden.',
  copia: 'Kopier',
  copiato: 'Kopieret',
  temi: { geolocalizzazione: 'lokationsdata', controllo_a_distanza: 'fjernovervagning', presenze_orario: 'fremmode og arbejdstid', email_dipendenti: 'arbejdsmail', lavoro_agile: 'hjemmearbejde' },
};

const nb: OsservatorioStrings = {
  kicker: 'Ressurser',
  h1: 'Europeisk register over vedtak om kontroll i arbeidslivet',
  lede: 'Datatilsynene avgjor hver uke saker om posisjonsdata, kameraovervaking og tidsregistrering, og vedtakene ligger spredt pa tjueseks offisielle nettsteder pa ni sprak. Her er de i en tabell, hvert med lenke til originaldokumentet.',
  conteggio: (v, p, d) => `${v} vedtak fra ${p} land. Oppdatert ${d}.`,
  quadroNota: 'Britiske og sveitsiske vedtak bygger pa et annet regelverk enn EU-forordningen, og det star linje for linje.',
  filtroTitolo: 'Filtrer etter land',
  tutti: 'Alle',
  conteggioFiltrato: (v, p, d) => `${v} vedtak, ${p}. Oppdatert ${d}.`,
  thData: 'Dato', thPaese: 'Land', thAutorita: 'Tilsyn',
  thProvvedimento: 'Vedtak', thTemi: 'Temaer', thSanzione: 'Gebyr',
  chiusura: 'Hver oppforing kommer fra nettstedet til tilsynet som fattet vedtaket. Belop vises bare der kilden skriver dem, titler skrives ikke om og ingenting tolkes: alt kan kontrolleres med ett klikk.',
  metaTitle: 'Europeisk register: vedtak om overvaking og tidsregistrering',
  metaDesc: 'Vedtak fra europeiske datatilsyn om GPS, kameraovervaking og tidsregistrering i arbeidslivet, med lenke til originaldokumentet.',
  avviso: 'To myndigheter mangler, Nordrhein-Westfalen og Østerrike. Nettstedene deres svarer ikke, av en teknisk årsak som ligger hos dem og ikke hos oss. Systemet banker på hver morgen og legger dem til den dagen de er tilbake.',
  nomeBreve: 'Europeisk register',
  creditoEmbed: 'Data: GeoTapp europeisk register',
  datiTitolo: 'Ta med deg disse dataene',
  datiLicenza: 'Disse dataene kan gjenbrukes fritt, ogsa kommersielt: krediter GeoTapp og lenk til denne siden. Ingenting a be om, ingen skjema. Hver rad lenker til tilsynets originaldokument, som fortsatt er kilden a vise til for et enkelt vedtak.',
  incorporaTitolo: 'Legg tabellen inn pa ditt eget nettsted',
  incorporaIstruzioni: 'Kopier koden dit du vil ha tabellen. Den oppdaterer seg selv nar registeret vokser, og tar med kildehenvisningen. Den vises pa leserens sprak, ikke pa spraket til den som kopierte koden.',
  copia: 'Kopier',
  copiato: 'Kopiert',
  temi: { geolocalizzazione: 'posisjonsdata', controllo_a_distanza: 'fjernovervaking', presenze_orario: 'oppmote og arbeidstid', email_dipendenti: 'jobb-epost', lavoro_agile: 'hjemmekontor' },
};

const ru: OsservatorioStrings = {
  kicker: 'Ресурсы',
  h1: 'Европейский реестр решений о контроле на работе',
  lede: 'Надзорные органы каждую неделю решают вопросы геолокации, видеонаблюдения и учёта рабочего времени. Здесь они собраны в одну таблицу со ссылкой на оригинал.',
  conteggio: (v, p, d) => `${v} решений из ${p} стран. Обновлено ${d}.`,
  quadroNota: 'Решения Великобритании и Швейцарии относятся к иной правовой системе, что указано в каждой строке.',
  filtroTitolo: 'Фильтр по стране',
  tutti: 'Все',
  conteggioFiltrato: (v, p, d) => `${v} решений, ${p}. Обновлено ${d}.`,
  thData: 'Дата', thPaese: 'Страна', thAutorita: 'Орган',
  thProvvedimento: 'Решение', thTemi: 'Темы', thSanzione: 'Штраф',
  chiusura: 'Каждая запись взята с официального сайта органа, вынесшего решение. Суммы указаны только там, где их пишет источник.',
  metaTitle: 'Европейский реестр решений о контроле работников',
  metaDesc: 'Решения европейских надзорных органов о GPS, видеонаблюдении и учёте времени с ссылками на документы.',
  avviso: 'Двух органов не хватает, Северного Рейна-Вестфалии и Австрии. Их сайты не отвечают по технической причине, которая находится на их стороне, а не на нашей. Система стучится каждое утро и добавит их в тот день, когда они вернутся.',
  nomeBreve: 'Европейский реестр',
  creditoEmbed: 'Данные: европейский реестр GeoTapp',
  datiTitolo: 'Заберите эти данные',
  datiLicenza: 'Эти данные можно свободно использовать, в том числе в коммерческих целях: укажите GeoTapp и поставьте ссылку на эту страницу. Разрешения спрашивать не нужно, формы заполнять не нужно. Каждая строка ведёт к оригинальному документу органа, и именно он остаётся источником для ссылки на конкретное решение.',
  incorporaTitolo: 'Встройте таблицу на свой сайт',
  incorporaIstruzioni: 'Скопируйте этот код туда, где должна быть таблица. Она обновляется сама, когда реестр растёт, и несёт ссылку на источник с собой. Она выводится на языке читателя, а не того, кто скопировал код.',
  copia: 'Копировать',
  copiato: 'Скопировано',
  temi: { geolocalizzazione: 'геолокация', controllo_a_distanza: 'дистанционный контроль', presenze_orario: 'учёт рабочего времени', email_dipendenti: 'рабочая почта', lavoro_agile: 'удалённая работа' },
};

const BY_LOCALE: Record<AppLocale, OsservatorioStrings> = {
  it, en, de, fr, es, pt, nl, sv, da, nb, ru,
  'en-us': en, 'en-gb': en, 'en-au': en, 'en-ie': en, 'en-ca': en,
};

export function osservatorioStrings(locale: AppLocale): OsservatorioStrings {
  return BY_LOCALE[locale] ?? it;
}
