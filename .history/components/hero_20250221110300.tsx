"use client";

import { useEffect, useRef, useState } from "react";
import "./hero.css";

import IconStar from "@/app/_assets/icon/iconStar";
import IconTeam from "@/app/_assets/icon/iconTeam";
import IconThumbUp from "@/app/_assets/icon/iconThumbUp";

import Parallax1 from "@/public/img/parallax-1.webp";
import Parallax2 from "@/public/img/parallax-2.webp";

export default function Hero() {
    const parallaxRef = useRef<HTMLDivElement>(null);
    const translateThreshold = 350;

    // Daftar gambar untuk carousel
    const images = [{ Parallax1 }, { Parallax2 }];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto carousel: ganti gambar setiap 2 detik
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [images.length]);

    // Efek parallax saat scroll
    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollPos = window.scrollY;
                    const progress = Math.min(scrollPos / translateThreshold, 1);
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

    // Fungsi navigasi manual
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    // Benefit section (tidak ada perubahan di bagian ini)
    const benefitRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

    const benefitData = [
        {
            class: "bg-sky-400 dark:bg-sky-800 duration-300 z-[4]",
            title: "100% Quality",
            description:
                "Dengan melalui serangkaian proses kontrol kualitas yang ketat, kami memastikan setiap detail diperhatikan demi kepuasan Anda.",
            Icon: IconStar,
        },
        {
            class: "bg-sky-300 dark:bg-sky-700 duration-500 z-[3]",
            title: "Qualified Team",
            description:
                "Dengan kombinasi pengetahuan yang mendalam dan dedikasi tinggi, kami siap memberikan solusi terbaik untuk kebutuhan Anda.",
            Icon: IconTeam,
        },
        {
            class: "bg-sky-200 dark:bg-sky-600 duration-700 z-[2]",
            title: "Guaranteed",
            description:
                "Jika Anda merasa tidak puas, kami siap memberikan solusi atau pengembalian dana sesuai ketentuan yang berlaku.",
            Icon: IconThumbUp,
        },
    ];

    return (
        <>
            <div className="hero-wrap relative">
                <div className="flex justify-center items-center">
                    <div
                        ref={parallaxRef}
                        className="hero-parallax relative"
                        style={{ backgroundImage: `url('${images[currentIndex]}')` }}
                    >
                        <div className="hero-mask" />
                    </div>
                </div>
                <div className="container">
                    <div className="p-3 w-full lg:w-[55vw] absolute top-[35vh] max-lg:left-0 max-lg:right-0 text-gray-100 transition duration-300 ease-in-out">
                        <div className="py-5">
                            <h3 className="text-xl lg:text-2xl font-semibold">PT. Mulse Citra Nusa</h3>
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold pb-5">Jasa Kontruksi dan Pengadaan Barang</h1>
                            <p className="md:text-xl font-medium">
                                Solusi konstruksi berkualitas yang memenuhi standar industri terbaik dan didukung oleh tim profesional berpengalaman yang menangani setiap proyek dengan ketelitian serta keahlian. Dengan komitmen terhadap kualitas, kami menciptakan bangunan yang kokoh, fungsional, dan estetis untuk kepuasan maksimal.
                            </p>
                            <div className="pt-5">
                                <button className="btn bg-sky-600 hover:bg-sky-700 dark:hover:bg-sky-700 text-gray-100 font-medium">E-Katalog</button>
                                <button className="btn ml-3 bg-gray-100 hover:bg-gray-400 dark:hover:bg-gray-400 text-gray-700 font-medium">More About Us</button>
                            </div>
                        </div>
                    </div>
                    {/* Navigasi Carousel */}
                    <div className="absolute top-[90vh] left-1/2 transform -translate-x-1/2 flex space-x-4">
                        <button onClick={handlePrev} className="bg-gray-200 hover:bg-gray-400 text-gray-700 p-2 rounded">
                            Prev
                        </button>
                        <button onClick={handleNext} className="bg-gray-200 hover:bg-gray-400 text-gray-700 p-2 rounded">
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <div className="benefit-section">
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-7">
                    <div className="bg-sky-400 dark:bg-sky-800 transition duration-300 ease-in-out p-6 hidden xl:block xl:col-span-1 z-[5]" />
                    {benefitRefs.map((ref, index) => {
                        const IconComponent = benefitData[index].Icon;
                        const initialTranslate = 1000 * (index + 1);
                        return (
                            <div
                                key={index}
                                ref={ref}
                                className={`benefit-card ${benefitData[index].class}`}
                                style={{ transform: `translateX(-${initialTranslate}px)` }}
                            >
                                <div className="flex items-center">
                                    <div className="text-center mb-4 px-[2rem]">
                                        <IconComponent />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-sky-900 dark:text-gray-100 transition duration-300 ease-in-out">
                                            {benefitData[index].title}
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-100 mt-2 transition duration-300 ease-in-out">
                                            {benefitData[index].description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
