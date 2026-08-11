import Link from 'next/link';
import { DEFAULT_LOCALE, type AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';
import { getDictionary } from '@/lib/i18n/dictionaries';
import LNastro from '@/components/LNastro';

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
    elettricisti: string;
    elettricisti_desc: string;
    idraulici: string;
    idraulici_desc: string;
    termoidraulici_desc: string;
    edilizia_desc: string;
    manutenzione_desc: string;
    impianti_desc: string;
    cta: string;
  }
> = {
  it: { title: 'Il tuo settore. La tua prova.', subtitle: 'Ogni intervento merita documentazione che regge in caso di contestazione.', installatori: 'Installatori', installatori_desc: 'Dimostra ogni intervento completato.', sicurezza: 'Sicurezza', sicurezza_desc: 'Prova presenze e ronde al cliente.', pulizie: 'Pulizie', pulizie_desc: 'Certifica ogni passaggio effettuato.', elettricisti: 'Elettricisti', elettricisti_desc: 'Documenta ogni impianto elettrico con GPS e foto.', idraulici: 'Idraulici', idraulici_desc: 'Prova ogni intervento idraulico con rapportini GPS.', termoidraulici_desc: 'Prova ogni intervento su caldaie e impianti termici.', edilizia_desc: 'Documenta ore e presenze in cantiere.', manutenzione_desc: 'Prova ogni chiamata e ogni sopralluogo.', impianti_desc: 'Certifica collaudi e messa in servizio.', cta: 'Scopri come funziona' },
  en: { title: 'Sectors & Solutions', subtitle: 'Select your sector to discover how GeoTapp can help you.', installatori: 'Installers', installatori_desc: 'Electricians, plumbers, maintenance.', sicurezza: 'Security', sicurezza_desc: 'Guards, stewards, events.', pulizie: 'Cleaning', pulizie_desc: 'Cleaning companies, facility management.', elettricisti: 'Electricians', elettricisti_desc: 'Document every electrical installation with GPS and photos.', idraulici: 'Plumbers', idraulici_desc: 'Prove every plumbing job with GPS reports.', termoidraulici_desc: 'Prove every boiler and heating system job.', edilizia_desc: 'Document hours and attendance on site.', manutenzione_desc: 'Prove every call-out and every site visit.', impianti_desc: 'Certify testing and commissioning.', cta: 'Find out more' },
  de: { title: 'Branchen & Lösungen', subtitle: 'Wählen Sie Ihre Branche, um zu sehen, wie GeoTapp helfen kann.', installatori: 'Installateure', installatori_desc: 'Elektriker, Sanitärinstallateure, Wartung.', sicurezza: 'Sicherheitsdienst', sicurezza_desc: 'Bewachung, Stewards, Veranstaltungen.', pulizie: 'Gebäudereinigung', pulizie_desc: 'Reinigungsbetriebe, Facility Management.', elettricisti: 'Elektriker', elettricisti_desc: 'Jede Elektroinstallation mit GPS und Fotos dokumentieren.', idraulici: 'Klempner', idraulici_desc: 'Jeden Sanitäreinsatz mit GPS-Berichten nachweisen.', termoidraulici_desc: 'Jeden Einsatz an Heizung und Therme nachweisen.', edilizia_desc: 'Stunden und Anwesenheit auf der Baustelle dokumentieren.', manutenzione_desc: 'Jeden Einsatz und jede Begehung nachweisen.', impianti_desc: 'Prüfungen und Inbetriebnahme belegen.', cta: 'Mehr erfahren' },
  fr: { title: 'Secteurs & Solutions', subtitle: 'Sélectionnez votre secteur pour découvrir comment GeoTapp peut vous aider.', installatori: 'Installateurs', installatori_desc: 'Électriciens, plombiers, maintenance.', sicurezza: 'Sécurité', sicurezza_desc: 'Agents de sécurité, stewards, événements.', pulizie: 'Nettoyage', pulizie_desc: 'Entreprises de nettoyage, facility management.', elettricisti: 'Électriciens', elettricisti_desc: 'Documentez chaque installation électrique avec GPS et photos.', idraulici: 'Plombiers', idraulici_desc: 'Prouvez chaque intervention plomberie avec des rapports GPS.', termoidraulici_desc: 'Prouvez chaque intervention sur chaudières et chauffage.', edilizia_desc: 'Documentez heures et présences sur le chantier.', manutenzione_desc: 'Prouvez chaque intervention et chaque visite.', impianti_desc: 'Certifiez essais et mise en service.', cta: 'En savoir plus' },
  es: { title: 'Sectores & Soluciones', subtitle: 'Selecciona tu sector para descubrir cómo GeoTapp puede ayudarte.', installatori: 'Instaladores', installatori_desc: 'Electricistas, fontaneros, mantenimiento.', sicurezza: 'Seguridad', sicurezza_desc: 'Vigilantes, stewards, eventos.', pulizie: 'Limpieza', pulizie_desc: 'Empresas de limpieza, facility management.', elettricisti: 'Electricistas', elettricisti_desc: 'Documenta cada instalación eléctrica con GPS y fotos.', idraulici: 'Fontaneros', idraulici_desc: 'Prueba cada intervención de fontanería con informes GPS.', termoidraulici_desc: 'Prueba cada intervención en calderas y calefacción.', edilizia_desc: 'Documenta horas y presencias en obra.', manutenzione_desc: 'Prueba cada aviso y cada visita técnica.', impianti_desc: 'Certifica pruebas y puesta en marcha.', cta: 'Saber más' },
  pt: { title: 'Setores & Soluções', subtitle: 'Selecione o seu setor para descobrir como o GeoTapp pode ajudá-lo.', installatori: 'Instaladores', installatori_desc: 'Electricistas, canalizadores, manutenção.', sicurezza: 'Segurança', sicurezza_desc: 'Vigilantes, stewards, eventos.', pulizie: 'Limpeza', pulizie_desc: 'Empresas de limpeza, facility management.', elettricisti: 'Eletricistas', elettricisti_desc: 'Documente cada instalação elétrica com GPS e fotos.', idraulici: 'Canalizadores', idraulici_desc: 'Prove cada intervenção de canalização com relatórios GPS.', termoidraulici_desc: 'Prove cada intervenção em caldeiras e aquecimento.', edilizia_desc: 'Documente horas e presenças em obra.', manutenzione_desc: 'Prove cada chamada e cada visita técnica.', impianti_desc: 'Certifique ensaios e colocação em serviço.', cta: 'Saber mais' },
  nl: { title: 'Sectoren & Oplossingen', subtitle: 'Selecteer uw sector om te ontdekken hoe GeoTapp u kan helpen.', installatori: 'Installateurs', installatori_desc: 'Elektriciens, loodgieters, onderhoud.', sicurezza: 'Beveiliging', sicurezza_desc: 'Beveiligers, stewards, evenementen.', pulizie: 'Schoonmaak', pulizie_desc: 'Schoonmaakbedrijven, facility management.', elettricisti: 'Elektriciens', elettricisti_desc: 'Documenteer elke elektroinstallatie met GPS en foto\'s.', idraulici: 'Loodgieters', idraulici_desc: 'Bewijs elke sanitairklus met GPS-werkbonnen.', termoidraulici_desc: 'Bewijs elke klus aan ketels en verwarming.', edilizia_desc: 'Documenteer uren en aanwezigheid op de bouwplaats.', manutenzione_desc: 'Bewijs elke storingsoproep en elk bezoek.', impianti_desc: 'Certificeer testen en inbedrijfstelling.', cta: 'Meer weten' },
  sv: { title: 'Branscher & Lösningar', subtitle: 'Välj din bransch för att se hur GeoTapp kan hjälpa dig.', installatori: 'Installatörer', installatori_desc: 'Elektriker, rörmokare, underhåll.', sicurezza: 'Säkerhet', sicurezza_desc: 'Vakter, stewards, evenemang.', pulizie: 'Städning', pulizie_desc: 'Städföretag, facility management.', elettricisti: 'Elektriker', elettricisti_desc: 'Dokumentera varje elinstallation med GPS och foton.', idraulici: 'Rörmokare', idraulici_desc: 'Bevisa varje VVS-jobb med GPS-arbetsrapporter.', termoidraulici_desc: 'Bevisa varje jobb på pannor och värmesystem.', edilizia_desc: 'Dokumentera timmar och närvaro på byggarbetsplatsen.', manutenzione_desc: 'Bevisa varje utryckning och varje besök.', impianti_desc: 'Intyga provning och driftsättning.', cta: 'Läs mer' },
  da: { title: 'Brancher & Løsninger', subtitle: 'Vælg din branche for at se, hvordan GeoTapp kan hjælpe dig.', installatori: 'Installatører', installatori_desc: 'Elektrikere, VVS-montører, vedligeholdelse.', sicurezza: 'Sikkerhed', sicurezza_desc: 'Vagter, stewards, arrangementer.', pulizie: 'Rengøring', pulizie_desc: 'Rengøringsvirksomheder, facility management.', elettricisti: 'Elektrikere', elettricisti_desc: 'Dokumentér hver elinstallation med GPS og billeder.', idraulici: 'VVS-installatører', idraulici_desc: 'Bevis hvert VVS-arbejde med GPS-arbejdsrapporter.', termoidraulici_desc: 'Bevis hvert arbejde på kedler og varmeanlæg.', edilizia_desc: 'Dokumentér timer og fremmøde på byggepladsen.', manutenzione_desc: 'Bevis hvert udkald og hvert besøg.', impianti_desc: 'Dokumentér afprøvning og idriftsættelse.', cta: 'Læs mere' },
  nb: { title: 'Bransjer & Løsninger', subtitle: 'Velg din bransje for å se hvordan GeoTapp kan hjelpe deg.', installatori: 'Installatører', installatori_desc: 'Elektrikere, rørleggere, vedlikehold.', sicurezza: 'Sikkerhet', sicurezza_desc: 'Vakter, stewards, arrangementer.', pulizie: 'Renhold', pulizie_desc: 'Renholdsbedrifter, facility management.', elettricisti: 'Elektrikere', elettricisti_desc: 'Dokumentér hver el-installasjon med GPS og bilder.', idraulici: 'Rørleggere', idraulici_desc: 'Bevis hvert rørleggerarbeid med GPS-arbeidsrapporter.', termoidraulici_desc: 'Bevis hvert oppdrag på kjeler og varmeanlegg.', edilizia_desc: 'Dokumentér timer og oppmøte på byggeplassen.', manutenzione_desc: 'Bevis hver utrykning og hvert besøk.', impianti_desc: 'Dokumentér testing og idriftsettelse.', cta: 'Les mer' },
  ru: { title: 'Отрасли и решения', subtitle: 'Выберите свою отрасль, чтобы узнать, как GeoTapp может вам помочь.', installatori: 'Монтажники', installatori_desc: 'Электромонтажники, сантехники, обслуживание.', sicurezza: 'Охрана', sicurezza_desc: 'Охранники, стюарды, мероприятия.', pulizie: 'Клининг', pulizie_desc: 'Клининговые компании, управление объектами.', elettricisti: 'Электрики', elettricisti_desc: 'Документируйте каждый электромонтаж с GPS и фото.', idraulici: 'Сантехники', idraulici_desc: 'Доказывайте каждую сантехническую работу с GPS-отчётами.', termoidraulici_desc: 'Доказывайте каждую работу по котлам и отоплению.', edilizia_desc: 'Документируйте часы и присутствие на стройплощадке.', manutenzione_desc: 'Доказывайте каждый вызов и каждый выезд.', impianti_desc: 'Подтверждайте испытания и пусконаладку.', cta: 'Подробнее' },
};

// Stesse foto della griglia settori della home (HomeClient.tsx SETTORI_IMGS):
// solo bg1/bg2/bg3 disponibili, riusate con object-position diversa per varietà.
const CARD_IMG: Record<string, { img: string; pos: string }> = {
  installatori: { img: '/bg1.webp', pos: 'center 42%' },
  pulizie: { img: '/bg2.webp', pos: 'center 38%' },
  sicurezza: { img: '/bg3.webp', pos: 'center 40%' },
  elettricisti: { img: '/settore-elettricisti.webp', pos: 'center 40%' },
  idraulici: { img: '/settore-idraulici.webp', pos: 'center 42%' },
  termoidraulici: { img: '/settore-termoidraulici.webp', pos: 'center 42%' },
  edilizia: { img: '/bg2.webp', pos: '30% 55%' },
  manutenzione: { img: '/bg3.webp', pos: '70% 50%' },
  impianti: { img: '/bg1.webp', pos: '75% 60%' },
};

// Divide un titolo reale "Frase uno. Frase due." nelle due righe dell'h1
// della direzione L (seconda riga in corsivo). Se il titolo non ha questa
// forma (la maggior parte delle lingue), resta su una riga sola: niente
// copy nuovo inventato per forzare lo spezzato.
function splitTitle(title: string): [string, string | null] {
  const idx = title.indexOf('. ');
  if (idx === -1 || idx === title.length - 2) return [title, null];
  return [title.slice(0, idx + 1), title.slice(idx + 2)];
}

export default function SettoriPage({ locale }: Props) {
  const l = locale ?? DEFAULT_LOCALE;
  const copy = HUB_COPY[l] ?? HUB_COPY['en'];
  const dict = getDictionary(l) as any;
  const sectorsLabel: string = dict?.navbar?.sectors?.label ?? 'Settori';
  const sectorNames: Record<string, string> = dict?.navbar?.sectors ?? {};
  const [h1a, h1b] = splitTitle(copy.title);

  const cards = [
    { slug: 'installatori', label: copy.installatori, desc: copy.installatori_desc },
    { slug: 'sicurezza', label: copy.sicurezza, desc: copy.sicurezza_desc },
    { slug: 'pulizie', label: copy.pulizie, desc: copy.pulizie_desc },
    { slug: 'elettricisti', label: copy.elettricisti, desc: copy.elettricisti_desc },
    { slug: 'idraulici', label: copy.idraulici, desc: copy.idraulici_desc },
    { slug: 'termoidraulici', label: sectorNames.termoidraulici, desc: copy.termoidraulici_desc },
    { slug: 'edilizia', label: sectorNames.edilizia, desc: copy.edilizia_desc },
    { slug: 'manutenzione', label: sectorNames.manutenzione, desc: copy.manutenzione_desc },
    { slug: 'impianti', label: sectorNames.impianti, desc: copy.impianti_desc },
  ];

  return (
    <div className="lp-l lp-settori">
      <section className="ph">
        <div className="crumb">
          <div className="w">
            <Link href={localizePath('/', l)}>Home</Link> / {sectorsLabel}
          </div>
        </div>
        <div className="w">
          <p className="kk k"><s></s>{sectorsLabel}</p>
          <h1>
            {h1a}
            {h1b && <><br /><em>{h1b}</em></>}
          </h1>
          <p className="lede">{copy.subtitle}</p>
        </div>
      </section>

      <section className="sec">
        <div className="w">
          <div className="setg">
            {cards.map((c, i) => {
              const img = CARD_IMG[c.slug] ?? CARD_IMG.installatori;
              return (
                <Link
                  key={c.slug}
                  className={`r-s d${Math.min(i + 1, 4)}`}
                  href={localizePath(`/settori/${c.slug}`, l)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.img} alt={c.label} loading="lazy" style={{ objectPosition: img.pos }} />
                  <div className="cp">
                    <h3>{c.label}</h3>
                    <p>{c.desc}</p>
                    <span className="go">{copy.cta} &rarr;</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <LNastro />
    </div>
  );
}
