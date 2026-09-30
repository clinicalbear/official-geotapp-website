import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';
import { SETTORI_CON_RISORSE } from '@/content/settori/risorse-disponibili';
import { blogPostPath, getPostsInCategory } from '@/lib/wp-post-index';
import FeaturedIn from '@/components/FeaturedIn';
import { featuredLabel } from '@/lib/press/labels';

const CTA_LABELS: Record<string, { discover: string; cta: string }> = {
  it: { discover: 'Scopri', cta: 'Vai al prodotto →' },
  en: { discover: 'Discover', cta: 'Go to product →' },
  de: { discover: 'Entdecken', cta: 'Zum Produkt →' },
  fr: { discover: 'Découvrir', cta: 'Voir le produit →' },
  es: { discover: 'Descubrir', cta: 'Ver el producto →' },
  pt: { discover: 'Descobrir', cta: 'Ver o produto →' },
  nl: { discover: 'Ontdekken', cta: 'Naar product →' },
  da: { discover: 'Opdag', cta: 'Gå til produkt →' },
  sv: { discover: 'Upptäck', cta: 'Till produkt →' },
  nb: { discover: 'Oppdag', cta: 'Til produkt →' },
  ru: { discover: 'Узнать', cta: 'К продукту →' },
};

const SETTORE_CONFIG: Record<string, {
  categoryId: number;
  labels: Record<string, { title: string; description: string; heading: string }>;
  intro: Record<string, string>;
  sections: Record<string, Array<{ h2: string; body: string; listItems?: string[]; productLink?: boolean }>>;
  product: {
    name: string;
    slug: 'geotapp-timetracker' | 'geotapp-flow' | 'geotapp-verifier';
    ctaLabel: Record<string, { discover: string; cta: string }>;
  };
}> = {
  pulizie: {
    categoryId: 9,
    labels: {
      it: { title: 'Gestione presenze imprese di pulizie: guida e risorse - GeoTapp', description: 'Come gestire presenze, turni e interventi nelle imprese di pulizie con timbratura GPS. Guide pratiche per responsabili operativi.', heading: 'Gestione presenze nelle imprese di pulizie' },
      en: { title: 'GPS clock-ins for cleaning companies: guides - GeoTapp', description: 'How to manage attendance, shifts and jobs in cleaning companies with GPS clock-ins. Practical guides for operations managers.', heading: 'Attendance tracking for cleaning companies' },
      de: { title: 'GPS-Zeiterfassung für Reinigungsunternehmen: Leitfäden - GeoTapp', description: 'Anwesenheit, Schichten und Einsätze in Reinigungsunternehmen mit GPS-Zeiterfassung verwalten. Praxisnahe Leitfäden für Betriebsleiter.', heading: 'Anwesenheitsverwaltung in Reinigungsunternehmen' },
      fr: { title: 'Gestion des présences en entreprise de nettoyage : guide - GeoTapp', description: 'Comment gérer les présences, les équipes et les interventions dans les entreprises de nettoyage avec le pointage GPS.', heading: 'Gestion des présences en entreprise de nettoyage' },
      es: { title: 'Control de presencia en empresas de limpieza: guía - GeoTapp', description: 'Cómo gestionar presencias, turnos e intervenciones en empresas de limpieza con fichaje GPS. Guías prácticas.', heading: 'Control de presencia en empresas de limpieza' },
      pt: { title: 'Gestão de presenças em empresas de limpeza: guia - GeoTapp', description: 'Como gerir presenças, turnos e intervenções em empresas de limpeza com picagem GPS. Guias práticas para responsáveis operacionais.', heading: 'Gestão de presenças em empresas de limpeza' },
      nl: { title: 'Aanwezigheidsbeheer in schoonmaakbedrijven: gids - GeoTapp', description: 'Hoe u aanwezigheid, diensten en klussen beheert bij schoonmaakbedrijven met registratie met gps. Praktische gidsen voor operationeel verantwoordelijken.', heading: 'Aanwezigheidsbeheer bij schoonmaakbedrijven' },
      da: { title: 'Ressourcer til rengøringsvirksomheder - GeoTapp', description: 'Artikler og guides til styring af fremmøde og opgaver i rengøringsvirksomheder.', heading: 'Ressourcer til rengøringsvirksomheder' },
      sv: { title: 'Resurser för städföretag - GeoTapp', description: 'Artiklar och guider för hantering av närvaro och uppdrag i städföretag.', heading: 'Resurser för städföretag' },
      nb: { title: 'Ressurser for rengjøringsbedrifter - GeoTapp', description: 'Artikler og veiledninger for administrasjon av fremmøte og oppdrag i rengjøringsbedrifter.', heading: 'Ressurser for rengjøringsbedrifter' },
      ru: { title: 'Ресурсы для клининговых компаний - GeoTapp', description: 'Статьи и руководства по управлению присутствием и заявками в клининговых компаниях.', heading: 'Ресурсы для клининговых компаний' },
    },
    intro: {
      it: 'Gestire le presenze in un\'impresa di pulizie non è come timbrare in ufficio. I collaboratori sono distribuiti su cantieri diversi, gli orari variano ogni giorno e il cliente finale vuole sempre sapere chi era presente, quando e per quanto tempo. Queste guide raccolgono le soluzioni operative usate dalle imprese di pulizie per risolvere questo problema.',
      en: 'Managing attendance in a cleaning company is nothing like office clock-ins. Staff are spread across multiple sites, schedules change daily, and clients always want to know who was present, when, and for how long. These guides collect the operational solutions cleaning companies use to solve this problem.',
      de: 'Die Anwesenheitsverwaltung in einem Reinigungsunternehmen unterscheidet sich grundlegend vom Bürobetrieb. Die Mitarbeitenden sind auf mehrere Einsatzorte verteilt, die Arbeitszeiten ändern sich täglich, und Kunden wollen immer wissen, wer wann anwesend war. Diese Leitfäden sammeln die Lösungen, mit denen Reinigungsunternehmen dieses Problem lösen.',
      fr: 'Gérer les présences dans une entreprise de nettoyage n\'a rien à voir avec le pointage en bureau. Les équipes sont réparties sur plusieurs chantiers, les horaires changent chaque jour et les clients veulent toujours savoir qui était présent, quand et combien de temps. Ces guides rassemblent les solutions opérationnelles utilisées par les entreprises de nettoyage.',
      es: 'Gestionar las presencias en una empresa de limpieza no tiene nada que ver con fichar en la oficina. Los trabajadores están distribuidos en varios centros, los horarios cambian cada día y el cliente siempre quiere saber quién estuvo presente, cuándo y cuánto tiempo. Estas guías recogen las soluciones operativas usadas por las empresas de limpieza.',
      pt: 'Gerir as presenças numa empresa de limpeza não tem nada que ver com picar o ponto no escritório. Os trabalhadores estão distribuídos por vários locais, os horários mudam todos os dias e o cliente final quer sempre saber quem esteve presente, quando e durante quanto tempo. Estes guias reúnem as soluções operacionais usadas pelas empresas de limpeza.',
      nl: 'Aanwezigheid beheren in een schoonmaakbedrijf is iets anders dan inklokken op kantoor. De medewerkers zijn verdeeld over verschillende locaties, de tijden veranderen elke dag en de eindklant wil altijd weten wie er was, wanneer en hoe lang. Deze gidsen bundelen de operationele oplossingen die schoonmaakbedrijven gebruiken om dit probleem op te lossen.',
      da: 'Managing attendance in a cleaning company is nothing like office clock-ins. Staff are spread across multiple sites, schedules change daily, and clients always want to know who was present, when, and for how long.',
      sv: 'Managing attendance in a cleaning company is nothing like office clock-ins. Staff are spread across multiple sites, schedules change daily, and clients always want to know who was present, when, and for how long.',
      nb: 'Managing attendance in a cleaning company is nothing like office clock-ins. Staff are spread across multiple sites, schedules change daily, and clients always want to know who was present, when, and for how long.',
      ru: 'Учёт рабочего времени в клининговой компании существенно отличается от офисного. Сотрудники рассредоточены по нескольким объектам, расписание меняется каждый день, а клиенты всегда хотят знать, кто присутствовал, когда и сколько времени.',
    },
    sections: {
      it: [
        {
          h2: 'Il problema operativo che rallenta le imprese di pulizie',
          body: 'Chi gestisce un\'impresa di pulizie con più di 5 collaboratori conosce questi problemi: non sai se il collaboratore è arrivato alle 7:00 o alle 7:45, il cliente ti chiama per sapere se la squadra è stata presente ieri, e i fogli presenze non quadrano mai. Il problema non è la volontà delle persone, è che i sistemi tradizionali non funzionano quando le squadre cambiano cantiere ogni giorno.',
        },
        {
          h2: 'Come funziona la timbratura GPS per le imprese di pulizie',
          body: 'La timbratura GPS permette ai collaboratori di registrare entrata e uscita direttamente dallo smartphone, con la posizione registrata in quel momento, e solo in quel momento. Non richiede hardware fisso e funziona su qualsiasi cantiere. Il responsabile vede le timbrature appena arrivano e può esportare i report per il cliente a fine mese. GeoTapp TimeTracker aggiunge le foto di prova dei lavori completati e la comunicazione con il coordinatore dallo stesso telefono.',
          productLink: true,
        },
        {
          h2: 'Cosa controllare prima di scegliere un software per imprese di pulizie',
          body: 'Non tutti i software di gestione presenze sono adatti al lavoro su cantieri distribuiti. Prima di scegliere, verifica che supporti:',
          listItems: [
            'Timbratura da smartphone, senza hardware aggiuntivo',
            'Posizione registrata e controllata al momento della timbratura, mai in continuo',
            'Possibilità di allegare foto agli interventi',
            'Report esportabili per il cliente finale',
            'Comunicazione interna integrata tra collaboratori e ufficio',
          ],
        },
      ],
      en: [
        {
          h2: 'The operational problem that slows cleaning companies down',
          body: 'Anyone managing a cleaning company with more than 5 staff knows these problems: you don\'t know if someone arrived at 7:00 or 7:45, a client calls asking if the team was there yesterday, and your timesheets never add up. The issue isn\'t the staff, it\'s that traditional systems don\'t work when teams move between sites every day.',
        },
        {
          h2: 'How GPS time tracking works for cleaning companies',
          body: 'GPS time tracking lets staff clock in and out directly from their smartphone, with the position recorded at that moment, and only at that moment. No fixed hardware needed, it works on any site. Managers see clock-ins as they arrive and can export client reports at month end. GeoTapp TimeTracker adds proof photos of completed work and communication with the coordinator from the same phone.',
          productLink: true,
        },
        {
          h2: 'What to check before choosing software for your cleaning company',
          body: 'Not all attendance software is built for distributed site work. Before choosing, check that it supports:',
          listItems: [
            'Smartphone clock-in, no additional hardware required',
            'Position recorded and checked at clock-in, never continuously',
            'Photo attachments to completed jobs',
            'Exportable reports for end clients',
            'Built-in communication between staff and office',
          ],
        },
      ],
      de: [
        {
          h2: 'Das Problem im Alltag, das Reinigungsunternehmen ausbremst',
          body: 'Wer ein Reinigungsunternehmen mit mehr als 5 Mitarbeitenden führt, kennt das: Sie wissen nicht, ob jemand um 7:00 oder um 7:45 Uhr angekommen ist, ein Kunde ruft an und fragt, ob das Team gestern da war, und die Stundenzettel stimmen nie. Es liegt nicht am guten Willen der Leute, sondern daran, dass herkömmliche Systeme nicht funktionieren, wenn die Teams jeden Tag die Baustelle wechseln.',
        },
        {
          h2: 'So funktioniert die GPS-Zeiterfassung in Reinigungsunternehmen',
          body: 'Mit der GPS-Zeiterfassung melden sich die Mitarbeitenden direkt mit dem Smartphone an und ab, mit dem Standort in diesem Moment, und nur in diesem Moment. Es braucht keine feste Hardware, und sie funktioniert auf jeder Baustelle. Die Leitung sieht die Buchungen, sobald sie eintreffen, und kann am Monatsende die Berichte für den Kunden exportieren. GeoTapp TimeTracker ergänzt Nachweisfotos der erledigten Arbeiten und den Austausch mit der Koordination vom selben Telefon aus.',
          productLink: true,
        },
        {
          h2: 'Worauf Sie vor der Wahl einer Software für Ihr Reinigungsunternehmen achten sollten',
          body: 'Nicht jede Software zur Zeiterfassung ist für Arbeit an verteilten Einsatzorten gemacht. Prüfen Sie vor der Wahl, ob sie Folgendes kann:',
          listItems: [
            'Stempeln per Smartphone, ohne zusätzliche Hardware',
            'Standort bei der Buchung erfasst und geprüft, nie fortlaufend',
            'Fotos an erledigte Einsätze anhängen',
            'Exportierbare Berichte für den Endkunden',
            'Interne Kommunikation zwischen Mitarbeitenden und Büro',
          ],
        },
      ],
      nl: [
        {
          h2: 'Het operationele probleem dat schoonmaakbedrijven vertraagt',
          body: 'Wie een schoonmaakbedrijf met meer dan 5 medewerkers beheert, kent deze problemen: u weet niet of de medewerker om 7:00 of om 7:45 is aangekomen, de klant belt u om te weten of de ploeg gisteren aanwezig was, en de presentielijsten kloppen nooit. Het probleem is niet de goede wil van de mensen, het is dat de traditionele systemen niet werken wanneer de ploegen elke dag van locatie wisselen.',
        },
        {
          h2: 'Hoe registratie met gps werkt voor schoonmaakbedrijven',
          body: 'Met registratie met gps leggen de medewerkers aankomst en vertrek rechtstreeks met hun smartphone vast, met de locatie die op dat moment wordt vastgelegd, en alleen op dat moment. Er is geen vaste hardware nodig en het werkt op elke locatie. De verantwoordelijke ziet de registraties zodra ze binnenkomen en kan aan het eind van de maand de rapporten voor de klant exporteren. GeoTapp TimeTracker voegt de bewijsfoto\'s van afgeronde werkzaamheden toe en de communicatie met de coördinator vanaf dezelfde telefoon.',
          productLink: true,
        },
        {
          h2: 'Waar u op moet letten voordat u software voor schoonmaakbedrijven kiest',
          body: 'Niet elke software voor aanwezigheidsbeheer is geschikt voor werk op verspreide locaties. Controleer voordat u kiest dat ze het volgende ondersteunt:',
          listItems: [
            'Registratie met de smartphone, zonder extra hardware',
            'Locatie die wordt vastgelegd en gecontroleerd op het moment van de registratie, nooit doorlopend',
            'Mogelijkheid om foto\'s bij de klussen te voegen',
            'Exporteerbare rapporten voor de eindklant',
            'Geïntegreerde interne communicatie tussen medewerkers en kantoor',
          ],
        },
      ],
      fr: [
        {
          h2: 'Le problème opérationnel qui ralentit les entreprises de nettoyage',
          body: 'Quiconque dirige une entreprise de nettoyage de plus de 5 personnes connaît ces problèmes : vous ne savez pas si l\'agent est arrivé à 7 h 00 ou à 7 h 45, le client vous appelle pour savoir si l\'équipe est venue hier, et les feuilles de présence ne tombent jamais juste. Le problème n\'est pas la bonne volonté des gens, c\'est que les systèmes traditionnels ne fonctionnent pas quand les équipes changent de site chaque jour.',
        },
        {
          h2: 'Comment fonctionne le pointage GPS pour les entreprises de nettoyage',
          body: 'Le pointage GPS permet aux agents d\'enregistrer leur arrivée et leur départ directement depuis leur smartphone, avec la position relevée à cet instant, et uniquement à cet instant. Il ne demande aucun matériel fixe et fonctionne sur n\'importe quel site. Le responsable voit les pointages dès qu\'ils arrivent et peut exporter les rapports pour le client en fin de mois. GeoTapp TimeTracker ajoute les photos de preuve des travaux terminés et la communication avec le coordinateur depuis le même téléphone.',
          productLink: true,
        },
        {
          h2: 'Ce qu\'il faut vérifier avant de choisir un logiciel pour entreprise de nettoyage',
          body: 'Tous les logiciels de gestion des présences ne conviennent pas au travail sur des sites dispersés. Avant de choisir, vérifiez qu\'il prend en charge :',
          listItems: [
            'Le pointage depuis un smartphone, sans matériel supplémentaire',
            'Une position relevée et contrôlée au moment du pointage, jamais en continu',
            'La possibilité de joindre des photos aux interventions',
            'Des rapports exportables pour le client final',
            'Une communication interne intégrée entre les agents et le bureau',
          ],
        },
      ],
      es: [
        {
          h2: 'El problema operativo que frena a las empresas de limpieza',
          body: 'Quien dirige una empresa de limpieza con más de 5 trabajadores conoce estos problemas: no sabes si la persona llegó a las 7:00 o a las 7:45, el cliente te llama para saber si el equipo estuvo ayer y las hojas de presencia nunca cuadran. El problema no es la voluntad de las personas, sino que los sistemas tradicionales no funcionan cuando los equipos cambian de centro cada día.',
        },
        {
          h2: 'Cómo funciona el fichaje con GPS en las empresas de limpieza',
          body: 'El fichaje con GPS permite a los trabajadores registrar la entrada y la salida directamente desde el smartphone, con la posición registrada en ese momento y solo en ese momento. No requiere hardware fijo y funciona en cualquier centro de trabajo. El responsable ve los fichajes en cuanto llegan y puede exportar los informes para el cliente a final de mes. GeoTapp TimeTracker añade las fotos de prueba de los trabajos terminados y la comunicación con el coordinador desde el mismo teléfono.',
          productLink: true,
        },
        {
          h2: 'Qué comprobar antes de elegir un software para empresas de limpieza',
          body: 'No todos los programas de control de presencia sirven para trabajar en centros dispersos. Antes de elegir, comprueba que admita:',
          listItems: [
            'Fichaje desde el smartphone, sin hardware adicional',
            'Una posición registrada y comprobada en el momento del fichaje, nunca de forma continua',
            'La posibilidad de adjuntar fotos a las intervenciones',
            'Informes exportables para el cliente final',
            'Comunicación interna integrada entre los trabajadores y la oficina',
          ],
        },
      ],
      pt: [
        {
          h2: 'O problema operativo que trava as empresas de limpeza',
          body: 'Quem gere uma empresa de limpeza com mais de 5 trabalhadores conhece estes problemas: não sabe se o trabalhador chegou às 7:00 ou às 7:45, o cliente liga para saber se a equipa esteve lá ontem e as folhas de presença nunca batem certo. O problema não é a vontade das pessoas, é que os sistemas tradicionais não funcionam quando as equipas mudam de local todos os dias.',
        },
        {
          h2: 'Como funciona a picagem GPS nas empresas de limpeza',
          body: 'A picagem GPS permite aos trabalhadores registar a entrada e a saída diretamente a partir do smartphone, com a posição registada nesse momento, e só nesse momento. Não exige equipamento fixo e funciona em qualquer local de trabalho. O responsável vê as picagens assim que chegam e pode exportar os relatórios para o cliente no fim do mês. O GeoTapp TimeTracker acrescenta as fotos de prova dos trabalhos concluídos e a comunicação com o coordenador a partir do mesmo telemóvel.',
          productLink: true,
        },
        {
          h2: 'O que verificar antes de escolher um programa para empresas de limpeza',
          body: 'Nem todos os programas de gestão de presenças servem para trabalhar em locais dispersos. Antes de escolher, verifique se suporta:',
          listItems: [
            'Picagem a partir do smartphone, sem equipamento adicional',
            'Uma posição registada e verificada no momento da picagem, nunca de forma contínua',
            'A possibilidade de anexar fotos às intervenções',
            'Relatórios exportáveis para o cliente final',
            'Comunicação interna integrada entre os trabalhadores e o escritório',
          ],
        },
      ],
    },
    product: {
      name: 'GeoTapp TimeTracker',
      slug: 'geotapp-timetracker',
      ctaLabel: CTA_LABELS,
    },
  },
  installatori: {
    categoryId: 65,
    labels: {
      it: { title: 'Gestione interventi per installatori e tecnici: guida - GeoTapp', description: 'Come gestire ordini di lavoro, tecnici sul campo e reportistica per aziende di installazione. Guide operative.', heading: 'Gestione interventi per installatori e tecnici' },
      en: { title: 'Field service management for installers: guides - GeoTapp', description: 'How to manage work orders, field technicians and reporting for installation and service companies.', heading: 'Field service management for installers' },
      de: { title: 'Außendienstmanagement für Installateure: Leitfäden - GeoTapp', description: 'Wie Sie Arbeitsaufträge, Techniker im Außendienst und Berichte für Installations- und Servicebetriebe verwalten. Praxisnahe Leitfäden.', heading: 'Außendienstmanagement für Installateure' },
      fr: { title: 'Gestion des interventions pour installateurs : guide - GeoTapp', description: 'Comment gérer les ordres de travail, les techniciens terrain et les rapports pour les entreprises d\'installation.', heading: 'Gestion des interventions pour installateurs' },
      es: { title: 'Gestión de intervenciones para instaladores: guía - GeoTapp', description: 'Cómo gestionar órdenes de trabajo, técnicos de campo y reportes para empresas de instalación.', heading: 'Gestión de intervenciones para instaladores' },
      pt: { title: 'Gestão de intervenções para instaladores: guia - GeoTapp', description: 'Como gerir ordens de trabalho, técnicos no terreno e relatórios para empresas de instalação. Guias operacionais.', heading: 'Gestão de intervenções para instaladores e técnicos' },
      nl: { title: 'Klusbeheer voor installateurs en monteurs: gids - GeoTapp', description: 'Hoe u werkbonnen, monteurs in het veld en rapportage beheert voor installatiebedrijven. Operationele gidsen.', heading: 'Klusbeheer voor installateurs en monteurs' },
      da: { title: 'Ressourcer til installatører - GeoTapp', description: 'Artikler og guides til installatører og virksomheder med serviceteknikere.', heading: 'Ressourcer til installatører' },
      sv: { title: 'Resurser för installatörer - GeoTapp', description: 'Artiklar och guider för installatörer och företag med fälttekniker.', heading: 'Resurser för installatörer' },
      nb: { title: 'Ressurser for installatører - GeoTapp', description: 'Artikler og veiledninger for installatører og bedrifter med feltservice.', heading: 'Ressurser for installatører' },
      ru: { title: 'Ресурсы для монтажников - GeoTapp', description: 'Статьи и руководства для монтажников и выездных технических служб.', heading: 'Ресурсы для монтажников' },
    },
    intro: {
      it: 'Coordinare tecnici sul campo significa sapere quale intervento è stato appena chiuso e cosa è rimasto in sospeso, senza rincorrere nessuno al telefono. Con telefonate e messaggi WhatsApp il quadro è sempre incompleto: gli aggiornamenti arrivano in ritardo, le priorità cambiano senza che l\'ufficio lo sappia e la documentazione per il cliente è sempre un problema. Questi articoli raccolgono le pratiche operative più efficaci per aziende con tecnici sul campo.',
      en: 'Coordinating field technicians means knowing which jobs have just been closed and what is still pending, without chasing anyone by phone. With phone calls and WhatsApp the picture is always incomplete: updates arrive late, priorities shift without the office knowing, and client documentation is always a last-minute scramble. These guides cover effective operational practices for field service companies.',
      de: 'Techniker im Außendienst zu koordinieren heißt zu wissen, welcher Einsatz gerade abgeschlossen wurde und was noch offen ist, ohne jemandem telefonisch nachzulaufen. Mit Anrufen und WhatsApp-Nachrichten bleibt das Bild immer unvollständig: Updates kommen zu spät, Prioritäten ändern sich, ohne dass das Büro es erfährt, und die Unterlagen für den Kunden sind immer ein Problem. Diese Leitfäden behandeln bewährte Abläufe für Außendienstbetriebe.',
      fr: 'Coordonner des techniciens de terrain, c\'est savoir quelle intervention vient d\'être clôturée et ce qui reste en suspens, sans courir après personne au téléphone. Avec les appels et WhatsApp, le tableau reste toujours incomplet : les mises à jour arrivent en retard, les priorités changent sans que le bureau le sache et la documentation pour le client est toujours un problème. Ces guides couvrent les bonnes pratiques opérationnelles pour les entreprises avec des techniciens de terrain.',
      es: 'Coordinar técnicos de campo es saber qué intervención se acaba de cerrar y qué sigue pendiente, sin ir detrás de nadie por teléfono. Con llamadas y mensajes de WhatsApp el panorama siempre es incompleto: las actualizaciones llegan tarde, las prioridades cambian sin que la oficina lo sepa y la documentación para el cliente siempre es un problema. Estas guías recogen las prácticas operativas más eficaces para empresas con técnicos de campo.',
      pt: 'Coordenar técnicos no terreno é saber que intervenção acabou de ser encerrada e o que continua pendente, sem andar atrás de ninguém ao telefone. Com telefonemas e mensagens de WhatsApp o quadro é sempre incompleto: as atualizações chegam tarde, as prioridades mudam sem que o escritório o saiba e a documentação para o cliente é sempre um problema. Estes guias reúnem as práticas operacionais mais eficazes para empresas com técnicos no terreno.',
      nl: 'Monteurs in het veld coördineren betekent weten welke klus net is afgesloten en wat er nog openstaat, zonder iemand telefonisch achterna te zitten. Met telefoontjes en WhatsApp-berichten is het beeld altijd onvolledig: de updates komen te laat, de prioriteiten veranderen zonder dat het kantoor het weet en de documentatie voor de klant is altijd een probleem. Deze artikelen bundelen de meest effectieve operationele werkwijzen voor bedrijven met monteurs in het veld.',
      da: 'Coordinating field technicians means knowing at any moment who is where, which jobs have just been closed, and what\'s still pending. These guides cover effective operational practices for field service companies.',
      sv: 'Coordinating field technicians means knowing at any moment who is where, which jobs have just been closed, and what\'s still pending. These guides cover effective operational practices for field service companies.',
      nb: 'Coordinating field technicians means knowing at any moment who is where, which jobs have just been closed, and what\'s still pending. These guides cover effective operational practices for field service companies.',
      ru: 'Координация выездных техников означает знать в каждый момент, кто где находится, какие заявки только что закрыты и что ещё в работе. Эти руководства охватывают эффективные операционные практики для компаний с выездным персоналом.',
    },
    sections: {
      it: [
        {
          h2: 'Il problema di coordinamento nelle aziende con tecnici sul campo',
          body: 'Quando un tecnico chiude un intervento e l\'ufficio lo scopre solo a fine giornata, non sa se mandare rinforzi o chiudere la pratica. Quando la documentazione è cartacea o via messaggio, ricostruire lo storico di un cliente richiede ore, e il coordinamento telefonico si mangia una parte della giornata che si potrebbe recuperare.',
        },
        {
          h2: 'Come gestire ordini di lavoro e interventi senza telefonate',
          body: 'Un sistema di gestione interventi digitale permette di assegnare ordini di lavoro direttamente allo smartphone del tecnico, con priorità, istruzioni e storico del cliente già inclusi. Il tecnico lavora con l\'app GeoTapp TimeTracker: timbra, scatta le foto di prova e scrive le note, e il report si compone da solo. Dall\'ufficio, GeoTapp Flow assegna gli interventi, riceve le timbrature appena arrivano e manda al cliente il report sigillato.',
          productLink: true,
        },
        {
          h2: 'Cosa deve poter fare un software per installatori e tecnici sul campo',
          body: 'Prima di scegliere uno strumento di gestione per il tuo team di tecnici, verifica che supporti:',
          listItems: [
            'Assegnazione e modifica degli interventi da remoto',
            'Posizione registrata solo alle timbrature, mai in continuo',
            'Foto di prova collegate all\'intervento',
            'Reportistica automatica per ogni intervento chiuso',
            'Storico completo degli interventi per cliente',
          ],
        },
      ],
      en: [
        {
          h2: 'The coordination problem for field service companies',
          body: 'When a technician closes a job and the office only finds out at the end of the day, it does not know whether to send backup or close the file. When documentation is on paper or via text messages, reconstructing a client\'s history takes hours, and phone coordination eats into a part of the day that could be recovered.',
        },
        {
          h2: 'How to manage work orders and field jobs without phone calls',
          body: 'A digital job management system lets you assign work orders directly to the technician\'s smartphone, complete with priority, instructions, and client history. The technician works with the GeoTapp TimeTracker app: clocks in, takes proof photos and writes notes, and the report builds itself. From the office, GeoTapp Flow assigns jobs, receives the clock-ins as they arrive and sends the client the sealed report.',
          productLink: true,
        },
        {
          h2: 'What field service management software must support',
          body: 'Before choosing a management tool for your field team, check that it supports:',
          listItems: [
            'Remote job assignment and changes',
            'Position recorded only at clock-in, never continuously',
            'Proof photos linked to the job',
            'Automatic report generation per closed job',
            'Complete job history per client',
          ],
        },
      ],
      de: [
        {
          h2: 'Das Koordinationsproblem in Unternehmen mit Technikern im Außendienst',
          body: 'Wenn ein Techniker einen Einsatz abschließt und das Büro es erst am Ende des Tages erfährt, weiß es nicht, ob es Verstärkung schicken oder den Vorgang schließen soll. Wenn die Unterlagen auf Papier oder per Nachricht kommen, dauert es Stunden, die Geschichte eines Kunden zu rekonstruieren, und die Abstimmung per Telefon frisst einen Teil des Tages, den man zurückgewinnen könnte.',
        },
        {
          h2: 'So verwalten Sie Aufträge und Einsätze ohne Telefonate',
          body: 'Ein digitales System für die Einsatzverwaltung weist Aufträge direkt dem Smartphone des Technikers zu, mit Priorität, Anweisungen und Kundenhistorie. Der Techniker arbeitet mit der App GeoTapp TimeTracker: Er stempelt, macht die Nachweisfotos und schreibt Notizen, und der Bericht entsteht von selbst. Im Büro weist GeoTapp Flow die Einsätze zu, empfängt die Buchungen, sobald sie eintreffen, und schickt dem Kunden den versiegelten Bericht.',
          productLink: true,
        },
        {
          h2: 'Was eine Software für Installateure und Techniker im Außendienst können muss',
          body: 'Bevor Sie ein Verwaltungswerkzeug für Ihr Technikerteam wählen, prüfen Sie, ob es Folgendes kann:',
          listItems: [
            'Einsätze aus der Ferne zuweisen und ändern',
            'Standort nur bei den Buchungen erfasst, nie fortlaufend',
            'Nachweisfotos, dem Einsatz zugeordnet',
            'Automatischer Bericht für jeden abgeschlossenen Einsatz',
            'Vollständige Einsatzhistorie pro Kunde',
          ],
        },
      ],
      nl: [
        {
          h2: 'Het coördinatieprobleem bij bedrijven met monteurs in het veld',
          body: 'Wanneer een monteur een klus afsluit en het kantoor dat pas aan het eind van de dag ontdekt, weet het niet of er versterking moet komen of het dossier kan worden gesloten. Wanneer de documentatie op papier of per bericht gaat, kost het uren om de historie van een klant te reconstrueren, en de telefonische coördinatie vreet een deel van de dag op dat terug te winnen is.',
        },
        {
          h2: 'Hoe u opdrachten en klussen beheert zonder telefoontjes',
          body: 'Met een digitaal systeem voor klusbeheer kunt u opdrachten rechtstreeks aan de smartphone van de monteur toewijzen, met prioriteit, instructies en historie van de klant er al bij. De monteur werkt met de GeoTapp TimeTracker-app: hij registreert, maakt de bewijsfoto\'s en schrijft de notities, en het rapport stelt zichzelf samen. Vanaf kantoor wijst GeoTapp Flow de klussen toe, ontvangt de registraties zodra ze binnenkomen en stuurt de klant het verzegelde rapport.',
          productLink: true,
        },
        {
          h2: 'Wat software voor installateurs en monteurs in het veld moet kunnen',
          body: 'Controleer voordat u een beheerhulpmiddel voor uw team van monteurs kiest dat het het volgende ondersteunt:',
          listItems: [
            'Klussen op afstand toewijzen en wijzigen',
            'Locatie alleen bij de registraties, nooit doorlopend',
            'Bewijsfoto\'s gekoppeld aan de klus',
            'Automatische rapportage voor elke afgesloten klus',
            'Volledige historie van de klussen per klant',
          ],
        },
      ],
      fr: [
        {
          h2: 'Le problème de coordination dans les entreprises avec des techniciens sur le terrain',
          body: 'Quand un technicien clôt une intervention et que le bureau ne l\'apprend qu\'en fin de journée, il ne sait pas s\'il faut envoyer du renfort ou clôturer le dossier. Quand la documentation est sur papier ou par message, reconstituer l\'historique d\'un client prend des heures, et la coordination par téléphone mange une partie de la journée qu\'on pourrait récupérer.',
        },
        {
          h2: 'Comment gérer les ordres de travail et les interventions sans appels',
          body: 'Un système numérique de gestion des interventions permet d\'assigner les ordres de travail directement au smartphone du technicien, avec priorité, consignes et historique du client déjà inclus. Le technicien travaille avec l\'app GeoTapp TimeTracker : il pointe, prend les photos de preuve et écrit ses notes, et le rapport se compose tout seul. Depuis le bureau, GeoTapp Flow assigne les interventions, reçoit les pointages dès qu\'ils arrivent et envoie au client le rapport scellé.',
          productLink: true,
        },
        {
          h2: 'Ce que doit savoir faire un logiciel pour installateurs et techniciens de terrain',
          body: 'Avant de choisir un outil de gestion pour votre équipe de techniciens, vérifiez qu\'il prend en charge :',
          listItems: [
            'L\'assignation et la modification des interventions à distance',
            'Une position enregistrée uniquement aux pointages, jamais en continu',
            'Des photos de preuve liées à l\'intervention',
            'Un rapport automatique pour chaque intervention clôturée',
            'L\'historique complet des interventions par client',
          ],
        },
      ],
      es: [
        {
          h2: 'El problema de coordinación en las empresas con técnicos de campo',
          body: 'Cuando un técnico cierra una intervención y la oficina se entera solo al final del día, no sabe si enviar refuerzos o cerrar el expediente. Cuando la documentación es en papel o por mensaje, reconstruir el historial de un cliente lleva horas, y la coordinación por teléfono se come una parte de la jornada que se podría recuperar.',
        },
        {
          h2: 'Cómo gestionar órdenes de trabajo e intervenciones sin llamadas',
          body: 'Un sistema digital de gestión de intervenciones permite asignar órdenes de trabajo directamente al smartphone del técnico, con prioridad, instrucciones e historial del cliente ya incluidos. El técnico trabaja con la app GeoTapp TimeTracker: ficha, hace las fotos de prueba y escribe las notas, y el informe se compone solo. Desde la oficina, GeoTapp Flow asigna las intervenciones, recibe los fichajes en cuanto llegan y envía al cliente el informe sellado.',
          productLink: true,
        },
        {
          h2: 'Qué debe saber hacer un software para instaladores y técnicos de campo',
          body: 'Antes de elegir una herramienta de gestión para tu equipo de técnicos, comprueba que admita:',
          listItems: [
            'La asignación y la modificación de las intervenciones a distancia',
            'Una posición registrada solo en los fichajes, nunca de forma continua',
            'Fotos de prueba vinculadas a la intervención',
            'Un informe automático por cada intervención cerrada',
            'El historial completo de intervenciones por cliente',
          ],
        },
      ],
      pt: [
        {
          h2: 'O problema de coordenação nas empresas com técnicos no terreno',
          body: 'Quando um técnico encerra uma intervenção e o escritório só o descobre no fim do dia, não sabe se deve enviar reforços ou fechar o processo. Quando a documentação é em papel ou por mensagem, reconstruir o histórico de um cliente demora horas, e a coordenação por telefone consome uma parte do dia que se poderia recuperar.',
        },
        {
          h2: 'Como gerir ordens de trabalho e intervenções sem telefonemas',
          body: 'Um sistema digital de gestão de intervenções permite atribuir ordens de trabalho diretamente ao smartphone do técnico, com prioridade, instruções e histórico do cliente já incluídos. O técnico trabalha com a app GeoTapp TimeTracker: pica o ponto, tira as fotos de prova e escreve as notas, e o relatório compõe-se sozinho. A partir do escritório, o GeoTapp Flow atribui as intervenções, recebe as picagens assim que chegam e envia ao cliente o relatório selado.',
          productLink: true,
        },
        {
          h2: 'O que deve saber fazer um programa para instaladores e técnicos no terreno',
          body: 'Antes de escolher uma ferramenta de gestão para a sua equipa de técnicos, verifique se suporta:',
          listItems: [
            'A atribuição e a alteração das intervenções à distância',
            'Uma posição registada só nas picagens, nunca de forma contínua',
            'Fotos de prova ligadas à intervenção',
            'Um relatório automático por cada intervenção encerrada',
            'O histórico completo de intervenções por cliente',
          ],
        },
      ],
    },
    product: {
      name: 'GeoTapp Flow',
      slug: 'geotapp-flow',
      ctaLabel: CTA_LABELS,
    },
  },
  sicurezza: {
    categoryId: 9,
    labels: {
      it: { title: 'Gestione presenze e documentazione per servizi di sicurezza - GeoTapp', description: 'Come documentare presenze, controlli e anomalie nei servizi di sicurezza, con la posizione solo alle timbrature.', heading: 'Gestione presenze e documentazione nei servizi di sicurezza' },
      en: { title: 'Attendance and documentation for security services - GeoTapp', description: 'How to document attendance, checks and incidents in security services, with position recorded only at clock-in.', heading: 'Attendance and documentation in security services' },
      de: { title: 'Anwesenheit und Dokumentation für Sicherheitsdienste - GeoTapp', description: 'Wie Sie Anwesenheit, Kontrollen und Vorfälle in Sicherheitsdiensten dokumentieren, mit der Position nur bei den Stempelungen.', heading: 'Anwesenheit und Dokumentation bei Sicherheitsdiensten' },
      fr: { title: 'Présences et documentation pour les services de sécurité - GeoTapp', description: 'Comment documenter présences, contrôles et incidents dans les services de sécurité, avec la position enregistrée uniquement aux pointages.', heading: 'Présences et documentation dans les services de sécurité' },
      es: { title: 'Presencias y documentación en seguridad privada - GeoTapp', description: 'Cómo documentar presencias, controles e incidencias en servicios de seguridad, con la posición registrada solo al fichar.', heading: 'Presencias y documentación en los servicios de seguridad' },
      pt: { title: 'Presenças e documentação em serviços de segurança - GeoTapp', description: 'Como documentar presenças, controlos e anomalias em serviços de segurança, com a posição registada só nas picagens.', heading: 'Presenças e documentação nos serviços de segurança' },
      nl: { title: 'Aanwezigheid en documentatie voor beveiligingsdiensten - GeoTapp', description: 'Hoe u aanwezigheid, controles en afwijkingen bij beveiligingsdiensten documenteert, met de locatie alleen bij de registraties.', heading: 'Aanwezigheidsbeheer en documentatie bij beveiligingsdiensten' },
      da: { title: 'Ressourcer til sikkerhedstjenester - GeoTapp', description: 'Artikler og guides til sikkerheds- og overvågningsvirksomheder.', heading: 'Ressourcer til sikkerhedstjenester' },
      sv: { title: 'Resurser för säkerhetstjänster - GeoTapp', description: 'Artiklar och guider för säkerhets- och bevakningsföretag.', heading: 'Resurser för säkerhetstjänster' },
      nb: { title: 'Ressurser for sikkerhetstjenester - GeoTapp', description: 'Artikler og veiledninger for sikkerhets- og overvåkingsbedrifter.', heading: 'Ressurser for sikkerhetstjenester' },
      ru: { title: 'Ресурсы для служб безопасности - GeoTapp', description: 'Статьи и руководства для охранных предприятий и служб наблюдения.', heading: 'Ресурсы для служб безопасности' },
    },
    intro: {
      it: 'Nelle aziende di sicurezza ogni turno e ogni controllo vanno documentati, e ogni anomalia va segnalata subito. Con telefonate e report cartacei, la centrale operativa ha sempre un quadro parziale e in ritardo. Questi articoli affrontano i temi operativi più rilevanti per responsabili di servizi di sicurezza.',
      en: 'In security companies every shift and every check must be documented, and every incident must be reported straight away. With phone calls and paper reports, the control room always has a partial and delayed picture. These guides cover the most relevant operational topics for security service managers.',
      de: 'In Sicherheitsunternehmen müssen jede Schicht und jede Kontrolle dokumentiert und jede Auffälligkeit sofort gemeldet werden. Mit Anrufen und Berichten auf Papier hat die Einsatzzentrale immer ein unvollständiges und verspätetes Bild. Diese Leitfäden behandeln die wichtigsten operativen Themen für Leiter von Sicherheitsdiensten.',
      fr: 'Dans les entreprises de sécurité, chaque vacation et chaque contrôle doivent être documentés, et chaque anomalie signalée tout de suite. Avec des appels et des rapports sur papier, la centrale a toujours une vision partielle et tardive. Ces guides couvrent les thèmes opérationnels essentiels pour les responsables de services de sécurité.',
      es: 'En las empresas de seguridad cada turno y cada control deben documentarse, y cada incidencia debe comunicarse enseguida. Con llamadas e informes en papel, la central siempre tiene un panorama parcial y tardío. Estas guías abordan los temas operativos más relevantes para responsables de servicios de seguridad.',
      pt: 'Nas empresas de segurança cada turno e cada controlo têm de ser documentados, e cada anomalia tem de ser comunicada logo. Com telefonemas e relatórios em papel, a central tem sempre um quadro parcial e tardio. Estes guias abordam os temas operacionais mais relevantes para responsáveis de serviços de segurança.',
      nl: 'Bij beveiligingsbedrijven moeten elke dienst en elke controle worden gedocumenteerd, en elke afwijking moet meteen worden gemeld. Met telefoontjes en papieren rapporten heeft de meldkamer altijd een onvolledig en vertraagd beeld. Deze artikelen behandelen de meest relevante operationele onderwerpen voor verantwoordelijken van beveiligingsdiensten.',
      da: 'In security companies every patrol must be documented, every agent must be locatable, and every incident must be reported immediately. These guides cover the most relevant operational topics for security service managers.',
      sv: 'In security companies every patrol must be documented, every agent must be locatable, and every incident must be reported immediately. These guides cover the most relevant operational topics for security service managers.',
      nb: 'In security companies every patrol must be documented, every agent must be locatable, and every incident must be reported immediately. These guides cover the most relevant operational topics for security service managers.',
      ru: 'В охранных предприятиях каждый обход должен быть задокументирован, каждый сотрудник должен быть отслеживаемым, а каждый инцидент должен быть зафиксирован немедленно. Эти руководства охватывают наиболее актуальные операционные темы для руководителей охранных служб.',
    },
    sections: {
      it: [
        {
          h2: 'Le sfide operative dei servizi di sicurezza e vigilanza',
          body: 'Senza un sistema digitale, la centrale non sa se un agente ha preso servizio al posto giusto, se un controllo è stato fatto o se c\'è stata un\'anomalia, finché qualcuno non telefona. Il cliente finale non ha prove concrete del servizio, e in caso di contestazione non c\'è nulla da mostrare. Per un\'azienda di sicurezza, poter documentare il servizio fa parte del servizio stesso.',
        },
        {
          h2: 'Come si documenta il servizio senza sorvegliare gli agenti',
          body: 'Gli agenti timbrano presa e fine servizio dallo smartphone e, ai punti di controllo, scattano la foto di prova: ogni gesto registra ora e posizione, e fra un gesto e l\'altro non si registra nulla in automatico. La centrale vede le timbrature appena arrivano e riceve le segnalazioni con foto. GeoTapp TimeTracker è progettato per questo: presenze con la posizione alla timbratura, foto dei controlli e messaggi con la centrale.',
          productLink: true,
        },
        {
          h2: 'Cosa deve garantire il software per servizi di sicurezza',
          body: 'Nella scelta di uno strumento per la gestione operativa dei servizi di sicurezza, verifica che supporti:',
          listItems: [
            'Presa e fine servizio con posizione e ora registrate',
            'Foto di prova con ora e posizione ai punti di controllo',
            'Segnalazione anomalie con foto e geolocalizzazione',
            'Reportistica sigillata esportabile per il cliente finale',
            'Avviso se un turno resta aperto',
          ],
        },
      ],
      en: [
        {
          h2: 'The operational challenges of security and surveillance services',
          body: 'Without a digital system, the control room does not know whether a guard has started the shift at the right post, whether a check has been done or whether an incident has occurred, until someone phones in. The end client has no concrete proof of service, and in case of dispute there is nothing to show. For a security company, being able to document the service is part of the service itself.',
        },
        {
          h2: 'How to document the service without watching the guards',
          body: 'Guards clock in and out of their post from their smartphone and, at the checkpoints, take a proof photo: each action records the time and position, and nothing is recorded automatically between one action and the next. The control room sees clock-ins as they arrive and receives reports with photos. GeoTapp TimeTracker is built for this: attendance with the position at clock-in, photos at the checkpoints and messages with the control room.',
          productLink: true,
        },
        {
          h2: 'What security service management software must guarantee',
          body: 'When choosing an operational management tool for security services, check that it supports:',
          listItems: [
            'Clock-in and clock-out with position and time recorded',
            'Proof photos with time and position at the checkpoints',
            'Incident reporting with photos and the position at that moment',
            'Exportable sealed reports for end clients',
            'An alert if a shift is left open',
          ],
        },
      ],
      de: [
        {
          h2: 'Die Herausforderungen im Alltag von Sicherheits- und Wachdiensten',
          body: 'Ohne digitales System weiß die Leitstelle nicht, ob ein Mitarbeiter den Dienst am richtigen Posten angetreten hat, ob eine Kontrolle erfolgt ist oder ob es eine Auffälligkeit gab, bis jemand anruft. Der Endkunde hat keinen konkreten Nachweis über den Dienst, und im Streitfall gibt es nichts zu zeigen. Für ein Sicherheitsunternehmen gehört die Dokumentation des Dienstes zum Dienst selbst.',
        },
        {
          h2: 'So dokumentieren Sie den Dienst, ohne die Mitarbeitenden zu überwachen',
          body: 'Die Mitarbeitenden stempeln Dienstbeginn und Dienstende mit dem Smartphone und machen an den Kontrollpunkten ein Nachweisfoto: Jede Handlung erfasst Uhrzeit und Standort, und zwischen zwei Handlungen wird automatisch nichts aufgezeichnet. Die Leitstelle sieht die Buchungen, sobald sie eintreffen, und erhält Meldungen mit Fotos. GeoTapp TimeTracker ist dafür gebaut: Anwesenheit mit dem Standort bei der Buchung, Fotos an den Kontrollpunkten und Nachrichten an die Leitstelle.',
          productLink: true,
        },
        {
          h2: 'Was eine Software für Sicherheitsdienste leisten muss',
          body: 'Wenn Sie ein Werkzeug für die Einsatzverwaltung von Sicherheitsdiensten wählen, prüfen Sie, ob es Folgendes kann:',
          listItems: [
            'Dienstbeginn und Dienstende mit erfasstem Standort und erfasster Uhrzeit',
            'Nachweisfotos mit Uhrzeit und Standort an den Kontrollpunkten',
            'Meldung von Auffälligkeiten mit Fotos und dem Standort in diesem Moment',
            'Exportierbare, versiegelte Berichte für den Endkunden',
            'Ein Hinweis, wenn eine Schicht offen bleibt',
          ],
        },
      ],
      nl: [
        {
          h2: 'De operationele uitdagingen van beveiligings- en bewakingsdiensten',
          body: 'Zonder digitaal systeem weet de meldkamer niet of een bewaker op de juiste plek zijn dienst is begonnen, of een controle is gedaan of dat er een afwijking is geweest, totdat iemand belt. De eindklant heeft geen concreet bewijs van de dienst, en bij een betwisting is er niets om te tonen. Voor een beveiligingsbedrijf maakt het kunnen documenteren van de dienst deel uit van de dienst zelf.',
        },
        {
          h2: 'Hoe u de dienst documenteert zonder de bewakers te bewaken',
          body: 'De bewakers registreren begin en einde van de dienst met hun smartphone en maken bij de controlepunten de bewijsfoto: elk gebaar legt tijd en locatie vast, en tussen twee gebaren in wordt niets automatisch vastgelegd. De meldkamer ziet de registraties zodra ze binnenkomen en ontvangt de meldingen met foto\'s. GeoTapp TimeTracker is hiervoor ontworpen: aanwezigheid met de locatie bij de registratie, foto\'s van de controles en berichten met de meldkamer.',
          productLink: true,
        },
        {
          h2: 'Wat software voor beveiligingsdiensten moet garanderen',
          body: 'Controleer bij de keuze van een hulpmiddel voor het operationele beheer van beveiligingsdiensten dat het het volgende ondersteunt:',
          listItems: [
            'Begin en einde van de dienst met vastgelegde locatie en tijd',
            'Bewijsfoto\'s met tijd en locatie bij de controlepunten',
            'Melding van afwijkingen met foto en locatie',
            'Verzegelde rapportage, exporteerbaar voor de eindklant',
            'Melding als een dienst open blijft staan',
          ],
        },
      ],
      fr: [
        {
          h2: 'Les défis opérationnels des services de sécurité et de surveillance',
          body: 'Sans système numérique, la centrale ne sait pas si un agent a pris son service au bon poste, si un contrôle a été fait ou s\'il y a eu une anomalie, tant que quelqu\'un n\'appelle pas. Le client final n\'a aucune preuve concrète du service, et en cas de contestation il n\'y a rien à montrer. Pour une société de sécurité, pouvoir documenter le service fait partie du service lui-même.',
        },
        {
          h2: 'Comment documenter le service sans surveiller les agents',
          body: 'Les agents pointent la prise et la fin de service depuis leur smartphone et, aux points de contrôle, prennent la photo de preuve : chaque geste enregistre l\'heure et la position, et entre deux gestes rien n\'est enregistré automatiquement. La centrale voit les pointages dès qu\'ils arrivent et reçoit les signalements avec photos. GeoTapp TimeTracker est conçu pour cela : présences avec la position au pointage, photos des contrôles et messages avec la centrale.',
          productLink: true,
        },
        {
          h2: 'Ce que doit garantir le logiciel pour les services de sécurité',
          body: 'Pour choisir un outil de gestion opérationnelle des services de sécurité, vérifiez qu\'il prend en charge :',
          listItems: [
            'La prise et la fin de service avec position et heure enregistrées',
            'Des photos de preuve avec heure et position aux points de contrôle',
            'Le signalement d\'anomalies avec photo et géolocalisation',
            'Des rapports scellés exportables pour le client final',
            'Une alerte si une vacation reste ouverte',
          ],
        },
      ],
      es: [
        {
          h2: 'Los retos operativos de los servicios de seguridad y vigilancia',
          body: 'Sin un sistema digital, la central no sabe si un vigilante ha empezado el servicio en el puesto correcto, si se ha hecho un control o si ha habido una incidencia, hasta que alguien llama. El cliente final no tiene pruebas concretas del servicio y, en caso de disputa, no hay nada que mostrar. Para una empresa de seguridad, poder documentar el servicio forma parte del propio servicio.',
        },
        {
          h2: 'Cómo se documenta el servicio sin vigilar a los vigilantes',
          body: 'Los vigilantes fichan el inicio y el fin del servicio desde el smartphone y, en los puntos de control, hacen la foto de prueba: cada gesto registra hora y posición, y entre un gesto y otro no se registra nada de forma automática. La central ve los fichajes en cuanto llegan y recibe los avisos con fotos. GeoTapp TimeTracker está pensado para esto: presencias con la posición al fichar, fotos de los controles y mensajes con la central.',
          productLink: true,
        },
        {
          h2: 'Qué debe garantizar el software para servicios de seguridad',
          body: 'Para elegir una herramienta de gestión operativa de servicios de seguridad, comprueba que admita:',
          listItems: [
            'Inicio y fin de servicio con posición y hora registradas',
            'Fotos de prueba con hora y posición en los puntos de control',
            'Aviso de incidencias con foto y la posición en ese momento',
            'Informes sellados exportables para el cliente final',
            'Una alerta si un servicio queda abierto',
          ],
        },
      ],
      pt: [
        {
          h2: 'Os desafios operacionais dos serviços de segurança e vigilância',
          body: 'Sem um sistema digital, a central não sabe se um vigilante iniciou o serviço no posto certo, se foi feito um controlo ou se houve uma anomalia, até alguém telefonar. O cliente final não tem provas concretas do serviço e, em caso de contestação, não há nada para mostrar. Para uma empresa de segurança, poder documentar o serviço faz parte do próprio serviço.',
        },
        {
          h2: 'Como se documenta o serviço sem vigiar os vigilantes',
          body: 'Os vigilantes picam o início e o fim do serviço a partir do smartphone e, nos pontos de controlo, tiram a foto de prova: cada gesto regista hora e posição, e entre um gesto e outro não se regista nada automaticamente. A central vê as picagens assim que chegam e recebe os avisos com fotos. O GeoTapp TimeTracker foi pensado para isto: presenças com a posição na picagem, fotos dos controlos e mensagens com a central.',
          productLink: true,
        },
        {
          h2: 'O que deve garantir o programa para serviços de segurança',
          body: 'Para escolher uma ferramenta de gestão operacional de serviços de segurança, verifique se suporta:',
          listItems: [
            'Início e fim de serviço com posição e hora registadas',
            'Fotos de prova com hora e posição nos pontos de controlo',
            'Aviso de anomalias com foto e a posição nesse momento',
            'Relatórios selados exportáveis para o cliente final',
            'Um alerta se um serviço ficar aberto',
          ],
        },
      ],
    },
    product: {
      name: 'GeoTapp TimeTracker',
      slug: 'geotapp-timetracker',
      ctaLabel: CTA_LABELS,
    },
  },
};

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#8217;/g, '\u2019').replace(/&#8220;/g, '\u201C').replace(/&#8221;/g, '\u201D').replace(/&nbsp;/g, ' ').replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n))).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16))).trim();
}

/** Taglia all'ultima parola intera entro `max` caratteri e chiude con i puntini. */
function cutAtWord(text: string, max: number): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).trimEnd().replace(/[,;:.\-–]$/, '')}…`;
}

// ?categories= sul blog risponde sempre vuoto e la categoria qui e' quella ITALIANA:
// getPostsInCategory traduce la categoria nella lingua della pagina e filtra sull'indice.
async function fetchAllPostsForCategory(locale: string, categoryId: number) {
  const posts = await getPostsInCategory(categoryId, locale);
  return posts.map((p) => ({
    id: p.id,
    title: stripHtml(p.title?.rendered ?? ''),
    excerpt: cutAtWord(stripHtml(p.excerpt?.rendered ?? ''), 180),
    url: blogPostPath(p.link, p.slug),
    date: p.date,
  }));
}

type Params = { locale: string; settore: string };

export async function generateStaticParams(): Promise<Params[]> {
  /* Guardia di build: SETTORI_CON_RISORSE decide quali settori mostrano il pulsante
   * "Guide e articoli" nell'hero (SettorePageLayout). Se qualcuno ci aggiunge un
   * settore che qui non ha una voce in SETTORE_CONFIG, la build si ferma invece di
   * pubblicare un pulsante che porta in 404, com'e' successo il 13/08/2026 (96 URL
   * rotte, 6 settori x 16 lingue). Un controllo a livello di tipi qui non serve:
   * SETTORE_CONFIG e' dichiarato Record<string, ...> e quindi accetta ogni chiave. */
  const senzaContenuto = SETTORI_CON_RISORSE.filter((s) => !SETTORE_CONFIG[s]);
  if (senzaContenuto.length > 0) {
    throw new Error(
      `SETTORI_CON_RISORSE elenca settori senza voce in SETTORE_CONFIG: ${senzaContenuto.join(', ')}. ` +
        'Aggiungi il contenuto qui oppure toglili da src/content/settori/risorse-disponibili.ts.'
    );
  }

  const settori = Object.keys(SETTORE_CONFIG);
  return SUPPORTED_LOCALES.flatMap((locale) =>
    settori.map((settore) => ({ locale, settore }))
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, settore } = await params;
  const config = SETTORE_CONFIG[settore];
  if (!config) return {};
  const resolvedLocale = (locale ?? DEFAULT_LOCALE) as AppLocale;
  const label = config.labels[resolvedLocale] ?? config.labels['en'];
  return {
    title: { absolute: label.title },
    description: label.description,
    alternates: buildLocaleAlternates(resolvedLocale, `/settori/${settore}/risorse/`),
  };
}

const BACK_LABELS: Record<string, string> = {
  it: '← Torna al settore', en: '← Back to sector', de: '← Zurück zur Branche',
  fr: '← Retour au secteur', es: '← Volver al sector', pt: '← Voltar ao setor',
  nl: '← Terug naar sector', da: '← Tilbage til sektor', sv: '← Tillbaka till sektor',
  nb: '← Tilbake til sektor', ru: '← Назад к разделу',
};

const READ_LABELS: Record<string, string> = {
  it: 'Leggi →', en: 'Read →', de: 'Lesen →', fr: 'Lire →',
  es: 'Leer →', pt: 'Ler →', nl: 'Lees →', da: 'Læs →',
  sv: 'Läs →', nb: 'Les →', ru: 'Читать →',
};

const EMPTY_LABELS: Record<string, string> = {
  it: 'Nessun articolo disponibile al momento.',
  en: 'No articles available at the moment.',
  de: 'Derzeit keine Artikel verfügbar.',
  fr: 'Aucun article disponible pour le moment.',
  es: 'No hay artículos disponibles por el momento.',
  pt: 'Nenhum artigo disponível no momento.',
  nl: 'Momenteel geen artikelen beschikbaar.',
  da: 'Ingen artikler tilgængelige i øjeblikket.',
  sv: 'Inga artiklar tillgängliga för tillfället.',
  nb: 'Ingen artikler tilgjengelige for øyeblikket.',
  ru: 'Статьи временно отсутствуют.',
};

const PRODUCT_PAGE_LABELS: Record<string, string> = {
  it: 'Strumento consigliato per questo settore',
  en: 'Recommended tool for this sector',
  de: 'Empfohlenes Werkzeug für diese Branche',
  fr: 'Outil recommandé pour ce secteur',
  es: 'Herramienta recomendada para este sector',
  pt: 'Ferramenta recomendada para este setor',
  nl: 'Aanbevolen tool voor deze sector',
  da: 'Anbefalet værktøj til denne sektor',
  sv: 'Rekommenderat verktyg för denna sektor',
  nb: 'Anbefalt verktøy for denne sektoren',
  ru: 'Рекомендуемый инструмент для этого сектора',
};

// Box "strumento gratuito": collega le pagine settore-risorse alla risorsa
// GPS lavoratori UE (asset linkabile, rilevante per ogni settore che manda
// squadre fuori sede / all'estero).
const GPS_CALLOUT: Record<string, { text: string; cta: string }> = {
  it: { text: 'Mandi squadre all’estero? Lo strumento gratuito GPS lavoratori UE ti dice cosa serve per essere in regola, Paese per Paese.', cta: 'Apri la guida →' },
  en: { text: 'Sending crews abroad? The free GPS on workers in the EU tool shows what you need to be compliant, country by country.', cta: 'Open the guide →' },
  de: { text: 'Schicken Sie Teams ins Ausland? Das kostenlose Werkzeug zu GPS bei Beschäftigten in der EU zeigt Ihnen Land für Land, was Sie brauchen, um auf der sicheren Seite zu sein.', cta: 'Zum Leitfaden →' },
  fr: { text: 'Vous envoyez des équipes à l’étranger ? L’outil gratuit GPS sur les travailleurs en UE indique ce qu’il faut, pays par pays.', cta: 'Ouvrir le guide →' },
  es: { text: '¿Envías equipos al extranjero? La herramienta gratuita GPS para trabajadores en la UE indica qué necesitas, país por país.', cta: 'Abrir la guía →' },
  pt: { text: 'Envia equipas para o estrangeiro? A ferramenta gratuita GPS dos trabalhadores na UE mostra o que é preciso, país a país.', cta: 'Abrir o guia →' },
  nl: { text: 'Stuurt u teams naar het buitenland? Met het gratis hulpmiddel gps bij werknemers in de EU ziet u per land wat nodig is om in orde te zijn.', cta: 'Open de gids →' },
  da: { text: 'Sender du hold til udlandet? Det gratis værktøj GPS på medarbejdere i EU viser, hvad der kræves, land for land.', cta: 'Åbn guiden →' },
  sv: { text: 'Skickar du team utomlands? Det gratis verktyget GPS på anställda i EU visar vad som krävs, land för land.', cta: 'Öppna guiden →' },
  nb: { text: 'Sender du team til utlandet? Det gratis verktøyet GPS på ansatte i EU viser hva som kreves, land for land.', cta: 'Åpne veiledningen →' },
  ru: { text: 'Отправляете бригады за рубеж? Бесплатный инструмент «GPS сотрудников в ЕС» показывает, что нужно, страна за страной.', cta: 'Открыть гид →' },
};

// Chiusura fotografica finale: un'immagine per settore, stessa convenzione
// gia' usata per queste tre categorie nel resto del sito (bg1=installatori,
// bg2=pulizie, bg3=sicurezza — vedi settore-pulizie.html nel mockup).
const END_BG: Record<string, string> = {
  installatori: '/bg1.webp',
  pulizie: '/bg2.webp',
  sicurezza: '/bg3.webp',
};

// Ritmo chiaro/caldo delle sezioni, come nel mockup generale.
function secTone(i: number): string {
  return i % 2 === 0 ? 'sec' : 'sec warm';
}

export default async function RisorseSettorePage({ params }: { params: Promise<Params> }) {
  const { locale, settore } = await params;
  const config = SETTORE_CONFIG[settore];
  if (!config) return notFound();

  const resolvedLocale = (locale ?? DEFAULT_LOCALE) as AppLocale;
  const label = config.labels[resolvedLocale] ?? config.labels['en'];
  const posts = await fetchAllPostsForCategory(resolvedLocale, config.categoryId);
  const backLabel = BACK_LABELS[resolvedLocale] ?? BACK_LABELS['en'];
  const readLabel = READ_LABELS[resolvedLocale] ?? READ_LABELS['en'];
  const intro = config.intro[resolvedLocale] ?? config.intro['en'];
  const ctaLabel = config.product.ctaLabel[resolvedLocale] ?? config.product.ctaLabel['en'];
  const productPageLabel = PRODUCT_PAGE_LABELS[resolvedLocale] ?? PRODUCT_PAGE_LABELS['en'];
  const emptyLabel = EMPTY_LABELS[resolvedLocale] ?? EMPTY_LABELS['en'];
  const sections = config.sections[resolvedLocale] ?? config.sections['en'] ?? [];
  const productHref = `/${resolvedLocale}/products/${config.product.slug}/`;
  const pageUrl = `https://geotapp.com/${resolvedLocale}/settori/${settore}/risorse/`;
  const gpsHref = localizePath('/risorse/gps-lavoratori-ue/', resolvedLocale);
  const gpsCallout = GPS_CALLOUT[resolvedLocale] ?? GPS_CALLOUT['en'];
  const homeHref = `/${resolvedLocale}/`;
  const settoreHref = `/${resolvedLocale}/settori/${settore}/`;
  const endBg = END_BG[settore] ?? '/bg2.webp';

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      { '@type': 'ListItem', position: 2, name: label.heading, item: pageUrl },
    ],
  };

  const itemListJsonLd = posts.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: label.heading,
        mainEntityOfPage: pageUrl,
        numberOfItems: posts.length,
        itemListElement: posts.map((post, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `https://geotapp.com${post.url}`,
          name: post.title,
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {itemListJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
      )}

      <div className="lp-l lp-risorsa-settore">
        <section className="ph">
          <div className="crumb">
            <div className="w">
              <Link href={homeHref}>GeoTapp</Link> / <Link href={settoreHref}>{backLabel}</Link> / {label.heading}
            </div>
          </div>
          <div className="w">
            <h1>{label.heading}</h1>
            <p className="lede">{intro}</p>
          </div>
        </section>

        <section className={secTone(0)}>
          <div className="w">
            <div className="ctain">
              <p>{gpsCallout.text}</p>
              <Link className="b1" href={gpsHref}>{gpsCallout.cta}</Link>
            </div>
          </div>
        </section>

        {sections.map((section, i) => (
          <section key={i} className={secTone(i + 1)}>
            <div className="w">
              <h2>{section.h2}</h2>
              <p>
                {section.body}{section.productLink && (
                  // Prima era «, Nome prodotto» attaccato al punto finale del paragrafo.
                  <>{' '}<Link href={productHref}>{config.product.name}&nbsp;&rarr;</Link></>
                )}
              </p>
              {section.listItems && (
                <ul className="rows">
                  {section.listItems.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}

        <section className={secTone(sections.length + 1)}>
          <div className="w">
            {posts.length === 0 ? (
              <p>{emptyLabel}</p>
            ) : (
              <div className="res">
                {posts.map((post, i) => (
                  <Link key={post.id} href={post.url} className={`r d${(i % 4) + 1}`}>
                    <span className="nn">{String(i + 1).padStart(2, '0')}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="go" aria-hidden="true">{readLabel}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="bg" src={endBg} alt="" aria-hidden="true" loading="lazy" />
          <div className="ov" />
          <div className="w">
            <p className="kk k">{productPageLabel}</p>
            <h2 className="r">{ctaLabel.discover} {config.product.name}</h2>
            <div className="acts r d1">
              <Link className="b1" href={productHref}>{ctaLabel.cta}</Link>
            </div>
          </div>
        </section>

        {/* ── citati su: solo stampa vera. "Presente su" (directory) resta nel footer, non si ripete qui ── */}
        <section className="dirs">
          <div className="w"><p className="kk k r dirs-kk">{featuredLabel(resolvedLocale)}</p></div>
          <div className="host">
            <FeaturedIn locale={resolvedLocale} />
          </div>
        </section>
      </div>
    </>
  );
}
