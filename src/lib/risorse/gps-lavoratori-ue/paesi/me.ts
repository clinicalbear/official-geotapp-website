/**
 * Scheda-paese Montenegro per la risorsa "GPS sui lavoratori in UE".
 *
 * Il Montenegro NON e' uno Stato membro dell'UE: e' un paese candidato. La legge
 * sulla protezione dei dati personali (ZZPL, 79/08 e successive modifiche fino a
 * 77/24) e' solo PARZIALMENTE allineata al GDPR. Una nuova legge, allineata al GDPR,
 * e' stata pubblicata in Sl. list CG 133/2026 (11.9.2026), in vigore dal 19.9.2026
 * e applicabile dal 19.3.2027: fino ad allora vale la ZZPL attuale.
 *
 * Particolarita' rispetto al GDPR: il Montenegro mantiene un regime ex ante. L'art.
 * 27 ZZPL (testo consolidato) impone la notifica all'autorita' garante (AZLP) prima
 * di costituire un archivio automatico; l'art. 28 richiede il suo consenso solo per
 * i trattamenti a rischio speciale.
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * testo consolidato della ZZPL pubblicato dall'AZLP, posizione del Consiglio dell'AZLP sull'uso
 * del GPS nei veicoli di servizio (29.04.2025), contatti e moduli dell'AZLP, GDPR
 * come riferimento comparativo. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese, Fonte } from '../types';

// URL delle fonti primarie citate.
const FONTE_ZZPL_NUOVA: Fonte = {
  titolo:
    'Nuova legge sulla protezione dei dati personali, Službeni list CG 133/2026 (pubblicata l\'11.9.2026, in vigore dal 19.9.2026, si applica dal 19.3.2027, art. 106; artt. 88, 89 e 105)',
  url: 'https://www.sluzbenilist.me/propisi/398066',
};
const FONTE_ZZPL_2024 = {
  titolo:
    'Legge sulla protezione dei dati personali, testo consolidato pubblicato dall\'AZLP (artt. 26-28 e sanzioni, art. 74)',
  url: 'https://www.azlp.me/storage/docs/zajednicka/zakoni/Zakon%20o%20zastiti%20podataka%20o%20licnosti%20-2024.pdf',
};
const FONTE_AZLP_GPS = {
  titolo:
    'AZLP, posizione del Consiglio sull\'uso del GPS nei veicoli di servizio (29.04.2025)',
  url: 'https://www.azlp.me/storage/docs/zastita/Stavovi%20Savjeta/Upotreba%20GPS-a%20u%20slu%C5%BEbenim%20vozilima.docx',
};
const FONTE_AZLP_CONTATTI = {
  titolo: 'AZLP (Garante montenegrino), contatti',
  url: 'https://www.azlp.me/en/contact',
};
const FONTE_AZLP_MODULI = {
  titolo: 'AZLP, moduli (richiesta di tutela dei diritti)',
  url: 'https://www.azlp.me/en/forms',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR), riferimento comparativo',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const montenegro: SchedaPaese = {
  codiceISO: 'ME',
  slugCanonico: 'montenegro',
  nome: 'Montenegro',
  nomi: {
    it: 'Montenegro',
    en: 'Montenegro',
    'en-us': 'Montenegro',
    'en-gb': 'Montenegro',
    'en-au': 'Montenegro',
    'en-ie': 'Montenegro',
    'en-ca': 'Montenegro',
    de: 'Montenegro',
    nl: 'Montenegro',
    fr: 'Monténégro',
    es: 'Montenegro',
    pt: 'Montenegro',
    da: 'Montenegro',
    sv: 'Montenegro',
    nb: 'Montenegro',
    ru: 'Черногория',
  },
  bandiera: '🇲🇪',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: {
      it: 'AZLP (Agenzia per la protezione dei dati personali e il libero accesso all\'informazione)',
      en: 'AZLP (Agency for Personal Data Protection and Free Access to Information)',
      de: 'AZLP (Agentur für den Schutz personenbezogener Daten und den freien Zugang zu Informationen)',
      fr: 'AZLP (Agence de protection des données personnelles et de libre accès à l’information)',
      es: 'AZLP (Agencia de Protección de Datos Personales y Libre Acceso a la Información)',
      nl: 'AZLP (Agentschap voor de Bescherming van Persoonsgegevens en Vrije Toegang tot Informatie)',
      pt: 'AZLP (Agência de Proteção de Dados Pessoais e Livre Acesso à Informação)',
      da: 'AZLP (Agentur for Beskyttelse af Personoplysninger og Fri Adgang til Information)',
      sv: 'AZLP (Myndigheten för skydd av personuppgifter och fri tillgång till information)',
      nb: 'AZLP (Byrå for beskyttelse av personopplysninger og fri tilgang til informasjon)',
      ru: 'AZLP (Агентство по защите персональных данных и свободному доступу к информации)',
    },
    portale: FONTE_AZLP_MODULI.url,
    urlFonte: FONTE_AZLP_CONTATTI.url,
    verificatoIl: '2026-09-30',
    note: {
      it: "Il Montenegro è un Paese candidato, fuori dall'UE, con una legge solo parzialmente allineata al GDPR. Unica autorità nazionale, l'AZLP. Particolarità: prima di costituire l'archivio dati serve una notifica all'AZLP (art. 27) e, nei casi di rischio speciale, il suo consenso (art. 28). Una nuova legge (Sl. list CG 133/2026) è in vigore dal 19.9.2026 e si applica dal 19.3.2027.",
      en: 'Montenegro is a candidate country, outside the EU, with a law only partially aligned with the GDPR. There is a single national authority, the AZLP. Distinctive feature: a notification to the AZLP is required before setting up the data filing system (art. 27) and, in special-risk cases, its consent (art. 28). A new law (Sl. list CG 133/2026) has been in force since 19.9.2026 and applies from 19.3.2027.',
      de: 'Montenegro ist ein Beitrittskandidat außerhalb der EU mit einem Gesetz, das nur teilweise an die DSGVO angeglichen ist. Es gibt eine einzige nationale Behörde, die AZLP. Besonderheit: Bevor Sie das Datenarchiv anlegen, ist eine Meldung an die AZLP (Art. 27) und in Fällen besonderen Risikos deren Zustimmung (Art. 28) nötig. Ein neues Gesetz (Sl. list CG 133/2026) ist seit dem 19.9.2026 in Kraft und gilt ab dem 19.3.2027.',
      fr: 'Le Monténégro est un pays candidat, hors de l’UE, doté d’une loi seulement partiellement alignée sur le RGPD. Il existe une seule autorité nationale, l’AZLP. Particularité : avant de constituer le fichier de données, une notification à l’AZLP (art. 27) et, dans les cas de risque particulier, son accord (art. 28) sont nécessaires. Une nouvelle loi (Sl. list CG 133/2026) est en vigueur depuis le 19.9.2026 et s’applique à partir du 19.3.2027.',
      es: 'Montenegro es un país candidato, fuera de la UE, con una ley solo parcialmente alineada con el RGPD. Existe una única autoridad nacional, la AZLP. Particularidad: antes de constituir el archivo de datos se necesita una notificación a la AZLP (art. 27) y, en los casos de riesgo especial, su consentimiento (art. 28). Una nueva ley (Sl. list CG 133/2026) está en vigor desde el 19 de septiembre de 2026 y se aplica a partir del 19 de marzo de 2027.',
      pt: "O Montenegro é um país candidato, fora da UE, com uma lei apenas parcialmente alinhada com o RGPD. Única autoridade nacional, a AZLP. Particularidade: antes de constituir o ficheiro de dados é necessária uma notificação à AZLP (art. 27) e, nos casos de risco especial, o seu consentimento (art. 28). Uma nova lei (Sl. list CG 133/2026) está em vigor desde 19.9.2026 e aplica-se a partir de 19.3.2027.",
      nl: 'Montenegro is een kandidaat-lidstaat buiten de EU, met een wet die slechts gedeeltelijk is afgestemd op de AVG. Er is één nationale autoriteit, de AZLP. Bijzonderheid: voordat u het gegevensbestand aanlegt, is een melding aan de AZLP (art. 27) en in gevallen van bijzonder risico haar toestemming (art. 28) vereist. Een nieuwe wet (Sl. list CG 133/2026) is sinds 19.9.2026 van kracht en geldt vanaf 19.3.2027.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione preventiva ai lavoratori e regole interne sul GPS (ZZPL art. 20; posizione AZLP)',
        en: 'Prior information to workers and internal GPS rules (ZZPL art. 20; AZLP position)',
        de: 'Vorherige Information der Beschäftigten und interne GPS-Regeln (ZZPL Art. 20; AZLP-Position)',
        fr: 'Information préalable des travailleurs et règles internes sur le GPS (ZZPL art. 20 ; position de l’AZLP)',
        es: 'Información previa a los trabajadores y normas internas sobre el GPS (ZZPL art. 20; posición de la AZLP)',
        pt: "Informação prévia aos trabalhadores e regras internas sobre o GPS (ZZPL, art. 20; posição da AZLP)",
        nl: 'Voorafgaande informatie aan werknemers en interne GPS-regels (ZZPL art. 20; standpunt AZLP)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il datore deve informare i lavoratori su finalità, metodi, dati raccolti e diritti, e adottare regole interne sul trattamento GPS con una valutazione preliminare delle misure di sicurezza.",
        en: 'The employer must inform workers about the purposes, methods, data collected and rights, and adopt internal rules on GPS processing together with a preliminary assessment of the security measures.',
        de: 'Der Arbeitgeber muss die Beschäftigten über Zwecke, Methoden, erhobene Daten und Rechte informieren und interne Regeln zur GPS-Verarbeitung samt einer vorherigen Bewertung der Sicherheitsmaßnahmen erlassen.',
        fr: 'L’employeur doit informer les travailleurs sur les finalités, les méthodes, les données collectées et les droits, et adopter des règles internes sur le traitement GPS avec une évaluation préalable des mesures de sécurité.',
        es: 'El empleador debe informar a los trabajadores sobre las finalidades, los métodos, los datos recogidos y los derechos, y adoptar normas internas sobre el tratamiento GPS junto con una evaluación preliminar de las medidas de seguridad.',
        pt: "A entidade empregadora deve informar os trabalhadores sobre finalidades, métodos, dados recolhidos e direitos, e adotar regras internas sobre o tratamento GPS com uma avaliação preliminar das medidas de segurança.",
        nl: 'De werkgever moet werknemers informeren over de doeleinden, methoden, verzamelde gegevens en rechten, en interne regels over GPS-verwerking vaststellen met een voorafgaande beoordeling van de beveiligingsmaatregelen.',
      },
      fonte: FONTE_AZLP_GPS,
    },
    {
      voce: {
        it: "Notifica preventiva all'AZLP (ZZPL art. 27) e, in certi casi, suo consenso (art. 28)",
        en: "Prior notification to the AZLP (ZZPL art. 27) and, in some cases, its consent (art. 28)",
        de: "Vorherige Meldung an die AZLP (ZZPL Art. 27) und in bestimmten Fällen deren Zustimmung (Art. 28)",
        fr: 'Notification préalable à l’AZLP (ZZPL art. 27) et, dans certains cas, son accord (art. 28)',
        es: "Notificación previa a la AZLP (ZZPL art. 27) y, en ciertos casos, su consentimiento (art. 28)",
        pt: "Notificação prévia à AZLP (ZZPL, art. 27) e, em certos casos, o seu consentimento (art. 28)",
        nl: "Voorafgaande melding aan de AZLP (ZZPL art. 27) en in bepaalde gevallen haar toestemming (art. 28)",
      },
      risposta: 'si',
      dettaglio: {
        it: "Prima di costituire una raccolta automatica di dati personali (di norma lo è un sistema GPS che registra le posizioni per persona) il titolare deve inviare una notifica all'AZLP con i dati dell'art. 26 c. 2 (art. 27 c. 1); l'omessa notifica è sanzionata dall'art. 74. Il consenso preventivo dell'AZLP (art. 28) serve in più solo se il trattamento presenta un rischio speciale per i diritti (categorie particolari di dati, valutazione di personalità, capacità o comportamento, videosorveglianza di aree pubbliche, biometria) e non si applica se il trattamento si fonda sulla legge, sul consenso della persona o su un contratto. Il testo inglese pubblicato dall'AZLP (79/08 e 70/09) è superato: prevedeva ancora il consenso per ogni archivio, con silenzio-assenso a 30 giorni.",
        en: "Before setting up an automated collection of personal data (a GPS system that records positions per person normally is one), the controller must send a notification to the AZLP with the data listed in art. 26(2) (art. 27(1)); failure to notify is sanctioned under art. 74. The AZLP's prior consent (art. 28) is needed in addition only where the processing poses a special risk to rights (special categories of data, assessment of personality, ability or behaviour, video surveillance of public areas, biometrics), and it does not apply where the processing rests on a law, on the person's consent or on a contract. The English text published by the AZLP (79/08 and 70/09) is out of date: it still required consent for every filing system, with tacit approval after 30 days.",
        de: "Bevor eine automatisierte Sammlung personenbezogener Daten angelegt wird (ein GPS-System, das Positionen je Person speichert, ist in der Regel eine solche), muss der Verantwortliche der AZLP eine Meldung mit den Angaben nach Art. 26 Abs. 2 übermitteln (Art. 27 Abs. 1); die unterlassene Meldung wird nach Art. 74 geahndet. Die vorherige Zustimmung der AZLP (Art. 28) ist zusätzlich nur erforderlich, wenn die Verarbeitung ein besonderes Risiko für die Rechte birgt (besondere Datenkategorien, Bewertung von Persönlichkeit, Fähigkeit oder Verhalten, Videoüberwachung öffentlicher Flächen, Biometrie), und sie entfällt, wenn die Verarbeitung auf einem Gesetz, der Einwilligung der Person oder einem Vertrag beruht. Der von der AZLP veröffentlichte englische Text (79/08 und 70/09) ist überholt: Er verlangte noch für jedes Datenarchiv die Zustimmung, mit stillschweigender Genehmigung nach 30 Tagen.",
        fr: 'Avant de constituer un recueil automatisé de données personnelles (un système GPS qui enregistre les positions par personne en est en principe un), le responsable doit adresser à l’AZLP une notification contenant les données de l’art. 26, al. 2 (art. 27, al. 1) ; l’absence de notification est sanctionnée par l’art. 74. L’accord préalable de l’AZLP (art. 28) n’est requis en plus que si le traitement présente un risque particulier pour les droits (catégories particulières de données, évaluation de la personnalité, de la capacité ou du comportement, vidéosurveillance d’espaces publics, biométrie), et il ne s’applique pas si le traitement repose sur la loi, sur le consentement de la personne ou sur un contrat. Le texte anglais publié par l’AZLP (79/08 et 70/09) est dépassé : il exigeait encore l’accord pour chaque fichier, avec approbation tacite après 30 jours.',
        es: "Antes de constituir una recopilación automatizada de datos personales (un sistema GPS que registra posiciones por persona normalmente lo es), el responsable debe enviar a la AZLP una notificación con los datos del art. 26, apdo. 2 (art. 27, apdo. 1); la falta de notificación se sanciona conforme al art. 74. El consentimiento previo de la AZLP (art. 28) solo hace falta además cuando el tratamiento presenta un riesgo especial para los derechos (categorías especiales de datos, evaluación de la personalidad, la capacidad o el comportamiento, videovigilancia de zonas públicas, biometría), y no se aplica si el tratamiento se basa en una ley, en el consentimiento de la persona o en un contrato. El texto inglés publicado por la AZLP (79/08 y 70/09) está superado: aún exigía el consentimiento para cada archivo, con aprobación tácita a los 30 días.",
        pt: "Antes de constituir uma recolha automática de dados pessoais (em regra, é-o um sistema GPS que regista as posições por pessoa), o responsável pelo tratamento deve enviar uma notificação à AZLP com os dados do art. 26, n.º 2 (art. 27, n.º 1); a falta de notificação é sancionada pelo art. 74. O consentimento prévio da AZLP (art. 28) só é necessário, além disso, se o tratamento apresentar um risco especial para os direitos (categorias especiais de dados, avaliação da personalidade, da capacidade ou do comportamento, videovigilância de áreas públicas, biometria) e não se aplica se o tratamento se fundar na lei, no consentimento da pessoa ou num contrato. O texto inglês publicado pela AZLP (79/08 e 70/09) está ultrapassado: previa ainda o consentimento para cada ficheiro, com deferimento tácito aos 30 dias.",
        nl: "Voordat een geautomatiseerd bestand met persoonsgegevens wordt aangelegd (een GPS-systeem dat posities per persoon vastlegt is dat in de regel), moet de verwerkingsverantwoordelijke de AZLP een melding sturen met de gegevens van art. 26, lid 2 (art. 27, lid 1); het niet melden wordt gesanctioneerd op grond van art. 74. De voorafgaande toestemming van de AZLP (art. 28) is alleen aanvullend nodig als de verwerking een bijzonder risico voor de rechten inhoudt (bijzondere categorieën gegevens, beoordeling van persoonlijkheid, bekwaamheid of gedrag, camerabewaking van openbare ruimten, biometrie), en geldt niet als de verwerking berust op een wet, op de toestemming van de persoon of op een overeenkomst. De door de AZLP gepubliceerde Engelse tekst (79/08 en 70/09) is achterhaald: die eiste nog toestemming voor elk bestand, met stilzwijgende goedkeuring na 30 dagen.",
      },
      fonte: FONTE_ZZPL_2024,
    },
    {
      voce: {
        it: 'Base = interesse legittimo (art. 10), non il consenso; per i veicoli privati consenso scritto e solo orario',
        en: 'Basis = legitimate interest (art. 10), not consent; for private vehicles written consent and working hours only',
        de: 'Grundlage = berechtigtes Interesse (Art. 10), nicht die Einwilligung; bei Privatfahrzeugen schriftliche Einwilligung und nur während der Arbeitszeit',
        fr: 'Base = intérêt légitime (art. 10), et non le consentement ; pour les véhicules privés, consentement écrit et heures de travail uniquement',
        es: 'Base = interés legítimo (art. 10), no el consentimiento; para los vehículos privados, consentimiento escrito y solo durante el horario laboral',
        pt: "Base = interesse legítimo (art. 10), não o consentimento; para os veículos privados, consentimento escrito e apenas no horário",
        nl: 'Grondslag = gerechtvaardigd belang (art. 10), niet toestemming; voor privévoertuigen schriftelijke toestemming en alleen tijdens werktijd',
      },
      risposta: 'si',
      dettaglio: {
        it: "La base è l'interesse legittimo; per i veicoli privati usati a fini di servizio serve il consenso scritto del lavoratore e il GPS va limitato all'orario di lavoro.",
        en: 'The basis is legitimate interest; for private vehicles used for work purposes the worker\'s written consent is required and the GPS must be limited to working hours.',
        de: 'Die Grundlage ist das berechtigte Interesse; bei Privatfahrzeugen, die für dienstliche Zwecke genutzt werden, ist die schriftliche Einwilligung des Beschäftigten erforderlich und das GPS ist auf die Arbeitszeit zu beschränken.',
        fr: 'La base est l’intérêt légitime ; pour les véhicules privés utilisés à des fins de service, le consentement écrit du travailleur est requis et le GPS doit être limité aux heures de travail.',
        es: 'La base es el interés legítimo; para los vehículos privados utilizados con fines de servicio se necesita el consentimiento escrito del trabajador y el GPS debe limitarse al horario laboral.',
        pt: "A base é o interesse legítimo; para os veículos privados utilizados para fins de serviço é necessário o consentimento escrito do trabalhador e o GPS deve ser limitado ao horário de trabalho.",
        nl: 'De grondslag is het gerechtvaardigd belang; voor privévoertuigen die voor werkdoeleinden worden gebruikt, is de schriftelijke toestemming van de werknemer vereist en moet de GPS tot de werktijd worden beperkt.',
      },
      fonte: FONTE_AZLP_GPS,
    },
    {
      voce: {
        it: 'Niente decisioni sui dipendenti basate solo su trattamento automatizzato (ZZPL art. 15a)',
        en: 'No decisions about employees based solely on automated processing (ZZPL art. 15a)',
        de: 'Keine Entscheidungen über Beschäftigte allein aufgrund automatisierter Verarbeitung (ZZPL Art. 15a)',
        fr: 'Aucune décision concernant les salariés fondée uniquement sur un traitement automatisé (ZZPL art. 15a)',
        es: 'Ninguna decisión sobre los empleados basada únicamente en un tratamiento automatizado (ZZPL art. 15a)',
        pt: "Sem decisões sobre os trabalhadores baseadas apenas em tratamento automatizado (ZZPL, art. 15a)",
        nl: 'Geen besluiten over werknemers die uitsluitend op geautomatiseerde verwerking zijn gebaseerd (ZZPL art. 15a)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Le decisioni su risultati, affidabilità o comportamento dei dipendenti non possono basarsi unicamente su un trattamento automatizzato; l'eccezione (contratto o legge) richiede misure di tutela, come la possibilità per la persona di esprimere la propria opinione.",
        en: 'Decisions about employees\' performance, reliability or conduct cannot be based solely on automated processing; the exception (contract or law) requires safeguards, such as the chance for the person to express an opinion.',
        de: 'Entscheidungen über Leistung, Zuverlässigkeit oder Verhalten der Beschäftigten dürfen nicht allein auf automatisierter Verarbeitung beruhen; die Ausnahme (Vertrag oder Gesetz) verlangt Schutzmaßnahmen, etwa die Möglichkeit der Person, ihre Meinung zu äußern.',
        fr: 'Les décisions sur les résultats, la fiabilité ou le comportement des salariés ne peuvent reposer uniquement sur un traitement automatisé ; l’exception (contrat ou loi) exige des garanties, comme la possibilité pour la personne d’exprimer son opinion.',
        es: 'Las decisiones sobre el rendimiento, la fiabilidad o el comportamiento de los empleados no pueden basarse únicamente en un tratamiento automatizado; la excepción (contrato o ley) exige garantías, como la posibilidad de que la persona exprese su opinión.',
        pt: "As decisões sobre resultados, fiabilidade ou comportamento dos trabalhadores não podem basear-se unicamente num tratamento automatizado; a exceção (contrato ou lei) exige medidas de proteção, como a possibilidade de a pessoa exprimir a sua opinião.",
        nl: 'Besluiten over de prestaties, betrouwbaarheid of het gedrag van werknemers mogen niet uitsluitend op geautomatiseerde verwerking worden gebaseerd; de uitzondering (overeenkomst of wet) vereist waarborgen, zoals de mogelijkheid voor de persoon om zijn mening te geven.',
      },
      fonte: FONTE_AZLP_GPS,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) formale",
        en: "Formal data protection impact assessment (DPIA)",
        de: "Förmliche Datenschutz-Folgenabschätzung (DSFA)",
        fr: 'Analyse d’impact relative à la protection des données (AIPD) formelle',
        es: "Evaluación de impacto (EIPD) formal",
        pt: "Avaliação de impacto (DPIA) formal",
        nl: "Formele gegevensbeschermingseffectbeoordeling (DPIA)",
      },
      risposta: 'dipende',
      dettaglio: {
        it: "La legge attuale non prevede una DPIA formale in stile GDPR; il sostituto è la notifica preventiva dell'art. 27 (e, nei casi di rischio speciale, il consenso dell'art. 28) più le misure di sicurezza e le regole interne con analisi preliminare di adeguatezza (artt. 24 e 26). Una nuova legge (Sl. list CG 133/2026) è in vigore dal 19 settembre 2026 e si applica dal 19 marzo 2027: fino ad allora vale la legge attuale.",
        en: "The current law does not provide for a formal GDPR-style DPIA; the substitute is the prior notification under art. 27 (and, in special-risk cases, the consent under art. 28) plus the security measures and the internal rules with a preliminary adequacy analysis (arts. 24 and 26). A new law (Sl. list CG 133/2026) has been in force since 19 September 2026 and applies from 19 March 2027: until then the current law governs.",
        de: "Das geltende Gesetz sieht keine förmliche DSFA nach Vorbild der DSGVO vor; an ihre Stelle treten die vorherige Meldung nach Art. 27 (und in Fällen besonderen Risikos die Zustimmung nach Art. 28) sowie die Sicherheitsmaßnahmen und die internen Regeln mit vorheriger Angemessenheitsanalyse (Art. 24 und 26). Ein neues Gesetz (Sl. list CG 133/2026) ist seit dem 19. September 2026 in Kraft und gilt ab dem 19. März 2027: bis dahin gilt das geltende Gesetz.",
        fr: 'La loi actuelle ne prévoit pas d’AIPD formelle de type RGPD ; elle est remplacée par la notification préalable de l’art. 27 (et, dans les cas de risque particulier, l’accord de l’art. 28) ainsi que par les mesures de sécurité et les règles internes avec analyse préalable d’adéquation (art. 24 et 26). Une nouvelle loi (Sl. list CG 133/2026) est en vigueur depuis le 19 septembre 2026 et s’applique à partir du 19 mars 2027 : d’ici là, la loi actuelle s’applique.',
        es: "La ley actual no contempla una EIPD formal al estilo del RGPD; el sustituto es la notificación previa del art. 27 (y, en los casos de riesgo especial, el consentimiento del art. 28) más las medidas de seguridad y las normas internas con análisis preliminar de adecuación (arts. 24 y 26). Una nueva ley (Sl. list CG 133/2026) está en vigor desde el 19 de septiembre de 2026 y se aplica a partir del 19 de marzo de 2027: hasta entonces rige la ley actual.",
        pt: "A lei atual não prevê uma DPIA formal ao estilo do RGPD; o substituto é a notificação prévia do art. 27 (e, nos casos de risco especial, o consentimento do art. 28) mais as medidas de segurança e as regras internas com análise preliminar de adequação (arts. 24 e 26). Uma nova lei (Sl. list CG 133/2026) está em vigor desde 19 de setembro de 2026 e aplica-se a partir de 19 de março de 2027: até lá aplica-se a lei atual.",
        nl: "De huidige wet voorziet niet in een formele DPIA naar AVG-model; in de plaats daarvan komen de voorafgaande melding op grond van art. 27 (en in gevallen van bijzonder risico de toestemming van art. 28) plus de beveiligingsmaatregelen en de interne regels met een voorafgaande toereikendheidsanalyse (art. 24 en 26). Een nieuwe wet (Sl. list CG 133/2026) is sinds 19 september 2026 van kracht en geldt vanaf 19 maart 2027: tot dan geldt de huidige wet.",
      },
      fonte: FONTE_ZZPL_2024,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: "Definisci finalità e metodi del GPS e adotta regole interne con valutazione preliminare delle misure di sicurezza.",
        en: 'Define the purposes and methods of the GPS and adopt internal rules with a preliminary assessment of the security measures.',
        de: 'Legen Sie Zwecke und Methoden des GPS fest und erlassen Sie interne Regeln samt einer vorherigen Bewertung der Sicherheitsmaßnahmen.',
        fr: 'Définissez les finalités et les méthodes du GPS et adoptez des règles internes avec une évaluation préalable des mesures de sécurité.',
        es: 'Define las finalidades y los métodos del GPS y adopta normas internas con una evaluación preliminar de las medidas de seguridad.',
        pt: "Defina as finalidades e os métodos do GPS e adote regras internas com avaliação preliminar das medidas de segurança.",
        nl: 'Bepaal de doeleinden en methoden van de GPS en stel interne regels vast met een voorafgaande beoordeling van de beveiligingsmaatregelen.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: "Invia la notifica all'AZLP prima di costituire l'archivio dati (art. 27); chiedi il suo consenso (art. 28) solo se il trattamento presenta un rischio speciale.",
        en: 'Send the notification to the AZLP before setting up the data filing system (art. 27); ask for its consent (art. 28) only if the processing poses a special risk.',
        de: 'Übermitteln Sie der AZLP die Meldung, bevor Sie das Datenarchiv anlegen (Art. 27); holen Sie deren Zustimmung (Art. 28) nur ein, wenn die Verarbeitung ein besonderes Risiko birgt.',
        fr: 'Adressez la notification à l’AZLP avant de constituer le fichier de données (art. 27) ; demandez son accord (art. 28) seulement si le traitement présente un risque particulier.',
        es: 'Envía la notificación a la AZLP antes de constituir el archivo de datos (art. 27); pide su consentimiento (art. 28) solo si el tratamiento presenta un riesgo especial.',
        pt: "Envie a notificação à AZLP antes de constituir o ficheiro de dados (art. 27); peça o seu consentimento (art. 28) apenas se o tratamento apresentar um risco especial.",
        nl: 'Stuur de melding naar de AZLP voordat u het gegevensbestand aanlegt (art. 27); vraag haar toestemming (art. 28) alleen als de verwerking een bijzonder risico inhoudt.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Informa per iscritto i lavoratori; per i veicoli privati raccogli il consenso scritto e limita il GPS all'orario.",
        en: 'Inform workers in writing; for private vehicles collect written consent and limit the GPS to working hours.',
        de: 'Informieren Sie die Beschäftigten schriftlich; holen Sie bei Privatfahrzeugen die schriftliche Einwilligung ein und beschränken Sie das GPS auf die Arbeitszeit.',
        fr: 'Informez les travailleurs par écrit ; pour les véhicules privés, recueillez le consentement écrit et limitez le GPS aux heures de travail.',
        es: 'Informa por escrito a los trabajadores; para los vehículos privados, recoge el consentimiento escrito y limita el GPS al horario laboral.',
        pt: "Informe os trabalhadores por escrito; para os veículos privados, recolha o consentimento escrito e limite o GPS ao horário.",
        nl: 'Informeer de werknemers schriftelijk; verzamel voor privévoertuigen de schriftelijke toestemming en beperk de GPS tot de werktijd.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Non basare decisioni sui dipendenti unicamente su un trattamento automatizzato (art. 15a).',
        en: 'Do not base decisions about employees solely on automated processing (art. 15a).',
        de: 'Stützen Sie Entscheidungen über Beschäftigte nicht allein auf automatisierte Verarbeitung (Art. 15a).',
        fr: 'Ne fondez pas les décisions concernant les salariés uniquement sur un traitement automatisé (art. 15a).',
        es: 'No bases las decisiones sobre los empleados únicamente en un tratamiento automatizado (art. 15a).',
        pt: "Não baseie decisões sobre os trabalhadores unicamente num tratamento automatizado (art. 15a).",
        nl: 'Baseer besluiten over werknemers niet uitsluitend op geautomatiseerde verwerking (art. 15a).',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: "Limita il GPS all'orario e alla finalità dichiarata.",
        en: 'Limit the GPS to working hours and to the declared purpose.',
        de: 'Beschränken Sie das GPS auf die Arbeitszeit und den angegebenen Zweck.',
        fr: 'Limitez le GPS aux heures de travail et à la finalité déclarée.',
        es: 'Limita el GPS al horario laboral y a la finalidad declarada.',
        pt: "Limite o GPS ao horário e à finalidade declarada.",
        nl: 'Beperk de GPS tot de werktijd en tot het verklaarde doel.',
      },
    },
    {
      passo: 6,
      descrizione: {
        it: 'Se cambi sistema o software di monitoraggio, aggiorna e riconsegna l’informativa, e verifica se devi di nuovo informare o consultare i rappresentanti dei lavoratori, dove la legge lo prevede. In Montenegro, se il trattamento cambia in modo significativo, va inviata una nuova notifica all\'AZLP (art. 27, c. 1). Spesso cambiano fornitore (responsabile del trattamento), dati raccolti e modalità: l’informativa consegnata prima non basta.',
        en: 'If you switch systems: when you change your monitoring system or software, update and re-issue the privacy notice, and check whether you must inform or consult the workers\' representatives again, where the law requires it. In Montenegro, if the processing changes significantly, a new notification must be sent to the AZLP (Art. 27(1)). The provider (data processor), the data collected and the methods often change: the one provided earlier is not enough.',
        de: 'Bei Systemwechsel: Wenn Sie Ihr Überwachungssystem oder Ihre Software wechseln, aktualisieren Sie die Datenschutzinformation und händigen Sie sie erneut aus, und prüfen Sie, ob Sie die Arbeitnehmervertretung erneut informieren oder beteiligen müssen, wo das Gesetz es vorsieht. In Montenegro ist bei einer wesentlichen Änderung der Verarbeitung eine neue Meldung an die AZLP zu senden (Art. 27 Abs. 1). Anbieter (Auftragsverarbeiter), erhobene Daten und Modalitäten ändern sich oft: die zuvor ausgehändigte genügt nicht.',
        fr: 'En cas de changement de système : si vous changez de système ou de logiciel de surveillance, mettez à jour et remettez l’information, et vérifiez si vous devez de nouveau informer ou consulter les représentants du personnel, lorsque la loi le prévoit. Au Monténégro, si le traitement change de manière significative, une nouvelle notification doit être adressée à l’AZLP (art. 27, al. 1). Le fournisseur (sous-traitant), les données collectées et les modalités changent souvent : celle remise auparavant ne suffit pas.',
        es: 'Si cambias de sistema o software de monitorización, actualiza y vuelve a entregar la información, y comprueba si debes volver a informar o consultar a los representantes de los trabajadores, cuando la ley lo prevé. En Montenegro, si el tratamiento cambia de forma significativa, hay que enviar una nueva notificación a la AZLP (art. 27, apdo. 1). A menudo cambian el proveedor (encargado del tratamiento), los datos recogidos y las modalidades: la información entregada antes no basta.',
        pt: "Se mudar de sistema ou de software de monitorização, atualize e entregue de novo a informação e verifique se tem de voltar a informar ou a consultar os representantes dos trabalhadores, nos casos em que a lei o prevê. Muitas vezes mudam o fornecedor (subcontratante), os dados recolhidos e as modalidades: a informação entregue anteriormente não basta.",
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werkt u de privacyverklaring bij en verstrekt u deze opnieuw, en controleert u of u de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. In Montenegro moet bij een wezenlijke wijziging van de verwerking een nieuwe melding aan de AZLP worden gedaan (art. 27, lid 1). Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'AZLP, tutela dei diritti',
      portale: FONTE_AZLP_MODULI.url,
      urlFonte: FONTE_AZLP_MODULI.url,
      verificatoIl: '2026-09-30',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'Da 500 a 20.000 € per la persona giuridica',
      en: 'from 500 to 20,000 euros for a legal person',
      de: 'von 500 bis 20.000 Euro für eine juristische Person',
      fr: 'de 500 à 20 000 euros pour une personne morale',
      es: 'de 500 a 20.000 euros para la persona jurídica',
      pt: "De 500 a 20.000 € para a pessoa coletiva",
      nl: 'van 500 tot 20.000 euro voor een rechtspersoon',
    },
    casoCitato: {
      it: "Non risulta una multa dell'AZLP specifica e pubblicata per il GPS sui dipendenti. La posizione di riferimento è quella del Consiglio dell'AZLP del 2025: il GPS sui veicoli di servizio è un controllo legittimo, ma serve definirne finalità e metodi, informare i lavoratori e adottare regole interne (la notifica all'AZLP per l'archivio dati è un obbligo distinto, art. 27). Il massimale mostrato è quello della legge sulla protezione dei dati oggi in vigore (art. 74 del testo consolidato pubblicato dall'AZLP): da 500 a 20.000 euro per la persona giuridica, da 150 a 6.000 euro per l'imprenditore individuale. Non sono cifre in stile GDPR: il Montenegro non è nell'UE. Dal 19 marzo 2027 si applica una nuova legge (Sl. list CG 133/2026, in vigore dal 19 settembre 2026) con sanzioni fino a 1.000.000 di euro o al 2% del fatturato mondiale e, per la violazione di principi, consenso, diritti degli interessati e trasferimenti, fino a 2.000.000 di euro o al 4% (art. 88; l'art. 89 prevede da 150 a 2.000 euro per alcune contravvenzioni). La vecchia legge cessa il 19 marzo 2027, salvo le norme sulla videosorveglianza (artt. 35-40a), che cessano con una futura legge sulla videosorveglianza (art. 105).",
      en: 'There is no specific, published AZLP fine for GPS tracking of employees. The reference position is that of the AZLP Council of 2025: GPS on service vehicles is legitimate monitoring, but its purposes and methods must be defined, workers must be informed and internal rules must be adopted (notifying the AZLP of the data filing system is a separate duty, art. 27). The ceiling shown is the one in the data protection law in force today (art. 74 of the consolidated text published by the AZLP): 500 to 20,000 euros for a legal person, 150 to 6,000 euros for a sole trader. These are not GDPR-style figures: Montenegro is not in the EU. From 19 March 2027 a new law applies (Sl. list CG 133/2026, in force since 19 September 2026) with penalties of up to 1,000,000 euros or 2% of worldwide turnover and, for breaches of the principles, consent, data subject rights and transfers, up to 2,000,000 euros or 4% (art. 88; art. 89 provides 150 to 2,000 euros for some minor offences). The old law ceases on 19 March 2027, except the video surveillance rules (arts. 35-40a), which cease with a future video surveillance law (art. 105).',
      de: 'Eine spezifische, veröffentlichte Geldbuße der AZLP für die GPS-Überwachung von Beschäftigten ist nicht bekannt. Maßgeblich ist die Position des AZLP-Rates von 2025: GPS in Dienstfahrzeugen ist eine legitime Kontrolle, doch müssen Zwecke und Methoden festgelegt, die Beschäftigten informiert und interne Regeln erlassen werden (die Meldung des Datenarchivs an die AZLP ist eine gesonderte Pflicht, Art. 27). Der angezeigte Höchstbetrag ist der des heute geltenden Datenschutzgesetzes (Art. 74 der von der AZLP veröffentlichten konsolidierten Fassung): 500 bis 20.000 Euro für eine juristische Person, 150 bis 6.000 Euro für Einzelunternehmer. Das sind keine DSGVO-Beträge: Montenegro gehört nicht zur EU. Ab dem 19. März 2027 gilt ein neues Gesetz (Sl. list CG 133/2026, seit dem 19. September 2026 in Kraft) mit Sanktionen von bis zu 1.000.000 Euro oder 2 % des weltweiten Umsatzes und, bei Verstößen gegen die Grundsätze, die Einwilligung, die Betroffenenrechte und Übermittlungen, von bis zu 2.000.000 Euro oder 4 % (Art. 88; Art. 89 sieht für einzelne Ordnungswidrigkeiten 150 bis 2.000 Euro vor). Das alte Gesetz tritt am 19. März 2027 außer Kraft, außer den Vorschriften zur Videoüberwachung (Art. 35-40a), die mit einem künftigen Videoüberwachungsgesetz außer Kraft treten (Art. 105).',
      fr: 'Il n’existe pas d’amende spécifique et publiée de l’AZLP pour le suivi GPS des salariés. La position de référence est celle du Conseil de l’AZLP de 2025 : le GPS sur les véhicules de service est un contrôle légitime, mais il faut en définir les finalités et les méthodes, informer les travailleurs et adopter des règles internes (la notification du fichier de données à l’AZLP est une obligation distincte, art. 27). Le plafond indiqué est celui de la loi sur la protection des données en vigueur aujourd’hui (art. 74 du texte consolidé publié par l’AZLP) : de 500 à 20 000 euros pour une personne morale, de 150 à 6 000 euros pour un entrepreneur individuel. Ce ne sont pas des montants de type RGPD : le Monténégro n’est pas dans l’UE. À partir du 19 mars 2027 s’applique une nouvelle loi (Sl. list CG 133/2026, en vigueur depuis le 19 septembre 2026) avec des sanctions allant jusqu’à 1 000 000 d’euros ou 2 % du chiffre d’affaires mondial et, pour la violation des principes, du consentement, des droits des personnes et des transferts, jusqu’à 2 000 000 d’euros ou 4 % (art. 88 ; l’art. 89 prévoit de 150 à 2 000 euros pour certaines contraventions). L’ancienne loi cesse le 19 mars 2027, sauf les règles sur la vidéosurveillance (art. 35-40a), qui cessent avec une future loi sur la vidéosurveillance (art. 105).',
      es: 'No consta una multa específica y publicada de la AZLP por el GPS en los empleados. La posición de referencia es la del Consejo de la AZLP de 2025: el GPS en los vehículos de servicio es un control legítimo, pero hay que definir sus finalidades y métodos, informar a los trabajadores y adoptar normas internas (la notificación del archivo de datos a la AZLP es una obligación distinta, art. 27). El máximo indicado es el de la ley de protección de datos hoy vigente (art. 74 del texto consolidado publicado por la AZLP): de 500 a 20.000 euros para la persona jurídica, de 150 a 6.000 euros para el empresario individual. No son cifras al estilo del RGPD: Montenegro no está en la UE. A partir del 19 de marzo de 2027 se aplica una nueva ley (Sl. list CG 133/2026, en vigor desde el 19 de septiembre de 2026) con sanciones de hasta 1.000.000 de euros o el 2 % del volumen de negocio mundial y, por la infracción de los principios, el consentimiento, los derechos de los interesados y las transferencias, de hasta 2.000.000 de euros o el 4 % (art. 88; el art. 89 prevé de 150 a 2.000 euros para algunas contravenciones). La ley antigua cesa el 19 de marzo de 2027, salvo las normas sobre videovigilancia (arts. 35-40a), que cesan con una futura ley de videovigilancia (art. 105).',
      pt: "Não consta nenhuma coima da AZLP específica e publicada sobre o GPS nos trabalhadores. A posição de referência é a do Conselho da AZLP de 2025: o GPS nos veículos de serviço é um controlo legítimo, mas é necessário definir as suas finalidades e métodos, informar os trabalhadores e adotar regras internas (a notificação à AZLP para o ficheiro de dados é uma obrigação distinta, art. 27). O limite máximo indicado é o da lei sobre a proteção de dados atualmente em vigor (art. 74 do texto consolidado publicado pela AZLP): de 500 a 20.000 euros para a pessoa coletiva, de 150 a 6.000 euros para o empresário em nome individual. Não são valores ao estilo do RGPD: o Montenegro não pertence à UE. A partir de 19 de março de 2027 aplica-se uma nova lei (Sl. list CG 133/2026, em vigor desde 19 de setembro de 2026) com sanções até 1.000.000 de euros ou 2 % do volume de negócios mundial e, pela violação de princípios, consentimento, direitos dos titulares dos dados e transferências, até 2.000.000 de euros ou 4 % (art. 88; o art. 89 prevê de 150 a 2.000 euros para algumas contraordenações). A lei antiga cessa em 19 de março de 2027, salvo as normas sobre a videovigilância (arts. 35-40a), que cessam com uma futura lei sobre a videovigilância (art. 105).",
      nl: 'Er is geen specifieke, gepubliceerde boete van de AZLP voor GPS-tracking van werknemers. De maatgevende positie is die van de AZLP-Raad uit 2025: GPS in dienstvoertuigen is een legitieme controle, maar de doeleinden en methoden moeten worden vastgelegd, de werknemers moeten worden geïnformeerd en er moeten interne regels worden vastgesteld (de melding van het gegevensbestand aan de AZLP is een aparte plicht, art. 27). Het getoonde maximum is dat van de vandaag geldende wet op de gegevensbescherming (art. 74 van de door de AZLP gepubliceerde geconsolideerde tekst): 500 tot 20.000 euro voor een rechtspersoon, 150 tot 6.000 euro voor een eenmanszaak. Dit zijn geen AVG-bedragen: Montenegro is geen lid van de EU. Vanaf 19 maart 2027 geldt een nieuwe wet (Sl. list CG 133/2026, sinds 19 september 2026 van kracht) met sancties tot 1.000.000 euro of 2 % van de wereldwijde omzet en, bij schending van de beginselen, toestemming, rechten van betrokkenen en doorgiften, tot 2.000.000 euro of 4 % (art. 88; art. 89 voorziet 150 tot 2.000 euro voor sommige overtredingen). De oude wet vervalt op 19 maart 2027, behalve de regels over camerabewaking (art. 35-40a), die vervallen met een toekomstige wet op de camerabewaking (art. 105).',
    },
    urlFonte: FONTE_ZZPL_2024.url,
    tipoImporto: 'massimale',
  },

  fonti: [
    FONTE_ZZPL_2024,
    FONTE_ZZPL_NUOVA,
    FONTE_AZLP_GPS,
    FONTE_AZLP_CONTATTI,
    FONTE_AZLP_MODULI,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
