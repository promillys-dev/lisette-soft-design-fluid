/**
 * Définition du menu du site (les dix menus du document client, Accueil compris via le nom).
 *
 * - `court` : libellé affiché dans la barre, raccourci pour tenir sur une ligne dès 1280 px.
 * - `titre` : intitulé complet de la page, repris en tête du sous-menu et dans le tiroir mobile.
 * - `slug`  : adresse de la page (contenu dans src/content/<slug>.ts) : voir lib/liens.ts.
 * - `bloc`  : bloc de l'accueil qui annonce cette page. Une proposition sans pages intérieures
 *             y conduit à la place ; sans bloc, le lien reste neutre (« # »).
 * - `rubriques` : les blocs de la page mis en avant dans le sous-menu, avec l'ancre du bloc.
 */
export type Rubrique = { label: string; ancre: string };
export type MenuItem = { court: string; titre: string; slug: string; bloc?: string; rubriques: Rubrique[] };

export const menu: MenuItem[] = [
  {
    court: "Parcours",
    titre: "Mon parcours",
    slug: "mon-parcours",
    bloc: "bienvenue",
    rubriques: [
      { label: "Mes racines et mes valeurs", ancre: "racines" },
      { label: "Ma formation", ancre: "formation" },
      { label: "La bâtisseuse", ancre: "batisseuse" },
      { label: "Les grandes étapes", ancre: "etapes" },
      { label: "Distinctions et reconnaissances", ancre: "distinctions" },
      { label: "La femme derrière l’industrielle", ancre: "portrait" },
    ],
  },
  {
    court: "Vision",
    titre: "Ma vision",
    slug: "ma-vision",
    bloc: "convictions",
    rubriques: [
      { label: "Ma conviction", ancre: "conviction" },
      { label: "Industrialiser les territoires", ancre: "territoires" },
      { label: "Le cap 2036", ancre: "cap-2036" },
      { label: "Démystifier l’industrie", ancre: "demystifier" },
      { label: "Mon manifeste", ancre: "manifeste" },
    ],
  },
  {
    court: "Réalisations",
    titre: "Réalisations industrielles",
    slug: "realisations-industrielles",
    bloc: "realisations",
    rubriques: [
      { label: "Africa Processing Company SA", ancre: "apc" },
      { label: "Meta Invest SA · DENKY", ancre: "sites" },
      { label: "De la fève au produit fini", ancre: "chaine" },
      { label: "Carte des sites industriels", ancre: "sites" },
      { label: "La marque CA’OLY", ancre: "caoly" },
      { label: "Galerie des usines et des équipes", ancre: "galerie" },
    ],
  },
  {
    court: "Expertise États",
    titre: "Expertise au service des États",
    slug: "expertise-etats",
    bloc: "expertise",
    rubriques: [
      { label: "Plans stratégiques d’industrialisation", ancre: "domaines" },
      { label: "Usines clés en main", ancre: "domaines" },
      { label: "Mécanismes de production", ancre: "domaines" },
      { label: "Stratégie globale d’écosystème", ancre: "domaines" },
      { label: "Formulaire de sollicitation", ancre: "sollicitation" },
    ],
  },
  {
    court: "Engagement",
    titre: "Engagement humain",
    slug: "engagement-humain",
    rubriques: [
      { label: "Former aux métiers industriels", ancre: "former" },
      { label: "Accompagner la personne tout entière", ancre: "accompagner" },
      { label: "Un quotidien pensé pour les équipes", ancre: "quotidien" },
      { label: "Au-delà de l’usine", ancre: "au-dela" },
      { label: "Paroles de collaborateurs", ancre: "paroles" },
    ],
  },
  {
    court: "Tribunes",
    titre: "Tribunes",
    slug: "tribunes",
    bloc: "tribunes",
    rubriques: [
      { label: "La tribune à la une", ancre: "a-la-une" },
      { label: "Toutes les tribunes, par thème", ancre: "bibliotheque" },
      { label: "Phrases à retenir", ancre: "phrases" },
      { label: "Reprendre une tribune", ancre: "reprendre" },
    ],
  },
  {
    court: "LCTV",
    titre: "LCTV",
    slug: "lctv",
    bloc: "lctv",
    rubriques: [
      { label: "À la une", ancre: "a-la-une" },
      { label: "Interviews", ancre: "programmes" },
      { label: "Discours et conférences", ancre: "programmes" },
      { label: "Au cœur des usines", ancre: "programmes" },
      { label: "Une minute, une conviction", ancre: "programmes" },
      { label: "Visages de l’industrie", ancre: "programmes" },
    ],
  },
  {
    court: "Presse",
    titre: "Salle de presse",
    slug: "salle-de-presse",
    bloc: "actualites",
    rubriques: [
      { label: "Biographies officielles", ancre: "biographies" },
      { label: "Photothèque et logos", ancre: "phototheque" },
      { label: "Dossier de presse et fiches repères", ancre: "dossier" },
      { label: "Communiqués et actualités", ancre: "communiques" },
      { label: "Revue de presse", ancre: "revue" },
      { label: "Banque de citations", ancre: "citations" },
      { label: "Contact presse", ancre: "contact-presse" },
    ],
  },
];

/** Dixième menu : affiché en bouton à droite de la barre. */
export const contact: MenuItem = {
  court: "Contact",
  titre: "Contact",
  slug: "contact",
  bloc: "lettre",
  rubriques: [
    { label: "États et institutions", ancre: "etats" },
    { label: "Médias", ancre: "medias" },
    { label: "Conférences et prises de parole", ancre: "conferences" },
    { label: "Partenariats et autres demandes", ancre: "partenariats" },
  ],
};

/** Barre utilitaire, présente sur tout le site. */
export const utilitaires = {
  langues: [
    { code: "fr", label: "FR" },
    { code: "en", label: "EN" },
  ],
  institutions: { label: "Sollicitations institutionnelles", vers: { page: "contact", ancre: "etats" } },
  medias: { label: "Espace médias", vers: { page: "salle-de-presse" } },
};

/** Pied de page. Les réseaux sociaux restent des liens neutres tant que les comptes ne sont pas fournis. */
export const piedDePage = {
  liens: [...menu, contact].map((item) => ({
    label: item.slug === "expertise-etats" ? item.court : item.titre,
    vers: { page: item.slug },
  })),
  contacts: [
    { label: "Sollicitations institutionnelles", vers: { page: "contact", ancre: "etats" } },
    { label: "Contact presse", vers: { page: "salle-de-presse", ancre: "contact-presse" } },
    { label: "Invitations et conférences", vers: { page: "contact", ancre: "conferences" } },
  ],
  reseaux: ["LinkedIn", "Facebook", "YouTube LCTV", "Instagram", "X"],
  mentions: [
    { label: "Mentions légales", vers: { page: "mentions-legales" } },
    { label: "Politique de confidentialité", vers: { page: "politique-de-confidentialite" } },
    { label: "Gestion des cookies", vers: { page: "gestion-des-cookies" } },
    { label: "Conditions d’utilisation", vers: { page: "conditions-d-utilisation" } },
  ],
};
