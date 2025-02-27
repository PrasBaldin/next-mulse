"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ModalLightbox from "@/components/modalLightbox";
import Typewriter from "@/components/heroTypewriter";

const GalleryPage = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openModal = (index: number) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);

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
      img: "/img/gallery-1-2.jpg",
      category: "Renovasi & Perbaikan",
      title: "Pekerjaan Renovasi Interior Kantor",
    },
    {
      img: "/img/gallery-1-3.jpg",
      category: "Renovasi & Perbaikan",
      title: "Pekerjaan Renovasi Interior Kantor",
    },
    {
      img: "/img/gallery-2-1.jpg",
      category: "Renovasi & Perbaikan",
      title: "Pekerjaan Renovasi Garasi Rumah",
    },
    {
      img: "/img/gallery-2-2.jpg",
      category: "Renovasi & Perbaikan",
      title: "Pekerjaan Renovasi Garasi Rumah",
    },
    {
      img: "/img/gallery-2-3.jpg",
      category: "Renovasi & Perbaikan",
      title: "Pekerjaan Renovasi Garasi Rumah",
    },
    {
      img: "/img/gallery-3.jpg",
      category: "Renovasi & Perbaikan",
      title: "Pekerjaan Pemeliharaan Marmer",
    },
    {
      img: "/img/gallery-4-1.jpg",
      category: "Electrical Engineering",
      title: "Pekerjaan Pemasangan Lampu Hanggar",
    },
    {
      img: "/img/gallery-4-2.jpg",
      category: "Electrical Engineering",
      title: "Pekerjaan Pemasangan Lampu Hanggar",
    },
    {
      img: "/img/gallery-5-1.jpg",
      category: "Waterproofing",
      title: "Pekerjaan Waterproofing Membran",
    },
    {
      img: "/img/gallery-5-2.jpg",
      category: "Waterproofing",
      title: "Pekerjaan Waterproofing Membran",
    },
    {
      img: "/img/gallery-5-3.jpg",
      category: "Waterproofing",
      title: "Pekerjaan Waterproofing Membran",
    },
    {
      img: "/img/gallery-6-1.jpg",
      category: "Konstruksi",
      title: "Pekerjaan Pembuatan Atap Lapangan",
    },
    {
      img: "/img/gallery-6-2.jpg",
      category: "Konstruksi",
      title: "Pekerjaan Pembuatan Atap Lapangan",
    },
    {
      img: "/img/gallery-6-3.jpg",
      category: "Konstruksi",
      title: "Pekerjaan Pembuatan Atap Lapangan",
    },
    {
      img: "/img/gallery-7-1.jpg",
      category: "Konstruksi",
      title: "Pekerjaan Pembuatan Pos Satpam",
    },
    {
      img: "/img/gallery-7-2.jpg",
      category: "Konstruksi",
      title: "Pekerjaan Pembuatan Pos Satpam",
    },
    {
      img: "/img/gallery-8-1.jpg",
      category: "Konstruksi",
      title: "Pekerjaan Modifikasi Kontainer",
    },
    {
      img: "/img/gallery-8-2.jpg",
      category: "Konstruksi",
      title: "Pekerjaan Modifikasi Kontainer",
    },
    {
      img: "/img/gallery-8-3.jpg",
      category: "Konstruksi",
      title: "Pekerjaan Modifikasi Kontainer",
    },
    {
      img: "/img/gallery-9-1.jpg",
      category: "Electrical Engineering",
      title: "Pekerjaan Pemasangan Lampu Sorot",
    },
    {
      img: "/img/gallery-9-2.jpg",
      category: "Electrical Engineering",
      title: "Pekerjaan Pemasangan Lampu Sorot",
    },
    {
      img: "/img/gallery-10-1.jpg",
      category: "Konstruksi",
      title: "Pekerjaan Pembuatan Klinik",
    },
    {
      img: "/img/gallery-10-2.jpg",
      category: "Konstruksi",
      title: "Pekerjaan Pembuatan Klinik",
    },
    {
      img: "/img/gallery-10-3.jpg",
      category: "Konstruksi",
      title: "Pekerjaan Pembuatan Klinik",
    },
    {
      img: "/img/gallery-11.jpg",
      category: "Konstruksi",
      title: "Pekerjaan Pembuatan Parkir Sepeda",
    },
    {
      img: "/img/gallery-12.jpg",
      category: "Konstruksi",
      title: "Pekerjaan Pembuatan Rangka Baliho",
    },
  ];

  return (
    <>
      <section className="mt-[72px] lg:mt-[112px]">
        <div className="banner">
          <div className="banner-mask"></div>
          <div className="container z-[1] relative">
            <div className="banner-content">
              <h4 className="text-3xl font-bold text-gray-800 dark:text-gray-100 transition duration-500 ease-in-out">
                <span className="text-transparent transform translate-x-[1000px]">
                  .
                </span>
                <Typewriter text="    Galeri" speed={50} />
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
                className="shadow-md overflow-hidden relative group cursor-pointer"
                onClick={() => openModal(index)}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className="transform transition duration-500 group-hover:scale-[1.05]"
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
          <ModalLightbox
            currentIndex={currentIndex}
            galleryItems={galleryItems}
            closeModal={closeModal}
            showPrev={showPrev}
            showNext={showNext}
          />
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
