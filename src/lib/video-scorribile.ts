/**
 * Far scorrere un video che il server non lascia scorrere.
 *
 * 🔴 I nostri file escono da Cloudflare SENZA risposte parziali: una richiesta
 * con `Range` torna 200 e l'intero file. Per il browser quel filmato diventa un
 * blocco unico, `seekable` resta a zero e ogni spostamento viene riportato
 * all'inizio: muore la barra del lettore, muoiono i capitoli, muore il secondo
 * d'ingresso. Nemmeno scrivere `currentTime` a file gia' scaricato basta
 * (misurato in produzione il 18/09/2026: `currentTime = 69` con 80 secondi in
 * buffer finiva a 1,4).
 *
 * L'unico modo che regge e' prendersi il file intero e darlo al lettore come
 * URL blob, che invece e' scorribile. La fetch la serve la cache del browser,
 * perche' i video sono marcati `immutable` per trenta giorni.
 *
 * In locale NON si vede: `next start` le risposte parziali le fa. Per provarlo
 * si intercetta la richiesta e si risponde come Cloudflare (vedi la memoria
 * trappola_cloudflare_niente_risposte_parziali).
 */

/** Il lettore puo' gia' spostarsi? */
export function scorribile(el: HTMLVideoElement): boolean {
  return el.seekable.length > 0 && el.seekable.end(el.seekable.length - 1) > 1;
}

/**
 * Sostituisce la sorgente con una copia locale scorribile e riapre al secondo
 * chiesto. Torna l'URL blob da revocare quando il componente se ne va, oppure
 * `null` se non c'e' stato bisogno o non e' riuscito: in quel caso il video
 * resta quello di rete e continua a suonare.
 */
export async function rendiScorribile(
  el: HTMLVideoElement,
  sorgente: string,
  secondo: number,
  alCambio?: () => void,
): Promise<string | null> {
  if (scorribile(el)) return null;
  try {
    const risposta = await fetch(sorgente);
    if (!risposta.ok) return null;
    const dati = await risposta.blob();
    const eraMuto = el.muted;
    const dove = Math.max(secondo, el.currentTime);
    const url = URL.createObjectURL(dati);
    el.src = url;

    // Se il file locale non si apre entro cinque secondi si torna a quello di
    // rete: meglio un video che non si sposta che un lettore nero.
    const pronto = await new Promise<boolean>((risolvi) => {
      const attesa = setTimeout(() => risolvi(false), 5000);
      el.addEventListener('loadedmetadata', () => { clearTimeout(attesa); risolvi(true); }, { once: true });
    });
    if (!pronto) {
      URL.revokeObjectURL(url);
      el.src = sorgente;
      el.muted = eraMuto;
      alCambio?.();
      await el.play().catch(() => undefined);
      return null;
    }

    el.muted = eraMuto;
    el.currentTime = dove;
    // Cambiando sorgente la traccia dei sottotitoli riparte spenta.
    alCambio?.();
    await el.play().catch(() => undefined);
    return url;
  } catch {
    return null;
  }
}
