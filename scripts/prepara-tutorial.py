#!/usr/bin/env python3
"""
Prepara per il sito il video di avvio, "dal primo accesso alla prima
timbratura", nelle undici lingue.

    python3 scripts/prepara-tutorial.py          # rifa' tutto
    python3 scripts/prepara-tutorial.py it en    # solo due lingue

Fratello di prepara-giro.py, stesse regole e stesse sorgenti in geotapp-reel:
il montaggio sta in out/tutorial/<lingua>-voce.mp4 (quello `-muto` e' senza
parlato e non ci serve), le battute in scripts/didascalie.py e i fotogrammi
d'attacco in src/geotapp/tutorial/voce.ts.

Cosa produce, per ogni lingua:

  public/video/tutorial-<lingua>.mp4   il video, ricompresso e con l'indice in
                                       testa (faststart)
  public/video/tutorial-<lingua>.vtt   i sottotitoli, dal parlato

🔴 Le locandine `tutorial-<lingua>.jpg` NON si toccano: sono disegnate, non
sono fotogrammi, e ci sono gia'.

🔴 Qui il video SI ricomprime, al contrario del giro. Il montaggio esce a 548
kbit/s di immagine e 317 di parlato, cioe' 13 MB per due minuti, e undici
lingue cosi' sono 145 MB dentro il repo. A CRF 27 scende a 4,9 MB senza che si
veda la differenza: confrontati al 100% i fotogrammi con le scritte piu'
piccole (il codice invito a sei caratteri, l'elenco delle persone), sono
indistinguibili.
"""
import pathlib
import re
import shutil
import subprocess
import sys

QUI = pathlib.Path(__file__).resolve().parent.parent
REEL = QUI.parent / "geotapp-reel"
SORGENTI = REEL / "out" / "tutorial"
USCITA = QUI / "public" / "video"

LINGUE = ["it", "en", "de", "fr", "es", "nl", "pt", "da", "sv", "nb", "ru"]

FPS = 30
# La sigla sta davanti al tutorial (Sigla.tsx, DURATA_SIGLA), e i tempi del
# parlato in voce.ts sono contati DA DOPO la sigla. Senza questa somma i
# sottotitoli uscirebbero due secondi e mezzo in anticipo.
SIGLA = 75
# Quanto dura il file, misurato: 120,085 s. L'ultima battuta si ferma qui.
DURATA = 120.0
# Qualita' della ricompressione: vedi la nota in cima.
CRF = "27"


def sorgente(lingua: str) -> pathlib.Path:
    return SORGENTI / f"{lingua}-voce.mp4"


# ── le sorgenti di testo ────────────────────────────────────────────────────

def battute() -> dict:
    """BATTUTE da geotapp-reel/scripts/didascalie.py, importato per davvero:
    li' i testi sono spezzati su piu' righe con la concatenazione implicita di
    Python, e un parser a mano li romperebbe."""
    sys.path.insert(0, str(REEL / "scripts"))
    import didascalie  # noqa: E402  (l'import sta qui apposta, dopo il path)
    return didascalie.BATTUTE


def tempi() -> dict:
    """Da src/geotapp/tutorial/voce.ts: fotogramma d'attacco e durata."""
    src = (REEL / "src" / "geotapp" / "tutorial" / "voce.ts").read_text(encoding="utf-8")
    fuori: dict = {}
    for blocco in re.finditer(r"^  (\w+): \[(.*?)^  \],", src, re.S | re.M):
        lingua, corpo = blocco.group(1), blocco.group(2)
        voci = []
        for riga in re.finditer(
            r'\{ file: "[^"]*/(\d+)-(\w+)\.mp3", da: (\d+), durata: (\d+) \}', corpo
        ):
            voci.append(
                {"scena": riga.group(2), "da": int(riga.group(3)), "durata": int(riga.group(4))}
            )
        fuori[lingua] = voci
    return fuori


# ── i sottotitoli ───────────────────────────────────────────────────────────

FINE_FRASE = re.compile(r"(?<=[.!?…])\s+")
LIMITE = 84  # due righe da 42 caratteri, la misura dei sottotitoli


def pezzi(testo: str) -> list[str]:
    """Una battuta diventa piu' riquadri: per frase, e le frasi lunghe si
    tagliano su una virgola vicino alla meta'."""
    fuori: list[str] = []
    for frase in FINE_FRASE.split(" ".join(testo.split())):
        frase = frase.strip()
        if not frase:
            continue
        while len(frase) > LIMITE:
            meta = len(frase) // 2
            taglio = -1
            for segno in (", ", "; ", ": ", " - "):
                pos = frase.find(segno, max(meta - 30, 0))
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


def riquadri(lingua: str, testi: dict, tempi_lingua: list) -> list[dict]:
    per_scena = {t["scena"]: t for t in tempi_lingua}
    fuori: list[dict] = []
    for scena, testo in testi[lingua]:
        t = per_scena.get(scena)
        if not t:
            raise SystemExit(f"{lingua}: la scena {scena} non ha tempi in voce.ts")
        da = (t["da"] + SIGLA) / FPS
        a = min((t["da"] + SIGLA + t["durata"]) / FPS, DURATA)
        parti = pezzi(testo)
        totale = sum(len(p) for p in parti) or 1
        cursore = da
        for i, parte in enumerate(parti):
            fine = a if i == len(parti) - 1 else cursore + (a - da) * len(parte) / totale
            fuori.append({"da": round(cursore, 3), "a": round(fine, 3), "testo": parte})
            cursore = fine
    return fuori


def scrivi_vtt(lingua: str, cue: list[dict]) -> pathlib.Path:
    righe = ["WEBVTT", ""]
    for i, c in enumerate(cue, start=1):
        righe += [str(i), f"{orologio(c['da'])} --> {orologio(c['a'])}", c["testo"], ""]
    percorso = USCITA / f"tutorial-{lingua}.vtt"
    percorso.write_text("\n".join(righe), encoding="utf-8")
    return percorso


# ── il video ────────────────────────────────────────────────────────────────

def prepara_video(lingua: str) -> pathlib.Path:
    dentro, fuori = sorgente(lingua), USCITA / f"tutorial-{lingua}.mp4"
    subprocess.run(
        ["ffmpeg", "-v", "error", "-y", "-i", str(dentro),
         "-c:v", "libx264", "-crf", CRF, "-preset", "slow", "-pix_fmt", "yuv420p",
         "-c:a", "aac", "-b:a", "96k", "-movflags", "+faststart", str(fuori)],
        check=True,
    )
    return fuori


def main() -> None:
    if not shutil.which("ffmpeg"):
        raise SystemExit("serve ffmpeg")
    scelte = [a for a in sys.argv[1:] if a in LINGUE] or LINGUE
    USCITA.mkdir(parents=True, exist_ok=True)

    testi, tempi_voce = battute(), tempi()

    for lingua in scelte:
        if not sorgente(lingua).exists():
            raise SystemExit(f"manca il montaggio: {sorgente(lingua)}")
        video = prepara_video(lingua)
        cue = riquadri(lingua, testi, tempi_voce[lingua])
        vtt = scrivi_vtt(lingua, cue)
        locandina = USCITA / f"tutorial-{lingua}.jpg"
        print(
            f"{lingua}: {video.stat().st_size/1e6:.1f} MB, {len(cue)} sottotitoli -> {vtt.name}"
            f"{'' if locandina.exists() else '  ⚠ manca la locandina ' + locandina.name}"
        )


if __name__ == "__main__":
    main()
