"use client";

import { useEffect, useRef } from "react";
import "./hero.css";

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
        <>
            <div className="hero-wrap">
                <div className="flex justify-center items-center">
                    <div ref={parallaxRef} className="relative h-[150vh] w-full bg-cover bg-center bg-fixed translate-y-[-0.2px]" style={{ backgroundImage: `url('/img/parallax.jpg')` }} >
                        <div className="hero-mask" />
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
            <div className="max-w-full md:max-w-7xl mx-auto md:absolute top-[100vh]">
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
                    <div className="bg-sky-400 dark:bg-sky-800 transition duration-300 ease-in-out p-6 hidden xl:block" />
                    <div className="bg-sky-400 dark:bg-sky-800 transition duration-300 ease-in-out p-6">
                        <div className="text-center mb-4">
                            <svg className="w-12 h-12 mx-auto text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <span>test</span>
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-center text-gray-800">100% Quality</h2>
                        <p className="text-center text-gray-600 mt-2">Dengan melalui serangkaian proses kontrol kualitas yang ketat, kami memastikan setiap detail diperhatikan demi kepuasan Anda.</p>
                    </div>

                    <div className="bg-sky-300 dark:bg-sky-700 transition duration-500 ease-in-out p-6">
                        <div className="text-center mb-4">
                            <svg className="w-12 h-12 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <span>test</span>
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-center text-gray-800">Qualified Team</h2>
                        <p className="text-center text-gray-600 mt-2">Dengan kombinasi pengetahuan yang mendalam dan dedikasi tinggi, kami siap memberikan solusi terbaik untuk kebutuhan Anda.</p>
                    </div>

                    <div className="bg-sky-200 dark:bg-sky-600 transition duration-700 ease-in-out p-6">
                        <div className="text-center mb-4">
                            <svg className="w-12 h-12 mx-auto text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <span>test</span>
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-center text-gray-800">Guaranteed</h2>
                        <p className="text-center text-gray-600 mt-2">Personalized services tailored for you.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
