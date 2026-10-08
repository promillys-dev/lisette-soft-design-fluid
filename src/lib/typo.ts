/**
 * Micro-typographie française, appliquée aux textes des pages intérieures (src/content) :
 * les documents du client sont saisis avec des espaces ordinaires, ce qui laisse un « : » ou
 * un « ? » partir seul à la ligne et coupe « 5 000 » ou « 66 m² » en deux.
 */
const INSECABLE = " ";
const FINE = " ";
const MOIS = "janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre";

export function typo(texte: string): string {
  return texte
    .replace(/ ([;?!])/g, `${FINE}$1`)
    .replace(/ :/g, `${INSECABLE}:`)
    .replace(/« /g, `«${INSECABLE}`)
    .replace(/ »/g, `${INSECABLE}»`)
    .replace(/(\d) (\d{3})(?!\d)/g, `$1${FINE}$2`)
    .replace(/(\d) (m²|%|mots\b|tonnes\b)/g, `$1${INSECABLE}$2`)
    .replace(new RegExp(`(\\d) (${MOIS})\\b`, "g"), `$1${INSECABLE}$2`)
    .replace(new RegExp(`\\b(${MOIS}) (\\d{4})`, "gi"), `$1${INSECABLE}$2`);
}

/** Clés qui portent des identifiants (adresses, ancres, variantes) et non du texte à lire. */
const IDENTIFIANTS = new Set([
  ...["slug", "id", "type", "page", "ancre", "style", "fond", "icone", "fichier", "site", "langue"],
  // Vidéos de LCTV (lib/lctv.ts) : adresses et valeurs techniques.
  ...["url", "lecteur", "vignette", "source", "date", "duree"],
]);

/** Applique `typo` à tous les textes d'un contenu, en profondeur. */
export function typographier<T>(valeur: T): T {
  if (typeof valeur === "string") return typo(valeur) as T;
  if (Array.isArray(valeur)) return valeur.map(typographier) as T;
  if (valeur && typeof valeur === "object") {
    return Object.fromEntries(
      Object.entries(valeur).map(([cle, v]) => [cle, IDENTIFIANTS.has(cle) ? v : typographier(v)]),
    ) as T;
  }
  return valeur;
}
