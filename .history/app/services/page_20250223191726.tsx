import Image from "next/image";

import IconTools from "../_assets/servicesIcon/iconConstruction";
import IconRenovation from "../_assets/servicesIcon/iconRenovation";
import IconDesign from "../_assets/servicesIcon/iconDesign";
import IconConsultation from "../_assets/servicesIcon/iconConsultation";
import IconWaterproofing from "../_assets/servicesIcon/iconWaterproofing";

const ServicesPage = () => {
  return (
    <>
      <section className="w-full flex flex-col lg:flex-row">
        <div
          className="w-full lg:w-3/5 bg-cover relative"
          style={{ backgroundImage: "url(/img/services-bg.jpg)" }}
        >
          <div className="z-[1] absolute inset-0 bg-sky-100 bg-opacity-50 dark:bg-gray-700 dark:bg-opacity-90 transition duration-500 ease-in-out" />
          <div className="z-[2] relative sm:max-w-[640px] md:max-w-[768px] lg:max-w-[634.400px] xl:max-w-[788px] 2xl:max-w-[941.600px] m-auto mr-0 px-4 lg:pr-10">
            <div className="py-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-[2] ">
                {/* Card Layanan 1 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-sky-400 hover:shadow-xl transition duration-300">
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
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-sky-400 hover:shadow-2xl transition duration-300">
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
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-sky-400 hover:shadow-2xl transition duration-300">
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
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-sky-400 hover:shadow-2xl transition duration-300">
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
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-sky-400 hover:shadow-2xl transition duration-300">
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
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-sky-400 hover:shadow-2xl transition duration-300">
                  <div className="mb-4 flex justify-center text-sky-500">
                    <svg
                      version="1.1"
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 56 56"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 25.0468 42.3437 C 24.1562 43.4687 22.7030 42.8359 22.9609 41.4766 L 24.7421 31.7266 L 18.4140 31.7266 C 17.1249 31.7266 16.6796 30.6953 17.6874 29.4531 L 30.1562 13.5860 C 31.0468 12.4844 32.4999 13.1172 32.2655 14.4766 L 30.4609 24.2266 L 36.8124 24.2266 C 38.0780 24.2266 38.5234 25.2344 37.5390 26.4766 Z" />
                    </svg>
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
          <div className="sm:max-w-[640px] md:max-w-[768px] lg:max-w-[399.600px] xl:max-w-[502px] 2xl:max-w-[604.400px] m-auto ml-0 px-4 lg:pl-10">
            <div className="py-20">
              <h3 className="mb-4 text-4xl font-bold">Our Services</h3>
              <div className="w-[150px] h-1 rounded mb-4 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
              <p className="py-2 my-2">
                Kami menghadirkan solusi konstruksi yang menyeluruh dan
                inovatif, mulai dari pembangunan gedung baru hingga renovasi
                yang modern. Setiap layanan kami dirancang untuk memenuhi
                standar kualitas tertinggi dan disesuaikan dengan kebutuhan
                spesifik klien.
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
                <button className="btn text-sky-500 hover:text-white border-2 border-sky-500 hover:bg-sky-500">
                  Lihat Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-100 py-20">
        <div className="container">
          <div className="w-full flex flex-row gap-4">
            <div className="w-1/5">
              <h3 className="text-4xl font-bold">Pengadaan Barang</h3>
            </div>
            <div className="w-4/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                  <div
                    key={index}
                    className="rounded-lg shadow-md flex items-center text-center transition-transform transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg overflow-hidden"
                  >
                    <Image
                      src={item.img}
                      width={900}
                      height={900}
                      alt="img"
                      className="bg-cover z-[1]"
                    />
                    <div className="absolute left-0 right-0 z-[2] transition duration-500 opacity-0 hover:opacity-100">
                      <div className="bg-gray-100 dark:bg-gray-700  mx-10 py-10">
                        <h4 className="font-semibold text-lg mt-3">
                          {item.title}
                        </h4>
                        <a
                          href="/"
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
