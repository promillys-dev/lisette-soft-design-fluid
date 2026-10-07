import type { Page } from "@/lib/blocs";
import { confirmation } from "./commun";

/** Menu 9 · Salle de presse — DocumentationLisette/LCTN_Site_Menu_09_Salle_de_presse.pdf */
export const page: Page = {
  slug: "salle-de-presse",
  titre: "Salle de presse | Lisette Claudia TAME NJAMBE : biographies, photos, dossier de presse, revue de presse",
  description:
    "Espace médias de Lisette Claudia TAME NJAMBE : biographies officielles, photographies en haute définition, dossier de presse, fiches repères, communiqués, citations, revue de presse et contact pour les demandes d’interview.",
  blocs: [
    {
      type: "entete",
      surtitre: "Salle de presse",
      titre: "Tout ce dont une rédaction a besoin, au même endroit",
      intro: [
        "Je sais ce que représente un bouclage. Cet espace a été conçu pour vous faire gagner du temps : des informations vérifiées, des visuels libres de droits et un interlocuteur qui vous répond. Tout ce qui s’y trouve peut être repris, en citant la source.",
      ],
      acces: [
        { label: "Biographies", ancre: "biographies" },
        { label: "Photos", ancre: "phototheque" },
        { label: "Dossier de presse", ancre: "dossier" },
        { label: "Fiches repères", ancre: "fiches" },
        { label: "Communiqués", ancre: "communiques" },
        { label: "Citations", ancre: "citations" },
        { label: "Revue de presse", ancre: "revue" },
        { label: "Contact presse", ancre: "contact-presse" },
      ],
      photo: { fichier: "interview", legende: "Lisette Claudia TAME NJAMBE interrogée par une équipe de télévision" },
    },
    {
      type: "liste",
      id: "essentiel",
      style: "definitions",
      surtitre: "Pour le journaliste pressé",
      titre: "L’essentiel en dix lignes",
      items: [
        { titre: "Nom à utiliser", texte: "Lisette Claudia TAME NJAMBE." },
        {
          titre: "Fonctions",
          texte:
            "Fondatrice et Directrice Générale d’Africa Processing Company SA (marque CA’OLY). Fondatrice et Directrice Générale de Meta Invest SA (marque DENKY).",
        },
        { titre: "Secteur", texte: "Agro-industrie. Transformation du cacao et transformation agroalimentaire." },
        {
          titre: "Sites industriels",
          texte: "Mbankomo (Centre), Ngolambélé (Est), Bangou (Ouest). Un site en préparation à Maroua (Extrême-Nord).",
        },
        { titre: "Emplois", texte: "Plus de 500 emplois directs et indirects créés." },
        { titre: "Rang", texte: "Parmi les cinq premiers transformateurs de cacao du Cameroun." },
        { titre: "Distinction", texte: "Chevalier de l’Ordre de la Valeur (mars 2025)." },
        {
          titre: "Formation",
          texte:
            "Licence en génie informatique, Université d’Aix-Marseille. Executive MBA en management stratégique, Université Catholique d’Afrique Centrale.",
        },
        { titre: "Cap 2036", texte: "Dix usines dans dix régions du Cameroun et 5 000 emplois directs et indirects." },
        {
          titre: "Expertise",
          texte: "Conception de stratégies d’industrialisation et d’usines clés en main pour les États et les institutions.",
        },
      ],
    },
    {
      type: "biographies",
      id: "biographies",
      fond: "sable",
      surtitre: "Biographies officielles",
      titre: "Trois longueurs, prêtes à reprendre",
      intro: "Rédigées à la troisième personne, comme le veut l’usage de la presse.",
      items: [
        {
          titre: "Biographie courte · environ 50 mots",
          corps: [
            "Lisette Claudia TAME NJAMBE est une industrielle camerounaise, fondatrice d’Africa Processing Company SA, l’un des cinq premiers transformateurs de cacao du Cameroun, et de Meta Invest SA. Chevalier de l’Ordre de la Valeur, elle a créé plus de 500 emplois directs et indirects et accompagne les États dans leurs stratégies d’industrialisation.",
          ],
        },
        {
          titre: "Biographie moyenne · environ 150 mots",
          corps: [
            "Fille d’industriel, Lisette Claudia TAME NJAMBE a grandi au contact des ateliers avant de se former en France et au Cameroun, puis d’apprendre le métier de la transformation du cacao dans la chocolaterie, à l’étranger. De retour au pays sans capital de départ, elle lance son activité dans un local de 66 m² et fonde Africa Processing Company SA en janvier 2021.",
            "L’entreprise, qui commercialise ses produits sous la marque CA’OLY, exploite aujourd’hui deux usines, à Mbankomo et à Ngolambélé, et figure parmi les cinq premiers transformateurs de cacao du Cameroun. Avec Meta Invest SA, elle a ouvert à Bangou l’usine agroalimentaire DENKY. L’ensemble représente plus de 500 emplois directs et indirects.",
            "Chevalier de l’Ordre de la Valeur, elle porte l’ambition d’implanter dix usines dans dix régions du Cameroun à l’horizon 2036 et met son expertise au service des États qui souhaitent industrialiser leurs territoires.",
          ],
        },
        {
          titre: "Biographie longue · environ 400 mots",
          corps: [
            "Lisette Claudia TAME NJAMBE est née dans l’industrie. Son père, Henri TAME SOUMEDJONG, dirigeait Saplait SA et fut l’un des premiers agro-industriels camerounais du secteur laitier. De cette enfance passée au milieu des machines, elle retient moins un héritage qu’un regard : la certitude que produire et transformer peut se faire au Cameroun, par des Camerounais.",
            "Titulaire d’une licence en génie informatique de l’Université d’Aix-Marseille et d’un Executive MBA en management stratégique de l’Université Catholique d’Afrique Centrale, elle se forme au métier de la transformation du cacao dans la chocolaterie, à l’étranger. Elle y voit du cacao camerounais devenir beurre, poudre et chocolat loin de son pays d’origine. Cette observation décide de la suite.",
            "Rentrée au Cameroun, elle prend le temps d’apprendre le marché. Elle importe des produits chocolatiers, puis accompagne des chocolateries dans leur implantation, tout en exerçant des fonctions de management. À la fin de l’année 2020, elle démarre sa propre activité industrielle dans un local loué de 66 m², sans subvention ni capital familial. Africa Processing Company SA est formalisée en janvier 2021.",
            "La croissance est rapide. En mai 2024, l’entreprise s’installe dans sa propre usine à Mbankomo, sur plus d’un hectare. Le site, baptisé CA’OLY, Cacao des Lions, est inauguré le 15 janvier 2025. Un deuxième site ouvre à Ngolambélé, dans la région de l’Est, en novembre 2025. L’entreprise propose à la fois des produits intermédiaires destinés aux industriels et plus de quinze produits finis, vendus au Cameroun, en Afrique et à l’export. Elle figure parmi les cinq premiers transformateurs de cacao du pays.",
            "En mars 2025, le Chef de l’État lui décerne, à titre exceptionnel, la distinction de Chevalier de l’Ordre de la Valeur. En juin 2026, elle inaugure à Bangou, dans la région de l’Ouest, l’usine agroalimentaire DENKY, portée par Meta Invest SA. Un site consacré à l’arachide est en préparation à Maroua, dans la région de l’Extrême-Nord.",
            "Ses entreprises ont créé plus de 500 emplois directs et indirects. Elle y a institué un accompagnement social qui fait partie de son modèle : formation interne aux métiers industriels, transport et restauration du personnel, suivi médical, prise en charge de la maternité.",
            "Convaincue que l’industrialisation transforme la dynamique économique, sociale et alimentaire d’un pays, elle s’est fixé pour cap dix usines dans dix régions du Cameroun et 5 000 emplois directs et indirects à l’horizon 2036. Elle met par ailleurs son expérience à la disposition des États et des institutions, pour lesquels elle conçoit des plans stratégiques d’industrialisation et des usines clés en main.",
          ],
        },
        {
          titre: "Short biography · English",
          langue: "en",
          corps: [
            "Lisette Claudia TAME NJAMBE is a Cameroonian industrialist and the founder of Africa Processing Company SA, one of Cameroon’s top five cocoa processors, and of Meta Invest SA. A Knight of the Order of Valour, she has created more than 500 direct and indirect jobs and advises governments on industrialisation strategy.",
          ],
        },
      ],
      note: "Les versions anglaises des biographies moyenne et longue seront ajoutées lors de la traduction du site.",
    },
    {
      type: "galerie",
      id: "phototheque",
      surtitre: "Photothèque",
      titre: "Photographies libres de droits pour la presse",
      intro:
        "Ces images peuvent être utilisées gratuitement pour illustrer un article ou un reportage consacré à Lisette Claudia TAME NJAMBE ou à ses entreprises, avec mention du crédit indiqué.",
      categories: [
        "Portraits officiels",
        "En situation dans les usines",
        "Avec les équipes",
        "Événements et inaugurations",
        "Sites industriels",
        "Produits",
        "Logos",
      ],
      vignettes: [
        { fichier: "portrait", legende: "Portrait officiel" },
        { fichier: "production", legende: "En situation dans une usine" },
        { fichier: "chantier", legende: "Avec les équipes" },
        { fichier: "denky", legende: "Événement ou inauguration" },
        { fichier: "discours", legende: "Prise de parole" },
        "Site industriel",
        "Produits CA’OLY",
        "Logos : Africa Processing Company SA, CA’OLY, DENKY, LCTV",
      ],
      note: "Chaque image indiquera sa légende, son lieu et sa date, son crédit photo, son format et son poids, avec un bouton Télécharger en haute définition.",
    },
    {
      type: "liste",
      id: "dossier",
      fond: "sable",
      style: "numeros",
      surtitre: "Dossier de presse",
      titre: "Le dossier de presse",
      intro:
        "Un document complet, mis à jour régulièrement, qui réunit l’essentiel sur le parcours, les entreprises et la vision de Lisette Claudia TAME NJAMBE.",
      items: [
        { titre: "Portrait." },
        { titre: "Les grandes dates." },
        { titre: "Les sites industriels." },
        { titre: "La marque CA’OLY et les produits." },
        { titre: "L’engagement humain." },
        { titre: "La vision et le cap 2036." },
        { titre: "L’expertise au service des États." },
        { titre: "Citations et contact presse." },
      ],
      boutons: [{ label: "Télécharger le dossier de presse (PDF)" }],
    },
    {
      type: "liste",
      id: "fiches",
      style: "telechargements",
      surtitre: "Fiches repères",
      titre: "Les fiches repères",
      intro: "Des fiches d’une page, téléchargeables séparément. Aucune donnée financière.",
      items: [
        { titre: "Lisette Claudia TAME NJAMBE en dix dates." },
        { titre: "Africa Processing Company SA et la marque CA’OLY." },
        { titre: "Les sites industriels, région par région." },
        { titre: "DENKY, la transformation agroalimentaire à Bangou." },
        {
          titre: "Emplois et engagement social.",
          texte:
            "À distinguer : plus de 500 emplois directs et indirects déjà créés ; 5 000 emplois directs et indirects visés à l’horizon 2036.",
        },
        { titre: "Le cap 2036 : dix usines, dix régions." },
        { titre: "L’expertise proposée aux États et aux institutions." },
        { titre: "La filière cacao au Cameroun : repères pour comprendre." },
      ],
    },
    {
      type: "registre",
      id: "communiques",
      fond: "sable",
      surtitre: "Communiqués",
      titre: "Communiqués et actualités",
      intro:
        "Inaugurations, annonces, prises de parole, vie des entreprises. Chaque communiqué est disponible en ligne et en PDF.",
      filtres: ["Année", "Entreprise", "Thème"],
      gabarit: ["Date", "Titre", "Résumé de deux lignes", "Lire · Télécharger"],
      note: "Gabarit d’un communiqué : la liste sera chronologique, la plus récente en premier. Thèmes prévus : industrie, social, distinctions, événements.",
      boutons: [{ label: "Recevoir les communiqués par courrier électronique" }],
    },
    {
      type: "citations",
      id: "citations",
      surtitre: "Banque de citations",
      titre: "Citations officielles",
      intro: "Toutes sont issues de ses interviews, discours et tribunes.",
      groupes: [
        {
          theme: "Sur l’industrie",
          citations: [
            "Nous devons démystifier l’industrie et démontrer que tout commence avec une ou deux machines.",
            "Un pays qui ne transforme pas ses ressources offre sa richesse aux autres.",
          ],
        },
        {
          theme: "Sur le cacao",
          citations: [
            "Nous sommes le cinquième producteur mondial de cacao et nous ne consommons pas 5 % de notre propre production. Ce n’est pas une fatalité, c’est un choix que nous n’avons pas encore fait.",
            "Nous sommes la seule industrie locale du cacao offrant des produits intermédiaires et finis.",
          ],
        },
        {
          theme: "Sur son parcours",
          citations: [
            "Ce projet n’est pas un héritage familial ni une entreprise familiale. Nous sommes partis de zéro.",
            "J’ai grandi parmi les machines et j’ai découvert en moi la même passion et la même vocation que mes parents.",
          ],
        },
        {
          theme: "Sur la qualité et l’humain",
          citations: ["Notre principe est de produire des choses que nous serions prêts à donner à manger à nos enfants."],
        },
        { theme: "Aux jeunes", citations: ["Personne ne vous doit rien."] },
      ],
    },
    {
      type: "registre",
      id: "revue",
      fond: "sable",
      surtitre: "Revue de presse",
      titre: "Ils en parlent",
      intro:
        "Retrouvez ici les articles, portraits, reportages et émissions consacrés à Lisette Claudia TAME NJAMBE et à ses entreprises. Chaque lien renvoie vers le média d’origine.",
      logos: true,
      filtres: ["Année", "Type de média", "Média", "Thème", "Langue"],
      gabarit: ["Logo du média", "Titre de l’article ou de l’émission", "Date", "Type", "Une ligne de résumé", "Lire ou Regarder"],
      note: "Gabarit d’une entrée, en attendant la saisie des parutions : presse écrite, web, radio, télévision.",
    },
    {
      type: "cartes",
      id: "pour-les-medias",
      titre: "Tribunes et vidéos pour les médias",
      colonnes: 2,
      items: [
        {
          icone: "press",
          titre: "Tribunes",
          texte:
            "Les textes signés par Lisette Claudia TAME NJAMBE peuvent être repris en citant son nom complet et la source.",
          bouton: { label: "Voir les tribunes", vers: { page: "tribunes" } },
        },
        {
          icone: "play",
          titre: "LCTV",
          texte: "Interviews, discours et images d’usines disponibles pour diffusion, avec la mention « Source : LCTV ».",
          bouton: { label: "Voir les vidéos", vers: { page: "lctv" } },
        },
      ],
    },
    {
      type: "liste",
      id: "sujets",
      fond: "sable",
      surtitre: "Sujets sur lesquels elle s’exprime",
      titre: "Une voix à solliciter sur",
      items: [
        { titre: "L’industrialisation du Cameroun et de l’Afrique." },
        { titre: "La transformation locale des matières premières agricoles." },
        { titre: "La filière cacao, de la plantation au produit fini." },
        { titre: "La souveraineté alimentaire." },
        { titre: "L’emploi des jeunes et la formation aux métiers industriels." },
        { titre: "Le développement par les régions et la lutte contre l’exode rural." },
        { titre: "Le leadership et l’entrepreneuriat des femmes dans l’industrie." },
        { titre: "Le management humain et la responsabilité sociale de l’entreprise." },
      ],
    },
    {
      type: "formulaires",
      id: "contact-presse",
      surtitre: "Contact presse",
      titre: "Votre interlocuteur presse",
      intro:
        "Pour une interview, un reportage sur site, une demande de visuels ou une précision avant publication, écrivez-nous. Indiquez votre média, votre sujet et votre date de bouclage : nous ferons le nécessaire pour vous répondre à temps.",
      formulaires: [
        {
          id: "presse",
          titre: "Demande presse",
          intro: "Coordonnées du contact presse (nom, adresse électronique, téléphone, WhatsApp) : à renseigner par l’équipe.",
          champs: [
            { label: "Nom et prénom", requis: true },
            { label: "Média", requis: true },
            { label: "Fonction" },
            { label: "Adresse électronique", type: "email", requis: true },
            { label: "Téléphone", type: "tel" },
            {
              label: "Nature de la demande",
              type: "choix",
              options: ["Interview", "Reportage sur site", "Visuels", "Vérification d’information", "Autre"],
            },
            { label: "Date de bouclage", type: "date", large: true },
            { label: "Votre message", type: "zone" },
          ],
          bouton: "Envoyer ma demande",
        },
      ],
      confirmation,
    },
    {
      type: "encadre",
      id: "conditions",
      fond: "sable",
      surtitre: "Règles d’utilisation",
      titre: "Conditions de reprise",
      corps: [
        "Les textes, photographies et vidéos de cette Salle de presse sont mis à la disposition des médias à des fins d’information. Ils peuvent être repris gratuitement, sans modification qui en altère le sens, avec la mention du crédit indiqué. Toute utilisation commerciale ou publicitaire nécessite un accord écrit préalable.",
        "Merci d’utiliser le nom complet, Lisette Claudia TAME NJAMBE, à la première mention.",
      ],
    },
  ],
};
