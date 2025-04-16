import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "id"],
  defaultLocale: "id",
  pathnames: {
    "/": "/",
    "/services": {
      en: "/services",
      id: "/services",
    },
    "/services/construction": {
      en: "/services/construction",
      id: "/services/construction",
    },
    "/services/procurement": {
      id: "/services/procurement",
      en: "/services/procurement",
    },
    "/about": {
      en: "/about",
      id: "/about",
    },
    "/gallery": {
      en: "/gallery",
      id: "/gallery",
    },
    "/contact": {
      en: "/contact",
      id: "/contact",
    },
  },
});

type PathnamesType = typeof routing.pathnames;

export type Pathnames = keyof PathnamesType;
export type Locale = (typeof routing.locales)[number];

// Utility function to get the translated path
export const getTranslatedPath = (path: string, locale: Locale): Pathnames => {
  for (const [key, value] of Object.entries(routing.pathnames)) {
    if ((value as Record<Locale, string>)[locale] === path) {
      return key as Pathnames;
    }
  }
  return "/" as Pathnames; // Default to home if no match found
};
