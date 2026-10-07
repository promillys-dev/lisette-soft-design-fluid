"use client";

import { useEffect, useRef, useState, type Ref } from "react";
import { CIBLES_2036, CONTOUR, VIEWBOX, sites } from "@/lib/carte";
import { cn, vars } from "@/lib/utils";

/**
 * Site mis en avant sur la carte. Survoler, cibler ou cliquer un site le sélectionne. Avec `auto`,
 * tant que le visiteur n'intervient pas, les sites défilent seuls lorsque la carte est à l'écran.
 */
export function useSiteActif(auto = true) {
  const carte = useRef<HTMLDivElement>(null);
  const [actif, setActif] = useState(sites[0].id);
  const [enVue, setEnVue] = useState(false);
  const [enPause, setEnPause] = useState(false);

  useEffect(() => {
    const el = carte.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => setEnVue(entry.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!auto || !enVue || enPause || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const minuterie = window.setInterval(() => {
      setActif((id) => sites[(sites.findIndex((s) => s.id === id) + 1) % sites.length].id);
    }, 2800);
    return () => window.clearInterval(minuterie);
  }, [auto, enVue, enPause]);

  const viser = (id: string) => {
    const choisir = () => {
      setEnPause(true);
      setActif(id);
    };
    const relacher = () => setEnPause(false);
    return { onMouseEnter: choisir, onFocus: choisir, onClick: choisir, onMouseLeave: relacher, onBlur: relacher };
  };

  return { carte, actif, viser, choisir: setActif };
}

type Props = {
  actif: string;
  viser: ReturnType<typeof useSiteActif>["viser"];
  ref?: Ref<HTMLDivElement>;
};

/** Carte du Cameroun : sites en activité, projet en préparation et repères du cap 2036. */
export function CarteCameroun({ actif, viser, ref }: Props) {
  return (
    <div className="carte" ref={ref}>
      <svg viewBox={VIEWBOX} role="img" aria-labelledby="t-carte">
        <title id="t-carte">
          Carte du Cameroun : sites industriels de Mbankomo, Ngolambélé et Bangou, projet de Maroua
        </title>
        <path className="carte__terre" d={CONTOUR} />
        <path className="carte__contour" pathLength={1} d={CONTOUR} />
        <g aria-hidden="true">
          {CIBLES_2036.map(([x, y], i) => (
            <circle className="carte__cible" key={`${x}-${y}`} style={vars({ "--i": i })} cx={x} cy={y} r={5} />
          ))}
        </g>
        {sites.map((site, i) => (
          <g
            className={cn("site", site.enProjet && "site--projet", actif === site.id && "is-active")}
            key={site.id}
            style={vars({ "--i": i })}
            {...viser(site.id)}
          >
            <polyline className="site__rappel" pathLength={1} points={site.rappel} />
            <circle className="site__onde" cx={site.x} cy={site.y} r={6} />
            <circle className="site__point" cx={site.x} cy={site.y} r={5.5} />
            <text className="site__nom" x={site.etiquette.x} y={site.etiquette.y} textAnchor={site.etiquette.ancre}>
              {site.nom}
            </text>
            <text
              className="site__region"
              x={site.etiquette.x}
              y={site.etiquette.y + 13}
              textAnchor={site.etiquette.ancre}
            >
              {site.region}
            </text>
          </g>
        ))}
      </svg>
      <p className="carte__legende">
        <span>
          <i />
          En activité
        </span>
        <span className="is-projet">
          <i />
          En préparation
        </span>
        <span className="is-cap">
          <i />
          Cap 2036 · une usine par région
        </span>
      </p>
    </div>
  );
}
