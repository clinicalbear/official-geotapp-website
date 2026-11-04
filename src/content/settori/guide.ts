/**
 * Guide del blog per settore e lingua (04/11/2026, piano SEO punto 5).
 *
 * Ogni pagina settore mostra gli articoli che parlano di QUEL mestiere, nella sua lingua,
 * scelti fra quelli che Google premia di piu' (GSC 90 gg). Servono a due cose: dare alla
 * pagina un contenuto che le pagine dei concorrenti non hanno, e chiudere il cerchio dei
 * link interni articolo -> settore -> articolo.
 * Generato da docs/seo-guide-settori-2026-11-04/raccogli.py e ripulito a mano (via gli
 * aggiornamenti di prodotto, 'vagt'/'vakt' che in DA/NB vuol dire turno, 'vigilancia
 * laboral' che in ES e' sorveglianza). Le varianti en-* usano 'en'. RU: nessun articolo.
 */
import type { SettoreSlug } from './types';

/** `solo`: articolo legato a un Paese, si mostra solo su quelle varianti (es. Davis-Bacon solo en-us). */
export type GuidaSettore = { titolo: string; href: string; solo?: string[] };

export const GUIDE_SETTORE: Record<string, Partial<Record<SettoreSlug, GuidaSettore[]>>> = {
  "it": {
    "pulizie": [
      { titolo: "Pulizie su più cantieri: gestire squadre e commesse senza Excel", href: "/blog/2026/04/07/app-per-impresa-di-pulizie-gestione-squadre-commesse/" },
      { titolo: "Tracciamento GPS addetti pulizie: cosa puoi fare davvero senza prendere multe", href: "/blog/2026/05/18/tracciamento-gps-addetti-pulizie/" },
      { titolo: "Quando il cliente nega: come bloccare le contestazioni sulle pulizie", href: "/blog/2026/05/11/contestazione-cliente-pulizie-non-eseguite/" },
      { titolo: "Decreto 25/2026: le nuove tabelle del costo del lavoro nelle pulizie", href: "/blog/2026/06/10/decreto-25-2026-tabelle-costo-lavoro/" },
    ],
    "sicurezza": [
      { titolo: "Software per gestire turni di guardie giurate: cosa serve davvero a un istituto di vigilanza", href: "/blog/2026/05/14/software-gestione-guardie-giurate-turni/" },
      { titolo: "App presenze vigilanza GPS: come provare al cliente che la guardia era davvero al posto", href: "/blog/2026/05/15/app-presenze-vigilanza-gps/" },
      { titolo: "Sicurezza privata: le contestazioni post-turno sono in aumento", href: "/blog/2026/05/06/sicurezza-privata-contestazioni-post-turno-2025/" },
      { titolo: "Prova intervento guardia giurata: come blindare ogni uscita su allarme (e farsi pagare)", href: "/blog/2026/05/12/prova-intervento-guardia-giurata/" },
    ],
    "installatori": [
      { titolo: "Software gestione interventi tecnici: cosa serve davvero a una PMI di impiantistica", href: "/blog/2026/05/15/software-gestione-interventi-tecnici/" },
      { titolo: "App per installatori e tecnici 2026: la guida completa per scegliere", href: "/blog/2026/05/13/app-installatori-tecnici-2026-guida-completa/" },
      { titolo: "Documenta gli interventi degli installatori senza carta né discussioni", href: "/blog/2026/04/18/documenta-interventi-installatori-app/" },
      { titolo: "Rapportino installatori a prova di contestazione: foto, GPS e firma", href: "/blog/2026/04/20/come-documentare-interventi-installatori/" },
    ],
    "elettricisti": [
      { titolo: "Rapportino digitale elettricista: come trasformare la bolla d’intervento cartacea in prova compliance-ready", href: "/blog/2026/05/18/rapportino-digitale-elettricista/" },
      { titolo: "Da Excel al GPS: come un elettricista recupera €12.000/anno", href: "/blog/2026/04/09/elettricista-da-excel-a-timbrature-gps-margine/" },
      { titolo: "App per elettricisti 2026: cosa serve davvero per gestire la squadra", href: "/blog/2026/05/14/app-elettricisti-2026-gestire-squadra/" },
      { titolo: "Time tracking per elettricisti: le ore che spariscono in cantiere", href: "/blog/2026/06/12/time-tracking-elettricisti-ore-cantiere/" },
    ],
    "edilizia": [
      { titolo: "Il tempo di attesa in cantiere è orario di lavoro", href: "/blog/2026/09/08/tempo-di-attesa-orario-di-lavoro/" },
      { titolo: "App presenze cantiere GPS, chi è in cantiere adesso e quante ore fattureremo al committente", href: "/blog/2026/05/19/app-presenze-cantiere-gps/" },
      { titolo: "Software Gestione Presenze Cantiere Edilizia: Guida 2026", href: "/blog/2026/04/21/software-gestione-presenze-cantiere-edilizia/" },
    ],
  },
  "en": {
    "pulizie": [
      { titolo: "App for Cleaning Companies: What to Check Before You Choose", href: "/blog/en/2026/04/21/cleaning-company-app-what-to-check/" },
      { titolo: "GPS Tracking for Cleaners: UK ICO-Compliant Setup in 2026", href: "/blog/en/2026/06/01/gps-tracking-cleaners-uk-2026/", solo: ['en-gb'] },
      { titolo: "Time tracking for cleaning companies: proof, not paperwork", href: "/blog/en/2026/06/29/time-tracking-cleaning-companies-proof/" },
      { titolo: "GPS tracking of cleaning staff: what you can actually do without getting fined", href: "/blog/en/2026/05/18/gps-tracking-of-cleaning-staff-what-you-can-actually-do-without-getting-fined/" },
    ],
    "sicurezza": [
      { titolo: "GPS security attendance app: how to prove to the client that the security guard was actually on site", href: "/blog/en/2026/05/15/gps-security-attendance-app-how-to-prove-to-the-client-that-the-security-guard-was-actually-on-site/" },
      { titolo: "Documenting security patrols: how to provide customers with the evidence they are looking for", href: "/blog/en/2026/05/19/documenting-security-patrols-how-to-provide-customers-with-the-evidence-they-are-looking-for/" },
    ],
    "installatori": [
      { titolo: "Installer and technician app 2026: complete buying guide", href: "/blog/en/2026/05/13/installer-technician-app-2026-complete-guide/" },
      { titolo: "How to document installers’ work without using paper (and without arguments with customers)", href: "/blog/en/2026/04/20/how-to-document-installers-work-without-using-paper-and-without-arguments-with-customers/" },
    ],
    "elettricisti": [
      { titolo: "Apps for electricians 2026: what you really need to manage your team", href: "/blog/en/2026/05/14/apps-for-electricians-2026-what-you-really-need-to-manage-your-team/" },
      { titolo: "Electrician Time Tracking: GPS Work Orders and Proof That Ends Disputes", href: "/blog/en/2026/05/31/electrician-time-tracking-app-2026/" },
      { titolo: "GPS Time Tracking for Electricians and Plumbers", href: "/blog/en/2026/06/16/gps-time-tracking-for-electricians-and-plumbers/" },
      { titolo: "GPS app for plumbers and electricians: how it actually works", href: "/blog/en/2026/06/17/gps-app-plumbers-electricians-how-it-works/" },
    ],
    "idraulici": [
      { titolo: "GPS Time Tracking for Electricians and Plumbers", href: "/blog/en/2026/06/16/gps-time-tracking-for-electricians-and-plumbers/" },
      { titolo: "GPS app for plumbers and electricians: how it actually works", href: "/blog/en/2026/06/17/gps-app-plumbers-electricians-how-it-works/" },
      { titolo: "GPS Time Tracking for Plumbers: Recover the 12% You Lose to Disputes", href: "/blog/en/2026/06/03/gps-time-tracking-plumbers-uk-2026/" },
    ],
    "edilizia": [
      { titolo: "Construction Sectoral Employment Order (SEO) and GPS site logs in Ireland", href: "/blog/en/2026/07/03/construction-seo-gps-site-logs-ireland/", solo: ['en-ie'] },
      { titolo: "Davis-Bacon prevailing wage compliance: GPS time tracking for federal construction projects", href: "/blog/en/2026/05/18/davis-bacon-prevailing-wage-gps-time-tracking-2026/", solo: ['en-us'] },
      { titolo: "Construction Site Attendance Software: Guide for Building Companies 2026", href: "/blog/en/2026/04/21/construction-site-attendance-software-guide/" },
      { titolo: "GPS site attendance app: who’s on site right now and how many hours we’ll bill the client", href: "/blog/en/2026/05/19/gps-site-attendance-app-whos-on-site-right-now-and-how-many-hours-well-bill-the-client/" },
    ],
  },
  "de": {
    "pulizie": [
      { titolo: "Auftragswechsel Reinigung: §613a BGB und Anwesenheitsnachweis", href: "/blog/de/2026/08/11/auftragswechsel-reinigung-613a-bgb-anwesenheitsnachweis/" },
      { titolo: "Zeiterfassung in der Gebäudereinigung: Nachweis statt Stundenzettel", href: "/blog/de/2026/06/29/zeiterfassung-gebaeudereinigung-nachweis/" },
      { titolo: "GPS-Ortung von Reinigungskräften: Was du wirklich tun kannst, ohne Bußgelder zu riskieren", href: "/blog/de/2026/05/18/gps-ortung-von-reinigungskraften-was-du-wirklich-tun-kannst-ohne-busgelder-zu-riskieren/" },
      { titolo: "Software zur Verwaltung von Reinigungskräften: Worauf Sie wirklich achten sollten", href: "/blog/de/2026/05/14/software-zur-verwaltung-von-reinigungskraften-worauf-sie-wirklich-achten-sollten/" },
    ],
    "sicurezza": [
      { titolo: "Dienstplan-Software für den Sicherheitsdienst: was ein Bewachungsunternehmen wirklich braucht", href: "/blog/de/2026/05/14/dienstplan-software-sicherheitsdienst/" },
      { titolo: "GPS-Ortung von Sicherheitspersonal und DSGVO: So setzen Sie dies um, ohne Sanktionen der Datenschutzbehörde zu riskieren", href: "/blog/de/2026/05/20/gps-ortung-von-sicherheitspersonal-und-dsgvo-so-setzen-sie-dies-um-ohne-sanktionen-der-datenschutzbehorde-zu-riskieren/" },
      { titolo: "GPS-Anwesenheits-App für den Sicherheitsdienst: Wie man dem Kunden nachweisen kann, dass der Wachmann tatsächlich vor Ort war", href: "/blog/de/2026/05/15/gps-anwesenheits-app-fur-den-sicherheitsdienst-wie-man-dem-kunden-nachweisen-kann-dass-der-wachmann-tatsachlich-vor-ort-war/" },
      { titolo: "Sicherheitsdienst: Streitigkeiten nach Schichtende nehmen rapide zu", href: "/blog/de/2026/05/06/sicherheitsdienst-streitigkeiten-nach-schichtende/" },
    ],
    "installatori": [
      { titolo: "App für Installateure und Techniker 2026: der vollständige Leitfaden", href: "/blog/de/2026/05/13/app-installateure-techniker-2026-leitfaden/" },
      { titolo: "Dokumentiert die Einsätze der Installateure – ganz ohne Papier und ohne Diskussionen", href: "/blog/de/2026/04/18/dokumentiert-die-einsatze-der-installateure-ganz-ohne-papier-und-ohne-diskussionen/" },
      { titolo: "Waermepumpen 2026: GPS-Dokumentation fuer Installateure", href: "/blog/de/2026/05/07/waermepumpen-boom-2026-installateure-gps-dokumentation/" },
    ],
    "elettricisti": [
      { titolo: "Von Excel zum GPS: Wie ein Elektriker 12.000 € pro Jahr einsparen kann", href: "/blog/de/2026/04/09/von-excel-zum-gps-wie-ein-elektriker-12-000-e-pro-jahr-einsparen-kann/" },
      { titolo: "Apps für Elektriker 2026: Was man wirklich braucht, um das Team zu leiten", href: "/blog/de/2026/05/14/apps-fur-elektriker-2026-was-man-wirklich-braucht-um-das-team-zu-leiten/" },
      { titolo: "Digitaler Elektrikerbericht: So wandeln Sie den papierbasierten Arbeitsauftrag in einen Compliance-konformen Nachweis um", href: "/blog/de/2026/05/18/digitaler-elektrikerbericht-so-wandeln-sie-den-papierbasierten-arbeitsauftrag-in-einen-compliance-konformen-nachweis-um/" },
      { titolo: "Zeiterfassung für Elektriker: die Stunden, die auf der Baustelle verschwinden", href: "/blog/de/2026/06/12/zeiterfassung-elektriker-stunden-baustelle/" },
    ],
    "edilizia": [
      { titolo: "Geofencing auf der Baustelle: Anwesenheit ohne Zettelwirtschaft", href: "/blog/de/2026/06/19/geofencing-baustelle-anwesenheit/" },
      { titolo: "GPS-Anwesenheits-App für die Baustelle: Wer ist gerade auf der Baustelle und wie viele Stunden werden wir dem Auftraggeber in Rechnung stellen?", href: "/blog/de/2026/05/19/gps-anwesenheits-app-fur-die-baustelle-wer-ist-gerade-auf-der-baustelle-und-wie-viele-stunden-werden-wir-dem-auftraggeber-in-rechnung-stellen/" },
      { titolo: "Software Anwesenheitsverwaltung Baustelle: Leitfaden für Baufirmen 2026", href: "/blog/de/2026/04/21/software-anwesenheitsverwaltung-baustelle-leitfaden/" },
      { titolo: "Tariflohn Bau 2026: +3,9% und die historische Ost-West-Angleichung", href: "/blog/de/2026/06/09/tariflohn-bau-2026/" },
    ],
  },
  "nl": {
    "pulizie": [
      { titolo: "Contractwisseling schoonmaak: wie neemt het personeel over?", href: "/blog/nl/2026/08/11/contractwisseling-schoonmaak-personeel-overnemen/" },
      { titolo: "CAO Schoonmaak 2026: loonsverhoging en wat het voor je marge betekent", href: "/blog/nl/2026/06/04/cao-schoonmaak-2026-loon-marge/" },
      { titolo: "Schoonmaaksoftware en de AVG: GPS-registratie zonder boetes", href: "/blog/nl/2026/05/30/software-schoonmaakbedrijven-avg-gps-2026/" },
      { titolo: "Schoonmaak en de Arbeidstijdenwet: urenregistratie CAO-proof", href: "/blog/nl/2026/05/31/urenregistratie-schoonmaak-cao-arbeidstijdenwet-2026/" },
    ],
    "sicurezza": [
      { titolo: "Tijdregistratie-app voor beveiligers met GPS: zo bewijs je de klant dat de beveiliger echt op locatie was", href: "/blog/nl/2026/05/15/tijdregistratie-app-beveiliging-gps/" },
      { titolo: "Bewijs interventie beveiliger: elke alarmopvolging dichttimmeren (en betaald krijgen)", href: "/blog/nl/2026/05/12/bewijs-interventie-beveiliger/" },
      { titolo: "Planning software voor beveiligers: wat een beveiligingsbedrijf echt nodig heeft", href: "/blog/nl/2026/05/14/planning-software-beveiligers/" },
    ],
    "installatori": [
      { titolo: "Werkbeheer software technische dienst: wat een mkb-installateur echt nodig heeft", href: "/blog/nl/2026/05/15/werkbeheer-software-technische-dienst/" },
      { titolo: "Werkrapport-app voor monteurs: wat een installatie- of elektrotechnisch MKB-bedrijf écht nodig heeft", href: "/blog/nl/2026/05/13/werkrapport-app-monteurs/" },
    ],
    "elettricisti": [
      { titolo: "Elektriciens-app 2026: wat je echt nodig hebt om je ploeg te runnen", href: "/blog/nl/2026/05/14/elektriciens-app-2026-ploeg-runnen/" },
      { titolo: "Digitaal werkrapport elektricien: van papieren werkbon naar audit-klaar bewijs", href: "/blog/nl/2026/05/18/digitaal-werkrapport-elektricien/" },
      { titolo: "Tijdregistratie voor elektriciens: de uren die op de bouwplaats verdwijnen", href: "/blog/nl/2026/06/12/tijdregistratie-elektriciens-uren-bouwplaats/" },
    ],
    "edilizia": [
      { titolo: "Hitteprotocol en tropenrooster: wat je in de bouw moet regelen", href: "/blog/nl/2026/07/09/hitteprotocol-bouw-tropenrooster/" },
      { titolo: "Wachttijd op de bouwplaats: is dat arbeidstijd, en wie betaalt?", href: "/blog/nl/2026/09/08/wachttijd-arbeidstijd-urenregistratie/" },
      { titolo: "Augustus op de bouwplaats: weet je wie er echt staat?", href: "/blog/nl/2026/08/06/augustus-bouwplaats-wie-is-aanwezig-veiligheid/" },
      { titolo: "Bouwplaats aanwezigheid GPS app, wie is er nu op de bouwplaats, en hoeveel uur factureer je de hoofdaannemer?", href: "/blog/nl/2026/05/19/bouwplaats-aanwezigheid-gps-app/" },
    ],
  },
  "fr": {
    "pulizie": [
      { titolo: "Tracking GPS agents de nettoyage : ce que la CNIL autorise vraiment", href: "/blog/fr/2026/05/18/tracking-gps-agents-nettoyage/" },
      { titolo: "Application pointage entreprise nettoyage : le guide honnête", href: "/blog/fr/2026/05/13/application-pointage-entreprise-nettoyage/" },
      { titolo: "Obligation de preuve du service de nettoyage : le logiciel qui vous fait gagner les marchés publics (au lieu de les laisser à la concurrence)", href: "/blog/fr/2026/05/21/obligation-preuve-service-nettoyage-logiciel/" },
      { titolo: "Logiciel de gestion des équipes de nettoyage: ce qu’il doit vraiment faire", href: "/blog/fr/2026/05/14/logiciel-gestion-equipes-nettoyage/" },
    ],
    "sicurezza": [
      { titolo: "Sécurité privée : les contestations post-vacation sont en hausse", href: "/blog/fr/2026/05/06/securite-privee-contestations-post-vacation-hausse/" },
      { titolo: "Quelle application pour vos agents de sécurité? Critères 2026", href: "/blog/fr/2026/05/12/application-agents-securite-2026/" },
      { titolo: "Logiciel de gestion des agents de sécurité et de planning : ce dont une société de sécurité a vraiment besoin", href: "/blog/fr/2026/05/14/logiciel-gestion-agents-securite-planning/" },
      { titolo: "Tracking GPS des agents de sécurité et RGPD : déployer conforme sans sanction CNIL ni litige CNAPS", href: "/blog/fr/2026/05/20/tracking-gps-agents-securite-rgpd/" },
    ],
    "installatori": [
      { titolo: "Application installateurs et techniciens 2026 : le guide complet", href: "/blog/fr/2026/05/13/application-installateurs-techniciens-2026-guide/" },
    ],
    "elettricisti": [
      { titolo: "Rapport numérique électricien : transformer le bon d’intervention papier en preuve conforme", href: "/blog/fr/2026/05/18/rapport-numerique-electricien/" },
      { titolo: "Application électriciens 2026 : ce qu’il vous faut vraiment pour l’équipe", href: "/blog/fr/2026/05/14/application-electriciens-2026-equipe/" },
    ],
    "edilizia": [
      { titolo: "Temps d’attente sur chantier, du travail effectif ou pas ?", href: "/blog/fr/2026/09/08/temps-attente-temps-de-travail-effectif/" },
      { titolo: "Carte BTP: obligation, sanctions et gestion du personnel de chantier", href: "/blog/fr/2026/06/05/carte-btp-obligation-sanctions/" },
      { titolo: "Salaires minima BTP 2026: pourquoi le décompte des heures est régional", href: "/blog/fr/2026/06/15/salaires-minima-btp-2026-regional/" },
      { titolo: "Canicule sur les chantiers : obligations 2026 et preuve des heures", href: "/blog/fr/2026/07/09/canicule-chantier-obligations/" },
    ],
  },
  "es": {
    "sicurezza": [
      { titolo: "Software de gestión guardias de seguridad España 2026", href: "/blog/es/2026/05/14/software-gestion-guardias-seguridad-espana-2026/" },
    ],
    "pulizie": [
      { titolo: "Subrogación de plantilla en limpieza: qué pasa con las horas", href: "/blog/es/2026/08/11/subrogacion-plantilla-limpieza-cambio-contrata/" },
      { titolo: "Software para empresas de limpieza 2026: qué buscar y qué evitar", href: "/blog/es/2026/05/09/software-empresa-limpieza-2026-guia/" },
      { titolo: "Cómo reducir las disputas con clientes en empresas de limpieza", href: "/blog/es/2026/05/09/como-reducir-disputas-clientes-empresa-limpieza-2026/" },
      { titolo: "App de control de empleados para empresa de limpieza España 2026: guía", href: "/blog/es/2026/05/14/app-control-empleados-limpieza-espana-2026-guia/" },
    ],
    "installatori": [
      { titolo: "Cómo justificar cada intervención de tus instaladores con prueba GPS", href: "/blog/es/2026/05/06/app-geolocalizacion-instaladores-2026/" },
      { titolo: "App de geolocalización para instaladores: qué buscar en 2026", href: "/blog/es/2026/05/09/app-geolocalizacion-instaladores-2026-guia/" },
    ],
    "edilizia": [
      { titolo: "Tiempo de espera en obra, ¿jornada o regalo?", href: "/blog/es/2026/09/08/tiempo-de-espera-jornada-registro/" },
      { titolo: "Fichaje GPS construcción España 2026: Estatuto + LOPDGDD", href: "/blog/es/2026/05/14/fichaje-gps-construccion-espana-2026-estatuto-lopdgdd/" },
      { titolo: "Agosto en la obra: quién está dentro ya es seguridad", href: "/blog/es/2026/08/06/agosto-obra-presencia-seguridad/" },
    ],
  },
  "pt": {
    "pulizie": [
      { titolo: "Mudança de prestador de limpeza: o que acontece ao pessoal", href: "/blog/pt/2026/08/11/mudanca-prestador-limpeza-transmissao-pessoal/" },
      { titolo: "App de geolocalização empregados para empresas de limpeza Portugal 2026", href: "/blog/pt/2026/05/14/app-geolocalizacao-empregados-limpeza-portugal-2026/" },
    ],
    "edilizia": [
      { titolo: "App de fichagem para a construção em Portugal: o que pede o Código do Trabalho em 2026", href: "/blog/pt/2026/05/21/app-fichagem-construcao-portugal-2026/" },
      { titolo: "Agosto na obra: quem está lá dentro é uma questão de segurança", href: "/blog/pt/2026/08/06/agosto-obra-presenca-seguranca/" },
    ],
  },
  "da": {
    "pulizie": [
      { titolo: "Leverandørskifte i rengøring: sådan beviser I timerne", href: "/blog/da/2026/08/11/leverandorskifte-rengoring-bevis-timer/" },
    ],
    "edilizia": [
      { titolo: "Byggepladsrapport-app 2026: Arbejdsmiljølov + GDPR Danmark", href: "/blog/da/2026/05/14/byggepladsrapport-app-2026-arbejdsmiljolov-gdpr-danmark/" },
    ],
  },
  "sv": {
    "pulizie": [
      { titolo: "Almega städ och digital tidrapportering 2026: vad kollektivavtalet kräver av städföretag", href: "/blog/sv/2026/05/26/almega-stad-tidrapportering-2026/" },
      { titolo: "Byte av städentreprenör: verksamhetsövergång enligt LAS", href: "/blog/sv/2026/08/11/byte-stadentreprenor-verksamhetsovergang-las/" },
      { titolo: "Nytt kollektivavtal städ: lika övertid för deltid från 1 juni", href: "/blog/sv/2026/06/04/kollektivavtal-stad-overtid-deltid/" },
      { titolo: "Geofencing för städföretag: så minskar du tvister med kunden", href: "/blog/sv/2026/06/17/geofencing-stadforetag-tvister/" },
    ],
    "sicurezza": [
      { titolo: "Programvara för säkerhetsvakter och bevakning Sverige 2026", href: "/blog/sv/2026/05/14/programvara-sakerhetsvakter-bevakning-sverige-2026/" },
    ],
    "installatori": [
      { titolo: "Installationsavtalet 2025-2027: vad löneökningen betyder för elföretag", href: "/blog/sv/2026/06/12/installationsavtalet-2025-2027/" },
    ],
    "edilizia": [
      { titolo: "ID06 på byggarbetsplatsen 2026: vad Byggnads-avtalet kräver av elektronisk personalliggare", href: "/blog/sv/2026/05/25/id06-byggnads-narvarokontroll-2026/" },
      { titolo: "ID06 och digital personalliggare: så hänger de ihop på bygget", href: "/blog/sv/2026/06/15/id06-digital-personalliggare/" },
      { titolo: "Underentreprenörer på bygget: vem svarar för timmarna", href: "/blog/sv/2026/06/24/underentreprenorer-bygget-timmar/" },
      { titolo: "Elektronisk personalliggare 2026: Skatteverkets krav för restaurang, frisör och bygg", href: "/blog/sv/2026/05/27/elektronisk-personalliggare-skatteverket-2026/" },
    ],
  },
  "nb": {
    "pulizie": [
      { titolo: "Renholdsregisteret: slik dokumenterer du lønn og timer", href: "/blog/nb/2026/06/04/renholdsregisteret-godkjenning-timer/" },
      { titolo: "Allmenngjøringsloven 2026: minstelønn og digital audit trail for bygg og renhold", href: "/blog/nb/2026/05/26/allmenngjoringsloven-minstelonn-audit-2026/" },
      { titolo: "Renholdsforskriften 2026: godkjenningsmerke og digital arbeidstid for renholdsbedrifter", href: "/blog/nb/2026/05/25/renholdsforskriften-godkjenningsmerke-2026/" },
      { titolo: "Leverandørskifte i renhold: bevis timene ved overtakelsen", href: "/blog/nb/2026/08/11/leverandorskifte-renhold-bevis-timer/" },
    ],
    "edilizia": [
      { titolo: "Minstelønn i bygg 2026: slik dokumenterer du at timene er betalt", href: "/blog/nb/2026/06/09/minstelonn-bygg-2026/" },
      { titolo: "HMS-kort på byggeplass 2026: byggherreforskriften og elektronisk attestering", href: "/blog/nb/2026/05/22/hms-kort-byggekort-byggeplass-2026/" },
      { titolo: "Elektronisk oversiktsliste på byggeplassen: geofencing gjør jobben", href: "/blog/nb/2026/06/17/elektronisk-oversiktsliste-byggeplass/" },
      { titolo: "Byggherreforskriften og SHA-planen: hva byggherren har ansvar for", href: "/blog/nb/2026/06/11/byggherreforskriften-sha-plan/" },
    ],
  },
};

/**
 * Mestieri vicini (04/11/2026): sul blog mancano articoli dedicati a idraulici,
 * termoidraulici e manutenzione in quasi tutte le lingue. Finche' non ci sono, la
 * pagina mostra le guide del mestiere piu' affine, che parlano davvero dello stesso lavoro.
 */
export const VICINI: Partial<Record<SettoreSlug, SettoreSlug[]>> = {
  idraulici: ['termoidraulici', 'installatori'],
  termoidraulici: ['idraulici', 'installatori'],
  manutenzione: ['installatori', 'elettricisti'],
  elettricisti: ['installatori'],
  installatori: ['elettricisti'],
};

/** Lingue senza articoli dedicati a un mestiere (anche fra i vicini): guide generali su orario e prova delle ore. */
export const GUIDE_GENERALI: Record<string, GuidaSettore[]> = {
  pt: [
    { titolo: "Mudança de hora e turnos noturnos: quem paga essa hora", href: "/blog/pt/2026/09/29/mudanca-hora-trabalho-noturno/" },
    { titolo: "Artigo 202.º: o registo que a ACT pede sem avisar", href: "/blog/pt/2026/09/14/artigo-202-registo-tempos-trabalho-act/" },
    { titolo: "Picagem GPS: a informação aos trabalhadores feita bem", href: "/blog/pt/2026/08/04/picagem-gps-informacao-trabalhadores/" },
    { titolo: "Deslocação como tempo de trabalho: o que diz a sentença Tyco", href: "/blog/pt/2026/08/18/deslocacao-tempo-de-trabalho-sentenca-tyco/" },
  ],
  da: [
    { titolo: "Vintertid, nattevagt og den ekstra time ingen skrev ned", href: "/blog/da/2026/09/29/vintertid-nattevagt-ekstra-time/" },
    { titolo: "Kørsel som arbejdstid: det afgjorde Tyco-dommen", href: "/blog/da/2026/08/18/koersel-som-arbejdstid-tyco-dommen/" },
    { titolo: "GPS i varevognen: hvad Datatilsynet kræver af dig i 2026", href: "/blog/da/2026/06/15/gps-varevogn-datatilsynet-medarbejdere-2026/" },
    { titolo: "Er ventetid arbejdstid? Sådan ser hullet ud efter 1. juli 2024", href: "/blog/da/2026/09/08/ventetid-arbejdstid-tidsregistrering/" },
  ],
  nb: [
    { titolo: "Hvem betaler den ekstra timen nattevakten jobber?", href: "/blog/nb/2026/09/29/nattarbeid-tidsomstilling-betalt-time/" },
    { titolo: "Pause som arbeidstid, når bilen er hele pauserommet", href: "/blog/nb/2026/09/15/pause-som-arbeidstid-pauserom/" },
    { titolo: "Slik gjør du GPS-stempling lovlig og brukbar som bevis", href: "/blog/nb/2026/08/04/gps-stempling-lovlig-og-bevis/" },
    { titolo: "Ventetid på jobb, er det arbeidstid og hvem betaler?", href: "/blog/nb/2026/09/08/ventetid-arbeidstid-hvem-betaler/" },
  ],
  ru: [
    { titolo: "Обеденный перерыв по ТК РФ, когда его обязаны оплатить", href: "/blog/ru/2026/09/15/obedennyy-pereryv-oplata-tk-rf/" },
    { titolo: "Время в пути и рабочее время: что говорит ТК РФ", href: "/blog/ru/2026/08/18/vremya-v-puti-kak-rabochee-vremya/" },
    { titolo: "Как доказать часы ночной смены по ТК РФ", href: "/blog/ru/2026/09/29/nochnaya-smena-oplata-chasov/" },
    { titolo: "Уведомление о GPS для сотрудников: как сделать отметку законной", href: "/blog/ru/2026/08/04/uvedomlenie-gps-sotrudniki-zakonnaya-otmetka/" },
  ],
};

export const GUIDE_TITOLO_GENERALE: Record<string, string> = {
  ru: 'Полезные руководства',
  pt: 'Guias úteis',
  da: 'Nyttige guides',
  nb: 'Nyttige guider',
};

export const GUIDE_TITOLO: Record<string, string> = {
  it: 'Le guide per il tuo settore',
  en: 'Guides for your trade',
  de: 'Leitfäden für Ihre Branche',
  nl: 'Gidsen voor jouw vak',
  fr: 'Guides pour votre métier',
  es: 'Guías para tu sector',
  pt: 'Guias para o seu setor',
  da: 'Guides til din branche',
  sv: 'Guider för din bransch',
  nb: 'Guider for din bransje',
};

/** Le guide della pagina, senza quelle gia' nel blocco normativo (stesso href). */
export function guidePerSettore(settore: SettoreSlug, locale: string, gia: string[] = []): GuidaSettore[] {
  const base = locale.split('-')[0];
  const ok = (g: GuidaSettore) => !gia.includes(g.href) && (!g.solo || g.solo.includes(locale));
  const proprie = (GUIDE_SETTORE[base]?.[settore] ?? []).filter(ok);
  if (proprie.length >= 2) return proprie;
  // Pochi o nessun articolo sul mestiere: si completa con i mestieri vicini, senza doppioni.
  const viste = new Set(proprie.map((g) => g.href));
  const altre: GuidaSettore[] = [];
  for (const v of VICINI[settore] ?? []) {
    for (const g of (GUIDE_SETTORE[base]?.[v] ?? []).filter(ok)) {
      if (!viste.has(g.href)) { viste.add(g.href); altre.push(g); }
    }
  }
  return [...proprie, ...altre].slice(0, 4);
}

/** Titolo e guide della sezione: quelle del mestiere, oppure le generali della lingua. */
export function sezioneGuide(settore: SettoreSlug, locale: string, gia: string[] = []): { titolo: string; guide: GuidaSettore[] } {
  const base = locale.split('-')[0];
  const guide = guidePerSettore(settore, locale, gia);
  if (guide.length > 0) return { titolo: GUIDE_TITOLO[base] ?? GUIDE_TITOLO.en, guide };
  const generali = (GUIDE_GENERALI[base] ?? []).filter((g) => !gia.includes(g.href));
  return { titolo: GUIDE_TITOLO_GENERALE[base] ?? GUIDE_TITOLO[base] ?? GUIDE_TITOLO.en, guide: generali };
}
