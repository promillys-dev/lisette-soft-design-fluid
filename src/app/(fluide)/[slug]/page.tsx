import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Blocs } from "@/components/blocs";
import { pages } from "@/content";

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
  return (
    <main id="contenu">
      <Blocs page={page} />
    </main>
  );
}
