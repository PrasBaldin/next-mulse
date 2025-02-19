import { useState, useEffect } from "react";
import IconDarkMode from "../assets/icon/iconDarkmode";
import IconLightMode from "../assets/icon/iconLightmode";

import "./toggleDarkMode.css";

const ToggleDarkMode = () => {
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
        <>
            {/* Mobile */}
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="lg:hidden btn h-11 flex items-center">
                <div className="block">
                    <div className="absolute flex items-center gap-2">
                        <div className={`toggle-dark-mode-mobile gap-2 ${isDarkMode ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`} >
                            <IconLightMode />
                        </div>
                        <span className={`text-gray-700 dark:text-gray-300 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>Light Mode</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className={`toggle-dark-mode-mobile gap-2 ${isDarkMode ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`} >
                            <IconDarkMode />
                        </div>
                        <span className={`text-gray-700 dark:text-gray-300 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}>Night Mode</span>
                    </div>
                </div>
            </button>
            {/* Desktop */}
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="hidden lg:block btn w-11 h-11 relative overflow-hidden">
                <div className={`toggle-dark-mode ${isDarkMode ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`} >
                    <IconLightMode />
                </div>
                <div className={`toggle-dark-mode ${isDarkMode ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`} >
                    <IconDarkMode />
                </div>
            </button>
        </>
    )
}

export default ToggleDarkMode