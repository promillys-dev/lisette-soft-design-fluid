import { Blob } from "@/components/ui/blob";
import { Icon } from "@/components/ui/icones";
import { Lien } from "@/components/ui/lien";
import { domaines } from "@/lib/content";
import type { Forme } from "@/lib/formes";
import { vars } from "@/lib/utils";

/**
 * Bloc 7 · Mon expertise au service des États : bandeau sur fond brun profond, texte clair,
 * pour marquer le changement de registre.
 */
export function Expertise({ forme }: { forme: Forme }) {
  const fluide = forme === "fluide";
  return (
    <section className="expertise bande bande--brun sombre" id="expertise">
      <Blob nom="nappe" etat={2} className="expertise__nappe expertise__nappe--1" morph={fluide} parallaxe={0.1} />
      <Blob nom="fond" className="expertise__nappe expertise__nappe--2" morph={fluide} parallaxe={-0.08} />
      <Blob nom="anneau" etat={2} className="expertise__anneau" trait morph={fluide} />
      <div className="wrap expertise__grille">
        <div className="expertise__texte">
          <div className="reveal">
            <p className="surtitre surtitre--clair">Mon expertise au service des États</p>
            <h2 className="h2">
              Industrialiser un pays, cela se pense et cela se construit<span className="point">.</span>
            </h2>
          </div>
          <p className="reveal">
            J’ai bâti avant de conseiller. Je sais ce que coûte un site mal choisi, une ligne mal dimensionnée, une
            équipe mal préparée. Cette expérience, je la mets désormais à la disposition des États et des
            institutions qui veulent passer de l’intention à l’usine.
          </p>
          <p className="reveal">
            Je conçois des stratégies globales d’industrialisation pour un écosystème local, national ou
            international. Je livre des plans stratégiques et des usines clés en main. Je mets en place les
            mécanismes qui permettent à la production de démarrer, de tenir et de grandir.
          </p>
          <div className="expertise__action reveal">
            <Lien forme={forme} vers={{ page: "contact", ancre: "etats" }} className="btn btn--or">
              Initier un premier échange
              <Icon name="arrow" />
            </Lien>
            <p className="expertise__note">
              Offre réservée aux États, aux collectivités territoriales et aux institutions.
            </p>
          </div>
        </div>

        <ol className="domaines">
          {domaines.map((domaine, i) => (
            <li className="reveal" data-reveal="droite" key={domaine.rang} style={vars({ "--i": i })}>
              <Lien forme={forme} vers={{ page: "expertise-etats", ancre: "domaines" }}>
                <span className="domaines__rang">{domaine.rang}</span>
                <span className="domaines__texte">
                  <strong>{domaine.titre}</strong>
                  <span>{domaine.texte}</span>
                </span>
                <Icon name="arrow" />
              </Lien>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
