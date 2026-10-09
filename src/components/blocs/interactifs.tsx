"use client";

import { useEffect, useState, type FormEvent } from "react";
import { type B, Boutons, ROMAINS, Section, TACHES, Tete, Vers, Visuel } from "@/components/blocs/base";
import { Blob } from "@/components/ui/blob";
import { CarteCameroun, useSiteActif } from "@/components/ui/carte-cameroun";
import { Icon } from "@/components/ui/icones";
import type { Champ, Formulaire } from "@/lib/blocs";
import { sites } from "@/lib/carte";
import { cn, vars } from "@/lib/utils";

const SIGNATURE = "Lisette Claudia TAME NJAMBE";

/** Bouton « Copier » : place le texte dans le presse-papiers et le confirme brièvement. */
export function Copier({ texte, label = "Copier" }: { texte: string; label?: string }) {
  const [fait, setFait] = useState(false);
  const copier = async () => {
    try {
      await navigator.clipboard.writeText(texte);
      setFait(true);
      window.setTimeout(() => setFait(false), 1800);
    } catch {
      // Presse-papiers indisponible (contexte non sécurisé) : le texte reste sélectionnable à la main.
    }
  };
  return (
    <button className={cn("copier", fait && "is-fait")} type="button" onClick={copier} aria-live="polite">
      {fait ? "Copié" : label}
    </button>
  );
}

/** Citations prêtes à reprendre, classées par thème. */
export function Citations({ bloc }: { bloc: B<"citations"> }) {
  return (
    <Section id={bloc.id} fond={bloc.fond}>
      <Tete surtitre={bloc.surtitre} titre={bloc.titre} intro={bloc.intro} />
      {bloc.groupes.map((groupe, g) => (
        <div className="citations__groupe" key={groupe.theme ?? g}>
          {groupe.theme && <h3 className="citations__theme">{groupe.theme}</h3>}
          <div className="citations">
            {groupe.citations.map((citation, i) => (
              <figure className="cit reveal" key={citation} style={vars({ "--i": i % 3 })}>
                <blockquote>«&nbsp;{citation}&nbsp;»</blockquote>
                <Copier texte={`« ${citation} » ${SIGNATURE}`} />
              </figure>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}

/** Salle de presse · biographies officielles, chacune avec Copier et Télécharger. */
export function Biographies({ bloc }: { bloc: B<"biographies"> }) {
  return (
    <Section id={bloc.id} fond={bloc.fond}>
      <div className="duo">
        <div className="duo__tete">
          <Tete surtitre={bloc.surtitre} titre={bloc.titre} intro={bloc.intro} />
          {bloc.note && <p className="gabarit reveal">{bloc.note}</p>}
        </div>
        <div className="plis">
          {bloc.items.map((bio, i) => (
            <details className="pli reveal" key={bio.titre} open={i === 0}>
              <summary>
                <span className="pli__n">{ROMAINS[i]}</span>
                <span className="pli__t">
                  <strong>{bio.titre}</strong>
                </span>
                <span className="pli__plus" aria-hidden="true" />
              </summary>
              <div className="prose" lang={bio.langue}>
                {bio.corps.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
              <div className="pli__actions">
                <Copier texte={bio.corps.join("\n\n")} />
                <a className="lien" href="#">
                  Télécharger
                  <Icon name="arrow" />
                </a>
              </div>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

/** Tribunes · bibliothèque : filtre par thème et recherche dans les titres et les accroches. */
export function Bibliotheque({ bloc }: { bloc: B<"bibliotheque"> }) {
  const [theme, setTheme] = useState(bloc.themes[0]);
  const [requete, setRequete] = useState("");
  const mots = requete.trim().toLowerCase();
  const cartes = bloc.cartes.filter(
    (carte) =>
      (theme === bloc.themes[0] || carte.theme.includes(theme)) &&
      (!mots || `${carte.titre} ${carte.accroche ?? ""}`.replace(/[  ]/g, " ").toLowerCase().includes(mots)),
  );

  return (
    <Section id={bloc.id} fond={bloc.fond} className="biblio">
      <Tete surtitre={bloc.surtitre} titre={bloc.titre} intro={bloc.intro} />
      <div className="biblio__barre reveal">
        <label className="recherche">
          <Icon name="search" />
          <span className="sr-only">{bloc.recherche}</span>
          <input type="search" placeholder={bloc.recherche} value={requete} onChange={(e) => setRequete(e.target.value)} />
        </label>
        <label className="tri">
          <span className="sr-only">Trier les tribunes</span>
          <select defaultValue={bloc.tri[0]}>
            {bloc.tri.map((tri) => (
              <option key={tri}>{tri}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="puces reveal" role="group" aria-label="Thèmes">
        {bloc.themes.map((t) => (
          <button
            className={cn("puce", t === theme && "is-on")}
            type="button"
            key={t}
            aria-pressed={t === theme}
            onClick={() => setTheme(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="tribunes__grille">
        {cartes.map((carte) => (
          <article className={cn("tribune", carte.aVenir && "tribune--avenir")} key={carte.titre}>
            <div className="tribune__haut">
              <span className="etiquette">{carte.theme}</span>
              {carte.aVenir && <span className="etiquette etiquette--trait">À paraître</span>}
              {carte.parution && <span className="tribune__rang">{carte.parution}</span>}
            </div>
            <h3>{carte.titre}</h3>
            <p className="tribune__signature">Par {SIGNATURE}</p>
            {carte.accroche && <p>{carte.accroche}</p>}
            {/* Sans PDF, les deux liens restent neutres : le texte intégral n'est pas encore fourni. */}
            {!carte.aVenir && (
              <div className="tribune__actions">
                <Vers
                  vers={carte.pdf ? { url: carte.pdf } : undefined}
                  className="lien"
                  aria-label={`Lire la tribune : ${carte.titre}${carte.pdf ? " (PDF, nouvel onglet)" : ""}`}
                >
                  Lire
                  <Icon name="arrow" />
                </Vers>
                <Vers
                  vers={carte.pdf ? { url: carte.pdf, telecharger: true } : undefined}
                  className="lien"
                  aria-label={`Télécharger la tribune en PDF : ${carte.titre}`}
                >
                  Télécharger
                  <Icon name="download" />
                </Vers>
              </div>
            )}
            <span className="tribune__guillemet" aria-hidden="true">
              «
            </span>
          </article>
        ))}
        {cartes.length === 0 && <p className="biblio__vide">Aucune tribune ne correspond à cette recherche.</p>}
      </div>
      {bloc.note && <p className="gabarit">{bloc.note}</p>}
    </Section>
  );
}

/** Carte du Cameroun autonome (les sites défilent seuls), pour illustrer un texte. */
export function CarteAuto() {
  const { carte, actif, viser } = useSiteActif();
  return <CarteCameroun actif={actif} viser={viser} ref={carte} />;
}

/** Réalisations · carte interactive : un clic sur un site ouvre sa fiche. */
export function Sites({ bloc }: { bloc: B<"sites"> }) {
  const { carte, actif, viser, choisir } = useSiteActif(false);
  const fiche = bloc.fiches.find((f) => f.site === actif) ?? bloc.fiches[0];
  const site = sites.find((s) => s.id === fiche.site) ?? sites[0];

  return (
    <Section id={bloc.id} fond={bloc.fond}>
      <Tete surtitre={bloc.surtitre} titre={bloc.titre} intro={bloc.intro} />
      <div className="sites-carte">
        <div className="sites-carte__carte reveal" data-reveal="gauche">
          <Blob nom="fond" etat={2} className="sites-carte__nappe" morph />
          <Blob nom="anneau" etat={1} className="sites-carte__anneau" trait />
          <CarteCameroun actif={actif} viser={viser} ref={carte} />
        </div>
        <div className="fiche reveal">
          <div className="fiche__onglets" role="tablist" aria-label="Sites industriels">
            {sites.map((s) => (
              <button
                className={cn("puce", s.id === actif && "is-on")}
                type="button"
                role="tab"
                aria-selected={s.id === actif}
                key={s.id}
                onClick={() => choisir(s.id)}
              >
                {s.nom}
              </button>
            ))}
          </div>
          <article className="fiche__corps" key={fiche.site} role="tabpanel">
            <p className="fiche__lieu">
              {site.nom} · {site.detail.split(" · ")[0]}
              <span className={cn("etiquette", site.enProjet && "etiquette--or")}>
                {site.enProjet ? "Projet en préparation" : "En activité"}
              </span>
            </p>
            <h3>{fiche.titre}</h3>
            <dl>
              <div>
                <dt>Filière</dt>
                <dd>{fiche.filiere}</dd>
              </div>
              <div>
                <dt>{site.enProjet ? "Statut" : "Repères"}</dt>
                <dd>{fiche.reperes}</dd>
              </div>
            </dl>
            {fiche.corps.map((para) => (
              <p key={para}>{para}</p>
            ))}
            <Visuel photo={fiche.photo ?? { legende: fiche.photos }} legende sizes="(max-width: 960px) 90vw, 680px" />
          </article>
        </div>
      </div>
    </Section>
  );
}

function ChampVue({ champ, id }: { champ: Champ; id: string }) {
  const type = champ.type ?? "texte";
  if (type === "case") {
    return (
      <label className="champ champ--case champ--large">
        <input type="checkbox" name={id} required={champ.requis} />
        <span>{champ.label}</span>
      </label>
    );
  }
  return (
    <label className={cn("champ", (champ.large || type === "zone") && "champ--large")}>
      <span>{champ.label}</span>
      {type === "zone" && <textarea name={id} required={champ.requis} />}
      {type === "choix" && (
        <select name={id} required={champ.requis} defaultValue="">
          <option value="" disabled>
            Choisir
          </option>
          {champ.options?.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      )}
      {type !== "zone" && type !== "choix" && (
        <input
          name={id}
          type={type === "texte" ? "text" : type === "fichier" ? "file" : type}
          required={champ.requis}
        />
      )}
    </label>
  );
}

/**
 * Un ou plusieurs formulaires. Avec des « portes d'entrée », chaque carte ouvre le formulaire
 * adapté ; l'ancre de l'adresse (#etats, #medias…) sélectionne la porte à l'arrivée.
 * Maquette : aucun envoi réel, le message de confirmation s'affiche à la place du formulaire.
 */
export function Formulaires({ bloc }: { bloc: B<"formulaires"> }) {
  const [choisi, setChoisi] = useState(bloc.formulaires[0].id);
  const [envoye, setEnvoye] = useState(false);
  const formulaire: Formulaire = bloc.formulaires.find((f) => f.id === choisi) ?? bloc.formulaires[0];
  const portes = bloc.formulaires.filter((f) => f.porte);

  useEffect(() => {
    const lire = () => {
      const ancre = window.location.hash.slice(1);
      if (bloc.formulaires.some((f) => f.id === ancre)) {
        setChoisi(ancre);
        setEnvoye(false);
      }
    };
    const frame = requestAnimationFrame(lire);
    window.addEventListener("hashchange", lire);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", lire);
    };
  }, [bloc.formulaires]);

  const envoyer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnvoye(true);
  };

  return (
    <Section id={bloc.id} fond={bloc.fond}>
      <Tete surtitre={bloc.surtitre} titre={bloc.titre} intro={bloc.intro} />
      {portes.length > 1 && (
        <div className="portes-form reveal" style={vars({ "--n": portes.length })}>
          {portes.map((f, i) => (
            <button
              className={cn("porte-form", f.id === choisi && "is-on")}
              type="button"
              id={f.id}
              key={f.id}
              aria-pressed={f.id === choisi}
              onClick={() => {
                setChoisi(f.id);
                setEnvoye(false);
              }}
            >
              {f.porte?.icone && (
                <span className="tuile__ico">
                  <Blob nom={TACHES[i % 4]} etat={1} className="tuile__tache" morph />
                  <Icon name={f.porte.icone} />
                </span>
              )}
              <h3>{f.porte?.titre}</h3>
              <p>{f.porte?.texte}</p>
              <span className="porte-form__suite">
                {f.porte?.bouton}
                <Icon name="arrow" />
              </span>
            </button>
          ))}
        </div>
      )}

      {envoye ? (
        <div className="confirmation" role="status">
          <h3>{bloc.confirmation.titre}</h3>
          <p>{bloc.confirmation.texte}</p>
          {bloc.confirmation.signature && <p className="signature__nom">{bloc.confirmation.signature}</p>}
          {bloc.confirmation.boutons && <Boutons boutons={bloc.confirmation.boutons} anime={false} />}
        </div>
      ) : (
        <form className="formulaire reveal" key={formulaire.id} onSubmit={envoyer}>
          <div className="formulaire__tete">
            <h3>{formulaire.titre}</h3>
            {formulaire.intro && <p>{formulaire.intro}</p>}
          </div>
          <div className="champs">
            {formulaire.champs.map((champ, i) => (
              <ChampVue champ={champ} id={`${formulaire.id}-${i}`} key={champ.label} />
            ))}
            <div className="formulaire__pied">
              <button className="btn" type="submit">
                {formulaire.bouton}
                <Icon name="arrow" />
              </button>
              {formulaire.note && <p className="formulaire__note">{formulaire.note}</p>}
            </div>
          </div>
        </form>
      )}
      {bloc.protection && (
        <p className="formulaire__protection">
          {bloc.protection.texte}{" "}
          <Vers vers={bloc.protection.lien.vers} className="lien-texte">
            {bloc.protection.lien.label}
          </Vers>
        </p>
      )}
    </Section>
  );
}
