"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import "./hero.css";
import HeroBenefitSection from "./heroBenefitSection";
import Typewriter from "./animation/animationTypewriter";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Data konten slide sesuai gambar
  const slideContents = useMemo(
    () => [
      {
        image: "/img/parallax-construction.webp",
        title: `  ${t("slideContent.construction.title")}`,
        description: `  ${t("slideContent.construction.desc")}`,
      },
      {
        image: "/img/parallax-procurement.webp",
        title: `  ${t("slideContent.procurement.title")}`,
        description: `  ${t("slideContent.procurement.desc")}`,
      },
    ],
    [t]
  );

  // Preload gambar agar tidak ada delay saat pergantian
  useEffect(() => {
    slideContents.forEach((slideContent) => {
      const img = new Image();
      img.src = slideContent.image;
    });
  }, [slideContents]);

  // Efek parallax saat scroll
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPos = window.scrollY;
          if (parallaxRef.current) {
            const translateY = scrollPos * 0.5;
            const scale = 1 + scrollPos * 0.00005;
            parallaxRef.current.style.transform = `translateY(${translateY}px) scale(${scale})`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi untuk memulai interval auto slide
  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideContents.length);
    }, 7500);
  };

  // Mulai interval auto slide saat komponen di-mount
  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [slideContents.length]);

  // Navigasi manual: ketika tombol diklik, ganti gambar aktif dan reset interval
  const handleNavigation = (index: number) => {
    setCurrentIndex(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startInterval();
  };

  return (
    <>
      <div className="hero-wrap relative">
        <div className="flex justify-center items-center">
          <div
            ref={parallaxRef}
            className="hero-parallax relative overflow-hidden"
          >
            {slideContents.map((slideContent, index) => (
              <div
                key={index}
                className="parallax-image absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
                style={{
                  backgroundImage: `url('${slideContent.image}')`,
                  opacity: index === currentIndex ? 1 : 0,
                }}
              />
            ))}
            <div className="hero-mask absolute top-0 left-0 w-full h-full" />
          </div>
        </div>
        <div className="container">
          <div className="p-3 w-full md:w-[60vw] lg:w-[50vw] xl:w-[45vw] absolute top-[25vh] md:top-[30vh] lg:top-[35vh] max-lg:left-0 max-lg:right-0 text-gray-100 transition duration-300 ease-in-out">
            <div className="py-5 pl-2 md:pl-5 lg:pl-0">
              <h3 className="text-xl lg:text-2xl font-semibold pb-2 tracking-[.05em]">
                PT. Mulse Citra Nusa
              </h3>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold pb-5">
                <Typewriter
                  key={currentIndex}
                  text={slideContents[currentIndex].title}
                  speed={50}
                />
              </h1>
              <p className="md:text-xl font-medium">
                <Typewriter
                  key={currentIndex + "-desc"} // Key unik untuk deskripsi
                  text={slideContents[currentIndex].description}
                  speed={1}
                  delay={50}
                />
              </p>
              <div className="pt-5">
                <a href="https://katalog.mulse.id" target="_blank">
                  <button className="btn btn-primary font-medium">
                    {t("catalog")}
                  </button>
                </a>
                <Link href="/gallery">
                  <button className="btn btn-secondary ml-3">
                    {t("gallery")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute bottom-[20vh] right-0 md:bottom-[50vh] md:right-0 flex md:flex-col space-x-2 md:space-x-0">
              {slideContents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(index)}
                  className={`w-3 h-3 rounded-full transition duration-500 ease-in-out my-1 ${
                    index === currentIndex ? "bg-sky-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <HeroBenefitSection />
    </>
  );
}
