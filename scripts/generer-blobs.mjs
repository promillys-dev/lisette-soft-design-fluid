/* ============================================================================
   Génère les formes organiques des deux propositions :
   - src/lib/blobs.ts     : tracés SVG des blobs, découpes des photos, vagues entre les bandes ;
   - src/styles/blobs.css : animations de morphing (keyframes) qui font passer un blob d'un état
     à l'autre. Tous les états d'une même famille ont le même nombre de points : le navigateur
     peut donc interpoler de l'un à l'autre.
   Régler les familles ci-dessous (graine, nombre de points, creux, dérive) puis lancer :
   npm run blobs
   ==========================================================================*/
import { writeFileSync } from "node:fs";

const n1 = (x) => +x.toFixed(1);
const n2 = (x) => +x.toFixed(2);
const n4 = (x) => +x.toFixed(4);

/** Tirage pseudo-aléatoire reproductible (mulberry32) : une même graine redonne la même forme. */
function alea(graine) {
  let a = graine;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Points d'un blob : un cercle dont chaque rayon est plus ou moins rentré (`creux`). */
function semer(graine, { points = 8, creux = 0.22, ratio = 1 } = {}) {
  const r = alea(graine);
  const pas = (Math.PI * 2) / points;
  return Array.from({ length: points }, (_, i) => {
    const angle = i * pas + (r() - 0.5) * pas * 0.5 - Math.PI / 2;
    const rayon = 1 - creux * r();
    return [Math.cos(angle) * rayon * ratio, Math.sin(angle) * rayon];
  });
}

/** État voisin d'une forme : les mêmes points, déplacés d'au plus `derive` (sauf ceux de `figes`). */
function deriver(points, graine, derive, figes = []) {
  const r = alea(graine);
  return points.map(([x, y], i) =>
    figes.includes(i) ? [x, y] : [x + (r() - 0.5) * 2 * derive, y + (r() - 0.5) * 2 * derive],
  );
}

/** Courbe fermée et lisse passant par les points : un segment cubique par point. */
function lisser(points) {
  const n = points.length;
  // Longueur des poignées qui redonne un cercle quand les points sont réguliers.
  const t = ((4 / 3) * Math.tan(Math.PI / (2 * n))) / (2 * Math.sin((2 * Math.PI) / n));
  const p = (i) => points[(i + n) % n];
  const segments = [];
  for (let i = 0; i < n; i++) {
    const [a, b, c, d] = [p(i - 1), p(i), p(i + 1), p(i + 2)];
    segments.push([
      [b[0] + (c[0] - a[0]) * t, b[1] + (c[1] - a[1]) * t],
      [c[0] - (d[0] - b[0]) * t, c[1] - (d[1] - b[1]) * t],
      c,
    ]);
  }
  return { depart: points[0], segments };
}

/** Étire la courbe pour qu'elle remplisse exactement un carré de côté `taille`. */
function cadrer({ depart, segments }, taille) {
  let [x0, y0, x1, y1] = [Infinity, Infinity, -Infinity, -Infinity];
  let d = depart;
  for (const [c1, c2, f] of segments) {
    for (let k = 0; k <= 24; k++) {
      const u = k / 24;
      const v = 1 - u;
      const x = v * v * v * d[0] + 3 * v * v * u * c1[0] + 3 * v * u * u * c2[0] + u * u * u * f[0];
      const y = v * v * v * d[1] + 3 * v * v * u * c1[1] + 3 * v * u * u * c2[1] + u * u * u * f[1];
      x0 = Math.min(x0, x);
      x1 = Math.max(x1, x);
      y0 = Math.min(y0, y);
      y1 = Math.max(y1, y);
    }
    d = f;
  }
  const m = ([x, y]) => [((x - x0) / (x1 - x0)) * taille, ((y - y0) / (y1 - y0)) * taille];
  return { depart: m(depart), segments: segments.map((s) => s.map(m)) };
}

/** Tracé SVG (attribut d). */
const chemin = ({ depart, segments }, n = n1) =>
  `M${n(depart[0])},${n(depart[1])}` +
  segments.map(([a, b, c]) => `C${n(a[0])},${n(a[1])} ${n(b[0])},${n(b[1])} ${n(c[0])},${n(c[1])}`).join("") +
  "Z";

/** Même forme en shape() CSS, en pourcentages de la boîte : pour animer clip-path. */
const shape = ({ depart, segments }) =>
  `shape(from ${n2(depart[0])}% ${n2(depart[1])}%, ` +
  segments
    .map(
      ([a, b, c]) =>
        `curve to ${n2(c[0])}% ${n2(c[1])}% with ${n2(a[0])}% ${n2(a[1])}% / ${n2(b[0])}% ${n2(b[1])}%`,
    )
    .join(", ") +
  ", close)";

/** Trois états d'une famille : la forme de départ et deux voisines. */
const etats = (points, graine, derive, figes) => [
  points,
  deriver(points, graine + 101, derive, figes),
  deriver(points, graine + 202, derive, figes),
];

/* ---------- Blobs de décor (viewBox 0 0 100 100) --------------------------- */
const DECOR = {
  // Grandes nappes derrière le portrait et les bandes
  fond: etats(semer(7, { points: 8, creux: 0.3 }), 7, 0.2),
  nappe: etats(semer(23, { points: 7, creux: 0.34 }), 23, 0.2),
  brume: etats(semer(58, { points: 8, creux: 0.26 }), 58, 0.18),
  // Anneau au trait qui double le portrait
  anneau: etats(semer(31, { points: 8, creux: 0.2 }), 31, 0.16),
  // Proposition B : un seul blob respire, à peine
  souffle: etats(semer(44, { points: 8, creux: 0.24 }), 44, 0.07),
  // Petites taches : chiffres, pictogrammes, dates, bouton de lecture
  a: etats(semer(3, { points: 6, creux: 0.26 }), 3, 0.18),
  b: etats(semer(12, { points: 6, creux: 0.3 }), 12, 0.18),
  c: etats(semer(19, { points: 7, creux: 0.26 }), 19, 0.18),
  d: etats(semer(27, { points: 6, creux: 0.32 }), 27, 0.18),
};

/* ---------- Découpes des photos (points posés à la main, sur 100 × 100) -----
   Le haut reste plein et figé : les visages sont près du bord supérieur des photos. */
const DECOUPES = {
  // Portrait d'ouverture, proposition A (il se déforme)
  portrait: etats([[40, 0], [80, 4], [100, 36], [92, 80], [58, 100], [16, 93], [0, 56], [6, 10]], 5, 7, [0, 1, 7]),
  // Portrait d'ouverture, proposition B (fixe)
  galet: etats([[46, 0], [86, 8], [100, 44], [86, 86], [50, 100], [12, 90], [0, 48], [9, 8]], 9, 4, [0, 1, 7]),
  // Photo du mot de bienvenue
  bureau: etats([[30, 0], [84, 3], [100, 38], [94, 86], [58, 100], [12, 94], [0, 58], [3, 10]], 14, 6, [0, 1, 6, 7]),
  // Vidéo à la une
  ecran: etats([[26, 0], [78, 3], [100, 30], [97, 78], [70, 100], [22, 97], [0, 66], [3, 16]], 17, 5, []),
};

/* ---------- Vagues entre les bandes ---------------------------------------- */
const L = 1440; // largeur de référence
const H = 120;

/** Courbe lisse passant par des hauteurs régulièrement espacées (tangentes de Catmull-Rom). */
function onde(ys, pas, { boucle }) {
  const n = ys.length;
  const y = (i) => (boucle ? ys[((i % (n - 1)) + (n - 1)) % (n - 1)] : ys[Math.max(0, Math.min(n - 1, i))]);
  let d = `M0,${n1(y(0))}`;
  for (let i = 0; i < n - 1; i++) {
    const c1 = y(i) + (y(i + 1) - y(i - 1)) / 6;
    const c2 = y(i + 1) - (y(i + 2) - y(i)) / 6;
    d += `C${n1(i * pas + pas / 3)},${n1(c1)} ${n1((i + 1) * pas - pas / 3)},${n1(c2)} ${n1((i + 1) * pas)},${n1(y(i + 1))}`;
  }
  return d;
}

/** Houle périodique sur deux largeurs : translatée d'une largeur, elle boucle sans raccord. */
function mer(graine, { niveau = 0.5, amplitude = 0.36 } = {}) {
  const r = alea(graine);
  const phases = [r(), r(), r()].map((p) => p * Math.PI * 2);
  const poids = [0.58, 0.28, 0.14];
  const N = 12;
  const periode = Array.from({ length: N + 1 }, (_, i) => {
    const x = (i / N) * Math.PI * 2;
    const s = poids.reduce((somme, k, j) => somme + k * Math.sin((j + 1) * x + phases[j]), 0);
    return H * (niveau + amplitude * s);
  });
  const ys = [...periode, ...periode.slice(1)];
  return `${onde(ys, L / N, { boucle: true })}V${H}H0Z`;
}

/** Rive fixe et asymétrique : quelques hauteurs tirées au sort, jamais deux fois le même dessin. */
function rive(graine) {
  const r = alea(graine);
  const tirage = Array.from({ length: 6 }, () => r());
  // Étalé sur toute la hauteur : même un tirage timide donne une rive franche.
  const [bas, haut] = [Math.min(...tirage), Math.max(...tirage)];
  const ys = tirage.map((t) => H * (0.1 + ((t - bas) / (haut - bas)) * 0.76));
  const trait = onde(ys, L / 5, { boucle: false });
  return { fond: `${trait}V${H}H0Z`, trait };
}

const MERS = [mer(2), mer(8, { niveau: 0.56, amplitude: 0.3 }), mer(15, { niveau: 0.62, amplitude: 0.26 }), mer(21)];
const RIVES = [4, 6, 13, 18, 29, 37, 41, 52].map(rive);

/* ---------- Diaporama du portrait -------------------------------------------
   Pour changer de photo, la découpe se referme (elle se pince, s'étire en goutte, disparaît),
   puis se rouvre depuis un autre point. Ces formes ont les mêmes huit points que la découpe du
   portrait : le navigateur passe de l'une à l'autre sans à-coup. */

/** Réduit, étire, tourne et déplace une forme cadrée sur 100 × 100. */
function placer({ depart, segments }, { echelle = 1, etire = [1, 1], centre = [50, 50], angle = 0 }) {
  const [cos, sin] = [Math.cos((angle * Math.PI) / 180), Math.sin((angle * Math.PI) / 180)];
  const m = ([x, y]) => {
    const [dx, dy] = [(x - 50) * echelle * etire[0], (y - 50) * echelle * etire[1]];
    return [centre[0] + dx * cos - dy * sin, centre[1] + dx * sin + dy * cos];
  };
  return { depart: m(depart), segments: segments.map((s) => s.map(m)) };
}

const forme = (points) => cadrer(lisser(points), 100);
const PORTRAIT = DECOUPES.portrait[0];

const RIDEAU = {
  ouvert: forme(PORTRAIT),
  // Fermeture : pincée vers le bas à gauche, puis goutte, puis plus rien.
  fermer: [
    placer(forme(deriver(PORTRAIT, 61, 12)), { echelle: 0.76, centre: [46, 55], angle: -9 }),
    placer(forme(deriver(PORTRAIT, 62, 16)), { echelle: 0.3, etire: [0.82, 1.2], centre: [41, 68], angle: 16 }),
    placer(forme(PORTRAIT), { echelle: 0, centre: [39, 76] }),
  ],
  // Ouverture : un bourgeon en haut à droite, qui gonfle un peu trop avant de se poser.
  ouvrir: [
    placer(forme(PORTRAIT), { echelle: 0, centre: [63, 28] }),
    placer(forme(deriver(PORTRAIT, 63, 16)), { echelle: 0.32, etire: [1.2, 0.84], centre: [59, 35], angle: -14 }),
    placer(forme(deriver(PORTRAIT, 64, 10)), { echelle: 0.93, centre: [51, 49], angle: 5 }),
  ],
};

/* ---------- Écriture -------------------------------------------------------- */
const liste = (objet, rendu) =>
  Object.entries(objet)
    .map(([nom, formes]) => `  ${nom}: [\n${formes.map((f) => `    "${rendu(f)}",`).join("\n")}\n  ],`)
    .join("\n");

const ts = `/* Fichier généré par scripts/generer-blobs.mjs — ne pas modifier à la main (npm run blobs). */

/** Blobs de décor, trois états par famille. viewBox « 0 0 100 100 ». */
export const blobs = {
${liste(DECOR, (f) => chemin(cadrer(lisser(f), 100)))}
} as const;

/** Découpes des photos, pour <clipPath clipPathUnits="objectBoundingBox"> (coordonnées de 0 à 1). */
export const decoupes = {
${Object.entries(DECOUPES)
  .map(([nom, [f]]) => `  ${nom}: "${chemin(cadrer(lisser(f), 1), n4)}",`)
  .join("\n")}
} as const;

/** Houles périodiques (proposition A). viewBox « 0 0 ${L * 2} ${H} », à translater de ${L}. */
export const mers = [
${MERS.map((d) => `  "${d}",`).join("\n")}
] as const;

/** Rives fixes (proposition B) : la surface et son filet. viewBox « 0 0 ${L} ${H} ». */
export const rives = [
${RIVES.map((r) => `  { fond: "${r.fond}", trait: "${r.trait}" },`).join("\n")}
] as const;

/**
 * Diaporama du portrait, en shape() CSS : la découpe ouverte (premier état de son morphing),
 * les trois formes de sa fermeture et les trois de sa réouverture.
 */
export const rideau = {
  ouvert: "${shape(RIDEAU.ouvert)}",
  fermer: [
${RIDEAU.fermer.map((f) => `    "${shape(f)}",`).join("\n")}
  ],
  ouvrir: [
${RIDEAU.ouvrir.map((f) => `    "${shape(f)}",`).join("\n")}
  ],
} as const;

export type NomBlob = keyof typeof blobs;
export type NomDecoupe = keyof typeof decoupes;
`;

const images = (formes, rendu) =>
  `  0%, 100% { ${rendu(formes[0])} }\n  33% { ${rendu(formes[1])} }\n  66% { ${rendu(formes[2])} }`;

const css = `/* Fichier généré par scripts/generer-blobs.mjs — ne pas modifier à la main (npm run blobs). */

/* Morphing des blobs de décor : <svg data-morph="nom"> anime le tracé de son <path>. */
${Object.entries(DECOR)
  .map(
    ([nom, formes]) =>
      `@keyframes d-${nom} {\n${images(formes, (f) => `d: path("${chemin(cadrer(lisser(f), 100))}");`)}\n}\n[data-morph="${nom}"] path { animation-name: d-${nom}; }`,
  )
  .join("\n")}

/* Découpes des photos en shape() : même dessin que les <clipPath>, mais animable. */
:root {
${Object.entries(DECOUPES)
  .map(([nom, [f]]) => `  --decoupe-${nom}: ${shape(cadrer(lisser(f), 100))};`)
  .join("\n")}
}
${Object.entries(DECOUPES)
  .map(
    ([nom, formes]) =>
      `@keyframes decoupe-${nom} {\n${images(formes, (f) => `clip-path: ${shape(cadrer(lisser(f), 100))};`)}\n}`,
  )
  .join("\n")}
`;

writeFileSync(new URL("../src/lib/blobs.ts", import.meta.url), ts);
writeFileSync(new URL("../src/styles/blobs.css", import.meta.url), css);
console.log(`blobs.ts : ${ts.length} octets · blobs.css : ${css.length} octets`);
