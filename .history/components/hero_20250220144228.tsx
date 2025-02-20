"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
    const parallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            if (parallaxRef.current) {
                `translateY(${scrollPos * 2}px)`;
                `scale(${scrollPos * 100}px)`

                parallaxRef.current.style.transform = `translateY(${translateY}px) scale(${scale})`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="hero h-screen overflow-hidden">
            <div ref={parallaxRef} className="relative h-[120vh] bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('/img/parallax.jpg')` }} >
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-3xl font-bold">
                    Parallax Effect
                </div>
            </div>
        </div>
    );
}
