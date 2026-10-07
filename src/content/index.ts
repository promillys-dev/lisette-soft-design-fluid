import type { Page } from "@/lib/blocs";
import { typographier } from "@/lib/typo";
import { page as contact } from "./contact";
import { page as engagement } from "./engagement-humain";
import { page as expertise } from "./expertise-etats";
import { page as lctv } from "./lctv";
import { conditions, confidentialite, cookies, mentionsLegales } from "./legales";
import { page as vision } from "./ma-vision";
import { page as parcours } from "./mon-parcours";
import { page as realisations } from "./realisations-industrielles";
import { page as presse } from "./salle-de-presse";
import { page as tribunes } from "./tribunes";

/**
 * Pages intérieures, indexées par slug (voir lib/menu.ts) : les neuf menus, puis les pages légales.
 * Les textes passent par la micro-typographie française (espaces insécables) avant d'être servis.
 */
export const pages: Record<string, Page> = Object.fromEntries(
  [
    parcours,
    vision,
    realisations,
    expertise,
    engagement,
    tribunes,
    lctv,
    presse,
    contact,
    mentionsLegales,
    confidentialite,
    cookies,
    conditions,
  ].map((page) => [page.slug, typographier(page)]),
);
