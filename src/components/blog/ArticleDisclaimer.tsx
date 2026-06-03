// Disclaimer "non è consulenza legale" in fondo a ogni articolo, nella lingua
// dell'articolo. Segnale di Trust E-E-A-T per i contenuti YMYL (GDPR, diritto
// del lavoro). Stesso testo in tutte le lingue toccate dagli articoli.
// NB: il blog è servito da Next.js (headless WP) → il disclaimer va QUI, non in
// un mu-plugin WordPress.

const DISCLAIMERS: Record<string, { label: string; text: string }> = {
  it: { label: 'Nota', text: "Questo articolo ha finalità informative e nasce dalla nostra esperienza diretta con le PMI sul campo. Non costituisce consulenza legale: per la tua situazione specifica verifica sempre con un professionista o con l'autorità competente (es. Garante per la protezione dei dati personali)." },
  en: { label: 'Note', text: 'This article is for information only and comes from our hands-on experience with field-service SMEs. It is not legal advice: for your specific situation, always check with a qualified professional or the relevant authority.' },
  de: { label: 'Hinweis', text: 'Dieser Artikel dient ausschließlich zur Information und beruht auf unserer Praxiserfahrung mit Außendienst-KMU. Er stellt keine Rechtsberatung dar: Prüfen Sie Ihren konkreten Fall stets mit einer Fachperson oder der zuständigen Behörde.' },
  fr: { label: 'Note', text: "Cet article est fourni à titre informatif et s'appuie sur notre expérience directe avec les PME de terrain. Il ne constitue pas un conseil juridique : pour votre situation spécifique, vérifiez toujours auprès d'un professionnel qualifié ou de l'autorité compétente." },
  es: { label: 'Nota', text: 'Este artículo tiene fines informativos y nace de nuestra experiencia directa con las pymes de campo. No constituye asesoramiento legal: para tu situación específica, verifica siempre con un profesional cualificado o con la autoridad competente.' },
  pt: { label: 'Nota', text: 'Este artigo tem fins informativos e resulta da nossa experiência direta com as PME no terreno. Não constitui aconselhamento jurídico: para a sua situação específica, verifique sempre com um profissional qualificado ou com a autoridade competente.' },
  nl: { label: 'Let op', text: 'Dit artikel is uitsluitend ter informatie en komt voort uit onze praktijkervaring met mkb-bedrijven in het veld. Het is geen juridisch advies: controleer voor uw specifieke situatie altijd bij een gekwalificeerde professional of de bevoegde autoriteit.' },
  ru: { label: 'Примечание', text: 'Эта статья носит исключительно информационный характер и основана на нашем практическом опыте работы с малым и средним бизнесом на местах. Она не является юридической консультацией: для вашей конкретной ситуации всегда проверяйте информацию у квалифицированного специалиста или в компетентном органе.' },
  da: { label: 'Bemærk', text: "Denne artikel er kun til information og bygger på vores praktiske erfaring med SMV'er i marken. Den udgør ikke juridisk rådgivning: tjek altid din konkrete situation med en kvalificeret fagperson eller den relevante myndighed." },
  sv: { label: 'Obs', text: 'Den här artikeln är endast informativ och bygger på vår praktiska erfarenhet av små och medelstora företag i fält. Den utgör inte juridisk rådgivning: kontrollera alltid din specifika situation med en kvalificerad expert eller behörig myndighet.' },
  nb: { label: 'Merk', text: 'Denne artikkelen er kun til informasjon og bygger på vår praktiske erfaring med små og mellomstore bedrifter i felt. Den utgjør ikke juridisk rådgivning: sjekk alltid din konkrete situasjon med en kvalifisert fagperson eller relevant myndighet.' },
};

export default function ArticleDisclaimer({ locale = 'it' }: { locale?: string }) {
  const d = DISCLAIMERS[locale] ?? DISCLAIMERS.en;
  return (
    <div className="bg-white">
      <aside
        role="note"
        className="max-w-3xl mx-auto px-6 mt-4 mb-12"
      >
        <div className="border-l-4 border-primary bg-[#f6f8f2] rounded-lg px-5 py-4 text-sm leading-relaxed text-slate-600">
          <strong className="text-slate-700">{d.label}.</strong> {d.text}
        </div>
      </aside>
    </div>
  );
}
