/**
 * Generatore "Politica di conservazione dei dati RH".
 *
 * L'utente sceglie il Paese e i tipi di dato → tabella `tipo | durata | nota` con
 * export HTML→PDF/print (stesso pattern del generatore informativa). Le durate sono
 * INDICATIVE: la baseline è comune UE (principio di minimizzazione), mentre per i
 * documenti contrattuali/contabili la durata è statutaria e cambia per Paese
 * (mappa STATUTORY_DOCUMENTI). Contenuti localizzati per le 11 lingue del sito.
 */

export type CdLocale =
  | 'it' | 'en' | 'de' | 'fr' | 'es' | 'nl' | 'pt' | 'da' | 'sv' | 'nb' | 'ru';

export interface CdTipo {
  id: string;
  nome: string;
  /** Durata baseline UE (localizzata). */
  durata: string;
  nota: string;
  /** Se true, la durata viene sostituita dal dato statutario per-Paese, dov'è noto. */
  perPaese?: boolean;
}

export interface CdContenuto {
  heading: string;
  intro: string;
  azienda: string;
  aziendaPlaceholder: string;
  paese: string;
  selezionaTipi: string;
  genera: string;
  required: string;
  privacyNote: string;
  logo: string;
  logoHint: string;
  colTipo: string;
  colDurata: string;
  colNota: string;
  notaLegale: string;
  docTitolo: string;
  docFooter: string;
  unitAnni: string;
  perPaeseNota: string; // "Fissato dalla legge contabile/fiscale nazionale"
  tipi: CdTipo[];
  faq: { title: string; items: { q: string; a: string }[] };
}

/**
 * Durata statutaria di conservazione dei documenti contabili/fiscali (anni) per Paese,
 * con il riferimento normativo. Valori INDICATIVI e ampiamente documentati; il ref resta
 * in lingua originale. Usato solo per il tipo "documenti" (perPaese). I Paesi non in mappa
 * ricadono sulla durata baseline.
 */
export const STATUTORY_DOCUMENTI: Record<string, { anni: number; ref: string }> = {
  IT: { anni: 10, ref: 'art. 2220 c.c.' },
  DE: { anni: 10, ref: '§ 257 HGB / § 147 AO' },
  AT: { anni: 7, ref: '§ 212 UGB' },
  FR: { anni: 10, ref: 'art. L123-22 Code de commerce (bulletins de paie : 5 ans)' },
  ES: { anni: 6, ref: 'art. 30 Código de Comercio' },
  NL: { anni: 7, ref: 'art. 52 AWR' },
  BE: { anni: 7, ref: 'art. III.86 Code de droit économique' },
  PT: { anni: 10, ref: 'art. 40 Código Comercial' },
  IE: { anni: 6, ref: 'Companies Act 2014, s. 286' },
  GB: { anni: 6, ref: 'Companies Act 2006, s. 388' },
  SE: { anni: 7, ref: 'bokföringslagen 7 kap.' },
  DK: { anni: 5, ref: 'bogføringsloven § 12' },
  NO: { anni: 5, ref: 'bokføringsloven § 13' },
  FI: { anni: 10, ref: 'kirjanpitolaki 2:10' },
  PL: { anni: 5, ref: 'Ordynacja podatkowa art. 86' },
  LU: { anni: 10, ref: 'art. 16 Code de commerce' },
  CH: { anni: 10, ref: 'Art. 958f OR' },
};

export interface CdRiga {
  nome: string;
  durata: string;
  nota: string;
}

/** Costruisce le righe della tabella per i tipi selezionati e il Paese scelto. */
export function buildRighe(
  contenuto: CdContenuto,
  tipiSelezionati: string[],
  codiceISO?: string,
  nomePaese?: string,
): CdRiga[] {
  const stat = codiceISO ? STATUTORY_DOCUMENTI[codiceISO.toUpperCase()] : undefined;
  return contenuto.tipi
    .filter((t) => tipiSelezionati.includes(t.id))
    .map((t) => {
      if (t.perPaese && stat) {
        const durata = `${stat.anni} ${contenuto.unitAnni}`;
        const dove = nomePaese ? ` (${nomePaese})` : '';
        return { nome: t.nome, durata, nota: `${contenuto.perPaeseNota}${dove} — ${stat.ref}` };
      }
      return { nome: t.nome, durata: t.durata, nota: t.nota };
    });
}

const CONTENUTI: Record<CdLocale, CdContenuto> = {
  it: {
    heading: 'Genera la politica di conservazione dei dati RH',
    intro: 'Scegli il Paese e i tipi di dato che gestisci sul personale: ottieni una tabella di conservazione con durate consigliate, una nota per ciascuna e l\'export in PDF. Le durate sono indicative — per i documenti contabili usiamo la legge del Paese scelto. Tutto avviene nel tuo browser.',
    azienda: 'Ragione sociale / nome azienda (facoltativo)',
    aziendaPlaceholder: 'Es. Rossi Pulizie S.r.l.',
    paese: 'Paese di riferimento',
    selezionaTipi: 'Quali dati conservi?',
    genera: 'Genera la politica (PDF)',
    required: 'Seleziona almeno un tipo di dato.',
    privacyNote: 'Niente lascia il tuo browser: la tabella è generata interamente sul tuo dispositivo.',
    logo: 'Carica il tuo logo (facoltativo)',
    logoHint: 'PNG o JPG, comparirà in testa al documento. Resta nel tuo browser.',
    colTipo: 'Tipo di dato',
    colDurata: 'Durata consigliata',
    colNota: 'Nota',
    notaLegale: 'Durate indicative, da adattare al tuo caso e alla normativa nazionale. Questa è una risorsa informativa, non una consulenza legale.',
    docTitolo: 'Politica di conservazione dei dati RH',
    docFooter: 'Bozza generata gratuitamente con GeoTapp',
    unitAnni: 'anni',
    perPaeseNota: 'Fissato dalla legge contabile/fiscale nazionale',
    tipi: [
      { id: 'presenze', nome: 'Presenze e timbrature', durata: 'Durata del rapporto + termini di prescrizione retributiva (spesso fino a 5 anni)', nota: 'Provano ore lavorate e retribuzioni dovute: la durata segue la prescrizione del tuo Paese.' },
      { id: 'geolocalizzazione', nome: 'Dati di geolocalizzazione', durata: 'Il più breve possibile (indicativo: 12 mesi); meglio solo il dato della timbratura, non la traccia continua', nota: 'È il dato più sensibile: conserva il minimo indispensabile e cancella appena non serve più alla finalità.' },
      { id: 'foto', nome: 'Foto di intervento / prova del lavoro', durata: 'Per il tempo necessario a contestazioni o garanzia (indicativo: 12-24 mesi o durata del contratto col cliente)', nota: 'Tienile finché servono come prova del lavoro svolto, poi cancellale o anonimizzale.' },
      { id: 'comunicazioni', nome: 'Comunicazioni di servizio (chat, messaggi)', durata: 'Indicativo: 6-12 mesi', nota: 'Evita di conservare conversazioni oltre il tempo utile all\'organizzazione del lavoro.' },
      { id: 'valutazioni', nome: 'Valutazioni e note disciplinari', durata: 'Durata del rapporto + termini di impugnazione', nota: 'Conservale solo se collegate a procedimenti o obblighi; cancella quelle non più rilevanti.' },
      { id: 'documenti', nome: 'Documenti contrattuali e buste paga', durata: 'Secondo gli obblighi contabili e fiscali (indicativo: 5-10 anni)', nota: 'La durata è fissata dalla legge contabile/fiscale del tuo Paese.', perPaese: true },
    ],
    faq: { title: 'Domande frequenti', items: [
      { q: 'Le durate sono vincolanti?', a: 'No, sono indicative: un punto di partenza ragionevole. Per i documenti contabili usiamo la legge del Paese che scegli; per il resto vale il principio di tenere i dati il minimo necessario. Verifica sempre la tua situazione specifica.' },
      { q: 'I miei dati restano privati?', a: 'Sì. La tabella si genera interamente nel tuo browser: niente azienda, niente logo viene inviato a un server.' },
      { q: 'Perché conservare meno è meglio?', a: 'Più a lungo tieni i dati, più grande è il rischio in caso di violazione e più difficile è giustificarne la necessità. Cancellare a scadenza è parte della conformità, non un optional.' },
    ] },
  },
  en: {
    heading: 'Generate your HR data retention policy',
    intro: 'Pick the country and the types of staff data you handle: you get a retention table with recommended periods, a note for each and a PDF export. The periods are indicative — for accounting documents we use the law of the country you choose. Everything happens in your browser.',
    azienda: 'Legal name / company name (optional)',
    aziendaPlaceholder: 'E.g. Acme Cleaning Ltd',
    paese: 'Reference country',
    selezionaTipi: 'Which data do you keep?',
    genera: 'Generate the policy (PDF)',
    required: 'Select at least one type of data.',
    privacyNote: 'Nothing leaves your browser: the table is generated entirely on your device.',
    logo: 'Upload your logo (optional)',
    logoHint: 'PNG or JPG, it will appear at the top of the document. It stays in your browser.',
    colTipo: 'Type of data',
    colDurata: 'Recommended period',
    colNota: 'Note',
    notaLegale: 'Indicative periods, to be adapted to your case and national law. This is an informative resource, not legal advice.',
    docTitolo: 'HR data retention policy',
    docFooter: 'Draft generated for free with GeoTapp',
    unitAnni: 'years',
    perPaeseNota: 'Set by national accounting/tax law',
    tipi: [
      { id: 'presenze', nome: 'Attendance and clock-ins', durata: 'Length of employment + wage limitation periods (often up to 5 years)', nota: 'They prove hours worked and pay owed: the period follows your country\'s limitation rules.' },
      { id: 'geolocalizzazione', nome: 'Geolocation data', durata: 'As short as possible (indicative: 12 months); ideally just the clock-in point, not the continuous track', nota: 'It\'s the most sensitive data: keep the bare minimum and delete as soon as it no longer serves the purpose.' },
      { id: 'foto', nome: 'Job photos / proof of work', durata: 'For as long as needed for disputes or warranty (indicative: 12-24 months or the client contract term)', nota: 'Keep them while they serve as proof of the work done, then delete or anonymise them.' },
      { id: 'comunicazioni', nome: 'Operational communications (chat, messages)', durata: 'Indicative: 6-12 months', nota: 'Avoid keeping conversations beyond the time useful for organising the work.' },
      { id: 'valutazioni', nome: 'Assessments and disciplinary notes', durata: 'Length of employment + appeal periods', nota: 'Keep them only if tied to proceedings or obligations; delete those no longer relevant.' },
      { id: 'documenti', nome: 'Contractual documents and payslips', durata: 'As required by accounting and tax rules (indicative: 5-10 years)', nota: 'The period is set by your country\'s accounting/tax law.', perPaese: true },
    ],
    faq: { title: 'Frequently asked questions', items: [
      { q: 'Are the periods binding?', a: 'No, they\'re indicative: a reasonable starting point. For accounting documents we use the law of the country you choose; for the rest the principle is to keep data for the minimum needed. Always check your specific situation.' },
      { q: 'Does my data stay private?', a: 'Yes. The table is generated entirely in your browser: no company name, no logo is sent to a server.' },
      { q: 'Why is keeping less better?', a: 'The longer you keep data, the bigger the risk in a breach and the harder it is to justify the need. Deleting on expiry is part of compliance, not an optional extra.' },
    ] },
  },
  de: {
    heading: 'Erstellen Sie Ihre Aufbewahrungsrichtlinie für HR-Daten',
    intro: 'Wählen Sie das Land und die Arten von Personaldaten, die Sie verarbeiten: Sie erhalten eine Aufbewahrungstabelle mit empfohlenen Fristen, einer Notiz je Zeile und einem PDF-Export. Die Fristen sind Richtwerte — für Buchhaltungsunterlagen verwenden wir das Recht des gewählten Landes. Alles geschieht in Ihrem Browser.',
    azienda: 'Firmenbezeichnung / Firmenname (optional)',
    aziendaPlaceholder: 'Z. B. Muster Reinigung GmbH',
    paese: 'Bezugsland',
    selezionaTipi: 'Welche Daten bewahren Sie auf?',
    genera: 'Richtlinie erstellen (PDF)',
    required: 'Wählen Sie mindestens eine Datenart.',
    privacyNote: 'Nichts verlässt Ihren Browser: Die Tabelle wird vollständig auf Ihrem Gerät erstellt.',
    logo: 'Laden Sie Ihr Logo hoch (optional)',
    logoHint: 'PNG oder JPG, es erscheint oben im Dokument. Es bleibt in Ihrem Browser.',
    colTipo: 'Datenart',
    colDurata: 'Empfohlene Frist',
    colNota: 'Hinweis',
    notaLegale: 'Richtwerte, an Ihren Fall und das nationale Recht anzupassen. Dies ist eine informative Ressource, keine Rechtsberatung.',
    docTitolo: 'Aufbewahrungsrichtlinie für HR-Daten',
    docFooter: 'Entwurf kostenlos erstellt mit GeoTapp',
    unitAnni: 'Jahre',
    perPaeseNota: 'Durch das nationale Buchhaltungs-/Steuerrecht festgelegt',
    tipi: [
      { id: 'presenze', nome: 'Anwesenheit und Stempelungen', durata: 'Dauer des Arbeitsverhältnisses + Verjährungsfristen für Lohnansprüche (oft bis zu 5 Jahre)', nota: 'Sie belegen geleistete Stunden und geschuldeten Lohn: die Frist folgt den Verjährungsregeln Ihres Landes.' },
      { id: 'geolocalizzazione', nome: 'Standortdaten', durata: 'So kurz wie möglich (Richtwert: 12 Monate); am besten nur der Stempelpunkt, nicht die laufende Spur', nota: 'Es ist das sensibelste Datum: bewahren Sie das Nötigste auf und löschen Sie, sobald es dem Zweck nicht mehr dient.' },
      { id: 'foto', nome: 'Einsatzfotos / Arbeitsnachweis', durata: 'So lange wie für Streitfälle oder Gewährleistung nötig (Richtwert: 12-24 Monate oder Laufzeit des Kundenvertrags)', nota: 'Behalten Sie sie, solange sie als Nachweis der geleisteten Arbeit dienen, dann löschen oder anonymisieren Sie sie.' },
      { id: 'comunicazioni', nome: 'Dienstliche Kommunikation (Chat, Nachrichten)', durata: 'Richtwert: 6-12 Monate', nota: 'Vermeiden Sie es, Gespräche über die für die Arbeitsorganisation nützliche Zeit hinaus aufzubewahren.' },
      { id: 'valutazioni', nome: 'Bewertungen und Abmahnungen', durata: 'Dauer des Arbeitsverhältnisses + Anfechtungsfristen', nota: 'Bewahren Sie sie nur auf, wenn sie an Verfahren oder Pflichten gebunden sind; löschen Sie nicht mehr relevante.' },
      { id: 'documenti', nome: 'Vertragsunterlagen und Lohnabrechnungen', durata: 'Nach den Buchhaltungs- und Steuervorschriften (Richtwert: 5-10 Jahre)', nota: 'Die Frist wird durch das Buchhaltungs-/Steuerrecht Ihres Landes festgelegt.', perPaese: true },
    ],
    faq: { title: 'Häufige Fragen', items: [
      { q: 'Sind die Fristen verbindlich?', a: 'Nein, sie sind Richtwerte: ein vernünftiger Ausgangspunkt. Für Buchhaltungsunterlagen verwenden wir das Recht des gewählten Landes; für den Rest gilt, Daten nur so lange wie nötig aufzubewahren. Prüfen Sie stets Ihre konkrete Lage.' },
      { q: 'Bleiben meine Daten privat?', a: 'Ja. Die Tabelle wird vollständig in Ihrem Browser erstellt: weder Firmenname noch Logo werden an einen Server gesendet.' },
      { q: 'Warum ist weniger aufbewahren besser?', a: 'Je länger Sie Daten aufbewahren, desto größer das Risiko bei einer Verletzung und desto schwerer die Notwendigkeit zu begründen. Löschen bei Ablauf gehört zur Konformität, ist kein Extra.' },
    ] },
  },
  fr: {
    heading: 'Générez votre politique de conservation des données RH',
    intro: 'Choisissez le pays et les types de données du personnel que vous gérez : vous obtenez un tableau de conservation avec des durées conseillées, une note pour chacune et un export PDF. Les durées sont indicatives — pour les documents comptables, nous utilisons la loi du pays choisi. Tout se passe dans votre navigateur.',
    azienda: 'Raison sociale / nom de l\'entreprise (facultatif)',
    aziendaPlaceholder: 'Ex. Dupont Nettoyage SARL',
    paese: 'Pays de référence',
    selezionaTipi: 'Quelles données conservez-vous ?',
    genera: 'Générer la politique (PDF)',
    required: 'Sélectionnez au moins un type de donnée.',
    privacyNote: 'Rien ne quitte votre navigateur : le tableau est généré entièrement sur votre appareil.',
    logo: 'Téléchargez votre logo (facultatif)',
    logoHint: 'PNG ou JPG, il apparaîtra en haut du document. Il reste dans votre navigateur.',
    colTipo: 'Type de donnée',
    colDurata: 'Durée conseillée',
    colNota: 'Note',
    notaLegale: 'Durées indicatives, à adapter à votre cas et à la loi nationale. Ceci est une ressource informative, pas un conseil juridique.',
    docTitolo: 'Politique de conservation des données RH',
    docFooter: 'Brouillon généré gratuitement avec GeoTapp',
    unitAnni: 'ans',
    perPaeseNota: 'Fixé par la loi comptable/fiscale nationale',
    tipi: [
      { id: 'presenze', nome: 'Présences et pointages', durata: 'Durée du contrat + délais de prescription des salaires (souvent jusqu\'à 5 ans)', nota: 'Ils prouvent les heures travaillées et les salaires dus : la durée suit les règles de prescription de votre pays.' },
      { id: 'geolocalizzazione', nome: 'Données de géolocalisation', durata: 'La plus courte possible (indicatif : 12 mois) ; de préférence seulement le point de pointage, pas la trace continue', nota: 'C\'est la donnée la plus sensible : conservez le strict minimum et supprimez dès qu\'elle ne sert plus à la finalité.' },
      { id: 'foto', nome: 'Photos d\'intervention / preuve du travail', durata: 'Le temps nécessaire aux litiges ou à la garantie (indicatif : 12-24 mois ou durée du contrat client)', nota: 'Gardez-les tant qu\'elles servent de preuve du travail effectué, puis supprimez-les ou anonymisez-les.' },
      { id: 'comunicazioni', nome: 'Communications de service (chat, messages)', durata: 'Indicatif : 6-12 mois', nota: 'Évitez de conserver les conversations au-delà du temps utile à l\'organisation du travail.' },
      { id: 'valutazioni', nome: 'Évaluations et notes disciplinaires', durata: 'Durée du contrat + délais de recours', nota: 'Ne les conservez que si elles sont liées à des procédures ou obligations ; supprimez celles qui ne sont plus pertinentes.' },
      { id: 'documenti', nome: 'Documents contractuels et bulletins de paie', durata: 'Selon les obligations comptables et fiscales (indicatif : 5-10 ans)', nota: 'La durée est fixée par la loi comptable/fiscale de votre pays.', perPaese: true },
    ],
    faq: { title: 'Questions fréquentes', items: [
      { q: 'Les durées sont-elles contraignantes ?', a: 'Non, elles sont indicatives : un point de départ raisonnable. Pour les documents comptables, nous utilisons la loi du pays choisi ; pour le reste, le principe est de conserver les données le minimum nécessaire. Vérifiez toujours votre situation précise.' },
      { q: 'Mes données restent-elles privées ?', a: 'Oui. Le tableau est généré entièrement dans votre navigateur : ni le nom de l\'entreprise ni le logo ne sont envoyés à un serveur.' },
      { q: 'Pourquoi conserver moins vaut-il mieux ?', a: 'Plus vous gardez les données longtemps, plus le risque est grand en cas de violation et plus la nécessité est difficile à justifier. Supprimer à l\'échéance fait partie de la conformité, ce n\'est pas une option.' },
    ] },
  },
  es: {
    heading: 'Genera tu política de conservación de datos de RR. HH.',
    intro: 'Elige el país y los tipos de datos del personal que gestionas: obtienes una tabla de conservación con plazos recomendados, una nota para cada uno y la exportación en PDF. Los plazos son indicativos — para los documentos contables usamos la ley del país elegido. Todo ocurre en tu navegador.',
    azienda: 'Razón social / nombre de la empresa (opcional)',
    aziendaPlaceholder: 'Ej. Limpiezas Pérez S.L.',
    paese: 'País de referencia',
    selezionaTipi: '¿Qué datos conservas?',
    genera: 'Generar la política (PDF)',
    required: 'Selecciona al menos un tipo de dato.',
    privacyNote: 'Nada sale de tu navegador: la tabla se genera por completo en tu dispositivo.',
    logo: 'Sube tu logotipo (opcional)',
    logoHint: 'PNG o JPG, aparecerá en la parte superior del documento. Permanece en tu navegador.',
    colTipo: 'Tipo de dato',
    colDurata: 'Plazo recomendado',
    colNota: 'Nota',
    notaLegale: 'Plazos indicativos, a adaptar a tu caso y a la normativa nacional. Es un recurso informativo, no asesoramiento legal.',
    docTitolo: 'Política de conservación de datos de RR. HH.',
    docFooter: 'Borrador generado gratuitamente con GeoTapp',
    unitAnni: 'años',
    perPaeseNota: 'Fijado por la ley contable/fiscal nacional',
    tipi: [
      { id: 'presenze', nome: 'Fichajes y registros de jornada', durata: 'Duración de la relación + plazos de prescripción salarial (a menudo hasta 5 años)', nota: 'Prueban las horas trabajadas y el salario debido: el plazo sigue las reglas de prescripción de tu país.' },
      { id: 'geolocalizzazione', nome: 'Datos de geolocalización', durata: 'Lo más corto posible (indicativo: 12 meses); mejor solo el punto de fichaje, no el rastreo continuo', nota: 'Es el dato más sensible: conserva lo mínimo imprescindible y elimina en cuanto deje de servir a la finalidad.' },
      { id: 'foto', nome: 'Fotos de intervención / prueba del trabajo', durata: 'El tiempo necesario para reclamaciones o garantía (indicativo: 12-24 meses o duración del contrato con el cliente)', nota: 'Consérvalas mientras sirvan de prueba del trabajo realizado, luego elimínalas o anonimízalas.' },
      { id: 'comunicazioni', nome: 'Comunicaciones de servicio (chat, mensajes)', durata: 'Indicativo: 6-12 meses', nota: 'Evita conservar conversaciones más allá del tiempo útil para organizar el trabajo.' },
      { id: 'valutazioni', nome: 'Evaluaciones y notas disciplinarias', durata: 'Duración de la relación + plazos de impugnación', nota: 'Consérvalas solo si están ligadas a procedimientos u obligaciones; elimina las que ya no sean relevantes.' },
      { id: 'documenti', nome: 'Documentos contractuales y nóminas', durata: 'Según las obligaciones contables y fiscales (indicativo: 5-10 años)', nota: 'El plazo lo fija la ley contable/fiscal de tu país.', perPaese: true },
    ],
    faq: { title: 'Preguntas frecuentes', items: [
      { q: '¿Los plazos son vinculantes?', a: 'No, son indicativos: un punto de partida razonable. Para los documentos contables usamos la ley del país que elijas; para el resto, el principio es conservar los datos el mínimo necesario. Comprueba siempre tu situación concreta.' },
      { q: '¿Mis datos siguen siendo privados?', a: 'Sí. La tabla se genera por completo en tu navegador: ni el nombre de la empresa ni el logo se envían a un servidor.' },
      { q: '¿Por qué es mejor conservar menos?', a: 'Cuanto más tiempo guardas los datos, mayor es el riesgo ante una brecha y más difícil justificar la necesidad. Eliminar al vencimiento es parte del cumplimiento, no un extra.' },
    ] },
  },
  nl: {
    heading: 'Genereer uw bewaarbeleid voor HR-gegevens',
    intro: 'Kies het land en de soorten personeelsgegevens die u beheert: u krijgt een bewaartabel met aanbevolen termijnen, een noot per regel en een PDF-export. De termijnen zijn indicatief — voor boekhoudkundige documenten gebruiken we de wet van het gekozen land. Alles gebeurt in uw browser.',
    azienda: 'Statutaire naam / bedrijfsnaam (optioneel)',
    aziendaPlaceholder: 'Bijv. Jansen Schoonmaak B.V.',
    paese: 'Referentieland',
    selezionaTipi: 'Welke gegevens bewaart u?',
    genera: 'Beleid genereren (PDF)',
    required: 'Selecteer ten minste één type gegeven.',
    privacyNote: 'Niets verlaat uw browser: de tabel wordt volledig op uw apparaat gegenereerd.',
    logo: 'Upload uw logo (optioneel)',
    logoHint: 'PNG of JPG, het verschijnt bovenaan het document. Het blijft in uw browser.',
    colTipo: 'Type gegeven',
    colDurata: 'Aanbevolen termijn',
    colNota: 'Noot',
    notaLegale: 'Indicatieve termijnen, aan te passen aan uw geval en de nationale wet. Dit is een informatieve bron, geen juridisch advies.',
    docTitolo: 'Bewaarbeleid voor HR-gegevens',
    docFooter: 'Concept gratis gegenereerd met GeoTapp',
    unitAnni: 'jaar',
    perPaeseNota: 'Vastgesteld door de nationale boekhoud-/belastingwet',
    tipi: [
      { id: 'presenze', nome: 'Aanwezigheid en klokregistraties', durata: 'Duur van het dienstverband + verjaringstermijnen voor loonvorderingen (vaak tot 5 jaar)', nota: 'Ze bewijzen gewerkte uren en verschuldigd loon: de termijn volgt de verjaringsregels van uw land.' },
      { id: 'geolocalizzazione', nome: 'Geolocatiegegevens', durata: 'Zo kort mogelijk (indicatief: 12 maanden); liefst alleen het klokpunt, niet het doorlopende spoor', nota: 'Het is het gevoeligste gegeven: bewaar het strikt noodzakelijke en verwijder zodra het het doel niet meer dient.' },
      { id: 'foto', nome: 'Interventiefoto\'s / bewijs van werk', durata: 'Zolang nodig voor geschillen of garantie (indicatief: 12-24 maanden of de duur van het klantcontract)', nota: 'Bewaar ze zolang ze als bewijs van het verrichte werk dienen, verwijder of anonimiseer ze daarna.' },
      { id: 'comunicazioni', nome: 'Dienstcommunicatie (chat, berichten)', durata: 'Indicatief: 6-12 maanden', nota: 'Bewaar gesprekken niet langer dan nuttig is voor de organisatie van het werk.' },
      { id: 'valutazioni', nome: 'Beoordelingen en disciplinaire aantekeningen', durata: 'Duur van het dienstverband + bezwaartermijnen', nota: 'Bewaar ze alleen als ze gekoppeld zijn aan procedures of verplichtingen; verwijder wat niet meer relevant is.' },
      { id: 'documenti', nome: 'Contractuele documenten en loonstroken', durata: 'Volgens de boekhoud- en belastingverplichtingen (indicatief: 5-10 jaar)', nota: 'De termijn wordt vastgesteld door de boekhoud-/belastingwet van uw land.', perPaese: true },
    ],
    faq: { title: 'Veelgestelde vragen', items: [
      { q: 'Zijn de termijnen bindend?', a: 'Nee, ze zijn indicatief: een redelijk vertrekpunt. Voor boekhoudkundige documenten gebruiken we de wet van het gekozen land; voor de rest geldt het beginsel gegevens zo kort mogelijk te bewaren. Controleer altijd uw specifieke situatie.' },
      { q: 'Blijven mijn gegevens privé?', a: 'Ja. De tabel wordt volledig in uw browser gegenereerd: noch bedrijfsnaam noch logo wordt naar een server gestuurd.' },
      { q: 'Waarom is minder bewaren beter?', a: 'Hoe langer u gegevens bewaart, hoe groter het risico bij een inbreuk en hoe moeilijker de noodzaak te rechtvaardigen. Verwijderen bij afloop hoort bij naleving, het is geen extra.' },
    ] },
  },
  pt: {
    heading: 'Gere a sua política de conservação de dados de RH',
    intro: 'Escolha o país e os tipos de dados do pessoal que gere: obtém uma tabela de conservação com prazos recomendados, uma nota para cada e a exportação em PDF. Os prazos são indicativos — para os documentos contabilísticos usamos a lei do país escolhido. Tudo acontece no seu navegador.',
    azienda: 'Denominação social / nome da empresa (facultativo)',
    aziendaPlaceholder: 'Ex. Silva Limpezas Lda.',
    paese: 'País de referência',
    selezionaTipi: 'Que dados conserva?',
    genera: 'Gerar a política (PDF)',
    required: 'Selecione pelo menos um tipo de dado.',
    privacyNote: 'Nada sai do seu navegador: a tabela é gerada inteiramente no seu dispositivo.',
    logo: 'Carregue o seu logótipo (facultativo)',
    logoHint: 'PNG ou JPG, aparecerá no topo do documento. Permanece no seu navegador.',
    colTipo: 'Tipo de dado',
    colDurata: 'Prazo recomendado',
    colNota: 'Nota',
    notaLegale: 'Prazos indicativos, a adaptar ao seu caso e à legislação nacional. É um recurso informativo, não aconselhamento jurídico.',
    docTitolo: 'Política de conservação de dados de RH',
    docFooter: 'Rascunho gerado gratuitamente com GeoTapp',
    unitAnni: 'anos',
    perPaeseNota: 'Fixado pela lei contabilística/fiscal nacional',
    tipi: [
      { id: 'presenze', nome: 'Presenças e marcações de ponto', durata: 'Duração da relação + prazos de prescrição salarial (muitas vezes até 5 anos)', nota: 'Provam horas trabalhadas e salários devidos: o prazo segue as regras de prescrição do seu país.' },
      { id: 'geolocalizzazione', nome: 'Dados de geolocalização', durata: 'O mais curto possível (indicativo: 12 meses); de preferência só o ponto da marcação, não o rasto contínuo', nota: 'É o dado mais sensível: conserve o mínimo indispensável e elimine assim que deixar de servir a finalidade.' },
      { id: 'foto', nome: 'Fotos de intervenção / prova do trabalho', durata: 'O tempo necessário a litígios ou garantia (indicativo: 12-24 meses ou duração do contrato com o cliente)', nota: 'Guarde-as enquanto servirem de prova do trabalho realizado, depois elimine-as ou anonimize-as.' },
      { id: 'comunicazioni', nome: 'Comunicações de serviço (chat, mensagens)', durata: 'Indicativo: 6-12 meses', nota: 'Evite conservar conversas além do tempo útil à organização do trabalho.' },
      { id: 'valutazioni', nome: 'Avaliações e notas disciplinares', durata: 'Duração da relação + prazos de impugnação', nota: 'Conserve-as só se ligadas a procedimentos ou obrigações; elimine as que já não sejam relevantes.' },
      { id: 'documenti', nome: 'Documentos contratuais e recibos de vencimento', durata: 'Conforme as obrigações contabilísticas e fiscais (indicativo: 5-10 anos)', nota: 'O prazo é fixado pela lei contabilística/fiscal do seu país.', perPaese: true },
    ],
    faq: { title: 'Perguntas frequentes', items: [
      { q: 'Os prazos são vinculativos?', a: 'Não, são indicativos: um ponto de partida razoável. Para os documentos contabilísticos usamos a lei do país que escolher; para o resto, o princípio é conservar os dados o mínimo necessário. Verifique sempre a sua situação concreta.' },
      { q: 'Os meus dados ficam privados?', a: 'Sim. A tabela é gerada inteiramente no seu navegador: nem o nome da empresa nem o logótipo são enviados para um servidor.' },
      { q: 'Porque é melhor conservar menos?', a: 'Quanto mais tempo guarda os dados, maior o risco numa violação e mais difícil justificar a necessidade. Eliminar no fim do prazo faz parte da conformidade, não é um extra.' },
    ] },
  },
  da: {
    heading: 'Generér din opbevaringspolitik for HR-data',
    intro: 'Vælg landet og de typer personaledata, du håndterer: du får en opbevaringstabel med anbefalede perioder, en note til hver og en PDF-eksport. Perioderne er vejledende — for regnskabsdokumenter bruger vi loven i det valgte land. Alt sker i din browser.',
    azienda: 'Juridisk navn / virksomhedsnavn (valgfrit)',
    aziendaPlaceholder: 'F.eks. Hansen Rengøring ApS',
    paese: 'Referenceland',
    selezionaTipi: 'Hvilke data opbevarer du?',
    genera: 'Generér politikken (PDF)',
    required: 'Vælg mindst én datatype.',
    privacyNote: 'Intet forlader din browser: tabellen genereres helt på din enhed.',
    logo: 'Upload dit logo (valgfrit)',
    logoHint: 'PNG eller JPG, det vises øverst i dokumentet. Det forbliver i din browser.',
    colTipo: 'Datatype',
    colDurata: 'Anbefalet periode',
    colNota: 'Note',
    notaLegale: 'Vejledende perioder, der skal tilpasses din sag og national lovgivning. Dette er en informativ ressource, ikke juridisk rådgivning.',
    docTitolo: 'Opbevaringspolitik for HR-data',
    docFooter: 'Udkast genereret gratis med GeoTapp',
    unitAnni: 'år',
    perPaeseNota: 'Fastsat af national regnskabs-/skattelovgivning',
    tipi: [
      { id: 'presenze', nome: 'Fremmøde og stemplinger', durata: 'Ansættelsens varighed + forældelsesfrister for lønkrav (ofte op til 5 år)', nota: 'De dokumenterer arbejdstimer og skyldig løn: perioden følger dit lands forældelsesregler.' },
      { id: 'geolocalizzazione', nome: 'Geolokaliseringsdata', durata: 'Så kort som muligt (vejledende: 12 måneder); helst kun stemplingspunktet, ikke det løbende spor', nota: 'Det er det mest følsomme datum: opbevar det strengt nødvendige og slet, så snart det ikke længere tjener formålet.' },
      { id: 'foto', nome: 'Opgavefotos / arbejdsbevis', durata: 'Så længe det er nødvendigt for tvister eller garanti (vejledende: 12-24 måneder eller kundekontraktens varighed)', nota: 'Behold dem, så længe de tjener som bevis for det udførte arbejde, slet eller anonymiser dem derefter.' },
      { id: 'comunicazioni', nome: 'Tjenstlig kommunikation (chat, beskeder)', durata: 'Vejledende: 6-12 måneder', nota: 'Undgå at opbevare samtaler ud over den tid, der er nyttig for arbejdets organisering.' },
      { id: 'valutazioni', nome: 'Vurderinger og advarsler', durata: 'Ansættelsens varighed + ankefrister', nota: 'Behold dem kun, hvis de er knyttet til sager eller forpligtelser; slet dem, der ikke længere er relevante.' },
      { id: 'documenti', nome: 'Kontraktdokumenter og lønsedler', durata: 'I henhold til regnskabs- og skatteregler (vejledende: 5-10 år)', nota: 'Perioden fastsættes af dit lands regnskabs-/skattelovgivning.', perPaese: true },
    ],
    faq: { title: 'Ofte stillede spørgsmål', items: [
      { q: 'Er perioderne bindende?', a: 'Nej, de er vejledende: et fornuftigt udgangspunkt. For regnskabsdokumenter bruger vi loven i det land, du vælger; for resten er princippet at opbevare data i det mindst nødvendige. Tjek altid din konkrete situation.' },
      { q: 'Forbliver mine data private?', a: 'Ja. Tabellen genereres helt i din browser: hverken virksomhedsnavn eller logo sendes til en server.' },
      { q: 'Hvorfor er det bedre at opbevare mindre?', a: 'Jo længere du opbevarer data, jo større er risikoen ved et brud, og jo sværere er det at begrunde behovet. At slette ved udløb er en del af compliance, ikke et ekstra.' },
    ] },
  },
  sv: {
    heading: 'Generera din lagringspolicy för HR-data',
    intro: 'Välj land och de typer av personaldata du hanterar: du får en lagringstabell med rekommenderade tider, en not för var och en och en PDF-export. Tiderna är vägledande — för bokföringsdokument använder vi lagen i det valda landet. Allt sker i din webbläsare.',
    azienda: 'Juridiskt namn / företagsnamn (valfritt)',
    aziendaPlaceholder: 'T.ex. Andersson Städ AB',
    paese: 'Referensland',
    selezionaTipi: 'Vilka data lagrar du?',
    genera: 'Generera policyn (PDF)',
    required: 'Välj minst en datatyp.',
    privacyNote: 'Inget lämnar din webbläsare: tabellen genereras helt på din enhet.',
    logo: 'Ladda upp din logotyp (valfritt)',
    logoHint: 'PNG eller JPG, den visas högst upp i dokumentet. Den stannar i din webbläsare.',
    colTipo: 'Datatyp',
    colDurata: 'Rekommenderad tid',
    colNota: 'Not',
    notaLegale: 'Vägledande tider, att anpassa till ditt fall och nationell lag. Detta är en informativ resurs, inte juridisk rådgivning.',
    docTitolo: 'Lagringspolicy för HR-data',
    docFooter: 'Utkast genererat gratis med GeoTapp',
    unitAnni: 'år',
    perPaeseNota: 'Fastställt av nationell bokförings-/skattelag',
    tipi: [
      { id: 'presenze', nome: 'Närvaro och instämplingar', durata: 'Anställningens längd + preskriptionstider för lönefordringar (ofta upp till 5 år)', nota: 'De bevisar arbetade timmar och skyldig lön: tiden följer ditt lands preskriptionsregler.' },
      { id: 'geolocalizzazione', nome: 'Geolokaliseringsdata', durata: 'Så kort som möjligt (vägledande: 12 månader); helst bara instämplingspunkten, inte det löpande spåret', nota: 'Det är den känsligaste uppgiften: spara det strikt nödvändiga och radera så snart den inte längre tjänar ändamålet.' },
      { id: 'foto', nome: 'Uppdragsfoton / arbetsbevis', durata: 'Så länge det behövs för tvister eller garanti (vägledande: 12-24 månader eller kundavtalets längd)', nota: 'Behåll dem så länge de tjänar som bevis på utfört arbete, radera eller anonymisera dem sedan.' },
      { id: 'comunicazioni', nome: 'Tjänstekommunikation (chatt, meddelanden)', durata: 'Vägledande: 6-12 månader', nota: 'Undvik att spara samtal längre än vad som är användbart för att organisera arbetet.' },
      { id: 'valutazioni', nome: 'Bedömningar och disciplinära noteringar', durata: 'Anställningens längd + tider för överklagande', nota: 'Behåll dem bara om de är kopplade till förfaranden eller skyldigheter; radera de som inte längre är relevanta.' },
      { id: 'documenti', nome: 'Avtalsdokument och lönebesked', durata: 'Enligt bokförings- och skatteregler (vägledande: 5-10 år)', nota: 'Tiden fastställs av ditt lands bokförings-/skattelag.', perPaese: true },
    ],
    faq: { title: 'Vanliga frågor', items: [
      { q: 'Är tiderna bindande?', a: 'Nej, de är vägledande: en rimlig utgångspunkt. För bokföringsdokument använder vi lagen i det land du väljer; för resten är principen att spara data så kort tid som möjligt. Kontrollera alltid din specifika situation.' },
      { q: 'Förblir mina data privata?', a: 'Ja. Tabellen genereras helt i din webbläsare: varken företagsnamn eller logotyp skickas till en server.' },
      { q: 'Varför är det bättre att spara mindre?', a: 'Ju längre du sparar data, desto större är risken vid ett intrång och desto svårare att motivera behovet. Att radera vid utgången är en del av efterlevnaden, inte ett tillval.' },
    ] },
  },
  nb: {
    heading: 'Generer retningslinjen for oppbevaring av HR-data',
    intro: 'Velg land og hvilke typer personaldata du håndterer: du får en oppbevaringstabell med anbefalte perioder, en merknad for hver og en PDF-eksport. Periodene er veiledende — for regnskapsdokumenter bruker vi loven i det valgte landet. Alt skjer i nettleseren din.',
    azienda: 'Juridisk navn / firmanavn (valgfritt)',
    aziendaPlaceholder: 'F.eks. Olsen Renhold AS',
    paese: 'Referanseland',
    selezionaTipi: 'Hvilke data oppbevarer du?',
    genera: 'Generer retningslinjen (PDF)',
    required: 'Velg minst én datatype.',
    privacyNote: 'Ingenting forlater nettleseren din: tabellen genereres helt på enheten din.',
    logo: 'Last opp logoen din (valgfritt)',
    logoHint: 'PNG eller JPG, den vises øverst i dokumentet. Den blir værende i nettleseren din.',
    colTipo: 'Datatype',
    colDurata: 'Anbefalt periode',
    colNota: 'Merknad',
    notaLegale: 'Veiledende perioder, som må tilpasses ditt tilfelle og nasjonal lov. Dette er en informativ ressurs, ikke juridisk rådgivning.',
    docTitolo: 'Retningslinje for oppbevaring av HR-data',
    docFooter: 'Utkast generert gratis med GeoTapp',
    unitAnni: 'år',
    perPaeseNota: 'Fastsatt av nasjonal regnskaps-/skattelov',
    tipi: [
      { id: 'presenze', nome: 'Oppmøte og innstemplinger', durata: 'Ansettelsens varighet + foreldelsesfrister for lønnskrav (ofte opptil 5 år)', nota: 'De dokumenterer arbeidstimer og skyldig lønn: perioden følger landets foreldelsesregler.' },
      { id: 'geolocalizzazione', nome: 'Geolokaliseringsdata', durata: 'Så kort som mulig (veiledende: 12 måneder); helst bare innstemplingspunktet, ikke det løpende sporet', nota: 'Det er den mest sensitive opplysningen: oppbevar det strengt nødvendige og slett så snart den ikke lenger tjener formålet.' },
      { id: 'foto', nome: 'Oppdragsbilder / arbeidsbevis', durata: 'Så lenge det er nødvendig for tvister eller garanti (veiledende: 12-24 måneder eller kundekontraktens varighet)', nota: 'Behold dem så lenge de tjener som bevis på utført arbeid, slett eller anonymiser dem deretter.' },
      { id: 'comunicazioni', nome: 'Tjenstlig kommunikasjon (chat, meldinger)', durata: 'Veiledende: 6-12 måneder', nota: 'Unngå å oppbevare samtaler ut over tiden som er nyttig for organiseringen av arbeidet.' },
      { id: 'valutazioni', nome: 'Vurderinger og advarsler', durata: 'Ansettelsens varighet + ankefrister', nota: 'Behold dem bare hvis de er knyttet til saker eller plikter; slett dem som ikke lenger er relevante.' },
      { id: 'documenti', nome: 'Kontraktsdokumenter og lønnsslipper', durata: 'I henhold til regnskaps- og skatteregler (veiledende: 5-10 år)', nota: 'Perioden fastsettes av landets regnskaps-/skattelov.', perPaese: true },
    ],
    faq: { title: 'Ofte stilte spørsmål', items: [
      { q: 'Er periodene bindende?', a: 'Nei, de er veiledende: et fornuftig utgangspunkt. For regnskapsdokumenter bruker vi loven i landet du velger; for resten er prinsippet å oppbevare data kortest mulig. Sjekk alltid din konkrete situasjon.' },
      { q: 'Forblir dataene mine private?', a: 'Ja. Tabellen genereres helt i nettleseren din: verken firmanavn eller logo sendes til en server.' },
      { q: 'Hvorfor er det bedre å oppbevare mindre?', a: 'Jo lenger du oppbevarer data, desto større er risikoen ved et brudd, og desto vanskeligere å begrunne behovet. Å slette ved utløp er en del av etterlevelsen, ikke et tillegg.' },
    ] },
  },
  ru: {
    heading: 'Создайте политику хранения кадровых данных',
    intro: 'Выберите страну и типы данных персонала, которыми вы управляете: вы получите таблицу хранения с рекомендуемыми сроками, заметкой к каждому и экспортом в PDF. Сроки ориентировочные — для бухгалтерских документов мы используем закон выбранной страны. Всё происходит в вашем браузере.',
    azienda: 'Юридическое наименование / название компании (необязательно)',
    aziendaPlaceholder: 'Например, ООО «Чистый дом»',
    paese: 'Страна для справки',
    selezionaTipi: 'Какие данные вы храните?',
    genera: 'Создать политику (PDF)',
    required: 'Выберите хотя бы один тип данных.',
    privacyNote: 'Ничто не покидает ваш браузер: таблица создаётся полностью на вашем устройстве.',
    logo: 'Загрузите ваш логотип (необязательно)',
    logoHint: 'PNG или JPG, он появится в верхней части документа. Остаётся в вашем браузере.',
    colTipo: 'Тип данных',
    colDurata: 'Рекомендуемый срок',
    colNota: 'Заметка',
    notaLegale: 'Сроки ориентировочные, их нужно адаптировать к вашему случаю и национальному праву. Это информационный ресурс, а не юридическая консультация.',
    docTitolo: 'Политика хранения кадровых данных',
    docFooter: 'Черновик создан бесплатно с помощью GeoTapp',
    unitAnni: 'лет',
    perPaeseNota: 'Установлено национальным бухгалтерским/налоговым законом',
    tipi: [
      { id: 'presenze', nome: 'Учёт времени и отметки', durata: 'Срок трудовых отношений + сроки давности по зарплатным требованиям (часто до 5 лет)', nota: 'Они доказывают отработанные часы и причитающуюся оплату: срок следует правилам давности вашей страны.' },
      { id: 'geolocalizzazione', nome: 'Данные геолокации', durata: 'Как можно короче (ориентировочно: 12 месяцев); лучше только точку отметки, а не непрерывный трек', nota: 'Это самые чувствительные данные: храните строго необходимое и удаляйте, как только они перестают служить цели.' },
      { id: 'foto', nome: 'Фото работ / доказательство выполнения', durata: 'На время, необходимое для споров или гарантии (ориентировочно: 12-24 месяца или срок договора с клиентом)', nota: 'Храните их, пока они служат доказательством выполненной работы, затем удаляйте или обезличивайте.' },
      { id: 'comunicazioni', nome: 'Служебные коммуникации (чат, сообщения)', durata: 'Ориентировочно: 6-12 месяцев', nota: 'Не храните переписку дольше, чем это полезно для организации работы.' },
      { id: 'valutazioni', nome: 'Оценки и дисциплинарные записи', durata: 'Срок трудовых отношений + сроки обжалования', nota: 'Храните их, только если они связаны с разбирательствами или обязанностями; удаляйте утратившие актуальность.' },
      { id: 'documenti', nome: 'Договорные документы и расчётные листы', durata: 'Согласно бухгалтерским и налоговым обязанностям (ориентировочно: 5-10 лет)', nota: 'Срок установлен бухгалтерским/налоговым законом вашей страны.', perPaese: true },
    ],
    faq: { title: 'Частые вопросы', items: [
      { q: 'Сроки обязательны?', a: 'Нет, они ориентировочные: разумная отправная точка. Для бухгалтерских документов мы используем закон выбранной страны; для остального принцип — хранить данные минимально необходимое время. Всегда проверяйте свою конкретную ситуацию.' },
      { q: 'Мои данные остаются конфиденциальными?', a: 'Да. Таблица создаётся полностью в вашем браузере: ни название компании, ни логотип не отправляются на сервер.' },
      { q: 'Почему хранить меньше — лучше?', a: 'Чем дольше вы храните данные, тем выше риск при утечке и тем труднее обосновать необходимость. Удаление по истечении срока — часть соответствия, а не дополнительная опция.' },
    ] },
  },
};

export function cdLocale(locale: string): CdLocale {
  return (Object.keys(CONTENUTI) as CdLocale[]).includes(locale as CdLocale)
    ? (locale as CdLocale)
    : 'en';
}

export function getConservazione(locale: string): CdContenuto {
  return CONTENUTI[cdLocale(locale)];
}
