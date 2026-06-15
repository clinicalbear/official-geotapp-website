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
import { portogallo } from './paesi/pt';
import { danimarca } from './paesi/dk';
import { svezia } from './paesi/se';
import { norvegia } from './paesi/no';
import { austria } from './paesi/at';
import { belgio } from './paesi/be';
import { regnoUnito } from './paesi/gb';
import { irlanda } from './paesi/ie';
import { svizzera } from './paesi/ch';
import { romania } from './paesi/ro';
import { polonia } from './paesi/pl';
import { repubblicaCeca } from './paesi/cz';
import { grecia } from './paesi/gr';
import { finlandia } from './paesi/fi';
import { croazia } from './paesi/hr';
import { slovenia } from './paesi/si';
import { slovacchia } from './paesi/sk';
import { ungheria } from './paesi/hu';
import { bulgaria } from './paesi/bg';
import { estonia } from './paesi/ee';
import { lettonia } from './paesi/lv';
import { lituania } from './paesi/lt';
import { lussemburgo } from './paesi/lu';
import { islanda } from './paesi/is';
import { malta } from './paesi/mt';
import { cipro } from './paesi/cy';
import { albania } from './paesi/al';
import { serbia } from './paesi/rs';
import { bosnia } from './paesi/ba';
import { montenegro } from './paesi/me';
import { macedoniaDelNord } from './paesi/mk';

export const PAESI: SchedaPaese[] = [
  italia,
  germania,
  francia,
  spagna,
  olanda,
  portogallo,
  danimarca,
  svezia,
  norvegia,
  austria,
  belgio,
  regnoUnito,
  irlanda,
  svizzera,
  romania,
  polonia,
  repubblicaCeca,
  grecia,
  finlandia,
  croazia,
  slovenia,
  slovacchia,
  ungheria,
  bulgaria,
  estonia,
  lettonia,
  lituania,
  lussemburgo,
  islanda,
  malta,
  cipro,
  albania,
  serbia,
  bosnia,
  montenegro,
  macedoniaDelNord,
];

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
