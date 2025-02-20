"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
    const parallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            if (parallaxRef.current) {
                const translateY = scrollPos * -0.2;
                const scale = 1 + scrollPos * 0.00025;

                parallaxRef.current.style.transform = `translateY(${translateY}px) scale(${scale})`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="hero h-[110vh] overflow-hidden">
            <div ref={parallaxRef} className="relative h-[130vh] bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('/img/parallax.jpg')` }} >
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-3xl font-bold"></div>
            </div>
            <div className="lg:w-[50vw] h-auto absolute top-10 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-100 transition duration-300 ease-in-out">
                <span className="py-5">Parallax Effect</span>
            </div>
        </div>
    );
}
