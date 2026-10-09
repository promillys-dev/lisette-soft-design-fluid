import type { Page } from "@/lib/blocs";
import { reseaux } from "@/lib/reseaux";
import { confirmation } from "./commun";

/** Menu 10 · Contact — DocumentationLisette/LCTN_Site_Menu_10_Contact.pdf */
export const page: Page = {
  slug: "contact",
  titre: "Contact | Lisette Claudia TAME NJAMBE",
  description:
    "Contacter Lisette Claudia TAME NJAMBE : sollicitations des États et institutions, demandes de presse, invitations à des conférences, partenariats et messages personnels.",
  blocs: [
    {
      type: "entete",
      surtitre: "Contact",
      titre: "Parlons de ce que nous pouvons construire ensemble",
      intro: [
        "J’accorde de l’importance à chaque message. Pour que le vôtre arrive directement à la bonne personne et reçoive une réponse utile, choisissez ci-dessous l’espace qui correspond à votre demande.",
      ],
      photo: { fichier: "portrait", legende: "Portrait de Lisette Claudia TAME NJAMBE" },
    },
    {
      type: "formulaires",
      id: "formulaires",
      surtitre: "Quatre portes d’entrée",
      titre: "Choisissez l’espace qui correspond à votre demande",
      formulaires: [
        {
          id: "etats",
          porte: {
            icone: "state",
            titre: "États et institutions",
            texte:
              "Vous représentez un gouvernement, un ministère, une collectivité ou une organisation internationale et vous portez un projet d’industrialisation. Votre demande est traitée en priorité et en toute confidentialité.",
            bouton: "Initier un échange institutionnel",
          },
          titre: "États et institutions",
          intro: "Formulaire confidentiel.",
          champs: [
            { label: "Nom et prénom", requis: true },
            { label: "Fonction" },
            { label: "Institution ou ministère", requis: true },
            { label: "Pays" },
            { label: "Adresse électronique professionnelle", type: "email", requis: true },
            { label: "Téléphone", type: "tel" },
            {
              label: "Objet",
              type: "choix",
              options: [
                "Plan stratégique d’industrialisation",
                "Usine clés en main",
                "Mécanismes de production",
                "Stratégie d’écosystème",
                "Visite de site",
                "Autre",
              ],
            },
            { label: "Filière ou territoire concerné" },
            { label: "Échéance souhaitée", large: true },
            { label: "Votre message", type: "zone" },
          ],
          bouton: "Envoyer ma demande",
          note: "Vos informations restent strictement confidentielles.",
        },
        {
          id: "medias",
          porte: {
            icone: "press",
            titre: "Médias",
            texte:
              "Vous préparez un article, un reportage ou une émission. Demande d’interview, tournage sur site, visuels, vérification d’une information : le service de presse vous répond.",
            bouton: "Contacter le service de presse",
          },
          titre: "Médias",
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
        {
          id: "conferences",
          porte: {
            icone: "people",
            titre: "Conférences et prises de parole",
            texte:
              "Vous organisez un forum, un sommet, une rencontre universitaire ou un événement d’entreprise et vous souhaitez m’y inviter. J’interviens sur l’industrialisation, la transformation locale, l’entrepreneuriat et le leadership.",
            bouton: "Proposer une invitation",
          },
          titre: "Conférences et prises de parole",
          intro: "Les précisions demandées permettent de répondre vite.",
          champs: [
            { label: "Nom et prénom", requis: true },
            { label: "Organisation" },
            { label: "Adresse électronique", type: "email", requis: true },
            { label: "Téléphone", type: "tel" },
            { label: "Nom de l’événement" },
            { label: "Date", type: "date" },
            { label: "Ville et pays" },
            { label: "Format", type: "choix", options: ["Présentiel", "À distance"] },
            { label: "Thème souhaité" },
            { label: "Public attendu et nombre de participants" },
            { label: "Durée de l’intervention" },
            { label: "Langue" },
            { label: "Votre message", type: "zone" },
          ],
          bouton: "Envoyer mon invitation",
        },
        {
          id: "partenariats",
          porte: {
            icone: "user",
            titre: "Partenariats et autres demandes",
            texte:
              "Vous êtes investisseur, industriel, producteur, distributeur, chercheur ou étudiant. Vous avez une proposition, une question ou simplement un mot à me faire parvenir.",
            bouton: "Écrire un message",
          },
          titre: "Partenariats et autres demandes",
          champs: [
            { label: "Nom et prénom", requis: true },
            { label: "Organisation (facultatif)" },
            { label: "Adresse électronique", type: "email", requis: true },
            { label: "Téléphone (facultatif)", type: "tel" },
            {
              label: "Vous êtes",
              type: "choix",
              options: ["Investisseur", "Industriel", "Producteur", "Distributeur", "Étudiant ou chercheur", "Autre"],
            },
            { label: "Objet" },
            { label: "Votre message", type: "zone" },
          ],
          bouton: "Envoyer mon message",
        },
      ],
      confirmation,
      protection: {
        texte:
          "Les informations transmises par ces formulaires servent uniquement à traiter votre demande. Elles ne sont ni cédées ni utilisées à d’autres fins. Vous pouvez à tout moment demander à les consulter, à les corriger ou à les faire supprimer.",
        lien: { label: "Lire la politique de confidentialité", vers: { page: "politique-de-confidentialite" } },
      },
    },
    {
      type: "coordonnees",
      id: "coordonnees",
      fond: "sable",
      surtitre: "Coordonnées",
      titre: "Nous joindre directement",
      items: [
        {
          titre: "Cabinet de Lisette Claudia TAME NJAMBE",
          champs: ["Adresse postale", "Adresse électronique générale", "Téléphone"],
        },
        { titre: "Service de presse", champs: ["Nom du contact", "Adresse électronique", "Téléphone"] },
        { titre: "Relations institutionnelles", champs: ["Nom du contact", "Adresse électronique", "Téléphone"] },
      ],
      carte: "Carte de localisation du siège, à Mbankomo, près de Yaoundé",
    },
    {
      type: "cartes",
      id: "entreprises",
      surtitre: "Mes entreprises",
      titre: "Vous cherchez à joindre l’une de mes entreprises ?",
      intro:
        "Pour une commande, une demande de distribution ou une question sur un produit, adressez-vous directement à l’entreprise concernée.",
      colonnes: 2,
      items: [
        {
          icone: "factory",
          titre: "Africa Processing Company SA et CA’OLY",
          texte: "Transformation du cacao : produits intermédiaires et produits finis.",
          bouton: { label: "Aller sur le site de l’entreprise" },
        },
        {
          icone: "factory",
          titre: "DENKY, Meta Invest SA",
          texte: "Transformation agroalimentaire à Bangou, dans la région de l’Ouest.",
          bouton: { label: "Aller sur le site de l’entreprise" },
        },
      ],
    },
    {
      type: "encadre",
      id: "reseaux",
      fond: "sable",
      surtitre: "Réseaux sociaux",
      titre: "Suivez mon actualité",
      corps: ["Je partage régulièrement mes réflexions, la vie de nos usines et les grandes étapes de nos projets."],
      boutons: reseaux.map((reseau) => ({
        label: reseau.nom,
        icone: reseau.icone,
        vers: { url: reseau.url },
        style: "ligne",
      })),
    },
    {
      type: "lettre",
      id: "lettre",
      surtitre: "Lettre d’information",
      titre: "Restons en lien",
      texte:
        "Recevez mes nouvelles tribunes, les dernières vidéos de LCTV et les grandes étapes de nos projets industriels. Quelques messages par an, jamais davantage.",
      champ: "Votre adresse électronique",
      bouton: "Je m’inscris",
      note: "Vous pourrez vous désinscrire à tout moment, en un clic.",
    },
  ],
};
