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
    : "https://lisette-soft-design-fluid.vercel.app")
).replace(/\/$/, "");

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
