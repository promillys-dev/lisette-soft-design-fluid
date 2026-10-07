import type { Page } from "@/lib/blocs";
import { confirmation } from "./commun";

/** Menu 5 · Expertise au service des États — DocumentationLisette/LCTN_Site_Menu_05_Expertise_Etats.pdf */
export const page: Page = {
  slug: "expertise-etats",
  titre: "Expertise au service des États | Lisette Claudia TAME NJAMBE, industrialisation clés en main",
  description:
    "Lisette Claudia TAME NJAMBE met son expérience d’industrielle au service des États et des institutions : plans stratégiques d’industrialisation, usines clés en main, mécanismes de production et stratégie d’écosystème.",
  blocs: [
    {
      type: "entete",
      surtitre: "Expertise au service des États et des institutions",
      titre: "De l’ambition industrielle à l’usine qui tourne",
      intro: [
        "Beaucoup de pays savent qu’ils doivent industrialiser. Peu savent par où commencer, dans quel ordre avancer et comment éviter les erreurs qui coûtent des années. J’ai parcouru ce chemin moi-même, de la première machine à plusieurs sites industriels. Je mets aujourd’hui cette expérience à la disposition des États et des institutions qui veulent passer à l’acte.",
      ],
      mention:
        "Cette offre s’adresse exclusivement aux États, aux collectivités territoriales et aux institutions publiques ou internationales.",
      photo: { fichier: "audience", legende: "Lisette Claudia TAME NJAMBE reçue en audience officielle" },
    },
    {
      type: "cartes",
      id: "legitimite",
      surtitre: "Ce qui fonde ma légitimité",
      titre: "J’ai bâti avant de conseiller",
      items: [
        {
          titre: "Je l’ai fait.",
          texte:
            "Je ne parle pas d’industrialisation à partir de rapports. J’ai choisi des sites, dimensionné des lignes, négocié des équipements, formé des équipes et tenu des délais.",
        },
        {
          titre: "Je l’ai fait dans des conditions réelles.",
          texte:
            "Sans capital de départ, sans subvention, dans des régions où l’énergie et les routes manquaient parfois. Je connais les obstacles que rencontrent nos pays, parce que je les ai franchis.",
        },
        {
          titre: "Je l’ai fait dans plusieurs filières.",
          texte:
            "Le cacao, l’agroalimentaire, demain l’arachide. La méthode se transpose, et c’est ce qui la rend utile à un État.",
        },
      ],
    },
    {
      type: "liste",
      id: "questions",
      fond: "sable",
      surtitre: "Les questions que se posent les décideurs",
      titre: "Vous vous demandez peut-être",
      items: [
        { titre: "Quelles filières de notre pays ont le plus fort potentiel de transformation locale ?" },
        { titre: "Par quelle région, par quelle ville et par quelle usine commencer ?" },
        { titre: "Comment industrialiser là où l’énergie et les infrastructures ne sont pas encore au rendez-vous ?" },
        { titre: "Où trouver les compétences, quand aucune école ne forme à ces métiers ?" },
        {
          titre:
            "Comment attirer des investisseurs privés et sécuriser l’approvisionnement auprès des producteurs ?",
        },
        { titre: "Comment passer d’un projet pilote à une politique industrielle nationale ?" },
      ],
      conclusion: "Ce sont ces questions que je traite, avec des réponses opérationnelles.",
    },
    {
      type: "accordeon",
      id: "domaines",
      surtitre: "Quatre domaines d’intervention",
      titre: "Ce que j’apporte",
      items: [
        {
          titre: "Plans stratégiques d’industrialisation clés en main",
          corps: [
            "Je conçois pour un État, une région ou une ville un plan d’industrialisation complet et directement applicable. Il ne s’agit pas d’une étude de plus, mais d’une feuille de route que l’on peut exécuter.",
            {
              point: "Ce que le plan contient :",
              texte:
                "un diagnostic des ressources et des filières, la sélection des filières prioritaires, le choix des territoires d’implantation, le dimensionnement des unités, les besoins en énergie et en infrastructures, le plan de formation des compétences, le calendrier de mise en œuvre et les indicateurs de suivi.",
            },
          ],
        },
        {
          titre: "Usines clés en main",
          corps: [
            "Je prends en charge la réalisation d’une unité industrielle, de l’idée jusqu’à la mise en production, puis je la remets en état de marche à ses exploitants.",
            {
              point: "Ce que la prestation couvre :",
              texte:
                "le choix du site, la conception de l’usine et de ses lignes, la sélection et l’installation des équipements, la solution énergétique adaptée y compris en zone enclavée, le recrutement et la formation des équipes, la mise en place du contrôle qualité, le démarrage et l’accompagnement des premiers mois d’exploitation.",
            },
          ],
        },
        {
          titre: "Mécanismes de production à petite, moyenne et grande échelle",
          corps: [
            "Tous les territoires n’ont pas besoin de la même usine. Je conçois des dispositifs adaptés à chaque réalité, capables de grandir avec le temps.",
            {
              point: "Petite échelle.",
              texte:
                "Des unités de proximité, rapides à installer, au plus près des producteurs, pour amorcer la transformation locale.",
            },
            {
              point: "Moyenne échelle.",
              texte: "Des usines régionales qui structurent une filière et alimentent le marché national.",
            },
            {
              point: "Grande échelle.",
              texte: "Des complexes industriels tournés vers l’export et la compétitivité internationale.",
            },
            "Je mets également en place ce qui permet à ces unités de durer : l’organisation de l’approvisionnement, la contractualisation avec les producteurs, les circuits de distribution et l’accès aux marchés.",
          ],
        },
        {
          titre: "Stratégie globale d’industrialisation d’un écosystème",
          corps: [
            "Une usine isolée ne suffit pas. Je pense l’ensemble du système dans lequel elle s’inscrit, à l’échelle locale, nationale ou internationale.",
            {
              point: "Ce que cela recouvre :",
              texte:
                "l’articulation entre agriculture, transformation et commerce, la complémentarité entre régions, la formation aux métiers industriels, les conditions d’attractivité pour les investisseurs, les partenariats entre acteurs publics et privés, l’ouverture des marchés régionaux et internationaux.",
            },
          ],
        },
      ],
    },
    {
      type: "etapes",
      id: "methode",
      fond: "sable",
      surtitre: "Ma méthode",
      titre: "Cinq étapes, de l’écoute à la mise en production",
      items: [
        {
          titre: "Écouter et comprendre.",
          texte:
            "Je commence par votre ambition, vos contraintes et vos priorités. Aucun plan sérieux ne s’écrit sans cela.",
        },
        {
          titre: "Diagnostiquer sur le terrain.",
          texte:
            "Je vais voir les ressources, les producteurs, les sites possibles. Ce qui se décide dans un bureau se vérifie dans un champ.",
        },
        {
          titre: "Concevoir.",
          texte: "Je bâtis le plan, l’usine ou le dispositif, avec un calendrier et des responsabilités clairement établis.",
        },
        {
          titre: "Réaliser et former.",
          texte:
            "Je conduis la mise en œuvre et je forme les équipes locales, pour que le savoir faire reste dans le pays.",
        },
        {
          titre: "Transmettre.",
          texte: "Je remets un outil qui fonctionne à des femmes et des hommes capables de le faire vivre sans moi.",
        },
      ],
    },
    {
      type: "cartes",
      id: "engagements",
      surtitre: "Ce qui distingue mon approche",
      titre: "Quatre engagements",
      colonnes: 4,
      items: [
        {
          titre: "Le réalisme.",
          texte:
            "Je ne propose que ce que j’ai déjà fait ou vu fonctionner dans des conditions comparables aux vôtres.",
        },
        {
          titre: "L’ancrage local.",
          texte: "Je pars toujours des ressources, des savoirs et des populations du territoire.",
        },
        {
          titre: "Le transfert de compétences.",
          texte:
            "Chaque mission laisse derrière elle des équipes formées. C’est pour moi une condition, pas une option.",
        },
        {
          titre: "L’humain.",
          texte:
            "Une industrialisation réussie se mesure aussi aux vies qu’elle améliore. J’intègre la dimension sociale dès la conception.",
        },
      ],
      citation:
        "Aux États qui veulent industrialiser, je n’apporte pas un rapport de plus. J’apporte un plan que j’ai d’abord appliqué à moi-même.",
    },
    {
      type: "liste",
      id: "retombees",
      fond: "sable",
      surtitre: "Ce que gagne un territoire",
      titre: "Les retombées que vous pouvez attendre",
      items: [
        { titre: "Des emplois durables et qualifiés", texte: "qui retiennent la jeunesse dans sa région." },
        { titre: "Des revenus plus stables pour les producteurs", texte: "grâce à un débouché local." },
        { titre: "Une sécurité alimentaire renforcée", texte: "par la transformation de ce que le pays cultive." },
        { titre: "De la valeur ajoutée qui reste sur place", texte: "au lieu de partir avec la matière brute." },
        { titre: "Des infrastructures qui suivent", texte: "parce que l’industrie les rend nécessaires." },
      ],
    },
    {
      type: "encadre",
      id: "preuve",
      surtitre: "La preuve par l’exemple",
      titre: "Venez voir par vous-même",
      corps: [
        "La meilleure façon de juger de mon expertise est de visiter mes usines. Je reçois volontiers les délégations officielles sur nos sites, pour montrer ce qui fonctionne, expliquer ce qui a été difficile et partager ce que j’ai appris.",
      ],
      boutons: [
        { label: "Voir mes réalisations industrielles", vers: { page: "realisations-industrielles" } },
        { label: "Demander une visite de site", vers: { ancre: "sollicitation" } },
      ],
      photo: { fichier: "visite", legende: "Sur le terrain, lors d’une visite de site" },
    },
    {
      type: "formulaires",
      id: "sollicitation",
      fond: "sable",
      surtitre: "Formulaire de sollicitation",
      titre: "Initier un premier échange",
      formulaires: [
        {
          id: "etats",
          titre: "Réservé aux États et aux institutions",
          intro:
            "Vous représentez un État, une collectivité ou une institution et vous portez un projet d’industrialisation. Présentez moi votre besoin en quelques lignes. Chaque demande est traitée avec discrétion et reçoit une réponse personnelle.",
          champs: [
            { label: "Nom et prénom", requis: true },
            { label: "Fonction" },
            { label: "Institution ou ministère", requis: true },
            { label: "Pays" },
            { label: "Adresse électronique professionnelle", type: "email", requis: true },
            { label: "Téléphone", type: "tel" },
            {
              label: "Nature du besoin",
              type: "choix",
              options: [
                "Plan stratégique",
                "Usine clés en main",
                "Mécanismes de production",
                "Stratégie d’écosystème",
                "Autre",
              ],
            },
            { label: "Filière ou territoire concerné" },
            { label: "Votre message", type: "zone" },
          ],
          bouton: "Envoyer ma demande",
          note: "Vos informations restent strictement confidentielles et ne sont utilisées que pour répondre à votre demande.",
        },
      ],
      confirmation,
    },
  ],
};
