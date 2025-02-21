"use client";
import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
    text: string;
    speed?: number;
    className?: string;
    delay?: number;
}

export default function Typewriter({
    text,
    speed = 10,
    className = "",
    delay = 0,
}: TypewriterProps) {
    const [displayText, setDisplayText] = useState<string>("");
    const indexRef = useRef<number>(0);

    useEffect(() => {
        setDisplayText("");
        indexRef.current = 0;

        let animationFrameId: number;
        let lastTime: number = performance.now();

        const update = (now: number) => {
            // Hanya update jika tab aktif
            if (document.visibilityState === "hidden") {
                animationFrameId = requestAnimationFrame(update);
                return;
            }

            if (now - lastTime >= speed) {
                setDisplayText((prev) => prev + text.charAt(indexRef.current));
                indexRef.current++;
                lastTime = now;
            }

            if (indexRef.current < text.length) {
                animationFrameId = requestAnimationFrame(update);
            }
        };

        const timeoutId = setTimeout(() => {
            animationFrameId = requestAnimationFrame(update);
        }, delay);

        return () => {
            clearTimeout(timeoutId);
            cancelAnimationFrame(animationFrameId);
        };
    }, [text, speed, delay]);

    return <span className={className}>{displayText}</span>;
}