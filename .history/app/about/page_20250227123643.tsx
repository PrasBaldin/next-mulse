import Link from "next/link";
import AboutContent from "./aboutContent";
import VisiMisi from "./visiMisi";
import ClientPartner from "./clientPartner";
import Typewriter from "@/components/heroTypewriter";

const AboutPage = () => {
  return (
    <>
      <section className="mt-[72px] lg:mt-[112px]">
        <div className="banner">
          <div className="banner-mask"></div>
          <div className="container z-[1] relative">
            <div className="banner-content">
              <h4 className="text-3xl font-bold text-gray-800 dark:text-gray-100 transition duration-500 ease-in-out">
                <Typewriter text=" Tentang Kami" speed={150} />
              </h4>
              <ul className="breadcrumbs">
                <li>
                  <Link
                    href="/"
                    className="text-gray-900 dark:text-gray-100 transition duration-500 ease-in-out"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-gray-900 dark:text-gray-100 transition duration-500 ease-in-out">
                  /
                </li>
                <li>
                  <Link href="/about" className="text-sky-500">
                    About
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
};

export default AboutPage;
