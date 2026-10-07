import type { CSSProperties } from "react";

/** Assemble des classes CSS en ignorant les valeurs vides. */
export const cn = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(" ");

/** Propriétés CSS personnalisées (--i, --prev…) passées en `style`. */
export const vars = (v: Record<`--${string}`, string | number>) => v as CSSProperties;
