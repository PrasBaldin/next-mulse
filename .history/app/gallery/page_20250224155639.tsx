import React from "react";
import Link from "next/link";
import Image from "next/image";

const GalleryPage = () => {
  return (
    <>
      <section className="mt-[72px] lg:mt-[112px]">
        <div className="banner py-[100px] bg-sky-100">
          <div className="container">
            <div className="banner-content">
              <h4 className="text-3xl font-semibold text-gray-700">
                Gallery Page
              </h4>
              <ul className="breadcrumbs flex gap-2 font-medium">
                <li>
                  <Link href="/" className="text-sky-500">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/gallery" className="text-gray-800">
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
          <div className="text-center text-3xl font-semibold text-gray-700 mb-8">
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
              {
                img: "/img/parallax-1.webp",
                title: "Pekerjaan 7",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic architecto eveniet accusantium aliquid sapiente? Sint dolorum optio nemo odio. Vel.",
              },
              {
                img: "/img/parallax-2.webp",
                title: "Pekerjaan 8",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic architecto eveniet accusantium aliquid sapiente? Sint dolorum optio nemo odio. Vel.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-red-100 shadow-md max-h-[300px] overflow-hidden relative"
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
                      <button className="btn btn-primary">
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

export default GalleryPage;
