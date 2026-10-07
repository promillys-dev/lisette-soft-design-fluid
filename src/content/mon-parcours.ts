import type { Page } from "@/lib/blocs";

/** Menu 2 · Mon parcours — DocumentationLisette/LCTN_Site_Menu_02_Mon_parcours.pdf */
export const page: Page = {
  slug: "mon-parcours",
  titre: "Mon parcours | Lisette Claudia TAME NJAMBE, de 66 m² à plusieurs sites industriels",
  description:
    "Fille d’industriel, formée en France et au Cameroun, Lisette Claudia TAME NJAMBE raconte son chemin : l’enfance parmi les machines, les années d’apprentissage dans la chocolaterie, le retour au pays et la construction d’Africa Processing Company SA.",
  blocs: [
    {
      type: "entete",
      surtitre: "Mon parcours",
      titre: "Je n’ai pas hérité d’une usine. J’ai hérité d’un regard.",
      intro: [
        "On me demande souvent d’où vient cette obstination à construire. Elle vient de loin. D’une maison où l’industrie se vivait au quotidien, d’années passées à apprendre un métier loin de chez moi, et d’un retour au Cameroun décidé un jour, sans capital, mais avec une certitude. Voici mon chemin, tel que je l’ai parcouru.",
      ],
      photo: {
        fichier: "bureau",
        legende: "Lisette Claudia TAME NJAMBE dans son bureau, devant l’enseigne CA’OLY",
      },
    },
    {
      type: "texte",
      id: "racines",
      surtitre: "Mes racines",
      titre: "Une enfance parmi les machines",
      corps: [
        "Je suis la fille d’un industriel. Mon père, Henri TAME SOUMEDJONG, a dirigé Saplait SA et fut l’un des premiers agro-industriels camerounais du secteur laitier. J’ai grandi dans le bruit des ateliers, dans une maison où l’on parlait de production, de qualité et de responsabilité comme d’autres parlent de la pluie et du beau temps.",
        "De cette enfance, je n’ai pas reçu une entreprise. J’ai reçu une manière de regarder le monde. La conviction que produire, transformer, fabriquer n’est pas réservé à d’autres. Que cela peut se faire ici, avec nos ressources, nos mains et notre intelligence. J’ai aussi appris très tôt que diriger, c’est d’abord répondre de ceux qui travaillent avec vous, et de leurs familles.",
        { citation: "J’ai grandi parmi les machines et j’ai découvert en moi la même passion et la même vocation que mes parents." },
        "Mes parents m’ont transmis autre chose encore, que je porte chaque jour : le sens de la famille, le respect de chacun quelle que soit sa place, et la simplicité. Ce sont ces valeurs qui me tiennent debout, bien avant les diplômes et les titres.",
      ],
      photo: { fichier: "tenue", legende: "Lisette Claudia TAME NJAMBE, en tenue traditionnelle" },
    },
    {
      type: "texte",
      id: "formation",
      fond: "sable",
      surtitre: "Ma formation",
      titre: "Apprendre à comprendre, puis apprendre à diriger",
      corps: [
        "J’ai d’abord choisi la rigueur technique, avec une licence en génie informatique à l’Université d’Aix-Marseille. Cette formation m’a donné le goût des systèmes qui fonctionnent, des processus bien pensés et de la donnée juste. Une usine, au fond, est aussi un système.",
        "J’ai ensuite complété ce socle par un Executive MBA en management stratégique à l’Université Catholique d’Afrique Centrale. J’y ai appris à penser une organisation dans son ensemble, à décider dans l’incertitude et à inscrire une entreprise dans le temps long.",
      ],
      encadre: {
        titre: "Diplômes",
        items: [
          { titre: "Licence en génie informatique", texte: "Université d’Aix-Marseille, France." },
          {
            titre: "Executive MBA en management stratégique",
            texte: "Université Catholique d’Afrique Centrale, Cameroun.",
          },
        ],
      },
    },
    {
      type: "texte",
      id: "etranger",
      surtitre: "L’étranger comme école",
      titre: "Le jour où j’ai vu notre cacao transformé ailleurs",
      corps: [
        "Mes premières expériences professionnelles m’ont conduite à l’étranger, dans la chocolaterie. C’est là que j’ai été formée au métier de la transformation du cacao. J’y ai vu des fèves devenir masse, beurre, poudre, puis chocolat. J’y ai vu des lignes de production tourner sans relâche et faire vivre des régions entières.",
        "Et j’y ai vu du cacao camerounais. Le nôtre. Celui que nos planteurs du Centre et de l’Est récoltent depuis des générations. Il arrivait brut, il repartait transformé, et la valeur créée restait là bas.",
        "Je n’en ai conçu ni colère ni amertume. Seulement une évidence, d’une grande tranquillité : ce qui se fait ailleurs avec notre cacao peut se faire chez nous, par nous, pour nous. Ce jour là, j’ai su ce que je ferais de ma vie professionnelle.",
      ],
      photo: { fichier: "production", legende: "En visite dans une unité de production" },
    },
    {
      type: "texte",
      id: "retour",
      fond: "sable",
      surtitre: "Le retour et les années de patience",
      titre: "Rentrer, apprendre le marché, attendre le bon moment",
      corps: [
        "Je suis rentrée au Cameroun par conviction, sans héritage à faire fructifier et sans appui financier. Il me manquait les fonds pour bâtir une usine. Il ne me manquait ni la méthode ni la patience.",
        "J’ai donc commencé autrement. Pendant plusieurs années, j’ai importé des produits de chocolaterie pour connaître le marché camerounais de l’intérieur, ses goûts, ses contraintes, ses circuits. J’ai ensuite accompagné des chocolateries dans leur implantation au Cameroun, ce qui m’a appris ce qu’aucune école n’enseigne : comment on installe réellement une unité de production chez nous.",
        "Chaque étape préparait la suivante. Des clients rencontrés à l’étranger ont cru en moi alors que nous étions encore tout petits. Leur confiance a été mon premier capital.",
      ],
      encadre: {
        titre: "Expériences",
        items: [
          { titre: "2012 à 2014", texte: "Manager, Cameroon Investment Company." },
          { titre: "2014 à 2019", texte: "Manager, African Company of Trading." },
        ],
      },
    },
    {
      type: "texte",
      id: "batisseuse",
      surtitre: "La bâtisseuse",
      titre: "Soixante six mètres carrés et une ou deux machines",
      corps: [
        "Africa Processing Company est née dans un local loué de 66 m². L’activité a démarré à la fin de l’année 2020 et la société a été formalisée en janvier 2021. Ce n’est ni un héritage familial ni une entreprise familiale. Nous sommes partis de zéro.",
        "Il a fallu tout construire, y compris les compétences. Les métiers de la transformation du cacao ne s’apprennent dans aucune école au Cameroun. Nous avons donc formé nous mêmes nos opérateurs, nos techniciens de laboratoire, nos agents de contrôle qualité. Ces femmes et ces hommes maîtrisent aujourd’hui un savoir rare, et c’est l’une de mes plus grandes fiertés.",
        "En mai 2024, nous nous sommes installés dans notre propre usine à Mbankomo, sur plus d’un hectare. Puis sont venus un deuxième site à Ngolambélé, dans la région de l’Est, et un troisième à Bangou, dans la région de l’Ouest. Aujourd’hui, plus de 500 emplois directs et indirects existent grâce à ce travail.",
        { citation: "Nous devons démystifier l’industrie et démontrer que tout commence avec une ou deux machines." },
      ],
      schema: "echelle",
      photo: { legende: "Le premier local de 66 m², en regard de l’usine actuelle" },
    },
    {
      type: "frise",
      id: "etapes",
      fond: "sable",
      surtitre: "Les grandes étapes",
      titre: "Mon chemin en dates",
      items: [
        { date: "Enfance", texte: "Je grandis au contact de l’industrie, auprès de mon père, dirigeant de Saplait SA." },
        { date: "2010", texte: "Licence en génie informatique à l’Université d’Aix-Marseille." },
        {
          date: "Premières années professionnelles",
          texte: "Formation au métier de la transformation du cacao, dans la chocolaterie, à l’étranger.",
        },
        {
          date: "2012 à 2019",
          texte:
            "Fonctions de management au Cameroun, importation de produits chocolatiers et accompagnement de chocolateries dans leur implantation.",
        },
        { date: "Fin 2020", texte: "Démarrage de l’activité industrielle dans un local de 66 m²." },
        { date: "Janvier 2021", texte: "Création officielle d’Africa Processing Company SA." },
        { date: "Mai 2024", texte: "Installation dans notre propre usine à Mbankomo, région du Centre." },
        {
          date: "15 janvier 2025",
          texte:
            "Inauguration de l’usine CA’OLY, Cacao des Lions, sous le haut patronage du ministre en charge de l’Industrie.",
        },
        {
          date: "5 mars 2025",
          texte: "Je suis faite Chevalier de l’Ordre de la Valeur, à titre exceptionnel, par décision du Chef de l’État.",
        },
        { date: "Novembre 2025", texte: "Inauguration du deuxième site industriel à Ngolambélé, région de l’Est." },
        { date: "2026", texte: "Prise de parole devant 6 000 jeunes à Rise Africa, au Palais des Sports de Yaoundé." },
        { date: "26 juin 2026", texte: "Inauguration de l’usine DENKY à Bangou, région de l’Ouest." },
        {
          date: "Cap 2036",
          texte: "Dix usines dans dix régions du Cameroun et 5 000 emplois directs et indirects.",
          aVenir: true,
        },
      ],
    },
    {
      type: "encadre",
      id: "distinctions",
      surtitre: "Distinctions et reconnaissances",
      titre: "Une reconnaissance que je partage",
      corps: [
        "Le 5 mars 2025, j’ai reçu des mains du ministre du Commerce la médaille de Chevalier de l’Ordre de la Valeur, décernée à titre exceptionnel par le Chef de l’État. Je l’ai accueillie avec gratitude, et avec la conscience qu’elle ne m’appartient pas à moi seule.",
        "Elle revient à chaque collaboratrice et à chaque collaborateur qui a cru à ce projet quand il tenait dans une seule pièce. Elle revient aux planteurs qui nous confient leurs fèves. Elle revient à ma famille, présente bien avant les cérémonies.",
        "Je retiens aussi une autre forme de reconnaissance, plus discrète : voir Africa Processing Company SA figurer parmi les cinq premiers transformateurs de cacao du Cameroun, aux côtés d’acteurs historiques du secteur. Cela dit simplement que le chemin était possible.",
      ],
      photo: { fichier: "ceremonie", legende: "Un moment partagé, lors d’une cérémonie" },
    },
    {
      type: "texte",
      id: "portrait",
      fond: "sable",
      surtitre: "La femme derrière l’industrielle",
      titre: "Ce que je suis avant ce que je fais",
      corps: [
        "Je suis une femme de famille. C’est là que je me ressource et c’est de là que je tiens ma façon de diriger. Je ne change pas de visage en franchissant la porte de l’usine. J’y entre avec les mêmes valeurs qu’à la maison : l’attention aux autres, l’exigence qui fait grandir et la parole tenue.",
        "J’aime la proximité. Je me sens à ma place dans le bureau d’un ministre comme sur le sol d’un atelier, à une table de négociation comme à une table de famille. Je n’y vois aucun mérite particulier. Je crois simplement que chaque personne mérite la même considération, et que l’on apprend partout si l’on sait écouter.",
        "Je n’ai jamais cessé d’apprendre. Je voyage régulièrement pour rencontrer des industriels, visiter leurs installations et rapporter chez nous ce qui peut y être adapté. Rester curieuse est ma manière de rester utile.",
        "Certains m’appellent la Lionne du Cacao. Je l’accepte avec le sourire, en pensant à ce que ce nom dit de notre pays plus que de moi. Ce que je souhaite, c’est que l’on se souvienne d’une femme qui a construit, qui a formé, et qui a ouvert la voie à d’autres.",
        { citation: "Notre principe est de produire des choses que nous serions prêts à donner à manger à nos enfants." },
      ],
      photo: { fichier: "sourire", legende: "Lisette Claudia TAME NJAMBE" },
    },
    {
      type: "cartes",
      id: "lecons",
      surtitre: "Ce que ce chemin m’a appris",
      titre: "Quatre leçons que je transmets",
      colonnes: 4,
      items: [
        {
          titre: "Commencer petit n’est pas penser petit.",
          texte: "On peut rêver de dix usines et démarrer avec une seule machine. L’essentiel est de démarrer.",
        },
        {
          titre: "La patience est une stratégie.",
          texte:
            "Les années passées à comprendre le marché ont été les plus rentables de mon parcours, parce qu’elles m’ont évité les erreurs qui coûtent cher.",
        },
        {
          titre: "Personne ne vous doit rien.",
          texte:
            "Je le dis aux jeunes avec affection : battez vous pour vos rêves, vous en avez le droit, mais n’attendez pas qu’on vous les apporte.",
        },
        {
          titre: "On ne bâtit jamais seul.",
          texte:
            "Derrière chaque réussite visible, il y a un cercle de confiance discret. Le mien était là au temps des 66 m². Il est toujours là.",
        },
      ],
    },
    {
      type: "suite",
      titre: "Ce parcours a un sens, et il a un cap",
      texte:
        "Tout ce que j’ai appris, je le mets désormais au service d’une ambition plus large que mes propres usines : voir l’industrie s’installer dans toutes les grandes villes du Cameroun, et accompagner les États qui veulent suivre ce chemin.",
      boutons: [
        { label: "Découvrir ma vision", vers: { page: "ma-vision" }, style: "or" },
        { label: "Voir mes réalisations industrielles", vers: { page: "realisations-industrielles" }, style: "clair" },
      ],
    },
  ],
};
