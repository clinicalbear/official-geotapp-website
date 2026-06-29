/**
 * Template informativa privacy GPS per i lavoratori. La struttura sono i 7
 * elementi obbligatori dell'art. 13 GDPR (uguali in tutta la UE): qui non c'è
 * nulla di inventato per-paese, solo la cornice GDPR compilata coi dati che
 * l'utente inserisce + l'autorità di controllo del Paese scelto (dai dossier).
 *
 * Disclaimer obbligatorio in pagina: è una bozza, non consulenza legale.
 */

export type InfLocale = 'it' | 'en' | 'de' | 'fr' | 'es' | 'nl' | 'pt' | 'da' | 'sv' | 'nb' | 'ru';

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
      { titolo: '2. Finalità e base giuridica', testo: 'I dati sono trattati per la seguente finalità: {finalita}. {baseGiuridica}' },
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
      { titolo: '2. Purpose and legal basis', testo: 'Data is processed for the following purpose: {finalita}. {baseGiuridica}' },
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
      { titolo: '2. Zweck und Rechtsgrundlage', testo: 'Die Daten werden zu folgendem Zweck verarbeitet: {finalita}. {baseGiuridica}' },
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
      { titolo: '2. Finalité et base légale', testo: 'Les données sont traitées pour la finalité suivante : {finalita}. {baseGiuridica}' },
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
      { titolo: '2. Finalidad y base jurídica', testo: 'Los datos se tratan para la siguiente finalidad: {finalita}. {baseGiuridica}' },
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
      { titolo: '2. Doel en rechtsgrond', testo: 'De gegevens worden verwerkt voor het volgende doel: {finalita}. {baseGiuridica}' },
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
  pt: {
    titolo: "Informação sobre o tratamento dos dados de geolocalização dos trabalhadores",
    intro: "Nos termos dos artigos 13.º e 14.º do Regulamento (UE) 2016/679 (RGPD), {azienda} presta as seguintes informações sobre o tratamento dos dados de geolocalização do pessoal.",
    sezioni: [
      { titolo: "1. Responsável pelo tratamento", testo: "O responsável pelo tratamento é {azienda}." },
      { titolo: "2. Finalidade e fundamento jurídico", testo: "Os dados são tratados para a seguinte finalidade: {finalita}. {baseGiuridica}" },
      { titolo: "3. Categorias de dados", testo: "São tratados dados de geolocalização (posição do dispositivo ou do veículo) associados ao trabalhador." },
      { titolo: "4. Quando e como", testo: "A posição é recolhida {quando}. O tratamento é proporcional à finalidade e não implica um controlo à distância contínuo dos trabalhadores." },
      { titolo: "5. Destinatários", testo: "Os dados são acessíveis ao pessoal autorizado e aos subcontratantes (por exemplo, o fornecedor do software), que os tratam por conta do responsável pelo tratamento." },
      { titolo: "6. Conservação", testo: "Os dados são conservados durante {conservazione} e, em seguida, eliminados ou anonimizados." },
      { titolo: "7. Direitos do titular dos dados", testo: "O trabalhador pode exercer os direitos de acesso, retificação, apagamento, limitação, oposição e portabilidade, bem como apresentar reclamação à autoridade de controlo." },
      { titolo: "8. Autoridade de controlo", testo: "Autoridade de controlo competente para reclamações: {autorita} ({paese})." },
    ],
    dpoLine: "Encarregado da proteção de dados (EPD): {dpo}.",
    chiusura: "A presente informação é um rascunho gerado automaticamente e não constitui aconselhamento jurídico. Verifique o seu conteúdo com um profissional antes de a utilizar.",
  },
  da: {
    titolo: "Oplysninger om behandling af medarbejderes geolokaliseringsdata",
    intro: "I henhold til artikel 13 og 14 i forordning (EU) 2016/679 (Databeskyttelsesforordningen, GDPR) giver {azienda} hermed følgende oplysninger om behandlingen af personalets geolokaliseringsdata.",
    sezioni: [
      { titolo: "1. Dataansvarlig", testo: "Den dataansvarlige er {azienda}." },
      { titolo: "2. Formål og retsgrundlag", testo: "Dataene behandles til følgende formål: {finalita}. {baseGiuridica}" },
      { titolo: "3. Kategorier af data", testo: "Der behandles geolokaliseringsdata (enhedens eller køretøjets position) knyttet til medarbejderen." },
      { titolo: "4. Hvornår og hvordan", testo: "Positionen registreres {quando}. Behandlingen står i rimeligt forhold til formålet og indebærer ikke en vedvarende fjernovervågning af medarbejderne." },
      { titolo: "5. Modtagere", testo: "Dataene er tilgængelige for autoriseret personale og for databehandlere (f.eks. softwareleverandøren), som behandler dem på vegne af den dataansvarlige." },
      { titolo: "6. Opbevaring", testo: "Dataene opbevares i {conservazione} og slettes eller anonymiseres derefter." },
      { titolo: "7. Den registreredes rettigheder", testo: "Medarbejderen kan udøve retten til indsigt, berigtigelse, sletning, begrænsning, indsigelse og dataportabilitet samt indgive klage til tilsynsmyndigheden." },
      { titolo: "8. Tilsynsmyndighed", testo: "Kompetent tilsynsmyndighed for klager: {autorita} ({paese})." },
    ],
    dpoLine: "Databeskyttelsesrådgiver (DPO): {dpo}.",
    chiusura: "Disse oplysninger er et automatisk genereret udkast og udgør ikke juridisk rådgivning. Få indholdet kontrolleret af en fagperson inden brug.",
  },
  sv: {
    titolo: "Information om behandling av anställdas geolokaliseringsuppgifter",
    intro: "I enlighet med artiklarna 13 och 14 i förordning (EU) 2016/679 (dataskyddsförordningen, GDPR) lämnar {azienda} följande information om behandlingen av personalens geolokaliseringsuppgifter.",
    sezioni: [
      { titolo: "1. Personuppgiftsansvarig", testo: "Personuppgiftsansvarig är {azienda}." },
      { titolo: "2. Ändamål och rättslig grund", testo: "Uppgifterna behandlas för följande ändamål: {finalita}. {baseGiuridica}" },
      { titolo: "3. Kategorier av uppgifter", testo: "Geolokaliseringsuppgifter behandlas (positionen för enheten eller fordonet) kopplade till arbetstagaren." },
      { titolo: "4. När och hur", testo: "Positionen registreras {quando}. Behandlingen står i proportion till ändamålet och innebär inte en fortlöpande kontroll på distans av arbetstagarna." },
      { titolo: "5. Mottagare", testo: "Uppgifterna är tillgängliga för behörig personal och för personuppgiftsbiträden (till exempel programvaruleverantören), som behandlar dem för den personuppgiftsansvariges räkning." },
      { titolo: "6. Lagring", testo: "Uppgifterna lagras under {conservazione} och raderas eller anonymiseras därefter." },
      { titolo: "7. Den registrerades rättigheter", testo: "Arbetstagaren kan utöva rätten till tillgång, rättelse, radering, begränsning, invändning och dataportabilitet samt lämna in klagomål till tillsynsmyndigheten." },
      { titolo: "8. Tillsynsmyndighet", testo: "Behörig tillsynsmyndighet för klagomål: {autorita} ({paese})." },
    ],
    dpoLine: "Dataskyddsombud (DPO): {dpo}.",
    chiusura: "Denna information är ett automatiskt genererat utkast och utgör inte juridisk rådgivning. Kontrollera innehållet med en yrkesverksam innan användning.",
  },
  nb: {
    titolo: "Personvernerklæring om behandling av geolokaliseringsdata for arbeidstakere",
    intro: "I henhold til artikkel 13 og 14 i forordning (EU) 2016/679 (personvernforordningen / GDPR) gir {azienda} følgende informasjon om behandlingen av geolokaliseringsdata for de ansatte.",
    sezioni: [
      { titolo: "1. Behandlingsansvarlig", testo: "Behandlingsansvarlig er {azienda}." },
      { titolo: "2. Formål og rettslig grunnlag", testo: "Dataene behandles for følgende formål: {finalita}. {baseGiuridica}" },
      { titolo: "3. Kategorier av personopplysninger", testo: "Det behandles geolokaliseringsdata (posisjonen til enheten eller kjøretøyet) knyttet til arbeidstakeren." },
      { titolo: "4. Når og hvordan", testo: "Posisjonen registreres {quando}. Behandlingen står i forhold til formålet og innebærer ikke en kontinuerlig fjernkontroll av arbeidstakerne." },
      { titolo: "5. Mottakere", testo: "Dataene er tilgjengelige for autorisert personell og for databehandlere (for eksempel programvareleverandøren), som behandler dem på vegne av den behandlingsansvarlige." },
      { titolo: "6. Lagring", testo: "Dataene lagres i {conservazione} og deretter slettes eller anonymiseres." },
      { titolo: "7. Den registrertes rettigheter", testo: "Arbeidstakeren kan utøve retten til innsyn, retting, sletting, begrensning, innsigelse og dataportabilitet, samt klage til tilsynsmyndigheten." },
      { titolo: "8. Tilsynsmyndighet", testo: "Tilsynsmyndighet med ansvar for klager: {autorita} ({paese})." },
    ],
    dpoLine: "Personvernombud (DPO): {dpo}.",
    chiusura: "Denne personvernerklæringen er et automatisk generert utkast og utgjør ikke juridisk rådgivning. Få innholdet kontrollert av en fagperson før bruk.",
  },
  ru: {
    titolo: "Уведомление об обработке данных о геолокации работников",
    intro: "В соответствии со статьями 13 и 14 Регламента (ЕС) 2016/679 (GDPR) компания {azienda} предоставляет следующую информацию об обработке данных о геолокации персонала.",
    sezioni: [
      { titolo: "1. Контролёр данных", testo: "Контролёром обработки данных является {azienda}." },
      { titolo: "2. Цели и правовое основание", testo: "Данные обрабатываются в следующих целях: {finalita}. {baseGiuridica}" },
      { titolo: "3. Категории данных", testo: "Обрабатываются данные о геолокации (местоположение устройства или транспортного средства), связанные с работником." },
      { titolo: "4. Когда и как", testo: "Местоположение фиксируется {quando}. Обработка соразмерна цели и не предполагает непрерывного дистанционного контроля за работниками." },
      { titolo: "5. Получатели данных", testo: "Доступ к данным имеют уполномоченный персонал и обработчики данных (например, поставщик программного обеспечения), которые обрабатывают их по поручению контролёра." },
      { titolo: "6. Хранение", testo: "Данные хранятся в течение {conservazione}, после чего удаляются или анонимизируются." },
      { titolo: "7. Права субъекта данных", testo: "Работник вправе осуществлять права на доступ, исправление, удаление, ограничение обработки, возражение и переносимость данных, а также подать жалобу в надзорный орган." },
      { titolo: "8. Надзорный орган", testo: "Надзорный орган, компетентный рассматривать жалобы: {autorita} ({paese})." },
    ],
    dpoLine: "Должностное лицо по защите данных (DPO): {dpo}.",
    chiusura: "Настоящее уведомление является автоматически сгенерированным черновиком и не представляет собой юридическую консультацию. Перед использованием проверьте его содержание у специалиста.",
  },
};

// ── Cogestione / rappresentanza dei lavoratori (diritto del lavoro nazionale) ──
// Dove la legge prevede la co-decisione della rappresentanza dei lavoratori,
// l'introduzione di un sistema OGGETTIVAMENTE IDONEO al controllo va concertata
// PRIMA dell'attivazione, a prescindere dalla finalità (la "objektive Eignung"
// del § 87 Abs. 1 Nr. 6 BetrVG). Il riferimento normativo è per-Paese, il testo è
// localizzato per lingua UI. Elenco verificato ed estendibile: regimi di
// co-determinazione/consultazione del consiglio aziendale o sindacale per i
// principali mercati UE/SEE in cui operiamo.
const CODETERM_REF: Record<string, string> = {
  DE: '§ 87 Abs. 1 Nr. 6 BetrVG',
  AT: '§ 96 Abs. 1 Z 3 ArbVG',
  NL: 'art. 27 WOR',
  FR: 'art. L2312-38 Code du travail (CSE)',
  IT: 'art. 4 L. 300/1970 (Statuto dei lavoratori)',
  ES: 'art. 64 Estatuto de los Trabajadores',
  PT: 'comissão de trabalhadores (Código do Trabalho)',
  SE: 'MBL (lag 1976:580)',
  NO: 'aml § 9-2',
  DK: 'DA/LO-aftalen om kontrolforanstaltninger',
  FI: 'yhteistoimintalaki (1333/2021)',
};

const CODETERM_SECTION: Record<InfLocale, { titolo: string; testo: string }> = {
  it: { titolo: '9. Cogestione e rappresentanza dei lavoratori', testo: "L'introduzione e l'utilizzo di questo sistema possono essere soggetti ai diritti di cogestione o consultazione della rappresentanza dei lavoratori (ad es. il consiglio aziendale) ai sensi di {ref}, poiché il sistema è oggettivamente idoneo al controllo del comportamento e della prestazione, a prescindere dalla finalità dichiarata. Dove tale rappresentanza esiste, va coinvolta e, ove previsto, occorre stipulare un accordo (ad es. un accordo aziendale) prima dell'attivazione del sistema in {paese}." },
  en: { titolo: '9. Employee co-determination and representation', testo: 'The introduction and use of this system may be subject to the co-determination or consultation rights of employee representation (e.g. the works council) under {ref}, because the system is objectively capable of monitoring behaviour and performance, regardless of its stated purpose. Where such representation exists, it must be involved and, where applicable, an agreement (e.g. a works agreement) must be concluded before the system is activated in {paese}.' },
  de: { titolo: '9. Mitbestimmung und Arbeitnehmervertretung', testo: 'Die Einführung und Anwendung dieses Systems kann der Mitbestimmung bzw. Beteiligung der Arbeitnehmervertretung (z. B. des Betriebsrats) gemäß {ref} unterliegen, da das System objektiv zur Verhaltens- und Leistungskontrolle geeignet ist, unabhängig von seinem erklärten Zweck. Wo eine solche Vertretung besteht, ist sie zu beteiligen; vor der Aktivierung des Systems in {paese} ist, soweit vorgesehen, eine Vereinbarung (z. B. eine Betriebsvereinbarung) abzuschließen.' },
  fr: { titolo: '9. Cogestion et représentation du personnel', testo: "L'introduction et l'utilisation de ce système peuvent être soumises aux droits de cogestion ou de consultation de la représentation du personnel (par ex. le comité d'entreprise) au titre de {ref}, car le système est objectivement de nature à contrôler le comportement et la performance, indépendamment de sa finalité déclarée. Lorsqu'une telle représentation existe, elle doit être associée et, le cas échéant, un accord (par ex. un accord d'entreprise) doit être conclu avant l'activation du système en {paese}." },
  es: { titolo: '9. Cogestión y representación de los trabajadores', testo: 'La introducción y el uso de este sistema pueden estar sujetos a los derechos de cogestión o consulta de la representación de los trabajadores (p. ej. el comité de empresa) conforme a {ref}, ya que el sistema es objetivamente idóneo para controlar el comportamiento y el rendimiento, con independencia de su finalidad declarada. Cuando exista dicha representación, debe implicársela y, en su caso, celebrar un acuerdo (p. ej. un convenio de empresa) antes de activar el sistema en {paese}.' },
  nl: { titolo: '9. Medezeggenschap en werknemersvertegenwoordiging', testo: 'De invoering en het gebruik van dit systeem kunnen onderworpen zijn aan de medezeggenschaps- of instemmingsrechten van de werknemersvertegenwoordiging (bijv. de ondernemingsraad) op grond van {ref}, omdat het systeem objectief geschikt is om gedrag en prestaties te controleren, ongeacht het verklaarde doel. Waar een dergelijke vertegenwoordiging bestaat, moet zij worden betrokken en moet, indien van toepassing, vóór de activering van het systeem in {paese} een overeenkomst (bijv. een ondernemingsovereenkomst) worden gesloten.' },
  pt: { titolo: '9. Cogestão e representação dos trabalhadores', testo: 'A introdução e a utilização deste sistema podem estar sujeitas aos direitos de cogestão ou consulta da representação dos trabalhadores (por ex. a comissão de trabalhadores) nos termos de {ref}, uma vez que o sistema é objetivamente idóneo para controlar o comportamento e o desempenho, independentemente da finalidade declarada. Onde exista tal representação, deve ser envolvida e, se aplicável, deve ser celebrado um acordo (por ex. um acordo de empresa) antes da ativação do sistema em {paese}.' },
  da: { titolo: '9. Medbestemmelse og medarbejderrepræsentation', testo: 'Indførelsen og brugen af dette system kan være underlagt medbestemmelses- eller høringsrettigheder for medarbejderrepræsentationen (f.eks. samarbejdsudvalget) i henhold til {ref}, da systemet objektivt er egnet til at kontrollere adfærd og præstation, uanset det erklærede formål. Hvor en sådan repræsentation findes, skal den inddrages, og der skal, hvor det er relevant, indgås en aftale (f.eks. en virksomhedsaftale), før systemet aktiveres i {paese}.' },
  sv: { titolo: '9. Medbestämmande och arbetstagarrepresentation', testo: 'Införandet och användningen av detta system kan omfattas av arbetstagarrepresentationens (t.ex. företagsrådets) rätt till medbestämmande eller samråd enligt {ref}, eftersom systemet objektivt är ägnat att kontrollera beteende och prestation, oavsett det uppgivna syftet. Där sådan representation finns ska den involveras, och i förekommande fall ska ett avtal (t.ex. ett lokalt kollektivavtal) ingås innan systemet aktiveras i {paese}.' },
  nb: { titolo: '9. Medbestemmelse og arbeidstakerrepresentasjon', testo: 'Innføringen og bruken av dette systemet kan være underlagt arbeidstakerrepresentasjonens (f.eks. arbeidsmiljøutvalgets) rett til medbestemmelse eller drøfting i henhold til {ref}, fordi systemet objektivt er egnet til å kontrollere atferd og ytelse, uavhengig av det oppgitte formålet. Der slik representasjon finnes, skal den involveres, og det skal om nødvendig inngås en avtale (f.eks. en virksomhetsavtale) før systemet aktiveres i {paese}.' },
  ru: { titolo: '9. Соучастие и представительство работников', testo: 'Внедрение и использование этой системы могут подпадать под права работников на соучастие или консультации через их представительство (например, производственный совет) согласно {ref}, поскольку система объективно пригодна для контроля поведения и результативности независимо от заявленной цели. При наличии такого представительства его необходимо привлечь и, при необходимости, заключить соглашение (например, производственное соглашение) до активации системы в {paese}.' },
};

// ── Base giuridica (sezione 2) ──
// Default pan-UE (il generico legittimo interesse / esecuzione del contratto) +
// override per-Paese dove la base corretta differisce. Per la Germania, dopo
// CGUE C-34/21 e su indicazione del revisore legale DE, la base è la
// Betriebsvereinbarung (Art. 88 Abs. 1 DSGVO + § 26 Abs. 4 BDSG) dove esiste un
// Betriebsrat; altrimenti Art. 6 Abs. 1 lit. b + § 26 Abs. 1 BDSG, in via
// integrativa lit. f; mai il consenso (non liberamente prestabile nel rapporto
// di lavoro). Il testo è localizzato per lingua UI; i riferimenti normativi DE
// restano in forma di legge tedesca, come per la sezione 9 (cogestione).
const BASEGIURIDICA_DEFAULT: Record<InfLocale, string> = {
  it: 'La base giuridica è il legittimo interesse del datore di lavoro e/o l’esecuzione del rapporto di lavoro (art. 6 GDPR), nel rispetto della normativa nazionale sul controllo a distanza.',
  en: 'The legal basis is the employer’s legitimate interest and/or performance of the employment relationship (Art. 6 GDPR), in compliance with national rules on remote monitoring.',
  de: 'Rechtsgrundlage ist das berechtigte Interesse des Arbeitgebers und/oder die Durchführung des Arbeitsverhältnisses (Art. 6 DSGVO), unter Beachtung der nationalen Vorschriften zur Verhaltens- und Leistungskontrolle.',
  fr: 'La base légale est l’intérêt légitime de l’employeur et/ou l’exécution de la relation de travail (art. 6 RGPD), dans le respect des règles nationales sur le contrôle à distance.',
  es: 'La base jurídica es el interés legítimo del empleador y/o la ejecución de la relación laboral (art. 6 RGPD), respetando la normativa nacional sobre control a distancia.',
  nl: 'De rechtsgrond is het gerechtvaardigd belang van de werkgever en/of de uitvoering van de arbeidsrelatie (art. 6 AVG), met inachtneming van de nationale regels over controle op afstand.',
  pt: 'O fundamento jurídico é o interesse legítimo do empregador e/ou a execução da relação de trabalho (art. 6.º do RGPD), no respeito da legislação nacional sobre o controlo à distância.',
  da: 'Retsgrundlaget er arbejdsgiverens legitime interesse og/eller opfyldelsen af ansættelsesforholdet (artikel 6 i Databeskyttelsesforordningen) under overholdelse af den nationale lovgivning om fjernovervågning.',
  sv: 'Den rättsliga grunden är arbetsgivarens berättigade intresse och/eller fullgörandet av anställningsförhållandet (artikel 6 i GDPR), med iakttagande av nationell lagstiftning om kontroll på distans.',
  nb: 'Det rettslige grunnlaget er arbeidsgiverens berettigede interesse og/eller oppfyllelse av arbeidsforholdet (artikkel 6 i personvernforordningen), i samsvar med nasjonal lovgivning om fjernkontroll av arbeidstakere.',
  ru: 'Правовым основанием является законный интерес работодателя и/или исполнение трудовых отношений (ст. 6 GDPR) при соблюдении национального законодательства о дистанционном контроле.',
};

const LEGALBASIS_OVERRIDE: Record<string, Partial<Record<InfLocale, string>>> = {
  DE: {
    it: 'La base giuridica, dove esiste un Betriebsrat (consiglio aziendale), è la Betriebsvereinbarung come accordo collettivo ai sensi dell’art. 88, par. 1, GDPR in combinato disposto con il § 26, comma 4, BDSG. In assenza di Betriebsrat, il trattamento avviene per l’esecuzione del rapporto di lavoro ai sensi dell’art. 6, par. 1, lett. b, GDPR e del § 26, comma 1, BDSG, in via integrativa per la tutela del legittimo interesse a un riscontro della corretta esecuzione della prestazione (art. 6, par. 1, lett. f, GDPR). Non ci si fonda sul consenso, poiché nel rapporto di lavoro di regola non può essere prestato liberamente.',
    en: 'The legal basis, where a works council (Betriebsrat) exists, is the works agreement (Betriebsvereinbarung) as a collective agreement within the meaning of Art. 88(1) GDPR in conjunction with section 26(4) BDSG. Where no works council exists, processing is carried out to perform the employment relationship under Art. 6(1)(b) GDPR and section 26(1) BDSG, supplemented by the protection of the legitimate interest in evidence of proper performance of the work (Art. 6(1)(f) GDPR). Consent is not relied upon, since in an employment relationship it generally cannot be given freely.',
    de: 'Rechtsgrundlage ist, soweit ein Betriebsrat besteht, die Betriebsvereinbarung als Kollektivvereinbarung im Sinne von Art. 88 Abs. 1 DSGVO in Verbindung mit § 26 Abs. 4 BDSG. Besteht kein Betriebsrat, erfolgt die Verarbeitung zur Durchführung des Beschäftigungsverhältnisses nach Art. 6 Abs. 1 lit. b DSGVO, § 26 Abs. 1 BDSG, ergänzend zur Wahrung berechtigter Interessen an einem Nachweis ordnungsgemäßer Leistungserbringung (Art. 6 Abs. 1 lit. f DSGVO). Auf eine Einwilligung wird nicht abgestellt, da diese im Arbeitsverhältnis regelmäßig nicht freiwillig erteilt werden kann.',
    fr: 'La base légale, lorsqu’un comité d’entreprise (Betriebsrat) existe, est l’accord d’entreprise (Betriebsvereinbarung) en tant que convention collective au sens de l’art. 88, par. 1, RGPD combiné au § 26, al. 4, BDSG. En l’absence de comité d’entreprise, le traitement est effectué pour l’exécution de la relation de travail au titre de l’art. 6, par. 1, point b, RGPD et du § 26, al. 1, BDSG, complété par la sauvegarde de l’intérêt légitime à disposer d’une preuve de la bonne exécution du travail (art. 6, par. 1, point f, RGPD). Le consentement n’est pas retenu, car dans la relation de travail il ne peut, en règle générale, pas être donné librement.',
    es: 'La base jurídica, cuando existe un comité de empresa (Betriebsrat), es el convenio de empresa (Betriebsvereinbarung) como acuerdo colectivo en el sentido del art. 88, apdo. 1, RGPD en relación con el § 26, apdo. 4, BDSG. Si no existe comité de empresa, el tratamiento se realiza para la ejecución de la relación laboral conforme al art. 6, apdo. 1, letra b, RGPD y al § 26, apdo. 1, BDSG, de forma complementaria para salvaguardar el interés legítimo en acreditar la correcta ejecución del trabajo (art. 6, apdo. 1, letra f, RGPD). No se recurre al consentimiento, ya que en la relación laboral por lo general no puede prestarse libremente.',
    nl: 'De rechtsgrond is, voor zover er een ondernemingsraad (Betriebsrat) bestaat, de ondernemingsovereenkomst (Betriebsvereinbarung) als collectieve overeenkomst in de zin van art. 88, lid 1, AVG juncto § 26, lid 4, BDSG. Bestaat er geen ondernemingsraad, dan vindt de verwerking plaats voor de uitvoering van de arbeidsrelatie op grond van art. 6, lid 1, onder b, AVG en § 26, lid 1, BDSG, aanvullend ter behartiging van het gerechtvaardigd belang bij een bewijs van een behoorlijke uitvoering van het werk (art. 6, lid 1, onder f, AVG). Er wordt geen beroep gedaan op toestemming, omdat die in een arbeidsrelatie doorgaans niet vrij kan worden gegeven.',
    pt: 'O fundamento jurídico, quando existe uma comissão de trabalhadores (Betriebsrat), é o acordo de empresa (Betriebsvereinbarung) enquanto acordo coletivo na aceção do art. 88.º, n.º 1, do RGPD em conjugação com o § 26, n.º 4, da BDSG. Não existindo comissão de trabalhadores, o tratamento é efetuado para a execução da relação de trabalho ao abrigo do art. 6.º, n.º 1, alínea b), do RGPD e do § 26, n.º 1, da BDSG, complementarmente para salvaguardar o interesse legítimo na prova da correta execução do trabalho (art. 6.º, n.º 1, alínea f), do RGPD). Não se recorre ao consentimento, pois na relação de trabalho, em regra, não pode ser dado livremente.',
    da: 'Retsgrundlaget er, hvor der findes et samarbejdsudvalg (Betriebsrat), virksomhedsaftalen (Betriebsvereinbarung) som kollektiv aftale i henhold til artikel 88, stk. 1, i databeskyttelsesforordningen sammenholdt med § 26, stk. 4, BDSG. Findes der intet samarbejdsudvalg, sker behandlingen med henblik på opfyldelse af ansættelsesforholdet i henhold til artikel 6, stk. 1, litra b, og § 26, stk. 1, BDSG, supplerende for at varetage den legitime interesse i dokumentation for korrekt udført arbejde (artikel 6, stk. 1, litra f). Der støttes ikke på samtykke, da det i et ansættelsesforhold som regel ikke kan gives frivilligt.',
    sv: 'Den rättsliga grunden är, där ett företagsråd (Betriebsrat) finns, företagsavtalet (Betriebsvereinbarung) som kollektivavtal i den mening som avses i artikel 88.1 i dataskyddsförordningen jämförd med § 26.4 BDSG. Om det inte finns något företagsråd sker behandlingen för att fullgöra anställningsförhållandet enligt artikel 6.1 b och § 26.1 BDSG, kompletterande för att tillvarata det berättigade intresset av bevis på korrekt utfört arbete (artikel 6.1 f). Samtycke åberopas inte, eftersom det i ett anställningsförhållande i regel inte kan lämnas frivilligt.',
    nb: 'Det rettslige grunnlaget er, der det finnes et arbeidsmiljøutvalg (Betriebsrat), virksomhetsavtalen (Betriebsvereinbarung) som tariffavtale i henhold til artikkel 88 nr. 1 i personvernforordningen sammenholdt med § 26 nr. 4 BDSG. Finnes det ikke noe slikt utvalg, skjer behandlingen for å oppfylle arbeidsforholdet etter artikkel 6 nr. 1 bokstav b og § 26 nr. 1 BDSG, supplerende for å ivareta den berettigede interessen i dokumentasjon av korrekt utført arbeid (artikkel 6 nr. 1 bokstav f). Det bygges ikke på samtykke, ettersom det i et arbeidsforhold som regel ikke kan gis frivillig.',
    ru: 'Правовым основанием, при наличии производственного совета (Betriebsrat), является производственное соглашение (Betriebsvereinbarung) как коллективное соглашение по смыслу ст. 88(1) GDPR во взаимосвязи с § 26(4) BDSG. При отсутствии производственного совета обработка осуществляется для исполнения трудовых отношений на основании ст. 6(1)(b) GDPR и § 26(1) BDSG, дополнительно для защиты законного интереса в подтверждении надлежащего выполнения работы (ст. 6(1)(f) GDPR). Согласие не используется в качестве основания, поскольку в трудовых отношениях оно, как правило, не может быть дано свободно.',
  },
};

function resolveBaseGiuridica(locale: InfLocale, codiceISO?: string): string {
  const ov = codiceISO ? LEGALBASIS_OVERRIDE[codiceISO.toUpperCase()] : undefined;
  return ov?.[locale] ?? ov?.en ?? BASEGIURIDICA_DEFAULT[locale] ?? BASEGIURIDICA_DEFAULT.en;
}

function fill(s: string, i: InfInputs): string {
  return s
    .replace(/\{azienda\}/g, i.azienda || '-')
    .replace(/\{paese\}/g, i.paese)
    .replace(/\{finalita\}/g, i.finalita)
    .replace(/\{quando\}/g, i.quando)
    .replace(/\{conservazione\}/g, i.conservazione || '-')
    .replace(/\{autorita\}/g, i.autorita);
}

/** Sezione cogestione per il Paese scelto (null se il Paese non ha co-determinazione mappata). */
function codetermSezione(locale: InfLocale, i: InfInputs, codiceISO?: string): { titolo: string; testo: string } | null {
  const ref = codiceISO ? CODETERM_REF[codiceISO.toUpperCase()] : undefined;
  if (!ref) return null;
  const sec = CODETERM_SECTION[locale] ?? CODETERM_SECTION.en;
  return { titolo: sec.titolo, testo: sec.testo.replace(/\{ref\}/g, ref).replace(/\{paese\}/g, i.paese) };
}

/** Genera il testo completo dell'informativa per la lingua data. */
export function buildInformativa(locale: InfLocale, i: InfInputs, codiceISO?: string): string {
  const t = T[locale] ?? T.en;
  const baseGiuridica = resolveBaseGiuridica(locale, codiceISO);
  const parts: string[] = [t.titolo, '', fill(t.intro, i), ''];
  if (i.dpo && i.dpo.trim()) parts.push(fill(t.dpoLine.replace(/\{dpo\}/g, i.dpo), i), '');
  for (const sez of t.sezioni) {
    parts.push(sez.titolo, fill(sez.testo.replace(/\{baseGiuridica\}/g, baseGiuridica), i), '');
  }
  const cod = codetermSezione(locale, i, codiceISO);
  if (cod) parts.push(cod.titolo, cod.testo, '');
  parts.push(t.chiusura);
  return parts.join('\n');
}

export function infLocale(locale: string): InfLocale {
  return (['it', 'en', 'de', 'fr', 'es', 'nl', 'pt', 'da', 'sv', 'nb', 'ru'] as const).includes(locale as InfLocale)
    ? (locale as InfLocale)
    : 'en';
}

export interface InformativaDoc {
  titolo: string;
  intro: string;
  dpo?: string;       // riga DPO già compilata, se presente
  sezioni: { titolo: string; testo: string }[];
  chiusura: string;
}

/** Versione strutturata (per il rendering HTML/PDF del generatore). */
export function buildInformativaDoc(locale: InfLocale, i: InfInputs, codiceISO?: string): InformativaDoc {
  const t = T[locale] ?? T.en;
  const baseGiuridica = resolveBaseGiuridica(locale, codiceISO);
  const sezioni = t.sezioni.map((s) => ({ titolo: s.titolo, testo: fill(s.testo.replace(/\{baseGiuridica\}/g, baseGiuridica), i) }));
  const cod = codetermSezione(locale, i, codiceISO);
  if (cod) sezioni.push(cod);
  return {
    titolo: t.titolo,
    intro: fill(t.intro, i),
    dpo: i.dpo && i.dpo.trim() ? fill(t.dpoLine.replace(/\{dpo\}/g, i.dpo), i) : undefined,
    sezioni,
    chiusura: t.chiusura,
  };
}
