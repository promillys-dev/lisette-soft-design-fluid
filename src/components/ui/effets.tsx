"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

/** Durée couvrant la plus longue entrée (cascade comprise). */
const FIN_ENTREE = 2400;

/**
 * Effets globaux, sans dépendance (styles dans base.css, forme-*.css et pages.css). Monté une
 * fois dans la coquille, il se relance à chaque changement de page :
 * - séquence d'entrée du bandeau ou de l'en-tête de page : pose `is-loaded` sur <html> une fois
 *   les polices prêtes ;
 * - défilement : `data-defile` sur <html> (l'en-tête se resserre) et parallaxe légère des
 *   décors ([data-parallax] reçoit --py) ;
 * - pointeur : --mx et --my (de -1 à 1, lissés) sur <html>, que suivent les nappes de la
 *   proposition fluide ;
 * - apparitions : pose `data-vu` sur les `.reveal` qui entrent à l'écran ;
 * - hors champ : pose `data-hors-champ` sur les bandes et les vagues sorties de l'écran, ce qui
 *   met leurs animations en pause (base.css) ;
 * - liens neutres (« # ») : la maquette ne remonte pas en haut de page quand on les clique.
 * prefers-reduced-motion : tout est affiché d'emblée, sans mouvement.
 */
export function Effets() {
  const chemin = usePathname();

  // Nouvelle page : l'entrée de l'en-tête doit se rejouer. Retiré avant l'affichage pour ne rien voir clignoter.
  useLayoutEffect(() => {
    document.documentElement.classList.remove("is-loaded");
  }, [chemin]);

  useEffect(() => {
    const root = document.documentElement;
    const immobile = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let actif = true;
    const delais: number[] = [];
    root.classList.add("is-ready");

    /* ---------- Séquence d'entrée du bandeau ----------------------------- */
    const polices = document.fonts?.ready ?? Promise.resolve();
    Promise.race([polices, new Promise((r) => setTimeout(r, 900))]).then(() => {
      if (actif) requestAnimationFrame(() => root.classList.add("is-loaded"));
    });

    /* ---------- Liens neutres --------------------------------------------- */
    const neutre = (e: MouseEvent) => {
      if ((e.target as Element).closest?.('a[href="#"]')) e.preventDefault();
    };
    document.addEventListener("click", neutre);

    /* ---------- Défilement : en-tête et parallaxe ------------------------ */
    const decors = immobile ? [] : Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const decalages = new WeakMap<Element, number>();
    let attente = false;
    const image = () => {
      attente = false;
      const hauteur = window.innerHeight;
      root.toggleAttribute("data-defile", window.scrollY > 40);
      for (const el of decors) {
        const r = el.getBoundingClientRect();
        const haut = r.top - (decalages.get(el) ?? 0); // position sans le décalage déjà appliqué
        if (haut > hauteur + 200 || haut + r.height < -200) continue;
        const py = (haut + r.height / 2 - hauteur / 2) * parseFloat(el.dataset.parallax ?? "0");
        decalages.set(el, py);
        el.style.setProperty("--py", `${py.toFixed(1)}px`);
      }
    };
    const planifier = () => {
      if (attente) return;
      attente = true;
      requestAnimationFrame(image);
    };
    window.addEventListener("scroll", planifier, { passive: true });
    window.addEventListener("resize", planifier);
    planifier();

    /* ---------- Pointeur : les nappes le suivent, avec retard ------------- */
    const cible = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    let boucle = 0;
    const suivre = () => {
      pos.x += (cible.x - pos.x) * 0.06;
      pos.y += (cible.y - pos.y) * 0.06;
      root.style.setProperty("--mx", pos.x.toFixed(3));
      root.style.setProperty("--my", pos.y.toFixed(3));
      const loin = Math.abs(cible.x - pos.x) + Math.abs(cible.y - pos.y) > 0.002;
      boucle = loin ? requestAnimationFrame(suivre) : 0;
    };
    const pointer = (e: PointerEvent) => {
      cible.x = (e.clientX / window.innerWidth) * 2 - 1;
      cible.y = (e.clientY / window.innerHeight) * 2 - 1;
      if (!boucle) boucle = requestAnimationFrame(suivre);
    };
    const souris = !immobile && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (souris) window.addEventListener("pointermove", pointer, { passive: true });

    /* ---------- Apparitions au défilement -------------------------------- */
    const cibles = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not([data-vu])"));
    const montrer = (el: HTMLElement) => {
      el.setAttribute("data-vu", "");
      delais.push(window.setTimeout(() => el.setAttribute("data-vu", "fini"), FIN_ENTREE));
    };
    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window && !immobile) {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            montrer(entry.target as HTMLElement);
            io?.unobserve(entry.target);
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
      );
      cibles.forEach((el) => io?.observe(el));
    } else {
      cibles.forEach((el) => el.setAttribute("data-vu", "fini"));
    }

    /* ---------- Hors champ : une bande que l'on ne voit pas n'anime rien -- */
    let veille: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      veille = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) entry.target.toggleAttribute("data-hors-champ", !entry.isIntersecting);
        },
        { rootMargin: "160px 0px" },
      );
      document.querySelectorAll(".bande, .vague, .ruban, .pied").forEach((el) => veille?.observe(el));
    }

    return () => {
      actif = false;
      io?.disconnect();
      veille?.disconnect();
      cancelAnimationFrame(boucle);
      delais.forEach((d) => window.clearTimeout(d));
      document.removeEventListener("click", neutre);
      window.removeEventListener("scroll", planifier);
      window.removeEventListener("resize", planifier);
      window.removeEventListener("pointermove", pointer);
    };
  }, [chemin]);

  return null;
}
