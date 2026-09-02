'use client';

/**
 * Invito al sondaggio pubblico "Prova del lavoro", dentro il corpo dell'articolo.
 *
 * Perche' esiste: fino al 02/09/2026 il sondaggio era promosso SOLO da un modale
 * che usciva sul blog una volta per browser, e per giunta spento a vita da un flag
 * condiviso col modale newsletter. Risultato misurato: 9 visualizzazioni della
 * pagina in 60 giorni. Un blocco fisso dentro l'articolo non si puo' chiudere e
 * non dipende da localStorage, quindi lo vede anche chi torna.
 */

import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

type Copy = { kicker: string; title: string; body: string; cta: string };

const COPY: Record<string, Copy> = {
  it: {
    kicker: 'Osservatorio prova del lavoro',
    title: 'Ti hanno mai contestato un lavoro che avevi fatto?',
    body: 'Stiamo raccogliendo cosa succede davvero sul campo, in tutta Europa. Due minuti, anonimo, nessun dato obbligatorio.',
    cta: 'Dì la tua',
  },
  en: {
    kicker: 'Proof-of-work observatory',
    title: 'Ever had a job disputed after you had done it?',
    body: 'We are collecting what actually happens in the field, across Europe. Two minutes, anonymous, nothing required.',
    cta: 'Have your say',
  },
  de: {
    kicker: 'Observatorium Arbeitsnachweis',
    title: 'Wurde Ihnen schon einmal eine erledigte Arbeit bestritten?',
    body: 'Wir sammeln, was im Außendienst wirklich passiert, europaweit. Zwei Minuten, anonym, keine Pflichtangaben.',
    cta: 'Mitreden',
  },
  fr: {
    kicker: 'Observatoire de la preuve du travail',
    title: 'On vous a déjà contesté un travail que vous aviez fait ?',
    body: 'Nous recueillons ce qui se passe vraiment sur le terrain, partout en Europe. Deux minutes, anonyme, rien d’obligatoire.',
    cta: 'Donnez votre avis',
  },
  nl: {
    kicker: 'Observatorium werkbewijs',
    title: 'Is een klus die je had gedaan ooit betwist?',
    body: 'We verzamelen wat er echt gebeurt op locatie, in heel Europa. Twee minuten, anoniem, niets verplicht.',
    cta: 'Zeg wat je vindt',
  },
  es: {
    kicker: 'Observatorio de la prueba del trabajo',
    title: '¿Te han discutido alguna vez un trabajo que ya habías hecho?',
    body: 'Estamos recogiendo lo que pasa de verdad en el campo, en toda Europa. Dos minutos, anónimo, nada obligatorio.',
    cta: 'Da tu opinión',
  },
  pt: {
    kicker: 'Observatório da prova do trabalho',
    title: 'Já te contestaram um trabalho que tinhas feito?',
    body: 'Estamos a reunir o que acontece mesmo no terreno, em toda a Europa. Dois minutos, anónimo, nada obrigatório.',
    cta: 'Diz o que pensas',
  },
  da: {
    kicker: 'Observatorium for arbejdsbevis',
    title: 'Har nogen bestridt en opgave, du havde udført?',
    body: 'Vi samler det, der faktisk sker i marken, i hele Europa. To minutter, anonymt, intet er påkrævet.',
    cta: 'Sig din mening',
  },
  sv: {
    kicker: 'Observatorium för arbetsbevis',
    title: 'Har någon ifrågasatt ett jobb du redan utfört?',
    body: 'Vi samlar in vad som faktiskt händer i fält, i hela Europa. Två minuter, anonymt, inget obligatoriskt.',
    cta: 'Säg din mening',
  },
  nb: {
    kicker: 'Observatorium for arbeidsbevis',
    title: 'Har noen bestridt en jobb du allerede hadde gjort?',
    body: 'Vi samler inn hva som faktisk skjer i felt, i hele Europa. To minutter, anonymt, ingenting er obligatorisk.',
    cta: 'Si din mening',
  },
  ru: {
    kicker: 'Обсерватория доказательства работы',
    title: 'Вам когда-нибудь оспаривали уже выполненную работу?',
    body: 'Мы собираем то, что на самом деле происходит на выездах, по всей Европе. Две минуты, анонимно, обязательных полей нет.',
    cta: 'Высказаться',
  },
};

function pick(locale: string): Copy {
  const lc = (locale || 'en').toLowerCase();
  return COPY[lc] ?? COPY[lc.split('-')[0]] ?? COPY.en;
}

export default function SurveyInline({ locale }: { locale: string }) {
  const c = pick(locale);
  const href = `/${locale}/survey/`;

  return (
    <aside
      className="my-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7"
      aria-label={c.kicker}
    >
      <p className="text-xs font-bold uppercase tracking-wider text-[#2DA4E4]">{c.kicker}</p>
      <p className="mt-2 text-lg font-extrabold leading-snug text-slate-900 sm:text-xl">{c.title}</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
      <Link
        href={href}
        onClick={() => trackEvent('survey_cta_click', { locale, placement: 'article_inline' })}
        className="mt-5 inline-block rounded-full bg-[#8FC436] px-6 py-3 text-sm font-bold text-white no-underline transition hover:brightness-105"
      >
        {c.cta}
      </Link>
    </aside>
  );
}
