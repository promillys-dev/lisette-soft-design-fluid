import type { Page } from "@/lib/blocs";

/**
 * Pages légales — DocumentationLisette/LCTN_Site_Pages_legales.pdf
 * Modèles rédigés selon les usages du RGPD et du droit camerounais : à faire relire par un
 * juriste. Les passages entre crochets restent à compléter.
 *
 * Ce qu'ils décrivent, vérifié sur le site en ligne le 26 novembre 2026 :
 * - le site est servi par Vercel (États-Unis) ; la messagerie du domaine, l'administration
 *   WordPress (vidéos de LCTV) et le serveur de l'assistant conversationnel sont chez o2switch ;
 * - le site ne dépose aucun cookie et n'a ni mesure d'audience ni bandeau de consentement ;
 * - l'assistant ne dépose rien non plus (identifiant de conversation gardé en mémoire), mais
 *   peut recueillir nom, téléphone et adresse électronique ;
 * - les vidéos YouTube sont lues en mode youtube-nocookie, chargé au clic ; leurs vignettes
 *   viennent de i.ytimg.com.
 */
const MAJ = "Dernière mise à jour : 26 novembre 2026.";

export const mentionsLegales: Page = {
  slug: "mentions-legales",
  titre: "Mentions légales | Lisette Claudia TAME NJAMBE",
  description: "Éditeur, directrice de la publication, hébergeurs et conditions de reprise des contenus du site officiel de Lisette Claudia TAME NJAMBE.",
  blocs: [
    { type: "entete", surtitre: "Mentions légales", titre: "Mentions légales", intro: ["Qui publie ce site, qui l’héberge et dans quelles conditions ses contenus peuvent être repris."] },
    {
      type: "juridique",
      maj: MAJ,
      sections: [
        {
          titre: "Éditeur du site",
          corps: [
            "Le site www.lisetteclaudiatame.com est édité par Lisette Claudia TAME NJAMBE, à titre personnel. Adresse : [adresse postale de contact]. Adresse électronique : contact@lisetteclaudiatame.com. Téléphone : [numéro].",
          ],
        },
        { titre: "Directrice de la publication", corps: ["Lisette Claudia TAME NJAMBE."] },
        {
          titre: "Hébergement",
          corps: [
            {
              point: "Le site :",
              texte: "Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis. Site : vercel.com.",
            },
            {
              point: "La messagerie, l’espace d’administration des vidéos de LCTV et l’assistant conversationnel :",
              texte:
                "o2switch, SAS au capital de 100 000 €, RCS Clermont-Ferrand 510 909 807, Chemin des Pardiaux, 63000 Clermont-Ferrand, France. Téléphone : 04 44 44 60 40. Site : www.o2switch.fr.",
            },
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
          corps: ["Sauf mention contraire : Team Communication Lisette Claudia TAME NJAMBE."],
        },
        {
          titre: "Liens vers d’autres sites",
          corps: [
            "Ce site contient des liens vers des sites tiers, en particulier dans la revue de presse, et vers les comptes de Lisette Claudia TAME NJAMBE sur les réseaux sociaux. Ces sites sont publiés sous la seule responsabilité de leurs éditeurs. L’éditeur du présent site n’exerce aucun contrôle sur leur contenu et ne saurait en être tenu responsable.",
          ],
        },
        {
          titre: "Responsabilité",
          corps: [
            "L’éditeur s’efforce d’assurer l’exactitude et la mise à jour des informations publiées. Il ne peut toutefois garantir l’absence d’erreur ou d’omission. Les informations relatives aux projets à venir sont données à titre indicatif et peuvent évoluer.",
          ],
        },
        {
          titre: "Données personnelles et cookies",
          corps: [
            "Les données recueillies sur ce site et la manière d’exercer vos droits sont décrites dans la politique de confidentialité. Les cookies sont traités dans la page Gestion des cookies.",
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
              point: "Assistant conversationnel.",
              texte:
                "Les questions que vous posez à l’assistant du site et, seulement si vous choisissez de les indiquer, votre nom, votre téléphone et votre adresse électronique. Finalité : répondre à vos questions et, à votre demande, vous recontacter. Fondement : démarches engagées à votre demande. Les réponses de l’assistant sont produites automatiquement par [service d’intelligence artificielle].",
            },
            {
              point: "Données techniques de connexion.",
              texte:
                "À chaque visite, l’hébergeur du site enregistre des données techniques : adresse IP, pages demandées, date et heure, type de navigateur. Finalité : faire fonctionner le site et le protéger contre les abus. Fondement : intérêt légitime à assurer la sécurité du site.",
            },
            "Nous ne recueillons que les données nécessaires. Les champs obligatoires sont signalés dans chaque formulaire. Ce site ne demande aucune donnée sensible et nous vous invitons à ne pas en communiquer dans vos messages.",
            "Le site n’utilise aucun outil de mesure d’audience ni de publicité.",
          ],
        },
        {
          titre: "3. Combien de temps nous les conservons",
          corps: [
            { point: "Demandes reçues par formulaire :", texte: "3 ans à compter du dernier échange, puis suppression." },
            { point: "Lettre d’information et communiqués :", texte: "jusqu’à votre désinscription." },
            { point: "Conversations avec l’assistant et coordonnées laissées :", texte: "[durée de conservation]." },
            {
              point: "Données techniques de connexion :",
              texte: "durée limitée, fixée par l’hébergeur pour assurer la sécurité du site.",
            },
          ],
        },
        {
          titre: "4. Qui a accès à vos données",
          corps: [
            "Vos données sont destinées au cabinet de Lisette Claudia TAME NJAMBE et aux seules personnes chargées de traiter votre demande. Elles ne sont jamais vendues, louées ni cédées à des tiers à des fins commerciales.",
            "Elles peuvent être traitées, pour notre compte et selon nos instructions, par des prestataires techniques : Vercel, hébergeur du site ; o2switch, qui héberge la messagerie, l’espace d’administration et l’assistant conversationnel ; [service d’intelligence artificielle], qui produit les réponses de l’assistant ; [outil d’envoi de la lettre d’information].",
            "Les vidéos de LCTV sont hébergées par YouTube (Google). Leurs vignettes sont chargées depuis les serveurs de YouTube, et son lecteur ne l’est que lorsque vous lancez une vidéo. YouTube traite alors les données de connexion pour son propre compte, selon sa politique de confidentialité.",
          ],
        },
        {
          titre: "5. Transferts hors de votre pays",
          corps: [
            "Le site est hébergé aux États-Unis par Vercel Inc. Vercel adhère au cadre de protection des données UE – États-Unis (Data Privacy Framework) et encadre ses transferts par les clauses contractuelles types de la Commission européenne.",
            "La messagerie, l’espace d’administration et l’assistant conversationnel sont hébergés en France, par o2switch. [Pays d’établissement du service d’intelligence artificielle et garanties encadrant le transfert.]",
          ],
        },
        {
          titre: "6. Comment nous protégeons vos données",
          corps: [
            "Le site et l’assistant utilisent une connexion sécurisée (https). L’accès aux données est limité aux personnes habilitées et protégé par mot de passe. Des sauvegardes régulières sont effectuées par l’hébergeur.",
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
          titre: "8. Cookies",
          corps: [
            "Le site ne dépose lui-même aucun cookie. Seul YouTube peut en déposer, lorsque vous lancez une vidéo de LCTV : la page Gestion des cookies en donne le détail.",
          ],
        },
        {
          titre: "9. Mineurs",
          corps: ["Ce site ne s’adresse pas spécifiquement aux mineurs et ne recueille pas sciemment leurs données."],
        },
        {
          titre: "10. Modification de cette politique",
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
  description: "Les cookies sur le site de Lisette Claudia TAME NJAMBE : aucun cookie déposé par le site, ceux de YouTube à la lecture d’une vidéo, et la manière de les refuser.",
  blocs: [
    {
      type: "entete",
      surtitre: "Gestion des cookies",
      titre: "Politique de gestion des cookies",
      intro: [
        "Ce site ne dépose aucun cookie publicitaire ni de mesure d’audience. Cette page décrit le seul cas où un service tiers peut en déposer, et comment l’éviter.",
      ],
    },
    {
      type: "juridique",
      maj: MAJ,
      sections: [
        {
          titre: "Qu’est-ce qu’un cookie",
          corps: [
            "Un cookie est un petit fichier déposé sur votre appareil lorsque vous consultez un site. Il permet, par exemple, de mémoriser vos préférences, de mesurer la fréquentation ou d’afficher une vidéo. Les mêmes règles s’appliquent aux autres traceurs, comme le stockage local du navigateur.",
          ],
        },
        {
          titre: "Ce que dépose le site",
          corps: [
            "Rien. Le site ne dépose aucun cookie et n’utilise pas le stockage de votre navigateur. Ses polices de caractères sont servies par le site lui-même, sans appel à un service extérieur.",
            "L’assistant conversationnel ne dépose rien non plus : la conversation est rattachée à un identifiant temporaire, gardé en mémoire et effacé à la fermeture de la page.",
          ],
        },
        {
          titre: "Les vidéos de LCTV",
          corps: [
            "Les vidéos de LCTV sont hébergées sur YouTube et lues en mode « confidentialité renforcée » (youtube-nocookie.com). Le lecteur n’est chargé que lorsque vous cliquez sur une vidéo. Les vignettes affichées avant la lecture proviennent des serveurs d’images de YouTube, qui ne déposent pas de cookie.",
            "Une fois la lecture lancée, YouTube (Google) peut déposer des cookies ou utiliser le stockage de votre navigateur, selon sa propre politique de confidentialité (policies.google.com/privacy). Si vous ne souhaitez pas de ces traceurs, il suffit de ne pas lancer les vidéos : le reste du site reste entièrement accessible.",
          ],
        },
        {
          titre: "Les réseaux sociaux",
          corps: [
            "Les liens vers LinkedIn, Facebook, Instagram et TikTok sont de simples liens. Aucun bouton de partage ni module de ces réseaux n’est chargé sur le site : ils ne déposent rien tant que vous ne vous rendez pas sur leurs pages.",
          ],
        },
        {
          titre: "Ce que nous n’utilisons pas",
          corps: [
            "Ce site n’utilise aucun cookie publicitaire, aucun outil de mesure d’audience et ne revend aucune donnée de navigation.",
            "Comme aucun traceur n’est déposé sans action de votre part, le site n’affiche pas de bandeau de consentement. Si un outil de mesure d’audience devait être ajouté, votre accord serait demandé au préalable et cette page mise à jour.",
          ],
        },
        {
          titre: "Tableau des cookies",
          corps: [
            { point: "Site lisetteclaudiatame.com :", texte: "aucun cookie." },
            { point: "Assistant conversationnel :", texte: "aucun cookie ; identifiant de conversation gardé en mémoire le temps de la visite." },
            {
              point: "YouTube (Google), à la lecture d’une vidéo :",
              texte: "cookies et stockage local de YouTube, dont la finalité et la durée sont fixées par Google.",
            },
          ],
        },
        {
          titre: "Supprimer ou bloquer les cookies",
          corps: [
            "Vous pouvez configurer votre navigateur pour bloquer ou supprimer les cookies, y compris ceux de YouTube. Cela ne vous empêche pas de consulter le site.",
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
          titre: "Assistant conversationnel",
          corps: [
            "Le site propose un assistant qui répond automatiquement aux questions des visiteurs. Ses réponses sont produites par un programme d’intelligence artificielle : elles peuvent être incomplètes ou inexactes et n’engagent pas Lisette Claudia TAME NJAMBE. Pour toute demande officielle, utilisez les formulaires de la page Contact.",
          ],
        },
        {
          titre: "Données personnelles",
          corps: ["Les données recueillies sur le site sont traitées comme l’explique la politique de confidentialité."],
        },
        {
          titre: "Droit applicable",
          corps: ["Ces conditions sont soumises au droit camerounais, comme le précisent les mentions légales."],
        },
        {
          titre: "Évolution",
          corps: ["Ces conditions peuvent être modifiées à tout moment. La version en vigueur est celle publiée sur cette page."],
        },
      ],
    },
  ],
};
