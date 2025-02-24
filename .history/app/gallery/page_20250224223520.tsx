"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const GalleryPage = () => {
  const galleryItems = [
    {
      img: "/img/gallery-1.jpg",
      category: "Electrical Engineering",
      title: "Pekerjaan Pemasangan Lampu Sorot",
    },
    {
      img: "/img/gallery-2.jpg",
      category: "Renovasi & Perbaikan",
      title: "Pekerjaan Renovasi Garasi Rumah",
    },
    {
      img: "/img/gallery-3.jpg",
      category: "Renovasi & Perbaikan",
      title: "Pekerjaan Pemeliharaan Marmer",
    },
    {
      img: "/img/gallery-4.jpg",
      category: "Renovasi & Perbaikan",
      title: "Pekerjaan Renovasi Interior Kantor",
    },
    {
      img: "/img/gallery-5.jpg",
      category: "Konstruksi",
      title: "Pekerjaan Pembuatan Parkir Sepeda",
    },
    {
      img: "/img/gallery-6.jpg",
      category: "Konstruksi",
      title: "Pekerjaan Rangka Pembuatan Baliho",
    },
    {
      img: "/img/parallax-1.webp",
      category: "Waterproofing",
      title: "Pekerjaan 7",
    },
    {
      img: "/img/parallax-2.webp",
      category: "Konstruksi",
      title: "Pekerjaan 8",
    },
  ];

  // Tentukan tipe state sebagai number atau null
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const showPrev = () => {
    setCurrentIndex(
      (prev) => (prev! + galleryItems.length - 1) % galleryItems.length
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev! + 1) % galleryItems.length);
  };

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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="shadow-md max-h-[350px] md:max-h-[250px] lg:max-h-[300px] overflow-hidden relative group cursor-pointer"
                onClick={() => openModal(index)}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className="h-[350px] md:h-[250px] lg:h-[300px] xl:h-[200px] transform transition duration-500 group-hover:scale-[1.05]"
                />
                <div className="overlay absolute inset-0">
                  <div className="text-gray-100 transition duration-500 opacity-0 group-hover:opacity-100 h-full">
                    <div className="h-full relative">
                      <div className="absolute inset-0 bg-black transition duration-500 opacity-0 group-hover:opacity-50 z-0" />
                      <div className="flex flex-col justify-end h-full w-full p-6 relative z-[2]">
                        <p className="uppercase text-sm font-semibold tracking-[.05em] mb-2 text-sky-500">
                          {item.category}
                        </p>
                        <h3 className="text-xl font-medium text-gray-100">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal Custom Lightbox */}
          {currentIndex !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
              <div className="relative">
                {/* Tombol Tutup */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white text-2xl"
                >
                  &times;
                </button>
                {/* Tombol Navigasi Kiri */}
                <button
                  onClick={showPrev}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
                >
                  &#10094;
                </button>
                {/* Gambar yang ditampilkan */}
                <Image
                  src={galleryItems[currentIndex].img}
                  alt={galleryItems[currentIndex].title}
                  width={1200}
                  height={800}
                  className="max-h-screen object-contain"
                />
                {/* Tombol Navigasi Kanan */}
                <button
                  onClick={showNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
                >
                  &#10095;
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
