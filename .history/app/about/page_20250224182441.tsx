// import Image from "next/image";
import Link from "next/link";
import AboutContent from "./aboutContent";

const AboutPage = () => {
  return (
    <>
      <section className="mt-[72px] lg:mt-[112px]">
        <div className="banner">
          <div className="banner-mask"></div>
          <div className="container z-[1] relative">
            <div className="banner-content">
              <h4 className="text-3xl font-bold text-gray-800 dark:text-gray-100 transition duration-500 ease-in-out">
                About Page
              </h4>
              <ul className="breadcrumbs">
                <li>
                  <Link
                    href="/"
                    className="text-gray-900 dark:text-gray-100 transition duration-500 ease-in-out font-semibold"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-gray-900 dark:text-gray-100 transition duration-500 ease-in-out">
                  /
                </li>
                <li>
                  <Link href="/about" className="text-sky-500 font-semibold">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <AboutContent />
    </>
  );
};

export default AboutPage;
