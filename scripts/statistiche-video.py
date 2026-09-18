#!/usr/bin/env python3
"""
Quante volte i video sono stati guardati, e per quanto.

    export CLOUDFLARE_API_TOKEN=$(cat ~/.config/geotapp/cloudflare-workers-token)
    python3 scripts/statistiche-video.py --giorni 14

Legge il contatore scritto da src/app/api/video-stats/route.ts: una chiave KV
per evento, senza cookie e senza identificatori, nella forma

    v:<giorno>:<paese>:<lingua>:<video>:<evento>:<uuid>

dove l'evento e' `start` oppure `s<secondi>` (secondi guardati, arrotondati a
dieci). Il conteggio sta nei NOMI delle chiavi: qui si contano, i valori sono
vuoti e non si leggono nemmeno.

Fratello di fetch_consent_stats.py nella skill /google, stesso namespace e
stesso modo di paginare; cambia solo il prefisso, `v:` invece di `e:`.
"""
import argparse
import collections
import json
import os
import sys
import urllib.parse
import urllib.request
from datetime import date, timedelta

ACCOUNT_ID = "34a3e90dabdb6c10eb33f37259fafca4"
NAMESPACE_ID = "777a06f5245946989327c5b811bfd76e"
API = "https://api.cloudflare.com/client/v4"


def chiavi(token: str, prefisso: str) -> list[str]:
    fuori, cursore = [], None
    while True:
        url = (f"{API}/accounts/{ACCOUNT_ID}/storage/kv/namespaces/{NAMESPACE_ID}"
               f"/keys?limit=1000&prefix={urllib.parse.quote(prefisso)}")
        if cursore:
            url += f"&cursor={urllib.parse.quote(cursore)}"
        richiesta = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}"})
        with urllib.request.urlopen(richiesta, timeout=30) as r:
            corpo = json.loads(r.read().decode())
        fuori.extend(k["name"] for k in corpo.get("result", []))
        cursore = (corpo.get("result_info") or {}).get("cursor") or ""
        if not cursore:
            return fuori


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--giorni", type=int, default=14)
    args = ap.parse_args()

    token = os.environ.get("CLOUDFLARE_API_TOKEN")
    if not token:
        print("manca CLOUDFLARE_API_TOKEN nell'ambiente", file=sys.stderr)
        sys.exit(1)

    partenze = collections.Counter()      # (video) -> quante volte e' partito
    per_giorno = collections.Counter()    # (giorno, video) -> partenze
    per_lingua = collections.Counter()    # (video, lingua) -> partenze
    per_paese = collections.Counter()
    secondi = collections.defaultdict(list)   # video -> [secondi visti]

    oggi = date.today()
    for i in range(args.giorni):
        giorno = (oggi - timedelta(days=i)).isoformat()
        for nome in chiavi(token, f"v:{giorno}:"):
            pezzi = nome.split(":")
            if len(pezzi) < 6:
                continue
            _, g, paese, lingua, video, evento = pezzi[:6]
            if evento == "start":
                partenze[video] += 1
                per_giorno[(g, video)] += 1
                per_lingua[(video, lingua)] += 1
                per_paese[(video, paese)] += 1
            elif evento.startswith("s"):
                try:
                    secondi[video].append(int(evento[1:]))
                except ValueError:
                    pass

    if not partenze:
        print(f"nessuna visione negli ultimi {args.giorni} giorni "
              f"(o il contatore non e' ancora in produzione)")
        return

    for video in sorted(partenze):
        visti = sorted(secondi.get(video, []))
        print(f"\n=== {video} ===")
        print(f"partenze: {partenze[video]}")
        if visti:
            meta = visti[len(visti) // 2]
            print(f"visioni chiuse: {len(visti)}  "
                  f"secondi mediani: {meta}  medi: {sum(visti) // len(visti)}")
            scaglioni = collections.Counter(visti)
            riga = "  ".join(f"{s}s:{n}" for s, n in sorted(scaglioni.items()))
            print(f"distribuzione: {riga}")
        else:
            print("nessuna visione chiusa (il conteggio dei secondi arriva a fine visione)")
        lingue = [(l, n) for (v, l), n in per_lingua.items() if v == video]
        paesi = [(p, n) for (v, p), n in per_paese.items() if v == video]
        print("lingue: " + ", ".join(f"{l} {n}" for l, n in sorted(lingue, key=lambda x: -x[1])))
        print("paesi:  " + ", ".join(f"{p} {n}" for p, n in sorted(paesi, key=lambda x: -x[1])[:8]))
        giorni = sorted((g, n) for (g, v), n in per_giorno.items() if v == video)
        print("giorni: " + ", ".join(f"{g[5:]} {n}" for g, n in giorni))


if __name__ == "__main__":
    main()
