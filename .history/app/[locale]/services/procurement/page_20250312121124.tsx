// import { routing } from "@/i18n/routing";

// export function generateStaticParams() {
//   return routing.locales.map((locale) => ({ locale }));
// }

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import "../services.css";
import Typewriter from "@/components/animation/animationTypewriter";
import AnimationFadeIn from "@/components/animation/animationFadeIn";

import LoaderImage from "@/components/loaderImage";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

type Props = {
  params: Promise<{ locale: string }>;
};

// export default function ProcurmentPage() {
export default function ProcurmentPage({ params }: Props) {
  const { locale } = use(params);

  setRequestLocale(locale);

  const tLink = useTranslations("Link");
  const t = useTranslations("Services.procurement");
  const typewriterText = `   ${tLink("service.procurement")}`;

  const procurement = [
    {
      title: "Alat Perlengkapan Kantor",
      img: "/img/proc-office.webp",
    },
    {
      title: "Alat Kesehatan",
      img: "/img/proc-medical.webp",
    },
    {
      title: "Alat Kebersihan",
      img: "/img/proc-cleaning.webp",
    },
    {
      title: "Alat Elektronik",
      img: "/img/proc-electronic.webp",
    },
    {
      title: "Seragam dan Pakaian",
      img: "/img/proc-apparel.webp",
    },
    {
      title: "Souvenir",
      img: "/img/proc-souvenir.webp",
    },
  ];

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
                    {tLink("home")}
                  </Link>
                </li>
                <li className="text-gray-900 dark:text-gray-100 transition duration-500 ease-in-out">
                  /
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-900 dark:text-gray-100 transition duration-500 ease-in-out"
                  >
                    {tLink("services")}
                  </Link>
                </li>
                <li className="text-gray-900 dark:text-gray-100 transition duration-500 ease-in-out">
                  /
                </li>
                <li>
                  <Link href="/services/procurement" className="text-sky-500">
                    {tLink("service.procurement")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="mb-10 text-center">
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
              <h3 className="py-2 my-2 mx-auto w-3/4 text-gray-700 dark:text-gray-100 transition duration-500 ease-in-out text-xl">
                {t("desc")}
              </h3>
            </AnimationFadeIn>
          </div>
          <div className="service-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {procurement.map((procurement, index) => (
              <div key={index} className="h-full">
                <AnimationFadeIn
                  className="proc-card group h-full"
                  delay={(index + 1) * 0.1}
                  duration={1}
                  direction="up"
                  triggerOnExit
                >
                  <Image
                    loader={LoaderImage}
                    src={procurement.img}
                    width={1000}
                    height={1000}
                    alt="img"
                    className="bg-cover z-[1] transform transition duration-500 scale-[1.01] group-hover:scale-[1.05]"
                  />
                  <div className="proc-card-overlay p-20 md:p-5 h-full">
                    <div className="p-5 border-2 border-sky-500 h-full relative">
                      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-700 opacity-80" />
                      <div className="relative z-[1] flex flex-col justify-center h-full">
                        <h4 className="font-semibold text-lg mt-3 dark:text-gray-100">
                          {procurement.title}
                        </h4>
                        <a
                          href="https://katalog.inaproc.id/mulse-citra-nusa"
                          target="_blank"
                        >
                          <button className="btn btn-primary mt-4 inline-block">
                            {t("viewDetail")}
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
      </section>
    </>
  );
}
