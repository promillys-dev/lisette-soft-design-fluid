"""
Images de présentation du site, générées une fois puis versionnées :

  public/icon.svg              icône de l'onglet : un galet brun, un « L » ivoire, le point doré
  public/favicon.ico           la même, en 16, 32 et 48 px (navigateurs, Google)
  public/icon-192.png          la même, en 192 px (Google, qui ne lit pas le SVG ; Android)
  public/apple-touch-icon.png  écran d'accueil iOS (180 px, fond plein)
  public/partage.jpg           aperçu des liens partagés (LinkedIn, Facebook, WhatsApp, X) : 1200 × 630

Toutes sont déclarées par src/lib/site.ts. Elles restent dans public/ pour garder des adresses fixes
d'un déploiement à l'autre, comme Google le demande pour l'icône des résultats de recherche.

Lancer après un `npm run dev` ou un `npm run build`, qui téléchargent les polices du site
(Cormorant Garamond, Mulish) dans .next ; le script les y retrouve par leur nom :

  python scripts/generer-images.py

Dépendances : Pillow, fontTools et brotli (pip install pillow fonttools brotli).
"""

import glob
import math
import os
import tempfile
from pathlib import Path

from fontTools.pens.basePen import BasePen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from PIL import Image, ImageDraw, ImageFont

RACINE = Path(__file__).resolve().parent.parent
SORTIE = RACINE / "public"

# Palette « Ivoire éditorial » (src/styles/base.css)
IVOIRE = "#f7f3ea"
SABLE = "#efe6d3"
OR = "#c9a84c"
BRONZE = "#8b6914"
BRONZE_F = "#6e520f"
BRUN = "#2c1a0e"
ENCRE = "#4a3a2a"


# ---------- Polices -------------------------------------------------------------------------


def police(famille: str, italique: bool = False) -> TTFont:
    """La police variable du site (sous-ensemble latin, celui qui contient « é »)."""
    for chemin in glob.glob(str(RACINE / ".next" / "**" / "media" / "*.woff2"), recursive=True):
        fonte = TTFont(chemin)
        nom = fonte["name"]
        if not (nom.getDebugName(1) or "").startswith(famille):
            continue
        if ((nom.getDebugName(2) or "") == "Italic") != italique:
            continue
        if 0xE9 in fonte.getBestCmap():
            return fonte
    raise SystemExit(f"Police {famille} introuvable dans .next : lancer d'abord npm run dev ou npm run build.")


DOSSIER = Path(tempfile.mkdtemp(prefix="polices-"))


def fichier(fonte: TTFont, nom: str) -> str:
    """Copie TrueType de la police, lisible par Pillow."""
    chemin = DOSSIER / f"{nom}.ttf"
    fonte.flavor = None
    fonte.save(chemin)
    return str(chemin)


CORMORANT = police("Cormorant Garamond")
CORMORANT_ITALIQUE = police("Cormorant Garamond", italique=True)
MULISH = police("Mulish")
TTF = {
    "cormorant": fichier(CORMORANT, "cormorant"),
    "cormorant-italique": fichier(CORMORANT_ITALIQUE, "cormorant-italique"),
    "mulish": fichier(MULISH, "mulish"),
}


def pillow(nom: str, taille: float, graisse: int) -> ImageFont.FreeTypeFont:
    fonte = ImageFont.truetype(TTF[nom], round(taille))
    fonte.set_variation_by_axes([graisse])
    return fonte


# ---------- Formes --------------------------------------------------------------------------


def galet(cx, cy, r, ecarts, rotation=0.0, etire=(1.0, 1.0)):
    """Points d'une forme douce et asymétrique : un rayon par direction, légèrement varié."""
    n = len(ecarts)
    return [
        (
            cx + math.cos(rotation + 2 * math.pi * i / n) * r * e * etire[0],
            cy + math.sin(rotation + 2 * math.pi * i / n) * r * e * etire[1],
        )
        for i, e in enumerate(ecarts)
    ]


def beziers(points):
    """Catmull-Rom fermé → courbes de Bézier cubiques, comme scripts/generer-blobs.mjs."""
    n = len(points)
    segments = []
    for i in range(n):
        p0, p1, p2, p3 = points[i - 1], points[i], points[(i + 1) % n], points[(i + 2) % n]
        c1 = (p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6)
        c2 = (p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6)
        segments.append((p1, c1, c2, p2))
    return segments


def chemin_svg(segments):
    f = lambda p: f"{p[0]:.2f} {p[1]:.2f}"
    corps = " ".join(f"C{f(c1)} {f(c2)} {f(p2)}" for _, c1, c2, p2 in segments)
    return f"M{f(segments[0][0])} {corps}Z"


def polygone(segments, pas=32):
    points = []
    for p1, c1, c2, p2 in segments:
        for k in range(pas):
            t = k / pas
            u = 1 - t
            points.append(
                (
                    u**3 * p1[0] + 3 * u * u * t * c1[0] + 3 * u * t * t * c2[0] + t**3 * p2[0],
                    u**3 * p1[1] + 3 * u * u * t * c1[1] + 3 * u * t * t * c2[1] + t**3 * p2[1],
                )
            )
    return points


# ---------- Monogramme : « L » de Cormorant Garamond et point doré ---------------------------


class Aplatir(BasePen):
    """Contours d'un glyphe en polygones (courbes échantillonnées), pour le dessin en pixels."""

    def __init__(self, glyphes, pas=12):
        super().__init__(glyphes)
        self.contours, self.pas = [], pas

    def _moveTo(self, p):
        self.contours.append([p])

    def _lineTo(self, p):
        self.contours[-1].append(p)

    def _curveToOne(self, c1, c2, p):
        p0 = self.contours[-1][-1]
        for k in range(1, self.pas + 1):
            t = k / self.pas
            u = 1 - t
            self.contours[-1].append(
                (
                    u**3 * p0[0] + 3 * u * u * t * c1[0] + 3 * u * t * t * c2[0] + t**3 * p[0],
                    u**3 * p0[1] + 3 * u * u * t * c1[1] + 3 * u * t * t * c2[1] + t**3 * p[1],
                )
            )

    def _qCurveToOne(self, c, p):
        p0 = self.contours[-1][-1]
        for k in range(1, self.pas + 1):
            t = k / self.pas
            u = 1 - t
            self.contours[-1].append(
                (u * u * p0[0] + 2 * u * t * c[0] + t * t * p[0], u * u * p0[1] + 2 * u * t * c[1] + t * t * p[1])
            )

    def _closePath(self):
        pass


L_FONTE = instantiateVariableFont(CORMORANT, {"wght": 600})
GLYPHES = L_FONTE.getGlyphSet()
L_GLYPHE = GLYPHES[L_FONTE.getBestCmap()[ord("L")]]
L_BORNES = BoundsPen(GLYPHES)
L_GLYPHE.draw(L_BORNES)
EM = L_FONTE["head"].unitsPerEm


def monogramme(cx, cy, hauteur):
    """Place le « L » (hauteur de capitale donnée) et le point doré, centrés ensemble sur (cx, cy).
    Rend la transformation du glyphe et le cercle du point."""
    x0, y0, x1, y1 = L_BORNES.bounds
    s = hauteur / (y1 - y0)
    rayon = hauteur * 0.115
    ecart = hauteur * 0.07
    largeur = (x1 - x0) * s + ecart + 2 * rayon
    gauche = cx - largeur / 2
    base = cy + hauteur / 2
    transformation = (s, 0, 0, -s, gauche - x0 * s, base + y0 * s)
    point = (gauche + (x1 - x0) * s + ecart + rayon, base - rayon)
    return transformation, point, rayon


def l_svg(transformation):
    pen = SVGPathPen(GLYPHES, ntos=lambda v: f"{v:.2f}".rstrip("0").rstrip("."))
    L_GLYPHE.draw(TransformPen(pen, transformation))
    return pen.getCommands()


def l_pixels(dessin, transformation, couleur):
    pen = Aplatir(GLYPHES)
    L_GLYPHE.draw(TransformPen(pen, transformation))
    for contour in pen.contours:
        dessin.polygon(contour, fill=couleur)


# ---------- Icônes ------------------------------------------------------------------------

ICONE = beziers(galet(32, 32, 30, [1, 0.93, 1.03, 0.9, 1.01, 0.94, 1.04, 0.91], rotation=-0.35))


def icone_svg():
    transformation, (px, py), rayon = monogramme(31, 32.5, 29)
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">'
        f'<path d="{chemin_svg(ICONE)}" fill="{BRUN}"/>'
        f'<path d="{l_svg(transformation)}" fill="{IVOIRE}"/>'
        f'<circle cx="{px:.2f}" cy="{py:.2f}" r="{rayon:.2f}" fill="{OR}"/>'
        "</svg>\n"
    )


def icone_pixels(cote, plein=False):
    """Icône dessinée à 8× puis réduite (contours lissés)."""
    k = 8 * cote / 64
    image = Image.new("RGBA", (round(64 * k), round(64 * k)), BRUN if plein else (0, 0, 0, 0))
    dessin = ImageDraw.Draw(image)
    if not plein:
        dessin.polygon([(x * k, y * k) for x, y in polygone(ICONE)], fill=BRUN)
    # Fond plein (iOS arrondit lui-même les angles) : le monogramme peut occuper plus de place.
    transformation, (px, py), rayon = monogramme(31, 32.5, 33 if plein else 29)
    a, b, c, d, e, f = transformation
    l_pixels(dessin, (a * k, b, c, d * k, e * k, f * k), IVOIRE)
    dessin.ellipse([(px - rayon) * k, (py - rayon) * k, (px + rayon) * k, (py + rayon) * k], fill=OR)
    return image.resize((cote, cote), Image.LANCZOS)


# ---------- Image de partage -----------------------------------------------------------------

LARGEUR, HAUTEUR, X = 1200, 630, 2  # dessinée à 2×, puis réduite


def texte_espace(dessin, xy, texte, fonte, couleur, espacement):
    """Texte en capitales espacées (l'espacement des sur-titres du site)."""
    x, y = xy
    for lettre in texte:
        dessin.text((x, y), lettre, font=fonte, fill=couleur, anchor="ls")
        x += fonte.getlength(lettre) + espacement
    return x


def lignes(texte, fonte, largeur):
    mots, resultat, ligne = texte.split(" "), [], ""
    for mot in mots:
        essai = f"{ligne} {mot}".strip()
        if fonte.getlength(essai) <= largeur or not ligne:
            ligne = essai
        else:
            resultat.append(ligne)
            ligne = mot
    return resultat + [ligne]


def partage():
    image = Image.new("RGB", (LARGEUR * X, HAUTEUR * X), IVOIRE)
    dessin = ImageDraw.Draw(image)

    # Nappe sable derrière le portrait, débordant du cadre
    nappe = galet(930, 300, 360, [1, 0.9, 1.05, 0.93, 1.02, 0.88, 1.04, 0.95], rotation=0.4)
    dessin.polygon([(x * X, y * X) for x, y in polygone(beziers(nappe))], fill=SABLE)

    # Portrait découpé en galet, cerclé d'un anneau doré décalé
    forme = galet(900, 318, 262, [1, 0.95, 1.02, 0.92, 1, 0.96, 1.03, 0.93], rotation=-0.25, etire=(0.84, 1.06))
    contour = polygone(beziers(forme))
    xs, ys = [p[0] for p in contour], [p[1] for p in contour]
    boite = (min(xs), min(ys), max(xs), max(ys))
    photo = Image.open(SORTIE / "images" / "portrait-lctn.jpg").convert("RGB")
    l, h = (boite[2] - boite[0]) * X, (boite[3] - boite[1]) * X
    echelle = max(l / photo.width, h / photo.height)
    photo = photo.resize((round(photo.width * echelle), round(photo.height * echelle)), Image.LANCZOS)
    # Foyer de la photo (lib/photos.ts : 50 % 15 %) : le visage reste dans la découpe.
    gauche = (photo.width - l) * 0.5
    haut = (photo.height - h) * 0.15
    photo = photo.crop((round(gauche), round(haut), round(gauche + l), round(haut + h)))
    masque = Image.new("L", photo.size, 0)
    ImageDraw.Draw(masque).polygon([((x - boite[0]) * X, (y - boite[1]) * X) for x, y in contour], fill=255)
    image.paste(photo, (round(boite[0] * X), round(boite[1] * X)), masque)

    anneau = galet(888, 306, 286, [1, 0.93, 1.04, 0.95, 0.99, 0.94, 1.05, 0.9], rotation=0.6, etire=(0.84, 1.06))
    trace = [(x * X, y * X) for x, y in polygone(beziers(anneau))]
    dessin.line(trace + trace[:1], fill=OR, width=2 * X, joint="curve")

    # Texte, à gauche, centré verticalement
    gauche, largeur = 84, 540
    sur = pillow("mulish", 18 * X, 700)
    taille = 92
    while True:
        nom = pillow("cormorant", taille * X, 500)
        if max(nom.getlength("Lisette Claudia"), nom.getlength("TAME NJAMBE.")) <= largeur * X:
            break
        taille -= 2
    corps = pillow("mulish", 23 * X, 500)
    italique = pillow("cormorant-italique", 30 * X, 500)
    sous_titre = lignes(
        "Industrielle, fondatrice d’Africa Processing Company SA et de Meta Invest SA", corps, 500 * X
    )

    interligne_nom = taille * 1.0
    blocs = 18 + 30 + taille * 0.78 + interligne_nom + 34 + 2 + 36 + len(sous_titre) * 34 + 18 + 30
    y = (HAUTEUR - blocs) / 2 + 18

    texte_espace(dessin, (gauche * X, y * X), "SITE OFFICIEL", sur, BRONZE_F, 0.24 * 18 * X)
    y += 30 + taille * 0.78
    dessin.text((gauche * X, y * X), "Lisette Claudia", font=nom, fill=BRUN, anchor="ls")
    y += interligne_nom
    fin = dessin.textlength("TAME NJAMBE", font=nom)
    dessin.text((gauche * X, y * X), "TAME NJAMBE", font=nom, fill=BRUN, anchor="ls")
    dessin.text((gauche * X + fin, y * X), ".", font=nom, fill=BRONZE, anchor="ls")
    y += 34
    dessin.rectangle([gauche * X, y * X, (gauche + 64) * X, (y + 2) * X], fill=OR)
    y += 2 + 36 + 4
    for ligne in sous_titre:
        dessin.text((gauche * X, y * X), ligne, font=corps, fill=ENCRE, anchor="ls")
        y += 34
    y += 18
    dessin.text((gauche * X, y * X), "Chevalier de l’Ordre de la Valeur", font=italique, fill=BRONZE, anchor="ls")

    return image.resize((LARGEUR, HAUTEUR), Image.LANCZOS)


# ---------- Écriture --------------------------------------------------------------------------

(SORTIE / "icon.svg").write_text(icone_svg(), encoding="utf-8", newline="\n")
icone_pixels(256).save(SORTIE / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
icone_pixels(192).save(SORTIE / "icon-192.png", optimize=True)
icone_pixels(180, plein=True).convert("RGB").save(SORTIE / "apple-touch-icon.png", optimize=True)
partage().save(SORTIE / "partage.jpg", quality=86, optimize=True, progressive=True)
for nom in ("icon.svg", "favicon.ico", "icon-192.png", "apple-touch-icon.png", "partage.jpg"):
    print(f"public/{nom} : {os.path.getsize(SORTIE / nom) // 1024 or 1} Ko")
