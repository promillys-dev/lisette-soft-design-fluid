/**
 * Contenu de la page d'accueil, repris du document client « Menu 1 · Accueil »
 * (DocumentationLisette/LCTN_Site_Menu_01_Accueil.pdf). Les longs paragraphes
 * restent dans les sections ; ici, les données répétées en listes.
 */
import type { IconName } from "@/components/ui/icones";
import type { PhotoId } from "@/lib/photos";

export const seo = {
  title: "Lisette Claudia TAME NJAMBE | Industrielle et bâtisseuse d’industries au Cameroun",
  description:
    "Site officiel de Lisette Claudia TAME NJAMBE, fondatrice d’Africa Processing Company SA. Son parcours, sa vision de l’industrialisation, ses réalisations, ses tribunes, sa chaîne LCTV et un espace dédié aux médias.",
};

/* Bloc 1 · Portrait du bandeau : les photos du diaporama (photothèque du site, lib/photos.ts). */
export const portraits: { image: PhotoId; alt: string; cadrage?: string }[] = [
  { image: "portrait", alt: "Portrait de Lisette Claudia TAME NJAMBE", cadrage: "50% 0%" },
  { image: "chantier", alt: "Sur un chantier, en échange avec un membre de l’équipe" },
  { image: "tenue", alt: "Lisette Claudia TAME NJAMBE, en tenue traditionnelle", cadrage: "80% 12%" },
  { image: "interview", alt: "Lisette Claudia TAME NJAMBE interrogée par une équipe de télévision" },
];

/* Bloc 3 · Repères — `part` : avancement vers le cap 2036 (remplit le filet sous le chiffre). */
export const reperes: { valeur: number; suffixe?: string; part: number; label: string; texte: string }[] = [
  {
    valeur: 500,
    suffixe: "+",
    part: 0.1,
    label: "emplois directs et indirects déjà créés",
    texte: "Derrière chaque poste, un foyer qui construit son avenir.",
  },
  {
    valeur: 3,
    part: 0.3,
    label: "sites industriels en activité",
    texte: "Mbankomo dans le Centre, Ngolambélé dans l’Est, Bangou dans l’Ouest.",
  },
  {
    valeur: 10,
    part: 1,
    label: "usines, 10 régions : le cap 2036",
    texte: "Pour que chaque région du Cameroun transforme ses propres richesses.",
  },
  {
    valeur: 5000,
    part: 1,
    label: "emplois directs et indirects visés à l’horizon 2036",
    texte: "Un objectif, et déjà un chantier.",
  },
];

/* Bloc 4 · Ce qui me guide */
export const convictions: { icone: IconName; titre: string; texte: string }[] = [
  {
    icone: "factory",
    titre: "L’industrie change tout.",
    texte:
      "Lorsqu’une usine s’installe, c’est toute une économie locale qui s’organise autour d’elle : les producteurs trouvent un débouché, les jeunes trouvent un métier, les familles trouvent une stabilité, et le pays nourrit mieux les siens. L’industrialisation transforme la dynamique économique, sociale et alimentaire d’une nation. Je ne le suppose pas, je le constate chaque jour sur mes sites.",
  },
  {
    icone: "people",
    titre: "L’humain avant la machine.",
    texte:
      "J’accompagne mes collaborateurs dans leur progression professionnelle, mais aussi dans leurs projets de vie. Transport du personnel, restauration, infirmerie avec médecin du travail, prise en charge des congés de maternité, stages ouverts aux enfants des salariés : chez nous, l’action sociale n’est pas un supplément, elle fait partie de la façon de produire.",
  },
  {
    icone: "pin",
    titre: "Les territoires d’abord.",
    texte:
      "Je veux des industries dans toutes les grandes villes du Cameroun, au plus près des ressources et de ceux qui les cultivent. L’industrie n’a pas à attendre les capitales. Elle doit aller là où se trouve la matière, et y rester.",
  },
];

/* Bloc 5 · Trois portes d'entrée */
export const portes: {
  icone: IconName;
  titre: string;
  texte: string;
  bouton: string;
  page: string;
  sombre?: boolean;
}[] = [
  {
    icone: "state",
    titre: "États et institutions",
    texte:
      "Vous portez une ambition industrielle pour votre pays, votre région ou votre ville. Je mets à votre disposition une expertise forgée sur le terrain : plans stratégiques d’industrialisation, usines livrées clés en main, mécanismes de production à petite, moyenne et grande échelle.",
    bouton: "Découvrir mon expertise",
    page: "expertise-etats",
    sombre: true,
  },
  {
    icone: "press",
    titre: "Médias",
    texte:
      "Biographies officielles, photographies en haute définition, dossier de presse, citations, tribunes, vidéos et revue de presse. Tout ce dont une rédaction a besoin est réuni au même endroit, libre d’accès et tenu à jour.",
    bouton: "Entrer dans la Salle de presse",
    page: "salle-de-presse",
  },
  {
    icone: "user",
    titre: "Mon parcours",
    texte:
      "Avant l’industrielle, il y a une fille, une mère, une femme de foi et de famille, qui avance avec simplicité et se sent à sa place aussi bien dans un ministère que sur le sol d’un atelier.",
    bouton: "Faire connaissance",
    page: "mon-parcours",
  },
];

/* Bandeau défilant */
export const defilant = ["Mbankomo · Centre", "Ngolambélé · Est", "Bangou · Ouest", "Maroua · Extrême-Nord"];

/* Bloc 7 · Quatre domaines d'intervention */
export const domaines: { rang: string; titre: string; texte: string }[] = [
  {
    rang: "I",
    titre: "Plans stratégiques d’industrialisation clés en main",
    texte: "Une feuille de route applicable, du diagnostic au calendrier.",
  },
  { rang: "II", titre: "Usines clés en main", texte: "Du choix du site à la mise en production, équipes formées." },
  {
    rang: "III",
    titre: "Mécanismes de production à toutes les échelles",
    texte: "Petite, moyenne et grande échelle, selon chaque territoire.",
  },
  { rang: "IV", titre: "Stratégie globale d’écosystème", texte: "Locale, nationale ou internationale." },
];

/* Bloc 8 · LCTV */
export const programmes = ["Interviews", "Discours et conférences", "Au cœur des usines", "Une minute, une conviction"];

/** `image` : photo d’illustration de la vignette, en attendant celle de la vidéo. */
export const vignettes: { rubrique: string; titre: string; detail: string; image: PhotoId }[] = [
  {
    rubrique: "Interview",
    titre: "Mon parcours, mes usines, ma vision de l’industrie",
    detail: "Presse, radio, télévision",
    image: "interview",
  },
  {
    rubrique: "Discours",
    titre: "Mon message aux jeunes entrepreneurs",
    detail: "Rise Africa 2026 · Palais des Sports de Yaoundé",
    image: "discours",
  },
  {
    rubrique: "Reportage usine",
    titre: "La fève qui arrive, les lignes qui tournent",
    detail: "Au cœur des usines · Mbankomo",
    image: "production",
  },
];

/* Bloc 9 · Tribunes (les trois premières cartes du menu Tribunes) */
export const tribunes: { theme: string; titre: string; accroche: string }[] = [
  {
    theme: "Industrialisation",
    titre: "Le Cameroun n’a pas besoin de discours. Il a besoin d’usines.",
    accroche:
      "L’industrialisation n’est pas un horizon lointain réservé aux pays riches. C’est un choix, que le Cameroun peut faire aujourd’hui.",
  },
  {
    theme: "Industrialisation de l’Afrique",
    titre: "L’Afrique ne se développera pas sans ses industriels",
    accroche:
      "Ni l’aide internationale ni les politiques fiscales ne construisent d’usines à notre place. Plaidoyer pour une industrialisation portée de l’intérieur.",
  },
  {
    theme: "Transformation locale",
    titre: "Ce que j’ai compris en voyant les autres transformer notre cacao",
    accroche:
      "Ma vocation est née loin du Cameroun, devant des lignes de production où l’on transformait du cacao camerounais. Récit d’une évidence qui a décidé de tout.",
  },
];

/* Bloc 10 · Actualités : dates réelles, tirées des menus Parcours et LCTV. */
export const actualites: { jour: string; periode: string; etiquette: string; or?: boolean; titre: string }[] = [
  {
    jour: "26",
    periode: "juin 2026",
    etiquette: "Inauguration",
    titre: "Inauguration de l’usine DENKY à Bangou, dans la région de l’Ouest",
  },
  {
    jour: "2026",
    periode: "Yaoundé",
    etiquette: "Prise de parole",
    titre: "Rise Africa : devant 6 000 jeunes, au Palais des Sports de Yaoundé",
  },
  {
    jour: "Nov.",
    periode: "2025",
    etiquette: "Inauguration",
    titre: "Inauguration du deuxième site industriel à Ngolambélé, dans la région de l’Est",
  },
  {
    jour: "5",
    periode: "mars 2025",
    etiquette: "Distinction",
    or: true,
    titre: "Chevalier de l’Ordre de la Valeur, à titre exceptionnel, par décision du Chef de l’État",
  },
];

/* Bloc 10 · Revue de presse : gabarit, en attendant les liens réels vers les articles parus. */
export const revueDePresse: { titre: string; source: string; type: string }[] = [
  { titre: "Titre de l’article ou de l’émission", source: "Nom du média · Date de parution", type: "Presse écrite" },
  { titre: "Titre de l’article ou de l’émission", source: "Nom du média · Date de diffusion", type: "Télévision" },
  { titre: "Titre de l’article ou de l’émission", source: "Nom du média · Date de parution", type: "Web" },
];
