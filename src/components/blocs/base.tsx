import type { ComponentProps, ReactNode } from "react";
import Image from "next/image";
import { Blob } from "@/components/ui/blob";
import { Icon } from "@/components/ui/icones";
import { Lien } from "@/components/ui/lien";
import type { Bloc, Bouton, Fond, Para, Photo } from "@/lib/blocs";
import { PUBLIEE } from "@/lib/liens";
import { photos } from "@/lib/photos";
import { cn } from "@/lib/utils";

/** Le bloc d'un type donné : `B<"texte">`, `B<"frise">`… */
export type B<T extends Bloc["type"]> = Extract<Bloc, { type: T }>;

export const ROMAINS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

/** Petites taches placées derrière un chiffre, un pictogramme ou un numéro. */
export const TACHES = ["a", "b", "c", "d"] as const;

/** Lien d'une page intérieure : elles n'existent que dans la proposition publiée. */
export function Vers(props: Omit<ComponentProps<typeof Lien>, "forme">) {
  return <Lien forme={PUBLIEE} {...props} />;
}

const FONDS: Record<Fond, string> = {
  ivoire: "bande--ivoire",
  sable: "bande--sable",
  brun: "bande--brun sombre",
};

/**
 * Bande de page : fond, marges verticales et largeur de contenu. Chaque bande porte une nappe
 * en fond absolu ; pages.css la place différemment d'une bande à l'autre.
 */
export function Section({
  id,
  fond = "ivoire",
  className,
  children,
}: {
  id?: string;
  fond?: Fond;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("bande bloc", FONDS[fond], className)}>
      <Blob nom="nappe" className="bloc__nappe" parallaxe={0.08} />
      <div className="wrap">{children}</div>
    </section>
  );
}

/** Titre suivi du point doré de la charte ; la ponctuation finale du texte est reprise en doré. */
export function Titre({ children: texte }: { children: string }) {
  const fin = texte.match(/\s*([.?!])$/);
  const corps = fin ? texte.slice(0, fin.index) : texte;
  const signe = fin ? fin[1] : ".";
  return (
    <>
      {corps}
      <span className="point">{signe === "." ? "." : ` ${signe}`}</span>
    </>
  );
}

/**
 * Nombre de mots par lesquels commencent tous les intitulés d'une série (« Je crois », « Elle
 * change », « Pour les »…). L'anaphore est une figure du texte : la mise en page la donne à voir.
 */
export function anaphore(intitules: string[]): number {
  if (intitules.length < 2) return 0;
  const nu = (mot?: string) => mot?.replace(/[.,;:!?]+$/, "");
  const mots = intitules.map((intitule) => intitule.split(" "));
  let n = 0;
  while (mots[0][n] && mots.every((m) => nu(m[n]) === nu(mots[0][n]))) n++;
  return n >= 2 ? n : 0;
}

/** Intitulé dont les `n` premiers mots (l'anaphore de la série) sont composés en italique. */
export function Intitule({ children: texte, n }: { children: string; n: number }) {
  if (!n) return <>{texte}</>;
  const mots = texte.split(" ");
  return (
    <>
      <em className="anaphore">{mots.slice(0, n).join(" ")}</em> {mots.slice(n).join(" ")}
    </>
  );
}

/** Tête de bloc : sur-titre, titre et introduction. */
export function Tete({
  surtitre,
  titre,
  intro,
  anime = true,
}: {
  surtitre?: string;
  titre: string;
  intro?: string;
  anime?: boolean;
}) {
  return (
    <div className={cn("tete", anime && "reveal")}>
      {surtitre && <p className="surtitre">{surtitre}</p>}
      <h2 className="h2">
        <Titre>{titre}</Titre>
      </h2>
      {intro && <p className="chapo">{intro}</p>}
    </div>
  );
}

/** Paragraphes, citations en exergue et points à intitulé gras. */
export function Corps({
  corps,
  chapo,
  recit,
  lettrine,
  anime = true,
}: {
  corps: Para[];
  /** Le premier paragraphe est composé en chapô. */
  chapo?: boolean;
  /** Récit à la première personne : composé en Garamond de lecture, comme une page de livre. */
  recit?: boolean;
  /** Le récit s'ouvre sur une lettrine. */
  lettrine?: boolean;
  anime?: boolean;
}) {
  const reveal = anime ? "reveal" : undefined;
  return (
    <div className={cn("prose", chapo && "prose--chapo", recit && "prose--recit", lettrine && "prose--lettrine")}>
      {corps.map((para, i) => {
        if (typeof para === "string") {
          return (
            <p className={reveal} key={i}>
              {para}
            </p>
          );
        }
        if ("citation" in para) {
          return (
            <blockquote className={cn("exergue", reveal)} key={i}>
              «&nbsp;{para.citation}&nbsp;»
            </blockquote>
          );
        }
        if ("accent" in para) {
          return (
            <p className={cn("accent", reveal)} key={i}>
              {para.accent}
            </p>
          );
        }
        return (
          <p className={reveal} key={i}>
            <strong>{para.point}</strong> {para.texte}
          </p>
        );
      })}
    </div>
  );
}

const STYLES = { or: "btn--or", plein: "", ligne: "btn--trait", clair: "btn--clair" } as const;

/** Rangée de boutons. Sans style précisé : le premier est plein, les suivants au trait. */
export function Boutons({
  boutons,
  sombre,
  anime = true,
}: {
  boutons: Bouton[];
  /** Le bloc est sur fond brun. */
  sombre?: boolean;
  anime?: boolean;
}) {
  return (
    <div className={cn("boutons", anime && "reveal")}>
      {boutons.map((bouton, i) => {
        const voulu = bouton.style ?? (i === 0 ? (sombre ? "or" : "plein") : sombre ? "clair" : "ligne");
        // Un bouton « clair » (trait ivoire) ne se lit que sur le brun : ailleurs, il passe au trait brun.
        const style = voulu === "clair" && !sombre ? "ligne" : voulu;
        return (
          <Vers vers={bouton.vers} className={cn("btn", STYLES[style])} key={bouton.label}>
            {bouton.label}
            <Icon name="arrow" />
          </Vers>
        );
      })}
    </div>
  );
}

/**
 * Photo de la photothèque, ou emplacement réservé décrivant le visuel attendu (`note` : sur une
 * ligne). `legende` affiche la légende sous l'image.
 */
export function Visuel({
  photo,
  className,
  note,
  legende,
  sizes = "(max-width: 960px) 90vw, 400px",
}: {
  photo: Photo;
  className?: string;
  note?: boolean;
  legende?: boolean;
  sizes?: string;
}) {
  if (photo.fichier) {
    const fichier = photos[photo.fichier];
    return (
      <figure className={cn("figure", className)}>
        <div className={cn("cadre", fichier.width > fichier.height * 1.2 && "cadre--paysage")}>
          <Image
            src={fichier.src}
            alt={photo.legende}
            width={fichier.width}
            height={fichier.height}
            sizes={sizes}
            style={{ objectPosition: fichier.foyer }}
          />
        </div>
        {legende && <figcaption>{photo.legende}</figcaption>}
      </figure>
    );
  }
  if (note) {
    return (
      <p className={cn("vide-note", className)}>
        <span>Visuel à fournir</span> {photo.legende}
      </p>
    );
  }
  return (
    <div className={cn("vide", className)} role="img" aria-label={`Emplacement réservé : ${photo.legende}`}>
      <span>Visuel à fournir</span>
      <strong>{photo.legende}</strong>
    </div>
  );
}
