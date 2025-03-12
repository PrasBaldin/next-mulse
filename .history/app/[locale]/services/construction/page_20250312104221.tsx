import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import IconTools from "@/components/icons/iconServices/iconConstruction";
import IconRenovation from "@/components/icons/iconServices/iconRenovation";
import IconDesign from "@/components/icons/iconServices/iconDesign";
import IconConsultation from "@/components/icons/iconServices/iconConsultation";
import IconWaterproofing from "@/components/icons/iconServices/iconWaterproofing";
import IconElectrical from "@/components/icons/iconServices/iconElectrical";
import Typewriter from "@/components/animation/animationTypewriter";
import AnimationFadeIn from "@/components/animation/animationFadeIn";

import LoaderImage from "@/components/loaderImage";
import { useTranslations } from "next-intl";
// import { setRequestLocale } from "next-intl/server";
// import { use } from "react";

// type Props = {
//   params: Promise<{ locale: string }>;
// };

export default function ConstructionPage() {
  // export default function ConstructionPage({ params }: Props) {
  //   const { locale } = use(params);

  // Enable static rendering
  // setRequestLocale(locale);

  const tLink = useTranslations("Link");
  const t = useTranslations("Services.construction");
  const typewriterText = `   ${tLink("service.construction")}`;

  const services = [
    {
      img: "/img/service-construction.jpg",
      icon: IconTools,
      title: "Konstruksi Bangunan",
      desc: "Menyediakan solusi konstruksi bangunan yang inovatif dan berkualitas tinggi untuk berbagai proyek.",
    },
    {
      img: "/img/gallery-1-1.jpg",
      icon: IconRenovation,
      title: "Renovasi & Perbaikan",
      desc: "Layanan renovasi dan perbaikan bangunan dengan pendekatan profesional dan efisien untuk meningkatkan nilai properti Anda.",
    },
    {
      img: "/img/gallery-13-1.jpg",
      icon: IconDesign,
      title: "Desain Arsitektur",
      desc: "Menyediakan layanan desain arsitektur kreatif dan inovatif untuk menciptakan bangunan yang unik dan fungsional.",
    },
    {
      img: "/img/consultation.jpg",
      icon: IconConsultation,
      title: "Konsultasi Proyek",
      desc: "Menawarkan konsultasi menyeluruh untuk memastikan setiap tahap proyek berjalan dengan lancar dan tepat sasaran.",
    },
    {
      img: "/img/service-waterproofing.jpg",
      icon: IconWaterproofing,
      title: "Waterproofing",
      desc: "Menyediakan solusi waterproofing yang handal dan tahan lama untuk melindungi bangunan dari kebocoran serta kerusakan akibat kelembapan.",
    },
    {
      img: "/img/gallery-9-1.jpg",
      icon: IconElectrical,
      title: "Electrical Engineering",
      desc: "Menyediakan layanan perancangan dan instalasi sistem kelistrikan yang aman, efisien, dan sesuai standar untuk mendukung infrastruktur modern.",
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
                  <Link href="/services/construction" className="text-sky-500">
                    {tLink("service.construction")}
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
              <h3 className="py-2 my-2 mx-auto w-full md:w-3/4 text-gray-700 dark:text-gray-100 transition duration-500 ease-in-out text-xl">
                {t("desc")}
              </h3>
            </AnimationFadeIn>
          </div>
          <div className="service-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((service, index) => (
              <div key={index} className="h-full">
                <AnimationFadeIn
                  className="card h-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition duration-500 ease-in-out rounded"
                  delay={(index + 1) * 0.1}
                  duration={1}
                  direction="up"
                  triggerOnExit
                >
                  <div className="rounded">
                    <Image
                      loader={LoaderImage}
                      src={service.img}
                      alt="img"
                      width={1000}
                      height={100}
                      className="rounded-t"
                    />
                  </div>
                  <div className="p-4 md:p-8">
                    <div className="text-xl font-semibold pb-3 flex gap-2 items-center">
                      <service.icon />
                      <h4>{service.title}</h4>
                    </div>
                    <div className="pb-3">
                      <p>{service.desc}</p>
                    </div>
                    <a
                      href="https://api.whatsapp.com/send?phone=6285260062002&text=Hallo%20Mulse!%20saya%20membutuhkan%20bantuan%20terkait%20layanan%20di%20mulse.id"
                      target="_blank"
                    >
                      <button className="btn btn-primary flex ">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 30.667 30.667"
                        >
                          <g>
                            <path
                              d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017
                      c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382
                      c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076
                      c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427
                      c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437
                      c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536
                      c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609
                      c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611
                      c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787
                      c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739
                      C23.307,19.268,23.307,18.533,23.214,18.38z"
                            />
                          </g>
                        </svg>
                        {t("call")}
                      </button>
                    </a>
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
