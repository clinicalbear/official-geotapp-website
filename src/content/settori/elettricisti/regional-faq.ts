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
  ru: 'Нормы и документы в России',
  'en-us': 'Regional rules and records',
  'en-gb': 'Regional rules and records',
  'en-au': 'Regional rules and records',
  'en-ca': 'Regional rules and records',
  'en-ie': 'Regional rules and records',
};

export const REGIONAL_FAQ: Partial<Record<AppLocale, RegionalFaqItem[]>> = {
  it: [
    {
      q: 'Ore, reperibilità e trasferte secondo il CCNL Metalmeccanici?',
      a: "GeoTapp registra a ogni timbratura entrata, pause e uscita con posizione e ora, per elettricista e per cantiere, e le esporta in Excel o CSV per il consulente del lavoro. L'applicazione del CCNL (maggiorazioni, indennità) e la tenuta del Libro Unico del Lavoro restano al consulente e all'azienda.",
    },
    {
      q: 'Geolocalizzazione e art. 4 dello Statuto dei Lavoratori?',
      a: 'Posizione legata al lavoro e al turno, con informativa, legittimo interesse e l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro per il controllo a distanza.',
    },
    {
      q: 'Lavori elettrici CEI 11-27 (PES/PAV/PEI) e DM 37/2008?',
      a: "GeoTapp non verifica le abilitazioni né i profili di idoneità (PES/PAV/PEI) e non produce la dichiarazione di conformità del DM 37/2008. Registra ora, posizione e foto di ogni intervento, che il tecnico può allegare alla propria documentazione.",
    },
  ],
  de: [
    {
      q: 'Arbeitszeiten, Bereitschaft und Fahrten im Elektrohandwerk?',
      a: 'GeoTapp erfasst bei jeder Stempelung Beginn, Pausen und Ende mit Position und Uhrzeit, je Elektriker und Baustelle, und exportiert sie als Excel- oder CSV-Datei für die Lohnbuchhaltung oder Steuerberatung. Die Anwendung des Tarifvertrags (Zuschläge, Zulagen) und die Lohnabrechnung bleiben bei ihr und beim Unternehmen.',
    },
    {
      q: 'GPS-Ortung der Elektriker: DSGVO und Betriebsrat?',
      a: 'Die Position wird nur beim Stempeln und bei Nachweisfotos erfasst, nie durchgehend, und die Mitarbeiterinformation wird vor dem Stempeln in der App unterschrieben. Ob eine Interessenabwägung nach Art. 6 DSGVO und die Mitbestimmung des Betriebsrats nach §87 Abs. 1 Nr. 6 BetrVG erforderlich sind, klärt der Arbeitgeber.',
    },
    {
      q: 'DGUV Vorschrift 3 und Elektrofachkraft?',
      a: 'GeoTapp prüft weder die Qualifikation als Elektrofachkraft noch die Prüfungen nach DGUV Vorschrift 3 und erstellt keine Prüfprotokolle. Es erfasst Uhrzeit, Position und Fotos jedes Einsatzes, die der Techniker seiner eigenen Dokumentation beifügen kann.',
    },
  ],
  fr: [
    {
      q: "Heures et astreintes des électriciens ?",
      a: "À chaque pointage, GeoTapp enregistre arrivée, pauses et départ avec position et heure, par électricien et par chantier, et les exporte en Excel ou CSV pour votre comptable ou gestionnaire de paie. L'application de la convention collective (majorations, indemnités) et l'établissement de la paie restent de son ressort et de celui de l'entreprise.",
    },
    {
      q: "Géolocalisation des électriciens : RGPD et CNIL ?",
      a: "La position n'est enregistrée qu'au pointage et avec les photos de preuve, jamais en continu, et l'information aux salariés est signée dans l'appli avant de pointer. Reste à l'employeur de vérifier ce que le RGPD (intérêt légitime) et la consultation du CSE exigent dans son cas.",
    },
    {
      q: "Habilitation électrique (NF C 18-510) ?",
      a: "GeoTapp ne vérifie ni les habilitations électriques ni leur validité et ne produit aucun titre d'habilitation. Il enregistre l'heure, la position et les photos de chaque intervention, que le technicien peut joindre à sa propre documentation.",
    },
  ],
  es: [
    {
      q: '¿Horas y disponibilidad de los electricistas?',
      a: 'GeoTapp registra en cada fichaje entrada, pausas y salida con posición y hora, por electricista y por obra, y las exporta a Excel o CSV para tu gestoría o asesor laboral. La aplicación del convenio colectivo (pluses, dietas) y la elaboración de la nómina siguen siendo cosa de la gestoría y de la empresa.',
    },
    {
      q: '¿Geolocalización de electricistas: RGPD y AEPD?',
      a: 'La posición solo se registra al fichar y con las fotos de prueba, nunca de forma continua, y la información a los trabajadores se firma en la app antes de fichar. Corresponde a la empresa comprobar qué exigen en su caso el RGPD (interés legítimo), el art. 90 LOPDGDD y la información a la representación de los trabajadores.',
    },
    {
      q: '¿REBT y carné de instalador electricista?',
      a: 'GeoTapp no verifica los carnés ni las habilitaciones del REBT ni genera el boletín de instalación. Registra la hora, la posición y las fotos de cada intervención, que el técnico puede adjuntar a su propia documentación.',
    },
  ],
  pt: [
    {
      q: 'Horas e disponibilidade dos eletricistas?',
      a: 'GeoTapp regista em cada picagem entrada, pausas e saída com posição e hora, por eletricista e por obra, e exporta-as para Excel ou CSV para o seu contabilista ou gabinete de processamento salarial. A aplicação do contrato coletivo (subsídios, ajudas de custo) e o processamento dos salários continuam a cargo do contabilista e da empresa.',
    },
    {
      q: 'Geolocalização dos eletricistas: RGPD e CNPD?',
      a: 'A posição só é registada ao picar o ponto e com as fotos de prova, nunca de forma contínua, e a informação aos trabalhadores é assinada na app antes de picar. Cabe à empresa verificar o que exigem, no seu caso, o RGPD (interesse legítimo), os artigos 20.º e 21.º do Código do Trabalho e a CNPD.',
    },
    {
      q: 'Certificação DGEG de instalações elétricas?',
      a: 'GeoTapp não verifica certificações nem habilitações, incluindo as da DGEG, e não gera o termo de responsabilidade da instalação. Regista a hora, a posição e as fotos de cada intervenção, que o técnico pode anexar à sua própria documentação.',
    },
  ],
  nl: [
    {
      q: 'Werktijden, bereikbaarheid en reizen bij elektrotechnisch werk?',
      a: 'GeoTapp legt bij elke registratie begin, pauzes en einde vast met locatie en tijd, per elektricien en per bouwplaats, en exporteert ze als Excel- of CSV-bestand voor de salarisadministrateur. De toepassing van de cao (toeslagen, vergoedingen) en de salarisverwerking blijven bij die administrateur en bij het bedrijf.',
    },
    {
      q: 'Gps bij elektriciens: AVG en ondernemingsraad?',
      a: 'De locatie wordt alleen vastgelegd bij het registreren en bij bewijsfoto\'s, nooit doorlopend, en de privacyverklaring voor de werknemers wordt in de app ondertekend voordat ze registreren. Of een belangenafweging op grond van art. 6 AVG en de instemming van de ondernemingsraad op grond van art. 27 WOR nodig zijn, beoordeelt de werkgever.',
    },
    {
      q: 'NEN 3140 en de kwalificaties van elektrotechnisch personeel?',
      a: 'GeoTapp controleert de kwalificaties van elektrotechnisch personeel niet en voert de keuringen volgens NEN 3140 niet uit, en maakt geen keuringsrapporten. Het legt tijd, locatie en foto\'s van elke klus vast, die de monteur bij zijn eigen documentatie kan voegen.',
    },
  ],
  da: [
    {
      q: 'Timer, rådighed og kørsel for elektrikere?',
      a: 'GeoTapp registrerer ved hver stempling ind, pauser og ud med position og klokkeslæt, pr. elektriker og pr. byggeplads, og eksporterer dem til Excel eller CSV til din bogholder eller dit lønkontor. Anvendelsen af overenskomsten (tillæg, godtgørelser) og lønbehandlingen forbliver hos bogholderen og virksomheden.',
    },
    {
      q: 'Geolokalisering af elektrikere: GDPR og Datatilsynet?',
      a: 'Positionen registreres kun ved stempling og med bevisfotos, aldrig løbende, og oplysningerne til medarbejderne underskrives i appen, før der stemples. Det er virksomheden, der selv skal undersøge, hvad GDPR (legitim interesse), databeskyttelsesloven og Datatilsynets vejledning kræver i netop jeres tilfælde.',
    },
    {
      q: 'El-autorisation og dokumentation af el-installationer?',
      a: 'GeoTapp verificerer hverken autorisationer eller kvalifikationer og laver ingen installationsdokumentation. Det registrerer klokkeslæt, position og fotos af hver opgave, som teknikeren kan vedlægge sin egen dokumentation.',
    },
  ],
  nb: [
    {
      q: 'Timer, beredskap og kjøring for elektrikere?',
      a: 'GeoTapp registrerer ved hver stempling start, pauser og slutt med posisjon og klokkeslett, per elektriker og per byggeplass, og eksporterer dem til Excel eller CSV for regnskapsføreren eller lønnskontoret ditt. Anvendelsen av tariffavtalen (tillegg, godtgjørelser) og lønnsbehandlingen forblir hos regnskapsføreren og virksomheten.',
    },
    {
      q: 'Geolokalisering av elektrikere: GDPR og Datatilsynet?',
      a: 'Posisjonen registreres bare ved stempling og med bevisbilder, aldri løpende, og informasjonen til de ansatte signeres i appen før det stemples. Det er virksomheten selv som må undersøke hva GDPR (berettiget interesse), personopplysningsloven og Datatilsynets veiledning krever i akkurat ditt tilfelle.',
    },
    {
      q: 'Autorisasjon og dokumentasjon av elektriske anlegg?',
      a: 'GeoTapp verifiserer verken autorisasjoner eller kvalifikasjoner og lager ingen installasjonsdokumentasjon. Det registrerer klokkeslett, posisjon og bilder av hvert oppdrag, som teknikeren kan legge ved sin egen dokumentasjon.',
    },
  ],
  ru: [
    {
      q: 'Часы, дежурства и разъезды электриков?',
      a: 'При каждой отметке GeoTapp фиксирует приход, перерывы и уход с местоположением и временем, по каждому электрику и по каждому объекту, и экспортирует данные в Excel или CSV для вашего бухгалтера или расчётчика зарплаты. Применение трудового договора или коллективного соглашения (надбавки, компенсации) и сам расчёт зарплаты остаются в ведении бухгалтера и компании.',
    },
    {
      q: 'Геолокация электриков и защита персональных данных?',
      a: 'Местоположение фиксируется только при отметке и при фотографиях-доказательствах, никогда непрерывно, а уведомление для сотрудников подписывается в приложении перед первой отметкой. Какие именно требования местного законодательства о персональных данных (например, 152-ФЗ в России или соответствующий закон в Беларуси и Казахстане) применимы в вашем случае, должна определить сама компания.',
    },
    {
      q: 'Допуски электриков и сертификация электромонтажных работ?',
      a: 'GeoTapp не проверяет группы допуска по электробезопасности и не выдаёт акты или сертификаты соответствия электромонтажных работ. Приложение фиксирует время, местоположение и фото каждого выезда, которые техник может приложить к собственной документации.',
    },
  ],
  sv: [
    {
      q: "Timmar, jour och resor för elektriker?",
      a: "GeoTapp registrerar vid varje stämpling in, raster och ut med position och tid, per elektriker och per arbetsplats, och exporterar dem till Excel eller CSV för din redovisningsbyrå eller ditt lönekontor. Tillämpningen av kollektivavtalet (tillägg, ersättningar) och lönehanteringen ligger kvar hos redovisningsbyrån och företaget.",
    },
    {
      q: "Geolokalisering av elektriker: GDPR och IMY?",
      a: "Positionen registreras bara vid stämpling och med bevisfoton, aldrig löpande, och informationen till medarbetarna undertecknas i appen innan man stämplar. Det är företaget som själv måste ta reda på vad GDPR (intresseavvägning), IMY:s vägledning om GPS på anställda och MBL § 11 (förhandling med den fackliga organisationen före en större förändring, när arbetsgivaren är bunden av kollektivavtal) kräver i just ditt fall.",
    },
    {
      q: "Behörigheter och dokumentation av elinstallationer?",
      a: "GeoTapp verifierar varken behörigheter eller kvalifikationer och tar inte fram någon installationsdokumentation. Det registrerar tid, position och foton för varje jobb, som teknikern kan bifoga sin egen dokumentation.",
    },
  ],
  'en-us': [
    {
      q: 'NECA-style job-costing records?',
      a: 'GeoTapp records hours per worker and per job, which you export to Excel or CSV. It does not apply NECA cost codes or prevailing-wage rules: your accounting system and advisor do that.',
    },
    {
      q: 'OSHA electrical-safety training logs?',
      a: 'GeoTapp does not verify or track qualified-person status, lockout/tagout assignments or arc-flash PPE training, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'State journeyman and master license renewals?',
      a: 'GeoTapp does not verify or track state licenses, expiry dates or CEU completion, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-gb': [
    {
      q: '18th Edition (BS 7671) qualification records?',
      a: 'GeoTapp does not verify or track BS 7671 qualifications, ECS cards or Part P scheme registration, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Electrical safety audits?',
      a: 'GeoTapp does not verify or track inspection certificates, periodic-inspection schedules or tested-equipment registers, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'CDM 2015 evidence for electrical packages?',
      a: 'GeoTapp does not manage F10 notifications, site inductions or the Construction Phase Plan. It records who clocked in, where and at what time on each site, and that history can be shown to the principal contractor. The documents the rules require stay with the company.',
    },
  ],
  'en-au': [
    {
      q: 'Electrical Trades Award and rosters?',
      a: 'GeoTapp does not apply the Electrical Trades Award, on-call allowances or after-hours penalty rates and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or adviser, who apply the rules.',
    },
    {
      q: 'AS/NZS 3000 competency records?',
      a: 'GeoTapp does not verify or track electrical licences, scopes of work or CPD records, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'State-by-state electrical safety reporting?',
      a: 'GeoTapp does not manage Energy Safe Victoria, ESO QLD, EnergySafety WA or SafeWork NSW reporting. It records who clocked in, where and at what time on each site, and that history can be shown to the client or whoever asks. The documents the rules require stay with the company.',
    },
  ],
  'en-ca': [
    {
      q: 'CSA Z462 electrical-safety training?',
      a: 'GeoTapp does not verify or track CSA Z462 certification or hazard-risk-category training, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Provincial electrician and apprentice licensing?',
      a: 'GeoTapp does not verify or track provincial licences, journeyperson ratios or apprentice supervision, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'WSIB reporting for electrical contractors?',
      a: 'GeoTapp does not manage WSIB Form 7, orientation logs or premium-rate appeals. It records who clocked in, where and at what time on each site, and that history can be shown to the client or whoever asks. The documents the rules require stay with the company.',
    },
  ],
  'en-ie': [
    {
      q: 'Safe Electric registration?',
      a: 'GeoTapp does not verify or track Safe Electric registration, PSA assessments or Certs of Compliance, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'RECI and ECSSA scheme audits?',
      a: 'GeoTapp does not verify or track RECI or ECSSA scheme requirements, periodic-inspection schedules or tested-equipment registers, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Construction Sectoral Employment Order rates for electrical work?',
      a: 'GeoTapp does not apply the Construction Sectoral Employment Order rates or travel-time payments and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or adviser, who apply the rules.',
    },
  ],
};
