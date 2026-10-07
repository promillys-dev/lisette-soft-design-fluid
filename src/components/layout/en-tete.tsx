"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/icones";
import { Lien } from "@/components/ui/lien";
import type { Forme } from "@/lib/formes";
import { lien } from "@/lib/liens";
import { contact, menu, utilitaires } from "@/lib/menu";
import { cn } from "@/lib/utils";

/** Nom de la personnalité ; renvoie à l'accueil (premier des dix menus). */
export function Marque({ forme }: { forme: Forme }) {
  return (
    <Lien forme={forme} vers={{}} className="marque" aria-label="Lisette Claudia TAME NJAMBE, accueil">
      <span className="marque__nom">Lisette Claudia TAME&nbsp;NJAMBE</span>
      <span className="marque__sous">Industrielle · Chevalier de l’Ordre de la Valeur</span>
    </Lien>
  );
}

/**
 * En-tête collant et menu principal (défini dans lib/menu.ts).
 * Bureau : sous-menus déroulants au survol et au clavier (CSS). En dessous de 1230 px :
 * bouton burger et tiroir latéral en accordéon. L'en-tête se resserre quand la page défile
 * (html[data-defile], posé par Effets). La page courante est signalée (aria-current).
 */
export function EnTete({ forme }: { forme: Forme }) {
  const chemin = usePathname();
  const [ouvert, setOuvert] = useState(false);
  const burger = useRef<HTMLButtonElement>(null);
  const fermer = useRef<HTMLButtonElement>(null);
  const courante = (slug: string) => (chemin === lien(forme, { page: slug }) ? "page" : undefined);

  // Tiroir ouvert : page figée, fermeture à la touche Échap, focus rendu au burger.
  useEffect(() => {
    if (!ouvert) return;
    const retour = burger.current;
    document.body.style.overflow = "hidden";
    fermer.current?.focus();
    const touche = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOuvert(false);
    };
    document.addEventListener("keydown", touche);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", touche);
      retour?.focus();
    };
  }, [ouvert]);

  return (
    <>
      <header className="entete">
        <div className="wrap">
          <div className="entete__in">
            <Marque forme={forme} />

            <nav className="nav" aria-label="Navigation principale">
              <ul className="nav__liste">
                {menu.map((item) => (
                  <li className="nav__item" key={item.slug}>
                    <Lien
                      forme={forme}
                      vers={{ page: item.slug }}
                      className={cn("nav__lien", item.slug === "lctv" && "nav__lien--tv")}
                      aria-current={courante(item.slug)}
                    >
                      {item.court}
                    </Lien>
                    <div className="sous">
                      <p className="sous__titre">{item.titre}</p>
                      {item.rubriques.map((rubrique) => (
                        <Lien forme={forme} vers={{ page: item.slug, ancre: rubrique.ancre }} key={rubrique.label}>
                          {rubrique.label}
                        </Lien>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </nav>

            <Lien
              forme={forme}
              vers={{ page: contact.slug }}
              className="btn btn--petit entete__contact"
              aria-current={courante(contact.slug)}
            >
              {contact.court}
            </Lien>
            <button
              ref={burger}
              className="burger"
              type="button"
              aria-label="Ouvrir le menu"
              aria-expanded={ouvert}
              aria-controls="tiroir"
              onClick={() => setOuvert(true)}
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>

      <div className={cn("voile", ouvert && "is-open")} onClick={() => setOuvert(false)} />
      <aside className={cn("tiroir", ouvert && "is-open")} id="tiroir" aria-label="Menu" inert={!ouvert}>
        <div className="tiroir__tete">
          <span className="surtitre surtitre--clair">Menu</span>
          <button
            ref={fermer}
            className="tiroir__fermer"
            type="button"
            aria-label="Fermer le menu"
            onClick={() => setOuvert(false)}
          >
            <Icon name="close" />
          </button>
        </div>
        {[...menu, contact].map((item) => (
          <details key={item.slug}>
            <summary>{item.titre}</summary>
            <Lien forme={forme} vers={{ page: item.slug }} onClick={() => setOuvert(false)}>
              Voir la page
            </Lien>
            {item.rubriques.map((rubrique) => (
              <Lien
                forme={forme}
                vers={{ page: item.slug, ancre: rubrique.ancre }}
                key={rubrique.label}
                onClick={() => setOuvert(false)}
              >
                {rubrique.label}
              </Lien>
            ))}
          </details>
        ))}
        <div className="tiroir__pied">
          <Lien forme={forme} vers={{ page: contact.slug }} className="btn btn--or" onClick={() => setOuvert(false)}>
            {contact.court}
          </Lien>
          <Lien
            forme={forme}
            vers={utilitaires.medias.vers}
            className="btn btn--clair"
            onClick={() => setOuvert(false)}
          >
            {utilitaires.medias.label}
          </Lien>
        </div>
      </aside>
    </>
  );
}
