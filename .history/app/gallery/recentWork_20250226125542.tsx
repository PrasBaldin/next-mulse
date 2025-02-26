"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const RecentWork = () => {
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

  const galleryItems = [
    {
      img: "/img/gallery-1-1.jpg",
      category: "Renovasi & Perbaikan",
      title: "Pekerjaan Renovasi Interior Kantor",
    },
    {
      img: "/img/gallery-2-1.jpg",
      category: "Renovasi & Perbaikan",
      title: "Pekerjaan Renovasi Garasi Rumah",
    },
    {
      img: "/img/gallery-3.jpg",
      category: "Renovasi & Perbaikan",
      title: "Pekerjaan Pemeliharaan Marmer",
    },
    {
      img: "/img/gallery-9-1.jpg",
      category: "Electrical Engineering",
      title: "Pekerjaan Pemasangan Lampu Sorot",
    },
    {
      img: "/img/gallery-5-1.jpg",
      category: "Waterproofing",
      title: "Pekerjaan Waterproofing Membran",
    },
    {
      img: "/img/gallery-7-1.jpg",
      category: "Konstruksi",
      title: "Pekerjaan Pembuatan Pos Satpam",
    },
  ];

  return (
    <>
      <section>
        <div className="bg-white dark:bg-gradient-to-bl dark:from-gray-900 dark:to-gray-800 py-20 flex justify-center text-center">
          <div className="w-full mb-20 pb-20">
            <h4 className="mb-3 text-sky-500 font-semibold tracking-[.25em] uppercase">
              Recent Work
            </h4>
            <h3 className="w-full text-gray-700 dark:text-gray-100 text-3xl md:text-4xl font-bold">
              Lihat beberapa pekerjaan terbaru kami
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 relative top-[-150px]">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="bg-red-100 shadow-md overflow-hidden group relative"
              >
                <Link href="/gallery">
                  <Image
                    src={item.img}
                    alt="img"
                    width={1000}
                    height={1000}
                    className="transform transition-transform duration-500 group-hover:scale-[1.05]"
                  ></Image>
                  <div className="overlay absolute inset-0">
                    <div className="text-gray-100 transition duration-500 opacity-0 group-hover:opacity-100 h-full">
                      <div className="h-full relative">
                        <div className="absolute inset-0 bg-black transition duration-500 opacity-0 group-hover:opacity-50 z-0" />
                        <div className="flex flex-col justify-end h-full w-full p-6 relative z-[2]">
                          <p className="uppercase tracking-[.05em] mb-2 text-sky-500">
                            {item.category}
                          </p>
                          <h3 className="text-xl lg:text-2xl font-semibold text-gray-100">
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

export default RecentWork;
