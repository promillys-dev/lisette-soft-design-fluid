import { Accueil } from "@/components/accueil";
import { chargerLctv } from "@/lib/lctv";
import { photos } from "@/lib/photos";
import { reseaux } from "@/lib/reseaux";
import { NOM, SITE } from "@/lib/site";

/**
 * Données structurées (schema.org), en deux blocs de premier niveau :
 * - le site : son nom, que Google affiche au-dessus du lien dans ses résultats à la place du
 *   domaine (il ne le lit que sur la page d'accueil) ;
 * - la personne du site : ce qu'elle fait et quels comptes sont les siens, de quoi nourrir sa fiche.
 */
const fiches = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#site`,
    name: NOM,
    alternateName: ["Lisette Claudia TAME", "Lisette TAME"],
    url: `${SITE}/`,
    inLanguage: "fr",
    about: { "@id": `${SITE}/#personne` },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE}/#personne`,
    name: NOM,
    url: `${SITE}/`,
    image: `${SITE}${photos.portrait.src}`,
    description:
      "Industrielle camerounaise, fondatrice d’Africa Processing Company SA, l’un des cinq premiers transformateurs de cacao du Cameroun, et de Meta Invest SA. Chevalier de l’Ordre de la Valeur.",
    jobTitle: "Fondatrice et directrice générale",
    worksFor: [
      { "@type": "Organization", name: "Africa Processing Company SA", brand: { "@type": "Brand", name: "CA’OLY" } },
      { "@type": "Organization", name: "Meta Invest SA", brand: { "@type": "Brand", name: "DENKY" } },
    ],
    award: "Chevalier de l’Ordre de la Valeur",
    nationality: { "@type": "Country", name: "Cameroun" },
    sameAs: reseaux.filter((reseau) => reseau.profil).map((reseau) => reseau.url),
  },
];

export default async function Page() {
  return (
    <>
      {fiches.map((fiche) => (
        <script
          key={fiche["@type"]}
          type="application/ld+json"
          // Le JSON ne doit pas pouvoir refermer la balise : « < » est échappé.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(fiche).replace(/</g, "\\u003c") }}
        />
      ))}
      <Accueil forme="fluide" lctv={await chargerLctv()} />
    </>
  );
}
