/**
 * Schémas dessinés à partir des faits du texte : ils tiennent lieu d'image là où le récit
 * donne lui-même les mesures.
 */

const MARGE = 10;
const HECTARE = 300; // côté du carré : 100 m
const LOCAL = HECTARE * Math.sqrt(66 / 10_000); // 66 m², à la même échelle
const PAS = HECTARE / 10; // une maille de la trame : 10 m × 10 m

/**
 * « Mon parcours » : le local de 66 m² où l'activité a démarré, dans l'angle de l'hectare de
 * l'usine de Mbankomo. Le petit carré tient dans une seule maille de la trame.
 */
export function Echelle() {
  const bas = MARGE + HECTARE;
  const haut = bas - LOCAL;
  return (
    <figure className="echelle reveal">
      <svg viewBox="0 0 320 320" role="img" aria-labelledby="t-echelle">
        <title id="t-echelle">
          Un carré de 66 m² dans l’angle d’un carré d’un hectare, dessinés à la même échelle
        </title>
        <g className="echelle__trame" aria-hidden="true">
          {Array.from({ length: 9 }, (_, i) => {
            const pas = MARGE + (i + 1) * PAS;
            return <path key={i} d={`M${pas} ${MARGE}V${bas}M${MARGE} ${pas}H${bas}`} />;
          })}
        </g>
        <rect className="echelle__hectare" pathLength={1} x={MARGE} y={MARGE} width={HECTARE} height={HECTARE} />
        <rect className="echelle__local" x={MARGE} y={haut} width={LOCAL} height={LOCAL} />
        <polyline
          className="echelle__rappel"
          pathLength={1}
          points={`${MARGE + LOCAL + 3},${haut - 3} 62,${haut - 24} 74,${haut - 24}`}
        />
        <text className="echelle__valeur" x={80} y={haut - 17}>
          66 m²
        </text>
        <text className="echelle__note" x={80} y={haut - 1}>
          Local loué · fin 2020
        </text>
        <text className="echelle__valeur" x={bas - 20} y={MARGE + 42} textAnchor="end">
          Plus d’un hectare
        </text>
        <text className="echelle__note" x={bas - 20} y={MARGE + 59} textAnchor="end">
          Usine de Mbankomo · mai 2024
        </text>
      </svg>
      <figcaption>
        À la même échelle : le local de 66 m² où tout a commencé, et un hectare (100 m sur 100 m).
      </figcaption>
    </figure>
  );
}
