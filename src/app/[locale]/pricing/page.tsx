

import type { Metadata } from 'next';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import {
  EUR_PRICES,
  convertEurToLocale,
  getCurrencyForLocale,
} from '@/lib/pricing';
import type { AppLocale } from '@/lib/i18n/config';
import UpdatedOnLine, { updatedIsoFor } from '@/components/seo/UpdatedOnLine';

const PRICING_SCHEMA_NAME: Record<string, string> = {
  it: 'Prezzi GeoTapp', en: 'GeoTapp Pricing', de: 'GeoTapp Preise',
  nl: 'GeoTapp-prijzen', fr: 'Tarifs GeoTapp', es: 'Precios GeoTapp',
  pt: 'Preços GeoTapp', da: 'GeoTapp Priser', sv: 'GeoTapp Priser',
  nb: 'GeoTapp Priser', ru: 'Цены GeoTapp',
};

function buildPricingSchema(locale: AppLocale) {
  const priceCurrency = getCurrencyForLocale(locale);
  const trackerMonthly = convertEurToLocale(
    EUR_PRICES.tracker.tier1.perSeatMonthly,
    locale,
  );
  const flowSolo = convertEurToLocale(EUR_PRICES.flow.solo.monthly, locale);
  const flowTeam = convertEurToLocale(EUR_PRICES.flow.team.monthly, locale);
  const flowBusiness = convertEurToLocale(
    EUR_PRICES.flow.business.monthly,
    locale,
  );
  const fmt = (n: number) => n.toFixed(2);

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'GeoTapp Pricing',
    // Freschezza per AI/Google: data vera dell'ultimo commit su questa pagina
    // (vedi src/lib/seo/content-dates.ts), non la data di build.
    'dateModified': updatedIsoFor('pricing'),
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'item': {
            '@type': 'SoftwareApplication',
            'name': 'GeoTapp TimeTracker',
            'applicationCategory': 'BusinessApplication',
            'operatingSystem': 'Android, iOS',
            'offers': {
              '@type': 'Offer',
              'price': fmt(trackerMonthly.amount),
              'priceCurrency': priceCurrency,
              'priceSpecification': {
                '@type': 'UnitPriceSpecification',
                'price': fmt(trackerMonthly.amount),
                'priceCurrency': priceCurrency,
                'unitText': 'per user per month',
                'billingIncrement': 1,
                'referenceQuantity': { '@type': 'QuantitativeValue', 'value': 1, 'unitCode': 'MON' },
              },
            },
          },
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'item': {
            '@type': 'SoftwareApplication',
            'name': 'GeoTapp Flow Solo',
            'applicationCategory': 'BusinessApplication',
            'operatingSystem': 'Web',
            'offers': {
              '@type': 'Offer',
              'price': fmt(flowSolo.amount),
              'priceCurrency': priceCurrency,
              'priceSpecification': {
                '@type': 'UnitPriceSpecification',
                'price': fmt(flowSolo.amount),
                'priceCurrency': priceCurrency,
                'unitText': 'per month',
                'referenceQuantity': { '@type': 'QuantitativeValue', 'value': 1, 'unitCode': 'MON' },
              },
            },
          },
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'item': {
            '@type': 'SoftwareApplication',
            'name': 'GeoTapp Flow Team',
            'applicationCategory': 'BusinessApplication',
            'operatingSystem': 'Web',
            'offers': {
              '@type': 'Offer',
              'price': fmt(flowTeam.amount),
              'priceCurrency': priceCurrency,
            },
          },
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'item': {
            '@type': 'SoftwareApplication',
            'name': 'GeoTapp Flow Business',
            'applicationCategory': 'BusinessApplication',
            'operatingSystem': 'Web',
            'offers': {
              '@type': 'Offer',
              'price': fmt(flowBusiness.amount),
              'priceCurrency': priceCurrency,
            },
          },
        },
      ],
    },
  };
}

function buildPricingFAQ(locale: AppLocale): Record<string, object> {
  const monthlyRate = convertEurToLocale(
    EUR_PRICES.tracker.tier1.perSeatMonthly,
    locale,
  ).formatted;
  const annualRate = convertEurToLocale(
    EUR_PRICES.tracker.tier1.perSeatAnnual,
    locale,
  ).formatted;
  const fiveOpsAnnual = convertEurToLocale(
    EUR_PRICES.tracker.tier1.perSeatAnnual * 5,
    locale,
  ).formatted;
  const fiveOpsMonthly = convertEurToLocale(
    (EUR_PRICES.tracker.tier1.perSeatAnnual * 5) / 12,
    locale,
  ).formatted;

  // Beløb til den danske FAQ: samme valuta som siden viser (LOCALE_CURRENCY), så
  // svaret aldrig afviger fra priserne på siden.
  const fx = (eur: number) => convertEurToLocale(eur, locale).formatted;
  const tier2Rate = fx(EUR_PRICES.tracker.tier2.perSeatMonthly);

  return {
    it: {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'GeoTapp ha una prova gratuita?', acceptedAnswer: { '@type': 'Answer', text: 'Sì. La prova dura 14 giorni e non chiede la carta di credito.' } },
        { '@type': 'Question', name: 'Quanto costa GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: `GeoTapp Flow, il pannello web, costa 39 € al mese con il piano Solo, 99 € con Team e 199 € con Business (390, 990 e 1.990 € se paghi l'anno in un'unica soluzione). Le postazioni dell'app TimeTracker si aggiungono a parte: ${monthlyRate} per operatore al mese fino a 25, 2,50 € dalla ventiseiesima. Prezzi IVA esclusa.` } },
        { '@type': 'Question', name: 'Quanto costa per una squadra di 5 operatori?', acceptedAnswer: { '@type': 'Answer', text: `Al piano Flow scelto si aggiungono 5 postazioni TimeTracker: ${fiveOpsMonthly} al mese, ${fiveOpsAnnual} l'anno se paghi l'anno intero. Non ci sono costi di attivazione.` } },
        { '@type': 'Question', name: "C'è una durata minima?", acceptedAnswer: { '@type': 'Answer', text: "Sì. L'abbonamento dura almeno 12 mesi, pagabili in un'unica soluzione o in rate mensili. Puoi passare a un piano superiore quando vuoi dal pannello." } },
        { '@type': 'Question', name: 'Sono previsti costi nascosti?', acceptedAnswer: { '@type': 'Answer', text: 'No. Supporto e aggiornamenti sono compresi, e GeoTapp Verifier, con cui i tuoi clienti verificano i report, è gratuito.' } },
      ],
    },
    en: {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Does GeoTapp have a free trial?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The trial lasts 14 days and does not ask for a credit card.' } },
        { '@type': 'Question', name: 'How much does GeoTapp cost?', acceptedAnswer: { '@type': 'Answer', text: `GeoTapp Flow, the web panel, costs €39 a month on the Solo plan, €99 on Team and €199 on Business (€390, €990 and €1,990 if you pay for the year in one go). TimeTracker app seats are added separately: ${monthlyRate} per operator per month up to 25, €2.50 from the 26th. Prices exclude VAT.` } },
        { '@type': 'Question', name: 'How much for a crew of 5 operators?', acceptedAnswer: { '@type': 'Answer', text: `On top of the Flow plan you choose, 5 TimeTracker seats come to ${fiveOpsMonthly} a month, or ${fiveOpsAnnual} a year if you pay for the whole year. There are no activation fees.` } },
        { '@type': 'Question', name: 'Is there a minimum term?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The subscription lasts at least 12 months, payable in one annual payment or in monthly instalments. You can move up to a higher plan whenever you like from the management panel.' } },
        { '@type': 'Question', name: 'Are there any hidden fees?', acceptedAnswer: { '@type': 'Answer', text: 'No. Support and updates are included, and GeoTapp Verifier, which your clients use to check reports, is free.' } },
      ],
    },
    de: {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Bietet GeoTapp eine kostenlose Testphase?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Die Testphase dauert 14 Tage und verlangt keine Kreditkarte.' } },
        { '@type': 'Question', name: 'Wie viel kostet GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: `GeoTapp Flow, das Web-Panel, kostet 39 € im Monat mit dem Tarif Solo, 99 € mit Team und 199 € mit Business (390, 990 und 1.990 €, wenn Sie das Jahr auf einmal zahlen). Die Plätze der TimeTracker-App kommen separat dazu: ${monthlyRate} pro Mitarbeiter und Monat bis zum 25. Platz, 2,50 € ab dem 26. Preise zzgl. USt.` } },
        { '@type': 'Question', name: 'Was kostet es für ein Team mit 5 Mitarbeitenden?', acceptedAnswer: { '@type': 'Answer', text: `Zum gewählten Flow-Tarif kommen 5 TimeTracker-Plätze: ${fiveOpsMonthly} im Monat, ${fiveOpsAnnual} im Jahr, wenn Sie das ganze Jahr zahlen. Es fallen keine Aktivierungsgebühren an.` } },
        { '@type': 'Question', name: 'Gibt es eine Mindestlaufzeit?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Das Abonnement läuft mindestens 12 Monate, zahlbar auf einmal oder in Monatsraten. In einen höheren Tarif wechseln Sie jederzeit im Verwaltungsbereich.' } },
        { '@type': 'Question', name: 'Gibt es versteckte Kosten?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Support und Updates sind enthalten, und GeoTapp Verifier, mit dem Ihre Kunden die Berichte prüfen, ist kostenlos.' } },
      ],
    },
    fr: {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'GeoTapp propose-t-il un essai gratuit ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. L\'essai dure 14 jours et ne demande pas de carte bancaire.' } },
        { '@type': 'Question', name: 'Combien coûte GeoTapp ?', acceptedAnswer: { '@type': 'Answer', text: `GeoTapp Flow, le panneau web, coûte 39 € par mois avec la formule Solo, 99 € avec Team et 199 € avec Business (390, 990 et 1 990 € si vous payez l\'année en une seule fois). Les postes de l\'application TimeTracker s\'ajoutent à part : ${monthlyRate} par opérateur et par mois jusqu\'au 25e poste, 2,50 € à partir du 26e. Prix hors TVA.` } },
        { '@type': 'Question', name: 'Combien pour une équipe de 5 opérateurs ?', acceptedAnswer: { '@type': 'Answer', text: `À la formule Flow choisie s\'ajoutent 5 postes TimeTracker : ${fiveOpsMonthly} par mois, ${fiveOpsAnnual} par an si vous payez l\'année entière. Il n\'y a pas de frais d\'activation.` } },
        { '@type': 'Question', name: 'Y a-t-il une durée minimale ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. L\'abonnement dure au moins 12 mois, payables en une seule fois ou en mensualités. Vous pouvez passer à une formule supérieure quand vous le souhaitez depuis le panneau de gestion.' } },
        { '@type': 'Question', name: 'Y a-t-il des frais cachés ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. Le support et les mises à jour sont compris, et GeoTapp Verifier, avec lequel vos clients vérifient les rapports, est gratuit.' } },
      ],
    },
    es: {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: '¿GeoTapp tiene una prueba gratuita?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. La prueba dura 14 días y no pide tarjeta de crédito.' } },
        { '@type': 'Question', name: '¿Cuánto cuesta GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: `GeoTapp Flow, el panel web, cuesta 39 € al mes con el plan Solo, 99 € con Team y 199 € con Business (390, 990 y 1.990 € si pagas el año de una sola vez). Los puestos de la aplicación TimeTracker se añaden aparte: ${monthlyRate} por operario al mes hasta el puesto 25, 2,50 € a partir del 26. Precios sin IVA.` } },
        { '@type': 'Question', name: '¿Cuánto cuesta para un equipo de 5 operarios?', acceptedAnswer: { '@type': 'Answer', text: `Al plan Flow que elijas se suman 5 puestos de TimeTracker: ${fiveOpsMonthly} al mes, ${fiveOpsAnnual} al año si pagas el año entero. No hay costes de activación.` } },
        { '@type': 'Question', name: '¿Hay una permanencia mínima?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. La suscripción dura al menos 12 meses, que se pueden pagar de una sola vez o en cuotas mensuales. Puedes pasar a un plan superior cuando quieras desde el panel.' } },
        { '@type': 'Question', name: '¿Hay costes ocultos?', acceptedAnswer: { '@type': 'Answer', text: 'No. El soporte y las actualizaciones están incluidos, y GeoTapp Verifier, con el que tus clientes verifican los informes, es gratuito.' } },
      ],
    },
    nl: {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Heeft GeoTapp een gratis proefperiode?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. De proefperiode duurt 14 dagen en vraagt geen creditcard.' } },
        { '@type': 'Question', name: 'Wat kost GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: `GeoTapp Flow, het webpaneel, kost € 39 per maand met het plan Solo, € 99 met Team en € 199 met Business (€ 390, € 990 en € 1.990 als u het jaar in één keer betaalt). De plaatsen van de TimeTracker-app komen er apart bij: ${monthlyRate} per medewerker per maand tot 25, € 2,50 vanaf de zesentwintigste. Prijzen exclusief btw.` } },
        { '@type': 'Question', name: 'Wat kost het voor een ploeg van 5 medewerkers?', acceptedAnswer: { '@type': 'Answer', text: `Bij het gekozen Flow-plan komen 5 TimeTracker-plaatsen: ${fiveOpsMonthly} per maand, ${fiveOpsAnnual} per jaar als u het hele jaar betaalt. Er zijn geen activeringskosten.` } },
        { '@type': 'Question', name: 'Is er een minimale looptijd?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Het abonnement loopt minimaal 12 maanden, te betalen in één keer of in maandelijkse termijnen. U kunt op elk moment via het paneel overstappen op een hoger plan.' } },
        { '@type': 'Question', name: 'Zijn er verborgen kosten?', acceptedAnswer: { '@type': 'Answer', text: 'Nee. Ondersteuning en updates zijn inbegrepen, en GeoTapp Verifier, waarmee uw klanten de rapporten controleren, is gratis.' } },
      ],
    },
    pt: {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'O GeoTapp tem um período de teste gratuito?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. O teste dura 14 dias e não pede cartão de crédito.' } },
        { '@type': 'Question', name: 'Quanto custa o GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: `O GeoTapp Flow, o painel web, custa 39 € por mês com o plano Solo, 99 € com o Team e 199 € com o Business (390, 990 e 1.990 € se pagar o ano de uma só vez). Os postos da aplicação TimeTracker somam-se à parte: ${monthlyRate} por operador por mês até ao posto 25, 2,50 € a partir do 26.º. Preços sem IVA.` } },
        { '@type': 'Question', name: 'Quanto custa para uma equipa de 5 operadores?', acceptedAnswer: { '@type': 'Answer', text: `Ao plano Flow escolhido somam-se 5 postos do TimeTracker: ${fiveOpsMonthly} por mês, ${fiveOpsAnnual} por ano se pagar o ano inteiro. Não há custos de ativação.` } },
        { '@type': 'Question', name: 'Existe uma duração mínima?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. A subscrição dura pelo menos 12 meses, que podem ser pagos de uma só vez ou em prestações mensais. Pode passar para um plano superior quando quiser, a partir do painel.' } },
        { '@type': 'Question', name: 'Há custos escondidos?', acceptedAnswer: { '@type': 'Answer', text: 'Não. O suporte e as atualizações estão incluídos, e o GeoTapp Verifier, com o qual os seus clientes verificam os relatórios, é gratuito.' } },
      ],
    },
    da: {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Har GeoTapp en gratis prøveperiode?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Prøveperioden varer 14 dage og kræver ikke kreditkort.' } },
        { '@type': 'Question', name: 'Hvad koster GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: `GeoTapp Flow, webpanelet, koster ${fx(EUR_PRICES.flow.solo.monthly)} om måneden med planen Solo, ${fx(EUR_PRICES.flow.team.monthly)} med Team og ${fx(EUR_PRICES.flow.business.monthly)} med Business (${fx(EUR_PRICES.flow.solo.annual)}, ${fx(EUR_PRICES.flow.team.annual)} og ${fx(EUR_PRICES.flow.business.annual)}, hvis du betaler hele året på én gang). Pladserne i TimeTracker-appen kommer til særskilt: ${monthlyRate} pr. medarbejder om måneden til og med plads 25, ${tier2Rate} fra plads 26. Priserne er ekskl. moms.` } },
        { '@type': 'Question', name: 'Hvad koster det for et hold på 5 medarbejdere?', acceptedAnswer: { '@type': 'Answer', text: `Til den valgte Flow-plan kommer 5 TimeTracker-pladser: ${fiveOpsMonthly} om måneden, ${fiveOpsAnnual} om året, hvis du betaler hele året. Der er ingen oprettelsesgebyrer.` } },
        { '@type': 'Question', name: 'Er der en mindste varighed?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Abonnementet løber i mindst 12 måneder, som kan betales på én gang eller i månedlige rater. Du kan skifte til en højere plan, når du vil, fra panelet.' } },
        { '@type': 'Question', name: 'Er der skjulte omkostninger?', acceptedAnswer: { '@type': 'Answer', text: 'Nej. Support og opdateringer er inkluderet, og GeoTapp Verifier, som dine kunder bruger til at kontrollere rapporterne, er gratis.' } },
      ],
    },
    sv: {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Har GeoTapp en gratis provperiod?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Provperioden varar i 14 dagar och kräver inget kreditkort.' } },
        { '@type': 'Question', name: 'Vad kostar GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: `GeoTapp Flow, webbpanelen, kostar ${fx(EUR_PRICES.flow.solo.monthly)} i månaden med planen Solo, ${fx(EUR_PRICES.flow.team.monthly)} med Team och ${fx(EUR_PRICES.flow.business.monthly)} med Business (${fx(EUR_PRICES.flow.solo.annual)}, ${fx(EUR_PRICES.flow.team.annual)} och ${fx(EUR_PRICES.flow.business.annual)} om du betalar hela året på en gång). Platserna i TimeTracker-appen tillkommer separat: ${monthlyRate} per medarbetare och månad till och med plats 25, ${tier2Rate} från plats 26. Priserna är exklusive moms.` } },
        { '@type': 'Question', name: 'Vad kostar det för ett team på 5 medarbetare?', acceptedAnswer: { '@type': 'Answer', text: `Till den valda Flow-planen tillkommer 5 TimeTracker-platser: ${fiveOpsMonthly} i månaden, ${fiveOpsAnnual} om året om du betalar hela året. Det finns inga aktiveringsavgifter.` } },
        { '@type': 'Question', name: 'Finns det en minsta avtalstid?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Abonnemanget löper i minst 12 månader, som kan betalas på en gång eller i månatliga delbetalningar. Du kan byta till en högre plan när du vill, från panelen.' } },
        { '@type': 'Question', name: 'Finns det dolda kostnader?', acceptedAnswer: { '@type': 'Answer', text: 'Nej. Support och uppdateringar ingår, och GeoTapp Verifier, som dina kunder använder för att kontrollera rapporterna, är gratis.' } },
      ],
    },
    nb: {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Har GeoTapp en gratis prøveperiode?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Prøveperioden varer i 14 dager og krever ikke kredittkort.' } },
        { '@type': 'Question', name: 'Hva koster GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: `GeoTapp Flow, nettpanelet, koster ${fx(EUR_PRICES.flow.solo.monthly)} per måned med planen Solo, ${fx(EUR_PRICES.flow.team.monthly)} med Team og ${fx(EUR_PRICES.flow.business.monthly)} med Business (${fx(EUR_PRICES.flow.solo.annual)}, ${fx(EUR_PRICES.flow.team.annual)} og ${fx(EUR_PRICES.flow.business.annual)} hvis du betaler hele året på én gang). Plassene i TimeTracker-appen kommer i tillegg: ${monthlyRate} per medarbeider per måned til og med plass 25, ${tier2Rate} fra plass 26. Prisene er eksklusive mva.` } },
        { '@type': 'Question', name: 'Hva koster det for et team på 5 medarbeidere?', acceptedAnswer: { '@type': 'Answer', text: `Til den valgte Flow-planen kommer 5 TimeTracker-plasser: ${fiveOpsMonthly} per måned, ${fiveOpsAnnual} per år hvis du betaler hele året. Det er ingen oppstartsgebyrer.` } },
        { '@type': 'Question', name: 'Finnes det en minste varighet?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Abonnementet løper i minst 12 måneder, som kan betales på én gang eller i månedlige avdrag. Du kan bytte til en høyere plan når du vil, fra panelet.' } },
        { '@type': 'Question', name: 'Finnes det skjulte kostnader?', acceptedAnswer: { '@type': 'Answer', text: 'Nei. Support og oppdateringer er inkludert, og GeoTapp Verifier, som kundene dine bruker til å kontrollere rapportene, er gratis.' } },
      ],
    },
  };
}

const PRICING_BREADCRUMB: Record<string, object> = {
  it: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Prezzi', item: 'https://geotapp.com/it/pricing/' }] },
  en: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://geotapp.com/en/pricing/' }] },
  de: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Preise', item: 'https://geotapp.com/de/preise/' }] },
  fr: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Tarifs', item: 'https://geotapp.com/fr/tarifs/' }] },
  es: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Precios', item: 'https://geotapp.com/es/precios/' }] },
  nl: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Tarieven', item: 'https://geotapp.com/nl/tarieven/' }] },
  pt: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Preços', item: 'https://geotapp.com/pt/precos/' }] },
  da: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Priser', item: 'https://geotapp.com/da/priser/' }] },
  sv: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Priser', item: 'https://geotapp.com/sv/priser/' }] },
  nb: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Priser', item: 'https://geotapp.com/nb/priser/' }] },
  ru: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Цены', item: 'https://geotapp.com/ru/tseny/' }] },
};

const PRICING_META: Record<string, { title: string; description: string }> = {
  it: { title: 'Prezzi GeoTapp - Piani e abbonamenti | GeoTapp', description: 'Scopri i piani GeoTapp: prova gratuita 14 giorni, abbonamenti per team con timbratura GPS, gestione turni e verifica report. Nessun costo nascosto.' },
  en: { title: 'GeoTapp pricing: plans for field teams, 14-day free trial', description: 'Office plans for Flow, a seat for every worker on TimeTracker, 14 days free without a card. See what each plan includes before you start.' },
  de: { title: 'GeoTapp Preise: Tarife für Teams im Außendienst, 14 Tage kostenlos', description: 'Büro-Tarife für Flow, ein Platz pro Mitarbeiter im TimeTracker, 14 Tage kostenlos ohne Karte. Sehen Sie vor dem Start, was jeder Tarif enthält.' },
  fr: { title: 'Tarifs GeoTapp : formules pour équipes, essai de 14 jours', description: 'Formules bureau pour Flow, un poste par opérateur sur TimeTracker, 14 jours gratuits sans carte. Voyez ce que comprend chaque formule avant de commencer.' },
  es: { title: 'Precios GeoTapp: planes para equipos, prueba de 14 días', description: 'Planes de oficina para Flow, un puesto por operario en TimeTracker, 14 días gratis sin tarjeta. Mira qué incluye cada plan antes de empezar.' },
  pt: { title: 'Preços GeoTapp: planos para equipas, teste de 14 dias', description: 'Planos de escritório para o Flow, um posto por operador no TimeTracker, 14 dias grátis sem cartão. Veja o que inclui cada plano antes de começar.' },
  nl: { title: 'GeoTapp-prijzen - Abonnementen | GeoTapp', description: 'Ontdek de GeoTapp-abonnementen: 14 dagen gratis proberen, abonnementen voor teams met registratie met locatie, dienstbeheer en controle van rapporten. Geen verborgen kosten.' },
  ru: { title: 'Цены GeoTapp, Тарифы и подписки | GeoTapp', description: 'Изучите планы GeoTapp: бесплатный базовый план, ежемесячные подписки для команд с GPS-учётом времени, управлением сменами и проверкой отчётов.' },
  da: { title: 'GeoTapp priser: planer til hold i marken, 14 dages prøve', description: 'Kontorplaner til Flow, en plads pr. medarbejder i TimeTracker, 14 dage gratis uden kort. Se, hvad hver plan indeholder, før du starter.' },
  sv: { title: 'GeoTapp priser: planer för team på fältet, 14 dagar gratis', description: 'Kontorsplaner för Flow, en plats per medarbetare i TimeTracker, 14 dagar gratis utan kort. Se vad varje plan innehåller innan du startar.' },
  nb: { title: 'GeoTapp priser: planer for team i felt, 14 dagers prøve', description: 'Kontorplaner for Flow, én plass per medarbeider i TimeTracker, 14 dager gratis uten kort. Se hva hver plan inneholder før du starter.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = PRICING_META[locale] ?? PRICING_META.en;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: buildLocaleAlternates(locale, '/pricing/'),
    openGraph: {
      url: buildCanonicalUrl(locale, '/pricing/'),
      type: 'website',
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: meta.title }],
      title: meta.title,
      description: meta.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

import PricingPage from '../../pricing/page';
import { localizeEnglishDeep } from '@/lib/i18n/en-spelling';
import { localizeEurPricesDeep } from '@/lib/pricing';

export default async function LocalePricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const pricingFaq = buildPricingFAQ(locale as AppLocale);
  const faq = pricingFaq[locale] ?? (locale.startsWith('en-') ? localizeEnglishDeep(localizeEurPricesDeep(pricingFaq['en'], locale), locale) : pricingFaq['en']);
  const breadcrumb = PRICING_BREADCRUMB[locale] ?? {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      { '@type': 'ListItem', position: 2, name: 'Pricing', item: `https://geotapp.com/${locale}/pricing/` },
    ],
  };
  const pricingSchema = buildPricingSchema(locale as AppLocale);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...pricingSchema, name: PRICING_SCHEMA_NAME[locale] ?? PRICING_SCHEMA_NAME.en }) }} />
      {faq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />}
      <PricingPage />
      <UpdatedOnLine pageKey="pricing" locale={locale as AppLocale} />
    </>
  );
}
