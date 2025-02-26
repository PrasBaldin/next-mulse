import React from "react";
import Image from "next/image";

interface ModalProps {
  currentIndex: number | null;
  galleryItems: { img: string; title: string }[];
  closeModal: () => void;
  showPrev: () => void;
  showNext: () => void;
}

const ModalLightbox: React.FC<ModalProps> = ({
  currentIndex,
  galleryItems,
  closeModal,
  showPrev,
  showNext,
}) => {
  if (currentIndex === null) return null;

  return (
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
  );
};

export default ModalLightbox;
