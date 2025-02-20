"use client";
import { useState, useEffect } from "react";

import IconEN from "../app/_assets/icon/iconEN";
import IconID from "../app/_assets/icon/iconID";

import "./toggleLanguage.css";

const ToggleLanguage = () => {
    const [isEnglish, setIsEnglish] = useState(true);

    // Efek untuk sinkronisasi bahasa dengan localStorage
    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        setIsEnglish(storedLanguage === 'en');
    }, []);

    // Efek untuk menyimpan preferensi bahasa ke localStorage
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
                <div className="flex relative">
                    <div className={`flex transition-all duration-500 transform ${isEnglish ? 'opacity-100 scale-1' : 'opacity-0 scale-0'}`} >
                        <IconEN />
                    </div>
                    <div className={`absolute flex transition-all duration-500 transform ${isEnglish ? 'opacity-0 scale-0' : 'opacity-100 scale-1'}`} >
                        <IconID />
                    </div>
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