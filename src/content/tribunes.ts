import type { Page } from "@/lib/blocs";
import { documents } from "@/lib/documents";

/**
 * Menu 7 · Tribunes — DocumentationLisette/LCTN_Site_Menu_07_Tribunes.pdf
 * Le bloc 5 du document (gabarit de la page de lecture d'une tribune) décrit une autre page,
 * à créer lorsque les textes intégraux seront fournis. En attendant, les tribunes reçues en PDF
 * (lib/documents.ts) se lisent et se téléchargent depuis leur carte.
 */
export const page: Page = {
  slug: "tribunes",
  titre: "Tribunes | Lisette Claudia TAME NJAMBE : prises de position sur l’industrialisation de l’Afrique",
  description:
    "Toutes les tribunes signées par Lisette Claudia TAME NJAMBE : industrialisation, transformation locale, souveraineté alimentaire, emploi, territoires. À lire en ligne ou à télécharger.",
  blocs: [
    {
      type: "entete",
      surtitre: "Tribunes",
      titre: "Ce que je pense, je l’écris. Ce que j’écris, je le fais.",
      intro: [
        "Je prends la plume lorsque j’estime qu’une idée mérite d’être défendue publiquement. Mes tribunes ne sont pas des exercices de style. Elles naissent du terrain, de ce que je vois dans mes usines, de ce que j’entends auprès des producteurs et des décideurs. Vous les trouverez ici dans leur intégralité, libres de lecture et de citation.",
      ],
      photo: { fichier: "portrait", legende: "Portrait de Lisette Claudia TAME NJAMBE" },
    },
    {
      type: "tribune-une",
      id: "a-la-une",
      rubrique: "Industrialisation de l’Afrique",
      titre: "L’Afrique ne se développera pas sans ses industriels",
      signature: "Par Lisette Claudia TAME NJAMBE",
      chapo:
        "On nous a beaucoup promis : des plans d’émergence, des stratégies à horizon lointain, des conférences sur la transformation structurelle. J’ai lu ces documents, assisté à ces réunions, et j’ai décidé de continuer à construire mes usines. Parce que l’Afrique ne se développera pas avec des discours. Elle se développera par ses propres industries.",
      citation: "Ce que les bailleurs de fonds financent, c’est du contexte. Ce que les industriels construisent, c’est de la réalité.",
      boutons: [
        { label: "Lire la tribune", vers: { url: documents.tribuneIndustriels } },
        { label: "Télécharger en PDF", vers: { url: documents.tribuneIndustriels, telecharger: true } },
      ],
    },
    {
      type: "bibliotheque",
      id: "bibliotheque",
      fond: "sable",
      titre: "La bibliothèque des tribunes",
      themes: [
        "Toutes",
        "Industrialisation",
        "Transformation locale",
        "Souveraineté alimentaire",
        "Emploi et jeunesse",
        "Territoires",
        "Leadership",
      ],
      tri: ["Les plus récentes", "Les plus lues"],
      recherche: "Rechercher un mot ou un sujet",
      // Les tribunes dont le PDF est fourni viennent en tête, la plus récente d'abord.
      cartes: [
        {
          theme: "Territoires",
          titre: "Le développement du Cameroun par les régions.",
          parution: "Septembre 2026",
          accroche:
            "Aucune grande économie ne s’est construite depuis sa seule capitale. Voici pourquoi le Cameroun doit faire de ses dix régions le moteur de son industrialisation.",
          pdf: documents.tribuneRegions,
        },
        {
          theme: "Industrialisation de l’Afrique",
          titre: "L’Afrique ne se développera pas sans ses industriels.",
          accroche:
            "Ni l’aide internationale ni les politiques fiscales ne construisent d’usines à notre place. Plaidoyer pour une industrialisation portée de l’intérieur, et pour des États qui font levier.",
          pdf: documents.tribuneIndustriels,
        },
        {
          theme: "Industrialisation",
          titre: "Le Cameroun n’a pas besoin de discours. Il a besoin d’usines.",
          accroche:
            "L’industrialisation n’est pas un horizon lointain réservé aux pays riches. C’est un choix, que le Cameroun peut faire aujourd’hui et que je m’engage, par mon expertise et par mes actes, à rendre possible.",
        },
        {
          theme: "Transformation locale",
          titre: "Ce que j’ai compris en voyant les autres transformer notre cacao.",
          accroche:
            "Ma vocation est née loin du Cameroun, devant des lignes de production où l’on transformait du cacao camerounais. Récit d’une évidence qui a décidé de tout.",
        },
        {
          theme: "Transformation locale",
          titre: "Pourquoi transformer le cacao au Cameroun est un acte politique autant qu’économique.",
          aVenir: true,
        },
        { theme: "Transformation locale", titre: "Le Cameroun doit transformer avant d’exporter.", aVenir: true },
        { theme: "Territoires", titre: "Industrialiser chaque ville du Cameroun.", aVenir: true },
        { theme: "Souveraineté alimentaire", titre: "Nourrir le Cameroun depuis le Cameroun.", aVenir: true },
        { theme: "Emploi et jeunesse", titre: "Dix usines, dix régions, cinq mille emplois.", aVenir: true },
        { theme: "Leadership", titre: "Être femme dans l’industrie lourde au Cameroun.", aVenir: true },
      ],
      note: "Les tribunes « à paraître » existent dans le fonds éditorial. Elles rejoindront cette page une fois confirmées ou réécrites à la première personne, sous sa signature.",
    },
    {
      type: "citations",
      id: "phrases",
      surtitre: "Phrases à retenir",
      titre: "En quelques mots",
      groupes: [
        {
          citations: [
            "Un pays qui ne transforme pas ses ressources offre sa richesse aux autres.",
            "Ce qui nous a manqué, ce n’est pas la ressource. C’est la décision de transformer.",
            "Je ne cherche pas des donateurs, je cherche des co-constructeurs.",
            "La politique industrielle ne précède pas l’industriel, elle l’accompagne.",
            "Tout commence avec une ou deux machines.",
          ],
        },
      ],
    },
    {
      type: "encadre",
      id: "reprendre",
      fond: "sable",
      surtitre: "Reprendre une tribune",
      titre: "Vous êtes journaliste ou rédacteur en chef ?",
      corps: [
        "Mes tribunes peuvent être reprises, en tout ou en partie, à condition de citer mon nom complet, Lisette Claudia TAME NJAMBE, et la source. Pour une tribune inédite, une contribution sur un sujet d’actualité ou une demande d’entretien, écrivez au service de presse.",
      ],
      boutons: [
        { label: "Proposer un sujet de tribune", vers: { page: "salle-de-presse", ancre: "contact-presse" } },
        { label: "Entrer dans la Salle de presse", vers: { page: "salle-de-presse" } },
      ],
    },
    {
      type: "lettre",
      id: "abonnement",
      surtitre: "Abonnement",
      titre: "Recevoir mes prochaines tribunes",
      texte: "Laissez votre adresse et vous recevrez chaque nouvelle tribune dès sa publication.",
      champ: "Votre adresse électronique",
      bouton: "Je m’abonne",
    },
  ],
};
