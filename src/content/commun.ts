import type { Bloc } from "@/lib/blocs";

type Formulaires = Extract<Bloc, { type: "formulaires" }>;

/** Message affiché après l'envoi de tout formulaire (Menu 10 · Contact, bloc 7). */
export const confirmation: Formulaires["confirmation"] = {
  titre: "Merci, votre message est bien arrivé",
  texte:
    "Je vous remercie de votre confiance. Votre demande a été transmise à la personne concernée et vous recevrez une réponse dans les meilleurs délais. En attendant, je vous invite à découvrir mes tribunes et les dernières vidéos de LCTV.",
  signature: "Lisette Claudia TAME NJAMBE",
  boutons: [
    { label: "Lire mes tribunes", vers: { page: "tribunes" } },
    { label: "Regarder LCTV", vers: { page: "lctv" } },
  ],
};
