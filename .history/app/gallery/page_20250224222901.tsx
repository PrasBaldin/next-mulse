import React from "react";
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"></div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
