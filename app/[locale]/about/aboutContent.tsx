import React from "react";
import Image from "next/image";
import AnimationFadeIn from "@/components/animation/animationFadeIn";
import LoaderImage from "@/components/loaderImage";
import { useTranslations } from "next-intl";

const AboutContent = () => {
  const t = useTranslations("About");
  return (
    <>
      {/* Konten */}
      <div className="container relative z-[2] pb-[3rem]">
        <div className="flex flex-col lg:flex-row items-center">
          <AnimationFadeIn
            className="w-full lg:w-1/2 m-4 max-h-[400px] overflow-hidden"
            delay={0.15}
            duration={1}
            direction="up"
            triggerOnExit
          >
            <Image
              loader={LoaderImage}
              width={900}
              height={900}
              src="/img/about-profile.webp"
              alt="About image"
              className="rounded shadow w-full"
            />
          </AnimationFadeIn>
          {/* Kolom deskripsi */}
          <div className="w-full lg:w-1/2 p-4 text-gray-700 dark:text-gray-100 transition duration-500 ease-in-out">
            <AnimationFadeIn
              delay={0.15}
              duration={1}
              direction="down"
              triggerOnExit
            >
              <h4 className="mb-3 text-sky-500 font-semibold tracking-[.25em] uppercase">
                {t("title")}
              </h4>
            </AnimationFadeIn>
            <AnimationFadeIn
              delay={0.15}
              duration={1}
              direction="up"
              triggerOnExit
            >
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 lg:pr-8">
                {t("subtitle")}
              </h3>
            </AnimationFadeIn>
            <AnimationFadeIn
              delay={0.2}
              duration={1}
              direction="up"
              triggerOnExit
            >
              <p className="mb-4">{t("desc.1")}</p>
            </AnimationFadeIn>
            <AnimationFadeIn
              delay={0.25}
              duration={1}
              direction="up"
              triggerOnExit
            >
              <p className="mb-4">{t("desc.2")}</p>
            </AnimationFadeIn>
            <AnimationFadeIn
              delay={0.3}
              duration={1}
              direction="up"
              triggerOnExit
            >
              <p className="mb-4">{t("desc.3")}</p>
            </AnimationFadeIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
