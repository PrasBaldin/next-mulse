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
              Contoh hasil kerja terbaru dari tim kami.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-2 gap-0 relative top-[-100px]">
            <div className="card bg-red-100 shadow-md max-h-[500px] overflow-hidden relative">
              <Image
                src={"/img/parallax-1.webp"}
                alt="img"
                width={1000}
                height={1000}
                className="h-[450px]"
              ></Image>
              <div className="overlay absolute bg-gray-800 opacity-40">
                <h3>Pekerjaan 1</h3>
                <p>deskripsi singkat</p>
                <Link href="/">
                  <button className="btn">Lihat Pekerjaan</button>
                </Link>
              </div>
            </div>
            <div className="card bg-red-200 shadow-md max-h-[500px] overflow-hidden">
              <Image
                src={"/img/parallax-2.webp"}
                alt="img"
                width={1000}
                height={1000}
                className="h-[450px]"
              ></Image>
            </div>
            <div className="card bg-green-100 shadow-md max-h-[500px] overflow-hidden">
              <Image
                src={"/img/parallax-2.webp"}
                alt="img"
                width={1000}
                height={1000}
                className="h-[450px]"
              ></Image>
            </div>
            <div className="card bg-green-200 shadow-md max-h-[500px] overflow-hidden">
              <Image
                src={"/img/parallax-1.webp"}
                alt="img"
                width={1000}
                height={1000}
                className="h-[450px]"
              ></Image>
            </div>
            <div className="card bg-blue-100 shadow-md max-h-[500px] overflow-hidden">
              <Image
                src={"/img/parallax-1.webp"}
                alt="img"
                width={1000}
                height={1000}
                className="h-[450px]"
              ></Image>
            </div>
            <div className="card bg-blue-200 shadow-md max-h-[500px] overflow-hidden">
              <Image
                src={"/img/parallax-2.webp"}
                alt="img"
                width={1000}
                height={1000}
                className="h-[450px]"
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryHomePage;
