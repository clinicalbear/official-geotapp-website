'use client';

import { useState } from 'react';
import { FileText, Upload } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { buildInformativaDoc, infLocale, type InfInputs } from '@/lib/risorse/gps-lavoratori-ue/informativa';

export interface GenLabels {
  azienda: string;
  aziendaPlaceholder: string;
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
  integrita: string;
  integritaHint: string;
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
  const [integrita, setIntegrita] = useState(false);
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
      integritaDispositivo: integrita,
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

  return (
    <div className="form r">
      <div className="fld">
        <label>{labels.azienda} *</label>
        <input className="in" value={azienda} onChange={(e) => setAzienda(e.target.value)} placeholder={labels.aziendaPlaceholder} />
      </div>

      <div className="two">
        <div className="fld">
          <label>{labels.paese}</label>
          <select className="in" value={paeseId} onChange={(e) => setPaeseId(e.target.value)}>
            {paesi.map((p) => (
              <option key={p.id} value={p.id}>{p.nome}</option>
            ))}
          </select>
        </div>

        <div className="fld">
          <label>{labels.quando} *</label>
          <input className="in" value={quando} onChange={(e) => setQuando(e.target.value)} placeholder={labels.quandoPlaceholder} />
        </div>
      </div>

      <div className="fld">
        <label>{labels.finalita} *</label>
        <input className="in" value={finalita} onChange={(e) => setFinalita(e.target.value)} placeholder={labels.finalitaPlaceholder} />
      </div>

      <div className="two">
        <div className="fld">
          <label>{labels.conservazione}</label>
          <input className="in" value={conservazione} onChange={(e) => setConservazione(e.target.value)} placeholder={labels.conservazionePlaceholder} />
        </div>

        <div className="fld">
          <label>{labels.dpo}</label>
          <input className="in" value={dpo} onChange={(e) => setDpo(e.target.value)} placeholder={labels.dpoPlaceholder} />
        </div>
      </div>

      <div className="fld">
        <label>{labels.logo}</label>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <label className="flogo">
            <Upload size={16} /> {labels.logo}
            <input type="file" accept="image/*" onChange={onLogo} style={{ display: 'none' }} />
          </label>
          {logo && <img src={logo} alt="logo" style={{ height: 40, maxWidth: 120, objectFit: 'contain' }} />}
        </div>
        <p className="hint">{labels.logoHint}</p>
      </div>

      {/* Opzionale: chi esegue controlli anti-manomissione raccoglie dati sul
          dispositivo del lavoratore, non solo la posizione, e l'art. 13
          impone di dichiararli tra le categorie di dati. Spento di default:
          non tutti i sistemi li fanno, e dichiarare una categoria non
          trattata sarebbe scorretto quanto ometterla. */}
      <div className="fld">
        <label className="fchk">
          <input
            type="checkbox"
            checked={integrita}
            onChange={(e) => setIntegrita(e.target.checked)}
          />
          <span>
            <span style={{ display: 'block' }}>{labels.integrita}</span>
            <span className="hint" style={{ marginTop: 4 }}>{labels.integritaHint}</span>
          </span>
        </label>
      </div>

      {err && <p style={{ color: '#FF9E9E', fontSize: 13.5, marginTop: -8, marginBottom: 20 }}>{labels.required}</p>}

      <button onClick={genera} className="b1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: 0, cursor: 'pointer' }}>
        <FileText size={18} /> {labels.genera}
      </button>

      <p className="hint" style={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
        <span>🔒</span><span>{labels.privacyNote}</span>
      </p>
    </div>
  );
}
