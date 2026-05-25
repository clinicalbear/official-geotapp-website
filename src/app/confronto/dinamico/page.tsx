// Root-level path forwards through middleware to /{locale}/confronto/dinamico/.
// Kept as a thin re-export so manual SSR builds don't 404 on a bare /confronto/dinamico/ hit.
export { default } from '@/app/[locale]/confronto/dinamico/page';
export { generateMetadata } from '@/app/[locale]/confronto/dinamico/page';
