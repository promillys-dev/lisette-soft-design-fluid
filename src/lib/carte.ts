/**
 * Carte du Cameroun (bloc 6) : contour simplifié et position des sites.
 * Projection équirectangulaire, 44 unités par degré, origine 8,1° E / 13,15° N.
 * Zone de dessin : viewBox « -66 -6 484 529 » (marges pour les étiquettes).
 */
export const VIEWBOX = "-66 -6 484 529";

export const CONTOUR =
  "M218.9,478.8 L213.5,476.4 L187.4,482.1 L160.7,476.2 L139.8,479.1 L68.2,478.1 L74.6,443.4 L57.4,414.3 L37.3,406.8 L28.4,387.1 L17.1,380.8 L17.6,368.6 L28.9,337.5 L49.9,295.0 L62.6,294.6 L88.8,268.9 L105.5,268.2 L130.2,286.2 L160.4,271.4 L164.5,253.1 L174.4,235.4 L181.2,213.1 L204.8,195.0 L213.6,164.2 L223.0,154.4 L229.2,131.5 L240.8,103.5 L277.9,69.4 L280.2,54.8 L285.0,46.8 L267.6,29.3 L269.0,15.3 L281.4,12.8 L298.9,41.0 L301.8,70.2 L300.2,99.4 L324.2,139.4 L299.6,138.9 L287.2,142.1 L267.1,137.7 L257.6,158.4 L283.6,184.1 L302.7,191.6 L308.9,209.8 L322.8,240.1 L315.9,252.0 L293.8,296.6 L283.2,304.6 L279.8,338.7 L284.2,357.3 L280.6,370.4 L301.4,393.3 L305.2,409.1 L321.4,431.8 L341.6,446.0 L343.5,466.1 L348.2,478.8 L345.0,502.6 L310.0,492.2 L274.5,480.6 Z";

/** Cap 2036 : une usine par région. Repères indicatifs sur les six régions restantes. */
export const CIBLES_2036: [number, number][] = [
  [70.4, 400.4],
  [50.2, 396],
  [90.2, 316.4],
  [134.2, 451],
  [241.1, 256.5],
  [233.2, 169.4],
];

export type Site = {
  id: string;
  nom: string;
  region: string;
  detail: string;
  enProjet?: boolean;
  /** Position du repère sur la carte. */
  x: number;
  y: number;
  /** Ligne de rappel vers l'étiquette, placée hors du territoire. */
  rappel: string;
  etiquette: { x: number; y: number; ancre: "start" | "end" };
};

/** La position de Ngolambélé est approximative : à confirmer avec la cliente. */
export const sites: Site[] = [
  {
    id: "mbankomo",
    nom: "Mbankomo",
    region: "Centre",
    detail: "Région du Centre · Cacao · Usine CA’OLY",
    x: 144.8,
    y: 412.3,
    rappel: "144.8,412.3 118,452 30,452",
    etiquette: { x: 24, y: 450, ancre: "end" },
  },
  {
    id: "ngolambele",
    nom: "Ngolambélé",
    region: "Est",
    detail: "Région de l’Est · Cacao · Africa Processing Company SA",
    x: 248.6,
    y: 387.2,
    rappel: "248.6,387.2 334,387.2",
    etiquette: { x: 340, y: 385, ancre: "start" },
  },
  {
    id: "bangou",
    nom: "Bangou",
    region: "Ouest",
    detail: "Région de l’Ouest · Agroalimentaire · Usine DENKY",
    x: 100.3,
    y: 349.8,
    rappel: "100.3,349.8 6,349.8",
    etiquette: { x: 0, y: 347.5, ancre: "end" },
  },
  {
    id: "maroua",
    nom: "Maroua",
    region: "Extrême-Nord",
    detail: "Région de l’Extrême-Nord · Arachide",
    enProjet: true,
    x: 273.7,
    y: 112.6,
    rappel: "273.7,112.6 204,112.6",
    etiquette: { x: 198, y: 110.5, ancre: "end" },
  },
];
