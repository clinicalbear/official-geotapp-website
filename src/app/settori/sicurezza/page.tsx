import { Metadata } from 'next';
import SicurezzaContent from './content';

export const metadata: Metadata = {
    title: 'App per Vigilanza e Steward | Tracciamento Ore Semplice | GeoTapp',
    description: 'Il sistema facile per segnare le ore di lavoro. Ideale per guardie giurate, steward e servizi fiduciari. Niente moduli, solo START/STOP. Provalo ora.',
};

export default function Page() {
    return <SicurezzaContent />;
}
