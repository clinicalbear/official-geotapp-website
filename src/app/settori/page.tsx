import Link from 'next/link';
import { Hammer, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { DEFAULT_LOCALE, type AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';

interface Props {
  locale?: AppLocale;
}

const HUB_COPY: Record<
  string,
  {
    title: string;
    subtitle: string;
    installatori: string;
    installatori_desc: string;
    sicurezza: string;
    sicurezza_desc: string;
    pulizie: string;
    pulizie_desc: string;
    cta: string;
  }
> = {
  it: { title: 'Settori & Soluzioni', subtitle: 'Seleziona il tuo settore per scoprire come GeoTapp può aiutarti.', installatori: 'Installatori', installatori_desc: 'Elettricisti, idraulici, manutentori.', sicurezza: 'Sicurezza', sicurezza_desc: 'Vigilanza, steward, eventi.', pulizie: 'Pulizie', pulizie_desc: 'Imprese di pulizia, facility management.', cta: 'Scopri di più' },
  en: { title: 'Sectors & Solutions', subtitle: 'Select your sector to discover how GeoTapp can help you.', installatori: 'Installers', installatori_desc: 'Electricians, plumbers, maintenance.', sicurezza: 'Security', sicurezza_desc: 'Guards, stewards, events.', pulizie: 'Cleaning', pulizie_desc: 'Cleaning companies, facility management.', cta: 'Find out more' },
  de: { title: 'Branchen & Lösungen', subtitle: 'Wählen Sie Ihre Branche, um zu sehen, wie GeoTapp helfen kann.', installatori: 'Installateure', installatori_desc: 'Elektriker, Sanitärinstallateure, Wartung.', sicurezza: 'Sicherheitsdienst', sicurezza_desc: 'Bewachung, Stewards, Veranstaltungen.', pulizie: 'Gebäudereinigung', pulizie_desc: 'Reinigungsbetriebe, Facility Management.', cta: 'Mehr erfahren' },
  fr: { title: 'Secteurs & Solutions', subtitle: 'Sélectionnez votre secteur pour découvrir comment GeoTapp peut vous aider.', installatori: 'Installateurs', installatori_desc: 'Électriciens, plombiers, maintenance.', sicurezza: 'Sécurité', sicurezza_desc: 'Agents de sécurité, stewards, événements.', pulizie: 'Nettoyage', pulizie_desc: 'Entreprises de nettoyage, facility management.', cta: 'En savoir plus' },
  es: { title: 'Sectores & Soluciones', subtitle: 'Selecciona tu sector para descubrir cómo GeoTapp puede ayudarte.', installatori: 'Instaladores', installatori_desc: 'Electricistas, fontaneros, mantenimiento.', sicurezza: 'Seguridad', sicurezza_desc: 'Vigilantes, stewards, eventos.', pulizie: 'Limpieza', pulizie_desc: 'Empresas de limpieza, facility management.', cta: 'Saber más' },
  pt: { title: 'Setores & Soluções', subtitle: 'Selecione o seu setor para descobrir como o GeoTapp pode ajudá-lo.', installatori: 'Instaladores', installatori_desc: 'Electricistas, canalizadores, manutenção.', sicurezza: 'Segurança', sicurezza_desc: 'Vigilantes, stewards, eventos.', pulizie: 'Limpeza', pulizie_desc: 'Empresas de limpeza, facility management.', cta: 'Saber mais' },
  nl: { title: 'Sectoren & Oplossingen', subtitle: 'Selecteer uw sector om te ontdekken hoe GeoTapp u kan helpen.', installatori: 'Installateurs', installatori_desc: 'Elektriciens, loodgieters, onderhoud.', sicurezza: 'Beveiliging', sicurezza_desc: 'Beveiligers, stewards, evenementen.', pulizie: 'Schoonmaak', pulizie_desc: 'Schoonmaakbedrijven, facility management.', cta: 'Meer weten' },
  sv: { title: 'Branscher & Lösningar', subtitle: 'Välj din bransch för att se hur GeoTapp kan hjälpa dig.', installatori: 'Installatörer', installatori_desc: 'Elektriker, rörmokare, underhåll.', sicurezza: 'Säkerhet', sicurezza_desc: 'Vakter, stewards, evenemang.', pulizie: 'Städning', pulizie_desc: 'Städföretag, facility management.', cta: 'Läs mer' },
  da: { title: 'Brancher & Løsninger', subtitle: 'Vælg din branche for at se, hvordan GeoTapp kan hjælpe dig.', installatori: 'Installatører', installatori_desc: 'Elektrikere, VVS-montører, vedligeholdelse.', sicurezza: 'Sikkerhed', sicurezza_desc: 'Vagter, stewards, arrangementer.', pulizie: 'Rengøring', pulizie_desc: 'Rengøringsvirksomheder, facility management.', cta: 'Læs mere' },
  nb: { title: 'Bransjer & Løsninger', subtitle: 'Velg din bransje for å se hvordan GeoTapp kan hjelpe deg.', installatori: 'Installatører', installatori_desc: 'Elektrikere, rørleggere, vedlikehold.', sicurezza: 'Sikkerhet', sicurezza_desc: 'Vakter, stewards, arrangementer.', pulizie: 'Renhold', pulizie_desc: 'Renholdsbedrifter, facility management.', cta: 'Les mer' },
  ru: { title: 'Отрасли и решения', subtitle: 'Выберите свою отрасль, чтобы узнать, как GeoTapp может вам помочь.', installatori: 'Монтажники', installatori_desc: 'Электромонтажники, сантехники, обслуживание.', sicurezza: 'Охрана', sicurezza_desc: 'Охранники, стюарды, мероприятия.', pulizie: 'Клининг', pulizie_desc: 'Клининговые компании, управление объектами.', cta: 'Подробнее' },
};

export default function SettoriPage({ locale }: Props) {
  const l = locale ?? DEFAULT_LOCALE;
  const copy = HUB_COPY[l] ?? HUB_COPY['en'];

  return (
    <div className="bg-slate-50 min-h-screen py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">{copy.title}</h1>
        <p className="text-xl text-slate-600 mb-12">{copy.subtitle}</p>

        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href={localizePath('/settori/installatori', l)}
            className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-amber-200 transition-all"
          >
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Hammer size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
              {copy.installatori}
            </h2>
            <p className="text-slate-500 mb-4">{copy.installatori_desc}</p>
            <div className="flex items-center text-amber-600 font-bold text-sm">
              {copy.cta}{' '}
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href={localizePath('/settori/sicurezza', l)}
            className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-indigo-200 transition-all"
          >
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
              {copy.sicurezza}
            </h2>
            <p className="text-slate-500 mb-4">{copy.sicurezza_desc}</p>
            <div className="flex items-center text-indigo-600 font-bold text-sm">
              {copy.cta}{' '}
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href={localizePath('/settori/pulizie', l)}
            className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-cyan-200 transition-all"
          >
            <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Sparkles size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
              {copy.pulizie}
            </h2>
            <p className="text-slate-500 mb-4">{copy.pulizie_desc}</p>
            <div className="flex items-center text-cyan-600 font-bold text-sm">
              {copy.cta}{' '}
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
