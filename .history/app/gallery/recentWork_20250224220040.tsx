import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecentWork = () => {
  return (
    <>
      <section>
        <div className="bg-white dark:bg-gradient-to-bl dark:from-gray-900 dark:to-gray-800 py-20 flex justify-center text-center">
          <div className="w-full mb-20 pb-20">
            <h4 className="mb-3 text-sky-500 font-semibold tracking-[.25em] uppercase">
              Recent Work
            </h4>
            <h3 className="w-full text-gray-700 dark:text-gray-100 text-3xl md:text-4xl font-bold">
              Check out some of our latest works
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 relative top-[-150px]">
            {[
              {
                img: "/img/gallery-1.jpg",
                title: "Pekerjaan Pemasangan Lampu Sorot",
              },
              {
                img: "/img/gallery-2.jpg",
                title: "Pekerjaan Renovasi Garasi Rumah",
              },
              {
                img: "/img/gallery-3.jpg",
                title: "Pekerjaan Pemeliharaan Marmer",
              },
              {
                img: "/img/gallery-4.jpg",
                title: "Pekerjaan Renovasi Interior Kantor",
              },
              {
                img: "/img/gallery-5.jpg",
                title: "Pekerjaan Pembuatan Parkir Sepeda",
              },
              {
                img: "/img/gallery-6.jpg",
                title: "Pekerjaan Rangka Pembuatan Baliho",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-red-100 shadow-md max-h-[500px] overflow-hidden group relative"
              >
                <Link href="/">
                  <Image
                    src={item.img}
                    alt="img"
                    width={1000}
                    height={1000}
                    className="h-[450px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px] transform transition-transform duration-500 group-hover:scale-[1.05]"
                  ></Image>
                  <div className="overlay absolute inset-0">
                    <div className="text-gray-100 transition duration-500 opacity-0 group-hover:opacity-100 text-center h-full">
                      <div className="h-full flex flex-col justify-center items-center relative">
                        <div className="absolute inset-0 bg-gray-500 dark:bg-gray-800 transition duration-500 opacity-0 group-hover:opacity-80 z-0" />
                        <div className="z-[2]">
                          <h3 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-100 ">
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

export default RecentWork;
