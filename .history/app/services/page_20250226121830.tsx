import Link from "next/link";
import ServicesContent from "./servicesContent";
import RecentWork from "../gallery/recentWork";

const ServicesPage = () => {
  return (
    <>
      <section className="mt-[72px] lg:mt-[112px]">
        <div className="banner">
          <div className="banner-mask"></div>
          <div className="container z-[1] relative">
            <div className="banner-content">
              <h4 className="text-3xl font-bold text-gray-800 dark:text-gray-100 transition duration-500 ease-in-out">
                Services Page
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
                  <Link href="/services" className="text-sky-500">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container">
          <div className="w-full">
            <h4 className="mb-3 text-sky-500 font-semibold tracking-[.25em] uppercase">
              Why Choose Us
            </h4>
            <h3 className="text-3xl md:text-4xl text-gray-700 font-bold">
              Yang akan Anda dapatkan
            </h3>
          </div>
        </div>
      </section>
      <ServicesContent />
      <RecentWork />
    </>
  );
};

export default ServicesPage;
