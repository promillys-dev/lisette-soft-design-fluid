import type { IconName } from "@/components/ui/icones";
import type { Cible } from "@/lib/blocs";

/**
 * Comptes officiels sur les réseaux sociaux : une seule liste pour le pied de page, la page
 * Contact et la page LCTV. Un réseau n'y figure qu'une fois son adresse fournie : YouTube (LCTV)
 * et X sont attendus, les ajouter ici suffit à les faire apparaître.
 * `profil` : l'adresse est celle de son compte (et non une page de recherche) ; seuls ces comptes
 * sont déclarés aux moteurs de recherche comme étant les siens (données structurées de l'accueil).
 */
export const reseaux = [
  {
    id: "linkedin",
    nom: "LinkedIn",
    icone: "linkedin",
    url: "https://www.linkedin.com/in/lisette-claudia-tame-51857113a",
    profil: true,
  },
  { id: "facebook", nom: "Facebook", icone: "facebook", url: "https://www.facebook.com/lisetteclaudiatame", profil: true },
  {
    id: "instagram",
    nom: "Instagram",
    icone: "instagram",
    url: "https://www.instagram.com/lisette_claudia_tame/",
    profil: true,
  },
  // Page de recherche TikTok, en attendant l'adresse du compte (tiktok.com/@…).
  { id: "tiktok", nom: "TikTok", icone: "tiktok", url: "https://www.tiktok.com/discover/lisette-claudia-tame", profil: false },
] as const satisfies readonly { id: string; nom: string; icone: IconName; url: string; profil: boolean }[];

export type ReseauId = (typeof reseaux)[number]["id"];

/** Destination d'un bouton qui mène à l'un des comptes. */
export function versReseau(id: ReseauId): Cible {
  return { url: reseaux.find((reseau) => reseau.id === id)?.url };
}
