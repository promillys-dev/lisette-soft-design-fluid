import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Blocs } from "@/components/blocs";
import { pages } from "@/content";
import { avecVideos, chargerLctv } from "@/lib/lctv";

type Props = { params: Promise<{ slug: string }> };

// Pages intérieures : une par fichier de src/content, générées à la construction du site. Une adresse inconnue passe par notFound(), donc par not-found.tsx.
export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = pages[(await params).slug];
  return page
    ? { title: page.titre, description: page.description }
    : { title: "Page introuvable | Lisette Claudia TAME NJAMBE" };
}

export default async function Page({ params }: Props) {
  const page = pages[(await params).slug];
  if (!page) notFound();
  // LCTV : les vidéos publiées dans WordPress prennent la place des vignettes d'attente.
  const contenu = page.slug === "lctv" ? avecVideos(page, await chargerLctv()) : page;
  return (
    <main id="contenu">
      <Blocs page={contenu} />
    </main>
  );
}
