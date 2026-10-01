
import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import VerifierPage from '../../../products/geotapp-verifier/page';
import BlogHighlights from '@/components/BlogHighlights';
import SettoriLinks from '@/components/SettoriLinks';
import UpdatedOnLine, { updatedIsoFor } from '@/components/seo/UpdatedOnLine';
import { type AppLocale } from '@/lib/i18n/config';
import { getCurrencyForLocale } from '@/lib/pricing';

const verifierMeta: Record<string, { title: string; description: string }> = {
  it: { title: "GeoTapp Verifier: verifica indipendente dei report", description: "Verifier controlla che un report GeoTapp non sia stato modificato dopo il sigillo e che venga da GeoTapp. Gratuito, senza account, anche offline." },
  en: { title: "GeoTapp Verifier: independent work report verification", description: "Verifier checks that a GeoTapp report has not been modified after it was sealed and that it comes from GeoTapp. Free, no account, offline too." },
  de: { title: "GeoTapp Verifier: unabhängige Prüfung von Arbeitsberichten", description: "Verifier prüft, ob ein GeoTapp-Bericht nach der Versiegelung verändert wurde und ob er von GeoTapp stammt. Kostenlos, ohne Konto, auch offline." },
  fr: { title: "GeoTapp Verifier : vérification indépendante des rapports", description: "Verifier contrôle qu'un rapport GeoTapp n'a pas été modifié après le scellement et qu'il vient bien de GeoTapp. Gratuit, sans compte, même hors ligne." },
  es: { title: "GeoTapp Verifier: verificación independiente de informes", description: "Verifier comprueba que un informe de GeoTapp no se haya modificado después del sello y que proceda de GeoTapp. Gratuito, sin cuenta, incluso sin conexión." },
  nl: { title: "GeoTapp Verifier: onafhankelijke controle van rapporten", description: "Verifier controleert dat een GeoTapp-rapport na de verzegeling niet is gewijzigd en dat het van GeoTapp komt. Gratis, zonder account, ook offline." },
  pt: { title: "GeoTapp Verifier: verificação independente de relatórios", description: "O Verifier confirma que um relatório GeoTapp não foi alterado depois de selado e que vem mesmo do GeoTapp. Gratuito, sem conta, mesmo sem ligação." },
  sv: { title: "GeoTapp Verifier: oberoende kontroll av rapporter", description: "Verifier kontrollerar att en GeoTapp-rapport inte har ändrats efter förseglingen och att den kommer från GeoTapp. Gratis, utan konto, även offline." },
  da: { title: "GeoTapp Verifier: uafhængig kontrol af rapporter", description: "Verifier kontrollerer, at en GeoTapp-rapport ikke er ændret efter forseglingen, og at den kommer fra GeoTapp. Gratis, uden konto, også offline." },
  nb: { title: "GeoTapp Verifier: uavhengig verifisering av rapporter", description: "Verifier gjør hvert oppdrag etterprøvbart med forseglet GPS, tidsstemplede bilder og rapporter med sporbare endringer. Kunden din sjekker selv, uten konto." },
  ru: { title: "GeoTapp Verifier: независимая проверка отчётов о работе", description: "Verifier делает каждый выезд проверяемым: запечатанные GPS-данные, фото с отметкой времени, отчёты с обнаруживаемыми изменениями. Заказчик проверяет сам, без аккаунта." },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = verifierMeta[locale] ?? verifierMeta[locale.startsWith('en-') ? 'en' : 'it'];
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: buildLocaleAlternates(locale, '/products/geotapp-verifier/'),
    openGraph: {
      title: m.title,
      description: m.description,
      url: `https://geotapp.com/${locale}/products/geotapp-verifier/`,
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

const VERIFIER_FAQ: Record<string, object> = {
  it: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Come funziona la verifica di un report GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Ogni report GeoTapp viene sigillato quando è generato: una catena di impronte SHA-256 lega eventi e foto, e la radice è firmata con la chiave di GeoTapp. Il cliente riceve il report in PDF e un link fisso al pacchetto sigillato; lo verifica online o con il verificatore offline, che ricalcola le impronte e controlla la firma.' } },
      { '@type': 'Question', name: 'Chi può verificare un report GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Chiunque abbia il pacchetto, senza accedere all\'account dell\'azienda. Il verificatore offline porta dentro la chiave pubblica: funziona anche senza internet e anche senza GeoTapp.' } },
      { '@type': 'Question', name: 'Cosa succede se un cliente contesta il lavoro svolto?', acceptedAnswer: { '@type': 'Answer', text: 'Puoi mostrargli il report: contiene orari, posizioni registrate alle timbrature e foto di prova, e lui stesso può verificare che nessuno l\'abbia modificato dopo il sigillo. La verifica dimostra che il documento è integro; da sola non è prova assoluta del fatto materiale né consulenza legale.' } },
      { '@type': 'Question', name: 'GeoTapp Verifier rispetta il GDPR?', acceptedAnswer: { '@type': 'Answer', text: 'Il verificatore offline non manda niente a nessuno: gira sul tuo computer. La verifica online passa il file dal nostro server, che non lo salva. Quanto ai dati nel report, GeoTapp registra la posizione solo quando il lavoratore timbra (entrata, pause, uscita) o scatta una foto di prova, mai in modo continuo.' } },
      { '@type': 'Question', name: 'GeoTapp Verifier funziona con Flow e TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'Sì. I dati nascono su GeoTapp TimeTracker, sul campo, e il report si genera in GeoTapp Flow, in ufficio. Verifier è lo strumento gratuito con cui chiunque controlla quel report.' } },
    ],
  },
  en: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How does GeoTapp Verifier report verification work?', acceptedAnswer: { '@type': 'Answer', text: 'Every GeoTapp report is sealed when it is generated: a chain of SHA-256 fingerprints links events and photos, and the root is signed with GeoTapp\'s key. The client receives the report as a PDF and a fixed link to the sealed package; they verify it online or with the offline verifier, which recalculates the fingerprints and checks the signature.' } },
      { '@type': 'Question', name: 'Who can verify a GeoTapp report?', acceptedAnswer: { '@type': 'Answer', text: 'Anyone who has the package, without accessing the company\'s account. The offline verifier carries the public key inside: it works even without internet and even without GeoTapp.' } },
      { '@type': 'Question', name: 'What happens when a client disputes completed work?', acceptedAnswer: { '@type': 'Answer', text: 'You can show them the report: it contains times, the locations recorded at clock-in and proof photos, and they can check for themselves that nobody has modified it since the seal. The check shows the document is intact; on its own it is not absolute proof of the underlying fact, nor legal advice.' } },
      { '@type': 'Question', name: 'Does GeoTapp Verifier respect the GDPR?', acceptedAnswer: { '@type': 'Answer', text: 'The offline verifier sends nothing to anyone: it runs on your computer. Online verification passes the file through our server, which does not store it. As for the data in the report, GeoTapp records location only when the worker clocks in (start, breaks, finish) or takes a proof photo, never continuously.' } },
      { '@type': 'Question', name: 'Does GeoTapp Verifier work with Flow and TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The data is born on GeoTapp TimeTracker, in the field, and the report is generated in GeoTapp Flow, in the office. Verifier is the free tool anyone uses to check that report.' } },
    ],
  },
  de: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie funktioniert die Prüfung eines GeoTapp-Berichts?', acceptedAnswer: { '@type': 'Answer', text: 'Jeder GeoTapp-Bericht wird bei der Erstellung versiegelt: Eine Kette von SHA-256-Fingerabdrücken verbindet Ereignisse und Fotos, und die Wurzel wird mit dem Schlüssel von GeoTapp signiert. Der Kunde erhält den Bericht als PDF und einen festen Link zum versiegelten Paket; er prüft ihn online oder mit dem Offline-Prüfprogramm, das die Fingerabdrücke neu berechnet und die Signatur kontrolliert.' } },
      { '@type': 'Question', name: 'Wer kann einen GeoTapp-Bericht prüfen?', acceptedAnswer: { '@type': 'Answer', text: 'Jeder, der das Paket hat, ohne Zugriff auf das Konto des Unternehmens. Das Offline-Prüfprogramm trägt den öffentlichen Schlüssel in sich: Es funktioniert auch ohne Internet und auch ohne GeoTapp.' } },
      { '@type': 'Question', name: 'Was passiert, wenn ein Kunde die geleistete Arbeit bestreitet?', acceptedAnswer: { '@type': 'Answer', text: 'Sie können ihm den Bericht zeigen: Er enthält Zeiten, die bei den Buchungen erfassten Standorte und Nachweisfotos, und er kann selbst prüfen, dass ihn seit der Versiegelung niemand verändert hat. Die Prüfung zeigt, dass das Dokument unversehrt ist; für sich allein ist sie weder ein absoluter Beweis des zugrunde liegenden Sachverhalts noch Rechtsberatung.' } },
      { '@type': 'Question', name: 'Hält GeoTapp Verifier die DSGVO ein?', acceptedAnswer: { '@type': 'Answer', text: 'Das Offline-Prüfprogramm schickt nichts an irgendjemanden: Es läuft auf Ihrem Computer. Bei der Online-Prüfung läuft die Datei über unseren Server, der sie nicht speichert. Zu den Daten im Bericht: GeoTapp erfasst den Standort nur, wenn die Person stempelt (Beginn, Pausen, Ende) oder ein Nachweisfoto aufnimmt, nie fortlaufend.' } },
      { '@type': 'Question', name: 'Funktioniert GeoTapp Verifier mit Flow und TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Die Daten entstehen in GeoTapp TimeTracker, vor Ort, und der Bericht wird in GeoTapp Flow im Büro erstellt. Verifier ist das kostenlose Werkzeug, mit dem jeder diesen Bericht prüft.' } },
    ],
  },
  fr: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Comment fonctionne la vérification d\'un rapport GeoTapp ?', acceptedAnswer: { '@type': 'Answer', text: 'Chaque rapport GeoTapp est scellé au moment où il est généré : une chaîne d\'empreintes SHA-256 relie les événements et les photos, et la racine est signée avec la clé de GeoTapp. Le client reçoit le rapport en PDF et un lien fixe vers le paquet scellé ; il le vérifie en ligne ou avec le vérificateur hors ligne, qui recalcule les empreintes et contrôle la signature.' } },
      { '@type': 'Question', name: 'Qui peut vérifier un rapport GeoTapp ?', acceptedAnswer: { '@type': 'Answer', text: 'Toute personne qui a le paquet, sans accéder au compte de l\'entreprise. Le vérificateur hors ligne embarque la clé publique : il fonctionne même sans internet et même sans GeoTapp.' } },
      { '@type': 'Question', name: 'Que se passe-t-il si un client conteste le travail effectué ?', acceptedAnswer: { '@type': 'Answer', text: 'Vous pouvez lui montrer le rapport : il contient les horaires, les positions enregistrées aux pointages et les photos de preuve, et il peut vérifier lui-même que personne ne l\'a modifié depuis le scellement. La vérification démontre que le document est intact ; à elle seule, elle n\'est ni une preuve absolue du fait matériel ni un conseil juridique.' } },
      { '@type': 'Question', name: 'GeoTapp Verifier respecte-t-il le RGPD ?', acceptedAnswer: { '@type': 'Answer', text: 'Le vérificateur hors ligne n\'envoie rien à personne : il tourne sur votre ordinateur. La vérification en ligne fait passer le fichier par notre serveur, qui ne le conserve pas. Quant aux données du rapport, GeoTapp enregistre la position uniquement quand le salarié pointe (arrivée, pauses, départ) ou prend une photo de preuve, jamais en continu.' } },
      { '@type': 'Question', name: 'GeoTapp Verifier fonctionne-t-il avec Flow et TimeTracker ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Les données naissent dans GeoTapp TimeTracker, sur le terrain, et le rapport est généré dans GeoTapp Flow, au bureau. Verifier est l\'outil gratuit avec lequel n\'importe qui contrôle ce rapport.' } },
    ],
  },
  es: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: '¿Cómo funciona la verificación de un informe de GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Cada informe de GeoTapp se sella en el momento en que se genera: una cadena de huellas SHA-256 enlaza los eventos y las fotos, y la raíz se firma con la clave de GeoTapp. El cliente recibe el informe en PDF y un enlace fijo al paquete sellado; lo verifica en línea o con el verificador sin conexión, que recalcula las huellas y comprueba la firma.' } },
      { '@type': 'Question', name: '¿Quién puede verificar un informe de GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Cualquiera que tenga el paquete, sin acceder a la cuenta de la empresa. El verificador sin conexión lleva dentro la clave pública: funciona incluso sin internet y sin GeoTapp.' } },
      { '@type': 'Question', name: '¿Qué pasa si un cliente discute el trabajo realizado?', acceptedAnswer: { '@type': 'Answer', text: 'Puedes enseñarle el informe: contiene los horarios, las ubicaciones registradas en los fichajes y las fotos de prueba, y él mismo puede comprobar que nadie lo ha modificado desde el sello. La verificación demuestra que el documento está íntegro; por sí sola no es prueba absoluta del hecho material ni asesoramiento jurídico.' } },
      { '@type': 'Question', name: '¿GeoTapp Verifier cumple el RGPD?', acceptedAnswer: { '@type': 'Answer', text: 'El verificador sin conexión no envía nada a nadie: se ejecuta en tu ordenador. En la verificación en línea el archivo pasa por nuestro servidor, que no lo guarda. En cuanto a los datos del informe, GeoTapp registra la ubicación solo cuando el empleado ficha (llegada, pausas, salida) o hace una foto de prueba, nunca de forma continua.' } },
      { '@type': 'Question', name: '¿GeoTapp Verifier funciona con Flow y TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Los datos nacen en GeoTapp TimeTracker, sobre el terreno, y el informe se genera en GeoTapp Flow, en la oficina. Verifier es la herramienta gratuita con la que cualquiera comprueba ese informe.' } },
    ],
  },
  pt: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Como funciona a verificação de um relatório GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Cada relatório GeoTapp é selado no momento em que é gerado: uma cadeia de impressões SHA-256 liga os eventos e as fotografias, e a raiz é assinada com a chave do GeoTapp. O cliente recebe o relatório em PDF e uma ligação fixa para o pacote selado; verifica-o em linha ou com o verificador offline, que volta a calcular as impressões e confirma a assinatura.' } },
      { '@type': 'Question', name: 'Quem pode verificar um relatório GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Qualquer pessoa que tenha o pacote, sem aceder à conta da empresa. O verificador offline traz dentro a chave pública: funciona mesmo sem internet e sem o GeoTapp.' } },
      { '@type': 'Question', name: 'O que acontece se um cliente contestar o trabalho realizado?', acceptedAnswer: { '@type': 'Answer', text: 'Pode mostrar-lhe o relatório: contém os horários, as localizações registadas nas picagens e as fotografias de prova, e ele próprio pode confirmar que ninguém o alterou desde que foi selado. A verificação demonstra que o documento está íntegro; por si só, não é prova absoluta do facto material nem aconselhamento jurídico.' } },
      { '@type': 'Question', name: 'O GeoTapp Verifier cumpre o RGPD?', acceptedAnswer: { '@type': 'Answer', text: 'O verificador offline não envia nada a ninguém: corre no seu computador. Na verificação em linha, o ficheiro passa pelo nosso servidor, que não o guarda. Quanto aos dados do relatório, o GeoTapp regista a localização só quando o colaborador pica o ponto (chegada, pausas, saída) ou tira uma fotografia de prova, nunca de forma contínua.' } },
      { '@type': 'Question', name: 'O GeoTapp Verifier funciona com o Flow e o TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Os dados nascem no GeoTapp TimeTracker, no terreno, e o relatório é gerado no GeoTapp Flow, no escritório. O Verifier é a ferramenta gratuita com que qualquer pessoa confirma esse relatório.' } },
    ],
  },
  nl: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Hoe werkt de controle van een GeoTapp-rapport?', acceptedAnswer: { '@type': 'Answer', text: 'Elk GeoTapp-rapport wordt verzegeld op het moment dat het wordt gemaakt: een keten van SHA-256-vingerafdrukken verbindt gebeurtenissen en foto\'s, en de wortel wordt ondertekend met de sleutel van GeoTapp. De klant ontvangt het rapport als pdf en een vaste link naar het verzegelde pakket; hij controleert het online of met de offline verifier, die de vingerafdrukken opnieuw berekent en de handtekening controleert.' } },
      { '@type': 'Question', name: 'Wie kan een GeoTapp-rapport controleren?', acceptedAnswer: { '@type': 'Answer', text: 'Iedereen die het pakket heeft, zonder toegang tot het account van het bedrijf. De offline verifier draagt de openbare sleutel bij zich: hij werkt ook zonder internet en ook zonder GeoTapp.' } },
      { '@type': 'Question', name: 'Wat gebeurt er als een klant het uitgevoerde werk betwist?', acceptedAnswer: { '@type': 'Answer', text: 'U kunt hem het rapport tonen: het bevat tijden, locaties die bij de registraties zijn vastgelegd en bewijsfoto\'s, en hij kan zelf controleren dat niemand het na de verzegeling heeft gewijzigd. De controle toont aan dat het document intact is; op zichzelf is ze geen absoluut bewijs van het feitelijke gebeuren en geen juridisch advies.' } },
      { '@type': 'Question', name: 'Houdt GeoTapp Verifier zich aan de AVG?', acceptedAnswer: { '@type': 'Answer', text: 'De offline verifier stuurt niets naar wie dan ook: hij draait op uw computer. Bij de online controle gaat het bestand via onze server, die het niet opslaat. Wat de gegevens in het rapport betreft: GeoTapp legt de locatie alleen vast wanneer de medewerker registreert (aankomst, pauzes, vertrek) of een bewijsfoto maakt, nooit doorlopend.' } },
      { '@type': 'Question', name: 'Werkt GeoTapp Verifier met Flow en TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. De gegevens ontstaan in GeoTapp TimeTracker, in het veld, en het rapport wordt gemaakt in GeoTapp Flow, op kantoor. Verifier is het gratis hulpmiddel waarmee iedereen dat rapport controleert.' } },
    ],
  },
  da: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Hvordan fungerer kontrollen af en GeoTapp-rapport?', acceptedAnswer: { '@type': 'Answer', text: 'Hver GeoTapp-rapport forsegles, når den oprettes: en kæde af SHA-256-fingeraftryk binder hændelser og fotos sammen, og roden er underskrevet med GeoTapps nøgle. Kunden modtager rapporten som PDF og et fast link til den forseglede pakke; kunden kontrollerer den online eller med den offline verifier, der genberegner fingeraftrykkene og kontrollerer signaturen.' } },
      { '@type': 'Question', name: 'Hvem kan kontrollere en GeoTapp-rapport?', acceptedAnswer: { '@type': 'Answer', text: 'Alle, der har pakken, uden adgang til virksomhedens konto. Den offline verifier har den offentlige nøgle indbygget: den virker også uden internet og uden GeoTapp.' } },
      { '@type': 'Question', name: 'Hvad sker der, hvis en kunde bestrider det udførte arbejde?', acceptedAnswer: { '@type': 'Answer', text: 'Du kan vise kunden rapporten: den indeholder tidspunkter, positioner registreret ved stemplingerne og bevisfotos, og kunden kan selv kontrollere, at ingen har ændret den siden forseglingen. Kontrollen viser, at dokumentet er uændret; i sig selv er den hverken et absolut bevis for det faktiske forhold eller juridisk rådgivning.' } },
      { '@type': 'Question', name: 'Hvad med databeskyttelsen (GDPR) i GeoTapp Verifier?', acceptedAnswer: { '@type': 'Answer', text: 'Den offline verifier sender ikke noget til nogen: den kører på din computer. Ved onlinekontrollen går filen gennem vores server, som ikke gemmer den. Hvad angår dataene i rapporten, registrerer GeoTapp kun positionen, når medarbejderen stempler (start, pauser, slut) eller tager et bevisfoto, aldrig løbende.' } },
      { '@type': 'Question', name: 'Fungerer GeoTapp Verifier sammen med Flow og TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Dataene opstår i GeoTapp TimeTracker, i marken, og rapporten oprettes i GeoTapp Flow, på kontoret. Verifier er det gratis værktøj, som alle kan bruge til at kontrollere rapporten.' } },
    ],
  },
  sv: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Hur fungerar kontrollen av en GeoTapp-rapport?', acceptedAnswer: { '@type': 'Answer', text: 'Varje GeoTapp-rapport förseglas när den skapas: en kedja av SHA-256-fingeravtryck binder ihop händelser och foton, och roten är signerad med GeoTapps nyckel. Kunden får rapporten som PDF och en fast länk till det förseglade paketet; kunden kontrollerar den online eller med den fristående verifieraren offline, som räknar om fingeravtrycken och kontrollerar signaturen.' } },
      { '@type': 'Question', name: 'Vem kan kontrollera en GeoTapp-rapport?', acceptedAnswer: { '@type': 'Answer', text: 'Alla som har paketet, utan tillgång till företagets konto. Verifieraren offline har den publika nyckeln inbyggd: den fungerar även utan internet och utan GeoTapp.' } },
      { '@type': 'Question', name: 'Vad händer om en kund ifrågasätter det utförda arbetet?', acceptedAnswer: { '@type': 'Answer', text: 'Du kan visa kunden rapporten: den innehåller tider, positioner som sparats vid stämplingarna och bevisfoton, och kunden kan själv kontrollera att ingen har ändrat den sedan förseglingen. Kontrollen visar att dokumentet är oförändrat; i sig är den varken ett absolut bevis för det faktiska förloppet eller juridisk rådgivning.' } },
      { '@type': 'Question', name: 'Hur är det med dataskyddet (GDPR) i GeoTapp Verifier?', acceptedAnswer: { '@type': 'Answer', text: 'Verifieraren offline skickar ingenting till någon: den körs på din dator. Vid kontrollen online går filen via vår server, som inte sparar den. När det gäller uppgifterna i rapporten sparar GeoTapp positionen bara när medarbetaren stämplar (start, raster, slut) eller tar ett bevisfoto, aldrig löpande.' } },
      { '@type': 'Question', name: 'Fungerar GeoTapp Verifier tillsammans med Flow och TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Uppgifterna uppstår i GeoTapp TimeTracker, på fältet, och rapporten skapas i GeoTapp Flow, på kontoret. Verifier är det kostnadsfria verktyget som alla kan använda för att kontrollera rapporten.' } },
    ],
  },
};

const VERIFIER_DESCRIPTION: Record<string, string> = {
  it: 'GeoTapp Verifier controlla che un report GeoTapp non sia stato modificato dopo il sigillo e che venga davvero da GeoTapp. È gratuito, senza account, anche offline: per le aziende che devono dimostrare il lavoro svolto e per i loro clienti.',
  en: 'GeoTapp Verifier checks that a GeoTapp report has not been modified after it was sealed and that it really comes from GeoTapp. It is free, needs no account and works offline too: for companies that need to prove the work done and for their clients.',
  de: 'GeoTapp Verifier prüft, ob ein GeoTapp-Bericht nach der Versiegelung verändert wurde und ob er wirklich von GeoTapp stammt. Er ist kostenlos, braucht kein Konto und funktioniert auch offline: für Unternehmen, die die geleistete Arbeit nachweisen müssen, und für ihre Kunden.',
  fr: "GeoTapp Verifier contrôle qu'un rapport GeoTapp n'a pas été modifié après le scellement et qu'il vient vraiment de GeoTapp. Il est gratuit, sans compte, même hors ligne : pour les entreprises qui doivent démontrer le travail effectué et pour leurs clients.",
  es: 'GeoTapp Verifier comprueba que un informe de GeoTapp no se haya modificado después del sello y que proceda realmente de GeoTapp. Es gratuito, sin cuenta, incluso sin conexión: para las empresas que deben demostrar el trabajo realizado y para sus clientes.',
  nl: 'GeoTapp Verifier controleert dat een GeoTapp-rapport na de verzegeling niet is gewijzigd en dat het echt van GeoTapp komt. Het is gratis, zonder account, ook offline: voor bedrijven die het uitgevoerde werk moeten aantonen en voor hun klanten.',
  pt: 'O GeoTapp Verifier confirma que um relatório GeoTapp não foi alterado depois de selado e que vem mesmo do GeoTapp. É gratuito, sem conta, mesmo sem ligação: para as empresas que têm de demonstrar o trabalho realizado e para os seus clientes.',
  sv: 'GeoTapp Verifier kontrollerar att en GeoTapp-rapport inte har ändrats efter förseglingen och att den verkligen kommer från GeoTapp. Det är gratis, utan konto, även offline: för företag som behöver visa det utförda arbetet och för deras kunder.',
  da: 'GeoTapp Verifier kontrollerer, at en GeoTapp-rapport ikke er ændret efter forseglingen, og at den virkelig kommer fra GeoTapp. Det er gratis, uden konto, også offline: til virksomheder, der skal dokumentere det udførte arbejde, og til deres kunder.',
  nb: 'GeoTapp Verifier gjør hvert oppdrag etterprøvbart med forseglet GPS-data, tidsstemplede fotobevis og rapporter med sporbare endringer, uavhengig verifiserbare.',
  ru: 'GeoTapp Verifier делает каждый выезд проверяемым: запечатанные GPS-данные, фотодоказательства с отметками времени и отчёты с обнаруживаемыми изменениями. Проверка независимая.',
};

const VERIFIER_FEATURES: Record<string, string[]> = {
  it: [
    'Hash crittografico applicato a ogni report alla chiusura',
    'Verifica indipendente: il committente non accede al tuo account',
    'Catena hash su foto, GPS e timestamp',
    'Link di verifica univoco condivisibile',
    'Integrazione nativa con Flow e TimeTracker',
    'Verifica anche offline, senza account',
  ],
  en: [
    'Report sealed when it is generated: SHA-256 hash chain signed with GeoTapp\'s key',
    'Independent verification: clients do not access your account',
    'Chain across events, photos and times',
    'Fixed link to the sealed package (geotapp.com/r/ plus a code)',
    'Free offline verifier, a single file with the public key inside',
    'Works with the reports generated by Flow and TimeTracker',
  ],
  de: [
    'Bericht bei der Erstellung versiegelt: SHA-256-Kette, mit dem Schlüssel von GeoTapp signiert',
    'Unabhängige Prüfung: Kunden haben keinen Zugriff auf Ihr Konto',
    'Kette über Ereignisse, Fotos und Zeiten',
    'Fester Link zum versiegelten Paket (geotapp.com/r/ plus Code)',
    'Kostenloses Offline-Prüfprogramm, eine einzelne Datei mit dem öffentlichen Schlüssel darin',
    'Funktioniert mit den Berichten aus Flow und TimeTracker',
  ],
  fr: [
    'Rapport scellé à sa génération : chaîne SHA-256 signée avec la clé de GeoTapp',
    'Vérification indépendante : les clients n\'accèdent pas à votre compte',
    'Chaîne sur les événements, les photos et les horaires',
    'Lien fixe vers le paquet scellé (geotapp.com/r/ suivi d\'un code)',
    'Vérificateur hors ligne gratuit, un seul fichier avec la clé publique à l\'intérieur',
    'Fonctionne avec les rapports générés par Flow et TimeTracker',
  ],
  es: [
    'Informe sellado al generarse: cadena SHA-256 firmada con la clave de GeoTapp',
    'Verificación independiente: los clientes no acceden a tu cuenta',
    'Cadena sobre eventos, fotos y horarios',
    'Enlace fijo al paquete sellado (geotapp.com/r/ seguido de un código)',
    'Verificador sin conexión gratuito, un único archivo con la clave pública dentro',
    'Funciona con los informes generados por Flow y TimeTracker',
  ],
  pt: [
    'Relatório selado ao ser gerado: cadeia SHA-256 assinada com a chave do GeoTapp',
    'Verificação independente: os clientes não acedem à sua conta',
    'Cadeia sobre eventos, fotografias e horários',
    'Ligação fixa para o pacote selado (geotapp.com/r/ seguido de um código)',
    'Verificador offline gratuito, um único ficheiro com a chave pública lá dentro',
    'Funciona com os relatórios gerados pelo Flow e pelo TimeTracker',
  ],
  nl: [
    'Cryptografische hash toegepast op elk rapport bij het afsluiten',
    'Onafhankelijke controle: de opdrachtgever komt niet in uw account',
    'Hash-keten over foto\'s, gps en tijdstempel',
    'Uniek deelbaar controlelink',
    'Native integratie met Flow en TimeTracker',
    'Controle ook offline, zonder account',
  ],
  da: [
    'Rapporten forsegles, når den oprettes: SHA-256-kæde underskrevet med GeoTapps nøgle',
    'Uafhængig kontrol: kunderne får ikke adgang til din konto',
    'Kæde over hændelser, fotos og tidspunkter',
    'Fast link til den forseglede pakke (geotapp.com/r/ efterfulgt af en kode)',
    'Gratis offline verifier, én enkelt fil med den offentlige nøgle indbygget',
    'Virker med de rapporter, der oprettes i Flow og TimeTracker',
  ],
  sv: [
    'Rapporten förseglas när den skapas: SHA-256-kedja signerad med GeoTapps nyckel',
    'Oberoende kontroll: kunderna får inte tillgång till ditt konto',
    'Kedja över händelser, foton och tider',
    'Fast länk till det förseglade paketet (geotapp.com/r/ följt av en kod)',
    'Kostnadsfri verifierare offline, en enda fil med den publika nyckeln inbyggd',
    'Fungerar med rapporterna som skapas i Flow och TimeTracker',
  ],
};

function buildVerifierSoftware(locale: AppLocale) {
  const description = VERIFIER_DESCRIPTION[locale] ?? VERIFIER_DESCRIPTION.en;
  const featureList = VERIFIER_FEATURES[locale] ?? VERIFIER_FEATURES.en;
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `https://geotapp.com/${locale}/products/geotapp-verifier/#software`,
    name: 'GeoTapp Verifier',
    operatingSystem: 'Web',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Document Verification',
    description,
    featureList,
    image: 'https://geotapp.com/logoVerifier.webp',
    screenshot: ['https://geotapp.com/screenshots/verifier-report.webp'],
    inLanguage: locale,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: getCurrencyForLocale(locale),
      availability: 'https://schema.org/InStock',
      description: locale === 'fr'
        ? 'Gratuit, sans compte, y compris pour les destinataires des rapports.'
        : locale === 'es'
        ? 'Gratuito, sin cuenta, también para quienes reciben los informes.'
        : locale === 'pt'
        ? 'Gratuito, sem conta, também para quem recebe os relatórios.'
        : locale === 'da'
        ? 'Gratis, uden konto, også for dem, der modtager rapporterne.'
        : locale === 'sv'
        ? 'Gratis, utan konto, även för dem som tar emot rapporterna.'
        : 'Included in GeoTapp plans. Free verification for report recipients.',
    },
    publisher: { '@id': 'https://geotapp.com/#organization' },
    url: `https://geotapp.com/${locale}/products/geotapp-verifier/`,
  };
}

type Props = { params: Promise<{ locale: string }> };

export default async function LocaleVerifierPage({ params }: Props) {
  const { locale } = await params;
  const faq = VERIFIER_FAQ[locale] ?? VERIFIER_FAQ['en'];
  const software = buildVerifierSoftware(locale as AppLocale);
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      { '@type': 'ListItem', position: 2, name: 'GeoTapp Verifier', item: `https://geotapp.com/${locale}/products/geotapp-verifier/` },
    ],
  };
  // Freschezza per AI/Google: data vera dell'ultimo commit sui file di questa
  // pagina (vedi src/lib/seo/content-dates.ts), non la data di build.
  const pageKey = 'products/geotapp-verifier';
  const m = verifierMeta[locale] ?? verifierMeta[locale.startsWith('en-') ? 'en' : 'it'];
  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: m.title,
    description: m.description,
    url: `https://geotapp.com/${locale}/products/geotapp-verifier/`,
    dateModified: updatedIsoFor(pageKey),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {faq && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <VerifierPage params={params} />
      <BlogHighlights locale={locale as AppLocale} categoryId={9} />
      <SettoriLinks locale={locale as AppLocale} settori={['pulizie', 'installatori', 'sicurezza']} />
      <UpdatedOnLine pageKey={pageKey} locale={locale} />
    </>
  );
}
