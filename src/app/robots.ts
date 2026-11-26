import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/** /robots.txt : tout le site est ouvert aux moteurs de recherche, qui y trouvent le plan du site. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
