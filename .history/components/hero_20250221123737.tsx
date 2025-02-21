"use client";
import { useEffect, useRef, useState } from "react";
import "./hero.css";
import HeroBenefitSection from "./heroBenefitSection";

// Komponen Typewriter untuk efek pengetikan
function Typewriter({ text, speed = 10, className = "" }) {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let index = 0;
        setDisplayText("");
        const intervalId = setInterval(() => {
            setDisplayText((prev) => prev + text.charAt(index));
            index++;
            if (index >= text.length) clearInterval(intervalId);
        }, speed);
        return () => clearInterval(intervalId);
    }, [text, speed]);

    return <span className={className}>{displayText}</span>;
}

export default function Hero() {
    const parallaxRef = useRef<HTMLDivElement>(null);
    const images = ["/img/parallax-1.webp", "/img/parallax-2.webp"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Data konten slide sesuai gambar
    const slideContent = [
        {
            title: "   Jasa Kontruksi",
            description:
                "   Solusi konstruksi berkualitas yang memenuhi standar industri terbaik, didukung oleh tim profesional berpengalaman yang menangani proyek-proyek besar.",
        },
        {
            title: "   Pengadaan Barang",
            description:
                "   Layanan pengadaan barang yang efisien dan terpercaya, memastikan kualitas produk serta memenuhi kebutuhan bisnis Anda dengan harga yang kompetitif.",
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

    // Fungsi untuk memulai interval auto slide
    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 7500);
    };

    // Mulai interval auto slide saat komponen di-mount
    useEffect(() => {
        startInterval();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [images.length]);

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
                    <div className="p-3 w-full md:w-[60vw] lg:w-[50vw] xl:w-[45vw] absolute top-[35vh] max-lg:left-0 max-lg:right-0 text-gray-100 transition duration-300 ease-in-out">
                        <div className="py-5">
                            <h3 className="text-xl lg:text-2xl font-semibold pb-2">PT. Mulse Citra Nusa</h3>
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold pb-5">
                                <Typewriter text={slideContent[currentIndex].title} speed={50} />
                            </h1>
                            <p className="md:text-xl font-medium">
                                <Typewriter text={slideContent[currentIndex].description} speed={30} />
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
                    <div className="relative">
                        <div className="absolute bottom-[20vh] right-0 md:bottom-[50vh] md:right-0 w-[100vw] flex md:flex-col space-x-2 md:space-x-0">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleNavigation(index)}
                                    className={`w-3 h-3 rounded-full transition duration-500 ease-in-out my-1 ${index === currentIndex ? "bg-sky-500" : "bg-gray-300"
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
