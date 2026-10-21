'use client';

import { FileCheck } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { infLocale, type InfLocale } from '@/lib/risorse/gps-lavoratori-ue/informativa';
import {
  buildChecklistPrintHtml,
  type ChecklistContatto,
  type ChecklistInput,
  type ChecklistVoce,
} from '@/lib/risorse/gps-lavoratori-ue/checklist-pdf';

interface Copy {
  title: string; // usa {paese}
  desc: string;
  download: string;
  docTitle: string; // usa {paese}
  intro: string;
  verifiedOn: string;
  disclaimer: string;
  footer: string;
}

/**
 * Microcopy del blocco e del foglio, nelle undici lingue del generatore. Le locale
 * del sito senza testo proprio (en-us/gb/ie/ca/au) ripiegano su 'en' via [infLocale].
 * Il Paese sta sempre davanti a due punti e mai dentro una preposizione ("in {paese}"):
 * i nomi dei Paesi cambiano articolo da lingua a lingua (en/au/aux, in/nella/negli).
 */
const COPY: Record<InfLocale, Copy> = {
  it: {
    title: 'Scarica la checklist GPS per {paese}, da stampare e spuntare',
    desc: 'Le stesse voci di questa scheda su un solo foglio con le caselle da spuntare: cosa serve prima di geolocalizzare i dipendenti, la procedura passo per passo e a chi rivolgersi, con le fonti.',
    download: 'Scarica la checklist (PDF)',
    docTitle: '{paese}: checklist per geolocalizzare i dipendenti',
    intro: 'Cosa serve prima di attivare il GPS sui dipendenti. Spunta ogni voce man mano che la completi e conserva il foglio insieme alla documentazione.',
    verifiedOn: 'Scheda verificata il',
    disclaimer: 'Sintesi informativa basata su fonti pubbliche, non è consulenza legale. Fai verificare il tuo caso dal consulente del lavoro o da un professionista privacy.',
    footer: 'Checklist fornita gratuitamente da GeoTapp',
  },
  en: {
    title: 'Download the GPS compliance checklist for {paese}, to print and tick off',
    desc: 'The same items as this page on one sheet with tick boxes: what you need before tracking employees by GPS, the procedure step by step and who to contact, with sources.',
    download: 'Download the checklist (PDF)',
    docTitle: '{paese}: checklist for tracking employees by GPS',
    intro: 'What you need before switching on GPS tracking for employees. Tick each item as you complete it and keep the sheet with your records.',
    verifiedOn: 'Country card verified on',
    disclaimer: 'Informational summary based on public sources, not legal advice. Have your own case checked by an employment or data protection adviser.',
    footer: 'Checklist provided free of charge by GeoTapp',
  },
  de: {
    title: 'Checkliste zur GPS-Ortung für {paese} herunterladen, zum Ausdrucken und Abhaken',
    desc: 'Dieselben Punkte wie auf dieser Seite auf einem Blatt mit Kästchen zum Abhaken: was Sie vor der GPS-Ortung von Mitarbeitern brauchen, das Verfahren Schritt für Schritt und wer zuständig ist, mit Quellen.',
    download: 'Checkliste herunterladen (PDF)',
    docTitle: '{paese}: Checkliste zur GPS-Ortung von Mitarbeitern',
    intro: 'Was Sie brauchen, bevor Sie die GPS-Ortung für Mitarbeiter einschalten. Haken Sie jeden Punkt ab, sobald er erledigt ist, und legen Sie das Blatt zu Ihren Unterlagen.',
    verifiedOn: 'Länderblatt geprüft am',
    disclaimer: 'Informative Zusammenfassung auf Basis öffentlicher Quellen, keine Rechtsberatung. Lassen Sie Ihren Fall von Ihrer arbeitsrechtlichen oder datenschutzrechtlichen Beratung prüfen.',
    footer: 'Checkliste kostenlos bereitgestellt von GeoTapp',
  },
  fr: {
    title: 'Téléchargez la checklist de géolocalisation pour {paese}, à imprimer et à cocher',
    desc: 'Les mêmes points que cette page sur une seule feuille avec des cases à cocher : ce qu’il vous faut avant de géolocaliser vos salariés, la procédure étape par étape et qui contacter, avec les sources.',
    download: 'Télécharger la checklist (PDF)',
    docTitle: '{paese} : checklist de géolocalisation des salariés',
    intro: 'Ce qu’il vous faut avant d’activer la géolocalisation des salariés. Cochez chaque point au fur et à mesure et conservez la feuille avec votre documentation.',
    verifiedOn: 'Fiche pays vérifiée le',
    disclaimer: 'Synthèse informative fondée sur des sources publiques, ne constitue pas un conseil juridique. Faites vérifier votre situation par votre conseil en droit du travail ou en protection des données.',
    footer: 'Checklist fournie gratuitement par GeoTapp',
  },
  es: {
    title: 'Descarga la lista de verificación de geolocalización para {paese}, para imprimir y marcar',
    desc: 'Los mismos puntos de esta página en una sola hoja con casillas para marcar: lo que necesitas antes de geolocalizar a tus empleados, el procedimiento paso a paso y a quién dirigirte, con las fuentes.',
    download: 'Descargar la checklist (PDF)',
    docTitle: '{paese}: lista de verificación para geolocalizar a los empleados',
    intro: 'Lo que necesitas antes de activar la geolocalización de los empleados. Marca cada punto a medida que lo completes y guarda la hoja con tu documentación.',
    verifiedOn: 'Ficha verificada el',
    disclaimer: 'Resumen informativo basado en fuentes públicas, no es asesoramiento jurídico. Haz revisar tu caso por tu asesor laboral o de protección de datos.',
    footer: 'Checklist facilitada gratuitamente por GeoTapp',
  },
  nl: {
    title: 'Download de checklist voor GPS-volgen van werknemers voor {paese}, om te printen en af te vinken',
    desc: 'Dezelfde punten als op deze pagina op één blad met vakjes om af te vinken: wat u nodig heeft voordat u werknemers per GPS volgt, de procedure stap voor stap en bij wie u terecht kunt, met bronnen.',
    download: 'Download de checklist (PDF)',
    docTitle: '{paese}: checklist GPS-volgen van werknemers',
    intro: 'Wat u nodig heeft voordat u GPS-volgen voor werknemers inschakelt. Vink elk punt af zodra het klaar is en bewaar het blad bij uw documentatie.',
    verifiedOn: 'Landenblad gecontroleerd op',
    disclaimer: 'Informatieve samenvatting op basis van openbare bronnen, geen juridisch advies. Laat uw eigen situatie controleren door uw arbeidsrecht- of privacyadviseur.',
    footer: 'Checklist gratis aangeboden door GeoTapp',
  },
  pt: {
    title: 'Descarrega a checklist de geolocalização para {paese}, para imprimir e assinalar',
    desc: 'Os mesmos pontos desta página numa só folha com caixas para assinalar: o que precisas antes de geolocalizar os trabalhadores, o procedimento passo a passo e a quem te dirigires, com as fontes.',
    download: 'Descarregar a checklist (PDF)',
    docTitle: '{paese}: checklist de geolocalização dos trabalhadores',
    intro: 'O que precisas antes de ativar a geolocalização dos trabalhadores. Assinala cada ponto à medida que o concluis e guarda a folha com a tua documentação.',
    verifiedOn: 'Ficha verificada em',
    disclaimer: 'Resumo informativo com base em fontes públicas, não é aconselhamento jurídico. Pede ao teu consultor laboral ou de proteção de dados que reveja o teu caso.',
    footer: 'Checklist disponibilizada gratuitamente pela GeoTapp',
  },
  da: {
    title: 'Download tjeklisten til GPS-sporing af medarbejdere for {paese}, til at printe og afkrydse',
    desc: 'De samme punkter som på denne side på ét ark med felter til afkrydsning: hvad du skal have på plads, før du GPS-sporer medarbejdere, proceduren trin for trin og hvem du skal kontakte, med kilder.',
    download: 'Download tjeklisten (PDF)',
    docTitle: '{paese}: tjekliste til GPS-sporing af medarbejdere',
    intro: 'Hvad du skal have på plads, før du slår GPS-sporing af medarbejdere til. Sæt kryds ved hvert punkt, når det er gjort, og opbevar arket sammen med din dokumentation.',
    verifiedOn: 'Landeoversigt kontrolleret den',
    disclaimer: 'Informativt resumé baseret på offentlige kilder, ikke juridisk rådgivning. Få din egen situation vurderet af din arbejdsrets- eller databeskyttelsesrådgiver.',
    footer: 'Tjekliste stillet gratis til rådighed af GeoTapp',
  },
  sv: {
    title: 'Ladda ner checklistan för GPS-spårning av anställda för {paese}, att skriva ut och bocka av',
    desc: 'Samma punkter som på den här sidan på ett blad med rutor att bocka av: vad du behöver innan du GPS-spårar anställda, rutinen steg för steg och vem du ska kontakta, med källor.',
    download: 'Ladda ner checklistan (PDF)',
    docTitle: '{paese}: checklista för GPS-spårning av anställda',
    intro: 'Vad du behöver innan du slår på GPS-spårning av anställda. Bocka av varje punkt när den är klar och spara bladet tillsammans med din dokumentation.',
    verifiedOn: 'Landsblad kontrollerat den',
    disclaimer: 'Informativ sammanfattning baserad på offentliga källor, inte juridisk rådgivning. Låt din egen situation granskas av din arbetsrätts- eller dataskyddsrådgivare.',
    footer: 'Checklista kostnadsfritt från GeoTapp',
  },
  nb: {
    title: 'Last ned sjekklisten for GPS-sporing av ansatte for {paese}, til å skrive ut og krysse av',
    desc: 'De samme punktene som på denne siden på ett ark med ruter å krysse av: hva du trenger før du GPS-sporer ansatte, fremgangsmåten steg for steg og hvem du kan kontakte, med kilder.',
    download: 'Last ned sjekklisten (PDF)',
    docTitle: '{paese}: sjekkliste for GPS-sporing av ansatte',
    intro: 'Hva du trenger før du slår på GPS-sporing av ansatte. Kryss av hvert punkt når det er gjort, og ta vare på arket sammen med dokumentasjonen din.',
    verifiedOn: 'Landsiden kontrollert',
    disclaimer: 'Informativt sammendrag basert på offentlige kilder, ikke juridisk rådgivning. La din egen situasjon vurderes av din arbeidsrett- eller personvernrådgiver.',
    footer: 'Sjekkliste levert gratis av GeoTapp',
  },
  ru: {
    title: 'Скачайте чек-лист по GPS-отслеживанию сотрудников для {paese}, чтобы распечатать и отмечать',
    desc: 'Те же пункты, что и на этой странице, на одном листе с полями для отметок: что нужно до начала GPS-отслеживания сотрудников, порядок действий по шагам и куда обращаться, с источниками.',
    download: 'Скачать чек-лист (PDF)',
    docTitle: '{paese}: чек-лист по GPS-отслеживанию сотрудников',
    intro: 'Что нужно до включения GPS-отслеживания сотрудников. Отмечайте каждый пункт по мере выполнения и храните лист вместе с документами.',
    verifiedOn: 'Карточка страны проверена',
    disclaimer: 'Информационная сводка на основе открытых источников, не юридическая консультация. Проверьте свой случай у юриста по трудовому праву или по защите данных.',
    footer: 'Чек-лист бесплатно предоставлен GeoTapp',
  },
};

export type ChecklistData = {
  paese: string;
  autorita: string;
  verificatoIl: string;
  sezioneVoci: string;
  sezioneProcedura: string;
  sezioneContatti: string;
  voci: ChecklistVoce[];
  passi: string[];
  contatti: ChecklistContatto[];
};

interface Props {
  locale: string;
  countryISO: string;
  data: ChecklistData;
}

/**
 * Blocco della scheda-paese: la checklist del Paese su un foglio da stampare, gratuita
 * e senza cancello email. Stessa tecnica del fac-simile (HTML che si auto-stampa).
 */
export default function ChecklistDownload({ locale, countryISO, data }: Props) {
  const inf = infLocale(locale);
  const t = COPY[inf] ?? COPY.en;

  function download() {
    const input: ChecklistInput = {
      locale: inf,
      titolo: t.docTitle.replace('{paese}', data.paese),
      intro: t.intro,
      paese: data.paese,
      autorita: data.autorita,
      verificatoIl: data.verificatoIl,
      verificatoLabel: t.verifiedOn,
      sezioneVoci: data.sezioneVoci,
      sezioneProcedura: data.sezioneProcedura,
      sezioneContatti: data.sezioneContatti,
      voci: data.voci,
      passi: data.passi,
      contatti: data.contatti,
      disclaimer: t.disclaimer,
      footer: t.footer,
    };
    trackEvent('resource_download', { risorsa: 'checklist-gps', locale, paese: countryISO });
    // Un indirizzo temporaneo invece di document.write (deprecato). Il foglio si
    // auto-stampa all'apertura; l'indirizzo si libera dopo un minuto.
    const url = URL.createObjectURL(new Blob([buildChecklistPrintHtml(input)], { type: 'text/html;charset=utf-8' }));
    window.open(url, '_blank');
    window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
  }

  return (
    <div className="my-4 border border-[rgba(14,14,12,.18)] bg-white p-8 text-center">
      <p className="text-lg font-bold text-[#0E0E0C]">{t.title.replace('{paese}', data.paese)}</p>
      <p className="text-sm text-[#4F5A49] mt-2 max-w-md mx-auto">{t.desc}</p>
      <button
        onClick={download}
        className="b1"
        style={{ marginTop: 22, display: 'inline-flex', alignItems: 'center', gap: 8, border: 0, cursor: 'pointer', background: 'var(--sky)', color: '#fff' }}
      >
        <FileCheck size={18} /> {t.download}
      </button>
    </div>
  );
}
