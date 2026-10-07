import type { Page } from "@/lib/blocs";

/**
 * Pages légales — DocumentationLisette/LCTN_Site_Pages_legales.pdf
 * Modèles rédigés selon les usages du RGPD et du droit camerounais : à faire relire par un
 * juriste avant la mise en ligne. Les passages entre crochets restent à compléter.
 */
const MAJ = "Dernière mise à jour : 1er octobre 2026.";

export const mentionsLegales: Page = {
  slug: "mentions-legales",
  titre: "Mentions légales | Lisette Claudia TAME NJAMBE",
  description: "Éditeur, directrice de la publication, hébergeur et conditions de reprise des contenus du site officiel de Lisette Claudia TAME NJAMBE.",
  blocs: [
    { type: "entete", surtitre: "Mentions légales", titre: "Mentions légales", intro: ["Qui publie ce site, qui l’héberge et dans quelles conditions ses contenus peuvent être repris."] },
    {
      type: "juridique",
      sections: [
        {
          titre: "Éditeur du site",
          corps: [
            "Le site www.lisetteclaudiatame.com est édité par Lisette Claudia TAME NJAMBE, à titre personnel. Adresse : [adresse postale de contact]. Adresse électronique : contact@lisetteclaudiatame.com. Téléphone : [numéro].",
          ],
        },
        { titre: "Directrice de la publication", corps: ["Lisette Claudia TAME NJAMBE."] },
        {
          titre: "Hébergeur",
          corps: [
            "Le site est hébergé par o2switch, société établie en France, Chemin des Pardiaux, 63000 Clermont-Ferrand. Site : www.o2switch.fr.",
          ],
        },
        {
          titre: "Conception et réalisation",
          corps: ["[Nom du prestataire ayant conçu le site, s’il souhaite être mentionné]."],
        },
        {
          titre: "Propriété intellectuelle",
          corps: [
            "L’ensemble des contenus de ce site, notamment les textes, tribunes, photographies, vidéos, logos, marques et éléments graphiques, est protégé par le droit de la propriété intellectuelle. Les marques CA’OLY, DENKY et LCTV ainsi que leurs logos appartiennent à leurs titulaires respectifs.",
            "Toute reproduction, représentation ou adaptation, totale ou partielle, sans autorisation écrite préalable est interdite, à l’exception des contenus de la Salle de presse, qui peuvent être repris par les médias dans les conditions précisées sur cette page.",
          ],
        },
        {
          titre: "Crédits photographiques et vidéo",
          corps: [
            "Team Communication Lisette Claudia TAME NJAMBE. Les crédits propres à chaque image sont indiqués dans la photothèque.",
          ],
        },
        {
          titre: "Liens vers d’autres sites",
          corps: [
            "Ce site contient des liens vers des sites tiers, en particulier dans la revue de presse. Ces sites sont publiés sous la seule responsabilité de leurs éditeurs. L’éditeur du présent site n’exerce aucun contrôle sur leur contenu et ne saurait en être tenu responsable.",
          ],
        },
        {
          titre: "Responsabilité",
          corps: [
            "L’éditeur s’efforce d’assurer l’exactitude et la mise à jour des informations publiées. Il ne peut toutefois garantir l’absence d’erreur ou d’omission. Les informations relatives aux projets à venir sont données à titre indicatif et peuvent évoluer.",
          ],
        },
        {
          titre: "Droit applicable",
          corps: [
            "Le présent site est soumis au droit camerounais. Tout litige relatif à son utilisation relève des juridictions compétentes de [ville].",
          ],
        },
        { titre: "Contact", corps: ["Pour toute question relative au site : contact@lisetteclaudiatame.com."] },
      ],
    },
  ],
};

export const confidentialite: Page = {
  slug: "politique-de-confidentialite",
  titre: "Politique de confidentialité | Lisette Claudia TAME NJAMBE",
  description: "Quelles données personnelles sont recueillies sur le site de Lisette Claudia TAME NJAMBE, dans quel but, pendant combien de temps, et comment exercer vos droits.",
  blocs: [
    {
      type: "entete",
      surtitre: "Politique de confidentialité",
      titre: "Politique de confidentialité",
      intro: [
        "La confiance des personnes qui nous écrivent est essentielle. Cette page explique, en termes simples, quelles données personnelles sont recueillies sur ce site, dans quel but, pendant combien de temps, et comment exercer vos droits.",
        "Elle est établie conformément à la loi camerounaise n° 2024/017 du 23 décembre 2024 relative à la protection des données à caractère personnel et, pour les visiteurs situés dans l’Union européenne, au Règlement général sur la protection des données (RGPD).",
      ],
    },
    {
      type: "juridique",
      maj: MAJ,
      sections: [
        {
          titre: "1. Qui est responsable de vos données",
          corps: [
            "Le responsable du traitement est Lisette Claudia TAME NJAMBE, éditrice du site. Pour toute question relative à vos données, vous pouvez écrire à contact@lisetteclaudiatame.com.",
          ],
        },
        {
          titre: "2. Quelles données nous recueillons, et pourquoi",
          corps: [
            {
              point: "Formulaire États et institutions.",
              texte:
                "Nom, prénom, fonction, institution, pays, adresse électronique, téléphone, contenu du message. Finalité : répondre à votre demande et, le cas échéant, préparer un échange. Fondement : démarches engagées à votre demande.",
            },
            {
              point: "Formulaire Médias.",
              texte:
                "Nom, prénom, média, fonction, adresse électronique, téléphone, contenu de la demande. Finalité : répondre aux demandes de presse. Fondement : intérêt légitime à entretenir des relations avec les médias.",
            },
            {
              point: "Formulaire Conférences.",
              texte:
                "Nom, prénom, organisation, coordonnées, informations sur l’événement. Finalité : étudier l’invitation et y répondre. Fondement : démarches engagées à votre demande.",
            },
            {
              point: "Formulaire Partenariats et autres demandes.",
              texte:
                "Nom, prénom, organisation, coordonnées, contenu du message. Finalité : répondre à votre message. Fondement : intérêt légitime à répondre aux personnes qui nous écrivent.",
            },
            {
              point: "Lettre d’information et abonnement aux communiqués.",
              texte:
                "Adresse électronique. Finalité : vous envoyer les publications auxquelles vous vous êtes abonné. Fondement : votre consentement, que vous pouvez retirer à tout moment.",
            },
            {
              point: "Mesure d’audience.",
              texte:
                "Données de navigation : pages consultées, durée de visite, type d’appareil, pays de connexion. Finalité : comprendre l’usage du site et l’améliorer. Fondement : votre consentement, recueilli par le bandeau cookies.",
            },
            "Nous ne recueillons que les données nécessaires. Les champs obligatoires sont signalés dans chaque formulaire. Ce site ne demande aucune donnée sensible et nous vous invitons à ne pas en communiquer dans vos messages.",
          ],
        },
        {
          titre: "3. Combien de temps nous les conservons",
          corps: [
            { point: "Demandes reçues par formulaire :", texte: "3 ans à compter du dernier échange, puis suppression." },
            { point: "Lettre d’information et communiqués :", texte: "jusqu’à votre désinscription." },
            { point: "Données de mesure d’audience :", texte: "13 mois au maximum." },
            { point: "Votre choix concernant les cookies :", texte: "6 mois, après quoi il vous est redemandé." },
          ],
        },
        {
          titre: "4. Qui a accès à vos données",
          corps: [
            "Vos données sont destinées au cabinet de Lisette Claudia TAME NJAMBE et aux seules personnes chargées de traiter votre demande. Elles ne sont jamais vendues, louées ni cédées à des tiers à des fins commerciales.",
            "Elles peuvent être traitées, pour notre compte et selon nos instructions, par des prestataires techniques : o2switch, hébergeur du site, [outil d’envoi de la lettre d’information], [outil de mesure d’audience].",
          ],
        },
        {
          titre: "5. Transferts hors de votre pays",
          corps: [
            "Le site et les données recueillies par ses formulaires sont hébergés en France, par o2switch. D’autres prestataires peuvent être établis hors du Cameroun ou hors de l’Union européenne. Dans ce cas, nous veillons à ce que le transfert soit encadré par les garanties prévues par la réglementation applicable. [À préciser une fois choisis l’outil de lettre d’information et l’outil de mesure d’audience.]",
          ],
        },
        {
          titre: "6. Comment nous protégeons vos données",
          corps: [
            "Le site utilise une connexion sécurisée (https). L’accès aux données est limité aux personnes habilitées et protégé par mot de passe. Des sauvegardes régulières sont effectuées par l’hébergeur.",
          ],
        },
        {
          titre: "7. Vos droits",
          corps: [
            "Vous disposez du droit d’accéder à vos données, de les faire rectifier, de les faire effacer, d’en limiter le traitement, de vous y opposer et, lorsque cela s’applique, d’en obtenir une copie dans un format réutilisable. Vous pouvez retirer votre consentement à tout moment, sans que cela remette en cause les traitements déjà effectués.",
            "Pour exercer ces droits, écrivez à contact@lisetteclaudiatame.com, en précisant votre demande. Une réponse vous sera apportée dans un délai d’un mois. Une pièce d’identité ne pourra vous être demandée qu’en cas de doute raisonnable sur votre identité.",
            "Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir l’autorité de protection des données compétente : l’autorité camerounaise chargée de la protection des données à caractère personnel ou, si vous résidez dans l’Union européenne, l’autorité de votre pays, par exemple la CNIL en France.",
          ],
        },
        {
          titre: "8. Mineurs",
          corps: ["Ce site ne s’adresse pas spécifiquement aux mineurs et ne recueille pas sciemment leurs données."],
        },
        {
          titre: "9. Modification de cette politique",
          corps: [
            "Cette politique peut être mise à jour. La date de dernière mise à jour figure ci-dessous. En cas de changement important, une information sera affichée sur le site.",
          ],
        },
      ],
    },
  ],
};

export const cookies: Page = {
  slug: "gestion-des-cookies",
  titre: "Gestion des cookies | Lisette Claudia TAME NJAMBE",
  description: "Les cookies utilisés sur le site de Lisette Claudia TAME NJAMBE, leur durée de vie et la manière de modifier vos choix.",
  blocs: [
    {
      type: "entete",
      surtitre: "Gestion des cookies",
      titre: "Politique de gestion des cookies",
      intro: ["Cette page complète le bandeau de consentement affiché à votre première visite."],
    },
    {
      type: "juridique",
      sections: [
        {
          titre: "Qu’est-ce qu’un cookie",
          corps: [
            "Un cookie est un petit fichier déposé sur votre appareil lorsque vous consultez un site. Il permet, par exemple, de mémoriser vos préférences, de mesurer la fréquentation ou d’afficher une vidéo.",
          ],
        },
        {
          titre: "Les cookies utilisés sur ce site",
          corps: [
            {
              point: "Cookies strictement nécessaires.",
              texte:
                "Ils assurent le fonctionnement du site : choix de la langue, sécurité des formulaires, mémorisation de votre choix en matière de cookies. Ils ne nécessitent pas votre consentement.",
            },
            {
              point: "Cookies de mesure d’audience.",
              texte:
                "Ils nous aident à savoir quelles pages sont consultées, afin d’améliorer le site. Outil utilisé : [nom de l’outil]. Ils ne sont déposés qu’avec votre accord.",
            },
            {
              point: "Cookies liés aux vidéos.",
              texte:
                "Les vidéos de LCTV sont hébergées sur YouTube. Leur lecture peut entraîner le dépôt de cookies par YouTube (Google). Ils ne sont déposés qu’avec votre accord. Sans accord, la vidéo est remplacée par une image et un bouton vous permettant de l’autoriser.",
            },
            {
              point: "Cookies liés aux cartes et aux réseaux sociaux.",
              texte:
                "La carte interactive des sites et les boutons de partage peuvent faire appel à des services tiers : [noms]. Ils ne sont activés qu’avec votre accord.",
            },
          ],
        },
        {
          titre: "Ce que nous n’utilisons pas",
          corps: ["Ce site n’utilise aucun cookie publicitaire et ne revend aucune donnée de navigation."],
        },
        {
          titre: "Durée de vie",
          corps: [
            "Les cookies soumis à consentement ont une durée de vie maximale de 13 mois. Votre choix est conservé 6 mois.",
          ],
        },
        {
          titre: "Modifier vos choix",
          corps: [
            "Vous pouvez à tout moment accepter, refuser ou personnaliser les cookies en cliquant sur le lien « Gestion des cookies » présent en bas de chaque page.",
            "Vous pouvez aussi configurer votre navigateur pour bloquer ou supprimer les cookies. Le refus des cookies non nécessaires ne vous empêche pas de consulter le site.",
          ],
        },
        {
          titre: "Tableau des cookies",
          corps: [
            "[Tableau à compléter par le prestataire technique une fois le site construit : nom du cookie, fournisseur, finalité, durée.]",
          ],
        },
      ],
    },
  ],
};

export const conditions: Page = {
  slug: "conditions-d-utilisation",
  titre: "Conditions d’utilisation | Lisette Claudia TAME NJAMBE",
  description: "Les conditions de consultation du site de Lisette Claudia TAME NJAMBE et de reprise de ses contenus.",
  blocs: [
    {
      type: "entete",
      surtitre: "Conditions d’utilisation",
      titre: "Conditions d’utilisation du site",
      intro: [
        "Les présentes conditions encadrent la consultation du site et l’utilisation de ses contenus. En naviguant sur le site, vous les acceptez.",
      ],
    },
    {
      type: "juridique",
      maj: MAJ,
      sections: [
        {
          titre: "Accès au site",
          corps: [
            "Le site est accessible gratuitement. L’éditeur s’efforce de le maintenir disponible mais ne peut garantir une continuité sans interruption, notamment en cas de maintenance.",
          ],
        },
        {
          titre: "Utilisation des contenus",
          corps: [
            "Les contenus sont mis à disposition pour l’information du public. Vous pouvez les consulter, les partager par lien et les citer brièvement en indiquant la source.",
            "Les contenus de la Salle de presse, les tribunes et les vidéos de LCTV peuvent être repris par les médias à des fins d’information, gratuitement, sans modification qui en altère le sens et avec la mention du crédit indiqué. Toute utilisation commerciale ou publicitaire nécessite un accord écrit préalable.",
          ],
        },
        {
          titre: "Usages interdits",
          corps: [
            "Il est interdit d’utiliser les contenus du site d’une manière qui porte atteinte à l’image de Lisette Claudia TAME NJAMBE ou de ses entreprises, de les présenter hors de leur contexte de façon trompeuse, ou de tenter de perturber le fonctionnement du site.",
          ],
        },
        {
          titre: "Formulaires",
          corps: [
            "Les personnes qui utilisent les formulaires s’engagent à fournir des informations exactes et à ne pas transmettre de contenu illicite ou injurieux.",
          ],
        },
        {
          titre: "Évolution",
          corps: ["Ces conditions peuvent être modifiées à tout moment. La version en vigueur est celle publiée sur cette page."],
        },
      ],
    },
  ],
};
