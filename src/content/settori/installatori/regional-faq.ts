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
  'en-us': 'Regional rules and records',
  'en-gb': 'Regional rules and records',
  'en-au': 'Regional rules and records',
  'en-ca': 'Regional rules and records',
  'en-ie': 'Regional rules and records',
};

export const REGIONAL_FAQ: Partial<Record<AppLocale, RegionalFaqItem[]>> = {
  it: [
    {
      q: 'Ore e trasferte secondo il CCNL Metalmeccanici?',
      a: "GeoTapp registra a ogni timbratura entrata, pause e uscita con posizione e ora, per tecnico e per commessa, e le esporta in Excel o CSV per il consulente del lavoro. L'applicazione del CCNL (maggiorazioni, indennità) e la tenuta del Libro Unico del Lavoro restano al consulente e all'azienda.",
    },
    {
      q: 'Geolocalizzazione dei tecnici e art. 4 dello Statuto dei Lavoratori?',
      a: 'Posizione legata all\'intervento e al turno, con informativa, legittimo interesse e l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro per il controllo a distanza.',
    },
    {
      q: 'Abilitazione DM 37/2008 e dichiarazione di conformità?',
      a: "GeoTapp non gestisce le abilitazioni del DM 37/2008 e non produce la dichiarazione di conformità. Registra ora, posizione, foto e note di ogni intervento, da allegare alla documentazione dell'impianto.",
    },
  ],
  de: [
    {
      q: 'Arbeitszeiten und Fahrten im Installationsbetrieb?',
      a: 'GeoTapp erfasst bei jeder Stempelung Beginn, Pausen und Ende mit Position und Uhrzeit, je Techniker und Auftrag, und exportiert sie als Excel- oder CSV-Datei für die Lohnbuchhaltung oder Steuerberatung. Die Anwendung des Tarifvertrags (Zuschläge, Zulagen) und die Lohnabrechnung bleiben bei ihr und beim Unternehmen.',
    },
    {
      q: 'GPS-Ortung der Monteure: DSGVO und Betriebsrat?',
      a: 'Die Position wird nur beim Stempeln und bei Nachweisfotos erfasst, nie durchgehend, und die Mitarbeiterinformation wird vor dem Stempeln in der App unterschrieben. Ob eine Interessenabwägung nach Art. 6 DSGVO und die Mitbestimmung des Betriebsrats nach §87 Abs. 1 Nr. 6 BetrVG erforderlich sind, klärt der Arbeitgeber.',
    },
    {
      q: 'Handwerksordnung und Qualifikationsnachweis?',
      a: 'GeoTapp prüft keine Qualifikationen und führt keine Nachweise zur Handwerksordnung oder zum Meisterbetrieb. Es erfasst Uhrzeit, Position, Fotos und Notizen jedes Einsatzes, die der Dokumentation der Anlage beigefügt werden können.',
    },
  ],
  fr: [
    {
      q: 'Heures et déplacements dans une entreprise d\'installation ?',
      a: 'GeoTapp enregistre à chaque pointage l\'arrivée, les pauses et le départ avec la position et l\'heure, par technicien et par affaire, et les exporte en Excel ou CSV pour votre gestionnaire de paie. L\'application de la convention collective (majorations, indemnités) et le calcul de la paie restent à la charge de votre gestionnaire de paie et de l\'entreprise.',
    },
    {
      q: 'Géolocalisation des installateurs : RGPD et représentants du personnel ?',
      a: 'La position n\'est enregistrée qu\'au pointage et pour les photos de preuve, jamais en continu, et l\'information aux salariés se signe dans l\'app avant le premier pointage. La base juridique (intérêt légitime) et, là où ils sont requis, l\'information et la consultation des représentants du personnel relèvent de l\'employeur.',
    },
    {
      q: 'Qualifications des installateurs et attestations ?',
      a: 'GeoTapp ne vérifie pas les qualifications ni les habilitations des installateurs et ne produit pas d\'attestation. Il enregistre l\'heure, la position, les photos et les notes de chaque intervention, à joindre à la documentation de l\'installation.',
    },
  ],
  es: [
    {
      q: '¿Horas y desplazamientos de los instaladores?',
      a: 'GeoTapp registra en cada fichaje entrada, pausas y salida con posición y hora, por técnico y por obra, y las exporta a Excel o CSV para tu gestoría o asesor laboral. La aplicación del convenio colectivo (pluses, dietas) y la elaboración de la nómina siguen siendo cosa de la gestoría y de la empresa.',
    },
    {
      q: '¿Geolocalización de instaladores: RGPD y AEPD?',
      a: 'La posición solo se registra al fichar y con las fotos de prueba, nunca de forma continua, y la información a los trabajadores se firma en la app antes de fichar. Corresponde a la empresa comprobar qué exigen en su caso el RGPD (interés legítimo), el art. 90 LOPDGDD y la información a la representación de los trabajadores.',
    },
    {
      q: '¿Habilitación de instalador y certificados?',
      a: 'GeoTapp no verifica las habilitaciones ni los carnés de instalador (REBT/RITE) y no genera certificados de instalación. Registra la hora, la posición, las fotos y las notas de cada intervención, para adjuntarlas a la documentación de la instalación.',
    },
  ],
  pt: [
    {
      q: 'Horas e deslocações dos instaladores?',
      a: 'O GeoTapp regista em cada picagem entrada, pausas e saída com localização e hora, por técnico e por obra, e exporta-as em Excel ou CSV para o seu contabilista ou consultor laboral. A aplicação da convenção coletiva (acréscimos, ajudas de custo) e o processamento dos salários continuam a cargo do contabilista ou consultor e da empresa.',
    },
    {
      q: 'Geolocalização de instaladores: RGPD e proteção de dados?',
      a: 'A localização só é registada ao picar o ponto e com as fotos de prova, nunca de forma contínua, e a informação aos trabalhadores assina-se na app antes de picar. Cabe à empresa verificar o que exigem, no seu caso, o RGPD (interesse legítimo), o Código do Trabalho (meios de vigilância à distância) e a informação às estruturas de representação dos trabalhadores.',
    },
    {
      q: 'Habilitação do instalador e certificados?',
      a: 'O GeoTapp não verifica habilitações nem certificações de instalador e não gera termos de responsabilidade nem certificados de instalação. Regista a hora, a localização, as fotos e as notas de cada intervenção, para juntar à documentação da instalação.',
    },
  ],
  nl: [
    {
      q: 'Werktijden en reizen in het installatiebedrijf?',
      a: 'GeoTapp legt bij elke registratie begin, pauzes en einde vast met locatie en tijd, per monteur en per opdracht, en exporteert ze als Excel- of CSV-bestand voor de salarisadministrateur. De toepassing van de cao (toeslagen, vergoedingen) en de salarisverwerking blijven bij die administrateur en bij het bedrijf.',
    },
    {
      q: 'Gps bij monteurs: AVG en ondernemingsraad?',
      a: 'De locatie wordt alleen vastgelegd bij het registreren en bij bewijsfoto\'s, nooit doorlopend, en de privacyverklaring voor de werknemers wordt in de app ondertekend voordat ze registreren. Of een belangenafweging op grond van art. 6 AVG en de instemming van de ondernemingsraad op grond van art. 27 WOR nodig zijn, beoordeelt de werkgever.',
    },
    {
      q: 'Erkenningen van installateurs en bewijzen van vakbekwaamheid?',
      a: 'GeoTapp controleert geen diploma\'s of erkenningen van installateurs en houdt geen bewijzen van vakbekwaamheid bij. Het legt tijd, locatie, foto\'s en notities van elke klus vast, die bij de documentatie van de installatie kunnen worden gevoegd.',
    },
  ],
  da: [
    {
      q: 'Timer og rejser i installationsvirksomheden?',
      a: 'GeoTapp registrerer ved hver stempling ind, pauser og ud med position og klokkeslæt, pr. tekniker og pr. sag, og eksporterer dem til Excel eller CSV til din bogholder eller dit lønkontor. Anvendelsen af overenskomsten (tillæg, godtgørelser) og lønbehandlingen forbliver hos bogholderen og virksomheden.',
    },
    {
      q: 'Geolokalisering af installatører: GDPR og Datatilsynet?',
      a: 'Positionen registreres kun ved stempling og med bevisfotos, aldrig løbende, og oplysningerne til medarbejderne underskrives i appen, før der stemples. Det er virksomheden, der selv skal undersøge, hvad GDPR (legitim interesse), databeskyttelsesloven og Datatilsynets vejledning kræver i netop jeres tilfælde.',
    },
    {
      q: 'Autorisationer og dokumentation af installationen?',
      a: 'GeoTapp verificerer ingen autorisationer og laver ingen installationsdokumentation eller overensstemmelseserklæringer. Det registrerer klokkeslæt, position, fotos og noter for hver opgave, som du kan vedlægge anlæggets dokumentation.',
    },
  ],
  'en-us': [
    {
      q: 'UL and ETL listing records per installation?',
      a: 'GeoTapp does not verify or track UL or ETL listings or manufacturer-authorised installer programmes, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'State home-improvement contractor licensing?',
      a: 'GeoTapp does not verify or track state contractor licenses, bonds, insurance or renewals, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'ADA accessibility checks on site?',
      a: 'GeoTapp does not verify or track ADA compliance checklists, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-gb': [
    {
      q: 'MCS installer certification?',
      a: 'GeoTapp does not verify or track MCS certification, technology categories or installation references, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Building Regulations Part P notification?',
      a: 'GeoTapp does not verify or track Part P competent-person registration or notifications, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'TrustMark scheme audits?',
      a: 'GeoTapp does not verify or track TrustMark requirements, customer-feedback logs or dispute-resolution records, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-au': [
    {
      q: 'AS/NZS installation-standard records?',
      a: 'GeoTapp does not verify or track AS/NZS 3000, 3500 or 5033 compliance or licence chains, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Clean Energy Council installer accreditation?',
      a: 'GeoTapp does not verify or track CEC accreditation or installation-class endorsements, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'State building-licence registrations?',
      a: 'GeoTapp does not verify or track state contractor licences or registrations, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-ca': [
    {
      q: 'CSA-listed product installation records?',
      a: 'GeoTapp does not verify or track CSA listings or manufacturer-authorised installer training, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Provincial trade qualifications?',
      a: 'GeoTapp does not verify or track provincial trade certificates, Red Seal endorsements or continuing-education credits, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Consent for on-reserve installations?',
      a: 'GeoTapp does not manage consent records or impact-benefit agreements. It records who clocked in, where and at what time on each site; agreements and consent records stay with the company and the communities concerned.',
    },
  ],
  'en-ie': [
    {
      q: 'Safe Electric and RECI registration?',
      a: 'GeoTapp does not verify or track Safe Electric or RECI registration, periodic inspections or Certs of Compliance, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'SEAI installer requirements?',
      a: 'GeoTapp does not verify or track SEAI registration numbers or installation evidence for grant claims, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'WRC and HSA inspection records?',
      a: 'GeoTapp does not manage OWTA hours reconciliation, Construction SEO rates or HSA notifiable-incident logs. It records who clocked in, where and at what time on each site, and that history can be shown to an inspector, alongside the hours and attendance you can export to Excel or CSV. The documents the rules require stay with the company.',
    },
  ],
};
