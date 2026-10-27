/**
 * 🔴 27/10/2026: il report di esempio NON e' disponibile, quindi i punti del sito che lo mostrano o lo
 * citano (DemoReportBanner, il paragrafo "Non hai un report?" della pagina del verificatore, la
 * sezione "Provalo con un report vero" di /contestazioni) non compaiono.
 *
 * Due guasti trovati insieme: (1) il file stava nel bucket americano, svuotato dalla migrazione in
 * Europa (scripts/ops/bucket-us): il vecchio indirizzo risponde AccessDenied; nel bucket europeo
 * (geotap-v2-photos-eu/reports/GT-2026-0322-4472/) l'oggetto c'e' ma non e' pubblico; (2) il pacchetto
 * e' del formato di marzo e il verificatore attuale risponde "Verifica non riuscita: Cannot read
 * properties of undefined (reading 'map')" (history.json senza `events`).
 *
 * Per rimetterlo serve un pacchetto sigillato NUOVO, firmato con la chiave di produzione, che nel
 * verificatore dia "Documento integro" e firma valida: poi si mette il file in public/downloads, si
 * punta DEMO_ZIP_URL li' (DemoReportBanner.tsx) e si porta questa costante a true. Fino ad allora un
 * pulsante "Scarica" che non scarica e una verifica che fallisce fanno peggio che niente.
 *
 * Sta in un modulo a parte e non nel componente: da un file 'use client' un server component
 * riceverebbe un riferimento e non il valore, sempre "vero".
 */
export const DEMO_REPORT_DISPONIBILE = false;
