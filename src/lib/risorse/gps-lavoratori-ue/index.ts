/**
 * Registro delle schede-paese per la risorsa "GPS sui lavoratori in UE".
 *
 * `PAESI` è la lista canonica. Gli altri paesi si aggiungono qui nei Task
 * successivi; le pagine consumano questo modulo, mai i file dati direttamente.
 */

import type { SchedaPaese, StatoScheda } from './types';
import { italia } from './paesi/it';

export const PAESI: SchedaPaese[] = [italia];

export function getSchedaBySlug(slugCanonico: string): SchedaPaese | undefined {
  return PAESI.find((p) => p.slugCanonico === slugCanonico);
}

/** Lista leggera per la pagina selettore: solo i campi di anteprima. */
export function getAllStati(): {
  slugCanonico: string;
  nome: string;
  bandiera: string;
  stato: StatoScheda;
}[] {
  return PAESI.map((p) => ({
    slugCanonico: p.slugCanonico,
    nome: p.nome,
    bandiera: p.bandiera,
    stato: p.stato,
  }));
}
