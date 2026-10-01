

import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import AppPage from '../../../products/geotapp-timetracker/page';
import BlogHighlights from '@/components/BlogHighlights';
import SettoriLinks from '@/components/SettoriLinks';
import FaqFromSchema from '@/components/FaqFromSchema';
import UpdatedOnLine, { updatedIsoFor } from '@/components/seo/UpdatedOnLine';
import { type AppLocale } from '@/lib/i18n/config';
import {
  EUR_PRICES,
  convertEurToLocale,
  getCurrencyForLocale,
} from '@/lib/pricing';

const appMeta: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp TimeTracker - App Timbratura GPS per Tecnici sul Campo', description: 'GeoTapp TimeTracker è l\'app per i tecnici sul campo: timbrature con posizione e ora, foto di prova, note, report settimanali. Su Android e iOS, collegata a Flow.' },
  en: { title: 'GeoTapp TimeTracker: GPS clock-in app for field crews', description: 'Location is recorded when your crew clocks in, takes a break or clocks out, and nothing automatically in between. Photos attach to the job. 14 days free.' },
  de: { title: 'GeoTapp TimeTracker: Stempel-App mit GPS für Teams im Außendienst', description: 'Der Standort wird bei Beginn, Pause und Ende erfasst, dazwischen automatisch nichts. Fotos hängen am Auftrag. 14 Tage kostenlos.' },
  fr: { title: 'GeoTapp TimeTracker : pointage GPS pour équipes terrain', description: 'La position est enregistrée à l\'arrivée, à la pause et au départ, rien d\'automatique entre les deux. Les photos sont liées au chantier. 14 jours gratuits.' },
  es: { title: 'GeoTapp TimeTracker: fichaje con GPS para equipos de campo', description: 'La ubicación se registra a la entrada, en la pausa y a la salida, nada automático entre medias. Las fotos van ligadas a la obra. 14 días gratis.' },
  nl: { title: 'GeoTapp TimeTracker - App voor registratie met locatie', description: 'GeoTapp TimeTracker is de app voor monteurs in het veld: registraties met locatie en tijd, bewijsfoto\'s, notities, weekrapporten. Op Android en iOS, gekoppeld aan Flow.' },
  pt: { title: 'GeoTapp TimeTracker: picagem com GPS para equipas no terreno', description: 'A localização é registada à entrada, na pausa e à saída, nada de automático pelo meio. As fotografias ficam ligadas à obra. 14 dias grátis.' },
  sv: { title: 'GeoTapp TimeTracker: stämpelapp för team på fältet', description: 'Positionen sparas vid start, rast och slut, och inget automatiskt där emellan. Foton hör till uppdraget. 14 dagar gratis.' },
  da: { title: 'GeoTapp TimeTracker: stempel-app med GPS til hold i marken', description: 'Positionen registreres ved start, pause og slut, og intet automatisk imellem. Fotos hænger på opgaven. 14 dage gratis.' },
  nb: { title: 'GeoTapp TimeTracker - GPS Tidsregistrerings-App for Serviceteknikere', description: 'GeoTapp TimeTracker er mobilappen for serviceteknikere. GPS inn- og utsjekking, fotodokumentasjon, ukentlige rapporter og sanntidssynkronisering med Flow.' },
  ru: { title: 'GeoTapp TimeTracker: GPS-учёт времени для выездных техников', description: 'GeoTapp TimeTracker, мобильное приложение для выездных техников. GPS отметки, фотодоказательства, еженедельные отчёты и синхронизация с Flow в реальном времени.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = appMeta[locale] ?? appMeta[locale.startsWith('en-') ? 'en' : 'it'];
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: buildLocaleAlternates(locale, '/products/geotapp-timetracker/'),
    openGraph: {
      title: m.title,
      description: m.description,
      url: `https://geotapp.com/${locale}/products/geotapp-timetracker/`,
      type: 'website',
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: m.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.description,
    },
  };
}

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const APP_FAQ: Record<string, object> = {
  it: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Cos\'è GeoTapp TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker è l\'app mobile per tecnici che registra presenze, attività e prove fotografiche direttamente dal campo. Tutto finisce nel report sigillato, che il cliente verifica da solo con GeoTapp Verifier.' } },
      { '@type': 'Question', name: 'Cosa succede se manca la rete?', acceptedAnswer: { '@type': 'Answer', text: 'La timbratura resta salvata sul telefono e parte da sola quando torna il segnale, con l\'ora in cui è stata fatta. Finché non arriva, in Flow non si vede.' } },
      { '@type': 'Question', name: 'Come si differenzia GeoTapp TimeTracker da una semplice app di timbratura?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker non è solo una timbratura: ogni turno, con le sue posizioni, le foto di prova e le note, finisce in un report sigillato con impronte crittografiche. Il cliente lo verifica da solo: qualsiasi modifica successiva, anche da parte dell\'amministratore, è rilevabile.' } },
      { '@type': 'Question', name: 'GeoTapp TimeTracker funziona su Android e iOS?', acceptedAnswer: { '@type': 'Answer', text: 'Sì. L\'app è su Google Play e App Store. Serve Android 8.0 o successivo, oppure iOS 26.2 o successivo.' } },
      { '@type': 'Question', name: 'GeoTapp TimeTracker rispetta il GDPR?', acceptedAnswer: { '@type': 'Answer', text: 'È costruito per starci dentro: registra la posizione solo quando il lavoratore timbra (entrata, pause, uscita) o scatta una foto di prova, mai in modo continuo, e non chiede nemmeno il permesso di leggere la posizione in background. Il dipendente vede le sue timbrature e i suoi report nell\'app. Informativa e, dove serve, accordo sindacale restano a carico del datore di lavoro.' } },
    ],
  },
  en: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is GeoTapp TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker is the mobile app for field technicians that records attendance, activities and photo evidence directly from the field. It all ends up in the sealed report, which the client verifies alone with GeoTapp Verifier.' } },
      { '@type': 'Question', name: 'What happens if there is no signal?', acceptedAnswer: { '@type': 'Answer', text: 'The clock-in stays saved on the phone and is sent on its own when the signal returns, with the time at which it was made. Until it arrives, it does not show in Flow.' } },
      { '@type': 'Question', name: 'How does GeoTapp TimeTracker differ from a simple time-tracking app?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker is not just a clock-in: every shift, with its locations, proof photos and notes, ends up in a report sealed with cryptographic fingerprints. The client verifies it alone: any later modification, even by the administrator, is detectable.' } },
      { '@type': 'Question', name: 'Does GeoTapp TimeTracker work on Android and iOS?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The app is on Google Play and the App Store. It needs Android 8.0 or later, or iOS 26.2 or later.' } },
      { '@type': 'Question', name: 'Does GeoTapp TimeTracker respect the GDPR?', acceptedAnswer: { '@type': 'Answer', text: 'It is built to stay within it: it records location only when the worker clocks in (start, breaks, finish) or takes a proof photo, never continuously, and it does not even ask for permission to read location in the background. Employees see their clock-ins and their reports in the app. The notice and, where needed, a union agreement remain the employer\'s responsibility.' } },
    ],
  },
  de: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist GeoTapp TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker ist die mobile App für Techniker im Außendienst, die Anwesenheit, Tätigkeiten und Nachweisfotos direkt vor Ort erfasst. Alles landet im versiegelten Bericht, den der Kunde selbst mit GeoTapp Verifier prüft.' } },
      { '@type': 'Question', name: 'Was passiert, wenn kein Netz da ist?', acceptedAnswer: { '@type': 'Answer', text: 'Die Buchung bleibt auf dem Telefon gespeichert und wird von selbst gesendet, sobald wieder Empfang besteht, mit der Uhrzeit, zu der sie erfasst wurde. Bis sie ankommt, ist sie in Flow nicht zu sehen.' } },
      { '@type': 'Question', name: 'Wie unterscheidet sich GeoTapp TimeTracker von einer einfachen Stempel-App?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker ist nicht nur eine Stempeluhr: Jede Schicht mit ihren Standorten, Nachweisfotos und Notizen landet in einem Bericht, der mit kryptografischen Fingerabdrücken versiegelt ist. Der Kunde prüft ihn selbst: Jede spätere Änderung, auch durch den Administrator, ist erkennbar.' } },
      { '@type': 'Question', name: 'Läuft GeoTapp TimeTracker auf Android und iOS?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Die App gibt es bei Google Play und im App Store. Sie braucht Android 8.0 oder neuer, oder iOS 26.2 oder neuer.' } },
      { '@type': 'Question', name: 'Hält GeoTapp TimeTracker die DSGVO ein?', acceptedAnswer: { '@type': 'Answer', text: 'Es ist so gebaut, dass es innerhalb ihrer Grenzen bleibt: Es erfasst den Standort nur, wenn die Person stempelt (Beginn, Pausen, Ende) oder ein Nachweisfoto aufnimmt, nie fortlaufend, und fragt nicht einmal nach der Berechtigung, den Standort im Hintergrund zu lesen. Die Beschäftigten sehen ihre Buchungen und ihre Berichte in der App. Information und, wo erforderlich, Betriebsvereinbarung bleiben Sache des Arbeitgebers.' } },
    ],
  },
  fr: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Qu\'est-ce que GeoTapp TimeTracker ?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker est l\'application mobile pour les techniciens, qui enregistre présences, activités et photos de preuve directement sur le terrain. Tout se retrouve dans le rapport scellé, que le client vérifie lui-même avec GeoTapp Verifier.' } },
      { '@type': 'Question', name: 'Que se passe-t-il s\'il n\'y a pas de réseau ?', acceptedAnswer: { '@type': 'Answer', text: 'Le pointage reste enregistré sur le téléphone et part tout seul quand le signal revient, avec l\'heure à laquelle il a été fait. Tant qu\'il n\'est pas arrivé, il n\'apparaît pas dans Flow.' } },
      { '@type': 'Question', name: 'En quoi GeoTapp TimeTracker diffère-t-il d\'une simple application de pointage ?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker n\'est pas seulement un pointage : chaque service, avec ses positions, ses photos de preuve et ses notes, se retrouve dans un rapport scellé par des empreintes cryptographiques. Le client le vérifie lui-même : toute modification ultérieure, même de la part de l\'administrateur, est détectable.' } },
      { '@type': 'Question', name: 'GeoTapp TimeTracker fonctionne-t-il sur Android et iOS ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. L\'application est sur Google Play et l\'App Store. Elle demande Android 8.0 ou plus récent, ou iOS 26.2 ou plus récent.' } },
      { '@type': 'Question', name: 'GeoTapp TimeTracker respecte-t-il le RGPD ?', acceptedAnswer: { '@type': 'Answer', text: 'Il est conçu pour rester dans ce cadre : il enregistre la position uniquement quand le salarié pointe (arrivée, pauses, départ) ou prend une photo de preuve, jamais en continu, et ne demande même pas l\'autorisation de lire la position en arrière-plan. Le salarié voit ses pointages et ses rapports dans l\'application. L\'information et, lorsqu\'elle est requise, la consultation des représentants du personnel restent à la charge de l\'employeur.' } },
    ],
  },
  es: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: '¿Qué es GeoTapp TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker es la aplicación móvil para técnicos que registra asistencia, actividades y fotos de prueba directamente sobre el terreno. Todo acaba en el informe sellado, que el cliente verifica por sí mismo con GeoTapp Verifier.' } },
      { '@type': 'Question', name: '¿Qué pasa si no hay cobertura?', acceptedAnswer: { '@type': 'Answer', text: 'El fichaje queda guardado en el teléfono y sale solo cuando vuelve la señal, con la hora en que se hizo. Hasta que llega, no se ve en Flow.' } },
      { '@type': 'Question', name: '¿En qué se diferencia GeoTapp TimeTracker de una simple aplicación de fichaje?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker no es solo un fichaje: cada jornada, con sus ubicaciones, las fotos de prueba y las notas, acaba en un informe sellado con huellas criptográficas. El cliente lo verifica por sí mismo: cualquier modificación posterior, incluso por parte del administrador, es detectable.' } },
      { '@type': 'Question', name: '¿GeoTapp TimeTracker funciona en Android e iOS?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. La aplicación está en Google Play y App Store. Requiere Android 8.0 o posterior, o iOS 26.2 o posterior.' } },
      { '@type': 'Question', name: '¿GeoTapp TimeTracker cumple el RGPD?', acceptedAnswer: { '@type': 'Answer', text: 'Está diseñado para moverse dentro de ese marco: registra la ubicación solo cuando el trabajador ficha (entrada, pausas, salida) o hace una foto de prueba, nunca de forma continua, y ni siquiera pide el permiso para leer la ubicación en segundo plano. El empleado ve sus fichajes y sus informes en la aplicación. La información y, cuando hace falta, la consulta a la representación de los trabajadores siguen siendo responsabilidad del empresario.' } },
    ],
  },
  pt: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'O que é o GeoTapp TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'O GeoTapp TimeTracker é a aplicação móvel para técnicos que regista assiduidade, atividades e fotografias de prova diretamente no terreno. Tudo acaba no relatório selado, que o cliente verifica sozinho com o GeoTapp Verifier.' } },
      { '@type': 'Question', name: 'O que acontece se não houver rede?', acceptedAnswer: { '@type': 'Answer', text: 'A picagem fica guardada no telemóvel e segue sozinha quando o sinal volta, com a hora a que foi feita. Até chegar, não se vê no Flow.' } },
      { '@type': 'Question', name: 'Em que se distingue o GeoTapp TimeTracker de uma simples aplicação de picagem?', acceptedAnswer: { '@type': 'Answer', text: 'O GeoTapp TimeTracker não é só uma picagem: cada turno, com as suas localizações, as fotografias de prova e as notas, acaba num relatório selado com impressões criptográficas. O cliente verifica-o sozinho: qualquer alteração posterior, mesmo por parte do administrador, é detetável.' } },
      { '@type': 'Question', name: 'O GeoTapp TimeTracker funciona em Android e iOS?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. A aplicação está na Google Play e na App Store. Requer Android 8.0 ou posterior, ou iOS 26.2 ou posterior.' } },
      { '@type': 'Question', name: 'O GeoTapp TimeTracker cumpre o RGPD?', acceptedAnswer: { '@type': 'Answer', text: 'Foi concebido para se manter dentro desse quadro: regista a localização só quando o trabalhador pica o ponto (entrada, pausas, saída) ou tira uma fotografia de prova, nunca de forma contínua, e nem sequer pede a permissão para ler a localização em segundo plano. O colaborador vê as suas picagens e os seus relatórios na aplicação. A informação e, quando necessário, a consulta aos representantes dos trabalhadores continuam a ser da responsabilidade do empregador.' } },
    ],
  },
  nl: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wat is GeoTapp TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker is de mobiele app voor monteurs die aanwezigheid, activiteiten en fotobewijzen rechtstreeks in het veld vastlegt. Alles komt in het verzegelde rapport, dat de klant zelf controleert met GeoTapp Verifier.' } },
      { '@type': 'Question', name: 'Wat gebeurt er als er geen netwerk is?', acceptedAnswer: { '@type': 'Answer', text: 'De registratie blijft op de telefoon bewaard en wordt vanzelf verzonden zodra het signaal terugkomt, met het tijdstip waarop ze is gemaakt. Zolang ze niet is aangekomen, is ze in Flow niet zichtbaar.' } },
      { '@type': 'Question', name: 'Hoe verschilt GeoTapp TimeTracker van een simpele registratie-app?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker is niet alleen een registratie: elke dienst, met zijn locaties, bewijsfoto\'s en notities, komt in een verzegeld rapport met cryptografische vingerafdrukken. De klant controleert het zelf: elke latere wijziging, ook door de beheerder, is zichtbaar.' } },
      { '@type': 'Question', name: 'Werkt GeoTapp TimeTracker op Android en iOS?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. De app staat op Google Play en in de App Store. Vereist Android 8.0 of nieuwer, of iOS 26.2 of nieuwer.' } },
      { '@type': 'Question', name: 'Houdt GeoTapp TimeTracker zich aan de AVG?', acceptedAnswer: { '@type': 'Answer', text: 'Het is gebouwd om daarbinnen te blijven: het legt de locatie alleen vast wanneer de medewerker registreert (aankomst, pauzes, vertrek) of een bewijsfoto maakt, nooit doorlopend, en vraagt zelfs geen toestemming om de locatie op de achtergrond te lezen. De werknemer ziet zijn registraties en zijn rapporten in de app. De privacyverklaring en, waar nodig, het akkoord met de vakbond blijven voor rekening van de werkgever.' } },
    ],
  },
  da: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Hvad er GeoTapp TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker er mobilappen til teknikere, der registrerer fremmøde, opgaver og fotobeviser direkte i marken. Det hele ender i den forseglede rapport, som kunden selv verificerer med GeoTapp Verifier.' } },
      { '@type': 'Question', name: 'Hvad sker der, hvis der ikke er net?', acceptedAnswer: { '@type': 'Answer', text: 'Stemplingen bliver gemt på telefonen og sendes af sig selv, når signalet vender tilbage, med det klokkeslæt, den blev foretaget på. Indtil den er fremme, kan den ikke ses i Flow.' } },
      { '@type': 'Question', name: 'Hvordan adskiller GeoTapp TimeTracker sig fra en almindelig stempel-app?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker er ikke bare en stempling: hver vagt, med sine positioner, bevisfotos og noter, ender i en forseglet rapport med kryptografiske fingeraftryk. Kunden verificerer den selv: enhver senere ændring, også fra administratorens side, kan opdages.' } },
      { '@type': 'Question', name: 'Fungerer GeoTapp TimeTracker på Android og iOS?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Appen findes på Google Play og i App Store. Den kræver Android 8.0 eller nyere, eller iOS 26.2 eller nyere.' } },
      { '@type': 'Question', name: 'Hvad med databeskyttelsen (GDPR) i GeoTapp TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'Appen er bygget til at holde sig inden for rammerne: den registrerer positionen kun, når medarbejderen stempler (start, pauser, slut) eller tager et bevisfoto, aldrig løbende, og beder ikke engang om tilladelse til at læse positionen i baggrunden. Medarbejderen kan se sine stemplinger og sine rapporter i appen. Information og, hvor det er nødvendigt, inddragelse af medarbejderrepræsentanterne er fortsat arbejdsgiverens ansvar.' } },
    ],
  },
  sv: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Vad är GeoTapp TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker är mobilappen för tekniker, som registrerar närvaro, uppdrag och fotobevis direkt på fältet. Allt hamnar i den förseglade rapporten, som kunden själv kontrollerar med GeoTapp Verifier.' } },
      { '@type': 'Question', name: 'Vad händer om det inte finns täckning?', acceptedAnswer: { '@type': 'Answer', text: 'Stämplingen sparas på telefonen och skickas av sig själv när signalen kommer tillbaka, med den tid då den gjordes. Tills den har kommit fram syns den inte i Flow.' } },
      { '@type': 'Question', name: 'Hur skiljer sig GeoTapp TimeTracker från en vanlig stämpelapp?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker är inte bara en stämpling: varje arbetspass, med sina positioner, bevisfoton och anteckningar, blir en förseglad rapport med kryptografiska fingeravtryck. Kunden kontrollerar den själv: varje senare ändring, även från administratörens sida, går att upptäcka.' } },
      { '@type': 'Question', name: 'Fungerar GeoTapp TimeTracker på Android och iOS?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Appen finns på Google Play och App Store. Den kräver Android 8.0 eller senare, eller iOS 26.2 eller senare.' } },
      { '@type': 'Question', name: 'Hur är det med dataskyddet (GDPR) i GeoTapp TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'Appen är byggd för att hålla sig inom ramarna: den sparar positionen bara när medarbetaren stämplar (start, raster, slut) eller tar ett bevisfoto, aldrig löpande, och ber inte ens om tillstånd att läsa positionen i bakgrunden. Medarbetaren kan se sina stämplingar och sina rapporter i appen. Information och, där det behövs, samråd med de anställdas företrädare är fortsatt arbetsgivarens ansvar.' } },
    ],
  },
};

const APP_DESCRIPTION: Record<string, string> = {
  it: "GeoTapp TimeTracker è l'app mobile per tecnici sul campo: timbratura con posizione controllata, prove fotografiche, report settimanali e invio delle timbrature a GeoTapp Flow. Funziona offline.",
  en: 'GeoTapp TimeTracker is the native Android and iOS app for field technicians: clock-in with location, proof photos, notes and weekly reports, connected to GeoTapp Flow. If there is no signal, clock-ins are saved on the phone and sent when it returns.',
  de: 'GeoTapp TimeTracker ist die native Android- und iOS-App für Techniker im Außendienst: Stempeln mit Standort, Nachweisfotos, Notizen und Wochenberichte, verbunden mit GeoTapp Flow. Ist kein Netz da, werden die Buchungen auf dem Telefon gespeichert und gesendet, sobald es wieder da ist.',
  fr: "GeoTapp TimeTracker est l'application native Android et iOS pour les techniciens sur le terrain : pointage avec position, photos de preuve, notes et rapports hebdomadaires, reliée à GeoTapp Flow. S'il n'y a pas de réseau, les pointages sont enregistrés sur le téléphone et envoyés dès que le signal revient.",
  es: 'GeoTapp TimeTracker es la aplicación nativa Android e iOS para técnicos sobre el terreno: fichaje con ubicación, fotos de prueba, notas e informes semanales, conectada con GeoTapp Flow. Si no hay cobertura, los fichajes se guardan en el teléfono y se envían en cuanto vuelve la señal.',
  nl: 'GeoTapp TimeTracker is de mobiele app voor monteurs in het veld: registratie met gecontroleerde locatie, fotobewijzen, weekrapporten en synchronisatie met GeoTapp Flow. Werkt offline.',
  pt: 'O GeoTapp TimeTracker é a aplicação nativa Android e iOS para técnicos no terreno: picagem com localização, fotografias de prova, notas e relatórios semanais, ligada ao GeoTapp Flow. Se não houver rede, as picagens ficam guardadas no telemóvel e seguem assim que o sinal volta.',
  sv: 'GeoTapp TimeTracker är den inbyggda Android- och iOS-appen för tekniker på fältet: stämpling med position, bevisfoton, anteckningar och veckorapporter, kopplad till GeoTapp Flow. Om det saknas täckning sparas stämplingarna på telefonen och skickas när signalen kommer tillbaka.',
  da: 'GeoTapp TimeTracker er den native Android- og iOS-app til teknikere i marken: stempling med position, bevisfotos, noter og ugentlige rapporter, forbundet med GeoTapp Flow. Hvis der ikke er net, gemmes stemplingerne på telefonen og sendes, så snart signalet vender tilbage.',
  nb: 'GeoTapp TimeTracker er mobilappen for serviceteknikere: verifisert GPS-innsjekking, fotobevis, ukentlige rapporter og sanntidssynkronisering med GeoTapp Flow. Fungerer offline.',
  ru: 'GeoTapp TimeTracker, мобильное приложение для выездных техников: верифицированные GPS-отметки, фотодоказательства, еженедельные отчёты и синхронизация с GeoTapp Flow в реальном времени. Работает офлайн.',
};

const APP_FEATURES: Record<string, string[]> = {
  it: [
    'Posizione controllata alla timbratura, posizioni simulate rifiutate',
    'Prove fotografiche con timestamp e GPS',
    'Funziona offline e sincronizza automaticamente',
    'Report sigillati crittograficamente',
    'Informativa GPS firmata nell\'app prima di timbrare',
    'Integrazione nativa con GeoTapp Flow',
    'Disponibile su Google Play e App Store',
    'Pensata per il GDPR: posizione solo alla timbratura',
  ],
  en: [
    'Clock-in with location at start, breaks and finish; simulated locations rejected',
    'Photo evidence with time and location',
    'Clock-ins saved on the phone when there is no signal, sent when it returns',
    'Cryptographically sealed reports',
    'GPS notice signed as acknowledged in the app before the first clock-in',
    'Native integration with GeoTapp Flow',
    'Available on Google Play and App Store',
    'Location only when the worker clocks in or takes a proof photo, never continuously',
  ],
  de: [
    'Stempeln mit Standort bei Beginn, Pausen und Ende; simulierte Standorte werden abgewiesen',
    'Nachweisfotos mit Uhrzeit und Standort',
    'Buchungen bleiben ohne Netz auf dem Telefon und werden gesendet, sobald es wieder da ist',
    'Kryptografisch versiegelte Berichte',
    'GPS-Information, vor der ersten Buchung in der App als zur Kenntnis genommen bestätigt',
    'Native Anbindung an GeoTapp Flow',
    'Verfügbar bei Google Play und im App Store',
    'Standort nur, wenn die Person stempelt oder ein Nachweisfoto aufnimmt, nie fortlaufend',
  ],
  fr: [
    'Pointage avec position à l\'arrivée, aux pauses et au départ ; positions simulées refusées',
    'Photos de preuve avec heure et position',
    'Sans réseau, les pointages restent sur le téléphone et partent dès que le signal revient',
    'Rapports scellés cryptographiquement',
    'Information GPS signée pour prise de connaissance dans l\'application avant le premier pointage',
    'Intégration native avec GeoTapp Flow',
    'Disponible sur Google Play et l\'App Store',
    'Position uniquement quand le salarié pointe ou prend une photo de preuve, jamais en continu',
  ],
  es: [
    'Fichaje con ubicación a la entrada, en las pausas y a la salida; ubicaciones simuladas rechazadas',
    'Fotos de prueba con hora y ubicación',
    'Sin cobertura, los fichajes se quedan en el teléfono y salen en cuanto vuelve la señal',
    'Informes sellados criptográficamente',
    'Información sobre el GPS firmada como enterado en la aplicación antes del primer fichaje',
    'Integración nativa con GeoTapp Flow',
    'Disponible en Google Play y App Store',
    'Posición solo cuando el trabajador ficha o hace una foto de prueba, nunca de forma continua',
  ],
  pt: [
    'Picagem com localização à entrada, nas pausas e à saída; localizações simuladas recusadas',
    'Fotografias de prova com hora e localização',
    'Sem rede, as picagens ficam no telemóvel e seguem assim que o sinal volta',
    'Relatórios selados criptograficamente',
    'Informação sobre o GPS assinada como tomada de conhecimento na aplicação antes da primeira picagem',
    'Integração nativa com o GeoTapp Flow',
    'Disponível na Google Play e na App Store',
    'Posição só quando o trabalhador pica o ponto ou tira uma fotografia de prova, nunca de forma contínua',
  ],
  nl: [
    'Locatie gecontroleerd bij de registratie, gesimuleerde locaties geweigerd',
    'Bewijsfoto\'s met tijdstempel en gps',
    'Werkt offline en synchroniseert automatisch',
    'Cryptografisch verzegelde rapporten',
    'GPS-verklaring ondertekend in de app vóór het registreren',
    'Native integratie met GeoTapp Flow',
    'Beschikbaar op Google Play en de App Store',
    'Gebouwd met het oog op de AVG: locatie alleen bij de registratie',
  ],
  da: [
    'Stempling med position ved start, pauser og slut; simulerede positioner afvises',
    'Bevisfotos med tidspunkt og position',
    'Uden net bliver stemplingerne på telefonen og sendes, så snart signalet vender tilbage',
    'Kryptografisk forseglede rapporter',
    'GPS-information, der i appen bekræftes som læst, før den første stempling',
    'Indbygget integration med GeoTapp Flow',
    'Findes på Google Play og i App Store',
    'Position kun når medarbejderen stempler eller tager et bevisfoto, aldrig løbende',
  ],
  sv: [
    'Stämpling med position vid start, raster och slut; simulerade positioner avvisas',
    'Bevisfoton med tid och position',
    'Utan täckning blir stämplingarna kvar på telefonen och skickas när signalen kommer tillbaka',
    'Kryptografiskt förseglade rapporter',
    'GPS-information som bekräftas som läst i appen före första stämplingen',
    'Inbyggd koppling till GeoTapp Flow',
    'Finns på Google Play och App Store',
    'Position bara när medarbetaren stämplar eller tar ett bevisfoto, aldrig löpande',
  ],
};

function buildAppSoftware(locale: AppLocale) {
  const rate = convertEurToLocale(EUR_PRICES.tracker.tier1.perSeatMonthly, locale);
  const description = APP_DESCRIPTION[locale] ?? APP_DESCRIPTION.en;
  const featureList = APP_FEATURES[locale] ?? APP_FEATURES.en;
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    '@id': `https://geotapp.com/${locale}/products/geotapp-timetracker/#software`,
    name: 'GeoTapp TimeTracker',
    operatingSystem: 'Android 8.0+, iOS 26.2+',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Time Tracking',
    description,
    featureList,
    image: 'https://geotapp.com/logoTT.webp',
    screenshot: [
      'https://geotapp.com/screenshots/timetracker-dashboard.webp',
      'https://geotapp.com/screenshots/timetracker-richieste.webp',
    ],
    inLanguage: locale,
    offers: {
      '@type': 'Offer',
      price: rate.amount.toFixed(2),
      priceCurrency: getCurrencyForLocale(locale),
      availability: 'https://schema.org/InStock',
      url: `https://geotapp.com/${locale}/trial/`,
      description: locale === 'fr'
        ? `Essai gratuit de 14 jours. Formules payantes à partir de ${rate.formatted} par poste et par mois, hors TVA.`
        : locale === 'es'
        ? `Prueba gratuita de 14 días. Planes de pago desde ${rate.formatted} por puesto y mes, IVA no incluido.`
        : locale === 'pt'
        ? `Teste gratuito de 14 dias. Planos pagos a partir de ${rate.formatted} por posto e por mês, IVA não incluído.`
        : locale === 'da'
        ? `14 dages gratis prøveperiode. Betalte planer fra ${rate.formatted} pr. plads om måneden, ekskl. moms.`
        : locale === 'sv'
        ? `14 dagars gratis provperiod. Betalplaner från ${rate.formatted} per plats och månad, exkl. moms.`
        : `14-day free trial. Paid plans from ${rate.formatted} per seat per month.`,
    },
    publisher: { '@id': 'https://geotapp.com/#organization' },
    url: `https://geotapp.com/${locale}/products/geotapp-timetracker/`,
  };
}

type Props = { params: Promise<{ locale: string }> };

export default async function LocaleAppPage({ params }: Props) {
  const { locale } = await params;
  const faq = APP_FAQ[locale] ?? APP_FAQ['en'];
  const software = buildAppSoftware(locale as AppLocale);
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      { '@type': 'ListItem', position: 2, name: 'GeoTapp TimeTracker', item: `https://geotapp.com/${locale}/products/geotapp-timetracker/` },
    ],
  };
  // Freschezza per AI/Google: data vera dell'ultimo commit sui file di questa
  // pagina (vedi src/lib/seo/content-dates.ts), non la data di build.
  const pageKey = 'products/geotapp-timetracker';
  const m = appMeta[locale] ?? appMeta[locale.startsWith('en-') ? 'en' : 'it'];
  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: m.title,
    description: m.description,
    url: `https://geotapp.com/${locale}/products/geotapp-timetracker/`,
    dateModified: updatedIsoFor(pageKey),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <AppPage />
      {/* FAQ VISIBILE (H3) + schema FAQPage: FaqFromSchema rende entrambi, cosi' il
          testo e' citabile dagli AI (prima le FAQ vivevano solo nel <script> JSON-LD,
          invisibili: 0 heading a domanda, l'AI non le pescava). Allineato a Flow. */}
      {faq && <FaqFromSchema faq={faq} locale={locale} />}
      <BlogHighlights locale={locale as AppLocale} categoryId={108} />
      <SettoriLinks locale={locale as AppLocale} settori={['pulizie', 'sicurezza']} />
      <UpdatedOnLine pageKey={pageKey} locale={locale} />
    </>
  );
}
