"use client";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

import "./services.css";
import AnimationFadeIn from "@/components/animation/animationFadeIn";

import IconElectrical from "@/components/icons/iconServices/iconElectrical";
import IconTools from "@/components/icons/iconServices/iconConstruction";
import IconRenovation from "@/components/icons/iconServices/iconRenovation";
import IconDesign from "@/components/icons/iconServices/iconDesign";
import IconConsultation from "@/components/icons/iconServices/iconConsultation";
import IconWaterproofing from "@/components/icons/iconServices/iconWaterproofing";

import LoaderImage from "@/components/loaderImage";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

useEffect(() => {
  const isEdge = navigator.userAgent.includes("Edg");

  // Pilih elemen yang akan dimodifikasi
  const container = document.querySelector(".container");
  const leftContainer = document.querySelector(".left-container");
  const rightContainer = document.querySelector(".right-container");

  if (isEdge) {
    // Jika browser adalah Edge, ubah ukuran max-width elemen layanan
    if (leftContainer) leftContainer.style.maxWidth = "529.400px";
    if (rightContainer) rightContainer.style.maxWidth = "494.600px";
  } else {
    // Jika browser adalah selain Edge (Chrome, Firefox, dll.), ubah margin dan padding
    if (container) {
      container.style.paddingLeft = "20px";
      container.style.paddingRight = "20px";
    }
    if (leftContainer) leftContainer.style.maxWidth = "524.400px";
    if (rightContainer) rightContainer.style.maxWidth = "489.600px";
  }
}, []);

const ServicesContent = () => {
  const t = useTranslations("Services");
  return (
    <>
      <section className="w-full flex flex-col lg:flex-row">
        <div
          className="w-full lg:w-3/5 bg-cover relative"
          style={{ backgroundImage: "url(/img/services-bg.webp)" }}
        >
          <div className="z-[1] absolute inset-0 bg-sky-100 bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-90 transition duration-500 ease-in-out" />
          <div className="z-[2] relative left-container m-auto">
            <div className="py-20">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 z-[2] ">
                {[
                  {
                    icon: IconTools,
                    title: t("construction.content.1.title"),
                    desc: t("construction.content.1.desc"),
                  },
                  {
                    icon: IconRenovation,
                    title: t("construction.content.2.title"),
                    desc: t("construction.content.2.desc"),
                  },
                  {
                    icon: IconDesign,
                    title: t("construction.content.3.title"),
                    desc: t("construction.content.3.desc"),
                  },
                  {
                    icon: IconConsultation,
                    title: t("construction.content.4.title"),
                    desc: t("construction.content.4.desc"),
                  },
                  {
                    icon: IconWaterproofing,
                    title: t("construction.content.5.title"),
                    desc: t("construction.content.5.desc"),
                  },
                  {
                    icon: IconElectrical,
                    title: t("construction.content.6.title"),
                    desc: t("construction.content.6.desc"),
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <AnimationFadeIn
                      className="h-full service-card"
                      delay={0.15}
                      duration={(index + 10) * 0.1}
                      direction="up"
                      triggerOnExit
                    >
                      <div className="mb-4 flex justify-center text-sky-500 dark:text-sky-300">
                        <item.icon />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-center">
                        {item.desc}
                      </p>
                    </AnimationFadeIn>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5 bg-white dark:bg-gradient-to-bl dark:from-gray-900 dark:to-gray-800 text-gray-700 dark:text-gray-100">
          <div className="right-container m-auto">
            <div className="py-20">
              <AnimationFadeIn
                delay={0.15}
                duration={1}
                direction="down"
                triggerOnExit
              >
                <h4 className="mb-3 text-sky-500 font-semibold tracking-[.25em] uppercase">
                  {t("ourServices")}
                </h4>
              </AnimationFadeIn>
              <AnimationFadeIn
                delay={0.15}
                duration={1}
                direction="up"
                triggerOnExit
              >
                <h3 className="mb-4 text-4xl font-bold">
                  {t("construction.title")}
                </h3>
              </AnimationFadeIn>
              <AnimationFadeIn
                delay={0.25}
                duration={1}
                direction="up"
                triggerOnExit
              >
                <p className="py-2 my-2">{t("construction.moreDesc.1")}</p>
              </AnimationFadeIn>
              <AnimationFadeIn
                delay={0.3}
                duration={1}
                direction="up"
                triggerOnExit
              >
                <p className="py-2 my-2">{t("construction.moreDesc.2")}</p>
              </AnimationFadeIn>
              <AnimationFadeIn
                delay={0.35}
                duration={1}
                direction="up"
                triggerOnExit
              >
                <p className="py-2 my-2">{t("construction.moreDesc.3")}</p>
              </AnimationFadeIn>
              <div className="py-2 my-2">
                <AnimationFadeIn
                  delay={0.4}
                  duration={1}
                  direction="up"
                  triggerOnExit
                >
                  <Link href="/services/construction">
                    <button className="btn btn-primary-border">
                      {t("viewDetail")}
                    </button>
                  </Link>
                </AnimationFadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-100 py-20 lg:py-[8rem]">
        <div className="container">
          <div className="w-full flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/4 space-y-4">
              <AnimationFadeIn
                delay={0.15}
                duration={1}
                direction="down"
                triggerOnExit
              >
                <h4 className="mb-3 text-sky-500 font-semibold tracking-[.25em] uppercase">
                  {t("ourServices")}
                </h4>
              </AnimationFadeIn>
              <AnimationFadeIn
                delay={0.2}
                duration={1}
                direction="up"
                triggerOnExit
              >
                <h3 className="text-4xl font-bold">{t("procurement.title")}</h3>
              </AnimationFadeIn>
              <AnimationFadeIn
                delay={0.25}
                duration={1}
                direction="up"
                triggerOnExit
              >
                <p className="pr-5 text-lg text-gray-600 dark:text-gray-300">
                  {t("procurement.moreDesc.1")}
                </p>
              </AnimationFadeIn>
              <AnimationFadeIn
                delay={0.3}
                duration={1}
                direction="up"
                triggerOnExit
              >
                <p className="pr-5 text-lg text-gray-600 dark:text-gray-300">
                  {t("procurement.moreDesc.2")}
                </p>
              </AnimationFadeIn>
              <AnimationFadeIn
                delay={0.35}
                duration={1}
                direction="up"
                triggerOnExit
              >
                <Link href="/services/procurement">
                  <button className="btn btn-primary-border my-4">
                    {t("procurement.viewDetail")}
                  </button>
                </Link>
              </AnimationFadeIn>
            </div>
            <div className="w-full lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[
                  {
                    title: t("procurement.content.1.title"),
                    img: "/img/proc-office.webp",
                  },
                  {
                    title: t("procurement.content.2.title"),
                    img: "/img/proc-medical.webp",
                  },
                  {
                    title: t("procurement.content.3.title"),
                    img: "/img/proc-cleaning.webp",
                  },
                  {
                    title: t("procurement.content.4.title"),
                    img: "/img/proc-electronic.webp",
                  },
                  {
                    title: t("procurement.content.5.title"),
                    img: "/img/proc-apparel.webp",
                  },
                  {
                    title: t("procurement.content.6.title"),
                    img: "/img/proc-souvenir.webp",
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <AnimationFadeIn
                      className="proc-card group"
                      delay={(index + 1) * 0.1}
                      duration={1}
                      direction="up"
                      triggerOnExit
                    >
                      <Image
                        loader={LoaderImage}
                        src={item.img}
                        width={1000}
                        height={1000}
                        alt="img"
                        className="bg-cover z-[1] transform transition duration-500 scale-[1.01] group-hover:scale-[1.05]"
                      />
                      <div className="proc-card-overlay p-20 md:p-5 h-full">
                        <div className="p-5 border-2 border-sky-500 h-full relative">
                          <div className="absolute inset-0 bg-gray-100 dark:bg-gray-700 opacity-80" />
                          <div className="relative z-[1] flex flex-col justify-center h-full">
                            <h4 className="font-semibold text-lg mt-3">
                              {item.title}
                            </h4>
                            <a
                              href="https://katalog.inaproc.id/mulse-citra-nusa"
                              target="_blank"
                            >
                              <button className="btn btn-primary mt-4 inline-block">
                                {t("procurement.viewDetail")}
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </AnimationFadeIn>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesContent;
