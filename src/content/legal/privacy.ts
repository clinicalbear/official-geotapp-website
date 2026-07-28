// Copia non localizzata dell'informativa, usata solo dalla rotta senza prefisso
// di lingua (/privacy, che in produzione risponde 308 verso /it/privacy/).
// Qui viveva un duplicato del testo italiano andato fuori sincrono con
// privacy-i18n.ts: dichiarava ancora Firestore in "US/IE", GoCardless fra i
// sub-processor e Firebase Analytics. Ora rilegge la versione italiana, cosi'
// le due copie non possono piu' divergere.
import { getPrivacyContent } from './privacy-i18n';

const content: string = getPrivacyContent('it');

export default content;
