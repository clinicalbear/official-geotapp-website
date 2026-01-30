
# Guida al Deploy su VPS (Docker)

Ho preparato i file necessari per deployare **GeoTapp Site** su una VPS utilizzando Docker.

## Prerequisiti su VPS
Assicurati che sulla VPS siano installati:
- **Docker**
- **Docker Compose**

## Istruzioni di Deploy

1.  **Trasferisci i file**: Copia l'intera cartella del progetto sulla tua VPS. Assicurati di includere:
    - `Dockerfile`
    - `docker-compose.yml`
    - `.env.local` (con le tue credenziali di produzione)
    - `public/`
    - `src/`
    - `package.json`
    - `next.config.mjs`
    - ecc.

2.  **Configura Variabili d'Ambiente**:
    - Verifica che il file `.env.local` contenga le chiavi corrette per l'ambiente di produzione (Stripe Live key, URL di produzione, ecc.).

3.  **Avvia il Container**:
    Esegui il seguente comando nella root del progetto sulla VPS:

    ```bash
    docker-compose up -d --build
    ```

    Questo comando:
    - Costruirà l'immagine Docker ottimizzata (Next.js Standalone).
    - Avvierà il container sulla porta **3000**.

4.  **Reverse Proxy (Consigliato)**:
    Se usi Nginx o Apache, configura un reverse proxy per puntare al container:
    - `http://localhost:3000`

## Aggiornamenti Futuri
Per aggiornare il sito dopo aver modificato il codice:

```bash
# Scarica il codice aggiornato (git pull, oppure ricarica i file)
# Ricostruisci e riavvia
docker-compose up -d --build
```
