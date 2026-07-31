// Claim qualitativi VERIFICABILI (no metriche inventate): i tre differenziatori
// reali del prodotto, sigillo anti-manomissione, GPS reale, verifica lato cliente.
//
// Vivono qui e non dentro TrustBar perche' li rende anche la home ridisegnata,
// con la sua grafica: importarli dal componente si tirava dietro framer-motion
// nel bundle della home. Una sola fonte, due rese.

export type TrustCopy = {
  headline: string;
  claims: { title: string; sub: string }[];
  sectors: string;
};

export const TRUST_COPY: Record<string, TrustCopy> = {

  it: { headline: 'La prova del lavoro sul campo, verificabile da chiunque', claims: [
    { title: 'Report a prova di manomissione', sub: 'Sigillo crittografico su ogni intervento' },
    { title: 'Timbratura GPS reale', sub: 'Posizione e ora registrate sul posto' },
    { title: 'Verifica indipendente', sub: 'Il cliente controlla, senza account' },
  ], sectors: 'Pulizie · Edilizia · Sicurezza · Installatori · Manutenzione · Impiantistica' },
  en: { headline: 'Proof of field work, verifiable by anyone', claims: [
    { title: 'Tamper-proof reports', sub: 'Cryptographic seal on every job' },
    { title: 'Real GPS clock-in', sub: 'Location and time logged on site' },
    { title: 'Independent verification', sub: 'The client checks, no account needed' },
  ], sectors: 'Cleaning · Construction · Security · Installers · Maintenance · HVAC' },
  de: { headline: 'Nachweis der Außendienstarbeit, von jedem überprüfbar', claims: [
    { title: 'Manipulationssichere Berichte', sub: 'Kryptografisches Siegel auf jedem Einsatz' },
    { title: 'Echte GPS-Erfassung', sub: 'Ort und Zeit vor Ort erfasst' },
    { title: 'Unabhängige Überprüfung', sub: 'Der Kunde prüft, ganz ohne Konto' },
  ], sectors: 'Reinigung · Bau · Sicherheit · Installateure · Wartung · Haustechnik' },
  fr: { headline: 'La preuve du travail sur le terrain, vérifiable par tous', claims: [
    { title: 'Rapports infalsifiables', sub: 'Sceau cryptographique sur chaque intervention' },
    { title: 'Pointage GPS réel', sub: 'Lieu et heure enregistrés sur place' },
    { title: 'Vérification indépendante', sub: 'Le client vérifie, sans compte' },
  ], sectors: 'Nettoyage · BTP · Sécurité · Installateurs · Maintenance · CVC' },
  es: { headline: 'La prueba del trabajo de campo, verificable por cualquiera', claims: [
    { title: 'Informes a prueba de manipulaciones', sub: 'Sello criptográfico en cada intervención' },
    { title: 'Fichaje GPS real', sub: 'Ubicación y hora registradas in situ' },
    { title: 'Verificación independiente', sub: 'El cliente comprueba, sin cuenta' },
  ], sectors: 'Limpieza · Construcción · Seguridad · Instaladores · Mantenimiento · Climatización' },
  pt: { headline: 'A prova do trabalho no terreno, verificável por qualquer um', claims: [
    { title: 'Relatórios à prova de adulteração', sub: 'Selo criptográfico em cada intervenção' },
    { title: 'Registo GPS real', sub: 'Local e hora registados no local' },
    { title: 'Verificação independente', sub: 'O cliente verifica, sem conta' },
  ], sectors: 'Limpeza · Construção · Segurança · Instaladores · Manutenção · AVAC' },
  nl: { headline: 'Bewijs van werk in het veld, door iedereen te verifiëren', claims: [
    { title: 'Fraudebestendige rapporten', sub: 'Cryptografisch zegel op elke opdracht' },
    { title: 'Echte GPS-registratie', sub: 'Locatie en tijd ter plaatse vastgelegd' },
    { title: 'Onafhankelijke verificatie', sub: 'De klant controleert, zonder account' },
  ], sectors: 'Schoonmaak · Bouw · Beveiliging · Installateurs · Onderhoud · HVAC' },
  ru: { headline: 'Доказательство полевой работы, которое может проверить каждый', claims: [
    { title: 'Отчёты, защищённые от подделки', sub: 'Криптографическая печать на каждом выезде' },
    { title: 'Реальная GPS-отметка', sub: 'Место и время фиксируются на объекте' },
    { title: 'Независимая проверка', sub: 'Клиент проверяет без аккаунта' },
  ], sectors: 'Уборка · Строительство · Охрана · Монтаж · Обслуживание · ОВК' },
  da: { headline: 'Bevis for feltarbejde, som alle kan verificere', claims: [
    { title: 'Manipulationssikre rapporter', sub: 'Kryptografisk segl på hvert job' },
    { title: 'Ægte GPS-stempling', sub: 'Sted og tid registreret på stedet' },
    { title: 'Uafhængig verificering', sub: 'Kunden tjekker, uden konto' },
  ], sectors: 'Rengøring · Byggeri · Sikkerhed · Installatører · Vedligeholdelse · VVS' },
  sv: { headline: 'Bevis på fältarbete, verifierbart av vem som helst', claims: [
    { title: 'Manipuleringssäkra rapporter', sub: 'Kryptografiskt sigill på varje jobb' },
    { title: 'Äkta GPS-stämpling', sub: 'Plats och tid registreras på plats' },
    { title: 'Oberoende verifiering', sub: 'Kunden kontrollerar, utan konto' },
  ], sectors: 'Städning · Bygg · Säkerhet · Installatörer · Underhåll · VVS' },
  nb: { headline: 'Bevis på feltarbeid, verifiserbart av hvem som helst', claims: [
    { title: 'Manipuleringssikre rapporter', sub: 'Kryptografisk segl på hvert oppdrag' },
    { title: 'Ekte GPS-stempling', sub: 'Sted og tid registrert på stedet' },
    { title: 'Uavhengig verifisering', sub: 'Kunden sjekker, uten konto' },
  ], sectors: 'Rengjøring · Bygg · Sikkerhet · Installatører · Vedlikehold · VVS' },
};
