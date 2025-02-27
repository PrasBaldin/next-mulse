import React from "react";
import Image from "next/image";

const AboutContent = () => {
  return (
    <>
      {/* Konten */}
      <div className="container relative z-[2] pb-[3rem]">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 m-4 max-h-[400px] overflow-hidden animated animated-duration-200">
            <Image
              width={900}
              height={900}
              src="/img/about-profile.webp"
              alt="About image"
              className="rounded shadow w-full"
            />
          </div>
          {/* Kolom deskripsi */}
          <div className="w-full lg:w-1/2 p-4 text-gray-700 dark:text-gray-100 transition duration-500 ease-in-out animated">
            <h4 className="mb-3 text-sky-500 font-semibold tracking-[.25em] uppercase animated">
              Who We Are
            </h4>
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 lg:pr-8 animated">
              Solusi Konstruksi &amp; Pengadaan Barang
            </h3>
            <p className="mb-4 animated">
              Kami adalah perusahaan yang mengintegrasikan layanan konstruksi
              terdepan dengan solusi pengadaan barang berkualitas tinggi untuk
              setiap proyek Anda.
            </p>
            <p className="mb-4 animated">
              Didirikan sejak tahun 2017, perusahaan kami telah tumbuh secara
              konsisten dengan semangat inovasi dan dedikasi tinggi terhadap
              kualitas. Kami terus mengembangkan layanan serta solusi terbaik
              guna memenuhi kebutuhan pasar yang dinamis dalam industri
              konstruksi dan pengadaan barang.
            </p>
            <p className="mb-4 animated">
              Dengan dukungan tim profesional dan komitmen untuk memberikan
              hasil optimal, kami optimis bahwa perjalanan pertumbuhan kami akan
              terus berlanjut, membuka peluang baru dan menetapkan standar
              keunggulan di masa depan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
