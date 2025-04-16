"use client";
import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";

import IconEN from "./icons/iconLanguage/iconEN";
import IconID from "./icons/iconLanguage/iconID";

import "./toggleLanguage.css";
import { useTranslations } from "next-intl";
import { Locale } from "@/i18n/routing";

const ToggleLanguage = () => {
  const t = useTranslations("Theme");
  const pathname = usePathname();

  // Daftar locale yang valid
  const localesArray = ["en", "id"];

  // Pecah pathname menjadi segmen (contoh: "/next-mulse/en/about" → ["next-mulse", "en", "about"])
  const segments = pathname.split("/").filter(Boolean);

  // Cari index segmen yang merupakan locale
  const localeIndex = segments.findIndex((seg) => localesArray.includes(seg));

  let currentLocale: string, basePath: string, remainingPath: string;
  if (segments.length === 0 || localeIndex === -1) {
    // Jika tidak ada segmen atau locale tidak ditemukan, asumsikan default "en"
    currentLocale = "en";
    basePath = "";
    remainingPath = "/";
  } else {
    currentLocale = segments[localeIndex];
    // Base path adalah segmen sebelum locale (jika ada)
    basePath =
      segments.slice(0, localeIndex).length > 0
        ? `/${segments.slice(0, localeIndex).join("/")}`
        : "";
    // Sisa path setelah locale (misalnya, "/about")
    remainingPath =
      segments.slice(localeIndex + 1).length > 0
        ? `/${segments.slice(localeIndex + 1).join("/")}`
        : "";
  }

  const [isEnglish, setIsEnglish] = useState(currentLocale === "en");

  // Update state ketika pathname berubah
  useEffect(() => {
    const newSegments = pathname.split("/").filter(Boolean);
    const newLocaleIndex = newSegments.findIndex((seg) =>
      localesArray.includes(seg)
    );
    const newCurrentLocale =
      newLocaleIndex === -1 ? "en" : newSegments[newLocaleIndex];
    setIsEnglish(newCurrentLocale === "en");
  }, [pathname]);

  useEffect(() => {
    localStorage.setItem("language", isEnglish ? "en" : "id");
  }, [isEnglish]);

  // Locale tujuan: jika sekarang "en", toggle ke "id" dan sebaliknya
  const newLocale: Locale = isEnglish ? "id" : "en";

  // Rekonstruksi URL baru tanpa menyertakan locale (karena akan ditambahkan oleh properti locale di Link)
  const newPath = `${basePath || ""}${remainingPath}`;

  return (
    <>
      {/* Mobile */}
      <Link
        href={newPath}
        locale={newLocale}
        onClick={() => setIsEnglish(!isEnglish)}
        className="lg:hidden btn flex items-center gap-2"
        style={{ padding: ".5rem" }}
      >
        <div className="flex relative">
          <div
            className={`flex transition-all duration-500 transform ${
              isEnglish ? "opacity-100 scale-1" : "opacity-0 scale-0"
            }`}
          >
            <IconEN />
          </div>
          <div
            className={`absolute flex transition-all duration-500 transform ${
              isEnglish ? "opacity-0 scale-0" : "opacity-100 scale-1"
            }`}
          >
            <IconID />
          </div>
        </div>
        <span className="text-gray-700 dark:text-gray-300">
          {t("changeLang")}
        </span>
      </Link>

      {/* Desktop */}
      <Link
        href={newPath}
        locale={newLocale}
        onClick={() => setIsEnglish(!isEnglish)}
        className="btn hidden lg:block btn w-8 h-8 relative overflow-hidden"
      >
        <div
          className={`toggle-lang ${
            isEnglish ? "opacity-100 scale-1" : "opacity-0 scale-0"
          }`}
        >
          <IconEN />
        </div>
        <div
          className={`toggle-lang ${
            isEnglish ? "opacity-0 scale-0" : "opacity-100 scale-1"
          }`}
        >
          <IconID />
        </div>
      </Link>
    </>
  );
};

export default ToggleLanguage;
