import { mers, rives } from "@/lib/blobs";
import type { Forme } from "@/lib/formes";
import { cn, vars } from "@/lib/utils";

export type Fond = "ivoire" | "papier" | "sable" | "brun" | "nuit";

type Props = {
  forme: Forme;
  /** Fond de la bande qui précède. */
  de: Fond;
  /** Fond de la bande qui suit : c'est lui qui monte en vague. */
  vers: Fond;
  /** Dessin de la vague (chaque séparation a le sien). */
  motif?: number;
  miroir?: boolean;
};

/**
 * Séparation entre deux bandes : une forme fluide et asymétrique, jamais une ligne droite.
 * Proposition A : une houle à trois nappes qui glissent à des vitesses différentes.
 * Proposition B : une rive fixe, doublée d'un filet d'or.
 */
export function Vague({ forme, de, vers, motif = 0, miroir }: Props) {
  const style = vars({ "--de": `var(--${de})`, "--vers": `var(--${vers})` });

  if (forme === "fluide") {
    return (
      <div className={cn("vague vague--mer", miroir && "vague--miroir")} style={style} aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" focusable="false">
          <path className="vague__nappe vague__nappe--3" d={mers[(motif + 2) % mers.length]} />
          <path className="vague__nappe vague__nappe--2" d={mers[(motif + 1) % mers.length]} />
          <path className="vague__nappe vague__nappe--1" d={mers[motif % mers.length]} />
        </svg>
      </div>
    );
  }

  const rive = rives[motif % rives.length];
  return (
    <div className={cn("vague vague--rive", miroir && "vague--miroir")} style={style} aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" focusable="false">
        <path className="vague__fond" d={rive.fond} />
        <path className="vague__filet" d={rive.trait} />
      </svg>
    </div>
  );
}
