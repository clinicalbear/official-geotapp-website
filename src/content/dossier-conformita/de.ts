import type { DossierCopy } from './types';

const de: DossierCopy = {
  metaTitle: 'GeoTapp Compliance-Dossier: Arbeitsnachweis statt Überwachung',
  metaDesc:
    'Was GeoTapp tut und was nicht, mit offen genannten Rechtsquellen und ehrlich benannten Grenzen. DSGVO, BDSG, Mitbestimmung, Integrität des Nachweises.',
  badge: 'Compliance-Dossier',
  h1: 'Arbeitsnachweis statt Überwachung',
  subtitle:
    'Was GeoTapp tut und, vor allem, was es nicht tut. Mit offen genannten Rechtsquellen und ohne Umschweife benannten Grenzen. Ein Dokument zum Lesen, Prüfen und Zitieren.',
  sections: [
    {
      heading: 'Warum es dieses Dokument gibt',
      paragraphs: [
        'In Brüssel werden gerade die Regeln dafür geschrieben, wie Beschäftigte überwacht werden dürfen, zwischen der Richtlinie zur Plattformarbeit, dem algorithmischen Management und dem auf die Arbeitswelt angewandten KI-Recht. In der Zwischenzeit muss, wer Teams ins Feld schickt, die Arbeitszeit schon heute erfassen, sie bei einem Streit belegen können und das alles, ohne die Privatsphäre der Menschen mit Füßen zu treten. Das ist ein schwieriges Gleichgewicht, und an diesem Gleichgewicht hängt ein großer Teil des Vertrauens zwischen denen, die Arbeit organisieren, und denen, die sie leisten.',
        'GeoTapp ist aus diesem Problem heraus entstanden, nicht daneben. Deshalb schreibt es, statt zu versprechen, schwarz auf weiß auf, was es tut und was nicht, mit offen genannten Rechtsquellen und ohne Umschweife benannten Grenzen. Was folgt, lässt sich lesen, prüfen und zitieren. Wer eine Schwachstelle findet, ist eingeladen, sie zu melden: Ein Compliance-Dossier zählt für das, was es trägt, nicht dafür, wie es klingt.',
      ],
    },
    {
      heading: 'Was es tut und vor allem, was es nicht tut',
      paragraphs: [
        'Es gibt nur ein Prinzip: das Ereignis festhalten, nicht der Person folgen.',
        'GeoTapp erfasst den Standort ausschließlich im Moment des Stempelns, beim Kommen und beim Gehen, und nicht im Laufe des Tages. Zwischen zwei Stempelungen findet keinerlei Tracking statt: keine Bewegungsspur, kein heimlich erfasster Standort, keine digitale Verfolgung. Das Foto, das die Stempelung begleitet, lässt sich nur mit der Live-Kamera aufnehmen; ein Bild aus der Galerie hochzuladen ist nicht möglich. Die erhobenen Daten sind durch eine Entwurfsentscheidung auf das notwendige Minimum reduziert, nicht als nachträgliche Korrektur.',
        'Was GeoTapp nicht tut, ist genauso wichtig. Es verfolgt Beschäftigte nicht außerhalb der Arbeitszeit, erstellt keine Verhaltensprofile, misst keine gewerkschaftliche Betätigung, liest keine Gefühlszustände aus, vergibt keine Punktwerte über Menschen. Das ist genau der Bereich, den das Europäische Parlament als zu verbieten benannt hat, und GeoTapp steht bereits außerhalb davon.',
      ],
    },
    {
      heading: 'Die Grundsätze der DSGVO, angewandt und nicht nur zitiert',
      paragraphs: [
        'Datenminimierung (Art. 5 Abs. 1 lit. c DSGVO): Der Standort wird nur beim Stempeln erhoben, nicht durchgehend.',
        'Zweckbindung (Art. 5 Abs. 1 lit. b): Der Zweck ist der Nachweis der geleisteten Arbeit, nicht die Fernkontrolle der Person.',
        'Rechtsgrundlage (Art. 6): Erfüllung des Arbeitsverhältnisses und dokumentiertes berechtigtes Interesse, begleitet von der Datenschutzinformation.',
        'Transparenz (Art. 12–14): Die beschäftigte Person erhält eine klare Datenschutzinformation. GeoTapp stellt eine Muster-Datenschutzinformation zur GPS-Erfassung kostenlos zum Download bereit.',
        'Datenschutz durch Technikgestaltung (Art. 25): Die minimale Erhebung ist das voreingestellte Verhalten des Werkzeugs, keine Option, die man erst aktivieren muss.',
      ],
    },
    {
      heading: 'Die Einordnung in den deutschen Rechtsrahmen',
      paragraphs: [
        'In Deutschland richtet sich die Verarbeitung von Beschäftigtendaten nach der DSGVO und dem Bundesdatenschutzgesetz, insbesondere § 26 BDSG: Daten von Beschäftigten dürfen verarbeitet werden, soweit dies für die Durchführung des Beschäftigungsverhältnisses erforderlich ist, und stets unter Wahrung der Verhältnismäßigkeit. Die Erfassung von Standortdaten greift in das Persönlichkeitsrecht ein und ist deshalb auf das tatsächlich Erforderliche zu begrenzen.',
        'Hinzu kommt die Mitbestimmung des Betriebsrats: Nach dem Betriebsverfassungsgesetz unterliegt die Einführung und Anwendung technischer Einrichtungen, die geeignet sind, das Verhalten oder die Leistung der Beschäftigten zu überwachen, der Mitbestimmung; in der Praxis wird dies in einer Betriebsvereinbarung geregelt. Wo ein Betriebsrat besteht, ist er zu beteiligen. Auch das Arbeitszeitgesetz bleibt zu beachten, etwa bei der Aufzeichnung von Arbeits- und Ruhezeiten.',
        'GeoTapp ordnet sich in diesen Rahmen als Werkzeug ein, das die Einhaltung erleichtert, nicht als Abkürzung, die sie umgeht. Verantwortlicher im Sinne der DSGVO bleibt das Unternehmen mit seinen Pflichten: GeoTapp liefert ein Werkzeug, das so gestaltet ist, dass es innerhalb der Regeln bleibt, sowie die Ressourcen, um sie anzuwenden. Für die übrigen europäischen Länder fasst die EU-Karte zur GPS-Erfassung von Beschäftigten neununddreißig von Hand geprüfte Länderprofile zusammen, jeweils mit Pflichten, zuständiger Behörde und Sanktionen des betreffenden Landes.',
      ],
    },
    {
      heading: 'Die Integrität des Nachweises',
      paragraphs: [
        'Wenn GeoTapp von „Arbeitsnachweis“ spricht, ist damit etwas gemeint, das einem Streit standhält, und um standzuhalten, muss es schwer zu fälschen und nach dem Erfassen unmöglich zu ändern sein. Die Verteidigung ist mehrschichtig.',
        'Die Aufnahme des Fotos ist auf die Live-Kamera beschränkt: Der Wert, der diesen Modus kennzeichnet, ist in den Clients festgelegt und wird vor allem von den Regeln der Datenbank beim Schreiben geprüft, die eine Stempelung mit einem abweichenden Modus zurückweisen. Bei jedem Foto berechnet der Client einen kryptografischen SHA-256-Fingerabdruck, notwendige Bedingung, um fortzufahren.',
        'Die Arbeitssitzungen sind nach ihrer Erstellung unveränderlich: Startzeit, der beim Stempeln erfasste Standort und die Identität der Person lassen sich von der beschäftigten Person nicht ändern, und das Löschen ist Administratoren vorbehalten. Sitzungen mit Standort entstehen nur über eine serverseitige Funktion mit administrativen Rechten, nicht durch direktes Schreiben aus der App, sodass die nutzende Person eine Stempelung weder rückdatieren noch ihren Standort verschieben noch sie verschwinden lassen kann.',
        'Die Erkennung gefälschter GPS-Standorte greift, noch bevor die Stempelung losgeht. Auf Android-Geräten ist die Prüfung mehrstufig, mit einer Liste bekannter Spoofing-Anwendungen, der Prüfung von Berechtigungen für simulierte Standorte und von Anzeichen für Root: Schlägt sie an, wird die Stempelung blockiert, nicht nur gemeldet. Auf iOS wird das native Signal des Betriebssystems genutzt, das einen per Software simulierten Standort anzeigt. Außerdem wird die „Teleportation“ abgefangen, also eine Bewegung mit physikalisch unmöglicher Geschwindigkeit zwischen zwei Stempelungen.',
        'Jede Stempelung hinterlässt schließlich eine Spur in einem serverseitigen Audit-Protokoll, mit einem vom Server und nicht vom Gerät erzeugten Zeitstempel, und kein Client kann in dieses Protokoll schreiben, nicht einmal ein Administrator.',
      ],
    },
    {
      heading: 'Die Grenzen, klar benannt',
      paragraphs: [
        'Dies ist der Abschnitt, den viele weglassen würden, und gerade er macht alles Übrige glaubwürdig. GeoTapp erschwert das Spoofing und belegt den Kontext der Stempelung, verspricht aber nicht das Unmögliche, und das auszusprechen ist eine Form von Respekt gegenüber denen, die lesen.',
        'Der Server prüft die Koordinaten nicht kryptografisch nach: Er kontrolliert, dass sie plausibel und innerhalb des etwaigen Geofence liegen, vertraut aber dem Standort, den das Gerät meldet. Die Geräteattestierung bestätigt, dass die App aus den offiziellen Kanälen stammt, schützt aber nicht vor einem Client, der von jemandem mit den nötigen Kenntnissen verändert und analysiert wurde. Der Modus „nur Live-Kamera“ ist eine ehrliche Erklärung des Geräts, kein kryptografischer Nachweis, den der Server am Bild wiederholen könnte. Die Prüfungen sind auf dem Smartphone umfassender als auf der Uhr. Und vor allem nimmt das Werkzeug dem Unternehmen seine Rolle als Verantwortlicher nicht ab: Bei ihm bleibt die Pflicht zur Datenschutzinformation, zur Betriebsvereinbarung, wo nötig, und zur Verhältnismäßigkeit.',
        'Anders gesagt: GeoTapp legt die Latte höher und dokumentiert das Ereignis, es verkauft keine Unverwundbarkeit. Wer Unverwundbarkeit verspricht, hat sie meist noch nie vor Gericht beweisen müssen.',
      ],
    },
    {
      heading: 'Die unterstützenden öffentlichen Ressourcen',
      paragraphs: [
        'Alles, was man braucht, um diese Grundsätze anzuwenden, ist öffentlich und kostenlos: die EU-Karte zur GPS-Erfassung von Beschäftigten mit den Profilen der neununddreißig Länder, die Muster-Datenschutzinformation zur GPS-Erfassung, der Bußgeldrechner, der Überwachungsindex. An der Quelle geprüft, frei zu nutzen und zu zitieren unter Angabe der Herkunft. Sie sind da, weil die rechtskonforme Gestaltung von Arbeit kein Privileg derer sein sollte, die sich eine Rechtsabteilung leisten können.',
      ],
    },
    {
      heading: 'Bestätigung',
      paragraphs: [
        'Die technischen Aussagen dieses Dokuments sind erstellt und unterzeichnet von Michele Angelo Petraroli, Gründer von GeoTapp, der die Verantwortung dafür übernimmt und für Prüfung und kritische Gegenrede zur Verfügung steht. Die Bestätigung durch einen Fachanwalt für Arbeitsrecht und einen Datenschutzbeauftragten wird in der nächsten Fassung des Dokuments ergänzt.',
      ],
    },
  ],
  sourcesTitle: 'Quellen und Verweise',
  sources: [
    'Verordnung (EU) 2016/679 (DSGVO), insbesondere Art. 5, 6, 12–14, 25.',
    'Bundesdatenschutzgesetz (BDSG), insbesondere § 26 zur Datenverarbeitung im Beschäftigungsverhältnis.',
    'Betriebsverfassungsgesetz, insbesondere die Mitbestimmung bei technischen Überwachungseinrichtungen; Arbeitszeitgesetz.',
    'In Beratung befindliche EU-Texte: Richtlinie zur Plattformarbeit; Bestimmungen zum algorithmischen Management; auf die Arbeitswelt angewandtes Recht zur künstlichen Intelligenz.',
  ],
  lastUpdated: 'Version 1.0',
  faq: {"title": "Häufige Fragen", "items": [{"q": "Was ist das Compliance-Dossier?", "a": "Es ist das Dokument, das mit Quellen in der Hand erklärt, warum GeoTapp ein Werkzeug zum Arbeitsnachweis ist und keines zur Überwachung, und wie das vor der DSGVO und dem Arbeitsrecht standhält. Es richtet sich an alle, die wirklich verstehen wollen, wie die Daten gehandhabt werden, nicht an jene, denen ein Slogan genügt."}, {"q": "Ist GeoTapp ein Überwachungssystem?", "a": "Nein, und es wurde gezielt so gebaut, dass es keines ist. Das Werkzeug erfasst den Standort nur beim Einstempeln, wenn jemand einen Auftrag beginnt oder abschließt, niemals durchgehend, und es erstellt die Datenschutzinformation zur Unterschrift. Es belegt, was wo getan wurde, es beobachtet keine Menschen."}, {"q": "Wofür brauche ich dieses Dossier?", "a": "Um zu antworten, wenn ein Mitarbeitender, ein Kunde oder ein Berater fragt, ob das, was Sie einsetzen, rechtskonform ist. Statt zu improvisieren, haben Sie einen Text, der die Begründung und die Quellen darlegt und den Sie unverändert weiterleiten können."}, {"q": "Sind die Quellen geprüft?", "a": "Ja, das Dossier verweist auf echtes Recht und echte Entscheidungen, am Ende aufgeführt mit dem Aktualisierungsdatum. Es bleibt dennoch eine informative Ressource und keine Rechtsberatung: Lassen Sie für Ihre konkrete Situation alles von einer Fachperson prüfen."}, {"q": "Kann ich es einem Kunden oder in einem Streitfall vorlegen?", "a": "Sie können es nutzen, um zu erklären, wie GeoTapp aufgebaut ist, und um zu zeigen, dass Rechtskonformität keine leichtfertig hingeworfene Behauptung ist. In einem Rechtsstreit zählen jedoch Ihre echten Daten und Ihre Datenschutzinformation: Das Dossier ist der Kontext, der Nachweis ist die aufgezeichnete Arbeitssitzung."}, {"q": "Gilt es nur für Italien?", "a": "Die zugrunde liegende Begründung trägt in der gesamten Union, weil sie von der DSGVO ausgeht, doch die Details zur Überwachung von Mitarbeitenden ändern sich von Land zu Land. Für die Situation eines einzelnen Staates gehen Sie von dessen Blatt hier in den Ressourcen aus."}]},
};

export default de;
