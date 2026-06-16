/**
 * Scheda-paese Italia per la risorsa "GPS sui lavoratori in UE".
 *
 * Fonte unica dei contenuti: docs/risorse/osservatorio-garante-gps-dipendenti-2026.md
 * (Osservatorio sui provvedimenti del Garante Privacy, dati verificati alla fonte
 * primaria garanteprivacy.it). Nessun numero, URL o autorità è inventato qui:
 * ogni valore proviene da quel documento.
 *
 * NOTA per la pagina (Task successivo): il download di `modelloPdf.url` va
 * collegato alla cattura lead-magnet esistente (leadMagnet 'informativa-gps',
 * MailerLite). Il file PDF è in public/downloads/.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate nel documento (sezione "Fonti").
const FONTE_PROVV_AUTOTRASPORTI = {
  titolo: 'Garante Privacy, Provvedimento del 16 gennaio 2025, n. 10112287',
  url: 'https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10112287',
};
const FONTE_PROVV_ARSAC = {
  titolo: 'Garante Privacy, Provvedimento del 13 marzo 2025, n. 10128005',
  url: 'https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10128005',
};
const FONTE_STATUTO_ART4 = {
  titolo: 'Legge 20 maggio 1970, n. 300 (Statuto dei Lavoratori), art. 4',
  url: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1970-05-20;300',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR), artt. 5, 13, 25, 35, 88',
  url: 'https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32016R0679',
};

export const italia: SchedaPaese = {
  codiceISO: 'IT',
  slugCanonico: 'italia',
  nome: 'Italia',
  nomi: {
    it: 'Italia',
    en: 'Italy',
    'en-us': 'Italy',
    'en-gb': 'Italy',
    'en-au': 'Italy',
    'en-ie': 'Italy',
    'en-ca': 'Italy',
    de: 'Italien',
    nl: 'Italië',
    fr: 'Italie',
    es: 'Italia',
    pt: 'Itália',
    da: 'Italien',
    sv: 'Italien',
    nb: 'Italia',
    ru: 'Италия',
  },
  bandiera: '🇮🇹',
  federale: false,
  stato: 'completo',

  autoritaCompetente: {
    ente: 'Garante per la protezione dei dati personali',
    urlFonte: 'https://www.garanteprivacy.it',
    verificatoIl: '2026-06-15',
  },

  checklist: [
    {
      voce: {
        it: "Accordo sindacale (RSA/RSU) o autorizzazione dell'Ispettorato del Lavoro, prima di installare il sistema",
        en: 'Trade union agreement (RSA/RSU) or authorisation from the Labour Inspectorate, before installing the system',
        de: 'Gewerkschaftsvereinbarung (RSA/RSU) oder Genehmigung der Arbeitsaufsichtsbehörde, bevor das System installiert wird',
        fr: "Accord syndical (RSA/RSU) ou autorisation de l'Inspection du travail, avant d'installer le système",
        es: 'Acuerdo sindical (RSA/RSU) o autorización de la Inspección de Trabajo, antes de instalar el sistema',
        nl: 'Vakbondsovereenkomst (RSA/RSU) of toestemming van de Arbeidsinspectie, voordat het systeem wordt geïnstalleerd',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il GPS è uno strumento da cui può derivare un controllo a distanza dei lavoratori. L’art. 4 dello Statuto dei Lavoratori lo consente solo dopo accordo sindacale con RSA o RSU, oppure autorizzazione dell’Ispettorato Territoriale del Lavoro. Installare prima di questo passaggio, o usarlo in modo difforme da quanto autorizzato, è la strada più rapida verso la sanzione.',
        en: 'GPS is a tool that can lead to remote monitoring of workers. Article 4 of the Workers\' Statute allows it only after a trade union agreement with the RSA or RSU, or authorisation from the Territorial Labour Inspectorate. Installing it before this step, or using it differently from what was authorised, is the fastest route to a penalty.',
        de: 'GPS ist ein Instrument, das zu einer Fernüberwachung der Beschäftigten führen kann. Artikel 4 des Arbeitnehmerstatuts erlaubt es nur nach einer Gewerkschaftsvereinbarung mit der RSA oder RSU oder einer Genehmigung der territorialen Arbeitsaufsichtsbehörde. Es vor diesem Schritt zu installieren oder anders als genehmigt zu nutzen, ist der schnellste Weg zur Sanktion.',
        fr: "Le GPS est un outil dont peut découler un contrôle à distance des travailleurs. L'article 4 du Statut des travailleurs ne l'autorise qu'après un accord syndical avec la RSA ou la RSU, ou une autorisation de l'Inspection territoriale du travail. L'installer avant cette étape, ou l'utiliser de façon différente de ce qui a été autorisé, est le chemin le plus rapide vers la sanction.",
        es: 'El GPS es una herramienta de la que puede derivar un control a distancia de los trabajadores. El artículo 4 del Estatuto de los Trabajadores solo lo permite tras un acuerdo sindical con la RSA o la RSU, o una autorización de la Inspección Territorial de Trabajo. Instalarlo antes de este paso, o usarlo de forma distinta a lo autorizado, es el camino más rápido hacia la sanción.',
        nl: 'GPS is een instrument waaruit toezicht op afstand van werknemers kan voortvloeien. Artikel 4 van het Werknemersstatuut staat dit alleen toe na een vakbondsovereenkomst met de RSA of RSU, of toestemming van de Territoriale Arbeidsinspectie. Het installeren vóór deze stap, of het gebruiken op een andere manier dan toegestaan, is de snelste weg naar een sanctie.',
      },
      fonte: FONTE_STATUTO_ART4,
    },
    {
      voce: {
        it: 'Informativa scritta ai lavoratori, completa e veritiera (art. 13 GDPR)',
        en: 'Written privacy notice to workers, complete and truthful (Article 13 GDPR)',
        de: 'Schriftliche Datenschutzinformation für die Beschäftigten, vollständig und wahrheitsgemäß (Artikel 13 DSGVO)',
        fr: 'Information écrite aux travailleurs, complète et véridique (article 13 RGPD)',
        es: 'Información escrita a los trabajadores, completa y veraz (artículo 13 RGPD)',
        nl: 'Schriftelijke privacyverklaring aan werknemers, volledig en waarheidsgetrouw (artikel 13 AVG)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il lavoratore deve sapere in modo chiaro e veritiero che viene geolocalizzato, come, quando e perché (art. 13 GDPR). Nel caso degli autotrasporti l’informativa c’era ma piena di incongruenze e refusi: per il Garante è come non averla.',
        en: 'The worker must know clearly and truthfully that they are being geolocated, how, when and why (Article 13 GDPR). In the road haulage case the notice existed but was full of inconsistencies and typos: for the Garante that is the same as not having one.',
        de: 'Die beschäftigte Person muss klar und wahrheitsgemäß wissen, dass sie geolokalisiert wird, wie, wann und warum (Artikel 13 DSGVO). Im Fall des Güterkraftverkehrs gab es die Information zwar, sie war aber voller Widersprüche und Tippfehler: für die Garante ist das gleichbedeutend damit, keine zu haben.',
        fr: "Le travailleur doit savoir de manière claire et véridique qu'il est géolocalisé, comment, quand et pourquoi (article 13 RGPD). Dans l'affaire du transport routier, l'information existait mais était pleine d'incohérences et de fautes de frappe : pour le Garante, c'est comme ne pas en avoir.",
        es: 'El trabajador debe saber de forma clara y veraz que está siendo geolocalizado, cómo, cuándo y por qué (artículo 13 RGPD). En el caso del transporte por carretera la información existía, pero estaba llena de incongruencias y erratas: para el Garante es como no tenerla.',
        nl: 'De werknemer moet duidelijk en waarheidsgetrouw weten dat hij wordt gelokaliseerd, hoe, wanneer en waarom (artikel 13 AVG). In de zaak van het wegtransport bestond de verklaring wel, maar zat ze vol tegenstrijdigheden en typefouten: voor de Garante staat dat gelijk aan er geen hebben.',
      },
      fonte: FONTE_PROVV_AUTOTRASPORTI,
    },
    {
      voce: {
        it: 'Divieto di tracciamento continuo: posizione raccolta solo quando serve (minimizzazione)',
        en: 'No continuous tracking: location collected only when needed (data minimisation)',
        de: 'Verbot der dauerhaften Ortung: Standort nur erhoben, wenn es erforderlich ist (Datenminimierung)',
        fr: 'Interdiction du suivi continu : position collectée uniquement quand c\'est nécessaire (minimisation)',
        es: 'Prohibición del seguimiento continuo: ubicación recogida solo cuando es necesario (minimización)',
        nl: 'Verbod op continue tracking: locatie alleen verzameld wanneer nodig (minimalisatie)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Seguire il mezzo h24, pause comprese, viola il principio di minimizzazione (art. 5 GDPR). La posizione si raccoglie quando serve a una finalità legittima, non per sapere sempre dov’è la persona. Il tracciamento continuo è uno dei motivi della sanzione da 50.000 € all’azienda di autotrasporti.',
        en: 'Following the vehicle 24/7, breaks included, violates the data minimisation principle (Article 5 GDPR). Location is collected when it serves a legitimate purpose, not to always know where the person is. Continuous tracking is one of the reasons for the 50,000 EUR penalty against the road haulage company.',
        de: 'Das Fahrzeug rund um die Uhr zu verfolgen, einschließlich der Pausen, verstößt gegen den Grundsatz der Datenminimierung (Artikel 5 DSGVO). Der Standort wird erhoben, wenn er einem legitimen Zweck dient, nicht um stets zu wissen, wo sich die Person befindet. Die dauerhafte Ortung ist einer der Gründe für die Sanktion von 50.000 EUR gegen das Güterkraftverkehrsunternehmen.',
        fr: "Suivre le véhicule 24h/24, pauses comprises, viole le principe de minimisation (article 5 RGPD). La position est collectée quand elle sert une finalité légitime, non pour savoir en permanence où se trouve la personne. Le suivi continu est l'une des raisons de la sanction de 50 000 EUR infligée à l'entreprise de transport routier.",
        es: 'Seguir el vehículo las 24 horas, pausas incluidas, viola el principio de minimización (artículo 5 RGPD). La ubicación se recoge cuando sirve a una finalidad legítima, no para saber siempre dónde está la persona. El seguimiento continuo es uno de los motivos de la sanción de 50.000 EUR a la empresa de transporte por carretera.',
        nl: 'Het voertuig 24/7 volgen, pauzes inbegrepen, schendt het minimalisatiebeginsel (artikel 5 AVG). De locatie wordt verzameld wanneer ze een legitiem doel dient, niet om altijd te weten waar de persoon is. Continue tracking is een van de redenen voor de boete van 50.000 EUR aan het wegtransportbedrijf.',
      },
      fonte: FONTE_PROVV_AUTOTRASPORTI,
    },
    {
      voce: {
        it: 'Uso dei dati per la sola finalita dichiarata, senza riuso per sanzioni disciplinari',
        en: 'Use of data only for the declared purpose, with no reuse for disciplinary sanctions',
        de: 'Nutzung der Daten ausschließlich für den erklärten Zweck, ohne Weiterverwendung für Disziplinarmaßnahmen',
        fr: "Utilisation des données uniquement pour la finalité déclarée, sans réutilisation à des fins de sanctions disciplinaires",
        es: 'Uso de los datos solo para la finalidad declarada, sin reutilización para sanciones disciplinarias',
        nl: 'Gebruik van de gegevens uitsluitend voor het verklaarde doel, zonder hergebruik voor disciplinaire sancties',
      },
      risposta: 'si',
      dettaglio: {
        it: "I dati di posizione vanno usati solo per la finalita per cui sono stati raccolti. Riutilizzarli per un altro scopo (per esempio dati raccolti per verificare la sede di lavoro e poi usati per avviare un procedimento disciplinare) e uno sviamento di finalita, e il Garante lo colpisce sempre. E l'errore costato caro all'ente pubblico nel caso ARSAC.",
        en: "Location data must be used only for the purpose for which it was collected. Reusing it for another purpose (for example data collected to verify the workplace and then used to start a disciplinary procedure) is a misuse of purpose, and the Garante always sanctions it. It is the mistake that cost the public body dearly in the ARSAC case.",
        de: 'Standortdaten dürfen nur für den Zweck genutzt werden, für den sie erhoben wurden. Sie für einen anderen Zweck weiterzuverwenden (etwa zur Überprüfung des Arbeitsorts erhobene Daten, die dann für die Einleitung eines Disziplinarverfahrens genutzt werden) ist eine Zweckentfremdung, und die Garante ahndet das stets. Es ist der Fehler, der die öffentliche Einrichtung im Fall ARSAC teuer zu stehen kam.',
        fr: "Les données de position ne doivent être utilisées que pour la finalité pour laquelle elles ont été collectées. Les réutiliser à une autre fin (par exemple des données collectées pour vérifier le lieu de travail puis utilisées pour engager une procédure disciplinaire) constitue un détournement de finalité, et le Garante le sanctionne toujours. C'est l'erreur qui a coûté cher à l'organisme public dans l'affaire ARSAC.",
        es: 'Los datos de posición deben usarse solo para la finalidad para la que se recogieron. Reutilizarlos con otro fin (por ejemplo, datos recogidos para verificar el lugar de trabajo y luego usados para iniciar un procedimiento disciplinario) es una desviación de finalidad, y el Garante siempre la sanciona. Es el error que le salió caro al organismo público en el caso ARSAC.',
        nl: 'Locatiegegevens mogen alleen worden gebruikt voor het doel waarvoor ze zijn verzameld. Ze hergebruiken voor een ander doel (bijvoorbeeld gegevens verzameld om de werkplek te controleren en vervolgens gebruikt om een disciplinaire procedure te starten) is een doelafwijking, en de Garante bestraft dat altijd. Het is de fout die het overheidsorgaan in de ARSAC-zaak duur kwam te staan.',
      },
      fonte: FONTE_PROVV_ARSAC,
    },
    {
      voce: {
        it: "Valutazione d'impatto sulla protezione dei dati (DPIA)",
        en: 'Data Protection Impact Assessment (DPIA)',
        de: 'Datenschutz-Folgenabschätzung (DSFA)',
        fr: "Analyse d'impact relative à la protection des données (AIPD)",
        es: 'Evaluación de impacto relativa a la protección de datos (EIPD)',
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: 'Per un trattamento di questo tipo serve la DPIA (art. 35 GDPR) quando il rischio è elevato. Ometterla, come nel caso dell’ente pubblico, è di per sé una violazione.',
        en: 'For processing of this kind a DPIA (Article 35 GDPR) is required when the risk is high. Omitting it, as in the public body case, is in itself a violation.',
        de: 'Für eine Verarbeitung dieser Art ist bei hohem Risiko eine DSFA (Artikel 35 DSGVO) erforderlich. Sie wegzulassen, wie im Fall der öffentlichen Einrichtung, stellt für sich genommen einen Verstoß dar.',
        fr: "Pour un traitement de ce type, l'AIPD (article 35 RGPD) est requise lorsque le risque est élevé. L'omettre, comme dans l'affaire de l'organisme public, constitue en soi une violation.",
        es: 'Para un tratamiento de este tipo se requiere la EIPD (artículo 35 RGPD) cuando el riesgo es elevado. Omitirla, como en el caso del organismo público, es de por sí una infracción.',
        nl: 'Voor een verwerking van dit type is een DPIA (artikel 35 AVG) vereist wanneer het risico hoog is. Deze weglaten, zoals in de zaak van het overheidsorgaan, is op zichzelf al een schending.',
      },
      fonte: FONTE_PROVV_ARSAC,
    },
    {
      voce: {
        it: 'Conservazione dei dati limitata al tempo strettamente necessario',
        en: 'Data retention limited to the strictly necessary period',
        de: 'Speicherung der Daten beschränkt auf die unbedingt erforderliche Zeit',
        fr: 'Conservation des données limitée à la durée strictement nécessaire',
        es: 'Conservación de los datos limitada al tiempo estrictamente necesario',
        nl: 'Bewaring van de gegevens beperkt tot de strikt noodzakelijke termijn',
      },
      risposta: 'si',
      dettaglio: {
        it: 'I dati si tengono per il tempo necessario alla finalità, non "per sicurezza" a tempo indefinito. Nel caso degli autotrasporti la conservazione per 180 giorni ha contribuito alla sanzione.',
        en: 'Data is kept for the time necessary for the purpose, not "just in case" indefinitely. In the road haulage case, retention for 180 days contributed to the penalty.',
        de: 'Die Daten werden für die für den Zweck erforderliche Zeit aufbewahrt, nicht "zur Sicherheit" unbegrenzt. Im Fall des Güterkraftverkehrs trug die Speicherung über 180 Tage zur Sanktion bei.',
        fr: 'Les données sont conservées le temps nécessaire à la finalité, et non "par sécurité" pour une durée indéterminée. Dans l\'affaire du transport routier, la conservation pendant 180 jours a contribué à la sanction.',
        es: 'Los datos se conservan durante el tiempo necesario para la finalidad, no "por seguridad" de forma indefinida. En el caso del transporte por carretera, la conservación durante 180 días contribuyó a la sanción.',
        nl: 'De gegevens worden bewaard voor de tijd die nodig is voor het doel, niet "voor de zekerheid" voor onbepaalde tijd. In de zaak van het wegtransport droeg de bewaring gedurende 180 dagen bij aan de sanctie.',
      },
      fonte: FONTE_PROVV_AUTOTRASPORTI,
    },
    {
      voce: {
        it: 'Finalita legittima e dichiarata (organizzativa, di sicurezza, di tutela del patrimonio)',
        en: 'Legitimate and declared purpose (organisational, safety, protection of company assets)',
        de: 'Legitimer und erklärter Zweck (organisatorisch, Sicherheit, Schutz des Betriebsvermögens)',
        fr: "Finalité légitime et déclarée (organisationnelle, de sécurité, de protection du patrimoine)",
        es: 'Finalidad legítima y declarada (organizativa, de seguridad, de protección del patrimonio)',
        nl: 'Legitiem en verklaard doel (organisatorisch, veiligheid, bescherming van het bedrijfsvermogen)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Esigenze organizzative, di sicurezza o di tutela del patrimonio aziendale sono finalità legittime. Mai "controllare cosa fa il dipendente": è esattamente la cosa che l’art. 4 vieta.',
        en: 'Organisational, safety or company asset protection needs are legitimate purposes. Never "checking what the employee does": that is exactly what Article 4 prohibits.',
        de: 'Organisatorische Erfordernisse, Sicherheit oder der Schutz des Betriebsvermögens sind legitime Zwecke. Niemals "kontrollieren, was die beschäftigte Person tut": genau das verbietet Artikel 4.',
        fr: "Les besoins d'organisation, de sécurité ou de protection du patrimoine de l'entreprise sont des finalités légitimes. Jamais \"contrôler ce que fait le salarié\" : c'est exactement ce que l'article 4 interdit.",
        es: 'Las necesidades organizativas, de seguridad o de protección del patrimonio de la empresa son finalidades legítimas. Nunca "controlar lo que hace el empleado": es exactamente lo que prohíbe el artículo 4.',
        nl: 'Organisatorische behoeften, veiligheid of bescherming van het bedrijfsvermogen zijn legitieme doelen. Nooit "controleren wat de werknemer doet": dat is precies wat artikel 4 verbiedt.',
      },
      fonte: FONTE_STATUTO_ART4,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Completa la procedura dell’art. 4 prima, non dopo: accordo con le rappresentanze sindacali (RSA o RSU) oppure autorizzazione dell’Ispettorato Territoriale del Lavoro. Senza, sei fuori dal primo minuto.',
        en: 'Complete the Article 4 procedure first, not later: an agreement with the trade union representatives (RSA or RSU) or authorisation from the Territorial Labour Inspectorate. Without it, you are out from the first minute.',
        de: 'Schließen Sie das Verfahren nach Artikel 4 vorher ab, nicht danach: eine Vereinbarung mit den Gewerkschaftsvertretungen (RSA oder RSU) oder eine Genehmigung der territorialen Arbeitsaufsichtsbehörde. Ohne sie sind Sie schon ab der ersten Minute außen vor.',
        fr: "Achevez d'abord la procédure de l'article 4, pas après : un accord avec les représentations syndicales (RSA ou RSU) ou une autorisation de l'Inspection territoriale du travail. Sans cela, vous êtes hors-jeu dès la première minute.",
        es: 'Completa el procedimiento del artículo 4 antes, no después: un acuerdo con las representaciones sindicales (RSA o RSU) o una autorización de la Inspección Territorial de Trabajo. Sin ello, estás fuera desde el primer minuto.',
        nl: 'Voltooi de procedure van artikel 4 eerst, niet later: een overeenkomst met de vakbondsvertegenwoordigingen (RSA of RSU) of toestemming van de Territoriale Arbeidsinspectie. Zonder die ben je vanaf de eerste minuut buitenspel.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Definisci una finalità legittima e dichiarata: esigenze organizzative, di sicurezza, di tutela del patrimonio aziendale. Mai "controllare cosa fa il dipendente".',
        en: 'Define a legitimate and declared purpose: organisational, safety or company asset protection needs. Never "checking what the employee does".',
        de: 'Legen Sie einen legitimen und erklärten Zweck fest: organisatorische Erfordernisse, Sicherheit oder Schutz des Betriebsvermögens. Niemals "kontrollieren, was die beschäftigte Person tut".',
        fr: "Définissez une finalité légitime et déclarée : besoins d'organisation, de sécurité, de protection du patrimoine de l'entreprise. Jamais \"contrôler ce que fait le salarié\".",
        es: 'Define una finalidad legítima y declarada: necesidades organizativas, de seguridad, de protección del patrimonio de la empresa. Nunca "controlar lo que hace el empleado".',
        nl: 'Bepaal een legitiem en verklaard doel: organisatorische behoeften, veiligheid, bescherming van het bedrijfsvermogen. Nooit "controleren wat de werknemer doet".',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Predisponi un’informativa completa e vera ai sensi dell’art. 13 GDPR: senza refusi, senza zone grigie.',
        en: 'Prepare a complete and truthful privacy notice under Article 13 GDPR: no typos, no grey areas.',
        de: 'Erstellen Sie eine vollständige und wahrheitsgemäße Datenschutzinformation nach Artikel 13 DSGVO: ohne Tippfehler, ohne Grauzonen.',
        fr: "Préparez une information complète et véridique au sens de l'article 13 RGPD : sans fautes de frappe, sans zones grises.",
        es: 'Prepara una información completa y veraz conforme al artículo 13 RGPD: sin erratas, sin zonas grises.',
        nl: 'Stel een volledige en waarheidsgetrouwe privacyverklaring op conform artikel 13 AVG: zonder typefouten, zonder grijze gebieden.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Applica la minimizzazione: raccogli solo i dati che servono, solo quando servono. Niente tracciamento durante le pause, prevedi la possibilità di spegnimento.',
        en: 'Apply data minimisation: collect only the data you need, only when you need it. No tracking during breaks, provide the ability to switch it off.',
        de: 'Wenden Sie die Datenminimierung an: erheben Sie nur die Daten, die Sie benötigen, und nur dann, wenn Sie sie benötigen. Keine Ortung während der Pausen, sehen Sie eine Abschaltmöglichkeit vor.',
        fr: "Appliquez la minimisation : ne collectez que les données nécessaires, uniquement quand elles sont nécessaires. Pas de suivi pendant les pauses, prévoyez la possibilité de désactivation.",
        es: 'Aplica la minimización: recoge solo los datos que necesitas, solo cuando los necesitas. Sin seguimiento durante las pausas, prevé la posibilidad de apagado.',
        nl: 'Pas minimalisatie toe: verzamel alleen de gegevens die je nodig hebt, alleen wanneer je ze nodig hebt. Geen tracking tijdens pauzes, voorzie de mogelijkheid om het uit te schakelen.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Limita la conservazione: i dati si tengono per il tempo necessario alla finalità, non a tempo indefinito.',
        en: 'Limit retention: data is kept for the time necessary for the purpose, not indefinitely.',
        de: 'Begrenzen Sie die Speicherung: die Daten werden für die für den Zweck erforderliche Zeit aufbewahrt, nicht unbegrenzt.',
        fr: 'Limitez la conservation : les données sont conservées le temps nécessaire à la finalité, et non pour une durée indéterminée.',
        es: 'Limita la conservación: los datos se conservan durante el tiempo necesario para la finalidad, no de forma indefinida.',
        nl: 'Beperk de bewaring: de gegevens worden bewaard voor de tijd die nodig is voor het doel, niet voor onbepaalde tijd.',
      },
    },
    {
      passo: 6,
      descrizione: {
        it: 'Svolgi la valutazione d’impatto (DPIA) quando il rischio è elevato (art. 35 GDPR).',
        en: 'Carry out the impact assessment (DPIA) when the risk is high (Article 35 GDPR).',
        de: 'Führen Sie die Folgenabschätzung (DSFA) durch, wenn das Risiko hoch ist (Artikel 35 DSGVO).',
        fr: "Réalisez l'analyse d'impact (AIPD) lorsque le risque est élevé (article 35 RGPD).",
        es: 'Realiza la evaluación de impacto (EIPD) cuando el riesgo es elevado (artículo 35 RGPD).',
        nl: 'Voer de effectbeoordeling (DPIA) uit wanneer het risico hoog is (artikel 35 AVG).',
      },
    },
    {
      passo: 7,
      descrizione: {
        it: 'Mantieni un solo scopo: i dati raccolti per una finalità non si riusano per sanzionare. Mai.',
        en: 'Keep a single purpose: data collected for one purpose is not reused to sanction. Ever.',
        de: 'Bleiben Sie bei einem einzigen Zweck: für einen Zweck erhobene Daten werden nicht zur Sanktionierung weiterverwendet. Niemals.',
        fr: 'Tenez-vous à une seule finalité : les données collectées pour une finalité ne sont pas réutilisées pour sanctionner. Jamais.',
        es: 'Mantén una sola finalidad: los datos recogidos para una finalidad no se reutilizan para sancionar. Nunca.',
        nl: 'Houd één enkel doel aan: gegevens die voor één doel zijn verzameld, worden niet hergebruikt om te sanctioneren. Nooit.',
      },
    },
    {
      passo: 8,
      descrizione: {
        it: 'In caso di cambio sistema: se cambi sistema o software di monitoraggio, aggiorna e ri-consegna l’informativa, e verifica se va rinnovato l’accordo sindacale (art. 4) o l’autorizzazione dell’Ispettorato. Spesso cambiano fornitore (responsabile del trattamento), dati raccolti e modalità: quella firmata prima non basta.',
        en: 'If you switch systems: when you change your monitoring system or software, update and re-issue the privacy notice, and check whether the trade-union agreement (Art. 4) or the Labour Inspectorate authorisation needs renewing. The provider (data processor), the data collected and the methods often change: the one signed earlier is not enough.',
        de: 'Bei Systemwechsel: Wenn Sie Ihr Überwachungssystem oder Ihre Software wechseln, aktualisieren Sie die Datenschutzinformation und händigen Sie sie erneut aus und prüfen Sie, ob die Gewerkschaftsvereinbarung (Art. 4) oder die Genehmigung der Arbeitsaufsichtsbehörde erneuert werden muss. Anbieter (Auftragsverarbeiter), erhobene Daten und Modalitäten ändern sich oft: die zuvor ausgehändigte genügt nicht.',
        fr: 'En cas de changement de système : si vous changez de système ou de logiciel de surveillance, mettez à jour et remettez l’information, et vérifiez si l’accord syndical (art. 4) ou l’autorisation de l’Inspection du travail doit être renouvelé. Le fournisseur (sous-traitant), les données collectées et les modalités changent souvent : celle remise auparavant ne suffit pas.',
        es: 'En caso de cambio de sistema: si cambias de sistema o software de monitorización, actualiza y vuelve a entregar la información, y comprueba si debe renovarse el acuerdo sindical (art. 4) o la autorización de la Inspección de Trabajo. A menudo cambian el proveedor (encargado del tratamiento), los datos recogidos y las modalidades: la entregada antes no basta.',
        nl: 'Bij een systeemwissel: als je van monitoringsysteem of -software verandert, werk de privacyverklaring bij en verstrek deze opnieuw, en controleer of de vakbondsovereenkomst (art. 4) of de toestemming van de Arbeidsinspectie moet worden vernieuwd. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'Garante per la protezione dei dati personali',
      urlFonte: 'https://www.garanteprivacy.it',
      verificatoIl: '2026-06-15',
    },
  ],

  // Il download va instradato tramite la cattura lead-magnet esistente
  // (leadMagnet 'informativa-gps', MailerLite) nel Task della pagina.
  modelloPdf: {
    disponibile: true,
    lingua: 'it',
    url: '/downloads/fac-simile-informativa-gps-dipendenti.pdf',
  },

  sanzioneMax: {
    importo: {
      it: '120.000 €',
      en: 'EUR 120,000',
      de: '120.000 EUR',
      fr: '120 000 EUR',
      es: '120.000 EUR',
      nl: '120.000 EUR',
    },
    casoCitato: {
      it: 'Garante Privacy, newsletter del 29 gennaio 2026: società del settore sementi, 5 dipendenti, dispositivi sui veicoli che monitoravano lo stile di guida dei lavoratori.',
      en: 'Garante Privacy, newsletter of 29 January 2026: a company in the seed sector, 5 employees, devices on vehicles that monitored the workers\' driving style.',
      de: 'Garante Privacy, Newsletter vom 29. Januar 2026: ein Unternehmen aus der Saatgutbranche, 5 Beschäftigte, Geräte in den Fahrzeugen, die den Fahrstil der Beschäftigten überwachten.',
      fr: "Garante Privacy, newsletter du 29 janvier 2026 : une société du secteur des semences, 5 salariés, des dispositifs sur les véhicules qui surveillaient le style de conduite des travailleurs.",
      es: 'Garante Privacy, boletín del 29 de enero de 2026: una empresa del sector de las semillas, 5 empleados, dispositivos en los vehículos que monitorizaban el estilo de conducción de los trabajadores.',
      nl: 'Garante Privacy, nieuwsbrief van 29 januari 2026: een bedrijf in de zaadsector, 5 werknemers, apparaten in de voertuigen die de rijstijl van de werknemers monitorden.',
    },
    urlFonte: 'https://www.garanteprivacy.it',
  },

  fonti: [
    FONTE_PROVV_AUTOTRASPORTI,
    FONTE_PROVV_ARSAC,
    {
      titolo:
        'Garante Privacy, newsletter del 29 gennaio 2026 (sanzione settore sementi)',
      url: 'https://www.garanteprivacy.it',
    },
    FONTE_STATUTO_ART4,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
