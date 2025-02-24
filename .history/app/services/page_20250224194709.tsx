import Image from "next/image";
import "./services.css";

import IconTools from "../_assets/servicesIcon/iconConstruction";
import IconRenovation from "../_assets/servicesIcon/iconRenovation";
import IconDesign from "../_assets/servicesIcon/iconDesign";
import IconConsultation from "../_assets/servicesIcon/iconConsultation";
import IconWaterproofing from "../_assets/servicesIcon/iconWaterproofing";
import IconElectrical from "../_assets/servicesIcon/iconElectrical";

const ServicesPage = () => {
  return (
    <>
      <section className="w-full flex flex-col lg:flex-row">
        <div
          className="w-full lg:w-3/5 bg-cover relative"
          style={{ backgroundImage: "url(/img/services-bg.webp)" }}
        >
          <div className="z-[1] absolute inset-0 bg-sky-100 bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-90 transition duration-500 ease-in-out" />
          <div className="z-[2] relative sm:max-w-[640px] md:max-w-[768px] lg:max-w-[634.400px] xl:max-w-[788px] 2xl:max-w-[941.600px] m-auto lg:mr-0 px-4 lg:pr-10">
            <div className="py-20">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 z-[2] ">
                {[
                  {
                    icon: IconTools,
                    title: "Konstruksi Bangunan",
                    desc: "Menyediakan solusi konstruksi bangunan yang inovatif dan berkualitas tinggi untuk berbagai proyek.",
                  },
                  {
                    icon: IconRenovation,
                    title: "Renovasi & Perbaikan",
                    desc: "Layanan renovasi dan perbaikan bangunan dengan pendekatan profesional dan efisien untuk meningkatkan nilai properti Anda.",
                  },
                  {
                    icon: IconDesign,
                    title: "Desain Arsitektur",
                    desc: "Menyediakan layanan desain arsitektur kreatif dan inovatif untuk menciptakan bangunan yang unik dan fungsional.",
                  },
                  {
                    icon: IconConsultation,
                    title: "Konsultasi Proyek",
                    desc: "Menawarkan konsultasi menyeluruh untuk memastikan setiap tahap proyek berjalan dengan lancar dan tepat sasaran.",
                  },
                  {
                    icon: IconWaterproofing,
                    title: "Waterproofing",
                    desc: "Menyediakan solusi waterproofing yang handal dan tahan lama untuk melindungi bangunan dari kebocoran serta kerusakan akibat kelembapan.",
                  },
                  {
                    icon: IconElectrical,
                    title: "Electrical Engineering",
                    desc: "Menyediakan layanan perancangan dan instalasi sistem kelistrikan yang aman, efisien, dan sesuai standar untuk mendukung infrastruktur modern.",
                  },
                ].map((item, index) => (
                  <div key={index} className="service-card">
                    <div className="mb-4 flex justify-center text-sky-500 dark:text-sky-300">
                      <item.icon />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5 bg-white dark:bg-gradient-to-bl dark:from-gray-900 dark:to-gray-800 text-gray-100">
          <div className="sm:max-w-[640px] md:max-w-[768px] lg:max-w-[399.600px] xl:max-w-[502px] 2xl:max-w-[604.400px] m-auto lg:ml-0 px-4 lg:pl-10">
            <div className="py-20">
              <h3 className="mb-4 text-4xl font-bold">Our Services</h3>
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
                >
                  <button className="btn btn-primary-border">
                    Lihat Selengkapnya
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-100 py-20 lg:py-[8rem]">
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
              <a
                href="https://katalog.inaproc.id/mulse-citra-nusa"
                target="_blank"
              >
                <button className="btn btn-primary-border my-4">
                  Lihat Selengkapnya
                </button>
              </a>
            </div>
            <div className="w-full lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[
                  {
                    title: "Alat Perlengkapan Kantor",
                    img: "/img/proc-office.webp",
                  },
                  {
                    title: "Alat Kesehatan",
                    img: "/img/proc-medical.webp",
                  },
                  {
                    title: "Alat Kebersihan",
                    img: "/img/proc-cleaning.webp",
                  },
                  {
                    title: "Alat Elektronik",
                    img: "/img/proc-electronic.webp",
                  },
                  {
                    title: "Seragam dan Pakaian",
                    img: "/img/proc-apparel.webp",
                  },
                  {
                    title: "Souvenir",
                    img: "/img/proc-souvenir.webp",
                  },
                ].map((item, index) => (
                  <div key={index} className="proc-card group">
                    <Image
                      src={item.img}
                      width={1000}
                      height={1000}
                      alt="img"
                      className="bg-cover z-[1] transform transition duration-500 scale-[1.01] group-hover:scale-[1.05]"
                    />
                    <div className="proc-card-overlay p-20 md:p-5 h-full">
                      <div className="p-5 border-2 border-sky-500 h-full relative">
                        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-700 opacity-80" />
                        <div className="relative z-[1] flex flex-col justify-center h-full">
                          <h4 className="font-semibold text-lg mt-3">
                            {item.title}
                          </h4>
                          <a
                            href="https://katalog.inaproc.id/mulse-citra-nusa"
                            target="_blank"
                          >
                            <button className="btn btn-primary mt-4 inline-block">
                              Lihat Selengkapnya
                            </button>
                          </a>
                        </div>
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
