// Buffer fired before gtag is ready. Without this, events fired in
// useEffect at component mount (e.g. trial_page_view) are dropped silently
// because gtag.js loads async and is not yet defined when the effect runs.
type QueuedEvent = [string, Record<string, string | number> | undefined];
const queue: QueuedEvent[] = [];
let flushScheduled = false;

function flushQueue(): void {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  while (queue.length > 0) {
    const item = queue.shift();
    if (!item) break;
    const [name, params] = item;
    window.gtag('event', name, params ?? {});
  }
}

function scheduleFlush(): void {
  if (flushScheduled) return;
  flushScheduled = true;
  // Poll every 200ms for up to ~10 seconds. After that we give up — gtag will
  // never load (consent denied, blocked by adblock, network failure).
  let attempts = 0;
  const maxAttempts = 50;
  const tick = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      flushQueue();
      flushScheduled = false;
      return;
    }
    if (++attempts >= maxAttempts) {
      // Give up: drop the queue. Avoids unbounded memory growth on pages
      // where gtag never loads (e.g. user blocked it).
      queue.length = 0;
      flushScheduled = false;
      return;
    }
    setTimeout(tick, 200);
  };
  setTimeout(tick, 200);
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number>,
): void {
  if (typeof window === 'undefined') return;
  // Internal traffic skip: developers/founders toggle via ?gt_internal=on.
  // Inline script in [locale]/layout.tsx sets window.__gtSkip from localStorage.
  // Suppresses every custom event so test browsing doesn't pollute GA4 metrics.
  if ((window as unknown as { __gtSkip?: boolean }).__gtSkip === true) return;

  // Carry-over: salva il cta_source del trial_click in sessionStorage così la
  // /trial/ page può attribuire la conversione al CTA d'origine nel
  // trial_page_view event (altrimenti si perde nel navigate cross-page).
  // Param rinominato da `source` a `cta_source` perché `source` è dimensione
  // built-in GA4 e collide con la creazione di custom dimension event-scope.
  if (eventName === 'trial_click' && params && typeof params.cta_source === 'string') {
    try {
      sessionStorage.setItem('trial_source', params.cta_source);
      sessionStorage.setItem('trial_source_ts', String(Date.now()));
    } catch {
      // ignora: sessionStorage può essere bloccato (private mode, etc.)
    }
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params ?? {});
    // Also flush any queued events that may have accumulated before gtag loaded
    if (queue.length > 0) flushQueue();
    return;
  }
  // gtag not ready yet — buffer the event and schedule a flush.
  queue.push([eventName, params]);
  scheduleFlush();
}

/**
 * Legge il source del trial_click salvato dalla pagina precedente e lo
 * cancella per evitare attribuzioni stale. Da chiamare nel useEffect del
 * trial_page_view per arricchire l'evento con il CTA d'origine.
 *
 * TTL: 10 minuti. Dopo, considera il source "stale" (l'utente ha aperto
 * la pagina molto dopo aver cliccato il CTA, attribuzione poco affidabile).
 */
export function consumeTrialSource(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    const src = sessionStorage.getItem('trial_source');
    const tsRaw = sessionStorage.getItem('trial_source_ts');
    sessionStorage.removeItem('trial_source');
    sessionStorage.removeItem('trial_source_ts');
    if (!src) return null;
    const ts = tsRaw ? Number(tsRaw) : 0;
    if (!ts || Date.now() - ts > 10 * 60 * 1000) return null;
    return src;
  } catch {
    return null;
  }
}
