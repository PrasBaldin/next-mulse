"use client";
import React, { useState } from "react";
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

  // State untuk mengatur index gambar yang sedang tampil di modal
  // Jika currentIndex bernilai null, modal tidak ditampilkan
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const showPrev = () => {
    setCurrentIndex(
      (prev) => (prev + galleryItems.length - 1) % galleryItems.length
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  return (
    <div>
      {/* Grid Gambar */}
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
                    <p className="uppercase tracking-[.05em] mb-2 text-sky-500">
                      {item.category}
                    </p>
                    <h3 className="text-xl font-semibold text-gray-100">
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
  );
};

export default GalleryPage;
