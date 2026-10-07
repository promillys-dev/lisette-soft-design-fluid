"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import { rideau } from "@/lib/blobs";
import { type PhotoId, photos } from "@/lib/photos";
import { cn } from "@/lib/utils";

export type Vue = {
  image: PhotoId;
  alt: string;
  /** Point d'intérêt dans la découpe (object-position) ; à défaut, le foyer de la photothèque. */
  cadrage?: string;
};

/** Animation CSS qui déforme la découpe au repos (src/styles/blobs.css). */
const BOUCLE = "decoupe-portrait";

/** Attend que l'image soit chargée et décodée, sans bloquer le diaporama au-delà de `delai`. */
function preparer(image: HTMLImageElement | undefined, delai = 2500) {
  if (!image) return Promise.resolve();
  image.loading = "eager";
  return Promise.race([image.decode().catch(() => {}), new Promise((r) => setTimeout(r, delai))]);
}

/**
 * Diaporama du portrait. Les photos ne glissent pas et ne bougent pas : c'est la découpe qui se
 * referme sur la photo en place (elle se pince, s'étire en goutte, disparaît), puis se rouvre
 * depuis un autre point sur la photo suivante. Au repos, la découpe continue de se déformer.
 *
 * Les formes viennent de scripts/generer-blobs.mjs (`rideau`). Sans clip-path: shape(), les photos
 * se fondent l'une dans l'autre ; avec prefers-reduced-motion, elles se remplacent d'un coup et le
 * diaporama n'avance plus seul. Il se met en pause au survol, au clavier et hors de l'écran.
 */
export function Diaporama({ vues, sizes, intervalle = 6500 }: { vues: Vue[]; sizes: string; intervalle?: number }) {
  const cadre = useRef<HTMLDivElement>(null);
  const courant = useRef(0);
  const occupe = useRef(false);
  const [actif, setActif] = useState(0);
  const [enPause, setEnPause] = useState(false);
  const [enVue, setEnVue] = useState(false);
  const [fondu, setFondu] = useState(false);

  // Sans shape(), la découpe est un tracé SVG fixe : le changement de photo se fait en fondu.
  useEffect(() => {
    const frame = requestAnimationFrame(() =>
      setFondu(!CSS.supports("clip-path", "shape(from 0 0, line to 10px 10px, close)")),
    );
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const el = cadre.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => setEnVue(entry.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const aller = useCallback(async (vers: number) => {
    const el = cadre.current;
    if (!el || occupe.current || vers === courant.current) return;
    const montrer = (immediat?: boolean) => {
      courant.current = vers;
      if (immediat) flushSync(() => setActif(vers));
      else setActif(vers);
    };

    const immobile = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const boucle = el.getAnimations().find((a) => a instanceof CSSAnimation && a.animationName === BOUCLE);
    if (immobile || !boucle) return montrer();

    occupe.current = true;
    await preparer(el.querySelectorAll("img")[vers]);

    // La découpe part de la forme qu'elle a à cet instant, puis se referme.
    boucle.pause();
    const fermeture = el.animate(
      [
        { clipPath: getComputedStyle(el).clipPath, easing: "cubic-bezier(0.5, 0, 0.8, 0.4)" },
        { clipPath: rideau.fermer[0], offset: 0.42, easing: "cubic-bezier(0.4, 0, 0.7, 0.5)" },
        { clipPath: rideau.fermer[1], offset: 0.8, easing: "ease-in" },
        { clipPath: rideau.fermer[2] },
      ],
      { duration: 900, fill: "forwards" },
    );
    try {
      await fermeture.finished;
      montrer(true); // la photo change pendant que la découpe est fermée

      // Elle se rouvre ailleurs, gonfle un peu trop, puis reprend sa forme de repos.
      const ouverture = el.animate(
        [
          { clipPath: rideau.ouvrir[0], easing: "ease-out" },
          { clipPath: rideau.ouvrir[1], offset: 0.26, easing: "cubic-bezier(0.3, 0.6, 0.3, 1)" },
          { clipPath: rideau.ouvrir[2], offset: 0.7, easing: "ease-in-out" },
          { clipPath: rideau.ouvert },
        ],
        { duration: 1300, fill: "forwards" },
      );
      await ouverture.finished;
      boucle.currentTime = 0; // le premier état de la boucle est la découpe ouverte : aucun à-coup
      boucle.play();
      ouverture.cancel();
    } catch {
      // Animation annulée (page quittée en cours de route) : rien à rattraper.
    } finally {
      fermeture.cancel();
      occupe.current = false;
    }
  }, []);

  // Avance seul tant qu'il est à l'écran et qu'on ne le survole pas.
  useEffect(() => {
    if (vues.length < 2 || enPause || !enVue) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const minuterie = window.setTimeout(() => aller((actif + 1) % vues.length), intervalle);
    return () => window.clearTimeout(minuterie);
  }, [actif, aller, enPause, enVue, intervalle, vues.length]);

  const pause = { onMouseEnter: () => setEnPause(true), onMouseLeave: () => setEnPause(false) };

  return (
    <>
      <div className={cn("portrait__photo portrait__photo--diaporama", fondu && "is-fondu")} ref={cadre} {...pause}>
        {vues.map((vue, i) => {
          const fichier = photos[vue.image];
          return (
            <Image
              className={cn("portrait__image", i === actif && "is-active")}
              src={fichier.src}
              alt={i === actif ? vue.alt : ""}
              aria-hidden={i !== actif}
              fill
              sizes={sizes}
              style={{ objectPosition: vue.cadrage ?? fichier.foyer }}
              preload={i === 0}
              key={vue.image}
            />
          );
        })}
      </div>
      {vues.length > 1 && (
        <div
          className="portrait__points"
          role="group"
          aria-label="Photos du portrait"
          {...pause}
          onFocus={() => setEnPause(true)}
          onBlur={() => setEnPause(false)}
        >
          {vues.map((vue, i) => (
            <button
              className={cn("portrait__point", i === actif && "is-on")}
              type="button"
              aria-label={`Photo ${i + 1} sur ${vues.length} : ${vue.alt}`}
              aria-current={i === actif ? "true" : undefined}
              key={vue.image}
              onClick={() => aller(i)}
            />
          ))}
        </div>
      )}
    </>
  );
}
