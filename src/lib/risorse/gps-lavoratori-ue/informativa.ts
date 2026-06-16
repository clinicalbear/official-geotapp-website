/**
 * Template informativa privacy GPS per i lavoratori. La struttura sono i 7
 * elementi obbligatori dell'art. 13 GDPR (uguali in tutta la UE): qui non c'è
 * nulla di inventato per-paese, solo la cornice GDPR compilata coi dati che
 * l'utente inserisce + l'autorità di controllo del Paese scelto (dai dossier).
 *
 * Disclaimer obbligatorio in pagina: è una bozza, non consulenza legale.
 */

export type InfLocale = 'it' | 'en' | 'de' | 'fr' | 'es' | 'nl';

export interface InfInputs {
  azienda: string;
  paese: string; // nome localizzato
  finalita: string;
  quando: string;
  conservazione: string;
  dpo?: string;
  autorita: string; // ente autorità di controllo
}

interface Sezione {
  titolo: string;
  testo: string; // con placeholder {azienda} {paese} {finalita} {quando} {conservazione} {autorita}
}

interface Template {
  titolo: string;
  intro: string;
  sezioni: Sezione[];
  dpoLine: string; // {dpo}
  chiusura: string;
}

const T: Record<InfLocale, Template> = {
  it: {
    titolo: 'Informativa sul trattamento dei dati di geolocalizzazione dei lavoratori',
    intro: 'Ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR), {azienda} fornisce le seguenti informazioni sul trattamento dei dati di geolocalizzazione del personale.',
    sezioni: [
      { titolo: '1. Titolare del trattamento', testo: 'Il titolare del trattamento è {azienda}.' },
      { titolo: '2. Finalità e base giuridica', testo: 'I dati sono trattati per la seguente finalità: {finalita}. La base giuridica è il legittimo interesse del datore di lavoro e/o l’esecuzione del rapporto di lavoro (art. 6 GDPR), nel rispetto della normativa nazionale sul controllo a distanza.' },
      { titolo: '3. Categorie di dati', testo: 'Vengono trattati dati di geolocalizzazione (posizione del dispositivo o del veicolo) associati al lavoratore.' },
      { titolo: '4. Quando e come', testo: 'La posizione è rilevata {quando}. Il trattamento è proporzionato alla finalità e non comporta un controllo a distanza continuativo dei lavoratori.' },
      { titolo: '5. Destinatari', testo: 'I dati sono accessibili al personale autorizzato e ai responsabili del trattamento (ad es. il fornitore del software), che li trattano per conto del titolare.' },
      { titolo: '6. Conservazione', testo: 'I dati sono conservati per {conservazione} e poi cancellati o anonimizzati.' },
      { titolo: '7. Diritti dell’interessato', testo: 'Il lavoratore può esercitare i diritti di accesso, rettifica, cancellazione, limitazione, opposizione e portabilità, e proporre reclamo all’autorità di controllo.' },
      { titolo: '8. Autorità di controllo', testo: 'Autorità di controllo competente per reclami: {autorita} ({paese}).' },
    ],
    dpoLine: 'Responsabile della protezione dei dati (DPO): {dpo}.',
    chiusura: 'La presente informativa è una bozza generata automaticamente e non costituisce consulenza legale. Verificarne i contenuti con un professionista prima dell’uso.',
  },
  en: {
    titolo: 'Privacy notice on the processing of workers’ geolocation data',
    intro: 'Pursuant to Articles 13 and 14 of Regulation (EU) 2016/679 (GDPR), {azienda} provides the following information on the processing of staff geolocation data.',
    sezioni: [
      { titolo: '1. Data controller', testo: 'The data controller is {azienda}.' },
      { titolo: '2. Purpose and legal basis', testo: 'Data is processed for the following purpose: {finalita}. The legal basis is the employer’s legitimate interest and/or performance of the employment relationship (Art. 6 GDPR), in compliance with national rules on remote monitoring.' },
      { titolo: '3. Categories of data', testo: 'Geolocation data (device or vehicle position) linked to the worker is processed.' },
      { titolo: '4. When and how', testo: 'Position is recorded {quando}. The processing is proportionate to its purpose and does not amount to continuous remote monitoring of workers.' },
      { titolo: '5. Recipients', testo: 'Data is accessible to authorised staff and to processors (e.g. the software provider), who process it on the controller’s behalf.' },
      { titolo: '6. Retention', testo: 'Data is kept for {conservazione} and then deleted or anonymised.' },
      { titolo: '7. Data subject rights', testo: 'The worker may exercise the rights of access, rectification, erasure, restriction, objection and portability, and lodge a complaint with the supervisory authority.' },
      { titolo: '8. Supervisory authority', testo: 'Supervisory authority competent for complaints: {autorita} ({paese}).' },
    ],
    dpoLine: 'Data Protection Officer (DPO): {dpo}.',
    chiusura: 'This notice is an automatically generated draft and does not constitute legal advice. Have it reviewed by a professional before use.',
  },
  de: {
    titolo: 'Datenschutzhinweis zur Verarbeitung von Standortdaten der Mitarbeiter',
    intro: 'Gemäß Art. 13 und 14 der Verordnung (EU) 2016/679 (DSGVO) informiert {azienda} über die Verarbeitung der Standortdaten der Mitarbeiter.',
    sezioni: [
      { titolo: '1. Verantwortlicher', testo: 'Verantwortlicher ist {azienda}.' },
      { titolo: '2. Zweck und Rechtsgrundlage', testo: 'Die Daten werden zu folgendem Zweck verarbeitet: {finalita}. Rechtsgrundlage ist das berechtigte Interesse des Arbeitgebers und/oder die Durchführung des Arbeitsverhältnisses (Art. 6 DSGVO), unter Beachtung der nationalen Vorschriften zur Verhaltens- und Leistungskontrolle.' },
      { titolo: '3. Datenkategorien', testo: 'Verarbeitet werden Standortdaten (Position des Geräts oder Fahrzeugs), die dem Mitarbeiter zugeordnet sind.' },
      { titolo: '4. Wann und wie', testo: 'Die Position wird {quando} erfasst. Die Verarbeitung ist verhältnismäßig und stellt keine kontinuierliche Fernüberwachung dar.' },
      { titolo: '5. Empfänger', testo: 'Zugriff haben befugte Mitarbeiter und Auftragsverarbeiter (z. B. der Softwareanbieter), die im Auftrag des Verantwortlichen handeln.' },
      { titolo: '6. Speicherdauer', testo: 'Die Daten werden für {conservazione} gespeichert und danach gelöscht oder anonymisiert.' },
      { titolo: '7. Rechte der betroffenen Person', testo: 'Der Mitarbeiter hat das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Übertragbarkeit sowie auf Beschwerde bei der Aufsichtsbehörde.' },
      { titolo: '8. Aufsichtsbehörde', testo: 'Zuständige Aufsichtsbehörde für Beschwerden: {autorita} ({paese}).' },
    ],
    dpoLine: 'Datenschutzbeauftragter (DSB): {dpo}.',
    chiusura: 'Dieser Hinweis ist ein automatisch erstellter Entwurf und stellt keine Rechtsberatung dar. Vor der Verwendung von einer Fachperson prüfen lassen.',
  },
  fr: {
    titolo: 'Information sur le traitement des données de géolocalisation des salariés',
    intro: 'Conformément aux articles 13 et 14 du Règlement (UE) 2016/679 (RGPD), {azienda} fournit les informations suivantes sur le traitement des données de géolocalisation du personnel.',
    sezioni: [
      { titolo: '1. Responsable du traitement', testo: 'Le responsable du traitement est {azienda}.' },
      { titolo: '2. Finalité et base légale', testo: 'Les données sont traitées pour la finalité suivante : {finalita}. La base légale est l’intérêt légitime de l’employeur et/ou l’exécution de la relation de travail (art. 6 RGPD), dans le respect des règles nationales sur le contrôle à distance.' },
      { titolo: '3. Catégories de données', testo: 'Sont traitées des données de géolocalisation (position de l’appareil ou du véhicule) liées au salarié.' },
      { titolo: '4. Quand et comment', testo: 'La position est enregistrée {quando}. Le traitement est proportionné à sa finalité et ne constitue pas une surveillance permanente.' },
      { titolo: '5. Destinataires', testo: 'Les données sont accessibles au personnel autorisé et aux sous-traitants (par ex. le fournisseur du logiciel), agissant pour le compte du responsable.' },
      { titolo: '6. Conservation', testo: 'Les données sont conservées pendant {conservazione} puis supprimées ou anonymisées.' },
      { titolo: '7. Droits de la personne concernée', testo: 'Le salarié peut exercer ses droits d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité, et introduire une réclamation auprès de l’autorité de contrôle.' },
      { titolo: '8. Autorité de contrôle', testo: 'Autorité de contrôle compétente pour les réclamations : {autorita} ({paese}).' },
    ],
    dpoLine: 'Délégué à la protection des données (DPO) : {dpo}.',
    chiusura: 'Cette information est un projet généré automatiquement et ne constitue pas un conseil juridique. À faire vérifier par un professionnel avant utilisation.',
  },
  es: {
    titolo: 'Información sobre el tratamiento de datos de geolocalización de los trabajadores',
    intro: 'Conforme a los artículos 13 y 14 del Reglamento (UE) 2016/679 (RGPD), {azienda} facilita la siguiente información sobre el tratamiento de los datos de geolocalización del personal.',
    sezioni: [
      { titolo: '1. Responsable del tratamiento', testo: 'El responsable del tratamiento es {azienda}.' },
      { titolo: '2. Finalidad y base jurídica', testo: 'Los datos se tratan para la siguiente finalidad: {finalita}. La base jurídica es el interés legítimo del empleador y/o la ejecución de la relación laboral (art. 6 RGPD), respetando la normativa nacional sobre control a distancia.' },
      { titolo: '3. Categorías de datos', testo: 'Se tratan datos de geolocalización (posición del dispositivo o del vehículo) vinculados al trabajador.' },
      { titolo: '4. Cuándo y cómo', testo: 'La posición se registra {quando}. El tratamiento es proporcionado a su finalidad y no supone una vigilancia continua a distancia.' },
      { titolo: '5. Destinatarios', testo: 'Los datos son accesibles al personal autorizado y a los encargados del tratamiento (p. ej. el proveedor del software), que actúan por cuenta del responsable.' },
      { titolo: '6. Conservación', testo: 'Los datos se conservan durante {conservazione} y después se suprimen o anonimizan.' },
      { titolo: '7. Derechos del interesado', testo: 'El trabajador puede ejercer los derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad, y presentar una reclamación ante la autoridad de control.' },
      { titolo: '8. Autoridad de control', testo: 'Autoridad de control competente para reclamaciones: {autorita} ({paese}).' },
    ],
    dpoLine: 'Delegado de Protección de Datos (DPO): {dpo}.',
    chiusura: 'Esta información es un borrador generado automáticamente y no constituye asesoramiento legal. Revísela con un profesional antes de usarla.',
  },
  nl: {
    titolo: 'Privacyverklaring over de verwerking van locatiegegevens van werknemers',
    intro: 'Overeenkomstig de artikelen 13 en 14 van Verordening (EU) 2016/679 (AVG) verstrekt {azienda} de volgende informatie over de verwerking van locatiegegevens van het personeel.',
    sezioni: [
      { titolo: '1. Verwerkingsverantwoordelijke', testo: 'De verwerkingsverantwoordelijke is {azienda}.' },
      { titolo: '2. Doel en rechtsgrond', testo: 'De gegevens worden verwerkt voor het volgende doel: {finalita}. De rechtsgrond is het gerechtvaardigd belang van de werkgever en/of de uitvoering van de arbeidsrelatie (art. 6 AVG), met inachtneming van de nationale regels over controle op afstand.' },
      { titolo: '3. Categorieën gegevens', testo: 'Er worden locatiegegevens (positie van het apparaat of voertuig) verwerkt die aan de werknemer zijn gekoppeld.' },
      { titolo: '4. Wanneer en hoe', testo: 'De positie wordt {quando} vastgelegd. De verwerking is evenredig aan het doel en vormt geen continue controle op afstand.' },
      { titolo: '5. Ontvangers', testo: 'De gegevens zijn toegankelijk voor bevoegd personeel en verwerkers (bijv. de softwareleverancier), die namens de verantwoordelijke handelen.' },
      { titolo: '6. Bewaring', testo: 'De gegevens worden {conservazione} bewaard en daarna verwijderd of geanonimiseerd.' },
      { titolo: '7. Rechten van de betrokkene', testo: 'De werknemer kan de rechten op inzage, rectificatie, wissing, beperking, bezwaar en overdraagbaarheid uitoefenen en een klacht indienen bij de toezichthoudende autoriteit.' },
      { titolo: '8. Toezichthoudende autoriteit', testo: 'Bevoegde toezichthoudende autoriteit voor klachten: {autorita} ({paese}).' },
    ],
    dpoLine: 'Functionaris voor gegevensbescherming (FG): {dpo}.',
    chiusura: 'Deze verklaring is een automatisch gegenereerd concept en vormt geen juridisch advies. Laat het vóór gebruik door een professional controleren.',
  },
};

function fill(s: string, i: InfInputs): string {
  return s
    .replace(/\{azienda\}/g, i.azienda || '—')
    .replace(/\{paese\}/g, i.paese)
    .replace(/\{finalita\}/g, i.finalita)
    .replace(/\{quando\}/g, i.quando)
    .replace(/\{conservazione\}/g, i.conservazione || '—')
    .replace(/\{autorita\}/g, i.autorita);
}

/** Genera il testo completo dell'informativa per la lingua data. */
export function buildInformativa(locale: InfLocale, i: InfInputs): string {
  const t = T[locale] ?? T.en;
  const parts: string[] = [t.titolo, '', fill(t.intro, i), ''];
  if (i.dpo && i.dpo.trim()) parts.push(fill(t.dpoLine.replace(/\{dpo\}/g, i.dpo), i), '');
  for (const sez of t.sezioni) {
    parts.push(sez.titolo, fill(sez.testo, i), '');
  }
  parts.push(t.chiusura);
  return parts.join('\n');
}

export function infLocale(locale: string): InfLocale {
  return (['it', 'en', 'de', 'fr', 'es', 'nl'] as const).includes(locale as InfLocale)
    ? (locale as InfLocale)
    : 'en';
}
