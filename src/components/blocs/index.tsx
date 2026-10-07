import { Fragment } from "react";
import {
  Accordeon,
  Cartes,
  Chiffres,
  CitationBloc,
  Coordonnees,
  Encadre,
  Entete,
  Etapes,
  Frise,
  Galerie,
  Juridique,
  Liste,
  Registre,
  Suite,
  Texte,
} from "@/components/blocs/editorial";
import { Bibliotheque, Biographies, Citations, Formulaires, Sites } from "@/components/blocs/interactifs";
import { Filtres, Mosaique, Programmes, TribuneUne, VideoUne } from "@/components/blocs/medias";
import { Lettre } from "@/components/sections/lettre";
import { Vague } from "@/components/ui/vague";
import type { Bloc, Fond, Page } from "@/lib/blocs";
import { contact, menu } from "@/lib/menu";

/** Numéro de la page dans le menu (Accueil = 01), affiché en grand dans l'en-tête. */
function numero(slug: string) {
  const rang = [...menu, contact].findIndex((item) => item.slug === slug);
  return rang < 0 ? "§" : String(rang + 2).padStart(2, "0");
}

/**
 * Fond de la bande que rend un bloc. L'en-tête de page est en sable, et ce qui le prolonge
 * (chiffres, barre de filtres) aussi ; les îles (lettre, suite) sont posées sur l'ivoire.
 */
function fondDe(bloc: Bloc): Fond {
  switch (bloc.type) {
    case "entete":
    case "chiffres":
    case "filtres":
      return "sable";
    case "citation":
      return "brun";
    case "lettre":
    case "suite":
      return "ivoire";
    default:
      return bloc.fond ?? "ivoire";
  }
}

function Vue({ bloc, slug, ouverture }: { bloc: Bloc; slug: string; ouverture: boolean }) {
  switch (bloc.type) {
    case "entete":
      return <Entete bloc={bloc} numero={numero(slug)} />;
    case "texte":
      return <Texte bloc={bloc} lettrine={ouverture} />;
    case "chiffres":
      return <Chiffres bloc={bloc} />;
    case "frise":
      return <Frise bloc={bloc} />;
    case "etapes":
      return <Etapes bloc={bloc} />;
    case "cartes":
      return <Cartes bloc={bloc} />;
    case "accordeon":
      return <Accordeon bloc={bloc} />;
    case "citation":
      return <CitationBloc bloc={bloc} />;
    case "citations":
      return <Citations bloc={bloc} />;
    case "encadre":
      return <Encadre bloc={bloc} />;
    case "liste":
      return <Liste bloc={bloc} />;
    case "galerie":
      return <Galerie bloc={bloc} />;
    case "registre":
      return <Registre bloc={bloc} />;
    case "sites":
      return <Sites bloc={bloc} />;
    case "formulaires":
      return <Formulaires bloc={bloc} />;
    case "video-une":
      return <VideoUne bloc={bloc} />;
    case "programmes":
      return <Programmes bloc={bloc} />;
    case "mosaique":
      return <Mosaique bloc={bloc} />;
    case "filtres":
      return <Filtres bloc={bloc} />;
    case "tribune-une":
      return <TribuneUne bloc={bloc} />;
    case "bibliotheque":
      return <Bibliotheque bloc={bloc} />;
    case "biographies":
      return <Biographies bloc={bloc} />;
    case "coordonnees":
      return <Coordonnees bloc={bloc} />;
    case "lettre":
      return (
        <Lettre
          forme="fluide"
          id={bloc.id}
          surtitre={bloc.surtitre}
          titre={bloc.titre}
          texte={bloc.texte}
          champ={bloc.champ}
          bouton={bloc.bouton}
          note={bloc.note ?? ""}
        />
      );
    case "juridique":
      return <Juridique bloc={bloc} />;
    case "suite":
      return <Suite bloc={bloc} />;
  }
}

/**
 * Rend une page intérieure (version fluide) : ses blocs, dans l'ordre du contenu. Dès que le
 * fond change d'un bloc au suivant, une houle les sépare ; la dernière mène au pied de page.
 */
export function Blocs({ page }: { page: Page }) {
  // Le premier récit de la page s'ouvre sur une lettrine.
  const ouverture = page.blocs.findIndex((bloc) => bloc.type === "texte");
  const fonds = page.blocs.map(fondDe);
  return (
    <>
      {page.blocs.map((bloc, i) => (
        <Fragment key={`${bloc.type}-${bloc.id ?? i}`}>
          {i > 0 && fonds[i - 1] !== fonds[i] && (
            <Vague forme="fluide" de={fonds[i - 1]} vers={fonds[i]} motif={i} miroir={i % 2 === 1} />
          )}
          <Vue bloc={bloc} slug={page.slug} ouverture={i === ouverture} />
        </Fragment>
      ))}
      <Vague forme="fluide" de={fonds[fonds.length - 1]} vers="nuit" motif={3} miroir />
    </>
  );
}
