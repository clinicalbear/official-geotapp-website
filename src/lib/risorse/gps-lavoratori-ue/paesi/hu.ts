/**
 * Scheda-paese Ungheria per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * art. 11/A del Codice del lavoro ungherese (Mt.), guida del NAIH sui trattamenti
 * sul luogo di lavoro (incluso il GPS), lista NAIH dei trattamenti che richiedono
 * una valutazione d'impatto, decisione NAIH del caso Auchan (NAIH/2018/412/2/H)
 * e GDPR.
 *
 * L'Ungheria ha un'unica autorita nazionale, il NAIH: nessuna ripartizione
 * regionale. Nessun numero, URL o autorita e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_MT_11A = {
  titolo: 'Codice del lavoro (Mt.), art. 9 (diritti della persona) e art. 11/A (controllo dei lavoratori)',
  url: 'https://net.jogtar.hu/jogszabaly?docid=a1200001.tv',
};
const FONTE_NAIH_GUIDA = {
  titolo: 'NAIH, guida sui trattamenti sul luogo di lavoro (novembre 2016, precedente al GDPR), par. 5 sul GPS',
  url: 'https://www.naih.hu/files/2016_11_15_Tajekoztato_munkahelyi_adatkezelesek.pdf',
};
const FONTE_NAIH_DPIA = {
  titolo:
    "NAIH, lista dei trattamenti che richiedono una valutazione d'impatto",
  url: 'https://www.naih.hu/hatasvizsgalati-lista',
};
const FONTE_NAIH_AUCHAN = {
  titolo: 'NAIH, sanzione Auchan (monitoraggio dei dipendenti)',
  url: 'https://www.naih.hu/files/NAIH-2018-412-H_hatarozat.pdf',
};
const FONTE_NAIH = {
  titolo: 'NAIH (Garante ungherese), pagina ufficiale',
  url: 'https://www.naih.hu',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const ungheria: SchedaPaese = {
  codiceISO: 'HU',
  slugCanonico: 'ungheria',
  nome: 'Ungheria',
  nomi: {
    it: 'Ungheria',
    en: 'Hungary',
    'en-us': 'Hungary',
    'en-gb': 'Hungary',
    'en-au': 'Hungary',
    'en-ie': 'Hungary',
    'en-ca': 'Hungary',
    de: 'Ungarn',
    nl: 'Hongarije',
    fr: 'Hongrie',
    es: 'Hungría',
    pt: 'Hungria',
    da: 'Ungarn',
    sv: 'Ungern',
    nb: 'Ungarn',
    ru: 'Венгрия',
  },
  bandiera: '🇭🇺',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: {
      it: 'NAIH (Garante ungherese per la protezione dei dati)',
      en: 'NAIH (Hungarian Data Protection Authority)',
      de: 'NAIH (Ungarische Datenschutzbehörde)',
      fr: 'NAIH (Autorité hongroise de protection des données)',
      es: 'NAIH (Autoridad húngara de protección de datos)',
      nl: 'NAIH (Hongaarse gegevensbeschermingsautoriteit)',
      pt: 'NAIH (Autoridade húngara de proteção de dados)',
      da: 'NAIH (Ungarsk databeskyttelsesmyndighed)',
      sv: 'NAIH (Ungerska dataskyddsmyndigheten)',
      nb: 'NAIH (Ungarsk datatilsyn)',
      ru: 'NAIH (Венгерский орган по защите данных)',
    },
    portale: FONTE_NAIH.url,
    urlFonte: FONTE_NAIH.url,
    verificatoIl: '2026-09-30',
    note: {
      it: "L'Ungheria ha un'unica autorità nazionale, il NAIH; nessuna ripartizione regionale.",
      en: 'Hungary has a single national authority, the NAIH; there is no regional breakdown.',
      de: 'Ungarn hat eine einzige nationale Behörde, die NAIH; es gibt keine regionale Aufteilung.',
      fr: 'La Hongrie dispose d’une seule autorité nationale, la NAIH ; il n’y a pas de répartition régionale.',
      es: 'Hungría tiene una única autoridad nacional, la NAIH; no hay reparto regional.',
      pt: "A Hungria tem uma única autoridade nacional, a NAIH; não existe repartição regional.",
      da: 'Ungarn har én national myndighed, NAIH; der er ingen regional opdeling.',
      sv: 'Ungern har en enda nationell myndighet, NAIH; det finns ingen regional uppdelning.',
      nb: 'Ungarn har én nasjonal myndighet, NAIH; det finnes ingen regional inndeling.',
      nl: 'Hongarije heeft één nationale autoriteit, de NAIH; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione scritta e preventiva ai lavoratori sul monitoraggio e i mezzi tecnici (Codice del lavoro art. 11/A)',
        en: 'Prior written information to workers on the monitoring and the technical means (Labour Code art. 11/A)',
        de: 'Vorherige schriftliche Information der Arbeitnehmer über die Überwachung und die technischen Mittel (Arbeitsgesetzbuch Art. 11/A)',
        fr: 'Information écrite et préalable des travailleurs sur la surveillance et les moyens techniques (Code du travail art. 11/A)',
        es: 'Información escrita y previa a los trabajadores sobre la vigilancia y los medios técnicos (Código del trabajo art. 11/A)',
        pt: "Informação escrita e prévia aos trabalhadores sobre a monitorização e os meios técnicos (Código do Trabalho, art. 11/A)",
        da: 'Forudgående skriftlig information til medarbejderne om overvågningen og de tekniske midler (arbejdsloven art. 11/A)',
        sv: 'Skriftlig information i förväg till arbetstagarna om övervakningen och de tekniska medlen (arbetslagen art. 11/A)',
        nb: 'Skriftlig forhåndsinformasjon til arbeidstakerne om overvåkingen og de tekniske midlene (arbeidsloven art. 11/A)',
        nl: 'Voorafgaande schriftelijke informatie aan werknemers over de monitoring en de technische middelen (Arbeidswetboek art. 11/A)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il lavoratore può essere controllato solo per condotte connesse al rapporto di lavoro; il datore può usare mezzi tecnici, ma deve informarlo prima e per iscritto.',
        en: 'The worker may be monitored only for conduct connected with the employment relationship; the employer may use technical means but must inform the worker beforehand and in writing.',
        de: 'Der Arbeitnehmer darf nur wegen Verhaltensweisen kontrolliert werden, die mit dem Arbeitsverhältnis zusammenhängen; der Arbeitgeber darf technische Mittel einsetzen, muss ihn jedoch vorab und schriftlich informieren.',
        fr: 'Le travailleur ne peut être contrôlé que pour des comportements liés à la relation de travail ; l’employeur peut utiliser des moyens techniques, mais il doit l’informer au préalable et par écrit.',
        es: 'El trabajador solo puede ser controlado por conductas relacionadas con la relación laboral; el empleador puede usar medios técnicos, pero debe informarle antes y por escrito.',
        pt: "O trabalhador só pode ser controlado por comportamentos relacionados com a relação de trabalho; a entidade empregadora pode utilizar meios técnicos, mas deve informá-lo previamente e por escrito.",
        da: 'Medarbejderen må kun kontrolleres for adfærd, der har forbindelse med ansættelsesforholdet; arbejdsgiveren kan bruge tekniske midler, men skal informere medarbejderen på forhånd og skriftligt.',
        sv: 'Arbetstagaren får endast kontrolleras för handlingar som har samband med anställningsförhållandet; arbetsgivaren får använda tekniska medel, men måste informera arbetstagaren i förväg och skriftligen.',
        nb: 'Arbeidstakeren kan bare kontrolleres for handlinger som har sammenheng med arbeidsforholdet; arbeidsgiveren kan bruke tekniske midler, men må informere arbeidstakeren på forhånd og skriftlig.',
        nl: 'De werknemer mag alleen worden gecontroleerd voor gedragingen die verband houden met de arbeidsrelatie; de werkgever mag technische middelen gebruiken, maar moet hem vooraf en schriftelijk informeren.',
      },
      fonte: FONTE_MT_11A,
    },
    {
      voce: {
        it: 'Il monitoraggio riguarda solo condotte connesse al rapporto di lavoro; le restrizioni ai diritti della persona solo se strettamente necessarie e proporzionate (art. 11/A e art. 9)',
        en: 'The monitoring concerns only conduct connected with the employment relationship; restrictions on personality rights only where strictly necessary and proportionate (art. 11/A and art. 9)',
        de: 'Die Überwachung betrifft nur Verhaltensweisen, die mit dem Arbeitsverhältnis zusammenhängen; Einschränkungen der Persönlichkeitsrechte nur, wenn unbedingt erforderlich und verhältnismäßig (Art. 11/A und Art. 9)',
        fr: 'La surveillance ne porte que sur des comportements liés à la relation de travail ; les restrictions aux droits de la personnalité ne sont admises que si elles sont strictement nécessaires et proportionnées (art. 11/A et art. 9)',
        es: 'La vigilancia se refiere solo a conductas relacionadas con la relación laboral; las restricciones a los derechos de la personalidad solo si son estrictamente necesarias y proporcionadas (art. 11/A y art. 9)',
        pt: "A monitorização diz respeito apenas a comportamentos relacionados com a relação de trabalho; as restrições aos direitos da personalidade só se forem estritamente necessárias e proporcionadas (art. 11/A e art. 9)",
        da: 'Overvågningen angår kun adfærd, der har forbindelse med ansættelsesforholdet; begrænsninger i personlighedsrettighederne kun hvor det er strengt nødvendigt og proportionalt (art. 11/A og art. 9)',
        sv: 'Övervakningen gäller endast handlingar som har samband med anställningsförhållandet; inskränkningar i personlighetsrättigheterna endast när det är strikt nödvändigt och proportionerligt (art. 11/A och art. 9)',
        nb: 'Overvåkingen gjelder bare handlinger som har sammenheng med arbeidsforholdet; begrensninger i personlighetsrettighetene bare når det er strengt nødvendig og forholdsmessig (art. 11/A og art. 9)',
        nl: 'De monitoring betreft alleen gedragingen die verband houden met de arbeidsrelatie; beperkingen van persoonlijkheidsrechten alleen als ze strikt noodzakelijk en evenredig zijn (art. 11/A en art. 9)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il lavoratore è controllabile solo nell'ambito della condotta connessa al rapporto di lavoro (art. 11/A c. 1). Una restrizione dei suoi diritti della persona è ammessa solo se strettamente necessaria per un motivo direttamente legato alla finalità del rapporto e proporzionata; il datore deve informarlo prima e per iscritto su modalità, condizioni e durata prevista e sulle circostanze che provano necessità e proporzionalità (art. 9 c. 2). Sui dispositivi informatici forniti dal datore può guardare solo i dati connessi al lavoro (art. 11/A c. 3).",
        en: 'The worker may be monitored only within conduct connected with the employment relationship (art. 11/A par. 1). A restriction of personality rights is allowed only if strictly necessary for a reason directly connected with the purpose of the employment relationship and proportionate; the employer must inform the worker beforehand and in writing of the manner, conditions and expected duration and of the circumstances showing necessity and proportionality (art. 9 par. 2). On IT devices provided by the employer it may look only at work-related data (art. 11/A par. 3).',
        de: 'Der Arbeitnehmer darf nur im Rahmen seines mit dem Arbeitsverhältnis zusammenhängenden Verhaltens kontrolliert werden (Art. 11/A Abs. 1). Eine Einschränkung seiner Persönlichkeitsrechte ist nur zulässig, wenn sie aus einem unmittelbar mit dem Zweck des Arbeitsverhältnisses zusammenhängenden Grund unbedingt erforderlich und verhältnismäßig ist; der Arbeitgeber muss ihn vorab schriftlich über Art, Bedingungen und voraussichtliche Dauer sowie über die Umstände informieren, die Erforderlichkeit und Verhältnismäßigkeit belegen (Art. 9 Abs. 2). Auf vom Arbeitgeber bereitgestellten IT-Geräten darf er nur arbeitsbezogene Daten einsehen (Art. 11/A Abs. 3).',
        fr: 'Le travailleur ne peut être contrôlé que dans le cadre de son comportement lié à la relation de travail (art. 11/A par. 1). Une restriction de ses droits de la personnalité n’est admise que si elle est strictement nécessaire pour un motif directement lié à la finalité de la relation de travail et proportionnée ; l’employeur doit l’informer au préalable et par écrit des modalités, des conditions et de la durée prévue ainsi que des circonstances établissant la nécessité et la proportionnalité (art. 9 par. 2). Sur les appareils informatiques fournis par l’employeur, il ne peut consulter que les données liées au travail (art. 11/A par. 3).',
        es: 'El trabajador solo puede ser controlado dentro de su conducta relacionada con la relación laboral (art. 11/A apdo. 1). Una restricción de sus derechos de la personalidad solo es admisible si es estrictamente necesaria por un motivo directamente ligado a la finalidad de la relación laboral y proporcionada; el empleador debe informarle antes y por escrito de la forma, las condiciones y la duración prevista y de las circunstancias que demuestran la necesidad y la proporcionalidad (art. 9 apdo. 2). En los dispositivos informáticos facilitados por el empleador solo puede consultar los datos relacionados con el trabajo (art. 11/A apdo. 3).',
        pt: "O trabalhador só pode ser controlado no âmbito do comportamento relacionado com a relação de trabalho (art. 11/A, n.º 1). Uma restrição dos seus direitos da personalidade só é admitida se for estritamente necessária por um motivo diretamente ligado à finalidade da relação de trabalho e proporcionada; a entidade empregadora deve informá-lo previamente e por escrito sobre as modalidades, as condições e a duração prevista e sobre as circunstâncias que provam a necessidade e a proporcionalidade (art. 9, n.º 2). Nos dispositivos informáticos fornecidos pela entidade empregadora, esta só pode consultar os dados relacionados com o trabalho (art. 11/A, n.º 3).",
        da: 'Medarbejderen må kun kontrolleres inden for adfærd, der har forbindelse med ansættelsesforholdet (art. 11/A, stk. 1). En begrænsning af medarbejderens personlighedsrettigheder er kun tilladt, hvis den er strengt nødvendig af en grund, der direkte knytter sig til ansættelsesforholdets formål, og er proportional; arbejdsgiveren skal på forhånd og skriftligt informere medarbejderen om fremgangsmåde, betingelser og forventet varighed og om de omstændigheder, der viser nødvendighed og proportionalitet (art. 9, stk. 2). På it-enheder, som arbejdsgiveren stiller til rådighed, må arbejdsgiveren kun se arbejdsrelaterede data (art. 11/A, stk. 3).',
        sv: 'Arbetstagaren får endast kontrolleras inom ramen för handlingar som har samband med anställningsförhållandet (art. 11/A st. 1). En inskränkning av hens personlighetsrättigheter är endast tillåten om den är strikt nödvändig av ett skäl som direkt hänger samman med anställningsförhållandets syfte och är proportionerlig; arbetsgivaren ska i förväg och skriftligen informera arbetstagaren om tillvägagångssätt, villkor och förväntad varaktighet samt om de omständigheter som visar nödvändighet och proportionalitet (art. 9 st. 2). På it-enheter som arbetsgivaren tillhandahåller får arbetsgivaren endast titta på arbetsrelaterade uppgifter (art. 11/A st. 3).',
        nb: 'Arbeidstakeren kan bare kontrolleres innenfor rammen av handlinger som har sammenheng med arbeidsforholdet (art. 11/A nr. 1). En begrensning av vedkommendes personlighetsrettigheter er bare tillatt hvis den er strengt nødvendig av en grunn som er direkte knyttet til arbeidsforholdets formål og er forholdsmessig; arbeidsgiveren må på forhånd og skriftlig informere arbeidstakeren om fremgangsmåte, vilkår og forventet varighet, og om omstendighetene som viser nødvendighet og forholdsmessighet (art. 9 nr. 2). På IT-enheter som arbeidsgiveren stiller til rådighet, kan arbeidsgiveren bare se på arbeidsrelaterte data (art. 11/A nr. 3).',
        nl: 'De werknemer mag alleen worden gecontroleerd binnen zijn gedrag dat verband houdt met de arbeidsrelatie (art. 11/A lid 1). Een beperking van zijn persoonlijkheidsrechten is alleen toegestaan als ze strikt noodzakelijk is om een reden die rechtstreeks met het doel van de arbeidsrelatie samenhangt en evenredig is; de werkgever moet hem vooraf schriftelijk informeren over de wijze, de voorwaarden en de verwachte duur en over de omstandigheden die noodzaak en evenredigheid aantonen (art. 9 lid 2). Op door de werkgever verstrekte IT-apparatuur mag hij alleen werkgerelateerde gegevens inzien (art. 11/A lid 3).',
      },
      fonte: FONTE_MT_11A,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: 'Autorisation préalable d’une autorité avant l’installation',
        es: 'Autorización previa de una autoridad antes de instalar',
        pt: "Autorização prévia de uma autoridade antes da instalação",
        da: 'Forudgående tilladelse fra en myndighed før installation',
        sv: 'Förhandstillstånd från en myndighet innan installation',
        nb: 'Forhåndstillatelse fra en myndighet før installasjon',
        nl: 'Voorafgaande toestemming van een autoriteit vóór installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: 'Non serve un\'autorizzazione preventiva del NAIH; il datore valuta da sé base giuridica e proporzionalità prima dell\'introduzione.',
        en: 'No prior authorisation from the NAIH is required; the employer assesses the legal basis and proportionality itself before introduction.',
        de: 'Eine vorherige Genehmigung der NAIH ist nicht erforderlich; der Arbeitgeber prüft die Rechtsgrundlage und die Verhältnismäßigkeit vor der Einführung selbst.',
        fr: 'Aucune autorisation préalable de la NAIH n’est nécessaire ; l’employeur évalue lui-même la base juridique et la proportionnalité avant l’introduction.',
        es: 'No se necesita una autorización previa del NAIH; el empleador evalúa por sí mismo la base jurídica y la proporcionalidad antes de la introducción.',
        pt: "Não é necessária autorização prévia da NAIH; a entidade empregadora avalia por si a base jurídica e a proporcionalidade antes da introdução.",
        da: 'Der kræves ingen forudgående tilladelse fra NAIH; arbejdsgiveren vurderer selv retsgrundlag og proportionalitet før indførelsen.',
        sv: 'Något förhandstillstånd från NAIH krävs inte; arbetsgivaren bedömer själv rättslig grund och proportionalitet före införandet.',
        nb: 'Det kreves ingen forhåndstillatelse fra NAIH; arbeidsgiveren vurderer selv rettslig grunnlag og forholdsmessighet før innføringen.',
        nl: 'Er is geen voorafgaande toestemming van de NAIH vereist; de werkgever beoordeelt zelf de rechtsgrondslag en de evenredigheid vóór de invoering.',
      },
      fonte: FONTE_GDPR,
    },
    {
      voce: {
        it: 'Base = interesse legittimo con test di bilanciamento documentato; GPS solo in orario, non fuori orario, con opt-out',
        en: 'Basis = legitimate interest with a documented balancing test; GPS only during working hours, not off duty, with opt-out',
        de: 'Grundlage = berechtigtes Interesse mit dokumentierter Abwägungsprüfung; GPS nur während der Arbeitszeit, nicht außerhalb der Dienstzeit, mit Opt-out',
        fr: 'Base = intérêt légitime avec test de mise en balance documenté ; GPS uniquement pendant les heures de travail, pas hors service, avec opt-out',
        es: 'Base = interés legítimo con test de ponderación documentado; GPS solo en horario de trabajo, no fuera de servicio, con opción de exclusión',
        pt: "Base = interesse legítimo com teste de ponderação documentado; GPS apenas no horário de trabalho, não fora do horário, com possibilidade de desativação",
        da: 'Grundlag = legitim interesse med en dokumenteret afvejningstest; GPS kun i arbejdstiden, ikke uden for arbejdstiden, med mulighed for fravalg',
        sv: 'Grund = berättigat intresse med ett dokumenterat intresseavvägningstest; GPS endast under arbetstid, inte utanför arbetstid, med möjlighet att avstå',
        nb: 'Grunnlag = berettiget interesse med en dokumentert interesseavveining; GPS bare i arbeidstiden, ikke utenfor arbeidstid, med mulighet til å velge bort',
        nl: 'Grondslag = gerechtvaardigd belang met een gedocumenteerde belangenafweging; GPS alleen tijdens werktijd, niet buiten diensttijd, met opt-out',
      },
      risposta: 'si',
      dettaglio: {
        it: 'La base è l\'interesse legittimo, non il consenso; il datore deve svolgere prima il test di bilanciamento. Per il NAIH il GPS localizza il veicolo per il lavoro, non segue il lavoratore: solo in orario, niente controllo fuori orario, e il lavoratore deve poterlo spegnere.',
        en: 'The basis is legitimate interest, not consent; the employer must first carry out the balancing test. For the NAIH the GPS locates the vehicle for work, it does not track the worker: only during working hours, no monitoring off duty, and the worker must be able to switch it off.',
        de: 'Die Grundlage ist das berechtigte Interesse, nicht die Einwilligung; der Arbeitgeber muss zuerst die Abwägungsprüfung durchführen. Für die NAIH ortet das GPS das Fahrzeug für die Arbeit, es verfolgt nicht den Arbeitnehmer: nur während der Arbeitszeit, keine Überwachung außerhalb der Dienstzeit, und der Arbeitnehmer muss es ausschalten können.',
        fr: 'La base est l’intérêt légitime, et non le consentement ; l’employeur doit d’abord effectuer le test de mise en balance. Pour la NAIH, le GPS localise le véhicule pour le travail, il ne suit pas le travailleur : uniquement pendant les heures de travail, aucun contrôle hors service, et le travailleur doit pouvoir le désactiver.',
        es: 'La base es el interés legítimo, no el consentimiento; el empleador debe realizar primero el test de ponderación. Para el NAIH el GPS localiza el vehículo para el trabajo, no sigue al trabajador: solo en horario de trabajo, sin control fuera de servicio, y el trabajador debe poder apagarlo.',
        pt: "A base é o interesse legítimo e não o consentimento; a entidade empregadora deve realizar previamente o teste de ponderação. Para a NAIH, o GPS localiza o veículo para o trabalho, não acompanha o trabalhador: apenas no horário, sem controlo fora do horário, e o trabalhador deve poder desligá-lo.",
        da: "Grundlaget er legitim interesse, ikke samtykke; arbejdsgiveren skal først gennemføre afvejningstesten. For NAIH lokaliserer GPS'en køretøjet til brug for arbejdet, den følger ikke medarbejderen: kun i arbejdstiden, ingen overvågning uden for arbejdstiden, og medarbejderen skal kunne slå den fra.",
        sv: "Grunden är berättigat intresse, inte samtycke; arbetsgivaren måste först genomföra intresseavvägningstestet. Enligt NAIH lokaliserar GPS fordonet för arbetets skull, den följer inte arbetstagaren: endast under arbetstid, ingen kontroll utanför arbetstid, och arbetstagaren måste kunna stänga av den.",
        nb: 'Grunnlaget er berettiget interesse, ikke samtykke; arbeidsgiveren må først gjennomføre interesseavveiningen. Ifølge NAIH lokaliserer GPS kjøretøyet for arbeidets skyld, den følger ikke arbeidstakeren: bare i arbeidstiden, ingen kontroll utenfor arbeidstid, og arbeidstakeren må kunne slå den av.',
        nl: 'De grondslag is het gerechtvaardigd belang, niet de toestemming; de werkgever moet eerst de belangenafweging uitvoeren. Voor de NAIH lokaliseert het GPS het voertuig voor het werk, het volgt de werknemer niet: alleen tijdens werktijd, geen controle buiten diensttijd, en de werknemer moet het kunnen uitschakelen.',
      },
      fonte: FONTE_NAIH_GUIDA,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il monitoraggio della posizione e dell'attività dei lavoratori (lista NAIH)",
        en: 'Impact assessment (DPIA) for monitoring the location and activity of workers (NAIH list)',
        de: 'Datenschutz-Folgenabschätzung (DSFA) für die Überwachung von Standort und Tätigkeit der Arbeitnehmer (NAIH-Liste)',
        fr: 'Analyse d’impact (AIPD) pour la surveillance de la localisation et de l’activité des travailleurs (liste NAIH)',
        es: 'Evaluación de impacto (EIPD) para la vigilancia de la ubicación y la actividad de los trabajadores (lista NAIH)',
        pt: "Avaliação de impacto (DPIA) para a monitorização da localização e da atividade dos trabalhadores (lista da NAIH)",
        da: "Konsekvensanalyse (DPIA) ved overvågning af medarbejdernes position og aktivitet (NAIH's liste)",
        sv: "Konsekvensbedömning (DPIA) för övervakning av arbetstagarnas position och verksamhet (NAIH:s lista)",
        nb: 'Personvernkonsekvensvurdering (DPIA) for overvåking av arbeidstakernes posisjon og aktivitet (NAIHs liste)',
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA) voor de monitoring van de locatie en de activiteit van werknemers (NAIH-lijst)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista NAIH include il monitoraggio del lavoro dei dipendenti e il trattamento di dati di posizione che indica un monitoraggio sistematico tra i casi che richiedono una valutazione d'impatto.",
        en: "The NAIH list includes the monitoring of employees' work and the processing of location data that indicates systematic monitoring among the cases that require an impact assessment.",
        de: 'Die NAIH-Liste führt die Überwachung der Arbeit der Beschäftigten und die Verarbeitung von Standortdaten, die auf eine systematische Überwachung hindeutet, unter den Fällen auf, die eine Folgenabschätzung erfordern.',
        fr: 'La liste NAIH inclut la surveillance du travail des salariés et le traitement de données de localisation indiquant une surveillance systématique parmi les cas qui requièrent une analyse d’impact.',
        es: 'La lista NAIH incluye la vigilancia del trabajo de los empleados y el tratamiento de datos de ubicación que indica una vigilancia sistemática entre los casos que requieren una evaluación de impacto.',
        pt: "A lista da NAIH inclui a monitorização do trabalho dos trabalhadores e o tratamento de dados de localização que indique uma monitorização sistemática entre os casos que exigem uma avaliação de impacto.",
        da: "NAIH's liste medtager overvågning af medarbejdernes arbejde og behandling af positionsdata, der tyder på systematisk overvågning, blandt de tilfælde, der kræver en konsekvensanalyse.",
        sv: "NAIH:s lista omfattar övervakning av de anställdas arbete och behandling av positionsuppgifter som innebär systematisk övervakning bland de fall som kräver en konsekvensbedömning.",
        nb: 'NAIHs liste tar med overvåking av de ansattes arbeid og behandling av posisjonsdata som innebærer systematisk overvåking blant tilfellene som krever en personvernkonsekvensvurdering.',
        nl: 'De NAIH-lijst omvat de monitoring van het werk van werknemers en de verwerking van locatiegegevens die op systematische monitoring wijst onder de gevallen die een effectbeoordeling vereisen.',
      },
      fonte: FONTE_NAIH_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: "Svolgi il test di bilanciamento dell'interesse legittimo prima dell'introduzione.",
        en: 'Carry out the legitimate interest balancing test before introduction.',
        de: 'Führen Sie vor der Einführung die Abwägungsprüfung des berechtigten Interesses durch.',
        fr: 'Effectuez le test de mise en balance de l’intérêt légitime avant l’introduction.',
        es: 'Realiza el test de ponderación del interés legítimo antes de la introducción.',
        pt: "Realize o teste de ponderação do interesse legítimo antes da introdução.",
        da: 'Gennemfør afvejningstesten for den legitime interesse før indførelsen.',
        sv: 'Genomför intresseavvägningstestet för det berättigade intresset före införandet.',
        nb: 'Gjennomfør interesseavveiningen for den berettigede interessen før innføringen.',
        nl: 'Voer vóór de invoering de belangenafweging van het gerechtvaardigd belang uit.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Informa i lavoratori per iscritto e in anticipo sul monitoraggio e sui mezzi tecnici (art. 11/A + art. 13 GDPR).',
        en: 'Inform the workers in writing and in advance about the monitoring and the technical means (art. 11/A + art. 13 GDPR).',
        de: 'Informieren Sie die Arbeitnehmer schriftlich und im Voraus über die Überwachung und die technischen Mittel (Art. 11/A + Art. 13 DSGVO).',
        fr: 'Informez les travailleurs par écrit et à l’avance sur la surveillance et les moyens techniques (art. 11/A + art. 13 RGPD).',
        es: 'Informa a los trabajadores por escrito y con antelación sobre la vigilancia y los medios técnicos (art. 11/A + art. 13 RGPD).',
        pt: "Informe os trabalhadores por escrito e com antecedência sobre a monitorização e os meios técnicos (art. 11/A + art. 13.º do RGPD).",
        da: 'Informér medarbejderne skriftligt og på forhånd om overvågningen og de tekniske midler (art. 11/A + art. 13 i GDPR).',
        sv: 'Informera arbetstagarna skriftligen och i förväg om övervakningen och de tekniska medlen (art. 11/A + art. 13 GDPR).',
        nb: 'Informer arbeidstakerne skriftlig og på forhånd om overvåkingen og de tekniske midlene (art. 11/A + art. 13 GDPR).',
        nl: 'Informeer de werknemers schriftelijk en vooraf over de monitoring en de technische middelen (art. 11/A + art. 13 AVG).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio della posizione dei lavoratori.",
        en: 'Carry out the impact assessment (DPIA) for monitoring the location of workers.',
        de: 'Führen Sie die Datenschutz-Folgenabschätzung (DSFA) für die Überwachung des Standorts der Arbeitnehmer durch.',
        fr: 'Effectuez l’analyse d’impact (AIPD) pour la surveillance de la localisation des travailleurs.',
        es: 'Realiza la evaluación de impacto (EIPD) para la vigilancia de la ubicación de los trabajadores.',
        pt: "Realize a avaliação de impacto (DPIA) para a monitorização da localização dos trabalhadores.",
        da: 'Gennemfør konsekvensanalysen (DPIA) for overvågning af medarbejdernes position.',
        sv: 'Genomför konsekvensbedömningen (DPIA) för övervakning av arbetstagarnas position.',
        nb: 'Gjennomfør personvernkonsekvensvurderingen (DPIA) for overvåking av arbeidstakernes posisjon.',
        nl: 'Voer de gegevensbeschermingseffectbeoordeling (DPIA) uit voor de monitoring van de locatie van werknemers.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Limita il GPS alla localizzazione del veicolo per il lavoro: solo in orario, niente controllo fuori orario.',
        en: 'Limit the GPS to locating the vehicle for work: only during working hours, no monitoring off duty.',
        de: 'Beschränken Sie das GPS auf die Ortung des Fahrzeugs für die Arbeit: nur während der Arbeitszeit, keine Überwachung außerhalb der Dienstzeit.',
        fr: 'Limitez le GPS à la localisation du véhicule pour le travail : uniquement pendant les heures de travail, aucun contrôle hors service.',
        es: 'Limita el GPS a la localización del vehículo para el trabajo: solo en horario de trabajo, sin control fuera de servicio.',
        pt: "Limite o GPS à localização do veículo para o trabalho: apenas no horário, sem controlo fora do horário.",
        da: "Begræns GPS'en til at lokalisere køretøjet til brug for arbejdet: kun i arbejdstiden, ingen overvågning uden for arbejdstiden.",
        sv: "Begränsa GPS till att lokalisera fordonet för arbetets skull: endast under arbetstid, ingen kontroll utanför arbetstid.",
        nb: 'Begrens GPS til å lokalisere kjøretøyet for arbeidets skyld: bare i arbeidstiden, ingen kontroll utenfor arbeidstid.',
        nl: 'Beperk het GPS tot het lokaliseren van het voertuig voor het werk: alleen tijdens werktijd, geen controle buiten diensttijd.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Prevedi un opt-out per spegnere il GPS quando il veicolo resta al lavoratore fuori orario.',
        en: 'Provide an opt-out to switch off the GPS when the vehicle stays with the worker off duty.',
        de: 'Sehen Sie ein Opt-out vor, um das GPS auszuschalten, wenn das Fahrzeug außerhalb der Dienstzeit beim Arbeitnehmer bleibt.',
        fr: 'Prévoyez un opt-out pour désactiver le GPS lorsque le véhicule reste au travailleur hors service.',
        es: 'Prevé una opción de exclusión para apagar el GPS cuando el vehículo permanece con el trabajador fuera de servicio.',
        pt: "Preveja uma possibilidade de desativação (opt-out) do GPS quando o veículo fica com o trabalhador fora do horário.",
        da: "Indbyg et fravalg, så GPS'en kan slås fra, når køretøjet bliver hos medarbejderen uden for arbejdstiden.",
        sv: "Ge möjlighet att avstå så att GPS kan stängas av när fordonet står hos arbetstagaren utanför arbetstid.",
        nb: 'Gi mulighet til å velge bort, slik at GPS kan slås av når kjøretøyet blir hos arbeidstakeren utenfor arbeidstid.',
        nl: 'Voorzie een opt-out om het GPS uit te schakelen wanneer het voertuig buiten diensttijd bij de werknemer blijft.',
      },
    },
    {
      passo: 6,
      descrizione: {
        it: 'Se cambi sistema o software di monitoraggio, aggiorna e riconsegna l’informativa, e verifica se devi di nuovo informare o consultare i rappresentanti dei lavoratori, dove la legge lo prevede. Spesso cambiano fornitore (responsabile del trattamento), dati raccolti e modalità: l’informativa consegnata prima non basta.',
        en: 'If you switch systems: when you change your monitoring system or software, update and re-issue the privacy notice, and check whether you must inform or consult the workers\' representatives again, where the law requires it. The provider (data processor), the data collected and the methods often change: the one provided earlier is not enough.',
        de: 'Bei Systemwechsel: Wenn Sie Ihr Überwachungssystem oder Ihre Software wechseln, aktualisieren Sie die Datenschutzinformation und händigen Sie sie erneut aus, und prüfen Sie, ob Sie die Arbeitnehmervertretung erneut informieren oder beteiligen müssen, wo das Gesetz es vorsieht. Anbieter (Auftragsverarbeiter), erhobene Daten und Modalitäten ändern sich oft: die zuvor ausgehändigte genügt nicht.',
        fr: 'En cas de changement de système : si vous changez de système ou de logiciel de surveillance, mettez à jour et remettez l’information, et vérifiez si vous devez de nouveau informer ou consulter les représentants du personnel, lorsque la loi le prévoit. Le fournisseur (sous-traitant), les données collectées et les modalités changent souvent : celle remise auparavant ne suffit pas.',
        es: 'Si cambias de sistema o software de monitorización, actualiza y vuelve a entregar la información, y comprueba si debes volver a informar o consultar a los representantes de los trabajadores, cuando la ley lo prevé. A menudo cambian el proveedor (encargado del tratamiento), los datos recogidos y las modalidades: la información entregada antes no basta.',
        pt: "Se mudar de sistema ou de software de monitorização, atualize e entregue de novo a informação e verifique se tem de voltar a informar ou a consultar os representantes dos trabalhadores, nos casos em que a lei o prevê. Muitas vezes mudam o fornecedor (subcontratante), os dados recolhidos e as modalidades: a informação entregue anteriormente não basta.",
        da: 'Hvis du skifter system eller overvågningssoftware, skal du opdatere og udlevere privatlivsoplysningerne igen og undersøge, om du på ny skal informere eller høre medarbejdernes repræsentanter, hvor loven kræver det. Ofte ændrer leverandøren (databehandleren), de indsamlede oplysninger og metoderne sig: de oplysninger, der blev udleveret tidligere, er ikke nok.',
        sv: 'Om du byter system eller övervakningsprogram ska du uppdatera och lämna ut integritetsinformationen på nytt och kontrollera om du på nytt måste informera eller höra de anställdas företrädare, där lagen kräver det. Ofta ändras leverantören (personuppgiftsbiträdet), de insamlade uppgifterna och metoderna: den information som lämnades tidigare räcker inte.',
        nb: 'Hvis du bytter system eller overvåkingsprogramvare, må du oppdatere og dele ut personverninformasjonen på nytt, og kontrollere om du på nytt må informere eller rådføre deg med arbeidstakernes representanter, der loven krever det. Ofte endres leverandøren (databehandleren), de innsamlede dataene og fremgangsmåtene: informasjonen som ble delt ut tidligere er ikke nok.',
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werkt u de privacyverklaring bij en verstrekt u deze opnieuw, en controleert u of u de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'NAIH',
      portale: FONTE_NAIH.url,
      urlFonte: FONTE_NAIH.url,
      verificatoIl: '2026-09-30',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '15.000.000 HUF (circa 37.500 euro)',
      en: '15,000,000 HUF (about 37,500 euros)',
      de: '15.000.000 HUF (etwa 37.500 Euro)',
      fr: '15 000 000 HUF (environ 37 500 euros)',
      es: '15.000.000 HUF (unos 37.500 euros)',
      pt: "15.000.000 HUF (cerca de 37.500 euros)",
      da: '15.000.000 HUF (ca. 37.500 euro)',
      sv: '15 000 000 HUF (cirka 37 500 euro)',
      nb: '15 000 000 HUF (ca. 37 500 euro)',
      nl: '15.000.000 HUF (ongeveer 37.500 euro)',
    },
    casoCitato: {
      it: "NAIH contro Auchan Magyarország (gennaio 2018, caso NAIH/2018/412/2/H): videosorveglianza sul luogo di lavoro senza una base giuridica adeguata, informazione carente ai lavoratori e violazione della limitazione della finalità. Multa 15.000.000 HUF (circa 37.500 euro). Non è un caso di GPS, ma è la sanzione più importante del NAIH sul monitoraggio dei dipendenti.",
      en: 'NAIH versus Auchan Magyarorszag (January 2018, case NAIH/2018/412/2/H): video surveillance in the workplace without an adequate legal basis, inadequate information to workers and breach of the purpose limitation principle. Fine 15,000,000 HUF. It is not a GPS case, but it is the NAIH reference penalty on employee monitoring.',
      de: 'NAIH gegen Auchan Magyarorszag (Januar 2018, Fall NAIH/2018/412/2/H): Videoüberwachung am Arbeitsplatz ohne angemessene Rechtsgrundlage, unzureichende Information der Arbeitnehmer und Verstoß gegen die Zweckbindung. Geldbuße 15.000.000 HUF. Es handelt sich nicht um einen GPS-Fall, aber es ist die maßgebliche Sanktion der NAIH zur Überwachung von Beschäftigten.',
      fr: 'NAIH contre Auchan Magyarország (janvier 2018, affaire NAIH/2018/412/2/H) : vidéosurveillance sur le lieu de travail sans base juridique adéquate, information insuffisante des travailleurs et violation de la limitation des finalités. Amende de 15 000 000 HUF. Ce n’est pas une affaire de GPS, mais c’est la sanction de référence de la NAIH en matière de surveillance des salariés.',
      es: 'NAIH contra Auchan Magyarország (enero de 2018, caso NAIH/2018/412/2/H): videovigilancia en el lugar de trabajo sin una base jurídica adecuada, información insuficiente a los trabajadores y vulneración de la limitación de la finalidad. Multa de 15.000.000 HUF (unos 37.500 euros). No es un caso de GPS, pero es la sanción de referencia del NAIH sobre la vigilancia de los empleados.',
      pt: "NAIH contra Auchan Magyarország (janeiro de 2018, processo NAIH/2018/412/2/H): videovigilância no local de trabalho sem base jurídica adequada, informação deficiente aos trabalhadores e violação da limitação da finalidade. Coima de 15.000.000 HUF (cerca de 37.500 euros). Não é um caso de GPS, mas é a sanção mais importante da NAIH sobre a monitorização dos trabalhadores.",
      da: "NAIH mod Auchan Magyarország (januar 2018, sag NAIH/2018/412/2/H): videoovervågning på arbejdspladsen uden et tilstrækkeligt retsgrundlag, mangelfuld information til medarbejderne og overtrædelse af formålsbegrænsningen. Bøde på 15.000.000 HUF (ca. 37.500 euro). Det er ikke en GPS-sag, men det er NAIH's vigtigste sanktion om overvågning af medarbejdere.",
      sv: "NAIH mot Auchan Magyarország (januari 2018, ärende NAIH/2018/412/2/H): kameraövervakning på arbetsplatsen utan en tillräcklig rättslig grund, bristfällig information till arbetstagarna och brott mot principen om ändamålsbegränsning. Böter på 15 000 000 HUF (cirka 37 500 euro). Det är inte ett GPS-fall, men det är NAIH:s viktigaste sanktion när det gäller övervakning av anställda.",
      nb: 'NAIH mot Auchan Magyarország (januar 2018, sak NAIH/2018/412/2/H): kameraovervåking på arbeidsplassen uten tilstrekkelig rettslig grunnlag, mangelfull informasjon til arbeidstakerne og brudd på prinsippet om formålsbegrensning. Bot på 15 000 000 HUF (ca. 37 500 euro). Dette er ikke en GPS-sak, men det er NAIHs viktigste sanksjon når det gjelder overvåking av ansatte.',
      nl: 'NAIH tegen Auchan Magyarorszag (januari 2018, zaak NAIH/2018/412/2/H): videobewaking op de werkplek zonder een adequate rechtsgrondslag, gebrekkige informatie aan werknemers en schending van de doelbinding. Boete 15.000.000 HUF. Het is geen GPS-zaak, maar het is de referentiesanctie van de NAIH inzake de monitoring van werknemers.',
    },
    urlFonte: FONTE_NAIH_AUCHAN.url,
    tipoImporto: 'caso-affine',
  },

  fonti: [
    FONTE_MT_11A,
    FONTE_NAIH_GUIDA,
    FONTE_NAIH_DPIA,
    FONTE_NAIH_AUCHAN,
    FONTE_NAIH,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
