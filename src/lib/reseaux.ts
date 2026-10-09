import type { IconName } from "@/components/ui/icones";
import type { Cible } from "@/lib/blocs";

/**
 * Comptes officiels sur les réseaux sociaux : une seule liste pour le pied de page, la page
 * Contact et la page LCTV. Un réseau n'y figure qu'une fois son adresse fournie : YouTube (LCTV)
 * et X sont attendus, les ajouter ici suffit à les faire apparaître.
 */
export const reseaux = [
  {
    id: "linkedin",
    nom: "LinkedIn",
    icone: "linkedin",
    url: "https://www.linkedin.com/in/lisette-claudia-tame-51857113a",
  },
  { id: "facebook", nom: "Facebook", icone: "facebook", url: "https://www.facebook.com/lisetteclaudiatame" },
  { id: "instagram", nom: "Instagram", icone: "instagram", url: "https://www.instagram.com/lisette_claudia_tame/" },
  { id: "tiktok", nom: "TikTok", icone: "tiktok", url: "https://www.tiktok.com/discover/lisette-claudia-tame" },
] as const satisfies readonly { id: string; nom: string; icone: IconName; url: string }[];

export type ReseauId = (typeof reseaux)[number]["id"];

/** Destination d'un bouton qui mène à l'un des comptes. */
export function versReseau(id: ReseauId): Cible {
  return { url: reseaux.find((reseau) => reseau.id === id)?.url };
}
