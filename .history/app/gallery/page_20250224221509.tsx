import React from "react";
import Link from "next/link";
import Image from "next/image";

const GalleryPage = () => {
  return (
    <>
      <section className="mt-[72px] lg:mt-[112px]">
        <div className="banner">
          <div className="banner-mask"></div>
          <div className="container z-[1] relative">
            <div className="banner-content">
              <h4 className="text-3xl font-bold text-gray-800 dark:text-gray-100 transition duration-500 ease-in-out">
                Gallery Page
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
                  <Link href="/gallery" className="text-sky-500">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 pb-[8rem]">
        <div className="container">
          <div className="text-center text-3xl font-semibold text-gray-700 dark:text-gray-100 mb-10">
            <h3>
              OUR
              <br />
              PROJECTS
            </h3>
            <div className="relative my-2">
              <div className="w-[150px] h-1 absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                img: "/img/parallax-1.webp",
                title: "Pekerjaan 1",
              },
              {
                img: "/img/parallax-2.webp",
                title: "Pekerjaan 2",
              },
              {
                img: "/img/parallax-2.webp",
                title: "Pekerjaan 3",
              },
              {
                img: "/img/parallax-1.webp",
                title: "Pekerjaan 4",
              },
              {
                img: "/img/parallax-2.webp",
                title: "Pekerjaan 5",
              },
              {
                img: "/img/parallax-1.webp",
                title: "Pekerjaan 6",
              },
              {
                img: "/img/parallax-1.webp",
                title: "Pekerjaan 7",
              },
              {
                img: "/img/parallax-2.webp",
                title: "Pekerjaan 8",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="shadow-md max-h-[400px] lg:max-h-[300px] overflow-hidden relative group"
              >
                <Link>
                  <Image
                    src={item.img}
                    alt="img"
                    width={1000}
                    height={1000}
                    className="h-[600px] md:h-[250px] lg:h-[300px] xl:h-[200px] transform transition duration-500 group-hover:scale-[1.05]"
                  ></Image>
                  <div className="overlay absolute inset-0">
                    <div className="text-gray-100 transition duration-500 opacity-0 group-hover:opacity-100 h-full">
                      <div className="h-full relative">
                        <div className="absolute inset-0 bg-black transition duration-500 opacity-0 group-hover:opacity-50 z-0" />
                        <div className="flex flex-col justify-end h-full w-1/2 p-6 relative z-[2]">
                          <p className="uppercase tracking-[.05em] mb-2 text-sky-500">
                            {item.category}
                          </p>
                          <h3 className="text-2xl font-semibold text-gray-100">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
