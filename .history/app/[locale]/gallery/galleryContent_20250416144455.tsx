"use client";
import React, { useState } from "react";
import Image from "next/image";
import ModalLightbox from "@/components/modalLightbox";
import AnimationFadeIn from "@/components/animation/animationFadeIn";
import LoaderImage from "@/components/loaderImage";
import { useTranslations } from "next-intl";
import { galleryItems } from "./galleryItems";

const GalleryContent = () => {
  const t = useTranslations("Gallery");

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const itemsPerPage = 12;
  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);

  const openModal = (index: number) => {
    const absoluteIndex = (currentPage - 1) * itemsPerPage + index;
    setCurrentIndex(absoluteIndex);
  };
  const closeModal = () => setCurrentIndex(null);

  const showPrev = () => {
    setCurrentIndex(
      (prev) => (prev! + galleryItems.length - 1) % galleryItems.length
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev! + 1) % galleryItems.length);
  };

  const handlePageChange = (page: number) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
    }, 500); // simulate loading delay
  };

  const currentItems = galleryItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <section className="pt-20 pb-[8rem]">
        <div className="container">
          <div className="text-center mb-20">
            <AnimationFadeIn
              delay={0.15}
              duration={1}
              direction="down"
              triggerOnExit
            >
              <h3 className="mb-3 text-sky-500 font-semibold tracking-[.25em] uppercase">
                {t("title")}
              </h3>
            </AnimationFadeIn>
            <AnimationFadeIn
              delay={0.15}
              duration={1}
              direction="up"
              triggerOnExit
            >
              <h3 className="w-full text-gray-700 dark:text-gray-100 text-3xl md:text-4xl font-bold">
                {t("subtitle")}
              </h3>
            </AnimationFadeIn>
            <div className="relative my-4">
              <div className="w-[150px] h-1 absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="min-h-[400px]">
            {isLoading ? (
              <div className="flex justify-center items-center h-[400px]">
                <div className="w-10 h-10 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {currentItems.map((item, index) => (
                  <div key={index} onClick={() => openModal(index)}>
                    <div className="shadow-md overflow-hidden relative group cursor-pointer">
                      <Image
                        loader={LoaderImage}
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
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-10 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`w-10 h-10 text-sm rounded-full border ${
                  currentPage === index + 1
                    ? "bg-sky-500 text-white"
                    : "bg-white text-gray-700 border-gray-300"
                } hover:bg-sky-500 hover:text-white transition`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
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

export default GalleryContent;
