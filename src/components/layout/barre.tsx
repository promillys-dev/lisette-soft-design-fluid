import { Icon } from "@/components/ui/icones";
import { Lien } from "@/components/ui/lien";
import type { Forme } from "@/lib/formes";
import { utilitaires } from "@/lib/menu";

/** Barre utilitaire, présente sur tout le site : langues, recherche, accès institutions et médias. */
export function Barre({ forme }: { forme: Forme }) {
  return (
    <div className="barre">
      <div className="wrap barre__in">
        <div className="barre__gauche">
          <span className="barre__site">Site officiel</span>
          <span className="langues" role="group" aria-label="Langue du site">
            {utilitaires.langues.map((l) => (
              <a key={l.code} href="#" lang={l.code} aria-current={l.code === "fr" ? "true" : undefined}>
                {l.label}
              </a>
            ))}
          </span>
        </div>
        <div className="barre__droite">
          <button className="barre__recherche" type="button">
            <Icon name="search" />
            Rechercher
          </button>
          <Lien forme={forme} vers={utilitaires.institutions.vers} className="barre__lien">
            {utilitaires.institutions.label}
          </Lien>
          <Lien forme={forme} vers={utilitaires.medias.vers} className="barre__medias">
            {utilitaires.medias.label}
          </Lien>
        </div>
      </div>
    </div>
  );
}
