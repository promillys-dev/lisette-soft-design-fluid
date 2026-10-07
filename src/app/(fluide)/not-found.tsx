import type { Metadata } from "next";
import { Entete } from "@/components/blocs/editorial";
import { Vague } from "@/components/ui/vague";

export const metadata: Metadata = { title: "Page introuvable | Lisette Claudia TAME NJAMBE" };

/** Adresse inconnue : même en-tête que les pages intérieures, avec un retour à l'accueil. */
export default function Introuvable() {
  return (
    <main id="contenu">
      <Entete
        numero="404"
        bloc={{
          type: "entete",
          surtitre: "Erreur 404",
          titre: "Page introuvable",
          intro: ["L’adresse demandée n’existe pas ou a été déplacée."],
          boutons: [{ label: "Revenir à l’accueil", vers: {} }],
        }}
      />
      <Vague forme="fluide" de="sable" vers="nuit" motif={3} miroir />
    </main>
  );
}
