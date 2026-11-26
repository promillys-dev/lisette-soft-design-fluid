import type { MetadataRoute } from "next";
import { pages } from "@/content";
import { documents } from "@/lib/documents";
import { contact, menu } from "@/lib/menu";
import { SITE } from "@/lib/site";

/** Pages qui changent le plus souvent : de nouvelles tribunes et vidéos y paraissent. */
const VIVANTES = new Set(["tribunes", "lctv", "salle-de-presse"]);

/**
 * /sitemap.xml : l'accueil, les pages du menu, les pages légales, puis les tribunes en PDF, pour
 * que les moteurs les indexent aussi. Pas de date de modification : une date fausse (celle du
 * déploiement) est ignorée par Google, et aucune date juste n'est connue ici.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const duMenu = new Set([...menu, contact].map((item) => item.slug));
  return [
    { url: `${SITE}/`, changeFrequency: "weekly", priority: 1 },
    ...Object.keys(pages).map((slug) => ({
      url: `${SITE}/${slug}`,
      changeFrequency: VIVANTES.has(slug) ? ("weekly" as const) : duMenu.has(slug) ? ("monthly" as const) : ("yearly" as const),
      priority: duMenu.has(slug) ? 0.8 : 0.3,
    })),
    ...Object.values(documents).map((chemin) => ({
      url: `${SITE}${chemin}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
