/**
 * Registro delle schede-paese per la risorsa "GPS sui lavoratori in UE".
 *
 * `PAESI` è la lista canonica. Gli altri paesi si aggiungono qui nei Task
 * successivi; le pagine consumano questo modulo, mai i file dati direttamente.
 */

import type { SchedaPaese, StatoScheda } from './types';
import { italia } from './paesi/it';
import { germania } from './paesi/de';
import { francia } from './paesi/fr';
import { spagna } from './paesi/es';
import { olanda } from './paesi/nl';

export const PAESI: SchedaPaese[] = [italia, germania, francia, spagna, olanda];

export function getSchedaBySlug(slugCanonico: string): SchedaPaese | undefined {
  return PAESI.find((p) => p.slugCanonico === slugCanonico);
}

/** Lista leggera per la pagina selettore: solo i campi di anteprima. */
export function getAllStati(): {
  slugCanonico: string;
  codiceISO: string;
  nome: string;
  bandiera: string;
  stato: StatoScheda;
}[] {
  return PAESI.map((p) => ({
    slugCanonico: p.slugCanonico,
    codiceISO: p.codiceISO,
    nome: p.nome,
    bandiera: p.bandiera,
    stato: p.stato,
  }));
}
