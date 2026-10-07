import { blobs, decoupes, type NomBlob } from "@/lib/blobs";
import { cn } from "@/lib/utils";

type Props = {
  /** Famille de formes (src/lib/blobs.ts). */
  nom: NomBlob;
  /** État de départ parmi les trois de la famille. */
  etat?: 0 | 1 | 2;
  /** Dessiné au trait (filet d'or) plutôt qu'en aplat. */
  trait?: boolean;
  /** Le tracé passe lentement d'un état à l'autre (keyframes de src/styles/blobs.css). */
  morph?: boolean;
  /** Décalage au défilement, en part de la distance au centre de l'écran. */
  parallaxe?: number;
  className?: string;
};

/**
 * Blob de décor : un SVG posé en fond absolu (position: absolute; z-index: -1, voir base.css),
 * derrière le contenu de la bande qui le porte. La classe donne sa taille, sa place et sa teinte.
 */
export function Blob({ nom, etat = 0, trait, morph, parallaxe, className }: Props) {
  return (
    <svg
      className={cn("blob", trait && "blob--trait", className)}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      data-morph={morph ? nom : undefined}
      data-parallax={parallaxe}
    >
      <path d={blobs[nom][etat]} />
    </svg>
  );
}

/**
 * Découpes des photos, rendues une fois par page : chaque <clipPath> est appelé depuis le CSS
 * par clip-path: url(#decoupe-…). En coordonnées de boîte (0 à 1), la découpe suit la taille
 * de la photo.
 */
export function Decoupes() {
  return (
    <svg className="planche" width="0" height="0" aria-hidden="true" focusable="false">
      <defs>
        {Object.entries(decoupes).map(([nom, d]) => (
          <clipPath id={`decoupe-${nom}`} clipPathUnits="objectBoundingBox" key={nom}>
            <path d={d} />
          </clipPath>
        ))}
      </defs>
    </svg>
  );
}
