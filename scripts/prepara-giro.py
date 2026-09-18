#!/usr/bin/env python3
"""
Prepara per il sito il video "il giro completo", nelle undici lingue.

    python3 scripts/prepara-giro.py            # rifa' tutto
    python3 scripts/prepara-giro.py it en      # solo due lingue

Le sorgenti stanno in geotapp-reel, che e' un altro repo: da li' arrivano il
montaggio (out/giro), le scritte del video (src/geotapp/giro/testi.ts), i tempi
del parlato (voce.ts) e le battute (scripts/voce_giro.py). Qui dentro finisce
solo il risultato, cosi' il sito si costruisce da solo anche senza geotapp-reel.

Cosa produce, per ogni lingua:

  public/video/giro-<lingua>.mp4      video riscritto con l'indice in testa
                                      (faststart) e l'audio a 96k invece di 317k
  public/video/giro-<lingua>.jpg      la locandina: la sigla, gia' nella lingua
  public/video/giro-<lingua>-og.jpg   la miniatura per social e SERP: il telefono
                                      e Flow insieme, che la sigla non fa vedere
  public/video/giro-<lingua>.vtt      i sottotitoli, dal parlato
  src/lib/video-giro-contenuti.ts  titoli degli atti e trascrizione, per la
                                   pagina e per i dati strutturati

🔴 L'audio pesava piu' del video: 317 kbit/s di parlato contro 190 di immagine.
A 96k la voce non cambia e il file cala da 5,1 a ~2,9 MB. Il video NON si
ricomprime: si copia, cosi' le schermate restano leggibili.
"""
import ast
import json
import pathlib
import re
import shutil
import subprocess
import sys

QUI = pathlib.Path(__file__).resolve().parent.parent
REEL = QUI.parent / "geotapp-reel"
SORGENTI = REEL / "out" / "giro"
USCITA = QUI / "public" / "video"
GENERATO = QUI / "src" / "lib" / "video-giro-contenuti.ts"

LINGUE = ["it", "en", "de", "fr", "es", "nl", "pt", "da", "sv", "nb", "ru"]

# I fotogrammi del montaggio: 30 al secondo (vedi SCENE in scripts/voce_giro.py).
FPS = 30
# Quanto dura il file, misurato: 2401 fotogrammi. In francese, olandese e
# svedese l'ultima battuta sfora di qualche decimo la coda del montaggio e nel
# video viene tagliata; il sottotitolo si ferma con il video, invece di
# promettere una riga che non si vede.
DURATA = 80.0
# Il secondo da cui si prende la locandina: la sigla, che e' gia' nella lingua.
LOCANDINA_SECONDO = 1.6
# La miniatura per social e SERP: qui il telefono e Flow si vedono insieme, che
# e' quello che si cerca in una scheda. La sigla, li', direbbe solo delle parole.
MINIATURA_SECONDO = 3.0


def sorgente(lingua: str) -> pathlib.Path:
    return SORGENTI / f"giro-live-voce-{lingua}-16x9-80s.mp4"


# ── le sorgenti di testo ────────────────────────────────────────────────────

def battute() -> dict:
    """BATTUTE da scripts/voce_giro.py, letto come testo: importarlo
    tirerebbe dentro il motore di sintesi, che qui non serve."""
    src = (REEL / "scripts" / "voce_giro.py").read_text(encoding="utf-8")
    inizio = src.index("BATTUTE = {")
    fine = src.index("\n}\n", inizio) + 2
    return ast.literal_eval(src[inizio + len("BATTUTE = ") : fine])


def tempi() -> dict:
    """Da src/geotapp/giro/voce.ts: per ogni battuta il fotogramma d'attacco e
    quanti fotogrammi dura."""
    src = (REEL / "src" / "geotapp" / "giro" / "voce.ts").read_text(encoding="utf-8")
    fuori: dict = {}
    for blocco in re.finditer(r"^  (\w+): \[(.*?)^  \],", src, re.S | re.M):
        lingua, corpo = blocco.group(1), blocco.group(2)
        voci = []
        for riga in re.finditer(
            r'\{ file: "[^"]*/(\d+)-(\w+)\.mp3", da: (\d+), durata: (\d+) \}', corpo
        ):
            voci.append(
                {
                    "scena": riga.group(2),
                    "da": int(riga.group(3)),
                    "durata": int(riga.group(4)),
                }
            )
        fuori[lingua] = voci
    return fuori


def scritte() -> dict:
    """Da src/geotapp/giro/testi.ts, passando per esbuild: e' TypeScript, e un
    parser fatto a mano qui si romperebbe al primo apostrofo."""
    ponte = REEL / "node_modules" / ".bin" / "esbuild"
    if not ponte.exists():
        raise SystemExit(f"manca esbuild in {ponte}: npm install dentro geotapp-reel")
    js = subprocess.run(
        [str(ponte), "src/geotapp/giro/testi.ts", "--format=cjs", "--loader:.ts=ts"],
        cwd=REEL,
        capture_output=True,
        text=True,
        check=True,
    ).stdout
    dump = subprocess.run(
        ["node", "-e", f"const m={{exports:{{}}}};(function(module,exports){{{js}}})(m,m.exports);process.stdout.write(JSON.stringify(m.exports.TESTI))"],
        capture_output=True,
        text=True,
        check=True,
    ).stdout
    return json.loads(dump)


# ── i sottotitoli ───────────────────────────────────────────────────────────

FINE_FRASE = re.compile(r"(?<=[.!?…])\s+")
LIMITE = 84  # caratteri per riquadro: due righe da 42, la misura dei sottotitoli


def pezzi(testo: str) -> list[str]:
    """Una battuta diventa piu' riquadri: prima per frase, poi tagliando le
    frasi lunghe su una virgola vicino alla meta'."""
    fuori: list[str] = []
    for frase in FINE_FRASE.split(testo.strip()):
        frase = frase.strip()
        if not frase:
            continue
        while len(frase) > LIMITE:
            meta = len(frase) // 2
            taglio = -1
            for segno in (", ", "; ", ": ", " — ", " - "):
                pos = frase.find(segno, meta - 30)
                if pos != -1 and abs(pos - meta) < abs(taglio - meta):
                    taglio = pos + len(segno) - 1
            if taglio == -1:
                taglio = frase.rfind(" ", 0, LIMITE)
            if taglio <= 0:
                break
            fuori.append(frase[: taglio + 1].strip())
            frase = frase[taglio + 1 :].strip()
        if frase:
            fuori.append(frase)
    return fuori


def orologio(secondi: float) -> str:
    minuti, resto = divmod(max(secondi, 0), 60)
    return f"00:{int(minuti):02d}:{resto:06.3f}"


def riquadri(lingua: str, testi_battute: dict, tempi_lingua: list) -> list[dict]:
    """I riquadri dei sottotitoli, dentro la finestra della loro battuta."""
    per_scena = {t["scena"]: t for t in tempi_lingua}
    fuori: list[dict] = []
    for scena, testo in testi_battute[lingua]:
        t = per_scena.get(scena)
        if not t:
            raise SystemExit(f"{lingua}: la scena {scena} non ha tempi in voce.ts")
        da = t["da"] / FPS
        a = min((t["da"] + t["durata"]) / FPS, DURATA)
        parti = pezzi(testo)
        totale = sum(len(p) for p in parti) or 1
        cursore = da
        for i, parte in enumerate(parti):
            quota = (a - da) * len(parte) / totale
            fine = a if i == len(parti) - 1 else cursore + quota
            fuori.append({"da": round(cursore, 3), "a": round(fine, 3), "testo": parte})
            cursore = fine
    return fuori


def scrivi_vtt(lingua: str, cue: list[dict]) -> pathlib.Path:
    righe = ["WEBVTT", ""]
    for i, c in enumerate(cue, start=1):
        righe += [str(i), f"{orologio(c['da'])} --> {orologio(c['a'])}", c["testo"], ""]
    percorso = USCITA / f"giro-{lingua}.vtt"
    percorso.write_text("\n".join(righe), encoding="utf-8")
    return percorso


# ── il video e la locandina ─────────────────────────────────────────────────

def ffmpeg(*args: str) -> None:
    subprocess.run(["ffmpeg", "-v", "error", "-y", *args], check=True)


def prepara_video(lingua: str) -> pathlib.Path:
    dentro, fuori = sorgente(lingua), USCITA / f"giro-{lingua}.mp4"
    ffmpeg("-i", str(dentro), "-c:v", "copy", "-c:a", "aac", "-b:a", "96k",
           "-movflags", "+faststart", str(fuori))
    return fuori


def prepara_locandina(lingua: str) -> pathlib.Path:
    dentro, fuori = sorgente(lingua), USCITA / f"giro-{lingua}.jpg"
    ffmpeg("-ss", str(LOCANDINA_SECONDO), "-i", str(dentro), "-frames:v", "1",
           "-vf", "scale=1280:-2", "-q:v", "4", str(fuori))
    return fuori


def prepara_miniatura(lingua: str) -> pathlib.Path:
    dentro, fuori = sorgente(lingua), USCITA / f"giro-{lingua}-og.jpg"
    ffmpeg("-ss", str(MINIATURA_SECONDO), "-i", str(dentro), "-frames:v", "1",
           "-vf", "scale=1200:-2", "-q:v", "3", str(fuori))
    return fuori


# ── il file generato per il sito ────────────────────────────────────────────

def ts_stringa(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def scrivi_contenuti(dati: dict) -> None:
    corpo = []
    for lingua in LINGUE:
        d = dati[lingua]
        trascrizione = ",\n".join(
            f"      {{ da: {c['da']}, testo: {ts_stringa(c['testo'])} }}"
            for c in d["trascrizione"]
        )
        atti = ",\n".join(f"      {ts_stringa(a)}" for a in d["atti"])
        corpo.append(
            f"  {lingua}: {{\n"
            f"    titolo: {ts_stringa(d['sigla']['titolo'])},\n"
            f"    passi: {ts_stringa(d['sigla']['passi'])},\n"
            f"    nota: {ts_stringa(d['sigla']['nota'])},\n"
            f"    atto: {ts_stringa(d['atto'])},\n"
            f"    atti: [\n{atti},\n    ],\n"
            f"    chiusa: {ts_stringa(d['chiusa'])},\n"
            f"    trascrizione: [\n{trascrizione},\n    ],\n"
            f"  }},"
        )
    GENERATO.write_text(
        "/**\n"
        " * Le parole del video \"il giro completo\", nelle undici lingue.\n"
        " *\n"
        " * 🔴 GENERATO da scripts/prepara-giro.py: non si scrive a mano.\n"
        " * Le sorgenti stanno in geotapp-reel (testi.ts per le scritte del\n"
        " * montaggio, voce_giro.py per il parlato, voce.ts per i tempi).\n"
        " *\n"
        " * La trascrizione sta qui, e non solo nei .vtt, perche' la pagina del\n"
        " * video la mostra scritta: e' il testo che Google puo' leggere, e serve a\n"
        " * chi non puo' o non vuole guardare ottanta secondi di filmato.\n"
        " */\n"
        "import type { LinguaGiro } from './video-giro';\n\n"
        "export type VoceTrascrizione = { da: number; testo: string };\n\n"
        "export type ContenutoGiro = {\n"
        "  titolo: string;\n"
        "  passi: string;\n"
        "  nota: string;\n"
        "  atto: string;\n"
        "  atti: string[];\n"
        "  chiusa: string;\n"
        "  trascrizione: VoceTrascrizione[];\n"
        "};\n\n"
        "export const GIRO_CONTENUTI: Record<LinguaGiro, ContenutoGiro> = {\n"
        + "\n".join(corpo)
        + "\n};\n",
        encoding="utf-8",
    )


def main() -> None:
    if not shutil.which("ffmpeg"):
        raise SystemExit("serve ffmpeg")
    scelte = [a for a in sys.argv[1:] if a in LINGUE] or LINGUE
    USCITA.mkdir(parents=True, exist_ok=True)

    testi_battute, tempi_voce, testi_video = battute(), tempi(), scritte()
    dati: dict = {}

    for lingua in scelte:
        if not sorgente(lingua).exists():
            raise SystemExit(f"manca il montaggio: {sorgente(lingua)}")
        video = prepara_video(lingua)
        locandina = prepara_locandina(lingua)
        miniatura = prepara_miniatura(lingua)
        cue = riquadri(lingua, testi_battute, tempi_voce[lingua])
        vtt = scrivi_vtt(lingua, cue)
        t = testi_video[lingua]
        dati[lingua] = {
            "sigla": t["sigla"],
            "atto": t["atto"],
            "atti": t["atti"],
            "chiusa": t["chiusa"],
            "trascrizione": [{"da": c["da"], "testo": c["testo"]} for c in cue],
        }
        print(
            f"{lingua}: {video.stat().st_size/1e6:.1f} MB, "
            f"locandina {locandina.stat().st_size/1e3:.0f} KB, "
            f"miniatura {miniatura.stat().st_size/1e3:.0f} KB, "
            f"{len(cue)} sottotitoli -> {vtt.name}"
        )

    if len(scelte) == len(LINGUE):
        scrivi_contenuti(dati)
        print(f"scritto {GENERATO.relative_to(QUI)}")
    else:
        print("lingue parziali: src/lib/video-giro-contenuti.ts NON riscritto")


if __name__ == "__main__":
    main()
