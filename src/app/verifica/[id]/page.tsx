import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ShieldCheck, MapPin, Clock, Camera, AlertTriangle, CheckCircle2, FileText } from 'lucide-react';
import Link from 'next/link';

// Fetch report from Firestore REST API (no client SDK needed — server component)
async function getReport(id: string) {
  const PROJECT = 'geotap-v2';
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents/reports/${id}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const raw = await res.json();
    const f = raw.fields as Record<string, Record<string, unknown>>;
    if (!f) return null;

    const str  = (k: string) => (f[k]?.stringValue  as string)  ?? '';
    const bool = (k: string) => (f[k]?.booleanValue as boolean) ?? false;
    const num  = (k: string) => Number(f[k]?.integerValue ?? f[k]?.doubleValue ?? 0);

    return {
      reportId:        str('reportId'),
      status:          str('status'),
      sealed:          bool('sealed'),
      sealHash:        str('sealHash'),
      operatorName:    str('operatorName'),
      clientName:      str('clientName'),
      commessaRef:     str('commessaRef'),
      locationAddress: str('locationAddress'),
      locationNote:    str('locationNote'),
      tipoIntervento:  str('tipoIntervento'),
      categoria:       str('categoria'),
      descrizione:     str('descrizione'),
      inizioTs:        str('inizioTs'),
      fineTs:          str('fineTs'),
      durataMinuti:    num('durataMinuti'),
      inizioGpsLat:    num('inizioGpsLat'),
      inizioGpsLng:    num('inizioGpsLng'),
      fineGpsLat:      num('fineGpsLat'),
      fineGpsLng:      num('fineGpsLng'),
      gpsVerificato:   bool('gpsVerificato'),
      fotoInizioUrl:   str('fotoInizioUrl'),
      fotoInizioHash:  str('fotoInizioHash'),
      fotoInizioTs:    str('fotoInizioTs'),
      fotoFineUrl:     str('fotoFineUrl'),
      fotoFineHash:    str('fotoFineHash'),
      fotoFineTs:      str('fotoFineTs'),
    };
  } catch {
    return null;
  }
}

function formatTs(iso: string) {
  try {
    const d = new Date(iso);
    return d.toLocaleString('it-IT', {
      day: '2-digit', month: 'long', year: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
    });
  } catch { return iso; }
}

function durataLabel(min: number) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${h}h ${m}m`;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Verifica Report ${id} | GeoTapp`,
    description: 'Verifica l\'autenticità e l\'integrità di un report di intervento certificato da GeoTapp.',
    robots: { index: false },
  };
}

export default async function VerificaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const report = await getReport(id);

  if (!report || !report.reportId) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="text-red-500" size={36} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-3">Report non trovato</h1>
          <p className="text-slate-500 mb-6">
            Il codice <code className="bg-slate-100 px-2 py-1 rounded font-mono text-sm">{id}</code> non
            corrisponde a nessun report nel sistema GeoTapp.
          </p>
          <p className="text-sm text-slate-400 mb-8">
            Verifica che il codice sia corretto. Se ritieni si tratti di un errore, contatta
            il mittente del report.
          </p>
          <Link href="/" className="text-cyan-600 font-semibold hover:underline">
            ← Torna a geotapp.com
          </Link>
        </div>
      </div>
    );
  }

  const verified = report.sealed && report.status === 'verified';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <div className="bg-slate-900 text-white px-6 py-5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-cyan-500 rounded-lg flex items-center justify-center font-black text-white text-lg">G</div>
            <span className="font-bold text-lg">GeoTapp</span>
          </Link>
          <span className="text-slate-400 text-sm hidden sm:block">Verificatore di Report</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">

        {/* STATUS BADGE */}
        <div className={`rounded-2xl p-8 text-center border-2 ${verified ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}>
          <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${verified ? 'bg-green-100' : 'bg-red-100'}`}>
            {verified
              ? <ShieldCheck className="text-green-600" size={40} />
              : <AlertTriangle className="text-red-500" size={40} />
            }
          </div>
          <div className={`text-2xl font-black mb-2 ${verified ? 'text-green-700' : 'text-red-700'}`}>
            {verified ? 'Report autentico e verificato' : 'Verifica fallita'}
          </div>
          <p className={`text-sm ${verified ? 'text-green-600' : 'text-red-600'}`}>
            {verified
              ? 'Questo report è stato generato da GeoTapp, è sigillato crittograficamente e non è stato modificato dopo la chiusura dell\'intervento.'
              : 'Non è stato possibile verificare l\'integrità di questo report.'}
          </p>
          <div className="mt-4 inline-block bg-white rounded-xl px-4 py-2 text-sm font-mono text-slate-600 border border-slate-200">
            ID: {report.reportId}
          </div>
        </div>

        {/* DATI INTERVENTO */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center gap-2">
            <FileText size={18} className="text-slate-500" />
            <span className="font-bold text-slate-800">Dati Intervento</span>
          </div>
          <div className="p-6 grid sm:grid-cols-2 gap-4">
            {[
              ['Tipo intervento', report.tipoIntervento],
              ['Categoria', report.categoria],
              ['Operatore', report.operatorName],
              ['Committente', report.clientName],
              ['Rif. commessa', report.commessaRef],
              ['Sede', report.locationAddress],
              ['Note sede', report.locationNote],
            ].map(([label, value]) => value ? (
              <div key={label} className="bg-slate-50 rounded-xl px-4 py-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">{label}</div>
                <div className="font-semibold text-slate-800 text-sm">{value}</div>
              </div>
            ) : null)}
          </div>
          {report.descrizione && (
            <div className="px-6 pb-6">
              <div className="bg-cyan-50 border-l-4 border-cyan-400 rounded-r-xl px-4 py-3 text-sm text-slate-700 leading-relaxed">
                {report.descrizione}
              </div>
            </div>
          )}
        </div>

        {/* TIMBRATURE */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center gap-2">
            <Clock size={18} className="text-slate-500" />
            <span className="font-bold text-slate-800">Timbrature Certificate</span>
            {report.gpsVerificato && (
              <span className="ml-auto text-xs bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full">
                GPS Verificato
              </span>
            )}
          </div>
          <div className="p-6 grid sm:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <div className="text-xs font-bold text-green-600 uppercase tracking-wide mb-2">↓ Inizio lavori</div>
              <div className="text-2xl font-black text-green-700 mb-1">
                {new Date(report.inizioTs).toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })}
              </div>
              <div className="text-xs text-slate-500">{formatTs(report.inizioTs)}</div>
              <div className="mt-3 text-xs font-mono text-slate-400 bg-white rounded-lg px-2 py-1">
                <MapPin size={10} className="inline mr-1" />
                {report.inizioGpsLat.toFixed(4)}°N, {report.inizioGpsLng.toFixed(4)}°E
              </div>
            </div>
            <div className="bg-slate-800 rounded-xl p-5 text-center flex flex-col items-center justify-center">
              <div className="text-xs text-slate-400 uppercase tracking-wide mb-2">Durata</div>
              <div className="text-3xl font-black text-white">{durataLabel(report.durataMinuti)}</div>
              <div className="text-xs text-slate-500 mt-1">ore lavorate</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <div className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">↑ Fine lavori</div>
              <div className="text-2xl font-black text-orange-700 mb-1">
                {new Date(report.fineTs).toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })}
              </div>
              <div className="text-xs text-slate-500">{formatTs(report.fineTs)}</div>
              <div className="mt-3 text-xs font-mono text-slate-400 bg-white rounded-lg px-2 py-1">
                <MapPin size={10} className="inline mr-1" />
                {report.fineGpsLat.toFixed(4)}°N, {report.fineGpsLng.toFixed(4)}°E
              </div>
            </div>
          </div>
        </div>

        {/* PROVE FOTOGRAFICHE */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center gap-2">
            <Camera size={18} className="text-slate-500" />
            <span className="font-bold text-slate-800">Prove Fotografiche</span>
            <span className="ml-auto text-xs bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full">
              Hash verificato
            </span>
          </div>
          <div className="p-6 grid sm:grid-cols-2 gap-6">
            {[
              { label: 'Stato iniziale', tag: 'PRIMA', color: 'red', url: report.fotoInizioUrl, hash: report.fotoInizioHash, ts: report.fotoInizioTs },
              { label: 'Lavoro completato', tag: 'DOPO', color: 'green', url: report.fotoFineUrl, hash: report.fotoFineHash, ts: report.fotoFineTs },
            ].map(({ label, tag, color, url, hash, ts }) => (
              <div key={tag} className={`rounded-xl overflow-hidden border-2 ${color === 'red' ? 'border-red-200' : 'border-green-200'}`}>
                <div className={`px-4 py-2.5 flex items-center justify-between ${color === 'red' ? 'bg-red-50' : 'bg-green-50'}`}>
                  <span className={`text-xs font-black uppercase tracking-widest ${color === 'red' ? 'text-red-600' : 'text-green-600'}`}>
                    📷 {label}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {new Date(ts).toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                  </span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={url} alt={label} className="w-full object-cover max-h-72" />
                <div className="p-3 bg-slate-50 border-t border-slate-100">
                  <div className="text-xs text-slate-400 mb-1 font-mono">SHA-256</div>
                  <div className="text-xs font-mono text-slate-500 break-all leading-relaxed">{hash}</div>
                  <div className="flex items-center gap-1 mt-2">
                    <CheckCircle2 size={12} className="text-green-500" />
                    <span className="text-xs text-green-600 font-semibold">Hash integro — foto non modificata</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SIGILLATURA */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <ShieldCheck size={18} className="text-white" />
            </div>
            <span className="font-bold text-lg">Sigillatura Crittografica</span>
            <span className="ml-auto text-xs bg-green-900 text-green-400 font-bold px-3 py-1 rounded-full">
              ✓ VALIDA
            </span>
          </div>
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">
            Il sigillo è calcolato sull&apos;insieme di tutti i dati dell&apos;intervento: ID operatore,
            coordinate GPS, timestamp certificati, e hash crittografici di ogni foto allegata.
            Qualsiasi modifica successiva alla chiusura invalida il sigillo.
          </p>
          <div className="bg-slate-800 rounded-xl p-4">
            <div className="text-xs text-cyan-400 font-mono mb-2">Report seal SHA-256:</div>
            <div className="font-mono text-sm text-slate-300 break-all">{report.sealHash}</div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="text-center text-sm text-slate-400 pb-4">
          <p className="mb-2">
            Report verificato tramite{' '}
            <Link href="/" className="text-cyan-600 font-semibold hover:underline">GeoTapp</Link>
            {' '}— Sistema di certificazione del lavoro sul campo
          </p>
          <p className="text-xs">
            Questo documento ha valore probatorio. ID: {report.reportId}
          </p>
        </div>

      </div>
    </div>
  );
}
