import React from "react";

import AnimationFadeIn from "@/components/animation/animationFadeIn";
import { useTranslations } from "next-intl";

const VisiMisi = () => {
  const t = useTranslations("About.visiMisi");
  return (
    <>
      {/* Visi Misi */}
      <div className="pt-1 lg:pt-4 pb-20 bg-gradient-to-b from-white to-gray-200 dark:from-gray-900 dark:to-gray-800 z-[2]">
        <div className="container mx-auto px-4">
          <AnimationFadeIn
            delay={0.3}
            duration={1}
            direction="down"
            triggerOnExit
          >
            <h4 className="mb-10 text-xl text-sky-500 font-bold tracking-[.25em] uppercase relative inline-block text-center w-full">
              {t("title")}
            </h4>
          </AnimationFadeIn>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Card Visi */}
            <AnimationFadeIn
              className="flex-1 h-full bg-white dark:bg-gradient-to-br dark:form-gray-700 dark:to-gray-600 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-sky-400 z-[2]"
              delay={0.2}
              duration={1}
              direction="left"
              triggerOnExit
            >
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
                {t("vision.title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t("vision.desc")}
              </p>
            </AnimationFadeIn>
            {/* Card Misi */}
            <AnimationFadeIn
              className="flex-1 h-full bg-white dark:bg-gradient-to-bl dark:form-gray-700 dark:to-gray-600 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-sky-400 z-[2]"
              delay={0.2}
              duration={1}
              direction="right"
              triggerOnExit
            >
              <h3 className="h-full text-2xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
                {t("mission.title")}
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>{t("mission.desc.1")}</li>
                <li>{t("mission.desc.2")}</li>
                <li>{t("mission.desc.3")}</li>
              </ul>
            </AnimationFadeIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisiMisi;
