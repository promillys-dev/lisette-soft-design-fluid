import type { Page } from "@/lib/blocs";
import { typographier } from "@/lib/typo";

/**
 * Vidéos de LCTV, gérées dans WordPress par le plugin « lisette-core » et lues par sa route REST
 * `lisette/v1`. L'adresse de l'API vient de la variable d'environnement LISETTE_API_URL
 * (ex. http://localhost/simplyprint/wp-json/lisette/v1). Quand l'API est réservée aux sites
 * connectés (Lisette → Réglages dans WordPress), la clé du site va dans LISETTE_API_KEY.
 *
 * Sans variable, sans réponse ou sans vidéo publiée, le site garde l'habillage d'attente de la
 * chaîne : il ne casse jamais parce que WordPress est injoignable.
 */
export type Video = {
  id: number;
  titre: string;
  description: string;
  /** Média ou chaîne qui a produit la vidéo. */
  auteur: string;
  url: string;
  source: "youtube" | "vimeo" | "facebook" | "fichier";
  /** Adresse du lecteur à intégrer (iframe), ou du fichier pour `source: "fichier"`. */
  lecteur: string;
  vignette: string;
  programme: { slug: string; titre: string } | null;
  /** Date de la vidéo, AAAA-MM-JJ. */
  date: string | null;
  duree: string;
  aLaUne: boolean;
};

export type Lctv = {
  une: Video | null;
  programmes: { slug: string; titre: string; videos: Video[] }[];
  videos: Video[];
  total: number;
};

/** Durée de vie du cache, en secondes : une vidéo publiée apparaît sur le site dans la minute. */
const FRAICHEUR = 60;

export async function chargerLctv(): Promise<Lctv | null> {
  const api = process.env.LISETTE_API_URL;
  if (!api) return null;
  try {
    const cle = process.env.LISETTE_API_KEY;
    const reponse = await fetch(`${api.replace(/\/$/, "")}/lctv`, {
      headers: cle ? { "X-Lisette-Key": cle } : undefined,
      next: { revalidate: FRAICHEUR },
      signal: AbortSignal.timeout(4000),
    });
    if (!reponse.ok) return null;
    const lctv = (await reponse.json()) as Lctv;
    // Mêmes espaces insécables que le reste du site (titres et descriptions saisis dans WordPress).
    return lctv.total > 0 ? typographier(lctv) : null;
  } catch {
    return null;
  }
}

const DATE = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" });

/** « NBIKO TV · 17 juin 2026 · 16:43 » : les repères d'une vidéo, ceux qu'elle a. */
export function reperes(video: Video): string {
  const date = video.date ? DATE.format(new Date(`${video.date}T00:00:00`)) : "";
  return [video.auteur, date, video.duree].filter(Boolean).join(" · ");
}

/** Place les vidéos publiées dans les blocs de la page LCTV (à la une, programmes). */
export function avecVideos(page: Page, lctv: Lctv | null): Page {
  if (!lctv) return page;
  return {
    ...page,
    blocs: page.blocs.map((bloc) => {
      if (bloc.type === "video-une" && lctv.une) {
        const une = lctv.une;
        return { ...bloc, video: une, titre: une.titre, meta: reperes(une), resume: une.description || bloc.resume };
      }
      if (bloc.type === "programmes") {
        return {
          ...bloc,
          items: bloc.items.map((item, i) => ({
            ...item,
            // Même intitulé des deux côtés ; à défaut, même rang (les deux listes suivent le document client).
            videos: (lctv.programmes.find((p) => p.titre === item.titre) ?? lctv.programmes[i])?.videos,
          })),
        };
      }
      return bloc;
    }),
  };
}
