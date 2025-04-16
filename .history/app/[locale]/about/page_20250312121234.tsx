import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

import { Link } from "@/i18n/navigation";
import AboutContent from "./aboutContent";
import VisiMisi from "./visiMisi";
import ClientPartner from "./clientPartner";
import Typewriter from "@/components/animation/animationTypewriter";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

type Props = {
  params: Promise<{ locale: string }>;
};

// export default function AboutPage() {
export default function AboutPage({ params }: Props) {
  const { locale } = use(params);

  setRequestLocale(locale);

  const t = useTranslations("Link");
  const typewriterText = `   ${t("about")}`;

  return (
    <>
      <section className="mt-[72px] lg:mt-[112px]">
        <div className="banner">
          <div className="banner-mask"></div>
          <div className="container z-[1] relative">
            <div className="banner-content">
              <h4 className="text-3xl font-bold text-gray-800 dark:text-gray-100 transition duration-500 ease-in-out transform translate-x-[-18px]">
                <span className="text-transparent select-none">.</span>
                <Typewriter text={typewriterText} speed={50} />
              </h4>
              <ul className="breadcrumbs">
                <li>
                  <Link
                    href="/"
                    className="text-gray-900 dark:text-gray-100 transition duration-500 ease-in-out"
                  >
                    {t("home")}
                  </Link>
                </li>
                <li className="text-gray-900 dark:text-gray-100 transition duration-500 ease-in-out">
                  /
                </li>
                <li>
                  <Link href="/about" className="text-sky-500">
                    {t("about")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/about-bg-1.webp')" }}
        >
          <div className="about-mask absolute inset-0 bg-white bg-opacity-50 dark:bg-gray-700 dark:bg-opacity-90 transition duration-500 ease-in-out" />
        </div>
        <AboutContent />
        <VisiMisi />
      </section>
      <ClientPartner />
    </>
  );
}
