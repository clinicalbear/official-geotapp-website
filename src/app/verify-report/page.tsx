'use client';

/**
 * La pagina di verifica di un report GeoTapp.
 *
 * Fino a oggi non esisteva: ogni report consegnato stampava in calce
 * `geotapp.com/verify-report?id=...`, che era un 404. C'era solo
 * `/api/verify-report`, che accetta un POST con il file e non sa niente di `?id=`.
 * Quindi chi voleva verificare un documento sbatteva su una pagina di errore, in
 * un prodotto che vende la verificabilita'.
 *
 * Qui si carica il pacchetto e si legge l'esito. La verifica gira sul
 * verificatore aperto, lo stesso che chiunque puo' scaricare: se un giorno
 * GeoTapp non c'e' piu', il documento si verifica comunque.
 *
 * Vestito nella direzione L (docs/redesign-sito-2026-07/esplorazione/
 * verifica-report.html): hero .ph, zona di upload su nero, esiti nella
 * griglia .vres. Logica, upload e messaggi di esito NON sono cambiati:
 * il colore dell'esito resta guidato da `colore` (lo stesso oggetto COLORI
 * di prima), mai fissato a verde per non mentire su un esito degraded o
 * invalid. Niente animazioni "r/r-s" qui: questa pagina serve anche fuori
 * da /[locale]/ (l'indirizzo stampato sui report), dove LEffetti non gira,
 * e un elemento che aspetta un observer per diventare visibile e che non lo
 * trova resterebbe invisibile.
 */

import { Suspense, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { DEFAULT_LOCALE, getLocaleFromPathname, localizePath } from '@/lib/i18n/locale-routing';
import type { AppLocale } from '@/lib/i18n/config';
import './l-page.css';

/**
 * Testi della pagina, una voce per lingua. Fino al 30/09/2026 la pagina era scritta
 * solo in italiano e la mostrava identica sotto /en/, /de/ ecc. Chi non ha una voce
 * propria cade sull'inglese (l'indirizzo senza lingua, quello stampato sui report,
 * resta in italiano).
 */
interface Testi {
  h1: string;
  lede: string;
  codePre: string;
  codeMid: string;
  codePost: string;
  codeAfter: string;
  fileLabel: string;
  verifying: string;
  verify: string;
  hint: string;
  notSentB: string;
  notSent: string;
  keepH: string;
  keep1: string;
  keepArchive: string;
  keepWarnB: string;
  keepWarn: string;
  download: string;
  failed: string;
  failedNoMsg: string;
  valid: string;
  degraded: string;
  invalid: string;
  signature: string;
  seal: string;
  issuedBy: string;
  eventsPhotos: string;
  mismatchPre: string;
  mismatchPost: string;
  surveyH: string;
  surveyP: string;
  surveyA: string;
}

const TESTI: Record<string, Testi> = {
  it: {
    h1: 'Verifica un report GeoTapp',
    lede: 'Carica il pacchetto firmato e questa pagina ricalcola le impronte di ogni evento e di ogni foto e controlla la firma elettronica. Il controllo gira nel tuo browser: il file non ci viene inviato.',
    codePre: 'Il codice',
    codeMid: 'identifica un documento, ma per verificarlo serve il file: l\u2019identificativo da solo non dimostra niente. Carica il pacchetto ZIP che hai ricevuto, oppure aprilo dal codice a otto cifre stampato sul documento (',
    codePost: 'geotapp.com/r/\u2026',
    codeAfter: ').',
    fileLabel: 'Pacchetto firmato (.zip)',
    verifying: 'Verifica in corso\u2026',
    verify: 'Verifica il documento',
    hint: 'Il file non lascia questo computer: la verifica avviene nel tuo browser.',
    notSentB: 'Il pacchetto non ci viene inviato.',
    notSent: ' Il controllo qui sopra gira dentro il tuo browser: le impronte e la firma elettronica le ricalcola questo computer, non i nostri server. Non ci arriva il file, non ci arrivano le foto.',
    keepH: 'Il verificatore da tenere',
    keep1: '\u00c8 lo stesso controllo qui sopra, in un file solo che ti porti via: ',
    keepArchive: '. Lo scarichi una volta e resta tuo: si apre con un doppio clic come una pagina qualsiasi, ci trascini dentro il pacchetto ricevuto e ti dice se \u00e8 integro. Dentro l\u2019archivio c\u2019\u00e8 anche la versione da riga di comando per Node.js, le istruzioni e le impronte SHA-256 per controllare di aver ricevuto proprio i nostri file.',
    keepWarnB: '\u00c8 un file, non un programma da installare.',
    keepWarn: ' Non \u00e8 un eseguibile e non chiede permessi di amministratore: \u00e8 una pagina HTML che gira sul tuo computer, dentro il tuo browser, senza bisogno di internet una volta scaricata. Non manda niente a noi. Serve a questo: anche fra dieci anni, se questa pagina non ci fosse pi\u00f9, il documento resta verificabile.',
    download: 'Scarica il verificatore offline (.zip)',
    failed: 'Verifica non riuscita: ',
    failedNoMsg: 'Verifica non riuscita: controlla che il file sia il pacchetto .zip ricevuto.',
    valid: 'Documento integro',
    degraded: 'Documento integro, con riserve',
    invalid: 'Documento non integro',
    signature: 'Firma',
    seal: 'Sigillo',
    issuedBy: 'Emesso da',
    eventsPhotos: 'Eventi e foto',
    mismatchPre: 'Impronte che non tornano: ',
    mismatchPost: '. Il contenuto non \u00e8 quello firmato.',
    surveyH: 'Una domanda a chi il lavoro lo commissiona',
    surveyP: 'Stiamo raccogliendo, in tutta Europa, quanto spesso un lavoro pagato viene messo in dubbio e cosa succede dopo. Due minuti, anonimo, nessun dato obbligatorio.',
    surveyA: 'Rispondi al sondaggio',
  },
  de: {
    h1: 'Einen GeoTapp-Bericht prüfen',
    lede: 'Laden Sie das signierte Paket hoch: Diese Seite berechnet den Fingerabdruck jedes Ereignisses und jedes Fotos neu und prüft die elektronische Signatur. Die Prüfung läuft in Ihrem Browser: Die Datei wird nicht an uns gesendet.',
    codePre: 'Der Code',
    codeMid: 'kennzeichnet ein Dokument, aber zum Prüfen braucht es die Datei: Die Kennung allein beweist nichts. Laden Sie das ZIP-Paket hoch, das Sie erhalten haben, oder öffnen Sie es über den achtstelligen Code, der auf dem Dokument steht (',
    codePost: 'geotapp.com/r/\u2026',
    codeAfter: ').',
    fileLabel: 'Signiertes Paket (.zip)',
    verifying: 'Prüfung läuft\u2026',
    verify: 'Dokument prüfen',
    hint: 'Die Datei verlässt diesen Computer nicht: Die Prüfung findet in Ihrem Browser statt.',
    notSentB: 'Das Paket wird nicht an uns gesendet.',
    notSent: ' Die Prüfung oben läuft in Ihrem Browser: Die Fingerabdrücke und die elektronische Signatur berechnet dieser Computer neu, nicht unsere Server. Die Datei kommt nicht bei uns an, die Fotos auch nicht.',
    keepH: 'Der Verifier zum Behalten',
    keep1: 'Es ist dieselbe Prüfung wie oben, in einer einzigen Datei, die Sie mitnehmen: ',
    keepArchive: '. Sie laden sie einmal herunter und sie gehört Ihnen: Sie öffnet sich per Doppelklick wie jede Webseite, Sie ziehen das erhaltene Paket hinein und erfahren, ob es unversehrt ist. Im Archiv liegen außerdem die Kommandozeilen-Version für Node.js, die Anleitung und die SHA-256-Fingerabdrücke, damit Sie prüfen können, dass Sie genau unsere Dateien erhalten haben.',
    keepWarnB: 'Es ist eine Datei, kein Programm zum Installieren.',
    keepWarn: ' Sie ist keine ausführbare Datei und verlangt keine Administratorrechte: Es ist eine HTML-Seite, die auf Ihrem Computer in Ihrem Browser läuft, nach dem Herunterladen ohne Internetverbindung. Sie sendet nichts an uns. Darum geht es: Auch in zehn Jahren, wenn es diese Seite nicht mehr gäbe, lässt sich das Dokument noch prüfen.',
    download: 'Offline-Verifier herunterladen (.zip)',
    failed: 'Prüfung fehlgeschlagen: ',
    failedNoMsg: 'Prüfung fehlgeschlagen: Kontrollieren Sie, ob die Datei das erhaltene .zip-Paket ist.',
    valid: 'Dokument unversehrt',
    degraded: 'Dokument unversehrt, mit Vorbehalten',
    invalid: 'Dokument nicht unversehrt',
    signature: 'Signatur',
    seal: 'Siegel',
    issuedBy: 'Ausgestellt von',
    eventsPhotos: 'Ereignisse und Fotos',
    mismatchPre: 'Fingerabdrücke, die nicht übereinstimmen: ',
    mismatchPost: '. Der Inhalt ist nicht der signierte.',
    surveyH: 'Eine Frage an alle, die Arbeit beauftragen',
    surveyP: 'Wir sammeln in ganz Europa, wie oft bezahlte Arbeit angezweifelt wird und was danach geschieht. Zwei Minuten, anonym, keine Pflichtangaben.',
    surveyA: 'An der Umfrage teilnehmen',
  },
  fr: {
    h1: 'Vérifier un rapport GeoTapp',
    lede: 'Téléversez le paquet signé : cette page recalcule l\'empreinte de chaque événement et de chaque photo et contrôle la signature électronique. La vérification s\'exécute dans votre navigateur : le fichier ne nous est jamais envoyé.',
    codePre: 'Le code',
    codeMid: 'identifie un document, mais pour le vérifier il faut le fichier : l\'identifiant seul ne prouve rien. Téléversez le paquet ZIP que vous avez reçu, ou ouvrez-le à partir du code de huit caractères imprimé sur le document (',
    codePost: 'geotapp.com/r/\u2026',
    codeAfter: ').',
    fileLabel: 'Paquet signé (.zip)',
    verifying: 'Vérification en cours\u2026',
    verify: 'Vérifier le document',
    hint: 'Le fichier ne quitte pas cet ordinateur : la vérification se fait dans votre navigateur.',
    notSentB: 'Le paquet ne nous est pas envoyé.',
    notSent: ' La vérification ci-dessus s\'exécute dans votre navigateur : les empreintes et la signature électronique sont recalculées par cet ordinateur, pas par nos serveurs. Le fichier ne nous parvient pas, les photos non plus.',
    keepH: 'Le vérificateur à garder',
    keep1: 'C\'est la même vérification que ci-dessus, dans un seul fichier que vous emportez : ',
    keepArchive: '. Vous le téléchargez une fois et il reste à vous : il s\'ouvre d\'un double-clic comme n\'importe quelle page web, vous y glissez le paquet reçu et il vous dit s\'il est intact. L\'archive contient aussi la version en ligne de commande pour Node.js, le mode d\'emploi et les empreintes SHA-256, pour que vous puissiez contrôler que vous avez reçu exactement nos fichiers.',
    keepWarnB: 'C\'est un fichier, pas un programme à installer.',
    keepWarn: ' Ce n\'est pas un exécutable et il ne demande aucun droit d\'administrateur : c\'est une page HTML qui s\'exécute sur votre ordinateur, dans votre navigateur, sans connexion internet une fois téléchargée. Il ne nous envoie rien. C\'est tout l\'intérêt : même dans dix ans, si cette page n\'existait plus, le document resterait vérifiable.',
    download: 'Télécharger le vérificateur hors ligne (.zip)',
    failed: 'Échec de la vérification : ',
    failedNoMsg: 'Échec de la vérification : contrôlez que le fichier est bien le paquet .zip que vous avez reçu.',
    valid: 'Document intact',
    degraded: 'Document intact, avec réserves',
    invalid: 'Document non intact',
    signature: 'Signature',
    seal: 'Sceau',
    issuedBy: 'Émis par',
    eventsPhotos: 'Événements et photos',
    mismatchPre: 'Empreintes qui ne correspondent pas : ',
    mismatchPost: '. Le contenu n\'est pas celui qui a été signé.',
    surveyH: 'Une question à ceux qui commandent le travail',
    surveyP: 'Partout en Europe, nous recueillons la fréquence à laquelle un travail payé est remis en cause, et ce qui se passe ensuite. Deux minutes, anonyme, aucune donnée obligatoire.',
    surveyA: 'Répondre à l\'enquête',
  },
  es: {
    h1: 'Verifica un informe de GeoTapp',
    lede: 'Sube el paquete firmado y esta página recalcula la huella de cada evento y de cada foto y comprueba la firma electrónica. La comprobación se ejecuta en tu navegador: el archivo no se nos envía.',
    codePre: 'El código',
    codeMid: 'identifica un documento, pero para verificarlo hace falta el archivo: el identificador por sí solo no demuestra nada. Sube el paquete ZIP que has recibido, o ábrelo desde el código de ocho caracteres impreso en el documento (',
    codePost: 'geotapp.com/r/\u2026',
    codeAfter: ').',
    fileLabel: 'Paquete firmado (.zip)',
    verifying: 'Verificación en curso\u2026',
    verify: 'Verifica el documento',
    hint: 'El archivo no sale de este ordenador: la verificación se hace en tu navegador.',
    notSentB: 'El paquete no se nos envía.',
    notSent: ' La comprobación de arriba se ejecuta dentro de tu navegador: las huellas y la firma electrónica las recalcula este ordenador, no nuestros servidores. No nos llega el archivo, no nos llegan las fotos.',
    keepH: 'El verificador que conviene guardar',
    keep1: 'Es la misma comprobación de arriba, en un solo archivo que te llevas: ',
    keepArchive: '. Lo descargas una vez y es tuyo: se abre con un doble clic como cualquier página, arrastras dentro el paquete recibido y te dice si está íntegro. Dentro del archivo comprimido también está la versión de línea de comandos para Node.js, las instrucciones y las huellas SHA-256 para comprobar que has recibido exactamente nuestros archivos.',
    keepWarnB: 'Es un archivo, no un programa que instalar.',
    keepWarn: ' No es un ejecutable y no pide permisos de administrador: es una página HTML que se ejecuta en tu ordenador, dentro de tu navegador, sin necesidad de internet una vez descargada. No nos envía nada. Sirve para esto: incluso dentro de diez años, si esta página ya no existiera, el documento seguiría siendo verificable.',
    download: 'Descargar el verificador sin conexión (.zip)',
    failed: 'Verificación fallida: ',
    failedNoMsg: 'Verificación fallida: comprueba que el archivo sea el paquete .zip recibido.',
    valid: 'Documento íntegro',
    degraded: 'Documento íntegro, con reservas',
    invalid: 'Documento no íntegro',
    signature: 'Firma',
    seal: 'Sello',
    issuedBy: 'Emitido por',
    eventsPhotos: 'Eventos y fotos',
    mismatchPre: 'Huellas que no coinciden: ',
    mismatchPost: '. El contenido no es el que se firmó.',
    surveyH: 'Una pregunta para quien encarga el trabajo',
    surveyP: 'En toda Europa estamos recogiendo con qué frecuencia se pone en duda un trabajo ya pagado, y qué pasa después. Dos minutos, anónimo, nada obligatorio.',
    surveyA: 'Responde a la encuesta',
  },
  pt: {
    h1: 'Verifique um relatório GeoTapp',
    lede: 'Carregue o pacote assinado e esta página volta a calcular as impressões de cada evento e de cada fotografia e confirma a assinatura eletrónica. A verificação corre no seu navegador: o ficheiro não nos é enviado.',
    codePre: 'O código',
    codeMid: 'identifica um documento, mas para o verificar é preciso o ficheiro: o identificador, por si só, não demonstra nada. Carregue o pacote ZIP que recebeu, ou abra-o a partir do código de oito caracteres impresso no documento (',
    codePost: 'geotapp.com/r/\u2026',
    codeAfter: ').',
    fileLabel: 'Pacote assinado (.zip)',
    verifying: 'A verificar\u2026',
    verify: 'Verificar o documento',
    hint: 'O ficheiro não sai deste computador: a verificação é feita no seu navegador.',
    notSentB: 'O pacote não nos é enviado.',
    notSent: ' A verificação acima corre dentro do seu navegador: as impressões e a assinatura eletrónica são recalculadas por este computador, não pelos nossos servidores. Não nos chega o ficheiro, nem as fotografias.',
    keepH: 'O verificador para guardar',
    keep1: '\u00c9 a mesma verificação acima, num único ficheiro que leva consigo: ',
    keepArchive: '. Descarrega-o uma vez e fica seu: abre-se com um duplo clique como qualquer página, arrasta para lá o pacote recebido e ele diz-lhe se está íntegro. Dentro do arquivo há também a versão de linha de comandos para Node.js, as instruções e as impressões SHA-256 para confirmar que recebeu mesmo os nossos ficheiros.',
    keepWarnB: '\u00c9 um ficheiro, não um programa para instalar.',
    keepWarn: ' Não é um executável e não pede permissões de administrador: é uma página HTML que corre no seu computador, dentro do seu navegador, sem precisar de internet depois de descarregada. Não nos envia nada. Serve para isto: mesmo daqui a dez anos, se esta página já não existisse, o documento continuaria a poder ser verificado.',
    download: 'Descarregar o verificador offline (.zip)',
    failed: 'Verificação falhada: ',
    failedNoMsg: 'Verificação falhada: confirme que o ficheiro é o pacote .zip que recebeu.',
    valid: 'Documento íntegro',
    degraded: 'Documento íntegro, com reservas',
    invalid: 'Documento não íntegro',
    signature: 'Assinatura',
    seal: 'Selo',
    issuedBy: 'Emitido por',
    eventsPhotos: 'Eventos e fotografias',
    mismatchPre: 'Impressões que não coincidem: ',
    mismatchPost: '. O conteúdo não é o que foi assinado.',
    surveyH: 'Uma pergunta a quem encomenda o trabalho',
    surveyP: 'Estamos a recolher, em toda a Europa, com que frequência um trabalho pago é posto em dúvida e o que acontece depois. Dois minutos, anónimo, nenhum dado obrigatório.',
    surveyA: 'Responder ao inquérito',
  },
  da: {
    h1: 'Verificér en GeoTapp-rapport',
    lede: 'Upload den signerede pakke, så genberegner denne side fingeraftrykkene for hver hændelse og hvert foto og kontrollerer den elektroniske signatur. Kontrollen kører i din browser: filen sendes ikke til os.',
    codePre: 'Koden',
    codeMid: 'identificerer et dokument, men for at verificere det skal man bruge filen: identifikatoren alene beviser ingenting. Upload den ZIP-pakke, du har modtaget, eller åbn den med den ottecifrede kode, der står på dokumentet (',
    codePost: 'geotapp.com/r/\u2026',
    codeAfter: ').',
    fileLabel: 'Signeret pakke (.zip)',
    verifying: 'Verificerer\u2026',
    verify: 'Verificér dokumentet',
    hint: 'Filen forlader ikke denne computer: verificeringen sker i din browser.',
    notSentB: 'Pakken sendes ikke til os.',
    notSent: ' Kontrollen ovenfor kører inde i din browser: fingeraftrykkene og den elektroniske signatur genberegnes af denne computer, ikke af vores servere. Filen når ikke frem til os, og det gør fotoene heller ikke.',
    keepH: 'Verifikatoren, du kan beholde',
    keep1: 'Det er den samme kontrol som ovenfor, i én fil, du tager med dig: ',
    keepArchive: '. Du downloader den én gang, og så er den din: den åbnes med et dobbeltklik som en hvilken som helst side, du trækker den modtagne pakke ind i den, og den fortæller dig, om pakken er intakt. I arkivet ligger også kommandolinjeversionen til Node.js, vejledningen og SHA-256-fingeraftrykkene, så du kan kontrollere, at du har fået netop vores filer.',
    keepWarnB: 'Det er en fil, ikke et program, der skal installeres.',
    keepWarn: ' Den er ikke en eksekverbar fil og beder ikke om administratorrettigheder: det er en HTML-side, der kører på din computer, inde i din browser, uden brug for internet, når den først er downloadet. Den sender ikke noget til os. Det er pointen: selv om ti år, hvis denne side ikke længere fandtes, kan dokumentet stadig verificeres.',
    download: 'Download offline-verifikatoren (.zip)',
    failed: 'Verificeringen mislykkedes: ',
    failedNoMsg: 'Verificeringen mislykkedes: kontrollér, at filen er den modtagne .zip-pakke.',
    valid: 'Dokumentet er intakt',
    degraded: 'Dokumentet er intakt, med forbehold',
    invalid: 'Dokumentet er ikke intakt',
    signature: 'Signatur',
    seal: 'Forsegling',
    issuedBy: 'Udstedt af',
    eventsPhotos: 'Hændelser og fotos',
    mismatchPre: 'Fingeraftryk, der ikke stemmer: ',
    mismatchPost: '. Indholdet er ikke det, der blev signeret.',
    surveyH: 'Et spørgsmål til dem, der bestiller arbejdet',
    surveyP: 'Vi indsamler i hele Europa, hvor ofte betalt arbejde drages i tvivl, og hvad der sker bagefter. To minutter, anonymt, ingen obligatoriske oplysninger.',
    surveyA: 'Besvar spørgeskemaet',
  },
  nl: {
    h1: 'Controleer een GeoTapp-rapport',
    lede: 'Upload het ondertekende pakket en deze pagina berekent de vingerafdrukken van elke gebeurtenis en van elke foto opnieuw en controleert de elektronische handtekening. De controle draait in uw browser: het bestand wordt niet naar ons gestuurd.',
    codePre: 'De code',
    codeMid: 'identificeert een document, maar om het te controleren is het bestand nodig: de identificatiecode alleen bewijst niets. Upload het ZIP-pakket dat u hebt ontvangen, of open het met de achtcijferige code die op het document staat (',
    codePost: 'geotapp.com/r/…',
    codeAfter: ').',
    fileLabel: 'Ondertekend pakket (.zip)',
    verifying: 'Bezig met controleren…',
    verify: 'Controleer het document',
    hint: 'Het bestand verlaat deze computer niet: de controle vindt plaats in uw browser.',
    notSentB: 'Het pakket wordt niet naar ons gestuurd.',
    notSent: ' De controle hierboven draait in uw browser: de vingerafdrukken en de elektronische handtekening worden door deze computer opnieuw berekend, niet door onze servers. Het bestand komt niet bij ons aan, de foto\'s ook niet.',
    keepH: 'De verifier om te bewaren',
    keep1: 'Het is dezelfde controle als hierboven, in één bestand dat u meeneemt: ',
    keepArchive: '. U downloadt het één keer en het blijft van u: het opent met een dubbelklik als een gewone pagina, u sleept het ontvangen pakket erin en het zegt of het intact is. In het archief zit ook de versie voor de opdrachtregel voor Node.js, de instructies en de SHA-256-vingerafdrukken om te controleren dat u precies onze bestanden hebt ontvangen.',
    keepWarnB: 'Het is een bestand, geen programma om te installeren.',
    keepWarn: ' Het is geen uitvoerbaar bestand en vraagt geen beheerdersrechten: het is een HTML-pagina die op uw computer draait, in uw browser, zonder internet nodig te hebben zodra ze is gedownload. Ze stuurt niets naar ons. Daar gaat het om: ook over tien jaar, als deze pagina er niet meer zou zijn, blijft het document te controleren.',
    download: 'Download de offline verifier (.zip)',
    failed: 'Controle mislukt: ',
    failedNoMsg: 'Controle mislukt: controleer of het bestand het ontvangen .zip-pakket is.',
    valid: 'Document intact',
    degraded: 'Document intact, met voorbehoud',
    invalid: 'Document niet intact',
    signature: 'Handtekening',
    seal: 'Verzegeling',
    issuedBy: 'Uitgegeven door',
    eventsPhotos: 'Gebeurtenissen en foto\'s',
    mismatchPre: 'Vingerafdrukken die niet kloppen: ',
    mismatchPost: '. De inhoud is niet die welke is ondertekend.',
    surveyH: 'Een vraag aan wie het werk opdraagt',
    surveyP: 'We verzamelen in heel Europa hoe vaak betaald werk in twijfel wordt getrokken en wat er daarna gebeurt. Twee minuten, anoniem, geen verplichte gegevens.',
    surveyA: 'Doe mee met de enquête',
  },
  en: {
    h1: 'Verify a GeoTapp report',
    lede: 'Upload the signed package and this page recalculates the fingerprint of every event and every photo and checks the electronic signature. The check runs in your browser: the file is never sent to us.',
    codePre: 'The code',
    codeMid: 'identifies a document, but to verify it you need the file: the identifier alone proves nothing. Upload the ZIP package you received, or open it from the eight-character code printed on the document (',
    codePost: 'geotapp.com/r/\u2026',
    codeAfter: ').',
    fileLabel: 'Signed package (.zip)',
    verifying: 'Verifying\u2026',
    verify: 'Verify the document',
    hint: 'The file does not leave this computer: the check happens in your browser.',
    notSentB: 'The package is not sent to us.',
    notSent: ' The check above runs inside your browser: the fingerprints and the electronic signature are recalculated by this computer, not by our servers. The file does not reach us, and neither do the photos.',
    keepH: 'The verifier to keep',
    keep1: 'It is the same check as above, in a single file you take away with you: ',
    keepArchive: '. You download it once and it stays yours: it opens with a double click like any web page, you drag the package you received into it and it tells you whether it is intact. The archive also contains the command-line version for Node.js, the instructions and the SHA-256 fingerprints, so you can check you received our files exactly as they are.',
    keepWarnB: 'It is a file, not a program to install.',
    keepWarn: ' It is not an executable and does not ask for administrator permissions: it is an HTML page that runs on your computer, inside your browser, with no internet connection needed once downloaded. It sends nothing to us. That is the point: even in ten years, if this page no longer existed, the document would still be verifiable.',
    download: 'Download the offline verifier (.zip)',
    failed: 'Verification failed: ',
    failedNoMsg: 'Verification failed: check that the file is the .zip package you received.',
    valid: 'Document intact',
    degraded: 'Document intact, with reservations',
    invalid: 'Document not intact',
    signature: 'Signature',
    seal: 'Seal',
    issuedBy: 'Issued by',
    eventsPhotos: 'Events and photos',
    mismatchPre: 'Fingerprints that do not match: ',
    mismatchPost: '. The content is not what was signed.',
    surveyH: 'A question for whoever commissions the work',
    surveyP: 'We are collecting, across Europe, how often paid work is called into question and what happens next. Two minutes, anonymous, no mandatory data.',
    surveyA: 'Take the survey',
  },
};

interface Esito {
  status?: 'valid' | 'degraded' | 'invalid';
  integrityLevel?: string;
  signatureStatus?: string;
  sealStatus?: string;
  issuerDisplayName?: string | null;
  companyIdentity?: {
    companyName?: string | null;
    reportId?: string | null;
  };
  summary?: {
    eventsCount: number;
    photosCount: number;
    missingPhotos: number;
    hashMismatches: number;
  };
  warnings?: string[];
  errors?: string[];
  error?: string;
}

const COLORI = {
  valid: { bordo: '#15803D', fondo: '#F7F9FC', testo: '#144A27' },
  degraded: { bordo: '#C98A28', fondo: '#F7F9FC', testo: '#7A4900' },
  invalid: { bordo: '#C65246', fondo: '#F7F9FC', testo: '#7C1F17' },
} as const;

/**
 * Il guscio con il Suspense.
 *
 * `useSearchParams()` in un componente client obbliga Next a un confine di
 * Suspense: senza, la build di produzione muore in prerender con
 * "useSearchParams() should be wrapped in a suspense boundary". In `next dev`
 * non si vede, perche' il prerender non avviene: l'ho preso in faccia dalla
 * pipeline di deploy, non dai test.
 */
export default function PaginaVerifica() {
  return (
    <Suspense fallback={<div className="lp-l lp-verifica" />}>
      <VerificaReport />
    </Suspense>
  );
}

interface Verificatore {
  verificaPacchetto: (byte: Uint8Array) => Promise<Esito>;
}

/**
 * Carica il verificatore compilato per il browser, una volta sola.
 *
 * Si usa un tag `<script>` e non un `import()` dinamico per due motivi: il
 * bundler proverebbe a risolvere `/verifier-geotapp.js` a compilazione e la
 * build muore, e la via con `Function('return import(u)')` chiede
 * `unsafe-eval`, che questo sito non concede. Sono 270 KB caricati solo
 * quando qualcuno preme il pulsante, non a ogni apertura della pagina.
 */
function caricaVerificatore(): Promise<Verificatore> {
  const g = window as unknown as { GeoTappVerifier?: Verificatore };
  if (g.GeoTappVerifier) return Promise.resolve(g.GeoTappVerifier);
  return new Promise((risolvi, rifiuta) => {
    const tag = document.createElement('script');
    tag.src = '/verifier-geotapp.js';
    tag.onload = () => {
      if (g.GeoTappVerifier) risolvi(g.GeoTappVerifier);
      else rifiuta(new Error('verificatore caricato ma non disponibile'));
    };
    tag.onerror = () => rifiuta(new Error('verificatore non raggiungibile'));
    document.head.appendChild(tag);
  });
}

function VerificaReport() {
  const parametri = useSearchParams();
  const locale: AppLocale | null = getLocaleFromPathname(usePathname());
  const t = TESTI[locale ?? DEFAULT_LOCALE] ?? TESTI[(locale ?? DEFAULT_LOCALE).split('-')[0]] ?? TESTI.en;
  const idStampato = parametri.get('id');
  const [file, setFile] = useState<File | null>(null);
  const [inCorso, setInCorso] = useState(false);
  const [esito, setEsito] = useState<Esito | null>(null);

  /**
   * La verifica gira QUI, nel browser di chi legge, e il pacchetto non parte
   * mai da questo computer.
   *
   * Prima si mandava il file a `/api/verify-report`, che lo verificava sui
   * nostri server e rispondeva `verificationMode: "online"`. Funzionava, ma
   * era la cosa che noi stessi scriviamo essere sbagliata: chi ha prodotto
   * la prova non puo' essere anche l'unico che la ricontrolla. E per un
   * committente pubblico caricare il pacchetto significa rimandarci foto e
   * dati del personale.
   *
   * Il modulo e' lo stesso identico verificatore, compilato per il browser:
   * le impronte e la firma le ricalcola la macchina di chi verifica.
   */
  async function verifica() {
    if (!file || inCorso) return;
    setInCorso(true);
    setEsito(null);
    try {
      const byte = new Uint8Array(await file.arrayBuffer());
      const verificatore = await caricaVerificatore();
      setEsito(await verificatore.verificaPacchetto(byte));
    } catch (err) {
      const messaggio = err instanceof Error ? err.message : '';
      setEsito({
        error: messaggio ? `${t.failed}${messaggio}` : t.failedNoMsg,
      });
    } finally {
      setInCorso(false);
    }
  }

  const stato = esito?.status;
  const colore = stato ? COLORI[stato] : null;

  return (
    <div className="lp-l lp-verifica">
      <section className="ph">
        <div className="w">
          <h1>{t.h1}</h1>
          <p className="lede">{t.lede}</p>
        </div>
      </section>

      <section className="sec ink"><div className="w"><div className="vzone">
        {/* Chi arriva dal vecchio indirizzo stampato in calce ai report:
            `?id=...` da solo non basta, e va detto invece di lasciarlo davanti a
            una pagina che sembra sbagliata. */}
        {idStampato ? (
          <div className="vnotice">
            {t.codePre} <span className="mono">{idStampato}</span> {t.codeMid}
            <span className="mono">{t.codePost}</span>{t.codeAfter}
          </div>
        ) : null}

        <div className="form">
          <div className="fld">
            <label>{t.fileLabel}</label>
            <input
              type="file"
              accept=".zip,application/zip"
              onChange={(e) => {
                setFile(e.target.files?.[0] ?? null);
                setEsito(null);
              }}
              className="in"
            />
          </div>
          <button
            type="button"
            onClick={verifica}
            disabled={!file || inCorso}
            className="b1"
            style={{ border: 0, cursor: !file || inCorso ? 'default' : 'pointer' }}
          >
            {inCorso ? t.verifying : t.verify}
          </button>
          <p className="hint">{t.hint}</p>
        </div>

        {/* Chi deve fidarsi di una prova non puo' dipendere da chi l'ha
            prodotta. Per questo il controllo gira nel browser di chi legge. */}
        <div className="vnotice" style={{ marginTop: 22 }}>
          <b>{t.notSentB}</b>{t.notSent}
        </div>

        {/* Bottone vero, non un link infilato in un paragrafo: nel vecchio
            riquadro grigio prendeva lo stesso colore del testo e nessuno lo
            cliccava. Chi scarica un .zip deve capire cos'è prima di
            scaricarlo, non dopo: spiegazione, poi l'avviso che è un file
            locale, poi il bottone. */}
        <div className="voffline">
          <h2>{t.keepH}</h2>
          <p>
            {t.keep1}
            <span className="mono">verificatore-geotapp.html</span>
            {t.keepArchive}
          </p>
          <p className="voffline-warn">
            <b>{t.keepWarnB}</b>
            {t.keepWarn}
          </p>
          <a
            href="/geotapp-report-verifier-offline.zip"
            download
            className="b1 voffline-btn"
          >
            {t.download}
          </a>
        </div>

        {esito?.error ? (
          <div className="errbox">{esito.error}</div>
        ) : null}
      </div></div></section>

      {stato && colore ? (
        <section className="sec"><div className="w">
          <div
            className="valid"
            style={{ background: colore.fondo, color: colore.testo, borderLeft: `6px solid ${colore.bordo}` }}
          >
            <b>
              {stato === 'valid' ? t.valid : stato === 'degraded' ? t.degraded : t.invalid}
            </b>
          </div>

          <div className="vres">
            <div>
              <p className="lb k">{t.signature}</p>
              <b>{esito?.signatureStatus ?? '—'}</b>
            </div>
            <div>
              <p className="lb k">{t.seal}</p>
              <b>{esito?.sealStatus ?? '—'}</b>
            </div>
            <div>
              <p className="lb k">{t.issuedBy}</p>
              <b>
                {esito?.issuerDisplayName ??
                  esito?.companyIdentity?.companyName ??
                  '—'}
              </b>
            </div>
            <div>
              <p className="lb k">{t.eventsPhotos}</p>
              <b>
                {esito?.summary
                  ? `${esito.summary.eventsCount} · ${esito.summary.photosCount}`
                  : '—'}
              </b>
            </div>
          </div>

          {esito?.summary && esito.summary.hashMismatches > 0 ? (
            <p style={{ marginTop: 22, color: COLORI.invalid.testo }}>
              {t.mismatchPre}{esito.summary.hashMismatches}{t.mismatchPost}
            </p>
          ) : null}

          {esito?.warnings?.length ? (
            <ul className="warn-list">
              {esito.warnings.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          ) : null}

          {esito?.errors?.length ? (
            <ul className="err-list" style={{ color: COLORI.invalid.testo }}>
              {esito.errors.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          ) : null}
        </div></section>
      ) : null}

      {/* Solo a verifica fatta: prima la pagina serve a chi deve controllare un
          documento, e non le si mette davanti nient'altro. Chi arriva fin qui e'
          quasi sempre il committente, cioe' il lato del sondaggio che ci manca. */}
      {esito ? (
        <section className="vsurvey">
          <div className="w">
            <h2>{t.surveyH}</h2>
            <p>{t.surveyP}</p>
            <a href={localizePath('/survey/', locale ?? DEFAULT_LOCALE)}>{t.surveyA}</a>
          </div>
        </section>
      ) : null}
    </div>
  );
}
