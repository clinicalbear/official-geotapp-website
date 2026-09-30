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
    { title: 'Ogni modifica successiva si vede', sub: 'Sigillo crittografico su ogni report' },
    { title: 'Timbratura GPS reale', sub: 'Posizione e ora registrate sul posto' },
    { title: 'Verifica indipendente', sub: 'Il cliente controlla, senza account' },
  ], sectors: 'Pulizie · Edilizia · Sicurezza · Installatori · Manutenzione · Impianti' },
  en: { headline: 'Proof of field work, verifiable by anyone', claims: [
    { title: 'Every later change shows', sub: 'Cryptographic seal on every report' },
    { title: 'Real GPS clock-in', sub: 'Location and time logged on site' },
    { title: 'Independent verification', sub: 'The client checks, no account needed' },
  ], sectors: 'Cleaning · Construction · Security · Installers · Maintenance · Mechanical & electrical' },
  de: { headline: 'Nachweis der Außendienstarbeit, von jedem überprüfbar', claims: [
    { title: 'Jede spätere Änderung ist sichtbar', sub: 'Kryptografisches Siegel auf jedem Bericht' },
    { title: 'Echte GPS-Erfassung', sub: 'Ort und Zeit vor Ort erfasst' },
    { title: 'Unabhängige Überprüfung', sub: 'Der Kunde prüft, ganz ohne Konto' },
  ], sectors: 'Reinigung · Bau · Sicherheit · Installateure · Wartung · Haustechnik' },
  fr: { headline: 'La preuve du travail sur le terrain, vérifiable par tous', claims: [
    { title: 'Toute modification ultérieure se voit', sub: 'Sceau cryptographique sur chaque rapport' },
    { title: 'Pointage avec position GPS', sub: 'Lieu et heure enregistrés sur place' },
    { title: 'Vérification indépendante', sub: 'Le client vérifie, sans compte' },
  ], sectors: 'Nettoyage · BTP · Sécurité · Installateurs · Maintenance · Installations' },
  es: { headline: 'La prueba del trabajo de campo, verificable por cualquiera', claims: [
    { title: 'Toda alteración es detectable', sub: 'Sello criptográfico en cada intervención' },
    { title: 'Fichaje GPS real', sub: 'Ubicación y hora registradas in situ' },
    { title: 'Verificación independiente', sub: 'El cliente comprueba, sin cuenta' },
  ], sectors: 'Limpieza · Construcción · Seguridad · Instaladores · Mantenimiento · Climatización' },
  pt: { headline: 'A prova do trabalho no terreno, verificável por qualquer um', claims: [
    { title: 'Qualquer adulteração é detetável', sub: 'Selo criptográfico em cada intervenção' },
    { title: 'Registo GPS real', sub: 'Local e hora registados no local' },
    { title: 'Verificação independente', sub: 'O cliente verifica, sem conta' },
  ], sectors: 'Limpeza · Construção · Segurança · Instaladores · Manutenção · AVAC' },
  nl: { headline: 'Het bewijs van werk in het veld, door iedereen te controleren', claims: [
    { title: 'Elke latere wijziging is zichtbaar', sub: 'Cryptografische verzegeling op elk rapport' },
    { title: 'Echte registratie met gps', sub: 'Locatie en tijd ter plaatse vastgelegd' },
    { title: 'Onafhankelijke controle', sub: 'De klant controleert, zonder account' },
  ], sectors: 'Schoonmaak · Bouw · Beveiliging · Installateurs · Onderhoud · Installaties' },
  ru: { headline: 'Доказательство полевой работы, которое может проверить каждый', claims: [
    { title: 'Любое изменение заметно', sub: 'Криптографическая печать на каждом выезде' },
    { title: 'Реальная GPS-отметка', sub: 'Место и время фиксируются на объекте' },
    { title: 'Независимая проверка', sub: 'Клиент проверяет без аккаунта' },
  ], sectors: 'Уборка · Строительство · Охрана · Монтаж · Обслуживание · ОВК' },
  da: { headline: 'Bevis for feltarbejde, som alle kan verificere', claims: [
    { title: 'Enhver ændring er synlig', sub: 'Kryptografisk segl på hvert job' },
    { title: 'Ægte GPS-stempling', sub: 'Sted og tid registreret på stedet' },
    { title: 'Uafhængig verificering', sub: 'Kunden tjekker, uden konto' },
  ], sectors: 'Rengøring · Byggeri · Sikkerhed · Installatører · Vedligeholdelse · VVS' },
  sv: { headline: 'Bevis på fältarbete, verifierbart av vem som helst', claims: [
    { title: 'Varje ändring är synlig', sub: 'Kryptografiskt sigill på varje jobb' },
    { title: 'Äkta GPS-stämpling', sub: 'Plats och tid registreras på plats' },
    { title: 'Oberoende verifiering', sub: 'Kunden kontrollerar, utan konto' },
  ], sectors: 'Städning · Bygg · Säkerhet · Installatörer · Underhåll · VVS' },
  nb: { headline: 'Bevis på feltarbeid, verifiserbart av hvem som helst', claims: [
    { title: 'Enhver endring er synlig', sub: 'Kryptografisk segl på hvert oppdrag' },
    { title: 'Ekte GPS-stempling', sub: 'Sted og tid registrert på stedet' },
    { title: 'Uavhengig verifisering', sub: 'Kunden sjekker, uten konto' },
  ], sectors: 'Rengjøring · Bygg · Sikkerhet · Installatører · Vedlikehold · VVS' },
};
