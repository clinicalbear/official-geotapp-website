'use client';

import './l-page.css';
import { useState, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Download,
  Smartphone,
  Upload,
  XCircle,
} from 'lucide-react';
import { localizePath } from '@/lib/i18n/locale-routing';
import { getDictionary } from '@/lib/i18n/dictionaries';
import DemoReportBanner from '@/components/DemoReportBanner';
import type { AppLocale } from '@/lib/i18n/config';
import type { VerifierCopy } from '@/content/verifier/types';

const VERIFIER_DOWNLOAD_URL = '/downloads/report-verifier-0.2.1.zip';

// Kicker "La prova" (stessa parola gia' approvata su HomeClient, L_COPY.la_prova)
// e "Presenti su" non servono qui: Verifier non ha una sezione directory dedicata
// nel dizionario, quindi restano solo le etichette gia' presenti in VerifierCopy.

interface VerifierContentProps {
  copy: VerifierCopy;
  locale: AppLocale;
}

// Widget di verifica vero, invariato: upload, chiamata /api/verify-report,
// esito. Nessuna riga di logica toccata, solo il contenitore intorno cambia.
function OnlineVerifier({ copy }: { copy: VerifierCopy }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [result, setResult] = useState<Record<string, unknown> | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    if (!file.name.endsWith('.zip')) {
      setStatus('error');
      setErrorMsg(copy.online_verify_error_not_zip);
      return;
    }
    if (file.size > 25 * 1024 * 1024) {
      setStatus('error');
      setErrorMsg(copy.online_verify_error_too_large);
      return;
    }
    setStatus('loading');
    setResult(null);
    setErrorMsg('');
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/verify-report', { method: 'POST', body: fd });
      const json = await res.json();
      if (!res.ok) {
        setStatus('error');
        setErrorMsg(json.error ?? copy.online_verify_error_generic);
        return;
      }
      setResult(json);
      setStatus('done');
    } catch {
      setStatus('error');
      setErrorMsg(copy.online_verify_error_generic);
    }
  }

  function getResultLabel(r: Record<string, unknown>): { label: string; color: string } {
    if (r.status === 'invalid') return { label: copy.online_verify_result_invalid, color: 'text-red-600' };
    if (r.integrityLevel === 'legacy') return { label: copy.online_verify_result_legacy, color: 'text-yellow-600' };
    if (r.signatureStatus === 'verified') return { label: copy.online_verify_result_valid_sealed, color: 'text-emerald-600' };
    return { label: copy.online_verify_result_valid_unsigned, color: 'text-blue-600' };
  }

  return (
    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
      <div
        className="border-2 border-dashed border-slate-300 rounded-xl p-10 text-center cursor-pointer hover:border-emerald-400 transition-colors"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) handleFile(f); }}
      >
        <Upload size={36} className="mx-auto mb-3 text-slate-400" />
        <p className="font-medium text-slate-700">{copy.online_verify_upload_label}</p>
        <p className="text-sm text-slate-400 mt-1">{copy.online_verify_upload_hint}</p>
        <input ref={inputRef} type="file" accept=".zip" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
      </div>

      <p className="text-xs text-slate-400 text-center mt-3">{copy.online_verify_privacy_note}</p>

      {status === 'loading' && (
        <div className="mt-6 text-center text-slate-600 animate-pulse">Verifica in corso…</div>
      )}

      {status === 'error' && (
        <div className="mt-6 flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl p-4 text-red-700">
          <XCircle size={20} className="shrink-0" />
          {errorMsg}
        </div>
      )}

      {status === 'done' && result && (() => {
        const { label, color } = getResultLabel(result);
        const isValid = result.status !== 'invalid';
        const Icon = isValid ? CheckCircle2 : XCircle;
        return (
          <div className={`mt-6 rounded-xl border p-6 ${isValid ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
            <div className={`flex items-center gap-3 font-bold text-lg mb-4 ${color}`}>
              <Icon size={22} className="shrink-0" />
              {label}
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-700 font-mono">
              {!!(result.companyIdentity && (result.companyIdentity as Record<string, unknown>).companyId) && (
                <><span className="text-slate-400">Azienda</span><span>{String((result.companyIdentity as Record<string, unknown>).companyName ?? (result.companyIdentity as Record<string, unknown>).companyId)}</span></>
              )}
              {!!(result.companyIdentity && (result.companyIdentity as Record<string, unknown>).reportId) && (
                <><span className="text-slate-400">Report ID</span><span className="truncate">{String((result.companyIdentity as Record<string, unknown>).reportId)}</span></>
              )}
              <span className="text-slate-400">Integrità</span>
              <span>{String(result.integrityLevel).toUpperCase()}</span>
              <span className="text-slate-400">Firma</span>
              <span>{String(result.signatureStatus ?? 'absent')}</span>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

export default function VerifierContent({ copy, locale }: VerifierContentProps) {
  const getLink = (path: string) => localizePath(path, locale);
  const dict = getDictionary(locale);
  const heroTitle = copy.hero_title.split('\n');

  return (
    <div className="lp-l lp-prodotto-verifier">
      {/* TESTATA */}
      <section className="ph">
        <div className="crumb"><div className="w"><Link href={getLink('/')}>Home</Link> / {dict.navbar.products} / GeoTapp Verifier.</div></div>
        <div className="w">
          <p className="kk k"><s />{copy.hero_badge}</p>
          <h1>
            {heroTitle.map((line, i) => (
              <span key={i}>
                {i === heroTitle.length - 1 ? <em>{line}</em> : line}
                {i < heroTitle.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="lede">{copy.hero_subtitle}</p>
          <div className="acts">
            <a className="b1" href={VERIFIER_DOWNLOAD_URL} download>
              <Download size={18} style={{ display: 'inline', verticalAlign: '-3px', marginRight: 8 }} />{copy.hero_cta_download}
            </a>
            <Link className="b2" href={getLink('/contact')}>{copy.hero_cta_primary}</Link>
            <a className="b2" href="#how-it-works">{copy.hero_cta_secondary}</a>
          </div>
        </div>
      </section>

      {/* IL REPORT VERO */}
      <section className="shot"><div className="wn"><div className="fitwrap">
        <div className="frame fit r-s"><div className="sheet">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/verifier-report.webp" alt="GeoTapp Verifier, report storico commessa con integrity check" loading="eager" fetchPriority="high" />
        </div></div>
      </div></div></section>

      {/* IL PROBLEMA */}
      <section className="sec"><div className="w">
        <p className="kk k r" style={{ color: 'var(--seal)' }}>{copy.problem_badge}</p>
        <h2 className="r d1" style={{ marginTop: 14, maxWidth: '22ch' }}>{copy.problem_title}</h2>
      </div>
        <div className="mods">
          {copy.problem_items.map((item, i) => (
            <article key={item.title} className={`r d${i + 1}`}>
              <span className="nn">{String(i + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* COS'E' VERIFIER */}
      <section className="sec warm"><div className="wt l-center">
        <p className="kk k" style={{ justifyContent: 'center', color: 'var(--seal)' }}>{copy.what_badge}</p>
        <h2 className="r">{copy.what_title}</h2>
        <p>{copy.what_desc}</p>
      </div></section>

      {/* COME FUNZIONA */}
      <section id="how-it-works" className="sec"><div className="w">
        <p className="kk k r" style={{ color: 'var(--seal)' }}>{copy.how_badge}</p>
        <h2 className="r d1" style={{ marginTop: 14, maxWidth: '22ch' }}>{copy.how_title}</h2>
      </div>
        <div className="mods">
          {copy.how_steps.map((step, i) => (
            <article key={step.num} className={`r d${i + 1}`}>
              <span className="nn">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SCARICA L'SDK */}
      <section id="download" className="sec ink"><div className="w">
        <div className="l-center">
          <p className="kk k" style={{ justifyContent: 'center' }}>{copy.download_badge}</p>
          <h2 className="r">{copy.download_title}</h2>
          <p>{copy.download_desc}</p>
          <div className="acts" style={{ justifyContent: 'center', marginTop: 30 }}>
            <a className="b1" href={VERIFIER_DOWNLOAD_URL} download>
              <Download size={18} style={{ display: 'inline', verticalAlign: '-3px', marginRight: 8 }} />{copy.download_btn}
            </a>
          </div>
          <p style={{ marginTop: 16, fontSize: 13, color: 'rgba(242,240,233,.5)' }}>{copy.download_version}</p>
        </div>

        <div className="l-code-wrap">
          <div className="l-code">
            <div className="hd"><i /><i /><i /><span>{copy.download_cli_title}</span></div>
            <pre>{`# Verifica un report ZIP
npx geotapp-report-verify report.zip

# Output JSON per integrazione
npx geotapp-report-verify report.zip --json`}</pre>
          </div>
          <div className="l-code">
            <div className="hd"><i /><i /><i /><span>{copy.download_api_title}</span></div>
            <pre>{`import { verifyZipFile } from
  '@geotapp/report-verifier';

const result = await verifyZipFile('./report.zip');
// 'valid' | 'degraded' | 'invalid'
console.log(result.status);
console.log(result.integrityLevel);`}</pre>
          </div>
        </div>
      </div></section>

      {/* VERIFICA ONLINE (widget vero, invariato) */}
      <section id="verify-online" className="sec"><div className="wn">
        <div className="l-center" style={{ marginBottom: 40 }}>
          <p className="kk k" style={{ justifyContent: 'center', color: 'var(--seal)' }}>{copy.online_verify_badge}</p>
          <h2 className="r">{copy.online_verify_title}</h2>
          <p>{copy.online_verify_desc}</p>
        </div>
        <OnlineVerifier copy={copy} />
        <div style={{ marginTop: 40 }}>
          <p style={{ textAlign: 'center', fontSize: 14, color: '#78836F', marginBottom: 16 }}>
            {locale === 'it' ? 'Non hai un report? Scarica questo esempio reale e prova subito il verificatore.' : 'No report handy? Download this real sample and try the verifier right away.'}
          </p>
          <DemoReportBanner />
        </div>
      </div></section>

      {/* LOCALE VS ONLINE */}
      <section className="sec warm"><div className="w">
        <div className="l-center" style={{ marginBottom: 40 }}>
          <p className="kk k" style={{ justifyContent: 'center' }}>{copy.compare_badge}</p>
          <h2 className="r">{copy.compare_title}</h2>
        </div>
        <div className="split">
          <div>
            <h3 style={{ fontSize: 20, marginBottom: 18 }}>{copy.compare_local_title}</h3>
            <ul className="rows">
              {copy.compare_local_items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: 20, marginBottom: 18 }}>{copy.compare_online_title}</h3>
            <ul className="rows">
              {copy.compare_online_items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
        <p style={{ textAlign: 'center', fontSize: 13, color: '#78836F', marginTop: 30 }}>{copy.compare_same_engine_note}</p>
      </div></section>

      {/* COSA VERIFICA */}
      <section className="sec"><div className="w">
        <p className="kk k r" style={{ color: 'var(--seal)' }}>{copy.features_badge}</p>
        <h2 className="r d1" style={{ marginTop: 14, maxWidth: '22ch' }}>{copy.features_title}</h2>
      </div>
        <div className="mods">
          {copy.features.map((feat, i) => (
            <article key={feat.title} className={`r d${(i % 4) + 1}`}>
              <span className="nn">{String(i + 1).padStart(2, '0')}</span>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PER CHI E' PENSATO */}
      <section className="sec warm"><div className="w">
        <div className="l-center" style={{ marginBottom: 34 }}>
          <p className="kk k" style={{ justifyContent: 'center', color: 'var(--seal)' }}>{copy.who_badge}</p>
          <h2 className="r">{copy.who_title}</h2>
        </div>
        <ul className="rows l-who">
          {copy.who_items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div></section>

      {/* L'ECOSISTEMA */}
      <section className="sec ink l-mods-ink"><div className="w">
        <div className="l-center" style={{ marginBottom: 34 }}>
          <p className="kk k" style={{ justifyContent: 'center' }}>{copy.ecosystem_badge}</p>
          <h2 className="r">{copy.ecosystem_title}</h2>
          <p>{copy.ecosystem_desc}</p>
        </div>
      </div>
        <div className="mods">
          <article className="r">
            <Link href={getLink('/products/geotapp-timetracker')} className="l-eco-link">
              <span className="nn">01</span>
              <h3>GeoTapp TimeTracker</h3>
              <p>{copy.ecosystem_timetracker_desc}</p>
              <p className="l-eco-cta">{copy.ecosystem_timetracker_link} <ArrowRight size={13} style={{ display: 'inline', verticalAlign: '-1px' }} /></p>
            </Link>
          </article>
          <article className="r d1">
            <Link href={getLink('/products/geotapp-flow')} className="l-eco-link">
              <span className="nn">02</span>
              <h3>GeoTapp Flow</h3>
              <p>{copy.ecosystem_flow_desc}</p>
              <p className="l-eco-cta">{copy.ecosystem_flow_link} <ArrowRight size={13} style={{ display: 'inline', verticalAlign: '-1px' }} /></p>
            </Link>
          </article>
          <article className="r d2">
            <span className="nn">03</span>
            <h3>GeoTapp Verifier</h3>
            <p>{copy.ecosystem_verifier_desc}</p>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="fq"><div className="w"><div className="g">
        <div>
          <p className="kk k r" style={{ color: '#5E7C1E', marginBottom: 14 }}>{copy.faq_badge}</p>
          <h2 className="r">{copy.faq_title}</h2>
        </div>
        <div>
          {copy.faqs.map((faq, i) => (
            <div key={faq.q} className={`r d${Math.min(i + 1, 4)}`}>
              <details>
                <summary><h3>{faq.q}</h3></summary>
                <div className="ct"><p>{faq.a}</p></div>
              </details>
            </div>
          ))}
        </div>
      </div></div></section>

      {/* CHIUSURA */}
      <section className="end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/bg3.webp" alt="" loading="lazy" />
        <div className="ov" />
        <div className="w">
          <h2 className="r">{copy.cta_title}</h2>
          <p className="r d1">{copy.cta_subtitle}</p>
          <div className="acts r d2">
            <a className="b1" href={VERIFIER_DOWNLOAD_URL} download>
              <Download size={18} style={{ display: 'inline', verticalAlign: '-3px', marginRight: 8 }} />{copy.cta_download}
            </a>
            <Link className="b2" href={getLink('/contact')}>{copy.cta_primary}</Link>
            <Link className="b2" href={getLink('/products/geotapp-flow')}>
              <Database size={16} style={{ display: 'inline', verticalAlign: '-2px', marginRight: 6 }} />{copy.cta_flow}
            </Link>
            <Link className="b2" href={getLink('/products/geotapp-timetracker')}>
              <Smartphone size={16} style={{ display: 'inline', verticalAlign: '-2px', marginRight: 6 }} />{copy.cta_timetracker}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
