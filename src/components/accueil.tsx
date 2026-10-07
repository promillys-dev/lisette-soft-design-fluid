import { Actualites } from "@/components/sections/actualites";
import { Bienvenue } from "@/components/sections/bienvenue";
import { Convictions } from "@/components/sections/convictions";
import { Expertise } from "@/components/sections/expertise";
import { Hero } from "@/components/sections/hero";
import { Lctv } from "@/components/sections/lctv";
import { Lettre } from "@/components/sections/lettre";
import { Defilant, Portes } from "@/components/sections/portes";
import { Realisations } from "@/components/sections/realisations";
import { Reperes } from "@/components/sections/reperes";
import { Tribunes } from "@/components/sections/tribunes";
import { Vague } from "@/components/ui/vague";
import type { Forme } from "@/lib/formes";

/**
 * Page d'accueil : les blocs du contenu client (l'en-tête et le pied de page viennent de la
 * coquille). Les chiffres sont remontés sous le bandeau, comme sur la maquette filaire et dans la
 * direction « Ivoire éditorial ». Le balisage est le même pour les deux propositions : `forme`
 * choisit le dessin des séparations et ce qui bouge.
 * Entre deux bandes de teintes différentes, une <Vague> : jamais de ligne droite.
 */
export function Accueil({ forme }: { forme: Forme }) {
  return (
    <main id="contenu">
      <Hero forme={forme} />
      <Reperes forme={forme} />
      <Vague forme={forme} de="ivoire" vers="sable" motif={0} />
      <Bienvenue forme={forme} />
      <Vague forme={forme} de="sable" vers="ivoire" motif={1} miroir />
      <Convictions forme={forme} />
      <Vague forme={forme} de="ivoire" vers="sable" motif={2} />
      <Portes forme={forme} />
      {forme === "fluide" && <Defilant />}
      <Vague forme={forme} de="sable" vers="ivoire" motif={3} />
      <Realisations forme={forme} />
      <Vague forme={forme} de="ivoire" vers="brun" motif={4} miroir />
      <Expertise forme={forme} />
      <Vague forme={forme} de="brun" vers="ivoire" motif={5} />
      <Lctv forme={forme} />
      <Vague forme={forme} de="ivoire" vers="sable" motif={6} miroir />
      <Tribunes forme={forme} />
      <Vague forme={forme} de="sable" vers="ivoire" motif={7} />
      <Actualites forme={forme} />
      <Lettre forme={forme} />
      <Vague forme={forme} de="ivoire" vers="nuit" motif={3} miroir />
    </main>
  );
}
