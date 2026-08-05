import Link from 'next/link';
import type { SchedaPaese, RispostaChecklist } from '@/lib/risorse/gps-lavoratori-ue/types';
import type { AppLocale } from '@/lib/i18n/config';
import type { SiteDictionary } from '@/lib/i18n/dictionaries';
import { loc } from '@/lib/risorse/gps-lavoratori-ue/localize';
import InformativaFacsimile from '@/components/risorse/InformativaFacsimile';
import LNastro from '@/components/LNastro';

/**
 * Vista presentazionale di una scheda-paese per la risorsa "GPS sui lavoratori in UE".
 *
 * Server component puro: nessun JS client. I testi-etichetta arrivano dal blocco
 * `risorseGps` del dizionario; i contenuti dalla `SchedaPaese`.
 *
 * Vestito "direzione L" (docs/redesign-sito-2026-07/esplorazione/risorsa-paese.html),
 * slug .lp-risorsa-paese: testata scura (.ph), tre dati chiave (.info), selettore
 * paese, procedura numerata (.steps), checklist (.rows), fac-simile, sanzione
 * (.ctain), attribuzione, fonti, disclaimer e chiusura fotografica (.end). Tutti i
 * dati restano quelli reali della scheda; cambia solo come sono vestiti.
 */

type RisorseGpsDict = SiteDictionary['risorseGps'];

/**
 * Etichetta che dice CHE COSA e' l'importo mostrato.
 *
 * Serve perche' la striscia in cima mostra solo la cifra, sotto "Quanto si
 * rischia", mentre il caso citato per esteso sta molto piu' giu' nella pagina:
 * senza qualifica, la Germania prometteva "35,3 milioni" come sanzione per il
 * GPS, quando quella multa (H&M) riguarda la schedatura della vita privata.
 * 29 schede su 39 mostrano un importo che NON viene da un caso GPS.
 */
function qualificaImporto(tipo: SchedaPaese['sanzioneMax']['tipoImporto'], dict: RisorseGpsDict): string {
  if (tipo === 'caso-gps') return dict.sanzioneTipoCasoGps;
  if (tipo === 'caso-affine') return dict.sanzioneTipoCasoAffine;
  return dict.sanzioneTipoMassimale;
}

interface SchedaPaeseViewProps {
  scheda: SchedaPaese;
  dict: RisorseGpsDict;
  locale: AppLocale;
  trialUrl: string;
  /** Nome del paese nella lingua corrente (ripiega su scheda.nome). */
  nomePaese?: string;
  /** Selettore-paese compatto (client) per saltare a un'altra scheda. */
  switcher?: React.ReactNode;
  /** Footer attribuzione + box "cita questa pagina". */
  attribuzione?: React.ReactNode;
  /** Href dell'hub /risorse/gps-lavoratori-ue/ e della home, gia' localizzati. */
  hubHref: string;
  homeHref: string;
  /** Etichetta "Risorse" del menu (navbar.resources), per il filo del pane. */
  resourcesLabel: string;
}

const BADGE_COLOR: Record<RispostaChecklist, string> = {
  si: '#5E7C1E',
  no: '#B3261E',
  dipende: '#8A6D1E',
};

function rispostaLabel(dict: RisorseGpsDict, risposta: RispostaChecklist): string {
  if (risposta === 'si') return dict.rispostaSi;
  if (risposta === 'no') return dict.rispostaNo;
  return dict.rispostaDipende;
}

function serveGloss(dict: RisorseGpsDict, risposta: RispostaChecklist): string {
  if (risposta === 'si') return dict.serveObbligatorio;
  if (risposta === 'no') return dict.serveNonRichiesto;
  return dict.serveDipende;
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
      rel="noopener noreferrer nofollow"
      className="underline underline-offset-2 break-words"
      style={{ color: 'var(--seal)' }}
    >
      {children}
    </a>
  );
}

export default function SchedaPaeseView({
  scheda,
  dict,
  locale,
  trialUrl,
  nomePaese,
  switcher,
  attribuzione,
  hubHref,
  homeHref,
  resourcesLabel,
}: SchedaPaeseViewProps) {
  const nomeLocale = nomePaese ?? scheda.nome;

  // Percorso in-arrivo: niente dossier, solo l'avviso "in preparazione".
  if (scheda.stato === 'in-arrivo') {
    return (
      <div className="lp-l lp-risorsa-paese">
        <section className="ph">
          <div className="crumb">
            <div className="w">
              <Link href={homeHref}>GeoTapp</Link> / <Link href={hubHref}>{resourcesLabel}</Link> / {nomeLocale}
            </div>
          </div>
          <div className="w">
            <p className="kk k"><s></s>{dict.h1Selettore}</p>
            <h1>{nomeLocale}</h1>
            <p className="lede">{dict.inArrivoNota}</p>
            <div className="acts">
              <a className="b1" href={hubHref}>{dict.scegliPaese}</a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const titolo = dict.metaTitleScheda.replace('{paese}', nomeLocale);
  const [titoloPaese, ...restoTitolo] = titolo.split(':');
  const titoloResto = restoTitolo.join(':').trim();

  return (
    <div className="lp-l lp-risorsa-paese">
      {/* ── testata scura ── */}
      <section className="ph">
        <div className="crumb">
          <div className="w">
            <Link href={homeHref}>GeoTapp</Link> / <Link href={hubHref}>{resourcesLabel}</Link> / {nomeLocale}
          </div>
        </div>
        <div className="w">
          <p className="kk k"><s></s>{dict.h1Selettore}</p>
          <h1>
            {titoloPaese}
            {titoloResto && <><br /><em>{titoloResto}</em></>}
          </h1>
          <p className="lede">{dict.aggiornatoIl} {formatDate(scheda.aggiornatoIl, locale)}</p>
          <div className="acts">
            <a className="b1" href={trialUrl}>{dict.ctaBottone}</a>
            <a className="b2" href="#cambia-paese">{dict.scegliPaese}</a>
          </div>
        </div>
      </section>

      {/* ── tre dati chiave + selettore-paese ── */}
      <section className="sec">
        <div className="w">
          <div className="info r-s">
            <div>
              <p className="lb k">{dict.autoritaCompetente}</p>
              <b>{loc(scheda.autoritaCompetente.ente, locale)}</b>
              <p>{dict.verificatoIl} {formatDate(scheda.autoritaCompetente.verificatoIl, locale)}</p>
            </div>
            <div>
              <p className="lb k">{dict.sezioneSanzione}</p>
              <b>{loc(scheda.sanzioneMax.importo, locale)}</b>
              <p>{qualificaImporto(scheda.sanzioneMax.tipoImporto, dict)}</p>
              <p>{dict.aggiornatoIl} {formatDate(scheda.aggiornatoIl, locale)}</p>
            </div>
            <div>
              <p className="lb k">{dict.sezioneCosaServe}</p>
              <b>{scheda.checklist.length}</b>
              <p>{dict.cosaServeLegenda}</p>
            </div>
          </div>
          {switcher && (
            <div id="cambia-paese" className="r d1" style={{ marginTop: 34 }}>
              {switcher}
            </div>
          )}
        </div>
      </section>

      {/* ── 1. cosa serve ── */}
      <section className="sec warm">
        <div className="w">
          <div className="hd">
            <h2 className="r">{dict.sezioneCosaServe}</h2>
            <p className="r d1">{dict.cosaServeLegenda}</p>
          </div>
          <ul className="rows r d1">
            {scheda.checklist.map((item, i) => (
              <li key={i}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, marginBottom: 8 }}>
                  <p style={{ fontWeight: 600, color: 'var(--ink)', flex: 1, minWidth: 200 }}>{loc(item.voce, locale)}</p>
                  <span style={{ display: 'flex', gap: 10, alignItems: 'center', flexShrink: 0 }}>
                    <span
                      className="k"
                      style={{ padding: '3px 12px', border: `1px solid ${BADGE_COLOR[item.risposta]}`, color: BADGE_COLOR[item.risposta] }}
                    >
                      {rispostaLabel(dict, item.risposta)}
                    </span>
                    <span style={{ fontSize: 13, color: '#78836F' }}>{serveGloss(dict, item.risposta)}</span>
                  </span>
                </div>
                <p style={{ marginBottom: 8 }}>{loc(item.dettaglio, locale)}</p>
                <p style={{ fontSize: 14 }}>
                  <ExternalLink href={item.fonte.url}>{item.fonte.titolo}</ExternalLink>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 2. la procedura, passo per passo ── */}
      <section className="sec">
        <div className="w">
          <div className="hd">
            <h2 className="r">{dict.sezioneProcedura}</h2>
          </div>
          <ol className="steps r d1">
            {scheda.procedura.map((passo) => (
              <li key={passo.passo}>
                <p>{loc(passo.descrizione, locale)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <LNastro />

      {/* ── 3. a chi rivolgerti ── */}
      <section className="sec warm">
        <div className="w">
          <div className="hd">
            <h2 className="r">{dict.sezioneAChiInviare}</h2>
          </div>
          <ul className="rows r d1">
            <li>
              <Contatto contatto={scheda.autoritaCompetente} dict={dict} locale={locale} />
            </li>
            {scheda.contatti
              .filter((c) => loc(c.ente, locale) !== loc(scheda.autoritaCompetente.ente, locale))
              .map((contatto, i) => (
                <li key={i}>
                  <Contatto contatto={contatto} dict={dict} locale={locale} />
                </li>
              ))}
          </ul>
        </div>
      </section>

      {/* ── 4. il modello da scaricare ── */}
      <section className="sec">
        <div className="w">
          <div className="hd">
            <h2 className="r">{dict.sezioneModello}</h2>
          </div>
          <InformativaFacsimile
            locale={locale}
            countryName={nomeLocale}
            authority={loc(scheda.autoritaCompetente.ente, locale)}
            countryISO={scheda.codiceISO}
          />
        </div>
      </section>

      {/* ── 5. quanto si rischia ── */}
      <section className="sec warm">
        <div className="w">
          <div className="ctain r">
            <b>{dict.sezioneSanzione}: {loc(scheda.sanzioneMax.importo, locale)}</b>
            <p>{loc(scheda.sanzioneMax.casoCitato, locale)}</p>
            <p style={{ marginTop: 14 }}>
              <ExternalLink href={scheda.sanzioneMax.urlFonte}>{scheda.sanzioneMax.urlFonte}</ExternalLink>
            </p>
          </div>

          {attribuzione}

          {/* ── 6. fonti ── */}
          <div className="hd" style={{ marginTop: 64 }}>
            <h2 className="r">{dict.sezioneFonti}</h2>
          </div>
          <ul className="rows r d1">
            {scheda.fonti.map((fonte, i) => (
              <li key={i}>
                <ExternalLink href={fonte.url}>{fonte.titolo}</ExternalLink>
              </li>
            ))}
          </ul>

          {/* ── 7. disclaimer ── */}
          <p style={{ marginTop: 34, fontSize: 13.5, color: '#78836F', maxWidth: '62ch' }}>{dict.disclaimer}</p>
        </div>
      </section>

      {/* ── 8. chiusura fotografica ── */}
      <section className="end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/bg2.webp" alt="" loading="lazy" />
        <div className="ov"></div>
        <div className="w">
          <h2 className="r">{dict.ctaTitolo}</h2>
          <p className="r d1">{dict.ctaTesto}</p>
          <div className="acts r d2">
            <a className="b1" href={trialUrl}>{dict.ctaBottone}</a>
            <a className="b2" href={hubHref}>{dict.scegliPaese}</a>
          </div>
        </div>
      </section>
    </div>
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
    // `data-verificato-il` espone la data di verifica per tooling interno
    // (es. monitor di freschezza). Nessun effetto visivo: la staleness e una
    // preoccupazione di report, non un allarme per l'utente.
    <div data-verificato-il={contatto.verificatoIl}>
      <p style={{ fontWeight: 600, color: 'var(--ink)' }}>{loc(contatto.ente, locale)}</p>
      {contatto.email && (
        <p style={{ fontSize: 14, marginTop: 4 }}>
          <a href={`mailto:${contatto.email}`} className="underline underline-offset-2" style={{ color: 'var(--seal)' }}>
            {contatto.email}
          </a>
        </p>
      )}
      {contatto.portale && (
        <p style={{ fontSize: 14, marginTop: 4 }}>
          <ExternalLink href={contatto.portale}>{contatto.portale}</ExternalLink>
        </p>
      )}
      <p style={{ fontSize: 14, marginTop: 4 }}>
        <ExternalLink href={contatto.urlFonte}>{contatto.urlFonte}</ExternalLink>
      </p>
      {contatto.note && <p style={{ fontSize: 14, marginTop: 4, color: '#78836F' }}>{loc(contatto.note, locale)}</p>}
      <p style={{ fontSize: 12.5, marginTop: 6, color: '#9AA294' }}>
        {dict.verificatoIl} {formatDate(contatto.verificatoIl, locale)}
      </p>
    </div>
  );
}
