import { Blob } from "@/components/ui/blob";
import { Icon } from "@/components/ui/icones";
import { Lien } from "@/components/ui/lien";
import { convictions } from "@/lib/content";
import type { Forme } from "@/lib/formes";
import { vars } from "@/lib/utils";

const TACHES = ["c", "a", "d"] as const;

/** Bloc 4 · Ce qui me guide : trois convictions, un pictogramme sobre par colonne. */
export function Convictions({ forme }: { forme: Forme }) {
  return (
    <section className="convictions bande bande--ivoire" id="convictions">
      <Blob nom="brume" etat={2} className="convictions__nappe" parallaxe={0.1} />
      <div className="wrap">
        <div className="tete tete--centre reveal">
          <p className="surtitre">Ce qui me guide</p>
          <h2 className="h2">
            Trois convictions, une même direction<span className="point">.</span>
          </h2>
        </div>
        <div className="convictions__grille">
          {convictions.map((conviction, i) => (
            <article className="conviction reveal" key={conviction.titre} style={vars({ "--i": i })}>
              <p className="conviction__rang">0{i + 1}</p>
              <div className="conviction__ico">
                <Blob nom={TACHES[i]} etat={1} className="conviction__tache" morph={forme === "fluide"} />
                <Icon name={conviction.icone} />
              </div>
              <h3>{conviction.titre}</h3>
              <p>{conviction.texte}</p>
            </article>
          ))}
        </div>
        <div className="suite reveal">
          <Lien forme={forme} vers={{ page: "ma-vision" }} className="btn btn--trait">
            Lire ma vision
            <Icon name="arrow" />
          </Lien>
        </div>
      </div>
    </section>
  );
}
