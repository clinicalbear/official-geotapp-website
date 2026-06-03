'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin, Camera, FileCheck, Zap, Sparkles, Wrench, Shield, Brush } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

// ─── Types ────────────────────────────────────────────────────────────────────

export type Sector = 'pulizie' | 'installatori' | 'sicurezza';

export type Article = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  url: string;
  image: string | null;
  sector?: Sector | null;
};

type Props = { articles: Article[]; locale?: string };

// ─── Localized UI texts (11 languages) ───────────────────────────────────────

type UIStrings = {
  badge: string;
  h1a: string; h1b: string; sub: string;
  ctaPrimary: string; ctaPrimaryNote: string; ctaSecondary: string;
  trust1: string; trust2: string; trust3: string;
  sectorEyebrow: string; sectorTitle: string;
  sectorPulizie: string; sectorPulizieDesc: string;
  sectorInstallatori: string; sectorInstallatoriDesc: string;
  sectorSicurezza: string; sectorSicurezzaDesc: string;
  sectorFallback: string;
  sectorBadgePulizie: string; sectorBadgeInstallatori: string; sectorBadgeSicurezza: string;
  blogLabel: string; blogTitle: string; blogAll: string; blogEmpty: string;
  bottomEyebrow: string; bottomTitle: string; bottomSub: string; bottomCta: string;
  quickLabel: string; pricing: string; contact: string; mainSite: string;
  followUs: string; privacy: string; terms: string;
};

const UI: Record<string, UIStrings> = {
  it: {
    badge: 'Verifica lavoro sul campo',
    h1a: 'Prove GPS, foto e report', h1b: 'verificabili. Sul campo.',
    sub: 'Certifica ogni intervento in tempo reale. Niente carta, niente dubbi, zero contestazioni.',
    ctaPrimary: 'Prova GeoTapp gratis',
    ctaPrimaryNote: 'Solo email · Nessuna carta · Pronto in 30 secondi',
    ctaSecondary: 'Prenota una demo',
    trust1: 'GPS verificato', trust2: 'Foto real-time', trust3: 'Report firmati',
    sectorEyebrow: 'Per il tuo settore', sectorTitle: 'Soluzioni dedicate',
    sectorPulizie: 'Imprese di pulizia', sectorPulizieDesc: 'Tracciabilità interventi e turni',
    sectorInstallatori: 'Installatori e tecnici', sectorInstallatoriDesc: 'Report verificabili per ogni intervento',
    sectorSicurezza: 'Sicurezza e vigilanza', sectorSicurezzaDesc: 'Ronde, presidi e prove operative',
    sectorFallback: 'Non trovi il tuo settore? Provalo gratis →',
    sectorBadgePulizie: 'Pulizie', sectorBadgeInstallatori: 'Installatori', sectorBadgeSicurezza: 'Sicurezza',
    blogLabel: 'Dal blog', blogTitle: 'Risorse e approfondimenti', blogAll: 'Tutti →', blogEmpty: 'Articoli in arrivo.',
    bottomEyebrow: 'Pronto a iniziare?',
    bottomTitle: 'Provalo sul campo oggi stesso',
    bottomSub: 'Crea l\'account in 30 secondi · Senza carta di credito',
    bottomCta: 'Inizia il trial gratis',
    quickLabel: 'Link utili',
    pricing: 'Prezzi e piani', contact: 'Richiedi informazioni', mainSite: 'Vai al sito principale',
    followUs: 'Seguici', privacy: 'Privacy', terms: 'Termini',
  },
  en: {
    badge: 'Verify field work',
    h1a: 'GPS proof, photos and reports', h1b: 'verifiable. On the field.',
    sub: 'Certify every job in real time. No card, no doubts, zero disputes.',
    ctaPrimary: 'Try GeoTapp free',
    ctaPrimaryNote: 'Email only · No credit card · Ready in 30 seconds',
    ctaSecondary: 'Book a demo',
    trust1: 'Verified GPS', trust2: 'Real-time photos', trust3: 'Signed reports',
    sectorEyebrow: 'For your industry', sectorTitle: 'Tailored solutions',
    sectorPulizie: 'Cleaning companies', sectorPulizieDesc: 'Job tracking and shift logs',
    sectorInstallatori: 'Installers and technicians', sectorInstallatoriDesc: 'Verifiable reports for every job',
    sectorSicurezza: 'Security and patrols', sectorSicurezzaDesc: 'Rounds, posts and operational proof',
    sectorFallback: 'Not your industry? Try it free →',
    sectorBadgePulizie: 'Cleaning', sectorBadgeInstallatori: 'Field service', sectorBadgeSicurezza: 'Security',
    blogLabel: 'From the blog', blogTitle: 'Resources and insights', blogAll: 'All →', blogEmpty: 'Articles coming soon.',
    bottomEyebrow: 'Ready to start?',
    bottomTitle: 'Try it in the field today',
    bottomSub: 'Create your account in 30 seconds · No credit card',
    bottomCta: 'Start free trial',
    quickLabel: 'Useful links',
    pricing: 'Pricing and plans', contact: 'Get in touch', mainSite: 'Visit main website',
    followUs: 'Follow us', privacy: 'Privacy', terms: 'Terms',
  },
  de: {
    badge: 'Feldarbeit verifizieren',
    h1a: 'GPS-Nachweis, Fotos und Berichte', h1b: 'überprüfbar. Vor Ort.',
    sub: 'Jeden Einsatz in Echtzeit zertifizieren. Keine Karte, keine Zweifel, null Streitigkeiten.',
    ctaPrimary: 'GeoTapp kostenlos testen',
    ctaPrimaryNote: 'Nur E-Mail · Keine Kreditkarte · In 30 Sekunden startklar',
    ctaSecondary: 'Demo buchen',
    trust1: 'Verifiziertes GPS', trust2: 'Echtzeit-Fotos', trust3: 'Signierte Berichte',
    sectorEyebrow: 'Für Ihre Branche', sectorTitle: 'Branchenlösungen',
    sectorPulizie: 'Reinigungsunternehmen', sectorPulizieDesc: 'Einsatznachweis und Schichten',
    sectorInstallatori: 'Installateure und Techniker', sectorInstallatoriDesc: 'Überprüfbare Berichte für jeden Einsatz',
    sectorSicurezza: 'Sicherheit und Wachdienst', sectorSicurezzaDesc: 'Patrouillen, Standorte und Einsatzbeleg',
    sectorFallback: 'Andere Branche? Jetzt kostenlos testen →',
    sectorBadgePulizie: 'Reinigung', sectorBadgeInstallatori: 'Field Service', sectorBadgeSicurezza: 'Sicherheit',
    blogLabel: 'Aus dem Blog', blogTitle: 'Ressourcen und Einblicke', blogAll: 'Alle →', blogEmpty: 'Artikel folgen.',
    bottomEyebrow: 'Bereit für den Start?',
    bottomTitle: 'Heute noch im Einsatz testen',
    bottomSub: 'Konto in 30 Sekunden erstellen · Ohne Kreditkarte',
    bottomCta: 'Kostenlos starten',
    quickLabel: 'Nützliche Links',
    pricing: 'Preise und Pläne', contact: 'Kontakt aufnehmen', mainSite: 'Zur Hauptseite',
    followUs: 'Folgen Sie uns', privacy: 'Datenschutz', terms: 'AGB',
  },
  fr: {
    badge: 'Vérifiez le travail terrain',
    h1a: 'Preuves GPS, photos et rapports', h1b: 'vérifiables. Sur le terrain.',
    sub: 'Certifiez chaque intervention en temps réel. Pas de carte, pas de doute, zéro contestation.',
    ctaPrimary: 'Essayer GeoTapp gratuitement',
    ctaPrimaryNote: 'Email seul · Sans carte bancaire · Prêt en 30 secondes',
    ctaSecondary: 'Réserver une démo',
    trust1: 'GPS vérifié', trust2: 'Photos temps réel', trust3: 'Rapports signés',
    sectorEyebrow: 'Pour votre secteur', sectorTitle: 'Solutions dédiées',
    sectorPulizie: 'Entreprises de nettoyage', sectorPulizieDesc: 'Suivi des interventions et plannings',
    sectorInstallatori: 'Installateurs et techniciens', sectorInstallatoriDesc: 'Rapports vérifiables pour chaque intervention',
    sectorSicurezza: 'Sécurité et gardiennage', sectorSicurezzaDesc: 'Rondes, postes et preuves opérationnelles',
    sectorFallback: 'Pas votre secteur ? Essayez-le gratuitement →',
    sectorBadgePulizie: 'Nettoyage', sectorBadgeInstallatori: 'Terrain', sectorBadgeSicurezza: 'Sécurité',
    blogLabel: 'Du blog', blogTitle: 'Ressources et articles', blogAll: 'Tous →', blogEmpty: 'Articles à venir.',
    bottomEyebrow: 'Prêt à commencer ?',
    bottomTitle: 'Testez-le sur le terrain dès aujourd\'hui',
    bottomSub: 'Créez votre compte en 30 secondes · Sans carte bancaire',
    bottomCta: 'Démarrer l\'essai gratuit',
    quickLabel: 'Liens utiles',
    pricing: 'Tarifs et formules', contact: 'Nous contacter', mainSite: 'Visiter le site principal',
    followUs: 'Suivez-nous', privacy: 'Confidentialité', terms: 'Conditions',
  },
  es: {
    badge: 'Verifica el trabajo de campo',
    h1a: 'Pruebas GPS, fotos e informes', h1b: 'verificables. En el campo.',
    sub: 'Certifica cada intervención en tiempo real. Sin tarjeta, sin dudas, cero disputas.',
    ctaPrimary: 'Prueba GeoTapp gratis',
    ctaPrimaryNote: 'Solo email · Sin tarjeta · Listo en 30 segundos',
    ctaSecondary: 'Solicita una demo',
    trust1: 'GPS verificado', trust2: 'Fotos en tiempo real', trust3: 'Informes firmados',
    sectorEyebrow: 'Para tu sector', sectorTitle: 'Soluciones dedicadas',
    sectorPulizie: 'Empresas de limpieza', sectorPulizieDesc: 'Trazabilidad de intervenciones y turnos',
    sectorInstallatori: 'Instaladores y técnicos', sectorInstallatoriDesc: 'Informes verificables para cada trabajo',
    sectorSicurezza: 'Seguridad y vigilancia', sectorSicurezzaDesc: 'Rondas, puestos y prueba operativa',
    sectorFallback: '¿No es tu sector? Pruébalo gratis →',
    sectorBadgePulizie: 'Limpieza', sectorBadgeInstallatori: 'Campo', sectorBadgeSicurezza: 'Seguridad',
    blogLabel: 'Del blog', blogTitle: 'Recursos y artículos', blogAll: 'Todos →', blogEmpty: 'Artículos próximamente.',
    bottomEyebrow: '¿Listo para empezar?',
    bottomTitle: 'Pruébalo hoy mismo en el campo',
    bottomSub: 'Crea tu cuenta en 30 segundos · Sin tarjeta de crédito',
    bottomCta: 'Empezar prueba gratis',
    quickLabel: 'Enlaces útiles',
    pricing: 'Precios y planes', contact: 'Contáctanos', mainSite: 'Visitar el sitio principal',
    followUs: 'Síguenos', privacy: 'Privacidad', terms: 'Términos',
  },
  pt: {
    badge: 'Verifique o trabalho de campo',
    h1a: 'Provas GPS, fotos e relatórios', h1b: 'verificáveis. No campo.',
    sub: 'Certifique cada intervenção em tempo real. Sem cartão, sem dúvidas, zero disputas.',
    ctaPrimary: 'Experimente o GeoTapp grátis',
    ctaPrimaryNote: 'Só email · Sem cartão · Pronto em 30 segundos',
    ctaSecondary: 'Agendar uma demo',
    trust1: 'GPS verificado', trust2: 'Fotos em tempo real', trust3: 'Relatórios assinados',
    sectorEyebrow: 'Para o seu setor', sectorTitle: 'Soluções dedicadas',
    sectorPulizie: 'Empresas de limpeza', sectorPulizieDesc: 'Rastreio de intervenções e turnos',
    sectorInstallatori: 'Instaladores e técnicos', sectorInstallatoriDesc: 'Relatórios verificáveis para cada trabalho',
    sectorSicurezza: 'Segurança e vigilância', sectorSicurezzaDesc: 'Rondas, postos e prova operacional',
    sectorFallback: 'Outro setor? Experimente grátis →',
    sectorBadgePulizie: 'Limpeza', sectorBadgeInstallatori: 'Campo', sectorBadgeSicurezza: 'Segurança',
    blogLabel: 'Do blog', blogTitle: 'Recursos e artigos', blogAll: 'Todos →', blogEmpty: 'Artigos em breve.',
    bottomEyebrow: 'Pronto para começar?',
    bottomTitle: 'Experimente hoje no campo',
    bottomSub: 'Crie a conta em 30 segundos · Sem cartão de crédito',
    bottomCta: 'Começar grátis',
    quickLabel: 'Links úteis',
    pricing: 'Preços e planos', contact: 'Fale connosco', mainSite: 'Ir para o site principal',
    followUs: 'Siga-nos', privacy: 'Privacidade', terms: 'Termos',
  },
  nl: {
    badge: 'Verifieer veldwerk',
    h1a: 'GPS-bewijs, foto\'s en rapporten', h1b: 'verifieerbaar. In het veld.',
    sub: 'Certificeer elke opdracht in real time. Geen kaart, geen twijfels, geen disputen.',
    ctaPrimary: 'Probeer GeoTapp gratis',
    ctaPrimaryNote: 'Alleen e-mail · Geen creditcard · Klaar in 30 seconden',
    ctaSecondary: 'Demo boeken',
    trust1: 'Geverifieerde GPS', trust2: 'Real-time foto\'s', trust3: 'Ondertekende rapporten',
    sectorEyebrow: 'Voor uw sector', sectorTitle: 'Sectorgerichte oplossingen',
    sectorPulizie: 'Schoonmaakbedrijven', sectorPulizieDesc: 'Opdracht- en dienstregistratie',
    sectorInstallatori: 'Installateurs en monteurs', sectorInstallatoriDesc: 'Verifieerbare rapporten per opdracht',
    sectorSicurezza: 'Beveiliging en bewaking', sectorSicurezzaDesc: 'Rondes, posten en operationeel bewijs',
    sectorFallback: 'Andere sector? Probeer het gratis →',
    sectorBadgePulizie: 'Schoonmaak', sectorBadgeInstallatori: 'Veld', sectorBadgeSicurezza: 'Beveiliging',
    blogLabel: 'Uit de blog', blogTitle: 'Resources en artikelen', blogAll: 'Alle →', blogEmpty: 'Artikelen binnenkort.',
    bottomEyebrow: 'Klaar om te starten?',
    bottomTitle: 'Test het vandaag nog in het veld',
    bottomSub: 'Account aanmaken in 30 seconden · Geen creditcard',
    bottomCta: 'Start gratis proef',
    quickLabel: 'Handige links',
    pricing: 'Prijzen en plannen', contact: 'Neem contact op', mainSite: 'Naar hoofdsite',
    followUs: 'Volg ons', privacy: 'Privacy', terms: 'Voorwaarden',
  },
  da: {
    badge: 'Verificer feltarbejde',
    h1a: 'GPS-bevis, fotos og rapporter', h1b: 'verificerbare. I marken.',
    sub: 'Certificer hver opgave i realtid. Intet kort, ingen tvivl, nul tvister.',
    ctaPrimary: 'Prøv GeoTapp gratis',
    ctaPrimaryNote: 'Kun email · Intet kreditkort · Klar på 30 sekunder',
    ctaSecondary: 'Book en demo',
    trust1: 'Verificeret GPS', trust2: 'Realtidsfotos', trust3: 'Signerede rapporter',
    sectorEyebrow: 'Til din branche', sectorTitle: 'Branchespecifikke løsninger',
    sectorPulizie: 'Rengøringsfirmaer', sectorPulizieDesc: 'Opgave- og vagtsporing',
    sectorInstallatori: 'Installatører og teknikere', sectorInstallatoriDesc: 'Verificerbare rapporter for hver opgave',
    sectorSicurezza: 'Sikkerhed og vagtservice', sectorSicurezzaDesc: 'Patruljer, poster og operationelt bevis',
    sectorFallback: 'Anden branche? Prøv det gratis →',
    sectorBadgePulizie: 'Rengøring', sectorBadgeInstallatori: 'Feltservice', sectorBadgeSicurezza: 'Sikkerhed',
    blogLabel: 'Fra bloggen', blogTitle: 'Ressourcer og artikler', blogAll: 'Alle →', blogEmpty: 'Artikler kommer snart.',
    bottomEyebrow: 'Klar til at starte?',
    bottomTitle: 'Prøv det i marken i dag',
    bottomSub: 'Opret konto på 30 sekunder · Intet kreditkort',
    bottomCta: 'Start gratis prøve',
    quickLabel: 'Nyttige links',
    pricing: 'Priser og planer', contact: 'Kontakt os', mainSite: 'Til hovedsiden',
    followUs: 'Følg os', privacy: 'Privatliv', terms: 'Vilkår',
  },
  sv: {
    badge: 'Verifiera fältarbete',
    h1a: 'GPS-bevis, foton och rapporter', h1b: 'verifierbara. På fältet.',
    sub: 'Certifiera varje uppdrag i realtid. Inget kort, inga tvivel, noll tvister.',
    ctaPrimary: 'Prova GeoTapp gratis',
    ctaPrimaryNote: 'Endast e-post · Inget kreditkort · Klar på 30 sekunder',
    ctaSecondary: 'Boka en demo',
    trust1: 'Verifierad GPS', trust2: 'Realtidsfoton', trust3: 'Signerade rapporter',
    sectorEyebrow: 'För din bransch', sectorTitle: 'Branschanpassade lösningar',
    sectorPulizie: 'Städföretag', sectorPulizieDesc: 'Spårning av uppdrag och skift',
    sectorInstallatori: 'Installatörer och tekniker', sectorInstallatoriDesc: 'Verifierbara rapporter per uppdrag',
    sectorSicurezza: 'Säkerhet och bevakning', sectorSicurezzaDesc: 'Ronder, poster och operativt bevis',
    sectorFallback: 'Annan bransch? Prova det gratis →',
    sectorBadgePulizie: 'Städ', sectorBadgeInstallatori: 'Fält', sectorBadgeSicurezza: 'Säkerhet',
    blogLabel: 'Från bloggen', blogTitle: 'Resurser och artiklar', blogAll: 'Alla →', blogEmpty: 'Artiklar kommer snart.',
    bottomEyebrow: 'Redo att börja?',
    bottomTitle: 'Testa det i fält redan idag',
    bottomSub: 'Skapa konto på 30 sekunder · Inget kreditkort',
    bottomCta: 'Starta gratis prov',
    quickLabel: 'Användbara länkar',
    pricing: 'Priser och planer', contact: 'Kontakta oss', mainSite: 'Till huvudsidan',
    followUs: 'Följ oss', privacy: 'Integritet', terms: 'Villkor',
  },
  nb: {
    badge: 'Verifiser feltarbeid',
    h1a: 'GPS-bevis, bilder og rapporter', h1b: 'verifiserbare. På feltet.',
    sub: 'Sertifiser hvert oppdrag i sanntid. Ingen kort, ingen tvil, null tvister.',
    ctaPrimary: 'Prøv GeoTapp gratis',
    ctaPrimaryNote: 'Bare e-post · Uten kredittkort · Klar på 30 sekunder',
    ctaSecondary: 'Bestill en demo',
    trust1: 'Verifisert GPS', trust2: 'Sanntidsbilder', trust3: 'Signerte rapporter',
    sectorEyebrow: 'For din bransje', sectorTitle: 'Skreddersydde løsninger',
    sectorPulizie: 'Renholdsbedrifter', sectorPulizieDesc: 'Sporing av oppdrag og vakter',
    sectorInstallatori: 'Installatører og teknikere', sectorInstallatoriDesc: 'Verifiserbare rapporter for hvert oppdrag',
    sectorSicurezza: 'Sikkerhet og vakthold', sectorSicurezzaDesc: 'Patruljer, poster og operativt bevis',
    sectorFallback: 'Annen bransje? Prøv det gratis →',
    sectorBadgePulizie: 'Renhold', sectorBadgeInstallatori: 'Felt', sectorBadgeSicurezza: 'Sikkerhet',
    blogLabel: 'Fra bloggen', blogTitle: 'Ressurser og artikler', blogAll: 'Alle →', blogEmpty: 'Artikler kommer snart.',
    bottomEyebrow: 'Klar til å starte?',
    bottomTitle: 'Test det i felten i dag',
    bottomSub: 'Opprett konto på 30 sekunder · Uten kredittkort',
    bottomCta: 'Start gratis prøve',
    quickLabel: 'Nyttige lenker',
    pricing: 'Priser og planer', contact: 'Kontakt oss', mainSite: 'Til hovedsiden',
    followUs: 'Følg oss', privacy: 'Personvern', terms: 'Vilkår',
  },
  ru: {
    badge: 'Верификация работ на объекте',
    h1a: 'GPS-доказательства, фото и отчёты', h1b: 'проверяемые. На месте.',
    sub: 'Подтверждайте каждое задание в реальном времени. Без карты, без сомнений, без споров.',
    ctaPrimary: 'Попробуйте GeoTapp бесплатно',
    ctaPrimaryNote: 'Только email · Без карты · Готово за 30 секунд',
    ctaSecondary: 'Заказать демо',
    trust1: 'Проверенный GPS', trust2: 'Фото в реальном времени', trust3: 'Подписанные отчёты',
    sectorEyebrow: 'Для вашей отрасли', sectorTitle: 'Отраслевые решения',
    sectorPulizie: 'Клининговые компании', sectorPulizieDesc: 'Учёт работ и смен',
    sectorInstallatori: 'Монтажники и техники', sectorInstallatoriDesc: 'Проверяемые отчёты по каждому заданию',
    sectorSicurezza: 'Безопасность и охрана', sectorSicurezzaDesc: 'Обходы, посты и операционное подтверждение',
    sectorFallback: 'Другая отрасль? Попробуйте бесплатно →',
    sectorBadgePulizie: 'Клининг', sectorBadgeInstallatori: 'Выезды', sectorBadgeSicurezza: 'Охрана',
    blogLabel: 'Из блога', blogTitle: 'Материалы и статьи', blogAll: 'Все →', blogEmpty: 'Статьи скоро.',
    bottomEyebrow: 'Готовы начать?',
    bottomTitle: 'Попробуйте сегодня же на объекте',
    bottomSub: 'Создайте аккаунт за 30 секунд · Без карты',
    bottomCta: 'Начать бесплатно',
    quickLabel: 'Полезные ссылки',
    pricing: 'Цены и планы', contact: 'Связаться с нами', mainSite: 'На главный сайт',
    followUs: 'Подписывайтесь', privacy: 'Конфиденциальность', terms: 'Условия',
  },
};

// ─── UTM helpers ──────────────────────────────────────────────────────────────

const BASE_UTM = 'utm_source=instagram&utm_medium=bio';

function withUtm(href: string, campaign: string, content: string): string {
  const sep = href.includes('?') ? '&' : '?';
  return `${href}${sep}${BASE_UTM}&utm_campaign=${encodeURIComponent(campaign)}&utm_content=${encodeURIComponent(content)}`;
}

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

// ─── Sub-components ───────────────────────────────────────────────────────────

function TrustBadge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full whitespace-nowrap">
      <Icon size={12} className="text-primary" strokeWidth={2.5} />
      {label}
    </span>
  );
}

function SectorCard({
  icon: Icon, label, desc, href, index,
}: {
  icon: React.ElementType; label: string; desc: string; href: string; index: number;
}) {
  return (
    <motion.div variants={fadeUp} custom={index}>
      <Link
        href={href}
        className="group flex items-center gap-3.5 p-3.5 rounded-2xl border border-slate-100 hover:border-primary/30 hover:bg-[#fafff4] transition-all duration-200 active:scale-[0.98]"
      >
        <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/8 border border-primary/12 flex items-center justify-center text-primary group-hover:bg-primary/15 transition-colors duration-150">
          <Icon size={20} strokeWidth={2} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[14px] leading-tight text-slate-800 group-hover:text-primary transition-colors duration-150">
            {label}
          </h3>
          <p className="text-[11.5px] text-slate-400 leading-snug mt-0.5 line-clamp-1">{desc}</p>
        </div>
        <div className="shrink-0 text-slate-200 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-150">
          <ArrowRight size={15} />
        </div>
      </Link>
    </motion.div>
  );
}

function ArticleCard({ article, sectorLabel, index, campaign }: {
  article: Article; sectorLabel: string | null; index: number; campaign: string;
}) {
  return (
    <motion.div variants={fadeUp} custom={index}>
      <Link
        href={withUtm(article.url, campaign, `article_${article.slug}`)}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex gap-3.5 p-3 rounded-2xl border border-slate-100 hover:border-primary/25 hover:bg-[#fafff4] transition-all duration-200 active:scale-[0.98]"
      >
        <div className="relative shrink-0 w-[72px] h-[60px] rounded-xl overflow-hidden bg-slate-100">
          {article.image ? (
            <img src={article.image} alt="" aria-hidden="true"
              className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500"
              loading={index === 0 ? 'eager' : 'lazy'} decoding="async" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <FileCheck size={18} className="text-slate-300" />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          {sectorLabel && (
            <span className="inline-flex self-start items-center text-[9px] font-bold uppercase tracking-[0.08em] text-primary bg-primary/10 px-1.5 py-0.5 rounded mb-1">
              {sectorLabel}
            </span>
          )}
          <h3 className="font-semibold text-[13px] leading-snug text-slate-800 line-clamp-2 group-hover:text-primary transition-colors duration-150">
            {article.title}
          </h3>
          <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 leading-normal">{article.excerpt}</p>
        </div>
        <div className="shrink-0 self-center text-slate-200 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-150">
          <ArrowRight size={15} />
        </div>
      </Link>
    </motion.div>
  );
}

function QuickLink({ label, href }: { label: string; href: string }) {
  return (
    <motion.div variants={fadeUp}>
      <Link href={href}
        className="group flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-transparent hover:border-slate-200 hover:bg-white text-sm font-medium text-slate-600 hover:text-slate-900 transition-all duration-150 active:scale-[0.98]">
        {label}
        <ArrowRight size={14} className="text-slate-300 group-hover:text-slate-400 group-hover:translate-x-0.5 transition-all duration-150" />
      </Link>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function LinksClient({ articles, locale = 'it' }: Props) {
  const t = UI[locale] ?? UI['it'];
  const langPath = locale === 'it' ? 'it' : locale;

  const trialHref = `https://geotapp.com/${langPath}/trial/`;
  const demoHref = `https://geotapp.com/${langPath}/contact/`;

  const sectorBadgeMap: Record<Sector, string> = {
    pulizie: t.sectorBadgePulizie,
    installatori: t.sectorBadgeInstallatori,
    sicurezza: t.sectorBadgeSicurezza,
  };

  return (
    <div className="min-h-screen bg-white selection:bg-primary/20 selection:text-slate-900">

      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[480px] h-[480px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* NAV */}
      <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative flex items-center justify-between px-6 py-5 max-w-md mx-auto">
        <Link href={withUtm('https://geotapp.com', 'ig_links_nav', 'header_logo')}
          className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity" aria-label="GeoTapp — homepage">
          <svg width="110" height="24" viewBox="0 0 110 24" fill="none" aria-hidden="true">
            <path d="M10 2C6.69 2 4 4.69 4 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.31-2.69-6-6-6zm0 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill="#8FC436" />
            <text x="22" y="17" fontFamily="'Poppins', sans-serif" fontWeight="700" fontSize="14" fill="#0f172a" letterSpacing="-0.3">GeoTapp</text>
          </svg>
        </Link>
        <span className="text-[10px] font-semibold text-slate-400 tracking-[0.12em] uppercase">Instagram</span>
      </motion.nav>

      {/* HERO */}
      <motion.section initial="hidden" animate="show" variants={stagger}
        className="relative px-6 pt-4 pb-10 max-w-md mx-auto text-center">
        <motion.div variants={fadeUp} custom={0} className="flex justify-center mb-6">
          <span className="relative inline-flex items-center gap-2 text-xs font-semibold text-primary bg-primary/8 border border-primary/15 px-3.5 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            {t.badge}
          </span>
        </motion.div>
        <motion.h1 variants={fadeUp} custom={1}
          className="font-display font-bold text-[2rem] leading-[1.15] text-slate-900 mb-4 tracking-tight">
          {t.h1a}<br /><span className="text-primary">{t.h1b}</span>
        </motion.h1>
        <motion.p variants={fadeUp} custom={2}
          className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-[280px] mx-auto">
          {t.sub}
        </motion.p>

        {/* Primary CTA → TRIAL */}
        <motion.div variants={fadeUp} custom={3}>
          <Link href={withUtm(trialHref, 'ig_links_trial', 'hero_primary')}
            onClick={() => trackEvent('trial_click', { cta_source: 'links_hero', cta_locale: locale })}
            className="btn-modern w-full mb-2">
            <Sparkles size={16} />
            {t.ctaPrimary}
            <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform duration-150" />
          </Link>
        </motion.div>
        <motion.p variants={fadeUp} custom={4} className="text-[11.5px] text-slate-400 font-medium mb-4">
          {t.ctaPrimaryNote}
        </motion.p>

        {/* Secondary CTA → DEMO */}
        <motion.div variants={fadeUp} custom={5}>
          <Link href={withUtm(demoHref, 'ig_links_demo', 'hero_secondary')}
            className="btn-modern-ghost w-full">
            {t.ctaSecondary}
          </Link>
        </motion.div>

        <motion.div variants={fadeUp} custom={6} className="flex items-center justify-center gap-2 mt-6 flex-wrap">
          <TrustBadge icon={MapPin} label={t.trust1} />
          <TrustBadge icon={Camera} label={t.trust2} />
          <TrustBadge icon={FileCheck} label={t.trust3} />
        </motion.div>
      </motion.section>

      <div className="max-w-md mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" /></div>

      {/* SECTORS */}
      <section className="px-6 py-9 max-w-md mx-auto">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mb-5">
          <p className="text-[10px] font-bold text-primary uppercase tracking-[0.14em] mb-1">{t.sectorEyebrow}</p>
          <h2 className="font-display font-bold text-lg text-slate-900 leading-tight">{t.sectorTitle}</h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-30px' }}
          variants={stagger} className="space-y-2.5">
          <SectorCard
            icon={Brush}
            label={t.sectorPulizie} desc={t.sectorPulizieDesc}
            href={withUtm(`https://geotapp.com/${langPath}/settori/pulizie/`, 'ig_links_sector', 'pulizie')}
            index={0}
          />
          <SectorCard
            icon={Wrench}
            label={t.sectorInstallatori} desc={t.sectorInstallatoriDesc}
            href={withUtm(`https://geotapp.com/${langPath}/settori/installatori/`, 'ig_links_sector', 'installatori')}
            index={1}
          />
          <SectorCard
            icon={Shield}
            label={t.sectorSicurezza} desc={t.sectorSicurezzaDesc}
            href={withUtm(`https://geotapp.com/${langPath}/settori/sicurezza/`, 'ig_links_sector', 'sicurezza')}
            index={2}
          />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-20px' }} transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-4 text-center">
          <Link href={withUtm(trialHref, 'ig_links_trial', 'sector_fallback')}
            onClick={() => trackEvent('trial_click', { cta_source: 'links_sector_fallback', cta_locale: locale })}
            className="inline-flex items-center gap-1 text-[12.5px] font-medium text-slate-500 hover:text-primary transition-colors duration-150">
            {t.sectorFallback}
          </Link>
        </motion.div>
      </section>

      <div className="max-w-md mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" /></div>

      {/* ARTICLES */}
      <section className="px-6 py-9 max-w-md mx-auto">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex items-end justify-between mb-5">
          <div>
            <p className="text-[10px] font-bold text-primary uppercase tracking-[0.14em] mb-1">{t.blogLabel}</p>
            <h2 className="font-display font-bold text-lg text-slate-900 leading-tight">{t.blogTitle}</h2>
          </div>
          <Link href={withUtm('https://geotapp.com/blog', 'ig_links_blog', 'blog_all')} target="_blank" rel="noopener noreferrer"
            className="text-xs font-medium text-slate-400 hover:text-primary transition-colors pb-0.5">
            {t.blogAll}
          </Link>
        </motion.div>
        {articles.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
            <Zap size={20} className="text-slate-200 mx-auto mb-2" />
            <p className="text-sm text-slate-300">{t.blogEmpty}</p>
          </motion.div>
        ) : (
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-30px' }}
            variants={stagger} className="space-y-3">
            {articles.map((a, i) => (
              <ArticleCard
                key={a.id}
                article={a}
                sectorLabel={a.sector ? sectorBadgeMap[a.sector] : null}
                index={i}
                campaign="ig_links_blog"
              />
            ))}
          </motion.div>
        )}
      </section>

      <div className="max-w-md mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" /></div>

      {/* BOTTOM CTA BANNER */}
      <section className="px-6 py-9 max-w-md mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-[#fafff4] via-white to-[#f5fceb] p-6 text-center">
          <div aria-hidden="true" className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/15 blur-2xl" />
          <p className="relative text-[10px] font-bold text-primary uppercase tracking-[0.14em] mb-2">{t.bottomEyebrow}</p>
          <h3 className="relative font-display font-bold text-[20px] text-slate-900 leading-tight mb-2">
            {t.bottomTitle}
          </h3>
          <p className="relative text-[12.5px] text-slate-500 mb-5 leading-relaxed">{t.bottomSub}</p>
          <Link href={withUtm(trialHref, 'ig_links_trial', 'bottom_banner')}
            onClick={() => trackEvent('trial_click', { cta_source: 'links_bottom_banner', cta_locale: locale })}
            className="btn-modern w-full">
            <Sparkles size={15} />
            {t.bottomCta}
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-150" />
          </Link>
        </motion.div>
      </section>

      {/* QUICK LINKS */}
      <section className="px-6 py-8 max-w-md mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.4 }}>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.14em] mb-3.5">{t.quickLabel}</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-20px' }}
          variants={stagger} className="space-y-2">
          <QuickLink label={t.pricing} href={withUtm(`https://geotapp.com/${langPath}/pricing/`, 'ig_links_nav', 'quick_pricing')} />
          <QuickLink label={t.contact} href={withUtm(`https://geotapp.com/${langPath}/contact/`, 'ig_links_nav', 'quick_contact')} />
          <QuickLink label={t.mainSite} href={withUtm('https://geotapp.com', 'ig_links_nav', 'quick_main')} />
        </motion.div>
      </section>

      {/* SOCIAL */}
      <section className="px-6 pb-8 max-w-md mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent mb-8" />
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }} transition={{ duration: 0.4 }}>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.14em] mb-4 text-center">{t.followUs}</p>
          <div className="flex items-center justify-center gap-3">
            <a href="https://t.me/geotapp" target="_blank" rel="noopener noreferrer" aria-label="Telegram"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0088cc]/8 border border-[#0088cc]/20 text-[#0088cc] text-sm font-semibold hover:bg-[#0088cc]/15 transition-all duration-150 active:scale-[0.97]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.9l-2.965-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.983.659z"/>
              </svg>
              Telegram
            </a>
            <a href={withUtm('https://www.instagram.com/geotapp_official/', 'ig_links_social', 'instagram')} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-500 text-sm font-semibold hover:bg-slate-100 transition-all duration-150 active:scale-[0.97]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
              Instagram
            </a>
            <a href={withUtm('https://www.linkedin.com/company/110850300/', 'ig_links_social', 'linkedin')} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-500 text-sm font-semibold hover:bg-slate-100 transition-all duration-150 active:scale-[0.97]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.5 }} className="px-6 pt-4 pb-10 max-w-md mx-auto text-center">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent mb-8" />
        <svg width="80" height="18" viewBox="0 0 80 18" fill="none" aria-hidden="true" className="mx-auto mb-3 opacity-30">
          <path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 10 5 10s5-6.25 5-10c0-2.76-2.24-5-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="#8FC436" />
          <text x="17" y="13" fontFamily="'Poppins', sans-serif" fontWeight="700" fontSize="11" fill="#0f172a" letterSpacing="-0.2">GeoTapp</text>
        </svg>
        <p className="text-[11px] text-slate-400 space-x-2">
          <span>© {new Date().getFullYear()} GeoTapp</span>
          <span className="text-slate-200">·</span>
          <Link href={`https://geotapp.com/${langPath}/privacy/`} className="hover:text-slate-600 transition-colors">{t.privacy}</Link>
          <span className="text-slate-200">·</span>
          <Link href={`https://geotapp.com/${langPath}/terms/`} className="hover:text-slate-600 transition-colors">{t.terms}</Link>
        </p>
      </motion.footer>
    </div>
  );
}
