import Image from "next/image";
import { Blob } from "@/components/ui/blob";
import type { Forme } from "@/lib/formes";

/** Bloc 2 · Mot de bienvenue : texte signé, accompagné d'une photo découpée en blob. */
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
              Bienvenue<span className="point">.</span>
            </h2>
          </div>
          <p className="reveal">
            Vous êtes ici chez une femme qui a choisi l’usine comme lieu d’engagement. J’ai commencé dans un local
            de 66&nbsp;m², avec une idée simple et tenace&nbsp;: le cacao du Cameroun mérite d’être transformé au
            Cameroun. Cette idée est devenue Africa Processing Company SA, puis plusieurs sites industriels, puis des
            centaines de familles qui vivent aujourd’hui de ce travail.
          </p>
          <p className="reveal">
            Ce chemin m’a appris une chose que je tiens à partager ici.{" "}
            <mark>Une usine ne vaut que par les femmes et les hommes qui la font tourner.</mark> Les machines
            s’achètent, la confiance se construit. C’est pourquoi j’ai placé l’accompagnement humain au centre de
            mes entreprises, avec la même rigueur que la qualité de nos produits.
          </p>
          <p className="reveal">
            Ce site rassemble mon parcours, mes convictions, mes réalisations et mes prises de parole. Que vous
            représentiez un État, une institution, un média ou que vous soyez simplement curieux de savoir ce qu’il
            est possible de bâtir depuis l’Afrique, vous y trouverez de quoi nourrir votre réflexion, et peut-être
            l’envie d’avancer ensemble.
          </p>
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
