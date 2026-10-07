import { Blob } from "@/components/ui/blob";
import { Icon } from "@/components/ui/icones";
import { Lien } from "@/components/ui/lien";
import { actualites, revueDePresse } from "@/lib/content";
import type { Forme } from "@/lib/formes";
import { cn, vars } from "@/lib/utils";

const TACHES = ["a", "c", "b", "d"] as const;

/** Bloc 10 · Actualités et revue de presse : le fil d'actualités à gauche, les parutions à droite. */
export function Actualites({ forme }: { forme: Forme }) {
  return (
    <section className="actualites bande bande--ivoire" id="actualites">
      <Blob nom="brume" etat={1} className="actualites__nappe" parallaxe={-0.08} />
      <div className="wrap actualites__grille">
        <div>
          <div className="reveal">
            <p className="surtitre">Au fil des semaines</p>
            <h2 className="h2">
              Actualités<span className="point">.</span>
            </h2>
            <p className="chapo">
              Inaugurations, rencontres institutionnelles, prises de parole, vie des usines. Suivez ce qui se
              construit, au fil des semaines.
            </p>
          </div>
          <ul className="fil">
            {actualites.map((actualite, i) => (
              <li className="reveal" key={actualite.titre} style={vars({ "--i": i })}>
                <div className="fil__date">
                  <Blob nom={TACHES[i]} etat={2} className="fil__tache" morph={forme === "fluide"} />
                  <b>{actualite.jour}</b>
                  <span>{actualite.periode}</span>
                </div>
                <div>
                  <span className={cn("etiquette", actualite.or && "etiquette--or")}>{actualite.etiquette}</span>
                  <h3>{actualite.titre}</h3>
                </div>
              </li>
            ))}
          </ul>
          <div className="suite suite--gauche reveal">
            <Lien forme={forme} vers={{ page: "salle-de-presse", ancre: "communiques" }} className="btn">
              Toutes les actualités
              <Icon name="arrow" />
            </Lien>
          </div>
        </div>

        <div>
          <div className="reveal">
            <p className="surtitre">Revue de presse</p>
            <h2 className="h2">
              Ils en parlent<span className="point">.</span>
            </h2>
            <p className="chapo">
              La presse nationale et internationale suit notre aventure industrielle. Retrouvez ici les articles,
              reportages et émissions qui lui sont consacrés.
            </p>
          </div>
          {/* Gabarit : frise des logos des médias, puis entrées de la revue de presse (liens réels à renseigner). */}
          <div className="logos reveal" aria-hidden="true">
            <span>Logo média</span>
            <span>Logo média</span>
            <span>Logo média</span>
            <span>Logo média</span>
          </div>
          <ul className="parutions">
            {revueDePresse.map((parution, i) => (
              <li className="reveal" key={parution.type} style={vars({ "--i": i })}>
                <div>
                  <h3>{parution.titre}</h3>
                  <p>{parution.source}</p>
                </div>
                <span className="etiquette etiquette--trait">{parution.type}</span>
              </li>
            ))}
          </ul>
          <p className="gabarit reveal">
            Gabarit d’une entrée&nbsp;: les liens réels seront repris de la revue de presse.
          </p>
          <div className="suite suite--gauche reveal">
            <Lien forme={forme} vers={{ page: "salle-de-presse", ancre: "revue" }} className="btn btn--trait">
              Voir la revue de presse
              <Icon name="arrow" />
            </Lien>
          </div>
        </div>
      </div>
    </section>
  );
}
