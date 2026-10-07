/**
 * Les deux propositions dessinées pour la page d'accueil, dans la direction « Ivoire éditorial » :
 * même contenu, même palette, mêmes blobs, seule change la place donnée au mouvement.
 * - `fluide` : retenue, c'est le site (src/app/(fluide), lib/liens.ts). Tout respire : portrait
 *   qui se déforme, nappes qui dérivent, houle entre les bandes.
 * - `formes` : rangée hors routes (src/app/_propositions). Les mêmes formes, posées : rives fixes
 *   à filet d'or, portrait en galet, un seul blob animé.
 * Chacune a sa feuille src/styles/forme-*.css ; les composants reçoivent `forme` pour choisir le
 * dessin des séparations et ce qui bouge.
 */
export type Forme = "fluide" | "formes";
