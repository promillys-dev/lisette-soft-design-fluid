import { type B, Boutons, Section, Tete, Titre } from "@/components/blocs/base";
import { Blob } from "@/components/ui/blob";
import { Icon } from "@/components/ui/icones";
import { Illustration, Lecture } from "@/components/ui/lecture";
import { cn, vars } from "@/lib/utils";

/** LCTV · vidéo à la une : lecteur en grand format, titre, repères et résumé. */
export function VideoUne({ bloc }: { bloc: B<"video-une"> }) {
  return (
    <Section id={bloc.id} fond={bloc.fond}>
      <div className="video-une">
        <a className="une reveal" data-reveal="zoom" href="#" aria-label={`Regarder : ${bloc.titre}`}>
          <span className="une__image">
            <Illustration image={bloc.image} sizes="(max-width: 960px) 92vw, 760px" />
          </span>
          <Lecture forme="fluide" />
          <span className="une__direct">{bloc.etiquette}</span>
        </a>
        <div className="reveal">
          <p className="surtitre">{bloc.surtitre ?? bloc.etiquette}</p>
          <h2 className="h2">
            <Titre>{bloc.titre}</Titre>
          </h2>
          <p className="video-une__meta">{bloc.meta}</p>
          <p className="chapo">{bloc.resume}</p>
          {bloc.boutons && <Boutons boutons={bloc.boutons} sombre={bloc.fond === "brun"} anime={false} />}
        </div>
      </div>
    </Section>
  );
}

/** LCTV · programmes : une rangée de vignettes par programme, habillées en attendant les vidéos. */
export function Programmes({ bloc }: { bloc: B<"programmes"> }) {
  return (
    <Section id={bloc.id} fond={bloc.fond}>
      <Tete surtitre={bloc.surtitre} titre={bloc.titre} intro={bloc.intro} />
      {bloc.items.map((programme, i) => {
        const vignettes = programme.themes ?? ["", "", "", ""];
        return (
          <div className="programme reveal" key={programme.titre}>
            <div className="programme__tete">
              <div>
                <span className="programme__n">Programme {i + 1}</span>
                <h3>{programme.titre}</h3>
                <p>{programme.texte}</p>
              </div>
              <a className="lien" href="#">
                Tout voir
                <Icon name="arrow" />
              </a>
            </div>
            <div className="programme__rang" style={vars({ "--n": vignettes.length > 4 ? 3 : 4 })}>
              {vignettes.map((theme, j) => (
                <a
                  className={cn("mini", programme.images?.[j] && "mini--photo")}
                  href="#"
                  key={j}
                  aria-label={theme || `${programme.titre}, vidéo ${j + 1}`}
                >
                  <Illustration image={programme.images?.[j]} sizes="(max-width: 960px) 46vw, 300px" />
                  {!programme.images?.[j] && <Blob nom="nappe" etat={((i + j) % 3) as 0 | 1 | 2} className="mini__nappe" />}
                  <Lecture forme="fluide" />
                  {theme && <span className="mini__legende">{theme}</span>}
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </Section>
  );
}

/** LCTV · les grands moments : mosaïque de vidéos datées. */
export function Mosaique({ bloc }: { bloc: B<"mosaique"> }) {
  return (
    <Section id={bloc.id} fond={bloc.fond}>
      <Tete surtitre={bloc.surtitre} titre={bloc.titre} intro={bloc.intro} />
      <div className="mosaique">
        {bloc.items.map((item, i) => (
          <a
            className={cn("moment reveal", item.image && "moment--photo")}
            href="#"
            key={item.date}
            style={vars({ "--i": i % 3 })}
          >
            <Illustration image={item.image} sizes="(max-width: 960px) 46vw, 620px" />
            {!item.image && <Blob nom="fond" etat={(i % 3) as 0 | 1 | 2} className="moment__nappe" />}
            <Lecture forme="fluide" />
            <span className="moment__date">{item.date}</span>
            <strong>{item.texte}</strong>
          </a>
        ))}
      </div>
    </Section>
  );
}

/** Barre de recherche et de filtres, placée sous l'en-tête de page dont elle prolonge la bande. */
export function Filtres({ bloc }: { bloc: B<"filtres"> }) {
  return (
    <div className="filtres-barre bande bande--sable" id={bloc.id}>
      <div className="wrap filtres">
        {bloc.recherche && (
          <label className="recherche">
            <Icon name="search" />
            <span className="sr-only">{bloc.recherche}</span>
            <input type="search" placeholder={bloc.recherche} />
          </label>
        )}
        {bloc.filtres.map((filtre) => (
          <button className="puce" type="button" key={filtre}>
            {filtre}
            <Icon name="chev" />
          </button>
        ))}
      </div>
    </div>
  );
}

/** Tribunes · tribune à la une : grande carte en pleine largeur, citation en exergue sur un blob brun. */
export function TribuneUne({ bloc }: { bloc: B<"tribune-une"> }) {
  return (
    <Section id={bloc.id} fond={bloc.fond}>
      <article className="tribune-une reveal">
        <div className="tribune-une__texte">
          <span className="etiquette">{bloc.rubrique}</span>
          <h2 className="h2">{bloc.titre}</h2>
          <p className="tribune-une__signature">{bloc.signature}</p>
          <p className="tribune-une__chapo">{bloc.chapo}</p>
          {bloc.boutons && <Boutons boutons={bloc.boutons} anime={false} />}
        </div>
        <blockquote className="tribune-une__citation">
          <Blob nom="fond" className="tribune-une__nappe" morph />
          <Blob nom="anneau" etat={1} className="tribune-une__anneau" trait morph />
          «&nbsp;{bloc.citation}&nbsp;»
        </blockquote>
      </article>
    </Section>
  );
}
