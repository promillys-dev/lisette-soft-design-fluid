import Image from "next/image";
import {
  type B,
  Boutons,
  Corps,
  Intitule,
  ROMAINS,
  Section,
  TACHES,
  Tete,
  Titre,
  Vers,
  Visuel,
  anaphore,
} from "@/components/blocs/base";
import { CarteAuto } from "@/components/blocs/interactifs";
import { Echelle } from "@/components/blocs/schemas";
import { Blob } from "@/components/ui/blob";
import { Compteur } from "@/components/ui/compteur";
import { Icon } from "@/components/ui/icones";
import { photos } from "@/lib/photos";
import { cn, vars } from "@/lib/utils";

/**
 * Titre d'en-tête. Quand il tient en plusieurs phrases (« Je n'ai pas hérité d'une usine. J'ai
 * hérité d'un regard. »), chacune prend sa ligne et la dernière, celle qui porte l'idée, passe en bronze.
 */
function TitrePage({ titre }: { titre: string }) {
  const phrases = titre.match(/[^.?!]+[.?!]+/g)?.map((phrase) => phrase.trim()) ?? [];
  if (phrases.length < 2 || phrases.join(" ") !== titre) return <Titre>{titre}</Titre>;
  return (
    <>
      {phrases.map((phrase) => (
        <span className="page-tete__phrase" key={phrase}>
          {phrase}
        </span>
      ))}
    </>
  );
}

/**
 * En-tête de page : fil d'Ariane, titre, introduction. À droite, la photo découpée en blob ;
 * à défaut, le repère de la page (un chiffre tiré de son contenu, ou la carte des sites), sinon
 * son numéro au menu, posé sur un blob brun.
 */
export function Entete({ bloc, numero }: { bloc: B<"entete">; numero: string }) {
  const valeur = bloc.repere?.valeur ?? numero;
  // Une première ligne brève suivie d'un paragraphe : c'est la devise de la page.
  const devise = bloc.intro.length > 1 && bloc.intro[0].length < 80;
  const fichier = bloc.photo?.fichier && photos[bloc.photo.fichier];
  return (
    <header className="page-tete bande bande--sable" id={bloc.id}>
      <Blob nom="nappe" className="page-tete__nappe page-tete__nappe--1" morph parallaxe={0.1} />
      <Blob nom="brume" className="page-tete__nappe page-tete__nappe--2" morph parallaxe={-0.06} />
      <div className="wrap page-tete__in">
        <div className="page-tete__texte">
          <nav className="ariane" aria-label="Fil d’Ariane" data-in style={vars({ "--i": 0 })}>
            <Vers vers={{}}>Accueil</Vers>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{bloc.surtitre}</span>
          </nav>
          <h1 data-in style={vars({ "--i": 1 })}>
            <TitrePage titre={bloc.titre} />
          </h1>
          {bloc.intro.map((para, i) => (
            <p
              className={cn("page-tete__intro", devise && i === 0 && "page-tete__intro--devise")}
              data-in
              style={vars({ "--i": 2 + i })}
              key={i}
            >
              {para}
            </p>
          ))}
          {bloc.mention && (
            <p className="page-tete__mention" data-in style={vars({ "--i": 4 })}>
              {bloc.mention}
            </p>
          )}
          {bloc.boutons && (
            <div data-in style={vars({ "--i": 4 })}>
              <Boutons boutons={bloc.boutons} anime={false} />
            </div>
          )}
          {bloc.acces && (
            <ul className="page-tete__acces" data-in style={vars({ "--i": 4 })}>
              {bloc.acces.map((acces) => (
                <li key={acces.ancre}>
                  <a href={`#${acces.ancre}`}>{acces.label}</a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {fichier ? (
          <div className="page-tete__visuel" data-in style={vars({ "--i": 3 })}>
            <Blob nom="fond" className="page-tete__fond" morph />
            <Blob nom="anneau" className="page-tete__anneau" trait morph />
            <div className={cn("page-tete__photo", bloc.photo?.fichier === "portrait" && "page-tete__photo--portrait")}>
              <Image
                src={fichier.src}
                alt={bloc.photo?.legende ?? ""}
                width={fichier.width}
                height={fichier.height}
                sizes="(max-width: 960px) 70vw, 400px"
                style={{ objectPosition: fichier.foyer }}
                preload
              />
            </div>
          </div>
        ) : bloc.carte ? (
          <div className="page-tete__carte" data-in style={vars({ "--i": 3 })}>
            <Blob nom="fond" etat={2} className="page-tete__fond" morph />
            <CarteAuto />
          </div>
        ) : (
          <p className="page-tete__repere" data-in style={vars({ "--i": 3 })} aria-hidden={!bloc.repere}>
            <Blob nom="fond" etat={1} className="page-tete__fond page-tete__fond--brun" morph />
            <Blob nom="anneau" className="page-tete__anneau" trait morph />
            <span className={cn("page-tete__num", valeur.length > 2 && "page-tete__num--long")}>{valeur}</span>
            {bloc.repere && <span className="page-tete__legende">{bloc.repere.legende}</span>}
          </p>
        )}
      </div>
    </header>
  );
}

/**
 * Texte éditorial : titre à gauche, récit à droite. La marge accueille ce que le bloc apporte
 * (encadré, photo, carte, schéma) ; quand elle est vide, la citation du récit vient s'y placer.
 */
export function Texte({ bloc, lettrine }: { bloc: B<"texte">; lettrine?: boolean }) {
  const margeLibre = !bloc.encadre && !bloc.photo && !bloc.carte && !bloc.schema;
  const enMarge = margeLibre
    ? bloc.corps.find((para) => typeof para === "object" && "citation" in para)
    : undefined;
  const corps = enMarge ? bloc.corps.filter((para) => para !== enMarge) : bloc.corps;
  return (
    <Section id={bloc.id} fond={bloc.fond}>
      <div className="duo">
        <div className="duo__tete">
          <Tete surtitre={bloc.surtitre} titre={bloc.titre} />
          {enMarge && typeof enMarge === "object" && "citation" in enMarge && (
            <blockquote className="exergue exergue--marge reveal">«&nbsp;{enMarge.citation}&nbsp;»</blockquote>
          )}
          {bloc.schema === "echelle" && <Echelle />}
          {bloc.encadre && (
            <aside className="aparte reveal">
              <h3>{bloc.encadre.titre}</h3>
              <ul>
                {bloc.encadre.items.map((item) => (
                  <li key={item.titre}>
                    <strong>{item.titre}</strong>
                    {item.texte && <span>{item.texte}</span>}
                  </li>
                ))}
              </ul>
            </aside>
          )}
          {bloc.photo && <Visuel photo={bloc.photo} className="reveal" note={Boolean(bloc.schema)} legende />}
          {bloc.carte && (
            <div className="duo__carte reveal">
              <Blob nom="fond" etat={2} className="duo__nappe" morph />
              <CarteAuto />
            </div>
          )}
        </div>
        <div className="duo__corps">
          <Corps corps={corps} chapo recit lettrine={lettrine} />
          {bloc.boutons && <Boutons boutons={bloc.boutons} sombre={bloc.fond === "brun"} />}
        </div>
      </div>
    </Section>
  );
}

/** « 500+ » → compteur animé encadré de son préfixe et de son suffixe ; sinon texte brut. */
function Valeur({ valeur }: { valeur: string }) {
  const parts = valeur.match(/^(\D*)(\d[\d\s  ]*)(\D*)$/);
  if (!parts) return <>{valeur}</>;
  return (
    <>
      {parts[1] && <small>{parts[1]}</small>}
      <Compteur valeur={Number(parts[2].replace(/\D/g, ""))} />
      {parts[3] && <small>{parts[3]}</small>}
    </>
  );
}

/** Bandeau de chiffres : il prolonge l'en-tête de page, chaque chiffre sur sa tache. */
export function Chiffres({ bloc }: { bloc: B<"chiffres"> }) {
  return (
    <section className="bloc-chiffres bande bande--sable" id={bloc.id} aria-label={bloc.titre ?? "Repères"}>
      <div className="wrap">
        <div className="reperes__grille" style={vars({ "--n": bloc.items.length })}>
          {bloc.items.map((item, i) => (
            <div className="repere reveal" key={item.label} style={vars({ "--i": i })}>
              <Blob nom={TACHES[i % 4]} className="repere__tache" morph />
              <p className="repere__chiffre">
                <Valeur valeur={item.valeur} />
              </p>
              <p className="repere__label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Frise({ bloc }: { bloc: B<"frise"> }) {
  return (
    <Section id={bloc.id} fond={bloc.fond}>
      <div className="duo">
        <div className="duo__tete">
          <Tete surtitre={bloc.surtitre} titre={bloc.titre} intro={bloc.intro} />
        </div>
        <ol className={cn("frise", bloc.prospective && "frise--prospective")}>
          {bloc.items.map((item, i) => (
            <li className={cn("reveal", item.aVenir && "is-avenir")} key={item.date} style={vars({ "--i": i % 3 })}>
              <span className="frise__date">{item.date}</span>
              <p>{item.texte}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export function Etapes({ bloc }: { bloc: B<"etapes"> }) {
  return (
    <Section id={bloc.id} fond={bloc.fond}>
      <Tete surtitre={bloc.surtitre} titre={bloc.titre} intro={bloc.intro} />
      <ol className="etapes" style={vars({ "--n": bloc.items.length })}>
        {bloc.items.map((item, i) => (
          <li className="etape reveal" key={item.titre} style={vars({ "--i": i })}>
            <span className="etape__n">
              <Blob nom={TACHES[i % 4]} etat={1} className="etape__tache" morph />
              {i + 1}
            </span>
            <h3>{item.titre}</h3>
            <p>{item.texte}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Cartes({ bloc }: { bloc: B<"cartes"> }) {
  const colonnes = bloc.colonnes ?? Math.min(bloc.items.length, 3);
  const n = anaphore(bloc.items.map((carte) => carte.titre));
  return (
    <Section id={bloc.id} fond={bloc.fond}>
      <Tete surtitre={bloc.surtitre} titre={bloc.titre} intro={bloc.intro} />
      <div className={cn("tuiles", colonnes > 3 && "tuiles--dense")} style={vars({ "--n": colonnes })}>
        {bloc.items.map((carte, i) => (
          <article className="tuile reveal" key={carte.titre} style={vars({ "--i": i % colonnes })}>
            {carte.icone ? (
              <span className="tuile__ico">
                <Blob nom={TACHES[i % 4]} etat={1} className="tuile__tache" morph />
                <Icon name={carte.icone} />
              </span>
            ) : (
              <span className="tuile__n">{String(i + 1).padStart(2, "0")}</span>
            )}
            {carte.surtitre && <p className="tuile__k">{carte.surtitre}</p>}
            <h3>
              <Intitule n={n}>{carte.titre}</Intitule>
            </h3>
            <p>{carte.texte}</p>
            {carte.bouton && (
              <Vers vers={carte.bouton.vers} className="lien">
                {carte.bouton.label}
                <Icon name="arrow" />
              </Vers>
            )}
          </article>
        ))}
      </div>
      {bloc.citation && <blockquote className="exergue exergue--centre reveal">«&nbsp;{bloc.citation}&nbsp;»</blockquote>}
      {bloc.conclusion && <p className="bloc__conclusion reveal">{bloc.conclusion}</p>}
      {bloc.corps && (
        <div className="bloc__suite">
          <Corps corps={bloc.corps} recit />
        </div>
      )}
      {bloc.boutons && <Boutons boutons={bloc.boutons} sombre={bloc.fond === "brun"} />}
    </Section>
  );
}

export function Accordeon({ bloc }: { bloc: B<"accordeon"> }) {
  return (
    <Section id={bloc.id} fond={bloc.fond}>
      <div className="duo">
        <div className="duo__tete">
          <Tete surtitre={bloc.surtitre} titre={bloc.titre} intro={bloc.intro} />
        </div>
        <div className="plis">
          {bloc.items.map((item, i) => (
            <details className="pli reveal" key={item.titre} open={i === 0} style={vars({ "--i": i })}>
              <summary>
                <span className="pli__n">{ROMAINS[i]}</span>
                <span className="pli__t">
                  <strong>{item.titre}</strong>
                  {item.resume && <span>{item.resume}</span>}
                </span>
                <span className="pli__plus" aria-hidden="true" />
              </summary>
              <Corps corps={item.corps} recit anime={false} />
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function CitationBloc({ bloc }: { bloc: B<"citation"> }) {
  return (
    <Section id={bloc.id} fond="brun" className="bloc-citation">
      <blockquote className="grande-citation reveal">
        <p>«&nbsp;{bloc.texte}&nbsp;»</p>
        {bloc.source && <cite>{bloc.source}</cite>}
      </blockquote>
    </Section>
  );
}

/** Encadré de mise en avant : une carte claire au contour organique, cerclée d'un anneau d'or. */
export function Encadre({ bloc }: { bloc: B<"encadre"> }) {
  return (
    <Section id={bloc.id} fond={bloc.fond}>
      <div className={cn("encadre reveal", bloc.photo && "encadre--photo")}>
        <Blob nom="anneau" etat={1} className="encadre__anneau" trait morph />
        <div>
          <Tete surtitre={bloc.surtitre} titre={bloc.titre} intro={bloc.intro} anime={false} />
          <Corps corps={bloc.corps} recit anime={false} />
          {bloc.boutons && <Boutons boutons={bloc.boutons} anime={false} />}
        </div>
        {bloc.photo && <Visuel photo={bloc.photo} legende />}
      </div>
    </Section>
  );
}

export function Liste({ bloc }: { bloc: B<"liste"> }) {
  const style = bloc.style ?? "puces";
  const n = style === "manifeste" ? anaphore(bloc.items.map((item) => item.titre)) : 0;
  // Une liste de questions : ce sont celles des décideurs, posées dans une autre voix que la sienne.
  const questions = style === "puces" && bloc.items.every((item) => !item.texte && /\?$/.test(item.titre));
  return (
    <Section id={bloc.id} fond={bloc.fond}>
      <div className="duo">
        <div className="duo__tete">
          <Tete surtitre={bloc.surtitre} titre={bloc.titre} intro={bloc.intro} />
          {bloc.boutons && <Boutons boutons={bloc.boutons} sombre={bloc.fond === "brun"} />}
        </div>
        <div>
          {style === "manifeste" && (
            <ol className="manifeste">
              {bloc.items.map((item, i) => (
                <li className="reveal" key={item.titre} style={vars({ "--i": i % 3 })}>
                  <span>
                    <Intitule n={n}>{item.titre}</Intitule>
                  </span>
                </li>
              ))}
            </ol>
          )}
          {style === "definitions" && (
            <dl className="definitions">
              {bloc.items.map((item) => (
                <div className="reveal" key={item.titre}>
                  <dt>{item.titre}</dt>
                  <dd>{item.texte}</dd>
                </div>
              ))}
            </dl>
          )}
          {style === "telechargements" && (
            <ul className="docs">
              {bloc.items.map((item, i) => (
                <li className="reveal" key={item.titre}>
                  <span className="docs__n">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <strong>{item.titre}</strong>
                    {item.texte && <span>{item.texte}</span>}
                  </span>
                  <a className="lien" href="#">
                    Télécharger
                    <Icon name="arrow" />
                  </a>
                </li>
              ))}
            </ul>
          )}
          {(style === "puces" || style === "numeros") && (
            <ul className={cn("points", style === "numeros" && "points--numeros", questions && "points--questions")}>
              {bloc.items.map((item) => (
                <li className="reveal" key={item.titre}>
                  <strong>{questions ? <Titre>{item.titre}</Titre> : item.titre}</strong>
                  {item.texte && <span>{item.texte}</span>}
                </li>
              ))}
            </ul>
          )}
          {bloc.signature && <p className="signature__nom reveal">{bloc.signature}</p>}
          {bloc.conclusion && <p className="bloc__conclusion reveal">{bloc.conclusion}</p>}
          {bloc.note && <p className="gabarit reveal">{bloc.note}</p>}
        </div>
      </div>
    </Section>
  );
}

/** Texte juridique : sommaire collant à gauche, articles à droite. */
export function Juridique({ bloc }: { bloc: B<"juridique"> }) {
  const ancre = (i: number) => `article-${i + 1}`;
  return (
    <Section id={bloc.id} fond={bloc.fond}>
      <div className="duo">
        <nav className="duo__tete sommaire" aria-label="Sommaire">
          <p className="surtitre">Sommaire</p>
          <ol>
            {bloc.sections.map((section, i) => (
              <li key={section.titre}>
                <a href={`#${ancre(i)}`}>{section.titre}</a>
              </li>
            ))}
          </ol>
        </nav>
        <div>
          {bloc.sections.map((section, i) => (
            <section className="article" id={ancre(i)} key={section.titre}>
              <h2>{section.titre}</h2>
              <Corps corps={section.corps} anime={false} />
            </section>
          ))}
          {bloc.maj && <p className="gabarit">{bloc.maj}</p>}
        </div>
      </div>
    </Section>
  );
}

export function Galerie({ bloc }: { bloc: B<"galerie"> }) {
  return (
    <Section id={bloc.id} fond={bloc.fond}>
      <Tete surtitre={bloc.surtitre} titre={bloc.titre} intro={bloc.intro} />
      {bloc.categories && (
        <div className="puces reveal">
          {bloc.categories.map((categorie, i) => (
            <button className={cn("puce", i === 0 && "is-on")} type="button" key={categorie} aria-pressed={i === 0}>
              {categorie}
            </button>
          ))}
        </div>
      )}
      <div className="galerie">
        {bloc.vignettes.map((vignette) => {
          const photo = typeof vignette === "string" ? { legende: vignette } : vignette;
          return (
            <Visuel photo={photo} className="reveal" legende sizes="(max-width: 960px) 50vw, 640px" key={photo.legende} />
          );
        })}
      </div>
      {bloc.note && <p className="gabarit reveal">{bloc.note}</p>}
      {bloc.boutons && <Boutons boutons={bloc.boutons} />}
    </Section>
  );
}

/** Registre filtrable : trois lignes de gabarit tant que les entrées réelles ne sont pas saisies. */
export function Registre({ bloc }: { bloc: B<"registre"> }) {
  return (
    <Section id={bloc.id} fond={bloc.fond}>
      <Tete surtitre={bloc.surtitre} titre={bloc.titre} intro={bloc.intro} />
      {bloc.logos && (
        <div className="logos logos--cinq reveal" aria-hidden="true">
          {[1, 2, 3, 4, 5].map((n) => (
            <span key={n}>Logo média</span>
          ))}
        </div>
      )}
      <div className="puces reveal">
        {bloc.filtres.map((filtre) => (
          <button className="puce" type="button" key={filtre}>
            {filtre}
            <Icon name="chev" />
          </button>
        ))}
      </div>
      <ul className="registre" style={vars({ "--n": bloc.gabarit.length })}>
        {[1, 2, 3].map((ligne) => (
          <li className="reveal" key={ligne}>
            {bloc.gabarit.map((champ) => (
              <span key={champ}>{champ}</span>
            ))}
          </li>
        ))}
      </ul>
      {bloc.note && <p className="gabarit reveal">{bloc.note}</p>}
      {bloc.boutons && <Boutons boutons={bloc.boutons} />}
    </Section>
  );
}

export function Coordonnees({ bloc }: { bloc: B<"coordonnees"> }) {
  return (
    <Section id={bloc.id} fond={bloc.fond}>
      <Tete surtitre={bloc.surtitre} titre={bloc.titre} intro={bloc.intro} />
      <div className="tuiles" style={vars({ "--n": bloc.items.length })}>
        {bloc.items.map((item) => (
          <div className="tuile coord reveal" key={item.titre}>
            <h3>{item.titre}</h3>
            <ul>
              {item.champs.map((champ) => (
                <li key={champ}>
                  <span>{champ}</span>
                  <em>à renseigner</em>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {bloc.carte && <Visuel photo={{ legende: bloc.carte }} className="vide--large reveal" />}
    </Section>
  );
}

/** Fin de page : renvoi vers la suite, sur une île claire. */
export function Suite({ bloc }: { bloc: B<"suite"> }) {
  return (
    <section className="page-suite bande bande--ivoire" id={bloc.id}>
      <div className="wrap">
        <div className="ile ile--claire reveal" data-reveal="zoom">
          <Blob nom="fond" etat={1} className="ile__nappe ile__nappe--1" morph />
          <Blob nom="nappe" className="ile__nappe ile__nappe--2" morph />
          <Blob nom="anneau" className="ile__anneau" trait morph />
          <div>
            {bloc.titre && (
              <h2 className="h2">
                <Titre>{bloc.titre}</Titre>
              </h2>
            )}
            {bloc.texte && <p className="chapo">{bloc.texte}</p>}
          </div>
          <Boutons boutons={bloc.boutons} anime={false} />
        </div>
      </div>
    </section>
  );
}
