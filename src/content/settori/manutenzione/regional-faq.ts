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
      q: 'Ore e interventi multisito secondo il CCNL (Multiservizi/Metalmeccanici)?',
      a: "GeoTapp registra a ogni timbratura entrata, pause e uscita con posizione e ora, per tecnico e per sito, e le esporta in Excel o CSV per il consulente del lavoro. L'applicazione del CCNL (maggiorazioni, indennità) e la tenuta del Libro Unico del Lavoro restano al consulente e all'azienda.",
    },
    {
      q: 'Geolocalizzazione e art. 4 dello Statuto dei Lavoratori?',
      a: 'Posizione legata all\'intervento e al turno, con informativa, legittimo interesse e l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro per il controllo a distanza.',
    },
    {
      q: 'Sicurezza (D.Lgs 81/2008) e verifiche periodiche?',
      a: "GeoTapp non gestisce l'idoneità del personale né il DUVRI. Registra ogni visita con ora, posizione e foto e conserva lo storico per sede e per tecnico, che si può mostrare al cliente.",
    },
  ],
  de: [
    {
      q: 'Arbeitszeiten bei Wartung an mehreren Standorten?',
      a: 'GeoTapp erfasst bei jeder Stempelung Beginn, Pausen und Ende mit Position und Uhrzeit, je Techniker und Standort, und exportiert sie als Excel- oder CSV-Datei für die Lohnbuchhaltung oder Steuerberatung. Die Anwendung des Tarifvertrags (Zuschläge, Zulagen) und die Lohnabrechnung bleiben bei ihr und beim Unternehmen.',
    },
    {
      q: 'GPS-Ortung der Wartungstechniker: DSGVO und Betriebsrat?',
      a: 'Die Position wird nur beim Stempeln und bei Nachweisfotos erfasst, nie durchgehend, und die Mitarbeiterinformation wird vor dem Stempeln in der App unterschrieben. Ob eine Interessenabwägung nach Art. 6 DSGVO und die Mitbestimmung des Betriebsrats nach §87 Abs. 1 Nr. 6 BetrVG erforderlich sind, klärt der Arbeitgeber.',
    },
    {
      q: 'Arbeitssicherheit und wiederkehrende Prüfungen (BetrSichV)?',
      a: 'GeoTapp verwaltet weder die Eignung des Personals noch die Gefährdungsbeurteilung. Es erfasst jeden Besuch mit Uhrzeit, Position und Foto und bewahrt den Verlauf je Standort und Techniker auf, den Sie dem Kunden zeigen können.',
    },
  ],
  fr: [
    {
      q: 'Heures des interventions de maintenance multisites ?',
      a: 'GeoTapp enregistre à chaque pointage l\'arrivée, les pauses et le départ avec la position et l\'heure, par technicien et par site, et les exporte en Excel ou CSV pour votre gestionnaire de paie. L\'application de la convention collective (majorations, indemnités) et le calcul de la paie restent à la charge de votre gestionnaire de paie et de l\'entreprise.',
    },
    {
      q: 'Géolocalisation des techniciens de maintenance : RGPD et représentants du personnel ?',
      a: 'La position n\'est enregistrée qu\'au pointage et pour les photos de preuve, jamais en continu, et l\'information aux salariés se signe dans l\'app avant le premier pointage. La base juridique (intérêt légitime) et, là où ils sont requis, l\'information et la consultation des représentants du personnel relèvent de l\'employeur.',
    },
    {
      q: 'Sécurité au travail et vérifications périodiques ?',
      a: 'GeoTapp ne gère ni l\'aptitude du personnel ni le document d\'évaluation des risques. Il enregistre chaque visite avec l\'heure, la position et la photo et conserve l\'historique par site et par technicien, que vous pouvez montrer au client.',
    },
  ],
  es: [
    {
      q: '¿Horas de las intervenciones de mantenimiento en varios centros?',
      a: 'GeoTapp registra en cada fichaje entrada, pausas y salida con posición y hora, por técnico y por centro, y las exporta a Excel o CSV para tu gestoría o asesor laboral. La aplicación del convenio colectivo (pluses, dietas) y la elaboración de la nómina siguen siendo cosa de la gestoría y de la empresa.',
    },
    {
      q: '¿Geolocalización de técnicos de mantenimiento: RGPD y AEPD?',
      a: 'La posición solo se registra al fichar y con las fotos de prueba, nunca de forma continua, y la información a los trabajadores se firma en la app antes de fichar. Corresponde a la empresa comprobar qué exigen en su caso el RGPD (interés legítimo), el art. 90 LOPDGDD y la información a la representación de los trabajadores.',
    },
    {
      q: '¿Prevención de riesgos e inspecciones periódicas?',
      a: 'GeoTapp no gestiona la aptitud del personal ni la evaluación de riesgos. Registra cada visita con hora, posición y foto y conserva el historial por centro y por técnico, que puedes mostrar al cliente.',
    },
  ],
  pt: [
    {
      q: 'Horas das intervenções de manutenção em vários locais?',
      a: 'O GeoTapp regista em cada picagem entrada, pausas e saída com localização e hora, por técnico e por local, e exporta-as em Excel ou CSV para o seu contabilista ou consultor laboral. A aplicação da convenção coletiva (acréscimos, ajudas de custo) e o processamento dos salários continuam a cargo do contabilista ou consultor e da empresa.',
    },
    {
      q: 'Geolocalização de técnicos de manutenção: RGPD e proteção de dados?',
      a: 'A localização só é registada ao picar o ponto e com as fotos de prova, nunca de forma contínua, e a informação aos trabalhadores assina-se na app antes de picar. Cabe à empresa verificar o que exigem, no seu caso, o RGPD (interesse legítimo), o Código do Trabalho (meios de vigilância à distância) e a informação às estruturas de representação dos trabalhadores.',
    },
    {
      q: 'Segurança no trabalho e inspeções periódicas?',
      a: 'O GeoTapp não gere a aptidão do pessoal nem a avaliação de riscos. Regista cada visita com hora, localização e foto e conserva o histórico por local e por técnico, que pode mostrar ao cliente.',
    },
  ],
  nl: [
    {
      q: 'Werktijden bij onderhoud op meerdere locaties?',
      a: 'GeoTapp legt bij elke registratie begin, pauzes en einde vast met locatie en tijd, per monteur en per locatie, en exporteert ze als Excel- of CSV-bestand voor de salarisadministrateur. De toepassing van de cao (toeslagen, vergoedingen) en de salarisverwerking blijven bij die administrateur en bij het bedrijf.',
    },
    {
      q: 'Gps bij onderhoudsmonteurs: AVG en ondernemingsraad?',
      a: 'De locatie wordt alleen vastgelegd bij het registreren en bij bewijsfoto\'s, nooit doorlopend, en de privacyverklaring voor de werknemers wordt in de app ondertekend voordat ze registreren. Of een belangenafweging op grond van art. 6 AVG en de instemming van de ondernemingsraad op grond van art. 27 WOR nodig zijn, beoordeelt de werkgever.',
    },
    {
      q: 'Arbeidsomstandigheden en periodieke keuringen (Arbobesluit)?',
      a: 'GeoTapp beheert noch de geschiktheid van het personeel noch de RI&E (risico-inventarisatie en -evaluatie). Het legt elk bezoek vast met tijd, locatie en foto en bewaart de historie per locatie en per monteur, die u aan de klant kunt tonen.',
    },
  ],
  da: [
    {
      q: 'Timer og opgaver på flere steder?',
      a: 'GeoTapp registrerer ved hver stempling ind, pauser og ud med position og klokkeslæt, pr. tekniker og pr. sted, og eksporterer dem til Excel eller CSV til din bogholder eller dit lønkontor. Anvendelsen af overenskomsten (tillæg, godtgørelser) og lønbehandlingen forbliver hos bogholderen og virksomheden.',
    },
    {
      q: 'Geolokalisering af vedligeholdelsesteknikere: GDPR og Datatilsynet?',
      a: 'Positionen registreres kun ved stempling og med bevisfotos, aldrig løbende, og oplysningerne til medarbejderne underskrives i appen, før der stemples. Det er virksomheden, der selv skal undersøge, hvad GDPR (legitim interesse), databeskyttelsesloven og Datatilsynets vejledning kræver i netop jeres tilfælde.',
    },
    {
      q: 'Arbejdsmiljø og periodiske eftersyn?',
      a: 'GeoTapp håndterer hverken medarbejdernes egnethed eller arbejdsmiljødokumentationen. Det registrerer hvert besøg med klokkeslæt, position og foto og gemmer historikken pr. sted og pr. tekniker, som du kan vise kunden.',
    },
  ],
  nb: [
    {
      q: 'Timer og oppdrag på flere steder?',
      a: 'GeoTapp registrerer ved hver stempling start, pauser og slutt med posisjon og klokkeslett, per tekniker og per sted, og eksporterer dem til Excel eller CSV for regnskapsføreren eller lønnskontoret ditt. Anvendelsen av tariffavtalen (tillegg, godtgjørelser) og lønnsbehandlingen forblir hos regnskapsføreren og virksomheten.',
    },
    {
      q: 'Geolokalisering av vedlikeholdsteknikere: GDPR og Datatilsynet?',
      a: 'Posisjonen registreres bare ved stempling og med bevisbilder, aldri løpende, og informasjonen til de ansatte signeres i appen før det stemples. Det er virksomheten selv som må undersøke hva GDPR (berettiget interesse), personopplysningsloven og Datatilsynets veiledning krever i akkurat ditt tilfelle.',
    },
    {
      q: 'HMS og periodiske kontroller?',
      a: 'GeoTapp håndterer verken de ansattes egnethet eller HMS-dokumentasjonen. Det registrerer hvert besøk med klokkeslett, posisjon og bilde og lagrer historikken per sted og per tekniker, som du kan vise kunden.',
    },
  ],
  sv: [
    {
      q: 'Timmar och uppdrag på flera platser?',
      a: 'GeoTapp registrerar vid varje instämpling, rast och utstämpling position och tid, per tekniker och per plats, och exporterar dem till Excel eller CSV för din redovisningsbyrå eller ditt lönekontor. Tillämpningen av kollektivavtalet (tillägg, ersättningar) och lönehanteringen ligger kvar hos redovisningsbyrån och företaget.',
    },
    {
      q: 'Positionering av underhållstekniker: GDPR och IMY?',
      a: 'Positionen registreras bara vid stämpling och med bevisfoton, aldrig löpande, och informationen till medarbetarna signeras i appen före stämplingen. Det är företaget som själv måste ta reda på vad GDPR (intresseavvägning), medbestämmandelagen (MBL § 11, förhandling med facket innan systemet införs, där företaget är bundet av kollektivavtal) och IMY:s vägledning kräver i just ditt fall.',
    },
    {
      q: 'Arbetsmiljö och periodiska kontroller?',
      a: 'GeoTapp hanterar varken medarbetarnas lämplighet eller arbetsmiljödokumentationen. Det registrerar varje besök med tid, position och foto och sparar historiken per plats och per tekniker, som du kan visa kunden.',
    },
  ],
  'en-us': [
    {
      q: 'EPA Section 608 refrigerant handling?',
      a: 'GeoTapp does not verify or track EPA certifications, refrigerant-recovery logs or annual reports, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'OSHA lockout/tagout on maintenance tasks?',
      a: 'GeoTapp does not verify or track lockout/tagout procedures, energy-control acknowledgements or authorised-employee certification, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'FMCSA Part 396 maintenance records?',
      a: 'GeoTapp does not verify or track FMCSA Part 396 maintenance logs or CDL evidence, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-gb': [
    {
      q: 'PUWER 1998 maintenance records?',
      a: 'GeoTapp does not verify or track PUWER inspection and maintenance logs or technician competence, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'LOLER 1998 lifting-equipment examinations?',
      a: 'GeoTapp does not verify or track LOLER thorough-examination records, competent-person IDs or reports, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'PAT testing records?',
      a: 'GeoTapp does not verify or track PAT test schedules, results or remedial actions, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-au': [
    {
      q: 'PCBU asset-maintenance duties under WHS?',
      a: 'GeoTapp does not verify or track asset-maintenance logs under the WHS Act or officer due-diligence duties, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'AS/NZS 3760 in-service safety inspections?',
      a: 'GeoTapp does not verify or track AS/NZS 3760 test schedules, results or tags, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Heavy Vehicle National Law maintenance records?',
      a: 'GeoTapp does not verify or track HVNL maintenance logs or chain-of-responsibility records, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-ca': [
    {
      q: 'CSA Z460 hazardous-energy control?',
      a: 'GeoTapp does not verify or track CSA Z460 lockout/tagout records or authorised-employee certification, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'TSSA Ontario boiler and pressure-system maintenance?',
      a: 'GeoTapp does not verify or track TSSA inspection and maintenance logs or certified-worker qualifications, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Federally regulated transport maintenance?',
      a: 'GeoTapp does not verify or track Canada Transportation Act or CLC Part II maintenance logs, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-ie': [
    {
      q: 'Safety, Health and Welfare at Work Act 2005 maintenance records?',
      a: 'GeoTapp does not verify or track workplace-equipment inspection logs or HSA audit files, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Lifting-equipment thorough examinations?',
      a: 'GeoTapp does not verify or track thorough-examination records or competent-person IDs, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Construction SEO rates for maintenance packages?',
      a: 'GeoTapp does not apply the Construction Sectoral Employment Order rates or pension contributions and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or adviser, who apply the rules.',
    },
  ],
};
