import Image from "next/image";
import React from "react";

const ClientPartner = () => {
  const Clients = [
    {
      img: "/img/client-1.png",
      category: "Electrical Engineering",
      title: "Pekerjaan Pemasangan Lampu Sorot",
    },
    {
      img: "/img/client-2.png",
      category: "Renovasi & Perbaikan",
      title: "Pekerjaan Renovasi Garasi Rumah",
    },
    {
      img: "/img/client-3.png",
      category: "Renovasi & Perbaikan",
      title: "Pekerjaan Pemeliharaan Marmer",
    },
    {
      img: "/img/client-4.png",
      category: "Renovasi & Perbaikan",
      title: "Pekerjaan Renovasi Interior Kantor",
    },
    {
      img: "/img/client-5.png",
      category: "Konstruksi",
      title: "Pekerjaan Pembuatan Parkir Sepeda",
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
          <div className="py-8">
            <div className="flex">
              <Image src={""} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientPartner;
