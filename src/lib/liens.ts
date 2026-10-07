import type { Cible } from "@/lib/blocs";
import type { Forme } from "@/lib/formes";
import { contact, menu } from "@/lib/menu";

/**
 * La proposition retenue : elle est servie à la racine du site (/, /mon-parcours…) et c'est la
 * seule dont les pages intérieures existent. L'autre est rangée dans src/app/_propositions.
 */
export const PUBLIEE: Forme = "fluide";

/**
 * Adresse d'une cible : /mon-parcours#racines pour la proposition publiée. Une proposition sans
 * pages intérieures renvoie au bloc de l'accueil qui annonce la page (lib/menu.ts), sinon à un
 * lien neutre (« # »).
 */
export function lien(forme: Forme, cible?: Cible): string {
  if (!cible) return "#";
  if (forme === PUBLIEE) {
    return `${cible.page ? `/${cible.page}` : "/"}${cible.ancre ? `#${cible.ancre}` : ""}`;
  }
  if (!cible.page) return cible.ancre ? `#${cible.ancre}` : `/${forme}`;
  const bloc = [...menu, contact].find((item) => item.slug === cible.page)?.bloc;
  return bloc ? `#${bloc}` : "#";
}
