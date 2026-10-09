import type { Page } from "@/lib/blocs";
import { versReseau } from "@/lib/reseaux";

/**
 * Menu 8 · LCTV — DocumentationLisette/LCTN_Site_Menu_08_LCTV.pdf
 * Le bloc 5 du document (gabarit de la page d'une vidéo) décrit une autre page, à créer
 * lorsque les vidéos seront disponibles. Les vignettes portent l'habillage de la chaîne en attendant.
 */
export const page: Page = {
  slug: "lctv",
  titre: "LCTV | La chaîne de Lisette Claudia TAME NJAMBE : interviews, discours, reportages en usine",
  description:
    "LCTV réunit les interviews, les discours, les reportages au cœur des usines et les capsules de Lisette Claudia TAME NJAMBE. Vidéos libres d’accès pour le public et pour les médias.",
  blocs: [
    {
      type: "entete",
      surtitre: "LCTV",
      titre: "Bienvenue sur LCTV",
      intro: [
        "L’industrie racontée par celle qui la bâtit.",
        "J’ai créé cette chaîne pour montrer ce que les mots ne suffisent pas à dire. Une usine qui démarre, une équipe au travail, une fève qui devient chocolat, un échange avec des jeunes ou avec des décideurs. Ici, je vous emmène avec moi, sur le terrain et dans mes prises de parole.",
      ],
      boutons: [
        { label: "Regarder la dernière vidéo", vers: { page: "lctv", ancre: "a-la-une" } },
        { label: "S’abonner à la chaîne" },
      ],
      repere: { valeur: "5", legende: "programmes, de l’interview au reportage en usine" },
    },
    {
      type: "filtres",
      filtres: ["Programme", "Année", "Thème", "Lieu", "Langue"],
      recherche: "Rechercher une vidéo",
    },
    {
      type: "video-une",
      id: "a-la-une",
      etiquette: "À la une",
      titre: "Lisette Claudia TAME NJAMBE, bâtir des usines, bâtir des vies",
      meta: "Film de présentation · 2 à 3 minutes",
      resume: "Un film mêlant images des sites, paroles de collaborateurs et sa voix en fil conducteur.",
      image: "chantier",
      boutons: [{ label: "Regarder" }, { label: "Partager" }],
    },
    {
      type: "programmes",
      id: "programmes",
      fond: "sable",
      titre: "Les programmes de la chaîne",
      items: [
        {
          titre: "Interviews",
          images: ["plateau", "interview"],
          texte:
            "Mes entretiens avec la presse écrite, la radio, la télévision et les médias en ligne. J’y réponds aux questions sur mon parcours, mes usines et ma vision de l’industrie.",
        },
        {
          titre: "Discours et conférences",
          images: ["discours"],
          texte:
            "Mes interventions lors de forums, d’inaugurations et de rencontres institutionnelles. Vous y retrouverez notamment mon message aux jeunes entrepreneurs à Rise Africa 2026, au Palais des Sports de Yaoundé, et mes discours d’inauguration.",
        },
        {
          titre: "Au cœur des usines",
          images: ["production", "denky"],
          texte:
            "Des reportages tournés sur nos sites de Mbankomo, de Ngolambélé et de Bangou. La fève qui arrive, les lignes qui tournent, le laboratoire, les équipes. L’industrie telle qu’elle se vit, de l’intérieur.",
        },
        {
          titre: "Une minute, une conviction",
          texte:
            "Des capsules courtes, face caméra, où je partage une idée, une leçon ou un conseil. Un format pensé pour les réseaux sociaux.",
          themes: [
            "Tout commence avec une ou deux machines.",
            "Personne ne vous doit rien.",
            "Pourquoi il faut transformer avant d’exporter.",
            "L’industrie n’attend pas les capitales.",
            "On ne bâtit jamais seul.",
            "Produire ce que l’on donnerait à ses propres enfants.",
          ],
        },
        {
          titre: "Visages de l’industrie",
          images: ["chantier"],
          texte:
            "Des portraits de celles et ceux qui font vivre nos usines : techniciens, opératrices, planteurs partenaires. Parce que cette histoire est d’abord la leur.",
        },
      ],
    },
    {
      type: "mosaique",
      id: "moments",
      surtitre: "Les grands moments",
      titre: "Les moments qui ont compté",
      items: [
        { date: "15 janvier 2025", texte: "Inauguration de l’usine CA’OLY à Mbankomo." },
        { date: "5 mars 2025", texte: "Remise de la médaille de Chevalier de l’Ordre de la Valeur." },
        { date: "Novembre 2025", texte: "Inauguration du site de Ngolambélé, dans la région de l’Est." },
        { date: "2026", texte: "Rise Africa, devant 6 000 jeunes, au Palais des Sports de Yaoundé." },
        {
          date: "26 juin 2026",
          texte: "Inauguration de l’usine DENKY à Bangou, dans la région de l’Ouest.",
          image: "denky",
        },
      ],
    },
    {
      type: "encadre",
      id: "medias",
      fond: "sable",
      surtitre: "Espace médias de LCTV",
      titre: "Vous souhaitez diffuser ces images ?",
      corps: [
        "Les vidéos de LCTV peuvent être reprises par les médias avec la mention « Source : LCTV, Lisette Claudia TAME NJAMBE ». Pour obtenir des fichiers en haute définition, des images brutes de nos usines ou organiser un tournage sur site, adressez votre demande au service de presse.",
      ],
      boutons: [
        { label: "Demander des images", vers: { page: "salle-de-presse", ancre: "contact-presse" } },
        { label: "Organiser un tournage", vers: { page: "salle-de-presse", ancre: "contact-presse" } },
        { label: "Entrer dans la Salle de presse", vers: { page: "salle-de-presse" } },
      ],
    },
    {
      type: "suite",
      id: "suivre",
      titre: "Ne manquez aucune vidéo",
      texte:
        "LCTV est aussi présente sur YouTube et sur les réseaux sociaux. Abonnez-vous pour recevoir chaque nouvelle vidéo dès sa mise en ligne.",
      boutons: [
        // Adresse de la chaîne YouTube à fournir : le bouton reste neutre en attendant.
        { label: "S’abonner sur YouTube", style: "or" },
        { label: "Suivre sur LinkedIn", style: "clair", vers: versReseau("linkedin") },
        { label: "Suivre sur Facebook", style: "clair", vers: versReseau("facebook") },
      ],
    },
  ],
};
