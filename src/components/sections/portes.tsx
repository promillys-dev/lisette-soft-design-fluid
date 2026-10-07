import { Icon } from "@/components/ui/icones";
import { Lien } from "@/components/ui/lien";
import { defilant, portes } from "@/lib/content";
import type { Forme } from "@/lib/formes";
import { cn, vars } from "@/lib/utils";

/** Bloc 5 · Trois portes d'entrée : une grande carte cliquable par public. */
export function Portes({ forme }: { forme: Forme }) {
  return (
    <section className="portes bande bande--sable" id="portes">
      <div className="wrap">
        <div className="tete tete--centre reveal">
          <p className="surtitre">Trois portes d’entrée</p>
          <h2 className="h2">
            Par où souhaitez-vous commencer<span className="point">&nbsp;?</span>
          </h2>
        </div>
        <div className="portes__grille">
          {portes.map((porte, i) => (
            <Lien
              forme={forme}
              vers={{ page: porte.page }}
              className={cn("porte reveal", porte.sombre && "porte--sombre")}
              key={porte.titre}
              style={vars({ "--i": i })}
            >
              <span className="porte__goutte" aria-hidden="true" />
              <span className="porte__ico">
                <Icon name={porte.icone} />
              </span>
              <span className="porte__rang">Porte {i + 1}</span>
              <h3>{porte.titre}</h3>
              <p>{porte.texte}</p>
              <span className="porte__suite">
                {porte.bouton}
                <span className="porte__fleche">
                  <Icon name="arrow" />
                </span>
              </span>
            </Lien>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Ruban défilant (proposition fluide) : transition vers les sites industriels. */
export function Defilant() {
  const mots = (
    <>
      {defilant.map((mot) => (
        <span key={mot}>{mot}</span>
      ))}
      <span>
        <em>10 usines, 10 régions</em>
      </span>
      <span>Cap 2036</span>
    </>
  );
  return (
    <div className="ruban" aria-hidden="true">
      <div className="ruban__piste">
        {mots}
        {mots}
      </div>
    </div>
  );
}
