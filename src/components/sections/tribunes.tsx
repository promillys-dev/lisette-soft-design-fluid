import { Icon } from "@/components/ui/icones";
import { Lien } from "@/components/ui/lien";
import { tribunes } from "@/lib/content";
import type { Forme } from "@/lib/formes";
import { vars } from "@/lib/utils";

/** Bloc 9 · Tribunes : trois tribunes récentes, avec thème, titre et première phrase. */
export function Tribunes({ forme }: { forme: Forme }) {
  return (
    <section className="tribunes bande bande--sable" id="tribunes">
      <div className="wrap">
        <div className="tete tete--double">
          <div className="reveal">
            <p className="surtitre">Tribunes</p>
            <h2 className="h2">
              Ce que je pense, je l’écris<span className="point">.</span>
            </h2>
            <p className="chapo">
              Industrialisation, souveraineté alimentaire, emploi des jeunes, développement par les régions,
              responsabilité de l’entrepreneur envers son pays. Je prends la plume pour défendre des idées que je
              mets en pratique. Mes tribunes sont publiées ici dans leur intégralité, à lire en ligne ou à
              télécharger.
            </p>
          </div>
          <Lien forme={forme} vers={{ page: "tribunes" }} className="btn btn--trait reveal" data-reveal="droite">
            Lire toutes mes tribunes
            <Icon name="arrow" />
          </Lien>
        </div>
        <div className="tribunes__grille">
          {tribunes.map((tribune, i) => (
            <article className="tribune reveal" key={tribune.titre} style={vars({ "--i": i })}>
              <div className="tribune__haut">
                <span className="etiquette">{tribune.theme}</span>
                <span className="tribune__rang">N°&nbsp;0{i + 1}</span>
              </div>
              <h3>{tribune.titre}</h3>
              <p>{tribune.accroche}</p>
              <Lien forme={forme} vers={{ page: "tribunes", ancre: "bibliotheque" }} className="lien">
                Lire la tribune
                <Icon name="arrow" />
              </Lien>
              <span className="tribune__guillemet" aria-hidden="true">
                «
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
