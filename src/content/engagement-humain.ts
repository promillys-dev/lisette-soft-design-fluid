import type { Page } from "@/lib/blocs";

/** Menu 6 · Engagement humain — DocumentationLisette/LCTN_Site_Menu_06_Engagement_humain.pdf */
export const page: Page = {
  slug: "engagement-humain",
  titre: "Engagement humain | Lisette Claudia TAME NJAMBE : l’industrie à visage humain",
  description:
    "Chez Lisette Claudia TAME NJAMBE, l’accompagnement social fait partie du modèle industriel : formation aux métiers, soutien aux projets professionnels et personnels des collaborateurs, attention aux familles, aux planteurs et aux territoires.",
  blocs: [
    {
      type: "entete",
      surtitre: "Engagement humain",
      titre: "Une usine ne vaut que par celles et ceux qui la font tourner",
      intro: [
        "Les machines s’achètent. La confiance, elle, se construit jour après jour. J’ai choisi de placer l’accompagnement et l’action sociale au cœur de mes entreprises, parce que je crois qu’une industrie humaine est plus forte qu’une industrie froide, et que l’on ne produit bien que lorsque l’on se sent considéré.",
      ],
      repere: { valeur: "500+", legende: "emplois directs et indirects déjà créés" },
    },
    {
      type: "texte",
      id: "origine",
      surtitre: "D’où vient cet engagement",
      titre: "Je dirige comme j’ai été élevée",
      corps: [
        "J’ai grandi dans une famille où la responsabilité envers l’autre n’était pas un sujet de discussion mais une évidence. On y apprenait à regarder chaque personne avec la même considération, à tenir sa parole et à ne laisser personne au bord du chemin.",
        "Ces valeurs ne restent pas à la maison le matin quand je pars travailler. Elles entrent avec moi dans l’usine. Elles guident ma façon de recruter, de former, de décider. Pour moi, un collaborateur est une personne avant d’être un employé, avec une famille, des projets, des difficultés parfois, et des rêves qui méritent d’être pris au sérieux.",
        { citation: "L’entreprise n’est pas seulement un outil de production. C’est un espace de vie, et je la traite comme tel." },
      ],
      photo: { fichier: "chantier", legende: "Sur un chantier, en échange avec un membre de l’équipe" },
    },
    {
      type: "texte",
      id: "former",
      fond: "sable",
      surtitre: "Former, parce qu’aucune école ne le fait",
      titre: "Transmettre un métier, c’est offrir un avenir",
      corps: [
        "Lorsque j’ai lancé Africa Processing Company, j’ai découvert qu’il n’existait au Cameroun aucune formation aux métiers de la transformation du cacao. Opérateurs de broyage, techniciens de laboratoire, agents de contrôle qualité : nous avons tout appris à nos équipes, en partant de zéro.",
        "Ce qui aurait pu rester une contrainte est devenu une philosophie. Former quelqu’un, c’est lui confier un savoir rare, qui lui appartient pour toujours. C’est investir dans son avenir autant que dans la performance de l’usine.",
        "Aujourd’hui, ces femmes et ces hommes maîtrisent leur métier avec une expertise qui n’a rien à envier à ce que j’ai vu à l’étranger. Ils sont ma plus grande fierté.",
      ],
      photo: { legende: "Atelier de formation, ou technicien à son poste" },
    },
    {
      type: "cartes",
      id: "accompagner",
      surtitre: "Accompagner la personne tout entière",
      titre: "Grandir dans son métier, grandir dans sa vie",
      intro:
        "Accompagner un collaborateur, pour moi, ne se limite pas à suivre ses résultats ou à planifier sa montée en compétences. C’est aussi être présente dans ses projets de vie.",
      colonnes: 2,
      items: [
        {
          icone: "factory",
          titre: "Ses projets professionnels.",
          texte:
            "Apprendre un métier, évoluer vers plus de responsabilités, changer de poste, devenir à son tour formateur. Chacun doit pouvoir se projeter dans l’entreprise.",
        },
        {
          icone: "user",
          titre: "Ses projets personnels.",
          texte:
            "Fonder une famille, se loger, scolariser ses enfants, reprendre des études, traverser un moment difficile. Je tiens à ce que l’entreprise soit un appui, pas seulement un employeur.",
        },
      ],
      conclusion:
        "Cette attention quotidienne n’a rien d’un discours. C’est une manière de travailler ensemble, faite d’écoute, de proximité et de portes ouvertes.",
    },
    {
      type: "cartes",
      id: "quotidien",
      fond: "sable",
      surtitre: "Un quotidien pensé pour les équipes",
      titre: "Ce que nous avons mis en place",
      intro:
        "L’engagement social se mesure aux actes. Voici ce que nous avons institué dans nos usines, parce que chacune de ces mesures répond à un besoin réel.",
      colonnes: 5,
      items: [
        {
          icone: "bus",
          titre: "Le transport du personnel.",
          texte:
            "Des bus d’entreprise conduisent les équipes jusqu’aux sites. Personne ne doit renoncer à un emploi parce que l’usine est loin.",
        },
        {
          icone: "repas",
          titre: "La restauration.",
          texte:
            "Un restaurant d’entreprise, tenu par des professionnels de l’hôtellerie, sert des repas de qualité. On travaille mieux quand on mange bien.",
        },
        {
          icone: "sante",
          titre: "La santé.",
          texte: "Une infirmerie et un médecin du travail veillent sur la santé et l’hygiène de tous.",
        },
        {
          icone: "coeur",
          titre: "La maternité.",
          texte: "Les congés de maternité sont pris en charge. Devenir mère ne doit jamais fragiliser une carrière.",
        },
        {
          icone: "etudes",
          titre: "Les enfants des collaborateurs.",
          texte:
            "Nous leur ouvrons nos portes pour des stages. C’est une façon de transmettre le goût de l’industrie à la génération suivante.",
        },
      ],
    },
    {
      type: "cartes",
      id: "au-dela",
      surtitre: "Au-delà de l’usine",
      titre: "Un engagement qui rayonne",
      items: [
        {
          icone: "people",
          titre: "Les familles.",
          texte:
            "Derrière chaque emploi, il y a un foyer. Plus de 500 emplois directs et indirects, ce sont autant de familles qui vivent, se soignent et scolarisent leurs enfants grâce à ce travail.",
        },
        {
          icone: "coeur",
          titre: "Les planteurs.",
          texte:
            "Nous achetons une partie de nos fèves directement aux producteurs, sans intermédiaire. C’est une reconnaissance de leur travail et un revenu plus juste.",
        },
        {
          icone: "pin",
          titre: "Les territoires.",
          texte:
            "En nous installant dans les régions, nous luttons contre l’exode rural et nous donnons aux jeunes une raison de rester chez eux.",
        },
      ],
      citation:
        "Notre objectif est aussi profondément social : contribuer au développement des régions, lutter contre l’exode rural et valoriser le travail de nos planteurs.",
    },
    {
      type: "liste",
      id: "paroles",
      fond: "sable",
      surtitre: "Paroles de collaborateurs",
      titre: "Ils font l’entreprise, ils en parlent",
      intro: "Je préfère leur laisser la parole. Ce sont eux qui savent le mieux ce que signifie travailler ici.",
      items: [
        { titre: "Un technicien formé en interne, qui raconte l’apprentissage de son métier." },
        { titre: "Une collaboratrice devenue mère, qui parle de son retour au travail." },
        { titre: "Un parent dont l’enfant a effectué un stage dans l’usine." },
        { titre: "Un planteur qui vend directement ses fèves à l’usine." },
      ],
      note: "Témoignages à recueillir auprès des équipes, avec leur accord écrit. Gabarit : citation de deux à trois phrases, prénom, métier, site, ancienneté et photo.",
    },
    {
      type: "encadre",
      id: "ce-que-je-crois",
      surtitre: "Ce que je crois",
      titre: "La performance commence par la considération",
      corps: [
        "On me demande parfois si tout cela ne coûte pas trop cher à une entreprise industrielle. Je réponds que c’est l’inverse. Une équipe qui se sent respectée donne le meilleur d’elle-même, reste, transmet et défend ce qu’elle fabrique.",
        { accent: "L’humain n’est pas une ressource. C’est la ressource." },
        "C’est cette manière de faire que j’emporterai dans chacune des usines à venir. Une industrie sans dimension humaine est une industrie fragile. Je construis pour durer.",
      ],
      boutons: [
        { label: "Découvrir mes réalisations", vers: { page: "realisations-industrielles" } },
        { label: "Lire ma vision", vers: { page: "ma-vision" } },
      ],
    },
  ],
};
