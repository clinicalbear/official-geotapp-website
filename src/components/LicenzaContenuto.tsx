/**
 * Nota di copyright + licenza d'uso in fondo ai contenuti (articoli blog e
 * pagine-strumento delle risorse). Una riga sola: © + permesso di citare con
 * link alla fonte, ripubblicazione integrale / uso commerciale solo su permesso.
 *
 * Obiettivo doppio: tutela del contenuto originale + leva backlink (chi riusa
 * deve citare con un link). Il testo è localizzato per le 11 lingue del sito.
 * NON si applica ai documenti generati dagli strumenti (quelli restano
 * dell'utente): quella è un'altra cosa, con il solo credito "generato con GeoTapp".
 */

const LICENSE: Record<string, string> = {
  it: '© 2026 GeoTapp — contenuto originale. Puoi citarlo e riprenderne parti con un link a questa pagina. Ripubblicazione integrale o uso commerciale solo con nostro permesso.',
  en: '© 2026 GeoTapp — original content. You may quote it and reuse parts with a link to this page. Full republication or commercial use only with our permission.',
  de: '© 2026 GeoTapp — Originalinhalt. Du darfst ihn zitieren und Teile mit einem Link zu dieser Seite übernehmen. Vollständige Weiterveröffentlichung oder kommerzielle Nutzung nur mit unserer Erlaubnis.',
  fr: '© 2026 GeoTapp — contenu original. Vous pouvez le citer et en reprendre des extraits avec un lien vers cette page. Republication intégrale ou usage commercial uniquement avec notre autorisation.',
  nl: '© 2026 GeoTapp — originele content. Je mag ernaar citeren en delen overnemen met een link naar deze pagina. Volledige herpublicatie of commercieel gebruik alleen met onze toestemming.',
  es: '© 2026 GeoTapp — contenido original. Puedes citarlo y reutilizar partes con un enlace a esta página. Republicación íntegra o uso comercial solo con nuestro permiso.',
  pt: '© 2026 GeoTapp — conteúdo original. Podes citá-lo e reutilizar partes com um link para esta página. Republicação integral ou uso comercial apenas com a nossa autorização.',
  da: '© 2026 GeoTapp — originalt indhold. Du må citere det og genbruge dele med et link til denne side. Fuld genudgivelse eller kommerciel brug kun med vores tilladelse.',
  sv: '© 2026 GeoTapp — originalinnehåll. Du får citera det och återanvända delar med en länk till den här sidan. Fullständig återpublicering eller kommersiell användning endast med vårt tillstånd.',
  nb: '© 2026 GeoTapp — originalt innhold. Du kan sitere det og gjenbruke deler med en lenke til denne siden. Full republisering eller kommersiell bruk bare med vår tillatelse.',
  ru: '© 2026 GeoTapp — оригинальный материал. Вы можете цитировать его и использовать фрагменты со ссылкой на эту страницу. Полная перепубликация или коммерческое использование — только с нашего разрешения.',
};

export default function LicenzaContenuto({ locale }: { locale: string }) {
  const text = LICENSE[locale] || LICENSE[locale.split('-')[0]] || LICENSE.en;
  return (
    <div className="bg-white border-t border-slate-100">
      <p className="max-w-3xl mx-auto px-6 py-6 text-center text-xs leading-relaxed text-slate-400">
        {text}
      </p>
    </div>
  );
}
