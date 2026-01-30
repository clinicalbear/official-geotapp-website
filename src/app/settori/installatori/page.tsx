import { Metadata } from 'next';
import InstallatoriContent from './content';

export const metadata: Metadata = {
    title: 'App per Elettricisti e Idraulici | Gestione Interventi e Rapportini | GeoTapp',
    description: 'Il software semplice per installatori e manutentori. Elimina i foglietti di carta, traccia le ore in cantiere e crea rapportini digitali. Provalo gratis.',
};

export default function Page() {
    return <InstallatoriContent />;
}
