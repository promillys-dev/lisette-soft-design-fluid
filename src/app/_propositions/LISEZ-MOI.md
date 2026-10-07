# Proposition masquée

La version fluide a été retenue : elle est servie à la racine du site (`src/app/(fluide)`).

Ce dossier garde l'autre proposition de page d'accueil, « Formes et blobs ». Son nom commence par
`_` : Next.js l'exclut des routes, rien de ce qu'il contient n'est publié.

Pour la revoir, remonter son dossier d'un niveau (`src/app/(formes)` donne `/formes`). Elle n'a
que sa page d'accueil : son menu renvoie aux blocs de cette page.

Si elle n'est plus utile, la supprimer avec sa feuille `src/styles/forme-formes.css`.
