import type { NovitaCopy } from './types';

const copy: NovitaCopy = {
  ui: {
    kicker: 'Nyheter',
    flowCaption: 'Flow, chefens panel',
    phoneCaption: 'TimeTracker, i telefonen',
    altFlow: 'Flow, chefens panel: skärmbild av {tool}',
    altPhone: 'TimeTracker i telefonen: skärmbild av {tool}',
    flowOnly: 'Det här verktyget används i Flow-panelen: ingenting behövs i telefonerna hos dina medarbetare.',
    seeAlso: 'För elkontroller, pannor och F-gas finns särskilda verktyg:',
    moreShots: 'Fler skärmbilder från det här verktyget',
    enlarge: 'Förstora: {name}',
    close: 'Stäng',
    prev: 'Föregående',
    next: 'Nästa',
    allSectors: 'För alla branscher',
  },
  sections: {
    sicurezza: {
      title: 'Nya verktyg för bevakning: ronder, ensamarbete, skiftöverlämning och Nödlägen',
      intro: 'När du väljer bransch slår GeoTapp bara på verktygen för ditt yrke. För bevakning är det tre, plus modulen Nödlägen som gäller alla branscher. Varje verktyg har en del i Flow, där du bestämmer och följer upp, och en del i väktarens telefon.',
    },
    pulizie: {
      title: 'Nya verktyg för städning: kvalitetskontroll och säkerhetsdatablad',
      intro: 'Två verktyg för de reklamationer och kontroller som ett städföretag möter varje vecka. De slås på när du anger bransch, resten förblir dolda.',
    },
    elettricisti: {
      title: 'Nya verktyg för elektriker: mätningar vid slutkontroll och påminnelser om periodiska kontroller',
      intro: 'För dig som avslutar en installation och för dig som ska komma ihåg kundernas återkommande kontroller. GeoTapp samlar in, sammanställer och påminner: kontrollerna, dokumentationen och underskriften ligger kvar hos den som utför dem.',
    },
    edilizia: {
      title: 'Nya verktyg för bygg: företagens handlingar och timmar per bygge',
      intro: 'Två verktyg för dig som samordnar byggen med underentreprenörer och har papperen i ordning till nästa möte. De används i Flow, chefens panel.',
    },
    idraulici: {
      title: 'Nya verktyg för rörmokare och VVS: panncontroller och F-gasregister',
      intro: 'Jobbet som kommer tillbaka varje år och som glöms just när det behövs: att höra av sig till kunderna om kontrollen av anläggningen och hålla ordning på utrustning med fluorerade gaser.',
    },
    installatori: {
      title: 'Nya verktyg för installatörer: leverans med underskrift och lagret i bilen',
      intro: 'Två verktyg för det som kostar tid på varje jobb: att avsluta leveransen med kunden och veta vad som verkligen finns i bilen.',
    },
    manutenzione: {
      title: 'Nya verktyg för underhåll: svarstider och QR på utrustningen',
      intro: 'För dig som arbetar med serviceavtal och många maskiner utspridda över flera fastigheter: att veta hur lång tid som finns kvar för varje ärende och hitta en maskins historik med ett tryck.',
    },
    impianti: {
      title: 'Nya verktyg för installatörer: leverans med underskrift och lagret i bilen',
      intro: 'Den här sidan vänder sig till dig som monterar och lämnar över installationer av alla slag. Därför finns här de två verktyg som passar alla: leverans med underskrift och lagret i bilen. Elkontroller och panncontroller är egna yrken och har egna verktyg.',
    },
  },
  tools: {
    giro_ronda: {
      title: 'Ronder',
      body: 'Klockan är tre på natten och kunden vill veta om ronden gick förbi alla punkter på lagret. I Flow ritar du ut punkterna på kartan och lägger in rundorna med tider. Väktaren trycker på «Passage» i telefonen vid varje punkt. På morgonen har du nattens rapport, färdig.',
      note: 'Positionen läses bara av i det ögonblick väktaren trycker på «Passage»: mellan två punkter registreras ingenting.',
    },
    lavoratore_isolato: {
      title: 'Ensamarbete',
      body: 'En väktare ensam på ett objekt, på natten. För varje plats väljer du en plan med det intervall du vill ha: med de mellanrummen frågar telefonen «Är allt bra?», och om svaret uteblir larmas koordinatorn. I Flow ser du pågående skift och en historik över vem som svarat och när.',
      note: 'Ingen position skickas. Det är ett stöd och ersätter inte de säkerhetsåtgärder som krävs för den som arbetar ensam.',
    },
    consegne_turno: {
      title: 'Skiftöverlämning',
      body: 'Klockan sex lämnar nattväktaren objektet till dagväktaren. Förr var det nycklar i en låda och ett röstmeddelande. Nu skriver väktaren vid skiftets slut anteckningar, nycklar och avvikelser till den som kommer, och den tar över dem i sin telefon. I Flow ser du överlämningar som inte tagits emot och öppna avvikelser. Historiken går inte att ändra.',
    },
    emergenze: {
      title: 'Nödlägen och övningar',
      body: 'Utrymningsövning i en byggnad eller på ett evenemang: koordinatorn väljer scenario och trycker på planritningen där faran finns. Alla i gruppen får sin roll i telefonen, vad de ska göra och utgångarna i ordning, och svarar med ett tryck: närvarande, på väg, kan inte. Översikten visar vem som svarat och efter hur lång tid. Planerna går att öppna även utan nät.',
      note: 'Det är ett verktyg för samordning och övning: det ersätter eller godkänner inte din egen nödlägesplan, och en avisering kan utebli, därför bekräftar var och en.',
    },
    qualita_pulizie: {
      title: 'Kvalitetskontroll',
      body: 'Kundens kontaktperson säger att tredje våningen inte städats ordentligt. Arbetsledaren går runt i området med en lista med punkter, markerar godkänd, ej godkänd eller ej tillämplig och lägger till ett foto. I Flow har varje punkt en vikt från 1 till 3, månadens poäng räknas per objekt och område, och vid månadsskiftet kommer en PDF att visa kunden, med öppna åtgärder.',
    },
    schede_consumi: {
      title: 'Säkerhetsdatablad och förbrukning',
      body: 'Den som kontrollerar vill se säkerhetsdatabladet för produkten som står på vagnen. I Flow har varje objekt sina produkter, var och en med databladet som PDF, och du ser månadens uttag och kostnader. I telefonen går databladen att läsa även utan täckning, och uttaget registreras på stället.',
    },
    verifiche_misure: {
      title: 'Kontroller och mätningar',
      body: 'Elcentralen är stängd, sista arbetsdagen: genomgångskontroll, isolationsresistans, jordfelsbrytare, skyddsjord. Elinstallatören lägger in varje mätvärde i telefonen med resultat och foto av instrumentet. Flow samlar mätningarna per uppdrag och sammanställer dem som underlag till slutkontrollen och dokumentationen.',
      note: 'GeoTapp samlar och sammanställer: det kontrollerar, godkänner eller garanterar ingenting. Slutkontroll, egenkontroll och underskrift ligger kvar hos det registrerade elinstallationsföretaget.',
    },
    impianti_terra: {
      title: 'Påminnelser om periodiska elkontroller',
      body: 'För varje kund lägger du in datum för senaste kontrollen av anläggningen och när nästa ska göras. Flow påminner dig i förväg, så att du inte upptäcker det först när tiden gått ut.',
      note: 'Datumen lägger ditt företag in själv. Det finns ingen fast lagstadgad tidsgräns som GeoTapp utgår från: intervallet bestämmer fastighetsägaren utifrån sin riskbedömning. GeoTapp påminner, utför ingen kontroll och säger inte om en kontroll är giltig.',
    },
    documenti_imprese: {
      title: 'Företagens handlingar',
      body: 'Innan en underentreprenör släpps in på bygget vill du ha handlingarna i ordning och komma ihåg när de går ut. Flow håller en lista över varje underentreprenörs och entreprenörs handlingar, med datum, och påminner dig i förväg.',
      note: 'Det påminner före utgångsdatum men säger inte om en handling är giltig: det kontrollerar du själv, eller din rådgivare.',
    },
    congruita: {
      title: 'Timmar per bygge',
      body: 'När bygget är klart vill revisorn eller kalkylatorn veta hur mycket arbetstid som gick åt. Flow gör en intern uppskattning för varje bygge utifrån de registrerade timmarna och exporterar den som CSV eller PDF, färdig att skicka vidare.',
      note: 'Det är en intern uppskattning, inte någon officiell beräkning eller något krav: i Sverige finns ingen skyldighet att visa en viss andel arbetskostnad.',
    },
    caldaie: {
      title: 'Panncontroller',
      body: 'September: flera kunder har kontrollen som snart går ut. Flow visar vilka anläggningar du ska höra av dig om den här månaden och gör ett utkast till meddelandet, som bara skickas om du skickar det. I telefonen har teknikern listan över anläggningar med datum och fyller i kontrollrapporten med mätvärdena.',
      note: 'Det finns inget nationellt register för pannor. Sotning och brandskyddskontroll ordnas av kommunen, och GeoTapp rapporterar ingenting till någon myndighet: det samlar och sammanställer uppgifterna, kontrollerar eller garanterar ingenting.',
    },
    fgas: {
      title: 'F-gasregister',
      body: 'En apparat med fluorerade gaser har en fyllnadsmängd, en CO2-ekvivalent och en historik av åtgärder. I Flow ser du apparaterna, och i telefonen öppnar teknikern registret och lägger till en ny åtgärd direkt, utan att skriva av det på kvällen.',
      note: 'Behörigheten (certifikatet för tekniker) och eventuella rapporter ligger hos teknikern eller företaget: GeoTapp skickar ingenting till någon myndighet.',
    },
    consegna_firma: {
      title: 'Leverans med underskrift',
      body: 'Monteringen är klar. Teknikern skannar streckkoden på varje serienummer med telefonen, tar slutbilder och låter kunden skriva under på skärmen. Ut kommer ett protokoll som PDF med din logotyp, företagets uppgifter och streckkoden för varje serienummer, och det hamnar i jobbets rapport. I Flow ser du månadens leveranser och väljer protokollets utseende: logotyp, uppgifter, texter, färg.',
    },
    magazzino_furgone: {
      title: 'Lagret i bilen',
      body: 'Teknikern kommer fram till kunden och upptäcker att rätt koppling saknas. I telefonen ser teknikern vad som finns i bilen och vad som håller på att ta slut, och noterar använt material på varje uppdrag. I Flow sätter du gränser per bil, ser vad som ska beställas och vad materialet kostade på varje jobb.',
    },
    sla: {
      title: 'Svarstider (SLA)',
      body: 'Avtalet med bostadsrättsföreningen säger inom hur lång tid ett ärende ska tas emot och inom hur lång tid det ska lösas. I Flow visar varje ärende tiden som återstår för båda, per avtal, och vid månadsskiftet finns en rapport. I telefonen ser teknikern sina tilldelade ärenden, tar emot dem och markerar dem som lösta.',
    },
    qr_apparecchi: {
      title: 'QR på utrustningen',
      body: 'Framför en pump eller en central skannar teknikern QR-etiketten och har direkt utrustningens historik och åtgärder. Den som skannar utan konto, till exempel en hyresgäst, kan anmäla ett problem. I Flow hanterar du utrustningen och skriver ut etiketterna.',
    },
  },
  shots: {
    flow_emergenze_attiva: 'Flow: koordinatorn väljer scenario och trycker på planritningen där faran finns för att starta övningen',
    flow_emergenze_evento: 'Flow: översikt över pågående övning, med vem som svarat och efter hur lång tid',
    flow_emergenze_evento_persone: 'Flow: listan över personerna i gruppen med deras svar: närvarande, på väg eller kan inte',
    flow_emergenze_sito: 'Flow: objektets planritning med utgångar, utrustning och zoner',
    flow_emergenze_protocolli: 'Flow: rutinerna per scenario och roll',
    flow_emergenze_squadre: 'Flow: grupperna med intyg, och den som saknas markeras',
    flow_emergenze_scadenzario: 'Flow: datumlista för intyg och kontroller av utrustningen',
    tt_emergenze_dashboard: 'Telefon: startskärmen med meddelandet om övning',
    tt_emergenze_indicazioni: 'Telefon: de personliga anvisningarna, med rollen och vad som ska göras',
    tt_emergenze_indicazioni_2: 'Telefon: utgångarna i ordning, utan de som är blockerade',
    tt_emergenze_risposta: 'Telefon: svaret med ett tryck: närvarande, på väg eller kan inte',
    tt_emergenze_piani: 'Telefon: planerna, som går att läsa även utan nät',
  },
};

export default copy;
