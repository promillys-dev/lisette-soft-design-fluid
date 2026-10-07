/**
 * Photothèque du site : fichiers de public/images, produits par scripts/preparer-photos.py à
 * partir du dossier Image-Lisette fourni par la cliente (sauf `portrait` et `bureau`).
 * `foyer` est le point d'intérêt de l'image (object-position) : il garde les visages dans le
 * cadre quel que soit le format de celui-ci (portrait d'en-tête, carré de galerie, vignette 16/9).
 */
export const photos = {
  portrait: { src: "/images/portrait-lctn.jpg", width: 788, height: 1044, foyer: "50% 15%" },
  bureau: { src: "/images/bureau-caoly.jpg", width: 819, height: 1024, foyer: "50% 15%" },
  tenue: { src: "/images/tenue-traditionnelle.jpg", width: 960, height: 951, foyer: "48% 12%" },
  sourire: { src: "/images/sourire.jpg", width: 1045, height: 1049, foyer: "58% 30%" },
  chantier: { src: "/images/chantier.jpg", width: 1280, height: 1600, foyer: "50% 4%" },
  interview: { src: "/images/interview.jpg", width: 1600, height: 1200, foyer: "37% 12%" },
  ceremonie: { src: "/images/ceremonie.jpg", width: 1600, height: 1066, foyer: "44% 15%" },
  visite: { src: "/images/visite-site.jpg", width: 900, height: 1600, foyer: "50% 30%" },
  stand: { src: "/images/stand-caoly.jpg", width: 900, height: 1600, foyer: "50% 8%" },
  plateau: { src: "/images/plateau-tv.jpg", width: 900, height: 1600, foyer: "50% 40%" },
  audience: { src: "/images/audience.jpg", width: 900, height: 1600, foyer: "50% 62%" },
  discours: { src: "/images/discours.jpg", width: 630, height: 472, foyer: "60% 30%" },
  denky: { src: "/images/usine-denky.jpg", width: 900, height: 1600, foyer: "45% 16%" },
  reunion: { src: "/images/reunion-denky.jpg", width: 1200, height: 1600, foyer: "55% 60%" },
  production: { src: "/images/unite-production.jpg", width: 1600, height: 1195, foyer: "50% 50%" },
} as const;

export type PhotoId = keyof typeof photos;
