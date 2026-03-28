# INFORMATIVA SULLA PRIVACY
## GeoTapp Flow & TimeTracker
**Versione 1.0 - 10 Marzo 2026**

---

## 1. TITOLARE DEL TRATTAMENTO

**GeoTapp di Michele Angelo Petraroli**  
Via [Indirizzo completo], Trenzano (BS), Italia  
P.IVA: IT04183990987  
Email: info@geotapp.com  
PEC: [pec@geotapp.pec.it]  
Telefono: [+39 XXX XXXXXXX]

**Data Protection Officer (DPO):** info@geotapp.com

---

## 2. FINALITA E BASE GIURIDICA DEL TRATTAMENTO

### 2.1 Trattamenti Necessari per l'Esecuzione del Contratto (Art. 6.1.b GDPR)

| Finalita | Dati Trattati | Retention |
|----------|---------------|-----------|
| Fornitura servizi SaaS | Email, nome, cognome, companyId, ruolo | Durata contratto + 5 anni |
| Gestione CRM clienti | Anagrafica clienti, progetti, fornitori | Durata contratto + 5 anni |
| Timbrature dipendenti | Orari ingresso/uscita, GPS lat/lng, foto prove lavoro | 5 anni (obblighi Italia art. 16 L. 300/70) |
| Gestione turni e ferie | Calendari, richieste permessi, assenze | 5 anni |
| Fatturazione | Dati fattura, importi, Stripe payment data | 10 anni (obbligo legale) |

**Non e richiesto consenso esplicito** per questi trattamenti, essendo necessari per l'esecuzione del contratto.

### 2.2 Trattamenti Basati su Consenso (Art. 6.1.a GDPR)

| Finalita | Dati Trattati | Consenso | Retention |
|----------|---------------|----------|-----------|
| Geolocalizzazione precisa | GPS lat/lng in tempo reale | Si richiesto esplicitamente | 12 mesi |
| Newsletter marketing | Email, nome | Si opt-in | Fino revoca |
| Profilazione AI Gemini | Dati aziendali aggregati anonimi | Si opt-in tier PRO | 24 mesi |

**Il consenso puo essere revocato in qualsiasi momento** via email info@geotapp.com o dalle impostazioni account.

### 2.3 Trattamenti per Legittimo Interesse (Art. 6.1.f GDPR)

| Finalita | Dati Trattati | Interesse | Retention |
|----------|---------------|-----------|-----------|
| Comunicazioni interne | Messaggi channels, timestamp | Efficienza operativa | 90 giorni |
| Sicurezza anti-frode | IP address, device fingerprint | Protezione servizio | 6 mesi |
| Miglioramento prodotto | Analytics anonimi (Firebase) | Sviluppo software | 24 mesi |

**Diritto opposizione:** Puoi opporti a questi trattamenti scrivendo a info@geotapp.com.

### 2.4 Trattamenti per Obbligo Legale (Art. 6.1.c GDPR)

- **Conservazione fatture:** 10 anni (art. 2220 c.c.)
- **Dati contabili:** 10 anni (DPR 600/73)
- **Timbrature dipendenti:** 5 anni (Statuto Lavoratori)

---

## 3. CATEGORIE DI DATI RACCOLTI

### 3.1 Dati Identificativi
- Nome, cognome, email
- Numero telefono (opzionale)
- CompanyId (identificativo tenant)
- Ruolo (ADMIN/USER/ACCOUNTANT)

### 3.2 Dati di Localizzazione
- GPS latitudine/longitudine (**encrypted AES-256**)
- Indirizzo testuale derivato da coordinate
- Raggio geofence sedi aziendali
- **Anti-spoofing checks:** isMock flag, teleportation detection, accuracy validation

### 3.3 Dati Lavorativi
- Orari timbrature (clock-in/clock-out)
- Pause e break
- Foto prove lavoro (storage Firebase)
- Progetti assegnati
- Richieste ferie/permessi

### 3.4 Dati Aziendali (CRM)
- Clienti: anagrafica, contatti, progetti
- Fornitori: P.IVA, IBAN (encrypted)
- Fatture: importi, scadenze, status
- Prima Nota: transazioni bancarie (via IMAP parsing)

### 3.5 Dati di Navigazione
- IP address
- User-Agent browser
- Timestamp accessi
- Firebase Analytics events (anonimi)

### 3.6 Dati NON Raccolti
Noi non raccogliamo:
- Dati sensibili (salute, biometrici, religione)
- Dati minori (<18 anni)
- Contenuti comunicazioni esterne (no email content storage)

---

## 4. MODALITA DI RACCOLTA

### 4.1 Raccolta Diretta
- **Registrazione account:** Modulo signup su https://geotappflow.web.app
- **Configurazione CRM:** Input utente su dashboard Flow
- **Timbrature:** App TimeTracker Android

### 4.2 Raccolta Automatica
- **Firebase Auth:** Email/Google Sign-In
- **Firebase Analytics:** Eventi app/web (anonimi)
- **GPS Location:** Servizio Android (consenso richiesto)
- **IMAP Email Parsing:** Estratti conto bancari (consenso)

### 4.3 Raccolta da Terze Parti
- **Stripe:** Dati pagamento (PCI-DSS compliant)
- **Google Places API:** Indirizzi sedi (autocomplete)
- **GoCardless/EnableBanking:** Transazioni Open Banking

---

## 5. CONDIVISIONE DATI E SUB-PROCESSOR

### 5.1 Sub-Processor Autorizzati (Art. 28 GDPR)

| Fornitore | Servizio | Luogo | SCC | Dati Condivisi | Certificazioni |
|-----------|----------|-------|-----|----------------|----------------|
| **Google LLC** | Firebase/Firestore | US/IE | Si | Tutti dati app | SOC2, ISO 27001 |
| **Stripe Inc** | Pagamenti | US/IE | Si | Email, importi, card hash | PCI-DSS Level 1 |
| **Meta Platforms** | RIMOSSO | - | - | - | - |

**Elenco completo:** https://geotapp.com/sub-processors

### 5.2 Non Vendiamo i Tuoi Dati
GeoTapp **NON vende, affitta o cede dati personali** a terze parti per scopi commerciali.

### 5.3 Trasferimenti Extra-UE
- **Destinazione:** USA (Firebase/Stripe)
- **Garanzie:** Standard Contractual Clauses (SCC) UE 2021
- **TIA:** Transfer Impact Assessment completato (rischio basso)
- **Encryption:** TLS 1.3 + AES-256 at-rest

---

## 6. DIRITTI DEGLI INTERESSATI (GDPR Artt. 15-22)

### 6.1 Diritto di Accesso (Art. 15)
Puoi richiedere copia dei tuoi dati via email info@geotapp.com.  
**Tempo risposta:** 30 giorni.  
**Formato:** CSV/JSON/PDF.

### 6.2 Diritto di Rettifica (Art. 16)
Correggi dati inesatti dalle impostazioni account o contattando info@geotapp.com.

### 6.3 Diritto di Cancellazione (Art. 17 - Right to be Forgotten)
- **Richiesta:** info@geotapp.com
- **Tempo:** 30 giorni
- **Eccezioni:** Obblighi legali (fatture 10 anni, timbrature 5 anni)

### 6.4 Diritto di Portabilita (Art. 20)
Export automatico CSV/Excel da dashboard Flow.  
**Dati inclusi:** CRM, timbrature, fatture, turni.

### 6.5 Diritto di Opposizione (Art. 21)
Opporsi a trattamenti per legittimo interesse (analytics, comunicazioni).

### 6.6 Diritto di Limitazione (Art. 18)
Bloccare temporaneamente trattamenti in caso di contestazione.

### 6.7 Diritto di Revoca Consenso (Art. 7.3)
Revoca consenso GPS/marketing dalle impostazioni o via email.

### 6.8 Reclamo Autorita Garante
**Garante per la Protezione dei Dati Personali**  
Piazza di Monte Citorio n. 121, 00186 Roma  
Email: garante@gpdp.it  
Tel: +39 06.696771  
Web: https://www.garanteprivacy.it

---

## 7. MISURE DI SICUREZZA (Art. 32 GDPR)

### 7.1 Sicurezza Tecnica
- **Encryption at-rest:** AES-256 (GPS, IBAN, email)
- **Encryption in-transit:** TLS 1.3 (tutte comunicazioni)
- **Hashing password:** bcrypt con salt
- **Firebase Security Rules:** Multi-tenant strict (companyId filtering)
- **GPS anti-spoofing:** isMock detection, teleportation check, accuracy validation
- **Geofence validation:** Raggio 100m tolleranza

### 7.2 Sicurezza Organizzativa
- **Access control:** Role-based (ADMIN/USER/ACCOUNTANT)
- **Audit logs:** Tutti accessi tracciati (Firebase Auth)
- **Backup giornalieri:** Firebase automated backups
- **Incident response plan:** Notifica breach 72h
- **Formazione staff:** GDPR awareness training annuale

### 7.3 Vulnerabilita e Patch
- **Update policy:** Patch critiche entro 48h
- **Penetration testing:** Annuale da terze parti
- **Vulnerability disclosure:** security@geotapp.com

---

## 8. DATA BREACH NOTIFICATION (Art. 33-34 GDPR)

### 8.1 Procedura Interna
1. **Detection:** Monitoraggio Firebase/Stripe alerts
2. **Containment:** Isolamento risorse compromesse (max 6h)
3. **Assessment:** Valutazione gravita e dati coinvolti (max 24h)
4. **Notification:** Garante entro 72h, interessati se alto rischio

### 8.2 Contatti Breach
- **Email:** security@geotapp.com
- **Telefono emergenze:** [+39 XXX XXXXXXX]
- **PGP Key:** https://geotapp.com/pgp-key.asc

---

## 9. COOKIE E TECNOLOGIE DI TRACCIAMENTO

### 9.1 Cookie Tecnici (Necessari - No Consenso)
| Nome | Scopo | Durata |
|------|-------|--------|
| `firebase-auth-token` | Autenticazione sessione | 1 ora |
| `company-id` | Multi-tenancy | Sessione |
| `theme-preference` | Dark/light mode | 1 anno |

### 9.2 Cookie Analitici (Consenso Richiesto)
| Nome | Fornitore | Scopo | Durata |
|------|-----------|-------|--------|
| `_ga` | Google Analytics | Analytics anonimi | 2 anni |
| `_firebase_analytics` | Firebase | Performance monitoring | 1 anno |

### 9.3 Gestione Consenso
- **Banner cookie:** Mostrato al primo accesso
- **Opt-out:** https://geotappflow.web.app/cookie-settings
- **Google Analytics opt-out:** https://tools.google.com/dlpage/gaoptout

### 9.4 Local Storage
- `user-settings`: Preferenze UI (no dati personali)
- `offline-cache`: Cache offline WorkSessions (encrypted)

**Linee Guida Garante Privacy 2021:** Conformi.

---

## 10. CONSERVAZIONE DATI

### 10.1 Criteri Generali
- **Principio minimizzazione:** Solo dati necessari
- **Retention by default:** Durata contratto + periodi legali
- **Cancellazione automatica:** Dati scaduti via Cloud Functions scheduled

### 10.2 Tempi di Conservazione Dettagliati

| Categoria | Retention | Motivo |
|-----------|-----------|--------|
| Account utente | Durata contratto + 5 anni | Contratto |
| Timbrature dipendenti | 5 anni | Obbligo legale Italia |
| GPS logs | 12 mesi | Minimizzazione |
| Comunicazioni interne | 90 giorni | Legittimo interesse |
| Fatture e pagamenti | 10 anni | Obbligo fiscale |
| Analytics anonimi | 24 mesi | Miglioramento prodotto |

---

## 11. AGGIORNAMENTI DELL'INFORMATIVA

- Le modifiche sostanziali saranno comunicate via email o in-app.
- La versione aggiornata sara pubblicata su https://geotapp.com/privacy
- Data e versione saranno sempre indicate in testa al documento.

---

## 12. CONTATTI PRIVACY

Per qualunque richiesta relativa ai dati personali:

**Email:** info@geotapp.com  
**DPO:** info@geotapp.com  
**Sito:** https://geotapp.com

---

*Informativa Privacy GeoTapp - Versione 1.0 - 10 Marzo 2026*
