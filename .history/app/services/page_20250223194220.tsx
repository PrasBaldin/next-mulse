import Image from "next/image";
import "./services.css";

import IconTools from "../_assets/servicesIcon/iconConstruction";
import IconRenovation from "../_assets/servicesIcon/iconRenovation";
import IconDesign from "../_assets/servicesIcon/iconDesign";
import IconConsultation from "../_assets/servicesIcon/iconConsultation";
import IconWaterproofing from "../_assets/servicesIcon/iconWaterproofing";
import IconElectical from "../_assets/servicesIcon/iconElectical";

const ServicesPage = () => {
  return (
    <>
      <section className="w-full flex flex-col lg:flex-row">
        <div
          className="w-full lg:w-3/5 bg-cover relative"
          style={{ backgroundImage: "url(/img/services-bg.jpg)" }}
        >
          <div className="z-[1] absolute inset-0 bg-sky-100 bg-opacity-50 dark:bg-gray-700 dark:bg-opacity-90 transition duration-500 ease-in-out" />
          <div className="z-[2] relative sm:max-w-[640px] md:max-w-[768px] lg:max-w-[634.400px] xl:max-w-[788px] 2xl:max-w-[941.600px] m-auto lg:mr-0 px-4 lg:pr-10">
            <div className="py-20">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 z-[2] ">
                {/* Card Layanan 1 */}
                <div className="service-card">
                  <div className="mb-4 flex justify-center text-sky-500">
                    <IconTools />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                    Konstruksi Bangunan
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    Menyediakan solusi konstruksi bangunan yang inovatif dan
                    berkualitas tinggi untuk berbagai proyek.
                  </p>
                </div>
                {/* Card Layanan 2 */}
                <div className="service-card">
                  <div className="mb-4 flex justify-center text-sky-500">
                    <IconRenovation />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                    Renovasi &amp; Perbaikan
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    Layanan renovasi dan perbaikan bangunan dengan pendekatan
                    profesional dan efisien untuk meningkatkan nilai properti
                    Anda.
                  </p>
                </div>
                {/* Card Layanan 3 */}
                <div className="service-card">
                  <div className="mb-4 flex justify-center text-sky-500">
                    <IconDesign />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                    Desain Arsitektur
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    Menyediakan layanan desain arsitektur kreatif dan inovatif
                    untuk menciptakan bangunan yang unik dan fungsional.
                  </p>
                </div>
                {/* Card Layanan 4 */}
                <div className="service-card">
                  <div className="mb-4 flex justify-center text-sky-500">
                    <IconConsultation />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                    Konsultasi Proyek
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    Menawarkan konsultasi menyeluruh untuk memastikan setiap
                    tahap proyek berjalan dengan lancar dan tepat sasaran.
                  </p>
                </div>
                {/* Card Layanan 5 */}
                <div className="service-card">
                  <div className="mb-4 flex justify-center text-sky-500">
                    <IconWaterproofing />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                    Waterproofing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    Menyediakan solusi waterproofing yang handal dan tahan lama
                    untuk melindungi bangunan dari kebocoran serta kerusakan
                    akibat kelembapan.
                  </p>
                </div>
                {/* Card Layanan 6 */}
                <div className="service-card">
                  <div className="mb-4 flex justify-center text-sky-500">
                    <IconElectical />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                    Electrical Engineering
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    Menyediakan layanan perancangan dan instalasi sistem
                    kelistrikan yang aman, efisien, dan sesuai standar untuk
                    mendukung infrastruktur modern.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5 bg-gray-800 text-gray-100">
          <div className="sm:max-w-[640px] md:max-w-[768px] lg:max-w-[399.600px] xl:max-w-[502px] 2xl:max-w-[604.400px] m-auto lg:ml-0 px-4 lg:pl-10">
            <div className="py-20">
              <h3 className="mb-4 text-4xl font-bold">Our Services</h3>
              <div className="w-[150px] h-1 rounded mb-4 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
              <p className="py-2 my-2">
                Kami menghadirkan solusi konstruksi yang menyeluruh dan
                inovatif, mulai dari pembangunan bangunan baru hingga renovasi
                yang interior dan eksterior. Setiap layanan kami dirancang untuk
                memenuhi standar kualitas tertinggi dan disesuaikan dengan
                kebutuhan spesifik klien.
              </p>
              <p className="py-2 my-2">
                Layanan kami mencakup desain arsitektur kreatif, konsultasi
                proyek mendalam, serta penerapan teknologi waterproofing dan
                electrical engineering terkini. Dengan pendekatan terintegrasi,
                kami memastikan efisiensi, keamanan, dan keandalan dalam setiap
                tahap pengerjaan.
              </p>
              <p className="py-2 my-2">
                Komitmen kami adalah memberikan hasil yang optimal dengan
                inovasi, keandalan, dan kepuasan pelanggan sebagai prioritas
                utama. Percayakan proyek Anda kepada kami dan wujudkan visi
                konstruksi yang berkualitas dan berkelas.
              </p>
              <div className="py-2 my-2">
                <a
                  href="https://katalog.inaproc.id/mulse-citra-nusa"
                  target="_blank"
                  className="btn text-sky-500 hover:text-white border-2 border-sky-500 hover:bg-sky-500"
                >
                  Lihat Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-100 py-20">
        <div className="container">
          <div className="w-full flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/4 space-y-4">
              <h3 className="text-4xl font-bold">Pengadaan Barang</h3>
              <p className="pr-5 text-lg text-gray-600 dark:text-gray-300">
                Kami menyediakan berbagai kebutuhan barang untuk mendukung
                operasional bisnis dan organisasi Anda, mulai dari alat kantor,
                perlengkapan medis, hingga elektronik dan souvenir.
              </p>
              <p className="pr-5 text-lg text-gray-600 dark:text-gray-300">
                Temukan produk berkualitas dengan layanan terbaik dari kami.
              </p>
              <button className="btn text-sky-500 hover:text-white border-2 border-sky-500 hover:bg-sky-500">
                Lihat Selengkapnya
              </button>
            </div>
            <div className="w-full lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[
                  {
                    title: "Alat Perlengkapan Kantor",
                    img: "/img/proc-office.jpg",
                  },
                  {
                    title: "Alat Kesehatan",
                    img: "/img/proc-medical.jpg",
                  },
                  {
                    title: "Alat Kebersihan",
                    img: "/img/proc-cleaning.jpg",
                  },
                  {
                    title: "Alat Elektronik",
                    img: "/img/proc-electronic.jpg",
                  },
                  {
                    title: "Seragam dan Pakaian",
                    img: "/img/proc-apparel.jpg",
                  },
                  {
                    title: "Souvenir",
                    img: "/img/proc-souvenir.jpg",
                  },
                ].map((item, index) => (
                  <div key={index} className="proc-card">
                    <Image
                      src={item.img}
                      width={900}
                      height={900}
                      alt="img"
                      className="bg-cover z-[1]"
                    />
                    <div className="proc-card-overlay">
                      <div className="bg-gray-100 dark:bg-gray-700  mx-10 py-10">
                        <h4 className="font-semibold text-lg mt-3">
                          {item.title}
                        </h4>
                        <a
                          href="https://katalog.inaproc.id/mulse-citra-nusa"
                          target="_blank"
                          className="mt-4 inline-block bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition duration-300"
                        >
                          Lihat Selengkapnya
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
