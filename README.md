# lisette-soft-design-fluid

Site officiel de Lisette Claudia TAME NJAMBE, industrielle camerounaise, dans la direction de
design « Ivoire éditorial » (ivoire, brun profond, or ; Cormorant Garamond et Mulish) et dans sa
version fluide : le portrait se déforme dans sa découpe, les nappes dérivent et suivent le
curseur, une houle sépare les bandes, les survols sont « liquides ».

Accueil (`/`) et pages intérieures (`/mon-parcours`, `/ma-vision`, `/realisations-industrielles`,
`/expertise-etats`, `/engagement-humain`, `/tribunes`, `/lctv`, `/salle-de-presse`, `/contact`,
puis les quatre pages légales).

Next.js 16 (App Router), React 19, TypeScript, CSS écrit à la main.

## Lancer le site

```bash
npm install
npm run dev
```

Le site s'ouvre sur http://localhost:3000. `npm run build` construit la version de production,
`npm run lint` vérifie le code.

## Vidéos de LCTV

Les vidéos sont gérées dans WordPress par le plugin `lisette-core` (menu « Lisette ») et lues par
sa route REST `lisette/v1/lctv`. Indiquer l'adresse de l'API dans `.env.local` et dans les
variables d'environnement de l'hébergeur (Vercel), puis redéployer :

```bash
LISETTE_API_URL=https://admin.kamersphere.com/wp-json/lisette/v1
```

Si l'API est réservée aux sites connectés (Lisette → Réglages), ajouter la clé affichée à la
connexion du site dans `LISETTE_API_KEY`. Sans ces variables, ou si WordPress ne répond pas, le
site affiche les vignettes d'attente. Une vidéo publiée apparaît sur le site dans la minute.

## Où modifier quoi

- Textes de l'accueil : `src/lib/content.ts` et `src/components/sections/` (un fichier par bloc
  du document « Menu 1 · Accueil »).
- Textes des pages intérieures : `src/content/`, un fichier par page. Chaque page est une liste
  de blocs (types dans `src/lib/blocs.ts`, rendu dans `src/components/blocs/`).
- Menu et pied de page : `src/lib/menu.ts`. Adresses des liens : `src/lib/liens.ts`.
- Réseaux sociaux : `src/lib/reseaux.ts` (pied de page, pages Contact et LCTV). Un réseau ajouté
  à la liste apparaît partout.
- Documents à lire et à télécharger (PDF des tribunes) : `public/documents/`, déclarés dans
  `src/lib/documents.ts`. Une tribune reçoit son PDF par le champ `pdf` de sa carte
  (`src/content/tribunes.ts`, et `src/lib/content.ts` pour l'accueil).
- Photos : `public/images/`, déclarées dans `src/lib/photos.ts`.
- Styles : `src/styles/base.css` (socle), `forme-fluide.css` (formes et mouvements de la version
  fluide), `pages.css` (pages intérieures).

L'autre proposition de page d'accueil (« Formes et blobs ») est conservée hors routes dans
`src/app/_propositions/`, avec sa feuille `src/styles/forme-formes.css`.

## Les blobs

Toutes les formes organiques viennent de `scripts/generer-blobs.mjs`, qui écrit :

- `src/lib/blobs.ts` : tracés SVG des blobs de décor, découpes des photos, vagues entre les
  bandes ;
- `src/styles/blobs.css` : keyframes de morphing (tracé `d` des blobs, `clip-path: shape()` des
  photos).

Pour changer une forme, régler sa famille dans le script (graine, nombre de points, creux,
dérive) puis lancer `npm run blobs`. Les deux fichiers générés ne se modifient pas à la main.

Dans la page :

- `<Blob />` (`src/components/ui/blob.tsx`) pose un SVG en fond absolu (`position: absolute;
  z-index: -1`) derrière le contenu de sa bande ;
- les photos sont recadrées par `clip-path` : `url(#decoupe-…)` (découpe SVG, tous navigateurs),
  remplacé par `shape()` animé quand le navigateur le connaît ;
- `<Vague />` (`src/components/ui/vague.tsx`) sépare deux bandes de teintes différentes.

`prefers-reduced-motion` coupe toutes les animations ; les bandes sorties de l'écran mettent les
leurs en pause.
