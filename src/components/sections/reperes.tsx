import { Blob } from "@/components/ui/blob";
import { Compteur } from "@/components/ui/compteur";
import { Icon } from "@/components/ui/icones";
import { reperes } from "@/lib/content";
import type { Forme } from "@/lib/formes";
import { vars } from "@/lib/utils";

const TACHES = ["a", "b", "c", "d"] as const;

/** Bloc 3 · Repères : quatre chiffres animés à l'apparition, chacun posé sur sa tache. Aucune donnée financière. */
export function Reperes({ forme }: { forme: Forme }) {
  return (
    <section className="reperes bande bande--ivoire" id="reperes" aria-labelledby="t-reperes">
      <div className="wrap">
        <div className="reperes__tete reveal">
          <p className="surtitre">Repères</p>
          <h2 id="t-reperes" className="reperes__titre">
            Ce que les faits disent<span className="point">.</span>
          </h2>
        </div>
        <div className="reperes__grille">
          {reperes.map((repere, i) => (
            <div className="repere reveal" key={repere.label} style={vars({ "--i": i })}>
              <Blob nom={TACHES[i]} className="repere__tache" morph={forme === "fluide"} />
              <p className="repere__chiffre">
                <Compteur valeur={repere.valeur} />
                {repere.suffixe && <small>{repere.suffixe}</small>}
              </p>
              <p className="repere__label">{repere.label}</p>
              <p className="repere__texte">{repere.texte}</p>
            </div>
          ))}
        </div>
        <p className="reperes__mention reveal">
          <Icon name="medal" />
          Chevalier de l’Ordre de la Valeur, distinction décernée par le Chef de l’État.
        </p>
      </div>
    </section>
  );
}
