/**
 * Vocabulaire des pages intérieures. Chaque page est une liste de blocs, dans l'ordre du
 * contenu rédactionnel du client (DocumentationLisette/LCTN_Site_Menu_*.pdf) ; le rendu de
 * chaque type de bloc vit dans src/components/blocs/ et src/styles/pages.css (version fluide).
 */
import type { IconName } from "@/components/ui/icones";
import type { PhotoId } from "@/lib/photos";

/**
 * Destination d'un bouton : une page du site (slug du menu) et, au besoin, une ancre.
 * Sans `page` ni `ancre`, le lien est neutre : la ressource (PDF, vidéo, réseau social,
 * site d'une entreprise…) n'existe pas encore.
 */
export type Cible = { page?: string; ancre?: string };
export type Bouton = { label: string; vers?: Cible; style?: "or" | "plein" | "ligne" | "clair" };

/**
 * Un paragraphe, une citation en exergue, une phrase mise en avant, ou un point à intitulé gras.
 * Dans un bloc « texte » sans photo ni encadré, la première citation passe en marge, sous le titre.
 */
export type Para = string | { citation: string } | { accent: string } | { point: string; texte: string };

/**
 * Photo : fichier de la photothèque (lib/photos.ts), ou emplacement réservé décrit par sa
 * légende (« à fournir »). La légende sert de texte alternatif et s'affiche sous l'image.
 */
export type Photo = { legende: string; fichier?: PhotoId };

/** Fond de la bande : ivoire par défaut, sable en alternance, brun pour changer de registre. */
export type Fond = "ivoire" | "sable" | "brun";

type Commun = { id?: string; fond?: Fond; surtitre?: string };
type Tete = Commun & { titre: string; intro?: string };

export type Carte = { icone?: IconName; surtitre?: string; titre: string; texte: string; bouton?: Bouton };

export type Champ = {
  label: string;
  type?: "texte" | "email" | "tel" | "date" | "zone" | "choix" | "fichier" | "case";
  options?: string[];
  /** Le champ occupe toute la largeur du formulaire. */
  large?: boolean;
  requis?: boolean;
};

export type Formulaire = {
  id: string;
  /** Carte d'entrée (page Contact : « quatre portes d'entrée »). */
  porte?: { titre: string; texte: string; bouton: string; icone?: IconName };
  titre: string;
  intro?: string;
  champs: Champ[];
  bouton: string;
  note?: string;
};

export type FicheSite = {
  /** Identifiant du site dans lib/carte.ts (mbankomo, ngolambele, bangou, maroua). */
  site: string;
  titre: string;
  filiere: string;
  reperes: string;
  corps: string[];
  /** Visuel attendu pour ce site ; `photo` quand une image de la photothèque le montre déjà. */
  photos: string;
  photo?: Photo;
};

export type Bloc =
  /* En-tête de page */
  | (Commun & {
      type: "entete";
      surtitre: string;
      titre: string;
      intro: string[];
      mention?: string;
      boutons?: Bouton[];
      photo?: Photo;
      /**
       * Sans photo : le repère de la page, tiré de son contenu (« 2036 », « 500+ »…), ou la carte
       * des sites. À défaut, le numéro de la page dans le menu.
       */
      repere?: { valeur: string; legende: string };
      carte?: boolean;
      /** Accès rapides vers les blocs de la page. */
      acces?: { label: string; ancre: string }[];
    })
  /* Texte éditorial : titre à gauche, récit à droite, encadré ou photo en option */
  | (Commun & {
      type: "texte";
      titre: string;
      corps: Para[];
      encadre?: { titre: string; items: { titre: string; texte?: string }[] };
      photo?: Photo;
      /** Affiche la carte du Cameroun (sites et cap 2036) sous le titre. */
      carte?: boolean;
      /** Schéma dessiné à partir des faits du texte (components/blocs/schemas.tsx). */
      schema?: "echelle";
      boutons?: Bouton[];
    })
  /* Bandeau de chiffres (aucune donnée financière) */
  | (Commun & { type: "chiffres"; titre?: string; items: { valeur: string; label: string }[] })
  /* Frise chronologique verticale */
  | (Tete & {
      type: "frise";
      /** `aVenir` : jalon qui n'est pas encore atteint (repère en creux). */
      items: { date: string; texte: string; aVenir?: boolean }[];
      /** Toute la frise est à venir. */
      prospective?: boolean;
    })
  /* Étapes numérotées (schéma horizontal) */
  | (Tete & { type: "etapes"; items: { titre: string; texte: string }[] })
  /* Grille de cartes */
  | (Tete & {
      type: "cartes";
      colonnes?: 2 | 3 | 4 | 5;
      items: Carte[];
      citation?: string;
      conclusion?: string;
      /** Texte placé sous la grille. */
      corps?: Para[];
      boutons?: Bouton[];
    })
  /* Cartes dépliables */
  | (Tete & { type: "accordeon"; items: { titre: string; resume?: string; corps: Para[] }[] })
  /* Citation seule, en pleine largeur */
  | (Commun & { type: "citation"; texte: string; source?: string })
  /* Citations prêtes à reprendre, avec bouton Copier */
  | (Tete & { type: "citations"; groupes: { theme?: string; citations: string[] }[] })
  /* Encadré de mise en avant */
  | (Tete & { type: "encadre"; corps: Para[]; boutons?: Bouton[]; photo?: Photo })
  /* Liste : puces, numéros, définitions (intitulé + valeur), documents à télécharger, ou manifeste */
  | (Tete & {
      type: "liste";
      style?: "puces" | "numeros" | "definitions" | "telechargements" | "manifeste";
      items: { titre: string; texte?: string }[];
      conclusion?: string;
      signature?: string;
      boutons?: Bouton[];
      note?: string;
    })
  /* Galerie : emplacements réservés tant que les visuels ne sont pas fournis */
  | (Tete & {
      type: "galerie";
      categories?: string[];
      /** Une photo de la photothèque, ou la légende d'un visuel attendu. */
      vignettes: (string | Photo)[];
      note?: string;
      boutons?: Bouton[];
    })
  /* Registre filtrable (communiqués, revue de presse) : gabarit en attendant les entrées réelles */
  | (Tete & {
      type: "registre";
      filtres: string[];
      gabarit: string[];
      logos?: boolean;
      note?: string;
      boutons?: Bouton[];
    })
  /* Carte interactive des sites industriels */
  | (Tete & { type: "sites"; fiches: FicheSite[] })
  /* Un ou plusieurs formulaires (onglets ou « portes d'entrée ») et leur message de confirmation */
  | (Tete & {
      type: "formulaires";
      formulaires: Formulaire[];
      confirmation: { titre: string; texte: string; signature?: string; boutons?: Bouton[] };
      /** Mention sur la protection des données, sous le formulaire. */
      protection?: { texte: string; lien: Bouton };
    })
  /* LCTV : vidéo à la une, programmes en rangées, mosaïque de moments */
  | (Commun & {
      type: "video-une";
      etiquette: string;
      titre: string;
      meta: string;
      resume: string;
      /** Image d'illustration de la vignette, en attendant celle de la vidéo. */
      image?: PhotoId;
      boutons?: Bouton[];
    })
  | (Tete & { type: "programmes"; items: { titre: string; texte: string; themes?: string[]; images?: PhotoId[] }[] })
  | (Tete & { type: "mosaique"; items: { date: string; texte: string; image?: PhotoId }[] })
  /* Barre de recherche et de filtres */
  | (Commun & { type: "filtres"; filtres: string[]; recherche?: string })
  /* Tribunes : tribune à la une, puis bibliothèque filtrable par thème */
  | (Commun & {
      type: "tribune-une";
      rubrique: string;
      titre: string;
      signature: string;
      chapo: string;
      citation: string;
      boutons?: Bouton[];
    })
  | (Tete & {
      type: "bibliotheque";
      themes: string[];
      tri: string[];
      recherche: string;
      cartes: { theme: string; titre: string; accroche?: string; aVenir?: boolean }[];
      note?: string;
    })
  /* Salle de presse : biographies officielles en plusieurs longueurs */
  | (Tete & { type: "biographies"; items: { titre: string; langue?: "en"; corps: string[] }[]; note?: string })
  /* Coordonnées (à renseigner par l'équipe) */
  | (Tete & { type: "coordonnees"; items: { titre: string; champs: string[] }[]; carte?: string })
  /* Inscription à la lettre d'information */
  | (Commun & { type: "lettre"; titre: string; texte: string; champ: string; bouton: string; note?: string })
  /* Texte juridique : sommaire à gauche, articles à droite */
  | (Commun & { type: "juridique"; sections: { titre: string; corps: Para[] }[]; maj?: string })
  /* Bandeau de fin de page : renvoi vers la suite */
  | (Commun & { type: "suite"; titre?: string; texte?: string; boutons: Bouton[] });

export type Page = {
  /** Adresse de la page, identique au slug du menu. */
  slug: string;
  /** Balises de référencement (titre et description du document client). */
  titre: string;
  description: string;
  blocs: Bloc[];
};
