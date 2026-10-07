"use client";

import { useState, type FormEvent } from "react";
import { Blob } from "@/components/ui/blob";
import { Icon } from "@/components/ui/icones";
import type { Forme } from "@/lib/formes";

type Props = {
  forme: Forme;
  id?: string;
  surtitre?: string;
  titre?: string;
  texte?: string;
  champ?: string;
  bouton?: string;
  note?: string;
};

/**
 * Lettre d'information : une île brune posée sur l'ivoire (bloc 11 de l'accueil, repris en bas
 * de certaines pages avec d'autres textes).
 * Maquette : aucun envoi réel tant que le service n'est pas branché.
 */
export function Lettre({
  forme,
  id = "lettre",
  surtitre = "Lettre d’information",
  titre = "Restons en lien",
  texte = "Recevez mes nouvelles tribunes, les dernières vidéos de LCTV et les grandes étapes de nos projets industriels.",
  champ = "Votre adresse électronique",
  bouton = "Je m’inscris",
  note = "Quelques messages par an, jamais davantage.",
}: Props) {
  const [message, setMessage] = useState("");
  const fluide = forme === "fluide";

  const envoyer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const saisie = e.currentTarget.elements.namedItem("email") as HTMLInputElement;
    if (!saisie.checkValidity()) {
      setMessage("Merci d’indiquer une adresse électronique valide.");
      saisie.focus();
      return;
    }
    setMessage("Merci, votre inscription est bien enregistrée.");
    e.currentTarget.reset();
  };

  return (
    <section className="lettre bande bande--ivoire" id={id}>
      <div className="wrap">
        <div className="ile sombre reveal" data-reveal="zoom">
          <Blob nom="fond" etat={1} className="ile__nappe ile__nappe--1" morph={fluide} />
          <Blob nom="nappe" className="ile__nappe ile__nappe--2" morph={fluide} />
          <Blob nom="anneau" className="ile__anneau" trait morph={fluide} />
          <div className="ile__texte">
            <p className="surtitre surtitre--clair">{surtitre}</p>
            <h2 className="h2">
              {titre}
              <span className="point">.</span>
            </h2>
            <p className="chapo">{texte}</p>
          </div>
          <form noValidate onSubmit={envoyer}>
            <div className="lettre__champ">
              <label className="sr-only" htmlFor={`${id}-email`}>
                {champ}
              </label>
              <input
                id={`${id}-email`}
                type="email"
                name="email"
                placeholder={champ}
                autoComplete="email"
                required
              />
              <button className="btn btn--or" type="submit">
                {bouton}
                <Icon name="arrow" />
              </button>
            </div>
            <p className="lettre__retour" role="status" aria-live="polite">
              {message}
            </p>
            {note && <p className="lettre__note">{note}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
