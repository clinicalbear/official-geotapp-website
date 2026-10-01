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
  'en-us': 'Regional rules and records',
  'en-gb': 'Regional rules and records',
  'en-au': 'Regional rules and records',
  'en-ca': 'Regional rules and records',
  'en-ie': 'Regional rules and records',
};

export const REGIONAL_FAQ: Partial<Record<AppLocale, RegionalFaqItem[]>> = {
  it: [
    {
      q: 'Ore e commesse secondo il CCNL Metalmeccanici?',
      a: "GeoTapp registra a ogni timbratura entrata, pause e uscita con posizione e ora, per tecnico e per impianto, e le esporta in Excel o CSV per il consulente del lavoro. L'applicazione del CCNL (maggiorazioni, indennità) e la tenuta del Libro Unico del Lavoro restano al consulente e all'azienda.",
    },
    {
      q: 'Geolocalizzazione e art. 4 dello Statuto dei Lavoratori?',
      a: 'Posizione legata all\'intervento e al turno, con informativa, legittimo interesse e l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro per il controllo a distanza.',
    },
    {
      q: 'DM 37/2008 e verifiche periodiche degli impianti?',
      a: "GeoTapp non gestisce le abilitazioni né le verifiche periodiche previste dal DM 37/2008. Registra ora, posizione, foto e note di ogni intervento e di ogni controllo, che si possono allegare alla dichiarazione di conformità.",
    },
  ],
  de: [
    {
      q: 'Arbeitszeiten und Aufträge im Anlagenbau?',
      a: 'GeoTapp erfasst bei jeder Stempelung Beginn, Pausen und Ende mit Position und Uhrzeit, je Techniker und Anlage, und exportiert sie als Excel- oder CSV-Datei für die Lohnbuchhaltung oder Steuerberatung. Die Anwendung des Tarifvertrags (Zuschläge, Zulagen) und die Lohnabrechnung bleiben bei ihr und beim Unternehmen.',
    },
    {
      q: 'GPS-Ortung der Anlagentechniker: DSGVO und Betriebsrat?',
      a: 'Die Position wird nur beim Stempeln und bei Nachweisfotos erfasst, nie durchgehend, und die Mitarbeiterinformation wird vor dem Stempeln in der App unterschrieben. Ob eine Interessenabwägung nach Art. 6 DSGVO und die Mitbestimmung des Betriebsrats nach §87 Abs. 1 Nr. 6 BetrVG erforderlich sind, klärt der Arbeitgeber.',
    },
    {
      q: 'Wiederkehrende Prüfungen nach Betriebssicherheitsverordnung?',
      a: 'GeoTapp verwaltet weder die Befähigung der Personen noch die wiederkehrenden Prüfungen nach der Betriebssicherheitsverordnung (BetrSichV). Es erfasst Uhrzeit, Position, Fotos und Notizen jedes Einsatzes und jeder Kontrolle, die sich der Prüfdokumentation beifügen lassen.',
    },
  ],
  fr: [
    {
      q: "Heures et chantiers des installateurs ?",
      a: "À chaque pointage, GeoTapp enregistre arrivée, pauses et départ avec position et heure, par technicien et par installation, et les exporte en Excel ou CSV pour votre comptable ou gestionnaire de paie. L'application de la convention collective (majorations, indemnités) et l'établissement de la paie restent de son ressort et de celui de l'entreprise.",
    },
    {
      q: "Géolocalisation des techniciens : RGPD et CNIL ?",
      a: "La position n'est enregistrée qu'au pointage et avec les photos de preuve, jamais en continu, et l'information aux salariés est signée dans l'appli avant de pointer. Reste à l'employeur de vérifier ce que le RGPD (intérêt légitime) et la consultation du CSE exigent dans son cas.",
    },
    {
      q: "Vérifications périodiques réglementaires ?",
      a: "GeoTapp ne gère ni les qualifications des techniciens ni les vérifications périodiques réglementaires. Il enregistre l'heure, la position, les photos et les notes de chaque intervention et de chaque contrôle, que vous pouvez joindre au dossier de vérification.",
    },
  ],
  es: [
    {
      q: '¿Horas e instalaciones de los técnicos?',
      a: 'GeoTapp registra en cada fichaje entrada, pausas y salida con posición y hora, por técnico y por instalación, y las exporta a Excel o CSV para tu gestoría o asesor laboral. La aplicación del convenio colectivo (pluses, dietas) y la elaboración de la nómina siguen siendo cosa de la gestoría y de la empresa.',
    },
    {
      q: '¿Geolocalización de técnicos: RGPD y AEPD?',
      a: 'La posición solo se registra al fichar y con las fotos de prueba, nunca de forma continua, y la información a los trabajadores se firma en la app antes de fichar. Corresponde a la empresa comprobar qué exigen en su caso el RGPD (interés legítimo), el art. 90 LOPDGDD y la información a la representación de los trabajadores.',
    },
    {
      q: '¿Inspecciones periódicas reglamentarias?',
      a: 'GeoTapp no gestiona las habilitaciones de los técnicos ni las inspecciones periódicas reglamentarias (RITE/REBT). Registra la hora, la posición, las fotos y las notas de cada intervención y de cada revisión, que puedes adjuntar al expediente de la inspección.',
    },
  ],
  pt: [
    {
      q: 'Horas e instalações dos técnicos?',
      a: 'GeoTapp regista em cada picagem entrada, pausas e saída com posição e hora, por técnico e por instalação, e exporta-as para Excel ou CSV para o seu contabilista ou gabinete de processamento salarial. A aplicação do contrato coletivo (subsídios, ajudas de custo) e o processamento dos salários continuam a cargo do contabilista e da empresa.',
    },
    {
      q: 'Geolocalização dos técnicos: RGPD e CNPD?',
      a: 'A posição só é registada ao picar o ponto e com as fotos de prova, nunca de forma contínua, e a informação aos trabalhadores é assinada na app antes de picar. Cabe à empresa verificar o que exigem, no seu caso, o RGPD (interesse legítimo), os artigos 20.º e 21.º do Código do Trabalho e a CNPD.',
    },
    {
      q: 'Inspeções periódicas regulamentares?',
      a: 'GeoTapp não gere as habilitações dos técnicos nem as inspeções periódicas regulamentares. Regista a hora, a posição, as fotos e as notas de cada intervenção e de cada revisão, que pode anexar ao processo da inspeção.',
    },
  ],
  nl: [
    {
      q: 'Werktijden en opdrachten in de installatietechniek?',
      a: 'GeoTapp legt bij elke registratie begin, pauzes en einde vast met locatie en tijd, per monteur en per installatie, en exporteert ze als Excel- of CSV-bestand voor de salarisadministrateur. De toepassing van de cao (toeslagen, vergoedingen) en de salarisverwerking blijven bij die administrateur en bij het bedrijf.',
    },
    {
      q: 'Gps bij installatiemonteurs: AVG en ondernemingsraad?',
      a: 'De locatie wordt alleen vastgelegd bij het registreren en bij bewijsfoto\'s, nooit doorlopend, en de privacyverklaring voor de werknemers wordt in de app ondertekend voordat ze registreren. Of een belangenafweging op grond van art. 6 AVG en de instemming van de ondernemingsraad op grond van art. 27 WOR nodig zijn, beoordeelt de werkgever.',
    },
    {
      q: 'Periodieke keuringen van arbeidsmiddelen en installaties?',
      a: 'GeoTapp beheert noch de bekwaamheid van de personen noch de periodieke keuringen van arbeidsmiddelen op grond van het Arbobesluit. Het legt tijd, locatie, foto\'s en notities van elke klus en elke controle vast, die bij de keuringsdocumentatie kunnen worden gevoegd.',
    },
  ],
  da: [
    {
      q: 'Timer og sager for teknikere?',
      a: 'GeoTapp registrerer ved hver stempling ind, pauser og ud med position og klokkeslæt, pr. tekniker og pr. anlæg, og eksporterer dem til Excel eller CSV til din bogholder eller dit lønkontor. Anvendelsen af overenskomsten (tillæg, godtgørelser) og lønbehandlingen forbliver hos bogholderen og virksomheden.',
    },
    {
      q: 'Geolokalisering af teknikere: GDPR og Datatilsynet?',
      a: 'Positionen registreres kun ved stempling og med bevisfotos, aldrig løbende, og oplysningerne til medarbejderne underskrives i appen, før der stemples. Det er virksomheden, der selv skal undersøge, hvad GDPR (legitim interesse), databeskyttelsesloven og Datatilsynets vejledning kræver i netop jeres tilfælde.',
    },
    {
      q: 'Periodiske lovpligtige eftersyn?',
      a: 'GeoTapp styrer hverken teknikernes autorisationer eller de periodiske lovpligtige eftersyn. Det registrerer klokkeslæt, position, fotos og noter for hver opgave og hvert eftersyn, som du kan vedlægge eftersynets dokumentation.',
    },
  ],
  'en-us': [
    {
      q: 'NFPA 70 and 70E training records?',
      a: 'GeoTapp does not verify or track qualified-person certification, NFPA 70E arc-flash training or EPA Section 608 cards, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Joint Commission and CMS facility inspections?',
      a: 'GeoTapp does not manage Joint Commission Environment of Care records or facility credentialing. It records who clocked in, where and at what time on each site, and that history can be shown to the client or whoever asks. The documents the rules require stay with the company.',
    },
    {
      q: 'LEED commissioning documentation?',
      a: 'GeoTapp records hours by job, which you can export to Excel or CSV as a starting point. It does not prepare LEED commissioning documentation.',
    },
  ],
  'en-gb': [
    {
      q: 'F-Gas Regulation record-keeping?',
      a: 'GeoTapp does not verify or track F-Gas certificates, refrigerant logs or annual reports, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Building Safety Act 2022 golden thread?',
      a: 'GeoTapp does not manage the golden thread or safety-case files for higher-risk buildings. It records who clocked in, where and at what time on each site, and that history can be shown to the client or whoever asks. The documents the rules require stay with the company.',
    },
    {
      q: 'BSRIA commissioning evidence?',
      a: 'GeoTapp does not prepare BSRIA commissioning documents. It records the time, position and photos of each visit, which you can attach to your own commissioning records.',
    },
  ],
  'en-au': [
    {
      q: 'ARC refrigerant-handling licences?',
      a: 'GeoTapp does not verify or track ARC licences or refrigerant-recovery records, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'AS 5601 gas installation records?',
      a: 'GeoTapp does not verify or track gas-fitter licences, AS 5601 compliance certificates or gas installation types, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'WHS site-visit logs for mechanical services?',
      a: 'GeoTapp does not manage SWMS, electrical-isolation permits or confined-space entry records. It records who clocked in, where and at what time on each site, and that history can be shown to the client or whoever asks. The documents the rules require stay with the company.',
    },
  ],
  'en-ca': [
    {
      q: 'Provincial refrigeration ticket renewals?',
      a: 'GeoTapp does not verify or track provincial refrigeration certificates or continuing-education credits, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'TSSA Ontario boiler and pressure-vessel inspections?',
      a: 'GeoTapp does not verify or track TSSA inspections or certified-worker qualifications, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Consent for work on First Nations land?',
      a: 'GeoTapp does not manage consent records or impact-benefit agreements. It records who clocked in, where and at what time on each site; agreements and consent records stay with the company and the communities concerned.',
    },
  ],
  'en-ie': [
    {
      q: 'RGII Domestic Gas Installer registration?',
      a: 'GeoTapp does not verify or track RGII registration, scope of work or annual safety inspections, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'F-Gas record-keeping?',
      a: 'GeoTapp does not verify or track F-Gas categories, refrigerant logs or annual reports, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'WRC audits for mechanical contractors?',
      a: 'GeoTapp does not manage OWTA hours reconciliation, Construction SEO rates or on-site safety records. It records who clocked in, where and at what time on each site, and that history can be shown to an inspector, alongside the hours and attendance you can export to Excel or CSV. The documents the rules require stay with the company.',
    },
  ],
};
