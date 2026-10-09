import type { ComponentProps } from "react";
import Link from "next/link";
import type { Cible } from "@/lib/blocs";
import type { Forme } from "@/lib/formes";
import { lien } from "@/lib/liens";

type Props = Omit<ComponentProps<"a">, "href"> & { forme: Forme; vers?: Cible };

/**
 * Lien vers une page ou une ancre du site. Reste une simple ancre (« #bloc », ou « # » neutre)
 * tant que la cible n'est pas une page. Une adresse hors des pages du site (réseau social,
 * document) s'ouvre dans un nouvel onglet, ou s'enregistre si la cible le demande.
 */
export function Lien({ forme, vers, children, ...reste }: Props) {
  const href = lien(forme, vers);
  if (vers?.url) {
    if (vers.telecharger) {
      return (
        <a href={href} download {...reste}>
          {children}
        </a>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...reste}>
        {children}
        <span className="sr-only"> (nouvel onglet)</span>
      </a>
    );
  }
  if (href.startsWith("#")) {
    return (
      <a href={href} {...reste}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...reste}>
      {children}
    </Link>
  );
}
