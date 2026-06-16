/**
 * Scheda-paese Romania per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * Legge 190/2018 art. 5 (condizioni per il monitoraggio dei dipendenti), Codul
 * Muncii art. 40 (obblighi del datore e riservatezza dei dati), comunicato
 * ANSPDCP del 23 marzo 2023 sul caso GPS Tehnoplus, Decizia ANSPDCP 174/2018
 * (lista dei trattamenti che richiedono una DPIA), pagina ANSPDCP sulla
 * presentazione dei reclami e GDPR.
 *
 * La Romania non e' uno Stato federale: ha un'unica autorita' nazionale,
 * l'ANSPDCP, senza ripartizione regionale.
 * Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_LEGGE_190_ART5 = {
  titolo: 'Legge 190/2018, art. 5 (monitoraggio dei dipendenti)',
  url: 'https://legislatie.just.ro/Public/DetaliiDocument/203151',
};
const FONTE_CODUL_MUNCII_40 = {
  titolo: 'Codul Muncii, art. 40 (obblighi del datore, riservatezza dati)',
  url: 'https://www.codulmuncii.eu/titlu-2/capitol-2/articol-40.html',
};
const FONTE_ANSPDCP_TEHNOPLUS = {
  titolo:
    'ANSPDCP, comunicato del 23 marzo 2023 (sanzione Tehnoplus, GPS)',
  url: 'https://www.dataprotection.ro/?page=Comunicat_Presa_23.03.2023',
};
const FONTE_ANSPDCP_DPIA = {
  titolo:
    'ANSPDCP, Decizia 174/2018 (lista trattamenti che richiedono DPIA)',
  url: 'https://lege5.ro/Gratuit/gmydoobxhe3q/decizia-nr-174-2018-privind-lista-operatiunilor-pentru-care-este-obligatorie-realizarea-evaluarii-impactului-asupra-protectiei-datelor-cu-caracter-personal',
};
const FONTE_ANSPDCP_RECLAMI = {
  titolo: 'ANSPDCP, presentazione dei reclami',
  url: 'https://www.dataprotection.ro/?page=Transmiterea_plangerilor_catre_ANSPDCP&lang=ro',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const romania: SchedaPaese = {
  codiceISO: 'RO',
  slugCanonico: 'romania',
  nome: 'Romania',
  nomi: {
    it: 'Romania',
    en: 'Romania',
    'en-us': 'Romania',
    'en-gb': 'Romania',
    'en-au': 'Romania',
    'en-ie': 'Romania',
    'en-ca': 'Romania',
    de: 'Rumänien',
    nl: 'Roemenië',
    fr: 'Roumanie',
    es: 'Rumanía',
    pt: 'Roménia',
    da: 'Rumænien',
    sv: 'Rumänien',
    nb: 'Romania',
    ru: 'Румыния',
  },
  bandiera: '🇷🇴',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'ANSPDCP (Autoritatea Nationala de Supraveghere a Prelucrarii Datelor cu Caracter Personal)',
    portale: FONTE_ANSPDCP_RECLAMI.url,
    urlFonte: FONTE_ANSPDCP_RECLAMI.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Romania ha un'unica autorita nazionale, l'ANSPDCP; nessuna ripartizione regionale.",
      en: 'Romania has a single national authority, the ANSPDCP; there is no regional division.',
      de: 'Rumänien hat eine einzige nationale Behörde, die ANSPDCP; es gibt keine regionale Aufteilung.',
      fr: "La Roumanie dispose d'une seule autorité nationale, l'ANSPDCP; il n'y a aucune répartition régionale.",
      es: 'Rumanía cuenta con una única autoridad nacional, la ANSPDCP; no existe ninguna división regional.',
      nl: 'Roemenië heeft één nationale autoriteit, de ANSPDCP; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione preventiva obbligatoria, completa ed esplicita dei lavoratori (Legge 190/2018 art. 5 lett. b)',
        en: 'Mandatory, complete and explicit prior information of workers (Law 190/2018 art. 5 lett. b)',
        de: 'Verpflichtende, vollständige und ausdrückliche vorherige Information der Arbeitnehmer (Gesetz 190/2018 Art. 5 Buchst. b)',
        fr: "Information préalable obligatoire, complète et explicite des travailleurs (Loi 190/2018 art. 5 lett. b)",
        es: 'Información previa obligatoria, completa y explícita de los trabajadores (Ley 190/2018 art. 5 lett. b)',
        nl: 'Verplichte, volledige en uitdrukkelijke voorafgaande informatie aan de werknemers (Wet 190/2018 art. 5 lett. b)',
      },
      risposta: 'si',
      dettaglio: {
        it: "il monitoraggio dei dipendenti tramite mezzi elettronici/geolocalizzazione e ammesso solo dopo un'informazione preventiva obbligatoria, completa ed esplicita dei lavoratori.",
        en: 'monitoring of employees through electronic means/geolocation is permitted only after mandatory, complete and explicit prior information of the workers.',
        de: 'die Überwachung der Beschäftigten durch elektronische Mittel/Geolokalisierung ist nur nach einer verpflichtenden, vollständigen und ausdrücklichen vorherigen Information der Arbeitnehmer zulässig.',
        fr: "la surveillance des salariés par des moyens électroniques/géolocalisation n'est admise qu'après une information préalable obligatoire, complète et explicite des travailleurs.",
        es: 'la monitorización de los empleados mediante medios electrónicos/geolocalización solo se admite tras una información previa obligatoria, completa y explícita de los trabajadores.',
        nl: 'het monitoren van werknemers via elektronische middelen/geolokalisatie is alleen toegestaan na een verplichte, volledige en uitdrukkelijke voorafgaande informatie aan de werknemers.',
      },
      fonte: FONTE_LEGGE_190_ART5,
    },
    {
      voce: {
        it: 'Consultazione preventiva del sindacato o dei rappresentanti dei dipendenti (art. 5 lett. c)',
        en: 'Prior consultation of the trade union or of the employees representatives (art. 5 lett. c)',
        de: 'Vorherige Anhörung der Gewerkschaft oder der Arbeitnehmervertreter (Art. 5 Buchst. c)',
        fr: 'Consultation préalable du syndicat ou des représentants des salariés (art. 5 lett. c)',
        es: 'Consulta previa al sindicato o a los representantes de los empleados (art. 5 lett. c)',
        nl: 'Voorafgaande raadpleging van de vakbond of van de werknemersvertegenwoordigers (art. 5 lett. c)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: 'prima di introdurre i sistemi di monitoraggio il datore deve consultare il sindacato o, se del caso, i rappresentanti dei dipendenti. Vale dove esistono.',
        en: 'before introducing the monitoring systems the employer must consult the trade union or, where applicable, the employees representatives. It applies where they exist.',
        de: 'vor der Einführung der Überwachungssysteme muss der Arbeitgeber die Gewerkschaft oder gegebenenfalls die Arbeitnehmervertreter anhören. Dies gilt, wo solche vorhanden sind.',
        fr: "avant d'introduire les systèmes de surveillance, l'employeur doit consulter le syndicat ou, le cas échéant, les représentants des salariés. Cela s'applique là où ils existent.",
        es: 'antes de introducir los sistemas de monitorización el empleador debe consultar al sindicato o, en su caso, a los representantes de los empleados. Se aplica donde existan.',
        nl: 'voordat de monitoringsystemen worden ingevoerd, moet de werkgever de vakbond of, in voorkomend geval, de werknemersvertegenwoordigers raadplegen. Dit geldt waar zij bestaan.',
      },
      fonte: FONTE_LEGGE_190_ART5,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorita prima di installare",
        en: 'Prior authorisation from an authority before installation',
        de: 'Vorherige Genehmigung durch eine Behörde vor der Installation',
        fr: "Autorisation préalable d'une autorité avant l'installation",
        es: 'Autorización previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit vóór de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "la legge subordina il monitoraggio alle condizioni dell'art. 5, ma non a un'autorizzazione preventiva dell'ANSPDCP.",
        en: "the law makes monitoring subject to the conditions of art. 5, but not to a prior authorisation from the ANSPDCP.",
        de: 'das Gesetz unterwirft die Überwachung den Bedingungen des Art. 5, jedoch keiner vorherigen Genehmigung durch die ANSPDCP.',
        fr: "la loi subordonne la surveillance aux conditions de l'art. 5, mais non à une autorisation préalable de l'ANSPDCP.",
        es: 'la ley subordina la monitorización a las condiciones del art. 5, pero no a una autorización previa de la ANSPDCP.',
        nl: 'de wet onderwerpt het monitoren aan de voorwaarden van art. 5, maar niet aan een voorafgaande toestemming van de ANSPDCP.',
      },
      fonte: FONTE_LEGGE_190_ART5,
    },
    {
      voce: {
        it: 'Mezzi meno intrusivi gia rivelatisi inefficaci e interesse legittimo prevalente (art. 5 lett. a, d)',
        en: 'Less intrusive means already proven ineffective and prevailing legitimate interest (art. 5 lett. a, d)',
        de: 'Weniger eingreifende Mittel bereits als unwirksam erwiesen und überwiegendes berechtigtes Interesse (Art. 5 Buchst. a, d)',
        fr: "Moyens moins intrusifs déjà avérés inefficaces et intérêt légitime prépondérant (art. 5 lett. a, d)",
        es: 'Medios menos intrusivos que ya se han revelado ineficaces e interés legítimo prevalente (art. 5 lett. a, d)',
        nl: 'Minder ingrijpende middelen die al ondoeltreffend zijn gebleken en overwegend gerechtvaardigd belang (art. 5 lett. a, d)',
      },
      risposta: 'si',
      dettaglio: {
        it: "il monitoraggio e ammesso solo se altre forme meno intrusive non si sono gia rivelate efficaci e se l'interesse legittimo del datore prevale sui diritti dei lavoratori.",
        en: "monitoring is permitted only if other less intrusive forms have not already proven effective and if the legitimate interest of the employer prevails over the rights of the workers.",
        de: 'die Überwachung ist nur zulässig, wenn andere weniger eingreifende Formen sich nicht bereits als wirksam erwiesen haben und wenn das berechtigte Interesse des Arbeitgebers gegenüber den Rechten der Arbeitnehmer überwiegt.',
        fr: "la surveillance n'est admise que si d'autres formes moins intrusives ne se sont pas déjà révélées efficaces et si l'intérêt légitime de l'employeur prévaut sur les droits des travailleurs.",
        es: 'la monitorización solo se admite si otras formas menos intrusivas no se han revelado ya eficaces y si el interés legítimo del empleador prevalece sobre los derechos de los trabajadores.',
        nl: 'het monitoren is alleen toegestaan als andere, minder ingrijpende vormen niet al doeltreffend zijn gebleken en als het gerechtvaardigd belang van de werkgever zwaarder weegt dan de rechten van de werknemers.',
      },
      fonte: FONTE_LEGGE_190_ART5,
    },
    {
      voce: {
        it: 'Conservazione proporzionata, non oltre 30 giorni salvo eccezioni (art. 5 lett. e)',
        en: 'Proportionate retention, no longer than 30 days save exceptions (art. 5 lett. e)',
        de: 'Verhältnismäßige Speicherung, nicht länger als 30 Tage außer bei Ausnahmen (Art. 5 Buchst. e)',
        fr: 'Conservation proportionnée, pas plus de 30 jours sauf exceptions (art. 5 lett. e)',
        es: 'Conservación proporcionada, no más de 30 días salvo excepciones (art. 5 lett. e)',
        nl: 'Evenredige bewaring, niet langer dan 30 dagen behoudens uitzonderingen (art. 5 lett. e)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'la durata di conservazione deve essere proporzionata allo scopo e non superiore a 30 giorni, salvo casi previsti dalla legge o debitamente giustificati.',
        en: 'the retention period must be proportionate to the purpose and no longer than 30 days, save for cases provided for by law or duly justified.',
        de: 'die Speicherdauer muss dem Zweck angemessen sein und 30 Tage nicht überschreiten, außer in gesetzlich vorgesehenen oder ordnungsgemäß begründeten Fällen.',
        fr: 'la durée de conservation doit être proportionnée à la finalité et ne pas dépasser 30 jours, sauf dans les cas prévus par la loi ou dûment justifiés.',
        es: 'la duración de conservación debe ser proporcionada a la finalidad y no superior a 30 días, salvo en los casos previstos por la ley o debidamente justificados.',
        nl: 'de bewaartermijn moet evenredig zijn aan het doel en mag niet langer zijn dan 30 dagen, behoudens bij wet voorziene of naar behoren gerechtvaardigde gevallen.',
      },
      fonte: FONTE_LEGGE_190_ART5,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per la geolocalizzazione sistematica dei dipendenti (Decizia 174/2018)",
        en: 'Impact assessment (DPIA) for the systematic geolocation of employees (Decizia 174/2018)',
        de: 'Datenschutz-Folgenabschätzung (DPIA) für die systematische Geolokalisierung der Beschäftigten (Decizia 174/2018)',
        fr: "Analyse d'impact (AIPD) pour la géolocalisation systématique des salariés (Decizia 174/2018)",
        es: 'Evaluación de impacto (EIPD) para la geolocalización sistemática de los empleados (Decizia 174/2018)',
        nl: 'Effectbeoordeling (DPIA) voor de systematische geolokalisatie van werknemers (Decizia 174/2018)',
      },
      risposta: 'si',
      dettaglio: {
        it: "la lista nazionale rende obbligatoria la valutazione d'impatto per il monitoraggio sistematico su larga scala di persone vulnerabili (inclusi i dipendenti) e per il trattamento sistematico di dati di localizzazione.",
        en: 'the national list makes the impact assessment mandatory for the large-scale systematic monitoring of vulnerable persons (including employees) and for the systematic processing of location data.',
        de: 'die nationale Liste macht die Folgenabschätzung verpflichtend für die systematische groß angelegte Überwachung schutzbedürftiger Personen (einschließlich der Beschäftigten) und für die systematische Verarbeitung von Standortdaten.',
        fr: "la liste nationale rend l'analyse d'impact obligatoire pour la surveillance systématique à grande échelle de personnes vulnérables (y compris les salariés) et pour le traitement systématique de données de localisation.",
        es: 'la lista nacional hace obligatoria la evaluación de impacto para la monitorización sistemática a gran escala de personas vulnerables (incluidos los empleados) y para el tratamiento sistemático de datos de localización.',
        nl: 'de nationale lijst maakt de effectbeoordeling verplicht voor het systematisch grootschalig monitoren van kwetsbare personen (waaronder werknemers) en voor de systematische verwerking van locatiegegevens.',
      },
      fonte: FONTE_ANSPDCP_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Informa i lavoratori in modo preventivo, obbligatorio, completo ed esplicito (art. 5 lett. b).',
        en: 'Inform the workers in a prior, mandatory, complete and explicit manner (art. 5 lett. b).',
        de: 'Informieren Sie die Arbeitnehmer im Voraus, verpflichtend, vollständig und ausdrücklich (Art. 5 Buchst. b).',
        fr: 'Informez les travailleurs de manière préalable, obligatoire, complète et explicite (art. 5 lett. b).',
        es: 'Informe a los trabajadores de forma previa, obligatoria, completa y explícita (art. 5 lett. b).',
        nl: 'Informeer de werknemers vooraf, verplicht, volledig en uitdrukkelijk (art. 5 lett. b).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Consulta il sindacato o i rappresentanti dei dipendenti prima di introdurre il sistema (art. 5 lett. c).',
        en: 'Consult the trade union or the employees representatives before introducing the system (art. 5 lett. c).',
        de: 'Hören Sie die Gewerkschaft oder die Arbeitnehmervertreter an, bevor Sie das System einführen (Art. 5 Buchst. c).',
        fr: "Consultez le syndicat ou les représentants des salariés avant d'introduire le système (art. 5 lett. c).",
        es: 'Consulte al sindicato o a los representantes de los empleados antes de introducir el sistema (art. 5 lett. c).',
        nl: 'Raadpleeg de vakbond of de werknemersvertegenwoordigers voordat u het systeem invoert (art. 5 lett. c).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Verifica che altri mezzi meno intrusivi non siano gia bastati e documenta l'interesse legittimo prevalente.",
        en: 'Verify that other less intrusive means have not already been sufficient and document the prevailing legitimate interest.',
        de: 'Prüfen Sie, dass andere weniger eingreifende Mittel nicht bereits ausgereicht haben, und dokumentieren Sie das überwiegende berechtigte Interesse.',
        fr: "Vérifiez que d'autres moyens moins intrusifs n'ont pas déjà suffi et documentez l'intérêt légitime prépondérant.",
        es: 'Verifique que otros medios menos intrusivos no hayan bastado ya y documente el interés legítimo prevalente.',
        nl: 'Controleer of andere, minder ingrijpende middelen niet al volstonden en documenteer het overwegende gerechtvaardigde belang.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per la geolocalizzazione sistematica.",
        en: 'Carry out the impact assessment (DPIA) for the systematic geolocation.',
        de: 'Führen Sie die Datenschutz-Folgenabschätzung (DPIA) für die systematische Geolokalisierung durch.',
        fr: "Réalisez l'analyse d'impact (AIPD) pour la géolocalisation systématique.",
        es: 'Realice la evaluación de impacto (EIPD) para la geolocalización sistemática.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor de systematische geolokalisatie.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Limita la conservazione a 30 giorni salvo eccezioni giustificate; usa i dati solo per la finalita dichiarata.',
        en: 'Limit retention to 30 days save justified exceptions; use the data only for the stated purpose.',
        de: 'Begrenzen Sie die Speicherung auf 30 Tage außer bei begründeten Ausnahmen; verwenden Sie die Daten nur für den angegebenen Zweck.',
        fr: 'Limitez la conservation à 30 jours sauf exceptions justifiées; utilisez les données uniquement pour la finalité déclarée.',
        es: 'Limite la conservación a 30 días salvo excepciones justificadas; use los datos solo para la finalidad declarada.',
        nl: 'Beperk de bewaring tot 30 dagen behoudens gerechtvaardigde uitzonderingen; gebruik de gegevens alleen voor het verklaarde doel.',
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
      ente: 'ANSPDCP, reclami',
      portale: FONTE_ANSPDCP_RECLAMI.url,
      urlFonte: FONTE_ANSPDCP_RECLAMI.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '5.000 €',
      en: '5,000 €',
      de: '5.000 €',
      fr: '5 000 €',
      es: '5.000 €',
      nl: '5.000 €',
    },
    casoCitato: {
      it: 'ANSPDCP contro Tehnoplus Industry SRL (23 marzo 2023): tracciamento GPS di un veicolo aziendale assegnato a un dipendente, con trattamento eccessivo dei dati di localizzazione fuori dall\'orario di servizio, senza aver prima esaurito metodi meno intrusivi, senza informare il dipendente e con conservazione oltre i 30 giorni. Multa complessiva 5.000 euro (3.000 + 2.000).',
      en: 'ANSPDCP against Tehnoplus Industry SRL (23 March 2023): GPS tracking of a company vehicle assigned to an employee, with excessive processing of location data outside working hours, without having first exhausted less intrusive methods, without informing the employee and with retention beyond 30 days. Total fine 5,000 euros (3,000 + 2,000).',
      de: 'ANSPDCP gegen Tehnoplus Industry SRL (23. März 2023): GPS-Ortung eines einem Beschäftigten zugewiesenen Firmenfahrzeugs, mit übermäßiger Verarbeitung von Standortdaten außerhalb der Dienstzeit, ohne zuvor weniger eingreifende Methoden ausgeschöpft zu haben, ohne den Beschäftigten zu informieren und mit einer Speicherung über 30 Tage hinaus. Gesamtbußgeld 5.000 Euro (3.000 + 2.000).',
      fr: "ANSPDCP contre Tehnoplus Industry SRL (23 mars 2023): suivi GPS d'un véhicule de société attribué à un salarié, avec un traitement excessif des données de localisation en dehors des heures de service, sans avoir d'abord épuisé les méthodes moins intrusives, sans informer le salarié et avec une conservation au-delà de 30 jours. Amende totale de 5 000 euros (3 000 + 2 000).",
      es: 'ANSPDCP contra Tehnoplus Industry SRL (23 de marzo de 2023): seguimiento GPS de un vehículo de empresa asignado a un empleado, con un tratamiento excesivo de los datos de localización fuera del horario de servicio, sin haber agotado primero métodos menos intrusivos, sin informar al empleado y con una conservación superior a los 30 días. Multa total de 5.000 euros (3.000 + 2.000).',
      nl: 'ANSPDCP tegen Tehnoplus Industry SRL (23 maart 2023): GPS-tracking van een aan een werknemer toegewezen bedrijfsvoertuig, met buitensporige verwerking van locatiegegevens buiten diensttijd, zonder eerst minder ingrijpende methoden te hebben uitgeput, zonder de werknemer te informeren en met bewaring langer dan 30 dagen. Totale boete 5.000 euro (3.000 + 2.000).',
    },
    urlFonte: FONTE_ANSPDCP_TEHNOPLUS.url,
  },

  fonti: [
    FONTE_LEGGE_190_ART5,
    FONTE_CODUL_MUNCII_40,
    FONTE_ANSPDCP_TEHNOPLUS,
    FONTE_ANSPDCP_DPIA,
    FONTE_ANSPDCP_RECLAMI,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
