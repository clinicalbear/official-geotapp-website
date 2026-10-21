/**
 * HTML stampabile della CHECKLIST di una scheda-paese (21/10/2026).
 *
 * Non contiene niente che la scheda non dica gia': prende le voci, la procedura e i
 * contatti verificati di quel Paese e li mette su un foglio con le caselle da spuntare.
 * Si genera nel browser (come il fac-simile dell'informativa) e si auto-stampa, quindi
 * vale per tutti i Paesi e tutte le lingue senza file statici. Nessun testo legale nuovo.
 */

export type ChecklistVoce = {
  voce: string;
  /** "Si'", "No", "Dipende" nella lingua della pagina. */
  rispostaLabel: string;
  /** 'si' | 'no' | 'dipende', per il colore. */
  risposta: 'si' | 'no' | 'dipende';
  dettaglio: string;
  fonteTitolo: string;
  fonteUrl: string;
};

export type ChecklistContatto = { ente: string; email?: string; portale?: string };

export type ChecklistInput = {
  locale: string;
  titolo: string;
  intro: string;
  paese: string;
  autorita: string;
  verificatoIl: string;
  verificatoLabel: string;
  sezioneVoci: string;
  sezioneProcedura: string;
  sezioneContatti: string;
  voci: ChecklistVoce[];
  passi: string[];
  contatti: ChecklistContatto[];
  disclaimer: string;
  footer: string;
};

export function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const COLORE = { si: '#15803D', no: '#B3261E', dipende: '#8A6D1E' } as const;

/** Solo http(s): l'URL di una fonte non deve mai diventare un javascript: nel foglio. */
function urlSicuro(u: string): string | null {
  return /^https?:\/\//i.test(u) ? u : null;
}

export function buildChecklistPrintHtml(c: ChecklistInput): string {
  const voci = c.voci
    .map((v) => {
      const href = urlSicuro(v.fonteUrl);
      const fonte = href
        ? `<a href="${esc(href)}">${esc(v.fonteTitolo)}</a>`
        : esc(v.fonteTitolo);
      return `<li class="v"><span class="box"></span><div class="b"><p class="t">${esc(v.voce)} <span class="r" style="color:${COLORE[v.risposta]};border-color:${COLORE[v.risposta]}">${esc(v.rispostaLabel)}</span></p><p>${esc(v.dettaglio)}</p><p class="f">${fonte}</p></div></li>`;
    })
    .join('');
  const passi = c.passi
    .map((p, i) => `<li class="v"><span class="box"></span><div class="b"><p><b>${i + 1}.</b> ${esc(p)}</p></div></li>`)
    .join('');
  const contatti = c.contatti
    .map((k) => {
      const extra = [k.email, k.portale].filter(Boolean).map((x) => esc(x as string)).join(' · ');
      return `<li><b>${esc(k.ente)}</b>${extra ? ` · ${extra}` : ''}</li>`;
    })
    .join('');
  return `<!doctype html><html lang="${esc(c.locale)}"><head><meta charset="utf-8"><title>${esc(c.titolo)}</title>
<style>@page{size:A4;margin:18mm 16mm}*{box-sizing:border-box}body{font-family:Georgia,'Times New Roman',serif;color:#1e293b;line-height:1.45;font-size:11pt;margin:0}.head{border-bottom:2px solid #8FC436;padding-bottom:8px;margin-bottom:12px}h1{font-size:19pt;margin:0 0 4px}h2{font-size:13pt;margin:18px 0 6px;color:#0B1736}p{margin:3px 0}ul,ol{list-style:none;padding:0;margin:0}li.v{display:flex;gap:10px;padding:8px 0;border-bottom:1px solid #e2e8f0;page-break-inside:avoid}.box{flex:0 0 16px;height:16px;border:1.5px solid #0B1736;margin-top:3px}.b{flex:1}.t{font-weight:bold}.r{display:inline-block;font-size:9pt;font-weight:bold;border:1px solid;padding:0 7px;margin-left:6px;white-space:nowrap}.f,.meta,.disc,.foot{font-size:9pt;color:#475569}.f a{color:#475569}.disc{margin-top:16px;border-top:1px solid #cbd5e1;padding-top:8px}.foot{margin-top:6px}li.k{padding:3px 0}</style>
</head><body onload="window.print()">
<div class="head"><h1>${esc(c.titolo)}</h1><p class="meta">${esc(c.paese)} · ${esc(c.autorita)} · ${esc(c.verificatoLabel)} ${esc(c.verificatoIl)}</p></div>
<p>${esc(c.intro)}</p>
<h2>${esc(c.sezioneVoci)}</h2><ul>${voci}</ul>
<h2>${esc(c.sezioneProcedura)}</h2><ul>${passi}</ul>
<h2>${esc(c.sezioneContatti)}</h2><ul>${contatti.replace(/<li>/g, '<li class="k">')}</ul>
<p class="disc">${esc(c.disclaimer)}</p>
<p class="foot">${esc(c.footer)} · <a href="https://geotapp.com/${esc(c.locale)}/?utm_source=pdf&amp;utm_medium=checklist&amp;utm_campaign=gps-lavoratori-ue">geotapp.com</a></p>
</body></html>`;
}
