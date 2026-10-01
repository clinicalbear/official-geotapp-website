import type { AppLocale } from '@/lib/i18n/config';

export interface RegionalFaqItem {
  q: string;
  a: string;
}

export const REGIONAL_FAQ_TITLE: Partial<Record<AppLocale, string>> = {
  it: 'Conformità normativa in Italia',
  de: 'Vorschriften und Nachweise in Deutschland',
  fr: 'Règles et documents',
  es: 'Normativa y documentación en España',
  pt: 'Normas e registos em Portugal',
  nl: 'Regels en documentatie in Nederland',
  da: 'Regler og dokumentation i Danmark',
  nb: 'Regler og dokumentasjon i Norge',
  ru: 'Нормативные требования и документация в России',
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
      q: 'Ore e interventi secondo il CCNL Metalmeccanici/installazione impianti?',
      a: "GeoTapp registra a ogni timbratura entrata, pause e uscita con posizione e ora, per tecnico e per commessa, e le esporta in Excel o CSV per il consulente del lavoro. L'applicazione del CCNL (maggiorazioni, indennità) e la tenuta del Libro Unico del Lavoro restano al consulente e all'azienda.",
    },
    {
      q: 'Geolocalizzazione e art. 4 dello Statuto dei Lavoratori?',
      a: 'Posizione legata all\'intervento e al turno, con informativa, legittimo interesse e l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro per il controllo a distanza.',
    },
    {
      q: 'Gas fluorurati (Reg. UE 517/2014, DPR 146/2018) e libretto impianto?',
      a: "GeoTapp non gestisce i patentini F-gas né il libretto d'impianto. Registra ora, posizione, foto e note di ogni intervento su caldaie e impianti termici, da allegare alla documentazione dell'impianto.",
    },
  ],
  de: [
    {
      q: 'Arbeitszeiten und Einsätze im Heizungsbau?',
      a: 'GeoTapp erfasst bei jeder Stempelung Beginn, Pausen und Ende mit Position und Uhrzeit, je Techniker und Auftrag, und exportiert sie als Excel- oder CSV-Datei für die Lohnbuchhaltung oder Steuerberatung. Die Anwendung des Tarifvertrags (Zuschläge, Zulagen) und die Lohnabrechnung bleiben bei ihr und beim Unternehmen.',
    },
    {
      q: 'GPS-Ortung der Heizungsmonteure: DSGVO und Betriebsrat?',
      a: 'Die Position wird nur beim Stempeln und bei Nachweisfotos erfasst, nie durchgehend, und die Mitarbeiterinformation wird vor dem Stempeln in der App unterschrieben. Ob eine Interessenabwägung nach Art. 6 DSGVO und die Mitbestimmung des Betriebsrats nach §87 Abs. 1 Nr. 6 BetrVG erforderlich sind, klärt der Arbeitgeber.',
    },
    {
      q: 'F-Gase-Verordnung und Sachkundenachweis?',
      a: 'GeoTapp verwaltet keine Sachkundenachweise nach der F-Gase-Verordnung und führt keine Anlagenbücher. Es erfasst Uhrzeit, Position, Fotos und Notizen jedes Einsatzes an Heizkesseln und Heizungsanlagen, die der Anlagendokumentation beigefügt werden können.',
    },
  ],
  fr: [
    {
      q: 'Heures et interventions dans le chauffage ?',
      a: 'GeoTapp enregistre à chaque pointage l\'arrivée, les pauses et le départ avec la position et l\'heure, par technicien et par affaire, et les exporte en Excel ou CSV pour votre gestionnaire de paie. L\'application de la convention collective (majorations, indemnités) et le calcul de la paie restent à la charge de votre gestionnaire de paie et de l\'entreprise.',
    },
    {
      q: 'Géolocalisation des chauffagistes : RGPD et représentants du personnel ?',
      a: 'La position n\'est enregistrée qu\'au pointage et pour les photos de preuve, jamais en continu, et l\'information aux salariés se signe dans l\'app avant le premier pointage. La base juridique (intérêt légitime) et, là où ils sont requis, l\'information et la consultation des représentants du personnel relèvent de l\'employeur.',
    },
    {
      q: 'Fluides frigorigènes et attestations de capacité ?',
      a: 'GeoTapp ne gère ni les attestations de capacité ni les carnets d\'entretien des installations. Il enregistre l\'heure, la position, les photos et les notes de chaque intervention sur chaudières et installations de chauffage, à joindre à la documentation de l\'installation.',
    },
  ],
  es: [
    {
      q: '¿Horas e intervenciones en calefacción?',
      a: 'GeoTapp registra en cada fichaje entrada, pausas y salida con posición y hora, por técnico y por obra, y las exporta a Excel o CSV para tu gestoría o asesor laboral. La aplicación del convenio colectivo (pluses, dietas) y la elaboración de la nómina siguen siendo cosa de la gestoría y de la empresa.',
    },
    {
      q: '¿Geolocalización de técnicos de calefacción: RGPD y AEPD?',
      a: 'La posición solo se registra al fichar y con las fotos de prueba, nunca de forma continua, y la información a los trabajadores se firma en la app antes de fichar. Corresponde a la empresa comprobar qué exigen en su caso el RGPD (interés legítimo), el art. 90 LOPDGDD y la información a la representación de los trabajadores.',
    },
    {
      q: '¿Gases fluorados y carné de manipulador?',
      a: 'GeoTapp no gestiona los carnés de manipulador de gases fluorados ni los libros de mantenimiento de las instalaciones. Registra la hora, la posición, las fotos y las notas de cada intervención en calderas e instalaciones de calefacción, para adjuntarlas a la documentación de la instalación.',
    },
  ],
  pt: [
    {
      q: 'Horas e intervenções em aquecimento?',
      a: 'O GeoTapp regista em cada picagem entrada, pausas e saída com localização e hora, por técnico e por obra, e exporta-as em Excel ou CSV para o seu contabilista ou consultor laboral. A aplicação da convenção coletiva (acréscimos, ajudas de custo) e o processamento dos salários continuam a cargo do contabilista ou consultor e da empresa.',
    },
    {
      q: 'Geolocalização de técnicos de aquecimento: RGPD e proteção de dados?',
      a: 'A localização só é registada ao picar o ponto e com as fotos de prova, nunca de forma contínua, e a informação aos trabalhadores assina-se na app antes de picar. Cabe à empresa verificar o que exigem, no seu caso, o RGPD (interesse legítimo), o Código do Trabalho (meios de vigilância à distância) e a informação às estruturas de representação dos trabalhadores.',
    },
    {
      q: 'Gases fluorados e certificação do técnico?',
      a: 'O GeoTapp não gere as certificações de manuseamento de gases fluorados nem os registos de manutenção das instalações. Regista a hora, a localização, as fotos e as notas de cada intervenção em caldeiras e instalações de aquecimento, para juntar à documentação da instalação.',
    },
  ],
  nl: [
    {
      q: 'Werktijden en klussen in de verwarmingstechniek?',
      a: 'GeoTapp legt bij elke registratie begin, pauzes en einde vast met locatie en tijd, per monteur en per opdracht, en exporteert ze als Excel- of CSV-bestand voor de salarisadministrateur. De toepassing van de cao (toeslagen, vergoedingen) en de salarisverwerking blijven bij die administrateur en bij het bedrijf.',
    },
    {
      q: 'Gps bij cv-monteurs: AVG en ondernemingsraad?',
      a: 'De locatie wordt alleen vastgelegd bij het registreren en bij bewijsfoto\'s, nooit doorlopend, en de privacyverklaring voor de werknemers wordt in de app ondertekend voordat ze registreren. Of een belangenafweging op grond van art. 6 AVG en de instemming van de ondernemingsraad op grond van art. 27 WOR nodig zijn, beoordeelt de werkgever.',
    },
    {
      q: 'F-gassen en bewijzen van vakbekwaamheid (zoals STEK)?',
      a: 'GeoTapp beheert geen bewijzen van vakbekwaamheid voor F-gassen, zoals het STEK-certificaat, en houdt geen installatieboeken bij. Het legt tijd, locatie, foto\'s en notities van elke klus aan ketels en verwarmingsinstallaties vast, die bij de documentatie van de installatie kunnen worden gevoegd.',
    },
  ],
  da: [
    {
      q: 'Timer og opgaver på varmeanlæg?',
      a: 'GeoTapp registrerer ved hver stempling ind, pauser og ud med position og klokkeslæt, pr. tekniker og pr. sag, og eksporterer dem til Excel eller CSV til din bogholder eller dit lønkontor. Anvendelsen af overenskomsten (tillæg, godtgørelser) og lønbehandlingen forbliver hos bogholderen og virksomheden.',
    },
    {
      q: 'Geolokalisering af varmeteknikere: GDPR og Datatilsynet?',
      a: 'Positionen registreres kun ved stempling og med bevisfotos, aldrig løbende, og oplysningerne til medarbejderne underskrives i appen, før der stemples. Det er virksomheden, der selv skal undersøge, hvad GDPR (legitim interesse), databeskyttelsesloven og Datatilsynets vejledning kræver i netop jeres tilfælde.',
    },
    {
      q: 'Fluorholdige gasser og teknikerens certifikater?',
      a: 'GeoTapp håndterer hverken certifikater til arbejde med fluorholdige gasser eller anlæggenes serviceregistre. Det registrerer klokkeslæt, position, fotos og noter for hver opgave på kedler og varmeanlæg, som du kan vedlægge anlæggets dokumentation.',
    },
  ],
  nb: [
    {
      q: 'Timer og oppdrag på varmeanlegg?',
      a: 'GeoTapp registrerer ved hver stempling start, pauser og slutt med posisjon og klokkeslett, per tekniker og per oppdrag, og eksporterer dem til Excel eller CSV for regnskapsføreren eller lønnskontoret ditt. Anvendelsen av tariffavtalen (tillegg, godtgjørelser) og lønnsbehandlingen forblir hos regnskapsføreren og virksomheten.',
    },
    {
      q: 'Geolokalisering av varmeteknikere: GDPR og Datatilsynet?',
      a: 'Posisjonen registreres bare ved stempling og med bevisbilder, aldri løpende, og informasjonen til de ansatte signeres i appen før det stemples. Det er virksomheten selv som må undersøke hva GDPR (berettiget interesse), personopplysningsloven og Datatilsynets veiledning krever i akkurat ditt tilfelle.',
    },
    {
      q: 'Fluorholdige gasser og teknikerens sertifikater?',
      a: 'GeoTapp håndterer verken sertifikater for arbeid med fluorholdige gasser eller anleggenes serviceregistre. Det registrerer klokkeslett, posisjon, bilder og notater for hvert oppdrag på kjeler og varmeanlegg, som du kan legge ved anleggets dokumentasjon.',
    },
  ],
  ru: [
    {
      q: 'Как учитывать часы и выезды в сантехническо-отопительной компании?',
      a: 'GeoTapp фиксирует при каждой отметке приход, перерывы и уход с местоположением и временем, по каждому технику и наряду, и экспортирует их в Excel или CSV для бухгалтера по зарплате. Применение трудового законодательства (надбавки, нормы рабочего времени) и расчёт зарплаты остаются за бухгалтером и компанией.',
    },
    {
      q: 'Геолокация техников: 152-ФЗ и согласие работника?',
      a: 'Местоположение фиксируется только при отметке (приход, перерывы, уход) или при фотодоказательстве, никогда непрерывно, и работник подписывает уведомление в приложении перед первой отметкой. Правовое основание обработки персональных данных по 152-ФЗ и необходимость согласия или уведомления работника остаются на усмотрение работодателя.',
    },
    {
      q: 'Допуски и аттестации на газовое и отопительное оборудование — это GeoTapp отслеживает?',
      a: 'Нет. GeoTapp не ведёт учёт допусков, аттестаций техников или сертификатов на газовое и отопительное оборудование и не формирует связанные с ними документы. Он фиксирует время, местоположение, фото и заметки каждого выезда на котлы и системы отопления, которые можно приложить к документации объекта. Сами допуски и их учёт остаются за компанией.',
    },
  ],
  sv: [
    {
      q: 'Timmar och uppdrag på värmeanläggningar?',
      a: 'GeoTapp registrerar vid varje instämpling, rast och utstämpling position och tid, per tekniker och per uppdrag, och exporterar dem till Excel eller CSV för din redovisningsbyrå eller ditt lönekontor. Tillämpningen av kollektivavtalet (tillägg, ersättningar) och lönehanteringen ligger kvar hos redovisningsbyrån och företaget.',
    },
    {
      q: 'Positionering av VVS-tekniker: GDPR och IMY?',
      a: 'Positionen registreras bara vid stämpling och med bevisfoton, aldrig löpande, och informationen till medarbetarna signeras i appen före stämplingen. Det är företaget som själv måste ta reda på vad GDPR (intresseavvägning), medbestämmandelagen (MBL § 11, förhandling med facket innan systemet införs, där företaget är bundet av kollektivavtal) och IMY:s vägledning kräver i just ditt fall.',
    },
    {
      q: 'Fluorerade gaser och teknikerns certifikat?',
      a: 'GeoTapp hanterar varken certifikat för arbete med fluorerade gaser eller anläggningarnas servicejournaler. Det registrerar tid, position, foton och anteckningar för varje uppdrag på pannor och värmesystem, som du kan foga till anläggningens dokumentation.',
    },
  ],
  'en-us': [
    {
      q: 'EPA Section 608 and HVAC technician certification?',
      a: 'GeoTapp does not verify or track EPA, NATE or manufacturer certifications, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'State HVAC contractor licensing?',
      a: 'GeoTapp does not verify or track state HVAC licenses, bonds, insurance or renewals, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Energy Star and AHRI commissioning?',
      a: 'GeoTapp does not prepare Energy Star or AHRI commissioning records. It records the time, position and photos of each job, which you can attach to your own commissioning documents.',
    },
  ],
  'en-gb': [
    {
      q: 'Gas Safe registration?',
      a: 'GeoTapp does not verify or track Gas Safe registration, appliance categories or ACS reassessments, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'F-Gas Regulation certification?',
      a: 'GeoTapp does not verify or track F-Gas certificates, refrigerant logs or annual reports, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'MCS heat-pump installer accreditation?',
      a: 'GeoTapp does not verify or track MCS accreditation, annual assessments or installation references, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-au': [
    {
      q: 'ARC refrigerant-handling licences?',
      a: 'GeoTapp does not verify or track ARC licences or refrigerant-recovery records, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'AS 5601 gas installation records?',
      a: 'GeoTapp does not verify or track gas-fitter licences or AS 5601 compliance certificates, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'AS/NZS 3500 plumbing overlap?',
      a: 'GeoTapp does not verify or track AS/NZS 3500 records or supervising-plumber chains, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-ca': [
    {
      q: 'Provincial gas-fitter tickets?',
      a: 'GeoTapp does not verify or track gas-fitter classifications, apprenticeship chains or renewals, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'TSSA Ontario fuels safety records?',
      a: 'GeoTapp does not verify or track TSSA inspection records or technician qualifications, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'CSA B149 gas code?',
      a: 'GeoTapp does not verify or track CSA B149.1 or B149.2 compliance, worker authorisations or refresher dates, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-ie': [
    {
      q: 'RGII gas installer registration?',
      a: 'GeoTapp does not verify or track RGII registration, scope of work or annual assessments, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'F-Gas record-keeping?',
      a: 'GeoTapp does not verify or track F-Gas categories, refrigerant logs or annual reports, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Construction SEO rates for heating and plumbing?',
      a: 'GeoTapp does not apply the Construction Sectoral Employment Order rates, travel-time payments or pension contributions and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or adviser, who apply the rules.',
    },
  ],
};
