"use client";
import { useState, useEffect } from "react";

import IconEN from "../assets/icon/iconEN";
import IconID from "../assets/icon/iconID";

import "./toggleLanguage.css";

const ToggleLanguage = () => {
    const [isEnglish, setIsEnglish] = useState(() => {
        // Cek localStorage untuk bahasa
        if (typeof window !== 'undefined') {
            return localStorage.getItem('language') === 'en';
        }
        return true;
    });

    // Effect untuk menyimpan preferensi bahasa ke localStorage
    useEffect(() => {
        localStorage.setItem('language', isEnglish ? 'en' : 'id');
    }, [isEnglish]);

    return (
        <>
            {/* Mobile */}
            <button onClick={() => setIsEnglish(!isEnglish)} className="lg:hidden btn flex items-center gap-2" >
                {/* <span className="font-medium text-gray-700 dark:text-gray-300">
                    {isEnglish ? <IconEN /> : <IconID />}
                </span> */}
                <div className={`toggle-lang ${isEnglish ? 'opacity-100 scale-1' : 'opacity-0 scale-0'}`} >
                    <IconEN />
                </div>
                <div className={`toggle-lang ${isEnglish ? 'opacity-0 scale-0' : 'opacity-100 scale-1'}`} >
                    <IconID />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                    {("navbar.changeLang")}
                </span>
            </button>

            {/* Desktop */}
            <button onClick={() => setIsEnglish(!isEnglish)} className="hidden lg:block btn w-11 h-11 relative overflow-hidden">
                <div className={`toggle-lang ${isEnglish ? 'opacity-100 scale-1' : 'opacity-0 scale-0'}`} >
                    <IconEN />
                </div>
                <div className={`toggle-lang ${isEnglish ? 'opacity-0 scale-0' : 'opacity-100 scale-1'}`} >
                    <IconID />
                </div>
            </button>
        </>
    )
}

export default ToggleLanguage