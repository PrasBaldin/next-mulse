"use client";
import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";

import IconEN from "./icons/iconLanguage/iconEN";
import IconID from "./icons/iconLanguage/iconID";

import "./toggleLanguage.css";
import { useTranslations } from "next-intl";
import { getTranslatedPath, Locale } from "@/i18n/routing";

const ToggleLanguage = () => {
  const t = useTranslations("Theme");
  const pathname = usePathname();

  // Dapatkan prefix dari URL, default ke "en" jika tidak ada
  const currentLocale = pathname.split("/")[1] || "en";
  const [isEnglish, setIsEnglish] = useState(currentLocale === "en");

  // Update state jika URL berubah
  useEffect(() => {
    const localeFromUrl = pathname.split("/")[1] || "en";
    setIsEnglish(localeFromUrl === "en");
  }, [pathname]);

  useEffect(() => {
    localStorage.setItem("language", isEnglish ? "en" : "id");
  }, [isEnglish]);

  // Remove the locale prefix from the pathname to form a clean URL
  const pathWithoutLocale = pathname.replace(/^\/(en|id)/, "") || "/";
  // Toggle to the other locale
  const newLocale: Locale = isEnglish ? "id" : "en";
  const newPath = getTranslatedPath(pathWithoutLocale, newLocale);

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
