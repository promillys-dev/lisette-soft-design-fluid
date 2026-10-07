import Image from "next/image";
import { Blob } from "@/components/ui/blob";
import { Icon } from "@/components/ui/icones";
import type { Forme } from "@/lib/formes";
import { type PhotoId, photos } from "@/lib/photos";

/**
 * Photo de la photothèque en fond de tuile vidéo, en attendant la vraie image de la vidéo.
 * Sans `image`, la tuile garde l'habillage de la chaîne.
 */
export function Illustration({ image, sizes }: { image?: PhotoId; sizes: string }) {
  if (!image) return null;
  const fichier = photos[image];
  return <Image src={fichier.src} alt="" fill sizes={sizes} style={{ objectPosition: fichier.foyer }} />;
}

/** Bouton de lecture : un petit blob d'or (il se déforme dans la proposition fluide). */
export function Lecture({ forme }: { forme: Forme }) {
  return (
    <span className="lecture" aria-hidden="true">
      <Blob nom="b" className="lecture__tache" morph={forme === "fluide"} />
      <Icon name="play" />
    </span>
  );
}
