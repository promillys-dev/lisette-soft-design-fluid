import type { Page } from "@/lib/blocs";

/** Menu 4 · Réalisations industrielles — DocumentationLisette/LCTN_Site_Menu_04_Realisations_industrielles.pdf */
export const page: Page = {
  slug: "realisations-industrielles",
  titre: "Réalisations industrielles | Lisette Claudia TAME NJAMBE : APC SA, CA’OLY, DENKY",
  description:
    "Les sites industriels bâtis par Lisette Claudia TAME NJAMBE au Cameroun : Mbankomo, Ngolambélé, Bangou et le projet de Maroua. Filières, produits, emplois créés et exigence de qualité.",
  blocs: [
    {
      type: "entete",
      surtitre: "Réalisations industrielles",
      titre: "Ce que j’affirme, je l’ai d’abord construit",
      intro: [
        "Une vision ne vaut que par ce qu’elle laisse sur le terrain. Voici mes usines, les filières qu’elles font vivre et les femmes et les hommes qui y travaillent. Chaque site est né de la même idée : une ressource locale, transformée sur place, par des équipes formées sur place.",
      ],
      carte: true,
    },
    {
      type: "chiffres",
      titre: "Repères",
      items: [
        { valeur: "3", label: "sites industriels en activité, dans trois régions du Cameroun" },
        { valeur: "500+", label: "emplois directs et indirects déjà créés" },
        { valeur: "15+", label: "produits dérivés du cacao sous la marque CA’OLY" },
        { valeur: "Top 5", label: "parmi les cinq premiers transformateurs de cacao du Cameroun" },
        { valeur: "1", label: "nouveau site en préparation, à Maroua, dans l’Extrême-Nord" },
      ],
    },
    {
      type: "texte",
      id: "apc",
      surtitre: "Africa Processing Company SA",
      titre: "Africa Processing Company SA, l’histoire d’un commencement",
      corps: [
        "J’ai fondé Africa Processing Company avec une ambition claire : transformer le cacao du Cameroun au Cameroun. L’activité a commencé à la fin de l’année 2020 dans un local de 66 m², et la société a été formalisée en janvier 2021.",
        "En quelques années, l’entreprise est passée d’une pièce louée à une usine de plus d’un hectare, puis à un deuxième site. Elle a connu une croissance record en 2025 et figure désormais parmi les cinq premiers transformateurs de cacao du pays, aux côtés d’acteurs installés de longue date.",
        "Ce qui nous distingue, c’est d’aller jusqu’au bout de la chaîne. Nous proposons à la fois des produits intermédiaires destinés aux industriels et des produits finis destinés aux familles.",
        { citation: "Nous sommes la seule industrie locale du cacao offrant des produits intermédiaires et finis." },
      ],
      photo: { legende: "Logo d’Africa Processing Company SA et photo de la façade de l’usine" },
    },
    {
      type: "etapes",
      id: "chaine",
      fond: "sable",
      surtitre: "De la fève au produit fini",
      titre: "Une chaîne de valeur entièrement camerounaise",
      items: [
        {
          titre: "L’achat des fèves.",
          texte:
            "Nous nous approvisionnons auprès des planteurs camerounais, principalement dans les régions du Centre et de l’Est, parfois en direct, sans intermédiaire.",
        },
        { titre: "Le broyage.", texte: "Les fèves sont nettoyées, torréfiées et broyées dans nos usines." },
        {
          titre: "Les produits intermédiaires.",
          texte:
            "Masse de cacao, beurre de cacao et poudre de cacao, destinés aux industriels du Cameroun et de l’international.",
        },
        {
          titre: "Les produits finis.",
          texte:
            "Pâte à tartiner, boissons chocolatées, desserts et autres gourmandises, pour le marché camerounais et africain.",
        },
        {
          titre: "La distribution.",
          texte:
            "Nos produits sont vendus au Cameroun, dans la sous région et à l’export, vers l’Asie, l’Europe et le Maghreb.",
        },
      ],
    },
    {
      type: "sites",
      id: "sites",
      surtitre: "Carte interactive des sites",
      titre: "Mes sites, région par région",
      intro: "Cliquez sur un site pour découvrir son histoire, sa filière et ce qu’il apporte à son territoire.",
      fiches: [
        {
          site: "mbankomo",
          titre: "CA’OLY, Cacao des Lions : là où tout a pris de l’ampleur",
          filiere: "Cacao",
          reperes:
            "Installation en mai 2024. Inauguration le 15 janvier 2025, sous le haut patronage du ministre en charge de l’Industrie. Plus d’un hectare. Une capacité de 8 000 tonnes de dérivés de cacao par an.",
          corps: [
            "J’ai choisi Mbankomo parce que nous y sommes au cœur du premier bassin cacaoyer du pays et aux portes de Yaoundé. Les fèves arrivent vite, les produits repartent vite.",
            "C’est ici que nous avons construit notre première usine en propre, après des années dans des locaux loués. Elle réunit le broyage des fèves et la fabrication des produits finis, ainsi qu’un laboratoire interne d’analyses et de tests. C’est aussi ici que nous avons formé nos premiers techniciens.",
          ],
          photos: "Photos de l’usine, de la ligne de production et des équipes",
        },
        {
          site: "ngolambele",
          titre: "Au plus près des planteurs de l’Est",
          filiere: "Cacao",
          reperes: "Inauguration en novembre 2025. Deuxième site d’Africa Processing Company SA.",
          corps: [
            "L’Est est une grande région cacaoyère, longtemps restée à l’écart de l’industrie. En y installant notre deuxième usine, nous avons rapproché la transformation des plantations.",
            "L’objectif est double, et je l’assume pleinement. Il est économique, parce qu’augmenter notre capacité de production renforce l’entreprise. Il est profondément social, parce qu’il s’agit de contribuer au développement de la région, de lutter contre l’exode rural et de valoriser le travail de nos planteurs.",
          ],
          photos: "Photos du site et des producteurs partenaires",
        },
        {
          site: "bangou",
          titre: "DENKY : transformer les ressources là où elles se trouvent",
          filiere: "Agroalimentaire multi filières : céréales, fruits séchés, chips, sucres, charcuterie.",
          reperes:
            "Inauguration le 26 juin 2026 à Dengou Bandenkop, par Bangou. Site alimenté par un champ solaire, complété par un groupe électrogène.",
          corps: [
            "Avec DENKY, j’ai voulu prouver que la méthode éprouvée dans le cacao s’applique à d’autres filières. Nous avons choisi de nous installer au cœur du terroir, là où la matière première est abondante et où les populations ont le plus besoin d’opportunités.",
            "Les infrastructures y faisaient encore défaut. Nous ne les avons pas attendues. Le site produit sa propre énergie, s’approvisionne auprès d’agriculteurs de la région et propose des produits accessibles à toutes les familles. Sa présence appelle à son tour la route, l’électricité et les services.",
          ],
          photos: "Photos de l’usine DENKY et du champ solaire",
          photo: { fichier: "denky", legende: "Devant l’usine DENKY, à Bangou" },
        },
        {
          site: "maroua",
          titre: "L’arachide, prochaine page de notre histoire industrielle",
          filiere: "Arachide : huile, pâte et produits dérivés.",
          reperes: "Projet en préparation. La date d’inauguration sera communiquée ultérieurement.",
          corps: [
            "L’arachide est cultivée par un très grand nombre d’exploitations familiales de l’Extrême-Nord, mais elle est encore largement vendue à l’état brut. Le futur site de Maroua couvrira toute la chaîne de transformation, de l’extraction de l’huile à la fabrication de pâte.",
            "Pour les producteurs, ce sera un débouché local et stable. Pour Maroua et ses environs, de nouveaux emplois. Pour moi, la confirmation que chaque région du Cameroun porte en elle une industrie qui attend d’exister.",
          ],
          photos: "Visuel d’illustration de la filière arachide",
        },
      ],
    },
    {
      type: "texte",
      id: "caoly",
      fond: "sable",
      surtitre: "La marque CA’OLY",
      titre: "CA’OLY, un nom camerounais sur un produit camerounais",
      corps: [
        "Pendant longtemps, la réputation de notre cacao a profité à d’autres marques que les nôtres. En créant CA’OLY, Cacao des Lions, j’ai voulu que la fierté revienne à ceux qui cultivent, récoltent et transforment.",
        "CA’OLY, ce sont deux gammes. La première s’adresse aux professionnels, avec le beurre, la masse et la poudre de cacao. La seconde s’invite dans le quotidien des familles, avec plus de quinze produits de consommation, de la pâte à tartiner aux desserts.",
        "Chaque produit vendu sous ce nom raconte la même chose : ceci vient de chez nous, et nous en sommes fiers.",
      ],
      boutons: [{ label: "Découvrir les produits CA’OLY" }],
      photo: { fichier: "stand", legende: "Sur un stand CA’OLY, Le cacao des Lions" },
    },
    {
      type: "cartes",
      id: "qualite",
      surtitre: "L’exigence de qualité",
      titre: "La qualité comme acte de responsabilité",
      intro:
        "Produire bien, c’est protéger ceux qui consomment, ceux qui fabriquent et ceux qui nous font confiance. Cette exigence guide toutes nos décisions industrielles.",
      colonnes: 4,
      items: [
        {
          icone: "search",
          titre: "Un laboratoire interne.",
          texte: "Chaque lot est analysé et testé sur place, avant de quitter l’usine.",
        },
        {
          icone: "medal",
          titre: "Des produits certifiés.",
          texte:
            "Nos produits répondent aux normes nationales contrôlées par l’ANOR et font l’objet d’analyses du Centre Pasteur.",
        },
        {
          icone: "pin",
          titre: "Une traçabilité assurée.",
          texte: "De la plantation au produit fini, nous savons d’où vient chaque fève.",
        },
        {
          icone: "sante",
          titre: "Un suivi de la santé au travail.",
          texte: "Un médecin du travail veille à l’hygiène et à la santé de nos équipes.",
        },
      ],
      citation: "Notre principe est de produire des choses que nous serions prêts à donner à manger à nos enfants.",
    },
    {
      type: "cartes",
      id: "impact",
      fond: "sable",
      surtitre: "Ce que ces usines changent",
      titre: "Derrière chaque usine, des vies qui changent",
      items: [
        {
          titre: "Pour les planteurs.",
          texte: "Un débouché proche, régulier et équitable. Le fruit de leur travail est enfin valorisé chez eux.",
        },
        { titre: "Pour les jeunes.", texte: "Un métier, une formation et une raison de rester dans leur région." },
        {
          titre: "Pour les territoires.",
          texte: "De l’activité, des services et des infrastructures qui suivent l’implantation industrielle.",
        },
      ],
      conclusion:
        "Plus de 500 emplois directs et indirects existent aujourd’hui grâce à ces sites. Derrière ce nombre, il y a des visages, des familles et des projets de vie. C’est cela, ma véritable mesure du succès.",
    },
    {
      type: "frise",
      id: "ce-qui-vient",
      surtitre: "La suite",
      titre: "Ce qui vient",
      prospective: true,
      items: [
        { date: "2028 à 2029", texte: "Porter la capacité de broyage de cacao à 24 000 tonnes par an." },
        { date: "Prochainement", texte: "Ouvrir le site de transformation de l’arachide à Maroua." },
        { date: "Horizon 2036", texte: "Dix usines dans dix régions et 5 000 emplois directs et indirects." },
      ],
    },
    {
      type: "galerie",
      id: "galerie",
      fond: "sable",
      surtitre: "Galerie",
      titre: "Entrez dans nos usines",
      intro:
        "Les images valent mieux qu’un long discours. Parcourez nos ateliers, rencontrez nos équipes et suivez la fève jusqu’au produit fini.",
      vignettes: [
        { fichier: "denky", legende: "Usine DENKY, Bangou" },
        "Ligne de production, usine de Mbankomo",
        "Laboratoire interne",
        { fichier: "chantier", legende: "Sur le terrain, avec les équipes" },
        "Site de Ngolambélé",
        "Produits CA’OLY",
        "Courte vidéo d’atelier",
      ],
      boutons: [
        { label: "Voir les reportages sur LCTV", vers: { page: "lctv" } },
        { label: "Découvrir mon expertise pour les États", vers: { page: "expertise-etats" } },
      ],
    },
  ],
};
