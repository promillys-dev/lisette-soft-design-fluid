"use client";

import { useEffect, useRef, useState, type ComponentProps } from "react";
import { Icon } from "@/components/ui/icones";
import { reperes, type Video } from "@/lib/lctv";

type Props = Omit<ComponentProps<"button">, "type" | "onClick"> & {
  video: Video;
  /** Faux quand la vignette est placée par l'appelant, dans un cadre du bouton (<Vignette>). */
  vignette?: boolean;
};

/** Image d'une vidéo, servie par YouTube, Vimeo ou la médiathèque WordPress : hors de l'optimiseur de Next. */
export function Vignette({ video }: { video: Video }) {
  if (!video.vignette) return null;
  // eslint-disable-next-line @next/next/no-img-element
  return <img className="video__img" src={video.vignette} alt="" loading="lazy" />;
}

/**
 * Vignette d'une vidéo réelle de LCTV : un clic ouvre le lecteur dans une fenêtre, avec le titre
 * et la description saisis dans WordPress. Le lecteur n'est chargé qu'à l'ouverture.
 */
export function TuileVideo({ video, vignette = true, children, ...reste }: Props) {
  const [ouvert, setOuvert] = useState(false);
  const fenetre = useRef<HTMLDialogElement>(null);
  const bouton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (ouvert) fenetre.current?.showModal();
  }, [ouvert]);

  // Fermer retire la fenêtre du document : le lecteur s'arrête avec elle, la vidéo ne continue
  // pas à jouer en arrière-plan. Le focus revient sur la vignette.
  const fermer = () => {
    setOuvert(false);
    bouton.current?.focus();
  };

  const jointure = video.lecteur.includes("?") ? "&" : "?";
  return (
    <>
      <button type="button" aria-label={`Regarder : ${video.titre}`} {...reste} ref={bouton} onClick={() => setOuvert(true)}>
        {vignette && <Vignette video={video} />}
        {children}
      </button>
      {ouvert && (
        <dialog
          className="visionneuse"
          ref={fenetre}
          aria-label={video.titre}
          onClose={fermer}
          onCancel={fermer}
          onClick={(e) => {
            // Un clic sur le voile (hors de la fenêtre) la referme.
            if (e.target === e.currentTarget) fermer();
          }}
        >
          <div className="visionneuse__in">
            <button className="visionneuse__fermer" type="button" aria-label="Fermer la vidéo" onClick={fermer}>
              <Icon name="close" />
            </button>
            <div className="visionneuse__cadre">
              {video.source === "fichier" ? (
                <video src={video.lecteur} controls autoPlay playsInline />
              ) : (
                <iframe
                  src={`${video.lecteur}${jointure}autoplay=1`}
                  title={video.titre}
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              )}
            </div>
            <div className="visionneuse__texte">
              {reperes(video) && <p className="surtitre surtitre--clair">{reperes(video)}</p>}
              <h2>{video.titre}</h2>
              {video.description && <p className="visionneuse__description">{video.description}</p>}
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
