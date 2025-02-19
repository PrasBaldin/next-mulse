import { useState, useEffect } from "react";
import IconDarkMode from "../assets/icon/iconDarkmode";
import IconLightMode from "../assets/icon/iconLightmode";

const ToggleNightModeMobile = () => {
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
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="btn w-11 h-11 relative overflow-hidden">
            <div className={`toggle-dark-mode-mobile gap-2 ${isDarkMode ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`} >
                <IconLightMode />
                {/* <span>Light Mode</span> */}
            </div>
            <div className={`toggle-dark-mode-mobile gap-2 ${isDarkMode ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`} >
                <IconDarkMode />
                {/* <span>Night Mode</span> */}
            </div>
        </button>
    )
}

export default ToggleNightModeMobile