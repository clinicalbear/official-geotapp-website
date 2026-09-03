# POLITICA DI UTILIZZO GEO TAPP FLOW & TIMETRACKER
## Versione 1.5 - Settembre 2026 (Sede IT - Zero Knowledge Encryption)
**Data ultima modifica:** 3 settembre 2026  
**Titolare:** GeoTapp di Michele Angelo Petraroli - P.IVA IT04183990987  
**Contatto GDPR/DPO/Rep UE:** info@geotapp.com  

### 1. INTRODUZIONE E ACCETTAZIONE
La presente Politica di Utilizzo ("ToS") regola l'uso dei servizi SaaS **GeoTapp Flow** (dashboard web titolari) e **GeoTapp TimeTracker** (app Android dipendenti), deployati su Firebase (geotap-v2).  

**Accettazione:** Checkbox "Accetto ToS e Privacy Policy" al checkout Stripe crea vincolo contrattuale (art. 1341 c.c.). Log IP/timestamp conservati per audit. Rinnovo automatico salvo recesso. Trial 14gg gratuito.

**⚠️ AVVISO CRITICO - ARCHITETTURA ZERO KNOWLEDGE:**  
GeoTapp utilizza **field-level encryption client-side** con chiavi derivate localmente tramite **GeoEncryptManager** (Android). **GeoTapp NON possiede, NON memorizza, NON può recuperare le chiavi di decifratura dei tuoi dati**. 

**DATI CRITTOGRAFATI IRRECUPERABILI SENZA PASSWORD:**
- GPS coordinates (latitude/longitude) in `workSessions`
- Phone numbers, email addresses in `employees` 
- Addresses in `clients` e `employees`

**SE PERDI PASSWORD/ACCESSO = DATI PERDUTI PER SEMPRE**  
**Nessun recupero possibile** da parte di GeoTapp, nemmeno tramite supporto tecnico. **Backup password obbligatorio a carico dell'utente.**

### 2. PIANI TARIFFARI E PAGAMENTI
**GeoTapp Flow** (dashboard di gestione) — abbonamento per azienda:
| Piano | Annuale (+IVA) | Mensile (+IVA) |
|------|---------------|----------------|
| Solo | €390 / anno | €39 / mese |
| Team | €990 / anno | €99 / mese |
| Business | €1.990 / anno | €199 / mese |

**Licenze GeoTapp TimeTracker** (app per i dipendenti) — prezzo per operatore:
| Operatori | Annuale per operatore | Mensile per operatore |
|-----------|----------------------|------------------------|
| fino a 25 | €36 / anno | €3 / mese |
| da 26 a 150 | €30 / anno | €2,50 / mese |

- **Bundle Flow + TimeTracker:** sconto **15%**.
- **Pagamento annuale = 2 mensilità in omaggio** rispetto al mensile.
- **Servizio B2B: identificativo fiscale aziendale obbligatorio. Durata minima 12 mesi** (vedi §10.1).

**Pagamenti:** Stripe, rinnovo automatico. Fatturazione conforme alla normativa IVA UE applicabile (operazioni B2B). Durata minima e disdetta: vedi §10.1.

### 3. REQUISITI D'ACCESSO
- Età 18+, aziende UE/SEE.  
- Firebase Auth (email/Google), custom claims (companyId/role: ADMIN/USER/ACCOUNTANT).  
- **⚠️ BACKUP PASSWORD OBBLIGATORIO:** Utente responsabile backup credenziali per dati crittografati client-side.
- Multi-tenancy: tutti dati filtrati companyId.

### 4. UTILIZZO CONSENTITO E VIETATO
**Consentito:**
- Gestione CRM (clienti, progetti, fornitori, prodotti)
- Timbrature GPS con anti-spoofing e geofence validation
- Gestione turni e ferie dipendenti (shift management, leave requests)
- AI automation con Gemini
- Comunicazioni interne channel-based
- Banking integration e Prima Nota
- Export CSV/PDF dati non crittografati

**Vietato:**
- Reverse engineering del software
- Spoofing GPS o falsificazione posizione (ban permanente)
- Caricamento dati illegali o diffamatori
- Utilizzo per attività illecite
- Condivisione credenziali tra utenti
- **Richieste recupero dati crittografati client-side (impossibile per architettura Zero Knowledge)**

### 5. SLA E DISPONIBILITÀ
- **Uptime:** 99.9% mensile (Firebase SLA)
- **Crediti:** 10% abbonamento per downtime >0.1%
- **Manutenzione:** Notifica 48h anticipata
- **Supporto:** Email info@geotapp.com (risposta entro 2 giorni lavorativi)
- **⚠️ Zero Knowledge Limitation:** Supporto NON include recupero dati crittografati persi

### 6. PROPRIETÀ INTELLETTUALE
- Software © GeoTapp di Michele Angelo Petraroli
- Utente proprietario dei propri dati aziendali
- **Export dati:** CSV/PDF/Excel disponibile (**dati crittografati richiedono password utente**)
- Licenza: Non-esclusiva, revocabile in caso violazione

### 7. RESPONSABILITÀ E LIMITAZIONI

#### 7.1 ARCHITETTURA ZERO KNOWLEDGE - ESCLUSIONE RESPONSABILITÀ DATI IRRECUPERABILI

**CRITTOGRAFIA CLIENT-SIDE (Field-Level Encryption):**

GeoTapp implementa **Zero Knowledge Architecture** tramite **GeoEncryptManager** su app Android TimeTracker:

**Dati Crittografati Client-Side (AES-256):**
| Collection | Campi Encrypted | Algoritmo | Chiavi |
|-----------|-----------------|-----------|--------|
| `workSessions` | `gpsLat`, `gpsLng`, `locationAddress` | AES-256-GCM | Client-side derivate |
| `employees` | `phone`, `email`, `address` | AES-256-GCM | Client-side derivate |
| `clients` | `email`, `phone`, `address` | AES-256-GCM | Client-side derivate |

**Derivazione Chiavi:**
- Chiavi generate **localmente sul dispositivo Android** dell'utente
- Derivazione basata su **password/seed phrase** utente
- **Mai trasmesse a server GeoTapp o Firebase**
- **Mai memorizzate in Firestore o Firebase Storage**

**Esempio Dati Firestore (Crittografati):**
```json
{
  "workSessions": {
    "sessionId123": {
      "userId": "user456",
      "companyId": "company789",
      "gpsLat": "U2FsdGVkX1+vupppZksvRf5pq5g5XjFRIipRkwB0K1Y=",
      "gpsLng": "U2FsdGVkX1+12rzKg37X8jG6bFw23dmFOqJlKr5kL9E=",
      "locationAddress": "U2FsdGVkX1+Qw8jG5gT23Kmg8hG2l..."
    }
  }
}
```

**CONSEGUENZE PERDITA PASSWORD:**

1. **Dati crittografati INACCESSIBILI permanentemente:**
   - Coordinate GPS storiche sessioni lavoro
   - Indirizzi fisici dipendenti/clienti
   - Numeri telefono/email crittografati

2. **GeoTapp NON può aiutare:**
   - Non possediamo chiavi decifratura
   - Non esiste "password recovery" per dati crittografati
   - Supporto tecnico limitato a dati non crittografati (CRM, fatture, turni)

3. **Export dati limitato:**
   - CSV/PDF export conterrà campi crittografati come stringhe base64
   - Impossibile visualizzare senza chiavi originali utente

**LIMITAZIONE RESPONSABILITÀ:**

**L'UTENTE RICONOSCE E ACCETTA CHE:**
- Zero Knowledge Encryption è feature sicurezza, non bug
- Responsabilità **100% utente** per backup password/seed phrase
- GeoTapp **esente da qualsiasi responsabilità** per dati irrecuperabili
- Nessun rimborso/compensazione per perdita accesso dati crittografati
- **Clausola specifica art. 1341 c.c.** - approvata con doppio click

**WAIVER ESPLICITO:**  
☐ **Comprendo** che GeoTapp usa Zero Knowledge Encryption client-side  
☐ **Comprendo** che perdere password = perdere dati crittografati per sempre  
☐ **Accetto** responsabilità esclusiva backup password  
☐ **Rinuncio** a qualsiasi richiesta recupero/compensazione per dati persi

#### 7.2 Altre Limitazioni Responsabilità
- **Nessuna garanzia** risultati business specifici
- **Responsabilità max:** €10.000 annui per danni diretti
- **Force majeure:** Firebase/Google outage, eventi straordinari

### 8. PRIVACY E GDPR COMPLIANCE (UE/SEE)
GeoTapp è **PROCESSOR** (Art.28 GDPR). **Contatto unico:** info@geotapp.com

#### 8.1 Dati Processati - Distinzione Crittografia

| Categoria | Esempi | Encryption | Recuperabile? | Base Legale | Retention |
|-----------|--------|------------|---------------|-------------|-----------|
| **Identificativi** | email, nome, cognome, companyId | ❌ Plain | ✅ Sempre | Contratto | Durata+5aa |
| **GPS Location** | `gpsLat`, `gpsLng` (workSessions) | ✅ Client AES-256 | ❌ Solo con password | Consenso | 12 mesi |
| **Contatti Encrypted** | `phone`, `email` (employees/clients) | ✅ Client AES-256 | ❌ Solo con password | Contratto | Durata+5aa |
| **Indirizzi Encrypted** | `address` (employees/clients) | ✅ Client AES-256 | ❌ Solo con password | Contratto | Durata+5aa |
| **Timbrature Metadata** | timestamp, pauseMinutes | ❌ Plain | ✅ Sempre | Contratto | 5 anni |
| **Comunicazioni** | Messaggi interni channels | ❌ Plain | ✅ Sempre | Legittimo interesse | 90gg |
| **Fatturazione** | Dati Stripe | ❌ Plain | ✅ Sempre | Obbligo legale | 10 anni |

**Nota GDPR Zero Knowledge:**  
Dati crittografati client-side conformi **Art. 32 GDPR** (sicurezza tecnica). Controller (Cliente) responsabile gestione chiavi come **misura sicurezza aggiuntiva**. GeoTapp Processor non ha accesso.

#### 8.2 Trasferimenti Extra-UE
- **Server:** esclusivamente nell'Unione Europea (Firestore `eur3` ed `europe-west8`, Cloud Functions `europe-west1`, foto delle prove di lavoro `europe-west8`, Milano)
- **Pagamenti:** Stripe (US/IE) tratta esclusivamente i dati di fatturazione, mai i dati di lavoro dei dipendenti, coperto da **SCC UE 2021** + **TIA**
- **Sub-processor:** Google (Firebase/Firestore), Stripe (Pagamenti)
- **Garanzie:** Encryption AES-256, SOC2 compliance
- **Zero Knowledge:** Dati sensibili crittografati client-side, trasmessi encrypted

#### 8.3 Diritti Utente GDPR
- **Accesso (Art.15):** Export CSV disponibile (**campi encrypted come base64**)
- **Portabilità (Art.20):** JSON/CSV (**utente responsabile decifratura**)
- **Cancellazione (Art.17):** Richiesta via info@geotapp.com (30gg)
- **Rettifica (Art.16):** Modifica dati plain, **encrypted richiedono password**

**Limitazione GDPR Zero Knowledge:**  
Diritto accesso/portabilità su dati crittografati limitato a export encrypted. Decifratura responsabilità utente con proprie chiavi.

### 9. INTEGRAZIONI SPECIFICHE

#### 9.1 Comunicazioni Interne
- Channel-based messaging (NON crittografato client-side)
- Read receipts, real-time updates Firestore
- Retention: 90gg

#### 9.2 AI Gemini
- Context-aware suggestions CRM
- **Privacy:** Dati anonimi, no training su dati crittografati
- Disclosure EU AI Act compliance

#### 9.3 Banking Integration
- IMAP parsing estratti conto
- Open Banking (GoCardless/EnableBanking)
- Prima Nota automatica

### 10. RECESSO E TERMINAZIONE

#### 10.1 Durata minima e disdetta (aggiornato 03/09/2026)
- **Servizio B2B:** l'accesso richiede un **identificativo fiscale aziendale valido**, obbligatorio alla conversione da trial ad abbonamento: partita IVA per i Clienti stabiliti nell'Unione Europea, verificata sul registro VIES, oppure l'identificativo fiscale nazionale equivalente per i Clienti di altri Paesi. Il servizio non è destinato ai consumatori.
- **Durata minima 12 mesi:** sottoscrivendo, il Cliente approva specificamente la clausola di durata minima di 12 (dodici) mesi e l'obbligo di corrispondere i canoni per l'intero periodo anche in caso di disdetta anticipata. In caso di pagamento mensile, le rate restano dovute fino al termine dei 12 mesi, con **facoltà di saldare in un'unica soluzione l'importo residuo, scontato del 10%**.
- **Attivazione immediata:** il servizio si attiva al momento del pagamento. Trattandosi di un contratto fra professionisti, non si applica il diritto di recesso di 14 giorni che il Codice del Consumo riconosce ai consumatori, e non è quindi richiesta alcuna rinuncia. La prova gratuita di 14 giorni resta disponibile prima di qualsiasi pagamento.
- **Migrazione dati:** export CSV/Firestore (**i dati crittografati client-side richiedono la chiave/password dell'utente**).

#### 10.2 Terminazione GeoTapp
- Violazione ToS: Ban immediato
- Mancato pagamento: Sospensione 15gg → cancellazione 60gg
- **Post-terminazione:** Dati cancellati 30gg (backup 90gg per dispute)
- **Dati crittografati:** Export finale disponibile 30gg (**utente responsabile salvataggio**)

### 11. MODIFICHE ALLA POLITICA
- Notifica email 30gg prima applicazione
- Continuo uso = accettazione implicita
- Changelog: https://geotapp.com/terms/

### 12. LEGGE APPLICABILE E FORO
- **Legge:** Italiana
- **Foro esclusivo:** Tribunale di Brescia (Roma I Reg. CE 593/2008)
- **Versioni:** IT (ufficiale), EN, DE, FR, PL, ES

### 13. CONTATTI

**GeoTapp di Michele Angelo Petraroli**  
P.IVA: IT04183990987  

**Email:** info@geotapp.com  
- DPO / GDPR Representative UE  
- Supporto tecnico (risposta entro 2 giorni lavorativi)  
- Reclami (risposta entro 2 giorni lavorativi)  
- **NON per:** Recupero dati crittografati (impossibile)

**Sito:** https://geotapp.com  
**Documentazione:** https://geotapp.com/guida/  

---

## ALLEGATO 1: DPA (DATA PROCESSING ADDENDUM) GDPR

### A1.1 Istruzioni Processor
GeoTapp processa dati personali per conto Controller (Cliente) come da GDPR Art.28.

### A1.2 Sicurezza Tecnica

**Encryption Multi-Layer:**
| Livello | Implementazione | Chiavi | Responsabile |
|---------|-----------------|--------|--------------|
| **Client-side (ZK)** | AES-256-GCM field-level | Client derivate | Utente |
| **At-rest** | Firebase encryption | Google managed | GeoTapp/Google |
| **In-transit** | TLS 1.3 | Certificati SSL | GeoTapp/Google |

**GPS Anti-Spoofing:**
- isMock detection (Android flag)
- Teleportation check (Haversine distance, speed impossibile)
- Accuracy validation (threshold 100m)
- Geofence validation (raggio tolleranza)

**Access Control:**
- Role-based: ADMIN/USER/ACCOUNTANT
- Firebase Security Rules multi-tenant (companyId filtering)
- Audit logs completi (Firebase Auth)

### A1.3 Sub-Processor Approvati e residenza dati (verificato 03/09/2026)
| Fornitore | Servizio | Residenza dati | Garanzia trasferimento | Certificazioni |
|-----------|----------|----------------|------------------------|----------------|
| Google (Firebase/Google Cloud) | Database Firestore (timbrature, orari, GPS) | **UE (`eur3` ed `europe-west8`, Milano)** | Resta in UE | SOC2, ISO 27001 |
| Google (Firebase/Google Cloud) | Storage foto + Cloud Functions (elaborazione) | **UE (`europe-west8` Milano / `europe-west1`)** | Resta in UE | SOC2, ISO 27001 |
| Stripe Payments Europe | Pagamenti (dati di fatturazione, non dei dipendenti) | UE/USA | SCC + DPF | PCI-DSS Level 1 |
| Cloudflare | CDN/sicurezza del sito web (non dati dei dipendenti) | Edge globale | SCC + DPF | SOC2, ISO 27001 |

> Tutti i dati di lavoro (timbrature, orari, posizioni, fotografie) e la loro elaborazione risiedono **esclusivamente su server nell'Unione Europea**: nessun dato di lavoro dei dipendenti lascia l'UE. Fuori dall'UE resta soltanto Stripe, che tratta i soli dati di fatturazione.

### A1.4 Data Breach Notification
- **Discovery → Cliente:** 24h
- **Discovery → Garante:** 72h
- **Interessati:** Se alto rischio
- **Dati crittografati ZK:** Rischio ridotto (chiavi non possedute)

### A1.5 Transfer Impact Assessment (TIA)
- **Rischio:** Basso (dati sensibili crittografati client-side)
- **Safeguards:** SCC + Zero Knowledge + SOC2
- **Conclusione:** nessun dato di lavoro è trasferito fuori dall'UE; resta conforme al GDPR il solo trasferimento dei dati di fatturazione a Stripe

---

## ALLEGATO 2: STANDARD CONTRACTUAL CLAUSES (SCC) UE 2021

Adottate SCC Decisione Commissione UE 2021/914:
- **Moduli:** Controller-to-Processor (Module 2)
- **Garanzie supplementari:** Zero Knowledge Encryption, audit rights
- **Testo completo:** https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj

---

## ACCETTAZIONE CLIENTE

**CONFERME OBBLIGATORIE (Art. 1341 c.c. - Doppia Approvazione):**

☐ **Accetto** ToS, Privacy Policy, DPA, SCC.  
☐ **Autorizzo** trattamento dati come descritto.  
☐ **Confermo** età 18+ e autorità vincolare azienda.

**SPECIFICAMENTE APPROVO (Art. 1341 c.c.):**

☐ **Sez. 7.1 - Zero Knowledge Encryption:**  
   - Comprendo che GeoTapp NON può recuperare dati crittografati
   - Accetto responsabilità esclusiva backup password
   - Rinuncio a richieste recupero/compensazione per dati persi

☐ **Sez. 7.2 - Limitazione responsabilità:** Max €10.000 annui

☐ **Sez. 12 - Foro competente:** Tribunale Brescia esclusivo

**Log accettazione:**  
- IP: {user_ip}  
- Data/Ora: {timestamp}  
- User-Agent: {user_agent}  
- Versione ToS: 1.5 (3 settembre 2026)

---

*Documento generato per GeoTapp di Michele Angelo Petraroli - P.IVA IT04183990987*  
*Conforme GDPR UE/SEE - Zero Knowledge Architecture - Valido UE + Svizzera + Norvegia + Islanda*
