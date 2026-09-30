

import type { Metadata } from 'next';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { HREFLANG } from '@/lib/i18n/locale-metadata';
import { HOME_META } from '@/lib/i18n/home-metadata';
import HomeServer from '../HomeServer';
import BlogHighlights from '@/components/BlogHighlights';
import FaqFromSchema from '@/components/FaqFromSchema';
import LocaleSuggestionBanner from '@/components/LocaleSuggestionBanner';
import { REVIEWS } from '@/data/reviews';
import { buildReviewsSchema } from '@/lib/seo/reviewsSchema';
import { EUR_PRICES } from '@/lib/pricing';

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

// Le cifre dello schema FAQ vengono da EUR_PRICES: scriverle a mano ha gia'
// prodotto uno schema che dichiarava 4 euro invece di 3, e Google puo'
// mostrarlo come risultato ricco. Se cambia il listino, cambia anche qui.
const TT = EUR_PRICES.tracker;
const P1 = TT.tier1.perSeatMonthly;      // 3
const P2 = TT.tier2.perSeatMonthly;      // 2,5
const S1 = TT.tier1MaxSeats;             // 25
const S2 = TT.tier2MaxSeats;             // 150

// FAQPage JSON-LD for the homepage, injected here (server component) so it
// renders only on the homepage, not on every page under [locale]/ via the layout.
const HOMEPAGE_FAQ: Record<string, object> = {
  it: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Cos\'è GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp è una piattaforma SaaS italiana per la gestione del personale operativo sul campo. Serve a dimostrare il lavoro fatto: ogni intervento diventa un report sigillato che il cliente può verificare da solo. È composta da tre moduli: GeoTapp Flow (la web app dell\'ufficio per commesse, squadre e report), GeoTapp TimeTracker (l\'app per Android e iOS con cui gli operatori timbrano, scattano le foto di prova e scrivono le note) e GeoTapp Verifier (lo strumento gratuito con cui il cliente controlla che il report non sia stato modificato, senza accesso alla piattaforma). La usano imprese di pulizie, sicurezza, manutenzione, installatori, elettricisti, idraulici e multiservizi. È costruita per stare dentro i paletti del GDPR e dell\'art. 4 dello Statuto dei Lavoratori. Fondatore: Michele Angelo Petraroli.' } },
      { '@type': 'Question', name: 'Come funziona la rilevazione presenze GPS di GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'L\'operatore timbra dall\'app mobile: entrata, pause e uscita. In quel momento GeoTapp registra la posizione rilevata dal telefono, non inserita a mano, e scarta i segnali simulati o troppo imprecisi. Fra una timbratura e l\'altra non si registra nulla in automatico. Ora e posizione finiscono nel report sigillato dell\'intervento.' } },
      { '@type': 'Question', name: 'GeoTapp è conforme al GDPR per la geolocalizzazione dei dipendenti?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp è costruita per stare dentro i paletti del GDPR (Reg. UE 2016/679) e dell\'art. 4 dello Statuto dei Lavoratori: la posizione si rileva solo quando il lavoratore timbra (entrata, pause, uscita) o scatta una foto di prova, mai in modo continuo, e fra una timbratura e l\'altra non si registra nulla in automatico. Sul sito trovi gratis un generatore dell\'informativa GPS per i dipendenti. La conformità dipende anche da come l\'azienda usa lo strumento: informativa, accordo sindacale o autorizzazione dove servono restano a carico del datore di lavoro.' } },
      { '@type': 'Question', name: 'GeoTapp ha una prova gratuita?', acceptedAnswer: { '@type': 'Answer', text: 'Sì. GeoTapp offre una prova gratuita di 14 giorni senza carta di credito richiesta. Si registra dal sito geotapp.com/it/trial/ e include accesso completo a Flow e TimeTracker per provare la piattaforma sul lavoro vero. Alla fine dei 14 giorni non parte nessun addebito automatico. Verifier è gratuito, sempre.' } },
      { '@type': 'Question', name: 'Quanto costa GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: `I prezzi sono pubblici su geotapp.com/it/pricing/. GeoTapp Flow, per l\'ufficio, parte da 39 € al mese (piano Solo), poi Team a 99 € e Business a 199 €; pagando l\'anno intero si risparmiano due mesi. Le postazioni di GeoTapp TimeTracker per gli operatori si aggiungono a parte: ${P1} € per operatore al mese fino a ${S1} postazioni, ${String(P2.toFixed(2)).replace('.', ',')} € dalla ${S1 + 1}ª in poi. L\'abbonamento ha una durata minima di 12 mesi. GeoTapp Verifier è gratuito.` } },
      { '@type': 'Question', name: 'GeoTapp ha l\'app mobile?', acceptedAnswer: { '@type': 'Answer', text: 'Sì, per i tuoi operatori sul campo. GeoTapp TimeTracker è un\'app nativa disponibile su Google Play (Android) e App Store (iOS): timbrature, foto di prova, note e rapportini. Se manca la rete, la timbratura resta salvata sul telefono e parte da sola quando torna il segnale, con l\'ora in cui è stata fatta. GeoTapp Flow, il pannello dell\'ufficio, è una web app che si usa dal browser, su computer e tablet.' } },
      { '@type': 'Question', name: 'Cosa contiene un report GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Ogni report include: ora di inizio e fine intervento e delle pause, la posizione registrata a ogni timbratura, le foto di prova con la loro impronta crittografica, i dati dell\'operatore e il sigillo digitale di GeoTapp. Qualsiasi modifica dopo la generazione rompe il sigillo ed è rilevabile. Il report aiuta a dimostrare che il documento consegnato non è stato toccato; da solo non è prova assoluta del fatto materiale né consulenza legale.' } },
      { '@type': 'Question', name: 'GeoTapp funziona per imprese di pulizie, installatori e sicurezza?', acceptedAnswer: { '@type': 'Answer', text: 'Sì. GeoTapp è usato da imprese di pulizie, multiservizi, installatori, elettricisti, idraulici, termoidraulici, servizi di vigilanza, manutenzione impianti e facility management. Va bene dalla squadra di una persona all\'azienda con centinaia di operatori, e gestisce più siti contemporaneamente.' } },
      { '@type': 'Question', name: 'Come si verifica un report GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Il committente riceve il report in PDF e un link fisso al pacchetto sigillato (geotapp.com/r/ seguito da un codice). Può verificarlo con GeoTapp Verifier, online o con il verificatore offline gratuito, senza account e senza accesso al tuo. Il verificatore ricalcola le impronte, controlla il sigillo e dice se il documento è integro o se è stato modificato.' } },
      { '@type': 'Question', name: 'Chi ha fondato GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp è stata fondata da Michele Angelo Petraroli, imprenditore italiano specializzato in soluzioni SaaS per PMI di servizi sul campo. La sede operativa è in Italia, la piattaforma è sviluppata internamente e localizzata in 11 lingue (italiano, inglese, tedesco, francese, spagnolo, portoghese, olandese, danese, svedese, norvegese, russo).' } },
    ],
  },
  en: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp is an Italian SaaS platform for managing field operations and mobile workforce. It is there to prove the work done: every job becomes a sealed report that the client can verify alone. It includes three modules: GeoTapp Flow (the office web app for jobs, teams and reports), GeoTapp TimeTracker (the Android and iOS app operators use to clock in, take proof photos and write notes) and GeoTapp Verifier (the free tool the end client uses to check that a report has not been modified, without a platform login). Used by cleaning companies, security services, maintenance, installers, electricians, plumbers and facility management. Built to stay within the limits of the GDPR and Italian labour law (art. 4 Workers\' Statute). Founder: Michele Angelo Petraroli.' } },
      { '@type': 'Question', name: 'How does GeoTapp GPS attendance tracking work?', acceptedAnswer: { '@type': 'Answer', text: 'The operator clocks in from the mobile app: start, breaks and finish. At that moment GeoTapp records the location detected by the phone, not entered manually, and discards simulated or too imprecise signals. Between one clock-in and the next nothing is automatically recorded. Time and location end up in the sealed report of the job.' } },
      { '@type': 'Question', name: 'Is GeoTapp GDPR compliant for employee geolocation?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp is built to stay within the limits of the GDPR (EU Reg. 2016/679) and art. 4 of the Italian Workers\' Statute: location is recorded only when the worker clocks in (start, breaks, finish) or takes a proof photo, never continuously, and between one clock-in and the next nothing is automatically recorded. On the site you will find a free GPS notice generator for employees. Compliance also depends on how the company uses the tool: the notice, and a union agreement or authorisation where required, remain the employer\'s responsibility.' } },
      { '@type': 'Question', name: 'Does GeoTapp offer a free trial?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. GeoTapp offers a 14-day free trial with no credit card required. Sign up at geotapp.com/en/trial/. It includes full access to Flow and TimeTracker to test the platform on real work. At the end of the 14 days no automatic charge is made. Verifier is free, always.' } },
      { '@type': 'Question', name: 'How much does GeoTapp cost?', acceptedAnswer: { '@type': 'Answer', text: `Prices are public at geotapp.com/en/pricing/. GeoTapp Flow, for the office, starts at €39 a month (Solo plan), then Team at €99 and Business at €199; paying for the whole year saves two months. TimeTracker seats for operators are added separately: €${P1} per operator per month up to ${S1} seats, €${P2.toFixed(2)} from the ${S1 + 1}th onwards. The subscription has a minimum term of 12 months. GeoTapp Verifier is free. Prices exclude VAT.` } },
      { '@type': 'Question', name: 'Does GeoTapp have a mobile app?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, for your field operators. GeoTapp TimeTracker is a native app available on Google Play (Android) and App Store (iOS): clock-ins, proof photos, notes and reports. If there is no signal, the clock-in stays saved on the phone and is sent on its own when the signal returns, with the time at which it was made. GeoTapp Flow, the office panel, is a web app used from the browser, on computer and tablet.' } },
      { '@type': 'Question', name: 'What does a GeoTapp report contain?', acceptedAnswer: { '@type': 'Answer', text: 'Each report includes: start and end times of the job and of the breaks, the location recorded at each clock-in, the proof photos with their cryptographic fingerprint, the operator\'s data and GeoTapp\'s digital seal. Any change after generation breaks the seal and is detectable. The report helps show that the document delivered has not been touched; on its own it is not absolute proof of the underlying fact, nor legal advice.' } },
      { '@type': 'Question', name: 'Does GeoTapp work for cleaning companies, installers and security services?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. GeoTapp is used by cleaning companies, facility services, installers, electricians, plumbers, security services and maintenance. It suits a one-person crew as well as a company with hundreds of operators, and manages multiple sites simultaneously.' } },
      { '@type': 'Question', name: 'How does a client verify a GeoTapp report?', acceptedAnswer: { '@type': 'Answer', text: 'The client receives the report as a PDF and a fixed link to the sealed package (geotapp.com/r/ followed by a code). They can verify it with GeoTapp Verifier, online or with the free offline verifier, with no account and without accessing yours. The verifier recalculates the fingerprints, checks the seal and says whether the document is intact or has been modified.' } },
      { '@type': 'Question', name: 'Who founded GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp was founded by Michele Angelo Petraroli, an Italian entrepreneur. The company is based in Italy, the software is built in-house and available in 11 languages (Italian, English, German, French, Spanish, Portuguese, Dutch, Danish, Swedish, Norwegian, Russian).' } },
    ],
  },
  de: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp ist eine italienische SaaS-Plattform für die Verwaltung von Personal im Außeneinsatz. Sie dient dazu, geleistete Arbeit nachzuweisen: Jeder Einsatz wird zu einem versiegelten Bericht, den der Kunde selbst prüfen kann. Sie besteht aus drei Modulen: GeoTapp Flow (die Web-App fürs Büro für Aufträge, Teams und Berichte), GeoTapp TimeTracker (die App für Android und iOS, mit der Mitarbeitende Zeiten erfassen, Nachweisfotos machen und Notizen schreiben) und GeoTapp Verifier (das kostenlose Werkzeug, mit dem der Kunde prüft, dass ein Bericht nicht verändert wurde, ohne Zugang zur Plattform). Im Einsatz bei Reinigungsunternehmen, Sicherheitsdiensten, Wartungsfirmen, Installateuren, Elektrikern, Klempnern und Multiservice-Betrieben. Entwickelt, um die Grenzen der DSGVO und des italienischen Arbeitnehmerstatuts (Art. 4) einzuhalten. Gründer: Michele Angelo Petraroli.' } },
      { '@type': 'Question', name: 'Wie funktioniert die GPS-Zeiterfassung von GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Die Mitarbeitenden stempeln in der mobilen App: Arbeitsbeginn, Pausen und Arbeitsende. In diesem Moment speichert GeoTapp den vom Telefon ermittelten Standort, nicht von Hand eingegeben, und verwirft simulierte oder zu ungenaue Signale. Zwischen zwei Buchungen wird automatisch nichts aufgezeichnet. Zeit und Standort fließen in den versiegelten Bericht des Einsatzes ein.' } },
      { '@type': 'Question', name: 'Ist GeoTapp bei der Standortermittlung von Beschäftigten DSGVO-konform?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp ist so gebaut, dass es innerhalb der Grenzen der DSGVO (Verordnung (EU) 2016/679) und des Art. 4 des italienischen Arbeitnehmerstatuts bleibt: Der Standort wird nur erfasst, wenn die Person stempelt (Beginn, Pausen, Ende) oder ein Nachweisfoto aufnimmt, nie fortlaufend, und zwischen zwei Buchungen wird automatisch nichts aufgezeichnet. Auf der Website finden Sie kostenlos einen Generator für die GPS-Information an die Beschäftigten. Die Konformität hängt auch davon ab, wie das Unternehmen das Werkzeug einsetzt: Information, Betriebsvereinbarung oder Genehmigung, wo erforderlich, bleiben Sache des Arbeitgebers.' } },
      { '@type': 'Question', name: 'Bietet GeoTapp eine kostenlose Testphase?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp bietet eine kostenlose Testphase von 14 Tagen, ohne dass eine Kreditkarte nötig ist. Die Anmeldung läuft über geotapp.com/de/trial/. Sie enthält vollen Zugriff auf Flow und TimeTracker, damit Sie die Plattform an echter Arbeit ausprobieren können. Nach den 14 Tagen wird nichts automatisch abgebucht. Der Verifier ist immer kostenlos.' } },
      { '@type': 'Question', name: 'Wie viel kostet GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: `Die Preise stehen öffentlich auf geotapp.com/de/preise/. GeoTapp Flow, das Werkzeug fürs Büro, beginnt bei 39 € im Monat (Tarif Solo), dann Team für 99 € und Business für 199 €; wer das ganze Jahr zahlt, spart zwei Monate. Die Plätze von GeoTapp TimeTracker für Ihre Mitarbeitenden kommen separat dazu: ${P1} € pro Mitarbeiter und Monat bis ${S1} Plätze, ${P2.toFixed(2).replace('.', ',')} € ab dem ${S1 + 1}. Platz. Das Abonnement hat eine Mindestlaufzeit von 12 Monaten. GeoTapp Verifier ist kostenlos. Alle Preise zzgl. USt.` } },
      { '@type': 'Question', name: 'Hat GeoTapp eine mobile App?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, für Ihre Mitarbeitenden im Außeneinsatz. GeoTapp TimeTracker ist eine native App für Google Play (Android) und den App Store (iOS): Zeiterfassung, Nachweisfotos, Notizen und Tätigkeitsberichte. Ist kein Netz da, bleibt die Buchung auf dem Telefon gespeichert und wird von selbst gesendet, sobald wieder Empfang besteht, mit der Uhrzeit, zu der sie erfasst wurde. GeoTapp Flow, das Büro-Panel, ist eine Web-App, die im Browser läuft, auf Computer und Tablet.' } },
      { '@type': 'Question', name: 'Was enthält ein GeoTapp-Bericht?', acceptedAnswer: { '@type': 'Answer', text: 'Jeder Bericht enthält: Beginn und Ende des Einsatzes und der Pausen, den bei jeder Buchung erfassten Standort, die Nachweisfotos mit ihrem kryptografischen Fingerabdruck, die Daten der Mitarbeitenden und das digitale Siegel von GeoTapp. Jede Änderung nach der Erstellung bricht das Siegel und ist erkennbar. Der Bericht hilft zu zeigen, dass das übergebene Dokument nicht angetastet wurde; für sich allein ist er weder ein absoluter Beweis des zugrunde liegenden Sachverhalts noch Rechtsberatung.' } },
      { '@type': 'Question', name: 'Eignet sich GeoTapp für Reinigungsunternehmen, Installateure und Sicherheitsdienste?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp wird von Reinigungsunternehmen, Multiservice-Betrieben, Installateuren, Elektrikern, Klempnern, Sicherheitsdiensten, Anlagenwartung und Facility-Management eingesetzt. Es passt vom Ein-Personen-Team bis zum Unternehmen mit Hunderten von Mitarbeitenden und verwaltet mehrere Einsatzorte gleichzeitig.' } },
      { '@type': 'Question', name: 'Wie prüft ein Kunde einen GeoTapp-Bericht?', acceptedAnswer: { '@type': 'Answer', text: 'Der Auftraggeber erhält den Bericht als PDF und einen festen Link zum versiegelten Paket (geotapp.com/r/ gefolgt von einem Code). Er kann ihn mit GeoTapp Verifier prüfen, online oder mit dem kostenlosen Offline-Prüfprogramm, ohne Konto und ohne Zugriff auf Ihres. Das Prüfprogramm berechnet die Fingerabdrücke neu, prüft das Siegel und meldet, ob das Dokument unversehrt ist oder verändert wurde.' } },
      { '@type': 'Question', name: 'Wer hat GeoTapp gegründet?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp wurde von Michele Angelo Petraroli gegründet, einem italienischen Unternehmer. Das Unternehmen sitzt in Italien, die Software wird im eigenen Haus entwickelt und ist in 11 Sprachen verfügbar (Italienisch, Englisch, Deutsch, Französisch, Spanisch, Portugiesisch, Niederländisch, Dänisch, Schwedisch, Norwegisch, Russisch).' } },
    ],
  },
  fr: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Qu\'est-ce que GeoTapp ?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp est une plateforme SaaS italienne pour la gestion du personnel terrain. Elle se compose de trois modules : GeoTapp Flow (gestion bureau avec CRM, plannings, chantiers), GeoTapp TimeTracker (app mobile Android/iOS pour pointage GPS, photos terrain, comptes-rendus) et GeoTapp Verifier (vérification d\'intégrité des rapports, accessible au client final sans connexion à la plateforme). Utilisée par des entreprises de nettoyage, sécurité, maintenance, installateurs, électriciens, plombiers et facility services. Conforme au RGPD et au droit du travail italien (art. 4 Statut des Travailleurs post-Jobs Act). Fondateur : Michele Angelo Petraroli.' } },
      { '@type': 'Question', name: 'Comment fonctionne le pointage GPS de GeoTapp ?', acceptedAnswer: { '@type': 'Answer', text: 'L\'opérateur ouvre et ferme son shift depuis l\'app mobile. GeoTapp enregistre les coordonnées GPS réelles à ce moment, pas saisies manuellement. Chaque pointage est scellé avec un horodatage et une position vérifiables par tous.' } },
      { '@type': 'Question', name: 'GeoTapp est-il conforme au RGPD pour la géolocalisation des salariés ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. GeoTapp enregistre la position uniquement au pointage d\'entrée et de sortie, pas en continu, en pleine conformité avec le Règl. UE 2016/679 (RGPD) et le droit du travail italien (art. 4 Statut des Travailleurs post-Jobs Act). La plateforme inclut des modèles téléchargeables pour l\'information des salariés et les accords syndicaux.' } },
      { '@type': 'Question', name: 'GeoTapp propose-t-il un essai gratuit ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. GeoTapp propose un essai gratuit de 14 jours sans carte de crédit. Inscription sur geotapp.com/fr/trial/, avec accès complet à tous les modules (Flow, TimeTracker, Verifier).' } },
      { '@type': 'Question', name: 'Combien coûte GeoTapp ?', acceptedAnswer: { '@type': 'Answer', text: `GeoTapp utilise un modèle de licence par utilisateur avec des tarifs transparents sur geotapp.com/fr/tarifs/. GeoTapp TimeTracker à partir de ${P1} €/opérateur/mois jusqu'à ${S1} postes, puis ${P2} € de ${S1 + 1} à ${S2}. GeoTapp Verifier toujours inclus.` } },
      { '@type': 'Question', name: 'GeoTapp a-t-il une app mobile ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, pour vos opérateurs terrain. GeoTapp TimeTracker est une app native sur Google Play (Android) et App Store (iOS) pour les pointages, photos terrain, comptes-rendus, signature numérique et fonctionnement hors ligne avec synchronisation différée. GeoTapp Flow, le panneau bureau, est une app web pour ordinateur et tablette.' } },
      { '@type': 'Question', name: 'Que contient un rapport GeoTapp ?', acceptedAnswer: { '@type': 'Answer', text: 'Chaque rapport inclut : horodatages de début et fin d\'intervention, coordonnées GPS vérifiées, preuves photographiques avec empreinte cryptographique, données opérateur et sceau numérique. Toute modification après génération casse le sceau et est détectable.' } },
      { '@type': 'Question', name: 'GeoTapp fonctionne-t-il pour les entreprises de nettoyage, installateurs et sécurité ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. GeoTapp est utilisé par les entreprises de nettoyage et facility, installateurs, électriciens, plombiers, services de sécurité, maintenance et BTP. La plateforme s\'adapte de 3 à 300 opérateurs sur plusieurs sites simultanément.' } },
      { '@type': 'Question', name: 'Comment un client vérifie-t-il un rapport GeoTapp ?', acceptedAnswer: { '@type': 'Answer', text: 'Le client reçoit un lien unique et peut vérifier le rapport sur geotapp.com/products/geotapp-verifier sans accès à votre compte. Le système compare le sceau cryptographique et confirme que les données n\'ont pas été modifiées.' } },
      { '@type': 'Question', name: 'Qui a fondé GeoTapp ?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp a été fondée par Michele Angelo Petraroli, entrepreneur italien spécialisé en SaaS pour PME de services. Siège en Italie, plateforme développée en interne et localisée en 11 langues (italien, anglais, allemand, français, espagnol, portugais, néerlandais, danois, suédois, norvégien, russe).' } },
    ],
  },
  es: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: '¿Qué es GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp es una plataforma SaaS italiana para la gestión del personal operativo en campo. Se compone de tres módulos: GeoTapp Flow (gestión oficina con CRM, turnos, obras), GeoTapp TimeTracker (app móvil Android/iOS para fichaje GPS, fotos en obra, partes de trabajo) y GeoTapp Verifier (verificación de integridad de informes, accesible al cliente final sin acceso a la plataforma). Usada por empresas de limpieza, seguridad, mantenimiento, instaladores, electricistas, fontaneros y facility services. Conforme al RGPD y al derecho laboral italiano (art. 4 Estatuto de los Trabajadores post-Jobs Act). Fundador: Michele Angelo Petraroli.' } },
      { '@type': 'Question', name: '¿Cómo funciona el fichaje GPS de GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'El operario abre y cierra su turno desde la app móvil. GeoTapp registra las coordenadas GPS reales en ese momento, no introducidas manualmente. Cada fichaje se sella con marca de tiempo y posición verificables por cualquiera.' } },
      { '@type': 'Question', name: '¿GeoTapp es conforme al RGPD para la geolocalización de los empleados?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. GeoTapp registra la ubicación solo en el fichaje de entrada y salida, no de forma continua, en pleno cumplimiento del Reg. UE 2016/679 (RGPD) y del derecho laboral italiano (art. 4 Estatuto de los Trabajadores post-Jobs Act). La plataforma incluye plantillas descargables para la información a los empleados y los acuerdos sindicales.' } },
      { '@type': 'Question', name: '¿GeoTapp tiene prueba gratuita?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. GeoTapp ofrece una prueba gratuita de 14 días sin tarjeta de crédito. Alta en geotapp.com/es/trial/, con acceso completo a todos los módulos (Flow, TimeTracker, Verifier).' } },
      { '@type': 'Question', name: '¿Cuánto cuesta GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: `GeoTapp usa un modelo de licencia por usuario con precios transparentes en geotapp.com/es/precios/. GeoTapp TimeTracker desde ${P1} €/operario/mes hasta ${S1} puestos, y ${P2} € de ${S1 + 1} a ${S2}. GeoTapp Verifier siempre incluido.` } },
      { '@type': 'Question', name: '¿GeoTapp tiene app móvil?', acceptedAnswer: { '@type': 'Answer', text: 'Sí, para tus operarios de campo. GeoTapp TimeTracker es una app nativa en Google Play (Android) y App Store (iOS) para fichajes, fotos en obra, partes, firma digital y funcionamiento offline con sincronización posterior. GeoTapp Flow, el panel oficina, es una app web para escritorio y tablet.' } },
      { '@type': 'Question', name: '¿Qué contiene un informe GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Cada informe incluye: marcas de tiempo de inicio y fin de intervención, coordenadas GPS verificadas, pruebas fotográficas con hash criptográfico, datos del operario y sello digital. Cualquier modificación tras la generación rompe el sello y es detectable.' } },
      { '@type': 'Question', name: '¿GeoTapp funciona para empresas de limpieza, instaladores y seguridad?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. GeoTapp se usa en empresas de limpieza y facility, instaladores, electricistas, fontaneros, servicios de seguridad, mantenimiento y construcción. La plataforma escala de 3 a 300 operarios y gestiona varios sitios simultáneamente.' } },
      { '@type': 'Question', name: '¿Cómo verifica un cliente un informe GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'El cliente recibe un enlace único y puede verificar el informe en geotapp.com/products/geotapp-verifier sin acceso a tu cuenta. El sistema compara el sello criptográfico y confirma que los datos no se han modificado.' } },
      { '@type': 'Question', name: '¿Quién fundó GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp fue fundada por Michele Angelo Petraroli, emprendedor italiano especializado en SaaS para pymes de servicios. Sede en Italia, plataforma desarrollada internamente y localizada en 11 idiomas (italiano, inglés, alemán, francés, español, portugués, neerlandés, danés, sueco, noruego, ruso).' } },
    ],
  },
  pt: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'O que é a GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp é uma plataforma SaaS italiana para a gestão de pessoal operativo no terreno. É composta por três módulos: GeoTapp Flow (gestão escritório com CRM, turnos, obras), GeoTapp TimeTracker (app móvel Android/iOS para ponto GPS, fotos no terreno, relatórios) e GeoTapp Verifier (verificação de integridade de relatórios, acessível ao cliente final sem acesso à plataforma). Usada por empresas de limpeza, segurança, manutenção, instaladores, eletricistas, canalizadores e facility services. Conforme com o RGPD e o direito laboral italiano (art. 4 Estatuto dos Trabalhadores pós-Jobs Act). Fundador: Michele Angelo Petraroli.' } },
      { '@type': 'Question', name: 'Como funciona o ponto GPS da GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'O operador abre e fecha o turno a partir da app móvel. A GeoTapp regista as coordenadas GPS reais nesse momento, não inseridas manualmente. Cada ponto é selado com carimbo de data/hora e posição verificáveis por qualquer um.' } },
      { '@type': 'Question', name: 'A GeoTapp é conforme com o RGPD para a geolocalização de colaboradores?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. A GeoTapp regista a localização apenas no ponto de entrada e saída, não de forma contínua, em pleno cumprimento do Reg. UE 2016/679 (RGPD) e do direito laboral italiano (art. 4 Estatuto dos Trabalhadores pós-Jobs Act). A plataforma inclui modelos descarregáveis para a informação aos colaboradores e acordos sindicais.' } },
      { '@type': 'Question', name: 'A GeoTapp tem teste gratuito?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. A GeoTapp oferece um teste gratuito de 14 dias sem cartão de crédito. Inscrição em geotapp.com/pt/trial/, com acesso completo a todos os módulos (Flow, TimeTracker, Verifier).' } },
      { '@type': 'Question', name: 'Quanto custa a GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: `A GeoTapp usa um modelo de licenciamento por utilizador com preços transparentes em geotapp.com/pt/precos/. GeoTapp TimeTracker a partir de ${P1} €/operador/mês até ${S1} lugares, e ${P2} € de ${S1 + 1} a ${S2}. GeoTapp Verifier sempre incluído.` } },
      { '@type': 'Question', name: 'A GeoTapp tem app móvel?', acceptedAnswer: { '@type': 'Answer', text: 'Sim, para os seus operadores no terreno. A GeoTapp TimeTracker é uma app nativa no Google Play (Android) e App Store (iOS) para pontos, fotos no terreno, relatórios, assinatura digital e funcionamento offline com sincronização posterior. A GeoTapp Flow, o painel escritório, é uma app web para desktop e tablet.' } },
      { '@type': 'Question', name: 'O que contém um relatório GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Cada relatório inclui: carimbos de data/hora de início e fim da intervenção, coordenadas GPS verificadas, provas fotográficas com hash criptográfico, dados do operador e selo digital. Qualquer alteração após a geração quebra o selo e é detetável.' } },
      { '@type': 'Question', name: 'A GeoTapp funciona para empresas de limpeza, instaladores e segurança?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. A GeoTapp é usada por empresas de limpeza e facility, instaladores, eletricistas, canalizadores, serviços de segurança, manutenção e construção. A plataforma escala de 3 a 300 operadores e gere vários locais em simultâneo.' } },
      { '@type': 'Question', name: 'Como verifica um cliente um relatório GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'O cliente recebe um link único e pode verificar o relatório em geotapp.com/products/geotapp-verifier sem acesso à sua conta. O sistema compara o selo criptográfico e confirma que os dados não foram alterados.' } },
      { '@type': 'Question', name: 'Quem fundou a GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'A GeoTapp foi fundada por Michele Angelo Petraroli, empreendedor italiano especializado em SaaS para PMEs de serviços. Sede em Itália, plataforma desenvolvida internamente e localizada em 11 idiomas (italiano, inglês, alemão, francês, espanhol, português, holandês, dinamarquês, sueco, norueguês, russo).' } },
    ],
  },
  nl: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wat is GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp is een Italiaans SaaS-platform voor het beheer van medewerkers in het veld. Het dient om het uitgevoerde werk aan te tonen: elke klus wordt een verzegeld rapport dat de klant zelf kan controleren. Het bestaat uit drie modules: GeoTapp Flow (de webapp van het kantoor voor opdrachten, teams en rapporten), GeoTapp TimeTracker (de app voor Android en iOS waarmee de medewerkers registreren, bewijsfoto\'s maken en notities schrijven) en GeoTapp Verifier (het gratis hulpmiddel waarmee de klant controleert dat het rapport niet is gewijzigd, zonder toegang tot het platform). Het wordt gebruikt door schoonmaak-, beveiligings- en onderhoudsbedrijven, installateurs, elektriciens, loodgieters en multiservicebedrijven. Het is gebouwd om binnen de kaders van de AVG en van artikel 4 van het Italiaanse arbeidsstatuut te blijven. Oprichter: Michele Angelo Petraroli.' } },
      { '@type': 'Question', name: 'Hoe werkt de gps-aanwezigheidsregistratie van GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'De medewerker registreert met de mobiele app: aankomst, pauzes en vertrek. Op dat moment legt GeoTapp de door de telefoon bepaalde locatie vast, niet met de hand ingevoerd, en verwerpt het gesimuleerde of te onnauwkeurige signalen. Tussen twee registraties in wordt er niets automatisch vastgelegd. Tijd en locatie komen in het verzegelde rapport van de klus.' } },
      { '@type': 'Question', name: 'Is GeoTapp conform de AVG voor de geolocatie van werknemers?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp is gebouwd om binnen de kaders van de AVG (Verordening (EU) 2016/679) en van artikel 4 van het Italiaanse arbeidsstatuut te blijven: de locatie wordt alleen bepaald wanneer de medewerker registreert (aankomst, pauzes, vertrek) of een bewijsfoto maakt, nooit doorlopend, en tussen twee registraties in wordt er niets automatisch vastgelegd. Op de site vindt u gratis een generator voor de GPS-privacyverklaring voor werknemers. De naleving hangt ook af van hoe het bedrijf het hulpmiddel gebruikt: de privacyverklaring en, waar nodig, het akkoord met de vakbond of de vergunning blijven voor rekening van de werkgever.' } },
      { '@type': 'Question', name: 'Heeft GeoTapp een gratis proefperiode?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp biedt een gratis proefperiode van 14 dagen zonder creditcard. U meldt zich aan op geotapp.com/nl/trial/ en krijgt volledige toegang tot Flow en TimeTracker om het platform op echt werk uit te proberen. Aan het eind van de 14 dagen volgt er geen automatische afschrijving. Verifier is altijd gratis.' } },
      { '@type': 'Question', name: 'Wat kost GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: `De prijzen staan openbaar op geotapp.com/nl/tarieven/. GeoTapp Flow, voor het kantoor, begint bij € 39 per maand (plan Solo), daarna Team voor € 99 en Business voor € 199; wie het hele jaar betaalt, bespaart twee maanden. De plaatsen van GeoTapp TimeTracker voor de medewerkers komen er apart bij: € ${P1} per medewerker per maand tot ${S1} plaatsen, € ${String(P2.toFixed(2)).replace('.', ',')} vanaf de ${S1 + 1}e. Het abonnement heeft een minimale looptijd van 12 maanden. GeoTapp Verifier is gratis.` } },
      { '@type': 'Question', name: 'Heeft GeoTapp een mobiele app?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, voor uw medewerkers in het veld. GeoTapp TimeTracker is een native app voor Google Play (Android) en de App Store (iOS): registraties, bewijsfoto\'s, notities en werkbonnen. Is er geen netwerk, dan blijft de registratie op de telefoon bewaard en wordt ze vanzelf verzonden zodra het signaal terugkomt, met het tijdstip waarop ze is gemaakt. GeoTapp Flow, het paneel van het kantoor, is een webapp die u in de browser gebruikt, op computer en tablet.' } },
      { '@type': 'Question', name: 'Wat staat er in een GeoTapp-rapport?', acceptedAnswer: { '@type': 'Answer', text: 'Elk rapport bevat: begin- en eindtijd van de klus en van de pauzes, de locatie die bij elke registratie is vastgelegd, de bewijsfoto\'s met hun cryptografische vingerafdruk, de gegevens van de medewerker en de digitale verzegeling van GeoTapp. Elke wijziging na het aanmaken verbreekt de verzegeling en is zichtbaar. Het rapport helpt aan te tonen dat het afgeleverde document niet is aangeraakt; op zichzelf is het geen absoluut bewijs van het feitelijke gebeuren en geen juridisch advies.' } },
      { '@type': 'Question', name: 'Werkt GeoTapp voor schoonmaakbedrijven, installateurs en beveiliging?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp wordt gebruikt door schoonmaakbedrijven, multiservicebedrijven, installateurs, elektriciens, loodgieters, cv-installateurs, bewakingsdiensten, onderhoud van installaties en facility management. Het past van de ploeg van één persoon tot het bedrijf met honderden medewerkers, en beheert meerdere locaties tegelijk.' } },
      { '@type': 'Question', name: 'Hoe controleer ik een GeoTapp-rapport?', acceptedAnswer: { '@type': 'Answer', text: 'De opdrachtgever ontvangt het rapport als pdf en een vaste link naar het verzegelde pakket (geotapp.com/r/ gevolgd door een code). Hij kan het controleren met GeoTapp Verifier, online of met de gratis offline verifier, zonder account en zonder toegang tot het uwe. De verifier berekent de vingerafdrukken opnieuw, controleert de verzegeling en zegt of het document intact is of is gewijzigd.' } },
      { '@type': 'Question', name: 'Wie heeft GeoTapp opgericht?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp is opgericht door Michele Angelo Petraroli, Italiaans ondernemer die gespecialiseerd is in SaaS-oplossingen voor dienstverlenende MKB-bedrijven met werk in het veld. De operationele vestiging is in Italië, het platform wordt intern ontwikkeld en is gelokaliseerd in 11 talen (Italiaans, Engels, Duits, Frans, Spaans, Portugees, Nederlands, Deens, Zweeds, Noors, Russisch).' } },
    ],
  },
  da: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Hvad er GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp er en italiensk SaaS-platform til håndtering af feltmedarbejdere. Den består af tre moduler: GeoTapp Flow (kontorstyring med CRM, vagtplanlægning, opgaver), GeoTapp TimeTracker (Android/iOS-mobilapp til GPS-stempling, feltfotos, rapporter) og GeoTapp Verifier (verificering af rapportintegritet, tilgængelig for slutkunden uden platform-login). Bruges af rengørings-, sikkerheds-, vedligeholdelses- og installationsfirmaer, elektrikere, VVS\'ere og facility services. GDPR-overholdt og i tråd med italiensk arbejdsret (art. 4 Arbejderstatut efter Jobs Act). Grundlægger: Michele Angelo Petraroli.' } },
      { '@type': 'Question', name: 'Hvordan fungerer GeoTapp\'s GPS-tidsregistrering?', acceptedAnswer: { '@type': 'Answer', text: 'Medarbejderen åbner og lukker sin vagt via mobilappen. GeoTapp registrerer de rigtige GPS-koordinater i det øjeblik, ikke indtastet manuelt. Hver stempling er forseglet med tidsstempel og position, der kan verificeres af enhver.' } },
      { '@type': 'Question', name: 'Er GeoTapp GDPR-overholdt for geolokalisering af medarbejdere?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp registrerer kun lokation ved ind- og udstempling, ikke kontinuerligt, i fuld overensstemmelse med EU-Forordning 2016/679 (GDPR) og italiensk arbejdsret (art. 4 Arbejderstatut efter Jobs Act). Platformen indeholder skabeloner til medarbejderinformation og kollektive aftaler.' } },
      { '@type': 'Question', name: 'Tilbyder GeoTapp en gratis prøveperiode?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp tilbyder en 14-dages gratis prøveperiode uden kreditkort. Tilmeld dig på geotapp.com/da/trial/ med fuld adgang til alle moduler (Flow, TimeTracker, Verifier).' } },
      { '@type': 'Question', name: 'Hvad koster GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: `GeoTapp bruger en licensmodel pr. bruger med gennemsigtige priser på geotapp.com/da/priser/. GeoTapp TimeTracker fra ${P1} € pr. medarbejder pr. måned op til ${S1} pladser, og ${P2} € fra ${S1 + 1} til ${S2}. GeoTapp Verifier altid inkluderet.` } },
      { '@type': 'Question', name: 'Har GeoTapp en mobil-app?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, til dine feltmedarbejdere. GeoTapp TimeTracker er en native app på Google Play (Android) og App Store (iOS) til stempling, feltfotos, rapporter, digitale underskrifter og offlinedrift med senere synkronisering. GeoTapp Flow, kontorpanelet, er en webapp til desktop og tablet.' } },
      { '@type': 'Question', name: 'Hvad indeholder en GeoTapp-rapport?', acceptedAnswer: { '@type': 'Answer', text: 'Hver rapport indeholder: start- og sluttidsstempler, verificerede GPS-koordinater, fotobevis med kryptografisk hash, medarbejderdata og et digitalt segl. Enhver ændring efter generering bryder seglet og kan opdages.' } },
      { '@type': 'Question', name: 'Fungerer GeoTapp for rengøringsfirmaer, installatører og sikkerhedstjenester?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp bruges af rengørings- og facility-virksomheder, installatører, elektrikere, VVS\'ere, sikkerhedstjenester, vedligehold og byggeri. Platformen skalerer fra 3 til 300 medarbejdere og håndterer flere lokationer samtidigt.' } },
      { '@type': 'Question', name: 'Hvordan verificerer en kunde en GeoTapp-rapport?', acceptedAnswer: { '@type': 'Answer', text: 'Kunden modtager et unikt link og kan verificere rapporten på geotapp.com/products/geotapp-verifier uden adgang til din konto. Systemet sammenligner det kryptografiske segl og bekræfter, at dataene ikke er ændret.' } },
      { '@type': 'Question', name: 'Hvem grundlagde GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp blev grundlagt af Michele Angelo Petraroli, en italiensk iværksætter specialiseret i SaaS for service-SMV\'er. Hovedkontor i Italien, platformen udvikles internt og er lokaliseret på 11 sprog (italiensk, engelsk, tysk, fransk, spansk, portugisisk, hollandsk, dansk, svensk, norsk, russisk).' } },
    ],
  },
  sv: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Vad är GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp är en italiensk SaaS-plattform för hantering av fältarbetare. Den består av tre moduler: GeoTapp Flow (kontorshantering med CRM, schemaläggning, uppdrag), GeoTapp TimeTracker (Android/iOS-mobilapp för GPS-stämpling, fältfoton, rapporter) och GeoTapp Verifier (verifiering av rapportintegritet, tillgänglig för slutkunden utan plattformsinloggning). Används av städ-, säkerhets-, underhålls- och installationsföretag, elektriker, rörmokare och facility services. GDPR-anpassad och i linje med italiensk arbetsrätt (art. 4 Arbetarstatut efter Jobs Act). Grundare: Michele Angelo Petraroli.' } },
      { '@type': 'Question', name: 'Hur fungerar GeoTapps GPS-tidregistrering?', acceptedAnswer: { '@type': 'Answer', text: 'Arbetaren öppnar och stänger sitt pass från mobilappen. GeoTapp registrerar de riktiga GPS-koordinaterna i det ögonblicket, inte manuellt inmatade. Varje stämpling är förseglad med tidsstämpel och position som vem som helst kan verifiera.' } },
      { '@type': 'Question', name: 'Är GeoTapp GDPR-anpassad för anställdas geolokalisering?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp registrerar position endast vid in- och utstämpling, inte kontinuerligt, i full överensstämmelse med EU-förordning 2016/679 (GDPR) och italiensk arbetsrätt (art. 4 Arbetarstatut efter Jobs Act). Plattformen innehåller mallar för anställdas information och kollektivavtal.' } },
      { '@type': 'Question', name: 'Erbjuder GeoTapp en gratis testperiod?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp erbjuder en 14-dagars gratis testperiod utan kreditkort. Anmäl dig på geotapp.com/sv/trial/ med full tillgång till alla moduler (Flow, TimeTracker, Verifier).' } },
      { '@type': 'Question', name: 'Vad kostar GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: `GeoTapp använder en licensmodell per användare med transparenta priser på geotapp.com/sv/priser/. GeoTapp TimeTracker från ${P1} € per arbetare per månad upp till ${S1} platser, och ${P2} € från ${S1 + 1} till ${S2}. Flow + TimeTracker-paket med rabatt. GeoTapp Verifier alltid inkluderat.` } },
      { '@type': 'Question', name: 'Har GeoTapp en mobilapp?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, för dina fältarbetare. GeoTapp TimeTracker är en native app på Google Play (Android) och App Store (iOS) för stämpling, fältfoton, rapporter, digitala signaturer och offlineläge med senare synk. GeoTapp Flow, kontorspanelen, är en webbapp för desktop och surfplatta.' } },
      { '@type': 'Question', name: 'Vad innehåller en GeoTapp-rapport?', acceptedAnswer: { '@type': 'Answer', text: 'Varje rapport innehåller: start- och sluttidsstämplar, verifierade GPS-koordinater, fotobevis med kryptografisk hash, arbetardata och ett digitalt sigill. Varje ändring efter generering bryter sigillet och kan upptäckas.' } },
      { '@type': 'Question', name: 'Fungerar GeoTapp för städföretag, installatörer och säkerhetstjänster?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp används av städ- och facility-företag, installatörer, elektriker, rörmokare, säkerhetstjänster, underhåll och bygg. Plattformen skalar från 3 till 300 arbetare och hanterar flera platser samtidigt.' } },
      { '@type': 'Question', name: 'Hur verifierar en kund en GeoTapp-rapport?', acceptedAnswer: { '@type': 'Answer', text: 'Kunden får en unik länk och kan verifiera rapporten på geotapp.com/products/geotapp-verifier utan tillgång till ditt konto. Systemet jämför det kryptografiska sigillet och bekräftar att data inte har ändrats.' } },
      { '@type': 'Question', name: 'Vem grundade GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp grundades av Michele Angelo Petraroli, en italiensk entreprenör specialiserad på SaaS för tjänste-SMB. Huvudkontor i Italien, plattformen utvecklas internt och är lokaliserad på 11 språk (italienska, engelska, tyska, franska, spanska, portugisiska, holländska, danska, svenska, norska, ryska).' } },
    ],
  },
  nb: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Hva er GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp er en italiensk SaaS-plattform for håndtering av feltarbeidere. Den består av tre moduler: GeoTapp Flow (kontorstyring med CRM, vaktplanlegging, oppdrag), GeoTapp TimeTracker (Android/iOS-mobilapp for GPS-stempling, feltbilder, rapporter) og GeoTapp Verifier (verifisering av rapportintegritet, tilgjengelig for sluttkunden uten plattformpålogging). Brukes av renholds-, sikkerhets-, vedlikeholds- og installasjonsselskaper, elektrikere, rørleggere og facility services. GDPR-overholdt og i tråd med italiensk arbeidsrett (art. 4 Arbeidstakerstatutt etter Jobs Act). Grunnlegger: Michele Angelo Petraroli.' } },
      { '@type': 'Question', name: 'Hvordan fungerer GeoTapps GPS-tidsregistrering?', acceptedAnswer: { '@type': 'Answer', text: 'Arbeideren åpner og lukker vakten sin via mobilappen. GeoTapp registrerer de ekte GPS-koordinatene i det øyeblikket, ikke manuelt lagt inn. Hver stempling er forseglet med tidsstempel og posisjon som kan verifiseres av hvem som helst.' } },
      { '@type': 'Question', name: 'Er GeoTapp GDPR-overholdt for ansattes geolokalisering?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp registrerer posisjon kun ved inn- og utstempling, ikke kontinuerlig, i full overensstemmelse med EU-forordning 2016/679 (GDPR) og italiensk arbeidsrett (art. 4 Arbeidstakerstatutt etter Jobs Act). Plattformen inneholder maler for ansattes informasjon og kollektivavtaler.' } },
      { '@type': 'Question', name: 'Tilbyr GeoTapp en gratis prøveperiode?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp tilbyr en 14 dagers gratis prøveperiode uten kredittkort. Meld deg på geotapp.com/nb/trial/ med full tilgang til alle modulene (Flow, TimeTracker, Verifier).' } },
      { '@type': 'Question', name: 'Hva koster GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: `GeoTapp bruker en lisensmodell per bruker med transparente priser på geotapp.com/nb/priser/. GeoTapp TimeTracker fra ${P1} € per arbeider per måned opp til ${S1} plasser, og ${P2} € fra ${S1 + 1} til ${S2}. Flow + TimeTracker-pakke med rabatt. GeoTapp Verifier alltid inkludert.` } },
      { '@type': 'Question', name: 'Har GeoTapp en mobilapp?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, for feltarbeiderne dine. GeoTapp TimeTracker er en native app på Google Play (Android) og App Store (iOS) for stempling, feltbilder, rapporter, digitale signaturer og offlinebruk med senere synkronisering. GeoTapp Flow, kontorpanelet, er en webapp for desktop og nettbrett.' } },
      { '@type': 'Question', name: 'Hva inneholder en GeoTapp-rapport?', acceptedAnswer: { '@type': 'Answer', text: 'Hver rapport inneholder: start- og slutttidsstempler, verifiserte GPS-koordinater, fotobevis med kryptografisk hash, arbeiderdata og et digitalt segl. Enhver endring etter generering bryter seglet og kan oppdages.' } },
      { '@type': 'Question', name: 'Fungerer GeoTapp for renholdsfirmaer, installatører og sikkerhetstjenester?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp brukes av renholds- og facility-selskaper, installatører, elektrikere, rørleggere, sikkerhetstjenester, vedlikehold og bygg. Plattformen skalerer fra 3 til 300 arbeidere og håndterer flere lokasjoner samtidig.' } },
      { '@type': 'Question', name: 'Hvordan verifiserer en kunde en GeoTapp-rapport?', acceptedAnswer: { '@type': 'Answer', text: 'Kunden mottar en unik lenke og kan verifisere rapporten på geotapp.com/products/geotapp-verifier uten tilgang til kontoen din. Systemet sammenligner det kryptografiske seglet og bekrefter at dataene ikke er endret.' } },
      { '@type': 'Question', name: 'Hvem grunnla GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp ble grunnlagt av Michele Angelo Petraroli, en italiensk gründer spesialisert på SaaS for tjeneste-SMB. Hovedkontor i Italia, plattformen utvikles internt og er lokalisert på 11 språk (italiensk, engelsk, tysk, fransk, spansk, portugisisk, nederlandsk, dansk, svensk, norsk, russisk).' } },
    ],
  },
  ru: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Что такое GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp, итальянская SaaS-платформа для управления выездным персоналом. Состоит из трёх модулей: GeoTapp Flow (офисное управление с CRM, сменами, заказами), GeoTapp TimeTracker (мобильное приложение Android/iOS для GPS-учёта времени, фото на объекте, отчётов) и GeoTapp Verifier (проверка целостности отчётов, доступная конечному клиенту без входа в платформу). Используется клининговыми и охранными компаниями, монтажниками, электриками, сантехниками и facility services. Соответствует GDPR и итальянскому трудовому праву (ст. 4 Статута Трудящихся после Jobs Act). Основатель: Микеле Анджело Петраролли.' } },
      { '@type': 'Question', name: 'Как работает GPS-учёт времени в GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Оператор открывает и закрывает смену через мобильное приложение. GeoTapp фиксирует реальные GPS-координаты в этот момент, а не вводимые вручную. Каждая отметка времени запечатана с временной меткой и позицией, проверяемыми любым.' } },
      { '@type': 'Question', name: 'Соответствует ли GeoTapp GDPR для геолокации сотрудников?', acceptedAnswer: { '@type': 'Answer', text: 'Да. GeoTapp фиксирует местоположение только при входе и выходе со смены, не непрерывно, в полном соответствии с Регл. ЕС 2016/679 (GDPR) и итальянским трудовым правом (ст. 4 Статута Трудящихся после Jobs Act). Платформа включает шаблоны для информирования работников и профсоюзных соглашений.' } },
      { '@type': 'Question', name: 'Предлагает ли GeoTapp бесплатный пробный период?', acceptedAnswer: { '@type': 'Answer', text: 'Да. GeoTapp предлагает бесплатный пробный период 14 дней без банковской карты. Регистрация на geotapp.com/ru/trial/ с полным доступом ко всем модулям (Flow, TimeTracker, Verifier).' } },
      { '@type': 'Question', name: 'Сколько стоит GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: `GeoTapp использует лицензионную модель на пользователя с прозрачными ценами на geotapp.com/ru/tseny/. GeoTapp TimeTracker от ${P1} € за оператора в месяц до ${S1} мест, и ${P2} € от ${S1 + 1} до ${S2}. Пакет Flow + TimeTracker со скидкой. GeoTapp Verifier всегда включён.` } },
      { '@type': 'Question', name: 'Есть ли у GeoTapp мобильное приложение?', acceptedAnswer: { '@type': 'Answer', text: 'Да, для ваших выездных операторов. GeoTapp TimeTracker, нативное приложение в Google Play (Android) и App Store (iOS) для учёта времени, фото на объекте, отчётов, цифровых подписей и офлайн-работы с последующей синхронизацией. GeoTapp Flow, офисная панель,, это веб-приложение для десктопа и планшета.' } },
      { '@type': 'Question', name: 'Что содержит отчёт GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Каждый отчёт содержит: временные метки начала и конца выезда, проверенные GPS-координаты, фотодоказательства с криптографическим хешем, данные оператора и цифровую печать. Любое изменение после создания нарушает печать и обнаруживается.' } },
      { '@type': 'Question', name: 'Подходит ли GeoTapp для клининговых компаний, монтажников и охранных служб?', acceptedAnswer: { '@type': 'Answer', text: 'Да. GeoTapp используется клининговыми и facility-компаниями, монтажниками, электриками, сантехниками, охранными службами, обслуживанием и строительством. Платформа масштабируется от 3 до 300 операторов и управляет несколькими объектами одновременно.' } },
      { '@type': 'Question', name: 'Как клиент проверяет отчёт GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Клиент получает уникальную ссылку и может проверить отчёт на geotapp.com/products/geotapp-verifier без доступа к вашему аккаунту. Система сравнивает криптографическую печать и подтверждает, что данные не были изменены.' } },
      { '@type': 'Question', name: 'Кто основал GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp был основан Микеле Анджело Петраролли, итальянским предпринимателем, специализирующимся на SaaS для сервисного МСБ. Главный офис в Италии, платформа разрабатывается внутри компании и локализована на 11 языках (итальянский, английский, немецкий, французский, испанский, португальский, голландский, датский, шведский, норвежский, русский).' } },
    ],
  },
};

const BASE_URL = 'https://geotapp.com';

// Title e description dell'homepage: vivono in lib/i18n/home-metadata.ts,
// dove un test ne misura la lunghezza. Erano qui dentro, e nessuno si era
// accorto che il taglio di Google si mangiava la parola chiave.

type Props = { params: Promise<{ locale: string }> };

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  const faq = HOMEPAGE_FAQ[locale] ?? null;
  const reviewsSchema = buildReviewsSchema(REVIEWS);
  return (
    <>
      {/* NB: nessun preload di bg1.webp. Il TTBgCarousel che la usa è `hidden md:block`
          (solo desktop) e MOLTO sotto la fold (sezione TimeTracker, ~riga 528 dell'allora HomeClient).
          Preloadarla ad alta priorità su mobile scaricava 147KB mai mostrati, rubando banda
          all'LCP reale (l'h1 dell'hero). Rimosso il 2026-06-06. */}
      {reviewsSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
        />
      )}
      {/* Suggerimento IT per chi arriva su una pagina EN (generica o regionale)
          con browser in italiano. Il redirect geo del middleware non tocca gli
          URL EN espliciti di proposito (SEO/hreflang): qui la scelta resta
          all'utente. Vedi src/components/LocaleSuggestionBanner.tsx. */}
      {locale.startsWith('en') && <LocaleSuggestionBanner />}
      {/* FAQ e blog entrano DENTRO la home come slot server, cosi' seguono
          l'ordine del mockup (letture → domande → ultima inquadratura).
          Lo schema FAQPage resta iniettato da RisorsaFaq dentro lo slot. */}
      <HomeServer
        locale={locale}
        jrSlot={<BlogHighlights locale={locale as AppLocale} categoryId={54} />}
        // Senza FAQ per la lingua (le varianti inglesi regionali) lo slot resta vuoto:
        // da quando la home e' un componente server un elemento che rende null lascerebbe
        // comunque la sezione vuota nell'HTML, mentre prima React la scartava.
        fqSlot={faq ? <FaqFromSchema faq={faq} locale={locale} /> : undefined}
      />
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const meta = HOME_META[locale] ?? HOME_META.en;

  // Build hreflang alternates dynamically from SUPPORTED_LOCALES.
  // All locale homepages use trailing slash (trailingSlash:true in next.config.mjs).
  // x-default → /en/ because:
  //   - /en/ is a real page served by app/[locale]/page.tsx with locale="en"
  //   - bare / triggers a 308 geo-redirect in middleware → invalid x-default per Google spec
  //
  // HREFLANG mappa importata da locale-metadata.ts (single source of truth, audit 2026-05-23).
  // Prima qui c'era una mappa inline che divergeva su en-* (en-us vs en-US): consolidata.
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [HREFLANG[l] ?? l, `${BASE_URL}/${l}/`]),
  ) as Record<string, string>;
  languages['x-default'] = `${BASE_URL}/en/`;

  // Canonical self anche qui, varianti EN regionali comprese (decisione di Mike,
  // 14/08/2026: sono pagine vere, con prezzi in valuta locale gia' in home).
  // Questa riga consolidava su /en/ mentre hreflang e sitemap continuavano a
  // dichiarare le varianti: due segnali opposti sulla stessa pagina. La stessa
  // regola vive in buildCanonicalUrl() (lib/i18n/locale-metadata.ts), dov'e'
  // scritto anche il perche' storico e cosa guardare se il brand riscende.
  const canonicalLocale = locale;

  return {
    // Use absolute title to bypass the root layout template ("%s | GeoTapp").
    // I title dell'homepage il marchio ce l'hanno gia', in coda (e.g.
    // "Software GPS presenze: prova ogni intervento | GeoTapp"); senza absolute
    // il template lo riattaccherebbe una seconda volta, e quei dieci caratteri
    // di troppo sono esattamente quelli che mandano lo snippet oltre il taglio.
    title: { absolute: meta.title },
    description: meta.description,
    alternates: {
      // Absolute canonical required here, homepage path is just "/" per locale,
      // relative "/${locale}" without trailing slash would resolve to a redirect URL.
      canonical: `${BASE_URL}/${canonicalLocale}/`,
      languages,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      // og:url deve coincidere col canonical (regionali EN comprese); un blocco
      // openGraph dichiarato qui SOSTITUISCE quello del layout, quindi le images
      // vanno ridichiarate o la card social esce nuda.
      url: `${BASE_URL}/${canonicalLocale}/`,
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: meta.title }],
    },
    twitter: {
      title: meta.title,
      description: meta.description,
    },
  };
}
