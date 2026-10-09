import { Blob } from "@/components/ui/blob";
import { Icon } from "@/components/ui/icones";
import { Lien } from "@/components/ui/lien";
import type { Forme } from "@/lib/formes";
import { piedDePage } from "@/lib/menu";
import { reseaux } from "@/lib/reseaux";

/**
 * Bloc 12 · Pied de page, présent sur toutes les pages. La vague qui y mène est posée par la
 * page elle-même, qui connaît le fond de son dernier bloc.
 */
export function Pied({ forme }: { forme: Forme }) {
  return (
    <footer className="pied sombre">
      <Blob nom="nappe" etat={1} className="pied__nappe" morph={forme === "fluide"} />
      <Blob nom="anneau" className="pied__anneau" trait />
      <div className="wrap">
        <div className="pied__phrase reveal">
          <p>«&nbsp;Bâtir des usines, c’est bâtir des vies.&nbsp;»</p>
          <span>Lisette Claudia TAME NJAMBE</span>
        </div>
        <div className="pied__grille">
          <div>
            <p className="pied__nom">Lisette Claudia TAME&nbsp;NJAMBE</p>
            <p className="pied__apropos">
              Fondatrice d’Africa Processing Company SA (CA’OLY) et de Meta Invest SA (DENKY).
            </p>
          </div>
          <div>
            <h3>Liens rapides</h3>
            <ul className="pied__colonnes">
              {piedDePage.liens.map((item) => (
                <li key={item.label}>
                  <Lien forme={forme} vers={item.vers}>
                    {item.label}
                  </Lien>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Contacts</h3>
            <ul>
              {piedDePage.contacts.map((item) => (
                <li key={item.label}>
                  <Lien forme={forme} vers={item.vers}>
                    {item.label}
                  </Lien>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Réseaux</h3>
            <ul className="pied__reseaux">
              {reseaux.map((reseau) => (
                <li key={reseau.id}>
                  <Lien forme={forme} vers={{ url: reseau.url }}>
                    <Icon name={reseau.icone} />
                    {reseau.nom}
                  </Lien>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pied__mentions">
          <p>© Lisette Claudia TAME NJAMBE. Tous droits réservés.</p>
          <div>
            {piedDePage.mentions.map((item) => (
              <Lien forme={forme} vers={item.vers} key={item.label}>
                {item.label}
              </Lien>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
