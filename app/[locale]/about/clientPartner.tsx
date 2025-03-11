import AnimationFadeIn from "@/components/animation/animationFadeIn";
import Image from "next/image";
import React from "react";

import LoaderImage from "@/components/loaderImage";
import { useTranslations } from "next-intl";

const ClientPartner = () => {
  const t = useTranslations("About.clientPartner");
  const clients = [
    {
      img: "/img/client-1.png",
    },
    {
      img: "/img/client-2.png",
    },
    {
      img: "/img/client-3.png",
    },
    {
      img: "/img/client-4.png",
    },
    {
      img: "/img/client-5.png",
    },
    {
      img: "/img/client-6.png",
    },
  ];
  return (
    <>
      <section className="py-20 bg-white dark:bg-gray-800 transition duration-500 ease-in-out">
        <div className="container text-center">
          <div className="animation-slide-up">
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
              <h3 className="w-full text-gray-700 dark:text-gray-100 text-3xl md:text-4xl font-bold">
                {t("subtitle")}
              </h3>
            </AnimationFadeIn>
          </div>
          <div className="py-8">
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 items-center">
              {clients.map((item, index) => (
                <div key={index}>
                  <AnimationFadeIn
                    className="flex justify-center"
                    delay={(index + 1) * 0.05}
                    duration={1}
                    direction="up"
                    triggerOnExit
                  >
                    <Image
                      loader={LoaderImage}
                      src={item.img}
                      alt="client & partner"
                      width={200}
                      height={100}
                    />
                  </AnimationFadeIn>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientPartner;
