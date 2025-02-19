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
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="btn flex items-center">
            <div className="relative">
                <div className="flex items-center gap-2">
                    <div className={`toggle-dark-mode-mobile w-full gap-2 ${isDarkMode ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`} >
                        <IconLightMode />
                    </div>
                    <span className={`text-gray-700 dark:text-gray-300 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>Light Mode</span>
                </div>
                <div className={`toggle-dark-mode-mobile w-full gap-2 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`} >
                    <IconDarkMode />
                    <span className={`text-gray-700 dark:text-gray-300 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>Night Mode</span>
                </div>
            </div>
        </button>
    )
}

export default ToggleNightModeMobile
// {isDarkMode ? (
//     <>
//         <div className={`toggle-dark-mode-mobile gap-2 ${isDarkMode ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`} >
//             <IconLightMode />
//             <span className="text-gray-700 dark:text-gray-300">Light Mode</span>
//         </div>
//     </>
// ) : (
//     <>
//         <div className={`toggle-dark-mode-mobile gap-2 ${isDarkMode ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`} >
//             <IconDarkMode />
//             <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
//         </div>
//     </>
// )}
