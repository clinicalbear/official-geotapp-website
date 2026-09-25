import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Software für Bewachungsgewerbe & Veranstaltungsschutz | Nachweisbare Anwesenheit | GeoTapp',
    description: 'Workforce-Management für Sicherheitsunternehmen, Wachpersonal und Veranstaltungsschutz: GPS-verifizierte Anwesenheit, geolokalisierte Störungsberichte und Qualifikationsverfolgung gem. §34a GewO.',
  },
  hero: {
    badge: 'Software für Bewachungsgewerbe, Wachpersonal und Veranstaltungsschutz',
    h1_line1: 'Nachweisbare Anwesenheit und Schichtdokumentation',
    h1_line2: 'für Sicherheitsdienste und Wachpersonal',
    subtitle: 'GeoTapp Flow und TimeTracker dokumentieren die Anwesenheit von Wachpersonal an zugewiesenen Posten mit verifizierten GPS-Daten und versiegelten Zeitstempeln. §34a GewO-konforme Qualifikationsverfolgung, digitale Schichtübergabe und geolokalisierte Störungsberichte, alles in einer Plattform.',
    cta_primary: 'Demo anfordern',
    cta_note: 'Unverbindlich. Antwort innerhalb von 12 Arbeitsstunden.',
  },
  pain: {
    title: 'Die Probleme, die Sie kennen',
    items: [
      {
        title: 'Nachweis der Postenbesetzung zum vertraglich vereinbarten Zeitpunkt',
        desc: 'Ein Auftraggeber bestreitet die Anwesenheit einer Wachperson zu einem bestimmten Zeitpunkt. Ohne verifizierte GPS-Daten und versiegelte Zeitstempel bleibt der Vertragsverstoß unbeweisbar, in beide Richtungen.',
      },
      {
        title: 'Störungsberichte ohne Positionsnachweis',
        desc: 'Ein handschriftlicher Störungsbericht hat wenig Beweiskraft, wenn kein versiegelter GPS-Ort und kein manipulationserkennbarer Zeitstempel vorliegen. Papierprotokolle sind zu leicht anfechtbar.',
      },
      {
        title: 'Schichtübergabe noch auf Papier',
        desc: 'Revierübergaben laufen über mündliche Absprachen oder handschriftliche Notizen. Kritische Informationen gehen verloren, Verantwortlichkeiten bleiben unklar und ein Audit ist nicht möglich.',
      },
    ],
  },
  workflow: {
    title: 'So funktioniert es in drei Schritten',
    subtitle: 'Vom Wachposten in die Leitstelle, ohne Papierkram.',
    steps: [
      {
        title: 'Die Wachperson stempelt am zugewiesenen Posten ein',
        desc: 'GeoTapp TimeTracker erfasst Ein- und Ausstempelung, GPS-Position und Fotos mit versiegelten Zeitstempeln. Jeder Streifengang wird automatisch vom Smartphone der Wachperson protokolliert.',
      },
      {
        title: 'Der Einsatzleiter sieht alle Posten in Echtzeit',
        desc: 'Flow empfängt Daten sofort. Der Einsatzleiter überprüft die vollständige Posten­besetzung, Schichtwechsel und Abweichungen, ohne das Feld anzurufen.',
      },
      {
        title: 'Der Anwesenheitsnachweis ist sofort bereit',
        desc: 'Am Schichtende liegt das Anwesenheitsprotokoll mit echten GPS-Daten strukturiert vor, bereit für Auftraggeber-Audits oder Kontrollen der Behörden gem. §34a GewO.',
      },
    ],
  },
  features: {
    title: 'Was Sie erhalten',
    items: [
      {
        title: 'GPS-verifizierte Anwesenheit je Wachperson',
        desc: 'Jede Einstempelung ist mit Position, Zeitstempel und zugewiesenem Posten verknüpft. Verteidigbar gegenüber dem Auftraggeber, dem Gewerbeaufsichtsamt und in vertragsrechtlichen Auseinandersetzungen.',
      },
      {
        title: 'Qualifikations- und Lizenztracking (§34a GewO, DGUV Vorschrift 23)',
        desc: 'Verwalten Sie §34a-Sachkundenachweise, DGUV-Unterweisungen und Ablaufdaten für jede Wachperson. Kein unqualifiziertes Personal im Einsatz durch Versehen.',
      },
      {
        title: 'Export kompatibel mit DATEV und Lexware',
        desc: 'Exportieren Sie monatliche Anwesenheitsdaten in den von DATEV und Lexware akzeptierten Formaten. Die Lohnabrechnung wird zu einem schnellen, fehlerfreien Vorgang.',
      },
    ],
  },
  testimonial: {
    quote: 'Mit GeoTapp haben wir Streitigkeiten über Postenstärken eliminiert. Auftraggeber erhalten ein GPS-gestempeltes Anwesenheitsprotokoll, da gibt es nichts mehr zu diskutieren.',
    author: 'Stefan K.',
    role: 'Betriebsleiter, Sicherheitsdienstleister',
  },
  faq: {
    title: 'Häufig gestellte Fragen',
    subtitle: 'Was Teams uns am häufigsten vor dem Start fragen.',
    items: [
      {
        q: 'Ist GeoTapp für nach §34a GewO zugelassene Sicherheitsunternehmen geeignet?',
        a: 'Ja. GeoTapp wird von Sicherheitsunternehmen eingesetzt, um die Anwesenheit von Wachpersonal mit GPS-Nachweis zu dokumentieren, Schichtwechsel zu verwalten und §34a-Qualifikationsabläufe zu verfolgen.',
      },
      {
        q: 'Wie unterstützt GeoTapp die Dokumentation von Störungsberichten?',
        a: 'TimeTracker verknüpft jeden Vorfall mit einem versiegelten GPS-Standort und einem versiegelten Zeitstempel. Der generierte Störungsbericht enthält Koordinaten, Uhrzeit und Fotos, gerichtsverwertbar und auftraggebersicher.',
      },
      {
        q: 'Gilt die Aufzeichnungspflicht nach §17 MiLoG auch für Sicherheitsunternehmen?',
        a: 'Ja, und zwar unabhängig von der Betriebsgröße. Das Wach- und Sicherheitsgewerbe ist in §2a SchwarzArbG aufgeführt, damit greift §17 MiLoG: Beginn, Ende und Dauer der täglichen Arbeitszeit jeder Wachperson müssen spätestens am siebten Kalendertag nach dem Arbeitstag aufgezeichnet und zwei Jahre aufbewahrt werden. Verstöße gegen diese Pflicht ahndet §21 MiLoG mit einer Geldbuße bis zu 50.000 €. Mit GeoTapp entsteht die Aufzeichnung im Moment der Stempelung am Posten, GPS-geprüft und mit versiegeltem Zeitstempel, und lässt sich für die Finanzkontrolle Schwarzarbeit (FKS) als signiertes PDF exportieren.',
      },
      {
        q: 'Unterstützt GeoTapp die digitale Schichtübergabe zwischen Wachpersonen?',
        a: 'Ja. Schichtwechsel werden digital mit Quittierung, Betriebshinweisen und Postenstatus erfasst. Der Einsatzleiter hat vollständige Transparenz über die Dienstkontinuität ohne Abhängigkeit von mündlichen Übergaben.',
      },
    ],
  },
  cta: {
    title: 'Schluss mit Streitigkeiten über Postenstärken.',
    subtitle: 'GeoTapp Flow und TimeTracker geben Ihrem Sicherheitsunternehmen die nachweisbaren Belege, die Auftraggeber und Behörden fordern.',
    primary: 'Demo anfordern',
    secondary: 'Preise ansehen',
  },
  schema_sector_name: 'Bewachungsgewerbe',
};

export default content;
