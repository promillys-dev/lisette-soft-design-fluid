import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Coquille } from "@/components/layout/coquille";
import { Document } from "@/components/layout/document";
import { seo } from "@/lib/content";
import "@/styles/base.css";
import "@/styles/blobs.css";
import "@/styles/forme-formes.css";

// Proposition B · Formes et blobs, non retenue (voir ../LISEZ-MOI.md). Root layout propre à la
// proposition : il ne charge que sa feuille de formes.
export const metadata: Metadata = { title: seo.title, description: seo.description };
export const viewport: Viewport = { themeColor: "#F7F3EA" };

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Document forme="formes">
      <Coquille forme="formes">{children}</Coquille>
    </Document>
  );
}
