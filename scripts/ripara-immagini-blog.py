#!/usr/bin/env python3
"""Ripara le immagini rotte nei post del blog.

Le immagini erano state convertite in .webp sul server, ma il contenuto dei post
punta ancora ai vecchi .png, che rispondono 404. Verificato l'11/09/2026: 25 file
rotti su 33 post (Ahrefs: "Page has broken image" +37).

Sostituisce SOLO le coppie in cui il nome del file e' identico e cambia la sola
estensione, e SOLO dopo aver verificato che la destinazione risponda 200. Le
immagini con nome generico (8-1.png, 9-1.png, 10-1.png, 12-1.png) NON si toccano:
il solo candidato sta in un'altra cartella-mese e potrebbe essere un'altra foto.

Senza --scrivi non modifica niente: stampa cosa farebbe.
"""
import base64, json, os, re, sys, urllib.parse, urllib.request
from pathlib import Path

WP = "https://blog.geotapp.com"
ENV = Path(__file__).resolve().parents[2] / "geotapp-growth-engine" / "backend" / ".env"
UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/141.0 Safari/537.36",
      "x-geotapp-proxy": "1", "x-forwarded-proto": "https"}
SCRIVI = "--scrivi" in sys.argv

# Nomi troppo generici per fidarsi di una corrispondenza fra cartelle diverse.
AMBIGUI = re.compile(r"/\d{4}/\d{2}/\d{1,3}-\d+\.(png|jpe?g)$")


def testa(auth=False):
    h = dict(UA)
    if auth:
        letto = {}
        for riga in ENV.read_text(encoding="utf-8").splitlines():
            for k in ("WP_REST_USER", "WP_APP_PASSWORD"):
                if riga.startswith(k + "="):
                    letto[k] = riga.split("=", 1)[1].strip().strip('"').strip("'")
        if len(letto) < 2:
            sys.exit("credenziali WP_REST_USER / WP_APP_PASSWORD non trovate in " + str(ENV))
        coppia = f"{letto['WP_REST_USER']}:{letto['WP_APP_PASSWORD']}".encode()
        h["Authorization"] = "Basic " + base64.b64encode(coppia).decode()
    return h


def chiama(url, metodo="GET", corpo=None, auth=False):
    dati = json.dumps(corpo).encode() if corpo is not None else None
    h = testa(auth)
    if dati:
        h["Content-Type"] = "application/json"
    req = urllib.request.Request(url, data=dati, method=metodo, headers=h)
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.load(r)


def vivo(url):
    req = urllib.request.Request(url, method="HEAD", headers=testa())
    try:
        with urllib.request.urlopen(req, timeout=25) as r:
            return r.status == 200
    except Exception:
        return False


def main():
    mappa_grezza = json.loads(Path(sys.argv[1]).read_text()) if len(sys.argv) > 1 and not sys.argv[1].startswith("--") \
        else json.loads(Path("/tmp/immagini_mappa.json").read_text())

    # 1. tieni solo le sostituzioni sicure
    coppie = {}
    for rotta, nuova in mappa_grezza.items():
        if not nuova:
            print("  salto (nessun candidato):", rotta)
            continue
        if AMBIGUI.search(urllib.parse.urlparse(rotta).path):
            print("  salto (nome generico, da guardare a mano):", rotta)
            continue
        vecchio = re.sub(r"\.(png|jpe?g|webp)$", "", rotta.rsplit("/", 1)[-1])
        nuovo = re.sub(r"\.(png|jpe?g|webp)$", "", nuova.rsplit("/", 1)[-1])
        if nuovo not in (vecchio, re.sub(r"-\d+x\d+$", "", vecchio), re.sub(r"-\d+x\d+$", "", vecchio) + "-scaled"):
            print("  salto (nome non corrispondente):", rotta, "->", nuova)
            continue
        if not vivo(nuova):
            print("  salto (destinazione non risponde 200):", nuova)
            continue
        coppie[rotta] = nuova
        # la stessa immagine compare sia come /blog/wp-content/... sia come host pieno
        p = urllib.parse.urlparse(rotta).path
        for variante in {f"https://geotapp.com{p}", f"https://blog.geotapp.com{p.replace('/blog', '', 1)}",
                         p, p.replace("/blog", "", 1)}:
            coppie.setdefault(variante, nuova)
    print(f"\nsostituzioni sicure: {len(set(mappa_grezza) & set(coppie))} su {len(mappa_grezza)}\n")

    # 2. trova i post che le contengono e riscrivili
    pagina, toccati, cambi = 1, 0, 0
    while True:
        q = urllib.parse.urlencode({"per_page": 100, "page": pagina, "status": "publish",
                                    "_fields": "id,link,content", "orderby": "date", "order": "desc"})
        try:
            posts = chiama(f"{WP}/wp-json/wp/v2/posts/?{q}")
        except urllib.error.HTTPError as e:
            if e.code == 400:
                break
            raise
        if not posts:
            break
        for p in posts:
            html = p["content"]["rendered"]
            nuovo = html
            for vecchia, nuova in coppie.items():
                if vecchia in nuovo:
                    nuovo = nuovo.replace(vecchia, nuova)
            if nuovo == html:
                continue
            n = sum(1 for v in coppie if v in html)
            toccati += 1
            cambi += n
            print(f"  post {p['id']:6}  {n} url  {p['link'][22:95]}")
            if SCRIVI:
                chiama(f"{WP}/wp-json/wp/v2/posts/{p['id']}", "POST", {"content": nuovo}, auth=True)
        pagina += 1
    print(f"\npost da correggere: {toccati} | url da sostituire: {cambi}")
    print("SCRITTO su WordPress" if SCRIVI else "PROVA A VUOTO: non ho scritto niente (aggiungi --scrivi)")


if __name__ == "__main__":
    main()
