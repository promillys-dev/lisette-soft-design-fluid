import { Blob } from "@/components/ui/blob";
import { Icon } from "@/components/ui/icones";
import { Illustration, Lecture } from "@/components/ui/lecture";
import { Lien } from "@/components/ui/lien";
import { programmes, vignettes } from "@/lib/content";
import type { Forme } from "@/lib/formes";
import { vars } from "@/lib/utils";

/** Bloc 8 · LCTV : une vidéo à la une en grand format, trois vignettes à côté. */
export function Lctv({ forme }: { forme: Forme }) {
  return (
    <section className="lctv bande bande--ivoire" id="lctv">
      <Blob nom="nappe" className="lctv__nappe" parallaxe={0.1} />
      <div className="wrap">
        <div className="tete tete--double">
          <div className="reveal">
            <p className="lctv__logo" aria-hidden="true">
              LC<b>TV</b>
            </p>
            <h2 className="h2">
              LCTV, ma chaîne<span className="point">.</span>
            </h2>
            <p className="chapo">
              J’aime expliquer ce que je fais et montrer ceux avec qui je le fais. LCTV réunit mes interviews, mes
              interventions publiques, des reportages au cœur de nos usines et de courtes capsules où je partage une
              conviction en une minute.
            </p>
          </div>
          <div className="programmes reveal" data-reveal="droite">
            {programmes.map((programme) => (
              <Lien forme={forme} vers={{ page: "lctv", ancre: "programmes" }} key={programme}>
                {programme}
              </Lien>
            ))}
          </div>
        </div>

        <div className="lctv__grille">
          <Lien forme={forme} vers={{ page: "lctv", ancre: "a-la-une" }} className="une reveal" data-reveal="zoom">
            <span className="une__image">
              <Illustration image="chantier" sizes="(max-width: 900px) 92vw, 720px" />
            </span>
            <Lecture forme={forme} />
            <span className="une__direct">À la une</span>
            <span className="une__texte">
              <strong>Bâtir des usines, bâtir des vies</strong>
              <span>Film de présentation · 2 à 3 minutes · Les sites, les équipes, sa voix en fil conducteur</span>
            </span>
          </Lien>
          <div className="lctv__cote">
            {vignettes.map((vignette, i) => (
              <Lien
                forme={forme}
                vers={{ page: "lctv", ancre: "programmes" }}
                className="vignette reveal"
                data-reveal="droite"
                key={vignette.titre}
                style={vars({ "--i": i })}
              >
                <span className="vignette__image">
                  <Illustration image={vignette.image} sizes="180px" />
                  <Lecture forme={forme} />
                </span>
                <span className="vignette__texte">
                  <span className="vignette__rubrique">{vignette.rubrique}</span>
                  <strong>{vignette.titre}</strong>
                  <span>{vignette.detail}</span>
                </span>
              </Lien>
            ))}
          </div>
        </div>
        <div className="lctv__pied reveal">
          <p className="citation">Les images disent souvent mieux que les mots ce qu’est une industrie qui naît.</p>
          <Lien forme={forme} vers={{ page: "lctv" }} className="btn">
            Regarder LCTV
            <Icon name="arrow" />
          </Lien>
        </div>
      </div>
    </section>
  );
}
