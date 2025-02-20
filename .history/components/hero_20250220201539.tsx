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
            <div className="max-w-7xl mx-auto absolute top-[100vh]">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                    <div className="bg-sky-500 p-6 rounded-lg shadow-md hidden lg:block" />
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-center mb-4">
                            <svg className="w-12 h-12 mx-auto text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <span>test</span>
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-center text-gray-800">100% Confidential</h2>
                        <p className="text-center text-gray-600 mt-2">Your data is secure with us.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-center mb-4">
                            <svg className="w-12 h-12 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <span>test</span>
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-center text-gray-800">Qualified Team</h2>
                        <p className="text-center text-gray-600 mt-2">Professional and experienced staff.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-center mb-4">
                            <svg className="w-12 h-12 mx-auto text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <span>test</span>
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-center text-gray-800">Individual Approach</h2>
                        <p className="text-center text-gray-600 mt-2">Personalized services tailored for you.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
