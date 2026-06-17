import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { getPaesiAutorita } from '@/lib/risorse/gps-lavoratori-ue/derive';
import {
  buildBreadcrumbItems,
  buildBreadcrumbJsonLd,
} from '@/lib/risorse/gps-lavoratori-ue/jsonLd';
import GeneratoreInformativaClient from '@/components/risorse/GeneratoreInformativaClient';

/**
 * Generatore di informativa GPS per i lavoratori.
 * Route: /[locale]/risorse/generatore-informativa-gps/
 * Tutto client-side: i dati e il logo dell'azienda non lasciano il browser.
 */

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

function safeLocale(locale: string): AppLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale)
    ? (locale as AppLocale)
    : ('it' as AppLocale);
}

const LABELS: Record<string, { heading: string; intro: string; form: { azienda: string; paese: string; paesePlaceholder: string; finalita: string; finalitaPlaceholder: string; quando: string; quandoPlaceholder: string; conservazione: string; conservazionePlaceholder: string; dpo: string; dpoPlaceholder: string; logo: string; logoHint: string; genera: string; privacyNote: string; docFooter: string; required: string } }> = {
  it: { heading: "Generatore di informativa GPS per i lavoratori", intro: "Crea in un minuto un fac-simile di informativa privacy per la geolocalizzazione dei dipendenti, conforme all'art. 13 GDPR, con i tuoi dati e il tuo logo. Tutto avviene nel tuo browser: niente lascia il tuo computer.", form: { azienda: "Ragione sociale / nome azienda", paese: "Paese in cui operi", paesePlaceholder: "", finalita: "Finalità del trattamento", finalitaPlaceholder: "Es. organizzazione delle squadre e prova del lavoro svolto", quando: "Quando viene rilevata la posizione", quandoPlaceholder: "Es. solo alla timbratura di entrata e uscita", conservazione: "Periodo di conservazione", conservazionePlaceholder: "Es. 12 mesi", dpo: "DPO (facoltativo)", dpoPlaceholder: "Nome e contatti del responsabile protezione dati", logo: "Carica il tuo logo", logoHint: "PNG o JPG, comparirà in testa al documento. Resta nel tuo browser.", genera: "Genera l'informativa (PDF)", privacyNote: "I dati e il logo non vengono inviati a nessun server: l'informativa è generata interamente nel tuo browser.", docFooter: "Bozza generata gratuitamente con GeoTapp", required: "Compila almeno azienda, finalità e quando." } },
  en: { heading: "GPS privacy notice generator for workers", intro: "Create a sample employee geolocation privacy notice in a minute, compliant with Art. 13 GDPR, with your details and your logo. Everything happens in your browser: nothing leaves your computer.", form: { azienda: "Legal name / company name", paese: "Country where you operate", paesePlaceholder: "", finalita: "Purpose of the processing", finalitaPlaceholder: "E.g. team organisation and proof of work performed", quando: "When location is collected", quandoPlaceholder: "E.g. only at clock-in and clock-out", conservazione: "Retention period", conservazionePlaceholder: "E.g. 12 months", dpo: "DPO (optional)", dpoPlaceholder: "Name and contact details of the data protection officer", logo: "Upload your logo", logoHint: "PNG or JPG, it will appear at the top of the document. It stays in your browser.", genera: "Generate the notice (PDF)", privacyNote: "Your data and logo are not sent to any server: the notice is generated entirely in your browser.", docFooter: "Draft generated for free with GeoTapp", required: "Fill in at least company, purpose and when." } },
  de: { heading: "Generator für GPS-Datenschutzhinweise für Mitarbeiter", intro: "Erstellen Sie in einer Minute eine Muster-Datenschutzerklärung für die Standortverfolgung von Mitarbeitern, konform mit Art. 13 DSGVO, mit Ihren Daten und Ihrem Logo. Alles geschieht in Ihrem Browser: Nichts verlässt Ihren Computer.", form: { azienda: "Firmenbezeichnung / Firmenname", paese: "Land, in dem Sie tätig sind", paesePlaceholder: "", finalita: "Zweck der Verarbeitung", finalitaPlaceholder: "Z. B. Organisation der Teams und Nachweis der geleisteten Arbeit", quando: "Wann der Standort erfasst wird", quandoPlaceholder: "Z. B. nur beim Ein- und Ausstempeln", conservazione: "Aufbewahrungsdauer", conservazionePlaceholder: "Z. B. 12 Monate", dpo: "Datenschutzbeauftragter (optional)", dpoPlaceholder: "Name und Kontaktdaten des Datenschutzbeauftragten", logo: "Laden Sie Ihr Logo hoch", logoHint: "PNG oder JPG, es erscheint oben im Dokument. Es bleibt in Ihrem Browser.", genera: "Hinweis erstellen (PDF)", privacyNote: "Ihre Daten und Ihr Logo werden an keinen Server gesendet: Der Hinweis wird vollständig in Ihrem Browser erstellt.", docFooter: "Entwurf kostenlos erstellt mit GeoTapp", required: "Füllen Sie mindestens Unternehmen, Zweck und Wann aus." } },
  fr: { heading: "Générateur d'avis de confidentialité GPS pour les travailleurs", intro: "Créez en une minute un modèle d'avis de confidentialité pour la géolocalisation des salariés, conforme à l'art. 13 du RGPD, avec vos données et votre logo. Tout se passe dans votre navigateur : rien ne quitte votre ordinateur.", form: { azienda: "Raison sociale / nom de l'entreprise", paese: "Pays où vous exercez", paesePlaceholder: "", finalita: "Finalité du traitement", finalitaPlaceholder: "Ex. organisation des équipes et preuve du travail effectué", quando: "Quand la position est relevée", quandoPlaceholder: "Ex. uniquement au pointage d'entrée et de sortie", conservazione: "Durée de conservation", conservazionePlaceholder: "Ex. 12 mois", dpo: "DPO (facultatif)", dpoPlaceholder: "Nom et coordonnées du délégué à la protection des données", logo: "Téléchargez votre logo", logoHint: "PNG ou JPG, il apparaîtra en haut du document. Il reste dans votre navigateur.", genera: "Générer l'avis (PDF)", privacyNote: "Vos données et votre logo ne sont envoyés à aucun serveur : l'avis est généré entièrement dans votre navigateur.", docFooter: "Brouillon généré gratuitement avec GeoTapp", required: "Remplissez au moins l'entreprise, la finalité et le quand." } },
  es: { heading: "Generador de aviso de privacidad GPS para trabajadores", intro: "Crea en un minuto un modelo de aviso de privacidad para la geolocalización de empleados, conforme al art. 13 del RGPD, con tus datos y tu logotipo. Todo ocurre en tu navegador: nada sale de tu ordenador.", form: { azienda: "Razón social / nombre de la empresa", paese: "País en el que operas", paesePlaceholder: "", finalita: "Finalidad del tratamiento", finalitaPlaceholder: "Ej. organización de los equipos y prueba del trabajo realizado", quando: "Cuándo se registra la ubicación", quandoPlaceholder: "Ej. solo al fichar la entrada y la salida", conservazione: "Período de conservación", conservazionePlaceholder: "Ej. 12 meses", dpo: "DPO (opcional)", dpoPlaceholder: "Nombre y datos de contacto del responsable de protección de datos", logo: "Sube tu logotipo", logoHint: "PNG o JPG, aparecerá en la parte superior del documento. Permanece en tu navegador.", genera: "Generar el aviso (PDF)", privacyNote: "Tus datos y tu logotipo no se envían a ningún servidor: el aviso se genera por completo en tu navegador.", docFooter: "Borrador generado gratuitamente con GeoTapp", required: "Completa al menos empresa, finalidad y cuándo." } },
  nl: { heading: "Generator voor GPS-privacyverklaring voor werknemers", intro: "Maak in een minuut een voorbeeld van een privacyverklaring voor de geolocatie van werknemers, conform art. 13 AVG, met uw gegevens en uw logo. Alles gebeurt in uw browser: niets verlaat uw computer.", form: { azienda: "Statutaire naam / bedrijfsnaam", paese: "Land waarin u actief bent", paesePlaceholder: "", finalita: "Doel van de verwerking", finalitaPlaceholder: "Bijv. organisatie van de teams en bewijs van verricht werk", quando: "Wanneer de locatie wordt geregistreerd", quandoPlaceholder: "Bijv. alleen bij het in- en uitklokken", conservazione: "Bewaartermijn", conservazionePlaceholder: "Bijv. 12 maanden", dpo: "FG (optioneel)", dpoPlaceholder: "Naam en contactgegevens van de functionaris voor gegevensbescherming", logo: "Upload uw logo", logoHint: "PNG of JPG, het verschijnt bovenaan het document. Het blijft in uw browser.", genera: "Verklaring genereren (PDF)", privacyNote: "Uw gegevens en logo worden naar geen enkele server verzonden: de verklaring wordt volledig in uw browser gegenereerd.", docFooter: "Concept gratis gegenereerd met GeoTapp", required: "Vul ten minste bedrijf, doel en wanneer in." } },
  pt: { heading: "Gerador de aviso de privacidade GPS para trabalhadores", intro: "Crie em um minuto um modelo de aviso de privacidade para a geolocalização de funcionários, em conformidade com o art. 13 do RGPD, com os seus dados e o seu logótipo. Tudo acontece no seu navegador: nada sai do seu computador.", form: { azienda: "Denominação social / nome da empresa", paese: "País onde opera", paesePlaceholder: "", finalita: "Finalidade do tratamento", finalitaPlaceholder: "Ex. organização das equipas e prova do trabalho realizado", quando: "Quando a localização é recolhida", quandoPlaceholder: "Ex. apenas na marcação de entrada e saída", conservazione: "Período de conservação", conservazionePlaceholder: "Ex. 12 meses", dpo: "DPO (facultativo)", dpoPlaceholder: "Nome e contactos do encarregado da proteção de dados", logo: "Carregue o seu logótipo", logoHint: "PNG ou JPG, aparecerá no topo do documento. Permanece no seu navegador.", genera: "Gerar o aviso (PDF)", privacyNote: "Os seus dados e o seu logótipo não são enviados a nenhum servidor: o aviso é gerado inteiramente no seu navegador.", docFooter: "Rascunho gerado gratuitamente com GeoTapp", required: "Preencha pelo menos empresa, finalidade e quando." } },
  da: { heading: "Generator til GPS-privatlivsmeddelelse for medarbejdere", intro: "Lav på et minut et eksempel på en privatlivsmeddelelse til geolokalisering af medarbejdere, i overensstemmelse med art. 13 i GDPR, med dine oplysninger og dit logo. Alt sker i din browser: intet forlader din computer.", form: { azienda: "Juridisk navn / virksomhedsnavn", paese: "Land hvor du driver virksomhed", paesePlaceholder: "", finalita: "Formål med behandlingen", finalitaPlaceholder: "F.eks. organisering af holdene og dokumentation af det udførte arbejde", quando: "Hvornår positionen registreres", quandoPlaceholder: "F.eks. kun ved ind- og udstempling", conservazione: "Opbevaringsperiode", conservazionePlaceholder: "F.eks. 12 måneder", dpo: "DPO (valgfrit)", dpoPlaceholder: "Navn og kontaktoplysninger på databeskyttelsesrådgiveren", logo: "Upload dit logo", logoHint: "PNG eller JPG, det vises øverst i dokumentet. Det forbliver i din browser.", genera: "Generér meddelelsen (PDF)", privacyNote: "Dine data og dit logo sendes ikke til nogen server: meddelelsen genereres udelukkende i din browser.", docFooter: "Udkast genereret gratis med GeoTapp", required: "Udfyld mindst virksomhed, formål og hvornår." } },
  sv: { heading: "Generator för GPS-integritetsmeddelande för anställda", intro: "Skapa på en minut ett exempel på ett integritetsmeddelande för geolokalisering av anställda, i enlighet med art. 13 i GDPR, med dina uppgifter och din logotyp. Allt sker i din webbläsare: ingenting lämnar din dator.", form: { azienda: "Juridiskt namn / företagsnamn", paese: "Land där du är verksam", paesePlaceholder: "", finalita: "Ändamål med behandlingen", finalitaPlaceholder: "T.ex. organisering av teamen och bevis på utfört arbete", quando: "När positionen registreras", quandoPlaceholder: "T.ex. endast vid in- och utstämpling", conservazione: "Lagringsperiod", conservazionePlaceholder: "T.ex. 12 månader", dpo: "DPO (valfritt)", dpoPlaceholder: "Namn och kontaktuppgifter till dataskyddsombudet", logo: "Ladda upp din logotyp", logoHint: "PNG eller JPG, den visas högst upp i dokumentet. Den stannar i din webbläsare.", genera: "Generera meddelandet (PDF)", privacyNote: "Dina uppgifter och din logotyp skickas inte till någon server: meddelandet genereras helt i din webbläsare.", docFooter: "Utkast genererat gratis med GeoTapp", required: "Fyll i åtminstone företag, ändamål och när." } },
  nb: { heading: "Generator for GPS-personvernerklæring for arbeidstakere", intro: "Lag på et minutt et eksempel på en personvernerklæring for geolokalisering av ansatte, i samsvar med art. 13 i GDPR, med dine opplysninger og din logo. Alt skjer i nettleseren din: ingenting forlater datamaskinen din.", form: { azienda: "Juridisk navn / firmanavn", paese: "Land der du driver virksomhet", paesePlaceholder: "", finalita: "Formål med behandlingen", finalitaPlaceholder: "F.eks. organisering av lagene og bevis på utført arbeid", quando: "Når posisjonen registreres", quandoPlaceholder: "F.eks. kun ved inn- og utstempling", conservazione: "Oppbevaringsperiode", conservazionePlaceholder: "F.eks. 12 måneder", dpo: "DPO (valgfritt)", dpoPlaceholder: "Navn og kontaktopplysninger til personvernombudet", logo: "Last opp logoen din", logoHint: "PNG eller JPG, den vises øverst i dokumentet. Den blir værende i nettleseren din.", genera: "Generer erklæringen (PDF)", privacyNote: "Dataene og logoen din sendes ikke til noen server: erklæringen genereres i sin helhet i nettleseren din.", docFooter: "Utkast generert gratis med GeoTapp", required: "Fyll inn minst firma, formål og når." } },
  ru: { heading: "Генератор уведомления о конфиденциальности GPS для работников", intro: "Создайте за минуту образец уведомления о конфиденциальности для геолокации сотрудников, соответствующий ст. 13 GDPR, с вашими данными и вашим логотипом. Всё происходит в вашем браузере: ничего не покидает ваш компьютер.", form: { azienda: "Юридическое наименование / название компании", paese: "Страна, в которой вы работаете", paesePlaceholder: "", finalita: "Цель обработки", finalitaPlaceholder: "Например, организация бригад и доказательство выполненной работы", quando: "Когда фиксируется местоположение", quandoPlaceholder: "Например, только при отметке прихода и ухода", conservazione: "Срок хранения", conservazionePlaceholder: "Например, 12 месяцев", dpo: "DPO (необязательно)", dpoPlaceholder: "Имя и контактные данные ответственного за защиту данных", logo: "Загрузите ваш логотип", logoHint: "PNG или JPG, он появится в верхней части документа. Остаётся в вашем браузере.", genera: "Создать уведомление (PDF)", privacyNote: "Ваши данные и логотип не отправляются ни на один сервер: уведомление генерируется полностью в вашем браузере.", docFooter: "Черновик создан бесплатно с помощью GeoTapp", required: "Заполните как минимум компанию, цель и когда." } },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = LABELS[safeLocale(locale)] ?? LABELS.it;
  return {
    title: { absolute: `${l.heading} — GeoTapp` },
    description: l.intro.slice(0, 155),
    alternates: buildLocaleAlternates(locale, '/risorse/generatore-informativa-gps/'),
  };
}

export default async function GeneratoreInformativaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const rl = safeLocale(locale);
  const l = LABELS[rl] ?? LABELS.it;
  const paesi = getPaesiAutorita().map((p) => ({
    id: p.codiceISO,
    nome: p.nomi?.[rl] ?? p.nome,
    autorita: p.autorita,
  }));

  const breadcrumbJsonLd = buildBreadcrumbJsonLd(buildBreadcrumbItems(rl, l.heading));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="bg-white min-h-screen text-slate-900 font-sans">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-16">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">{l.heading}</h1>
          <p className="text-slate-600 leading-relaxed mb-8">{l.intro}</p>
          <GeneratoreInformativaClient locale={rl} paesi={paesi} labels={l.form} />
        </div>
      </div>
    </>
  );
}
