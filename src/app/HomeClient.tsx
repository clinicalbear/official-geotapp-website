'use client';

/**
 * Home nella direzione L, ricostruita sul mockup
 * docs/redesign-sito-2026-07/esplorazione/index.html.
 * I contenuti sono quelli veri del sito (dizionari): cambia come sono vestiti.
 * L'unico testo nuovo e' quello dell'apertura, come concordato.
 */

import { type ReactNode, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import FounderViewTracker from '@/components/analytics/FounderViewTracker';
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  localizePath,
} from '@/lib/i18n/locale-routing';
import { trackEvent } from '@/lib/analytics';
import { REVIEWS, resolveReviewText } from '@/data/reviews';
import { SOURCE_LOGOS, REVIEWS_COPY } from '@/components/Reviews';
import { FEATURED_LABEL } from '@/components/FeaturedIn';
import LNastro from '@/components/LNastro';

const ListedOn = dynamic(() => import('@/components/ListedOn'), { ssr: true });
const FeaturedIn = dynamic(() => import('@/components/FeaturedIn'), { ssr: true });
const TrustBar = dynamic(() => import('@/components/TrustBar'), { ssr: true });
const RoiMini = dynamic(() => import('@/components/RoiMini'), { ssr: true });
const DemoReportBanner = dynamic(() => import('@/components/DemoReportBanner'), { ssr: true });

const DIFF_COPY: Record<string, { h2_1: string; h2_2: string; desc: string; link: string }> = {
  it: { h2_1: 'Tutto quello che fanno loro, lo facciamo anche noi.', h2_2: 'Ma quello che facciamo noi, loro non possono.', desc: 'Timbratura GPS, CRM, gestione squadre: sì, facciamo tutto questo. Ma quando il cliente contesta, gli altri ti lasciano con un foglio Excel. Noi ti diamo un report sigillato, non alterabile, verificabile da chiunque, e la discussione finisce lì.', link: 'Scopri la differenza' },
  en: { h2_1: 'Everything they do, we do.', h2_2: 'But what we do, they can\'t.', desc: 'GPS tracking, CRM, team management: yes, we do all of that. But when a client disputes your work, the others leave you alone. We hand you a sealed, verified report that ends the conversation.', link: 'See the difference' },
  de: { h2_1: 'Alles, was die anderen tun, tun wir auch.', h2_2: 'Aber was wir tun, können die anderen nicht.', desc: 'GPS-Tracking, CRM, Teamverwaltung: ja, das alles machen wir auch. Aber wenn ein Kunde Ihre Arbeit bestreitet, lassen die anderen Sie allein. Wir geben Ihnen einen versiegelten, nicht veränderbaren Bericht, der die Diskussion beendet.', link: 'Den Unterschied sehen' },
  fr: { h2_1: 'Tout ce qu\'ils font, nous le faisons aussi.', h2_2: 'Mais ce que nous faisons, ils ne le peuvent pas.', desc: 'Suivi GPS, CRM, gestion d\'équipes: oui, nous faisons tout cela. Mais quand un client conteste votre travail, les autres vous laissent seul. Nous vous donnons un rapport scellé, non modifiable, vérifiable par tous.', link: 'Voir la différence' },
  nl: { h2_1: 'Alles wat zij doen, doen wij ook.', h2_2: 'Maar wat wij doen, kunnen zij niet.', desc: 'GPS-tracking, CRM, teambeheer: ja, dat doen wij ook allemaal. Maar wanneer een klant uw werk betwist, laten de anderen u alleen. Wij geven u een verzegeld, niet-wijzigbaar rapport dat de discussie beëindigt.', link: 'Ontdek het verschil' },
  es: { h2_1: 'Todo lo que ellos hacen, nosotros también.', h2_2: 'Pero lo que hacemos nosotros, ellos no pueden.', desc: 'Seguimiento GPS, CRM, gestión de equipos: sí, hacemos todo eso. Pero cuando un cliente cuestiona tu trabajo, los demás te dejan solo. Nosotros te damos un informe sellado, no alterable, verificable por cualquiera.', link: 'Ver la diferencia' },
  pt: { h2_1: 'Tudo o que eles fazem, nós também fazemos.', h2_2: 'Mas o que nós fazemos, eles não conseguem.', desc: 'Rastreamento GPS, CRM, gestão de equipes: sim, fazemos tudo isso. Mas quando um cliente contesta o seu trabalho, os outros deixam você sozinho. Nós entregamos um relatório selado, verificável, que encerra a discussão.', link: 'Veja a diferença' },
  da: { h2_1: 'Alt hvad de gør, gør vi også.', h2_2: 'Men hvad vi gør, kan de ikke.', desc: 'GPS-sporing, CRM, teamledelse: ja, det gør vi også. Men når en kunde bestrider dit arbejde, lader de andre dig alene. Vi giver dig en forseglet, ikke-ændringsbar rapport, der afslutter diskussionen.', link: 'Se forskellen' },
  sv: { h2_1: 'Allt de gör, gör vi också.', h2_2: 'Men det vi gör, kan de inte.', desc: 'GPS-spårning, CRM, teamhantering: ja, allt det gör vi också. Men när en kund ifrågasätter ditt arbete, lämnar de andra dig ensam. Vi ger dig en förseglad, ej ändringsbar rapport som avslutar diskussionen.', link: 'Se skillnaden' },
  nb: { h2_1: 'Alt de gjør, gjør vi også.', h2_2: 'Men det vi gjør, kan de ikke.', desc: 'GPS-sporing, CRM, teamledelse: ja, alt det gjør vi også. Men når en kunde bestrider arbeidet ditt, lar de andre deg alene. Vi gir deg en forseglet, ikke-endringsbar rapport som avslutter diskusjonen.', link: 'Se forskjellen' },
  ru: { h2_1: 'Всё, что делают они, делаем и мы.', h2_2: 'Но то, что делаем мы, они не могут.', desc: 'GPS-трекинг, CRM, управление командами: да, всё это мы делаем. Но когда клиент оспаривает вашу работу, другие оставляют вас одного. Мы даём вам запечатанный, неизменяемый отчёт, который завершает спор.', link: 'Увидеть разницу' },
};

/** Testi nuovi introdotti dal mockup (apertura + occhielli + conto). */
type LCopy = {
  h1a: string; h1b: string; lede: string; scroll: string; cycle: string;
  la_prova: string; il_ciclo: string; il_conto: string;
  presenti: string; chi: string; campo: string; ufficio: string; cliente: string;
  roi_h2: string; roi_p: string; roi_cta: string;
};
const L_COPY: Record<string, LCopy> = {
  it: { h1a: 'Il lavoro c’è stato.', h1b: 'Ora rendilo dimostrabile.', lede: 'Ogni intervento lascia una prova: posizione, foto e orari, chiusi in un report sigillato che il cliente verifica da solo. Alla prima contestazione non ricostruisci niente: apri il report, lo mostri, e chiudi il discorso.', scroll: 'Scorri', cycle: 'Tre strumenti, un solo ciclo: il campo registra, l’ufficio vede, il cliente verifica. Nessun passaggio a voce, nessun foglio da ricostruire il venerdì sera.', la_prova: 'La prova', il_ciclo: 'Il ciclo', il_conto: 'Il conto', presenti: 'Presenti su', chi: 'Chi lo usa', campo: 'Campo', ufficio: 'Ufficio', cliente: 'Cliente', roi_h2: 'I numeri che non guardi sono quelli che ti costano.', roi_p: 'Le ore in burocrazia, le contestazioni che paghi tu, il coordinamento fatto a voce. Non li senti uscire dal conto, ma escono. Mettici tre numeri e guarda quanto fa in un anno: di solito sorprende, e non in meglio.', roi_cta: 'Calcola il costo nascosto' },
  en: { h1a: 'The work was done.', h1b: 'Now make it provable.', lede: 'Every job leaves proof behind: location, photos and times, locked in a sealed report your client can verify on their own. When a dispute comes, you don\'t reconstruct anything: you open the report, show it, done.', scroll: 'Scroll', cycle: 'Three tools, one cycle: the field records, the office sees, the client verifies. No word of mouth, no sheet to reconstruct on Friday night.', la_prova: 'The proof', il_ciclo: 'The cycle', il_conto: 'The bill', presenti: 'Listed on', chi: 'Who uses it', campo: 'Field', ufficio: 'Office', cliente: 'Client', roi_h2: 'The numbers you don’t look at are the ones that cost you.', roi_p: 'Hours lost to paperwork, disputes you end up paying, coordination done out loud. You don’t feel them leaving the account, but they do. Put in three numbers and see what a year adds up to: it usually surprises, and not in a good way.', roi_cta: 'Calculate the hidden cost' },
  de: { h1a: 'Die Arbeit wurde gemacht.', h1b: 'Jetzt machen Sie sie beweisbar.', lede: 'Jeder Einsatz hinterlässt einen Beweis: Position, Fotos und Zeiten, verschlossen in einem versiegelten Bericht, den Ihr Kunde selbst prüfen kann. Bei einer Beanstandung rekonstruieren Sie nichts: Sie öffnen den Bericht, zeigen ihn, fertig.', scroll: 'Scrollen', cycle: 'Drei Werkzeuge, ein Kreislauf: das Feld erfasst, das Büro sieht, der Kunde prüft. Keine mündlichen Übergaben, kein Blatt, das am Freitagabend rekonstruiert werden muss.', la_prova: 'Der Beweis', il_ciclo: 'Der Kreislauf', il_conto: 'Die Rechnung', presenti: 'Gelistet auf', chi: 'Wer es nutzt', campo: 'Außendienst', ufficio: 'Büro', cliente: 'Kunde', roi_h2: 'Die Zahlen, die Sie nicht ansehen, sind die, die Sie kosten.', roi_p: 'Stunden in Bürokratie, Streitfälle, die Sie bezahlen, Koordination auf Zuruf. Man spürt nicht, wie sie vom Konto gehen, aber sie gehen. Geben Sie drei Zahlen ein und sehen Sie, was ein Jahr ergibt: meist überrascht es, und nicht positiv.', roi_cta: 'Versteckte Kosten berechnen' },
  fr: { h1a: 'Le travail a été fait.', h1b: 'Rendez-le prouvable.', lede: 'Chaque intervention laisse une preuve: position, photos et horaires, enfermés dans un rapport scellé que votre client peut vérifier lui-même. À la première contestation, vous ne reconstituez rien: vous ouvrez le rapport, vous le montrez, c\'est réglé.', scroll: 'Faites défiler', cycle: 'Trois outils, un seul cycle: le terrain enregistre, le bureau voit, le client vérifie. Aucune transmission orale, aucune feuille à reconstituer le vendredi soir.', la_prova: 'La preuve', il_ciclo: 'Le cycle', il_conto: 'Le compte', presenti: 'Présents sur', chi: 'Qui l’utilise', campo: 'Terrain', ufficio: 'Bureau', cliente: 'Client', roi_h2: 'Les chiffres que vous ne regardez pas sont ceux qui vous coûtent.', roi_p: 'Les heures de paperasse, les contestations que vous payez, la coordination à la voix. Vous ne les sentez pas sortir du compte, mais ils sortent. Entrez trois chiffres et regardez ce que ça donne sur un an: en général, ça surprend, et pas en bien.', roi_cta: 'Calculer le coût caché' },
  es: { h1a: 'El trabajo se hizo.', h1b: 'Ahora hazlo demostrable.', lede: 'Cada intervención deja una prueba: posición, fotos y horarios, cerrados en un informe sellado que tu cliente puede verificar por sí mismo. Ante una disputa no reconstruyes nada: abres el informe, lo muestras y listo.', scroll: 'Desplázate', cycle: 'Tres herramientas, un solo ciclo: el campo registra, la oficina ve, el cliente verifica. Nada de boca en boca, ninguna hoja que reconstruir el viernes por la noche.', la_prova: 'La prueba', il_ciclo: 'El ciclo', il_conto: 'La cuenta', presenti: 'Presentes en', chi: 'Quién lo usa', campo: 'Campo', ufficio: 'Oficina', cliente: 'Cliente', roi_h2: 'Los números que no miras son los que te cuestan.', roi_p: 'Las horas de burocracia, las disputas que pagas tú, la coordinación de viva voz. No los sientes salir de la cuenta, pero salen. Pon tres números y mira cuánto suma en un año: suele sorprender, y no para bien.', roi_cta: 'Calcula el coste oculto' },
  pt: { h1a: 'O trabalho foi feito.', h1b: 'Agora torne-o comprovável.', lede: 'Cada intervenção deixa uma prova: posição, fotos e horários, fechados num relatório selado que o seu cliente pode verificar sozinho. Perante uma contestação não reconstrói nada: abre o relatório, mostra-o e pronto.', scroll: 'Role', cycle: 'Três ferramentas, um só ciclo: o campo regista, o escritório vê, o cliente verifica. Nenhuma passagem de boca, nenhuma folha para reconstruir na sexta à noite.', la_prova: 'A prova', il_ciclo: 'O ciclo', il_conto: 'A conta', presenti: 'Presentes em', chi: 'Quem o usa', campo: 'Campo', ufficio: 'Escritório', cliente: 'Cliente', roi_h2: 'Os números que não olha são os que lhe custam.', roi_p: 'As horas de burocracia, as contestações que paga, a coordenação feita de viva voz. Não os sente a sair da conta, mas saem. Ponha três números e veja quanto dá num ano: costuma surpreender, e não pela positiva.', roi_cta: 'Calcular o custo oculto' },
  nl: { h1a: 'Het werk is gedaan.', h1b: 'Maak het nu aantoonbaar.', lede: 'Elke klus laat bewijs achter: locatie, foto\'s en tijden, vastgelegd in een verzegeld rapport dat uw klant zelf kan verifiëren. Bij een geschil reconstrueert u niets: u opent het rapport, laat het zien, klaar.', scroll: 'Scroll', cycle: 'Drie tools, één cyclus: het veld registreert, het kantoor ziet, de klant verifieert. Geen mondelinge overdracht, geen blad om op vrijdagavond te reconstrueren.', la_prova: 'Het bewijs', il_ciclo: 'De cyclus', il_conto: 'De rekening', presenti: 'Vermeld op', chi: 'Wie het gebruikt', campo: 'Buitendienst', ufficio: 'Kantoor', cliente: 'Klant', roi_h2: 'De cijfers waar u niet naar kijkt, zijn de cijfers die u geld kosten.', roi_p: 'De uren aan administratie, de geschillen die u betaalt, de coördinatie op de gang. U voelt ze niet van de rekening gaan, maar ze gaan. Vul drie cijfers in en zie wat een jaar oplevert: meestal verrast het, en niet positief.', roi_cta: 'Bereken de verborgen kosten' },
  da: { h1a: 'Arbejdet blev udført.', h1b: 'Gør det nu beviseligt.', lede: 'Hver opgave efterlader et bevis: position, fotos og tidspunkter, låst i en forseglet rapport, som din kunde selv kan verificere. Ved en tvist rekonstruerer du intet: du åbner rapporten, viser den, færdig.', scroll: 'Rul', cycle: 'Tre værktøjer, én cyklus: marken registrerer, kontoret ser, kunden verificerer. Ingen mundtlige overleveringer, intet ark der skal rekonstrueres fredag aften.', la_prova: 'Beviset', il_ciclo: 'Cyklussen', il_conto: 'Regningen', presenti: 'Optaget på', chi: 'Hvem bruger det', campo: 'Marken', ufficio: 'Kontoret', cliente: 'Kunden', roi_h2: 'De tal, du ikke kigger på, er dem, der koster dig.', roi_p: 'Timerne til bureaukrati, tvisterne du selv betaler, koordineringen på mundtlig basis. Du mærker dem ikke forlade kontoen, men de gør det. Indtast tre tal og se, hvad et år løber op i: det overrasker som regel, og ikke positivt.', roi_cta: 'Beregn de skjulte omkostninger' },
  sv: { h1a: 'Arbetet blev gjort.', h1b: 'Gör det nu bevisbart.', lede: 'Varje uppdrag lämnar ett bevis: position, foton och tider, låsta i en förseglad rapport som din kund kan verifiera själv. Vid en tvist rekonstruerar du ingenting: du öppnar rapporten, visar den, klart.', scroll: 'Scrolla', cycle: 'Tre verktyg, en cykel: fältet registrerar, kontoret ser, kunden verifierar. Inga muntliga överlämningar, inget blad att rekonstruera på fredagskvällen.', la_prova: 'Beviset', il_ciclo: 'Cykeln', il_conto: 'Notan', presenti: 'Listade på', chi: 'Vilka använder det', campo: 'Fältet', ufficio: 'Kontoret', cliente: 'Kunden', roi_h2: 'Siffrorna du inte tittar på är de som kostar dig.', roi_p: 'Timmarna i byråkrati, tvisterna du betalar, samordningen på muntlig väg. Du känner inte att de lämnar kontot, men det gör de. Fyll i tre siffror och se vad ett år blir: det brukar överraska, och inte på ett bra sätt.', roi_cta: 'Beräkna den dolda kostnaden' },
  nb: { h1a: 'Arbeidet ble gjort.', h1b: 'Gjør det nå beviselig.', lede: 'Hvert oppdrag etterlater et bevis: posisjon, bilder og tidspunkter, låst i en forseglet rapport som kunden din kan verifisere selv. Ved en tvist rekonstruerer du ingenting: du åpner rapporten, viser den, ferdig.', scroll: 'Rull', cycle: 'Tre verktøy, én syklus: feltet registrerer, kontoret ser, kunden verifiserer. Ingen muntlige overleveringer, ingen ark å rekonstruere fredag kveld.', la_prova: 'Beviset', il_ciclo: 'Syklusen', il_conto: 'Regnestykket', presenti: 'Oppført på', chi: 'Hvem bruker det', campo: 'Felt', ufficio: 'Kontor', cliente: 'Kunde', roi_h2: 'Tallene du ikke ser på, er de som koster deg.', roi_p: 'Timene med byråkrati, tvistene du betaler, koordineringen på muntlig basis. Du merker ikke at de forlater kontoen, men det gjør de. Legg inn tre tall og se hva et år utgjør: det overrasker som regel, og ikke positivt.', roi_cta: 'Beregn den skjulte kostnaden' },
  ru: { h1a: 'Работа была сделана.', h1b: 'Теперь сделайте её доказуемой.', lede: 'Каждый выезд оставляет доказательство: позиция, фото и время, закрытые в запечатанном отчёте, который клиент может проверить сам. При споре вы ничего не восстанавливаете: открываете отчёт, показываете его, и всё.', scroll: 'Листайте', cycle: 'Три инструмента, один цикл: поле записывает, офис видит, клиент проверяет. Никаких устных передач, никаких листов, которые нужно восстанавливать в пятницу вечером.', la_prova: 'Доказательство', il_ciclo: 'Цикл', il_conto: 'Счёт', presenti: 'Мы представлены на', chi: 'Кто им пользуется', campo: 'Поле', ufficio: 'Офис', cliente: 'Клиент', roi_h2: 'Цифры, на которые вы не смотрите, и есть те, что вам стоят денег.', roi_p: 'Часы на бюрократию, споры, которые оплачиваете вы, координация на словах. Вы не чувствуете, как они уходят со счёта, но они уходят. Введите три числа и посмотрите, сколько набегает за год: обычно это удивляет, и не в лучшую сторону.', roi_cta: 'Рассчитать скрытые расходы' },
};

const SETTORI_IMGS: Record<string, { img: string; pos: string }> = {
  installatori: { img: '/bg1.webp', pos: 'center 42%' },
  pulizie: { img: '/bg2.webp', pos: 'center 38%' },
  sicurezza: { img: '/bg3.webp', pos: 'center 40%' },
  elettricisti: { img: '/settore-elettricisti.webp', pos: 'center 40%' },
  idraulici: { img: '/settore-idraulici.webp', pos: 'center 42%' },
  termoidraulici: { img: '/settore-termoidraulici.webp', pos: 'center 38%' },
};

export default function Home({ jrSlot, fqSlot }: { jrSlot?: ReactNode; fqSlot?: ReactNode } = {}) {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
  const dict = getDictionary(currentLocale);
  const getLink = (path: string) => localizePath(path, currentLocale);
  const D = DIFF_COPY[currentLocale] ?? DIFF_COPY.en;
  const L = L_COPY[currentLocale] ?? L_COPY.en;

  const seqRef = useRef<HTMLElement>(null);
  const stickRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const pg1Ref = useRef<HTMLElement>(null);
  const pg2Ref = useRef<HTMLElement>(null);
  const pg3Ref = useRef<HTMLElement>(null);
  const accRef = useRef<HTMLElement>(null);
  const [scene, setScene] = useState(0);

  /* la sequenza: barra che si riempie, contatore che cambia;
     il mazzo: quanto ogni pagina e' coperta da quella che le sale sopra */
  useEffect(() => {
    let tick = false;
    let cur = -1;
    const onScroll = () => {
      if (tick) return; tick = true;
      requestAnimationFrame(() => {
        const seq = seqRef.current; const stick = stickRef.current;
        if (seq && stick) {
          const b = seq.getBoundingClientRect();
          let p = (-b.top) / (b.height - innerHeight);
          p = p < 0 ? 0 : (p > 1 ? 1 : p);
          stick.style.setProperty('--p', p.toFixed(4));
          const i = Math.min(2, Math.floor(p * 3));
          if (i !== cur) { cur = i; setScene(i); }
        }
        const pages = [pg1Ref.current, pg2Ref.current, pg3Ref.current, accRef.current];
        for (let i = 0; i < pages.length - 1; i++) {
          const a = pages[i]; const nb = pages[i + 1];
          if (!a || !nb) continue;
          const r = nb.getBoundingClientRect();
          const c = 1 - Math.min(1, Math.max(0, r.top / innerHeight));
          a.style.setProperty('--cov', c.toFixed(3));
        }
        tick = false;
      });
    };
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    onScroll();
    return () => { removeEventListener('scroll', onScroll); removeEventListener('resize', onScroll); };
  }, []);

  /* il report ruota quando entra in campo */
  useEffect(() => {
    const st = stageRef.current;
    if (!st) return;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.25 });
    io.observe(st);
    return () => io.disconnect();
  }, []);

  /* entrando nella pagina del report, un secondo di sosta perche' la si veda */
  useEffect(() => {
    const rep = pg1Ref.current;
    if (!rep) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!matchMedia('(hover:hover)').matches) return;
    let used = false;
    const block = (e: Event) => e.preventDefault();
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (!used && e.isIntersecting && e.intersectionRatio > 0.82) {
          used = true;
          rep.classList.add('hold');
          addEventListener('wheel', block, { passive: false });
          addEventListener('touchmove', block, { passive: false });
          setTimeout(() => {
            removeEventListener('wheel', block);
            removeEventListener('touchmove', block);
            rep.classList.remove('hold');
          }, 1000);
        }
      });
    }, { threshold: [0.82] });
    io.observe(rep);
    return () => {
      io.disconnect();
      removeEventListener('wheel', block);
      removeEventListener('touchmove', block);
    };
  }, []);

  /* la barra mobile fissa sparisce quando si arriva alla chiusura */
  useEffect(() => {
    const bar = document.getElementById('sticky-mobile-cta');
    const end = document.getElementById('home-end');
    if (!bar || !end) return;
    const observer = new IntersectionObserver(
      ([entry]) => { bar.style.display = entry.isIntersecting ? 'none' : ''; },
      { threshold: 0.3 }
    );
    observer.observe(end);
    return () => observer.disconnect();
  }, []);

  const problems = dict.landing.problem_items as { title: string; desc: string }[];
  const core = dict.home_sections.core;
  const settori = dict.home_sections.settori as Record<string, any>;
  const sectorNames = dict.navbar.sectors as Record<string, string>;
  const seqImgs = ['/geo-scena-telefonata.webp', '/geo-scena-carte.webp', '/geo-scena-furgone.webp'];

  const prodotti = [
    {
      kk: `GeoTapp TimeTracker · ${L.campo}`,
      d: dict.home_sections.app,
      href: getLink('/products/geotapp-timetracker'),
      feats: [
        `<strong>${dict.home_sections.app.card_gps.title}</strong>: ${dict.home_sections.app.card_gps.desc}`,
        `<strong>${dict.home_sections.app.card_gdpr.title}</strong>: ${dict.home_sections.app.card_gdpr.desc}`,
      ],
      bg: '/geo-tt-campo.webp',
      dev: (
        <div className="phone">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/TT1.webp" alt="GeoTapp TimeTracker" loading="lazy" />
        </div>
      ),
    },
    {
      kk: `GeoTapp Flow · ${L.ufficio}`,
      d: dict.home_sections.flow,
      href: getLink('/products/geotapp-flow'),
      feats: [dict.home_sections.flow.features.crm, dict.home_sections.flow.features.pipeline],
      bg: '/geo-flow-ufficio-sx.webp',
      dev: (
        <div className="browser">
          <div className="bar"><i /><i /><i /><b>GeoTapp Flow</b></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/schermataFlow.webp" alt="GeoTapp Flow" loading="lazy" />
        </div>
      ),
    },
    {
      kk: `GeoTapp Verifier · ${L.cliente}`,
      d: dict.home_sections.verifier,
      href: getLink('/products/geotapp-verifier'),
      feats: [dict.home_sections.verifier.features.integrity, dict.home_sections.verifier.features.independent],
      bg: '/geo-verifier-cliente.webp',
      dev: (
        <div className="sheet">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/verifier-report.webp" alt="Report GeoTapp" loading="lazy" />
        </div>
      ),
    },
  ];

  const sectorSlugs = ['installatori', 'pulizie', 'sicurezza', 'elettricisti', 'idraulici', 'termoidraulici'];

  return (
    <div className="lp-l lp-home">
      {/* ── apertura: la foto, e sopra la frase corta ── */}
      <section className="op">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/bg1.webp" alt="" fetchPriority="high" />
        <div className="sc" />
        <div className="w">
          <div className="top">
            <span><i>✓</i>{dict.landing.trust_gdpr}</span>
            <span><i>◎</i>{dict.landing.trust_gps}</span>
            <span><i>⇄</i>{dict.landing.trust_offline}</span>
            <span><i>◉</i>{dict.landing.trust_eu_data}</span>
          </div>
          <h1><span><b>{L.h1a}</b></span><span><b>{L.h1b}</b></span></h1>
          <div className="low">
            <p>{L.lede}</p>
            <div className="acts">
              <Link className="b1" href={getLink('/trial')} onClick={() => trackEvent('trial_click', { cta_source: 'homepage_hero', cta_locale: currentLocale })}>
                {dict.landing.hero_cta_primary}
              </Link>
              <Link className="b2" href={getLink('/settori')}>{dict.landing.hero_cta_secondary}</Link>
            </div>
          </div>
        </div>
        <p className="cue k"><s />{L.scroll}</p>
      </section>

      {/* ── il nastro, nei tre colori del marchio ── */}
      <LNastro />

      {/* ── il claim lungo ── */}
      <section className="cl"><div className="w">
        <h2 className="r"><span>{D.h2_1}</span><span className="s">{D.h2_2}</span></h2>
        <div className="row">
          <p className="r d1">{D.desc}</p>
          <p className="r d2" style={{ color: '#6B7563' }}>{L.cycle}</p>
        </div>
      </div></section>

      {/* ── presenti su: directory e stampa vere del sito ── */}
      <section className="dirs">
        <div className="w"><p className="kk k r dirs-kk">{L.presenti}</p></div>
        <div className="host host-ink">
          <ListedOn locale={currentLocale} />
        </div>
        <div className="w"><p className="kk k r dirs-kk">{FEATURED_LABEL[currentLocale] ?? FEATURED_LABEL.en}</p></div>
        <div className="host">
          <FeaturedIn locale={currentLocale} />
        </div>
      </section>

      {/* ── la sequenza: la foto resta, le scene cambiano ── */}
      <section className="seq" ref={seqRef} style={{ height: '340vh' }}>
        <div className="stick" ref={stickRef}>
          {seqImgs.map((src, i) => (
            <div key={src} className={`fr${scene === i ? ' on' : ''}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" loading="lazy" />
            </div>
          ))}
          <div className="veil" />
          <div className="prog"><i /></div>
          <div className="hd"><div className="w"><h2>{dict.landing.problem_subtitle}</h2></div></div>
          <div className="hold"><div className="w"><div className="cap">
            <p className="lbl k"><s />{dict.landing.problem_title}</p>
            <div className="tx">
              {problems.map((item, i) => (
                <article key={i} className={scene === i ? 'on' : ''}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div></div></div>
          <div className="cnt">
            <div className="num">
              {problems.map((_, i) => (
                <span key={i} className={scene === i ? 'on' : ''}>{String(i + 1).padStart(2, '0')}</span>
              ))}
            </div>
            <span className="of">di 0{problems.length}</span>
            <div className="tk">
              {problems.map((_, i) => <i key={i} className={scene === i ? 'on' : ''} />)}
            </div>
          </div>
          <p className="hint k"><s />{L.scroll}</p>
        </div>
      </section>

      {/* ── le pagine che si impilano ── */}
      <div className="deck">
        <section className="scr pg1" ref={pg1Ref}><div className="w">
          <p className="kk k">{L.la_prova}</p>
          <div className="g">
            <div>
              <h2>{dict.landing.report_section_title}</h2>
              <p className="s">{dict.landing.report_section_subtitle}</p>
              <p className="b">{dict.landing.report_section_body}</p>
              <ul>
                <li>{dict.landing.report_feature_1}</li>
                <li>{dict.landing.report_feature_2}</li>
                <li>{dict.landing.report_feature_3}</li>
                <li>{dict.landing.report_feature_4}</li>
              </ul>
            </div>
            <div className="stage" ref={stageRef}>
              <div className="sheet">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/verifier-report.webp" alt="Report certificato GeoTapp" loading="lazy" />
              </div>
            </div>
          </div>
        </div></section>

        <section className="scr pg2" ref={pg2Ref}><div className="w">
          <p className="kk k">{core.badge}</p>
          <div className="hd2">
            <div>
              <h2>{core.title}</h2>
              <p className="sub">{core.subtitle}</p>
            </div>
            <div className="lead">
              <span className="n k">{L.il_ciclo}</span>
              <b>{core.features[0].title}</b>
              <p dangerouslySetInnerHTML={{ __html: core.features[0].desc }} />
            </div>
          </div>
          <div className="three">
            {core.features.slice(1).map((f: { title: string; desc: string }, i: number) => (
              <article key={i}>
                <span className="nn">{String(i + 1).padStart(2, '0')}</span>
                <b>{f.title}</b>
                <p dangerouslySetInnerHTML={{ __html: f.desc }} />
              </article>
            ))}
          </div>
        </div></section>

        <section className="scr pg3" ref={pg3Ref}><div className="w">
          <p className="kk k">{L.il_conto}</p>
          <div className="g">
            <div>
              <h2>{L.roi_h2}</h2>
              <p>{L.roi_p}</p>
            </div>
            <div className="card">
              <b>{dict.landing.roi_mini.title}</b>
              <Link href={getLink('/roi-calculator')}>{L.roi_cta}</Link>
            </div>
          </div>
        </div></section>
      </div>

      {/* ── i tre strumenti: pannelli che si aprono ── */}
      <section className="acc" ref={accRef}>
        {prodotti.map((p) => (
          <div className="p" key={p.kk}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="bg" src={p.bg} alt="" loading="lazy" />
            <div className="sh" />
            <div className="dev">{p.dev}</div>
            <div className="ct">
              <p className="kk k">{p.kk}</p>
              <h3>{p.d.title}</h3>
              <div className="cl2">
                <p dangerouslySetInnerHTML={{ __html: p.d.subtitle }} />
                {p.feats && (
                  <ul className="feats">
                    {p.feats.map((f: string, fi: number) => (
                      <li key={fi} dangerouslySetInnerHTML={{ __html: f }} />
                    ))}
                  </ul>
                )}
                <Link href={p.href}>{p.d.link}</Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── il calcolatore vero e il report demo, contenuti del sito ── */}
      <section className="roi-wrap">
        <div className="wn">
          <RoiMini dict={dict} locale={currentLocale} />
          <div style={{ marginTop: 40 }}>
            <DemoReportBanner />
          </div>
        </div>
      </section>

      {/* ── fascia trial (testi del sito online) ── */}
      <section style={{ padding: '72px 0', borderTop: '1px solid rgba(14,14,12,.14)' }}>
        <div className="wn" style={{ textAlign: 'center' }}>
          <h2 className="r" style={{ fontSize: 'clamp(26px,3vw,48px)', marginBottom: 12 }}>
            {(dict.landing as any)?.trial_cta_headline ?? 'Provalo gratis per 14 giorni'}
          </h2>
          <p className="r d1" style={{ color: '#4A5244', marginBottom: 26 }}>
            {(dict.landing as any)?.trial_cta_subtitle ?? 'Nessuna carta di credito richiesta'}
          </p>
          <div className="r d2" style={{ display: 'flex', justifyContent: 'center' }}>
            <Link className="b1" href={getLink('/trial')} onClick={() => trackEvent('trial_click', { cta_source: 'homepage_cta_band', cta_locale: currentLocale })}>
              {dict.landing.hero_cta_primary}
            </Link>
          </div>
        </div>
      </section>

      {/* ── barra fiducia (numeri veri) ── */}
      <TrustBar locale={currentLocale} />

      {/* ── il fondatore ── */}
      {(() => {
        const f = dict.chi_siamo.founder;
        const storyLabel = ({ it: 'La nostra storia', en: 'Our story', de: 'Unsere Geschichte', fr: 'Notre histoire', es: 'Nuestra historia', pt: 'A nossa história', nl: 'Ons verhaal', ru: 'Наша история', da: 'Vores historie', sv: 'Vår historia', nb: 'Vår historie' } as Record<string, string>)[currentLocale] ?? 'Our story';
        return (
          <section className="fdr"><div className="wn">
            <FounderViewTracker source="homepage_block" />
            <p className="kk k r" style={{ color: '#5E7C1E', marginBottom: 34 }}>{f.section_label}</p>
            <div className="g">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="r-s" src="/michele-petraroli.webp" alt={`${f.name}, ${f.role} GeoTapp`} loading="lazy" />
              <blockquote className="r d1">
                <p>&ldquo;{dict.chi_siamo.mission_quote}&rdquo;</p>
                <cite><b>{f.name}</b><span>{f.role}</span></cite>
                <div><Link className="b2i" href={getLink('/chi-siamo')}>{storyLabel} &rarr;</Link></div>
              </blockquote>
            </div>
          </div></section>
        );
      })()}

      {/* ── settori ── */}
      <section className="set"><div className="w">
        <div className="hd">
          <h2 className="r">{settori.title}</h2>
          <p className="r d1">{settori.subtitle}</p>
        </div>
        <div className="setg">
          {sectorSlugs.map((slug, i) => {
            const s = settori[slug] as { name?: string; desc?: string; cta?: string } | undefined;
            const img = SETTORI_IMGS[slug];
            return (
              <Link key={slug} className={`r-s d${Math.min(i + 1, 4)}`} href={getLink(`/settori/${slug}`)}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.img} alt={s?.name ?? sectorNames[slug] ?? slug} loading="lazy" style={{ objectPosition: img.pos }} />
                <div className="cp">
                  <h3>{s?.name ?? sectorNames[slug] ?? slug}</h3>
                  {s?.desc && <p>{s.desc}</p>}
                  <span className="go">{(s?.cta ?? settori.see_all)} &rarr;</span>
                </div>
              </Link>
            );
          })}
        </div>
        <div style={{ marginTop: 28 }}>
          <Link href={getLink('/settori')} className="k" style={{ color: '#5E7C1E' }}>{settori.see_all} &rarr;</Link>
        </div>
      </div></section>

      {/* ── voci: le recensioni vere ── */}
      <section className="rev"><div className="wn">
        <p className="kk k r">{L.chi}</p>
        {(() => {
          const rc = REVIEWS_COPY[currentLocale] ?? REVIEWS_COPY.en;
          const avg = REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length;
          const avgStr = avg.toLocaleString(currentLocale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
          return (
            <div className="r d1" style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 'clamp(24px,2.8vw,44px)', marginBottom: 12 }}>{rc.heading}</h2>
              <p style={{ color: 'rgba(242,240,233,.66)', margin: 0 }}>{rc.subheading}</p>
              <p className="k" style={{ color: '#8FC436', fontSize: 12, marginTop: 10 }}>
                {rc.aggregateLine.replace('{avg}', avgStr).replace('{count}', String(REVIEWS.length))}
              </p>
            </div>
          );
        })()}
        {REVIEWS.map((r, i) => {
          const { text } = resolveReviewText(r, currentLocale);
          const meta = [r.reviewer.role, r.reviewer.industry, r.reviewer.companySize].filter(Boolean).join(' · ');
          const Logo = SOURCE_LOGOS[r.source];
          return (
            <blockquote key={r.id} className={`r d${Math.min(i + 1, 4)}`}>
              <cite>
                <b>{r.reviewer.displayName}</b>
                <span>{meta}</span>
                <span className="stars" style={{ display: 'flex', flexDirection: 'row', gap: 3 }} aria-label={`${r.rating}/5`}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <svg key={n} width="15" height="15" viewBox="0 0 24 24" fill={n <= r.rating ? '#8FC436' : 'rgba(242,240,233,.22)'} aria-hidden="true"><path d="M12 0l2.927 8.986H24l-7.336 5.328 2.8 8.614L12 17.6l-7.464 5.328 2.8-8.614L0 8.986h9.073z"/></svg>
                  ))}
                </span>
                <a className="src" href={r.sourceUrl} target="_blank" rel="noopener noreferrer nofollow"><Logo /></a>
              </cite>
              <p>&ldquo;{text.quote}&rdquo;</p>
            </blockquote>
          );
        })}
        <p className="r" style={{ marginTop: 26, fontSize: 13, color: 'rgba(242,240,233,.45)', maxWidth: '64ch' }}>
          {(REVIEWS_COPY[currentLocale] ?? REVIEWS_COPY.en).translationNote}
        </p>
      </div></section>

      {/* ── letture: gli ultimi articoli veri del blog ── */}
      {jrSlot && (
        <section className="jr jr-wrap"><div className="w">{jrSlot}</div></section>
      )}

      {/* ── domande, che si aprono con calma ── */}
      {fqSlot && (
        <section className="fq fq-wrap"><div className="w">{fqSlot}</div></section>
      )}

      {/* ── ultima inquadratura ── */}
      <section className="end" id="home-end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/geo-fine-serata.webp" alt="" loading="lazy" />
        <div className="ov" />
        <div className="w">
          <h2 className="r" dangerouslySetInnerHTML={{ __html: dict.home_sections.footer_cta.title }} />
          <p className="r d1">{dict.home_sections.footer_cta.subtitle}</p>
          <div className="acts r d2">
            <Link className="b1" href={getLink('/trial')} onClick={() => trackEvent('trial_click', { cta_source: 'homepage_cta', cta_locale: currentLocale })}>
              {dict.landing.hero_cta_primary}
            </Link>
            <Link className="b2" href={getLink('/contact')}>{dict.home_sections.footer_cta.button}</Link>
          </div>
          <div style={{ marginTop: 22 }}>
            <Link href={getLink('/pricing')} className="k" style={{ color: 'rgba(255,255,255,.6)' }}>
              {dict.home_sections.footer_cta.pricing_link}
            </Link>
          </div>
        </div>
      </section>

      {/* ── barra mobile fissa ── */}
      <div
        id="sticky-mobile-cta"
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-sm border-t border-slate-200 px-4 py-3 shadow-2xl"
      >
        <p className="text-xs text-slate-500 text-center mb-1">
          {(dict.landing as any)?.sticky_cta_subtitle ?? '14 giorni gratis, nessuna carta di credito'}
        </p>
        <Link
          href={getLink('/trial')}
          onClick={() => trackEvent('trial_click', { cta_source: 'homepage_sticky', cta_locale: currentLocale })}
          className="btn-ring w-full"
        >
          {dict.landing.hero_cta_primary}
        </Link>
      </div>
    </div>
  );
}
