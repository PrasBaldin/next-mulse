"use client";
import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";

import IconEN from "./icons/iconLanguage/iconEN";
import IconID from "./icons/iconLanguage/iconID";

import "./toggleLanguage.css";
import { useTranslations } from "next-intl";
import { getTranslatedPath, Locale, Pathnames, routing } from "@/i18n/routing";

type AllowedPaths =
  | "/"
  | "/services"
  | "/services/construction"
  | "/services/procurement"
  | "/about"
  | "/gallery"
  | "/contact";

const ToggleLanguage = () => {
  const t = useTranslations("Theme");
  const pathname = usePathname();

  // Daftar locale yang valid (sesuai dengan routing)
  const localesArray: Locale[] = ["en", "id"];

  // Pecah pathname menjadi segmen (contoh: "/next-mulse/en/about" → ["next-mulse", "en", "about"])
  const segments = pathname.split("/").filter(Boolean);

  // Cari index segmen yang merupakan locale
  const localeIndex = segments.findIndex((seg) =>
    localesArray.includes(seg as Locale)
  );

  let currentLocale: Locale = "id";
  let basePath = "";
  let remainingPath = "/";

  if (localeIndex !== -1) {
    currentLocale = segments[localeIndex] as Locale;
    // Base path adalah segmen sebelum locale, jika ada
    basePath =
      segments.slice(0, localeIndex).length > 0
        ? `/${segments.slice(0, localeIndex).join("/")}`
        : "";
    // Sisa path setelah locale (misalnya, "/about")
    remainingPath =
      segments.slice(localeIndex + 1).length > 0
        ? `/${segments.slice(localeIndex + 1).join("/")}`
        : "/";
  }

  const [isBahasa, setIsBahasa] = useState(currentLocale === "id");

  // Update state jika URL berubah
  useEffect(() => {
    const segs = pathname.split("/").filter(Boolean);
    const idx = segs.findIndex((seg) => localesArray.includes(seg as Locale));
    const urlLocale = idx !== -1 ? (segs[idx] as Locale) : "id";
    setIsBahasa(urlLocale === "id");
  }, [pathname]);

  useEffect(() => {
    localStorage.setItem("language", isBahasa ? "id" : "en");
  }, [isBahasa]);

  // Locale tujuan: jika saat ini "en", toggle ke "id" dan sebaliknya
  const newLocale: Locale = isBahasa ? "en" : "id";

  // Gunakan helper getTranslatedPath untuk mendapatkan rute (tanpa locale) yang valid.
  // getTranslatedPath mengharapkan path tanpa prefix locale, misalnya "/about"
  const translatedPath: Pathnames = getTranslatedPath(remainingPath, newLocale);

  // Rekonstruksi URL baru tanpa menambahkan locale secara manual (Link akan menambahkannya lewat properti locale)
  const newPath = `${basePath}${translatedPath}`;
  const newPathTyped = newPath as AllowedPaths;

  console.log("Default locale:", routing.defaultLocale);

  return (
    <>
      {/* Mobile */}
      <Link
        href={newPathTyped}
        locale={newLocale}
        onClick={() => setIsBahasa(!isBahasa)}
        className="lg:hidden btn flex items-center gap-2"
        style={{ padding: ".5rem" }}
      >
        <div className="flex relative">
          <div
            className={`flex transition-all duration-500 transform ${
              isBahasa ? "opacity-100 scale-1" : "opacity-0 scale-0"
            }`}
          >
            <IconID />
          </div>
          <div
            className={`absolute flex transition-all duration-500 transform ${
              isBahasa ? "opacity-0 scale-0" : "opacity-100 scale-1"
            }`}
          >
            <IconEN />
          </div>
        </div>
        <span className="text-gray-700 dark:text-gray-300">
          {t("changeLang")}
        </span>
      </Link>

      {/* Desktop */}
      <Link
        href={newPathTyped}
        locale={newLocale}
        onClick={() => setIsBahasa(!isBahasa)}
        className="btn hidden lg:block btn w-8 h-8 relative overflow-hidden"
      >
        <div
          className={`toggle-lang ${
            isBahasa ? "opacity-100 scale-1" : "opacity-0 scale-0"
          }`}
        >
          <IconID />
        </div>
        <div
          className={`toggle-lang ${
            isBahasa ? "opacity-0 scale-0" : "opacity-100 scale-1"
          }`}
        >
          <IconEN />
        </div>
      </Link>
    </>
  );
};

export default ToggleLanguage;
