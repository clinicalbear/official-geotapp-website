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
  pt: 'Conformidade em Portugal',
  nl: 'Regels en documentatie in Nederland',
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
      a: "GeoTapp registra a ogni timbratura entrata, pause e uscita con posizione e ora, per idraulico e per commessa, e le esporta in Excel o CSV per il consulente del lavoro. L'applicazione del CCNL (maggiorazioni, indennità) e la tenuta del Libro Unico del Lavoro restano al consulente e all'azienda.",
    },
    {
      q: 'Geolocalizzazione e art. 4 dello Statuto dei Lavoratori?',
      a: 'Posizione legata all\'intervento e al turno, con informativa, legittimo interesse e l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro per il controllo a distanza.',
    },
    {
      q: 'Impianti idrico e gas: DM 37/2008 (lettere C/E) e abilitazione gas?',
      a: "GeoTapp non verifica le abilitazioni (gas incluse) e non produce la dichiarazione di conformità del DM 37/2008. Registra ora, posizione e foto di ogni intervento su impianti idrosanitari e gas, che si possono allegare alla documentazione dell'impianto.",
    },
  ],
  de: [
    {
      q: 'Arbeitszeiten und Einsätze im SHK-Handwerk?',
      a: 'GeoTapp erfasst bei jeder Stempelung Beginn, Pausen und Ende mit Position und Uhrzeit, je Installateur und Auftrag, und exportiert sie als Excel- oder CSV-Datei für die Lohnbuchhaltung oder Steuerberatung. Die Anwendung des Tarifvertrags (Zuschläge, Zulagen) und die Lohnabrechnung bleiben bei ihr und beim Unternehmen.',
    },
    {
      q: 'GPS-Ortung der Installateure: DSGVO und Betriebsrat?',
      a: 'Die Position wird nur beim Stempeln und bei Nachweisfotos erfasst, nie durchgehend, und die Mitarbeiterinformation wird vor dem Stempeln in der App unterschrieben. Ob eine Interessenabwägung nach Art. 6 DSGVO und die Mitbestimmung des Betriebsrats nach §87 Abs. 1 Nr. 6 BetrVG erforderlich sind, klärt der Arbeitgeber.',
    },
    {
      q: 'Gas- und Wasserinstallation: Zulassung und TRGI (DVGW G 600)?',
      a: 'GeoTapp prüft keine Zulassungen, auch nicht für Gasarbeiten, und erstellt keine Nachweise nach TRGI (DVGW-Arbeitsblatt G 600). Es erfasst Uhrzeit, Position und Fotos jedes Einsatzes an Sanitär- und Gasanlagen, die sich der Anlagendokumentation beifügen lassen.',
    },
  ],
  fr: [
    {
      q: "Heures et interventions des plombiers-chauffagistes ?",
      a: "À chaque pointage, GeoTapp enregistre arrivée, pauses et départ avec position et heure, par plombier et par chantier, et les exporte en Excel ou CSV pour votre comptable ou gestionnaire de paie. L'application de la convention collective (majorations, indemnités) et l'établissement de la paie restent de son ressort et de celui de l'entreprise.",
    },
    {
      q: "Géolocalisation des plombiers : RGPD et CNIL ?",
      a: "La position n'est enregistrée qu'au pointage et avec les photos de preuve, jamais en continu, et l'information aux salariés est signée dans l'appli avant de pointer. Reste à l'employeur de vérifier ce que le RGPD (intérêt légitime) et la consultation du CSE exigent dans son cas.",
    },
    {
      q: "Interventions gaz : qualification PG et Qualibat ?",
      a: "GeoTapp ne vérifie aucune qualification, gaz comprise (Professionnel Gaz, Qualibat), et ne produit aucune attestation. Il enregistre l'heure, la position et les photos de chaque intervention sur les installations sanitaires et gaz, que vous pouvez joindre au dossier de l'installation.",
    },
  ],
  es: [
    {
      q: '¿Horas e intervenciones de los fontaneros?',
      a: 'GeoTapp registra en cada fichaje entrada, pausas y salida con posición y hora, por fontanero y por obra, y las exporta a Excel o CSV para tu gestoría o asesor laboral. La aplicación del convenio colectivo (pluses, dietas) y la elaboración de la nómina siguen siendo cosa de la gestoría y de la empresa.',
    },
    {
      q: '¿Geolocalización de fontaneros: RGPD y AEPD?',
      a: 'La posición solo se registra al fichar y con las fotos de prueba, nunca de forma continua, y la información a los trabajadores se firma en la app antes de fichar. Corresponde a la empresa comprobar qué exigen en su caso el RGPD (interés legítimo), el art. 90 LOPDGDD y la información a la representación de los trabajadores.',
    },
    {
      q: '¿Intervenciones de gas y carné de instalador?',
      a: 'GeoTapp no verifica ninguna habilitación, tampoco la de gas, ni genera certificados de instalación. Registra la hora, la posición y las fotos de cada intervención en instalaciones de agua y gas, que puedes adjuntar al expediente de la instalación.',
    },
  ],
  pt: [
    {
      q: 'Horas e deslocações segundo a CCT da metalurgia?',
      a: 'Horas por canalizador e por obra, ajudas de custo e disponibilidade e conservação dos dados, registados em cada intervenção.',
    },
    {
      q: 'RGPD e CNPD na geolocalização dos canalizadores?',
      a: 'Geolocalização apenas durante o tempo de trabalho, com informação prévia, interesse legítimo e direito de acesso, dentro dos critérios da CNPD.',
    },
    {
      q: 'Certificação de instalador de gás (DGEG)?',
      a: 'Associação de cada intervenção de gás à certificação de instalador habilitado pela DGEG, com o histórico de suporte ao termo de responsabilidade.',
    },
  ],
  nl: [
    {
      q: 'Werktijden en klussen in de installatiesector?',
      a: 'GeoTapp legt bij elke registratie begin, pauzes en einde vast met locatie en tijd, per installateur en per opdracht, en exporteert ze als Excel- of CSV-bestand voor de salarisadministrateur. De toepassing van de cao (toeslagen, vergoedingen) en de salarisverwerking blijven bij die administrateur en bij het bedrijf.',
    },
    {
      q: 'Gps bij loodgieters: AVG en ondernemingsraad?',
      a: 'De locatie wordt alleen vastgelegd bij het registreren en bij bewijsfoto\'s, nooit doorlopend, en de privacyverklaring voor de werknemers wordt in de app ondertekend voordat ze registreren. Of een belangenafweging op grond van art. 6 AVG en de instemming van de ondernemingsraad op grond van art. 27 WOR nodig zijn, beoordeelt de werkgever.',
    },
    {
      q: 'Gas- en watertechniek: erkenningen en keurmerken?',
      a: 'GeoTapp controleert geen erkenningen of keurmerken, ook niet voor gaswerkzaamheden, en maakt geen bewijzen van vakbekwaamheid. Het legt tijd, locatie en foto\'s van elke klus aan sanitaire en gasinstallaties vast, die bij de documentatie van de installatie kunnen worden gevoegd.',
    },
  ],
  'en-us': [
    {
      q: 'UPC and IPC inspection records?',
      a: 'GeoTapp does not verify or track UPC or IPC inspections, inspector names or fixture pass/fail results, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Backflow-prevention tester certification?',
      a: 'GeoTapp does not verify or track ASSE or IAPMO tester certification or recertification dates, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Lead and Copper Rule and EPA RRP work?',
      a: 'GeoTapp does not verify or track material-batch traceability or lead-safe work certification, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-gb': [
    {
      q: 'WRAS and Approved Plumber scheme membership?',
      a: 'GeoTapp does not verify or track WRAS Approved Plumber registration, CIPHE membership or Water Fittings Regulations audits, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Gas Safe registration for combined plumbing and gas work?',
      a: 'GeoTapp does not verify or track Gas Safe registration or appliance categories, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Legionella risk assessments?',
      a: 'GeoTapp does not verify or track L8 ACOP risk assessments, HSG274 audits or Legionella training, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-au': [
    {
      q: 'AS/NZS 3500 plumbing records?',
      a: 'GeoTapp does not verify or track AS/NZS 3500 compliance or licensed-plumber supervision chains, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'State plumbing licence renewals?',
      a: 'GeoTapp does not verify or track state plumbing licences, scopes of work or expiry dates, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'WHS site-visit logs for plumbing on construction sites?',
      a: 'GeoTapp does not manage SWMS or confined-space entry permits. It records who clocked in, where and at what time on each site, and that history can be shown to the client or whoever asks. The documents the rules require stay with the company.',
    },
  ],
  'en-ca': [
    {
      q: 'National Plumbing Code of Canada records?',
      a: 'GeoTapp does not verify or track compliance with the National Plumbing Code or provincial plumbing codes, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Red Seal plumber certification?',
      a: 'GeoTapp does not verify or track Red Seal or provincial trade certification or continuing-education credits, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Cross-connection control and backflow testers?',
      a: 'GeoTapp does not verify or track backflow-tester certification or municipal water-utility audits, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-ie': [
    {
      q: 'RGI plumbing and gas qualifications?',
      a: 'GeoTapp does not verify or track RGI registration or appliance categories, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'WRC and HSA audits?',
      a: 'GeoTapp does not manage OWTA hours reconciliation, Construction SEO rates or HSA notifiable-incident logs. It records who clocked in, where and at what time on each site, and that history can be shown to an inspector, alongside the hours and attendance you can export to Excel or CSV. The documents the rules require stay with the company.',
    },
    {
      q: 'Water Services Act 2007 records?',
      a: 'GeoTapp does not verify or track Water Services Act work records or supervising-plumber chains, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
};
