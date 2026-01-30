import Link from 'next/link';
import { Hammer, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

export default function SettoriPage() {
    return (
        <div className="bg-slate-50 min-h-screen py-32 px-6">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold text-slate-900 mb-6">Settori & Soluzioni</h1>
                <p className="text-xl text-slate-600 mb-12">
                    GeoTapp è progettato per adattarsi alle esigenze specifiche del tuo business. Seleziona il tuo settore per scoprire come possiamo aiutarti.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    <Link href="/settori/installatori" className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-amber-200 transition-all">
                        <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Hammer size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">Installatori</h2>
                        <p className="text-slate-500 mb-4">Elettricisti, Idraulici, Termoidraulici.</p>
                        <div className="flex items-center text-amber-600 font-bold text-sm">
                            Scopri di più <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    <Link href="/settori/sicurezza" className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-indigo-200 transition-all">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <ShieldCheck size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">Sicurezza</h2>
                        <p className="text-slate-500 mb-4">Vigilanza, Steward, Eventi.</p>
                        <div className="flex items-center text-indigo-600 font-bold text-sm">
                            Scopri di più <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    <Link href="/settori/pulizie" className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-cyan-200 transition-all">
                        <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Sparkles size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">Pulizie</h2>
                        <p className="text-slate-500 mb-4">Imprese di pulizia, Facility management.</p>
                        <div className="flex items-center text-cyan-600 font-bold text-sm">
                            Scopri di più <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
