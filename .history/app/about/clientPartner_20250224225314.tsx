import React from "react";

const ClientPartner = () => {
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
  return (
    <>
      <section className="py-20">
        <div className="container text-center">
          <h4 className="mb-3 text-sky-500 font-semibold tracking-[.25em] uppercase">
            Client & Partner
          </h4>
          <h3 className="w-full text-gray-700 dark:text-gray-100 text-3xl md:text-4xl font-bold">
            Menanamkan kepercayaan antar sesama
          </h3>
        </div>
      </section>
    </>
  );
};

export default ClientPartner;
