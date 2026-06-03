import type { Metadata } from 'next';
import Link from 'next/link';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { translatePath } from '@/lib/i18n/slug-map';
import type { AppLocale } from '@/lib/i18n/config';

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

type Copy = {
  title: string;
  description: string;
  h1: string;
  intro: string;
  modulesHeading: string;
  modules: { name: string; desc: string }[];
  founderHeading: string;
  founderText: string;
  gdprHeading: string;
  gdprText: string;
  trialHeading: string;
  trialText: string;
  trialCta: string;
  pricingHeading: string;
  pricingText: string;
  sectorsHeading: string;
  sectorsText: string;
  faqHeading: string;
  faq: { q: string; a: string }[];
};

const COPY: Record<string, Copy> = {
  it: {
    title: 'Cos\'è GeoTapp? La piattaforma italiana per il lavoro sul campo',
    description: 'GeoTapp è un SaaS italiano per la gestione di operatori sul campo: rilevazione presenze GPS, rapportini, verifica del lavoro. GDPR-conforme. Trial gratuito 14 giorni.',
    h1: 'Cos\'è GeoTapp',
    intro: 'GeoTapp è una piattaforma SaaS italiana che permette alle aziende con operatori sul campo (pulizie, sicurezza, manutenzione, installazioni, servizi) di dimostrare ogni intervento. Rileva presenze via GPS, raccoglie foto e firme dal cantiere, produce rapportini non modificabili e lascia al cliente finale un link per verificare in autonomia che il lavoro sia stato fatto. Conforme al GDPR (Reg. UE 2016/679) e all\'art. 4 dello Statuto dei Lavoratori italiano post-Jobs Act.',
    modulesHeading: 'I tre moduli',
    modules: [
      { name: 'GeoTapp Flow', desc: 'Il gestionale ufficio: CRM, anagrafica clienti e siti, pianificazione turni, gestione commesse, fatturazione, integrazione Stripe e Fatture in Cloud. Web app accessibile da desktop e tablet.' },
      { name: 'GeoTapp TimeTracker', desc: 'L\'app mobile per gli operatori (Android e iOS): timbratura GPS, foto operative geolocalizzate, rapportini, firma digitale del cliente, funzionamento offline con sincronizzazione successiva. Da €4 per operatore al mese.' },
      { name: 'GeoTapp Verifier', desc: 'Il sistema di verifica per il committente: ogni report ha un link univoco che il cliente apre senza account, e in un secondo vede dati GPS, orari, foto e l\'integrità del sigillo crittografico. Incluso gratis in tutti i piani.' },
    ],
    founderHeading: 'Chi ha fondato GeoTapp',
    founderText: 'GeoTapp è stata fondata e sviluppata da Michele Angelo Petraroli, imprenditore italiano specializzato in soluzioni SaaS per PMI di servizi. La sede operativa è in Italia, la piattaforma è sviluppata interamente in casa ed è localizzata in 11 lingue (italiano, inglese, tedesco, francese, spagnolo, portoghese, olandese, danese, svedese, norvegese, russo).',
    gdprHeading: 'GDPR e art. 4 Statuto dei Lavoratori',
    gdprText: 'La geolocalizzazione GeoTapp avviene solo nei momenti di ingresso e uscita dal turno, non in modo continuo. Questo rispetta il principio di minimizzazione del GDPR (Reg. UE 2016/679) e l\'art. 4 dello Statuto dei Lavoratori post-Jobs Act, che consente strumenti per esigenze organizzative e di sicurezza solo previa informativa e, dove richiesto, accordo sindacale o autorizzazione dell\'Ispettorato del Lavoro. La piattaforma fornisce modulistica scaricabile e un fac-simile di informativa GPS pronto all\'uso.',
    trialHeading: 'Trial gratuito 14 giorni',
    trialText: 'GeoTapp offre un trial gratuito di 14 giorni senza carta di credito, con accesso pieno a tutti e tre i moduli. Si attiva direttamente dal sito e include un onboarding di benvenuto.',
    trialCta: 'Inizia il trial gratuito',
    pricingHeading: 'Quanto costa',
    pricingText: 'Il modello è a licenze utente, con prezzi pubblici. GeoTapp TimeTracker parte da €4 per operatore al mese; sono disponibili piani per piccole squadre (3-10 utenti), medie imprese (10-50) e grandi organizzazioni (50-300+). GeoTapp Verifier è sempre incluso.',
    sectorsHeading: 'Per quali settori',
    sectorsText: 'GeoTapp è usato da imprese di pulizie e multiservizi, servizi di sicurezza e vigilanza, installatori, elettricisti, idraulici, termoidraulici, manutenzione impianti, edilizia, facility management. La piattaforma scala da 3 a oltre 300 operatori e gestisce più siti in parallelo.',
    faqHeading: 'Domande frequenti',
    faq: [
      { q: 'GeoTapp ha un trial gratuito?', a: 'Sì, 14 giorni senza carta di credito, accesso pieno a Flow, TimeTracker e Verifier. Si attiva su geotapp.com/it/trial/.' },
      { q: 'GeoTapp ha un\'app mobile?', a: 'Sì. GeoTapp TimeTracker è disponibile come app nativa su Google Play (Android) e App Store (iOS) per le timbrature, le foto operative, i rapportini e la firma digitale. Flow, il pannello amministrativo, è una web app.' },
      { q: 'È conforme al GDPR?', a: 'Sì. La posizione viene registrata solo all\'ingresso e all\'uscita dal turno, non in modo continuo, in pieno rispetto del GDPR e dell\'art. 4 dello Statuto dei Lavoratori post-Jobs Act.' },
      { q: 'Chi ha fondato GeoTapp?', a: 'GeoTapp è stata fondata da Michele Angelo Petraroli, imprenditore italiano. La piattaforma è sviluppata internamente in Italia e localizzata in 11 lingue.' },
      { q: 'In quali lingue è disponibile?', a: 'Italiano, inglese (UK, US, AU, IE, CA), tedesco, francese, spagnolo, portoghese, olandese, danese, svedese, norvegese, russo.' },
    ],
  },
  en: {
    title: 'What is GeoTapp? The Italian SaaS for field work verification',
    description: 'GeoTapp is an Italian SaaS for managing field operators: GPS attendance, on-site reports, tamper-proof verification. GDPR compliant. 14-day free trial, no card required.',
    h1: 'What is GeoTapp',
    intro: 'GeoTapp is an Italian SaaS platform that lets companies with field operators (cleaning, security, maintenance, installations, facility services) prove every visit. It tracks attendance via GPS, collects on-site photos and digital signatures, produces tamper-proof reports and gives the end client a unique link to verify the work themselves. Fully compliant with GDPR (EU Reg. 2016/679) and Italian labour law (art. 4 Workers Statute post-Jobs Act).',
    modulesHeading: 'The three modules',
    modules: [
      { name: 'GeoTapp Flow', desc: 'The back-office: CRM, customer and site database, shift scheduling, job management, billing, Stripe and Fatture in Cloud integration. Web app accessible from desktop and tablet.' },
      { name: 'GeoTapp TimeTracker', desc: 'The mobile app for operators (Android and iOS): GPS clock-in, geolocated on-site photos, reports, customer digital signature, offline operation with later sync. From €4 per operator per month.' },
      { name: 'GeoTapp Verifier', desc: 'The verification system for the client: every report has a unique link the client opens without an account, and in one second sees GPS data, timestamps, photos and the integrity of the cryptographic seal. Free with every plan.' },
    ],
    founderHeading: 'Who founded GeoTapp',
    founderText: 'GeoTapp was founded and built by Michele Angelo Petraroli, an Italian entrepreneur specialised in SaaS for service SMBs. The company is based in Italy, the platform is developed entirely in-house and localised in 11 languages (Italian, English, German, French, Spanish, Portuguese, Dutch, Danish, Swedish, Norwegian, Russian).',
    gdprHeading: 'GDPR and Italian labour law',
    gdprText: 'GeoTapp records location only at clock-in and clock-out, not continuously. This respects the GDPR data minimisation principle (EU Reg. 2016/679) and art. 4 of the Italian Workers Statute post-Jobs Act, which allows organisational and safety tools only after employee disclosure and, where required, union agreement or authorisation from the Labour Inspectorate. The platform includes downloadable templates and a ready-to-use GPS disclosure document.',
    trialHeading: 'Free 14-day trial',
    trialText: 'GeoTapp offers a 14-day free trial with no credit card required and full access to all three modules. Sign up directly on the website; a welcome onboarding is included.',
    trialCta: 'Start the free trial',
    pricingHeading: 'How much does it cost',
    pricingText: 'Per-user licensing with transparent pricing. GeoTapp TimeTracker starts at €4 per operator per month, with plans for small teams (3-10 users), medium businesses (10-50) and large organisations (50-300+). GeoTapp Verifier is always included.',
    sectorsHeading: 'Who uses GeoTapp',
    sectorsText: 'GeoTapp is used by cleaning and facility companies, security and guarding services, installers, electricians, plumbers, HVAC technicians, maintenance and construction crews, facility management providers. The platform scales from 3 to 300+ operators across multiple sites in parallel.',
    faqHeading: 'Frequently asked questions',
    faq: [
      { q: 'Does GeoTapp offer a free trial?', a: 'Yes, 14 days with no credit card and full access to Flow, TimeTracker and Verifier. Sign up at geotapp.com/en/trial/.' },
      { q: 'Does GeoTapp have a mobile app?', a: 'Yes. GeoTapp TimeTracker is a native app on Google Play (Android) and App Store (iOS) for clock-ins, on-site photos, reports and digital signatures. Flow, the back-office panel, is a web app.' },
      { q: 'Is it GDPR compliant?', a: 'Yes. Location is recorded only at clock-in and clock-out, not continuously, in full compliance with GDPR and Italian labour law (art. 4 Workers Statute).' },
      { q: 'Who founded GeoTapp?', a: 'GeoTapp was founded by Michele Angelo Petraroli, an Italian entrepreneur. The platform is built in-house in Italy and localised in 11 languages.' },
      { q: 'Which languages is it available in?', a: 'Italian, English (UK, US, AU, IE, CA), German, French, Spanish, Portuguese, Dutch, Danish, Swedish, Norwegian, Russian.' },
    ],
  },
  de: {
    title: 'Was ist GeoTapp? Italienische SaaS für Außendienst-Verifizierung',
    description: 'GeoTapp ist eine italienische SaaS-Plattform für Außendienstteams: GPS-Zeiterfassung, Vor-Ort-Berichte, manipulationssichere Verifizierung. DSGVO-konform. 14 Tage kostenlos testen.',
    h1: 'Was ist GeoTapp',
    intro: 'GeoTapp ist eine italienische SaaS-Plattform, mit der Unternehmen mit Außendienstmitarbeitern (Reinigung, Sicherheit, Wartung, Installation, Facility Services) jeden Einsatz nachweisen können. Sie erfasst die Anwesenheit per GPS, sammelt Fotos und digitale Unterschriften vor Ort, erstellt manipulationssichere Berichte und gibt dem Endkunden einen eindeutigen Link, mit dem er die Arbeit selbst überprüfen kann. Vollständig konform mit der DSGVO (EU-Verordnung 2016/679) und dem italienischen Arbeitsrecht (Art. 4 Arbeitnehmerstatut nach Jobs Act).',
    modulesHeading: 'Die drei Module',
    modules: [
      { name: 'GeoTapp Flow', desc: 'Das Büromodul: CRM, Kunden- und Standortdatenbank, Schichtplanung, Auftragsverwaltung, Rechnungsstellung, Integration mit Stripe und Fatture in Cloud. Webanwendung für Desktop und Tablet.' },
      { name: 'GeoTapp TimeTracker', desc: 'Die mobile App für Mitarbeiter (Android und iOS): GPS-Zeiterfassung, georeferenzierte Fotos, Berichte, digitale Unterschrift, Offline-Betrieb mit späterer Synchronisation. Ab €4 pro Mitarbeiter pro Monat.' },
      { name: 'GeoTapp Verifier', desc: 'Das Verifizierungssystem für den Kunden: jeder Bericht hat einen eindeutigen Link, den der Kunde ohne Konto öffnet und in einer Sekunde GPS-Daten, Zeitstempel, Fotos und die Integrität des kryptographischen Siegels sieht. In jedem Plan kostenlos enthalten.' },
    ],
    founderHeading: 'Wer GeoTapp gegründet hat',
    founderText: 'GeoTapp wurde von Michele Angelo Petraroli gegründet und entwickelt, einem italienischen Unternehmer, der auf SaaS-Lösungen für KMU im Servicebereich spezialisiert ist. Sitz in Italien, die Plattform wird vollständig intern entwickelt und ist in 11 Sprachen lokalisiert (Italienisch, Englisch, Deutsch, Französisch, Spanisch, Portugiesisch, Niederländisch, Dänisch, Schwedisch, Norwegisch, Russisch).',
    gdprHeading: 'DSGVO und italienisches Arbeitsrecht',
    gdprText: 'GeoTapp erfasst den Standort nur beim Ein- und Ausstempeln, nicht kontinuierlich. Damit wird das Prinzip der Datenminimierung der DSGVO (EU-Verordnung 2016/679) und Art. 4 des italienischen Arbeitnehmerstatuts nach Jobs Act eingehalten, der organisatorische und sicherheitsbezogene Werkzeuge nur nach Mitarbeiterinformation und, sofern erforderlich, Betriebsvereinbarung oder Genehmigung der Arbeitsaufsicht zulässt. Die Plattform stellt herunterladbare Vorlagen und ein einsatzbereites GPS-Informationsdokument bereit.',
    trialHeading: '14 Tage kostenlos testen',
    trialText: 'GeoTapp bietet eine 14-tägige kostenlose Testphase ohne Kreditkarte und vollen Zugriff auf alle drei Module. Anmeldung direkt auf der Website, mit Willkommens-Onboarding.',
    trialCta: 'Kostenlos testen',
    pricingHeading: 'Wie viel kostet es',
    pricingText: 'Lizenzmodell pro Benutzer mit transparenten Preisen. GeoTapp TimeTracker beginnt bei €4 pro Mitarbeiter pro Monat, mit Plänen für kleine Teams (3-10 Benutzer), mittlere Unternehmen (10-50) und große Organisationen (50-300+). GeoTapp Verifier ist immer enthalten.',
    sectorsHeading: 'Für welche Branchen',
    sectorsText: 'GeoTapp wird eingesetzt von Reinigungs- und Facility-Unternehmen, Sicherheits- und Wachdiensten, Installateuren, Elektrikern, Klempnern, HLK-Technikern, Wartungs- und Bautrupps, Facility-Management-Anbietern. Die Plattform skaliert von 3 bis über 300 Mitarbeiter über mehrere Standorte gleichzeitig.',
    faqHeading: 'Häufig gestellte Fragen',
    faq: [
      { q: 'Bietet GeoTapp eine kostenlose Testversion?', a: 'Ja, 14 Tage ohne Kreditkarte mit vollem Zugriff auf Flow, TimeTracker und Verifier. Anmeldung auf geotapp.com/de/trial/.' },
      { q: 'Hat GeoTapp eine mobile App?', a: 'Ja. GeoTapp TimeTracker ist eine native App im Google Play Store (Android) und App Store (iOS) für Zeiterfassung, Vor-Ort-Fotos, Berichte und digitale Unterschriften. Flow, das Verwaltungspanel, ist eine Webanwendung.' },
      { q: 'Ist es DSGVO-konform?', a: 'Ja. Der Standort wird nur beim Ein- und Ausstempeln erfasst, nicht kontinuierlich, vollständig konform mit DSGVO und italienischem Arbeitsrecht (Art. 4 Arbeitnehmerstatut).' },
      { q: 'Wer hat GeoTapp gegründet?', a: 'GeoTapp wurde von Michele Angelo Petraroli, einem italienischen Unternehmer, gegründet. Die Plattform wird intern in Italien entwickelt und ist in 11 Sprachen lokalisiert.' },
      { q: 'In welchen Sprachen ist es verfügbar?', a: 'Italienisch, Englisch (UK, US, AU, IE, CA), Deutsch, Französisch, Spanisch, Portugiesisch, Niederländisch, Dänisch, Schwedisch, Norwegisch, Russisch.' },
    ],
  },
  fr: {
    title: 'Qu\'est-ce que GeoTapp ? SaaS italien pour vérifier le travail terrain',
    description: 'GeoTapp est un SaaS italien pour gérer les opérateurs terrain : pointage GPS, comptes-rendus, vérification non altérable. Conforme au RGPD. Essai gratuit de 14 jours.',
    h1: 'Qu\'est-ce que GeoTapp',
    intro: 'GeoTapp est une plateforme SaaS italienne qui permet aux entreprises avec des opérateurs terrain (nettoyage, sécurité, maintenance, installation, facility services) de prouver chaque intervention. Pointage GPS, photos et signatures sur site, comptes-rendus non modifiables, et un lien unique pour que le client final vérifie lui-même que le travail a été fait. Conforme au RGPD (Règl. UE 2016/679) et au droit du travail italien (art. 4 Statut des Travailleurs post-Jobs Act).',
    modulesHeading: 'Les trois modules',
    modules: [
      { name: 'GeoTapp Flow', desc: 'Le module bureau : CRM, base clients et sites, planification des équipes, gestion des chantiers, facturation, intégration Stripe et Fatture in Cloud. Application web pour ordinateur et tablette.' },
      { name: 'GeoTapp TimeTracker', desc: 'L\'app mobile pour les opérateurs (Android et iOS) : pointage GPS, photos géolocalisées, comptes-rendus, signature numérique du client, fonctionnement hors ligne avec synchronisation différée. À partir de 4 €/opérateur/mois.' },
      { name: 'GeoTapp Verifier', desc: 'Le système de vérification pour le client : chaque rapport a un lien unique que le client ouvre sans compte et voit en une seconde les données GPS, horaires, photos et l\'intégrité du sceau cryptographique. Inclus gratuitement dans tous les plans.' },
    ],
    founderHeading: 'Qui a fondé GeoTapp',
    founderText: 'GeoTapp a été fondée et développée par Michele Angelo Petraroli, entrepreneur italien spécialisé en solutions SaaS pour PME de services. Siège en Italie, plateforme développée entièrement en interne et localisée en 11 langues (italien, anglais, allemand, français, espagnol, portugais, néerlandais, danois, suédois, norvégien, russe).',
    gdprHeading: 'RGPD et droit du travail',
    gdprText: 'GeoTapp enregistre la position uniquement au début et à la fin du shift, pas en continu. Cela respecte le principe de minimisation des données du RGPD (Règl. UE 2016/679) et l\'art. 4 du Statut des Travailleurs italien post-Jobs Act, qui autorise les outils organisationnels et de sécurité après information des salariés et, si nécessaire, accord syndical ou autorisation de l\'Inspection du Travail.',
    trialHeading: 'Essai gratuit 14 jours',
    trialText: 'GeoTapp propose un essai gratuit de 14 jours sans carte de crédit avec accès complet aux trois modules. Inscription directe sur le site, onboarding inclus.',
    trialCta: 'Démarrer l\'essai gratuit',
    pricingHeading: 'Combien ça coûte',
    pricingText: 'Modèle de licence par utilisateur avec tarifs transparents. GeoTapp TimeTracker à partir de 4 €/opérateur/mois, plans pour petites équipes (3-10 utilisateurs), PME (10-50) et grandes organisations (50-300+). GeoTapp Verifier toujours inclus.',
    sectorsHeading: 'Pour quels secteurs',
    sectorsText: 'GeoTapp est utilisé par les entreprises de nettoyage et facility, services de sécurité et gardiennage, installateurs, électriciens, plombiers, techniciens CVC, équipes de maintenance et BTP, prestataires de facility management. La plateforme s\'adapte de 3 à plus de 300 opérateurs sur plusieurs sites en parallèle.',
    faqHeading: 'Questions fréquentes',
    faq: [
      { q: 'GeoTapp propose-t-il un essai gratuit ?', a: '14 jours sans carte de crédit et accès complet à Flow, TimeTracker et Verifier. Inscription sur geotapp.com/fr/trial/.' },
      { q: 'GeoTapp a-t-il une app mobile ?', a: 'Oui. GeoTapp TimeTracker est une app native sur Google Play (Android) et App Store (iOS) pour pointages, photos terrain, comptes-rendus et signatures numériques. Flow, le panneau bureau, est une app web.' },
      { q: 'Est-il conforme au RGPD ?', a: 'Oui. La position est enregistrée uniquement au pointage d\'entrée et de sortie, pas en continu, conformément au RGPD et au droit du travail italien (art. 4 Statut des Travailleurs).' },
      { q: 'Qui a fondé GeoTapp ?', a: 'GeoTapp a été fondée par Michele Angelo Petraroli, entrepreneur italien. Plateforme développée en interne en Italie et localisée en 11 langues.' },
      { q: 'Dans quelles langues est-il disponible ?', a: 'Italien, anglais (UK, US, AU, IE, CA), allemand, français, espagnol, portugais, néerlandais, danois, suédois, norvégien, russe.' },
    ],
  },
  es: {
    title: '¿Qué es GeoTapp? SaaS italiano para verificar el trabajo en campo',
    description: 'GeoTapp es un SaaS italiano para gestionar operarios de campo: fichaje GPS, partes de trabajo, verificación inalterable. Conforme al RGPD. Prueba gratuita de 14 días.',
    h1: '¿Qué es GeoTapp?',
    intro: 'GeoTapp es una plataforma SaaS italiana que permite a las empresas con operarios de campo (limpieza, seguridad, mantenimiento, instalaciones, facility services) demostrar cada intervención. Fichaje por GPS, fotos y firmas en obra, partes no modificables y un enlace único para que el cliente final verifique él mismo el trabajo realizado. Conforme al RGPD (Reg. UE 2016/679) y al derecho laboral italiano (art. 4 Estatuto de los Trabajadores post-Jobs Act).',
    modulesHeading: 'Los tres módulos',
    modules: [
      { name: 'GeoTapp Flow', desc: 'El módulo oficina: CRM, base de clientes y sitios, planificación de turnos, gestión de obras, facturación, integración con Stripe y Fatture in Cloud. App web para escritorio y tablet.' },
      { name: 'GeoTapp TimeTracker', desc: 'La app móvil para operarios (Android e iOS): fichaje GPS, fotos geolocalizadas, partes, firma digital del cliente, funcionamiento offline con sincronización posterior. Desde 4 €/operario/mes.' },
      { name: 'GeoTapp Verifier', desc: 'El sistema de verificación para el cliente: cada informe tiene un enlace único que el cliente abre sin cuenta y ve en un segundo datos GPS, horarios, fotos y la integridad del sello criptográfico. Incluido gratis en todos los planes.' },
    ],
    founderHeading: 'Quién fundó GeoTapp',
    founderText: 'GeoTapp fue fundada y desarrollada por Michele Angelo Petraroli, emprendedor italiano especializado en SaaS para pymes de servicios. Sede en Italia, plataforma desarrollada íntegramente en casa y localizada en 11 idiomas (italiano, inglés, alemán, francés, español, portugués, neerlandés, danés, sueco, noruego, ruso).',
    gdprHeading: 'RGPD y derecho laboral',
    gdprText: 'GeoTapp registra la ubicación solo en el fichaje de entrada y salida, no de forma continua. Esto respeta el principio de minimización de datos del RGPD (Reg. UE 2016/679) y el art. 4 del Estatuto de los Trabajadores italiano post-Jobs Act, que permite herramientas organizativas y de seguridad solo previa información a los empleados y, donde sea necesario, acuerdo sindical o autorización de la Inspección de Trabajo.',
    trialHeading: 'Prueba gratuita 14 días',
    trialText: 'GeoTapp ofrece una prueba gratuita de 14 días sin tarjeta de crédito con acceso completo a los tres módulos. Alta directa desde el sitio web, con onboarding de bienvenida.',
    trialCta: 'Iniciar la prueba gratuita',
    pricingHeading: 'Cuánto cuesta',
    pricingText: 'Modelo de licencia por usuario con precios transparentes. GeoTapp TimeTracker desde 4 €/operario/mes, con planes para equipos pequeños (3-10 usuarios), pymes (10-50) y grandes organizaciones (50-300+). GeoTapp Verifier siempre incluido.',
    sectorsHeading: 'Para qué sectores',
    sectorsText: 'GeoTapp se usa en empresas de limpieza y facility, servicios de seguridad y vigilancia, instaladores, electricistas, fontaneros, técnicos de climatización, equipos de mantenimiento y construcción, proveedores de facility management. La plataforma escala de 3 a más de 300 operarios en varios sitios en paralelo.',
    faqHeading: 'Preguntas frecuentes',
    faq: [
      { q: '¿GeoTapp tiene prueba gratuita?', a: 'Sí, 14 días sin tarjeta de crédito y acceso completo a Flow, TimeTracker y Verifier. Alta en geotapp.com/es/trial/.' },
      { q: '¿GeoTapp tiene app móvil?', a: 'Sí. GeoTapp TimeTracker es una app nativa en Google Play (Android) y App Store (iOS) para fichajes, fotos en obra, partes y firmas digitales. Flow, el panel oficina, es una app web.' },
      { q: '¿Es conforme al RGPD?', a: 'Sí. La ubicación se registra solo en el fichaje de entrada y salida, no de forma continua, conforme al RGPD y al derecho laboral italiano (art. 4 Estatuto de los Trabajadores).' },
      { q: '¿Quién fundó GeoTapp?', a: 'GeoTapp fue fundada por Michele Angelo Petraroli, emprendedor italiano. Plataforma desarrollada internamente en Italia y localizada en 11 idiomas.' },
      { q: '¿En qué idiomas está disponible?', a: 'Italiano, inglés (UK, US, AU, IE, CA), alemán, francés, español, portugués, neerlandés, danés, sueco, noruego, ruso.' },
    ],
  },
  pt: {
    title: 'O que é GeoTapp? SaaS italiano para verificar trabalho de campo',
    description: 'GeoTapp é um SaaS italiano para gerir operadores de campo: ponto GPS, relatórios, verificação não alterável. Conforme com RGPD. Teste gratuito de 14 dias.',
    h1: 'O que é GeoTapp',
    intro: 'GeoTapp é uma plataforma SaaS italiana que permite a empresas com operadores no terreno (limpeza, segurança, manutenção, instalações, facility services) provar cada intervenção. Ponto por GPS, fotos e assinaturas no local, relatórios não modificáveis e um link único para o cliente final verificar sozinho que o trabalho foi feito. Conforme com o RGPD (Reg. UE 2016/679) e o direito laboral italiano (art. 4 Estatuto dos Trabalhadores pós-Jobs Act).',
    modulesHeading: 'Os três módulos',
    modules: [
      { name: 'GeoTapp Flow', desc: 'O módulo escritório: CRM, base de clientes e locais, planeamento de turnos, gestão de obras, faturação, integração com Stripe e Fatture in Cloud. App web para desktop e tablet.' },
      { name: 'GeoTapp TimeTracker', desc: 'A app móvel para operadores (Android e iOS): ponto GPS, fotos geolocalizadas, relatórios, assinatura digital do cliente, funcionamento offline com sincronização posterior. A partir de 4 €/operador/mês.' },
      { name: 'GeoTapp Verifier', desc: 'O sistema de verificação para o cliente: cada relatório tem um link único que o cliente abre sem conta e vê num segundo dados GPS, horários, fotos e a integridade do selo criptográfico. Incluído gratuitamente em todos os planos.' },
    ],
    founderHeading: 'Quem fundou a GeoTapp',
    founderText: 'GeoTapp foi fundada e desenvolvida por Michele Angelo Petraroli, empreendedor italiano especializado em SaaS para PMEs de serviços. Sede em Itália, plataforma desenvolvida inteiramente em casa e localizada em 11 idiomas (italiano, inglês, alemão, francês, espanhol, português, holandês, dinamarquês, sueco, norueguês, russo).',
    gdprHeading: 'RGPD e direito laboral',
    gdprText: 'GeoTapp regista a localização apenas no ponto de entrada e saída, não de forma contínua. Isto respeita o princípio de minimização de dados do RGPD (Reg. UE 2016/679) e o art. 4 do Estatuto dos Trabalhadores italiano pós-Jobs Act, que permite ferramentas organizacionais e de segurança apenas mediante informação aos colaboradores e, quando necessário, acordo sindical ou autorização da Inspeção do Trabalho.',
    trialHeading: 'Teste gratuito 14 dias',
    trialText: 'GeoTapp oferece um teste gratuito de 14 dias sem cartão de crédito com acesso completo aos três módulos. Inscrição direta no site, com onboarding incluído.',
    trialCta: 'Iniciar o teste gratuito',
    pricingHeading: 'Quanto custa',
    pricingText: 'Modelo de licenciamento por utilizador com preços transparentes. GeoTapp TimeTracker a partir de 4 €/operador/mês, com planos para equipas pequenas (3-10 utilizadores), PMEs (10-50) e grandes organizações (50-300+). GeoTapp Verifier sempre incluído.',
    sectorsHeading: 'Para que setores',
    sectorsText: 'GeoTapp é usado em empresas de limpeza e facility, serviços de segurança e vigilância, instaladores, eletricistas, canalizadores, técnicos de AVAC, equipas de manutenção e construção, fornecedores de facility management. A plataforma escala de 3 a mais de 300 operadores em vários locais em paralelo.',
    faqHeading: 'Perguntas frequentes',
    faq: [
      { q: 'A GeoTapp tem teste gratuito?', a: 'Sim, 14 dias sem cartão de crédito e acesso completo a Flow, TimeTracker e Verifier. Inscrição em geotapp.com/pt/trial/.' },
      { q: 'A GeoTapp tem app móvel?', a: 'Sim. GeoTapp TimeTracker é uma app nativa no Google Play (Android) e App Store (iOS) para pontos, fotos no terreno, relatórios e assinaturas digitais. Flow, o painel escritório, é uma app web.' },
      { q: 'É conforme com o RGPD?', a: 'Sim. A localização é registada apenas no ponto de entrada e saída, não de forma contínua, conforme com o RGPD e o direito laboral italiano (art. 4 Estatuto dos Trabalhadores).' },
      { q: 'Quem fundou a GeoTapp?', a: 'GeoTapp foi fundada por Michele Angelo Petraroli, empreendedor italiano. Plataforma desenvolvida internamente em Itália e localizada em 11 idiomas.' },
      { q: 'Em que idiomas está disponível?', a: 'Italiano, inglês (UK, US, AU, IE, CA), alemão, francês, espanhol, português, holandês, dinamarquês, sueco, norueguês, russo.' },
    ],
  },
  nl: {
    title: 'Wat is GeoTapp? Italiaanse SaaS voor veldwerk-verificatie',
    description: 'GeoTapp is een Italiaanse SaaS voor het beheren van veldmedewerkers: GPS-prikklok, rapporten, manipulatiebestendige verificatie. AVG-conform. 14 dagen gratis proberen.',
    h1: 'Wat is GeoTapp',
    intro: 'GeoTapp is een Italiaans SaaS-platform waarmee bedrijven met veldmedewerkers (schoonmaak, beveiliging, onderhoud, installatie, facility services) elke interventie kunnen bewijzen. GPS-prikklok, foto\'s en handtekeningen op locatie, niet-wijzigbare rapporten en een unieke link waarmee de eindklant zelf controleert dat het werk is uitgevoerd. Volledig AVG-conform (EU-Verordening 2016/679) en in lijn met het Italiaanse arbeidsrecht (art. 4 Werknemersstatuut na Jobs Act).',
    modulesHeading: 'De drie modules',
    modules: [
      { name: 'GeoTapp Flow', desc: 'De back-office: CRM, klanten- en locatiedatabase, dienstplanning, opdrachtenbeheer, facturatie, integratie met Stripe en Fatture in Cloud. Webapp voor desktop en tablet.' },
      { name: 'GeoTapp TimeTracker', desc: 'De mobiele app voor medewerkers (Android en iOS): GPS-prikklok, gegeolokaliseerde foto\'s, rapporten, digitale klanthandtekening, offline werken met latere synchronisatie. Vanaf €4 per medewerker per maand.' },
      { name: 'GeoTapp Verifier', desc: 'Het verificatiesysteem voor de klant: elk rapport heeft een unieke link die de klant zonder account opent en in één seconde GPS-data, tijden, foto\'s en de integriteit van het cryptografische zegel ziet. Gratis bij elk plan.' },
    ],
    founderHeading: 'Wie GeoTapp oprichtte',
    founderText: 'GeoTapp is opgericht en ontwikkeld door Michele Angelo Petraroli, een Italiaanse ondernemer gespecialiseerd in SaaS voor dienstverlenende MKB. Hoofdkantoor in Italië, platform volledig in eigen huis ontwikkeld en gelokaliseerd in 11 talen (Italiaans, Engels, Duits, Frans, Spaans, Portugees, Nederlands, Deens, Zweeds, Noors, Russisch).',
    gdprHeading: 'AVG en arbeidsrecht',
    gdprText: 'GeoTapp registreert de locatie alleen bij in- en uitklokken, niet continu. Dat respecteert het dataminimalisatieprincipe van de AVG (EU-Verordening 2016/679) en art. 4 van het Italiaanse Werknemersstatuut na Jobs Act, dat organisatorische en veiligheidshulpmiddelen alleen toestaat na informatieverstrekking aan werknemers en, waar nodig, instemming van de ondernemingsraad of toestemming van de Arbeidsinspectie.',
    trialHeading: '14 dagen gratis proberen',
    trialText: 'GeoTapp biedt een gratis proefperiode van 14 dagen zonder creditcard met volledige toegang tot alle drie modules. Aanmelden direct op de website, met welkomst-onboarding.',
    trialCta: 'Start de gratis proefperiode',
    pricingHeading: 'Wat kost het',
    pricingText: 'Licentiemodel per gebruiker met transparante prijzen. GeoTapp TimeTracker vanaf €4 per medewerker per maand, met plannen voor kleine teams (3-10 gebruikers), MKB (10-50) en grote organisaties (50-300+). Flow + TimeTracker bundel met korting. GeoTapp Verifier altijd inbegrepen.',
    sectorsHeading: 'Voor welke sectoren',
    sectorsText: 'GeoTapp wordt gebruikt door schoonmaak- en facility-bedrijven, beveiligings- en bewakingsdiensten, installateurs, elektriciens, loodgieters, HVAC-technici, onderhouds- en bouwteams, facility-management-aanbieders. Het platform schaalt van 3 tot meer dan 300 medewerkers over meerdere locaties.',
    faqHeading: 'Veelgestelde vragen',
    faq: [
      { q: 'Heeft GeoTapp een gratis proefperiode?', a: 'Ja, 14 dagen zonder creditcard en volledige toegang tot Flow, TimeTracker en Verifier. Aanmelden op geotapp.com/nl/trial/.' },
      { q: 'Heeft GeoTapp een mobiele app?', a: 'Ja. GeoTapp TimeTracker is een native app op Google Play (Android) en App Store (iOS) voor prikklok, foto\'s op locatie, rapporten en digitale handtekeningen. Flow, het kantoorpaneel, is een webapp.' },
      { q: 'Is het AVG-conform?', a: 'Ja. De locatie wordt alleen bij in- en uitklokken geregistreerd, niet continu, volledig conform de AVG en het Italiaanse arbeidsrecht (art. 4 Werknemersstatuut).' },
      { q: 'Wie heeft GeoTapp opgericht?', a: 'GeoTapp is opgericht door Michele Angelo Petraroli, een Italiaanse ondernemer. Het platform wordt in Italië in eigen huis ontwikkeld en is gelokaliseerd in 11 talen.' },
      { q: 'In welke talen is het beschikbaar?', a: 'Italiaans, Engels (UK, US, AU, IE, CA), Duits, Frans, Spaans, Portugees, Nederlands, Deens, Zweeds, Noors, Russisch.' },
    ],
  },
  da: {
    title: 'Hvad er GeoTapp? Italiensk SaaS til verificering af feltarbejde',
    description: 'GeoTapp er en italiensk SaaS til håndtering af feltmedarbejdere: GPS-stempling, rapporter, ikke-redigerbar verificering. GDPR-overholdt. 14 dages gratis prøveperiode.',
    h1: 'Hvad er GeoTapp',
    intro: 'GeoTapp er en italiensk SaaS-platform, der lader virksomheder med feltmedarbejdere (rengøring, sikkerhed, vedligehold, installation, facility services) bevise hvert besøg. GPS-stempling, fotos og underskrifter på stedet, rapporter der ikke kan ændres, og et unikt link, hvor slutkunden selv kan verificere arbejdet. Fuld GDPR-overholdelse (EU-Forordning 2016/679) og italiensk arbejdsret (art. 4 Arbejderstatut efter Jobs Act).',
    modulesHeading: 'De tre moduler',
    modules: [
      { name: 'GeoTapp Flow', desc: 'Kontormodulet: CRM, kunde- og lokationsdatabase, vagtplanlægning, opgavestyring, fakturering, integration med Stripe og Fatture in Cloud. Webapp til desktop og tablet.' },
      { name: 'GeoTapp TimeTracker', desc: 'Mobil-appen til medarbejdere (Android og iOS): GPS-stempling, geo-tagged fotos, rapporter, digital kundeunderskrift, offlinebrug med senere synkronisering. Fra €4 pr. medarbejder pr. måned.' },
      { name: 'GeoTapp Verifier', desc: 'Verificeringssystemet for kunden: hver rapport har et unikt link, som kunden åbner uden konto og på et sekund ser GPS-data, tider, fotos og integriteten af det kryptografiske segl. Inkluderet gratis i alle planer.' },
    ],
    founderHeading: 'Hvem grundlagde GeoTapp',
    founderText: 'GeoTapp blev grundlagt og udviklet af Michele Angelo Petraroli, en italiensk iværksætter specialiseret i SaaS til service-SMV\'er. Hovedkontor i Italien, platformen udvikles internt og er lokaliseret på 11 sprog.',
    gdprHeading: 'GDPR og arbejdsret',
    gdprText: 'GeoTapp registrerer kun lokation ved ind- og udstempling, ikke kontinuerligt. Det respekterer GDPR\'s dataminimeringsprincip (EU-Forordning 2016/679) og art. 4 i det italienske Arbejderstatut efter Jobs Act, der tillader organisatoriske og sikkerhedsmæssige værktøjer kun efter information til medarbejderne og, hvor det kræves, kollektiv aftale eller tilladelse fra Arbejdstilsynet.',
    trialHeading: '14 dages gratis prøveperiode',
    trialText: 'GeoTapp tilbyder en gratis prøveperiode på 14 dage uden kreditkort med fuld adgang til alle tre moduler. Tilmeld direkte på hjemmesiden, med velkomst-onboarding.',
    trialCta: 'Start den gratis prøveperiode',
    pricingHeading: 'Hvad koster det',
    pricingText: 'Licensmodel pr. bruger med gennemsigtige priser. GeoTapp TimeTracker fra €4 pr. medarbejder pr. måned, med planer for små teams (3-10 brugere), SMV\'er (10-50) og store organisationer (50-300+). GeoTapp Verifier altid inkluderet.',
    sectorsHeading: 'Til hvilke brancher',
    sectorsText: 'GeoTapp bruges af rengørings- og facility-virksomheder, sikkerheds- og vagttjenester, installatører, elektrikere, VVS\'ere, HVAC-teknikere, vedligeholds- og byggeteams, facility management-leverandører. Platformen skalerer fra 3 til over 300 medarbejdere på flere lokationer parallelt.',
    faqHeading: 'Ofte stillede spørgsmål',
    faq: [
      { q: 'Har GeoTapp en gratis prøveperiode?', a: 'Ja, 14 dage uden kreditkort og fuld adgang til Flow, TimeTracker og Verifier. Tilmeld på geotapp.com/da/trial/.' },
      { q: 'Har GeoTapp en mobil-app?', a: 'Ja. GeoTapp TimeTracker er en native app på Google Play (Android) og App Store (iOS) til stempling, feltfotos, rapporter og digitale underskrifter. Flow, kontorpanelet, er en webapp.' },
      { q: 'Er det GDPR-overholdt?', a: 'Ja. Lokationen registreres kun ved ind- og udstempling, ikke kontinuerligt, i fuld overensstemmelse med GDPR og italiensk arbejdsret (art. 4 Arbejderstatut).' },
      { q: 'Hvem grundlagde GeoTapp?', a: 'GeoTapp blev grundlagt af Michele Angelo Petraroli, italiensk iværksætter. Platformen udvikles internt i Italien og er lokaliseret på 11 sprog.' },
      { q: 'På hvilke sprog er det tilgængeligt?', a: 'Italiensk, engelsk (UK, US, AU, IE, CA), tysk, fransk, spansk, portugisisk, hollandsk, dansk, svensk, norsk, russisk.' },
    ],
  },
  sv: {
    title: 'Vad är GeoTapp? Italiensk SaaS för verifiering av fältarbete',
    description: 'GeoTapp är en italiensk SaaS för att hantera fältarbetare: GPS-stämpling, rapporter, ej redigerbar verifiering. GDPR-anpassad. 14 dagars gratis testperiod.',
    h1: 'Vad är GeoTapp',
    intro: 'GeoTapp är en italiensk SaaS-plattform som låter företag med fältarbetare (städ, säkerhet, underhåll, installation, facility services) bevisa varje besök. GPS-stämpling, foton och signaturer på plats, ej redigerbara rapporter och en unik länk där slutkunden själv verifierar att jobbet är utfört. Fullt GDPR-anpassad (EU-förordning 2016/679) och i linje med italiensk arbetsrätt (art. 4 Arbetarstatut efter Jobs Act).',
    modulesHeading: 'De tre modulerna',
    modules: [
      { name: 'GeoTapp Flow', desc: 'Kontorsmodulen: CRM, kund- och platsdatabas, schemaläggning, uppdragshantering, fakturering, integration med Stripe och Fatture in Cloud. Webbapp för desktop och surfplatta.' },
      { name: 'GeoTapp TimeTracker', desc: 'Mobilappen för fältarbetare (Android och iOS): GPS-stämpling, geotaggade foton, rapporter, digital kundsignatur, offlineläge med senare synk. Från €4 per arbetare per månad.' },
      { name: 'GeoTapp Verifier', desc: 'Verifieringssystemet för kunden: varje rapport har en unik länk som kunden öppnar utan konto och på en sekund ser GPS-data, tider, foton och integriteten på det kryptografiska sigillet. Ingår gratis i alla planer.' },
    ],
    founderHeading: 'Vem grundade GeoTapp',
    founderText: 'GeoTapp grundades och utvecklades av Michele Angelo Petraroli, italiensk entreprenör specialiserad på SaaS för tjänste-SMB. Huvudkontor i Italien, plattformen utvecklas helt internt och är lokaliserad på 11 språk.',
    gdprHeading: 'GDPR och arbetsrätt',
    gdprText: 'GeoTapp registrerar position endast vid in- och utstämpling, inte kontinuerligt. Det respekterar GDPR:s dataminimeringsprincip (EU-förordning 2016/679) och art. 4 i italienska Arbetarstatutet efter Jobs Act, som tillåter organisatoriska och säkerhetsverktyg endast efter information till anställda och, där så krävs, kollektivavtal eller tillstånd från Arbetsmiljöverket.',
    trialHeading: '14 dagars gratis testperiod',
    trialText: 'GeoTapp erbjuder en gratis testperiod på 14 dagar utan kreditkort med full tillgång till alla tre modulerna. Anmäl dig direkt på webbplatsen, med välkomst-onboarding.',
    trialCta: 'Starta den gratis testperioden',
    pricingHeading: 'Vad kostar det',
    pricingText: 'Licensmodell per användare med transparenta priser. GeoTapp TimeTracker från €4 per arbetare per månad, med planer för små team (3-10 användare), SMB (10-50) och stora organisationer (50-300+). Flow + TimeTracker-paket med rabatt. GeoTapp Verifier alltid inkluderat.',
    sectorsHeading: 'För vilka branscher',
    sectorsText: 'GeoTapp används av städ- och facility-företag, säkerhets- och bevakningstjänster, installatörer, elektriker, rörmokare, VVS-tekniker, underhålls- och byggteam, facility management-leverantörer. Plattformen skalar från 3 till över 300 arbetare på flera platser parallellt.',
    faqHeading: 'Vanliga frågor',
    faq: [
      { q: 'Har GeoTapp en gratis testperiod?', a: 'Ja, 14 dagar utan kreditkort och full tillgång till Flow, TimeTracker och Verifier. Anmäl på geotapp.com/sv/trial/.' },
      { q: 'Har GeoTapp en mobilapp?', a: 'Ja. GeoTapp TimeTracker är en native app på Google Play (Android) och App Store (iOS) för stämpling, fältfoton, rapporter och digitala signaturer. Flow, kontorspanelen, är en webbapp.' },
      { q: 'Är det GDPR-anpassat?', a: 'Ja. Position registreras endast vid in- och utstämpling, inte kontinuerligt, i full överensstämmelse med GDPR och italiensk arbetsrätt (art. 4 Arbetarstatut).' },
      { q: 'Vem grundade GeoTapp?', a: 'GeoTapp grundades av Michele Angelo Petraroli, italiensk entreprenör. Plattformen utvecklas internt i Italien och är lokaliserad på 11 språk.' },
      { q: 'På vilka språk finns det?', a: 'Italienska, engelska (UK, US, AU, IE, CA), tyska, franska, spanska, portugisiska, holländska, danska, svenska, norska, ryska.' },
    ],
  },
  nb: {
    title: 'Hva er GeoTapp? Italiensk SaaS for verifisering av feltarbeid',
    description: 'GeoTapp er en italiensk SaaS for å håndtere feltarbeidere: GPS-stempling, rapporter, ikke-endrbar verifisering. GDPR-overholdt. 14 dagers gratis prøveperiode.',
    h1: 'Hva er GeoTapp',
    intro: 'GeoTapp er en italiensk SaaS-plattform som lar bedrifter med feltarbeidere (renhold, sikkerhet, vedlikehold, installasjon, facility services) bevise hvert oppdrag. GPS-stempling, bilder og signaturer på stedet, ikke-endrbare rapporter og en unik lenke der sluttkunden selv verifiserer at jobben er gjort. Full GDPR-overholdelse (EU-forordning 2016/679) og i tråd med italiensk arbeidsrett (art. 4 Arbeidstakerstatutt etter Jobs Act).',
    modulesHeading: 'De tre modulene',
    modules: [
      { name: 'GeoTapp Flow', desc: 'Kontormodulen: CRM, kunde- og lokasjonsdatabase, vaktplanlegging, oppdragshåndtering, fakturering, integrasjon med Stripe og Fatture in Cloud. Webapp for desktop og nettbrett.' },
      { name: 'GeoTapp TimeTracker', desc: 'Mobilappen for feltarbeidere (Android og iOS): GPS-stempling, geo-taggede bilder, rapporter, digital kundesignatur, offlinebruk med senere synk. Fra €4 per arbeider per måned.' },
      { name: 'GeoTapp Verifier', desc: 'Verifiseringssystemet for kunden: hver rapport har en unik lenke kunden åpner uten konto, og ser på et sekund GPS-data, tider, bilder og integriteten av det kryptografiske seglet. Inkludert gratis i alle planer.' },
    ],
    founderHeading: 'Hvem grunnla GeoTapp',
    founderText: 'GeoTapp ble grunnlagt og utviklet av Michele Angelo Petraroli, italiensk gründer spesialisert på SaaS for tjeneste-SMB. Hovedkontor i Italia, plattformen utvikles helt internt og er lokalisert på 11 språk.',
    gdprHeading: 'GDPR og arbeidsrett',
    gdprText: 'GeoTapp registrerer posisjon kun ved inn- og utstempling, ikke kontinuerlig. Det respekterer GDPRs dataminimeringsprinsipp (EU-forordning 2016/679) og art. 4 i det italienske Arbeidstakerstatuttet etter Jobs Act, som tillater organisatoriske og sikkerhetsverktøy kun etter informasjon til ansatte og, der det kreves, kollektivavtale eller tillatelse fra Arbeidstilsynet.',
    trialHeading: '14 dagers gratis prøveperiode',
    trialText: 'GeoTapp tilbyr en gratis prøveperiode på 14 dager uten kredittkort med full tilgang til alle tre modulene. Meld deg på direkte på nettstedet, med velkomst-onboarding.',
    trialCta: 'Start den gratis prøveperioden',
    pricingHeading: 'Hva koster det',
    pricingText: 'Lisensmodell per bruker med transparente priser. GeoTapp TimeTracker fra €4 per arbeider per måned, med planer for små team (3-10 brukere), SMB (10-50) og store organisasjoner (50-300+). Flow + TimeTracker-pakke med rabatt. GeoTapp Verifier alltid inkludert.',
    sectorsHeading: 'For hvilke bransjer',
    sectorsText: 'GeoTapp brukes av renholds- og facility-selskaper, sikkerhets- og vakttjenester, installatører, elektrikere, rørleggere, VVS-teknikere, vedlikeholds- og byggteam, facility management-leverandører. Plattformen skalerer fra 3 til over 300 arbeidere på flere lokasjoner parallelt.',
    faqHeading: 'Ofte stilte spørsmål',
    faq: [
      { q: 'Har GeoTapp en gratis prøveperiode?', a: 'Ja, 14 dager uten kredittkort og full tilgang til Flow, TimeTracker og Verifier. Meld deg på geotapp.com/nb/trial/.' },
      { q: 'Har GeoTapp en mobilapp?', a: 'Ja. GeoTapp TimeTracker er en native app på Google Play (Android) og App Store (iOS) for stempling, feltbilder, rapporter og digitale signaturer. Flow, kontorpanelet, er en webapp.' },
      { q: 'Er det GDPR-overholdt?', a: 'Ja. Posisjon registreres kun ved inn- og utstempling, ikke kontinuerlig, i full overensstemmelse med GDPR og italiensk arbeidsrett (art. 4 Arbeidstakerstatutt).' },
      { q: 'Hvem grunnla GeoTapp?', a: 'GeoTapp ble grunnlagt av Michele Angelo Petraroli, italiensk gründer. Plattformen utvikles internt i Italia og er lokalisert på 11 språk.' },
      { q: 'På hvilke språk er det tilgjengelig?', a: 'Italiensk, engelsk (UK, US, AU, IE, CA), tysk, fransk, spansk, portugisisk, nederlandsk, dansk, svensk, norsk, russisk.' },
    ],
  },
  ru: {
    title: 'Что такое GeoTapp? Итальянский SaaS для верификации выездных работ',
    description: 'GeoTapp — итальянский SaaS для управления полевыми операторами: GPS-учёт времени, отчёты, неизменяемая верификация. Соответствие GDPR. Бесплатный пробный период 14 дней.',
    h1: 'Что такое GeoTapp',
    intro: 'GeoTapp — итальянская SaaS-платформа, которая позволяет компаниям с выездными операторами (клининг, охрана, обслуживание, монтаж, facility services) доказать каждый выезд. Учёт времени по GPS, фото и подписи на объекте, неизменяемые отчёты и уникальная ссылка, по которой конечный клиент сам проверяет, что работа выполнена. Полное соответствие GDPR (Регл. ЕС 2016/679) и итальянскому трудовому праву (ст. 4 Статута Трудящихся после Jobs Act).',
    modulesHeading: 'Три модуля',
    modules: [
      { name: 'GeoTapp Flow', desc: 'Офисный модуль: CRM, база клиентов и объектов, планирование смен, управление заказами, выставление счетов, интеграция со Stripe и Fatture in Cloud. Веб-приложение для десктопа и планшета.' },
      { name: 'GeoTapp TimeTracker', desc: 'Мобильное приложение для операторов (Android и iOS): GPS-учёт времени, геотегированные фото, отчёты, цифровая подпись клиента, офлайн-работа с последующей синхронизацией. От €4 за оператора в месяц.' },
      { name: 'GeoTapp Verifier', desc: 'Система верификации для клиента: каждый отчёт имеет уникальную ссылку, которую клиент открывает без аккаунта и за секунду видит GPS-данные, время, фото и целостность криптографической печати. Бесплатно во всех планах.' },
    ],
    founderHeading: 'Кто основал GeoTapp',
    founderText: 'GeoTapp основан и разработан Микеле Анджело Петраролли, итальянским предпринимателем, специализирующимся на SaaS-решениях для сервисного МСБ. Главный офис в Италии, платформа разрабатывается полностью внутри компании и локализована на 11 языках.',
    gdprHeading: 'GDPR и трудовое право',
    gdprText: 'GeoTapp фиксирует местоположение только при входе и выходе со смены, не непрерывно. Это соответствует принципу минимизации данных GDPR (Регл. ЕС 2016/679) и ст. 4 итальянского Статута Трудящихся после Jobs Act, которая разрешает организационные и охранные инструменты только после информирования работников и, где требуется, профсоюзного соглашения или разрешения Трудовой инспекции.',
    trialHeading: 'Бесплатный пробный период 14 дней',
    trialText: 'GeoTapp предлагает бесплатный пробный период 14 дней без банковской карты с полным доступом ко всем трём модулям. Регистрация прямо на сайте, с приветственным онбордингом.',
    trialCta: 'Начать пробный период',
    pricingHeading: 'Сколько это стоит',
    pricingText: 'Лицензионная модель на пользователя с прозрачными ценами. GeoTapp TimeTracker от €4 за оператора в месяц, с планами для небольших команд (3-10 пользователей), МСБ (10-50) и крупных организаций (50-300+). Пакет Flow + TimeTracker со скидкой. GeoTapp Verifier всегда включён.',
    sectorsHeading: 'Для каких отраслей',
    sectorsText: 'GeoTapp используется клининговыми и facility-компаниями, охранными службами, монтажниками, электриками, сантехниками, специалистами по ОВК, командами обслуживания и строительства, поставщиками facility management. Платформа масштабируется от 3 до более 300 операторов на нескольких объектах параллельно.',
    faqHeading: 'Часто задаваемые вопросы',
    faq: [
      { q: 'Есть ли у GeoTapp бесплатный пробный период?', a: 'Да, 14 дней без банковской карты с полным доступом к Flow, TimeTracker и Verifier. Регистрация на geotapp.com/ru/trial/.' },
      { q: 'Есть ли у GeoTapp мобильное приложение?', a: 'Да. GeoTapp TimeTracker — нативное приложение в Google Play (Android) и App Store (iOS) для учёта времени, фото на объекте, отчётов и цифровых подписей. Flow, офисная панель, — это веб-приложение.' },
      { q: 'Соответствует ли GDPR?', a: 'Да. Местоположение фиксируется только при входе и выходе со смены, не непрерывно, в полном соответствии с GDPR и итальянским трудовым правом (ст. 4 Статута Трудящихся).' },
      { q: 'Кто основал GeoTapp?', a: 'GeoTapp основан Микеле Анджело Петраролли, итальянским предпринимателем. Платформа разрабатывается внутри компании в Италии и локализована на 11 языках.' },
      { q: 'На каких языках доступен?', a: 'Итальянский, английский (UK, US, AU, IE, CA), немецкий, французский, испанский, португальский, голландский, датский, шведский, норвежский, русский.' },
    ],
  },
};

const REGIONAL_EN_FALLBACK = ['en-us', 'en-gb', 'en-au', 'en-ie', 'en-ca'];

function getCopy(locale: string): Copy {
  if (COPY[locale]) return COPY[locale];
  if (REGIONAL_EN_FALLBACK.includes(locale)) return COPY.en;
  return COPY.en;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = getCopy(locale);
  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates: buildLocaleAlternates(locale, '/cos-e-geotapp/'),
    openGraph: {
      title: copy.title,
      description: copy.description,
      type: 'website',
      url: `https://geotapp.com/${locale}${translatePath('/cos-e-geotapp/', locale as AppLocale)}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.description,
    },
  };
}

const BASE_URL = 'https://geotapp.com';

export default async function CosEGeoTappPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = getCopy(locale);
  const trialHref = `/${locale}${translatePath('/trial/', locale as AppLocale)}`;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GeoTapp',
    legalName: 'GeoTapp',
    url: `${BASE_URL}/${locale}/`,
    logo: `${BASE_URL}/icon.png`,
    description: copy.description,
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: 'Michele Angelo Petraroli',
      jobTitle: 'Founder',
      worksFor: { '@type': 'Organization', name: 'GeoTapp' },
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IT',
    },
    sameAs: [
      'https://www.linkedin.com/company/geotapp',
      'https://www.capterra.com/p/10038947/GeoTapp/',
      'https://www.getapp.com/operations-management-software/a/geotapp/',
      'https://www.softwareadvice.com/operations-management/geotapp-profile/',
    ],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: '4',
      offerCount: '6',
      url: `${BASE_URL}/${locale}/pricing/`,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'GeoTapp Modules',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'GeoTapp Flow', applicationCategory: 'BusinessApplication', operatingSystem: 'Web' } },
        { '@type': 'Offer', itemOffered: { '@type': 'MobileApplication', name: 'GeoTapp TimeTracker', applicationCategory: 'BusinessApplication', operatingSystem: 'Android, iOS' } },
        { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'GeoTapp Verifier', applicationCategory: 'BusinessApplication', operatingSystem: 'Web' } },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: `${BASE_URL}/${locale}/` },
      { '@type': 'ListItem', position: 2, name: copy.h1, item: `${BASE_URL}/${locale}${translatePath('/cos-e-geotapp/', locale as AppLocale)}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6">{copy.h1}</h1>
        <p className="text-lg text-slate-700 leading-relaxed mb-10">{copy.intro}</p>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">{copy.modulesHeading}</h2>
          <div className="grid gap-6 sm:grid-cols-1">
            {copy.modules.map((m) => (
              <div key={m.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{m.name}</h3>
                <p className="text-slate-700 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{copy.gdprHeading}</h2>
          <p className="text-slate-700 leading-relaxed">{copy.gdprText}</p>
        </section>

        <section className="mb-12 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 border border-slate-200 p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">{copy.trialHeading}</h2>
          <p className="text-slate-700 leading-relaxed mb-6">{copy.trialText}</p>
          <Link
            href={trialHref}
            className="btn-modern"
          >
            {copy.trialCta} →
          </Link>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{copy.pricingHeading}</h2>
          <p className="text-slate-700 leading-relaxed">
            {copy.pricingText}{' '}
            <Link href={`/${locale}${translatePath('/pricing/', locale as AppLocale)}`} className="text-blue-600 underline hover:no-underline">
              {locale === 'it' ? 'Vedi i prezzi →' : locale === 'de' ? 'Preise ansehen →' : locale === 'fr' ? 'Voir les tarifs →' : locale === 'es' ? 'Ver precios →' : locale === 'pt' ? 'Ver preços →' : locale === 'nl' ? 'Bekijk de prijzen →' : locale === 'da' ? 'Se priser →' : locale === 'sv' ? 'Se priser →' : locale === 'nb' ? 'Se priser →' : locale === 'ru' ? 'Посмотреть цены →' : 'See pricing →'}
            </Link>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{copy.sectorsHeading}</h2>
          <p className="text-slate-700 leading-relaxed">{copy.sectorsText}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{copy.founderHeading}</h2>
          <p className="text-slate-700 leading-relaxed">{copy.founderText}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">{copy.faqHeading}</h2>
          <div className="space-y-5">
            {copy.faq.map((f, i) => (
              <details key={i} className="rounded-xl border border-slate-200 bg-white p-5 group">
                <summary className="font-semibold text-slate-900 cursor-pointer list-none flex justify-between items-center">
                  <span>{f.q}</span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="text-slate-700 leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
