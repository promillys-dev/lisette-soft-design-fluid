import type { Page } from "@/lib/blocs";

/** Menu 3 · Ma vision — DocumentationLisette/LCTN_Site_Menu_03_Ma_vision.pdf */
export const page: Page = {
  slug: "ma-vision",
  titre: "Ma vision | Lisette Claudia TAME NJAMBE : industrialiser le Cameroun, ville après ville",
  description:
    "Lisette Claudia TAME NJAMBE expose sa conviction : l’industrialisation transforme la dynamique économique, sociale et alimentaire d’un pays. Sa vision pour les territoires, son cap 2036 et son manifeste.",
  blocs: [
    {
      type: "entete",
      surtitre: "Ma vision",
      titre: "Un pays se relève par ce qu’il fabrique",
      intro: [
        "Je ne crois pas aux miracles économiques. Je crois aux usines, aux métiers qui s’apprennent et aux territoires qui se mettent à produire. Ma vision tient en une phrase : transformer nos ressources là où elles naissent, pour que la richesse reste auprès de ceux qui la créent.",
      ],
      repere: { valeur: "2036", legende: "Le cap : dix usines, dix régions, cinq mille emplois" },
    },
    {
      type: "texte",
      id: "constat",
      surtitre: "Le constat",
      titre: "Riches de tout, et pourtant dépendants",
      corps: [
        "Le Cameroun n’est pas un pays pauvre. Il possède le cacao, le café, le bois, les minerais, une agriculture vivrière abondante, de l’eau et du soleil. Il possède surtout une jeunesse nombreuse, capable et impatiente d’agir.",
        "Et pourtant, nous vendons nos matières premières à l’état brut, puis nous rachetons au prix fort ce que d’autres en ont fait. La valeur, les emplois qualifiés et le savoir faire se créent ailleurs. Ce paradoxe, je le connais de l’intérieur, pour avoir vu notre propre cacao transformé loin de chez nous.",
        {
          citation:
            "Nous sommes le cinquième producteur mondial de cacao et nous ne consommons pas 5 % de notre propre production. Ce n’est pas une fatalité, c’est un choix que nous n’avons pas encore fait.",
        },
        "Je refuse de considérer cette situation comme normale. Ce qui nous a manqué, ce n’est pas la ressource. C’est la décision de transformer.",
      ],
    },
    {
      type: "cartes",
      id: "conviction",
      fond: "sable",
      surtitre: "Ma conviction",
      titre: "Ce que l’industrie change, concrètement",
      intro:
        "Quand je parle d’industrialisation, je ne parle pas d’un concept. Je parle de ce que j’observe chaque jour autour de mes usines, et qui me convainc qu’elle est le levier le plus puissant dont dispose un pays.",
      colonnes: 2,
      items: [
        {
          titre: "Elle change l’économie.",
          texte:
            "Une usine crée un débouché stable pour les producteurs, fait naître des sous traitants, des transporteurs, des commerces. Autour d’elle, toute une économie locale s’organise, et la valeur ajoutée cesse de quitter le territoire.",
        },
        {
          titre: "Elle change la vie sociale.",
          texte:
            "Un emploi industriel est un emploi qui dure, qui forme et qui donne un statut. Il permet de scolariser ses enfants, de se soigner, de bâtir. Il retient les jeunes dans leur région au lieu de les pousser vers l’exode.",
        },
        {
          titre: "Elle change ce que nous mangeons.",
          texte:
            "Un pays qui transforme ses récoltes se nourrit de ce qu’il produit. Il dépend moins des importations, réduit les pertes après récolte et met sur les tables des produits sains, accessibles et faits chez lui.",
        },
        {
          titre: "Elle change la trajectoire d’un pays.",
          texte:
            "L’industrie qualifie le capital humain, attire les infrastructures, installe une culture de la rigueur et de la qualité. C’est ainsi que la croissance devient durable, parce qu’elle repose sur ce que le pays sait faire.",
        },
      ],
    },
    {
      type: "texte",
      id: "territoires",
      surtitre: "Les territoires",
      titre: "Des industries dans toutes les grandes villes du Cameroun",
      carte: true,
      corps: [
        "Aucun pays ne s’est développé depuis sa seule capitale. La richesse d’une nation naît dans ses régions, là où l’on cultive, où l’on élève, où l’on extrait. C’est donc là qu’il faut transformer.",
        "Mon ambition est simple à énoncer et exigeante à réaliser : installer des industries partout où cela est possible, dans chacune de nos grandes villes, en partant de ce que chaque territoire produit le mieux. Le cacao dans le Centre et l’Est. Les productions agroalimentaires dans l’Ouest. L’arachide dans l’Extrême-Nord. Demain, d’autres filières dans d’autres régions.",
        "Je sais que les routes, l’énergie et les services manquent parfois. Mon expérience m’a appris que l’industrie ne doit pas attendre les infrastructures : sa présence les fait venir. Une usine qui s’installe justifie la ligne électrique, la route et l’école qui suivront.",
      ],
    },
    {
      type: "cartes",
      id: "cap-2036",
      fond: "sable",
      surtitre: "Le cap 2036",
      titre: "Dix usines, dix régions, cinq mille emplois",
      colonnes: 2,
      items: [
        {
          surtitre: "Aujourd’hui",
          titre: "Plus de 500 emplois, trois sites",
          texte: "Plus de 500 emplois directs et indirects déjà créés, et trois sites industriels en activité.",
        },
        {
          surtitre: "Horizon 2036",
          titre: "10 usines, 10 régions, 5 000 emplois",
          texte: "Dix usines implantées dans les dix régions du Cameroun, pour 5 000 emplois directs et indirects.",
        },
      ],
      corps: [
        "Ce cap n’est pas un slogan. C’est un programme de travail, que je conduis site après site, avec la même méthode : identifier une ressource locale abondante, concevoir l’outil industriel adapté, former les équipes sur place et organiser l’approvisionnement avec les producteurs de la région.",
        "Chaque usine ouverte rend la suivante plus facile, parce que la preuve est faite et que les compétences existent. C’est ainsi que l’on passe d’une réussite isolée à un mouvement.",
      ],
    },
    {
      type: "texte",
      id: "demystifier",
      surtitre: "Démystifier l’industrie",
      titre: "L’industrie n’est pas réservée aux autres",
      corps: [
        "On imagine trop souvent l’industrie comme une affaire de géants, de capitaux immenses et de technologies inaccessibles. C’est faux, et cette idée nous a coûté des décennies.",
        {
          citation:
            "Tout commence avec une ou deux machines. Et si nous multiplions ces commencements dans chaque ville du Cameroun, nous changeons le visage de notre économie.",
        },
        "La transformation est une compétence. Elle s’acquiert, elle se développe, elle se transmet. Je l’ai vérifié en formant moi-même des femmes et des hommes à des métiers qu’aucune école n’enseignait chez nous. Ils travaillent aujourd’hui avec une maîtrise qui n’a rien à envier à ce que j’ai vu à l’étranger.",
        "Je veux que la prochaine génération n’ait pas besoin de partir pour comprendre ce qui est possible ici.",
      ],
    },
    {
      type: "texte",
      id: "visage-humain",
      fond: "sable",
      surtitre: "Une industrie à visage humain",
      titre: "Produire mieux en prenant soin de ceux qui produisent",
      corps: [
        "Ma vision de l’industrie n’est pas seulement économique. Une usine performante est une usine où l’on se sent respecté, accompagné et fier de ce que l’on fabrique. Je ne sépare pas la qualité du produit de la qualité de vie de celles et ceux qui le font.",
        "C’est pourquoi l’accompagnement social fait partie de mon modèle industriel, au même titre que les machines et les procédés.",
      ],
      boutons: [{ label: "Découvrir mon engagement humain", vers: { page: "engagement-humain" } }],
    },
    {
      type: "liste",
      id: "manifeste",
      fond: "brun",
      style: "manifeste",
      surtitre: "Mon manifeste",
      titre: "Ce en quoi je crois",
      items: [
        { titre: "Je crois qu’un pays qui ne transforme pas ses ressources offre sa richesse aux autres." },
        { titre: "Je crois que l’industrie est à la portée de ceux qui osent commencer." },
        { titre: "Je crois que les régions sont l’avenir industriel du Cameroun." },
        { titre: "Je crois qu’une entreprise répond de ses collaborateurs et de leurs familles." },
        { titre: "Je crois que la qualité est une forme de respect." },
        { titre: "Je crois que l’on ne produit bien que ce que l’on donnerait à ses propres enfants." },
        { titre: "Je crois que l’Afrique n’a pas à attendre. Elle a les ressources, les femmes, les hommes et la volonté." },
        {
          titre:
            "Je crois que ce que j’ai appris doit servir à d’autres, et d’abord aux États qui veulent industrialiser.",
        },
      ],
      signature: "Lisette Claudia TAME NJAMBE",
      boutons: [{ label: "Télécharger le manifeste (PDF)", style: "or" }],
    },
    {
      type: "suite",
      texte:
        "Cette vision, je la défends dans mes tribunes, je la mets en œuvre dans mes usines et je la partage avec les États qui souhaitent s’en inspirer.",
      boutons: [
        { label: "Lire mes tribunes", vers: { page: "tribunes" }, style: "or" },
        { label: "Voir mes réalisations", vers: { page: "realisations-industrielles" }, style: "clair" },
        { label: "Découvrir mon expertise pour les États", vers: { page: "expertise-etats" }, style: "clair" },
      ],
    },
  ],
};
