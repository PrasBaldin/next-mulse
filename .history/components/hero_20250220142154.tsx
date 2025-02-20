"use client";

import { useEffect, useRef } from "react";
import ParallaxImg from "@/app/_assets/paralax-1.jpg";

export default function Hero() {
    const parallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            if (parallaxRef.current) {
                parallaxRef.current.style.transform = `translateY(${scrollPos * -0.2}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="hero h-screen">
            <div ref={parallaxRef} className="relative h-full bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('./paralax-1.jpg')` }} >
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-3xl font-bold">
                    Parallax Effect
                </div>
            </div>
        </div>
    );
}
