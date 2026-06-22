// Root-level path forwards through middleware to /{locale}/stampa/.
// Thin re-export so a bare /stampa/ hit doesn't 404 (same pattern as confronto/dinamico).
export { default } from '@/app/[locale]/stampa/page';
export { generateMetadata } from '@/app/[locale]/stampa/page';
