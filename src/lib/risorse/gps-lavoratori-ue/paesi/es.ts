/**
 * Scheda-paese Spagna per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * art. 90 LOPDGDD, artt. 20.3 e 64 dell'Estatuto de los Trabajadores, FAQ AEPD
 * sul GPS nelle auto aziendali, lista AEPD dei trattamenti che richiedono una
 * valutazione d'impatto (art. 35.4 GDPR), guida AEPD sulla protezione dei dati
 * nei rapporti di lavoro, sanzione AEPD contro Ares Capital (PS/00454/2024) e GDPR.
 *
 * La Spagna non e' uno Stato federale: per le aziende private vigila sempre
 * l'AEPD nazionale. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_LOPDGDD_90 = {
  titolo:
    'Ley Organica 3/2018 (LOPDGDD), art. 90 (geolocalizzazione sul lavoro)',
  url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673',
};
const FONTE_ESTATUTO = {
  titolo: 'Estatuto de los Trabajadores, artt. 20.3 e 64',
  url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430',
};
const FONTE_AEPD_FAQ_GPS = {
  titolo: 'AEPD, FAQ sul GPS nelle auto aziendali usate dai lavoratori',
  url: 'https://www.aepd.es/preguntas-frecuentes/3-proteccion-de-datos-en-el-ambito-laboral/FAQ-0306-se-puede-instalar-gps-en-los-coches-de-la-empresa-que-utilizan-los-trabajadores',
};
const FONTE_AEPD_DPIA = {
  titolo:
    "AEPD, lista dei trattamenti che richiedono una valutazione d'impatto (art. 35.4 GDPR)",
  url: 'https://www.aepd.es/documento/listas-dpia-es-35-4.pdf',
};
const FONTE_AEPD_GUIDA = {
  titolo: 'AEPD, guida sulla protezione dei dati nei rapporti di lavoro',
  url: 'https://www.aepd.es/documento/la-proteccion-de-datos-en-las-relaciones-laborales.pdf',
};
const FONTE_AEPD_ARES = {
  titolo: 'AEPD, sanzione PS/00454/2024 (Ares Capital, 200.000 €)',
  url: 'https://www.aepd.es/documento/ps-00454-2024.pdf',
};
const FONTE_AEPD = {
  titolo: 'AEPD, Agencia Espanola de Proteccion de Datos',
  url: 'https://www.aepd.es/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const spagna: SchedaPaese = {
  codiceISO: 'ES',
  slugCanonico: 'spagna',
  nome: 'Spagna',
  nomi: {
    it: 'Spagna',
    en: 'Spain',
    'en-us': 'Spain',
    'en-gb': 'Spain',
    'en-au': 'Spain',
    'en-ie': 'Spain',
    'en-ca': 'Spain',
    de: 'Spanien',
    nl: 'Spanje',
    fr: 'Espagne',
    es: 'España',
    pt: 'Espanha',
    da: 'Spanien',
    sv: 'Spanien',
    nb: 'Spania',
    ru: 'Испания',
  },
  bandiera: '🇪🇸',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'AEPD (Agencia Espanola de Proteccion de Datos)',
    portale: FONTE_AEPD.url,
    urlFonte: FONTE_AEPD.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "Per le aziende private l'autorita competente e sempre l'AEPD nazionale. Alcune comunità autonome (Catalogna APDCAT, Paesi Baschi AVPD) hanno un'autorita propria, ma riguarda soprattutto il settore pubblico della regione.",
      en: "For private companies the competent authority is always the national AEPD. Some autonomous communities (Catalonia APDCAT, Basque Country AVPD) have their own authority, but it concerns mainly the region's public sector.",
      de: "Bei privaten Unternehmen ist die zustaendige Behoerde stets die nationale AEPD. Einige autonome Gemeinschaften (Katalonien APDCAT, Baskenland AVPD) verfuegen ueber eine eigene Behoerde, doch betrifft dies vor allem den oeffentlichen Sektor der jeweiligen Region.",
      fr: "Pour les entreprises privees, l'autorite competente est toujours l'AEPD nationale. Certaines communautes autonomes (Catalogne APDCAT, Pays basque AVPD) disposent de leur propre autorite, mais cela concerne surtout le secteur public de la region.",
      es: "Para las empresas privadas la autoridad competente es siempre la AEPD nacional. Algunas comunidades autonomas (Cataluna APDCAT, Pais Vasco AVPD) tienen su propia autoridad, pero afecta sobre todo al sector publico de la region.",
      nl: "Voor particuliere bedrijven is de bevoegde autoriteit altijd de nationale AEPD. Sommige autonome gemeenschappen (Catalonie APDCAT, Baskenland AVPD) hebben een eigen autoriteit, maar dit betreft vooral de publieke sector van de regio.",
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione espressa, chiara e inequivocabile ai lavoratori prima di attivare (LOPDGDD art. 90)',
        en: 'Express, clear and unambiguous information to workers before activation (LOPDGDD art. 90)',
        de: 'Ausdrueckliche, klare und eindeutige Information der Beschaeftigten vor der Aktivierung (LOPDGDD Art. 90)',
        fr: 'Information expresse, claire et sans ambiguite des salaries avant l activation (LOPDGDD art. 90)',
        es: 'Informacion expresa, clara e inequivoca a los trabajadores antes de activar (LOPDGDD art. 90)',
        nl: 'Uitdrukkelijke, duidelijke en ondubbelzinnige informatie aan werknemers voor activering (LOPDGDD art. 90)',
      },
      risposta: 'si',
      dettaglio: {
        it: "L'art. 90 LOPDGDD consente di trattare i dati di geolocalizzazione per le funzioni di controllo dell'art. 20.3 dello Statuto dei Lavoratori, ma solo dopo aver informato in modo espresso, chiaro e inequivocabile i lavoratori (e, se esistono, i loro rappresentanti) sull'esistenza e le caratteristiche dei dispositivi e sui loro diritti.",
        en: "Article 90 LOPDGDD allows the processing of geolocation data for the monitoring powers under art. 20.3 of the Workers' Statute, but only after expressly, clearly and unambiguously informing the workers (and, where they exist, their representatives) about the existence and characteristics of the devices and about their rights.",
        de: "Art. 90 LOPDGDD gestattet die Verarbeitung von Standortdaten fuer die Kontrollbefugnisse nach Art. 20.3 des Arbeitnehmerstatuts, jedoch nur, nachdem die Beschaeftigten (und, sofern vorhanden, ihre Vertreter) ausdruecklich, klar und eindeutig ueber das Bestehen und die Merkmale der Geraete sowie ueber ihre Rechte informiert wurden.",
        fr: "L'art. 90 LOPDGDD permet de traiter les donnees de geolocalisation pour les pouvoirs de controle de l'art. 20.3 du Statut des travailleurs, mais seulement apres avoir informe de maniere expresse, claire et sans ambiguite les salaries (et, le cas echeant, leurs representants) de l'existence et des caracteristiques des dispositifs ainsi que de leurs droits.",
        es: "El art. 90 LOPDGDD permite tratar los datos de geolocalizacion para las funciones de control del art. 20.3 del Estatuto de los Trabajadores, pero solo despues de haber informado de forma expresa, clara e inequivoca a los trabajadores (y, si existen, a sus representantes) sobre la existencia y las caracteristicas de los dispositivos y sobre sus derechos.",
        nl: "Art. 90 LOPDGDD staat de verwerking van geolocatiegegevens toe voor de controlebevoegdheden van art. 20.3 van het Werknemersstatuut, maar alleen nadat de werknemers (en, indien aanwezig, hun vertegenwoordigers) uitdrukkelijk, duidelijk en ondubbelzinnig zijn geinformeerd over het bestaan en de kenmerken van de apparaten en over hun rechten.",
      },
      fonte: FONTE_LOPDGDD_90,
    },
    {
      voce: {
        it: 'Informazione ai rappresentanti dei lavoratori (Estatuto art. 64)',
        en: "Information to the workers' representatives (Estatuto art. 64)",
        de: 'Information der Arbeitnehmervertreter (Estatuto Art. 64)',
        fr: 'Information des representants des salaries (Estatuto art. 64)',
        es: 'Informacion a los representantes de los trabajadores (Estatuto art. 64)',
        nl: 'Informatie aan de werknemersvertegenwoordigers (Estatuto art. 64)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "L'art. 64 dello Statuto da al comitato d'impresa il diritto di essere informato e di emettere un rapporto preventivo sull'introduzione di sistemi di organizzazione e controllo del lavoro. Vale solo dove esistono rappresentanti dei lavoratori.",
        en: "Article 64 of the Statute gives the works council the right to be informed and to issue a prior report on the introduction of systems for the organisation and monitoring of work. It applies only where workers' representatives exist.",
        de: "Art. 64 des Statuts gibt dem Betriebsrat das Recht, informiert zu werden und einen vorherigen Bericht ueber die Einfuehrung von Systemen zur Arbeitsorganisation und -kontrolle abzugeben. Dies gilt nur dort, wo Arbeitnehmervertreter vorhanden sind.",
        fr: "L'art. 64 du Statut donne au comite d'entreprise le droit d'etre informe et d'emettre un rapport prealable sur l'introduction de systemes d'organisation et de controle du travail. Cela s'applique uniquement la ou existent des representants des salaries.",
        es: "El art. 64 del Estatuto otorga al comite de empresa el derecho a ser informado y a emitir un informe previo sobre la introduccion de sistemas de organizacion y control del trabajo. Solo rige donde existen representantes de los trabajadores.",
        nl: "Art. 64 van het Statuut geeft de ondernemingsraad het recht om geinformeerd te worden en een voorafgaand advies uit te brengen over de invoering van systemen voor de organisatie en controle van het werk. Dit geldt alleen waar werknemersvertegenwoordigers bestaan.",
      },
      fonte: FONTE_ESTATUTO,
    },
    {
      voce: {
        it: "Autorizzazione di un'autorita del lavoro prima di installare",
        en: 'Authorisation from a labour authority before installation',
        de: 'Genehmigung einer Arbeitsbehoerde vor der Installation',
        fr: "Autorisation d'une autorite du travail avant l'installation",
        es: 'Autorizacion de una autoridad laboral antes de instalar',
        nl: 'Toestemming van een arbeidsautoriteit voor installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "La Spagna non prevede un'autorizzazione amministrativa o di un'autorita del lavoro per installare un sistema di geolocalizzazione. Le garanzie sono l'informazione ex art. 90 LOPDGDD, l'informazione ai rappresentanti (art. 64) e il GDPR.",
        en: "Spain does not require an administrative authorisation or one from a labour authority to install a geolocation system. The safeguards are the information under art. 90 LOPDGDD, the information to the representatives (art. 64) and the GDPR.",
        de: "Spanien verlangt fuer die Installation eines Standortsystems keine behoerdliche oder arbeitsbehoerdliche Genehmigung. Die Schutzvorkehrungen sind die Information nach Art. 90 LOPDGDD, die Information der Vertreter (Art. 64) und die DSGVO.",
        fr: "L'Espagne ne prevoit pas d'autorisation administrative ni d'une autorite du travail pour installer un systeme de geolocalisation. Les garanties sont l'information au titre de l'art. 90 LOPDGDD, l'information des representants (art. 64) et le RGPD.",
        es: "Espana no exige una autorizacion administrativa ni de una autoridad laboral para instalar un sistema de geolocalizacion. Las garantias son la informacion conforme al art. 90 LOPDGDD, la informacion a los representantes (art. 64) y el RGPD.",
        nl: "Spanje vereist geen administratieve toestemming of toestemming van een arbeidsautoriteit om een geolocatiesysteem te installeren. De waarborgen zijn de informatie op grond van art. 90 LOPDGDD, de informatie aan de vertegenwoordigers (art. 64) en de AVG.",
      },
      fonte: FONTE_AEPD_FAQ_GPS,
    },
    {
      voce: {
        it: 'Divieto di sorveglianza continua: minimizzazione e proporzionalita',
        en: 'Ban on continuous surveillance: minimisation and proportionality',
        de: 'Verbot der staendigen Ueberwachung: Datenminimierung und Verhaeltnismaessigkeit',
        fr: 'Interdiction de la surveillance continue : minimisation et proportionnalite',
        es: 'Prohibicion de la vigilancia continua: minimizacion y proporcionalidad',
        nl: 'Verbod op voortdurende bewaking: minimalisering en evenredigheid',
      },
      risposta: 'si',
      dettaglio: {
        it: "L'AEPD richiede che la geolocalizzazione sia proporzionata e non usata per una sorveglianza permanente; se la finalita e il registro orario, i dati possono indicare solo inizio e fine dell'attività, non la posizione in ogni momento, e il sistema non deve essere operativo finita la giornata.",
        en: "The AEPD requires geolocation to be proportionate and not used for permanent surveillance; if the purpose is time recording, the data may indicate only the start and end of the activity, not the position at every moment, and the system must not be operational once the working day is over.",
        de: "Die AEPD verlangt, dass die Standortbestimmung verhaeltnismaessig ist und nicht zur staendigen Ueberwachung genutzt wird; ist der Zweck die Arbeitszeiterfassung, duerfen die Daten nur Beginn und Ende der Taetigkeit angeben, nicht die Position in jedem Augenblick, und das System darf nach Arbeitsende nicht in Betrieb sein.",
        fr: "L'AEPD exige que la geolocalisation soit proportionnee et non utilisee pour une surveillance permanente ; si la finalite est l'enregistrement du temps de travail, les donnees ne peuvent indiquer que le debut et la fin de l'activite, non la position a chaque instant, et le systeme ne doit pas etre operationnel une fois la journee terminee.",
        es: "La AEPD exige que la geolocalizacion sea proporcionada y no se use para una vigilancia permanente; si la finalidad es el registro horario, los datos solo pueden indicar el inicio y el fin de la actividad, no la posicion en todo momento, y el sistema no debe estar operativo una vez finalizada la jornada.",
        nl: "De AEPD verlangt dat geolocatie evenredig is en niet wordt gebruikt voor permanente bewaking; als het doel tijdregistratie is, mogen de gegevens alleen het begin en het einde van de activiteit aangeven, niet de positie op elk moment, en mag het systeem na afloop van de werkdag niet in werking zijn.",
      },
      fonte: FONTE_AEPD_GUIDA,
    },
    {
      voce: {
        it: "Valutazione d'impatto (EIPD) per geolocalizzazione sistematica ed esaustiva",
        en: 'Data protection impact assessment (DPIA) for systematic and exhaustive geolocation',
        de: 'Datenschutz-Folgenabschaetzung (DSFA) bei systematischer und umfassender Standortbestimmung',
        fr: "Analyse d'impact (AIPD) pour une geolocalisation systematique et exhaustive",
        es: "Evaluacion de impacto (EIPD) para geolocalizacion sistematica y exhaustiva",
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA) voor systematische en uitputtende geolocatie',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista AEPD include tra i trattamenti che richiedono una valutazione d'impatto quelli che comportano osservazione, monitoraggio, geolocalizzazione o controllo dell'interessato in modo sistematico ed esaustivo.",
        en: "The AEPD list includes, among the processing operations requiring an impact assessment, those involving the observation, monitoring, geolocation or control of the data subject in a systematic and exhaustive manner.",
        de: "Die AEPD-Liste zaehlt zu den Verarbeitungen, die eine Folgenabschaetzung erfordern, jene, die eine Beobachtung, Ueberwachung, Standortbestimmung oder Kontrolle der betroffenen Person in systematischer und umfassender Weise mit sich bringen.",
        fr: "La liste de l'AEPD inclut, parmi les traitements requerant une analyse d'impact, ceux qui impliquent l'observation, le suivi, la geolocalisation ou le controle de la personne concernee de maniere systematique et exhaustive.",
        es: "La lista de la AEPD incluye, entre los tratamientos que requieren una evaluacion de impacto, los que conllevan la observacion, el seguimiento, la geolocalizacion o el control del interesado de forma sistematica y exhaustiva.",
        nl: "De AEPD-lijst rekent tot de verwerkingen die een effectbeoordeling vereisen, die welke de waarneming, monitoring, geolocatie of controle van de betrokkene op systematische en uitputtende wijze met zich meebrengen.",
      },
      fonte: FONTE_AEPD_DPIA,
    },
    {
      voce: {
        it: 'Base giuridica valida (art. 20.3 Statuto / esecuzione del contratto, GDPR art. 6)',
        en: "Valid legal basis (art. 20.3 Statute / performance of the contract, GDPR art. 6)",
        de: 'Gueltige Rechtsgrundlage (Art. 20.3 Statut / Vertragserfuellung, DSGVO Art. 6)',
        fr: "Base juridique valable (art. 20.3 Statut / execution du contrat, RGPD art. 6)",
        es: 'Base juridica valida (art. 20.3 Estatuto / ejecucion del contrato, RGPD art. 6)',
        nl: 'Geldige rechtsgrondslag (art. 20.3 Statuut / uitvoering van het contract, AVG art. 6)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il trattamento si fonda sul potere di controllo del datore (art. 20.3 Statuto) e sull'esecuzione del rapporto di lavoro, nei limiti del GDPR; non e ammessa una finalita più ampia che consenta l'osservazione continua dei lavoratori.",
        en: "The processing is based on the employer's power of control (art. 20.3 Statute) and on the performance of the employment relationship, within the limits of the GDPR; a broader purpose that would allow the continuous observation of workers is not permitted.",
        de: "Die Verarbeitung stuetzt sich auf die Kontrollbefugnis des Arbeitgebers (Art. 20.3 Statut) und auf die Erfuellung des Arbeitsverhaeltnisses, innerhalb der Grenzen der DSGVO; ein weiter gehender Zweck, der eine fortlaufende Beobachtung der Beschaeftigten erlauben wuerde, ist nicht zulaessig.",
        fr: "Le traitement repose sur le pouvoir de controle de l'employeur (art. 20.3 Statut) et sur l'execution de la relation de travail, dans les limites du RGPD ; une finalite plus large qui permettrait l'observation continue des salaries n'est pas admise.",
        es: "El tratamiento se fundamenta en el poder de control del empleador (art. 20.3 Estatuto) y en la ejecucion de la relacion laboral, dentro de los limites del RGPD; no se admite una finalidad mas amplia que permita la observacion continua de los trabajadores.",
        nl: "De verwerking berust op de controlebevoegdheid van de werkgever (art. 20.3 Statuut) en op de uitvoering van de arbeidsrelatie, binnen de grenzen van de AVG; een ruimer doel dat de voortdurende observatie van werknemers mogelijk zou maken, is niet toegestaan.",
      },
      fonte: FONTE_AEPD_FAQ_GPS,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Informa i lavoratori in modo espresso, chiaro e inequivocabile prima di attivare (art. 90 LOPDGDD).',
        en: 'Inform the workers expressly, clearly and unambiguously before activation (art. 90 LOPDGDD).',
        de: 'Informieren Sie die Beschaeftigten vor der Aktivierung ausdruecklich, klar und eindeutig (Art. 90 LOPDGDD).',
        fr: "Informez les salaries de maniere expresse, claire et sans ambiguite avant l'activation (art. 90 LOPDGDD).",
        es: 'Informa a los trabajadores de forma expresa, clara e inequivoca antes de activar (art. 90 LOPDGDD).',
        nl: 'Informeer de werknemers uitdrukkelijk, duidelijk en ondubbelzinnig voor activering (art. 90 LOPDGDD).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Se esistono rappresentanti dei lavoratori, informali e raccogli il loro rapporto preventivo (art. 64 Statuto).',
        en: "If workers' representatives exist, inform them and obtain their prior report (art. 64 Statute).",
        de: 'Falls Arbeitnehmervertreter vorhanden sind, informieren Sie diese und holen Sie deren vorherigen Bericht ein (Art. 64 Statut).',
        fr: "Si des representants des salaries existent, informez-les et recueillez leur rapport prealable (art. 64 Statut).",
        es: 'Si existen representantes de los trabajadores, informalos y recaba su informe previo (art. 64 Estatuto).',
        nl: 'Als er werknemersvertegenwoordigers zijn, informeer hen en verkrijg hun voorafgaand advies (art. 64 Statuut).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Definisci una base giuridica valida (potere di controllo art. 20.3 Statuto / esecuzione del contratto).",
        en: 'Define a valid legal basis (power of control art. 20.3 Statute / performance of the contract).',
        de: 'Legen Sie eine gueltige Rechtsgrundlage fest (Kontrollbefugnis Art. 20.3 Statut / Vertragserfuellung).',
        fr: "Definissez une base juridique valable (pouvoir de controle art. 20.3 Statut / execution du contrat).",
        es: 'Define una base juridica valida (poder de control art. 20.3 Estatuto / ejecucion del contrato).',
        nl: 'Bepaal een geldige rechtsgrondslag (controlebevoegdheid art. 20.3 Statuut / uitvoering van het contract).',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (EIPD) se la geolocalizzazione e sistematica ed esaustiva.",
        en: 'Carry out the impact assessment (DPIA) if the geolocation is systematic and exhaustive.',
        de: 'Fuehren Sie die Folgenabschaetzung (DSFA) durch, wenn die Standortbestimmung systematisch und umfassend ist.',
        fr: "Realisez l'analyse d'impact (AIPD) si la geolocalisation est systematique et exhaustive.",
        es: 'Realiza la evaluacion de impacto (EIPD) si la geolocalizacion es sistematica y exhaustiva.',
        nl: 'Voer de effectbeoordeling (DPIA) uit als de geolocatie systematisch en uitputtend is.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema con minimizzazione: niente sorveglianza continua, disattivazione fuori orario; se serve il registro orario, solo inizio e fine.',
        en: 'Configure the system with minimisation: no continuous surveillance, deactivation outside working hours; if time recording is needed, only start and end.',
        de: 'Konfigurieren Sie das System mit Datenminimierung: keine staendige Ueberwachung, Deaktivierung ausserhalb der Arbeitszeit; falls eine Arbeitszeiterfassung erforderlich ist, nur Beginn und Ende.',
        fr: "Configurez le systeme avec minimisation : pas de surveillance continue, desactivation en dehors des horaires ; si l'enregistrement du temps de travail est necessaire, uniquement le debut et la fin.",
        es: 'Configura el sistema con minimizacion: sin vigilancia continua, desactivacion fuera del horario; si se necesita el registro horario, solo inicio y fin.',
        nl: 'Configureer het systeem met minimalisering: geen voortdurende bewaking, deactivering buiten werktijd; als tijdregistratie nodig is, alleen begin en einde.',
      },
    },
    {
      passo: 6,
      descrizione: {
        it: 'In caso di cambio sistema: se cambi sistema o software di monitoraggio, aggiorna e ri-consegna l’informativa, e verifica se va rinnovato l’accordo o l’autorizzazione nazionale per il controllo a distanza. Spesso cambiano fornitore (responsabile del trattamento), dati raccolti e modalità: quella consegnata prima non basta.',
        en: 'If you switch systems: when you change your monitoring system or software, update and re-issue the privacy notice, and check whether the national agreement or authorisation for remote monitoring needs renewing. The provider (data processor), the data collected and the methods often change: the one provided earlier is not enough.',
        de: 'Bei Systemwechsel: Wenn Sie Ihr Überwachungssystem oder Ihre Software wechseln, aktualisieren Sie die Datenschutzinformation und händigen Sie sie erneut aus und prüfen Sie, ob die nationale Vereinbarung oder Genehmigung zur Fernüberwachung erneuert werden muss. Anbieter (Auftragsverarbeiter), erhobene Daten und Modalitäten ändern sich oft: die zuvor ausgehändigte genügt nicht.',
        fr: 'En cas de changement de système : si vous changez de système ou de logiciel de surveillance, mettez à jour et remettez l’information, et vérifiez si l’accord ou l’autorisation nationale de contrôle à distance doit être renouvelé. Le fournisseur (sous-traitant), les données collectées et les modalités changent souvent : celle remise auparavant ne suffit pas.',
        es: 'En caso de cambio de sistema: si cambias de sistema o software de monitorización, actualiza y vuelve a entregar la información, y comprueba si debe renovarse el acuerdo o la autorización nacional para el control a distancia. A menudo cambian el proveedor (encargado del tratamiento), los datos recogidos y las modalidades: la entregada antes no basta.',
        nl: 'Bij een systeemwissel: als je van monitoringsysteem of -software verandert, werk de privacyverklaring bij en verstrek deze opnieuw, en controleer of de nationale overeenkomst of toestemming voor controle op afstand moet worden vernieuwd. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'AEPD, sede elettronica',
      portale: FONTE_AEPD.url,
      urlFonte: FONTE_AEPD.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '200.000 €',
      en: '200,000 €',
      de: '200.000 €',
      fr: '200 000 €',
      es: '200.000 €',
      nl: '200.000 €',
    },
    casoCitato: {
      it: "AEPD contro Ares Capital S.A. (PS/00454/2024), 4 marzo 2026: la società obbligava gli autisti a installare sul telefono personale app che raccoglievano in continuo la geolocalizzazione (oltre a foto e audio/video). Violazione della minimizzazione (art. 5.1.c), della base giuridica (art. 6.1, consenso non libero) e dell'informazione (art. 13 GDPR).",
      en: "AEPD against Ares Capital S.A. (PS/00454/2024), 4 March 2026: the company required drivers to install on their personal phone apps that continuously collected geolocation (as well as photos and audio/video). Breach of minimisation (art. 5.1.c), of the legal basis (art. 6.1, consent not freely given) and of the information duty (art. 13 GDPR).",
      de: "AEPD gegen Ares Capital S.A. (PS/00454/2024), 4. Maerz 2026: Das Unternehmen verpflichtete die Fahrer, auf ihrem privaten Telefon Apps zu installieren, die fortlaufend Standortdaten erhoben (sowie Fotos und Audio/Video). Verstoss gegen die Datenminimierung (Art. 5.1.c), gegen die Rechtsgrundlage (Art. 6.1, keine freiwillige Einwilligung) und gegen die Informationspflicht (Art. 13 DSGVO).",
      fr: "AEPD contre Ares Capital S.A. (PS/00454/2024), 4 mars 2026 : la societe obligeait les chauffeurs a installer sur leur telephone personnel des applications qui collectaient en continu la geolocalisation (ainsi que des photos et de l'audio/video). Violation de la minimisation (art. 5.1.c), de la base juridique (art. 6.1, consentement non libre) et de l'information (art. 13 RGPD).",
      es: "AEPD contra Ares Capital S.A. (PS/00454/2024), 4 de marzo de 2026: la sociedad obligaba a los conductores a instalar en su telefono personal apps que recogian de forma continua la geolocalizacion (ademas de fotos y audio/video). Vulneracion de la minimizacion (art. 5.1.c), de la base juridica (art. 6.1, consentimiento no libre) y de la informacion (art. 13 RGPD).",
      nl: "AEPD tegen Ares Capital S.A. (PS/00454/2024), 4 maart 2026: het bedrijf verplichtte de chauffeurs om op hun persoonlijke telefoon apps te installeren die voortdurend de geolocatie verzamelden (naast foto's en audio/video). Schending van de minimalisering (art. 5.1.c), van de rechtsgrondslag (art. 6.1, toestemming niet vrij gegeven) en van de informatieplicht (art. 13 AVG).",
    },
    urlFonte: FONTE_AEPD_ARES.url,
  },

  fonti: [
    FONTE_LOPDGDD_90,
    FONTE_ESTATUTO,
    FONTE_AEPD_FAQ_GPS,
    FONTE_AEPD_DPIA,
    FONTE_AEPD_GUIDA,
    FONTE_AEPD_ARES,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
