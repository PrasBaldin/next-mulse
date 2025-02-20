import { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";

import IconEN from "../assets/icon/iconEN";
import IconID from "../assets/icon/iconID";

import "./toggleLanguage.css";

const ToggleLanguage = () => {
    const [isEnglish] = useState(true);

    useEffect(() => {
        localStorage.setItem('language', isEnglish ? 'en' : 'id');
    }, [isEnglish]);
    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'id' : 'en'));
    };

    return (
        <>
            {/* Mobile */}
            <button className="lg:hidden btn flex items-center gap-2" >
                <span className="font-medium text-gray-700 dark:text-gray-300">
                    {isEnglish ? <IconEN /> : <IconID />}
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                    {("navbar.changeLang")}
                </span>
            </button>

            {/* Desktop */}
            <button className="hidden lg:block btn w-11 h-11 relative overflow-hidden">
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