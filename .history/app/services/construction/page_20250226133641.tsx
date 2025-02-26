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
        <div className="container">
          <div className="mb-10 text-center">
            <h4 className="mb-3 text-sky-500 font-semibold tracking-[.25em] uppercase">
              Jasa Konstruksi
            </h4>
            <h3 className="py-2 my-2 mx-auto w-full md:w-3/4 text-gray-700 dark:text-gray-100 transition duration-500 ease-in-out text-xl">
              Kami menghadirkan solusi konstruksi yang menyeluruh dan inovatif
              untuk memenuhi standar kualitas tertinggi dan disesuaikan dengan
              kebutuhan spesifik klien
            </h3>
          </div>
          <div className="service-content grid grid-cols-2 md:grid-cols-3">
            <div className="card bg-gray-200 rounded p-8">
              <div className="card-img pb-3">
                <span>Image</span>
              </div>
              <div className="card-title text-xl font-semibold pb-3">
                <h4>Judul Jasa</h4>
              </div>
              <div className="card-desc pb-3">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias, pariatur.
                </p>
              </div>
              <button className="btn btn-primary">Hubungi Kami</button>
            </div>
            <div className="card bg-gray-200 rounded p-8">
              <div className="card-img pb-3">
                <span>Image</span>
              </div>
              <div className="card-title text-xl font-semibold pb-3">
                <h4>Judul Jasa</h4>
              </div>
              <div className="card-desc pb-3">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias, pariatur.
                </p>
              </div>
              <button className="btn btn-primary">Hubungi Kami</button>
            </div>
            <div className="card bg-gray-200 rounded p-8">
              <div className="card-img pb-3">
                <span>Image</span>
              </div>
              <div className="card-title text-xl font-semibold pb-3">
                <h4>Judul Jasa</h4>
              </div>
              <div className="card-desc pb-3">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias, pariatur.
                </p>
              </div>
              <button className="btn btn-primary">Hubungi Kami</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConstructionPage;
