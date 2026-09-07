# Prove nel browser vero

Script Playwright che si lanciano **a mano**, contro il sito **in produzione**.
Non entrano in `npm test` (quello è vitest, tutto in memoria) e non girano in CI:
qui serve un browser vero, con la sua finestra, sulle pagine vive.

Playwright **non è una dipendenza di questo repo**: sta nella skill, insieme al
suo runner. Quindi si lancia da lì, passando il percorso assoluto del file.

```bash
cd ~/.claude/skills/playwright
node run.js /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site/e2e/trial-errori-lingua.js
LOCALE=de node run.js .../e2e/trial-errori-lingua.js    # un'altra lingua
```

🔴 **Chrome vero, mai il Chromium di Playwright** (`channel: 'chrome'`): rende in
modo diverso e Google rifiuta i login.

## Cosa c'è

| File | Cosa dimostra |
|---|---|
| `trial-errori-lingua.js` | Che gli errori del modulo di prova escono nella lingua della pagina, non in italiano. Tre casi su UNA lingua: server di oggi (codice tradotto), server vecchio (solo frase italiana, la riserva regge), codice non tradotto (esce la frase del server). |
| `trial-errori-giro-lingue.js` | Che la frase giusta esce in TUTTE le lingue: it, en, en-gb, de, nl, fr, es, pt, da, sv, nb, ru. Ultimo giro 07/09/2026: 12/12. |

## Turnstile: perché una parte è simulata

Il captcha è in modalità gestita e **un browser automatico non passa**: la casella
"non sono un robot" è irraggiungibile dentro il suo iframe, e la pagina non arriva
nemmeno a chiamare il server (provato il 07/09/2026, due tentativi, token sempre
vuoto). Quindi lo script mette un token finto nel form e risponde alla POST con i
byte **esatti** che la produzione restituisce.

Pagina, bundle e dizionario sono quelli veri di geotapp.com: l'unica cosa simulata
è il salto di rete. Quello si verifica a parte, e va rifatto se si tocca la rotta:

```bash
curl -s -X POST https://crm.geotapp.com/api/trial/start \
  -H 'Content-Type: application/json' -H 'Origin: https://geotapp.com' \
  -d '{"email":"qa@invalido"}'
# atteso: 400 {"code":"invalid_email","error":"Indirizzo email non valido"}
```

Le due metà insieme fanno la prova intera. Nessuna delle due, da sola, la fa.
