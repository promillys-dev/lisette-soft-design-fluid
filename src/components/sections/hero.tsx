import Image from "next/image";
import { Blob } from "@/components/ui/blob";
import { Diaporama } from "@/components/ui/diaporama";
import { Icon } from "@/components/ui/icones";
import { Lien } from "@/components/ui/lien";
import { portraits } from "@/lib/content";
import type { Forme } from "@/lib/formes";
import { vars } from "@/lib/utils";

/**
 * Bloc 1 · Bandeau d'ouverture : texte à gauche, portrait à droite.
 * Le portrait est recadré en blob par clip-path (.portrait__photo). Derrière lui et derrière le
 * texte, des blobs SVG posés en fond absolu (z-index: -1).
 * Version fluide : la découpe se déforme sur une photo qui, elle, ne bouge pas ; les nappes
 * dérivent et suivent le curseur. Le portrait est un diaporama : pour changer de photo, la
 * découpe se referme puis se rouvre (components/ui/diaporama.tsx).
 * Proposition B : tout est posé, seul le halo du portrait respire (border-radius).
 */
export function Hero({ forme }: { forme: Forme }) {
  const fluide = forme === "fluide";
  return (
    <section className="hero bande bande--ivoire" id="accueil">
      <Blob nom="nappe" className="hero__nappe hero__nappe--1" morph={fluide} parallaxe={0.12} />
      <Blob nom="brume" className="hero__nappe hero__nappe--2" morph={fluide} parallaxe={-0.08} />

      <div className="wrap hero__in">
        <div className="hero__texte">
          <p className="surtitre" data-in style={vars({ "--i": 0 })}>
            Industrielle. Entrepreneure. Bâtisseuse.
          </p>
          <h1 className="hero__nom">
            <span className="ligne" style={vars({ "--i": 1 })}>
              <span>Lisette Claudia</span>
            </span>
            <span className="ligne" style={vars({ "--i": 2 })}>
              <span>TAME NJAMBE</span>
            </span>
          </h1>
          <p className="hero__signature" data-in style={vars({ "--i": 4 })}>
            «&nbsp;Transformer nos ressources là où elles naissent, c’est transformer la vie de ceux qui les
            cultivent.&nbsp;»
          </p>
          <p className="hero__intro" data-in style={vars({ "--i": 5 })}>
            Je construis des usines parce que je crois qu’un pays se relève par ce qu’il fabrique. Depuis le
            Cameroun, je transforme ce que notre terre produit, je crée des emplois là où il n’y en avait pas et je
            mets mon expérience au service de ceux qui veulent industrialiser leurs territoires.
          </p>
          <div className="hero__actions" data-in style={vars({ "--i": 6 })}>
            <Lien forme={forme} vers={{ page: "mon-parcours" }} className="btn">
              Découvrir mon parcours
              <Icon name="arrow" />
            </Lien>
            <Lien forme={forme} vers={{ page: "ma-vision" }} className="btn btn--trait">
              Explorer ma vision
              <Icon name="arrow" />
            </Lien>
          </div>
        </div>

        <div className="hero__visuel">
          <div className="portrait" data-in style={vars({ "--i": 3 })}>
            <Blob nom={fluide ? "fond" : "souffle"} className="portrait__fond" morph />
            <Blob nom="anneau" className="portrait__anneau" trait morph={fluide} />
            <span className="portrait__halo" aria-hidden="true" />
            {fluide && (
              <>
                <span className="portrait__goutte portrait__goutte--1" aria-hidden="true" />
                <span className="portrait__goutte portrait__goutte--2" aria-hidden="true" />
              </>
            )}
            {fluide ? (
              <Diaporama vues={portraits} sizes="(max-width: 960px) 78vw, 480px" />
            ) : (
              <div className="portrait__photo">
                <Image
                  src="/images/portrait-lctn.jpg"
                  alt="Portrait de Lisette Claudia TAME NJAMBE"
                  width={788}
                  height={1044}
                  sizes="(max-width: 960px) 78vw, 480px"
                  preload
                />
              </div>
            )}
          </div>

          {fluide ? (
            <>
              <div className="pastille pastille--apc" data-in style={vars({ "--i": 8 })}>
                <span className="pastille__ico">
                  <Icon name="factory" />
                </span>
                <div>
                  <strong>Africa Processing Company SA</strong>
                  <span>Fondatrice · depuis 2021</span>
                </div>
              </div>
              <div className="pastille pastille--ordre" data-in style={vars({ "--i": 9 })}>
                <span className="pastille__ico">
                  <Icon name="medal" />
                </span>
                <div>
                  <strong>Chevalier de l’Ordre de la Valeur</strong>
                  <span>Distinction du Chef de l’État</span>
                </div>
              </div>
            </>
          ) : (
            <p className="hero__legende" data-in style={vars({ "--i": 8 })}>
              Fondatrice d’Africa Processing Company SA, Chevalier de l’Ordre de la Valeur
            </p>
          )}
        </div>
      </div>

      <a className="hero__suite" href="#reperes" data-in style={vars({ "--i": 10 })}>
        Défiler
      </a>
    </section>
  );
}
