import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Coquille } from "@/components/layout/coquille";
import { Document } from "@/components/layout/document";
import { seo } from "@/lib/content";
import "@/styles/base.css";
import "@/styles/blobs.css";
import "@/styles/forme-fluide.css";
import "@/styles/pages.css";

// Le site : proposition fluide, servie à la racine (accueil et pages intérieures).
// L'autre proposition est rangée, hors routes, dans src/app/_propositions.
export const metadata: Metadata = {
  metadataBase: new URL("https://lisetteclaudiatame.com"),
  title: seo.title,
  description: seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_CM",
    url: "/",
    siteName: "Lisette Claudia TAME NJAMBE",
    title: seo.title,
    description: seo.description,
    images: [{ url: "/images/portrait-lctn.jpg", width: 788, height: 1044, alt: seo.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/images/portrait-lctn.jpg"],
  },
};
export const viewport: Viewport = { themeColor: "#F7F3EA" };

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  const donneesStructurees = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://lisetteclaudiatame.com/#website",
        url: "https://lisetteclaudiatame.com/",
        name: "Lisette Claudia TAME NJAMBE",
        inLanguage: "fr-CM",
      },
      {
        "@type": "Person",
        "@id": "https://lisetteclaudiatame.com/#person",
        name: "Lisette Claudia TAME NJAMBE",
        url: "https://lisetteclaudiatame.com/",
        image: "https://lisetteclaudiatame.com/images/portrait-lctn.jpg",
        jobTitle: "Industrielle",
        description: seo.description,
        sameAs: [
          "https://www.linkedin.com/in/lisette-claudia-tame-51857113a",
          "https://www.facebook.com/lisetteclaudiatame",
          "https://www.instagram.com/lisette_claudia_tame/",
          "https://www.tiktok.com/discover/lisette-claudia-tame",
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://lisetteclaudiatame.com/#apc",
        name: "Africa Processing Company SA",
        url: "https://lisetteclaudiatame.com/",
        founder: { "@id": "https://lisetteclaudiatame.com/#person" },
      },
    ],
  };

  return (
    <Document forme="fluide">
      <Coquille forme="fluide">{children}</Coquille>
      <Script
        id="donnees-structurees"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(donneesStructurees) }}
      />
      {/* Chatbot IA : widget externe, isolé dans un Shadow DOM, chargé une fois la page prête.
          `data-site` désigne ce site dans l'administration du chatbot. */}
      <Script
        src="https://admin.kamersphere.com/wp-content/plugins/chatbot-ia/public/widget.js"
        data-site="lisette-tame-fluid-design"
        data-api="https://admin.kamersphere.com/wp-json/chatbot/v1/"
        strategy="lazyOnload"
      />
    </Document>
  );
}
