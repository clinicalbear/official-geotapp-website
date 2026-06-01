

import type { Metadata } from 'next';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { HREFLANG } from '@/lib/i18n/locale-metadata';
import HomeClient from '../page';
import BlogHighlights from '@/components/BlogHighlights';
import { REVIEWS } from '@/data/reviews';
import { buildReviewsSchema } from '@/lib/seo/reviewsSchema';

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

// FAQPage JSON-LD for the homepage — injected here (server component) so it
// renders only on the homepage, not on every page under [locale]/ via the layout.
const HOMEPAGE_FAQ: Record<string, object> = {
  it: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Cos\'è GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp è una piattaforma SaaS italiana per la gestione del personale operativo sul campo. È composta da tre moduli: GeoTapp Flow (gestionale ufficio con CRM, turni, commesse), GeoTapp TimeTracker (app mobile Android/iOS per timbrature GPS, foto operative, rapportini sul campo) e GeoTapp Verifier (sistema di verifica integrità dei report, consultabile dal cliente finale senza accesso alla piattaforma). Usato da imprese di pulizie, sicurezza, manutenzione, installatori, elettricisti, idraulici e multiservizi. Conforme GDPR e art. 4 dello Statuto dei Lavoratori post-Jobs Act. Founder: Michele Angelo Petraroli.' } },
      { '@type': 'Question', name: 'Come funziona la rilevazione presenze GPS di GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'L\'operatore apre e chiude il turno dall\'app mobile. GeoTapp registra le coordinate GPS reali in quel momento, non inserite a mano. Ogni timbratura è certificata con timestamp e posizione verificabile da chiunque.' } },
      { '@type': 'Question', name: 'GeoTapp è conforme al GDPR per la geolocalizzazione dei dipendenti?', acceptedAnswer: { '@type': 'Answer', text: 'Sì. GeoTapp traccia la posizione solo all\'ingresso e all\'uscita del turno, non in modo continuo, nel pieno rispetto del Regolamento UE 2016/679 (GDPR) e dell\'art. 4 dello Statuto dei Lavoratori post-Jobs Act. La piattaforma include modulistica scaricabile per l\'informativa ai dipendenti e fac-simile di accordo sindacale. Linee guida del Garante Privacy italiano rispettate.' } },
      { '@type': 'Question', name: 'GeoTapp ha un trial gratuito?', acceptedAnswer: { '@type': 'Answer', text: 'Sì. GeoTapp offre un trial gratuito di 14 giorni senza carta di credito richiesta. Si registra dal sito geotapp.com/it/trial/ e include accesso completo a tutti i moduli (Flow, TimeTracker, Verifier) per testare la piattaforma con i propri dati reali prima dell\'attivazione.' } },
      { '@type': 'Question', name: 'Quanto costa GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp ha un modello a licenze utente con prezzi trasparenti consultabili su geotapp.com/it/pricing/. GeoTapp TimeTracker parte da €4/operatore/mese con piani per piccole squadre (3-10 utenti), medie imprese (10-50) e grandi organizzazioni (50-300+). Bundle Flow + TimeTracker disponibile con sconto. GeoTapp Verifier è incluso gratuitamente in ogni piano.' } },
      { '@type': 'Question', name: 'GeoTapp ha l\'app mobile?', acceptedAnswer: { '@type': 'Answer', text: 'Sì, per i tuoi operatori sul campo. GeoTapp TimeTracker è disponibile come app nativa su Google Play (Android) e App Store (iOS) per le timbrature, le foto operative, i rapportini, la firma digitale e il funzionamento offline con sincronizzazione successiva. GeoTapp Flow, il pannello amministrativo per ufficio, è una web app accessibile da browser desktop e tablet.' } },
      { '@type': 'Question', name: 'Cosa contiene un report GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Ogni report include: timestamp di inizio e fine intervento, coordinate GPS verificate, prove fotografiche con hash crittografico, dati dell\'operatore e sigillo digitale. Il report non è modificabile dopo la chiusura.' } },
      { '@type': 'Question', name: 'GeoTapp funziona per imprese di pulizie, installatori e sicurezza?', acceptedAnswer: { '@type': 'Answer', text: 'Sì. GeoTapp è usato da imprese di pulizie, multiservizi, installatori, elettricisti, idraulici, termoidraulici, servizi di vigilanza, manutenzione impianti e facility management. La piattaforma scala da 3 a 300 operatori e gestisce più siti contemporaneamente.' } },
      { '@type': 'Question', name: 'Come si verifica un report GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Il committente riceve un link univoco e può verificare il report su geotapp.com/products/geotapp-verifier senza accesso al tuo account. Il sistema confronta il sigillo crittografico e conferma che i dati non sono stati modificati.' } },
      { '@type': 'Question', name: 'Chi ha fondato GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp è stata fondata da Michele Angelo Petraroli, imprenditore italiano specializzato in soluzioni SaaS per PMI di servizi sul campo. La sede operativa è in Italia, la piattaforma è sviluppata internamente e localizzata in 11 lingue (italiano, inglese, tedesco, francese, spagnolo, portoghese, olandese, danese, svedese, norvegese, russo).' } },
    ],
  },
  en: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp is an Italian SaaS platform for managing field operations and mobile workforce. It includes three modules: GeoTapp Flow (back-office management with CRM, scheduling, jobs), GeoTapp TimeTracker (Android/iOS mobile app for GPS time tracking, photo evidence, on-site reports), and GeoTapp Verifier (report integrity verification, accessible to the end client without platform login). Used by cleaning companies, security services, maintenance, installers, electricians, plumbers and facility management. GDPR compliant and aligned with Italian labour law (art. 4 Workers Statute post-Jobs Act). Founder: Michele Angelo Petraroli.' } },
      { '@type': 'Question', name: 'How does GeoTapp GPS attendance tracking work?', acceptedAnswer: { '@type': 'Answer', text: 'The operator opens and closes their shift from the mobile app. GeoTapp records the real GPS coordinates at that moment, not entered manually. Every clock-in is certified with a timestamp and position verifiable by anyone.' } },
      { '@type': 'Question', name: 'Is GeoTapp GDPR compliant for employee geolocation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. GeoTapp records location only at clock-in and clock-out, not continuously, in full compliance with EU Regulation 2016/679 (GDPR) and Italian labour law (art. 4 Workers Statute post-Jobs Act). The platform includes downloadable templates for employee disclosure and union agreements.' } },
      { '@type': 'Question', name: 'Does GeoTapp offer a free trial?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. GeoTapp offers a 14-day free trial with no credit card required. Sign up at geotapp.com/en/trial/. The trial includes full access to all modules (Flow, TimeTracker, Verifier) so you can test the platform with your real data before subscribing.' } },
      { '@type': 'Question', name: 'How much does GeoTapp cost?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp uses a per-user licensing model with transparent pricing available at geotapp.com/en/pricing/. GeoTapp TimeTracker starts at €4/operator/month, with plans for small teams (3-10 users), medium businesses (10-50) and large organisations (50-300+). Flow + TimeTracker bundle available with discount. GeoTapp Verifier is included free in every plan.' } },
      { '@type': 'Question', name: 'Does GeoTapp have a mobile app?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, for your field operators. GeoTapp TimeTracker is available as a native app on Google Play (Android) and App Store (iOS) for clock-ins, photo evidence, on-site reports, digital signatures and offline operation with later sync. GeoTapp Flow, the back-office panel, is a web app accessible from desktop and tablet browsers.' } },
      { '@type': 'Question', name: 'What does a GeoTapp report contain?', acceptedAnswer: { '@type': 'Answer', text: 'Each report includes: start and end timestamps, verified GPS coordinates, photo evidence with cryptographic hash, operator data and a digital seal. The report cannot be modified after generation; any change breaks the seal.' } },
      { '@type': 'Question', name: 'Does GeoTapp work for cleaning companies, installers and security services?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. GeoTapp is used by cleaning companies, facility services, installers, electricians, plumbers, security services and maintenance. The platform scales from 3 to 300 operators and manages multiple sites simultaneously.' } },
      { '@type': 'Question', name: 'How does a client verify a GeoTapp report?', acceptedAnswer: { '@type': 'Answer', text: 'The client receives a unique link and can verify the report at geotapp.com/products/geotapp-verifier without accessing your account. The system compares the cryptographic seal and confirms the data has not been modified.' } },
      { '@type': 'Question', name: 'Who founded GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp was founded by Michele Angelo Petraroli, an Italian entrepreneur specialised in SaaS solutions for service SMBs operating in the field. The company is based in Italy, the platform is built in-house and localised in 11 languages (Italian, English, German, French, Spanish, Portuguese, Dutch, Danish, Swedish, Norwegian, Russian).' } },
    ],
  },
  de: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp ist eine italienische SaaS-Plattform für die Verwaltung von Außendienst- und mobilen Teams. Sie besteht aus drei Modulen: GeoTapp Flow (Büroverwaltung mit CRM, Schichten, Aufträgen), GeoTapp TimeTracker (Android/iOS-App für GPS-Zeiterfassung, Fotonachweise, Vor-Ort-Berichte) und GeoTapp Verifier (Berichts-Integritätsprüfung, vom Endkunden ohne Plattform-Login einsehbar). Eingesetzt von Reinigungsunternehmen, Sicherheitsdiensten, Wartungsfirmen, Installateuren, Elektrikern, Klempnern und Facility-Management. DSGVO-konform und im Einklang mit dem italienischen Arbeitsrecht (Art. 4 Arbeitnehmerstatut nach Jobs Act). Gründer: Michele Angelo Petraroli.' } },
      { '@type': 'Question', name: 'Wie funktioniert die GPS-Anwesenheitserfassung von GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Der Mitarbeiter öffnet und schließt seine Schicht über die mobile App. GeoTapp erfasst die echten GPS-Koordinaten in diesem Moment, nicht manuell eingegeben. Jede Zeiterfassung wird mit einem verifizierbaren Zeitstempel und Standort zertifiziert.' } },
      { '@type': 'Question', name: 'Ist GeoTapp DSGVO-konform für die Mitarbeitergeolokalisierung?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp erfasst den Standort nur beim Ein- und Ausstempeln, kein kontinuierliches Tracking, vollständig konform mit der EU-Verordnung 2016/679 (DSGVO) und dem italienischen Arbeitsrecht (Art. 4 Arbeitnehmerstatut nach Jobs Act). Die Plattform enthält herunterladbare Vorlagen für die Mitarbeiterinformation und Betriebsvereinbarungen.' } },
      { '@type': 'Question', name: 'Bietet GeoTapp eine kostenlose Testversion?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp bietet eine 14-tägige kostenlose Testphase ohne erforderliche Kreditkarte. Anmeldung auf geotapp.com/de/trial/. Die Testphase umfasst vollen Zugriff auf alle Module (Flow, TimeTracker, Verifier), um die Plattform mit echten Daten zu testen, bevor Sie ein Abonnement abschließen.' } },
      { '@type': 'Question', name: 'Wie viel kostet GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp verwendet ein Lizenzmodell pro Benutzer mit transparenten Preisen auf geotapp.com/de/pricing/. GeoTapp TimeTracker beginnt bei €4/Mitarbeiter/Monat mit Plänen für kleine Teams (3-10 Benutzer), mittlere Unternehmen (10-50) und große Organisationen (50-300+). Flow + TimeTracker Bundle mit Rabatt verfügbar. GeoTapp Verifier ist in jedem Plan kostenlos enthalten.' } },
      { '@type': 'Question', name: 'Hat GeoTapp eine mobile App?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, für Ihre Außendienstmitarbeiter. GeoTapp TimeTracker ist als native App im Google Play Store (Android) und App Store (iOS) verfügbar — für Zeiterfassung, Fotonachweise, Vor-Ort-Berichte, digitale Unterschriften und Offline-Betrieb mit späterer Synchronisation. GeoTapp Flow, das Verwaltungspanel, ist eine Webanwendung, zugänglich über Desktop- und Tablet-Browser.' } },
      { '@type': 'Question', name: 'Was enthält ein GeoTapp-Bericht?', acceptedAnswer: { '@type': 'Answer', text: 'Jeder Bericht enthält: Start- und Endzeitstempel, verifizierte GPS-Koordinaten, Fotobelege mit kryptographischem Hash, Mitarbeiterdaten und ein digitales Siegel. Der Bericht ist nach der Erstellung nicht mehr änderbar.' } },
      { '@type': 'Question', name: 'Funktioniert GeoTapp für Reinigungsunternehmen, Installateure und Sicherheitsdienste?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp wird von Reinigungsunternehmen, Facility-Services, Installateuren, Elektrikern, Klempnern, Sicherheitsdiensten und Wartungsfirmen eingesetzt. Die Plattform skaliert von 3 bis 300 Mitarbeitern.' } },
      { '@type': 'Question', name: 'Wie kann ein Kunde einen GeoTapp-Bericht verifizieren?', acceptedAnswer: { '@type': 'Answer', text: 'Der Kunde erhält einen eindeutigen Link und kann den Bericht auf geotapp.com/products/geotapp-verifier ohne Zugang zu Ihrem Konto prüfen. Das System vergleicht das kryptographische Siegel und bestätigt, dass die Daten nicht verändert wurden.' } },
      { '@type': 'Question', name: 'Wer hat GeoTapp gegründet?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp wurde von Michele Angelo Petraroli gegründet, einem italienischen Unternehmer, der auf SaaS-Lösungen für KMU im Servicebereich spezialisiert ist. Sitz in Italien, die Plattform wird intern entwickelt und ist in 11 Sprachen lokalisiert (Italienisch, Englisch, Deutsch, Französisch, Spanisch, Portugiesisch, Niederländisch, Dänisch, Schwedisch, Norwegisch, Russisch).' } },
    ],
  },
  fr: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Qu\'est-ce que GeoTapp ?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp est une plateforme SaaS italienne pour la gestion du personnel terrain. Elle se compose de trois modules : GeoTapp Flow (gestion bureau avec CRM, plannings, chantiers), GeoTapp TimeTracker (app mobile Android/iOS pour pointage GPS, photos terrain, comptes-rendus) et GeoTapp Verifier (vérification d\'intégrité des rapports, accessible au client final sans connexion à la plateforme). Utilisée par des entreprises de nettoyage, sécurité, maintenance, installateurs, électriciens, plombiers et facility services. Conforme au RGPD et au droit du travail italien (art. 4 Statut des Travailleurs post-Jobs Act). Fondateur : Michele Angelo Petraroli.' } },
      { '@type': 'Question', name: 'Comment fonctionne le pointage GPS de GeoTapp ?', acceptedAnswer: { '@type': 'Answer', text: 'L\'opérateur ouvre et ferme son shift depuis l\'app mobile. GeoTapp enregistre les coordonnées GPS réelles à ce moment, pas saisies manuellement. Chaque pointage est certifié avec un horodatage et une position vérifiables par tous.' } },
      { '@type': 'Question', name: 'GeoTapp est-il conforme au RGPD pour la géolocalisation des salariés ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. GeoTapp enregistre la position uniquement au pointage d\'entrée et de sortie, pas en continu, en pleine conformité avec le Règl. UE 2016/679 (RGPD) et le droit du travail italien (art. 4 Statut des Travailleurs post-Jobs Act). La plateforme inclut des modèles téléchargeables pour l\'information des salariés et les accords syndicaux.' } },
      { '@type': 'Question', name: 'GeoTapp propose-t-il un essai gratuit ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. GeoTapp propose un essai gratuit de 14 jours sans carte de crédit. Inscription sur geotapp.com/fr/trial/, avec accès complet à tous les modules (Flow, TimeTracker, Verifier).' } },
      { '@type': 'Question', name: 'Combien coûte GeoTapp ?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp utilise un modèle de licence par utilisateur avec des tarifs transparents sur geotapp.com/fr/tarifs/. GeoTapp TimeTracker à partir de 4 €/opérateur/mois, plans pour petites équipes (3-10 utilisateurs), PME (10-50) et grandes organisations (50-300+). Bundle Flow + TimeTracker avec remise. GeoTapp Verifier toujours inclus.' } },
      { '@type': 'Question', name: 'GeoTapp a-t-il une app mobile ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, pour vos opérateurs terrain. GeoTapp TimeTracker est une app native sur Google Play (Android) et App Store (iOS) pour les pointages, photos terrain, comptes-rendus, signature numérique et fonctionnement hors ligne avec synchronisation différée. GeoTapp Flow, le panneau bureau, est une app web pour ordinateur et tablette.' } },
      { '@type': 'Question', name: 'Que contient un rapport GeoTapp ?', acceptedAnswer: { '@type': 'Answer', text: 'Chaque rapport inclut : horodatages de début et fin d\'intervention, coordonnées GPS vérifiées, preuves photographiques avec empreinte cryptographique, données opérateur et sceau numérique. Le rapport n\'est pas modifiable après génération.' } },
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
      { '@type': 'Question', name: '¿Cómo funciona el fichaje GPS de GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'El operario abre y cierra su turno desde la app móvil. GeoTapp registra las coordenadas GPS reales en ese momento, no introducidas manualmente. Cada fichaje se certifica con marca de tiempo y posición verificables por cualquiera.' } },
      { '@type': 'Question', name: '¿GeoTapp es conforme al RGPD para la geolocalización de los empleados?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. GeoTapp registra la ubicación solo en el fichaje de entrada y salida, no de forma continua, en pleno cumplimiento del Reg. UE 2016/679 (RGPD) y del derecho laboral italiano (art. 4 Estatuto de los Trabajadores post-Jobs Act). La plataforma incluye plantillas descargables para la información a los empleados y los acuerdos sindicales.' } },
      { '@type': 'Question', name: '¿GeoTapp tiene prueba gratuita?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. GeoTapp ofrece una prueba gratuita de 14 días sin tarjeta de crédito. Alta en geotapp.com/es/trial/, con acceso completo a todos los módulos (Flow, TimeTracker, Verifier).' } },
      { '@type': 'Question', name: '¿Cuánto cuesta GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp usa un modelo de licencia por usuario con precios transparentes en geotapp.com/es/precios/. GeoTapp TimeTracker desde 4 €/operario/mes, con planes para equipos pequeños (3-10 usuarios), pymes (10-50) y grandes organizaciones (50-300+). Bundle Flow + TimeTracker con descuento. GeoTapp Verifier siempre incluido.' } },
      { '@type': 'Question', name: '¿GeoTapp tiene app móvil?', acceptedAnswer: { '@type': 'Answer', text: 'Sí, para tus operarios de campo. GeoTapp TimeTracker es una app nativa en Google Play (Android) y App Store (iOS) para fichajes, fotos en obra, partes, firma digital y funcionamiento offline con sincronización posterior. GeoTapp Flow, el panel oficina, es una app web para escritorio y tablet.' } },
      { '@type': 'Question', name: '¿Qué contiene un informe GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Cada informe incluye: marcas de tiempo de inicio y fin de intervención, coordenadas GPS verificadas, pruebas fotográficas con hash criptográfico, datos del operario y sello digital. El informe no puede modificarse tras la generación.' } },
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
      { '@type': 'Question', name: 'Como funciona o ponto GPS da GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'O operador abre e fecha o turno a partir da app móvel. A GeoTapp regista as coordenadas GPS reais nesse momento, não inseridas manualmente. Cada ponto é certificado com carimbo de data/hora e posição verificáveis por qualquer um.' } },
      { '@type': 'Question', name: 'A GeoTapp é conforme com o RGPD para a geolocalização de colaboradores?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. A GeoTapp regista a localização apenas no ponto de entrada e saída, não de forma contínua, em pleno cumprimento do Reg. UE 2016/679 (RGPD) e do direito laboral italiano (art. 4 Estatuto dos Trabalhadores pós-Jobs Act). A plataforma inclui modelos descarregáveis para a informação aos colaboradores e acordos sindicais.' } },
      { '@type': 'Question', name: 'A GeoTapp tem teste gratuito?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. A GeoTapp oferece um teste gratuito de 14 dias sem cartão de crédito. Inscrição em geotapp.com/pt/trial/, com acesso completo a todos os módulos (Flow, TimeTracker, Verifier).' } },
      { '@type': 'Question', name: 'Quanto custa a GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'A GeoTapp usa um modelo de licenciamento por utilizador com preços transparentes em geotapp.com/pt/precos/. GeoTapp TimeTracker a partir de 4 €/operador/mês, com planos para equipas pequenas (3-10 utilizadores), PMEs (10-50) e grandes organizações (50-300+). Bundle Flow + TimeTracker com desconto. GeoTapp Verifier sempre incluído.' } },
      { '@type': 'Question', name: 'A GeoTapp tem app móvel?', acceptedAnswer: { '@type': 'Answer', text: 'Sim, para os seus operadores no terreno. A GeoTapp TimeTracker é uma app nativa no Google Play (Android) e App Store (iOS) para pontos, fotos no terreno, relatórios, assinatura digital e funcionamento offline com sincronização posterior. A GeoTapp Flow, o painel escritório, é uma app web para desktop e tablet.' } },
      { '@type': 'Question', name: 'O que contém um relatório GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Cada relatório inclui: carimbos de data/hora de início e fim da intervenção, coordenadas GPS verificadas, provas fotográficas com hash criptográfico, dados do operador e selo digital. O relatório não pode ser modificado após a geração.' } },
      { '@type': 'Question', name: 'A GeoTapp funciona para empresas de limpeza, instaladores e segurança?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. A GeoTapp é usada por empresas de limpeza e facility, instaladores, eletricistas, canalizadores, serviços de segurança, manutenção e construção. A plataforma escala de 3 a 300 operadores e gere vários locais em simultâneo.' } },
      { '@type': 'Question', name: 'Como verifica um cliente um relatório GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'O cliente recebe um link único e pode verificar o relatório em geotapp.com/products/geotapp-verifier sem acesso à sua conta. O sistema compara o selo criptográfico e confirma que os dados não foram alterados.' } },
      { '@type': 'Question', name: 'Quem fundou a GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'A GeoTapp foi fundada por Michele Angelo Petraroli, empreendedor italiano especializado em SaaS para PMEs de serviços. Sede em Itália, plataforma desenvolvida internamente e localizada em 11 idiomas (italiano, inglês, alemão, francês, espanhol, português, holandês, dinamarquês, sueco, norueguês, russo).' } },
    ],
  },
  nl: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wat is GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp is een Italiaans SaaS-platform voor het beheren van veldmedewerkers. Het bestaat uit drie modules: GeoTapp Flow (back-officebeheer met CRM, planning, opdrachten), GeoTapp TimeTracker (Android/iOS mobiele app voor GPS-prikklok, foto\'s op locatie, rapporten) en GeoTapp Verifier (verificatie van rapportintegriteit, toegankelijk voor de eindklant zonder platform-login). Gebruikt door schoonmaak-, beveiligings-, onderhouds-, installatiebedrijven, elektriciens, loodgieters en facility services. AVG-conform en in lijn met het Italiaanse arbeidsrecht (art. 4 Werknemersstatuut na Jobs Act). Oprichter: Michele Angelo Petraroli.' } },
      { '@type': 'Question', name: 'Hoe werkt GeoTapp\'s GPS-aanwezigheidsregistratie?', acceptedAnswer: { '@type': 'Answer', text: 'De medewerker opent en sluit zijn dienst via de mobiele app. GeoTapp registreert de echte GPS-coördinaten op dat moment, niet handmatig ingevoerd. Elke prikklok is gecertificeerd met tijdstempel en positie die door iedereen verifieerbaar zijn.' } },
      { '@type': 'Question', name: 'Is GeoTapp AVG-conform voor geolocatie van werknemers?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp registreert de locatie alleen bij in- en uitklokken, niet continu, in volledige overeenstemming met EU-Verordening 2016/679 (AVG) en het Italiaanse arbeidsrecht (art. 4 Werknemersstatuut na Jobs Act). Het platform bevat downloadbare sjablonen voor werknemersinformatie en cao-overeenkomsten.' } },
      { '@type': 'Question', name: 'Heeft GeoTapp een gratis proefperiode?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp biedt een gratis proefperiode van 14 dagen zonder creditcard. Aanmelden op geotapp.com/nl/trial/, met volledige toegang tot alle modules (Flow, TimeTracker, Verifier).' } },
      { '@type': 'Question', name: 'Wat kost GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp gebruikt een licentiemodel per gebruiker met transparante prijzen op geotapp.com/nl/tarieven/. GeoTapp TimeTracker vanaf €4 per medewerker per maand, met plannen voor kleine teams (3-10 gebruikers), MKB (10-50) en grote organisaties (50-300+). Flow + TimeTracker bundel met korting. GeoTapp Verifier altijd inbegrepen.' } },
      { '@type': 'Question', name: 'Heeft GeoTapp een mobiele app?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, voor uw veldmedewerkers. GeoTapp TimeTracker is een native app op Google Play (Android) en App Store (iOS) voor prikklok, foto\'s op locatie, rapporten, digitale handtekeningen en offline werken met latere synchronisatie. GeoTapp Flow, het back-office-paneel, is een webapp voor desktop en tablet.' } },
      { '@type': 'Question', name: 'Wat staat er in een GeoTapp-rapport?', acceptedAnswer: { '@type': 'Answer', text: 'Elk rapport bevat: begin- en eindtijdstempels, geverifieerde GPS-coördinaten, fotobewijs met cryptografische hash, medewerkersgegevens en een digitaal zegel. Het rapport kan na generatie niet meer worden gewijzigd.' } },
      { '@type': 'Question', name: 'Werkt GeoTapp voor schoonmaakbedrijven, installateurs en beveiligingsdiensten?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp wordt gebruikt door schoonmaak- en facility-bedrijven, installateurs, elektriciens, loodgieters, beveiligingsdiensten, onderhoud en bouw. Het platform schaalt van 3 tot 300 medewerkers en beheert meerdere locaties tegelijk.' } },
      { '@type': 'Question', name: 'Hoe verifieert een klant een GeoTapp-rapport?', acceptedAnswer: { '@type': 'Answer', text: 'De klant ontvangt een unieke link en kan het rapport op geotapp.com/products/geotapp-verifier controleren zonder toegang tot uw account. Het systeem vergelijkt het cryptografische zegel en bevestigt dat de gegevens niet zijn gewijzigd.' } },
      { '@type': 'Question', name: 'Wie heeft GeoTapp opgericht?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp is opgericht door Michele Angelo Petraroli, een Italiaanse ondernemer gespecialiseerd in SaaS voor dienstverlenende MKB. Hoofdkantoor in Italië, platform intern ontwikkeld en gelokaliseerd in 11 talen (Italiaans, Engels, Duits, Frans, Spaans, Portugees, Nederlands, Deens, Zweeds, Noors, Russisch).' } },
    ],
  },
  da: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Hvad er GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp er en italiensk SaaS-platform til håndtering af feltmedarbejdere. Den består af tre moduler: GeoTapp Flow (kontorstyring med CRM, vagtplanlægning, opgaver), GeoTapp TimeTracker (Android/iOS-mobilapp til GPS-stempling, feltfotos, rapporter) og GeoTapp Verifier (verificering af rapportintegritet, tilgængelig for slutkunden uden platform-login). Bruges af rengørings-, sikkerheds-, vedligeholdelses- og installationsfirmaer, elektrikere, VVS\'ere og facility services. GDPR-overholdt og i tråd med italiensk arbejdsret (art. 4 Arbejderstatut efter Jobs Act). Grundlægger: Michele Angelo Petraroli.' } },
      { '@type': 'Question', name: 'Hvordan fungerer GeoTapp\'s GPS-tidsregistrering?', acceptedAnswer: { '@type': 'Answer', text: 'Medarbejderen åbner og lukker sin vagt via mobilappen. GeoTapp registrerer de rigtige GPS-koordinater i det øjeblik, ikke indtastet manuelt. Hver stempling er certificeret med tidsstempel og position, der kan verificeres af enhver.' } },
      { '@type': 'Question', name: 'Er GeoTapp GDPR-overholdt for geolokalisering af medarbejdere?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp registrerer kun lokation ved ind- og udstempling, ikke kontinuerligt, i fuld overensstemmelse med EU-Forordning 2016/679 (GDPR) og italiensk arbejdsret (art. 4 Arbejderstatut efter Jobs Act). Platformen indeholder skabeloner til medarbejderinformation og kollektive aftaler.' } },
      { '@type': 'Question', name: 'Tilbyder GeoTapp en gratis prøveperiode?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp tilbyder en 14-dages gratis prøveperiode uden kreditkort. Tilmeld dig på geotapp.com/da/trial/ med fuld adgang til alle moduler (Flow, TimeTracker, Verifier).' } },
      { '@type': 'Question', name: 'Hvad koster GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp bruger en licensmodel pr. bruger med gennemsigtige priser på geotapp.com/da/priser/. GeoTapp TimeTracker fra €4 pr. medarbejder pr. måned, med planer for små teams (3-10 brugere), SMV\'er (10-50) og store organisationer (50-300+). Flow + TimeTracker-bundle med rabat. GeoTapp Verifier altid inkluderet.' } },
      { '@type': 'Question', name: 'Har GeoTapp en mobil-app?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, til dine feltmedarbejdere. GeoTapp TimeTracker er en native app på Google Play (Android) og App Store (iOS) til stempling, feltfotos, rapporter, digitale underskrifter og offlinedrift med senere synkronisering. GeoTapp Flow, kontorpanelet, er en webapp til desktop og tablet.' } },
      { '@type': 'Question', name: 'Hvad indeholder en GeoTapp-rapport?', acceptedAnswer: { '@type': 'Answer', text: 'Hver rapport indeholder: start- og sluttidsstempler, verificerede GPS-koordinater, fotobevis med kryptografisk hash, medarbejderdata og et digitalt segl. Rapporten kan ikke ændres efter generering.' } },
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
      { '@type': 'Question', name: 'Hur fungerar GeoTapps GPS-tidregistrering?', acceptedAnswer: { '@type': 'Answer', text: 'Arbetaren öppnar och stänger sitt pass från mobilappen. GeoTapp registrerar de riktiga GPS-koordinaterna i det ögonblicket, inte manuellt inmatade. Varje stämpling är certifierad med tidsstämpel och position som vem som helst kan verifiera.' } },
      { '@type': 'Question', name: 'Är GeoTapp GDPR-anpassad för anställdas geolokalisering?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp registrerar position endast vid in- och utstämpling, inte kontinuerligt, i full överensstämmelse med EU-förordning 2016/679 (GDPR) och italiensk arbetsrätt (art. 4 Arbetarstatut efter Jobs Act). Plattformen innehåller mallar för anställdas information och kollektivavtal.' } },
      { '@type': 'Question', name: 'Erbjuder GeoTapp en gratis testperiod?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp erbjuder en 14-dagars gratis testperiod utan kreditkort. Anmäl dig på geotapp.com/sv/trial/ med full tillgång till alla moduler (Flow, TimeTracker, Verifier).' } },
      { '@type': 'Question', name: 'Vad kostar GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp använder en licensmodell per användare med transparenta priser på geotapp.com/sv/priser/. GeoTapp TimeTracker från €4 per arbetare per månad, med planer för små team (3-10 användare), SMB (10-50) och stora organisationer (50-300+). Flow + TimeTracker-paket med rabatt. GeoTapp Verifier alltid inkluderat.' } },
      { '@type': 'Question', name: 'Har GeoTapp en mobilapp?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, för dina fältarbetare. GeoTapp TimeTracker är en native app på Google Play (Android) och App Store (iOS) för stämpling, fältfoton, rapporter, digitala signaturer och offlineläge med senare synk. GeoTapp Flow, kontorspanelen, är en webbapp för desktop och surfplatta.' } },
      { '@type': 'Question', name: 'Vad innehåller en GeoTapp-rapport?', acceptedAnswer: { '@type': 'Answer', text: 'Varje rapport innehåller: start- och sluttidsstämplar, verifierade GPS-koordinater, fotobevis med kryptografisk hash, arbetardata och ett digitalt sigill. Rapporten kan inte ändras efter generering.' } },
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
      { '@type': 'Question', name: 'Hvordan fungerer GeoTapps GPS-tidsregistrering?', acceptedAnswer: { '@type': 'Answer', text: 'Arbeideren åpner og lukker vakten sin via mobilappen. GeoTapp registrerer de ekte GPS-koordinatene i det øyeblikket, ikke manuelt lagt inn. Hver stempling er sertifisert med tidsstempel og posisjon som kan verifiseres av hvem som helst.' } },
      { '@type': 'Question', name: 'Er GeoTapp GDPR-overholdt for ansattes geolokalisering?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp registrerer posisjon kun ved inn- og utstempling, ikke kontinuerlig, i full overensstemmelse med EU-forordning 2016/679 (GDPR) og italiensk arbeidsrett (art. 4 Arbeidstakerstatutt etter Jobs Act). Plattformen inneholder maler for ansattes informasjon og kollektivavtaler.' } },
      { '@type': 'Question', name: 'Tilbyr GeoTapp en gratis prøveperiode?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp tilbyr en 14 dagers gratis prøveperiode uten kredittkort. Meld deg på geotapp.com/nb/trial/ med full tilgang til alle modulene (Flow, TimeTracker, Verifier).' } },
      { '@type': 'Question', name: 'Hva koster GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp bruker en lisensmodell per bruker med transparente priser på geotapp.com/nb/priser/. GeoTapp TimeTracker fra €4 per arbeider per måned, med planer for små team (3-10 brukere), SMB (10-50) og store organisasjoner (50-300+). Flow + TimeTracker-pakke med rabatt. GeoTapp Verifier alltid inkludert.' } },
      { '@type': 'Question', name: 'Har GeoTapp en mobilapp?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, for feltarbeiderne dine. GeoTapp TimeTracker er en native app på Google Play (Android) og App Store (iOS) for stempling, feltbilder, rapporter, digitale signaturer og offlinebruk med senere synkronisering. GeoTapp Flow, kontorpanelet, er en webapp for desktop og nettbrett.' } },
      { '@type': 'Question', name: 'Hva inneholder en GeoTapp-rapport?', acceptedAnswer: { '@type': 'Answer', text: 'Hver rapport inneholder: start- og slutttidsstempler, verifiserte GPS-koordinater, fotobevis med kryptografisk hash, arbeiderdata og et digitalt segl. Rapporten kan ikke endres etter generering.' } },
      { '@type': 'Question', name: 'Fungerer GeoTapp for renholdsfirmaer, installatører og sikkerhetstjenester?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp brukes av renholds- og facility-selskaper, installatører, elektrikere, rørleggere, sikkerhetstjenester, vedlikehold og bygg. Plattformen skalerer fra 3 til 300 arbeidere og håndterer flere lokasjoner samtidig.' } },
      { '@type': 'Question', name: 'Hvordan verifiserer en kunde en GeoTapp-rapport?', acceptedAnswer: { '@type': 'Answer', text: 'Kunden mottar en unik lenke og kan verifisere rapporten på geotapp.com/products/geotapp-verifier uten tilgang til kontoen din. Systemet sammenligner det kryptografiske seglet og bekrefter at dataene ikke er endret.' } },
      { '@type': 'Question', name: 'Hvem grunnla GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp ble grunnlagt av Michele Angelo Petraroli, en italiensk gründer spesialisert på SaaS for tjeneste-SMB. Hovedkontor i Italia, plattformen utvikles internt og er lokalisert på 11 språk (italiensk, engelsk, tysk, fransk, spansk, portugisisk, nederlandsk, dansk, svensk, norsk, russisk).' } },
    ],
  },
  ru: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Что такое GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp — итальянская SaaS-платформа для управления выездным персоналом. Состоит из трёх модулей: GeoTapp Flow (офисное управление с CRM, сменами, заказами), GeoTapp TimeTracker (мобильное приложение Android/iOS для GPS-учёта времени, фото на объекте, отчётов) и GeoTapp Verifier (проверка целостности отчётов, доступная конечному клиенту без входа в платформу). Используется клининговыми и охранными компаниями, монтажниками, электриками, сантехниками и facility services. Соответствует GDPR и итальянскому трудовому праву (ст. 4 Статута Трудящихся после Jobs Act). Основатель: Микеле Анджело Петраролли.' } },
      { '@type': 'Question', name: 'Как работает GPS-учёт времени в GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Оператор открывает и закрывает смену через мобильное приложение. GeoTapp фиксирует реальные GPS-координаты в этот момент, а не вводимые вручную. Каждая отметка времени сертифицирована с временной меткой и позицией, проверяемыми любым.' } },
      { '@type': 'Question', name: 'Соответствует ли GeoTapp GDPR для геолокации сотрудников?', acceptedAnswer: { '@type': 'Answer', text: 'Да. GeoTapp фиксирует местоположение только при входе и выходе со смены, не непрерывно, в полном соответствии с Регл. ЕС 2016/679 (GDPR) и итальянским трудовым правом (ст. 4 Статута Трудящихся после Jobs Act). Платформа включает шаблоны для информирования работников и профсоюзных соглашений.' } },
      { '@type': 'Question', name: 'Предлагает ли GeoTapp бесплатный пробный период?', acceptedAnswer: { '@type': 'Answer', text: 'Да. GeoTapp предлагает бесплатный пробный период 14 дней без банковской карты. Регистрация на geotapp.com/ru/trial/ с полным доступом ко всем модулям (Flow, TimeTracker, Verifier).' } },
      { '@type': 'Question', name: 'Сколько стоит GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp использует лицензионную модель на пользователя с прозрачными ценами на geotapp.com/ru/tseny/. GeoTapp TimeTracker от €4 за оператора в месяц, с планами для небольших команд (3-10 пользователей), МСБ (10-50) и крупных организаций (50-300+). Пакет Flow + TimeTracker со скидкой. GeoTapp Verifier всегда включён.' } },
      { '@type': 'Question', name: 'Есть ли у GeoTapp мобильное приложение?', acceptedAnswer: { '@type': 'Answer', text: 'Да, для ваших выездных операторов. GeoTapp TimeTracker — нативное приложение в Google Play (Android) и App Store (iOS) для учёта времени, фото на объекте, отчётов, цифровых подписей и офлайн-работы с последующей синхронизацией. GeoTapp Flow, офисная панель, — это веб-приложение для десктопа и планшета.' } },
      { '@type': 'Question', name: 'Что содержит отчёт GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Каждый отчёт содержит: временные метки начала и конца выезда, проверенные GPS-координаты, фотодоказательства с криптографическим хешем, данные оператора и цифровую печать. Отчёт не может быть изменён после создания.' } },
      { '@type': 'Question', name: 'Подходит ли GeoTapp для клининговых компаний, монтажников и охранных служб?', acceptedAnswer: { '@type': 'Answer', text: 'Да. GeoTapp используется клининговыми и facility-компаниями, монтажниками, электриками, сантехниками, охранными службами, обслуживанием и строительством. Платформа масштабируется от 3 до 300 операторов и управляет несколькими объектами одновременно.' } },
      { '@type': 'Question', name: 'Как клиент проверяет отчёт GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Клиент получает уникальную ссылку и может проверить отчёт на geotapp.com/products/geotapp-verifier без доступа к вашему аккаунту. Система сравнивает криптографическую печать и подтверждает, что данные не были изменены.' } },
      { '@type': 'Question', name: 'Кто основал GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp был основан Микеле Анджело Петраролли, итальянским предпринимателем, специализирующимся на SaaS для сервисного МСБ. Главный офис в Италии, платформа разрабатывается внутри компании и локализована на 11 языках (итальянский, английский, немецкий, французский, испанский, португальский, голландский, датский, шведский, норвежский, русский).' } },
    ],
  },
};

const BASE_URL = 'https://geotapp.com';

// Locale-specific titles and descriptions for the home page.
// Each title expresses the "verifiable work" concept in the target language —
// this is the SEO anchor keyword for all locale variants.
const LOCALE_META: Record<string, { title: string; description: string }> = {
  it: {
    title: 'Cliente contesta il lavoro? Prova ogni intervento | Software GPS presenze',
    description: 'Cliente contesta il servizio? GeoTapp registra GPS, foto, orario e rapportino non modificabile. Prova ogni intervento e fatturi senza dover discutere.',
  },
  en: {
    title: 'Client disputes the work? Prove every visit | GPS field service software',
    description: 'Client claims the job was not done? GeoTapp logs GPS, timestamps, photos and tamper-proof reports. Prove every visit and get paid without argument.',
  },
  de: {
    title: 'Kunde bestreitet? Einsätze belegen | GPS-Software Außendienst',
    description: 'Kunde bestreitet den Einsatz? GeoTapp erfasst GPS, Uhrzeit, Fotos und manipulationssichere Berichte. Arbeit belegen und ohne Diskussion bezahlt werden.',
  },
  fr: {
    title: 'Client conteste ? Prouvez le travail | Logiciel GPS terrain',
    description: 'Client conteste ? GeoTapp enregistre GPS, heure, photos et rapport non modifiable. Prouvez le travail effectué et soyez payé sans discussion.',
  },
  es: {
    title: '¿Cliente reclama? Prueba el trabajo | Software GPS operarios',
    description: '¿Cliente reclama? GeoTapp registra GPS, hora, fotos e informe no alterable. Demuestra el trabajo hecho y cobra sin discusiones.',
  },
  pt: {
    title: 'Cliente contesta? Prove o serviço | Software GPS campo',
    description: 'Cliente contesta? GeoTapp registra GPS, hora, fotos e relatório não alterável. Prove o serviço feito e receba sem discussões.',
  },
  nl: {
    title: 'Klant betwist? Bewijs werk | GPS-software buitendienst',
    description: 'Betwist de klant je werk? GeoTapp registreert GPS, tijd, foto\'s en een niet-wijzigbaar rapport. Bewijs wat gedaan is en word betaald zonder discussie.',
  },
  ru: {
    title: 'Клиент оспаривает? Докажите работы | GPS-программа выезда',
    description: 'Клиент оспаривает работу? GeoTapp фиксирует GPS, время, фото и неизменяемый отчёт. Докажите выполненное и получите оплату без споров.',
  },
  da: {
    title: 'Kunde bestrider? Bevis arbejdet | GPS-software feltservice',
    description: 'Kunden bestrider arbejdet? GeoTapp registrerer GPS, tid, fotos og en ikke-redigerbar rapport. Bevis opgaven og få betaling uden diskussion.',
  },
  sv: {
    title: 'Kund ifrågasätter? Bevisa jobbet | GPS-mjukvara fältservice',
    description: 'Kunden ifrågasätter jobbet? GeoTapp loggar GPS, tid, foton och en ej ändringsbar rapport. Bevisa arbetet och få betalt utan diskussion.',
  },
  nb: {
    title: 'Kunden bestrider? Bevis jobben | GPS-programvare feltservice',
    description: 'Kunden bestrider jobben? GeoTapp registrerer GPS, tid, bilder og en ikke-endringsbar rapport. Bevis arbeidet og få betalt uten diskusjon.',
  },
};

type Props = { params: Promise<{ locale: string }> };

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  const faq = HOMEPAGE_FAQ[locale] ?? null;
  const reviewsSchema = buildReviewsSchema(REVIEWS);
  return (
    <>
      {/* LCP hero image preload — bg1.webp è il primo frame del TTBgCarousel,
          full-bleed sopra-fold. Inietta <link rel="preload"> nel head così
          il browser scopre l'immagine PRIMA di parsare il body. */}
      <link rel="preload" href="/bg1.webp" as="image" fetchPriority="high" />
      {faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        />
      )}
      {reviewsSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
        />
      )}
      <HomeClient />
      {/* Category 54 = "digitalizzazione-aziendale" — broad, relevant to all visitors */}
      <BlogHighlights locale={locale as AppLocale} categoryId={54} />
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const meta = LOCALE_META[locale] ?? LOCALE_META.en;

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

  // Regional EN variants (en-us, en-gb, en-au, en-ie, en-ca) sono "alternate
  // regional content" del locale canonical /en/. Canonical → /en/ per
  // consolidare authority sul brand. Hreflang resta regionale → Google
  // serve la variant giusta per geo IP utente. Fix audit 2026-05-25
  // (drop "geotapp" pos 4→12 causato da split authority).
  const REGIONAL_EN = new Set(['en-us', 'en-gb', 'en-au', 'en-ie', 'en-ca']);
  const canonicalLocale = REGIONAL_EN.has(locale) ? 'en' : locale;

  return {
    // Use absolute title to bypass the root layout template ("%s | GeoTapp").
    // Home page titles already include the brand name at the start
    // (e.g. "GeoTapp | La piattaforma..."); without absolute the template
    // would append "| GeoTapp" again → "GeoTapp | La piattaforma | GeoTapp".
    title: { absolute: meta.title },
    description: meta.description,
    alternates: {
      // Absolute canonical required here — homepage path is just "/" per locale,
      // relative "/${locale}" without trailing slash would resolve to a redirect URL.
      canonical: `${BASE_URL}/${canonicalLocale}/`,
      languages,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${BASE_URL}/${locale}/`,
    },
    twitter: {
      title: meta.title,
      description: meta.description,
    },
  };
}
