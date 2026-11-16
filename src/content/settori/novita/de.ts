import type { NovitaCopy } from './types';

const copy: NovitaCopy = {
  ui: {
    kicker: 'Neu',
    flowCaption: 'Flow, das Pult der Geschäftsleitung',
    phoneCaption: 'TimeTracker, auf dem Handy',
    altFlow: 'Flow, das Pult der Geschäftsleitung: Ansicht von {tool}',
    altPhone: 'TimeTracker auf dem Handy: Ansicht von {tool}',
    flowOnly: 'Dieses Werkzeug nutzen Sie in Flow, am Rechner. Auf dem Handy Ihrer Leute ist dafür nichts nötig.',
    seeAlso: 'Für Elektroprüfungen, Heizungswartung und F-Gase gibt es eigene Werkzeuge:',
  },
  sections: {
    sicurezza: {
      title: 'Neue Werkzeuge für den Wachdienst: Rundgang, Alleinarbeit, Schichtübergabe und Notfälle',
      intro: 'Wenn Sie Ihre Branche wählen, schaltet GeoTapp nur die Werkzeuge für Ihr Handwerk frei. Für den Wachdienst sind es drei, dazu das Modul Notfälle, das für alle Branchen gilt. Jedes hat seinen Teil in Flow, wo Sie entscheiden und nachsehen, und seinen Teil auf dem Handy der Sicherheitskraft.',
    },
    pulizie: {
      title: 'Neue Werkzeuge für die Gebäudereinigung: Qualitätskontrolle und Sicherheitsdatenblätter',
      intro: 'Zwei Werkzeuge für das, was in der Reinigung jede Woche ansteht: Reklamationen des Kunden und Kontrollen vor Ort. Sie werden aktiv, sobald Sie Ihre Branche angeben, die übrigen bleiben ausgeblendet.',
    },
    elettricisti: {
      title: 'Neue Werkzeuge für Elektrobetriebe: Messwerte nach Feierabend und Fristen für wiederkehrende Prüfungen',
      intro: 'Für alle, die eine Anlage abschließen, und für alle, die die Prüftermine ihrer Kunden im Blick behalten müssen. GeoTapp sammelt, setzt in Form und erinnert. Prüfung, Bestätigung und Unterschrift bleiben bei der Elektrofachkraft.',
    },
    edilizia: {
      title: 'Neue Werkzeuge für den Bau: Unterlagen der Nachunternehmer und Lohnkostenanteil',
      intro: 'Zwei Werkzeuge für alle, die Baustellen mit Nachunternehmern koordinieren und zu Terminen mit geordneten Unterlagen kommen wollen. Sie arbeiten damit in Flow, am Rechner.',
    },
    idraulici: {
      title: 'Neue Werkzeuge für SHK-Betriebe: Heizungswartung und Kältemittel-Nachweis',
      intro: 'Arbeit, die jedes Jahr wiederkommt und genau dann untergeht, wenn sie fällig ist: Kunden an die Wartung erinnern und Anlagen mit fluorierten Gasen sauber dokumentieren.',
    },
    installatori: {
      title: 'Neue Werkzeuge für Montagebetriebe: Übergabe mit Unterschrift und Lager im Transporter',
      intro: 'Zwei Werkzeuge gegen das, was bei jedem Auftrag Zeit kostet: die Übergabe an den Kunden sauber abschließen und wissen, was wirklich im Transporter liegt.',
    },
    manutenzione: {
      title: 'Neue Werkzeuge für die Instandhaltung: Reaktionszeiten und QR-Codes an den Geräten',
      intro: 'Für alle mit Wartungsverträgen und vielen Geräten in mehreren Gebäuden: sehen, wie viel Zeit für jede Meldung bleibt, und die Historie einer Maschine mit einem Handgriff finden.',
    },
    impianti: {
      title: 'Neue Werkzeuge für Anlagenbauer: Übergabe mit Unterschrift und Lager im Transporter',
      intro: 'Diese Seite richtet sich an alle, die Anlagen montieren und übergeben, gleich welcher Art. Deshalb finden Sie hier die zwei Werkzeuge, die für alle gelten: Übergabe mit Unterschrift und Lager im Transporter. Elektroprüfungen und Heizungswartung sind eigene Gewerke und haben eigene Werkzeuge.',
    },
  },
  tools: {
    giro_ronda: {
      title: 'Kontrollrundgang',
      body: 'Drei Uhr nachts, und der Kunde will wissen, ob der Rundgang an allen Punkten des Lagers vorbeigekommen ist. In Flow zeichnen Sie die Punkte auf der Karte ein und legen die Runden mit ihren Uhrzeiten fest. Die Sicherheitskraft tippt unterwegs auf dem Handy «Durchgang». Am Morgen liegt der Bericht der Nacht fertig vor.',
      note: 'Die Position wird nur in dem Moment gelesen, in dem die Sicherheitskraft «Durchgang» antippt. Zwischen den Punkten wird nichts aufgezeichnet.',
    },
    lavoratore_isolato: {
      title: 'Alleinarbeit',
      body: 'Eine Sicherheitskraft allein auf einem Objekt, nachts. Für jeden Standort wählen Sie einen Plan mit dem Abstand, der Ihnen passt: In diesen Abständen fragt das Handy «Alles in Ordnung?» und meldet sich bei der Leitstelle, wenn keine Antwort kommt. In Flow sehen Sie die laufenden Schichten und wer wann geantwortet hat.',
      note: 'Es wird keine Position gesendet. Das Werkzeug ist eine Unterstützung und ersetzt nicht die Schutzmaßnahmen, die für Alleinarbeit vorgesehen sind.',
    },
    consegne_turno: {
      title: 'Schichtübergabe',
      body: 'Um sechs übergibt die Nachtwache das Objekt an die Frühschicht. Früher waren das Schlüssel im Kasten und eine Sprachnachricht. Jetzt schreibt die Sicherheitskraft am Schichtende Hinweise, Schlüssel und Auffälligkeiten für die Nachfolge auf, die sie am Handy übernimmt. In Flow sehen Sie offene Übergaben und offene Auffälligkeiten. Der Verlauf lässt sich nicht nachträglich ändern.',
    },
    emergenze: {
      title: 'Notfälle und Übungen',
      body: 'Räumungsübung in einem Gebäude oder bei einer Veranstaltung: Die Leitung wählt das Szenario und tippt im Grundriss auf die Gefahrenstelle. Jede Person im Team bekommt auf dem Handy ihre Rolle, was zu tun ist und die Ausgänge in der richtigen Reihenfolge, und antwortet mit einem Tipp: anwesend, unterwegs, kann nicht. Die Übersicht zeigt, wer geantwortet hat und nach wie vielen Minuten. Die Pläne lassen sich auch ohne Netz öffnen.',
      note: 'Das ist ein Werkzeug zur Koordination und zum Üben. Es ersetzt Ihren Notfallplan nicht und bestätigt ihn auch nicht. Eine Benachrichtigung kann ausbleiben, deshalb bestätigt jede Person selbst.',
    },
    qualita_pulizie: {
      title: 'Qualitätskontrolle',
      body: 'Der Ansprechpartner des Kunden sagt, das dritte Stockwerk sei nicht richtig gereinigt worden. Die Vorarbeiterin geht den Bereich mit der Prüfliste ab, markiert jeden Punkt als in Ordnung, nicht in Ordnung oder nicht zutreffend und hängt ein Foto an. In Flow hat jeder Punkt eine Gewichtung von 1 bis 3, die Punktzahl des Monats gibt es je Objekt und Bereich, und am Monatsende entsteht das PDF für den Kunden, samt offenen Maßnahmen.',
    },
    schede_consumi: {
      title: 'Sicherheitsdatenblätter und Verbrauch',
      body: 'Wer kontrolliert, will das Sicherheitsdatenblatt des Mittels sehen, das auf dem Reinigungswagen steht. In Flow hat jedes Objekt seine Produkte, jedes mit dem Datenblatt als PDF, und Sie sehen Entnahmen und Kosten des Monats. Auf dem Handy lassen sich die Datenblätter auch ohne Netz lesen, und die Entnahme wird direkt erfasst.',
    },
    verifiche_misure: {
      title: 'Prüfungen und Messwerte',
      body: 'Verteiler geschlossen, letzter Arbeitstag: Durchgängigkeit, Isolation, Fehlerstromschutzschalter, Schutzleiter. Die Elektrofachkraft trägt jeden Messwert am Handy ein, mit Ergebnis und Foto des Messgeräts. Flow sammelt die Messungen je Auftrag und setzt sie als Anlage zu Errichterbestätigung und Prüfprotokoll in Form (Grundlage: DIN VDE 0100-600).',
      note: 'GeoTapp sammelt und setzt in Form. Es prüft nicht, bestätigt nicht und garantiert keine Normkonformität. Bestätigung und Unterschrift bleiben bei der Elektrofachkraft.',
    },
    impianti_terra: {
      title: 'Fristen für wiederkehrende Prüfungen',
      body: 'Für jeden Kunden tragen Sie das Datum der letzten wiederkehrenden Prüfung ein, etwa nach DGUV V3 für Anlagen und Betriebsmittel. Flow erinnert Sie vor Ablauf der Frist, damit Sie es nicht erst merken, wenn sie schon abgelaufen ist.',
      note: 'Die Daten trägt Ihr Betrieb selbst ein. GeoTapp erinnert daran, führt keine Prüfung durch und sagt nicht, ob eine Prüfung gültig ist.',
    },
    documenti_imprese: {
      title: 'Unterlagen der Nachunternehmer',
      body: 'Bevor ein Nachunternehmer auf die Baustelle darf, wollen Sie seine Unterlagen vollständig haben und wissen, wann sie ablaufen. Flow führt eine Fristenliste der Unterlagen jedes Nachunternehmers und erinnert Sie vor dem Datum.',
      note: 'Es erinnert vor Ablauf, sagt aber nicht, ob ein Dokument gültig ist. Das prüfen Sie selbst oder Ihre Beraterin bzw. Ihr Berater.',
    },
    congruita: {
      title: 'Lohnkostenanteil je Baustelle',
      body: 'Am Ende der Baustelle fragt Ihr Steuerberater, wie hoch der Anteil der Arbeitsleistung am Auftragswert war. Flow rechnet für jede Baustelle eine interne Schätzung aus den erfassten Stunden und exportiert sie als CSV oder PDF, bereit zur Weitergabe.',
      note: 'Das ist eine interne Schätzung. In Deutschland schreibt keine Stelle einen Mindestanteil an Arbeitsleistung vor, die Zahl ist also eine Rechenhilfe und kein Nachweis.',
    },
    caldaie: {
      title: 'Heizungswartung',
      body: 'September: bei mehreren Kunden steht die Wartung an. Flow zeigt Ihnen, welche Anlagen im Monat anzurufen sind, und bereitet den Entwurf der Nachricht an den Kunden vor. Er geht nur raus, wenn Sie ihn abschicken. Auf dem Handy hat die Technikerin die Liste der Anlagen mit den Terminen und füllt den Wartungsbericht mit den Messwerten aus.',
      note: 'Die Messungen und die Feuerstättenschau macht der Bezirksschornsteinfeger (1. BImSchV). GeoTapp meldet nichts an Behörden: Es sammelt und setzt Ihre Daten in Form, prüft sie nicht und garantiert keine Konformität.',
    },
    fgas: {
      title: 'Kältemittel-Nachweis (F-Gase)',
      body: 'Ein Gerät mit fluorierten Gasen hat eine Füllmenge, ein CO2-Äquivalent und eine Geschichte von Einsätzen. In Flow sehen Sie die Geräte und was zu dokumentieren ist. Vom Handy öffnet der Techniker das Gerätebuch und trägt den neuen Einsatz gleich ein, ohne abends abzuschreiben.',
      note: 'Berichte an Stellen oder Behörden machen Techniker oder Betrieb selbst. GeoTapp übermittelt nichts, und die Sachkunde bleibt Sache der Fachkraft.',
    },
    consegna_firma: {
      title: 'Übergabe mit Unterschrift',
      body: 'Die Montage ist fertig. Der Techniker scannt mit dem Handy den Barcode jeder Seriennummer, macht die Abschlussfotos und lässt den Kunden auf dem Display unterschreiben. Heraus kommt ein Übergabeprotokoll als PDF mit Ihrem Logo, den Firmendaten und dem Barcode jeder Seriennummer. Es wandert in den Arbeitsbericht des Auftrags. In Flow sehen Sie die Übergaben des Monats und gestalten das Protokoll: Logo, Daten, Texte, Farbe.',
    },
    magazzino_furgone: {
      title: 'Lager im Transporter',
      body: 'Der Techniker steht beim Kunden und merkt, dass der passende Fitting fehlt. Auf dem Handy sieht er, was im Transporter liegt und was zur Neige geht, und bucht das verbrauchte Material auf den Auftrag. In Flow legen Sie Mindestmengen je Fahrzeug fest, sehen, was nachzubestellen ist, und was das Material jedes Auftrags kostet.',
    },
    sla: {
      title: 'Reaktionszeiten (SLA)',
      body: 'Im Wartungsvertrag steht, bis wann eine Meldung angenommen und bis wann sie behoben sein muss. In Flow zeigt jede Meldung die verbleibende Zeit für beides, je Vertrag. Am Monatsende gibt es den Bericht. Auf dem Handy sieht der Techniker die ihm zugewiesenen Meldungen, nimmt sie an und markiert sie als erledigt.',
    },
    qr_apparecchi: {
      title: 'QR-Codes an den Geräten',
      body: 'Vor einer Pumpe oder einem Schaltschrank scannt der Techniker das QR-Etikett und hat sofort Historie und Einsätze dieses Geräts. Wer ohne Konto scannt, etwa ein Mieter, kann ein Problem melden. In Flow verwalten Sie die Geräte und drucken die Etiketten.',
    },
  },
  shots: {
    flow_emergenze_attiva: 'Flow: Die Leitung wählt das Szenario und tippt im Grundriss auf die Gefahrenstelle, um die Übung zu starten',
    flow_emergenze_evento: 'Flow: Übersicht der laufenden Übung, mit den Antworten und der Zeit bis zur Antwort',
    flow_emergenze_evento_persone: 'Flow: Liste der Teammitglieder mit ihrer Antwort: anwesend, unterwegs oder kann nicht',
    flow_emergenze_sito: 'Flow: Grundriss des Objekts mit Ausgängen, Ausrüstung und Zonen',
    flow_emergenze_protocolli: 'Flow: die Abläufe je Szenario und Rolle',
    flow_emergenze_squadre: 'Flow: die Teams mit ihren Nachweisen, fehlende werden angezeigt',
    flow_emergenze_scadenzario: 'Flow: Fristenliste der Nachweise und der Prüfungen der Ausrüstung',
    tt_emergenze_dashboard: 'Handy: der Startbildschirm mit dem Hinweis auf die Übung',
    tt_emergenze_indicazioni: 'Handy: die persönlichen Anweisungen mit Rolle und dem, was zu tun ist',
    tt_emergenze_indicazioni_2: 'Handy: die Ausgänge in der richtigen Reihenfolge, ohne die gesperrten',
    tt_emergenze_risposta: 'Handy: die Antwort mit einem Tipp: anwesend, unterwegs oder kann nicht',
    tt_emergenze_piani: 'Handy: die Pläne, auch ohne Netz abrufbar',
  },
};

export default copy;
