import { Metadata } from 'next';
import PulizieContent from './content';

export const metadata: Metadata = {
    title: 'App per Imprese di Pulizie e Facility | Gestione Presenze Multisito | GeoTapp',
    description: 'Garantisci ai clienti che le pulizie sono state fatte. GeoTapp traccia presenze, accessi e turni per imprese di pulizia. Prova la soluzione trasparente.',
};

export default function Page() {
    return <PulizieContent />;
}
