import type { ComponentProps } from "react";
import Link from "next/link";
import type { Cible } from "@/lib/blocs";
import type { Forme } from "@/lib/formes";
import { lien } from "@/lib/liens";

type Props = Omit<ComponentProps<"a">, "href"> & { forme: Forme; vers?: Cible };

/**
 * Lien vers une page ou une ancre du site. Reste une simple ancre (« #bloc », ou « # » neutre)
 * tant que la cible n'est pas une page.
 */
export function Lien({ forme, vers, children, ...reste }: Props) {
  const href = lien(forme, vers);
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
