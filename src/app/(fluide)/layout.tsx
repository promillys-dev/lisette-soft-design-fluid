import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Coquille } from "@/components/layout/coquille";
import { Document } from "@/components/layout/document";
import { seo } from "@/lib/content";
import "@/styles/base.css";
import "@/styles/blobs.css";
import "@/styles/forme-fluide.css";
import "@/styles/pages.css";

// Le site : proposition fluide, servie à la racine (accueil et pages intérieures).
// L'autre proposition est rangée, hors routes, dans src/app/_propositions.
export const metadata: Metadata = { title: seo.title, description: seo.description };
export const viewport: Viewport = { themeColor: "#F7F3EA" };

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Document forme="fluide">
      <Coquille forme="fluide">{children}</Coquille>
    </Document>
  );
}
