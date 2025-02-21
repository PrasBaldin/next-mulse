"use client";

import { useEffect, useRef, useState } from "react";
import "./hero.css";
import HeroBenefitSection from "./heroBenefitSection";

export default function Hero() {
    const parallaxRef = useRef<HTMLDivElement>(null);
    const images = ["/img/parallax-1.webp", "/img/parallax-2.webp"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animate, setAnimate] = useState(false);

    // Data konten slide sesuai gambar
    const slideContent = [
        {
            title: "Jasa Kontruksi",
            description:
                "Solusi konstruksi berkualitas yang memenuhi standar industri terbaik, didukung oleh tim profesional berpengalaman yang menangani proyek-proyek besar.",
        },
        {
            title: "Pengadaan Barang",
            description:
                "Layanan pengadaan barang yang efisien dan terpercaya, memastikan kualitas produk serta memenuhi kebutuhan bisnis Anda dengan harga yang kompetitif.",
        },
    ];

    // Preload gambar agar tidak ada delay saat pergantian
    useEffect(() => {
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, [images]);

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

    // Trigger animasi setiap kali currentIndex berubah
    useEffect(() => {
        setAnimate(true);
        const timer = setTimeout(() => {
            setAnimate(false);
        }, 1000); // durasi animasi (1 detik)
        return () => clearTimeout(timer);
    }, [currentIndex]);

    // Navigasi manual dengan tombol bulat
    const handleNavigation = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <>
            <div className="hero-wrap relative">
                <div className="flex justify-center items-center">
                    <div ref={parallaxRef} className="hero-parallax relative overflow-hidden">
                        {images.map((imgSrc, index) => (
                            <div
                                key={index}
                                className="parallax-image absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
                                style={{
                                    backgroundImage: `url('${imgSrc}')`,
                                    opacity: index === currentIndex ? 1 : 0,
                                }}
                            />
                        ))}
                        <div className="hero-mask absolute top-0 left-0 w-full h-full" />
                    </div>
                </div>
                <div className="container">
                    <div className="p-3 w-full lg:w-[55vw] absolute top-[35vh] max-lg:left-0 max-lg:right-0 text-gray-100 transition duration-300 ease-in-out">
                        <div className="py-5">
                            <h3 className="text-xl lg:text-2xl font-semibold pb-2">PT. Mulse Citra Nusa</h3>
                            <h1
                                className={`text-4xl lg:text-5xl xl:text-6xl font-bold pb-5 transition-opacity duration-300 ${animate ? "opacity-50" : "opacity-100"
                                    }`}
                            >
                                {slideContent[currentIndex].title}
                            </h1>
                            <p
                                className={`md:text-xl font-medium transition-opacity duration-300 ${animate ? "opacity-50" : "opacity-100"
                                    }`}
                            >
                                {slideContent[currentIndex].description}
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
                    <div className="absolute top-[95vh] right-5 flex space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleNavigation(index)}
                                className={`w-3 h-3 rounded-full transition duration-500 ease-in-out ${index === currentIndex ? "bg-sky-500" : "bg-gray-300"
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
