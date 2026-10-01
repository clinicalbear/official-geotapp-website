'use client';

import { FormEvent, useState } from 'react';
import { Trash2, ShieldCheck, Clock, FileText, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { DEFAULT_LOCALE, getLocaleFromPathname } from '@/lib/i18n/locale-routing';
import { localizeEnglishDeep } from '@/lib/i18n/en-spelling';

const FIRESTORE_URL =
  'https://firestore.googleapis.com/v1/projects/geotap-v2/databases/(default)/documents/accountDeletionRequests';

/**
 * Testi della pagina nella lingua del sito. Fino al 30/09/2026 era tutta in inglese in
 * ogni lingua. L'indirizzo per i diritti privacy e' info@geotapp.com, lo stesso
 * dell'informativa (privacy@ non compare in nessun documento legale).
 */
type Testi = {
  h1: string; intro: string;
  b2bT: string; b2b: string;
  keepT: string; keep: string;
  rightsT: string; rights1: string; rights2: string;
  doneT: string; done1: string; done30: string; done2: string;
  name: string; email: string; company: string; notes: string; optional: string;
  notesPh: string; companyPh: string; namePh: string; emailPh: string;
  sending: string; submit: string; confirm: string; error: string;
};
const T: Record<string, Testi> = {
  en: {
    h1: 'Request account deletion',
    intro: 'Use this form to ask us to delete your GeoTapp account and the personal data linked to it.',
    b2bT: 'Your data is managed by your employer',
    b2b: 'GeoTapp is a business platform. Your account and your work sessions belong to the company that activated your licence. When we receive your request, we inform that company\'s administrator and carry out the deletion as the law requires.',
    keepT: 'Data the law requires us to keep',
    keep: 'Some records (attendance logs, invoices, tax documents) may have to be kept for the period required by Italian and EU law, typically 10 years for accounting records. They are anonymised or deleted as soon as that period ends.',
    rightsT: 'Your GDPR rights',
    rights1: 'Under the GDPR (EU Regulation 2016/679) you have the right to erasure, to rectification and to data portability. For any privacy question you can also write to',
    rights2: '.',
    doneT: 'Request received',
    done1: 'Your deletion request has been sent. We will handle it within',
    done30: '30 days',
    done2: 'and send a confirmation to your email address.',
    name: 'Full name', email: 'Email you registered with', company: 'Company name', notes: 'Notes', optional: '(optional)',
    notesPh: 'Anything else we should know about your request', companyPh: 'Company name', namePh: 'Jane Smith', emailPh: 'jane@company.com',
    sending: 'Sending…', submit: 'Send deletion request',
    confirm: 'By sending this form you confirm that you are the account holder. Handling time: up to 30 days.',
    error: 'Something went wrong. Please try again or write to info@geotapp.com.',
  },
  it: {
    h1: "Richiedi la cancellazione dell'account",
    intro: "Con questo modulo ci chiedi di cancellare il tuo account GeoTapp e i dati personali collegati.",
    b2bT: 'I tuoi dati li gestisce il tuo datore di lavoro',
    b2b: "GeoTapp è una piattaforma per le aziende. Il tuo account e le tue sessioni di lavoro appartengono all'azienda che ha attivato la tua licenza. Quando riceviamo la richiesta avvisiamo l'amministratore di quell'azienda e procediamo alla cancellazione come prevede la legge.",
    keepT: 'I dati che la legge ci obbliga a conservare',
    keep: 'Alcuni documenti (registri presenze, fatture, documenti fiscali) possono dover essere conservati per il periodo richiesto dalla legge italiana ed europea, di solito 10 anni per le scritture contabili. Scaduto quel periodo vengono resi anonimi o cancellati.',
    rightsT: 'I tuoi diritti secondo il GDPR',
    rights1: 'Il GDPR (Regolamento UE 2016/679) ti dà il diritto alla cancellazione, alla rettifica e alla portabilità dei dati. Per qualsiasi domanda sulla privacy puoi scrivere anche a',
    rights2: '.',
    doneT: 'Richiesta ricevuta',
    done1: 'La tua richiesta di cancellazione è stata inviata. La gestiamo entro',
    done30: '30 giorni',
    done2: 'e ti mandiamo una conferma al tuo indirizzo email.',
    name: 'Nome e cognome', email: "Email con cui ti sei registrato", company: "Nome dell'azienda", notes: 'Note', optional: '(facoltativo)',
    notesPh: 'Altro che dobbiamo sapere sulla tua richiesta', companyPh: 'Nome Azienda Srl', namePh: 'Mario Rossi', emailPh: 'mario@azienda.com',
    sending: 'Invio in corso…', submit: 'Invia la richiesta di cancellazione',
    confirm: "Inviando il modulo confermi di essere il titolare dell'account. Tempo di gestione: fino a 30 giorni.",
    error: 'Qualcosa non ha funzionato. Riprova o scrivi a info@geotapp.com.',
  },
  de: {
    h1: 'Kontolöschung beantragen',
    intro: 'Mit diesem Formular bitten Sie uns, Ihr GeoTapp-Konto und die damit verbundenen personenbezogenen Daten zu löschen.',
    b2bT: 'Ihre Daten verwaltet Ihr Arbeitgeber',
    b2b: 'GeoTapp ist eine Plattform für Unternehmen. Ihr Konto und Ihre Arbeitssitzungen gehören dem Unternehmen, das Ihre Lizenz aktiviert hat. Wenn wir Ihren Antrag erhalten, informieren wir den Administrator dieses Unternehmens und führen die Löschung durch, wie es das Gesetz vorsieht.',
    keepT: 'Daten, die wir von Gesetzes wegen aufbewahren müssen',
    keep: 'Manche Unterlagen (Anwesenheitsnachweise, Rechnungen, Steuerunterlagen) müssen unter Umständen für den Zeitraum aufbewahrt werden, den das italienische und das europäische Recht verlangen, in der Regel 10 Jahre für Buchhaltungsunterlagen. Nach Ablauf dieser Frist werden sie anonymisiert oder gelöscht.',
    rightsT: 'Ihre Rechte nach der DSGVO',
    rights1: 'Die DSGVO (Verordnung (EU) 2016/679) gibt Ihnen das Recht auf Löschung, auf Berichtigung und auf Datenübertragbarkeit. Bei Fragen zum Datenschutz können Sie auch schreiben an',
    rights2: '.',
    doneT: 'Antrag eingegangen',
    done1: 'Ihr Löschantrag wurde gesendet. Wir bearbeiten ihn innerhalb von',
    done30: '30 Tagen',
    done2: 'und schicken eine Bestätigung an Ihre E-Mail-Adresse.',
    name: 'Vor- und Nachname', email: 'E-Mail-Adresse, mit der Sie sich registriert haben', company: 'Name des Unternehmens', notes: 'Anmerkungen', optional: '(optional)',
    notesPh: 'Sonstiges, das wir zu Ihrem Antrag wissen sollten', companyPh: 'Muster GmbH', namePh: 'Erika Mustermann', emailPh: 'erika@firma.de',
    sending: 'Wird gesendet …', submit: 'Löschantrag senden',
    confirm: 'Mit dem Absenden des Formulars bestätigen Sie, dass Sie der Kontoinhaber sind. Bearbeitungszeit: bis zu 30 Tage.',
    error: 'Etwas ist schiefgelaufen. Versuchen Sie es erneut oder schreiben Sie an info@geotapp.com.',
  },
  fr: {
    h1: 'Demander la suppression du compte',
    intro: 'Ce formulaire nous demande de supprimer votre compte GeoTapp et les données personnelles qui y sont liées.',
    b2bT: 'Vos données sont gérées par votre employeur',
    b2b: 'GeoTapp est une plateforme pour les entreprises. Votre compte et vos sessions de travail appartiennent à l\'entreprise qui a activé votre licence. Quand nous recevons votre demande, nous prévenons l\'administrateur de cette entreprise et procédons à la suppression comme le prévoit la loi.',
    keepT: 'Les données que la loi nous oblige à conserver',
    keep: 'Certains documents (registres de présence, factures, documents fiscaux) peuvent devoir être conservés pendant la durée exigée par le droit italien et européen, en général 10 ans pour les écritures comptables. Passé ce délai, ils sont anonymisés ou supprimés.',
    rightsT: 'Vos droits selon le RGPD',
    rights1: 'Le RGPD (règlement (UE) 2016/679) vous donne le droit à l\'effacement, à la rectification et à la portabilité des données. Pour toute question sur la vie privée, vous pouvez aussi écrire à',
    rights2: '.',
    doneT: 'Demande reçue',
    done1: 'Votre demande de suppression a été envoyée. Nous la traitons sous',
    done30: '30 jours',
    done2: 'et vous envoyons une confirmation à votre adresse e-mail.',
    name: 'Nom et prénom', email: 'Adresse e-mail avec laquelle vous vous êtes inscrit', company: 'Nom de l\'entreprise', notes: 'Remarques', optional: '(facultatif)',
    notesPh: 'Autre chose à savoir sur votre demande', companyPh: 'Société Exemple SARL', namePh: 'Marie Dupont', emailPh: 'marie@entreprise.fr',
    sending: 'Envoi en cours…', submit: 'Envoyer la demande de suppression',
    confirm: 'En envoyant le formulaire, vous confirmez être le titulaire du compte. Délai de traitement : jusqu\'à 30 jours.',
    error: 'Une erreur est survenue. Réessayez ou écrivez à info@geotapp.com.',
  },
  es: {
    h1: 'Solicitar la eliminación de la cuenta',
    intro: 'Con este formulario nos pides que eliminemos tu cuenta de GeoTapp y los datos personales vinculados a ella.',
    b2bT: 'Tus datos los gestiona tu empleador',
    b2b: 'GeoTapp es una plataforma para empresas. Tu cuenta y tus sesiones de trabajo pertenecen a la empresa que activó tu licencia. Cuando recibimos la solicitud, avisamos al administrador de esa empresa y procedemos a la eliminación como prevé la ley.',
    keepT: 'Los datos que la ley nos obliga a conservar',
    keep: 'Algunos documentos (registros de asistencia, facturas, documentos fiscales) pueden tener que conservarse durante el plazo que exigen la legislación italiana y europea, normalmente 10 años para los registros contables. Pasado ese plazo, se anonimizan o se eliminan.',
    rightsT: 'Tus derechos según el RGPD',
    rights1: 'El RGPD (Reglamento (UE) 2016/679) te da derecho a la supresión, a la rectificación y a la portabilidad de los datos. Para cualquier duda sobre privacidad, también puedes escribir a',
    rights2: '.',
    doneT: 'Solicitud recibida',
    done1: 'Tu solicitud de eliminación se ha enviado. La gestionamos en un plazo de',
    done30: '30 días',
    done2: 'y te enviamos una confirmación a tu dirección de correo electrónico.',
    name: 'Nombre y apellidos', email: 'Correo electrónico con el que te registraste', company: 'Nombre de la empresa', notes: 'Notas', optional: '(opcional)',
    notesPh: 'Cualquier otra cosa que debamos saber sobre tu solicitud', companyPh: 'Empresa Ejemplo S. L.', namePh: 'Laura García', emailPh: 'laura@empresa.com',
    sending: 'Enviando…', submit: 'Enviar la solicitud de eliminación',
    confirm: 'Al enviar el formulario confirmas que eres el titular de la cuenta. Tiempo de gestión: hasta 30 días.',
    error: 'Algo no ha funcionado. Inténtalo de nuevo o escribe a info@geotapp.com.',
  },
  pt: {
    h1: 'Pedir a eliminação da conta',
    intro: 'Com este formulário pede-nos que eliminemos a sua conta GeoTapp e os dados pessoais associados.',
    b2bT: 'Os seus dados são geridos pelo seu empregador',
    b2b: 'O GeoTapp é uma plataforma para empresas. A sua conta e as suas sessões de trabalho pertencem à empresa que ativou a sua licença. Quando recebemos o pedido, avisamos o administrador dessa empresa e procedemos à eliminação como prevê a lei.',
    keepT: 'Os dados que a lei nos obriga a conservar',
    keep: 'Alguns documentos (registos de assiduidade, faturas, documentos fiscais) podem ter de ser conservados durante o período exigido pela legislação italiana e europeia, normalmente 10 anos para os registos contabilísticos. Decorrido esse prazo, são tornados anónimos ou eliminados.',
    rightsT: 'Os seus direitos segundo o RGPD',
    rights1: 'O RGPD (Regulamento (UE) 2016/679) confere-lhe o direito ao apagamento, à retificação e à portabilidade dos dados. Para qualquer questão sobre privacidade, pode também escrever para',
    rights2: '.',
    doneT: 'Pedido recebido',
    done1: 'O seu pedido de eliminação foi enviado. Tratamo-lo no prazo de',
    done30: '30 dias',
    done2: 'e enviamos-lhe uma confirmação para o seu endereço de e-mail.',
    name: 'Nome completo', email: 'E-mail com que se registou', company: 'Nome da empresa', notes: 'Notas', optional: '(facultativo)',
    notesPh: 'Mais alguma coisa que devamos saber sobre o seu pedido', companyPh: 'Empresa Exemplo, Lda.', namePh: 'Ana Silva', emailPh: 'ana@empresa.pt',
    sending: 'A enviar…', submit: 'Enviar o pedido de eliminação',
    confirm: 'Ao enviar o formulário, confirma que é o titular da conta. Tempo de tratamento: até 30 dias.',
    error: 'Algo não correu bem. Tente novamente ou escreva para info@geotapp.com.',
  },
  da: {
    h1: 'Anmod om sletning af konto',
    intro: 'Med denne formular beder du os om at slette din GeoTapp-konto og de tilknyttede personoplysninger.',
    b2bT: 'Dine data administreres af din arbejdsgiver',
    b2b: 'GeoTapp er en platform til virksomheder. Din konto og dine arbejdssessioner tilhører den virksomhed, der har aktiveret din licens. Når vi modtager anmodningen, giver vi virksomhedens administrator besked og gennemfører sletningen, som loven foreskriver.',
    keepT: 'De data, vi ifølge loven er forpligtet til at opbevare',
    keep: 'Visse dokumenter (tidsregistreringer, fakturaer, skattedokumenter) kan være underlagt krav om opbevaring i den periode, som italiensk og europæisk lovgivning kræver, normalt 10 år for regnskabsbilag. Når perioden er udløbet, anonymiseres eller slettes de.',
    rightsT: 'Dine rettigheder efter GDPR',
    rights1: 'GDPR (forordning (EU) 2016/679) giver dig ret til sletning, berigtigelse og dataportabilitet. Har du spørgsmål om privatliv, kan du også skrive til',
    rights2: '.',
    doneT: 'Anmodning modtaget',
    done1: 'Din anmodning om sletning er sendt. Vi behandler den inden for',
    done30: '30 dage',
    done2: 'og sender en bekræftelse til din e-mailadresse.',
    name: 'Fulde navn', email: 'E-mail, du registrerede dig med', company: 'Virksomhedens navn', notes: 'Bemærkninger', optional: '(valgfrit)',
    notesPh: 'Andet, vi bør vide om din anmodning', companyPh: 'Eksempel ApS', namePh: 'Anne Jensen', emailPh: 'anne@firma.dk',
    sending: 'Sender…', submit: 'Send anmodning om sletning',
    confirm: 'Ved at sende formularen bekræfter du, at du er kontoindehaver. Behandlingstid: op til 30 dage.',
    error: 'Noget gik galt. Prøv igen, eller skriv til info@geotapp.com.',
  },
  sv: {
    h1: 'Begär radering av konto',
    intro: 'Med det här formuläret ber du oss radera ditt GeoTapp-konto och de personuppgifter som hör till det.',
    b2bT: 'Dina uppgifter hanteras av din arbetsgivare',
    b2b: 'GeoTapp är en plattform för företag. Ditt konto och dina arbetspass tillhör det företag som har aktiverat din licens. När vi tar emot begäran meddelar vi företagets administratör och genomför raderingen så som lagen kräver.',
    keepT: 'Uppgifter som vi enligt lag måste spara',
    keep: 'Vissa dokument (tidsregistreringar, fakturor, skattehandlingar) kan behöva sparas under den tid som italiensk och europeisk lagstiftning kräver, vanligtvis 10 år för bokföringsunderlag. När den tiden har gått anonymiseras eller raderas de.',
    rightsT: 'Dina rättigheter enligt GDPR',
    rights1: 'GDPR (förordning (EU) 2016/679) ger dig rätt till radering, rättelse och dataportabilitet. Har du frågor om integritet kan du också skriva till',
    rights2: '.',
    doneT: 'Begäran är mottagen',
    done1: 'Din begäran om radering har skickats. Vi hanterar den inom',
    done30: '30 dagar',
    done2: 'och skickar en bekräftelse till din e-postadress.',
    name: 'För- och efternamn', email: 'E-postadressen du registrerade dig med', company: 'Företagets namn', notes: 'Anmärkningar', optional: '(valfritt)',
    notesPh: 'Annat vi bör veta om din begäran', companyPh: 'Exempel AB', namePh: 'Anna Svensson', emailPh: 'anna@foretag.se',
    sending: 'Skickar…', submit: 'Skicka begäran om radering',
    confirm: 'Genom att skicka formuläret bekräftar du att du är kontoinnehavare. Handläggningstid: upp till 30 dagar.',
    error: 'Något gick fel. Försök igen eller skriv till info@geotapp.com.',
  },
  nb: {
    h1: 'Be om sletting av kontoen',
    intro: 'Med dette skjemaet ber du oss slette GeoTapp-kontoen din og de tilknyttede personopplysningene.',
    b2bT: 'Dataene dine forvaltes av arbeidsgiveren din',
    b2b: 'GeoTapp er en plattform for bedrifter. Kontoen din og arbeidsøktene dine tilhører bedriften som har aktivert lisensen din. Når vi mottar forespørselen, varsler vi administratoren i den bedriften og gjennomfører slettingen slik loven krever.',
    keepT: 'Opplysninger vi er pålagt å oppbevare',
    keep: 'Noen dokumenter (timelister, fakturaer, skattedokumenter) kan måtte oppbevares så lenge italiensk og europeisk lovgivning krever, vanligvis 10 år for regnskapsbilag. Når fristen er ute, anonymiseres eller slettes de.',
    rightsT: 'Rettighetene dine etter GDPR',
    rights1: 'GDPR (forordning (EU) 2016/679) gir deg rett til sletting, retting og dataportabilitet. Har du spørsmål om personvern, kan du også skrive til',
    rights2: '.',
    doneT: 'Forespørselen er mottatt',
    done1: 'Forespørselen din om sletting er sendt. Vi behandler den innen',
    done30: '30 dager',
    done2: 'og sender en bekreftelse til e-postadressen din.',
    name: 'Fullt navn', email: 'E-postadressen du registrerte deg med', company: 'Bedriftens navn', notes: 'Merknader', optional: '(valgfritt)',
    notesPh: 'Andre ting vi bør vite om forespørselen din', companyPh: 'Eksempel AS', namePh: 'Kari Nordmann', emailPh: 'kari@firma.no',
    sending: 'Sender…', submit: 'Send forespørsel om sletting',
    confirm: 'Ved å sende skjemaet bekrefter du at du er kontoinnehaver. Behandlingstid: opptil 30 dager.',
    error: 'Noe gikk galt. Prøv igjen, eller skriv til info@geotapp.com.',
  },
  nl: {
    h1: 'Vraag de verwijdering van uw account aan',
    intro: 'Met dit formulier vraagt u ons uw GeoTapp-account en de gekoppelde persoonsgegevens te verwijderen.',
    b2bT: 'Uw gegevens worden beheerd door uw werkgever',
    b2b: 'GeoTapp is een platform voor bedrijven. Uw account en uw werksessies behoren toe aan het bedrijf dat uw licentie heeft geactiveerd. Wanneer we het verzoek ontvangen, waarschuwen we de beheerder van dat bedrijf en gaan we over tot verwijdering zoals de wet voorschrijft.',
    keepT: 'De gegevens die we volgens de wet moeten bewaren',
    keep: 'Sommige documenten (aanwezigheidsregisters, facturen, fiscale documenten) moeten mogelijk worden bewaard voor de termijn die de Italiaanse en Europese wet vereist, meestal 10 jaar voor de boekhouding. Na die termijn worden ze geanonimiseerd of gewist.',
    rightsT: 'Uw rechten volgens de AVG',
    rights1: 'De AVG (Verordening (EU) 2016/679) geeft u het recht op wissing, rectificatie en overdraagbaarheid van de gegevens. Voor elke vraag over privacy kunt u ook schrijven naar',
    rights2: '.',
    doneT: 'Verzoek ontvangen',
    done1: 'Uw verzoek tot verwijdering is verzonden. We handelen het af binnen',
    done30: '30 dagen',
    done2: 'en sturen u een bevestiging op uw e-mailadres.',
    name: 'Voor- en achternaam',
    email: 'E-mailadres waarmee u zich hebt geregistreerd',
    company: 'Naam van het bedrijf',
    notes: 'Opmerkingen',
    optional: '(optioneel)',
    notesPh: 'Wat we nog moeten weten over uw verzoek',
    companyPh: 'Bedrijfsnaam B.V.',
    namePh: 'Jan de Vries',
    emailPh: 'jan@bedrijf.nl',
    sending: 'Bezig met verzenden…',
    submit: 'Verzend het verzoek tot verwijdering',
    confirm: 'Door het formulier te versturen bevestigt u de houder van het account te zijn. Verwerkingstijd: tot 30 dagen.',
    error: 'Er ging iets mis. Probeer het opnieuw of schrijf naar info@geotapp.com.',
  },
};

async function submitDeletionRequest(data: {
  fullName: string;
  email: string;
  companyName: string;
  notes: string;
}) {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  const res = await fetch(`${FIRESTORE_URL}?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: {
        fullName: { stringValue: data.fullName },
        email: { stringValue: data.email },
        companyName: { stringValue: data.companyName },
        notes: { stringValue: data.notes },
        status: { stringValue: 'pending' },
        createdAt: { timestampValue: new Date().toISOString() },
      },
    }),
  });
  if (!res.ok) throw new Error('Submission failed');
  return res.json();
}

export default function DeleteAccountPage() {
  const locale = getLocaleFromPathname(usePathname()) ?? DEFAULT_LOCALE;
  const t = localizeEnglishDeep(T[locale] ?? T[locale.split('-')[0]] ?? T.en, locale);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    notes: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await submitDeletionRequest(formData);
      setSubmitted(true);
    } catch {
      setError(t.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-5 pb-24 px-6 min-h-screen bg-white text-slate-900">
      <div className="container mx-auto max-w-3xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl mb-6">
            <Trash2 className="text-red-600" size={28} />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            {t.h1}
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-xl mx-auto">
            {t.intro}
          </p>
        </motion.div>

        {/* Info sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4 mb-12"
        >
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex gap-4">
            <div className="mt-1 shrink-0 p-2 bg-white rounded-lg border border-slate-200">
              <ShieldCheck size={20} className="text-slate-700" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">{t.b2bT}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {t.b2b}
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex gap-4">
            <div className="mt-1 shrink-0 p-2 bg-white rounded-lg border border-slate-200">
              <Clock size={20} className="text-slate-700" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">{t.keepT}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {t.keep}
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex gap-4">
            <div className="mt-1 shrink-0 p-2 bg-white rounded-lg border border-slate-200">
              <FileText size={20} className="text-slate-700" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">{t.rightsT}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {t.rights1}{' '}
                <a href="mailto:info@geotapp.com" className="text-slate-700 underline hover:text-slate-900">
                  info@geotapp.com
                </a>
                {t.rights2}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Form / Success */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-100/60"
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-50 rounded-2xl mb-4">
                <ShieldCheck size={26} className="text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">{t.doneT}</h2>
              <p className="text-slate-500 leading-relaxed max-w-md mx-auto">
                {t.done1}{' '}
                <strong className="text-slate-700">{t.done30}</strong> {t.done2}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {t.name} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none transition-all"
                  placeholder={t.namePh}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {t.email} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none transition-all"
                  placeholder={t.emailPh}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {t.company} <span className="text-slate-400 font-normal">{t.optional}</span>
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none transition-all"
                  placeholder={t.companyPh}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {t.notes} <span className="text-slate-400 font-normal">{t.optional}</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none transition-all resize-none"
                  placeholder={t.notesPh}
                />
              </div>

              {error && (
                <div className="flex items-start gap-3 border border-red-200 bg-red-50 rounded-xl px-4 py-3">
                  <AlertTriangle size={18} className="text-red-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-red-600 text-white font-bold text-base rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-100 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Trash2 size={18} />
                {loading ? t.sending : t.submit}
              </button>

              <p className="text-center text-xs text-slate-400">
                {t.confirm}
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
