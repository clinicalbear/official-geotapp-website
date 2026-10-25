#!/usr/bin/env python3
"""
Costruisce il media kit GeoTapp: uno ZIP per lingua, tutto nella lingua scelta.

Uso:  python3 scripts/build-press-kit.py --out /percorso/press-kit
Output: <out>/GeoTapp-Press-Kit-<locale>.zip  (11 lingue) + <out>/MANIFEST.txt

Gli ZIP NON vanno in public/: si scaricano solo dal link firmato (vedi
docs/press-kit-download.md). Questo script non pubblica niente.

Sorgenti: i file raster in public/ (non esistono originali vettoriali).
Formati prodotti per ogni logo: PNG trasparente, JPG su bianco, TIFF, PDF.
Per ogni foto: JPG, PNG, TIFF. Nessuna immagine viene ingrandita: si consegna
la risoluzione che abbiamo e il README lo dice.
"""
import argparse
import io
import json
import zipfile
from datetime import date
from pathlib import Path

from PIL import Image
from docx import Document
from docx.shared import Pt

ROOT = Path(__file__).resolve().parent.parent
PUB = ROOT / "public"
DICT = ROOT / "src" / "dictionaries"

LOCALES = ["it", "en", "de", "fr", "es", "pt", "nl", "sv", "da", "nb", "ru"]

LOGOS = [
    ("GeoTapp", "LogoGeoTapp.webp"),
    # Stesso disegno di public/logoFlow.webp (200x68) ma a 943x322: e' la copia
    # a risoluzione piu' alta che abbiamo, quella dell'app Flow.
    ("GeoTapp-Flow", "../../geotapp-flow/assets/images/logo_flow.png"),
    ("GeoTapp-TimeTracker", "logoTT.webp"),
    ("GeoTapp-Verifier", "logoVerifier.webp"),
]
PHOTOS = [
    ("Founder-portrait", "michele-petraroli-3.webp"),
    ("Founder-portrait-2", "michele-petraroli-2.webp"),
    ("Founder-wide", "michele-petraroli-wide.webp"),
    ("Founder-studio", "michele-petraroli-studio.webp"),
    ("Founder-studio-wide", "michele-petraroli-studio-wide.webp"),
]

# Testi del README. Solo questi sono scritti qui; boilerplate, fatti, bio e
# contatto vengono dai dizionari del sito (gia' rivisti per lingua).
README = {
    "it": {
        "title": "Media kit GeoTapp",
        "contents": "Contenuto",
        "logos": "Loghi: PNG con sfondo trasparente, JPG su bianco, TIFF, PDF.",
        "photos": "Foto del fondatore: JPG, PNG, TIFF.",
        "text": "Testi: boilerplate, fatti e biografia (file .docx).",
        "rules_h": "Come usare il materiale",
        "rules": [
            "Usa i loghi com'e': non cambiare colori, non deformarli, niente ombre o effetti.",
            "Lascia uno spazio libero attorno al logo e usalo su sfondo chiaro.",
            "Loghi e foto sono forniti per raccontare GeoTapp su carta e online. Per altri usi scrivici.",
            "Le immagini sono alla massima risoluzione che abbiamo. Se te ne serve una piu' grande, chiedila.",
        ],
        "contact": "Contatto stampa",
    },
    "en": {
        "title": "GeoTapp media kit",
        "contents": "Contents",
        "logos": "Logos: PNG with transparent background, JPG on white, TIFF, PDF.",
        "photos": "Founder photos: JPG, PNG, TIFF.",
        "text": "Text: boilerplate, facts and biography (.docx file).",
        "rules_h": "How to use the material",
        "rules": [
            "Use the logos as supplied: do not recolour, stretch or add shadows or effects.",
            "Leave free space around the logo and place it on a light background.",
            "Logos and photos are provided to report on GeoTapp, in print and online. For other uses, write to us.",
            "Images are at the highest resolution we hold. If you need a larger one, ask us.",
        ],
        "contact": "Press contact",
    },
    "de": {
        "title": "GeoTapp-Pressekit",
        "contents": "Inhalt",
        "logos": "Logos: PNG mit transparentem Hintergrund, JPG auf Weiß, TIFF, PDF.",
        "photos": "Gründerfotos: JPG, PNG, TIFF.",
        "text": "Texte: Unternehmensbeschreibung, Fakten und Biografie (.docx-Datei).",
        "rules_h": "So verwenden Sie das Material",
        "rules": [
            "Verwenden Sie die Logos unverändert: keine Farbänderung, keine Verzerrung, keine Schatten oder Effekte.",
            "Lassen Sie um das Logo herum Freiraum und platzieren Sie es auf hellem Hintergrund.",
            "Logos und Fotos stehen für die Berichterstattung über GeoTapp in Print und online zur Verfügung. Für andere Verwendungen schreiben Sie uns.",
            "Die Bilder liegen in der höchsten Auflösung vor, die wir haben. Wenn Sie eine höhere Auflösung benötigen, fragen Sie uns gern.",
        ],
        "contact": "Pressekontakt",
    },
    "fr": {
        "title": "Kit presse GeoTapp",
        "contents": "Contenu",
        "logos": "Logos : PNG à fond transparent, JPG sur blanc, TIFF, PDF.",
        "photos": "Photos du fondateur : JPG, PNG, TIFF.",
        "text": "Textes : présentation, faits et biographie (fichier .docx).",
        "rules_h": "Comment utiliser ces éléments",
        "rules": [
            "Utilisez les logos tels quels : ne changez pas les couleurs, ne les déformez pas et n'ajoutez ni ombre ni effet.",
            "Laissez un espace libre autour du logo et placez-le sur un fond clair.",
            "Les logos et les photos sont fournis pour parler de GeoTapp, dans la presse écrite et en ligne. Pour un autre usage, écrivez-nous.",
            "Les images sont à la résolution maximale dont nous disposons. S'il vous en faut une plus grande, demandez-la-nous.",
        ],
        "contact": "Contact presse",
    },
    "es": {
        "title": "Kit de prensa de GeoTapp",
        "contents": "Contenido",
        "logos": "Logotipos: PNG con fondo transparente, JPG sobre blanco, TIFF, PDF.",
        "photos": "Fotos del fundador: JPG, PNG, TIFF.",
        "text": "Textos: presentación de la empresa, datos y biografía (archivo .docx).",
        "rules_h": "Cómo usar el material",
        "rules": [
            "Usa los logotipos tal como están: no cambies los colores, no los deformes, sin sombras ni efectos.",
            "Deja espacio libre alrededor del logotipo y colócalo sobre un fondo claro.",
            "Los logotipos y las fotos se facilitan para informar sobre GeoTapp, en papel y en línea. Para otros usos, escríbenos.",
            "Las imágenes están en la máxima resolución de la que disponemos. Si necesitas una más grande, pídenosla.",
        ],
        "contact": "Contacto de prensa",
    },
    "pt": {
        "title": "Kit de imprensa GeoTapp",
        "contents": "Conteúdo",
        "logos": "Logótipos: PNG com fundo transparente, JPG sobre branco, TIFF, PDF.",
        "photos": "Fotografias do fundador: JPG, PNG, TIFF.",
        "text": "Textos: apresentação da empresa, factos e biografia (ficheiro .docx).",
        "rules_h": "Como usar o material",
        "rules": [
            "Use os logótipos tal como estão: não mude as cores, não os deforme nem lhes acrescente sombras ou efeitos.",
            "Deixe espaço livre à volta do logótipo e use-o sobre um fundo claro.",
            "Os logótipos e as fotografias são fornecidos para dar notícias sobre a GeoTapp, em papel e online. Para outros usos, escreva-nos.",
            "As imagens estão na resolução máxima que temos. Se precisar de uma maior, peça-nos.",
        ],
        "contact": "Contacto de imprensa",
    },
    "nl": {
        "title": "GeoTapp persmap",
        "contents": "Inhoud",
        "logos": "Logo's: PNG met transparante achtergrond, JPG op wit, TIFF, PDF.",
        "photos": "Foto's van de oprichter: JPG, PNG, TIFF.",
        "text": "Teksten: bedrijfsomschrijving, feiten en biografie (.docx-bestand).",
        "rules_h": "Zo gebruikt u het materiaal",
        "rules": [
            "Gebruik de logo's zoals ze zijn: geen andere kleuren, niet vervormen, geen schaduwen of effecten.",
            "Laat ruimte vrij rond het logo en plaats het op een lichte achtergrond.",
            "Logo's en foto's zijn bedoeld om over GeoTapp te berichten, in print en online. Voor ander gebruik kunt u ons mailen.",
            "De beelden hebben de hoogste resolutie die wij hebben. Hebt u een grotere nodig, vraag het ons dan.",
        ],
        "contact": "Perscontact",
    },
    "sv": {
        "title": "GeoTapps pressmaterial",
        "contents": "Innehåll",
        "logos": "Logotyper: PNG med genomskinlig bakgrund, JPG på vitt, TIFF, PDF.",
        "photos": "Bilder på grundaren: JPG, PNG, TIFF.",
        "text": "Texter: företagsbeskrivning, fakta och biografi (.docx-fil).",
        "rules_h": "Så använder du materialet",
        "rules": [
            "Använd logotyperna som de är: ändra inte färger, förvräng dem inte, inga skuggor eller effekter.",
            "Lämna fritt utrymme runt logotypen och placera den på ljus bakgrund.",
            "Logotyper och bilder får användas när du skriver om GeoTapp, i tryck och på nätet. Kontakta oss för annan användning.",
            "Bilderna har den högsta upplösning vi har. Behöver du en större, fråga oss.",
        ],
        "contact": "Presskontakt",
    },
    "da": {
        "title": "GeoTapp pressekit",
        "contents": "Indhold",
        "logos": "Logoer: PNG med gennemsigtig baggrund, JPG på hvid, TIFF, PDF.",
        "photos": "Fotos af stifteren: JPG, PNG, TIFF.",
        "text": "Tekster: virksomhedsbeskrivelse, fakta og biografi (.docx-fil).",
        "rules_h": "Sådan bruger du materialet",
        "rules": [
            "Brug logoerne, som de er: ingen farveændringer, ingen forvrængning, ingen skygger eller effekter.",
            "Lad der være frit rum omkring logoet, og placer det på en lys baggrund.",
            "Logoer og fotos stilles til rådighed for at omtale GeoTapp, på tryk og online. Til andre formål skal du skrive til os.",
            "Billederne har den højeste opløsning, vi har. Hvis du har brug for en større, så spørg os.",
        ],
        "contact": "Pressekontakt",
    },
    "nb": {
        "title": "Pressemappe for GeoTapp",
        "contents": "Innhold",
        "logos": "Logoer: PNG med gjennomsiktig bakgrunn, JPG på hvitt, TIFF, PDF.",
        "photos": "Bilder av grunnleggeren: JPG, PNG, TIFF.",
        "text": "Tekster: virksomhetsbeskrivelse, fakta og biografi (.docx-fil).",
        "rules_h": "Slik bruker du materialet",
        "rules": [
            "Bruk logoene som de er: ikke endre farger, ikke forvreng dem, ingen skygger eller effekter.",
            "La det være fritt rom rundt logoen, og plasser den på lys bakgrunn.",
            "Logoer og bilder stilles til rådighet for å omtale GeoTapp, på trykk og på nett. Skriv til oss hvis du skal bruke dem til noe annet.",
            "Bildene har den høyeste oppløsningen vi har. Trenger du en større versjon, spør oss.",
        ],
        "contact": "Pressekontakt",
    },
    "ru": {
        "title": "Пресс-кит GeoTapp",
        "contents": "Содержимое",
        "logos": "Логотипы: PNG с прозрачным фоном, JPG на белом, TIFF, PDF.",
        "photos": "Фотографии основателя: JPG, PNG, TIFF.",
        "text": "Тексты: описание компании, факты и биография (файл .docx).",
        "rules_h": "Как использовать материалы",
        "rules": [
            "Используйте логотипы без изменений: не меняйте цвета, не искажайте, не добавляйте тени и эффекты.",
            "Оставляйте свободное место вокруг логотипа и размещайте его на светлом фоне.",
            "Логотипы и фотографии предоставляются для публикаций о GeoTapp в печати и онлайн. Для других целей напишите нам.",
            "Изображения даны в максимальном разрешении, которым мы располагаем. Если вам нужно более высокое разрешение, напишите нам.",
        ],
        "contact": "Контакт для прессы",
    },
}


def load_rgba(name: str) -> Image.Image:
    return Image.open((PUB / name).resolve()).convert("RGBA")


def on_white(img: Image.Image) -> Image.Image:
    bg = Image.new("RGB", img.size, (255, 255, 255))
    bg.paste(img, mask=img.split()[3])
    return bg


def encode(img: Image.Image, fmt: str) -> bytes:
    buf = io.BytesIO()
    if fmt == "png":
        img.save(buf, "PNG", optimize=True, dpi=(300, 300))
    elif fmt == "jpg":
        on_white(img).save(buf, "JPEG", quality=95, subsampling=0, dpi=(300, 300))
    elif fmt == "tiff":
        img.save(buf, "TIFF", compression="tiff_lzw", dpi=(300, 300))
    elif fmt == "pdf":
        on_white(img).save(buf, "PDF", resolution=300.0)
    else:
        raise ValueError(fmt)
    return buf.getvalue()


def photo_bytes(img_rgba: Image.Image, fmt: str) -> bytes:
    rgb = img_rgba.convert("RGB")
    buf = io.BytesIO()
    if fmt == "jpg":
        rgb.save(buf, "JPEG", quality=95, subsampling=0, dpi=(300, 300))
    elif fmt == "png":
        rgb.save(buf, "PNG", optimize=True, dpi=(300, 300))
    elif fmt == "tiff":
        rgb.save(buf, "TIFF", compression="tiff_lzw", dpi=(300, 300))
    return buf.getvalue()


def build_docx(d: dict, r: dict) -> bytes:
    doc = Document()
    cp = doc.core_properties
    cp.author = "GeoTapp"
    cp.last_modified_by = "GeoTapp"
    cp.title = r["title"]
    cp.comments = ""
    doc.add_heading(r["title"], 0)
    doc.add_heading(d["boilerplate_label"], 1)
    doc.add_paragraph(d["boilerplate_short"])
    doc.add_paragraph(d["boilerplate_long"])
    doc.add_heading(d["facts_label"], 1)
    for f in d["facts"]:
        p = doc.add_paragraph()
        run = p.add_run(f["k"] + ": ")
        run.bold = True
        p.add_run(f["v"])
    doc.add_heading(d["founder_label"], 1)
    doc.add_paragraph(d["founder_bio"])
    doc.add_heading(d["contact_label"], 1)
    doc.add_paragraph(f'{d["contact_office"]}: {d["contact_email"]}')
    for p in doc.paragraphs:
        for run in p.runs:
            run.font.size = run.font.size or Pt(11)
    buf = io.BytesIO()
    doc.save(buf)
    return buf.getvalue()


def build_readme(d: dict, r: dict) -> str:
    lines = [
        r["title"],
        "=" * len(r["title"]),
        "",
        r["contents"],
        "  01-logos/    " + r["logos"],
        "  02-photos/   " + r["photos"],
        "  03-text/     " + r["text"],
        "",
        r["rules_h"],
        *["  - " + x for x in r["rules"]],
        "",
        f'{r["contact"]}: {d["contact_email"]}',
        "https://geotapp.com",
        "",
    ]
    return "\n".join(lines)


def zip_info(name: str) -> zipfile.ZipInfo:
    # Data fissa: lo ZIP e' riproducibile e non porta tracce dell'ambiente.
    zi = zipfile.ZipInfo(name, date_time=(2026, 1, 1, 0, 0, 0))
    zi.compress_type = zipfile.ZIP_DEFLATED
    zi.external_attr = 0o644 << 16
    return zi


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", required=True)
    args = ap.parse_args()
    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)

    # Le immagini si convertono una volta sola e si riusano per tutte le lingue.
    files: dict[str, bytes] = {}
    for slug, src in LOGOS:
        img = load_rgba(src)
        for fmt in ("png", "jpg", "tiff", "pdf"):
            files[f"01-logos/{slug}-logo.{fmt}"] = encode(img, fmt)
    for slug, src in PHOTOS:
        img = load_rgba(src)
        for fmt in ("jpg", "png", "tiff"):
            files[f"02-photos/{slug}.{fmt}"] = photo_bytes(img, fmt)

    manifest = [f"build {date.today().isoformat()}"]
    for loc in LOCALES:
        d = json.loads((DICT / f"{loc}.json").read_text(encoding="utf-8"))["stampa"]
        r = README[loc]
        target = out / f"GeoTapp-Press-Kit-{loc}.zip"
        with zipfile.ZipFile(target, "w") as z:
            z.writestr(zip_info("README.txt"), build_readme(d, r).encode("utf-8"))
            z.writestr(zip_info(f"03-text/GeoTapp-press-text-{loc}.docx"), build_docx(d, r))
            for name in sorted(files):
                z.writestr(zip_info(name), files[name])
        manifest.append(f"{target.name}  {target.stat().st_size // 1024} KB")
    (out / "MANIFEST.txt").write_text("\n".join(manifest) + "\n", encoding="utf-8")
    print("\n".join(manifest))


if __name__ == "__main__":
    main()
