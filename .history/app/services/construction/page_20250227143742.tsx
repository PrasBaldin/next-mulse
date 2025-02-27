import Link from "next/link";
import Image from "next/image";
import IconTools from "../../_assets/servicesIcon/iconConstruction";
import IconRenovation from "../../_assets/servicesIcon/iconRenovation";
import IconDesign from "../../_assets/servicesIcon/iconDesign";
import IconConsultation from "../../_assets/servicesIcon/iconConsultation";
import IconWaterproofing from "../../_assets/servicesIcon/iconWaterproofing";
import IconElectrical from "../../_assets/servicesIcon/iconElectrical";
import Typewriter from "@/components/animationTypewriter";
import AnimationFadeIn from "@/components/animationFadeIn";

const ConstructionPage = () => {
  const services = [
    {
      img: "/img/service-construction.jpg",
      icon: IconTools,
      title: "Konstruksi Bangunan",
      desc: "Menyediakan solusi konstruksi bangunan yang inovatif dan berkualitas tinggi untuk berbagai proyek.",
    },
    {
      img: "/img/gallery-1-1.jpg",
      icon: IconRenovation,
      title: "Renovasi & Perbaikan",
      desc: "Layanan renovasi dan perbaikan bangunan dengan pendekatan profesional dan efisien untuk meningkatkan nilai properti Anda.",
    },
    {
      img: "/img/gallery-13-1.jpg",
      icon: IconDesign,
      title: "Desain Arsitektur",
      desc: "Menyediakan layanan desain arsitektur kreatif dan inovatif untuk menciptakan bangunan yang unik dan fungsional.",
    },
    {
      img: "/img/consultation.jpg",
      icon: IconConsultation,
      title: "Konsultasi Proyek",
      desc: "Menawarkan konsultasi menyeluruh untuk memastikan setiap tahap proyek berjalan dengan lancar dan tepat sasaran.",
    },
    {
      img: "/img/service-waterproofing.jpg",
      icon: IconWaterproofing,
      title: "Waterproofing",
      desc: "Menyediakan solusi waterproofing yang handal dan tahan lama untuk melindungi bangunan dari kebocoran serta kerusakan akibat kelembapan.",
    },
    {
      img: "/img/gallery-9-1.jpg",
      icon: IconElectrical,
      title: "Electrical Engineering",
      desc: "Menyediakan layanan perancangan dan instalasi sistem kelistrikan yang aman, efisien, dan sesuai standar untuk mendukung infrastruktur modern.",
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
                <Typewriter text="    Jasa Konstruksi" speed={50} />
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
                    Construction
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
                Jasa Konstruksi
              </h4>
            </AnimationFadeIn>
            <AnimationFadeIn
              delay={0.15}
              duration={1}
              direction="up"
              triggerOnExit
            >
              <h3 className="py-2 my-2 mx-auto w-full md:w-3/4 text-gray-700 dark:text-gray-100 transition duration-500 ease-in-out text-xl">
                Kami menghadirkan solusi konstruksi yang menyeluruh dan inovatif
                untuk memenuhi standar kualitas tertinggi dan disesuaikan dengan
                kebutuhan spesifik klien
              </h3>
            </AnimationFadeIn>
          </div>
          <div className="service-content grid grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((service, index) => (
              <div key={index}>
                <AnimationFadeIn
                  className="card bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition duration-500 ease-in-out rounded"
                  delay={(index + 1) * 0.1}
                  duration={1}
                  direction="down"
                  triggerOnExit
                >
                  <div className="rounded">
                    <Image
                      src={service.img}
                      alt="img"
                      width={1000}
                      height={100}
                      className="rounded-t"
                    />
                  </div>
                  <div className="p-8">
                    <div className="text-xl font-semibold pb-3 flex gap-2 items-center">
                      <service.icon />
                      <h4>{service.title}</h4>
                    </div>
                    <div className="pb-3">
                      <p>{service.desc}</p>
                    </div>
                    <a
                      href="https://api.whatsapp.com/send?phone=6285260062002&text=Hallo%20Mulse!%20saya%20membutuhkan%20bantuan%20terkait%20layanan%20di%20mulse.id"
                      target="_blank"
                    >
                      <button className="btn btn-primary">Hubungi Kami</button>
                    </a>
                  </div>
                </AnimationFadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ConstructionPage;
