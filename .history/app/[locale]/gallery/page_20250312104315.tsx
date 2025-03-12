import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

import { Link } from "@/i18n/navigation";
import Typewriter from "@/components/animation/animationTypewriter";
import { useTranslations } from "next-intl";

import GalleryContent from "./galleryContent";
// import { setRequestLocale } from "next-intl/server";
// import { use } from "react";

// type Props = {
//   params: Promise<{ locale: string }>;
// };

export default function GalleryPage() {
  // export default function GalleryPage({ params }: Props) {
  //   const { locale } = use(params);

  // Enable static rendering
  // setRequestLocale(locale);

  const tLink = useTranslations("Link");
  const typewriterText = `   ${tLink("gallery")}`;

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
                  <Link href="/gallery" className="text-sky-500">
                    {tLink("gallery")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <GalleryContent />
    </>
  );
}
