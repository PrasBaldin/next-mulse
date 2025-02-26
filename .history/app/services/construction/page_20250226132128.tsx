import Link from "next/link";

const ConstructionPage = () => {
  return (
    <>
      <section className="mt-[72px] lg:mt-[112px]">
        <div className="banner">
          <div className="banner-mask"></div>
          <div className="container z-[1] relative">
            <div className="banner-content">
              <h4 className="text-3xl font-bold text-gray-800 dark:text-gray-100 transition duration-500 ease-in-out">
                Jasa Konstruksi
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
                  <Link
                    href="/"
                    className="text-gray-900 dark:text-gray-100 transition duration-500 ease-in-out"
                  >
                    Services
                  </Link>
                </li>
                <li className="text-gray-900 dark:text-gray-100 transition duration-500 ease-in-out">
                  /
                </li>
                <li>
                  <Link href="/gallery" className="text-sky-500">
                    Construction
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container text-center">
          <h4 className="mb-3 text-sky-500 font-semibold tracking-[.25em] uppercase">
            Jasa Konstruksi
          </h4>
          <h3 className="py-2 my-2 mx-auto w-1/2 text-gray-700 text-xl font-semibold">
            Kami menghadirkan solusi konstruksi yang menyeluruh dan inovatif,
            dan dirancang untuk memenuhi standar kualitas tertinggi dan
            disesuaikan dengan kebutuhan spesifik klien.
          </h3>
        </div>
      </section>
    </>
  );
};

export default ConstructionPage;
