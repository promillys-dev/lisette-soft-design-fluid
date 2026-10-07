"use client";

import { useEffect, useRef } from "react";

const format = new Intl.NumberFormat("fr-FR");

/** Chiffre du bloc Repères : compte de 0 à `valeur` quand il entre à l'écran. */
export function Compteur({ valeur }: { valeur: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const immobile = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!el || immobile || !("IntersectionObserver" in window)) return;

    let frame = 0;
    el.textContent = "0";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const debut = performance.now();
        const pas = (t: number) => {
          const p = Math.min(1, (t - debut) / 1900);
          el.textContent = format.format(Math.round(valeur * (1 - Math.pow(1 - p, 4))));
          if (p < 1) frame = requestAnimationFrame(pas);
        };
        frame = requestAnimationFrame(pas);
      },
      { threshold: 0.6 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = format.format(valeur);
    };
  }, [valeur]);

  // Le séparateur de milliers peut différer entre serveur et navigateur.
  return (
    <span ref={ref} suppressHydrationWarning>
      {format.format(valeur)}
    </span>
  );
}
