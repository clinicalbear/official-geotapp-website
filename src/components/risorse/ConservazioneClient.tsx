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

  return (
    <div className="form r">
      <div className="two">
        <div className="fld">
          <label>{c.azienda}</label>
          <input
            className="in"
            value={azienda}
            onChange={(e) => setAzienda(e.target.value)}
            placeholder={c.aziendaPlaceholder}
          />
        </div>
        <div className="fld">
          <label>{c.paese}</label>
          <select className="in" value={paeseId} onChange={(e) => setPaeseId(e.target.value)}>
            {paesi.map((p) => (
              <option key={p.id} value={p.id}>{p.nome}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="fld">
        <label>{c.selezionaTipi}</label>
        <div className="cd-tipi">
          {c.tipi.map((t) => {
            const on = !!selezione[t.id];
            return (
              <button
                key={t.id}
                type="button"
                role="checkbox"
                aria-checked={on}
                onClick={() => toggle(t.id)}
                className={`cd-tog${on ? ' on' : ''}`}
              >
                {t.nome}
              </button>
            );
          })}
        </div>
      </div>

      <div className="fld">
        <label>{c.logo}</label>
        <div className="cd-upload">
          <label className="cd-upload-btn">
            <Upload size={16} /> {c.logo}
            <input type="file" accept="image/*" onChange={onLogo} className="cd-upload-input" />
          </label>
          {logo && <img src={logo} alt="logo" className="cd-upload-preview" />}
        </div>
        <p className="cd-hint">{c.logoHint}</p>
      </div>

      {err && <p className="cd-err">{c.required}</p>}

      <button type="button" onClick={genera} className="b1">
        <FileText size={18} /> {c.genera}
      </button>

      <p className="cd-privacy"><span aria-hidden="true">🔒</span><span>{c.privacyNote}</span></p>
    </div>
  );
}
