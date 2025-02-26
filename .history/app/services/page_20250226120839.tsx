import Link from "next/link";
import ServicesContent from "./servicesContent";

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
          <div className="flex flex-col gap-6">
            <div className="test">
              <h1>Test 1</h1>
            </div>
            <div className="test">
              <h1>Test 2</h1>
            </div>
          </div>
        </div>
      </section>
      <ServicesContent />
    </>
  );
};

export default ServicesPage;
