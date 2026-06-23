'use client';

import { useState } from 'react';
import { FileText, Upload } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { buildRighe, type CdContenuto } from '@/lib/risorse/conservazione-dati-rh';

interface Props {
  locale: string;
  contenuto: CdContenuto;
  paesi: { id: string; nome: string }[];
}

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export default function ConservazioneClient({ locale, contenuto, paesi }: Props) {
  const c = contenuto;
  const [azienda, setAzienda] = useState('');
  const [paeseId, setPaeseId] = useState(paesi[0]?.id ?? '');
  const [logo, setLogo] = useState<string | null>(null);
  const [selezione, setSelezione] = useState<Record<string, boolean>>(
    Object.fromEntries(c.tipi.map((t) => [t.id, true])),
  );
  const [err, setErr] = useState(false);

  function toggle(id: string) {
    setSelezione((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function onLogo(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => setLogo(typeof r.result === 'string' ? r.result : null);
    r.readAsDataURL(f);
  }

  function genera() {
    const tipiSel = c.tipi.filter((t) => selezione[t.id]).map((t) => t.id);
    if (tipiSel.length === 0) {
      setErr(true);
      return;
    }
    setErr(false);
    const paese = paesi.find((p) => p.id === paeseId);
    const righe = buildRighe(c, tipiSel, paeseId, paese?.nome);
    trackEvent('conservazione_dati_rh', { locale, paese: paeseId, tipi: tipiSel.length });

    const righeHtml = righe
      .map(
        (r) =>
          `<tr><td class="tipo">${esc(r.nome)}</td><td class="dur">${esc(r.durata)}</td><td class="nota">${esc(r.nota)}</td></tr>`,
      )
      .join('');
    const logoHtml = logo ? `<img class="logo" src="${logo}" alt="logo"/>` : '';
    const titolo = azienda.trim() ? `${c.docTitolo} — ${azienda.trim()}` : c.docTitolo;
    const today = new Date().toLocaleDateString(locale);

    const html = `<!doctype html><html lang="${locale}"><head><meta charset="utf-8">
<title>${esc(titolo)}</title>
<style>
  @page { size: A4; margin: 20mm 18mm; }
  * { box-sizing: border-box; }
  body { font-family: Georgia, 'Times New Roman', serif; color: #1e293b; line-height: 1.5; font-size: 11pt; margin: 0; }
  .head { display: flex; align-items: center; gap: 16px; border-bottom: 2px solid #8FC436; padding-bottom: 14px; margin-bottom: 20px; }
  .logo { max-height: 60px; max-width: 190px; object-fit: contain; }
  h1 { font-size: 16pt; margin: 0; color: #0f172a; }
  .paese { color: #475569; font-size: 10pt; margin: 0 0 14px; }
  table { width: 100%; border-collapse: collapse; }
  th, td { text-align: left; vertical-align: top; padding: 8px 10px; border-bottom: 1px solid #e2e8f0; }
  th { background: #f1f5f9; font-size: 9.5pt; text-transform: uppercase; letter-spacing: .03em; color: #475569; }
  td.tipo { font-weight: bold; width: 28%; }
  td.dur { width: 30%; }
  td.nota { color: #475569; }
  .disc { margin-top: 18px; font-size: 9.5pt; color: #64748b; background: #f8fafc; border-left: 3px solid #cbd5e1; padding: 8px 12px; }
  .foot { margin-top: 24px; padding-top: 12px; border-top: 1px solid #e2e8f0; font-size: 9pt; color: #94a3b8; }
</style></head><body onload="window.print()">
  <div class="head">${logoHtml}<h1>${esc(c.docTitolo)}</h1></div>
  ${paese ? `<p class="paese">${esc(c.paese)}: ${esc(paese.nome)}</p>` : ''}
  <table>
    <thead><tr><th>${esc(c.colTipo)}</th><th>${esc(c.colDurata)}</th><th>${esc(c.colNota)}</th></tr></thead>
    <tbody>${righeHtml}</tbody>
  </table>
  <p class="disc">${esc(c.notaLegale)}</p>
  <p class="foot">${esc(c.docFooter)} · geotapp.com · ${today}</p>
</body></html>`;

    const w = window.open('', '_blank');
    if (w) {
      w.document.open();
      w.document.write(html);
      w.document.close();
    }
  }

  const inputCls =
    'w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#8FC436] transition-colors';
  const labelCls = 'block text-sm font-semibold text-slate-700 mb-1.5';

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>{c.azienda}</label>
          <input className={inputCls} value={azienda} onChange={(e) => setAzienda(e.target.value)} placeholder={c.aziendaPlaceholder} />
        </div>
        <div>
          <label className={labelCls}>{c.paese}</label>
          <select className={inputCls} value={paeseId} onChange={(e) => setPaeseId(e.target.value)}>
            {paesi.map((p) => (
              <option key={p.id} value={p.id}>{p.nome}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6">
        <p className={labelCls}>{c.selezionaTipi}</p>
        <div className="grid sm:grid-cols-2 gap-2.5">
          {c.tipi.map((t) => {
            const on = !!selezione[t.id];
            return (
              <button
                key={t.id}
                type="button"
                role="checkbox"
                aria-checked={on}
                onClick={() => toggle(t.id)}
                className={`flex items-center gap-3 text-left px-4 py-3 rounded-xl border text-sm font-semibold transition-colors ${
                  on
                    ? 'bg-[#8FC436]/10 border-[#8FC436] text-slate-900'
                    : 'bg-white border-slate-200 text-slate-500 hover:border-[#8FC436]'
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                    on ? 'bg-[#8FC436] border-[#8FC436] text-slate-900' : 'border-slate-300 text-transparent'
                  }`}
                  aria-hidden="true"
                >
                  ✓
                </span>
                {t.nome}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <label className={labelCls}>{c.logo}</label>
        <div className="flex items-center gap-3">
          <label className="inline-flex items-center gap-2 cursor-pointer px-4 py-2.5 text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl hover:border-[#8FC436] transition-colors">
            <Upload size={16} /> {c.logo}
            <input type="file" accept="image/*" onChange={onLogo} className="hidden" />
          </label>
          {logo && <img src={logo} alt="logo" className="h-10 max-w-[120px] object-contain" />}
        </div>
        <p className="text-xs text-slate-400 mt-1.5">{c.logoHint}</p>
      </div>

      {err && <p className="text-sm text-red-500 mt-4">{c.required}</p>}

      <button
        onClick={genera}
        className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-slate-900 bg-[#8FC436] rounded-xl hover:bg-[#7db02e] transition-colors"
      >
        <FileText size={18} /> {c.genera}
      </button>

      <p className="text-xs text-slate-400 mt-4 flex items-start gap-1.5">
        <span>🔒</span><span>{c.privacyNote}</span>
      </p>
    </div>
  );
}
