'use client';

import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

interface LeadMagnetCopy {
  title: string;
  desc: string;
  download: string;          // etichetta del bottone di download diretto
  newsletterPrompt: string;  // invito (facoltativo) all'iscrizione
  placeholder: string;
  btn: string;               // bottone iscrizione
  consent: string;
  success: string;           // conferma iscrizione
  error: string;
}

interface LeadMagnetAsset {
  id: string;        // identificatore inviato all'API (LEAD_MAGNET_GROUPS key)
  /**
   * Un PDF per lingua. Non sono traduzioni dello stesso testo: ogni file porta
   * la legge nazionale del Paese dove quella lingua e' la lingua di lavoro
   * (BDSG e Betriebsrat sul tedesco, LOPDGDD sullo spagnolo, e cosi' via),
   * generati da `buildFacsimilePrintHtml` con le schede-paese verificate.
   * Si rigenerano con `scripts/genera-facsimile-pdf.mjs`.
   */
  files: Record<string, string>;
  fileFallback: string;
  copy: Record<string, LeadMagnetCopy>;
}

// Asset disponibili. Aggiungere qui i lead magnet futuri.
export const LEAD_MAGNETS: Record<string, LeadMagnetAsset> = {
  'informativa-gps': {
    id: 'informativa-gps',
    files: {
      it: '/downloads/fac-simile-informativa-gps-dipendenti.pdf',
      en: '/downloads/fac-simile-informativa-gps-en.pdf',
      de: '/downloads/fac-simile-informativa-gps-de.pdf',
      fr: '/downloads/fac-simile-informativa-gps-fr.pdf',
      es: '/downloads/fac-simile-informativa-gps-es.pdf',
      nl: '/downloads/fac-simile-informativa-gps-nl.pdf',
      pt: '/downloads/fac-simile-informativa-gps-pt.pdf',
      da: '/downloads/fac-simile-informativa-gps-da.pdf',
      sv: '/downloads/fac-simile-informativa-gps-sv.pdf',
      nb: '/downloads/fac-simile-informativa-gps-nb.pdf',
      ru: '/downloads/fac-simile-informativa-gps-ru.pdf',
    },
    fileFallback: '/downloads/fac-simile-informativa-gps-en.pdf',
    copy: {
      it: {
        title: 'Scarica il fac-simile dell’informativa GPS per l’Italia',
        desc: 'Modello di informativa privacy per la geolocalizzazione dei dipendenti, conforme all’art. 13 GDPR, con la base giuridica e l’autorità di controllo del Paese. Compila i campi in bianco e fallo verificare dal tuo consulente.',
        download: 'Scarica il fac-simile (PDF)',
        newsletterPrompt: 'Vuoi anche le prossime guide pratiche su GPS e gestione del campo? Lascia l’email (facoltativo).',
        placeholder: 'La tua email',
        btn: 'Iscrivimi',
        consent: 'Niente spam, disiscrizione in un click.',
        success: 'Fatto, sei iscritto. Le prossime guide arrivano da info@geotapp.com.',
        error: 'Qualcosa non ha funzionato. Riprova.',
      },
      en: {
        title: 'Download the free GPS privacy notice template for the United Kingdom',
        desc: 'Employee geolocation privacy notice template, compliant with GDPR Art. 13, including the country’s legal basis and supervisory authority. Fill in the blank fields and have it checked by your advisor.',
        download: 'Download the template (PDF)',
        newsletterPrompt: 'Want the next practical guides on GPS and field-team management too? Leave your email (optional).',
        placeholder: 'Your email',
        btn: 'Subscribe',
        consent: 'No spam, unsubscribe in one click.',
        success: 'Done, you’re subscribed. The next guides come from info@geotapp.com.',
        error: 'Something went wrong. Try again.',
      },
      de: {
        title: 'Kostenlose DSGVO-Vorlage zur GPS-Datenschutzerklärung für Deutschland herunterladen',
        desc: 'Muster einer Datenschutzerklärung zur Standortverfolgung von Mitarbeitern, konform mit Art. 13 DSGVO, mit Rechtsgrundlage und Aufsichtsbehörde des Landes. Leere Felder ausfüllen und von Ihrem Berater prüfen lassen.',
        download: 'Vorlage herunterladen (PDF)',
        newsletterPrompt: 'Möchten Sie auch die nächsten Praxis-Leitfäden zu GPS und Außendienst? E-Mail hinterlassen (optional).',
        placeholder: 'Ihre E-Mail',
        btn: 'Abonnieren',
        consent: 'Kein Spam, Abmeldung mit einem Klick.',
        success: 'Erledigt, Sie sind angemeldet. Die nächsten Leitfäden kommen von info@geotapp.com.',
        error: 'Etwas ist schiefgelaufen. Bitte erneut versuchen.',
      },
      fr: {
        title: 'Téléchargez le modèle gratuit d’information RGPD sur le GPS pour la France',
        desc: 'Modèle d’information sur la géolocalisation des salariés, conforme à l’art. 13 du RGPD, avec la base légale et l’autorité de contrôle du pays. Complétez les champs vides et faites-le vérifier par votre conseiller.',
        download: 'Télécharger le modèle (PDF)',
        newsletterPrompt: 'Vous voulez aussi les prochains guides pratiques sur le GPS et la gestion des équipes terrain ? Laissez votre e-mail (facultatif).',
        placeholder: 'Votre e-mail',
        btn: 'S’inscrire',
        consent: 'Pas de spam, désinscription en un clic.',
        success: 'C’est fait, vous êtes inscrit. Les prochains guides viennent de info@geotapp.com.',
        error: 'Une erreur s’est produite. Réessayez.',
      },
      es: {
        title: 'Descarga la plantilla gratuita de aviso de privacidad GPS para España',
        desc: 'Modelo de aviso de privacidad para la geolocalización de empleados, conforme al art. 13 del RGPD, con la base jurídica y la autoridad de control del país. Rellena los campos en blanco y hazlo revisar por tu asesor.',
        download: 'Descargar la plantilla (PDF)',
        newsletterPrompt: '¿Quieres también las próximas guías prácticas sobre GPS y gestión de equipos de campo? Deja tu correo (opcional).',
        placeholder: 'Tu correo',
        btn: 'Suscribirme',
        consent: 'Sin spam, cancela en un clic.',
        success: 'Listo, estás suscrito. Las próximas guías llegan desde info@geotapp.com.',
        error: 'Algo salió mal. Inténtalo de nuevo.',
      },
      nl: {
        title: 'Download het gratis AVG-model voor de GPS-privacyverklaring voor Nederland',
        desc: 'Model privacyverklaring voor geolocatie van werknemers, conform art. 13 AVG, met de rechtsgrond en toezichthouder van het land. Vul de lege velden in en laat het controleren door je adviseur.',
        download: 'Download het model (PDF)',
        newsletterPrompt: 'Wil je ook de volgende praktische gidsen over GPS en veldteams? Laat je e-mail achter (optioneel).',
        placeholder: 'Je e-mail',
        btn: 'Aanmelden',
        consent: 'Geen spam, uitschrijven in één klik.',
        success: 'Klaar, je bent aangemeld. De volgende gidsen komen van info@geotapp.com.',
        error: 'Er ging iets mis. Probeer opnieuw.',
      },
      pt: {
        title: 'Baixe o modelo gratuito de aviso de privacidade GPS para Portugal',
        desc: 'Modelo de aviso de privacidade para a geolocalização de funcionários, conforme o art. 13 do RGPD, com a base jurídica e a autoridade de controlo do país. Preencha os campos em branco e mande verificar pelo seu consultor.',
        download: 'Baixar o modelo (PDF)',
        newsletterPrompt: 'Também quer os próximos guias práticos sobre GPS e gestão de equipas no terreno? Deixe o seu e-mail (opcional).',
        placeholder: 'O seu e-mail',
        btn: 'Subscrever',
        consent: 'Sem spam, cancele com um clique.',
        success: 'Feito, está subscrito. Os próximos guias chegam de info@geotapp.com.',
        error: 'Algo correu mal. Tente novamente.',
      },
      da: {
        title: 'Hent den gratis GDPR-skabelon til GPS-privatlivspolitik for Danmark',
        desc: 'Skabelon til privatlivspolitik for geolokalisering af medarbejdere, i overensstemmelse med GDPR art. 13, med landets retsgrundlag og tilsynsmyndighed. Udfyld de tomme felter, og få den tjekket af din rådgiver.',
        download: 'Hent skabelonen (PDF)',
        newsletterPrompt: 'Vil du også have de næste praktiske guides om GPS og styring af feltteams? Efterlad din e-mail (valgfrit).',
        placeholder: 'Din e-mail',
        btn: 'Tilmeld',
        consent: 'Ingen spam, afmeld med ét klik.',
        success: 'Færdig, du er tilmeldt. De næste guides kommer fra info@geotapp.com.',
        error: 'Noget gik galt. Prøv igen.',
      },
      sv: {
        title: 'Ladda ner den kostnadsfria GDPR-mallen för GPS-integritetspolicy för Sverige',
        desc: 'Mall för integritetspolicy för geolokalisering av anställda, i enlighet med GDPR art. 13, med landets rättsliga grund och tillsynsmyndighet. Fyll i de tomma fälten och låt din rådgivare granska den.',
        download: 'Ladda ner mallen (PDF)',
        newsletterPrompt: 'Vill du också ha nästa praktiska guider om GPS och hantering av fältteam? Lämna din e-post (valfritt).',
        placeholder: 'Din e-post',
        btn: 'Prenumerera',
        consent: 'Ingen spam, avsluta med ett klick.',
        success: 'Klart, du är anmäld. Nästa guider kommer från info@geotapp.com.',
        error: 'Något gick fel. Försök igen.',
      },
      nb: {
        title: 'Last ned den gratis GDPR-malen for GPS-personvernerklæring for Norge',
        desc: 'Mal for personvernerklæring for geolokalisering av ansatte, i samsvar med GDPR art. 13, med landets rettslige grunnlag og tilsynsmyndighet. Fyll ut de tomme feltene og få den sjekket av rådgiveren din.',
        download: 'Last ned malen (PDF)',
        newsletterPrompt: 'Vil du også ha de neste praktiske guidene om GPS og styring av feltteam? Legg igjen e-posten din (valgfritt).',
        placeholder: 'Din e-post',
        btn: 'Abonner',
        consent: 'Ingen spam, meld deg av med ett klikk.',
        success: 'Ferdig, du er påmeldt. De neste guidene kommer fra info@geotapp.com.',
        error: 'Noe gikk galt. Prøv igjen.',
      },
      ru: {
        title: 'Скачайте бесплатный шаблон уведомления о конфиденциальности GPS (GDPR) для ЕС',
        desc: 'Шаблон уведомления о конфиденциальности для геолокации сотрудников, соответствующий ст. 13 GDPR, с правовым основанием и надзорным органом страны. Заполните пустые поля и проверьте у вашего консультанта.',
        download: 'Скачать шаблон (PDF)',
        newsletterPrompt: 'Хотите получать следующие практические руководства по GPS и управлению полевыми командами? Оставьте email (необязательно).',
        placeholder: 'Ваш email',
        btn: 'Подписаться',
        consent: 'Без спама, отписка в один клик.',
        success: 'Готово, вы подписаны. Следующие руководства придут с info@geotapp.com.',
        error: 'Что-то пошло не так. Попробуйте снова.',
      },
    },
  },
};

/**
 * L'invito che prende il posto dell'iscrizione newsletter (Mike, 02/09/2026).
 * Chi ha appena ricevuto il modello e' nel momento migliore per rispondere:
 * gli abbiamo appena dato qualcosa, e la domanda parla del suo mestiere.
 * Il download NON e' mai condizionato: il PDF parte comunque.
 */
type Ask = { prima: string; dopo: string; cta: string };

const ASK: Record<string, Ask> = {
  it: { prima: 'Prima di andare, una domanda veloce.', dopo: 'Fatto, il modello è tuo. Adesso una domanda a te, che quel lavoro lo fai: due minuti, anonimo.', cta: 'Rispondi al sondaggio' },
  en: { prima: 'Before you go, one quick question.', dopo: 'Done, the template is yours. Now a question for you, who does that work: two minutes, anonymous.', cta: 'Answer the survey' },
  de: { prima: 'Bevor Sie gehen, eine kurze Frage.', dopo: 'Fertig, die Vorlage gehört Ihnen. Jetzt eine Frage an Sie, die diese Arbeit machen: zwei Minuten, anonym.', cta: 'An der Umfrage teilnehmen' },
  fr: { prima: 'Avant de partir, une question rapide.', dopo: 'Voilà, le modèle est à vous. Maintenant une question pour vous, qui faites ce travail : deux minutes, anonyme.', cta: 'Répondre à l’enquête' },
  nl: { prima: 'Voordat je gaat, één korte vraag.', dopo: 'Klaar, het model is van jou. Nu een vraag aan jou, die dat werk doet: twee minuten, anoniem.', cta: 'Doe mee aan de enquête' },
  es: { prima: 'Antes de irte, una pregunta rápida.', dopo: 'Listo, la plantilla es tuya. Ahora una pregunta para ti, que haces ese trabajo: dos minutos, anónimo.', cta: 'Responde a la encuesta' },
  pt: { prima: 'Antes de saíres, uma pergunta rápida.', dopo: 'Pronto, o modelo é teu. Agora uma pergunta para ti, que fazes esse trabalho: dois minutos, anónimo.', cta: 'Responde ao inquérito' },
  da: { prima: 'Inden du går, et hurtigt spørgsmål.', dopo: 'Så er skabelonen din. Nu et spørgsmål til dig, der udfører arbejdet: to minutter, anonymt.', cta: 'Besvar undersøgelsen' },
  sv: { prima: 'Innan du går, en snabb fråga.', dopo: 'Klart, mallen är din. Nu en fråga till dig som utför jobbet: två minuter, anonymt.', cta: 'Svara på undersökningen' },
  nb: { prima: 'Før du går, et raskt spørsmål.', dopo: 'Ferdig, malen er din. Nå et spørsmål til deg som gjør jobben: to minutter, anonymt.', cta: 'Svar på undersøkelsen' },
  ru: { prima: 'Перед уходом один быстрый вопрос.', dopo: 'Готово, шаблон ваш. Теперь вопрос к вам, кто эту работу делает: две минуты, анонимно.', cta: 'Пройти опрос' },
};

function pickAsk(locale: string): Ask {
  const lc = (locale || 'en').toLowerCase();
  return ASK[lc] ?? ASK[lc.split('-')[0]] ?? ASK.en;
}

interface Props {
  magnet: string;   // chiave di LEAD_MAGNETS
  locale: string;
}

export default function LeadMagnetInline({ magnet, locale }: Props) {
  const asset = LEAD_MAGNETS[magnet];
  const [scaricato, setScaricato] = useState(false);
  if (!asset) return null;
  const t = asset.copy[locale] || asset.copy.en || asset.copy.it;
  // Il PDF segue la lingua dell'ARTICOLO, non quella del browser: un pezzo in
  // olandese deve consegnare il modello con l'AVG e l'Autoriteit Persoonsgegevens.
  const file = asset.files[locale] || asset.fileFallback;

  const ask = pickAsk(locale);
  const surveyHref = `/${locale}/survey/`;

  return (
    <div className="my-12 rounded-2xl border border-[#2DA4E4]/25 bg-[#2DA4E4]/5 p-8 text-center">
      <p className="text-lg font-bold text-slate-900">{t.title}</p>
      <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">{t.desc}</p>

      {/* Download DIRETTO, nessun cancello email */}
      {/* Il tracciamento di questo click è gestito a monte da ArticleContent via
          delegazione (un solo listener per tutti i link PDF dell'articolo), così
          si conta anche il link grezzo nel corpo WP e non si conta due volte. */}
      <a
        href={file}
        target="_blank"
        rel="noopener"
        onClick={() => setScaricato(true)}
        className="mt-5 inline-block px-6 py-3 text-sm font-semibold text-white bg-[#2DA4E4] rounded-xl hover:bg-[#2f97c4] transition-colors"
      >
        {t.download}
      </a>

      {/* Al posto dell'iscrizione: l'invito al sondaggio. Prima del download resta
          una riga discreta, dopo il click diventa la richiesta vera, che e' il
          momento in cui abbiamo appena dato qualcosa. */}
      <div className="mt-6 pt-5 border-t border-[#2DA4E4]/15 max-w-md mx-auto">
        <p className="text-sm text-slate-600">{scaricato ? ask.dopo : ask.prima}</p>
        <a
          href={surveyHref}
          onClick={() => trackEvent('survey_cta_click', { locale, placement: scaricato ? 'lead_magnet_post_download' : 'lead_magnet' })}
          className={`mt-3 inline-block rounded-xl px-5 py-2.5 text-sm font-semibold no-underline transition-colors ${
            scaricato
              ? 'bg-[#8FC436] text-white hover:brightness-105'
              : 'border border-slate-200 bg-white text-slate-700 hover:border-[#2DA4E4]'
          }`}
        >
          {ask.cta}
        </a>
      </div>
    </div>
  );
}
