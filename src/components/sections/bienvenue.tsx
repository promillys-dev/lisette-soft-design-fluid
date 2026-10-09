import type { ReactNode } from "react";
import Image from "next/image";
import { Blob } from "@/components/ui/blob";
import type { Forme } from "@/lib/formes";
import { vars } from "@/lib/utils";

/** Les quatre temps du mot de bienvenue. */
const parties: { titre: string; texte: ReactNode }[] = [
  {
    titre: "Le point de départ",
    texte: (
      <>
        Tout a commencé dans un local de 66&nbsp;m², avec une idée que personne n’a réussi à me faire
        abandonner&nbsp;: le cacao du Cameroun doit être transformé au Cameroun. De cette idée est née Africa
        Processing Company&nbsp;SA. Puis d’autres sites industriels. Puis plus de 500&nbsp;emplois directs et
        indirects, et autant de familles qui vivent aujourd’hui de ce travail.
      </>
    ),
  },
  {
    titre: "Ma conviction",
    texte: (
      <>
        Les machines s’achètent. La confiance se construit.{" "}
        <mark>Une usine ne vaut que par les femmes et les hommes qui la font tourner.</mark> J’ai donc placé
        l’accompagnement humain au cœur de mes entreprises, avec la même exigence que la qualité de nos produits.
        Chez nous, on fait grandir les carrières, et aussi les projets de vie.
      </>
    ),
  },
  {
    titre: "Mon ambition",
    texte: (
      <>
        Installer l’industrie partout où elle peut créer de l’emploi, de la valeur et de la dignité. Dans chaque
        grande ville du Cameroun d’abord. Aux côtés des États et des institutions ensuite, pour penser et bâtir
        avec eux leur stratégie d’industrialisation.
      </>
    ),
  },
  {
    titre: "Ce que vous trouverez ici",
    texte: (
      <>
        Mon parcours, mes convictions, mes réalisations et mes prises de parole. Que vous représentiez un État,
        une institution ou un média, ou que vous soyez simplement curieux de ce qu’il est possible de bâtir depuis
        l’Afrique, ce site est fait pour nourrir votre réflexion. Et, je l’espère, pour vous donner l’envie
        d’avancer ensemble.
      </>
    ),
  },
];

/** Bloc 2 · Mot de bienvenue : texte signé en quatre temps, accompagné d'une photo découpée en blob. */
export function Bienvenue({ forme }: { forme: Forme }) {
  return (
    <section className="bienvenue bande bande--sable" id="bienvenue">
      <Blob nom="fond" etat={1} className="bienvenue__nappe" parallaxe={-0.1} />
      <div className="wrap bienvenue__grille">
        <div className="bienvenue__media reveal" data-reveal="gauche">
          <Blob nom="anneau" etat={2} className="bienvenue__anneau" trait morph={forme === "fluide"} />
          {/* Photo provisoire : le contenu prévoit une photo prise en usine, au milieu des équipes. */}
          <div className="photo photo--bureau">
            <Image
              src="/images/bureau-caoly.jpg"
              alt="Lisette Claudia TAME NJAMBE dans son bureau, devant l’enseigne CA’OLY, le cacao des Lions"
              width={819}
              height={1024}
              sizes="(max-width: 900px) 88vw, 480px"
            />
          </div>
          <div className="timbre" data-parallax="0.06">
            <strong>66&nbsp;m²</strong>
            <span>
              là où tout
              <br />a commencé
            </span>
          </div>
        </div>

        <div className="bienvenue__texte">
          <div className="reveal">
            <p className="surtitre">Mot de bienvenue</p>
            <h2 className="h2">
              Transformer ici ce que notre terre produit ici<span className="point">.</span>
            </h2>
            <p className="bienvenue__accroche">
              Je suis industrielle par conviction. Un pays change de destin le jour où il transforme ses propres
              richesses.
            </p>
          </div>
          <div className="bienvenue__parties">
            {parties.map((partie, i) => (
              <div className="bienvenue__partie reveal" key={partie.titre} style={vars({ "--i": i % 2 })}>
                <h3>{partie.titre}</h3>
                <p>{partie.texte}</p>
              </div>
            ))}
          </div>
          <div className="signature reveal">
            <p className="signature__nom">Lisette Claudia TAME NJAMBE</p>
            <svg viewBox="0 0 230 18" aria-hidden="true" focusable="false">
              <path pathLength={1} d="M2 12C40 2 70 16 110 8s70-4 118 2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
