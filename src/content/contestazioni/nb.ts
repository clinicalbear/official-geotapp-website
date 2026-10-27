import type { ContestazioniCopy } from './types';

/**
 * Siden "Når noen bestrider arbeidet" (27.10.2026), skrevet direkte på bokmål, ikke oversatt.
 * Alt om produktet kommer fra kravskjemaet (docs/stampa/scheda-claim.md) og fra de allerede
 * publiserte tekstene i dict.features. Skal aldri stå her: "aldri mer tvister", "juridisk bevis",
 * "sertifiserer", "garanterer", krypterte posisjoner, "sanntid", "live-kart", bilder "bare live",
 * "ingenting registreres mellom" uten "automatisk og kontinuerlig", tall uten kilde.
 * Tillatelsen til posisjon i bakgrunnen gjelder bare Android og iPhone: Apple Watch er ikke kontrollert.
 */
const FORMULA =
  'Den forseglede pakken hjelper til å vise at dokumentet som er levert ikke er endret; alene er den verken et absolutt bevis for selve forholdet eller juridisk rådgivning.';

const nb: ContestazioniCopy = {
  metaTitle: 'Når arbeidet bestrides: hva endrer seg med GeoTapp | GeoTapp',
  metaDesc:
    'Når en kunde eller en ansatt bestrider arbeidet, hva har du da i hånden? Samme diskusjon sett fra tre sider: bedriften, den som utfører arbeidet og oppdragsgiveren.',
  kicker: 'Tvister om utført arbeid',
  h1: 'Når noen bestrider arbeidet: hva endrer seg med GeoTapp',
  lede:
    'En klage kan du ikke unngå. Det som endrer seg, er hva du har i hånden når den kommer: ord mot ord, eller et dokument. Her ser du den samme diskusjonen fra tre sider: bedriften, den som utfører arbeidet og den som bestilte det.',
  updatedLabel: 'Oppdatert 27. oktober 2026',
  scenes: [
    {
      kicker: 'Bedriften',
      heading: 'Hvis du er bedriften',
      scene: '«Kunden sier at dere aldri kom. Eller at dere var der i én time, ikke tre.»',
      haveTitle: 'Hva du har i hånden',
      have: [
        'Klokkeslettet for oppmøte, pauser og avslutning for hvert oppdrag.',
        'Posisjonen som ble registrert ved stemplingen. Ved stempling avviser appen posisjoner simulert av falske posisjonsapper, posisjoner som er for upresise og umulige hopp.',
        'Bevisbildene fra oppdraget. På bilder avvises ingenting: de flagges ved at klokkeslett og posisjon for bildet sammenlignes med stemplingens.',
        'En rapport som bygges av stemplinger, bilder og notater når oppdraget er ferdig, og som forsegles: enhver senere endring kan oppdages.',
      ],
      changeTitle: 'Hva som endrer seg',
      change: [
        'I stedet for å rekonstruere fra hukommelsen mellom WhatsApp, e-poster og papirlapper sender du ett dokument.',
        'Hvis det ikke er dekning, blir stemplingen lagret på telefonen og sendt av seg selv når dekningen er tilbake, med klokkeslettet den ble gjort på.',
        'Timene som er dokumentert, er timer du kan vise frem når du fakturerer.',
      ],
    },
    {
      kicker: 'Den som jobber',
      heading: 'Hvis det er du som utfører arbeidet',
      scene: '«Jeg jobbet flere timer enn jeg fikk betalt for.»',
      haveTitle: 'Hva du har',
      have: [
        'Arbeidsøktene dine, med starttidspunkt, pauser og slutt, som du kan se igjen i appen per periode, med totalt antall timer.',
        'Posisjonen registreres bare når du stempler eller tar et bevisbilde: oppmøte, start og slutt på pause, avslutning.',
        'Mellom én stempling og den neste registreres ingen posisjon automatisk og kontinuerlig. På Android og iPhone ber appen ikke engang om tillatelse til posisjon i bakgrunnen.',
      ],
      changeTitle: 'Hva som endrer seg',
      change: [
        'Hvis det blir uenighet om timene, finnes det et klokkeslett registrert ved en handling fra din side, som ikke avhenger av noens hukommelse.',
        'Kontoret ser stemplingene idet de kommer inn: skjermen heter Dagens stemplinger og viser dem som er gjort, ikke hvor noen befinner seg akkurat nå.',
      ],
      extra: {
        title: 'Hva som blir igjen av posisjonene, og hvor lenge',
        paragraphs: [
          'I registeret slettes posisjonene etter tolv måneder, en periode som bedriften kan forkorte ned til tretti dager.',
          'I rapporter som allerede er levert blir de stående, fordi de er forseglede dokumenter, og de følger oppbevaringsfristen i loven: etter fem år slettes pakken. En levert rapport er et øyeblikksbilde: den oppdateres ikke og kan ikke røres uten å bryte forseglingen som gjør den verifiserbar.',
        ],
      },
    },
    {
      kicker: 'Oppdragsgiveren',
      heading: 'Hvis du er oppdragsgiveren',
      scene: '«De sier at jobben er gjort. Hvordan kan jeg vite det uten å bare stole på dem?»',
      haveTitle: 'Hva du gjør',
      have: [
        'Du får en lenke til rapporten og kontrollerer den selv, på nett eller med den frakoblede verifikatoren: én enkelt fil som ikke kobler til internett og har den offentlige nøkkelen i seg.',
        'Kontrollen regner ut avtrykkene for hver hendelse og hvert bilde på nytt og verifiserer signaturen. Verifiseringssiden viser to adskilte ting: om dokumentet er intakt, og signaturen.',
        'Det fungerer også om mange år, selv uten GeoTapp: den som har pakken og verifikatoren kan gjøre kontrollen om igjen.',
      ],
      changeTitle: 'Hva det viser, og hva det ikke viser',
      change: [
        FORMULA,
        '«Intakt dokument» betyr at det ikke er manipulert. Det er signaturen, som ikke kan lages om uten nøkkelen, som sier at pakken er utstedt av oss.',
      ],
    },
  ],
  sample: {
    heading: 'Prøv med en ekte rapport',
    paragraphs: [
      'Under ligger en eksempelrapport, et bytte av el-tavle. Last den ned og kontroller den i din egen nettleser: verifiseringen kjører hos deg, og filen blir ikke sendt til oss.',
    ],
  },
  limits: {
    heading: 'Hva GeoTapp ikke gjør',
    items: [
      'Sporer ikke kontinuerlig, ikke engang om man ville: på Android og iPhone ber appen ikke om tillatelse til posisjon i bakgrunnen.',
      'Beviser ikke, alene, at hendelsen fant sted: kontrollen sier bare om pakken er endret etter levering.',
      'Lover ikke at klager forsvinner: det som endrer seg, er hva du møter opp med når de kommer.',
      'Erstatter ikke en arbeidsrettsrådgiver, personvernombudet, avtalene med arbeidstakernes representanter eller tillatelsene som lovgivningen i landet ditt kan kreve.',
    ],
    formula: FORMULA,
  },
  faq: {
    title: 'Ofte stilte spørsmål',
    items: [
      {
        q: 'Er en GeoTapp-rapport nok til å vinne en tvist?',
        a: 'Ikke alene. Rapporten viser hva som er registrert og lar hvem som helst kontrollere at den ikke er endret etter levering; den beviser ikke, alene, at hendelsen fant sted, og den er ikke juridisk rådgivning. Det er et ordnet og verifiserbart dokument i stedet for en hukommelse mot en annen.',
      },
      {
        q: 'Sporer GeoTapp de ansatte i løpet av dagen?',
        a: 'Nei. Posisjonen registreres bare når den som jobber gjør en handling: oppmøte, start og slutt på pause, avslutning, bevisbilde. Mellom én stempling og den neste registreres ingen posisjon automatisk og kontinuerlig. På Android og iPhone ber appen ikke engang om tillatelse til posisjon i bakgrunnen.',
      },
      {
        q: 'Må oppdragsgiveren stole på GeoTapp for å kontrollere rapporten?',
        a: 'Nei. Den frakoblede verifikatoren er én enkelt fil som ikke kobler til internett og har den offentlige nøkkelen i seg: den regner ut avtrykkene på nytt og kontrollerer signaturen også om mange år, selv uten GeoTapp. Kontrollen sier om pakken er endret, ikke om hendelsen fant sted.',
      },
      {
        q: 'Hva skjer med posisjonene etter levering?',
        a: 'I registeret slettes de etter tolv måneder, en periode som bedriften kan forkorte ned til tretti dager. I rapporter som allerede er levert blir de stående, fordi de er forseglede dokumenter, og de følger oppbevaringsfristen i loven: etter fem år slettes pakken.',
      },
      {
        q: 'Hvor ligger dataene?',
        a: 'Arbeidsdataene og bildene ligger på servere i Den europeiske union.',
      },
      {
        q: 'Erstatter GeoTapp arbeidsrettsrådgiveren eller avtalene med de ansattes representanter?',
        a: 'Nei. GeoTapp hjelper deg å holde deg innenfor rammene i personvernreglene (GDPR), men erstatter ikke en rådgiver, personvernombudet, avtalene med arbeidstakernes representanter eller tillatelsene som lovgivningen i landet ditt kan kreve.',
      },
    ],
  },
  next: {
    heading: 'Veien videre',
    paragraph: 'Vil du se funksjon for funksjon hva som ligger i GeoTapp, eller prisene, finner du det her.',
    featuresLabel: 'Hva GeoTapp gjør, funksjon for funksjon →',
    pricingLabel: 'Se prisene →',
  },
  card: {
    title: 'Hva som endrer seg når noen bestrider arbeidet',
    text: 'Bedriften, den som jobber og oppdragsgiveren side om side.',
    cta: 'Les siden',
  },
  disclaimer:
    'Denne siden beskriver hva GeoTapp gjør og er ikke juridisk rådgivning. For din konkrete situasjon bør du kontakte en arbeidsrettsrådgiver eller et personvernombud.',
};

export default nb;
