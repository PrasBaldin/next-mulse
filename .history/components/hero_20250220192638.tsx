"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
    const parallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            if (parallaxRef.current) {
                const translateY = scrollPos * 0.5;
                const scale = 1 + scrollPos * 0.00005;

                parallaxRef.current.style.transform = `translateY(${translateY}px) scale(${scale})`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="hero h-screen overflow-hidden">
            <div className="flex justify-center items-center">
                <div ref={parallaxRef} className="relative h-[120vh] w-full bg-cover bg-center bg-fixed translate-y-[-0.2px]" style={{ backgroundImage: `url('/img/parallax.jpg')` }} >
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-700 dark:bg-black bg-opacity-40 dark:bg-opacity-40 text-white text-3xl font-bold"></div>
                </div>
            </div>
            <div className="container">
                <div className="w-full lg:w-[65vw] absolute top-[35vh] max-lg:left-0 max-lg:right-0 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-100 transition duration-300 ease-in-out">
                    <div className="p-5">
                        <h3 className="text-xl">PT. Mulse Citra Nusa</h3>
                        <h1 className="text-4xl font-bold">Jasa Kontruksi dan Pengadaan Barang</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
