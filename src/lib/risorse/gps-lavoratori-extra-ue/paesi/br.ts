/**
 * Scheda-paese Brasile per la risorsa "GPS sui lavoratori fuori dall'UE".
 *
 * Sta in una risorsa a parte, non fra le 39 schede europee, per una ragione di
 * sostanza e non di ordine: in Brasile il GDPR non si applica. La disciplina e'
 * la LGPD, l'autorita' e' l'ANPD, e il potere di controllo del datore sta nella
 * CLT. Infilare questa scheda in una pagina intitolata "in UE" avrebbe fatto
 * credere il contrario.
 *
 * Ogni numero e ogni URL qui sotto e' stato letto sul testo primario il
 * 10/09/2026: LGPD art. 52 per il tetto sanzionatorio, CLT art. 6 parágrafo
 * único e art. 74 § 2 per il registro dell'orario. Niente e' inventato.
 *
 * Il Brasile e' uno stato federale, ma la protezione dei dati e' materia
 * nazionale con un'unica autorita': per questo `federale` e' false, come per il
 * Belgio.
 */
import type { SchedaPaese } from '../../gps-lavoratori-ue/types';

const FONTE_LGPD = {
  titolo: 'Lei n. 13.709/2018 (Lei Geral de Proteção de Dados Pessoais)',
  url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm',
};
const FONTE_CLT = {
  titolo: 'Decreto-Lei n. 5.452/1943 (Consolidação das Leis do Trabalho)',
  url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm',
};
const FONTE_ANPD_DENUNCIA = {
  titolo: 'ANPD, denúncia di inadempimento della LGPD',
  url: 'https://www.gov.br/anpd/pt-br/assuntos/denuncia-de-descumprimento-da-lgpd',
};
const FONTE_ANPD_TITOLARE = {
  titolo: 'ANPD, canale per il titolare dei dati',
  url: 'https://www.gov.br/anpd/pt-br/canais_atendimento/cidadao-titular-de-dados',
};
const FONTE_SIT = {
  titolo: 'Secretaria de Inspeção do Trabalho (SIT), Ministério do Trabalho e Emprego',
  url: 'https://www.gov.br/trabalho-e-emprego/pt-br/composicao/quem-e-quem/secretaria-de-inspecao-do-trabalho',
};
const FONTE_LEI_ANPD = {
  titolo: 'Lei n. 15.352/2026 (l’ANPD diventa agência reguladora)',
  url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15352.htm',
};

export const brasile: SchedaPaese = {
  codiceISO: 'BR',
  slugCanonico: 'brasile',
  nome: 'Brasile',
  nomi: {
    it: 'Brasile',
    en: 'Brazil',
    'en-us': 'Brazil',
    'en-gb': 'Brazil',
    'en-au': 'Brazil',
    'en-ie': 'Brazil',
    'en-ca': 'Brazil',
    de: 'Brasilien',
    nl: 'Brazilië',
    fr: 'Brésil',
    es: 'Brasil',
    pt: 'Brasil',
    da: 'Brasilien',
    sv: 'Brasilien',
    nb: 'Brasil',
    ru: 'Бразилия',
  },
  bandiera: '🇧🇷',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: {
      it: 'Autorità nazionale per la protezione dei dati (ANPD)',
      en: 'National Data Protection Authority (ANPD)',
      de: 'Nationale Datenschutzbehörde (ANPD)',
      fr: 'Autorité nationale de protection des données (ANPD)',
      es: 'Autoridad Nacional de Protección de Datos (ANPD)',
      nl: 'Nationale autoriteit voor gegevensbescherming (ANPD)',
      pt: 'Autoridade Nacional de Proteção de Dados (ANPD)',
      da: 'Den nationale databeskyttelsesmyndighed (ANPD)',
      sv: 'Den nationella dataskyddsmyndigheten (ANPD)',
      nb: 'Den nasjonale personvernmyndigheten (ANPD)',
      ru: 'Национальный орган по защите данных (ANPD)',
    },
    portale: FONTE_ANPD_DENUNCIA.url,
    urlFonte: FONTE_ANPD_TITOLARE.url,
    verificatoIl: '2026-09-10',
    note: {
      it: 'Il Brasile è federale, ma la protezione dei dati è materia nazionale: l’ANPD è unica. Dal 2026 è un’agência reguladora (Lei 15.352/2026).',
      en: 'Brazil is federal, but data protection is a national matter: the ANPD is the only authority. Since 2026 it is a regulatory agency (Lei 15.352/2026).',
      de: 'Brasilien ist ein Bundesstaat, doch der Datenschutz ist Bundessache: Die ANPD ist die einzige Behörde. Seit 2026 ist sie eine Regulierungsbehörde (Lei 15.352/2026).',
      fr: 'Le Brésil est fédéral, mais la protection des données est une matière nationale : l’ANPD est l’unique autorité. Depuis 2026 elle est une agence de régulation (Lei 15.352/2026).',
      es: 'Brasil es federal, pero la protección de datos es materia nacional: la ANPD es la única autoridad. Desde 2026 es una agencia reguladora (Lei 15.352/2026).',
      nl: 'Brazilië is federaal, maar gegevensbescherming is een nationale aangelegenheid: de ANPD is de enige autoriteit. Sinds 2026 is zij een regulerende instantie (Lei 15.352/2026).',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Il GDPR europeo non si applica: vale la LGPD',
        en: 'The EU GDPR does not apply: the LGPD does',
        de: 'Die EU-DSGVO gilt nicht: Es gilt die LGPD',
        fr: 'Le RGPD européen ne s’applique pas : c’est la LGPD qui s’applique',
        es: 'El RGPD europeo no se aplica: rige la LGPD',
        nl: 'De Europese AVG is niet van toepassing: de LGPD geldt',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Un’informativa costruita sugli articoli del GDPR, con i diritti degli artt. 15-22 e il rinvio a un’autorità europea, in Brasile cita norme che non valgono e indirizza a un ente senza giurisdizione. La LGPD è una legge autonoma, non una traduzione del GDPR.',
        en: 'A notice built on GDPR articles, with the rights of Arts. 15-22 and a pointer to a European authority, cites rules that do not apply in Brazil and directs the worker to a body with no jurisdiction. The LGPD is a statute of its own, not a translation of the GDPR.',
        de: 'Ein auf DSGVO-Artikeln aufgebauter Hinweis, mit den Rechten der Art. 15-22 und dem Verweis auf eine europäische Behörde, nennt in Brasilien Vorschriften, die dort nicht gelten, und verweist auf eine Stelle ohne Zuständigkeit. Die LGPD ist ein eigenes Gesetz, keine Übersetzung der DSGVO.',
        fr: 'Une notice bâtie sur les articles du RGPD, avec les droits des art. 15-22 et le renvoi à une autorité européenne, cite au Brésil des règles qui ne s’appliquent pas et oriente vers un organisme sans compétence. La LGPD est une loi autonome, non une traduction du RGPD.',
        es: 'Un aviso construido sobre los artículos del RGPD, con los derechos de los arts. 15-22 y la remisión a una autoridad europea, cita en Brasil normas que no rigen y dirige a un organismo sin jurisdicción. La LGPD es una ley autónoma, no una traducción del RGPD.',
        nl: 'Een verklaring die op AVG-artikelen is gebouwd, met de rechten van art. 15-22 en een verwijzing naar een Europese autoriteit, noemt in Brazilië regels die er niet gelden en verwijst naar een instantie zonder bevoegdheid. De LGPD is een eigen wet, geen vertaling van de AVG.',
      },
      fonte: FONTE_LGPD,
    },
    {
      voce: {
        it: 'Il controllo per via telematica conta come controllo diretto (CLT art. 6, parágrafo único)',
        en: 'Monitoring by telematic means counts as direct supervision (CLT art. 6, sole paragraph)',
        de: 'Telematische Kontrolle gilt als unmittelbare Aufsicht (CLT Art. 6, einziger Absatz)',
        fr: 'Le contrôle par voie télématique équivaut au contrôle direct (CLT art. 6, paragraphe unique)',
        es: 'El control por vía telemática equivale al control directo (CLT art. 6, párrafo único)',
        nl: 'Controle langs telematische weg geldt als rechtstreeks toezicht (CLT art. 6, enig lid)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'La CLT equipara i mezzi telematici e informatizzati di comando, controllo e supervisione a quelli personali e diretti, ai fini della subordinazione giuridica. La geolocalizzazione alla timbratura ricade quindi nel potere direttivo, con i limiti che ne derivano.',
        en: 'The CLT equates telematic and computerised means of command, control and supervision with personal and direct ones, for the purposes of legal subordination. Geolocation at clock-in therefore falls within the employer’s managerial power, with the limits that follow from it.',
        de: 'Die CLT stellt telematische und EDV-gestützte Mittel der Anweisung, Kontrolle und Aufsicht den persönlichen und unmittelbaren gleich, soweit es um die rechtliche Unterordnung geht. Die Standortermittlung beim Stempeln fällt damit unter das Direktionsrecht, mit den daraus folgenden Grenzen.',
        fr: 'La CLT assimile les moyens télématiques et informatisés de commandement, de contrôle et de supervision aux moyens personnels et directs, aux fins de la subordination juridique. La géolocalisation au pointage relève donc du pouvoir de direction, avec les limites qui en découlent.',
        es: 'La CLT equipara los medios telemáticos e informatizados de mando, control y supervisión a los personales y directos, a efectos de la subordinación jurídica. La geolocalización en el fichaje entra así en el poder de dirección, con los límites que de ello se derivan.',
        nl: 'De CLT stelt telematische en geautomatiseerde middelen van leiding, controle en toezicht gelijk aan persoonlijke en rechtstreekse, voor de juridische ondergeschiktheid. Geolocatie bij het inklokken valt daarmee onder het directierecht, met de grenzen die daaruit volgen.',
      },
      fonte: FONTE_CLT,
    },
    {
      voce: {
        it: 'Registro dell’orario obbligatorio sopra i 20 dipendenti (CLT art. 74 § 2)',
        en: 'Working-time record mandatory above 20 employees (CLT art. 74 § 2)',
        de: 'Arbeitszeiterfassung ab mehr als 20 Beschäftigten verpflichtend (CLT Art. 74 § 2)',
        fr: 'Registre des horaires obligatoire au-delà de 20 salariés (CLT art. 74 § 2)',
        es: 'Registro de jornada obligatorio por encima de 20 empleados (CLT art. 74 § 2)',
        nl: 'Urenregistratie verplicht boven 20 werknemers (CLT art. 74 § 2)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: 'Per gli stabilimenti con più di 20 lavoratori l’annotazione dell’ora di entrata e di uscita è obbligatoria, in registro manuale, meccanico o elettronico. Sotto quella soglia l’obbligo non c’è: la rilevazione resta possibile, ma non può appoggiarsi all’obbligo di legge come base.',
        en: 'For establishments with more than 20 workers, recording the time of entry and exit is mandatory, in a manual, mechanical or electronic register. Below that threshold the duty does not exist: recording is still possible, but it cannot rest on a legal obligation as its basis.',
        de: 'Für Betriebe mit mehr als 20 Beschäftigten ist die Erfassung von Kommen und Gehen verpflichtend, in einem manuellen, mechanischen oder elektronischen Register. Unterhalb dieser Schwelle besteht die Pflicht nicht: Die Erfassung bleibt möglich, kann sich aber nicht auf eine gesetzliche Pflicht als Grundlage stützen.',
        fr: 'Pour les établissements de plus de 20 travailleurs, la consignation de l’heure d’entrée et de sortie est obligatoire, dans un registre manuel, mécanique ou électronique. En dessous de ce seuil, l’obligation n’existe pas : le relevé reste possible, mais ne peut pas s’appuyer sur une obligation légale comme base.',
        es: 'Para los establecimientos con más de 20 trabajadores, la anotación de la hora de entrada y de salida es obligatoria, en registro manual, mecánico o electrónico. Por debajo de ese umbral la obligación no existe: el registro sigue siendo posible, pero no puede apoyarse en una obligación legal como base.',
        nl: 'Voor vestigingen met meer dan 20 werknemers is het vastleggen van het tijdstip van komen en gaan verplicht, in een handmatig, mechanisch of elektronisch register. Onder die drempel bestaat de plicht niet: registreren blijft mogelijk, maar kan zich niet op een wettelijke plicht baseren.',
      },
      fonte: FONTE_CLT,
    },
    {
      voce: {
        it: 'Il consenso del lavoratore non è la base giuridica su cui appoggiarsi',
        en: 'The worker’s consent is not the legal basis to rely on',
        de: 'Die Einwilligung des Beschäftigten ist nicht die tragfähige Rechtsgrundlage',
        fr: 'Le consentement du salarié n’est pas la base légale sur laquelle s’appuyer',
        es: 'El consentimiento del trabajador no es la base jurídica en la que apoyarse',
        nl: 'De toestemming van de werknemer is niet de grondslag om op te bouwen',
      },
      risposta: 'dipende',
      dettaglio: {
        it: 'La LGPD elenca dieci basi legali e il consenso è solo una. Nel rapporto di lavoro le basi che reggono sono l’adempimento di un obbligo legale e l’esecuzione del contratto: il consenso di chi dipende da te è difficile da dire libero. La firma dell’informativa resta utile come presa visione, non come base del trattamento.',
        en: 'The LGPD lists ten legal bases and consent is only one of them. In an employment relationship the ones that hold are compliance with a legal obligation and performance of the contract: the consent of someone who depends on you is hard to call free. Signing the notice is still useful as an acknowledgement, not as the basis for the processing.',
        de: 'Die LGPD nennt zehn Rechtsgrundlagen, die Einwilligung ist nur eine davon. Im Arbeitsverhältnis tragen die Erfüllung einer rechtlichen Pflicht und die Vertragserfüllung: Die Einwilligung einer abhängigen Person lässt sich schwer als frei bezeichnen. Die Unterschrift unter den Hinweis bleibt als Kenntnisnahme sinnvoll, nicht als Grundlage der Verarbeitung.',
        fr: 'La LGPD énumère dix bases légales et le consentement n’en est qu’une. Dans la relation de travail, celles qui tiennent sont le respect d’une obligation légale et l’exécution du contrat : le consentement d’une personne qui dépend de vous est difficile à qualifier de libre. La signature de la notice reste utile comme prise de connaissance, non comme base du traitement.',
        es: 'La LGPD enumera diez bases jurídicas y el consentimiento es solo una. En la relación laboral las que se sostienen son el cumplimiento de una obligación legal y la ejecución del contrato: el consentimiento de quien depende de ti es difícil de considerar libre. La firma del aviso sigue siendo útil como acuse de recibo, no como base del tratamiento.',
        nl: 'De LGPD noemt tien grondslagen en toestemming is er slechts één van. In de arbeidsverhouding houden het voldoen aan een wettelijke plicht en de uitvoering van de overeenkomst stand: de toestemming van iemand die van je afhankelijk is, is moeilijk vrij te noemen. De ondertekening van de verklaring blijft nuttig als kennisneming, niet als grondslag voor de verwerking.',
      },
      fonte: FONTE_LGPD,
    },
    {
      voce: {
        it: 'Il lavoratore reclama all’ANPD, non a un’autorità europea',
        en: 'The worker complains to the ANPD, not to a European authority',
        de: 'Der Beschäftigte beschwert sich bei der ANPD, nicht bei einer europäischen Behörde',
        fr: 'Le salarié saisit l’ANPD, non une autorité européenne',
        es: 'El trabajador reclama ante la ANPD, no ante una autoridad europea',
        nl: 'De werknemer klaagt bij de ANPD, niet bij een Europese autoriteit',
      },
      risposta: 'si',
      dettaglio: {
        it: 'L’ANPD riceve le denúncias di inadempimento della LGPD e ha un canale dedicato al titolare dei dati. Per la parte lavoristica l’organo è la Secretaria de Inspeção do Trabalho del Ministério do Trabalho e Emprego. Un’informativa che rimanda al Garante italiano o a un’autorità UE manda il lavoratore dalla porta sbagliata.',
        en: 'The ANPD receives complaints of LGPD non-compliance and has a dedicated channel for data subjects. On the employment side the body is the Secretaria de Inspeção do Trabalho of the Ministério do Trabalho e Emprego. A notice pointing at an Italian or EU authority sends the worker to the wrong door.',
        de: 'Die ANPD nimmt Beschwerden über Verstöße gegen die LGPD entgegen und hat einen eigenen Kanal für Betroffene. Auf arbeitsrechtlicher Seite ist die Secretaria de Inspeção do Trabalho des Ministério do Trabalho e Emprego zuständig. Ein Hinweis, der auf eine italienische oder EU-Behörde verweist, schickt den Beschäftigten an die falsche Tür.',
        fr: 'L’ANPD reçoit les dénonciations de manquement à la LGPD et dispose d’un canal dédié à la personne concernée. Côté travail, l’organe est la Secretaria de Inspeção do Trabalho du Ministério do Trabalho e Emprego. Une notice renvoyant à une autorité italienne ou européenne envoie le salarié à la mauvaise porte.',
        es: 'La ANPD recibe las denuncias de incumplimiento de la LGPD y tiene un canal dedicado al titular de los datos. En el plano laboral el órgano es la Secretaria de Inspeção do Trabalho del Ministério do Trabalho e Emprego. Un aviso que remite a una autoridad italiana o europea manda al trabajador a la puerta equivocada.',
        nl: 'De ANPD ontvangt meldingen van niet-naleving van de LGPD en heeft een apart kanaal voor de betrokkene. Aan de arbeidskant is het orgaan de Secretaria de Inspeção do Trabalho van het Ministério do Trabalho e Emprego. Een verklaring die naar een Italiaanse of EU-autoriteit verwijst, stuurt de werknemer naar de verkeerde deur.',
      },
      fonte: FONTE_ANPD_DENUNCIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Scrivi l’informativa sulla LGPD, non sul GDPR: finalità, base legale, dati raccolti, conservazione, diritti dell’art. 18 e come esercitarli.',
        en: 'Write the notice on the LGPD, not on the GDPR: purposes, legal basis, data collected, retention, the rights in Art. 18 and how to exercise them.',
        de: 'Verfassen Sie den Hinweis auf Grundlage der LGPD, nicht der DSGVO: Zwecke, Rechtsgrundlage, erhobene Daten, Speicherdauer, die Rechte nach Art. 18 und ihre Ausübung.',
        fr: 'Rédigez la notice sur la LGPD, non sur le RGPD : finalités, base légale, données collectées, conservation, droits de l’art. 18 et modalités d’exercice.',
        es: 'Redacta el aviso sobre la LGPD, no sobre el RGPD: finalidades, base jurídica, datos recogidos, conservación, derechos del art. 18 y cómo ejercerlos.',
        nl: 'Schrijf de verklaring op basis van de LGPD, niet van de AVG: doeleinden, grondslag, verzamelde gegevens, bewaring, de rechten van art. 18 en hoe die uit te oefenen.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Indica come base l’obbligo legale di registro dell’orario, se hai più di 20 dipendenti, e l’esecuzione del contratto di lavoro. Non il consenso.',
        en: 'State as the basis the legal duty to record working time, if you have more than 20 employees, and performance of the employment contract. Not consent.',
        de: 'Nennen Sie als Grundlage die gesetzliche Pflicht zur Arbeitszeiterfassung, sofern Sie mehr als 20 Beschäftigte haben, und die Erfüllung des Arbeitsvertrags. Nicht die Einwilligung.',
        fr: 'Indiquez comme base l’obligation légale d’enregistrement des horaires, si vous avez plus de 20 salariés, et l’exécution du contrat de travail. Pas le consentement.',
        es: 'Indica como base la obligación legal de registro de jornada, si tienes más de 20 empleados, y la ejecución del contrato de trabajo. No el consentimiento.',
        nl: 'Vermeld als grondslag de wettelijke plicht tot urenregistratie, als je meer dan 20 werknemers hebt, en de uitvoering van de arbeidsovereenkomst. Niet toestemming.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Consegna l’informativa prima di accendere la rilevazione e conserva la prova della consegna, con data e versione del testo.',
        en: 'Deliver the notice before switching the recording on, and keep proof of delivery, with the date and the version of the text.',
        de: 'Händigen Sie den Hinweis aus, bevor die Erfassung eingeschaltet wird, und bewahren Sie den Nachweis mit Datum und Textfassung auf.',
        fr: 'Remettez la notice avant d’activer le relevé et conservez la preuve de la remise, avec la date et la version du texte.',
        es: 'Entrega el aviso antes de encender el registro y conserva la prueba de la entrega, con fecha y versión del texto.',
        nl: 'Overhandig de verklaring voordat de registratie wordt aangezet en bewaar het bewijs daarvan, met datum en tekstversie.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Raccogli la posizione solo ai momenti dichiarati, entrata, uscita e pause: la rilevazione continua non serve alla timbratura e allarga il trattamento oltre la finalità.',
        en: 'Collect location only at the stated moments, clock-in, clock-out and breaks: continuous tracking is not needed for timekeeping and widens the processing beyond its purpose.',
        de: 'Erheben Sie den Standort nur zu den genannten Zeitpunkten, Kommen, Gehen und Pausen: Eine fortlaufende Ortung ist für die Zeiterfassung nicht erforderlich und weitet die Verarbeitung über ihren Zweck hinaus aus.',
        fr: 'Ne relevez la position qu’aux moments annoncés, entrée, sortie et pauses : le suivi continu n’est pas nécessaire au pointage et élargit le traitement au-delà de sa finalité.',
        es: 'Recoge la posición solo en los momentos declarados, entrada, salida y pausas: el seguimiento continuo no hace falta para el fichaje y amplía el tratamiento más allá de su finalidad.',
        nl: 'Verzamel de locatie alleen op de aangekondigde momenten, komen, gaan en pauzes: doorlopend volgen is voor tijdregistratie niet nodig en verbreedt de verwerking voorbij het doel.',
      },
    },
  ],

  contatti: [
    {
      ente: 'ANPD',
      portale: FONTE_ANPD_DENUNCIA.url,
      urlFonte: FONTE_ANPD_DENUNCIA.url,
      verificatoIl: '2026-09-10',
    },
    {
      ente: {
        it: 'Segreteria dell’Ispettorato del Lavoro (SIT)',
        en: 'Labour Inspection Secretariat (SIT)',
        de: 'Sekretariat der Arbeitsaufsicht (SIT)',
        fr: 'Secrétariat de l’inspection du travail (SIT)',
        es: 'Secretaría de Inspección del Trabajo (SIT)',
        nl: 'Secretariaat van de arbeidsinspectie (SIT)',
        pt: 'Secretaria de Inspeção do Trabalho (SIT)',
      },
      portale: FONTE_SIT.url,
      urlFonte: FONTE_SIT.url,
      verificatoIl: '2026-09-10',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '2% del fatturato in Brasile, fino a R$ 50.000.000 per infrazione',
      en: '2% of revenue in Brazil, up to R$ 50,000,000 per infringement',
      de: '2 % des Umsatzes in Brasilien, bis zu R$ 50.000.000 je Verstoß',
      fr: '2 % du chiffre d’affaires au Brésil, jusqu’à 50 000 000 R$ par infraction',
      es: '2 % de la facturación en Brasil, hasta R$ 50.000.000 por infracción',
      nl: '2% van de omzet in Brazilië, tot R$ 50.000.000 per overtreding',
    },
    casoCitato: {
      it: 'Nessun caso ANPD noto sulla geolocalizzazione dei lavoratori: questo è il tetto della multa semplice previsto dalla LGPD, non l’esito di un procedimento.',
      en: 'No known ANPD case on employee geolocation: this is the cap on the simple fine set by the LGPD, not the outcome of a proceeding.',
      de: 'Kein bekannter ANPD-Fall zur Standortermittlung von Beschäftigten: Dies ist die von der LGPD vorgesehene Obergrenze der einfachen Geldbuße, nicht das Ergebnis eines Verfahrens.',
      fr: 'Aucune affaire ANPD connue sur la géolocalisation des salariés : il s’agit du plafond de l’amende simple prévu par la LGPD, non de l’issue d’une procédure.',
      es: 'Ningún caso conocido de la ANPD sobre geolocalización de trabajadores: este es el tope de la multa simple previsto por la LGPD, no el resultado de un procedimiento.',
      nl: 'Geen bekende ANPD-zaak over geolocatie van werknemers: dit is het maximum van de eenvoudige boete uit de LGPD, niet de uitkomst van een procedure.',
    },
    urlFonte: FONTE_LGPD.url,
    tipoImporto: 'massimale',
  },

  fonti: [FONTE_LGPD, FONTE_CLT, FONTE_ANPD_DENUNCIA, FONTE_ANPD_TITOLARE, FONTE_SIT, FONTE_LEI_ANPD],

  aggiornatoIl: '2026-09-10',
};
