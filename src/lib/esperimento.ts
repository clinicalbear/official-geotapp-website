/**
 * Gli esperimenti cromatici. A57 del piano del 15/09, §10 del dossier.
 *
 * Due prove, in corso insieme perche' toccano parti diverse della pagina:
 *
 *   `cta`    il verde sigillo #1B7F4A con testo bianco contro il lime #8FC436
 *            con testo nero. Metrica: `trial_click` per sessione.
 *   `badge`  la pastiglia "Sigillato" (icona + parola) sul rapportino di
 *            esempio, contro il riquadro nudo. Metrica: `demo_report_download`.
 *
 * ⚠️ **Si leggono come tendenza, non come prova.** Con il traffico di oggi
 * (~100 click al mese da Search Console) quattro settimane non bastano a
 * raggiungere la significativita': il dossier lo scrive nella colonna "rischio
 * di lettura", e va ripetuto a chi guarda i numeri.
 *
 * ── Perche' la variante si decide nel BROWSER ──────────────────────────────
 * Le pagine sono statiche e stanno nella cache di Cloudflare: se la scegliesse
 * il server, tutti vedrebbero la variante finita in cache per prima e
 * l'esperimento non esisterebbe. Quindi l'assegnazione avviene una volta sola
 * per visitatore, in `localStorage`, ed e' stampata sull'`<html>` da uno script
 * in testa (vedi `SCRIPT_VARIANTI`) PRIMA del primo disegno: senza quello si
 * vedrebbe il pulsante cambiare colore sotto gli occhi.
 */

export const CHIAVE_CTA = 'gt_exp_cta';
export const CHIAVE_BADGE = 'gt_exp_badge';

/** 'a' e' sempre il controllo, cioe' quello che c'e' oggi. */
export type Variante = 'a' | 'b';

/**
 * Lo script che va in testa alla pagina, prima del primo disegno.
 *
 * Non usa moduli, non usa `let`: deve poter girare da solo, subito, e non
 * fallire mai. Se `localStorage` e' bloccato (finestra anonima, cookie
 * negati) l'esperimento semplicemente non parte e il visitatore vede il
 * controllo: meglio nessun dato che un dato sbagliato.
 *
 * Il traffico interno (`?gt_internal=on`) resta fuori: non si misura noi.
 */
export const SCRIPT_VARIANTI = `(function(){try{
  if(localStorage.getItem('gt_skip_analytics')==='1'){return;}
  function v(k){var x=localStorage.getItem(k);
    if(x!=='a'&&x!=='b'){x=Math.random()<0.5?'a':'b';localStorage.setItem(k,x);}
    return x;}
  var cta=v('${CHIAVE_CTA}'),badge=v('${CHIAVE_BADGE}');
  function marca(){var d=document.documentElement;if(!d)return;
    if(d.getAttribute('data-exp-cta')!==cta)d.setAttribute('data-exp-cta',cta);
    if(d.getAttribute('data-exp-badge')!==badge)d.setAttribute('data-exp-badge',badge);}
  marca();
  // L'idratazione di React riallinea gli attributi della radice a quelli
  // dell'HTML servito, che non ha i nostri: senza questo l'esperimento si
  // spegneva da solo qualche istante dopo il caricamento. Il controllo dentro
  // marca() evita di rientrare nell'osservatore a ogni giro.
  try{new MutationObserver(marca).observe(document.documentElement,{attributes:true,
    attributeFilter:['data-exp-cta','data-exp-badge']});}catch(_){}
  document.addEventListener('DOMContentLoaded',marca);
  addEventListener('load',marca);
}catch(_){}})();`;

function leggi(attributo: string): Variante {
  if (typeof document === 'undefined') return 'a';
  return document.documentElement.getAttribute(attributo) === 'b' ? 'b' : 'a';
}

/** La variante del colore della CTA per questo visitatore. */
export function varianteCta(): Variante {
  return leggi('data-exp-cta');
}

/** La variante della pastiglia sul rapportino di esempio. */
export function varianteBadge(): Variante {
  return leggi('data-exp-badge');
}

/**
 * Le varianti da attaccare a ogni evento, cosi' in GA4 ogni `trial_click` sa
 * da quale pagina veniva. Senza questo l'esperimento produce colore e nessun
 * numero.
 *
 * Fuori dal browser, o con l'esperimento spento, torna vuoto: gli eventi non
 * si sporcano di parametri che non dicono niente.
 */
export function parametriEsperimento(): Record<string, string> {
  if (typeof document === 'undefined') return {};
  const cta = document.documentElement.getAttribute('data-exp-cta');
  const badge = document.documentElement.getAttribute('data-exp-badge');
  const fuori: Record<string, string> = {};
  if (cta === 'a' || cta === 'b') fuori.variante_cta = cta;
  if (badge === 'a' || badge === 'b') fuori.variante_badge = badge;
  return fuori;
}
