'use client';

import { useState } from 'react';
import { FileText, Upload } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { buildInformativaDoc, infLocale, type InfInputs } from '@/lib/risorse/gps-lavoratori-ue/informativa';

export interface GenLabels {
  azienda: string;
  paese: string;
  paesePlaceholder: string;
  finalita: string;
  finalitaPlaceholder: string;
  quando: string;
  quandoPlaceholder: string;
  conservazione: string;
  conservazionePlaceholder: string;
  dpo: string;
  dpoPlaceholder: string;
  logo: string;
  logoHint: string;
  genera: string;
  privacyNote: string;
  docFooter: string; // "Bozza generata gratuitamente con GeoTapp"
  required: string;  // messaggio campo obbligatorio
}

interface Props {
  locale: string;
  paesi: { id: string; nome: string; autorita: string }[];
  labels: GenLabels;
}

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export default function GeneratoreInformativaClient({ locale, paesi, labels }: Props) {
  const [azienda, setAzienda] = useState('');
  const [paeseId, setPaeseId] = useState(paesi[0]?.id ?? '');
  const [finalita, setFinalita] = useState('');
  const [quando, setQuando] = useState('');
  const [conservazione, setConservazione] = useState('');
  const [dpo, setDpo] = useState('');
  const [logo, setLogo] = useState<string | null>(null);
  const [err, setErr] = useState(false);

  function onLogo(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => setLogo(typeof r.result === 'string' ? r.result : null);
    r.readAsDataURL(f);
  }

  function genera() {
    if (!azienda.trim() || !finalita.trim() || !quando.trim()) {
      setErr(true);
      return;
    }
    setErr(false);
    const paese = paesi.find((p) => p.id === paeseId);
    const inputs: InfInputs = {
      azienda: azienda.trim(),
      paese: paese?.nome ?? '',
      finalita: finalita.trim(),
      quando: quando.trim(),
      conservazione: conservazione.trim(),
      dpo: dpo.trim() || undefined,
      autorita: paese?.autorita ?? '',
    };
    const doc = buildInformativaDoc(infLocale(locale), inputs, paeseId);
    trackEvent('generatore_informativa', { locale, paese: paeseId });

    const sezioniHtml = doc.sezioni
      .map((s) => `<h2>${esc(s.titolo)}</h2><p>${esc(s.testo)}</p>`)
      .join('');
    const dpoHtml = doc.dpo ? `<p class="dpo">${esc(doc.dpo)}</p>` : '';
    const logoHtml = logo ? `<img class="logo" src="${logo}" alt="logo"/>` : '';
    const today = new Date().toLocaleDateString(locale);

    const html = `<!doctype html><html lang="${locale}"><head><meta charset="utf-8">
<title>${esc(doc.titolo)}</title>
<style>
  @page { size: A4; margin: 22mm 20mm; }
  * { box-sizing: border-box; }
  body { font-family: Georgia, 'Times New Roman', serif; color: #1e293b; line-height: 1.55; font-size: 12pt; margin: 0; }
  .head { display: flex; align-items: center; gap: 16px; border-bottom: 2px solid #8FC436; padding-bottom: 14px; margin-bottom: 22px; }
  .logo { max-height: 64px; max-width: 200px; object-fit: contain; }
  h1 { font-size: 17pt; margin: 0; color: #0f172a; }
  h2 { font-size: 12.5pt; margin: 18px 0 4px; color: #0f172a; }
  p { margin: 0 0 8px; }
  .intro { margin-bottom: 6px; }
  .dpo { font-style: italic; color: #475569; }
  .foot { margin-top: 26px; padding-top: 12px; border-top: 1px solid #e2e8f0; font-size: 9pt; color: #94a3b8; }
  .disc { margin-top: 18px; font-size: 9.5pt; color: #64748b; background: #f8fafc; border-left: 3px solid #cbd5e1; padding: 8px 12px; }
</style></head><body onload="window.print()">
  <div class="head">${logoHtml}<h1>${esc(doc.titolo)}</h1></div>
  <p class="intro">${esc(doc.intro)}</p>
  ${dpoHtml}
  ${sezioniHtml}
  <p class="disc">${esc(doc.chiusura)}</p>
  <p class="foot">${esc(labels.docFooter)} · geotapp.com · ${today}</p>
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
        <div className="sm:col-span-2">
          <label className={labelCls}>{labels.azienda} *</label>
          <input className={inputCls} value={azienda} onChange={(e) => setAzienda(e.target.value)} placeholder="Es. Rossi Pulizie S.r.l." />
        </div>

        <div>
          <label className={labelCls}>{labels.paese}</label>
          <select className={inputCls} value={paeseId} onChange={(e) => setPaeseId(e.target.value)}>
            {paesi.map((p) => (
              <option key={p.id} value={p.id}>{p.nome}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelCls}>{labels.quando} *</label>
          <input className={inputCls} value={quando} onChange={(e) => setQuando(e.target.value)} placeholder={labels.quandoPlaceholder} />
        </div>

        <div className="sm:col-span-2">
          <label className={labelCls}>{labels.finalita} *</label>
          <input className={inputCls} value={finalita} onChange={(e) => setFinalita(e.target.value)} placeholder={labels.finalitaPlaceholder} />
        </div>

        <div>
          <label className={labelCls}>{labels.conservazione}</label>
          <input className={inputCls} value={conservazione} onChange={(e) => setConservazione(e.target.value)} placeholder={labels.conservazionePlaceholder} />
        </div>

        <div>
          <label className={labelCls}>{labels.dpo}</label>
          <input className={inputCls} value={dpo} onChange={(e) => setDpo(e.target.value)} placeholder={labels.dpoPlaceholder} />
        </div>

        <div className="sm:col-span-2">
          <label className={labelCls}>{labels.logo}</label>
          <div className="flex items-center gap-3">
            <label className="inline-flex items-center gap-2 cursor-pointer px-4 py-2.5 text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl hover:border-[#8FC436] transition-colors">
              <Upload size={16} /> {labels.logo}
              <input type="file" accept="image/*" onChange={onLogo} className="hidden" />
            </label>
            {logo && <img src={logo} alt="logo" className="h-10 max-w-[120px] object-contain" />}
          </div>
          <p className="text-xs text-slate-400 mt-1.5">{labels.logoHint}</p>
        </div>
      </div>

      {err && <p className="text-sm text-red-500 mt-4">{labels.required}</p>}

      <button
        onClick={genera}
        className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-slate-900 bg-[#8FC436] rounded-xl hover:bg-[#7db02e] transition-colors"
      >
        <FileText size={18} /> {labels.genera}
      </button>

      <p className="text-xs text-slate-400 mt-4 flex items-start gap-1.5">
        <span>🔒</span><span>{labels.privacyNote}</span>
      </p>
    </div>
  );
}
