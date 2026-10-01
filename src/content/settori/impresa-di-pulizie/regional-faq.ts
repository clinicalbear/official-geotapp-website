import type { AppLocale } from '@/lib/i18n/config';

export interface RegionalFaqItem {
  q: string;
  a: string;
}

export const REGIONAL_FAQ_TITLE: Partial<Record<AppLocale, string>> = {
  it: 'Conformità normativa in Italia',
  de: 'Vorschriften und Nachweise in Deutschland',
  fr: 'Règles et justificatifs en France',
  es: 'Normativa y documentación en España',
  pt: 'Regras e documentação em Portugal',
  nl: 'Regels en documentatie in Nederland',
  da: 'Regler og dokumentation i Danmark',
  nb: 'Regler og dokumentasjon i Norge',
  sv: 'Regler och dokumentation i Sverige',
  'en-us': 'Regional rules and records',
  'en-gb': 'Regional rules and records',
  'en-au': 'Regional rules and records',
  'en-ca': 'Regional rules and records',
  'en-ie': 'Regional rules and records',
};

export const REGIONAL_FAQ: Partial<Record<AppLocale, RegionalFaqItem[]>> = {
  it: [
    {
      q: 'Cosa serve per dimostrare ore e presenze ai sensi del CCNL Multiservizi?',
      a: "GeoTapp registra ore, pause e uscite per operatore e per cantiere, con posizione e ora, e le esporta in Excel o CSV per il consulente del lavoro. Maggiorazioni festive e notturne, Libro Unico del Lavoro e verifiche ispettive restano al consulente e all'azienda, che hanno così un registro degli orari da cui partire.",
    },
    {
      q: 'Come si rispetta l\'art. 4 dello Statuto dei Lavoratori sulla geolocalizzazione?',
      a: 'GPS attivo solo durante il turno, con informativa, valutazione del legittimo interesse e l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro: senza uno dei due il controllo a distanza non è lecito.',
    },
    {
      q: 'Come si gestisce il cambio appalto (clausola sociale)?',
      a: "GeoTapp non gestisce la clausola sociale né il passaggio di personale nel cambio appalto. Conserva lo storico di ore e presenze di ogni operatore, che si esporta in Excel o CSV: l'applicazione del CCNL resta al consulente.",
    },
  ],
  de: [
    {
      q: 'Welche Arbeitszeitnachweise braucht ein Gebäudereinigungsbetrieb?',
      a: 'GeoTapp erfasst Stunden, Pausen und Ende je Mitarbeiter und Objekt mit Position und Uhrzeit und exportiert sie als Excel- oder CSV-Datei für die Lohnbuchhaltung oder Steuerberatung. Zuschläge für Nacht- und Feiertagsarbeit, Branchenmindestlohn und Prüfungen bleiben bei ihr und beim Unternehmen, das damit ein Zeitprotokoll als Ausgangspunkt hat.',
    },
    {
      q: 'GPS-Ortung von Reinigungskräften: DSGVO und Betriebsrat?',
      a: 'Die Position wird nur beim Stempeln und bei Nachweisfotos erfasst, nie durchgehend, und die Mitarbeiterinformation wird vor dem Stempeln in der App unterschrieben. Ob eine Interessenabwägung nach Art. 6 DSGVO und die Mitbestimmung des Betriebsrats nach §87 Abs. 1 Nr. 6 BetrVG erforderlich sind, klärt der Arbeitgeber.',
    },
    {
      q: 'Aufzeichnungspflicht nach §17 MiLoG in der Gebäudereinigung?',
      a: 'Das Gebäudereinigungsgewerbe steht in §2a SchwarzArbG, dort gilt §17 MiLoG: Beginn, Ende und Dauer der täglichen Arbeitszeit sind aufzuzeichnen und zwei Jahre aufzubewahren. GeoTapp erfasst Beginn, Pausen und Ende beim Stempeln und bewahrt den Verlauf je Mitarbeiter auf, exportierbar als Excel- oder CSV-Datei. Ob die Aufzeichnung den Vorgaben genügt, bleibt Sache des Unternehmens. GeoTapp ist keine Rechtsberatung.',
    },
  ],
  fr: [
    {
      q: "Quels justificatifs d'heures pour une entreprise de propreté ?",
      a: "GeoTapp enregistre heures, pauses et départs par agent et par site, avec position et heure, et les exporte en Excel ou CSV pour votre comptable ou gestionnaire de paie. Majorations de dimanche et de nuit, paie et contrôles restent de son ressort et de celui de l'entreprise, qui dispose ainsi d'un relevé d'horaires comme point de départ.",
    },
    {
      q: "Géolocalisation des agents de propreté : RGPD et CNIL ?",
      a: "La position n'est enregistrée qu'au pointage et avec les photos de preuve, jamais en continu, et l'information aux salariés est signée dans l'appli avant de pointer. Reste à l'employeur de vérifier ce que le RGPD (intérêt légitime) et la consultation du CSE exigent dans son cas.",
    },
    {
      q: "Comment gérer une reprise de marché (transfert de personnel) ?",
      a: "GeoTapp ne gère ni le transfert du personnel ni la convention collective en cas de reprise de marché. Il conserve l'historique des heures et des présences de chaque agent, exportable en Excel ou CSV : l'application de la convention reste du ressort du comptable ou du gestionnaire de paie.",
    },
  ],
  es: [
    {
      q: '¿Qué justificantes de horas necesita una empresa de limpieza?',
      a: 'GeoTapp registra horas, pausas y salidas por trabajador y por centro, con posición y hora, y las exporta a Excel o CSV para tu gestoría o asesor laboral. Los pluses de domingo y nocturnidad, la nómina y las inspecciones siguen siendo cosa de la gestoría y de la empresa, que así dispone de un registro de horarios del que partir.',
    },
    {
      q: '¿Geolocalización de limpiadores: RGPD y AEPD?',
      a: 'La posición solo se registra al fichar y con las fotos de prueba, nunca de forma continua, y la información a los trabajadores se firma en la app antes de fichar. Corresponde a la empresa comprobar qué exigen en su caso el RGPD (interés legítimo), el art. 90 LOPDGDD y la información a la representación de los trabajadores.',
    },
    {
      q: '¿Cómo se gestiona la subrogación al cambiar de contrata?',
      a: 'GeoTapp no gestiona la subrogación del personal ni la aplicación del convenio al cambiar de contrata. Conserva el historial de horas y presencias de cada trabajador, exportable a Excel o CSV: la aplicación del convenio sigue siendo cosa de la gestoría.',
    },
  ],
  pt: [
    {
      q: 'Que comprovativos de horas precisa uma empresa de limpeza?',
      a: 'GeoTapp regista horas, pausas e saídas por trabalhador e por local, com posição e hora, e exporta-as para Excel ou CSV para o seu contabilista ou gabinete de processamento salarial. Os acréscimos noturnos e de feriado, o processamento dos salários e as inspeções continuam a cargo do contabilista e da empresa, que fica com um registo de horários de onde partir.',
    },
    {
      q: 'Geolocalização dos trabalhadores de limpeza: RGPD e CNPD?',
      a: 'A posição só é registada ao picar o ponto e com as fotos de prova, nunca de forma contínua, e a informação aos trabalhadores é assinada na app antes de picar. Cabe à empresa verificar o que exigem, no seu caso, o RGPD (interesse legítimo), os artigos 20.º e 21.º do Código do Trabalho e a CNPD.',
    },
    {
      q: 'Como se gere a transmissão ao mudar de prestador?',
      a: 'GeoTapp não gere a transmissão de estabelecimento nem a aplicação da CCT na mudança de prestador. Conserva o histórico de horas e presenças de cada trabalhador, exportável para Excel ou CSV: a aplicação da CCT continua a cargo do contabilista.',
    },
  ],
  nl: [
    {
      q: 'Welke urenregistratie heeft een schoonmaakbedrijf nodig?',
      a: 'GeoTapp legt uren, pauzes en einde per medewerker en per object vast met locatie en tijd en exporteert ze als Excel- of CSV-bestand voor de salarisadministrateur. Toeslagen voor nacht- en feestdagenwerk, het minimumloon en de controles blijven bij die administrateur en bij het bedrijf, dat zo een tijdsregistratie heeft om van uit te gaan.',
    },
    {
      q: 'Gps bij schoonmakers: AVG en ondernemingsraad?',
      a: 'De locatie wordt alleen vastgelegd bij het registreren en bij bewijsfoto\'s, nooit doorlopend, en de privacyverklaring voor de werknemers wordt in de app ondertekend voordat ze registreren. Of een belangenafweging op grond van art. 6 AVG en de instemming van de ondernemingsraad op grond van art. 27 WOR nodig zijn, beoordeelt de werkgever.',
    },
    {
      q: 'Cao Schoonmaak en het minimumloon in de schoonmaak?',
      a: 'GeoTapp berekent geen loon en past de cao voor het schoonmaak- en glazenwassersbedrijf niet toe. Het legt begin, pauzes en einde bij het registreren vast en bewaart uren en aanwezigheid per medewerker, te exporteren als Excel- of CSV-bestand. De toepassing van de regels blijft bij het bedrijf en zijn adviseur. GeoTapp is geen juridisch advies.',
    },
  ],
  da: [
    {
      q: 'Hvad skal man bruge til at vise timer og fremmøde i et rengøringsfirma?',
      a: 'GeoTapp registrerer timer, pauser og afgange pr. medarbejder og pr. sted, med position og klokkeslæt, og eksporterer dem til Excel eller CSV til din bogholder eller dit lønkontor. Tillæg for aften, nat og helligdage, lønbehandling og tilsyn forbliver hos bogholderen og virksomheden, som dermed har en tidsregistrering at tage udgangspunkt i.',
    },
    {
      q: 'Geolokalisering af rengøringsmedarbejdere: GDPR og Datatilsynet?',
      a: 'Positionen registreres kun ved stempling og med bevisfotos, aldrig løbende, og oplysningerne til medarbejderne underskrives i appen, før der stemples. Det er virksomheden, der selv skal undersøge, hvad GDPR (legitim interesse), databeskyttelsesloven og Datatilsynets vejledning kræver i netop jeres tilfælde.',
    },
    {
      q: 'Hvordan håndteres skift af rengøringsleverandør?',
      a: 'GeoTapp håndterer hverken virksomhedsoverdragelse eller overførsel af medarbejdere ved skift af leverandør. Det gemmer historikken over timer og fremmøde for hver medarbejder, som kan eksporteres til Excel eller CSV: anvendelsen af overenskomsten forbliver hos bogholderen.',
    },
  ],
  nb: [
    {
      q: 'Hva trenger man for å vise timer og oppmøte i en renholdsbedrift?',
      a: 'GeoTapp registrerer timer, pauser og avganger per ansatt og per sted, med posisjon og klokkeslett, og eksporterer dem til Excel eller CSV for regnskapsføreren eller lønnskontoret ditt. Tillegg for kveld, natt og helligdager, lønnsbehandling og tilsyn forblir hos regnskapsføreren og virksomheten, som dermed har en tidsregistrering å ta utgangspunkt i.',
    },
    {
      q: 'Geolokalisering av renholdere: GDPR og Datatilsynet?',
      a: 'Posisjonen registreres bare ved stempling og med bevisbilder, aldri løpende, og informasjonen til de ansatte signeres i appen før det stemples. Det er virksomheten selv som må undersøke hva GDPR (berettiget interesse), personopplysningsloven og Datatilsynets veiledning krever i akkurat ditt tilfelle.',
    },
    {
      q: 'Hvordan håndteres bytte av renholdsleverandør?',
      a: 'GeoTapp håndterer verken virksomhetsoverdragelse eller overføring av ansatte ved bytte av leverandør. Det lagrer historikken over timer og oppmøte for hver ansatt, som kan eksporteres til Excel eller CSV: anvendelsen av tariffavtalen forblir hos regnskapsføreren.',
    },
  ],
  sv: [
    {
      q: "Vad behövs för att visa timmar och närvaro i ett städföretag?",
      a: "GeoTapp registrerar timmar, raster och avgångar per medarbetare och per plats, med position och tid, och exporterar dem till Excel eller CSV för din redovisningsbyrå eller ditt lönekontor. Tillägg för kväll, natt och helg, lönehantering och tillsyn ligger kvar hos redovisningsbyrån och företaget, som därmed har en tidsregistrering att utgå från.",
    },
    {
      q: "Geolokalisering av städpersonal: GDPR och IMY?",
      a: "Positionen registreras bara vid stämpling och med bevisfoton, aldrig löpande, och informationen till medarbetarna undertecknas i appen innan man stämplar. Det är företaget som själv måste ta reda på vad GDPR (intresseavvägning), IMY:s vägledning om GPS på anställda och MBL § 11 (förhandling med den fackliga organisationen före en större förändring, när arbetsgivaren är bunden av kollektivavtal) kräver i just ditt fall.",
    },
    {
      q: "Hur hanteras byte av städleverantör?",
      a: "GeoTapp hanterar varken verksamhetsövergång eller överföring av medarbetare vid byte av leverantör. Det sparar historiken över timmar och närvaro för varje medarbetare, som kan exporteras till Excel eller CSV: tillämpningen av kollektivavtalet ligger kvar hos redovisningsbyrån.",
    },
  ],
  'en-us': [
    {
      q: 'FLSA and state records for cleaning services?',
      a: 'GeoTapp records hours, breaks and overtime shift by shift, with position and time at each clock-in, and exports them to Excel or CSV. Applying the FLSA, meal and rest-break rules or record-retention periods stays with your payroll provider or advisor.',
    },
    {
      q: 'OSHA hazard-communication and bloodborne-pathogen training?',
      a: 'GeoTapp does not verify or track HazCom or bloodborne-pathogen training, refresher dates or PPE issuance, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Service Contract Act wage records?',
      a: 'GeoTapp does not apply Service Contract Act wage determinations or prepare certified payroll (WH-347) and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or advisor, who apply the rules.',
    },
  ],
  'en-gb': [
    {
      q: 'National Minimum Wage and Living Wage in cleaning?',
      a: 'GeoTapp records hours, breaks and overtime shift by shift, with position and time at each clock-in, and exports them to Excel or CSV. Applying the National Minimum Wage and Living Wage rules (travel time, briefing time, rounding) stays with your payroll provider or adviser.',
    },
    {
      q: 'UK GDPR and the ICO Employment Practices Code?',
      a: 'The position is recorded only when the worker clocks in (start, break, finish) or takes a proof photo, and the worker signs the privacy notice in the app before clocking in. The lawful basis, the legitimate-interests and DPIA assessment and any consultation with workers or their representatives remain the employer\'s responsibility.',
    },
    {
      q: 'BICSc training and equipment authorisations?',
      a: 'GeoTapp does not verify or track BICSc certificates, COSHH training or equipment-use authorisations, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-au': [
    {
      q: 'Cleaning Services Award (MA000022) penalty rates?',
      a: 'GeoTapp does not apply the Cleaning Services Award, penalty rates or casual loadings and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or adviser, who apply the rules.',
    },
    {
      q: 'WHS site safety on contract-cleaning sites?',
      a: 'GeoTapp does not manage SWMS or supervisor sign-on. It records who clocked in, where and at what time on each site, and that history can be shown to the client or whoever asks. The documents the rules require stay with the company.',
    },
    {
      q: 'Modern Slavery Act 2018 (Cth) reporting?',
      a: 'GeoTapp does not prepare Modern Slavery statements or supply-chain reporting. It keeps the hours and attendance of each worker, which you export to Excel or CSV.',
    },
  ],
  'en-ca': [
    {
      q: 'Provincial employment standards for cleaning?',
      a: 'GeoTapp records hours, breaks and overtime shift by shift, with position and time at each clock-in, and exports them to Excel or CSV. Applying provincial employment standards (hours, breaks, public-holiday pay, vacation, retention periods) stays with your payroll provider or adviser.',
    },
    {
      q: 'PIPEDA and provincial PIPA notices?',
      a: 'The position is recorded only when the worker clocks in (start, break, finish) or takes a proof photo, and the worker signs the privacy notice in the app before clocking in. The lawful-basis assessment and any consultation with workers or their representatives remain the employer\'s responsibility.',
    },
    {
      q: 'Bill S-211 forced-labour reporting?',
      a: 'GeoTapp does not prepare Bill S-211 reports or supply-chain assessments. It keeps the hours and attendance of each worker, which you export to Excel or CSV.',
    },
  ],
  'en-ie': [
    {
      q: 'Employment Regulation Orders in cleaning?',
      a: 'GeoTapp does not apply an Employment Regulation Order, its rates or its premiums and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or adviser, who apply the rules.',
    },
    {
      q: 'GDPR and the DPIA for a contract-cleaning workforce?',
      a: 'The position is recorded only when the worker clocks in (start, break, finish) or takes a proof photo, and the worker signs the privacy notice in the app before clocking in. The lawful basis, the DPIA and legitimate-interests assessment and any consultation with workers or their representatives remain the employer\'s responsibility.',
    },
    {
      q: 'EMPA 2018 banded-hours requests?',
      a: 'GeoTapp records hours, breaks and overtime shift by shift, with position and time at each clock-in, and exports them to Excel or CSV. Applying the banded-hours provisions or the 12-month averaging stays with your payroll provider or adviser.',
    },
  ],
};
