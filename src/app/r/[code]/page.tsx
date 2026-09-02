/**
 * La pagina del codice stampato sul report: `geotapp.com/r/8QK4-P2NX`.
 *
 * Chi inquadra il QR sul rapporto di lavoro arriva qui. Prima non arrivava da
 * nessuna parte: l'unico indirizzo stampato era una URL firmata che scadeva in
 * sette giorni, e l'indirizzo di verifica in calce (`/verify-report?id=...`) era
 * un 404.
 *
 * Questa pagina non e' una pagina di marketing: e' la controparte digitale di un
 * timbro. Dice se il documento e' sigillato, di chi e', quando, e consegna i due
 * file. Niente conteggi di apertura, niente UTM, nessun cookie: e' un codice di
 * verifica, non un pixel.
 */

import type { Metadata } from 'next';
import { headers } from 'next/headers';

import { resolveLocale } from '@/lib/i18n/locale-routing';
import type { AppLocale } from '@/lib/i18n/config';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Documento GeoTapp',
  // Non deve finire negli indici: e' l'indirizzo di un documento di un cliente.
  robots: { index: false, follow: false },
};

/**
 * L'endpoint che risolve il codice. Sta su geotap-v2, dove vivono le functions
 * dell'ecosistema (lo stesso progetto di `syncLeadToFirestore`, che il CRM
 * chiama su `us-central1-geotap-v2`). Sovrascrivibile per gli ambienti di prova.
 */
const ENDPOINT =
  process.env.REPORT_LINK_ENDPOINT ??
  'https://europe-west1-geotap-v2.cloudfunctions.net/resolveReportLink';

type Esito =
  | {
      stato: 'valido';
      sigillato: boolean;
      aziendaNome: string;
      commessa: string;
      sigillatoIl: string | null;
      zipSha256: string;
      pdfSha256: string | null;
      pacchettoUrl: string | null;
      documentoUrl: string | null;
      scadeIlMs: number;
    }
  | { stato: 'revocato'; revocatoIl: string | null }
  | { stato: 'sconosciuto' };

interface Testi {
  sealedTitle: string;
  sealedBody: string;
  draftTitle: string;
  draftBody: string;
  issuedBy: string;
  job: string;
  sealedOn: string;
  downloadPackage: string;
  downloadPackageHint: string;
  downloadPdf: string;
  fingerprint: string;
  linkLife: string;
  verifyTitle: string;
  verifyBody: string;
  verifyCta: string;
  /** Invito al sondaggio pubblico: qui atterra chi il lavoro lo COMMISSIONA,
   *  cioe' il lato B, che nelle risposte raccolte finora manca del tutto. */
  surveyTitle: string;
  surveyBody: string;
  surveyCta: string;
  revokedTitle: string;
  revokedBody: string;
  unknownTitle: string;
  unknownBody: string;
}

/** Le stringhe: chi scansiona non e' detto che parli italiano. */
const TESTI: Record<string, Testi> = {
  it: {
    sealedTitle: 'Documento sigillato',
    sealedBody:
      'Questo documento è firmato elettronicamente e verificabile. Ogni evento è concatenato al precedente: se una riga, un orario o una foto cambiano, la verifica fallisce.',
    draftTitle: 'Documento non sigillato',
    draftBody:
      'Questo documento non porta la firma elettronica: non fa fede e non è verificabile.',
    issuedBy: 'Emesso da',
    job: 'Commessa',
    sealedOn: 'Sigillato il',
    downloadPackage: 'Scarica il pacchetto firmato',
    downloadPackageHint:
      'È l’originale: contiene il documento, la cronologia, le foto e il sigillo.',
    downloadPdf: 'Scarica il PDF leggibile',
    fingerprint: 'Impronta del pacchetto',
    linkLife:
      'Il collegamento al file vale dieci minuti. Il codice sul documento non scade: basta riaprire questa pagina.',
    verifyTitle: 'Verificare senza fidarsi di noi',
    verifyBody:
      'Il pacchetto si verifica anche senza GeoTapp, con il verificatore aperto: ricalcola le impronte e controlla la firma.',
    verifyCta: 'Vai alla verifica',
    surveyTitle: 'Una domanda a chi il lavoro lo commissiona',
    surveyBody:
      'Stiamo raccogliendo, in tutta Europa, quanto spesso un lavoro pagato viene messo in dubbio e cosa succede dopo. Due minuti, anonimo, nessun dato obbligatorio.',
    surveyCta: 'Rispondi al sondaggio',
    revokedTitle: 'Codice revocato',
    revokedBody:
      'Questo documento c’era, ma chi lo ha emesso ha revocato il collegamento. Per averne una copia bisogna chiederla a chi ha svolto il lavoro.',
    unknownTitle: 'Codice non trovato',
    unknownBody:
      'Il codice non corrisponde a nessun documento. Conviene ricontrollare le otto cifre: si confondono facilmente la S e la 5, la Z e la 2.',
  },
  en: {
    sealedTitle: 'Sealed document',
    sealedBody:
      'This document is electronically signed and verifiable. Every event is chained to the previous one: if a line, a time or a photo changes, verification fails.',
    draftTitle: 'Unsealed document',
    draftBody:
      'This document does not carry the electronic signature: it is not authoritative and cannot be verified.',
    issuedBy: 'Issued by',
    job: 'Job',
    sealedOn: 'Sealed on',
    downloadPackage: 'Download the signed package',
    downloadPackageHint:
      'It is the original: it contains the document, the history, the photos and the seal.',
    downloadPdf: 'Download the readable PDF',
    fingerprint: 'Package fingerprint',
    linkLife:
      'The file link lasts ten minutes. The code on the document never expires: just reopen this page.',
    verifyTitle: 'Verify without trusting us',
    verifyBody:
      'The package can be verified without GeoTapp, with the open verifier: it recomputes the hashes and checks the signature.',
    verifyCta: 'Go to verification',
    surveyTitle: 'A question for whoever commissions the work',
    surveyBody:
      'Across Europe we are collecting how often a job that was paid for gets questioned, and what happens next. Two minutes, anonymous, nothing required.',
    surveyCta: 'Answer the survey',
    revokedTitle: 'Code revoked',
    revokedBody:
      'This document existed, but whoever issued it revoked the link. To get a copy you have to ask the company that did the work.',
    unknownTitle: 'Code not found',
    unknownBody:
      'The code does not match any document. Worth double-checking the eight characters: S and 5, Z and 2 are easy to mix up.',
  },
  de: {
    sealedTitle: 'Gesiegeltes Dokument',
    sealedBody:
      'Dieses Dokument ist elektronisch signiert und prüfbar. Jedes Ereignis ist mit dem vorherigen verkettet: ändert sich eine Zeile, eine Uhrzeit oder ein Foto, scheitert die Prüfung.',
    draftTitle: 'Nicht gesiegeltes Dokument',
    draftBody:
      'Dieses Dokument trägt keine elektronische Signatur: es ist nicht verbindlich und nicht prüfbar.',
    issuedBy: 'Ausgestellt von',
    job: 'Auftrag',
    sealedOn: 'Gesiegelt am',
    downloadPackage: 'Signiertes Paket herunterladen',
    downloadPackageHint:
      'Es ist das Original: es enthält das Dokument, den Verlauf, die Fotos und das Siegel.',
    downloadPdf: 'Lesbares PDF herunterladen',
    fingerprint: 'Fingerabdruck des Pakets',
    linkLife:
      'Der Datei-Link gilt zehn Minuten. Der Code auf dem Dokument läuft nie ab: einfach diese Seite neu öffnen.',
    verifyTitle: 'Prüfen, ohne uns zu vertrauen',
    verifyBody:
      'Das Paket lässt sich auch ohne GeoTapp prüfen, mit dem offenen Prüfwerkzeug: es berechnet die Hashes neu und prüft die Signatur.',
    verifyCta: 'Zur Prüfung',
    surveyTitle: 'Eine Frage an alle, die Arbeit beauftragen',
    surveyBody:
      'Wir sammeln europaweit, wie oft eine bezahlte Leistung angezweifelt wird und was danach passiert. Zwei Minuten, anonym, keine Pflichtangaben.',
    surveyCta: 'An der Umfrage teilnehmen',
    revokedTitle: 'Code widerrufen',
    revokedBody:
      'Dieses Dokument gab es, aber der Aussteller hat den Link widerrufen. Für eine Kopie wenden Sie sich an die Firma, die die Arbeit ausgeführt hat.',
    unknownTitle: 'Code nicht gefunden',
    unknownBody:
      'Der Code passt zu keinem Dokument. Prüfen Sie die acht Zeichen: S und 5, Z und 2 werden leicht verwechselt.',
  },
  fr: {
    sealedTitle: 'Document scellé',
    sealedBody:
      'Ce document est signé électroniquement et vérifiable. Chaque événement est chaîné au précédent : si une ligne, une heure ou une photo change, la vérification échoue.',
    draftTitle: 'Document non scellé',
    draftBody:
      'Ce document ne porte pas la signature électronique : il ne fait pas foi et ne peut pas être vérifié.',
    issuedBy: 'Émis par',
    job: 'Chantier',
    sealedOn: 'Scellé le',
    downloadPackage: 'Télécharger le paquet signé',
    downloadPackageHint:
      "C'est l'original : il contient le document, l'historique, les photos et le sceau.",
    downloadPdf: 'Télécharger le PDF lisible',
    fingerprint: 'Empreinte du paquet',
    linkLife:
      "Le lien vers le fichier dure dix minutes. Le code imprimé n'expire jamais : il suffit de rouvrir cette page.",
    verifyTitle: 'Vérifier sans nous faire confiance',
    verifyBody:
      'Le paquet se vérifie même sans GeoTapp, avec le vérificateur ouvert : il recalcule les empreintes et contrôle la signature.',
    verifyCta: 'Aller à la vérification',
    surveyTitle: 'Une question à ceux qui commandent le travail',
    surveyBody:
      'Partout en Europe, nous recueillons la fréquence à laquelle un travail payé est remis en cause, et ce qui se passe ensuite. Deux minutes, anonyme, rien d’obligatoire.',
    surveyCta: 'Répondre à l’enquête',
    revokedTitle: 'Code révoqué',
    revokedBody:
      "Ce document a existé, mais son émetteur a révoqué le lien. Pour en obtenir une copie, il faut la demander à l'entreprise qui a fait le travail.",
    unknownTitle: 'Code introuvable',
    unknownBody:
      'Le code ne correspond à aucun document. Vérifiez les huit caractères : S et 5, Z et 2 se confondent facilement.',
  },
  es: {
    sealedTitle: 'Documento sellado',
    sealedBody:
      'Este documento está firmado electrónicamente y es verificable. Cada evento está encadenado al anterior: si cambia una línea, una hora o una foto, la verificación falla.',
    draftTitle: 'Documento sin sellar',
    draftBody:
      'Este documento no lleva la firma electrónica: no da fe y no se puede verificar.',
    issuedBy: 'Emitido por',
    job: 'Obra',
    sealedOn: 'Sellado el',
    downloadPackage: 'Descargar el paquete firmado',
    downloadPackageHint:
      'Es el original: contiene el documento, el historial, las fotos y el sello.',
    downloadPdf: 'Descargar el PDF legible',
    fingerprint: 'Huella del paquete',
    linkLife:
      'El enlace al archivo dura diez minutos. El código del documento no caduca: basta volver a abrir esta página.',
    verifyTitle: 'Verificar sin confiar en nosotros',
    verifyBody:
      'El paquete se verifica incluso sin GeoTapp, con el verificador abierto: recalcula las huellas y comprueba la firma.',
    verifyCta: 'Ir a la verificación',
    surveyTitle: 'Una pregunta para quien encarga el trabajo',
    surveyBody:
      'En toda Europa estamos recogiendo con qué frecuencia se pone en duda un trabajo ya pagado, y qué pasa después. Dos minutos, anónimo, nada obligatorio.',
    surveyCta: 'Responde a la encuesta',
    revokedTitle: 'Código revocado',
    revokedBody:
      'Este documento existió, pero quien lo emitió revocó el enlace. Para obtener una copia hay que pedirla a la empresa que hizo el trabajo.',
    unknownTitle: 'Código no encontrado',
    unknownBody:
      'El código no corresponde a ningún documento. Conviene revisar los ocho caracteres: la S y el 5, la Z y el 2 se confunden con facilidad.',
  },
};

function testiPer(locale: AppLocale): Testi {
  const base = String(locale).split('-')[0];
  return TESTI[base] ?? TESTI.en;
}

function coda(impronta: string): string {
  return impronta.length <= 12 ? impronta : `…${impronta.slice(-12)}`;
}

async function risolvi(codice: string): Promise<Esito> {
  try {
    const r = await fetch(
      `${ENDPOINT}?codice=${encodeURIComponent(codice)}`,
      { cache: 'no-store' },
    );
    if (r.status === 404) return { stato: 'sconosciuto' };
    if (r.status === 410) {
      const d = (await r.json()) as { revocatoIl?: string | null };
      return { stato: 'revocato', revocatoIl: d.revocatoIl ?? null };
    }
    if (!r.ok) return { stato: 'sconosciuto' };
    return (await r.json()) as Esito;
  } catch {
    return { stato: 'sconosciuto' };
  }
}

export default async function PaginaCodice({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const intestazioni = await headers();
  const locale = resolveLocale({
    cookieLocale: null,
    countryCode: intestazioni.get('cf-ipcountry'),
    acceptLanguage: intestazioni.get('accept-language'),
  });
  const t = testiPer(locale);
  const esito = await risolvi(code);

  const scatola =
    'mx-auto max-w-2xl px-6 py-14 text-[#101418] font-sans';
  const filo = 'rounded-xl border border-[#E3E4E0] bg-white p-6';

  if (esito.stato === 'sconosciuto' || esito.stato === 'revocato') {
    const revocato = esito.stato === 'revocato';
    return (
      <main className={scatola}>
        <div
          className="rounded-xl border p-6"
          style={{
            borderColor: revocato ? '#C98A28' : '#CFD1CC',
            background: revocato ? '#FBF1E3' : '#FBFBF9',
          }}
        >
          <h1 className="text-xl font-semibold">
            {revocato ? t.revokedTitle : t.unknownTitle}
          </h1>
          <p className="mt-2 text-[#4A5259]">
            {revocato ? t.revokedBody : t.unknownBody}
          </p>
          <p className="mt-4 font-mono text-sm text-[#7C858C]">
            {code.toUpperCase()}
          </p>
        </div>
      </main>
    );
  }

  const sigillato = esito.sigillato;
  const data = esito.sigillatoIl
    ? new Date(esito.sigillatoIl).toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null;

  return (
    <main className={scatola}>
      {/* Il sigillo per primo: e' la ragione per cui esiste questa pagina. */}
      <div
        className="rounded-xl border p-6"
        style={{
          borderColor: sigillato ? '#3F8C5A' : '#C98A28',
          background: sigillato ? '#EAF2EC' : '#FBF1E3',
        }}
      >
        <h1
          className="text-xl font-semibold"
          style={{ color: sigillato ? '#144A27' : '#7A4900' }}
        >
          {sigillato ? t.sealedTitle : t.draftTitle}
        </h1>
        <p className="mt-2 text-sm text-[#101418]">
          {sigillato ? t.sealedBody : t.draftBody}
        </p>
      </div>

      <dl className="mt-6 grid gap-4 sm:grid-cols-3">
        <div>
          <dt className="text-[11px] uppercase tracking-wider text-[#7C858C]">
            {t.issuedBy}
          </dt>
          <dd className="mt-1">{esito.aziendaNome || '—'}</dd>
        </div>
        <div>
          <dt className="text-[11px] uppercase tracking-wider text-[#7C858C]">
            {t.job}
          </dt>
          <dd className="mt-1">{esito.commessa || '—'}</dd>
        </div>
        <div>
          <dt className="text-[11px] uppercase tracking-wider text-[#7C858C]">
            {t.sealedOn}
          </dt>
          <dd className="mt-1">{data ?? '—'}</dd>
        </div>
      </dl>

      <div className={`mt-6 ${filo}`}>
        {esito.pacchettoUrl ? (
          <a
            href={esito.pacchettoUrl}
            className="inline-block rounded-xl bg-[#16327A] px-5 py-3 font-semibold text-white"
          >
            {t.downloadPackage}
          </a>
        ) : null}
        <p className="mt-3 text-sm text-[#4A5259]">{t.downloadPackageHint}</p>
        {esito.documentoUrl ? (
          <p className="mt-3">
            <a
              href={esito.documentoUrl}
              className="font-semibold text-[#16327A] underline"
            >
              {t.downloadPdf}
            </a>
          </p>
        ) : null}
        <p className="mt-4 text-[11px] uppercase tracking-wider text-[#7C858C]">
          {t.fingerprint}
        </p>
        <p className="font-mono text-sm break-all">{coda(esito.zipSha256)}</p>
        <p className="mt-3 text-xs text-[#7C858C]">{t.linkLife}</p>
      </div>

      <div className={`mt-4 ${filo}`}>
        <h2 className="font-semibold">{t.verifyTitle}</h2>
        <p className="mt-1 text-sm text-[#4A5259]">{t.verifyBody}</p>
        <p className="mt-3">
          <a
            href={`/${String(locale).split('-')[0]}/verify-report/`}
            className="font-semibold text-[#16327A] underline"
          >
            {t.verifyCta}
          </a>
        </p>
      </div>

      {/* Ultimo, dopo che la pagina ha fatto il suo lavoro. Nessun UTM e nessun
          conteggio: qui vale la stessa regola del QR, e' un codice di verifica,
          non un pixel. */}
      <div className={`mt-4 ${filo}`}>
        <h2 className="font-semibold">{t.surveyTitle}</h2>
        <p className="mt-1 text-sm text-[#4A5259]">{t.surveyBody}</p>
        <p className="mt-3">
          <a
            href={`/${String(locale).split('-')[0]}/survey/`}
            className="font-semibold text-[#16327A] underline"
          >
            {t.surveyCta}
          </a>
        </p>
      </div>
    </main>
  );
}
