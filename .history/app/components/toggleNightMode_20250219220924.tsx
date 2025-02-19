"use client";

import { useState, useEffect } from "react";
import IconDarkMode from "../assets/icon/iconDarkmode";
import IconLightMode from "../assets/icon/iconLightmode";

const ToggleNightMode = () => {
    function useMediaQuery(query) {
        const [matches, setMatches] = useState(false);

        useEffect(() => {
            if (typeof window === "undefined") return;
            const media = window.matchMedia(query);
            // Set nilai awal
            setMatches(media.matches);
            // Update ketika query berubah
            const handleChange = (e) => setMatches(e.matches);
            media.addEventListener("change", handleChange);
            return () => media.removeEventListener("change", handleChange);
        }, [query]);

        return matches;
    }

    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark';
        }
        return false;
    });


    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    return (
        <button onClick={() => setIsDarkMode(!isDarkMode)} className={`btn h-11 ${isMobile ? 'flex items-center' : 'w-11  relative overflow-hidden'} `}>
            {isMobile ? (
                <div className="block">
                    <div className="absolute flex items-center gap-2">
                        <div className={`toggle-dark-mode-mobile gap-2 ${isDarkMode ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`} >
                            <IconLightMode />
                        </div>
                        <span className={`lg:hidden text-gray-700 dark:text-gray-300 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>Light Mode</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className={`toggle-dark-mode-mobile gap-2 ${isDarkMode ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`} >
                            <IconDarkMode />
                        </div>
                        <span className={`lg:hidden text-gray-700 dark:text-gray-300 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}>Night Mode</span>
                    </div>
                </div>
            ) : (
                <>
                    <div className={`toggle-dark-mode ${isDarkMode ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`} >
                        <IconLightMode />
                    </div>
                    <div className={`toggle-dark-mode ${isDarkMode ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`} >
                        <IconDarkMode />
                    </div>
                </>
            )
            }
        </button >
    )
}

export default ToggleNightMode