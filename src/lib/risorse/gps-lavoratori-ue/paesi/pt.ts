/**
 * Scheda-paese Portogallo per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * art. 20 del Codigo do Trabalho (mezzi di sorveglianza a distanza), Deliberacao
 * 7680/2014 della CNPD sulla geolocalizzazione nel contesto lavorativo, art. 28
 * della Lei 58/2019 sulle relazioni di lavoro, lista CNPD dei trattamenti che
 * richiedono una valutazione d'impatto, portale CNPD per le segnalazioni e GDPR.
 *
 * Il Portogallo non e' uno Stato federale: l'autorita' garante e' unica e
 * nazionale (CNPD), senza ripartizioni regionali. Nessun numero, URL o
 * autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_CT_20 = {
  titolo: 'Codigo do Trabalho, art. 20 (mezzi di sorveglianza a distanza)',
  url: 'https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?nid=1047&tabela=leis',
};
const FONTE_CNPD_7680 = {
  titolo:
    'CNPD, Deliberacao 7680/2014 (geolocalizzazione nel contesto lavorativo)',
  url: 'https://www.cnpd.pt/media/zvxmdfad/del_7680-2014_geo_laboral.pdf',
};
const FONTE_LEI_58_28 = {
  titolo: 'Lei 58/2019, art. 28 (relazioni di lavoro)',
  url: 'https://files.dre.pt/1s/2019/08/15100/0000300040.pdf',
};
const FONTE_CNPD_494 = {
  titolo: 'CNPD, Deliberação 2019/494 (norme della Lei 58/2019 disapplicate)',
  url: 'https://www.cnpd.pt/bin/decisoes/Delib/DEL_2019_494.pdf',
};
const FONTE_CNPD_VIDEOVIGILANCIA = {
  titolo:
    'CNPD, videovigilanza: nel contesto lavorativo restano le condizioni del Codice del lavoro, senza l\'autorizzazione della CNPD',
  url: 'https://www.cnpd.pt/organizacoes/areas-tematicas/videovigilancia/',
};
const FONTE_CNPD_REG_798 = {
  titolo:
    'CNPD, Regulamento n.º 798/2018 (lista dei trattamenti soggetti a valutazione d\'impatto)',
  url: 'https://www.cnpd.pt/umbraco/surface/cnpdDecision/download/121818',
};
const FONTE_TRL_GPS = {
  titolo:
    'Tribunal da Relação de Lisboa, acórdão del 17 giugno 2026, proc. 2266/25.4T8TVD.L1-4 (GPS del veicolo di una lavoratrice)',
  url: 'https://www.dgsi.pt/jtrl.nsf/33182fc732316039802565fa00497eec/1c3521b7ecce554780258e22004649c4?OpenDocument',
};
const FONTE_CNPD_AIPD = {
  titolo: "CNPD, valutazione d'impatto sulla protezione dei dati",
  url: 'https://www.cnpd.pt/organizacoes/outras-obrigacoes/avaliacao-de-impacto/',
};
const FONTE_CNPD_SEGNALAZIONI = {
  titolo: 'CNPD, presentare una segnalazione',
  url: 'https://www.cnpd.pt/cidadaos/participacoes/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const portogallo: SchedaPaese = {
  codiceISO: 'PT',
  slugCanonico: 'portogallo',
  nome: 'Portogallo',
  nomi: {
    it: 'Portogallo',
    en: 'Portugal',
    'en-us': 'Portugal',
    'en-gb': 'Portugal',
    'en-au': 'Portugal',
    'en-ie': 'Portugal',
    'en-ca': 'Portugal',
    de: 'Portugal',
    nl: 'Portugal',
    fr: 'Portugal',
    es: 'Portugal',
    pt: 'Portugal',
    da: 'Portugal',
    sv: 'Portugal',
    nb: 'Portugal',
    ru: 'Португалия',
  },
  bandiera: '🇵🇹',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'CNPD (Comissão Nacional de Proteção de Dados)',
    portale: FONTE_CNPD_SEGNALAZIONI.url,
    urlFonte: FONTE_CNPD_SEGNALAZIONI.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "Il Portogallo ha un'unica autorità nazionale, la CNPD; nessuna ripartizione regionale.",
      en: 'Portugal has a single national authority, the CNPD; there is no regional breakdown.',
      de: 'Portugal hat eine einzige nationale Behörde, die CNPD; es gibt keine regionale Aufteilung.',
      fr: 'Le Portugal dispose d’une seule autorité nationale, la CNPD ; il n’y a pas de répartition régionale.',
      es: 'Portugal tiene una única autoridad nacional, la CNPD; no existe división regional.',
      pt: "Portugal tem uma única autoridade nacional, a CNPD; não existe divisão regional.",
      da: 'Portugal har én national myndighed, CNPD; der er ingen regional opdeling.',
      sv: 'Portugal har en enda nationell myndighet, CNPD; det finns ingen regional uppdelning.',
      nb: 'Portugal har én nasjonal myndighet, CNPD; ingen regional inndeling.',
      nl: 'Portugal heeft een enkele nationale autoriteit, de CNPD; er is geen regionale onderverdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: "Informazione ai lavoratori sull'esistenza e finalità della sorveglianza (art. 20 Código do Trabalho)",
        en: 'Informing workers of the existence and purpose of the surveillance (art. 20 Código do Trabalho)',
        de: 'Unterrichtung der Arbeitnehmer über Bestehen und Zweck der Überwachung (Art. 20 Código do Trabalho)',
        fr: 'Information des travailleurs sur l’existence et la finalité de la surveillance (art. 20 Código do Trabalho)',
        es: 'Información a los trabajadores sobre la existencia y la finalidad de la vigilancia (art. 20 Código do Trabalho)',
        pt: "Informação aos trabalhadores sobre a existência e a finalidade da vigilância (art. 20 do Código do Trabalho)",
        da: 'Information til medarbejderne om overvågningens eksistens og formål (art. 20 Código do Trabalho)',
        sv: 'Information till de anställda om att övervakningen finns och dess ändamål (art. 20 Código do Trabalho)',
        nb: 'Informasjon til de ansatte om at overvåking finnes og formålet med den (art. 20 Código do Trabalho)',
        nl: 'Informatie aan werknemers over het bestaan en het doel van het toezicht (art. 20 Codigo do Trabalho)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il datore deve informare i lavoratori dell'esistenza e dello scopo dei mezzi di sorveglianza usati.",
        en: 'The employer must inform workers of the existence and purpose of the surveillance measures used.',
        de: 'Der Arbeitgeber muss die Arbeitnehmer über das Bestehen und den Zweck der eingesetzten Überwachungsmittel unterrichten.',
        fr: 'L’employeur doit informer les travailleurs de l’existence et de la finalité des moyens de surveillance utilisés.',
        es: 'El empleador debe informar a los trabajadores de la existencia y la finalidad de los medios de vigilancia utilizados.',
        pt: "A entidade empregadora deve informar os trabalhadores da existência e da finalidade dos meios de vigilância utilizados.",
        da: 'Arbejdsgiveren skal informere medarbejderne om eksistensen og formålet med de anvendte overvågningsforanstaltninger.',
        sv: 'Arbetsgivaren ska informera de anställda om att övervakningsmedel används och om deras ändamål.',
        nb: 'Arbeidsgiveren skal informere de ansatte om at overvåkingsmidler brukes og om formålet med dem.',
        nl: 'De werkgever moet werknemers informeren over het bestaan en het doel van de gebruikte toezichtmiddelen.',
      },
      fonte: FONTE_CT_20,
    },
    {
      voce: {
        it: 'Divieto di usare la sorveglianza a distanza per controllare il rendimento del lavoratore (art. 20 CT)',
        en: 'Prohibition on using remote surveillance to monitor the worker\'s performance (art. 20 CT)',
        de: 'Verbot, die Fernüberwachung zur Kontrolle der Arbeitsleistung des Arbeitnehmers zu nutzen (Art. 20 CT)',
        fr: 'Interdiction d’utiliser la surveillance à distance pour contrôler le rendement du travailleur (art. 20 CT)',
        es: 'Prohibición de usar la vigilancia a distancia para controlar el rendimiento del trabajador (art. 20 CT)',
        pt: "Proibição de utilizar a vigilância à distância para controlar o desempenho do trabalhador (art. 20 CT)",
        da: 'Forbud mod at bruge fjernovervågning til at overvåge medarbejderens præstation (art. 20 CT)',
        sv: 'Förbud mot att använda distansövervakning för att kontrollera den anställdes prestation (art. 20 CT)',
        nb: 'Forbud mot å bruke fjernovervåking til å kontrollere den ansattes prestasjoner (art. 20 CT)',
        nl: 'Verbod om toezicht op afstand te gebruiken om de prestaties van de werknemer te controleren (art. 20 CT)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La sorveglianza a distanza non può servire a controllare la prestazione professionale; è ammessa solo per la protezione e sicurezza di persone e beni o per particolari esigenze dell'attività. I dati registrati con mezzi tecnologici di sorveglianza a distanza (art. 20 CT) sono utilizzabili solo nel processo penale e, per la responsabilità disciplinare, solo nella misura in cui lo sono nel processo penale (Lei 58/2019, art. 28, nn. 4 e 5). La CNPD non ha disapplicato questi due commi: della norma ha disapplicato solo il n. 3, lett. a (Deliberação 2019/494).",
        en: 'Remote surveillance may not be used to monitor professional performance; it is allowed only for the protection and safety of people and property or for particular needs of the activity. Data recorded through remote surveillance technology (art. 20 CT) may be used only in criminal proceedings and, for disciplinary liability, only to the extent that it is used in criminal proceedings (Law 58/2019, art. 28(4) and (5)). The CNPD has not disapplied these two paragraphs: of that article it disapplied only paragraph 3(a) (Deliberation 2019/494).',
        de: 'Die Fernüberwachung darf nicht zur Kontrolle der beruflichen Leistung dienen; sie ist nur zum Schutz und zur Sicherheit von Personen und Sachen oder für besondere Erfordernisse der Tätigkeit zulässig. Mit technischen Mitteln der Fernüberwachung aufgezeichnete Daten (Art. 20 CT) dürfen nur im Strafverfahren verwendet werden und für die disziplinarische Verantwortung nur, soweit sie im Strafverfahren verwendet werden (Gesetz 58/2019, Art. 28 Nr. 4 und 5). Die CNPD hat diese beiden Absätze nicht für unanwendbar erklärt: Von der Vorschrift hat sie nur Nr. 3 Buchst. a nicht angewandt (Beschluss 2019/494).',
        fr: 'La surveillance à distance ne peut servir à contrôler la prestation professionnelle ; elle n’est admise que pour la protection et la sécurité des personnes et des biens ou pour des besoins particuliers de l’activité. Les données enregistrées par des moyens technologiques de surveillance à distance (art. 20 CT) ne peuvent être utilisées que dans le procès pénal et, pour la responsabilité disciplinaire, seulement dans la mesure où elles le sont dans le procès pénal (loi 58/2019, art. 28, nos 4 et 5). La CNPD n’a pas écarté ces deux alinéas : de cet article, elle n’a écarté que le no 3, point a) (délibération 2019/494).',
        es: 'La vigilancia a distancia no puede servir para controlar la prestación profesional; solo se admite para la protección y seguridad de personas y bienes o para necesidades particulares de la actividad. Los datos registrados con medios tecnológicos de vigilancia a distancia (art. 20 CT) solo pueden utilizarse en el proceso penal y, para la responsabilidad disciplinaria, solo en la medida en que lo sean en el proceso penal (Ley 58/2019, art. 28, núms. 4 y 5). La CNPD no ha inaplicado estos dos apartados: de ese artículo solo inaplicó el núm. 3, letra a (Deliberación 2019/494).',
        pt: "A vigilância à distância não pode servir para controlar a prestação profissional; só é admitida para a proteção e segurança de pessoas e bens ou quando particulares exigências inerentes à natureza da atividade o justifiquem. Os dados registados com meios tecnológicos de vigilância à distância (art. 20 CT) só podem ser utilizados no processo penal e, para efeitos de responsabilidade disciplinar, apenas na medida em que o sejam no processo penal (Lei n.º 58/2019, art. 28, n.os 4 e 5). A CNPD não desaplicou estes dois números: desse artigo desaplicou apenas o n.º 3, alínea a (Deliberação 2019/494).",
        da: 'Fjernovervågning må ikke bruges til at overvåge den faglige præstation; den er kun tilladt til beskyttelse og sikkerhed af personer og ejendom eller til aktivitetens særlige behov. Oplysninger, der er registreret med fjernovervågningsteknologi (art. 20 CT), må kun bruges i straffesager og, med hensyn til disciplinæransvar, kun i det omfang de bruges i straffesager (lov 58/2019, art. 28, stk. 4 og 5). CNPD har ikke tilsidesat disse to stykker: Af den artikel har den kun tilsidesat stk. 3, litra a (beslutning 2019/494).',
        sv: 'Distansövervakning får inte användas för att kontrollera den yrkesmässiga prestationen; den är tillåten endast för skydd och säkerhet för personer och egendom eller för verksamhetens särskilda behov. Uppgifter som registrerats med tekniska medel för distansövervakning (art. 20 CT) får användas endast i straffrättsliga förfaranden och, för disciplinansvar, endast i den mån de får användas i straffrättsliga förfaranden (Lei 58/2019, art. 28, nr 4 och 5). CNPD har inte åsidosatt dessa två punkter: av bestämmelsen har den endast åsidosatt nr 3, bokstav a (Deliberação 2019/494).',
        nb: 'Fjernovervåking kan ikke brukes til å kontrollere den faglige prestasjonen; den er bare tillatt for vern og sikkerhet for personer og eiendom eller for virksomhetens særskilte behov. Opplysninger registrert med teknologiske midler for fjernovervåking (art. 20 CT) kan bare brukes i straffesaker og, for disiplinæransvar, bare i den grad de kan brukes i straffesaker (Lei 58/2019, art. 28, nr. 4 og 5). CNPD har ikke satt til side disse to leddene: av bestemmelsen har den bare satt til side nr. 3, bokstav a (Deliberação 2019/494).',
        nl: 'Toezicht op afstand mag niet dienen om de professionele prestaties te controleren; het is alleen toegestaan voor de bescherming en veiligheid van personen en goederen of voor bijzondere behoeften van de activiteit. Gegevens die met technologische middelen voor toezicht op afstand zijn vastgelegd (art. 20 CT) mogen alleen in de strafprocedure worden gebruikt en, voor tuchtrechtelijke aansprakelijkheid, alleen voor zover ze in de strafprocedure worden gebruikt (wet 58/2019, art. 28, nrs. 4 en 5). De CNPD heeft deze twee leden niet buiten toepassing gelaten: van dat artikel liet zij alleen nr. 3, onder a, buiten toepassing (besluit 2019/494).',
      },
      fonte: FONTE_CT_20,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation from an authority before installation',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: 'Autorisation préalable d’une autorité avant l’installation',
        es: 'Autorización previa de una autoridad antes de instalar',
        pt: "Autorização prévia de uma autoridade antes de instalar",
        da: 'Forudgående tilladelse fra en myndighed før installation',
        sv: 'Förhandstillstånd från en myndighet innan systemet installeras',
        nb: 'Forhåndstillatelse fra en myndighet før installasjon',
        nl: 'Voorafgaande toestemming van een autoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Con il GDPR è venuta meno la vecchia autorizzazione preventiva della CNPD: per la CNPD, nel contesto lavorativo restano vigenti le condizioni del Codice del lavoro, tranne la richiesta di autorizzazione alla CNPD, che è incompatibile con il GDPR. Resta un controllo a posteriori. Nota: l'art. 21 CT non è stato abrogato espressamente e la dottrina è divisa, ma in pratica l'autorizzazione preventiva non viene più richiesta.",
        en: 'With the GDPR the old prior authorisation by the CNPD has fallen away: according to the CNPD, in the employment context the Labour Code conditions remain in force, except the requirement to ask the CNPD for authorisation, which is incompatible with the GDPR. An a posteriori review remains. Note: art. 21 CT has not been expressly repealed and legal opinion is divided, but in practice prior authorisation is no longer required.',
        de: 'Mit der DSGVO ist die alte vorherige Genehmigung durch die CNPD weggefallen: Nach Auffassung der CNPD gelten im Arbeitsverhältnis die Bedingungen des Arbeitsgesetzbuchs weiter, mit Ausnahme der Pflicht, die CNPD um Genehmigung zu bitten, die mit der DSGVO unvereinbar ist. Es bleibt eine nachträgliche Kontrolle. Hinweis: Art. 21 CT wurde nicht ausdrücklich aufgehoben und die Lehre ist geteilt, in der Praxis wird die vorherige Genehmigung jedoch nicht mehr verlangt.',
        fr: 'Avec le RGPD, l’ancienne autorisation préalable de la CNPD a disparu : selon la CNPD, dans le contexte du travail les conditions du Code du travail restent en vigueur, à l’exception de l’obligation de demander l’autorisation de la CNPD, incompatible avec le RGPD. Un contrôle a posteriori subsiste. Note : l’art. 21 CT n’a pas été expressément abrogé et la doctrine est divisée, mais en pratique l’autorisation préalable n’est plus exigée.',
        es: 'Con el RGPD ha desaparecido la antigua autorización previa de la CNPD: según la CNPD, en el ámbito laboral siguen vigentes las condiciones del Código del Trabajo, salvo la necesidad de solicitar la autorización de la CNPD, que es incompatible con el RGPD. Queda un control a posteriori. Nota: el art. 21 CT no ha sido expresamente derogado y la doctrina está dividida, pero en la práctica ya no se exige la autorización previa.',
        pt: "Com o RGPD, desapareceu a antiga autorização prévia da CNPD: segundo a CNPD, no âmbito laboral continuam em vigor as condições do Código do Trabalho, exceto a necessidade de solicitar a autorização da CNPD, que é incompatível com o RGPD. Resta um controlo a posteriori. Nota: o art. 21 CT não foi expressamente revogado e a doutrina está dividida, mas, na prática, a autorização prévia já não é exigida.",
        da: 'Med GDPR er den gamle forudgående tilladelse fra CNPD bortfaldet: Ifølge CNPD gælder arbejdskodeksens betingelser fortsat i ansættelsesforhold, bortset fra kravet om at ansøge CNPD om tilladelse, som er uforeneligt med GDPR. Der består en efterfølgende kontrol. Bemærk: Art. 21 CT er ikke udtrykkeligt ophævet, og de juridiske holdninger er delte, men i praksis kræves der ikke længere forudgående tilladelse.',
        sv: 'Med GDPR har den gamla förhandsauktoriseringen från CNPD fallit bort: enligt CNPD gäller i arbetslivet fortfarande villkoren i arbetslagen (Código do Trabalho), utom kravet på tillstånd från CNPD, som är oförenligt med GDPR. En kontroll i efterhand återstår. Obs: art. 21 CT har inte upphävts uttryckligen och doktrinen är delad, men i praktiken krävs inte längre något förhandstillstånd.',
        nb: 'Med GDPR har den gamle forhåndstillatelsen fra CNPD falt bort: ifølge CNPD gjelder i arbeidslivet fortsatt vilkårene i arbeidsloven (Código do Trabalho), unntatt kravet om å søke CNPD om tillatelse, som er uforenlig med GDPR. En etterfølgende kontroll består. Merk: art. 21 CT er ikke uttrykkelig opphevet og juridisk teori er delt, men i praksis kreves det ikke lenger forhåndstillatelse.',
        nl: 'Met de AVG is de oude voorafgaande toestemming van de CNPD vervallen: volgens de CNPD blijven in de arbeidscontext de voorwaarden van het Arbeidswetboek gelden, behalve de verplichting om de CNPD om toestemming te vragen, die onverenigbaar is met de AVG. Een controle achteraf blijft bestaan. Opmerking: art. 21 CT is niet uitdrukkelijk ingetrokken en de rechtsleer is verdeeld, maar in de praktijk wordt voorafgaande toestemming niet langer vereist.',
      },
      fonte: FONTE_CNPD_VIDEOVIGILANCIA,
    },
    {
      voce: {
        it: 'Geolocalizzazione proporzionata, limitata all\'orario di lavoro, con modo privato fuori orario',
        en: 'Proportionate geolocation, limited to working hours, with a private mode outside those hours',
        de: 'Verhältnismäßige Geolokalisierung, auf die Arbeitszeit beschränkt, mit Privatmodus außerhalb der Arbeitszeit',
        fr: 'Géolocalisation proportionnée, limitée au temps de travail, avec un mode privé en dehors des heures',
        es: 'Geolocalización proporcionada, limitada al horario de trabajo, con modo privado fuera del horario',
        pt: "Geolocalização proporcionada, limitada ao horário de trabalho, com modo privado fora do horário",
        da: 'Forholdsmæssig geolokalisering, begrænset til arbejdstiden, med en privat tilstand uden for denne tid',
        sv: 'Proportionell geolokalisering, begränsad till arbetstid, med privat läge utanför arbetstid',
        nb: 'Forholdsmessig geolokalisering, begrenset til arbeidstiden, med privat modus utenfor arbeidstid',
        nl: 'Evenredige geolocatie, beperkt tot de werktijd, met een prive-modus buiten de werktijd',
      },
      risposta: 'si',
      dettaglio: {
        it: "Per la CNPD (Deliberazione 7680/2014, anteriore al GDPR e ancora pubblicata sul suo sito) la geolocalizzazione non può servire a rintracciare il lavoratore né a controllarne il rendimento (art. 20 CT), non può estendersi a pause e riposi, e sui veicoli usabili anche per scopi privati il lavoratore deve poter passare al «modo privato» fuori dall'orario. Il consenso del lavoratore non è una base valida. Per telefoni cellulari e portatili la deliberazione è ancora più netta: non ammette che il datore ne monitori la geolocalizzazione né che installi app che attivino il GPS (punto 85). Al punto 152 la deliberazione chiede ancora l'autorizzazione preventiva alla CNPD, che dopo il GDPR non viene più richiesta.",
        en: 'According to the CNPD (Deliberation 7680/2014, issued before the GDPR and still published on its website), geolocation may not be used to locate the worker\'s whereabouts or to monitor their performance (Article 20 CT), may not extend to breaks and rest periods, and on vehicles that may also be used privately the worker must be able to switch to a "private mode" outside working hours. The worker\'s consent is not a valid legal basis. For mobile phones and laptops the deliberation is stricter still: it does not allow the employer to monitor their geolocation or to install apps that activate the GPS sensors (point 85). Point 152 still asks for prior authorisation from the CNPD, which is no longer requested since the GDPR.',
        de: 'Nach Auffassung der CNPD (Beschluss 7680/2014, vor der DSGVO ergangen und weiterhin auf ihrer Website veröffentlicht) darf die Geolokalisierung nicht dazu dienen, den Aufenthaltsort der beschäftigten Person zu ermitteln oder ihre Leistung zu überwachen (Art. 20 CT), sie darf sich nicht auf Pausen und Ruhezeiten erstrecken, und bei Fahrzeugen, die auch privat genutzt werden dürfen, muss die beschäftigte Person außerhalb der Arbeitszeit in einen „Privatmodus“ wechseln können. Die Einwilligung der beschäftigten Person ist keine gültige Rechtsgrundlage. Für Mobiltelefone und Laptops ist der Beschluss noch strenger: Er lässt weder zu, dass der Arbeitgeber deren Geolokalisierung überwacht, noch dass er Apps installiert, die die GPS-Sensoren aktivieren (Punkt 85). In Punkt 152 verlangt der Beschluss noch die vorherige Genehmigung der CNPD, die seit der DSGVO nicht mehr verlangt wird.',
        fr: 'Selon la CNPD (délibération 7680/2014, antérieure au RGPD et toujours publiée sur son site), la géolocalisation ne peut servir à localiser le travailleur ni à contrôler son rendement (art. 20 CT), ne peut s’étendre aux pauses et aux repos, et sur les véhicules pouvant aussi servir à un usage privé le travailleur doit pouvoir passer en « mode privé » en dehors des heures de travail. Le consentement du travailleur n’est pas une base juridique valable. Pour les téléphones mobiles et les ordinateurs portables, la délibération est encore plus nette : elle n’admet ni que l’employeur en surveille la géolocalisation ni qu’il installe des applications activant le GPS (point 85). Au point 152, la délibération demande encore l’autorisation préalable de la CNPD, qui n’est plus exigée depuis le RGPD.',
        es: 'Para la CNPD (Deliberación 7680/2014, anterior al RGPD y todavía publicada en su web), la geolocalización no puede servir para localizar al trabajador ni para controlar su rendimiento (art. 20 CT), no puede extenderse a pausas y descansos, y en los vehículos que también puedan usarse con fines privados el trabajador debe poder pasar a un «modo privado» fuera del horario. El consentimiento del trabajador no es una base jurídica válida. Para teléfonos móviles y portátiles la deliberación es aún más tajante: no admite que el empleador monitorice su geolocalización ni que instale aplicaciones que activen el GPS (punto 85). En el punto 152 la deliberación todavía pide la autorización previa de la CNPD, que desde el RGPD ya no se exige.',
        pt: "Para a CNPD (Deliberação 7680/2014, anterior ao RGPD e ainda publicada no seu sítio), a geolocalização não pode servir para localizar o trabalhador nem para controlar o seu desempenho (art. 20 CT), não pode estender-se às pausas e aos descansos, e nos veículos que também possam ser utilizados para fins privados o trabalhador deve poder passar para um «modo privado» fora do horário. O consentimento do trabalhador não é uma base jurídica válida. Para telemóveis e computadores portáteis, a deliberação é ainda mais taxativa: não admite que a entidade empregadora monitorize a sua geolocalização nem que instale aplicações que ativem o GPS (ponto 85). No ponto 152, a deliberação ainda pede a autorização prévia da CNPD, que, desde o RGPD, já não é exigida.",
        da: 'Ifølge CNPD (beslutning 7680/2014, udstedt før GDPR og stadig offentliggjort på dens hjemmeside) må geolokalisering ikke bruges til at lokalisere medarbejderens opholdssted eller overvåge dennes præstation (art. 20 CT), må ikke omfatte pauser og hviletid, og på køretøjer, der også kan bruges privat, skal medarbejderen kunne skifte til en «privat tilstand» uden for arbejdstiden. Medarbejderens samtykke er ikke et gyldigt retsgrundlag. For mobiltelefoner og bærbare computere er beslutningen endnu strengere: Den tillader ikke, at arbejdsgiveren overvåger deres geolokalisering eller installerer apps, der aktiverer GPS-sensorerne (punkt 85). Punkt 152 beder stadig om forudgående tilladelse fra CNPD, som ikke længere anmodes om siden GDPR.',
        sv: 'Enligt CNPD (Deliberação 7680/2014, som föregår GDPR och fortfarande är publicerad på dess webbplats) får geolokalisering inte användas för att spåra den anställde eller kontrollera hans eller hennes prestation (art. 20 CT), får inte omfatta raster och vila, och i fordon som även kan användas privat ska den anställde kunna växla till «privat läge» utanför arbetstid. Den anställdes samtycke är inte en giltig grund. För mobiltelefoner och bärbara enheter är beslutet ännu tydligare: det tillåter inte att arbetsgivaren övervakar deras geolokalisering eller installerar appar som aktiverar GPS (punkt 85). I punkt 152 kräver beslutet fortfarande förhandstillstånd från CNPD, vilket efter GDPR inte längre krävs.',
        nb: 'Ifølge CNPD (Deliberação 7680/2014, som er eldre enn GDPR og fortsatt publisert på nettstedet deres) kan geolokalisering ikke brukes til å spore den ansatte eller kontrollere vedkommendes prestasjoner (art. 20 CT), kan ikke omfatte pauser og hvile, og i kjøretøy som også kan brukes privat må den ansatte kunne skifte til «privat modus» utenfor arbeidstid. Den ansattes samtykke er ikke et gyldig grunnlag. For mobiltelefoner og bærbare enheter er vedtaket enda tydeligere: det tillater ikke at arbeidsgiveren overvåker geolokaliseringen deres eller installerer apper som aktiverer GPS (punkt 85). I punkt 152 krever vedtaket fortsatt forhåndstillatelse fra CNPD, som etter GDPR ikke lenger kreves.',
        nl: 'Volgens de CNPD (Deliberatie 7680/2014, van vóór de AVG en nog steeds op haar website gepubliceerd) mag geolocatie niet dienen om de werknemer op te sporen of zijn prestaties te controleren (art. 20 CT), mag zij zich niet uitstrekken tot pauzes en rusttijden, en moet de werknemer bij voertuigen die ook privé mogen worden gebruikt buiten werktijd kunnen overschakelen naar een «privémodus». De toestemming van de werknemer is geen geldige rechtsgrond. Voor mobiele telefoons en laptops is de deliberatie nog strenger: zij staat niet toe dat de werkgever hun geolocatie volgt of apps installeert die de GPS-sensoren activeren (punt 85). In punt 152 vraagt de deliberatie nog om voorafgaande toestemming van de CNPD, die sinds de AVG niet meer wordt gevraagd.',
      },
      fonte: FONTE_CNPD_7680,
    },
    {
      voce: {
        it: "Valutazione d'impatto (AIPD) per il tracciamento della localizzazione dei lavoratori",
        en: 'Impact assessment (DPIA) for tracking the location of workers',
        de: 'Datenschutz-Folgenabschätzung (DSFA) für die Standortverfolgung von Arbeitnehmern',
        fr: 'Analyse d’impact (AIPD) pour le suivi de la localisation des travailleurs',
        es: 'Evaluación de impacto (EIPD) para el seguimiento de la localización de los trabajadores',
        pt: "Avaliação de impacto sobre a proteção de dados (AIPD) para o seguimento da localização dos trabalhadores",
        da: 'Konsekvensanalyse (DPIA) for sporing af medarbejderes position',
        sv: 'Konsekvensbedömning (AIPD) vid spårning av de anställdas position',
        nb: 'Personvernkonsekvensvurdering (AIPD) ved sporing av de ansattes posisjon',
        nl: 'Effectbeoordeling (DPIA) voor het volgen van de locatie van werknemers',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "La lista CNPD richiede una valutazione d'impatto per i trattamenti che permettono di tracciare la localizzazione o i comportamenti dei lavoratori con effetto di valutazione o classificazione (Regolamento CNPD n. 798/2018, punto 5), salvo che il trattamento sia indispensabile per un servizio richiesto specificamente dall'interessato. Un sistema che non produce alcun effetto di valutazione o classificazione può non rientrarvi: in quel caso il rischio va valutato caso per caso (art. 35 GDPR).",
        en: 'The CNPD list requires an impact assessment for processing that allows tracking the location or behaviour of workers with an evaluation or classification effect (CNPD Regulation no. 798/2018, item 5), unless the processing is indispensable for a service specifically requested by the data subject. A system that has no evaluation or classification effect may fall outside it: in that case the risk must be assessed case by case (Article 35 GDPR).',
        de: 'Die CNPD-Liste verlangt eine Folgenabschätzung für Verarbeitungen, die es ermöglichen, den Standort oder das Verhalten von Arbeitnehmern mit Bewertungs- oder Einstufungswirkung zu verfolgen (CNPD-Verordnung Nr. 798/2018, Nr. 5), es sei denn, die Verarbeitung ist für eine von der betroffenen Person ausdrücklich verlangte Dienstleistung unerlässlich. Ein System ohne Bewertungs- oder Einstufungswirkung kann außerhalb davon liegen: dann ist das Risiko im Einzelfall zu bewerten (Artikel 35 DSGVO).',
        fr: 'La liste de la CNPD exige une analyse d’impact pour les traitements permettant de suivre la localisation ou les comportements des travailleurs avec un effet d’évaluation ou de classification (règlement CNPD n° 798/2018, point 5), sauf si le traitement est indispensable à un service demandé spécifiquement par la personne concernée. Un système sans effet d’évaluation ou de classification peut ne pas en relever : le risque doit alors être apprécié au cas par cas (article 35 RGPD).',
        es: 'La lista de la CNPD exige una evaluación de impacto para los tratamientos que permiten rastrear la localización o los comportamientos de los trabajadores con efecto de evaluación o clasificación (Reglamento CNPD n.º 798/2018, punto 5), salvo que el tratamiento sea indispensable para un servicio solicitado específicamente por el interesado. Un sistema sin efecto de evaluación o clasificación puede quedar fuera: en ese caso el riesgo debe valorarse caso por caso (artículo 35 RGPD).',
        pt: "A lista da CNPD exige uma avaliação de impacto para os tratamentos que permitem seguir a localização ou os comportamentos dos trabalhadores com efeito de avaliação ou classificação (Regulamento da CNPD n.º 798/2018, ponto 5), salvo se o tratamento for indispensável para um serviço solicitado especificamente pelo titular dos dados. Um sistema sem efeito de avaliação ou classificação pode ficar de fora: nesse caso, o risco deve ser avaliado caso a caso (art. 35.º do RGPD).",
        da: "CNPD's liste kræver en konsekvensanalyse for behandling, der gør det muligt at spore medarbejderes position eller adfærd med en vurderende eller klassificerende virkning (CNPD-forordning nr. 798/2018, punkt 5), medmindre behandlingen er uundværlig for en tjeneste, som den registrerede specifikt har anmodet om. Et system uden vurderende eller klassificerende virkning kan falde uden for den: I så fald skal risikoen vurderes fra sag til sag (artikel 35 i GDPR).",
        sv: 'CNPD:s lista kräver en konsekvensbedömning för behandlingar som gör det möjligt att spåra de anställdas position eller beteende med verkan av bedömning eller klassificering (CNPD:s föreskrift nr 798/2018, punkt 5), om inte behandlingen är nödvändig för en tjänst som den registrerade specifikt har begärt. Ett system som inte medför någon bedömning eller klassificering kanske inte omfattas: i så fall ska risken bedömas från fall till fall (art. 35 GDPR).',
        nb: 'CNPDs liste krever en personvernkonsekvensvurdering for behandlinger som gjør det mulig å spore de ansattes posisjon eller atferd med virkning av vurdering eller klassifisering (CNPD-forskrift nr. 798/2018, punkt 5), med mindre behandlingen er nødvendig for en tjeneste som den registrerte spesifikt har bedt om. Et system som ikke har noen virkning av vurdering eller klassifisering, kan falle utenfor: i så fall må risikoen vurderes fra sak til sak (art. 35 GDPR).',
        nl: 'De CNPD-lijst vereist een effectbeoordeling voor verwerkingen die het mogelijk maken de locatie of het gedrag van werknemers te volgen met een evaluatie- of classificatie-effect (CNPD-reglement nr. 798/2018, punt 5), tenzij de verwerking onmisbaar is voor een door de betrokkene specifiek gevraagde dienst. Een systeem zonder evaluatie- of classificatie-effect kan daarbuiten vallen: dan moet het risico per geval worden beoordeeld (artikel 35 AVG).',
      },
      fonte: FONTE_CNPD_REG_798,
    },
    {
      voce: {
        it: 'Parere della commissione dei lavoratori, se esiste',
        en: 'Opinion of the workers\' committee, where one exists',
        de: 'Stellungnahme des Arbeitnehmerausschusses, sofern vorhanden',
        fr: 'Avis de la commission des travailleurs, si elle existe',
        es: 'Dictamen de la comisión de trabajadores, si existe',
        pt: "Parecer da comissão de trabalhadores, se existir",
        da: 'Udtalelse fra medarbejderudvalget, hvor et sådant findes',
        sv: 'Yttrande från de anställdas kommitté, om en sådan finns',
        nb: 'Uttalelse fra de ansattes utvalg, hvis et slikt finnes',
        nl: 'Advies van de ondernemingsraad, indien aanwezig',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "L'art. 21, n. 4, del Codice del lavoro prevede che la richiesta di autorizzazione alla CNPD sia accompagnata dal parere della commissione dei lavoratori (o dalla prova di averlo chiesto, se non arriva entro 10 giorni). Poiché per la CNPD l'autorizzazione non si chiede più, il parere non è più un passaggio formale certo; dove esiste una commissione dei lavoratori conviene comunque consultarla.",
        en: 'Article 21(4) of the Labour Code provides that the request for CNPD authorisation must be accompanied by the opinion of the workers\' committee (or proof that it was requested, if it does not arrive within 10 days). Since, according to the CNPD, authorisation is no longer requested, the opinion is no longer a certain formal step; where a workers\' committee exists it is nevertheless advisable to consult it.',
        de: 'Art. 21 Abs. 4 des Arbeitsgesetzbuchs sieht vor, dass dem Antrag auf Genehmigung durch die CNPD die Stellungnahme des Arbeitnehmerausschusses beizufügen ist (oder der Nachweis, dass sie angefordert wurde, falls sie nicht binnen 10 Tagen eingeht). Da die Genehmigung nach Auffassung der CNPD nicht mehr beantragt wird, ist die Stellungnahme kein sicherer formaler Schritt mehr; wo ein Arbeitnehmerausschuss besteht, ist es dennoch ratsam, ihn anzuhören.',
        fr: 'L’art. 21, n° 4, du Code du travail prévoit que la demande d’autorisation à la CNPD soit accompagnée de l’avis de la commission des travailleurs (ou de la preuve de sa demande, s’il ne parvient pas dans les 10 jours). Comme, selon la CNPD, l’autorisation n’est plus demandée, l’avis n’est plus une étape formelle certaine ; là où une commission des travailleurs existe, il reste toutefois conseillé de la consulter.',
        es: 'El art. 21, n.º 4, del Código del Trabajo prevé que la solicitud de autorización a la CNPD vaya acompañada del dictamen de la comisión de trabajadores (o de la prueba de haberlo solicitado, si no llega en 10 días). Como, según la CNPD, la autorización ya no se solicita, el dictamen deja de ser un trámite formal seguro; donde exista una comisión de trabajadores conviene, en todo caso, consultarla.',
        pt: "O art. 21, n.º 4, do Código do Trabalho prevê que o pedido de autorização à CNPD seja acompanhado do parecer da comissão de trabalhadores (ou da prova de o ter solicitado, se não chegar em 10 dias). Como, segundo a CNPD, a autorização já não é solicitada, o parecer deixa de ser um trâmite formal seguro; onde exista uma comissão de trabalhadores, convém, em todo o caso, consultá-la.",
        da: "Artikel 21, stk. 4, i arbejdskodekset (Código do Trabalho) bestemmer, at anmodningen om CNPD's tilladelse skal ledsages af medarbejderudvalgets udtalelse (eller bevis for, at den er anmodet, hvis den ikke indløber inden for 10 dage). Da tilladelse ifølge CNPD ikke længere anmodes om, er udtalelsen ikke længere et sikkert formelt skridt; hvor der findes et medarbejderudvalg, er det dog tilrådeligt at høre det.",
        sv: 'Art. 21 nr 4 i arbetslagen (Código do Trabalho) föreskriver att ansökan om tillstånd hos CNPD ska åtföljas av yttrande från de anställdas kommitté (eller av bevis på att det har begärts, om det inte kommer in inom 10 dagar). Eftersom tillstånd enligt CNPD inte längre ska sökas är yttrandet inte längre ett säkert formellt steg; där en kommitté för de anställda finns är det ändå lämpligt att samråda med den.',
        nb: 'Art. 21 nr. 4 i arbeidsloven (Código do Trabalho) bestemmer at søknaden om tillatelse hos CNPD skal ledsages av uttalelse fra de ansattes utvalg (eller av bevis for at den er bedt om, hvis den ikke kommer inn innen 10 dager). Siden tillatelse ifølge CNPD ikke lenger skal søkes, er uttalelsen ikke lenger et sikkert formelt trinn; der det finnes et utvalg for de ansatte, er det likevel lurt å rådføre seg med det.',
        nl: 'Art. 21, lid 4, van het Arbeidswetboek bepaalt dat de aanvraag voor toestemming van de CNPD vergezeld moet gaan van het advies van de ondernemingsraad (of het bewijs dat het is gevraagd, als het niet binnen 10 dagen aankomt). Omdat volgens de CNPD geen toestemming meer wordt gevraagd, is het advies geen zekere formele stap meer; waar een ondernemingsraad bestaat, is raadpleging niettemin raadzaam.',
      },
      fonte: FONTE_CT_20,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: "Informa i lavoratori sull'esistenza e lo scopo della sorveglianza (art. 20 CT).",
        en: 'Inform workers of the existence and purpose of the surveillance (art. 20 CT).',
        de: 'Unterrichten Sie die Arbeitnehmer über das Bestehen und den Zweck der Überwachung (Art. 20 CT).',
        fr: 'Informez les travailleurs de l’existence et de la finalité de la surveillance (art. 20 CT).',
        es: 'Informa a los trabajadores de la existencia y la finalidad de la vigilancia (art. 20 CT).',
        pt: "Informe os trabalhadores da existência e da finalidade da vigilância (art. 20 CT).",
        da: 'Informér medarbejderne om overvågningens eksistens og formål (art. 20 CT).',
        sv: 'Informera de anställda om att övervakningen finns och om dess ändamål (art. 20 CT).',
        nb: 'Informer de ansatte om at overvåking finnes og om formålet med den (art. 20 CT).',
        nl: 'Informeer de werknemers over het bestaan en het doel van het toezicht (art. 20 CT).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Verifica la finalità: ammessa solo per sicurezza di persone/beni o esigenze particolari dell\'attività, mai per controllare il rendimento.',
        en: 'Check the purpose: allowed only for the safety of people/property or particular needs of the activity, never to monitor performance.',
        de: 'Prüfen Sie den Zweck: nur zur Sicherheit von Personen/Sachen oder für besondere Erfordernisse der Tätigkeit zulässig, niemals zur Leistungskontrolle.',
        fr: 'Vérifiez la finalité : admise uniquement pour la sécurité des personnes/biens ou des besoins particuliers de l’activité, jamais pour contrôler le rendement.',
        es: 'Verifica la finalidad: admitida solo para la seguridad de personas/bienes o necesidades particulares de la actividad, nunca para controlar el rendimiento.',
        pt: "Verifique a finalidade: só é admitida para a segurança de pessoas/bens ou para particulares exigências da atividade, nunca para controlar o desempenho.",
        da: 'Kontrollér formålet: kun tilladt til sikkerhed for personer/ejendom eller aktivitetens særlige behov, aldrig til at overvåge præstation.',
        sv: 'Kontrollera ändamålet: tillåtet endast för säkerhet för personer/egendom eller verksamhetens särskilda behov, aldrig för att kontrollera prestation.',
        nb: 'Kontroller formålet: bare tillatt for sikkerhet for personer/eiendom eller virksomhetens særskilte behov, aldri for å kontrollere prestasjoner.',
        nl: 'Controleer het doel: alleen toegestaan voor de veiligheid van personen/goederen of bijzondere behoeften van de activiteit, nooit om de prestaties te controleren.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Se esiste una commissione dei lavoratori, consultala e chiedi il suo parere (art. 21, n. 4, CT).',
        en: 'If a workers\' committee exists, consult it and request its opinion (Article 21(4) CT).',
        de: 'Sofern ein Arbeitnehmerausschuss besteht, hören Sie ihn an und holen Sie dessen Stellungnahme ein (Art. 21 Abs. 4 CT).',
        fr: 'Si une commission des travailleurs existe, consultez-la et sollicitez son avis (art. 21, n° 4, CT).',
        es: 'Si existe una comisión de trabajadores, consúltala y solicita su dictamen (art. 21, n.º 4, CT).',
        pt: "Se existir uma comissão de trabalhadores, consulte-a e solicite o seu parecer (art. 21, n.º 4, CT).",
        da: 'Hvis der findes et medarbejderudvalg, skal du høre det og anmode om dets udtalelse (artikel 21, stk. 4, CT).',
        sv: 'Om det finns en kommitté för de anställda, samråd med den och begär dess yttrande (art. 21 nr 4 CT).',
        nb: 'Hvis det finnes et utvalg for de ansatte, rådfør deg med det og be om uttalelsen (art. 21 nr. 4 CT).',
        nl: 'Als er een ondernemingsraad bestaat, raadpleeg die en vraag zijn advies (art. 21, lid 4, CT).',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (AIPD) per il tracciamento della localizzazione.",
        en: 'Carry out the impact assessment (DPIA) for location tracking.',
        de: 'Führen Sie die Datenschutz-Folgenabschätzung (DSFA) für die Standortverfolgung durch.',
        fr: 'Réalisez l’analyse d’impact (AIPD) pour le suivi de la localisation.',
        es: 'Realiza la evaluación de impacto (EIPD) para el seguimiento de la localización.',
        pt: "Realize a avaliação de impacto (AIPD) para o seguimento da localização.",
        da: 'Gennemfør konsekvensanalysen (DPIA) for positionssporing.',
        sv: 'Genomför konsekvensbedömningen (AIPD) vid spårning av position.',
        nb: 'Gjennomfør personvernkonsekvensvurderingen (AIPD) for posisjonssporing.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor het volgen van de locatie.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema con minimizzazione: niente tracciamento del paradeiro, modo privato fuori orario, conservazione limitata.',
        en: 'Configure the system with data minimisation: no tracking of whereabouts, private mode outside working hours, limited retention.',
        de: 'Konfigurieren Sie das System mit Datenminimierung: keine Verfolgung des Aufenthaltsorts, Privatmodus außerhalb der Arbeitszeit, begrenzte Speicherdauer.',
        fr: 'Configurez le système avec minimisation des données : aucun suivi des déplacements, mode privé en dehors des heures, conservation limitée.',
        es: 'Configura el sistema con minimización de datos: sin seguimiento del paradero, modo privado fuera del horario, conservación limitada.',
        pt: "Configure o sistema com minimização dos dados: sem seguimento do paradeiro, modo privado fora do horário, conservação limitada.",
        da: 'Indstil systemet med dataminimering: ingen sporing af opholdssted, privat tilstand uden for arbejdstiden, begrænset opbevaring.',
        sv: 'Konfigurera systemet med uppgiftsminimering: ingen spårning av var den anställde befinner sig, privat läge utanför arbetstid, begränsad lagring.',
        nb: 'Konfigurer systemet med dataminimering: ingen sporing av hvor den ansatte befinner seg, privat modus utenfor arbeidstid, begrenset lagring.',
        nl: 'Configureer het systeem met gegevensminimalisatie: geen tracking van de verblijfplaats, prive-modus buiten werktijd, beperkte bewaartermijn.',
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
        pt: "Se mudar de sistema ou de software de monitorização, atualize e volte a entregar a informação, e verifique se tem de voltar a informar ou a consultar os representantes dos trabalhadores, quando a lei o prevê. Muitas vezes mudam o fornecedor (subcontratante), os dados recolhidos e as modalidades: a informação entregue antes não basta.",
        da: 'Hvis du skifter system eller overvågningssoftware, skal du opdatere og udlevere privatlivsoplysningerne igen og undersøge, om du på ny skal informere eller høre medarbejdernes repræsentanter, hvor loven kræver det. Ofte ændrer leverandøren (databehandleren), de indsamlede oplysninger og metoderne sig: de oplysninger, der blev udleveret tidligere, er ikke nok.',
        sv: 'Om du byter övervakningssystem eller programvara: uppdatera och lämna ut informationen om personuppgiftsbehandling på nytt, och kontrollera om du åter måste informera eller samråda med de anställdas företrädare, där lagen kräver det. Leverantören (personuppgiftsbiträdet), de insamlade uppgifterna och arbetssätten ändras ofta: den information som lämnades tidigare räcker inte.',
        nb: 'Hvis du bytter overvåkingssystem eller programvare, må du oppdatere og dele ut personvernerklæringen på nytt, og undersøke om du igjen må informere eller rådføre deg med de ansattes representanter, der loven krever det. Ofte endres leverandøren (databehandleren), de innsamlede opplysningene og metodene: informasjonen som ble gitt tidligere er ikke nok.',
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werkt u de privacyverklaring bij en verstrekt u deze opnieuw, en controleert u of u de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'CNPD, segnalazioni',
      portale: FONTE_CNPD_SEGNALAZIONI.url,
      urlFonte: FONTE_CNPD_SEGNALAZIONI.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'fino a 20 milioni di euro o 4% del fatturato annuo mondiale',
      en: 'up to 20 million euro or 4% of total annual worldwide turnover',
      de: 'bis zu 20 Millionen Euro oder 4% des weltweiten Jahresumsatzes',
      fr: 'jusqu’à 20 millions d’euros ou 4 % du chiffre d’affaires annuel mondial',
      es: 'hasta 20 millones de euros o el 4 % de la facturación anual mundial',
      pt: "até 20 milhões de euros ou 4 % do volume de negócios anual mundial",
      da: 'op til 20 millioner euro eller 4 % af den samlede globale årlige omsætning',
      sv: 'upp till 20 miljoner euro eller 4 % av den globala årsomsättningen',
      nb: 'opptil 20 millioner euro eller 4 % av global årlig omsetning',
      nl: 'tot 20 miljoen euro of 4% van de wereldwijde jaaromzet',
    },
    casoCitato: {
      it: "Caso reale confermato in giudizio: il Tribunal da Relação de Lisboa, con sentenza del 17 giugno 2026 (proc. 2266/25.4T8TVD.L1-4), ha confermato la condanna di un'azienda vinicola a una multa di 14.790 euro (art. 20, nn. 1 e 4, CT) per aver consultato lo storico del GPS dell'auto di una venditrice per confrontare i tragitti con i rapporti giornalieri delle visite ai clienti; il consenso o la conoscenza della lavoratrice non rendono lecito l'atto. Non abbiamo individuato una sanzione della CNPD specifica sul GPS dei lavoratori, quindi il tetto resta quello generale del GDPR (art. 83).",
      en: 'A real case confirmed in court: the Lisbon Court of Appeal (Tribunal da Relação de Lisboa), in a judgment of 17 June 2026 (case 2266/25.4T8TVD.L1-4), upheld the EUR 14,790 fine (Article 20(1) and (4) CT) imposed on a wine company for checking the GPS history of a saleswoman\'s car to compare her routes with the daily reports of customer visits; the worker\'s knowledge or consent does not make the act lawful. We have not found a CNPD sanction specific to GPS on workers, so the ceiling remains the general GDPR one (Article 83).',
      de: 'Ein realer, gerichtlich bestätigter Fall: das Berufungsgericht Lissabon (Tribunal da Relação de Lisboa) bestätigte mit Urteil vom 17. Juni 2026 (Az. 2266/25.4T8TVD.L1-4) die Geldbuße von 14.790 EUR (Art. 20 Abs. 1 und 4 CT) gegen ein Weinunternehmen, das den GPS-Verlauf des Autos einer Vertriebsmitarbeiterin abgefragt hatte, um ihre Fahrten mit den Tagesberichten der Kundenbesuche abzugleichen; Kenntnis oder Einwilligung der Mitarbeiterin machen die Handlung nicht rechtmäßig. Eine auf GPS bei Beschäftigten bezogene Sanktion der CNPD haben wir nicht gefunden, sodass die Obergrenze die allgemeine der DSGVO bleibt (Art. 83).',
      fr: 'Un cas réel confirmé en justice : la cour d’appel de Lisbonne (Tribunal da Relação de Lisboa), par arrêt du 17 juin 2026 (n° 2266/25.4T8TVD.L1-4), a confirmé l’amende de 14 790 EUR (art. 20, n° 1 et 4, CT) infligée à une entreprise vinicole qui avait consulté l’historique GPS de la voiture d’une commerciale pour comparer ses trajets avec les rapports quotidiens de visites clients ; la connaissance ou le consentement de la salariée ne rend pas l’acte licite. Nous n’avons pas trouvé de sanction de la CNPD propre au GPS des travailleurs : le plafond reste donc celui, général, du RGPD (art. 83).',
      es: 'Un caso real confirmado en los tribunales: el Tribunal da Relação de Lisboa (Audiencia de Lisboa), en sentencia de 17 de junio de 2026 (proc. 2266/25.4T8TVD.L1-4), confirmó la multa de 14.790 euros (art. 20, n.º 1 y 4, CT) a una empresa vinícola que había consultado el historial del GPS del coche de una comercial para comparar sus recorridos con los partes diarios de visitas a clientes; el conocimiento o el consentimiento de la trabajadora no hace lícito el acto. No hemos encontrado una sanción de la CNPD específica sobre el GPS de los trabajadores, por lo que el techo sigue siendo el general del RGPD (art. 83).',
      pt: "Um caso real confirmado em tribunal: o Tribunal da Relação de Lisboa, por acórdão de 17 de junho de 2026 (proc. 2266/25.4T8TVD.L1-4), confirmou a coima de 14.790 euros (art. 20, n.os 1 e 4, CT) aplicada a uma empresa vinícola que tinha consultado o histórico do GPS do automóvel de uma vendedora para comparar os seus percursos com os relatórios diários de visitas a clientes; o conhecimento ou o consentimento da trabalhadora não tornam lícito o ato. Não identificámos uma sanção da CNPD específica sobre o GPS dos trabalhadores, pelo que o limite máximo continua a ser o geral do RGPD (art. 83.º).",
      da: 'En reel sag, stadfæstet ved domstolen: Lissabons appelret (Tribunal da Relação de Lisboa) stadfæstede i en dom af 17. juni 2026 (sag 2266/25.4T8TVD.L1-4) en bøde på 14.790 euro (artikel 20, stk. 1 og 4, CT) til en vinvirksomhed, der havde kontrolleret GPS-historikken for en sælgers bil for at sammenligne hendes ruter med de daglige rapporter om kundebesøg; medarbejderens kendskab eller samtykke gør ikke handlingen lovlig. Vi har ikke fundet en CNPD-sanktion, der er specifik for GPS på medarbejdere, så loftet er fortsat det almindelige efter GDPR (artikel 83).',
      sv: 'Verkligt fall som bekräftats i domstol: Tribunal da Relação de Lisboa har genom dom av den 17 juni 2026 (mål 2266/25.4T8TVD.L1-4) fastställt en dom mot ett vinföretag till ett vite på 14 790 euro (art. 20, nr 1 och 4, CT) för att ha granskat GPS-historiken för en säljares bil för att jämföra rutterna med de dagliga rapporterna om kundbesök; den anställdas samtycke eller kännedom gör inte åtgärden laglig. Vi har inte funnit någon särskild sanktion från CNPD avseende GPS på anställda, så taket är fortfarande det allmänna enligt GDPR (art. 83).',
      nb: 'Reell sak bekreftet i retten: Tribunal da Relação de Lisboa (Lisboas lagmannsrett) bekreftet ved dom av 17. juni 2026 (sak 2266/25.4T8TVD.L1-4) en bot på 14 790 euro (art. 20, nr. 1 og 4, CT) mot en vinprodusent som hadde sett gjennom GPS-historikken til en selgers bil for å sammenligne rutene med de daglige rapportene om kundebesøk; den ansattes samtykke eller kjennskap gjør ikke handlingen lovlig. Vi har ikke funnet noen CNPD-sanksjon som er spesifikk for GPS på ansatte, så taket er fortsatt det generelle etter GDPR (art. 83).',
      nl: 'Een echte, door de rechter bevestigde zaak: het hof van beroep van Lissabon (Tribunal da Relação de Lisboa) bevestigde bij arrest van 17 juni 2026 (zaak 2266/25.4T8TVD.L1-4) de boete van 14.790 EUR (art. 20, lid 1 en 4, CT) aan een wijnbedrijf dat de gps-geschiedenis van de auto van een verkoopster had geraadpleegd om haar routes te vergelijken met de dagrapporten van klantbezoeken; de kennis of toestemming van de werkneemster maakt de handeling niet rechtmatig. We hebben geen CNPD-sanctie specifiek voor gps bij werknemers gevonden, dus het plafond blijft dat van de AVG (art. 83).',
    },
    urlFonte: FONTE_GDPR.url,
    tipoImporto: 'massimale',
  },

  fonti: [
    FONTE_LEI_58_28,
    FONTE_CNPD_494,
    FONTE_CT_20,
    FONTE_CNPD_7680,
    FONTE_LEI_58_28,
    FONTE_CNPD_VIDEOVIGILANCIA,
    FONTE_CNPD_AIPD,
    FONTE_CNPD_REG_798,
    FONTE_TRL_GPS,
    FONTE_CNPD_SEGNALAZIONI,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
