/**
 * Scheda-paese Grecia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * FAQ dell'HDPA (Garante greco) sui rapporti di lavoro, art. 27 della Legge
 * 4624/2019 (dati dei dipendenti), Decisione HDPA 65/2018 (lista dei
 * trattamenti che richiedono una DPIA), sanzione HDPA del 16 febbraio 2024 per
 * geolocalizzazione di un dipendente, pagina ufficiale dell'HDPA e GDPR.
 *
 * La Grecia ha un'unica autorita nazionale, l'HDPA; non ci sono ripartizioni
 * regionali. Nessun numero, URL o autorita e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_HDPA_FAQ = {
  titolo:
    'HDPA (Garante greco), FAQ sui rapporti di lavoro (geolocalizzazione)',
  url: 'https://www.dpa.gr/el/enimerwtiko/thematikes_enotites/eidikoiskopoi/ergasiakessxeseis/faq_ergasiakes',
};
const FONTE_LEGGE_4624 = {
  titolo:
    'Legge 4624/2019, art. 27 (dati dei dipendenti) - traduzione ufficiale HDPA',
  url: 'https://www.dataguidance.com/sites/default/files/law_4624_2019_en_translated_by_the_hdpa_0.pdf',
};
const FONTE_HDPA_DPIA = {
  titolo:
    'HDPA, Decisione 65/2018 (lista dei trattamenti che richiedono DPIA)',
  url: 'https://www.dpa.gr/sites/default/files/2019-09/65_2018anonym.pdf',
};
const FONTE_HDPA_SANZIONE = {
  titolo:
    'HDPA, sanzione a un datore per geolocalizzazione (16 febbraio 2024)',
  url: 'https://www.dpa.gr/el/enimerwtiko/prakseisArxis/prostimo-kai-epiplixi-se-ergodoti-gia-epexergasia-prosopikon-dedomenon',
};
const FONTE_HDPA = {
  titolo: 'HDPA (Garante greco), pagina ufficiale',
  url: 'https://www.dpa.gr/en',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const grecia: SchedaPaese = {
  codiceISO: 'GR',
  slugCanonico: 'grecia',
  nome: 'Grecia',
  nomi: {
    it: 'Grecia',
    en: 'Greece',
    'en-us': 'Greece',
    'en-gb': 'Greece',
    'en-au': 'Greece',
    'en-ie': 'Greece',
    'en-ca': 'Greece',
    de: 'Griechenland',
    nl: 'Griekenland',
    fr: 'Grèce',
    es: 'Grecia',
    pt: 'Grécia',
    da: 'Grækenland',
    sv: 'Grekland',
    nb: 'Hellas',
    ru: 'Греция',
  },
  bandiera: '🇬🇷',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'HDPA (Garante greco per la protezione dei dati)',
    portale: FONTE_HDPA.url,
    urlFonte: FONTE_HDPA.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Grecia ha un'unica autorita nazionale, l'HDPA; nessuna ripartizione regionale.",
      en: 'Greece has a single national authority, the HDPA; there is no regional breakdown.',
      de: 'Griechenland hat eine einzige nationale Behörde, die HDPA; es gibt keine regionale Aufteilung.',
      fr: "La Grèce dispose d'une seule autorité nationale, l'HDPA; il n'y a pas de répartition régionale.",
      es: 'Grecia tiene una única autoridad nacional, la HDPA; no existe reparto regional.',
      nl: 'Griekenland heeft één nationale autoriteit, de HDPA; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione ai lavoratori su finalita, tipo di dati raccolti e durata di conservazione',
        en: 'Informing workers about the purposes, type of data collected and retention period',
        de: 'Information der Arbeitnehmer über die Zwecke, die Art der erhobenen Daten und die Speicherdauer',
        fr: 'Information des travailleurs sur les finalités, le type de données collectées et la durée de conservation',
        es: 'Información a los trabajadores sobre las finalidades, el tipo de datos recogidos y la duración de la conservación',
        nl: 'Informeren van werknemers over de doeleinden, het type verzamelde gegevens en de bewaartermijn',
      },
      risposta: 'si',
      dettaglio: {
        it: 'il datore deve informare i lavoratori sullo scopo del trattamento, sul tipo di dati registrati e sul tempo di conservazione.',
        en: 'the employer must inform workers about the purpose of the processing, the type of data recorded and the retention period.',
        de: 'Der Arbeitgeber muss die Arbeitnehmer über den Zweck der Verarbeitung, die Art der erfassten Daten und die Speicherdauer informieren.',
        fr: "l'employeur doit informer les travailleurs de la finalité du traitement, du type de données enregistrées et de la durée de conservation.",
        es: 'el empresario debe informar a los trabajadores sobre la finalidad del tratamiento, el tipo de datos registrados y el plazo de conservación.',
        nl: 'de werkgever moet de werknemers informeren over het doel van de verwerking, het type vastgelegde gegevens en de bewaartermijn.',
      },
      fonte: FONTE_HDPA_FAQ,
    },
    {
      voce: {
        it: "La geolocalizzazione non deve mirare a sorvegliare il lavoratore; limitata all'orario e a un percorso predefinito",
        en: 'Geolocation must not aim to monitor the worker; limited to working hours and a predefined route',
        de: 'Die Geolokalisierung darf nicht auf die Überwachung des Arbeitnehmers abzielen; begrenzt auf die Arbeitszeit und eine vordefinierte Route',
        fr: "La géolocalisation ne doit pas viser à surveiller le travailleur; limitée aux heures de travail et à un itinéraire prédéfini",
        es: 'La geolocalización no debe tener por objeto vigilar al trabajador; limitada al horario laboral y a una ruta predefinida',
        nl: 'De geolocatie mag niet gericht zijn op het bewaken van de werknemer; beperkt tot de werktijden en een vooraf bepaalde route',
      },
      risposta: 'si',
      dettaglio: {
        it: "per l'HDPA l'installazione di un sistema di geolocalizzazione non lede la sfera privata del lavoratore quando non mira a sorvegliarlo; va limitata all'orario di lavoro e a un percorso predefinito.",
        en: "according to the HDPA, installing a geolocation system does not infringe the worker's private sphere when it does not aim to monitor them; it must be limited to working hours and a predefined route.",
        de: 'Nach Auffassung der HDPA verletzt die Installation eines Geolokalisierungssystems die Privatsphäre des Arbeitnehmers nicht, wenn es nicht auf dessen Überwachung abzielt; es muss auf die Arbeitszeit und eine vordefinierte Route begrenzt werden.',
        fr: "pour l'HDPA, l'installation d'un système de géolocalisation ne porte pas atteinte à la sphère privée du travailleur lorsqu'elle ne vise pas à le surveiller; elle doit être limitée aux heures de travail et à un itinéraire prédéfini.",
        es: 'para la HDPA, la instalación de un sistema de geolocalización no lesiona la esfera privada del trabajador cuando no tiene por objeto vigilarlo; debe limitarse al horario laboral y a una ruta predefinida.',
        nl: 'volgens de HDPA tast de installatie van een geolocatiesysteem de privésfeer van de werknemer niet aan wanneer het niet gericht is op het bewaken ervan; het moet beperkt blijven tot de werktijden en een vooraf bepaalde route.',
      },
      fonte: FONTE_HDPA_FAQ,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorita prima di installare",
        en: 'Prior authorisation from an authority before installation',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: "Autorisation préalable d'une autorité avant l'installation",
        es: 'Autorización previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit vóór installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "non serve un'autorizzazione preventiva dell'HDPA; la consultazione preventiva e prevista solo se la DPIA evidenzia un rischio residuo elevato.",
        en: 'no prior authorisation from the HDPA is required; prior consultation is only foreseen if the DPIA reveals a high residual risk.',
        de: 'Eine vorherige Genehmigung der HDPA ist nicht erforderlich; eine vorherige Konsultation ist nur vorgesehen, wenn die DSFA ein hohes Restrisiko aufzeigt.',
        fr: "aucune autorisation préalable de l'HDPA n'est nécessaire; la consultation préalable n'est prévue que si l'AIPD met en évidence un risque résiduel élevé.",
        es: 'no es necesaria una autorización previa de la HDPA; la consulta previa solo está prevista si la EIPD pone de manifiesto un riesgo residual elevado.',
        nl: 'er is geen voorafgaande toestemming van de HDPA nodig; voorafgaande raadpleging is alleen voorzien als de DPIA een hoog restrisico aan het licht brengt.',
      },
      fonte: FONTE_HDPA_FAQ,
    },
    {
      voce: {
        it: 'Niente uso fuori orario; sistema disattivabile; conservazione non oltre un mese',
        en: 'No use outside working hours; deactivatable system; retention no longer than one month',
        de: 'Keine Nutzung außerhalb der Arbeitszeit; deaktivierbares System; Speicherung nicht länger als einen Monat',
        fr: "Pas d'utilisation en dehors des heures de travail; système désactivable; conservation n'excédant pas un mois",
        es: 'Sin uso fuera del horario laboral; sistema desactivable; conservación no superior a un mes',
        nl: 'Geen gebruik buiten werktijd; uitschakelbaar systeem; bewaring niet langer dan een maand',
      },
      risposta: 'si',
      dettaglio: {
        it: 'il lavoratore non deve usare il veicolo fuori orario, il sistema deve poter essere disattivato quando il lavoratore lo desidera, e la conservazione non deve superare un mese.',
        en: 'the worker must not use the vehicle outside working hours, the system must be able to be deactivated whenever the worker wishes, and retention must not exceed one month.',
        de: 'Der Arbeitnehmer darf das Fahrzeug nicht außerhalb der Arbeitszeit nutzen, das System muss deaktiviert werden können, wann immer der Arbeitnehmer dies wünscht, und die Speicherung darf einen Monat nicht überschreiten.',
        fr: "le travailleur ne doit pas utiliser le véhicule en dehors des heures de travail, le système doit pouvoir être désactivé lorsque le travailleur le souhaite, et la conservation ne doit pas dépasser un mois.",
        es: 'el trabajador no debe usar el vehículo fuera del horario laboral, el sistema debe poder desactivarse cuando el trabajador lo desee, y la conservación no debe superar un mes.',
        nl: 'de werknemer mag het voertuig niet buiten werktijd gebruiken, het systeem moet kunnen worden uitgeschakeld wanneer de werknemer dat wenst, en de bewaring mag niet langer dan een maand duren.',
      },
      fonte: FONTE_HDPA_FAQ,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il monitoraggio sistematico della posizione dei lavoratori (Decisione 65/2018)",
        en: 'Impact assessment (DPIA) for systematic monitoring of workers location (Decision 65/2018)',
        de: 'Datenschutz-Folgenabschätzung (DSFA) für die systematische Überwachung des Standorts der Arbeitnehmer (Entscheidung 65/2018)',
        fr: "Analyse d'impact (AIPD) pour la surveillance systématique de la localisation des travailleurs (Décision 65/2018)",
        es: 'Evaluación de impacto (EIPD) para la vigilancia sistemática de la ubicación de los trabajadores (Decisión 65/2018)',
        nl: 'Effectbeoordeling (DPIA) voor de systematische monitoring van de locatie van werknemers (Besluit 65/2018)',
      },
      risposta: 'si',
      dettaglio: {
        it: "la lista HDPA include il monitoraggio sistematico della posizione dei dipendenti tra i trattamenti che richiedono una valutazione d'impatto.",
        en: 'the HDPA list includes the systematic monitoring of employees location among the processing operations that require an impact assessment.',
        de: 'Die HDPA-Liste führt die systematische Überwachung des Standorts der Beschäftigten unter den Verarbeitungen auf, die eine Folgenabschätzung erfordern.',
        fr: "la liste de l'HDPA inclut la surveillance systématique de la localisation des employés parmi les traitements nécessitant une analyse d'impact.",
        es: 'la lista de la HDPA incluye la vigilancia sistemática de la ubicación de los empleados entre los tratamientos que requieren una evaluación de impacto.',
        nl: 'de HDPA-lijst noemt de systematische monitoring van de locatie van werknemers onder de verwerkingen die een effectbeoordeling vereisen.',
      },
      fonte: FONTE_HDPA_DPIA,
    },
    {
      voce: {
        it: 'Base giuridica = interesse legittimo, non il consenso (Legge 4624/2019 art. 27)',
        en: 'Legal basis = legitimate interest, not consent (Law 4624/2019 art. 27)',
        de: 'Rechtsgrundlage = berechtigtes Interesse, nicht Einwilligung (Gesetz 4624/2019 Art. 27)',
        fr: 'Base juridique = intérêt légitime, et non le consentement (Loi 4624/2019 art. 27)',
        es: 'Base jurídica = interés legítimo, no el consentimiento (Ley 4624/2019 art. 27)',
        nl: 'Rechtsgrond = gerechtvaardigd belang, niet toestemming (Wet 4624/2019 art. 27)',
      },
      risposta: 'si',
      dettaglio: {
        it: "nel rapporto di lavoro il consenso non e considerato liberamente prestato per lo squilibrio di potere; la base e l'interesse legittimo e la necessita per il contratto.",
        en: 'in the employment relationship consent is not considered freely given because of the power imbalance; the basis is legitimate interest and the necessity for the contract.',
        de: 'Im Arbeitsverhältnis gilt die Einwilligung wegen des Machtgefälles nicht als freiwillig erteilt; die Grundlage ist das berechtigte Interesse und die Erforderlichkeit für den Vertrag.',
        fr: "dans la relation de travail, le consentement n'est pas considéré comme librement donné en raison du déséquilibre de pouvoir; la base est l'intérêt légitime et la nécessité pour le contrat.",
        es: 'en la relación laboral el consentimiento no se considera libremente prestado debido al desequilibrio de poder; la base es el interés legítimo y la necesidad para el contrato.',
        nl: 'in de arbeidsverhouding wordt toestemming wegens de machtsongelijkheid niet als vrij gegeven beschouwd; de grondslag is het gerechtvaardigd belang en de noodzaak voor het contract.',
      },
      fonte: FONTE_LEGGE_4624,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Informa i lavoratori su finalita, dati raccolti e durata di conservazione.',
        en: 'Inform workers about the purposes, data collected and retention period.',
        de: 'Informieren Sie die Arbeitnehmer über die Zwecke, die erhobenen Daten und die Speicherdauer.',
        fr: 'Informez les travailleurs sur les finalités, les données collectées et la durée de conservation.',
        es: 'Informe a los trabajadores sobre las finalidades, los datos recogidos y la duración de la conservación.',
        nl: 'Informeer de werknemers over de doeleinden, de verzamelde gegevens en de bewaartermijn.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: "Verifica che la geolocalizzazione non miri a sorvegliare il lavoratore e sia limitata all'orario e a un percorso predefinito.",
        en: 'Verify that geolocation does not aim to monitor the worker and is limited to working hours and a predefined route.',
        de: 'Stellen Sie sicher, dass die Geolokalisierung nicht auf die Überwachung des Arbeitnehmers abzielt und auf die Arbeitszeit und eine vordefinierte Route begrenzt ist.',
        fr: "Vérifiez que la géolocalisation ne vise pas à surveiller le travailleur et qu'elle est limitée aux heures de travail et à un itinéraire prédéfini.",
        es: 'Compruebe que la geolocalización no tiene por objeto vigilar al trabajador y que se limita al horario laboral y a una ruta predefinida.',
        nl: 'Controleer of de geolocatie niet gericht is op het bewaken van de werknemer en beperkt is tot de werktijden en een vooraf bepaalde route.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Individua una base giuridica valida (interesse legittimo, non il consenso).',
        en: 'Identify a valid legal basis (legitimate interest, not consent).',
        de: 'Ermitteln Sie eine gültige Rechtsgrundlage (berechtigtes Interesse, nicht Einwilligung).',
        fr: 'Déterminez une base juridique valable (intérêt légitime, et non le consentement).',
        es: 'Determine una base jurídica válida (interés legítimo, no el consentimiento).',
        nl: 'Bepaal een geldige rechtsgrond (gerechtvaardigd belang, niet toestemming).',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio sistematico della posizione.",
        en: 'Carry out the impact assessment (DPIA) for the systematic monitoring of location.',
        de: 'Führen Sie die Datenschutz-Folgenabschätzung (DSFA) für die systematische Standortüberwachung durch.',
        fr: "Réalisez l'analyse d'impact (AIPD) pour la surveillance systématique de la localisation.",
        es: 'Realice la evaluación de impacto (EIPD) para la vigilancia sistemática de la ubicación.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor de systematische monitoring van de locatie.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: disattivabile fuori orario, conservazione non oltre un mese.',
        en: 'Configure the system: deactivatable outside working hours, retention no longer than one month.',
        de: 'Konfigurieren Sie das System: außerhalb der Arbeitszeit deaktivierbar, Speicherung nicht länger als einen Monat.',
        fr: "Configurez le système: désactivable en dehors des heures de travail, conservation n'excédant pas un mois.",
        es: 'Configure el sistema: desactivable fuera del horario laboral, conservación no superior a un mes.',
        nl: 'Configureer het systeem: uitschakelbaar buiten werktijd, bewaring niet langer dan een maand.',
      },
    },
  ],

  contatti: [
    {
      ente: 'HDPA',
      portale: FONTE_HDPA.url,
      urlFonte: FONTE_HDPA.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '2.000 €',
      en: '2,000 €',
      de: '2.000 €',
      fr: '2 000 €',
      es: '2.000 €',
      nl: '2.000 €',
    },
    casoCitato: {
      it: "HDPA (Garante greco), decisione del 16 febbraio 2024: un datore aveva usato il GPS del veicolo aziendale per localizzare un dipendente mentre era in congedo legittimo, fuori dall'orario di lavoro. Multa 2.000 euro per violazione di liceita e trasparenza, piu un'ammonizione e l'ordine di adottare sistemi disattivabili dagli utenti.",
      en: 'HDPA (Greek data protection authority), decision of 16 February 2024: an employer had used the company vehicle GPS to locate an employee while they were on legitimate leave, outside working hours. A fine of 2,000 euros for breach of lawfulness and transparency, plus a reprimand and an order to adopt systems that users can deactivate.',
      de: 'HDPA (griechische Datenschutzbehörde), Entscheidung vom 16. Februar 2024: Ein Arbeitgeber hatte das GPS des Firmenfahrzeugs genutzt, um einen Beschäftigten während eines rechtmäßigen Urlaubs außerhalb der Arbeitszeit zu orten. Geldbuße von 2.000 Euro wegen Verstoßes gegen Rechtmäßigkeit und Transparenz, zudem eine Verwarnung und die Anordnung, von den Nutzern deaktivierbare Systeme einzuführen.',
      fr: "HDPA (autorité grecque de protection des données), décision du 16 février 2024: un employeur avait utilisé le GPS du véhicule de l'entreprise pour localiser un salarié alors qu'il était en congé légitime, en dehors des heures de travail. Amende de 2 000 euros pour manquement à la licéité et à la transparence, ainsi qu'un avertissement et l'ordre d'adopter des systèmes désactivables par les utilisateurs.",
      es: 'HDPA (autoridad griega de protección de datos), decisión de 16 de febrero de 2024: un empresario había usado el GPS del vehículo de empresa para localizar a un empleado mientras estaba en un permiso legítimo, fuera del horario laboral. Multa de 2.000 euros por infracción de licitud y transparencia, además de una amonestación y la orden de adoptar sistemas que los usuarios puedan desactivar.',
      nl: 'HDPA (Griekse gegevensbeschermingsautoriteit), besluit van 16 februari 2024: een werkgever had de gps van het bedrijfsvoertuig gebruikt om een werknemer te lokaliseren terwijl deze met rechtmatig verlof was, buiten werktijd. Een boete van 2.000 euro wegens schending van rechtmatigheid en transparantie, plus een berisping en het bevel om systemen in te voeren die door gebruikers kunnen worden uitgeschakeld.',
    },
    urlFonte: FONTE_HDPA_SANZIONE.url,
  },

  fonti: [
    FONTE_HDPA_FAQ,
    FONTE_LEGGE_4624,
    FONTE_HDPA_DPIA,
    FONTE_HDPA_SANZIONE,
    FONTE_HDPA,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
