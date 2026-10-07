import type { ReactNode } from "react";
import { Cormorant_Garamond, Mulish } from "next/font/google";
import type { Forme } from "@/lib/formes";

// Les deux familles de la direction « Ivoire éditorial ».
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

/**
 * Pose `js` sur <html> avant le premier affichage : les états masqués des animations
 * (.js .reveal, .js .hero [data-in]) ne s'appliquent que si JavaScript s'exécute.
 * Filet de sécurité : si Effets n'a pas démarré au bout de 4 s (`is-ready` absent, script en
 * échec), `js` est retiré et tout redevient visible.
 */
const AMORCE =
  "(function(h){h.classList.add('js');setTimeout(function(){if(!h.classList.contains('is-ready'))h.classList.remove('js')},4000)})(document.documentElement)";

/**
 * Squelette <html>/<body> commun aux root layouts. `forme` sélectionne la proposition
 * (data-forme) ; la feuille forme-*.css correspondante est importée par le layout appelant.
 */
export function Document({ forme, children }: { forme?: Forme; children: ReactNode }) {
  return (
    <html
      lang="fr"
      data-forme={forme}
      data-scroll-behavior="smooth"
      className={`${serif.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: AMORCE }} />
        {children}
      </body>
    </html>
  );
}
