import Image from "next/image";
import React from "react";

const GalleryHomePage = () => {
  return (
    <>
      <section>
        <div className="bg-sky-500 dark:bg-sky-700 py-20 flex justify-center text-center">
          <div className="w-full mb-20 ">
            <h3 className="text-3xl font-semibold text-gray-100 w-full mb-4">
              Recent Work
            </h3>
            <p className="w-full text-gray-100 text-lg">
              Contoh hasil kerja terbaru dari tim kami.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-2 gap-0 relative top-[-100px]">
            <div className="card bg-red-100 shadow-md overflow-hidden">
              <Image
                src={"/img/parallax-1.webp"}
                alt="img"
                width={1000}
                height={1000}
              ></Image>
            </div>
            <div className="card bg-red-200 shadow-md overflow-hidden">
              <Image
                src={"/img/parallax-2.webp"}
                alt="img"
                width={30000}
                height={30000}
              ></Image>
            </div>
            <div className="card bg-green-100 shadow-md px-4 p-[20rem]">
              <span>gambar 3</span>
            </div>
            <div className="card bg-green-200 shadow-md px-4 p-[20rem]">
              <span>gambar 4</span>
            </div>
            <div className="card bg-blue-100 shadow-md px-4 p-[20rem]">
              <span>gambar 5</span>
            </div>
            <div className="card bg-blue-200 shadow-md px-4 p-[20rem]">
              <span>gambar 6</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryHomePage;
