"use client";

import { Blob } from "@/components/ui/blob";
import { CarteCameroun, useSiteActif } from "@/components/ui/carte-cameroun";
import { Icon } from "@/components/ui/icones";
import { Lien } from "@/components/ui/lien";
import { sites } from "@/lib/carte";
import type { Forme } from "@/lib/formes";
import { cn, vars } from "@/lib/utils";

/**
 * Bloc 6 · Mes réalisations en bref : carte du Cameroun à gauche, texte et sites à droite.
 * La liste et les repères de la carte sont liés : survoler ou cibler l'un met l'autre en avant.
 */
export function Realisations({ forme }: { forme: Forme }) {
  const { carte, actif, viser } = useSiteActif();

  return (
    <section className="realisations bande bande--ivoire" id="realisations">
      <div className="wrap realisations__grille">
        <div className="realisations__carte reveal" data-reveal="gauche">
          <Blob nom="fond" etat={2} className="realisations__nappe" morph={forme === "fluide"} />
          <Blob nom="anneau" etat={1} className="realisations__anneau" trait />
          <CarteCameroun actif={actif} viser={viser} ref={carte} />
        </div>

        <div className="realisations__texte">
          <div className="reveal">
            <p className="surtitre">Mes réalisations en bref</p>
            <h2 className="h2">
              Du cacao brut au produit fini, sur notre sol<span className="point">.</span>
            </h2>
          </div>
          <p className="reveal">
            Avec Africa Processing Company SA, j’ai fait le choix de la chaîne complète. Nous recevons la fève, nous
            la transformons en masse, en beurre et en poudre de cacao, puis en produits finis sous notre marque
            CA’OLY. Ce travail place aujourd’hui l’entreprise parmi les cinq premiers transformateurs de cacao du
            Cameroun.
          </p>
          <p className="reveal">
            À Bangou, dans la région de l’Ouest, l’usine DENKY prolonge cette logique vers d’autres filières
            agroalimentaires, avec la même exigence&nbsp;: transformer les ressources là où elles se trouvent.
            D’autres implantations se préparent, dont un site consacré à l’arachide à Maroua, dans la région de
            l’Extrême-Nord.
          </p>
          <p className="reveal">
            Chaque site raconte la même histoire. Une matière première locale, un outil industriel moderne, des
            équipes formées sur place et une valeur ajoutée qui reste au pays.
          </p>

          <ol className="sites">
            {sites.map((site, i) => (
              <li
                className={cn("reveal", actif === site.id && "is-active")}
                key={site.id}
                tabIndex={0}
                style={vars({ "--i": i })}
                {...viser(site.id)}
              >
                <span className="sites__rang">0{i + 1}</span>
                <div>
                  <h3>{site.nom}</h3>
                  <p>{site.detail}</p>
                </div>
                <span className={cn("etiquette", site.enProjet && "etiquette--or")}>
                  {site.enProjet ? "En préparation" : "En activité"}
                </span>
              </li>
            ))}
          </ol>
          <div className="suite suite--gauche reveal">
            <Lien forme={forme} vers={{ page: "realisations-industrielles", ancre: "sites" }} className="btn">
              Visiter mes sites industriels
              <Icon name="arrow" />
            </Lien>
          </div>
        </div>
      </div>
    </section>
  );
}
