"use client";

import { useEffect, useRef, useState } from "react";
import "./hero.css";

import HeroBenefitSection from "./heroBenefitSection";

export default function Hero() {
    const parallaxRef = useRef<HTMLDivElement>(null);
    // Daftar gambar untuk carousel parallax
    const images = ["../img/parallax-1.webp", "../img/parallax-1.webp"];
    const [currentIndex, setCurrentIndex] = useState(0);

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

    // Auto slide: Ganti gambar setiap 5 detik
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    // Navigasi manual: ketika tombol diklik, ganti gambar aktif
    const handleNavigation = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <>
            <div className="hero-wrap relative">
                <div className="flex justify-center items-center">
                    <div
                        ref={parallaxRef}
                        className="hero-parallax"
                        style={{ backgroundImage: `url('${images[currentIndex]}')` }}
                    >
                        <div className="hero-mask" />
                    </div>
                </div>
                <div className="container">
                    <div className="p-3 w-full lg:w-[55vw] absolute top-[35vh] max-lg:left-0 max-lg:right-0 text-gray-100 transition duration-300 ease-in-out">
                        <div className="py-5">
                            <h3 className="text-xl lg:text-2xl font-semibold">PT. Mulse Citra Nusa</h3>
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold pb-5">
                                Jasa Kontruksi dan Pengadaan Barang
                            </h1>
                            <p className="md:text-xl font-medium">
                                Solusi konstruksi berkualitas yang memenuhi standar industri terbaik dan didukung
                                oleh tim profesional berpengalaman yang menangani setiap proyek dengan ketelitian
                                serta keahlian. Dengan komitmen terhadap kualitas, kami menciptakan bangunan yang
                                kokoh, fungsional, dan estetis untuk kepuasan maksimal.
                            </p>
                            <div className="pt-5">
                                <button className="btn bg-sky-600 hover:bg-sky-700 dark:hover:bg-sky-700 text-gray-100 font-medium">
                                    E-Katalog
                                </button>
                                <button className="btn ml-3 bg-gray-100 hover:bg-gray-400 dark:hover:bg-gray-400 text-gray-700 font-medium">
                                    More About Us
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Navigasi Carousel: Tombol bulat di pojok kanan bawah */}
                    <div className="absolute top-[95vh] right-5 flex space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleNavigation(index)}
                                className={`w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-500 ${index === currentIndex ? "active bg-blue-500" : ""
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <HeroBenefitSection />
        </>
    );
}
