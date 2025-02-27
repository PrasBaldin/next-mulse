import Link from "next/link";
import Image from "next/image";
import "../services.css";
import Typewriter from "@/components/animationTypewriter";
import AnimationFadeIn from "@/components/animationFadeIn";

const ProcurementPage = () => {
  const procurement = [
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
  ];

  return (
    <>
      <section className="mt-[72px] lg:mt-[112px]">
        <div className="banner">
          <div className="banner-mask"></div>
          <div className="container z-[1] relative">
            <div className="banner-content">
              <h4 className="text-3xl font-bold text-gray-800 dark:text-gray-100 transition duration-500 ease-in-out transform translate-x-[-18px]">
                <span className="text-transparent select-none">.</span>
                <Typewriter text="    Pengadaan Barang" speed={50} />
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
                  <Link
                    href="/"
                    className="text-gray-900 dark:text-gray-100 transition duration-500 ease-in-out"
                  >
                    Services
                  </Link>
                </li>
                <li className="text-gray-900 dark:text-gray-100 transition duration-500 ease-in-out">
                  /
                </li>
                <li>
                  <Link href="/gallery" className="text-sky-500">
                    Procurement
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="mb-10 text-center">
            <AnimationFadeIn
              delay={0.15}
              duration={1}
              direction="down"
              triggerOnExit
            >
              <h4 className="mb-3 text-sky-500 font-semibold tracking-[.25em] uppercase">
                Pengadaan Barang
              </h4>
            </AnimationFadeIn>
            <h3 className="py-2 my-2 mx-auto w-3/4 text-gray-700 dark:text-gray-100 transition duration-500 ease-in-out text-xl">
              Kami menyediakan berbagai kebutuhan barang untuk mendukung
              operasional bisnis dan organisasi Anda
            </h3>
          </div>
          <div className="service-content grid grid-cols-2 lg:grid-cols-3 gap-3">
            {procurement.map((procurement, index) => (
              <div key={index} className="proc-card group">
                <Image
                  src={procurement.img}
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
                        {procurement.title}
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
      </section>
    </>
  );
};

export default ProcurementPage;
