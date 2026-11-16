'use client';

import { useCallback, useRef, useState, type KeyboardEvent } from 'react';
import { Img, PhoneFrame, type Shot } from './NovitaShot';

export type { Shot };

/**
 * Schermate vere dei prodotti, rese in due modi:
 * - HeroShots: composizione dell'apertura della pagina (Flow + telefono sovrapposto);
 * - ToolMedia: schermata principale di Flow + telefono, striscia di miniature per le altre,
 *   visualizzatore ingrandito (<dialog> nativo: Esc chiude, il focus resta dentro e torna al
 *   pulsante che l'ha aperto).
 * Se un file non c'e' la figura sparisce invece di mostrare un'icona rotta.
 */

/** Hero: Flow in una finestra, il telefono sfalsato in basso a destra. */
export function HeroShots({ flow, phone }: { flow: Shot; phone?: Shot }) {
  return (
    <div className={`nv-hero${phone ? '' : ' nv-hero-solo'}`}>
      <div className="nv-win nv-hero-flow">
        <Img shot={flow} eager />
      </div>
      {phone ? (
        <PhoneFrame className="nv-hero-phone">
          <Img shot={phone} eager />
        </PhoneFrame>
      ) : null}
    </div>
  );
}

interface Labels {
  moreShots: string;
  enlarge: string;
  close: string;
  prev: string;
  next: string;
  flowCaption: string;
  phoneCaption: string;
}

export function ToolMedia({ flow, phone, labels }: { flow: Shot[]; phone: Shot[]; labels: Labels }) {
  const all = [...flow, ...phone];
  const mainFlow = flow[0];
  const mainPhone = phone[0];
  const extras = all.filter((s) => s !== mainFlow && s !== mainPhone);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const [idx, setIdx] = useState<number | null>(null);

  const open = useCallback((shot: Shot, ev: { currentTarget: HTMLElement }) => {
    openerRef.current = ev.currentTarget;
    setIdx(all.indexOf(shot));
    dialogRef.current?.showModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flow, phone]);

  const close = () => dialogRef.current?.close();
  const onClosed = () => {
    setIdx(null);
    openerRef.current?.focus();
  };
  const step = (d: number) => setIdx((i) => (i === null ? i : (i + d + all.length) % all.length));
  const onKey = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
  };
  const cur = idx === null ? null : all[idx];
  const label = (s: Shot) => labels.enlarge.replace('{name}', s.caption ?? s.alt);

  return (
    <div className="nv-media">
      <div className="nv-pair">
        {mainFlow ? (
          <figure className="nv-fig nv-fig-flow">
            <button type="button" className="nv-zoom nv-win" aria-label={label(mainFlow)} onClick={(e) => open(mainFlow, e)}>
              <Img shot={mainFlow} />
            </button>
            <figcaption>{labels.flowCaption}</figcaption>
          </figure>
        ) : null}
        {mainPhone ? (
          <figure className="nv-fig nv-fig-phone">
            <button type="button" className="nv-zoom" aria-label={label(mainPhone)} onClick={(e) => open(mainPhone, e)}>
              <PhoneFrame><Img shot={mainPhone} /></PhoneFrame>
            </button>
            <figcaption>{labels.phoneCaption}</figcaption>
          </figure>
        ) : null}
      </div>

      {extras.length > 0 ? (
        <div className="nv-more">
          <p className="nv-more-t">{labels.moreShots}</p>
          <ul className="nv-strip" role="list">
            {extras.map((s) => (
              <li key={s.id} className={`nv-th nv-th-${s.kind}`}>
                <button type="button" aria-label={label(s)} onClick={(e) => open(s, e)}>
                  <Img shot={s} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <dialog ref={dialogRef} className="nv-lb" onClose={onClosed} onKeyDown={onKey} onClick={(e) => { if (e.target === dialogRef.current) close(); }} aria-label={cur ? (cur.caption ?? cur.alt) : undefined}>
        {cur ? (
          <div className="nv-lb-in">
            <button type="button" className="nv-lb-x" onClick={close} aria-label={labels.close} autoFocus>
              <span aria-hidden="true">×</span>
            </button>
            <div className={`nv-lb-stage nv-lb-${cur.kind}`}>
              <Img shot={cur} eager />
            </div>
            <p className="nv-lb-cap">{cur.caption ?? cur.alt}</p>
            {all.length > 1 ? (
              <div className="nv-lb-nav">
                <button type="button" onClick={() => step(-1)} aria-label={labels.prev}><span aria-hidden="true">←</span></button>
                <span className="nv-lb-n" aria-hidden="true">{(idx ?? 0) + 1} / {all.length}</span>
                <button type="button" onClick={() => step(1)} aria-label={labels.next}><span aria-hidden="true">→</span></button>
              </div>
            ) : null}
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
