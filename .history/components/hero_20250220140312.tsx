import { useEffect, useRef } from "react";
import styles from "./hero.css";

export default function Hero() {
    const parallaxRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            if (parallaxRef.current) {
                // Menggerakkan gambar sedikit ke atas saat scroll ke bawah
                parallaxRef.current.style.transform = `translateY(${scrollPos * -0.2}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={parallaxRef} className={styles.parallax}>
            {/* Konten di sini */}
        </div>
    );
}