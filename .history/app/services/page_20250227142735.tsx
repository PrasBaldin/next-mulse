import Link from "next/link";
import ServicesContent from "./servicesContent";
import RecentWork from "../gallery/recentWork";
import Typewriter from "@/components/animationTypewriter";

import IconStar from "@/app/_assets/icon/iconStar";
import IconTeam from "@/app/_assets/icon/iconTeam";
import IconThumbUp from "@/app/_assets/icon/iconThumbUp";
import AnimationFadeIn from "@/components/animationFadeIn";

const ServicesPage = () => {
  return (
    <>
      <section className="mt-[72px] lg:mt-[112px]">
        <div className="banner">
          <div className="banner-mask"></div>
          <div className="container z-[1] relative">
            <div className="banner-content">
              <h4 className="text-3xl font-bold text-gray-800 dark:text-gray-100 transition duration-500 ease-in-out transform translate-x-[-18px]">
                <span className="text-transparent select-none">.</span>
                <Typewriter text="    Layanan" speed={50} />
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
                  <Link href="/services" className="text-sky-500">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="w-full text-center mb-20">
            <AnimationFadeIn
              delay={0.15}
              duration={1}
              direction="up"
              triggerOnExit
            >
              <h4 className="mb-3 text-sky-500 font-semibold tracking-[.25em] uppercase">
                Why Choose Us
              </h4>
            </AnimationFadeIn>
            <AnimationFadeIn
              delay={0.15}
              duration={1}
              direction="up"
              triggerOnExit
            >
              <h3 className="text-3xl md:text-4xl text-gray-700 font-bold">
                Yang akan Anda dapatkan
              </h3>
            </AnimationFadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <AnimationFadeIn
              className="flex flex-col justify-center items-center text-center"
              delay={0.2}
              duration={1}
              direction="up"
              triggerOnExit
            >
              <IconStar />
              <h4 className="text-xl font-semibold text-sky-800 mt-4 mb-2">
                Kualitas Terbaik
              </h4>
              <p>
                Dengan melalui serangkaian proses kontrol kualitas yang ketat,
                kami memastikan setiap detail diperhatikan demi kepuasan Anda.
              </p>
            </AnimationFadeIn>
            <AnimationFadeIn
              className="flex flex-col justify-center items-center text-center"
              delay={0.3}
              duration={1}
              direction="up"
              triggerOnExit
            >
              <IconTeam />
              <h4 className="text-xl font-semibold text-sky-800 mt-4 mb-2">
                Team Berkualifikasi
              </h4>
              <p>
                Dengan kombinasi pengetahuan yang mendalam dan dedikasi tinggi,
                kami siap memberikan solusi terbaik untuk kebutuhan Anda.
              </p>
            </AnimationFadeIn>
            <AnimationFadeIn
              className="flex flex-col justify-center items-center text-center"
              delay={0.4}
              duration={1}
              direction="up"
              triggerOnExit
            >
              <IconThumbUp />
              <h4 className="text-xl font-semibold text-sky-800 mt-4 mb-2">
                Bergaransi
              </h4>
              <p>
                Jika Anda merasa tidak puas, kami siap memberikan solusi atau
                pengembalian dana sesuai ketentuan yang berlaku.
              </p>
            </AnimationFadeIn>
          </div>
        </div>
      </section>
      <ServicesContent />
      <RecentWork />
    </>
  );
};

export default ServicesPage;
