import { ASSET_RECOVERY_SCRIPT } from '@/lib/asset-recovery';

/** Ricarica la pagina se un CSS o JS del sito non arriva: vedi src/lib/asset-recovery.ts. */
export default function AssetRecoveryScript() {
  return <script dangerouslySetInnerHTML={{ __html: ASSET_RECOVERY_SCRIPT }} />;
}
