import type { SchedaPaese, RispostaChecklist } from '@/lib/risorse/gps-lavoratori-ue/types';
import type { AppLocale } from '@/lib/i18n/config';

/**
 * Vista presentazionale di una scheda-paese per la risorsa "GPS sui lavoratori in UE".
 *
 * Server component puro: nessun JS client. I testi-etichetta arrivano dal blocco
 * `risorseGps` del dizionario; i contenuti dalla `SchedaPaese`.
 */

type RisorseGpsDict = {
  metaTitleScheda: string;
  metaDescScheda: string;
  sezioneCosaServe: string;
  sezioneProcedura: string;
  sezioneAChiInviare: string;
  sezioneModello: string;
  sezioneSanzione: string;
  sezioneFonti: string;
  rispostaSi: string;
  rispostaNo: string;
  rispostaDipende: string;
  verificatoIl: string;
  aggiornatoIl: string;
  scaricaModello: string;
  autoritaCompetente: string;
  disclaimer: string;
  ctaTitolo: string;
  ctaTesto: string;
  ctaBottone: string;
  inArrivo: string;
  inArrivoNota: string;
};

interface SchedaPaeseViewProps {
  scheda: SchedaPaese;
  dict: RisorseGpsDict;
  locale: AppLocale;
  trialUrl: string;
}

const BADGE_STYLE: Record<RispostaChecklist, string> = {
  si: 'bg-green-100 text-green-800 ring-1 ring-green-200',
  no: 'bg-red-100 text-red-800 ring-1 ring-red-200',
  dipende: 'bg-amber-100 text-amber-800 ring-1 ring-amber-200',
};

function rispostaLabel(dict: RisorseGpsDict, risposta: RispostaChecklist): string {
  if (risposta === 'si') return dict.rispostaSi;
  if (risposta === 'no') return dict.rispostaNo;
  return dict.rispostaDipende;
}

function formatDate(iso: string, locale: AppLocale): string {
  // iso atteso YYYY-MM-DD. In caso di formato inatteso si rende il valore grezzo.
  const parsed = new Date(iso);
  if (Number.isNaN(parsed.getTime())) return iso;
  try {
    return new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(parsed);
  } catch {
    return iso;
  }
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#6a9a1f] underline underline-offset-2 hover:text-[#557d18] break-words"
    >
      {children}
    </a>
  );
}

export default function SchedaPaeseView({ scheda, dict, locale, trialUrl }: SchedaPaeseViewProps) {
  // Percorso in-arrivo: niente dossier, solo l'avviso "in preparazione".
  if (scheda.stato === 'in-arrivo') {
    return (
      <main className="container mx-auto max-w-3xl px-4 py-20 text-center">
        <p className="text-6xl mb-6" aria-hidden="true">{scheda.bandiera}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          {scheda.nome}
        </h1>
        <p className="inline-block rounded-full bg-amber-100 text-amber-800 px-4 py-1 text-sm font-semibold mb-4">
          {dict.inArrivo}
        </p>
        <p className="text-slate-600 text-lg">{dict.inArrivoNota}</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
      {/* Header */}
      <header className="mb-12 text-center">
        <p className="text-6xl mb-4" aria-hidden="true">{scheda.bandiera}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          {dict.metaTitleScheda.replace('{paese}', scheda.nome)}
        </h1>
        <p className="text-sm text-slate-500">
          {dict.aggiornatoIl} {formatDate(scheda.aggiornatoIl, locale)}
        </p>
      </header>

      {/* 1. Cosa serve */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">{dict.sezioneCosaServe}</h2>
        <ul className="space-y-5">
          {scheda.checklist.map((item, i) => (
            <li key={i} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <p className="font-semibold text-slate-900 flex-1 min-w-0">{item.voce}</p>
                <span
                  className={`shrink-0 rounded-full px-3 py-0.5 text-xs font-semibold ${BADGE_STYLE[item.risposta]}`}
                >
                  {rispostaLabel(dict, item.risposta)}
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed mb-2">{item.dettaglio}</p>
              <p className="text-sm">
                <ExternalLink href={item.fonte.url}>{item.fonte.titolo}</ExternalLink>
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* 2. Procedura */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">{dict.sezioneProcedura}</h2>
        <ol className="space-y-4">
          {scheda.procedura.map((passo) => (
            <li key={passo.passo} className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-[#8FC436] text-white font-bold flex items-center justify-center">
                {passo.passo}
              </span>
              <p className="text-slate-700 leading-relaxed pt-1">{passo.descrizione}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 3. A chi rivolgerti */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">{dict.sezioneAChiInviare}</h2>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 mb-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">
            {dict.autoritaCompetente}
          </p>
          <Contatto contatto={scheda.autoritaCompetente} dict={dict} locale={locale} />
        </div>
        {scheda.contatti
          .filter((c) => c.ente !== scheda.autoritaCompetente.ente)
          .map((contatto, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-5 mb-4">
              <Contatto contatto={contatto} dict={dict} locale={locale} />
            </div>
          ))}
      </section>

      {/* 4. Modello: solo se presente e disponibile */}
      {scheda.modelloPdf && scheda.modelloPdf.disponibile && (
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">{dict.sezioneModello}</h2>
          {/* TODO: instradare il download tramite la cattura lead-magnet esistente
              (leadMagnet 'informativa-gps', MailerLite) nel Task SEO/wiring. */}
          <a
            href={scheda.modelloPdf.url}
            className="inline-flex items-center gap-2 rounded-full bg-[#7db02e] hover:bg-[#6a9a1f] text-white font-semibold px-6 py-3 shadow-md transition-colors"
          >
            {dict.scaricaModello}
          </a>
        </section>
      )}

      {/* 5. Sanzione */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">{dict.sezioneSanzione}</h2>
        <div className="rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="text-3xl font-bold text-red-700 mb-2">{scheda.sanzioneMax.importo}</p>
          <p className="text-slate-700 leading-relaxed mb-2">{scheda.sanzioneMax.casoCitato}</p>
          <p className="text-sm">
            <ExternalLink href={scheda.sanzioneMax.urlFonte}>{scheda.sanzioneMax.urlFonte}</ExternalLink>
          </p>
        </div>
      </section>

      {/* 6. Fonti */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">{dict.sezioneFonti}</h2>
        <ul className="space-y-2 list-disc list-inside">
          {scheda.fonti.map((fonte, i) => (
            <li key={i} className="text-slate-700">
              <ExternalLink href={fonte.url}>{fonte.titolo}</ExternalLink>
            </li>
          ))}
        </ul>
      </section>

      {/* 7. Disclaimer */}
      <p className="rounded-lg bg-slate-100 border border-slate-200 text-slate-500 text-sm p-4 mb-14">
        {dict.disclaimer}
      </p>

      {/* 8. CTA */}
      <section className="rounded-2xl bg-slate-900 text-white text-center p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{dict.ctaTitolo}</h2>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">{dict.ctaTesto}</p>
        <a
          href={trialUrl}
          className="inline-flex items-center gap-2 rounded-full bg-[#8FC436] hover:bg-[#7db02e] text-slate-900 font-bold px-7 py-3 shadow-md transition-colors"
        >
          {dict.ctaBottone}
        </a>
      </section>
    </main>
  );
}

function Contatto({
  contatto,
  dict,
  locale,
}: {
  contatto: SchedaPaese['autoritaCompetente'];
  dict: RisorseGpsDict;
  locale: AppLocale;
}) {
  return (
    <div className="space-y-1">
      <p className="font-semibold text-slate-900">{contatto.ente}</p>
      {contatto.email && (
        <p className="text-sm">
          <a
            href={`mailto:${contatto.email}`}
            className="text-[#6a9a1f] underline underline-offset-2 hover:text-[#557d18]"
          >
            {contatto.email}
          </a>
        </p>
      )}
      {contatto.portale && (
        <p className="text-sm">
          <ExternalLink href={contatto.portale}>{contatto.portale}</ExternalLink>
        </p>
      )}
      <p className="text-sm">
        <ExternalLink href={contatto.urlFonte}>{contatto.urlFonte}</ExternalLink>
      </p>
      {contatto.note && <p className="text-sm text-slate-500">{contatto.note}</p>}
      <p className="text-xs text-slate-400">
        {dict.verificatoIl} {formatDate(contatto.verificatoIl, locale)}
      </p>
    </div>
  );
}
