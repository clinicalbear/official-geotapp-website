import type { AppLocale } from '@/lib/i18n/config';

/** Le varianti regionali dell'inglese (en-us, en-gb...) usano i testi di `en`. */
export type BaseLocale = Exclude<AppLocale, `en-${string}`>;
export function baseLocale(l: AppLocale): BaseLocale {
  return (l.startsWith('en-') ? 'en' : l) as BaseLocale;
}

/**
 * Due risorse scaricabili dietro email: il manuale (PDF, 96 pagine) e la
 * checklist (PDF, 2 pagine). Entrambe esistono solo in italiano e valgono per
 * la legge italiana. Le pagine esistono in tutte le 11 lingue: nelle altre dieci
 * dicono che l'edizione in quella lingua e' in arrivo, raccolgono l'email e
 * danno intanto la copia italiana.
 *
 * I PDF stanno in una cartella con un nome non indovinabile
 * (public/downloads/riservati/<token>/) e il link compare solo dopo l'invio
 * dell'email: e' un cancello morbido, non una protezione. La cartella e' in
 * Disallow in robots.ts.
 */

export type AssetKey = 'manuale' | 'checklist';

export const ASSETS: Record<AssetKey, {
  path: string;
  leadMagnet: string;
  file: string;
  cover: string | null;
  sizeLabel: string;
  pages: number;
}> = {
  manuale: {
    path: '/risorse/manuale-gdpr-lavoro-sul-campo/',
    leadMagnet: 'manuale-gdpr-lavoro',
    file: '/downloads/riservati/9c4e7a1b5d2f8036/posizione-orari-e-foto-di-chi-lavora-fuori-sede.pdf',
    cover: '/downloads/manuale-copertina.webp',
    sizeLabel: '2,7 MB',
    pages: 96,
  },
  checklist: {
    path: '/risorse/checklist-geolocalizzazione-squadre/',
    leadMagnet: 'checklist-10-domande',
    file: '/downloads/riservati/3b8d6f20a97c1e45/checklist-10-domande-squadre-sul-campo.pdf',
    cover: null,
    sizeLabel: '0,1 MB',
    pages: 2,
  },
};

export type UiCopy = {
  kicker: Record<AssetKey, string>;
  comingTitle: string;
  comingText: Record<AssetKey, string>;
  emailLabel: string;
  emailPlaceholder: string;
  consent: string;
  consentLink: string;
  button: string;
  sending: string;
  errorEmail: string;
  errorConsent: string;
  errorGeneric: string;
  successTitle: string;
  successText: string;
  downloadLabel: Record<AssetKey, string>;
  italianNote: string;
  whatTitle: string;
  disclaimerTitle: string;
  disclaimer: string;
  authorLine: string;
  contactPrompt: string;
  contactLink: string;
  resources: string;
};

export type AssetCopy = {
  metaTitle: string;
  metaDesc: string;
  h1: string;
  subtitle: string;
  p1: string;
  p2: string;
};

export const UI: Record<BaseLocale, UiCopy> = {
  it: {
    kicker: { manuale: 'Manuale in PDF', checklist: 'Checklist in PDF' },
    comingTitle: '',
    comingText: { manuale: '', checklist: '' },
    emailLabel: 'La tua email',
    emailPlaceholder: 'nome@azienda.it',
    consent: 'Ho letto la {privacy} e accetto di ricevere via email questo documento e, ogni tanto, altri contenuti di GeoTapp. Posso cancellarmi con un click.',
    consentLink: 'privacy policy',
    button: 'Scarica',
    sending: 'Invio...',
    errorEmail: 'Inserisci un indirizzo email valido.',
    errorConsent: 'Per scaricare serve spuntare la casella sulla privacy.',
    errorGeneric: 'Qualcosa è andato storto. Riprova tra un attimo.',
    successTitle: 'Fatto, ecco il documento',
    successText: 'Il link resta qui sotto. Se ti serve di nuovo, ripassa da questa pagina.',
    downloadLabel: { manuale: 'Scarica il manuale (PDF)', checklist: 'Scarica la checklist (PDF)' },
    italianNote: '',
    whatTitle: 'Che cosa è e che cosa non è',
    disclaimerTitle: 'Avvertenza',
    disclaimer: 'È una guida pratica e non una consulenza legale: non sostituisce il consulente del lavoro, un avvocato giuslavorista o il responsabile della protezione dei dati. Ogni caso concreto va valutato da loro.',
    authorLine: 'Edizione Italia, stato al 23 ottobre 2026, di Michele Angelo Petraroli.',
    contactPrompt: 'Se trovi un errore o un riferimento superato, scrivici dalla pagina',
    contactLink: 'contatti',
    resources: 'Risorse',
  },
  en: {
    kicker: { manuale: 'Manual (PDF)', checklist: 'Checklist (PDF)' },
    comingTitle: 'The English edition is coming',
    comingText: {
      manuale: 'This manual is written on Italian law (the Workers\' Statute and Italian data protection practice). The English edition is in preparation. Leave your email and we will send it when it is out; meanwhile you can download the Italian edition.',
      checklist: 'This checklist is based on Italian law (the Workers\' Statute and Italian data protection practice). The English edition is in preparation. Leave your email and we will send it when it is out; meanwhile you can download the Italian edition.',
    },
    emailLabel: 'Your email',
    emailPlaceholder: 'name@company.com',
    consent: 'I have read the {privacy} and agree to receive this document by email and, now and then, other GeoTapp content. I can unsubscribe with one click.',
    consentLink: 'privacy policy',
    button: 'Download',
    sending: 'Sending...',
    errorEmail: 'Enter a valid email address.',
    errorConsent: 'Please tick the privacy box to download.',
    errorGeneric: 'Something went wrong. Please try again in a moment.',
    successTitle: 'Done, here is the document',
    successText: 'The link stays below. If you need it again, come back to this page.',
    downloadLabel: { manuale: 'Download the Italian manual (PDF)', checklist: 'Download the Italian checklist (PDF)' },
    italianNote: 'This file is the Italian edition.',
    whatTitle: 'What it is and what it is not',
    disclaimerTitle: 'Notice',
    disclaimer: 'It is a practical guide and not legal advice: it does not replace your labour consultant, an employment lawyer or a data protection officer. Each case must be assessed by them.',
    authorLine: 'Italian edition, as of 23 October 2026, by Michele Angelo Petraroli.',
    contactPrompt: 'If you find a mistake or an outdated reference, write to us from the',
    contactLink: 'contact page',
    resources: 'Resources',
  },
  de: {
    kicker: { manuale: 'Handbuch (PDF)', checklist: 'Checkliste (PDF)' },
    comingTitle: 'Die deutsche Ausgabe ist in Vorbereitung',
    comingText: {
      manuale: 'Dieses Handbuch beruht auf italienischem Recht (Arbeitnehmerstatut und italienische Datenschutzpraxis). Die deutsche Ausgabe ist in Arbeit. Hinterlassen Sie Ihre E-Mail-Adresse, wir senden sie Ihnen, sobald sie erscheint; die italienische Ausgabe können Sie schon jetzt herunterladen.',
      checklist: 'Diese Checkliste beruht auf italienischem Recht (Arbeitnehmerstatut und italienische Datenschutzpraxis). Die deutsche Ausgabe ist in Arbeit. Hinterlassen Sie Ihre E-Mail-Adresse, wir senden sie Ihnen, sobald sie erscheint; die italienische Ausgabe können Sie schon jetzt herunterladen.',
    },
    emailLabel: 'Ihre E-Mail',
    emailPlaceholder: 'name@firma.de',
    consent: 'Ich habe die {privacy} gelesen und bin einverstanden, dieses Dokument und gelegentlich weitere Inhalte von GeoTapp per E-Mail zu erhalten. Ich kann mich mit einem Klick abmelden.',
    consentLink: 'Datenschutzerklärung',
    button: 'Herunterladen',
    sending: 'Wird gesendet...',
    errorEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
    errorConsent: 'Zum Herunterladen bitte das Feld zum Datenschutz anhaken.',
    errorGeneric: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es gleich noch einmal.',
    successTitle: 'Fertig, hier ist das Dokument',
    successText: 'Der Link bleibt unten stehen. Wenn Sie ihn wieder brauchen, kommen Sie auf diese Seite zurück.',
    downloadLabel: { manuale: 'Italienisches Handbuch herunterladen (PDF)', checklist: 'Italienische Checkliste herunterladen (PDF)' },
    italianNote: 'Diese Datei ist die italienische Ausgabe.',
    whatTitle: 'Was es ist und was nicht',
    disclaimerTitle: 'Hinweis',
    disclaimer: 'Es ist ein praktischer Leitfaden und keine Rechtsberatung: Er ersetzt weder Ihren Arbeitsrechtsberater noch einen Fachanwalt für Arbeitsrecht oder den Datenschutzbeauftragten. Jeder Einzelfall muss von diesen beurteilt werden.',
    authorLine: 'Italienische Ausgabe, Stand 23. Oktober 2026, von Michele Angelo Petraroli.',
    contactPrompt: 'Wenn Sie einen Fehler oder eine veraltete Angabe finden, schreiben Sie uns über die',
    contactLink: 'Kontaktseite',
    resources: 'Ressourcen',
  },
  fr: {
    kicker: { manuale: 'Manuel (PDF)', checklist: 'Checklist (PDF)' },
    comingTitle: 'L\'édition française arrive',
    comingText: {
      manuale: 'Ce manuel repose sur le droit italien (le Statut des travailleurs et la pratique italienne en matière de protection des données). L\'édition française est en préparation. Laissez votre e-mail : nous vous l\'enverrons à sa sortie ; en attendant, vous pouvez télécharger l\'édition italienne.',
      checklist: 'Cette checklist repose sur le droit italien (le Statut des travailleurs et la pratique italienne en matière de protection des données). L\'édition française est en préparation. Laissez votre e-mail : nous vous l\'enverrons à sa sortie ; en attendant, vous pouvez télécharger l\'édition italienne.',
    },
    emailLabel: 'Votre e-mail',
    emailPlaceholder: 'nom@entreprise.fr',
    consent: 'J\'ai lu la {privacy} et j\'accepte de recevoir ce document par e-mail et, de temps en temps, d\'autres contenus de GeoTapp. Je peux me désinscrire en un clic.',
    consentLink: 'politique de confidentialité',
    button: 'Télécharger',
    sending: 'Envoi...',
    errorEmail: 'Saisissez une adresse e-mail valide.',
    errorConsent: 'Pour télécharger, cochez la case sur la confidentialité.',
    errorGeneric: 'Une erreur est survenue. Réessayez dans un instant.',
    successTitle: 'C\'est fait, voici le document',
    successText: 'Le lien reste ci-dessous. Si vous en avez de nouveau besoin, revenez sur cette page.',
    downloadLabel: { manuale: 'Télécharger le manuel italien (PDF)', checklist: 'Télécharger la checklist italienne (PDF)' },
    italianNote: 'Ce fichier est l\'édition italienne.',
    whatTitle: 'Ce que c\'est et ce que ce n\'est pas',
    disclaimerTitle: 'Avertissement',
    disclaimer: 'C\'est un guide pratique et non un conseil juridique : il ne remplace ni votre conseil en droit du travail, ni un avocat en droit du travail, ni le délégué à la protection des données. Chaque cas concret doit être évalué par eux.',
    authorLine: 'Édition italienne, état au 23 octobre 2026, par Michele Angelo Petraroli.',
    contactPrompt: 'Si vous trouvez une erreur ou une référence dépassée, écrivez-nous depuis la',
    contactLink: 'page de contact',
    resources: 'Ressources',
  },
  es: {
    kicker: { manuale: 'Manual (PDF)', checklist: 'Lista de verificación (PDF)' },
    comingTitle: 'La edición en español está en camino',
    comingText: {
      manuale: 'Este manual se basa en el derecho italiano (el Estatuto de los Trabajadores y la práctica italiana de protección de datos). La edición en español está en preparación. Deja tu correo y te la enviaremos cuando salga; mientras tanto puedes descargar la edición italiana.',
      checklist: 'Esta lista de verificación se basa en el derecho italiano (el Estatuto de los Trabajadores y la práctica italiana de protección de datos). La edición en español está en preparación. Deja tu correo y te la enviaremos cuando salga; mientras tanto puedes descargar la edición italiana.',
    },
    emailLabel: 'Tu correo electrónico',
    emailPlaceholder: 'nombre@empresa.es',
    consent: 'He leído la {privacy} y acepto recibir por correo este documento y, de vez en cuando, otros contenidos de GeoTapp. Puedo darme de baja con un clic.',
    consentLink: 'política de privacidad',
    button: 'Descargar',
    sending: 'Enviando...',
    errorEmail: 'Introduce una dirección de correo válida.',
    errorConsent: 'Para descargar, marca la casilla de privacidad.',
    errorGeneric: 'Algo ha salido mal. Inténtalo de nuevo dentro de un momento.',
    successTitle: 'Listo, aquí tienes el documento',
    successText: 'El enlace queda aquí abajo. Si lo necesitas otra vez, vuelve a esta página.',
    downloadLabel: { manuale: 'Descargar el manual italiano (PDF)', checklist: 'Descargar la lista de verificación italiana (PDF)' },
    italianNote: 'Este archivo es la edición italiana.',
    whatTitle: 'Qué es y qué no es',
    disclaimerTitle: 'Aviso',
    disclaimer: 'Es una guía práctica y no asesoramiento jurídico: no sustituye a tu asesor laboral, a un abogado laboralista ni al delegado de protección de datos. Cada caso concreto debe valorarlo uno de ellos.',
    authorLine: 'Edición italiana, a 23 de octubre de 2026, de Michele Angelo Petraroli.',
    contactPrompt: 'Si encuentras un error o una referencia desactualizada, escríbenos desde la página de',
    contactLink: 'contacto',
    resources: 'Recursos',
  },
  pt: {
    kicker: { manuale: 'Manual (PDF)', checklist: 'Checklist (PDF)' },
    comingTitle: 'A edição em português está a caminho',
    comingText: {
      manuale: 'Este manual baseia-se no direito italiano (o Estatuto dos Trabalhadores e a prática italiana de proteção de dados). A edição em português está em preparação. Deixe o seu email e enviamos quando sair; entretanto, pode descarregar a edição italiana.',
      checklist: 'Esta checklist baseia-se no direito italiano (o Estatuto dos Trabalhadores e a prática italiana de proteção de dados). A edição em português está em preparação. Deixe o seu email e enviamos quando sair; entretanto, pode descarregar a edição italiana.',
    },
    emailLabel: 'O seu email',
    emailPlaceholder: 'nome@empresa.pt',
    consent: 'Li a {privacy} e aceito receber por email este documento e, de vez em quando, outros conteúdos da GeoTapp. Posso cancelar a subscrição com um clique.',
    consentLink: 'política de privacidade',
    button: 'Descarregar',
    sending: 'A enviar...',
    errorEmail: 'Introduza um endereço de email válido.',
    errorConsent: 'Para descarregar, assinale a caixa da privacidade.',
    errorGeneric: 'Algo correu mal. Tente de novo dentro de instantes.',
    successTitle: 'Feito, aqui está o documento',
    successText: 'A ligação fica aqui em baixo. Se precisar dela outra vez, volte a esta página.',
    downloadLabel: { manuale: 'Descarregar o manual italiano (PDF)', checklist: 'Descarregar a checklist italiana (PDF)' },
    italianNote: 'Este ficheiro é a edição italiana.',
    whatTitle: 'O que é e o que não é',
    disclaimerTitle: 'Aviso',
    disclaimer: 'É um guia prático e não aconselhamento jurídico: não substitui o seu consultor laboral, um advogado de direito do trabalho nem o encarregado da proteção de dados. Cada caso concreto deve ser avaliado por eles.',
    authorLine: 'Edição italiana, a 23 de outubro de 2026, de Michele Angelo Petraroli.',
    contactPrompt: 'Se encontrar um erro ou uma referência desatualizada, escreva-nos a partir da página de',
    contactLink: 'contactos',
    resources: 'Recursos',
  },
  nl: {
    kicker: { manuale: 'Handboek (PDF)', checklist: 'Checklist (PDF)' },
    comingTitle: 'De Nederlandse editie komt eraan',
    comingText: {
      manuale: 'Dit handboek is gebaseerd op Italiaans recht (het Italiaanse arbeidsstatuut en de Italiaanse praktijk rond gegevensbescherming). De Nederlandse editie is in voorbereiding. Laat je e-mailadres achter: we sturen hem zodra hij uit is; ondertussen kun je de Italiaanse editie downloaden.',
      checklist: 'Deze checklist is gebaseerd op Italiaans recht (het Italiaanse arbeidsstatuut en de Italiaanse praktijk rond gegevensbescherming). De Nederlandse editie is in voorbereiding. Laat je e-mailadres achter: we sturen hem zodra hij uit is; ondertussen kun je de Italiaanse editie downloaden.',
    },
    emailLabel: 'Je e-mailadres',
    emailPlaceholder: 'naam@bedrijf.nl',
    consent: 'Ik heb het {privacy} gelezen en ga ermee akkoord dit document per e-mail te ontvangen en af en toe andere content van GeoTapp. Ik kan me met één klik afmelden.',
    consentLink: 'privacybeleid',
    button: 'Downloaden',
    sending: 'Verzenden...',
    errorEmail: 'Vul een geldig e-mailadres in.',
    errorConsent: 'Vink het privacyvakje aan om te downloaden.',
    errorGeneric: 'Er ging iets mis. Probeer het zo nog eens.',
    successTitle: 'Klaar, hier is het document',
    successText: 'De link blijft hieronder staan. Heb je hem opnieuw nodig, kom dan terug naar deze pagina.',
    downloadLabel: { manuale: 'Italiaans handboek downloaden (PDF)', checklist: 'Italiaanse checklist downloaden (PDF)' },
    italianNote: 'Dit bestand is de Italiaanse editie.',
    whatTitle: 'Wat het is en wat niet',
    disclaimerTitle: 'Let op',
    disclaimer: 'Het is een praktische gids en geen juridisch advies: het vervangt je arbeidsconsulent, een arbeidsrechtadvocaat of de functionaris voor gegevensbescherming niet. Elk concreet geval moet door hen worden beoordeeld.',
    authorLine: 'Italiaanse editie, stand 23 oktober 2026, van Michele Angelo Petraroli.',
    contactPrompt: 'Als je een fout of een verouderde verwijzing vindt, schrijf ons dan via de',
    contactLink: 'contactpagina',
    resources: 'Bronnen',
  },
  da: {
    kicker: { manuale: 'Håndbog (PDF)', checklist: 'Tjekliste (PDF)' },
    comingTitle: 'Den danske udgave er på vej',
    comingText: {
      manuale: 'Denne håndbog bygger på italiensk ret (den italienske arbejdstagerlov og italiensk praksis for databeskyttelse). Den danske udgave er under udarbejdelse. Skriv din e-mail, så sender vi den, når den udkommer; i mellemtiden kan du hente den italienske udgave.',
      checklist: 'Denne tjekliste bygger på italiensk ret (den italienske arbejdstagerlov og italiensk praksis for databeskyttelse). Den danske udgave er under udarbejdelse. Skriv din e-mail, så sender vi den, når den udkommer; i mellemtiden kan du hente den italienske udgave.',
    },
    emailLabel: 'Din e-mail',
    emailPlaceholder: 'navn@firma.dk',
    consent: 'Jeg har læst {privacy} og accepterer at modtage dette dokument på e-mail og en gang imellem andet indhold fra GeoTapp. Jeg kan afmelde mig med et klik.',
    consentLink: 'privatlivspolitikken',
    button: 'Download',
    sending: 'Sender...',
    errorEmail: 'Skriv en gyldig e-mailadresse.',
    errorConsent: 'Sæt kryds i feltet om privatliv for at downloade.',
    errorGeneric: 'Noget gik galt. Prøv igen om lidt.',
    successTitle: 'Færdig, her er dokumentet',
    successText: 'Linket bliver stående herunder. Har du brug for det igen, så kom tilbage til denne side.',
    downloadLabel: { manuale: 'Hent den italienske håndbog (PDF)', checklist: 'Hent den italienske tjekliste (PDF)' },
    italianNote: 'Denne fil er den italienske udgave.',
    whatTitle: 'Hvad det er, og hvad det ikke er',
    disclaimerTitle: 'Bemærk',
    disclaimer: 'Det er en praktisk vejledning og ikke juridisk rådgivning: den erstatter ikke din arbejdsretlige rådgiver, en advokat i arbejdsret eller databeskyttelsesrådgiveren. Hver enkelt sag skal vurderes af dem.',
    authorLine: 'Italiensk udgave, pr. 23. oktober 2026, af Michele Angelo Petraroli.',
    contactPrompt: 'Finder du en fejl eller en forældet henvisning, så skriv til os fra',
    contactLink: 'kontaktsiden',
    resources: 'Ressourcer',
  },
  sv: {
    kicker: { manuale: 'Handbok (PDF)', checklist: 'Checklista (PDF)' },
    comingTitle: 'Den svenska utgåvan är på väg',
    comingText: {
      manuale: 'Den här handboken bygger på italiensk rätt (den italienska arbetstagarstadgan och italiensk praxis för dataskydd). Den svenska utgåvan är under arbete. Lämna din e-postadress så skickar vi den när den kommer; under tiden kan du ladda ner den italienska utgåvan.',
      checklist: 'Den här checklistan bygger på italiensk rätt (den italienska arbetstagarstadgan och italiensk praxis för dataskydd). Den svenska utgåvan är under arbete. Lämna din e-postadress så skickar vi den när den kommer; under tiden kan du ladda ner den italienska utgåvan.',
    },
    emailLabel: 'Din e-postadress',
    emailPlaceholder: 'namn@foretag.se',
    consent: 'Jag har läst {privacy} och godkänner att få det här dokumentet och ibland annat innehåll från GeoTapp via e-post. Jag kan avsluta med ett klick.',
    consentLink: 'integritetspolicyn',
    button: 'Ladda ner',
    sending: 'Skickar...',
    errorEmail: 'Ange en giltig e-postadress.',
    errorConsent: 'Kryssa i rutan om integritet för att ladda ner.',
    errorGeneric: 'Något gick fel. Försök igen om en stund.',
    successTitle: 'Klart, här är dokumentet',
    successText: 'Länken blir kvar nedan. Behöver du den igen, kom tillbaka till den här sidan.',
    downloadLabel: { manuale: 'Ladda ner den italienska handboken (PDF)', checklist: 'Ladda ner den italienska checklistan (PDF)' },
    italianNote: 'Den här filen är den italienska utgåvan.',
    whatTitle: 'Vad det är och inte är',
    disclaimerTitle: 'Observera',
    disclaimer: 'Det är en praktisk vägledning och inte juridisk rådgivning: den ersätter inte din arbetsrättsliga rådgivare, en arbetsrättsadvokat eller dataskyddsombudet. Varje enskilt fall måste bedömas av dem.',
    authorLine: 'Italiensk utgåva, per 23 oktober 2026, av Michele Angelo Petraroli.',
    contactPrompt: 'Hittar du ett fel eller en föråldrad hänvisning, skriv till oss från',
    contactLink: 'kontaktsidan',
    resources: 'Resurser',
  },
  nb: {
    kicker: { manuale: 'Håndbok (PDF)', checklist: 'Sjekkliste (PDF)' },
    comingTitle: 'Den norske utgaven er på vei',
    comingText: {
      manuale: 'Denne håndboken bygger på italiensk rett (den italienske arbeidstakerloven og italiensk praksis for personvern). Den norske utgaven er under arbeid. Legg igjen e-postadressen din, så sender vi den når den kommer; i mellomtiden kan du laste ned den italienske utgaven.',
      checklist: 'Denne sjekklisten bygger på italiensk rett (den italienske arbeidstakerloven og italiensk praksis for personvern). Den norske utgaven er under arbeid. Legg igjen e-postadressen din, så sender vi den når den kommer; i mellomtiden kan du laste ned den italienske utgaven.',
    },
    emailLabel: 'Din e-post',
    emailPlaceholder: 'navn@firma.no',
    consent: 'Jeg har lest {privacy} og godtar å motta dette dokumentet og av og til annet innhold fra GeoTapp på e-post. Jeg kan melde meg av med ett klikk.',
    consentLink: 'personvernerklæringen',
    button: 'Last ned',
    sending: 'Sender...',
    errorEmail: 'Skriv inn en gyldig e-postadresse.',
    errorConsent: 'Kryss av i personvernboksen for å laste ned.',
    errorGeneric: 'Noe gikk galt. Prøv igjen om litt.',
    successTitle: 'Ferdig, her er dokumentet',
    successText: 'Lenken blir stående under. Trenger du den igjen, kom tilbake til denne siden.',
    downloadLabel: { manuale: 'Last ned den italienske håndboken (PDF)', checklist: 'Last ned den italienske sjekklisten (PDF)' },
    italianNote: 'Denne filen er den italienske utgaven.',
    whatTitle: 'Hva det er og ikke er',
    disclaimerTitle: 'Merk',
    disclaimer: 'Det er en praktisk veiledning og ikke juridisk rådgivning: den erstatter ikke din arbeidsrettslige rådgiver, en advokat i arbeidsrett eller personvernombudet. Hvert enkelt tilfelle må vurderes av dem.',
    authorLine: 'Italiensk utgave, per 23. oktober 2026, av Michele Angelo Petraroli.',
    contactPrompt: 'Finner du en feil eller en utdatert henvisning, skriv til oss fra',
    contactLink: 'kontaktsiden',
    resources: 'Ressurser',
  },
  ru: {
    kicker: { manuale: 'Руководство (PDF)', checklist: 'Чек-лист (PDF)' },
    comingTitle: 'Русское издание готовится',
    comingText: {
      manuale: 'Это руководство основано на итальянском праве (Статут трудящихся и итальянская практика защиты данных). Русское издание готовится. Оставьте адрес электронной почты, и мы пришлём его, когда оно выйдет; а пока можно скачать итальянское издание.',
      checklist: 'Этот чек-лист основан на итальянском праве (Статут трудящихся и итальянская практика защиты данных). Русское издание готовится. Оставьте адрес электронной почты, и мы пришлём его, когда оно выйдет; а пока можно скачать итальянское издание.',
    },
    emailLabel: 'Ваш адрес электронной почты',
    emailPlaceholder: 'name@company.ru',
    consent: 'Я прочитал(а) {privacy} и согласен(на) получать этот документ по электронной почте и время от времени другие материалы GeoTapp. Отписаться можно одним щелчком.',
    consentLink: 'политику конфиденциальности',
    button: 'Скачать',
    sending: 'Отправка...',
    errorEmail: 'Введите действительный адрес электронной почты.',
    errorConsent: 'Чтобы скачать, отметьте согласие с политикой конфиденциальности.',
    errorGeneric: 'Что-то пошло не так. Попробуйте ещё раз чуть позже.',
    successTitle: 'Готово, вот документ',
    successText: 'Ссылка остаётся ниже. Если она понадобится снова, вернитесь на эту страницу.',
    downloadLabel: { manuale: 'Скачать итальянское руководство (PDF)', checklist: 'Скачать итальянский чек-лист (PDF)' },
    italianNote: 'Этот файл — итальянское издание.',
    whatTitle: 'Что это и чем не является',
    disclaimerTitle: 'Предупреждение',
    disclaimer: 'Это практическое руководство, а не юридическая консультация: оно не заменяет вашего консультанта по трудовым вопросам, адвоката по трудовому праву или ответственного за защиту данных. Каждый конкретный случай должны оценивать они.',
    authorLine: 'Итальянское издание, по состоянию на 23 октября 2026 года, автор — Michele Angelo Petraroli.',
    contactPrompt: 'Если вы нашли ошибку или устаревшую ссылку, напишите нам со страницы',
    contactLink: 'контактов',
    resources: 'Ресурсы',
  },
};

export const COPY: Record<BaseLocale, Record<AssetKey, AssetCopy>> = {
  it: {
    manuale: {
      metaTitle: 'Manuale GDPR e Statuto dei lavoratori per squadre sul campo (PDF)',
      metaDesc: 'Manuale pratico in PDF su GPS, timbratura con la posizione e foto di prova per chi ha squadre fuori sede: articolo 4 dello Statuto, GDPR, casi del Garante, modelli. Stato al 23 ottobre 2026.',
      h1: 'Posizione, orari e foto di chi lavora fuori sede',
      subtitle: 'Manuale pratico tra Statuto dei lavoratori, GDPR e squadre sul campo',
      p1: 'Un titolare di PMI con una squadra sul campo si trova davanti a due leggi e a due cancelli: lo Statuto dei lavoratori, con l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato, e il GDPR, con finalità, informativa, conservazione e diritti. Superare uno dei due non vuol dire aver superato l\'altro. Il manuale mette in fila le regole, i provvedimenti del Garante, le note dell\'Ispettorato e le sentenze, e dice quali domande farsi prima di accendere qualunque strumento.',
      p2: 'Sono 17 capitoli, un glossario e otto appendici con tracce di informativa, valutazione d\'impatto, registro dei trattamenti, relazione per l\'Ispettorato, risposta a una richiesta di accesso e clausole per il fornitore. Ogni affermazione ha la sua nota a piè di pagina, con il link alla fonte (quando è pubblica) e l\'indicazione di quanto la fonte è stata letta direttamente. È la bozza 3 e non è ancora stata sottoposta a revisione di un professionista.',
    },
    checklist: {
      metaTitle: 'Checklist: le 10 domande prima di attivare GPS, orari e foto (PDF)',
      metaDesc: 'Checklist in PDF di due pagine per chi ha squadre sul campo: le 10 domande da farsi prima di attivare posizione, orari o foto, con i rinvii al manuale. Stato al 23 ottobre 2026.',
      h1: 'Hai una squadra sul campo? Le 10 domande da farsi prima di attivare la posizione',
      subtitle: 'Una checklist di due pagine, ricavata dal manuale, da stampare e compilare a penna',
      p1: 'Si fanno prima di attivare qualunque strumento e si ripetono una volta all\'anno, perché gli strumenti cambiano più in fretta delle persone che li usano. Dalla finalità scritta in una riga alla richiesta di accesso del dipendente, passando per l\'articolo 4 dello Statuto, la valutazione d\'impatto, l\'informativa e il contratto col fornitore.',
      p2: 'Ogni domanda rinvia al capitolo del manuale che la spiega, con le fonti. Se a una domanda rispondi «non so», la risposta è già un\'informazione: segna chi in azienda potrebbe saperlo, o dove serve un consulente. Vale con qualunque strumento, non solo con il nostro.',
    },
  },
  en: {
    manuale: {
      metaTitle: 'Manual on location, hours and photos of field workers (Italy, PDF)',
      metaDesc: 'Practical manual in PDF on GPS clock-in, location and proof photos for off-site teams under Italian law: Workers\' Statute article 4, GDPR, Garante cases, templates. Italian edition, as of 23 October 2026.',
      h1: 'Location, working hours and photos of field workers',
      subtitle: 'A practical manual on the Italian Workers\' Statute and the GDPR for teams working off-site',
      p1: 'An owner of a small business with a field team faces two laws and two gates: the Workers\' Statute, with a union agreement or authorisation from the Labour Inspectorate, and the GDPR, with purpose, notice, retention and rights. Passing one does not mean passing the other. The manual lays out the rules, the decisions of the Italian data protection authority, the Inspectorate\'s notes and the case law, and says which questions to ask before switching on any tool.',
      p2: 'It has 17 chapters, a glossary and eight appendices with outlines for a privacy notice, a data protection impact assessment, a record of processing, a report for the Inspectorate, a reply to an access request and supplier clauses. Every statement has its footnote with the link to the source (when it is public) and how far the source was read directly. It is draft 3 and has not yet been reviewed by a professional.',
    },
    checklist: {
      metaTitle: 'Checklist: 10 questions before switching on GPS, hours and photos (Italy, PDF)',
      metaDesc: 'Two-page PDF checklist for teams working off-site in Italy: the 10 questions to ask before switching on location, hours or photos, with references to the manual. Italian edition, as of 23 October 2026.',
      h1: 'Do you have a field team? The 10 questions to ask before switching on location, hours or photos',
      subtitle: 'A two-page checklist taken from the manual, to print and fill in by hand',
      p1: 'They are asked before switching on any tool and repeated once a year, because tools change faster than the people who use them. From the purpose written in one line to the employee\'s access request, through article 4 of the Workers\' Statute, the impact assessment, the privacy notice and the supplier contract.',
      p2: 'Each question points to the chapter of the manual that explains it, with sources. If you answer "I don\'t know", that is already information: note who in the company might know, or where you need a consultant. It works with any tool, not only ours.',
    },
  },
  de: {
    manuale: {
      metaTitle: 'Handbuch: Standort, Arbeitszeiten und Fotos im Außendienst (Italien, PDF)',
      metaDesc: 'Praxishandbuch als PDF zu GPS-Zeiterfassung, Standort und Nachweisfotos für Teams im Außendienst nach italienischem Recht: Arbeitnehmerstatut Art. 4, DSGVO, Fälle der Aufsicht, Vorlagen. Italienische Ausgabe, Stand 23. Oktober 2026.',
      h1: 'Standort, Arbeitszeiten und Fotos von Mitarbeitenden im Außendienst',
      subtitle: 'Praxishandbuch zum italienischen Arbeitnehmerstatut und zur DSGVO für Teams im Einsatz vor Ort',
      p1: 'Wer ein kleines Unternehmen mit einem Team im Außendienst führt, steht vor zwei Gesetzen und zwei Toren: dem Arbeitnehmerstatut, mit Betriebsvereinbarung oder Genehmigung der Arbeitsaufsicht, und der DSGVO, mit Zweck, Information, Speicherdauer und Rechten. Das eine Tor zu passieren heißt nicht, das andere passiert zu haben. Das Handbuch ordnet die Regeln, die Entscheidungen der italienischen Datenschutzbehörde, die Hinweise der Arbeitsaufsicht und die Rechtsprechung und nennt die Fragen, die vor dem Einschalten jedes Werkzeugs zu stellen sind.',
      p2: 'Es umfasst 17 Kapitel, ein Glossar und acht Anhänge mit Mustern für Datenschutzhinweis, Datenschutz-Folgenabschätzung, Verarbeitungsverzeichnis, Bericht an die Arbeitsaufsicht, Antwort auf ein Auskunftsersuchen und Klauseln für den Lieferanten. Jede Aussage hat ihre Fußnote mit Link zur Quelle (wenn öffentlich) und dem Hinweis, wie weit die Quelle direkt gelesen wurde. Es ist Entwurf 3 und noch nicht von einer Fachperson geprüft.',
    },
    checklist: {
      metaTitle: 'Checkliste: 10 Fragen vor dem Einschalten von GPS, Zeiten und Fotos (Italien, PDF)',
      metaDesc: 'Zweiseitige Checkliste als PDF für Teams im Außendienst in Italien: die 10 Fragen vor dem Einschalten von Standort, Zeiten oder Fotos, mit Verweisen auf das Handbuch. Italienische Ausgabe, Stand 23. Oktober 2026.',
      h1: 'Haben Sie ein Team im Außendienst? Die 10 Fragen vor dem Einschalten von Standort, Zeiten oder Fotos',
      subtitle: 'Eine zweiseitige Checkliste aus dem Handbuch, zum Ausdrucken und handschriftlichen Ausfüllen',
      p1: 'Man stellt sie vor dem Einschalten jedes Werkzeugs und wiederholt sie einmal im Jahr, denn Werkzeuge ändern sich schneller als die Menschen, die sie nutzen. Vom Zweck in einer Zeile bis zum Auskunftsersuchen des Mitarbeiters, über Art. 4 des Arbeitnehmerstatuts, die Folgenabschätzung, den Datenschutzhinweis und den Vertrag mit dem Lieferanten.',
      p2: 'Jede Frage verweist auf das Kapitel des Handbuchs, das sie erklärt, mit Quellen. Wenn Sie bei einer Frage „weiß nicht“ antworten, ist das schon eine Information: Notieren Sie, wer im Unternehmen es wissen könnte oder wo ein Berater nötig ist. Sie gilt mit jedem Werkzeug, nicht nur mit unserem.',
    },
  },
  fr: {
    manuale: {
      metaTitle: 'Manuel : position, horaires et photos des équipes sur le terrain (Italie, PDF)',
      metaDesc: 'Manuel pratique en PDF sur le pointage GPS, la position et les photos de preuve pour les équipes hors site selon le droit italien : article 4 du Statut des travailleurs, RGPD, décisions de l\'autorité, modèles. Édition italienne, état au 23 octobre 2026.',
      h1: 'Position, horaires et photos des équipes sur le terrain',
      subtitle: 'Manuel pratique sur le Statut des travailleurs italien et le RGPD pour les équipes hors site',
      p1: 'Le dirigeant d\'une petite entreprise avec une équipe sur le terrain se trouve devant deux lois et deux portes : le Statut des travailleurs, avec l\'accord syndical ou l\'autorisation de l\'Inspection du travail, et le RGPD, avec finalité, information, conservation et droits. Franchir l\'une ne veut pas dire avoir franchi l\'autre. Le manuel met en ordre les règles, les décisions de l\'autorité italienne de protection des données, les notes de l\'Inspection et la jurisprudence, et dit quelles questions se poser avant d\'activer le moindre outil.',
      p2: 'Il compte 17 chapitres, un glossaire et huit annexes avec des trames d\'information, d\'analyse d\'impact, de registre des traitements, de rapport pour l\'Inspection, de réponse à une demande d\'accès et de clauses pour le fournisseur. Chaque affirmation a sa note de bas de page, avec le lien vers la source (quand elle est publique) et l\'indication de la part lue directement. C\'est la version provisoire 3, pas encore relue par un professionnel.',
    },
    checklist: {
      metaTitle: 'Checklist : 10 questions avant d\'activer le GPS, les horaires et les photos (Italie, PDF)',
      metaDesc: 'Checklist PDF de deux pages pour les équipes hors site en Italie : les 10 questions à se poser avant d\'activer la position, les horaires ou les photos, avec renvois au manuel. Édition italienne, état au 23 octobre 2026.',
      h1: 'Vous avez une équipe sur le terrain ? Les 10 questions avant d\'activer la position, les horaires ou les photos',
      subtitle: 'Une checklist de deux pages tirée du manuel, à imprimer et à remplir au stylo',
      p1: 'On se les pose avant d\'activer le moindre outil et on les répète une fois par an, parce que les outils changent plus vite que les personnes qui les utilisent. De la finalité écrite en une ligne à la demande d\'accès du salarié, en passant par l\'article 4 du Statut, l\'analyse d\'impact, l\'information et le contrat avec le fournisseur.',
      p2: 'Chaque question renvoie au chapitre du manuel qui l\'explique, avec les sources. Si vous répondez « je ne sais pas », c\'est déjà une information : notez qui, dans l\'entreprise, pourrait le savoir, ou où il faut un conseil. Elle vaut avec n\'importe quel outil, pas seulement le nôtre.',
    },
  },
  es: {
    manuale: {
      metaTitle: 'Manual: ubicación, horarios y fotos de equipos sobre el terreno (Italia, PDF)',
      metaDesc: 'Manual práctico en PDF sobre fichaje con GPS, ubicación y fotos de prueba para equipos fuera de la sede según el derecho italiano: artículo 4 del Estatuto, RGPD, casos de la autoridad, modelos. Edición italiana, a 23 de octubre de 2026.',
      h1: 'Ubicación, horarios y fotos de quien trabaja fuera de la sede',
      subtitle: 'Manual práctico sobre el Estatuto de los Trabajadores italiano y el RGPD para equipos sobre el terreno',
      p1: 'El titular de una pequeña empresa con un equipo sobre el terreno se encuentra ante dos leyes y dos puertas: el Estatuto de los Trabajadores, con el acuerdo sindical o la autorización de la Inspección de Trabajo, y el RGPD, con finalidad, información, conservación y derechos. Pasar una no significa haber pasado la otra. El manual ordena las reglas, las decisiones de la autoridad italiana de protección de datos, las notas de la Inspección y la jurisprudencia, y dice qué preguntas hacerse antes de activar cualquier herramienta.',
      p2: 'Tiene 17 capítulos, un glosario y ocho apéndices con esquemas de información, evaluación de impacto, registro de tratamientos, informe para la Inspección, respuesta a una solicitud de acceso y cláusulas para el proveedor. Cada afirmación tiene su nota al pie, con el enlace a la fuente (cuando es pública) y la indicación de cuánto se leyó directamente. Es el borrador 3 y aún no lo ha revisado un profesional.',
    },
    checklist: {
      metaTitle: 'Lista de verificación: 10 preguntas antes de activar GPS, horarios y fotos (Italia, PDF)',
      metaDesc: 'Lista de verificación en PDF de dos páginas para equipos fuera de la sede en Italia: las 10 preguntas antes de activar ubicación, horarios o fotos, con referencias al manual. Edición italiana, a 23 de octubre de 2026.',
      h1: '¿Tienes un equipo sobre el terreno? Las 10 preguntas antes de activar la ubicación, los horarios o las fotos',
      subtitle: 'Una lista de dos páginas sacada del manual, para imprimir y rellenar a mano',
      p1: 'Se hacen antes de activar cualquier herramienta y se repiten una vez al año, porque las herramientas cambian más rápido que las personas que las usan. Desde la finalidad escrita en una línea hasta la solicitud de acceso del empleado, pasando por el artículo 4 del Estatuto, la evaluación de impacto, la información y el contrato con el proveedor.',
      p2: 'Cada pregunta remite al capítulo del manual que la explica, con las fuentes. Si respondes «no lo sé», ya es una información: anota quién en la empresa podría saberlo, o dónde hace falta un asesor. Vale con cualquier herramienta, no solo con la nuestra.',
    },
  },
  pt: {
    manuale: {
      metaTitle: 'Manual: localização, horários e fotos de equipas no terreno (Itália, PDF)',
      metaDesc: 'Manual prático em PDF sobre registo de ponto com GPS, localização e fotos de prova para equipas fora da sede segundo o direito italiano: artigo 4.º do Estatuto, RGPD, casos da autoridade, modelos. Edição italiana, a 23 de outubro de 2026.',
      h1: 'Localização, horários e fotos de quem trabalha fora da sede',
      subtitle: 'Manual prático sobre o Estatuto dos Trabalhadores italiano e o RGPD para equipas no terreno',
      p1: 'O titular de uma pequena empresa com uma equipa no terreno depara-se com duas leis e duas portas: o Estatuto dos Trabalhadores, com o acordo sindical ou a autorização da Inspeção do Trabalho, e o RGPD, com finalidade, informação, conservação e direitos. Passar uma não significa ter passado a outra. O manual põe por ordem as regras, as decisões da autoridade italiana de proteção de dados, as notas da Inspeção e a jurisprudência, e diz que perguntas fazer antes de ligar qualquer ferramenta.',
      p2: 'Tem 17 capítulos, um glossário e oito apêndices com esquemas de informação, avaliação de impacto, registo de tratamentos, relatório para a Inspeção, resposta a um pedido de acesso e cláusulas para o fornecedor. Cada afirmação tem a sua nota de rodapé, com a ligação à fonte (quando é pública) e a indicação do quanto foi lido diretamente. É o rascunho 3 e ainda não foi revisto por um profissional.',
    },
    checklist: {
      metaTitle: 'Checklist: 10 perguntas antes de ligar GPS, horários e fotos (Itália, PDF)',
      metaDesc: 'Checklist em PDF de duas páginas para equipas fora da sede em Itália: as 10 perguntas antes de ligar localização, horários ou fotos, com remissões para o manual. Edição italiana, a 23 de outubro de 2026.',
      h1: 'Tem uma equipa no terreno? As 10 perguntas antes de ligar a localização, os horários ou as fotos',
      subtitle: 'Uma checklist de duas páginas retirada do manual, para imprimir e preencher à mão',
      p1: 'Fazem-se antes de ligar qualquer ferramenta e repetem-se uma vez por ano, porque as ferramentas mudam mais depressa do que as pessoas que as usam. Da finalidade escrita numa linha ao pedido de acesso do trabalhador, passando pelo artigo 4.º do Estatuto, a avaliação de impacto, a informação e o contrato com o fornecedor.',
      p2: 'Cada pergunta remete para o capítulo do manual que a explica, com as fontes. Se responder «não sei», já é uma informação: anote quem na empresa poderá saber, ou onde é preciso um consultor. Vale com qualquer ferramenta, não só com a nossa.',
    },
  },
  nl: {
    manuale: {
      metaTitle: 'Handboek: locatie, werktijden en foto\'s van teams in het veld (Italië, PDF)',
      metaDesc: 'Praktisch handboek in pdf over klokken met GPS, locatie en bewijsfoto\'s voor teams buiten de vestiging volgens Italiaans recht: artikel 4 arbeidsstatuut, AVG, zaken van de toezichthouder, modellen. Italiaanse editie, stand 23 oktober 2026.',
      h1: 'Locatie, werktijden en foto\'s van medewerkers buiten de vestiging',
      subtitle: 'Praktisch handboek over het Italiaanse arbeidsstatuut en de AVG voor teams in het veld',
      p1: 'De eigenaar van een klein bedrijf met een team in het veld staat voor twee wetten en twee poorten: het arbeidsstatuut, met een akkoord met de vakbonden of toestemming van de arbeidsinspectie, en de AVG, met doel, informatie, bewaartermijn en rechten. De ene poort door zijn betekent niet dat je door de andere bent. Het handboek zet de regels, de besluiten van de Italiaanse toezichthouder, de notities van de inspectie en de rechtspraak op een rij en zegt welke vragen je moet stellen voordat je een hulpmiddel aanzet.',
      p2: 'Het telt 17 hoofdstukken, een woordenlijst en acht bijlagen met schema\'s voor privacyverklaring, gegevensbeschermingseffectbeoordeling, verwerkingsregister, verslag voor de inspectie, antwoord op een inzageverzoek en clausules voor de leverancier. Elke bewering heeft een voetnoot met de link naar de bron (als die openbaar is) en de aanduiding hoeveel van de bron direct is gelezen. Het is concept 3 en nog niet door een professional beoordeeld.',
    },
    checklist: {
      metaTitle: 'Checklist: 10 vragen voordat je GPS, werktijden en foto\'s aanzet (Italië, PDF)',
      metaDesc: 'Checklist van twee pagina\'s in pdf voor teams buiten de vestiging in Italië: de 10 vragen voordat je locatie, werktijden of foto\'s aanzet, met verwijzingen naar het handboek. Italiaanse editie, stand 23 oktober 2026.',
      h1: 'Heb je een team in het veld? De 10 vragen voordat je locatie, werktijden of foto\'s aanzet',
      subtitle: 'Een checklist van twee pagina\'s uit het handboek, om uit te printen en met de hand in te vullen',
      p1: 'Ze worden gesteld voordat je een hulpmiddel aanzet en eens per jaar herhaald, omdat hulpmiddelen sneller veranderen dan de mensen die ze gebruiken. Van het doel in één regel tot het inzageverzoek van de medewerker, via artikel 4 van het arbeidsstatuut, de effectbeoordeling, de privacyverklaring en het contract met de leverancier.',
      p2: 'Elke vraag verwijst naar het hoofdstuk van het handboek dat haar uitlegt, met bronnen. Antwoord je "geen idee", dan is dat al informatie: noteer wie in het bedrijf het zou kunnen weten, of waar je een adviseur nodig hebt. Ze geldt voor elk hulpmiddel, niet alleen het onze.',
    },
  },
  da: {
    manuale: {
      metaTitle: 'Håndbog: position, arbejdstid og fotos af hold i marken (Italien, PDF)',
      metaDesc: 'Praktisk håndbog i PDF om GPS-stempling, position og bevisfotos for hold uden for kontoret efter italiensk ret: artikel 4 i arbejdstagerloven, GDPR, sager fra myndigheden, skabeloner. Italiensk udgave, pr. 23. oktober 2026.',
      h1: 'Position, arbejdstid og fotos af medarbejdere i marken',
      subtitle: 'Praktisk håndbog om den italienske arbejdstagerlov og GDPR for hold, der arbejder ude',
      p1: 'Ejeren af en lille virksomhed med et hold i marken står over for to love og to porte: arbejdstagerloven, med overenskomst med fagforeningerne eller tilladelse fra arbejdstilsynet, og GDPR, med formål, information, opbevaring og rettigheder. At komme gennem den ene betyder ikke, at man er kommet gennem den anden. Håndbogen stiller reglerne, den italienske tilsynsmyndigheds afgørelser, tilsynets noter og retspraksis op og siger, hvilke spørgsmål man skal stille, før man tænder for noget værktøj.',
      p2: 'Den har 17 kapitler, en ordliste og otte bilag med skabeloner til privatlivsinformation, konsekvensanalyse, fortegnelse over behandlingsaktiviteter, rapport til tilsynet, svar på en anmodning om indsigt og klausuler til leverandøren. Hver påstand har sin fodnote med link til kilden (når den er offentlig) og angivelse af, hvor meget af kilden der er læst direkte. Det er udkast 3 og er endnu ikke gennemgået af en fagperson.',
    },
    checklist: {
      metaTitle: 'Tjekliste: 10 spørgsmål før du tænder for GPS, arbejdstid og fotos (Italien, PDF)',
      metaDesc: 'Tjekliste på to sider i PDF for hold uden for kontoret i Italien: de 10 spørgsmål før du tænder for position, arbejdstid eller fotos, med henvisninger til håndbogen. Italiensk udgave, pr. 23. oktober 2026.',
      h1: 'Har du et hold i marken? De 10 spørgsmål før du tænder for position, arbejdstid eller fotos',
      subtitle: 'En tjekliste på to sider fra håndbogen, til at printe og udfylde i hånden',
      p1: 'De stilles, før man tænder for noget værktøj, og gentages en gang om året, fordi værktøj ændrer sig hurtigere end de mennesker, der bruger det. Fra formålet skrevet på én linje til medarbejderens anmodning om indsigt, via artikel 4 i arbejdstagerloven, konsekvensanalysen, informationen og kontrakten med leverandøren.',
      p2: 'Hvert spørgsmål henviser til det kapitel i håndbogen, der forklarer det, med kilder. Svarer du »ved ikke«, er det allerede en information: notér, hvem i virksomheden der kunne vide det, eller hvor der er brug for en rådgiver. Den gælder for ethvert værktøj, ikke kun vores.',
    },
  },
  sv: {
    manuale: {
      metaTitle: 'Handbok: position, arbetstider och foton av team ute på fältet (Italien, PDF)',
      metaDesc: 'Praktisk handbok i PDF om GPS-stämpling, position och bevisfoton för team utanför kontoret enligt italiensk rätt: artikel 4 i arbetstagarstadgan, GDPR, myndighetens fall, mallar. Italiensk utgåva, per 23 oktober 2026.',
      h1: 'Position, arbetstider och foton av personal ute på fältet',
      subtitle: 'Praktisk handbok om den italienska arbetstagarstadgan och GDPR för team som arbetar ute',
      p1: 'Ägaren till ett litet företag med ett team på fältet står inför två lagar och två portar: arbetstagarstadgan, med avtal med facket eller tillstånd från arbetsinspektionen, och GDPR, med ändamål, information, lagring och rättigheter. Att ta sig igenom den ena betyder inte att man tagit sig igenom den andra. Handboken ordnar reglerna, den italienska tillsynsmyndighetens beslut, inspektionens skrivelser och rättspraxis, och säger vilka frågor man ska ställa innan man slår på något verktyg.',
      p2: 'Den har 17 kapitel, en ordlista och åtta bilagor med underlag för integritetsinformation, konsekvensbedömning, register över behandlingar, rapport till inspektionen, svar på en begäran om tillgång och klausuler för leverantören. Varje påstående har sin fotnot med länk till källan (när den är offentlig) och uppgift om hur mycket av källan som lästs direkt. Det är utkast 3 och har ännu inte granskats av en fackperson.',
    },
    checklist: {
      metaTitle: 'Checklista: 10 frågor innan du slår på GPS, arbetstider och foton (Italien, PDF)',
      metaDesc: 'Checklista på två sidor i PDF för team utanför kontoret i Italien: de 10 frågorna innan du slår på position, arbetstider eller foton, med hänvisningar till handboken. Italiensk utgåva, per 23 oktober 2026.',
      h1: 'Har du ett team ute på fältet? De 10 frågorna innan du slår på position, arbetstider eller foton',
      subtitle: 'En checklista på två sidor ur handboken, att skriva ut och fylla i för hand',
      p1: 'De ställs innan man slår på något verktyg och upprepas en gång om året, eftersom verktyg förändras snabbare än de som använder dem. Från ändamålet skrivet på en rad till den anställdes begäran om tillgång, via artikel 4 i arbetstagarstadgan, konsekvensbedömningen, informationen och avtalet med leverantören.',
      p2: 'Varje fråga hänvisar till det kapitel i handboken som förklarar den, med källor. Svarar du »vet inte« är det redan en information: notera vem i företaget som kan veta, eller var du behöver en rådgivare. Den gäller med vilket verktyg som helst, inte bara vårt.',
    },
  },
  nb: {
    manuale: {
      metaTitle: 'Håndbok: posisjon, arbeidstid og bilder av team i felt (Italia, PDF)',
      metaDesc: 'Praktisk håndbok i PDF om GPS-stempling, posisjon og bevisbilder for team utenfor kontoret etter italiensk rett: artikkel 4 i arbeidstakerloven, GDPR, saker fra tilsynet, maler. Italiensk utgave, per 23. oktober 2026.',
      h1: 'Posisjon, arbeidstid og bilder av ansatte i felt',
      subtitle: 'Praktisk håndbok om den italienske arbeidstakerloven (Statuto dei lavoratori) og GDPR for team som jobber ute',
      p1: 'Eieren av en liten bedrift med et team i felt står overfor to lover og to porter: arbeidstakerloven, med avtale med fagforeningen eller tillatelse fra arbeidstilsynet, og GDPR, med formål, informasjon, lagring og rettigheter. Å komme gjennom den ene betyr ikke at man er kommet gjennom den andre. Håndboken setter reglene, den italienske tilsynsmyndighetens vedtak, tilsynets notater og rettspraksis i rekkefølge, og sier hvilke spørsmål man bør stille før man slår på noe verktøy.',
      p2: 'Den har 17 kapitler, en ordliste og åtte vedlegg med maler for personvernerklæring, personvernkonsekvensvurdering, protokoll over behandlingsaktiviteter, rapport til tilsynet, svar på en innsynsforespørsel og klausuler for leverandøren. Hver påstand har sin fotnote med lenke til kilden (når den er offentlig) og opplysning om hvor mye av kilden som er lest direkte. Det er utkast 3 og er ennå ikke gjennomgått av en fagperson.',
    },
    checklist: {
      metaTitle: 'Sjekkliste: 10 spørsmål før du slår på GPS, arbeidstid og bilder (Italia, PDF)',
      metaDesc: 'Sjekkliste på to sider i PDF for team utenfor kontoret i Italia: de 10 spørsmålene før du slår på posisjon, arbeidstid eller bilder, med henvisninger til håndboken. Italiensk utgave, per 23. oktober 2026.',
      h1: 'Har du et team i felt? De 10 spørsmålene før du slår på posisjon, arbeidstid eller bilder',
      subtitle: 'En sjekkliste på to sider fra håndboken, til å skrive ut og fylle ut for hånd',
      p1: 'De stilles før man slår på noe verktøy og gjentas én gang i året, fordi verktøy endrer seg raskere enn menneskene som bruker dem. Fra formålet skrevet på én linje til den ansattes innsynsforespørsel, via artikkel 4 i arbeidstakerloven, vurderingen av konsekvenser, informasjonen og avtalen med leverandøren.',
      p2: 'Hvert spørsmål henviser til kapittelet i håndboken som forklarer det, med kilder. Svarer du «vet ikke», er det allerede en opplysning: noter hvem i bedriften som kan vite det, eller hvor du trenger en rådgiver. Den gjelder med ethvert verktøy, ikke bare vårt.',
    },
  },
  ru: {
    manuale: {
      metaTitle: 'Руководство: геолокация, рабочее время и фото выездных бригад (Италия, PDF)',
      metaDesc: 'Практическое руководство в PDF об отметке по GPS, геолокации и фотографиях-подтверждениях для выездных бригад по итальянскому праву: статья 4 Статута трудящихся, GDPR, решения надзорного органа, шаблоны. Итальянское издание, по состоянию на 23 октября 2026 года.',
      h1: 'Геолокация, рабочее время и фотографии сотрудников, работающих вне офиса',
      subtitle: 'Практическое руководство по итальянскому Статуту трудящихся и GDPR для выездных бригад',
      p1: 'Владелец небольшой компании с бригадой на выезде стоит перед двумя законами и двумя воротами: Статутом трудящихся, с соглашением с профсоюзом или разрешением трудовой инспекции, и GDPR, с целью, информированием, сроками хранения и правами. Пройти одни ворота не значит пройти другие. Руководство выстраивает правила, решения итальянского органа по защите данных, письма инспекции и судебную практику и говорит, какие вопросы задать себе перед включением любого инструмента.',
      p2: 'В нём 17 глав, глоссарий и восемь приложений с заготовками уведомления о конфиденциальности, оценки воздействия, реестра обработки, отчёта для инспекции, ответа на запрос о доступе и положений для поставщика. У каждого утверждения есть сноска со ссылкой на источник (если он публичный) и пометкой о том, насколько источник был прочитан напрямую. Это черновик 3, он ещё не проверен специалистом.',
    },
    checklist: {
      metaTitle: 'Чек-лист: 10 вопросов перед включением GPS, учёта времени и фото (Италия, PDF)',
      metaDesc: 'Двухстраничный чек-лист в PDF для выездных бригад в Италии: 10 вопросов перед включением геолокации, учёта времени или фото, со ссылками на руководство. Итальянское издание, по состоянию на 23 октября 2026 года.',
      h1: 'У вас выездная бригада? 10 вопросов перед включением геолокации, учёта времени или фото',
      subtitle: 'Двухстраничный чек-лист из руководства: распечатать и заполнить от руки',
      p1: 'Их задают перед включением любого инструмента и повторяют раз в год, потому что инструменты меняются быстрее, чем люди, которые ими пользуются. От цели, записанной одной строкой, до запроса сотрудника о доступе к данным, через статью 4 Статута, оценку воздействия, уведомление и договор с поставщиком.',
      p2: 'Каждый вопрос отсылает к главе руководства, где он разобран, с источниками. Если вы отвечаете «не знаю», это уже информация: отметьте, кто в компании может знать, или где нужен консультант. Чек-лист подходит к любому инструменту, не только к нашему.',
    },
  },
};
