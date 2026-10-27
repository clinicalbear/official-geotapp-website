import type { ContestazioniCopy } from './types';

/**
 * Siden "Når nogen bestrider arbejdet" (27/10/2026), skrevet direkte på dansk (ikke oversat ord for ord).
 * Alle udsagn om produktet kommer fra claim-skemaet (docs/stampa/scheda-claim.md) eller fra
 * de allerede udgivne strenge i dict.features / dict.faq (dansk). Her skrives aldrig: "ingen flere
 * tvister", "juridisk bevis", "certificerer", "garanterer", "krypteret", "i realtid", fotos "kun live",
 * tal uden kilde. Baggrundstilladelsen nævnes kun for Android og iPhone (Apple Watch er ikke kontrolleret).
 */
const da: ContestazioniCopy = {
  metaTitle: 'Når nogen bestrider arbejdet: hvad der ændrer sig | GeoTapp',
  metaDesc:
    'Når en kunde eller en medarbejder bestrider arbejdet, hvad har du så i hånden? Den samme uenighed set fra tre sider: virksomheden, medarbejderen og bestilleren.',
  kicker: 'Uenighed om udført arbejde',
  h1: 'Når nogen bestrider arbejdet: hvad der ændrer sig med GeoTapp',
  lede:
    'En uenighed kan man ikke undgå. Det, der ændrer sig, er, hvad du har i hånden, når den kommer: en erindring mod en erindring, eller et dokument. Her ser du den samme diskussion fra tre sider: virksomheden, den, der udfører arbejdet, og den, der har bestilt det.',
  updatedLabel: 'Opdateret den 27. oktober 2026',
  scenes: [
    {
      kicker: 'Virksomheden',
      heading: 'Hvis du er virksomheden',
      scene: '«Kunden siger, at I aldrig kom. Eller at I var der i en time, ikke tre.»',
      haveTitle: 'Hvad du har i hånden',
      have: [
        'Tidspunktet for ankomst, pauser og afgang ved hver opgave.',
        'Den position, der blev registreret ved stemplingen. Ved stempling afviser appen positioner, der er simuleret af apps med falsk position, positioner, der er for upræcise, og umulige forflytninger.',
        'Bevisfotos fra opgaven. Fotos afvises ikke, men markeres: tidspunktet og positionen for billedet sammenlignes med dem fra stemplingen.',
        'En rapport, der sammensættes af stemplinger, fotos og noter, når opgaven er slut, og som forsegles: enhver senere ændring kan opdages.',
      ],
      changeTitle: 'Hvad der ændrer sig',
      change: [
        'I stedet for at rekonstruere det hele fra hukommelsen mellem beskeder, mails og papirlister sender du ét dokument.',
        'Hvis der ikke er dækning, bliver stemplingen gemt på telefonen og sendes automatisk, når signalet vender tilbage, med det klokkeslæt, den blev foretaget på.',
        'Timer, der er dokumenteret, er timer, du kan vise frem, når du fakturerer dem.',
      ],
    },
    {
      kicker: 'Medarbejderen',
      heading: 'Hvis det er dig, der udfører arbejdet',
      scene: '«Jeg har arbejdet flere timer, end jeg er blevet betalt for.»',
      haveTitle: 'Hvad du har',
      have: [
        'Dine arbejdssessioner med start, pauser og slut, som du kan se igen i appen for en valgt periode, med det samlede timetal.',
        'Positionen registreres kun, når du stempler eller tager et bevisfoto: indstempling, start og slut på pauser, udstempling.',
        'Mellem to stemplinger registreres der ingen position automatisk og løbende. På Android og iPhone beder appen heller ikke om tilladelse til position i baggrunden.',
      ],
      changeTitle: 'Hvad der ændrer sig',
      change: [
        'Hvis der opstår uenighed om timerne, findes der et tidspunkt, som du selv har registreret med en handling, og som ikke afhænger af nogens hukommelse.',
        'Kontoret ser stemplingerne, når de kommer ind: skærmen hedder Dagens stemplinger og viser dem, der er foretaget, ikke hvor nogen befinder sig lige nu.',
      ],
      extra: {
        title: 'Hvad der sker med positionerne, og hvor længe',
        paragraphs: [
          'I registreringerne slettes positionerne efter tolv måneder, en periode som virksomheden kan forkorte helt ned til tredive dage.',
          'I de rapporter, der allerede er leveret, bliver de, fordi de er forseglede dokumenter, og de følger lovens opbevaringsfrist: efter fem år slettes pakken. En leveret rapport er et øjebliksbillede: den opdateres ikke og kan ikke røres uden at bryde det segl, der gør den kontrollerbar.',
        ],
      },
    },
    {
      kicker: 'Bestilleren',
      heading: 'Hvis du er bestilleren',
      scene: '«De siger, at arbejdet er udført. Hvordan kan jeg vide det uden bare at tro på dem?»',
      haveTitle: 'Hvad du gør',
      have: [
        'Du får et link til rapporten og kontrollerer den selv, online eller med den offline verifier: en enkelt fil, der ikke forbinder til internettet og har den offentlige nøgle indbygget.',
        'Kontrollen genberegner aftrykket for hver hændelse og hvert foto og kontrollerer underskriften. Verifikationssiden viser to adskilte ting: om dokumentet er intakt, og om underskriften er gyldig.',
        'Den virker også om år, også uden GeoTapp: den, der har pakken og verifieren, kan gentage kontrollen.',
      ],
      changeTitle: 'Hvad den viser, og hvad den ikke viser',
      change: [
        'Rapporten hjælper med at vise, at det afleverede dokument ikke er blevet rørt; alene er den hverken et absolut bevis for selve forholdet eller juridisk rådgivning.',
        '«Intakt dokument» betyder, at det ikke er pillet ved. Det er underskriften, som ikke kan laves om uden nøglen, der siger, at pakken er udstedt af os.',
      ],
    },
  ],
  sample: {
    heading: 'Prøv det med en ægte rapport',
    paragraphs: [
      'Herunder ligger en eksempelrapport, en udskiftning af en eltavle. Download den og kontrollér den i din egen browser: kontrollen kører hos dig, og filen sendes ikke til os.',
    ],
  },
  limits: {
    heading: 'Hvad GeoTapp ikke gør',
    items: [
      'Den følger ikke løbende, heller ikke hvis man ville: på Android og iPhone beder appen ikke om tilladelse til position i baggrunden.',
      'Den beviser ikke i sig selv, at hændelsen fandt sted: den viser, om pakken er blevet ændret efter afleveringen.',
      'Den lover ikke, at uenigheder forsvinder: den ændrer, hvad du kommer med, når de opstår.',
      'Den erstatter ikke en advokat eller rådgiver med speciale i arbejdsret, databeskyttelsesrådgiveren (DPO), aftaler med medarbejderrepræsentanterne eller de tilladelser, som lovgivningen i dit land kan kræve.',
    ],
    formula:
      'Rapporten hjælper med at vise, at det afleverede dokument ikke er blevet rørt; alene er den hverken et absolut bevis for selve forholdet eller juridisk rådgivning.',
  },
  faq: {
    title: 'Ofte stillede spørgsmål',
    items: [
      {
        q: 'Er en GeoTapp-rapport nok til at vinde en tvist?',
        a: 'Ikke alene. Rapporten viser, hvad der er registreret, og lader enhver kontrollere, at den ikke er ændret efter afleveringen; den beviser ikke i sig selv, at hændelsen fandt sted, og er ikke juridisk rådgivning. Det er et ordnet og kontrollerbart dokument i stedet for en erindring mod en erindring.',
      },
      {
        q: 'Følger GeoTapp medarbejderne hen over dagen?',
        a: 'Nej. Positionen registreres kun, når medarbejderen foretager en handling: indstempling, start og slut på pauser, udstempling, bevisfoto. Mellem to stemplinger registreres der ingen position automatisk og løbende. På Android og iPhone beder appen heller ikke om tilladelse til position i baggrunden.',
      },
      {
        q: 'Skal bestilleren stole på GeoTapp for at kontrollere rapporten?',
        a: 'Nej. Den offline verifier er en enkelt fil, der ikke forbinder til internettet og har den offentlige nøgle indbygget: den genberegner aftrykkene og kontrollerer underskriften, også om år og også uden GeoTapp. Kontrollen viser, om pakken er blevet ændret, ikke om hændelsen fandt sted.',
      },
      {
        q: 'Hvad sker der med positionerne efter afleveringen?',
        a: 'I registreringerne slettes de efter tolv måneder, en periode som virksomheden kan forkorte helt ned til tredive dage. I de rapporter, der allerede er leveret, bliver de, fordi de er forseglede dokumenter, og de følger lovens opbevaringsfrist: efter fem år slettes pakken.',
      },
      {
        q: 'Hvor ligger dataene?',
        a: 'Arbejdsdata og fotos er gemt i Den Europæiske Union.',
      },
      {
        q: 'Erstatter GeoTapp en rådgiver eller aftaler med medarbejderrepræsentanterne?',
        a: 'Nej. GeoTapp hjælper dig med at holde dig inden for rammerne af GDPR, men erstatter hverken en advokat eller rådgiver med speciale i arbejdsret, databeskyttelsesrådgiveren (DPO), aftaler med medarbejderrepræsentanterne eller de tilladelser, som lovgivningen i dit land kan kræve.',
      },
    ],
  },
  next: {
    heading: 'Videre herfra',
    paragraph: 'Hvis du vil se funktion for funktion, hvad der er indeni, eller priserne, så er her vejen.',
    featuresLabel: 'Hvad GeoTapp kan, funktion for funktion →',
    pricingLabel: 'Se priserne →',
  },
  card: {
    title: 'Hvad der ændrer sig, når nogen bestrider arbejdet',
    text: 'Virksomheden, medarbejderen og bestilleren side om side.',
    cta: 'Læs siden',
  },
  disclaimer:
    'Denne side beskriver, hvad GeoTapp gør, og er ikke juridisk rådgivning. For din konkrete situation bør du tale med en advokat eller rådgiver med speciale i arbejdsret eller en databeskyttelsesrådgiver (DPO).',
};

export default da;
