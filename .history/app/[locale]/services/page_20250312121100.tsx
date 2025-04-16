import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

import { Link } from "@/i18n/navigation";
import ServicesContent from "./servicesContent";
import RecentWork from "../gallery/recentWork";
import Typewriter from "@/components/animation/animationTypewriter";

import IconStar from "@/components/icons/iconStar";
import IconTeam from "@/components/icons/iconTeam";
import IconThumbUp from "@/components/icons/iconThumbUp";
import AnimationFadeIn from "@/components/animation/animationFadeIn";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

type Props = {
  params: Promise<{ locale: string }>;
};

// export default function ServicesPage() {
export default function ServicesPage({ params }: Props) {
  const { locale } = use(params);

  setRequestLocale(locale);

  const tLink = useTranslations("Link");
  const t = useTranslations("Services");
  const tBenefit = useTranslations("Benefit");
  const typewriterText = `   ${tLink("services")}`;

  return (
    <>
      <section className="mt-[72px] lg:mt-[112px]">
        <div className="banner">
          <div className="banner-mask"></div>
          <div className="container z-[1] relative">
            <div className="banner-content">
              <h4 className="text-3xl font-bold text-gray-800 dark:text-sky-400 transition duration-500 ease-in-out transform translate-x-[-18px]">
                <span className="text-transparent select-none">.</span>
                <Typewriter text={typewriterText} speed={50} />
              </h4>
              <ul className="breadcrumbs">
                <li>
                  <Link
                    href="/"
                    className="text-gray-900 dark:text-gray-100 transition duration-500 ease-in-out"
                  >
                    {tLink("home")}
                  </Link>
                </li>
                <li className="text-gray-900 dark:text-gray-100 transition duration-500 ease-in-out">
                  /
                </li>
                <li>
                  <Link href="/services" className="text-sky-500">
                    {tLink("services")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="w-full text-center mb-20">
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
              <h3 className="text-3xl md:text-4xl text-gray-700 dark:text-gray-100 transition duration-500 ease-in-out font-bold">
                {t("subtitle")}
              </h3>
            </AnimationFadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <AnimationFadeIn
              className="flex flex-col justify-center items-center text-center"
              delay={0.2}
              duration={1}
              direction="up"
              triggerOnExit
            >
              <IconStar />
              <h4 className="text-xl font-semibold text-sky-800 dark:text-sky-400 transition duration-500 ease-in-out mt-4 mb-2">
                {tBenefit("1.title")}
              </h4>
              <p className="dark:text-gray-100 transition duration-500 ease-in-out">
                {tBenefit("1.desc")}
              </p>
            </AnimationFadeIn>
            <AnimationFadeIn
              className="flex flex-col justify-center items-center text-center"
              delay={0.3}
              duration={1}
              direction="up"
              triggerOnExit
            >
              <IconTeam />
              <h4 className="text-xl font-semibold text-sky-800 dark:text-sky-400 transition duration-500 ease-in-out mt-4 mb-2">
                {tBenefit("2.title")}
              </h4>
              <p className="dark:text-gray-100 transition duration-500 ease-in-out">
                {tBenefit("2.desc")}
              </p>
            </AnimationFadeIn>
            <AnimationFadeIn
              className="flex flex-col justify-center items-center text-center"
              delay={0.4}
              duration={1}
              direction="up"
              triggerOnExit
            >
              <IconThumbUp />
              <h4 className="text-xl font-semibold text-sky-800 dark:text-sky-400 transition duration-500 ease-in-out mt-4 mb-2">
                {tBenefit("3.title")}
              </h4>
              <p className="dark:text-gray-100 transition duration-500 ease-in-out">
                {tBenefit("3.desc")}
              </p>
            </AnimationFadeIn>
          </div>
        </div>
      </section>
      <ServicesContent />
      <RecentWork />
    </>
  );
}
