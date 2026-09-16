#!/usr/bin/env python3
"""Ripara le immagini rotte nei post del blog.

Alcuni <img> nel contenuto puntano a file che rispondono 404: parte sono .png
convertiti in .webp sul server, parte hanno un percorso-mese sbagliato.
Verificato l'11/09/2026: 25 file rotti, 162 occorrenze, 21 post.

NON si indovina il sostituto dal nome. Ogni <img> di WordPress porta la classe
`wp-image-<id>`, cioe' l'ID dell'allegato: si chiede a WordPress qual e' oggi la
`source_url` di quell'allegato e si usa quella. Se l'immagine non ha la classe, o
se la destinazione non risponde 200, il tag si lascia com'e' e si segnala.

Senza --scrivi non modifica niente: stampa cosa farebbe.
"""
import base64, json, re, sys, urllib.error, urllib.parse, urllib.request
from pathlib import Path

WP = "https://blog.geotapp.com"
ENV = Path(__file__).resolve().parents[2] / "geotapp-growth-engine" / "backend" / ".env"
UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/141.0 Safari/537.36",
      "x-geotapp-proxy": "1", "x-forwarded-proto": "https"}
SCRIVI = "--scrivi" in sys.argv

TAG_IMG = re.compile(r'<img\b[^>]*>', re.I)
ATTR_SRC = re.compile(r'\ssrc="([^"]+)"', re.I)
ATTR_ID = re.compile(r'\bwp-image-(\d+)\b')

_stato: dict[str, bool] = {}
_media: dict[str, str | None] = {}


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


def assoluto(src: str) -> str:
    if src.startswith("//"):
        return "https:" + src
    if src.startswith("/"):
        return "https://geotapp.com" + src
    return src


def vivo(src: str) -> bool:
    url = assoluto(src)
    if url not in _stato:
        req = urllib.request.Request(url, method="HEAD", headers=testa())
        try:
            with urllib.request.urlopen(req, timeout=25) as r:
                _stato[url] = r.status == 200
        except Exception:
            _stato[url] = False
    return _stato[url]


def sorgente_allegato(mid: str) -> str | None:
    """La source_url che WordPress dichiara OGGI per quell'allegato."""
    if mid not in _media:
        try:
            m = chiama(f"{WP}/wp-json/wp/v2/media/{mid}?_fields=id,source_url")
            _media[mid] = m.get("source_url")
        except Exception:
            _media[mid] = None
    return _media[mid]


def ripara(html: str, esiti: list) -> str:
    def sostituisci(m):
        tag = m.group(0)
        s = ATTR_SRC.search(tag)
        if not s:
            return tag
        src = s.group(1)
        if vivo(src):
            return tag
        i = ATTR_ID.search(tag)
        if not i:
            esiti.append(("SENZA-ID", src, None))
            return tag
        nuova = sorgente_allegato(i.group(1))
        if not nuova or not vivo(nuova):
            esiti.append(("IRRECUPERABILE", src, nuova))
            return tag
        if assoluto(nuova) == assoluto(src):
            esiti.append(("IRRECUPERABILE", src, nuova))
            return tag
        esiti.append(("RIPARATA", src, nuova))
        return tag[:s.start(1)] + nuova + tag[s.end(1):]
    return TAG_IMG.sub(sostituisci, html)


def main():
    pagina, toccati, riparate, falliti = 1, 0, 0, []
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
            if "<img" not in html:
                continue
            esiti: list = []
            nuovo = ripara(html, esiti)
            ok = [e for e in esiti if e[0] == "RIPARATA"]
            ko = [e for e in esiti if e[0] != "RIPARATA"]
            falliti.extend((p["id"], *e) for e in ko)
            if not ok:
                continue
            toccati += 1
            riparate += len(ok)
            print(f"  post {p['id']:6}  {len(ok):3} img  {p['link'][22:92]}")
            for _, vecchia, nuova in ok[:2]:
                print(f"           {vecchia[38:]}\n        -> {nuova[38:]}")
            if len(ok) > 2:
                print(f"           ... e altre {len(ok) - 2}")
            if SCRIVI:
                chiama(f"{WP}/wp-json/wp/v2/posts/{p['id']}", "POST", {"content": nuovo}, auth=True)
        pagina += 1

    print(f"\npost toccati: {toccati} | img riparate: {riparate}")
    if falliti:
        print(f"\nnon riparabili ({len(falliti)}), da guardare a mano:")
        for pid, motivo, src, nuova in falliti:
            print(f"  post {pid} {motivo}: {src[38:]}" + (f" -> {str(nuova)[38:]}" if nuova else ""))
    print("\nSCRITTO su WordPress" if SCRIVI else "\nPROVA A VUOTO: non ho scritto niente (aggiungi --scrivi)")


if __name__ == "__main__":
    main()
