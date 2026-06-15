/**
 * Scheda-paese Portogallo per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * art. 20 del Codigo do Trabalho (mezzi di sorveglianza a distanza), Deliberacao
 * 7680/2014 della CNPD sulla geolocalizzazione nel contesto lavorativo, art. 28
 * della Lei 58/2019 sulle relazioni di lavoro, lista CNPD dei trattamenti che
 * richiedono una valutazione d'impatto, portale CNPD per le segnalazioni e GDPR.
 *
 * Il Portogallo non e' uno Stato federale: l'autorita' garante e' unica e
 * nazionale (CNPD), senza ripartizioni regionali. Nessun numero, URL o
 * autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_CT_20 = {
  titolo: 'Codigo do Trabalho, art. 20 (mezzi di sorveglianza a distanza)',
  url: 'https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?nid=1047&tabela=leis',
};
const FONTE_CNPD_7680 = {
  titolo:
    'CNPD, Deliberacao 7680/2014 (geolocalizzazione nel contesto lavorativo)',
  url: 'https://www.cnpd.pt/media/zvxmdfad/del_7680-2014_geo_laboral.pdf',
};
const FONTE_LEI_58_28 = {
  titolo: 'Lei 58/2019, art. 28 (relazioni di lavoro)',
  url: 'https://files.dre.pt/1s/2019/08/15100/0000300040.pdf',
};
const FONTE_CNPD_AIPD = {
  titolo: "CNPD, valutazione d'impatto sulla protezione dei dati",
  url: 'https://www.cnpd.pt/organizacoes/outras-obrigacoes/avaliacao-de-impacto/',
};
const FONTE_CNPD_SEGNALAZIONI = {
  titolo: 'CNPD, presentare una segnalazione',
  url: 'https://www.cnpd.pt/cidadaos/participacoes/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const portogallo: SchedaPaese = {
  codiceISO: 'PT',
  slugCanonico: 'portogallo',
  nome: 'Portogallo',
  nomi: {
    it: 'Portogallo',
    en: 'Portugal',
    'en-us': 'Portugal',
    'en-gb': 'Portugal',
    'en-au': 'Portugal',
    'en-ie': 'Portugal',
    'en-ca': 'Portugal',
    de: 'Portugal',
    nl: 'Portugal',
    fr: 'Portugal',
    es: 'Portugal',
    pt: 'Portugal',
    da: 'Portugal',
    sv: 'Portugal',
    nb: 'Portugal',
    ru: 'Португалия',
  },
  bandiera: '🇵🇹',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'CNPD (Comissao Nacional de Protecao de Dados)',
    portale: FONTE_CNPD_SEGNALAZIONI.url,
    urlFonte: FONTE_CNPD_SEGNALAZIONI.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "Il Portogallo ha un'unica autorita nazionale, la CNPD; nessuna ripartizione regionale.",
      en: 'Portugal has a single national authority, the CNPD; there is no regional breakdown.',
      de: 'Portugal hat eine einzige nationale Behoerde, die CNPD; es gibt keine regionale Aufteilung.',
      fr: 'Le Portugal dispose d\'une seule autorite nationale, la CNPD; il n\'y a pas de repartition regionale.',
      es: 'Portugal tiene una unica autoridad nacional, la CNPD; no existe division regional.',
      nl: 'Portugal heeft een enkele nationale autoriteit, de CNPD; er is geen regionale onderverdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: "Informazione ai lavoratori sull'esistenza e finalita della sorveglianza (art. 20 Codigo do Trabalho)",
        en: 'Informing workers of the existence and purpose of the surveillance (art. 20 Codigo do Trabalho)',
        de: 'Unterrichtung der Arbeitnehmer ueber Bestehen und Zweck der Ueberwachung (Art. 20 Codigo do Trabalho)',
        fr: 'Information des travailleurs sur l\'existence et la finalite de la surveillance (art. 20 Codigo do Trabalho)',
        es: 'Informacion a los trabajadores sobre la existencia y la finalidad de la vigilancia (art. 20 Codigo do Trabalho)',
        nl: 'Informatie aan werknemers over het bestaan en het doel van het toezicht (art. 20 Codigo do Trabalho)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il datore deve informare i lavoratori dell'esistenza e dello scopo dei mezzi di sorveglianza usati.",
        en: 'The employer must inform workers of the existence and purpose of the surveillance measures used.',
        de: 'Der Arbeitgeber muss die Arbeitnehmer ueber das Bestehen und den Zweck der eingesetzten Ueberwachungsmittel unterrichten.',
        fr: 'L\'employeur doit informer les travailleurs de l\'existence et de la finalite des moyens de surveillance utilises.',
        es: 'El empleador debe informar a los trabajadores de la existencia y la finalidad de los medios de vigilancia utilizados.',
        nl: 'De werkgever moet werknemers informeren over het bestaan en het doel van de gebruikte toezichtmiddelen.',
      },
      fonte: FONTE_CT_20,
    },
    {
      voce: {
        it: 'Divieto di usare la sorveglianza a distanza per controllare il rendimento del lavoratore (art. 20 CT)',
        en: 'Prohibition on using remote surveillance to monitor the worker\'s performance (art. 20 CT)',
        de: 'Verbot, die Fernueberwachung zur Kontrolle der Arbeitsleistung des Arbeitnehmers zu nutzen (Art. 20 CT)',
        fr: 'Interdiction d\'utiliser la surveillance a distance pour controler le rendement du travailleur (art. 20 CT)',
        es: 'Prohibicion de usar la vigilancia a distancia para controlar el rendimiento del trabajador (art. 20 CT)',
        nl: 'Verbod om toezicht op afstand te gebruiken om de prestaties van de werknemer te controleren (art. 20 CT)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La sorveglianza a distanza non puo servire a controllare la prestazione professionale; e ammessa solo per la protezione e sicurezza di persone e beni o per particolari esigenze dell'attivita.",
        en: 'Remote surveillance may not be used to monitor professional performance; it is allowed only for the protection and safety of people and property or for particular needs of the activity.',
        de: 'Die Fernueberwachung darf nicht zur Kontrolle der beruflichen Leistung dienen; sie ist nur zum Schutz und zur Sicherheit von Personen und Sachen oder fuer besondere Erfordernisse der Taetigkeit zulaessig.',
        fr: 'La surveillance a distance ne peut servir a controler la prestation professionnelle; elle n\'est admise que pour la protection et la securite des personnes et des biens ou pour des besoins particuliers de l\'activite.',
        es: 'La vigilancia a distancia no puede servir para controlar la prestacion profesional; solo se admite para la proteccion y seguridad de personas y bienes o para necesidades particulares de la actividad.',
        nl: 'Toezicht op afstand mag niet dienen om de professionele prestaties te controleren; het is alleen toegestaan voor de bescherming en veiligheid van personen en goederen of voor bijzondere behoeften van de activiteit.',
      },
      fonte: FONTE_CT_20,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorita prima di installare",
        en: 'Prior authorisation from an authority before installation',
        de: 'Vorherige Genehmigung einer Behoerde vor der Installation',
        fr: 'Autorisation prealable d\'une autorite avant l\'installation',
        es: 'Autorizacion previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Con il GDPR e venuta meno la vecchia autorizzazione preventiva della CNPD; resta un controllo a posteriori. Nota: l'art. 21 CT non e stato esplicitamente abrogato e la dottrina e divisa, ma in pratica l'autorizzazione preventiva non viene piu richiesta.",
        en: 'With the GDPR the old prior authorisation by the CNPD has fallen away; an a posteriori review remains. Note: art. 21 CT has not been expressly repealed and legal opinion is divided, but in practice prior authorisation is no longer required.',
        de: 'Mit der DSGVO ist die alte vorherige Genehmigung durch die CNPD weggefallen; es bleibt eine nachtraegliche Kontrolle. Hinweis: Art. 21 CT wurde nicht ausdruecklich aufgehoben und die Lehre ist geteilt, in der Praxis wird die vorherige Genehmigung jedoch nicht mehr verlangt.',
        fr: 'Avec le RGPD, l\'ancienne autorisation prealable de la CNPD a disparu; un controle a posteriori subsiste. Note: l\'art. 21 CT n\'a pas ete expressement abroge et la doctrine est divisee, mais en pratique l\'autorisation prealable n\'est plus exigee.',
        es: 'Con el RGPD ha desaparecido la antigua autorizacion previa de la CNPD; queda un control a posteriori. Nota: el art. 21 CT no ha sido expresamente derogado y la doctrina esta dividida, pero en la practica ya no se exige la autorizacion previa.',
        nl: 'Met de AVG is de oude voorafgaande toestemming van de CNPD vervallen; een controle achteraf blijft bestaan. Opmerking: art. 21 CT is niet uitdrukkelijk ingetrokken en de rechtsleer is verdeeld, maar in de praktijk wordt voorafgaande toestemming niet langer vereist.',
      },
      fonte: FONTE_LEI_58_28,
    },
    {
      voce: {
        it: 'Geolocalizzazione proporzionata, limitata all\'orario di lavoro, con modo privato fuori orario',
        en: 'Proportionate geolocation, limited to working hours, with a private mode outside those hours',
        de: 'Verhaeltnismaessige Geolokalisierung, auf die Arbeitszeit beschraenkt, mit Privatmodus ausserhalb der Arbeitszeit',
        fr: 'Geolocalisation proportionnee, limitee au temps de travail, avec un mode prive en dehors des heures',
        es: 'Geolocalizacion proporcionada, limitada al horario de trabajo, con modo privado fuera del horario',
        nl: 'Evenredige geolocatie, beperkt tot de werktijd, met een prive-modus buiten de werktijd',
      },
      risposta: 'si',
      dettaglio: {
        it: "Per la CNPD la geolocalizzazione non puo localizzare il lavoratore ne monitorarne il rendimento, non puo estendersi a pause e riposi, e il lavoratore deve poter passare al modo privato fuori dall'orario. Il consenso del lavoratore non e una base valida.",
        en: 'According to the CNPD, geolocation may not locate the worker nor monitor their performance, may not extend to breaks and rest periods, and the worker must be able to switch to private mode outside working hours. The worker\'s consent is not a valid legal basis.',
        de: 'Nach Auffassung der CNPD darf die Geolokalisierung den Arbeitnehmer weder orten noch seine Leistung ueberwachen, sie darf sich nicht auf Pausen und Ruhezeiten erstrecken, und der Arbeitnehmer muss ausserhalb der Arbeitszeit in den Privatmodus wechseln koennen. Die Einwilligung des Arbeitnehmers ist keine gueltige Rechtsgrundlage.',
        fr: 'Pour la CNPD, la geolocalisation ne peut localiser le travailleur ni surveiller son rendement, ne peut s\'etendre aux pauses et aux repos, et le travailleur doit pouvoir passer en mode prive en dehors des heures de travail. Le consentement du travailleur n\'est pas une base juridique valable.',
        es: 'Para la CNPD, la geolocalizacion no puede localizar al trabajador ni monitorizar su rendimiento, no puede extenderse a pausas y descansos, y el trabajador debe poder pasar al modo privado fuera del horario. El consentimiento del trabajador no es una base juridica valida.',
        nl: 'Volgens de CNPD mag geolocatie de werknemer niet lokaliseren noch zijn prestaties controleren, mag zij zich niet uitstrekken tot pauzes en rusttijden, en moet de werknemer buiten werktijd kunnen overschakelen naar de prive-modus. De toestemming van de werknemer is geen geldige rechtsgrond.',
      },
      fonte: FONTE_CNPD_7680,
    },
    {
      voce: {
        it: "Valutazione d'impatto (AIPD) per il tracciamento della localizzazione dei lavoratori",
        en: 'Impact assessment (DPIA) for tracking the location of workers',
        de: 'Datenschutz-Folgenabschaetzung (DSFA) fuer die Standortverfolgung von Arbeitnehmern',
        fr: 'Analyse d\'impact (AIPD) pour le suivi de la localisation des travailleurs',
        es: 'Evaluacion de impacto (EIPD) para el seguimiento de la localizacion de los trabajadores',
        nl: 'Effectbeoordeling (DPIA) voor het volgen van de locatie van werknemers',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista CNPD richiede una valutazione d'impatto per i trattamenti che permettono di tracciare la localizzazione o i comportamenti dei lavoratori con effetto di valutazione o classificazione.",
        en: 'The CNPD list requires an impact assessment for processing that allows tracking the location or behaviour of workers with an evaluation or classification effect.',
        de: 'Die CNPD-Liste verlangt eine Folgenabschaetzung fuer Verarbeitungen, die es ermoeglichen, den Standort oder das Verhalten von Arbeitnehmern mit Bewertungs- oder Einstufungswirkung zu verfolgen.',
        fr: 'La liste de la CNPD exige une analyse d\'impact pour les traitements permettant de suivre la localisation ou les comportements des travailleurs avec un effet d\'evaluation ou de classification.',
        es: 'La lista de la CNPD exige una evaluacion de impacto para los tratamientos que permiten rastrear la localizacion o los comportamientos de los trabajadores con efecto de evaluacion o clasificacion.',
        nl: 'De CNPD-lijst vereist een effectbeoordeling voor verwerkingen die het mogelijk maken de locatie of het gedrag van werknemers te volgen met een evaluatie- of classificatie-effect.',
      },
      fonte: FONTE_CNPD_AIPD,
    },
    {
      voce: {
        it: 'Parere della commissione dei lavoratori, se esiste',
        en: 'Opinion of the workers\' committee, where one exists',
        de: 'Stellungnahme des Arbeitnehmerausschusses, sofern vorhanden',
        fr: 'Avis de la commission des travailleurs, si elle existe',
        es: 'Dictamen de la comision de trabajadores, si existe',
        nl: 'Advies van de ondernemingsraad, indien aanwezig',
      },
      risposta: 'dipende',
      dettaglio: {
        it: 'Dove esiste una commissione dei lavoratori, va richiesto il suo parere.',
        en: 'Where a workers\' committee exists, its opinion must be requested.',
        de: 'Sofern ein Arbeitnehmerausschuss besteht, ist dessen Stellungnahme einzuholen.',
        fr: 'Lorsqu\'une commission des travailleurs existe, son avis doit etre sollicite.',
        es: 'Cuando existe una comision de trabajadores, debe solicitarse su dictamen.',
        nl: 'Waar een ondernemingsraad bestaat, moet zijn advies worden gevraagd.',
      },
      fonte: FONTE_LEI_58_28,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: "Informa i lavoratori sull'esistenza e lo scopo della sorveglianza (art. 20 CT).",
        en: 'Inform workers of the existence and purpose of the surveillance (art. 20 CT).',
        de: 'Unterrichten Sie die Arbeitnehmer ueber das Bestehen und den Zweck der Ueberwachung (Art. 20 CT).',
        fr: 'Informez les travailleurs de l\'existence et de la finalite de la surveillance (art. 20 CT).',
        es: 'Informe a los trabajadores de la existencia y la finalidad de la vigilancia (art. 20 CT).',
        nl: 'Informeer de werknemers over het bestaan en het doel van het toezicht (art. 20 CT).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Verifica la finalita: ammessa solo per sicurezza di persone/beni o esigenze particolari dell\'attivita, mai per controllare il rendimento.',
        en: 'Check the purpose: allowed only for the safety of people/property or particular needs of the activity, never to monitor performance.',
        de: 'Pruefen Sie den Zweck: nur zur Sicherheit von Personen/Sachen oder fuer besondere Erfordernisse der Taetigkeit zulaessig, niemals zur Leistungskontrolle.',
        fr: 'Verifiez la finalite: admise uniquement pour la securite des personnes/biens ou des besoins particuliers de l\'activite, jamais pour controler le rendement.',
        es: 'Verifique la finalidad: admitida solo para la seguridad de personas/bienes o necesidades particulares de la actividad, nunca para controlar el rendimiento.',
        nl: 'Controleer het doel: alleen toegestaan voor de veiligheid van personen/goederen of bijzondere behoeften van de activiteit, nooit om de prestaties te controleren.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Se esiste una commissione dei lavoratori, richiedi il suo parere.',
        en: 'If a workers\' committee exists, request its opinion.',
        de: 'Sofern ein Arbeitnehmerausschuss besteht, holen Sie dessen Stellungnahme ein.',
        fr: 'Si une commission des travailleurs existe, sollicitez son avis.',
        es: 'Si existe una comision de trabajadores, solicite su dictamen.',
        nl: 'Als er een ondernemingsraad bestaat, vraag dan zijn advies.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (AIPD) per il tracciamento della localizzazione.",
        en: 'Carry out the impact assessment (DPIA) for location tracking.',
        de: 'Fuehren Sie die Datenschutz-Folgenabschaetzung (DSFA) fuer die Standortverfolgung durch.',
        fr: 'Realisez l\'analyse d\'impact (AIPD) pour le suivi de la localisation.',
        es: 'Realice la evaluacion de impacto (EIPD) para el seguimiento de la localizacion.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor het volgen van de locatie.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema con minimizzazione: niente tracciamento del paradeiro, modo privato fuori orario, conservazione limitata.',
        en: 'Configure the system with data minimisation: no tracking of whereabouts, private mode outside working hours, limited retention.',
        de: 'Konfigurieren Sie das System mit Datenminimierung: keine Verfolgung des Aufenthaltsorts, Privatmodus ausserhalb der Arbeitszeit, begrenzte Speicherdauer.',
        fr: 'Configurez le systeme avec minimisation des donnees: aucun suivi des deplacements, mode prive en dehors des heures, conservation limitee.',
        es: 'Configure el sistema con minimizacion de datos: sin seguimiento del paradero, modo privado fuera del horario, conservacion limitada.',
        nl: 'Configureer het systeem met gegevensminimalisatie: geen tracking van de verblijfplaats, prive-modus buiten werktijd, beperkte bewaartermijn.',
      },
    },
  ],

  contatti: [
    {
      ente: 'CNPD, segnalazioni',
      portale: FONTE_CNPD_SEGNALAZIONI.url,
      urlFonte: FONTE_CNPD_SEGNALAZIONI.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'fino a 20 milioni di euro o 4% del fatturato annuo mondiale',
      en: 'up to 20 million euro or 4% of total annual worldwide turnover',
      de: 'bis zu 20 Millionen Euro oder 4% des weltweiten Jahresumsatzes',
      fr: 'jusqu\'a 20 millions d\'euros ou 4% du chiffre d\'affaires annuel mondial',
      es: 'hasta 20 millones de euros o el 4% de la facturacion anual mundial',
      nl: 'tot 20 miljoen euro of 4% van de wereldwijde jaaromzet',
    },
    casoCitato: {
      it: "La violazione dell'art. 20 del Codigo do Trabalho e una contraordenacao grave. Dal GDPR la CNPD non pubblica piu le singole decisioni sanzionatorie, quindi non esiste un importo-faro pubblicabile per la geolocalizzazione dei dipendenti; il rischio resta quello generale del GDPR (art. 83): fino a 20 milioni di euro o il 4% del fatturato annuo mondiale.",
      en: 'Breach of art. 20 of the Codigo do Trabalho is a serious administrative offence (contraordenacao grave). Since the GDPR, the CNPD no longer publishes individual sanction decisions, so there is no publishable benchmark figure for employee geolocation; the risk remains the general GDPR one (art. 83): up to 20 million euro or 4% of total annual worldwide turnover.',
      de: 'Der Verstoss gegen Art. 20 des Codigo do Trabalho ist eine schwere Ordnungswidrigkeit (contraordenacao grave). Seit der DSGVO veroeffentlicht die CNPD keine einzelnen Sanktionsentscheidungen mehr, sodass es keinen veroeffentlichbaren Richtwert fuer die Geolokalisierung von Beschaeftigten gibt; das Risiko bleibt das allgemeine der DSGVO (Art. 83): bis zu 20 Millionen Euro oder 4% des weltweiten Jahresumsatzes.',
      fr: 'La violation de l\'art. 20 du Codigo do Trabalho est une contravention grave (contraordenacao grave). Depuis le RGPD, la CNPD ne publie plus les decisions de sanction individuelles, de sorte qu\'il n\'existe pas de montant de reference publiable pour la geolocalisation des salaries; le risque reste celui, general, du RGPD (art. 83): jusqu\'a 20 millions d\'euros ou 4% du chiffre d\'affaires annuel mondial.',
      es: 'La infraccion del art. 20 del Codigo do Trabalho es una infraccion administrativa grave (contraordenacao grave). Desde el RGPD, la CNPD ya no publica las resoluciones sancionadoras individuales, por lo que no existe una cifra de referencia publicable para la geolocalizacion de los empleados; el riesgo sigue siendo el general del RGPD (art. 83): hasta 20 millones de euros o el 4% de la facturacion anual mundial.',
      nl: 'Schending van art. 20 van de Codigo do Trabalho is een ernstige administratieve overtreding (contraordenacao grave). Sinds de AVG publiceert de CNPD geen individuele sanctiebesluiten meer, zodat er geen publiceerbaar richtbedrag bestaat voor de geolocatie van werknemers; het risico blijft het algemene AVG-risico (art. 83): tot 20 miljoen euro of 4% van de wereldwijde jaaromzet.',
    },
    urlFonte: FONTE_GDPR.url,
  },

  fonti: [
    FONTE_CT_20,
    FONTE_CNPD_7680,
    FONTE_LEI_58_28,
    FONTE_CNPD_AIPD,
    FONTE_CNPD_SEGNALAZIONI,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
