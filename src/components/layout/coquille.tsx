import type { ReactNode } from "react";
import { Barre } from "@/components/layout/barre";
import { EnTete } from "@/components/layout/en-tete";
import { Pied } from "@/components/layout/pied";
import { Decoupes } from "@/components/ui/blob";
import { Effets } from "@/components/ui/effets";
import { Sprite } from "@/components/ui/icones";
import type { Forme } from "@/lib/formes";

/**
 * Habillage commun à toutes les pages : barre utilitaire, en-tête, pied de page, planches SVG
 * (pictogrammes, découpes des photos) et effets. Placé dans le root layout, il reste monté d'une
 * page à l'autre ; chaque page ne rend que son <main id="contenu">.
 */
export function Coquille({ forme, children }: { forme: Forme; children: ReactNode }) {
  return (
    <>
      <a className="evitement" href="#contenu">
        Aller au contenu
      </a>
      <Sprite />
      <Decoupes />

      <Barre forme={forme} />
      <EnTete forme={forme} />
      {children}
      <Pied forme={forme} />

      <Effets />
    </>
  );
}
