import Image from "next/image";
import Link from "next/link";
import React from "react";

const GalleryHomePage = () => {
  return (
    <>
      <section>
        <div className="bg-gradient-to-bl from-sky-300 to-sky-400 dark:from-sky-700 dark:to-sky-800 py-20 flex justify-center text-center">
          <div className="w-full mb-20 ">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 w-full mb-4">
              Recent Work
            </h2>
            <p className="w-full text-gray-800 dark:text-gray-100 text-lg">
              Hasil kerja terbaru yang telah tim kami kerjakan.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-2 gap-0 relative top-[-100px]">
            {[
              {
                img: "/img/parallax-1.webp",
                title: "Pekerjaan 1",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic architecto eveniet accusantium aliquid sapiente? Sint dolorum optio nemo odio. Vel.",
              },
              {
                img: "/img/parallax-2.webp",
                title: "Pekerjaan 2",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic architecto eveniet accusantium aliquid sapiente? Sint dolorum optio nemo odio. Vel.",
              },
              {
                img: "/img/parallax-2.webp",
                title: "Pekerjaan 3",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic architecto eveniet accusantium aliquid sapiente? Sint dolorum optio nemo odio. Vel.",
              },
              {
                img: "/img/parallax-1.webp",
                title: "Pekerjaan 4",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic architecto eveniet accusantium aliquid sapiente? Sint dolorum optio nemo odio. Vel.",
              },
              {
                img: "/img/parallax-2.webp",
                title: "Pekerjaan 5",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic architecto eveniet accusantium aliquid sapiente? Sint dolorum optio nemo odio. Vel.",
              },
              {
                img: "/img/parallax-1.webp",
                title: "Pekerjaan 6",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic architecto eveniet accusantium aliquid sapiente? Sint dolorum optio nemo odio. Vel.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card bg-red-100 shadow-md max-h-[500px] overflow-hidden relative"
              >
                <Image
                  src={item.img}
                  alt="img"
                  width={1000}
                  height={1000}
                  className="h-[450px]"
                ></Image>
                <div className="overlay absolute inset-0 group">
                  <div className="absolute inset-0 bg-gray-800 transition duration-500 opacity-0 group-hover:opacity-80 z-0" />
                  <div className="z-[1] relative py-6 px-10 text-gray-100 transition duration-500 opacity-0 group-hover:opacity-100 text-center h-full flex flex-col justify-center items-center">
                    <h3 className="text-3xl font-semibold mb-4">
                      {item.title}
                    </h3>
                    <p className="mb-4">{item.desc}</p>
                    <Link href="/">
                      <button className="btn btn-primary px-4 py-2">
                        Lihat Pekerjaan
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryHomePage;
