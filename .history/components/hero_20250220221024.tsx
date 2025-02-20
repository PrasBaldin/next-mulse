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
            <div className="hero-wrap min-h-[40rem]">
                <div className="flex justify-center items-center">
                    <div ref={parallaxRef} className="relative h-[110vh] min-h-[40rem] w-full bg-cover bg-center bg-fixed translate-y-[-0.2px]" style={{ backgroundImage: `url('/img/parallax.jpg')` }} >
                        <div className="hero-mask" />
                    </div>
                </div>
                <div className="container">
                    <div className="p-3 w-full lg:w-[55vw] absolute top-[40vh] max-lg:left-0 max-lg:right-0 text-gray-100 transition duration-300 ease-in-out">
                        <div className=" py-5">
                            <h3 className="text-xl font-semibold">PT. Mulse Citra Nusa</h3>
                            <h1 className="text-7xl font-bold py-3">Jasa Kontruksi dan Pengadaan Barang</h1>
                            <p className="text-md font-medium">Solusi konstruksi berkualitas yang memenuhi standar industri terbaik dan didukung oleh tim profesional berpengalaman yang menangani setiap proyek dengan ketelitian serta keahlian. Dengan komitmen terhadap kualitas, kami menciptakan bangunan yang kokoh, fungsional, dan estetis untuk kepuasan maksimal.</p>
                            <div className="pt-3">
                                <button className="btn bg-sky-600 hover:bg-sky-700 text-gray-100 font-medium">E-Katalog</button>
                                <button className="btn ml-3 bg-gray-100 hover:bg-gray-400 text-gray-700 font-medium">More About Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-full md:max-w-[85rem] mx-auto md:absolute top-[100vh]">
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-7">
                    <div className="bg-sky-400 dark:bg-sky-800 transition duration-300 ease-in-out p-6 hidden xl:block xl:col-span-1" />
                    <div className="bg-sky-400 dark:bg-sky-800 transition duration-300 ease-in-out p-6 xl:col-span-2">
                        <div className="flex items-center">
                            <div className="text-center mb-4 px-[2rem]">
                                <span>icon bintang</span>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200 transition duration-300 ease-in-out">100% Quality</h2>
                                <p className="text-center text-gray-600 dark:text-gray-100 mt-2 transition duration-300 ease-in-out">Dengan melalui serangkaian proses kontrol kualitas yang ketat, kami memastikan setiap detail diperhatikan demi kepuasan Anda.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-sky-300 dark:bg-sky-700 transition duration-500 ease-in-out p-6 xl:col-span-2">
                        <div className="flex items-center">
                            <div className="text-center mb-4 px-[2rem]">
                                <span>icon team</span>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200 transition duration-500 ease-in-out">Qualified Team</h2>
                                <p className="text-center text-gray-700 dark:text-gray-100 mt-2 transition duration-500 ease-in-out">Dengan kombinasi pengetahuan yang mendalam dan dedikasi tinggi, kami siap memberikan solusi terbaik untuk kebutuhan Anda.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-sky-200 dark:bg-sky-600 transition duration-700 ease-in-out p-6 xl:col-span-2">
                        <div className="flex items-center">
                            <div className="text-center mb-4 px-[2rem]">
                                <span>icon jempol</span>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200 transition duration-700 ease-in-out">Guaranteed</h2>
                                <p className="text-center text-gray-700 dark:text-gray-100 mt-2 transition duration-700 ease-in-out">Jika Anda merasa tidak puas, kami siap memberikan solusi atau pengembalian dana sesuai ketentuan yang berlaku.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
