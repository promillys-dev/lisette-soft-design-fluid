import type { Metadata } from "next";

export const NOM = "Lisette Claudia TAME NJAMBE";

/**
 * Adresse publique du site, sans barre finale : elle fait les liens absolus du plan du site, de
 * robots.txt, des adresses canoniques et des aperçus de partage. SITE_URL la fixe (domaine
 * définitif) ; à défaut, Vercel fournit le domaine de production du projet (le plus court des
 * domaines personnalisés, sinon le *.vercel.app).
 */
export const SITE = (
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://lisetteclaudiatame.com")
).replace(/\/$/, "");

/**
 * Icônes du site, produites par scripts/generer-images.py. Elles sont servies depuis public/ pour
 * que leurs adresses ne changent pas d'un déploiement à l'autre : Google exige une adresse stable
 * pour afficher l'icône dans ses résultats, et il ne lit pas le SVG (d'où l'ICO et le PNG 192 px).
 */
export const ICONES: Metadata["icons"] = {
  icon: [
    { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
    { url: "/icon.svg", type: "image/svg+xml" },
    { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
  ],
  apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
};

/** Image des liens partagés : public/partage.jpg, produite par scripts/generer-images.py. */
const PARTAGE = {
  url: "/partage.jpg",
  width: 1200,
  height: 630,
  alt: `${NOM}, site officiel : industrielle, fondatrice d’Africa Processing Company SA et de Meta Invest SA, Chevalier de l’Ordre de la Valeur.`,
};

/**
 * Métadonnées d'une page : titre, description, adresse canonique et aperçu de partage (LinkedIn,
 * Facebook, WhatsApp, X). L'image est déclarée ici, sur chaque page : celle d'un fichier
 * opengraph-image du dossier app serait écrasée par l'openGraph propre à la page.
 */
export function metadonnees({
  titre,
  description,
  chemin,
}: {
  titre: string;
  description: string;
  chemin: string;
}): Metadata {
  return {
    title: titre,
    description,
    alternates: { canonical: chemin },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: NOM,
      title: titre,
      description,
      url: chemin,
      images: [PARTAGE],
    },
    twitter: { card: "summary_large_image", title: titre, description, images: [PARTAGE] },
  };
}
