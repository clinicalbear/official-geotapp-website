/**
 * I link brevi dei post nei gruppi: `geotapp.com/s/<codice>`.
 *
 * PERCHE' ESISTONO. Il sondaggio viene condiviso a mano in una trentina di
 * gruppi Facebook e LinkedIn, e finora non sapevamo quale gruppo portasse
 * qualcuno: GA4 vede la sorgente (facebook.com) ma non il gruppo, e vede solo
 * chi accetta i cookie. Un parametro `?utm_source=...` non risolveva nessuno
 * dei due problemi: sulle due piattaforme la maggior parte dei clic avviene
 * sulla card di anteprima, che resta agganciata all'URL con cui il post e'
 * nato, e resta invisibile chi rifiuta i cookie.
 *
 * Un indirizzo corto risolve entrambi. L'anteprima si genera su questo link,
 * quindi conta anche i clic sulla card, il conteggio e' lato server e non
 * dipende dal consenso, e a chi legge il post sembra un link normale invece
 * di un link di campagna, che nei gruppi che vietano l'autopromozione e'
 * esattamente la differenza che conta.
 *
 * COSA NON FA. Non mette cookie, non scrive l'IP, non identifica nessuno:
 * conta quante volte un indirizzo e' stato aperto, per giorno e per paese.
 * E' un contapersone all'ingresso, non un pedinamento.
 */

export type LinkBreve = {
  /** Dove si arriva. Percorso interno, sempre con la barra finale. */
  destinazione: string;
  /** A cosa serve questo codice, per ritrovarlo fra sei mesi. */
  nota: string;
};

/**
 * I codici. La forma e' `<piattaforma>-<posto>`: `fb-` per Facebook, `li-` per
 * LinkedIn, `x-` per tutto il resto (email, stampa, firma). Restano corti
 * perche' finiscono dentro un post scritto a mano.
 */
export const LINK_BREVI: Record<string, LinkBreve> = {
  // Facebook, gruppi italiani
  'fb-imprenditori': { destinazione: '/it/survey/', nota: 'FB Imprenditori italiani' },
  'fb-aziende': { destinazione: '/it/survey/', nota: 'FB imprenditori ed aziende italiane' },
  'fb-bustapaga': { destinazione: '/it/survey/', nota: 'FB Busta paga' },
  'fb-consulenti': { destinazione: '/it/survey/', nota: 'FB Consulenti del lavoro' },
  'fb-manutentori': { destinazione: '/it/survey/', nota: 'FB Associazione Manutentori Installatori' },
  // Facebook, resto d'Europa
  'fb-jimdo': { destinazione: '/de/survey/', nota: 'FB Selbststaendige und kleine Unternehmen (Jimdo)' },
  'fb-glas': { destinazione: '/de/survey/', nota: 'FB Glas- und Gebaeudereiniger' },
  'fb-renhold': { destinazione: '/nb/survey/', nota: 'FB Fagforum Renhold' },
  'fb-ondernemers': { destinazione: '/nl/survey/', nota: 'FB Ondernemers & ZZP-ers' },
  'fb-schoonmaak': { destinazione: '/nl/survey/', nota: 'FB Schoonmaak ZZP-ers' },
  'fb-rengoering': { destinazione: '/da/survey/', nota: 'FB Rengoering erhverv og privat' },
  'fb-selvstaendige': { destinazione: '/da/survey/', nota: 'FB Selvstaendige & Freelancere' },
  'fb-limpieza': { destinazione: '/es/survey/', nota: 'FB Empresas de limpieza' },
  'fb-autonomos': { destinazione: '/es/survey/', nota: 'FB Mas que Autonomos' },
  'fb-nettoyage': { destinazione: '/fr/survey/', nota: 'FB Entraide Entreprises de Nettoyage' },
  'fb-menage': { destinazione: '/fr/survey/', nota: 'FB Auto-entrepreneurs nettoyage et menage' },
  'fb-cleaninguk': { destinazione: '/en/survey/', nota: 'FB Cleaning Business UK' },
  'fb-commercialuk': { destinazione: '/en/survey/', nota: 'FB Commercial Cleaning UK Forum' },
  'fb-limpezapt': { destinazione: '/pt/survey/', nota: 'FB Servicos de limpeza Alojamento Local' },
  'fb-foretagare': { destinazione: '/sv/survey/', nota: 'FB Entreprenoerer & Foeretagare' },
  'fb-egen': { destinazione: '/sv/survey/', nota: 'FB Egenfoeretagare' },

  // LinkedIn
  'li-attendance': { destinazione: '/en/survey/', nota: 'LI Time & Attendance / WFM' },
  'li-ifm': { destinazione: '/en/survey/', nota: 'LI Integrated Facility Management' },
  'li-pfmi': { destinazione: '/en/survey/', nota: 'LI Property and Facility Management Innovators' },
  'li-critical': { destinazione: '/en/survey/', nota: 'LI Critical Facility Management' },
  'li-fieldservice': { destinazione: '/en/survey/', nota: 'LI Field Service Society' },
  'li-cleaning': { destinazione: '/en/survey/', nota: 'LI Cleaning Services' },
  'li-logistics': { destinazione: '/en/survey/', nota: 'LI Logistics and Supply Chain' },
  'li-mm': { destinazione: '/en/survey/', nota: 'LI MM Maintenance and Facility Management' },
  'li-wfm': { destinazione: '/en/survey/', nota: 'LI Workforce Management Professionals' },
  'li-fmes': { destinazione: '/es/survey/', nota: 'LI Facility Management en Espana' },
  'li-limpiezaes': { destinazione: '/es/survey/', nota: 'LI Servicios profesionales de limpieza' },
  'li-fmnl': { destinazione: '/nl/survey/', nota: 'LI Dutch Facility Management Professionals' },
  'li-facilitiespt': { destinazione: '/pt/survey/', nota: 'LI Gestao de Facilities' },
  'li-sicurezza': { destinazione: '/it/survey/', nota: 'LI Ambiente & Sicurezza sul Lavoro' },
  'li-hr': { destinazione: '/it/survey/', nota: 'LI gruppi HR italiani' },
  'li-profilo': { destinazione: '/en/survey/', nota: 'LI post sul profilo di Michele' },

  // Fuori dai social
  'x-email': { destinazione: '/it/survey/', nota: 'firma email e messaggi diretti' },
  'x-stampa': { destinazione: '/en/survey/', nota: 'pitch e uscite stampa' },
};

/**
 * Dove mandare chi arriva con un codice.
 *
 * Un codice sconosciuto non e' un 404: puo' essere un link storpiato in un
 * copia e incolla, o un codice ritirato. Va sulla pagina del sondaggio senza
 * lingua, che negozia da sola l'Accept-Language, e viene contato come tale
 * cosi' ci accorgiamo che qualcuno usa un indirizzo che non esiste piu'.
 */
export function risolviLinkBreve(codice: string): { destinazione: string; conosciuto: boolean } {
  const pulito = codice.trim().toLowerCase().replace(/\/+$/, '');
  const voce = LINK_BREVI[pulito];
  if (voce) return { destinazione: voce.destinazione, conosciuto: true };
  return { destinazione: '/survey/', conosciuto: false };
}

/** L'indirizzo completo da incollare in un post. */
export function urlLinkBreve(codice: string, base = 'https://geotapp.com'): string {
  return `${base}/s/${codice}`;
}
